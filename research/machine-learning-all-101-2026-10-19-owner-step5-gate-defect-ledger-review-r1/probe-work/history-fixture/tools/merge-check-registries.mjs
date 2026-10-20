// Pure merge: call before any object spread can hide a duplicate key.
export function mergeCheckRegistries(groups) {
  if (!Array.isArray(groups) || groups.length === 0) throw Error('Expected named check registries');
  const registry = Object.create(null), owner = new Map();
  for (const group of groups) {
    if (!Array.isArray(group) || group.length !== 2) throw Error('Expected [owner, registry]');
    const [name, checks] = group;
    if (typeof name !== 'string' || !name.trim() || !checks || typeof checks !== 'object' || Array.isArray(checks)) throw Error('Invalid named check registry');
    for (const [key, check] of Object.entries(checks)) {
      if (!key.trim() || typeof check !== 'function') throw Error(`Invalid finite check ${name}:${key}`);
      if (owner.has(key)) throw Error(`Duplicate finite check ${key}: ${owner.get(key)} and ${name}`);
      registry[key] = check;
      owner.set(key, name);
    }
  }
  return Object.freeze(registry);
}
