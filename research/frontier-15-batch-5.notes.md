# Frontier 15, batch 5 — Beta-5 scaffold notes

## Result

The scaffold contains one A/B pair: `the-fundamental-group-of-the-circle`
(order 295) has `item_count: 21`, and
`the-fundamental-group-of-the-circle-examples` (order 296) has
`item_count: 7`. The main computation uses the quotient circle throughout and
does not use trigonometry. Trigonometry occurs only in the dictionary theorem
and its two geometric consequences.

No split is proposed. The A page is below the 60-item ceiling, and no
mathematical result was pruned to obtain that size.

## Applyable amendments to the prose scaffold

Apply these edits to `research/plan-topology-set-theory-track.md`, section
`HT-4. The Fundamental Group of the Circle`.

### Amendment 1 — correct the prerequisite edge

Exact old text:

```text
`requires`: `covering-spaces-and-lifting` (233),
`sine-cosine-and-the-definition-of-pi` (157) [dictionary item only — see
traps for the exact trig page, which Beta pins at step 1]
```

Exact new text:

```text
`requires`: `covering-spaces-and-lifting` (293),
`fundamental-trigonometric-identities` (185) [dictionary item only; this page
contains `thm-sine-and-cosine-parametrize-the-unit-circle` and transitively
requires `sine-cosine-and-the-definition-of-pi`]
```

Reason: the required surjectivity and exact fibre information is printed in
`thm-sine-and-cosine-parametrize-the-unit-circle` on
`fundamental-trigonometric-identities`, not on
`sine-cosine-and-the-definition-of-pi`.

### Amendment 2 — replace the definitions paragraph

Exact old text:

```text
DEFS: $S^1 := \mathbb{R}/\mathbb{Z}$ with the quotient topology (published
machinery of 191; the published B-page torus example already treats
$\mathbb{R}/\mathbb{Z}$ — a B item, so it is REBUILT here on the A page from
`def-quotient-topology`, with an agreement remark, exactly the NT-3 pattern
for $\mathbb{Z}/n$); the degree of a loop (well-definedness #17).
```

Exact new text:

```text
DEFS: `def-circle-as-real-line-mod-integers` rebuilds
$S^1:=\mathbb{R}/\mathbb{Z}$ on the A page from `def-quotient-topology`, with
basepoint $[0]$ and quotient map $p(x)=[x]$;
`rem-circle-quotient-model-agrees-with-published-examples` records agreement
with the already-published quotient examples without citing either B item;
`def-standard-integer-loops-in-the-circle` defines
$\omega_n(t)=[nt]$ for every $n\in\mathbb Z$; and
`def-degree-of-a-circle-loop` defines the degree of a loop as the terminal
point of its unique lift starting at zero. The separate corollary
`cor-degree-descends-to-circle-loop-classes` proves well-definedness before
the homomorphism or isomorphism uses it.
```

### Amendment 3 — replace the theorem paragraph

Exact old text:

```text
THMS: $p\colon \mathbb{R} \to \mathbb{R}/\mathbb{Z}$ is an open quotient map,
restricting to a homeomorphism on every interval of length $< 1$;
$\mathbb{R}/\mathbb{Z}$ is Hausdorff (published `def-hausdorff-space`),
compact (image of $[0,1]$, via 195), path-connected, metrizable via an
explicit metric IF cheap, else omitted; **$p$ is a covering map** (landmark);
**$\pi_1(S^1) \cong \mathbb{Z}$** (landmark): degree is well defined (#17), a
homomorphism to $(\mathbb{Z}, +)$ — the group structure citing
`thm-int-comm-ring` (order 7, A-page; the AA-1 B items are leaf-locked) —
injective (homotopy lifting) and surjective (explicit loops); **the
dictionary item**: $t \mapsto (\cos 2\pi t, \sin 2\pi t)$ induces a
homeomorphism from $\mathbb{R}/\mathbb{Z}$ onto the unit circle of
$\mathbb{R}^2$ (continuous bijection from a compact space to a Hausdorff
space, the compact-to-Hausdorff theorem of 195; trig from the analysis
track).
```

Exact new text:

```text
THMS: `lem-open-quotient-arcs-in-real-line-mod-integers` proves by the exact
saturation formula that $p$ is open and that its restriction to every
interval shorter than one is a homeomorphism onto its image;
`thm-real-line-covers-real-line-mod-integers` verifies every evenly-covered
neighbourhood clause (landmark). Separate propositions prove compactness and
path-connectedness, and prove Hausdorffness directly. Degree is developed in
the order: homotopy invariance; descent to loop classes; degrees of the
standard loops; explicit lift formulas for concatenation and reversal;
degree laws; homomorphism; equal degree implies path homotopy; and the iff
classification. The resulting landmark
`thm-fundamental-group-of-the-circle` proves
$\operatorname{Deg}:\pi_1(\mathbb R/\mathbb Z,[0])\cong(\mathbb Z,+)$,
citing `thm-int-comm-ring` for the target group. The dictionary landmark
`thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle` factors the
trigonometric parametrisation through the quotient and applies the
compact-to-Hausdorff continuous-bijection theorem. Metrizability is not
asserted: it is unnecessary for the computation or dictionary theorem.
```

### Amendment 4 — replace the false-statement and examples paragraphs

Exact old text:

```text
FS: a nullhomotopic loop in $S^1$ can have nonzero degree (refuted by #17 —
really an `fs-` shaped restatement; keep only if it earns its place); every
continuous map $S^1 \to S^1$ is nullhomotopic (witness: the identity, degree
1); the local homeomorphism `fs-` inherited from HT-3 if it moved here.

B: degree computed for the standard loops $t \mapsto nt$; a homotopy between
two equal-degree loops built through the lifting machinery; the circle as the
first published space with nontrivial fundamental group — the B page states
what became available.
```

Exact new text:

```text
FS: `fs-every-continuous-self-map-of-the-circle-is-nullhomotopic` is refuted
by the identity. Its proof handles the unbased-homotopy issue directly: a
reversed nullhomotopy would lift to a section of $p$, contradicting uniqueness
of the lift of $\omega_1$. The proposed nonzero-degree nullhomotopy falsehood
is omitted because `cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero`
already states the exact classification and the false version adds no new
mathematics. The inherited local-homeomorphism falsehood remains on HT-3.

B: `cex-unit-length-interval-need-not-embed-in-real-line-mod-integers` shows
that the strict length bound in the interval-embedding lemma cannot be weakened
uniformly to length at most one: $p|_{[0,1)}$ is a continuous bijection that is
not a homeomorphism, while $p|_{[0,1]}$ is not injective. An explicit paused
once-around loop is joined to the standard loop by a projected straight-line
homotopy. The out-and-back loop
`ex-a-surjective-circle-loop-of-degree-zero` is surjective, has degree zero,
and is nullhomotopic. The trigonometric loops have their stated integer degrees
under the dictionary; the constant loop and $\omega_1$ show that equal
endpoints do not imply path homotopy; and
`ex-a-covering-quotient-of-a-simply-connected-space-need-not-be-simply-connected`
contrasts the simply connected real line with its non-simply-connected quotient
$\mathbb R/\mathbb Z$. The identity refutes the claim that every circle
self-map is nullhomotopic.
```

### Amendment 5 — replace the traps paragraph

Exact old text begins `Traps. (i) THE THEOREM NEEDS NO TRIGONOMETRY` and ends
`must be a step, not a "clearly".`

Exact new text:

```text
Traps. (i) The fundamental-group computation uses only
$S^1=\mathbb R/\mathbb Z$; trigonometry enters only in the dictionary theorem.
The exact trig prerequisite is `fundamental-trigonometric-identities` (185).
(ii) The additive group of the integers is supplied by `thm-int-comm-ring`,
not by a B-page item. (iii) The quotient circle is rebuilt on this A page and
an agreement remark records compatibility with the published B examples.
(iv) Openness is proved from
$p^{-1}(p[U])=\bigcup_{n\in\mathbb Z}(U+n)$, and the covering proof separately
checks disjoint sheets and the homeomorphism on each sheet. (v) The printed
path- and homotopy-lifting theorems impose no local path-connectedness or
semilocal simple-connectedness hypothesis, so none is added here.
```

## Proposed page summaries

For `the-fundamental-group-of-the-circle`:

> The quotient map from the real line to the real line modulo integer
> translation is an explicit covering. Lifting a based loop from zero assigns
> it an integer endpoint, and homotopy lifting proves that this degree depends
> only on the loop class. Explicit lift formulas make degree additive, while
> straight-line homotopies between equal-endpoint lifts classify based circle
> loops and identify the fundamental group with the additive integers.
>
> A separate dictionary theorem identifies the quotient circle with the unit
> circle by the sine-cosine parametrisation. This is the only place where
> trigonometry enters: the fundamental-group calculation itself uses the
> quotient model, covering theory, and elementary topology.

`the-fundamental-group-of-the-circle-examples` is a B page and therefore has no
authored summary body.

## Per-page item list

### `the-fundamental-group-of-the-circle` — `item_count: 21`

1. `def-circle-as-real-line-mod-integers` — definition — The circle as
   $S^1=\mathbb R/\mathbb Z$ with basepoint $[0]$.
2. `rem-circle-quotient-model-agrees-with-published-examples` — remark —
   Agreement with the published quotient model of $\mathbb R/\mathbb Z$.
3. `lem-open-quotient-arcs-in-real-line-mod-integers` — lemma — The quotient
   map is open, and every interval shorter than one embeds in
   $\mathbb R/\mathbb Z$.
4. `thm-real-line-covers-real-line-mod-integers` — theorem —
   $p:\mathbb R\to\mathbb R/\mathbb Z$ is a covering map with translated
   interval sheets.
5. `prop-real-line-mod-integers-is-compact-and-path-connected` — proposition —
   $\mathbb R/\mathbb Z$ is compact and path-connected.
6. `prop-real-line-mod-integers-is-hausdorff` — proposition —
   $\mathbb R/\mathbb Z$ is Hausdorff.
7. `def-standard-integer-loops-in-the-circle` — definition — The standard
   circle loops $\omega_n(t)=[nt]$ for $n\in\mathbb Z$.
8. `def-degree-of-a-circle-loop` — definition — The degree of a based circle
   loop.
9. `thm-degree-is-invariant-under-path-homotopy` — theorem — Path-homotopic
   based circle loops have the same degree.
10. `cor-degree-descends-to-circle-loop-classes` — corollary — Degree defines
    a function $\operatorname{Deg}:\pi_1(S^1,[0])\to\mathbb Z$.
11. `prop-standard-circle-loops-have-their-integer-degrees` — proposition —
    $\deg(\omega_n)=n$ for every integer $n$.
12. `lem-lifts-of-circle-loop-concatenation-and-reversal` — lemma — Lifts of
    circle-loop concatenations and reversals.
13. `prop-degree-laws-for-circle-loops` — proposition — Degree sends
    concatenation to addition, reversal to negation, and the constant loop to
    zero.
14. `thm-degree-map-on-the-circle-is-a-homomorphism` — theorem —
    $\operatorname{Deg}:\pi_1(S^1,[0])\to(\mathbb Z,+)$ is a group
    homomorphism.
15. `lem-circle-loops-of-equal-degree-are-path-homotopic` — lemma — Based
    circle loops of equal degree are path-homotopic.
16. `thm-circle-loops-are-path-homotopic-iff-they-have-equal-degree` — theorem —
    Two based circle loops are path-homotopic if and only if they have equal
    degree.
17. `cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero` — corollary — A
    based circle loop is nullhomotopic exactly when its degree is zero.
18. `thm-fundamental-group-of-the-circle` — theorem —
    $\operatorname{Deg}:\pi_1(\mathbb R/\mathbb Z,[0])\to(\mathbb Z,+)$ is an
    isomorphism.
19. `cor-real-line-mod-integers-is-not-simply-connected` — corollary —
    $\mathbb R/\mathbb Z$ is not simply connected.
20. `thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle` — theorem —
    $[t]\mapsto(\cos 2\pi t,\sin 2\pi t)$ is a homeomorphism from
    $\mathbb R/\mathbb Z$ to the unit circle.
21. `cor-geometric-unit-circle-has-fundamental-group-z` — corollary — The
    trigonometric loops give
    $\pi_1(\{(x,y):x^2+y^2=1\},(1,0))\cong\mathbb Z$.

At Step 5, mark the covering theorem, the fundamental-group theorem, and the
dictionary theorem as landmarks.

### `the-fundamental-group-of-the-circle-examples` — `item_count: 7`

1. `cex-unit-length-interval-need-not-embed-in-real-line-mod-integers` —
   counterexample — An interval of length one need not embed under
   $p:\mathbb R\to\mathbb R/\mathbb Z$.
2. `ex-a-paused-circle-loop-is-homotopic-to-the-standard-loop` — example — A
   loop that traverses the circle once and then pauses is homotopic to the
   standard loop.
3. `ex-a-surjective-circle-loop-of-degree-zero` — example — A surjective circle
   loop can have degree zero and be nullhomotopic.
4. `ex-trigonometric-circle-loops-have-their-integer-degrees` — example — The
   geometric loops $t\mapsto(\cos 2\pi nt,\sin 2\pi nt)$ have degree $n$.
5. `cex-based-circle-loops-with-the-same-endpoints-need-not-be-path-homotopic`
   — counterexample — Based circle loops with the same endpoints need not be
   path-homotopic.
6. `ex-a-covering-quotient-of-a-simply-connected-space-need-not-be-simply-connected`
   — example — A covering quotient of a simply connected space need not be
   simply connected.
7. `fs-every-continuous-self-map-of-the-circle-is-nullhomotopic` — false
   statement — FALSE: every continuous self-map of the circle is
   nullhomotopic.

## Per-pair richness report

Both the proof-decomposition pass and the corollary pass were performed.

The covering-map proof was decomposed into
`lem-open-quotient-arcs-in-real-line-mod-integers`, which proves the saturation,
openness, injectivity, and inverse-continuity facts, followed by
`thm-real-line-covers-real-line-mod-integers`, which checks the evenly-covered
neighbourhood clauses.

The fundamental-group proof was decomposed into the degree definition,
homotopy invariance, descent to classes, standard-loop computation, explicit
concatenation and reversal lift formulas, degree laws, homomorphism,
equal-degree straight-line homotopy, and the two-direction loop
classification. These pieces support the final isomorphism without hiding a
well-definedness or group-law argument in one proof.

The useful immediate corollaries added are:

- `cor-degree-descends-to-circle-loop-classes`, the required well-definedness
  result;
- `cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero`, the zero-degree
  test;
- `cor-real-line-mod-integers-is-not-simply-connected`, the first nontriviality
  consequence; and
- `cor-geometric-unit-circle-has-fundamental-group-z`, transport to the usual
  unit circle.

The companion-page pass now also records three boundary witnesses: failure of
the interval-embedding conclusion at length one, a surjective nullhomotopic
loop of degree zero, and a simply connected total space whose quotient base is
not simply connected. These are proof-bearing examples rather than additional
corollaries, so each has its own obligation map.

The A-page `item_count` is 21 against the 60-item ceiling. No split and no
pruning are proposed.

## Findings for Step-3 Alpha

### F5-1 — approve the prerequisite correction (non-negotiable)

The scaffold names `sine-cosine-and-the-definition-of-pi`, but the exact
surjectivity and fibre theorem used by the dictionary is
`thm-sine-and-cosine-parametrize-the-unit-circle` on
`fundamental-trigonometric-identities`. Change the A-page `requires` edge to
that page. Declining this leaves a direct dependency outside the declared
prerequisite closure.

### F5-2 — approve the A-page quotient definition and agreement remark

The published occurrences of $\mathbb R/\mathbb Z$ are B-page leaves. Rebuild
the quotient circle on the A page from `def-quotient-topology` and place the
agreement remark immediately after it. Declining this either violates the
B-leaf rule or silently creates a second notion of the same quotient space.

### F5-3 — approve the A-spine promotion of the published B covering example

`ex-real-line-mod-integer-translations-is-a-covering` on
`covering-spaces-and-lifting-examples` already states that the quotient map is
a covering (and additionally computes its deck transformations). It is a
B-page leaf, and moving it to order 295 would create forward references from
its current same-page consumers. The requested covering landmark therefore
needs an explicitly approved A-spine promotion under the new id
`thm-real-line-covers-real-line-mod-integers`, with a Remarks agreement and no
B dependency. This is a deliberate exception to the ordinary semantic-reuse
rule, not an assertion that the prior example was missed. Declining the
promotion without approving another A-page carrier leaves path lifting
unavailable to every degree item.

### F5-4 — approve the decomposed degree pipeline

Keep homotopy invariance, descent to homotopy classes, the lift formulas,
degree laws, and equal-degree classification as separate items in their listed
order. Declining this decomposition recreates the known degree
well-definedness defect or hides substantive lift and endpoint claims inside
the isomorphism proof.

### F5-5 — approve the section argument for the self-map falsehood

The identity map is not a based loop, so loop-degree invariance alone does not
refute an arbitrary unbased nullhomotopy. Use the scaffolded reversed-homotopy
lifting argument to produce an impossible section of $p$. Declining this proof
route leaves an unbased-versus-based logical gap.

### F5-6 — approve the owner-gated un-deferral and alias

`items/rem-pi1-circle-is-z.md` is the existing deferred record for the exact
geometric result. The un-deferral ledger requires explicit owner approval for
its removal. On approval, remove that deferred item and its catalogue entry,
give `cor-geometric-unit-circle-has-fundamental-group-z` the aliases
`rem-pi1-circle-is-z` and `rem-fundamental-group-of-the-circle`, and complete
the required impact audit. If approval is declined, do not delete the deferred
record; the new proved item remains the mathematically correct target, but the
obsolete record will remain visible.

### F5-7 — approve narrow repairs of stale published scope denials

The following statements become false once HT-4 is published. They are not
dependencies and were not edited at Step 2. Apply the owner-delegated repair
protocol at Step 5 only if Alpha independently certifies the complete impact
queue.

In `items/ex-circle-as-r-mod-z.md`, replace this exact Statement text:

```text
So "the interval with its endpoints glued" and "the line modulo the integers"
name one space. This library does **not** identify either of them with a circle
in $\mathbb{R}^2$: parametrising the unit circle needs the trigonometric
functions, which are not available at this point in the reading order.
```

with:

```text
So "the interval with its endpoints glued" and "the line modulo the integers"
name one space. Their identification with the unit circle in $\mathbb R^2$ is
proved on `the-fundamental-group-of-the-circle`.
```

In the same file, replace this exact Remarks bullet:

```text
- **No circle appears.** Nothing above says that $T$ is the unit circle of
  $\mathbb{R}^2$, and nothing may: the map $t \mapsto (\cos 2\pi t, \sin 2\pi t)$
  needs the trigonometric functions, which are not available at this point in the
  reading order. The name "circle" is avoided in the statement for that reason.
```

with:

```text
- **Geometric identification.** The map
  $t\mapsto(\cos 2\pi t,\sin 2\pi t)$ identifies $T$ with the unit circle, as
  proved on `the-fundamental-group-of-the-circle`.
```

In `items/ex-torus-as-a-quotient-of-the-square.md`, replace this exact
Statement text:

```text
The
torus is not identified here with any subset of $\mathbb{R}^3$, and $T$ is not
identified with a circle in $\mathbb{R}^2$: both identifications need the
trigonometric functions, which are not available at this point in the reading
order ([[ex-circle-as-r-mod-z]]).
```

with:

```text
The torus is not identified here with any subset of $\mathbb R^3$. The factor
$T$ is identified with the unit circle on
`the-fundamental-group-of-the-circle` ([[ex-circle-as-r-mod-z]]).
```

Declining these repairs leaves published claims that become unambiguously
false when the new dictionary theorem is available.

## Forward references and cross-batch dependencies

No forward reference is kept. Every dependency is earlier on its own page or
published on a page of order below 295.

There is no incoming dependency on another frontier-15 batch. Expected
outgoing seams are:

- `the-seifert-van-kampen-theorem` may use
  `thm-fundamental-group-of-the-circle` and
  `cor-real-line-mod-integers-is-not-simply-connected`;
- `classification-of-covering-spaces` may use
  `thm-real-line-covers-real-line-mod-integers`,
  `def-standard-integer-loops-in-the-circle`, and
  `thm-fundamental-group-of-the-circle`.

The results $\pi_1(S^n)=1$ for $n\geq2$, the Seifert–van Kampen theorem, and
classification of covering spaces are excluded because they belong to the
declared pages `the-seifert-van-kampen-theorem` and
`classification-of-covering-spaces`.

## New-id and reuse report

Before accepting the list, I ran fixed-string searches across `items/` and
`research/plan-spec.json` for every proposed id and searched the published pool
by statement language. None of the following proposed ids exists there:

- `def-circle-as-real-line-mod-integers`
- `rem-circle-quotient-model-agrees-with-published-examples`
- `lem-open-quotient-arcs-in-real-line-mod-integers`
- `thm-real-line-covers-real-line-mod-integers`
- `prop-real-line-mod-integers-is-compact-and-path-connected`
- `prop-real-line-mod-integers-is-hausdorff`
- `def-standard-integer-loops-in-the-circle`
- `def-degree-of-a-circle-loop`
- `thm-degree-is-invariant-under-path-homotopy`
- `cor-degree-descends-to-circle-loop-classes`
- `prop-standard-circle-loops-have-their-integer-degrees`
- `lem-lifts-of-circle-loop-concatenation-and-reversal`
- `prop-degree-laws-for-circle-loops`
- `thm-degree-map-on-the-circle-is-a-homomorphism`
- `lem-circle-loops-of-equal-degree-are-path-homotopic`
- `thm-circle-loops-are-path-homotopic-iff-they-have-equal-degree`
- `cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero`
- `thm-fundamental-group-of-the-circle`
- `cor-real-line-mod-integers-is-not-simply-connected`
- `thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle`
- `cor-geometric-unit-circle-has-fundamental-group-z`
- `ex-a-paused-circle-loop-is-homotopic-to-the-standard-loop`
- `ex-trigonometric-circle-loops-have-their-integer-degrees`
- `cex-based-circle-loops-with-the-same-endpoints-need-not-be-path-homotopic`
- `fs-every-continuous-self-map-of-the-circle-is-nullhomotopic`
- `cex-unit-length-interval-need-not-embed-in-real-line-mod-integers`
- `ex-a-surjective-circle-loop-of-degree-zero`
- `ex-a-covering-quotient-of-a-simply-connected-space-need-not-be-simply-connected`

The search did find the deferred `rem-pi1-circle-is-z` and its alias
`rem-fundamental-group-of-the-circle`. They are not reused as the canonical id
because the un-deferral ledger explicitly requires a newly minted proved id;
they are the proposed aliases of
`cor-geometric-unit-circle-has-fundamental-group-z` after owner-approved
un-deferral. Semantic searches also found the published B items
`ex-circle-as-r-mod-z`, `ex-torus-as-a-quotient-of-the-square`,
`ex-real-line-mod-integer-translations-is-a-covering`,
`ex-the-unit-loop-in-real-line-mod-integers-is-essential`, and
`ex-power-maps-on-real-line-mod-integers-are-finite-sheeted-coverings`. Their
statements were opened and none is a dependency. The exact covering overlap is
reported separately as F5-3 rather than concealed by the fixed-string id
search.

## Canonical-coverage and web-research ledger

The complete heading-by-heading harvest is in
`research/frontier-15-batch-5.coverage.json`. The URLs below were opened and
their listed locators were read.

- H — `https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf`, Allen Hatcher,
  *Algebraic Topology*, Chapter 1 §1.1, printed pp. 29–33 from Theorem 1.7
  through Theorem 1.10. It supports standard integer loops, path- and
  homotopy-lift strategy, lifted-endpoint invariance, the straight-line
  homotopy of equal-endpoint lifts, and the fundamental-group computation. The
  immediately following fundamental-theorem-of-algebra, planar Brouwer, and
  dimension-two Borsuk–Ulam applications are harvested and deferred
  individually to `applications-of-the-fundamental-group`.
- M — `https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf`, J. Peter
  May, *A Concise Course in Algebraic Topology*, Chapter 1 §5, pp. 8–10. It
  supports the endpoint map, its well-definedness, the inverse maps between
  integer degree and loop classes, and the geometric circle result.
- W —
  `https://math.colorado.edu/~jonathan.wise/teaching/math6210-fall-2012/notes.pdf`,
  Jonathan Wise, Math 6210 Lecture Notes, Week 3 §§3.1 and 3.4, pp. 1–3. It
  supports the quotient universal property and the homeomorphism
  $\mathbb R/\mathbb Z\cong S^1$.
- D — `https://dlmf.nist.gov/4`, NIST Digital Library of Mathematical
  Functions, Chapter 4. It checks the trigonometric conventions used by the
  published period, derivative, and parametrisation items. Step 5 must place
  this exact URL, plus H/M/W as appropriate, in `sources.references` for every
  source-backed component.

Convention findings:

- H and M use the geometric or complex unit circle as the primary model; this
  page instead computes with $\mathbb R/\mathbb Z$ and transports the answer
  only after the dictionary theorem.
- Wise proves the induced quotient bijection is open. The scaffold instead
  uses the published compact-to-Hausdorff continuous-bijection criterion; the
  source's separate open-map lemma is therefore recorded as out of scope with
  a result-specific reason.
- The library defines $\alpha*\beta$ by traversing $\alpha$ first and $\beta$
  second. The concatenated-lift formula and addition order were checked against
  that convention.
- The standard loop is indexed by every integer, including zero and negative
  integers. No claim assumes a positive index.
- The printed path-lifting, homotopy-lifting, and lifted-endpoint corollary
  require a covering map and the specified initial lift. They do not require
  local path-connectedness or semilocal simple connectedness. Those hypotheses
  appear only in the published lifting criterion and are not invoked here.

## Expected component provenance

Codes H, M, W, and D refer to the exact URLs in the preceding ledger.
`literature-derived` means the claim or construction is a standard sourced
result; `ai-altered` means the local proof is an original adaptation to this
library's quotient model, dependency vocabulary, or proof granularity.

| Item | `provenance.statement` | `provenance.proof` | Rationale and Step-5 references |
|---|---|---|---|
| `def-circle-as-real-line-mod-integers` | `literature-derived` | `not-applicable` | W gives the quotient model; local basepoint and notation match the library. Cite W. |
| `rem-circle-quotient-model-agrees-with-published-examples` | `ai-altered` | `not-applicable` | Library-specific agreement record derived by comparing the new definition with the opened published examples; cite W for the underlying quotient model. |
| `lem-open-quotient-arcs-in-real-line-mod-integers` | `literature-derived` | `ai-altered` | H/M give local sheets and W gives quotient openness; local proof spells out saturation and inverse continuity. Cite H, M, W. |
| `thm-real-line-covers-real-line-mod-integers` | `literature-derived` | `ai-altered` | Standard real-line covering in H/M, adapted to the quotient-circle definition as the A-spine promotion of the covering clause in the opened B example `ex-real-line-mod-integer-translations-is-a-covering`. Cite H and M. |
| `prop-real-line-mod-integers-is-compact-and-path-connected` | `literature-derived` | `ai-altered` | Standard quotient-circle properties; local proof uses the integer-part lemma and published compactness machinery. Cite W. |
| `prop-real-line-mod-integers-is-hausdorff` | `literature-derived` | `ai-altered` | Standard property of the quotient circle; local proof separates representatives by their two circular gaps. Cite W. |
| `def-standard-integer-loops-in-the-circle` | `literature-derived` | `not-applicable` | H/M use the integer-indexed standard loops; rewritten in quotient notation. Cite H and M. |
| `def-degree-of-a-circle-loop` | `literature-derived` | `not-applicable` | H/M define the invariant by the endpoint of the lift from zero. Cite H and M. |
| `thm-degree-is-invariant-under-path-homotopy` | `literature-derived` | `ai-altered` | H/M prove endpoint invariance by homotopy lifting; local proof cites the published endpoint corollary. Cite H and M. |
| `cor-degree-descends-to-circle-loop-classes` | `literature-derived` | `ai-altered` | May's endpoint map is defined on homotopy classes; the local corollary isolates that well-definedness. Cite M. |
| `prop-standard-circle-loops-have-their-integer-degrees` | `literature-derived` | `ai-altered` | H/M identify the lift endpoint of the standard loop. Cite H and M. |
| `lem-lifts-of-circle-loop-concatenation-and-reversal` | `literature-derived` | `ai-altered` | The standard endpoint-map homomorphism proof in M is decomposed into explicit translate-and-paste formulas. Cite M. |
| `prop-degree-laws-for-circle-loops` | `literature-derived` | `ai-altered` | Standard consequences of those lift formulas, adapted to the library's concatenation convention. Cite M. |
| `thm-degree-map-on-the-circle-is-a-homomorphism` | `literature-derived` | `ai-altered` | May proves the endpoint correspondence is a homomorphism; the local proof separates well-definedness and cites the integer group. Cite M. |
| `lem-circle-loops-of-equal-degree-are-path-homotopic` | `literature-derived` | `ai-altered` | H/M use a straight-line homotopy between equal-endpoint lifts. Cite H and M. |
| `thm-circle-loops-are-path-homotopic-iff-they-have-equal-degree` | `literature-derived` | `ai-altered` | The two directions combine the standard H/M arguments. Cite H and M. |
| `cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero` | `literature-derived` | `ai-altered` | Immediate standard specialization of the H/M classification to the constant loop. Cite H and M. |
| `thm-fundamental-group-of-the-circle` | `literature-derived` | `ai-altered` | H Theorem 1.7 and May §5 give the computation; local proof packages the quotient-model degree map. Cite H and M. |
| `cor-real-line-mod-integers-is-not-simply-connected` | `literature-derived` | `ai-altered` | Standard consequence of H Theorem 1.7, proved locally with the degree-one witness already exhibited by the opened B example `ex-the-unit-loop-in-real-line-mod-integers-is-essential`. Cite H. |
| `thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle` | `literature-derived` | `ai-altered` | W Proposition 3.4 gives the dictionary; local proof substitutes compact-to-Hausdorff for W's open-map route and uses published trig facts checked against D. Cite W and D. |
| `cor-geometric-unit-circle-has-fundamental-group-z` | `literature-derived` | `ai-altered` | H/May state the geometric-circle result; local proof transports the quotient computation by functoriality. Cite H and M. |
| `cex-unit-length-interval-need-not-embed-in-real-line-mod-integers` | `ai-generated` | `ai-generated` | New checkable boundary witness for the strict interval-length hypothesis. Set `generation.role: counterexample`; Step 5 must independently verify the half-open saturation formula and the closed-endpoint collision. No source is claimed for the exact construction. |
| `ex-a-paused-circle-loop-is-homotopic-to-the-standard-loop` | `ai-generated` | `ai-generated` | New checkable piecewise witness. Set `generation.role: example`; before authoring, recompute continuity at $1/2$, endpoint values, degree, and the projected homotopy. |
| `ex-a-surjective-circle-loop-of-degree-zero` | `ai-generated` | `ai-generated` | New checkable out-and-back construction. Set `generation.role: example`; Step 5 must recompute the join value, both lift endpoints, surjectivity of the first half, and the zero-degree implication. No source is claimed for the exact construction. |
| `ex-trigonometric-circle-loops-have-their-integer-degrees` | `literature-derived` | `ai-altered` | H/M use the geometric integer loops; the proof transports the quotient computation through W's dictionary. Cite H, M, W. |
| `cex-based-circle-loops-with-the-same-endpoints-need-not-be-path-homotopic` | `literature-derived` | `ai-altered` | The constant loop and degree-one generator are present in H/M; the local proof states the endpoint contrast explicitly. Cite H and M. |
| `ex-a-covering-quotient-of-a-simply-connected-space-need-not-be-simply-connected` | `ai-altered` | `ai-altered` | H and M compute the real line and circle fundamental groups alongside the covering; the local statement recasts their standard contrast in the library's quotient-circle notation. Cite H and M. |
| `fs-every-continuous-self-map-of-the-circle-is-nullhomotopic` | `ai-altered` | `ai-altered` | The commissioned false claim is refuted by the standard identity witness; the section contradiction is a local lifting adaptation of H/M. Cite H and M. |

The paused-loop example, the unit-length interval counterexample, and the
surjective degree-zero example are the AI-generated Statements/Constructions.
Each is a B-page leaf and is not a dependency target. Their explicit formulas,
saturation calculation, joins, endpoints, injectivity or surjectivity, and
degree computations are the required truth-risk checks; no unresolved
counterexample-search concern remains. No AI-generated statement is
load-bearing.

## Published-dependency audit and closure

Every direct published dependency was opened from `items/`, its
`status: published` field was checked, and its actual Definition or Statement
was read for domain, quantifiers, hypotheses, conclusion, and direction. The
inventory has 38 external item ids, all component-provenance classified; there
is no legacy-unclassified dependency and therefore no legacy confidence route
to report.

The external dependencies, grouped only for audit readability, are:

- quotient and elementary algebra:
  `def-quotient-topology`, `thm-quotient-universal-property`, `def-integers`,
  `lem-integer-part`, and `thm-int-comm-ring`;
- elementary topology and continuity:
  `def-homeomorphism-and-open-maps`, `def-hausdorff-space`,
  `def-path-connected`, `def-simply-connected`,
  `def-subspace-topology-top`,
  `def-nullhomotopic-map-and-contractible-space`,
  `lem-homeomorphism-criteria`,
  `lem-continuity-is-local-and-pastes`,
  `thm-algebra-of-continuous-functions`,
  `thm-composition-respects-homotopy`, `thm-componentwise-limits-and-continuity`,
  `thm-heine-borel-rn`, `thm-compactness-agrees-with-metric-compactness`,
  `thm-compactness-under-continuous-maps`, `lem-metrics-on-rn`,
  `cor-metrizability-and-first-countability-are-hereditary`, and
  `thm-metric-hausdorff-separation`;
- paths, homotopies, covering spaces, and groups:
  `def-based-loops-and-fundamental-group`,
  `def-lift-of-a-map-path-and-homotopy`,
  `def-covering-map-and-evenly-covered-neighbourhoods`,
  `thm-path-lifting-for-covering-maps`,
  `thm-homotopy-lifting-for-covering-maps`,
  `cor-lifted-path-endpoints-depend-only-on-path-homotopy`,
  `lem-straight-line-homotopies-are-continuous`,
  `thm-convex-subsets-have-trivial-fundamental-group`,
  `thm-induced-fundamental-group-map-functoriality`,
  `def-group-homomorphism`, and `def-group-isomorphism-and-automorphism`;
- trigonometry:
  `thm-sine-and-cosine-derivatives`,
  `cor-differentiable-implies-continuous`,
  `def-pi-via-first-positive-cosine-zero`,
  `thm-sine-cosine-zero-sets-and-fundamental-period`, and
  `thm-sine-and-cosine-parametrize-the-unit-circle`.

The load-bearing lifting statements were checked particularly closely:

- path lifting assumes only a covering $p:E\to B$, a path in $B$, and a
  chosen point above its initial endpoint;
- homotopy lifting assumes only a covering, a homotopy $Y\times I\to B$, and
  a lift at time zero;
- the endpoint corollary applies to endpoint-fixed homotopic base paths whose
  lifts start at the same point;
- functoriality of the induced fundamental-group map applies to based
  continuous maps and gives identity and composition laws.

The exact trigonometric parametrisation statement is a bijection
$[0,2\pi)\to\{(x,y):x^2+y^2=1\}$, and the exact period theorem controls equality
of sine-cosine pairs by multiples of $2\pi$. These clauses are sufficient to
show that $t\mapsto(\cos2\pi t,\sin2\pi t)$ has precisely the integer-translation
fibres needed for quotient factorisation.

Every load-bearing dependency is earlier on its own page or is a published
item on a page of smaller order. There is no external fallback and no declared
or silent forward reference.

No load-bearing published claim or citation was found to be false. F5-7 concerns
stale scope-denial prose outside the dependency spine, not a mathematical
dependency defect.

## Proof-obligation and boundary pass

`research/frontier-15-batch-5.proof-contracts.json` is the detailed durable
map. Its scope is every proof-bearing scaffold item. Each planned numbered step
has one derivation entry with its input labels, every direct fact citation has
the source item, source section, exact clause, and uses, and every contract
disposes of `empty`, `zero`, `one`, `degenerate`, `endpoints`,
`nonempty-choice`, `iff-forward`, and `iff-reverse`.

The substantive obligations close as follows:

- Definitions: the relation $x\sim y\iff x-y\in\mathbb Z$ is checked to be
  reflexive, symmetric, and transitive from the embedded integer ring laws
  before the quotient is formed. The standard-loop definition checks
  continuity and both endpoints for zero, positive, and negative integers. The
  degree definition invokes unique path lifting from zero and proves that the
  terminal endpoint lies in the fibre $p^{-1}([0])=\mathbb Z$.
- Quotient arcs: the saturation identity is derived directly from the
  equivalence relation; openness uses `def-quotient-topology`; injectivity on a
  short interval uses `lem-integer-part`; inverse continuity uses locally
  chosen real intervals and `def-homeomorphism-and-open-maps`.
- Covering: $J=(x-1/3,x+1/3)$ is nonempty; its integer translates are
  pairwise disjoint; their union is exactly $p^{-1}(p[J])$; each restriction is
  a homeomorphism by the arc lemma. These discharge every clause of
  `def-covering-map-and-evenly-covered-neighbourhoods`.
- Compactness and path connectedness: integer part supplies a representative
  in $[0,1)$, so $p|_{[0,1]}$ is surjective; Heine–Borel and continuous-image
  compactness finish compactness. The affine path has the two required
  endpoints and is continuous by the published real continuity algebra.
- Hausdorffness: distinct canonical representatives have two strictly
  positive circular gaps; a radius below one third of their minimum exists;
  the resulting quotient arcs are open and disjoint by an explicit
  integer-translation contradiction.
- Degree: path lifting gives one lift from zero and the loop endpoint puts its
  terminal point in $p^{-1}([0])=\mathbb Z$. The endpoint-fixed homotopy
  corollary gives invariance, after which the descent corollary—not the bare
  definition—licenses the map on $\pi_1$.
- Standard loops: $t\mapsto nt$ is a lift from zero with endpoint $n$ for
  every integer $n$. The proof treats $n=0$, positive $n$, and negative $n$
  uniformly.
- Products and inverses: concatenate a lift of $\alpha$ with the integer
  translate of the lift of $\beta$, check their common join, paste on the two
  closed half-intervals, and invoke uniqueness. Reverse by
  $t\mapsto\widetilde\alpha(1-t)-m$. Endpoint evaluation yields addition,
  negation, and zero; the descended map plus `thm-int-comm-ring` yields a group
  homomorphism.
- Classification: equal degree means the lifted paths share both endpoints;
  their affine homotopy in $\mathbb R$ fixes both boundary edges and composes
  with $p$. The converse is degree invariance. Both implications are separate
  contract steps; the degree-zero corollary compares with $\omega_0$.
- Isomorphism: equal image implies equal loop class, and every integer $n$ is
  the image of $[\omega_n]$. The inverse is explicitly $n\mapsto[\omega_n]$.
  Non-simple-connectedness uses the path-connected proposition and the
  degree-one loop, so it does not silently assume only that the target group
  is nontrivial.
- Dictionary: published derivatives and continuity make the coordinate map
  continuous; the period and half-open parametrisation theorems give precisely
  the quotient fibres and surjectivity; the quotient universal property gives
  the induced continuous bijection. Compactness of the source and Hausdorffness
  of the unit circle via the Euclidean subspace metric turn it into a
  homeomorphism.
- Geometric fundamental group: functoriality makes the homeomorphism and its
  inverse induce inverse group maps; composing with degree transports the
  quotient result, including the images of every $\omega_n$.
- Unit-length interval boundary: floor representatives make
  $p|_{[0,1)}$ a continuous bijection; the saturation of
  $p[[0,1/2)]$ is not open at zero, so the restriction is not a homeomorphism.
  The closed restriction fails separately because $p(0)=p(1)$.
- Paused-loop example: the two formulas agree at $1/2$, the lift begins at
  zero and ends at one, and the affine homotopy fixes both endpoints before it
  is projected.
- Surjective degree-zero loop: the out-and-back formulas agree at $1/2$, the
  lift begins and ends at zero, and its first half reaches every quotient
  class. The zero-degree direction of the classification then gives a
  nullhomotopy without confusing degree zero with constancy.
- Trigonometric-loop example and endpoint counterexample: both are immediate
  transports or comparisons using the dictionary, standard-loop degree, and
  the zero-degree criterion; zero and negative indices remain included in the
  trigonometric family.
- Simply-connectedness boundary: the real line is nonempty and convex, hence
  simply connected, while its canonical quotient map is a covering onto
  $\mathbb R/\mathbb Z$, which is not simply connected.
- Self-map falsehood: reverse a hypothetical homotopy from the identity to a
  constant map and lift it from a constant lift. Its final edge is a section
  $s$. Then $s\circ\omega_1$ is a closed lift, while uniqueness identifies it
  with the translate $t\mapsto s([0])+t$, whose endpoints differ by one. This
  proves the contradiction without assuming unbased homotopies preserve loop
  degree.

No registered finite-smoke check models these topological continuum claims;
each contract therefore has an empty `finite_smoke` array rather than claiming
a bounded computation ran.

## Gate and consistency record

Commands actually run against the namespaced artifacts:

```text
coverage-checklist: pages_scanned=1; harvested_results=26; errors=0; warnings=0
content-policy: scoped_count=25; errors=0; warnings=0
prosecheck: files_checked=4; errors=0; warnings=0
splice-plan --dry-run: batch=5; pages_spliced=2; already_correct=0; item_count=25
git diff --check: clean
```

An independent in-memory consistency check found:

```text
proof_scope=21
contracts=21
citations=102
published_quote_substrings_checked=54
planned_quote_obligations=48
numbered_steps=61
undeclared_derivation_inputs=0
dependencies_without_citation_clauses=0
structural_errors=0
```

`node tools/proof-contract.mjs
research/frontier-15-batch-5.proof-contracts.json --strict` was also run. It
reported only `item-missing` for each scoped id, as expected before Step 5 has
created the item files: `errors=21; warnings=0; checked=0/21`. This is not
claimed as a pass. The 48 planned-source quote clauses are exact
authoring obligations and must be emitted verbatim in the corresponding
Definition or Statement before that gate can pass.

The authoritative `validate-plan.mjs` and `depsource.mjs` gates were not run
against a spliced `research/plan-spec.json`, because Step 2 is not authorised to
modify that file. The dry-run proves only that the batch file can be spliced;
the engine must run the authoritative gates after Step 4.

## Confidence and limits

Confidence is high in the mathematics, page order, source coverage, and direct
dependency closure. All proposed published dependencies were opened from disk;
all citations to existing items in the proof contract were checked as literal
substrings of their allowed source sections; and the H/M/W/D URLs were opened.

I did not read beyond the exact source locators recorded in the coverage file,
did not independently re-audit the full proofs of the published dependencies,
did not author any item, and did not run either authoritative post-splice gate.
The owner-gated un-deferral, published scope-denial repairs, planned-source
quote fidelity, and Alpha risk reviews remain open by design. No other
mathematical or dependency constraint is known to be open.

## Continuity checkpoint

Current substage: Step 2 complete, awaiting Step-3 Alpha adjudication and the
engine's Step-4 splice. Owned artifacts are:

- `research/frontier-15-batch-5.pages.json`
- `research/frontier-15-batch-5.notes.md`
- `research/frontier-15-batch-5.coverage.json`
- `research/frontier-15-batch-5.proof-contracts.json`

Completed checks: JSON parsing; duplicate-id search; published status,
statement, provenance, and direct-dependency inspection; canonical coverage;
manifest content policy; prose check; dry-run splice; exact published citation
substrings; proof-scope, citation, numbered-step, and eight-case boundary
structure; whitespace check. The strict proof-contract gate has only the
expected pre-authoring `item-missing` results.

Open decisions: Alpha must decide F5-1 through F5-7. Owner approval is required
before deleting the deferred `rem-pi1-circle-is-z` record. The exact next action
is for Step-3 Alpha to compare these artifacts with disk, approve or decline
each finding, and let `tools/splice-plan.mjs` write the accepted page objects at
Step 4. On return at Step 5, author in manifest order from the proof contracts,
keep the quotient computation trigonometry-free, emit every planned citation
clause exactly, apply only approved repairs, and rerun the complete authored
gate set.

## Step-3 fix pass

- **B5-1 — already correct.** Alpha repaired
  `fs-every-continuous-self-map-of-the-circle-is-nullhomotopic` in place; its
  manifest kind is now the legal `false-statement`, matching the `fs-` prefix.
- **B5-2 — applied.** Added
  `cex-unit-length-interval-need-not-embed-in-real-line-mod-integers` to the B
  page. Its half-open witness is a continuous bijection that is not open, and
  its closed witness is not injective. The item has a version-1 proof contract
  with explicit zero, one, and endpoint dispositions.
- **B5-3 — applied.** Added
  `ex-a-covering-quotient-of-a-simply-connected-space-need-not-be-simply-connected`.
  It cites the opened published convex-space theorem and the earlier A-page
  covering and non-simple-connectedness results; it states the mathematical
  boundary without an unstable claim about being the first published example.
- **B5-4 — applied.** Added `ex-a-surjective-circle-loop-of-degree-zero` with
  the out-and-back lift $u(t)=2t$ and $u(t)=2-2t$. Its contract separately
  checks pasting at $1/2$, both lift endpoints, surjectivity, nonconstancy,
  degree zero, and the zero-degree-to-nullhomotopic direction.
- **B5-5 — applied.** Extended Hatcher's locator through printed p. 33 and
  added individual deferred rows for Theorem 1.8 (fundamental theorem of
  algebra), Theorem 1.9 (planar Brouwer fixed point), and Theorem 1.10
  (dimension-two Borsuk–Ulam), each routed with a result-specific reason to
  `applications-of-the-fundamental-group`.

The new ids were checked verbatim against `items/` and
`research/plan-spec.json`; no collision was found. The newly load-bearing
published items `lem-homeomorphism-criteria` and
`thm-convex-subsets-have-trivial-fundamental-group` were opened in full, are
`status: published`, and have eligible `ai-altered` and `literature-derived`
statement provenance respectively. The already-used floor, quotient,
subspace, continuity-algebra, and pasting statements were reopened and their
exact clauses checked. Every published-source quote added to the contracts is
a literal substring of the named source section.

### Step-3 gate reruns

```text
coverage-checklist: pages_scanned=1; harvested_results=29; errors=0; warnings=0
content-policy --manifest-only: scoped_count=28; errors=0; warnings=0
validate-plan research/plan-spec.json: exit=0; current unspliced spec is acyclic and consistent; repository-wide redundant-prerequisite warnings remain visible
prosecheck --warnings: files_checked=4; errors=0; warnings=0
splice-plan --dry-run: batch=5; pages_spliced=2; already_correct=0; item_count=28
published quote substrings for the three new contracts: checked=10; missing=0
proof-contract --strict: expected pre-authoring item-missing only; errors=24; warnings=0; checked=0/24 — not claimed as a pass
git diff --check: clean
```

`source-fetch-check --stamp` was also attempted after the coverage edit. The
sandboxed Node process could not resolve any of the three academic hosts and
returned `ENOTFOUND` for Hatcher, May, and Wise, so no `fetch_verified` stamp
was written and this check is **not** claimed as passed. The same full PDF URLs
were retrievable in the web reader as complete documents, and the existing
liveness ledger records HTTP 200, but neither
substitutes for the required body hash. The engine must rerun
`source-fetch-check --stamp` in its network-capable environment before the
source-fetch gate can clear; fabricating stamps from header or search metadata
would be invalid.

## Continuity checkpoint — Step-3 fix complete

Current substage: all stable Batch-5 findings B5-1 through B5-5 are disposed on
disk, and the batch awaits Alpha's `3-recheck`. Owned artifact paths are:

- `research/frontier-15-batch-5.pages.json`
- `research/frontier-15-batch-5.notes.md`
- `research/frontier-15-batch-5.coverage.json`
- `research/frontier-15-batch-5.proof-contracts.json`

The page manifest now contains 21 A items and 7 B items. Proof scope and
contract count are both 24. The required fix-pass gates pass, the dry-run splice
accepts the complete manifest, and all ten newly added published citation
quotes match disk. The only open mechanical constraint is the missing
full-body fetch stamps caused by sandbox DNS failure. The exact next action is
for the network-capable engine to rerun
`node tools/source-fetch-check.mjs --coverage research/frontier-15-batch-5.coverage.json --stamp`,
then for Alpha to recheck B5-1 through B5-5 from these artifacts before the
mechanical Step-4 splice. At Step 5, author the three new B items from their
contracts and use `generation.role: counterexample` or `generation.role:
example` on the two new AI-generated constructions.

## Scaffold-fix round

- **B5-2 — pushed back as stale.** The requested
  `cex-unit-length-interval-need-not-embed-in-real-line-mod-integers` is already
  the first item on the B page. Its strategy contains both required witnesses:
  the continuous bijection $p|_{[0,1)}$ that is not open, and the failure of
  injectivity of $p|_{[0,1]}$. The item and its proof contract predate the
  closure receipt, and `research/frontier-15-alpha-b-recheck.md` independently
  re-derived and confirmed both arguments under B5-2. Adding a second item or
  changing the existing witness would duplicate the applied repair.

- **B5-3 — pushed back as stale.** The B page already contains
  `ex-a-covering-quotient-of-a-simply-connected-space-need-not-be-simply-connected`.
  Its dependencies are the earlier A-page definition, covering theorem and
  non-simple-connectedness corollary together with the published
  `thm-convex-subsets-have-trivial-fundamental-group`. Its strategy states the
  mathematical failure of preservation without the prohibited positional claim
  that this is the first published example. The group-b Alpha recheck confirmed
  this exact carrier and accepted that wording under B5-3.

- **B5-4 — pushed back as stale.** The B page already contains
  `ex-a-surjective-circle-loop-of-degree-zero` with the requested out-and-back
  lift $u(t)=2t$ on $[0,1/2]$ and $u(t)=2-2t$ on $[1/2,1]$. Its strategy checks
  the join, both endpoints, surjectivity, nonconstancy, degree zero and the
  zero-degree criterion. The group-b Alpha recheck recomputed these facts and
  confirmed the item under B5-4.

- **B5-5 — pushed back as stale.** Hatcher's locator in the stamped coverage
  ledger already extends through printed p. 33 and Theorem 1.10. Separate
  `deferred` rows account for Theorem 1.8 (the fundamental theorem of algebra),
  Theorem 1.9 (the planar Brouwer fixed-point theorem) and Theorem 1.10 (the
  dimension-two Borsuk--Ulam theorem), each with a result-specific reason naming
  `applications-of-the-fundamental-group`. The group-b Alpha recheck verified
  both the locator and the planned target under B5-5.

- **B5-6 — pushed back as non-actionable.** This closure row explicitly records
  adjudications and says no scaffold work is owed unless stated. The conditions
  are already reflected on disk: the A page requires
  `fundamental-trigonometric-identities`; the agreement remark names
  `subspaces-products-and-quotients-examples` and
  `covering-spaces-and-lifting-examples` in its strategy without a B-leaf
  dependency; the covering theorem claims no deck-transformation result; and
  `cor-geometric-unit-circle-has-fundamental-group-z` instructs the Step-5 author
  to mint no aliases. The declined published-item edits remain untouched. The
  prose gate's redundant-count warning in the agreement strategy was removed
  without changing the named-page agreement or its dependency rule.

- **B5-7 — pushed back as already repaired by Alpha.** The manifest still uses
  the legal kind `false-statement` for
  `fs-every-continuous-self-map-of-the-circle-is-nullhomotopic`. This round
  preserves that repair and does not restore the rejected `false_statement`
  spelling.

The closure receipt was written after the batch-5 artifacts and after the
group-b recheck that declared this pair ready for splice, but it repeats the
pre-fix B5-2--B5-5 descriptions verbatim. No page, coverage or proof-contract
mutation is therefore warranted in this round; the durable dispositions above
make the stale routing explicit for the next Alpha recheck.

### Scaffold-fix gate reruns

```text
coverage-checklist: exit 0; no errors or warnings
content-policy --manifest-only: exit 0; no errors or warnings
validate-plan research/plan-spec.json: exit 0; current unspliced spec is acyclic and consistent
splice-plan --dry-run: exit 0; batch manifest accepted
prosecheck --warnings: exit 0; no errors or warnings
git diff --check on batch-5 artifacts: clean
```

The plan result is explicitly for the current unspliced `plan-spec.json`; it is
not a claim that the batch manifest has already been spliced. Every coverage
source retains its full-body `fetch_verified` PDF stamp.

## Continuity checkpoint

- Current substage: Step-5 authoring is drafted; the phase-stratification repairs are applied, and proof-contract reconciliation is in progress.
- Owned artifacts: the 28 batch-5 item files, `library/topology/the-fundamental-group-of-the-circle.md`, `library/topology/the-fundamental-group-of-the-circle-examples.md`, and the namespaced batch-5 notes, coverage, and proof-contract files.
- Completed gates: the 28-item content-policy pass is clean; reflow has run; the batch-local precheck repairs have been applied and still need a focused confirmation run.
- Frozen-text state: no published item has been edited, the existing `rem-pi1-circle-is-z` remains untouched, and no alias is assigned to `cor-geometric-unit-circle-has-fundamental-group-z`.
- Open mathematical constraints: preserve the B-page leaf rule, keep the agreement remark's two required page ids in prose without a B-item dependency, align every direct citation excerpt and numbered-step input map, and record concrete boundary dispositions.
- Exact next action: rerun focused precheck on the batch items, reconcile the strict proof-contract errors against the final prose, add canonical coverage rows and the two page files, then run the full required gate sweep.

## Step-5 authoring

### Authored pages

- `library/topology/the-fundamental-group-of-the-circle.md` lists the A-page items in scaffold order and has the required two-paragraph summary.
- `library/topology/the-fundamental-group-of-the-circle-examples.md` lists the B-page examples in scaffold order and has no authored summary body.
- Both page files and every item remain `status: draft`; every item has `origin: session`. No published item was edited.

Source abbreviations below are H = Hatcher, *Algebraic Topology*, Chapter 1, Section 1.1; M = May, *A Concise Course in Algebraic Topology*, Chapter 1, Section 5; W = Wise, Math 6210 notes, Week 3; and D = NIST DLMF, Chapter 4. The full URLs and locators remain in item frontmatter and the stamped coverage ledger.

### Per-item result and component provenance

| Item | Precheck | Statement / proof provenance and rationale |
|---|---|---|
| `def-circle-as-real-line-mod-integers` | n/a | `literature-derived` / `not-applicable`. W supplies the quotient-circle model; the equivalence relation, fibres, topology, and basepoint are stated with their elementary well-definedness checks inline. |
| `rem-circle-quotient-model-agrees-with-published-examples` | n/a | `ai-altered` / `not-applicable`. W supports the quotient convention; the prose was adapted to name the two required page ids while making no B-item dependency. |
| `lem-open-quotient-arcs-in-real-line-mod-integers` | pass | `literature-derived` / `ai-altered`. H, M, and W supply the local-sheet picture; the proof was rebuilt from saturation, integer representatives, and relative neighbourhoods for every stated endpoint convention. |
| `thm-real-line-covers-real-line-mod-integers` | pass | `literature-derived` / `ai-altered`. H and M support the covering; the local proof uses explicit translated intervals and claims no deck-transformation result. |
| `prop-real-line-mod-integers-is-compact-and-path-connected` | pass | `literature-derived` / `ai-altered`. W supports the quotient-circle model; compactness is derived from the unit-interval image and path-connectedness from explicit affine paths. |
| `prop-real-line-mod-integers-is-hausdorff` | pass | `literature-derived` / `ai-altered`. W supports the model; the local proof separates fractional representatives using both the direct and wrap-around gaps. |
| `def-standard-integer-loops-in-the-circle` | n/a | `literature-derived` / `not-applicable`. H and M supply the integer loops; continuity, both endpoints, zero, and negative integers are checked in the definition. |
| `def-degree-of-a-circle-loop` | n/a | `literature-derived` / `not-applicable`. H and M define the invariant through the lifted endpoint; path-lift existence, uniqueness, and integrality are discharged inline. |
| `thm-degree-is-invariant-under-path-homotopy` | pass | `literature-derived` / `ai-altered`. H and M supply endpoint invariance; the local proof applies the published lifted-endpoint corollary to lifts beginning at zero. |
| `cor-degree-descends-to-circle-loop-classes` | pass | `literature-derived` / `ai-altered`. M supplies the endpoint function on loop classes; the local proof checks representative independence. |
| `prop-standard-circle-loops-have-their-integer-degrees` | pass | `literature-derived` / `ai-altered`. H and M supply the calculation; lift uniqueness identifies the defining lift and its endpoint. |
| `lem-lifts-of-circle-loop-concatenation-and-reversal` | pass | `literature-derived` / `ai-altered`. M supports the formulas; the proof pastes the translated second lift and separately checks the reversed lift. |
| `prop-degree-laws-for-circle-loops` | pass | `literature-derived` / `ai-altered`. M supports additivity; the local proof also derives reversal and constant-loop laws from the explicit lifts. |
| `thm-degree-map-on-the-circle-is-a-homomorphism` | pass | `literature-derived` / `ai-altered`. M supplies the homomorphism; the proof uses the library's loop-product convention and additive integer group. |
| `lem-circle-loops-of-equal-degree-are-path-homotopic` | pass | `literature-derived` / `ai-altered`. H and M supply the converse classification step; the proof projects an endpoint-fixed straight-line homotopy between lifts. |
| `thm-circle-loops-are-path-homotopic-iff-they-have-equal-degree` | pass | `literature-derived` / `ai-altered`. H and M support both directions; the proof keeps invariance and sufficiency as separate implications. |
| `cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero` | pass | `literature-derived` / `ai-altered`. H and M support the criterion; both directions compare with the explicitly constant loop `omega_0`. |
| `thm-fundamental-group-of-the-circle` | pass | `literature-derived` / `ai-altered`. H Theorem 1.7 and M supply the isomorphism; injectivity, surjectivity, and the explicit inverse are proved separately. |
| `cor-real-line-mod-integers-is-not-simply-connected` | pass | `literature-derived` / `ai-altered`. H supplies the nontriviality consequence; the degree-one loop witnesses failure of the trivial-group clause. |
| `thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle` | pass | `literature-derived` / `ai-altered`. W supplies the quotient dictionary and D supports the trigonometric conventions; the proof factors the periodic map and applies compact-to-Hausdorff. |
| `cor-geometric-unit-circle-has-fundamental-group-z` | pass | `literature-derived` / `ai-altered`. H and M supply the geometric calculation; functoriality transports the quotient result and identifies every integer loop. No alias was minted. |
| `cex-unit-length-interval-need-not-embed-in-real-line-mod-integers` | pass | `ai-generated` / `ai-generated`. The witness was locally constructed and checked against the exact A-page strict-bound claim; no external source is claimed. |
| `ex-a-paused-circle-loop-is-homotopic-to-the-standard-loop` | pass | `ai-generated` / `ai-generated`. The explicit paused lift and relative straight-line homotopy were locally constructed and checked; no external source is claimed. |
| `ex-a-surjective-circle-loop-of-degree-zero` | pass | `ai-generated` / `ai-generated`. The out-and-back lift was locally constructed and checked for continuity, surjectivity, nonconstancy, degree zero, and nullhomotopy; no external source is claimed. |
| `ex-trigonometric-circle-loops-have-their-integer-degrees` | pass | `literature-derived` / `ai-altered`. H, M, and W supply the loops and dictionary; the proof transports the already proved quotient degree. |
| `cex-based-circle-loops-with-the-same-endpoints-need-not-be-path-homotopic` | pass | `literature-derived` / `ai-altered`. H and M supply the distinct integer classes; the proof contrasts the constant and degree-one loops. |
| `ex-a-covering-quotient-of-a-simply-connected-space-need-not-be-simply-connected` | pass | `ai-altered` / `ai-altered`. H and M motivate the example; its preservation-failure formulation and local derivation were adapted to the available convexity and covering results. |
| `fs-every-continuous-self-map-of-the-circle-is-nullhomotopic` | pass | `ai-altered` / `ai-altered`. H and M motivate the false universal claim; the refutation was adapted to the unbased setting by deriving an impossible section from homotopy lifting. |

### Scaffold-change ledger

No title or mathematical statement was narrowed, expanded, renamed, merged, or dropped. The authored dependency lists differ from the scaffold only where the final prose genuinely requires it:

- `def-degree-of-a-circle-loop`: dropped `lem-integer-part`; the terminal lift lies in the already established fibre $p^{-1}([0])=\mathbb Z$, so floor is unused.
- `thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle`: added `lem-continuity-is-local-and-pastes`; its composites clause is cited directly for the trigonometric coordinate compositions.
- `cex-unit-length-interval-need-not-embed-in-real-line-mod-integers`: added `lem-open-quotient-arcs-in-real-line-mod-integers`; the counterexample explicitly identifies and refutes replacement of that lemma's strict bound.
- `fs-every-continuous-self-map-of-the-circle-is-nullhomotopic`: dropped `prop-standard-circle-loops-have-their-integer-degrees`; the section contradiction uses the explicit unit-loop lift and never invokes degree.

The coverage ledger now has a complete `canonical` row for every authored A- and B-page item. Every `included` row names an item present on disk.

### AI-generated construction checks

- `cex-unit-length-interval-need-not-embed-in-real-line-mod-integers`: checked the half-open restriction for continuity, bijectivity, failure of openness through the full saturation of $[0,1/2)$, and the separate closed-interval endpoint collision. The search covered both endpoint conventions used by the claim and found the stated witnesses valid.
- `ex-a-paused-circle-loop-is-homotopic-to-the-standard-loop`: checked both piece formulas, their midpoint agreement, the lift endpoints, degree, and the endpoint-fixed straight-line homotopy. No failure was found for the displayed construction.
- `ex-a-surjective-circle-loop-of-degree-zero`: checked the midpoint join, lift endpoints, every quotient class via its unique fractional representative, distinct projected values, and the degree-zero criterion. No failure was found for the displayed construction.

### Gate record

- `reflow.mts`: completed; every scoped item was unchanged on the final run.
- `precheck.mts`: exit 0; every proof-bearing item passed, with `24 checked, 0 failing`.
- `validate-plan.mjs research/plan-spec.json`: exit 0; the plan is acyclic with no unresolved ids, illegal B dependencies, or item-level forward references among pages with item lists.
- `content-policy.mjs research/frontier-15-batch-5.pages.json`: exit 0; `28 scoped item(s), 0 error(s), 0 warning(s)`.
- `proof-contract.mjs ... --strict`: exit 0; `24/24 item(s)` with no errors or warnings.
- `coverage-checklist.mjs`: exit 0; no errors or warnings.
- `prosecheck.mjs` on the scoped items and both page files: exit 0; no errors or warnings.
- `citecheck.mjs`: exit 0. Its heuristic warnings were all on items outside batch 5.
- `extcheck.mjs`: exit 0. No batch-5 item uses an external fallback.
- `depcheck.mjs`: exit 0 on the final run; all references resolve, with no cycles or draft items on published pages. Its informational cited-not-in-deps lines were outside batch 5.
- `fwdcheck.mjs`: exit 0 on the final run; every forward reference is declared and closed, and no cycle was introduced.
- Page-list synchronization, JSON parsing, trailing-whitespace scan, summary paragraph count, and the check for wikilinks inside math delimiters were clean.

### Escalations and confidence

There is no mathematical or scaffold blocker for this pair. No published dependency repair was needed, no B-page item is used outside its leaf, and the owner-declined published-item edits remain untouched. The required agreement remark names `subspaces-products-and-quotients-examples` and `covering-spaces-and-lifting-examples` only in prose.

Confidence is high in the stated mathematics, direct citation fidelity, endpoint and zero cases, and the quotient-to-geometric dictionary. The proofs were checked mechanically and against the persisted obligation maps, but no Step-6 independent reader or Alpha audit has occurred, no Step-7 judge was run, the page rendering was not visually inspected in a browser, and the stamped source PDFs were not fetched again during Step 5.
