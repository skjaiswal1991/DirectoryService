import { UserRepository } from "../repository/user.repository";
import { IUserBussiness } from "./interfaces/user.bussiness.interface";
import { IUserInterface } from "../models/Interfaces/user.interface";

export default class UserBussiness implements IUserBussiness {
  private _bussinessRepository: UserRepository;

  constructor() {
    this._bussinessRepository = new UserRepository();
  }

  create(item: IUserInterface, callback: (error: any, result: any) => void) {
    this._bussinessRepository.create(item, callback);
  }

  update(
    _id: string,
    item: IUserInterface,
    callback: (error: any, result: any) => void
  ) {
    this._bussinessRepository.findOne(_id, (err, res) => {
      if (err) callback(err, res);
      else this._bussinessRepository.update(res._id, item, callback);
    });
  }

  find(
    callback: (error: any, result: Array<IUserInterface>) => void,
    queryObject = {},
    withOption: boolean = false
  ) {
    withOption
      ? this._bussinessRepository.findByOption(callback, queryObject)
      : this._bussinessRepository.find(callback);
  }

 

  findOne(_id: string, callback: (error: any, result: IUserInterface) => void) {
    this._bussinessRepository.findOne(_id, callback);
  }

  delete(_id: string, callback: (error: any, result: any) => void) {
    this._bussinessRepository.delete(_id, callback);
  }

  findOneAndUpdate(
    _id: string,
    doc,
    callback: (error: any, result: any) => void
  ) {
    this._bussinessRepository.findOneAndUpdate(_id, doc, callback);
  }
}
