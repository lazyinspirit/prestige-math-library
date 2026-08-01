# Algebra track: abstract algebra and linear algebra, from the ground up

Prose scaffold, owner-commissioned 2026-07-27. Companion to
`research/plan-realanalysis-pages.md` and `research/plan-topology-track.md`.
Machine-readable half: `research/plan-spec.json` (orders 20 to 55, 68 to 93, and
the carve-out at 125 to 128).

This file is the step-0 input for the pages below. It is NOT a page and it is not
normative: `SCHEMA.md`, `CLAUDE.md`, `LEVELS.md` and `ARCHITECTURE.md` win
wherever they differ.

---

## Why this track exists

The library already asserts algebraic structure it never defines. `thm-cauchy-ring`
says the Cauchy sequences of rationals form "a commutative ring with identity".
`lem-null-ideal` says the null sequences are "an ideal ... a subgroup under
addition". `lem-null-maximal` concludes "$\mathcal{N}$ is a maximal ideal". Then
`thm-reals-field` proves that $\mathbb{R}$ is a field **by hand**.

So the construction of $\mathbb{R}$ at order 7 is exactly a quotient of a
commutative ring by a maximal ideal, carried out without any of the three words
being defined and without the general theorem that makes the conclusion
automatic. The same holds for `thm-int-comm-ring`, `thm-int-ordered-ring` and
`thm-rat-field`.

Downstream, the planned analysis pages that most need linear algebra had none
beneath them: `rn-as-a-normed-space`, `the-total-derivative`,
`inverse-and-implicit-function-theorems` and `fubini-and-change-of-variables`.
The total derivative *is* a linear map and the change of variables factor *is* a
determinant.

---

## The four owner decisions, 2026-07-27

**D1. Placement.** The track is inserted **low**, at order 20, and every existing
page from old order 20 upward shifts, keeping its relative order, so no existing
citation can become forward-pointing. Everything in analysis and topology from
order 98 up may now cite linear algebra. The pages that need analysis are carved
out to orders 125 to 128.

The binding constraint on how low it can go: finiteness (`def-countable`, aliased
`def-finite-set`) and `lem-pigeonhole` are homed on `countability-and-uncountability`,
order 18. The algebra track needs both, for the order of a group, for Lagrange,
for $S_n$, and for "finite-dimensional". Order 20 is the earliest legal slot, and
"abstract algebra requires countability-and-uncountability" is a truthful
prerequisite line, not an accident.

**D2. Scope.** Undergraduate abstract algebra as the ceiling, driven by what
linear algebra and analysis need, plus splitting fields, symmetric polynomials and
finite fields. Those last three are not needed by linear algebra; they are there
because they make an **algebraic** proof of the fundamental theorem of algebra
possible, which is what lets eigenvalue existence over $\mathbb{C}$ and the
spectral theorem land just above the intermediate value theorem instead of above
trigonometry. Orders 56 to 67 and 94 to 97 are **reserved** so that Sylow theory,
Galois theory and the structure theorem for **finitely generated** abelian groups
can be inserted later without another renumber. (The **finite** abelian case is no
longer deferred — see D7 below. Only the finitely generated case remains, because
it needs free abelian groups and Smith normal form over $\mathbb{Z}$.)

**D3. Scalars.** Vector spaces, bases, dimension, rank, eigenvalues and everything
else are over an **arbitrary field**. The determinant is developed over a
**commutative ring**, one page, deliberately, because that is what
`getcurious.cc/articles/math-determinants` does and because nothing more is
needed for the Leibniz formula. This is the track's only seam and it is stated on
purpose.

It pays for itself immediately. The characteristic polynomial is
$\det(xI - A)$, a determinant of a matrix over $F[x]$, and $F[x]$ is a **ring, not
a field**. A determinant theory built only over fields cannot define the
characteristic polynomial without a separate construction.

**D4. Bridging.** The published algebraic vocabulary is reused, never re-minted,
and the track goes back and instantiates the published constructions as cases of
the general theory. Details in the next section.

## The three further owner decisions, 2026-07-27 (second commission)

The owner commissioned an elementary number theory block "all the way up to the
fundamental theorem of arithmetic", plus the Chinese remainder theorem and the
fundamental theorem of finite abelian groups. Three decisions settled it. They
forced the **second renumber** of this track on the same day: pages at old orders
22 to 29 moved **+6**, pages at old order 30 and above moved **+8**, and orders
1 to 21 did not move. The spec went from 198 to **206** pages.

**D5. The number theory block sits at orders 22 to 27**, directly above AA-1 and
below everything else in the track. Three A pages with their example siblings:
NT-1 divisibility and Bézout, NT-2 primes and the fundamental theorem of
arithmetic, NT-3 congruences and the Chinese remainder theorem.

The binding constraint on how low it can go is the mirror of D1's:
**`thm-division-algorithm-in-z` is published on AA-1 at order 20.** Number theory
cannot sit below 20 without re-minting division with remainder, which is the
two-notions defect by construction. Order 22 is the earliest legal slot.

Placing it here rather than in the reserved band closes **three open wounds at
once**, all of which are recorded elsewhere in this file and were live before the
block existed:

1. **AA-2 wanted Fermat's little theorem and Euler's theorem** as corollaries of
   Lagrange but had no $\gcd$, so no way to say which classes are units. NT-3
   supplies $(\mathbb{Z}/n)^\times$ and $\varphi$, and AA-2 now ships both exactly
   as its inventory always planned.
2. **AA-5's own Traps paragraph admitted it used $\gcd$ before AA-10 defines it.**
   That trap is now discharged: $\gcd$ arrives at order 22, AA-5 at order 34.
3. **The fundamental theorem of arithmetic existed nowhere below order 46**, and
   only there as a corollary of PID implies UFD — never proved elementarily.

**D6. The fundamental theorem of arithmetic is proved TWICE, with an explicit
agreement item.** NT-2 (order 24) proves it for $\mathbb{Z}$ from Bézout, Euclid's
lemma and strong induction. AA-10 (order 46) proves PID implies UFD by a
genuinely different argument (ascending chains, irreducible implies prime in a
PID). A dedicated item then **proves the two agree** — that NT-2's "prime"
coincides with "irreducible in $\mathbb{Z}$" and with "prime element of
$\mathbb{Z}$", so the abstract theorem specialises to the concrete one.

This is the `def-metrizable-space` dictionary pattern, and it is what the
anti-two-notions rule asks for. **An unproved agreement claim in Remarks is the
shape of the level-7 two-notions defect and was explicitly rejected here.**

**D7. The fundamental theorem of finite abelian groups is un-deferred**, scoped to
the **finite** case, and homed at orders 36 and 37 immediately above AA-5, whose
cyclic groups and direct products it directly extends. It needs nothing above
itself: cyclic groups, direct products, Lagrange and the Chinese remainder
theorem all sit below. The **finitely generated** case stays deferred in the
reserved band, because $\mathbb{Z}^r \times$ torsion needs free abelian groups and
Smith normal form over $\mathbb{Z}$, which cannot precede the matrix machinery at
order 74.

---

## The bridge obligations (D4), and the mechanism that makes them cheap

`def-field`, `def-ordered-field` and `def-field-homomorphism` are **published**, at
order 9, homed on `foundations-of-the-real-numbers`. Ids are immutable on `main`.

**Therefore: the algebra track MUST NOT define `def-field` again.** It reuses the
published id. The consequence is an inverted reading order, field at order 9 and
ring at order 42, which is pedagogically backwards and logically fine. The ring
page opens by connecting to a definition that already exists.

### Downward bridges (ordinary backward citations, indigo)

These are new items on the algebra pages, citing published items normally.

| new item | connects |
|---|---|
| `lem-field-is-a-commutative-ring` | `def-field` (9) to `def-ring` (42) |
| `lem-commutative-division-ring-is-a-field` | the converse, so the two agree |
| `lem-ordered-field-is-an-ordered-ring` | `def-ordered-field` (9) to `def-ring` |
| `lem-ring-homomorphism-of-fields-is-a-field-homomorphism` | `def-field-homomorphism` (9) |

### Retro-instantiation (ordinary backward citations, on the B pages)

| new item | cites |
|---|---|
| `ex-integers-as-a-commutative-ring` | `thm-int-comm-ring` |
| `ex-integers-are-an-integral-domain-not-a-field` | `thm-int-comm-ring`, `lem-int-cancellation` |
| `ex-rationals-and-reals-as-fields` | `thm-rat-field`, `thm-reals-field` |
| `ex-null-sequences-as-a-maximal-ideal` | `lem-null-ideal`, `lem-null-maximal` |
| `ex-the-reals-as-a-quotient-by-a-maximal-ideal` | `thm-cauchy-ring`, `lem-null-maximal`, and the new `thm-quotient-by-maximal-is-a-field` |

The last one is the point of the whole exercise. `thm-reals-field` proved it by
hand at order 7; order 45 explains **why** it was true.

### Upward anchors (forward references, ORIENTATION ONLY)

The owner approved amending the published items so the vocabulary is anchored at
its point of first use. There is exactly one legal form, and it costs nothing.

`web/lib/library-forward.ts` computes `loadBearingText()` by stripping the
`## Remarks` section before looking for forward links. Only load-bearing
references become seeds, and only seeds propagate along `deps`. Measured: 570 of
862 published items sit downstream of the five order-7 items, so a load-bearing
edge there would mark **66% of the published library** as resting on later
material, which would destroy the meaning of the sky tier.

`tools/fwdcheck.mjs` independently forbids it: load-bearing forward references are
confined to consequence kinds, and "the spine of the library, its definitions,
lemmas, propositions and theorems, must stay strictly ordered". `thm-int-comm-ring`
and `thm-cauchy-ring` are theorems; `lem-null-ideal` and `lem-null-maximal` are
lemmas. A citation would fail the gate outright.

**So: `forward_refs` in frontmatter, wikilink ONLY inside `## Remarks`, no `deps`
edge** (SCHEMA forbids an id in both). Blast radius: zero items. Nothing is
re-judged; no proof is touched.

| published item | anchors to |
|---|---|
| `thm-int-comm-ring` | `def-ring`, `def-commutative-ring` |
| `thm-int-ordered-ring` | `def-ordered-ring` |
| `thm-cauchy-ring` | `def-commutative-ring` |
| `lem-null-ideal` | `def-ideal`, `def-subgroup` |
| `lem-null-maximal` | `def-maximal-ideal`, `thm-quotient-by-maximal-is-a-field` |
| `def-field` | `def-ring`, `lem-commutative-division-ring-is-a-field` |

These are amendments to published pages and go through the owner audit like any
other published change.

### Published-amendment obligation recorded at batch 1 (2026-07-27)

`ex-p-adic-ultrametric` (published, `metric-spaces-examples`, order 103) says in
its `## Remarks`: this library "has no divisibility theory at all in which to
state or prove that". `thm-division-algorithm-in-z`, homed on
`monoids-groups-and-subgroups` (order 20), makes that claim false the moment
this level publishes.

**DONE 2026-07-27, and NOT by the wording first recorded here.** The standing
rule says reword a decaying claim to "not available at this point in the reading
order". That wording would have been **false in a new way**: Euclid's lemma
arrives on `euclidean-domains-pids-and-unique-factorisation`, order 46, which is
*below* this item at order 103, so it will be available at this point in the
reading order. The claim was instead rewritten to say what the ITEM does not
establish or assume, dropping every claim about what the library contains.

**Generalise this.** A claim about the library's contents decays every time the
library grows; a claim about what a proof requires never does. Prefer the second
form outright, and treat "not available at this point in the reading order" as a
fallback for when the result really is planned strictly later.

A re-grep of the same file then found a SECOND decaying claim sixteen lines
away ("this library contains no number theory: the word *prime* is defined
nowhere in it"), still true today but falsified by order 46. Also rewritten. That
is the level-8 failure mode reproduced exactly, and it is why §10b says re-grep
the file you just repaired.

`thm-metric-completion-exists` (published, order 104) carried the same class of
claim — "this library has no general theory of equivalence relations", falsified
by `def-equivalence-relation` at order 20 — and was rewritten the same way.

All three: `verification.judge` deleted per SCHEMA §3, `verification.audited`
cleared, landing **in the same commit that publishes the level**. It is published content: it is not touched at step 4 or
during authoring, and it goes through the owner audit like every other
published change. (The neighbouring candidate `thm-n-cross-n-countable`,
order 18, was checked and stays true: its "without first developing division
with remainder" is a claim about $\mathbb{N}$ at order 18.)

---

## The unbridgeable seam, and how it is handled

`thm-cauchy-schwarz-finite`, `thm-minkowski-finite`, `thm-holder-finite` and
`lem-metrics-on-rn` are published on `metric-spaces`, which is now order **94**.
`inner-product-spaces-and-orthogonality` is order **82**. So linear algebra sits
**below** them and cannot cite them, and they are published so they are not
retrofitted.

The library will therefore contain two proofs of Cauchy-Schwarz: one for finite
real tuples at 94, one for a general inner product space at 82. This is a genuine
duplication and it is accepted rather than hidden.

**Obligation on page 82:** a `rem-` item relating the two explicitly, declaring
`thm-cauchy-schwarz-finite` in `forward_refs` and mentioning it only in
`## Remarks`, so it is marked and orientation-only. This is the same failure the
level-7 "two notions of open" defect came from, and the same fix RA-13 owed for
its continuity dictionary. Do not let it pass silently.

$\mathbb{R}^n$ itself is **not** a duplication. It gains structure in layers:
vector space at 60, metric at 94, normed space at 152. That is correct layering.

---

## Well-definedness obligations

The owner asked specifically that every definition be well defined. These are the
places in this track where a definition is only legitimate after a proof. **Each
one must be a numbered item, not a parenthetical**, per the WORKFLOW
definition-justification rule.

| # | page | the definition | what must be proved first |
|---|---|---|---|
| 1 | 20 | order of an element, and $\|G\|$ | `lem-order-of-element-exists` (the set of $n \ge 1$ with $g^n = e$ is nonempty in a finite group, by `lem-pigeonhole` claim 1) then `thm-well-ordering-principle` picks the least; $\|G\|$ by `lem-pigeonhole` claim 3, a finite set being equinumerous with exactly one natural |
| 1b | 20 | $g^n$ for $n \in \mathbb{Z}$ | an integer is a class $[(a,b)]$, so the definition is by cases on `lem-nat-trichotomy` via `lem-nat-embeds-int`, NOT by an unchecked formula on representatives |
| 2 | 28 | index $[G:H]$ | all left cosets of $H$ are equinumerous with $H$ |
| 3 | 30 | **quotient group $G/N$** | $[a][b] := [ab]$ is independent of representatives, and this holds **iff** $N$ is normal |
| 4 | 40 | **sign of a permutation** | the parity of the number of transpositions is independent of the factorisation (Vandermonde $\Delta = \prod_{i<j}(x_j - x_i)$) |
| 5 | 44 | **quotient ring $R/I$** | the induced product is independent of representatives, and this holds **iff** $I$ is an ideal |
| 6 | 46 | gcd in a PID | exists and is unique up to units |
| 7 | 48 | $R[x]$ | finitely supported sequences are closed under the convolution product |
| 8 | 48 | $\deg(fg) = \deg f + \deg g$ | requires $R$ to be a domain; state the failure over $\mathbb{Z}/4$ |
| 9 | 50 | $\mathbb{C} := \mathbb{R}[x]/(x^2+1)$ | $x^2+1$ is irreducible over $\mathbb{R}$, so the quotient is a field |
| 10 | 52 | splitting field | existence by induction on degree; uniqueness up to isomorphism |
| 11 | 54 | symmetric polynomial representation | the expression in elementary symmetric polynomials is **unique** |
| 12 | 70 | **dimension** | any two bases of a finitely generated space are equinumerous (Steinitz exchange); the infinite case, if stated, as "any two bases are equinumerous" in the $\approx$ language of `def-equinumerous` (order 18) — `def-cardinal` is homed on `ordinals-and-transfinite-recursion`, order 183, and CANNOT be cited from order 70 |
| 13 | 72 | quotient space $V/W$ | inherited from the quotient group, plus scalar multiplication independent of representatives |
| 14 | 74 | the matrix of a linear map | determined by the map **and** the ordered bases; changing either changes it |
| 15 | 76 | **the RREF** | existence AND **uniqueness**, which is what licenses the definite article and makes rank well defined |
| 16 | 76 | rank | row rank $=$ column rank $=$ $\dim \operatorname{im}$ |
| 17 | 78 | **the determinant** | the Leibniz sum is the **unique** normalized alternating multilinear function of the columns |
| 18 | 80 | **$\det$ of an operator** | independent of the chosen basis, via similarity and multiplicativity |
| 19 | 82 | characteristic polynomial | independent of basis; **and** $\det(xI - A)$ is a determinant over $F[x]$, a ring, which is why 70 is stated over a ring |
| 20 | 84 | minimal polynomial | the annihilator is an ideal of $F[x]$, a PID, so it has a unique monic generator |
| 21 | 86 | Jordan form | uniqueness up to the order of the blocks |
| 22 | 88 | signature of a real quadratic form | Sylvester's law of inertia |
| 23 | 90 | orthogonal projection | existence and uniqueness of the nearest point in a finite-dimensional subspace |
| 24 | 90 | the adjoint $T^*$ | exists and is unique in finite dimensions |
| 25 | 92 | degree $[K:F]$ | it is a dimension, which is why this page sits above linear algebra |
| 26 | 22 | **$\gcd(a,b)$** | for $(a,b) \ne (0,0)$: nonempty because $1$ is a common divisor, bounded above by `lem-divisor-bound`, hence has a greatest element by `lem-int-bounded-above-has-greatest`, which is MINTED at NT-1 because well-ordering gives a least element and nothing published gives a greatest. At $(0,0)$ there is no greatest element at all (`cex-common-divisors-of-zero-have-no-greatest-element`), so $\gcd(0,0) := 0$ is a stated convention, justified as the greatest common divisor in the DIVISIBILITY order via `cor-common-divisor-divides-gcd` |
| 26b | 22 | $\operatorname{lcm}(a,b)$ | the positive common multiples of two nonzero integers are nonempty (they contain $|ab|$), so `thm-well-ordering-principle` gives a least one along `lem-nat-embeds-int`; the value $0$ when either argument is $0$ is a convention, chosen because it is what keeps $\gcd \cdot \operatorname{lcm} = |ab|$ true at every boundary pair |
| 26c | 22 | the absolute value on $\mathbb{Z}$ | the two clauses are exhaustive and exclusive by totality and antisymmetry of the order (`thm-int-ordered-ring`); `def-abs-value` is stated for an ordered FIELD and does not apply, so this is not a second notion of one object |
| 5b | 42 | characteristic of a ring | the set $\{n \ge 1 : n \cdot 1_R = 0\}$ has a least element when nonempty (`thm-well-ordering-principle`); and $n \cdot 1_R$ must be PROVED to be the published `def-canonical-natural` when $R$ is a field (`lem-integer-multiples-agree-with-canonical-natural`), both being the unique function with the same recursion (`thm-recursion`) |
| 5c | 42 | subring, subfield | the restricted operations really are operations on the subset, and the subset really is a ring (resp. a field) with them, with the SAME $0$ and $1$; the additive half is the published `def-subgroup`/`lem-subgroup-criterion` and is cited |
| 5d | 42 | the quaternion product | it is given as an explicit formula in the eight real coordinates, so it is a genuine binary operation on $\mathbb{R}^4$; associativity is checked on basis triples and the reduction to those triples is a finite-sum computation, NOT an appeal to multilinearity, which is unavailable at order 42 |
| 12b | 68 | span | the family of linear subspaces containing $S$ is nonempty and its intersection is a linear subspace (`lem-intersection-of-linear-subspaces`), which is what licenses "the smallest"; the empty combination is $0_V$, so $\operatorname{span}(\varnothing) = \{0_V\}$ is a consequence, not a stipulation |
| 12c | 68 | internal direct sum of $n$ summands | the criterion is $U_j \cap \sum_{i \ne j} U_i = \{0\}$ for every $j$; PAIRWISE trivial intersection is not sufficient and the companion page carries the counterexample |
| 27 | 24 | the exponent $v_p(n)$ | uniqueness in the fundamental theorem of arithmetic — without it $v_p$ depends on the factorisation chosen, and every exponent-wise formula for $\gcd$ and $\operatorname{lcm}$ is meaningless |
| 28 | 26 | **$[a] + [b] := [a+b]$ on $\mathbb{Z}/n$** | independence of representatives |
| 29 | 26 | **$[a]\cdot[b] := [ab]$ on $\mathbb{Z}/n$** | independence of representatives. Together with #28 this is the owner's named obligation on quotient structures, discharged **here**, two pages below the quotient group of AA-3 that generalises it |
| 30 | 36 | **the invariant factors $d_1 \mid \cdots \mid d_k$** | uniqueness of the decomposition, proved via a computable invariant (the cardinalities $\lvert G[p^k]\rvert$), not by an appeal to "clearly" |

---

## Scope denials

Under the self-contained-scope rule (`WORKFLOW.md`), these are **dropped from the
scaffold** rather than authored with an unproved dependency.

- **The determinant as signed volume** (section 9 of the determinants article).
  It is stated in terms of Lebesgue measure. Measure theory is out of scope.
  A `rem-` may say the geometric reading exists and name what would license it,
  with no numbered claim resting on it.
- **Orientation via path components of $GL_n(\mathbb{R})$.** Needs connectedness
  of a topological group, order 189. Not available at order 78. Drop.
- **Dieudonne determinants, quasideterminants, quantum determinants** (section 8
  of the article). Named in a remark, developed nowhere.
- **Galois theory, Sylow theory, and the structure theorem for FINITELY
  GENERATED abelian groups.** Deferred by D2, with orders 56 to 67 reserved.
  **D7 removed the finite abelian case from this list** — it is built at order 36.
  What remains deferred is $\mathbb{Z}^r \times$ torsion, which needs free abelian
  groups and Smith normal form over $\mathbb{Z}$; that would license it.
- **Primitive roots, and the cyclicity of $(\mathbb{Z}/p)^\times$.** Dropped from
  NT-3 (order 26). The standard proof needs the bound on the number of roots of a
  polynomial over a field, which is AA-11 at order 48; that would license it.
  NT-3's B page keeps the negative half, that $(\mathbb{Z}/8)^\times$ is not
  cyclic, which needs nothing.
- **$\mathbb{Z}[\sqrt{-5}]$ as the failure of unique factorisation, at NT-2**
  (order 24). It needs ring theory at order 42. **The Hilbert monoid
  $\{1, 4, 7, 10, \dots\}$ replaces it** and is strictly better here: it needs
  nothing but $\mathbb{N}$ and divisibility, and it isolates Euclid's lemma as
  the load-bearing step. $\mathbb{Z}[\sqrt{-5}]$ is **not** dropped from the
  library — it stays on AA-10's B page at order 47, where rings exist.
- **"Every finite subgroup of the multiplicative group of a field is cyclic"**,
  the natural capstone of the finite abelian classification at order 36. Needs
  the polynomial root bound of AA-11, order 48; that would license it.
- **Infinite-dimensional spectral theory, operator norms, Banach and Hilbert
  spaces.** Functional analysis. `deferred-functional-analysis` already exists.

The **quaternions are kept**. $\mathbb{H}$ is an explicit four-dimensional real
algebra, constructible with nothing but $\mathbb{R}$, and it is the article's
counterexample showing why commutativity is essential to the determinant. It is
also the library's only division ring that is not a field.

---

# The pages

Format per page: order, `requires`, the inventory of results, then the traps.
Item ids below are **suggestions for step 1**, not commitments, except where the
text says an id is fixed by a bridge obligation above. Beta-n-i owns the final
list. Every A page has an examples companion; B-page content is listed with its
A page.

---

## AA-1. Binary Operations, Monoids, Groups and Subgroups  (order 20)

`requires`: `countability-and-uncountability`, `construction-of-r-via-cauchy-sequences`

**Level-7-algebra audit, 2026-07-27 (batch 1).** Six notes bind authoring of
this page pair. (1) EQUIVALENCE RELATIONS DO NOT EXIST IN THIS LIBRARY. There
is no `def-equivalence-relation`; `lem-int-equivalence` and `lem-rat-equivalence`
each prove one specific relation is an equivalence relation and define nothing
general. AA-1 therefore mints `def-equivalence-relation` and
`lem-equivalence-classes-partition`, which AA-2 (cosets partition $G$), AA-3
($G/N$) and AA-9 ($R/I$) all consume. (2) `Sym(X)` MOVES TO AA-1. AA-6 (order
30) uses $G \to \operatorname{Sym}(X)$ and proves Cayley's theorem, but AA-7
(order 40) is where the scaffold first defines $\operatorname{Sym}(X)$ — a
forward citation on the spine. `def-symmetric-group` and
`lem-symmetric-group-is-a-group` are homed here instead; AA-7 keeps $S_n$,
$|S_n| = n!$, cycle notation and the sign. It also supplies AA-1's own
non-abelian witnesses, which the plane-geometry reading of the square cannot
(order 102 metric material). (3) DIVISION WITH REMAINDER DOES NOT EXIST EITHER.
`thm-n-cross-n-countable` says so in as many words, and `ex-p-adic-ultrametric`
says the library "has no divisibility theory at all". AA-1 mints
`thm-division-algorithm-in-z` (stated for divisor $b > 0$, so no absolute value
on $\mathbb{Z}$ is needed), because $|\langle g \rangle| = \operatorname{ord}(g)$
is unprovable without it and AA-2's "the order of an element divides the order
of the group" rests on that. NO gcd theory is minted here; AA-10 still owns it.
(4) THE DIRECT PRODUCT LEAVES AA-1. AA-5 (order 34) already lists external and
internal direct products, so AA-1 listing "direct product of two groups" is a
duplicate; the Klein four-group is built inside $\operatorname{Sym}(\{1,2,3,4\})$
instead. (5) GENERALISED ASSOCIATIVITY is minted here
(`def-monoid-finite-product`, `thm-generalised-associativity`) because the
existing `def-finite-sum` is stated for sequences $\mathbb{N} \to \mathbb{R}$
over the complete ordered field and its alias `def-finite-product` is already
taken by it, so it cannot carry a product in a monoid. AA-7's factorisation
into transpositions and LA-6's Leibniz sum both need one. (6) THE EXPONENT LAW
$(gh)^n = g^n h^n$ IS FALSE in a non-abelian group. The published
`lem-power-laws` states it unconditionally because it is about a field; the
group version must carry the hypothesis that $g$ and $h$ commute, in the title
as well as the Statement.

Equivalence relation, equivalence class and quotient set, with the partition
theorem; binary operation on a set; associativity; commutativity; identity
element and its uniqueness (in the sharp form: a left and a right identity
coincide); semigroup; monoid; invertible element; uniqueness of inverses (again
sharp: a left and a right inverse coincide); **group**; **abelian group**; the
inverse laws $(gh)^{-1} = h^{-1}g^{-1}$; the cancellation laws, in the form
"translations are bijections"; the units of a monoid form a group;
**the symmetric group $\operatorname{Sym}(X)$** and its group axioms, moved down
from AA-7 because AA-6 needs it; finite products in a monoid and **generalised
associativity**; integer powers $g^n$ and the exponent laws, the last with the
commuting hypothesis where it is needed; **subgroup** and the one-step subgroup
criterion; intersection of subgroups; subgroup generated by a set; **cyclic
subgroup** $\langle g \rangle$ and its description as the set of powers;
**division with remainder in $\mathbb{Z}$**, minted here because nothing earlier
supplies it; **order of an element** (well-definedness #1) and order of a group,
in one definition item; the characterisation $g^k = e \iff \operatorname{ord}(g)
\mid k$ and $|\langle g \rangle| = \operatorname{ord}(g)$; monoid and group
homomorphism (definition only, theory at AA-4) with the properties a group
homomorphism gets for free. The direct product moves to AA-5, which already
lists it.

B page: the additive and multiplicative groups of any field, citing the
published `def-field` directly, instantiated at $\mathbb{Q}$ and $\mathbb{R}$;
$(\mathbb{Z},+)$ from `thm-int-comm-ring`, with $(\mathbb{Z},\cdot)$ a monoid
whose unit group is $\{1,-1\}$; $(\mathbb{N},+)$ is a **cancellative** commutative
monoid and not a group, the sharpest available counterexample, citing the
published `lem-nat-add-cancellative`; $(\mathbb{Z}/n,+)$ for $n \ge 1$;
$\operatorname{Sym}(\{1,2,3\})$ in full; $(gh)^2 \ne g^2h^2$ there, the guard on
the exponent law; the Klein four-group as a subgroup of
$\operatorname{Sym}(\{1,2,3,4\})$; the eight vertex permutations of a square as
the first non-abelian group of order 8, realised inside
$\operatorname{Sym}(\{1,2,3,4\})$ rather than geometrically; the subgroups of
$(\mathbb{Z},+)$ are exactly the $n\mathbb{Z}$; the nonnegative integers, a
subset closed under the operation and not a subgroup; and the false statement
that a union of two subgroups is a subgroup.

Traps. Do not define a group as "a monoid where everything is invertible" and then
silently use two-sided inverses without proving the one-sided forms agree. The
$\mathbb{Z}/n$ examples need the equivalence-class machinery already used by
`def-integers`; cite it, do not rebuild it. There is, however, no general
definition of an equivalence relation anywhere in the library to cite, so AA-1
supplies one (audit note 1 above). The symmetries of the square are NOT
available as plane isometries at this order: $\mathbb{R}^2$ with the Euclidean
metric is order 102. Realise them as the eight vertex permutations, and say that
the identification with the rigid motions is not available at this point in the
reading order — never that the library does not develop it.

## NT-1. Divisibility, Greatest Common Divisors and Bézout's Identity  (order 22)

`requires`: `monoids-groups-and-subgroups`

**Level-8-algebra audit, 2026-07-27 (batch 1).** Six notes bind authoring of
this page pair. (1) ABSOLUTE VALUE ON $\mathbb{Z}$ IS NOT PUBLISHED. Verified
from disk: `def-abs-value` is stated for an ORDERED FIELD and $\mathbb{Z}$ is
not a field, so it does not apply, and citing it for $\mathbb{Z}$ would be the
library's dominant defect class. Page 20's published summary independently
confirms the gap ("No absolute value on $\mathbb{Z}$ is needed and none is
used"). The general form — absolute value on an ordered RING — is not an
option either, since `def-ordered-ring` is order 42, twenty orders above.
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

## NT-2. Primes, Euclid's Lemma and the Fundamental Theorem of Arithmetic  (order 24)

`requires`: `divisibility-gcd-and-bezout`

**Prime** ($p > 1$ whose only positive divisors are $1$ and $p$) and
**composite**; $1$ is neither, and the reason is the uniqueness half of the
theorem below, which is worth stating where the convention is fixed rather than
asserting it as taste. Every integer $> 1$ has a prime divisor; **Euclid's
lemma**, $p \mid ab \Rightarrow p \mid a$ or $p \mid b$, from Bézout, with its
extension to finite products by induction over `def-monoid-finite-product`;
**Euclid's theorem**, that there are infinitely many primes; **the fundamental
theorem of arithmetic**, existence by strong induction and uniqueness up to
order; the **$p$-adic valuation** $v_p(n)$ with $v_p(ab) = v_p(a) + v_p(b)$;
divisibility, $\gcd$ and $\operatorname{lcm}$ read off the exponents, with the
**agreement item** proving that the exponent-wise $\gcd$ is NT-1's $\gcd$.

**Stating uniqueness.** "Unique up to order" needs a quantifier, not a gesture.
`def-symmetric-group` is published at order 20, so the honest statement is
available directly: if $p_1 \cdots p_r = q_1 \cdots q_s$ with all factors prime
then $r = s$ and there is a $\sigma \in \operatorname{Sym}(r)$ with
$q_i = p_{\sigma(i)}$. Prefer this to a hand-wave, and give the finitely
supported valuation form $n = \prod_p p^{v_p(n)}$ as the second face of it.

B page, nine items as scaffolded at level 9 (mixed): a worked factorisation of
$360$ and $84$ with $\gcd$ and $\operatorname{lcm}$ read off the exponents and
cross-checked against the Euclidean algorithm; $2$ is the only even prime; three
instances of the rational-root corollary ($\sqrt 3$, $\sqrt 6$, $\sqrt[3]{2}$,
in one item); arbitrarily long runs of composites, **without a factorial** (see
the factorial trap below); the Hilbert monoid $\{1,4,7,10,\dots\}$, closed under
multiplication, where $100 = 4 \cdot 25 = 10 \cdot 10$ has two factorisations
into irreducibles — the counterexample that shows Euclid's lemma is doing the
work and that existence alone is not the theorem; calling $1$ prime destroys
uniqueness; and three false statements — that $p_0 \cdots p_{n-1} + 1$ is prime
($30031 = 59 \cdot 509$, the standard misreading of Euclid's theorem), that
$n^2 + n + 41$ is always prime (fails at $n = 40$), and that every Fermat number
is prime ($641 \mid 2^{32} + 1$, by Euler's $641 = 5 \cdot 2^{7} + 1 =
2^{4} + 5^{4}$ argument written out as divisibility, since congruence notation
only arrives at order 26). `cex-divides-a-product-without-dividing-a-factor` is
**already published** on the order-23 B page and is exactly the gap Euclid's
lemma closes; the B page must not duplicate it, and the A page's
`thm-euclids-lemma` should reference it in prose as the thing primality repairs.

Traps. The Hilbert monoid is chosen deliberately: the usual textbook
counterexample is $\mathbb{Z}[\sqrt{-5}]$, which needs ring theory at order 42
and is therefore **dropped by the self-contained-scope rule**, while
$\{1, 4, 7, \dots\}$ needs nothing but $\mathbb{N}$ and divisibility.
**CHECKED at level 9 (mixed): `thm-strong-induction` is published**, homed on
`construction-of-the-natural-numbers` (order 6). Its Statement is the
full-strength form ("if $P(m)$ for all $m < n$ then $P(n)$", with the $n = 0$
case noted as vacuous), and the spliced spec has
`thm-prime-factorisation-exists` and `thm-fundamental-theorem-of-arithmetic`
citing it directly, so the existence half of the fundamental theorem uses it
and mints nothing. (Batch 2's note also claimed page 22 already cites it in
`thm-euclidean-algorithm` and `cor-extended-euclidean-bezout-coefficients`;
verified FALSE on disk 2026-07-28 — those two items cite
`thm-induction-principle` and `thm-well-ordering-principle`, not strong
induction. The claim that matters was checked independently and stands.)
The irrationality of $\sqrt{2}$ **already exists and is published**:
`fs-sqrt2-rational`, "FALSE: some rational number squares to 2", is homed on
BOTH R-construction pages (orders 7 and 8) and is proved there by parity
alone, with `deps: [def-rationals, thm-rat-field]` and nothing else. The title
of `ex-sqrt-two-exists` likewise reads "…and is irrational". So this page must
NOT mint a second item for that statement. What it mints instead is the
genuine generalisation, `cor-rational-root-of-an-integer-is-an-integer`: a
rational $x$ with $x^{k} = m$ for an integer $m$ is an integer. Its Remarks
record that `fs-sqrt2-rational` is the case $k = m = 2$ and that the two
agree — a dictionary obligation, kept in Remarks so it needs no `deps` entry.
**$p^{k}$ is the MONOID power of `def-group-power`, not `def-integer-power`.**
`def-integer-power` (order 16) is stated for "$a \in \mathbb{R}$, where
$\mathbb{R}$ is the ambient ordered field", so using it would drag the whole
real construction into a statement about $\mathbb{Z}$. `def-group-power`
(order 20) defines $g^{n}$ for natural $n$ **in a monoid**, and
`lem-units-of-z` (order 22) proves $(\mathbb{Z},\cdot,1)$ IS a commutative
monoid — that pairing is what makes $p^{k}$ legitimate at order 24. The
exponent law $p^{j+k} = p^{j}p^{k}$ for natural exponents is available from
`lem-group-power-laws`, whose Statement says in as many words that "claims 1
and 3 hold in any monoid" for exponents in $\mathbb{N}$ and whose step 2.1
concludes "by induction, $g^{m+n} = g^{m} g^{n}$ for all $m, n \in \mathbb{N}$,
in any monoid" — verified on disk (Beta-9-2, re-verified at step 4); it is not
a bare assertion in a Statement.
**$n = \prod_p p^{v_p(n)}$ cannot be written literally.** `def-monoid-finite-product`
is the product of a **finite list**; the library has no finitely-supported
product over an infinite index set at any order. So
`thm-canonical-prime-factorisation` quantifies over a finite INJECTIVE list of
primes covering the prime divisors of $n$ and adds the clause "$v_q(n) = 0$
for every prime $q$ off the list". The familiar notation is an abbreviation
for exactly that, and the item's Remarks say so.
**There is no integer factorial in this library.** The only $k!$ on disk is
introduced inside the Statement of `lem-factorial-beats-geometric` as a
product in $\mathbb{R}$ via `def-finite-sum` — a different object on a
different page. Minting `def-int-factorial` here would create a dictionary
obligation this page cannot discharge, so the arbitrarily-long-prime-gaps
example uses $N := \prod_{j<n} \iota(j+2)$ (the finite product of
$2, 3, \dots, n+1$ in $(\mathbb{Z},\cdot,1)$) instead of $n!$, and gets the
same $n$ consecutive composites $N+2, \dots, N+n+1$. **A dropped item, not a
deleted one**: an integer factorial is wanted by order 40
(`symmetric-groups-and-the-sign-homomorphism`, for $|\operatorname{Sym}(n)|$)
and is the natural home for the dictionary against the real factorial.

## NT-3. Congruences, the Integers Modulo n and the Chinese Remainder Theorem  (order 26)

`requires`: `primes-and-the-fundamental-theorem-of-arithmetic`

**Congruence** $a \equiv b \pmod n$, shown to be an equivalence relation by
citing `def-equivalence-relation` and `lem-equivalence-classes-partition` rather
than rebuilding them; the classes and the set $\mathbb{Z}/n$;
$|\mathbb{Z}/n| = n$ for $n \ge 1$ from the division algorithm, with the $n = 0$
and $n = 1$ cases stated rather than skipped; **addition and multiplication of
classes, with representative-independence PROVED** (well-definedness #28 and #29
— this is the owner's named obligation on quotient structures and the reason this
page exists below AA-3 rather than above it); $(\mathbb{Z}/n, +)$ an abelian
group; $(\mathbb{Z}/n, \cdot)$ a commutative monoid, so
$(\mathbb{Z}/n)^\times$ is a group by `lem-monoid-units-form-a-group`; the **unit
criterion** $\bar a \in (\mathbb{Z}/n)^\times \iff \gcd(a,n) = 1$, from Bézout;
**Euler's totient** $\varphi(n) := |(\mathbb{Z}/n)^\times|$, with $\varphi(p) =
p - 1$ and $\varphi(p^k) = p^k - p^{k-1}$; **linear congruences**, $ax \equiv b
\pmod n$ solvable iff $\gcd(a,n) \mid b$, with exactly $\gcd(a,n)$ solutions mod
$n$; **the Chinese remainder theorem** for pairwise coprime moduli, in both
faces — a unique simultaneous solution mod $\prod n_i$, and the bijection
$\mathbb{Z}/N \to \prod \mathbb{Z}/n_i$ preserving $+$ and $\cdot$; the corollary
that $\varphi$ is multiplicative; **$\mathbb{Z}/p$ is a field**, which is legal
here because `def-field` is published at order 9; **Wilson's theorem**.

**Fermat and Euler are NOT on this page.** They are AA-2's corollaries of
Lagrange at order 28, which is what D5 bought. This page supplies exactly the
$(\mathbb{Z}/n)^\times$ and $\varphi$ that AA-2 needs, and its Remarks orient the
reader forward **in plain prose with no wikilink** — AA-2's items are not planned
yet, so a link would be `forward-dangling`.

**The b-leaf blocker, and the agreement it forces.** The published
`ex-integers-mod-n-additive-group` lives on `monoids-groups-and-subgroups-examples`,
a **B page** at order 21, and B pages are leaves: nothing outside them may depend
on them (`validate-plan`'s `b-leaf`). So this page **cannot cite it** and must
build $(\mathbb{Z}/n, +)$ natively, then **record the agreement explicitly in the
dictionary style of `def-metrizable-space`**. Silent re-definition here is the
level-7 two-notions defect. The same obligation runs forward to AA-9 (order 44),
where $\mathbb{Z}/n$ reappears as the quotient ring $\mathbb{Z}/(n)$ and must be
identified with this one, not minted a third time.

B page: a worked simultaneous system; **$\mathbb{Z}/n$ has zero divisors exactly
when $n$ is composite**, statable here with no ring vocabulary at all (two
nonzero classes with $\bar a \bar b = \bar 0$), which is why it lands here rather
than waiting for order 44; CRT fails without coprimality ($x \equiv 1 \bmod 2$
and $x \equiv 2 \bmod 4$); $(\mathbb{Z}/8)^\times$ is not cyclic, which is the
honest edge of what this block proves; a false-statement item asserting
$\bar a \bar b = \bar 0 \Rightarrow \bar a = \bar 0$ or $\bar b = \bar 0$.

Traps. **The word "ring" is not available** until order 42, and nothing on this
page may use it; every statement is about $\mathbb{Z}/n$ with two named
operations. **Primitive roots and the cyclicity of $(\mathbb{Z}/p)^\times$ are
DROPPED** with a recoverable note: the standard proof needs the bound on the
number of roots of a polynomial over a field, which is AA-11 at order 48. The
$(\mathbb{Z}/8)^\times$ example above is deliberately the *negative* half, which
needs nothing. $n = 0$ and $n = 1$ are checked everywhere; $\mathbb{Z}/1$ is the
one-element structure and is **not** a field, since `def-field` requires
$0 \ne 1$.

## AA-2. Cosets, Index and Lagrange's Theorem  (order 32)

`requires`: `congruences-and-the-chinese-remainder-theorem`

Left and right cosets; membership and equality criteria; the coset equivalence
relation and partition; explicit bijections between a subgroup and each coset
and between the left- and right-coset sets; the index [G:H], finite when the
coset set is finite and infinity otherwise; the finite coset-partition lemma;
Lagrange's theorem; element order divides group order; g^{|G|}=e; prime-order
groups are cyclic; the finite index-tower formula; and index one iff H=G.
Euler's theorem and Fermat's little theorem are corollaries in the published
unit group (Z/n)^times and cite the published unit criterion and totient values.

B page: the cosets of nZ in Z; the two trivial subgroup indices; subgroup
orders in Sym({1,2,3}); a left coset unequal to the corresponding right coset;
every positive divisor of a finite cyclic group's order occurring as a subgroup
order; the distinction between finite index and equinumerosity for 2Z <= Z; a
product HK of two subgroups that is not a subgroup; and the false statement that
every coset is itself a subgroup.

Traps. Lagrange requires G finite, while index is defined without finiteness.
The finite cardinality notation is natural-valued, but divisibility and primality
are integer notions; use the canonical embedding explicitly at every seam.
The index-tower proof cancels |K| only after noting K contains the identity, so
|K| is nonzero. Euler and Fermat use the already-published arithmetic and do not
rederive the unit criterion or totient. The A_4 counterexample to the converse
of Lagrange remains a firm obligation of the later symmetric-group/sign B page:
the economical proof requires sign and |A_4|=12.

The former warning that finite cardinal arithmetic was absent is superseded.
`finite-counting-and-binomial-coefficients` now publishes finite cardinality,
subsets and power sets of finite sets, finite-index sums, and the sum rule; this
page cites those results and mints no competing counting theory.

Forward references: NONE.

## AA-3. Normal Subgroups and Quotient Groups  (order 30)

`requires`: `cosets-and-lagranges-theorem`

**Normal subgroup**; the equivalent characterisations ($gNg^{-1} = N$,
$gNg^{-1} \subseteq N$ for all $g$, every left coset is a right coset); every
subgroup of an abelian group is normal; index 2 implies normal; the centre; the
commutator subgroup; **the quotient group $G/N$** with the coset product
(well-definedness #3, the central obligation of this page: the product is
independent of representatives **iff** $N$ is normal, and both directions are
proved); the canonical projection $\pi: G \to G/N$; the order of $G/N$.

B page: $\mathbb{Z}/n\mathbb{Z}$ as a quotient; a non-normal subgroup with an
explicit pair of representatives whose products land in different cosets, which is
the counterexample that makes #3 mean something; $S_3 / A_3$.

Traps. The failure direction of #3 is what justifies the definition, so it is a
numbered item, not a remark. Do not assume $N$ normal while proving that
normality is necessary. The quotient set $G/N$ itself cites
`def-equivalence-relation` and `lem-equivalence-classes-partition` from AA-1
(batch-1 audit note 1), not machinery of its own.

## AA-4. Group Homomorphisms and the Isomorphism Theorems  (order 32)

`requires`: `normal-subgroups-and-quotient-groups`

Homomorphism; image and **kernel**; a homomorphism is injective iff its kernel is
trivial; **the kernel is normal**, and conversely every normal subgroup is a
kernel; **the first isomorphism theorem** $G/\ker f \cong \operatorname{im} f$;
the second (diamond) isomorphism theorem; the third; the correspondence theorem;
isomorphism; automorphism group; inner automorphisms; conjugation.

B page: $\det$ is a homomorphism (**forward reference, orientation only**, since
determinants are order 78 and this is 26); $\exp$ is not available yet, do not use
it; $\mathbb{Z} \to \mathbb{Z}/n$; a bijective homomorphism of monoids that is not
a monoid isomorphism.

Traps. This is the page the owner named. The first isomorphism theorem must be
proved, not asserted, and the well-definedness of the induced map
$G/\ker f \to \operatorname{im} f$ is its own step.

## AA-5. Cyclic Groups and Direct Products  (order 34)

`requires`: `group-homomorphisms-and-the-isomorphism-theorems`

Classification: every cyclic group is isomorphic to $\mathbb{Z}$ or to
$\mathbb{Z}/n$; every subgroup of a cyclic group is cyclic; the subgroups of
$\mathbb{Z}/n$ correspond to divisors of $n$; generators of $\mathbb{Z}/n$ are the
units; order arithmetic $\operatorname{ord}(g^k) = n/\gcd(n,k)$; external and
internal direct products; the recognition criterion for an internal direct
product; **$\mathbb{Z}/mn \cong \mathbb{Z}/m \times \mathbb{Z}/n$ when
$\gcd(m,n)=1$** (the Chinese remainder theorem for groups).

B page: $\mathbb{Z}/4 \not\cong \mathbb{Z}/2 \times \mathbb{Z}/2$, which is the
counterexample showing the coprimality hypothesis is not decorative; the Klein
four-group revisited; a non-cyclic group all of whose proper subgroups are cyclic.

Traps. **This page's $\gcd$ trap is DISCHARGED by D5 and the paragraph that
recorded it is now history.** It read: "$\gcd$ is used here but the general theory
arrives at AA-10. Use the concrete $\gcd$ on $\mathbb{Z}$ and cite
`thm-well-ordering-principle`, or defer the arithmetic statements." Neither
workaround is needed. $\gcd$, Bézout and the Euclidean algorithm are established
at order 22, twelve pages below this one, so `ord`$(g^k) = n/\gcd(n,k)$ cites
NT-1 directly. Likewise $\mathbb{Z}/mn \cong \mathbb{Z}/m \times \mathbb{Z}/n$
is now the **group-theoretic face** of a theorem already proved arithmetically at
NT-3, so it cites the CRT rather than re-deriving it, and says which face it is.
The one live constraint remains: do not forward-reference AA-10 load-bearingly.

## AA-5b. The Fundamental Theorem of Finite Abelian Groups  (order 36)

`requires`: `cyclic-groups-and-direct-products`

Un-deferred by D7. Homed here, immediately above AA-5, because it is the
classification that AA-5's cyclic groups and direct products exist to support,
and because everything it needs sits below it: Lagrange (28), quotients (30),
homomorphisms (32), cyclic groups and internal direct products (34), and the
Chinese remainder theorem (26). **No Sylow theory is required** — that is the
whole point of restricting to the abelian case, and it is why this page can
precede the reserved band rather than wait inside it.

**Primary decomposition**: for a finite abelian $G$, the $p$-primary component
$G_p = \{g : \operatorname{ord}(g) = p^k \text{ for some } k\}$ is a subgroup, and
$G$ is the internal direct product of the $G_p$ over the primes dividing $|G|$ —
proved from coprime order arithmetic and Bézout, which is the group-theoretic
shadow of CRT. **Decomposition of a finite abelian $p$-group** into cyclic
factors, by induction on $|G|$: take $g$ of maximal order and show
$\langle g \rangle$ has a complement. This complement lemma is **the one hard
step on the page**, and it is exactly where textbook proofs wave; budget for it
and do not let it become a thirty-second gap. **Invariant factor form**
$G \cong \mathbb{Z}/d_1 \times \cdots \times \mathbb{Z}/d_k$ with
$d_1 \mid d_2 \mid \cdots \mid d_k$, obtained from the primary form by CRT.
**Uniqueness of both forms**, via an invariant that can actually be computed —
the cardinalities $|G[p^k]|$ of the $p^k$-torsion subgroups — rather than an
appeal to "clearly". Corollaries: the abelian groups of a given order, counted by
partitions of the exponents in its factorisation; a finite abelian group is
cyclic iff it has exactly one invariant factor.

B page: $\mathbb{Z}/6 \cong \mathbb{Z}/2 \times \mathbb{Z}/3$ worked through both
forms; the five abelian groups of order $16$, listed by the partitions of $4$;
$\operatorname{Sym}(\{1,2,3\})$ as a group of order $6$ that is **not** a product
of cyclic groups, so the abelian hypothesis is not decorative — chosen because
`def-symmetric-group` is published at order 20 whereas $D_4$ and $Q_8$ are not
available here; a false-statement item asserting that every finite group is a
direct product of cyclic groups. **Do not restate**
$\mathbb{Z}/4 \not\cong \mathbb{Z}/2 \times \mathbb{Z}/2$ — it is already AA-5's
B page at order 35; cite it.

Traps. **"Every finite subgroup of the multiplicative group of a field is
cyclic" is DROPPED** with a recoverable note: it needs the bound on the number of
roots of a polynomial over a field, which is AA-11 at order 48. It is the natural
capstone of this page and it is genuinely out of reach here; record what would
license it. Finiteness is essential everywhere and must be in every statement
that uses it — $\mathbb{Q}$ under addition is abelian and is not a direct product
of cyclic groups.

## AA-6. Group Actions, Orbits, Stabilisers and Cayley's Theorem  (order 38)

`requires`: `group-homomorphisms-and-the-isomorphism-theorems`

Action of a group on a set; the equivalent formulation as a homomorphism
$G \to \operatorname{Sym}(X)$, using `def-symmetric-group` from AA-1 (it was
scaffolded at AA-7, which is LATER than this page — see the AA-1 audit block);
orbit; stabiliser is a subgroup; orbits partition
$X$; **the orbit-stabiliser theorem**; **Cayley's theorem**; the conjugation
action; conjugacy classes; centraliser and normaliser; **the class equation** for
a finite group; a $p$-group has nontrivial centre.

B page: the action of $\langle \sigma \rangle$ on $\{1,\dots,n\}$, which is the
one AA-7 needs; rotations of a square acting on vertices; a transitive action with
trivial stabiliser; an action that is not faithful.

Traps. Orbit-stabiliser is a bijection between $G/G_x$ and the orbit, not a
counting statement, and the counting form needs finiteness. State both.

## AA-7. Symmetric Groups, Cycle Decomposition and the Sign Homomorphism  (order 40)

`requires`: `group-actions-and-cayleys-theorem`

**This page exists to make the Leibniz determinant legitimate. It is the highest
risk page in the abstract algebra block and the sign is the classic trap.**

$S_n := \operatorname{Sym}(\{1,\dots,n\})$, reusing `def-symmetric-group` and
`lem-symmetric-group-is-a-group` from AA-1 and NOT re-minting them; $|S_n| = n!$;
one-line and cycle notation;
**disjoint cycle decomposition** and its uniqueness up to order, obtained from the
orbits of $\langle \sigma \rangle$ (AA-6); disjoint cycles commute; every
permutation is a product of transpositions; inversions $\operatorname{inv}(\sigma)$;
**the sign is well defined** (well-definedness #4) by the action on the
Vandermonde polynomial $\Delta = \prod_{i<j}(x_j - x_i)$; the two definitions
agree, $(-1)^{\operatorname{inv}(\sigma)} = (-1)^m$ for any factorisation into $m$
transpositions; **$\operatorname{sgn}$ is a group homomorphism $S_n \to \{\pm 1\}$**;
it is the unique nontrivial one for $n \ge 2$ (all transpositions are conjugate);
the alternating group $A_n$; $|A_n| = n!/2$ for $n \ge 2$; $A_n$ is normal.

B page: $S_3$ in full; $A_4$ has no subgroup of order 6 (the converse of Lagrange,
moved here from AA-2); a permutation written as transpositions in two different
ways with the same parity; $\operatorname{sgn}$ of an $n$-cycle is $(-1)^{n-1}$.

Traps. The Vandermonde argument needs $\mathbb{Z}[x_1,\dots,x_n]$, a polynomial
ring in several variables, and polynomial rings arrive at AA-11 (order 48) which
is **later**. Two legal routes, and step 1 must pick one and record it:
(a) prove parity well-definedness by the inversion-counting argument alone, which
needs only $\mathbb{N}$ arithmetic and no polynomial ring; or
(b) construct the specific integer $\Delta(\sigma)$ as an explicit finite product
in $\mathbb{Z}$ rather than as a polynomial. Route (a) is recommended. Do **not**
cite AA-11 from here.

## AA-8. Rings, Subrings, Integral Domains and Fields  (order 42)

`requires`: `monoids-groups-and-subgroups`, `foundations-of-the-real-numbers`,
`divisibility-gcd-and-bezout`

The number theory edge is load-bearing and is new at level 8:
`lem-characteristic-and-additive-order` states $n \cdot 1_R = 0$ exactly when
$\operatorname{char}(R) \mid n$, which is NT-1's divisibility relation, and the
B page reads $\mathbb{Z}^{\times} = \{1,-1\}$ off NT-1's `lem-units-of-z` rather
than re-deriving it from the order.

**Convention, fixed 2026-07-27 because this inventory contradicted itself.** It
read "**Ring** (abelian group under $+$, monoid under $\cdot$, distributive); ring
with identity" — but "monoid under $\cdot$" already forces an identity, which
makes "ring with identity" redundant *and* makes the B-page item "$2\mathbb{Z}$
is a subring without identity" **false**. The convention is now: **a ring has an
identity** (Wikipedia and modern usage, per the convention tiebreaker rule), a
ring without one is named a **non-unital ring** where it appears, and the
$2\mathbb{Z}$ item flips from an example to a **counterexample showing the
subring criterion's $1 \in S$ clause is not redundant**.

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

Traps. The published `def-field` is the definition; this page does not restate it,
it connects to it. Getting this wrong reproduces the level-7 two-notions defect at
the bottom of the library. There are four such connections and each is a numbered
item, never a remark: field to commutative ring, commutative division ring back to
field, ordered field to ordered ring, and ring homomorphism of fields to
`def-field-homomorphism`. Two further two-notions hazards are specific to this
page, and a third hazard is one of vocabulary. First, the elementary consequences
$0 \cdot a = 0$ and $(-a)b = -(ab)$ exist
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

**OPEN, and the owner's call — an ambiguity in the published `def-field` that
becomes load-bearing exactly here.** `def-field` axiom (D) states only LEFT
distributivity, $x(y+z) = xy + xz$, and axiom (M) grants associativity and
commutativity of $\cdot$ as a gloss on "$(F \setminus \{0\}, \cdot)$ is an abelian
group" — so the behaviour of $\cdot$ at $0$ is not clearly licensed. The published,
audited `lem-of-zero-mult` (order 9) nonetheless cites `def-field` for the RIGHT
form $(y+z)x = yx + zx$. That is the library's dominant defect class (citing an
item for a claim it does not make), and `lem-field-is-a-commutative-ring` on this
page is where it first bites. Verified from disk 2026-07-27: `def-field` has 64
direct dependents, and `lem-of-zero-mult` is the only item using the right form.
**No decision has been recorded and nothing has been changed.** The candidates
are: amend (M)'s gloss to say $\cdot$ is associative and commutative on all of
$F$ (retroactively licenses the published step; nothing downstream weakens);
amend `lem-of-zero-mult` alone (left distributivity gives $a \cdot 0 = 0$ cleanly,
but the lemma states $0 \cdot a = 0$, so this likely forces a statement change);
or declare the intended reading in this page's bridge lemma only (touches no
published item, leaves the mis-citation standing).

**Evidence recorded at level-8 batch 1 (verified by hand at step 4; the decision
above remains OPEN and the candidates are unchanged).** Under the strict reading
of (M) — the gloss confined to $F \setminus \{0\}$ — `lem-of-zero-mult` is not
merely mis-cited but **FALSE**: the axioms admit finite models in which
$0 \cdot a \ne 0$. Take $F = \{0,1\}$ with addition mod $2$ and the usual product
except $0 \cdot 1 := 1$ (keeping $1 \cdot 0 = 0$). Axiom (A) holds; $F \setminus
\{0\} = \{1\}$ is the trivial abelian group, so strict (M) holds; and left
distributivity (D) holds in all eight instances — for $x \ne 0$ it is the field
identity plus the forced $x \cdot 0 = 0$, and $y \mapsto 0 \cdot y$, which sends
$0 \mapsto 0$, $1 \mapsto 1$, is additive on $\mathbb{Z}/2$. Yet
$0 \cdot 1 = 1 \ne 0$. If the intermediate reading is preferred — keeping
"$x \cdot 1 = x$ for all $x$" unqualified while confining associativity and
commutativity to $F \setminus \{0\}$ — the same failure appears in the
four-element field $\mathbb{F}_4 = \{0, 1, \omega, \omega + 1\}$: redefine
$0 \cdot y := f(y)$ where $f$ is the additive ($\mathbb{F}_2$-linear) map with
$f(1) = 0$, $f(\omega) = f(\omega + 1) = 1$; then $0 \cdot 1 = 0$ as required,
(A), strict (M) and left (D) all hold, and $0 \cdot \omega = 1 \ne 0$. In both
models commutativity fails at $0$ ($\omega \cdot 0 = 0 \ne 0 \cdot \omega$), as
the strict reading permits, and right distributivity fails with it — which
confirms that the published proof's step "$(0+0) \cdot a = 0 \cdot a + 0 \cdot a$"
is licensed by nothing in the strict axioms. Consequence for the third candidate:
declaring the reading locally in the bridge lemma would leave a published,
audited lemma whose Statement is not a theorem of the published axioms under the
strict reading. The choice is still the owner's.

## AA-9. Ideals, Quotient Rings and the Isomorphism Theorems for Rings  (order 44)

`requires`: `rings-subrings-and-integral-domains`, `normal-subgroups-and-quotient-groups`

**Ideal** (left, right, two-sided); the ideal generated by a set; **principal
ideal**; sum and product of ideals; **the quotient ring $R/I$** (well-definedness
#5, and the "iff" direction: the induced product is representative-independent
exactly when $I$ absorbs multiplication); the canonical projection; the first,
second and third isomorphism theorems for rings; the correspondence theorem;
**prime ideal** and **maximal ideal**; **$R/P$ is a domain iff $P$ is prime**;
**`thm-quotient-by-maximal-is-a-field`: $R/M$ is a field iff $M$ is maximal**; a
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

B page: `ex-null-sequences-as-a-maximal-ideal` and
**`ex-the-reals-as-a-quotient-by-a-maximal-ideal`**, the payoff item, citing
`thm-cauchy-ring`, `lem-null-ideal`, `lem-null-maximal` and the new theorem, and
observing that `thm-reals-field` proved by hand at order 7 what order 44 explains;
$n\mathbb{Z}$ is maximal iff $n$ is prime; a prime ideal that is not maximal
($(x)$ in $\mathbb{Z}[x]$, so this item comes after AA-11 or uses $\{0\}$ in
$\mathbb{Z}$); an ideal that is not a subring with identity.

Traps. The Zorn application needs the union of a chain of proper ideals to be
proper, which is where $1 \notin I$ does the work. Do not skip it. The quotient
set underlying $R/I$ cites `def-equivalence-relation` and
`lem-equivalence-classes-partition` from AA-1 (batch-1 audit note 1), not
machinery of its own.

## AA-10. Divisibility, Euclidean Domains, PIDs and Unique Factorisation  (order 46)

`requires`: `ideals-and-quotient-rings` (which already reaches
`primes-and-the-fundamental-theorem-of-arithmetic` transitively — declaring it
directly is a `redundant-prereq` warning, so the agreement item below is licensed
without a new edge)

Divisibility in a domain; associates; **irreducible** and **prime** elements;
prime implies irreducible; **Euclidean domain**; **principal ideal domain**;
Euclidean implies PID; in a PID irreducible implies prime; **PID implies UFD**;
gcd and lcm via ideals (well-definedness #6); **Bézout**; $\mathbb{Z}$ is
Euclidean; **the fundamental theorem of arithmetic**; $\mathbb{Z}/p$ is a field
iff $p$ is prime.

**Seam obligation, now much larger than it was.** This page is no longer the
first home of any of these; the whole number theory block sits twenty-four pages
below it, and every concrete statement here has a concrete ancestor. Three
identifications must be **proved, not asserted**:

1. General divisibility in a domain restricts on $\mathbb{Z}$ to NT-1's relation,
   and to the "$n$ divides $k$" used concretely in AA-1's
   `lem-order-characterisation`.
2. "$\mathbb{Z}$ is Euclidean" **is** `thm-division-algorithm-in-z` and not a
   second proof of it. The gcd-via-ideals of this page **is** NT-1's gcd, and
   `Bézout` here **is** NT-1's Bézout — the concrete one is the instance, not a
   rhyme.
3. **The D6 agreement item, which is the reason this page keeps FTA at all.**
   NT-2 (order 24) already proves the fundamental theorem of arithmetic for
   $\mathbb{Z}$, elementarily. This page proves PID implies UFD by a genuinely
   different argument. A dedicated item must prove that the two theorems are the
   same theorem: that NT-2's "prime" ($p > 1$ with no positive divisors but $1$
   and $p$) coincides with "irreducible in $\mathbb{Z}$" **and** with "prime
   element of $\mathbb{Z}$", so that specialising PID implies UFD at
   $R = \mathbb{Z}$ recovers NT-2's statement.

The owner settled this shape explicitly (D6): both proofs stay, and the agreement
is an **item with a proof**, never a sentence in Remarks. An unproved agreement
claim is the exact shape of the level-7 two-notions-of-open defect, and asserting
one here would be worse than at level 7, because here it would be asserting that
two *proved* theorems coincide when nobody checked.

B page: $\mathbb{Z}[\sqrt{-5}]$, where irreducible does not imply prime and
factorisation is not unique, which is the counterexample that makes the whole page
worth stating in generality; $\mathbb{Z}$ worked; a non-principal ideal.

Traps. $F[x]$ is the other headline example but polynomial rings are AA-11, one
page **later**. This page instantiates with $\mathbb{Z}$ only; AA-11 instantiates
with $F[x]$ and cites back. Do not forward-reference.

## AA-11. Polynomial Rings, the Division Algorithm and Roots  (order 48)

`requires`: `euclidean-domains-pids-and-unique-factorisation`

$R[x]$ constructed as **finitely supported sequences** with convolution product
(well-definedness #7); degree, with $\deg 0$ convention stated; $\deg(fg) =
\deg f + \deg g$ over a domain (well-definedness #8) and its failure over
$\mathbb{Z}/4$; $R$ a domain implies $R[x]$ a domain; $R[x]^\times = R^\times$ for
a domain; the **evaluation homomorphism** and the universal property; the
**division algorithm** in $F[x]$; $F[x]$ is Euclidean, hence a PID, hence a UFD
(citing AA-10); **the factor theorem**; **a nonzero polynomial of degree $n$ over
a domain has at most $n$ roots**; irreducible polynomials; $R[x_1,\dots,x_n]$ by
iteration.

B page: $x^2+1$ is irreducible over $\mathbb{R}$ and reducible over $\mathbb{C}$
(the second half is a forward reference to AA-12, orientation only, or defer);
a polynomial with more roots than its degree over $\mathbb{Z}/8$, which shows the
domain hypothesis is load-bearing; Eisenstein's criterion; $x^2 - 2$ is
irreducible over $\mathbb{Q}$, citing `fs-sqrt2-rational`.

Traps. The formal construction is the point: a polynomial is **not** a function.
Over a finite field $x^p - x$ and $0$ are different polynomials with the same
evaluation map, and that belongs on the B page.

## AA-12. Simple Field Extensions and the Complex Numbers  (order 50)

`requires`: `polynomial-rings-and-roots`

Field extension $K/F$; **$F[x]/(p)$ is a field iff $p$ is irreducible**;
adjoining a root; the elements of $F[x]/(p)$ as remainders of degree $< \deg p$;
**$\mathbb{C} := \mathbb{R}[x]/(x^2+1)$** (well-definedness #9); $i$ as the class
of $x$; the real and imaginary parts; **conjugation** as a field automorphism;
the modulus $|z|$ and $|zw| = |z||w|$; $\mathbb{C}$ is a field and $\mathbb{R}$
embeds in it; **every complex number has a square root**, by the explicit formula
using $\sqrt{\ }$ from `roots-and-rational-powers`; $\mathbb{C}$ is **not** an
ordered field; the prime fields $\mathbb{F}_p = \mathbb{Z}/p$.

B page: $\mathbb{Q}(\sqrt 2)$, relating to the published
`ex-q-sqrt-two-two-orders` if the ids line up; $\mathbb{C}$ has no order
compatible with its field structure, as a false-statement item; explicit square
roots of $i$.

Traps. **No degree here.** $[K:F]$ is a dimension and belongs at order 92. This
page needs only "remainders of degree $< \deg p$", which is division-algorithm
bookkeeping, not linear algebra. The square-root construction is what the
fundamental theorem of algebra will need at order 125; make it explicit and
unconditional.

## AA-13. Splitting Fields and the Existence of Roots  (order 52)

`requires`: `field-extensions-and-the-complex-numbers`

Existence of an extension in which a given nonconstant polynomial has a root
(Kronecker); **splitting field**; existence by induction on degree
(well-definedness #10, existence half); uniqueness up to $F$-isomorphism
(well-definedness #10, uniqueness half); the roots of $f$ in a splitting field,
with multiplicity; $f = c\prod(x - \alpha_i)$ there.

B page: the splitting field of $x^2-2$ over $\mathbb{Q}$; of $x^3-2$; a
polynomial that splits already; two isomorphic splitting fields built by different
routes.

Traps. Uniqueness is the harder half and is what AA-14 and the fundamental theorem
of algebra actually consume. Do not state it without proof.

## AA-14. Symmetric Polynomials  (order 54)

`requires`: `splitting-fields`

Symmetric polynomials in $R[x_1,\dots,x_n]$; the action of $S_n$ permuting
variables (citing AA-6 and AA-7); **elementary symmetric polynomials** $e_1,\dots,e_n$;
Vieta, relating $e_k$ to the coefficients of $\prod(x - \alpha_i)$;
**the fundamental theorem of symmetric polynomials**: every symmetric polynomial
is a polynomial in $e_1,\dots,e_n$, **uniquely** (well-definedness #11), by
induction in the lexicographic order; the corollary that a symmetric expression in
the roots of $f$ lies in the base field.

B page: the power sums $p_k$ and Newton's identities for small $k$; a
non-symmetric polynomial; the discriminant of a quadratic as a symmetric function
of its roots.

Traps. This page exists for one reason: it is what makes the fundamental theorem
of algebra provable at order 125 without trigonometry. The corollary "a symmetric
function of the roots lies in $F$" is the form that gets used; state it explicitly.

---

## LA-1. Vector Spaces, Subspaces, Span and Direct Sums  (order 68)

`requires`: `monoids-groups-and-subgroups`, `foundations-of-the-real-numbers`,
`rings-subrings-and-integral-domains`

The ring page is a prerequisite for exactly one reason and it is load-bearing:
restriction of scalars needs `def-subfield`, and a subfield is ring-page material.
The second, lighter connection is a Remarks-only dictionary link from the vector
space $F^X$ to the ring $R^X$ of `def-ring-of-functions`, same set, same addition,
different second operation.

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

**Name it "linear subspace", and decide this at step 1 because ids are
immutable. DECIDED at level-8 batch 1: the scaffolded ids in
`research/level8-algebra-batch-1.pages.json` honour exactly this naming.**
"Subspace" already means the topological notion in this library —
`def-subspace-topology-top`, `thm-subspace-closure-and-interior`,
`thm-complete-subspace-iff-closed` and `def-metrizable-space` are all published at
order 104 and above. Prefer `def-linear-subspace`, `lem-linear-subspace-criterion`,
`lem-intersection-of-linear-subspaces`, `def-sum-of-linear-subspaces`. The bare id
`def-subspace` happens to be free today, which is precisely why it will be taken
by whichever page reaches for it first.

**Two B-page items are unbuildable here and are deferred, not deleted.
(Superseded at level-8 batch 1 by the "Two items are DEFERRED" paragraph in the
B-page listing above, which adds the `requires`-edge obligation; kept for the
record. Its "five remaining B-page items" count describes the pre-batch list;
the scaffolded B page has eight items.)**
$F[x]$ and $F[x]_{\le n}$ need `polynomial-rings-and-roots` (order 48), and
"$\mathbb{C}$ as a real vector space and as a complex one" needs
`field-extensions-and-the-complex-numbers` (order 50) — both **above** this page.
LA-2's B page (order 71) already plans $\{1, x, x^2, \dots\}$ as a basis and is
the natural inheritor of the first; any page above order 50 can take the second.
Drop them here with a note; the five remaining B-page items need none of it.
**(Level 9 (mixed) update: the LA-2 inheritance fell through — order 48 still
has an empty item list, so $F[x]$ does not exist as an object and LA-2's B page
DROPPED the item in turn; see the corrections in the LA-2 block below. The
inheritance should be re-pointed at whichever B page above order 48 is built
first.)**

## LA-2. Linear Independence, Bases and Dimension  (order 70)

`requires`: `linear-independence-bases-and-dimension` prerequisites, namely
`vector-spaces-and-subspaces` and `order-zorn-and-the-axiom-of-choice`

Linear combination; **linear independence**; a set is dependent iff some element
lies in the span of the others; **basis**; coordinates with respect to an ordered
basis exist and are **unique**; **the Steinitz exchange lemma**; any two finite
bases have the same size (well-definedness #12); **dimension**; every spanning set
contains a basis; every independent set extends to a basis; $\dim U \le \dim V$
for a subspace, with equality iff $U = V$; **the dimension formula**
$\dim(U+W) + \dim(U \cap W) = \dim U + \dim W$; $\dim F^n = n$; **every vector
space has a basis** (Zorn, cited from `order-zorn-and-the-axiom-of-choice`).
**$F^{m} \cong F^{n}$ iff $m = n$ is DROPPED from this page**: isomorphism of
vector spaces requires a linear map, and `def-linear-map` is LA-3 at order
**72**, two pages above this one. What this page supplies instead is
`lem-standard-basis-of-f-n` ($\dim_F F^{n} = n$), from which LA-3 gets the
statement in one line once "isomorphic spaces have equal dimension" is
available there. **Deferred, not deleted — LA-3 inherits it.**
**Naming, decided before the splice (owner, 2026-07-28): the basis definition
id is `def-linear-basis`, not `def-basis`**, following LA-1's
`def-linear-subspace` over `def-subspace`: the unqualified name belongs to the
topological notion (`def-topology-basis-subbasis`, order 185, published with
alias `def-basis-top`, so the topological side is namespaced too).
`def-dimension` stays unqualified on the same grounds (Hausdorff and covering
dimension would be `def-hausdorff-dimension` and `def-covering-dimension`).
Ids are immutable on `main`; the spliced spec honours exactly this naming.

B page, eight items as scaffolded at level 9 (mixed). Three corrections to the
old list:

- **$\{1, x, x^{2}, \dots\}$ for $F[x]$ is DROPPED.** The LA-1 note names
  LA-2's B page as "the natural inheritor" of this item, and that inheritance
  **cannot be discharged yet**: `polynomial-rings-and-roots` is order 48,
  which is earlier than 70 in plan order but **has an empty item list**, so
  $F[x]$ does not exist as an object anywhere on disk and any dependency on it
  would be `unresolved`, not `planned-earlier`. **What would license it:**
  authoring order 48. **Deferred, not deleted** — and the inheritance note in
  the LA-1 block should be re-pointed at whichever B page above order 48 is
  built first.
- **"the standard basis of $F^{n}$" MOVES TO THE A PAGE**, as
  `lem-standard-basis-of-f-n`. It is not an example: $\dim_F F^{n} = n$ is a
  result the A page states and later pages (74 onwards) will need, and **B
  pages are leaves**, so nothing outside them may depend on an item homed
  there. The B page keeps the concrete half,
  `ex-coordinates-depend-on-the-ordered-basis`.
- **"an infinite independent set that spans nothing" is mathematically wrong
  as written** — every set spans something, namely its span. Corrected to
  `cex-independent-set-that-does-not-span`: the standard unit families are
  independent in $F^{\mathbb{N}}$ and do NOT span it, the constant family $1$
  being no finite linear combination of them.

The remaining seven (the batch-2 note says "six" and then lists seven; the
spliced B page has eight items, corrected at step 4): coordinates depend on
the ORDERED basis; an explicit infinite basis for the eventually zero
families, built with no choice principle; the Hamel basis of $\mathbb{R}$ over
$\mathbb{Q}$, **without** the withdrawn non-measurable clause; a spanning set
that is not independent; a proper subspace with a basis equinumerous with one
of the whole space; the inclusion–exclusion analogue of the dimension formula
failing for three subspaces; and the false statement that a union of
independent sets is independent.

Traps. The infinite-dimensional case needs cardinality, but **`def-cardinal` is
homed on `ordinals-and-transfinite-recursion`, order 183, not on
`countability-and-uncountability`** — it is 113 pages LATER than LA-2 and cannot
be cited. Available at order 70 are `def-equinumerous` ($A \approx B$,
$A \preceq B$), `thm-schroder-bernstein`, `def-countable` and `lem-pigeonhole`.
**DECIDED at level 9, batch 2: the infinite case is DROPPED.** The $\approx$
option is not actually reachable. The Steinitz/Zorn argument gives invariance
only in the finite case; the infinite case needs $|B \times \mathbb{N}| = |B|$
for infinite $B$, which is cardinal arithmetic, and `def-cardinal` is homed on
`ordinals-and-transfinite-recursion` at order 183. So
`thm-any-two-finite-bases-have-the-same-size` claims exactly its title,
`def-dimension` defines $\dim_F V$ only for a space with a finite basis, and
"infinite-dimensional" is defined as the pure negation with **no cardinal
attached** — never $\dim V = \infty$. **What would license the restoration:**
the cardinal arithmetic of order 183, or a cardinal-free basis-exchange
argument for infinite sets. **Deferred, not deleted.** The companion page
carries `cex-proper-subspace-with-an-equinumerous-basis`, which is the honest
substitute: it compares two specific bases through an explicit bijection and
assigns no dimension to either space. Do not cite `def-cardinal`. The finite
case must not silently assume the space is finitely generated.
**Page 71 may not depend on page 69.** `ex-r-as-a-vector-space-over-q`,
`ex-sequence-space-and-eventually-zero-subspace` and
`cex-pairwise-trivial-intersection-is-not-a-direct-sum` all live on
`vector-spaces-and-subspaces-examples`, order 69, **a B page**, and B pages
are leaves: nothing outside them may depend on them. `validate-plan`'s
`b-leaf` check **cannot see this**, because those three items are already
published on disk and the check short-circuits on `existing.has(d)` before it
ever looks at the home page. So page 71 rebuilds each one-line setup natively
(restriction of scalars from `lem-restriction-of-scalars` at order 68; the
eventually zero subspace from `lem-linear-subspace-criterion`) and records the
agreement with the order-69 example **in Remarks only, with no `deps` entry**.
This is exactly the failure the last level shipped.

## LA-3. Linear Transformations, Rank-Nullity and Quotient Spaces  (order 72)

`requires`: `linear-independence-bases-and-dimension`, `group-homomorphisms-and-the-isomorphism-theorems`

**Linear map**; a linear map is determined by its values on a basis, and any
assignment on a basis extends uniquely (the universal property); **kernel** and
**image** are subspaces; injective iff kernel is trivial; **rank-nullity**;
$\mathcal{L}(V,W)$ is a vector space; composition is bilinear; isomorphism;
$V \cong F^n$ for $\dim V = n$; for $\dim V = \dim W$ finite, injective iff
surjective iff bijective; **quotient space $V/W$** (well-definedness #13, citing
the quotient group from AA-3 for the additive part and proving the scalar action
is representative-independent); **the first isomorphism theorem for vector
spaces**, related explicitly to AA-4's group version; $\dim V/W = \dim V - \dim W$.

B page: differentiation on $F[x]$ as a linear map with nontrivial kernel; the
shift operator on $F^{\mathbb{N}}$, injective and not surjective, which shows the
finite-dimensional equivalence fails without finiteness; projection onto a
subspace; a map preserving addition but not scaling.

Traps. "Injective iff surjective" is **false** in infinite dimensions and the
counterexample is required on the B page, not optional.

## LA-4. Matrices, the Matrix of a Linear Map, and Change of Basis  (order 74)

`requires`: `linear-maps-rank-nullity-and-quotient-spaces`

Matrices over $F$; addition, scaling, **the product** and its associativity;
$M_n(F)$ is a ring (citing AA-8), non-commutative for $n \ge 2$; the identity
matrix; **the matrix $[T]_{\mathcal{B}}^{\mathcal{C}}$ of a linear map with
respect to ordered bases** (well-definedness #14); **composition corresponds to
the product**; the map $T \mapsto [T]$ is an isomorphism of vector spaces and, for
$V = W$, of rings; **change of basis matrix**, its invertibility, and
$[T]_{\mathcal{B}'} = P^{-1}[T]_{\mathcal{B}}P$; **similarity** and its being an
equivalence relation; transpose and $(AB)^{\mathsf{T}} = B^{\mathsf{T}}A^{\mathsf{T}}$;
invertible matrices; $GL_n(F)$ is a group (citing AA-1, closing the loop);
trace; $\operatorname{tr}(AB) = \operatorname{tr}(BA)$; trace is similarity-invariant.

B page: the same operator with two different matrices under two bases, which is
the item that makes the owner's requested distinction concrete; a rotation of
$\mathbb{R}^2$; a matrix that is not similar to a diagonal one (forward reference,
orientation only); non-commuting matrices.

Traps. **The owner asked specifically for the distinction between matrices and
linear transformations.** It is carried by #14 plus the change of basis formula:
a matrix represents a map only after ordered bases are chosen, and the same map
has many matrices. Make it a numbered item with an explicit example, not a remark.

## LA-5. Gaussian Elimination, Elementary Matrices and RREF  (order 76)

`requires`: `matrices-and-the-matrix-of-a-linear-map`

Scope guide: `getcurious.cc/articles/math-matrix-row-reduction`, including its
collapsible sections.

The three **elementary row operations** (swap $S_{ij}$, scale $D_i(c)$ for
$c \ne 0$, transvection $T_{ij}(c)$); the row formula $(EA)_i$ as a combination of
rows of $A$; **every row operation is left multiplication by an elementary
matrix**; **every elementary matrix is invertible**, with the explicit inverses
$S_{ij}^2 = I$, $D_i(c)D_i(c^{-1}) = I$,
$(I + ce_ie_j^{\mathsf{T}})(I - ce_ie_j^{\mathsf{T}}) = I$; row equivalence is an
equivalence relation; **row echelon form** and **reduced row echelon form**;
existence of the RREF by the algorithm; **uniqueness of the RREF**
(well-definedness #15); pivots; **rank** as the number of pivots, equal to
$\dim \operatorname{im}$ (well-definedness #16); **row rank $=$ column rank**;
the null space $N(A)$ is a subspace; **the solution set of $Ax = b$ is
$x_p + N(A)$**; the consistency criterion; $A$ invertible iff its RREF is $I$;
computing $A^{-1}$ by sweeping $[A \mid I]$.

B page: a $3\times 3$ system with no solution and one with infinitely many; the
worked inverse from the article; a matrix whose row echelon form is not unique
while its RREF is, which is exactly what #15 is about; rank dropping under
specialisation of a parameter.

Traps. The article presents the algorithm first and rank-nullity as a later
"digression". **The library must invert that order**: rank and dimension come from
LA-2 and LA-3, and this page justifies the algorithm using them. Uniqueness of the
RREF is the item most often skipped and it is what licenses the definite article.

## LA-6. Determinants of Matrices over a Commutative Ring  (order 78)

`requires`: `matrices-and-the-matrix-of-a-linear-map`, `symmetric-groups-and-the-sign-homomorphism`, `rings-subrings-and-integral-domains`

Scope guide: `getcurious.cc/articles/math-determinants`, including its collapsible
sections. **This page is stated over a commutative ring $R$** (decision D3).

Matrices over $R$ and functions $F : (R^n)^n \to R$ of the columns;
**$R$-multilinear**; **alternating**; **normalized**; alternating implies
antisymmetric; **antisymmetric does not imply alternating**, with the
$\mathbb{Z}/2$ witness, which is the reason the two conditions are named
separately; **the Leibniz formula**
$\det A = \sum_{\sigma \in S_n} \operatorname{sgn}(\sigma) \prod_i a_{\sigma(i),i}$,
citing AA-7 for $\operatorname{sgn}$; **existence**: the Leibniz function is
multilinear, alternating and normalized; **uniqueness**: it is the only such
function (well-definedness #17); **the rigidity lemma** $F(A) = F(I)\det A$ for
every alternating multilinear $F$; $\det(A^{\mathsf{T}}) = \det A$ via
$\sigma \mapsto \sigma^{-1}$; the row versions of every column property;
the effect of each elementary operation on $\det$; **triangular matrices**
$\det A = \prod a_{ii}$; **$\det(AB) = \det A \det B$** by rigidity applied to
$B \mapsto \det(AB)$; $\det(A^{-1}) = (\det A)^{-1}$; similarity invariance.

B page: the $3 \times 3$ Leibniz expansion in full, all six permutations with
signs; **the quaternionic $2\times 2$ matrix with equal columns and $\det = 2k \ne 0$**,
the counterexample showing commutativity is essential, citing `def-quaternions`
and `thm-quaternions-form-a-division-ring` on AA-8's A page at order 42 (they
were moved onto that spine at level-8 batch 1 precisely so that this citation is
legal: B pages are leaves); a matrix over $\mathbb{Z}$ with $\det = 2$, invertible over
$\mathbb{Q}$ and not over $\mathbb{Z}$; an antisymmetric non-alternating form over
$\mathbb{Z}/2$.

Traps. Over a ring the alternating step in the existence proof is where
commutativity is consumed ($a_{\sigma(q),p} \cdot a_{\sigma(p),q}$ must be
reordered); the proof must say so rather than reorder silently. **The signed-volume
interpretation is DROPPED** (see Scope denials): it is stated via Lebesgue measure
and orientation via path components of $GL_n(\mathbb{R})$, both out of scope.

## LA-7. The Determinant of a Linear Operator, Cofactors and Cramer  (order 80)

`requires`: `determinants-of-matrices-over-a-commutative-ring`, `gaussian-elimination-and-row-reduction`

**$\det T$ for an operator on a finite-dimensional space is independent of the
basis** (well-definedness #18), from similarity invariance; $\det$ is a
homomorphism $GL_n(F) \to F^\times$, which discharges the forward reference left
on AA-4's B page; **$A$ is invertible iff $\det A$ is a unit of $R$**, and over a
field iff $\det A \ne 0$; the minor $A^{(i,j)}$ and the cofactor
$C_{ij} = (-1)^{i+j}\det A^{(i,j)}$; **Laplace/cofactor expansion** along any row
or column; the **adjugate** $\operatorname{adj}(A)_{ij} = C_{ji}$;
**$A \cdot \operatorname{adj}(A) = \operatorname{adj}(A) \cdot A = (\det A) I$**;
$A^{-1} = (\det A)^{-1}\operatorname{adj}(A)$; **Cramer's rule**; computing a
determinant by row reduction, citing LA-5.

B page: a worked $4 \times 4$ by cofactor expansion and by row reduction, agreeing;
Cramer on a $2\times 2$ system; an integer matrix whose adjugate is integral while
its inverse is not; the false statement that $\det(A+B) = \det A + \det B$.

Traps. The off-diagonal entries of $A \cdot \operatorname{adj}(A)$ vanish because
they are determinants of matrices with a repeated column; that is where
*alternating* is used and it must be cited, not asserted.

## LA-8. Eigenvalues, Eigenvectors and the Characteristic Polynomial  (order 82)

`requires`: `the-determinant-of-a-linear-operator`, `polynomial-rings-and-roots`

**Eigenvalue**, **eigenvector**, **eigenspace** $E_\lambda = \ker(T - \lambda I)$;
$\lambda$ is an eigenvalue iff $T - \lambda I$ is singular; **the characteristic
polynomial $\chi_A(x) = \det(xI - A) \in F[x]$**, legitimate because LA-6 is
stated over a commutative ring and $F[x]$ is one (well-definedness #19, first
half); $\chi$ is monic of degree $n$; **$\chi$ is a similarity invariant**, so
$\chi_T$ is basis-independent (#19, second half); **the eigenvalues of $T$ are
exactly the roots of $\chi_T$ in $F$**; $\operatorname{tr}$ and $\det$ as the
coefficients of $x^{n-1}$ and the constant term; **algebraic and geometric
multiplicity**; geometric $\le$ algebraic; **eigenvectors for distinct eigenvalues
are linearly independent**; an operator on an $n$-dimensional space has at most
$n$ distinct eigenvalues.

B page: a real matrix with no real eigenvalue (rotation by $90°$), which is the
item showing that existence needs an algebraically closed field and motivates
order 125; the same matrix over $\mathbb{C}$; geometric $<$ algebraic for a
Jordan block; a matrix with a repeated eigenvalue that is still diagonalisable.

Traps. **Do not assert that every operator has an eigenvalue.** Over a general
field it is false and over $\mathbb{C}$ it needs the fundamental theorem of
algebra, which is order 125. Every statement here is either field-general or
conditional on $\chi$ having a root in $F$. This is the self-contained-scope rule
biting, and it is the single most likely place for a false Statement in this
track.

## LA-9. Diagonalisation, the Minimal Polynomial and Cayley-Hamilton  (order 84)

`requires`: `eigenvalues-eigenvectors-and-the-characteristic-polynomial`, `euclidean-domains-pids-and-unique-factorisation`

**Diagonalisable**; $T$ is diagonalisable iff $V$ has a basis of eigenvectors iff
$V = \bigoplus_\lambda E_\lambda$ iff $\sum \dim E_\lambda = \dim V$; $n$ distinct
eigenvalues implies diagonalisable, and the converse fails; **the minimal
polynomial** as the unique monic generator of the annihilator ideal of $T$ in
$F[x]$, a PID (well-definedness #20, citing AA-10); $\mu_T \mid \chi_T$;
**Cayley-Hamilton**; $\mu$ and $\chi$ have the same irreducible factors;
**$T$ is diagonalisable iff $\mu_T$ splits into distinct linear factors**;
the primary decomposition theorem; **commuting diagonalisable operators are
simultaneously diagonalisable**.

B page: a nilpotent matrix with $\chi = x^n$ and $\mu = x^k$; a matrix
diagonalisable over $\mathbb{C}$ and not over $\mathbb{R}$; the false statement
that $\chi_T = \mu_T$ always; two commuting non-diagonalisable matrices.

Traps. The adjugate proof of Cayley-Hamilton works over $F[x]$ and is the clean
one available here; the "substitute $x = A$ into $\det(xI - A)$" argument is the
classical fallacy and belongs on the B page as a false statement.

## LA-10. Triangularisation, Generalised Eigenspaces and Jordan Form  (order 86)

`requires`: `diagonalisation-and-the-minimal-polynomial`

**$T$ is triangularisable iff $\chi_T$ splits over $F$**; the flag formulation;
**generalised eigenspaces** $K_\lambda = \ker(T-\lambda I)^n$; $V = \bigoplus K_\lambda$
when $\chi$ splits; $\dim K_\lambda$ is the algebraic multiplicity; **nilpotent
operators**: the existence of a basis of Jordan strings, by induction on
$\dim \operatorname{im}$; **Jordan canonical form** for $\chi$ split; **uniqueness
of the Jordan form up to the order of the blocks** (well-definedness #21), via the
ranks of $(T - \lambda I)^k$; the number and sizes of the blocks as similarity
invariants; two matrices are similar iff they have the same Jordan form.

B page: the Jordan form of an explicit $4\times 4$; two matrices with the same
characteristic **and** minimal polynomial that are not similar (the smallest case
is $6\times 6$ or a well-chosen $4\times 4$ over one eigenvalue), which is the item
justifying the block-count invariants; a matrix with no Jordan form over
$\mathbb{R}$.

Traps. Every statement here carries the hypothesis "$\chi_T$ splits over $F$".
Do not silently work over $\mathbb{C}$; order 125 is what removes the hypothesis
and it is later.

## LA-11. Dual Spaces, Bilinear and Quadratic Forms, Inertia  (order 88)

`requires`: `the-determinant-of-a-linear-operator`

**Dual space** $V^*$; the **dual basis** and $\dim V^* = \dim V$ in finite
dimensions; the canonical injection $V \to V^{**}$ and its being an isomorphism
exactly in finite dimensions; **annihilators** and $\dim W^0 = \dim V - \dim W$;
**the transpose $T^*: W^* \to V^*$** and its matrix being the transpose;
**bilinear forms**; the matrix of a form; **congruence** $B \mapsto P^{\mathsf{T}}BP$
and how it differs from similarity; symmetric and alternating forms; **every
symmetric bilinear form over a field of characteristic $\ne 2$ is diagonalisable**;
**quadratic forms** and the polarisation identity; over $\mathbb{R}$: rank and
**signature**, **Sylvester's law of inertia** (well-definedness #22);
**positive definite** forms and the **leading principal minors criterion**,
using LA-7.

B page: the dual basis of $F^2$ computed; a bilinear form that is neither
symmetric nor alternating; congruent matrices that are not similar and conversely;
an indefinite form with $\det > 0$; the failure of "diagonalisable symmetric form"
in characteristic 2.

Traps. Congruence and similarity are different equivalence relations and conflating
them is a standard error; the B page carries the separating example. The minors
criterion is what keeps the multivariable second-derivative test independent of
the spectral theorem, so it must be proved here and not deferred.

## LA-12. Inner Product Spaces, Gram-Schmidt, Projections and Adjoints  (order 90)

`requires`: `dual-spaces-bilinear-forms-and-inertia`, `roots-and-rational-powers`, `field-extensions-and-the-complex-numbers`

Restricted to $F = \mathbb{R}$ and $F = \mathbb{C}$, since positivity is required.

**Inner product**, real symmetric and complex Hermitian; the induced **norm**
$\|v\| = \sqrt{\langle v,v\rangle}$, using `thm-of-square-roots` from
`roots-and-rational-powers`; **Cauchy-Schwarz**; **the triangle inequality**;
the parallelogram law; **orthogonality**; an orthogonal set of nonzero vectors is
independent; orthonormal basis; **Gram-Schmidt**; **QR**; **orthogonal complement**
and $V = W \oplus W^\perp$ for finite-dimensional $W$; **orthogonal projection**
and the nearest-point characterisation (well-definedness #23); **least squares**;
Bessel and Parseval in finite dimensions; **the Riesz representation** of a
functional in finite dimensions; **the adjoint $T^*$**, existence and uniqueness
(well-definedness #24); self-adjoint, normal, unitary and orthogonal operators;
$\|Tv\| = \|v\|$ characterises the unitary ones.

**Required dictionary item.** A `rem-` relating this page's Cauchy-Schwarz to the
published `thm-cauchy-schwarz-finite` (order 102) and this page's standard inner
product on $\mathbb{R}^n$ to `lem-metrics-on-rn` (order 102). Those are **later**,
so the ids go in `forward_refs` and the wikilinks appear **only in `## Remarks`**.
See "The unbridgeable seam" above. This is not optional.

B page: the standard inner products on $\mathbb{R}^n$ and $\mathbb{C}^n$;
$\langle f,g\rangle = \sum f(i)g(i)$ on a finite function space; Gram-Schmidt run
on an explicit triple; a norm not induced by any inner product (the sup norm on
$\mathbb{R}^2$, detected by the parallelogram law); a bilinear form that is
symmetric but not positive definite, so not an inner product.

Traps. In the complex case, conjugate-linearity must be fixed in **one** slot and
the choice stated once; sliding between conventions mid-page is the standard
defect here. $W \oplus W^\perp$ needs $W$ finite-dimensional and the counterexample
lives in functional analysis, so state the hypothesis and do not chase the witness.

---

## AA-15. Algebraic Extensions, Degree, and Finite Fields  (order 92)

`requires`: `splitting-fields`, `linear-independence-bases-and-dimension`

**This page sits above linear algebra because $[K:F]$ is a dimension.** It was
originally scaffolded at order 56 and moved for exactly that reason.

$K$ as an $F$-vector space; **the degree $[K:F]$** (well-definedness #25);
finite extensions; **the tower law** $[L:F] = [L:K][K:F]$; algebraic and
transcendental elements; the **minimal polynomial of an algebraic element**,
irreducible and unique; $[F(\alpha):F] = \deg m_\alpha$; a finite extension is
algebraic; the algebraic elements form a subfield; **finite fields**: the order of
a finite field is $p^n$ where $p$ is its characteristic; the multiplicative group
of a finite field is cyclic; existence and uniqueness of $\mathbb{F}_{p^n}$ as the
splitting field of $x^{p^n} - x$.

B page: $[\mathbb{C}:\mathbb{R}] = 2$; $[\mathbb{Q}(\sqrt2,\sqrt3):\mathbb{Q}] = 4$;
$\mathbb{F}_4$ written out, and $\mathbb{F}_4 \ne \mathbb{Z}/4$, which is the
counterexample most worth having; $\pi$ is transcendental is **not** claimed
(no proof in scope; a remark may name it).

---

## The carve-out: the two pages that need analysis

## X-1. The Fundamental Theorem of Algebra  (order 125, category abstract-algebra)

`requires`: `symmetric-polynomials`, `continuity-ivt-evt-and-uniform-continuity`

Placed immediately above `continuity-ivt-evt-and-uniform-continuity` (order 123),
which is the lowest point at which it is provable.

The **algebraic** proof, which needs no trigonometry:
1. every real polynomial of **odd** degree has a real root, by the intermediate
   value theorem (order 123);
2. every complex number has a **square root**, by the explicit formula at AA-12;
3. induction on the $2$-adic valuation of $\deg f$, using a splitting field
   (AA-13) and the fundamental theorem of symmetric polynomials (AA-14) to show
   that a suitable symmetric expression in the roots has real coefficients;
4. conclude: **every nonconstant $f \in \mathbb{C}[x]$ has a root in
   $\mathbb{C}$**, so $\mathbb{C}$ is algebraically closed and every $f$ splits.

B page: $x^2+1$ over $\mathbb{R}$ and over $\mathbb{C}$; a polynomial factored
completely; the false statement that $\mathbb{R}$ is algebraically closed;
the false statement that the theorem holds over $\mathbb{Q}$.

Traps. The analytic minimum-modulus proof is **not** available here: its descent
step needs a $k$-th root of a complex number, which without polar form needs
trigonometry (order 180). If a subagent proposes it, that is the error to catch.
Step 1 must confirm the symmetric-polynomial route is fully discharged by AA-13
and AA-14, and if it is not, the missing lemma is added there, not forward-cited
from here.

## X-2. The Spectral Theorem, Positive Operators and SVD  (order 127, category linear-algebra)

`requires`: `the-fundamental-theorem-of-algebra`, `inner-product-spaces-and-orthogonality`, `triangularisation-and-jordan-canonical-form`

**Every operator on a nonzero finite-dimensional complex space has an
eigenvalue** (this is what order 125 buys, and it is the statement LA-8 was
forbidden to make); **Schur triangularisation** over $\mathbb{C}$ with an
orthonormal basis; **the spectral theorem for normal operators** on a complex
space; **the spectral theorem for real symmetric operators**, with all
eigenvalues real; simultaneous diagonalisation of commuting normal operators;
**positive semidefinite and positive definite operators**, and the equivalence of
the eigenvalue, form and Gram characterisations; the **unique positive square
root**; **polar decomposition**; **singular value decomposition** and the
singular values as the eigenvalues of $\sqrt{T^*T}$; the low-rank approximation
statement; the Rayleigh quotient and the min-max characterisation.

B page: a real symmetric $2\times2$ diagonalised orthogonally; a real matrix with
no real eigenvalue that is normal over $\mathbb{C}$; a non-normal matrix that is
diagonalisable but not unitarily so, which separates the two notions; an explicit
SVD; the false statement that every real matrix is orthogonally diagonalisable.

Traps. Real symmetric and complex normal are different theorems with different
proofs; the real case must not be obtained by "the same argument". The min-max
characterisation is variational and must not smuggle in compactness, which is
unavailable at this order in the form usually used.

---

## What step 1 must decide, per page

Recorded here so it is not rediscovered:

1. **AA-7**: which route to sign well-definedness (inversion counting recommended;
   the Vandermonde polynomial needs a multivariable polynomial ring that arrives
   later).
2. **AA-2 / AA-7**: where the $A_4$ counterexample to the converse of Lagrange
   lives. **DECIDED 2026-07-27: AA-7's B page, order 41, and the obligation is
   FIRM.** The original reason recorded here — "since $S_4$ is only available
   there" — is false: `def-symmetric-group` was moved down to order 20 by level
   7-algebra and is published. The surviving reason is $\operatorname{sgn}$; see
   AA-2's Traps.
3. ~~**AA-5**: whether the coprime CRT statement can use $\gcd$ before
   AA-10.~~ **CLOSED by D5, 2026-07-27.** The question no longer exists: $\gcd$,
   Bézout and the Euclidean algorithm are established at order 22 and the CRT at
   order 26, all below AA-2 (28) and AA-5 (34). Both workarounds recorded here —
   "use the concrete $\gcd$ and cite `thm-well-ordering-principle`" and "defer the
   arithmetic statements" — are obsolete. Kept visible rather than deleted,
   because the *shape* of this question recurs every time the track reaches for
   arithmetic it has not built.
4. **AA-9 / AA-11**: whether the prime-not-maximal example uses $(x) \subset \mathbb{Z}[x]$
   (needs AA-11, later) or $\{0\} \subset \mathbb{Z}$ (available).
5. **LA-2**: the exact cardinality apparatus for the infinite-dimensional
   equal-cardinality-of-bases statement.
6. **LA-10**: the smallest honest example of two matrices with equal $\chi$ and
   $\mu$ that are not similar.
7. **X-1**: confirmation that AA-13 and AA-14 fully discharge the symmetric
   polynomial route, before any authoring begins.
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
9. **NT-2**: whether **strong induction** is published or must be minted.
   **ANSWERED 2026-07-27 (level-8 batch 1, verified from disk): it IS
   published.** `items/thm-strong-induction.md`, "Strong (complete) induction",
   `status: published`, homed on `construction-of-the-natural-numbers` at
   order 6, with aliases `complete-induction` and `course-of-values-induction`.
   It must be reused and never re-minted; NT-1 already cites it for the
   termination of the Euclidean algorithm.
   `thm-induction-principle` is published; the strong form is what the existence
   half of the fundamental theorem of arithmetic actually uses. Related: whether
   the **irrationality of $\sqrt{2}$** exists anywhere — `ex-sqrt-two-exists`
   gives existence in $\mathbb{R}$, not irrationality — since NT-2 is its natural
   home and it is one line from unique factorisation.
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
12. **AA-5b**: the complement lemma in the decomposition of a finite abelian
    $p$-group is the hard step of that page. Decide its route at step 1 rather
    than discovering at step 5 that the textbook proof waves at it.
