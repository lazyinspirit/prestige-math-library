# Step 3b — pair `algebraic-differentials-separability-and-smooth-local-presentations`

Run `frontier-35-ten-categories`; role `alpha-high`; batches 3.
A page order 366.0581 (24 items), B page order 366.0582 (7 items).
Scope decision: `research/frontier-35-ten-categories-step3a-review-<pair>.json` = `sufficient`
(all 21 designed A items + 3 source-backed local prerequisites; 7 B items; 61 coverage rows).

This file is the running checkpoint. After every item: id, exact claim, conventions,
source locator, dependencies, decision, checks run, open gaps, next action.

## Scaffold audit (Step 3b "read and decide")
- All 31 manifest items were absent from `items/` at dispatch start; nothing published was edited.
- Batch 3 `cross-batch-dependencies.json` is `[]`; the four verified in-run edges for this pair
  (consumer batch 6, `kahler-differentials-conormal-sequences-and-infinitesimal-lifting`) all point
  *into* this page, so nothing here is owed outward.
- Strategy strings in the manifest are planning notes, not proof text. Every item below is
  authored from the actual argument; where a strategy was defective it is repaired and recorded.
- Plan edge `366.0581 requires dimension-constructible-images-and-dimensions-of-fibres` (Step-1
  drift record) is the canonical A-page edge; the design's AV-6 B-page seam for 366.059/366.065 is
  a pre-splice plan mismatch reported to the owner, not repaired here.
- AC/DC: `thm-long-exact-tor-sequence-in-the-left-module-variable` assumes DC; the published
  AC => DC lemma lives on a page outside this pair's `requires` closure, so
  `lem-ag-local-flatness-regular-parameters` states AC, declares `def-axiom-of-choice` and
  `def-dependent-choice`, and discharges DC inside its own Facts block.

## Convention decisions (all items)
- Relative dimension of a standard smooth presentation `S = (R[x_1..x_n]/(f_1..f_c))_g` is `n - c`.
- Fibre dimension at a fibre prime is pointwise `ht(q') - c`, never "universally n - c".
- `def-ag-separating-transcendence-basis` also fixes the adjective *separably generated*.
- Definitions carry `proof: not-applicable`; proofs carry `proof: ai-altered`; statements are
  `literature-derived`.

## Item log
(one entry per authored item; filled in as items are written and checked)

### Authored 1–7 (all `precheck` clean)
1. `def-ag-universal-algebraic-differentials` — Ω_{B/A}=F/R, universal derivation, A-derivation; no
   finite-presentation hypothesis; d1=0, d(ab)=a db, Ω_{A/A}=0.
2. `lem-ag-differentials-universal-property` — Hom_B(Ω,M) ≅ Der_A(B,M), natural in M; inverse built
   from the free module on the symbols.
3. `lem-ag-polynomial-quotient-differentials` — basis dx_i; conormal right-exact sequence
   I/I²→B⊗_PΩ→Ω_{B/A}→0; Jacobian cokernel; non-injectivity witness A=Z, P=Z[x], I=(2).
   DEP AMENDMENT: replaced `thm-universal-property-of-a-polynomial-ring-on-a-family` by
   `def-polynomial-ring-on-a-family-of-indeterminates` (the coordinate-derivation argument loads the
   monomial basis, not the universal property). Register in the manifest.
4. `lem-ag-differentials-localization-base-change` — base-change iso, localization iso, and the
   non-invertible general functoriality map. Localization well-definedness verified in full: if
   wx=0, x=bu'−b'u, then wG=−x(uu' dw+wu du'+wu' du) with G=u'²(u db−b du)−u²(u' db'−b' du'),
   and x becomes 0 in U^{-1}Ω while w becomes invertible.
5. `lem-ag-differentials-transitivity` — C⊗_BΩ_{B/A}→Ω_{C/A}→Ω_{C/B}→0 exact; first arrow not
   injective (k→k[x]→k, x↦0). Both composites γβ, βγ checked on generating sets.
6. `def-ag-separating-transcendence-basis` — transcendence basis; separating basis; "separably
   generated"; empty basis allowed; r = trdeg; DEP ADDITIONS `def-algebraic-and-transcendental-elements`,
   `thm-finitely-generated-algebraic-extensions-are-finite`.
7. `thm-ag-separating-transcendence-basis-perfect-field` — minimise [K:k(T)]_i over admissible T;
   char 0 via perfect; char p via p-power independence + minimal-degree relation + exchange.
   CARRIED STEP (flagged, not a defect): step 4.1's two exchange facts (x_j algebraic over
   L=k(x_i,i≠j) and T'' independent) are the content of Stacks Algebra 10.44.1 (which cites the
   Fields key lemma 26.3). I verified in full: the p-power/exponent step (3.1), the Gauss-lemma
   irreducibility and separability of P (4.1 second half), and the degree-drop computation (5.1).
   LOCATOR: /tmp/frontier35-b3-stacks-algebra.txt lines 8768–8830 (tags 0H71, 030W).
   AC NOTE: item uses the separable/inseparable-degree calculus exactly as the published items do
   (`def-separable-degree` fixes an algebraic closure by Choice; the published multiplicativity
   theorems do not declare AC as a dependency). No AC item is declared, matching the design and the
   published practice; reported to the owner as a sensitivity, not as a defect.

### Authored 8–15 (all `precheck` clean)
8. `thm-ag-field-differentials-separable-rank` — separably generated K/k ⇒ dt_1..dt_r a K-basis of
   Ω_{K/k}; char-0 tower k⊂K⊂L gives injectivity of L⊗_KΩ_{K/k}→Ω_{L/k}; AC declared for the
   transcendence-basis extension and recorded as the choice use in the statement.
9. `lem-ag-separable-residue-cotangent-sequence` — 0→m/m²→Ω_{R/k}⊗κ→Ω_{κ/k}→0 exact for R
   Noetherian local with κ/k finitely generated separable; lift of a separating basis; split via
   P(y+δ)=P(y)+P′(y)δ. Finite separable κ/k gives Ω_{κ/k}=0.
10. `thm-ag-field-extension-of-schemes` — AC; gluing Spec(A_i⊗_kK) over an affine cover; affine
    fibres κ(x)⊗_kK; transitivity (X_K)_L≅X_L. DEP AMENDMENT: authored deps include
    `thm-sections-basic-open-affine-scheme`, `lem-intersection-affine-opens-covered-principal-opens`,
    `thm-universal-property-of-localisation`, `thm-associativity-of-balanced-tensor-products`,
    `def-residue-field-scheme-point`, `def-scheme` — to be mirrored in the manifest.
11. `def-ag-geometrically-regular-algebra-and-fibre` — finite-type global definition over finitely
    generated K/k; pointwise fibre condition over *every* extension of κ(p); empty fibres vacuous;
    keeps geometric regularity distinct from regularity and from smoothness (equivalence later).
12. `def-ag-standard-smooth-algebra` — n≥c≥0, (R[x]/(f))_g, leading c×c Jacobian minor a unit;
    c=0 is a polynomial localisation; relative dimension n−c; invertible minor may be moved to the
    first c columns; a further principal localisation can be absorbed by adjoining z with zg−1.
13. `lem-ag-local-flatness-regular-parameters` — AC; local homomorphism of Noetherian local rings
    (R,m)→(S,n), finite S-module M, Tor_1^R(R/m,M)=0 ⇒ M flat over R (M not finite over R); plus
    the regular-parameter corollary. DC discharged locally in the item (the published AC⇒DC
    supplier is outside this page's closure).
NEW `lem-ag-base-change-of-standard-smooth-presentations` — R′⊗_R S ≅ (R′[x]/(f′))_{g′}; maps
   ψ,τ,Φ via universal properties with Φ∘τ=id and τ∘Φ=id; minor still a unit; same relative
   dimension. Not in the 24-item manifest list: registered as a local supplier for items 14–16, 22.
NEW `lem-ag-standard-smooth-fibre-regular-parameters` — AC; k a field, q⊆k[x] prime, f_j∈q with
   leading minor h∉q ⇒ classes of f_j independent in m/m², k[x]_q regular local, (f_j) regular
   sequence, quotient regular local of dim dim k[x]_q−c. Local supplier for items 14, 15, 24.
14. `lem-ag-standard-smooth-flatness` — AC; standard smooth ⇒ finitely presented + flat over an
   arbitrary R. Encoded presentation Q=R[x,z]/(f,zg−1)≅S; flatness-is-local + base change to
   Noetherian local; AC⇒DC locally; local criterion K_J; N_i=T/(f_1..f_i); fibre N_i⊗κ =
   κ[x]_{q̄′}/(f̄_1..f̄_i); h∨ unit ⇒ h̄∉q̄′ ⇒ fibre regular sequence; induction via
   K⊗κ=0 ⇒ K=mK ⇒ K=0 (Nakayama) and the long exact Tor sequence; descent of the presentation and
   the unit witness to a finitely generated Z-subalgebra R_0 (Z Noetherian), then R⊗_{R_0}S_0≅S and
   extension of scalars preserves flatness.
15. `lem-ag-standard-smooth-regular-geometric-fibres` — AC; for the fibre F_K=(K[x]/(f̄))_ḡ at
    p∈Spec R and any field extension K/κ(p): every local ring is regular local, dim = ht(Q′)−c at
    the corresponding prime Q′ of K[x]; every irreducible component of Spec F_K has dimension n−c.
    Key repairs: (a) h̄∉Q′ proved from the unit property via the localisation zero criterion (no
    "units avoid primes" citation needed); (b) ht(Q′)=c from Krull height (≤) and from the
    nonnegativity of dim of the local fibre (≥); (c) component dimension n−c from
    `cor-height-plus-quotient-dimension-affine-domain` (ht + dim quotient = dim) applied to the
    finite-type K-domain K[x], not from a false "local dimension = n−c" reading.
    Source: Stacks 10.137.5–6 (00T6, 00T7); the local-dimension formula ht(Q′)−c is the pointwise
    form, and no global "every local ring has dimension n−c" claim is made.

## Next action
Item 16 `lem-ag-flat-local-regularity-ascent-descent` (AC): ascent via regular sequence +
regular-element lifting; descent with d=dim S handled separately at d=0.

### Authored 16–17
16. `lem-ag-flat-local-regularity-ascent-descent` — AC; flat local (R,m)→(S,n) of Noetherian local
    rings: R and S/mS regular ⇒ S regular (ascent: regular system of parameters, faithfully flat
    base change keeps it S-regular, then lifting across a nonzerodivisor); S regular ⇒ R regular
    (descent: minimal free resolution of k=R/m by finite free modules, tensor with flat S, regular
    S of dim d and the global-dimension bound make the d-th syzygy Ω⊗S projective hence flat;
    faithful-flat descent + finite-flat ⇒ projective over R; ABS). Case d=0 handled separately
    (S a field, faithful flatness forces m=0). PASSED precheck.
17. `lem-ag-finite-field-extension-separable-factorization` — AC; K/k finitely generated of char p
    ⇒ finite purely inseparable k′/k, K′/K with K′/k′ separably generated (char 0: k′=k, K′=K).
    Proof follows Stacks 04KM: finite transcendence basis x, K_s the separable closure of k(x),
    d=log_p[K:K_s]; for d≥1 pick β∉K_s with β^p=α∈K_s, take P=minpoly of α over k(x) (separable,
    distinct roots), adjoin p-th roots of the finitely many k-coefficients of P's rational-function
    coefficients to get k′ with every coefficient a p-th power in F=k′(x^{1/p}), write a_i=c_i^p,
    R=Σc_iT^i, so P(T^p)=R(T)^p by the freshman's dream (binomial theorem + p|C(p,k)); each root
    of P has a p-th root in Ω which is a root of R; R has deg R distinct roots hence is separable,
    so β (which satisfies R(β)=0 because β^p=α) is separable over F, i.e. β∈L_s; then
    L_s=K_sF (with the two-line argument), [K_s(β):K_s]=p (T^p−α irreducible since α∉K_s^p, and
    (β/γ)^p=1 ⇒ β=γ), and [L:L_s] ≤ [K:K_s(β)] = [K:K_s]/p via the compositum degree inequality;
    induction on d, then k″/k and L′/K are finite purely inseparable by transitivity/composita.
    LOCATOR: /tmp/frontier35-b3-stacks-algebra.txt lines 8419–8578 (Lemma 42.4, tag 04KM).
    NOTE: the key step "α=(α′)^p with α′∈L_s" is proved in-item (Fields 28.2 is not in the
    library); the elementary proof is the R-polynomial argument above. PASSED precheck.

### Authored 18–20 (all `precheck` clean)
18. `lem-ag-geometric-regularity-field-tests` — AC; (1) a finite-type $k$-algebra $A$ is
    geometrically regular iff $A$ is regular and $A\otimes_kk'$ is regular for every *finite purely
    inseparable* $k'/k$; (2) geometric regularity then gives regularity of $A\otimes_kK$ for
    **every** $K/k$; (3) descent along any field extension $K/k$. Key steps: 1.2 the
    base-change/primitive-element fact for separably generated extensions (a separable minimal
    polynomial splits into distinct linear factors, so the local quotient is a product of fields and
    flat local ascent applies); 2.1 the finite test extended to finitely generated $K$ via the 04KM
    factorization plus descent of regularity along the finite purely inseparable $K\to K'$;
    2.2/3.1 an arbitrary $K$ as a filtered union of finitely generated subextensions, uniformity of
    the dimension bound from Noether normalisation, and $\operatorname{pd}_RM\le d$ by ABS plus
    extension of scalars from a stage; 4.1/5.1 the descent direction. PASSED precheck.
19. `thm-ag-geometric-regularity-perfect-base` — AC; $k$ perfect, $A$ finite-type and regular ⇒
    $A\otimes_kK$ regular for every field extension $K/k$, hence $A$ is geometrically regular.
    Only new mathematical content: every finite purely inseparable $k'/k$ is trivial — for
    $a\in k'$ pick $e$ with $a^{p^e}\in k$ and $b\in k$ with $b^{p^e}=a^{p^e}$ (Frobenius
    surjectivity of $k$), then $(a-b)^{p^e}=a^{p^e}-b^{p^e}=0$; then apply item 18.
    SOURCE: Stacks 10.45.3–4. PASSED precheck.
20. `thm-ag-perfect-field-jacobian-regularity` — AC; three clauses. (1) Closed-point criterion:
    for $\mathfrak m\subseteq A=P/I$ maximal with $\kappa=A/\mathfrak m$ finite separable over the
    perfect field $k$, $A_{\mathfrak m}$ regular iff $\mathrm{rank}\,J(\mathfrak m)=n-\dim
    A_{\mathfrak m}$ (separable-residue cotangent sequence + right exactness of $\otimes$ +
    $\mathrm{edim}=\dim$), so the rank is intrinsic. (2) Local charts at any regular
    $\mathfrak q$: with $\mathfrak p=\mathfrak q\cap P$, the regular-quotient ideal theorem gives
    $c=\operatorname{ht}(\mathfrak p)-\dim A_{\mathfrak q}$ parameters generating
    $IR_{\mathfrak p}$; their classes are $\kappa(\mathfrak p)$-independent (regular system of
    parameters + injectivity of the cotangent comparison), so a $c\times c$ Jacobian minor
    $h\notin\mathfrak p$; after inverting $t=sh$ (with $sI\subseteq(g_1,\dots,g_c)$) the chart is
    standard smooth. (3) Openness of the regular locus from the standard-smooth fibre lemma (no
    later local-presentation theorem), and density along a generically reduced component by the
    Artinian argument ($\dim A_{\mathfrak p}=0$ ⇒ $A_{\mathfrak p}$ a field). PASSED precheck.

### Authored 21–22 (all `precheck` clean)
21. `lem-ag-geometrically-regular-fibres-local-presentation` — AC; finite-presentation $R\to S$,
    $\mathfrak q$ over $\mathfrak p$, $R_{\mathfrak p}\to S_{\mathfrak q}$ flat and the fibre
    $S\otimes_R\kappa(\mathfrak p)$ geometrically regular at $\mathfrak q$ ⇒ some $g\notin\mathfrak q$
    with $S_g$ standard smooth over $R$: identity extension gives the regular fibre at $\kappa(\mathfrak q)$;
    the regular-quotient ideal theorem gives $c=\operatorname{ht}(\bar{\mathfrak q}')-\dim F_{\bar{\mathfrak q}}$
    and renormalises the generators; pass to an algebraic closure $K\supseteq\kappa(\mathfrak q)$ (perfect)
    with its $K$-rational point; `thm-ag-perfect-field-jacobian-regularity` gives rank $=n-d$; base change
    of $I_\kappa A'/(f_1,\dots,f_c)A'=0$ plus non-negativity of the rank forces rank $=c$, so a minor
    $h\notin\mathfrak q'$; then flatness plus the Tor sequence gives $J_{\mathfrak q'}=\mathfrak pJ_{\mathfrak q'}$,
    Nakayama kills $J_{\mathfrak q'}$, and inverting $gh$ produces the chart. DC discharged locally ([F13]).
    **Repair:** the item had no `## Proof` heading, so its numbered steps were invisible to the strict
    proof-contract parser (empty step map / citation uses); inserted the heading. Numbering was already
    canonical. PASSED precheck.
22. `thm-ag-standard-smooth-geometric-regularity` — AC; three clauses. (1) pointwise: for a
    finite-presentation $R\to S$, $R\to S$ is standard smooth at $\mathfrak q$ iff $R_{\mathfrak p}\to S_{\mathfrak q}$
    is flat and the fibre $S\otimes_R\kappa(\mathfrak p)$ is geometrically regular at $\mathfrak q$;
    (2) global: locally standard smooth iff flat with every fibre geometrically regular; (3) over a field:
    a finite-type $k$-algebra is geometrically regular over $k$ iff $k\to A$ is locally standard smooth.
    Content beyond A21/A14/A15: flatness from a **principal cover** (if $g_1,\dots,g_k$ generate the unit
    ideal of $S$ and each $S_{g_i}$ is flat over $R$ then $S$ is flat — ideal criterion plus the
    prime-local vanishing criterion, step 1.2); finitising the chart cover by quasi-compactness of
    $\operatorname{Spec}S$ (`cor-affine-scheme-quasi-compact`, [F14]); and in the field case flatness is
    free (`prop-modules-over-a-field-are-projective-flat-and-injective`, [F7]) while the definition's
    finitely-generated quantifier is widened by `lem-ag-geometric-regularity-field-tests` clause 2.
    Numbering canonicalised by the layer rule: $1.1,1.2,1.3,2.1,3.1,3.2,4.1,4.2,5.1$. PASSED precheck.

### Next action
Item 23 `thm-ag-standard-smooth-base-change-composition` (no AC): base change of a standard smooth
presentation (supplier `lem-ag-base-change-of-standard-smooth-presentations`), base change of "standard
smooth at $\mathfrak q$", and composition of standard smooth presentations with cleared denominators
together with the block-triangular $(c+d)\times(c+d)$ Jacobian minor $h\cdot g^{Nd}h''$, adding relative
dimensions $(n-c)+(m-d)$.

### Authored 23–24 (A page completed; both `precheck` clean)
23. `thm-ag-standard-smooth-base-change-composition` — no AC. (1) base change of a presentation via the
    new supplier `lem-ag-base-change-of-standard-smooth-presentations`; (2) base change at a prime: a
    chart at $\mathfrak q$ pulls back to a chart at every prime above $\mathfrak q$; (3) composition:
    the $S$-presentation of $T$ becomes a presentation over $R$ after clearing denominators with a
    single multiplier, the Jacobian of the composite is block triangular with minor
    $h\cdot g^{Nd}\cdot h''$, and relative dimensions add: $(n-c)+(m-d)$. Steps
    1.1, 2.1, 2.2, 3.1, 3.2, 4.1, 5.1, 6.1. DE-B-LEAFING repair: `ex-polynomial-extension-of-scalars`
    (a B-page-only supplier) replaced by `thm-coproduct-property-of-tensor-products-of-commutative-algebras`
    in both the fact block and `deps`.
24. `thm-ag-submersion-criterion-standard-smooth` — AC; the A-page's closing theorem (submersion
    criterion at $k$-rational points). Forward: a standard smooth chart at $x$ gives a split injection
    on cotangent spaces (chart flatness by base change, fibre dimension $n-c$ from
    `lem-ag-standard-smooth-regular-geometric-fibres`). Converse: regular parameters of
    $\mathcal O_{Y,f(x)}$ are extended by the $m-n$ new variables
    (`lem-regular-system-of-parameters-equivalent-basis`), flatness from
    `lem-ag-local-flatness-regular-parameters` (second clause), the fibre regular by
    `thm-regular-local-rings-are-domains-and-cohen-macaulay`, geometric regularity of the fibre by an
    explicit standard smooth chart over $\kappa(f(x))$
    (`lem-regular-local-regular-quotient-ideal-is-parameter-generated` + Jacobian rows), then clause 1
    of `thm-ag-standard-smooth-geometric-regularity`. Canonical numbering by the layer rule is
    **1.1, 1.2, 2.1, 2.2, 2.3, 3.1, 3.2, 4.1** — the parameter-extension step is 1.2 and the forward
    chart argument sits at 2.2, so step ids are not in narrative order. DC discharged locally as in
    item 21.

### Authored B1–B7 (examples page; all `precheck` clean; each example carries its own calculation)
B1. `ex-ag-differentials-polynomial-and-hypersurface` — $\Omega$ of a polynomial ring and of a cusp:
    conormal cokernel, cotangent fibre at the origin of dimension 2 against $\dim=1$ of the curve.
B2. `cex-ag-differentials-arbitrary-map-is-not-base-change` — $k[x]\to k$, $x\mapsto0$: $\Omega_{k/k}=0$
    while $\Omega_{k[x]/k}\otimes_kk$ is 1-dimensional, so the general functoriality map of item 4
    need not be an isomorphism.
B3. `ex-ag-separable-and-inseparable-field-differentials` — $\Omega_{E/k}=0$ for finite separable
    $E/k$ (invertible $P'(\alpha)$) and $\Omega_{k(t)/k(t^p)}=k(t)$ for the inseparable degree-$p$
    extension.
B4. `ex-ag-standard-smooth-hypersurface-chart` — smooth hypersurface chart: the $1\times1$ minor
    $\partial f/\partial x_1\notin(f)$ after inverting, relative dimension $n-1$.
B5. `ex-ag-field-change-inseparable-thickening` — $K\otimes_\kappa K\cong K[\varepsilon]/(\varepsilon^p)$
    for $K=\kappa(t^{1/p})$: nonreduced thickening, base change of a regular fibre not regular.
B6. `cex-ag-regular-factors-product-not-regular` — $k(t)\otimes_kk(t^{1/p})$ has a nonzero nilpotent
    although both factors are fields: regularity is not stable under tensor products.
B7. `ex-ag-projection-submersion-parameters` — projection $\mathbb A^{n+m}\to\mathbb A^n$ at a rational
    point: the three submersion clauses, the explicit parameters, relative dimension $m$.

## Proof contracts (batch 3)
- Scope: 29 proof-bearing ids = 22 A-page items (26 minus the 4 definitions) + the 7 B items; the
  4 definitions are excluded (frontier-33-batch-3 convention). `regen-contract-entries` was run over
  all 29 and every item carries the eight standard boundary cases.
- Boundary worksheets: A24 and B1–B7 are hand-written. The other **21 A-page worksheets were rewritten
  by hand in this session**, replacing regex-heuristic rows that `boundary-audit` flagged as 7 template
  clusters (39 rows of the `the claim — … — contains no <case> case` wrapper; 28 rows of
  `step X.Y handles the <case> case explicitly`) plus 2 contradicted dispositions
  (`lem-ag-polynomial-quotient-differentials` [empty] and `thm-ag-field-extension-of-schemes` [empty],
  both on statements that quantify over a family). Two rows that then failed
  `boundary-evidence-unanchored` were re-anchored.
- `proof-contract --strict`: 0 errors, 1 warning (`shotgun-bracket` on
  `lem-ag-separable-residue-cotangent-sequence`, non-fatal).
- AC/DC: every AC item states the assumption, declares `def-axiom-of-choice` and records the exact use;
  three items discharge DC locally because the published AC⇒DC lemma is outside this pair's `requires`
  closure (`lem-ag-local-flatness-regular-parameters`, `lem-ag-standard-smooth-flatness`,
  `lem-ag-geometrically-regular-fibres-local-presentation`).

## Checks run (this session; exact results)
| gate | result |
|---|---|
| `precheck` explicit path (33 files) | 29 checked, 0 failing |
| `rendercheck` (2 page files) | OK |
| `prosecheck` (2 page files) | 0 errors, 0 warnings |
| `pathcheck` (repo) | 0 errors, 30 warnings (none on this pair) |
| `extcheck` | OK |
| `content-policy` item mode (batch manifest) | 33 scoped items, 0 errors, 0 warnings |
| `content-policy --manifest-only` | `batch-item-already-exists` ×33 — expected post-authoring (scaffold-time gate) |
| `coverage-checklist --require-destination` | 2 pages, 83 harvested results, 0 errors, 0 warnings |
| `proof-contract --strict` | 0 errors, 1 warning |
| `boundary-audit --fail-on-contradicted --fail-on-template` | no template clusters, no contradictions |
| `citation-fidelity` | 356 citations over 29 items; no missing quote, no widening candidate |
| `risk-report` | 0 errors, 29 items routed (per-item rows for review) |
| `finite-smoke` | 0 errors but **0 checks** — vacuous for this batch (see obligations) |
| `gate-liveness` (batch-3 contracts) | finite-smoke reported `VACUOUS`; proof-contract/coverage/precheck live |
| `manifest-deps` | 33 items, 0 errors |
| `manifest-integrity --run` | 52 pages owed, 52 present, no scope drift |
| `depsource research/plan-spec.json --page <A page>` | 0 unresolved |
| `validate-plan research/plan-spec.json` | OK |
| `frontier-dependency-ledger refresh` + `collect` | batch-3 input `[]` valid; 21 run edges, 0 unreviewed batches, 0 orphan reviews |
| `step3-decisions check --phase final` | 0 of this pair's 33 items flagged (302 accepted run-wide) |
| `splice-plan --verify` | exit 1 — pre-splice state, every batch manifest carries items the plan does not yet list (Step 4's splice) |
| `step3-auditor-items certify` | exit 1 — blocked run-wide by `def-induced-class-function-on-a-finite-group` |

## Repairs made while auditing (all re-`precheck`-clean)
- 15 items: appended the missing fact label to the step that actually uses it (`citation-uses`).
- `thm-ag-separating-transcendence-basis-perfect-field`: "Stacks Algebra 10.44.1" reworded to
  "Stacks Algebra, Section 44, Lemma 1" (the `10.44` token was misparsed as a step id).
- `lem-ag-geometric-regularity-field-tests`: added the undeclared supplier
  `thm-localisation-and-polynomial-extension-of-regular-rings` to `deps`.
- `lem-ag-base-change-of-standard-smooth-presentations`: removed a literal `[[…]]` placeholder.
- De-B-leafing: `ex-polynomial-extension-of-scalars` dropped from A-page items (see item 23).
- `lem-ag-geometrically-regular-fibres-local-presentation`: inserted the missing `## Proof` heading.
- `ex-ag-projection-submersion-parameters`: two multi-line displays collapsed to one line
  (`untagged-steps`).
- Batch manifest (this pair only): `deps` mirrors the authored lists for
  `lem-ag-geometric-regularity-field-tests`, `thm-ag-standard-smooth-base-change-composition`,
  `ex-ag-field-change-inseparable-thickening`; the eight item decisions invalidated by that shared-file
  edit were re-recorded (`accept`, confidence 1, examined ids).

## Local suppliers added by this pair (registered in manifest, coverage, contracts)
1. `lem-ag-base-change-of-standard-smooth-presentations` — $R'\otimes_RS\cong(R'[x]/(f'))_{g'}$, same
   $n,c$, image of $h$ a unit, unique isomorphism. Consumers: items 14, 15, 16, 23.
2. `lem-ag-standard-smooth-fibre-regular-parameters` — over a field, $f_j\in\mathfrak q$ with leading
   minor $\notin\mathfrak q$ ⇒ $\kappa$-independent classes in $\mathfrak m/\mathfrak m^2$, a regular
   sequence, quotient regular local of dimension $\dim A-c$. Consumers: items 14, 15, 24.

## Dispatch report (Step 3b) — for the owner and Step 4
**Completed IDs (33).** A page: `def-ag-universal-algebraic-differentials`,
`lem-ag-differentials-universal-property`, `lem-ag-polynomial-quotient-differentials`,
`lem-ag-differentials-localization-base-change`, `lem-ag-differentials-transitivity`,
`def-ag-separating-transcendence-basis`, `thm-ag-separating-transcendence-basis-perfect-field`,
`thm-ag-field-differentials-separable-rank`, `lem-ag-separable-residue-cotangent-sequence`,
`thm-ag-field-extension-of-schemes`, `def-ag-geometrically-regular-algebra-and-fibre`,
`def-ag-standard-smooth-algebra`, `lem-ag-base-change-of-standard-smooth-presentations`,
`lem-ag-standard-smooth-fibre-regular-parameters`, `lem-ag-local-flatness-regular-parameters`,
`lem-ag-standard-smooth-flatness`, `lem-ag-standard-smooth-regular-geometric-fibres`,
`lem-ag-flat-local-regularity-ascent-descent`, `lem-ag-finite-field-extension-separable-factorization`,
`lem-ag-geometric-regularity-field-tests`, `thm-ag-geometric-regularity-perfect-base`,
`thm-ag-perfect-field-jacobian-regularity`, `lem-ag-geometrically-regular-fibres-local-presentation`,
`thm-ag-standard-smooth-geometric-regularity`, `thm-ag-standard-smooth-base-change-composition`,
`thm-ag-submersion-criterion-standard-smooth`. B page: the seven items B1–B7 above. Item decisions are
recorded `accept`, confidence 1, and all 33 are current under `step3-decisions check --phase final`.

**Published debt.** No published item was found potentially defective in this pair's scope in this
session; nothing published was edited. (Carry-over suspicion, unchanged and lower confidence than a
defect: none open.)

**Open obligations.**
1. **Auditor certification of the two new suppliers.**
   `node tools/step3-auditor-items.mjs certify --run frontier-35-ten-categories` currently exits 1:
   run-wide, `def-induced-class-function-on-a-finite-group` changed after its last successful
   author result, and every existing author result for this pair's label carries `ok: false`
   (this dispatch's result is written when the dispatch ends). If the engine's certify step runs
   after this dispatch, no action is needed; otherwise
   `lem-ag-base-change-of-standard-smooth-presentations` and
   `lem-ag-standard-smooth-fibre-regular-parameters` remain uncertified additions.
2. **Pre-splice plan mismatch (owner-held for Step 4).** `splice-plan --verify` exits 1: the plan
   lists no items for either page (A 26, B 7 "only in manifest"). The design's AV-6 B-page seam for
   plan orders 366.059/366.065 remains an owner-held mismatch; not repaired and not spliced here.
3. **Manifest `deps` divergence.** 21 of the 33 manifest entries still carry the scaffold-level
   `deps` list (a stale subset/superset of the authored list); the three entries edited this session
   were mirrored. Authored item frontmatter is the normative record (content-policy's own comment),
   so this is bookkeeping for Step 4 rather than a content gap.
4. **Boundary worksheets of A24 and B1–B7** were carried over unchanged from the earlier session and
   were not re-read row by row here; they pass `boundary-audit` unchanged.
5. **`finite-smoke` is vacuous for this batch** (the registry's 16 named checks are all outside
   algebraic geometry). Adding a check would mean a new named finite model in `tools/finite-smoke.mjs`,
   outside this dispatch's authority; run-level `gate-liveness` is served by other batches.
6. **`risk-report` rows** (4 B items at CRITICAL/HIGH by keyword heuristic) are examples and
   counterexamples with explicit witnesses and failed conclusions; read, no defect found.

**Honesty notes.** The 21 rewritten worksheets contain `checked` rows citing the step that carries the
argument; those proofs were authored and prechecked earlier in this dispatch, and I re-read every
item's Statement and step inventory here but did not re-derive each step's internal algebra. For
`thm-ag-field-extension-of-schemes` the `empty`/`zero` rows record the empty-cover reading ($X=\varnothing$),
which is also how `thm-gluing-affine-schemes` reads (its "every point lies in a chart" step is vacuous
for the empty family); a reviewer may want to confirm that the empty family is licensed, since this is
the one disposition in the rewritten set that rests on a convention of a *cited* publisher rather than
on the item's own text.
