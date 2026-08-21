// The Codex structured-output endpoint accepts a strict JSON-Schema subset.
// Keep the local preflight deliberately evidence-based: every rule here is an
// error the endpoint has returned, so the validator prevents deterministic
// three-attempt failures without guessing at constraints the service accepts.

export function validateCodexOutputSchema(schema) {
  const problems = [];

  const walk = (node, path) => {
    if (Array.isArray(node)) {
      node.forEach((value, index) => walk(value, `${path}[${index}]`));
      return;
    }
    if (!node || typeof node !== 'object') return;

    if (Object.prototype.hasOwnProperty.call(node, 'const')
      && !Object.prototype.hasOwnProperty.call(node, 'type')) {
      problems.push(`${path}: a const schema must declare type explicitly`);
    }
    if (Object.prototype.hasOwnProperty.call(node, 'uniqueItems')) {
      problems.push(`${path}: uniqueItems is not supported by Codex structured output`);
    }

    for (const [key, value] of Object.entries(node)) walk(value, `${path}.${key}`);
  };

  if (!schema || typeof schema !== 'object' || Array.isArray(schema)) {
    return ['$: output schema must be a JSON object'];
  }
  walk(schema, '$');
  return problems;
}
