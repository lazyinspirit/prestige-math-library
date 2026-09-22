// Ownership comes from a detector's failing subject field, never an ID search
// over its output: citations, inventories and upheld records are not defects.
const ITEM = '(?:def|lem|thm|prop|cor|ex|cex|fs|rem)-[a-z0-9]+(?:-[a-z0-9]+)*';
const itemFile = new RegExp(`^(?:.*?/)?items/(${ITEM})\\.md(?::|$)`);
const errorHeader = new RegExp(`^ERROR\\s+[^\\s:]+(?:\\s+\\[(${ITEM})\\])?:`);

function subjectsFor(check, failure, valid) {
  const subjects = new Set();
  let ownerHeld = false;
  const rows = value => {
    if (!Array.isArray(value)) { ownerHeld = true; return []; }
    return value;
  };
  const add = id => { if (valid.has(id)) subjects.add(id); else ownerHeld = true; };
  const file = value => add(String(value ?? '').match(itemFile)?.[1]);
  const output = [failure.output, failure.stdout, failure.stderr].filter(x => typeof x === 'string').join('\n');
  let json;
  try { json = JSON.parse(output.trim()); } catch { /* Plain text is the default for most checks. */ }
  if (json && typeof json === 'object') {
    if (['proof-contract', 'finite-smoke', 'risk-report', 'judge-closure', 'rendercheck', 'fwdcheck'].includes(check)) {
      for (const row of rows(json.errors)) {
        if (!row || typeof row !== 'object') { ownerHeld = true; continue; }
        if (check === 'rendercheck') file(row.file);
        else if (check === 'fwdcheck') forward(row.code, row.msg);
        else add(row.id);
      }
    } else if (check === 'boundary-audit') {
      for (const row of rows(json.contradicted)) add(row?.id);
      for (const cluster of rows(json.templates)) for (const id of rows(cluster?.items)) add(id);
    } else if (check === 'citation-fidelity') {
      for (const row of [...rows(json.quote_not_found), ...rows(json.widening)]) add(row?.id);
    } else ownerHeld = true;
  } else {
    let section = '';
    const lines = output.split(/\r?\n/);
    const forwardHasSections = /\d+ ERROR\(s\):/.test(output);
    for (const line of lines) {
      const text = line.trim();
      if (/^(?:SyntaxError|TypeError|ReferenceError|RangeError|Error):/.test(text)) ownerHeld = true;
      if (/^ERROR\b/.test(text) && !['proof-contract', 'finite-smoke', 'risk-report', 'judge-closure'].includes(check)) ownerHeld = true;
      if (['proof-contract', 'finite-smoke', 'risk-report', 'judge-closure'].includes(check)) {
        const match = text.match(errorHeader);
        if (match) add(match[1]);
        else if (check === 'finite-smoke' && /^FAIL\s/.test(text)) add(text.match(new RegExp(`^FAIL \\[(${ITEM})\\]`))?.[1]);
        else if (/^(?:ERROR|FAIL)\b/.test(text)) ownerHeld = true;
      } else if (check === 'fwdcheck') {
        if (/^\d+ ERROR\(s\):/.test(text)) section = 'errors';
        if (/^\d+ warning\(s\):/.test(text)) section = 'warnings';
        const match = text.match(/^\[([^\]]+)\] (.*)$/);
        if (match && (!forwardHasSections || section === 'errors')) forward(match[1], match[2]);
      } else if (check === 'rendercheck') {
        // Text output prints warning and error blocks separated by a blank line.
        // The final block before the ERROR summary is the errors block.
        const errorBlock = output.split(/\n\s*\n/).filter(block => /^\s*\[[^\]]+\]/m.test(block)).at(-1) ?? '';
        for (const row of errorBlock.split('\n')) {
          const match = row.match(/^\s*\[[^\]]+\] (.*)$/);
          if (match) file(match[1]);
        }
        break;
      } else if (check === 'citation-fidelity' || check === 'boundary-audit') {
        if (/^(QUOTE NOT FOUND|WIDENING CANDIDATES|CONTRADICTED DISPOSITIONS|TEMPLATE REUSE)/.test(text)) section = 'failures';
        if (/^(UPHELD BY REVIEW|TEMPLATE CANDIDATES UPHELD)/.test(text)) section = 'upheld';
        if (section === 'failures') {
          const match = text.match(new RegExp(`^(${ITEM})\\s+\\[`));
          if (match) add(match[1]);
          if (check === 'boundary-audit' && text.startsWith('items: ')) {
            for (const id of text.slice(7).split(', ')) add(id);
            if (text.includes('…')) ownerHeld = true;
          }
        }
      } else if (check === 'step7-published') {
        const match = text.match(new RegExp(`^\x60(${ITEM})\x60(?: was repaired|:)`));
        if (match) add(match[1]);
        else if (line.startsWith('  ') && text) ownerHeld = true;
      } else if (/^step[578]-auditor-created-certifications$/.test(check)) {
        const match = text.match(new RegExp(`^(${ITEM}):`));
        if (match) add(match[1]);
        else if (text) ownerHeld = true;
      } else if (check === 'precheck') {
        const match = text.match(new RegExp(`^(?:FAIL|REPAIR)\\s+(?:\\[)?(?:items/)?(${ITEM})(?:\\.md)?(?:\\]|\\s|:|$)`));
        if (match) add(match[1]);
      } else ownerHeld = true;
    }
  }
  // Empty, malformed, unsupported and global failures remain assigned obligations.
  return { subjects: [...subjects].sort(), ownerHeld: ownerHeld || subjects.size === 0 };

  function forward(code, message) {
    if (code === 'forward-cycle') {
      const chain = String(message).match(/^CIRCULAR \(deps \+ load-bearing forward references\): (.*)$/)?.[1];
      if (chain) for (const id of chain.split(' -> ')) add(id);
      else ownerHeld = true;
    } else file(message);
  }
}

/** Flatten failing gate/advisory records without promoting mentioned suppliers. */
export function gateDiagnostics(failures, allIds) {
  const valid = new Set(allIds);
  const diagnostics = [];
  function visit(value) {
    if (Array.isArray(value)) { for (const row of value) visit(row); return; }
    if (value == null) return;
    const record = typeof value === 'object' ? value : { output: String(value) };
    const { advisory, ...failure } = record;
    if (record.ok !== true && !(record.ok == null && record.code === 0)) {
      const check = String(record.id ?? record.check ?? 'unknown');
      const ownership=subjectsFor(check, failure, valid);
      if(failure.frontierScope?.global?.length)ownership.ownerHeld=true;
      diagnostics.push({ index: diagnostics.length, id: check, check, ...ownership, failure });
    }
    visit(advisory);
  }
  visit(failures);
  return diagnostics;
}
