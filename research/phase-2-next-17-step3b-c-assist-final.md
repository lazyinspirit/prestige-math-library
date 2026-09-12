# phase-2-next-17 — Step 3b group C final disjoint authoring continuation

Dispatch: `step3b-c-fa0fc0a38e97ce50`  
Owned batch: 7  
Role: supplemental author only; no Step-3 gate or independent-audit claim

## Checkpoint after the owned item

- ID: `fs-the-exponential-map-is-defined-on-all-of-tm-for-every-riemannian-manifold`.
- Ownership check: the reserved item was absent at the initial check and was
  confirmed absent again immediately before creation. The authorized handoff
  path was also absent. No concurrent file was overwritten.
- Required authored suppliers: `def-domain-and-exponential-map-of-a-connection`
  and `thm-hopf-rinow` existed and were read in full before writing. Their file
  SHA-256 values at that read were respectively
  `8b66c71721051469b5cead9417c570f4ccadc737cec7a79a1353b16e13bb3eed`
  and
  `41aca077ce1395dd83159d3d8903771a0922df08073592c8a4057b0f7e73d71a`.
  The current non-owner repaired item decision for `thm-hopf-rinow` was also
  inspected; this handoff does not reproduce or replace that decision.
- Preserved false claim: for every Riemannian manifold without boundary, the
  exponential domain is all of $TM$.
- Correct qualification: under the current library's
  $\mathrm{AC}_\omega$ interfaces, global exponential domain is equivalent to
  geodesic completeness on every nonempty connected component.
- Exact counterexample: $M=(-1,1)$ with $g=dx^2$, $p=0$, and
  $v=\partial_x|_0$. The Levi--Civita coefficient is
  $\Gamma^1{}_{11}=0$, so $\gamma(t)=t$ is the unit-speed geodesic with this
  initial data. Uniqueness, maximality, and the continuity obstruction at both
  missing endpoints prove $I_{0,v}=(-1,1)$. Therefore
  $1\notin I_{0,v}$, so $v\notin\mathcal E$ although $v\in TM$.
- Choice: the library's $\mathrm{AC}_\omega$ assumption is propagated and is
  used only through the current maximal-geodesic/exponential definition and
  Hopf--Rinow supplier. The interval, vector, curve, Christoffel calculation,
  and maximal-extension obstruction are explicit and make no choices.
- Decision: fully authored and locally checked, pending serial integration by
  the active group-D author or owner. This supplemental dispatch records no
  item decision.

The final item SHA-256 at handoff preparation is
`beabf56041987d3d4a085cfff4b37d480e9a33ee246d615cf5fe0f1d03c352b4`.

## Source reading and qualification

The live Ved Datar PDF was fetched over HTTPS and checked as a 1,206,685-byte,
290-page PDF with SHA-256
`fab4114ca5142b8ee1b7eca52daa559494cf012fcde9318ad87c7c97a7652050`.
The following complete relevant passages were read in bounded page ranges:

1. Definition 15.1.1 and Example 15.1.3, printed pp. 113--114 (PDF
   pp. 121--122): the coordinate geodesic equation and the straight-line
   Euclidean solutions.
2. Definition 17.1.2 and its surrounding definition passage, printed
   pp. 127--128 (PDF pp. 135--136): the time-one exponential domain
   $\mathcal E$ and the map $\exp:\mathcal E\to M$.
3. Theorem 19.2.1 and its complete proof, printed pp. 141--144 (PDF
   pp. 149--152): the equivalence of metric completeness, geodesic
   completeness, and global fibre exponential domains, together with the
   minimizing-geodesic and compactness arguments.

Datar does not state the open-interval counterexample used here and does not
discuss $\mathrm{AC}_\omega$. The witness, proof of its exact maximal interval,
componentwise formulation, empty/zero-dimensional analysis, and choice
bookkeeping are local derivations and are not attributed to that source. The
downloaded temporary PDF was removed after inspection.

## Scaffold audit and canonical integration obligation

The scaffold retained all three promised dependencies and all are used:

1. `def-domain-and-exponential-map-of-a-connection` supplies the unique
   maximal geodesic notation and the exact time-one membership test.
2. `prop-coordinate-geodesic-equation` verifies the explicit straight-line
   geodesic after the Christoffel calculation.
3. `thm-hopf-rinow` supplies both directions of the corrected completeness
   qualification; it is not used as a substitute for the counterexample.

The completed proof exposed five additional direct inputs needed for
well-definedness and assumption propagation:

1. `def-countable-choice` names the explicitly retained
   $\mathrm{AC}_\omega$ assumption.
2. `prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure`
   proves that $(-1,1)$ is a boundaryless smooth one-manifold.
3. `def-riemannian-metric-and-riemannian-manifold` verifies that $dx^2$ is a
   Riemannian metric.
4. `prop-christoffel-formula-for-the-levi-civita-connection` computes the zero
   Levi--Civita coefficient from the constant metric coefficient.
5. `prop-components-of-a-topological-manifold-are-open-and-at-most-countable`
   justifies applying the connected Hopf--Rinow theorem componentwise.

The item frontmatter therefore declares this exact dependency list, which the
serial integrator must copy into the batch-7 manifest entry in the same order:

1. `def-countable-choice`
2. `prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure`
3. `def-riemannian-metric-and-riemannian-manifold`
4. `prop-christoffel-formula-for-the-levi-civita-connection`
5. `prop-coordinate-geodesic-equation`
6. `def-domain-and-exponential-map-of-a-connection`
7. `prop-components-of-a-topological-manifold-are-open-and-at-most-countable`
8. `thm-hopf-rinow`

The three in-run suppliers are earlier items on the same batch-7 A page; the
other five are published. Consequently this item creates no cross-batch edge
and needs no target-specific row in
`research/phase-2-next-17-batch-7.cross-batch-dependencies.json`. The serial
integrator should nevertheless retain the same-page order. The canonical A
page and manifest position is after
`fs-every-affinely-reparametrized-geodesic-remains-unit-speed` and before
`fs-normal-coordinates-make-the-metric-euclidean-throughout-the-chart`.

Coverage should add a Datar content row with this data:

- name: `Open Euclidean interval refutes a global exponential domain`
- item:
  `fs-the-exponential-map-is-defined-on-all-of-tm-for-every-riemannian-manifold`
- locator: `Definition 15.1.1 and Example 15.1.3, printed pp. 113--114;
  Definition 17.1.2, printed pp. 127--128; Theorem 19.2.1 and proof, printed
  pp. 141--144`
- disposition: `included`
- support: the source supplies the Euclidean geodesic equation, time-one
  exponential-domain convention, and completeness equivalence. The open
  interval, excluded unit vector, exact maximal interval, and all boundary and
  choice qualifications are proved locally and are not attributed to Datar.

The serial integrator must also add the item to the A page and batch-7 proof
contract, refresh the affected current scope/item decisions, and rerun the
canonical checks. This dispatch was forbidden to edit any of those shared
carriers.

## Tested item-specific proof contract

The strict check used the complete named source section as each exact `quote`;
the shorter exact excerpts and every use are recorded here for integration.

### Citations

- A1 -> `def-countable-choice`, `Definition`, used in steps 5.1 and 6.1.
  Exact excerpt: “For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets
  indexed by $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$
  such that $f(n) \in X_n$ for every $n \in \mathbb{N}$.”
- F1 ->
  `prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure`,
  `Statement`, used in step 1.1. Exact excerpt: “Let $n\ge1$ and let
  $W\subseteq\mathbb R^n$ be open. Then $W$ is a smooth $n$-manifold.”
- F2 -> `def-riemannian-metric-and-riemannian-manifold`, `Definition`, used in
  step 1.1. Exact excerpt: “A **Riemannian metric** on a Hausdorff
  second-countable smooth manifold $M$ is a smooth symmetric covariant
  two-tensor $g$ such that $g_p(v,v)>0$ for every point $p$ and every nonzero
  $v\in T_pM$. A **Riemannian manifold** is the pair $(M,g)$.”
- F3 -> `prop-christoffel-formula-for-the-levi-civita-connection`, `Statement`,
  used in step 2.1. Exact excerpt:
  “$\Gamma^k{}_{ij}=\tfrac12\sum_\ell g^{k\ell}(\partial_i g_{j\ell}+\partial_j
  g_{i\ell}-\partial_\ell g_{ij})$.”
- F4 -> `prop-coordinate-geodesic-equation`, `Statement`, used in step 2.1.
  Exact excerpt: “In coordinates $x^1,\ldots,x^n$, a smooth curve $\gamma$ is
  a geodesic if and only if, throughout every parameter subinterval lying in
  the chart,
  $$\ddot x^k+\Gamma^k{}_{ij}(x)\dot x^i\dot x^j=0\qquad(1\le k\le n),$$
  with summation over repeated indices.”
- F5 -> `def-domain-and-exponential-map-of-a-connection`, `Definition`, used in
  steps 3.1, 4.1, 5.1, and 6.1. Exact excerpt: “For $v\in T_pM$, let
  $\gamma_{p,v}:I_{p,v}\to M$ be its unique maximal geodesic. The **domain of
  the exponential map** is
  $\mathcal E=\{v\in TM:1\in I_{p,v}\text{ for }p=\pi(v)\}$.”
- F6 -> `prop-components-of-a-topological-manifold-are-open-and-at-most-countable`,
  `Statement`, used in step 5.1. Exact excerpt: “Let $M$ be a topological
  manifold. Then every connected component of $M$ is open.”
- F7 -> `thm-hopf-rinow`, `Statement`, used in steps 5.1 and 6.1. Exact
  excerpt from its equivalent conditions: “The Riemannian manifold $(M,g)$ is
  geodesically complete”; “For every $p\in M$, the fibre exponential domain is
  all of the tangent space: $\mathcal E_p=T_pM$.”

### Derivations

1. Step 1.1 proves that the open interval has its standard boundaryless smooth
   structure and that $dx^2$ is a Riemannian metric. Inputs: F1, F2, given.
2. Step 2.1 computes $\Gamma^1{}_{11}=0$ and proves that $\gamma(t)=t$ is the
   unit-speed geodesic with initial vector $v$. Inputs: F3, F4, step 1.1,
   given, algebra.
3. Step 3.1 uses uniqueness and a union-extension argument, then continuity at
   both missing endpoints, to prove $I_{0,v}=(-1,1)$. Inputs: F5, step 2.1.
4. Step 4.1 applies the time-one domain criterion to obtain
   $v\notin\mathcal E$ and refute $\mathcal E=TM$. Inputs: F5, step 3.1.
5. Step 5.1 restricts to an open connected component, identifies its maximal
   intervals with the ambient ones, and applies both directions of
   Hopf--Rinow. Inputs: A1, F5, F6, F7, step 4.1.
6. Step 6.1 completes the empty, zero, one, degenerate, endpoint, choice, and
   biconditional audit. Inputs: A1, F5, F7, steps 2.1, 3.1, 4.1, and 5.1.

Routine steps: none.

### Boundary evidence

- empty — checked in step 6.1: $TM=\mathcal E=\varnothing$ on the empty
  manifold, so it is not a counterexample, and the componentwise qualification
  has no nonempty component to test.
- zero — checked in step 6.1: every vector is zero and has a global constant
  geodesic.
- one — checked in steps 1.1--4.1: the complete witness is one-dimensional.
- degenerate — checked in step 6.1: the witness is a nonzero unit vector, while
  the zero vector has a global constant geodesic.
- endpoints — checked in steps 3.1--4.1: the maximal domain is the open interval
  $(-1,1)$ and time $1$ is excluded rather than included by convention.
- nonempty-choice — checked in step 6.1: $\mathrm{AC}_\omega$ is located only
  in F5 and F7; the counterexample calculation is explicit and choice-free.
- iff-forward — checked in step 5.1: Hopf--Rinow gives geodesic completeness
  implies full fibre exponential domains on each component.
- iff-reverse — checked in step 5.1: the same equivalence gives full fibre
  exponential domains imply geodesic completeness on each component.

## Checks and open obligations

- Focused precheck: exit 0; direct strategy, 1 checked and 0 failing. The first
  two runs exposed only step-paragraph formatting and dependency-layering
  issues; both were repaired before the successful run.
- Focused rendercheck: exit 0; 1 file, valid YAML and KaTeX, with no wikilink,
  delimiter, multiline-display, or rendering error.
- Focused content policy: exit 0 on a process-substituted one-item view of the
  batch manifest; scope 1, 0 errors and 0 warnings. No temporary or canonical
  manifest was written.
- Strict proof-contract check: exit 0 on the in-memory one-item contract
  specified above; 1/1 checked, 0 errors and 0 warnings. No temporary or
  canonical contract was written.
- Plan validation: exit 1 on `research/plan-spec.json` in the current
  pre-splice repository state. At the recorded invocation it reported 4,164
  issue rows: 3,840 `redundant-prereq` and 324 `dup-id`. There were zero
  mentions of this item ID. These global mismatches are reported for Step 4 and
  are not represented as a pass.
- Open mathematical gaps: none presently identified in the owned item.
- Published concerns: none identified in the five published direct suppliers.
  The two required current in-run suppliers and the same-page coordinate
  equation are draft content, not published items.
- Owner-direction obligations: the current explicit owner authoring direction
  contains obligations for batches 5 and 11, not this batch-7 target; none is
  silently discharged here.
- Next action: the group-D author or owner serially integrates the exact
  manifest dependency repair, coverage row, contract, and A-page position,
  refreshes current scope/item decisions, and reruns the canonical checks. No
  Step-3 gate or independent-audit result is claimed by this handoff.
