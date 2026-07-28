# `frontier-1` — amendments to PUBLISHED items, staged not applied

`CLAUDE.md`, hard rule: amendments to published pages land **in the same commit
that publishes the level, never before**, with `verification.audited` cleared so
`depcheck`'s `published-unaudited` forces the owner's re-audit.

This build is **not publishing** — the owner audits first. So everything here is
staged. Nothing in this file has been applied to `items/`.

Each entry states what breaks if it is never applied, so the owner can decline
one without having to reconstruct the consequence.

---

## A1. `rem-rearrangement-in-higher-dimensions` gains forward references

**Item:** `items/rem-rearrangement-in-higher-dimensions.md` — published, homed on
`absolute-convergence-and-rearrangement` (order 129).
**Raised by:** Beta-F1-2, finding F-7. **Status: STAGED.**

**Why.** The published item says the ℝ^d rearrangement question "has a complete
classical answer" not reachable at that point in the reading order, and carries
the Levy and Steinitz papers in `sources.references`. `frontier-1` builds the
first part of that answer on `rn-as-a-normed-space` (order 167). The forward
declaration is what brings the ↗ tier and the forward-reference ledger entry into
existence; without it the reader meets the promise and is never shown where it is
kept.

**Edit.** Add to frontmatter:

```yaml
forward_refs: [thm-steinitz-polygonal-confinement, thm-rearrangement-sums-lie-in-an-affine-subspace]
```

and add a matching link in the body Remarks — `fwdcheck` raises `forward-unused`
for a declared reference that the text never uses.

**Two constraints on the wording, both load-bearing.**

1. The item's sentence *"What the literature answers is not stated here in any
   form"* **stays true and must not be weakened**. `frontier-1` proves the
   containment half only; the classical answer as a whole is still not stated
   anywhere. If the eventual wording says the answer is now given, that sentence
   becomes false and the amendment has manufactured the defect it was meant to
   close.
2. **Delete the item's `verification.judge` block in the same edit.** SCHEMA §3 is
   explicit that a correction inside a `rem-` is a material rewrite, so the
   existing verdict would claim a pass on text the judge never saw.

**If never applied.** Nothing breaks mechanically and no gate fires — this build
declares no forward reference onto the item, so there is no dangling half. The
cost is only that the ↗ marker and the ledger entry do not appear, and the
promise on page 129 stays unlinked.

---

## A2. `ex-arbitrarily-long-runs-of-composites` — the factorial remark is falsified

**Item:** `items/ex-arbitrarily-long-runs-of-composites.md` — published, homed on
`primes-and-the-fundamental-theorem-of-arithmetic-examples` (order 29).
**Raised by:** step-10a sweep. **Status: STAGED. Becomes false ON PUBLICATION.**

**Why.** The item's first Remark (line 94) reads:

> - **No factorial is used, and none is available on $\mathbb{Z}$.** The library's $k!$ is introduced inside $\mathbb{R}$ as a finite product of reals ([[lem-factorial-beats-geometric]]), a different object on a different page; minting a factorial on $\mathbb{Z}$ here would create a dictionary obligation this page cannot discharge. …

`frontier-1` mints `def-factorial-and-falling-factorial` on
`finite-counting-and-binomial-coefficients` (order **20**), by recursion **in
$\mathbb{N}$**, and that page sits **before** page 29. So after publication:

* "The library's $k!$ is introduced inside $\mathbb{R}$" is **false** — it is
  introduced in $\mathbb{N}$ at order 20, and the real-valued one at order 122 is
  the derived copy. The new definition says so itself, in as many words: its
  Remark is headed *"The library's **other** factorial"*, and clause (b) proves
  $\prod_{j<n}(j+1) = \iota(n!)$ in $\mathbb{R}$. The published sentence and the
  new one assert the same relation with the roles reversed.
* "a different object on a different page" is **false** in the sense meant: the
  two are proved to be the same object transported along $\iota$.
* "none is available on $\mathbb{Z}$" survives literally — $n!$ lives in
  $\mathbb{N}$ — but it is now the wrong reason. The item already uses
  $\iota : \mathbb{N} \to \mathbb{Z}$ ([L7]), so a factorial *is* reachable; what
  the proof avoids is the dictionary obligation of naming $\iota(n!)$ as "the
  factorial on $\mathbb{Z}$", which is a different and still-good reason.

**Edit.** Replace the bolded lead and first clause:

> - **The factorial is available at this point, and is deliberately not used.**
>   [[def-factorial-and-falling-factorial]] defines $n!$ by recursion in
>   $\mathbb{N}$, earlier in the reading order than this page, and
>   [[lem-factorial-beats-geometric]] later carries the same numbers into
>   $\mathbb{R}$. Neither is a factorial *on $\mathbb{Z}$*: naming $\iota(n!)$ as
>   one would create a dictionary obligation this page cannot discharge. …

keeping the last sentence ("The finite product of [[def-monoid-finite-product]]
in $(\mathbb{Z},\cdot,1)$ does everything needed, and $N$ is $(n+1)!$ only in the
informal sense") **unchanged** — it stays true and is the substantive point.

`def-factorial-and-falling-factorial` is at order 20 and this item at order 29, so
it is a **backward** citation: add it to `deps`, not to `forward_refs`. Leave
`forward_refs: [lem-factorial-beats-geometric]` as it is — order 122 is still
ahead of 29 and the text still uses it. Refresh `verification.audited`; the
`judge` block may stand, the edit being confined to a Remark that makes no
mathematical claim (contrast A1, which edits a `rem-` item, where the prose *is*
the item).

**If never applied.** No gate fires. A reader on page 29 is told the library's
factorial lives in $\mathbb{R}$ on a later page, nine pages after it has met the
real one in $\mathbb{N}$; and the two definitions point at each other with
contradictory accounts of which is primary.

---

## A3. `primes-…-examples` page summary — the same falsehood, in a page summary

**Page:** `library/number-theory/primes-and-the-fundamental-theorem-of-arithmetic-examples.md`
(published, order 29), lines 51–53.
**Raised by:** step-10a sweep. **Status: STAGED. Becomes false ON PUBLICATION.**

**Why.** The companion of A2, and the reason A2 alone is not enough:

> No factorial is used — the library's $k!$ lives inside $\mathbb{R}$ on a
> different page — and the finite product of [[def-monoid-finite-product]] in
> $(\mathbb{Z},\cdot,1)$ does the work.

**No gate reads a page summary.** This is the same defect class as level 9's
amendment 9, and the reason LEVELS.md §10a says "items AND page summaries both".

**Edit.**

> No factorial is used — [[def-factorial-and-falling-factorial]] defines $n!$ in
> $\mathbb{N}$, not on $\mathbb{Z}$ — and the finite product of
> [[def-monoid-finite-product]] in $(\mathbb{Z},\cdot,1)$ does the work.

**If never applied.** The page summary contradicts its own item's repaired Remark
(A2), which is worse than either being wrong alone. **Apply A2 and A3 together or
neither.**

---

## A4. `rem-suslin-line-non-ccc-square-unverified` — order topologies, twice

**Item:** `items/rem-suslin-line-non-ccc-square-unverified.md` — published, homed
on `open-problems-and-research-frontier` (order 5).
**Raised by:** step-10a sweep. **Status: STAGED. PARTLY FALSE ALREADY TODAY.**

**Why.** Two sentences:

> It is not proved here because this library develops neither order topologies nor
> recursion of length $\omega_1$, both of which the argument uses.

> The obstacle here is the setting, not the difficulty: order topology,
> separability and transfinite recursion on $\omega_1$ all belong to tracks this
> library has not built.

Three conjuncts, three different verdicts:

1. **"develops neither order topologies"** — **already false today.**
   `ex-order-topology` is published on `topological-spaces-and-continuity-examples`
   (order 250) and develops the order topology on an arbitrary totally ordered
   set: the open rays as a subbasis, the rays-and-intervals basis via
   `thm-basis-criterion`, and the identification with the usual topology of
   $\mathbb{R}$. This is not a level-caused decay; it decayed when the topology
   track landed.
2. **"recursion of length $\omega_1$"** — **becomes false on publication.**
   `frontier-1` defines $\omega_1$ (`def-first-uncountable-ordinal`, order 245)
   and carries `lem-recursion-on-the-ordinals` on the same page; transfinite
   recursion itself is published at order 243. `separation-axioms` (order 261)
   adds `def-order-topology-on-an-ordinal` and builds the ordinal spaces
   $\omega+1$ and $\omega_1$ as topological spaces.
3. **"separability"** — **still true.** Separability is defined nowhere, and
   `frontier-1` does not define it. Do not touch this conjunct.

**Edit.** Both sentences, keeping conjunct 3:

> It is not proved here because the argument needs a Suslin line, and this library
> has no notion of separability with which to state what one is.

> The obstacle here is the setting, not the difficulty: the library has the order
> topology ([[ex-order-topology]]), $\omega_1$ and recursion along it
> ([[def-first-uncountable-ordinal]], [[lem-recursion-on-the-ordinals]]), and no
> notion of separability at all, which is the conjunct that keeps the argument out
> of reach.

**A constraint on the wording.** The item is `proved_here: false` and lives on the
open-problems page, where "No proof anywhere in the library may cite an item from
this page, and none does" is a standing invariant. The edit must not turn the
mention of `ex-order-topology` into a dependency the item *rests* on: it is
orientation only, exactly as the deferred pages handle it. Adding those three ids
to `deps` would make this page a dependency target; put them in the prose and, if
`depcheck` demands a declaration, use `external_refs`/orientation rather than
`deps`. **Check `extcheck.mjs` before choosing the field.**

`verification` on this item is `sources_checked`, not a judge block; refresh the
date and record the re-audit.

**If never applied.** A published item on the library's own honesty page tells the
reader the library has no order topology, 245 pages after it built one. The
open-problems page exists precisely to be precise about *why* something is
unproved; a wrong reason there is worse than a wrong reason anywhere else.

---

## A5. `rem-gitik-all-uncountable-cardinals-singular` — "never on regularity"

**Item:** `items/rem-gitik-all-uncountable-cardinals-singular.md` — published,
homed on `deferred-set-theory-beyond-choice` (order 3).
**Raised by:** step-10a sweep. **Status: STAGED. Becomes false ON PUBLICATION.**

**Why.** Two passages:

> - **Not proved in this library.** No forcing, no large cardinals, no cofinality
>   theory.

> … regularity of an uncountable cardinal is never a free structural fact about
> [[def-cardinal]]: it is a consequence of choice, and without choice it can fail
> everywhere at once. What survives in ZF is the much weaker existence statement
> [[thm-hartogs]], which is why the library leans on Hartogs numbers and never on
> regularity.

`ordinal-arithmetic` (order 245) defines `def-cofinal-subset-of-an-ordinal` and
proves `thm-countable-subsets-of-omega-one-are-bounded` — *no at most countable
subset of $\omega_1$ is cofinal in it* — which **is** the regularity of $\omega_1$,
stated without the word. `cex-omega-one-has-no-at-most-countable-cofinal-subset`
and `ex-an-increasing-sequence-in-omega-one-has-a-countable-supremum` are its
worked forms, and `rem-omega-one-and-the-cost-of-choice` prices it at exactly
$\mathrm{AC}_\omega$. So "no cofinality theory" and "never on regularity" both go.

**What must NOT be weakened.** "No forcing, no large cardinals" stays true, and so
does the substance of the second passage: the build's own remark says the
hypothesis is load-bearing and cites this page's `rem-feferman-levy-model` as the
model where it fails. The amendment sharpens the claim; it does not retract it.

**Edit.** First passage → "No forcing, no large cardinals, and no cofinality
*function*: the library defines cofinal subsets of an ordinal
([[def-cofinal-subset-of-an-ordinal]]) but neither $\operatorname{cf}(\alpha)$ nor
the words *regular* and *singular*."

Second passage, last clause → "… which is why the library leans on Hartogs
numbers, and why the one regularity statement it does prove —
[[thm-countable-subsets-of-omega-one-are-bounded]], that no at most countable
subset of $\omega_1$ is cofinal in it — carries the Axiom of Countable Choice as
an explicit standing hypothesis rather than being read off the structure."

Delete the `judge` block: a correction inside a `rem-` is a material rewrite of the
item (SCHEMA §3), as in A1.

**If never applied.** The deferred set-theory page tells the reader the library has
no cofinality theory and never uses regularity, on the same day it publishes the
regularity of $\omega_1$ and prices it. The specific harm is that
`rem-omega-one-and-the-cost-of-choice` sends the reader to
`rem-feferman-levy-model` on this very page for the failure of that regularity —
so the two items will be read together, and they will contradict each other.

---

## A6. `rem-riesz-fischer` — the INVERSE defect: $C[a,b]$ is not there

**Item:** `items/rem-riesz-fischer.md` — published, homed on
`deferred-measure-and-integration` (order 1).
**Raised by:** step-10a sweep. **Status: STAGED. ALREADY FALSE TODAY.**

**Why.** A false claim of PRESENCE, the class no negation pattern can reach — the
same class as level 9's still-staged amendment 12, on the same page, and found the
same way, by reading:

> **Which page it serves.** The metric spaces and completeness pages, which prove
> that $\mathbb{R}$, $\mathbb{R}^n$ and $C[a,b]$ with the sup norm are complete,
> and that $C[a,b]$ with the $L^1$ metric is not.

Verified from disk. `C[a,b]` occurs in exactly four items, all four of them
`rem-` items on the deferred pages (`rem-riesz-fischer`, `rem-lp-separability`,
`rem-absolutely-continuous-function`, `rem-ftc-absolutely-continuous`). What the
two pages named actually prove is:

* `thm-euclidean-space-complete` (order 118) — $\mathbb{R}$ and $\mathbb{R}^n$;
* `ex-bounded-functions-with-sup-metric-are-complete` (order 119) — the **bounded**
  functions $B(X)$ with the sup metric, not the continuous ones;
* nothing at all about the $L^1$ metric on any function space.

**What `frontier-1` changes.** It supplies half the missing content, on a third
page: `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (order
284, `function-space-topologies-examples`) proves $C([0,1],\mathbb{R})$ complete.
So the amendment can now name a real page for the sup-norm half, and must drop the
$L^1$ half outright. **This is why the amendment is staged with this build rather
than left to the level-9 batch: the build changes what the correct text is.**

**Edit.**

> **Which page it serves.** The completeness page, which proves $\mathbb{R}$ and
> $\mathbb{R}^n$ complete and the bounded functions with the sup metric complete,
> and the function-space page, which proves $C([0,1],\mathbb{R})$ complete for the
> uniform metric. The $L^1$ metric on $C[a,b]$ is not built here at all, which is
> the honest motivation for the Lebesgue theory: …

and keep the rest of the paragraph, which is about the completion and is correct.

**Order note, load-bearing.** `function-space-topologies-examples` is order 284 and
this item is order 1, so the reference is a forward one; the deferred pages' own
rule is that a pointer at material the library does prove "does so as a forward
reference, marked as such, and always for orientation rather than as a premise"
(`deferred-algebraic-topology` summary). Declare it in `forward_refs`, not `deps`,
and check `fwdcheck.mjs` accepts a `remark` as a `CONSEQUENCE_KIND`; if it does
not, the safe form is prose with no id, exactly as the current text does it.

Delete the `judge` block — material rewrite of a `rem-`.

**If never applied.** A published item asserts that two named pages prove two
things about $C[a,b]$, neither of which is anywhere in the library, and the second
of which ($L^1$ incompleteness) is not even planned. A reader who follows the
pointer finds nothing and cannot tell whether the library or the pointer is wrong.
This is the more dangerous direction of the defect: a false claim of presence reads
as authoritative.

---

## A7. `primes-…` page summary — "no ordered set to hold an infinite value"

**Page:** `library/number-theory/primes-and-the-fundamental-theorem-of-arithmetic.md`
(published, order 28), lines 89–91.
**Raised by:** step-10a sweep. **Status: STAGED. ALREADY FALSE TODAY.**

**Why.** The summary says:

> … and $v_p(0)$ is left undefined rather than set to infinity, since this library
> has no ordered set to hold an infinite value.

`def-extended-reals` is **published**, on `limsup-and-subsequential-limits`
(order 122): "the extended real line $\overline{\mathbb{R}}$, its order, and the
arithmetic that is left undefined". The library does have such a set.

**This one is already half-fixed, and that is the point.** The *item*
`def-p-adic-valuation` carried the same sentence, was caught by a level-9 step-8
auditor, and now reads correctly — it says no such set is available *at this point
in the reading order*, and then names the extended real line explicitly and
explains why taking values there would make a definition about $\mathbb{Z}$ rest on
the construction of $\mathbb{R}$. The page summary sixteen lines away was not
touched. LEVELS.md §10a already warns about exactly this ("a level-8 fix corrected
one sentence and left the same falsehood sixteen lines away"); this is a second
instance, and the fix is to copy the item's own repaired form.

**Edit.**

> … and $v_p(0)$ is left undefined rather than set to infinity, since no ordered
> set with a greatest element is available at this point in the reading order —
> [[def-p-adic-valuation]] records why the extended real line, built far above this
> page, is not used for it either.

**After applying, re-grep the file** — §10a mandates it, and this amendment exists
because the last repair of this sentence did not.

**If never applied.** Nothing breaks mechanically; a published page summary states
a corpus-level falsehood that its own item has already corrected, so the two
disagree in print.

---

## A8. `deferred-measure-and-integration` page summary — "once normed spaces exist"

**Page:** `library/not-proved-here/deferred-measure-and-integration.md`
(published, order 1), lines 99–102.
**Raised by:** step-10a sweep. **Status: STAGED. Becomes false ON PUBLICATION.
Lowest priority of the eight.**

**Why.** The summary defers du Bois-Reymond's continuous function with a divergent
Fourier series and says it is

> … recorded as probably reachable here by the uniform boundedness route **once
> normed spaces exist**, and is waiting on a page rather than on a theory.

`frontier-1` mints `def-norm-and-normed-space` — "a norm on a real vector space,
the induced metric, and the dictionary with the metric axioms", order 167, stated
for an arbitrary real vector space and not only for $\mathbb{R}^n$. The stated
trigger is met, and the sentence's presupposition ("normed spaces do not exist
yet") is false.

**What is NOT thereby true.** The uniform-boundedness route needs a **complete**
normed space and Baire; the library has Baire on $\mathbb{R}$
(`cantor-set-baire-and-measure-zero`, order 133) and now has norms, but has no
Banach-space vocabulary and no Baire theorem for a general complete metric space
(`rem-baire-category-choice-strength` records that the general theorem is quoted,
not proved). **Do not upgrade the item to "now reachable".** The amendment updates
the trigger, nothing else.

**Edit.**

> … recorded as probably reachable by the uniform boundedness route now that norms
> exist ([[def-norm-and-normed-space]]), once the library also has the Baire
> theorem for a general complete metric space, and is waiting on a page rather than
> on a theory.

**If never applied.** A published page summary names a condition as future which
the same commit satisfies. Mild — nobody is misled about mathematics — but it is a
scope claim about the library's contents, which is the class this sweep exists for,
and it costs one line.

---

## Not staged, and why

**`lem-finite-sum-laws` is NOT amended by this build.** Beta-F1-2 needed
permutation invariance of a finite sum, which that published item does not have,
and minted `lem-finite-sum-permutation-invariance` as a new item on page 20
instead. That is deliberate: the same published item is the target of level 9's
**amendment 3, which the owner has not approved**, and a second concurrent edit to
it would have entangled two independent decisions.

### Already staged elsewhere — do NOT stage a second time

**`fs-continuous-bijection-is-a-homeomorphism`** ("Neither compactness nor the
Hausdorff property is defined in this library") is level-9 **amendment 8**, still
staged and unapplied. `frontier-1` does not change the correct text: the proposed
replacement is order-relative, the item is at order 249, general compactness lands
at 255 and `separation-axioms` at 261, so both remain later. **Re-check nothing;
apply level 9's wording as written.**

**`rem-lp-separability`** ("the metric spaces page, where separability is defined")
is level-9 **amendment 12**. `frontier-1` does not define separability, so that
amendment is unaffected. **But its closing warning is now confirmed**: it said "if
the prose promises a definition the library has decided not to mint, other
`deferred-*` items may promise the same thing" — **A6 above is that other item**,
on the same page, promising $C[a,b]$.

### Examined and REJECTED — checked against `research/plan-spec.json`, still true

Every one of these was read, not merely matched. The order of every page named was
verified against `plan-spec.json`; "position, not phrasing" is the rule that
retired most of them.

**Order-relative and the position checks out.**
`ex-integral-of-x-squared-from-the-definition` (order 160: "no fundamental theorem
of calculus … available at this point in the reading order" — the FTC page is 161,
later ✓) ·
`the-riemann-integral` page summary (159: "Linearity, additivity …, the mean value
theorem for integrals and the fundamental theorem of calculus are not **on this
page**" — page-scoped, and true ✓) ·
`series-and-nonnegative-tests` page summary and `rem-strength-order-of-the-nonnegative-tests`
(127: the integral test "cannot even be stated **at this point**" / "the Riemann
integral is developed much later" — 159/161, later ✓) ·
`ex-cantor-set-as-a-product` (252: "a continuous bijection from a compact space to
a Hausdorff space" not available — general compactness is 255, later ✓) ·
`fs-quotient-of-a-hausdorff-space-is-hausdorff`, `def-hereditary-property`,
`rem-constructions-this-page-stops-short-of` (251: separation axioms not available
at this point — 261, later ✓; and the heredity questions land at 265 ✓) ·
`subspaces-products-and-quotients-examples` (252: *separable* not defined at this
point ✓) ·
`linear-independence-bases-and-dimension` (74: cardinal arithmetic not available —
247, later ✓) ·
`lem-omega-least-limit-ordinal` ("Ordinal arithmetic is not developed **here** …
left to a later page" — the page is 245, later ✓) ·
`ex-canonical-choice-on-naturals` (11: `lem-pigeonhole` "on a later page" — it is
on order 18, later ✓; `frontier-1` does not move it) ·
`lem-sup-metric-is-a-metric` (116: "points at a later page" for uniform
convergence — `uniform-convergence-of-functions` is 169 ✓) ·
`ex-sup-metric-on-bounded-functions` (117: completeness and separability "questions
for later pages" — 169 and 273 ✓) ·
`compactness-in-metric-spaces-examples` (121: no integer part at this point ✓) ·
`ex-symmetries-of-a-square` (25: rigid motions of the plane not available ✓ —
`rn-as-a-normed-space` gives $\mathbb{R}^n$ a norm, not a rigid-motion group).

**Corpus-relative and still true after this build.**
`topological-spaces-and-continuity-examples`, `def-dense-top`, `ex-sorgenfrey-line`
("no item in this library defines *separable*") — **verified from disk:
`frontier-1` defines no separability**; `def-separated-sets` on page 261 says so
explicitly and separates the two words on purpose ·
`rem-suslin-hypothesis-independent` ("neither trees of height $\omega_1$ nor the
diamond principle is defined here" — neither is ✓) ·
`rem-l-spaces-and-s-spaces` ("hereditary separability, the Lindelöf property, walks
on ordinals" — none built ✓) ·
`rem-schechter-kelley-tychonoff` ("Neither Tychonoff's theorem nor either
equivalence is proved here" — `def-completely-regular-and-tychonoff-spaces` defines
the **separation axiom** called Tychonoff, an unrelated result; no product theorem
is proved ✓ — *this one is a near miss and was checked in full*) ·
`rem-du-bois-reymond-divergent-fourier`, `rem-egorov-theorem`, `rem-lusin-theorem`,
`rem-dominated-convergence-theorem` (all name "the uniform convergence page" and
"the approximation and compactness page" — orders 169 and 171, both **in the plan**
and both unbuilt, so these are promises about planned pages, not false presence
claims; "a Fourier series page … not yet planned" is correct, `plan-spec.json` has
no Fourier page) ·
`fs-pointwise-limit-of-riemann-integrable-is-integrable` (159: "uniform
convergence … neither is developed **here**" — page-scoped ✓).

**The borderline one, deliberately left alone.**
`rem-independence-of-ch-and-gch` (order 3) says GCH is stated "using the alephs and
beths that this library has not developed", and that "exponentiation of cardinals
and the aleph hierarchy do not [exist]". `frontier-1` defines
$\omega_1 := \aleph(\omega)$, which *is* $\aleph_1$ under another name, and defines
ordinal exponentiation. **It is still true as written**, and deliberately so: the
aleph **hierarchy** $\aleph_\alpha$ needs `cardinal-arithmetic-and-cofinality`
(247, unbuilt), cardinal exponentiation is not ordinal exponentiation, and the
build ships `rem-ordinal-versus-cardinal-exponentiation` saying exactly that
("Where the aleph subscript notation appears elsewhere in this library it is inside
a statement *about* cardinal arithmetic, never inside an ordinal computation").
**Flag it for the level that builds 247 — it falls then.**

### A DRAFT-TEXT finding, not an amendment — for Alpha, not for the owner

**The order-relative form protects a claim against LATER pages being built. It
does nothing when the page named is EARLIER.** That is the
`thm-countable-union-of-null-is-null` failure mode of LEVELS.md §10a, and one
draft item of this build is set up for it.

* `items/def-normal-and-t4-spaces.md` (draft, order 261) — "any witness reachable
  from the material here would need cardinal arithmetic or the hereditary behaviour
  of regularity, neither of which is available **at this point in the reading
  order**." Heredity is 265, later, so that conjunct is safe. **Cardinal arithmetic
  is 247 — earlier than 261.** The sentence is true today only because 247 is
  unbuilt, and it becomes false the day 247 is built, without a word of it
  changing. **Fix in the draft: it costs nothing now and becomes an amendment
  later.** The honest form is "needs cardinal arithmetic, on a page that is not
  built" — true regardless of position, and already the form the same build uses on
  `properties-of-the-integral-and-the-working-ftc` for Taylor's remainder.
* `items/rem-separation-axiom-conventions.md` — same pairing, but hedged as "neither
  of which is available **here**". Page-scoped, so it survives; listed so nobody
  re-litigates it, and because a reader takes the same wrong impression from it.
* `library/topology/separation-axioms-examples.md` page summary — "needs machinery
  that is not available at this point in the reading order", of the deleted
  Tychonoff plank. Its machinery is heredity/productivity at 265, later ✓. Fine;
  listed only so nobody re-checks it.

**One more, same category.** `ordinal-arithmetic`'s page summary says "no
prerequisite of this page supplies a natural-number exponentiation, so no agreement
is claimed for exponentiation, only closure". Literally true — the page's declared
prerequisites are `ordinals-and-transfinite-recursion` and
`countability-and-uncountability` — but `def-nat-power` now exists at order **20**,
far earlier in the reading order, so a reader arrives at 245 having met one. Either
declare page 20 as a prerequisite and prove the agreement, or say "no prerequisite
of this page" out loud rather than leaving it to be read as "the library has none".
Alpha's call; it is a scope statement, not an error.

---

## Forward-looking register: scope claims in THIS build's own drafts

**These are NOT defects.** Every sentence below is true today and is written in the
approved order-relative form or is explicitly page-scoped. They are recorded so the
next build's step-10a sweep can go straight to them instead of re-deriving the list,
and so that whoever builds each page named knows what falls when they do.

Rebuilt from the 212 draft items and 12 page files of `frontier-1` directly, since
the two step-8 reports were not available to this sweep.

**Falls when `darboux-lhopital-and-taylor` (155) is built** — 155 is **earlier**
than 161, so these decay the moment that page exists, and none of them may be
phrased as "later":
`properties-of-the-integral-and-the-working-ftc` page summary (Taylor's integral
remainder — correctly phrased as "a page that is **not built**, so the result is
unavailable here **whatever its position in the reading order**", which is the model
form and should be copied) ·
`properties-of-the-integral-and-the-working-ftc-examples` page summary (Darboux's
theorem "which this library does not have").

**Falls when `the-logarithm-and-general-powers` (177) is built:**
`ex-integral-test-applied-to-the-p-series` ("the primitive is the logarithm and
**this library has not built it**" — corpus-relative, **fix now**) ·
`properties-of-the-integral-and-the-working-ftc-examples` page summary (same
sentence, same fix) ·
`ex-gamma-and-its-complement-computed-for-a-plane-series` ("being a logarithm and
outside this page's reach" — page-scoped ✓) ·
`def-p-norms-on-rn`, `rem-rn-conventions-and-scope`, `ex-integral-test-applied-to-the-p-series`
(real exponents "do not exist at this point in the reading order" ✓, all three
citing `rem-real-exponents-deferred`).

**Falls when `cardinal-arithmetic-and-cofinality` (247) is built:**
`def-cofinal-subset-of-an-ordinal` ("They belong to a page on cardinal arithmetic
and cofinality that **this library has not built**") ·
`cex-omega-one-has-no-at-most-countable-cofinal-subset` ("Neither the cofinality
function nor the word regular is defined **in this library**") ·
`rem-ordinal-versus-cardinal-exponentiation` ("**It is not defined anywhere in this
library**, because the cardinal arithmetic that would support it **has not been
built here**") ·
`def-first-uncountable-ordinal` ("results of cardinal arithmetic this library does
not develop") ·
`rem-counting-conventions-and-scope` and `def-finite-cardinality` ("[[def-cardinal]]
is a later and different object" / "developed much later in the library" — these two
are order-relative and 247 is later than 20, so they **survive** ✓) ·
`thm-omega-one-is-the-least-uncountable-ordinal` ("Nothing here says $\omega_1$ is
regular, or computes its cofinality" — page-scoped ✓, survives) ·
`ordinal-arithmetic` page summary ("The cofinality *function* … and the
regular/singular vocabulary are not defined" — page-scoped ✓, survives).
**Four of the first five are corpus-relative and should be re-phrased before
publication.**

**Falls when `compactness` (255) is built** — note 255 is **earlier** than 261 and
283, so nothing here may say "later":
`def-locally-compact-metric-space` ("This library has no general topological
compactness **at this point in the reading order**" ✓) ·
`lem-tube-lemma-for-a-compact-metric-factor` (same form ✓) ·
`thm-the-exponential-law` ("this library defines compactness only for metric
spaces … no meaning **at this point in the reading order**" ✓) ·
`function-space-topologies` page summary ("not available at this point in the
reading order — the planned page carrying it sits *below* this one and is not yet
built, so no later page can supply it retroactively" — **checked and CORRECT**: 255
is below 283, and the sentence's own logic depends on that being so) ·
`rem-separation-axiom-conventions` ("the general one belongs to a page **below this
one** in the reading order … plus a home for it above the present one" — **checked
and CORRECT**, 255 below 261) ·
`rem-function-space-conventions` ("not developed anywhere in this library **at
present**" — corpus-relative with a temporal hedge; **fix now**) ·
`ex-dini-on-the-unit-interval` ("this page does not construct a witness" ✓).

**These two are worth reading before the next build's sweep.** They are the only
places in the corpus that state the *direction* explicitly ("below this one", "above
the present one") instead of relying on "later", and both are right. Copy the form.

**Falls when `hereditary-and-productive-separation` (265) is built:**
`cex-the-deleted-tychonoff-plank-is-not-normal` ("The classical use of this witness
is not made here" ✓) ·
`def-completely-normal-and-perfectly-normal-spaces` ("A frequently quoted
equivalent … is not proved here" ✓) ·
`rem-separation-axiom-conventions` ("Which of these axioms pass to subspaces and to
products is not asked here" ✓) ·
`separation-axioms-examples` page summary ✓. All page-scoped; all survive as
written. **Also: `def-hereditary-property` and `rem-constructions-this-page-stops-short-of`
(published, order 251) point *forward* at this material and stay true.**

**Falls when `urysohn-lemma-and-tietze` (267) is built:**
`thm-the-separation-implication-chain` and the `separation-axioms` page summary
("$T_4 \Rightarrow T_{3\frac12}$ … is Urysohn's lemma and is not available **at this
point in the reading order**" ✓ — 267 > 261) ·
`def-completely-regular-and-tychonoff-spaces` ✓ ·
`def-completely-normal-and-perfectly-normal-spaces` ✓ ·
`def-urysohn-space` ("Neither is **Urysohn's lemma** … not proved on this page at
all" ✓) ·
`thm-perfectly-normal-implies-completely-normal` ("Urysohn's lemma is not used" —
a statement about the proof, never decays ✓) ·
`rem-separation-axiom-conventions`. All correctly positioned.
**The one to watch is `rem-urysohn-lemma-not-a-zf-theorem` (PUBLISHED, order 3),
which instructs any future page proving Urysohn's lemma to record a choice
principle in `rem-choice-ledger`. That is an obligation, not a scope claim, and
page 267 inherits it.**

**Falls when `countability-axioms-and-cardinal-functions` (273) is built:**
`def-separated-sets` ("*Separable* … is **not used in this library at all**" —
corpus-relative, **fix now**) ·
`cex-compact-convergence-without-uniform-convergence` ("a topology is determined by
its convergent sequences only in a first countable space" — a mathematical fact, not
a scope claim ✓) ·
and, published, the three separability sentences level 9 already put on its watch
list (`def-dense-top`, `ex-sorgenfrey-line`,
`topological-spaces-and-continuity-examples` page summary). **When 273 lands,
separability gets a name and all six move at once.** This is the largest single
cluster in the register.

**Falls when `improper-integrals` (165) is built — POSITION VERIFIED, all correct:**
`thm-integral-test-for-series` ("This library has not defined $\int_0^{\infty} f$ **at
this point in the reading order**" ✓, 165 > 161) ·
`rem-integral-conventions-and-scope` ✓ ·
`ex-two-root-x-and-its-unbounded-derivative` ("belongs to a later page" ✓, 165 > 162) ·
`properties-of-the-integral-and-the-working-ftc` and `-examples` page summaries ✓.

**Falls when `sine-cosine-and-the-definition-of-pi` (179) is built — POSITION
VERIFIED, all correct:**
`cex-mean-value-equality-fails-for-a-vector-valued-function` ("introduced **later in
the reading order** than this page" ✓, 179 > 168) ·
`rn-as-a-normed-space-examples` page summary (same ✓) ·
`properties-of-the-integral-and-the-working-ftc-examples` page summary
("trigonometric functions this library does not **yet** have" ✓, 179 > 162).
