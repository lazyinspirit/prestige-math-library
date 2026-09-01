// The permanent page-buildability predicate shared by Step 0 and Stage 1.
// A page with no same-category dependencies is vacuously fully published.
// Otherwise the published share must be STRICTLY greater than 95%; exactly 95%
// fails. Cross-category citation edges do not serialize category frontiers.

export const BUILDABLE_PUBLISHED_PERCENT = 95;

/** A page's build-order dependencies.
 *
 * Category boundaries are independent build roots. A `requires` edge to a
 * page in another category remains mathematical citation information, but it
 * does not serialize the two categories for frontier selection. Unknown
 * targets remain dependencies so a misspelled or absent page still fails
 * closed instead of disappearing from the denominator.
 */
export function externalDependencies(page, partnerId, pageById) {
  return [...new Set(page?.requires ?? [])]
    .filter((id) => id !== partnerId)
    .filter((id) => {
      const target = pageById?.get(id);
      return !target || target.category === page.category;
    });
}

export function pageBuildability(page, partnerId, published, pageById) {
  const dependencies = externalDependencies(page, partnerId, pageById);
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
