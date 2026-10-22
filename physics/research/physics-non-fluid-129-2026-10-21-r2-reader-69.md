# Step 3a reader report — batch 69

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: `qftx-reflection-positive-limits` and its examples companion

## Opened inventory

Pages reviewed:

- `library/quantum-field-theory-mathematics/qftx-reflection-positive-limits.md` (A)
- `library/quantum-field-theory-mathematics/qftx-reflection-positive-limits-examples.md` (B)
- Page prerequisites `qft-ir02` and `qft-mc02` in the same category.

Assigned items reviewed in dependency-level order:

- Level 0: `lem-qftx-tempered-tensor-products`; `def-qftx-euclidean-limit-data`.
- Level 1: `prop-qftx-reflection-positivity-limit`; `prop-qftx-free-euclidean-reflection-positive`; `cex-qftx-positive-not-reflection-positive`.

The direct mathematical prerequisites were opened in their current imported or
local carriers: the Schwartz-space and topology definitions; tempered
distributions; test-function cutoffs and product-test density; tensor products
of distributions; the positive-tempered-moment and finite Gaussian-measure
definitions; finite Gaussian Wick moments; the Axiom of Choice and multivariate
normal law; and the Fourier-transform definition, Schwartz automorphism, and
Fourier inversion. I also checked the stated Gaussian characteristic-function
and moment-derivative interfaces used by the Wick supplier. The relevant
import entries are present in `research/math-imports.json`; no mathematical
supplier was edited.

Source passages checked against the local arguments:

- Dyatlov, *Lecture Notes for 18.155*, Theorem 7.1, printed pp. 77–79, and
  Exercise 11.5(b), printed p. 135: [source PDF](https://math.mit.edu/~dyatlov/18.155/155-notes.pdf).
  The exercise is not treated as a proof; the assigned lemma supplies the
  tempered extension and its Schwartz estimates locally.
- Neeb and Ólafsson, *Reflection Positivity—A Representation Theoretic
  Perspective*, Definition 2.4.5 and Example 2.4.7, PDF pp. 20–22:
  [source PDF](https://arxiv.org/pdf/1802.09037). Their massive-resolvent
  reflection-positivity example agrees with the local kernel and half-space
  calculation.
- Summers, *A Perspective on Constructive Quantum Field Theory*, §3 opening,
  PDF pp. 9–10: [source PDF](https://arxiv.org/pdf/1203.3991). This supports the
  separation of Schwinger distributions, reflection positivity, measure
  existence, clustering, and the linear-growth caveat.
- Jaffe, *Constructive Quantum Field Theory*, §4, equation (8), PDF pp. 5–6:
  [source PDF](https://arthurjaffe.net/Assets/pdf/CQFT.pdf). The local argument
  proves the stronger polynomial Gaussian conclusion itself; the citation is
  used as free-covariance context.

## Review and repair

- `lem-qftx-tempered-tensor-products`: the continuity estimate for the iterated
  pairing follows from finite Schwartz-seminorm bounds on each functional.
  The proof then establishes compact-test agreement, product-test density for
  uniqueness, and associativity. The cited Dyatlov exercise leaves the
  tempered claim to the reader, and the assigned proof supplies the needed
  global estimates.
- `def-qftx-euclidean-limit-data`: the spaces, algebra involutions, ordinary
  and reflected positivity forms, regulator family, symmetry actions, and
  clustering condition are explicitly stated. One comparison sentence
  incorrectly described the uniform-order bound on the limit hierarchy as
  “the stronger” condition after defining a per-order record that instead
  bounds the entire regulator family uniformly in its index. These conditions
  are not comparable without extra hypotheses. For one explicit direction,
  take $d=1$, $S_0=1$, $S_1=\delta_0$, and $S_n=0$ for $n\ge2$; this
  limit satisfies the displayed uniform-order estimate. Index a net by
  $\Lambda=\mathbb N\cup\{\infty\}$, with each integer below the terminal
  $\infty$ and distinct integers incomparable. At $\infty$, set
  $S^\infty=S$; at integer $j$, set $S^j_0=1$, $S^j_1=j\delta_0$, and
  $S^j_n=0$ for $n\ge2$. The net converges to $S$, but no per-order
  constant can bound the order-one family uniformly in $j$. Conversely, for
  $d=1$ the constant family with $S_0=1$ and
  $S_n=\partial_{x_1}^{n^2}\delta_0$ on $\mathbb R^n$ has per-order continuity
  records, but for every fixed $s$ its order-$n$ functional for $n>s$ cannot be
  bounded by $P_{sn}$: scaled compactly supported tests keep that derivative
  evaluation fixed while all seminorms of order at most $sn$ tend to zero.
  Thus it cannot satisfy the displayed uniform-order bound. I changed the sentence to define
  the uniform-order bound as a separate cross-order condition on the limit
  hierarchy, leaving its displayed estimate unchanged.
- `prop-qftx-reflection-positivity-limit`: for each fixed positive-time
  polynomial, the reflected form is a finite sum of fixed-order pairings, so
  pointwise convergence passes its nonnegative real value to the limit.
  Fixed continuous Euclidean pullbacks and argument permutations pass by the
  same finite-test limit. The proof does not claim clustering or a bound
  uniform in order.
- `prop-qftx-free-euclidean-reflection-positive`: the Fourier restriction
  defining the covariance is absolutely convergent and continuous on Schwartz
  space; the product covariance is positive; and its reflected two-point form
  is the stated Laplace Gram form. The finite Gaussian Wick identity then
  yields nonnegative symmetric-tensor norms for every positive-time
  polynomial. The claim is limited to the moment hierarchy and asserts neither
  a probability measure on distribution space nor reconstruction.
- `cex-qftx-positive-not-reflection-positive`: all four weights are positive
  and normalized; the covariance is positive definite for (0<r<1); and the
  positive-site witness (Y) gives reflected value (-r<0). This is a finite
  mathematical counterexample, not an empirical claim.

The direct batch-69 consumers of the repaired definition were checked against
the unchanged defined objects. I also inspected the direct batch-70 contract
consumer and its downstream (L^2) counterexample for impact: they use the
separate per-order/uniform-order requirements and do not rely on the removed
comparison. No batch-70 file was changed.

The definition's contract summary was updated, along with the exact copied
definition citations in the affected batch-69 contracts for
`prop-qftx-free-euclidean-reflection-positive` and
`cex-qftx-positive-not-reflection-positive`. No stale
`verification.judge` record was present on the repaired definition.

Required checks after the repair:

- Reflow: unchanged.
- Precheck: 0 checked, 0 failing (the changed item is a definition with no
  proof steps).
- Proof layout: 1 item, 0 steps, 0 defects.

No TikZ/tikzcd diagrams occur in the assigned items or page files.

## Page verdicts

- `qftx-reflection-positive-limits` (A): acceptable after the definition
  wording repair. Its four listed items, page prerequisites, and dependency
  order are consistent with the assigned manifest.
- `qftx-reflection-positive-limits-examples` (B): acceptable. It contains the
  assigned finite counterexample and requires its A companion; no page prose
  or additional diagram is present.

## Uneditable defects and blockers

No confirmed defect remains that I could not edit. No blocker remains.

## Coverage note

The assigned files were initially opened together before their direct supplier
files; the mathematical checks were completed after reading the supplier
statements and relevant proofs. I did not reopen the assigned files, consistent
with the one-read instruction. I reviewed the direct dependencies and
transitive interfaces needed for the claims, not the complete proofs of every
transitive published mathematical supplier. For the cited PDFs I checked the
specific locators listed above, not every page of each source. The findings
artifact therefore records no claim of a complete 1,571-item dependency audit.
