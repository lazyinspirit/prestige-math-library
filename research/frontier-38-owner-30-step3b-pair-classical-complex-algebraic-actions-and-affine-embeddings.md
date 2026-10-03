# Step 3b pair checkpoints — classical-complex-algebraic-actions-and-affine-embeddings

Run `frontier-38-owner-30`, batch 23, role `alpha-high`. Owned pair: A page
`classical-complex-algebraic-actions-and-affine-embeddings` (order 879) and
B page `classical-complex-algebraic-actions-and-affine-embeddings-examples`
(order 880). This file is the task-authorized checkpoint for the ten owned
items; it is appended one item at a time in the dispatch's dependency-level
order. No other pair, item, page, plan row, or engine state is edited.

## Owned IDs (dispatch order)

Level 0: `lem-classical-affine-algebraic-set-product-coordinate-ring`.
Level 1: `def-rational-action-on-affine-variety`.
Level 2: `lem-complex-affine-group-comodule-local-finiteness`,
`prop-affine-algebraic-actions-coordinate-ring-coaction`.
Level 3: `lem-torus-rational-modules-and-gradings`,
`thm-coordinate-ring-of-affine-action-is-locally-finite`.
Level 4: `thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module`,
`cex-abstract-group-action-is-not-algebraic-action` (B).
Level 5: `ex-additive-translation-equivariant-parabola-embedding` (B),
`ex-torus-weights-and-affine-action` (B).

## Open obligations at entry (created before authoring)

1. Both library page files are absent and must be authored on this dispatch:
   `library/algebraic-geometry/classical-complex-algebraic-actions-and-affine-embeddings.md`
   and `...-examples.md` (status `draft`, manifest item/example order preserved).
2. `research/frontier-38-owner-30-batch-23.proof-contracts.json` is absent and
   must be authored for all ten items: per-step derivations/inputs, verbatim
   source-section citations for every labelled fact, and all eight boundary
   dispositions.
3. Ten current item decisions are owed via
   `tools/step3-decisions.mjs record-item` (confidence 1, examined dependency
   lists, concrete evidence), after all edits.
4. Known local repair from Step 3a: the Milne locator "Theorem 12.12 and
   Remark 12.13, p. 235" should read "printed pp. 234–235" (statement begins
   on printed p. 234; PDF pp. 245–246 is correct). Recheck against the cached
   full text before editing.
5. Cross-batch input `research/frontier-38-owner-30-batch-23.cross-batch-dependencies.json`
   is `[]`; recheck against the run's dependency records and the ledger brief.
6. No direct in-run prerequisite pair was named for inspection. All direct
   item suppliers are either in-pair or published; recheck at each item.

## Inputs read at entry (exact paths)

- `CLAUDE.md`, `SCHEMA.md`; `AGENTS.md` (repository entrypoint).
- Dispatch prompt `research/frontier-38-owner-30-dispatch/alpha-high-step3b-pair-classical-complex-algebraic-actions-and-affine-embeddings-258da28d066838f9.prompt.md`
  and task file `research/frontier-38-owner-30-step3b-pair-classical-complex-algebraic-actions-and-affine-embeddings-258da28d066838f9.task.md`.
- Owner direction `research/frontier-38-owner-30-owner-authoring-direction.md`
  (879/880 bullet; local-prerequisite rule; source/gate discipline).
- Design row AG-ACT-2 in
  `research/plan-algebraic-geometry-expansion-track.md` (line 209): the four
  design A ids, the two design B ids, the "prove the equivariant embedding
  separately from group linearity" instruction, the Brion/Gille/Milne source
  route, and the explicit "does not require AG-GS-2/873" boundary are all
  realized by the scaffold and preserved by this audit.
- Step 3a report and receipt
  `research/frontier-38-owner-30-step3a-pair-classical-complex-algebraic-actions-and-affine-embeddings.md`
  and `...-step3a-review-classical-complex-algebraic-actions-and-affine-embeddings.json`
  (decision `sufficient`; §"Decision" and §"Residual uncertainty").
- Batch carriers `research/frontier-38-owner-30-batch-23.pages.json`,
  `...-batch-23.coverage.json`, `...-batch-23.notes.md`,
  `...-batch-23.cross-batch-dependencies.json`; local packet
  `research/frontier-38-owner-30-local-prereq-879.md`.
- `research/plan-spec.json` rows 879/880 (`requires` and item objects compared
  against the manifest: currently identical).
- Step-1 readiness records `research/frontier-38-owner-30-step1-<id>.json` for
  all ten items; pre-author baseline
  `research/frontier-38-owner-30-step3-auditor-baseline.json` (all ten ids are
  original scaffold ids and require ordinary current item decisions).
- All ten item files, and the published suppliers
  `def-classical-affine-coordinate-ring`,
  `def-classical-affine-variety-morphism`,
  `thm-classical-polynomial-functions-equal-coordinate-ring`,
  `thm-classical-affine-morphisms-coordinate-ring-antiequivalence`,
  `thm-classical-affine-nullstellensatz-correspondence`,
  `thm-classical-affine-global-regular-functions-coordinate-ring`,
  `def-axiom-of-choice`.
- Cached full texts with stamped hashes (`/tmp/brion.pdf` sha256_16
  `1abc97e4b6ff41d6`; `/tmp/gille.pdf` `4af2da88fd58a7da`;
  `/tmp/milne-groups.pdf` `f2ddd8fa4d263085`): Brion Def. 1.4, Lem. 1.5,
  Defs. 1.6/1.8, Ex. 1.7, Prop. 1.9 (printed pp. 3–4); Gille Prop. 6.0.5 with
  proof (pp. 25–27), Prop. 6.2.1 (pp. 30–31), Thm. 6.3.1 (p. 32); Milne
  Rmk. 4.1 (printed pp. 83–84), Prop. 4.7/Cor. 4.8 (p. 86), Thm. 12.12/Rmk.
  12.13 (printed pp. 234–235).

## Conventions in force

- Left actions; function action `(r(g)f)(x)=f(g^{-1}x)`; direct-action
  pullback `δ(f)(g,x)=f(gx)` in `H⊗A`; equivalent right-comodule algebra
  `c=τ(S⊗id)δ`, `c(f)(x,g)=f(g^{-1}x)`.
- Rational `G`-module: every vector lies in a finite-dimensional stable
  subspace on which `G` acts algebraically (Brion Def. 1.6).
- Axiom of Choice is carried only where the published Nullstellensatz route is
  actually used: the coaction dictionary (via
  `thm-classical-affine-morphisms-coordinate-ring-antiequivalence`), the
  coordinate-ring local-finiteness theorem, the affine realization clause of
  the torus lemma (via `thm-classical-affine-nullstellensatz-correspondence`),
  the embedding theorem, and the three B consumers. The product lemma, the
  action definition, and the vector-space comodule lemma are choice-free.
- No irreducibility, connectedness, or reductivity hypothesis is added; empty
  and reducible sets are retained.

## Checkpoints (one per audited item, in dispatch order)

### 1. `lem-classical-affine-algebraic-set-product-coordinate-ring` (level 0)

- Claim: for affine algebraic sets $X,Y$ over $\mathbb C$, including empty or
  reducible sets, $\mathbb C[X]\otimes\mathbb C[Y]\to\mathbb C[X\times Y]$,
  $f\otimes h\mapsto((x,y)\mapsto f(x)h(y))$, is an isomorphism, with the
  three-factor iteration; choice-free.
- Audit: surjectivity splits ambient polynomials into separate-variable
  products; injectivity represents a kernel element with second-factor
  coefficients linearly independent in $\mathbb C[Y]$ (function space, via F1)
  and evaluates at $x\in X$, forcing every coefficient function to vanish; the
  empty-factor cases are $0\to0$. The argument is complete and correct; no
  repair needed. Supplier `thm-classical-polynomial-functions-equal-coordinate-ring`
  was re-read (its own empty case is included) and
  `def-classical-affine-coordinate-ring` confirms $\mathbb C[\varnothing]=0$.
- Deps checked: `thm-classical-polynomial-functions-equal-coordinate-ring`,
  `def-classical-affine-coordinate-ring` (both published; both used in proof).
- Checks: precheck PASS; rendercheck PASS.

### 2. `def-rational-action-on-affine-variety` (level 1)

- Claim/conventions: complex affine algebraic groups with $\Delta,\varepsilon,S$;
  algebraic left actions; equivariant morphisms; rational modules by
  finite-dimensional algebraic stability; inverse-pullback function action
  $(r(g)f)(x)=f(g^{-1}x)$, its right-comodule form, and the distinct
  direct-action pullback; $\mathbb C[\varnothing]=0$ and the zero module are
  allowed.
- Audit: every Hopf identity asserted in the body was re-derived by evaluation
  on group points ($(\Delta\otimes\operatorname{id})\Delta=(\operatorname{id}\otimes\Delta)\Delta$
  at $(g,h,k)$; counit identities at $g$; antipode products
  $h(g^{-1}g)=h(gg^{-1})=\varepsilon(h)$), and $S^2=\operatorname{id}$ is
  immediate from inversion squared. The right-comodule convention is
  consistent with Brion, Defs. 1.4/1.6/1.8 and Gille, Prop. 6.0.5. No AC in the
  definition; no repair needed.
- Deps checked: `def-classical-affine-coordinate-ring`,
  `def-classical-affine-variety-morphism`,
  `lem-classical-affine-algebraic-set-product-coordinate-ring` (all used; the
  third for $\Delta,\varepsilon,S$ well-definedness).
- Checks: rendercheck PASS; proof `n/a` as a definition.

### 3. `lem-complex-affine-group-comodule-local-finiteness` (level 2)

- Claim: every finite subset of a right $H$-comodule $V$ lies in a
  finite-dimensional subcomodule; evaluation gives a linear $G$-action that is
  algebraic on each such $W$, so $V$ is a directed union of finite-dimensional
  rational submodules; choice-free.
- Audit: the quotient-map computation
  ($(q\otimes\operatorname{id})c(v_i)=0$ from coassociativity and independence
  of $h_i$) is valid, and $\ker(q\otimes\operatorname{id})=W_v\otimes H$ was
  checked over the field directly (finite tensor expression with independent
  second-factor coefficients). Finiteness/directedness and the matrix argument
  were checked: $A(g)A(h)=A(gh)$, $A(e)=I$, so $A(g)^{-1}=A(g^{-1})=(S(a_{ij})(g))$
  is regular; no infinite basis is selected (finite-dimensional bases only, no
  AC). This is a correct choice-free specialization of Gille Thm. 6.3.1 and
  Milne Prop. 4.7/Cor. 4.8 (both re-read; their proofs use an infinite basis,
  which the local argument replaces). No repair needed.
- Deps checked: `def-rational-action-on-affine-variety` (conventions only).
- Checks: precheck PASS; rendercheck PASS.

### 4. `prop-affine-algebraic-actions-coordinate-ring-coaction` (level 2)

- Claim: bijection between algebraic left actions on $X$ and unital algebra maps
  $\delta:A\to H\otimes A$ with the two coaction identities; the equivalent
  right-comodule algebra $c=\tau(S\otimes\operatorname{id})\delta$; equivariant
  morphisms correspond to coaction-intertwining algebra maps; AC inherited from
  the affine antiequivalence.
- Audit: both identities were verified on functions for an action and
  conversely through the pullback reconstruction. The inversion conversion was
  checked: $c(f)(x,g)=f(g^{-1}x)=(\tau(S\otimes\operatorname{id})\delta(f))(x,g)$,
  and $b(x,g)=g^{-1}x$ satisfies $b(b(x,g),h)=b(x,gh)$ with $b(x,e)=x$.
  Equivariance $\delta_Xu^*=(\operatorname{id}\otimes u^*)\delta_Y$ was checked
  to be exactly $u(gx)=gu(x)$. AC is used only through F2
  (`thm-classical-affine-morphisms-coordinate-ring-antiequivalence`), whose
  statement itself assumes AC for the Nullstellensatz route; no basis is
  selected. Empty $X$ handled ($A=0$). No repair needed.
- Deps checked: `def-rational-action-on-affine-variety`,
  `lem-classical-affine-algebraic-set-product-coordinate-ring`,
  `thm-classical-affine-morphisms-coordinate-ring-antiequivalence`,
  `def-axiom-of-choice` (all used).
- Checks: precheck PASS; rendercheck PASS.

### 5. `thm-coordinate-ring-of-affine-action-is-locally-finite` (level 3)

- Claim: AC assumed; for an algebraic $G$-action on an affine algebraic set
  $X$, $\mathbb C[X]$ with $(gf)(x)=f(g^{-1}x)$ is a rational $G$-module, every
  finite set of functions lying in a finite-dimensional stable algebraic
  subspace; multiplication and unit are preserved; no irreducibility or
  reductivity.
- Audit: direct application of the comodule lemma to the right-comodule
  algebra from the coaction proposition; multiplicativity and unit preservation
  follow because $c$ is an algebra map. Empty $X$ and disconnected $G$ are
  covered by the suppliers (re-read). AC correctly localized. No repair needed.
- Deps checked: `prop-affine-algebraic-actions-coordinate-ring-coaction`,
  `lem-complex-affine-group-comodule-local-finiteness`,
  `def-rational-action-on-affine-variety`, `def-axiom-of-choice`.
- Checks: precheck PASS; rendercheck PASS.

### 6. `lem-torus-rational-modules-and-gradings` (level 3)

- Claim: for $T=(\mathbb C^*)^r$, right $H$-comodules (equivalently rational
  $T$-modules) correspond to direct-sum gradings $V=\bigoplus_mV_m$; intertwining
  maps are exactly degree-preserving; a coordinate-ring action corresponds to a
  grading with $1\in A_0$, $A_mA_n\subseteq A_{m+n}$; conversely such a grading
  of a finitely generated reduced complex algebra comes from an affine algebraic
  $T$-action (AC there); function weights are opposite to point weights,
  $f(tx)=t^{-m}f(x)$ for $\deg f=m$.
- Audit: the projector computation was re-derived: from coassociativity
  $p_np_m=\delta_{nm}p_m$, from the counit ($\varepsilon(t^m)=1$) $v=\sum_mp_m(v)$;
  the converse direct-sum construction satisfies both comodule identities; the
  glue of rational submodule coactions is justified because Laurent polynomials
  vanishing on all of $T$ are zero (and the $r=0$ case is trivial). Degree
  preservation for intertwiners follows by coefficient comparison. The grading
  laws $A_mA_n\subseteq A_{m+n}$ and $1\in A_0$ were checked both ways; the
  reconstruction of a graded algebra uses the radical presentation and the
  published Nullstellensatz (where AC is used), matching Brion Ex. 1.7, Gille
  Prop. 6.2.1 and Milne Thm. 12.12/Rmk. 12.13 (re-read). No repair needed.
- Deps checked: `def-rational-action-on-affine-variety`,
  `prop-affine-algebraic-actions-coordinate-ring-coaction`,
  `def-classical-affine-coordinate-ring`,
  `thm-classical-affine-nullstellensatz-correspondence`, `def-axiom-of-choice`.
- Checks: precheck PASS; rendercheck PASS.

### 7. `thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module` (level 4)

- Claim: AC assumed (Nullstellensatz and morphism dictionary); there is a
  finite-dimensional rational $W\subseteq\mathbb C[X]$ generating the algebra
  such that $\mathrm{ev}:X\to W^*$, $\mathrm{ev}(x)(w)=w(x)$, is an equivariant
  isomorphism onto a closed invariant algebraic subset for the dual action
  $(g\lambda)(w)=\lambda(g^{-1}w)$; no connectedness/irreducibility/reductivity.
- Audit: generators in one rational submodule; dual action algebraic because
  $A(g)^{-1}=A(g^{-1})$ makes inverse matrix entries regular
  ($S(a_{ij})$); $\pi:\mathbb C[z_i]\to A$ has radical kernel, F4 identifies
  $\mathbb C[V(I)]$ with the quotient, F3 gives inverse morphisms and hence
  $\mathrm{ev}$ has image exactly $V(I)$; equivariance
  $(g\,\mathrm{ev}(x))(w)=\mathrm{ev}(gx)(w)$ was re-derived. Empty $X$ is the
  unit ideal case $0\subset\mathbb C$ with $\varnothing=V(I)$. AC localized to
  F3/F4. No repair needed.
- Deps checked: `def-rational-action-on-affine-variety`,
  `thm-coordinate-ring-of-affine-action-is-locally-finite`,
  `def-classical-affine-coordinate-ring`,
  `thm-classical-affine-nullstellensatz-correspondence`,
  `thm-classical-affine-morphisms-coordinate-ring-antiequivalence`,
  `def-axiom-of-choice`.
- Checks: precheck PASS; rendercheck PASS.

### 8. `cex-abstract-group-action-is-not-algebraic-action` (B, level 4)

- Refuted statement: every abstract action of the group of complex points of an
  affine algebraic group on an affine algebraic set is algebraic and induces a
  rational coordinate-ring representation.
- Audit: $G=(\mathbb C,+)$ acting on $\mathbb A^1$ by $g\cdot x=x+\overline g$
  is an abstract action (additivity of conjugation), each fixed $g$ acts by a
  polynomial, and the joint map is not a morphism: restricting along
  $g\mapsto(g,0)$ would give a polynomial equal to $\overline g$ on $\mathbb R$,
  hence to $z$, contradicting its value $i$ at $i$. The stable subspace
  $W=\mathbb C1+\mathbb Cz$ has nonregular matrix coefficient
  $-\overline g$, and every larger finite-dimensional stable subspace
  containing $z$ contains the translate $z-1$ (group element $1$) and hence
  $1$; restriction to a stable $W$ in any larger algebraic stable subspace
  would have regular matrix coefficients by block extraction. Repair applied
  (this dispatch): the compressed phrase "$(1\cdot z)-z=-1$" was rewritten to
  name the translate $z-1$ and the difference $z-(z-1)=1$, removing the risk of
  reading $1\cdot z$ as multiplication by the constant function $1$.
- Deps checked: `def-rational-action-on-affine-variety`,
  `prop-affine-algebraic-actions-coordinate-ring-coaction`,
  `thm-coordinate-ring-of-affine-action-is-locally-finite`,
  `def-axiom-of-choice`,
  `thm-classical-affine-global-regular-functions-coordinate-ring`,
  `thm-classical-polynomial-functions-equal-coordinate-ring` (all used in F1–F3).
- Checks re-run after repair: precheck PASS; rendercheck PASS.

### 9. `ex-additive-translation-equivariant-parabola-embedding` (B, level 5)

- Claim: for $G=(\mathbb C,+)$ acting on $\mathbb A^1$ by $g\cdot x=x+g$,
  $W=\operatorname{span}(1,z,z^2)$ is a generating rational coordinate
  submodule; evaluation is $(1,x,x^2)\in W^*\cong\mathbb A^3$ with closed image
  $a=1$, $c=b^2$, and ambient linear action
  $g(a,b,c)=(a,b+ga,c+2gb+g^2a)$.
- Audit: $r(g)1=1$, $r(g)z=z-g$, $r(g)z^2=z^2-2gz+g^2$ and the dual action
  (using $r(g^{-1})z=z+g$) were re-derived, matching the displayed formula;
  the image $\{a=1,c=b^2\}$ has the regular inverse $x=b$, and
  $g\cdot(1,b,b^2)=(1,b+g,(b+g)^2)$ displays equivariance. AC is cited only
  for the A-page embedding theorem. No repair needed (the earlier
  $\iota\to\mathrm{ev}$ notation repair is already in the file).
- Deps checked: `def-rational-action-on-affine-variety`,
  `thm-coordinate-ring-of-affine-action-is-locally-finite`,
  `thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module`,
  `def-axiom-of-choice`.
- Checks: precheck PASS; rendercheck PASS.

### 10. `ex-torus-weights-and-affine-action` (B, level 5)

- Claim: for $T=\mathbb C^*$ acting on $\mathbb A^2$ by
  $t(x,y)=(tx,t^{-1}y)$, the coordinate action has $\deg x=-1$, $\deg y=1$,
  $x^ay^b$ has degree $b-a$, $A_0=\mathbb C[xy]$, and $W=\mathbb Cx+\mathbb Cy$
  gives the identity embedding into its dual plane with weights $(1,-1)$.
- Audit: $r(t)x=t^{-1}x$ and $r(t)y=ty$ were recomputed from inverse pullback;
  the weight decomposition follows from Laurent-monomial independence;
  degree-zero monomials are exactly $(xy)^a$; dual weights were recomputed from
  $(g\lambda)(w)=\lambda(r(g^{-1})w)$, giving $t\,x^*$ and $t^{-1}y^*$, i.e.
  $(1,-1)$, and evaluation is the identity of affine planes. AC cited only for
  the A-page dictionary. No repair needed (the earlier $\iota\to\mathrm{ev}$
  notation repair is already in the file).
- Deps checked: `def-rational-action-on-affine-variety`,
  `lem-torus-rational-modules-and-gradings`,
  `thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module`,
  `def-axiom-of-choice`.
- Checks: precheck PASS; rendercheck PASS.

## Cross-item repairs applied in this dispatch

1. Milne locator correction (Step 3a recommendation): "Theorem 12.12 and
   Remark 12.13, p. 235" → "printed pp. 234–235" in all ten item files, and
   the matching strings in `research/frontier-38-owner-30-batch-23.pages.json`
   (manifest) and `...-batch-23.coverage.json`. The statement of Thm. 12.12
   begins on printed p. 234 (PDF p. 245) with its proof on p. 235 (PDF p. 246);
   re-verified against the cached full text. This is a source-locator metadata
   change only: no id, kind, title, statement, deps, or `requires` changed, so
   the Step 3a scope hash is unaffected; the manifest-vs-plan object drift is
   reported for Step 4 refresh.
2. `cex-abstract-group-action-is-not-algebraic-action` step 2.1 wording repair
   (checkpoint 8 above).

## Pages (authored this dispatch)

- `library/algebraic-geometry/classical-complex-algebraic-actions-and-affine-embeddings.md`
  (A, order 879; `status: draft`; seven items in manifest order; `examples: []`;
  `requires` = the two published pages from the plan).
- `library/algebraic-geometry/classical-complex-algebraic-actions-and-affine-embeddings-examples.md`
  (B, order 880; `status: draft`; `items: []`; three examples in manifest order;
  `requires` = the A page).

Both page bodies record the conventions (left actions, inverse pullback,
direct pullback versus right comodule), the main results, the Choice placement,
and the empty/reducible/no-reductivity caveats. Checks: rendercheck on both
pages; `depcheck`/`fwdcheck` on the pair.

## Step-3b completion record

**Status: complete for this dispatch.** All ten owned items are audited on
their pages, both library pages are written, the batch manifest carries the
correct `dependency_level`s (0,1,2,2,3,3,4,5,4,5, verified by the run-wide
check), the batch proof-contracts file is strict-clean, and all ten item
decisions are recorded with confidence 1 and current input hashes
(`step3-decisions check --phase final` reports no open item or page belonging
to this pair). No new item was created, so no auditor-created certification
applies; all ten IDs are original scaffold IDs with ordinary current
decisions.

### Completed IDs

A page `classical-complex-algebraic-actions-and-affine-embeddings` (7):
`lem-classical-affine-algebraic-set-product-coordinate-ring` (L0),
`def-rational-action-on-affine-variety` (L1),
`prop-affine-algebraic-actions-coordinate-ring-coaction` (L2),
`lem-complex-affine-group-comodule-local-finiteness` (L2),
`thm-coordinate-ring-of-affine-action-is-locally-finite` (L3),
`lem-torus-rational-modules-and-gradings` (L3),
`thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module` (L4).

B page `classical-complex-algebraic-actions-and-affine-embeddings-examples` (3):
`ex-torus-weights-and-affine-action` (L5),
`cex-abstract-group-action-is-not-algebraic-action` (L4),
`ex-additive-translation-equivariant-parabola-embedding` (L5).

### Decisions recorded (in dependency order)

9 `accept` + 1 `repaired`
(`cex-abstract-group-action-is-not-algebraic-action`, step-2.1 wording).
Every receipt lists the examined dependency IDs and concrete audit evidence:
`research/frontier-38-owner-30-step3b-review-<id>.json`.

### Proof contracts

`research/frontier-38-owner-30-batch-23.proof-contracts.json`: 10 scoped
items, 25 verbatim section citations, 21 per-step derivations (each numbered
step mapped exactly once; the definition item has no steps), 80 boundary rows
(46 checked, 34 specific `not_applicable`). Every quote was machine-verified
against the named supplier section at generation time and by
`citation-fidelity --fail-on-missing-quote`.

### Checks actually run (final state)

| Check | Command (paths abbreviated to the batch/items) | Result |
| --- | --- | --- |
| Explicit-path precheck | `node tools/tsx-run.mjs tools/precheck.mts <10 items>` | 9 checked, 0 failing (definition not proof-bearing) |
| Rendering | `node tools/rendercheck.mjs <10 items + 2 pages>` | OK, 12 files, KaTeX/YAML parse |
| Proof layout | `PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs <10 items>` | 10 items, 21 steps, 0 defects |
| Strict proof contracts | `node tools/proof-contract.mjs …-batch-23.proof-contracts.json --strict` | 0 errors, 0 warnings, 10/10 checked |
| Citation fidelity | `node tools/citation-fidelity.mjs … --fail-on-missing-quote` | 25 citations; no missing quote, no widening |
| Boundary audit | `node tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template` | 80 rows, 0 template clusters, 0 contradicted |
| Finite smoke | `node tools/finite-smoke.mjs …` | 0 errors, 0 checks (no smoke obligations declared) |
| Risk report | `node tools/risk-report.mjs …` | 0 errors, 10 items routed |
| Content policy | `node tools/content-policy.mjs …-batch-23.pages.json` | 10 scoped items, 0 errors, 0 warnings |
| Dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` | 816 items / 60 pages, 0 errors |
| Manifest deps | `node tools/manifest-deps.mjs …-batch-23.pages.json` | 10 items, 0 errors |
| Plan validation | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 (acyclic and consistent; pre-existing redundant-prereq notes and 289 still-empty planned pages only) |
| Coverage | `node tools/coverage-checklist.mjs …-batch-23.coverage.json --require-destination` | 1 page, 16 harvested results, 0 errors, 0 warnings |
| Step-3 decisions | `node tools/step3-decisions.mjs check --run frontier-38-owner-30 --phase final` | 0 open among the ten owned items |
| Source fetch check | `node tools/source-fetch-check.mjs --coverage …-batch-23.coverage.json` | 3/3 sources fetch-verified, 0 documented drops |
| Auditor-created certifications | `node tools/step3-auditor-items.mjs certify --run frontier-38-owner-30` | exit 1 on other batches' post-baseline additions only; no finding names a batch-23 item (this batch has no additions) |
| Repo dependency gates | `depcheck`, `fwdcheck`, `extcheck`, `depsource`, `prosecheck`, `pathcheck` | no finding names any owned item or page; `depcheck` repo-wide is red only on other batches' unbuilt ids (for example the blowup and Verma items); `pathcheck` 0 errors (pre-existing missing algebraic-geometry `_pathway.md`/`_category.md` warnings) |
| Ledger refresh | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30` | refreshed and deduplicated; batch-23 input stays `[]` |

The default `node tools/proof-layout.mjs <10 items>` invocation fails before
layout with the environment's TSX/JSX loader error
(`ItemBody.tsx … SyntaxError: Unexpected token '<'`), exactly as recorded by
the Step-1 local packet; the documented read-only app view
(`PRESTIGE_APP_DIR=/tmp/ag885-render-app`, symlinks to the unchanged checkout)
returns `10 items, 21 steps, 0 defects`. No toolchain or global setting was
edited.

### Pre-splice plan status for Step 4

- No `research/frontier-38-owner-30-pre-splice-plan-findings.json` exists yet
  for this run (only the frontier-37 file exists), so there is nothing else to
  recheck against current inputs at this dispatch.
- Item ids, order, kinds, titles, statements, `deps`, and both pages'
  `requires` are identical between `research/frontier-38-owner-30-batch-23.pages.json`
  and `research/plan-spec.json` rows 879/880.
- The only manifest-vs-plan difference is the corrected Milne locator string
  ("printed p. 235" → "printed pp. 234–235") in the ten manifest item objects
  of this batch; `splice-plan` treats same-ids/changed-objects as a licensed
  mechanical REFRESH. No scope hash, id, dependency, or statement changed, so
  the Step-3a `sufficient` scope decision remains current.
- No shared prose, pathway, or plan amendment is requested beyond that
  refresh.

### Flags, escalations and open obligations

- **Added suppliers: none.** All ten items pre-existed in the immutable
  pre-author scaffold inventory and on disk; this dispatch created no item, so
  no auditor-created certification or new-item dependency level is owed.
- **No unfinished in-run suppliers.** Every direct dependency of the ten items
  is either in-pair or a published item; the batch-23 cross-batch input is
  `[]` and re-verified against the run's dependency records. No consumer
  decision is left escalated.
- **No escalations recorded.** All ten decisions are `accept`/`repaired` at
  confidence 1; nothing was found that requires owner resolution.
- **Published concerns.** None identified in a published supplier or page
  during this audit. Observation only (already recorded by Step 3a, external
  source not repository content): Brion's Lemma 1.5 prints the coefficient
  space as $V\subset\mathbb C[G]$ where its proof context is functions on
  $X$; the local argument uses $V\subset\mathbb C[X]$ and does not depend on
  the printed slip.
- **Sibling-batch red gates are not this pair's.** The run-wide `step3-items`
  gate, repo-wide `depcheck`, and the ledger's `--require-reviewed` remain red
  only where other pairs are still being authored; no finding names a
  batch-23 item or page.
- **Owner handoff.** No page was published, no plan-spec row was edited, and
  no engine state was touched. The two pages are `status: draft` and remain
  draft until Step 9.
