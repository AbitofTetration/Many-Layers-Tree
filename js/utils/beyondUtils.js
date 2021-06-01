function createUpgradeTable(index, height, width) {
    var table = []
    for (var x = 0; x < height; x++) {
        var row = ["row", []]
        for (var y = 1; y <= width; y++) {
            var upg = ["upgrade", index * 100 + x * 10 + y]
            row[1].push(upg)
        }
        table.push(row)
    }
    return table
}