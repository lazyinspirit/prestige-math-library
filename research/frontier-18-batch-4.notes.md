# frontier-18 · batch-4 · Beta notes — Noetherian Rings and Hilbert Basis

Owner of this file: Beta-4. Pair: `noetherian-rings-and-hilbert-basis` (A, order
111.001) and `noetherian-rings-and-hilbert-basis-examples` (B, order 111.002),
category `commutative-algebra`. Design section: `research/plan-commutative-algebra-track.md`
§4 "CA-1" (L208–L295) and the §10.4 enrichment overlay (L3086–L3121).

---

## Continuity checkpoint

- **Substage:** steps 1–2 complete; artifacts written and self-checked.
- **Artifacts owned:** `research/frontier-18-batch-4.pages.json`,
  `research/frontier-18-batch-4.coverage.json`,
  `research/frontier-18-batch-4.proof-contracts.json`, this file. Nothing else
  written.
- **Gates actually run by me:** `coverage-checklist.mjs` (bare and
  `--require-destination`) — clean; `source-fetch-check.mjs --stamp` — all four
  sources stamped; `url-sweep.mjs --recover --fail-on-dead` — all live;
  `boundary-audit.mjs` — no template clusters, no contradicted rows;
  `prosecheck.mjs` on my own files. `validate-plan.mjs`, `depsource.mjs`,
  `content-policy.mjs`, `proof-contract.mjs --strict`, `finite-smoke.mjs` and
  `risk-report.mjs` **cannot** run yet and I did not claim otherwise: the first
  two need the spliced spec (step 4) and the last three read the authored item
  files, which do not exist until step 5. `risk-report.mjs` run now returns 45
  `item-missing` errors, which is the expected step-1 state.
- **Open constraints:** two `requires` edges beyond the spec (below, Finding 1);
  the formal-power-series deferral (Finding 2); intra-pair citation quotes in
  the proof contracts are owed at step 5.
- **Exact next action:** none for me until step 4 closes; then I return as the
  step-5 author for this batch and work from the contract file plus the
  authoring notes below.

---

## 1. Per-page item list

### A page `noetherian-rings-and-hilbert-basis` — 39 items, in reading order

| # | id | kind |
|---|---|---|
| 1 | `rem-noetherian-conventions-and-choice` | remark |
| 2 | `lem-generated-submodule-as-finite-linear-combinations` | lemma |
| 3 | `lem-finite-generating-subset-of-a-generating-set` | lemma |
| 4 | `thm-noetherian-ring-ideal-characterisations` | theorem |
| 5 | `thm-noetherian-induction` | theorem |
| 6 | `lem-retract-of-a-noetherian-ring-is-noetherian` | lemma |
| 7 | `lem-localised-ideal-generated-by-contracted-numerators` | lemma |
| 8 | `thm-noetherian-ring-quotients-and-localisations` | theorem |
| 9 | `cor-noetherian-from-finitely-many-noetherian-quotients` | corollary |
| 10 | `cor-product-of-two-noetherian-rings-is-noetherian` | corollary |
| 11 | `lem-leading-coefficient-ideals` | lemma |
| 12 | `lem-hilbert-basis-degree-cancellation` | lemma |
| 13 | `lem-polynomial-ideal-finite-generation` | lemma |
| 14 | `thm-hilbert-basis-theorem` | theorem |
| 15 | `cor-finite-variable-polynomial-ring-noetherian` | corollary |
| 16 | `cor-polynomial-ring-noetherian-implies-coefficient-ring-noetherian` | corollary |
| 17 | `def-finite-type-and-module-finite-algebras` | definition |
| 18 | `cor-finite-type-algebra-over-noetherian-ring-is-noetherian` | corollary |
| 19 | `cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian` | corollary |
| 20 | `def-finitely-presented-module-and-algebra` | definition |
| 21 | `thm-finite-generation-and-finite-presentation-over-a-noetherian-ring` | theorem |
| 22 | `cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented` | corollary |
| 23 | `lem-hom-module-over-a-commutative-ring` | lemma |
| 24 | `lem-hom-from-a-finite-free-module` | lemma |
| 25 | `cor-hom-of-finite-modules-is-finite-over-a-noetherian-ring` | corollary |
| 26 | `lem-transitivity-of-module-finiteness` | lemma |
| 27 | `thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian` | theorem |
| 28 | `lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite` | lemma |
| 29 | `lem-artin-tate-coefficient-subalgebra` | lemma |
| 30 | `lem-artin-tate-intermediate-ring-is-module-finite-over-the-coefficient-subalgebra` | lemma |
| 31 | `thm-artin-tate-lemma` | theorem |
| 32 | `cor-artin-tate-integral-form` | corollary |
| 33 | `def-invariant-subring-of-a-group-of-ring-automorphisms` | definition |
| 34 | `lem-orbit-polynomial-has-invariant-coefficients` | lemma |
| 35 | `thm-noether-finiteness-theorem-for-invariants` | theorem |
| 36 | `lem-maximal-non-finitely-generated-ideal` | lemma |
| 37 | `lem-maximal-non-finitely-generated-ideal-is-prime` | lemma |
| 38 | `thm-cohen-noetherian-criterion` | theorem |
| 39 | `rem-noetherian-hypotheses-do-not-descend-to-subrings` | remark |

Landmarks proposed: 4, 5, 14, 17, 18, 21, 27, 31, 35, 38.

### B page `noetherian-rings-and-hilbert-basis-examples` — 12 items, in reading order

| # | id | kind |
|---|---|---|
| 1 | `ex-noetherian-integers-and-fields` | example |
| 2 | `ex-noetherian-quotient-affine-algebra` | example |
| 3 | `ex-infinite-variable-polynomial-ring-is-not-noetherian` | example |
| 4 | `ex-non-noetherian-subalgebra-of-a-polynomial-ring` | example |
| 5 | `ex-non-noetherian-ring-with-a-strict-chain-of-principal-ideals` | example |
| 6 | `ex-hilbert-basis-leading-coefficient-reduction` | example |
| 7 | `ex-artin-tate-finite-intermediate-algebra` | example |
| 8 | `fs-noetherian-rings-have-a-uniform-bound-on-ideal-generators` | false-statement |
| 9 | `ex-finite-dimensional-algebra-over-a-field-is-noetherian` | example |
| 10 | `ex-symmetric-polynomials-as-a-noether-invariant-ring` | example |
| 11 | `ex-reynolds-operator-splits-the-invariant-inclusion` | example |
| 12 | `ex-hom-between-finite-modules-over-the-integers` | example |

---

## 2. Per-pair richness report

I performed both required passes on this pair and report the result of each
even where it found nothing.

**Decomposition pass — long proofs broken into focused lemmas.**

- *Hilbert basis theorem* (item 14). The proof is carried by three earlier
  lemmas, one per conceptual move: `lem-leading-coefficient-ideals` (the stage
  ideals exist and ascend, no Noetherian hypothesis), `lem-hilbert-basis-degree-cancellation`
  (one degree-lowering step, the only place the stage generators are used), and
  `lem-polynomial-ideal-finite-generation` (the well-founded induction on
  degree). The theorem itself is then two citations long. This matches the
  design's stated proof strategy and the route in Hochster Theorem 5.6, Totaro
  Theorem 8.3 and Milne Theorem 3.7.
- *Artin–Tate lemma* (item 31). Split into `lem-artin-tate-coefficient-subalgebra`
  (collect the finitely many structure coefficients and observe the algebra they
  generate is Noetherian) and `lem-artin-tate-intermediate-ring-is-module-finite-over-the-coefficient-subalgebra`
  (the degree induction that reduces an arbitrary element to an `A'`-combination
  of the module generators, then the submodule step). The theorem is the
  three-line assembly.
- *Cohen's criterion* (item 38). Split into `lem-maximal-non-finitely-generated-ideal`
  (the Zorn step, stated without any prime hypothesis) and
  `lem-maximal-non-finitely-generated-ideal-is-prime` (the colon-ideal argument).
  Separating them matters because the two steps have different choice costs and
  different reuse.
- *Noether's finiteness theorem* (item 35). Split into
  `def-invariant-subring-of-a-group-of-ring-automorphisms`,
  `lem-orbit-polynomial-has-invariant-coefficients` (the integrality input) and
  `cor-artin-tate-integral-form`.
- *Finite presentation* (item 21). The free-cover and kernel-finiteness moves are
  in one theorem rather than two: with the published
  `thm-finitely-generated-modules-over-noetherian-rings-are-noetherian` in hand
  the kernel step is one line, and a separate lemma for it would be exactly the
  routine microlemma the brief forbids. I declined the overlay's
  `lem-kernel-between-finite-modules-over-a-noetherian-ring-is-finite` for that
  reason (Finding 9).

**Corollary pass.** Added, each with a short honest proof and explicit
dependencies: `cor-polynomial-ring-noetherian-implies-coefficient-ring-noetherian`
(makes Hilbert basis an equivalence; Altman–Kleiman Exercise 16.8);
`cor-noetherian-from-finitely-many-noetherian-quotients` (Altman–Kleiman
Exercise 16.18); `cor-product-of-two-noetherian-rings-is-noetherian`;
`cor-hom-of-finite-modules-is-finite-over-a-noetherian-ring` (Altman–Kleiman
Exercise 16.20); `cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented`
(Milne Corollary 3.8); `cor-artin-tate-integral-form`. Added in the step-3 fix
pass on B4-1: `cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian`
(Hochster Corollary 5.9), two citations long from item 18 and the published
`cor-principal-ideal-domains-are-noetherian`.

**Second-proof pass.** Hochster gives two genuinely different proofs of the
Hilbert basis theorem, and the owner's 2026-08-20 rule welcomes a second route.
I did **not** take it, because Hochster's first proof needs a change of
variables making a chosen element monic in the last variable, and that
substitution lemma is scaffolded on `noether-normalisation-and-nullstellensatz`;
building it here would mint a second id for it. Recorded as a `deferred` harvest
row with that destination and offered to Alpha as an optional enrichment
(Finding 10).

**Ceiling.** The A page holds 39 items against the 60-item ceiling, so no split
is proposed. If Alpha reinstates the formal-power-series block (Finding 2) the
page would grow by roughly five items and still sit well below the ceiling.

---

## 3. Findings — one recommendation each, most severe first

### Finding 1 — two `requires` edges the plan does not have (approve or decline)

**What.** `research/plan-spec.json` gives this A page one prerequisite, the
placement anchor `modules-over-a-pid-and-canonical-forms-examples`. The design
§4 instead names `chain-conditions-and-semisimple-modules`,
`ideals-and-quotient-rings`, `polynomial-rings-and-roots` and
`the-field-of-fractions-and-localisation`.

**Verified from disk.** All four design prerequisites already lie in the
transitive closure of the spec's single anchor, so the spec edge is sufficient
and I kept it unchanged rather than settling the design-versus-spec question
inside this batch. The one page my items reach that the closure does **not**
contain is `symmetric-polynomials` (order 58).

**Proposal.** Add `symmetric-polynomials` to the A page's `requires`.
`def-symmetric-polynomial` already writes `R[x_1,...,x_n]^{Sym_n}` for the fixed
subset of the permutation action, which is exactly the `C^G` my
`def-invariant-subring-of-a-group-of-ring-automorphisms` introduces in general.
Under the seam rule a page that generalises a published construction must record
the agreement explicitly rather than redefine it silently, and recording it
requires citing the published definition. `splice-plan.mjs` will withhold this
edge for Alpha, which is the intended adjudication path.

**If declined.** Drop the citation and state the agreement in prose without a
dependency, or drop the agreement note entirely — the second option reproduces
the level-7 two-notions-of-open defect in miniature, so I recommend the first as
the fallback rather than the second.

### Finding 2 — the design assigns formal power series to this pair, and the reading order forbids it (approve the deferral)

**What.** The §10.4 overlay adds `thm-formal-power-series-hilbert-basis`,
`lem-power-series-initial-coefficient-ideals-stabilise`,
`lem-power-series-successive-elimination-converges-adically` and
`cor-finite-variable-formal-power-series-ring-noetherian` to this pair, plus two
B rows. Hochster Theorem 5.20 backs the statement.

**Verified from disk.** `def-formal-power-series-and-coefficient-extraction` and
the rest of the power series construction are **published**, on
`library/combinatorics/formal-power-series.md` at plan order **193**. This page
is at order **111.001**. Citing them is a load-bearing forward reference in
reading order; building a second power series ring here is a silent
re-definition. Note that neither gate would catch it: `validate-plan.mjs` skips
the order check for any id already present in `items/` (its `existing.has(d)`
short-circuit), and `depsource.mjs` classifies an authored item on a published
page as `published` regardless of order. This is a real blind spot and I flag it
independently of the disposition below.

**Proposal.** Defer the whole block, destination `owner-decision`, recorded in
the coverage file against Hochster §5.1 Theorem 5.20. The two remedies — moving
`formal-power-series` earlier in reading order, or giving `R[[x]]` a
commutative-algebra home after order 193 — are both owner decisions.

**If declined.** The only honest alternative is to build the power series ring a
second time on this page, which contradicts the seam rule and duplicates a
published construction.

### Finding 3 — the overlay's Cohen lemma carries a hypothesis its proof does not use (approve the correction)

**What.** §10.4 states `lem-cohen-criterion-maximal-bad-ideal` as: "If a ring has
a non-finitely-generated ideal, the ideals not finitely generated have a maximal
member **provided every prime ideal is finite**."

**Verified.** The Zorn argument in Altman–Kleiman (16.10) uses no hypothesis on
primes at all: a chain of non-finitely-generated ideals has a
non-finitely-generated union, and that is the whole of it. The prime hypothesis
belongs to the criterion, not to the existence of the maximal element, and
attaching it here would make the lemma unusable in the one place it is needed.

**Proposal.** State it as `lem-maximal-non-finitely-generated-ideal`: in any
commutative ring, if some ideal is not finitely generated then the set of
non-finitely-generated ideals has a maximal member, by Zorn's lemma.

**If declined.** The proof of Cohen's criterion becomes circular in appearance,
because the lemma would presuppose part of what the criterion assumes.

### Finding 4 — the overlay's leading-coefficient stage uses "degree at most n"; all four sources use "degree exactly n" (approve the change)

**What.** §4 states `lem-leading-coefficient-ideals` for "the leading
coefficients of its polynomials of degree at most (n)".

**Verified.** Milne Theorem 3.7, Totaro Theorem 8.3 and Hochster Theorem 5.6 all
define the stage by *exact* degree together with `0`. Both versions define the
same ideal, but with "at most n" the ideal property itself needs the
multiply-by-a-power-of-x lifting argument, whereas with "exactly n" the ideal
property is immediate and only the ascent needs it. The design mentions no such
argument.

**Proposal.** Define the stage by exact degree, adjoin `0` explicitly because the
zero polynomial has no degree under `def-polynomial-degree-leading-coefficient-and-monic`,
and index the chain from `n = 0`. Milne displays the chain from `a(1)`; that is a
1-indexing artefact and `a(0)`, the constants lying in the ideal, is a real stage.

**If declined.** The author must supply the missing lifting argument inside the
ideal-property proof, which is strictly more work for the same lemma.

### Finding 5 — three overlay items duplicate published statements (approve the removals)

Each was checked by opening the published file.

- `cor-surjective-endomorphism-of-a-noetherian-module-is-an-isomorphism` is
  `cor-noetherian-modules-are-hopfian`, published, whose proof already runs
  through the stabilising chain of kernels of iterates. The overlay's
  `lem-kernels-of-iterates-of-an-endomorphism-stabilise-noetherian` is that
  proof's own step and has no other consumer here.
- `cor-direct-summands-of-noetherian-modules-are-noetherian` is the "reflect"
  half of the published `cor-finite-direct-sums-preserve-chain-conditions`.
- The B row `ex-arbitrary-product-of-noetherian-rings-not-noetherian` is the
  published `ex-infinite-binary-product-ring-is-not-noetherian`.

**If declined.** Item ids are immutable on `main`, so minting these would leave
the library with two ids for one statement each.

### Finding 6 — the design's B row `ex-noetherian-subring-counterexample` duplicates a published false statement; I substituted a different witness (approve)

`fs-noetherian-rings-have-noetherian-subrings` is published and already uses the
fraction field of the infinite-variable polynomial ring as its witness. I
replaced the row with `ex-non-noetherian-subalgebra-of-a-polynomial-ring`, the
subalgebra `k + xk[x,y]` of Altman–Kleiman (16.1) and Milne Exercise 3.20, which
fails for a different reason and additionally witnesses that a subalgebra of an
algebra of finite type need not be of finite type. I also added Altman–Kleiman
(16.6) as `ex-non-noetherian-ring-with-a-strict-chain-of-principal-ideals`,
where the failure is a non-terminating factorisation rather than a single
non-finitely-generated ideal.

**Note for the judges.** `fs-noetherian-rings-have-noetherian-subrings` lives on
`chain-conditions-and-semisimple-modules-examples`, a B page, so no item of mine
may declare it as a dependency; `rem-noetherian-hypotheses-do-not-descend-to-subrings`
therefore names the companion examples page in prose and cites only items on its
own page.

### Finding 7 — the library has no ideal-level statement of the Noetherian condition, and no A-page identification of ideals with submodules of the regular module (approve the two new items)

**Verified.** `def-noetherian-ring` defines the condition through the regular
module; `thm-equivalent-characterizations-of-noetherian-modules` is stated for
modules. The bridge "left ideals are exactly the submodules of the regular
module" exists only as `ex-ideals-as-submodules-of-the-regular-module`, on the B
page `modules-and-module-homomorphisms-examples`, which `validate-plan.mjs`
forbids any other page from depending on (`b-leaf`).

**Proposal.** `thm-noetherian-ring-ideal-characterisations` does the
identification inline as a two-line unfolding of the two definitions and then
transports the published module theorem, carrying its dependent-choice flag. I
deliberately did **not** mint a second id for the identification itself, both
because it would duplicate the published example's statement and because a
two-line unfolding is the routine microlemma the brief warns against.

Related: `lem-generated-submodule-as-finite-linear-combinations` is genuinely
missing. The ideal analogue `thm-generated-ideal-description-in-a-commutative-ring`
is published, but nothing states the module version, and three items here need
it. Its Remark records the agreement with the published ideal description.

### Finding 8 — `Hom` has no module structure in the published library (approve two new lemmas)

`def-hom-groups-and-induced-hom-maps` gives `Hom_R(M,N)` only as an abelian
group, so "`Hom_R(M,N)` is finitely generated" is not yet a statement the library
can make. I added `lem-hom-module-over-a-commutative-ring` and
`lem-hom-from-a-finite-free-module`; both are standard, both are needed by
Altman–Kleiman Exercise 16.20, and `localisation-of-modules-and-support` will
need them too.

Likewise `def-finite-type-and-module-finite-algebras` and
`def-finitely-presented-module-and-algebra` are new: the library defines
`def-algebra-over-a-commutative-ring` but never "finitely generated as an
algebra", "module-finite" or "finitely presented". Totaro's definition after
Theorem 8.11 is the source for the first two and Milne §1 for the third. Every
later commutative-algebra pair consumes these.

### Finding 9 — four overlay rows declined as restatements or as belonging to the other proof route (approve)

- `lem-noetherian-acc-from-finite-generation` and
  `lem-noetherian-maximal-counterexample-principle` restate two of the three
  conditions in `thm-noetherian-ring-ideal-characterisations`;
  `cor-noetherian-induction-minimal-counterexample-form` is the contrapositive of
  `thm-noetherian-induction`. A restatement is not a second proof.
- `lem-union-of-an-ascending-chain-of-ideals` is a proof step of the published
  module theorem and of `lem-maximal-non-finitely-generated-ideal`; it is inline
  in the latter.
- `lem-bounded-degree-polynomials-form-a-finite-free-module` and
  `lem-hilbert-basis-low-degree-remainder-module` belong to the free-module route
  to Hilbert basis, not to the degree-reduction route the design's own proof
  strategy paragraph specifies; on that route they have no consumer.
- `cor-polynomial-ideal-has-a-finite-degree-reduction-system` is what
  `lem-polynomial-ideal-finite-generation` proves, restated; as worded it also
  edges toward a Gröbner-basis claim the library cannot support.
- `lem-quotient-of-a-noetherian-ring-ideal-lifting` is one line from the
  published `thm-correspondence-theorem-ideals` and is inline in
  `thm-noetherian-ring-quotients-and-localisations`.

**If declined.** Reinstating them costs page length and gives the judges pairs of
items with the same content, which reads as a duplication defect.

### Finding 10 — optional enrichment Alpha may want (decline is the default)

Hochster Theorem 5.5 is a second, non-standard proof of the Hilbert basis
theorem over a field. It is a genuinely different route and the owner's rule
welcomes it, but it needs the Noether-normalisation change of variables, which
`noether-normalisation-and-nullstellensatz` owns. I default to declining; if
Alpha wants it, the substitution lemma has to be pulled forward or cross-cited,
and that is a plan decision, not a scaffold one.

### Finding 11 — the design's H20 source URL is dead and I recovered it (informational, affects every commutative-algebra batch)

`https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf`, recorded in §10.1,
now redirects to `https://sites.lsa.umich.edu/hochster/615W22/614Lx.pdf` and
answers **404**. Under the recover-before-replace rule I queried the Wayback
index and recovered the full 188-page document at
`http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf`,
which matches the design's stated page count. My coverage file records the
snapshot in `url` and the dead link in `original_url`, and
`source-fetch-check.mjs --stamp` verified it. Every other commutative-algebra
batch that cites H20 should do the same rather than re-sourcing.

### Finding 12 — locator drift in the design's primary-backing line (informational)

Altman–Kleiman §16 runs to book p. 100, not p. 107; pp. 101–107 are §17,
Associated Primes. Milne §3 runs to p. 13; p. 14 begins §4. My coverage file
records the ranges I actually read.

---

## 4. Forward references kept

**None.** No item on either page depends on an item whose home page has an order
greater than or equal to its own. The one place the design asked for a forward
reference in reading order — the formal power series block — is deferred instead,
under Finding 2. `depsource.mjs` should therefore report zero `planned-later` and
zero `unresolved` rows for this batch; the engine runs it, and I did not.

---

## 5. New ids proposed, and the check that they do not exist

All 51 ids on the two pages are new. The check I ran, from the repo root, over
`items/` and `research/plan-spec.json` together:

```
node -e "const fs=require('fs');const pages=require('./research/frontier-18-batch-4.pages.json');
const spec=require('./research/plan-spec.json');const planned=new Set();
for(const p of spec.pages)for(const it of (p.items||[]))planned.add(it.id);
const disk=new Set(fs.readdirSync('items').filter(f=>f.endsWith('.md')).map(f=>f.slice(0,-3)));
for(const p of pages)for(const it of p.items) if(disk.has(it.id)||planned.has(it.id)) console.log('CLASH',it.id);"
```

It printed nothing: no id clash on disk or in the plan.

Statement-level duplicate probes I also ran, and what they found:

- `grep -rli "orbit polynomial" items/` → `thm-finite-galois-extension-characterizations`
  (A page `the-galois-correspondence`, order 100). Its proof of "condition 4
  implies condition 1" builds the orbit polynomial for a finite group of field
  automorphisms, over the orbit rather than over the group, and uses
  separability. It is a proof step there and no published item states it.
  `lem-orbit-polynomial-has-invariant-coefficients` is the reusable form for an
  arbitrary commutative ring, with the product over all of the group so that
  repeated factors are tolerated. Not a duplicate id, and the judges should not
  read it as one.
- `grep -rli "leading coefficient" items/ | xargs grep -li ideal` →
  `cex-the-ideal-x-y-in-a-bivariate-polynomial-ring-is-not-principal`, on the B
  page `polynomial-rings-and-roots-examples`. It refutes "every ideal of `F[x,y]`
  is principal", which is the `n = 1` instance of the refutation carried by
  `fs-noetherian-rings-have-a-uniform-bound-on-ideal-generators`. Different
  claims — principality versus a uniform generator bound — and the published one
  is on a B page and so not citable from here in any case.
- `grep -rli "Artin.Tate\|Noetherian induction\|finitely presented module\|invariant subring" items/`
  found nothing relevant.

---

## 6. Cross-batch dependencies

- **From other frontier-18 batches: none.** Every load-bearing dependency of this
  pair is either an earlier item on the pair or a published item on disk. No
  other batch of this run touches `commutative-algebra`; batches 1, 2, 3, 5–10
  cover number theory, group theory, fields, combinatorics, analysis, complex
  analysis and category theory at orders that this pair does not read.
- **Owed to later commutative-algebra pairs (not this run).**
  `def-finite-type-and-module-finite-algebras`,
  `def-finitely-presented-module-and-algebra`,
  `lem-hom-module-over-a-commutative-ring`, `lem-hom-from-a-finite-free-module`,
  `lem-transitivity-of-module-finiteness`,
  `lem-generated-submodule-as-finite-linear-combinations` and
  `thm-noetherian-ring-ideal-characterisations` are consumed by CA-2 onwards; the
  design's later sections assume these exist and CA-1 is where they are built.
- **Informational for the whole track:** the H20 URL recovery (Finding 11) and
  the plan-order conflict for formal power series (Finding 2), which also affects
  CA-13 and CA-14 if they intend to cite `formal-power-series`.

---

## 7. Confidence

**High confidence.** The dependency graph: every published dependency was opened
from disk and its `status: published` read, and I re-checked mechanically that no
item depends on a later-ordered page, on a B page other than its own, or on an
unpublished id. The Hilbert basis route, Cohen's criterion, Artin–Tate and
Noether's finiteness theorem: each statement and each proof skeleton is backed by
at least two of the four treatments I read in full.

**Moderate confidence.** The exact wording of `lem-artin-tate-intermediate-ring-is-module-finite-over-the-coefficient-subalgebra`.
Altman–Kleiman states the reduction as a single substitution; I have written it as
an induction on total degree because a single substitution does not obviously
close, and I have not seen that induction written out in a source.

**What I did NOT verify.**

- I did not run `validate-plan.mjs`, `depsource.mjs`, `content-policy.mjs`,
  `proof-contract.mjs`, `finite-smoke.mjs` or `risk-report.mjs`. The first two
  need the spliced spec; the rest read authored item files that do not exist yet.
  My predictions are stated in §8 below and are predictions, not results.
- I did not verify that `modules-over-a-pid-and-canonical-forms` will be
  published before this page is. It is a draft page at order 110 and this pair's
  spec anchor points at its B companion. No item of mine cites any item on it, so
  nothing here breaks if it stays draft, but the `requires` edge points at a
  draft page and Alpha may want to record that.
- I did not attempt a counterexample search for the two AI-generated example
  constructions listed in §10; that obligation is recorded there and is owed at
  step 5.
- I did not read Hochster Chapters 1–4 or 6–13, Milne §§4–24, Altman–Kleiman
  §§1–15 or 17–26, or Totaro §§1–7 or 9–15. My coverage file claims only the
  ranges I read.

---

## 8. Web research ledger and dependency-closure statement

Four independent treatments, all fetched in full in this dispatch and stamped by
`source-fetch-check.mjs`. Full heading harvests with dispositions are in
`research/frontier-18-batch-4.coverage.json`.

| key | source | kind | range read | what it backs here |
|---|---|---|---|---|
| AK | Altman & Kleiman, *A Term of Commutative Algebra*, 13th ed., <https://web.mit.edu/18.705/www/13Ed.pdf> | textbook | §16, pp. 96–100, (16.1)–(16.30) | the ideal-level characterisations, quotients and localisations, Cohen's criterion, the Artin–Tate lemma, Noether on invariants, finite presentation, the `Hom` finiteness exercise, the retraction exercise, and both non-Noetherian witnesses |
| Milne | Milne, *A Primer of Commutative Algebra*, v4.03, <https://www.jmilne.org/math/xnotes/CA.pdf> | lecture-notes | §3, pp. 9–13, 3.1–3.20 | the three equivalent conditions with the dependent-choice attribution, the leading-coefficient proof of Hilbert basis, finite presentation of finite-type algebras, the finite-generating-subset lemma, the no-uniform-bound aside, and the `k + k[X,Y]X` exercise |
| TN | Totaro (notes by Norwood), *Commutative Algebra*, Cambridge Part III 2011, <https://pi.math.cornell.edu/~zbnorwood/partiii/files/commalgnotes.pdf> | lecture-notes | §8 and §8.1, pp. 30–35, 8.1–8.11 | the degree-reduction Hilbert basis proof with the stage ideals indexed from zero, the localisation lemma, the field and integer examples, and the finite-versus-finite-type definitions |
| H20 | Hochster, *Introduction to Commutative Algebra*, Michigan Math 614 (2020), Wayback snapshot of <https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf> | lecture-notes | Ch. 5, pp. 71–92, 5.1–5.20 | the intermediate-ring clause of the module-finite theorem, Noether's theorem stated over a Noetherian base rather than a field, the split-inclusion proposition, Noetherian induction as a named method, and the Reynolds operator |

**Convention disagreements found, and what I adopted.**

1. *Choice strength of ACC implies the maximal condition.* Altman–Kleiman (16.4)
   attributes it to the **axiom of countable choice**; Milne 3.1 attributes it to
   **dependent choice** and footnotes the distinction; Hochster 5.1's preamble
   says only "we need to make countably many choices"; Totaro 8.1 makes the
   choices silently. **Adopted:** dependent choice, because that is what the
   published `thm-equivalent-characterizations-of-noetherian-modules` states and
   this page transports that theorem rather than reproving it. The two axioms are
   not the same and the published item's attribution wins inside the library.
2. *Noetherian ring, ideal-level versus module-level.* Altman–Kleiman (16.1) and
   Milne 3.1 define it by "every ideal is finitely generated"; Totaro 8.1 defines
   it by the ascending chain condition; the published `def-noetherian-ring`
   defines it through the regular module. **Adopted:** the published definition,
   with `thm-noetherian-ring-ideal-characterisations` supplying all three
   ideal-level forms so that nothing downstream has to unfold the regular module
   again.
3. *"Finite" versus "module-finite" versus "of finite type".* Totaro and Milne
   both use "finite algebra" for module-finite and "of finite type" for
   algebra-finite; Altman–Kleiman writes "module finite" and "algebra finite".
   **Adopted:** define both names in one item and use "module-finite" and "of
   finite type" in prose, recording "finite algebra" as the synonym.
4. *Noether's finiteness theorem over a field or over a Noetherian base.*
   Altman–Kleiman (16.22) states it for a Noetherian base ring; Hochster 5.8
   states it for a Noetherian base and remarks that Emmy Noether proved the field
   case. **Adopted:** the Noetherian-base form, which is what both sources prove.
5. *Which Hilbert basis proof.* Altman–Kleiman (16.11) argues by contradiction
   from a minimal-degree choice with a single ideal `b` of leading coefficients;
   Milne 3.7 compares an ideal with a subideal having equal stages; Totaro 8.3 and
   Hochster 5.6 run the degree-reduction induction. **Adopted:** the
   degree-reduction route, which is the one the design's proof-strategy paragraph
   specifies and the only one of the three that yields the cancellation step as a
   separately checkable lemma.

**Dependency-closure statement.** Every published item proposed as a dependency
was opened from disk and its `status: published`, exact Definition or Statement,
domain, quantifiers, hypotheses and direction were read before it was listed.
Every load-bearing dependency of every item on this pair is either an earlier
item on the same page or a published item whose home page is strictly earlier in
plan order and lies inside the transitive closure of this page's declared
prerequisites. **The single exception is the `symmetric-polynomials` edge in
Finding 1**, which is why that finding exists.

**Legacy-unclassified dependencies.** One dependency has no component
`provenance` and no legacy `authorship` field: `def-field`, which lives on
`library/real-analysis/foundations-of-the-real-numbers.md` and is not listed as an
item of any page in `research/plan-spec.json`. Confidence route:
**established-from-knowledge** — the definition of a field as a commutative ring
in which every nonzero element is invertible is standard, and I read the item's
text and confirmed it says exactly that. It is used only by
`ex-noetherian-integers-and-fields`, where the whole content is that a field has
exactly two ideals. No other dependency of this pair is legacy-unclassified: every
other one carries `provenance`, and none carries `provenance.statement:
ai-generated`, which I checked mechanically across the full dependency list.

**No published dependency of this pair carries a load-bearing falsehood.** I found
nothing that would trigger the obvious-published-dependency repair protocol.

**Predicted gate results, stated as predictions.** `validate-plan.mjs` should pass
after splice except for the `requires` edge in Finding 1, which
`splice-plan.mjs` will withhold for Alpha by design. `depsource.mjs` should report
zero `unresolved` and zero `planned-later`. `content-policy.mjs --manifest-only`
should pass: one pair, no repeated id, no applied canonical embedding anywhere in
the manifest. The engine runs all of these; a claim that a gate would pass is not
a gate passing.

---

## 9. Applyable amendments to the prose scaffold

Alpha applies these; my write boundary is the batch artifacts. File in every case
is `research/plan-commutative-algebra-track.md`.

**A9.1 — §4 CA-1, "Primary backing" (L219).**

Exact old text:

```
- **Primary backing:** Altman--Kleiman §16, pp. 96--107, especially (16.1)--
```

Exact new text:

```
- **Primary backing:** Altman--Kleiman §16, pp. 96--100, especially (16.1)--
```

Reason: §16 ends at book p. 100; pp. 101–107 are §17. Same correction applies at
L1747, `#### §16, chain conditions, (16.1)--(16.30), pp. 96--107`, which should
read `pp. 96--100`.

**A9.2 — §4 CA-1, `lem-leading-coefficient-ideals` row (L231).**

Exact old text:

```
| `lem-leading-coefficient-ideals` | `lem` | For an ideal (I\subseteq R[x]), the leading coefficients of its polynomials of degree at most (n) form an ascending chain of ideals whose union is the ideal of all leading coefficients. | L/A; proof component of Altman--Kleiman (16.12) and Milne Thm. 3.7. |
```

Exact new text:

```
| `lem-leading-coefficient-ideals` | `lem` | For an ideal (I\subseteq R[x]) and (n\in\mathbb N), the leading coefficients of the elements of (I) of degree exactly (n), together with (0), form an ideal of (R), and these ideals ascend with (n). The chain is indexed from (n=0). | L/A; Milne Thm. 3.7, Totaro Thm. 8.3 and Hochster Thm. 5.6 all use the exact-degree stage; the zero polynomial has no degree, so (0) is adjoined explicitly. |
```

Reason: Finding 4.

**A9.3 — §4 CA-1, the Hopfian row (L243).** Delete the row

```
| `cor-surjective-endomorphism-of-a-noetherian-module-is-an-isomorphism` | `cor` | Every surjective endomorphism of a Noetherian module is injective. | L/A; Stacks Lemma 10.31.10, using stabilisation of kernels. |
```

Reason: `cor-noetherian-modules-are-hopfian` is published with that exact
statement. Finding 5.

**A9.4 — §10.4 CA-1, the Cohen maximal-ideal row (L3108).**

Exact old text:

```
| A | `lem-cohen-criterion-maximal-bad-ideal` | `lem` | If a ring has a non-finitely-generated ideal, the ideals not finitely generated have a maximal member provided every prime ideal is finite. |
```

Exact new text:

```
| A | `lem-maximal-non-finitely-generated-ideal` | `lem` | In any commutative ring, if some ideal is not finitely generated then the set of non-finitely-generated ideals, ordered by inclusion, has a maximal member. No hypothesis on prime ideals is used. |
```

Reason: Finding 3. The rest of that row's provenance cell is unchanged.

**A9.5 — §10.1, the H20 source row (L2802).** Replace the link target
`https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf` with
`http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf`
and keep the original as a parenthetical dead link.

Reason: Finding 11. This affects every pair in the track that cites H20, not only
CA-1, so it belongs in §10.1 rather than in a pair section.

**A9.6 — §10.4 CA-1, the formal-power-series rows.** Mark
`thm-formal-power-series-hilbert-basis`,
`lem-power-series-initial-coefficient-ideals-stabilise`,
`lem-power-series-successive-elimination-converges-adically`,
`cor-finite-variable-formal-power-series-ring-noetherian` and the two B rows
`ex-formal-power-series-hilbert-reduction` and
`ex-infinite-variable-formal-power-series-ring-not-noetherian` as **deferred,
owner decision pending**, with the reason recorded in Finding 2.

---

## 10. Component provenance for every planned mathematical item

Values are `provenance.statement` / `provenance.proof`. `L` is
`literature-derived`, `A` is `ai-altered`, `G` is `ai-generated`, `NA` is
`not-applicable`. The source column names the treatment whose exact hypotheses
and conclusion the statement comes from; the rationale explains any alteration.
Every `L` or `A` component named here needs a URL in `sources.references` at step
5, and the URL is the one recorded for that key in §8.

### A page

| id | prov | source and rationale |
|---|---|---|
| `rem-noetherian-conventions-and-choice` | A / NA | Milne §3 footnote 7 and Altman–Kleiman (16.4) for the choice attributions; the collection of conventions is assembled for this library, so the statement component is altered rather than derived. Remark, no proof component. |
| `lem-generated-submodule-as-finite-linear-combinations` | L / A | Standard, stated as the module analogue of the published `thm-generated-ideal-description-in-a-commutative-ring`; proof rewritten to cite the published one-step submodule criterion. |
| `lem-finite-generating-subset-of-a-generating-set` | L / L | Milne Lemma 3.15 and Altman–Kleiman Exercise 16.2; proof follows Milne. |
| `thm-noetherian-ring-ideal-characterisations` | L / A | Altman–Kleiman (16.3)–(16.5), Milne 3.1, Totaro 8.1. Proof altered: it transports the published module theorem through the regular-module identification instead of reproving the cycle. |
| `thm-noetherian-induction` | L / A | Hochster §2.2, which names the method; Hochster states it for modules by passing to a maximal counterexample quotient, and the ideal form here is the same argument run on ideals with the maximal condition cited directly. |
| `lem-retract-of-a-noetherian-ring-is-noetherian` | L / L | Hochster Proposition 5.11(a),(c) and Altman–Kleiman Exercise 16.9; proof follows Hochster's (a). |
| `lem-localised-ideal-generated-by-contracted-numerators` | L / A | Totaro Lemma 8.5 and Altman–Kleiman (16.7); proof altered to route through the published `thm-ideal-correspondence-for-localisation` rather than to re-derive the correspondence. |
| `thm-noetherian-ring-quotients-and-localisations` | L / A | Altman–Kleiman (16.7), Milne after 3.1, Totaro 8.2 and 8.5, Hochster 5.10; proof altered to cite the published correspondence theorems. |
| `cor-noetherian-from-finitely-many-noetherian-quotients` | L / A | Altman–Kleiman Exercise 16.18; proof written out, since the source states it as an exercise. |
| `cor-product-of-two-noetherian-rings-is-noetherian` | L / A | Milne §2's description of the ideals of a product together with Altman–Kleiman Exercise 16.18; the derivation from the exercise is this library's. |
| `lem-leading-coefficient-ideals` | L / L | Hochster Theorem 5.6's construction, Totaro Theorem 8.3, Milne Theorem 3.7; the statement is exactly their `I_t`. |
| `lem-hilbert-basis-degree-cancellation` | L / A | The cancellation step of Hochster 5.6 and Totaro 8.3, isolated as a statement; the isolation and the degree-zero case are this library's. |
| `lem-polynomial-ideal-finite-generation` | L / A | Hochster 5.6 and Totaro 8.3; the induction is theirs, the split at the cancellation step is this library's. |
| `thm-hilbert-basis-theorem` | L / A | Altman–Kleiman (16.11), Milne Thm. 3.7, Totaro Thm. 8.3, Hochster Thm. 5.6. |
| `cor-finite-variable-polynomial-ring-noetherian` | L / L | Totaro Corollary 8.4's induction; the base case at zero variables is made explicit from the published iterative definition. |
| `cor-polynomial-ring-noetherian-implies-coefficient-ring-noetherian` | L / A | Altman–Kleiman Exercise 16.8; proof supplied, since the source poses it. |
| `def-finite-type-and-module-finite-algebras` | L / NA | Totaro's definition after Theorem 8.11 and Milne §1. |
| `cor-finite-type-algebra-over-noetherian-ring-is-noetherian` | L / L | Altman–Kleiman (16.12), Milne Thm. 3.7, Totaro Cor. 8.4, Hochster Cor. 5.7. |
| `def-finitely-presented-module-and-algebra` | L / NA | Milne §1 for the algebra case, Altman–Kleiman (16.19) for the module case. |
| `thm-finite-generation-and-finite-presentation-over-a-noetherian-ring` | L / A | Altman–Kleiman (16.19); proof altered to cite the published finitely-generated-implies-Noetherian theorem instead of reproving it. |
| `cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented` | L / L | Milne Corollary 3.8. |
| `lem-hom-module-over-a-commutative-ring` | L / A | Standard; the statement is the usual `Hom` module structure over a commutative ring, and the proof is written to extend the published abelian-group structure rather than replace it. |
| `lem-hom-from-a-finite-free-module` | L / A | Standard; proof routed through the published universal property of free modules. |
| `cor-hom-of-finite-modules-is-finite-over-a-noetherian-ring` | L / A | Altman–Kleiman Exercise 16.20; the embedding proof is the one the exercise indicates, written out. |
| `lem-transitivity-of-module-finiteness` | L / L | Standard, and used in this exact form by Hochster 5.4 and Altman–Kleiman (16.21). |
| `thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian` | L / L | Hochster Lemma 5.4, including the intermediate-ring clause; Altman–Kleiman (16.19) and Milne 3.4 for the module clause. |
| `lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite` | L / A | Standard; the statement is the multi-element form of the published `thm-integrality-and-finite-module-equivalences`, and the induction plus the zero-ring boundary are written here because the published theorem excludes the zero base ring. |
| `lem-artin-tate-coefficient-subalgebra` | L / A | Altman–Kleiman (16.21); the row isolates the coefficient collection. |
| `lem-artin-tate-intermediate-ring-is-module-finite-over-the-coefficient-subalgebra` | L / A | Altman–Kleiman (16.21); the degree induction replacing the source's single substitution is this library's, and §7 records that this is the one item I am least certain matches a source's wording. |
| `thm-artin-tate-lemma` | L / A | Altman–Kleiman (16.21). |
| `cor-artin-tate-integral-form` | L / A | Altman–Kleiman (16.21)'s own remark that the two hypotheses are equivalent given algebra finiteness, made into a separate statement. |
| `def-invariant-subring-of-a-group-of-ring-automorphisms` | L / NA | Hochster's definition of `R^G` in the paragraph before Theorem 5.8. |
| `lem-orbit-polynomial-has-invariant-coefficients` | L / A | Hochster Theorem 5.8's proof, where the monic polynomial with elementary-symmetric coefficients appears; isolated here as a statement over an arbitrary commutative ring. |
| `thm-noether-finiteness-theorem-for-invariants` | L / A | Hochster Theorem 5.8 and Altman–Kleiman (16.22); the proof takes Altman–Kleiman's Artin–Tate route rather than Hochster's direct one. |
| `lem-maximal-non-finitely-generated-ideal` | L / A | Altman–Kleiman (16.10)'s first paragraph; the statement is separated from the criterion and the spurious prime hypothesis of the overlay is removed. |
| `lem-maximal-non-finitely-generated-ideal-is-prime` | L / A | Altman–Kleiman (16.10)'s second paragraph; the colon-ideal step is written out because the source's display is compressed. |
| `thm-cohen-noetherian-criterion` | L / A | Altman–Kleiman (16.10). |
| `rem-noetherian-hypotheses-do-not-descend-to-subrings` | A / NA | Assembled from the stability results on this page plus Altman–Kleiman §16 and Milne Exercise 3.20; a remark, no proof component. |

### B page

| id | prov | source and rationale |
|---|---|---|
| `ex-noetherian-integers-and-fields` | L / A | Totaro's examples (1) and (2) after Theorem 8.1 and Milne §3's opening; proof routed through the published subgroups-of-the-integers lemma. |
| `ex-noetherian-quotient-affine-algebra` | L / A | Standard applications of Milne Theorem 3.7; the two rings are the usual pair and the argument is one citation. |
| `ex-infinite-variable-polynomial-ring-is-not-noetherian` | L / A | Altman–Kleiman (16.1) first example and Totaro's example (3); the construction of the ring as a union of the published iterated polynomial rings is this library's, because the library has no infinite-variable polynomial ring. |
| `ex-non-noetherian-subalgebra-of-a-polynomial-ring` | L / A | Altman–Kleiman (16.1) second example and Milne Exercise 3.20; the degree bookkeeping is written out. |
| `ex-non-noetherian-ring-with-a-strict-chain-of-principal-ideals` | L / A | Altman–Kleiman Example (16.6); the strictness argument is written out, since the source asserts it. |
| `ex-hilbert-basis-leading-coefficient-reduction` | A / A | The ideal `(2x, 3x^2, x^3)` of `Z[x]` is chosen for this library to exercise non-unit leading coefficients; the algorithm it runs is Hochster 5.6 and Totaro 8.3. Recorded as altered rather than generated because the object is a routine instance of the source's construction, not a new claim. |
| `ex-artin-tate-finite-intermediate-algebra` | G / A | **AI-generated construction.** The tower `k ⊆ k[t^2,t^3] ⊆ k[t]` is chosen here to instantiate Altman–Kleiman (16.21); no source I read names it. `generation.role: example`. Not a dependency target and nothing on either page cites it. **Truth-risk obligation at step 5:** verify by direct computation that `k[t]` really is spanned by `1` and `t` over `k[t^2,t^3]`, and that the collected coefficient algebra is `k[t^2]` and not something larger. |
| `fs-noetherian-rings-have-a-uniform-bound-on-ideal-generators` | L / A | Milne Aside 3.18 supplies both the claim being refuted and the witness `(X,Y)^n`; the graded comparison proving the lower bound is written out, since Milne only asserts it. |
| `ex-finite-dimensional-algebra-over-a-field-is-noetherian` | L / A | Altman–Kleiman Exercise 16.28, Noetherian half; proof supplied. |
| `ex-symmetric-polynomials-as-a-noether-invariant-ring` | A / A | Altman–Kleiman (16.22)'s own reference to fundamental invariants, instantiated at the symmetric group and joined to the published `thm-fundamental-theorem-of-symmetric-polynomials`. Recorded as altered because the example is the classical one, recombined with published content. |
| `ex-reynolds-operator-splits-the-invariant-inclusion` | L / A | Hochster Example 5.13, which gives the operator and the splitting; the consequence for the Noetherian condition is Hochster 5.11(c) and is drawn explicitly here. |
| `ex-hom-between-finite-modules-over-the-integers` | G / A | **AI-generated construction.** The computation of `Hom(Z/m, Z/n)` is textbook standard but none of the four treatments I read states it, so I will not describe it as source-backed. `generation.role: example`. Not a dependency target. **Obligation at step 5:** first attempt to source the identity from a fetchable reference and, if that succeeds, retag the statement as literature-derived and record the URL. If it does not, keep the generated tag and run the counterexample search on the boundary values `m = 0`, `n = 0` and `m = 1`, where the `gcd` convention is what the claim turns on. |

**Load-bearing check.** The two `ai-generated` constructions are
`ex-artin-tate-finite-intermediate-algebra` and
`ex-hom-between-finite-modules-over-the-integers`. Both sit on the B page, both
have empty in-degree in the manifest, and neither appears in any `deps` list. No
`ai-generated` statement is a dependency target anywhere in this batch.

**No external-dependency fallback is used.** No item on this pair has
`proved_here: false`, and none needs one: every result is proved from published
content or from earlier items on the pair.

---

## 11. Authoring notes for the step-5 author (me)

Notes with no scaffold anchor that must not be rediscovered.

1. **The stage index runs over the natural numbers and starts at zero.** Milne
   displays the chain from `a(1)`. `a(0)` is the ideal of constants lying in the
   polynomial ideal and is a real stage. Writing the chain from `1` would be the
   1-indexed-literature defect.
2. **The zero polynomial has no degree** under
   `def-polynomial-degree-leading-coefficient-and-monic`. Every stage ideal must
   adjoin `0` by hand, and `lem-polynomial-ideal-finite-generation` must say that
   `0` lies in the subideal before it assigns a degree to every element outside
   it.
3. **`lem-hilbert-basis-degree-cancellation` at degree zero.** "Either `0` or of
   degree less than `d`" collapses at `d = 0` to "`f = h`". Argue it; do not let
   the reader infer that a polynomial of degree less than zero exists.
4. **`cor-finite-variable-polynomial-ring-noetherian` starts at `n = 0`.** The
   published `def-multivariate-polynomial-ring-by-iteration` sets
   `R[x_1,...,x_0] := R`, so the base case is the hypothesis and must be stated.
5. **Do not cite `ex-ideals-as-submodules-of-the-regular-module`.** It is
   published and correct, but it lives on a B page and `validate-plan.mjs` rejects
   the dependency (`b-leaf`). The identification is inline in
   `thm-noetherian-ring-ideal-characterisations`.
6. **Do not cite `fs-noetherian-rings-have-noetherian-subrings` either**, for the
   same reason. Name the companion examples page in prose.
7. **Do not cite `cor-principal-ideal-domains-are-noetherian`.** It exists on
   disk but is `status: draft` on a page this run does not build.
8. **The published `thm-integrality-and-finite-module-equivalences` requires
   `A ≠ 0`.** `lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite`
   must dispose of the zero base ring before citing it.
9. **`Hom` is only an abelian group in the published definition.** Anything
   asserting that a `Hom` is finitely generated must go through
   `lem-hom-module-over-a-commutative-ring` first.
10. **Prose rules.** No count anywhere in item prose. No "later" or "earlier"
    without a page id. `rem-noetherian-hypotheses-do-not-descend-to-subrings` and
    `rem-noetherian-conventions-and-choice` are the two items most likely to
    breach these; write them last and run `prosecheck.mjs` on them.
11. **Notation.** No applied canonical embedding around a natural number
    anywhere. Nothing on this pair needs one; the only place a bare inclusion map
    appears is the ring extension in
    `lem-retract-of-a-noetherian-ring-is-noetherian`, and it is not applied to a
    numeral.
12. **Well-definedness after proof.** Use `lim` notation only where a limit is
    proved well defined; nothing on this pair takes a limit, and the `x`-adic
    convergence language belongs to the deferred power series block.
13. **Proof contracts.** `research/frontier-18-batch-4.proof-contracts.json`
    carries citation entries only for **published** dependencies, with quotes
    verified against the item files on disk today. Citation entries for
    intra-pair dependencies cannot exist before their targets are authored; add
    them as each item is written, and keep the fact labels the contract already
    fixes so that the numbering does not drift. `proof-contract.mjs --strict`,
    `finite-smoke.mjs` and `risk-report.mjs` are the step-5 gates that read them.
14. **Finite smoke.** Two contracts select `vieta-elementary-symmetric`
    (`lem-orbit-polynomial-has-invariant-coefficients` and
    `ex-symmetric-polynomials-as-a-noether-invariant-ring`). Their `asserts`
    excerpts are the planned wording and must be made byte-identical to the
    authored text, or the check reports `smoke-assertion-mismatch`.
15. **Two conventions to state once and reuse.** Rings are commutative with
    identity throughout, and the zero ring is allowed unless a statement excludes
    it. Both belong in `rem-noetherian-conventions-and-choice` and nowhere else.
16. **A new category.** `commutative-algebra` has no directory under `library/`
    yet. Publishing this pair needs `library/commutative-algebra/_pathway.md` and
    the category-page parts SCHEMA §6.1 requires. That is step 10's business, not
    mine, but it is the kind of thing that is noticed late.

---

## Step-3 fix pass

Source of findings: `research/frontier-18-alpha-c-step3-scaffold-review.md`
(group **c**, batches 1, 3, 4; my batch is named in its `covers:` line and in its
per-pair verdict table). Finding ids are that report's, unchanged and
unrenumbered. The pair's verdict was **insufficient on B4-1 alone**.

### B4-1 — Hochster Corollary 5.9 declined on a premise false on disk · **applied**

Alpha is right on both counts, and I verified each from disk rather than from the
report:

- `items/cor-principal-ideal-domains-are-noetherian.md` reads `status: published`,
  `provenance.statement: literature-derived`, `judge: pass 2026-08-23`,
  `audited: 2026-08-24`, with no `proved_here: false`. It is homed on
  `modules-over-a-pid-and-canonical-forms` — the A page, not the B companion, so
  the leaf rule permits a `deps` edge — at order 110 against this page's 111.001,
  and that page is reached from this pair's declared `requires`
  (`modules-over-a-pid-and-canonical-forms-examples` → `modules-over-a-pid-and-canonical-forms`).
  My step-2 reason said the page was not published; it was true when I wrote it at
  03:45 and it is not true now, and publication state is the `status:` line.
- The two statements are different. Hochster 5.9 is *"A finitely generated algebra
  over a PID is Noetherian"*, not *"a PID is Noetherian"*, so building it mints no
  second id for anything already on disk.

I re-fetched the H20 snapshot and read the passage rather than trusting my own
harvest row. The source reads, immediately after the second Hilbert basis proof:
*"From the Hilbert basis theorem (second version) we have at once: Corollary 5.9.
A finitely generated algebra over a PID is Noetherian."* That is the whole entry —
the source itself gives it no proof beyond the citation, which is why it is the
cheap corollary the richness pass is supposed to catch.

**What changed.**

1. `research/frontier-18-batch-4.pages.json`: new A-page item at position 19,
   directly after `cor-finite-type-algebra-over-noetherian-ring-is-noetherian`:

   - id `cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian`
   - kind `corollary`
   - title "Every algebra of finite type over a principal ideal domain is a
     Noetherian ring"
   - deps `cor-finite-type-algebra-over-noetherian-ring-is-noetherian`,
     `cor-principal-ideal-domains-are-noetherian`,
     `def-finite-type-and-module-finite-algebras`, `def-principal-ideal-domain`

   The first three are Alpha's route. **`def-principal-ideal-domain` is a fourth
   edge I added**: this is the first and only occurrence of the term "principal
   ideal domain" on the A page, so its Statement needs the definition it uses.
   Published, `literature-derived`, homed on
   `euclidean-domains-pids-and-unique-factorisation` at order 50, inside the same
   closure. Decline it and the Statement uses an undefined term.

2. `research/frontier-18-batch-4.coverage.json`: the Hochster Corollary 5.9
   harvest row is re-dispositioned `deferred` → `included`, `item` set to the new
   id, and the false `reason` and the unreachable `destination`
   (`modules-over-a-pid-and-canonical-forms`, a published page that would never
   have built it) are removed.

3. `research/frontier-18-batch-4.proof-contracts.json`: the new id is added to
   `scope` and carries a full contract — two citations (`[F1]`
   `def-principal-ideal-domain` Definition, `[L1]`
   `cor-principal-ideal-domains-are-noetherian` Statement), two derivations
   covering steps 1.1 and 2.1, and all eight boundary rows. Both quotes were
   checked to occur in the cited item's actual section under
   `proof-contract.mjs`'s own whitespace normalisation. Same-page dependencies
   stay in the derivation claims rather than the citation list, matching authoring
   note 13 and every other contract in this batch; their `[A#]` citation entries
   go in at step 5 when their targets exist.

**Two things the step-5 author must carry, both recorded in the contract's
boundary worksheet.**

- *The field case is included, not excluded.* `def-principal-ideal-domain` is "an
  integral domain in which every ideal is principal", and a field is an integral
  domain whose only ideals $(0)$ and $(1)$ are principal, so a field is a
  principal ideal domain here. This corollary therefore subsumes the field case of
  `cor-finite-variable-polynomial-ring-noetherian` rather than sitting beside it.
  That agreement belongs in the Given line of Facts & Assumptions, which is where
  a convention goes; a corollary takes exactly the three sections SCHEMA §4 lists
  and gets no Remark section for it. Hochster uses the same convention — he writes
  "a principal ideal domain that is not a field has dimension 1", which only parses
  if a field is one.
- *The converse is false and must not be implied by the wording.* Every algebra of
  finite type over $\mathbb Z[x]$ is Noetherian, while $\mathbb Z[x]$ is not a
  principal ideal domain, because $(2,x)$ is not principal.

`finite_smoke` is empty for this contract. None of the registry's ten checks is a
bounded countermodel for a statement about arbitrary finite-type algebras, and
naming one that resolves to nothing would be worse than naming none.

### B4-2 — Hochster Theorem 5.5, the second proof of Hilbert basis · **no action; Alpha declined**

Alpha declined the enrichment on two grounds, one of them mine and one it added:
Hochster 5.5 is the polynomial ring over a *field*, a consequence of the theorem
this page already proves over any Noetherian ring, so the second-proof licence
does not reach it; and the change of variables it needs belongs to
`noether-normalisation-and-nullstellensatz`. The re-fetch confirms both: 5.5 reads
*"The polynomial ring $R$ in $n$ variables over a field $K$ is Noetherian"*, and
its proof turns on *"we may assume that $f$ is monic in $x_n$"*. Nothing changes.
The harvest row for Theorem 5.5 stays `deferred` with destination
`noether-normalisation-and-nullstellensatz`, which is correct as written.

### T-1 — `validate-plan.mjs` skips the reading-order check on a published dep · **recorded, no action**

Alpha confirmed the blind spot I reported and carried it to the owner and the
engine as a tool decision. It is out of my write scope. The consequence for this
batch is that the gate below cannot vouch for my new external edges, so I checked
both by hand and record the numbers here: `cor-principal-ideal-domains-are-noetherian`
is homed at order 110 and `def-principal-ideal-domain` at order 50, both strictly
below this page's 111.001, both on A pages, both inside the declared `requires`
closure.

### My own twelve step-2 findings, as Alpha adjudicated them

No scaffold edit follows from any of them; they are recorded so Alpha's re-check
has a per-id trail. Findings 1–9 and 11–12 **approved as scaffolded** (1 was
already applied before the review; 5, 6, 7 and 8 were confirmed against disk by
Alpha independently). Finding 10 **declined** — that is B4-2 above. Finding 12's
locator correction is Alpha's to apply to the design at step 4, not mine: my
coverage file already records the ranges actually read. Finding 11's H20 snapshot
is to be reused by every other commutative-algebra batch rather than re-sourced,
which Alpha is carrying to the run report.

### Consequential edits to my own step-2 record

Section 1's A-page table now lists 39 rows and the rows after position 18 are
renumbered; the landmark line moves with them (4, 5, 14, 17, 18, 21, 27, 31, 35,
38 — the same ten items). Section 2's corollary pass records the addition, its
positional references to items 20, 30, 34 and 37 are restated as 21, 31, 35 and
38, and the ceiling line reads 39 against 60. Section 5 reads 51 new ids; the
clash check was re-run over `items/` and `research/plan-spec.json` for the new id
and printed nothing.

**One authoring reminder that is not a finding.** The landmark line proposes ten
landmarks, but only eight of the corresponding `strategy` fields say so in words —
`thm-noetherian-ring-ideal-characterisations` and `thm-noetherian-induction` do
not. The landmark flag lives in item frontmatter, so at step 5 I set
`landmark: true` from this line, not from the strategy text. The new corollary is
**not** a landmark: item 18 already carries that role for the finite-type form.

### Gates re-run after the fix

From the repo root, at the end of this pass:

```
node tools/coverage-checklist.mjs research/frontier-18-batch-4.coverage.json
  → 1 page(s), 115 harvested result(s), 0 error(s), 0 warning(s)
node tools/content-policy.mjs --manifest-only research/frontier-18-batch-*.pages.json
  → 785 scoped item(s), 0 error(s), 0 warning(s)
node tools/validate-plan.mjs research/plan-spec.json
  → OK, acyclic and consistent (redundant-prereq warnings only, none on this pair)
node tools/depsource.mjs
  → OK, 0 unresolved
node tools/prosecheck.mjs research/frontier-18-batch-4.pages.json research/frontier-18-batch-4.notes.md --warnings
  → 0 error(s); no positional claim contradicts the spec
```

`validate-plan` and `depsource` read `research/plan-spec.json`, which does not
carry this batch's items until the step-4 splice, so **neither of them has seen
the new corollary**. What they attest is that the spec is still consistent, not
that my new edges resolve. `proof-contract.mjs --items` on the new id returns
`item-missing`, correctly: nothing is authored yet. The authoritative runs are the
engine's, after the splice and after step 5.

---

## Continuity checkpoint — step 5 authoring, part 1

- **Substage:** step 5, authoring. A-page items 1–28 of 39 written to `items/`,
  each `status: draft`, `origin: session`, and each passing
  `node tools/tsx-run.mjs tools/precheck.mts` individually (definitions and the
  remark carry `precheck: n/a`).
- **Written so far:** `rem-noetherian-conventions-and-choice`,
  `lem-generated-submodule-as-finite-linear-combinations`,
  `lem-finite-generating-subset-of-a-generating-set`,
  `thm-noetherian-ring-ideal-characterisations`, `thm-noetherian-induction`,
  `lem-retract-of-a-noetherian-ring-is-noetherian`,
  `lem-localised-ideal-generated-by-contracted-numerators`,
  `thm-noetherian-ring-quotients-and-localisations`,
  `cor-noetherian-from-finitely-many-noetherian-quotients`,
  `cor-product-of-two-noetherian-rings-is-noetherian`,
  `lem-leading-coefficient-ideals`, `lem-hilbert-basis-degree-cancellation`,
  `lem-polynomial-ideal-finite-generation`, `thm-hilbert-basis-theorem`,
  `cor-finite-variable-polynomial-ring-noetherian`,
  `cor-polynomial-ring-noetherian-implies-coefficient-ring-noetherian`,
  `def-finite-type-and-module-finite-algebras`,
  `cor-finite-type-algebra-over-noetherian-ring-is-noetherian`,
  `cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian`,
  `def-finitely-presented-module-and-algebra`,
  `thm-finite-generation-and-finite-presentation-over-a-noetherian-ring`,
  `cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented`,
  `lem-hom-module-over-a-commutative-ring`, `lem-hom-from-a-finite-free-module`,
  `cor-hom-of-finite-modules-is-finite-over-a-noetherian-ring`,
  `lem-transitivity-of-module-finiteness`,
  `thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian`,
  `lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite`.
- **Not yet written:** A-page items 29–39 (the Artin–Tate block, the invariant
  block, the Cohen block, the closing remark), all 12 B-page items, both page
  files, and the proof-contract update.
- **Frozen-text state:** nothing frozen; step 7 has not run.
- **Open constraints carried into the rest of the run.**
  - `lem-transitivity-of-module-finiteness` was **generalised to modules** (a
    $B$-module generated over $B$ is generated over $A$ by the products), with
    the ring case as the named consequence. Later items cite the module form.
  - Step numbering in every item follows precheck's canonical stratification: a
    step citing phase-$k$ steps sits in phase $k+1$, and the terminal QED step is
    alone in the highest phase.
  - `research/frontier-18-batch-4.proof-contracts.json` still carries the
    **step-2 step numbering and fact labels**, which the authored proofs do not
    match. It is rewritten in one pass after all items exist; nothing else
    depends on it until then.
- **Exact next action:** author `lem-artin-tate-coefficient-subalgebra`
  (A-page item 29) and continue in reading order.

## Continuity checkpoint

- **Substage:** step 5 authoring resumed on 2026-08-24 from disk state, after
  re-reading the repo instructions, the batch scaffold, the design section, and
  Alpha-c's step-3 review and re-check.
- **Artifacts owned:** all 51 batch item files now exist on disk under `items/`;
  both page files `library/commutative-algebra/noetherian-rings-and-hilbert-basis.md`
  and `library/commutative-algebra/noetherian-rings-and-hilbert-basis-examples.md`
  are still missing; `research/frontier-18-batch-4.proof-contracts.json`,
  `research/frontier-18-batch-4.coverage.json`, and this notes file remain owned
  by batch 4.
- **Disk-verified gates completed before this checkpoint:** every existing batch
  item carries `verification.precheck: pass` or `n/a` in frontmatter, but I have
  not yet re-run the step-5 batch gates in this resumed session. No page-level or
  contract-level gate is claimed yet.
- **Frozen-text state:** nothing is frozen; no step-7 judge has run on this batch.
- **Open constraints:** the page summaries and page frontmatter still need to be
  authored; the proof-contract file must be reconciled to the actual item step
  numbering and any step-5 edits; the notes' earlier authoring checkpoint is
  historical and not the current source of truth.
- **Exact next action:** run the scoped step-5 gates on the existing batch items,
  inspect any failures, then author the two page files and repair the proof
  contracts to match the final disk text.

## Step-5 authoring

### Items and pages authored

- Authored all scoped item files under `items/` for the A page `noetherian-rings-and-hilbert-basis` and the B page `noetherian-rings-and-hilbert-basis-examples`.
- Authored the missing page files `library/commutative-algebra/noetherian-rings-and-hilbert-basis.md` and `library/commutative-algebra/noetherian-rings-and-hilbert-basis-examples.md`.
- Rebuilt `research/frontier-18-batch-4.proof-contracts.json` against the final item text on disk; the stale step-3/early-step-5 contract is no longer the source of truth.

### Gates

- `node tools/tsx-run.mjs tools/reflow.mts` on all scoped items: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` on the 46 proof-bearing scoped items: all pass; the five definitions and remarks remain `precheck: n/a`.
- `node tools/coverage-checklist.mjs research/frontier-18-batch-4.coverage.json`: pass, 0 errors, 0 warnings.
- `node tools/content-policy.mjs research/frontier-18-batch-4.pages.json`: pass, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: pass at plan level; only repo-wide redundant-prereq warnings outside this batch.
- `node tools/proof-contract.mjs research/frontier-18-batch-4.proof-contracts.json --strict`: pass, with one warning on `lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite` (`shotgun-bracket`).
- `node tools/finite-smoke.mjs research/frontier-18-batch-4.proof-contracts.json`: pass, 2 checks, 0 errors.
- `node tools/risk-report.mjs research/frontier-18-batch-4.proof-contracts.json`: 0 errors; all 46 proof-bearing items are routed for Alpha step-6 risk review, which is expected at this stage.
- `node tools/prosecheck.mjs library/commutative-algebra/noetherian-rings-and-hilbert-basis.md library/commutative-algebra/noetherian-rings-and-hilbert-basis-examples.md --warnings`: 0 errors, 0 warnings.
- `node tools/prosecheck.mjs ... research/frontier-18-batch-4.notes.md --warnings`: 0 errors, notes-only count warnings inherited from the step-2/3 ledger prose.
- Repo-wide structural gates remain globally red outside this batch: `depcheck` and `fwdcheck` fail on unrelated items elsewhere in the tree. I re-ran both into temp logs and filtered for batch-4 ids; they produced no batch-4 hits. `extcheck` is globally clean. `citecheck` is warning-only and batch 4 contributes three heuristic `order-axioms` warnings (`lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite`, `lem-transitivity-of-module-finiteness`, `thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian`); these are vocabulary-triggered false positives rather than missing deps.

### Per-item list

| id | precheck | provenance | source/edit history |
|---|---|---|---|
| `rem-noetherian-conventions-and-choice` | `n/a` | `ai-altered/not-applicable` | page-specific remark or convention note assembled from source-backed material |
| `lem-generated-submodule-as-finite-linear-combinations` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `lem-finite-generating-subset-of-a-generating-set` | `pass` | `literature-derived/literature-derived` | source-backed statement and close literature proof |
| `thm-noetherian-ring-ideal-characterisations` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `thm-noetherian-induction` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `lem-retract-of-a-noetherian-ring-is-noetherian` | `pass` | `literature-derived/literature-derived` | source-backed statement and close literature proof |
| `lem-localised-ideal-generated-by-contracted-numerators` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `thm-noetherian-ring-quotients-and-localisations` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `cor-noetherian-from-finitely-many-noetherian-quotients` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `cor-product-of-two-noetherian-rings-is-noetherian` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `lem-leading-coefficient-ideals` | `pass` | `literature-derived/literature-derived` | source-backed statement and close literature proof |
| `lem-hilbert-basis-degree-cancellation` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `lem-polynomial-ideal-finite-generation` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `thm-hilbert-basis-theorem` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `cor-finite-variable-polynomial-ring-noetherian` | `pass` | `literature-derived/literature-derived` | source-backed statement and close literature proof |
| `cor-polynomial-ring-noetherian-implies-coefficient-ring-noetherian` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `def-finite-type-and-module-finite-algebras` | `n/a` | `literature-derived/not-applicable` | source-backed definition or remark; no local proof component |
| `cor-finite-type-algebra-over-noetherian-ring-is-noetherian` | `pass` | `literature-derived/literature-derived` | source-backed statement and close literature proof |
| `cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian` | `pass` | `literature-derived/literature-derived` | source-backed statement and close literature proof |
| `def-finitely-presented-module-and-algebra` | `n/a` | `literature-derived/not-applicable` | source-backed definition or remark; no local proof component |
| `thm-finite-generation-and-finite-presentation-over-a-noetherian-ring` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented` | `pass` | `literature-derived/literature-derived` | source-backed statement and close literature proof |
| `lem-hom-module-over-a-commutative-ring` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `lem-hom-from-a-finite-free-module` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `cor-hom-of-finite-modules-is-finite-over-a-noetherian-ring` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `lem-transitivity-of-module-finiteness` | `pass` | `literature-derived/literature-derived` | source-backed statement and close literature proof |
| `thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian` | `pass` | `literature-derived/literature-derived` | source-backed statement and close literature proof |
| `lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `lem-artin-tate-coefficient-subalgebra` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `lem-artin-tate-intermediate-ring-is-module-finite-over-the-coefficient-subalgebra` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `thm-artin-tate-lemma` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `cor-artin-tate-integral-form` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `def-invariant-subring-of-a-group-of-ring-automorphisms` | `n/a` | `literature-derived/not-applicable` | source-backed definition or remark; no local proof component |
| `lem-orbit-polynomial-has-invariant-coefficients` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `thm-noether-finiteness-theorem-for-invariants` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `lem-maximal-non-finitely-generated-ideal` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `lem-maximal-non-finitely-generated-ideal-is-prime` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `thm-cohen-noetherian-criterion` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `rem-noetherian-hypotheses-do-not-descend-to-subrings` | `n/a` | `ai-altered/not-applicable` | page-specific remark or convention note assembled from source-backed material |
| `ex-noetherian-integers-and-fields` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `ex-noetherian-quotient-affine-algebra` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `ex-infinite-variable-polynomial-ring-is-not-noetherian` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `ex-non-noetherian-subalgebra-of-a-polynomial-ring` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `ex-non-noetherian-ring-with-a-strict-chain-of-principal-ideals` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `ex-hilbert-basis-leading-coefficient-reduction` | `pass` | `ai-altered/ai-altered` | source-backed construction or example materially recombined with published library results |
| `ex-artin-tate-finite-intermediate-algebra` | `pass` | `ai-generated/ai-altered` | local non-load-bearing witness chosen in-session, then verified by the written computation |
| `fs-noetherian-rings-have-a-uniform-bound-on-ideal-generators` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `ex-finite-dimensional-algebra-over-a-field-is-noetherian` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `ex-symmetric-polynomials-as-a-noether-invariant-ring` | `pass` | `ai-altered/ai-altered` | source-backed construction or example materially recombined with published library results |
| `ex-reynolds-operator-splits-the-invariant-inclusion` | `pass` | `literature-derived/ai-altered` | source-backed statement with local proof rewritten against library deps and boundary cases |
| `ex-hom-between-finite-modules-over-the-integers` | `pass` | `ai-altered/ai-altered` | source-backed construction or example materially recombined with published library results |

### Ledger of scaffold deviations

- `rem-noetherian-conventions-and-choice`: deps reconciled to actual cited inputs: +def-ring.
- `thm-noetherian-ring-ideal-characterisations`: deps reconciled to actual cited inputs: +lem-generated-submodule-as-finite-linear-combinations.
- `lem-retract-of-a-noetherian-ring-is-noetherian`: deps reconciled to actual cited inputs: +thm-generated-ideal-description-in-a-commutative-ring.
- `thm-noetherian-ring-quotients-and-localisations`: deps reconciled to actual cited inputs: +def-multiplicative-subset-and-localisation.
- `cor-noetherian-from-finitely-many-noetherian-quotients`: deps reconciled to actual cited inputs: +def-quotient-ring, def-algebra-over-a-commutative-ring, lem-ideal-criterion-and-intersections; -thm-correspondence-theorem-ideals.
- `lem-leading-coefficient-ideals`: title refined to the authored wording on disk.
- `lem-hilbert-basis-degree-cancellation`: deps reconciled to actual cited inputs: +def-polynomial-ring-over-a-commutative-ring; -prop-polynomial-degree-laws-over-a-commutative-ring.
- `lem-polynomial-ideal-finite-generation`: deps reconciled to actual cited inputs: +thm-well-ordering-principle.
- `cor-finite-variable-polynomial-ring-noetherian`: title refined to the authored wording on disk.
- `def-finite-type-and-module-finite-algebras`: deps reconciled to actual cited inputs: +thm-first-isomorphism-theorem-rings.
- `def-finitely-presented-module-and-algebra`: deps reconciled to actual cited inputs: +def-generated-cyclic-finitely-generated-and-free-modules, thm-first-isomorphism-theorem-modules, thm-universal-property-of-free-modules.
- `thm-finite-generation-and-finite-presentation-over-a-noetherian-ring`: deps reconciled to actual cited inputs: +def-generated-cyclic-finitely-generated-and-free-modules, thm-universal-property-of-free-modules, lem-generated-submodule-as-finite-linear-combinations, def-exact-and-short-exact-sequences-of-modules; -thm-noetherian-ring-ideal-characterisations, cor-every-module-is-a-quotient-of-a-free-module, thm-first-isomorphism-theorem-modules, cor-finite-direct-sums-preserve-chain-conditions.
- `cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented`: deps reconciled to actual cited inputs: +def-finite-type-and-module-finite-algebras; -cor-finite-type-algebra-over-noetherian-ring-is-noetherian.
- `lem-hom-module-over-a-commutative-ring`: title refined to the authored wording on disk.
- `lem-hom-from-a-finite-free-module`: title refined to the authored wording on disk.
- `cor-hom-of-finite-modules-is-finite-over-a-noetherian-ring`: deps reconciled to actual cited inputs: +thm-universal-property-of-free-modules, lem-generated-submodule-as-finite-linear-combinations, def-free-module-on-a-set-and-standard-basis, def-generated-cyclic-finitely-generated-and-free-modules, def-hom-groups-and-induced-hom-maps; -thm-hom-functors-are-left-exact, cor-every-module-is-a-quotient-of-a-free-module.
- `lem-transitivity-of-module-finiteness`: deps reconciled to actual cited inputs: +def-left-and-right-modules.
- `thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian`: deps reconciled to actual cited inputs: +def-algebra-over-a-commutative-ring, thm-generated-ideal-description-in-a-commutative-ring, def-subring.
- `lem-artin-tate-coefficient-subalgebra`: deps reconciled to actual cited inputs: +def-subring.
- `lem-artin-tate-intermediate-ring-is-module-finite-over-the-coefficient-subalgebra`: deps reconciled to actual cited inputs: +def-subring; -def-noetherian-module.
- `thm-artin-tate-lemma`: deps reconciled to actual cited inputs: +lem-generated-submodule-as-finite-linear-combinations, def-subring; -lem-transitivity-of-module-finiteness.
- `cor-artin-tate-integral-form`: deps reconciled to actual cited inputs: +def-subring.
- `lem-orbit-polynomial-has-invariant-coefficients`: deps reconciled to actual cited inputs: +prop-polynomial-degree-laws-over-a-commutative-ring, thm-universal-property-of-a-polynomial-ring, def-group, def-group-action.
- `thm-noether-finiteness-theorem-for-invariants`: deps reconciled to actual cited inputs: +def-subring.
- `lem-maximal-non-finitely-generated-ideal`: deps reconciled to actual cited inputs: +def-generated-and-principal-ideals; -lem-finite-generating-subset-of-a-generating-set.
- `lem-maximal-non-finitely-generated-ideal-is-prime`: deps reconciled to actual cited inputs: +lem-ideal-criterion-and-intersections.
- `rem-noetherian-hypotheses-do-not-descend-to-subrings`: deps reconciled to actual cited inputs: +thm-hilbert-basis-theorem, cor-finite-variable-polynomial-ring-noetherian.
- `ex-noetherian-integers-and-fields`: title refined to the authored wording on disk. deps reconciled to actual cited inputs: +def-left-right-and-two-sided-ideal, thm-generated-ideal-description-in-a-commutative-ring.
- `ex-noetherian-quotient-affine-algebra`: title refined to the authored wording on disk. deps reconciled to actual cited inputs: +def-finite-type-and-module-finite-algebras, def-multivariate-polynomial-ring-by-iteration, thm-universal-property-of-a-polynomial-ring, def-generated-and-principal-ideals, thm-generated-ideal-description-in-a-commutative-ring; -thm-noetherian-ring-quotients-and-localisations, cor-finite-variable-polynomial-ring-noetherian.
- `ex-infinite-variable-polynomial-ring-is-not-noetherian`: deps reconciled to actual cited inputs: +thm-polynomial-ring-is-a-commutative-ring, thm-generated-ideal-description-in-a-commutative-ring.
- `ex-non-noetherian-subalgebra-of-a-polynomial-ring`: title refined to the authored wording on disk. deps reconciled to actual cited inputs: +cor-finite-type-algebra-over-noetherian-ring-is-noetherian, thm-generated-ideal-description-in-a-commutative-ring, def-polynomial-ring-over-a-commutative-ring, def-multivariate-polynomial-ring-by-iteration, ex-noetherian-integers-and-fields.
- `ex-non-noetherian-ring-with-a-strict-chain-of-principal-ideals`: title refined to the authored wording on disk. deps reconciled to actual cited inputs: +thm-field-of-fractions-is-a-field-and-the-domain-embeds, def-field, def-zero-divisor-and-integral-domain, thm-generated-ideal-description-in-a-commutative-ring, def-multivariate-polynomial-ring-by-iteration, def-polynomial-ring-over-a-commutative-ring.
- `ex-hilbert-basis-leading-coefficient-reduction`: title refined to the authored wording on disk. deps reconciled to actual cited inputs: +def-polynomial-ring-over-a-commutative-ring, def-polynomial-degree-leading-coefficient-and-monic, def-generated-and-principal-ideals, thm-generated-ideal-description-in-a-commutative-ring.
- `ex-artin-tate-finite-intermediate-algebra`: deps reconciled to actual cited inputs: +def-subring, def-polynomial-ring-over-a-commutative-ring, ex-noetherian-integers-and-fields.
- `fs-noetherian-rings-have-a-uniform-bound-on-ideal-generators`: deps reconciled to actual cited inputs: +ex-noetherian-integers-and-fields, thm-generated-ideal-description-in-a-commutative-ring, def-multivariate-polynomial-ring-by-iteration, def-polynomial-ring-over-a-commutative-ring, def-vector-space, def-linear-combination-and-span, def-linear-independence, cor-independent-set-is-no-larger-than-a-finite-spanning-set; -lem-generated-submodule-as-finite-linear-combinations.
- `ex-finite-dimensional-algebra-over-a-field-is-noetherian`: deps reconciled to actual cited inputs: +def-vector-space, def-linear-subspace, def-linear-basis, def-linear-combination-and-span, lem-field-is-a-commutative-ring, thm-generated-ideal-description-in-a-commutative-ring, ex-noetherian-integers-and-fields.
- `ex-symmetric-polynomials-as-a-noether-invariant-ring`: deps reconciled to actual cited inputs: +thm-vieta-expansion-in-elementary-symmetric-polynomials, thm-universal-property-of-a-polynomial-ring, def-multivariate-polynomial-ring-by-iteration, def-group, def-group-action, ex-noetherian-integers-and-fields.
- `ex-reynolds-operator-splits-the-invariant-inclusion`: deps reconciled to actual cited inputs: +def-group, def-ring, def-subring, def-module-homomorphism-kernel-image-and-cokernel; -thm-noetherian-ring-ideal-characterisations.
- `ex-hom-between-finite-modules-over-the-integers`: title refined to the authored wording on disk. deps reconciled to actual cited inputs: +def-module-homomorphism-kernel-image-and-cokernel, def-addition-and-multiplication-modulo-n, prop-abelian-groups-are-z-modules, thm-gcd-generates-the-subgroup, ex-noetherian-integers-and-fields.
- `lem-transitivity-of-module-finiteness`: statement broadened from the scaffolded algebra-tower formulation to the module statement proved on disk; the algebra consequence is retained in the closing sentence and is what later ring items use.
- `ex-hom-between-finite-modules-over-the-integers`: statement narrowed to `n >= 1`, because the displayed isomorphism fails at `n = 0`; the excluded boundary is refuted explicitly in the Example body and in step 4.1.

### Narrowed or dropped claims

- No scaffold id was dropped or merged during authoring.
- The only material narrowing is `ex-hom-between-finite-modules-over-the-integers`, recorded above.
- The only material broadening is `lem-transitivity-of-module-finiteness`, recorded above.

### Escalations and blockers

- No batch-local mathematical blocker remains.
- The repo-wide `depcheck` and `fwdcheck` failures are outside batch 4 and prevented no batch-local edit; step 6 should not read them as evidence against this pair without a batch-4 line item.
- Step 6 owes the required Alpha `risk_review` entries for the 46 routed proof-bearing items; I did not and could not satisfy `--require-reviewed` at step 5.

### Confidence

- High confidence in the authored item set, the page files, and the rebuilt proof contracts: every scoped item exists on disk, every proof-bearing one prechecks clean, the batch manifest passes content policy, and the rebuilt contract passes strict validation and finite smoke.
- Moderate confidence in the prose-only remarks and notes, because the library's prose check does not validate mathematical truth and the notes file still carries historical count warnings from the scaffold ledger.
- Not verified by me at step 5: Alpha risk reviews, any step-6 independent-reader audit, and the unrelated global `depcheck`/`fwdcheck` failures elsewhere in the repository.
