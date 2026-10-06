# Alpha-g scope decision audit — frontier-39-analysis-30

Reviewed all 31 pending declines against the controlling PDE-18/PDE-20/RL-10
plans, current coverage and page manifests, item statements, and declared
dependencies. The rows break down as batch 12: 10, batch 14: 7, batch 24: 14.
All 31 stand; no current approved claim is missing, so none requires
proceed/merge/enrich and no item scope was expanded.

One stale handoff was corrected in the batch-12 coverage and notes: the
Dirichlet operator-domain identity is consumed conditionally by the batch-18
analytic-semigroup corollary under bounded C^2 boundary hypotheses. The
batch-17 heat example treats arbitrary bounded open domains and explicitly
does not identify the generator domain with a spatial H^2 space. The
higher-power domain claim is likewise handled conditionally by batch 18.

Batch 14's declines match PDE-20's stated interior, nonnegative-solution
scope; its deferred Lax-Milgram and H^2 rows have current batch-10 and batch-12
suppliers. Batch 24's omitted Duflo/localisation, nilpotent-orbit and fibre
claims remain outside RL-10's algebraic prefix, with no current item consuming
them.

Checks: `scope-decisions.mjs check --group g` reports 31 current declines and
0 errors; batch-12 `coverage-checklist --require-destination` reports 53
harvested results, 0 errors and 0 warnings.
