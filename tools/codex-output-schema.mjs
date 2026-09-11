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
    if (node.type === 'object' && node.properties && typeof node.properties === 'object') {
      const declared = Object.keys(node.properties);
      const required = Array.isArray(node.required) ? node.required : [];
      const omitted = declared.filter((key) => !required.includes(key));
      if (omitted.length) {
        problems.push(`${path}: required must include every property for Codex structured output; missing ${omitted.join(', ')}`);
      }
    }

    for (const [key, value] of Object.entries(node)) walk(value, `${path}.${key}`);
  };

  if (!schema || typeof schema !== 'object' || Array.isArray(schema)) {
    return ['$: output schema must be a JSON object'];
  }
  walk(schema, '$');
  return problems;
}

// Providers may wrap an otherwise exact response in one Markdown JSON block.
// Never guess between multiple candidates or repair the contents of the JSON.
export function parseCodexOutput(text) {
  try { return JSON.parse(text); } catch (original) {
    const blocks = [...text.matchAll(/^```(?:json)?[ \t]*\r?\n([\s\S]*?)^```[ \t]*$/gm)];
    if (blocks.length !== 1) throw original;
    return JSON.parse(blocks[0][1]);
  }
}

export function validateCodexOutput(value, schema, path = '$') {
  const errors = [];
  if (schema === true) return errors;
  if (schema === false) return [`${path}: forbidden value`];
  const types = Array.isArray(schema.type) ? schema.type : [schema.type];
  const matches = (type) => type === undefined || (type === 'null' ? value === null
    : type === 'array' ? Array.isArray(value)
      : type === 'object' ? value !== null && typeof value === 'object' && !Array.isArray(value)
        : type === 'integer' ? Number.isInteger(value) : typeof value === type);
  if (!types.some(matches)) return [`${path}: expected ${types.join('|')}`];
  if (schema.enum && !schema.enum.some((entry) => JSON.stringify(entry) === JSON.stringify(value))) errors.push(`${path}: not an allowed enum value`);
  if ('const' in schema && JSON.stringify(schema.const) !== JSON.stringify(value)) errors.push(`${path}: wrong constant`);
  if (Array.isArray(value) && schema.items) value.forEach((entry, index) => errors.push(...validateCodexOutput(entry, schema.items, `${path}[${index}]`)));
  if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
    for (const key of schema.required ?? []) if (!Object.hasOwn(value, key)) errors.push(`${path}.${key}: required field missing`);
    for (const [key, entry] of Object.entries(value)) {
      const child = schema.properties?.[key];
      if (child !== undefined) errors.push(...validateCodexOutput(entry, child, `${path}.${key}`));
      else if (schema.additionalProperties === false) errors.push(`${path}.${key}: unexpected field`);
      else if (schema.additionalProperties && typeof schema.additionalProperties === 'object') errors.push(...validateCodexOutput(entry, schema.additionalProperties, `${path}.${key}`));
    }
  }
  return errors;
}
