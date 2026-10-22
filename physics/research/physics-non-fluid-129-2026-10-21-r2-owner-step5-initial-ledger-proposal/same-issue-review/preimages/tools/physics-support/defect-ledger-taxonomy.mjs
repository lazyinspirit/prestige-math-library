import { createHash } from 'node:crypto';
import { activeOwnershipRows } from '../defect-ledger-ownership.mjs';

export const rowSha256 = row => createHash('sha256').update(JSON.stringify(row)).digest('hex');
const taxonomyFields = new Set(['class', 'subclass', 'location', 'subclass_note', 'location_note']);

/** Resolve sealed decision IDs only through proved taxonomy-only corrections.
 * Ordinary substantive supersession still requires its own current decision. */
export function taxonomyOwnership(rows, errors) {
  const activeRows = activeOwnershipRows(rows, errors);
  const activeIds = new Set(activeRows.map(row => row.defect_id));
  const seen = new Map();
  const successors = new Map();
  for (const row of rows) {
    if (seen.has(row.defect_id)) errors.push(`duplicate defect_id ${row.defect_id}`);
    const correction = row.metadata_correction;
    if (correction !== undefined) {
      const prior = seen.get(correction?.original_defect_id);
      const fields = correction?.corrected_fields;
      const validFields = Array.isArray(fields) && fields.length > 0
        && new Set(fields).size === fields.length && fields.every(field => taxonomyFields.has(field));
      let valid = correction?.kind === 'taxonomy-only' && prior
        && row.run === prior.run && row.subject === prior.subject
        && row.supersedes?.length === 1 && row.supersedes[0] === prior.defect_id
        && correction.original_row_sha256 === rowSha256(prior) && validFields;
      if (valid) {
        const substantive = value => Object.fromEntries(Object.entries(value).filter(([key]) =>
          !['defect_id', 'supersedes', 'metadata_correction', ...fields].includes(key)));
        valid = JSON.stringify(substantive(prior)) === JSON.stringify(substantive(row))
          && fields.every(field => JSON.stringify(prior[field]) !== JSON.stringify(row[field]));
      }
      if (!valid || successors.has(prior?.defect_id)) {
        errors.push(`${row.defect_id}: invalid or ambiguous taxonomy-only correction lineage`);
      } else successors.set(prior.defect_id, row.defect_id);
    }
    seen.set(row.defect_id, row);
  }
  return {
    activeRows,
    resolveDefectId(id) {
      const visited = new Set();
      while (!activeIds.has(id) && successors.has(id) && !visited.has(id)) {
        visited.add(id);
        id = successors.get(id);
      }
      return activeIds.has(id) ? id : null;
    },
  };
}
