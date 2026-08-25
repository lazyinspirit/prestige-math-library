# frontier-18 · Alpha group `a` · step-3 scaffold breadth and depth review

Batches **6, 7, 8** — four A/B pairs, 173 A items and 41 B items, across
real-analysis, measure-theory and complex-analysis. Group rationale
(`research/frontier-18-alpha-groups.json`): one integration theory underneath all
three, so the shared hypotheses — piecewise-smooth boundary, orientation sign,
measure-zero exceptional sets — are checked once by a reader holding all three
pages at the same time.

**Verdicts: 2 sufficient, 2 insufficient.** Machine half:
`research/frontier-18-alpha-a-step3-verdicts.json`.

| A page | batch | A items | verdict |
|---|---|---|---|
| `the-divergence-theorem-and-classical-stokes` | 6 | 44 | **insufficient** (B6-1, B6-2) |
| `lebesgue-measure-on-euclidean-space` | 7 | 55 | **insufficient** (B7-1, B7-2) |
| `the-winding-number-and-the-global-cauchy-theorem` | 8 | 42 | **sufficient** |
| `holomorphic-functions-of-several-variables` | 8 | 32 | **sufficient** (after the repair I applied, B8-1) |

No permission was requested at any point.

---

## 0. What I did, and what each claim rests on

Read, for each of the four pairs: `.pages.json`, `.notes.md` and
`.coverage.json` together, against the governing design section
(`plan-realanalysis-completion-track.md` §RC-9 L487;
`plan-measure-theory-track.md` §MT-4 L1928; `plan-complex-analysis-track.md`
§CA-7 L1304 and §SC-1 L3115), and against `research/plan-spec.json`. Also read
`research/frontier-18-alpha-step0-drift.md`, which routed two findings here by
name.

Mechanical checks I ran rather than assumed:

| check | result |
|---|---|
| every `deps` target resolves to disk or to an in-batch item | **0 unresolved** of all four pairs |
| every external dep's home page lies in the A page's `requires` closure | 0 outside, after B8-1; **1 before** |
| every external dep homed on a B page (`validate-plan` `b-leaf`) | **1 before, 0 after** — B8-1 |
| every external dep's `provenance.statement` | **0 `ai-generated`, 0 legacy-unclassified** across all three batches |
| every publication status in each closure | 102 / 94 / 87 / 87 pages, **all `published`** |
| `coverage-checklist.mjs` on each batch | 92 / 123 / 163 harvested results, **0 errors** |
| every contract quote against the gate's own extractor (`sourceSectionText`) | **754 external quotes, 0 `citation-quote-mismatch`** |
| every deferral `destination` against `plan-spec.json` | 29 distinct, **0 invented** |
| `validate-plan.mjs research/plan-spec.json` | passes; `redundant-prereq` advisories only |
| manifest `requires` vs spec `requires` (`splice-plan` refusal predicate) | batch 7's manifest declares a **subset** of the spec's eight, so `onlyManifest` is empty and no splice refusal is pending |

Harvest faithfulness: I opened the sources. Three were fetchable as HTML and I
enumerated their own headings against the harvest — CLP-4 §4.1, Corral §4.6 and
OpenStax §6.8. Two of the three matched exactly; the third produced **B6-1** and
**B6-2**. The PDF sources (Ahlfors, Lebl ×2, Hunter, Tao, Carlen, Boas, CIMAT)
would not extract through the fetch tool; for those I checked the harvest's
internal evidence — numbered theorem/section labels, printed page ranges, and the
explicit statement of what lies *outside* the claimed range — which is
self-consistent and matches the published structure of Ahlfors 3rd ed. and Lebl
Ch. 1 as I know them. That is weaker evidence than the three I opened, and I say
so rather than claim a check I did not make.

---

## 1. Severity table

| id | batch | pair | class | severity | disposition |
|---|---|---|---|---|---|
| **B6-1** | 6 | RC-9 | harvest faithfulness → dropped result | **major** | routed, `insufficient` |
| **B6-2** | 6 | RC-9 | harvest completeness | minor | routed, `insufficient` |
| **B6-3** | 6 | RC-9 | stale disposition | minor | routed |
| B6-4 | 6 | RC-9 | seam, recorded | record only | confirmed deferral |
| **B7-1** | 7 | MT-4 | contract grammar, gate-blocking at step 5 | **major** | routed, `insufficient` |
| **B7-2** | 7 | MT-4 | source backing of a landmark | **major** | routed, `insufficient` |
| **B7-3** | 7 | MT-4 | stale disposition | minor | routed |
| **B7-4** | 7 | MT-4 | choice scope omitted from a Statement | minor | routed |
| **B8-1** | 8 | SC-1 | `b-leaf` dependency, `validate-plan` hard error | **major** | **repaired by me** |
| B8-2 | 8 | both | stale finding | record only | closed |
| B8-3 | 8 | CA-7 | design cites a nonexistent result | record only | Beta's build approved |
| B8-4 | 8 | SC-1 | declared prerequisite unused | record only | no action |
| **X-1** | — | cross-batch | batch-5 contract finding is stale | record only | closed for the lead |

---

## 2. Batch 6 — `the-divergence-theorem-and-classical-stokes`

### The design decision, and why I approve the Beta's departure from it

RC-9 asks for the divergence theorem "proved coordinate direction by coordinate
direction exactly as the published Green's theorem is proved on elementary plane
regions". Beta-6 found that following it literally makes the design's own B page
impossible, and rebuilt the face condition. **The finding is correct and I verified
its premise from disk.**

`items/def-admissible-regular-parametrized-surface-patch.md` requires, in its
Definition, that "the parametrization $\varphi$ is defined on an open
neighbourhood of $D$". If the top and bottom faces of a $z$-simple solid are
required to be *graph* patches $(x,y)\mapsto(x,y,\gamma_i(x,y))$, that forces
$\gamma_i$ to be $C^1$ past $\partial D$ — and $\sqrt{R^2-x^2-y^2}$ has unbounded
gradient at the equator. The closed ball would not be a $z$-simple region, the
cylinder would not be an $x$-simple region, and **no finite decomposition repairs
either**, because the obstruction is that the surface is vertical there.

The Beta's replacement — require only that the face patch's image lie in the graph
and that $\det D(\pi_k\circ\varphi_j)$ have constant sign on the parameter
interior — is right, and it is what makes
`ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation`
deliverable: the spherical patch $\varphi(\phi,\theta)=R(\sin\phi\cos\theta,
\sin\phi\sin\theta,\cos\phi)$ *is* smooth on all of $\mathbb R^2$, injective on the
parameter interior, with $\varphi_\phi\times\varphi_\theta=R\sin\phi\,\varphi\ne0$
there. What it costs is a change-of-variables theorem the library lacks, and the
Beta built it (`lem-c-one-images-of-content-zero-compact-sets-have-content-zero`,
`lem-change-of-variables-with-a-degenerate-parameter-boundary`). That is exactly
the owner's build-the-missing-prerequisite rule, not scope creep. **Approved.**

Two secondary decisions, both approved: the boundary presentation is supplied
data, matching `def-type-i-type-ii-and-elementary-green-regions`'s own convention;
and "adapted" is stated by the sign of a coordinate of the oriented area vector
with outwardness then *proved*
(`prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal`,
`cor-every-face-of-an-elementary-solid-region-is-outward-oriented`) rather than
assumed.

### Route check — the three items I traced end to end

- `thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential`
  (item 11). With $u(x)=B(a+t(x-a))$ and $v(x)=x-a$, the page's own cross-product
  identity (item 3) gives $\operatorname{curl}(u\times v)=(\operatorname{div}v)u
  -(\operatorname{div}u)v+(Du)v-(Dv)u = 3B(z_t)-0+t\,DB(z_t)(x-a)-B(z_t)
  = 2B(z_t)+t\,DB(z_t)(x-a)$, and $t$ times that is exactly
  $\tfrac{d}{dt}\bigl(t^2B(z_t)\bigr)$, so Newton–Leibniz gives
  $\operatorname{curl}A=B$. **The route closes**, and $\operatorname{div}B=0$ is
  used in precisely one place, which is what makes the hypothesis honest.
- `cor-the-normal-curl-is-the-limiting-circulation-per-unit-area` (item 41).
  $\varphi(\rho,\theta)=p+\rho\cos\theta\,a+\rho\sin\theta\,b$ on $[0,r]\times
  [0,2\pi]$ has $\varphi_\rho\times\varphi_\theta=\rho n$; the two radial edges of
  the induced boundary chain cancel and the $\rho=0$ edge is constant, leaving the
  circle; $\int_0^{2\pi}\!\!\int_0^r\rho = \pi r^2$. **Closes.**
- `cex-a-curl-free-c1-field-on-an-open-subset-of-r3-that-is-not-conservative`
  (B page item 14). For $F=(-y,x,0)/(x^2+y^2)$ all three curl coordinates vanish
  ($\partial_xQ=\partial_yP=(y^2-x^2)/(x^2+y^2)^2$), and the circulation around the
  unit circle is $\int_0^{2\pi}(\sin^2t+\cos^2t)\,dt=2\pi$. **Closes**, and the
  domain is connected, open and not star-shaped, which is the hypothesis that
  fails.

I also checked the arithmetic the B page asserts: the U-shaped prism has volume
$3+2+2=7$ and the field $(x,0,0)$ has divergence $1$ (item 9); the bar's $y=1$ face
is $[0,3]$ wide against uprights of width $[0,1]$ and $[2,3]$, so the cut at $x=1$
and $x=2$ into three patches is necessary and sufficient, and the middle one stays
outer. Correct.

### Design conformance

Everything RC-9's THMS and B-page paragraphs list is present, under the ids the
Beta renamed in its Edits 3–5. The four `fs-` ledger rows are replaced by
refutable ones (Beta findings 3 and 4) — I **approve both**: as the design worded
them, `fs-a-closed-surface-bounds-a-region-to-which-the-divergence-theorem-applies`
asserts that some closed surface bounds *no* finite gluing of elementary solid
regions, which no item on this page can establish, and a false statement whose
refutation cannot be written is not one the library can carry. The replacements
(`fs-a-divergence-free-field-has-zero-outward-flux-through-every-closed-surface`,
refuted by items 6 and 7 of the B page; and
`fs-a-finite-patch-presentation-can-always-be-oriented-compatibly`, refuted by the
Möbius presentation with all four sign choices enumerated) are refutable *here*.

The 20 items past the design's inventory are real mathematics, not padding: the
Laplacian and the curl-of-a-curl identity, the vector potential, Green's first and
second identities, the two limit interpretations, the vector forms. The step-0
drift review flagged "44 A items against 24 designed" as a step-3 question. **It is
breadth, and it is earned.**

### B6-1 · MAJOR · Corral's Corollary 4.18 is misdescribed, and the result it states is on no item

The harvest row reads

> `Corollary 4.18 (a field that is a curl has vanishing divergence)` — `included` → `thm-the-divergence-of-a-curl-vanishes`

I opened the source
(`https://math.libretexts.org/…/4.06%3A_Gradient_Divergence_Curl_and_Laplacian`).
Corral's Corollary 4.18 is:

> "The flux of the curl of a smooth vector field f(x, y, z) through any closed surface is zero"

That is **not** "a field that is a curl has vanishing divergence" — that is
Theorem 4.17, which the row immediately above already disposes to the same item.
So Corollary 4.18's actual content, the vanishing of the *flux* of a curl through
a closed boundary, is carried by no item on the page, and the harvest conceals it
behind a mislabel. This is precisely the failure `coverage-checklist` cannot see:
the file is structurally complete and true of disk, and dishonest about the source.

It is also a **cheaply proved corollary** in the owner's sense — two lines from two
items already on the page.

**Required (routed to Beta-6):**

1. Correct the row's parenthetical to Corral's own statement, quoted above.
2. Add to the A page, after
   `cor-a-divergence-free-field-has-zero-outward-flux-through-a-glued-elementary-solid`:

   `cor-the-flux-of-a-curl-through-the-boundary-of-a-glued-elementary-solid-vanishes`
   — *the outward flux of $\operatorname{curl}F$ through the boundary presentation
   of a glued elementary solid region vanishes, for every $C^2$ field $F$ on an
   open set containing it.*
   Route: `thm-the-divergence-of-a-curl-vanishes` gives
   $\operatorname{div}(\operatorname{curl}F)=0$, and $\operatorname{curl}F$ is
   $C^1$ because $F$ is $C^2$, so
   `cor-a-divergence-free-field-has-zero-outward-flux-through-a-glued-elementary-solid`
   applies. Deps: those two plus
   `def-divergence-and-curl-of-a-c1-vector-field`,
   `thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions`.
   Source: **Corral, *Vector Calculus*, §4.6, Corollary 4.18** — already in the
   ledger and already read.
   State the $C^2$ hypothesis where it is used: $C^1$ is not enough, because
   $\operatorname{curl}F$ must itself be $C^1$ for the divergence theorem to apply
   to it.

   This takes the A page to 45 items, still 15 under the ceiling.

### B6-2 · minor · a named CLP-4 heading in the read range carries no disposition

The claimed locator is "ch. 4 (Integral Theorems), sections 4.1-4.4", read in
full. Fetching `sec_graadDivCurl.html` and enumerating its own numbered items
returns, between Theorem 4.1.12 and Theorem 4.1.16,

> **Lemma 4.1.13** — existence of vector potentials with a specified zero component

which appears in no row of the harvest. Every other numbered item I enumerated —
Definition 4.1.1, Theorems 4.1.3–4.1.7, Lemma 4.1.8, Definition 4.1.11, Theorem
4.1.12, Theorem 4.1.16, Lemmas 4.1.20 and 4.1.25, and subsections 4.1.1–4.1.5 —
appears, with a disposition, and each parenthetical matches the source (including
that Theorem 4.1.6 really is the Laplacian identities and Lemma 4.1.8 really is
the vector triple product). **The harvest is faithful except for this one omission.**

Add the row. Lemma 4.1.13 is an internal step of CLP-4's constructive route to
Theorem 4.1.16, and this page reaches the vector potential by the homotopy formula
instead, so `out-of-scope` with that reason is the honest disposition — the same
call Beta-7 made for Hunter's Lemma 2.29 and Proposition 2.30, and the same one I
confirm there.

### B6-3 · minor · five dispositions describe a draft state that no longer holds

Five rows defer to `regular-surfaces-and-surface-integrals` / `-examples` with
reasons reading "authored and awaiting the owner's publish action". That page, its
companion and every item they name are `status: published` on disk today
(`def-oriented-unit-normal-and-flux-of-a-surface-patch`,
`def-finitely-patched-regular-surface-and-integrals`,
`thm-flux-under-surface-reparametrization`,
`def-solid-between-continuous-graphs-over-a-jordan-base`,
`thm-solid-between-continuous-graphs-fubini-formula`, all checked). The honest
disposition for a row naming a specific existing item is now `already-published`
with that item id, which `coverage-checklist` accepts. Re-disposition at the
`3-fix` pass; Beta-6's Finding 11 is closed by the same fact.

### B6-4 · record only · the `external_refs` seam

Beta-6's Finding 12 proposes `external_refs` entries from
`rem-the-reach-of-the-classical-divergence-and-stokes-theorems` and from the
curl-free counterexample to `rem-de-rham-and-stokes-on-manifolds` and
`rem-simple-connectedness`, and declines to scaffold them because
`library/not-proved-here/deferred-algebraic-topology.md` and all seventeen of its
items are `status: draft`, so a published item would carry a wikilink to
owner-only content. **I confirm the deferral.** It is a step-9 check, not a
scaffold change: if that page publishes before step 10, add the two entries then.

### Beta-6's other findings, adjudicated

| finding | disposition |
|---|---|
| 1 — graph faces are patches over the projection | **approved**, premise verified from `def-admissible-regular-parametrized-surface-patch` |
| 2 — two change-of-variables lemmas built here | **approved**; this is the build-the-prerequisite rule, not scope creep |
| 3, 4 — replace two unrefutable `fs-` ledger rows | **approved**, both |
| 5 — add a 3-dimensional curl-free non-conservative witness | **approved**; the published witness is planar and the corollary here is about $\mathbb R^3$ |
| 6–10 — vector potential, Green's identities, curl-of-curl, vector forms, the two limit interpretations | **approved**; standard, source-backed, and each earns its place |
| 11 — fourteen deps were `draft-page` | **closed**: all published today, see B6-3 |
| 12 — the `external_refs` seam | **confirmed deferral**, see B6-4 |
| 13–16 — corrections already applied to the manifest | **confirmed**, all four; I re-checked 13 (the rectangle's edge values sum to $3/2$) and 14 (the prism's face subdivision) arithmetically |
| 17 — `lem-content-zero-implies-null` is about $A\subseteq\mathbb R$ | **approved and important.** The $\mathbb R^m$ implication must come from `def-null-and-content-zero-in-rn` itself. This is the citation-fidelity defect class exactly; carry it into step 5 |
| 18 — two other batches' contracts will not validate | **half live, half stale**; see X-1 and B7-1 |

**Verdict: insufficient** — B6-1 and B6-2.

---

## 3. Batch 7 — `lebesgue-measure-on-euclidean-space`

This is the strongest scaffold of the three on route discipline. The choice ledger
is tracked item by item against the design's own table
(`plan-measure-theory-track.md` L490–L501): the premeasure theorem is written
choice-free by taking $\delta_k:=2^{-m_k}$ with $m_k$ **least**, which is a
definition and not a selection, matching the design's "the length premeasure … is
**ZF**"; outer regularity carries "Assuming countable choice", matching "outer and
inner regularity of $\lambda_n$ | **AC$_\omega$**"; translation invariance and the
linear change of variables carry none, matching "**ZF**".

Design traps, each checked explicitly:

- (i) half-open boxes so that $\mathcal E_n$ is an algebra — **held**, and
  sharpened by F1 below.
- (ii) the premeasure step is the only compactness — **held**; item 10 uses
  Heine–Borel once, on a compact inner approximation, and nowhere pretends
  countable additivity follows from finite additivity plus a limit.
- (iii) the agreement item must quote the **published closed-interval, sum
  $\le\varepsilon$, index-from-$0$** definition exactly — **held**;
  `thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line`'s strategy
  says "quote it in that form, with the index starting at $0$ and the intervals
  closed", and handles the degenerate $a_k=b_k$ case the published side permits.
- (iv) the fat-Cantor upgrade is new mathematics, not a restatement — **held**.
- (v) uniqueness needs local finiteness, made visible by an `fs-` — **held**
  (A page item 44, B page item 12).
- (vi) do **not** state the $C^1$ change of variables here — **held**; item 50 is
  linear only.

### Route check — the three items I traced end to end

- `thm-steinhaus-difference-set-contains-a-ball` (item 54). With $\theta=3/4$ and
  $\eta=\tfrac12\bigl((3/2)^{1/n}-1\bigr)$: $1+\eta=\tfrac12\bigl(1+(3/2)^{1/n}
  \bigr)<(3/2)^{1/n}$, so $(1+\eta)^n<3/2$. For $\lVert h\rVert_\infty<\eta s$ the
  bounding box of $Q\cup(Q+h)$ has side $s+|h_i|<s(1+\eta)$ and hence measure
  $<\tfrac32 s^n$, while two disjoint copies of $E\cap Q$ would need
  $>2\cdot\tfrac34 s^n=\tfrac32 s^n$. **Closes**, and the constant is right.
- `lem-shear-images-of-the-unit-cube-have-lebesgue-measure-one` (item 47). The
  pieces $T[A_k]-ke_i$ are pairwise disjoint (if $T(x)-ke_i=T(x')-k'e_i$ then
  $x_l=x'_l$ off $i$, so $x_j=x'_j$ and $x_i-x'_i=k-k'$ with both in $(0,1]$,
  forcing $k=k'$) and exhaust $(0,1]^n$ (for $y$, the integer $k$ with
  $y_i+k-ty_j\in(0,1]$ is unique). **Closes.**
- `thm-linear-change-of-variables-for-lebesgue-measure` (item 50). The scaling
  constant of item 45 is multiplicative, matches $\lvert\det\rvert$ on the
  elementary matrices by items 46 and 47, and
  `thm-invertible-matrices-factor-into-elementary-matrices` finishes it. **Closes**,
  and the singular clause is stated separately for the reason in F5.

### B7-1 · MAJOR · 49 of 60 contract entries use fact labels the grammar rejects

`research/frontier-18-batch-7.proof-contracts.json` carries **105 citations across
49 of its 60 entries** whose `fact` label is outside `F`/`A`/`L`:

| prefix | count |
|---|---|
| `T#` | 88 |
| `P#` | 11 |
| `C#` | 3 |
| `E#` | 2 |
| `X#` | 1 |

`tools/facts-block.mjs` parses a Facts entry only when its label matches
`FACT_LINE_RE = /^\s*\[([FLA]\d+)\]\s*(.+)$/`, and `tools/proof-contract.mjs:110`
looks the contract's `fact` up in exactly that map, erroring
`citation-fact-missing` when it is absent. **Zero of the corpus's 6150 items uses
`[T#]` or `[P#]` in a Facts block**, so there is no authored form that could
satisfy these rows: every one of the 105 is an unconditional step-5 failure. `C#`
additionally collides with the diagram-cell tag in the proof grammar.

Beta-6 found this and recorded it as its Finding 18; I confirmed it against disk
rather than take the report, and it is live. Batches 5, 6 and 8 use `F`/`L`
exclusively and are clean.

**Required (routed to Beta-7):** relabel to `F#`/`L#` within each contract entry,
keeping labels unique inside the entry. The `uses` arrays name step ids, not
labels, so nothing else moves; the `derivations[].inputs` arrays must follow the
rename. This is a mechanical repair of the batch's own file — no mathematics
changes and no item is touched.

### B7-2 · MAJOR · a landmark theorem and its corollary are backed only by Wikipedia

The notes' provenance section places
`thm-steinhaus-difference-set-contains-a-ball` under `literature-derived`
statements with the backing "(the Wikipedia entry's Statement section)", and
`cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn` and
`lem-a-set-of-positive-finite-measure-fills-most-of-a-dyadic-cube` under
`ai-altered` with "the Wikipedia Corollary section" and "the dyadic density
estimate behind the Wikipedia proof sketch". The coverage file confirms it: the
"Steinhaus theorem (Wikipedia)" source is the only one of the four with any
`included` row for this material.

`thm-steinhaus-difference-set-contains-a-ball` is a **landmark** and is in the
dependency backbone — item 55 rests on it, and the design says MT-5 will use it
twice. The owner's rule is that "Wikipedia and encyclopedia entries are convention
tiebreakers only, never primary backing", and the generated-claim rule adds that
"a theorem in the dependency backbone needs literature support or a locally
proved, source-grounded route". The local route *is* source-grounded and correct
(I traced it above); what is missing is a treatment that states the theorem.

Beta-7 saw the tension and labelled the row "A convention tiebreaker only: the
pair's backing is the three treatments above", which is true of the *pair* and does
not fix the *item*: nothing but an encyclopedia entry says what this landmark
claims.

**Required (routed to Beta-7):** harvest a textbook, monograph or lecture-note
treatment that states Steinhaus's theorem, record its exact locator, and re-back
these three items from it. The cheapest candidate to check first is an extension
of a range already read — **Tao, *An Introduction to Measure Theory* (GSM 126),
§1.6**, where Steinhaus appears as an exercise; the density route there differs
from this page's dyadic-cube route, which is fine, because what is needed is
statement backing. **Stein & Shakarchi, *Real Analysis* (Princeton Lectures III),
Ch. 1** and **Bogachev, *Measure Theory* I, §3.7** are the alternatives. I did not
pin an exact exercise number: the PDFs would not extract through the fetch tool
here, and asserting a locator I could not open would be the defect this stage
exists to catch. Beta-7 holds the sources; verify and record it.

### B7-3 · minor · eight dispositions describe a draft state that no longer holds

Eight rows carry `deferred` with reasons naming a draft or unpublished state —
"the preceding pair … whose page is drafted but not yet published", "awaiting the
owner's publish action" — with destinations
`outer-measure-and-the-caratheodory-extension-theorem` (6 rows),
`the-riemann-integral-in-rn-and-jordan-content` and `compactness-in-metric-spaces`.
All three destination pages, and `def-outer-measure`,
`def-caratheodory-measurable-set`, `def-premeasure-on-an-algebra`,
`thm-caratheodory-outer-measure-theorem` and `thm-caratheodory-extension-theorem`
individually, are `status: published` on disk today. Beta-7's own F10 predicted
exactly this — "If MT-3 is published before step 6 these rows should be
re-dispositioned" — and the condition has been met. Re-disposition to
`already-published` naming the item.

### B7-4 · minor · one Statement omits the choice scope its neighbours declare

`thm-lebesgue-inner-regularity-by-closed-and-compact-sets` carries no choice
qualifier, while `thm-lebesgue-outer-regularity-for-arbitrary-subsets` and
`thm-littlewood-characterisations-of-lebesgue-measurability` — the latter being
what it uses — both begin "Assuming countable choice". The design's ledger row is
"outer **and inner** regularity of $\lambda_n$ | **AC$_\omega$**", and this page's
own `cor-riemann-integrability-and-lebesgue-null-discontinuity-sets` instructs
"Repeat the choice ledger of the cited theorems rather than dropping it." Missing
choice scope is a named fatal class at step 8; it costs one clause now. Add it.

### Beta-7's findings, adjudicated

| finding | disposition |
|---|---|
| F1 — $\mathcal E_n$ is a ring, not an algebra, without extended box parameters | **APPROVED.** Correct and necessary: with bounded boxes $\mathbb R^n\notin\mathcal E_n$, and `def-outer-measure-induced-by-a-premeasure` needs $X\in\mathcal A_0$. Extended parameters are Folland's h-interval convention, not an invention |
| F2 — the half-open box is $(a_i,b_i]$, not $[a_i,b_i)$ | **APPROVED.** The published `thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn` already fixes $(a_i,b_i]$ in its Statement, and MT-6's $\mu_F((a,b])=F(b)-F(a)$ inherits it. Amend the design |
| F3 — the spine rests on draft items | **CLOSED** — MT-3 is published today. The publish blocker it names has lifted; see B7-3 |
| F4 — two designed `fs-` cannot be refuted here | **APPROVED.** Both need a non-measurable set, which is AC beyond countable choice and is MT-5's declared subject; refuting them here would either forward-reference MT-5 or break this page's ZF+AC$_\omega$ ledger. The design's own MT-5 section already claims the first |
| F5 — the singular case of the linear change of variables | **APPROVED.** $0\cdot(+\infty)$ is undefined by `def-extended-reals`; the two-clause statement is right |
| F6 — `rem-lebesgue-measure-and-integral` has decayed | **APPROVED as reported, not repaired.** I confirm the licence does not reach it: no item in this batch depends on it, and the obvious-published-dependency-repair delegation covers "a published item the current level depends on". Carry to the owner at step 10 |
| F7 — the premeasure theorem is choice-free | **APPROVED**, and it is the best decision in the batch. A least-index convention is a definition, not a choice |
| F8 — 55 items, and the split if it grows | **APPROVED: keep one page.** My findings add no items to this batch, so the margin is unchanged. The proposed cut (construction/dictionary | invariance/geometry) is where the graph is thinnest and is the right one if step 6 forces it |
| F9 — Hunter's Lemma 2.29 and Prop 2.30 `out-of-scope` | **CONFIRMED.** They are internal steps of an oblique-rectangle route to orthogonal invariance that this page reaches from the determinant formula; nothing they support is left unbuilt. I considered building Hunter's route as a second proof under the owner's 2026-08-20 licence and **decline**: it is an approximation argument, not a genuinely different idea about the same theorem, and the page has five items of headroom that B7-2's re-backing may need |
| F10 — MT-3 material `deferred`, not `already-published` | **APPROVED, and now actionable** — see B7-3 |

**Verdict: insufficient** — B7-1 and B7-2.

---

## 4. Batch 8 — `the-winding-number-and-the-global-cauchy-theorem`

**Sufficient.** I found no breadth gap and no broken route.

### The route change I approve, and why it is necessary rather than preferred

CA-7's trap (i) prescribes Ahlfors's auxiliary-function proof of integrality,
$h(t)=(\gamma(t)-a)\exp\bigl(-\int\gamma'/(\gamma-a)\bigr)$, and warns that the
piecewise structure means "$h'=0$ on each piece plus continuity". The Beta took a
different route entirely — continuous logarithms built by disc subdivision — and
recorded it as amendment A1 and finding F8.

**The design's route is not available.** `items/def-complex-contours-reversal-concatenation-and-closedness.md`
reads, in its Definition: "A **complex contour** is a rectifiable path
$\gamma:[a,b]\to\mathbb C$". There is no $\gamma'$. Ahlfors, Lebl and Weber all
work with piecewise-differentiable or piecewise-$C^1$ curves; this library does
not. The Beta's replacement is Ahlfors's *own* alternative (Exercise 2 to §2.1,
and it is harvested as such), it uses no derivative anywhere, and item 11's
strategy says so explicitly: "No differentiability of $\gamma$ is used anywhere,
which is what makes the proof valid for the rectifiable contours this library
defines." **Approved**; the design line is the lead Alpha's to correct at step 4.

The other three design traps hold: chains are finite lists with no free abelian
group imported (trap iii, and `rem-homological-simple-connectivity-conventions`
records why); Dixon's transform is corrected locally by $n(\Gamma,w)f(w)$ and
glued, with the entirety *proved* through items 28–32 rather than asserted
(trap ii); and the adjective is "homologically simply connected" throughout, with
no topological notion defined (trap iv).

### Three places where the scaffold is better than it had to be

- `cor-global-cauchy-theorem-homology` (item 34) does not assume that
  $\Omega\setminus\Gamma^\ast$ is nonempty. Its strategy states the trap and
  refuses it — "the reason is not that the trace has empty interior: that is a
  stronger claim about rectifiable curves which this library has not established
  and which must not be asserted" — and derives nonemptiness from compactness
  plus the connectedness of $\mathbb C$ instead. That is the "asserts more than
  the proof gives" class, caught before anything was written.
- `thm-homological-simple-connectivity-equivalences` (item 40) proves a genuine
  six-condition cycle. I traced every arrow, including the two the strategy does
  not spell out: (iii)$\Rightarrow$(iv) differentiates $\exp(g(z))=z-p$ to get
  $g'(z)(z-p)=1$, and (v)$\Rightarrow$(vi) applies (v) to $1/(z-p)$. **The cycle
  closes.** One authoring note: (ii)$\Rightarrow$(iii) must re-run item 38's proof
  from hypothesis (ii) rather than cite item 38, whose hypothesis is the stronger
  (i); the strategy's "three of the arrows are already proved on this page" should
  not be read as covering that one.
- `ex-winding-numbers-of-a-keyhole-contour` (B page item 4) refuses to state an
  index on the radial segments, which lie in $\Gamma^\ast$. Beta-8's F4 records
  that as a correction it applied. Confirmed.

### The design's B-page dictionary item is present

RC-9's counterpart obligation — "the vortex field … identified as $\mathrm{Re}$
and $\mathrm{Im}$ of $1/z$ … this is the same fact seen twice and the library must
say so" — is `rem-the-winding-number-and-the-planar-vortex-field`, and it declares
`cex-vortex-field-is-closed-but-not-exact-on-the-punctured-plane`'s page as a real
dependency rather than a prose nod. Present and correctly wired.

### B8-3 · record only · the design cites a result that does not exist

CA-7's THMS paragraph says "$\mathbb C\setminus\gamma^\ast$ has exactly one
unbounded component by `the-topology-of-euclidean-space`". Beta-8's F12 reports
that page carries no such statement and that no published item does. I confirmed
the second half mechanically: nothing in `items/` states it. Under the
self-contained-scope rule the Beta **built** the prerequisite —
`lem-plane-exterior-of-a-closed-disc-is-path-connected` and
`thm-complement-of-a-compact-plane-set-has-one-unbounded-component`, both placed
ahead of the consumer. **Approved**; the design line naming a nonexistent citation
is the lead Alpha's step-4 edit.

---

## 5. Batch 8 — `holomorphic-functions-of-several-variables`

**Sufficient**, after the repair below.

### B8-1 · MAJOR · REPAIRED BY ME · a `b-leaf` dependency `validate-plan` rejects outright

Routed here by name by `research/frontier-18-alpha-step0-drift.md` ("Two findings
that are not mine to fix"). Confirmed and closed.

`fs-separately-real-analytic-functions-are-jointly-continuous` and
`rem-separate-regularity-and-joint-continuity-in-the-real-and-complex-cases`, both
on `holomorphic-functions-of-several-variables-examples`, declared
`cex-partial-derivatives-without-continuity` in `deps`. That item is homed on
`the-total-derivative-examples`, a **B page**. `tools/validate-plan.mjs:235`
errors `b-leaf` on any dep homed on an examples page, *independently of `requires`*
— so this could not have been repaired by a spec edit, and it would have failed
the step-4 splice after the text was written. It was the only dependency in the
whole group still outside its closure.

Beta-8 introduced it deliberately (its F14) because the SC-1 design says the real
witness is "already scaffolded on `the-total-derivative-examples` and **cited
rather than re-minted**". The design is wrong on the mechanics, and the design's
own instruction is unimplementable.

**What I changed** — `research/frontier-18-batch-8.pages.json` and
`research/frontier-18-batch-8.proof-contracts.json`, nothing else:

- Removed the `deps` edge from both items (8 → 7 deps each). No item was added,
  deleted or renamed; the four item lists are byte-identical otherwise.
- Rewrote both strategies so the false statement proves **all three** properties
  of $f(x,y)=xy/(x^2+y^2)$ itself. It already proved two of them; the third is one
  line and was already written in the strategy — along $y=x$ with $x\ne0$ the
  value is $1/2$, which does not tend to $f(0,0)=0$, so $f$ is discontinuous there
  by `def-metric-continuity`, which is in `deps` and stays. Nothing is lost: the
  published item's content is a single limit computation.
- Both strategies now instruct the author to name
  `cex-partial-derivatives-without-continuity` **in prose without a wikilink**, and
  say why — the `b-leaf` rule — so step 5 does not reintroduce it.
- In the contract, deleted the `F1` citation to that item, renumbered `F2`–`F8` to
  `F1`–`F7`, and updated every `derivations[].inputs` accordingly; step 3.2 now
  derives the discontinuity from `def-metric-continuity` (`F5`) and
  `def-vector-valued-functions-limits-and-continuity` (`F6`) instead of importing
  it. Amended the `nonempty-choice` boundary row, which said "the witness is the
  published one".

**Verified after:** all four pairs show 0 out-of-closure deps and 0 `b-leaf` deps;
the item lists are unchanged; 0 residual `deps` or contract references remain,
and the two surviving textual mentions are the prose instructions above.

This is repair form (3) — correcting what a planned item claims about where its
content comes from — not a breadth change, so it does not make the pair
`insufficient`.

### Design conformance, and the two traps that matter

SC-1's trap (i) — "Do not put continuity into the definition to make Hartogs's
theorem tautological" — **held, and it is the page's organising decision.**
`def-holomorphic-function-in-several-complex-variables` is complex Fréchet
differentiability, with its strategy saying "Do NOT put continuity or local
boundedness into the definition". That is a convention departure from **all three**
harvested sources — Lebl defines holomorphy as locally bounded plus separately
complex differentiable, Boas by the $C^1$ CR system, Jabbari by continuity plus
separate holomorphy — and the notes record it as convention disagreement 4, in
those words. Osgood's lemma (item 13) and `thm-locally-bounded-separate-holomorphy`
(item 18) are therefore theorems rather than tautologies, which is the point.

Trap (ii) — the several-variable identity theorem is genuinely weaker than CA-6's
— **held** three times over: item 27's Statement is the nonempty-**open**-set form
and its strategy requires the Statement itself to say that an accumulation point
would not suffice; item 32 is the conventions remark; and B page item 10 is the
false statement carrying the witness $z_0$ on $\mathbb C^2$.

Trap (iii) — check what the Riemann Fubini theorem actually delivers before
relying on it — **held by not relying on it.** Item 10 proves the polydisc Cauchy
formula by induction on $m$, applying the one-variable circle formula in one
variable at a time, and its strategy states "no interchange of integrals is
performed anywhere and Fubini is not invoked". The formula is stated as an
iterated integral throughout, never as an integral over the distinguished
boundary, because the latter presumes a product measure on a torus this library
has not built (convention disagreement 5). That is the correct disposition of the
trap.

Traps (iv) and (v) — multi-indices cited from `mixed-partials-taylor-and-extrema`,
and the zero-set and ball–polydisc results left to SC-3 and SC-7 — **held**; the
B page carries the explicit example $z_0$ rather than the general theorem.

### Route check

`thm-identity-theorem-in-several-complex-variables` (item 27): $A=\{z:\partial^\alpha
f(z)=0\ \forall\alpha\}$ is closed as an intersection of zero sets of continuous
functions, nonempty because $f\equiv0$ on the open $W$, and open because at
$a\in A$ every power-series coefficient $\partial^\alpha f(a)/\alpha!$ vanishes.
**Closes.** `cor-liouville-theorem-in-several-complex-variables` (item 30) restricts
to the complex line $\xi\mapsto f(\xi z)$ and evaluates at $\xi=0,1$ — **closes**,
and needs no connectedness. `thm-maximum-modulus-principle-in-several-complex-variables`
(item 29): $|g_v|\le|g_v(0)|$ on the *whole* disc $\{|\xi|<r\}$, so the one-variable
principle gives $g_v$ constant there and $f$ constant on all of $B$, not merely near
$a$ — the strategy's "constant near $0$" is weaker than what the argument delivers
and should be written as the stronger form.

### B8-4 · record only · a declared prerequisite nothing cites

`fubini-and-change-of-variables` is in SC-1's spec `requires` and is cited by
**zero** of the 44 items on the pair — a direct consequence of the trap-(iii)
disposition above. `rn-as-a-normed-space` (11 citations),
`goursat-and-cauchys-theorem-in-a-convex-domain` (6) and `the-total-derivative`
(19) are all live. Beta-8's F7 proposes removing the edge. **I decline the spec
edit**: an unused page-level `requires` is harmless — `validate-plan` checks the
other direction and passes — and removing it would be a plan change with no
benefit. Recorded for the lead Alpha at step 4. Beta-8's F6 (add
`mixed-partials-taylor-and-extrema`) is likewise declined: the drift review
confirmed it and `absolute-convergence-and-rearrangement` are already in the
transitive closure at orders 231 and 129, so a direct edge would only produce a
`redundant-prereq` advisory.

### B8-2 · record only · the draft-dependency finding is closed

Beta-8's F11 lists six deps as `draft-page`, all on
`the-identity-theorem-and-the-open-mapping-theorem`. All six —
`lem-local-holomorphic-logarithm-nonvanishing-function-on-disc`,
`thm-boundary-maximum-modulus-principle`, `thm-local-maximum-modulus-principle`,
`thm-open-mapping-theorem-holomorphic-functions`,
`thm-identity-theorem-holomorphic-functions`, `thm-isolated-zeros-holomorphic-function`
— are `status: published` today, as is the page. The publish blocker has lifted.
F13 (nothing built between orders 317 and 348) needs no action: the highest-order
external home page any SC-1 item cites is 313.

### Beta-8's other findings

F1–F5 and F14 are marked APPLIED and I confirm each from the manifest: the
nonemptiness gap in `cor-global-cauchy-theorem-homology`, the title of
`thm-power-series-expansion-in-several-complex-variables` (which now explicitly
refuses to claim $c_\alpha=\partial^\alpha f(a)/\alpha!$, since that needs the
*next* theorem), the decayable count in a title, the keyhole index, and two LaTeX
typos. F14 is the item B8-1 repairs. F9 (adopt amendment A2, the Lipschitz bound
from the Cauchy inequality) and F10 (keep the two `owner-decision` deferrals) are
**approved**. Every deferral destination in the batch resolves to a real page in
`plan-spec.json`; I checked all 29 across the group and none is invented.

---

## 6. X-1 · cross-batch, for the lead Alpha

Beta-6's Finding 18 reports that **two** other batches' contracts will not
validate. I checked both from disk:

- **Batch 7 — LIVE.** See B7-1. 105 citations, 49 entries, labels `T/P/C/E/X`.
- **Batch 5 — STALE, closed.** The finding says batch 5 "carries **zero** citation
  entries across all 96 scoped items" and names item ids as `inputs` instead of
  fact labels. `research/frontier-18-batch-5.proof-contracts.json` today has 104
  contract entries, **286 citation entries**, fact prefixes `F` (145) and `L`
  (141), no non-`FAL` labels, and no entry without citations. The Beta evidently
  revised it after the note was written. Group `b` owns batch 5 and should not
  spend a repair round on a finding that no longer holds — that is the whole point
  of reading the file rather than the report.

I also checked batch 6 and batch 8 for the same defect: both are clean.

---

## 7. Cross-page checks the group assignment exists to make

The three batches share one integration theory, and the rationale predicted the
defects would be shared hypotheses. What I found reading them together:

- **The rectifiable-versus-$C^1$ seam is real and correctly handled on both
  sides.** Batch 8's contours are rectifiable and carry no derivative, which is
  what forces the continuous-logarithm route; batch 6's boundary chains are
  piecewise-$C^1$ paths and the pullback lemma (item 37) uses the chain rule on
  each smooth piece. Neither page cites the other's notion. `rem-the-winding-number-and-the-planar-vortex-field`
  is the one item that crosses, and it correctly restricts itself to
  "a piecewise-$C^1$ closed contour" before invoking the real line integrals.
- **Orientation sign conventions do not collide.** Batch 6 fixes the cyclic
  projection $\pi_x(p)=(p_y,p_z)$, $\pi_y(p)=(p_z,p_x)$, $\pi_z(p)=(p_x,p_y)$ and
  states that only this order makes $(\varphi_u\times\varphi_v)_k=\det
  D(\pi_k\circ\varphi)$ hold for all three $k$. Batch 8's index convention is the
  positively oriented circle. Nothing in batch 7 orients anything. No conflict.
- **Measure-zero exceptional sets.** Batch 6 works in Jordan content throughout
  and never says "measure zero" in the Lebesgue sense; batch 7 owns the
  translation between the two
  (`thm-lebesgue-null-agrees-with-elementary-nullity-in-rn`,
  `cor-elementary-almost-everywhere-is-lebesgue-almost-everywhere`) and is at a
  *later* plan order (288.007 against 288.00017), so batch 6 could not have cited
  it and does not. Correct in both directions, and worth stating because a
  divergence-theorem page reaching for Lebesgue nullity would have been a forward
  reference nothing else would have caught.
- **`thm-lipschitz-images-of-null-sets-in-rn-are-null` is used by both batch 6
  (item 13) and batch 7 (item 48), in different senses of "null".** Batch 6 goes
  through it to get *content* zero back for a compact image; batch 7 goes through
  the agreement theorem to get *Lebesgue* nullity. Both are correct uses of the
  same published item, and Beta-6's Finding 17 is the matching warning about
  `lem-content-zero-implies-null`, which is stated for $A\subseteq\mathbb R$ only.
  **Both step-5 authors must hold that distinction**; it is the most likely place
  in this group for an inaccurate citation to be written.

---

## 8. What I did not verify

- **The seven PDF sources were not opened.** Ahlfors, Lebl (×2), Hunter, Tao,
  Carlen, Boas and CIMAT would not extract through the fetch tool available here.
  Their harvests are internally consistent and their enumerated labels match the
  published structure of those works as I know them, but that is not the check I
  made on the three HTML sources, and B6-1 is the reminder of what that check
  turns up.
- **No proof text exists yet**, so nothing here is a verdict on a proof. What I
  checked is whether each route can close from the `title`, `strategy` and `deps`
  the scaffold supplies. Where I traced a route end to end I said so and gave the
  computation.
- **I did not re-derive the contracts' boundary worksheets.** I spot-checked the
  batch-8 entry I edited and found real dispositions, not template rows, but a
  full boundary audit is `boundary-audit.mjs`'s job at step 5 and Alpha's at 6b.

---

## 9. What the `3-fix` stage owes

**Beta-6** — B6-1 (correct the Corral row; add
`cor-the-flux-of-a-curl-through-the-boundary-of-a-glued-elementary-solid-vanishes`
with the $C^2$ hypothesis), B6-2 (add the CLP-4 Lemma 4.1.13 row), B6-3
(re-disposition five stale rows).

**Beta-7** — B7-1 (relabel 105 contract citations to `F#`/`L#`), B7-2 (re-back
Steinhaus and its two companions from a real treatment, with an exact locator),
B7-3 (re-disposition eight stale rows), B7-4 (add the choice qualifier to
`thm-lebesgue-inner-regularity-by-closed-and-compact-sets`).

**Beta-8** — nothing. B8-1 is applied; B8-2, B8-3 and B8-4 are records.

**Lead Alpha, at step 4** — three design-line corrections, none of them a spec
edit: CA-7 trap (i) prescribes a proof that needs $\gamma'$, which this library's
contours do not have; CA-7's THMS paragraph cites
`the-topology-of-euclidean-space` for a result no published item states; and MT-4's
DEFS line calls $\mathcal E_n$ an algebra when its boxes are bounded, and writes
$[a_i,b_i)$ against the published $(a_i,b_i]$.
