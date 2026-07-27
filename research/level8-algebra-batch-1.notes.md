# Level-8-algebra batch 1 — scaffold notes (Beta-8a-1, 2026-07-27)

> **SUPERSEDED — the run this belongs to was ABORTED by the owner on 2026-07-27,
> before any splice. Nothing here was applied to `plan-spec.json` or to any item.**
>
> The owner then commissioned the elementary number theory block and the
> fundamental theorem of finite abelian groups, which renumbered the spec (198 to
> 206 pages) and re-homed much of what this file scaffolds. **Every order below is
> stale**, and the page designs for orders 22 and 34 in particular are obsolete:
> divisibility, primes and $\mathbb{Z}/n$ now belong to NT-1, NT-2 and NT-3 at
> orders 22, 24 and 26. `level8-algebra-batch-1.pages.json` is stale in the same
> way and for the same reason.
>
> **Kept because four of its findings were verified from disk and are durable.**
> Those four have been folded into `research/plan-algebra-track.md`, which is the
> live scaffold: the missing finite cardinal arithmetic (into AA-2's traps), the
> self-contradictory ring convention (into AA-8), the `def-field` right-
> distributivity ambiguity (into AA-8, recorded as an OPEN owner decision — no
> decision was taken and nothing was changed), and the "linear subspace" naming
> collision (into LA-1's traps). Two further findings, that `prime` was undefined
> library-wide and that $\mathbb{Z}/n$ had no home on any spine, are **solved** by
> the number theory block rather than merely recorded.

Pages scaffolded, all six in one batch:

| order | kind | id | items |
|---|---|---|---|
| 22 | A | `cosets-and-lagranges-theorem` | 14 |
| 23 | B | `cosets-and-lagranges-theorem-examples` | 8 |
| 34 | A | `rings-subrings-and-integral-domains` | 23 |
| 35 | B | `rings-subrings-and-integral-domains-examples` | 10 |
| 60 | A | `vector-spaces-and-subspaces` | 17 |
| 61 | B | `vector-spaces-and-subspaces-examples` | 8 |

Final page objects: `research/level8-algebra-batch-1.pages.json`.

Gates I ran, against a spliced copy of `research/plan-spec.json` written to my
scratchpad (I did not touch the repo's spec):

- `node tools/validate-plan.mjs <spliced>` — **exit 0**, no errors. Warnings went
  from 12 to 17; all 5 new ones are `redundant-prereq` and all 5 are the direct
  consequence of the two new intra-batch prerequisite edges recorded below.
- `node tools/depsource.mjs <spliced>` — **exit 0**. Across the six pages: 447
  external deps, **0 unresolved, 0 homeless, 0 draft-page, 0 planned-later**.
  Per page — 22: 93 published. 23: 76 published, 20 planned-earlier. 34: 76
  published, 1 planned-earlier. 35: 54 published, 44 planned-earlier. 60: 51
  published, 1 planned-earlier. 61: 26 published, 51 planned-earlier.

**Zero forward references in this batch**, in `deps` or in `forward_refs`.

**Two new prerequisite edges**, both inside this batch and both load-bearing:

- **34 requires 22.** `lem-characteristic-of-a-domain-is-zero-or-prime` needs the
  word *prime*, which nothing in the library defines; `def-divisibility-and-primes-in-n`
  is minted at order 22 because `cor-prime-order-group-is-cyclic` needs it there
  first. One dep edge, reported by `depsource` as the single `planned-earlier` on
  page 34.
- **60 requires 34.** `lem-restriction-of-scalars` needs `def-subfield`, which is
  ring-page material. This is the single `planned-earlier` on page 60, and it is
  the answer to the brief's question in §8: pages 34 and 60 **should** connect,
  and now do, twice — once load-bearing through `def-subfield`, once as a
  Remarks-only dictionary link from `def-function-space` to `def-ring-of-functions`.

**A splice instruction, not an amendment.** `LEVELS.md` §4 says the splice takes
the **union** of `requires`. For page 61 that would be wrong: the union would
re-introduce `polynomial-rings-and-roots`, which is exactly what decision D1
removes. Page 61's `requires` must be **replaced**, not unioned, with
`["vector-spaces-and-subspaces"]`.

Owner-decision items live in my report, not here. Everything below is either
(1) an exact applyable edit to `research/plan-algebra-track.md`, or (2) an
authoring-time note with no scaffold anchor that must reach the step-5 author.

---

## 1. Prose-scaffold amendments (apply to `research/plan-algebra-track.md`)

### 1.1 AA-2 audit block (new)

**Section:** `## AA-2. Cosets, Index and Lagrange's Theorem  (order 22)`
**Edit:** insert immediately after the `requires:` line and its following blank
line:

```
**Level-8-algebra audit, 2026-07-27 (batch 1).** Five notes bind authoring of
this page pair. (1) THE LIBRARY HAS NO FINITE CARDINAL ARITHMETIC. Lagrange is
the statement $|G| = [G:H]\,|H|$, and nothing published lets a finite set be
counted by blocks: `lem-subset-of-countable`, `lem-pigeonhole` and
`thm-product-of-countable` are about *at most countable*, not about $|A \cup B|$
or $|A \times B|$ for finite $A$ and $B$, and no item says a subset or a
surjective image of a finite set is finite. AA-2 therefore mints
`lem-finite-subset-and-image` and `lem-finite-disjoint-union-counting`, which are
general set-theoretic infrastructure homed here only because this is the first
page that needs them; AA-6 (orbit-stabiliser counting), AA-7 ($|S_n| = n!$,
$|A_n| = n!/2$) and LA-2 (dimension) must CITE them and must not re-mint.
(2) NEITHER IS THERE A DEFINITION OF *PRIME*. "A group of prime order is cyclic"
needs one, so AA-2 mints `def-divisibility-and-primes-in-n`, divisibility and
primality for NATURAL numbers, with a proved dictionary against the integer
relation $b \mid a$ that the published `thm-division-algorithm-in-z` already
defines. AA-10 still owns *prime element of a domain* and must relate the two
rather than re-mint. (3) FERMAT AND EULER LEAVE THIS PAGE. Both are the single
group fact $g^{|G|} = e$ read in $(\mathbb{Z}/n)^\times$, and both need the ring
$\mathbb{Z}/n$ and the characterisation of its units by coprimality, hence
Bezout. $\mathbb{Z}/n$ is not on any spine below order 36 (see note 5) and Bezout
is AA-10, order 38. They move to AA-10, and AA-2 keeps the whole group-theoretic
content plus a `rem-` recording what the specialisation still requires.
(4) THE $A_4$ COUNTEREXAMPLE STAYS OUT, and the reason changed at level 7:
$\operatorname{Sym}(X)$ is now published at order 20, so $S_4$ IS available here,
but the *even* permutations are not, and defining $A_4$ without
$\operatorname{sgn}$ costs an explicit twelve-element closure verification.
AA-7 gets $A_4$ for free from the sign homomorphism and from $|A_n| = n!/2$.
AA-2's B page instead proves the positive statement that in a CYCLIC group every
divisor of the order is the order of a subgroup. (5) $\mathbb{Z}/n$ IS NOT
CITABLE FROM HERE. `ex-integers-mod-n-additive-group` is published on
`monoids-groups-and-subgroups-examples`, a B page, and B pages are leaves
(SCHEMA §7, `validate-plan`'s `b-leaf`), so no A page and no other B page may
depend on it. AA-2's B page rebuilds the cosets of $n\mathbb{Z}$ from
`def-generated-subgroup` and `thm-division-algorithm-in-z` instead. AA-3 must
home $\mathbb{Z}/n\mathbb{Z}$ on its A page, not its B page (see the AA-3 note
below), because AA-5 needs it on a spine.
```

### 1.2 AA-2 inventory — replace

**Section:** `## AA-2. …`, the inventory paragraph.
**Old text:**
```
Left and right cosets; cosets partition the group (via the equivalence relation
$a \sim b \iff a^{-1}b \in H$); every coset is equinumerous with $H$
(well-definedness #2); **index** $[G:H]$; **Lagrange's theorem**; the order of an
element divides the order of the group; a group of prime order is cyclic;
$g^{|G|} = e$; **Fermat's little theorem** and **Euler's theorem** as corollaries
in $(\mathbb{Z}/n)^\times$.
```
**New text:**
```
Left and right cosets; cosets partition the group (via the equivalence relation
$a \sim b \iff a^{-1}b \in H$, citing `def-equivalence-relation` and
`lem-equivalence-classes-partition` from AA-1); every coset is equinumerous with
$H$ (well-definedness #2); the left cosets and the right cosets are equinumerous
with each other, which is what earns the definite article in "the index";
**finite counting infrastructure**, minted here because nothing published
supplies it: a subset and a surjective image of a finite set are finite, and a
finite disjoint union of $k$ blocks of $m$ elements has $km$ elements;
**divisibility and primality in $\mathbb{N}$**, likewise minted here, with the
dictionary against the integer relation of `thm-division-algorithm-in-z`;
**index** $[G:H]$, defined without any finiteness hypothesis on $G$;
**Lagrange's theorem**; the order of an element divides the order of the group;
$g^{|G|} = e$; a group of prime order is cyclic and has no proper nontrivial
subgroups; the index tower $[G:K] = [G:H][H:K]$ for $K \le H \le G$ finite; and a
`rem-` recording that **Fermat's little theorem** and **Euler's theorem** are
$g^{|G|} = e$ read in $(\mathbb{Z}/n)^\times$, and that proving that instance
still requires the ring $\mathbb{Z}/n$ and Bezout's identity, which is why they
are stated at AA-10 and not here.
```

### 1.3 AA-2 B page — replace

**Section:** `## AA-2. …`, the `B page:` paragraph.
**Old text:**
```
B page: cosets of $n\mathbb{Z}$ in $\mathbb{Z}$; a group with no subgroup of a
given order dividing $|G|$ (so **the converse of Lagrange is false**: $A_4$ has no
subgroup of order 6) as a false-statement item; left cosets that are not right
cosets.
```
**New text:**
```
B page: the cosets of $n\mathbb{Z} = \langle n \rangle$ in $(\mathbb{Z},+)$ for
$n \ge 1$, giving $[\mathbb{Z}:n\mathbb{Z}] = n$, built from
`def-generated-subgroup` and `thm-division-algorithm-in-z` and NOT from the
published `ex-integers-mod-n-additive-group`, which lives on a B page and is
therefore not citable; the two degenerate indices $[G:G] = 1$ and
$[G:\{e\}] = |G|$; the subgroups of $\operatorname{Sym}(\{1,2,3\})$ with their
orders $1,2,3,6$, all dividing $6$; a left coset that is not a right coset, in
$\operatorname{Sym}(\{1,2,3\})$; in a cyclic group of order $n$, every divisor of
$n$ is the order of a subgroup, which is the true half of the converse of
Lagrange and is what this page can prove; $2\mathbb{Z}$ has index $2$ in
$\mathbb{Z}$ and is equinumerous with it, so Lagrange has no equinumerosity
analogue for infinite groups; $HK$ need not be a subgroup, refuted by Lagrange
itself since $|HK| = 4$ does not divide $6$ in $\operatorname{Sym}(\{1,2,3\})$;
and the false statement that every left coset is a subgroup. The $A_4$
counterexample to the converse of Lagrange moves to AA-7's B page (audit note 4).
```

### 1.4 AA-2 Traps — replace

**Section:** `## AA-2. …`, the `Traps.` paragraph.
**Old text:**
```
Traps. Lagrange needs $G$ finite; the index is defined without finiteness and the
statement must say which is which. $A_4$ requires $S_4$, which is only formally
introduced at AA-7; either construct the twelve elements concretely here or move
that counterexample to AA-7's B page. Prefer the latter. The coset partition
cites `def-equivalence-relation` and `lem-equivalence-classes-partition`,
minted on AA-1 (batch-1 audit note 1); this page does not build its own
equivalence-relation machinery.
```
**New text:**
```
Traps. Lagrange needs $G$ finite; the index is defined without finiteness and the
statement must say which is which. $A_4$ moves to AA-7's B page, and the reason
is the sign homomorphism rather than $S_4$: since level 7 `def-symmetric-group`
is published at order 20, so $S_4 = \operatorname{Sym}(\{1,2,3,4\})$ is available
here, but the even permutations are not, and defining $A_4$ without
$\operatorname{sgn}$ means verifying closure of an explicit twelve-element set.
The coset partition cites `def-equivalence-relation` and
`lem-equivalence-classes-partition`, minted on AA-1 (level-7 audit note 1); this
page does not build its own equivalence-relation machinery. It DOES build finite
counting arithmetic, because none exists (level-8 audit note 1): do not assume
$|A \cup B| = |A| + |B|$ or that a subset of a finite set is finite without
citing the two lemmas minted here.
```

### 1.5 AA-3 — home $\mathbb{Z}/n\mathbb{Z}$ on the A page, not the B page

**Section:** `## AA-3. Normal Subgroups and Quotient Groups  (order 24)`, the
`B page:` paragraph.
**Old text:**
```
B page: $\mathbb{Z}/n\mathbb{Z}$ as a quotient; a non-normal subgroup with an
explicit pair of representatives whose products land in different cosets, which is
the counterexample that makes #3 mean something; $S_3 / A_3$.
```
**New text:**
```
**Seam obligation from level-8 batch 1:** $\mathbb{Z}/n\mathbb{Z} = \mathbb{Z}/\langle n \rangle$
must be an item on THIS page's A list, not on its B list. The only
$\mathbb{Z}/n$ in the library is `ex-integers-mod-n-additive-group`, published on
`monoids-groups-and-subgroups-examples`, and B pages are leaves, so nothing may
depend on it; AA-5 (order 28) needs $\mathbb{Z}/n$ on a spine for "every cyclic
group is isomorphic to $\mathbb{Z}$ or to $\mathbb{Z}/n$", and AA-9 (order 36)
needs the ring. AA-3 is the first page that can supply it. The A-page item must
also record, in the style of `def-metrizable-space`, that it agrees with the
published example rather than competing with it.

B page: a non-normal subgroup with an explicit pair of representatives whose
products land in different cosets, which is the counterexample that makes #3 mean
something; $S_3 / A_3$; the quotient of $\mathbb{Z}$ by $n\mathbb{Z}$ worked out
concretely against the A-page construction.
```

### 1.6 AA-6 — cite the counting lemmas, do not re-mint them

**Section:** `## AA-6. Group Actions, Orbits, Stabilisers and Cayley's Theorem  (order 30)`
**Old text:**
```
orbit; stabiliser is a subgroup; orbits partition
$X$; **the orbit-stabiliser theorem**; **Cayley's theorem**; the conjugation
```
**New text:**
```
orbit; stabiliser is a subgroup; orbits partition
$X$; **the orbit-stabiliser theorem**, whose counting form cites
`lem-finite-disjoint-union-counting` and `lem-finite-subset-and-image` from AA-2
(level-8 batch-1 audit note 1) and does NOT re-derive finite cardinal arithmetic;
**Cayley's theorem**; the conjugation
```

### 1.7 AA-7 B page — record the inherited $A_4$ obligation

**Section:** `## AA-7. Symmetric Groups, Cycle Decomposition and the Sign Homomorphism  (order 32)`, the `B page:` paragraph.
**Old text:**
```
B page: $S_3$ in full; $A_4$ has no subgroup of order 6 (the converse of Lagrange,
moved here from AA-2); a permutation written as transpositions in two different
ways with the same parity; $\operatorname{sgn}$ of an $n$-cycle is $(-1)^{n-1}$.
```
**New text:**
```
B page: $S_3$ in full; **$A_4$ has no subgroup of order 6, so the converse of
Lagrange is false** — this is a FIRM obligation inherited from AA-2 (level-8
batch-1 decision D3), not an optional extra, and AA-2's B page states only the
positive cyclic-group half, so if this item is dropped the library never refutes
the converse. The argument available is coset-theoretic and needs nothing from
this page beyond $A_4$ itself: a subgroup of index $2$ contains every square, and
every $3$-cycle is the square of its own square, so an $H$ with $|H| = 6$ would
contain all eight $3$-cycles. $|S_n| = n!$ and $|A_n| = n!/2$ must cite
`lem-finite-disjoint-union-counting` and `lem-finite-subset-and-image` from AA-2
rather than re-deriving finite counting. Also: a permutation written as
transpositions in two different ways with the same parity;
$\operatorname{sgn}$ of an $n$-cycle is $(-1)^{n-1}$.
```

### 1.8 AA-8 inventory — replace

**Section:** `## AA-8. Rings, Subrings, Integral Domains and Fields  (order 34)`,
the inventory paragraph.
**Old text:**
```
**Ring** (abelian group under $+$, monoid under $\cdot$, distributive); ring with
identity; **commutative ring**; the elementary consequences $0 \cdot a = 0$,
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
**CONVENTION, fixed at level-8 batch 1 and binding on the whole track: a ring
HAS an identity.** The scaffold's own gloss "monoid under $\cdot$" already says
so, and it is the Wikipedia and modern convention, so the phrase "ring with
identity" is redundant and is dropped; a structure satisfying every axiom except
the existence of $1$ is a **non-unital ring** and is not called a ring here. The
consequence is that $2\mathbb{Z}$ is NOT a subring of $\mathbb{Z}$, which is why
the B page carries it as a counterexample rather than as an example.

**Ring** (abelian group under $+$, monoid under $\cdot$, distributive on both
sides, since multiplication is not assumed commutative and the published
`def-field` states only the left form); **commutative ring**; the elementary
consequences $0 \cdot a = a \cdot 0 = 0$, $(-a)b = -(ab)$, $(-1)a = -a$;
**integer multiples** $ma$ and the identities $(ma)(nb) = (mn)(ab)$, obtained
from the published `def-group-power` read additively rather than from a new
recursion; **unit** and the group of units $R^\times$, obtained from the
published `lem-monoid-units-form-a-group` applied to the multiplicative monoid,
not re-proved; **zero divisor**; **integral domain**; cancellation
characterises domains; **division ring**; the **bridges**
`lem-field-is-a-commutative-ring` and `lem-commutative-division-ring-is-a-field`
against the published `def-field`; **ordered ring**, together with
`lem-ordered-ring-cone-and-order-agree` reconciling the positive-cone
presentation of `def-ordered-field` with the total-order presentation of
`thm-int-ordered-ring`, and then `lem-ordered-field-is-an-ordered-ring`;
**subring** and the subring criterion; **subfield**, which is what the vector
space page at order 60 restricts scalars along; ring homomorphism, with $f(1)=1$
imposed rather than derived, and its basic properties; the bridge
`lem-ring-homomorphism-of-fields-is-a-field-homomorphism`; **product rings**;
**the ring $R^X$ of functions with pointwise operations**, minted here because
order 60 points back at it when it puts a vector-space structure on the same set;
characteristic of a ring, well defined by well-ordering and proved to agree with
the published `def-canonical-natural` when the ring is a field; the
characteristic of a domain is $0$ or prime, citing
`def-divisibility-and-primes-in-n` from AA-2.
```

### 1.9 AA-8 B page — replace

**Section:** `## AA-8. …`, the `B page:` paragraph.
**Old text:**
```
B page: the retro-instantiations `ex-integers-as-a-commutative-ring`,
`ex-integers-are-an-integral-domain-not-a-field`, `ex-rationals-and-reals-as-fields`;
$\mathbb{Z}/n$ has zero divisors exactly when $n$ is composite; **the quaternions
$\mathbb{H}$**, a division ring that is not a field, kept because the determinant
page needs it; $2\mathbb{Z}$ is a subring without identity; the zero ring and why
$1 \ne 0$ is required of a field.
```
**New text:**
```
B page: the retro-instantiations `ex-integers-as-a-commutative-ring`,
`ex-integers-are-an-integral-domain-not-a-field`,
`ex-rationals-and-reals-as-fields`, and a fourth,
`ex-cauchy-sequences-as-a-commutative-ring`, which reads `thm-cauchy-ring` as an
instance and observes that $\mathcal{C}$ has zero divisors, so it is NOT a
domain — which is precisely why the construction of $\mathbb{R}$ has to quotient
by a maximal ideal rather than by any ideal, the point AA-9 then makes;
**the quaternions $\mathbb{H}$**, a division ring that is not a field, kept
because the determinant page needs it; a product of two nonzero rings always has
zero divisors, which is the zero-divisor witness available at this order;
$2\mathbb{Z}$ is closed under $+$, $-$ and $\cdot$ and is NOT a subring, because
it does not contain $1$; the zero ring, of characteristic $1$, and why $1 \ne 0$
is required of a field; a map preserving $+$ and $\cdot$ but not $1$, showing the
homomorphism clause is not redundant; and the false statement that every nonzero
element of a commutative ring is a unit or a zero divisor, refuted by $2$ in
$\mathbb{Z}$. **$\mathbb{Z}/n$ has zero divisors exactly when $n$ is composite
MOVES to AA-9's B page** (level-8 batch-1 finding): the ring $\mathbb{Z}/n$ does
not exist below order 36, since the only $\mathbb{Z}/n$ in the library is an
additive group on a B page at order 21 and B pages are leaves.
```

### 1.10 AA-8 Traps — replace

**Section:** `## AA-8. …`, the `Traps.` paragraph.
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
the characteristic item must PROVE the two agree, both being the unique function
given by the same recursion. Finally, reading axiom (M) of the published
`def-field`: its gloss "multiplication is associative and commutative,
$x \cdot 1 = x$ for all $x$" is unqualified, so it asserts those on all of $F$ and
not only on $F \setminus \{0\}$; that is how the library already reads it (the
published `lem-of-zero-mult` uses right-distributivity, which needs commutativity
at $0$), and `lem-field-is-a-commutative-ring` must state the reading in its
Facts rather than let it pass silently.
```

### 1.11 AA-9 — inherit the $\mathbb{Z}/n$ zero-divisor example

**Section:** `## AA-9. Ideals, Quotient Rings and the Isomorphism Theorems for Rings  (order 36)`, the `B page:` paragraph.
**Old text:**
```
$n\mathbb{Z}$ is maximal iff $n$ is prime; a prime ideal that is not maximal
```
**New text:**
```
$\mathbb{Z}/n$ has zero divisors exactly when $n$ is composite, inherited from
AA-8's B page (level-8 batch-1 finding: the ring $\mathbb{Z}/n$ does not exist
below this page); $n\mathbb{Z}$ is maximal iff $n$ is prime; a prime ideal that is
not maximal
```

### 1.12 AA-10 — inherit Fermat and Euler, and close the primality seam

**Section:** `## AA-10. Divisibility, Euclidean Domains, PIDs and Unique Factorisation  (order 38)`
**Old text:**
```
`lem-order-characterisation`. AA-10 must state explicitly that its general
divisibility in a domain restricts to that relation on $\mathbb{Z}$, and that
"$\mathbb{Z}$ is Euclidean" is `thm-division-algorithm-in-z` and not a second
proof of it. Silent re-definition is the level-7 two-notions-of-open defect.
```
**New text:**
```
`lem-order-characterisation`. AA-10 must state explicitly that its general
divisibility in a domain restricts to that relation on $\mathbb{Z}$, and that
"$\mathbb{Z}$ is Euclidean" is `thm-division-algorithm-in-z` and not a second
proof of it. Silent re-definition is the level-7 two-notions-of-open defect.
**Second seam obligation, added at level-8 batch 1:** AA-2 (order 22) mints
`def-divisibility-and-primes-in-n`, divisibility and primality for natural
numbers, because "a group of prime order is cyclic" and "the characteristic of a
domain is $0$ or prime" both need the word and nothing earlier supplies it. AA-10
must state that its *prime element of a domain*, restricted to the positive
integers, is exactly that notion, and must not re-mint it.
**Third obligation, inherited from AA-2 (level-8 batch-1 decision D2):**
**Fermat's little theorem** and **Euler's theorem** are stated HERE, not at
AA-2. They are the single group fact `cor-g-to-the-group-order-is-identity`
(order 22) read in $(\mathbb{Z}/n)^\times$, and what AA-2 could not supply is the
ring $\mathbb{Z}/n$ (order 36 at the earliest) and the characterisation of its
units as the classes coprime to $n$, which is Bezout, this page. So: define
Euler's totient as $|(\mathbb{Z}/n)^\times|$, prove $\bar a \in (\mathbb{Z}/n)^\times
\iff \gcd(a,n) = 1$ from Bezout, and then CITE AA-2's corollary rather than
re-proving Lagrange. AA-2 carries a `rem-` pointing here; if these items are
dropped, that remark becomes false and the library never states either theorem.
```

### 1.13 LA-1 requires — record the new prerequisite

**Section:** `## LA-1. Vector Spaces, Subspaces, Span and Direct Sums  (order 60)`
**Old text** (the identical `requires` line also occurs under AA-8, order 34, so
the heading line is included to disambiguate; do NOT edit the AA-8 one):
```
## LA-1. Vector Spaces, Subspaces, Span and Direct Sums  (order 60)

`requires`: `monoids-groups-and-subgroups`, `foundations-of-the-real-numbers`
```
**New text:**
```
## LA-1. Vector Spaces, Subspaces, Span and Direct Sums  (order 60)

`requires`: `monoids-groups-and-subgroups`, `rings-subrings-and-integral-domains`,
`foundations-of-the-real-numbers`

The ring page is a prerequisite for exactly one reason and it is load-bearing:
restriction of scalars needs `def-subfield`, and a subfield is ring-page material.
The second, lighter connection is a Remarks-only dictionary link from the vector
space $F^X$ to the ring $R^X$ of `def-ring-of-functions`, same set, same addition,
different second operation.
```

### 1.14 LA-1 inventory — replace

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
with the product left to order 66; restriction of scalars along a subfield;
**linear subspace** — the id and the title say LINEAR, because the library
already uses "subspace" for the topological notion at order 96 — and the one-step
subspace test; a linear subspace is a subgroup of the additive group, and
conversely; intersections of linear subspaces; **span**, defined as the
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

### 1.15 LA-1 B page — replace

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
B page: $\mathbb{R}$ over itself and over the embedded copy of $\mathbb{Q}$;
$F^3$ with its three coordinate lines as an internal direct sum, and $F^0$ as the
zero space; $F^{\mathbb{N}}$ with the eventually zero families as a subspace;
a subset closed under addition and not under scaling (the first quadrant of
$\mathbb{R}^2$) and one closed under scaling and not under addition (a union of
two axes), so that neither closure condition implies the other; three lines in
$F^2$ meeting pairwise only in $0$ whose sum is not direct, which is what makes
the $n$-summand criterion mean something; two planes in $F^3$ with their sum and
intersection computed; and the false statement that the union of two linear
subspaces is a linear subspace.

**Two items are DEFERRED, not deleted** (level-8 batch-1 decision D1). $F[x]$ and
$F[x]_{\le n}$ need `polynomial-rings-and-roots`, order 40, which is unbuilt, so
they cannot be authored at order 61; and $\mathbb{C}$ as a real and as a complex
vector space needs `field-extensions-and-the-complex-numbers`, order 42, likewise
unbuilt. Both are natural B-page items for LA-2 (order 63, where $\{1,x,x^2,\dots\}$
is already planned as a basis) or for a later revisit; whichever page takes them
must also then declare the corresponding `requires` edge. Page 61's `requires`
drops `polynomial-rings-and-roots` accordingly, so that all six level-8-algebra
pages can publish together.
```

### 1.16 LA-1 Traps — replace

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
use in this library for the topological notion, so the ids and titles here say
LINEAR subspace. The $n$-summand direct sum criterion is
$U_j \cap \sum_{i \ne j} U_i = \{0\}$; the pairwise version is false and the
companion page carries the witness.
```

### 1.17 LA-2 — cite the counting lemmas, and take the two deferred LA-1 items

**Section:** `## LA-2. Linear Independence, Bases and Dimension  (order 62)`
**Old text:**
```
Linear combination; **linear independence**; a set is dependent iff some element
lies in the span of the others; **basis**; coordinates with respect to an ordered
basis exist and are **unique**;
```
**New text:**
```
Linear combination and span are LA-1's, cited not re-minted; **linear
independence**; a set is dependent iff some element lies in the span of the
others; **basis**; coordinates with respect to an ordered basis exist and are
**unique**; the finite counting facts this page needs — a subset of a finite set
is finite, a finite disjoint union counts, a set of $n$ elements does not inject
into one of $m < n$ — are `lem-finite-subset-and-image`,
`lem-finite-disjoint-union-counting` (both AA-2, order 22) and the published
`lem-pigeonhole`, and are cited rather than re-derived. Its B page is also the
natural home for the two items deferred from LA-1's B page, $F[x]$ with
$\{1,x,x^2,\dots\}$ and $F[x]_{\le n}$, since it already plans that basis — but
only if `polynomial-rings-and-roots` (order 40) is by then built and declared in
`requires`;
```

### 1.18 LA-4 — reuse the matrix vector space rather than re-minting it

**Section:** `## LA-4. Matrices, the Matrix of a Linear Map, and Change of Basis  (order 66)`
**Old text:**
```
Matrices over $F$; addition, scaling, **the product** and its associativity;
```
**New text:**
```
Matrices over $F$ are `def-matrix-space` from LA-1 (order 60), which already
gives $M_{m \times n}(F) = F^{\,m \times n}$ its addition and scaling as a vector
space; this page adds **the product** and its associativity and does NOT re-mint
the additive structure;
```

### 1.19 Well-definedness table — name the discharging items for row 2, and add the new rows

**Section:** `## Well-definedness obligations`, the table.
**Old text:**
```
| 2 | 22 | index $[G:H]$ | all left cosets of $H$ are equinumerous with $H$ |
```
**New text:**
```
| 2 | 22 | index $[G:H]$ | `lem-coset-partition` makes $G/H$ a quotient set; claim 3 of `lem-pigeonhole` makes $\|G/H\|$ a unique natural; and `lem-left-and-right-cosets-equinumerous` is what earns the definite article, since "the index" presupposes that counting left cosets and right cosets agree. `lem-coset-equinumerous-with-subgroup` (every coset is equinumerous with $H$) is what Lagrange rests on, not what defines the index |
| 2b | 22 | divisibility and primality in $\mathbb{N}$ | minted here because nothing earlier defines *prime*; must be PROVED to agree with the integer relation $b \mid a$ of `thm-division-algorithm-in-z` under `lem-nat-embeds-int`, not merely asserted to |
| 5b | 34 | characteristic of a ring | the set $\{n \ge 1 : n \cdot 1_R = 0\}$ has a least element when nonempty (`thm-well-ordering-principle`); and $n \cdot 1_R$ must be proved to be the published `def-canonical-natural` when $R$ is a field, both being the unique function with the same recursion (`thm-recursion`) |
| 5c | 34 | subring, subfield | the restricted operations really are operations on the subset, and the subset really is a ring (resp. a field) with them, with the SAME $0$ and $1$; the additive half is the published `def-subgroup`/`lem-subgroup-criterion` and is cited |
| 12b | 60 | span | the family of linear subspaces containing $S$ is nonempty and its intersection is a linear subspace (`lem-intersection-of-linear-subspaces`), which is what licenses "the smallest"; the empty combination is $0_V$, so $\operatorname{span}(\varnothing) = \{0_V\}$ is a consequence, not a stipulation |
| 12c | 60 | internal direct sum of $n$ summands | the criterion is $U_j \cap \sum_{i \ne j} U_i = \{0\}$ for every $j$; PAIRWISE trivial intersection is not sufficient and the companion page carries the counterexample |
```

### 1.20 "What step 1 must decide" items 2 and 3 — record the decisions

**Section:** `## What step 1 must decide, per page`
**Old text:**
```
2. **AA-2 / AA-7**: where the $A_4$ counterexample to the converse of Lagrange
   lives (AA-7's B page recommended, since $S_4$ is only available there).
```
**New text:**
```
2. **AA-2 / AA-7**: where the $A_4$ counterexample to the converse of Lagrange
   lives. **DECIDED 2026-07-27 (level-8 batch 1): AA-7's B page**, and the
   recorded reason is now wrong and is corrected here. $S_4$ IS available at
   AA-2, because level 7 moved `def-symmetric-group` down to order 20; what is
   not available is the SIGN homomorphism, without which $A_4$ can only be given
   as an explicit twelve-element set whose closure must be checked by hand. AA-7
   gets it from $\operatorname{sgn}$ and from $\|A_n\| = n!/2$. AA-2's B page
   states the true positive half instead: in a cyclic group every divisor of the
   order is the order of a subgroup.
```
**Old text:**
```
   enters only at $(\mathbb{Z}/n)^\times$ (AA-2's Euler theorem) and at
   $\operatorname{ord}(g^k) = n/\gcd(n,k)$ (AA-5), so the question is genuinely
   AA-5's and AA-2's, not AA-1's.
```
**New text:**
```
   enters only at $(\mathbb{Z}/n)^\times$ (Euler's theorem) and at
   $\operatorname{ord}(g^k) = n/\gcd(n,k)$ (AA-5), so the question is genuinely
   AA-5's, not AA-1's. **DECIDED for AA-2 (2026-07-27, level-8 batch 1): AA-2
   uses NO gcd, because Fermat and Euler move to AA-10**, which owns Bezout and
   where the ring $\mathbb{Z}/n$ exists. AA-2 does mint
   `def-divisibility-and-primes-in-n`, divisibility and primality for naturals,
   which is not gcd theory and which AA-10 must relate to its prime elements
   rather than re-mint.
```

---

## 2. Authoring notes for the step-5 author (no scaffold anchor)

### 2.0 How to read the `strategy` field in this batch

On a proof-bearing item `strategy` is the usual `proof_strategy` value (`direct`,
`induction`, …) and goes into frontmatter verbatim. On a **definition** it is not
a proof strategy at all: it is the WELL-DEFINEDNESS OBLIGATION, written out so
step 5 cannot skip it. A `def-` item has no `proof_strategy` in frontmatter
(SCHEMA §3, `verification.precheck: n/a`), so **do not copy those strings into
frontmatter** — discharge them in the body.

### 2.1 The three proof routes that are load-bearing and easy to get wrong

**`lem-finite-subset-and-image`.** Do not try to prove "a subset of a finite set
is finite" from scratch. `lem-subset-of-countable` states, in its Statement and
not merely in its proof, the sharper fact that *a subset $S \subseteq \mathbb{N}$
is finite if it is bounded above*. Transport $B \subseteq A$ along a bijection
$A \to n$; the image is a subset of $n$, hence bounded above by $n$; done. For
the surjective image, build the injection canonically as
$j(c) = \min\{i \in n : g(i) = c\}$, exactly as `lem-countable-iff-surjection-from-n`
does, so **no choice principle is used** and the item can say so truthfully.

**`lem-finite-disjoint-union-counting`.** Induct on $k$, the number of blocks, and
note that the base case $k = 0$ is the empty union, $\varnothing \approx 0 = 0 \cdot m$.
At the successor step you instantiate ONE existential bijection for ONE block;
that is ordinary existential instantiation inside an induction, not a choice
principle, and the item should say which it is rather than leave the reader to
wonder. You will need $\sigma(k) \cdot m = k \cdot m + m$, which is not the
defining recursion of `def-nat-multiplication`; get it from
`lem-nat-mult-distributive` and `lem-nat-mult-commutative`.

**`thm-lagrange`.** The chain is: $H$ is finite (claim 1 of
`lem-finite-subset-and-image`); $G/H$ is finite, because $\pi : G \to G/H$ is
surjective (claim 2); the members of $G/H$ are pairwise disjoint and their union
is $G$ (`lem-coset-partition`, which is `lem-equivalence-classes-partition`
applied to $\sim_H$); each is equinumerous with $H$
(`lem-coset-equinumerous-with-subgroup`); so $G \approx [G:H] \cdot |H|$
(`lem-finite-disjoint-union-counting`); and $|G| = [G:H] \cdot |H|$ because a
finite set is equinumerous with exactly ONE natural, claim 3 of `lem-pigeonhole`.
Every link is an existing item; none of it may be waved through.

### 2.2 `deps` vs `justified_by` on the definitions with obligations

Everything discharging an obligation in this batch is stated BEFORE the
definition it justifies and does not mention the object being defined, so it is a
genuine prerequisite and goes in **`deps`**: `lem-coset-partition`,
`lem-left-and-right-cosets-equinumerous` and `lem-pigeonhole` under `def-index`;
`thm-well-ordering-principle` and `lem-integer-multiples-in-a-ring` under
`def-ring-characteristic`; `lem-intersection-of-linear-subspaces` under
`def-linear-combination-and-span`. Putting any of them in `justified_by` will fail
`depcheck`'s `justification-backward`, which requires the target to depend
transitively on the item. `lem-span-is-the-set-of-linear-combinations` and
`lem-direct-sum-criterion` are consequences, not justifications: `deps`.

### 2.3 Index and first-value checks specific to these three page pairs

- $\mathbb{N}$ contains $0$. `lem-finite-disjoint-union-counting` starts at
  $k = 0$ with the empty union; `def-linear-combination-and-span` starts at
  $n = 0$ with the empty sum $0_V$; `def-sum-of-linear-subspaces` and
  `def-internal-direct-sum` start at $n = 0$ with $\{0_V\}$.
- $F^n$ has coordinates $x_0, \dots, x_{n-1}$, because $n = \{0,\dots,n-1\}$ is a
  von Neumann natural (`lem-nat-order-is-membership`). $F^0$ is the ONE-element
  space whose only member is the empty function, not the empty set. Every tuple
  on pages 60 and 61 starts at index $0$; matrix entries are $a_{ij}$ with
  $i \in m$ and $j \in n$, both from $0$.
- `ex-cosets-of-nz-in-z`: **$n \ge 1$**. At $n = 0$, $0\mathbb{Z} = \{0\}$ and the
  index is infinite, so "there are exactly $n$ cosets" is false there. Title and
  Statement both carry the hypothesis.
- `def-divisibility-and-primes-in-n`: $0$ and $1$ are neither prime nor
  composite; $d \mid 0$ for every $d$ including $0$; $0 \mid n$ only for $n = 0$.
  Say all three.
- `def-ring-characteristic`: the value in the "no such $n$" case is $0$, not
  $\infty$ — the opposite convention to `def-order-in-a-group`, deliberately,
  because it is the standard one. Say so, so a reader who has just read
  `def-order-in-a-group` is not misled.
- `ex-the-zero-ring` has characteristic $1$, since $1 \cdot 1_R = 1_R = 0_R$. It
  is the one ring whose characteristic is neither $0$ nor prime, and it is
  excluded from `lem-characteristic-of-a-domain-is-zero-or-prime` by $1 \ne 0$.

### 2.4 A natural number is a set, and there are now three $\iota$'s

`lem-nat-embeds-int` writes $\iota(n) = [(n,0)]$ for $\mathbb{N} \to \mathbb{Z}$;
`def-canonical-natural` writes $\iota(n) = n \cdot 1_F$ for $\mathbb{N} \to F$;
and page 34 uses the additive power $n \cdot 1_R$ of `def-group-power` for
$\mathbb{N} \to R$, which is the second one when $R$ is a field and must be
proved to be. Where any page in this batch writes $\iota$, say which. In
particular $|G|$, $[G:H]$ and $\operatorname{ord}(g)$ are NATURAL numbers, so
they are sets and not elements of any field; `thm-lagrange` states
$|G| = [G:H] \cdot |H|$ in $\mathbb{N}$, using `def-nat-multiplication`, and only
the Remarks relate it to the integer divisibility of
`thm-division-algorithm-in-z`.

### 2.5 What the B-page items must actually cite, and for what

- `ex-cosets-of-nz-in-z` may NOT cite `ex-integers-mod-n-additive-group`, which is
  published on `monoids-groups-and-subgroups-examples`, a B page. B pages are
  leaves. Rebuild $n\mathbb{Z}$ as $\langle n \rangle$ from
  `def-generated-subgroup` and `lem-cyclic-subgroup-is-the-set-of-powers`, and
  get the $n$ classes from `thm-division-algorithm-in-z`. The same prohibition
  applies to `ex-subgroups-of-the-integers`, `ex-klein-four-group`,
  `ex-symmetric-group-on-three-letters` and `fs-union-of-two-subgroups-is-a-subgroup`,
  all of which are on that same B page and all of which are tempting here.
- `cex-left-coset-that-is-not-a-right-coset`: the published `def-symmetric-group`
  fixes composition as $(f \circ g)(x) = f(g(x))$, right-to-left. With
  $H = \{\mathrm{id},(1\,2)\}$ and $g = (1\,3)$ that gives
  $g \circ (1\,2) = (1\,2\,3)$ and $(1\,2) \circ g = (1\,3\,2)$, so
  $gH = \{(1\,3),(1\,2\,3)\}$ and $Hg = \{(1\,3),(1\,3\,2)\}$. Compute both
  composites explicitly in the proof; a reader who assumes left-to-right gets the
  two sets swapped and the item still looks right, which is exactly the kind of
  defect no gate can see.
- `ex-integers-are-an-integral-domain-not-a-field` must derive $\mathbb{Z}^\times
  = \{1,-1\}$ from `thm-int-ordered-ring` (if $u \ge 1$ then $2u \ge 2 > 1$, and
  if $u \le 0$ then $2u \le 0$), not from the published
  `ex-integers-under-addition`, which is on a B page.
- `ex-quaternions-as-a-division-ring` is the highest-effort item in the batch.
  Define $\mathbb{H}$ as $\mathbb{R}^4$ with the basis $1, i, j, k$ and the
  multiplication extended $\mathbb{R}$-bilinearly from the table; prove
  associativity ON THE BASIS and then note that both sides of $(xy)z = x(yz)$ are
  $\mathbb{R}$-trilinear in $(x,y,z)$, so agreeing on basis triples is enough.
  Do NOT attempt sixty-four expanded cases. The norm is
  $N(q) = a^2+b^2+c^2+d^2$, positive for $q \ne 0$ by `lem-of-square-positive`,
  and $q\bar q = \bar q q = N(q)$ gives the inverse. Non-commutativity is
  $ij = k \ne -k = ji$.
- `fs-every-nonzero-element-is-a-unit-or-a-zero-divisor` is refuted by $2$ in
  $\mathbb{Z}$: not a unit (above) and not a zero divisor (`lem-int-cancellation`).
  Note in the Remarks that the statement IS true in a finite commutative ring,
  and phrase that as a fact about the statement, never as a claim about what the
  library contains.

### 2.6 Landmarks

Owner instruction: do not trim landmarks. Mark `landmark: true` on
`def-coset`, `def-index`, `thm-lagrange`, `cor-order-of-element-divides-group-order`,
`cor-g-to-the-group-order-is-identity` and `def-divisibility-and-primes-in-n`
(page 22); on `def-ring`, `def-commutative-ring`,
`def-zero-divisor-and-integral-domain`, `def-division-ring`,
`lem-field-is-a-commutative-ring`, `lem-commutative-division-ring-is-a-field`,
`def-subring`, `def-ring-homomorphism` and `def-ring-characteristic` (page 34);
and on `def-vector-space`, `def-function-space`, `def-linear-subspace`,
`def-linear-combination-and-span`, `lem-span-is-the-set-of-linear-combinations`
and `def-internal-direct-sum` (page 60). Everything else stays `false`, and B
pages carry no landmarks.

### 2.7 Renderer hazards

No `[[id]]` wikilink inside `$…$` or `$$…$$`, anywhere: the renderer rewrites
wikilinks before KaTeX runs, so such a link kills the block silently while every
gate stays green except `rendercheck`. Titles are LaTeX and are de-TeX'd by
`plainTitle` for the flowchart, so keep scripts all-or-nothing: write `g^{-1}`,
`F^{n}`, `R^{\times}`, never `g^-1` or `R^\times` bare in a title where the
script is a single token followed by more. `\operatorname{span}`,
`\operatorname{Sym}` and `\bigoplus` appear in titles on these pages; check the
flowchart labels by eye before publish, since `rendercheck` does not look at
them.

### 2.8 Page summaries are live prose

The level-7-algebra defect was a page summary asserting something a theorem on
the same page contradicted. Three specific traps for these summaries. Page 22's
summary must not say the library has no number theory or no counting arithmetic —
it now has both, on that very page; say instead what each proof requires. Page
34's summary must not say "we now define a field", because `def-field` is
published at order 9 and this page connects to it. Page 60's summary must not
promise dimension, bases or linear maps, which are orders 62 and 64, and must not
say "subspace" without the qualifier "linear".

### 2.9 A published claim to re-check when this level lands

`thm-n-cross-n-countable` (published, order 18) says halving "is not available in
$\mathbb{N}$ without first developing division with remainder". That was already
checked at level 7 and stays true: it is a claim about order 18.

**One CANDIDATE found, for the step-10b sweep to settle.**
`fs-negative-has-square-root` (published, `roots-and-rational-powers`, order 16)
says in its Remarks: "The library has no general theory of parity, so fix the
local abbreviation: call a natural $n$ **odd** when $n = 2k + 1$ for some natural
$k$." `def-divisibility-and-primes-in-n` at order 22 supplies divisibility in
$\mathbb{N}$, from which even and odd are one line, so the claim is at best
borderline once this level publishes. It is a `## Remarks` sentence in a
published item, so amending it deletes that item's `verification.judge` block per
SCHEMA §3. **Do not amend it during authoring**; it belongs in the same commit
that publishes the level, with `verification.audited` cleared, and it is the
owner's call whether it needs amending at all.

I ran one grep for this class (`does not develop`, `not defined in this library`,
`defined nowhere`, `no general theory`, `has no item`,
`not introduced in this library`, `no divisibility`, `no number theory`) over
`items/` and triaged the twelve hits; the one above is the only one this batch
touches. I did **not** grep `library/*/*.md` page summaries, and I did not
re-grep the files that level 7 already repaired.

### 2.10 Seams recorded so they are not rediscovered

- **B pages are leaves, and level 7 put four heavily reusable examples on one.**
  $(\mathbb{Z}/n,+)$, the subgroups of $\mathbb{Z}$, the Klein four-group and
  $\operatorname{Sym}(\{1,2,3\})$ are all on `monoids-groups-and-subgroups-examples`
  and are therefore unavailable to every later page. This batch re-derives what it
  needs; AA-3, AA-5 and AA-9 will each hit the same wall and should plan spine
  items rather than assume the examples are reusable.
- **`def-matrix-space` at order 60 vs matrices at order 66.** LA-1 gives
  $M_{m \times n}(F)$ its vector-space structure; LA-4 must add the product to
  that object and not define a second one. Recorded as amendment 1.18.
- **`def-ring-of-functions` at order 34 vs $F^X$ at order 60.** Same set, same
  addition, two structures. Page 60 links back in Remarks; if anyone later wants
  an $F$-algebra, it is the union of the two and belongs above both.
- **`def-ordered-ring` at order 34 vs `thm-int-ordered-ring` at order 8.** The
  published theorem states the total-order form; `def-ordered-field` states the
  positive-cone form. `lem-ordered-ring-cone-and-order-agree` is the item that
  keeps them one notion; without it this batch would ship a third
  two-notions defect.
