# Step 3b — pair `algebraic-zariski-main-for-quasi-finite-morphisms` (dispatch notes)

Run: `frontier-35-ten-categories` · Role: `alpha-high` · Label:
`step3b-pair-algebraic-zariski-main-for-quasi-finite-morphisms-51b85b3214084e8e`
Owned pair: A `algebraic-zariski-main-for-quasi-finite-morphisms` (order 366.0603,
15 items), B `algebraic-zariski-main-for-quasi-finite-morphisms-examples` (order
366.0604, 3 items), entries 2–3 of
`research/frontier-35-ten-categories-batch-4.pages.json`. Batch 4 also contains
the sibling pair `normalization-finiteness-for-affine-domains` (entries 0–1,
11 + 3 items), owned by a separate dispatch. No sibling item, page, manifest
row, coverage row or receipt was written here: entries 0–1 still carry their
Step-1 scaffold objects (`id`, `kind`, `title`, `statement`, `strategy`,
`sources`, `provenance`, `deps`) and all 14 sibling item files are present.

This file is the assigned checkpoint/technical report. It records state, exact
claims, source locators, dependencies, decisions, checks and open gaps, in
prerequisite order. It is not a transcript; every item below was authored,
checked and receipted during this dispatch, and the proof contracts in
`research/frontier-35-ten-categories-batch-4.proof-contracts.json` are the
mechanical record of the cited facts and boundary cases.

## Scope review status

- Step-3a scope decision for the A page:
  `research/frontier-35-ten-categories-step3a-review-algebraic-zariski-main-for-quasi-finite-morphisms.json`,
  decision `sufficient`, confidence 1, scope hash
  `c0d36dcb9bf95bfe39fe7e27d46b619257bc47a1d255f15ed2defc87710ad694`,
  recorded 2026-09-24T03:29:08Z (non-owner receipt). The pair review report is
  `research/frontier-35-ten-categories-step3a-pair-algebraic-zariski-main-for-quasi-finite-morphisms.md`.
- The review confirmed the CA-20 design (`research/plan-commutative-algebra-track.md`
  L4528–4610): all 11 design A items in proof order plus the 4 Step-1 local
  suppliers (15 A items), and exactly the 3 design B leaves; coverage 23/23
  dispositions over Stacks 10.37 / 10.123 and Milne CA §17; no omitted topic,
  result or example; no pair merge or enrichment needed. The design's interface
  sentence (L4578–4580) leaves the classical open-immersion/gluing translation
  of Zariski's main theorem to the AG track (AV-7, plan-algebraic-geometry-track
  L566–605, L595 `thm-zariski-main-open-immersion-factorization-classical`);
  this page supplies the algebraic factorization only, exactly as designed.
- `research/frontier-35-ten-categories-owner-authoring-direction.md` exists and
  carries no pair-specific instruction for this pair (its deferrals concern
  batch-8 and one Easton item); re-read this dispatch and honoured. No owner-held
  escalation, amendment or scope freeze applies to this pair.
- Manifest statement/title/kind/inventory edits invalidate the scope hash and
  need a fresh non-owner `record-scope --decision sufficient`; dependency-list-
  only edits do not. No such edit was made to the owned pair during this
  dispatch (the `deps` arrays were re-synced from the authored frontmatter, and
  ids, kinds, titles and statements are unchanged).

## Axiom policy for this pair

Exactly nine items declare `def-axiom-of-choice` and state the Axiom of Choice
explicitly — six on the A page (`lem-strong-transcendence-descends-to-minimal-prime-quotients`,
`lem-strongly-transcendental-finite-one-variable-algebra-is-nowhere-quasi-finite`,
`thm-algebraic-zariski-main-localization`,
`cor-quasi-finite-locus-open-finite-type-algebra`,
`thm-quasi-finite-algebra-open-finite-factorization`,
`cor-quasi-finite-algebra-is-source-locally-a-localization-of-a-finite-algebra`)
and all three B items. The other nine A items (the three definitions, items 2–5
of the reduction and the two one-variable lemmas) are authored choice-free. AC
is used where declared: minimal-prime descent for strong transcendence (item 6),
going down / lying over / minimal-prime existence (item 9), once through item 9
in the induction (item 12), compactness of the spectrum and the finite-open →
unit-ideal step (item 14), inherited by items 13, 15, 16, 17, and recorded in
item 18 only because the two general factorization theorems it cites in part 5
assume it (its own computations use finitely many named elements). The
AC-bearing published suppliers are the going-down/lying-over/prime-intersection
items listed under Published concerns; no other axiom branch is opened here.
Choice-free arguments were kept choice-free: in particular items 3, 4, 7, 8, 10,
11 and the finite computations inside items 12, 14 and 18 make finitely many
choices only.

## Items in prerequisite order

All 18 items are new (absent from `items/` before this dispatch; every owned
item file is untracked in git). No published content was edited, no pair was
added or dropped, no Recorded result was consumed, and no `--owner` or
judge/audit stamp was used.

### 1. `def-integral-subalgebra-of-an-arbitrary-ring-map` — COMPLETE (accept)

- Claim: for a unital ring map $R\to S$, the set $\operatorname{Int}_R(S)$ of
  elements of $S$ integral over the image of $R$ is an $R$-subalgebra of $S$
  containing the image; this is the $S'$ of the theorem, distinct from the
  published domain normalization.
- Definition item, provenance `statement: literature-derived`,
  `proof: not-applicable`; no proof obligation. Deps: 7.
- Sources/locators: Stacks Situation 10.123.4 and its uses (tag 00PI section);
  Milne CA v4.03 §17 printed pp. 77–84.
- Boundaries: none; the definition is also the anchor for the conductor $J$ of
  item 11.

### 2. `def-quasi-finite-at-a-prime-for-finite-type-algebras` — COMPLETE (accept)

- Claim: for a finite-type $R\to S$ and $\mathfrak q\in\operatorname{Spec}(S)$
  with $\mathfrak p=\mathfrak q\cap R$, quasi-finiteness at $\mathfrak q$ is
  finiteness of $S_{\mathfrak q}/\mathfrak p S_{\mathfrak q}$ over
  $\kappa(\mathfrak p)$, equivalently finiteness of the fibre at the prime.
- Definition item; no proof obligation. Deps: 7.
- Sources/locators: Stacks Lemma 10.122.2 and Definition 10.122.3; Milne CA
  Definition 17.3.
- Published concern recorded below: the declared dep
  `def-quasi-finite-morphism-classical` drags the AC/Zorn classical dictionary
  into an otherwise choice-free definition, and the item's source title quotes
  tag 00PI whereas the cited content is 10.122.2/10.122.3 (tags 00PK/00PL).

### 3. `lem-zmt-polynomial-relation-leading-coefficient-is-integral` — COMPLETE (accept)

- Claim: if $\varphi(a_0)+\varphi(a_1)t+\cdots+\varphi(a_n)t^n=0$ in $S$, then
  $\varphi(a_n)t$ is integral over $R$; no hypothesis on $\varphi(a_n)$ (it may
  be zero, a zero divisor or nilpotent) and $\varphi$ need not be injective.
- Argument: the explicit monic equation for $\varphi(a_n)t$ (multiply the
  degree-$n$ relation by $\varphi(a_n)^{n-1}$ and collect powers).
- Deps: 2. Sources/locators: Stacks Lemma 10.123.1; Milne CA §17.
- Checks: precheck PASS, rendercheck OK, strict contract (3 citations,
  5 derivations) PASS. This item received a full proof contract during this
  dispatch (it was the only owned proof-bearing item without one); 8 boundary
  rows recorded, the iff-reverse marked `not_applicable` for an item-specific
  reason.
- Boundaries: $n=0$, $a_n=0$, $t=0$, $\varphi$ non-injective; no selection.

### 4. `lem-zmt-one-variable-integral-correction` — COMPLETE (accept)

- Claim: $t\in S$ integral over $\varphi(R[x])$, $p=a_0+\cdots+a_kx^k$ with
  $t\,\varphi(p)\in\operatorname{Im}(\varphi)$; then (1) if $p$ is monic there
  is $q\in R[x]$ with $t-\varphi(q)$ integral over $R$, and (2) in general
  $\varphi(a_k)^n t-\varphi(q)$ is integral over $R$ for some $n\ge0$.
- Argument: Euclidean division in the monic case; the general case inverts the
  leading coefficient and runs the correction with the explicit power exposed.
- Deps: 9. Sources/locators: Stacks Lemmas 10.123.2–10.123.3; Milne CA §17.
- Checks: precheck PASS, rendercheck OK, strict contract (8 citations,
  12 derivations) PASS.
- Boundaries: $p=0$, $a_k=0$/zero divisor/nilpotent, non-injective $\varphi$,
  possibly nonreduced $R$; no regularity or reducedness assumed.

### 5. `def-strongly-transcendental-element` — COMPLETE (accept)

- Claim: $x\in S$ is strongly transcendental over $R\subseteq S$ when, for
  every $u\in S\setminus\{0\}$ and every nonzero polynomial $P$, the product
  $u\,P(x)$ is nonzero — the annihilator-sensitive form needed over possibly
  nonreduced rings, for which ordinary transcendence is not an adequate
  replacement.
- Definition item; no proof obligation. Deps: 5.
- Sources/locators: Stacks Definition 10.123.7; Milne CA §17.

### 6. `lem-strong-transcendence-descends-to-minimal-prime-quotients` — COMPLETE (accept)

- Claim: for reduced $R\subseteq S$, $x$ strongly transcendental over $R$,
  $\mathfrak q$ minimal over $S$ with $\mathfrak p=R\cap\mathfrak q$: the image
  of $x$ is strongly transcendental over the image of $R$ in the domain
  $S/\mathfrak q$ (localized at $\mathfrak p$).
- Argument: the quotient statement of Stacks Lemma 10.123.8 via the minimal
  prime and reduction results.
- Deps: 10, AC declared. Sources/locators: Stacks Lemma 10.123.8; Milne CA §17.
- Checks: precheck PASS, rendercheck OK, strict contract (10 citations,
  9 derivations) PASS.
- Boundaries: zero element, trivial quotient, both inclusion directions of the
  definition, finite factorisations only.

### 7. `lem-zmt-polynomial-rings-over-normal-domains-are-normal` — COMPLETE (accept)

- Claim: for an integrally closed domain $R$ with fraction field $K$, the
  polynomial ring $R[x]$ is integrally closed (in $K(x)$).
- Argument: content/Gauss machinery, irreducibles in $R[x]$ and integral
  closedness of $K[x]$, without Noetherian or UFD side hypotheses beyond the
  normal domain.
- Deps: 19 (choice-free). Sources/locators: Stacks §10.37 Lemmas 10.37.4,
  10.37.6–10.37.8 (tag 037B); Milne CA §6.
- Checks: precheck PASS, rendercheck OK, strict contract (16 citations,
  17 derivations) PASS.
- Boundaries: zero polynomial, constant case, $R=K$, leading coefficients,
  finite factor lists.

### 8. `lem-zmt-quasi-finite-transfer-through-intermediate-rings` — COMPLETE (accept)

- Claim: four transfers of quasi-finiteness at $\mathfrak q$: (1) to every
  intermediate $R\subseteq T\subseteq S$ with $\mathfrak r=\mathfrak q\cap T$;
  (2) from $T_u=S_u$ with $u\in T\setminus\mathfrak q$ back to $R\to T$;
  (3) base change $S'=S\otimes_RR'$ at any $\mathfrak q'$ over $\mathfrak q$;
  (4) quotients $S/J$ for $J\subseteq\mathfrak q$, with the consequent
  contrapositive used later on the page.
- Deps: 8 (choice-free). Sources/locators: Stacks Lemmas 10.122.2, 10.122.6,
  10.122.7, 10.122.9–10.122.10; Milne CA §17 (17.7–17.8).
- Checks: precheck PASS, rendercheck OK, strict contract (8 citations,
  17 derivations) PASS.
- Boundaries: $T=\operatorname{Im}(R)$, $T=S$, $u=1$, $J=0$, $J=S$,
  non-injective maps, both directions of each stated equivalence.

### 9. `lem-strongly-transcendental-finite-one-variable-algebra-is-nowhere-quasi-finite` — COMPLETE (accept)

- Claim: for reduced $R\subseteq S$, $x$ strongly transcendental and $S$
  module-finite over $R[x]$, the map $R\to S$ is of finite type and
  quasi-finite at no prime of $S$.
- Argument: the domain case and the reduction of the reduced case through
  item 6; every local fibre is at least one-dimensional so no fibre is finite.
- Deps: 28, AC declared (used through going down, lying over, minimal-prime
  descent and minimal-prime existence). Sources/locators: Stacks Lemmas
  10.123.8–10.123.10 with their proofs; Stacks Proposition 10.38.7 (going down
  over normal domains); Milne CA §17.
- Checks: precheck PASS, rendercheck OK, strict contract (26 citations,
  20 derivations) PASS.
- Boundaries: zero element, one-point fibres, the $\mathfrak q$ above a minimal
  prime, degenerate $R=S$, both directions of nowhere-quasi-finiteness.

### 10. `lem-zmt-one-generator-local-integrality` — COMPLETE (accept)

- Claim: for $S=R[x]/I$ quasi-finite at $\mathfrak q$ with relative integral
  closure $S'$, there is $g\in S'\setminus\mathfrak q$ with
  $S'_g\xrightarrow{\cong}S_g$; no regularity, Noetherian or finiteness
  hypothesis beyond the finite type of $R[x]/I$, and $R\to S$ need not be
  injective.
- Argument: the one-variable case of Stacks Lemma 10.123.11, using items 2–6
  and the conductor coefficients.
- Deps: 11 (choice-free). Sources/locators: Stacks Lemma 10.123.11 with its
  proof; Milne CA §17.
- Checks: precheck PASS, rendercheck OK, strict contract (11 citations,
  9 derivations) PASS.
- Boundaries: $I=0$, $I=R[x]$, $g=1$, $t$ integral already, zero divisors; no
  selection beyond the named $g$.

### 11. `lem-zmt-conductor-radical-coefficients` — COMPLETE (repaired)

- Claim: for a finite $\varphi:R[x]\to S$ with conductor
  $J=\{g:gS\subseteq\operatorname{Im}\varphi\}$ and the image of $R$
  integrally closed in $S$: $J$ is an ideal, and for
  $u\varphi(P)\in J$ one has $u\varphi(a_k)^m\in J$ for some $m$; for
  $u\varphi(P)\in\sqrt J$ one has $u\varphi(a_i)\in\sqrt J$ for every $i$.
- Repair made during this dispatch: the scaffold's hypothesis was made precise
  as "the image of $R$ is integrally closed in $S$ (every element of $S$
  integral over the map $R\to S$ lies in $\operatorname{Im}(\varphi)$)", the
  Given line and fact [L1] were aligned with it, and step 3.1 now names the
  image of $R$; the two coefficient assertions are proved with the finite
  module generators and the radical induction. No leading-coefficient
  hypothesis (may be zero, a zero divisor, nilpotent).
- Deps: 8. Sources/locators: Stacks Situation 10.123.4 and Lemmas 10.123.5–10.123.6
  with their proofs; Milne CA §17.
- Checks: precheck PASS, rendercheck OK, strict contract (7 citations,
  7 derivations) PASS.
- Boundaries: $P=0$, $k=0$, $a_k=0$, $u=0$, $J=S$, $\sqrt J$ idempotence.

### 12. `thm-algebraic-zariski-main-localization` — COMPLETE (accept)

- Claim (AC declared): for finite-type $R\to S$ with relative integral closure
  $S'$ and $\mathfrak q$ a prime at which $R\to S$ is quasi-finite, there is
  $g\in S'\setminus\mathfrak q$ with $S'_g\cong S_g$.
- Argument: induction on the least number of generators over which $S$ is
  module-finite over a polynomial extension of $R$; the one-variable step is
  the conductor argument (items 3, 4, 10, 11) with nowhere-quasi-finiteness
  (items 5, 6, 9) eliminating the transcendental direction; AC is used exactly
  once, through item 9.
- Deps: 22 (list includes `def-multiplicative-subset-and-localisation`, added
  during this dispatch as a dependency-only repair because the statement and
  fact [L15] both name the principal localisation at $g$ and depcheck reported
  `cited-not-in-deps`).
- Sources/locators: Stacks Theorem 10.123.12 (tag 00Q9) using Situation
  10.123.4 and Lemmas 10.123.1–10.123.11; Milne CA Theorem 17.10.
- Checks: precheck PASS, rendercheck OK, strict contract (21 citations,
  24 derivations) PASS.
- Boundaries: $S=R$, $\mathfrak q$ minimal, $g=1$, zero quotient, both
  induction endpoints, finite generator lists; the source's own proof of the
  $n=1$ case is incomplete ("We may choose…") and is spelled out in item 10.

### 13. `cor-quasi-finite-locus-open-finite-type-algebra` — COMPLETE (accept)

- Claim (AC declared): for any finite-type $R\to S$, the quasi-finite locus
  $U=\{\mathfrak q: R\to S\text{ quasi-finite at }\mathfrak q\}$ is open in
  $\operatorname{Spec}(S)$.
- Argument: item 12 plus the fact that a finite (module-finite) algebra is
  quasi-finite everywhere.
- Deps: 14. Sources/locators: Stacks Lemma 10.123.13 with its proof; Milne CA
  Corollary 17.11.
- Checks: precheck PASS, rendercheck OK, strict contract (14 citations,
  13 derivations) PASS.
- Boundaries: $U=\varnothing$, $U=\operatorname{Spec}(S)$, finite algebras,
  empty distinguished cover, $\mathfrak q$ on the boundary of an open piece.

### 14. `thm-quasi-finite-algebra-open-finite-factorization` — COMPLETE (accept)

- Claim (AC declared): for finite-type $R\to S$ quasi-finite at every prime,
  there are a finite $R$-subalgebra $T\subseteq S'$ module-finite over $R$ and
  $g_1,\ldots,g_n\in T$ with $U=D_T(g_1)\cup\cdots\cup D_T(g_n)$ such that
  $\operatorname{Spec}(S)\to\operatorname{Spec}(T)$ is a homeomorphism onto
  $U$ and $T_{g_i}\xrightarrow{\cong}S_{g_i}$ for every $i$; moreover for every
  $g\in T$ with $D_T(g)\subseteq U$, $T_g\xrightarrow{\cong}S_g$.
- Argument: finite-principal-open patching of item 12's local isomorphisms;
  the finite-algebra part whose published Stacks proof is "Details omitted" is
  spelled out, and AC is used for compactness of the spectrum and for turning
  a finite open cover by distinguished opens into a unit-ideal expression.
- Deps: 16. Sources/locators: Stacks Lemma 10.123.14 with its proof; Milne CA
  Corollary 17.12.
- Checks: precheck PASS, rendercheck OK, strict contract (16 citations,
  14 derivations) PASS.
- Boundaries: $U=\operatorname{Spec}(T)$ ($n=1$, $g_1=1$), no empty cover,
  $g$ arbitrary with $D_T(g)\subseteq U$, identity homeomorphism cases.
- Role: this is the algebraic factorization supplied to AV-7; the classical
  open-immersion/gluing translation remains owned by the AG track.

### 15. `cor-quasi-finite-algebra-is-source-locally-a-localization-of-a-finite-algebra` — COMPLETE (accept)

- Claim (AC declared): under the hypotheses of item 14, for every
  $\mathfrak q\in\operatorname{Spec}(S)$ there are a finite $R$-subalgebra
  $T\subseteq S'$ and $g\in T\setminus\mathfrak q$ with
  $T_g\xrightarrow{\cong}S_g$; the element $g$ lies in $T$ and need not come
  from $R$, and no base-principal or globally finite claim is made.
- Argument: restatement of item 14 pointwise; AC inherited from item 14.
- Deps: 6. Sources/locators: Stacks Lemma 10.123.14 (1)–(2); Milne CA
  Corollary 17.12.
- Checks: precheck PASS, rendercheck OK, strict contract (6 citations,
  6 derivations) PASS.
- Boundaries: $\mathfrak q$ minimal, $g=1$, $T=R$, source-local neighbourhoods
  only (the design's ban on the overstrong one-localization-of-the-base claim
  is respected).

### 16. `ex-zariski-main-open-immersion-punctured-affine-line` — COMPLETE (repaired)

- Claim (AC declared): $R=k[t]$, $S=k[t,t^{-1}]=R_t$: (1) $R\to S$ is finite
  type and quasi-finite; the fibre over $(t)$ is empty
  ($S\otimes_R\kappa((t))=0$) and over every prime $\mathfrak p$ with
  $t\notin\mathfrak p$ the fibre ring is $\kappa(\mathfrak p)$, the local
  fibre at the unique prime above $\mathfrak p$ being that same field; (2) the
  finite factorization holds with $T=R$, $g=t$.
- Repair made during this dispatch: the scaffold said the fibre over $t=0$ is
  "zero"; the statement and proof now say precisely that the fibre over the
  prime $(t)$ is empty, computed via $(M^{-1}R)\otimes_RC=\bar M^{-1}C$ and
  the iterated localisation $(R_t)_{\mathfrak q}=R_{\mathfrak p}$,
  $R_{\mathfrak p}/\mathfrak pR_{\mathfrak p}=\kappa(\mathfrak p)$.
- Deps: 14. Sources/locators: Stacks Lemma 10.123.14 and the open-immersion
  illustration; Milne CA Corollary 17.12.
- Checks: precheck PASS, rendercheck OK, strict contract (14 citations,
  8 derivations) PASS.
- Boundaries: empty fibre over $(t)$, primes not containing $t$, $t=0$,
  $g=t$, one-element generating set for finite type.

### 17. `ex-zariski-main-finite-morphism-factorization` — COMPLETE (accept)

- Claim (AC declared): for a module-finite $R\to S$: (1) $S'=\operatorname{Int}_R(S)=S$;
  (2) in item 12 the element $g=1$ witnesses the conclusion at every prime
  ($S'_1=S_1=S$); (3) in item 14 one may take $T=S$, the contraction map is
  the identity, its image is open, and the cover may be the single principal
  open $D_T(1)=\operatorname{Spec}(T)$.
- Argument: finite-module criterion for integrality (choice-free direct
  verification); AC inherited from the two general theorems cited in parts 2–3.
- Deps: 12. Sources/locators: Stacks Theorem 10.123.12 and Lemma 10.123.14
  (finite case); Milne CA Corollary 17.12.
- Checks: precheck PASS, rendercheck OK, strict contract (12 citations,
  5 derivations) PASS.
- Boundaries: $S=0$, $R=S$, $g=1$, empty spectrum, identity homeomorphism.

### 18. `cex-quasi-finite-morphism-need-not-be-finite` — COMPLETE (repaired)

- Claim (AC declared): for a field $k$, $R=k[t]$, $B=k[t,t^{-1}]=R_t$,
  $S=R\times B$ with the diagonal $R$-algebra structure and
  $u=(0,t^{-1})$, $e=(1,0)$, $\bar t=(t,t)$: (1) $\bar tu=1-e$ and
  $S=R[u]=R[e,u]$, so $R\to S$ is finite type; (2) the fibre over $(t)$ is
  $k$ and over $\mathfrak p\not\ni t$ it is
  $\kappa(\mathfrak p)\times\kappa(\mathfrak p)$, so every fibre has one or
  two points; (3) $R\to S$ is quasi-finite at every prime; (4) $S$ is not
  module-finite over $R$; (5) $S'=\operatorname{Int}_R(S)=R\times R$ is finite
  over $R$ and $g=(1,t)$ satisfies $S'_g=S_g=S$ with
  $\operatorname{Spec}(S)\to\operatorname{Spec}(S')$ a homeomorphism onto
  $D_{S'}(g)$ — the configuration of item 14 with one element working at every
  prime at once, distinguishing the theorem's open finite factorization from a
  false global-finiteness converse.
- Repair made during this dispatch: depcheck's `b-leaf-content` check found
  that the item cited `ex-spectrum-field-one-point` and
  `ex-prime-spectrum-set-of-a-product-ring`, which live only on B/examples
  pages — forbidden as dependencies of items on an A page. Fixed by adding a
  new layer-1 step 1.2 that proves the prime classification of a product ring
  inline (orthogonal idempotents $e,f$; $ef=0$ in a prime $P$ forces $e\in P$
  or $f\in P$; case split, conversely; citing only `def-product-ring`,
  `def-prime-and-maximal-ideals` and the new dependency
  `def-left-right-and-two-sided-ideal`), and by rewriting step 4.2's
  field-fibre argument inline (the only prime of $k$ is $(0)$ and
  $k_{(0)}=k$). Facts renumbered [L22]–[L33] → [L20]–[L31]; the statement and
  parts 1–5 are unchanged; the contract was regenerated and the boundary rows
  re-pointed. `def-left-right-and-two-sided-ideal` is a published A-page item
  (`library/abstract-algebra/ideals-and-quotient-rings.md`). The receipts for
  this item record no other repair.
- Deps: 32. Sources/locators: Stacks Theorem 10.123.12 and Lemma 10.123.14;
  Milne CA Aside 17.9 and Corollary 17.12.
- Checks: precheck PASS, rendercheck OK, strict contract (32 citations,
  19 derivations) PASS.
- Boundaries: $k$ of any characteristic, $e$, $f$ idempotent/nilpotent cases,
  the empty fibre over $(t)$, $u$ a unit in a component, $g=(1,t)$, both
  components of $\operatorname{Spec}(R\times R)$, one-element cover.

## Scaffold audit summary (what was checked and what was repaired)

Audited against the Step-1 scaffold manifest, the Step-3a scope review and the
coverage harvest: statements and their quantifiers, implicit uses of each fact
(mechanically via the strict proof contract: 470 citations over the batch's 29
proof-bearing items, 232 boundary rows), well-definedness of every
construction, prerequisites (items 1–15 in order, the B leaves after the A
page), and source locators. Repairs actually made:

1. Item 3: a full strict proof contract was added (3 citations, 5 derivations,
   8 boundary rows); step 1.2's `inputs` were corrected to `["given","algebra"]`.
2. Item 11: the Statement hypothesis was made precise (image of $R$ integrally
   closed in $S$), Given and fact [L1] aligned, step 3.1 names the image of $R$.
3. Item 12: `def-multiplicative-subset-and-localisation` added to `deps`
   (dependency-only; the statement and fact both name the localisation at $g$).
4. Item 16: the scaffold's loose fibre statement ("fibre over $t=0$ is zero")
   replaced by the exact empty-fibre statement at $(t)$ plus the description of
   the fibres at primes not containing $t$.
5. Item 18: two forbidden B-leaf citations removed by inlining the product-ring
   prime classification (new step 1.2, new dep
   `def-left-right-and-two-sided-ideal`) and the field-fibre argument; facts
   renumbered, contract regenerated, statement and parts 1–5 unchanged.
6. Batch manifest: the `deps` arrays of the two owned page entries were
   re-synced from the authored item frontmatter (dependency-only edit; ids,
   kinds, titles, statements and sibling entries untouched).
7. Batch coverage / contracts: the 18 authored items were registered; the
   batch contract now carries 29 proof-contract entries (14 sibling + 15
   owned; the three owned definitions carry `proof: not-applicable`).
8. All 18 item receipts were re-recorded after the manifest re-sync so that
   every receipt's hash anchors the current inputs; content is unchanged.

## Checks actually run (exact commands and results)

Run on the current on-disk content, in this order, after the last edit:

- `node tools/tsx-run.mjs tools/precheck.mts <18 owned item paths>` →
  `15 checked, 0 failing — all clean` (the three definitions carry no proof
  obligation).
- `node tools/rendercheck.mjs <18 items + both page files>` →
  `OK — 20 file(s)`.
- `node tools/content-policy.mjs research/frontier-35-ten-categories-batch-4.pages.json`
  → `32 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/proof-contract.mjs research/frontier-35-ten-categories-batch-4.proof-contracts.json --strict`
  → `0 error(s), 0 warning(s), 29/29 item(s) checked`.
- `node tools/validate-plan.mjs research/plan-spec.json` → `OK — declared page
  order is acyclic and consistent; no item-level cycles, forward references,
  B-page dependencies, or unresolved ids among the 1188 page(s) with item
  lists.` The 431 planned pages without item lists and the run-wide
  `redundant-prereq` warnings are pre-existing; no mismatch concerns this
  pair. No pre-splice plan mismatch to report.
- `node tools/citation-fidelity.mjs <batch contract> --fail-on-missing-quote`
  → `470 citation(s) over 29 authored item(s)`, `QUOTE NOT FOUND — none`; one
  widening candidate on the SIBLING item
  `thm-polynomial-algebras-over-fields-have-finite-integral-closures` [L11]
  (variable letter only), read and judged faithful; the sibling dispatch's own
  report already records this advisory. None on the owned 18.
- `node tools/boundary-audit.mjs <batch contract>` → `232 rows over 1 contract
  file(s); 47 marked not_applicable`; no template reuse at or above 3 members;
  no contradicted dispositions.
- `node tools/finite-smoke.mjs <batch contract>` → `0 error(s), 0 check(s)
  over 0/29 item(s) carrying obligations`.
- `node tools/risk-report.mjs <batch contract>` → `0 error(s), 29 item(s)
  routed` to the later risk-review tier.
- `node tools/manifest-deps.mjs research/frontier-35-ten-categories-batch-4.pages.json`
  → `32 item(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-4.coverage.json --require-destination`
  → `2 page(s), 54 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/url-sweep.mjs --coverage <batch 4 coverage> --out /tmp/b4-urlsweep.json --fail-on-dead --recover`
  → `9/9 live; 0 failed; 0 suspect`, `9 citation decision(s) (0 documented
  source drops)`.
- `node tools/source-fetch-check.mjs --coverage <batch 4 coverage>` →
  `11/11 source(s) fetch-verified`, `11/11 resolved`.
- `node tools/source-backing.mjs --coverage <batch 4 coverage> --liveness <url-sweep output>`
  → `25 authored result(s) across 1 file(s), every one still backed`.
- `node tools/depcheck.mjs` (repo-wide) → exit 1 with the run-wide pre-existing
  failure list (other groups' cycles and justification findings); **0 lines
  naming any of the 18 owned ids**, and no `b-leaf-content` finding inside the
  owned pair after the item-18 repair.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-35-ten-categories`
  → exit 0; 16 reviewed batches, 0 unreviewed, 0 orphaned reviews, 22 declared
  edges, **0 touching batch 4**.
- `node tools/tsx-run.mjs tools/step3-decisions.mjs check --run frontier-35-ten-categories --phase final`
  → pairs 26, items 676, accepted 451, work 225; no owned id appears anywhere
  in the output — all 18 receipts are closed and current.
- `node tools/tsx-run.mjs tools/step3-decisions.mjs check --run frontier-35-ten-categories --phase scope`
  → `closed: true, work: 0`.

## Local suppliers and axiom bookkeeping

- No new library item was created beyond the 18 assigned (15 A + 3 B). The four
  Step-1 local suppliers on the A page were authored here, in prerequisite
  order and before their consumers: item 1 (the relative integral closure
  $S'$), item 7 (polynomial rings over normal domains), item 8 (the four
  quasi-finiteness transfers) and item 11 (the conductor radical
  coefficients). All are registered in the manifest, coverage and the batch
  proof contract.
- One local proposition was added inside item 18 (step 1.2, the prime
  classification of a product ring) to remove the forbidden B-page citations;
  it is in-item content, not a new library item, and its only new dependency
  `def-left-right-and-two-sided-ideal` is published on an A page.
- Axioms: six A items and all three B items declare AC and state it explicitly;
  the other nine A items are choice-free. No item consumes a Recorded result or
  opens a second axiom branch; incompatible-branch separation is not needed
  here because no item mixes the axiom branches.

## Published concerns (reported, not repaired here)

1. **Sibling pair `b-leaf-content` defect (confirmed by tool, route to its
   owner).** `items/lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct.md`
   and `items/lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct.md`
   depend on `ex-ideals-as-submodules-of-the-regular-module`, which lives only
   on the B page `library/abstract-algebra/modules-and-module-homomorphisms-examples.md`.
   Evidence: `depcheck` lines 1859–1860 (`[b-leaf-content] … depends on
   "ex-ideals-as-submodules-of-the-regular-module", which lives only on
   B/examples page(s) modules-and-module-homomorphisms-examples`). Confidence:
   high (mechanical, A-page item depending on a B leaf). Remedy: inline the
   ideal-is-a-submodule fact via the published `def-left-right-and-two-sided-ideal`
   and `def-module`, or re-home the example on an A page — a change inside the
   sibling's files, so it is escalated rather than edited here. This is a
   dependency/placement defect, not a mathematical error in the sibling
   statements.
2. `def-quasi-finite-at-a-prime-for-finite-type-algebras` declares
   `def-quasi-finite-morphism-classical`, pulling the AC/Zorn classical
   dictionary into an otherwise choice-free definition. Confidence: high
   (frontmatter dependency, item text). Statement is not false; supplier in
   use: the classical morphism dictionary. Suggested remedy for the serial
   reconciler: restrict to the algebraic definition or record it as an
   intentional interface.
3. Same item, locator imprecision: its source title quotes Stacks tag 00PI
   while its content is Lemma 10.122.2 / Definition 10.122.3 (tags 00PK/00PL);
   00PI is the §10.123 theorem tag. Confidence: high; cosmetic.
4. Milne URL inconsistency: several items use
   `https://www.jmilne.org/xnotes/CA.pdf` while the fetch-verified form is
   `https://www.jmilne.org/math/xnotes/CA.pdf`. Confidence: high; cosmetic
   (both resolve). `url-sweep` is green because the archive recovers the
   redirect.
5. Source incompleteness, handled locally: Stacks 10.123.12's $n=1$ case
   ("We may choose…") and 10.123.14(3) ("Details omitted") are unfinished in
   the source; items 10 and 14 spell both out. Confidence: high (source read);
   recorded on the A page description and in the affected items' source notes.
6. AC-strength findings on published suppliers consumed here:
   `thm-going-down-over-normal-domains`, `thm-lying-over`,
   `thm-prime-spectrum-is-compact`, `cor-nilradical-as-intersection-of-primes`
   each reach a choice principle in their transitive dependency closure. These
   are dependency/axiom-strength observations, not claims that the published
   statements are false; every use of them in this pair happens inside an item
   that declares AC. The sibling pair's own report records five further
   AC-reach findings on its suppliers.
7. Minor record note (from the Step-3a review, unchanged):
   `research/frontier-35-ten-categories-batch-4.coverage.json` carries
   `status: "in-progress"` while other batch coverage files say `constructed`
   or omit the field; `coverage-checklist` reports 0 errors, so this is a
   label inconsistency only, left for Step 4.

## Open obligations

- Receipts are current for all 18 items at 2026-09-24T07:27Z (17:27 +1000);
  any later edit to an owned item, to the owned entries of
  `research/frontier-35-ten-categories-batch-4.pages.json`, or to
  `research/plan-spec.json` will invalidate the corresponding records again.
  Observed during this dispatch: `research/plan-spec.json` (mtime 16:10:59
  +1000) and the batch-4 manifest were rewritten between the earlier green
  `check --final` run and this dispatch's re-anchoring, invalidating every
  receipt hash; no foreign item file was mutated (a closure walk over the owned
  items found no non-batch-4 items in their closure) and all 18 were
  re-anchored with unchanged content. The owner should be told that plan-spec
  or manifest rewrites must not land during an in-flight dispatch.
- Cross-batch ledger: the batch-4 review input
  `research/frontier-35-ten-categories-batch-4.cross-batch-dependencies.json`
  is `[]`, which is correct — no owned item depends on another in-run pair.
  The derived ledger was refreshed after the last edit and has 0 edges touching
  batch 4 and no orphaned reviews.
- Scope decisions: the A page's `sufficient` decision stands (hash
  `c0d36dcb…`); the B page is covered by the pair review and has no separate
  receipt. Manifest title/kind/inventory edits invalidate the scope hash and
  would need a fresh non-owner `record-scope`; dependency-only edits do not.
- Step 4 owns, for this pair: the classical open-immersion/gluing translation
  (AV-7), the pre-splice `validate-plan` pass (clean now, nothing to reconcile),
  the coverage `status` label, and the published concerns listed above. The
  sibling `b-leaf-content` escalation must be routed to the sibling pair's
  owner; it is not repairable from this dispatch.
- No owner-held escalation is open for this pair, and no promise of the CA-20
  design was dropped: all 11 design A items and all 3 design B leaves are
  authored, plus the 4 local suppliers.

## Handoff addendum (resumed turn, disk re-verified)

This resumed turn re-read the checkpoint, the 18 item files, the two page
files, the batch manifest, coverage, contracts and receipts, then re-ran the
battery on the unchanged content:

- All 18 items exist (61–183 lines each), both page files exist with their
  `items:`/`examples:` lists and `requires:` unchanged; every owned file is
  untracked (created here), so no published item was modified.
- `precheck` explicit-path on the 18 items → `15 checked, 0 failing`;
  `rendercheck` on 18 items + 2 pages → `OK — 20 file(s)`.
- `content-policy` → 0 errors/warnings; `proof-contract --strict` →
  29/29 clean; `validate-plan research/plan-spec.json` → OK.
- `citation-fidelity` → no missing quote, one sibling advisory noted;
  `boundary-audit` → 232 rows, no reuse/contradiction; `finite-smoke` →
  0 errors; `risk-report` → 29 routed; `manifest-deps` → 0 errors;
  `coverage-checklist --require-destination` → 0 errors/warnings;
  `url-sweep` 9/9 live; `source-fetch-check` 11/11; `source-backing` 25/25.
- `depcheck` repo-wide → 0 lines naming any owned id; ledger refresh → 0 edges
  touching batch 4; `step3-decisions check --phase final` → no owned row open;
  `--phase scope` → closed, work 0.
- Receipt completeness re-verified: 18/18 receipts present, confidence 1,
  decisions `accept` for 15 items and `repaired` for items 11, 16 and 18, and
  every receipt's dependency array equals the item's current frontmatter
  `deps` exactly.

Handoff state: 18/18 items authored and complete; both A/B pages written;
manifest, coverage, contracts and receipts registered; no unresolved
mathematics; no owner-held escalations raised by this dispatch. The 18 items
are engine-classified as created and fully authored during this dispatch and
must not be sent through a Step-3 self-review or review-repair-author loop.
