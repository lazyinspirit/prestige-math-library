# Level 9, mixed batch 2 — scaffold notes (Beta-9-2, steps 1 and 2)

Pages scaffolded: order 24 `primes-and-the-fundamental-theorem-of-arithmetic`
(18 items), order 25 its companion (9 items), order 70
`linear-independence-bases-and-dimension` (20 items), order 71 its companion
(8 items). Item lists live in `research/level9-mixed-batch-2.pages.json`.

Gates run against a SPLICED copy of `research/plan-spec.json` held outside the
repo (I may not write the spec):

- `node tools/validate-plan.mjs <spliced>` — **0 errors**, 11 warnings, all
  `redundant-prereq` and 10 of them pre-existing. See amendment C4 for the one
  that touches this batch.
- `node tools/depsource.mjs <spliced>` — **0 unresolved, 0 planned-later** for
  all four pages; every external dependency resolves to a published item on
  disk or to an earlier page inside this batch. **No forward references were
  kept anywhere in this batch.**

---

## A. Amendments to `research/plan-algebra-track.md`, block NT-2 (line 589)

### A1. The √2 trap is FALSE on disk — the item already exists

OLD (in the "Traps." paragraph of NT-2):

> Check whether the irrationality of $\sqrt{2}$ exists anywhere —
> `ex-sqrt-two-exists` gives existence in $\mathbb{R}$, not irrationality —
> and if not, this page is its natural home, since it is a one-line consequence
> of unique factorisation.

NEW:

> The irrationality of $\sqrt{2}$ **already exists and is published**:
> `fs-sqrt2-rational`, "FALSE: some rational number squares to 2", is homed on
> BOTH R-construction pages (orders 7 and 8) and is proved there by parity
> alone, with `deps: [def-rationals, thm-rat-field]` and nothing else. The title
> of `ex-sqrt-two-exists` likewise reads "…and is irrational". So this page must
> NOT mint a second item for that statement. What it mints instead is the
> genuine generalisation, `cor-rational-root-of-an-integer-is-an-integer`: a
> rational $x$ with $x^{k} = m$ for an integer $m$ is an integer. Its Remarks
> record that `fs-sqrt2-rational` is the case $k = m = 2$ and that the two
> agree — a dictionary obligation, kept in Remarks so it needs no `deps` entry.

### A2. Strong induction — CHECKED, it is published

OLD:

> Check whether **strong induction** is published or must be minted here;
> ordinary induction is (`thm-induction-principle`).

NEW:

> **CHECKED: `thm-strong-induction` is published**, homed on
> `construction-of-the-natural-numbers` (order 6), and page 22 already cites it
> in `thm-euclidean-algorithm` and `cor-extended-euclidean-bezout-coefficients`.
> Its Statement is the full-strength form ("if $P(m)$ for all $m < n$ then
> $P(n)$", with the $n = 0$ case noted as vacuous), so the existence half of the
> fundamental theorem uses it directly and mints nothing.

### A3. Which power operation the $p$-adic valuation uses — DECIDED

Add to the "Traps." paragraph of NT-2:

> **$p^{k}$ is the MONOID power of `def-group-power`, not `def-integer-power`.**
> `def-integer-power` (order 16) is stated for "$a \in \mathbb{R}$, where
> $\mathbb{R}$ is the ambient ordered field", so using it would drag the whole
> real construction into a statement about $\mathbb{Z}$. `def-group-power`
> (order 20) defines $g^{n}$ for natural $n$ **in a monoid**, and
> `lem-units-of-z` (order 22) proves $(\mathbb{Z},\cdot,1)$ IS a commutative
> monoid — that pairing is what makes $p^{k}$ legitimate at order 24. The
> exponent law $p^{j+k} = p^{j}p^{k}$ for natural exponents is available from
> `lem-group-power-laws`, whose Statement says in as many words that "claims 1
> and 3 hold in any monoid for exponents in $\mathbb{N}$" and whose step 2.1
> concludes "by induction, $g^{m+n} = g^{m}g^{n}$ for all $m, n \in \mathbb{N}$,
> in any monoid". I verified that step on disk; it is not a bare assertion in a
> Statement.

### A4. No infinite indexed product exists at order 24

Add to the "Traps." paragraph:

> **$n = \prod_p p^{v_p(n)}$ cannot be written literally.** `def-monoid-finite-product`
> is the product of a **finite list**; the library has no finitely-supported
> product over an infinite index set at any order. So
> `thm-canonical-prime-factorisation` quantifies over a finite INJECTIVE list of
> primes covering the prime divisors of $n$ and adds the clause "$v_q(n) = 0$
> for every prime $q$ off the list". The familiar notation is an abbreviation
> for exactly that, and the item's Remarks say so.

### A5. No factorial on $\mathbb{Z}$ exists — the prime-gaps example must not mint one

Add to the "Traps." paragraph:

> **There is no integer factorial in this library.** The only $k!$ on disk is
> introduced inside the Statement of `lem-factorial-beats-geometric` as a
> product in $\mathbb{R}$ via `def-finite-sum` — a different object on a
> different page. Minting `def-int-factorial` here would create a dictionary
> obligation this page cannot discharge, so the arbitrarily-long-prime-gaps
> example uses $N := \prod_{j<n} \iota(j+2)$ (the finite product of
> $2, 3, \dots, n+1$ in $(\mathbb{Z},\cdot,1)$) instead of $n!$, and gets the
> same $n$ consecutive composites $N+2, \dots, N+n+1$. **A dropped item, not a
> deleted one**: an integer factorial is wanted by order 40
> (`symmetric-groups-and-the-sign-homomorphism`, for $|\operatorname{Sym}(n)|$)
> and is the natural home for the dictionary against the real factorial.

### A6. The B-page list, as scaffolded

OLD:

> B page: why the theorem fails if $1$ is called prime; $2$ is the only even
> prime; **the Hilbert monoid** … ; arbitrarily long prime gaps from
> $n! + 2, \dots, n! + n$; a false-statement item on $n^2 + n + 41$ being prime
> for every natural $n$ (true for $n < 40$, false at $n = 40$).

NEW:

> B page, nine items as scaffolded: a worked factorisation of $360$ and $84$
> with $\gcd$ and $\operatorname{lcm}$ read off the exponents and cross-checked
> against the Euclidean algorithm; $2$ is the only even prime; three instances
> of the rational-root corollary ($\sqrt 3$, $\sqrt 6$, $\sqrt[3]{2}$);
> arbitrarily long runs of composites, **without a factorial** (A5); the Hilbert
> monoid $\{1,4,7,10,\dots\}$ with $100 = 4 \cdot 25 = 10 \cdot 10$; calling $1$
> prime destroys uniqueness; and three false statements — that
> $p_0 \cdots p_{n-1} + 1$ is prime ($30031 = 59 \cdot 509$, the standard
> misreading of Euclid's theorem), that $n^2 + n + 41$ is always prime (fails at
> $n = 40$), and that every Fermat number is prime ($641 \mid 2^{32} + 1$, by
> Euler's $641 = 5 \cdot 2^{7} + 1 = 2^{4} + 5^{4}$ argument written out as
> divisibility, since congruence notation only arrives at order 26).
> `cex-divides-a-product-without-dividing-a-factor` is **already published** on
> the order-23 B page and is exactly the gap Euclid's lemma closes; the B page
> must not duplicate it, and the A page's `thm-euclids-lemma` should reference
> it in prose as the thing primality repairs.

---

## B. Amendments to `research/plan-algebra-track.md`, block LA-2 (line 1329)

### B1. "$F^m \cong F^n$ iff $m = n$" — DROPPED, and where it goes

OLD (last clause of the LA-2 content list):

> …**every vector space has a basis** (Zorn, cited from
> `order-zorn-and-the-axiom-of-choice`); $F^m \cong F^n$ iff $m = n$.

NEW:

> …**every vector space has a basis** (Zorn, cited from
> `order-zorn-and-the-axiom-of-choice`). **$F^{m} \cong F^{n}$ iff $m = n$ is
> DROPPED from this page**: isomorphism of vector spaces requires a linear map,
> and `def-linear-map` is LA-3 at order **72**, two pages above this one. What
> this page supplies instead is `lem-standard-basis-of-f-n`
> ($\dim_F F^{n} = n$), from which LA-3 gets the statement in one line once
> "isomorphic spaces have equal dimension" is available there. **Deferred, not
> deleted — LA-3 inherits it.**

### B2. The infinite-dimensional case — DECIDED: dropped, not restated in $\approx$ language

The existing trap paragraph offers two options ("either state the infinite case
as 'any two bases are equinumerous' in the $\approx$ language of
`def-equinumerous` … or drop the infinite case"). **Decision: DROP.** Replace
the sentence beginning "Step 1 for LA-2 must either state" with:

> **DECIDED at level 9, batch 2: the infinite case is DROPPED.** The $\approx$
> option is not actually reachable. The Steinitz/Zorn argument gives invariance
> only in the finite case; the infinite case needs $|B \times \mathbb{N}| = |B|$
> for infinite $B$, which is cardinal arithmetic, and `def-cardinal` is homed on
> `ordinals-and-transfinite-recursion` at order 183. So
> `thm-any-two-finite-bases-have-the-same-size` claims exactly its title,
> `def-dimension` defines $\dim_F V$ only for a space with a finite basis, and
> "infinite-dimensional" is defined as the pure negation with **no cardinal
> attached** — never $\dim V = \infty$. **What would license the restoration:**
> the cardinal arithmetic of order 183, or a cardinal-free basis-exchange
> argument for infinite sets. **Deferred, not deleted.** The companion page
> carries `cex-proper-subspace-with-an-equinumerous-basis`, which is the honest
> substitute: it compares two specific bases through an explicit bijection and
> assigns no dimension to either space.

### B3. B page: $\{1, x, x^2, \dots\}$ for $F[x]$ — DROPPED again, and why the LA-1 inheritance fails

OLD (LA-2 B-page list):

> B page: the standard basis of $F^n$; $\{1, x, x^2, \dots\}$ for $F[x]$;
> $\mathbb{R}$ over $\mathbb{Q}$ has an infinite basis and no explicit one
> (Hamel, …); an infinite independent set that spans nothing; a spanning set
> that is not a basis.

NEW:

> B page, eight items as scaffolded. Three corrections to the old list:
>
> - **$\{1, x, x^{2}, \dots\}$ for $F[x]$ is DROPPED.** The LA-1 note names
>   LA-2's B page as "the natural inheritor" of this item, and that inheritance
>   **cannot be discharged yet**: `polynomial-rings-and-roots` is order 48,
>   which is earlier than 70 in plan order but **has an empty item list**, so
>   $F[x]$ does not exist as an object anywhere on disk and any dependency on it
>   would be `unresolved`, not `planned-earlier`. **What would license it:**
>   authoring order 48. **Deferred, not deleted** — and the inheritance note in
>   the LA-1 block should be re-pointed at whichever B page above order 48 is
>   built first.
> - **"the standard basis of $F^{n}$" MOVES TO THE A PAGE**, as
>   `lem-standard-basis-of-f-n`. It is not an example: $\dim_F F^{n} = n$ is a
>   result the A page states and later pages (74 onwards) will need, and **B
>   pages are leaves**, so nothing outside them may depend on an item homed
>   there. The B page keeps the concrete half,
>   `ex-coordinates-depend-on-the-ordered-basis`.
> - **"an infinite independent set that spans nothing" is mathematically wrong
>   as written** — every set spans something, namely its span. Corrected to
>   `cex-independent-set-that-does-not-span`: the standard unit families are
>   independent in $F^{\mathbb{N}}$ and do NOT span it, the constant family $1$
>   being no finite linear combination of them.
>
> The remaining six: coordinates depend on the ORDERED basis; an explicit
> infinite basis for the eventually zero families, built with no choice
> principle; the Hamel basis of $\mathbb{R}$ over $\mathbb{Q}$, **without** the
> withdrawn non-measurable clause; a spanning set that is not independent; a
> proper subspace with a basis equinumerous with one of the whole space; the
> inclusion–exclusion analogue of the dimension formula failing for three
> subspaces; and the false statement that a union of independent sets is
> independent.

### B4. B-page leaf hygiene — a trap the gate cannot catch here

Add to the LA-2 "Traps." paragraph:

> **Page 71 may not depend on page 69.** `ex-r-as-a-vector-space-over-q`,
> `ex-sequence-space-and-eventually-zero-subspace` and
> `cex-pairwise-trivial-intersection-is-not-a-direct-sum` all live on
> `vector-spaces-and-subspaces-examples`, order 69, **a B page**, and B pages
> are leaves: nothing outside them may depend on them. `validate-plan`'s
> `b-leaf` check **cannot see this**, because those three items are already
> published on disk and the check short-circuits on `existing.has(d)` before it
> ever looks at the home page. So page 71 rebuilds each one-line setup natively
> (restriction of scalars from `lem-restriction-of-scalars` at order 68; the
> eventually zero subspace from `lem-linear-subspace-criterion`) and records the
> agreement with the order-69 example **in Remarks only, with no `deps` entry**.
> This is exactly the failure the last level shipped.

---

## C. Amendments to PUBLISHED items and pages — owner-gated

### C1. `items/rem-choice-ledger.md` — a published claim that order 70 FALSIFIES

The ledger currently says, under "Equivalent to the Axiom of Choice over ZF":

> - **Every vector space has a basis.** The implication from the Axiom of Choice
>   is a routine application of Zorn's lemma; the converse is a hard theorem of
>   Blass, 1984. Neither direction is proved here, and no item derives either, so
>   both are quoted on the authority of the references. The equivalence itself is
>   recorded in the library, in [[rem-hahn-banach-hamel-basis-open]], where it
>   fixes the upper endpoint of an open question about the strength of
>   Hahn-Banach.

"Neither direction is proved here, and no item derives either" becomes **false**
the moment `cor-every-vector-space-has-a-basis` (order 70) publishes. Proposed
replacement:

> - **Every vector space has a basis.** The implication from the Axiom of Choice
>   is a routine application of Zorn's lemma, and it **is** proved here, in
>   [[cor-every-vector-space-has-a-basis]] by way of
>   [[thm-every-independent-set-extends-to-a-basis]]. The converse is a hard
>   theorem of Blass, 1984, which is **not** proved here and is quoted on the
>   authority of the references. The equivalence itself is recorded in the
>   library, in [[rem-hahn-banach-hamel-basis-open]], where it fixes the upper
>   endpoint of an open question about the strength of Hahn-Banach.

Notes for whoever applies it: `rem-choice-ledger` is homed on
`ordinals-and-transfinite-recursion`, **order 183**, so the new wikilinks point
BACKWARD (70 → 183) and create no forward reference and no cycle; they must be
added to that item's `deps`. It carries a `judge` block (glm-5.2, 2026-07-25)
and a `verified` block; a `rem-` item IS its prose, so per SCHEMA §3 this is a
material rewrite and **the `judge` block must be DELETED**, not left standing.
Order 183 is unauthored beyond its 23 items, so this edit can wait, but it must
not be forgotten — this is the published-claim-decay class, and no gate sees it.

### C2. `items/ex-p-adic-ultrametric.md` — two decayed scope-denial claims

Order 24 makes Euclid's lemma and the general $p$-adic valuation available at
order 24; `ex-p-adic-ultrametric` is homed on `metric-spaces`, **order 102**.
Two passages become misleading. Both are the "scope-denial claims that decay"
defect class.

**(i) In `## Example`.** OLD:

> **Why $p = 2$ and not a general prime.** The general $p$-adic valuation needs
> primality and unique factorisation in $\mathbb{Z}$, neither of which this item
> develops or assumes.

NEW:

> **Why $p = 2$ and not a general prime.** The general $p$-adic valuation needs
> primality and unique factorisation in $\mathbb{Z}$, which are developed at
> order 24 ([[def-p-adic-valuation]], [[thm-euclids-lemma]],
> [[lem-p-adic-valuation-on-q]]) and are therefore available here; this item
> nevertheless develops the case $p = 2$ from parity alone, so that the
> ultrametric geometry below rests on nothing but the discreteness of
> $\mathbb{Z}$.

**(ii) The final Remark.** OLD:

> - **The general $p$-adic absolute value is not available here.** Its
>   well-definedness needs the primality of $p$ in the form of Euclid's lemma,
>   that $p$ dividing a product divides one of the factors, which this item does
>   not establish and does not assume. At $p = 2$ the statement doing the same
>   work is that a product of odd integers is odd, proved in step 1.3 above by a
>   one-line ring computation.

NEW:

> - **The general $p$-adic absolute value, and what this item does instead.**
>   Its well-definedness needs the primality of $p$ in the form of Euclid's
>   lemma, that $p$ dividing a product divides one of the factors. That is
>   [[thm-euclids-lemma]], and the resulting valuation on $\mathbb{Q}^{\times}$
>   is [[lem-p-adic-valuation-on-q]], both at order 24 and both available here.
>   This item deliberately does not use them: at $p = 2$ the statement doing the
>   same work is that a product of odd integers is odd, proved in step 1.3 above
>   by a one-line ring computation, so the whole development below is
>   self-contained from parity.

Notes for whoever applies it: the item's `deps` must gain
`thm-euclids-lemma`, `def-p-adic-valuation` and `lem-p-adic-valuation-on-q`
(order 24 → order 102, backward, no cycle). It currently carries **no** `judge`
block — one was removed on 2026-07-27 for exactly this kind of Remarks
correction — so only `verification.audited` needs refreshing.

**Do NOT apply C2 before order 24 is published**, or the wikilinks dangle.

### C3. `items/def-ring-characteristic.md` — CHECKED, NOT falsified, no amendment

Its closing Remark reads:

> - **A further property of the characteristic of an integral domain is not
>   stated here.** Stating it requires the notion of a prime number, and no
>   definition on this page, nor in any item this page cites, introduces that
>   notion; so the statement is not made here. It is taken up on a later page,
>   where primes are available, and what it needs from this page is
>   [[lem-characteristic-and-additive-order]].

**This stays true and needs no edit**, but it is NOT discharged by order 24 and
cannot be. `def-ring-characteristic` is homed on
`rings-subrings-and-integral-domains`, **order 42**; "the characteristic of an
integral domain is $0$ or prime" is a statement about an integral domain, and
`def-ring` / `def-integral-domain` are order 42, **eighteen pages above** order
24. Order 24 may not use the word "ring". The claim's own justification ("no
definition on this page, nor in any item this page cites, introduces that
notion") also survives, because page 42's items do not cite page 24.

**The obligation therefore passes to the first page above order 42 that has
primes**, i.e. order 44 `ideals-and-quotient-rings` or order 46
`euclidean-domains-pids-and-unique-factorisation`; order 46 is the better home,
since it is where prime and irreducible elements of a domain are defined and
where the dictionary against `def-prime` belongs. **Recommend recording this in
the plan-spec note for order 46 at step 4.** Nothing in this batch discharges
it and nothing in this batch pretends to.

### C4. `research/plan-spec.json`, page 70 `requires` — a WARN worth a decision

`validate-plan` warns:

> [redundant-prereq] page linear-independence-bases-and-dimension requires
> order-zorn-and-the-axiom-of-choice directly, but already reaches it through
> vector-spaces-and-subspaces

This is pre-existing (I did not touch `requires`). The house rule keeps
`requires` a transitive reduction, which argues for deleting the entry; against
it, Zorn is a **direct and load-bearing** dependency of
`thm-every-independent-set-extends-to-a-basis`, and deleting it hides the one
page-level fact a reader most wants to know about this page. Either resolution
is defensible; the scaffold works unchanged under both. **Orchestrator's call.**

---

## D. Authoring notes with no scaffold anchor

These reach the step-5 author through the per-item `strategy` fields, but the
four that cut across a whole page are collected here.

### D1. Page 24 — `lem-coprime-divides-product` is the whole of Euclid's lemma

Page 22 proved `lem-coprime-divides-product` ("If $\gcd(a,b) = 1$ and
$a \mid bc$ then $a \mid c$") deliberately **without any primality**, from
Bézout alone. `thm-euclids-lemma` is therefore two lines: convert $p \nmid a$
into $\gcd(p,a) = 1$ (`lem-prime-not-dividing-is-coprime`), then instantiate
that lemma with **its** $a := p$, $b := a$, $c := b$. Do not re-derive Bézout,
and say in Remarks that page 22 set this up on purpose — that is the seam, and
page 22's summary already promises it ("Primes, Euclid's lemma and unique
factorisation are **not** proved here; they belong to a later page"). That
promise is **discharged in full and needs no amendment**.

### D2. Page 24 — the $\gcd$ agreement item is mandatory, not decorative

`thm-gcd-and-lcm-from-valuations` exists to stop the page introducing a rival
$\gcd$ by the back door (the level-7 two-notions-of-open defect). It must be
proved through clause 2 of `cor-common-divisor-divides-gcd` — the
characterisation "$d \ge 0$, $d \mid a$, $d \mid b$, and every common divisor of
$a$ and $b$ divides $d$" — and NOT by showing the exponent-wise construction is
"a" greatest common divisor and stopping. Min and max of two naturals come from
the totality of `thm-nat-linear-order`; **`def-max-min` is stated for reals and
must not be cited**.

### D3. Page 70 — the finite-sum toolkit already exists; do not rebuild it

`def-sum-of-linear-subspaces` (order 68) proves three facts about finite sums of
vectors and says outright that it collects them "because the lemmas below need
all three": **(F1)** the all-zero list sums to $0_V$; **(F2)**
$\lambda\sum u_i + \sum w_i = \sum(\lambda u_i + w_i)$; **(F3)** extracting one
term, $\sum_{i<n} u_i = u_j + \sum_{i<n} u^{(j)}_i$. Every rearrangement on page
70 — the injectivity argument, the solve-for-$v_j$ step, the coordinate
subtraction, the Steinitz exchange — is one of those three. Cite them. This is
the level-8 failure mode where two items silently planned to rebuild the
Euclidean metric inline; a dep gate cannot see a dependency nobody declared.

### D4. Page 70 — the injectivity clause in `def-linear-independence`

`def-linear-combination-and-span` indexes a linear combination by an arbitrary
list $v : n \to S$, which need **not** be injective. If the subset definition of
independence quantified over all such lists, $1_F v + (-1_F) v = 0_V$ would make
every nonempty set dependent. So the subset definition quantifies over
**injective** lists, and `lem-independent-list-is-injective` shows this costs
nothing for lists — the vanishing condition forces a list to be injective by
itself. Both halves must be written down; this is the single most likely place
for the page to ship a false definition.

### D5. Page 70 — Zorn's empty chain

`thm-zorn` as published requires "every chain has an upper bound", with no
nonemptiness clause. In `thm-every-independent-set-extends-to-a-basis` the
poset is $\{A : L \subseteq A \subseteq S, A$ independent$\}$, and the union of
the **empty** chain is $\varnothing$, which need not contain $L$. The empty
chain's upper bound is $L$ itself, and that case must be stated separately. It
is a 30-second gap for a human and a genuine hole in a machine-checked proof.

### D6. Landmarks (owner: do not trim)

Page 24: `def-prime`, `thm-euclids-lemma`, `thm-fundamental-theorem-of-arithmetic`,
`thm-euclid-infinitude-of-primes`, `def-p-adic-valuation`,
`thm-gcd-and-lcm-from-valuations`.
Page 70: `def-linear-independence`, `def-linear-basis`,
`thm-unique-coordinates-with-respect-to-an-ordered-basis`,
`thm-steinitz-exchange`, `thm-any-two-finite-bases-have-the-same-size`,
`def-dimension`, `thm-every-independent-set-extends-to-a-basis`,
`cor-every-vector-space-has-a-basis`, `thm-dimension-formula`.

### D7. Naming decision: `def-linear-basis`, taken deliberately

The bare id `def-linear-basis` is free. The library's other basis is
`def-topology-basis-subbasis` (order 185), which already carries the alias
`def-basis-top`, so the topological notion is namespaced and no collision
arises. This is a weaker case than the LA-1 `def-linear-subspace` decision,
where the competing id `def-subspace` was free and un-namespaced. **If the
orchestrator prefers strict symmetry with LA-1, the alternative is
`def-linear-basis`, and it must be decided BEFORE step 4 splices, because ids
are immutable on `main`.** `def-dimension` is free and unambiguous on the same
grounds (Hausdorff and covering dimension would be `def-hausdorff-dimension`
and `def-covering-dimension`).

### D8. Nothing in this batch depends on a `proved_here: false` item

No `external_refs` entry, no ‡ dependency, and no forward reference anywhere in
the four pages. The one place the temptation arises is
`cor-every-vector-space-has-a-basis`, where the Blass converse is a real and
relevant fact: it is recorded in **plain prose with a `sources.references`
entry, no wikilink and no `external_refs`**, so it is orientation and not a
dependency. `rem-banach-no-countable-hamel-basis` (which is **still `status:
draft`**) and `rem-hahn-banach-hamel-basis-open` are both `proved_here: false`
and are explicitly forbidden to `ex-hamel-basis-of-r-over-q` in its strategy.
