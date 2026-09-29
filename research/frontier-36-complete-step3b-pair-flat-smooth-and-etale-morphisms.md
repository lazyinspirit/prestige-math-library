# Step 3b — `flat-smooth-and-etale-morphisms` (A/B pair)

Run: `frontier-36-complete`. Dispatch label:
`step3b-pair-flat-smooth-and-etale-morphisms-51953a50c595cc79`.
Owned pages: A `flat-smooth-and-etale-morphisms` (order 366.073),
B `flat-smooth-and-etale-morphisms-examples` (order 366.074).
Containing batch: 6 (this pair only; nothing else shares
`research/frontier-36-complete-batch-6.pages.json`).

## Working state (checkpoint, updated per item)

- Authoring order: exact `dependency_level` order from the dispatch (levels
  0 → 10, ties by page order then item ID). A scaffold audit precedes each
  item's authoring.
- Existing item files at dispatch start: `def-constructible-subset-scheme`
  (added after the Step-3 baseline; engine-certified addition),
  `def-flat-morphism-schemes`, `lem-finite-presentation-image-constructible`
  (written by the preceding aborted attempt of this same dispatch, then
  audited here). All other 57 item files are authored in this dispatch.
- Scaffold audit: recorded per item below. Local repairs to
  `frontier-36-complete-batch-6.pages.json` are logged with the item.
- Cross-batch input: `frontier-36-complete-batch-6.cross-batch-dependencies.json`
  (rows refreshed as supplier use is verified).
- Checks run: recorded at the end of this file.

## Per-item audit + authoring log

Format: id — scaffold audit result (repairs), dependencies examined, authoring
state, decision.

### Level 0

(populated below as items are completed)

## Open obligations and escalations

(populated below)

## Published-item concerns

(populated below)

### Level 0 (complete)

- `def-constructible-subset-scheme` — scaffold audited: definition of constructible
  set via retrocompact opens, finite unions of $U\setminus V$, empty union allowed;
  deps published. Decision: **accept** (receipt recorded).
- `def-flat-morphism-schemes` — scaffold audited: flat at $x$ is flatness of
  $\mathcal O_{X,x}$ over $\mathcal O_{S,f(x)}$; empty source vacuous; deps
  published. Decision: **accept**.
- `lem-finite-presentation-image-constructible` — repair: added the missing
  `## Proof` heading; proof is the Chevalley induction of the scaffold strategy
  (presentation reduction, one-variable elimination, $D(c)/V(c)$ descent). deps
  published, AC declared and used only for prime existence. Decision: **accept**.
- `lem-generic-freeness-finite-type-algebra-module` — authored: induction on a
  generating list with a prime filtration of a finite module over a Noetherian
  domain, localisation-and-gluing in the induction step. AC declared and used in
  steps 1.2/1.6. Decision: **accept**.
- `lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness` — authored: a
  faithful rendition of Stacks Algebra 10.125.2/10.125.6 with Noether
  normalisation over $\kappa(\mathfrak p)$, the dimension-preservation chain,
  the lifted normalising parameters, openness of the quasi-finite locus and the
  Zariski-main/localisation dimension chain for the fibre bound. **Qualification
  recorded:** the Statement fixes the Stacks pointwise (infimum over open
  neighbourhoods) reading of $\dim_x$, since the height reading would make the
  claim false for $k[x,y]\to k[x,y]$ at the origin with $n=1$. Decision:
  **accept**.

### Level 1 (complete)

- `def-faithfully-flat-morphism-schemes` — audited; the fpqc agreement with
  `def-fpqc-morphism-schemes` (decision: repaired) is the singleton-family
  reading, which both items state. Decision: **accept**.
- `def-smooth-morphism-schemes` — audited; pointwise definition (lfp + flat +
  geometrically regular fibre), empty cases declared. Decision: **accept**.
- `lem-flat-local-map-faithfully-flat` — authored; choice-free via the
  nonzero-module detection of faithful flatness. Decision: **accept**.
- `lem-flatness-affine-local-source-target` — authored; AC used exactly in
  step 2.1 (converse) via `thm-proper-ideal-contained-in-maximal-ideal`.
  Decision: **accept**.
- `lem-flat-locus-open-finitely-presented-algebra` — repair + authoring left a
  **declared obligation (O1)** in step 2.1: the general openness of the flat
  locus (Stacks Algebra tag 00RC) needs (a) Noetherian approximation of a
  finitely presented system (Stacks tags 00R1/00QX/00R6) and (b) openness of the
  flat/CM locus in the Noetherian case (tags 00RB/00MI); neither is a published
  item here and the scaffold's own strategy only supplies the CM characterisation
  tools. Decision: **escalate** (open obligation O1; owner remedy requested).
- `lem-qcqs-structure-pushforward-affine-local` — authored; finite affine
  equaliser description of $\Gamma(f^{-1}U,\mathcal O_X)$, exact localisation,
  compatible restriction isomorphisms, flat base change by the same equaliser;
  choice-free (step 6.1). Decision: **accept**.
- `rem-flatness-is-not-constant-fibre-isomorphism` — authored as a computational
  remark: $\mathbb Q[t,x]/(x^2-t)$ is free on $1,x$ over $\mathbb Q[t]$ (monic
  division), the fibre at $t=0$ is the nonreduced $\mathbb Q[x]/(x^2)$ and the
  fibre at $t=1$ is $\mathbb Q\times\mathbb Q$; one versus two points, no
  choice, no fibre-dimension theorem. Decision: **accept**.
- `cex-flat-finite-type-not-open-without-presentation-warning` (B page) —
  authored: $R=\prod_{n\ge1}k$, $I=\bigoplus_{n\ge1}k$; every finitely generated
  ideal of $R$ is principal generated by a coordinate idempotent, so $R/I$ is
  flat by the finitely generated ideal criterion; the morphism is finite type and
  its image is $V(I)$; clopenness would make $I=(e)$ principal by the
  clopen-idempotent and unique-radical-ideal lemmas, contradicting that
  $\bigoplus k$ is not finitely generated; a finitely presented $R/I$ would have
  $I$ finitely generated by Stacks Algebra 10.6.3 (tag 00R2). AC declared and
  used exactly in step 6.1. Decision: **accept**.

Checks after levels 0-1: `precheck` clean on all 13 items, strict
proof-contract 0 errors / 0 warnings over the 13 authored items, `rendercheck`
on the items authored here, `record-item` receipts written for all 13
(12 accept, 1 escalate).

### Level 2 (complete, 10 items)

- `def-relative-dimension-smooth-morphism` — authored; **repaired convention**
  before consumers: the local dimension $\dim_yY$ is the Stacks
  infimum-over-neighbourhoods reading (largest dimension of an irreducible
  component through $y$), not the height of $\mathcal O_{Y,y}$; the earlier
  phrasing made the advertised independence of the relative dimension from the
  point false at generic points of a standard smooth chart. Receipt re-recorded
  after the repair. Decision: **accept**.
- `def-smooth-locus-morphism` — authored; openness not assumed. **accept**.
- `lem-flat-morphisms-stable-base-change` — authored (affine $B\otimes_AA'$
  argument). **accept**.
- `lem-flat-morphisms-stable-composition` — authored (nested charts). **accept**.
- `thm-faithfully-flat-descent-vanishing` — authored; stalkwise, choice-free,
  no quasi-coherence. **accept**.
- `thm-generic-flatness-morphisms` — authored; finite affine covers + generic
  freeness; AC declared, used exactly through the generic-freeness lemma.
  **accept**.
- `lem-flatness-by-fibres-for-polynomial-chart` — authored **conditionally**:
  the Noetherian case is Stacks 10.99.15 (tag 00MP) and the general case the
  Noetherian-approximation descent of Stacks 10.128.8 (tags 00QV/00QX/00R6),
  neither a published item here; the published 10.99.10 variants
  (`thm-local-criterion-for-flatness-ideal-form`,
  `thm-local-criterion-for-flatness-closed-fibre-form`) need the module finite
  over the base ring, false for $M=B_{\mathfrak q}$ over the polynomial chart.
  Obligations (O2a)/(O2b) recorded; supplier
  `lem-flat-locus-open-finitely-presented-algebra` (O1), consumer consuming
  step 4.1. Decision: **escalate**.
- `lem-integral-quasicoherent-algebra-finite-subalgebra-filtration` —
  authored **conditionally**: obligation (O3) = the extension lemmas of Stacks
  28.23 (tags 01PE/01PF/01PG/05JT), not published here; local algebra input
  (`lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite`)
  published and used in steps 3.1/4.1. Decision: **escalate** (consumers
  `lem-relative-normalization-finite-stage`,
  `lem-scheme-zariski-main-factorization-quasi-finite` must also be escalated
  until (O3) is supplied).
- `thm-jacobian-criterion-smooth-morphism` — authored: both directions with the
  presentation hypothesis, dimension clause via
  `lem-ag-standard-smooth-regular-geometric-fibres`, and the redundancy
  warning proved with the explicit list $(t,t^2)$ for $k[t]/(t)$ (a $2\times1$
  matrix has no $2\times2$ minor). **accept**.
- `thm-smooth-morphism-formally-smooth-finite-presentation` — authored: forward
  direction by Taylor correction with an invertible minor and lifting of units
  through square-zero ideals; converse by the conormal section, split injection,
  $\Omega$ projective, Nakayama selection of $r$ generators, invertible minor
  from the $\kappa(\mathfrak q)$-reduction and Nakayama on $I/(f_1,\dots,f_r)$.
  **accept**.

Checks after level 2: precheck clean on all 23 items, strict proof-contract
0 errors / 0 warnings over 23 items, `record-item` receipts written for all 23
(20 accept, 3 escalate: `lem-flat-locus-open-finitely-presented-algebra`,
`lem-flatness-by-fibres-for-polynomial-chart`,
`lem-integral-quasicoherent-algebra-finite-subalgebra-filtration`).

### Level 3 (in progress; order per dispatch, ties by page then item ID)

- `def-etale-morphism-schemes` — audited; étale = smooth of relative dimension 0,
  with the empty case declared. Decision: **accept**.
- `lem-fibre-dimension-upper-semicont-proper` — audited and authored: fibre-local
  dimension of a proper morphism is upper semicontinuous, via the closed-fibre
  elimination and the amplitude argument on affine charts; AC declared and used
  only through the cited suppliers. Decision: **accept**.
- `thm-differentials-smooth-locally-free` — authored: on a standard smooth chart
  the presentation cokernel is free of rank $m-c$ by row/column elimination with
  an invertible Jacobian minor, and the rank is identified with the relative
  dimension via the standard-smooth geometric-fibre computation. AC declared
  through the cited criterion. Decision: **accept**.

Two items were **added and fully authored** on the A page before their consumers
(registered in the batch-6 manifest, coverage and proof contracts):

- `def-open-morphism-schemes` — open and universally open morphisms of schemes,
  after Stacks Definition 29.24.1 (tag 01U0); no finiteness hypothesis in the
  quantifier over all $S$-schemes. Needed by
  `thm-flat-finite-presentation-is-open` and, later,
  `thm-etale-morphisms-open-and-quasi-finite`.
- `lem-constructible-stable-generalisation-open` — in an affine spectrum a
  constructible set stable under specialisation is closed and one stable under
  generalisation is open (Stacks tags 00HY/00I0/0903). Proof: every constructible
  set is the image of a spectrum map from a finite product of localisations of
  quotients, that map is quasi-compact, and the closed-image criterion
  `lem-quasi-compact-scheme-image-specialization-closed` applies; the second
  assertion follows for the complement, whose constructibility is proved from
  the piece description in `def-constructible-subset-scheme`. AC is declared and
  used exactly through `lem-basic-opens-quasi-compact` and
  `lem-quasi-compact-scheme-image-specialization-closed`.

The new supply changes nothing in the promised claims; the A-page inventory is
now 52 items (3 marked `local_addition`) and the B page keeps its ten designed
leaves. The scope decision for the pair was refreshed with a reviewer
`sufficient` receipt for the current scope (`record-scope`).

- `thm-flat-finite-presentation-is-open` (A) — authored: the affine case reduces
  the image of a basic open $D(b)$ to a constructible set
  (`lem-finite-presentation-image-constructible`), stable under generalisation
  by going down for the flat localisation $A\to B_b$
  (`thm-flat-going-down`), hence open by the new criterion; global openness by
  affine charts and universal openness by base-change stability. AC declared and
  used exactly through the three cited suppliers. Decision: **accept**.

Checks so far after these additions: precheck clean on every item authored here,
strict proof-contract 0 errors / 0 warnings over 29 items, receipts recorded for
`def-etale-morphism-schemes`, `lem-fibre-dimension-upper-semicont-proper`,
`thm-differentials-smooth-locally-free` and
`thm-flat-finite-presentation-is-open` (all accept).

### Level 4 (B-page counterexamples, in progress)

- `cex-flat-not-smooth-nodal-family` (B) — scaffold audited; authored. The total
  ring is identified with `k[x,y]` (`t = y^2 - x^2(x+1)`, monic division in
  `t`), `h` is irreducible by a degree-parity argument (char not 2), so `B` is
  torsion-free over the PID `k[t]` and flat; the fibre over `(t)` is the node
  `k[x,y]/(h)`, whose origin local ring has edim 2 (`h` lies in `m^2`) and
  dim 1 (chain lifting against `dim k[x,y]_(x,y) = 2`), hence is not regular,
  so the fibre is not geometrically regular and `f` is not smooth at
  `(t,x,y)` although flat there. AC declared and used exactly through
  `thm-dimension-at-most-embedding-dimension`. Decision: **accept**.
- `cex-frobenius-not-smooth` (B) — scaffold audited; authored. `B = k[u] =
  k[t][u]/(u^p - t)` with the explicit `k[t]`-basis `1,u,...,u^{p-1}` (distinct
  exponents mod `p`), so `F` is finite, finitely presented and flat; the fibre
  at `t = 0` is `k[u]/(u^p)`, whose local ring at `(u)` has nilpotent maximal
  ideal (unique prime, dim 0) and edim 1, hence is not regular; the fibre is
  not geometrically regular, so `F` is not smooth and not etale at the origin.
  Choice-free item. Decision: **accept**.
- `ex-family-xy-equals-t-flat-not-smooth-at-node` (B) — scaffold audited;
  authored. `C = k[x,y]`, `t = xy`, flat over the PID `k[t]` by torsion-freedom;
  the fibre at `t = 0` is `k[x,y]/(xy)`; at the origin the local ring has zero
  divisors `x,y` with `xy = 0`, so it is not a domain and not regular, giving
  non-smoothness at `(t,x,y)`; away from `(t,x,y)` one of `x,y` is invertible
  and the Jacobian row `(y,x)` has an invertible `1x1` minor, so the Jacobian
  criterion gives smoothness there. AC declared and used exactly through the
  Jacobian criterion and the regular-local-ring-is-a-domain theorem. Decision:
  **accept**.

Checks after these three items: precheck clean on each, strict proof-contract
0 errors / 0 warnings over 34 items, receipts recorded (accept) for all three.

### Level 4 (A page, complete)

- `thm-etale-over-algebraically-closed-field-discrete-smooth-points` (A) —
  scaffold audited with a **repair**: the scaffold's closing clause claimed
  that "a merely étale finite type $k$-scheme ... need not be finite". That
  clause is false as written: étaleness over $\operatorname{Spec}k$ forces
  relative dimension $0$ at every point, the residue lemma gives
  $\mathcal O_{X,x}=k$ at every point of a finite type étale $k$-scheme
  (finite separable residue field over an algebraically closed field is
  trivial), every affine chart is then a finite product of copies of $k$ by
  the Noetherian $+$ dimension $0$ Artinian criterion and the structure
  theorem, so $X$ is *always* a finite disjoint union of copies of
  $\operatorname{Spec}k$; the failure of finiteness is only possible by
  dropping quasi-compactness. The repaired statement proves the sharp version
  (étale $+$ finite type over an algebraically closed field $=$ finite
  disjoint union of copies of $\operatorname{Spec}k$, unique up to
  permutation), the converse, and the honest failure for the infinite
  non-quasi-compact disjoint union $\coprod_{n\ge1}\operatorname{Spec}k$
  (step 4.2, using `cor-product-schemes-over-base-exists`). AC declared and
  used exactly in steps 1.1, 1.2, 3.1 and 4.2 (residue lemma, Artinian
  characterization, structure theorem, flat-unramified equivalence);
  suppliers all published. Decision: **accept**.

Checks after this item: precheck clean, strict proof-contract 0 errors /
0 warnings over 43 items, receipt recorded (accept).

### Level 5 (complete, 9 items: 4 on the A page, 5 on the B page)

- `thm-etale-formally-etale-finite-presentation` (A) — authored: forward,
  étale $\Rightarrow$ smooth $\Rightarrow$ formally smooth by
  `thm-smooth-morphism-formally-smooth-finite-presentation`, $\Omega_{X/S}=0$
  from flat $+$ unramified, and formal unramifiedness by the explicit
  derivation computation (difference of two $A$-algebra maps agreeing modulo
  a square-zero ideal is an $A$-derivation into that ideal, killed by the
  universal property of $\Omega$); reverse, formally smooth $+$ lfp
  $\Rightarrow$ smooth and formally unramified $\Rightarrow\Omega=0$ give
  flat $+$ unramified, hence étale. AC declared, used exactly through the two
  cited equivalences. **accept**.
- `thm-etale-morphisms-open-and-quasi-finite` (A) — scaffold's term "locally
  quasi-finite" made precise as the pointwise fibre-local condition inside
  `def-quasi-finite-morphism-schemes` (no new definition needed). Étale is
  flat $+$ lfp, hence universally open; at each point
  $\kappa(x)/\kappa(s)$ is finite separable and
  $\mathfrak m_s\mathcal O_{X,x}=\mathfrak m_x$, so the fibre algebra
  $B_{\mathfrak q}/\mathfrak p B_{\mathfrak q}=\kappa(x)$ is finite over
  $\kappa(\mathfrak p)$; with quasi-compactness (lfp $+$ quasi-compact
  $=$ finite type) the morphism is quasi-finite. AC confined to steps 1.1/1.2.
  **accept**.
- `lem-coprime-polynomial-factorization-lifts-etale-locally` (A) — authored:
  universal coefficient ring $R[b,c]/(\phi_1,\dots,\phi_n)$ with $f=g_uh_u$
  by construction; the given coprime factorisation is a $\kappa(\mathfrak p)$
  point; the Jacobian is the Sylvester-type matrix of
  $(\delta b,\delta c)\mapsto(\delta g)h+g(\delta h)$, whose reduction has
  zero kernel by the Bézout form of coprimality (step 2.1), so
  $d=\det J\notin\mathfrak p_0$; $R'=(R^\circ)_d$ has
  $\kappa(\mathfrak p')=\kappa(\mathfrak p)$, $f=gh$ with coprime monic
  factors by inverting $J$ (steps 3.1, 4.2), and is étale at $\mathfrak p'$
  by the Jacobian criterion with $m=r=n$, i.e. relative dimension $0$
  (step 4.1). AC used only via the criterion. **accept**.
- `thm-etale-locus-open` (A) — authored: the Jacobian chart at an étale point
  has $m=r$, and its invertible minor witnesses smoothness of relative
  dimension $0$ on the whole principal open, so $\operatorname{Et}(f)$ is a
  union of opens and the restriction is étale. **accept**.
- `cex-smooth-not-etale-affine-line` (B) — authored: $\mathbf A^1_k$ is smooth
  of relative dimension $1$ (`ex-polynomial-ring-flat-smooth`, case $n=1$),
  so not étale (relative dimension $\ne0$); corroborated by
  `thm-differentials-smooth-locally-free` (rank $1$) and the flat $+$
  unramified criterion. **accept**.
- `cex-unramified-not-flat-closed-immersion` (B) — authored: $A\to k=A/(t)$
  has $\Omega_{k/A}=0$ by the conormal sequence with $\Omega_{A/A}=0$, so it
  is unramified of finite presentation; it is not flat because tensoring
  $(t)\hookrightarrow A$ with $k$ gives the zero map $k\to k$; hence not
  étale. **accept**.
- `ex-finite-etale-separable-extension` (B) — authored: forward via the
  residue lemma and $\Omega$-vanishing; reverse via the primitive element,
  $L=k[T]/(P)$ with $P$ separable, Bézout making $P'$ a unit, standard
  étale; $L$ finite over $k$ gives finiteness. AC declared, used only in the
  forward direction. **accept**.
- `ex-localization-etale-open-immersion` (B) — authored: $A_g\cong
  (A[T]/(T-g))_T$ with derivative $1$ is standard étale, so $\operatorname{Spec}A_g\to
  \operatorname{Spec}A$ is the local model; an open immersion is locally an
  isomorphism onto a principal open, so it is étale at every point. Empty
  immersion included; **choice-free**. **accept**.
- `ex-standard-etale-square-root` (B) — authored: $P=T^2-a$ monic with
  $P'=2T$ inverted gives a standard étale chart
  $B=(A[T]/(T^2-a))_{2T}$; over $D(2a)$ the chart is free of rank $2$ with
  finite étale degree-two fibres; in characteristic two $2T=0$ makes
  $B=0$, so the chart is empty. **choice-free**. **accept**.

Checks after level 5: precheck clean on each item, strict proof-contract
0 errors / 0 warnings over 52 items, receipts recorded (accept) for all nine.

### Level 6 (in progress)

- `lem-etale-neighbourhood-isolated-fibre-point-finite` (A) — audited: the
  scaffold's promised scheme-level statement is Stacks 10.145.2 (tag 00UJ)
  with the library's definitions; the scaffold deps `cor-dimension-preserved-
  by-integral-extensions` and `thm-chinese-remainder-theorem-for-comaximal-
  ideals` are not used by the actual argument and were replaced by the
  items actually consumed. Authored: step 1.1 reduces to a finite-type affine
  chart whose fibre is open in $X_s$; step 1.2 turns isolatedness of the
  fibre point into quasi-finiteness at $\mathfrak q$ using tag 00PK (the
  direction isolated $\Rightarrow$ $B_{\mathfrak q}/\mathfrak pB_{\mathfrak
  q}$ finite over $\kappa(\mathfrak p)$, whose proof at tag 00PJ was read in
  full); step 1.3 applies 00UJ (affine etale local structure: etale ring map
  $A\to R'$, $\mathfrak p'$ with $\kappa(\mathfrak p')=\kappa(\mathfrak p)$,
  decomposition $R'\otimes_AB=C\times D$ with $R'\to C$ finite, unique prime
  $\mathfrak r$ over $\mathfrak p'$ lying over $\mathfrak q$, and $D$ with no
  prime over $\mathfrak p'$ and $\mathfrak q$; the implicit derivation of the
  last two clauses from the clopen splitting of the fibre was re-derived by
  hand: $F/qF=\kappa(q)$ is a field and $t\notin q$ forces
  $\overline h(t)\in q\bar F$, so the $D$-factor has no prime over
  $(q,\mathfrak p')$); steps 2.1--3.2 assemble the elementary etale
  neighbourhood $(U,u)=(\operatorname{Spec}R',\mathfrak p')$, the open clopen
  piece $V=\operatorname{Spec}C\subseteq X_U$ containing $x_U$, finiteness of
  $V\to U$, and the one-point fibre $V_u$ with residue field
  $\kappa(x)$ via [[lem-points-of-scheme-fibre-product-residue-tensors]];
  step 4.1 records the AC use. Suppliers `def-finite-morphism-schemes` and
  `lem-finite-morphism-affine` are batch-5 drafts; their recorded receipts
  were re-checked against live hashes (both MATCH), so no escalation is
  needed for this item. Precheck clean; strict proof contract 0/0 over 54
  items; receipt recorded (accept).

- `lem-flat-fp-relative-dimension-strata` (A) — **escalate**. Scaffold
  statement audited and sharpened: the promised "open $W$ with a disjoint
  decomposition $W=\bigsqcup_dW_d$ dense in every fibre, largest $d$ equal to
  $\dim X_s$" is Stacks More on Morphisms 37.22.7 + 37.22.9 (tags 045U/054T),
  with $W$ the *fibrewise* Cohen–Macaulay locus
  $\{x:\mathcal O_{X_{f(x)},x}\text{ CM}\}$. The scaffold's polynomial-chart
  strategy was replaced by the source's route (Cohen–Macaulay locus via the
  field case of Stacks Algebra 10.130.1). Authored: step 1.1 affine reduction
  (locality of openness/density/partition on charts, local dimension unchanged);
  2.1 fibres locally Noetherian; 1.2 polynomial chart at a point of $W$
  ([[lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness]] with
  $n=\dim_{\mathfrak q}(B/R)$); 2.2 the closed fibre is flat over the polynomial
  fibre ring — **obligation (O5)**, the hard direction of Stacks Algebra
  10.130.1 (tag 00RE, miracle flatness tag 00R4), no published item; 3.1
  flatness over the polynomial chart — **obligation (O2)**, consuming
  [[lem-flatness-by-fibres-for-polynomial-chart]]; 4.1 spreading out —
  **obligation (O1)**, consuming
  [[lem-flat-locus-open-finitely-presented-algebra]] together with the
  published openness of the quasi-finite locus; 5.1 openness of $W_B$ and of
  every $W_{B,d}$ (forward direction of O5); 3.2 every generic point of an
  irreducible component of a fibre has a zero-dimensional (hence CM) fibre
  local ring; 6.1 density (open + meets every component, nonempty open subsets
  of irreducible spaces are dense); 6.2 the partition; 4.2 the largest $d$ is
  $\dim X_s$ (local dimension at a generic point of a component equals the
  dimension of that component, using that only finitely many components meet a
  Noetherian affine chart and every point of a fibre lies in a component).
  AC declared; used exactly through the quasi-finite-locus corollary, the
  polynomial-chart lemma and the three conditional ingredients. Precheck
  clean; strict proof contract 0 errors / 0 warnings over 55 items; receipt
  recorded (escalate), reason naming O1/O2/O5 and the consuming steps. Open
  obligation (O5) added to the report: remedy is a support item for the
  field-case criterion (both directions) or an owner ruling.
