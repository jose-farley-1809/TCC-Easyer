type DataTypes = Array<any> | string | object

export class ResponseImplementation {
	public data: DataTypes;
	public has_error: boolean;
	public error: any;

	constructor(data: DataTypes, has_error: boolean, error?: any) {
		Object.assign(this, { data, has_error, error });
	}
}
