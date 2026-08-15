# Algebra track: abstract algebra and linear algebra, from the ground up

Prose scaffold, owner-commissioned 2026-07-27. Companion to
`research/plan-realanalysis-pages.md` and `research/plan-topology-track.md`.
Machine-readable half: `research/plan-spec.json` (orders 20 to 55, 68 to 93, and
the carve-out at 125 to 128).

This file is the step-0 input for the pages below. It is NOT a page and it is not
normative: `SCHEMA.md`, `CLAUDE.md`, `LEVELS.md` and `ARCHITECTURE.md` win
wherever they differ.

---

# SUMMARY FOR THE ORCHESTRATOR — `abstract-algebra` lane, run `subjects-01`, 2026-08-13

*This lane owns two files. This one carries the Galois block, the linear-algebra
completion, the fundamental theorem of algebra and the spectral theorem;
`research/plan-algebra-track-expansion.md` carries AG, MOD and RT and has its own
summary at its head. Everything from this commission is **Part II**, beginning at
§II.0; Part I is the 2026-07-27 commission and is unchanged and undeleted.*

**Pairs scaffolded here.** Eleven, all currently **unauthored** in
`research/plan-spec.json` (`items: []`), listed by relative label with the page id
the orchestrator should quote:

| label | page id | § | size |
|---|---|---|---|
| AA-14 | `symmetric-polynomials` | II.3 | A 29 / B 9 — **scaffolded, `frontier-13` batch 1** |
| AA-15 | `algebraic-extensions-degree-and-finite-fields` | II.4 | A 35 / B 14 — **scaffolded, `frontier-13` batch 1** |
| **GA-1** | `algebraic-closure-embeddings-and-separability` *(new)* | II.2 | A 42 / B 16 |
| **GA-2** | `the-galois-correspondence` *(new)* | II.2 | A 36 / B 16 |
| **GA-3** | `finite-fields-and-cyclotomic-extensions` *(new)* | II.2 | A 44 / B 17 |
| **GA-4** | `solvability-by-radicals-and-kummer-theory` *(new)* | II.2 | A 33 / B 16 |
| LA-9 | `diagonalisation-and-the-minimal-polynomial` | II.5 | A 26 / B 12 — **scaffolded, `frontier-13` batch 3** |
| LA-10 | `triangularisation-and-jordan-canonical-form` | II.6 | A 28 / B 16 |
| LA-12 | `inner-product-spaces-and-orthogonality` | II.7 | A 34 / B 16 — **scaffolded, `frontier-13` batch 3** |
| X-1 | `the-fundamental-theorem-of-algebra` | II.8 | A 16 / B 12 |
| X-2 | `the-spectral-theorem-and-singular-value-decomposition` | II.9 | A 34 / B 18 |

**The headline gap is filled.** There was no Galois theory anywhere in the plan.
GA-1…GA-4 supply the algebraic closure, separable degree and the primitive
element theorem; Dedekind and Artin, the fundamental theorem of Galois theory and
the normality clause; finite fields, cyclotomic extensions and the normal basis
theorem; norm and trace, Hilbert 90, Artin–Schreier, Kummer theory,
solvability by radicals and Abel–Ruffini. **The block needs four A/B pairs, not
the two the free integers 98–101 hold** — §II.2.0 argues it and the orchestrator
confirms at splice. All four page ids and every item id proposed were checked free
against `items/` on 2026-08-13.

**Sources obtained in full** (not TOCs): Milne *Fields and Galois Theory*; Pete
Clark *Field Theory*; Ash *Basic Graduate Year* Ch. 3–6; 26 Conrad Galois blurbs;
Artin *Algebra*; Axler *LADR* 4th ed.; Hoffman & Kunze; Treil *LADW*; Cambridge
Part IB; 15 Conrad linear-algebra blurbs; Petersen; Macdonald Ch. I §§1–2; Knapp
*Basic Algebra* IX and *Advanced Algebra* VIII.2; Grinberg Ch. 7; Wisbauer;
Crawley-Boevey; Webb; Etingof et al; Teleman; Anupam Singh; Banaschewski (1992).
TOC-only: Lang, Isaacs, Serre, Dummit & Foote, Lam. **Unobtainable: Isaacs and
Fulton–Harris full text** — no coverage disposition may cite them as read. The
five source-anchored heading enumerations are in
`research/subjects-01-dispatch/aa-harvest-*.md`; §II.12 indexes them and carries
the two-treatments check per pair.

**Seams consumed.** The published `splitting-fields` page is far stronger than
Part I described — **normality is already done** (`def-normal-algebraic-extension`,
`thm-isomorphisms-extend-to-splitting-fields`,
`prop-endomorphisms-of-a-splitting-field-permute-its-roots`), and
`polynomial-rings-and-roots` already carries the whole separability apparatus for
*polynomials* plus Gauss, Eisenstein and the mod-$p$ test. Those two facts are why
four Galois pairs are affordable at all. `dual-spaces-bilinear-forms-and-inertia`
(published 2026-08-13, 33 items) fixes the library's sesquilinear convention, and
`the-field-of-fractions-and-localisation` (22 items) discharges Part I's decision
D10.

**Seams owed** — full list at §II.13. The load-bearing ones: `commutative-algebra`
takes `def-noetherian-module`, `def-artinian-module` and `def-noetherian-ring`
from MOD-4, **defined by the finitely-generated condition rather than by ACC**;
`functional-analysis` cites X-2's finite-dimensional spectral theory and inherits
Jordan–von Neumann; `number-theory` inherits the quadratic subfield of
$\mathbb{Q}(\zeta_p)$, Kronecker–Weber, and the Möbius closed form for irreducible
counts; `group-theory` inherits Schur–Zassenhaus and takes `def-dihedral-group`
from AG-3.

**Unresolved forward references.** None load-bearing anywhere in this file. Four
non-load-bearing `## Remarks` orientation notes with `forward_refs` and no `deps`
edge: GA-3 to the complex description of $\mu_n$; AA-15 to GA-1 and to GA-2;
LA-12 to `rn-as-a-normed-space`; X-1 to the published
`thm-fundamental-theorem-of-algebra-minimum-modulus-proof`.

**Scope denials, each with its reason.** The Artin–Schreier characterisation of
real-closed fields (needs formally real field theory, a block of its own); angle
trisection (needs trigonometry, absent below AA-15); the constructible regular
$n$-gon (needs the cyclotomic Galois group, so it goes above GA-3); squaring the
circle (needs the transcendence of $\pi$); the Möbius closed form for irreducible
counts (Möbius inversion is published at snapshot 203, above the Galois block);
Jordan–von Neumann (quantifies over norms, and `def-norm-and-normed-space` sits
above LA-12); infinite Galois theory and the Krull topology (a later level).
**Nothing was dropped to avoid a forward reference.**

**Stale claims found in this file and corrected in place** — five, all in Part I,
each corrected in §II.1.b with the disk evidence: the "unbridgeable seam" at LA-12
(the finite Cauchy–Schwarz is *below*, not above); "no field of fractions exists"
(D10); "the formal derivative does not exist" (AL-D6, in the companion file);
"Cayley–Hamilton is an LA-9 item" (it is published); "the A-page ceiling is 100"
(the code says 60). Two corrections were made to Part II text written earlier in
this same run: GA-1's algebraic closure now takes the one-step Gilmer/Milne route
rather than the $\omega$-iteration, and GA-1 now **cites** the Frobenius from
AA-15 instead of minting it.

**Blockers recorded: none.** Ten harvest gaps — results the scaffold uses that
are unproved or single-sourced in everything obtained — are listed at §II.12.b
and are obligations on a future build, not blockers on this one.

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

## AA-3. Normal Subgroups and Quotient Groups  (order 34)

`requires`: `cosets-and-lagranges-theorem`

DEFS: a normal subgroup; the normal closure of a subset; the centre $Z(G)$;
commutators $[g,h]=ghg^{-1}h^{-1}$ and the commutator subgroup $[G,G]$; the
quotient group $G/N$ with coset product $(gN)(hN)=ghN$.

THMS: the equivalent conjugate, containment, and left/right-coset
characterisations of normality; every subgroup of an abelian group is normal;
every index-two subgroup is normal; intersections of nonempty families of
normal subgroups are normal; the centre and commutator subgroup are normal;
coset multiplication is well defined iff the subgroup is normal, with both
directions proved without assuming the conclusion; the quotient group laws;
the canonical projection is a surjective homomorphism; $|G/N|=[G:N]$ and, for
finite $G$, $|G/N|=|G|/|N|$; $G/N$ is abelian iff $[G,G]\subseteq N$; every
quotient of an abelian group is abelian.

**Spine seam:** the A page contains the proved proposition that, for every
$n\in\mathbb N$ (including the library's $n=0$ and $n=1$ conventions), the
published congruence-class group $(\mathbb Z/n,+)$ is the quotient
$(\mathbb Z,+)/n\mathbb Z$. This is on the A spine because B pages are leaves;
it must agree with the existing modulo-$n$ definitions and theorem rather than
minting a competing construction. Do not use isomorphism terminology before
the next page defines it.

B: an explicit nonnormal two-element subgroup of
$\operatorname{Sym}(\{1,2,3\})$ for which coset multiplication changes with
representatives; the explicit three-cycle subgroup and its two-element
quotient (without the not-yet-defined notation $S_3/A_3$); the four cosets of
$4\mathbb Z$ worked against the A-page proposition; the two extreme quotients
$G/\{e\}$ and $G/G$; the centre and commutator subgroup of an abelian group.

Traps. The necessity direction of coset-product well-definedness is a numbered
proof, not a remark. The definition of quotient group is justified by both the
iff theorem and the quotient-law theorem. Composition in the symmetric-group
examples follows the published convention that the right-hand factor acts
first. The normal-closure definition is justified by the preceding
intersection lemma. The commutator convention must be displayed because some
sources use its inverse.

## AA-4. Group Homomorphisms and the Isomorphism Theorems  (order 36)

`requires`: `normal-subgroups-and-quotient-groups`

DEFS: group isomorphisms and automorphisms; $\operatorname{Aut}(G)$; the image
and kernel of a group homomorphism; inner automorphisms and
$\operatorname{Inn}(G)$.

THMS: the inverse of a bijective homomorphism is a homomorphism; images are
subgroups and kernels are normal; a homomorphism is injective iff its kernel is
trivial; normal subgroups are exactly kernels; equal images are exactly equal
kernel cosets; the quotient universal property; the first isomorphism theorem,
with representative-independence of $g\ker f\mapsto f(g)$ proved explicitly;
the product-with-a-normal-subgroup lemma and the second isomorphism theorem;
the nested-normal-subgroup lemma and third theorem; the subgroup correspondence
theorem, including preservation of normality. Automorphisms form a group;
conjugation is an automorphism; $g\mapsto(x\mapsto gxg^{-1})$ is a homomorphism
with kernel $Z(G)$ and image $\operatorname{Inn}(G)$; hence
$G/Z(G)\cong\operatorname{Inn}(G)$; and $\operatorname{Inn}(G)$ is normal in
$\operatorname{Aut}(G)$.

B: reduction $\mathbb Z\to\mathbb Z/n$ and the first isomorphism theorem; the
doubling endomorphism as an injective non-surjective map; the kernel and image
of the trivial homomorphism; inner automorphisms of an abelian group; and an
explicit conjugation calculation in $\operatorname{Sym}(\{1,2,3\})$.

DROP: the determinant orientation-only mention until determinant is built, and
the impossible request for a bijective monoid homomorphism that is not a monoid
isomorphism. A bijective monoid homomorphism is automatically an isomorphism.

Traps. The quotient-factor map is defined on cosets only after representative
independence is proved. The second and third theorems keep every normality and
containment hypothesis explicit. Function composition acts right-to-left, and
conjugation is $x\mapsto gxg^{-1}$, matching the published convention.

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

## AA-9. Ideals, Quotient Rings and the Isomorphism Theorems for Rings  (order 48)

`requires`: `rings-subrings-and-integral-domains`,
`normal-subgroups-and-quotient-groups`,
`group-homomorphisms-and-the-isomorphism-theorems`,
`primes-and-the-fundamental-theorem-of-arithmetic`,
`order-zorn-and-the-axiom-of-choice`

DEFS: left, right and two-sided ideals; the ideal generated by a subset and
principal ideals; sums and products of ideals; the quotient ring $R/I$; prime
and maximal ideals in a commutative ring.

THMS: ideal criteria and intersections; in a commutative ring, $(S)$ is the set
of finite sums $\sum r_i s_i$ and $(a)=Ra$; sums and products are ideals;
kernels of ring homomorphisms are ideals; multiplication of additive cosets is
well defined iff the additive subgroup is a two-sided ideal; the quotient-ring
laws and canonical projection; $\mathbb Z/n$ is literally the quotient ring
$\mathbb Z/n\mathbb Z$ for every natural $n$; the quotient-ring universal
property and first isomorphism theorem. The subring-plus-ideal lemma proves
$S+I$ is a subring, $I$ is an ideal of $S+I$, and $S\cap I$ is an ideal of $S$;
it supports $S/(S\cap I)\cong(S+I)/I$ without treating a nonunital ideal as a ring; the
nested-ideal lemma supports the third theorem; ideals above $I$ correspond to
ideals of $R/I$. For commutative $R$, $R/P$ is a domain iff $P$ is prime and
$R/M$ is a field iff $M$ is maximal; maximal ideals are prime. In a nonzero
commutative ring, every proper ideal lies in a maximal ideal, with
the chain-union properness step written explicitly before applying Zorn.

B: null sequences as a maximal ideal; the reals as the corresponding quotient;
$n\mathbb Z$ maximal iff $n$ is prime for $n>1$; $(0)$ in $\mathbb Z$ prime but
not maximal; $2\mathbb Z$ an ideal but not a unital subring; and the coordinate
projection $(R\times S)/(R\times\{0\})\cong S$.

DEFER: the characteristic of an integral domain is $0$ or prime remains on
`euclidean-domains-pids-and-unique-factorisation`, as the current machine spec
records. The polynomial witness $(x)\subset\mathbb Z[x]$ is replaced here by
the dependency-closed zero-ideal witness in $\mathbb Z$.

Traps. The quotient-ring iff starts with an additive subgroup. The second ring
theorem respects the library's unital-ring convention. In the Zorn proof the
union of a chain is proper because if it contained $1$, one chain member would
contain $1$ and would be the whole ring. The additive quotient set and group
law are reused from the published quotient-group construction.

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

`requires`: `polynomial-rings-and-roots`, `roots-and-rational-powers`

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

**Amendments (Alpha, `frontier-11` step 4, 2026-08-12).** The heading above
carries this page's pre-`frontier-11` order; `research/plan-spec.json` is the
machine authority and puts the pair at 54/55. Recompute the order from the spec.

1. **`roots-and-rational-powers` is now a declared prerequisite** (orchestrator
   decision D2, from Beta-1's step-4 amendment). The modulus and Cartesian
   complex-square-root proofs genuinely use the published existence and
   uniqueness of nonnegative real square roots and the associated order lemmas.
   The prose above already named $\sqrt{\ }$ "from `roots-and-rational-powers`";
   the dependency is now declared rather than hidden inside "elementary
   algebra".
2. **Four published $\mathbb{C}$ items are re-homed to this page and materially
   rewritten** — owner decision D1 of 2026-08-11, re-decided on the corrected
   premise as D12 on 2026-08-12. `def-complex-numbers-and-arithmetic`,
   `thm-complex-numbers-form-a-field`,
   `def-complex-conjugate-real-imaginary-part-and-modulus` and
   `lem-complex-conjugation-and-modulus-laws` were published on
   `the-complex-exponential-and-eulers-formula` (§RA-33 of
   `plan-realanalysis-pages.md`), which no page at this order may cite. **Ids are
   unchanged**; the receipt is `research/frontier-11-rehomed.json`. This is a
   material rewrite under SCHEMA §3, not a relocation: the construction of
   $\mathbb{C}$ changes from the plane $\mathbb{R}^2$ with coordinate arithmetic
   to the stem field $\mathbb{R}[x]/(x^2+1)$ this page already builds. A pure
   relocation is impossible — as published,
   `lem-complex-conjugation-and-modulus-laws` takes the triangle inequality from
   `def-p-norms-on-rn` at order 167, which from here is a load-bearing forward
   reference; the rewrite derives it instead from Lagrange's identity
   $(a^2+b^2)(u^2+v^2)-(au+bv)^2=(av-bu)^2\ge 0$, whose inputs all sit at
   order $\le 9$.
3. **The bridge item `thm-complex-numbers-are-the-real-coordinate-plane`** is
   added here, immediately after `thm-complex-numbers-form-a-field`, so that the
   published order-189 sentence "Under the identification $\mathbb{C}=\mathbb{R}^2$"
   keeps its warrant. It states the coordinate bijection $a+bi\mapsto(a,b)$, the
   transported operations, and $\lvert a+bi\rvert=\sqrt{a^2+b^2}$ — deliberately
   **not** the norm identification, which needs order 167 and stays at 189.
4. **The "no degree here" trap is superseded for this run.** The `frontier-11`
   dispatch requires the power basis and $[F(a):F]$ on this page, and the
   scaffold obtains the degree from the proved unique coordinates
   $1,a,\dots,a^{n-1}$ without importing the general dimension theory that
   remains at order 92. Order 92 still owns the tower law and the general
   theory.
5. **Simple transcendental extensions are on the page, and $F(x)$ is not.**
   Alpha's step-3 review overturned Beta-1's `out-of-scope` decline (D3), so the
   page carries the rational-expression structure theorem and the uniqueness of
   simple transcendental extensions, proved inside an ambient field by
   generated-subfield minimality. **No field-of-fractions or localisation object
   is constructed or named** — that construction exists nowhere in the library
   (D10, recorded for a future owner decision, natural home orders 46–50), and
   nothing on this page depends on the term. The composite of two subfields is
   also carried here as a generated-subfield corollary rather than deferred.

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

## AA-14. Symmetric Polynomials  (order 58)

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
determinant by row reduction, citing LA-5; **Cauchy--Binet**
(`thm-cauchy-binet-formula`) for an $m\times n$ matrix and an $n\times m$
matrix over a commutative ring, summing over the $m$-subsets when $m\le n$.
GT-7a cites this item for matrix--tree and does not mint it.

B page: a worked $4 \times 4$ by cofactor expansion and by row reduction, agreeing;
Cramer on a $2\times 2$ system; an integer matrix whose adjugate is integral while
its inverse is not; the false statement that $\det(A+B) = \det A + \det B$.

Traps. The off-diagonal entries of $A \cdot \operatorname{adj}(A)$ vanish because
they are determinants of matrices with a repeated column; that is where
*alternating* is used and it must be cited, not asserted.

**Amendments (Alpha, `frontier-11` step 4, 2026-08-12; orchestrator decisions D6
and D7, and Alpha's step-3 finding D-1). Orders in this file are
pre-`frontier-11`; `research/plan-spec.json` puts this pair at 84/85.**

1. **The whole cofactor/adjugate/Cramer block is built HERE, not cited from
   LA-6.** Verified item by item against the published order-82 page: it owns
   the Leibniz determinant, alternation, multiplicativity, the elementary-row
   effects, triangular determinants and similarity invariance, and **no minor,
   cofactor, Laplace-expansion, adjugate, adjugate-identity or Cramer item**.
   The prose above already places them here and is correct; a `frontier-11`
   dispatch brief that said otherwise was wrong and is recorded in D6.
2. **A basis-free characterisation is added before basis independence.** The
   operator determinant is the unique scalar by which $T$ scales every
   alternating top-degree form (Axler 9.40), proved by transporting such a form
   through coordinates into a column-multilinear matrix function and applying
   LA-6's rigidity lemma. Basis independence and multiplicativity then follow
   from it. Only top-degree forms are transported: no exterior-power object and
   no lower-degree theory is introduced, and the zero-dimensional convention is
   handled separately.
3. **The adjugate of an operator is well defined by the RANK-ONE route.** The
   textbook proof that $\operatorname{adj}(AB)=\operatorname{adj}(B)\operatorname{adj}(A)$
   for singular factors runs through a field of rational functions, and **no
   field-of-fractions or localisation construction exists anywhere in this
   library** (D10 — recorded for a future owner decision; its natural home is
   orders 46–50, not here). Prove instead a rank-one update identity from column
   multilinearity and compare $\det(P^{-1}AP + uv^{\mathsf{T}})$ two ways; that
   is what makes `def-adjugate-of-a-linear-operator` known to be
   basis-independent. Do not "simplify" this proof through a rational function
   field.
4. **The non-additivity false statement already exists** as the published
   `fs-determinant-is-additive-on-matrices`, whose refutation is $A=B=I_2$. Ids
   are immutable and a second id for the same statement is forbidden, so the B
   page carries a distinct companion instead: valid selected-column additivity
   set beside the whole-matrix failure, recomputed directly.

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

## AA-15. Algebraic Extensions, Degree, and Finite Fields  (order 96)

`requires`: `splitting-fields`, `linear-independence-bases-and-dimension`

**This page sits above linear algebra because $[K:F]$ is a dimension.** It was
originally scaffolded at order 56 and moved for exactly that reason.

$K$ as an $F$-vector space; **the degree $[K:F]$** (well-definedness #25);
finite extensions; **the tower law** $[L:F] = [L:K][K:F]$; algebraic and
transcendental elements; the **minimal polynomial of an algebraic element**,
irreducible and unique; $[F(\alpha):F] = \deg m_\alpha$; a finite extension is
algebraic; the algebraic elements form a subfield; **finite fields**: the order of
a finite field is $p^n$ where $p$ is its characteristic; the multiplicative group
of a finite field is cyclic; existence and uniqueness of $\mathbb{F}_{p^n}$ as
the splitting field of $x^{p^n} - x$; the **relative algebraic closure** and
**transitivity of algebraicity**; the **Frobenius endomorphism**; the
**subfield lattice** of a finite field; and cyclicity of $\mathbb{F}_q^\times$
in general, not only for $q=p$.

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

---
---

# PART II — the `subjects-01` enrichment (owner commission, 2026-08-13)

Everything above this line is PART I: the original algebra/linear-algebra
commission of 2026-07-27 and its later amendments. Part I is **not deleted and
not rewritten**; it is the record of how the track was designed and of the
decisions that were taken. Where Part I is now factually wrong about disk, §II.1
below says so, row by row, and **§II.1 wins**.

Part II was written by the `abstract-algebra` scaffolder lane of run
`subjects-01`, under `research/subjects-01-SEAMS.md`, which is the ownership and
seam contract for that run and outranks this file on every seam.

## II.0 How to read orders in this file

Part I quotes absolute plan orders throughout, and **every one of them is
stale** — the track has been renumbered at least three times since (the free
groups splice, the `frontier-11` re-home, the field-of-fractions insertion at
53.2). Part II therefore uses **relative labels and page ids**, per
`subjects-01-SEAMS.md` §0.2. The order column in §II.1's table is a **dated
snapshot taken from `research/plan-spec.json` on 2026-08-13, informational
only**; the orchestrator recomputes orders at splice and the page **id** is the
only thing to quote.

The one honest signal of what exists is a page's `items` array in
`research/plan-spec.json`: non-empty means authored, empty means planned and
nonexistent. Every claim in Part II about what the library contains was checked
against that file and against `items/` on 2026-08-13.

---

## II.1 Reconciliation against disk, 2026-08-13

### II.1.a The label → page-id map, with the snapshot orders

| label | page id (A page) | order snapshot | authored? |
|---|---|---|---|
| AA-1 | `monoids-groups-and-subgroups` | 24 | yes |
| NT-1 | `divisibility-gcd-and-bezout` | 26 | yes |
| NT-2 | `primes-and-the-fundamental-theorem-of-arithmetic` | 28 | yes |
| NT-3 | `congruences-and-the-chinese-remainder-theorem` | 30 | yes |
| AA-2 | `cosets-and-lagranges-theorem` | 32 | yes |
| AA-3 | `normal-subgroups-and-quotient-groups` | 34 | yes |
| AA-4 | `group-homomorphisms-and-the-isomorphism-theorems` | 36 | yes |
| AA-5 | `cyclic-groups-and-direct-products` | 38 | yes |
| AA-5b | `the-structure-of-finite-abelian-groups` | 40 | yes |
| AA-6 | `group-actions-and-cayleys-theorem` | 42 | yes |
| AA-7 | `symmetric-groups-and-the-sign-homomorphism` | 44 | yes |
| AA-8 | `rings-subrings-and-integral-domains` | 46 | yes |
| AA-9 | `ideals-and-quotient-rings` | 48 | yes |
| AA-10 | `euclidean-domains-pids-and-unique-factorisation` | 50 | yes |
| AA-11 | `polynomial-rings-and-roots` | 52 | yes |
| — | `the-field-of-fractions-and-localisation` | 53.2 | yes (22 items) |
| AA-12 | `field-extensions-and-the-complex-numbers` | 54 | yes |
| AA-13 | `splitting-fields` | 56 | yes |
| **AA-14** | `symmetric-polynomials` | 58 | **NO — §II.3** |
| FG-1/FG-2 | `free-groups-and-presentations`, `free-products-and-amalgamation` | 60, 62 | yes |
| AG-1/AG-2 | `conjugacy-and-simplicity-in-the-symmetric-groups`, `composition-series-and-solvable-groups` | 64, 66 | yes |
| AG-3/AG-4 | `semidirect-products-and-automorphism-groups`, `sylow-theorems-and-nilpotent-groups` | 68, 70 | **NO — expansion file** |
| LA-1 | `vector-spaces-and-subspaces` | 72 | yes |
| LA-2 | `linear-independence-bases-and-dimension` | 74 | yes |
| LA-3 | `linear-maps-rank-nullity-and-quotient-spaces` | 76 | yes (7 items — see §II.1.c.9) |
| LA-4 | `matrices-and-the-matrix-of-a-linear-map` | 78 | yes |
| LA-5 | `gaussian-elimination-and-row-reduction` | 80 | yes |
| LA-6 | `determinants-of-matrices-over-a-commutative-ring` | 82 | yes |
| LA-7 | `the-determinant-of-a-linear-operator` | 84 | yes |
| LA-8 | `eigenvalues-eigenvectors-and-the-characteristic-polynomial` | 86 | yes |
| **LA-9** | `diagonalisation-and-the-minimal-polynomial` | 88 | **NO — §II.5** |
| **LA-10** | `triangularisation-and-jordan-canonical-form` | 90 | **NO — §II.6** |
| LA-11 | `dual-spaces-bilinear-forms-and-inertia` | 92 | yes (33 items) |
| **LA-12** | `inner-product-spaces-and-orthogonality` | 94 | **NO — §II.7** |
| **AA-15** | `algebraic-extensions-degree-and-finite-fields` | 96 | **NO — §II.4** |
| **GA-1…GA-4** | *new, this commission* | 98–101 + decimals | **NO — §II.2** |
| MOD-1/MOD-2 | `modules-and-module-homomorphisms`, `free-modules-and-exact-sequences` | 102, 104 | yes |
| MOD-3/4/5 | `tensor-products-of-modules`, `chain-conditions-and-semisimple-modules`, `modules-over-a-pid-and-canonical-forms` | 106, 108, 110 | **NO — expansion file** |
| **X-1** | `the-fundamental-theorem-of-algebra` | 139 | **NO — §II.8** |
| **X-2** | `the-spectral-theorem-and-singular-value-decomposition` | 141 | **NO — §II.9** |
| RT-1…RT-4 | `the-group-algebra-and-representations` … `induced-representations-and-frobenius-reciprocity` | 143–149 | **NO — expansion file** |

**The well-definedness table of Part I is keyed by absolute order and is
therefore unusable as written.** Read its "page" column through this map: Part
I's 20 is AA-1, its 22 is NT-1, its 68 is LA-1, its 90 is LA-12, its 92 is
AA-15, and so on. §II.10 restates the obligations that Part II adds, keyed by
page id.

### II.1.b Claims in Part I that disk has since falsified

Each of these was checked item by item on 2026-08-13. **The claim in Part I is
wrong; the correction here is what binds.**

1. **"The unbridgeable seam" is not a seam and never was.**
   Part I asserts that `thm-cauchy-schwarz-finite`, `thm-minkowski-finite`,
   `thm-holder-finite` and `lem-metrics-on-rn` are published on `metric-spaces`,
   **above** the inner-product page, so the library must carry two proofs of
   Cauchy–Schwarz with a `forward_refs` apology. Verified: the first three are
   published on **`roots-and-rational-powers`**, which sits far **below** every
   linear-algebra page. Only `lem-metrics-on-rn` is on `metric-spaces`, and
   `def-p-norms-on-rn` is on `rn-as-a-normed-space`, both later.
   **Consequence, and it changes LA-12's design:** the finite-tuple
   Cauchy–Schwarz is an ordinary *backward* citation from LA-12, so LA-12 owes a
   **proved dictionary item in the D6 style** — the standard inner product on
   $\mathbb{R}^n$ is an inner product, and the general Cauchy–Schwarz specialises
   on it to exactly `thm-cauchy-schwarz-finite` — and **not** a forward
   reference. The same correction applies to `thm-minkowski-finite` (the finite
   triangle inequality) and to `thm-young-inequality`, `thm-am-gm`,
   `thm-weighted-am-gm-rational` on the same page.

   **The seam is real, but it is with a different page.** `rn-as-a-normed-space`
   publishes `def-norm-and-normed-space`, **`def-euclidean-inner-product`**,
   **`thm-cauchy-schwarz-and-the-euclidean-norm`**, `def-p-norms-on-rn` and
   `lem-p-norms-are-norms-and-induce-the-published-metrics`, and its B page
   publishes `cex-the-one-norm-comes-from-no-inner-product`. That page is
   **later** than LA-12 and is published, so it is not retrofitted. So the
   library will carry an inner product on $\mathbb{R}^n$ twice, once generally at
   LA-12 and once concretely later, and LA-12 owes a `## Remarks`-only
   `forward_refs` note naming `def-euclidean-inner-product`,
   `thm-cauchy-schwarz-and-the-euclidean-norm`, `lem-metrics-on-rn` and
   `def-p-norms-on-rn`. Part I's instinct was right and its item identification
   was wrong: the duplication is with order-167 material, not with
   `thm-cauchy-schwarz-finite`.

2. **The `def-field` question recorded as OPEN in AA-8 is CLOSED, by the first
   candidate.** `items/def-field.md` axiom (M) now reads "Multiplication is
   associative and commutative **on all of $F$**, and $x \cdot 1 = x$ for every
   $x \in F$". The two countermodels Part I records were countermodels to the
   *strict* reading, which the published text no longer permits, and
   `lem-of-zero-mult` is licensed. Nothing in Part II turns on this; the
   paragraph is left standing as history and must not be re-opened.

3. **`def-equivalence-relation` is not minted on AA-1.** It is published on
   `relations-functions-and-quotients`, far below. AA-1 audit note (1) — "there
   is no `def-equivalence-relation`" — is stale. Nothing downstream changes; the
   citation target is simply the earlier page.

4. **The formal derivative and polynomial separability EXIST.**
   `polynomial-rings-and-roots` publishes `def-formal-derivative-of-a-polynomial`,
   `prop-formal-derivative-laws`, `def-repeated-root-and-separable-polynomial`,
   `thm-repeated-root-derivative-criterion`,
   `lem-polynomial-gcd-is-stable-under-field-extension`,
   `thm-polynomial-is-separable-iff-coprime-to-its-derivative` and
   `cor-irreducible-polynomial-is-separable-iff-derivative-nonzero`. The
   expansion file's amendment §8.4 is **discharged**, and its decision AL-D6
   ("the formal derivative does not exist in this library, at any order") is
   **false as of today**. This is the single largest reason the Galois block of
   §II.2 is affordable: separability of *polynomials* is already done and only
   separability of *extensions* has to be built.

5. **"Every finite subgroup of the multiplicative group of a field is cyclic" is
   published**, in the sharper form
   `cor-finite-subgroups-of-units-in-a-domain-are-cyclic`, on
   `polynomial-rings-and-roots`. AA-5b's trap dropping it, and the note that it
   "needs AA-11", are discharged. NT-3's drop of primitive roots stands, because
   NT-3 is below `polynomial-rings-and-roots`; **its natural home is now AA-15**,
   where $\mathbb{F}_q^\times$ cyclic is stated anyway, and where
   $(\mathbb{Z}/p)^\times$ cyclic is the case $q=p$ — see §II.4.

6. **Gauss's lemma, Eisenstein and the mod-$p$ irreducibility test are
   published** on `polynomial-rings-and-roots`
   (`lem-gauss-content-lemma`, `thm-gauss-lemma-for-integer-polynomials`,
   `thm-eisenstein-irreducibility-criterion`,
   `thm-reduction-mod-prime-irreducibility-test`,
   `cor-xn-minus-p-is-irreducible-over-q`). This is exactly what the
   irreducibility of the cyclotomic polynomial over $\mathbb{Q}$ needs, and it is
   why GA-3 can prove it rather than record it.

7. **The field of fractions and localisation are published**
   (`the-field-of-fractions-and-localisation`, 22 items, including
   `def-field-of-fractions`, `thm-universal-property-of-the-field-of-fractions`,
   `cor-rational-function-field-as-a-fraction-field`, and the local-ring theory).
   Part I's decision **D10** — "no field-of-fractions or localisation
   construction exists anywhere in this library", recorded twice, in AA-12's
   amendment 5 and LA-7's amendment 3 — is **discharged**. The published pages it
   constrained are not retrofitted; but nothing *new* need route around it, and
   in particular GA-4's "the general polynomial of degree $n$ has Galois group
   $S_n$" may use $F(t_1,\dots,t_n)$ directly.

8. **`thm-cayley-hamilton` is already published**, on
   `eigenvalues-eigenvectors-and-the-characteristic-polynomial`, together with
   `def-polynomial-evaluation-at-an-endomorphism`,
   `thm-spectral-mapping-for-polynomials`,
   `cor-inverse-of-an-invertible-operator-is-a-polynomial-in-the-operator`,
   `def-algebraically-closed-field` and
   `cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue`.
   **LA-9 must not re-mint Cayley–Hamilton**; Part I's LA-9 inventory lists it and
   is superseded by §II.5. The classical fallacy ("substitute $x = A$") is
   likewise already spoken for and LA-9 should check the published B page before
   planning an `fs-`.

9. **There is no quotient vector space in the library, on any page.**
   `linear-maps-rank-nullity-and-quotient-spaces` is **published with seven
   items** — `def-linear-map`, `lem-linear-map-elementary-properties`,
   `def-kernel-and-image-of-a-linear-map`, `thm-linear-kernel-image-and-injectivity`,
   `lem-kernel-basis-extension-gives-image-basis`, `def-rank-and-nullity`,
   `thm-rank-nullity` — and carries **no $V/W$, no universal property, no first
   isomorphism theorem for vector spaces**, despite its id. `def-quotient-module`
   exists but is on `modules-and-module-homomorphisms`, which is **above** every
   linear-algebra page and cannot be cited from one. The page is published, so it
   is not retrofitted. See §II.6 for where Part II homes the quotient space and
   why, and §II.13 for the amendment this owes the module block.

10. **The universal properties of quotient objects mostly landed.**
    `thm-quotient-group-universal-property` is published on AA-4 and
    `thm-quotient-ring-universal-property` on AA-9, both with the namespaced ids
    the expansion file asked for. `thm-quotient-module-universal-property` is
    published on MOD-1. **`thm-quotient-space-universal-property` does not exist**
    — it is the vector-space case of finding 9 and is homed by §II.6.

11. **`thm-of-square-roots` is not an id.** Part I's LA-12 cites it; the
    published item is `thm-nth-roots-exist` on `roots-and-rational-powers`.

12. **The A-page ceiling is 60 items, not 100.** `SCHEMA.md` §6 and
    `briefs/beta-scaffold.md` §4a both say 100; `tools/validate-plan.mjs` emits
    the hard `size` error at `--max-items` default **60**, and `CLAUDE.md`'s
    standing rule says 60. The code is the truth. Every page proposed in Part II
    is sized against 60.

13. **THE FUNDAMENTAL THEOREM OF ALGEBRA IS ALREADY PROVED AND PUBLISHED — by
    the proof Part I forbade.** `thm-fundamental-theorem-of-algebra-minimum-modulus-proof`
    is published on **`the-complex-exponential-and-eulers-formula`**, from
    `lem-complex-polynomial-growth-and-minimum-modulus` and
    `lem-dalembert-minimum-modulus-descent`. X-1's trap — "the analytic
    minimum-modulus proof is **not** available here … If a subagent proposes it,
    that is the error to catch" — was a claim about what is available *at X-1's
    order*, and it remains true there; it was never a claim about the library,
    and the analysis track proved it much higher up, where the complex
    exponential supplies the $k$-th roots.
    **This does not make X-1 redundant, and X-1 must still be built.** The
    published proof sits far above `the-spectral-theorem-and-singular-value-decomposition`
    and above every RT page, so neither can cite it; "$\mathbb{C}$ is
    algebraically closed" has to be available *below* them, which is exactly
    what X-1 is for. What changes is that X-1 now owes a **D6 agreement record**
    against a theorem the library already has. Since the published item is later
    in reading order, that record is a `rem-` on X-1's companion page with
    `forward_refs: [thm-fundamental-theorem-of-algebra-minimum-modulus-proof]` —
    orientation only, no `deps` edge. See §II.8.

14. **Roots of unity in $\mathbb{C}$ are published later than the Galois
    block.** `thm-complex-nth-roots-and-roots-of-unity` and
    `cor-sum-of-roots-of-unity` are on
    `the-complex-exponential-and-eulers-formula`, and `ex-fifth-roots-of-unity`
    on its companion. GA-3 therefore builds $\mu_n(K)$ **algebraically**, for an
    arbitrary field, as the roots of $x^n-1$ in $K$ — which it must do anyway,
    since it needs $\mu_n$ over $\mathbb{F}_q$ and over abstract $F$ — and owes a
    `## Remarks` `forward_refs` note recording that the concrete complex
    description arrives later. **No $e^{2\pi i/n}$ ever appears in the Galois
    block**, and AL-D5's no-trigonometry discipline from the expansion file
    extends to it verbatim.

### II.1.c What Part I got right and Part II keeps

The self-contained-scope discipline, the two-notions/dictionary discipline (D6),
the B-pages-are-leaves discipline, the well-definedness-is-a-numbered-item
discipline, the determinant-over-a-commutative-ring decision (D3), and the
decision to place `[K:F]` above linear algebra (AA-15) are all confirmed correct
by what actually got built. In particular D3 paid for itself exactly as
predicted: `def-characteristic-polynomial-of-a-matrix` is a determinant over
$F[x]$, and `thm-adjugate-identity-over-a-commutative-ring` is what makes the
determinant trick available to the module block.


---

## II.2 The Galois block — GA-1 … GA-4 (NEW)

### II.2.0 Why four pairs, and where they go

`subjects-01-SEAMS.md` §3 fixes the anchor: the block sits immediately after
**`algebraic-extensions-degree-and-finite-fields-examples`**, in the free
integers 98–101, below `modules-and-module-homomorphisms`. Four integers is
**two** A/B pairs, and the orchestrator asked for an explicit judgment on
whether two suffice.

**They do not.** Two pairs would cap the block at about 110 A-items against the
60-item ceiling, and the only way to fit graduate Galois theory into that is to
drop material — either separability (which makes the correspondence a theorem
about a hypothesis nobody has verified), or cyclotomy (which is what
`number-theory` and RT-4's Burnside are waiting for), or solvability by radicals
(which is the point of the subject). **The block needs four A/B pairs**, sized at
roughly 42, 36, 44 and 33 A-items — every one under the ceiling, none padded.

Placement costs no renumber, because the spec already uses fractional orders
(`the-field-of-fractions-and-localisation` at 53.2, `the-integral-logarithm…` at
178.1). Proposed, for the orchestrator to confirm at splice:

| label | page id | proposed order (A/B) |
|---|---|---|
| GA-1 | `algebraic-closure-embeddings-and-separability` | 98 / 99 |
| GA-2 | `the-galois-correspondence` | 100 / 101 |
| GA-3 | `finite-fields-and-cyclotomic-extensions` | 101.2 / 101.4 |
| GA-4 | `solvability-by-radicals-and-kummer-theory` | 101.6 / 101.8 |

**Owner-authorised 2026-08-14: APPLIED.** This four-pair layout is final at
scaffold level. Orders 98--101 hold GA-1/GA-2; GA-3/GA-4 use the fractional
slots shown in the same band. The global plan-spec splice remains the
orchestrator's separate operation.

Every id was checked against `items/` and `research/plan-spec.json` on
2026-08-13 and is free. So is every item id proposed below; the four names most
at risk were checked individually, because the library namespaces per category
and the unqualified name is usually gone: `def-normal-closure` **is taken** (it
is the group-theoretic normal closure, on `free-groups-and-presentations`), so
the field-theoretic one is `def-normal-closure-of-an-algebraic-extension`;
`def-norm-and-normed-space`, `def-trace-of-a-square-matrix` and
`def-trace-of-an-endomorphism` are taken, so the field norm and trace are
`def-field-norm-and-trace`; `def-separable-space` is the topological notion, and
`def-repeated-root-and-separable-polynomial` is the published polynomial one, so
the extension notion is `def-separable-element-and-separable-extension`.

### II.2.1 What the block stands on, verified item by item

This is why four pairs are affordable at all. **`splitting-fields` is far
stronger than Part I's description of it**, and `polynomial-rings-and-roots`
already carries the whole separability apparatus for *polynomials*.

From `polynomial-rings-and-roots`: `def-formal-derivative-of-a-polynomial`,
`prop-formal-derivative-laws`, `def-repeated-root-and-separable-polynomial`,
`thm-repeated-root-derivative-criterion`,
`lem-polynomial-gcd-is-stable-under-field-extension`,
`thm-polynomial-is-separable-iff-coprime-to-its-derivative`,
`cor-irreducible-polynomial-is-separable-iff-derivative-nonzero`,
`cor-finite-subgroups-of-units-in-a-domain-are-cyclic`,
`thm-root-bound-for-polynomials-over-a-domain`,
`cor-polynomials-over-an-infinite-domain-are-determined-by-values`,
`lem-gauss-content-lemma`, `thm-gauss-lemma-for-integer-polynomials`,
`thm-eisenstein-irreducibility-criterion`,
`thm-reduction-mod-prime-irreducibility-test`,
`def-multivariate-polynomial-ring-by-iteration`,
`thm-universal-property-of-a-polynomial-ring`.

From `field-extensions-and-the-complex-numbers`:
`def-field-extension-generated-subfields-and-simple-extension`,
`def-algebraic-and-transcendental-elements`,
`thm-evaluation-kernel-and-minimal-polynomial`,
`thm-universal-property-of-adjoining-an-irreducible-root`,
`thm-simple-algebraic-extension-quotient-power-basis-and-degree`,
`cor-stem-fields-are-uniquely-f-isomorphic`, `cor-composite-of-two-subfields`,
and the $\mathbb{C}$ block including `thm-real-automorphisms-of-the-complex-numbers`.

From `splitting-fields`: `def-polynomials-that-split-and-splitting-fields`,
`thm-splitting-fields-exist-for-nonzero-polynomials`,
`lem-polynomials-and-roots-transport-along-field-isomorphisms`,
`lem-an-isomorphism-extends-across-a-simple-root-adjunction`,
**`thm-isomorphisms-extend-to-splitting-fields`**,
`cor-splitting-fields-are-unique-up-to-base-isomorphism`,
**`prop-endomorphisms-of-a-splitting-field-permute-its-roots`**,
**`def-normal-algebraic-extension`**, `prop-normality-descends-to-intermediate-fields`,
`prop-algebraic-splitting-extensions-are-normal`, `thm-normality-generation-criterion`,
`prop-finitely-generated-normal-extensions-are-splitting-fields`,
`prop-splitting-field-of-x-n-minus-a`.
**Normality is therefore already done**, and GA-1/GA-2 cite it rather than
building it. This is the single largest saving in the block.

From the group side, all strictly below: Lagrange, quotients, the isomorphism
and correspondence theorems, cyclic groups, `the-structure-of-finite-abelian-groups`
(including `def-exponent-of-a-finite-group`), group actions and the class
equation, $S_n$ and $\operatorname{sgn}$, **`thm-alternating-group-is-simple-for-n-at-least-five`**,
**`thm-a-five-and-symmetric-groups-from-degree-five-are-not-solvable`**,
`def-derived-series-solvable-group-and-derived-length`,
`thm-subgroups-and-quotients-of-solvable-groups-are-solvable`,
`thm-extensions-and-direct-products-of-solvable-groups-are-solvable`,
`thm-finite-solvable-iff-composition-factors-have-prime-order`. **Everything
solvability by radicals needs on the group side is published.**

From linear algebra, all strictly below: dimension and the tower law (AA-15),
`def-trace-of-an-endomorphism`, `def-determinant-of-a-linear-operator`,
`def-characteristic-polynomial-of-an-operator`, `def-algebraically-closed-field`,
`cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue`,
and the whole bilinear-form apparatus of `dual-spaces-bilinear-forms-and-inertia`
(needed for the trace form). From `order-zorn-and-the-axiom-of-choice`:
`thm-zorn`. From `ideals-and-quotient-rings`: maximal ideals by Zorn, which is
what Artin's algebraic-closure construction consumes.

**Not available below the block, and therefore never used in it:** the
fundamental theorem of algebra (`the-fundamental-theorem-of-algebra` is at 139
and `thm-fundamental-theorem-of-algebra-minimum-modulus-proof` is published at
189); roots of unity in $\mathbb{C}$; any module theory; the intermediate value
theorem; Möbius inversion; anything analytic. **No $e^{2\pi i/n}$, no polar
form, no trigonometry appears anywhere in the block** — the discipline the
expansion file fixed as AL-D5 for representation theory, extended here.

---

### GA-1. Algebraic Closure, Embeddings and Separable Extensions

- **id** `algebraic-closure-embeddings-and-separability`, companion
  `algebraic-closure-embeddings-and-separability-examples`
- **category** `abstract-algebra`
- **`requires`** `algebraic-extensions-degree-and-finite-fields`,
  `order-zorn-and-the-axiom-of-choice`
- **estimate** A 42, B 16

**Why the algebraic closure is built here and not skipped.** Finite Galois
theory can be done with splitting fields alone, and Part I's instinct would have
been to do that. Two things make the closure worth its ~12 items. First, the
separable degree $[K:F]_s$ is *defined* as a number of embeddings, and defining
it without a fixed ambient algebraically closed field forces a
"sufficiently large normal extension" bookkeeping that has to be re-verified at
every use. Second, `commutative-algebra` (Nullstellensatz) and `number-theory`
(rings of integers, splitting of primes) both want $\overline{F}$ and no other
track owns it in `subjects-01-SEAMS.md` §4. Building it once, here, is cheaper
than three tracks routing around it. **If the orchestrator cuts it, GA-1 falls to
about 30 items and every later definition acquires an ambient-normal-extension
hypothesis; say so in the decision rather than letting it happen silently.**

**Owner-authorised 2026-08-14: GA-1 retains algebraic closure.** The fallback
ambient-normal-extension hypotheses are retired; every later GA item uses the
fixed closure supplied here.

**Machinery minted first, because nothing published supplies it.**
`def-multivariate-polynomial-ring-by-iteration` is finitely many indeterminates
only, and Artin's construction needs one indeterminate per monic nonconstant
polynomial. So GA-1 opens with `def-monomials-on-an-index-set` (finitely
supported $I \to \mathbb{N}$ under pointwise addition),
`def-polynomial-ring-on-a-family-of-indeterminates`,
`thm-polynomial-ring-on-a-family-is-a-commutative-ring`,
`thm-universal-property-of-a-polynomial-ring-on-a-family`, and — **mandatory, D6
— `cor-polynomial-ring-on-a-finite-family-agrees-with-the-iterated-construction`**,
a proved dictionary against the published `def-multivariate-polynomial-ring-by-iteration`.
Silent re-definition here would be the two-notions defect at the top of the ring
track.

**DEFS.** monomials on an index set; the polynomial ring on a family of
indeterminates; $F$-homomorphism and $F$-embedding of extensions; **conjugate
elements** of an extension; **algebraic closure**; **separable degree**
$[K:F]_s$; **separable element**, **separable extension**; the **separable
closure** inside an extension; **perfect field**; **inseparable degree**
$[K:F]_i$; **purely inseparable extension**; **normal closure of an algebraic
extension** (id `def-normal-closure-of-an-algebraic-extension` — the bare
`def-normal-closure` is taken by the group-theoretic notion).

**THMS.**
*Closure.* the one-step lemma — in $F[x_f : f \in \mathcal{M}]$ over the monic
nonconstant $f$, the ideal generated by $\{f(x_f)\}$ is proper (**this is the
whole content of Artin's construction and it is one honest computation:** a
finite combination $\sum g_i f_i(x_{f_i}) = 1$ is contradicted inside a splitting
field of $f_1\cdots f_n$); **every field embeds in an extension in which every
nonconstant polynomial over the base has a root** (quotient by a maximal ideal,
Zorn); **the one-step theorem — if $L/F$ is algebraic and every nonconstant
$f \in F[x]$ has a *root* in $L$, then $L$ is algebraically closed** (landmark);
**algebraic closures exist** (landmark).

*Corrected 2026-08-13 against the source harvest, and it removes an entire
construction.* An earlier draft of this section routed existence through the
$\omega$-iteration $F \subseteq F_1 \subseteq F_2 \subseteq \cdots$ and then took
the algebraic elements of the union — Artin's original, and what most sources
print. It is unnecessary. Milne Prop. 6.5, Conrad `algclosure` Thm. 2 and Clark
Thm. 4.9 (attributed to Gilmer) all give the one-step theorem above, so $F_1$ is
already algebraically closed and the iteration, the chain-union lemma and the
"algebraic elements of the union" step all disappear. **GA-1 takes the one-step
route**, which is worth roughly five items and, more importantly, removes the
transfinite bookkeeping a reader would otherwise have to check. Its proof is
honest work and splits cleanly: the perfect case runs on the primitive element
theorem (every irreducible $\pi \in F[x]$ has splitting field $F(\alpha)$; the
minimal polynomial of $\alpha$ has a root $\beta \in L$; $F(\alpha)\cong_F F(\beta)$,
so $\pi$ splits inside $L$), and the characteristic-$p$ case first replaces $F$
by the perfect subfield $\{x \in L : x^{p^n} \in F \text{ for some } n\}$. Both
halves are separate numbered items; the perfect case is where the primitive
element theorem earns its place earlier on this page.

**An algebraic extension embeds into
any algebraically closed field over a given embedding of the base** (landmark;
Zorn on partial extensions); **algebraic closures are isomorphic over the base**,
with the honest statement that the isomorphism is **not** unique (the
non-uniqueness is exactly $\operatorname{Aut}(\overline{F}/F)$ and is what GA-2
studies); the normal closure of a finite extension exists and is finite.

*Embeddings.* an $F$-embedding carries a root of $p \in F[x]$ to a root of the
same $p$, so it permutes the conjugates (this is the published
`prop-endomorphisms-of-a-splitting-field-permute-its-roots` in the embedding
form, and it **cites** it); **the $F$-embeddings of a simple algebraic extension
$F(\alpha)$ into an algebraically closed $\Omega$ correspond bijectively to the
distinct roots of $m_\alpha$ in $\Omega$** (landmark); the number of extensions
of an embedding across a tower multiplies.

*Separable degree.* $[K:F]_s$ is independent of the chosen algebraically closed
field (**well-definedness #G1**); **$[L:F]_s = [L:K]_s[K:F]_s$** (landmark);
$[K:F]_s \le [K:F]$, and $[K:F]_s$ divides $[K:F]$; for a simple extension
$[F(\alpha):F]_s$ is the number of distinct roots of $m_\alpha$.

*Separability.* $\alpha$ is separable over $F$ iff $m_\alpha$ is a separable
polynomial in the published sense; **a finite extension is separable iff
$[K:F]_s = [K:F]$** (landmark); separability is transitive in towers; an
extension generated by separable elements is separable; the separable elements
of $K/F$ form an intermediate field $K_s$, and $[K:F]_s = [K_s:F]$.

*Characteristic $p$.* $p \mid \binom{p}{k}$ for $0 < k < p$, and **the Frobenius
$x \mapsto x^p$ is an injective field endomorphism in characteristic $p$**, are
both **CITED from AA-15, not minted here** — corrected 2026-08-13, see §II.4.c.
AA-15 cannot construct $\mathbb{F}_q$ at all without them (it needs the roots of
$x^q-x$ to be closed under addition), it sits below GA-1, and a second Frobenius
two pages later would be the two-notions defect on the most-cited map in the
block. A field is **perfect** iff it has characteristic $0$ or
Frobenius is surjective; fields of characteristic $0$ and finite fields are
perfect; **every irreducible polynomial over a perfect field is separable**, so
every algebraic extension of a perfect field is separable; **every irreducible
$f$ in characteristic $p$ is $g(x^{p^e})$ for a unique $e \ge 0$ and a unique
separable irreducible $g$** (landmark) — this is the structural theorem the
inseparable degree rests on; $[K:F] = [K:F]_s [K:F]_i$ with $[K:F]_i$ a power of
$p$; purely inseparable characterisations ($[K:F]_s = 1$; every element has
$\alpha^{p^e} \in F$; the only $F$-embedding into $\overline F$ is the
inclusion); an extension that is both separable and purely inseparable is
trivial.

*Primitive element.* **a finite extension is simple iff it has only finitely
many intermediate fields** (landmark, Steinitz — and it is stated in this
biconditional form deliberately, because the biconditional is what gives the
$\mathbb{F}_p(s,t)$ counterexample its force); **the primitive element theorem:
a finite separable extension is simple** (landmark); a finite separable
extension has finitely many intermediate fields; every finite extension of a
perfect field is simple.

**B page.** an algebraic closure of $\mathbb{Q}$ and the real algebraic numbers
inside it; $\overline{\mathbb{F}_p}$ as an infinite algebraic extension of a
finite field; the three $\mathbb{Q}$-embeddings of $\mathbb{Q}(\sqrt[3]{2})$
into $\overline{\mathbb{Q}}$ against its single automorphism, which is the
concrete reason $\lvert\operatorname{Aut}\rvert$ and $[K:F]_s$ are different
counts; the four embeddings of $\mathbb{Q}(\sqrt2,\sqrt3)$; **$x^p - t$ is
irreducible and inseparable over $\mathbb{F}_p(t)$**, with
$x^p - t = (x - t^{1/p})^p$ in an extension; $\mathbb{F}_p(t)/\mathbb{F}_p(t^p)$
purely inseparable of degree $p$ with $[K:F]_s = 1$; **$\mathbb{F}_p(s,t)$ over
$\mathbb{F}_p(s^p,t^p)$: degree $p^2$, infinitely many intermediate fields
$\mathbb{F}_p(s^p,t^p)(s + ct)$, and therefore no primitive element** — the
counterexample the whole separability apparatus exists to make honest; a perfect
field of characteristic $p$ that is infinite; $\mathbb{Q}$ has an algebraic
extension that is not finite; **fs**: every irreducible polynomial is separable;
**fs**: $[K:F]_s = [K:F]$ for every finite extension; **fs**: every algebraic
extension is simple; **fs**: an algebraic closure of $F$ is unique up to a
*unique* isomorphism over $F$ (refuted by complex conjugation on
$\overline{\mathbb{Q}}$, or by any nontrivial automorphism).

**Traps.** (i) The one-step lemma is where the construction actually happens;
do not compress it into "quotient by a maximal ideal". (ii) Uniqueness of the
algebraic closure is up to a **non-unique** isomorphism, and stating it as
"unique up to unique isomorphism" — the phrasing every other universal-property
theorem in this library uses — would be **false**. The `fs-` above exists to
make that visible. (iii) The Frobenius is **not** surjective in general; the
witness is $\mathbb{F}_p(t)$ and it is on the B page. (iv) $[K:F]_s$ divides
$[K:F]$ needs characteristic $p$ structure, not just multiplicativity; do not
assert it in characteristic $0$ style. (v) Do not use $\mathbb{C}$ anywhere:
embeddings go into $\overline{\mathbb{Q}}$, because $\mathbb{C}$ is not known to
be algebraically closed at this order.

**Forward references:** NONE load-bearing. A `## Remarks` pointer from
`def-algebraic-closure` to `the-fundamental-theorem-of-algebra`, recording that
the reader's first concrete algebraically closed field arrives there, is
permitted once that page's ids are planned.

---

### GA-2. Automorphism Groups, Fixed Fields and the Galois Correspondence

- **id** `the-galois-correspondence`, companion `the-galois-correspondence-examples`
- **category** `abstract-algebra`
- **`requires`** `algebraic-closure-embeddings-and-separability`,
  `symmetric-polynomials`
- **estimate** A 36, B 16

**DEFS.** $\operatorname{Aut}(K/F)$; the **fixed field** $K^G$; **Galois
extension** and **Galois group** $\operatorname{Gal}(K/F)$; **Galois closure**;
the **Galois group of a polynomial**; the **discriminant** of a monic polynomial;
the **resolvent cubic** of a quartic.

**THMS.**
*Fixed fields.* $\operatorname{Aut}(K/F)$ is a group and
$\lvert\operatorname{Aut}(K/F)\rvert \le [K:F]_s \le [K:F]$ for finite $K/F$;
$K^G$ is an intermediate field; **Dedekind's theorem on the linear independence
of characters** (landmark: distinct homomorphisms $G \to K^\times$ from a group
into the multiplicative group of a field are $K$-linearly independent as
functions); **Artin's theorem: for a finite group $G$ of automorphisms of $K$,
$[K : K^G] = \lvert G\rvert$** (landmark) — decomposed into the lower bound
(from Dedekind: more than $\lvert G\rvert$ independent elements would give a
dependence among the $\sigma \in G$) and the upper bound (any $\lvert G\rvert+1$
elements satisfy a nontrivial homogeneous linear system over $K$, and a minimal
nonzero solution is $G$-stable), because these are two genuinely different
arguments; **$\operatorname{Aut}(K/K^G) = G$**, so distinct finite groups have
distinct fixed fields.

*The Galois property.* **for a finite extension the following are equivalent:
$K/F$ is normal and separable; $\lvert\operatorname{Aut}(K/F)\rvert = [K:F]$;
$K^{\operatorname{Aut}(K/F)} = F$; $K$ is a splitting field over $F$ of a
separable polynomial** (landmark; normality is cited from `splitting-fields`,
separability from GA-1, and each implication is its own numbered step); a finite
Galois extension is Galois over every intermediate field, and **not** in general
*over* one — $E/F$ need not be Galois, which is exactly what the normality
clause below measures; Galois closures of finite separable extensions exist and
are minimal.

*The correspondence.* **the fundamental theorem of Galois theory** (landmark):
for finite Galois $K/F$ with $G = \operatorname{Gal}(K/F)$, $H \mapsto K^H$ and
$E \mapsto \operatorname{Gal}(K/E)$ are mutually inverse inclusion-reversing
bijections between subgroups of $G$ and intermediate fields, with
$[K:K^H] = \lvert H\rvert$ and $[K^H : F] = [G:H]$; **the normality clause**
(landmark): $\sigma H \sigma^{-1}$ corresponds to $\sigma(E)$; $H \trianglelefteq G$
iff $E/F$ is normal iff $E/F$ is Galois; and then restriction
$G \to \operatorname{Gal}(E/F)$ is surjective with kernel $H$, so
$\operatorname{Gal}(E/F) \cong G/H$; a finite Galois extension has finitely many
intermediate fields; $\operatorname{Gal}(K/E_1E_2) = H_1 \cap H_2$ and
$\operatorname{Gal}(K/E_1 \cap E_2) = \langle H_1, H_2\rangle$; **the translation
theorem**: for $E/F$ Galois and $L/F$ arbitrary inside a common extension,
$EL/L$ is Galois and $\operatorname{Gal}(EL/L) \cong \operatorname{Gal}(E/E\cap L)$
by restriction; a compositum of two Galois extensions is Galois and its group
embeds in the product of the two, with equality iff the extensions intersect in
$F$.

*Polynomials.* the Galois group of a separable polynomial embeds in the
symmetric group on its root set (landmark), and the embedding depends on an
ordering of the roots only up to conjugacy; **$f$ is irreducible iff the Galois
group acts transitively on its roots**; the discriminant
$\Delta(f) = \prod_{i<j}(\alpha_i - \alpha_j)^2$ lies in $F$ (via the
fundamental theorem of symmetric polynomials on `symmetric-polynomials` — **this
is why GA-2 declares that page**); in characteristic $\ne 2$, the Galois group
lies in $A_n$ iff $\Delta(f)$ is a square in $F$ (landmark; the Vandermonde
$\delta = \prod_{i<j}(\alpha_i - \alpha_j)$ satisfies
$\sigma\delta = \operatorname{sgn}(\sigma)\delta$, citing the published
$\operatorname{sgn}$); the Galois group of an irreducible cubic is $A_3$ or
$S_3$ according to the discriminant; the Galois group of an irreducible quartic
is determined by the resolvent cubic, in the standard five-case table.

**B page.** $\mathbb{Q}(\sqrt2,\sqrt3)/\mathbb{Q}$ with its Klein four group and
the complete lattice of three quadratic subfields; $\mathbb{Q}(\sqrt[3]{2},\omega)/\mathbb{Q}$
with $S_3$, its full subgroup lattice, and the two normal / four non-normal
intermediate fields identified; $x^4-2$ over $\mathbb{Q}$ with $D_4$, its ten
subgroups and its ten intermediate fields; $\mathbb{Q}(\sqrt[3]{2})/\mathbb{Q}$
is separable, not normal, and has trivial automorphism group;
$\mathbb{F}_p(t)/\mathbb{F}_p(t^p)$ is normal, not separable, and also has
trivial automorphism group — **the two witnesses together are what show both
hypotheses in "normal and separable" are doing work**; the discriminant of
$x^3+px+q$ computed as $-4p^3-27q^2$; $x^3-3x+1$, discriminant $81$, group
$A_3$; $x^3-2$, discriminant $-108$, group $S_3$; a quartic of each resolvent
type; **fs**: every extension of degree $n$ has $n$ automorphisms; **fs**: every
subgroup of the Galois group corresponds to a normal subextension; **fs**: the
Galois group of a polynomial is determined by its degree; **fs**: the Galois
correspondence is inclusion-preserving.

**Traps.** (i) Dedekind's independence theorem is about characters into
$K^\times$, not about field embeddings; state it in the form the two proofs of
Artin's theorem actually use. (ii) Artin's theorem is the engine of the whole
page — the correspondence's injectivity is $\operatorname{Aut}(K/K^G) = G$ and
its surjectivity is $K^{\operatorname{Gal}(K/E)} = E$, and both are Artin, not
the fundamental theorem. Do not present the fundamental theorem as if it were
proved from scratch. (iii) The normality clause has three separate contents
(the conjugation formula, the biconditional, the quotient isomorphism); they are
three steps. (iv) "$\operatorname{Gal}$" is written **only** for extensions
already known to be Galois; $\operatorname{Aut}(K/F)$ is the general notation.
Sources differ and mixing them is how a false statement gets written.
(v) The discriminant criterion needs $\operatorname{char} F \ne 2$; without it
$\delta = -\delta$ and the criterion is vacuous.

**Forward references:** NONE load-bearing.

---

### GA-3. Finite Fields, Cyclotomic Extensions and Their Galois Groups

- **id** `finite-fields-and-cyclotomic-extensions`, companion
  `finite-fields-and-cyclotomic-extensions-examples`
- **category** `abstract-algebra`
- **`requires`** `the-galois-correspondence`,
  `congruences-and-the-chinese-remainder-theorem`,
  `triangularisation-and-jordan-canonical-form`
- **estimate** A 44, B 17

The third `requires` is load-bearing and is the one that would be missed: the
**normal basis theorem** over a finite base field is the statement that
$K$ is a *cyclic* $F[\sigma]$-module, i.e. that the Frobenius has a cyclic
vector, and that is the linear-algebra theorem "an operator whose minimal
polynomial equals its characteristic polynomial has a cyclic vector" — scaffolded
at LA-10 in §II.6 precisely so this page can cite it.

**DEFS.** **roots of unity** $\mu_n(K)$ in an arbitrary field; **primitive
$n$-th root of unity**; the **cyclotomic polynomial** $\Phi_n \in \mathbb{Z}[x]$;
the **cyclotomic field** $\mathbb{Q}(\zeta_n)$; **normal basis**.

**THMS.**
*Finite fields.* **$\mathbb{F}_{q^n}/\mathbb{F}_q$ is Galois with cyclic group
of order $n$ generated by the $q$-power Frobenius** (landmark) — separability
because $x^{q^n}-x$ has nonzero derivative $-1$, normality because it is a
splitting field, and the order because Frobenius has order exactly $n$ by
Dedekind independence or by the root bound; **the subfields of
$\mathbb{F}_{q^n}$ are exactly the $\mathbb{F}_{q^d}$ for $d \mid n$, one for
each divisor** (landmark, the correspondence applied to a cyclic group);
$\mathbb{F}_{q^m} \subseteq \mathbb{F}_{q^n}$ iff $m \mid n$;
**$x^{q^n}-x$ is the product of all monic irreducibles over $\mathbb{F}_q$ whose
degree divides $n$** (landmark); hence the divisor-sum identity
$\sum_{d \mid n} d\,N_d(q) = q^n$ for the counts $N_d(q)$ of monic irreducibles;
**there is an irreducible polynomial of every degree over every finite field**,
by an elementary estimate from that identity — deliberately proved this way,
because the Möbius closed form is **not** available here (see §II.13); the
Frobenius fixed field is $\mathbb{F}_q$; **the normal basis theorem** (landmark),
in two cases with genuinely different proofs — infinite base field, by the
nonvanishing of a determinant polynomial together with the published
`cor-polynomials-over-an-infinite-domain-are-determined-by-values`; finite base
field, by the cyclic-vector theorem cited from LA-10.

*Roots of unity in a field.* $\mu_n(K)$ is a finite subgroup of $K^\times$,
hence **cyclic**, by the published
`cor-finite-subgroups-of-units-in-a-domain-are-cyclic`; $x^n-1$ is separable iff
$\operatorname{char} K \nmid n$, and then $\lvert\mu_n(K)\rvert = n$ in a
splitting field; in characteristic $p$, $\mu_{p^k}$ is trivial and
$x^{p^k}-1 = (x-1)^{p^k}$; a primitive $n$-th root of unity exists in $K$ iff
$\mu_n(K)$ has order $n$.

*Cyclotomy.* the recursion $x^n - 1 = \prod_{d \mid n}\Phi_d$ defines $\Phi_n$
in $\mathbb{Z}[x]$, and the division is exact there (**well-definedness #G2** —
the induction needs monic division over $\mathbb{Z}$, which is the published
`thm-monic-polynomial-division`, not division over a field); $\Phi_n$ is monic
of degree $\varphi(n)$ with integer coefficients; over a field of characteristic
not dividing $n$, the roots of $\Phi_n$ are exactly the primitive $n$-th roots
of unity; **$\Phi_n$ is irreducible over $\mathbb{Q}$** (landmark), by the
$\zeta \mapsto \zeta^p$ argument on top of the published Gauss lemma —
decomposed as: a primitive root and its $p$-th power for $p \nmid n$ have the
same minimal polynomial, then iterate over the prime factorisation of a unit
mod $n$; **$\operatorname{Gal}(\mathbb{Q}(\zeta_n)/\mathbb{Q}) \cong (\mathbb{Z}/n)^\times$**
(landmark), citing the published `def-unit-group-modulo-n-and-euler-totient`;
cyclotomic extensions of $\mathbb{Q}$ are abelian; **$\mathbb{Q}(\zeta_p)$ has a
unique subfield of degree $2$ over $\mathbb{Q}$** for odd $p$, because
$(\mathbb{Z}/p)^\times$ is cyclic of even order (its explicit identification as
$\mathbb{Q}(\sqrt{(-1)^{(p-1)/2}p})$ is **deferred to `number-theory`** — see
§II.13); over an arbitrary field, $\operatorname{Gal}(F(\zeta_n)/F)$ embeds in
$(\mathbb{Z}/n)^\times$ and is therefore abelian, with equality exactly when
$\Phi_n$ is irreducible over $F$; the compositum
$\mathbb{Q}(\zeta_m)\mathbb{Q}(\zeta_n) = \mathbb{Q}(\zeta_{\operatorname{lcm}(m,n)})$
and $\mathbb{Q}(\zeta_m)\cap\mathbb{Q}(\zeta_n) = \mathbb{Q}(\zeta_{\gcd(m,n)})$
(from CRT and the correspondence).

Add `thm-kronecker-weber`: every finite abelian extension of $\mathbb Q$ is
contained in a cyclotomic extension. GA-3 owns the Galois-theoretic statement
and proof route; number theory cites it for arithmetic consequences and the
conductor formulation rather than minting a second theorem.

**B page.** $\mathbb{F}_4$, $\mathbb{F}_8$ and $\mathbb{F}_9$ written out with
their Frobenius actions; the subfield lattice of $\mathbb{F}_{2^{12}}$ against
the divisor lattice of $12$; the two monic irreducible cubics over
$\mathbb{F}_2$ and the divisor-sum identity checked at $n=3$;
$\Phi_1,\dots,\Phi_{12}$ tabulated; $\Phi_p = 1 + x + \cdots + x^{p-1}$, with
Eisenstein applied to $\Phi_p(x+1)$; $\Phi_n$ **reducible over a finite field**
($\Phi_5$ splits into linear factors over $\mathbb{F}_{11}$ because $5 \mid 10$)
— the witness that irreducibility of $\Phi_n$ is a statement about $\mathbb{Q}$;
$\operatorname{Gal}(\mathbb{Q}(\zeta_{12})/\mathbb{Q}) \cong (\mathbb{Z}/12)^\times$
with its three quadratic subfields $\mathbb{Q}(i)$, $\mathbb{Q}(\sqrt3)$,
$\mathbb{Q}(\sqrt{-3})$ matched to the three index-two subgroups; a normal basis
of $\mathbb{F}_8$ over $\mathbb{F}_2$ exhibited; a basis of $\mathbb{F}_8$ that
is **not** normal; **fs**: every finite field of order $n$ is $\mathbb{Z}/n$;
**fs**: the coefficients of $\Phi_n$ lie in $\{-1,0,1\}$ (true up to $n = 104$
and false at $n = 105$ — stated as the false statement it is, with the refuting
coefficient computed); **fs**: $\Phi_n$ is irreducible over every field;
**fs**: $\mu_n(K)$ has $n$ elements in every field; **fs**: every basis of a
finite field over a subfield is a normal basis.

**Traps.** (i) $\Phi_n$ is defined over $\mathbb{Z}$ and then **reduced** into
other fields; defining it as "the minimal polynomial of a primitive root" would
be circular with its irreducibility and false over $\mathbb{F}_q$. (ii) The
irreducibility proof needs Gauss's lemma *and* the derivative criterion for
$x^n-1$ separable mod $p$; both are published and both must be cited, not
waved. (iii) $\varphi$ and $(\mathbb{Z}/n)^\times$ are published at
`congruences-and-the-chinese-remainder-theorem`; do not re-mint. (iv) Every
statement about $\mu_n$ carries the hypothesis $\operatorname{char} K \nmid n$
or handles the failure explicitly. (v) **Wedderburn's little theorem is NOT on
this page** — see §II.13 for the precise reason, which is not the one the
expansion file recorded.

**Forward references:** a `## Remarks` note from `def-roots-of-unity-in-a-field`
to `thm-complex-nth-roots-and-roots-of-unity`, recording that the concrete
complex description of $\mu_n$ arrives later in the reading order. Orientation
only, `forward_refs` declared, no `deps` edge.

---

### GA-4. Norm and Trace, Cyclic and Kummer Extensions, and Solvability by Radicals

- **id** `solvability-by-radicals-and-kummer-theory`, companion
  `solvability-by-radicals-and-kummer-theory-examples`
- **category** `abstract-algebra`
- **`requires`** `finite-fields-and-cyclotomic-extensions`,
  `composition-series-and-solvable-groups`,
  `the-field-of-fractions-and-localisation`,
  `dual-spaces-bilinear-forms-and-inertia`
- **estimate** A 33, B 16

**DEFS.** the **norm** $N_{K/F}$ and **trace** $\operatorname{Tr}_{K/F}$ of a
finite extension (id `def-field-norm-and-trace`); the **trace form**;
**cyclic extension**; the **Lagrange resolvent**; **Kummer extension**;
**radical extension** and **solvable by radicals**.

**THMS.**
*Norm and trace.* $N_{K/F}(\alpha) = \big(\prod_\sigma \sigma\alpha\big)^{[K:F]_i}$
and $\operatorname{Tr}_{K/F}(\alpha) = [K:F]_i \sum_\sigma \sigma\alpha$ over the
$F$-embeddings into an algebraic closure, and both lie in $F$ (**the inseparable
exponent is not decoration: sources that omit it are stating the separable case
only**); $N$ is multiplicative, $\operatorname{Tr}$ is $F$-linear;
**$N_{K/F}(\alpha)$ and $\operatorname{Tr}_{K/F}(\alpha)$ are the determinant
and the trace of multiplication by $\alpha$ as an $F$-linear operator on $K$**
(landmark) — a **mandatory D6 dictionary item** against the published
`def-determinant-of-a-linear-operator` and `def-trace-of-an-endomorphism`,
because otherwise the library has two unrelated notions each called a norm and a
trace; transitivity in towers; **the trace form $(x,y)\mapsto\operatorname{Tr}(xy)$
is nondegenerate iff $K/F$ is separable** (landmark; cites the published
nondegeneracy and radical vocabulary of `dual-spaces-bilinear-forms-and-inertia`);
the trace of a separable extension is surjective.

*Cyclic extensions.* **Hilbert's theorem 90** (landmark): for $K/F$ cyclic with
$\operatorname{Gal} = \langle\sigma\rangle$, $N_{K/F}(\beta) = 1$ iff
$\beta = \alpha/\sigma(\alpha)$ for some $\alpha \in K^\times$ — proved from
Dedekind independence, which is why GA-2 is the prerequisite and not merely the
correspondence; the **additive** form, $\operatorname{Tr}(\beta) = 0$ iff
$\beta = \alpha - \sigma(\alpha)$, from the surjectivity of the trace;
**if $\mu_n \subseteq F$ and $\operatorname{char} F \nmid n$, then $K/F$ is
cyclic of degree $n$ iff $K = F(\alpha)$ with $\alpha^n \in F$ and $x^n-\alpha^n$
irreducible** (landmark, both directions; forward direction by the Lagrange
resolvent, reverse by `prop-splitting-field-of-x-n-minus-a`, which is
**published** and is exactly the missing step); **Artin–Schreier**: in
characteristic $p$, $K/F$ is cyclic of degree $p$ iff $K = F(\alpha)$ with
$\alpha^p - \alpha \in F$ and $x^p-x-a$ irreducible (landmark; the additive
Hilbert 90 is what makes this the exact analogue).

*Kummer theory.* for $F \supseteq \mu_n$, the map
$B \mapsto F(\sqrt[n]{B})$ is an inclusion-preserving bijection from the
subgroups $B$ with $(F^\times)^n \subseteq B \subseteq F^\times$ and
$[B : (F^\times)^n]$ finite, to the finite abelian extensions of $F$ of exponent
dividing $n$ (landmark); the Kummer pairing
$\operatorname{Gal}(K/F) \times B/(F^\times)^n \to \mu_n$ is perfect, so
$\operatorname{Gal}(K/F) \cong \operatorname{Hom}(B/(F^\times)^n, \mu_n)$;
$[F(\sqrt[n]{a}):F]$ is the order of $a(F^\times)^n$ in $F^\times/(F^\times)^n$.

*Solvability.* a **radical extension** is a tower each step of which adjoins an
$n$-th root of an element of the previous step; $f$ is **solvable by radicals**
if its splitting field lies in some radical extension (**the convention
disagreement is real and is recorded: some sources require the tower to be
Galois, some require $\mu_n$ present at each step. The library takes the weakest
definition — a plain tower, no Galois or root-of-unity hypothesis — and proves
the strengthenings as lemmas, because a definition that quietly assumes what the
proof needs makes the theorem weaker than it looks**); every radical extension
is contained in a Galois radical extension (the normal closure of a radical
extension is radical); adjoining $\mu_n$ to a Galois extension changes the group
by an abelian kernel and preserves solvability; **if $f$ is solvable by radicals
in characteristic $0$ then its Galois group is solvable** (landmark);
**conversely, in characteristic $0$, a solvable Galois group makes $f$ solvable
by radicals** (landmark, by induction along a composition series with cyclic
prime-order factors, using the cyclic-extension theorem after adjoining roots of
unity); every polynomial of degree at most $4$ is solvable by radicals, because
$S_4$ is solvable — citing the **published** solvability of $S_3$ and $S_4$;
**the general polynomial of degree $n$ has Galois group $S_n$** (landmark): the
fixed field of $S_n$ acting on $F(t_1,\dots,t_n)$ by permuting the variables is
$F(e_1,\dots,e_n)$, by Artin's theorem plus the fundamental theorem of symmetric
polynomials — this is where `symmetric-polynomials` and the published rational
function field `cor-rational-function-field-as-a-fraction-field` are consumed;
**the general polynomial of degree $\ge 5$ is not solvable by radicals**
(landmark, Abel–Ruffini), from the published
`thm-a-five-and-symmetric-groups-from-degree-five-are-not-solvable`;
**a transitive subgroup of $S_p$ containing a transposition is all of $S_p$**
for $p$ prime — the tool a concrete insoluble quintic needs, proved here even
though its use is deferred (see traps).

**B page.** $N$ and $\operatorname{Tr}$ for $\mathbb{Q}(\sqrt d)/\mathbb{Q}$
computed both ways, by embeddings and as $\det$/$\operatorname{tr}$ of
multiplication, agreeing — the concrete face of the dictionary item;
$N_{\mathbb{F}_{q^n}/\mathbb{F}_q}(\alpha) = \alpha^{(q^n-1)/(q-1)}$;
$\operatorname{Tr} \equiv 0$ for $\mathbb{F}_p(t)/\mathbb{F}_p(t^p)$, the
inseparable witness for the trace-form theorem; **Hilbert 90 for
$\mathbb{Q}(i)/\mathbb{Q}$ giving the classical parametrisation of Pythagorean
triples**; $x^3-2$ over $\mathbb{Q}(\omega)$ is cyclic of degree $3$;
**Cardano's formula derived from the Lagrange resolvent** and checked on
$x^3-3x-1$; the quartic solved through its resolvent cubic;
$x^5-2$ over $\mathbb{Q}$ **is** solvable by radicals, with Galois group
$\mathbb{Z}/5 \rtimes \mathbb{Z}/4$ of order $20$ — the witness that "quintic"
is not the same as "insoluble"; an Artin–Schreier extension $x^p-x-t$ over
$\mathbb{F}_p(t)$; a Kummer extension $\mathbb{Q}(\zeta_3, \sqrt[3]{2},\sqrt[3]{3})$
with $B/(F^\times)^3 \cong (\mathbb{Z}/3)^2$; **fs**: a polynomial solvable by
radicals has abelian Galois group; **fs**: every quintic is insoluble by
radicals; **fs**: $N_{K/F}(\alpha) = \prod_\sigma\sigma(\alpha)$ for every
finite extension (the inseparable exponent); **fs**: $\operatorname{Tr}_{K/F}$
is surjective for every finite extension.

**Traps.** (i) Both directions of the radical criterion are stated **in
characteristic $0$**. The forward direction survives in characteristic $p$ with
care; the converse genuinely fails, and the honest scoping is a hypothesis in
the Statement and in the title, not a caveat in Remarks. (ii) The norm's
inseparable exponent $[K:F]_i$ is the most-dropped hypothesis in this whole
block; the `fs-` above exists for it. (iii) **A concrete insoluble quintic over
$\mathbb{Q}$ cannot be exhibited on this page.** The standard argument —
$x^5-6x+3$ is irreducible by Eisenstein, has exactly three real roots by
calculus, so complex conjugation restricts to a transposition, so the group is
transitive with a transposition, so it is $S_5$ — needs the splitting field to
sit inside $\mathbb{C}$, i.e. needs $\mathbb{C}$ to be algebraically closed, and
that is `the-fundamental-theorem-of-algebra`, which is later in the reading
order. **Deferred, not deleted:** it is homed on X-1's companion page in §II.8,
and `thm-a-transitive-subgroup-of-s-p-containing-a-transposition-is-s-p` is
proved here so that page has it. (iv) Abel–Ruffini as proved here is a statement
about the *general* polynomial over $F(e_1,\dots,e_n)$, not about every quintic
over $\mathbb{Q}$; a title conflating the two asserts more than the proof gives.
(v) Do not use the field of fractions to construct $F(t_1,\dots,t_n)$ from
scratch — `cor-rational-function-field-as-a-fraction-field` is published and
iterating it over the published `def-multivariate-polynomial-ring-by-iteration`
is the whole construction.

**Forward references:** NONE load-bearing.

---

## II.3 AA-14 — `symmetric-polynomials`

- **id** `symmetric-polynomials`, companion `symmetric-polynomials-examples`
- **category** `abstract-algebra`
- **snapshot order** 58 / 59, planned and **unauthored**
- **`requires`** `splitting-fields` (spec, unchanged)
- **estimate** A 26, B 15

GA-2 and GA-4 both declare this page: the discriminant lies in the base field
because of the fundamental theorem of symmetric polynomials, and "the general
polynomial of degree $n$ has Galois group $S_n$" *is* the statement that the
fixed field of $S_n$ on $F(t_1,\dots,t_n)$ is $F(e_1,\dots,e_n)$. It is
unauthored, so the Galois block cannot be built until it is.

### II.3.a Two source findings that change how the main theorem is written

**The uniqueness half is genuinely under-proved in the literature, and the
library must not copy that.** Artin 16.1.6 *states* uniqueness as part of the
theorem and discharges it in one sentence — "One can show that $G$ is uniquely
determined by going over this proof". That is a Statement asserting more than its
proof gives, which is the fatal class this library screens for, and it is worth
noticing that a standard graduate text ships it. **Conrad's `symmfunction`
Thm. 4.1 is the only carefully proved version harvested**, and its engine is the
injectivity of $i \mapsto \operatorname{mdeg}(e^i)$ on exponent vectors — i.e.
that distinct monomials in the $e_j$ have distinct multidegrees, which is exactly
algebraic independence in usable form. **AA-14 proves existence and uniqueness as
two separate numbered theorems, and takes Conrad's route for uniqueness.**
Conrad's own trap witness, $Y_1^5+Y_2^5$, goes on the B page.

**The "over an arbitrary commutative ring" strengthening costs exactly one
observation: the $e_i$ are monic.** Conrad's footnote 4 is explicit that
$\operatorname{mdeg}(fg)=\operatorname{mdeg}f+\operatorname{mdeg}g$ fails over a
ring with zero divisors, and survives in this proof only because the leading
coefficients in play are $1$. Grinberg Thm. 7.1.15 states the theorem over any
commutative ring. **So AA-14 states the theorem over a commutative ring**, with
that observation as its own step — and the generality is not decoration: GA-3
needs $\Phi_n \in \mathbb{Z}[x]$ and MOD-5 works over a PID.

**A notation trap worth an item's worth of care.** Milne writes $p_i$ for the
**elementary** symmetric polynomials; Macdonald, Grinberg, Conrad and everyone
else write $p_r$ for the **power sums**. A scaffold that reads Milne 5.36
alongside Macdonald (2.11) will conflate them silently. **The library adopts
$e$, $h$, $p$, $m$** — elementary, complete homogeneous, power sum, monomial —
and says so in a Remark on the definition item.

### II.3.b The item list

**DEFS.** the action of $S_n$ on $R[x_1,\dots,x_n]$ by permuting variables;
**symmetric polynomial**; the **elementary symmetric polynomials** $e_1,\dots,e_n$;
the **power sums** $p_k$; the **complete homogeneous** $h_k$; the **monomial
symmetric** $m_\lambda$; the **lexicographic order** and the **multidegree**;
the **discriminant** of a monic polynomial; the **monic resultant**, defined
through the coefficient expression of the symmetric root product. The general
leading-coefficient normalization and the Sylvester matrix are deferred until
the determinant page is in the prerequisite closure.

**THMS.**
*The main theorem.* the symmetric polynomials form a subring; $\prod_i(x-x_i)
=\sum_k(-1)^ke_kx^{n-k}$, which is the identity every application actually uses;
multidegrees are additive on products of monic-in-the-relevant-sense polynomials
(§II.3.a); **existence: every symmetric polynomial over a commutative ring $R$ is
a polynomial in $e_1,\dots,e_n$ over $R$** (landmark, by the lexicographic
descent — Gauss's algorithm, which is constructive and should be presented as
such); **uniqueness: that polynomial is unique**, equivalently
$e_1,\dots,e_n$ are algebraically independent over $R$ (landmark, separately
proved, by Conrad's multidegree injectivity); **the symmetric functions of the
roots of a monic $f$ lie in the base ring** — the corollary GA-2 and GA-4
consume, stated in the form "if $g \in R[x_1,\dots,x_n]$ is symmetric and
$\alpha_1,\dots,\alpha_n$ are the roots of monic $f\in R[x]$ in a splitting
field, then $g(\alpha_1,\dots,\alpha_n) \in R$".

*Power sums.* the **Newton identities**, stated as the **two** genuinely
different cases they are — $k\le n$: $p_k-e_1p_{k-1}+\cdots+(-1)^{k-1}e_{k-1}p_1
+(-1)^kke_k=0$; and $k>n$, where the $ke_k$ term is absent — because a single
formula covering both is where the error gets made (Grinberg Thm. 7.1.12);
**The $e_i$ are expressible in the $p_i$ if $n!\,1_R$ is invertible in $R$.**
This is the exact ring hypothesis. If $R$ is a field, it is equivalent to
$\operatorname{char}R=0$ or $\operatorname{char}R>n$.
*The harvest records that **no** source states the sharp characteristic
hypothesis — all of them assume a $\mathbb{Q}$-algebra — so this must be proved
inline rather than cited, and the item's Facts must say so.* The failure witness
is on the B page.

*Discriminant and monic resultant.* The **discriminant**
$\Delta=\prod_{i<j}(\alpha_i-\alpha_j)^2$ is symmetric, hence a polynomial in
the coefficients; $\Delta=0$ if and only if the monic polynomial has a
repeated root, in every characteristic. For monic $f$, define
$\operatorname{Res}(f,g)$ through the symmetric coefficient expression of
$\prod_i g(\alpha_i)$. Prove $\operatorname{Res}(f,g)=\prod_i g(\alpha_i)$,
the common-root criterion, and
$\operatorname{Res}(f,f')=(-1)^{n(n-1)/2}\operatorname{Disc}(f)$. The general
resultant, its symmetry under exchanging $f$ and $g$, and its
Sylvester-determinant presentation are deferred until determinant machinery is
available.

**FS.** every polynomial fixed by $A_n$ is symmetric (the Vandermonde
$\prod_{i<j}(x_i-x_j)$ is the witness, and it is the same object that makes GA-2's
discriminant criterion work — stating it here is what makes that later argument
legible); the expression of a symmetric polynomial in the $e_i$ is unique
*without* algebraic independence being proved (the point of §II.3.a); the power
sums generate in every characteristic — refuted over $\mathbb{F}_2$ with $n=2$,
where $e_2=x_1x_2$ is not a polynomial in $p_1=x_1+x_2$ and $p_2=x_1^2+x_2^2=p_1^2$;
the discriminant detects repeated roots in every characteristic. In
characteristic $2$, the later square-class test for the parity of a
permutation needs separate care, but $\Delta(f)=0$ if and only if $f$ has a
repeated root remains valid without a characteristic hypothesis.

**B page.** $x_1^2+x_2^2$ and $x_1^3+x_2^3$ written in $e_1,e_2$; Gauss's
algorithm run in full on a symmetric polynomial in three variables;
**Conrad's $Y_1^5+Y_2^5$ trap worked**, showing where a careless descent goes
wrong; the Newton identities checked for $n=3$ at $k=2,3,4$, exhibiting both
cases; the $\mathbb{F}_2$ failure of power-sum generation; $\Delta(x^3+px+q)
=-4p^3-27q^2$ computed; $\Delta(x^2+bx+c)=b^2-4c$; the Sylvester matrix of two
explicit quadratics with its determinant, cross-checked against the product of
root differences; the Vandermonde shown $A_n$-invariant and not $S_n$-invariant.

**Traps.** (i) Uniqueness is a separate theorem with a real proof (§II.3.a); do
not copy Artin's sentence. (ii) The Newton identities have two cases.
(iii) The sharp characteristic hypothesis for power sums is unsourced and must be
proved. (iv) $e$ versus $p$ — Milne's notation is the opposite of everyone's
(§II.3.a). (v) The resultant's sign conventions differ between sources; fix one
in the definition and never quote a source's formula without checking it against
the fixed convention.

**Forward references:** NONE load-bearing.

---

## II.4 AA-15 — `algebraic-extensions-degree-and-finite-fields`

- **id** `algebraic-extensions-degree-and-finite-fields`, companion
  `algebraic-extensions-degree-and-finite-fields-examples`
- **category** `abstract-algebra`
- **snapshot order** 96 / 97, planned and **unauthored**
- **`requires`** (spec, unchanged) `splitting-fields`,
  `linear-independence-bases-and-dimension`
- **estimate** A 30, B 16

**This is the anchor page of the whole commission.** `subjects-01-SEAMS.md` §3
places the Galois block immediately after this page's companion, so everything in
§II.2 rests on it, and it is unauthored. If one page in this file is built first,
it is this one.

### II.4.a The gap is larger than the page title suggests

Verified from disk for `frontier-13`: **there is no general degree of a field
extension and no tower law in the library.** The published
`def-algebraic-and-transcendental-elements` already defines an algebraic
extension as an extension in which every element is algebraic, so this page
cites that definition rather than minting a duplicate.
What exists below is entirely element-level or simple-extension-level —
`def-algebraic-and-transcendental-elements` and
`thm-simple-algebraic-extension-quotient-power-basis-and-degree` on
`field-extensions-and-the-complex-numbers` (snapshot 54), which gives
$[F(\alpha):F] = \deg m_\alpha$ for a *single* algebraic element.

There is one wrinkle worth recording, because a future reader will notice it and
should not think it is an error. `def-normal-algebraic-extension` is **published**
at snapshot 56 and its text opens "An algebraic field extension $E/F$ is
**normal** if …", with `def-algebraic-and-transcendental-elements` in its `deps`.
So the *phrase* "algebraic extension" is already in load-bearing published use,
resting unambiguously on the element-level definition ("every element is
algebraic"), while the *item* defining it arrives here at 96. That is legal and
the published item is self-contained. But it makes **#F1** mandatory: AA-15's
`def-algebraic-extension` must be stated so that it is visibly the same notion,
and must carry a Remark naming `def-normal-algebraic-extension` as the published
item already using it. Minting a subtly different notion here — say, one
restricted to finite extensions — would silently falsify a published landmark.

`def-ring-characteristic` and `lem-characteristic-and-additive-order` **are**
published, on `rings-subrings-and-integral-domains` (snapshot 46), together with
`def-subfield`, `def-ordered-ring` and the domain theory. So characteristic is
available and is not this page's to mint.

### II.4.b The item list

**DEFS.** the **degree** $[K:F]:=\dim_FK$ of a finite-dimensional extension
and **finite extension** (`def-extension-degree-and-finite-extension`);
**finitely generated extension**; **relative algebraic closure**; the **prime
subfield**; a **finite field** and its order; and the **algebraically
constructible real numbers**. Cite the published definition of algebraic
extension. Do not define primitive roots here; prove instead that every finite
field's multiplicative group is cyclic.

**THMS.**
*Degree.* $[K:F]$ is well defined as a dimension, citing the published
`def-dimension` and `thm-any-two-finite-bases-have-the-same-size` — the page does
**not** re-derive dimension theory, and this citation is the whole reason
`linear-independence-bases-and-dimension` is in `requires`; $[K:F]=1$ iff $K=F$;
$[F(\alpha):F] = \deg m_\alpha$ (**cited** from snapshot 54, not reproved);
**the tower law $[L:F] = [L:K]\,[K:F]$** (landmark) — proved by exhibiting the
product family $\{x_iy_j\}$ as a basis, with **both** the spanning and
independence halves as separate steps. All displayed degrees are
finite-dimensional. The cardinal-valued infinite-basis version is deferred
because the published `def-dimension` does not define cardinal dimension; **$[E:F]$ divides $[K:F]$ for an intermediate
$E$** (immediate from the tower law, and the engine of every impossibility
result on this page and on X-1's companion).

*Algebraic extensions.* **finite $\Rightarrow$ algebraic** (landmark: for
$\alpha \in K$ the powers $1,\alpha,\dots,\alpha^{[K:F]}$ are dependent), and the
converse fails; $\alpha$ is algebraic over $F$ iff $[F(\alpha):F]$ is finite;
an extension generated by **finitely many algebraic elements is finite**, by
induction along the tower; **the algebraic elements of $K$ over $F$ form an
intermediate field** (landmark — for $\alpha,\beta$ algebraic, $F(\alpha,\beta)$
is finite over $F$ by the previous item, hence algebraic, hence contains
$\alpha\pm\beta$, $\alpha\beta$, $\alpha^{-1}$; this is the argument that makes
the algebraic numbers a field without a single explicit polynomial and it is one
of the most instructive proofs in the subject); **algebraicity is transitive**:
$L/K$ algebraic and $K/F$ algebraic imply $L/F$ algebraic (landmark — the step
that matters is that $\alpha$'s minimal polynomial over $K$ has finitely many
coefficients, so $\alpha$ is already algebraic over the finite subextension they
generate); a finitely generated algebraic extension is finite; **the compositum satisfies
$[K_1K_2:F] \le [K_1:F][K_2:F]$** — the published `cor-composite-of-two-subfields`
supplies the compositum itself, but *the degree bound is proved here*: the
harvest found that Clark leaves it as Exercise 3.6 and no harvested source proves
it, so it is written out (a spanning set for $K_1K_2$ over $K_1$ is the image of
a basis of $K_2$ over $F$) rather than cited.

*Characteristic and Frobenius.* the characteristic of a field is $0$ or prime,
and the prime subfield is $\mathbb{Q}$ or $\mathbb{F}_p$ accordingly;
**$p \mid \binom{p}{k}$ for $0<k<p$**, from the published binomial coefficients;
**the Frobenius $x \mapsto x^p$ is an injective field endomorphism in
characteristic $p$** (landmark), and is an automorphism of any *finite* field.
**These two are minted here and GA-1 cites them** (§II.4.c).

*Finite fields.* a finite field has prime characteristic $p$ and order $p^n$ with
$n = [F:\mathbb{F}_p]$; **$F^\times$ is cyclic**, cited from the published
`cor-finite-subgroups-of-units-in-a-domain-are-cyclic` — not reproved;
every $\alpha \in F$ satisfies $\alpha^q = \alpha$, and $x^q - x = \prod_{\alpha
\in F}(x-\alpha)$; **$\mathbb{F}_q$ is a splitting field of $x^q-x$ over
$\mathbb{F}_p$**, hence **unique up to isomorphism**, citing the published
`cor-splitting-fields-are-unique-up-to-base-isomorphism`; **existence: for every
prime power $q=p^n$ there is a field of order $q$** (landmark) — take a splitting
field of $x^q-x$ over $\mathbb{F}_p$ and check its root set is a subfield, which
is exactly where the Frobenius is consumed, and check the roots are distinct via
the published derivative criterion since $(x^q-x)' = -1$;
**$\mathbb{F}_{p^m} \subseteq \mathbb{F}_{p^n}$ iff $m \mid n$**, and
$\mathbb{F}_{p^n}$ has **exactly one** subfield of order $p^m$ for each $m \mid
n$ (landmark, proved elementarily from $x^{p^m}-x \mid x^{p^n}-x \iff m\mid n$);
The case $q=p$ proves that $(\mathbb Z/p)^\times$ is cyclic. This page calls a
chosen element only a cyclic generator; primitive-root terminology and its
number-theoretic development remain with the page that owns that definition.

*Constructibility, stated algebraically.* the **field of constructible numbers**
$\mathcal{C} \subseteq \mathbb{R}$, defined algebraically as the smallest
subfield closed under square roots of positive elements — **not** geometrically;
$\alpha \in \mathcal{C}$ iff $\alpha$ lies in a tower
$\mathbb{Q}=F_0\subseteq\cdots\subseteq F_r$ with $[F_{i+1}:F_i]=2$;
**$[\mathbb{Q}(\alpha):\mathbb{Q}]$ is a power of $2$ for every constructible
$\alpha$** (landmark, by the tower law); **$\sqrt[3]{2} \notin \mathcal{C}$**,
since $x^3-2$ is irreducible over $\mathbb{Q}$ by the published Eisenstein
criterion, so the degree is $3$.

### II.4.c Three seams this page owns, and they are all easy to get wrong

1. **The Frobenius belongs to AA-15, not GA-1.** GA-1's draft listed
   $p\mid\binom{p}{k}$ and the Frobenius as its own items. AA-15 sits below GA-1
   and **cannot construct a single finite field without them** — the root set of
   $x^q-x$ is closed under addition precisely because of the freshman's dream. So
   they are minted here and GA-1 cites. §II.2's GA-1 has been corrected in place.
2. **The finite-field subfield lattice is proved twice, deliberately, and the
   split must be stated.** AA-15 proves the containment criterion
   $\mathbb{F}_{p^m}\subseteq\mathbb{F}_{p^n} \iff m \mid n$ elementarily,
   because it needs it to describe finite fields at all. GA-3 proves that
   $\mathbb{F}_{q^n}/\mathbb{F}_q$ is Galois with cyclic group generated by
   Frobenius and reads the *lattice* off the correspondence. These are different
   theorems with different content — one is a divisibility criterion, the other
   identifies the subfield lattice with the subgroup lattice of a cyclic group —
   and **GA-3 cites AA-15's criterion and records the agreement rather than
   reproving it**. A scaffold that lets GA-3 restate the criterion puts two of
   them in the library.
3. **Constructibility is stated algebraically and the geometry is deferred, with
   a reason about that specific result.** $\mathcal{C}$ is defined as a subfield
   of $\mathbb{R}$ closed under real square roots. The **geometric** theorem —
   that $\mathcal{C}$ is exactly the set of coordinates constructible by
   straightedge and compass — requires a formalisation of ruler-and-compass
   constructions in the plane, which is a development of its own and which this
   library has not built at any order. So AA-15 proves "$\sqrt[3]{2}$ has degree
   $3$, hence is not in $\mathcal{C}$" and a Remark states, **as a claim about
   this proof and not about the library**, that the identification of
   $\mathcal{C}$ with the geometrically constructible numbers is not established
   here and that the classical phrasing "the cube cannot be doubled" therefore is
   not asserted. **Angle trisection is DEFERRED** for a reason specific to it:
   the standard argument runs through $\cos 20^\circ$ and the triple-angle
   identity, and no trigonometry exists below this page. **The constructible
   regular $n$-gon is DEFERRED** to a page above GA-3, because the criterion is
   about $\varphi(n)$ being a power of $2$ and needs the cyclotomic Galois group.
   **Squaring the circle is DEFERRED** for a third, different reason: it needs the
   transcendence of $\pi$, which the harvest located only in Knapp §IX.14 and
   which rests on analysis this page does not have. None of the three is dropped;
   all are recorded in §II.13 with their licence.
   *A caution the harvest supplies and the page must respect:* Artin 15.5.5 and
   Knapp Thm. 9.24 are the only real treatments of the geometric translation
   harvested, and **both need $\mathbb{R}$ and a positivity condition, not merely
   2-power degree** — Artin says outright that the converse of "degree a power of
   $2$" is false. The degree criterion is **necessary and not sufficient**, and an
   item stating it as a characterisation would be false.

**FS.** every algebraic extension is finite (the algebraic numbers over
$\mathbb{Q}$, or $\overline{\mathbb{F}_p}$ — but note the latter needs GA-1, so
the `fs-` uses the algebraic numbers, which this page can describe as the
algebraic elements of $\mathbb{R}$ or of any extension without needing a closure);
the tower law without finiteness — stated to make the infinite case visible;
every field of order $n$ exists for every $n$ (there is no field of order $6$;
the order must be a prime power); $\mathbb{F}_{p^n}$ is $\mathbb{Z}/p^n$ (false
for $n\ge2$: $\mathbb{Z}/4$ is not a field, and $\mathbb{F}_4$ has characteristic
$2$ — a `fs-` worth its space because the confusion is universal);
$F^\times$ cyclic implies $F$ finite; every element of a field of characteristic
$p$ has a $p$-th root (false — the Frobenius need not be surjective, and the
witness $\mathbb{F}_p(t)$ is homed on GA-1's B page, so this `fs-` is stated here
and refuted by naming the *finite* hypothesis, with a Remark pointing forward);
a number of degree $4$ over $\mathbb{Q}$ is constructible (degree a power of $2$
is necessary, not sufficient — and the standard witness is a quartic with Galois
group $S_4$, which needs GA-2, so this `fs-` is **stated with the honest
refutation deferred** to GA-2's companion and recorded in §II.13).

**B page.** $[\mathbb{Q}(\sqrt2,\sqrt3):\mathbb{Q}]=4$ with the basis
$\{1,\sqrt2,\sqrt3,\sqrt6\}$ written out and the tower law checked both ways;
$[\mathbb{Q}(\sqrt[3]{2}):\mathbb{Q}]=3$; $\mathbb{Q}(\sqrt2+\sqrt3) =
\mathbb{Q}(\sqrt2,\sqrt3)$ — the concrete primitive element, ahead of GA-1's
theorem; the algebraic numbers shown to be a field with $\sqrt2+\sqrt[3]{5}$ as
the worked instance; $\mathbb{F}_4$ and $\mathbb{F}_8$ constructed as
$\mathbb{F}_2[x]/(x^2+x+1)$ and $\mathbb{F}_2[x]/(x^3+x+1)$ with addition and
multiplication tables; $\mathbb{F}_9$ as $\mathbb{F}_3[x]/(x^2+1)$; a generator
of $\mathbb{F}_8^\times$ exhibited; the subfield lattice of $\mathbb{F}_{2^6}$
against the divisors of $6$; $2$ shown to be a primitive root modulo $11$ and
**not** modulo $7$; the Frobenius of $\mathbb{F}_4$ written out as the
transposition of the two non-prime-subfield elements; $\sqrt[3]{2}$ shown
non-constructible.

**Traps.** (i) The tower law's independence half is where the proof actually
happens; a scaffold that gives only the counting is incomplete. (ii)
"Algebraic extension" must agree with published usage (#F1). (iii) The
distinctness of the roots of $x^q-x$ needs the derivative criterion — published,
and it must be cited rather than asserted as obvious. (iv) $\mathbb{F}_{p^n}$ is
not $\mathbb{Z}/p^n$; the `fs-` exists for it and the page should never write
$\mathbb{Z}/q$ for a non-prime $q$ in this context. (v) The constructibility
block is algebraic; do not let a Statement or a **title** claim a geometric
impossibility the page has not formalised — a title asserting more than the proof
gives is the fatal class `LEVELS.md` §10a names.

**Forward references:** two, both non-load-bearing and both on the companion
page: to GA-1 for the failure of Frobenius surjectivity, and to GA-2 for the
degree-$4$ non-constructible witness. Both are `## Remarks` orientation notes
with `forward_refs` declared and no `deps` edge.

---

## II.5 LA-9 — `diagonalisation-and-the-minimal-polynomial`

- **id** `diagonalisation-and-the-minimal-polynomial`, companion
  `diagonalisation-and-the-minimal-polynomial-examples`
- **category** `linear-algebra`
- **order** 88 / 89, scaffolded by `frontier-13` batch 3 (2026-08-15) and
  **unauthored**
- **`requires`** (live in `plan-spec.json`; the two-entry list this file carried
  is superseded)
  `eigenvalues-eigenvectors-and-the-characteristic-polynomial`,
  `euclidean-domains-pids-and-unique-factorisation`,
  `field-extensions-and-the-complex-numbers`, `splitting-fields`.
  `field-extensions-and-the-complex-numbers` was added as `frontier-13` D3.1:
  `thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors`
  forms $F[x]/(q)$ and uses `thm-irreducible-quotient-adjoins-a-root` and
  `thm-evaluation-kernel-and-minimal-polynomial`, and
  `lem-minimal-polynomial-is-invariant-under-field-extension` needs the same
  machinery
- **scaffold** A 26, B 12 (no split proposed)

The second `requires` is the one a reader might think decorative and it is not:
the minimal polynomial is *defined* as the monic generator of the annihilating
ideal of $T$ in $F[x]$, and "a nonzero ideal of $F[x]$ has a unique monic
generator" is `euclidean-domains-pids-and-unique-factorisation`. Without it the
definition is a choice and the page owes a well-definedness argument it cannot
close. This is obligation **#L1** in §II.10.

### II.5.a What LA-8 already published, and what Part I's inventory got wrong

`eigenvalues-eigenvectors-and-the-characteristic-polynomial` is published with
**23 items** and is far richer than Part I's LA-9 inventory assumed. Already on
disk, strictly below: `def-eigenvalue-eigenvector-eigenspace-and-spectrum`,
`thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent`,
`def-characteristic-polynomial-of-a-matrix` and
`def-characteristic-polynomial-of-an-operator`,
`thm-characteristic-polynomial-is-similarity-invariant`,
`thm-spectrum-is-the-root-set-of-the-characteristic-polynomial`,
`def-algebraic-and-geometric-multiplicity-of-an-eigenvalue`,
**`thm-geometric-multiplicity-does-not-exceed-algebraic-multiplicity`**,
`def-algebraically-closed-field`,
`cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue`,
`def-polynomial-evaluation-at-an-endomorphism`,
**`thm-spectral-mapping-for-polynomials`**, **`thm-cayley-hamilton`**,
`cor-inverse-of-an-invertible-operator-is-a-polynomial-in-the-operator`,
`lem-characteristic-polynomial-of-block-triangular-matrix`,
`thm-trace-is-sum-of-eigenvalues`, `thm-determinant-is-product-of-eigenvalues`.

**Part I's LA-9 listed Cayley–Hamilton as an LA-9 item. It is published at 86 and
LA-9 must not re-mint it** (§II.1.b.8). The same holds for the multiplicity
inequality and for polynomial evaluation at an endomorphism. What LA-9 gains from
this is not a smaller page but a deeper one: with Cayley–Hamilton free, the
annihilating ideal is *known* nonzero without the $\dim\operatorname{End}(V)=n^2$
pigeonhole, and the page's budget goes to the primary decomposition and the
commuting-family theory instead.

### II.5.b The item list

**DEFS.** the **annihilating ideal** $\{p \in F[x] : p(T)=0\}$ and the **minimal
polynomial** $m_T$ (`def-minimal-polynomial-of-an-operator` — the bare
`thm-evaluation-kernel-and-minimal-polynomial` is published and is about a *field
element* algebraic over a subfield, a different notion with the same name, so the
operator notion is namespaced and owes the agreement Remark of §II.10 **#L2**);
**$T$-invariant subspace** and the **restriction** $T|_W$; **diagonalisable
operator**; **semisimple operator** (minimal polynomial squarefree) — the notion
that survives over a field that is not algebraically closed, and the one LA-10
and MOD-5 actually generalise; the **spectral projections** of a diagonalisable
operator; a **commuting family** of operators.

**THMS.**
*The minimal polynomial.* the annihilating ideal is a nonzero ideal, by
Cayley–Hamilton (cited, not reproved), so it has a **unique monic generator**
(**#L1**, from the published PID theory); $p(T)=0$ iff $m_T \mid p$;
**$m_T \mid \chi_T$** and $\deg m_T \le \dim V$; **$m_T$ and $\chi_T$ have the
same roots, namely the spectrum** (landmark — one inclusion is the spectral
mapping theorem, the other is that an eigenvector for $\lambda$ forces
$m_T(\lambda)=0$; the two are separate steps and the equality is *not* symmetric
in the way a hurried proof suggests); $m_T$ is a similarity invariant;
**$m_T$ is unchanged by extension of the base field** (from the published
`lem-polynomial-gcd-is-stable-under-field-extension` — a small theorem doing
disproportionate work later, since it is what lets LA-10 pass to a splitting
field and MOD-5 call the rational canonical form the field-independent one);
$m_{T|_W} \mid m_T$ for $W$ invariant; the minimal polynomial of a direct sum is
the **lcm** of the summands' and of a block-diagonal matrix likewise.

*Invariant subspaces and the decomposition.* the kernel and image of any
polynomial in $T$ are $T$-invariant; **the kernel decomposition lemma**: if
$p = p_1p_2$ with $p_1,p_2$ coprime and $p(T)=0$, then
$V = \ker p_1(T) \oplus \ker p_2(T)$ (landmark — Bézout in $F[x]$ supplies
$a p_1 + b p_2 = 1$, and this is where the PID `requires` is consumed a second
time); **the primary decomposition theorem**: for
$m_T = \prod_i p_i^{a_i}$ with the $p_i$ distinct monic irreducible,
$V = \bigoplus_i \ker p_i(T)^{a_i}$, each summand is $T$-invariant, and
$m_{T|_{\ker p_i(T)^{a_i}}} = p_i^{a_i}$ (landmark; id
`thm-primary-decomposition-of-an-operator`, because
`thm-primary-decomposition-of-a-finite-abelian-group` is published and is a
different theorem); the projections onto the summands are **polynomials in $T$**
(by Lagrange interpolation / Bézout), so they commute with everything commuting
with $T$.

*Diagonalisability.* **$T$ is diagonalisable iff $m_T$ is a product of distinct
linear factors** (landmark, both directions); $T$ is diagonalisable iff $V$ is
the direct sum of its eigenspaces iff the geometric multiplicities sum to
$\dim V$ iff for every eigenvalue the geometric and algebraic multiplicities
agree **and $\chi_T$ splits** (the last clause is the one that gets dropped, and
dropping it makes the statement false over $\mathbb{R}$); $\dim V$ distinct
eigenvalues implies diagonalisable, and the converse fails; **the restriction of
a diagonalisable operator to an invariant subspace is diagonalisable** (from the
minimal-polynomial criterion, in two lines — and it is the honest way to prove
it; the "restrict a basis" argument is wrong); a diagonalisable $T$ is
$\sum_i \lambda_i E_i$ with the $E_i$ its spectral projections, $E_iE_j = 0$ for
$i\ne j$ and $\sum E_i = I$; **semisimple = diagonalisable over an algebraically
closed field**, and over a general field semisimple means $m_T$ squarefree.

*Commuting families.* commuting operators preserve each other's eigenspaces;
**a commuting family of diagonalisable operators is simultaneously
diagonalisable** (landmark, by induction on $\dim V$ splitting along an
eigenspace decomposition of one non-scalar member); two commuting diagonalisable
operators have $ST$ diagonalisable; **the hypothesis is not removable** — the
`fs-` below.

**FS.** $m_T = \chi_T$ always (the identity in dimension $\ge 2$);
diagonalisable iff $\dim V$ distinct eigenvalues (the identity again — and the
two `fs-` share a witness deliberately, since one witness refuting two natural
overstatements is worth stating twice with different Statements);
$m_T = \chi_T$ implies diagonalisable (a single Jordan block, which this page can
exhibit without Jordan theory as $\begin{psmallmatrix}0&1\\0&0\end{psmallmatrix}$);
**a commuting family is simultaneously diagonalisable** without assuming each
member diagonalisable (two commuting nilpotent operators);
diagonalisability is preserved by field extension in the wrong direction — it is
*gained*, not lost, and "diagonalisable over $F$ iff diagonalisable over $K$" is
false (rotation by a quarter turn over $\mathbb{R}$ and $\mathbb{C}$);
every operator has an eigenvalue (false over $\mathbb{R}$; the published
`cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue`
carries the hypothesis and this `fs-` is what makes a reader notice it).

**B page.** $m_T$ and $\chi_T$ computed for a diagonal, a scalar, a nilpotent and
a companion-type matrix; $\begin{psmallmatrix}1&1\\0&1\end{psmallmatrix}$ and
$I_2$ with the same $\chi$ and different $m$; the quarter-turn matrix
diagonalisable over $\mathbb{C}$, not over $\mathbb{R}$, with $m_T = x^2+1$
computed in both; a projection ($m_T = x^2-x$) and its spectral decomposition
written out; the primary decomposition of an explicit $4\times4$ over
$\mathbb{Q}$ with $m_T = (x-1)^2(x^2+1)$ — **chosen over $\mathbb{C}$ on purpose,
because the interesting summand is the one with an irreducible quadratic factor
and it is invisible over an algebraically closed field**; two commuting
diagonalisable matrices simultaneously diagonalised; a real symmetric $2\times2$
diagonalised by hand, with a Remark that the general statement waits for X-2;
$m_T$ of a block-diagonal matrix as an lcm, checked.

**Traps.** (i) Cayley–Hamilton, the multiplicity inequality, the spectral mapping
theorem and polynomial evaluation are **published**; cite them. A page that
reproves Cayley–Hamilton here has two of them in the library. (ii) The
diagonalisability criterion has a field hypothesis hidden in "distinct linear
factors": over $\mathbb{R}$, $m_T = x^2+1$ is squarefree and $T$ is semisimple
and **not** diagonalisable. Keep semisimple and diagonalisable apart from the
first item that mentions either. (iii) The kernel decomposition lemma needs
$p_1,p_2$ **coprime**, not merely distinct; over $F[x]$ that is a Bézout
statement and it is the step to write out. (iv) "The projections are polynomials
in $T$" is what makes the decomposition canonical; without it a reader may think
the summands depend on a choice of basis. (v) $m_T$ is base-field-independent but
*diagonalisability is not*; the two facts sit one item apart and confusing them
is the likeliest false statement on the page.

**Forward references:** NONE load-bearing. A `## Remarks` pointer from the
diagonalisability criterion to `the-spectral-theorem-and-singular-value-decomposition`,
recording that the symmetric/self-adjoint case gets a criterion needing no
computation of $m_T$, is permitted once §II.9's ids are planned.

---

## II.6 LA-10 — `triangularisation-and-jordan-canonical-form`

- **id** `triangularisation-and-jordan-canonical-form`, companion
  `triangularisation-and-jordan-canonical-form-examples`
- **category** `linear-algebra`
- **snapshot order** 90 / 91, planned and **unauthored**
- **`requires`** `diagonalisation-and-the-minimal-polynomial` (spec, unchanged)
- **estimate** A 28, B 16

This page carries three things beyond its title, and each is here for a reason
that is not local to it.

### II.6.a The quotient vector space is homed here

§II.1.b.9 established the finding: `linear-maps-rank-nullity-and-quotient-spaces`
is **published with seven items and contains no quotient space** — no $V/W$, no
universal property, no first isomorphism theorem for vector spaces — despite its
id. `def-quotient-module` exists but is on `modules-and-module-homomorphisms`,
above every linear-algebra page. The published page is not retrofitted, so the
construction must be homed on an unauthored page above it, and LA-10 is the
lowest one that **needs** it: the triangularisation induction passes from $V$ to
$V/\langle v\rangle$, and there is no honest way to run it otherwise. Building
machinery where it is first consumed is the house discipline, and it also means
the definition arrives with a theorem attached rather than as an orphan.

The cost is a mild oddity — a page titled for Jordan form opens with quotient
spaces — and the alternative is worse: putting $V/W$ on LA-9 would define it two
pages before anything uses it, and inventing a new page for it would push the
whole block. **Decision: LA-10, with the first item explaining why it is here.**
The obligation this owes the module block is §II.13's amendment 3.

### II.6.b The cyclic-vector theorem is load-bearing off-page

GA-3's normal basis theorem over a finite base field is exactly the statement
that $K$ is a cyclic $F[\sigma]$-module for the Frobenius $\sigma$, i.e. that
$\sigma$ has a cyclic vector. GA-3 sits at snapshot 101.2 and **MOD-5 sits at
110**, so the module-theoretic route through the structure theorem is *above*
GA-3 and cannot serve it. LA-10 at 90 can, and must.

The proof does not need module theory. Given LA-9's primary decomposition,
$m_T = \prod p_i^{a_i}$ gives $V = \bigoplus \ker p_i(T)^{a_i}$; on the $i$-th
summand some $v_i$ has $p_i^{a_i-1}(T)v_i \ne 0$, so $v_i$ has annihilator
exactly $p_i^{a_i}$; the annihilator of $\sum v_i$ is then the lcm, namely $m_T$;
so the cyclic subspace it generates has dimension $\deg m_T$, which equals
$\deg \chi_T = \dim V$ exactly when $m_T = \chi_T$. **Over any field, no
splitting hypothesis, no modules.** That is the whole item, and it is worth
noticing that it is cheaper here than the route MOD-5 will later take.

### II.6.c The item list

**DEFS.** the **quotient vector space** $V/W$ and the canonical projection
(`def-quotient-vector-space`, free — checked); the **induced operator**
$\overline{T}$ on $V/W$ for $T$-invariant $W$; **triangularisable operator** and
an ordered basis in which the matrix is upper triangular; **nilpotent operator**
(`def-nilpotent-operator`, free — `def-nilpotent-group-and-nilpotency-class` is
published and is the group notion); the **generalised eigenspace**
$K_\lambda = \ker(T-\lambda)^{\dim V}$; the **Jordan block** $J_k(\lambda)$ and
**Jordan canonical form**; the **cyclic subspace** $\langle v\rangle_T$ generated
by $v$, and a **cyclic vector**.

**THMS.**
*Quotients.* the operations on $V/W$ are well defined (**#L3**); $V/W$ is a vector
space and the projection is linear and surjective with kernel $W$;
$\dim V/W = \dim V - \dim W$ in finite dimension; **the universal property**
(`thm-quotient-space-universal-property`: a linear $f:V\to U$ with $W \subseteq
\ker f$ factors uniquely through $V/W$) — landmark, and the item that makes this
the *same* construction as the published quotient group, quotient ring and
quotient module rather than a fourth unrelated one; **the first isomorphism
theorem for vector spaces**, with a Remark recording that it re-derives the
published `thm-rank-nullity` and citing it (an agreement record, not a second
proof of a published theorem: rank–nullity is cited *from* the isomorphism
theorem's dimension count, so the library gains a structural proof of a theorem
it already has, and the Remark says exactly that); for $W$ invariant, $\overline
T$ is well defined, $\chi_T = \chi_{T|_W}\cdot\chi_{\overline T}$ (from the
published `lem-characteristic-polynomial-of-block-triangular-matrix`) and
$m_{\overline T} \mid m_T$.

*Triangularisation.* **$T$ is triangularisable iff $\chi_T$ splits over $F$**
(landmark, both directions; the forward direction reads the diagonal, the reverse
is the induction on $\dim V$ that takes an eigenvector $v$ and applies the
hypothesis to $\overline T$ on $V/\langle v\rangle$ — **this is the step §II.6.a
exists for**); equivalently iff $m_T$ splits; over an algebraically closed field
every operator is triangularisable; simultaneous triangularisation of a commuting
family whose characteristic polynomials split.

*Nilpotents.* $N$ nilpotent iff $m_N = x^k$ for some $k$ iff $\chi_N = x^n$ iff
$N$ is triangularisable with zero diagonal; $N^{\dim V} = 0$ (from
Cayley–Hamilton, cited); the chain $\ker N \subseteq \ker N^2 \subseteq \cdots$
strictly increases until it stabilises, and stabilises at $\ker N^k$ for
$k = \deg m_N$; **a nilpotent operator has a basis in which its matrix is a
direct sum of Jordan blocks $J_k(0)$** (landmark, by the standard descent on
$\operatorname{im} N$ or by choosing a basis adapted to the kernel chain — one
route is chosen and the other recorded); **the block sizes are determined by the
ranks of the powers**: the number of blocks of size $\ge k$ is
$\dim\ker N^{k} - \dim\ker N^{k-1}$ (landmark, and it is what makes the form
computable and its uniqueness provable).

*Jordan form.* **the generalised eigenspace decomposition**: if $\chi_T$ splits,
$V = \bigoplus_\lambda K_\lambda$ with $\dim K_\lambda$ the algebraic
multiplicity of $\lambda$ (landmark; the decomposition is LA-9's primary
decomposition specialised to linear $p_i$, and the item **cites** it rather than
redoing it — the new content is the identification of $\dim K_\lambda$ with the
multiplicity); $(T-\lambda)|_{K_\lambda}$ is nilpotent; **existence of the Jordan
canonical form when $\chi_T$ splits** (landmark); **uniqueness up to the order of
the blocks** (landmark, from the rank formula); **two operators with split
characteristic polynomials are similar iff they have the same Jordan form**;
Inline in the Jordan-form proof, split each block into its scalar and nilpotent
parts and record the polynomial construction that X-2 later uses. No named
Jordan--Chevalley item is minted here: X-2 owns the stable definition and
theorem under R-5.

*Cyclic vectors.* $\langle v\rangle_T$ is the smallest $T$-invariant subspace
containing $v$, and $\dim\langle v\rangle_T$ is the degree of the monic generator
of $\{p : p(T)v = 0\}$; **$T$ has a cyclic vector iff $m_T = \chi_T$**
(landmark, both directions, over an arbitrary field, by §II.6.b);
**if $T$ has a cyclic vector then every operator commuting with $T$ is a
polynomial in $T$** — included because it is three lines from the previous item
and because it is the fact a reader needs to see that a cyclic vector is a
strong hypothesis.

**FS.** every operator is triangularisable (false over $\mathbb{R}$: the
quarter-turn, whose $\chi = x^2+1$ does not split); every operator has a Jordan
form over every field (same witness, and the two `fs-` are stated separately
because one is about triangular form and one about Jordan form and a reader who
conflates them will believe the rational canonical form is impossible);
**two matrices with the same characteristic polynomial and the same minimal
polynomial are similar** — refuted in dimension $4$ by $J_2(0)\oplus J_2(0)$
against $J_2(0)\oplus J_1(0)\oplus J_1(0)$, both with $\chi = x^4$ and $m = x^2$.
*This witness is homed here and MOD-5 restates its own rather than citing it,
because this is a B page and B pages are leaves* (expansion file, MOD-5 `fs-`);
the Jordan form is a unique matrix (unique only up to the order of the blocks);
$\dim\ker(T-\lambda)$ determines the Jordan structure at $\lambda$ (it gives the
number of blocks, not their sizes; $J_2\oplus J_1$ and $J_1\oplus J_1\oplus J_1$
at the same eigenvalue separate on the second rank); the $D+N$ decomposition
exists over every field.

**B page.** the Jordan form of an explicit $5\times5$ over $\mathbb{C}$ computed
from the rank sequence; a nilpotent $6\times6$ whose block sizes are read off
$\dim\ker N^k$; the quarter-turn with no triangular form over $\mathbb{R}$ and
Jordan form $\operatorname{diag}(i,-i)$ over $\mathbb{C}$; the dimension-4
non-similar pair above; $V/W$ computed for an explicit subspace with the
projection and a lifted map; the first isomorphism theorem applied to a concrete
$f$ and cross-checked against rank–nullity; the Jordan–Chevalley decomposition of
an explicit matrix, with $D$ and $N$ exhibited **as polynomials in $T$**; a
cyclic vector for a companion-type operator, and $I_2$ shown to have none; the
Frobenius of $\mathbb{F}_8/\mathbb{F}_2$ named in a Remark as the use GA-3 will
make of the cyclic-vector theorem — orientation only, no forward `deps` edge.

**Traps.** (i) #L3 is a numbered item, not a parenthesis: every quotient
construction in this library states its well-definedness, and this one is the
fourth. (ii) Triangularisability and Jordan form both carry "$\chi_T$ splits" and
it belongs in the **title**, since the judge reads Statements and cannot see a
false title. (iii) The generalised eigenspace decomposition is LA-9's primary
decomposition; citing it and adding the multiplicity identification is the honest
shape, and reproving it here would put two primary decompositions in the library.
(iv) Uniqueness of the Jordan form is up to permutation of blocks — a Statement
saying "unique" without that clause is false. (v) The $D+N$ uniqueness needs
$DN=ND$; without it the decomposition is wildly non-unique and the `fs-` list
should not have to carry that. (vi) The cyclic-vector theorem must be proved as
in §II.6.b and **not** deferred to MOD-5, which is above GA-3 and cannot serve
it; a scaffold that quietly moves it breaks the normal basis theorem two pages
later, and nothing would catch that until GA-3 fails to close.

**Forward references:** NONE load-bearing.

---

## II.7 LA-12 — `inner-product-spaces-and-orthogonality`

- **id** `inner-product-spaces-and-orthogonality`, companion
  `inner-product-spaces-and-orthogonality-examples`
- **category** `linear-algebra`
- **order** 94 / 95, scaffolded by `frontier-13` batch 3 (2026-08-15) and
  **unauthored**
- **`requires`** (live in `plan-spec.json`, unchanged and exactly right)
  `dual-spaces-bilinear-forms-and-inertia`, `roots-and-rational-powers`,
  `field-extensions-and-the-complex-numbers`
- **scaffold** A 34, B 16 (no split proposed)

### II.7.a The published convention is binding, and it is linear in the FIRST variable

`dual-spaces-bilinear-forms-and-inertia` was published on 2026-08-13 with 33
items, and it settles by disk a convention every source disagrees about. Its
`def-sesquilinear-and-hermitian-forms-over-a-field-with-involution` reads, in the
published text:

> Let $F$ be a field with an **involution**, an automorphism $\sigma:F\to F$
> satisfying $\sigma^2=\operatorname{id}_F$. A function $H:V\times V\to F$ is
> **sesquilinear**, with the convention used here, when it is linear in the first
> variable and $\sigma$-linear in the second … It is **Hermitian** when
> $H(u,v)=\sigma(H(v,u))$. When $\sigma$ is the identity, sesquilinear forms are
> bilinear and Hermitian forms are symmetric bilinear forms.

So **the library's inner product is linear in the first variable and conjugate-linear
in the second**, and LA-12 does not get to re-decide this. The physics convention
is the other one and roughly half the analysis literature uses it; a page that
drifts would put two incompatible inner products in the library. The downstream consequence is
X-2's adjoint identity $\langle Tv,w\rangle=\langle v,T^*w\rangle$, with that same
handedness.

*A note about RT-3, corrected 2026-08-13.* Part I planned RT-3's character
pairing as the Hermitian $\frac1{|G|}\sum_g\varphi(g)\overline{\psi(g)}$ and
recorded an obligation (#32) to discharge it against this page's inner product.
**The representation-theory harvest overturns that plan**: RT-3 now takes the
**bilinear** pairing $\frac1{|G|}\sum_g\varphi(g^{-1})\psi(g)$ as its definition,
which needs no conjugation, no ordering and no $\mathbb{C}$, and over which
$\langle\chi_V,\chi_W\rangle = \dim_k\operatorname{Hom}_{kG}(V,W)$ is provable
over an arbitrary field. So **RT-3 does not cite this page's inner product at
all**, obligation #32 lapses, and `inner-product-spaces-and-orthogonality` should
be **removed from RT-3's `requires`**. See the expansion file §II.7 and §II.8's
amendment list. This page is unaffected in substance; what changes is that one of
its expected consumers turns out not to be one.

The involution for $\mathbb{C}$ is the published
`def-complex-conjugate-real-imaginary-part-and-modulus`, and
`thm-real-automorphisms-of-the-complex-numbers` — also published, below — is what
licenses calling it *the* involution rather than *an* involution.

### II.7.b The base-field setting, and why Cauchy–Schwarz is stated squared

An inner product needs positivity, and positivity needs an order. The published
vocabulary supplies exactly what is wanted, low down: `def-ordered-ring` and
`lem-ordered-field-is-an-ordered-ring` on `rings-subrings-and-integral-domains`
(snapshot 46), and `thm-nth-roots-exist` on `roots-and-rational-powers`
(snapshot 16).

**The setting LA-12 adopts:** a field $F$ with involution $\sigma$ whose fixed
field $F_0$ is an ordered field, and a Hermitian form $H$ with $H(v,v) \in F_0$
and $H(v,v) > 0$ for $v \ne 0$. The two instances are $F=\mathbb{R}$ with
$\sigma = \operatorname{id}$ and $F=\mathbb{C}$ with conjugation, both with
$F_0 = \mathbb{R}$; the page states them as the two examples immediately after
the definition and works in the general setting only where it costs nothing.
That $H(v,v)$ lands in $F_0$ is a one-line consequence of the Hermitian
condition and is its own numbered step, because it is what makes "$>0$" a
meaningful assertion at all.

**Cauchy–Schwarz is stated in the squared form**
$\langle u,v\rangle\,\sigma(\langle u,v\rangle) \le \langle u,u\rangle\langle v,v\rangle$,
an inequality in $F_0$, **with the square-root form derived afterwards over
$\mathbb{R}$ and $\mathbb{C}$**. This is not fussiness. The squared form needs no
square roots and so holds over any ordered fixed field; the moment a norm is
written the page has quietly assumed $F_0$ has square roots of non-negative
elements. Splitting them keeps the hypothesis visible and puts the appeal to the
published `thm-nth-roots-exist` at exactly one item. `fs-negative-has-square-root`
is published on the same page and is the reader-facing reminder of why.

### II.7.c The seam with `rn-as-a-normed-space`, restated correctly

§II.1.b.1 corrected Part I here and the correction drives the design, so it is
repeated as an instruction. `thm-cauchy-schwarz-finite`, `thm-minkowski-finite`
and `thm-holder-finite` are published on **`roots-and-rational-powers`** at
snapshot 16 — far **below** LA-12 — and not, as Part I asserted, on
`metric-spaces`. So the finite-tuple Cauchy–Schwarz is an ordinary **backward**
citation and LA-12 owes a **proved dictionary item**, not a forward-reference
apology: the standard form on $F^n$ is an inner product in this page's sense, and
the general Cauchy–Schwarz specialises on it to exactly the published
`thm-cauchy-schwarz-finite`. That is obligation **#L5**.

The genuine seam is with `rn-as-a-normed-space` (snapshot 167, **above**, and
published), which carries `def-norm-and-normed-space`,
`def-euclidean-inner-product`, `thm-cauchy-schwarz-and-the-euclidean-norm`,
`def-p-norms-on-rn` and `lem-p-norms-are-norms-and-induce-the-published-metrics`.
The library will therefore carry an inner product on $\mathbb{R}^n$ twice, once
generally here and once concretely later, and neither is retrofitted. LA-12 owes
a `## Remarks`-only `forward_refs` note naming those items — orientation, no
`deps` edge.

**A consequence that must not be missed: LA-12 does not own the notion of a
norm.** `def-norm-and-normed-space` is at 167. LA-12 defines only *the length
associated to an inner product*, $\lVert v\rVert = \sqrt{\langle v,v\rangle}$
over $\mathbb{R}$ and $\mathbb{C}$, and says so. Hence the **Jordan–von Neumann
theorem** (a norm comes from an inner product iff it satisfies the parallelogram
law) is **DEFERRED, with a reason about that specific result**: its statement
quantifies over norms, a notion this page does not have and the page that does
have it is published above. LA-12 proves the parallelogram *identity*, which is a
two-line computation and is all that anything below 167 can use; the converse
belongs to the functional-analysis track (§II.13, amendment 6). The published
`cex-the-one-norm-comes-from-no-inner-product` at 168 already exhibits the
failure, so nothing is lost to a reader.

### II.7.d The item list

**DEFS.** **inner product space** (`def-inner-product-space`, free — checked;
`def-euclidean-inner-product` is the published concrete one at 167 and is a
different item); the associated **length**; **orthogonal** vectors and sets;
**orthonormal set** and **orthonormal basis**; the **orthogonal complement**
$W^\perp$; **orthogonal projection** onto a finite-dimensional subspace; the
**adjoint** $T^*$; **isometry**, **orthogonal** and **unitary** operator; the
**Gram matrix** and **Gram determinant**.

**THMS.**
*Foundations.* $\langle v,v\rangle$ lies in the fixed field $F_0$;
positive-definite implies **nondegenerate** in the published sense of
`def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form` (a citation, and
the item that ties this page to the published bilinear-form theory rather than
starting again); **Cauchy–Schwarz, squared form** (landmark), with equality iff
$u,v$ are dependent; **Cauchy–Schwarz, length form** over $\mathbb{R}$ and
$\mathbb{C}$; the **triangle inequality**; the **parallelogram identity** and the
**polarisation identities** (real and complex, stated separately — they are
different formulas and the complex one is where the first-variable convention
becomes visible); **#L5**, the dictionary against `thm-cauchy-schwarz-finite`.

*Orthogonality.* an orthogonal set of nonzero vectors is independent;
**Gram–Schmidt** (landmark): every finite independent list has an orthonormal
list with the same successive spans — stated with the *flag* clause, because the
flag is what QR and the triangular form in X-2 use, and a version that only
asserts "an orthonormal basis exists" is strictly weaker; **every
finite-dimensional inner product space has an orthonormal basis**; **the
agreement item #L6** against the published
`thm-symmetric-bilinear-forms-have-an-orthogonal-basis` — over $\mathbb{R}$ that
theorem already gives an *orthogonal* basis, and Gram–Schmidt's extra content is
normalisation plus the flag, so the page states the relation instead of leaving
two orthogonalisation theorems side by side; coordinates and inner products in an
orthonormal basis (the **Parseval** and **Bessel** identities in finite
dimension); **$V = W \oplus W^\perp$** for finite-dimensional $W$ (landmark);
$W^{\perp\perp} = W$ in finite dimension, and the published
`thm-double-annihilator-and-annihilator-dimension` named as the annihilator
analogue in a Remark; **the orthogonal projection is the unique best
approximation**: $\lVert v - P_Wv\rVert \le \lVert v-w\rVert$ for all $w \in W$,
with equality only at $w = P_Wv$ (landmark — and note this needs only the order,
not completeness, which is why it is legal here and not merely in a Hilbert-space
setting); the Gram determinant is nonzero iff the vectors are independent, and is
positive; **QR**: every invertible matrix over $\mathbb{R}$ or $\mathbb{C}$ is
$QR$ with $Q$ orthogonal/unitary and $R$ upper triangular with positive diagonal,
uniquely (a direct corollary of Gram–Schmidt with the flag clause).

*Duality and adjoints.* **the Riesz representation theorem in finite dimensions**
(`thm-riesz-representation-in-finite-dimensions` — namespaced, because
`rem-riesz-representation-hilbert` already exists as a `deferred-*` catalogue
entry for the Hilbert-space statement and the two must not be confused):
every linear functional is $v \mapsto \langle v,w\rangle$ for a unique $w$, and
$w \mapsto \langle\cdot,w\rangle$ is a conjugate-linear isomorphism $V \to V^*$;
**the adjoint exists and is unique** in finite dimension (landmark, from Riesz);
$(S+T)^*=S^*+T^*$, $(\lambda T)^* = \sigma(\lambda)T^*$, $(ST)^*=T^*S^*$,
$T^{**}=T$; **the matrix of $T^*$ in an orthonormal basis is the conjugate
transpose** of the matrix of $T$ — a mandatory dictionary against the published
`def-transpose-of-a-matrix` and `thm-matrix-of-transpose-is-the-transposed-matrix`,
since the library otherwise has an abstract adjoint and a matrix transpose with
no stated relation; $\ker T^* = (\operatorname{im} T)^\perp$ and
$\operatorname{im} T^* = (\ker T)^\perp$; $T$-invariance of $W$ implies
$T^*$-invariance of $W^\perp$ — small, and it is the step X-2's induction runs on.

*Isometries.* for $T$ on a finite-dimensional space the following are
equivalent: $T$ preserves the inner product; $T$ preserves lengths; $T$ maps some
orthonormal basis to an orthonormal basis; $T$ maps every orthonormal basis to an
orthonormal basis; $T^*T = I$ (landmark, and in finite dimension these force
$T$ invertible with $T^{-1}=T^*$ — a clause that **fails** in infinite dimension
and is flagged as finite-dimensional in the Statement); the orthogonal group and
the unitary group are groups; $\lvert\det T\rvert = 1$ for an isometry, and
$\det T = \pm 1$ over $\mathbb{R}$.

*The tier-(a) spectral block — added 2026-08-13 on the harvest's recommendation,
and it is the most valuable structural change to this page.* The source analysis
(`aa-harvest-linear-algebra.md` §2.13) separates the spectral theorem into four
steps sitting at three different costs, and shows that **only one of them needs
the fundamental theorem of algebra**. Everything else is available here, 47
places earlier in the reading order, and a result proved here can later be
re-homed downward while one proved at X-2 cannot. So LA-12 carries:
self-adjoint and normal operators, and the adjoint's basic identities
($T\alpha = c\alpha \iff T^*\alpha = \bar c\alpha$ for normal $T$;
$\lVert Tv\rVert = \lVert T^*v\rVert$); **the eigenvalues of a self-adjoint
operator, where they exist, lie in the fixed field** — an existence-free
statement, and Hoffman & Kunze flag explicitly that their Theorem 15 asserts
nothing about existence; **eigenvectors for distinct eigenvalues of a
self-adjoint operator are orthogonal**; **a self-adjoint operator has squarefree
minimal polynomial, over ANY field**, needing only that the form is anisotropic
(three lines: if $p^2 \mid m_T$, write $m_T = p^2g$ and note
$\langle p(T)g(T)v,\,p(T)g(T)v\rangle = \langle m_T(T)v,v\rangle = 0$) — this is
the first half of H&K p349 Thm. 17 and it is **completely field-independent**;
hence **a self-adjoint operator is semisimple**; **over an ordered field, $m_T$
has no irreducible quadratic factor $x^2+bx+c$ with $b^2<4c$** (Axler 7.26,
restated at its true generality — and the square roots in Axler's proof are
avoidable: with $a=\langle Tv,Tv\rangle$, $m=\langle Tv,v\rangle$,
$n=\langle v,v\rangle>0$, squared Cauchy–Schwarz gives
$a+bm+cn \ge \frac1n\big((m+\tfrac{bn}2)^2 + (c-\tfrac{b^2}4)n^2\big) > 0$,
entirely inside the ordered field, which is exactly why §II.7.b states
Cauchy–Schwarz squared first); **the conditional spectral theorem**: *if $T$ is
self-adjoint and $m_T$ splits over $F$, then $V$ has an orthonormal basis of
eigenvectors of $T$* (landmark — and it is a genuine theorem, not a hedge: its
proof is the squarefree step plus the splitting hypothesis plus the standard
induction on $W^\perp$, and it is what X-2 discharges rather than reproves).

**What is deliberately NOT here.** "A self-adjoint operator on a real inner
product space *has* an eigenvalue" is **not** available at this order and must not
appear. After the two tier-(a) steps above, the exact residue is "every
irreducible over $F$ has degree $\le 2$ and every irreducible quadratic has
negative discriminant" — which is precisely that $F$ is **real closed**, and for
$\mathbb{R}$ that is equivalent to the fundamental theorem of algebra. The gap is
real and not an artefact: over $\mathbb{Q}$, the symmetric matrix
$\begin{psmallmatrix}0&1\\1&1\end{psmallmatrix}$ is self-adjoint for the standard
dot product, has $m_T = x^2-x-1$ irreducible over $\mathbb{Q}$, and **has no
eigenvalue in $\mathbb{Q}$** — note its discriminant is $5>0$, so the
ordered-field step correctly says nothing about it. **That matrix is an `fs-` on
this page**, and it is the item that makes the whole tier split honest to a
reader.

**FS.** an orthogonal set is a basis (it must also span; the empty set and any
proper orthonormal subset refute it); $W^\perp$ is a complement for every
subspace of every space carrying a symmetric bilinear form — false without
positive-definiteness, and the witness is the published
`cex-symmetric-form-need-not-have-an-orthogonal-basis-in-characteristic-two`
territory, restated natively here for a **nondegenerate but indefinite** real
form where a nonzero isotropic vector satisfies $v \in \langle v\rangle^\perp$
(this is the `fs-` that shows the whole page depends on positivity and not merely
on nondegeneracy — the most valuable one here);
the length form of Cauchy–Schwarz holds over every ordered fixed field (it needs
square roots); $\langle u,v\rangle = \langle v,u\rangle$ (false over $\mathbb{C}$
— conjugate symmetry, not symmetry, and this is the single most common false
statement in the subject); $T^*T=I$ implies $TT^*=I$ **in general** — true here
in finite dimension and false in infinite dimension, so the `fs-` is stated as
"for every inner product space" and refuted by naming the finite-dimensional
hypothesis, with the shift operator named but not constructed (it needs a page
above);
every linear functional on every inner product space is $\langle\cdot,w\rangle$
(finite-dimensionality is doing work; the published
`thm-dual-family-does-not-span-in-infinite-dimension` is the citable neighbour).

**B page.** the standard inner products on $\mathbb{R}^n$ and $\mathbb{C}^n$
verified against the definition, and #L5 exhibited numerically against
`thm-cauchy-schwarz-finite`; Gram–Schmidt run on an explicit basis of
$\mathbb{R}^3$ and on one of $\mathbb{C}^2$; a QR factorisation computed;
the inner product $\int_0^1 fg$ on real polynomials of degree $\le 3$ with the
first Legendre polynomials produced by Gram–Schmidt — **check at authoring that
the Riemann integral is below LA-12; snapshot order 160 says it is NOT, so this
item is instead the finite sum $\sum_{i} f(x_i)g(x_i)$ over $4$ distinct points,
which is an inner product on polynomials of degree $\le 3$ by the published
root bound, and is the honest substitute**; the Gram determinant of two vectors
as an area; an isotropic vector for the indefinite form $x_1y_1-x_2y_2$ and the
resulting failure of $V = W\oplus W^\perp$; a projection onto a plane computed
and shown to minimise distance; the adjoint of an explicit $3\times2$ matrix map;
a unitary matrix that is not orthogonal; **fs**: conjugate symmetry replaced by
symmetry, worked over $\mathbb{C}^1$ where it forces $\langle v,v\rangle$ to be
non-real.

**Traps.** (i) The first-variable convention is fixed by disk (§II.7.a); every
formula on the page and on X-2 and RT-3 must match it. (ii) Cauchy–Schwarz is
squared first (§II.7.b); a page that opens with $\lvert\langle u,v\rangle\rvert
\le \lVert u\rVert\lVert v\rVert$ has assumed square roots before it has them.
(iii) LA-12 does not own "norm" (§II.7.c) and must not state Jordan–von Neumann.
(iv) The orthogonal-complement theorem needs positive-definiteness, not
nondegeneracy; the `fs-` above is the guard. (v) $T^*T=I \Rightarrow TT^*=I$ is
a finite-dimensional theorem; the hypothesis goes in the Statement.
(vi) `thm-cauchy-schwarz-finite` is **below**, not above — Part I said otherwise
and a scaffold that repeats Part I's claim will plant a forward reference that
`fwdcheck` rejects as `forward-not-later`.

**Forward references:** one non-load-bearing `## Remarks` note to
`rn-as-a-normed-space` (§II.7.c). Nothing else.

---

## II.8 X-1 — `the-fundamental-theorem-of-algebra`

- **id** `the-fundamental-theorem-of-algebra`, companion
  `the-fundamental-theorem-of-algebra-examples`
- **category** `abstract-algebra`
- **snapshot order** 139 / 140, planned and **unauthored** (`items: []`)
- **`requires`** `solvability-by-radicals-and-kummer-theory`,
  `sylow-theorems-and-nilpotent-groups`,
  `continuity-ivt-evt-and-uniform-continuity`
- **estimate** A 16, B 12

### II.8.a Why this page still exists after §II.1.b.13

The library already proves the fundamental theorem of algebra, at
`the-complex-exponential-and-eulers-formula` (snapshot order 189), as
`thm-fundamental-theorem-of-algebra-minimum-modulus-proof`. That proof is
**above** the spectral-theorem pair, above every RT page, and above X-1 itself,
so nothing here or in §II.9 or in the representation-theory block can cite it.
"$\mathbb{C}$ is algebraically closed" has to exist *below* those pages, and X-1
is where. This is a placement fact, not a duplication: the two proofs use
disjoint machinery and the library carries both deliberately, with X-1 owing the
agreement record described in §II.8.d.

Part I forbade the analytic minimum-modulus proof here and was right to, at this
order: at 139 the library has the intermediate and extreme value theorems but not
the complex exponential, not $k$-th roots in polar form, and not Liouville. **X-1
takes the Artin–Galois route**, which is the route the brief's remit names and
which is now affordable for the first time, because GA-1…GA-4 and AG-4 sit below
it.

### II.8.b The four inputs, each verified against disk

Conrad `galoisappn` Thm. 2.1 and Milne Thm. 5.6 both reduce the theorem to
exactly four facts. Checked item by item on 2026-08-13:

| input | status |
|---|---|
| (1) every odd-degree $f \in \mathbb{R}[x]$ has a real root | **provable here, not published.** `thm-intermediate-value` and `thm-algebra-of-continuous-functions` are published at snapshot 137, strictly below; X-1 mints the odd-degree corollary from them. This is the page's only analytic input. |
| (2) every $\alpha \in \mathbb{C}$ has a square root in $\mathbb{C}$ | **PUBLISHED** as `thm-every-complex-number-has-a-square-root` on `field-extensions-and-the-complex-numbers` (snapshot 54). Cite; do not re-prove. |
| (3) Sylow I | supplied by AG-4, `sylow-theorems-and-nilpotent-groups` (expansion file §II.3). |
| (4) a nontrivial finite $p$-group has a subgroup of index $p$ | supplied by AG-4 in the **existence** form, added there for this purpose (expansion file §II.3.b). The published `cor-index-p-subgroups-of-finite-p-groups-are-normal` presupposes such a subgroup and does **not** produce one — the distinction is easy to miss and would leave the proof with a hole. |

Input (2) being already published is worth pausing on. Milne derives the complex
square root algebraically from real square roots — for $\alpha = a+bi$ take real
$c,d$ with $c^2 = \tfrac12\!\left(a + \sqrt{a^2+b^2}\right)$,
$d^2 = \tfrac12\!\left(-a + \sqrt{a^2+b^2}\right)$ and signs chosen so $cd$ has
the sign of $b$ — and the library has done exactly this at snapshot 54. So **the
only analytic input to X-1 is the intermediate value theorem, used once**, for
odd-degree real polynomials. That is a much smaller analytic surface than the
published minimum-modulus proof needs, and the page should say so, because it is
the honest reason to keep both.

### II.8.c The item list

**DEFS.** none new. The page consumes `def-algebraically-closed-field`
(published, snapshot 86), $\mathbb{C}$ and its conjugation (published, 54), and
the Galois vocabulary of GA-1/GA-2.

**THMS.**
*The analytic input, isolated.* a real polynomial function is continuous (from
the published algebra-of-continuous-functions); **every odd-degree polynomial in
$\mathbb{R}[x]$ has a real root** (from the intermediate value theorem, on a sign
change forced by the leading term); **hence no irreducible in $\mathbb{R}[x]$ has
odd degree greater than $1$** — this corollary, not the root statement, is what
the main proof consumes, and separating them is what keeps the analytic input
visible at exactly one step.

*Two field-theoretic lemmas.* **every quadratic extension in characteristic
$\ne 2$ is $F(\sqrt d)$ for some non-square $d \in F^\times$** (Milne Lem. 3.25 —
complete the square; needed at the last step and cheap); a field is algebraically
closed iff every nonconstant polynomial over it splits iff it has no nontrivial
finite extension (the equivalences the argument moves between; each is a step).

*The theorem.* **$\mathbb{C}$ is algebraically closed** (landmark), decomposed
into the five steps the sources agree on and which are genuinely five different
moves:
1. it suffices to show every $f \in \mathbb{R}[x]$ splits in $\mathbb{C}$;
2. let $E$ be a splitting field of $f(x)(x^2+1)$ over $\mathbb{R}$; characteristic
   $0$ makes it separable, so $E/\mathbb{R}$ is Galois, and $\mathbb{C} \subseteq E$;
3. let $H$ be a Sylow $2$-subgroup of $G = \operatorname{Gal}(E/\mathbb{R})$;
   $E^H$ has odd degree $[G:H]$ over $\mathbb{R}$, so every element of $E^H$ has
   odd-degree minimal polynomial, which is irreducible of odd degree hence
   linear — so $E^H = \mathbb{R}$ and **$G$ is a $2$-group**;
4. $\operatorname{Gal}(E/\mathbb{C})$ is then a $2$-group; if nontrivial it has a
   subgroup of index $2$ by input (4), whose fixed field is a quadratic extension
   of $\mathbb{C}$, hence $\mathbb{C}(\sqrt d)$ — contradicting input (2);
5. so $\operatorname{Gal}(E/\mathbb{C})$ is trivial, $E = \mathbb{C}$, and $f$
   splits.

*Consequences.* $\mathbb{C}$ is an algebraic closure of $\mathbb{R}$, and
$[\mathbb{C}:\mathbb{R}] = 2$; **the algebraic numbers in $\mathbb{C}$ form an
algebraic closure of $\mathbb{Q}$** (with GA-1's closure theory, and this is the
concrete $\overline{\mathbb{Q}}$ GA-1's B page could only posit); every
irreducible in $\mathbb{R}[x]$ has degree $1$ or $2$, so every real polynomial
factors into linear and irreducible quadratic factors; every polynomial of degree
$n$ over $\mathbb{C}$ has exactly $n$ roots with multiplicity; **the
Artin–Schreier converse** — if $\overline{K}/K$ is a finite nontrivial extension
then $[\overline{K}:K]=2$ — **DEFERRED**, not dropped: it is a genuine theorem
(Conrad `artinschreier` Thm. 3.1) but it needs the theory of real-closed and
formally real fields, which is a block of its own and belongs to a field-theory
level this library has not reached. Recorded with its source so a later level can
pick it up.

**B page.** $x^3 - 2$ factored over $\mathbb{R}$ and over $\mathbb{C}$;
$x^4+1$ factored into two real quadratics — the witness that "irreducible over
$\mathbb{Q}$" and "irreducible over $\mathbb{R}$" are different questions;
$x^2+1$ irreducible over $\mathbb{R}$ and split over $\mathbb{C}$, the smallest
case of the degree-$\le 2$ corollary; the odd-degree theorem applied to
$x^5 - x - 1$; **a concrete quintic over $\mathbb{Q}$ that is not solvable by
radicals** — $x^5 - 6x + 3$: irreducible by Eisenstein (published), exactly three
real roots by the intermediate value theorem and the sign pattern of its
derivative, so complex conjugation restricts to a transposition of the two
non-real roots, so its Galois group is a transitive subgroup of $S_5$ containing
a transposition, so it is $S_5$ by GA-4's
`thm-a-transitive-subgroup-of-s-p-containing-a-transposition-is-s-p`, so it is
not solvable. **This is the item GA-4 explicitly deferred to here** (companion
file, GA-4 trap (iii)), and it closes only because X-1 sits above both GA-4 and
the intermediate value theorem and finally has $\mathbb{C}$ algebraically closed
so the splitting field embeds in $\mathbb{C}$. It is the single most valuable
item on this B page and the reason the deferral was honest rather than a drop;
**fs**: every polynomial with real coefficients has a real root ($x^2+1$);
**fs**: $\mathbb{R}$ is algebraically closed; **fs**: an irreducible real
polynomial has degree $1$ (degree $2$ occurs); **fs**: every quintic over
$\mathbb{Q}$ is insoluble by radicals (GA-4's $x^5-2$, with group of order $20$,
is the counterexample — and stating it here, next to $x^5-6x+3$, is what stops a
reader drawing the wrong moral from Abel–Ruffini).

### II.8.d The agreement record X-1 owes

`thm-fundamental-theorem-of-algebra-minimum-modulus-proof` is published and sits
**later** in reading order, so the record is a `rem-` on the **companion** page
carrying `forward_refs: [thm-fundamental-theorem-of-algebra-minimum-modulus-proof]`
and **no `deps` edge** — orientation only, in the tier-2 forward-reference sense
of `ARCHITECTURE.md` §7. Its text records that the library proves the theorem
twice, by disjoint routes, that the analytic route needs the complex exponential
and the minimum-modulus principle while this one needs only the intermediate
value theorem plus Galois theory and Sylow I, and that neither proof cites the
other. It must be written as a statement about the two **proofs**, never as a
claim about what the library does or does not contain — the decaying-scope-denial
failure named in `LEVELS.md` §8.

Milne's own footnote is the right honesty note to give the reader and should be
paraphrased in Remarks rather than invented: the result "is not strictly a
theorem in algebra: it is a statement about $\mathbb{R}$ whose construction is
part of analysis."

**Traps.** (i) The theorem is about $\mathbb{C}$ *as this library constructed it*
at snapshot 54, namely $\mathbb{R}[x]/(x^2+1)$; the proof must open from that
definition and not from an unstated "the complex numbers". (ii) Step 3's
conclusion is "$G$ is a $2$-group", which needs $E^H = \mathbb{R}$ and therefore
needs *every* element of $E^H$ to have odd degree — degree multiplicativity is
the step, and asserting it of a generator only is a gap. (iii) Input (4) is an
existence statement; see §II.8.b. (iv) The page proves $\mathbb{C}$ is
algebraically closed, **not** that it is the unique such field, and not that the
algebraic closure of $\mathbb{Q}$ is canonical — GA-1's non-uniqueness `fs-`
governs and must not be contradicted here. (v) Do not let the B page's quintic
claim that *no* quintic is solvable; see its paired `fs-`.

**Forward references:** one, non-load-bearing, on the companion page, as §II.8.d
specifies.

### II.8.e The route decision, and the `requires` amendment it implies

`research/plan-spec.json` currently records X-1's `requires` as
`["symmetric-polynomials", "continuity-ivt-evt-and-uniform-continuity"]`. That is
the signature of the **other** classical algebraic proof — Laplace's, by
induction on $v_2(\deg f)$ using symmetric functions of the roots in a splitting
field, with the intermediate value theorem supplying odd degrees and square roots.
It is a real proof and it was a sound plan when no Galois theory existed anywhere
in the library.

**Part II changes the route to Artin's**, and the reason is not elegance. The
Laplace route needs the fundamental theorem of symmetric polynomials applied to a
splitting field of $f$ over $\mathbb{R}$ with an auxiliary parameter, plus a
descent on the $2$-adic valuation of the degree; it is perhaps twelve honest
items and it re-derives, in a special case, structural facts that GA-2 will by
then have proved in general. Artin's route reuses the block: five steps, two
group-theoretic inputs already on AG-4, one field-theoretic lemma, and one
appeal to the intermediate value theorem. The remit for this commission also
names the Galois-theoretic proof explicitly.

**Amendment owed to the orchestrator** (§II.13): X-1's `requires` becomes
`["solvability-by-radicals-and-kummer-theory", "sylow-theorems-and-nilpotent-groups",
"continuity-ivt-evt-and-uniform-continuity"]`. `symmetric-polynomials` is
**dropped from X-1's `requires`** — it remains a prerequisite of GA-2 and GA-4,
so it is still below X-1 transitively, but X-1 no longer cites it directly and a
`requires` edge that nothing cites is exactly the "unused edge" the citation
fidelity rule forbids. The Laplace proof is **not deleted**: it is recorded here,
with its route and its cost, so that a later level can add it as a second proof
if the library ever wants three, and so that this decision is legible rather than
looking like an oversight.


---

## II.9 X-2 — `the-spectral-theorem-and-singular-value-decomposition`

- **id** `the-spectral-theorem-and-singular-value-decomposition`, companion
  `the-spectral-theorem-and-singular-value-decomposition-examples`
- **category** `linear-algebra`
- **snapshot order** 141 / 142, planned and **unauthored**
- **`requires`** (spec, unchanged and correct)
  `the-fundamental-theorem-of-algebra`, `inner-product-spaces-and-orthogonality`,
  `triangularisation-and-jordan-canonical-form`
- **estimate** A 34, B 18

### II.9.a The shape of this page, which is the harvest's central finding

X-2 sits above the intermediate and extreme value theorems (snapshot 137) and
above X-1 (139), so all three proof tiers are legally available to it. That makes
"which is possible" the wrong question; the right one is which is **cheapest and
most re-homeable**, since a proof using only an ordered field could later move
down the reading order and one using compactness never can.

The answer, from reading the proofs rather than inferring: **exactly one theorem
on this page needs anything beyond an ordered field, and it is the spectral
theorem itself.** Positive operators, the positive square root, polar
decomposition, the SVD, the operator norm, Eckart–Young, Courant–Fischer, Cauchy
interlacing, Weyl's inequalities and the Rayleigh characterisation are **all
purely algebraic once a spectral decomposition is in hand.** So the page is
scaffolded as *one* expensive theorem followed by a long cheap development off
it, and **nothing on it needs compactness or the extreme value theorem at all**.

That last clause is a deliberate scope decision and deserves its reason. Treil
§6.4 and Conrad's `matrixnorm` both prove $\lVert T\rVert$ is attained by a
compactness argument, and every numerical-analysis treatment derives the SVD and
Eckart–Young analytically. They do so because they have not built the SVD at that
point, not because the analysis is needed: once the SVD exists, the operator norm
is attained at the first right-singular vector by inspection, and Eckart–Young's
minimiser is **exhibited**, so no infimum has to be shown to exist a priori.
**X-2 takes the algebraic route throughout and records that the analytic route
exists.**

### II.9.b What LA-12 has already done, and what X-2 adds

§II.7's tier-(a) spectral block means X-2 does **not** open at the beginning. The
following are already proved at snapshot 94 and are cited here: self-adjoint and
normal operators and the adjoint identities; eigenvalues of a self-adjoint
operator lie in the fixed field; eigenvectors for distinct eigenvalues are
orthogonal; **$m_T$ is squarefree for a self-adjoint $T$ over any field**; a
self-adjoint operator is semisimple; over an ordered field $m_T$ has no
negative-discriminant quadratic factor; and **the conditional spectral theorem**
— if $T$ is self-adjoint and $m_T$ splits, $V$ has an orthonormal eigenbasis.

**X-2's own first theorem is therefore narrow and precise: it discharges the
splitting hypothesis.** By X-1, $\mathbb{C}$ is algebraically closed, so $\chi_T$
splits over $\mathbb{C}$; by LA-12 the roots of a self-adjoint operator's minimal
polynomial lie in $\mathbb{R}$; by LA-12 again $m_T$ is squarefree. That is the
whole discharge, and it is three citations and one step. Everything after it is
new content rather than a re-proof, which is exactly the property that makes the
LA-12/X-2 split worth its one extra theorem statement.

### II.9.c The item list

**DEFS.** **positive operator** — *and the convention item, because the two
primary sources collide on this exact word*: Axler 7.34 calls
$\langle Tv,v\rangle\ge0$ **positive** (and says outright that "nonnegative"
would be better terminology), while Hoffman & Kunze p340 call that
**non-negative** and reserve *positive* for the strict condition. **The library
adopts H&K's usage — `def-non-negative-and-positive-operator`, with
non-negative for $\ge 0$ and positive for $>0$ on nonzero vectors — and every
citation of Axler translates.** The reason is internal consistency, not
preference: `def-definiteness-inertia-and-signature-data-over-the-reals` is
**published** at snapshot 92 and already fixes "positive definite" for the strict
condition, so Axler's usage would put two meanings of *positive* one page apart.
Also: **self-adjointness is part of the definition** — over $\mathbb{R}$ the bare
condition $\langle Tv,v\rangle\ge0$ is satisfied by a quarter-turn, which is not
self-adjoint, so omitting the clause makes the square-root theorem false;
the **square root** of a non-negative operator; **isometry** (cited from LA-12);
**singular values**; the **singular value decomposition**; the **operator norm**
$\lVert T\rVert$ (defined here as a maximum, not a supremum — see §II.9.a); the
**Rayleigh quotient**.
Also `def-semisimple-and-nilpotent-linear-endomorphisms`: semisimple means
diagonalisable after scalar extension to an algebraic closure, and nilpotent
means some positive power is zero.

**THMS.**
*Operator Jordan--Chevalley.*
`thm-additive-jordan-chevalley-decomposition`: over a perfect field, every
endomorphism of a finite-dimensional vector space has unique commuting
semisimple and nilpotent parts $T=T_s+T_n$, each a polynomial in $T$ (with the
zero-constant-term normalization when $T=0$). The proof cites LA-10's split
Jordan-block calculation and uses separability/primary decomposition for the
field-independent formulation. This is the sole citable finite-dimensional
operator item used by DG-30.

*The spectral theorems.* **the real spectral theorem**: a self-adjoint operator
on a finite-dimensional real inner product space has an orthonormal basis of
eigenvectors, equivalently a real symmetric matrix is $Q^{\mathsf T}DQ$ with $Q$
orthogonal (landmark) — proved by discharging LA-12's hypothesis as in §II.9.b;
**Schur triangularisation**: if $\chi_T$ splits, there is an orthonormal basis in
which $[T]$ is upper triangular (landmark — Gram–Schmidt applied to a
triangularising basis, and it is LA-10's triangularisation refined by LA-12's
orthonormalisation, so it cites both and reproves neither); **a normal operator
whose matrix in some orthonormal basis is upper triangular has a diagonal matrix
in that basis** (the row-by-row $\lVert Te_k\rVert = \lVert T^*e_k\rVert$
argument — purely algebraic); **the complex spectral theorem**: an operator on a
finite-dimensional complex inner product space is normal iff it has an
orthonormal basis of eigenvectors (landmark, both directions);
**the real normal classification**: a normal operator on a real inner product
space has an orthonormal basis in which the matrix is block-diagonal with
$1\times1$ blocks and $2\times2$ blocks $\begin{psmallmatrix}a&b\\-b&a\end{psmallmatrix}$,
$b\ne0$ (landmark, H&K p349 Thm. 17 with p353 Thm. 18) — *the item that stops the
page from asserting the complex statement over $\mathbb{R}$*;
**the spectral resolution** $T = \sum_j c_jE_j$ with the $E_j$ **orthogonal**
projections, and **each $E_j$ is a polynomial in $T$** by Lagrange interpolation;
the **functional calculus** $f(T)$ for $f$ defined on the spectrum, with
$(fg)(T)=f(T)g(T)$.

*Positivity and square roots.* the six equivalent characterisations of a
non-negative operator ($\langle Tv,v\rangle\ge0$ and self-adjoint; self-adjoint
with non-negative eigenvalues; $T = S^*S$; $T=R^2$ for self-adjoint $R$; $T=R^2$
for a unique non-negative $R$; the matrix is positive semidefinite) — landmark,
and **tier-(a) given the spectral theorem**, since the proof is eigenspace
bookkeeping plus $\sqrt\lambda$ for $\lambda\ge0$, which is the published
`thm-nth-roots-exist`; **the non-negative square root exists and is unique**
(landmark), and is a polynomial in $T$; agreement item against the published
`thm-sylvesters-criterion-for-positive-definiteness` and
`def-definiteness-inertia-and-signature-data-over-the-reals` at snapshot 92 —
the operator notion and the published **form** notion correspond under
`thm-bilinear-forms-correspond-to-linear-maps-into-the-dual`, and stating that
correspondence is mandatory or the library has a positive form theory and a
positive operator theory with nothing between them.

*Polar and SVD.* **polar decomposition** $T = S\sqrt{T^*T}$ with $S$ an isometry
(landmark; $S$ is unique when $T$ is invertible and not otherwise — the
uniqueness clause is the one that gets overstated); **the singular value
decomposition** (landmark): orthonormal $e_1,\dots,e_n$ and $f_1,\dots,f_n$ and
$s_1\ge\cdots\ge s_n\ge0$ with $Tv=\sum_i s_i\langle v,e_i\rangle f_i$ — proved
by applying the spectral theorem to the non-negative operator $T^*T$, then pure
algebra; the singular values are the eigenvalues of $\sqrt{T^*T}$ and are
independent of every choice (**well-definedness #L7**); the matrix form
$A = U\Sigma V^*$; $\operatorname{rank} T$ is the number of nonzero singular
values; the singular values of $T$ and $T^*$ agree.

*Consequences of the SVD, all algebraic.* $\lVert T\rVert = s_1$, **attained** at
$e_1$ — so the operator norm is a maximum and no compactness argument is needed;
$\lVert T\rVert$ is submultiplicative and $\lVert T^*T\rVert = \lVert T\rVert^2$;
**Eckart–Young**: the best approximation to $T$ by an operator of rank $\le k$ is
the truncation $\sum_{i\le k}s_i\langle\cdot,e_i\rangle f_i$, with error
$s_{k+1}$ (landmark — the minimiser is exhibited and the lower bound is a
dimension count producing a nonzero vector in an intersection, so no infimum need
be known to exist); **Courant–Fischer min–max**, stated with $\max$ and $\min$
rather than $\sup$ and $\inf$ because the extrema are attained at eigenvectors
(landmark); the **Rayleigh characterisation**
$\lambda_{\max} = \max_{v \ne 0}\langle Tv,v\rangle/\langle v,v\rangle$, as a
*characterisation* and never as an existence proof (see the trap);
**Cauchy interlacing** for a self-adjoint operator restricted to a hyperplane
(from Courant–Fischer, a dimension count); **Weyl's inequalities**
$\lambda_{i+j-1}(A+B)\le\lambda_i(A)+\lambda_j(B)$ (likewise);
**Gershgorin's disk theorem** — added, cheap, arithmetic only, and it is the one
tool on the page that localises a spectrum without diagonalising.

**FS.** **normal operators are diagonalisable** — stated without naming the
field, and refuted by the quarter-turn, which is normal over $\mathbb{R}$ and has
no real eigenvalue. *The most important `fs-` on the page*: a Statement asserting
this without a field hypothesis is simply false, and the real normal
classification above is what replaces it; every symmetric matrix over every field
is diagonalisable (refuted over $\mathbb{C}$ by
$\begin{psmallmatrix}1&i\\i&-1\end{psmallmatrix}$, which is symmetric,
nonzero and squares to zero — the witness that "symmetric" is the wrong condition
over $\mathbb{C}$ and "Hermitian" is the right one, and the single best cure for
the commonest confusion in the subject); $\langle Tv,v\rangle\ge0$ implies $T$
self-adjoint (the quarter-turn again, over $\mathbb{R}$); a non-negative operator
has a unique square root **among all operators** (unique only among non-negative
ones; the diagonal $\pm1$ matrices refute the stronger claim); the isometry in
the polar decomposition is unique (false for singular $T$); the singular values
are the absolute values of the eigenvalues (false for non-normal $T$;
$\begin{psmallmatrix}0&2\\0&0\end{psmallmatrix}$ has eigenvalues $0,0$ and
singular values $2,0$); $\lVert T\rVert$ is the largest $\lvert\lambda\rvert$
(same witness).

**B page.** an explicit real symmetric $3\times3$ orthogonally diagonalised, with
$Q$ written out and $Q^{\mathsf T}Q=I$ checked; a Hermitian $2\times2$
unitarily diagonalised; the quarter-turn shown normal with its $2\times2$ real
block form and its complex eigenvalues $\pm i$; the complex symmetric
non-diagonalisable witness worked; the non-negative square root of an explicit
matrix computed **and exhibited as a polynomial in $T$**; a polar decomposition
computed for an invertible and for a singular matrix, with the non-uniqueness in
the second case exhibited; the SVD of an explicit $2\times3$ computed from
$T^*T$; the rank-1 truncation of that SVD and its error checked against
$s_2$; Courant–Fischer verified numerically on a $3\times3$; interlacing checked
against a principal submatrix; Gershgorin disks drawn for a $3\times3$ and
compared with the true spectrum; **fs**: the singular-value/eigenvalue confusion
worked on the nilpotent $2\times2$.

**Traps.** (i) **Every statement about normal operators carries its field.** Over
$\mathbb{C}$, normal is equivalent to orthonormally diagonalisable; over
$\mathbb{R}$ it is not. This is the page's largest false-statement risk and the
`fs-` exists for it. (ii) The word *positive* is fixed by §II.9.c against the
published order-92 vocabulary; Axler's usage is the opposite and every citation
of him must be translated. (iii) Self-adjointness is part of *non-negative*;
dropping it makes the square-root theorem false over $\mathbb{R}$. (iv) The
Rayleigh quotient is used **only** as a characterisation. The maximise-then-show-
the-maximiser-is-an-eigenvector route is a legal but *locked* proof: it consumes
the extreme value theorem and can never be re-homed below snapshot 137. The page
records that the route exists and does not take it. (v) Courant–Fischer is stated
with $\max$/$\min$; writing $\sup$/$\inf$ would import an existence question the
algebraic proof does not have. (vi) Uniqueness clauses — of the square root
(among non-negative operators), of the polar isometry (only for invertible $T$),
of the SVD (the singular *values* are unique, the vectors are not) — are three
separate hedges and each belongs in its own Statement. (vii) Schur
triangularisation is LA-10's triangularisation plus LA-12's Gram–Schmidt; do not
reprove either.

**Forward references:** NONE load-bearing. A `## Remarks` note recording that the
infinite-dimensional spectral theory is a different subject with different
hypotheses is permitted, but it must **not** claim to be a special case of
anything, and it must not name unbuilt items — `rem-spectral-theory-bounded-operators`
is a published `deferred-*` catalogue entry and the functional-analysis track
owns that statement (§II.13, amendment 6).

---

## II.10 Well-definedness obligations added by Part II

Part I's table is keyed by absolute order and is unusable as written (§II.1.a).
These are Part II's, keyed by page id. Each is a **numbered item**, never a
parenthetical, and each is either a well-definedness argument or a mandatory
agreement record in the D6 sense — a proved statement that two notions the
library now carries under similar names are the same notion, or are different
ones.

| # | page | obligation |
|---|---|---|
| **#G1** | `algebraic-closure-embeddings-and-separability` | $[K:F]_s$ does not depend on the chosen algebraically closed field into which the embeddings go |
| **#G1b** | same | `cor-polynomial-ring-on-a-finite-family-agrees-with-the-iterated-construction` — the polynomial ring on a family agrees, in the finite case, with the published `def-multivariate-polynomial-ring-by-iteration` |
| **#G2** | `finite-fields-and-cyclotomic-extensions` | the recursion $x^n-1=\prod_{d\mid n}\Phi_d$ defines $\Phi_n$ **in $\mathbb{Z}[x]$**: the division is exact there, which needs the published `thm-monic-polynomial-division` over $\mathbb{Z}$ and not division over a field |
| **#G3** | `solvability-by-radicals-and-kummer-theory` | the field norm and trace agree with the determinant and trace of multiplication-by-$\alpha$ as an $F$-linear operator — against the published `def-determinant-of-a-linear-operator` and `def-trace-of-an-endomorphism`, or the library has two unrelated norms and two unrelated traces |
| **#S1** | `symmetric-polynomials` | the expression of a symmetric polynomial in $e_1,\dots,e_n$ is **unique**, equivalently the $e_i$ are algebraically independent — proved, not asserted (§II.3.a) |
| **#F1** | `algebraic-extensions-degree-and-finite-fields` | `def-algebraic-extension` is the same notion already in load-bearing published use at `def-normal-algebraic-extension` (§II.4.a) |
| **#L1** | `diagonalisation-and-the-minimal-polynomial` | the minimal polynomial is well defined: the annihilating ideal is nonzero (Cayley–Hamilton, published) and has a **unique monic generator** (published PID theory) |
| **#L2** | same | `def-minimal-polynomial-of-an-operator` is a *different* notion from the published `thm-evaluation-kernel-and-minimal-polynomial`, which is about a field element algebraic over a subfield. An agreement record stating the relation, not an identification |
| **#L3** | `triangularisation-and-jordan-canonical-form` | the operations on $V/W$ are well defined |
| **#L4** | same | the induced operator $\overline T$ on $V/W$ is well defined for $T$-invariant $W$ |
| **#L5** | `inner-product-spaces-and-orthogonality` | the standard form on $F^n$ is an inner product, and the general Cauchy–Schwarz specialises on it to exactly the published `thm-cauchy-schwarz-finite` — a **backward** dictionary, not a forward reference (§II.7.c) |
| **#L6** | same | the relation between the published `thm-symmetric-bilinear-forms-have-an-orthogonal-basis` (orthogonal, char $\ne2$, any field) and Gram–Schmidt (orthonormal, needs positive scalars to be squares). **These are not the same theorem** and the page states which is the refinement of which |
| **#L7** | `the-spectral-theorem-and-singular-value-decomposition` | the singular values do not depend on any choice — they are the eigenvalues of $\sqrt{T^*T}$ |
| **#X1** | `the-fundamental-theorem-of-algebra` | the agreement record against the published `thm-fundamental-theorem-of-algebra-minimum-modulus-proof`, as a `rem-` with `forward_refs` and no `deps` edge (§II.8.d) |
| **#X2** | `the-spectral-theorem-and-singular-value-decomposition` | the operator notion *non-negative / positive* corresponds, under `thm-bilinear-forms-correspond-to-linear-maps-into-the-dual`, to the published form notion in `def-definiteness-inertia-and-signature-data-over-the-reals`. The word *positive* is fixed against the published usage and Axler's opposite convention is translated at every citation (§II.9.c) |

---

## II.11 Choice-strength ledger

The published baseline is unchanged: "every vector space has a basis" is proved
at `linear-independence-bases-and-dimension` and costs **AC** (Zorn); the
finite-dimensional theory there is choice-free. AC, countable choice and
dependent choice are the adopted axioms and are the sole exemption to
self-contained scope. What Part II adds:

| result | cost | page |
|---|---|---|
| **existence of an algebraic closure** | **BPIT / the Boolean ultrafilter theorem — NOT Zorn, and NOT a theorem of ZF** | GA-1 |
| **uniqueness of the algebraic closure up to a non-canonical isomorphism** | **BPIT**, likewise; and "there is at most one algebraic closure of $\mathbb{Q}$ up to isomorphism" is **not** a theorem of ZF | GA-1 |
| an algebraic closure of a **countable** field | **none** | GA-1 |
| extending an embedding into an algebraically closed field | Zorn as usually written; BPIT suffices | GA-1 |
| everything else in GA-1…GA-4 — separability, the correspondence, cyclotomy, Kummer theory, solvability | **none** (finite extensions, finite groups) | GA block |
| symmetric polynomials, resultants, discriminants | **none** | AA-14 |
| the tower law, finite fields, constructibility | **none** | AA-15 |
| the whole of LA-9, LA-10, LA-12 and X-2 | **none** — finite-dimensional throughout; Gram–Schmidt, the spectral theorem, the SVD and Courant–Fischer are all choice-free | LA/X block |
| X-1 | **none** beyond Sylow and the IVT | X-1 |
| **"ACC $\Rightarrow$ every submodule is finitely generated"** | **dependent choice** — and no harvested source flags it. This is why MOD-4 *defines* Noetherian by the f.g. condition and proves the equivalence, isolating DC in one biconditional (expansion file §II.5.a) | MOD-4 |
| the DCC/minimal-condition equivalence for Artinian | **dependent choice**, same shape | MOD-4 |
| "a sum of simple submodules is a direct sum of a subfamily" | **Zorn** in general; **choice-free at finite length**, which is the only case $k[G]$ needs | MOD-4 |
| Wedderburn–Artin by the Crawley-Boevey route | **choice-free** given finite length | MOD-4 |
| every f.g. nonzero module has a maximal proper submodule | **Zorn**; false without "f.g." ($\mathbb{Q}$ over $\mathbb{Z}$) | MOD-4 |
| rank invariance for free modules over a commutative ring | **Zorn**, via a maximal ideal; choice-free over a field | MOD-2 (published) |
| Baer's criterion; enough injectives | **Zorn** | MOD-2 (published) |
| the structure theorem over a PID, f.g. case | **none** | MOD-5 |
| **Smith normal form over a PID** | **choice-free but non-constructive** — the proof takes a maximal element of $\{\varphi(M')\}$, justified by finiteness of divisors in a UFD, not by an algorithm. The Euclidean-domain version *is* an algorithm and is a separate statement (expansion file §II.6) | MOD-5 |
| the entire representation-theoretic payload | **none** | RT-1…RT-4 |

**Reading.** The choice cost of this commission sits in exactly two places. In
the module block it is where Part I already put it — maximal submodules, rank
invariance, injectives — plus the newly surfaced **dependent choice** in the
chain-condition equivalences. In the Galois block it is the algebraic closure,
and the finding there is the more interesting one: **the standard textbook proofs
use Zorn because it is convenient, not because it is necessary**, and the honest
statement is BPIT. Banaschewski (1992) is the citable source, and Milne's
Warning 6.8 is the sentence to put in front of a reader — that even for a finite
field there are uncountably many isomorphisms between two algebraic closures,
"none of which is to be preferred over any other".

---

## II.12 The canonical-coverage harvest

The full source-anchored heading enumerations — each source's own section and
named-result headings over the exact range read — are in five files under
`research/subjects-01-dispatch/`, produced by this lane's research subagents:
`aa-harvest-galois.md` (1693 lines), `aa-harvest-linear-algebra.md` (1932),
`aa-harvest-modules.md` (1877), `aa-harvest-representation-theory.md`, and
`aa-harvest-symmetric-and-extensions.md` (1521). This section is the index and
the **two-independent-treatments check**, which is the part a future build must
be able to act on.

### II.12.a The two-treatments check, per A/B pair

`CLAUDE.md` requires every pair to be backed by at least two independent
treatments, at least one a textbook, monograph or full lecture-note set with a
harvestable table of contents. Wikipedia is a convention tiebreaker only and can
never be a pair's primary backing.

| pair | primary (textbook/monograph/notes, full text) | second | status |
|---|---|---|---|
| AA-14 symmetric polynomials | Macdonald Ch. I §§1–2; Knapp *Basic Algebra* IX | Grinberg Ch. 7; Conrad `symmfunction`; Artin §16.1 | **met** |
| AA-15 extensions and finite fields | Knapp *Basic Algebra* IX.1–IX.5; Milne FT Ch. 1–4 | Clark *Field Theory*; Conrad `finitefields`; Artin §15 | **met** |
| GA-1 closure and separability | Milne FT Ch. 2–6; Clark *Field Theory* Ch. 3–10 | Conrad blurbs (26); Ash Ch. 3, 6; Banaschewski (1992) | **met** |
| GA-2 the correspondence | Milne FT Ch. 3; Clark Ch. 8 | Ash 6.1–6.2; Conrad `galoistheory`; Artin Ch. 16 | **met** |
| GA-3 finite fields and cyclotomy | Milne FT Ch. 4–5; Conrad `finitefields`, `cyclotomic` | Clark; Lang Ch. V–VI (TOC) | **met** |
| GA-4 Kummer and solvability | Milne FT Ch. 5; Ash 6.7–6.8 | Conrad `artinschreier`, `galoisappn`; Clark | **met** |
| LA-9 diagonalisation | Hoffman & Kunze Ch. 6 (full text) | Axler Ch. 5, 8; Conrad `minpolyandappns`, `semisimple`; Cambridge IB | **met** |
| LA-10 triangularisation and Jordan | **Hoffman & Kunze Ch. 7 (sole full source for the core)** | Axler Ch. 8 (Jordan only); Petersen; Cambridge IB; Brosnan | **met, but thin** — Axler and Treil carry **no** rational canonical form, invariant factors or cyclic vectors, so H&K is doing the work alone for that sub-block. The cyclic-vector theorem is H&K p237 Corollary |
| LA-12 inner products | Axler Ch. 6; Hoffman & Kunze Ch. 8 | Treil Ch. 5; Conrad `bilinearform`; Cambridge IB | **met** |
| X-1 fundamental theorem of algebra | Milne FT Thm. 5.6; Artin §15.10 | Conrad `galoisappn`, `fundthmalglinear` | **met** |
| X-2 spectral theorem and SVD | Axler Ch. 7; Hoffman & Kunze Ch. 8–9 | Treil Ch. 6; Tao 254A | **met for the spectral/SVD core; binding second-treatment gate for Cauchy interlacing and Weyl** — the first harvest found only one exercise route, so X-2 may not be authored until a second independent treatment and exact locator are verified; see §II.12.b |
| AG-3 semidirect products | Ash Ch. 5; Conrad `semidirect-product` (29 pp) | Rotman (ordering only) | **met** |
| AG-4 Sylow | Ash §5.4–5.7; Conrad `sylowpf`, `sylowapp` | Rotman | **met** |
| MOD-3 tensor products | Wisbauer *Foundations of Module and Ring Theory*; Conrad `tensorprod`, `tensorprod2` | Ash Ch. 4; Altman–Kleiman; Stacks | **met** |
| MOD-4 chain conditions, Wedderburn | Crawley-Boevey *Noncommutative algebra*; Wisbauer | Conrad `noetherianmod`; Duncan; Clark *Commutative Algebra* | **met** |
| MOD-5 modules over a PID | Conrad `modulesoverPID`, `alignedbases`; Ash §4.5–4.6 | Brosnan; Clark | **met** |
| RT-1…RT-4 | **Webb** *A Course in Finite Group Representation Theory* (294 pp, arbitrary $k$ throughout) | Etingof et al; Teleman; Milne *Group Theory* Ch. 7; Anupam Singh; Serre (TOC); Conrad | **met** |

### II.12.b Gaps in the harvest, stated rather than papered over

These are places where the sourcing rule is **not** met, or where a result the
scaffold uses is unproved in everything harvested. Each is a real obligation on a
future build, not a caveat.

1. **APPLIED AS A BINDING AUTHORING GATE. Cauchy interlacing and Weyl's
   inequalities** (X-2) had one source, as exercises, in the first harvest.
   A second independent treatment with an exact locator is required before
   authoring; this scaffold does not invent one or silently drop the results.
2. **A right-Noetherian, not-left-Noetherian ring** (MOD-4's `fs-`) is
   **unsourced**. The usual triangular ring was not found stated as such in
   anything harvested, and the harvest explicitly warns against scaffolding it
   from memory. Verify against a source or drop the `fs-`.
3. **The sharp characteristic hypothesis for power sums** ($\operatorname{char}=0$
   or $>n$) is stated by **no** source — all assume a $\mathbb{Q}$-algebra. AA-14
   proves it inline.
4. **$\operatorname{Res}(f,g)=\prod_{i,j}(\alpha_i-\beta_j)$** is proved in no
   harvested source. AA-14 proves it or restricts to the vanishing criterion.
5. **The compositum degree bound** is Clark's Exercise 3.6 and is proved nowhere
   harvested. AA-15 proves it.
6. **The closed form $N_q(n)=\frac1n\sum_{d\mid n}\mu(d)q^{n/d}$** for the number
   of monic irreducibles is unproved in both the Galois and the symmetric
   harvests, and Möbius inversion is published at snapshot 203, far **above** the
   Galois block. GA-3 therefore proves "an irreducible polynomial of every degree
   exists" by an elementary estimate on the divisor-sum identity, and the closed
   form is deferred (§II.13).
7. **Brauer's theorem** ("$k \supseteq \mu_e$ implies $k$ is a splitting field")
   is stated without proof in Webb and is **not** to be used (expansion file
   §II.7.b).
8. **Isaacs and Fulton–Harris were unobtainable**; no coverage disposition may
   cite them as read. Likewise Roman, Halmos and Petersen's book are behind an
   authentication gate.
9. **Jordan–von Neumann**, the Frobenius-norm form of Eckart–Young, and the
   adjugate proof of Cayley–Hamilton are unsourced here. The first is deferred by
   §II.7.c anyway; the third is already published.
10. **Hoffman & Kunze's PDF OCR mangles "monic", "finite" and "field"**; matrices
    and statements quoted from it must be reconstructed, not copied.

### II.12.c Convention disagreements, and what the library adopts

| flashpoint | the library adopts | why |
|---|---|---|
| inner product linear in which slot | **first** | fixed by the **published** `def-sesquilinear-and-hermitian-forms-over-a-field-with-involution`; Axler, H&K and Treil all agree |
| orthogonal-basis hypothesis | **char $\ne2$** (Conrad) | H&K's "characteristic zero" and Axler's "$F\in\{\mathbb{R},\mathbb{C}\}$" are needlessly weak; the published order-92 item already uses char $\ne2$ |
| Jordan block orientation | **1s above the diagonal** | H&K uses below, inheriting its companion-matrix convention; upper is far more common elsewhere |
| rational canonical form | **invariant factors**, said in the title | "the rational canonical form" names two different matrices in the literature |
| invariant-factor divisibility direction | **fixed once, and stated** | **H&K uses both directions in the same chapter**; quoting "the $k$th invariant factor" from it without saying which list is meant produces a false statement |
| *positive* operator | **H&K's**: non-negative for $\ge0$, positive for $>0$ | the published order-92 `def-definiteness-inertia-and-signature-data-over-the-reals` already fixes "positive definite"; Axler's opposite usage is translated at each citation |
| semisimple vs potentially diagonalisable | **kept apart** | squarefree $\iff$ semisimple; separable $\iff$ diagonalisable over an extension. They differ over imperfect fields |
| "Galois" | **normal + separable**, with the equivalents as a theorem | Milne; the four characterisations are equivalent for finite extensions only |
| $\operatorname{Gal}$ vs $\operatorname{Aut}$ | $\operatorname{Gal}$ **only** when the extension is known Galois | Milne, Conrad, Clark against Ash |
| separable polynomial | **distinct roots** | Milne/Conrad; under the other convention $(x-1)^2$ counts as separable |
| radical extension | **the weakest definition** — a plain tower, no Galois or root-of-unity hypothesis | a definition that assumes what the proof needs makes the theorem weaker than it looks; the strengthenings are proved as lemmas |
| Kummer extension | **Conrad's** ($\mu_n\subseteq K$) | Ash's "abelian Galois" is a genuinely different notion; $\mathbb{Q}(\sqrt[6]{-3})$ separates them |
| $D_n$ vs $D_{2n}$ | **$D_n$ of order $2n$**, with the order stated in the definition | Conrad, Ash and D&F write $D_{2n}$; Rotman and Artin write $D_n$; the published examples name the order |
| elementary symmetric vs power sums | **$e,h,p,m$** | **Milne writes $p_i$ for the elementary symmetric polynomials**, the opposite of everyone else |
| character pairing | **bilinear** $\frac1{|G|}\sum\varphi(g^{-1})\psi(g)$ | needs no conjugation, ordering or $\mathbb{C}$; expansion file §II.7.a |
| Noetherian, definition | **every submodule is finitely generated** | choice-free; the ACC equivalence costs dependent choice (§II.11) |

---

## II.13 Amendments owed to other scaffolds, and unresolved seams

This section began as the lane's outbound request ledger. Entries marked
**APPLIED** are now reconciliation receipts in the originating scaffold; the
remaining entries retain their original addressee.

### To the orchestrator, on `research/plan-spec.json`

1. **APPLIED at scaffold level 2026-08-14. X-1's `requires` changes** from `["symmetric-polynomials",
   "continuity-ivt-evt-and-uniform-continuity"]` to
   `["solvability-by-radicals-and-kummer-theory", "sylow-theorems-and-nilpotent-groups",
   "continuity-ivt-evt-and-uniform-continuity"]`, following the route decision of
   §II.8.e. `symmetric-polynomials` stays below X-1 transitively through GA-2.
2. **APPLIED at scaffold level 2026-08-14. RT-3's `requires` loses `inner-product-spaces-and-orthogonality`**, following
   the bilinear-pairing decision (expansion file §II.7.a).
3. **APPLIED 2026-08-14. The Galois block has four A/B pairs, not two** (§II.2.0). The free integers
   98–101 hold two; the other two go at fractional orders, as
   `the-field-of-fractions-and-localisation` at 53.2 already does.
4. **APPLIED at scaffold level 2026-08-14. The spec understates what is
   published** — seventeen pages carry more items on disk than the spec records
   (expansion file §II.1.a). This warning is retained for every future builder:
   no track may conclude "X does not exist" from the spec alone and re-mint
   published mathematics.

### To `commutative-algebra` (wave 2)

5. `def-noetherian-module`, `def-artinian-module` and `def-noetherian-ring` are
   minted on **MOD-4** and are **defined by the finitely-generated condition, not
   by ACC** (expansion file §II.5.a). Cite them; the ACC equivalence is available
   as a theorem there, with its dependent-choice cost recorded. Also available and
   not to be re-minted: **integral elements, the determinant trick, and "the
   integral elements form a subring"** on MOD-4; the published field of fractions
   and localisation (22 items); and, from this file, the algebraic closure and the
   full Galois correspondence, both of which sit below `modules-over-a-pid-and-canonical-forms`
   and are therefore below the `commutative-algebra` anchor.

### To `functional-analysis` (wave 2)

6. The **finite-dimensional** spectral theorem, positive operators, the positive
   square root, polar decomposition and the SVD are on X-2 at snapshot 141, far
   **below** the functional-analysis anchor. Cite them; do not re-mint the
   finite-dimensional statements. Two specific requests: `rem-riesz-representation-hilbert`
   and `rem-spectral-theory-bounded-operators` are published `deferred-*`
   catalogue entries and are yours to discharge, and X-2's items are **not** a
   discharge of them — the notions differ. And **Jordan–von Neumann** (a norm
   comes from an inner product iff the parallelogram law holds) is **deferred to
   you** by §II.7.c, because its statement quantifies over norms and
   `def-norm-and-normed-space` sits above LA-12.

### To `number-theory` (wave 3)

7. The explicit identification of the quadratic subfield of $\mathbb{Q}(\zeta_p)$
   as $\mathbb{Q}\big(\sqrt{(-1)^{(p-1)/2}p}\big)$ is **deferred to you**. GA-3
   proves that a unique quadratic subfield exists; naming it is a Gauss-sum
   computation that belongs with quadratic reciprocity.
8. **APPLIED 2026-08-14. Kronecker–Weber** is minted on GA-3 as
   `thm-kronecker-weber`; number theory cites it and owns its arithmetic
   consequences.
9. **APPLIED 2026-08-14.** The **closed form for the number of monic
   irreducibles over $\mathbb{F}_q$** needs Möbius inversion, published at
   snapshot 203 — above the Galois block but below this block. GA-3 proves only
   the divisor-sum and existence statements (§II.12.b item 6); number theory
   NT-9 now mints
   `cor-number-of-monic-irreducible-polynomials-over-a-finite-field` by citing
   that identity and the published inversion theorem.

### To `combinatorics` (wave 1, concurrent)

10. No conflict found. `incidence-algebras-and-mobius-inversion` is published at
    snapshot 203 with `cor-classical-mobius-inversion`; this lane does not touch
    it and only records that the Galois block sits below it and cannot cite it.

### To `group-theory` (wave 2)

11. AG-1…AG-4 stay with this track, per the seam contract. AG-4 as enriched now
    proves **Sylow I/II/III/III\***, the Frattini argument, the normaliser
    condition, the Sylow characterisation of nilpotence and the **Fitting
    subgroup**; the nilpotency *series* theory is published on AG-2. Build from
    there. **Schur–Zassenhaus is not scaffolded by this lane and is yours.**
12. `def-dihedral-group` is minted on **AG-3**, as $\mathbb{Z}/n\rtimes\mathbb{Z}/2$,
    with $D_n$ of order $2n$ (expansion file §II.2.b). The library currently uses
    "the dihedral group" in five published examples and defines it nowhere.

### To `monoidal-abelian-categories` (wave 1, concurrent)

13. The concrete tensor product of modules is **MOD-3**'s, and MOD-3 now also
    mints **`def-bimodule`** (expansion file §II.4.a.3). Cite both as the
    motivating example of a monoidal structure. MOD-2 has **published** the Four,
    Five and Snake lemmas and "enough injectives"; build on them rather than
    rebuilding.

### To `differential-geometry` (wave 3)

14. Not opened, per the seam contract: no Lie group, Lie algebra or abstract Lie
    structure theory appears anywhere in this lane's output. X-2 owns
    `def-semisimple-and-nilpotent-linear-endomorphisms` and
    `thm-additive-jordan-chevalley-decomposition` for a single operator on a
    finite-dimensional space; DG-30 cites them under R-5.

### Unresolved seams

15. **APPLIED 2026-08-14: GA-1 keeps the algebraic closure.** §II.2's GA-1 keeps it
    (~12 items) because `commutative-algebra` and `number-theory` both want
    $\overline{F}$ and no other track owns it. If the orchestrator cuts it, GA-1
    falls to about 30 items and **every later definition acquires an
    ambient-normal-extension hypothesis** — that consequence should be recorded
    in the decision rather than discovered during authoring. The owner chose
    the first course, so no ambient-normal-extension fallback is inserted.
16. **The concrete insoluble quintic is homed on X-1's companion**, not on GA-4's,
    because it needs $\mathbb{C}$ algebraically closed. GA-4 proves the transitive-
    subgroup lemma so that page has it. If the orchestrator re-orders the block
    relative to X-1, this pairing must move with it.
17. **Historical warning, superseded by item 18:** X-2's Cauchy interlacing and
    Weyl block was initially single-sourced (§II.12.b item 1).

18. **APPLIED 2026-08-14.** X-2's operator interlacing/Weyl material carries
    the binding second-independent-treatment gate in the source matrix and
    §II.12.b. No second locator was adjudicated by the reconciliation, so the
    builder must verify and record one before authoring rather than inventing a
    citation or silently dropping the results.
