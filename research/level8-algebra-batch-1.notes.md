# Level-8-algebra batch 1 — scaffold notes (Beta-8-1, 2026-07-27)

Pages scaffolded, all six in one batch:

| order | kind | id | items |
|---|---|---|---|
| 22 | A | `divisibility-gcd-and-bezout` | 25 |
| 23 | B | `divisibility-gcd-and-bezout-examples` | 9 |
| 42 | A | `rings-subrings-and-integral-domains` | 26 |
| 43 | B | `rings-subrings-and-integral-domains-examples` | 10 |
| 68 | A | `vector-spaces-and-subspaces` | 17 |
| 69 | B | `vector-spaces-and-subspaces-examples` | 8 |

Final page objects: `research/level8-algebra-batch-1.pages.json`.

**Gates I actually ran**, against a spliced copy of `research/plan-spec.json`
written to my scratchpad (the repo's spec was not touched):

- `node tools/validate-plan.mjs <spliced>` — **exit 0, no errors.** Warnings 12 →
  17; all five new ones are `redundant-prereq` and all five follow from the two
  new intra-batch prerequisite edges recorded below. No `size` warning: the
  largest page is 26 items.
- `node tools/depsource.mjs <spliced>` — **exit 0.** Across the six pages: 545
  external deps, **0 unresolved, 0 homeless, 0 draft-page, 0 planned-later**.
  Per page — 22: 114 published, 0 planned-earlier. 23: 35 published, 55
  planned-earlier. 42: 104 published, 2 planned-earlier. 43: 49 published, 54
  planned-earlier. 68: 51 published, 1 planned-earlier. 69: 28 published, 52
  planned-earlier.

**Zero forward references in this batch**, in `deps` or in `forward_refs`.

**Two new prerequisite edges**, both inside this batch and both load-bearing:

- **42 requires 22.** `lem-characteristic-and-additive-order` states
  "$n \cdot 1_R = 0$ exactly when $\operatorname{char}(R) \mid n$", which is the
  divisibility relation of `def-divides-in-z`. Those are the two `planned-earlier`
  deps depsource reports on page 42. Page 43 then reuses `lem-units-of-z` for
  $\mathbb{Z}^{\times} = \{1,-1\}$ instead of re-deriving it from the order.
- **68 requires 42.** `lem-restriction-of-scalars` needs `def-subfield`, which is
  ring-page material. That is the single `planned-earlier` on page 68, and it is
  the answer to the brief's §8 question under the new numbering: pages 42 and 68
  do connect, twice — once load-bearing through `def-subfield`, once as a
  Remarks-only dictionary link from `def-function-space` to `def-ring-of-functions`.

**A splice instruction, not an amendment.** `LEVELS.md` §4 says the splice takes
the union of `requires`. That is correct for all six pages here; nothing in this
batch needs a `requires` entry *removed*. (Page 69 already lost its
`polynomial-rings-and-roots` edge in the live spec; do not reintroduce it.)

Owner-decision items live in my report, not here. Everything below is either
(1) an exact applyable edit to `research/plan-algebra-track.md`, or (2) an
authoring-time note with no scaffold anchor that must reach the step-5 author.

---

## 1. Prose-scaffold amendments (apply to `research/plan-algebra-track.md`)

### 1.1 NT-1 audit block (new)

**Section:** `## NT-1. Divisibility, Greatest Common Divisors and Bézout's Identity  (order 22)`
**Edit:** insert immediately after the `requires:` line and its following blank
line:

```
**Level-8-algebra audit, 2026-07-27 (batch 1).** Six notes bind authoring of
this page pair. (1) ABSOLUTE VALUE ON $\mathbb{Z}$ IS NOT PUBLISHED. Verified
from disk: `def-abs-value` is stated for an ORDERED FIELD and $\mathbb{Z}$ is
not a field, so it does not apply, and citing it for $\mathbb{Z}$ would be the
library's dominant defect class. Page 20's published summary independently
confirms the gap ("No absolute value on $\mathbb{Z}$ is needed and none is
used"). The general form — absolute value on an ordered RING — is not an
option either, since `def-ordered-ring` is order 42, fourteen pages above.
NT-1 therefore mints a $\mathbb{Z}$-specific `def-int-abs` and
`lem-int-abs-properties`, and records in Remarks — not as a numbered claim —
that the two agree along the order-preserving embedding `lem-int-embeds-rat`.
(2) DIVISIBILITY IS ALREADY DEFINED, inside the Statement of the published
`thm-division-algorithm-in-z` ("we say $b$ divides $a$ ... when $a = qb$ for
some $q$"), and the published `lem-order-characterisation` already quotes it.
**This is a published instruction, not a preference**: page 20's summary says
"the systematic theory of divisibility belongs to a later page, which must
record that its general notion restricts to this one rather than introduce a
second silently", and page 22 IS that later page. `def-divides-in-z` therefore
states the SAME relation, cites that theorem as its source and records the
restriction; it is a dictionary item, not new vocabulary, and presenting it as
new would be the level-7 two-notions defect at the bottom of the library.
Page 20's summary also states that page deliberately has "no greatest common
divisor, since nothing here needs one", so there is no collision to manage.
(3) THE SEAM PARAGRAPH BELOW WAS WRONG AND IS CORRECTED: AA-1 does NOT have the
subgroups of $\mathbb{Z}$ available for citation. `ex-subgroups-of-the-integers`
is on `monoids-groups-and-subgroups-examples`, a **B page** at order 21, and B
pages are leaves (`validate-plan`'s `b-leaf`). NT-1 therefore proves
`lem-subgroups-of-z-are-cyclic` on its own spine and records the agreement with
the published example in Remarks. The same prohibition covers
`ex-integers-under-addition`, from which $\mathbb{Z}^{\times} = \{1,-1\}$ must
NOT be cited; `lem-units-of-z` proves it here. (4) THE GREATEST ELEMENT IS NOT
FREE. Well-ordering gives a LEAST element of a set of naturals; obligation #26
needs a GREATEST element of a set of integers bounded above, and nothing
published supplies it. NT-1 mints `lem-int-bounded-above-has-greatest`, which
is general infrastructure homed here only because this is the first page that
needs it. (5) THE DIVISION ALGORITHM IS STATED FOR $b > 0$ ONLY. Every use of
it on this page — Bézout, the Euclidean step, the subgroup classification —
must reduce to a positive divisor first, which is exactly why note 1's absolute
value is not a convenience. (6) NO FINITE CARDINAL ARITHMETIC IS NEEDED OR USED
on this page pair; nothing here counts anything. AA-2 at order 28 is where that
gap bites, and it is recorded in AA-2's own traps.
```

### 1.2 NT-1 inventory — replace

**Section:** `## NT-1. …`, the inventory paragraph.
**Old text:**
```
**Divisibility** $d \mid a$ in $\mathbb{Z}$; reflexivity, transitivity, and
linearity ($d \mid a$ and $d \mid b$ imply $d \mid ax + by$); the bound
$d \mid a$ with $a \ne 0$ implies $|d| \le |a|$; the units of $\mathbb{Z}$ are
exactly $\pm 1$; **associates**. **Common divisor**; **greatest common divisor**
$\gcd(a,b)$ (well-definedness #26, below); **Bézout's identity**, that
$\gcd(a,b)$ is the least positive element of $\{ax + by\}$, proved from
`thm-well-ordering-principle` and `thm-division-algorithm-in-z`; the corollary
that every common divisor **divides** the gcd, so the gcd is greatest in the
divisibility order and not merely in the usual one; the **Euclidean algorithm**
$\gcd(a,b) = \gcd(b, r)$ with termination by well-ordering, and its extended
form producing Bézout coefficients; **coprime**, with the criterion
$\gcd(a,b) = 1 \iff \exists x, y\ (ax + by = 1)$; $\gcd(ca, cb) = |c|\gcd(a,b)$
and $\gcd(a/d, b/d) = 1$ for $d = \gcd(a,b)$; **lcm**, and
$\gcd(a,b) \cdot \operatorname{lcm}(a,b) = |ab|$.
```
**New text:**
```
**Absolute value on $\mathbb{Z}$**, minted here (audit note 1), with its
properties. **Divisibility** $d \mid a$ in $\mathbb{Z}$, stated as the relation
the published `thm-division-algorithm-in-z` already introduces (audit note 2);
reflexivity, transitivity, and linearity ($d \mid a$ and $d \mid b$ imply
$d \mid ax + by$); the bound $d \mid a$ with $a \ne 0$ implies $|d| \le |a|$;
$(\mathbb{Z},\cdot,1)$ is a commutative monoid whose group of units is
$\{1,-1\}$, obtained from the published `lem-monoid-units-form-a-group` and not
from the B-page `ex-integers-under-addition`; **associates**, with the three
equivalent forms and the fact that they are the classes of an equivalence
relation in the sense of `def-equivalence-relation`. **A nonempty set of
integers bounded above has a greatest element** (audit note 4). **Common
divisor**; **greatest common divisor** $\gcd(a,b)$ (well-definedness #26,
below), with the convention $\gcd(0,0) = 0$ stated where $\gcd$ is defined; the
basic values $\gcd(a,b) = \gcd(|a|,|b|)$, $\gcd(a,0) = |a|$, $\gcd(a,1) = 1$;
**Bézout's identity**, that $\gcd(a,b)$ is the least positive element of
$\{ax + by\}$, proved from `thm-well-ordering-principle` and
`thm-division-algorithm-in-z`; the corollary that every common divisor
**divides** the gcd, so the gcd is greatest in the divisibility order and not
merely in the usual one, and that this characterisation is the one that survives
at $(0,0)$; the **Euclidean algorithm** $\gcd(a,b) = \gcd(b, r)$ with
termination by strong induction, and its extended form producing Bézout
coefficients; **coprime**, with the criterion
$\gcd(a,b) = 1 \iff \exists x, y\ (ax + by = 1)$; **the coprime divisibility
lemma**, that $\gcd(a,b) = 1$ and $a \mid bc$ force $a \mid c$, minted here
because it needs Bézout and no primality at all, and because it is what makes
NT-2's Euclid's lemma one line; $\gcd(ca, cb) = |c|\gcd(a,b)$ and
$\gcd(a/d, b/d) = 1$ for $d = \gcd(a,b)$; **lcm**, and
$\gcd(a,b) \cdot \operatorname{lcm}(a,b) = |ab|$.
```

### 1.3 NT-1 seam paragraph — replace

**Section:** `## NT-1. …`, the paragraph beginning `**The seam that must be stated`.
**Old text:**
```
**The seam that must be stated, not left implicit:** $a\mathbb{Z} + b\mathbb{Z} =
\gcd(a,b)\mathbb{Z}$. AA-1 already has the subgroups of $\mathbb{Z}$, so this is
the item that connects the arithmetic to the group theory, and it is the concrete
shadow of "$\mathbb{Z}$ is a PID" at order 46. Without it the two developments
sit side by side saying nothing to each other, which is the level-7 defect.
```
**New text:**
```
**The seam that must be stated, not left implicit:** $a\mathbb{Z} + b\mathbb{Z} =
\gcd(a,b)\mathbb{Z}$, together with its dual $a\mathbb{Z} \cap b\mathbb{Z} =
\operatorname{lcm}(a,b)\mathbb{Z}$. This is the item that connects the arithmetic
to the group theory, and it is the concrete shadow of "$\mathbb{Z}$ is a PID" at
order 46. Without it the two developments sit side by side saying nothing to each
other, which is the level-7 defect.

**The classification is NOT what the seam item rests on, and it still has to be
proved here.** Both inclusions of $a\mathbb{Z} + b\mathbb{Z} = \gcd(a,b)\mathbb{Z}$
follow from Bézout and divisibility alone, and "$a\mathbb{Z} + b\mathbb{Z}$ is a
subgroup" is `def-subgroup` plus `lem-subgroup-criterion`, both on A page 20; the
intersection half is the "every common multiple is a multiple of the lcm" clause
of `thm-gcd-lcm-product`. What the classification supplies is the UNIQUENESS of
the nonnegative generator, which is what lets the conclusion be read as an
identification of subgroups rather than of sets. AA-1 does not supply it:
`ex-subgroups-of-the-integers` lives on `monoids-groups-and-subgroups-examples`,
a B page at order 21, and B pages are leaves, so no later page may depend on it.
NT-1 therefore proves `lem-subgroups-of-z-are-cyclic` on its own spine —
every subgroup of $(\mathbb{Z},+)$ is $\langle n \rangle$ for exactly one natural
$n$ — from `thm-division-algorithm-in-z`, `thm-well-ordering-principle` and the
published `def-generated-subgroup` and `lem-cyclic-subgroup-is-the-set-of-powers`,
and records in Remarks that the published example states the same fact and why it
is restated rather than cited. **NT-1's A page is where the classification can
legally live**: it is the lowest A page above order 21 whose subject matter needs
it, and homing it here makes it available to AA-5 (order 34) and AA-10 (order 46),
which should cite it rather than repeat the argument a third time.
```

### 1.4 NT-1 B page — replace

**Section:** `## NT-1. …`, the `B page:` paragraph.
**Old text:**
```
B page: worked gcds and Bézout coefficients; Bézout coefficients are **not
unique**; $\gcd$ with $0$; a pair with $d \mid ab$ but $d \nmid a$ and
$d \nmid b$, which is exactly the gap Euclid's lemma closes at NT-2 and the
reason primality is not a decoration; the Euclidean algorithm on consecutive
Fibonacci numbers as its worst case (`thm-recursion` is published, so the
sequence is definable).
```
**New text:**
```
B page: $\gcd(1071,462) = 21$ worked through the Euclidean algorithm with the
back-substitution giving $21 = 7 \cdot 462 - 3 \cdot 1071$; Bézout coefficients
are **not unique**, with the full one-parameter family
$(x + tb/d,\ y - ta/d)$; $\gcd$ at the boundary, including the observation that
$\gcd(0,0) = 0$ is exactly what makes $\gcd(ca,cb) = |c|\gcd(a,b)$ true at
$c = 0$; the solvability of $ax + by = c$ exactly when $\gcd(a,b) \mid c$, worked
on $6x + 15y = 9$ and $6x + 15y = 7$; $12\mathbb{Z} + 18\mathbb{Z} = 6\mathbb{Z}$
and $12\mathbb{Z} \cap 18\mathbb{Z} = 36\mathbb{Z}$, instantiating the seam;
the Euclidean algorithm on consecutive Fibonacci numbers (`thm-recursion` is
published, so the sequence is definable), stated ONLY as "quotient $1$ at every
step, exactly $n$ divisions" and NOT as Lamé's minimality theorem, which is not
proved; a pair with $d \mid ab$ but $d \nmid a$ and $d \nmid b$, which is exactly
the gap Euclid's lemma closes at NT-2 and the reason primality is not a
decoration; the common divisors of $(0,0)$, which are all of $\mathbb{Z}$ and
have no greatest element, so that the $\gcd(0,0)$ convention is necessary rather
than decorative; and the false statement
$\gcd(a,b)\operatorname{lcm}(a,b) = ab$, refuted at $(-2,3)$, where the absolute
value in the true statement is doing the work.
```

### 1.5 NT-1 Traps — replace

**Section:** `## NT-1. …`, the `Traps.` paragraph.
**Old text:**
```
Traps. **$\gcd(0,0)$.** Every integer divides $0$, so "greatest common divisor"
in the usual order has no meaning at $(0,0)$. Fix the convention $\gcd(0,0) = 0$
(Wikipedia, and the tiebreaker rule in the convention memo), which is exactly the
greatest element under **divisibility**, and say so where it is defined rather
than leaving a hole. **Absolute value on $\mathbb{Z}$** is used throughout: check
whether it is published (`def-int-order` is) and mint it here if not, rather than
inlining a case split six times. $\mathbb{N}$ contains $0$, so every statement
about divisors is checked at $0$ and at $1$ before it is written.
```
**New text:**
```
Traps. **$\gcd(0,0)$ — DECIDED, $\gcd(0,0) = 0$.** Every integer divides $0$, so
"greatest common divisor" in the usual order has no meaning at $(0,0)$, and the
value is fixed by convention (Wikipedia, and the tiebreaker rule in the
convention memo): it is the greatest element under **divisibility**, and it is
the value that keeps $\gcd(ca,cb) = |c|\gcd(a,b)$ and
$\gcd(a,b)\operatorname{lcm}(a,b) = |ab|$ true at every boundary pair. State it
where $\gcd$ is defined rather than leaving a hole, and justify it there rather
than in a footnote. **Absolute value on $\mathbb{Z}$ — CHECKED, and it is NOT
published.** `def-abs-value` is stated for an ordered field and $\mathbb{Z}$ is
not one, so `def-int-abs` is minted here. **The published division algorithm is
stated for $b > 0$**, so every use of it reduces to a positive divisor first;
that is the reason the absolute value is load-bearing and not a convenience.
$\mathbb{N}$ contains $0$, so every statement about divisors is checked at $0$
and at $1$ before it is written: $d \mid 0$ for every $d$ including $0$;
$0 \mid a$ only for $a = 0$; and every gcd identity is checked at $(0,0)$.
```

### 1.6 AA-8 requires — record the new prerequisite

**Section:** `## AA-8. Rings, Subrings, Integral Domains and Fields  (order 42)`
**Old text** (an identical `requires` line also occurs under LA-1, so the heading
line is included to disambiguate; do NOT edit the LA-1 one):
```
## AA-8. Rings, Subrings, Integral Domains and Fields  (order 42)

`requires`: `monoids-groups-and-subgroups`, `foundations-of-the-real-numbers`
```
**New text:**
```
## AA-8. Rings, Subrings, Integral Domains and Fields  (order 42)

`requires`: `monoids-groups-and-subgroups`, `foundations-of-the-real-numbers`,
`divisibility-gcd-and-bezout`

The number theory edge is load-bearing and is new at level 8:
`lem-characteristic-and-additive-order` states $n \cdot 1_R = 0$ exactly when
$\operatorname{char}(R) \mid n$, which is NT-1's divisibility relation, and the
B page reads $\mathbb{Z}^{\times} = \{1,-1\}$ off NT-1's `lem-units-of-z` rather
than re-deriving it from the order.
```

### 1.7 AA-8 inventory — replace

**Section:** `## AA-8. …`, the inventory paragraph.
**Old text:**
```
**Ring** (abelian group under $+$, monoid under $\cdot$, distributive);
**commutative ring**; the elementary consequences $0 \cdot a = 0$,
$(-a)b = -(ab)$; **unit** and the group of units $R^\times$; **zero divisor**;
**integral domain**; cancellation in a domain; **division ring**; the
**bridges** `lem-field-is-a-commutative-ring` and
`lem-commutative-division-ring-is-a-field` against the published `def-field`;
`lem-ordered-field-is-an-ordered-ring` against `def-ordered-field`; **subring**
and the subring criterion; **subfield**; characteristic of a ring; the
characteristic of a domain is $0$ or prime; ring homomorphism; the bridge
`lem-ring-homomorphism-of-fields-is-a-field-homomorphism`; product rings.
```
**New text:**
```
**Ring** (abelian group under $+$, monoid under $\cdot$, distributive on both
sides, since multiplication is not assumed commutative and the published
`def-field` states only the left form); **commutative ring**; the elementary
consequences $0 \cdot a = a \cdot 0 = 0$, $(-a)b = -(ab)$, $(-1)a = -a$;
**integer multiples** $ma$ and the identities $(ma)(nb) = (mn)(ab)$, obtained
from the published `def-group-power` read additively rather than from a new
recursion; **unit** and the group of units $R^\times$, obtained from the
published `lem-monoid-units-form-a-group` applied to the multiplicative monoid,
not re-proved; **zero divisor**; **integral domain**; cancellation characterises
domains; **division ring**; the **bridges** `lem-field-is-a-commutative-ring`
and `lem-commutative-division-ring-is-a-field` against the published `def-field`;
**the quaternions $\mathbb{H}$ and the theorem that they are a division ring
which is not a field**, homed on the SPINE and not on the companion page,
because LA-6 (order 78) needs them for the determinant counterexample and B
pages are leaves; **ordered ring**, together with
`lem-ordered-ring-cone-and-order-agree` reconciling the positive-cone
presentation of `def-ordered-field` with the total-order presentation of
`thm-int-ordered-ring`, and then `lem-ordered-field-is-an-ordered-ring`;
**subring** and the subring criterion; **subfield**, which is what the vector
space page at order 68 restricts scalars along; ring homomorphism, with
$f(1) = 1$ imposed rather than derived, and its basic properties; the bridge
`lem-ring-homomorphism-of-fields-is-a-field-homomorphism`; **product rings**;
**the ring $R^X$ of functions with pointwise operations**, minted here because
order 68 points back at it when it puts a vector-space structure on the same
set; **the proved dictionary $n \cdot 1_F = \iota(n)$** against the published
`def-canonical-natural`; characteristic of a ring, well defined by well-ordering,
with the convention $\operatorname{char} = 0$ in the "no such $n$" case flagged
as the OPPOSITE of `def-order-in-a-group`'s $\infty$; and the characteristic read
as the additive order of $1_R$, with the domain statement that every nonzero
element has that same additive order.

**"The characteristic of an integral domain is $0$ or prime" is DEFERRED to
AA-9 (order 44)** and is not on this page. See the deferral note in AA-9's
inventory: the word *prime* is defined nowhere below order 42, its home is NT-2
at order 24, and NT-2 requires NT-1 and so cannot be published before level 9.
AA-9 requires AA-3 and therefore cannot be built until level 13 at the earliest,
by which time NT-2 is long published, so the deferral is discharged by
construction rather than by a promise to retrofit a published page.
```

### 1.8 AA-8 B page — replace

**Section:** `## AA-8. …`, the `B page:` paragraph.
**Old text:**
```
B page: the retro-instantiations `ex-integers-as-a-commutative-ring`,
`ex-integers-are-an-integral-domain-not-a-field`, `ex-rationals-and-reals-as-fields`;
$\mathbb{Z}/n$ has zero divisors exactly when $n$ is composite; **the quaternions
$\mathbb{H}$**, a division ring that is not a field, kept because the determinant
page needs it; **$2\mathbb{Z}$ as a counterexample** (closed under $+$ and
$\cdot$, but $1 \notin 2\mathbb{Z}$, so the identity clause of the subring
criterion is doing work); the zero ring and why $1 \ne 0$ is required of a field.
**$\mathbb{Z}/n$ has zero divisors exactly when $n$ is composite has MOVED** to
NT-3's B page at order 27, where it is statable with no ring vocabulary at all.
```
**New text:**
```
B page: the retro-instantiations `ex-integers-as-a-commutative-ring`,
`ex-integers-are-an-integral-domain-not-a-field` and
`ex-rationals-and-reals-as-fields`, and a fourth,
`ex-cauchy-sequences-as-a-commutative-ring`, which reads `thm-cauchy-ring` as an
instance and observes that $\mathcal{C}$ has zero divisors, so it is NOT a
domain — which is precisely why the construction of $\mathbb{R}$ has to quotient
by a maximal ideal rather than by any ideal, the point AA-9 then makes; a product
of two nonzero rings always has zero divisors; **$2\mathbb{Z}$ as a
counterexample** (closed under $+$ and $\cdot$, but $1 \notin 2\mathbb{Z}$, so
the identity clause of the subring criterion is doing work); $\mathbb{Z}$ inside
$\mathbb{Q}$ as a subring that is NOT a subfield, so the inverse-closure clause
is doing work too; the zero ring, of characteristic $1$, and why $1 \ne 0$ is
required of a field; a map preserving $+$ and $\cdot$ but not $1$, showing the
homomorphism clause is not redundant; and the false statement that every nonzero
element of a commutative ring is a unit or a zero divisor, refuted by $2$ in
$\mathbb{Z}$. **$\mathbb{Z}/n$ has zero divisors exactly when $n$ is composite
has MOVED** to NT-3's B page at order 27, where it is statable with no ring
vocabulary at all. **The quaternions have MOVED to this page's A spine**
(level-8 batch-1 finding): LA-6 at order 78 needs them and B pages are leaves,
so an example here would be unavailable there.
```

### 1.9 AA-8 Traps — replace

**Section:** `## AA-8. …`, the `Traps.` paragraph (the paragraph beginning
`Traps. The published`; the **OPEN** paragraph that follows it is NOT edited).
**Old text:**
```
Traps. The published `def-field` is the definition; this page does not restate it,
it connects to it. Getting this wrong reproduces the level-7 two-notions defect at
the bottom of the library.
```
**New text:**
```
Traps. The published `def-field` is the definition; this page does not restate it,
it connects to it. Getting this wrong reproduces the level-7 two-notions defect at
the bottom of the library. There are four such connections and each is a numbered
item, never a remark: field to commutative ring, commutative division ring back to
field, ordered field to ordered ring, and ring homomorphism of fields to
`def-field-homomorphism`. Two further two-notions hazards are specific to this
page. First, the elementary consequences $0 \cdot a = 0$ and $(-a)b = -(ab)$ exist
already for FIELDS as `lem-of-zero-mult` and `lem-of-mult-neg`; the ring versions
are the general statements and the field ones are instances, so record the
agreement in Remarks and do not cite a field lemma inside a ring proof. Second,
$n \cdot 1_R$ is the published `def-canonical-natural` when $R$ is a field, and
`lem-integer-multiples-agree-with-canonical-natural` must PROVE the two agree,
both being the unique function given by the same recursion; an assertion in
Remarks would be exactly the shape D6 rejects. Third, the quaternion construction
may not use the words bilinear, trilinear or multilinear: that vocabulary starts
at order 68 and later, and this page is order 42.

**Where the OPEN `def-field` question below becomes load-bearing, precisely.**
`lem-field-is-a-commutative-ring` has two steps that depend on how axiom (M) is
read: the step asserting that $(F,\cdot,1)$ is a COMMUTATIVE MONOID (associativity
and commutativity of $\cdot$ at $0$, which the headline "$(F \setminus \{0\},\cdot)$
is an abelian group" does not give), and the step asserting RIGHT distributivity
$(y+z)x = yx + zx$ (which axiom (D) does not state and which follows from left
distributivity only via commutativity at $0$). Both are licensed by the
unqualified reading of (M)'s gloss — "multiplication is associative and
commutative, $x \cdot 1 = x$ for all $x$" — and by nothing else. State that
reading explicitly in the item's Facts & Assumptions, as a reading of the
published axiom, and do not amend `def-field`.
```

### 1.10 AA-9 — inherit the deferred characteristic result

**Section:** `## AA-9. Ideals, Quotient Rings and the Isomorphism Theorems for Rings  (order 44)`, the inventory paragraph.
**Old text:**
```
maximal ideal is prime; in a commutative ring with identity, maximal ideals exist
(Zorn, cited from `order-zorn-and-the-axiom-of-choice`).
```
**New text:**
```
maximal ideal is prime; in a commutative ring with identity, maximal ideals exist
(Zorn, cited from `order-zorn-and-the-axiom-of-choice`); and **the characteristic
of an integral domain is $0$ or prime**, deferred here from AA-8 at level-8
batch 1 because the word *prime* is defined nowhere below order 42 — its home is
NT-2 at order 24, which requires NT-1 and so cannot publish before level 9,
whereas AA-8 was on the level-8 frontier. This page requires AA-3, so it cannot
be built before level 13, by which time NT-2 is published and the citation is an
ordinary backward one. AA-8 keeps `def-ring-characteristic` and
`lem-characteristic-and-additive-order` ("$n \cdot 1_R = 0$ exactly when
$\operatorname{char}(R) \mid n$", and in a domain every nonzero element has the
additive order of $1_R$), which is the primality-free half and reduces the proof
here to two lines: a factorisation $\operatorname{char}(R) = km$ with $k, m \ge 2$
gives $(k \cdot 1_R)(m \cdot 1_R) = 0$ with both factors nonzero by minimality.
```

### 1.11 LA-1 requires — record the new prerequisite

**Section:** `## LA-1. Vector Spaces, Subspaces, Span and Direct Sums  (order 68)`
**Old text** (the identical `requires` line also occurs under AA-8, so the heading
line is included to disambiguate; do NOT edit the AA-8 one):
```
## LA-1. Vector Spaces, Subspaces, Span and Direct Sums  (order 68)

`requires`: `monoids-groups-and-subgroups`, `foundations-of-the-real-numbers`
```
**New text:**
```
## LA-1. Vector Spaces, Subspaces, Span and Direct Sums  (order 68)

`requires`: `monoids-groups-and-subgroups`, `foundations-of-the-real-numbers`,
`rings-subrings-and-integral-domains`

The ring page is a prerequisite for exactly one reason and it is load-bearing:
restriction of scalars needs `def-subfield`, and a subfield is ring-page material.
The second, lighter connection is a Remarks-only dictionary link from the vector
space $F^X$ to the ring $R^X$ of `def-ring-of-functions`, same set, same addition,
different second operation.
```

### 1.12 LA-1 inventory — replace

**Section:** `## LA-1. …`, the inventory paragraph.
**Old text:**
```
Vector space over a field $F$ (the published `def-field`, cited, not restated);
the elementary consequences $0 \cdot v = 0$, $\lambda \cdot 0 = 0$,
$(-1)v = -v$, and $\lambda v = 0 \Rightarrow \lambda = 0$ or $v = 0$; **subspace**
and the subspace criterion; intersections of subspaces; the sum $U + W$;
**internal direct sum** and the criterion $U \cap W = \{0\}$; finite direct sums;
**span**; the span is the smallest subspace containing a set; spanning set;
$F^n$; the space of $m \times n$ matrices; function spaces $F^X$.
```
**New text:**
```
Vector space over a field $F$ (the published `def-field`, cited, not restated),
whose additive part is an abelian group in the published sense of `def-group`,
cited and not re-derived; the elementary consequences $0_F v = 0_V$,
$\lambda 0_V = 0_V$, $(-1_F)v = -v$, and
$\lambda v = 0_V \Rightarrow \lambda = 0_F$ or $v = 0_V$; the function space $F^X$
and $F^n$ as the case $X = n = \{0,\dots,n-1\}$; the space
$M_{m \times n}(F) = F^{\,m \times n}$ of matrices, vector-space structure ONLY,
with the product left to order 74; restriction of scalars along a subfield;
**linear subspace** — the id and the title say LINEAR, because the library
already uses "subspace" for the topological notion at order 185 — and the
one-step subspace test; a linear subspace is a subgroup of the additive group,
and conversely; intersections of linear subspaces; **span**, defined as the
intersection of the linear subspaces containing the set, exactly as the published
`def-generated-subgroup` is, and then proved equal to the set of finite linear
combinations; monotonicity and idempotence of the span; $\operatorname{span}\{v\}$;
the sum $\sum_{i<n} U_i$ and its identification with the span of the union;
**internal direct sum**, with the criterion stated as
$U_j \cap \sum_{i \ne j} U_i = \{0\}$ for each $j$ and NOT as pairwise trivial
intersection; and the unique-decomposition characterisation. Finite sums of
vectors are the published `def-monoid-finite-product` read additively, together
with `thm-generalised-associativity`; `def-finite-sum` cannot be used, being
stated for sequences into the complete ordered field.
```

### 1.13 LA-1 B page — replace

**Section:** `## LA-1. …`, the `B page:` paragraph.
**Old text:**
```
B page: $F[x]$ and $F[x]_{\le n}$ (requires AA-11, declared on the B page);
$\mathbb{R}$ over $\mathbb{Q}$; a subset closed under addition but not scaling;
the union of two subspaces is a subspace only if one contains the other, as a
false-statement item; $\mathbb{C}$ as a real vector space and as a complex one.
```
**New text:**
```
B page: $\mathbb{R}$ over itself and over the embedded copy of $\mathbb{Q}$
(`lem-of-q-embeds` is published and gives the embedding as an ordered subfield);
$F^3$ with its three coordinate lines as an internal direct sum, and $F^0$ as the
zero space; $F^{\mathbb{N}}$ with the eventually zero families as a subspace;
a subset closed under addition and not under scaling (the first quadrant of
$\mathbb{R}^2$) and one closed under scaling and not under addition (a union of
two axes), so that neither closure condition implies the other; three lines in
$F^2$ meeting pairwise only in $0$ whose sum is not direct, which is what makes
the $n$-summand criterion mean something; two planes in $F^3$ with their sum and
intersection computed; and the false statement that the union of two linear
subspaces is a linear subspace.

**Two items are DEFERRED, not deleted.** $F[x]$ and $F[x]_{\le n}$ need
`polynomial-rings-and-roots`, order 48, and $\mathbb{C}$ as a real and as a
complex vector space needs `field-extensions-and-the-complex-numbers`, order 50 —
both **above** this page, so neither can be authored at order 69. LA-2's B page
(order 71) already plans $\{1, x, x^2, \dots\}$ as a basis and is the natural
inheritor of the first; any page above order 50 can take the second. Whichever
page takes them must also declare the corresponding `requires` edge. Page 69's
`requires` therefore does not name `polynomial-rings-and-roots`, and must not
regain it.
```

### 1.14 LA-1 Traps — replace

**Section:** `## LA-1. …`, the `Traps.` paragraph.
**Old text:**
```
Traps. The additive group of a vector space is an abelian group, so cite AA-1
rather than re-deriving the additive laws. Do not assume finite dimension anywhere
on this page.
```
**New text:**
```
Traps. The additive group of a vector space is an abelian group, so cite AA-1
rather than re-deriving the additive laws; the page makes this a numbered item so
the dictionary is explicit. Do not assume finite dimension anywhere on this page.
Scalar multiplication is a map $F \times V \to V$ and is therefore NOT a binary
operation on a set, so `def-binary-operation` must not be cited for it. A natural
number is a von Neumann natural, so $F^n$ is indexed $x_0, \dots, x_{n-1}$ and
$F^0$ is the one-element space containing only the empty function; every tuple on
this page and its companion starts at index $0$. The word "subspace" is already in
use in this library for the topological notion (`def-subspace-topology-top`,
order 185), so the ids and titles here say LINEAR subspace; do not link the
topological item, which is 117 pages later and would be a forward reference. The
$n$-summand direct sum criterion is $U_j \cap \sum_{i \ne j} U_i = \{0\}$; the
pairwise version is false and the companion page carries the witness.
```

### 1.15 LA-6 B page — the quaternions now live on a spine

**Section:** `## LA-6. Determinants of Matrices over a Commutative Ring  (order 78)`, the `B page:` paragraph.
**Old text:**
```
the counterexample showing commutativity is essential, citing $\mathbb{H}$ from
AA-8's B page; a matrix over $\mathbb{Z}$ with $\det = 2$, invertible over
```
**New text:**
```
the counterexample showing commutativity is essential, citing `def-quaternions`
and `thm-quaternions-form-a-division-ring` on AA-8's A page at order 42 (they
were moved onto that spine at level-8 batch 1 precisely so that this citation is
legal: B pages are leaves); a matrix over $\mathbb{Z}$ with $\det = 2$, invertible over
```

### 1.16 Well-definedness table — name the discharging items for row 26, and add the new rows

**Section:** `## Well-definedness obligations`, the table.
**Old text:**
```
| 26 | 22 | **$\gcd(a,b)$** | the common divisors of $(a,b) \ne (0,0)$ form a nonempty set bounded above, so it has a greatest element; and $\gcd(0,0)$ needs a stated convention, since every integer divides $0$ and the usual order gives no greatest |
```
**New text:**
```
| 26 | 22 | **$\gcd(a,b)$** | for $(a,b) \ne (0,0)$: nonempty because $1$ is a common divisor, bounded above by `lem-divisor-bound`, hence has a greatest element by `lem-int-bounded-above-has-greatest`, which is MINTED at NT-1 because well-ordering gives a least element and nothing published gives a greatest. At $(0,0)$ there is no greatest element at all (`cex-common-divisors-of-zero-have-no-greatest-element`), so $\gcd(0,0) := 0$ is a stated convention, justified as the greatest common divisor in the DIVISIBILITY order via `cor-common-divisor-divides-gcd` |
| 26b | 22 | $\operatorname{lcm}(a,b)$ | the positive common multiples of two nonzero integers are nonempty (they contain $|ab|$), so `thm-well-ordering-principle` gives a least one along `lem-nat-embeds-int`; the value $0$ when either argument is $0$ is a convention, chosen because it is what keeps $\gcd \cdot \operatorname{lcm} = |ab|$ true at every boundary pair |
| 26c | 22 | the absolute value on $\mathbb{Z}$ | the two clauses are exhaustive and exclusive by totality and antisymmetry of the order (`thm-int-ordered-ring`); `def-abs-value` is stated for an ordered FIELD and does not apply, so this is not a second notion of one object |
| 5b | 42 | characteristic of a ring | the set $\{n \ge 1 : n \cdot 1_R = 0\}$ has a least element when nonempty (`thm-well-ordering-principle`); and $n \cdot 1_R$ must be PROVED to be the published `def-canonical-natural` when $R$ is a field (`lem-integer-multiples-agree-with-canonical-natural`), both being the unique function with the same recursion (`thm-recursion`) |
| 5c | 42 | subring, subfield | the restricted operations really are operations on the subset, and the subset really is a ring (resp. a field) with them, with the SAME $0$ and $1$; the additive half is the published `def-subgroup`/`lem-subgroup-criterion` and is cited |
| 5d | 42 | the quaternion product | it is given as an explicit formula in the eight real coordinates, so it is a genuine binary operation on $\mathbb{R}^4$; associativity is checked on basis triples and the reduction to those triples is a finite-sum computation, NOT an appeal to multilinearity, which is unavailable at order 42 |
| 12b | 68 | span | the family of linear subspaces containing $S$ is nonempty and its intersection is a linear subspace (`lem-intersection-of-linear-subspaces`), which is what licenses "the smallest"; the empty combination is $0_V$, so $\operatorname{span}(\varnothing) = \{0_V\}$ is a consequence, not a stipulation |
| 12c | 68 | internal direct sum of $n$ summands | the criterion is $U_j \cap \sum_{i \ne j} U_i = \{0\}$ for every $j$; PAIRWISE trivial intersection is not sufficient and the companion page carries the counterexample |
```

### 1.17 "What step 1 must decide" items 8, 10 and 11 — record the decisions

**Section:** `## What step 1 must decide, per page`
**Old text:**
```
8. **NT-1**: whether **absolute value on $\mathbb{Z}$** is already published.
   `def-int-order` is; $|\cdot|$ may not be, and it is used throughout NT-1 and
   NT-2. Mint it here if missing rather than inlining a case split repeatedly.
```
**New text:**
```
8. **NT-1**: whether **absolute value on $\mathbb{Z}$** is already published.
   **DECIDED 2026-07-27 (level-8 batch 1): it is NOT, and `def-int-abs` is
   minted at NT-1**, with `lem-int-abs-properties` beside it. Verified from
   disk: the only absolute value in the library is `def-abs-value`, stated for
   an ORDERED FIELD, and $\mathbb{Z}$ is not a field, so it does not apply and
   there is no two-notions collision. The agreement with `def-abs-value` along
   the order-preserving embedding `lem-int-embeds-rat` is recorded in Remarks
   only, and nothing on the page depends on it. It is load-bearing rather than
   cosmetic because the published `thm-division-algorithm-in-z` is stated for
   $b > 0$, so every use of it reduces to a positive divisor first.
```
**Old text:**
```
10. **NT-1**: the $\gcd(0,0)$ convention. Recommended $\gcd(0,0) = 0$, which is
    the greatest common divisor in the **divisibility** order and agrees with
    Wikipedia, per the convention tiebreaker rule. Whichever is chosen must be
    stated where $\gcd$ is defined, not left as a hole.
```
**New text:**
```
10. **NT-1**: the $\gcd(0,0)$ convention. **DECIDED 2026-07-27 (level-8
    batch 1): $\gcd(0,0) = 0$**, stated inside `def-common-divisor-and-gcd` and
    justified there. It is the greatest common divisor in the **divisibility**
    order, it agrees with Wikipedia per the convention tiebreaker rule, and it
    is the only value under which $\gcd(ca,cb) = |c|\gcd(a,b)$ and
    $\gcd(a,b)\operatorname{lcm}(a,b) = |ab|$ hold at every boundary pair — that
    last is the argument to give, since it is a fact about the identities rather
    than a matter of taste. The matching convention
    $\operatorname{lcm}(a,b) = 0$ when either argument is $0$ is fixed the same
    way, in `def-lcm`.
```
**Old text:**
```
11. **NT-3 / AA-9**: the $\mathbb{Z}/n$ agreement chain. NT-3 must build
    $(\mathbb{Z}/n,+)$ natively — it **cannot** cite the published
    `ex-integers-mod-n-additive-group`, which is on a B page at order 21 and so
    is a leaf — and must record the agreement explicitly. AA-9 (order 44) then
    identifies its quotient ring $\mathbb{Z}/(n)$ with NT-3's object rather than
    minting a third. Two agreements, both proved, neither asserted.
```
**New text:**
```
11. **NT-3 / AA-9**: the $\mathbb{Z}/n$ agreement chain. NT-3 must build
    $(\mathbb{Z}/n,+)$ natively — it **cannot** cite the published
    `ex-integers-mod-n-additive-group`, which is on a B page at order 21 and so
    is a leaf — and must record the agreement explicitly. AA-9 (order 44) then
    identifies its quotient ring $\mathbb{Z}/(n)$ with NT-3's object rather than
    minting a third. Two agreements, both proved, neither asserted.
    **NOT DECIDED at level-8 batch 1, deliberately: neither NT-3 nor AA-9 is in
    that batch.** What batch 1 did settle is the general shape, twice over, and
    it is the precedent to follow: NT-1 hits the identical wall for
    `ex-subgroups-of-the-integers` and `ex-integers-under-addition`, and
    resolves it by proving `lem-subgroups-of-z-are-cyclic` and `lem-units-of-z`
    on its own SPINE and recording the agreement with the published B-page
    example in Remarks. The constraint itself was re-verified from disk on
    2026-07-27 and stands.
```

### 1.18 "What step 1 must decide" item 9 — half of it is answered from disk

**Section:** `## What step 1 must decide, per page`
**Old text:**
```
9. **NT-2**: whether **strong induction** is published or must be minted.
   `thm-induction-principle` is published; the strong form is what the existence
   half of the fundamental theorem of arithmetic actually uses. Related: whether
```
**New text:**
```
9. **NT-2**: whether **strong induction** is published or must be minted.
   **ANSWERED 2026-07-27 (level-8 batch 1, verified from disk): it IS
   published.** `items/thm-strong-induction.md`, "Strong (complete) induction",
   `status: published`, homed on `construction-of-the-natural-numbers` at
   order 6, with aliases `complete-induction` and `course-of-values-induction`.
   It must be reused and never re-minted; NT-1 already cites it for the
   termination of the Euclidean algorithm.
   `thm-induction-principle` is published; the strong form is what the existence
   half of the fundamental theorem of arithmetic actually uses. Related: whether
```

---

## 2. Authoring notes for the step-5 author (no scaffold anchor)

### 2.0 How to read the `strategy` field in this batch

On a proof-bearing item `strategy` is the usual `proof_strategy` value (`direct`,
`induction`, `cases`, …) and goes into frontmatter verbatim. On a **definition**
it is not a proof strategy at all: it is the WELL-DEFINEDNESS OBLIGATION or the
CONVENTION DECISION, written out so step 5 cannot skip it. A `def-` item has no
`proof_strategy` in frontmatter (SCHEMA §3, `verification.precheck: n/a`), so
**do not copy those strings into frontmatter** — discharge them in the body.

### 2.1 The proof routes that are load-bearing and easy to get wrong

**`lem-int-bounded-above-has-greatest`.** Do not reach for a maximum principle
that does not exist. $S \subseteq \mathbb{Z}$ nonempty with upper bound $b$: the
set $T = \{\, k \in \mathbb{N} : b - \iota(k) \in S \,\}$ is a nonempty subset of
$\mathbb{N}$ (nonempty because $b - s \ge 0$ for any $s \in S$, and every
nonnegative integer is $\iota(k)$ for a unique $k$ by `lem-nat-embeds-int`), so
`thm-well-ordering-principle` gives it a least element $k_0$, and $b - \iota(k_0)$
is the greatest element of $S$. The dual statement is the same argument with the
order reversed; prove one and derive the other, do not write it twice.

**`thm-bezout-identity`.** The classical route, and each link must be an item.
Let $I = \{ax + by\}$ and let $d$ be its least positive element (well-ordering
along `lem-nat-embeds-int`; $I$ contains a positive element because one of
$a, b$ is nonzero and $a\cdot a + b\cdot b > 0$). Divide $a$ by $d$
(`thm-division-algorithm-in-z`, legal because $d > 0$): the remainder lies in $I$
and is $< d$, hence is $0$, so $d \mid a$; likewise $d \mid b$. Every common
divisor $c$ divides $ax + by = d$ (`lem-divisibility-basic`), so $|c| \le d$ by
`lem-divisor-bound`, whence $c \le d$. So $d$ is the greatest common divisor.
Note the last step needs `lem-divisor-bound` and is where a hand-wave usually
hides.

**`thm-euclidean-algorithm`.** State it so that no informal "iterate" appears.
Use `thm-recursion` on the set $\mathbb{Z} \times \mathbb{N}$ with
$F(u,v) = (v,\, u \bmod v)$ for $v \ge 1$ and $F(u,0) = (u,0)$, then prove by
`thm-strong-induction` on the second coordinate that the sequence reaches
$(g, 0)$ with $g = \gcd(a,b)$, the gcd being invariant at every step by
`lem-gcd-euclidean-step`. Termination is strict decrease of the second
coordinate, which is the $0 \le r < b$ clause of `thm-division-algorithm-in-z`,
not a separate appeal to well-ordering.

**`thm-quaternions-form-a-division-ring` — the highest-effort item in the
batch.** Associativity is the whole cost and the naive route is 64 cases. Do
this instead: (i) give the product as an explicit formula in the eight real
coordinates, so it is visibly a binary operation on $\mathbb{R}^4$;
(ii) observe from the formula that both $(xy)z$ and $x(yz)$ expand, by
distributivity and by pulling real coefficients through, into
$\sum_{i,j,k} x_i y_j z_k\,(e_ie_j)e_k$ and $\sum_{i,j,k} x_i y_j z_k\,e_i(e_je_k)$
over the four basis elements — a finite-sum manipulation using
`def-monoid-finite-product` and `thm-generalised-associativity`, and NOT an
appeal to multilinearity, a notion that does not exist below order 68; (iii) so
it suffices to check the 64 basis triples, of which every triple containing $1$
is immediate, leaving 27, and the multiplication table is invariant under the
cyclic substitution $i \to j \to k \to i$, which cuts those to 9. Say that the
cyclic invariance is read off the table, and check it; do not assert it.
The norm is $N(q) = a^2 + b^2 + c^2 + d^2$, positive for $q \ne 0$ by
`lem-of-square-positive`, and $q\bar q = \bar q q = N(q)$ gives the inverse.
Non-commutativity is $ij = k \ne -k = ji$.

**`lem-field-is-a-commutative-ring`.** See amendment 1.9: two steps rest on the
unqualified reading of `def-field` axiom (M). Put the reading in Facts &
Assumptions as a reading, name the two steps that use it, and change nothing
published.

### 2.2 `deps` vs `justified_by` on the definitions with obligations

Everything discharging an obligation in this batch is stated BEFORE the
definition it justifies and does not mention the object being defined, so it is a
genuine prerequisite and goes in **`deps`**: `lem-divisor-bound` and
`lem-int-bounded-above-has-greatest` under `def-common-divisor-and-gcd`;
`thm-well-ordering-principle` under `def-lcm`;
`thm-well-ordering-principle`, `lem-integer-multiples-in-a-ring` and
`lem-integer-multiples-agree-with-canonical-natural` under
`def-ring-characteristic`; `lem-intersection-of-linear-subspaces` under
`def-linear-combination-and-span`. Putting any of them in `justified_by` will
fail `depcheck`'s `justification-backward`, which requires the target to depend
transitively on the item. `cor-common-divisor-divides-gcd`,
`lem-span-is-the-set-of-linear-combinations` and `lem-direct-sum-criterion` are
consequences, not justifications: `deps`.

### 2.3 Index and first-value checks specific to these three page pairs

- $\mathbb{N}$ contains $0$. `def-linear-combination-and-span` starts at $n = 0$
  with the empty sum $0_V$; `def-sum-of-linear-subspaces` and
  `def-internal-direct-sum` start at $n = 0$ with $\{0_V\}$;
  `def-monoid-finite-product`'s empty product is the identity and that is where
  each of those base cases comes from.
- $F^n$ has coordinates $x_0, \dots, x_{n-1}$, because $n = \{0,\dots,n-1\}$ is a
  von Neumann natural (`lem-nat-order-is-membership`). $F^0$ is the ONE-element
  space whose only member is the empty function, not the empty set. Every tuple
  on pages 68 and 69 starts at index $0$; matrix entries are $a_{ij}$ with
  $i \in m$ and $j \in n$, both from $0$.
- Every divisibility statement on page 22 is checked at $0$ and at $1$:
  $d \mid 0$ for every $d$ INCLUDING $d = 0$; $0 \mid a$ only for $a = 0$;
  $1 \mid a$ always. `lem-divisor-bound` is vacuous at $d = 0$ and must say so
  rather than look like it excludes a case by accident.
- Every gcd identity is checked at $(0,0)$ and at $c = 0$. `lem-gcd-scaling` and
  `thm-gcd-lcm-product` are stated to be true there, and that is the argument for
  the conventions, so the boundary cases are part of the proof, not an aside.
- `ex-euclidean-algorithm-on-consecutive-fibonacci-numbers`: index the sequence
  from $0$ with $F_0 = 0$, $F_1 = 1$, and state which convention is used, because
  the step count depends on it. The claim is quotient $1$ at every step and
  exactly $n$ divisions on $(F_{n+2}, F_{n+1})$; it is **not** Lamé's theorem
  that this is the worst case over all inputs of that size, which is not proved
  here. A title asserting "worst case" without that proof is exactly the
  title-overreach class that step 10a exists to catch.
- `def-ring-characteristic`: the value in the "no such $n$" case is $0$, not
  $\infty$ — the opposite convention to `def-order-in-a-group`, deliberately,
  because it is the standard one. Say so, so a reader who has just read
  `def-order-in-a-group` is not misled.
- `ex-the-zero-ring` has characteristic $1$, since $1 \cdot 1_R = 1_R = 0_R$. It
  is the one ring whose characteristic is neither $0$ nor prime, and it is
  excluded from the deferred domain statement by $1 \ne 0$.

### 2.4 A natural number is a set, and there are three $\iota$'s in this batch

`lem-nat-embeds-int` writes $\iota(n) = [(n,0)]$ for $\mathbb{N} \to \mathbb{Z}$;
`def-canonical-natural` writes $\iota(n) = n \cdot 1_F$ for $\mathbb{N} \to F$;
and page 42 uses the additive power $n \cdot 1_R$ of `def-group-power` for
$\mathbb{N} \to R$, which is the second one when $R$ is a field and is PROVED to
be by `lem-integer-multiples-agree-with-canonical-natural`. Where any page in
this batch writes $\iota$, say which. In particular $\operatorname{char}(R)$ is a
natural number, so it is a set and not an element of $R$; the statement
"$n \cdot 1_R = 0$ exactly when $\operatorname{char}(R) \mid n$" compares
integers under `def-divides-in-z` after the embedding, and the item must say so.

### 2.5 What the B-page items must actually cite, and for what

- **B pages are leaves and level 7 put four heavily reusable examples on one.**
  `ex-integers-mod-n-additive-group`, `ex-subgroups-of-the-integers`,
  `ex-klein-four-group`, `ex-symmetric-group-on-three-letters`,
  `ex-integers-under-addition` and `fs-union-of-two-subgroups-is-a-subgroup` are
  all on `monoids-groups-and-subgroups-examples` and are therefore unavailable to
  every later page. Page 22 re-derives the two it needs on its own spine; nothing
  in this batch may cite any of them.
- `ex-integers-are-an-integral-domain-not-a-field` takes
  $\mathbb{Z}^{\times} = \{1,-1\}$ from `lem-units-of-z` (page 22), NOT from the
  published B-page `ex-integers-under-addition`.
- `ex-cauchy-sequences-as-a-commutative-ring`: **do not assert that $\mathcal{C}$
  is a subring of $\mathbb{Q}^{\mathbb{N}}$.** The published
  `def-rational-cauchy-sequence` indexes its sequences $(a_n)_{n \ge 1}$, whereas
  `def-sequence` and `def-ring-of-functions` are over an index set containing
  $0$; the ambient ring is therefore $\mathbb{Q}^X$ for the index set that
  definition actually uses. If the subring reading is wanted, state the index set
  explicitly first. The zero divisors are two eventually-constant sequences with
  disjoint supports, e.g. $(1,0,0,\dots)$ and $(0,1,1,\dots)$.
- `ex-subring-that-is-not-a-subfield` needs $\mathbb{Z}$ *inside* $\mathbb{Q}$,
  which is `lem-int-embeds-rat`, not a set inclusion; say which.
- `ex-r-as-a-vector-space-over-q` needs $\mathbb{Q}$ *inside* $\mathbb{R}$ as an
  ordered subfield, which is `lem-of-q-embeds`; the subfield in the sense of
  `def-subfield` is the image of that embedding, not $\mathbb{Q}$ itself.
- `cex-pairwise-trivial-intersection-is-not-a-direct-sum` is instantiated over
  $\mathbb{R}$ with the spans of $(1,0)$, $(0,1)$ and $(1,1)$; state the field,
  because the count of lines in $F^2$ depends on it.
- `fs-every-nonzero-element-is-a-unit-or-a-zero-divisor` is refuted by $2$ in
  $\mathbb{Z}$: not a unit (`lem-units-of-z`) and not a zero divisor
  (`lem-int-cancellation`). Note in the Remarks that the statement IS true in a
  finite commutative ring, and phrase that as a fact about the statement, never
  as a claim about what the library contains.

### 2.6 Landmarks

Owner instruction: do not trim landmarks. Mark `landmark: true` on
`def-divides-in-z`, `def-common-divisor-and-gcd`, `thm-bezout-identity`,
`cor-common-divisor-divides-gcd`, `thm-euclidean-algorithm`, `def-coprime`,
`def-lcm`, `thm-gcd-lcm-product`, `lem-subgroups-of-z-are-cyclic` and
`thm-gcd-generates-the-subgroup` (page 22); on `def-ring`,
`def-commutative-ring`, `def-zero-divisor-and-integral-domain`,
`def-division-ring`, `lem-field-is-a-commutative-ring`,
`lem-commutative-division-ring-is-a-field`, `thm-quaternions-form-a-division-ring`,
`def-subring`, `def-subfield`, `def-ring-homomorphism` and
`def-ring-characteristic` (page 42); and on `def-vector-space`,
`def-function-space`, `def-linear-subspace`, `def-linear-combination-and-span`,
`lem-span-is-the-set-of-linear-combinations` and `def-internal-direct-sum`
(page 68). Everything else stays `false`, and B pages carry no landmarks.

### 2.7 Renderer hazards

No `[[id]]` wikilink inside `$…$` or `$$…$$`, anywhere: the renderer rewrites
wikilinks before KaTeX runs, so such a link kills the block silently while every
gate stays green except `rendercheck`. Titles are LaTeX and are de-TeX'd by
`plainTitle` for the flowchart, so keep scripts all-or-nothing: write `g^{-1}`,
`F^{n}`, `R^{\times}`, `F^{\mathbb{N}}`, never a bare script token followed by
more. `\operatorname{span}`, `\operatorname{lcm}`, `\gcd`, `\bigoplus`,
`\mathbb{H}` and `\nmid` appear in titles on these pages; check the flowchart
labels by eye before publish, since `rendercheck` does not look at them.

### 2.8 Page summaries are live prose

The level-7-algebra defect was a page summary asserting something a theorem on
the same page contradicted. Four specific traps for these summaries. Page 22's
summary must not say the library has no number theory or no divisibility theory —
it now has both, on that very page; say instead what each proof requires. It must
also not promise primes, Euclid's lemma or the fundamental theorem of arithmetic,
which are order 24 and are not built. Page 42's summary must not say "we now
define a field", because `def-field` is published at order 9 and this page
connects to it, and must not claim the characteristic of a domain is prime, which
is deferred to order 44. Page 68's summary must not promise dimension, bases or
linear maps, which are orders 70 and 72, and must not say "subspace" without the
qualifier "linear".

### 2.9 Published claims to re-check when this level lands (for the step-10b sweep)

I ran one grep over `items/` for the decay class (`does not develop`,
`not defined in this library`, `defined nowhere`, `no general theory`,
`has no item`, `not introduced in this library`, `no divisibility`,
`no number theory`, `anywhere in it`). Two candidates touch this batch; both are
`## Remarks` sentences in published items, so amending either DELETES that item's
`verification.judge` block per SCHEMA §3, and both belong in the same commit that
publishes the level, with `verification.audited` cleared. **Do not amend them
during authoring.**

- `fs-negative-has-square-root` (published, `roots-and-rational-powers`, order 16)
  says: "The library has no general theory of parity, so fix the local
  abbreviation: call a natural $n$ **odd** when $n = 2k + 1$ for some natural
  $k$." Page 22 supplies divisibility in $\mathbb{Z}$, from which even and odd
  are one line, so the claim is at best borderline once this level publishes. It
  is a claim about the library's contents, which is the form the standing rule
  says to avoid; the repair is to say what the ITEM does not assume.
- `ex-p-adic-ultrametric` and `thm-metric-completion-exists` were already
  repaired at level 7-algebra (recorded in the scaffold's published-amendment
  section) and were NOT re-checked by me.

I did **not** grep `library/*/*.md` page summaries, and I did not re-grep the
files level 7-algebra repaired.

### 2.10 Seams recorded so they are not rediscovered

- **Page 22 to page 42.** `lem-characteristic-and-additive-order` uses
  `def-divides-in-z`; page 43 uses `lem-units-of-z`. Load-bearing, declared.
- **Page 42 to page 68.** `lem-restriction-of-scalars` uses `def-subfield`.
  Load-bearing, declared. The second connection is Remarks-only:
  `def-function-space` (68) and `def-ring-of-functions` (42) are the same set
  $F^X$ with the same addition and different second operations; if anyone later
  wants an $F$-algebra it is the union of the two and belongs above both.
- **Page 22 to page 68: NONE, and that is correct rather than a gap.** Nothing on
  LA-1 is about $\mathbb{Z}$; the first consumers of NT-1 inside linear algebra
  are $\operatorname{ord}(g^k) = n/\gcd(n,k)$ at AA-5 (order 34) and the torsion
  arithmetic at order 36, not vector spaces. I checked and did not find a
  statement the two pages should be sharing.
- **`def-matrix-space` at order 68 vs matrices at order 74.** LA-1 gives
  $M_{m \times n}(F)$ its vector-space structure; LA-4 must add the product to
  that object and not define a second one.
- **`def-ordered-ring` at order 42 vs `thm-int-ordered-ring` at order 8.** The
  published theorem states the total-order form; `def-ordered-field` states the
  positive-cone form. `lem-ordered-ring-cone-and-order-agree` is the item that
  keeps them one notion; without it this batch would ship a two-notions defect.
- **`ex-integers-as-a-commutative-ring` and friends are on B page 43 and are
  leaves.** AA-10 (order 46) will want "$\mathbb{Z}$ is an integral domain" on a
  spine and cannot cite page 43. It is not blocked — `thm-int-comm-ring` plus
  `lem-int-cancellation` plus `def-zero-divisor-and-integral-domain` give it in
  one step — but AA-10 must be told to re-instantiate from the published
  construction rather than reach for the example. Recorded here so it is not
  discovered at step 5 of a later level.
