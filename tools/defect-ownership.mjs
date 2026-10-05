/** Resolve append-only ownership corrections without deleting history.
 *
 * A correction row may supersede earlier rows for the same run and subject.
 * The earlier rows remain part of the audit trail, but only the newest active
 * row owns an adjudication. Requiring backward references prevents a row from
 * hiding a future or unrelated defect. */
export function activeOwnershipRows(rows, errs) {
  const seen = new Map();
  const superseded = new Set();
  for (const row of rows) {
    if (row.supersedes !== undefined) {
      if (!Array.isArray(row.supersedes) || !row.supersedes.length
        || new Set(row.supersedes).size !== row.supersedes.length
        || row.supersedes.some((id) => typeof id !== 'string' || !id)) {
        errs.push(`${row.defect_id}: supersedes must be a nonempty array of unique defect ids`);
      } else {
        for (const id of row.supersedes) {
          const prior = seen.get(id);
          if (!prior) errs.push(`${row.defect_id}: supersedes ${id}, which is not an earlier ledger row`);
          else if (prior.run !== row.run || prior.subject !== row.subject) {
            errs.push(`${row.defect_id}: may supersede only an earlier row for the same run and subject`);
          } else superseded.add(id);
        }
      }
    }
    if (row.defect_id) seen.set(row.defect_id, row);
  }
  return rows.filter((row) => !superseded.has(row.defect_id));
}

