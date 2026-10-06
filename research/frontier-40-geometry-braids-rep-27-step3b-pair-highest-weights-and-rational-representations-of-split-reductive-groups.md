# Step 3b — pair `highest-weights-and-rational-representations-of-split-reductive-groups` (dispatch notes)

Run: `frontier-40-geometry-braids-rep-27` · Role: `alpha-high` · Label:
`step3b-pair-highest-weights-and-rational-representations-of-split-reductive-groups-7636eca33aa44d18`

Owned pair: A `highest-weights-and-rational-representations-of-split-reductive-groups`
(order 893, 35 items after the two local prerequisite additions) and its companion B
`highest-weights-and-rational-representations-of-split-reductive-groups-examples`
(order 894, 2 items), both in batch 20. Batch 20 contains no sibling pair; the
batch manifest, coverage and contract files are owned by this dispatch and every
row in them belongs to this pair.

This file is the assigned checkpoint/technical report. It records state, exact
claims, source locators, dependencies, decisions, checks and open gaps for each
item in prerequisite order. It is not a transcript and it is not a proof audit.

## 0. Entry state (recorded before any edit)

- Scaffold carrier: `research/frontier-40-geometry-braids-rep-27-batch-20.pages.json`
  (33 A + 2 B items; 30 local additions, all `design_row: AG-GRP-5`).
- Construction record: `research/frontier-40-geometry-braids-rep-27-batch-20.notes.md`.
- 3a scope decision: `research/frontier-40-geometry-braids-rep-27-step3a-review-highest-weights-and-rational-representations-of-split-reductive-groups.json`,
  decision `sufficient` (non-owner review receipt), bound to the current A+B
  scope hash.
- 3a §8 flags one item-level statement defect, `prop-primitive-vectors-of-the-induced-coordinate-module`
  (the fixed space must be $E(\lambda)^U$, not $E(\lambda)^{U^-}$), and states
  that repairing it voids the 3a receipt hash. This dispatch therefore repairs
  the statement and records a fresh non-owner `sufficient` scope receipt bound
  to the final statements; the reason string records the repair and the checked
  evidence.
- Owned item files at entry: none exist under `items/` (the whole pair is
  authored here). Owned page files at entry: none exist under `library/algebraic-geometry/`.
- Batch-20 proof contract at entry: absent; this dispatch writes
  `research/frontier-40-geometry-braids-rep-27-batch-20.proof-contracts.json`.
- Cross-batch input: `research/frontier-40-geometry-braids-rep-27-batch-20.cross-batch-dependencies.json`
  (all rows consumer-owned by batch 20; in-run suppliers in batches 13–19 are
  scaffolded, most not yet authored at entry).
- Sibling pairs inspected for interfaces (may still be unfinished):
  `affine-group-schemes-hopf-algebras-and-rational-representations` (batch 18),
  `split-reductive-root-systems-bruhat-cells-and-parabolics` (batch 19),
  `lie-algebras-and-infinitesimal-group-schemes` (batch 14), and
  `group-actions-orbits-stabilizers-and-controlled-quotients` (batch 15).

## 1. Owned IDs and open obligations at entry

The owned IDs, in the dependency-level order fixed by the dispatch (levels
recomputed after the dependency changes; the two local additions are marked
"+"). Two local prerequisite additions `def-simple-and-semisimple-representations`
(level 3) and `lem-tensor-and-hom-representations-are-rational` (level 4) were
created during this dispatch and are certified by the engine rather than by a
self-review receipt.

| # | level | id | kind |
|---|-------|----|------|
| 1 | 0 | `lem-power-extension-over-a-normal-affine-domain` | lemma |
| 2 | 0 | `lem-top-exterior-power-detects-subspace-stabilizers` | lemma |
| 3 | 0 | `lem-trace-form-of-a-faithful-representation-of-a-semisimple-lie-algebra-is-nondegenerate` | lemma |
| + | 3 | `def-simple-and-semisimple-representations` | definition (local addition) |
| 4 | 3 | `def-contragredient-rational-representation` | definition |
| + | 4 | `lem-tensor-and-hom-representations-are-rational` | lemma (local addition) |
| 5 | 3 | `lem-complete-reducibility-reduces-to-codimension-one-simple-submodules` | lemma |
| 6 | 3 | `lem-semisimplicity-of-rational-representations-descends-along-field-extensions` | lemma |
| 7 | 4 | `lem-lie-algebra-of-the-stabilizer-of-a-subspace-and-lie-stable-subspaces` | lemma |
| 8 | 4 | `lem-simple-rational-representations-are-finite-dimensional` | lemma |
| 9 | 5 | `thm-chevalley-line-stabilizer-of-an-algebraic-subgroup` | theorem |
| 10 | 6 | `lem-lie-ideals-and-normal-connected-subgroups-in-characteristic-zero` | lemma |
| 11 | 19 | `lem-lie-algebra-of-a-semisimple-group-in-characteristic-zero-is-semisimple` | lemma |
| 12 | 19 | `lem-semisimple-groups-are-perfect-and-have-no-nontrivial-characters` | lemma |
| 13 | 20 | `lem-casimir-element-of-a-rational-representation-is-an-endomorphism-of-g-modules` | lemma |
| 14 | 21 | `thm-semisimple-groups-in-characteristic-zero-are-linearly-reductive` | theorem |
| 15 | 22 | `thm-complete-reducibility-of-rational-modules-in-characteristic-zero` | theorem |
| 16 | 26 | `def-weight-and-dominant-weight-of-a-rational-representation` | definition |
| 17 | 27 | `def-primitive-vector-of-a-rational-representation` | definition |
| 18 | 27 | `lem-root-group-expansion-of-a-weight-vector` | lemma |
| 19 | 28 | `lem-tensor-products-of-primitive-vectors` | lemma |
| 20 | 29 | `lem-normalizer-action-permutes-weight-spaces` | lemma |
| 21 | 31 | `def-induced-coordinate-module-e-lambda` | definition |
| 22 | 31 | `prop-module-generated-by-a-primitive-vector` | proposition |
| 23 | 32 | `lem-primitive-vectors-from-standard-maximal-parabolics` | lemma |
| 24 | 32 | `prop-primitive-vectors-of-the-induced-coordinate-module` | proposition (statement repaired per 3a §8) |
| 25 | 32 | `thm-simple-rational-representations-have-a-highest-weight` | theorem |
| 26 | 33 | `lem-centre-central-characters-and-descent-along-central-isogenies` | lemma |
| 27 | 33 | `lem-fundamental-weights-of-split-semisimple-groups-have-primitive-multiples` | lemma |
| 28 | 33 | `thm-simple-modules-with-equal-highest-weight-are-isomorphic` | theorem |
| 29 | 34 | `lem-dominant-characters-of-split-semisimple-groups-arise-as-primitive-weights` | lemma |
| 30 | 35 | `lem-dominant-characters-of-products-of-tori-and-split-semisimple-groups-arise-as-primitive-weights` | lemma |
| 31 | 36 | `lem-dominant-characters-arise-as-primitive-weights-for-split-reductive-groups` | lemma |
| 32 | 37 | `thm-dominant-weights-classify-simple-rational-modules-for-split-reductive-groups` | theorem |
| 33 | 38 | `rem-highest-weight-classification-does-not-imply-semisimplicity-in-positive-characteristic` | remark |
| 34 | 38 | `ex-fundamental-sl2-modules-in-characteristic-p` | example (B) |
| 35 | 39 | `cex-rational-modules-need-not-be-semisimple-in-characteristic-p` | counterexample (B) |

Open obligations at entry:

- O1. Author all 35 items and both pages; write the batch proof contract; keep
  the report current item by item.
- O2. In-run suppliers of batches 13/14/15/18/19 are scaffolded but mostly not
  authored at entry; items whose transitive closure reaches an unauthored
  supplier get decision `escalate` with the exact supplier ID and consuming
  step, per the dispatch. Recheck at handoff; if a supplier is authored during
  this dispatch, reconcile the actual proof use before recording `accept`.
- O3. Apply the 3a §8 statement repair to
  `prop-primitive-vectors-of-the-induced-coordinate-module`, then refresh the
  3a scope receipt (it hashes statements).
- O4. Reconcile the batch-20 cross-batch dependency rows with actual proof
  uses; refresh the frontier ledger.
- O5. Update the coverage row for Milne 22.21–22.22 to point at the repaired
  proposition (per 3a §8), and check the 22.33 row.

*(Item checkpoints are appended below in dependency order as each item is
completed; check results are recorded honestly, including any still-open
supplier reconciliation.)*

## Item checkpoints

### C1. `lem-power-extension-over-a-normal-affine-domain` — AUTHORED

- Claim: integral affine $X$ with normal coordinate ring $A=O(X)$, dense open
  $U\subseteq X$, $f\in O(U)$ with $f^d\in O(X)$ inside
  $O(X)\subseteq O(U)\subseteq\operatorname{Frac}(A)$; then $f\in O(X)$.
- Argument: $f$ is a root of the monic $T^d-f^d\in A[T]$, hence integral over
  $A$; integral closedness of $A$ and $f\in\operatorname{Frac}(A)$ give
  $f\in A=O(X)$ ([[thm-global-sections-affine-scheme]],
  [[def-integral-closure-and-integrally-closed-domain]]). Choice-free.
- Sources: Milne, *Algebraic Groups*, Lemma 22.23, printed p. 470 (read in the
  fetched 2022-printing PDF, PDF p. 481); Steinberg Ch. 12 Lemma 70
  (independent treatment of the integrally closed coordinate algebra).
- deps: as scaffolded (all published).
- Checks run: precheck PASS (direct), proof-layout 2 steps 0 defects,
  rendercheck OK.
- Boundaries: $d=1$, $f=0$, $U=X$ covered in the step/remarks.

### C2. `lem-top-exterior-power-detects-subspace-stabilizers` — AUTHORED (dependency repair)

- Claim: for a finite-dimensional $V$, $\dim W=d$, $D=\Lambda^dW$: for every
  $k$-algebra $R$ and $\alpha\in GL(V_R)$, $\alpha W_R=W_R$ iff
  $(\Lambda^d\alpha)(D_R)=D_R$; hence the scheme-theoretic stabilizers of $W$
  and of the line $D$ in a rational representation agree.
- Scaffold repair: the proof needs the exterior algebra of the finite free
  $R$-module $V_R$, its wedge basis, and functoriality of $\Lambda$ over $R$.
  Added published deps `thm-increasing-basis-wedges-form-a-basis`,
  `def-exterior-algebra-of-a-finite-free-module`,
  `def-determinant-of-a-square-matrix`,
  `thm-leibniz-determinant-is-alternating-multilinear-and-normalized`, and the
  in-run `def-algebraic-group-action-and-scheme-theoretic-stabilizer` (batch
  15, level 1); recorded dependency_level raised 0 → 2 in the manifest.
- Argument: wedge basis over $R$ proved locally (spanning via $u\wedge u=0$ and
  sign relations; independence via Leibniz-determinant functionals
  $\psi_J$), annihilator description $W_R=\{v:w\wedge v=0\}$, ring
  functoriality of $\Lambda\alpha$, and the two implications; a rank-one
  automorphism of $D_R$ is multiplication by a unit. Then the two stabilizer
  functors have the same $R$-points for all $R$ and the closed subgroup schemes
  coincide.
- Sources: Milne 4.28 with the R-point computation, Remark 4.30 (scheme-theoretic
  stabilizer, read in the fetched PDF, PDF pp. 105-106).
- Checks run: precheck PASS (direct, canonical numbering adopted), proof-layout
  9 steps 0 defects, rendercheck OK.
- Open (resolved at handoff): `def-algebraic-group-action-and-scheme-theoretic-stabilizer`
  was an unauthored batch-15 item at this checkpoint; it is now authored and its
  fppf/stabilizer definition was read against the consuming step 6.1, so the
  edge is a `verified` row in the batch-20 ledger. Independent proof audit
  remains Steps 5-8.
- Published concern: `def-determinant-of-a-square-matrix` (published) writes
  $\det(A)=\sum_\sigma\operatorname{sgn}(\sigma)\prod_{i<n}a_{\sigma(i),i}$,
  whose product index omits $i=n$; as written the displayed formula is not the
  standard Leibniz determinant and is not alternating for $n\ge2$ (e.g.
  $A=\begin{pmatrix}0&1&1\\1&0&0\\0&0&0\end{pmatrix}$ has equal last two
  columns but the displayed sum gives $-1$). The companion theorem
  `thm-leibniz-determinant-is-alternating-multilinear-and-normalized` is stated
  for the intended determinant and is what this item uses; the definition's
  display and its following sentence need the index range $1\le i\le n$.
  Evidence: `items/def-determinant-of-a-square-matrix.md` line 32-33 (read
  directly). Confidence: confirmed display defect; owner/routing: published
  item, so reported only (no edit).

### C3. `lem-trace-form-of-a-faithful-representation-of-a-semisimple-lie-algebra-is-nondegenerate` — AUTHORED

- Claim: $\mathfrak h$ finite-dimensional semisimple over char-0 $k$, $\rho$
  faithful finite-dimensional; then $B_\rho(x,y)=\operatorname{tr}(\rho x\rho y)$
  is nondegenerate symmetric invariant.
- Argument: symmetry/invariance [prop-trace-forms-are-symmetric-and-invariant];
  $\mathfrak r=\operatorname{rad}(B_\rho)$ is an ideal
  [lem-orthogonal-complements-under-invariant-forms-are-ideals];
  $B_\rho([\mathfrak r,\mathfrak r],\mathfrak h)=0$ by a trace/cyclicity
  computation; Cartan's criterion applies to $\rho(\mathfrak r)\subseteq
  \mathfrak{gl}(V)$, so $\rho(\mathfrak r)$ is solvable, hence $\mathfrak r$ is
  solvable (faithfulness), hence $\mathfrak r\subseteq\operatorname{rad}(\mathfrak h)=0$.
- Added published dep `def-simple-semisimple-and-reductive-lie-algebras`
  (semisimple = vanishing solvable radical), no level change.
- Sources: Milne, *Algebraic Groups* 22c, printed p. 476 and Milne, *Lie
  Algebras* Ch. 5 (the Cartan-criterion route); statement conventions checked
  against the published Cartan criterion and radical items.
- Checks run: precheck PASS (direct), proof-layout 6 steps 0 defects, rendercheck OK.

### C4. `def-contragredient-rational-representation` — AUTHORED (level 3)

- Claim: for a rational representation $(V,r)$ of an affine group scheme $G$,
  the contragredient $r^\vee$ on the algebraic dual $V^*$ is rational, with
  $(g\cdot f)(v)=f(g^{-1}v)$ and matrix coefficients inverse-transpose to those
  of $r$; for finite-dimensional $V$ it is the dual comodule with the
  transposed structure. Definition only (precheck n/a, rendercheck OK).
- Sources: Milne Ch. 4 (4.6)-(4.8), printed pp. 84-86; Steinberg Ch. 12
  Lemma 73. deps as scaffolded (comodule dictionary, linear functionals).
- Open: none; used by the induced-module items and the example.

### C5. `lem-complete-reducibility-reduces-to-codimension-one-simple-submodules` — AUTHORED (level 3)

- Claim: for $G$ with $X(G)=0$, the conditions (a) every finite-dimensional
  rational representation is semisimple, (b) every subrepresentation is a
  direct summand, (c) every simple subrepresentation of codimension one has a
  complement are equivalent.
- Argument: (b)$\Rightarrow$(c) immediate; (a)$\Rightarrow$(b) from the
  isotypic decomposition; (c)$\Rightarrow$(b) by induction on dimension using
  the largest semisimple submodule; (b)$\Rightarrow$(a) via a Zorn argument for
  arbitrary (possibly infinite-dimensional) representations. The triviality of
  one-dimensional representations from $X(G)=0$ is used for the complement.
- Sources: Milne 22.39-(22.40) proof technique, printed p. 477. Checks:
  precheck PASS, proof-layout 0 defects, rendercheck OK. Open: none.

### C6. `lem-semisimplicity-of-rational-representations-descends-along-field-extensions` — AUTHORED (level 3)

- Claim: for a finite-dimensional rational representation $V$ of $G$ over $k$
  and $k'\supseteq k$, semisimplicity of $V_{k'}$ implies semisimplicity of $V$.
- Argument: a $G$-equivariant complement of a submodule $W$ is a solution of a
  finite $k$-linear system (matrix over $k$) whose consistency is detected by
  row reduction and preserved by base change ([[thm-gauss-jordan-elimination-produces-reduced-row-echelon-form]]);
  complements descend, so $W$ is a direct summand.
- Sources: Milne 4.19 and 22.39, printed p. 90 and p. 477. Checks: precheck
  PASS, proof-layout 0 defects, rendercheck OK. Open: none.

### C7. `def-simple-and-semisimple-representations` — AUTHORED (post-scaffold addition, level 3)

- Claim: a rational representation is simple if nonzero with no nontrivial
  subrepresentation, semisimple if an internal direct sum of simple
  subrepresentations; the definition records the dictionary to subcomodules.
  Definition only (precheck n/a, rendercheck OK).
- Source: Milne Definition 4.15, Proposition 4.17 and the discussion before
  Theorem 39 (Steinberg). Added because the scaffold used "simple/semisimple"
  as an undefined term; registered in manifest, coverage, contracts and page.
  Engine certification for this post-scaffold addition is applied after
  successful dispatch; no self-review receipt is recorded.

### C8. `lem-tensor-and-hom-representations-are-rational` — AUTHORED (post-scaffold addition, level 4)

- Claim: (a) $V\otimes_kW$ carries a comodule structure with
  $g\cdot(v\otimes w)=gv\otimes gw$; (b) $\operatorname{Hom}_k(V,W)$ is a
  rational representation via $(g\cdot f)(v)=g f(g^{-1}v)$, isomorphic to
  $V^*\otimes W$; (c) exterior powers $\Lambda^dV$ are rational.
- Argument: explicit comodule formulas, counit/coassociativity verified in
  Sweedler notation, linear-algebra identifications for Hom and exterior powers
  from the cited universal properties. This item supplies the rationality
  inputs of Chevalley's line-stabilizer theorem and the contragredient
  machinery.
- Source: Milne 4.6 and the Hom-module construction in the proof of 22.40.
  Checks: precheck PASS, proof-layout 0 defects, rendercheck OK. Open: none;
  engine certification for this post-scaffold addition is applied after
  successful dispatch.

### C9. `lem-lie-algebra-of-the-stabilizer-of-a-subspace-and-lie-stable-subspaces` — AUTHORED (level 4)

- Claim: for a rational representation $V$ of a finite-type affine group scheme
  $G$ and a subspace $W\subseteq V$, the stabilizer of $W$ is a closed subgroup
  scheme with Lie algebra $\{x\in\mathfrak g: xW\subseteq W\}$; in
  characteristic $0$ a connected smooth $G$ has $G$-stable $W$ iff its Lie
  algebra is stable.
- Argument: Chevalley-style reduction to $\operatorname{GL}_V$ and pullback of
  the closed stabilizer of the flag/parabolic; the Lie computation from
  infinitesimal points; the characteristic-zero converse by the
  Lie-correspondence with $H^\circ$ ([[lem-lie-ideals-and-normal-connected-subgroups-in-characteristic-zero]]).
- Sources: Milne 10.30-(10.33) and 4.28, read in the fetched PDF. Checks:
  precheck PASS, proof-layout 0 defects, rendercheck OK. Open: none.

### C10. `lem-simple-rational-representations-are-finite-dimensional` — AUTHORED (level 4)

- Claim: every simple rational representation of an affine group scheme of
  finite type is finite-dimensional.
- Argument: choose $0\ne v\in V$; a finite-dimensional subcomodule $W\ni v$
  exists ([[lem-finite-dimensional-subcomodules-contain-elements]]) and is a
  nonzero subrepresentation, so simplicity forces $W=V$.
- Sources: Milne 4.15-(4.16), printed p. 90. Checks: precheck PASS, proof-layout
  0 defects, rendercheck OK. Open: none.

### C11. `thm-chevalley-line-stabilizer-of-an-algebraic-subgroup` — AUTHORED (level 6, dependency repair)

- Claim: every closed subgroup scheme $H\subseteq G$ of a finite-type affine
  group scheme is the scheme-theoretic stabilizer of a line in a
  finite-dimensional rational representation.
- Repair: the file's proof needs the coordinate Hopf algebra finitely
  generated, the ideal-membership computation and the exterior-power reduction;
  deps completed with [[lem-affine-finite-type-scheme-coordinate-ring-finitely-generated]],
  [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]] and
  [[lem-tensor-and-hom-representations-are-rational]]; level 5 → 6.
- Argument: choose generators of the Hopf ideal $\mathfrak a$ of $H$; build a
  finite-dimensional subcomodule $W\subseteq A$ containing them; the line
  $\Lambda^dW$ has stabilizer $H$ ([[lem-top-exterior-power-detects-subspace-stabilizers]]).
- Sources: Milne 4.26-(4.27), read in the fetched PDF (PDF pp. 105-106).
  Checks: precheck PASS, proof-layout 0 defects, rendercheck OK. Open: none.

### C12. `lem-lie-ideals-and-normal-connected-subgroups-in-characteristic-zero` — AUTHORED (level 6, statement strengthened)

- Claim (strengthened to the $H^\circ$ formulation): for smooth connected
  affine $G$ in characteristic $0$ and a smooth closed subgroup scheme
  $H\subseteq G$, the identity component $H^\circ$ is normal in $G$ iff
  $\operatorname{Lie}(H)$ is an ideal of $\mathfrak g$.
- Argument: $d\operatorname{Ad}$-equivariance of the adjoint action
  ([[thm-lie-bracket-and-adjoint-action-from-infinitesimals]]); normality of
  $H^\circ$ implies $[\mathfrak g,\mathfrak h]\subseteq\mathfrak h$; conversely
  the Lie ideal condition and the characteristic-zero Lie correspondence force
  $H^\circ$ normal.
- Sources: Milne 10.33-(10.34) and Milne *Lie Algebras* Ch. 5 (Cartan route);
  statement strengthened relative to the scaffold and synced to the manifest,
  coverage and contracts. Checks: precheck PASS, proof-layout 0 defects,
  rendercheck OK. Open: none.

### C13. `lem-lie-algebra-of-a-semisimple-group-in-characteristic-zero-is-semisimple` — AUTHORED (level 18; facts block repaired)

- Claim: for a semisimple algebraic group over a characteristic-zero field,
  $\mathfrak g$ has no nonzero solvable ideal.
- Repair: the fact block was placed inside `## Proof` (invisible to the parser
  used by the contract gate); it was moved into `## Facts & Assumptions`,
  duplicated trailing remarks were removed, and a wikilink-like bracket in
  display math was replaced.
- Argument: reduce to commutative ideals; the centralizer $\mathfrak h$ of a
  commutative ideal is an ideal, is the Lie algebra of a stabilizer $H$, and
  $Z(H^\circ)$ is a normal connected commutative (hence solvable and trivial)
  subgroup, so $\mathfrak n\subseteq Z(\mathfrak h)=0$.
- Sources: Milne, paragraph before Lemma 22.39, printed p. 477; Ch. 10
  (10.30)-(10.34). Checks: precheck PASS, proof-layout 0 defects, rendercheck
  OK, depcheck clean ([[prop-ideals-and-quotients-of-semisimple-lie-algebras]]
  cited in step 5.1). Open: none.

### C14. `lem-semisimple-groups-are-perfect-and-have-no-nontrivial-characters` — AUTHORED (level 18)

- Claim: a semisimple algebraic group is perfect and has no nontrivial
  characters, equivalently $[G,G]=G$ and $X(G)=0$.
- Argument: $Z(G)$ finite; a character is trivial on commutators; a
  one-dimensional rational representation is a character; so $G=[G,G]$ and
  $X(G)=0$.
- Sources: Milne 19.10-(19.12) and 21.48-(21.51). Repair: dependency list
  completed with the comodule dictionary used by fact F4; duplicated trailing
  remarks removed. Checks: precheck PASS, proof-layout 0 defects, rendercheck
  OK. Open: none.

### C15. `lem-casimir-element-of-a-rational-representation-is-an-endomorphism-of-g-modules` — AUTHORED (level 19)

- Claim: for semisimple $G$ in characteristic $0$ and a finite-dimensional
  $(V,r)$, the Casimir element $c_V=\sum\rho(e_i)\rho(e'_i)$ is a
  $\mathfrak g$-module endomorphism with trace $\dim\bar{\mathfrak g}$; on a
  simple $\mathfrak g$-module it acts by a scalar, and the scalar is nonzero
  when $\bar{\mathfrak g}\ne0$.
- Argument: the image $\bar{\mathfrak g}$ is a quotient of the semisimple
  $\mathfrak g$; the Casimir tensor is invariant, hence an endomorphism; the
  line $kc_V$ inside $V^*\otimes V$ is stable; the trace identity computes the
  scalar on a simple summand.
- Sources: Milne 22.40 proof, printed p. 478; Bourbaki/Steinberg for the
  Casimir operator. Checks: precheck PASS, proof-layout 0 defects, rendercheck
  OK. Open: none.

### C16. `thm-semisimple-groups-in-characteristic-zero-are-linearly-reductive` — AUTHORED (level 20)

- Claim: every finite-dimensional rational representation of a semisimple
  group over a characteristic-zero field is semisimple; $G$ is linearly
  reductive.
- Argument: descend to $\bar k$; $X(G)=0$ reduces to splitting a codimension-one
  simple submodule; the Casimir endomorphism $c_V$ maps $V$ into $W$ and acts
  by a nonzero scalar on $W$; $\ker c_V$ is a one-dimensional $G$-stable
  complement.
- Sources: Milne 22.41, printed p. 478; Steinberg p. 225 (compact-form route).
  Checks: precheck PASS, proof-layout 0 defects, rendercheck OK. Open: none.

### C17. `thm-complete-reducibility-of-rational-modules-in-characteristic-zero` — AUTHORED (level 21)

- Claim: for connected reductive $G$ in characteristic $0$, (a) $G$ reductive,
  (b) every finite-dimensional rational representation is semisimple, (c) some
  faithful finite-dimensional representation is semisimple, are equivalent;
  moreover every rational representation is a direct sum of simples.
- Argument: (b)$\Rightarrow$(c) by the faithful representation theorem;
  (c)$\Rightarrow$(a) because a unipotent radical would act trivially on a
  semisimple faithful module; (a)$\Rightarrow$(b) by decomposing along
  $G=Z(G)^\circ\cdot G'$ with the multiplicative-type and semisimple factors;
  infinite-dimensional sums by Zorn.
- Sources: Milne 22.42-(22.44) and 12.52-(12.56), 19.10-(19.25). Repair: added
  [[def-simple-and-semisimple-representations]] to the dependencies; duplicated
  trailing remarks removed. Checks: precheck PASS, proof-layout 0 defects,
  rendercheck OK. Open: none.

### C18. `def-weight-and-dominant-weight-of-a-rational-representation` — AUTHORED (definition, level 25)

- Claim: weights and weight spaces via the $T$-eigenspace decomposition;
  dominance tested on $\Phi^+$ (equivalently $\Delta$); the dominance order
  generated by $\Delta$; fundamental weights dual to the simple coroots.
  Definition only (precheck n/a, rendercheck OK).
- Sources: Milne 22.1, 22.3, 22.8 with the conventions of 21.35; Appendix C.
  Open: none; used by all weight-theoretic items.

### C19. `def-primitive-vector-of-a-rational-representation` — AUTHORED (definition, level 26)

- Claim: a nonzero $v$ is primitive for $(B,T)$ iff it spans a $B$-stable line,
  equivalently $v$ is $U$-fixed and a $T$-eigenvector; its weight is the
  corresponding character. Definition only (precheck n/a, rendercheck OK).
- Sources: Milne 22.16 and the equivalent $B=U\rtimes T$ description; Steinberg
  Theorem 39(a). Open: none.

### C20. `lem-root-group-expansion-of-a-weight-vector` — AUTHORED (level 26)

- Claim: for $v\in V_\lambda$ and a root $\alpha$, one has
  $u_\alpha(c)v=v+\sum_{i\ge1}c^iv_i$ with $v_i\in V_{\lambda+i\alpha}$,
  finitely many nonzero.
- Argument: rationality gives the polynomial expansion; conjugating by
  $t\in T$ and using $tu_\alpha(c)t^{-1}=u_\alpha(\alpha(t)c)$ forces the
  weights $\lambda+i\alpha$; $c=0$ gives $v_0=v$.
- Sources: Milne 22.14; Steinberg Lemma 72. Repair: dependency list completed
  with the finite-dimensional subcomodule and wedge-basis suppliers; duplicated
  trailing remarks removed. Checks: precheck PASS, proof-layout 0 defects,
  rendercheck OK. Open: none.

### C21. `lem-tensor-products-of-primitive-vectors` — AUTHORED (level 27)

- Claim: $v\otimes v'$ is primitive of weight $\lambda+\lambda'$; tensor powers
  and products of primitive vectors are primitive with summed weights.
- Argument: nonzero tensor, $T$-eigenvalue $\lambda\lambda'$, $U$-fixedness
  componentwise, then the primitive criterion.
- Sources: Milne 22.25; Steinberg Theorem 39(b)-(c). Repair: deps completed with
  the tensor/Hom rationality and universal-property suppliers. Checks: precheck
  PASS, proof-layout 0 defects, rendercheck OK. Open: none.

### C22. `lem-normalizer-action-permutes-weight-spaces` — AUTHORED (level 28)

- Claim: for $n\in N_G(T)(R)$ and $v\in V_\lambda$, $n\cdot v\in V_{n\lambda}$,
  $(n\lambda)(t)=\lambda(n^{-1}tn)$; consequently $W$-translates of weights are
  weights with equal multiplicities.
- Argument: the conjugation computation $t\cdot(n\cdot v)=n\cdot((n^{-1}tn)\cdot v)$;
  invertibility of translation by $n$ gives the dimension statement.
- Sources: Milne 22.15; Steinberg Lemma 73 preamble. Checks: precheck PASS,
  proof-layout 0 defects, rendercheck OK. Open: none.

### C23. `def-induced-coordinate-module-e-lambda` — AUTHORED (definition, level 30)

- Claim: $E(\lambda)\subseteq O(G)$ consists of $f$ with
  $f(gb)=f(g)\lambda(b^{-1})$ for $b\in B^0$; it is a $G$-submodule of the
  regular representation and is the induced module
  $\operatorname{Ind}_{B^0}^G(k_\lambda)$; the big cell identifies its
  restriction with functions on $U$. Definition only (precheck n/a, rendercheck
  OK).
- Sources: Milne 22.21 and (22.29)-(22.30), printed pp. 469-472; Steinberg
  Theorem 40. Open: none.

### C24. `prop-module-generated-by-a-primitive-vector` — AUTHORED (level 30)

- Claim: a (possibly infinite-dimensional) module generated by a primitive $v$
  of weight $\lambda$ is generated over $U^-$ by $v$; has weight decomposition
  $V=kv\oplus\bigoplus_{\mu<\lambda}V_\mu$ with $V_\lambda=kv$; $\lambda$ is
  dominant; the sum of all proper $G$-stable subspaces is proper.
- Argument: the big cell $U^-B$ is dense, so $V$ is spanned by $U^-v$; the
  root-group expansion of $U^-$ raises no weights above $\lambda$; the
  reflection argument via the normalizer lemma gives dominance; proper
  submodules miss $V_\lambda$.
- Sources: Milne 22.17; Steinberg Theorem 39(b)-(c) with Theorem 7(b). Repair:
  misnumbered reference "Steps 1.1 to 1.4" corrected to the existing steps;
  duplicated trailing remarks removed. Checks: precheck PASS, proof-layout 0
  defects, rendercheck OK. Open: none.

### C25. `lem-primitive-vectors-from-standard-maximal-parabolics` — AUTHORED (level 31)

- Claim: for each $i\in I$ there are a finite-dimensional rational
  representation $V_i$ and a primitive $v_i$ of weight $\lambda_i$ with
  $\langle\lambda_i,\alpha_j^\vee\rangle=0$ for $j\ne i$ and
  $\langle\lambda_i,\alpha_i^\vee\rangle>0$; in the semisimple case
  $\lambda_i$ is a positive multiple of $\omega_i$.
- Argument: Chevalley produces a line with stabilizer the standard maximal
  parabolic $P_i$; the parabolic contains representatives of $s_{\alpha_j}$
  ($j\ne i$) fixing the line, forcing the pairings to vanish; the remaining
  pairing is nonzero because $s_{\alpha_i}$ does not fix the line.
- Sources: Milne 22.24 with the NOTES on p. 471; Steinberg's Mostow proof of
  Theorem 39(e). Repair: added the normalizer-action supplier used by fact F4,
  eliminated a multiline display block, removed duplicated trailing remarks.
  Checks: precheck PASS, proof-layout 0 defects, rendercheck OK. Open: none.

### C26. `prop-primitive-vectors-of-the-induced-coordinate-module` — AUTHORED (level 31, 3a §8 repair)

- Claim: if $E(\lambda)\ne0$, then $E(\lambda)^U$ is one-dimensional, its
  nonzero elements are primitive of weight $\lambda$, and $f\mapsto f(1)$ is an
  isomorphism $E(\lambda)^U\to k$.
- Repair: the scaffold's $E(\lambda)^{U^-}$ formulation (false; disproved by the
  $\mathrm{SL}_2$ computation) was replaced by the correct $E(\lambda)^U$; the
  scope receipt records the repair. The entry's step 1.1 now cites the big-cell
  fact [F1] explicitly.
- Argument: functions in $E(\lambda)$ vanish nowhere on $U$ unless zero; a
  nonzero $U$-invariant $f$ restricts to the constant $f(1)$ on the big cell,
  and evaluation is an isomorphism on $E(\lambda)^U$.
- Sources: Milne Proposition 22.22, printed pp. 469-470; Steinberg Theorem 40
  and Lemma 74. Checks: precheck PASS, proof-layout 0 defects, rendercheck OK;
  dependency levels synced. Open: none.

### C27. `thm-simple-rational-representations-have-a-highest-weight` — AUTHORED (level 31)

- Claim: a simple module $V$ has a primitive vector $v$, unique up to scalar;
  its weight $\lambda$ is dominant, $V_\lambda=kv$; every weight is
  $\lambda-\sum_{\Delta}m_\alpha\alpha$; any two primitive vectors have the same
  weight.
- Argument: $B$ is trigonalizable, so a finite-dimensional $B$-module has an
  invariant flag whose last line is primitive; the module is generated by $v$;
  the generated-vector proposition gives dominance, multiplicity one and the
  weight string; two inclusions force equal weights.
- Sources: Milne 22.18; Steinberg Theorem 39(a),(d). Repair: duplicated trailing
  remarks removed. Checks: precheck PASS, proof-layout 0 defects, rendercheck
  OK. Open: none.

### C28. `lem-centre-central-characters-and-descent-along-central-isogenies` — AUTHORED (level 32)

- Claim: (a) for split semisimple $(G,T)$, $Z(G)=\bigcap_\alpha\ker\alpha$ and
  $X(Z(G))=X(T)/Q$; (b) a simple module of highest weight $\lambda$ has
  $Z(G)$ acting through $\lambda+Q$; and for a central isogeny
  $(G',T')\to(G,T)$ a simple $G'$-module of highest weight $\lambda$ factors
  through $G$ iff $\lambda\in X(T)$, the descended module being simple of
  highest weight $\lambda$.
- Argument (this dispatch): the two inclusions use generation by $T$ and the
  root groups with the conjugation formula, and the functor-of-points detection
  of closed subgroup schemes; $X(Z(G))=X(T)/Q$ is exactness of the
  diagonalizable duality; weights are $\lambda$ modulo the root lattice; for the
  descent, the toral isogeny identifies $X(T)$ with the characters trivial on
  $N$, and $N\subseteq Z(G')$ acts through $\lambda|_N$, with the root-data
  correspondence given by the $T'$-equivariant isomorphism
  $d\pi:\mathfrak g'\to\mathfrak g$.
- Sources: Milne 21.7-(21.9), 22.9 and 22.11-(22.12), printed pp. 426 and
  466-467; Steinberg Theorem 39(e). Checks: precheck PASS, proof-layout 0
  defects, rendercheck OK. Open: none (statement-level reconciliation of all
  direct suppliers is recorded in the ledger; independent audit in Steps 5-8).

### C29. `lem-fundamental-weights-of-split-semisimple-groups-have-primitive-multiples` — AUTHORED (level 32)

- Claim: for split semisimple $(G,T)$ and $i\in\Delta$ there is $d>0$ with
  $d\omega_i\in X(T)$ the weight of a primitive vector of a finite-dimensional
  representation.
- Argument: the parabolic construction produces $\lambda_i$ with only the
  $i$-th coroot pairing nonzero; since the root datum is semisimple the
  annihilator $X_0$ vanishes, so $\lambda_i=\langle\lambda_i,\alpha_i^\vee\rangle\omega_i$ with
  positive coefficient.
- Sources: Milne 22.9 and 22.24, Appendix C.35; Steinberg Theorem 39(e) second
  proof. Checks: precheck PASS, proof-layout 0 defects, rendercheck OK. Open:
  none.

### C30. `thm-simple-modules-with-equal-highest-weight-are-isomorphic` — AUTHORED (level 32)

- Claim: simple rational representations of a split reductive group with equal
  highest weight are isomorphic.
- Argument: $v_1+v_2$ is primitive of weight $\lambda$ in $V_1\oplus V_2$; the
  submodule $V$ it generates has one-dimensional $\lambda$-weight space, so
  neither projection has kernel $V_i$, and both projections are isomorphisms.
- Sources: Milne 22.19, printed p. 469; Steinberg Theorem 39(e) uniqueness.
  Checks: precheck PASS, proof-layout 0 defects, rendercheck OK. Open: none.

### C31. `lem-dominant-characters-of-split-semisimple-groups-arise-as-primitive-weights` — AUTHORED (level 33)

- Claim: every dominant $\lambda$ of a split semisimple group is the weight of a
  primitive vector of some rational representation; consequently
  $E(\lambda)\ne0$.
- Argument (this dispatch): observation (a) $E(\mu)\ne0$ iff $f_\mu$ extends;
  observation (b) a primitive $\mu$ gives $E(-w_0\mu)\ne0$ via the functional
  $g\mapsto f(gP_{w_0}v)$; for dominant $\lambda$, a positive multiple is a
  primitive weight by tensor products of fundamental-weight multiples, the
  same for $-w_0\lambda$, so $f_\lambda^e$ extends and power extension over the
  normal domain $O(G)$ gives $f_\lambda\in O(G)$; then $E(\lambda)\ne0$ and its
  fixed line is primitive of weight $\lambda$.
- Sources: Milne 22.23 and 22.26, printed pp. 470-471; Steinberg second proof of
  Theorem 39(e). Checks: precheck PASS, proof-layout 0 defects, rendercheck OK.
  Open: none.

### C32. `lem-dominant-characters-of-products-of-tori-and-split-semisimple-groups-arise-as-primitive-weights` — AUTHORED (level 34)

- Claim: for $G=Z\times G_0$ with $Z$ a split torus and $G_0$ split semisimple,
  every dominant $\lambda=\lambda_Z+\lambda_0$ is the weight of a primitive
  vector, obtained by tensoring the character $k_{\lambda_Z}$ with a
  representation of $G_0$ carrying a primitive vector of weight $\lambda_0$.
- Argument (this dispatch): dominance on the product is tested by the coroots
  of the semisimple factor, so $\lambda_0$ is dominant; a nonzero vector of
  $k_{\lambda_Z}$ is primitive of weight $(\lambda_Z,0)$; the tensor product
  with the semisimple primitive vector has weight $\lambda$.
- Sources: Milne 22.20 proof and 22.26 final paragraph; Steinberg Theorem
  39(e). Checks: precheck PASS, proof-layout 0 defects, rendercheck OK. Open:
  none.

### C33. `lem-dominant-characters-arise-as-primitive-weights-for-split-reductive-groups` — AUTHORED (level 35)

- Claim: every dominant character of a split reductive group is the highest
  weight of a simple finite-dimensional rational representation, equivalently
  is the weight of a primitive vector.
- Argument (this dispatch): pull $\lambda$ back to
  $H=Z(G)^\circ\times G_{\mathrm{der}}$ along the central isogeny of 19.25; the
  product lemma gives an $H$-module with a primitive vector of weight
  $\lambda_H$; passing to the simple quotient gives a simple $H$-module of
  highest weight $\lambda_H$; since $\lambda_H$ is a pullback from $T$, the
  descent lemma factors it through $G=H/N$, yielding a simple $G$-module of
  highest weight $\lambda$, finite-dimensional by the general finiteness
  theorem.
- Repair: dependencies completed with
  [[prop-module-generated-by-a-primitive-vector]],
  [[lem-simple-rational-representations-are-finite-dimensional]],
  [[thm-simple-rational-representations-have-a-highest-weight]] and
  [[def-derived-subgroup-and-solvable-algebraic-group]].
- Sources: Milne 22.20 and 19.25, printed pp. 404 and 469-471; Steinberg
  Theorem 39(e) transition. Checks: precheck PASS, proof-layout 0 defects,
  rendercheck OK. Open: none.

### C34. `thm-dominant-weights-classify-simple-rational-modules-for-split-reductive-groups` — AUTHORED (level 36)

- Claim: for every $\lambda\in X(T)^+$ there is a simple $V(\lambda)$, unique
  up to isomorphism, with
  $V(\lambda)=V(\lambda)_\lambda\oplus\bigoplus_{\mu<\lambda}V(\lambda)_\mu$,
  $\dim V(\lambda)_\lambda=1$; every simple module is such a $V(\lambda)$ for
  unique $\lambda$; the class map is a bijection, in every characteristic.
- Argument (this dispatch): existence as the simple quotient of the module
  generated by a primitive vector of weight $\lambda$; uniqueness and
  exhaustiveness from the highest-weight theorem plus the equal-highest-weight
  theorem. No characteristic hypothesis is used.
- Sources: Milne 22.2-(22.3) with (22.17)-(22.20) and (22.24)-(22.26);
  Steinberg Theorem 39(a)-(e). Checks: precheck PASS, proof-layout 0 defects,
  rendercheck OK. Open: none.

### C35. `rem-highest-weight-classification-does-not-imply-semisimplicity-in-positive-characteristic` — AUTHORED (remark, level 37)

- Claim: the classification holds in every characteristic but does not imply
  semisimplicity of all rational representations; complete reducibility is a
  characteristic-zero phenomenon, with the counterexample on the B page.
- Remark only (precheck n/a, rendercheck OK). Forward reference to
  [[cex-rational-modules-need-not-be-semisimple-in-characteristic-p]] declared
  in `forward_refs` and linked in the body; fwdcheck clean on the pair.
- Sources: Milne 12.55-(12.56), Exercise 12-9 and 22.46-(22.47); Steinberg after
  Theorem 39(e). Open: none.

### C36. `ex-fundamental-sl2-modules-in-characteristic-p` — AUTHORED (B page, level 37)

- Claim: with $X(T_2)=\mathbb Z\chi$, $\omega=\chi$, dominant
  $X(T_2)^+=\{m\chi\}$, the unique simple $L(m)$ has one-dimensional top weight
  space and weights in $\{(m-2j)\chi\}$ with multiplicity at most one, so
  $\dim L(m)\le m+1$; in characteristic $p>0$ the span $W$ of $e_1^p,e_2^p$ in
  $S^p(k^2)$ is a two-dimensional simple submodule isomorphic to $L(p)$ and
  realized as the Frobenius twist of $L(1)$.
- Argument (this dispatch): $U^-$-generation gives
  $L(m)=\bigoplus_i kv_i$ with $v_i\in L(m)_{(m-2i)\chi}$ (Vandermonde over a
  field extension); $w_0=-1$ symmetry bounds $i\le m$; the Frobenius
  computation $g\cdot e_i^p=(g\cdot e_i)^p$ makes $W$ a submodule, which is
  simple because its only weight lines are $\pm p\chi$ and $U^\pm$ exchange
  them; then $e_1^p$ is a primitive vector of weight $p\chi$ and the
  classification identifies $W\cong L(p)$.
- Warning kept: simplicity of the whole $S^m(k^2)$ for $m<p$ is not claimed
  (Springer not read); only the Frobenius-twist submodule is used.
- Sources: Milne 22.33, printed pp. 473-474 and 12.55; Steinberg Example (a)
  after Theorem 41. Checks: precheck PASS, proof-layout 0 defects, rendercheck
  OK. Open: none.

### C37. `cex-rational-modules-need-not-be-semisimple-in-characteristic-p` — AUTHORED (B page, level 38)

- Claim (refutation): for every prime $p$, $V=S^p(k^2)$ over a field of
  characteristic $p$ is a finite-dimensional rational representation of the
  split reductive group $\mathrm{SL}_2$ that is not semisimple: $W=ke_1^p\oplus ke_2^p$
  is the unique simple submodule (the socle), and $\dim V=p+1>2$.
- Argument (this dispatch): the weight spaces of $V$ are the lines
  $ke_1^ae_2^{p-a}$; the primitive vectors are exactly the nonzero multiples of
  $e_1^p$ (the coefficient of $e_1^p$ in $u_\alpha(t)\cdot e_1^ae_2^{p-a}$ is
  $t^{p-a}$); any simple submodule contains a primitive vector, hence contains
  $e_1^p$ and therefore $W$; so the socle is $W$ and $V\ne W$, whence $V$ is
  nonsemisimple. The classification remains valid because it concerns simple
  modules only.
- Repair: dependency list completed with the characteristic-zero
  complete-reducibility theorem named in the statement (depcheck
  cited-not-in-deps) and the unipotent/primitive suppliers; decision re-recorded
  after the edit.
- Sources: Milne 12.55 and Exercise 12-9, printed pp. 249 and 253, with
  22.33 and 22.46-(22.47); Steinberg after Theorem 39(e). Checks: precheck
  PASS, proof-layout 0 defects, rendercheck OK. Open: none.

## Batch-level status and checks

- **Manifest.** `research/frontier-40-geometry-braids-rep-27-batch-20.pages.json`
  carries 35 A + 2 B items. Every row's id, kind, title, statement, deps and
  `dependency_level` was synced to the authored file (two dependency lists and
  many levels changed since the scaffold). The run-level dependency-level check
  (`node tools/item-dependency-levels.mjs check --run ...`) reports **0 errors
  for batch 20**; it reports 29 errors in other batches of this run at the
  time of writing (the count moves as sibling dispatches write; the observed
  clusters are the split-reductive batch 19 — `def-split-reductive-algebraic-group`,
  `thm-root-subgroups-of-a-split-reductive-group`, `lem-sl2-structure-and-root-coordinates`
  and their neighbours — and the burau/braid batch, each off by one relative to
  the current run state).
  Those batches are owned by sibling dispatches; they must be re-levelled by
  their owners, and the fix will not change batch 20's relative order.
- **Coverage.** `...batch-20.coverage.json` was updated: the Milne 22.21-22.22
  row was split so that 22.22 points at the repaired
  `prop-primitive-vectors-of-the-induced-coordinate-module`, the 22.24, 22.25
  and 22.26 rows were split into their two destination items, and the two
  additions (`lem-tensor-and-hom-representations-are-rational`,
  `def-simple-and-semisimple-representations`) received rows; the Milne
  locator now names Ch. 4 (4.6), (4.14)-(4.19). `coverage-checklist
  --require-destination` reports 0 errors (one advisory low-yield warning for
  the two-item B page).
- **Contracts.** `...batch-20.proof-contracts.json` (version 1, scope = the 37
  ids) records per-fact verbatim quotes from each cited item's own
  Statement/Definition section, per-step derivations with their inputs, and all
  eight boundary axes per item. Gates: `proof-contract --strict` 37/37 with 0
  errors and 0 warnings; `finite-smoke` 0 errors; `boundary-audit
  --fail-on-contradicted --fail-on-template` 0 candidates; `citation-fidelity
  --fail-on-missing-quote` 0 candidates; `risk-report` 0 errors.
- **Cross-batch ledger.** `...batch-20.cross-batch-dependencies.json` now has
  one `verified` row for each of the 144 declared cross-batch edges of the
  pair, each naming the supplier's current statement and the consumer's
  recorded use; the unified ledger refresh produced no orphaned reviews from
  batch 20. The run-wide `--require-reviewed` flag still fails because other
  batches have unreviewed edges (`11`, `17`, `18`, `19`, `6`, `9` supply
  edges read as `open` or unreviewed); that is their owners' work.
- **Scope and decisions.** A fresh non-owner scope receipt for the current
  scope hash `3427227d88b5dfd6583bf85fc8810cee3cc2d1e98677302d92bdfb50f7b2006e`
  records decision `sufficient` with the 3a §8 repair and the two additions as
  evidence. Item decisions were recorded for the 35 original scaffold ids
  (`repaired` for the 32 with statement/dependency/editorial repairs, `accept`
  for `def-primitive-vector-of-a-rational-representation`,
  `lem-normalizer-action-permutes-weight-spaces` and
  `thm-dominant-weights-classify-simple-rational-modules-for-split-reductive-groups`),
  each with `confidence: 1` and its examined dependency ids. The two
  post-scaffold additions are absent from the immutable baseline and are
  certified by the engine after successful dispatch (no self-review receipt is
  recorded); `step3-decisions check --phase final` lists exactly those two as
  outstanding work for this batch.
- **Content and format.** Explicit-path precheck on all 37 files: 31
  checked/pass, 6 definitions/remarks not applicable, 0 failing. Batched
  `proof-layout` over the 37 paths: 37 items, 158 steps, 0 defects. Rendercheck
  over the 37 paths: clean (two defects found and repaired in this dispatch: a
  multiline display in `lem-primitive-vectors-from-standard-maximal-parabolics`
  and a wikilink-like bracket in the proof of
  `lem-lie-algebra-of-a-semisimple-group-in-characteristic-zero-is-semisimple`).
  Content policy over the batch: 37 scoped items, 0 errors, 0 warnings.
  `manifest-deps`: 0 errors. `validate-plan research/plan-spec.json`: OK for the
  pages that carry item lists. `manifest-integrity --run`: 54 pages owed, 54
  present, no scope drift.
- **Defects found outside the pair (reported, not edited).**
  `items/def-determinant-of-a-square-matrix.md` lines 32-33 print the Leibniz
  sum with the product index range $i<n$ (missing the $i=n$ factor), so the
  displayed formula is not alternating for $n\ge2$; the companion theorem
  [[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]] is what
  this pair's exterior-power item uses. Confidence: confirmed display defect;
  owner routing: published item, report only.
  `node tools/depcheck.mjs` over the run reports one published B-leaf error not
  in this pair (`items/lem-blowup-charts-of-the-quadric-cone.md` depends on
  `ex-blowup-affine-three-space-origin-exceptional-p2`, which lives only on the
  `blowups-exceptional-divisors-and-strict-transforms-examples` page), and
  `extcheck` reports `cex-no-claim-of-resolution-in-positive-characteristic`
  with an unused `external_refs` declaration. Both belong to sibling pairs.

## Open obligations and escalations at handoff

- O1 (engine). The two post-scaffold additions
  (`def-simple-and-semisimple-representations`,
  `lem-tensor-and-hom-representations-are-rational`) await the engine's
  auditor-created item certification after this dispatch's result is recorded;
  no open mathematical obligation is attached to them.
- O2 (siblings). The run-level dependency-level check reported 33 off-by-one
  errors in sibling batches when first run and 29 at the final pass (the count
  moves as sibling dispatches write) (notably the split-reductive batch 19 and the
  burau/braid batch), and `frontier-dependency-ledger --require-reviewed` fails
  on unreviewed edges in batches 6, 9, 11, 17, 18 and 19. Batch 20's own
  consistency is clean against the current disk state; if a sibling re-levels
  its items, the levels in this manifest may need one further sync, but the
  relative order and the mathematical content do not change.
- O3 (scope owner). None. The scope is sufficient for the pair's promised
  claims; no owner-held decision was overridden, and no escalation remains open
  for batch 20.
- O4 (source uncertainty). None recorded: every item's source locator was read
  in the fetched Milne text (or, for the general root-datum combinatorics,
  through the batch-19 items whose locators are recorded in their own files),
  and the one uncertainty from earlier (Springer's simplicity statement for
  $m<p$) is deliberately not used.
