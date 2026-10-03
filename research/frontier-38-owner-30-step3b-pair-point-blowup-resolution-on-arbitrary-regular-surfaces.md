# Step 3b auditor/author report — pair `point-blowup-resolution-on-arbitrary-regular-surfaces`

- Run: `frontier-38-owner-30` (stage `3b-author`), dispatch label
  `step3b-pair-point-blowup-resolution-on-arbitrary-regular-surfaces-7b282a08a2f6317f`.
- Role: alpha-high author (not owner). No owner ruling was invented; the binding
  owner direction `research/frontier-38-owner-30-owner-authoring-direction.md`
  controls scope.
- A page: `point-blowup-resolution-on-arbitrary-regular-surfaces` — batch 27,
  order 901, category `algebraic-geometry`, 12 items.
- B page: `point-blowup-resolution-on-arbitrary-regular-surfaces-examples` —
  batch 27, order 902, 3 items.
- Batch 27 contains this pair only; its shared files carry no sibling rows.
- Handoff status: **COMPLETE WITH 10 OPEN ESCALATIONS** — all 15 owned items
  are authored, formatted, rendered, contracted and recorded; 5 items are
  `accept`/`repaired` with confidence 1, and 10 consumer items are `escalate`
  solely because in-run batch-2 suppliers are unauthored on disk. The pair's
  proof-contract file is written; its only strict-gate errors are the 9 blocked
  citation quotes tabled below, one per unauthored supplier use.

## 0. Owned IDs and authoring order (from the dispatch)

| level | item | page |
|---:|---|---|
| 0 | `def-intersection-multiplicity-of-closed-subschemes` | A |
| 0 | `lem-increasing-sequence-of-coherent-subsheaves-stabilizes` | A |
| 2 | `def-strict-normal-crossings-divisor` | A |
| 7 | `lem-blowup-of-closed-point-of-regular-surface-is-regular` | A |
| 7 | `lem-intersection-multiplicity-drop-under-point-blowup` | A |
| 7 | `lem-point-blowup-of-integral-curve-is-finite` | A |
| 8 | `lem-normalization-factors-through-blowup-of-curve-point` | A |
| 9 | `lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center` | A |
| 10 | `thm-regularization-of-finite-normalization-curve-by-point-blowups` | A |
| 11 | `lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups` | A |
| 11 | `cex-finite-normalization-does-not-make-the-curve-regular-before-blowups` | B |
| 12 | `thm-separation-of-regular-curve-components-by-point-blowups` | A |
| 13 | `thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface` | A |
| 14 | `ex-cusp-resolution-and-delta-drop` | B |
| 14 | `ex-node-resolved-by-one-blowup` | B |

Authoring proceeds in exactly this order (level, then page order, then id).

## 0.1 Open obligations at entry

- **In-run supplier pair `blowups-exceptional-divisors-and-strict-transforms`
  (batch 2) is still unauthored.** At entry every batch-2 item file cited by
  this pair is missing from `items/`. The exact supplier IDs and consuming
  steps are flagged item by item below as they are authored; the decisions of
  their consumers stay `escalate` until the supplier file and the actual proof
  use are verified. This is the dispatch's own instruction for unfinished
  siblings.
- `thm-nonaffine-regular-local-ring-is-ufd` (batch 24, sibling pair
  `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties`) exists
  on disk; it is read and its use is verified at the item that consumes it.
- Second independent treatment of the exact arbitrary-Noetherian scope is an
  open Step-5 reconciliation item (recorded by Step 3a and the batch notes);
  owner direction permits the single fully reproduced Stacks treatment.

## Checkpoints

Each item checkpoint records: id, claim/conventions, sources and locators,
dependencies, proof route and actual use, checks run, open gaps, next action.

### CP-1 `def-intersection-multiplicity-of-closed-subschemes` (level 0) — authored

- Claim: for locally Noetherian $X$, closed $Y,Z$ with $Y$ integral of dimension
  one and its generic point outside $Z$, and $p\in Y\cap Z$ closed,
  $m_p(Y\cap Z)=\operatorname{length}_{\mathcal O_{X,p}}(\mathcal O_{Y\cap Z,p})$;
  supported in closed points, finite length, local in $p$, value $\ge1$.
- Source: Stacks tag 0BI6 (equation 54.15.2.1), re-fetched 2026-10-03 (12,593
  bytes, text confirms the displayed equation); surrounding 0BI5 read for the
  hypotheses.
- Deps: six published items as scoped, plus three published suppliers used only
  in Remarks [R1] (`thm-nilradical-of-a-noetherian-ring-is-nilpotent`,
  `cor-length-is-additive-in-short-exact-sequences`, `def-noetherian-ring-and-module`)
  and `def-integral-scheme`.
- Proof route: definition with a well-definedness discussion; Remark [R1]
  proves finite length of a zero-dimensional Noetherian local ring via nilpotent
  maximal ideal and length additivity. No AC beyond cited interfaces.
- Checks: `tools/precheck.mts` not-applicable (no proof body) — 0 failing;
  `rendercheck` OK. Contract entry pending in the batch contract file.

### CP-2 `lem-increasing-sequence-of-coherent-subsheaves-stabilizes` (level 0) — authored

- Claim: increasing sequences of coherent subsheaves of a coherent module on a
  Noetherian scheme stabilize.
- Source: Stacks tag 0BI4 (proof of Lemma 54.15.1 cites Cohomology of Schemes
  30.10.1); tag 01X8 (Section 30.10) re-fetched 2026-10-03. Locator recorded in
  the item.
- Deps: the six scoped manifest deps plus three published suppliers
  (`thm-coherent-scheaves-abelian-noetherian-scheme`, `def-finite-type-finite-presentation-module-sheaf`,
  `lem-finite-modules-over-noetherian-rings-are-noetherian`, and
  `def-axiom-of-choice` for the inherited affine interface).
- Choice: AC is inherited through `thm-affine-quasi-coherent-equivalence`; the
  Statement discloses this explicitly and the only selection is of one given
  finite affine cover.
- Checks: `tools/tsx-run.mjs tools/precheck.mts` PASS (auto-repair canonical
  numbering adopted: 1.1, 2.1, 3.1, 4.1, 5.1); rendercheck OK;
  `/tmp/proof-layout-local.mjs` (same scan as `tools/proof-layout.mjs`, run with
  the web checkout's tsx because the worker checkout has no installed tsx) —
  1 item, 5 steps, 0 defects. Contract entry pending.
- Open gap: none. Next: `def-strict-normal-crossings-divisor`.

**Tooling note (applies to every checkpoint).** At the start of this stage the
stock `node tools/proof-layout.mjs items/...` could not start: the web checkout
has `node_modules` but the tsx loader selected at the time failed on the
renderer's JSX import, so the identical scan logic (explicit-file mode) was run
through `/tmp/proof-layout-local.mjs` with the web checkout's installed tsx.
Later in the stage the checkout's loader resolution was fixed (`tools/paths.mjs`
/ loader hooks are modified in the shared worktree) and the literal command
`node tools/proof-layout.mjs items/<all 15 owned items>` now runs and reports
"15 items, 73 steps, 0 defects" (final run recorded in the checks section
below). `tools/tsx-run.mjs tools/precheck.mts` worked throughout.

### CP-3 `def-strict-normal-crossings-divisor` (level 2) — authored

- Claim: for a reduced curve $D$ on a regular surface $S$, the pointwise
  conditions (a)-(c) define an SNC divisor; equivalent to the Stacks
  finite-subset regular-intersection criterion specialized to a surface,
  including the explicit no-triple-point requirement; local-equation form and
  no-smoothness caveat preserved.
- Sources: Stacks 0BIA (Definition 41.21.1, Lemma 41.21.2 with proof) and 0BIC
  re-fetched 2026-10-03; the criterion quoted is the finite-subset form with
  codimension $|J|$ and the comment resolution about empty intersections.
- Deps: the six scoped manifest deps plus `def-dimension-noetherian-topological-space`
  (used in the well-definedness sentence about chains).
- Checks: precheck n/a (definition); rendercheck OK; proof-layout has zero
  numbered steps for this item (definition) and is not run alone.
- Open gap: none.

### CP-4 `lem-blowup-of-closed-point-of-regular-surface-is-regular` (level 7) — authored

- Claim: $S'$ stays regular of pure dimension two, $E$ effective Cartier,
  $E\cong\mathbb P^1_{\kappa(p)}$ in the two-dimensional case, $\pi$ an
  isomorphism with $E=\operatorname{Spec}\kappa(p)$ in the dimension-one case,
  isomorphism off $E$, no new singular one-dimensional components, no
  smoothness claim.
- Proof route: two local charts $A[\mathfrak m/x]$, $A[\mathfrak m/y]$ with
  $A=\mathcal O_{S,p}$; chart algebra $A[\mathfrak m/x]\cong A[T]/(xT-y)$
  (primality of $xT-y$ in the UFD $A[T]$ kills the $x$-power torsion); the
  regularity computation treats primes over $\mathfrak m$ in two cases and uses
  the parameter-quotient lemma; $E\cong\operatorname{Proj}(\operatorname{gr}_{\mathfrak m}A)
  =\mathbb P^1_{\kappa(p)}$; dimension-one branch via the DVR criterion.
- Sources: Stacks 0AGQ (54.3.1) re-fetched 2026-10-03 for the $E=\mathbb P^1$
  identification; the chart-regularity proof is the author's own local algebra
  and is not attributed to 0AGQ.
- **Direct unfinished in-run suppliers (batch 2) and consuming steps**:
  `thm-affine-blowup-standard-charts` (step 1.1),
  `lem-blowup-local-on-base-scheme` (step 1.1),
  `thm-blowup-base-change-flat` (step 1.1),
  `lem-affine-blowup-algebra-properties` (steps 2.1, 4.1),
  `thm-pullback-center-ideal-invertible` (step 6.1),
  `thm-exceptional-divisor-normal-cone-proj` (step 6.1),
  `thm-blowup-effective-cartier-divisor-isomorphism` (step 2.2).
  Decision stays `escalate` while these remain unauthored.
- Checks: precheck PASS (canonical numbering 1.1-7.1 adopted, 8 steps);
  proof-layout 0 defects; rendercheck OK.
- Observation (low severity, reported not edited): under the literal
  hypotheses (closed point of a pure two-dimensional scheme) the branch
  $\dim\mathcal O_{S,p}=1$ is vacuous, since $\dim\mathcal O_{S,p}=2$ there.
  The branch is retained as promised; it is used in the degenerate
  one-dimensional-centre formulation.

### CP-5 `lem-intersection-multiplicity-drop-under-point-blowup` (level 7) — authored

- Claim: with $Y$ integral of dimension one, its generic point outside $Z$, and
  $\mathcal O_{Y,p}$ regular: (1) $Y'\to Y$ is an isomorphism; (2) $Y'$ meets
  $E$ in the unique point $q$ over $p$ with $m_q(Y'\cap E)=1$; (3) if
  $q\in Z'$ then $m_q(Y'\cap Z')<m_p(Y\cap Z)$; transversal case disjoint.
- Proof route: local model $A=\mathcal O_{X,p}$; uniformizer $x_1$ with
  $\mathfrak m=I+(x_1)$; $J(A/I)=(\overline x_1^N)$ and $N=m_p(Y\cap Z)$; the
  well-defined chart homomorphism $\psi:A[\mathfrak m/x_1]\to A/I$ identifies
  the strict transform in the chart; $Y'\cap E=A/(I+(x_1))=\operatorname{Spec}\kappa(p)$;
  the saturated strict transform of $Z$ contains $f/x_1$, giving
  $m_q(Y'\cap Z')\le N-1$.
- Sources: Stacks 0BI7 (Lemma 54.15.3) complete proof re-fetched 2026-10-03;
  the well-definedness of psi and the saturation inequality are written out in
  full (the source leaves them terse).
- **Unfinished in-run suppliers (batch 2) and consuming steps**:
  `thm-blowup-closed-immersion-transform-universal` (step 2.1),
  `thm-blowup-effective-cartier-divisor-isomorphism` (step 2.1),
  `thm-blowup-universal-property` (step 3.1),
  `thm-affine-blowup-standard-charts` (step 3.1),
  `lem-affine-blowup-algebra-properties` (steps 3.1, 4.1),
  `thm-pullback-center-ideal-invertible` (step 4.1),
  `def-strict-transform-closed-subscheme` (step 4.2),
  `thm-blowup-base-change-flat` (step 1.1). Decision stays `escalate`.
- Checks: precheck PASS (canonical numbering 1.1, 2.1, 3.1, 4.1, 4.2, 5.1);
  proof-layout 0 defects; rendercheck OK.

### CP-6 `lem-point-blowup-of-integral-curve-is-finite` (level 7) — authored

- Claim: blowup of a one-dimensional integral Noetherian scheme at a closed
  point is projective, finite type, finite, quasi-finite, iso off $p$, fibre
  $\operatorname{Proj}(\operatorname{gr}_{\mathfrak m_p}\mathcal O_{Y,p})$
  finite over $\kappa(p)$; $\beta$ iso $\iff$ $\mathcal O_{Y,p}$ regular
  $\iff$ $\mathfrak m_p$ invertible; regular case $\beta_*\mathcal O_{Y_1}=\mathcal O_Y$.
- Proof route: fibre $\cong\operatorname{Proj}(S)$, $S=\operatorname{gr}_{\mathfrak m}A$;
  Hilbert-Samuel in dimension one makes $\dim_{\kappa(p)}S_n$ eventually
  constant, so the Hilbert polynomial of $\mathcal O_E$ is constant of degree
  0 and $\dim E=0$; proper + quasi-finite gives finite; the criterion is read
  off the invertible pullback of the center ideal.
- Sources: Stacks 0BI4 (proof), 0AB7, 02LS, 0AGQ re-fetched/read 2026-10-03;
  locators recorded in the item.
- **Unfinished in-run suppliers (batch 2) and consuming steps**:
  `thm-blowup-projective` (step 1.1), `lem-blowup-isomorphism-off-center`
  (step 1.1), `thm-exceptional-divisor-normal-cone-proj` (step 2.1),
  `thm-pullback-center-ideal-invertible` (step 2.2),
  `thm-blowup-effective-cartier-divisor-isomorphism` (step 2.2). Decision
  stays `escalate`.
- Checks: precheck PASS (canonical numbering 1.1-6.1, 7 steps); proof-layout 0
  defects; rendercheck OK.
- Note: the finiteness of the fiber uses the library's projective
  Hilbert-polynomial machinery (`thm-hilbert-polynomial-coherent-sheaf`,
  `thm-hilbert-polynomial-degree-support-dimension`,
  `cor-h0-projective-space-o-d-homogeneous-polynomials`, `thm-serre-vanishing`)
  as suppliers; all are published items on disk and were read.

### CP-7 `lem-normalization-factors-through-blowup-of-curve-point` (level 8) — authored

- Claim: for integral Noetherian one-dimensional $Y$ with finite normalization
  $\nu$, the blowup $\beta$ at a closed point is finite, $\nu$ factors uniquely
  as $\beta\circ\nu_1$ with $\nu_1:Y^{\nu}\to Y_1$ finite birational, so $Y^{\nu}$
  is also a normalization of $Y_1$ and $\beta_*\mathcal O_{Y_1}$ is a coherent
  $\mathcal O_Y$-subalgebra of $\nu_*\mathcal O_{Y^{\nu}}$; the regular-centre
  case reduces to $\nu_1=\nu$.
- Repairs made at this level: [F1] now also links and depends on
  `def-normal-noetherian-ring` (the "local rings of a normal scheme are normal"
  clause), and [F2] now also links and depends on
  `thm-coherent-sheaves-abelian-noetherian-scheme` for coherence of the finite
  pushforward.
- Unfinished suppliers (batch 2), used only through fact links:
  `thm-pullback-center-ideal-invertible` (F3, step 3.1 via the universal
  property's effective-Cartier input) and `cor-blowup-birational-integral-scheme`
  (F4, step 3.1 dominance of $Y_1$).
- Checks: precheck PASS (canonical numbering 1.1, 2.1, 3.1, 4.1, 4.2, 5.1, 6.1,
  7.1); proof-layout 0 defects; rendercheck OK.

### CP-8 `lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center` (level 9) — authored

- Claim: at a closed non-regular centre the inclusion
  $\mathcal O_Y\subsetneq\beta_*\mathcal O_{Y_1}$ inside $\nu_*\mathcal O_{Y^{\nu}}$
  is strict, with quotient a nonzero coherent sheaf of finite length supported
  exactly at $p$; the assertion holds at every further point blowup.
- Repair made: [F3] now also links and depends on
  `thm-coherent-sheaves-abelian-noetherian-scheme` (its item 2 is exactly the
  "cokernel of coherent is coherent" clause); fact links to
  `thm-artinian-ring-characterisation-by-primes`,
  `thm-artinian-ring-has-finite-length`,
  `def-composition-series-and-length-of-a-module`,
  `def-finite-morphism-schemes`, `thm-localisation-of-modules-is-exact` and
  `cor-blowup-birational-integral-scheme` (step 3.1) were added to `deps`.
- Unfinished suppliers (batch 2):
  `thm-blowup-effective-cartier-divisor-isomorphism` (F2, step 1.1 through the
  isomorphism criterion) and `cor-blowup-birational-integral-scheme` (step 3.1).
- Checks: precheck PASS (1.1-5.1); proof-layout 0 defects; rendercheck OK.

### CP-9 `thm-regularization-of-finite-normalization-curve-by-point-blowups` (level 10) — authored

- Claim: an integral Noetherian one-dimensional $Y$ with finite normalization
  admits a finite sequence of point blowups ending regular, with every centre
  non-regular in the preceding curve, so the subalgebra sequence strictly
  increases and termination is exactly Noetherian stabilization; empty sequence
  when $Y$ is regular; no claim for non-finite normalizations or higher
  dimension.
- Repair made: `def-finite-morphism-schemes` added to `deps` (linked in [F3]).
- Unfinished suppliers (batch 2): `cor-blowup-birational-integral-scheme` (F3,
  integrality of each blowup) and `lem-blowup-reduced-integral-under-domain-rees`
  (dependency for the same integrality input).
- Checks: precheck PASS (1.1-4.1); proof-layout 0 defects; rendercheck OK.

### CP-10 `lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups` (level 11) — authored

- Claim: an integral one-dimensional closed subscheme $Y\subseteq X$ with finite
  normalization inside a Noetherian $X$ admits a finite sequence of blowups of
  $X$ at closed points whose final strict transform is regular; with the
  intrinsic centres, the strict transform in $X_i$ is canonically the $i$-th
  intrinsic blowup.
- Unfinished suppliers (batch 2), used through fact links:
  `thm-blowup-closed-immersion-transform-universal` and
  `def-strict-transform-closed-subscheme` (F2, step 3.1 induction, F4).
- Checks: precheck PASS (1.1-4.1); proof-layout 0 defects; rendercheck OK.

### CP-11 `cex-finite-normalization-does-not-make-the-curve-regular-before-blowups` (B page, level 11) — authored

- Claim (refutation): for a field of characteristic $\ne2,3$, the cuspidal
  curve $Z=V(y^2-x^3)$ has finite normalization $\nu:\mathbf A^1_k\to Z$,
  $t\mapsto(t^2,t^3)$, but is not regular at the origin ($\dim R=1$,
  $\operatorname{edim}R=2$), so finite normalization does not make $Z$ regular.
- Repair made: [F2]'s link to the classical-varieties item
  `cor-normalization-unique-up-to-unique-isomorphism` was removed; uniqueness is
  supplied by `thm-normalization-reduced-curve-exists-finite` item 4 (the
  scheme-register theorem), and the dep list was updated accordingly.
- Direct deps all exist and were read; no unfinished batch-2 supplier remains in
  this item.
- Checks: precheck PASS (1.1, 1.2, 2.1); proof-layout 0 defects; rendercheck OK.

### CP-12 `thm-separation-of-regular-curve-components-by-point-blowups` (level 12) — authored

- Claim: pairwise distinct integral one-dimensional closed subschemes
  $Y_1,\dots,Y_r\subseteq X$ with finite normalization become pairwise disjoint
  regular curves after finitely many point blowups of $X$.
- Proof route: regularize one component at a time via CP-10 and preservation
  from the multiplicity-drop lemma; then lower the maximum pairwise multiplicity
  with the drop clause; then separate the multiplicity-one contacts.
- Unfinished suppliers (batch 2): `def-strict-transform-closed-subscheme` (the
  strict-transform vocabulary used through [F2] and the Statement) and
  `thm-blowup-closed-immersion-transform-universal` (F2).
- Checks: precheck PASS (1.1, 2.1, 3.1, 3.2, 4.1); proof-layout 0 defects;
  rendercheck OK.

### CP-13 `thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface` (level 13) — authored

- Claim: for a regular surface $S$ (locally Noetherian, pure dimension two, all
  local rings regular) and a reduced curve $Z\subseteq S$ with finite
  normalization of every component, finitely many point blowups make the total
  transform an effective Cartier divisor whose support is SNC; only regularity,
  never smoothness over a field, is used.
- Proof route: Cartier property from local factoriality; separation via CP-12;
  total transform and multiplicity-one contacts; elimination of triple points;
  terminal SNC verification against the finite-component definition.
- Unfinished suppliers (batch 2): `def-strict-transform-closed-subscheme`
  (Statement and construction of strict transforms) and
  `thm-pullback-center-ideal-invertible` (step 3.1, invertibility of the
  inverse image ideal).
- Checks: precheck PASS (1.1-6.1); proof-layout 0 defects; rendercheck OK.

### CP-14 `ex-cusp-resolution-and-delta-drop`, `ex-node-resolved-by-one-blowup` (B page, level 14) — authored

- Cusp: one blowup makes the strict transform the regular normalization and
  drops the multiplicity $2\to1$; the exceptional contact is $2$, so two further
  blowups (transverse triple point, then its separation) reach SNC; the defect
  drops $\delta_k=1\to0$, matching $r\,m(m-1)/2=1$.
- Node (char $\ne2$): the two formal branches have distinct tangents; one blowup
  separates them into the two points $t=\pm1$ of $E$ with multiplicity one, and
  the strict transform is the normalization, so the support is SNC after one
  blowup.
- Repair made in `ex-cusp`: [F3]'s link to the classical-varieties item
  `cor-normalization-unique-up-to-unique-isomorphism` was removed (uniqueness
  comes from `thm-normalization-reduced-curve-exists-finite`); `ex-node` [F2]
  was rewritten to cite the scheme-register normalization theorem plus its own
  finite/birational/`±1` computation instead of
  `cex-normalization-not-injective-node` (a classical-varieties counterexample
  whose scope does not by itself cover an arbitrary characteristic-$\ne2$ field),
  and its deps were updated.
- Unfinished supplier (batch 2): `lem-blowup-multiplicity-euler-characteristic-drop`
  (cusp [F4], step 3.2 defect formula).
- Checks: precheck PASS; proof-layout 0 defects; rendercheck OK.

## Unfinished in-run suppliers (batch 2) and consuming steps

All of the following are planned in `frontier-38-owner-30-batch-2.pages.json`
but have no item file yet at the time of this checkpoint. Each is a direct dep
or cited supplier of an owned item; consumers stay `escalate` until the file
lands and the actual use is verified.

| supplier | consumer item(s) | consuming step(s) |
|---|---|---|
| `def-strict-transform-closed-subscheme` | `lem-intersection-multiplicity-drop-under-point-blowup`; `thm-separation-...`; `lem-regularization-of-curve-on-noetherian-ambient-...`; `thm-embedded-snc-resolution-...` | IT 3.1, 4.2; SEP F2/Statement; AMB F2, F4, step 3.1; SNC Statement/step 3.1 |
| `thm-blowup-closed-immersion-transform-universal` | `lem-intersection-multiplicity-drop-...`; `lem-regularization-of-curve-on-...`; `thm-separation-...` | IT 2.1; AMB F2, step 3.1; SEP F2 |
| `thm-blowup-effective-cartier-divisor-isomorphism` | `lem-blowup-of-closed-point-...`; `lem-intersection-multiplicity-drop-...`; `lem-point-blowup-of-integral-curve-...`; `lem-strict-blowup-...` | BL 2.2; IT 2.1; PB 2.2; SB F2/step 1.1 |
| `thm-pullback-center-ideal-invertible` | `lem-blowup-of-closed-point-...`; `lem-intersection-multiplicity-drop-...`; `lem-point-blowup-of-integral-curve-...`; `lem-normalization-factors-...`; `thm-embedded-snc-resolution-...` | BL 6.1; IT 4.1; PB 2.2; NF F3; SNC 3.1 |
| `thm-exceptional-divisor-normal-cone-proj` | `lem-blowup-of-closed-point-...`; `lem-point-blowup-of-integral-curve-...` | BL 6.1; PB 2.1 |
| `thm-blowup-projective` | `lem-point-blowup-of-integral-curve-is-finite` | PB 1.1 |
| `cor-blowup-birational-integral-scheme` | `lem-normalization-factors-...`; `thm-regularization-...`; `lem-strict-blowup-...` | NF F4/step 3.1; REG F3/step 2.1; SB 3.1 |
| `lem-blowup-reduced-integral-under-domain-rees` | `thm-regularization-...` | REG F3 dependency |
| `lem-blowup-multiplicity-euler-characteristic-drop` | `ex-cusp-resolution-and-delta-drop` | CUSP F4/step 3.2 |

Statement-overlap note (Step 3a): batch-2 plans
`thm-blowup-regular-surface-closed-point-regular` with the same mathematical
claim as owned `lem-blowup-of-closed-point-of-regular-surface-is-regular`; no
consumer edge couples the two, so this is an owner splice decision, not a
change to either item.

## Published concerns and open reconciliations

- **Second independent source treatment.** The exact arbitrary-Noetherian scope
  is reproduced from the Stacks 54.15 thread (0BI4, 0BI5, 0BI6, 0BI7) and read
  complete; Vakil §28.4.4 is the field case only. Owner direction permits the
  single reproduced treatment; a second independent treatment remains an open
  Step-5 source-reconciliation item (also recorded by Step 3a).
- **Register-mismatch repairs (this pair).** Three draft facts had been sourced
  to classical-varieties normalization items while the owning items are
  `k`-scheme statements: cusp [F3] and cex [F2] linked
  `cor-normalization-unique-up-to-unique-isomorphism`, and node [F2] linked
  `cex-normalization-not-injective-node`. All three were repaired to the
  scheme-register supplier `thm-normalization-reduced-curve-exists-finite`
  (which contains both existence/finiteness and uniqueness), or to a local
  computation where the source was scope-narrower (node, arbitrary
  characteristic $\ne2$).
- **`def-strict-normal-crossings-divisor` convention.** The item states the
  pointwise (a)-(c) definition, its equivalence with the finite-subset
  regular-intersection criterion specialized to a surface, and the local-equation
  form; the no-smoothness caveat is explicit. No owner-held decision was
  overridden.
- No confirmed defect was found in a published (non-draft) item cited by this
  pair. The one potential published concern (the scheme/classical register
  boundary of `cex-normalization-not-injective-node`) was resolved on the
  consumer side by dropping the load-bearing use.

## Checks run (exact commands and results)

- `node tools/tsx-run.mjs tools/precheck.mts items/<all 15>` — 13 checked,
  0 failing (2 definitions are not applicable).
- `node tools/proof-layout.mjs items/<all 15>` — 15 items, 73 steps, 0 defects
  (see tooling note at CP-2; the run of 2026-10-03 succeeded literally).
- `node tools/rendercheck.mjs <all 15>` — OK, no wikilink inside math, no
  unbalanced delimiters, no multiline display block, KaTeX parses every span.
- `node tools/content-policy.mjs research/frontier-38-owner-30-batch-*.pages.json --json` —
  0 findings for this pair (run-wide 85 findings belong to other in-flight
  batches, none naming an owned id).
- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-27.pages.json` —
  15 items, 0 errors after syncing manifest deps to the item frontmatter.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` —
  816 items / 60 pages, 0 errors; batch-27 levels unchanged after the dep sync.
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-27.coverage.json --require-destination --json` —
  2 pages, 29 harvested, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-38-owner-30-batch-27.coverage.json` —
  8/8 sources fetch-verified (stamped earlier in the batch record).
- `node tools/validate-plan.mjs research/plan-spec.json` — OK (no cycle, no
  forward-reference or unresolved-id error among pages with item lists).
- `node tools/depcheck.mjs` — 49 findings naming owned items at this checkpoint,
  all of them `dep-unresolved`/`link-unresolved` on the nine unfinished batch-2
  suppliers tabled above; no `cited-not-in-deps` remains for this pair after the
  repairs logged above.
- `node tools/fwdcheck.mjs` — 26 `link-unplanned` findings naming owned items,
  all pointing at the same nine batch-2 supplier ids which are present in
  `research/frontier-38-owner-30-batch-2.pages.json` but not yet in
  `research/plan-spec.json`; this is the expected pre-splice state and is
  reported for Step 4 (no forward reference is load-bearing on the published
  spine).
- `node tools/extcheck.mjs` — 0 findings naming owned items.
- Proof contracts: complete for the 9 owned items whose sources all exist
  (`def-intersection-multiplicity-of-closed-subschemes`,
  `lem-increasing-sequence-...`, `def-strict-normal-crossings-divisor`,
  `lem-blowup-of-closed-point-...`, `lem-intersection-multiplicity-drop-...`,
  `lem-point-blowup-...`, `cex-finite-normalization-...`,
  `thm-embedded-snc-resolution-...`, `ex-node-resolved-by-one-blowup`): strict
  `tools/proof-contract.mjs` passes with 0 errors / 0 warnings. The remaining 9
  citation quotes await the batch-2 supplier files; the contract generator
  already resolves every other quote verbatim from the cited section.
- `node tools/boundary-audit.mjs <batch-27 contracts> --fail-on-contradicted
  --fail-on-template --json` — 0 contradicted, 0 template rows over all 15 items.
- `node tools/finite-smoke.mjs <batch-27 contracts>` — 0 errors (no item carries
  a finite obligation).

## Item decisions recorded (Step 3b)

Recorded with `node tools/step3-decisions.mjs record-item --run
frontier-38-owner-30` (no `--owner`, no judge/audit stamps), each with the
examined direct dependency list and concrete evidence:

| item | decision | confidence |
|---|---|---|
| `def-intersection-multiplicity-of-closed-subschemes` | `accept` | 1 |
| `lem-increasing-sequence-of-coherent-subsheaves-stabilizes` | `accept` | 1 |
| `def-strict-normal-crossings-divisor` | `accept` | 1 |
| `cex-finite-normalization-does-not-make-the-curve-regular-before-blowups` | `repaired` | 1 |
| `ex-node-resolved-by-one-blowup` | `repaired` | 1 |
| `lem-blowup-of-closed-point-of-regular-surface-is-regular` | `escalate` | 0.9 |
| `lem-intersection-multiplicity-drop-under-point-blowup` | `escalate` | 0.9 |
| `lem-point-blowup-of-integral-curve-is-finite` | `escalate` | 0.9 |
| `lem-normalization-factors-through-blowup-of-curve-point` | `escalate` | 0.9 |
| `lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center` | `escalate` | 0.9 |
| `thm-regularization-of-finite-normalization-curve-by-point-blowups` | `escalate` | 0.9 |
| `lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups` | `escalate` | 0.9 |
| `thm-separation-of-regular-curve-components-by-point-blowups` | `escalate` | 0.9 |
| `thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface` | `escalate` | 0.9 |
| `ex-cusp-resolution-and-delta-drop` | `escalate` | 0.9 |

`node tools/step3-decisions.mjs check --run frontier-38-owner-30 --phase final`
returns `closed: false` run-wide (other groups' pairs are still open; 322 items
accepted at the time of writing), and lists exactly the ten escalations above
in the owner work queue with their evidence strings. The Step 3a scope receipt
`frontier-38-owner-30-step3a-review-...` remains current: the scope hash covers
ids/kinds/titles/statements, and the dependency-list sync recorded here does not
change any item statement.

## Proof-contract status at handoff

- File written: `research/frontier-38-owner-30-batch-27.proof-contracts.json`
  (version 1, scope 15 items, 123 citations, 73 derivations, 120 boundary rows,
  0 finite-smoke obligations).
- `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-27.proof-contracts.json --strict`
  reports **9 errors, 0 warnings, 15/15 items checked**; every error is
  `citation-fact-uncontracted` on exactly one of the tabled unauthored suppliers:
  `lem-normalization-factors-...` F3 → `thm-pullback-center-ideal-invertible`,
  F4 → `cor-blowup-birational-integral-scheme`;
  `lem-strict-blowup-...` F2 → `thm-blowup-effective-cartier-divisor-isomorphism`;
  `thm-regularization-...` F3 → `cor-blowup-birational-integral-scheme`;
  `lem-regularization-of-curve-on-...` F2 → `thm-blowup-closed-immersion-transform-universal`,
  F2 and F4 → `def-strict-transform-closed-subscheme`;
  `thm-separation-...` F2 → `thm-blowup-closed-immersion-transform-universal`;
  `ex-cusp-resolution-and-delta-drop` F4 → `lem-blowup-multiplicity-euler-characteristic-drop`.
  No other error or warning names an owned item. When batch 2 lands, each
  missing entry is filled by quoting the exact passage (as done for the other
  123 citations) and the strict gate closes without any other change.
- `node tools/merge-proof-contracts.mjs --level frontier-38-owner-30 research/frontier-38-owner-30-proof-contracts.json research/frontier-38-owner-30-batch-*.proof-contracts.json` —
  merged 580 scoped items from 23 batch files (batch-27 included).
- Merged `--strict` run: 240 errors run-wide, of which 9 name owned items (the
  list just given) and 2 more name the sibling intersection-products pair
  (`lem-blowup-intersection-matrix-at-smooth-point`,
  `ex-intersection-pairing-on-blowup-of-p2`) citing the same batch-2 supplier
  ids; the remainder belong to other in-flight batches.
- Per-batch `citation-fidelity --fail-on-missing-quote`: 123 quotes, 0 not
  found, 0 widening candidates. `boundary-audit --fail-on-contradicted
  --fail-on-template`: 0 contradicted, 0 template rows. `finite-smoke`:
  0 errors.

## Handoff summary

- Owned pair complete on disk: 12 A-page items, 3 B-page items, both library
  pages (`library/algebraic-geometry/point-blowup-resolution-on-arbitrary-regular-surfaces.md`,
  `...-examples.md`), the batch-27 pages manifest, coverage, cross-batch
  dependency record, and this report; the batch proof-contract file is written
  with the 9 supplier-blocked quotes absent rather than fabricated.
- Repairs made in this stage (all on owned items, all recorded in decisions):
  * `cex-finite-normalization-...`: dropped the out-of-register classical
    normalization-uniqueness link; scheme uniqueness now from
    `thm-normalization-reduced-curve-exists-finite`.
  * `ex-cusp-resolution-and-delta-drop`: same out-of-register link removed.
  * `ex-node-resolved-by-one-blowup`: [F2] rewritten to the scheme-register
    theorem plus its own finite/birational/non-injective computation over
    characteristic $\ne2$; classical counterexample link and dep dropped.
  * `lem-normalization-factors-...`: [F1] now links and depends on
    `def-normal-noetherian-ring`; [F2] links and depends on
    `thm-coherent-sheaves-abelian-noetherian-scheme` (finite-pushforward
    coherence).
  * `lem-strict-blowup-...`: [F3] links and depends on
    `thm-coherent-sheaves-abelian-noetherian-scheme` for cokernel coherence;
    `cor-blowup-birational-integral-scheme` added to deps for the step 3.1 link.
  * `lem-point-blowup-...`, `thm-regularization-...`: missing fact-link deps
    added (`def-embedding-dimension-and-regular-local-ring`,
    `def-finite-morphism-schemes`).
- Manifest reconciliation: batch-27 `deps` rows were synced to the item
  frontmatter for all 15 items; `item-dependency-levels` recomputed cleanly and
  no declared `dependency_level` changed.
- Open obligations owned by the owner (not resolvable within this pair's
  scope): (1) the nine unauthored batch-2 supplier items tabled above, with the
  ten escalated consumer decisions; (2) Step 4 splice must add the pair's new
  item ids and resolve the duplicate-claim note
  (`thm-blowup-regular-surface-closed-point-regular` vs
  `lem-blowup-of-closed-point-of-regular-surface-is-regular`); (3) the
  pre-splice `fwdcheck` `link-unplanned` findings on the same batch-2 ids and
  the `depcheck` unresolved links clear automatically once those files land;
  (4) the open Step-5 second-independent-source reconciliation for the
  arbitrary-Noetherian scope.

## Cross-batch dependency input maintenance

`research/frontier-38-owner-30-batch-27.cross-batch-dependencies.json` was
updated after the dependency edits of this stage: 12 rows were added/refreshed
(59 rows total: 50 `verified`, 9 `open`). The verified rows include the three
register-repair suppliers re-checked against their statements
(`thm-nonaffine-regular-local-ring-is-ufd`,
`thm-blowup-universal-property`,
`thm-normalization-reduced-curve-exists-finite`); the 9 `open` rows identify the
still-unverified or unauthored batch-2 suppliers
(`thm-blowup-base-change-flat`, `lem-blowup-local-on-base-scheme`,
`def-exceptional-divisor-blowup`, `thm-pullback-center-ideal-invertible` ×3,
`cor-blowup-birational-integral-scheme` ×2) with the exact required claim and
consuming location.

`node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`
cannot complete at this checkpoint for a reason outside this pair: the YAML
loader rejects a frontmatter escape sequence in another in-flight batch's item
(`items/lem-cz-bad-part-is-integrable-away-from-expanded-cubes.md` and the
matching `Q_j^*` statement text, `\s` inside a double-quoted scalar). The
batch-27 input validates standalone (kind/status/evidence/ownership/no
duplicates). The serial reconciler should re-run the refresh after that file's
frontmatter is repaired; no owned row depends on the failure.
