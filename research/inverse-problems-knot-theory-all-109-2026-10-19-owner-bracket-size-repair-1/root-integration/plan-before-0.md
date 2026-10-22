# Knot Theory — deep category prose scaffold

**Status: independently audited as a research design, repaired and frozen; full proofs remain future content-build obligations.** This is a
research proposal for 54 ordered A/B pairs (108 candidate pages) in the new
`knot-theory` category. It is not item or page authoring, a shared registry
splice, a `plan-spec` update, an engine operation, or proof acceptance. Exact
registration candidates, item-level dependency edges, current supplier
snapshots and source dossier paths are in
`research/knot-theory-planning-2026-10-18/`.

The category treats a knot as a finite smooth oriented embedding $S^1\hookrightarrow
S^3$ modulo orientation-preserving ambient isotopy, matching the existing
published interface. It treats a link as a finite disjoint union of such
circles. Any move to locally flat topological embeddings, smooth or topological
concordance, framings, or knots in a general 3-manifold is stated in a separate
definition. Its central distinction is between a diagram-level construction,
the theorem making that construction invariant, and the algorithmic or
complexity statement about computing it. Existing braid-group pages already
prove Reidemeister equivalence, Alexander's closed-braid theorem, Markov
equivalence, Alexander/Fox/Burau claims, Hecke/HOMFLYPT/Jones constructions,
Khovanov--Rozansky link homology and HHH, so new pages add knot-specific
bridges and genuinely missing theories rather than reproducing that material.

Every A page has a B page with explicit finite worked computations and
counterexamples as nonlogical leaves. B items can consume A-page facts but
never supply another item. Algorithms are `alg-` definitions specifying finite
inputs, admissibility, outputs, ordered instructions, branches, and stopping
conditions. Each algorithm's termination, correctness, invariance, complexity
or error statement is a separate result with a complete proof contract. Every
claimed theorem is separated from its literature locator and supplied with
exact hypotheses, a proof route, and all local prerequisite IDs; citations and
published status do not stand in for a proof. Pair order is topological by actual dependency edges (pair identifiers remain stable, so numerical labels need not be consecutive in reading order) and
there is no pair-count cap.

## Current supplier boundary

The key reusable pages are `library/braid-groups/oriented-links-braid-closures-and-markov-equivalence.md`, `library/braid-groups/hecke-markov-traces-and-polynomial-link-invariants.md`, `library/braid-groups/the-burau-representations.md`, `library/braid-groups/matrix-factorizations-and-khovanov-rozansky-link-homology.md`, `library/braid-groups/hochschild-homology-and-triply-graded-link-homology.md`, `library/braid-groups/yang-baxter-operators-and-quantum-braid-representations.md`, and `library/topology/the-seifert-van-kampen-theorem.md`. Exact current item IDs, paths, statuses,
hashes, used interfaces and caveats are recorded in
`research/knot-theory-planning-2026-10-18/coverage-and-sources.md` and the JSON
delta.

One proof-status issue changes the design. The published
`lem-the-deficiency-one-fox-calculus-determinant-rule` explicitly invokes
Morton's literature rule as [F1], and the published closed-braid Burau
determinant proof uses it as [F3]. Those items are not treated as proved
suppliers for new claims merely because their frontmatter says `published`.
The same audit distinguishes local arguments from quoted Jones/Temperley--Lieb
identifications. New computational routes avoid those literature-only edges
unless an exact local prerequisite module is specified. A separate status row
identifies the current consumers and records that this assignment does not
authorize edits to them.

No new category theorem is treated as a supplier while its proof design still
contains an unowned “standard theorem” gap. In particular the Haken normal-
surface inputs, 4-dimensional disk embedding, Casson--Gordon/amenable-signature
machinery, Floer compactness and movie coherence, configuration-space/KZ
estimates, and 3-manifold geometrization are broken out below into exact
local prerequisite contracts with a one-way dependency order. Where the
complete source proves only a special case or sketches the hard analytic step,
that limitation remains explicit and descendants are conditional on the
specified local module being authored and checked.

## Diagram, category, and proof conventions

Unless a pair overrides it, diagrams are oriented smooth knots/links in $S^3$.
Each crossing drawing identifies its over-strand, under-strand, arrow
directions and the local right-hand crossing sign. A blackboard framing is
identified with the projected normal push-off and changes by the signed writhe
under Reidemeister I; no framed invariant is silently called unframed. For the
Jones bracket use the specific smoothing and writhe convention recorded in
KT-29 and checked against the current Hecke-trace normalization. For surgery,
the oriented boundary basis is $(\mu,\lambda)$ and the filling slope is
$p\mu+q\lambda$ with $\gcd(p,q)=1$. A cyclic branched-cover deck generator
and the sign of its Alexander variable are fixed before homology is computed.
Use fenced `tikz` for crossings, bands, cobordisms and surgery links, and
`tikzcd` for chain maps and spectral sequences; the argument must remain valid
when every picture is removed.

## Pair contracts in dependency order

### KT-01 — Wirtinger presentations and knot groups

#### Wirtinger presentations and knot groups

**Pages:** `wirtinger-presentations-and-knot-groups` /
`wirtinger-presentations-and-knot-groups-examples`.

**A items:** `def-knot-planar-code` fixes a finite planar-diagram code with over/under flags, oriented edge ends and cyclic half-edge order; it does not encode an algebraic crossing sign, which is defined in KT-03. The code is a representation of an already valid regular diagram; planarity and incidence are input conditions, not silently repaired. `alg-knot-wirtinger-presentation-from-code` takes such a connected diagram plus a base arc, labels each maximal under-arc, chooses one meridian generator per arc, and writes the crossing conjugacy relation from the local oriented crossing chart. It returns a finite group
presentation and the meridian words; if a supplied code fails its incidence,
orientation, or crossing checks, it returns `invalid-input`. The procedure
terminates after a finite scan of the code. `thm-knot-wirtinger-presentation-correctness` states that its output presents $\pi_1(S^3\setminus K)$ and that
each generator represents the positively oriented meridian of its arc.

**Proof design and prerequisites:** reuse
`def-oriented-link-in-s-three-and-ambient-isotopy`,
`def-regular-oriented-link-diagram`, and `thm-seifert-van-kampen`. First
remove small crossing balls and decompose the complement into the under-arc
pieces; each piece contributes its meridian, and each overlap gives the
crossing conjugacy. Prove that the chosen meridian is invertible and that
changing the base arc conjugates the presentation, not its isomorphism type.
Then verify the finite code scan has one output relation per crossing and no
unlisted generator. The proof uses van Kampen on the actual open cover and
the crossing ball local model, not an appeal to a diagram. **Local prerequisite modules:** `lem-wirtinger-crossing-ball-cover`, `lem-wirtinger-local-meridian-conjugacy`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-01-worked-cases`, `cex-knot-kt-01-boundary-case`.

**B leaves:** Unknot group is Z; trefoil group is ⟨a,b:aba=bab⟩ and has the nonabelian S3 quotient a↦(12),b↦(23); compute the figure-eight Wirtinger relations from its four-crossing code. Equal abelianization does not classify knots: unknot and trefoil both abelianize to Z but trefoil has the displayed nonabelian quotient. **Sources:** reader 1, Calegari 2025 §§4.1–4.3 for the classical group/diagram route; the local Braid Groups page supplies the smooth diagram and Reidemeister interfaces. The exact source and supplier records are in the coverage ledger.
### KT-02 — Knot exteriors and peripheral systems

#### Knot exteriors and peripheral systems

**Pages:** `knot-exteriors-and-peripheral-systems` /
`knot-exteriors-and-peripheral-systems-examples`.

**A items:** `def-knot-exterior` defines
$E_K=S^3\setminus\operatorname{int}N(K)$ for a closed tubular neighborhood
$N(K)$, keeping its boundary torus and the chosen orientation. `def-knot-meridian-and-preferred-longitude` defines the meridian as the boundary of a
normal disk and the preferred longitude as the oriented primitive parallel
curve whose class vanishes in $H_1(E_K;\mathbb Z)$. It fixes base paths only up
to conjugacy in the peripheral subgroup. `lem-knot-tubular-exterior-and-boundary` constructs a trivialized normal disk bundle over $K$, its compact
exterior and boundary torus. `lem-knot-exterior-has-peripheral-torus` proves
$\partial E_K\cong T^2$ and that $(\mu,\lambda)$ is a basis of
$H_1(\partial E_K;\mathbb Z)$. `thm-knot-exterior-homology-and-longitude`
proves $H_1(E_K;\mathbb Z)\cong\mathbb Z$ generated by $[\mu]$ and
$[\lambda]=0$.

**Proof design and prerequisites:** the current link-complement lemma concerns
the open complement and does not itself provide the marked compact exterior.
Use the smooth tubular-neighborhood theorem for the oriented normal two-plane
bundle of a circle, trivialize that oriented rank-two bundle over $S^1$, and
identify its unit normal circle bundle with $T^2$. Excision and Alexander duality give
the meridian generator; the preferred longitude is the kernel generator of
$H_1(\partial E_K)\to H_1(E_K)$. Distinguish a geometric push-off from the
unique zero-linking longitude and record orientation reversal. **Local prerequisite modules:** `lem-knot-normal-circle-bundle-trivialization`, `thm-knot-exterior-homology-and-longitude`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-02-worked-cases`, `cex-knot-kt-02-boundary-case`.

**B leaves:** The unknot exterior is a solid torus; in its original knot basis [μ] generates H1 and [λ]=0. λ+μ has exterior homology [μ]≠0, so an arbitrary parallel push-off need not be the preferred zero longitude. **Sources:**
readers 1 and 4.
### KT-03 — Crossing signs, writhe, and linking number

#### Crossing signs, writhe, and linking number

**Pages:** `crossing-signs-writhe-and-linking-number` /
`crossing-signs-writhe-and-linking-number-examples`.

**A items:** `def-oriented-crossing-sign-writhe-and-blackboard-framing`
orients the projection plane by the ambient orientation and positive viewing
normal and sets $\operatorname{sgn}(c)=\operatorname{sgn}\det(v_{over},
v_{under})$ for tangent vectors following the oriented over- and under-strands;
it calibrates the positive Artin half twist to sign $+1$. It defines diagram writhe as
the signed sum over all crossings (component self-writhes are separately named) and blackboard framing by the projected normal
field. `alg-oriented-linking-number-from-diagram` accepts a
two-component oriented diagram and returns half the signed sum over crossings
between distinct components. It rejects self-crossing-only input with fewer
than two declared components and terminates after one crossing scan.
`thm-linking-number-is-invariant-and-writhe-is-not` proves linking number is
an integer ambient-isotopy invariant using R1/R2/R3, while writhe changes by
$\pm1$ under R1 and the blackboard framing changes by that amount.
`def-framed-knot-self-linking-and-seifert-framing` defines a homotopy class of nonzero normal sections and relative framing integer; its Seifert-zero-framing clause is owned by KT-04 after a Seifert surface is defined. The self-linking integer uses a disjoint small push-off. No surface-existence result is assumed on this page.
`thm-blackboard-framing-self-linking-is-writhe` proves for a knot that blackboard self-linking equals diagram writhe. For a link, use each component self-writhe for its individual framing, and reserve total writhe for polynomial normalization. KT-04 proves Seifert framing has self-linking zero.

**Proof design and prerequisites:** use the existing oriented Reidemeister
equivalence theorem as a finite move reduction. Under R1, no intercomponent
crossing changes; R2 creates/cancels two intercomponent crossings of opposite
sign; R3 permutes three crossings without changing signs. Hence the signed
intercomponent sum is invariant and is even because the algebraic intersection
of the two components on the projection sphere vanishes. Check the framing
change by the normal push-off's local linking contribution. Calibrate the
determinant sign against the existing geometric-braid generator; a reversed
chart orientation reverses the sign. For self-linking, compute the linking
number of the diagram with its blackboard push-off as the signed crossing
sum; the Seifert push-off/intersection argument is deferred to KT-04.
The framed diagram theorem permits only framing-preserving moves or pairs an
R1 move with the compensating integer framing change. **Local prerequisite modules:** `lem-linking-number-even-sum-and-reidemeister-invariance`, `thm-blackboard-framing-self-linking-is-writhe`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-03-worked-cases`, `cex-knot-kt-03-boundary-case`.

**B leaves:** For the positive Hopf diagram the two mixed signs are +1,+1 and lk=1; for the standard Whitehead diagram mixed signs sum to zero. Adding a positive R1 kink to an unknot changes diagram writhe from0 to1 and blackboard framing by1 while preserving unframed knot type. **Sources:** reader 1 and
the published Reidemeister supplier.
### KT-04 — Seifert surfaces and knot genus

#### Seifert surfaces and knot genus

**Pages:** `seifert-surfaces-and-knot-genus` /
`seifert-surfaces-and-knot-genus-examples`.

**A items:** `def-oriented-seifert-surface-and-knot-genus` defines a connected
compact oriented embedded surface $F\subset S^3$ with $\partial F=K$ and
$g(K)=\min_F g(F)$ in the smooth category. It explicitly separates this
embedded surface from the existing diagrammatic Seifert smoothing. `alg-seifert-surface-from-diagram` smooths every crossing coherently, caps the
Seifert circles by disjoint disks at distinct heights, then attaches one
oriented half-twisted band per crossing; the input is a nonempty oriented knot
diagram. It returns the finite banded surface and the pair $(s,c)$ of circle
and crossing counts. `thm-seifert-algorithm-boundary-euler-and-genus` proves
the output is an oriented surface with boundary $K$, Euler characteristic
$s-c$, and genus $(1-s+c)/2$ when the output is connected.

**Proof design and prerequisites:** the disk heights are ordered by nesting;
the bands are attached in the crossing balls, disjoint from the disk interiors.
The orientation rule makes the boundary arcs glue to the original diagram.
Each band lowers Euler characteristic by one, each initial disk contributes
one, and a connected one-boundary-component orientable surface has
$\chi=1-2g$. Supply a separate connectivity check for knot inputs; for links,
the result can be disconnected and the knot genus formula must not be used.
`alg-` termination follows from the finite crossing set. **Local prerequisite modules:** `lem-seifert-bands-embedded-orientable-boundary-correct`, `thm-seifert-algorithm-boundary-euler-and-genus`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-04-worked-cases`, `cex-knot-kt-04-boundary-case`.

**B leaves:** Trefoil Seifert construction has s=2,c=3,g=1; figure-eight s=3,c=4,g=1; kinked unknot s=2,c=1,g=0. Adding a trivial tube to a disk produces a genus-one Seifert surface for the unknot, whose minimum genus is0; a chosen spanning surface need not be minimal. **Sources:**
reader 1; existing `def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram` is reused only as the smoothing operation.

**Additional owned framing contract:** `thm-seifert-zero-framing-and-framing-integer` proves a positive surface-normal push-off has linking zero, and relative framing classes of a fixed oriented knot form a Z-torsor via π1(SO(2)). A Seifert surface selects its zero. The framed diagram theorem follows by ordinary R moves with compensating integer twists, using the existing framed-tangle presentation; no unframed R1 is a framed identity.
### KT-05 — Connected sums and prime decomposition

#### Connected sums and prime decomposition

**Pages:** `connected-sums-and-prime-decomposition` /
`connected-sums-and-prime-decomposition-examples`.

**A items:** `def-knot-connected-sum-and-prime-knot` defines the oriented
connected sum using a separating sphere meeting each summand in a trivial arc;
prime means nontrivial and not a connected sum of two nontrivial knots.
`lem-knot-decomposing-sphere-realizes-connected-sum` proves that a sphere
meeting a knot transversely in two points cuts it into the stated pair of
oriented knot summands, including the ball-and-arc boundary identification.
`thm-prime-decomposition-of-compact-orientable-three-manifold` states and
proves the sphere-decomposition existence/uniqueness theorem for compact connected orientable 3-manifolds (with boundary conventions and the S2×S1 prime exception explicit); irreducibility describes resulting factors, not a hypothesis forcing all decompositions trivial. `thm-schubert-prime-decomposition-for-knots` states that every nontrivial
oriented knot admits a finite connected-sum decomposition into prime knots,
unique up to permutation and oriented equivalence. `thm-knot-genus-additive-under-connected-sum` proves $g(K\#J)=g(K)+g(J)$.

**Proof design and prerequisites:** do not infer knot connected-sum decomposition from sphere decomposition of its irreducible exterior. Use spheres meeting the knot twice, equivalently properly embedded meridional decomposing annuli in the exterior. Prove existence by genus decrease and finiteness; uniqueness needs an annulus-system cut-and-paste theorem relative to marked peripheral boundary. General prime decomposition supplies only ambient 3-manifold context. Cut along a decomposing sphere meeting the
knot twice; the local ball-and-arc lemma identifies its two summand exteriors.
For uniqueness, put two decomposing spheres in general position, remove
inessential intersection circles by innermost-disk isotopies, and compare the
resulting prime tangles; prove that a nontrivial prime summand cannot split
across the remaining sphere. Calegari/Gardner supply only the genus-additivity
proof sketch, not uniqueness; reader 4's Hatcher §1.1 is a detailed general
prime-decomposition proof source but its exact knot-exterior bridge is local.
For genus, cut a minimum genus surface along the decomposing sphere for the
lower bound and boundary-connect minimum genus summand surfaces for the upper
bound. Alexander-polynomial multiplicativity is deferred to KT-07, after the
Seifert-matrix formula exists. **Local prerequisite modules:** `thm-schubert-prime-decomposition-for-knots`, `thm-knot-genus-additive-under-connected-sum`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-05-worked-cases`, `cex-knot-kt-05-boundary-case`.

**B leaves:** Right trefoil connected sum with right trefoil has genus2; right trefoil sum with reverse mirror has genus2 but is smoothly ribbon slice. Granny and square knots have the same product Alexander polynomial (t²−t+1)² but different signature magnitude4 versus0, so equal polynomial does not identify prime summands. **Sources:** reader 1, Calegari 2025 §3.1 and Gardner/Livingston §§4.3–4.5 for connected sum and genus additivity; reader 4, Hatcher §1.1 for 3-manifold prime decomposition. The Schubert knot-prime uniqueness proof remains an explicit local module.
### KT-06 — Seifert matrices and the Alexander module

#### Seifert matrices and the Alexander module

**Pages:** `seifert-matrices-and-the-alexander-module` /
`seifert-matrices-and-the-alexander-module-examples`.

**A items:** `def-knot-seifert-pairing-and-matrix` chooses a basis
$a_1,\ldots,a_{2g}$ for $H_1(F;\mathbb Z)$ and fixes
$V_{ij}=\operatorname{lk}(a_i^+,a_j)$ for the positive normal push-off.
`lem-seifert-matrix-skew-part-is-surface-intersection` proves that
$V-V^T$ is the signed unimodular intersection matrix of $F$, with the sign
fixed by the positive push-off convention. `lem-knot-infinite-cyclic-cover-cut-and-paste-presentation` constructs a finite $
\mathbb Z[t^{\pm1}]$-presentation of the first homology of the infinite cyclic
cover by stacking copies of $S^3\setminus F$; its matrix is the exact signed
form $V-tV^T$ (or the declared transpose convention). `thm-seifert-matrix-presents-knot-alexander-module` identifies this cokernel with the existing
one-variable Alexander module.

**Proof design and prerequisites:** first prove the cut-open exterior is
obtained by gluing the positive and negative copies of $F$ to the complement
of its bicollar. The Mayer–Vietoris map on $H_1(F)$ has the two push-off maps;
deck translation multiplies exactly one by $t$. The complementary homology is
identified using Alexander duality and the relative sequence, with the
meridian/longitude boundary map checked explicitly. This proves the presentation
without Fox calculus. The current Alexander module definition fixes the cover
and deck generator; `def-alexander-polynomial-from-the-first-elementary-ideal` supplies only the ideal convention. **Local prerequisite modules:** `lem-seifert-cut-open-cover-alexander-module-presentation`, `lem-seifert-matrix-s-equivalence-under-isotopy`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-06-worked-cases`, `cex-knot-kt-06-boundary-case`.

**B leaves:** For V=[[1,0],[-1,1]], V−V^T is the unimodular symplectic matrix and det(V−tV^T)=1−t+t². A unimodular basis change can alter all entries of V while preserving its presented Alexander module; check P^T V P with P=[[1,1],[0,1]]. **Sources:** reader 2; source-specific cut-open-cover proof
locators are reader 2, Conway 2016 v2 §§2–3 and Livingston 2002, with exact theorem interfaces and limits in the source ledger.
### KT-07 — Alexander polynomials from Seifert matrices

#### Alexander polynomials from Seifert matrices

**Pages:** `alexander-polynomial-from-seifert-matrices` /
`alexander-polynomial-from-seifert-matrices-examples`.

**A items:** `thm-seifert-determinant-is-the-knot-alexander-polynomial` proves
that for every connected Seifert surface and the KT-06 convention,
$\det(V-tV^T)\doteq\Delta_K(t)$, with $\doteq$ denoting multiplication by a
unit $\pm t^k$. `cor-knot-alexander-normalization-symmetry-and-genus-bound`
deduces $\Delta_K(1)=\pm1$, reciprocal symmetry, and
$\deg\Delta_K\le2g(K)$ after centering the Laurent polynomial. The theorem
does not confuse the knot normalization $\Delta_K/(1-t)$ with the existing
multi-component convention. `cor-alexander-polynomial-multiplies-under-connected-sum` proves $\Delta_{K\#J}\doteq\Delta_K\Delta_J$ from the block-sum
Seifert matrix, after KT-05 has supplied the connected-sum operation.

**Proof design and prerequisites:** KT-06 identifies a finite presentation;
the order of its torsion module is the gcd of maximal minors, and a square
presentation has order its determinant up to a unit. At $t=1$, the matrix is
$V-V^T$, the unimodular surface intersection matrix, giving determinant
$\pm1$. Transposition and multiplication by a monomial give the reciprocal
relation. Since the matrix has size $2g(F)$, its determinant's Laurent width
is at most $2g(F)$; minimize over $F$. The proof uses the current
`thm-the-alexander-polynomial-is-an-oriented-link-invariant` only for its
locally proved module-naturality interface, not the Fox determinant rule.
**Local prerequisite modules:** `lem-square-seifert-presentation-and-alexander-normalization`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-07-worked-cases`, `cex-knot-kt-07-boundary-case`.

**B leaves:** The matrices [[1,0],[-1,1]] and [[1,0],[-1,-1]] give trefoil 1−t+t² and figure-eight −1+3t−t² up to units; evaluate at1 and−1. The knot-normalized fraction D=Δ/(1−t) is not the polynomial Δ: for unknot Δ=1 but D has a pole at1. **Sources:** reader 2.
### KT-08 — Fox colorings and quandle invariants

#### Fox colorings and quandle invariants

**Pages:** `fox-colorings-and-quandle-invariants` /
`fox-colorings-and-quandle-invariants-examples`.

**A items:** `def-quandle-and-knot-coloring` defines a quandle by idempotency,
right invertibility and self-distributivity, and a coloring of a diagram by
quandle elements with the crossing relation fixed to the over/under convention.
`alg-dihedral-fox-colorings` takes a diagram and an odd prime $p$, solves the
finite linear system $2x_{\rm over}=x_{\rm in}+x_{\rm out}$ in $\mathbb F_p$,
and returns the full solution set and its cardinality. `thm-quandle-colorings-are-reidemeister-invariant` proves coloring sets have canonical local extension bijections under oriented R1/R2/R3 for a quandle. Conversely, requiring those extension bijections for every boundary coloring yields idempotency, right invertibility and self-distributivity; invariance of a numerical count alone is not that converse.

**Proof design and prerequisites:** the three axioms are matched respectively
to R1, R2 and R3; each move gives a bijection of coloring sets, and the inverse
map for R2 uses right invertibility. The dihedral operation $a*b=2b-a$ is a
quandle over odd characteristic, so Gaussian elimination terminates in a
finite number of row operations. No coloring count is called a complete knot
invariant. **B item IDs:** `ex-knot-kt-08-worked-cases`, `cex-knot-kt-08-boundary-case`.

**B leaves:** The trefoil F3 coloring equations reduce to one free linear relation, giving9 assignments, three constant and six nonconstant; the unknot has3. One coloring prime is incomplete: over F5 both the unknot and trefoil have only5 constant assignments, although their groups distinguish them. **Sources:** reader
1/2; local R-move proof required.

**Rack and fundamental-quandle closure:** `def-rack-fundamental-quandle-and-adjoint-group` defines a rack by bijective right translations and right self-distributivity, a quandle by adding a*a=a, the diagram-presented fundamental quandle with one generator per under-arc, and the adjoint group with relations e_(a*b)=e_b^(-1)e_a e_b. `thm-fundamental-quandle-and-adjoint-group-from-wirtinger` proves presentation independence by local quandle Tietze transformations and identifies the adjoint group of the knot presentation with the KT-01 Wirtinger group. It makes no completeness/classification claim. `thm-rack-colorings-are-framed-invariants` proves R2/R3 coloring bijections and tracks the kink map under framed R1 compensation; unframed R1 requires idempotency. `alg-finite-rack-quandle-coloring-from-table` takes a finite multiplication table, checks each axiom exhaustively, and enumerates all arc assignments or returns an exact failed axiom. `thm-finite-table-coloring-termination-and-correctness` proves the O(m^3) axiom checks and at most m^a assignments for a arcs, with exact extension bijections. Proofs are local finite derivations from the crossing convention; no unexamined fundamental-quandle classification theorem is imported.
### KT-09 — Multivariable Alexander modules and chain models

#### Multivariable Alexander modules and chain models

**Pages:** `multivariable-alexander-modules-and-chain-models` /
`multivariable-alexander-modules-and-chain-models-examples`.

**A items:** `def-maximal-abelian-cover-alexander-module` defines the cover of a
nonempty oriented $r$-component link classified by the full abelianization
$H_1(S^3\setminus L)\cong\mathbb Z^r$ and its module over
$\Lambda_r=\mathbb Z[t_1^{\pm1},\ldots,t_r^{\pm1}]$. `alg-abelian-cover-chain-model-from-triangulated-exterior` takes a finite triangulation of the compact
link exterior plus oriented edge labels in $\mathbb Z^r$ representing the
meridian homomorphism; it constructs one deck-orbit basis element per cell and
the Laurent-polynomial cellular boundary matrices. It returns the finite chain
complex and its presentation matrices, or `invalid-labeling` if a 2-cell
boundary does not have total label zero. `thm-abelian-cover-chain-model-computes-alexander-module` proves the output chain homology is the module just
defined and that its determinantal ideals are independent of the chosen
triangulation.

**Proof design and prerequisites:** use covering-space classification, the
lifted-cellular chain complex and cellular homology; edge labels are a
1-cocycle exactly when the 2-cell checks pass. A change of lifted cell orbit
multiplies a basis element by a Laurent monomial, while subdivision gives chain
homotopy equivalences over $\Lambda_r$. This is a cellular route and does not
invoke the current Fox deficiency-one lemma or its literature-only determinant
step. Clearly distinguish the equal-variable specialization of the
multi-component Alexander module from the existing absolute one-variable
polynomial. **Local prerequisite modules:** `lem-maximal-abelian-cover-cellular-chain-model`, `lem-multivariable-alexander-order-and-specialization`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-09-worked-cases`, `cex-knot-kt-09-boundary-case`.

**B leaves:** For the Hopf link the exterior is T²×I and the maximal abelian cover is contractible, so absolute H1 module is0; for the two-component unlink the group is F2 and its total-linking cyclic module has a free Laurent summand. A zero total label around every 2-cell does not establish the intended meridian epimorphism: assigning every edge0 passes the face check but yields the trivial map and must be rejected as wrong marking. **Sources:** reader 2; exact source
coverage and normalization are reader 2, Morton 1998 §2 and Conway 2016 v2; the exact multivariable versus total-linking conventions are recorded in the source ledger.
### KT-10 — Twisted Alexander polynomials and Reidemeister torsion

#### Twisted Alexander polynomials and Reidemeister torsion

**Pages:** `twisted-alexander-polynomials-and-reidemeister-torsion` /
`twisted-alexander-polynomials-and-reidemeister-torsion-examples`.

**A items:** `def-knot-twisted-chain-complex-and-reidemeister-torsion` fixes a compact knot exterior with a finite based CW structure, a representation $\rho:\pi_1(E_K)\to GL_d(F)$ over a field and an epimorphism $\psi:\pi_1(E_K)\to H$ to a finite-rank free abelian group; it defines the $F(H)$-coefficient cellular complex, the acyclic based Reidemeister torsion, and its exact ambiguity by determinant-image and deck units. `def-knot-wada-quotient-for-deficiency-one-presentation` defines the deleted-column Fox-Jacobian quotient only when the denominator determinant is nonzero, and records the chosen row/column, basis order and unit quotient. `lem-knot-twisted-exterior-acyclicity-from-torsion-module` proves the degree-one torsion-module hypothesis implies acyclicity of the stated twisted complex, under the finite 2-complex, vanishing-top-homology and Euler-characteristic assumptions. `thm-knot-wada-quotient-equals-reidemeister-torsion` proves the Fox Jacobian is the twisted cellular boundary matrix and the deleted-minor quotient equals the torsion up to exactly the declared units; it proves invariance under the permitted presentation and column changes rather than importing Wada–Kitano. `alg-twisted-burau-determinant-for-colored-braid-closure` accepts a colored braid and an explicit free-group representation extending over the braid closure exterior, computes the colored Burau blocks and returns the valid twisted determinant or `not-applicable` if extension/acyclicity/denominator checks fail. `thm-twisted-burau-determinant-formula-under-extension-hypotheses` proves the algorithmic determinant equals the twisted torsion for the closure under those same extension and acyclicity hypotheses, including the torsion and non-torsion module cases separately.

**Proof design and prerequisites:** start with the full abelianization chain complex of the actual link exterior, not the one-variable total-linking cover; specialize only after stating the representation and deck map. Derive Fox's product and inverse identities, identify the evaluated Fox matrix with the cellular differential, prove the denominator is the omitted $d_1$ minor, and track each basis change under Tietze moves. Prove the acyclicity implication from the exact sequence and Euler characteristic, then prove the torsion product formula for the braid-axis decomposition and its compatibility with the colored Burau action. Conway, *Burau Maps and Twisted Alexander Polynomials* arXiv:1510.06678v2, Lemma 2.6 and Theorem 3.15 supplies the precise colored-braid route but cites Wada/Kitano for the quotient-to-torsion theorem; Ranicki's 2001 torsion notes define the ordinary based torsion but do not close this twisted proof. Do not claim a noncommutative determinant: that extension needs a separately proved Ore localization and Dieudonné/Whitehead torsion module. **Local prerequisite modules:** `lem-twisted-fox-jacobian-is-cellular-boundary`, `lem-twisted-acyclicity-from-torsion-module`, `thm-wada-deleted-minor-equals-twisted-reidemeister-torsion`, `thm-twisted-burau-axis-torsion-product`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-10-worked-cases`, `cex-knot-kt-10-boundary-case`.

**B leaves:** For the trivial one-dimensional representation, the trefoil cellular torsion convention gives τ=(t²−t+1)/(1−t); reduced Burau σ1³ has scalar −t³ and yields the same polynomial after normalization. A generator with ψ(x)=1 and ρ(x)=I has denominator det(ρ(x)ψ(x)−I)=0; that column is inadmissible even if another column is valid. **Sources:** reader 2, Conway v2 and Ranicki notes; exact source hashes are in the coverage ledger.

**Effective and simple-homotopy boundary:** Algorithmic inputs use a computable field with encoded exact arithmetic/equality (e.g. Q, a specified number field, or finite field), a finite presentation and explicit matrices. Extension is checked on finitely many relators; acyclicity and denominators by exact rational-function linear algebra. Unencoded arbitrary fields are theorem-only data. The Wada/torsion comparison binds the cellular presentation of a genuine exterior spine, its oriented lifted bases and simple expansions/collapses; arbitrary group presentations do not silently identify their presentation complexes with the exterior. The local Fox chain rule, the fundamental identity Σ_j ∂r/∂x_j (x_j−1)=r−1, and the torsion product formula are separately owned suppliers. Nonacyclic input returns zero torsion by the declared convention, not an undefined determinant division.
### KT-11 — Cyclic branched covers and knot determinants

#### Cyclic branched covers and knot determinants

**Pages:** `cyclic-branched-covers-and-knot-determinants` /
`cyclic-branched-covers-and-knot-determinants-examples`.

**A items:** `def-cyclic-branched-cover-of-a-knot` defines the connected cyclic
cover of the exterior classified by meridian reduction modulo $q$, followed
by Dehn filling the lift of the meridian to produce $\Sigma_q(K)$. `lem-double-branched-cover-homology-from-seifert-matrix` proves
$H_1(\Sigma_2(K);\mathbb Z)\cong\operatorname{coker}(V+V^T)$ under the
KT-06 sign convention. `thm-knot-determinant-is-order-of-double-cover-homology` proves that $H_1(\Sigma_2(K))$ is finite exactly when
$\Delta_K(-1)\ne0$ and then has order $|\Delta_K(-1)|$.
`thm-knot-cyclic-cover-order-from-alexander-polynomial` states that for a
$q$-fold cyclic branched cover, $H_1(\Sigma_q(K))$ is finite exactly when
$\Delta_K(\zeta_q^j)\ne0$ for all $1\le j<q$, and in that case
$|H_1(\Sigma_q(K))|=\prod_{j=1}^{q-1}|\Delta_K(\zeta_q^j)|$.

**Proof design and prerequisites:** build the cover by cutting along the
Seifert surface and gluing two copies; the deck involution's quotient is $S^3$
branched over $K$. The Mayer–Vietoris boundary matrix is $V+V^T$. The determinant
identity is KT-07 evaluated at $-1$; a square integer presentation has finite
cokernel precisely when its determinant is nonzero, of order the determinant's
absolute value. For general $q$, decompose the cyclic-cover chain complex over
$\mathbb C$ into deck-character eigenspaces, remove the trivial character
using $\Delta_K(1)=\pm1$, and take the determinant of each nontrivial block;
the nonvanishing conditions are exactly the finite-homology hypotheses.
Check that the unit ambiguity disappears under the absolute product. The already
published slice-disk branched-cover lemma supplies only its stated rational
homology-ball consequence, not this calculation. **Local prerequisite modules:** `lem-cyclic-branched-cover-seifert-block-matrix`, `lem-branched-cover-surgery-presentation-from-seifert-surface`, `lem-cyclic-cover-order-root-product-and-rational-sphere-test`, `lem-cyclic-cover-linking-form-inverse-matrix`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-11-worked-cases`, `cex-knot-kt-11-boundary-case`.

**B leaves:** Trefoil double cover has H1=Z/3, figure-eight double cover has H1=Z/5, unknot double cover is S3; verify with V+V^T and Smith form. No knot double determinant is zero because Δ(−1) is odd; the trefoil six-fold cover has infinite H1 because Δ vanishes at a primitive sixth root. **Sources:** reader 2/5; Livingston, “Seifert Forms and Concordance,”
Theorem 3.1.
### KT-12 — Levine–Tristram signatures and the Arf invariant

#### Levine–Tristram signatures and the Arf invariant

**Pages:** `levine-tristram-signatures-and-arf-invariant` /
`levine-tristram-signatures-and-arf-invariant-examples`.

**A items:** `def-levine-tristram-hermitian-form-and-signature` defines for
$\omega\in S^1\setminus\{1\}$ with $\Delta_K(\omega)\ne0$ the Hermitian form
$(1-\omega)V+(1-\bar\omega)V^T$ and its signature; at roots, state the
one-sided average convention separately. `lem-seifert-stabilization-preserves-levine-tristram-signature` proves basis invariance and invariance under the
elementary surface stabilizations actually needed for isotopy. `def-knot-arf-invariant-from-seifert-form` defines the mod-two quadratic refinement on
$H_1(F;\mathbb F_2)$ and its Arf invariant. `thm-arf-equals-second-conway-coefficient-mod-two` proves the stated coefficient identity under the chosen
Conway convention.

**Proof design and prerequisites:** Hermitian symmetry follows from
$\bar\omega=\omega^{-1}$; a basis change is congruence. Stabilization adds a
hyperbolic summand whose nonzero eigenvalues are paired with opposite signs at
admissible $\omega$. For Arf, verify $q(x+y)=q(x)+q(y)+x\cdot y$, choose a
symplectic basis and compare the quadratic Gauss sum with the Conway expansion
using KT-07. This pair states no slice obstruction yet; KT-21–25 add the
embedded-cobordism hypothesis. **Local prerequisite modules:** `lem-seifert-stabilization-preserves-levine-tristram-signature`, `lem-arf-quadratic-enhancement-from-seifert-form`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-12-worked-cases`, `cex-knot-kt-12-boundary-case`.

**B leaves:** For the displayed positive-definite trefoil V, the −1 Hermitian signature is2 and Arf=1; figure-eight has signature0 and Arf=1. At a primitive sixth root the trefoil Hermitian form is singular; nondegenerate signature formulas cannot be applied there without the explicitly defined limiting convention. **Sources:** readers
2 and 5.

**Necessary definition and invariance suppliers:** `def-seifert-s-equivalence-and-conway-normalization` defines integral unimodular basis congruence and elementary Seifert enlargements/reductions; it defines the Conway polynomial by ∇_unknot=1 and ∇_+−∇_−=z∇_0 with Δ_K(t)=∇_K(t^(1/2)−t^(−1/2)) after symmetric Δ(1)=1 normalization. `thm-seifert-s-equivalence-and-conway-arf-bridge` proves ambient-isotopic surfaces have S-equivalent forms by common stabilizations, then derives Arf(K)=a_2(∇_K) mod2 by a symplectic-basis determinant expansion. This explicitly discharges the previously unnamed Conway convention.
### KT-13 — Dehn surgery on knots and homology

#### Dehn surgery on knots and homology

**Pages:** `dehn-surgery-on-knots-and-homology` /
`dehn-surgery-on-knots-and-homology-examples`.

**A items:** `def-oriented-slope-and-knot-dehn-filling` fixes an oriented
primitive slope $p\mu+q\lambda$ on the KT-02 peripheral torus and defines
$p/q$-filling by gluing a solid torus whose meridian maps to that slope;
$(p,q)$ and $(-p,-q)$ represent the same unoriented slope. `lem-knot-surgery-first-homology-mayer-vietoris` gives
$H_1(E_K(p/q);\mathbb Z)\cong\mathbb Z/|p|$ for $p\ne0$ and $\mathbb Z$ for
$p=0$. `thm-framed-knot-surgery-trace-boundary` constructs the oriented
4-dimensional trace and proves its upper boundary is the filled 3-manifold,
with the framing measured against the preferred longitude.

**Proof design and prerequisites:** apply Mayer–Vietoris to the exterior and
solid torus; the meridian relation is $p[\mu]+q[\lambda]=p[\mu]=0$ in
$H_1(E_K)\cong\mathbb Z$. Prove the trace-boundary identification from the
local handle attachment convention, checking the sign against the oriented
normal framing. This is a homology theorem only: it does not classify fillings
with trivial $H_1$ or claim that a homology sphere is $S^3$. **Local prerequisite modules:** `lem-knot-surgery-first-homology-mayer-vietoris`, `thm-framed-knot-surgery-trace-boundary`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-13-worked-cases`, `cex-knot-kt-13-boundary-case`.

**B leaves:** Unknot 0-surgery is S1×S2, 1-surgery is S3 and p/q surgery is the conventionally oriented lens space L(p,q); first homology has order p|. | A homology sphere is not characterized by H1=0: a nonmeridional ±1 trefoil surgery has zero H1 but nontrivial π1 by the stated filling obstruction (choose orientation convention before naming it). **Sources:** reader 4; exact local surgery-trace supplier is listed in the
coverage file.

**Trace category:** An ordinary 2-handle attachment gives the integer-framed trace. A rational p/q filling uses an explicit integral continued-fraction chain (or a separately defined rational-surgery cobordism); it is not a single arbitrary-rational-framed smooth 2-handle. The continued-fraction gluing calculation and orientation are part of the trace boundary proof.
### KT-14 — Three-manifold surgery presentations and Kirby moves

#### Three-manifold surgery presentations and Kirby moves

**Pages:** `three-manifold-surgery-presentations-and-kirby-moves` /
`three-manifold-surgery-presentations-and-kirby-moves-examples`.

**A items:** `def-integral-framed-link-surgery-diagram` records an oriented
link in $S^3$ with an integer framing on each component, measured against its
preferred longitude. `thm-lickorish-wallace-framed-link-presentation` states
that every closed connected oriented smooth 3-manifold is obtained by integral
framed-link surgery. `thm-kirby-moves-classify-framed-link-presentations`
states that two such diagrams give orientation-preservingly diffeomorphic
manifolds exactly when related by isotopy, handle slides and $\pm1$-framed
unknot stabilization/destabilization.

**Proof design and prerequisites:** use the now-published
`lem-relative-three-manifolds-admit-parametrized-link-surgery-presentations`
with base $S^3$ and empty external boundary, and prove that each framed
parallel is $\lambda+n\mu$ with longitude coefficient $+1$. For completeness,
specialize the published `lem-relative-three-bordism-surgery-presentation`
to the closed undecorated $S^3$ base. Supply a local proof that its $O3$
integer-framed-knot/zero-meridian operation is generated in $S^3$ by framed
slides and split $\pm1$ stabilization/destabilization, tracking actual bands,
crossing changes and framings in both parity cases. Retain the proved
handle-slide and blow-up/blow-down correspondence. These published relative
suppliers include their actual bounding, common-middle and Cerf/movie
prerequisites; none of those obligations is replaced by a citation. The
$O3$ reduction is asserted only for the $S^3$ base, without changing the
published general-base theorem. This owner-approved proof-route update
reflects publication commit `29450da28f`; the full closed-manifold statements
and A/B item scope remain unchanged. **Local prerequisite modules:** `thm-lickorish-wallace-framed-link-presentation`, `thm-kirby-moves-classify-framed-link-presentations`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-14-worked-cases`, `cex-knot-kt-14-boundary-case`.

**B leaves:** The empty surgery diagram gives S3; a zero-framed unknot gives S1×S2; a p-framed unknot gives the declared L(p,1). Empty diagram and a disjoint +1-framed unknot describe S3 yet are not diagrams with the same component count; Kirby stabilization is required beyond diagram isotopy. **Sources:** reader 4;
the source limits are reader 4, Hatcher §§1.1–1.2 and Thurston Ch. 5 (context only, not complete Kirby/Cerf proofs); the geometry and proof modules remain separately owed.
### KT-16 — Torus knots and Seifert-fibered exteriors

#### Torus knots and Seifert-fibered exteriors

**Pages:** `torus-knots-and-seifert-fibered-exteriors` /
`torus-knots-and-seifert-fibered-exteriors-examples`.

**A items:** `def-coprime-torus-knot` defines the curve of primitive slope
$(p,q)$ on an unknotted Heegaard torus, with orientation and mirror
conventions. `thm-torus-knot-group-presentation` proves
$\pi_1(E_{T(p,q)})=\langle x,y\mid x^p=y^q\rangle$ and identifies its central
regular fiber and peripheral meridian/longitude words. `thm-torus-knot-alexander-and-genus-formulas` derives
$g(T(p,q))=(|p|-1)(|q|-1)/2$ and
$\Delta_{T(p,q)}(t)\doteq (t^{|pq|}-1)(t-1)/((t^{|p|}-1)(t^{|q|}-1))$.

**Proof design and prerequisites:** split the exterior along the annulus in
the Heegaard torus into two solid tori; van Kampen identifies core classes and
gives the single relation. Compute a meridian-longitude word from a Bezout
solution to $p\alpha+q\beta=1$ and prove primitivity and zero linking of the
longitude. Construct the standard plumbing of $|p|-1$ by $|q|-1$ signed Hopf
bands, count genus, then apply KT-07's determinant formula. **Local prerequisite modules:** `thm-torus-knot-group-presentation`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-16-worked-cases`, `cex-knot-kt-16-boundary-case`.

**B leaves:** For T(2,3), compute group ⟨x,y:x²=y³⟩, Δ=t²−t+1 and g=1; T(1,q) is unknot. T(2,2) has two components and is not in the coprime knot genus formula. **Sources:** readers 1, 2 and 4.
### KT-17 — Satellite knots and JSJ tori

#### Satellite knots and JSJ tori

**Pages:** `satellite-knots-and-jsj-tori` /
`satellite-knots-and-jsj-tori-examples`.

**A items:** `def-satellite-pattern-companion-and-winding-number` defines a
pattern $P\subset S^1\times D^2$, winding number, nontrivial companion, and
the satellite $P(K)$ with essential-torus assumptions explicit.
`lem-satellite-torus-is-essential` proves the gluing torus is incompressible
and not boundary parallel under the stated pattern and companion conditions.
`thm-jsj-decomposition-of-knot-exteriors` gives existence and uniqueness up to
isotopy of the minimal family of incompressible tori cutting a compact
orientable irreducible knot exterior into atoroidal or Seifert-fibered pieces.
`cor-satellite-companion-is-detected-by-jsj` identifies the companion piece
under the stated nontriviality hypotheses.

**Proof design and prerequisites:** prove exterior irreducibility by putting
a sphere transverse to $K$ and removing innermost intersection circles.
Essentiality follows from incompressible annuli in pattern and companion
exteriors and the non-boundary-parallel hypothesis. For JSJ, prove the
characteristic-submanifold existence and uniqueness using incompressible
surfaces, minimization of intersection number, and isotopy of parallel
components. The existing “combed geometric decomposition” is a braid theorem,
not JSJ. Expand any use of the characteristic-submanifold theorem into named
local modules and exact proof routes in the prerequisite map. **Local prerequisite modules:** `lem-satellite-torus-is-essential`, `thm-jsj-decomposition-of-knot-exteriors`, `cor-satellite-companion-is-detected-by-jsj`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-17-worked-cases`, `cex-knot-kt-17-boundary-case`.

**B leaves:** For a nontrivial companion and a cable pattern with the stated incompressible nonproduct exterior, identify the companion exterior on one side of its essential torus. The core pattern on a companion has a product region: its chosen tubular torus can be boundary parallel, so the essential-torus conclusion needs the nonproduct hypothesis. **Sources:** reader 4/5.
### KT-18 — Hyperbolic knot complements and volume

#### Hyperbolic knot complements and volume

**Pages:** `hyperbolic-knot-complements-and-volume` /
`hyperbolic-knot-complements-and-volume-examples`.

**A items:** `def-finite-volume-hyperbolic-knot-exterior` defines a complete
finite-volume curvature $-1$ metric on the interior of a compact knot
exterior, with one cusp and its peripheral torus. `lem-hyperbolic-knot-exterior-irreducibility-and-boundary-incompressibility` proves the required
topological hypotheses for an atoroidal, non-Seifert-fibered exterior.
`thm-thurston-hyperbolization-for-atoroidal-knot-exteriors` establishes the
geometric conclusion under irreducibility, boundary-incompressibility,
atoroidality and non-Seifert-fibered assumptions. `thm-mostow-prasad-rigidity-and-knot-volume` proves the complete metric and volume are determined by the
oriented hyperbolic exterior up to the theorem's isometry convention.

**Proof design and prerequisites:** do not compress geometrization into a
citation. Name local modules for cusp completeness and finite-volume
truncation; pared-structure construction; the hyperbolic alternative under
the exact torus-boundary hypotheses; Mostow–Prasad rigidity via boundary-at-
infinity extension and straightening; and finiteness/isotopy invariance of the
volume integral. Each receives an exact theorem contract and proof-level route,
not a generic “prove hyperbolization” placeholder. The theorem excludes torus
and satellite knots unless their relevant JSJ pieces meet its hypotheses.
**Local prerequisite modules:** `lem-nontrivial-knot-exterior-irreducible-boundary-incompressible`, `thm-thurston-hyperbolization-for-atoroidal-knot-exteriors`, `thm-mostow-prasad-rigidity-and-knot-volume`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-18-worked-cases`, `cex-knot-kt-18-boundary-case`.

**B leaves:** The figure-eight complement glues two regular ideal tetrahedra and has volume2 v3≈2.02988; verify edge angle and cusp completeness equations. Trefoil exterior is Seifert-fibered with central regular fiber and does not satisfy the non-Seifert hypothesis of the hyperbolization contract. **Sources:** reader 4.
### KT-19 — Hyperbolic Dehn filling and exceptional slopes

#### Hyperbolic Dehn filling and exceptional slopes

**Pages:** `hyperbolic-dehn-filling-and-exceptional-slopes` /
`hyperbolic-dehn-filling-and-exceptional-slopes-examples`.

**A items:** `def-cusp-slope-length` defines Euclidean length of a primitive
slope on a chosen horospherical cusp section and records the scale change.
`lem-one-cusped-deformation-parameters-and-holonomy` constructs the local
complex deformation and peripheral holonomy parameters near the complete
structure. `thm-thurston-hyperbolic-dehn-filling` proves that for a complete
finite-volume hyperbolic 3-manifold with $k$ torus cusps, a neighborhood of the
complete point in the $k$ surgery-parameter spheres gives hyperbolic
structures; in particular all but finitely many primitive integral filling
slopes at each cusp are hyperbolic. It uses the exact smooth filling
parameters for ordinary manifolds and does not call cone/orbifold parameters
ordinary Dehn fillings.

**Proof design and prerequisites:** prove the local deformation-space theorem
for ideal triangulations and the independent Mostow-rigidity input; solve the
peripheral holonomy equations, verify the cusp-completeness criterion, and
identify the topological filling with the resulting holonomy quotient. Then
all sufficiently large slopes fall in the deformation neighborhood, leaving
only finitely many exceptional slopes. No numeric universal length threshold
or “at most ten” count is asserted without a separate proof. Cosmetic surgery
is reserved for terminal KT-51. **Local prerequisite modules:** `lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy`, `lem-dehn-filling-deformation-and-completeness`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-19-worked-cases`, `cex-knot-kt-19-boundary-case`.

**B leaves:** Figure-eight zero-filling caps its punctured-torus fiber and gives a torus bundle with monodromy [[2,1],[1,1]], hence nonhyperbolic. Nonprimitive slope(2,0) is not an ordinary Dehn filling meridian; its cone/orbifold parameter cannot be used as a primitive smooth slope. **Sources:** reader
4, Thurston Ch. 5, Theorem 5.8.2; the notes leave deformation and rigidity
prerequisites as separate modules.
### KT-21 — Smooth and topological knot concordance

#### Smooth and topological knot concordance

**Pages:** `smooth-and-topological-knot-concordance` /
`smooth-and-topological-knot-concordance-examples`.

**A items:** `def-smooth-knot-concordance` defines an oriented smooth annulus
properly embedded in $S^3\times[0,1]$ with boundary the two endpoint knots.
`def-locally-flat-topological-knot-concordance` uses a locally flat topological
annulus and does not require differentiability. `def-smooth-and-topological-slice-genus` defines $g_4^{sm}$ and $g_4^{top}$ as the minimum genus of a
properly embedded connected surface in $B^4$ bounded by the knot in the
respective category. `thm-knot-concordance-is-an-abelian-group` proves that
smooth oriented concordance classes form an abelian group under connected sum,
with inverse given by the mirror with reversed orientation; it separately
records that the topological locally flat classes form a group.

**Proof design and prerequisites:** concatenate annuli to prove transitivity,
use collars to smooth the gluing in the smooth category, and use local-flat
charts for topological gluing. Connected sum is well-defined by placing
representatives in disjoint balls. Construct the inverse annulus by the
standard saddle movie from $K\#(-K)$ to the unknot and verify its
embedded trace; do not infer smooth concordance from abstract bordism. Minimum
genus exists because the admissible genus set is a nonempty subset of
$\mathbb N$ (KT-04 gives a Seifert surface pushed into $B^4$). **Local prerequisite modules:** `thm-knot-concordance-is-an-abelian-group`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-21-worked-cases`, `cex-knot-kt-21-boundary-case`.

**B leaves:** Exhibit the collared ribbon disk for K#(reverse mirror K), proving its smooth and hence locally-flat slice class is zero. Any two oriented circles are abstractly cobordant, but unknot and trefoil are not smoothly concordant because their Seifert signatures differ; abstract cobordism is weaker than embedded annulus concordance. **Sources:** reader 5; new category definitions are required.

**PL boundary:** `def-locally-flat-pl-knot-concordance` separately fixes a proper locally-flat PL annulus in the standard PL S3×I, with PL product collars and local pair charts(R4,R2)/(R4_+,R2_+). Arbitrary PL surfaces with cone singularities are excluded. No smooth/PL/locally-flat-topological concordance groups are identified by the three-dimensional knot-approximation theorem; any four-dimensional smoothing equivalence needs its own exact relative smoothing theorem.
### KT-22 — Algebraic concordance and metabolic forms

#### Algebraic concordance and metabolic forms

**Pages:** `algebraic-knot-concordance-and-metabolic-forms` /
`algebraic-knot-concordance-and-metabolic-forms-examples`.

**A items:** `def-metabolic-seifert-form-and-algebraic-knot-concordance` defines
a metabolizer $M\subset H_1(F;\mathbb Z)$ of half rank on which the Seifert
pairing vanishes, defines the Witt class under direct sum and inverse, and
distinguishes algebraic concordance from embedded concordance. `lem-slice-disk-induces-seifert-metabolizer` proves that a locally flat slice disk (and
hence a smooth slice disk) induces such a metabolizer, with the precise
Alexander-module and intersection form hypotheses. `thm-levine-algebraic-concordance-classification` states the sourced classification of the
algebraic concordance group as Z^∞ ⊕ (Z/2)^∞ ⊕ (Z/4)^∞ via rational isometric structures and their real signatures and number-field/local Witt invariants, not signatures and Arf alone and records
which hypotheses make the map from geometric concordance surjective.

**Proof design and prerequisites:** cut the 4-ball along the slice disk, use
the resulting homology cobordism of the Seifert surface, and identify the
kernel of the inclusion map as a half-rank isotropic subgroup. Prove the
metabolizer is integral and primitive; a rational Lagrangian alone is
insufficient for the integral Seifert form. For the classification theorem,
decompose the isometric structure over the rational function field into
primary summands, prove the local signature and discriminant invariants, then
assemble the Witt group using the exact source's number-theoretic lemmas.
Do not use the unrelated library `def-witt-algebra` for Witt groups.
**Local prerequisite modules:** `lem-slice-disk-induces-seifert-metabolizer`, `thm-levine-algebraic-concordance-surjection-proof`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-22-worked-cases`, `cex-knot-kt-22-boundary-case`.

**B leaves:** The empty Seifert matrix is metabolic; the trefoil V above is not, since its −1 signature is2. A zero-dimensional isotropic subspace of the rank-two trefoil lattice is not a Lagrangian; isotropic without half-rank is insufficient. Prove rational full Lagrangians do saturate to integral ones. **Sources:** reader 5.
### KT-23 — Fox–Milnor factorization and slice obstructions

#### Fox–Milnor factorization and slice obstructions

**Pages:** `fox-milnor-factorization-and-slice-obstructions` /
`fox-milnor-factorization-and-slice-obstructions-examples`.

**A items:** `thm-locally-flat-slice-implies-fox-milnor-factorization` proves
that if $K$ is locally flat slice, then
$\Delta_K(t)\doteq f(t)f(t^{-1})$ for a Laurent polynomial $f$ with integer
coefficients; it states the corresponding algebraically slice implication
and normalization separately. `cor-nonfactorization-obstructs-sliceness`
states the contrapositive as a necessary obstruction only. `thm-metabolizer-implies-levine-tristram-signature-vanishing` proves the signature vanishes at
unit complex numbers away from roots of $\Delta$ whenever the form is
metabolic.

**Proof design and prerequisites:** use KT-22's integral metabolizer and the
KT-06 matrix presentation to choose a basis adapted to the metabolizer; the
Seifert matrix becomes block triangular modulo the metabolizer, and its
determinant factors as a polynomial times its reciprocal. For the signature,
the Hermitian form has complementary isotropic subspaces, so positive and
negative indices agree. Explicitly state that factorization/vanishing does
not prove sliceness. The general Fox determinant rule is not used; this is a
Seifert-form proof. **Local prerequisite modules:** `thm-locally-flat-slice-implies-fox-milnor-factorization`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-23-worked-cases`, `cex-knot-kt-23-boundary-case`.

**B leaves:** For the ribbon square knot Δ=(t²−t+1)² is a Fox–Milnor norm; exhibit its block Seifert metabolizer. Trefoil Δ=t²−t+1 is not an integral reciprocal norm because its value at−1 is3, not a square; this obstructs locally-flat sliceness. **Sources:** reader 5/2.
### KT-24 — Casson–Gordon invariants and sliceness obstructions

#### Casson–Gordon invariants and sliceness obstructions

**Pages:** `casson-gordon-invariants-and-sliceness-obstructions` /
`casson-gordon-invariants-and-sliceness-obstructions-examples`.

**A items:** `def-finite-order-character-of-a-branched-cover` fixes a finite
cyclic character on $H_1(\Sigma_q(K))$ and its induced local system.
`def-casson-gordon-signature-defect` defines the Casson–Gordon Witt invariant τ(Σ_q(K),χ) in W(C(t))⊗Q using the zero-surgery on the branch lift, a Z_p×Z character, a bounding multiple r and the difference (twisted form−ordinary form)/r. Its averaged unit-circle signature functions are then defined from this Witt class; an arbitrary three-manifold rho/signature defect is not silently the same invariant. `lem-slice-disk-induces-branched-cover-metabolizer` proves a locally flat slice disk gives an
invariant metabolizer in the linking form of the cyclic branched cover.
`thm-casson-gordon-slice-obstruction` states that the source's character
condition on that metabolizer forces this Witt τ class, and hence its averaged signature evaluations, to vanish;
a nonzero defect obstructs sliceness.

**Proof design and prerequisites:** build the branched-cover 4-manifold from
the slice disk, prove the boundary linking form is nonsingular when the cover
is a rational homology sphere, and identify the metabolizer by duality. Define
twisted homology from the character representation, prove the signature is
independent of the chosen bounding 4-manifold by gluing and Novikov
additivity, then prove the vanishing statement for metabolizing characters.
The full Casson–Gordon machinery is not replaced by a citation: item contracts
must include the character-extension lemma, twisted-form nonsingularity,
bordism/gluing invariance and exact prime-power assumptions. **Local prerequisite modules:** `lem-casson-gordon-characters-and-linking-metabolizers`, `lem-casson-gordon-signature-defect-and-vanishing`, `thm-casson-gordon-slice-obstruction`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-24-worked-cases`, `cex-knot-kt-24-boundary-case`.

**B leaves:** Trefoil double-cover linking group is Z/3 with a nonzero ±1/3 generator pairing; no subgroup has order√3, so no metabolizer exists. A character of Z/3 not vanishing on a proposed subgroup cannot be treated as extending from a metabolizer; compute the annihilator before applying τ vanishing. For an actual slice test use the square knot cover Z/3⊕Z/3 with opposite pairings and diagonal metabolizer. **Sources:** reader 5.
### KT-25 — Freedman’s theorem and topological sliceness

#### Freedman’s theorem and topological sliceness

**Pages:** `freedman-theorem-and-topological-sliceness` /
`freedman-theorem-and-topological-sliceness-examples`.

**A items:** `def-good-fundamental-group-for-disk-embedding` defines the exact
good-group class used by the disk-embedding theorem and includes the infinite cyclic group in it. A knot exterior generally has nonabelian group; only its abelianization is Z. The Alexander-one surgery construction produces the four-dimensional good-group problem with π1=Z. `thm-freedman-disk-embedding-for-good-groups` states the locally flat disk-embedding conclusion with its
algebraic self-intersection and fundamental-group hypotheses. `lem-alexander-one-knot-produces-a-good-group-disk-obstruction` constructs from
$\Delta_K(t)=1$ the required capped immersed surface and algebraically
trivializes its intersections. `thm-alexander-polynomial-one-implies-topologically-slice` concludes local-flat topological sliceness in $B^4$.

**Proof design and prerequisites:** specify separate modules for the
good-group criterion and controlled disk-embedding theorem; construction of
the capped grope/Casson tower; Whitney-disk framing and algebraic intersection
cancellation; convergence of the tower to a locally flat disk; and matching
the disk boundary to the original knot. Prove the Alexander-module input that
$\Delta=1$ removes the relevant obstruction, then apply the disk theorem.
Livingston's survey states this hard result but does not prove the disk
embedding machinery; the cited theorem is not treated as local proof. Do not
infer smooth sliceness. **Local prerequisite modules:** `def-freedman-good-group-and-disk-embedding-data`, `thm-freedman-disk-embedding-theorem-proof-modules`, `lem-freedman-casson-handle-skyscraper-and-surgery-modules`, `thm-alexander-polynomial-one-implies-topologically-slice`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-25-worked-cases`, `cex-knot-kt-25-boundary-case`.

**B leaves:** A positive untwisted Whitehead double has Seifert determinant a unit; the established topological theorem supplies a locally-flat slice disk after its future proof is built. Trefoil has nonunit Δ, so the Alexander-one theorem has no conclusion; failure of a sufficient condition alone is not a nonsliceness proof. **Sources:** reader 5.
### KT-26 — Smooth sliceness and four-ball genus obstructions

#### Smooth sliceness and four-ball genus obstructions

**Pages:** `smooth-sliceness-and-four-ball-genus-obstructions` /
`smooth-sliceness-and-four-ball-genus-obstructions-examples`.

**A items:** `def-integral-intersection-lattice-of-a-simply-connected-four-manifold` defines $H_2(X;\mathbb Z)$ modulo torsion with its unimodular
intersection pairing. `thm-donaldson-definite-diagonalization` states that a
closed smooth simply connected oriented 4-manifold with positive-definite
integral intersection form has the standard diagonal lattice. `lem-slice-branched-cover-produces-definite-four-manifold` constructs the relevant
branched cover or surgery trace from a smooth slice assumption and computes
its fundamental group and intersection lattice. `cor-lattice-obstruction-to-smooth-sliceness` gives the resulting lower bound on $g_4^{sm}$ under the
exact definiteness, simple-connectivity and boundary conditions.

**Proof design and prerequisites:** first prove the branched-cover/surgery
construction with the stated smooth disk and boundary. The Donaldson proof
requires explicit modules: define the ASD moduli space and its Fredholm index;
prove regularity after the permitted perturbation and orientability; apply
Weitzenböck to rule out unwanted solutions; prove Uhlenbeck compactness and
removable singularities; establish Taubes existence of an irreducible
instanton on the positive-definite manifold; describe reducible ends and
their spectral-flow labels; compactify the one-instanton moduli space and
derive the lattice embedding/diagonalization contradiction. These are local
authoring obligations, not covered by general real intersection-form pages or
the 1983 citation alone. Keep any H1-mod-2 generalization out unless separately
proved. **Local prerequisite modules:** `def-asd-moduli-fredholm-index-and-lattice-setup`, `lem-asd-regularity-perturbation-and-orientability`, `lem-uhlenbeck-compactness-and-removable-singularities`, `lem-taubes-positive-definite-instanton-existence`, `lem-donaldson-reducible-ends-and-one-instanton-compactification`, `thm-donaldson-definite-diagonalization`, `lem-slice-branched-cover-produces-definite-four-manifold`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-26-worked-cases`, `cex-knot-kt-26-boundary-case`.

**B leaves:** E8 is an even positive-definite unimodular rank8 lattice and has no norm-one vector, so it is not diagonal; Donaldson excludes it for closed smooth simply-connected positive-definite4-manifolds. The topological E8 realization does not satisfy the smooth hypothesis; an integral lattice alone is not a knot nonsliceness certificate without the specified smooth gluing construction. **Sources:** reader 5; Donaldson's complete source is read but local
gauge prerequisites remain substantial.

**Precise obstruction bridge:** Let W be a smooth compact simply connected positive-definite 4-manifold with boundary Σ_2(K), with a specified lattice. If K were smoothly slice, the smooth slice-cover B is a rational ball; glue W to −B only after proving the boundary identification and π1(W∪−B)=1 by van Kampen (including normal generation from the boundary). The resulting closed lattice forces an isometric embedding of Q_W into a diagonal integral lattice. Failure of that embedding obstructs sliceness. Neither rational-ball homology alone nor definiteness alone proves simple connectivity. A positive-genus bound requires a separately computed surface-cover rank/signature and gluing argument; the nonsliceness theorem by itself does not supply a numeric genus bound.
### KT-27 — Satellite operators and concordance filtrations

#### Satellite operators and concordance filtrations

**Pages:** `satellite-operators-and-knot-concordance-filtrations` /
`satellite-operators-and-knot-concordance-filtrations-examples`.

**A items:** `def-satellite-induced-concordance-operator` defines the map on
smooth or locally flat concordance classes induced by a fixed pattern, with
winding number and strong winding conditions separate. `def-blanchfield-pairing-and-higher-order-rho-invariant` defines the localized Alexander module,
Blanchfield linking form, PTFA coefficient system and $L^2$ signature defect
used in the cited theorems. `thm-cochran-davis-ray-strong-winding-injectivity`
states the exact $\mathbb Z[1/n]$-homology concordance injectivity for nonzero winding $n$ and strong-winding $\pm1$ injectivity for exotic-smooth and locally flat topological concordance. Ordinary smooth-concordance injectivity under the latter hypothesis is conditional on the smooth four-dimensional Poincaré conjecture. `thm-cha-kim-winding-zero-iterates-infinite-rank` states the 2025 theorem: for a winding-zero
pattern whose axis has nonzero self-pairing in the Blanchfield form of $P(U)$,
for C=C_top or C_sm, the quotient ⟨P^n(C)⟩/⟨P^{n+1}(C)⟩ has infinite rank for every n≥0, and P^n is not a homomorphism for n≥1. These are Theorems A/B under the nonzero Blanchfield self-pairing hypothesis. The separate coprime-Alexander hypotheses belong to Theorem C on distinguishing patterns, not to A/B.
`op-cha-kim-smooth-graded-quotients-for-topologically-slice-images` records
their Remark 1.1 question whether smooth graded quotients have infinite rank
for every winding-zero operator whose image consists of topologically slice
knots; it is a terminal source-verified question, not a premise.

**Proof design and prerequisites:** spell out the zero-surgery homology
cobordism, the weak-injectivity step, and why strong winding $\pm1$ is stronger
than ordinary winding $\pm1$. For Cha–Kim, prove the localized Blanchfield
form and its bordism invariance, the amenable-signature theorem for the
specified PTFA derived-series quotients, the $L^2$-rho estimate for the
pattern infection, the coprime Alexander separation, and the induction over
iterates. Each is a separate local lemma with its exact group class and
signature bound; the source cites the Amenable Signature Theorem and does not
prove all those modules. **Local prerequisite modules:** `lem-cdr-zero-surgery-pattern-homology-cobordism`, `lem-cdr-weak-injectivity-and-auxiliary-pattern-reduction`, `thm-cochran-davis-ray-strong-winding-injectivity`, `lem-cha-kim-integral-solvability-and-blanchfield-bordism`, `thm-amenable-signature-vanishing-for-solvable-bordisms`, `lem-cha-kim-higher-order-rho-bound-and-coprime-separation`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-27-worked-cases`, `cex-knot-kt-27-boundary-case`.

**B leaves:** The core pattern is the identity and strong winding1; a (n,1) cable has winding n and illustrates localized homology-concordance input with Z[1/n]. A nontrivial local-knot pattern has knotted P(U), yet its solid-torus meridian can still be a normal generator; knotted P(U) alone does not prove failure of strong winding. No unsupported winding1 counterexample is asserted. **Sources:** reader
5; Cochran–Davis–Ray v3 (2013) and Cha–Kim v2 (2025), with final locators in
the dossier.
### KT-28 — Ribbon knots and the slice-ribbon problem

#### Ribbon knots and the slice-ribbon problem

**Pages:** `ribbon-knots-and-slice-ribbon-problem` /
`ribbon-knots-and-slice-ribbon-problem-examples`.

**A items:** `def-ribbon-disk-and-ribbon-knot` defines a ribbon disk as a smooth
immersed disk in $S^3$ with only ribbon singularities whose pushed-in
resolution is an embedded disk in $B^4$; it fixes the equivalent banded-link
movie convention. `thm-ribbon-knot-is-smoothly-slice` constructs the embedded
disk by resolving each ribbon singularity with a 1-handle/0-handle pair.
`op-slice-ribbon-conjecture` asks whether every smooth slice knot in $S^3$ is
ribbon, in the exact category and isotopy convention. It is terminal.

**Proof design and prerequisites:** define ribbon singularities with local
coordinates, prove the local resolution is embedded and orientable, and glue
the finitely many resolved patches to obtain a proper smooth disk with boundary
$K$. The converse is not claimed. For the open problem, state current status,
known partial classes and source/date; do not use the conjecture as a supplier.
**Local prerequisite modules:** `lem-ribbon-singularity-local-resolution`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-28-worked-cases`, `cex-knot-kt-28-boundary-case`.

**B leaves:** K#(reverse mirror K) has the explicit standard banded-unlink ribbon disk; apply it to the trefoil to get the nontrivial square-knot ribbon example. Nonslice trefoil is certainly not ribbon; the converse slice⇒ribbon remains the separately qualified question and is not established by vanishing elementary obstructions. **Sources:** reader 5.
### KT-29 — Kauffman bracket state sum and the Jones polynomial

#### Kauffman bracket state sum and the Jones polynomial

**Pages:** `kauffman-bracket-state-sum-and-jones-polynomial` /
`kauffman-bracket-state-sum-and-jones-polynomial-examples`.

**A items:** `def-kauffman-bracket-smoothing-and-loop-value` fixes the local
state weights $A$ and $A^{-1}$, loop value $\delta=-A^2-A^{-2}$, and the
crossing convention. `alg-kauffman-bracket-state-sum` takes a finite unoriented
regular diagram, enumerates its $2^c$ smoothing states, multiplies each state
weight by $\delta^{\#loops-1}$, and returns a Laurent polynomial in $A$;
it terminates after a finite traversal. `thm-normalized-bracket-is-an-oriented-link-invariant` defines
$f_K(A)=(-A^3)^{-w(K)}\langle K\rangle$ and proves Reidemeister invariance.
`thm-bracket-state-sum-matches-library-jones-specialization` proves the exact
substitution $V_K(t)=f_K(t^{-1/4})$ in the current Hecke-trace convention; it
is a comparison of two constructions, not a duplicate definition of the Jones
invariant.

**Proof design and prerequisites:** draw the source crossing with the over-strand gap and local orientation fixed; in that drawing the horizontal smoothing is A with coefficient $A$ and the vertical smoothing is B with coefficient $A^{-1}$. Those labels are tied to the displayed crossing, not to an orientation-free slogan for every rotated picture. Prove R2 cancellation by multiplying the two crossing skein expansions, R3 by the three-strand Temperley–Lieb relation, and R1 by the factor $-A^{\pm3}$, then cancel writhe. For the comparison, match the unknot value and positive/negative crossing skein relations after the displayed substitution; verify the two variables and mirror rule on a single positive crossing. The loop value is $\delta=-A^2-A^{-2}$ throughout. **Local prerequisite modules:** `lem-kauffman-bracket-r2-r3-identities`, `lem-kauffman-bracket-curl-and-writhe-correction`, `lem-hecke-bracket-trace-dictionary-and-local-descent`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-29-worked-cases`, `cex-knot-kt-29-boundary-case`.

**B leaves:** For the positive trefoil in the declared convention, V=t+t³−t⁴; its mirror is t^−1+t^−3−t^−4, and unknot V=1. An R1 kink multiplies the raw bracket by−A³, so raw bracket is not an unframed invariant without writhe correction. **Sources:** reader 3, Kauffman 1990 §§III and VI, Kauffman 2022 v2 §2, and the local HOMFLYPT/Jones page; exact normalizations are cross-checked in the source ledger.
### KT-30 — Kauffman and Dubrovnik polynomials from BMW algebras

#### Kauffman and Dubrovnik polynomials from BMW algebras

**Pages:** `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` /
`kauffman-and-dubrovnik-polynomials-from-bmw-algebras-examples`.

**A items:** `def-kauffman-regular-isotopy-and-dubrovnik-conventions` fixes an unoriented regular-isotopy polynomial $L$ by its crossing, circle, and curl rules, then defines the oriented normalization $F_K(a,z)=a^{-w(K)}L_K(a,z)$ with the negative writhe exponent. It separately fixes the Dubrovnik skein convention $D_+-D_-=z(D_0-D_\infty)$, curl multipliers $a^{\pm1}$, and the printed conversion $D_K(a,z)=-i^{-w(K)}(-1)^{c(K)}L_K(ia,-iz)$ for $i^2=-1$, recording the exact component and writhe conventions. `def-bmw-algebra-with-dubrovnik-relations` is a comparison/repair specification for the existing draft `def-bmw-algebra-with-fixed-kauffman-skein-convention`, with that existing ID retained as the sole eventual definition owner; it records generators, involution and coefficient ring with $g_i-g_i^{-1}=z(1-e_i)$, $g_ie_i=\rho^{-1}e_i$, $e_i^2=\delta e_i$, and $z(\delta-1)=\rho-\rho^{-1}$, plus a complete dictionary to the $a,z$ Dubrovnik parameters. `lem-bmw-descending-tangle-spanning-and-independence` proves crossing-switch descent spans by descending tangles, identifies the unique descending representative for each boundary matching, and proves linear independence using the closure-pairing determinant over the stated generic coefficient field before any specialization. `thm-bmw-markov-trace-gives-dubrovnik-invariant` constructs the trace on the BMW tower, checks cyclicity and both stabilization scalars, and proves the normalized closure is invariant under oriented Markov moves. `thm-kauffman-and-dubrovnik-conversion` proves the regular-isotopy/oriented conversion formulas locally by checking the skein, curl, component and writhe factors; the printed Kauffman proposition alone is not accepted as proof because it omits that derivation. `alg-kauffman-polynomial-from-bmw-braid-closure` takes a finite signed braid word, computes its BMW image and trace, applies the specified component/writhe correction and returns the polynomial; it terminates by a finite matrix/algebra calculation over the declared Laurent ring.

**Proof design and prerequisites:** keep regular-isotopy $L$, oriented ambient-isotopy $F$, and Dubrovnik $D$ as separate contracts. The convention audit uses Kauffman, *An Invariant of Regular Isotopy*, 1990, Definition 2.4 (PDF p. 7/printed p. 422) for $F=a^{-w}L$ and §VII (printed pp. 466–469) for the $D$ conversion, with the corrected factor $-i^{-w}(-1)^c$. The source proves $L$ by induction but omits proof of the conversion; it does not provide a complete BMW basis theorem. Existing BMW items on the Temperley–Lieb/Hecke pages are drafts and cannot discharge these modules. Reconstruct each tangle reduction, pairing determinant and trace stabilization from the stated relations, then check the unknot, positive and negative curl, Hopf link and mirror substitutions. Do not infer unframed Markov invariance from framed regular-isotopy invariance. **Local prerequisite modules:** `lem-bmw-relations-dubrovnik-parameter-dictionary`, `lem-bmw-descending-tangle-spanning`, `lem-bmw-closure-pairing-independence`, `lem-bmw-markov-trace-stabilization`, `lem-kauffman-dubrovnik-writhe-component-conversion`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-30-worked-cases`, `cex-knot-kt-30-boundary-case`.

**B leaves:** Verify unknot F=D=1, curl multipliers a±1 and F=a^−wL, and the two-component unlink Dubrovnik value1+(a−a^−1)/z. Dropping the leading minus in−i^−w(−1)^cL(ia,−iz) gives value−1 on unknot; the component/writhe factor is essential. **Sources:** reader 3, Kauffman 1990 (full verified scan), with exact correction and hash in the dossier.
### KT-31 — Skein modules for links in 3-manifolds

#### Skein modules for links in 3-manifolds

**Pages:** `skein-modules-for-links-in-three-manifolds` /
`skein-modules-for-links-in-three-manifolds-examples`.

**A items:** `def-kauffman-bracket-skein-module-of-a-three-manifold` defines
the free module on isotopy classes of framed unoriented links in an oriented
3-manifold $M$, including the empty link, modulo the bracket crossing relation
and the $\delta$-trivial-circle relation. `lem-skein-module-isomorphism-respects-framings-and-boundary` proves the quotient is invariant under
orientation-preserving diffeomorphism and that boundary collars give the
declared gluing action. `thm-skein-module-of-s-three-is-rank-one` proves the
Kauffman bracket skein module of $S^3$ is generated freely by the empty link;
`thm-skein-module-of-solid-torus-has-core-multicurve-basis` proves the stated
multicurve basis for the solid torus under the exact coefficient ring.

**Proof design and prerequisites:** use the bracket convention of KT-29. For
$S^3$, reduce any link diagram by descending-crossing skein resolution to a
linear combination of unlinks, and use the bracket invariant to prove the
unlink is not killed. For the solid torus, resolve crossings to annular simple
closed curves and prove independence by the annular closure trace/polynomial
degree. Specify whether the source's skein modules are framed links in a 3-
manifold or state spaces of marked surfaces; they are different constructions.
The Chen thesis source treats finite-fusion-category state modules of marked
surfaces and does not prove the arbitrary-3-manifold Kauffman skein module.
**Local prerequisite modules:** `lem-general-3manifold-skein-quotient-isotopy-and-gluing`, `thm-skein-module-of-s-three-is-rank-one`, `thm-skein-module-of-solid-torus-has-core-multicurve-basis`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-31-worked-cases`, `cex-knot-kt-31-boundary-case`.

**B leaves:** In S3 skein module a trivial circle is δ times the empty generator; in a solid torus z and z² are distinct basis elements over Z[A±1]. Rotating a blackboard framing by one changes the class by−A±3; unframed isotopy cannot silently identify those skein classes. **Sources:** reader 3; exact module basis proof stays local.
### KT-32 — Root-of-unity skein TQFT for 3-manifolds

#### Root-of-unity skein TQFT for 3-manifolds

**Pages:** `root-of-unity-skein-tqft-for-three-manifolds` /
`root-of-unity-skein-tqft-for-three-manifolds-examples`.

**A items:** `def-sl-two-root-of-unity-skein-parameter` fixes the exact
parameter $p$ (even, $p\ge4$), A a primitive 2p-th root, q=A², r=p/2, simple labels 0,…,r−2, and the
Temperley–Lieb loop value and the coefficient ring. `lem-jones-wenzl-idempotents-exist-below-root-order` constructs the idempotents through the
last nonvanishing quantum integer and proves the next denominator vanishes;
no division by that zero quantum integer is allowed. `def-semisimplified-temperley-lieb-fusion-category` quotients by negligible morphisms, lists its
simple labels and fusion rules, and proves rigidity, braiding and twist under
the source's pivotal convention. `def-skein-tqft-state-space-and-handlebody-pairing` defines the state space of a closed marked surface from the
Kauffman bracket skein module of a handlebody modulo the radical of the
gluing pairing. `thm-root-of-unity-skein-tqft-gluing-and-surgery-invariance`
proves the gluing axiom and the resulting normalized closed-3-manifold
invariant.

**Proof design and prerequisites:** prove the Jones–Wenzl recursion and
partial-trace identities for every denominator actually used; establish a
finite trivalent-spine spanning set for the handlebody skein module; compute
the radical and nondegenerate quotient using the fusion rules; prove the
handlebody pairing is compatible with gluing and mapping-class actions; then
prove surgery invariance under Kirby moves with the exact root-of-unity
normalization. Split the proof into local modules for module generation,
pairing nondegeneracy, Morita/handlebody gluing and surgery normalization.
Pohorence's 16-page notes define the bridge but cite the hard Blanchet–Habegger–
Masbaum–Vogel module-generation/Morita results; the citation does not close
these modules. Chen's thesis constructs Turaev–Viro state modules of marked
surfaces from a finite fusion category; it is a different construction and
does not prove this 3-manifold Kauffman-bracket skein TQFT. **Local prerequisite modules:** `lem-root-jones-wenzl-recursion-and-negligible-ideal`, `lem-root-fusion-rules-and-simple-object-completeness`, `lem-root-handlebody-spine-state-space-finite-generation`, `lem-root-handlebody-pairing-nondegeneracy-and-gluing`, `lem-root-skein-surgery-kirby-color-invariance`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-32-worked-cases`, `cex-knot-kt-32-boundary-case`.

**B leaves:** In the BHMV convention A primitive2p root, p even, labels0,…,p/2−2: p=4 has only0, p=6 has0,1; fusion1⊗1=0 at p=6 and torus state-space dimension2. For p=6, quantum integer[3]=0, so the recursion requiring its inverse is undefined; no cancellation of0/0 is permitted. **Sources:** reader 3; Pohorence Jan 2016
full notes and Chen arXiv:1502.06845v1, with exact versions in the dossier.

**Anomaly and parameter contract:** `def-extended-skein-cobordism-anomaly-data` fixes A primitive2p root for even p≥4, r=p/2, q=A², δ=−A²−A^−2 and labels0,…,r−2. With quantum integers [n]=(q^n−q^−n)/(q−q^−1) (and the defined small-root limits), projectors f0,…,f_(r−1) exist, f_(r−1) has zero quantum trace and is killed; constructing f_r would divide by [r]=0. State spaces live in the extended weighted/Lagrangian-surface cobordism category with the explicit signature/Maslov anomaly correction κ from the nonzero Gauss sums. The ordinary oriented cobordism construction is projective unless that anomaly is explicitly removed; no strict ordinary-oriented TQFT is silently asserted.
### KT-33 — Ribbon categories and Reshetikhin–Turaev knot invariants

#### Ribbon categories and Reshetikhin–Turaev knot invariants

**Pages:** `ribbon-categories-and-reshetikhin-turaev-knot-invariants` /
`ribbon-categories-and-reshetikhin-turaev-knot-invariants-examples`.

**A items:** `def-colored-framed-knot-evaluation-from-ribbon-category` fixes a
rigid braided monoidal category with twist, duality, pivotal trace and a color
on every oriented component; the output is a scalar invariant of framed
colored links. `alg-ribbon-evaluation-from-colored-braid-word` takes a colored
braid word, multiplies the corresponding braiding and inverse-braiding maps,
closes by the categorical trace, and returns the scalar; finite word length
ensures termination. `thm-ribbon-evaluation-independent-of-colored-braid-representative` proves correctness from the braid relations and Markov
stabilization scalars. `thm-twist-correction-removes-framing` proves the
specified writhe/twist normalization is an invariant of oriented unframed
links when the color twist is invertible and the scalar is the exact one in
the current supplier.

**Proof design and prerequisites:** reuse the published
`thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links` and
`thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant` only after
checking their actual color and twist hypotheses. The new bridge is a finite
word-level calculation: verify the braid generator maps satisfy Yang–Baxter,
the trace is cyclic, and the two stabilization eigenvalues are cancelled by
the declared twist. The published draft modular-category and BMW items are
not suppliers. **Local prerequisite modules:** `lem-quantum-sl2-ribbon-trace-matches-hecke-and-bracket`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-33-worked-cases`, `cex-knot-kt-33-boundary-case`.

**B leaves:** In finite-dimensional vector spaces with ordinary flip and trivial twist, a component colored by V evaluates to dim V; two components to(dim V)². A non-scalar twist on a decomposable object cannot be canceled by a single λ^−w; distinct twist eigenvalues give distinct stabilization factors on the summands. **Sources:**
reader 3; exact current ribbon supplier IDs are in the inventory.

**Exact reuse and effective input:** The generic value is in End_C(1), not automatically a ground-field scalar. A field-valued claim fixes a k-linear category with End(1)=k. The published tangle evaluator and closure trace are reused, with AC_ω and the exact mixed-orientation/duality dictionary. Unframed writhe correction uses the published absolutely-simple-color and θ_X=λ id_X hypothesis (λ≠0), not invertibility of a nonscalar twist. A colored braid must preserve component colors around its permutation cycles. An executable algorithm takes finite-dimensional matrix realizations over an effective field/rational-function field, with explicit evaluation/coevaluation/twist matrices; abstract ribbon-category existence is a theorem, not an arbitrary effective algorithm.
### KT-34 — Vassiliev invariants and chord diagrams

#### Vassiliev invariants and chord diagrams

**Pages:** `vassiliev-invariants-and-chord-diagrams` /
`vassiliev-invariants-and-chord-diagrams-examples`.

**A items:** `def-singular-knot-and-vassiliev-derivative` defines an $m$-
singular knot and the alternating finite difference of an invariant over its
$2^m$ resolutions; type $n$ means vanishing on every $(n+1)$-singular knot.
`def-framed-chord-diagram-and-four-term-relations` defines chord diagrams on
an oriented circle, the 4T relation, and the additional 1T relation for
unframed invariants. `thm-vassiliev-invariant-induces-weight-system` proves a
type-$n$ invariant induces a linear functional on degree-$n$ chord diagrams
modulo 4T (and 1T in the unframed normalization). `rem-weight-system-integration-proof-boundary` records the established characteristic-zero integration theorem as a later authoring obligation discharged by KT-35; this editorial boundary is not itself a theorem or an unresolved mathematical question.

**Proof design and prerequisites:** resolve singular crossings in disjoint
balls and show the alternating difference is unchanged by singular
Reidemeister moves. The local four-term relation follows from the two ways to
resolve the common three-strand singularity; prove each coefficient sign from
the fixed crossing convention. The 1T relation is exactly the framed/unframed
curl correction. The Bar–Natan–Stoimenow source's framing distinction is
preserved: framed weight systems satisfy 4T, unframed ones also satisfy 1T.
**Local prerequisite modules:** `lem-vassiliev-4t-from-singular-reidemeister-move`, `lem-vassiliev-framing-one-term-relation`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-34-worked-cases`, `cex-knot-kt-34-boundary-case`.

**B leaves:** For a two-component oriented link, the singular derivative at one mixed crossing of lk is±1, and a second derivative is0; on knots the restriction is0. Diagram writhe changes under unframed R1, so it is not an unframed finite-type invariant despite its simple crossing derivative. **Sources:** reader 3.
### KT-35 — The Kontsevich integral and universality

#### The Kontsevich integral and universality

**Pages:** `kontsevich-integral-and-universal-finite-type-invariants` /
`kontsevich-integral-and-universal-finite-type-invariants-examples`.

**A items:** `def-kontsevich-integral-on-parenthesized-braids` defines the
regularized configuration-space/KZ series with its completed chord-diagram
target and parenthesization. `lem-kz-connection-flatness-and-braid-relations`
proves flatness and the infinitesimal braid relations. `lem-kontsevich-regularization-and-associator-coherence` proves endpoint regularization,
associator pentagon/hexagon identities and invariance under changes of
parenthesization. `lem-kontsevich-integral-finite-type-truncation` proves the
degree-$n$ truncation is a finite type-$n$ invariant and has the identity
weight system in degree $n$. `thm-kontsevich-integral-is-universal` states that
for every degree n the degree-n symbol map is surjective over Q and the universal invariant induces the identity on the associated graded chord-diagram algebra. Any finite-type invariant of order ≤n is recovered by a linear functional on the truncation through n (including lower degrees); no knot-pair separation conclusion follows.

**Proof design and prerequisites:** give the ordered analytic/algebraic
modules: configuration-space compactification and face stratification;
integrability and convergence of the logarithmic differential form; flatness
of the KZ connection from infinitesimal braid relations; regularized limits at
collisions; the associator pentagon/hexagon from the differential equation;
invariance under the full braid/Markov/Reidemeister presentation; filtration
degree from boundary strata; and the inverse/weight-system argument for
universality. Bar–Natan–Stoimenow and Bar–Natan source summaries sketch some
of these estimates; no sketched analytic step is treated as proof. The
prerequisite map assigns every missing module a local item ID, one owner page, a noncyclic dependency contract, and the source that only outlines it. **Local prerequisite modules:** `lem-kz-connection-flatness-and-braid-relations`, `lem-kontsevich-configuration-space-compactification-faces`, `lem-kontsevich-configuration-integral-convergence-needle-estimates`, `lem-kontsevich-critical-point-normalization-and-associator`, `lem-kontsevich-braid-and-knot-isotopy-invariance`, `thm-kontsevich-universal-associated-graded-proof`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-35-worked-cases`, `cex-knot-kt-35-boundary-case`.

**B leaves:** In the unframed1T quotient, degree1 chord diagrams vanish; the Conway a2 invariant has nonzero degree2 symbol and values0 on unknot,1 on trefoil. Framed degree1 framing-number weight system does not descend through1T; this exhibits the target distinction without inventing a knot-pair separation theorem. **Sources:**
reader 3, Bar–Natan–Stoimenow arXiv:q-alg/9702009v1 §§1–2 and Kauffman 2022 v2 §§2–3; exact hashes and proof limits are in the coverage ledger.
### KT-36 — Colored Jones and the volume conjecture

#### Colored Jones and the volume conjecture

**Pages:** `colored-jones-invariant-and-volume-conjecture` /
`colored-jones-invariant-and-volume-conjecture-examples`.

**A items:** `def-normalized-colored-jones-sequence` defines the $N$-
dimensional irreducible $U_q(\mathfrak{sl}_2)$ color, the framing correction,
and the normalization $J_N(\text{unknot};q)=1$. `alg-colored-jones-from-ribbon-evaluation` invokes KT-33 for each positive integer $N$ and returns a Laurent
polynomial/rational function in the exact coefficient ring. `thm-colored-jones-finite-evaluation` proves each finite $N$ computation terminates and is
invariant under the declared unframed normalization. `op-kashaev-volume-conjecture-for-hyperbolic-knots` formulates the exact root-of-unity asymptotic
and its predicted hyperbolic volume term, with cusp normalization and the
complex-volume refinement separated; it is terminal.

**Proof design and prerequisites:** define the quantum-group module and universal $R$-matrix action using the existing Hopf/Hecke and ribbon-category interfaces, verify its braid and twist relations, and apply the finite word algorithm. State the colored Jones normalization, root sequence and volume term exactly; the conjecture is a separate terminal statement whose cited status is not a computational consequence. The volume statement is marked as a conjecture, not an output of
the finite algorithm. Record the versioned asymptotic formulation and the date/scope of the available status source; this open item is terminal and is never used as a supplier.
**B item IDs:** `ex-knot-kt-36-worked-cases`, `cex-knot-kt-36-boundary-case`.

**B leaves:** The normalized sequence has J1=1 and J2 equal to the ordinary Jones convention; for trefoil J2=t+t³−t⁴ after the declared variable transport. One finite N evaluation, even matching a volume approximation numerically, does not establish the N→∞ root-of-unity asymptotic. **Sources:** reader 3, Kauffman 2022 v2 §3 for the dated finite-type/quantum context; this proposal states the Kashaev asymptotic as a terminal conjecture formulation and does not claim a complete 2026 status search.

**Generic/reduced/root boundary:** Construct J_N(K;q) as the generic reduced Laurent invariant first, with J_N(unknot;q)=1, proving the generic quantum-dimension quotient is a Laurent polynomial in the chosen variable. Only then evaluate that polynomial at q=exp(2πi/N). Never divide by the vanishing quantum dimension at that root. The N-dimensional generic color used in the Kashaev evaluation is not a surviving color of the level(N−2) semisimplified modular category; its negligible color is not an alternate way to compute this reduced root evaluation.
### KT-37 — Khovanov homology and Jones categorification

#### Khovanov homology and Jones categorification

**Pages:** `khovanov-homology-and-jones-categorification` /
`khovanov-homology-and-jones-categorification-examples`.

**A items:** `def-khovanov-frobenius-algebra-and-cube-of-resolutions` defines
$A=\mathbb Z[X]/(X^2)$ with its multiplication, comultiplication, unit and
counit, fixes quantum shifts and the oriented crossing normalization, and
assigns a tensor product of $A$-modules to each resolution state.
`alg-khovanov-chain-complex-from-diagram` builds the finite cube complex with
the signed edge maps induced by multiplication/comultiplication. `lem-khovanov-cube-differential-squares-to-zero` proves $d^2=0$ by cancellation of
each square face using Frobenius relations. `thm-khovanov-homology-is-an-oriented-link-invariant` proves chain-homotopy invariance under R1/R2/R3, and
`thm-khovanov-euler-characteristic-is-jones` gives the exact normalized graded
Euler characteristic.

**Proof design and prerequisites:** define the cube sign from an ordering of
crossings and prove the edge squares commute before inserting signs. For R1,
decompose the added-crossing complex into a contractible summand plus the
declared grading shift; for R2 use the two-crossing cancellation; for R3
construct the explicit chain homotopy using Frobenius associativity and
coassociativity. Verify the Euler characteristic resolution-by-resolution
against KT-29's Jones convention. Khovanov 1999 v2 proves invariance of
isomorphism classes but later cobordism coherence is handled in KT-40.
**Local prerequisite modules:** `lem-khovanov-reidemeister-chain-homotopies`, `lem-khovanov-graded-euler-characteristic-jones-normalization`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-37-worked-cases`, `cex-knot-kt-37-boundary-case`.

**B leaves:** Unreduced integral unknot Kh is Z in quantum degrees±1 and homological degree0; reduced unknot Kh is one Z in its normalized degree. Omitting the n− and quantum writhe shifts in the cube changes under R1 and gives the wrong Jones Euler normalization. **Sources:** reader 6, Khovanov 1999 v2.

**Early reduced theory:** `def-reduced-khovanov-cohomology-of-a-knot` fixes a basepoint away from crossings and the reduced subcomplex/quotient convention, integral gradings and unknot rank-one shift. `thm-reduced-khovanov-basepoint-and-reidemeister-invariance` proves invariance under based moves and transport of the basepoint along a knot. KT-44 consumes this exact group. The cube definition explicitly sets deg(1)=1, deg(X)=−1, m(X⊗X)=0, Δ(1)=1⊗X+X⊗1, Δ(X)=X⊗X, ε(1)=0, ε(X)=1; the edge changing coordinate j has sign (−1)^(Σ_(i<j)v_i), homological degree |v|−n_−, and shift |v|+n_+−2n_−. Its Euler identity must state the q-to-Jones-variable substitution and reduced/unreduced unknot factor separately.
### KT-38 — Lee deformation and Rasmussen’s s-invariant

#### Lee deformation and Rasmussen’s s-invariant

**Pages:** `lee-deformation-and-rasmussen-s-invariant` /
`lee-deformation-and-rasmussen-s-invariant-examples`.

**A items:** `def-lee-deformed-khovanov-complex` replaces the Frobenius
algebra by the Lee deformation over $\mathbb Q$ and defines the induced
quantum filtration. `thm-lee-homology-of-a-knot-has-two-generators` proves
the rank-two result for a knot and identifies the two canonical orientation
classes. `def-rasmussen-s-invariant` defines $s(K)$ from their filtration levels
with the exact parity convention. `thm-rasmussen-s-bounds-smooth-four-ball-genus` proves $|s(K)|\le2g_4^{sm}(K)$ and concordance invariance.

**Proof design and prerequisites:** verify the filtered differential does not decrease filtration; compute the Lee complex's rank through the oriented resolution basis and cancellation; on this page prove the Lee-specific oriented birth, saddle and death maps change filtration by at most their Euler-characteristic contribution, then decompose a genus-$g$ surface into these moves to obtain the bound. The later movie-map page KT-40 supplies general cobordism coherence but is not a prerequisite here. Distinguish the proved inequality from the false equality $s=2\tau$; Hedden–Ording’s twisted positive Whitehead double of the trefoil has $\tau=0$ and $s=2$. **Local prerequisite modules:** `lem-lee-filtered-spectral-sequence-and-two-orientation-classes`, `lem-lee-cobordism-filtration-genus-bound`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-38-worked-cases`, `cex-knot-kt-38-boundary-case`.

**B leaves:** Unknot has s=0, right/left trefoil s=±2; the2-twisted positive Whitehead double of right trefoil has s=2 and τ=0 by Hedden–Ording Theorem1.1. The same Whitehead-double example disproves universal s=2τ; it is a counterexample, not an open conjecture. **Sources:** reader 6, Rasmussen arXiv:math/0402131v1 and Hedden–Ording arXiv:math/0512348v1, Theorem 1.1; exact read ranges, hashes and proof limits are in the coverage ledger.

**Modern local-equivalence branch:** `def-odd-khovanov-barnatan-and-leo-triple` fixes R=Z[X,h]/(X²−Xh), the odd Kh complex C overZ[X]/X², the Bar–Natan complex D overR, and a bigraded F2[X]/X² chain-homotopy equivalence f:C⊗F2→D⊗R/(2,h). Both complexes are finite free; h^−1D is homotopy equivalent to a rank-one free h^−1R module in homological degree0 and odd quantum degrees. Local maps are module chain maps(α,β) whose β localizes to an equivalence and whose mod2 square commutes up to module homotopy; local equivalence means maps both ways. `lem-odd-khovanov-and-barnatan-localization-foundations` owns odd exterior-cube sign/invariance, Bar–Natan h-localization, their mod2 comparison and the pointed connected-sum/Kunneth interface, with original foundations recovered before acceptance. `thm-leo-local-equivalence-group-and-concordance-map` proves tensor product and dual give an abelian group of LEO local-equivalence classes and knot complexes define a smooth-concordance homomorphism (Dunfield–Lipshitz–Schütz v3, Theorem1.1/3.8). `rem-leo-refined-s-current-computations` records their2025 computational cohort:890 of17,991 then-mystery prime knots through19crossings obstructed, at least832 topologically slice; these are source-reported finite results, not a current complete census. Reduced and mod2 variants/the total-order refinement require their separately stated Definitions3.10 and Theorem1.2 before any generalization.
### KT-39 — Grid homology and combinatorial knot Floer theory

#### Grid homology and combinatorial knot Floer theory

**Pages:** `grid-homology-and-combinatorial-knot-floer-theory` /
`grid-homology-and-combinatorial-knot-floer-theory-examples`.

**A items:** `def-grid-diagram-for-an-oriented-knot` defines an $n\times n$
toroidal grid with one $O$ and one $X$ in every row and column and fixes the
orientation and Alexander filtration. `alg-grid-knot-floer-complex` uses
permutations as generators and empty rectangles as differential terms, with
$U_i$ variables or the exact specialized coefficient ring explicitly
declared. `lem-grid-rectangle-differential-squares-to-zero` pairs the two
decompositions of every index-two domain and proves $\partial^2=0$.
`thm-grid-homology-independent-of-grid-and-equals-knot-floer` proves invariance
under grid commutation/stabilization and identifies the result with the
associated graded knot Floer complex.

**Proof design and prerequisites:** order the finite permutation set; prove
the differential's Maslov grading and filtration behavior; pair broken and
unbroken rectangles for $\partial^2$. For invariance, give explicit chain
maps for commutation and stabilization, verify both compositions are chain
homotopic to the identity by domains, and then compare the grid Heegaard
diagram with the analytic multipointed Heegaard Floer complex. The last
comparison requires local modules for admissibility, holomorphic-disk
transversality, compactness, gluing and Heegaard-move invariance; MOS 2007
refers to other grid-invariance proofs, and an intro sketch is not accepted as
proof. **Local prerequisite modules:** `lem-grid-rectangle-boundary-square-zero-and-filtration`, `thm-grid-commutation-stabilization-invariance-proof`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-39-worked-cases`, `cex-knot-kt-39-boundary-case`.

**B leaves:** For the2×2 unknot grid the tilde homology is HFKhat(unknot)⊗V, so rank2; the hat invariant itself has rank1. Deleting the V^(n−1) factor makes grid stabilization appear to change the knot invariant; tilde output is not the unstabilized hat group. **Sources:** reader 6, Manolescu–Ozsváth–Szabó arXiv:math/0607691v2, full 2007 text; its grid-move proof boundary and imported analytic prerequisites are recorded in the coverage ledger.

**Grid versions and analytic target:** In the tilde grid complex over F2 both O and X are excluded from counted rectangles; its homology is HFKhat(K)⊗V^(n−1), with V supported in bidegrees (0,0) and (−1,−1). The associated-graded minus differential excludes X and weights O by U_i. The full filtered grid CFK-minus version allows X in rectangles, weights O by U_i, and records the Alexander filtration drop; do not identify this differential with the associated graded. After identifying U_i and accounting for the stated free/stabilization factors, prove filtered equivalence with CFK-minus. All grid inputs have exactly one X and O per row/column and disjoint markings; the output must distinguish knot from multi-component link. MOS proves identification through multipointed analytic theory; the detailed MOST combinatorial invariance source remains future recovery. Definitions of admissibility, relative Spin^c class, Maslov index and basepoint multiplicities belong to the analytic modules below, not unexplained names.
### KT-40 — Knot cobordism maps and functoriality

#### Knot cobordism maps and functoriality

**Pages:** `knot-cobordism-maps-and-functoriality` /
`knot-cobordism-maps-and-functoriality-examples`.

**A items:** `def-generic-movie-of-an-oriented-knot-cobordism` encodes a
properly embedded oriented surface in $S^3\times I$ by generic births, deaths,
saddles, Reidemeister moves and isotopies, with each critical event assigned
an index. `def-khovanov-cobordism-map-up-to-sign` defines the induced map on
Khovanov homology modulo the global sign. `thm-barnatan-khovanov-cobordism-functoriality-up-to-sign` proves this map depends only on the isotopy class of
the cobordism and composes up to sign. `def-knot-floer-cobordism-map` defines
the corresponding multi-pointed knot Floer map and states its coefficient,
basepoint and orientation conventions.

**Proof design and prerequisites:** for Khovanov, assign maps to elementary
movie events and verify every Carter–Saito movie move using the formal tangle
complex; Bar–Natan's full 2005 Theorems 4–5 establish the canopoly functor
modulo chain homotopy and overall sign, so do not repeat Khovanov 1999's
resolved Conjecture 1 as an open claim. For knot Floer, split the proof into
Heegaard triple transversality, compactness and gluing; associativity of triangle
counts; naturality under Heegaard moves; basepoint action; and Cerf/movie move
checks for births, saddles and deaths. Zemke arXiv:1610.05207v3 is downloaded but explicitly unread in reader6. It is a future full-source recovery obligation, not evidence for a theorem certified by this source set. A decorated link cobordism includes basepoints and a dividing set separating w/z regions on the surface; those data and the exact version/coefficient/Spin^c sum conventions must be fixed before defining its Floer map. **Local prerequisite modules:** `lem-barnatan-carter-saito-movie-moves-up-to-sign`, `lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing`, `lem-knot-floer-cobordism-naturality-and-movie-invariance`, `thm-khovanov-and-knot-floer-cobordism-map-scope`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-40-worked-cases`, `cex-knot-kt-40-boundary-case`.

**B leaves:** In Frobenius Kh TQFT, a circle birth followed by a saddle merging into another circle acts by m(1⊗x)=x, giving the identity map. A birth followed by death is εη=ε(1)=0, not an identity cylinder map; ordinary even Kh movie functoriality is only up to global sign. **Sources:** reader 6, Bar–Natan arXiv:math/0410495v2, Theorems 4–5, and Zemke arXiv:1610.05207v3; the former proves Khovanov functoriality up to homotopy and sign, while the latter's analytic foundations remain separate modules.
### KT-41 — The tau invariant and four-ball genus

#### The tau invariant and four-ball genus

**Pages:** `tau-invariant-and-the-four-ball-genus` /
`tau-invariant-and-the-four-ball-genus-examples`.

**A items:** `def-knot-floer-filtration-and-tau` defines the Alexander
filtration on $\widehat{CFK}$ and $\tau(K)$ as the least filtration level
whose inclusion induces a nonzero map to $\widehat{HF}(S^3)$. `lem-tau-is-independent-of-heegaard-grid` proves the value is invariant under the local
grid/Heegaard equivalences of KT-39. `thm-tau-is-concordance-invariant-and-four-ball-genus-bound` proves $|\tau(K)|\le g_4^{sm}(K)$ and additivity under
connected sum, using the KT-40 cobordism maps with all coefficient and basepoint
conditions retained.

**Proof design and prerequisites:** filtered chain-homotopy equivalences
preserve the first filtration level mapping nontrivially to homology. A
decorated genus-$g$ concordance induces a filtered cobordism map with filtration
shift bounded by $g$; prove this from the triangle-count index formula and
movie decomposition, not by an unqualified functoriality citation. For
connected sums, prove the filtered tensor product formula and compute the
minimum nonzero filtration. **Local prerequisite modules:** `lem-knot-floer-large-surgery-and-filtered-cobordism-input`, `lem-tau-connected-sum-filtered-tensor-product`, `thm-tau-is-concordance-invariant-and-four-ball-genus-bound`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-41-worked-cases`, `cex-knot-kt-41-boundary-case`.

**B leaves:** τ(unknot)=0 and τ(right/left trefoil)=±1, verified from the filtered staircases; these bounds recover their smooth genus1. The Hedden–Ording double has τ=0 but s=2, so τ=0 does not establish smooth sliceness. **Sources:** reader 6, Ozsváth–Szabó arXiv:math/0301149v4 and Hom arXiv:1512.00383v3; large-surgery, cobordism, adjunction and Heegaard-invariance inputs remain explicit.
### KT-42 — Epsilon and Upsilon concordance invariants

#### Epsilon and Upsilon concordance invariants

**Pages:** `epsilon-and-upsilon-concordance-invariants` /
`epsilon-and-upsilon-concordance-invariants-examples`.

**A items:** `def-epsilon-from-filtered-knot-floer-complex` defines
$\epsilon(K)\in\{-1,0,1\}$ from the relative vertical/horizontal maps in a
reduced filtered complex and states its stable-equivalence convention.
`def-upsilon-function-from-filtered-complex` defines the piecewise-linear
function $\Upsilon_K(t)$ as the minimal filtration level of the specified
linear combination of the algebraic and Alexander filtrations on
$CFK^\infty$. `thm-epsilon-upsilon-are-concordance-homomorphism-data` proves
mirror, connected-sum and cobordism inequalities under the source's exact
filtration conventions; it states precisely which of $\epsilon$ and
$\Upsilon$ is a homomorphism and which is only a concordance invariant.

**Proof design and prerequisites:** reduce filtered complexes by filtered
Gaussian elimination, prove stable equivalence preserves the maps defining
$\epsilon$, and use the tensor product for connected sums. For $\Upsilon$,
set F_t(x)=max{(1−t/2)i+(t/2)j : a basis term [x,i,j] occurs}, and ν_t=min{F_t(z): z is a Maslov-zero cycle representing the normalized HF∞ generator}; define Υ=−2ν_t for t∈[0,2]. After a proved finite truncation, this is a finite minimax over supports of cycles, not the minimum weight of individual basis generators. Prove piecewise linearity from that finite support problem; the
cobordism map gives the genus bound by controlling filtration shifts. Keep
the proof algebraic after the grid/Heegaard theory is established. Do not
assert $s=2\tau$; KT-38 has a concrete counterexample. **Local prerequisite modules:** `lem-epsilon-stable-equivalence-and-not-a-homomorphism`, `thm-upsilon-additivity-mirror-and-genus-bound`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-42-worked-cases`, `cex-knot-kt-42-boundary-case`.

**B leaves:** Trefoil has ε=1 and Υ(t)=−t on[0,1], t−2 on[1,2], with the mirror negatives and a breakpoint at1. A basis element of low F_t weight need not be a cycle representing the normalized HF∞ generator; individual basis minima cannot define Υ. Use the explicit nontrivial staircase boundary to verify the failure. **Sources:** reader 6, Ozsváth–Szabó 2003/2005 and Hom 2015 v3; exact theorem locators are in the coverage ledger.

**Modern grid comparison:** `thm-grid-upsilon-equals-oss-upsilon` proves Kubota arXiv:2412.08146v1: the grid-defined Upsilon agrees with the original OSS filtered-complex invariant after all U_i are identified and the exact W/stabilization factors are accounted for. Its proof passes a filtered chain-homotopy equivalence to t-modified complexes and non-torsion normalized generators; it claims no improvement on the n! grid state bound.
### KT-43 — Knot Floer genus and fibering detection

#### Knot Floer genus and fibering detection

**Pages:** `knot-floer-genus-and-fiberedness-detection` /
`knot-floer-genus-and-fiberedness-detection-examples`.

**A items:** `def-top-alexander-grading-of-knot-floer-homology` fixes the
Alexander grading for a null-homologous knot in a closed oriented 3-manifold.
`thm-knot-floer-detects-seifert-genus` states for K⊂S3 with the integral normalization that max{i: HFKhat(K,i)≠0}=g(K). General-Y Thurston-norm detection requires a separately formulated theorem and is not asserted by this S3 contract. `thm-rank-one-top-knot-floer-detects-fiberedness` states Ni's implication: if K is null-homologous in a closed oriented connected Y, Y\K is irreducible, F is a genus-g Seifert surface, and HFKhat(Y,K,[F],g)≅Z, then K is fibered and F is a fiber; the converse and coefficient scope are separately sourced.

**Proof design and prerequisites:** for genus detection, compare a
Heegaard diagram adapted to a minimal Seifert surface, use the relative
Spin$^c$ grading bound, and prove the top class is nonzero using the sutured
complement decomposition. For fibering, construct the sutured Floer group of
the complement, prove top-rank-one equivalence to a product sutured manifold,
and recover the fibration by the product decomposition theorem. The grid
intro alone is not a proof of the analytic equivalence; assign exact local
modules for holomorphic-disk compactness, admissibility and Heegaard-move
invariance. **Local prerequisite modules:** `thm-knot-floer-detects-seifert-genus`, `lem-ni-fiberedness-sutured-floer-and-gabai-inputs`, `lem-ni-holomorphic-disk-and-jsj-analytic-inputs`, `thm-rank-one-top-knot-floer-detects-fiberedness`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-43-worked-cases`, `cex-knot-kt-43-boundary-case`.

**B leaves:** Trefoil top HFKhat rank1 in Alexander degree1 is consistent with fibering; the alternating5_2 has top rank2 and is nonfibered after its explicit grid or alternating-HFK calculation. A null-homologous unknot contained in a ball in a reducible homology sphere has reducible exterior, so Ni's irreducibility hypothesis is not automatic for general Y. **Sources:** reader 6, Ni arXiv:math/0607156v4, Theorem 1.1, and Ozsváth–Szabó arXiv:math/0607691v2 for the grid computation; sutured-Floer, Gabai and holomorphic-disk prerequisites remain explicit.
### KT-44 — Khovanov homology detects the unknot

#### Khovanov homology detects the unknot

**Pages:** `khovanov-homology-detects-the-unknot` /
`khovanov-homology-detects-the-unknot-examples`.

**A items:** The marked-point reduction `def-reduced-khovanov-cohomology-of-a-knot` is owned by KT-37, before its first computations; this page consumes its integral coefficient convention. `def-instanton-knot-homology-and-canonical-class` defines the framed instanton group $I^\natural(K)$ and
its canonical class. `thm-khovanov-to-instanton-spectral-sequence` constructs
the spectral sequence from reduced Khovanov cohomology of the mirror to
$I^\natural(K)$. `thm-kronheimer-mrowka-reduced-khovanov-detects-unknot`
states that $\widetilde{Kh}(K;\mathbb Z)\cong\mathbb Z$ as a single group
only for the unknot.

**Proof design and prerequisites:** construct the filtered instanton complex
from resolutions, prove the E2 identification, and specify the instanton
rank detector as a separate theorem. The latter needs local definitions and
proof modules for the configuration-space Sobolev completion, ASD Fredholm
setup, compactness/bubbling, excision, perturbation/transversality and the
rank-one characterization of the unknot instanton group; Kronheimer–Mrowka's
paper invokes KHI rank detection rather than proving all of it. Then use the
unknot group and spectral-sequence rank inequalities to force the unknot
resolution. **Local prerequisite modules:** `lem-instanton-knot-complex-asd-analytic-foundations`, `lem-kh-to-instanton-resolution-spectral-sequence`, `thm-sutured-instanton-khi-rank-detects-unknot`, `thm-kronheimer-mrowka-reduced-khovanov-detects-unknot`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-44-worked-cases`, `cex-knot-kt-44-boundary-case`.

**B leaves:** Unknot reduced Kh has rank1, while trefoil reduced rational Kh has rank3; the rank detector separates them. The unaudited June2026 Jones proof claim is not a substitute for a local instanton/KHI supplier; distinguish its qualified status from the established Kh detector. **Sources:** reader 6, Kronheimer–Mrowka arXiv:1005.4346v1, Theorem 1.1; the KHI rank detector is cited there and remains a separate module.
### KT-15 — The knot-complement theorem

#### The knot-complement theorem

**Pages:** `knot-exterior-rigidity-and-the-complement-theorem` /
`knot-exterior-rigidity-and-the-complement-theorem-examples`.

**A items:** `thm-property-p-for-nontrivial-knots` states that every
nonmeridional Dehn filling of a nontrivial smooth knot has nontrivial
fundamental group. `lem-s-three-filling-detects-the-meridian-slope` combines
KT-13 homology with Property P to show that a filling yielding $S^3$ must be
the meridional filling. `thm-gordon-luecke-knot-complement-determines-knot`
says a homeomorphism of knot exteriors in $S^3$ carries the meridian slope to
the meridian slope and extends across the solid torus; the unoriented/ambient
orientation cases are stated separately. An unmarked group alone is not the
claim.

**Proof design and prerequisites:** $|p|\ne1$ is excluded by KT-13 homology;
the $|p|=1$ nonmeridional case uses Property P. Property P is not a citation
placeholder: specify local modules for the $SU(2)$ representation variety of
the surgery, reducible/irreducible boundary analysis, the Chern–Simons
functional and spectral-flow grading, finite-energy ASD compactness and
gluing, and the Floer exact triangle contradiction. Then isotope the boundary
map to a meridian-preserving linear map and extend it over the solid torus by
the meridian-disk foliation. **Local prerequisite modules:** `lem-property-p-instanton-surgery-triangle-and-rank-input`, `thm-gordon-luecke-knot-complement-determines-knot`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-15-worked-cases`, `cex-knot-kt-15-boundary-case`.

**B leaves:** A torus boundary matrix carrying μ to±μ extends across the solid torus; verify by a disk map and longitude twist. Unknot and trefoil share abelianization Z, so abelianized peripheral information alone is insufficient to recover knot type. **Sources:** reader 4;
peripheral automorphisms of a punctured disk are not knot-exterior suppliers.
### KT-20 — Character varieties and the A-polynomial

#### Character varieties and the A-polynomial

**Pages:** `character-varieties-and-the-a-polynomial` /
`character-varieties-and-the-a-polynomial-examples`.

**A items:** `def-sl-two-character-variety-and-peripheral-eigenvalues`
defines the $SL_2(\mathbb C)$ representation variety of a Wirtinger group,
its trace-character quotient and meridian/longitude eigenvalue coordinates
$(M,L)$ on representations where the peripheral subgroup is simultaneously
triangularizable. `lem-sl-two-character-trace-coordinate-model` proves the
finite trace-coordinate equations present the character quotient on the stated
reducible/nonreducible loci. `def-knot-a-polynomial` defines the ordinary
reduced boundary-image curve and its Laurent polynomial up to $\pm M^aL^b$,
recording the abelian factor; `def-enhanced-a-polynomial` separately removes
the reducible representation component. `thm-a-polynomial-boundary-restriction-and-surgery-detector` proves the boundary restriction is algebraic
and boundary eigenvalues from each one-dimensional peripheral-image component included in the defining curve satisfy its A-polynomial. Zero-dimensional images are recorded separately and are not silently curve factors. A representation descends to p/q filling exactly when ρ(μ)^pρ(λ)^q=I. The eigenvalue equation M^pL^q=1 is necessary, and is sufficient only with simultaneous diagonalizability (or a separately verified matrix relation); unipotent parts, ideal points and Zariski-closure points need not furnish filling representations. `def-character-variety-logarithmic-slope-invariant` defines the adjoint-twisted slope as the kernel
line of $H_1(\partial E_K;\operatorname{Ad}\rho)\to
H_1(E_K;\operatorname{Ad}\rho)$ on the exact admissible locus.
`lem-adjoint-twisted-slope-is-rational-on-a-character-component` proves
rationality under the one-dimensional image and nonvanishing hypotheses.
`thm-benard-florens-rodau-logarithmic-gauss-formula` proves their slope equals
the negative logarithmic Gauss map $-(M/L)(\partial_M A/\partial_L A)$ in
their variable order on a one-dimensional irreducible component; at an ideal
point it gives the negative Culler–Shalen boundary slope under their convention.
`def-sl-two-abelian-surgery` states that every $SL_2(\mathbb C)$ representation
of the filled group has abelian image. `thm-baldwin-sivek-infinitely-many-abelian-surgeries-characterize-torus-knots` proves a knot in $S^3$ has
infinitely many rational $SL_2(\mathbb C)$-abelian surgeries iff it is a
 torus knot. `thm-enhanced-a-polynomial-newton-polygon-detects-torus-knots`
proves the enhanced-A Newton polygon is contained in a line iff the knot is
torus; `cor-enhanced-a-polynomial-and-alexander-degree-identify-torus-knots`
records the exact identification corollary. `thm-baldwin-sivek-two-boundary-slope-alternative` states their partial result for nontrivial fibered
non-torus knots with exactly two boundary slopes. The open items
`op-ordinary-a-polynomial-detects-torus-knots`,
`op-a-polynomial-newton-parallelogram-characterizes-torus-knots`, and
`op-a-polynomial-for-knots-in-other-three-manifolds` record their separately
formulated Questions 1.5, 1.6 and 1.8; all are terminal.

**Proof design and prerequisites:** use KT-01's presentation and KT-02's
marked peripheral words to build polynomial matrix equations. Prove trace
coordinates generate the character quotient, the boundary restriction is
algebraic, and elimination with Laurent resultants separates reducible from
nonabelian components. For the logarithmic slope, prove adjoint-twisted
homology is one-dimensional on the admissible locus, derive the Fox boundary
matrix and differentiate the defining polynomial; then use the source's
ideal-point/Culler–Shalen argument. For the Baldwin–Sivek results, assign
separate local modules for enhanced-polynomial construction, rational
$SL_2(\mathbb C)$ surgery representations, the torus/satellite/hyperbolic
trichotomy, the imported instanton L-space restriction, and the Newton-polygon
criterion. Their papers rely on instanton Floer and Culler–Shalen inputs, so
none of those is a proof supplied by the article citation. State exact
exceptions and orientation conventions. **Local prerequisite modules:** `lem-sl2-character-trace-coordinate-algebra`, `lem-knot-a-polynomial-boundary-elimination`, `thm-adjoint-logarithmic-gauss-slope-and-ideal-point`, `lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-20-worked-cases`, `cex-knot-kt-20-boundary-case`.

**B leaves:** With fixed M-meridian/L-longitude convention compute figure-eight ordinary A=(L−1)(L²−(M⁴−M²−2−M^−2+M^−4)L+1) up to monomial unit; explicitly state which factors remain enhanced. A peripheral pair ρ(μ)=[[1,1],[0,1]],ρ(λ)=I has eigenvalue equation M^pL^q=1 for every p,q but fails the matrix filling relation for p≠0. This is a matrix-level boundary counterexample, not a claim that every such pair extends to a knot exterior. **Sources:** reader 4, Bénard–Florens–Rodau,
NYJM 30 (2024), Theorem 4.1; Baldwin–Sivek, accepted preprint v2 and 2026
Mathematische Annalen, Theorems 1.1–1.2, Corollaries 1.3–1.4, Theorem 1.7.

**Exact source-status correction:** Baldwin–Sivek Question1.6 asks whether the Newton polygon of the ordinary A-polynomial is a parallelogram iff K is a nontrivial torus knot. The distinct terminal `op-two-boundary-slopes-characterize-torus-knots` records the folklore question whether nontrivial torus knots are exactly S3 knots with two boundary slopes; the paper explains the implication from Question1.6. Its Theorem1.7 applies to every nontrivial fibered non-torus knot: either a connected separating incompressible slope-zero surface exists or there are at least three boundary slopes. Question1.8 explicitly asks, for K⊂Y with irreducible exterior, whether thin enhanced-A or infinitely many SL2(C)-abelian surgeries is equivalent to an exterior Seifert-fibered over the disk with at most two singular fibers. These are distinct formulations, with the dated bounded status review disclosed.
### KT-45 — The Khovanov to Floer spectral sequence

#### The Khovanov to Floer spectral sequence

**Pages:** `khovanov-to-floer-spectral-sequence` /
`khovanov-to-floer-spectral-sequence-examples`.

**A items:** `def-link-surgery-filtered-complex-for-double-branched-cover`
defines the filtered link-surgery complex and its filtration by resolution
cube. `lem-link-surgery-e-one-differential-is-reduced-khovanov` identifies
the first differential with reduced Khovanov cohomology over $\mathbb F_2$.
`thm-os-khovanov-spectral-sequence-to-branched-cover-floer` states that for a
link diagram the spectral sequence has $E_2=\widetilde{Kh}^{*}(\overline L;
\mathbb F_2)$ and converges to $\widehat{HF}(\Sigma(L);\mathbb F_2)$.
It does not claim diagram-independent filtered quasi-isomorphism unless the
additional invariance module is proved.

**Proof design and prerequisites:** construct the surgery exact-triangle
complex, verify the cube filtration is bounded and exhaustive, identify the
E1 terms with the Heegaard Floer groups of resolution covers, and prove the
E1 differential agrees with the Khovanov differential under the TQFT
identification. Add local modules for triangle-count transversality,
compactness, gluing and the surgery exact triangle. Ozsváth–Szabó's 2005 paper
states that filtered quasi-isomorphism invariance was expected, not established
there; keep it as an explicit separate obligation if a link invariant
spectral sequence is claimed. **Local prerequisite modules:** `lem-os-link-surgery-filtered-complex-and-triangle`, `lem-os-first-differential-is-reduced-khovanov`, `lem-os-filtered-convergence-and-invariance-scope`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-45-worked-cases`, `cex-knot-kt-45-boundary-case`.

**B leaves:** For trefoil, reduced Kh overF2 has rank3 and HFhat(Σ2(trefoil)) rank3; the total-rank inequality is consistent with collapse. The2-step filtered complex generated by x,y with d x=y has a nonzero early page but zero total homology; invariant endpoints alone do not make intermediate-page identifications canonical between diagrams. **Sources:** reader 6; Ozsváth–Szabó math/0309170v1 full text.
### KT-46 — Branched-cover correction terms and sliceness

#### Branched-cover correction terms and sliceness

**Pages:** `branched-cover-correction-terms-and-sliceness` /
`branched-cover-correction-terms-and-sliceness-examples`.

**A items:** `def-heegaard-floer-correction-term` defines $d(Y,\mathfrak s)$
for a rational homology sphere and a Spin$^c$ structure with the grading
normalization fixed. `lem-slice-disk-double-cover-is-rational-homology-ball`
reuses the published result only for a smooth properly embedded disk and its
stated rational-homology-ball conclusion. `thm-correction-term-obstruction-from-rational-ball` proves the exact inequality/vanishing constraint on the
correction term for Spin$^c$ structures extending over a rational homology
ball. `cor-double-cover-d-invariant-obstructs-smooth-slice` applies it to the
smooth double branched cover, keeping Spin$^c$ extension hypotheses explicit.

**Proof design and prerequisites:** define absolute gradings from the
Heegaard Floer chain complex; prove invariance under Heegaard moves and the
rational-ball inequality from the filtered cobordism map, with local analytic
modules for transversality/compactness/gluing. For the slice application,
prove the branched cover of a smooth disk is the exact rational homology ball
and identify which boundary Spin$^c$ structures extend. The existing published
lemma cannot be extended from smooth disks to locally flat topological disks
by analogy. **Local prerequisite modules:** `lem-heegaard-floer-correction-term-heegaard-invariance`, `lem-rational-ball-spin-c-cobordism-map-inequality`, `cor-double-cover-d-invariant-obstructs-smooth-slice`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-46-worked-cases`, `cex-knot-kt-46-boundary-case`.

**B leaves:** In the convention d(L(p,1),i)=((2i−p)²−p)/(4p), d(L(3,1),i)={1/2,−1/6,−1/6}; reversing orientation negates. These nonzero values obstruct a smooth rational-ball filling of that oriented L(3,1) only after quantifying extendible Spin^c structures; a nonextendible structure alone is not a filling obstruction. **Sources:**
reader 5/6.
### KT-47 — Planar-diagram codes and knot-table enumeration

#### Planar-diagram codes and knot-table enumeration

**Pages:** `planar-diagram-codes-and-knot-table-enumeration` /
`planar-diagram-codes-and-knot-table-enumeration-examples`.

**A items:** `def-planar-diagram-gauss-and-dowker-codes` distinguishes a
Gauss code, signed Dowker–Thistlethwaite code and oriented planar-diagram code,
stating parity, cyclic-order and realizability conditions. `alg-planar-code-validation-and-diagram-reconstruction` checks incidence and sign data,
reconstructs the finite 4-valent plane graph and over/under structure, and
returns a diagram or a specific invalid-code reason. `thm-valid-code-reconstructs-the-declared-link-diagram` proves uniqueness up to planar
isotopy and relabeling. `alg-enumerate-diagrams-up-to-crossing-bound`
enumerates all codes with at most $c$ crossings; it returns diagram candidates,
not distinct knot types.

**Proof design and prerequisites:** validate each crossing appears exactly
twice in the Gauss word, check the cyclic orders define a connected planar
rotation system, and use the face permutation to verify $V-E+F=2$. Reconstruct
by gluing crossing disks to edge bands and lifting over/under data to $S^3$.
Enumeration terminates because alphabet and word length are finite. It does
not decide equivalence between candidates; Reidemeister-move search is a
semidecision procedure. **Local prerequisite modules:** `lem-planar-diagram-code-realizability-and-face-validation`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-47-worked-cases`, `cex-knot-kt-47-boundary-case`.

**B leaves:** A based Gauss traversal of a trefoil records each of three crossing labels twice; show the explicit rotation/overpass reconstruction and chosen outer face. A code in which one crossing label occurs once cannot define a regular4-valent closed diagram and is rejected before any knot calculation. **Sources:** readers 1/4.
### KT-48 — Terminating computations for classical knot invariants

#### Terminating computations for classical knot invariants

**Pages:** `terminating-computations-for-classical-knot-invariants` /
`terminating-computations-for-classical-knot-invariants-examples`.

**A items:** `def-encoded-diagram-size-and-exact-output` defines crossing
count, code length and coefficient-bit size, separating exact symbolic
outputs from floating-point estimates. `thm-knot-linking-number-and-fox-coloring-finite-complexity` proves the crossing scan and finite-field
Gaussian-elimination procedures terminate and gives operation counts in terms
of crossings and field size. `thm-bracket-state-sum-exponential-bound` gives
the $2^c$ state count and coefficient bit-growth bound for KT-29; it does not
claim polynomial-time Jones evaluation. `thm-reidemeister-enumeration-is-only-a-semidecision` proves breadth-first enumeration halts with “equivalent”
when a move sequence exists but may not halt for inequivalent diagrams.

**Proof design and prerequisites:** count each finite loop; the coloring
system uses at most one row per crossing, Gaussian elimination has finitely
many pivots, and bracket coefficients sum over $2^c$ states with degree
bounded linearly by $c$. A move search visits a finite branching tree at each
depth and has no negative certificate. No complexity-class result for general
knot equivalence follows. **Local prerequisite modules:** `thm-exact-bracket-output-bit-growth-bound`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-48-worked-cases`, `cex-knot-kt-48-boundary-case`.

**B leaves:** A c=8 bracket state sum visits256 smoothing states; trefoilF3 coloring Gaussian elimination yields9 assignments. A finite unsuccessful Reidemeister search between unknot and trefoil is not its own negative certificate; their group/coloring difference provides the actual independent distinction. **Sources:**
readers 1 and 3.
### KT-49 — Normal-surface unknot recognition

#### Normal-surface unknot recognition

**Pages:** `normal-surface-unknot-recognition` /
`normal-surface-unknot-recognition-examples`.

**A items:** `thm-smooth-knot-has-compatible-pl-exterior-model` proves a
finite smooth knot diagram admits an ambient-isotopic PL knot and good
triangulation of its compact exterior with meridian marked. `def-normal-surface-coordinate-box` defines normal disk coordinates and matching
equations. `alg-haken-jaco-tollefson-unknot-recognition` takes an $n$-crossing
diagram, constructs a good $O(n)$-tetrahedron exterior triangulation, and
enumerates the finite normal-disk coordinate box; it returns `unknot` iff a
meridian-disk certificate exists. `thm-normal-surface-unknot-algorithm-terminates-and-is-correct` proves the equivalence and source bounds: Haken
search takes $2^{O(n^2)}$ time and $O(n^2\log n)$ space; Jaco–Tollefson
vertex-surface search takes $2^{O(n)}$ time with the stated space bound.
`thm-unknot-recognition-has-np-certificate` states the exact verifier.

**Proof design and prerequisites:** add local modules for smooth-to-PL
approximation inside a tubular neighborhood; triangulation of the compact
exterior with marked meridian; normal-coordinate matching and finite bounds;
vertex-surface enumeration and the meridian-disk criterion for a solid-torus
exterior; the mod-2 meridian test; and certificate checking. HLP's complete
1999 paper supplies the algorithm and bounds but cites central normal-surface
theorems and sketches diagram triangulation; these modules remain local proof
obligations. No polynomial-time claim is made. **Local prerequisite modules:** `lem-smooth-to-pl-knot-exterior-ambient-isotopy`, `lem-good-linear-size-exterior-triangulation-from-diagram`, `lem-normal-coordinate-matching-equations-and-finite-bounds`, `lem-meridian-disk-criterion-for-unknot-exterior`, `thm-haken-finite-box-search-correctness`, `thm-jaco-tollefson-vertex-search-correctness`, `thm-unknot-recognition-has-np-certificate`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-49-worked-cases`, `cex-knot-kt-49-boundary-case`.

**B leaves:** A fixed zero-crossing unknot exterior triangulation contains an essential normal disk; verify matching/quadrilateral, connectedness, χ=1 and odd meridian-intersection data. A boundary-parallel disk candidate in a trefoil exterior has trivial boundary class and fails the mod2 test; this rejects that surface only, not the knot without completeness and exhaustive search. **Sources:** reader 4, Hass–Lagarias–Pippenger, JACM 46 (1999), author-hosted
2013 reprint; exact coverage in its dossier.

**Exact HLP branches and missing completeness theorems:** `thm-haken-normal-essential-disk-existence` proves a compact triangulated knot exterior with an essential disk has a fundamental normal essential disk, via least-weight normalization and normal sums; `thm-jaco-tollefson-normal-essential-disk-vertex-existence` proves an essential disk can be chosen on a vertex ray. These are different, cited but unproved inputs in HLP §§5.4/5.6 and require complete source recovery or local proofs. There are 7t normal coordinates, matching equations and at most one nonzero quadrilateral type per tetrahedron. Haken enumerates 0≤v_i≤t 2^(7t+2); JT enumerates primitive integral extreme rays, bounded by 2^(7t−1) coordinatewise. For Haken, test fundamentalness by proper nonzero decompositions to certify connectedness; JT primitives are fundamental and connected. Then require ∂S≠∅, χ(S)=1, and odd mod-2 meridian intersection of ∂S. In the exterior the compressing disk boundary is the original knot longitude; it is not the original knot meridian. Input diagrams with multiple components return not-a-knot. Exhausting all candidates without a valid disk returns not-unknot. The zero-crossing case has a fixed solid-torus triangulation, so linear size means O(n+1). Keep correctness/completeness, termination, Turing bit bounds and NP-verifier results separate.
### KT-50 — Alternating diagrams and crossing-number minimality

#### Alternating diagrams and crossing-number minimality

**Pages:** `alternating-diagrams-and-crossing-number-minimality` /
`alternating-diagrams-and-crossing-number-minimality-examples`.

**A items:** `def-reduced-alternating-link-diagram` defines a connected
alternating diagram with no nugatory crossing. `thm-tait-flyping-theorem`
proves any two reduced alternating diagrams of the same link are related by
flypes and planar isotopy. `thm-reduced-alternating-diagram-minimizes-crossings` proves a reduced alternating diagram has minimal crossing number.
`cor-jones-span-detects-crossing-number-for-reduced-alternating-knots` proves
the normalized Jones span equals the crossing number under KT-29's convention.

**Proof design and prerequisites:** prove adequacy of both extreme Kauffman
states so their extremal degrees do not cancel; the state-sum span is $4c$
in $A$, equivalently $c$ in the normalized Jones variable. Euler
characteristic of the Tait graph gives the span identity. Use flyping only for diagram classification. Adequacy and the Jones-span bound independently prove crossing minimality and do not depend on flyping. Give the flyping proof as modules from Menasco crossing-ball position, incompressible Conway spheres/standard-position alternating tangles, and the Menasco–Thistlethwaite geometric flyping reduction with an explicit decreasing complexity; graph matroid exchange alone permits mutation and is not a flyping proof. Recover/read a complete source before authoring this deep branch; no bare
theorem citation. **Local prerequisite modules:** `thm-tait-flyping-theorem`, `lem-alternating-state-adequacy-and-jones-span`. Full contracts, ownership and direct dependencies are in `prerequisite-map.md`.

**B item IDs:** `ex-knot-kt-50-worked-cases`, `cex-knot-kt-50-boundary-case`.

**B leaves:** Positive trefoil Jones span is4−1=3 and figure-eight span4; the reduced alternating crossing numbers are3 and4. An R1-kinked unknot diagram has c=1 but Jones span0, showing reducedness is necessary for equality with diagram crossing count. **Sources:** readers 1/3.
### KT-51 — Open questions in knot polynomials and surgery

#### Open questions in knot polynomials and surgery

**Pages:** `open-questions-in-knot-polynomials-and-surgery` /
`open-questions-in-knot-polynomials-and-surgery-examples`.

**A items:** `rem-jones-polynomial-unknot-detection-status` formulates the mathematical implication V_K(t)=1 ⇒ K is the unknot for classical knots in S3, with a separate dated Status: Carmi–Cohen arXiv:2606.22410v1 (21 June 2026) claims every nontrivial knot has a nonzero Jones–Vassiliev coefficient of order $2\le q\le3c(K)$. This scaffold has not independently validated the claimed proof and cannot certify either established status or definitively reconfirm the historical open status. This nonlogical research-status remark preserves the precise historical question and claimed solution without asserting either proof acceptance or a definitive current open classification. It is terminal and not a logical supplier. Verification of the preprint would require checking the auxiliary-shadow estimate $B_{\rm aux}\le B_{\rm host}+12$ against the claimed machine overhead $\kappa_{\rm mach}=11$, the exceptional-state collapse, smoothing proxy, and two-machine locality. This page adds no duplicate copies of the terminal items owned by earlier pairs.

**Proof design and prerequisites:** the Jones implication is the formulation; the dated claimed-solution record and unresolved verification scope are its Status, not a request for an audit packaged as a mathematical theorem. The exact reviewed v1 claim and source limitations are mapped to reader 3; no Jones-detection theorem is registered until independent verification. Other terminal questions are owned in their natural pairs and do not become members of this A-page item list. The A-polynomial questions are those explicitly posed by Baldwin–Sivek in their accepted 2025 preprint/published 2026 article. Every `op-` item may consume established formulation definitions/results, but has no logical consumers and no role in another item's deps, justified_by or theorem premise. **B item IDs:** `ex-knot-kt-51-worked-cases`, `cex-knot-kt-51-boundary-case`.

**B leaves:** State exactly V_K=1⇒unknot and the claimed nonzero coefficient bound2≤q≤3c(K) from Carmi–Cohenv1, with its version/date and unverified machine-geometry scope. The absence of an arXiv DOI/journal field proves neither truth nor falsehood; accepting or rejecting the mathematical implication from those fields is invalid inference. **Sources:** readers 3 and 4; source versions, hashes, date and scope limits are in the coverage ledger.

## Additional classical scope and bounded extensions
### KT-52 — Bridge presentations and unknotting number

#### Bridge presentations and unknotting number

**Pages:** `bridge-presentations-and-unknotting-number` / `bridge-presentations-and-unknotting-number-examples`.

**A items:** `def-knot-bridge-position-and-unknotting-number` fixes a Morse height on S3 away from two poles; b(K) is the minimum number of local maxima of a Morse knot representative, with b(unknot)=1. It defines u(K) as the minimum crossing changes turning some regular diagram into the unknot, distinct from diagram crossing count. `alg-descending-diagram-unknotting-sequence` takes a based oriented diagram, traverses it and switches a crossing precisely when its first encounter is an underpass; it returns the crossing-change list and a descending diagram. `thm-descending-diagram-is-unknot-and-finite-bounds` proves the output unknot by lifting the traversed arc monotonically and closing across the base arc, termination in at most c switches, and finiteness of u(K). `thm-bridge-one-is-unknot-and-signature-crossing-change-bound` proves b(K)=1 iff unknot by the two trivial arcs in height balls; a single crossing change alters the nondegenerate classical signature by at most two by a rank-one Seifert/Goeritz update, so |σ_(−1)(K)|/2≤u(K). `thm-schubert-bridge-connected-sum` states b(K#J)=b(K)+b(J)−1; its lower bound owns a thin-position/decomposing-sphere proof obligation, independent of genus additivity. Every minimum is over a nonempty set of integers; no efficient minimization algorithm is claimed.

**Proof design and prerequisites:** use KT-01 diagram groups, KT-03 crossing conventions, KT-05 decomposing annuli, KT-12 signature invariance and a new height-sphere/bridge-disk intersection module. The upper connected-sum bound glues two bridge positions; the lower bound requires normalization of a decomposing sphere relative to bridge disks and removal of outermost intersections, preserving a count of maxima. This exact classical theorem is a future full-source recovery obligation, not a claim that one of the six source dossiers fully proved it. Elementary descending and signature arguments are explicit local derivations from supplied diagram/surface facts.

**B item IDs:** `ex-trefoil-bridge-and-unknotting-numbers`, `cex-diagram-crossing-count-is-not-unknotting-number`.

**B leaves:** Trefoil has b=2 and u=1 from its2-bridge diagram and one crossing change, with nontrivial group proving both lower bounds. An unknot with k R1 kinks has diagram crossing count k, while b=1,u=0; diagram crossings are not unknotting number. **Sources:** local derivations using KT-01/03/05/12; a complete Schubert bridge-additivity source must be recovered before the deep lower-bound proof is authored.
### KT-53 — Milnor invariants and link peripheral nilpotent quotients

#### Milnor invariants and link peripheral nilpotent quotients

**Pages:** `milnor-invariants-and-link-peripheral-nilpotent-quotients` / `milnor-invariants-and-link-peripheral-nilpotent-quotients-examples`.

**A items:** `def-based-string-link-and-labeled-link-peripheral-system` defines r disjoint oriented properly embedded intervals in D2×I with fixed endpoints/collars, their stacking, closure, meridians, zero-linking longitudes and basing paths. For closed labeled links, each longitude is corrected by its self-meridian exponent; H1 of the exterior is Z^r. `def-lower-central-series-and-magnus-expansion-for-links` defines Γ1G=G, Γ_(q+1)G=[G,Γ_qG], noncommuting formal series Z⟪X1,…,Xr⟫ and E(x_i)=1+X_i, E(x_i^−1)=Σ_(k≥0)(−X_i)^k; calculations to degree d use a finite truncated ring. `thm-string-link-nilpotent-peripheral-identifications` proves each end inclusion F_r→π1(exterior) induces F_r/Γ_q≅G/Γ_q for every finite q using the integral Stallings hypothesis H1 isomorphism and H2 surjection. Its local supplier proves that group theorem via the five-term homology sequence of central extensions and induction; the exterior homology hypotheses are separately proved by duality. `def-milnor-integer-and-residue-invariants` defines μ_(i1…ikj) as the coefficient of X_i1…X_ik in the Magnus expansion of the preferred j-longitude in the canonical string-link nilpotent quotient. For a closed link, μbar_I is reduced modulo Δ_I, the gcd of μ_J over proper subsequences of I and their cyclic permutations; gcd0 means an integral invariant. `thm-milnor-invariants-isotopy-and-link-homotopy-scope` proves string-link isotopy invariance for all index sequences; for closed links it proves exactly the stated indeterminacy under basing/conjugation/closure changes, and link-homotopy invariance only for nonrepeating indices. `alg-truncated-milnor-invariants-from-based-diagram` takes a finite labeled diagram, explicit basing and maximal length d; computes nilpotent longitude words by the inductive Wirtinger substitutions to degree d, expands in the truncated ring, and returns the integer coefficients or closed-link residues together with all lower indeterminacy data. `thm-truncated-milnor-computation-terminates-and-is-correct` proves stabilization through each lower-central degree, finite word arithmetic, and correctness relative to the peripheral quotient; it makes no polynomial-time claim.

**Proof design and prerequisites:** KT-01 supplies local Wirtinger relations, KT-02 the knot peripheral model which is extended explicitly componentwise here, and KT-03 linking number. A Magnus commutator degree lemma proves E(Γ_qF)⊂1+(X)^q and independence to the stated degree. A basing-change lemma tracks conjugations and longitude meridian corrections; its coefficient recursion produces exactly Δ_I. A self-crossing-change lemma proves nonrepeating-index invariance and explicitly excludes arbitrary repeated-index link-homotopy invariance. These are substantial new local obligations with no claimed full-source coverage in the six dossiers; recover Milnor's primary theorem/complete treatment before future acceptance. The plan preserves the established theorem contracts without treating bibliographic names as proved suppliers.

**B item IDs:** `ex-borromean-link-milnor-triple-invariant`, `cex-pairwise-linking-does-not-classify-links`.

**B leaves:** For the declared based Borromean string link, longitude3 has leading[x1,x2], hence μ123=1 and all pairwise linking numbers0 by Magnus expansion. Borromean link and3-component unlink both have pairwise linking0 but different μ123, so pairwise linking is incomplete; repeated-index μ is not generally link-homotopy invariant. **Sources:** explicit local Magnus/Wirtinger derivation; full classical Milnor/Stallings source recovery is an acknowledged prerequisite, not completed reader coverage.

Virtual knots, higher-dimensional embeddings and Legendrian/transverse/contact invariants are bounded extensions outside the present classical S3 and locally flat/smooth four-dimensional scope. General 3-manifold knots occur only in individually qualified Ni/skein formulations. This scope boundary does not limit the classical, quantum, concordance or computational modules above.

**Additional explicit suppliers:** `thm-stallings-integral-lower-central-isomorphism` states H1-isomorphism and H2-surjectivity for a group map imply all finite lower-central quotient isomorphisms, with a central-extension five-term proof. `lem-string-link-exterior-homology-and-meridian-maps` proves both punctured-end inclusions have these homology properties by relative Alexander duality. `lem-magnus-commutator-degree-and-truncation` proves E(Γ_qF)⊂1+(X)^q and truncated word arithmetic. `lem-milnor-basing-indeterminacy-and-self-crossing-scope` tracks conjugation and self-crossing changes to produce exactly the closed-link Δ_I indeterminacy and nonrepeating-index link-homotopy scope. These are distinct owned lemmas, not unnamed uses of Stallings or Magnus theory.
### KT-54 — Zero traces and the Conway nonsliceness theorem

#### Zero traces and the Conway nonsliceness theorem

**Pages:** `zero-traces-and-conway-nonsliceness` / `zero-traces-and-conway-nonsliceness-examples`.

**A items:** `def-smooth-zero-trace-and-dualizable-handle-link` defines X(K)=B4 with a zero-framed2-handle on K. A dualizable handle link has components B,G,R with B∪R isotopic to B∪μ_B, G∪R isotopic to G∪μ_G and lk(B,G)=0; R is dotted and B,G have framing0. `thm-knot-slice-iff-zero-trace-embeds-in-s-four` proves K smoothly slice iff X(K) smoothly embeds in standardS4. `thm-dualizable-handle-link-has-two-knot-trace-descriptions` proves canceling R with B or G after the specified slides gives X(K)≅X(K′), with oriented framings tracked. `thm-piccirillo-conway-trace-partner-has-s-two` states the particular K′ constructed from the Conway knot in Piccirillo2018§3/Figures2–4 has X(K′)≅X(C) and s(K′)=2. `thm-conway-knot-topologically-slice-not-smoothly-slice` concludes C is locally-flat topologically slice but not smoothly slice.

**Proof design and prerequisites:** use the exact integer trace/Kirby interfaces, Lee/s theory and Alexander-one topological theorem. For trace embedding, one direction attaches the normal neighborhood of a slice disk in the opposite4-ball; conversely combine the handle core with the cone onK, embed the resulting sphere smooth away from its cone point, and remove a small standard ball about that point to obtain a smooth disk inB4. For dualizability, isotope R to a round dotted component, slide one zero-framed attaching circle off its disk and cancel the other1/2pair; then reverse roles. For the specific Conway partner, transcribe the source Kirby sequence into a finite PD/handle code with every oriented slide/framing change recorded, and independently recompute the rational Kh table or Lee filtered complex sufficient for s=2. Source Table1 is computer-reported and is not itself an independently verified local computation. Prove Δ_C=1 with the Seifert/module bridge, apply Freedman for local-flat sliceness, and transport smooth nonsliceness through trace embedding equivalence. No claim that same trace implies concordance is made.

**B item IDs:** `ex-unknot-zero-trace-and-dualizable-cancellation`, `cex-zero-trace-does-not-force-concordance`.

**B leaves:** X(unknot)=S2×D2 embeds smoothly inS4 as the standard sphere neighborhood; verify the zero-framed unknot handle attachment. Piccirillo's Conway partner has the same0-trace as C but s(K′)=2 versus s(C)=0, so same0-trace does not imply smooth concordance. Both s values require their own explicit local filtered computation; neither follows solely from trace equivalence. **Sources:** reader5, Piccirillo arXiv:1808.02923v1(2018), Lemma1.3, Proposition1.4, Theorem3.1, §4/Table1 and Figures2–4; reader6 Rasmussen/Lee foundations. Full source read belongs to reader5, not this auditor; the auditor independently checked these decisive prose passages.

## Design registry and proof-source limits

The complete per-item mathematical contracts, proof routes, canonical kinds, dependencies, ownership and source boundaries are projected into `proposed-registration-delta.json` and `prerequisite-map.md`. Consolidated aliases in the audit record are retired candidate names, not extra duplicated theorems. The six reader dossiers document exactly what was read. New Milnor/bridge, Kirby/Cerf, hyperbolization/rigidity, full analytic gauge/Floer, KZ-convergence and flyping foundations still require the identified complete source recovery and future local proofs. Some exact advanced source interfaces remain explicitly blocked below; this research design is not a proof-closed content frontier and does not certify them as established local suppliers. No active publication/gate acceptance is claimed.
