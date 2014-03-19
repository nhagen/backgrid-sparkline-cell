Backgrid.SparkCell = Backgrid.Cell.extend({

  render: function() {
    this.$el.empty();
    var model = this.model,
        val = this.formatter.fromRaw(model.get(this.column.get('name')), model);
    this.$el.sparkline(val, { width: '100%' });
    this.delegateEvents();
    return this;
  }

});
