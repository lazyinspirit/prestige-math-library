## APP-RATIONAL — Barycentric rational and aaa approximation

A: `barycentric-rational-and-aaa-approximation`. B: `barycentric-rational-and-aaa-approximation-examples`.

### Scope

[
  "Define barycentric rational quotient with support nodes, weights, interpolation-at-support and removable-singularity convention; poles occur at zeros of denominator after cancellation.",
  "Define AAA on a finite distinct sample set: greedy max-residual support, Loewner matrix, minimum-singular-vector weights, tie and zero/rank-deficient branches, budget and residual stopping. Prove support interpolation and finite-sample termination/best small LS residual statements, not uniform off-grid convergence.",
  "Define Floater-Hormann rational interpolation on ordered real nodes with degree parameter and prove no real poles under the exact admissible construction; state an error bound with mesh ratio/smoothness constants.",
  "Define Padé coefficient matching with singular-system/defect branch; prove Taylor order only when moment system solvable, with no analytic-continuation/pole-location guarantee."
]

### Proof construction

Barycentric numerator/denominator algebra; SVD least-squares characterization; alternating denominator sign proof for Floater-Hormann; finite series coefficient matching.

### Examples

[
  "AAA transfer-function poles",
  "Small sample residual but large off-grid error",
  "Padé denominator failure and Froissart doublet"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-10` → `polynomial-interpolation-and-remainder` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-SVD` → `computed-singular-values-and-rank-revealing-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `APP-MINIMAX` → `minimax-approximation-and-remez-algorithms` (numerical-analysis; proposed same-frontier supplier, not a current library item).

No external library page token is recorded in `requires`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **APP-RATIONAL** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `APP-RATIONAL` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **APP-RATIONAL** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

### Current owner correction — Floater–Hormann rate (2026-10-17)

The proposed bound C(d,rho) h^(d+1)||f^(d+1)|| under C^(d+1) alone is false, including on uniform meshes for every fixed d; retain the explicit smooth-node-bump counterexample from this packet. Author the full no-real-pole proof for ordered distinct real nodes and the approved 0<=d<n weights. For a rate of order d+1, preserve C^(d+1) with finite total variation V of f^(d+1), using the locally proved simplex/variation lemma and its explicit bounds. Also supply the sharper Floater–Hormann C^(d+2) parity bounds. For d>=1 the source bound is h^(d+1)[(b-a)||f^(d+2)||/(d+2)+epsilon||f^(d+1)||/(d+1)]; for d=0 it is h(1+beta)[(b-a)||f''||/2+epsilon||f'||]. Here epsilon=1 when n-d is even, 0 otherwise; beta is the explicitly defined local mesh ratio, set to zero when n<=2. A fixed global mesh ratio rho bounds beta. No mesh-ratio restriction is needed for d>=1. State the BV extension as independently proved, not as a claim of the cited paper.

The local BV bounds are h^(d+1)[V+epsilon||f^(d+1)||]/(d+1) for d>=1 and h(1+beta)[V+epsilon||f'||] for d=0. Do not replace V by a constant times ||f^(d+1)|| without an additional quantitative assumption.

Keep AAA finite-sample and Padé scope/caveats unchanged. The source is the fully read author-hosted preprint https://www.mn.uio.no/math/english/people/aca/michaelf/papers/rational.pdf ; its no-pole proof is Theorem 1, its d>=1 source estimate Theorem 2, and d=0 estimate Theorem 3. Citations do not replace the locally reproduced proofs.

Full independently checked argument and counterexample: `research/numerical-analysis-remaining-71-2026-10-17-ROOT-rational-planning-cycle1/proof.md`. The old C^(d+1)-seminorm-only rate and residual hold in the historical specialist audit are superseded only by this scientific correction. Its original report and source record remain historical evidence. Author the local weight, denominator, divided-difference and simplex/variation suppliers before their within-proof uses. The same reviewer owns the only planned consumer, the B companion; every FH example must use an actual BV or C^(d+2) hypothesis. No item-level review or acceptance exists at this preauthor stage.
