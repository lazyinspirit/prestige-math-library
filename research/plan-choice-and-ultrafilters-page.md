# Page design: the minimal set theory for Tychonoff and the ultrafilter lemma

`library/foundations/choice-zorn-and-ultrafilters` (A)
`library/foundations/choice-zorn-and-ultrafilters-examples` (B)

## The design decision that makes it minimal: no ordinals

The obvious route to Zorn's lemma is transfinite recursion, which drags in
ordinals, transfinite induction, Hartogs numbers and replacement. **None of that
is needed.** The **Bourbaki-Witt fixed point theorem** is a CHOICE-FREE fixed
point theorem for progressive maps on chain-complete posets, and it is the engine
of the standard proof of AC => Zorn. Routing through it keeps this page
ordinal-free and therefore genuinely small.

Ordinals are needed only for the topology COUNTEREXAMPLES (omega_1, the long
line, the Tychonoff plank, the ordinal spaces). Those get a separate later page,
`ordinals-and-transfinite-recursion`, which nothing on the Tychonoff path
requires. See the deferred log.

Prerequisite: `construction-of-the-natural-numbers` (published) supplies ZFC,
the set-theoretic vocabulary, and induction. Nothing else.

## A page: 22 items

### Order-theoretic vocabulary (5)
- `def-partial-order` — reflexive, antisymmetric, transitive; strict form.
- `def-chain` — a totally ordered subset; the empty chain.
- `def-upper-bound` — upper bound, least upper bound.
- `def-maximal-element` — maximal versus greatest; the distinction is the single
  most common confusion and it is what Zorn actually delivers.
- `def-chain-complete-poset` — every chain (including the empty one) has a least
  upper bound. Required for Bourbaki-Witt.

### Choice (3)
- `def-choice-function` — f(S) in S for every S in the family.
- `def-axiom-of-choice` — every family of nonempty sets has a choice function;
  equivalently every product of nonempty sets is nonempty. Genuinely axiomatic,
  so exempt from the definition-justification rule.
- `lem-finite-choice` — a FINITE family always has a choice function, provable in
  ZF by induction. This is where "obvious" stops, and it is what makes Russell's
  socks intelligible.

### Zorn (5)
- `thm-bourbaki-witt` — **choice-free**: a progressive map (f(x) >= x) on a
  nonempty chain-complete poset has a fixed point. The proof builds the smallest
  "admissible" subset closed under f and under chain suprema, and shows it is a
  chain. This is the hardest item on the page and deserves several sub-lemmas:
  - `lem-admissible-set-exists`
  - `lem-admissible-is-chain`
- `thm-ac-implies-zorn` — given a choice function on the nonempty sets of strict
  upper bounds, define f(x) = x when x is maximal and f(x) = a chosen strict
  upper bound otherwise; f is progressive on the chain-complete poset of chains
  ordered by inclusion, so it has a fixed point, which is maximal.
- `thm-zorn` — Zorn's lemma, as the working statement.
- `thm-zorn-implies-ac` — order partial choice functions by extension; a maximal
  one has full domain.
- `cor-ac-iff-zorn` — the equivalence, which is what licenses using either.

### Filters and ultrafilters (6)
- `def-filter` — nonempty, upward closed, closed under finite intersections;
  proper means the empty set is not a member.
- `def-filter-base` — downward directed, no empty member.
- `lem-filter-base-generates` — the upward closure of a filter base is a filter.
- `def-finite-intersection-property`
- `lem-fip-generates-filter` — a family with the FIP generates a proper filter.
  This is the bridge to the compactness characterisation.
- `def-ultrafilter` — a maximal proper filter; principal versus free.

### The two headline theorems (3)
- `thm-ultrafilter-lemma` — every proper filter extends to an ultrafilter. Proof:
  Zorn on the poset of proper filters refining the given one, ordered by
  inclusion; the union of a chain of proper filters is a proper filter.
- `thm-ultrafilter-characterisation` — U is an ultrafilter iff for every subset A
  either A or its complement lies in U. Both directions.
- `lem-ultrafilter-prime` — if a union lies in an ultrafilter then one of the two
  sets does. This is the step Tychonoff's ultrafilter proof actually consumes.

### Scope remark (1)
- `rem-choice-strengths` — the exact bookkeeping, stated with references and
  explicitly NOT proved here, because the independence proofs need forcing:
  AC implies the ultrafilter lemma, strictly (Halpern-Levy 1971);
  **Tychonoff is equivalent to AC** (Kelley 1950);
  **Tychonoff for Hausdorff factors is equivalent to the ultrafilter lemma**
  (Los-Ryll-Nardzewski 1954, Rubin-Scott 1954);
  the ultrafilter lemma is equivalent to the Boolean prime ideal theorem;
  the Baire category theorem for complete metric spaces is equivalent to
  dependent choice (Blair 1977);
  the finite and the [0,1]-and-[a,b] cases of compactness need no choice at all.
  This remark is what lets every later page state its choice cost honestly.

  **Amended 2026-07-25 by the counterexample sweep** (see
  `notes-delta-counterexamples.md` §4), on three points:
  - **Kelley's proof needs a repair, and the folklore reason is wrong.** Kelley
    (Fund. Math. 37 (1950) 75-76) puts the cofinite topology on
    `Y_a = X_a u {Lambda}` and asserts `X_a` is closed in `Y_a`. That is false
    whenever `X_a` is infinite. The usual excuse — "his spaces were not T1" — is
    also wrong; they are T1. Schechter (Fund. Math. 189 (2006) 285-288) shows the
    cofinite specialisation gives only **BPI**. **Repair, still T1:** take
    `(X_a, cofinite) (+) {Lambda}` with `Lambda` **isolated**; then `Y_a` is
    compact T1, `X_a` is clopen, and Kelley's finite-intersection argument runs.
    So the honest statement is **"products of compact T1 spaces are compact"
    <=> AC**. Trap to avoid: products of spaces with *finite topologies* is
    <=> AC, while products of *finite spaces* is <=> BPI. `DEFERRED.md` §0
    already lists Kelley as in scope; author the repaired form.
  - **Do not upgrade "Hausdorff" to "Tychonoff"** in the Los-Ryll-Nardzewski
    equivalence. Over ZF a compact Hausdorff space is still normal but may fail
    complete regularity (Lauchli 1962/63). Their proof is choice-free in both
    directions. Also worth adding to the same list, since it is the same
    equivalence class: `{0,1}^I` compact, `[0,1]^I` compact, Stone
    representation, Banach-Alaoglu, the Alexander subbase lemma, and the
    compactness theorem of first-order logic. Note that **Alexander's lemma alone
    does not give Tychonoff** — the step that picks, for each `i`, a point of
    `X_i` missed by the `i`-th slice *is* AC.
  - **BCT is four principles, not one.** Blair 1977 covers only the complete
    metric case. Add: the **separable** complete metric case is **ZF**-provable;
    totally bounded complete and second countable complete are **<=> AC_omega**;
    and **compact Hausdorff** and **locally compact regular** are each
    **<=> DMC** (Fossy-Morillon 1998; Bacsich 1972), with **BPI not implying
    DMC**. While here, add the one most likely to be gotten wrong elsewhere in
    the library: **Urysohn's lemma is not a ZF theorem** (HR Form 78; DMC is
    optimal, Blass 1979), though **Urysohn's metrization theorem is entirely
    effective** and the metric case of the lemma is explicit.

### False statements (3, on the A page)
- `fs-zorn-provable-in-zf` — FALSE: Zorn's lemma is a theorem of ZF.
- `fs-maximal-is-greatest` — FALSE: a maximal element is a greatest element.
- `fs-every-ultrafilter-principal` — FALSE: every ultrafilter is principal.
  (Refuted from the ultrafilter lemma by extending the cofinite filter.)

## B page: 10 items

- `ex-finite-choice-by-induction` — the ZF proof for finite families.
- `ex-canonical-choice-on-naturals` — a family of nonempty subsets of N has the
  least-element choice function, so no choice is needed there.
- `ex-russells-socks` — pairs of shoes admit a definable choice ("take the left
  one"); pairs of socks do not. The clearest statement of what AC buys.
- `ex-principal-ultrafilter` — the sets containing a fixed point form an
  ultrafilter, and it is the only kind that can be written down.
- `ex-frechet-filter` — the cofinite filter on N is a proper filter and is not an
  ultrafilter; any ultrafilter extending it is free. Combined with
  `thm-ultrafilter-lemma` this gives a free ultrafilter on N.
- `ex-zorn-poset-of-chains` — the chain-complete poset used in the Zorn proof,
  worked out concretely.
- `cex-maximal-not-greatest` — the poset {a, b} with no relation: both elements
  are maximal, neither is greatest.
- `cex-zorn-hypothesis-fails` — the naturals under their usual order: every chain
  is a chain, the whole poset has no upper bound, and there is no maximal
  element. Shows the chain-upper-bound hypothesis is not decorative.
- `cex-union-of-filters-not-filter` — two filters whose union is not a filter, so
  the Zorn argument must use CHAINS, not arbitrary families.
- `cex-improper-filter` — dropping properness collapses the whole theory, since
  the power set is then the unique maximal filter.

## What is NOT on this page, deliberately

Ordinals, transfinite induction and recursion, cardinals, cardinal arithmetic,
Cantor-Schroder-Bernstein, the well-ordering theorem, Hausdorff's maximal
principle, Teichmuller-Tukey, Hartogs numbers, omega_1, the long line, and every
independence result. None is needed for Tychonoff or the ultrafilter lemma.

The well-ordering theorem and the other maximal principles are cheap once Zorn is
in hand (each is a short Zorn argument) and can be added later as a small
`equivalents-of-the-axiom-of-choice` page if wanted; they are not needed by
anything on the critical path.

## Where this page is consumed

- Compactness: `thm-ultrafilter-lemma` and `lem-ultrafilter-prime` give the
  one-line ultrafilter proof of **Tychonoff**; `lem-fip-generates-filter` gives
  the finite-intersection-property characterisation of compactness.
- Nets and filters: the whole filter vocabulary, plus Kelley's theorem that every
  net has a universal subnet (which is equivalent to the ultrafilter lemma).
- Separation and compactification: the Stone-Cech compactification, which needs
  only the ultrafilter lemma, not full AC.
- Metric spaces: `cor-ac-iff-zorn` is cited by the remark recording that
  A. H. Stone's theorem (every metric space is paracompact) needs AC.
