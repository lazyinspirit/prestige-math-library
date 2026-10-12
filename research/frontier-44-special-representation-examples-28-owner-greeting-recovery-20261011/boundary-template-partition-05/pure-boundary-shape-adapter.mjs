const STANDARD_BOUNDARIES=['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse'];const errors=[];const error=(code,message,id)=>errors.push({code,message,id});
function validateBoundaries(id, boundaries, steps) {
  if (!Array.isArray(boundaries)) {
    error('boundary-shape', '`boundaries` must be an array', id);
    return;
  }
  const seen = new Set();
  for (const boundary of boundaries) {
    if (!boundary || typeof boundary !== 'object' || Array.isArray(boundary)) {
      error('boundary-entry-shape', 'each boundary entry must be an object', id);
      continue;
    }
    const { case: name, status, evidence, reason } = boundary;
    if (!STANDARD_BOUNDARIES.includes(name)) {
      error('boundary-case', `${name ?? '(missing)'} is not a standard boundary case`, id);
      continue;
    }
    if (seen.has(name)) error('boundary-duplicate', `${name} is listed twice`, id);
    seen.add(name);
    if (!['checked', 'not_applicable'].includes(status)) error('boundary-status', `${name} must be checked or not_applicable`, id);
    if (status === 'checked') {
      if (typeof evidence !== 'string' || !evidence.trim()) error('boundary-evidence', `${name} needs evidence`, id);
      else {
        const references = [...evidence.matchAll(/(?:step\s+)?(\d+\.\d+)/g)].map((m) => m[1]);
        if (!references.length && !/statement|definition|example|counterexample/i.test(evidence)) {
          error('boundary-evidence-unanchored', `${name} evidence must name a step or statement`, id);
        }
        for (const stepId of references) if (!steps.has(stepId)) error('boundary-evidence-step-missing', `${name} names missing step ${stepId}`, id);
      }
    }
    if (status === 'not_applicable' && (typeof reason !== 'string' || !reason.trim())) {
      error('boundary-na-reason', `${name} needs a specific not_applicable reason`, id);
    }
  }
  for (const name of STANDARD_BOUNDARIES) if (!seen.has(name)) error('boundary-missing', `${name} has no worksheet disposition`, id);
}

export{validateBoundaries,errors};
