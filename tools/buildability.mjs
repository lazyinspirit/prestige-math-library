// The permanent page-buildability predicate shared by Step 0 and Stage 1.
// A page with no external dependencies is vacuously fully published. Otherwise
// the published share must be STRICTLY greater than 95%; exactly 95% fails.

export const BUILDABLE_PUBLISHED_PERCENT = 95;

/** A page's `requires`, excluding only its partner inside the A/B pair. */
export function externalDependencies(page, partnerId) {
  return [...new Set(page?.requires ?? [])].filter((id) => id !== partnerId);
}

export function pageBuildability(page, partnerId, published) {
  const dependencies = externalDependencies(page, partnerId);
  const publishedDependencies = dependencies.filter((id) => published.has(id));
  const unpublishedDependencies = dependencies.filter((id) => !published.has(id));
  const buildable = dependencies.length === 0
    || publishedDependencies.length * 100 > dependencies.length * BUILDABLE_PUBLISHED_PERCENT;
  return {
    buildable,
    dependencies,
    publishedDependencies,
    unpublishedDependencies,
    publishedCount: publishedDependencies.length,
    dependencyCount: dependencies.length,
  };
}
