# Algebra track expansion: advanced group theory, modules, the group algebra and representation theory

Prose scaffold, owner-commissioned 2026-07-28. Companion to
`research/plan-algebra-track.md` (which it EXTENDS and does not rewrite) and to
`research/plan-topology-set-theory-track.md` (which is authoritative for free
groups). Machine-readable half: `research/plan-spec.json`.

This file is NOT normative: `SCHEMA.md`, `CLAUDE.md`, `LEVELS.md` and
`ARCHITECTURE.md` win wherever they differ.

**AUTHORITY BOUNDARY (proposed owner decision AL-D8, below).** This file is
authoritative ONLY for the thirteen new A-pages it defines: **AG** (advanced
group theory, 4 A-pages), **MOD** (modules over a ring, 5 A-pages), **RT** (the
group algebra and representation theory, 4 A-pages) — 13 A-pages, **26 pages
with B companions**. It sits BESIDE `research/plan-algebra-track.md`, which
remains authoritative for AA-1…AA-15, NT-1…NT-3, LA-1…LA-12 and the carve-out
X-1/X-2 (spec ids `monoids-groups-and-subgroups` …
`the-spectral-theorem-and-singular-value-decomposition`). It sits BESIDE
`research/plan-topology-set-theory-track.md`, which remains authoritative for
FG-1/FG-2 (`free-groups-and-presentations`,
`free-products-and-amalgamation`) and for ST/EU/HT. The only things this file
says about pages it does not own are the **amendments addressed to Alpha** in
§8. **Two scaffolds must never claim the same page.**

**ORDER-STALENESS WARNING.** Every order in this file is stated in the
**POST-splice** numbering of §4. Orders quoted inside `plan-algebra-track.md`
predate the FG splice and predate this one; orders quoted inside
`plan-topology-set-theory-track.md` predate this one. Recompute from
`plan-spec.json`; never quote an order from prose. Where this file needs to
name a page it does not own, it names the page by **spec id first** and gives
the order as `(old N → new M)`.

**NOTHING IN `items/`, `library/` OR `research/plan-spec.json` WAS TOUCHED BY
THIS FILE.** The splice is the orchestrator's job at step 4.

---

## 1. What was commissioned, and the reconciliation against disk

The owner's commission (2026-07-28), five items:

1. advanced group theory;
2. ring modules;
3. the group algebra;
4. representation theory of finite groups;
5. free groups, group presentations, and the universal properties of free
   groups and quotient groups, formally introduced.

Verified from `research/plan-spec.json` and from `items/` on 2026-07-28. The
reconciliation:

- **Item 5 is 85% already done and this file must not duplicate it.** Free
  groups, presentations, free products and amalgamated products were spliced
  into the spec TODAY at orders 56–59 and are scaffolded in
  `plan-topology-set-theory-track.md` §FG-1 and §FG-2. §6 below is the audit of
  exactly what they cover and the three things they do not.
- **Group actions, orbit–stabiliser, the class equation and the "$p$-group has
  nontrivial centre" lemma already exist in the plan** at
  `group-actions-and-cayleys-theorem` (38); cycle decomposition and
  $\operatorname{sgn}$ at `symmetric-groups-and-the-sign-homomorphism` (40);
  the **finite** abelian structure theorem at
  `the-structure-of-finite-abelian-groups` (36). None of these is re-scaffolded
  here; AG cites them.
- **Sylow, solvable, nilpotent, Jordan–Hölder, the derived series, semidirect
  products and the simplicity of $A_n$ exist nowhere** — no page, no item, no
  scaffold section. Grep of `items/`: zero hits for `sylow`, `solvab`,
  `nilpot`, `semidirect`, `jordan-h`. → **AG-1…AG-4**.
- **Modules exist nowhere.** Grep of `items/`: no `def-module`, no `-module`
  item of any kind; the only hits for "module" are `sources` entries pointing
  at the Wikipedia article *Direct sum of modules* on eight published
  linear-algebra items, and one Remark on the published
  `lem-adjoining-a-vector-outside-the-span` (order 70) saying that the field
  inverse "is the single place where a vector space over a field behaves better
  than a module over a ring". That Remark is TRUE and does not decay; it is
  also the natural backward anchor for MOD-1. → **MOD-1…MOD-5**.
- **Representation theory exists nowhere**, and neither does the group algebra.
  → **RT-1…RT-4**.
- **The $\ddagger$ catalogues say nothing about any of this.** Grep of
  `library/not-proved-here/*.md` for `sylow|representation theory|group
  algebra|maschke|wedderburn|burnside|solvable|nilpotent|semidirect|tensor
  product|module`: **zero matches**. So unlike TS-D1, this commission creates
  **no un-deferral ledger** — nothing published or drafted is discharged,
  amended or removed by it.
- **No published-claim decay was found.** The same grep over `items/*.md`
  returned only the `sources` lines above and the true Remark above. Per
  `LEVELS.md` §10b, **grep is the entry point and not the sweep**: a reading
  pass over the published algebra and linear-algebra pages is still owed at
  splice time, and the two recall tests named in `LEVELS.md` (`rem-choice-ledger`,
  `ex-p-adic-ultrametric`) apply.

---

## 2. What the spec already contains, band by band

The brief requires this enumerated before anything is proposed. All orders are
CURRENT (pre-splice); the post-splice value is given where it changes.

### Abstract algebra and number theory, orders 20–67 (unchanged by this splice)

| order | page id | what it establishes that this file consumes |
|---|---|---|
| 20 | `monoids-groups-and-subgroups` | equivalence relations and the partition theorem; binary operations, monoid, **group**, abelian group; $\operatorname{Sym}(X)$; generalised associativity and finite products in a monoid; integer powers; **subgroup**, subgroup criterion, generated subgroup, cyclic subgroup; **division with remainder in $\mathbb{Z}$**; **order of an element**, $\lvert G\rvert$; homomorphism (definition) |
| 22 | `divisibility-gcd-and-bezout` | $\lvert\cdot\rvert$ on $\mathbb{Z}$, divisibility, $\gcd$, **Bézout**, Euclidean algorithm, coprimality, lcm, $a\mathbb{Z}+b\mathbb{Z}=\gcd\mathbb{Z}$, **subgroups of $\mathbb{Z}$ are cyclic** |
| 24 | `primes-and-the-fundamental-theorem-of-arithmetic` | prime, Euclid's lemma, **FTA for $\mathbb{Z}$**, the **$p$-adic valuation $v_p$** (which is what makes "$\lvert G\rvert = p^n m$, $p \nmid m$" a definition rather than a gesture) |
| 26 | `congruences-and-the-chinese-remainder-theorem` | $\mathbb{Z}/n$ with both operations, $(\mathbb{Z}/n)^\times$, the unit criterion, $\varphi$, **CRT**, $\mathbb{Z}/p$ is a field |
| 28 | `cosets-and-lagranges-theorem` | cosets, index, **Lagrange**, $g^{\lvert G\rvert}=e$, Fermat, Euler; and the **finite counting lemmas** the track mints here and forbids re-minting |
| 30 | `normal-subgroups-and-quotient-groups` | **normal subgroup**, the centre, **the commutator subgroup**, **the quotient group $G/N$**, the canonical projection |
| 32 | `group-homomorphisms-and-the-isomorphism-theorems` | kernel, image, **first/second/third isomorphism theorems**, correspondence theorem, isomorphism, **$\operatorname{Aut}(G)$**, inner automorphisms, conjugation |
| 34 | `cyclic-groups-and-direct-products` | classification of cyclic groups, subgroups of $\mathbb{Z}/n$, $\operatorname{ord}(g^k)$, **external and internal direct products** and the recognition criterion |
| 36 | `the-structure-of-finite-abelian-groups` | primary decomposition, **invariant factors for FINITE abelian groups**, uniqueness |
| 38 | `group-actions-and-cayleys-theorem` | **action**, $G \to \operatorname{Sym}(X)$, orbit, stabiliser, **orbit–stabiliser**, Cayley, conjugacy classes, **centraliser and normaliser**, **the class equation**, a $p$-group has nontrivial centre |
| 40 | `symmetric-groups-and-the-sign-homomorphism` | $S_n$, $\lvert S_n\rvert = n!$, **disjoint cycle decomposition and its uniqueness**, transposition factorisation, **$\operatorname{sgn}$**, $A_n$, $\lvert A_n\rvert = n!/2$, $A_n \trianglelefteq S_n$ |
| 42 | `rings-subrings-and-integral-domains` **(PUBLISHED)** | **ring** (unital), commutative ring, unit, $R^\times$, zero divisor, **integral domain**, **division ring**, the **quaternions**, ordered ring, subring, subfield, ring homomorphism, product rings, **the ring $R^X$ of functions**, characteristic |
| 44 | `ideals-and-quotient-rings` | **ideal**, generated and principal ideals, **$R/I$**, isomorphism theorems for rings, **prime and maximal ideals**, $R/M$ field iff $M$ maximal, **existence of maximal ideals by Zorn** |
| 46 | `euclidean-domains-pids-and-unique-factorisation` | irreducible and prime elements, **Euclidean domain**, **PID**, PID ⟹ UFD, gcd via ideals, $\mathbb{Z}$ is Euclidean |
| 48 | `polynomial-rings-and-roots` | $R[x]$ by finitely supported sequences, degree, **the evaluation homomorphism and its universal property**, division in $F[x]$, $F[x]$ is a PID, the factor theorem, **at most $\deg f$ roots over a domain**, $R[x_1,\dots,x_n]$ |
| 50 | `field-extensions-and-the-complex-numbers` | $F[x]/(p)$ is a field iff $p$ irreducible; **$\mathbb{C} := \mathbb{R}[x]/(x^2+1)$**, $i$, real and imaginary parts, **conjugation as a field automorphism**, $\lvert z\rvert$ and $\lvert zw\rvert=\lvert z\rvert\lvert w\rvert$, every complex number has a square root, $\mathbb{F}_p$ |
| 52 | `splitting-fields` | Kronecker, **splitting field** existence and uniqueness up to $F$-isomorphism |
| 54 | `symmetric-polynomials` | elementary symmetric polynomials, Vieta, **the fundamental theorem of symmetric polynomials** |
| 56 / 58 | `free-groups-and-presentations`, `free-products-and-amalgamation` | see §6 |
| **60–67** | *(empty — the reserved band)* | **claimed by AG-1…AG-4** |

### Linear algebra, orders 68–93 (unchanged by this splice)

| order | page id | what it establishes that this file consumes |
|---|---|---|
| 68 | `vector-spaces-and-subspaces` **(PUBLISHED)** | **vector space over a field**, linear subspace, span, sum of subspaces, **internal direct sum** with the correct $n$-summand criterion |
| 70 | `linear-independence-bases-and-dimension` **(DRAFT on disk, both pages)** | linear independence, **basis** (`def-linear-basis`), coordinates, Steinitz exchange, **dimension for finitely generated spaces**, extension to a basis, the dimension formula, $\dim F^n = n$, **every vector space has a basis (Zorn)** |
| 72 | `linear-maps-rank-nullity-and-quotient-spaces` | linear map, the universal property on a basis, kernel/image, **rank–nullity**, $\mathcal{L}(V,W)$, isomorphism, **quotient space $V/W$**, first isomorphism theorem for vector spaces |
| 74 | `matrices-and-the-matrix-of-a-linear-map` | matrices, the product, $M_n(F)$ is a ring, **the matrix of a map w.r.t. ordered bases**, change of basis, **similarity**, transpose, $GL_n(F)$, **trace and its similarity-invariance** |
| 76 | `gaussian-elimination-and-row-reduction` | elementary matrices, **RREF and its uniqueness**, **rank**, row rank $=$ column rank, solution sets |
| 78 | `determinants-of-matrices-over-a-commutative-ring` | multilinear/alternating/normalised, **the Leibniz formula**, existence and **uniqueness** of $\det$ **over a commutative ring**, $\det(AB)=\det A\det B$ |
| 80 | `the-determinant-of-a-linear-operator` | $\det T$ basis-independent, $A$ invertible iff $\det A \in R^\times$, cofactors, **the adjugate and $A\operatorname{adj}(A)=(\det A)I$**, Cramer |
| 82 | `eigenvalues-eigenvectors-and-the-characteristic-polynomial` | eigenvalue/vector/space, **$\chi_A(x)=\det(xI-A) \in F[x]$**, similarity-invariance, algebraic and geometric multiplicity |
| 84 | `diagonalisation-and-the-minimal-polynomial` | diagonalisable, **the minimal polynomial** as the monic generator of the annihilator ideal, $\mu \mid \chi$, **Cayley–Hamilton**, **diagonalisable iff $\mu$ splits with distinct roots**, primary decomposition |
| 86 | `triangularisation-and-jordan-canonical-form` | triangularisable iff $\chi$ splits, generalised eigenspaces, **Jordan form and its uniqueness**, similar iff same Jordan form |
| 88 | `dual-spaces-bilinear-forms-and-inertia` | $V^*$, dual basis, annihilators, the transpose, bilinear and quadratic forms, congruence, Sylvester |
| 90 | `inner-product-spaces-and-orthogonality` | **real and complex inner products**, the induced norm, **Cauchy–Schwarz**, orthonormal bases, Gram–Schmidt, $V=W\oplus W^\perp$, orthogonal projection, **the adjoint** |
| 92 | `algebraic-extensions-degree-and-finite-fields` | $[K:F]$, the tower law, algebraic elements, the minimal polynomial of an element, **finite fields** |
| **94–97** | *(empty — reserved)* | **NOT claimed here. Left for Galois theory**, per D2 |
| 125 / 127 | `the-fundamental-theorem-of-algebra`, `the-spectral-theorem-and-singular-value-decomposition` | **$\mathbb{C}$ is algebraically closed** and every operator on a nonzero finite-dimensional complex space has an eigenvalue |

### The dependency answer, stated plainly

- **AG needs from the above:** 28 (Lagrange, counting), 30 (quotients,
  commutator subgroup, centre), 32 (isomorphism theorems, $\operatorname{Aut}$,
  conjugation), 34 (direct products), 38 (actions, orbit–stabiliser, class
  equation, normaliser), 40 (cycle decomposition, $\operatorname{sgn}$, $A_n$),
  24 ($v_p$, so that "$\lvert G\rvert = p^n m$" is a definition), 26
  ($(\mathbb{Z}/n)^\times \cong \operatorname{Aut}(\mathbb{Z}/n)$ for the
  semidirect examples). **Nothing above order 40.**
- **MOD needs from the above:** 30/32 (quotient groups and their isomorphism
  theorems, which the module versions are modelled on and must be reconciled
  with), 42 (rings), 44 (ideals, $R/I$, **maximal ideals by Zorn**), 46
  (PIDs, UFDs), 48 ($R[x]$, the evaluation homomorphism, root bounds), 68/70
  (vector spaces and dimension, for the dictionary and for rank invariance),
  72 (linear maps, quotient spaces), 74 (matrices, similarity, trace), 78/80
  (determinants over a **commutative ring**, the **adjugate** — the determinant
  trick lives on it), 82/84/86 (χ, μ, Cayley–Hamilton, Jordan form — all
  needed for the canonical-form agreement items), 36 (the finite abelian
  theorem, for the agreement item). **Nothing above order 93.**
- **RT needs from the above:** everything MOD needs, plus 50 ($\mathbb{C}$,
  conjugation, $\lvert z \rvert$), 90 (the complex inner product), 40
  ($\operatorname{sgn}$, for the sign representation), 38 (conjugacy classes),
  **and order 125 `the-fundamental-theorem-of-algebra`, which is the binding
  constraint on placement.**

---

## 3. The owner decisions this file proposes (AL-D1 … AL-D8)

Presented one at a time at step 3, each with approve / defer / follow-up.

**AL-D1. Advanced group theory takes the whole remaining low reserved band,
orders 60–67, and no renumber.** Four A-pages with B companions. This spends
the band on its reserved purpose (Sylow) **plus** the material the same
commission requires and D2 never named (Jordan–Hölder, solvable, nilpotent,
semidirect products, simplicity of $A_n$). **Orders 94–97 stay reserved for
Galois theory and are NOT touched by this file.** *If deferred:* AG cannot be
placed without a renumber, and Sylow — explicitly reserved for by D2 — stays
unbuilt.

**AL-D2. The structure theorem for FINITELY GENERATED abelian groups moves out
of the reserved band and becomes a corollary of the structure theorem for
finitely generated modules over a PID, on MOD-5.** This is not a change of
intent; it is the resolution of D2's own recorded obstruction. D2 says the
finitely generated case "needs free abelian groups and Smith normal form over
$\mathbb{Z}$, which cannot precede the matrix machinery at order 74" — and
orders 60–67 are all **below** 74, so the reservation was never satisfiable at
the reserved orders. MOD-5 sits above 74 and gets the theorem for free, over
every PID at once. A mandatory **agreement item** against
`the-structure-of-finite-abelian-groups` (order 36) discharges the D6
obligation. *If deferred:* the f.g. abelian theorem has no legal home anywhere
in the plan.

**AL-D3. Module theory is a five-page block inserted at orders 98–107,
immediately above the reserved Galois band and immediately below
`sequences-and-limits`.** Modules must sit **above** the vector-space pages,
not below: `vector-spaces-and-subspaces` (68) is **published** and
`linear-independence-bases-and-dimension` (70) is drafted on disk, ids are
immutable, and a module page below them would either re-mint "vector space" or
force a retro-fit of published items. Above them, "a module over a field is
exactly a vector space" is an ordinary backward dictionary item and the
two-notions defect is closed by construction. Old order 98 and above shift
**+10**. *If deferred:* nothing in the commission after item 1 can be placed.

**AL-D4. Representation theory sits ABOVE the fundamental theorem of algebra,
in a four-page block inserted immediately after the spectral-theorem pair.**
This is the decision the whole commission turns on, and the reason is
mechanical: **Schur's lemma in the form the theory uses ("a $G$-endomorphism of
an irreducible is a scalar") needs an eigenvalue to exist, hence an
algebraically closed field.** The library's only algebraically closed field is
$\mathbb{C}$, and "$\mathbb{C}$ is algebraically closed" is
`the-fundamental-theorem-of-algebra`, order 125 (new 135). There is no
algebraic-closure-of-an-arbitrary-field page anywhere in the plan, and
`splitting-fields` (52) gives splitting fields one polynomial at a time, which
is not enough: proving that a splitting field of $x^{\exp G}-1$ over
$\mathbb{Q}$ is a **splitting field for $G$** is Brauer's theorem and is far
out of scope. So the block goes above 135. Old order 129 and above shift a
further **+8**. *If deferred:* representation theory can only be stated with a
hypothesis ("let $k$ be algebraically closed with $\operatorname{char} k \nmid
\lvert G\rvert$") that **no object in the library satisfies**, which would ship
a page whose every theorem is vacuous in this library — the self-contained-scope
rule read backwards.

**AL-D5. Representation theory is developed over a general $k$ and instantiated
at $\mathbb{C}$, and it uses NO trigonometry, NO polar form and NO complex
exponential.** Measured: the only facts about roots of unity the block needs
are (i) $\lambda^n = 1 \Rightarrow \lvert\lambda\rvert = 1$ (from
`roots-and-rational-powers`, order 16, plus $\lvert zw\rvert = \lvert z\rvert
\lvert w\rvert$ at 50), (ii) $\lvert\lambda\rvert = 1 \Rightarrow \lambda^{-1}
= \overline{\lambda}$ (conjugation at 50), and (iii) $\lambda$ is a root of the
monic $x^n - 1 \in \mathbb{Z}[x]$, hence an algebraic integer. **No primitive
$n$th root of unity is ever named and $e^{2\pi i/n}$ never appears.** The block
is therefore independent of the concurrent complex-analysis scaffold and of the
trigonometry pages (old 157–168), and must be kept that way. Concretely: the
`requires` of every RT page names `field-extensions-and-the-complex-numbers`,
`the-fundamental-theorem-of-algebra` and
`inner-product-spaces-and-orthogonality`, and names no analysis page above
those.

**AL-D6. Every "$\rho(g)$ is diagonalisable" argument goes through Maschke and
Schur, never through the formal derivative.** The textbook route is
"$\mu_{\rho(g)} \mid x^n - 1$, which is separable because
$\gcd(x^n-1, nx^{n-1}) = 1$ in characteristic $0$" — and the **formal
derivative of a polynomial does not exist in this library**, at any order:
`polynomial-rings-and-roots` (48) does not list it. The in-scope route:
$\langle g\rangle$ is a finite abelian group, char $\mathbb{C} = 0$, so by
Maschke and Schur its irreducible representations are $1$-dimensional, so the
restriction of $\rho$ to $\langle g\rangle$ splits into lines and $\rho(g)$ is
diagonal in a suitable basis. This costs nothing and needs no new machinery.
*(Follow-up, not blocking: adding the formal derivative and the repeated-root
criterion to the order-48 scaffold would be independently useful — see the
amendment in §8. That page is UNBUILT, so it is a scaffold amendment and not a
published amendment.)*

**AL-D7. Induction of representations uses the FUNCTION model, not
$k[G]\otimes_{k[H]}W$.** The tensor model requires $k[G]$ as a
$(k[G],k[H])$-**bimodule**, and bimodules are dropped from MOD-3 (see denial
11). The function model — $\operatorname{Ind}_H^G W = \{f : G \to W \mid
f(hx) = h\,f(x)\}$ with $(g\cdot f)(x) = f(xg)$ — needs nothing but MOD-1 and
gives the induced character formula directly. The tensor description is a
Remark, with no numbered claim resting on it.

**AL-D8. This file sits beside `plan-algebra-track.md` and
`plan-topology-set-theory-track.md`** (authority boundary at the head of this
file). Alpha applies the §8 amendments to those files; this file never writes
them.

---

## 4. The renumber table (AL-D1, AL-D3, AL-D4)

Current spec: **230 pages**, orders 1–242, with 60–67 and 94–97 unoccupied.
After the splice: **256 pages**, top order **260**.

| old order | new order | pages |
|---|---|---|
| 1–59 | unchanged | everything up to and including the FG pair at 56–59 |
| — | **60–67** | **NEW: AG-1 A/B, AG-2 A/B, AG-3 A/B, AG-4 A/B** (empty band, no shift) |
| 68–93 | unchanged | the LA block and `algebraic-extensions-degree-and-finite-fields` |
| 94–97 | unchanged | **still RESERVED, still for Galois theory. Not touched.** |
| — | **98–107** | **NEW: MOD-1 A/B … MOD-5 A/B** |
| 98–128 | **+10** → 108–138 | `sequences-and-limits` (98→108) … `the-spectral-theorem-and-singular-value-decomposition-examples` (128→138). In particular `the-fundamental-theorem-of-algebra` 125→**135** and the spectral pair 127/128→**137/138** |
| — | **139–146** | **NEW: RT-1 A/B … RT-4 A/B** |
| 129–242 | **+18** → 147–260 | `monotone-functions-and-discontinuities` (129→147) … `applications-of-the-fundamental-group-examples` (242→260) |

Spot checks for the sweep that follows the splice: `sine-cosine-and-the-definition-of-pi`
157→175; `ordinals-and-transfinite-recursion` 183→201;
`topological-spaces-and-continuity` 189→207; `the-topology-of-euclidean-space`
197→215; the HT block 229–242→247–260. Every FG order (56–59) and every AG,
LA and AA order at or below 93 is **unchanged**.

Relative order is preserved everywhere, so **no existing citation can become
forward-pointing**, and no existing page's `requires` needs editing. This
splice creates **no `requires` edits owed on existing pages**: nothing already
in the spec depends on anything introduced here.

Per `LEVELS.md`: after the splice, grep the prose scaffolds for the word
"order" **and for bare numbers**, and verify every section heading against the
spec. Insertion 3 missed a capitalised `Orders N to M`, two bare
`(34)`-style parentheticals and a whole table column; the same sweep is owed
here, and it now has to cover `plan-topology-set-theory-track.md` as well.

**Concurrency warning for the orchestrator.** A homological-algebra scaffold
and a complex-analysis scaffold are being written against the same spec today.
If either also proposes an insertion, the shifts compose and **only one
renumber table may be applied at a time**; recompute the second from the spec
after the first lands, never from the second file's own table.

### The twenty-six pages at a glance

| new order | id | title | category | items (A/B) |
|---|---|---|---|---|
| 60 / 61 | `conjugacy-and-simplicity-in-the-symmetric-groups` | Conjugacy in $S_n$, Generation, and the Simplicity of $A_n$ | abstract-algebra | 15 / 10 |
| 62 / 63 | `composition-series-and-solvable-groups` | Composition Series, the Jordan–Hölder Theorem and Solvable Groups | abstract-algebra | 20 / 11 |
| 64 / 65 | `semidirect-products-and-automorphism-groups` | Semidirect Products, Automorphism Groups and Split Extensions | abstract-algebra | 17 / 12 |
| 66 / 67 | `sylow-theorems-and-nilpotent-groups` | Sylow's Theorems, $p$-Groups and Nilpotent Groups | abstract-algebra | 24 / 13 |
| 98 / 99 | `modules-and-module-homomorphisms` | Modules, Submodules, Quotient Modules and the Isomorphism Theorems | abstract-algebra | 24 / 13 |
| 100 / 101 | `free-modules-and-exact-sequences` | Free Modules, Exact Sequences, Projective and Injective Modules | abstract-algebra | 23 / 12 |
| 102 / 103 | `tensor-products-of-modules` | Tensor Products of Modules | abstract-algebra | 21 / 12 |
| 104 / 105 | `chain-conditions-and-semisimple-modules` | Chain Conditions, Semisimple Modules and the Wedderburn–Artin Theorem | abstract-algebra | 23 / 11 |
| 106 / 107 | `modules-over-a-pid-and-canonical-forms` | Modules over a Principal Ideal Domain and the Canonical Forms | abstract-algebra | 23 / 13 |
| 139 / 140 | `the-group-algebra-and-representations` | The Group Algebra and Representations of Finite Groups | abstract-algebra | 21 / 12 |
| 141 / 142 | `maschkes-theorem-and-complete-reducibility` | Maschke's Theorem, Complete Reducibility and the Structure of $k[G]$ | abstract-algebra | 19 / 11 |
| 143 / 144 | `characters-and-the-orthogonality-relations` | Characters and the Orthogonality Relations | abstract-algebra | 25 / 14 |
| 145 / 146 | `induced-representations-and-frobenius-reciprocity` | Induced Representations, Frobenius Reciprocity and Applications | abstract-algebra | 20 / 12 |

Every B companion is `<id>-examples`, kind `B`, same category. Totals: **275
A-items, 156 B-items, 431 items across 26 pages.** All pages are homed in the
existing `abstract-algebra` category — **no new index group, and no change to
the frozen `web/lib/library-categories.ts`** (the TS-D4 precedent).

---

## 5. Well-definedness obligations

Each is a **REQUIRED numbered item** on its page, never a parenthetical, per the
WORKFLOW definition-justification rule and the owner's standing requirement.

| # | page | the definition | what must be proved |
|---|---|---|---|
| 1 | 60 | **cycle type** of a permutation | the multiset of cycle lengths is independent of the disjoint-cycle decomposition — licensed by the **uniqueness** clause of the decomposition theorem at order 40. Without it "the cycle type" has no referent and the conjugacy theorem is not a statement |
| 2 | 62 | **the composition factors** of a group | Jordan–Hölder: a composition series exists (for a finite group) **and** the multiset of factors is unique up to isomorphism and order. This is the page's central obligation; it is what licenses the definite article, and it is proved via Zassenhaus + Schreier, never asserted |
| 3 | 62 | the derived series $G^{(n)}$ | each term is a subgroup, is normal (indeed characteristic) in $G$, and the recursion is legitimate — `thm-recursion` (published, order 6). The commutator subgroup itself is order 30 and is CITED, never re-minted |
| 4 | 62 | **abelianisation $G^{\mathrm{ab}} = G/G'$** | $G'$ is normal so the quotient exists (order 30), and the **universal property** (every homomorphism to an abelian group factors uniquely through $G^{\mathrm{ab}}$) — which consumes the quotient-group universal property, the gap identified in §6 |
| 5 | 64 | **external semidirect product $N \rtimes_\varphi H$** | the operation $(n_1,h_1)(n_2,h_2) := (n_1\varphi_{h_1}(n_2),\,h_1h_2)$ is associative and has identity and inverses — and **each step consumes the hypothesis that $\varphi$ lands in $\operatorname{Aut}(N)$ and is a homomorphism.** An action by mere bijections is not enough; the failure gets its own numbered guard |
| 6 | 64 | **internal semidirect product** | the recognition criterion ($N \trianglelefteq G$, $H \le G$, $NH=G$, $N\cap H=1$) yields an isomorphism with the external product, **both directions**, so "internal" and "external" are one notion and not two |
| 7 | 64 | $\operatorname{Inn}(G)$ and $\operatorname{Out}(G)$ | $\operatorname{Aut}(G)$ is a group under composition (order 32 supplies it — cite); $\operatorname{Inn}(G) \trianglelefteq \operatorname{Aut}(G)$; and $\operatorname{Inn}(G) \cong G/Z(G)$, the item every later semidirect computation uses |
| 8 | 66 | **Sylow $p$-subgroup** | the definition presupposes $\lvert G\rvert = p^n m$ with $p \nmid m$; that $n$ is well defined is exactly $v_p(\lvert G\rvert)$ from order 24 — **cite $v_p$, do not re-mint a second exponent** |
| 9 | 66 | $n_p$, the number of Sylow $p$-subgroups | the set of Sylow $p$-subgroups is a subset of the (finite) power set of $G$, hence finite, **before** it is counted; the finite counting lemmas are order 28's and are cited |
| 10 | 66 | **nilpotency class** | the lower and upper central series are legitimate recursions (upper: each $Z_{i+1}/Z_i$ is the centre of $G/Z_i$, so the correspondence theorem of order 32 is what makes $Z_{i+1}$ a subgroup of $G$); both terminate at the same index; **that common index is what "class" names**, and the coincidence is the numbered item |
| 11 | 98 | **quotient module $M/N$** | the induced action $r\cdot(m+N) := rm+N$ is representative-independent. **Contrast obligation, and it is not optional:** unlike $G/N$ (which needs normality) and $R/I$ (which needs absorption), **every** submodule works, and a numbered remark must say so — a reader who has met obligations #3 and #5 of the algebra track arrives expecting a condition and must be told there is none, and why |
| 12 | 98 | $\operatorname{Hom}_R(M,N)$ **as an $R$-module** | $(rf)(m) := r f(m)$ is $R$-linear **only when $R$ is commutative**; over a noncommutative $R$ it is an abelian group and nothing more. State the hypothesis where the structure is defined, not later |
| 13 | 98 | the **torsion submodule** $T(M)$ | it is a submodule **only when $R$ is a domain**; the $\mathbb{Z}/6$ witness on the B page is what makes the hypothesis mean something |
| 14 | 98 | modules over a field, and $\mathbb{Z}$-modules | two **proved dictionary items**: an $F$-module is exactly a vector space in the sense of the published `def-vector-space` (order 68), and a $\mathbb{Z}$-module is exactly an abelian group in the sense of the published `def-group` (order 20), **in both directions**. Asserting either in Remarks is the level-7 two-notions defect, this time at the top of the algebra track rather than the bottom |
| 15 | 100 | **the rank of a free module** | $R^m \cong R^n \Rightarrow m=n$ over a **nonzero commutative** ring, by reducing modulo a maximal ideal (Zorn, order 44) to a dimension over the field $R/\mathfrak{m}$ (order 70). The commutativity hypothesis is load-bearing; the noncommutative failure is recorded as a denial, never claimed |
| 16 | 100 | **integral element**, algebraic integer | $\alpha$ is integral over $R$ $\iff$ $R[\alpha]$ is a finitely generated $R$-module $\iff$ $\alpha$ lies in a faithful f.g. $R$-module — the determinant trick, consuming the **adjugate identity of order 80**. This equivalence is what makes "the algebraic integers form a ring" provable, and RT-4 rests on it |
| 17 | 102 | **$M \otimes_R N$** | THREE separate numbered obligations: (i) the construction exists (the free module on $M\times N$ modulo the balanced relations); (ii) the canonical map is $R$-balanced and has the universal property; (iii) **the universal property determines the pair $(M\otimes_R N, \otimes)$ up to a unique isomorphism commuting with the canonical maps.** (iii) is what licenses the definite article and it is an item, not a remark |
| 18 | 102 | the $R$-module structure on $M \otimes_R N$ | needs $R$ commutative, and the scalar action is itself **defined by the universal property**, not by a formula on elementary tensors |
| 19 | 102 | a map **out of** $M\otimes_R N$ | a numbered **guard**: a formula on elementary tensors does not define a map, because the elementary tensors are not a basis and an element's expression as a sum of them is not unique. Every construction on this page and every later use goes through the universal property. This is the single most common defect in written module theory |
| 20 | 104 | **semisimple module** | the three usual definitions (a sum of simple submodules / a direct sum of simple submodules / every submodule is a direct summand) are equivalent, proved **before** the word is used. The implication "sum of simples ⟹ direct sum of a subfamily" costs Zorn in general and the cost is stated in the item |
| 21 | 104 | the Wedderburn data $(n_i, D_i)$ | **uniqueness up to permutation**, which is what licenses reading the matrix sizes and division rings off a semisimple ring |
| 22 | 106 | **invariant factors and elementary divisors** | uniqueness. Existence alone is not the theorem — the same warning `plan-algebra-track.md` records at its obligation #30 for the finite abelian case, now at full generality |
| 23 | 106 | **the $F[x]$-module $V_T$** | $p(x)\cdot v := p(T)v$ really is a module structure, via the **evaluation homomorphism $F[x] \to \operatorname{End}_F(V)$** of order 48 (cite; do not build a second evaluation); and $V_T$ is finitely generated (any $F$-basis generates) and torsion (Cayley–Hamilton, order 84, or the minimal polynomial) |
| 24 | 106 | **rational canonical form** | existence **and** uniqueness (the invariant factors are determined by the similarity class), which is what makes it a *canonical* form rather than merely a normal form |
| 25 | 106 | Jordan canonical form, second proof | an **AGREEMENT item** against `triangularisation-and-jordan-canonical-form` (old 86, unchanged): the elementary-divisor construction gives the same blocks as the generalised-eigenspace construction. D6 pattern; a Remarks assertion that two *proved* theorems coincide is worse than the level-7 defect, not better |
| 26 | 106 | f.g. abelian groups | an **AGREEMENT item** against `the-structure-of-finite-abelian-groups` (order 36): specialising $R=\mathbb{Z}$ and restricting to finite $M$ recovers exactly that theorem, invariant factors matching invariant factors |
| 27 | 139 | **the group algebra $k[G]$** | the convolution product is well defined on finite formal sums, is $k$-bilinear, and is **associative** — associativity inherited from $G$ through the universal property of the free module (MOD-2), **not** checked on general elements; the identity is $1_k\,e_G$; and $k[G]$ is commutative iff $G$ is abelian |
| 28 | 139 | representations $=$ $k[G]$-modules | a **PROVED dictionary in both directions**, for objects *and* morphisms, stated once and thereafter used to license every translation. This is the anti-two-notions obligation of the block, and every later theorem is stated on exactly one side |
| 29 | 139 | $\deg\rho$, and the finite-dimensionality convention | representations are finite-dimensional **by convention on this block**, and the convention is a numbered item with its reason, because "there are finitely many irreducibles, each finite-dimensional" is later **proved** from the regular representation and must not be quietly assumed here |
| 30 | 141 | **Maschke's averaging idempotent** | $\frac{1}{\lvert G\rvert}\sum_{g} \rho(g)\,p_0\,\rho(g)^{-1}$ requires $\lvert G\rvert\cdot 1_k$ to be a **unit of $k$**, i.e. $\operatorname{char} k \nmid \lvert G\rvert$. The hypothesis goes in the **Statement and in the title**; the characteristic-$p$ failure is a numbered counterexample on the B page, not a caveat in Remarks |
| 31 | 143 | **the character $\chi_V$** | two things: the trace is independent of the chosen basis (similarity-invariance of $\operatorname{tr}$, order 74 — cite), **and** isomorphic representations have equal characters. Only then is $\chi_V$ attached to $V$ rather than to a matrix |
| 32 | 143 | **the inner product on class functions** | it is an inner product in the sense of the **planned** inner-product definition of `inner-product-spaces-and-orthogonality` (order 90, unbuilt — Beta pins the id at step 1 and does **not** mint a second notion) — conjugate-symmetric, positive definite — and the factor $1/\lvert G\rvert$ requires $\operatorname{char} k = 0$. Over $\mathbb{C}$ this is where the characteristic hypothesis is discharged once and for all, and the item must say so |
| 33 | 143 | **the character table** | rows and columns are both finite and equinumerous (RT-2), so the table is **square**; and the rows are indexed by isomorphism classes of irreducibles, which is well defined only because a representation is determined up to isomorphism by its character — so that theorem precedes the definition |
| 34 | 145 | **$\operatorname{Ind}_H^G W$** | independent of the chosen transversal of $H$ in $G$. Under AL-D7's function model this is automatic and the item records why; the induced-character formula's independence of the representatives summed over is a **separate** numbered step either way |

---

## 6. Free groups (owner item 5): what FG-1/FG-2 already cover, and the three gaps

**FG-1 (`free-groups-and-presentations`, order 56) and FG-2
(`free-products-and-amalgamation`, order 58) are authoritative and are NOT
re-scaffolded here.** Read in full, 2026-07-28. They already carry:

| owner's item 5, phrase by phrase | where it is |
|---|---|
| free groups | FG-1: words over $S \sqcup S^{-1}$, reduced words, $F(S)$ with associativity by **van der Waerden's trick** inside $\operatorname{Sym}(\text{reduced words})$; the reduction-terminates-uniquely normal-form theorem |
| rank | FG-1, finite case, by counting $\operatorname{Hom}(F(S),\mathbb{Z}/2)$. Infinite rank is a recorded denial (needs cardinal arithmetic at old 187) |
| **the universal property of free groups** | FG-1, a landmark: every map $S \to G$ extends to a unique homomorphism $F(S)\to G$ |
| group presentations $\langle S \mid R\rangle$ | FG-1, with the **normal closure** well-definedness obligation |
| the universal property of a presentation (von Dyck) | FG-1: a map $S \to G$ killing $R$ factors uniquely |
| every group is a quotient of a free group | FG-1, a landmark |
| free products, and of arbitrary families | FG-2, with the universal property (coproduct) and the normal-form theorem |
| amalgamated products, pushout universal property | FG-2, a landmark |

**Three things the commission asks for that FG-1/FG-2 do not supply.** None is a
new page; each is placed below.

1. **The universal property of the quotient group is missing from the plan
   entirely.** The factorisation theorem — *if $N \trianglelefteq G$ and
   $\varphi: G \to H$ kills $N$, then $\varphi$ factors uniquely through
   $\pi: G \to G/N$* — appears nowhere. `normal-subgroups-and-quotient-groups`
   (30) has $G/N$ and the projection; `group-homomorphisms-and-the-isomorphism-theorems`
   (32) has the three isomorphism theorems and the correspondence theorem, but
   **the factorisation itself is not listed**, and the first isomorphism theorem
   is not a substitute (it identifies $G/\ker\varphi$ with $\operatorname{im}
   \varphi$; it does not give a map out of $G/N$ for a general $N \subseteq
   \ker\varphi$). FG-1's von Dyck theorem consumes it. So does obligation #4
   above (abelianisation), so does every presentation computation, and so does
   MOD-1's quotient-module universal property, which is modelled on it.
   **Home: order 32, `group-homomorphisms-and-the-isomorphism-theorems`.**
   **This is a SCAFFOLD amendment, not a published amendment** — verified on
   disk 2026-07-28: order 32 has an **empty item list** in `plan-spec.json` and
   `library/abstract-algebra/` contains only the order-20/21 and order-42/43
   pages. Nothing is published, nothing is re-audited, no
   `verification.audited` is cleared. The amendment text is in §8.
2. **The same factorisation is owed in the ring, vector-space and module
   categories, and it is a four-way naming hazard.** `thm-quotient-universal-property`
   is **already taken** on disk — it is **published**, and it is the
   *topological* quotient (homed on `subspaces-products-and-quotients`, old
   189/191), as is `thm-quotient-canonical-factorisation` and
   `thm-coproduct-universal-property`. Ids are immutable on `main`. So the
   algebraic versions must be namespaced from the start:
   `thm-quotient-group-universal-property` (order 32),
   `thm-quotient-ring-universal-property` (order 44),
   `thm-quotient-space-universal-property` (order 72),
   `thm-quotient-module-universal-property` (MOD-1). Decide this at step 1;
   the bare id will be gone the moment anyone reaches for it.
3. **Free abelian groups have no home, and modules need them.** FG-1 gives the
   free group; nothing gives the free *abelian* group $\mathbb{Z}^{(S)}$ or its
   universal property, which is what the structure theorem over $\mathbb{Z}$
   and the $\mathbb{Z}$-module dictionary run on. **Home: MOD-2**, as the
   $R=\mathbb{Z}$ case of the free module, with a numbered item identifying
   $\mathbb{Z}^{(S)}$ with $F(S)^{\mathrm{ab}}$ (backward citation to FG-1 and
   to AG-2's abelianisation). This closes the loop the owner asked for: free
   objects and quotient objects, each with its universal property, in every
   category the library builds.

**Nothing in this file may re-mint $F(S)$, a presentation, a free product or an
amalgamated product.** AG-3's presentations of $D_n$ and $Q_8$, and RT-3's
$D_4$/$Q_8$ character tables, cite FG-1 (order 56 < 64 < 143) and never rebuild.

---

## 7. Scope denials

Dropped from the scaffold under the self-contained-scope rule, each with what
would license it. **A dropped result is deferred, not deleted** — the note is
what makes it recoverable.

1. **Burnside's $p^aq^b$ theorem.** The character-theoretic proof needs, past
   the integrality that IS in scope, the step "every conjugate of
   $\chi(g)/\chi(1)$ is again an average of $\chi(1)$ roots of unity", which
   runs through the **field automorphisms of $\mathbb{Q}(\zeta_m)$ permuting
   the roots of unity** and the norm $N(\alpha) = \prod_\sigma \sigma(\alpha)$.
   That is cyclotomic Galois theory. **Licensed by:** a cyclotomic-fields page
   proving $\operatorname{Gal}(\mathbb{Q}(\zeta_m)/\mathbb{Q}) \cong
   (\mathbb{Z}/m)^\times$ — i.e. the reserved Galois band at 94–97, which is
   **below** RT-4 at 145, so the licence is a pure addition with no renumber
   when it arrives. **What IS kept:** $\chi(1) \mid \lvert G\rvert$, whose
   proof needs only MOD-4's integrality, the rational-root corollary (order
   24) and column orthogonality — all in scope.
2. **Feit–Thompson** (odd order ⟹ solvable). Named in a Remark on AG-2 as the
   theorem that makes the odd-order case trivial and is not proved anywhere;
   no numbered claim rests on it. **Licensed by:** nothing in reach; it is a
   research-scale proof.
3. **Modular representation theory** (the case $\operatorname{char} k \mid
   \lvert G\rvert$): Brauer characters, blocks, decomposition matrices.
   Everything RT proves carries the characteristic hypothesis explicitly and
   the failure case appears **only** as the numbered counterexample on RT-2's
   B page. **Licensed by:** a modular-representation track.
4. **Representations of infinite, compact or Lie groups; Peter–Weyl; Haar
   measure.** Measure theory and functional analysis;
   `deferred-measure-and-integration` and `deferred-functional-analysis`
   already exist. **Licensed by:** those tracks.
5. **Mackey's irreducibility criterion and the Mackey double-coset formula.**
   Not commissioned; they need double cosets and a long computation.
   **Licensed by:** an extension of RT-4.
6. **Artin's and Brauer's induction theorems.** Same. **Licensed by:** the
   character ring and (for Brauer) elementary subgroups.
7. **Wedderburn's little theorem** (a finite division ring is a field). It is a
   pretty companion to Wedderburn–Artin but its proof needs **cyclotomic
   polynomials over $\mathbb{Z}$** and the bound $\lvert\Phi_n(q)\rvert > q-1$;
   $\Phi_n$ exists nowhere in the plan. **Licensed by:** a cyclotomic page in
   the Galois band. Not commissioned; dropped.
8. **The Jacobson radical, and the structure theory of non-semisimple Artinian
   rings.** MOD-4 defines "semisimple ring" as *every module is semisimple*
   (equivalently, ${}_RR$ is semisimple) and proves Wedderburn–Artin from that,
   **avoiding the radical entirely**. This is the honest reading of the owner's
   "as far as scope allows". **Licensed by:** a noncommutative-ring-theory page.
9. **Ext, Tor, derived functors, injective hulls, projective resolutions and
   everything else homological.** **Explicitly not claimed by this file** — a
   homological-algebra scaffold is being written concurrently and MOD-1…MOD-3
   exist to feed it; see §9.
10. **Commutative algebra proper**: localisation, the field of fractions
    beyond the amendment in §8, Nakayama's lemma, the Hilbert basis theorem,
    primary decomposition, integral closure and Noether normalisation, modules
    over a Dedekind domain. Not commissioned. **Licensed by:** a commutative
    algebra track. (MOD-4 keeps only the determinant trick and "the integral
    elements form a ring", because RT-4 needs them and nothing else does.)
11. **Bimodules and tensor products over noncommutative rings as $R$-modules.**
    MOD-3 builds $M\otimes_R N$ for a right module and a left module over any
    $R$ (an abelian group) and puts an **$R$-module structure on it only when
    $R$ is commutative**. This is why AL-D7 uses the function model for
    induction. **Licensed by:** a bimodules page.
12. **Rank invariance over a noncommutative ring.** It is FALSE in general
    (rings without invariant basis number). Obligation #15 therefore states
    commutativity as a hypothesis, and the failure is **named in a Remark and
    not claimed**, since the standard witness (an endomorphism ring of an
    infinite-rank free module) is a page of machinery. **Licensed by:** an IBN
    page.
13. **Aut$(S_n) \cong S_n$ for $n \ne 6$, and the exceptional outer
    automorphism of $S_6$.** A genuinely hard classification; not commissioned.
    **Licensed by:** a dedicated page. AG-3 states $\operatorname{Inn}(G)
    \cong G/Z(G)$ and computes $\operatorname{Aut}(\mathbb{Z}/n)$ and
    $\operatorname{Aut}(\mathbb{Z}/p \times \mathbb{Z}/p)$, and stops there.
14. **Schur–Zassenhaus, the Schur multiplier, group cohomology and the
    classification of extensions beyond the split case.** AG-3 does split
    extensions (semidirect products) only, and says so. **Licensed by:** group
    cohomology, which is homological algebra.
15. **Krull–Schmidt.** Not commissioned; it needs indecomposable
    decompositions and Fitting's lemma. **Licensed by:** an extension of MOD-4.
16. **The classification of groups of order $n$ for general $n$.** AG-4 does
    $p$, $p^2$, $pq$ and a short list of non-simplicity results, and the B page
    tabulates orders up to 15. Anything past that is a project, not a page.

---

## 8. Amendments to other scaffolds (addressed to Alpha; this file never writes them)

All four target pages are **UNBUILT** — verified from disk 2026-07-28, each has
an empty item list in `plan-spec.json` and no file under `library/`. So these
are **scaffold amendments**, not published amendments: nothing is re-audited and
nothing waits for a publish commit. Alpha applies them to
`research/plan-algebra-track.md`.

1. **AA-4, `group-homomorphisms-and-the-isomorphism-theorems` (order 32):
   ADD the universal property of the quotient group**, as
   `thm-quotient-group-universal-property` — *if $N \trianglelefteq G$ and
   $\varphi : G \to H$ satisfies $N \subseteq \ker\varphi$, there is a unique
   homomorphism $\bar\varphi : G/N \to H$ with $\bar\varphi \circ \pi =
   \varphi$; and $\ker\bar\varphi = \ker\varphi / N$*. The first isomorphism
   theorem then becomes its corollary rather than its substitute. This is owner
   item 5 and it is consumed by FG-1 (56), AG-2 (62), MOD-1 (98) and every
   presentation computation in the library. See §6.1.
2. **AA-9, `ideals-and-quotient-rings` (order 44) and LA-3,
   `linear-maps-rank-nullity-and-quotient-spaces` (order 72): ADD the matching
   factorisation theorems**, `thm-quotient-ring-universal-property` and
   `thm-quotient-space-universal-property`, with the **namespaced ids** of
   §6.2 — the bare `thm-quotient-universal-property` is published and
   topological.
3. **AA-10, `euclidean-domains-pids-and-unique-factorisation` (order 46): ADD
   the field of fractions of an integral domain.** Verified: it exists nowhere
   in the plan. `Frac(R)` is wanted by MOD-5 (the standard proof that a f.g.
   torsion-free module over a PID is free passes through it, as does "rank" for
   modules over a domain), and it is elementary at order 46 — the equivalence
   relation on $R \times (R\setminus\{0\})$, representative-independence of both
   operations (**a well-definedness obligation in the exact shape of NT-3's
   #28/#29**), the embedding $R \hookrightarrow \operatorname{Frac}(R)$, and the
   universal property. It also owes a **dictionary item against the published
   $\mathbb{Q}$**: $\operatorname{Frac}(\mathbb{Z}) \cong \mathbb{Q}$, in the
   D6 style, because `def-rationals` is published at order 7 and a silent second
   construction is the two-notions defect. *If AA-10 declines it, MOD-5 must
   take the choice-free induction route instead and record the substitution.*
4. **AA-11, `polynomial-rings-and-roots` (order 48): ADD the formal derivative
   and the repeated-root criterion** ($\alpha$ is a repeated root of $f$ iff
   $f(\alpha)=f'(\alpha)=0$; $f$ is separable iff $\gcd(f,f')=1$). This is a
   *follow-up, not a blocker*: AL-D6 routes around its absence. It is worth
   having anyway — it is three items, it is what makes "$x^n-1$ has distinct
   roots in characteristic $0$" a one-liner, and the Galois band at 94–97 will
   need it outright.
5. **AA-7, `symmetric-groups-and-the-sign-homomorphism` (order 40): OPTIONAL —
   conjugacy by cycle type.** AG-1 mints it (obligation #1) and homes it on its
   own spine, which is legal and self-contained. If AA-7 would rather own it,
   AG-1 cites instead; the decision belongs to whichever page is scaffolded
   first, and **must be recorded**, because two homes for one theorem is the
   defect this library keeps paying for.
6. **General:** the orders quoted throughout `plan-algebra-track.md` predate
   the FG splice and now this one. Its banner already warns of two renumbers;
   this makes three. Recompute from the spec.

---

## 9. What this file provides to the concurrent homological-algebra scaffold

Stated explicitly so that agent can declare `requires` against real page ids
rather than guessing. Everything below is on an **A page**, so it is citable
(B pages are leaves).

| what it needs | page it comes from | new order |
|---|---|---|
| $R$-module, submodule, submodule criterion, generated submodule | `modules-and-module-homomorphisms` | 98 |
| **quotient module** and its universal property | same | 98 |
| module homomorphism, kernel, image, **cokernel**, $\operatorname{Hom}_R(M,N)$, $\operatorname{End}_R(M)$ | same | 98 |
| direct sum and direct product (internal and external, arbitrary families) | same | 98 |
| the isomorphism theorems and the correspondence theorem for modules | same | 98 |
| **free module**, its universal property, every module is a quotient of a free module (**enough projectives**) | `free-modules-and-exact-sequences` | 100 |
| **exact sequence, short exact sequence, the splitting lemma** | same | 100 |
| **projective** and **injective** modules; Baer's criterion; $\operatorname{Hom}$ is left exact in each variable | same | 100 |
| **tensor product**, its universal property, right exactness, flatness, base change, **Hom–tensor adjunction** | `tensor-products-of-modules` | 102 |
| **enough injectives** (the character-module argument, which needs the adjunction, hence lives at 102 and not at 100) | same | 102 |
| Noetherian and Artinian modules; **Jordan–Hölder for modules**; semisimple modules; Schur's lemma | `chain-conditions-and-semisimple-modules` | 104 |

**Two constraints on that agent.** (i) Its pages must sit at order **> 107**,
or at **> 146** if it wants the group algebra as an example. (ii) If it also
proposes an insertion, the renumber tables compose — see the concurrency
warning in §4.

**Bimodules are NOT provided** (denial 11). If Ext/Tor over a noncommutative
ring is wanted, that agent must scaffold bimodules itself or restrict to
commutative $R$.

---

## 10. Choice-strength ledger

Where AC or a weak form is used, and which. The published baseline: **"every
vector space has a basis" is proved at order 70 and costs AC** (Zorn); the
finite-dimensional theory there is choice-free. AC, AC$_\omega$ and DC are the
adopted axioms and are the sole exemption to the self-contained-scope rule.

| result | cost | where |
|---|---|---|
| Jordan–Hölder, Schreier refinement, Zassenhaus | **none** (finite) | 62 |
| the derived and central series, solvability, nilpotency for finite groups | **none** | 62, 66 |
| Cauchy, Sylow I/II/III, all applications | **none** (finite actions and counting) | 66 |
| every module is a quotient of a free module | **none** — the free module on the underlying *set* of $M$ | 100 |
| every f.g. module has a maximal proper submodule | **Zorn (AC)**; and the statement is FALSE without "f.g." ($\mathbb{Q}$ as a $\mathbb{Z}$-module has no maximal submodule — a B-page counterexample) | 100 |
| **rank invariance for free modules over a commutative ring** | **Zorn (AC)**, via existence of a maximal ideal at order 44. For a free module of finite rank over a **field** it is choice-free (Steinitz, order 70), and the item must say which case costs what | 100 |
| Baer's criterion; every module embeds in an injective | **Zorn (AC)** | 100, 102 |
| "a sum of simple submodules is a direct sum of a subfamily" | **Zorn (AC)** in general; **choice-free** for a module of finite length, which is the only case $k[G]$ needs ($\dim_k k[G] = \lvert G\rvert$). State both, and let RT cite the finite case | 104 |
| Wedderburn–Artin for a semisimple **Artinian** ring | **choice-free** given the finite-length hypothesis | 104 |
| the structure theorem over a PID, f.g. case | **none** | 106 |
| Maschke, Schur, complete reducibility, all orthogonality relations, character tables, Frobenius reciprocity | **none** | 139–146 |

**Reading:** the entire representation-theoretic payload is choice-free. The
choice cost of this expansion sits in exactly three places — maximal
submodules, rank invariance, and injectives — all of them on MOD pages, all of
them stated in the Statement and not in Remarks.

---

# 11. The pages

Format per page: order, id, title, category, `requires` (direct, as page ids;
Beta computes the closure), then **DEFS / THMS / FS / B / CEX**, traps, and an
explicit forward-reference statement. Item ids are suggestions for step 1, not
commitments, except where a well-definedness row or a naming hazard fixes one.
Every A page has its `-examples` companion; **B pages are leaves** — nothing
outside a B page may cite an item homed there. Target sizes: **A 12–25, B
8–20**; `validate-plan` warns above 30.

---

## AG-1. Conjugacy in $S_n$, Generation, and the Simplicity of $A_n$

- **order 60** (the bottom of the reserved band; nothing here needs anything
  above order 40, so it takes the lowest free slot and every later AG page can
  cite it)
- **id** `conjugacy-and-simplicity-in-the-symmetric-groups`
- **category** `abstract-algebra`
- **`requires`** `symmetric-groups-and-the-sign-homomorphism` (40)
- **estimate** A 15, B 10

**DEFS.** cycle type of a permutation, as the multiset of lengths in the
disjoint-cycle decomposition (**well-definedness #1**); partition of $n$;
$3$-cycle; simple group (minted here — it is used by every later AG page and
by MOD-4's simple modules, which cites it as the analogue).

**THMS.** the conjugation formula $\sigma(a_1\cdots a_k)\sigma^{-1} =
(\sigma a_1 \cdots \sigma a_k)$; **two permutations are conjugate in $S_n$ iff
they have the same cycle type** (landmark); the conjugacy classes of $S_n$ are
indexed by partitions of $n$; $S_n$ is generated by transpositions (cite order
40, do not re-prove), by adjacent transpositions, and by $(1\,2)$ together with
an $n$-cycle; **$A_n$ is generated by $3$-cycles** for $n \ge 3$; for $n \ge 5$
**all $3$-cycles are conjugate in $A_n$** (the extra freedom that the sign
costs is bought back by a disjoint transposition — the step every textbook
rushes); **a normal subgroup of $A_n$ containing a $3$-cycle is all of $A_n$**
($n\ge5$); **$A_n$ is simple for $n \ge 5$** (landmark; the standard case
analysis on the cycle type of a non-identity element of a normal subgroup);
$A_5$ is the smallest non-abelian simple group **is NOT claimed** (it needs an
order-by-order argument; see traps); the centre of $S_n$ is trivial for
$n \ge 3$; the derived subgroup of $S_n$ is $A_n$ for $n \ge 5$, and of $A_n$
is $A_n$ for $n \ge 5$ (this is the item AG-2 consumes to prove $S_n$ is not
solvable).

**FS.** $A_n$ is simple for every $n$ (refuted at $n=4$ by the Klein
four-subgroup $V \trianglelefteq A_4$, which is where the $n\ge5$ hypothesis
lives); permutations with the same cycle type are conjugate **in $A_n$**
(refuted by the two classes of $5$-cycles in $A_5$ — the splitting phenomenon,
and it is worth stating because the character table of $A_5$ later needs it,
though $A_5$'s table itself is not claimed); every normal subgroup of $S_n$ is
$1$, $A_n$ or $S_n$ — this is **TRUE for $n\ne4$ and false at $n=4$**, so it is
stated as a theorem with the hypothesis, and the `fs-` is the unhypothesised
form.

**B.** the conjugacy classes of $S_4$ and $S_5$ tabulated with class sizes,
cross-checked against $\sum \lvert C\rvert = n!$; an explicit conjugating
permutation computed for a given pair of same-type permutations; $V
\trianglelefteq A_4$ written out; the $3$-cycles of $A_5$ shown conjugate;
$\operatorname{sgn}$ of an $n$-cycle recomputed as a check (cite order 41's
item if it exists rather than duplicating — **check on disk at step 1**).

**Traps.** (i) The class-size computation is orbit–stabiliser with the
centraliser as stabiliser: cite order 38, do not re-derive. (ii) "All
$3$-cycles are conjugate in $A_n$ for $n\ge5$" is where the proof of simplicity
actually lives; do not compress it. (iii) **"$A_5$ is the smallest non-abelian
simple group" is dropped** — it needs Sylow (order 66, later) plus a sweep of
orders below 60, and stating it here would be a title asserting more than the
proof gives, the class `LEVELS.md` §10a exists for. (iv) The cycle-type
conjugacy theorem may instead be homed at order 40; see amendment 5 in §8, and
**record whichever is chosen**.

**Amendments (Alpha, `frontier-11` step 4, 2026-08-12). Orders in this file are
pre-`frontier-11`; `research/plan-spec.json` puts this pair at 64/65 and its
prerequisite at 44.**

1. **Trap (iv) is now answered, as it asked to be.** The cycle-type conjugacy
   theorem is homed **on this page**, not on the sign page: the scaffold carries
   `lem-conjugating-a-cycle-relabels-its-entries` and
   `thm-symmetric-permutations-are-conjugate-iff-same-cycle-type` here, and the
   prerequisite page keeps only the disjoint-cycle decomposition, transposition
   factorisation and $\operatorname{sgn}$ it already publishes. Later pages cite
   this page for conjugacy.
2. **Cycle type is the published MULTIPLICITY TUPLE $(c_1,\dots,c_n)$ with
   $\sum_k k c_k = n$**, per `def-permutation-support-disjoint-cycles-and-cycle-type`,
   not the multiset/partition the DEFS line above and most sources use. Every
   class-size, centraliser and class-equation formula on the page is written in
   the tuple form; a source formula stated for partitions is translated, not
   copied.
3. **Fixed points count as $1$-cycles in the $A_n$ class-splitting criterion,
   and omitting them makes the criterion FALSE.** The page proves the criterion
   itself — an $S_n$-class of an even permutation splits in $A_n$ exactly when
   all cycle lengths, $1$-cycles included, are odd and distinct — from a general
   index-two splitting lemma, rather than leaving the splitting phenomenon to
   the `fs-` item alone. "All $3$-cycles are conjugate in $A_n$ for $n\ge5$" is
   then the corollary at type $(3,1^{n-3})$, which does not split precisely
   because the fixed-point length is repeated.
4. **"An $n$-cycle and a transposition generate $S_n$" is false without a
   relative-position hypothesis.** The A page proves it for the standard pair
   $(1\,2\,\dots\,n)$ and $(1\,2)$, as the THMS line above already specifies;
   the B page refutes the unrestricted form.

**Forward references: NONE.**

---

## AG-2. Composition Series, the Jordan–Hölder Theorem and Solvable Groups

- **order 62**
- **id** `composition-series-and-solvable-groups`
- **category** `abstract-algebra`
- **`requires`** `conjugacy-and-simplicity-in-the-symmetric-groups` (60),
  `group-homomorphisms-and-the-isomorphism-theorems` (32),
  `cyclic-groups-and-direct-products` (34)
- **estimate** A 20, B 11

**DEFS.** subnormal series, normal series, factors of a series; refinement;
equivalent series; **composition series**; **the composition factors**
(**well-definedness #2**); the commutator $[x,y]$ and the commutator subgroup
(**cite order 30**, do not re-mint); **the derived series** $G^{(n)}$
(**#3**); **abelianisation** $G^{\mathrm{ab}}$ (**#4**); **solvable**; derived
length; characteristic subgroup.

**THMS.** a characteristic subgroup of a normal subgroup is normal (the lemma
the derived series needs); $G'$ is characteristic; **$G/N$ is abelian iff
$G' \subseteq N$**, and the **universal property of the abelianisation**
(consumes the §8.1 amendment); **the Zassenhaus (butterfly) lemma**;
**the Schreier refinement theorem**; **the Jordan–Hölder theorem** (landmark,
#2); every finite group has a composition series; the composition factors are
simple; $G$ is solvable iff $G^{(n)}=1$ for some $n$; subgroups and quotient
groups of a solvable group are solvable; **if $N$ and $G/N$ are solvable so is
$G$** (the extension property, which distinguishes solvable from nilpotent —
say so, since AG-4 proves nilpotency has no such property); a finite group is
solvable iff its composition factors are cyclic of prime order; abelian ⟹
solvable; **$S_n$ is not solvable for $n \ge 5$** (from AG-1's derived-subgroup
theorem, or from $A_n$ simple non-abelian); $S_3$ and $S_4$ **are** solvable,
with their derived series computed on the A page since AG-4 cites them.

**FS.** a group with a normal subgroup $N$ such that $N$ and $G/N$ are simple
has exactly two composition series (refuted by $\mathbb{Z}/2\times\mathbb{Z}/2$,
which has three); every group has a composition series (refuted by
$(\mathbb{Z},+)$ — the item that makes "finite" in Jordan–Hölder mean
something); solvable implies abelian ($S_3$); the composition factors determine
the group ($\mathbb{Z}/4$ vs $\mathbb{Z}/2\times\mathbb{Z}/2$ — the honest
statement of what Jordan–Hölder does and does not give, and it belongs on the
spine as a Remark plus here as an `fs-`).

**B.** the composition series of $\mathbb{Z}/12$ enumerated, all of them, with
the factors matched up as Jordan–Hölder promises; the derived series of $S_4$
computed ($S_4 \rhd A_4 \rhd V \rhd 1$); the abelianisation of $S_n$ is
$\mathbb{Z}/2$; the abelianisation of a free group $F(S)$ is free abelian —
**deferred to MOD-2**, which is where free abelian groups live (recorded here
so nobody plants it at 63 with nothing to cite); a solvable group that is not
nilpotent ($S_3$) — **deferred to AG-4's B page**, where "nilpotent" exists.

**Traps.** (i) Zassenhaus is the whole content of Schreier and hence of
Jordan–Hölder; it is one item and it is long. Do not merge it into the
refinement theorem. (ii) Every use of "the" composition factors after #2 must
cite #2. (iii) Feit–Thompson is denial 2: it may be named in Remarks and
nothing may rest on it. (iv) The extension property for solvable groups uses
the correspondence theorem (order 32); cite it.

**Forward references: NONE load-bearing.** A Remarks-only pointer to AG-4 for
nilpotency is permitted once AG-4's items are planned, `forward_refs`-declared.

---

## AG-3. Semidirect Products, Automorphism Groups and Split Extensions

- **order 64**
- **id** `semidirect-products-and-automorphism-groups`
- **category** `abstract-algebra`
- **`requires`** `composition-series-and-solvable-groups` (62),
  `congruences-and-the-chinese-remainder-theorem` (26),
  `free-groups-and-presentations` (56)
- **estimate** A 17, B 12

**DEFS.** $\operatorname{Aut}(G)$ (cite order 32), $\operatorname{Inn}(G)$,
$\operatorname{Out}(G)$ (**#7**); action of $H$ on $N$ by automorphisms;
**external semidirect product $N\rtimes_\varphi H$** (**#5**); **internal
semidirect product** (**#6**); split short exact sequence of groups /
splitting homomorphism; the holomorph.

**THMS.** #7's three items, ending in $\operatorname{Inn}(G)\cong G/Z(G)$;
$\operatorname{Aut}(\mathbb{Z}/n)\cong(\mathbb{Z}/n)^\times$ (cites order 26,
which is the whole reason 26 is in `requires`);
$\operatorname{Aut}(\mathbb{Z}/p\times\mathbb{Z}/p) \cong GL_2(\mathbb{F}_p)$
— **DROPPED unless order 74's matrices are wanted as a `requires`**; keep the
weaker $\lvert\operatorname{Aut}(\mathbb{Z}/p\times\mathbb{Z}/p)\rvert =
(p^2-1)(p^2-p)$ by counting ordered bases, which needs nothing (record the
drop); the recognition criterion #6; $N\rtimes_\varphi H$ is a direct product
iff $\varphi$ is trivial; $\varphi$ and $\varphi'$ differing by an automorphism
of $H$ or an inner automorphism of $N$ give isomorphic semidirect products (the
lemma that stops AG-4's classifications from over-counting); **the dihedral
group $D_n := \mathbb{Z}/n \rtimes \mathbb{Z}/2$** with the inversion action,
its order $2n$, its presentation $\langle r,s \mid r^n, s^2, srs^{-1}r\rangle$
(citing FG-1's von Dyck theorem — this is why order 56 is in `requires`), and
its centre; **the quaternion group $Q_8$**, constructed inside the published
quaternions $\mathbb{H}$ (order 42, **A-page spine**, so the citation is legal)
as $\{\pm1,\pm i,\pm j,\pm k\}$, with its presentation, and **the theorem that
$Q_8$ is NOT a semidirect product of proper subgroups** (every subgroup
contains $-1$) — the item that makes semidirect products a real hypothesis and
that RT-3's $D_4$/$Q_8$ comparison needs.

**FS.** every short exact sequence of groups splits ($Q_8$, or
$\mathbb{Z}/4 \to \mathbb{Z}/2$); an extension of $N$ by $H$ is determined by
$N$ and $H$ ($D_4$ vs $Q_8$ vs $\mathbb{Z}/8$ vs $\mathbb{Z}/4\times
\mathbb{Z}/2$ vs $\mathbb{Z}/2^3$, all with the same composition factors);
$\operatorname{Aut}(G)$ is abelian when $G$ is ($\mathbb{Z}/2\times
\mathbb{Z}/2$ has $\operatorname{Aut} \cong S_3$).

**B.** $D_3 \cong S_3$ worked, with the isomorphism written down; $D_4$ as the
eight vertex permutations of a square — **rebuilt natively, not cited**: the
published `ex-symmetries-of-a-square` (verified on disk) lives on
`monoids-groups-and-subgroups-examples` (order 21), a **B page and therefore a
leaf**, so this page proves what it needs and records the agreement in Remarks
(the NT-1 precedent, and the level-7 defect if skipped). The same applies to
`ex-klein-four-group` on the same page; the multiplication
table of $Q_8$; $\mathbb{Z}/n \rtimes (\mathbb{Z}/n)^\times$; a non-split
extension exhibited; $S_4 \cong V \rtimes S_3$.

**Traps.** (i) #5's guard is the point of the page: an action by bijections
does not give a group. (ii) Do not use "$D_n$ is the symmetry group of a
regular $n$-gon" — plane isometries are order 102 (new 112) and this is 64.
$D_n$ is the semidirect product, full stop, and the geometric reading is
"not available at this point in the reading order", never "the library does not
develop it". (iii) $Q_8$ must come from the published quaternions and not from
a fresh eight-element multiplication table, or the library has two $Q_8$s.

**Forward references: NONE load-bearing.**

---

## AG-4. Sylow's Theorems, $p$-Groups and Nilpotent Groups

- **order 66**
- **id** `sylow-theorems-and-nilpotent-groups`
- **category** `abstract-algebra`
- **`requires`** `semidirect-products-and-automorphism-groups` (64),
  `group-actions-and-cayleys-theorem` (38),
  `primes-and-the-fundamental-theorem-of-arithmetic` (24)
- **estimate** A 24, B 13

**DEFS.** $p$-group; **Sylow $p$-subgroup** (**#8**, resting on $v_p$ from
order 24); $n_p$ (**#9**); the lower central series $\gamma_i(G)$ and the upper
central series $Z_i(G)$; **nilpotent group** and **nilpotency class**
(**#10**); maximal subgroup.

**THMS.** **the fixed-point congruence**: a $p$-group acting on a finite set
$X$ has $\lvert X\rvert \equiv \lvert X^P\rvert \pmod p$ (the engine of the
whole page; orbit–stabiliser plus Lagrange, both from below); **Cauchy's
theorem** (via the $\mathbb{Z}/p$-action on $\{(g_0,\dots,g_{p-1}) :
g_0\cdots g_{p-1}=e\}$, whose cardinality is $\lvert G\rvert^{p-1}$ — a finite
counting statement citing order 28's lemmas); a finite group is a $p$-group iff
its order is a power of $p$; $Z(P)\ne1$ for a nontrivial finite $p$-group
(**cite order 38, do not re-prove**); groups of order $p^2$ are abelian;
**Sylow I** (existence, by induction on $\lvert G\rvert$ via the class
equation, or by the action on $p^n$-subsets — step 1 picks one and **records
it**); **Sylow II** (conjugacy, landmark); **Sylow III** ($n_p \equiv 1 \bmod
p$, $n_p \mid m$, $n_p = [G : N_G(P)]$, landmark); a Sylow $p$-subgroup is
normal iff $n_p = 1$; the normaliser-of-a-normaliser lemma $N_G(N_G(P)) =
N_G(P)$; **the normaliser condition**: in a nilpotent group every proper
subgroup is properly contained in its normaliser; finite $p$-groups are
nilpotent; nilpotent ⟹ solvable, and the converse fails ($S_3$); subgroups and
quotients of nilpotent groups are nilpotent, **but an extension of a nilpotent
group by a nilpotent group need not be** ($S_3$ again — the contrast with AG-2
that must be stated); **a finite group is nilpotent iff every Sylow subgroup is
normal iff it is the internal direct product of its Sylow subgroups**
(landmark, and the payoff of putting Sylow and nilpotency on one page);
maximal subgroups of a finite nilpotent group are normal of prime index;
**applications**: every group of order $pq$ ($p<q$) has a normal Sylow
$q$-subgroup and is $\mathbb{Z}/pq$ when $p \nmid q-1$, and otherwise is the
unique nonabelian $\mathbb{Z}/q\rtimes\mathbb{Z}/p$ (this is where AG-3 is
consumed); no group of order $pq$, $p^2q$ or 30 is simple.

**FS.** the converse of Lagrange (already owed to order 41 as $A_4$ with no
subgroup of order 6 — **cite it, do not re-mint**; and note that Sylow is the
partial converse that IS true, which is the honest framing); all subgroups of
order $p^k$ are conjugate for every $k$ (only the maximal ones are); $n_p = 1$
implies $G$ is a direct product; a group whose Sylow subgroups are all cyclic
is cyclic.

**B.** the Sylow subgroups of $S_4$ and of $A_5$ enumerated with $n_p$ checked
against Sylow III; $n_5 = 6$ in $A_5$ and the resulting embedding
$A_5\hookrightarrow S_6$ **dropped** unless the action-on-Sylows corollary is
on the A page (record); the classification of groups of order $\le 15$
tabulated, each order justified by the theorem that settles it; $S_3$ solvable
and not nilpotent (the item AG-2's B page deferred here); $D_4$ nilpotent of
class 2; the upper and lower central series of $D_4$ computed and shown to have
the same length; a group of order 12 that is not nilpotent ($A_4$).

**Traps.** (i) The fixed-point congruence is used four times; state it once,
as its own item, with a name. (ii) Cauchy's theorem must not be proved from
Sylow I if Sylow I's proof uses Cauchy — step 1 fixes the direction and
records it. (iii) Every application carries "finite" explicitly. (iv) $v_p$ is
order 24's; a second exponent function here is the two-notions defect.
(v) The order-$pq$ classification consumes AG-3's "isomorphic semidirect
products" lemma — without it the count is wrong.

**Forward references: NONE load-bearing.**

---

## MOD-1. Modules, Submodules, Quotient Modules and the Isomorphism Theorems

- **order 98** (the lowest slot above the whole linear-algebra block; it must
  be above 68/70, which are **published**, so that "a module over a field is a
  vector space" is a backward dictionary rather than a retro-fit — AL-D3)
- **id** `modules-and-module-homomorphisms`
- **category** `abstract-algebra`
- **`requires`** `ideals-and-quotient-rings` (44),
  `linear-independence-bases-and-dimension` (70),
  `group-homomorphisms-and-the-isomorphism-theorems` (32)
- **estimate** A 24, B 13

**DEFS.** left $R$-module and right $R$-module, over a ring with identity, with
the unital axiom $1\cdot m = m$ stated and its necessity flagged; **the
convention item**: "module" means "left module" unless said, fixed once and
cited by every later page (the judge-conventions class of decision);
submodule; the submodule criterion; the submodule generated by a subset, as the
intersection of the submodules containing it (**the published
`def-generated-subgroup` pattern, order 20 — same shape, cite it**); sum and
intersection of submodules; **quotient module $M/N$** (**#11**); module
homomorphism ($R$-linear map); kernel, image, **cokernel**;
$\operatorname{Hom}_R(M,N)$ (**#12**); $\operatorname{End}_R(M)$ as a ring;
external direct product and **direct sum** of an arbitrary family, and internal
direct sum; annihilator $\operatorname{Ann}(M)$; cyclic module; finitely
generated module; simple module; torsion element and **torsion submodule**
(**#13**); **$R$-algebra** (a ring $A$ with a homomorphism $R \to Z(A)$, or
equivalently an $R$-module with a compatible bilinear product — state one, prove
the other, since RT-1 uses both faces).

**THMS.** **the two dictionary theorems** (**#14**): $\mathbb{Z}$-modules are
exactly abelian groups, and $F$-modules are exactly vector spaces over $F$, both
directions, both citing the published items; the submodule criterion; every
submodule of $M$ is the kernel of $M \to M/N$; **the universal property of the
quotient module**, `thm-quotient-module-universal-property` (the namespacing of
§6.2 is mandatory); **first, second and third isomorphism theorems for
modules**; **the correspondence theorem**; $R/I$ is an $R$-module and
$M/IM$ is an $R/I$-module; a cyclic module is $\cong R/\operatorname{Ann}(m)$;
$\operatorname{Hom}_R(R,M)\cong M$; the universal properties of the direct sum
(maps **out**) and the direct product (maps **in**), stated as the two theorems
they are; a finite direct sum and a finite direct product agree, and an
infinite one does not.

**FS.** every module has a basis (refuted by $\mathbb{Z}/2$ as a
$\mathbb{Z}$-module — the item that says why module theory is not linear
algebra); every submodule of a finitely generated module is finitely generated
(refuted inside the **published** `def-ring-of-functions` $R = (\mathbb{Z}/2)^
{\mathbb{N}}$, order 42, whose ideal of finitely supported functions is not
finitely generated — in scope and needs nothing above 42); the torsion elements
of any module form a submodule (refuted in $\mathbb{Z}/6$); a module
homomorphism that is injective and surjective on a generating set is an
isomorphism.

**B.** $\mathbb{Z}$-modules worked as abelian groups, with $\mathbb{Z}/n$ and
$\mathbb{Q}$; ideals as submodules of $R$; **$V_T$, a vector space with a
linear operator as an $F[x]$-module** (the example the whole block points at —
introduced here concretely and made a theorem at MOD-5);
$\operatorname{Hom}_{\mathbb{Z}}(\mathbb{Z}/m,\mathbb{Z}/n) \cong
\mathbb{Z}/\gcd(m,n)$ computed; $\mathbb{Q}$ has no maximal
$\mathbb{Z}$-submodule; a module over a noncommutative ring where
$\operatorname{Hom}$ is not a module; the published
`lem-adjoining-a-vector-outside-the-span` Remark (order 70) named as the
sentence this page finally cashes out.

**Traps.** (i) #11's contrast is the pedagogical spine of the page and must be
an item. (ii) Do not re-mint the generated-substructure pattern; order 20 and
order 68 both already have it. (iii) The unital axiom: without it $M$ splits and
half the theory is false; state it in `def-module` and say why. (iv) The direct
sum of an **arbitrary** family (finitely supported families) is needed by MOD-2
and MOD-3; do not restrict to finitely many summands here and then use the
general case later.

**Forward references: NONE.**

---

## MOD-2. Free Modules, Exact Sequences, Projective and Injective Modules

- **order 100**
- **id** `free-modules-and-exact-sequences`
- **category** `abstract-algebra`
- **`requires`** `modules-and-module-homomorphisms` (98),
  `the-determinant-of-a-linear-operator` (80),
  `order-zorn-and-the-axiom-of-choice` (10)
- **estimate** A 23, B 12

**DEFS.** free module on a set $S$, as $R^{(S)}$; basis of a module; **rank**
(**#15**); **free abelian group** as the case $R=\mathbb{Z}$ (§6.3);
exact sequence at a term; **short exact sequence**; split short exact sequence;
**projective module**; **injective module**; divisible abelian group;
**integral element and algebraic integer** (**#16**) — *homed here rather than
on MOD-4 because the determinant trick is a statement about a finitely
generated module and a matrix, and because MOD-4 is at the size ceiling; if
Beta finds MOD-2 over the cap, this block moves to MOD-4 and the move is
recorded.*

**THMS.** **the universal property of the free module** (landmark): a map
$S \to M$ extends uniquely to $R^{(S)} \to M$ — this is the exact analogue of
FG-1's universal property of $F(S)$, and a Remark says so; **every module is a
quotient of a free module** (choice-free; "enough projectives"); free abelian
groups: $\mathbb{Z}^{(S)} \cong F(S)^{\mathrm{ab}}$, citing FG-1 (56) and
AG-2 (62) — the item §6.3 asks for; #15 rank invariance, with its AC cost;
**the splitting lemma** (the three conditions on a short exact sequence are
equivalent); **$P$ is projective $\iff$ every s.e.s. ending in $P$ splits
$\iff$ $P$ is a direct summand of a free module $\iff$ the lifting property
holds** (landmark); free ⟹ projective; a direct sum is projective iff each
summand is; **$\operatorname{Hom}_R(M,-)$ and $\operatorname{Hom}_R(-,M)$ are
left exact**, with the failure of right exactness as a numbered counterexample
(this is the pair of statements the homological-algebra scaffold consumes);
**Baer's criterion** (landmark, Zorn); a divisible abelian group is an injective
$\mathbb{Z}$-module and conversely; $\mathbb{Q}$ and $\mathbb{Q}/\mathbb{Z}$
are injective $\mathbb{Z}$-modules; **every finitely generated module over a
nonzero ring has a maximal proper submodule** (Zorn), with $\mathbb{Q}$ as the
witness that "finitely generated" is not decoration; **#16**: $\alpha$ integral
over $R$ $\iff$ $R[\alpha]$ is a f.g. $R$-module (the determinant trick, via the
adjugate identity at order 80), **the integral elements form a subring**, and
**a rational algebraic integer is a rational integer** (citing the rational-root
corollary at order 24).

**FS.** every projective module is free (refuted by $\mathbb{Z}/2$ as a
$\mathbb{Z}/6$-module, which is a direct summand of $\mathbb{Z}/6$ and has the
wrong cardinality to be free — in scope, needs only CRT at order 26); every
short exact sequence splits ($0\to\mathbb{Z}\xrightarrow{2}\mathbb{Z}\to
\mathbb{Z}/2\to0$); a submodule of a free module is free (refuted by the ideal
$(2,x) \subseteq \mathbb{Z}[x]$, which is not principal hence not free of rank
1, and not free of higher rank since any two elements of an ideal of a domain
are dependent — needs $\mathbb{Z}[x]$, order 48); $\operatorname{Hom}(-,M)$ is
exact.

**B.** $R^n$ and its standard basis; $\mathbb{Z}/n$ is not free over
$\mathbb{Z}$; the ideal $(2,x)$ worked; a projective non-free module written
out; the splitting lemma applied to a concrete sequence of abelian groups;
$\mathbb{Q}/\mathbb{Z}$ shown divisible; $\sqrt{2}$ and $\frac{1+\sqrt5}{2}$
shown to be algebraic integers and $\frac12$ shown not to be.

**Traps.** (i) #15 is the item most likely to be stated without its
commutativity hypothesis; denial 12 is live here. (ii) "Enough injectives" is
**NOT** on this page — it needs the Hom–tensor adjunction and is homed at MOD-3.
Say so, so nobody plants an unclosable item. (iii) The determinant trick uses
the adjugate over a **commutative** ring (order 80); check on disk that order 80
states it over a ring and not only over a field. (iv) Baer's criterion is where
Zorn enters; name AC in Facts.

**Forward references: NONE load-bearing.**

---

## MOD-3. Tensor Products of Modules

- **order 102**
- **id** `tensor-products-of-modules`
- **category** `abstract-algebra`
- **`requires`** `free-modules-and-exact-sequences` (100)
- **estimate** A 21, B 12

**DEFS.** $R$-balanced map (right module $\times$ left module $\to$ abelian
group) and, for commutative $R$, $R$-bilinear map; **$M\otimes_R N$** by the
construction (**#17(i)**); elementary tensor; the $R$-module structure for
commutative $R$ (**#18**); **flat module**; extension of scalars
$S\otimes_R M$ along $R\to S$.

**THMS.** **#17(ii)** the universal property; **#17(iii)** uniqueness up to a
unique isomorphism — the item that licenses "the" tensor product; **#19**, the
guard: a well-defined map out of $M\otimes_R N$ is produced only by the
universal property, with an explicit demonstration that a formula on elementary
tensors can fail; $R\otimes_R M\cong M$; commutativity and associativity (for
commutative $R$); $\left(\bigoplus_i M_i\right)\otimes N \cong \bigoplus_i
(M_i\otimes N)$ for arbitrary families; $R^m\otimes R^n \cong R^{mn}$ with the
product basis, and $\dim(V\otimes W)=\dim V\dim W$ over a field (the item RT-3
uses for tensor products of representations); $M\otimes_R R/I \cong M/IM$;
**right exactness** (landmark); **$-\otimes N$ is not left exact**, with the
$\mathbb{Z}/2$ counterexample as a numbered item; free ⟹ projective ⟹ flat;
**the Hom–tensor adjunction** $\operatorname{Hom}(M\otimes_R N, P) \cong
\operatorname{Hom}(M,\operatorname{Hom}(N,P))$ (landmark); **every module
embeds in an injective module** ("enough injectives"), by the character-module
argument $M \hookrightarrow \operatorname{Hom}_{\mathbb{Z}}(R, D)$ with $D$
divisible — *the hardest item in the MOD block, and it is here rather than at
MOD-2 because it consumes the adjunction*; extension of scalars is left adjoint
to restriction.

**FS.** $m\otimes n = 0$ implies $m=0$ or $n=0$ (refuted by $2\otimes\bar1 = 0$
in $\mathbb{Z}\otimes_{\mathbb{Z}}\mathbb{Z}/2$); every element of $M\otimes N$
is an elementary tensor (refuted in $F^2\otimes F^2$ by a rank-2 tensor);
$\mathbb{Z}/m\otimes_{\mathbb{Z}}\mathbb{Z}/n \ne 0$ always (it is
$\mathbb{Z}/\gcd(m,n)$, so it vanishes for coprime $m,n$); tensoring preserves
injections.

**B.** $\mathbb{Z}/m\otimes\mathbb{Z}/n$ computed; $\mathbb{Q}\otimes_
{\mathbb{Z}}\mathbb{Z}/n = 0$; a rank-2 tensor exhibited and proved not
elementary; the failure of left exactness traced through the standard sequence;
$\mathbb{C}\otimes_{\mathbb{R}}\mathbb{C}$ as an $\mathbb{R}$-algebra — **check
at step 1 whether $\mathbb{C}$'s $\mathbb{R}$-algebra structure is available**
(order 50 gives $\mathbb{C}$; the $\mathbb{R}$-vector-space structure was
deferred by LA-1, so this item may need to build it, or drop with a note);
extension of scalars $F^n \to K^n$.

**Traps.** (i) #19 is the defect this page exists to prevent; every later
construction (RT-3's tensor product of representations, RT-4's induction if the
tensor model is ever used) must cite it. (ii) The general construction is over
an arbitrary $R$ with a right and a left module; the **module structure** needs
commutativity (denial 11). Keep the two statements apart. (iii) "Enough
injectives" is not optional if the homological scaffold is to have anything to
stand on — see §9.

**Forward references: NONE load-bearing.**

---

## MOD-4. Chain Conditions, Semisimple Modules and the Wedderburn–Artin Theorem

- **order 104**
- **id** `chain-conditions-and-semisimple-modules`
- **category** `abstract-algebra`
- **`requires`** `tensor-products-of-modules` (102),
  `composition-series-and-solvable-groups` (62)
- **estimate** A 23, B 11

**DEFS.** Noetherian and Artinian module; Noetherian and Artinian ring (left
versions, with the convention stated); composition series of a module and
**length**; **semisimple module**; **semisimple ring** (defined as: ${}_RR$ is a
semisimple module — denial 8 keeps the radical out); socle; simple module (cite
MOD-1); the opposite ring $R^{\mathrm{op}}$ (needed to state Wedderburn
honestly).

**THMS.** $M$ Noetherian $\iff$ ACC on submodules $\iff$ every submodule is
finitely generated (landmark); if $N$ and $M/N$ are Noetherian so is $M$, and
the same for Artinian; a finite direct sum of Noetherian modules is Noetherian;
a f.g. module over a Noetherian ring is Noetherian; $M$ has a composition
series $\iff$ $M$ is both Noetherian and Artinian; **Jordan–Hölder for
modules** (the factors and the length are well defined) — proved here, with a
Remark identifying it as the module analogue of AG-2's group theorem, and with
the honest statement that the two are separate theorems and neither implies the
other (an agreement obligation in the D6 spirit, discharged by Remark because
the two statements are about different categories and nothing claims they
coincide); **#20**, the equivalence of the three definitions of semisimple, with
the Zorn cost named; a submodule and a quotient of a semisimple module are
semisimple; **$R$ is a semisimple ring $\iff$ every $R$-module is semisimple
$\iff$ every s.e.s. of $R$-modules splits $\iff$ every module is projective**;
a semisimple ring is Noetherian and Artinian; **Schur's lemma**: a nonzero
homomorphism between simple modules is an isomorphism, and
$\operatorname{End}_R(S)$ is a division ring (landmark — RT-1 cites this exact
item and does not re-mint it); **the Wedderburn–Artin theorem** (landmark):
a semisimple ring is a finite product $\prod_i M_{n_i}(D_i)$ of matrix rings
over division rings, with $(n_i, D_i)$ unique up to permutation (**#21**);
$M_n(D)$ is semisimple; the simple modules of $\prod M_{n_i}(D_i)$ are the $D_i^{n_i}$,
one for each factor — the item RT-2 turns into "the number of irreducibles".

**FS.** every Artinian ring is Noetherian **as stated for modules** (false for
modules: $\mathbb{Z}(p^\infty)$ is Artinian not Noetherian — **check whether
$\mathbb{Z}(p^\infty)$ is constructible in scope; if not, DROP with a note and
keep only the module-level asymmetry example $\mathbb{Z}$, which is Noetherian
and not Artinian**); every module has a composition series; a semisimple ring is
commutative ($M_2(F)$); a simple ring is semisimple (out of scope without the
radical — **DROP**).

**B.** $\mathbb{Z}$ is Noetherian and not Artinian; a non-Noetherian ring (the
functions $(\mathbb{Z}/2)^{\mathbb{N}}$ from MOD-1); $M_n(F)$ decomposed into
its $n$ minimal left ideals of column vectors; $F\times F$ as the smallest
interesting semisimple ring; the length of $\mathbb{Z}/p^k$ as a
$\mathbb{Z}$-module; a module of finite length whose ring is not Artinian.

**Traps.** (i) Denial 8: the Jacobson radical is not defined and no statement
may mention it. (ii) "Semisimple ring" is defined by a property of ${}_RR$, so
every use must check the side (left/right); the convention item of MOD-1
governs. (iii) The Zorn cost in #20 is real and must be in Facts; the
finite-length case is choice-free and is the case $k[G]$ uses. (iv) This page
is at the size ceiling: if the integrality block of MOD-2 is moved here, split
it out instead.

**Forward references: NONE load-bearing.**

---

## MOD-5. Modules over a Principal Ideal Domain and the Canonical Forms

- **order 106**
- **id** `modules-over-a-pid-and-canonical-forms`
- **category** `abstract-algebra`
- **`requires`** `chain-conditions-and-semisimple-modules` (104),
  `euclidean-domains-pids-and-unique-factorisation` (46),
  `triangularisation-and-jordan-canonical-form` (86),
  `the-structure-of-finite-abelian-groups` (36)
- **estimate** A 23, B 13

**DEFS.** torsion and torsion-free module over a domain; free rank; the
$p$-primary component; **invariant factors** and **elementary divisors**
(**#22**); **Smith normal form** of a matrix over a PID; **companion matrix**;
**the $F[x]$-module $V_T$** (**#23**).

**THMS.** a submodule of a free module of rank $n$ over a PID is free of rank
$\le n$ (landmark; the induction on $n$, choice-free); a f.g. torsion-free
module over a PID is free; **$M \cong M_{\mathrm{tors}} \oplus R^r$** with $r$
well defined; **the structure theorem, invariant factor form** (landmark,
**#22**); **the elementary divisor form**, via primary decomposition and CRT
for modules; **uniqueness of both** (the $\lvert M[p^k]\rvert$-style computable
invariant, the same discipline order 36 uses); **Smith normal form**: existence
over a PID by the ideal-theoretic (gcd) argument, and **uniqueness** via the
gcds of the $k\times k$ minors (determinants, order 78 — this is why the page
sits above 78); **the fundamental theorem of finitely generated abelian
groups** as the case $R=\mathbb{Z}$ (landmark) **with the mandatory agreement
item #26** against order 36; **#23**, the $F[x]$-module of an operator, f.g. and
torsion; the invariant factors of $T$; **rational canonical form**, existence
and uniqueness (**#24**, landmark); the last invariant factor is the **minimal
polynomial** and the product of the invariant factors is the **characteristic
polynomial** — two mandatory dictionary items against orders 82 and 84;
**Cayley–Hamilton, second proof**, with a Remark naming order 84's adjugate
proof and stating that this is a second route to a proved theorem (no numbered
claim of novelty); **Jordan canonical form, second proof**, when $\chi$ splits,
with the mandatory agreement item **#25** against order 86; **two matrices are
similar iff they have the same invariant factors** (landmark) — the
classification order 86 could only state via the Jordan form and only when
$\chi$ splits, now unconditional over any field.

**FS.** two matrices with the same characteristic and minimal polynomial are
similar — **restated natively here, not cited**: the existing witness lives on
`triangularisation-and-jordan-canonical-form-examples` (order 87), a **B page
and therefore a leaf**, so this page proves its own and records the agreement in
Remarks with no `deps` entry (the NT-1/LA-2 precedent); every f.g. module over
a domain is a direct sum of cyclic modules (needs PID: the witness is the ideal
$(2,x)$ over $\mathbb{Z}[x]$, from MOD-2); a torsion-free module is free (needs
f.g.: $\mathbb{Q}$ over $\mathbb{Z}$); the elementary divisors determine the
invariant factors without knowing the free rank.

**B.** the invariant factors of an explicit integer matrix computed by Smith
normal form; the abelian groups of order 360 enumerated in both forms and
cross-checked; $\mathbb{Z}^2/\langle(2,0),(0,3)\rangle$ computed;
the rational canonical form of an explicit $4\times4$; the same matrix's Jordan
form over $\mathbb{C}$ and its rational form over $\mathbb{Q}$ compared —
**the item that shows rational canonical form is the field-independent one**;
a matrix with no Jordan form over $\mathbb{R}$ but a rational form; $V_T$
written out for a $2\times2$ operator.

**Traps.** (i) The structure theorem must **not** be proved via
$\operatorname{Frac}(R)$ unless amendment §8.3 lands; if it does not, take the
choice-free induction route and **record the substitution**. (ii) Smith normal
form over a general PID is not row reduction — the Euclidean case is the B
page's constructive companion, and the general case needs the gcd argument.
Do not silently assume a Euclidean domain. (iii) #25 and #26 are the reason
this page is allowed to reprove two published-plan theorems; without them the
library holds two Jordan forms and two abelian classifications saying nothing to
each other, which is the level-7 defect at its most expensive. (iv) The B-leaf
blocker on order 87 is live and is easy to miss because `validate-plan`'s
`b-leaf` check short-circuits on items already on disk.

**Forward references: NONE load-bearing.**

---

## RT-1. The Group Algebra and Representations of Finite Groups

- **order 139** (immediately above the spectral-theorem pair at new 137/138;
  the binding constraint is `the-fundamental-theorem-of-algebra` at new 135 —
  AL-D4)
- **id** `the-group-algebra-and-representations`
- **category** `abstract-algebra`
- **`requires`** `chain-conditions-and-semisimple-modules` (104),
  `the-fundamental-theorem-of-algebra` (135),
  `sylow-theorems-and-nilpotent-groups` (66),
  `matrices-and-the-matrix-of-a-linear-map` (74)
- **estimate** A 21, B 12

**DEFS.** **the group algebra $k[G]$** (**#27**), as the free $k$-module on $G$
(MOD-2) with the convolution product; the augmentation map $k[G]\to k$ and the
augmentation ideal; **representation** $\rho: G\to GL(V)$ and its **degree**
(**#29**); $G$-module; subrepresentation; **irreducible**; the direct sum of
representations; morphism of representations ($G$-linear map) and
$\operatorname{Hom}_G(V,W)$; equivalent (isomorphic) representations; the
trivial representation; the **regular representation**; permutation
representations from a $G$-set (citing order 38); the **sign representation**
of $S_n$ (citing order 40); faithful representation; restriction $\operatorname
{Res}^G_H$ (definition only; the theory is RT-4).

**THMS.** **#27**'s three parts; $\dim_k k[G] = \lvert G\rvert$; $k[G]$ is
commutative iff $G$ is abelian; **the dictionary theorem (#28)**: the data of a
representation of $G$ on $V$ over $k$ and the data of a $k[G]$-module structure
on $V$ correspond bijectively, and $G$-linear maps correspond to
$k[G]$-homomorphisms — stated for objects and morphisms, proved both ways;
subrepresentations correspond to submodules and irreducible to simple;
$\operatorname{Hom}_G(V,W)$ is a $k$-vector space and $\operatorname{End}_G(V)$
a $k$-algebra; **Schur's lemma for representations** — the specialisation of
MOD-4's item, with the two halves separated: (a) over any $k$, a nonzero
morphism between irreducibles is an isomorphism; (b) **over an algebraically
closed $k$ and for finite-dimensional $V$, $\operatorname{End}_G(V) = k$ for
$V$ irreducible** (landmark), whose proof needs an **eigenvalue**, hence
`the-fundamental-theorem-of-algebra` at 135 — this is the single citation that
fixes the whole block's placement, and the item must say so; **the irreducible
representations of a finite abelian group over an algebraically closed field
are $1$-dimensional** (from Schur (b)); a degree-1 representation is a
homomorphism $G\to k^\times$ and these form a group; the regular representation
is faithful; every irreducible has degree $\le \lvert G\rvert$ and, being a
$k[G]$-module quotient of $k[G]$, is finite-dimensional.

**FS.** every representation is faithful (the trivial one); a representation
with no $G$-invariant complement to some subrepresentation cannot exist
(**deliberately NOT here** — its refutation is Maschke's characteristic
counterexample and is homed at RT-2; recorded here so nobody plants it at 139);
$k[G]$ is a field for $\lvert G \rvert > 1$ (it has zero divisors:
$(e-g)(e+g+\cdots+g^{n-1}) = 0$); every $1$-dimensional representation is
trivial; Schur's lemma (b) holds over any field (refuted by
$\mathbb{R}[\mathbb{Z}/3]$, whose $2$-dimensional irreducible has
$\operatorname{End} \cong \mathbb{C}$ — **check at step 1 that the witness
closes with material below 139; if not, DROP with a note**).

**B.** the representations of $\mathbb{Z}/n$ over $\mathbb{C}$ classified as
the $n$ characters $g\mapsto\lambda$ with $\lambda^n=1$ (using AL-D5's
root-of-unity facts and no trigonometry); the regular representation of
$\mathbb{Z}/2$ decomposed by hand; the $2$-dimensional irreducible of $S_3$
exhibited as the standard representation inside the permutation representation
on $\mathbb{C}^3$, with irreducibility proved directly; the permutation
representation of $G$ on $G/H$; zero divisors in $k[G]$; a representation of
$Q_8$ inside $\mathbb{H}$ (citing order 42's quaternions).

**Traps.** (i) **#28 is not decoration.** Every later theorem is stated on
exactly one side of the dictionary and translated by citing it; a page that
drifts between "representation" and "module" without the bridge reproduces the
level-7 defect in the most confusing possible place. (ii) Schur (a) and Schur
(b) have different hypotheses and different proofs; separating them is what
keeps the algebraically-closed hypothesis visible everywhere it is used.
(iii) $k[G]$'s associativity comes from the free-module universal property, not
from expanding a triple product (obligation #27). (iv) The finite-dimensionality
convention (#29) is a numbered item, not a parenthetical.

**Forward references: NONE load-bearing.**

---

## RT-2. Maschke's Theorem, Complete Reducibility and the Structure of $k[G]$

- **order 141**
- **id** `maschkes-theorem-and-complete-reducibility`
- **category** `abstract-algebra`
- **`requires`** `the-group-algebra-and-representations` (139)
- **estimate** A 19, B 11

**DEFS.** completely reducible (semisimple) representation; isotypic
component; the **centre $Z(k[G])$**; the class sum $\hat{C} = \sum_{g\in C} g$.

**THMS.** **Maschke's theorem** (landmark, **#30**): if $G$ is finite and
$\operatorname{char} k \nmid \lvert G\rvert$, every subrepresentation has a
$G$-invariant complement — by the averaging projection, with $\lvert
G\rvert^{-1}$ named as the step that consumes the hypothesis; **corollary:
every finite-dimensional representation is a direct sum of irreducibles**, and
**$k[G]$ is a semisimple ring** (citing MOD-4's characterisation); **the
converse**: if $\operatorname{char} k \mid \lvert G\rvert$ then $k[G]$ is not
semisimple (the augmentation ideal has no complement — a proof, not a
counterexample gesture); uniqueness of the **isotypic** decomposition, and
**non**-uniqueness of the decomposition into irreducible summands (a numbered
contrast, with the $\mathbb{Z}/2$-trivial-squared witness); **the Wedderburn
decomposition of $k[G]$** for $k$ algebraically closed with
$\operatorname{char} k \nmid \lvert G\rvert$: $k[G] \cong \prod_{i=1}^{r}
M_{n_i}(k)$ (landmark; cites MOD-4's Wedderburn–Artin and Schur (b) for
$D_i = k$); **there are finitely many irreducibles up to isomorphism, each a
summand of the regular representation, with multiplicity equal to its degree**;
**$\sum_i n_i^2 = \lvert G\rvert$** (landmark); a basis of $Z(k[G])$ is given by
the class sums, so **$\dim_k Z(k[G])$ is the number of conjugacy classes**;
**the number of irreducible representations equals the number of conjugacy
classes** (landmark — the two computations of $\dim Z(k[G])$, one from the class
sums and one from the product of matrix algebras); **every element of finite
order acts diagonalisably** in characteristic $0$ over an algebraically closed
field, by AL-D6's Maschke+Schur route applied to $\langle g\rangle$ — the item
RT-3 needs, and the reason it is homed here rather than at RT-1.

**FS.** **Maschke without the characteristic hypothesis** (refuted explicitly:
$G=\mathbb{Z}/p$ over $\mathbb{F}_p$, the two-dimensional representation
sending the generator to the unipotent matrix with entries $1,1,0,1$, whose
unique invariant line has no invariant complement) — the item #30 exists for; every finite-dimensional
algebra over a field is semisimple; the decomposition of a representation into
irreducible subspaces is unique; $\sum n_i = \lvert G\rvert$ (the squares are
not decoration); a group with $r$ conjugacy classes has an irreducible of
degree $r$.

**B.** $\mathbb{C}[\mathbb{Z}/3] \cong \mathbb{C}^3$ written out; $\mathbb{C}
[S_3] \cong \mathbb{C}\times\mathbb{C}\times M_2(\mathbb{C})$ with
$1+1+4 = 6$ checked; the same for $Q_8$ and $D_4$ ($1{+}1{+}1{+}1{+}4 = 8$,
identical for both — the first hint of the RT-3 `fs-`); the char-$p$ failure
worked; the regular representation of $\mathbb{Z}/4$ decomposed; a
representation decomposed two ways into different irreducible subspaces with
the same isotypic components.

**Traps.** (i) #30's hypothesis must be in the **title**; the judge reads
Statements and structurally cannot see a false title (`LEVELS.md` §10a).
(ii) The "number of irreducibles = number of classes" theorem is two
computations of one dimension; state both as steps, do not assert the equality.
(iii) The Zorn cost of "sum of simples ⟹ direct sum" does **not** apply here:
$k[G]$ has finite length, so cite MOD-4's finite-length case and say so.
(iv) Everything on this page is stated for **finite** $G$; there is no
infinite-group content anywhere in the block.

**Forward references: NONE load-bearing.**

---

## RT-3. Characters and the Orthogonality Relations

- **order 143**
- **id** `characters-and-the-orthogonality-relations`
- **category** `abstract-algebra`
- **`requires`** `maschkes-theorem-and-complete-reducibility` (141),
  `inner-product-spaces-and-orthogonality` (90),
  `tensor-products-of-modules` (102)
- **estimate** A 25, B 14

Over $\mathbb{C}$ throughout, by AL-D5. The page opens with a numbered item
fixing the setting: $k=\mathbb{C}$, $G$ finite, all representations
finite-dimensional; every hypothesis of RT-1 and RT-2 is then satisfied and
the item says which.

**DEFS.** **the character $\chi_V$** (**#31**); class function; the space
$\mathrm{cf}(G)$ of class functions; **the inner product** $\langle
\varphi,\psi\rangle = \frac1{\lvert G\rvert}\sum_g \varphi(g)
\overline{\psi(g)}$ (**#32**, in the sense of order 90's inner-product
definition, whose id Beta pins at step 1); irreducible character; **the character table**
(**#33**); the tensor product of representations (via MOD-3, with the
$G$-action $g(v\otimes w) = gv\otimes gw$ well defined by the universal
property — **#19 is cited here**); the dual (contragredient) representation;
the kernel of a character.

**THMS.** $\chi(1)=\dim V$; $\chi$ is a class function; **the eigenvalues of
$\rho(g)$ are roots of unity, so $\chi(g)$ is a sum of $\chi(1)$ roots of
unity** (from RT-2's diagonalisability item); $\lvert\chi(g)\rvert\le\chi(1)$,
with equality iff $\rho(g)$ is a scalar; **$\chi(g^{-1}) =
\overline{\chi(g)}$** (from $\lvert\lambda\rvert = 1$ and order 50's
conjugation — no trigonometry); $\chi_{V\oplus W}=\chi_V+\chi_W$;
$\chi_{V\otimes W}=\chi_V\chi_W$; $\chi_{V^*}=\overline{\chi_V}$; the character
of the permutation representation counts fixed points (Burnside's counting
lemma may be cited from order 38 if it is homed there — **check on disk**);
**the first orthogonality relation** $\langle\chi_i,\chi_j\rangle=\delta_{ij}$
(landmark; via $\dim\operatorname{Hom}_G(V,W) = \langle\chi_V,\chi_W\rangle$
and the averaging projection onto the $G$-invariants); **the irreducible
characters form an orthonormal basis of $\mathrm{cf}(G)$** (landmark; spanning
uses RT-2's count of conjugacy classes); **a representation is determined up to
isomorphism by its character** (landmark); the multiplicity of $V_i$ in $V$ is
$\langle\chi_V,\chi_i\rangle$; **$\langle\chi,\chi\rangle=1$ iff irreducible**;
the regular character is $\lvert G\rvert$ at $1$ and $0$ elsewhere, giving a
second proof of $\sum n_i^2 = \lvert G\rvert$ with an agreement Remark;
**the second (column) orthogonality relation** (landmark), and the corollary
$\sum_i \chi_i(g)\overline{\chi_i(g)} = \lvert C_G(g)\rvert$; the character
table is square and invertible; **normal subgroups are exactly the intersections
of kernels of irreducible characters**, so normality is readable off the table;
$G$ is abelian iff every irreducible has degree 1.

**FS.** **non-isomorphic groups have non-isomorphic character tables** —
refuted by **$D_4$ and $Q_8$**, both of order 8, both with the same table; both
groups are built on AG-3's A page precisely so this is citable (landmark
counterexample; it is the honest limit of the whole theory and it belongs on the
spine's `fs-` list); $\chi$ is a homomorphism; $\chi(g)$ is always real;
the degrees of the irreducibles are distinct; a class function with
$\langle\varphi,\varphi\rangle=1$ is a character (it may be $-\chi$).

**B.** the character tables of $\mathbb{Z}/n$, $S_3$, $A_4$, $S_4$, $D_4$ and
$Q_8$, each computed and each checked against both orthogonality relations and
against $\sum n_i^2 = \lvert G\rvert$; the $D_4$/$Q_8$ tables set side by side;
a reducible character decomposed by taking inner products; the normal subgroups
of $S_4$ read off its table and cross-checked against AG-1; the character of
the standard representation of $S_n$ computed from fixed points.

**Traps.** (i) #31 has **two** halves (basis-independence and
isomorphism-invariance) and both are steps. (ii) #32 must be discharged against
the published `def-inner-product`, not a fresh definition — the library has one
notion of inner product and this is it. (iii) The spanning half of the
orthonormal-basis theorem is where the RT-2 conjugacy-class count is consumed;
do not present orthonormality alone as the theorem. (iv) $A_5$'s character table
is **not** claimed: its two classes of $5$-cycles need AG-1's splitting item and
the golden-ratio entries need $\sqrt5$ bookkeeping; if it does not close
cheaply, drop it with a note (it is a B-page nicety, nothing cites it).
(v) Column orthogonality is a **separate theorem**, not a corollary of row
orthogonality by symmetry; the table's invertibility is what connects them.

**Forward references: NONE load-bearing.**

---

## RT-4. Induced Representations, Frobenius Reciprocity and Applications

- **order 145**
- **id** `induced-representations-and-frobenius-reciprocity`
- **category** `abstract-algebra`
- **`requires`** `characters-and-the-orthogonality-relations` (143),
  `free-modules-and-exact-sequences` (100)
- **estimate** A 20, B 12

**DEFS.** restriction $\operatorname{Res}^G_H$ (the theory; the definition is
RT-1's); **induction $\operatorname{Ind}_H^G W$** by the function model
(AL-D7, **#34**); the induced character; the central character
$\omega_i(\hat C) = \lvert C\rvert\chi_i(g)/\chi_i(1)$; virtual character /
the character ring $R(G)$ (definition only — Artin and Brauer are denial 6).

**THMS.** $\operatorname{Res}$ of an irreducible need not be irreducible;
$\dim\operatorname{Ind}_H^GW = [G:H]\dim W$; **the induced character formula**
$\chi_{\operatorname{Ind}W}(g) = \frac1{\lvert H\rvert}\sum_{x\in G,\ x^{-1}gx
\in H}\chi_W(x^{-1}gx)$, with the transversal-independence step (**#34**);
$\operatorname{Ind}_H^G(\mathbf{1})$ is the permutation representation on
$G/H$; **Frobenius reciprocity** $\langle\operatorname{Ind}_H^G\chi,\psi
\rangle_G = \langle\chi,\operatorname{Res}^G_H\psi\rangle_H$ (landmark);
transitivity of induction; the projection formula
$\operatorname{Ind}(\chi\cdot\operatorname{Res}\psi) = (\operatorname{Ind}\chi)
\psi$; **every irreducible character of $G$ occurs in the induction of some
irreducible of $H$** (a corollary of reciprocity worth stating);
**the central characters $\omega_i(\hat C)$ are algebraic integers** (via
MOD-2's integrality and the structure constants of the class sums, with Schur
(b) supplying the scalar); **$\chi_i(1)$ divides $\lvert G\rvert$** (landmark;
$\lvert G\rvert/\chi_i(1) = \sum_C \omega_i(\hat C)\chi_i(g_C^{-1})$ is an
algebraic integer and rational, hence an integer — this is the deepest theorem
the block proves and it is exactly what MOD-2's integrality block was built
for); the degree of an irreducible divides $[G:Z(G)]$ — **DROP unless the
central-character bookkeeping closes cheaply; record the drop**; a group with an
irreducible of degree $>1$ is non-abelian (the converse of RT-3's criterion,
restated as the usable form).

**FS.** $\operatorname{Ind}$ of an irreducible is irreducible (refuted by
$\operatorname{Ind}_1^G\mathbf1 = $ the regular representation);
$\operatorname{Ind}\circ\operatorname{Res}$ is the identity;
$\operatorname{Res}$ of a faithful representation is faithful;
**every finite group of order $p^aq^b$ is solvable is NOT stated** — Burnside is
denial 1, and a Remark records the theorem by name, what this page proves
towards it ($\chi(1)\mid\lvert G\rvert$ and the integrality of the central
characters), and what would license the rest (the Galois action on cyclotomic
fields, reserved band 94–97). **The Remark makes a claim about what this proof
requires, never about what the library contains** — the non-decaying form the
algebra track's published-amendment note mandates.

**B.** $\operatorname{Ind}_{A_3}^{S_3}$ of a nontrivial character computed and
decomposed; $\operatorname{Ind}_{\mathbb{Z}/2}^{S_3}\mathbf1$ shown to be
$\mathbf1\oplus\text{standard}$; Frobenius reciprocity verified numerically on
the $S_4$ table; the degrees of the irreducibles of $S_4$ ($1,1,2,3,3$) checked
against $\chi(1)\mid 24$; a group where some divisor of $\lvert G\rvert$ is not
a degree (so the divisibility is not an equivalence); the character of
$\operatorname{Ind}$ computed both by the formula and by decomposing the
permutation representation, agreeing.

**Traps.** (i) AL-D7: no bimodules, so no $k[G]\otimes_{k[H]}W$ as a numbered
construction. (ii) The integrality argument needs **three** separate facts from
MOD-2 — the determinant-trick characterisation, closure under $+$ and $\cdot$,
and the rational-root corollary — and each is cited, not assumed. (iii) The
Burnside Remark is the highest-risk sentence on the page: it is a scope denial
in prose, and scope-denial phrasing that decays is the named hunting ground of
`LEVELS.md` §8. Write it about the proof, not about the library.

**Forward references: NONE load-bearing.**

---

## 12. Build-frontier note (for the orchestrator; order $\ne$ build order)

Computed from disk, 2026-07-28. **Published** under `library/`: orders 20/21,
22/23, 42/43, 68/69 — and nothing else in algebra or linear algebra. **Draft**
(authored, not published): 24/25 and 70/71.

- **Nothing in this file is on or near the current frontier.** Every AG page
  needs `group-actions-and-cayleys-theorem` (38) and
  `symmetric-groups-and-the-sign-homomorphism` (40), both of which have empty
  item lists and depend on the unbuilt chain 26 → 28 → 30 → 32 → 34.
- **AG-1 is the first buildable page of this file**, and it becomes buildable
  the moment order 40 publishes. AG-2 then AG-3 then AG-4 are a strict chain;
  AG-4 also waits on 38.
- **The MOD block waits on the ring chain (44 → 46 → 48) and on the linear
  algebra chain (72 → 74 → 76 → 78 → 80 → 82 → 84 → 86)**, none of which is
  authored. MOD-1 is buildable once 44 and 70 are published (70 is drafted
  already, so 44 is the real blocker); MOD-5 is the last page of the block and
  waits on 86 and on 36.
- **The RT block waits on `the-fundamental-theorem-of-algebra` (new 135)**,
  which itself waits on 52, 54 and the published order-123 continuity page. RT
  is therefore the **deepest** unbuilt block in the library after HT, and it is
  strictly chained internally: RT-1 → RT-2 → RT-3 → RT-4.
- **Two amendments in §8 are on the critical path and cost almost nothing**:
  the quotient-group universal property at order 32 (needed by FG-1 at 56, by
  AG-2, by MOD-1 and by every presentation) and the four namespaced quotient
  ids. Both should land the next time order 32 is scaffolded, not later.
- **Nothing here changes the current level-10 build**, and nothing here
  discharges, amends or removes any published or drafted item.

---

## 13. Sources

Consulted 2026-07-28 for the **layering** — what must precede what — not for
proofs. Where a source's ordering was adopted, the page section says so.

- Dummit & Foote, *Abstract Algebra*, 3rd ed., table of contents (Parts I–III,
  VI): group actions (ch. 4) before direct/semidirect products and abelian
  groups (ch. 5) before further group theory (ch. 6); module theory (ch. 10)
  before vector spaces (ch. 11) before modules over PIDs (ch. 12); representation
  and character theory (ch. 18) after all of it.
  <https://www.wiley.com/en-us/Abstract+Algebra,+3rd+Edition-p-9780471433347>,
  <https://proofwiki.org/wiki/Book:David_S._Dummit/Abstract_Algebra/Third_Edition>
- Rotman, *An Introduction to the Theory of Groups*, contents: symmetric groups
  and the simplicity of $A_n$ (ch. 3) **before** the Sylow theorems (ch. 4)
  **before** normal series, Jordan–Hölder and solvable groups (ch. 5); and
  extensions/semidirect products organised *after* Jordan–Hölder. **AG-1…AG-4
  follow this ordering, with the one deviation that semidirect products are
  placed before Sylow because Sylow's applications consume them.**
  <https://archive.org/details/introductiontoth0000jose_w9y403ed>
- James & Liebeck, *Representations and Characters of Groups*, 2nd ed.,
  chapter list: group representations → $FG$-modules → $FG$-submodules → group
  algebras → $FG$-homomorphisms → Maschke → Schur → irreducible modules and the
  group algebra → conjugacy classes → characters → inner products of characters
  → the number of irreducible characters → character tables and orthogonality →
  induced modules and characters. **RT-1…RT-4 are exactly this sequence, cut
  into four pages.**
  <https://www.cambridge.org/core/services/aop-cambridge-core/content/view/CA5B03BB1C8197632D534D7FF1A20EB0/S0013091505224811a.pdf>
- Serre, *Linear Representations of Finite Groups*, Part I: characters,
  orthogonality, subgroups, products, induced representations — with the stated
  prerequisites being "only the definition of a group and the rudiments of
  linear algebra", which is the evidence that RT needs **no analysis**.
  <https://link.springer.com/book/10.1007/978-1-4684-9458-7>
- Cambridge Mathematical Tripos Part II, *Representation Theory* (DPMMS course
  page and schedules): complete reducibility, characters, tensor products and
  the character ring, induced representations and Frobenius reciprocity, in
  that order. <https://www.dpmms.cam.ac.uk/study/II/RepresentationTheory/>,
  <https://www.maths.cam.ac.uk/undergrad/files/schedules.pdf>
- Wikipedia, *Maschke's theorem* — the exact characteristic hypothesis, the
  averaging projection, the $\mathbb{Z}/p$ over $\mathbb{F}_p$ failure, and the
  group-algebra formulation. Used for obligation #30.
  <https://en.wikipedia.org/wiki/Maschke%27s_theorem>
- Wikipedia, *Artin–Wedderburn theorem* — statement, the semisimple/Artinian
  hypotheses, the specialisation to $k[G]$ with $k$ algebraically closed, and
  the prerequisite list (semisimple modules, Schur's lemma, endomorphism rings,
  minimal left ideals). Used for MOD-4 and RT-2.
  <https://en.wikipedia.org/wiki/Artin%E2%80%93Wedderburn_theorem>
- Wikipedia, *Tensor product of modules* — the construction, the universal
  property, the balanced-map conditions, why $R$ must be commutative for the
  module structure, and the right-exactness/left-failure pair. Used for
  obligations #17–#19 and denial 11.
  <https://en.wikipedia.org/wiki/Tensor_product_of_modules>
- Wikipedia, *Structure theorem for finitely generated modules over a principal
  ideal domain* — both forms, both uniqueness claims, the Smith-normal-form and
  submodule-of-free prerequisites, and the two payoffs (f.g. abelian groups;
  rational and Jordan canonical forms via $K[T]$). Used for MOD-5 and AL-D2.
  <https://en.wikipedia.org/wiki/Structure_theorem_for_finitely_generated_modules_over_a_principal_ideal_domain>
- Wikipedia, *Sylow theorems* — the three statements and the exact prerequisite
  list (Cauchy, actions, orbit–stabiliser, the fixed-point congruence,
  Lagrange), plus which applications need semidirect products. Used for AG-4.
  <https://en.wikipedia.org/wiki/Sylow_theorems>
- Wikipedia, *Burnside's theorem* — the machinery of the character-theoretic
  proof (algebraic integers, integrality of $\lvert C\rvert\chi(g)/\chi(1)$,
  the norm of the conjugates of $\chi(g)/\chi(1)$). Used to justify denial 1
  and to draw the line at $\chi(1)\mid\lvert G\rvert$.
  <https://en.wikipedia.org/wiki/Burnside%27s_theorem>
- Module-theory lecture notes consulted for the standard ordering of chain
  conditions, isomorphism theorems, free/projective/injective and Noetherian
  results: University of Delhi MMATH18-201 (chain conditions), UNSW MATH5735
  *Modules and Representation Theory*, LSU *Topics in Module Theory* ch. 7.
  <https://www.du.ac.in/du/uploads/departments/mathematics/study-material/MMATH18-201%20_MT_CC.pdf>,
  <https://web.maths.unsw.edu.au/~danielch/modules12/beeren_notes.pdf>,
  <https://www.math.lsu.edu/~adkins/m7211/AWchap7.pdf>

---
---

# PART II — the `subjects-01` enrichment (owner commission, 2026-08-13)

Everything above is PART I: the expansion commission of 2026-07-28 (AG, MOD, RT)
and its `frontier-11` amendments. Part I is **not deleted and not rewritten**.
Where Part I is now factually wrong about disk, §II.1 says so and **§II.1 wins**.

Part II was written by the `abstract-algebra` scaffolder lane of run
`subjects-01`, under `research/subjects-01-SEAMS.md`, which outranks this file on
every seam. Its companion is `research/plan-algebra-track.md` Part II, which
carries the **Galois block (GA-1…GA-4)**, the linear-algebra completion, the
fundamental theorem of algebra and the spectral theorem. This file remains
authoritative for **AG**, **MOD** and **RT** only; the authority boundary at the
head of Part I is unchanged.

---

## II.1 Reconciliation against disk, 2026-08-13

### II.1.a The one methodological finding, which affects every track

**`research/plan-spec.json` UNDERSTATES what is published.** The spec's `items`
array is honest that an *empty* array means the page does not exist — that part of
`subjects-01-SEAMS.md` §0.3 holds. It is **not** a complete inventory of an
authored page: seventeen published pages carry more items on disk than the spec
records, and one of them matters here.

| page | spec says | `library/…/<page>.md` says |
|---|---|---|
| `free-groups-and-presentations` | 6 items | **32 items** |
| `free-groups-and-presentations-examples` | 1 | 12 |
| `symmetric-groups-and-the-sign-homomorphism` | 13 | 14 |
| `construction-of-the-natural-numbers` | 0 | 39 |
| `construction-of-r-via-cauchy-sequences` | 0 | 40 |
| `construction-of-r-via-dedekind-cuts` | 0 | 39 |
| `foundations-of-the-real-numbers` | 2 | 43 |
| `countability-and-uncountability` | 18 | 21 |
| `approximation-and-compactness-in-ck` | 22 | 29 |
| `mixed-partials-taylor-and-extrema` | 21 | 30 |
| `plane-graphs-euler-and-the-five-colour-theorem` | 40 | 41 |
| `monotone-functions-and-discontinuities-examples` | 12 | 11 |
| the five `deferred-*` / `open-problems-*` catalogues | 0 | 13–33 |

294 published item files are not named by any spec page — `def-field`,
`def-abs-value` and `def-integers` among them. **The true index of what exists is
the union of the spec's `items` arrays and the `items:`/`examples:` lists in
`library/<cat>/<page>.md`.** Any scaffolder that concludes "X does not exist"
from the spec alone will re-mint published mathematics. This is reported to the
orchestrator in §II.9.

### II.1.b Placement: Part I's §4 renumber table is dead

The spec is now **448 pages**, not 256, and none of Part I's proposed orders
survived. Verified 2026-08-13 — orders are a **dated snapshot, informational
only**; quote the id:

| Part I said | actually, today |
|---|---|
| AG-1…AG-4 at 60–67 | **64–71**; 60–63 is the FG pair |
| MOD-1…MOD-5 at 98–107 | **102–111** |
| `the-fundamental-theorem-of-algebra` at 135 | **139** |
| the spectral pair at 137/138 | **141/142** |
| RT-1…RT-4 at 139–146 | **143–150** |
| 94–97 "reserved for Galois" | **96/97 is `algebraic-extensions-degree-and-finite-fields`; the Galois block goes at 98–101 + decimals** (see the companion file §II.2) |

Authored / unauthored, from the spec: **AG-1 and AG-2 are published** (18 and 27
items); **AG-3 and AG-4 are empty**; **MOD-1 and MOD-2 are published** (14 and 29
items); **MOD-3, MOD-4, MOD-5 are empty**; **all four RT pages are empty**.

### II.1.c Decisions and denials that disk has overturned

1. **AL-D6 is FALSE as stated and is withdrawn.** It says "the formal derivative
   of a polynomial does not exist in this library, at any order". Published on
   `polynomial-rings-and-roots`: `def-formal-derivative-of-a-polynomial`,
   `prop-formal-derivative-laws`, `def-repeated-root-and-separable-polynomial`,
   `thm-repeated-root-derivative-criterion`,
   `lem-polynomial-gcd-is-stable-under-field-extension`,
   `thm-polynomial-is-separable-iff-coprime-to-its-derivative`,
   `cor-irreducible-polynomial-is-separable-iff-derivative-nonzero`. §8 amendment
   4 is **discharged**.
   *What survives of AL-D6:* the Maschke+Schur route to "every element of finite
   order acts diagonalisably" is still correct and still preferable, because it
   needs no separability theory at all. It is now a **choice**, not a necessity,
   and RT-2 should say which route it takes and why.

2. **§8 amendment 1 landed.** `thm-quotient-group-universal-property` is
   published on `group-homomorphisms-and-the-isomorphism-theorems`.

3. **§8 amendment 2 landed by half.** `thm-quotient-ring-universal-property` is
   published on `ideals-and-quotient-rings`;
   `thm-quotient-module-universal-property` is published on MOD-1. But
   **`thm-quotient-space-universal-property` does not exist, and neither does the
   quotient vector space $V/W$** — `linear-maps-rank-nullity-and-quotient-spaces`
   is published with seven items and has none of it. See the companion file
   §II.1.b.9 and §II.6.

4. **§8 amendment 3 landed, and far beyond what it asked.**
   `the-field-of-fractions-and-localisation` is published with 22 items:
   `def-field-of-fractions`, its universal property, uniqueness,
   `cor-rational-function-field-as-a-fraction-field`, plus multiplicative sets,
   $S^{-1}R$, localisation at a prime, local rings and the ideal correspondence.
   MOD-5 may use $\operatorname{Frac}(R)$ freely; MOD-5's trap (i) is discharged.
   **`commutative-algebra` must not re-mint any of it** (`subjects-01-SEAMS.md`
   §4 already says so).

5. **§8 amendment 5 landed.** Cycle-type conjugacy is homed on AG-1.

6. **§6.3 is discharged.** Free abelian groups have a home: `def-free-abelian-group`
   (by its universal property) and `thm-abelianisation-of-a-free-group-is-free-abelian`
   are published on `free-groups-and-presentations`, together with
   `def-abelianisation-of-a-group` — **below** MOD-2, so MOD-2 cites and does not
   rebuild. MOD-2 as published correctly does not re-mint them.

7. **Denial 12 is discharged and became an item.**
   `cex-free-module-rank-fails-over-an-endomorphism-ring` is published on MOD-2's
   B page, so the IBN failure is exhibited rather than merely named, and
   `thm-nonzero-commutative-rings-have-invariant-basis-number` carries the
   commutativity hypothesis on the A page as obligation #15 asked.

8. **§9's routing of "enough injectives" is wrong.**
   `thm-module-categories-have-enough-injectives` is published **on MOD-2**, via
   `lem-coinduced-modules-are-injective` and
   `lem-every-abelian-group-embeds-in-a-divisible-group` — the coinduction route,
   which needs no Hom–tensor adjunction. **MOD-3 must not re-mint it.** MOD-2 also
   published the Four, Five and Snake lemmas, which Part I did not plan and which
   the homological track should now cite rather than build.

9. **Denial 1 (Burnside's $p^aq^b$ theorem) is LICENSED and is un-deferred.**
   Its stated licence was "a cyclotomic-fields page proving
   $\operatorname{Gal}(\mathbb{Q}(\zeta_m)/\mathbb{Q}) \cong (\mathbb{Z}/m)^\times$".
   **GA-3 supplies exactly that**, and GA-3 sits below RT-4. See §II.7.4.

10. **Denial 7 (Wedderburn's little theorem) is LICENSED and is un-deferred.**
    Its stated licence was "a cyclotomic page in the Galois band". **GA-3 builds
    $\Phi_n$ over $\mathbb{Z}$**, which is what the class-equation proof needs.
    Its natural home is GA-3 itself, not MOD-4 — the proof is a counting argument
    about $|\Phi_n(q)|$ and belongs beside the cyclotomic polynomials. Recorded as
    an offer to the companion file in §II.8, and accepted there.

### II.1.d What MOD-1 and MOD-2 did NOT ship, and where it must now go

MOD-1 was scaffolded at 24 A-items and **published with 14**. MOD-2 was
scaffolded at 23 and published with 29 — it gained the diagram lemmas and
enough injectives, and lost the integrality block. Both pages are published, so
**none of this is retrofitted**; every gap below must be homed on an unauthored
page above MOD-2, and each carries a **dictionary obligation** back to the
published item it extends.

| missing | needed by | Part II homes it on |
|---|---|---|
| second and third isomorphism theorems for modules; the **correspondence theorem** for modules | MOD-4 (Noetherian/Artinian arguments, Jordan–Hölder for modules) | **MOD-4**, §II.5 |
| $\operatorname{Hom}_R(M,N)$ as an **$R$-module** for commutative $R$ (only the abelian group exists, on MOD-2) | MOD-3's adjunction, RT-1 | **MOD-3**, §II.4 |
| $\operatorname{End}_R(M)$ as a **ring**, and $\operatorname{End}_R(R)\cong R^{\mathrm{op}}$ | Schur's lemma, Wedderburn–Artin | **MOD-4**, §II.5 |
| **$R$-algebra** (obligation #14's third face) | RT-1's $k[G]$, MOD-3's tensor product of algebras | **MOD-3**, §II.4 |
| the **dictionary theorems** ($\mathbb{Z}$-modules $=$ abelian groups; $F$-modules $=$ vector spaces), obligation #14 | the whole block's honesty | **MOD-3**, §II.4 |
| "over a **domain** the torsion elements form a submodule" — MOD-1 published only `def-annihilator-and-torsion-of-a-module`, the torsion **subset** | MOD-5 | **MOD-5**, §II.6 |
| **integral elements and algebraic integers**, the determinant trick, obligation #16 | **RT-4's $\chi_i(1) \mid \lvert G\rvert$, and Burnside** | **MOD-4**, §II.5 |
| every f.g. module over a nonzero ring has a **maximal proper submodule** | Nakayama, MOD-4 | **MOD-4**, §II.5 |

The integrality row is the load-bearing one: Part I planned it on MOD-2 with an
explicit escape hatch ("if Beta finds MOD-2 over the cap, this block moves to
MOD-4 and the move is recorded"). MOD-2 shipped without it and without the
record. **Part II records the move: it is MOD-4's, and RT-4 cites it there.**

