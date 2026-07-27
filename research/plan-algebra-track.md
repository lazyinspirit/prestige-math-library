# Algebra track: abstract algebra and linear algebra, from the ground up

Prose scaffold, owner-commissioned 2026-07-27. Companion to
`research/plan-realanalysis-pages.md` and `research/plan-topology-track.md`.
Machine-readable half: `research/plan-spec.json` (orders 20 to 47, 60 to 85, and
the carve-out at 117 to 120).

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
order 90 up may now cite linear algebra. The pages that need analysis are carved
out to orders 117 to 120.

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
trigonometry. Orders 48 to 59 and 86 to 89 are **reserved** so that Sylow theory,
Galois theory and the structure theorem for finitely generated abelian groups can
be inserted later without another renumber.

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

---

## The bridge obligations (D4), and the mechanism that makes them cheap

`def-field`, `def-ordered-field` and `def-field-homomorphism` are **published**, at
order 9, homed on `foundations-of-the-real-numbers`. Ids are immutable on `main`.

**Therefore: the algebra track MUST NOT define `def-field` again.** It reuses the
published id. The consequence is an inverted reading order, field at order 9 and
ring at order 34, which is pedagogically backwards and logically fine. The ring
page opens by connecting to a definition that already exists.

### Downward bridges (ordinary backward citations, indigo)

These are new items on the algebra pages, citing published items normally.

| new item | connects |
|---|---|
| `lem-field-is-a-commutative-ring` | `def-field` (9) to `def-ring` (34) |
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
hand at order 7; order 37 explains **why** it was true.

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

`ex-p-adic-ultrametric` (published, `metric-spaces-examples`, order 95) says in
its `## Remarks`: this library "has no divisibility theory at all in which to
state or prove that". `thm-division-algorithm-in-z`, homed on
`monoids-groups-and-subgroups` (order 20), makes that claim false the moment
this level publishes.

**DONE 2026-07-27, and NOT by the wording first recorded here.** The standing
rule says reword a decaying claim to "not available at this point in the reading
order". That wording would have been **false in a new way**: Euclid's lemma
arrives on `euclidean-domains-pids-and-unique-factorisation`, order 38, which is
*below* this item at order 95, so it will be available at this point in the
reading order. The claim was instead rewritten to say what the ITEM does not
establish or assume, dropping every claim about what the library contains.

**Generalise this.** A claim about the library's contents decays every time the
library grows; a claim about what a proof requires never does. Prefer the second
form outright, and treat "not available at this point in the reading order" as a
fallback for when the result really is planned strictly later.

A re-grep of the same file then found a SECOND decaying claim sixteen lines
away ("this library contains no number theory: the word *prime* is defined
nowhere in it"), still true today but falsified by order 38. Also rewritten. That
is the level-8 failure mode reproduced exactly, and it is why §10b says re-grep
the file you just repaired.

`thm-metric-completion-exists` (published, order 96) carried the same class of
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
| 2 | 22 | index $[G:H]$ | all left cosets of $H$ are equinumerous with $H$ |
| 3 | 24 | **quotient group $G/N$** | $[a][b] := [ab]$ is independent of representatives, and this holds **iff** $N$ is normal |
| 4 | 32 | **sign of a permutation** | the parity of the number of transpositions is independent of the factorisation (Vandermonde $\Delta = \prod_{i<j}(x_j - x_i)$) |
| 5 | 36 | **quotient ring $R/I$** | the induced product is independent of representatives, and this holds **iff** $I$ is an ideal |
| 6 | 38 | gcd in a PID | exists and is unique up to units |
| 7 | 40 | $R[x]$ | finitely supported sequences are closed under the convolution product |
| 8 | 40 | $\deg(fg) = \deg f + \deg g$ | requires $R$ to be a domain; state the failure over $\mathbb{Z}/4$ |
| 9 | 42 | $\mathbb{C} := \mathbb{R}[x]/(x^2+1)$ | $x^2+1$ is irreducible over $\mathbb{R}$, so the quotient is a field |
| 10 | 44 | splitting field | existence by induction on degree; uniqueness up to isomorphism |
| 11 | 46 | symmetric polynomial representation | the expression in elementary symmetric polynomials is **unique** |
| 12 | 62 | **dimension** | any two bases of a finitely generated space are equinumerous (Steinitz exchange); the infinite case, if stated, as "any two bases are equinumerous" in the $\approx$ language of `def-equinumerous` (order 18) — `def-cardinal` is homed on `ordinals-and-transfinite-recursion`, order 175, and CANNOT be cited from order 62 |
| 13 | 64 | quotient space $V/W$ | inherited from the quotient group, plus scalar multiplication independent of representatives |
| 14 | 66 | the matrix of a linear map | determined by the map **and** the ordered bases; changing either changes it |
| 15 | 68 | **the RREF** | existence AND **uniqueness**, which is what licenses the definite article and makes rank well defined |
| 16 | 68 | rank | row rank $=$ column rank $=$ $\dim \operatorname{im}$ |
| 17 | 70 | **the determinant** | the Leibniz sum is the **unique** normalized alternating multilinear function of the columns |
| 18 | 72 | **$\det$ of an operator** | independent of the chosen basis, via similarity and multiplicativity |
| 19 | 74 | characteristic polynomial | independent of basis; **and** $\det(xI - A)$ is a determinant over $F[x]$, a ring, which is why 70 is stated over a ring |
| 20 | 76 | minimal polynomial | the annihilator is an ideal of $F[x]$, a PID, so it has a unique monic generator |
| 21 | 78 | Jordan form | uniqueness up to the order of the blocks |
| 22 | 80 | signature of a real quadratic form | Sylvester's law of inertia |
| 23 | 82 | orthogonal projection | existence and uniqueness of the nearest point in a finite-dimensional subspace |
| 24 | 82 | the adjoint $T^*$ | exists and is unique in finite dimensions |
| 25 | 84 | degree $[K:F]$ | it is a dimension, which is why this page sits above linear algebra |

---

## Scope denials

Under the self-contained-scope rule (`WORKFLOW.md`), these are **dropped from the
scaffold** rather than authored with an unproved dependency.

- **The determinant as signed volume** (section 9 of the determinants article).
  It is stated in terms of Lebesgue measure. Measure theory is out of scope.
  A `rem-` may say the geometric reading exists and name what would license it,
  with no numbered claim resting on it.
- **Orientation via path components of $GL_n(\mathbb{R})$.** Needs connectedness
  of a topological group, order 181. Not available at 70. Drop.
- **Dieudonne determinants, quasideterminants, quantum determinants** (section 8
  of the article). Named in a remark, developed nowhere.
- **Galois theory, Sylow theory, the structure theorem for finitely generated
  abelian groups.** Deferred by D2, with orders 48 to 59 reserved.
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
(order 32) is where the scaffold first defines $\operatorname{Sym}(X)$ — a
forward citation on the spine. `def-symmetric-group` and
`lem-symmetric-group-is-a-group` are homed here instead; AA-7 keeps $S_n$,
$|S_n| = n!$, cycle notation and the sign. It also supplies AA-1's own
non-abelian witnesses, which the plane-geometry reading of the square cannot
(order 94 metric material). (3) DIVISION WITH REMAINDER DOES NOT EXIST EITHER.
`thm-n-cross-n-countable` says so in as many words, and `ex-p-adic-ultrametric`
says the library "has no divisibility theory at all". AA-1 mints
`thm-division-algorithm-in-z` (stated for divisor $b > 0$, so no absolute value
on $\mathbb{Z}$ is needed), because $|\langle g \rangle| = \operatorname{ord}(g)$
is unprovable without it and AA-2's "the order of an element divides the order
of the group" rests on that. NO gcd theory is minted here; AA-10 still owns it.
(4) THE DIRECT PRODUCT LEAVES AA-1. AA-5 (order 28) already lists external and
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
metric is order 94. Realise them as the eight vertex permutations, and say that
the identification with the rigid motions is not available at this point in the
reading order — never that the library does not develop it.

## AA-2. Cosets, Index and Lagrange's Theorem  (order 22)

`requires`: `monoids-groups-and-subgroups`

Left and right cosets; cosets partition the group (via the equivalence relation
$a \sim b \iff a^{-1}b \in H$); every coset is equinumerous with $H$
(well-definedness #2); **index** $[G:H]$; **Lagrange's theorem**; the order of an
element divides the order of the group; a group of prime order is cyclic;
$g^{|G|} = e$; **Fermat's little theorem** and **Euler's theorem** as corollaries
in $(\mathbb{Z}/n)^\times$.

B page: cosets of $n\mathbb{Z}$ in $\mathbb{Z}$; a group with no subgroup of a
given order dividing $|G|$ (so **the converse of Lagrange is false**: $A_4$ has no
subgroup of order 6) as a false-statement item; left cosets that are not right
cosets.

Traps. Lagrange needs $G$ finite; the index is defined without finiteness and the
statement must say which is which. $A_4$ requires $S_4$, which is only formally
introduced at AA-7; either construct the twelve elements concretely here or move
that counterexample to AA-7's B page. Prefer the latter. The coset partition
cites `def-equivalence-relation` and `lem-equivalence-classes-partition`,
minted on AA-1 (batch-1 audit note 1); this page does not build its own
equivalence-relation machinery.

## AA-3. Normal Subgroups and Quotient Groups  (order 24)

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

## AA-4. Group Homomorphisms and the Isomorphism Theorems  (order 26)

`requires`: `normal-subgroups-and-quotient-groups`

Homomorphism; image and **kernel**; a homomorphism is injective iff its kernel is
trivial; **the kernel is normal**, and conversely every normal subgroup is a
kernel; **the first isomorphism theorem** $G/\ker f \cong \operatorname{im} f$;
the second (diamond) isomorphism theorem; the third; the correspondence theorem;
isomorphism; automorphism group; inner automorphisms; conjugation.

B page: $\det$ is a homomorphism (**forward reference, orientation only**, since
determinants are order 70 and this is 26); $\exp$ is not available yet, do not use
it; $\mathbb{Z} \to \mathbb{Z}/n$; a bijective homomorphism of monoids that is not
a monoid isomorphism.

Traps. This is the page the owner named. The first isomorphism theorem must be
proved, not asserted, and the well-definedness of the induced map
$G/\ker f \to \operatorname{im} f$ is its own step.

## AA-5. Cyclic Groups and Direct Products  (order 28)

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

Traps. $\gcd$ is used here but the general theory arrives at AA-10. Use the
concrete $\gcd$ on $\mathbb{Z}$ and cite `thm-well-ordering-principle`, or defer
the arithmetic statements. Do not forward-reference AA-10 load-bearingly.

## AA-6. Group Actions, Orbits, Stabilisers and Cayley's Theorem  (order 30)

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

## AA-7. Symmetric Groups, Cycle Decomposition and the Sign Homomorphism  (order 32)

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
ring in several variables, and polynomial rings arrive at AA-11 (order 40) which
is **later**. Two legal routes, and step 1 must pick one and record it:
(a) prove parity well-definedness by the inversion-counting argument alone, which
needs only $\mathbb{N}$ arithmetic and no polynomial ring; or
(b) construct the specific integer $\Delta(\sigma)$ as an explicit finite product
in $\mathbb{Z}$ rather than as a polynomial. Route (a) is recommended. Do **not**
cite AA-11 from here.

## AA-8. Rings, Subrings, Integral Domains and Fields  (order 34)

`requires`: `monoids-groups-and-subgroups`, `foundations-of-the-real-numbers`

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

B page: the retro-instantiations `ex-integers-as-a-commutative-ring`,
`ex-integers-are-an-integral-domain-not-a-field`, `ex-rationals-and-reals-as-fields`;
$\mathbb{Z}/n$ has zero divisors exactly when $n$ is composite; **the quaternions
$\mathbb{H}$**, a division ring that is not a field, kept because the determinant
page needs it; $2\mathbb{Z}$ is a subring without identity; the zero ring and why
$1 \ne 0$ is required of a field.

Traps. The published `def-field` is the definition; this page does not restate it,
it connects to it. Getting this wrong reproduces the level-7 two-notions defect at
the bottom of the library.

## AA-9. Ideals, Quotient Rings and the Isomorphism Theorems for Rings  (order 36)

`requires`: `rings-subrings-and-integral-domains`, `normal-subgroups-and-quotient-groups`

**Ideal** (left, right, two-sided); the ideal generated by a set; **principal
ideal**; sum and product of ideals; **the quotient ring $R/I$** (well-definedness
#5, and the "iff" direction: the induced product is representative-independent
exactly when $I$ absorbs multiplication); the canonical projection; the first,
second and third isomorphism theorems for rings; the correspondence theorem;
**prime ideal** and **maximal ideal**; **$R/P$ is a domain iff $P$ is prime**;
**`thm-quotient-by-maximal-is-a-field`: $R/M$ is a field iff $M$ is maximal**; a
maximal ideal is prime; in a commutative ring with identity, maximal ideals exist
(Zorn, cited from `order-zorn-and-the-axiom-of-choice`).

B page: `ex-null-sequences-as-a-maximal-ideal` and
**`ex-the-reals-as-a-quotient-by-a-maximal-ideal`**, the payoff item, citing
`thm-cauchy-ring`, `lem-null-ideal`, `lem-null-maximal` and the new theorem, and
observing that `thm-reals-field` proved by hand at order 7 what order 36 explains;
$n\mathbb{Z}$ is maximal iff $n$ is prime; a prime ideal that is not maximal
($(x)$ in $\mathbb{Z}[x]$, so this item comes after AA-11 or uses $\{0\}$ in
$\mathbb{Z}$); an ideal that is not a subring with identity.

Traps. The Zorn application needs the union of a chain of proper ideals to be
proper, which is where $1 \notin I$ does the work. Do not skip it. The quotient
set underlying $R/I$ cites `def-equivalence-relation` and
`lem-equivalence-classes-partition` from AA-1 (batch-1 audit note 1), not
machinery of its own.

## AA-10. Divisibility, Euclidean Domains, PIDs and Unique Factorisation  (order 38)

`requires`: `ideals-and-quotient-rings`

Divisibility in a domain; associates; **irreducible** and **prime** elements;
prime implies irreducible; **Euclidean domain**; **principal ideal domain**;
Euclidean implies PID; in a PID irreducible implies prime; **PID implies UFD**;
gcd and lcm via ideals (well-definedness #6); **Bezout**; $\mathbb{Z}$ is
Euclidean; **the fundamental theorem of arithmetic**; $\mathbb{Z}/p$ is a field
iff $p$ is prime. **Seam obligation:** AA-1 already proves
`thm-division-algorithm-in-z` and uses "$n$ divides $k$" concretely in
`lem-order-characterisation`. AA-10 must state explicitly that its general
divisibility in a domain restricts to that relation on $\mathbb{Z}$, and that
"$\mathbb{Z}$ is Euclidean" is `thm-division-algorithm-in-z` and not a second
proof of it. Silent re-definition is the level-7 two-notions-of-open defect.

B page: $\mathbb{Z}[\sqrt{-5}]$, where irreducible does not imply prime and
factorisation is not unique, which is the counterexample that makes the whole page
worth stating in generality; $\mathbb{Z}$ worked; a non-principal ideal.

Traps. $F[x]$ is the other headline example but polynomial rings are AA-11, one
page **later**. This page instantiates with $\mathbb{Z}$ only; AA-11 instantiates
with $F[x]$ and cites back. Do not forward-reference.

## AA-11. Polynomial Rings, the Division Algorithm and Roots  (order 40)

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

## AA-12. Simple Field Extensions and the Complex Numbers  (order 42)

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

Traps. **No degree here.** $[K:F]$ is a dimension and belongs at order 84. This
page needs only "remainders of degree $< \deg p$", which is division-algorithm
bookkeeping, not linear algebra. The square-root construction is what the
fundamental theorem of algebra will need at order 117; make it explicit and
unconditional.

## AA-13. Splitting Fields and the Existence of Roots  (order 44)

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

## AA-14. Symmetric Polynomials  (order 46)

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
of algebra provable at order 117 without trigonometry. The corollary "a symmetric
function of the roots lies in $F$" is the form that gets used; state it explicitly.

---

## LA-1. Vector Spaces, Subspaces, Span and Direct Sums  (order 60)

`requires`: `monoids-groups-and-subgroups`, `foundations-of-the-real-numbers`

Vector space over a field $F$ (the published `def-field`, cited, not restated);
the elementary consequences $0 \cdot v = 0$, $\lambda \cdot 0 = 0$,
$(-1)v = -v$, and $\lambda v = 0 \Rightarrow \lambda = 0$ or $v = 0$; **subspace**
and the subspace criterion; intersections of subspaces; the sum $U + W$;
**internal direct sum** and the criterion $U \cap W = \{0\}$; finite direct sums;
**span**; the span is the smallest subspace containing a set; spanning set;
$F^n$; the space of $m \times n$ matrices; function spaces $F^X$.

B page: $F[x]$ and $F[x]_{\le n}$ (requires AA-11, declared on the B page);
$\mathbb{R}$ over $\mathbb{Q}$; a subset closed under addition but not scaling;
the union of two subspaces is a subspace only if one contains the other, as a
false-statement item; $\mathbb{C}$ as a real vector space and as a complex one.

Traps. The additive group of a vector space is an abelian group, so cite AA-1
rather than re-deriving the additive laws. Do not assume finite dimension anywhere
on this page.

## LA-2. Linear Independence, Bases and Dimension  (order 62)

`requires`: `linear-independence-bases-and-dimension` prerequisites, namely
`vector-spaces-and-subspaces` and `order-zorn-and-the-axiom-of-choice`

Linear combination; **linear independence**; a set is dependent iff some element
lies in the span of the others; **basis**; coordinates with respect to an ordered
basis exist and are **unique**; **the Steinitz exchange lemma**; any two finite
bases have the same size (well-definedness #12); **dimension**; every spanning set
contains a basis; every independent set extends to a basis; $\dim U \le \dim V$
for a subspace, with equality iff $U = V$; **the dimension formula**
$\dim(U+W) + \dim(U \cap W) = \dim U + \dim W$; $\dim F^n = n$; **every vector
space has a basis** (Zorn, cited from `order-zorn-and-the-axiom-of-choice`);
$F^m \cong F^n$ iff $m = n$.

B page: the standard basis of $F^n$; $\{1, x, x^2, \dots\}$ for $F[x]$;
$\mathbb{R}$ over $\mathbb{Q}$ has an infinite basis and no explicit one (Hamel,
relating to the existing scaffold note in `plan-realanalysis-pages.md`, and
**without** the "non-measurable" clause, which was withdrawn under the
self-contained-scope rule); an infinite independent set that spans nothing;
a spanning set that is not a basis.

Traps. The infinite-dimensional case needs cardinality, but **`def-cardinal` is
homed on `ordinals-and-transfinite-recursion`, order 175, not on
`countability-and-uncountability`** — it is 113 pages LATER than LA-2 and cannot
be cited. Available at order 62 are `def-equinumerous` ($A \approx B$,
$A \preceq B$), `thm-schroder-bernstein`, `def-countable` and `lem-pigeonhole`.
Step 1 for LA-2 must either state the infinite case as "any two bases are
equinumerous" in the $\approx$ language of `def-equinumerous`, which is what the
Steinitz/Zorn argument actually gives, or drop the infinite case. Do not cite
`def-cardinal`. The finite case must not silently assume the space is finitely
generated.

## LA-3. Linear Transformations, Rank-Nullity and Quotient Spaces  (order 64)

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

## LA-4. Matrices, the Matrix of a Linear Map, and Change of Basis  (order 66)

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

## LA-5. Gaussian Elimination, Elementary Matrices and RREF  (order 68)

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

## LA-6. Determinants of Matrices over a Commutative Ring  (order 70)

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
the counterexample showing commutativity is essential, citing $\mathbb{H}$ from
AA-8's B page; a matrix over $\mathbb{Z}$ with $\det = 2$, invertible over
$\mathbb{Q}$ and not over $\mathbb{Z}$; an antisymmetric non-alternating form over
$\mathbb{Z}/2$.

Traps. Over a ring the alternating step in the existence proof is where
commutativity is consumed ($a_{\sigma(q),p} \cdot a_{\sigma(p),q}$ must be
reordered); the proof must say so rather than reorder silently. **The signed-volume
interpretation is DROPPED** (see Scope denials): it is stated via Lebesgue measure
and orientation via path components of $GL_n(\mathbb{R})$, both out of scope.

## LA-7. The Determinant of a Linear Operator, Cofactors and Cramer  (order 72)

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

## LA-8. Eigenvalues, Eigenvectors and the Characteristic Polynomial  (order 74)

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
order 117; the same matrix over $\mathbb{C}$; geometric $<$ algebraic for a
Jordan block; a matrix with a repeated eigenvalue that is still diagonalisable.

Traps. **Do not assert that every operator has an eigenvalue.** Over a general
field it is false and over $\mathbb{C}$ it needs the fundamental theorem of
algebra, which is order 117. Every statement here is either field-general or
conditional on $\chi$ having a root in $F$. This is the self-contained-scope rule
biting, and it is the single most likely place for a false Statement in this
track.

## LA-9. Diagonalisation, the Minimal Polynomial and Cayley-Hamilton  (order 76)

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

## LA-10. Triangularisation, Generalised Eigenspaces and Jordan Form  (order 78)

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
Do not silently work over $\mathbb{C}$; order 117 is what removes the hypothesis
and it is later.

## LA-11. Dual Spaces, Bilinear and Quadratic Forms, Inertia  (order 80)

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

## LA-12. Inner Product Spaces, Gram-Schmidt, Projections and Adjoints  (order 82)

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
published `thm-cauchy-schwarz-finite` (order 94) and this page's standard inner
product on $\mathbb{R}^n$ to `lem-metrics-on-rn` (order 94). Those are **later**,
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

## AA-15. Algebraic Extensions, Degree, and Finite Fields  (order 84)

`requires`: `splitting-fields`, `linear-independence-bases-and-dimension`

**This page sits above linear algebra because $[K:F]$ is a dimension.** It was
originally scaffolded at order 48 and moved for exactly that reason.

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

## X-1. The Fundamental Theorem of Algebra  (order 117, category abstract-algebra)

`requires`: `symmetric-polynomials`, `continuity-ivt-evt-and-uniform-continuity`

Placed immediately above `continuity-ivt-evt-and-uniform-continuity` (order 115),
which is the lowest point at which it is provable.

The **algebraic** proof, which needs no trigonometry:
1. every real polynomial of **odd** degree has a real root, by the intermediate
   value theorem (order 115);
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
trigonometry (order 172). If a subagent proposes it, that is the error to catch.
Step 1 must confirm the symmetric-polynomial route is fully discharged by AA-13
and AA-14, and if it is not, the missing lemma is added there, not forward-cited
from here.

## X-2. The Spectral Theorem, Positive Operators and SVD  (order 119, category linear-algebra)

`requires`: `the-fundamental-theorem-of-algebra`, `inner-product-spaces-and-orthogonality`, `triangularisation-and-jordan-canonical-form`

**Every operator on a nonzero finite-dimensional complex space has an
eigenvalue** (this is what order 117 buys, and it is the statement LA-8 was
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
   lives (AA-7's B page recommended, since $S_4$ is only available there).
3. **AA-5**: whether the coprime CRT statement can use $\gcd$ before AA-10.
   DECIDED for AA-1 (2026-07-27): the $\mathbb{Z}/n$ examples on AA-1's B page
   need NO gcd. $(\mathbb{Z}/n,+)$ needs only the congruence equivalence
   relation and `thm-division-algorithm-in-z` for $|\mathbb{Z}/n| = n$. gcd
   enters only at $(\mathbb{Z}/n)^\times$ (AA-2's Euler theorem) and at
   $\operatorname{ord}(g^k) = n/\gcd(n,k)$ (AA-5), so the question is genuinely
   AA-5's and AA-2's, not AA-1's.
4. **AA-9 / AA-11**: whether the prime-not-maximal example uses $(x) \subset \mathbb{Z}[x]$
   (needs AA-11, later) or $\{0\} \subset \mathbb{Z}$ (available).
5. **LA-2**: the exact cardinality apparatus for the infinite-dimensional
   equal-cardinality-of-bases statement.
6. **LA-10**: the smallest honest example of two matrices with equal $\chi$ and
   $\mu$ that are not similar.
7. **X-1**: confirmation that AA-13 and AA-14 fully discharge the symmetric
   polynomial route, before any authoring begins.
