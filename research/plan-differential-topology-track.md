# Differential topology track — Morse theory, intersections, bordism, surgery, immersions, foliations, and exotic smooth structures

Prose scaffold, owner-commissioned 2026-08-14 (run `subjects-02`, role
`scaffolder`).  Seam authority: `research/subjects-02-SEAMS.md`.  This block is
to follow the last differential-geometry companion,
`moment-maps-and-symplectic-reduction-examples`.

> **STATUS: PROPOSED, NOT SPLICED.**  This is one prose scaffold and not a
> build.  Nothing in `research/plan-spec.json`, `items/`, or `library/` is
> changed; no item is authored, proved, gated, or published.  `DT-1` through
> `DT-32` are relative labels.  Absolute orders and every unresolved concurrent
> `AT-n` label are splice-time work for the orchestrator.

This file is subordinate to `CLAUDE.md`, `SCHEMA.md`, the base subject-scaffold
brief, and the seam contract.  It is authoritative only for the pages proposed
below.  It neither reads nor amends the concurrent algebraic-topology scaffold.

---

## 0. Orchestrator summary

**Placement.**  Append the block in the displayed relative order after
`moment-maps-and-symplectic-reduction-examples`; recompute absolute orders at
splice time.

**Pairs.**  Thirty-two A/B pairs (sixty-four pages):

| label | A page id | mathematical spine |
|---|---|---|
| DT-1 | `morse-critical-points-hessians-and-indices` | intrinsic Hessians, nondegeneracy, index, Morse lemma |
| DT-2 | `morse-functions-critical-values-and-genericity` | existence and residual/open genericity with compactness boundaries |
| DT-3 | `gradient-like-vector-fields-and-morse-trajectories` | negative-gradient flow, energy identity, completeness and limits |
| DT-4 | `stable-unstable-manifolds-and-morse-smale-transversality` | stable manifolds, trajectory spaces, Morse--Smale genericity |
| DT-5 | `sublevel-deformation-and-the-handle-attachment-theorem` | regular intervals, critical levels, one-handle attachment |
| DT-6 | `handle-decompositions-duality-and-rearrangement` | compact cobordisms, dual handles, ordering and self-indexing |
| DT-7 | `handle-cancellation-slides-and-elementary-moves` | cancellation, creation and handle slides with dimension hypotheses |
| DT-8 | `morse-inequalities-and-the-handle-chain-complex` | weak/strong inequalities, Euler identity, relative and perfect cases |
| DT-9 | `morse-trajectory-moduli-spaces-and-the-morse-differential` | orientations, compactification, broken trajectories, $\partial^2=0$ |
| DT-10 | `morse-homology-continuation-and-comparison` | continuation, independence, singular-homology comparison |
| DT-11 | `oriented-and-mod-two-intersection-numbers` | complementary intersections, signs, mod 2 counts, bordism invariance |
| DT-12 | `intersection-pairings-self-intersection-and-euler-classes` | geometric products, diagonal/self-intersection, AT duality interface |
| DT-13 | `vector-field-index-euler-characteristic-and-poincare-hopf` | local index, boundary form, Euler characteristic and existence |
| DT-14 | `fixed-point-index-and-the-lefschetz-theorem` | graph--diagonal index, homological trace and local formula |
| DT-15 | `smooth-cobordism-relations-groups-and-rings` | unoriented/oriented bordism, products, boundaries and characteristic numbers |
| DT-16 | `thom-spaces-normal-data-and-collapse-maps` | Thom spaces/classes, stable normals, collapse and transversality |
| DT-17 | `pontryagin-thom-and-framed-cobordism` | collapse/preimage constructions and the framed correspondence |
| DT-18 | `the-hopf-degree-theorem` | homotopy classification of maps to a sphere by degree |
| DT-19 | `characteristic-numbers-and-cobordism-obstructions` | SW/Pontryagin numbers, boundary vanishing, Thom detection |
| DT-20 | `the-hirzebruch-signature-theorem` | intersection-form signature, $L$-class application, low-dimensional checks |
| DT-21 | `smooth-surgery-traces-and-handle-trading` | framed sphere surgery, trace cobordisms, duality and homological effects |
| DT-22 | `the-whitney-trick-and-surgery-below-the-middle-dimension` | Whitney disks and geometric improvement of connectivity |
| DT-23 | `the-smooth-h-cobordism-theorem` | Morse/handle proof in dimensions at least six, simply connected case |
| DT-24 | `whitehead-torsion-and-the-s-cobordism-theorem` | simple homotopy interface and non-simply-connected refinement |
| DT-25 | `formal-immersions-and-the-smale-hirsch-theorem` | bundle monomorphisms, relative parametric classification |
| DT-26 | `regular-homotopy-and-sphere-eversion` | regular homotopy classes, rotation number and eversion |
| DT-27 | `isotopy-extension-and-embedding-theory-beyond-whitney` | ambient isotopy, disjunction, metastable embedding statements |
| DT-28 | `characteristic-class-obstructions-to-immersions-and-embeddings` | stable normal identities and explicit nonimmersion/nonembedding tests |
| DT-29 | `foliation-holonomy-and-the-holonomy-groupoid` | germs, holonomy covers/groupoids and leafwise transport |
| DT-30 | `reeb-stability-and-global-foliation-constructions` | compact-leaf stability, suspensions, mapping tori and Reeb components |
| DT-31 | `codimension-one-foliations-and-secondary-classes` | transverse orientation, Bott vanishing, Godbillon--Vey and Novikov boundary |
| DT-32 | `exotic-smooth-structures-and-milnor-spheres` | Milnor bundles, smooth detection, homotopy-sphere group context |

Every B page is the A id followed by `-examples`.  B pages contain only
examples, counterexamples, finite calculations, and hypothesis tests, and are
dependency leaves.

**Scope headline.**  The track begins after the differential-geometry
foundations and cites them.  It does not rebuild Sard, transversality, Whitney
embedding, tubular neighbourhoods, Frobenius, de Rham theory, or degree.
Algebraic topology owns singular (co)homology, Poincare duality, classifying
spaces, Thom isomorphism as a cohomological construction, and construction of
Stiefel--Whitney, Chern, Pontryagin and Euler classes.  DT owns the geometric
uses commissioned here.

**Build blockers.**  All named differential-geometry predecessors currently
have empty `items` arrays, so they are planned interfaces, not published facts.
The concurrent algebraic-topology pair numbers were forbidden to this lane and
are represented below by explicit `AT-n[...]` reconciliation tokens.  No DT
item may build until the orchestrator replaces each token by the actual authored
relative label and exact item ids.  This was recorded rather than prompting.

---

## 1. Why this track exists and its binding predecessor interfaces

The differential-geometry track constructs smooth manifolds and maps, tangent
and normal bundles, flows, transversality, Whitney embedding and tubular
neighbourhoods, orientations, integration, de Rham theory and degree.  Those
tools answer local and geometric questions; they do not yet explain how
critical points build a manifold, how intersections produce global invariants,
how a manifold changes under surgery, or why two homeomorphic manifolds can
carry inequivalent smooth structures.

This DT block develops exactly those consequences.  Morse functions become
handle decompositions and homology; transverse intersections become Euler,
Poincare--Hopf and Lefschetz invariants; normal collapse becomes bordism;
handles and Whitney disks become surgery and h-/s-cobordism; formal bundle
data classify immersions; holonomy controls foliations; and characteristic
numbers detect bordism, embedding obstructions and Milnor spheres.  Algebraic
topology supplies its concurrently owned algebraic constructions through the
explicit interfaces below.

The following planned differential-geometry pages were opened before use.  At
build time their exact authored ids, not just page names, must replace the
prose references here.

| predecessor page | exact convention or result consumed; nothing re-minted |
|---|---|
| `smooth-manifolds-and-smooth-maps` | finite-dimensional Hausdorff second-countable $C^\infty$ manifolds; boundary absent unless explicit |
| `smooth-partitions-of-unity-and-exhaustions` | smooth bump functions, partitions and proper exhaustions |
| `tangent-cotangent-and-the-differential` | tangent/cotangent spaces and differentials |
| `rank-theorems-and-embedded-submanifolds` | rank theorem, regular-level and embedded-submanifold structures |
| `smooth-vector-bundles-and-sections` | bundles, bundle maps, sections, direct sums and normal bundles |
| `sard-theorem-and-transversality` | Morse--Sard, residual transversality, parametric and relative transversality |
| `whitney-embedding-tubular-neighbourhoods-and-approximation` | weak Whitney immersion/embedding, tubular neighbourhoods, smooth approximation; DT starts beyond them |
| `vector-fields-flows-and-lie-derivatives` | maximal flows, completeness on compact manifolds, time-dependent flows and $[X,Y]=XY-YX$ |
| `distributions-integral-manifolds-and-the-frobenius-theorem` | constant-rank integrable distributions, regular foliation atlases and maximal leaves |
| `tensor-fields-exterior-algebra-and-differential-forms` | exterior algebra and smooth forms |
| `the-exterior-derivative-and-cartan-calculus` | $d$, pullback, Cartan formula and Pfaffian Frobenius criterion |
| `manifolds-with-boundary-collars-and-orientations` | collars, neat submanifolds, determinant-line orientations and outward-normal-first boundary orientation |
| `integration-of-forms-and-the-general-stokes-theorem` | integration and Stokes with the same boundary convention |
| `the-de-rham-complex-homotopy-and-mayer-vietoris` | de Rham cohomology and homotopy/Mayer--Vietoris machinery |
| `the-de-rham-theorem-and-degree` | de Rham theorem and proper-map degree/local-sign formula |
| `riemannian-metrics-and-the-levi-civita-connection` | positive-definite metrics, $g(\operatorname{grad}_g f,X)=Xf$ and Levi--Civita connection |
| `curvature-geodesics-jacobi-fields-and-the-second-variation` | $\operatorname{Hess}_g f(X,Y)=g(\nabla_X\operatorname{grad}_g f,Y)$ and its symmetry |

### 1.1 Concurrent algebraic-topology reconciliation tokens

The user prohibited reading or editing the concurrent AT scaffold.  The
following are therefore *descriptive relative-label tokens*, not invented page
orders and not claims that AT content is authored:

| token used here | AT-owned interface to resolve at splice | DT consumer |
|---|---|---|
| `AT-n[singular-homology]` | singular chains, relative homology, excision, long exact sequences, cellular homology and Euler characteristic invariance | DT-5--DT-10, DT-21--DT-24 |
| `AT-n[cohomology-products]` | singular cohomology, cup/cap products, Kronecker pairing and Kunneth | DT-12, DT-14, DT-19--DT-20 |
| `AT-n[poincare-duality]` | fundamental classes and integral/mod-2 Poincare--Lefschetz duality | DT-11--DT-14, DT-19--DT-20 |
| `AT-n[thom-isomorphism]` | Thom class/isomorphism and Gysin maps in ordinary cohomology | DT-12, DT-16--DT-20 |
| `AT-n[characteristic-classes]` | construction, naturality and Whitney-sum laws for Stiefel--Whitney, Chern, Pontryagin and Euler classes | DT-12, DT-19--DT-20, DT-28, DT-31--DT-32 |
| `AT-n[classifying-spaces]` | Grassmannians, universal bundles and classifying maps | DT-16--DT-17, DT-19, DT-25, DT-28 |
| `AT-n[homotopy-groups-and-stable-homotopy]` | homotopy groups, suspension/stabilisation and stable stems | DT-17--DT-18, DT-25--DT-26, DT-32 |
| `AT-n[simple-homotopy]` | CW expansions/collapses and Whitehead group/torsion construction | DT-24 |

**Amendment owed to AT.**  AT should orient its characteristic-class pages
forward to DT-19/20/28/31/32 as applications, its Poincare-duality page to
DT-11/12/14, its Thom-isomorphism page to DT-16/17, and its simple-homotopy
page to DT-24.  DT neither constructs those algebraic objects nor changes
their conventions.

---

## 2. Convention audit

| issue on which sources differ | adopted DT convention and reason |
|---|---|
| Hessian at a critical point | Define the intrinsic Hessian by the second differential in a chart (equivalently $X(Yf)$ at a critical point), then identify it with the DG Levi--Civita Hessian there.  This avoids making nondegeneracy metric-dependent. |
| Morse index | The number of negative squares/eigenvalues.  Thus for the negative-gradient flow the unstable manifold has dimension $\lambda(p)$ and the stable manifold dimension $n-\lambda(p)$.  This matches Nicolaescu, Cohen and the existing DG gradient sign. |
| gradient direction | All trajectory counts use $\dot\gamma=-\operatorname{grad}_g f$, so $f$ decreases.  Sources using positive gradient are translated explicitly. |
| “generic Morse” | In $C^\infty(M,\mathbb R)$ with the strong Whitney topology, Morse functions form a residual set; for compact $M$ they are open dense.  Distinct critical values are also a residual condition and, on compact $M$, open dense inside Morse functions.  “Generic” never silently means open dense on a noncompact source. |
| compactness in Morse theory | Closed means compact without boundary.  Proper Morse functions with compact sublevel slabs are treated separately; flow completeness or moduli compactness is never inferred on a noncompact manifold without a properness/completeness hypothesis. |
| stable/unstable notation | $W^u(p)$ converges to $p$ as $t\to-\infty$ and $W^s(p)$ as $t\to+\infty$ for the negative-gradient flow. |
| trajectory quotient | $\mathcal M(p,q)=W^u(p)\pitchfork W^s(q)/\mathbb R$ denotes unparametrised nonconstant negative-gradient lines; its expected dimension is $\lambda(p)-\lambda(q)-1$. |
| orientation of Morse moduli | Orient unstable manifolds and use $o(W^u(p))\cong o(\mathcal M(p,q))\otimes o(\mathbb R)\otimes o(W^u(q))$ with positive translation direction.  The boundary sign is fixed so the oriented broken-trajectory boundary proves $\partial^2=0$. |
| handles | A $k$-handle in an $n$-cobordism is $D^k\times D^{n-k}$, attached along $S^{k-1}\times D^{n-k}$; its belt sphere is $\{0\}\times S^{n-k-1}$.  Index zero and $n$ are included. |
| orientation of intersections | For transverse oriented $A^a,B^b\subset M^{a+b}$, the sign is positive when $T_xA\oplus T_xB\to T_xM$ is orientation preserving.  Swapping factors multiplies by $(-1)^{ab}$.  This matches DG determinant-line and outward-normal-first conventions. |
| mod-2 intersections | No orientability is assumed.  Counts lie in $\mathbb F_2$ and remain valid where integral signs cannot be chosen. |
| Euler characteristic | For compact smooth manifolds use the alternating sum of finite-dimensional rational homology ranks supplied by AT, then prove agreement with Morse/handle and self-intersection formulas.  The empty manifold has $\chi=0$. |
| cobordism versus bordism | Use “cobordism” for a manifold between specified incoming/outgoing boundaries and “bordism group” for equivalence classes, while noting that classical sources vary.  Empty manifolds are allowed and supply zero. |
| oriented boundary | $\partial W=(-M_0)\sqcup M_1$ for a cobordism from $M_0$ to $M_1$, using DG outward-normal-first orientation. |
| Pontryagin spelling | Item ids use `pontryagin`; prose acknowledges the transliteration `Pontrjagin` in source titles. |
| Thom space basepoint | $\operatorname{Th}(E)=D(E)/S(E)$ with the entire sphere bundle collapsed to the basepoint; rank-zero and empty-base cases are stated. |
| stable normal bundle | A choice of embedding gives $TM\oplus\nu\cong\varepsilon^N$; only its stable isomorphism class is intrinsic.  Characteristic-class applications are expressed stably. |
| surgery index | Surgery on an embedded framed $S^p\times D^q\subset M^{p+q}$ removes it and glues $D^{p+1}\times S^{q-1}$; the trace is an index-$(p+1)$ handle.  This avoids the common one-index shift. |
| h-cobordism dimensions | A compact $(n+1)$-dimensional h-cobordism between closed $n$-manifolds has the smooth simply-connected product conclusion for $n\ge5$.  Dimension four is never included. |
| s-cobordism | In dimension $n\ge5$, a connected h-cobordism is a product relative to one end iff its Whitehead torsion vanishes, with the standard involution caveat for the opposite end. |
| formal immersion | A pair $(f,F)$ with $F:TM\to TN$ a fibrewise injective bundle map covering $f$.  The Smale--Hirsch equivalence requires $\dim M<\dim N$ in the closed-source formulation used here; equidimensional open-source variants are not silently folded in. |
| isotopy | An isotopy is a smooth family of embeddings; a diffeotopy is an ambient isotopy through diffeomorphisms.  Compact source/support clauses are written where isotopy extension needs them. |
| foliation codimension | A rank-$p$ foliation on an $n$-manifold has leaf dimension $p$ and codimension $q=n-p$.  DG already owns the atlas/distribution equivalence. |
| holonomy | Holonomy is the germ of the transverse return diffeomorphism, hence depends on a leafwise path only up to fixed-endpoint leafwise homotopy.  Monodromy and holonomy groupoids are kept distinct. |
| Reeb stability | The local theorem uses a compact leaf with finite holonomy in arbitrary codimension.  The global codimension-one corollary additionally uses compactness/transverse orientability hypotheses exactly as stated. |
| Godbillon--Vey | For a transversely oriented $C^2$ codimension-one foliation with $d\omega=\eta\wedge\omega$, use $[\eta\wedge d\eta]\in H^3_{\mathrm{dR}}(M)$.  Independence under rescaling is proved; no $C^1$ invariant is asserted. |
| Hirzebruch $L$-class | Lurie Lecture 25 starts from a stable-normal class $l(\nu)$, reciprocal to the tangent convention.  DT uses the MS/standard tangent class $L(TM)$, with characteristic series $x/\tanh x$ and $\sigma(M)=\langle L(TM),[M]\rangle$; the Pontryagin sign must match the eventual AT page. |
| exotic sphere equivalence | “Exotic” means homeomorphic but not diffeomorphic to the standard sphere.  Oriented h-cobordism classes under connected sum form $\Theta_n$ for $n\ge5$; this is not identified with diffeomorphism classes without stating the h-cobordism bridge. |

---

## 3. Provenance and page rules

Every mathematical row below states both components using only SCHEMA §3
values.  The compact suffix
`[S: literature-derived; P: literature-derived]` means a source-backed
statement with a source-backed proof plan.  Definitions and convention-only
remarks instead use `P: not-applicable`.  A major theorem recorded only at the
commissioned “statement and construction” boundary uses `P: not-supplied`, is
explicitly non-load-bearing, and cites its source.  No row in this scaffold has
an `ai-generated` statement, and no B item is a dependency target.

All definitions, lemmas, propositions, theorems and corollaries planned as
load-bearing are proved on their A page.  B companions contain no dependencies
outward and no A row depends on a B row.  Each future A page receives exactly
two compact summary paragraphs at build time; scaffold bookkeeping and source
discussion stay here.

---

## 4. Source register and canonical-coverage pool

These are the complete texts or complete course-note treatments actually used.
Exact per-pair ranges appear in §8; heading-level dispositions and crosswalks
appear in §9.  Printed pages are used unless “PDF pages” is explicit.

| code | full treatment obtained and access point | exact ranges inspected for this commission |
|---|---|---|
| N | Liviu Nicolaescu, [*An Invitation to Morse Theory*, 2nd ed.](https://www3.nd.edu/~lnicolae/Morse2nd.pdf) | Ch. 1 §§1.1--1.2, printed pp. 1--19; Ch. 2 §§2.1--2.5, pp. 23--66; Ch. 4 §§4.4--4.5, pp. 183--200 |
| AD | Michele Audin and Mihai Damian, [*Morse Theory and Floer Homology*](https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf) | Part I Ch. 1 §§1.1--1.4, pp. 7--17; Ch. 2 §§2.1--2.2, pp. 23--47; Ch. 3 §§3.1--3.5, pp. 55--80; Ch. 4 §§4.1--4.9, pp. 83--126 |
| R | Alexander Ritter, [Cambridge Part III Morse Homology notes](https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf) | Lectures 1, 4, 7--9 and 17--21, PDF pp. 1--7, 19--22, 30--44, 76--101 |
| C | Ralph Cohen, [*Bundles, Manifolds, and Homotopy*](https://math.stanford.edu/~ralph/bookR3.pdf) | §§7.2--7.3, pp. 226--236; §§8.3--9.3, pp. 244--260; Ch. 11 §§11.1--11.6.3, pp. 369--424; Chs. 12--13 and Apps. A--B, pp. 461--532 |
| P | Andrei Pajitnov, [*Circle-Valued Morse Theory*](https://www.maths.ed.ac.uk/~v1ranick/papers/pajbook.pdf) | Ch. 2 §§1--3, pp. 35--66; Ch. 3 §§1--3, pp. 67--107; Ch. 4 §§1--3, pp. 112--162; Ch. 5, pp. 163--194; Ch. 6, pp. 196--227 |
| H | Morris Hirsch, [*Differential Topology*](https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf) | Ch. 5 §§1--2, pp. 121--140; Ch. 6 §§1--4, pp. 143--168; Ch. 7 §§1--2, pp. 169--176; Ch. 8 §§1--3, pp. 177--187 |
| GP | Victor Guillemin and Alan Pollack, [*Differential Topology*](https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf) | Ch. 2 §4, pp. 77--84; Ch. 3 §§3--5 and §7, pp. 107--140 and 148--150 |
| S | Eleny Ionel/Andrew Lin, [Stanford Math 215B notes](https://web.stanford.edu/~lindrew/math215B.pdf) | Lectures 14--17, document/PDF pp. 43--55 |
| M | John Milnor, [*Topology from the Differentiable Viewpoint*](https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf) | Chs. 4--8, printed pp. 20--51: mod-two/oriented degree, vector fields, framed cobordism and Hopf theorem |
| MM | John Milnor and James Munkres, [*Differential Topology*](https://www.maths.ed.ac.uk/~v1ranick/papers/difftop.pdf) | Ch. III §§3.1--3.17, PDF pp. 22--29: cobordism, Thom spaces and Pontryagin--Thom |
| W | C. T. C. Wall, [*Differential Topology*](https://people.math.ethz.ch/~dkosanovic/24-FS/Wall-Differential-Topology.pdf) | §§5.1--5.7, pp. 129--164; §§6.1--6.4, pp. 167--192; §§7.1--7.2, pp. 195--201; §§8.1--8.4, pp. 237--258 |
| MH | John Milnor, [*Lectures on the h-Cobordism Theorem*](https://www.math.auckland.ac.nz/~hekmati/Books/Milnor2.pdf) | §§1--9, pp. 1--113 |
| Lu | Wolfgang Lück, [*A Basic Introduction to Surgery Theory*](https://him-lueck.uni-bonn.de/data/ictp.pdf) | Ch. 1, pp. 1--22; Ch. 2 §§2.1--2.3, pp. 23--37; §3.4, pp. 69--78; §4.1, pp. 80--84; Ch. 6 §§6.1--6.7, pp. 123--142 |
| Ra | Andrew Ranicki, [*Algebraic and Geometric Surgery*](https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro) | Ch. 6, electronic pp. 109--125; Ch. 7 §§7.2--7.4, pp. 131--146; Ch. 8 §§8.1--8.2, pp. 150--162; Ch. 10 §§10.1--10.4, pp. 194--211 |
| MS | John Milnor and James Stasheff, [*Characteristic Classes*](https://people.math.rochester.edu/faculty/doug/otherpapers/milnor-stasheff2.pdf) | original Chs. 11--12, pp. 123--146; Chs. 14--19, pp. 167--230; re-typeset copies shift Chs. 16--19, so chapters remain authoritative |
| F | Daniel Freed, [*Bordism: Old and New*](https://people.math.harvard.edu/~dafr/bordism.pdf) | Lectures 1--3, pp. 5--28; Lectures 7--10, pp. 55--91; Lectures 11--12, pp. 92--105 |
| JL | Jacob Lurie, [“The Hirzebruch Signature Formula,” Lecture 25](https://people.math.harvard.edu/~lurie/287xnotes/Lecture25.pdf) | complete lecture, PDF pp. 1--3 |
| TW | Tom Weston, [*An Introduction to Cobordism Theory*](https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf) | §§2--5, pp. 2--10; §§9--13, pp. 15--25; §§14--19, pp. 26--36 |
| CF | Ralph Cohen, [“Immersions of Manifolds and Homotopy Theory”](https://math.stanford.edu/~ralph/immersions-final.pdf) | §§1--3.1, PDF pp. 4--13 |
| SM | John Francis, [immersion/h-principle course](https://sites.math.northwestern.edu/jnf960/classes/hprin/) | Lecture 3, PDF pp. 1--4; Lectures 5--6, pp. 1--4; Lecture 9, pp. 1--3; Lecture 10, pp. 1--2 |
| MW | Janek Wilhelm, [*The Smale--Hirsch Immersion Theorem and Other Applications to Closed Manifolds*](https://www2.mathematik.hu-berlin.de/~wendl/Sommer2025/hPrinzip/20250530_Wilhelm.pdf) | §§1--3 in full |
| J | Andras Juhasz, [*Differential and Low-Dimensional Topology*](https://www.cambridge.org/core/books/differential-and-lowdimensional-topology/4CDF7A520D6E0FA413DC1962844570FC) | Ch. 1 §1.3, pp. 13--16; Ch. 2 §2.2, pp. 38--42; the full searchable copy, not the publisher preview, was inspected |
| SK | Arkadiy Skopenkov, [“Embedding and Knotting of Manifolds in Euclidean Spaces”](https://arxiv.org/abs/math/0604045) | §§1--2, article pp. 1--13 |
| MMF | Ieke Moerdijk and Janez Mrcun, [*Introduction to Foliations and Lie Groupoids*](https://www.cambridge.org/core/books/introduction-to-foliations-and-lie-groupoids/75BBFED277FF39A56594731202789016) | §§1.2--1.3, pp. 9--18; §§2.1, 2.3, 2.5--2.6, pp. 19--24, 30--33, 44--55; §3.2, pp. 65--80; the full institutional copy, not the publisher preview, was inspected |
| L | Leiden NCG seminar, [*Noncommutative Geometry of Foliations*](https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf) | §§1.3, 2.1--2.2, PDF pp. 8--17; corroborating MMF-derived exposition, not counted independently |
| MIT | Tomasz Mrowka, [MIT 18.965 *Differential Topology* lecture notes](https://math.mit.edu/~mrowka/math965lectnote.pdf) | §§22--23, PDF pp. 54--56: holonomy and the sphere-leaf form of Reeb stability |
| CC | Danny Calegari, [*Foliations and the Geometry of 3-Manifolds*](https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf) | §§4.2--4.6, printed pp. 140--166 |
| HL | Steven Hurder and Remi Langevin, [“Dynamics and the Godbillon--Vey Class”](https://homepages.math.uic.edu/~hurder/papers/59manuscript-rev2016.pdf) | §2 and §3.1, PDF pp. 3--10 |
| MI | John Milnor, [“On Manifolds Homeomorphic to the 7-Sphere”](https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf) | full paper, Annals pp. 399--405 |
| ES | Northwestern Math 465, [*Milnor's Construction of Exotic 7-Spheres*](https://sites.math.northwestern.edu/jnf960/classes/mflds/18exotic7spheres2.pdf) | lecture in full, quaternionic clutching through smooth-structure obstruction |
| KM | Kervaire and Milnor, [“Groups of Homotopy Spheres I”](https://people.math.rochester.edu/faculty/doug/otherpapers/kervaire-milnor.pdf) | §§1--4, pp. 504--515; whole article pp. 504--537 consulted for classification context |
| FP | [*Lectures on Fixed Point Theory*](https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf) | Lecture II, pp. 12--23 |

The register and the additional full checks named in pair sections use **23
distinct URL hosts** after collapsing repeats.  One of those, Leiden, is
retained only as MMF-derived corroboration, leaving **22 independent source
hosts** for the verified measurement.  No publisher preview, abstract, search
snippet or table of contents is counted as a treatment.

---

## 5. Sixty-percent checkpoint and reconciliation record

This checkpoint was written before the ordered item ledger, comfortably before
60% of the lane.

- The owned file did not exist when the lane began.  No prior DT ids required
  resumption and no competing edit touched this file.
- The live plan contains all named differential-geometry page shells but their
  `items` arrays are empty.  They are therefore declared prerequisites, never
  called published content.
- Prefix `DT`, all thirty-two relative labels and the proposed ids were checked
  against the repository surface permitted to this lane; the seam reserves the
  prefix.  Because the concurrent AT scaffold is prohibited reading, the
  orchestrator must repeat the global collision check at splice time.
- The canonical harvest had full proof backbones for every pair, not merely
  tables of contents: N/C/P for Morse theory, H/GP/M/C for intersection and
  index theory, MM/W/C/F/TW/MS for bordism, W/MH/C for surgery and
  h-cobordism, W/C/SM/MW for immersion and embedding theory, MMF/L/CC for
  foliations, and MI/ES/C/MS for exotic spheres and their obstructions.
- Source disagreements were reconciled in §2 before decomposing proofs.  The
  decisive choices are negative-gradient trajectories, negative-eigenvalue
  Morse index, residual genericity on noncompact manifolds, outward-normal-first
  boundaries, the explicit surgery index shift, and holonomy as germs.
- The concurrent AT scaffold was not read.  All AT dependencies remain
  descriptive `AT-n[...]` tokens, recorded as a splice blocker rather than
  guessed or prompted for.
- No generated theorem, proposition, definition, remark, example or
  counterexample was introduced.  The planned rows are literature-derived;
  B rows are standard source examples and remain dependency leaves.

---

## 6. Deliberate scope boundary before decomposition

| heading or topic read but not minted | heading-specific disposition |
|---|---|
| Sard, Thom transversality and multijet transversality | Already owned by DG; only their applications are cited. |
| Whitney immersion/embedding and tubular neighbourhood theorems | Already owned by DG.  DT begins with classification, isotopy and obstruction theory beyond them. |
| construction of singular homology/cohomology and Poincare duality | Owned by AT under the seam; DT supplies geometric intersection realizations and applications only. |
| construction/axioms of Stiefel--Whitney, Chern, Pontryagin and Euler classes | Owned by AT; DT begins with characteristic numbers and tangent/normal applications. |
| Morse--Bott theory and equivariant Morse theory | Nicolaescu §2.6 and later chapters form valuable sequels, but neither is needed to close ordinary Morse homology or the commissioned topology applications. |
| circle-valued/Novikov Morse homology | Pajitnov's principal subject needs local coefficient completions and is not ordinary Morse homology.  Only his ordinary real-valued chapters were harvested. |
| Floer homology and infinite-dimensional Morse theory | Analytic compactness and transversality are a distinct future track; no finite-dimensional result depends on them. |
| Cerf pseudo-isotopy theorem and full handle calculus | The elementary births/deaths, cancellation and slide moves needed here are included.  Parametrised Cerf theory and pseudo-isotopy stability are not prerequisites of the commissioned h-cobordism statement. |
| knot concordance and low-dimensional surgery | Dimension-specific knot invariants and four-manifold surgery do not obey the high-dimensional Whitney/h-cobordism hypotheses; they require dedicated tracks. |
| surgery exact sequence and full $L$-theory computation | The dispatch asks for surgery at statement/construction level.  Single surgery, normal data, below-middle improvement and obstruction placement are included; algebraic $L$-groups and exactness proofs belong to a surgery-theory sequel. |
| topological and PL h-/s-cobordism | This is the smooth track.  Category-change theorems and four-dimensional exceptions are recorded as boundaries, not imported. |
| Adams spectral sequence, Kervaire invariant-one problem and stable-stem calculations | Owned by later algebraic/stable homotopy theory.  DT-32 states only the sourced Kervaire--Milnor context needed to locate exotic spheres. |
| classifying-space and Thom-spectrum calculations of bordism rings | AT owns the constructions and stable homotopy machinery.  DT includes the geometric Pontryagin--Thom correspondence and the specific characteristic-number consequences commissioned. |
| Haefliger classifying spaces and noncommutative foliation $C^*$-algebras | MMF/L treat them fully, but they are not needed for holonomy, stability or secondary-class applications and belong respectively to AT/homotopy and operator algebras. |
| Molino theory and Riemannian-foliation structure theory | A specialist branch beyond the requested “beyond Frobenius” core; local Reeb stability is included without minting Molino's global theory. |
| full taut-foliation and 3-manifold hierarchy theory | CC's sutured/lamination developments require a dedicated three-manifold track.  DT-31 records only the sourced Reebless/Novikov boundary needed to show a global obstruction. |
| exotic $\mathbb R^4$, Donaldson and Seiberg--Witten theory | These require gauge theory and four-manifold analysis.  DT-32 confines itself to Milnor spheres and high-dimensional homotopy-sphere context. |

---

## 7. Ordered A/B pair ledger

Each row's **For** clause names its proof-splitting or later consumer.  The
per-pair hard-proof paragraph names the compactness, sign, endpoint or
well-definedness checks that a builder must preserve.

### DT-1 — Morse critical points, Hessians, and indices

**A page:** `morse-critical-points-hessians-and-indices`

**Requires:** DG smooth maps, tangent/cotangent and DG Hessian pages.

**Sources:** N Ch. 1 §1.1, pp. 1--12; C §§12.1--12.2, pp. 461--465;
Audin--Damian Ch. 1 §§1.1 and 1.3, pp. 7--11 and 14--17.

1. `def-critical-point-and-critical-value-of-a-smooth-function` (definition) — $p$ is critical when $df_p=0$; $f(p)$ is then a critical value. **For:** separates pointwise degeneracy from the image-value language used by regular bands. **Prov:** [S: literature-derived; P: not-applicable].
2. `def-hessian-of-a-function-at-a-critical-point` (definition) — define $\operatorname{Hess}_p(f)$ intrinsically as the well-defined symmetric bilinear second differential at a critical point. **For:** makes nondegeneracy coordinate independent before any metric is chosen. **Prov:** [S: literature-derived; P: not-applicable].
3. `lem-coordinate-change-congruence-for-the-critical-hessian` (lemma) — Hessian matrices in two charts are related by congruence because the first-derivative correction vanishes at $p$. **For:** proves item 2 and feeds Sylvester inertia. **Prov:** [S: literature-derived; P: literature-derived].
4. `lem-critical-hessian-agrees-with-the-levi-civita-hessian` (lemma) — for any Riemannian metric, the DG covariant Hessian at a critical point equals item 2. **For:** connects metric gradient dynamics to the metric-free local invariant. **Prov:** [S: literature-derived; P: literature-derived].
5. `def-nondegenerate-critical-point-nullity-index-and-coindex` (definition) — nondegenerate means zero Hessian kernel; nullity is kernel dimension, index is the number of negative directions, and coindex the positive number. **For:** fixes the grading and the stable/unstable dimensions. **Prov:** [S: literature-derived; P: not-applicable].
6. `lem-sylvester-inertia-makes-morse-index-intrinsic` (lemma) — congruent real symmetric forms have the same index, coindex and nullity. **For:** closes chart and basis independence. **Prov:** [S: literature-derived; P: literature-derived].
7. `def-morse-function-and-excellent-morse-function` (definition) — a Morse function has only nondegenerate critical points; it is excellent when distinct critical points have distinct values. **For:** distinguishes the hypothesis needed for one-critical-level handle arguments. **Prov:** [S: literature-derived; P: not-applicable].
8. `lem-nondegenerate-critical-points-are-isolated` (lemma) — invertibility of the Hessian makes $df$ locally transverse to the zero section. **For:** gives local finiteness of the critical set. **Prov:** [S: literature-derived; P: literature-derived].
9. `cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points` (corollary) — a compact discrete critical set is finite. **For:** makes the Morse and handle polynomials finite. **Prov:** [S: literature-derived; P: literature-derived].
10. `lem-one-variable-completion-of-the-square-with-a-smooth-parameter` (lemma) — a nonzero second derivative permits a smooth coordinate splitting off one signed square. **For:** isolates the analytic induction step of the Morse lemma. **Prov:** [S: literature-derived; P: literature-derived].
11. `lem-morse-splitting-induction-preserves-the-residual-hessian` (lemma) — after splitting one direction, the remaining critical Hessian is the restricted nondegenerate form. **For:** prevents an unproved repetition in the normal-form proof. **Prov:** [S: literature-derived; P: literature-derived].
12. `thm-morse-lemma` (theorem) — near an index-$\lambda$ critical point there are coordinates with $f=f(p)-\sum_{i=1}^{\lambda}x_i^2+\sum_{i=\lambda+1}^n x_i^2$. **For:** supplies every later local model. **Prov:** [S: literature-derived; P: literature-derived].
13. `cor-local-extrema-and-saddles-from-the-morse-index` (corollary) — indices $0$ and $n$ are respectively strict minima and maxima; intermediate indices are saddles. **For:** prepares boundary handle cases. **Prov:** [S: literature-derived; P: literature-derived].
14. `cor-index-and-coindex-swap-under-negation` (corollary) — $\lambda_{-f}(p)=n-\lambda_f(p)$. **For:** powers dual-handle arguments. **Prov:** [S: literature-derived; P: literature-derived].
15. `cor-local-level-set-cone-at-a-morse-critical-point` (corollary) — the critical level has the quadratic cone model, with the index-zero and index-$n$ degeneracies stated separately. **For:** explains why topology changes only at critical levels. **Prov:** [S: literature-derived; P: literature-derived].
16. `rem-zero-dimensional-morse-convention` (remark) — on a zero-manifold every point is a nondegenerate index-zero critical point; the empty zero-manifold has none. **For:** closes the vacuous quadratic-form edge case. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  The builder must not define the Hessian away from a
critical point without a connection.  Prove the coordinate congruence first,
then Sylvester invariance, and decompose the Morse lemma through items 10--11.
Dimension zero, $\lambda=0$, and $\lambda=n$ are parts of the theorem, not
afterthoughts.

**B page:** `morse-critical-points-hessians-and-indices-examples`

1. `ex-height-on-the-sphere-is-a-perfect-morse-function` — compute the two critical points and their indices. **For:** tests extrema and dimension. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-standard-quadratic-form-of-each-morse-index` — realize every $0\le\lambda\le n$. **For:** checks the normal form including endpoints. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-height-on-a-torus-with-four-critical-points` — identify minimum, two saddles and maximum. **For:** anticipates handle and Euler counts. **Prov:** [S: literature-derived; P: literature-derived].
4. `cex-a-degenerate-isolated-critical-point` — $x\mapsto x^4$ is isolated but has zero Hessian. **For:** blocks the converse to item 8. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-a-degenerate-nonisolated-critical-set` — $f(x,y)=x^2$ has a critical line. **For:** shows why nondegeneracy matters. **Prov:** [S: literature-derived; P: literature-derived].
6. `ex-the-empty-and-zero-dimensional-morse-cases` — verify the definitions on $\varnothing$ and a finite discrete manifold. **For:** checks the convention boundary. **Prov:** [S: literature-derived; P: literature-derived].

### DT-2 — Morse functions, critical values, and genericity

**A page:** `morse-functions-critical-values-and-genericity`

**Requires:** DT-1; DG Sard/transversality, Whitney embedding/approximation,
partitions and vector-bundle sections.

**Sources:** N Ch. 1 §1.2, pp. 13--19; C §12.2, pp. 462--465;
Audin--Damian Ch. 1 §1.2, pp. 11--14; W §§4.3--4.5, pp. 98--110.

1. `lem-morse-functions-are-transverse-differentials` (lemma) — $f$ is Morse iff the section $df:M\to T^*M$ is transverse to the zero section. **For:** converts genericity to DG transversality. **Prov:** [S: literature-derived; P: literature-derived].
2. `thm-morse-functions-form-a-residual-subset` (theorem) — in the strong $C^\infty$ topology on $C^\infty(M,\mathbb R)$, Morse functions are residual. **For:** states exactly what generic means without noncompact overclaim. **Prov:** [S: literature-derived; P: literature-derived].
3. `thm-morse-functions-are-dense-by-relative-jet-transversality` (theorem) — every smooth function admits arbitrarily fine strong-topology perturbations whose differential is transverse to zero, with support away from a closed set where transversality already holds. **For:** supplies the usable relative approximation. **Prov:** [S: literature-derived; P: literature-derived].
4. `lem-compact-morse-critical-points-have-uniform-hessian-gaps` (lemma) — finitely many nondegenerate critical points persist under sufficiently small $C^2$ perturbation. **For:** splits the compact openness proof. **Prov:** [S: literature-derived; P: literature-derived].
5. `lem-no-new-critical-points-under-a-compact-c1-small-perturbation` (lemma) — away from fixed critical neighbourhoods, compactness gives a positive lower bound for $|df|$. **For:** supplies the other half of openness. **Prov:** [S: literature-derived; P: literature-derived].
6. `thm-morse-functions-are-open-dense-on-a-compact-manifold` (theorem) — in the $C^2$ and hence $C^\infty$ topology, the Morse functions form an open dense set when $M$ is compact. **For:** records the compact strengthening separately from residuality. **Prov:** [S: literature-derived; P: literature-derived].
7. `lem-finitely-many-critical-values-can-be-separated-locally` (lemma) — disjoint bump perturbations shift critical values without changing their Hessians. **For:** isolates the excellent-function argument. **Prov:** [S: literature-derived; P: literature-derived].
8. `thm-excellent-morse-functions-are-open-dense-on-a-compact-manifold` (theorem) — distinct critical values are an open dense refinement of compact Morse functions. **For:** licenses one-critical-level handle ordering. **Prov:** [S: literature-derived; P: literature-derived].
9. `thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse` (theorem) — outside a measure-zero/residual exceptional set of directions, the restricted linear height is Morse. **For:** supplies a concrete existence proof citing DG embedding. **Prov:** [S: literature-derived; P: literature-derived].
10. `thm-generic-squared-distance-functions-are-morse` (theorem) — for a compact embedded manifold, squared distance from a generic centre is Morse. **For:** gives the normal/medial-axis model used in examples. **Prov:** [S: literature-derived; P: literature-derived].
11. `cor-every-compact-smooth-manifold-admits-an-excellent-morse-function` (corollary) — combine existence, density and value separation. **For:** starts every compact handle decomposition. **Prov:** [S: literature-derived; P: literature-derived].
12. `prop-proper-morse-exhaustions-exist-on-smooth-manifolds` (proposition) — refine a DG proper smooth exhaustion by locally finite relative perturbations to a proper Morse function. **For:** makes the noncompact extension dependency-closed. **Prov:** [S: literature-derived; P: literature-derived].
13. `lem-properness-survives-a-controlled-locally-finite-perturbation` (lemma) — perturb on exhaustion shells with bounds too small to destroy escape to infinity. **For:** splits the load-bearing step in item 12. **Prov:** [S: literature-derived; P: literature-derived].
14. `rem-noncompact-morse-genericity-is-not-an-open-dense-claim` (remark) — residuality remains the general statement; compactness is what gives the simple global openness proof. **For:** enforces the commission's genericity subtlety. **Prov:** [S: literature-derived; P: not-applicable].
15. `rem-morse-does-not-mean-distinct-critical-values` (remark) — excellence is a separate perturbable condition. **For:** prevents simultaneous critical levels being silently excluded. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  Items 4--5 are both required for openness; persistence
alone does not exclude new zeros.  On noncompact $M$, use the strong topology
and locally finite perturbations.  A builder must say “residual” unless the
compact hypotheses of items 6 or 8 have been invoked.

**B page:** `morse-functions-critical-values-and-genericity-examples`

1. `ex-generic-and-exceptional-height-directions-on-a-torus` — exhibit a generic four-critical-point height and an exceptional degenerate direction. **For:** visualizes the exceptional parameter set. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-squared-distance-to-a-circle-and-its-medial-axis` — compare generic centres with the centre. **For:** shows where degeneracy enters. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-separating-equal-critical-values-by-bump-functions` — shift two same-level critical points independently. **For:** checks item 7. **Prov:** [S: literature-derived; P: literature-derived].
4. `cex-morse-functions-need-not-have-distinct-critical-values` — use a product/symmetric height with equal-index points at one level. **For:** blocks conflating Morse and excellent. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-noncompact-smallness-without-the-strong-topology-can-create-critical-points-at-infinity` — give a locally small but uncontrolled perturbation sequence. **For:** tests the topology/compactness clause. **Prov:** [S: literature-derived; P: literature-derived].

### DT-3 — Gradient-like vector fields and Morse trajectories

**A page:** `gradient-like-vector-fields-and-morse-trajectories`

**Requires:** DT-1--DT-2; DG Riemannian gradient and flow pages.

**Sources:** N §2.4, pp. 54--60; C §§13.1--13.2, pp. 483--499;
Audin--Damian §§2.1--2.2, pp. 23--47; Ritter Lectures 7--8, PDF pp. 30--39.

1. `def-negative-gradient-trajectory-of-a-morse-function` (definition) — a trajectory solves $\dot\gamma=-\operatorname{grad}_g f(\gamma)$. **For:** fixes the sign consumed throughout the complex. **Prov:** [S: literature-derived; P: not-applicable].
2. `lem-negative-gradient-energy-identity` (lemma) — $\frac d{dt}f(\gamma(t))=-\|\operatorname{grad}f\|^2$. **For:** supplies monotonicity and no-cycle arguments. **Prov:** [S: literature-derived; P: literature-derived].
3. `cor-nonconstant-negative-gradient-trajectories-strictly-decrease-f` (corollary) — equality on an interval forces a constant critical trajectory. **For:** orders endpoints by critical value. **Prov:** [S: literature-derived; P: literature-derived].
4. `def-downward-gradient-like-vector-field` (definition) — near each critical point use the standard negative linear model and elsewhere require $df(X)<0$. **For:** separates the topology from a chosen metric. **Prov:** [S: literature-derived; P: not-applicable].
5. `prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold` (proposition) — patch local standard fields and use compactness for completeness. **For:** prepares handle and homology constructions. **Prov:** [S: literature-derived; P: literature-derived].
6. `lem-a-limit-point-of-a-gradient-trajectory-is-critical` (lemma) — energy decay and local flow estimates force $df=0$ at every alpha/omega limit point. **For:** splits endpoint convergence. **Prov:** [S: literature-derived; P: literature-derived].
7. `lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits` (lemma) — isolated critical points plus connected limit sets give unique endpoints. **For:** justifies notation for connecting orbits. **Prov:** [S: literature-derived; P: literature-derived].
8. `def-morse-trajectory-from-p-to-q` (definition) — a nonconstant complete negative-gradient line has limits $p$ at $-\infty$ and $q$ at $+\infty$. **For:** names the objects later counted. **Prov:** [S: literature-derived; P: not-applicable].
9. `lem-morse-trajectories-have-positive-energy-drop` (lemma) — $f(p)-f(q)=\int_{-\infty}^{\infty}\|\dot\gamma\|^2dt>0$. **For:** gives compact energy control and rules out same-level connections. **Prov:** [S: literature-derived; P: literature-derived].
10. `def-stable-and-unstable-sets-of-a-critical-point` (definition) — $W^s(p)$ and $W^u(p)$ are the forward/backward convergence sets under the fixed downward flow. **For:** fixes the temporal convention before the stable-manifold theorem. **Prov:** [S: literature-derived; P: not-applicable].
11. `thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point` (theorem) — the local sets are embedded disks tangent to the positive/negative Hessian eigenspaces. **For:** converts the Morse lemma into dynamical geometry. **Prov:** [S: literature-derived; P: literature-derived].
12. `thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces` (theorem) — $W^u(p)\cong\mathbb R^{\lambda(p)}$ and $W^s(p)\cong\mathbb R^{n-\lambda(p)}$. **For:** provides the dimensions used in transversality. **Prov:** [S: literature-derived; P: literature-derived].
13. `lem-stable-and-unstable-manifolds-are-flow-invariant` (lemma) — the flow translates each set and preserves its endpoint. **For:** produces the later free $\mathbb R$ action. **Prov:** [S: literature-derived; P: literature-derived].
14. `cor-a-gradient-flow-has-no-nonconstant-periodic-or-recurrent-orbits` (corollary) — strict descent contradicts return. **For:** records a qualitative consequence used in compactification. **Prov:** [S: literature-derived; P: literature-derived].
15. `prop-proper-morse-slabs-give-complete-connecting-trajectories` (proposition) — on a complete chosen metric, trajectories trapped in a compact proper sublevel slab exist for all relevant time. **For:** states the safe noncompact extension. **Prov:** [S: literature-derived; P: literature-derived].
16. `rem-noncompact-flow-completeness-is-an-extra-hypothesis` (remark) — a smooth gradient field on a noncompact manifold can escape in finite time. **For:** blocks importing compact conclusions into DT-10. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  Compactness enters separately in flow completeness,
existence of limit points, and finiteness of critical endpoints.  The stable
manifold theorem supplies only a local disk; the global Euclidean statement
uses flow exhaustion.  Do not replace a gradient-like field by an arbitrary
descending field near a critical point.

**B page:** `gradient-like-vector-fields-and-morse-trajectories-examples`

1. `ex-negative-gradient-lines-for-a-quadratic-morse-function` — solve the linear flow and read stable/unstable dimensions. **For:** checks every sign convention. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-meridian-trajectories-for-height-on-the-sphere` — describe the family from maximum to minimum. **For:** shows nontransverse families before Morse--Smale quotienting. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-gradient-flow-on-the-torus-morse-function` — locate separatrices between the four critical points. **For:** prepares broken trajectories. **Prov:** [S: literature-derived; P: literature-derived].
4. `cex-positive-gradient-reverses-stable-and-unstable-dimensions` — compute the same quadratic model with the opposite sign. **For:** guards the convention audit. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-an-incomplete-gradient-flow-on-a-noncompact-manifold` — solve an escaping one-dimensional gradient ODE. **For:** shows compactness/completeness is essential. **Prov:** [S: literature-derived; P: literature-derived].

### DT-4 — Stable/unstable manifolds and Morse--Smale transversality

**A page:** `stable-unstable-manifolds-and-morse-smale-transversality`

**Requires:** DT-3; DG transversality and parametric transversality.

**Sources:** N §2.4, pp. 54--63; C §§13.2--13.4, pp. 491--512;
Audin--Damian §2.2, pp. 35--47; Ritter Lectures 8--9, PDF pp. 35--44.

1. `def-morse-smale-pair` (definition) — $(f,g)$ is Morse--Smale when every $W^u(p)$ is transverse to every $W^s(q)$. **For:** makes moduli spaces smooth. **Prov:** [S: literature-derived; P: not-applicable].
2. `def-parametrized-morse-trajectory-space` (definition) — $\widetilde{\mathcal M}(p,q)=W^u(p)\cap W^s(q)$ for $p\ne q$. **For:** identifies trajectories with a transverse intersection. **Prov:** [S: literature-derived; P: not-applicable].
3. `prop-parametrized-morse-trajectory-space-is-a-manifold` (proposition) — under Morse--Smale, it has dimension $\lambda(p)-\lambda(q)$. **For:** supplies the expected dimension before quotienting. **Prov:** [S: literature-derived; P: literature-derived].
4. `lem-time-translation-acts-freely-on-nonconstant-trajectories` (lemma) — $s\cdot\gamma(t)=\gamma(t+s)$ has no stabilizer. **For:** makes the quotient dimension legitimate. **Prov:** [S: literature-derived; P: literature-derived].
5. `def-unparametrized-morse-trajectory-moduli-space` (definition) — $\mathcal M(p,q)=\widetilde{\mathcal M}(p,q)/\mathbb R$. **For:** names the finite sets later counted. **Prov:** [S: literature-derived; P: not-applicable].
6. `thm-unparametrized-trajectory-space-is-a-smooth-manifold` (theorem) — it has dimension $\lambda(p)-\lambda(q)-1$, using a regular level as a slice. **For:** avoids an unproved quotient-manifold assertion. **Prov:** [S: literature-derived; P: literature-derived].
7. `cor-no-morse-smale-trajectories-for-nonpositive-index-drop` (corollary) — $\mathcal M(p,q)=\varnothing$ when $p\ne q$ and $\lambda(p)\le\lambda(q)$. **For:** bounds the differential and breaking patterns. **Prov:** [S: literature-derived; P: literature-derived].
8. `lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories` (lemma) — each trajectory crosses every intervening regular level once. **For:** supplies local coordinates and compactness slices. **Prov:** [S: literature-derived; P: literature-derived].
9. `thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function` (theorem) — on a closed manifold a residual set of smooth metrics makes $(f,g)$ Morse--Smale. **For:** proves availability without saying open dense. **Prov:** [S: literature-derived; P: literature-derived].
10. `thm-relative-morse-smale-perturbation-of-a-gradient-like-field` (theorem) — perturb away from prescribed critical neighbourhoods and an already transverse closed region. **For:** supports continuation and handle compatibility. **Prov:** [S: literature-derived; P: literature-derived].
11. `lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator` (lemma) — the analytic linearisation has zero cokernel exactly at transverse connecting orbits. **For:** opens the compactness/gluing proof route used by DT-9. **Prov:** [S: literature-derived; P: literature-derived].
12. `prop-index-one-trajectory-spaces-are-zero-dimensional` (proposition) — an index drop of one gives a discrete moduli space. **For:** identifies differential coefficients, postponing finiteness to compactification. **Prov:** [S: literature-derived; P: literature-derived].
13. `prop-index-two-trajectory-spaces-are-one-dimensional` (proposition) — an index drop of two gives curves whose missing ends can only be one-break configurations. **For:** previews $\partial^2=0$. **Prov:** [S: literature-derived; P: literature-derived].
14. `lem-broken-morse-trajectories-have-strictly-decreasing-critical-values-and-indices` (lemma) — every nonconstant component decreases $f$ and, under Morse--Smale, drops index. **For:** bounds breaking length on compact manifolds. **Prov:** [S: literature-derived; P: literature-derived].
15. `rem-morse-smale-residuality-does-not-assert-simultaneous-genericity-for-all-data` (remark) — the function, metric and any parametric continuation family have separate transversality problems. **For:** prevents a blanket genericity citation. **Prov:** [S: literature-derived; P: not-applicable].
16. `rem-ambient-orientability-is-not-required-for-morse-smale-transversality` (remark) — integral signs later use orientation lines, not an orientation of $M$. **For:** records the exact orientation boundary. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  The quotient theorem must use a regular-level slice or
a proper free-action argument; freeness alone is insufficient.  State the
Morse--Smale theorem as residual.  Items 12--13 give dimensions only; their
compactness and boundary descriptions belong to DT-9 and must not be assumed
early.

**B page:** `stable-unstable-manifolds-and-morse-smale-transversality-examples`

1. `ex-morse-smale-flow-on-the-circle` — compute the two zero-dimensional moduli sets. **For:** checks translation quotienting in dimension one. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-a-morse-smale-height-function-on-a-tilted-torus` — display transverse separatrices. **For:** tests index drops. **Prov:** [S: literature-derived; P: literature-derived].
3. `cex-symmetric-sphere-height-flow-is-not-morse-smale` — maximum and minimum stable/unstable sets meet in excess dimension. **For:** shows Morse does not imply Morse--Smale. **Prov:** [S: literature-derived; P: literature-derived].
4. `cex-an-index-one-moduli-space-can-be-infinite-without-compactness` — give a noncompact escaping family. **For:** blocks using discreteness as finiteness. **Prov:** [S: literature-derived; P: literature-derived].
5. `ex-regular-level-slices-for-unparametrized-trajectories` — identify a moduli space with intersection points on a level. **For:** verifies item 8 concretely. **Prov:** [S: literature-derived; P: literature-derived].

### DT-5 — Sublevel deformation and the handle-attachment theorem

**A page:** `sublevel-deformation-and-the-handle-attachment-theorem`

**Requires:** DT-1--DT-4; DG collars/tubes/flows; `AT-n[singular-homology]`
for the relative-homology corollary only.

**Sources:** N §§2.1--2.2, pp. 23--45; C §§12.3--12.4, pp. 466--475;
H Ch. 6 §§2--3, pp. 149--165; Audin--Damian §2.1, pp. 23--35.

1. `def-closed-sublevel-and-level-set-of-a-smooth-function` (definition) — write $M^a=f^{-1}(( -\infty,a])$ and $M_a=f^{-1}(a)$. **For:** fixes endpoint inclusion throughout handle arguments. **Prov:** [S: literature-derived; P: not-applicable].
2. `lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time` (lemma) — on $f^{-1}[a,b]$ with no critical points, $\operatorname{grad}f/\|\operatorname{grad}f\|^2$ has $df=1$ and a complete finite-time flow. **For:** isolates the compactness step. **Prov:** [S: literature-derived; P: literature-derived].
3. `thm-regular-interval-diffeomorphism` (theorem) — a compact critical-point-free band is diffeomorphic to $M_a\times[a,b]$, compatibly with levels. **For:** proves topology is constant between critical values. **Prov:** [S: literature-derived; P: literature-derived].
4. `cor-regular-sublevels-are-diffeomorphic` (corollary) — $M^a\cong M^b$ after adjoining the product band. **For:** supports finite critical-level induction. **Prov:** [S: literature-derived; P: literature-derived].
5. `prop-deformation-lemma-for-a-critical-point-free-slab` (proposition) — $M^b$ strongly deformation retracts to $M^a$ under the same compact-band hypothesis. **For:** supplies homotopy conclusions even when only a collar is needed. **Prov:** [S: literature-derived; P: literature-derived].
6. `def-k-handle-core-cocore-attaching-region-and-belt-sphere` (definition) — define all parts of $D^k\times D^{n-k}$, including $k=0,n$. **For:** makes cancellation/intersection language precise. **Prov:** [S: literature-derived; P: not-applicable].
7. `def-attaching-a-smooth-handle-with-corner-rounding` (definition) — glue the attaching region by an embedding with framed normal data and smooth the resulting corner. **For:** records data usually hidden by pictures. **Prov:** [S: literature-derived; P: not-applicable].
8. `lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism` (lemma) — compatible smoothings are isotopic. **For:** makes the construction well defined. **Prov:** [S: literature-derived; P: literature-derived].
9. `lem-local-morse-sublevel-pair-is-a-handle-pair` (lemma) — the quadratic normal form cuts out the standard index-$\lambda$ handle change. **For:** supplies the local geometric core of the attachment theorem. **Prov:** [S: literature-derived; P: literature-derived].
10. `lem-gradient-flow-identifies-the-local-and-global-attaching-regions` (lemma) — flow transports the local attaching sphere down to the lower regular level without collisions. **For:** glues the local model into the global sublevel. **Prov:** [S: literature-derived; P: literature-derived].
11. `thm-one-critical-point-handle-attachment` (theorem) — if a compact slab contains exactly one nondegenerate index-$\lambda$ critical point, $M^b$ is diffeomorphic to $M^a$ with one $\lambda$-handle attached. **For:** is the central topological-change theorem. **Prov:** [S: literature-derived; P: literature-derived].
12. `cor-unstable-disk-is-the-handle-core` (corollary) — for an adapted gradient-like field, the descending disk gives the core and its boundary the attaching sphere. **For:** connects dynamics to handle calculus. **Prov:** [S: literature-derived; P: literature-derived].
13. `cor-one-critical-point-cell-attachment-homotopy-type` (corollary) — $M^b$ has the homotopy type of $M^a$ with one $\lambda$-cell. **For:** feeds Morse inequalities through AT. **Prov:** [S: literature-derived; P: literature-derived].
14. `cor-relative-homology-of-a-single-handle-pair` (corollary) — with coefficients $R$, $H_i(M^b,M^a;R)$ is $R$ in degree $\lambda$ and zero otherwise. **For:** is the exact algebraic input to DT-8. **Prov:** [S: literature-derived; P: literature-derived].
15. `prop-simultaneous-attachment-at-a-morse-critical-value` (proposition) — if a compact slab contains finitely many nondegenerate critical points all at the same value, attach disjoint handles of their respective indices. **For:** covers Morse but nonexcellent functions. **Prov:** [S: literature-derived; P: literature-derived].
16. `cor-index-zero-handles-create-components` (corollary) — a $0$-handle is a disjoint $n$-disk attachment. **For:** closes the empty-lower-sublevel case. **Prov:** [S: literature-derived; P: literature-derived].
17. `cor-index-n-handles-cap-boundary-spheres` (corollary) — an $n$-handle attaches along its whole $S^{n-1}$ boundary region. **For:** supplies the upper endpoint dual. **Prov:** [S: literature-derived; P: literature-derived].
18. `rem-compact-critical-band-is-the-local-handle-theorem-hypothesis` (remark) — properness of $f$ is a sufficient global condition, not part of the local conclusion. **For:** states the noncompact boundary accurately. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  The regular-band theorem needs compactness to keep the
normalised flow alive.  The handle theorem is not merely the Morse lemma:
items 9 and 10 separately identify the local pair and transport its attaching
data.  Same-level critical points are handled by item 15, never silently
ordered.

**B page:** `sublevel-deformation-and-the-handle-attachment-theorem-examples`

1. `ex-sublevels-of-height-on-the-sphere` — follow a $0$-handle and an $n$-handle. **For:** tests endpoint indices. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-torus-from-one-handle-of-each-index` — build a surface from one $0$-, two $1$-, and one $2$-handle. **For:** prepares Euler/Morse counts. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-a-one-handle-joins-components-or-adds-a-tunnel` — distinguish the two attaching patterns. **For:** shows index alone does not determine global effect. **Prov:** [S: literature-derived; P: literature-derived].
4. `ex-simultaneous-handles-at-a-repeated-critical-value` — attach two disjoint handles in one slab. **For:** checks item 15. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-a-critical-point-free-noncompact-band-need-not-be-a-global-product` — give a normalized flow escaping in finite time. **For:** shows compactness is essential. **Prov:** [S: literature-derived; P: literature-derived].
6. `ex-relative-homology-of-a-handle-by-excision` — reduce the pair to $(D^\lambda,S^{\lambda-1})$. **For:** finite verification of item 14. **Prov:** [S: literature-derived; P: literature-derived].

### DT-6 — Handle decompositions, duality, and rearrangement

**A page:** `handle-decompositions-duality-and-rearrangement`

**Requires:** DT-2--DT-5; DG collars/orientations; AT singular/cellular
homology only where explicitly cited.

**Sources:** W §§5.1--5.4, pp. 129--148; N §§2.1--2.2, pp. 23--45;
P Ch. 5, pp. 163--194; MH §§2--4, pp. 10--48.

1. `def-smooth-cobordism-triad-for-morse-theory` (definition) — a compact cobordism has collared incoming and outgoing faces with $\partial W=(-M_0)\sqcup M_1$, allowing the empty face. **For:** fixes the object on which relative handles live. **Prov:** [S: literature-derived; P: not-applicable].
2. `def-morse-function-adapted-to-a-cobordism` (definition) — $f:W\to[0,1]$ is constant on boundary faces, has no boundary critical points, and its gradient points inward at $M_0$ and outward at $M_1$. **For:** prevents flow escape through the wrong boundary. **Prov:** [S: literature-derived; P: not-applicable].
3. `thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms` (theorem) — relative transversality and collars produce such a function with distinct interior critical values. **For:** starts relative handle theory. **Prov:** [S: literature-derived; P: literature-derived].
4. `def-handle-decomposition-relative-to-the-incoming-boundary` (definition) — obtain $W$ from $M_0\times[0,\varepsilon]$ by finitely many ordered handles. **For:** names the finite geometric presentation. **Prov:** [S: literature-derived; P: not-applicable].
5. `thm-morse-functions-and-handle-decompositions-correspond` (theorem) — an adapted excellent Morse function yields one handle per critical point, and every finite handle decomposition admits an adapted Morse function. **For:** permits movement between analytic and combinatorial data. **Prov:** [S: literature-derived; P: literature-derived].
6. `lem-a-handle-decomposition-gives-a-relative-cw-complex` (lemma) — collapsing cocore directions leaves one relative cell per handle. **For:** connects to the AT cellular complex without reconstructing it. **Prov:** [S: literature-derived; P: literature-derived].
7. `def-dual-handle-decomposition` (definition) — reverse the cobordism and replace each $k$-handle by an $(n-k)$-handle. **For:** controls upper-index arguments. **Prov:** [S: literature-derived; P: not-applicable].
8. `thm-handle-duality-from-negating-a-morse-function` (theorem) — the decomposition of $-f$ relative to $M_1$ is the dual decomposition, with attaching and belt spheres interchanged. **For:** proves item 7 geometrically. **Prov:** [S: literature-derived; P: literature-derived].
9. `lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged` (lemma) — when no downward trajectory runs from one critical point to the other, modify $f$ without changing critical points to reverse their levels. **For:** isolates the basic rearrangement move. **Prov:** [S: literature-derived; P: literature-derived].
10. `thm-morse-rearrangement-by-index` (theorem) — after a gradient-like perturbation on a compact cobordism, critical values may be ordered so lower indices occur below higher indices. **For:** creates index-filtered handle complexes. **Prov:** [S: literature-derived; P: literature-derived].
11. `thm-self-indexing-morse-function-existence` (theorem) — a compact cobordism presentation can be represented with critical values depending monotonically on index, after rescaling. **For:** simplifies all later filtrations. **Prov:** [S: literature-derived; P: literature-derived].
12. `lem-handles-of-equal-index-can-be-attached-on-one-level` (lemma) — disjoint same-index handles can be grouped without changing the cobordism. **For:** makes handle chain groups visible. **Prov:** [S: literature-derived; P: literature-derived].
13. `prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles` (proposition) — relative to a nonempty connected incoming boundary, cancel/connect $0$-handles so none remain. **For:** prepares h-cobordism normalisation. **Prov:** [S: literature-derived; P: literature-derived].
14. `prop-dual-elimination-of-top-index-handles` (proposition) — the corresponding statement for $n$-handles follows from duality and nonempty outgoing boundary. **For:** supplies the upper endpoint. **Prov:** [S: literature-derived; P: literature-derived].
15. `lem-product-cobordisms-have-critical-point-free-presentations` (lemma) — projection on $M\times[0,1]$ is adapted and has no handles. **For:** supplies the target form for h-cobordism. **Prov:** [S: literature-derived; P: literature-derived].
16. `rem-handle-decompositions-are-not-canonical` (remark) — choices of Morse data, attaching maps and rearrangements change the presentation, not the diffeomorphism type. **For:** motivates elementary moves and invariants. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  The converse in item 5 needs a compatible smooth
function on each handle and corner smoothing.  Rearrangement requires absence
of relevant flow connections, not merely different indices.  Elimination of
endpoint handles assumes the named boundary is nonempty and connected.

**B page:** `handle-decompositions-duality-and-rearrangement-examples`

1. `ex-relative-handle-decomposition-of-a-cylinder` — display the empty presentation. **For:** checks item 15. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-dual-handle-presentations-of-a-genus-g-surface` — reverse a $0$/$1$/$2$ presentation. **For:** tests dual indices and endpoints. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-reordering-independent-one-handles` — interchange disjoint same/lower-index attachments. **For:** verifies the rearrangement condition. **Prov:** [S: literature-derived; P: literature-derived].
4. `cex-critical-levels-cannot-always-be-interchanged-across-a-connecting-trajectory` — show the obstruction in a simple surface flow. **For:** tests item 9's hypothesis. **Prov:** [S: literature-derived; P: literature-derived].
5. `ex-empty-incoming-boundary-requires-zero-handles` — build a closed connected manifold from disks and higher handles. **For:** blocks misusing item 13. **Prov:** [S: literature-derived; P: literature-derived].

### DT-7 — Handle cancellation, slides, and elementary moves

**A page:** `handle-cancellation-slides-and-elementary-moves`

**Requires:** DT-5--DT-6; DT-11 intersection signs for the oriented algebraic
form only (orientation-forward reference); DG isotopy/tubes.

**Sources:** W §5.4, pp. 143--148; P Chs. 4--5, pp. 132--194;
MH §§4--6, pp. 37--78; Lück Ch. 1 §§1.2--1.4, pp. 6--22.

1. `def-geometric-cancelling-handle-pair` (definition) — a $k$- and $(k+1)$-handle cancel when the latter attaching sphere meets the former belt sphere transversely once. **For:** states the exact geometric criterion. **Prov:** [S: literature-derived; P: not-applicable].
2. `lem-one-intersection-gives-the-standard-local-cancelling-model` (lemma) — a neighbourhood of the two cores is diffeomorphic to the standard birth/death cobordism. **For:** isolates the local proof. **Prov:** [S: literature-derived; P: literature-derived].
3. `thm-handle-cancellation` (theorem) — a geometrically cancelling adjacent-index pair can be removed without changing the relative diffeomorphism type. **For:** powers h-cobordism simplification. **Prov:** [S: literature-derived; P: literature-derived].
4. `thm-creation-of-a-cancelling-handle-pair` (theorem) — the inverse local modification introduces a $k,(k+1)$ pair. **For:** supplies stabilisation and comparison of presentations. **Prov:** [S: literature-derived; P: literature-derived].
5. `def-handle-slide-of-one-k-handle-over-another` (definition) — band-sum one attaching sphere with a framed parallel of another. **For:** names the geometric row operation. **Prov:** [S: literature-derived; P: not-applicable].
6. `lem-handle-slides-preserve-the-relative-diffeomorphism-type` (lemma) — extend the band motion to the already-built boundary and compare attachments. **For:** makes slides legitimate moves. **Prov:** [S: literature-derived; P: literature-derived].
7. `lem-handle-slides-act-by-elementary-basis-change-on-handle-chains` (lemma) — the corresponding generator is replaced by itself plus a signed/group-ring multiple of another. **For:** connects geometry to algebraic cancellation. **Prov:** [S: literature-derived; P: literature-derived].
8. `def-attaching-belt-intersection-matrix-of-adjacent-index-handles` (definition) — record oriented intersections (or mod-2 parities) between attaching and belt spheres. **For:** packages cancellation data. **Prov:** [S: literature-derived; P: not-applicable].
9. `lem-geometric-cancellation-is-a-unit-entry-in-the-handle-matrix` (lemma) — a single signed point gives coefficient $\pm1$ (or the relevant group-ring unit). **For:** identifies the algebraic target. **Prov:** [S: literature-derived; P: literature-derived].
10. `prop-elementary-matrix-operations-are-realized-by-handle-slides` (proposition) — row/column additions and sign/unit changes come from slides and orientation/path choices. **For:** translates matrix reduction into geometry. **Prov:** [S: literature-derived; P: literature-derived].
11. `lem-algebraic-cancellation-does-not-yet-give-geometric-cancellation` (lemma) — extra intersection pairs must be removed before item 3 applies. **For:** exposes the Whitney-trick dependency. **Prov:** [S: literature-derived; P: literature-derived].
12. `prop-morse-cancellation-criterion-via-a-unique-connecting-orbit` (proposition) — adjacent-index critical points joined by one transverse orbit and no competing broken data may be cancelled by changing Morse data. **For:** gives the dynamical form of item 3. **Prov:** [S: literature-derived; P: literature-derived].
13. `lem-cancellation-modification-can-be-supported-in-a-trajectory-neighbourhood` (lemma) — outside a compact local neighbourhood the Morse function/field remain fixed. **For:** supports relative constructions. **Prov:** [S: literature-derived; P: literature-derived].
14. `rem-handle-slides-are-not-handle-cancellations` (remark) — a slide changes attaching data but does not change handle count. **For:** prevents conflating the two Cerf moves. **Prov:** [S: literature-derived; P: not-applicable].
15. `rem-elementary-moves-do-not-constitute-full-cerf-theory-here` (remark) — the scaffold records births/deaths, slides and rearrangements only; no classification of arbitrary one-parameter families is asserted. **For:** fixes the proof boundary. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  Separate local cancellation (items 1--3), algebraic
matrix simplification (items 7--10), and removal of excess intersections
(deferred to DT-22).  A unit algebraic coefficient is not by itself a single
geometric point.  Support control in item 13 is required for relative
applications.

**B page:** `handle-cancellation-slides-and-elementary-moves-examples`

1. `ex-cancelling-zero-one-handle-pair` — draw the local birth and cancellation. **For:** tests the endpoint case. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-cancelling-one-two-handle-pair-on-a-surface` — verify one attaching/belt intersection. **For:** visualizes item 1. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-a-handle-slide-realizes-an-elementary-row-operation` — compute a two-handle matrix before and after a slide. **For:** checks item 7. **Prov:** [S: literature-derived; P: literature-derived].
4. `cex-algebraic-intersection-one-with-three-geometric-points` — signs sum to one but cancellation is not yet geometric. **For:** motivates the Whitney trick. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-adjacent-index-handles-with-zero-intersection-do-not-cancel` — disjoint attaching and belt spheres violate the criterion. **For:** blocks count-only cancellation. **Prov:** [S: literature-derived; P: literature-derived].

### DT-8 — Morse inequalities and the handle chain complex

**A page:** `morse-inequalities-and-the-handle-chain-complex`

**Requires:** DT-5--DT-7; `AT-n[singular-homology]` for relative/cellular
homology, Betti numbers and long exact sequences.

**Sources:** N §2.3, pp. 46--53; C §12.5, pp. 476--482;
Audin--Damian §4.4, pp. 105--111; Ritter Lecture 21, PDF pp. 96--101.

1. `def-morse-numbers-and-morse-polynomial` (definition) — $m_k(f)$ counts index-$k$ critical points and $M_f(t)=\sum m_kt^k$. **For:** packages geometric data. **Prov:** [S: literature-derived; P: not-applicable].
2. `def-poincare-polynomial-over-a-field` (definition) — $P_M(t)=\sum b_k(M;\Bbbk)t^k$ using the AT Betti numbers. **For:** fixes coefficient dependence. **Prov:** [S: literature-derived; P: not-applicable].
3. `lem-exact-sequence-dimension-inequality` (lemma) — finite exact vector-space sequences give the alternating partial-sum inequalities needed below. **For:** isolates all linear algebra. **Prov:** [S: literature-derived; P: literature-derived].
4. `lem-one-handle-changes-relative-homology-in-one-degree` (lemma) — invoke DT-5's handle pair and the AT long exact sequence. **For:** is the induction unit. **Prov:** [S: literature-derived; P: literature-derived].
5. `thm-morse-polynomial-identity` (theorem) — for a Morse function on a closed manifold, $M_f(t)=P_M(t)+(1+t)Q(t)$ with $Q$ having nonnegative integer coefficients. **For:** contains all classical inequalities. **Prov:** [S: literature-derived; P: literature-derived].
6. `cor-weak-morse-inequalities` (corollary) — $m_k(f)\ge b_k(M;\Bbbk)$ for every $k$. **For:** gives degreewise critical-point lower bounds. **Prov:** [S: literature-derived; P: literature-derived].
7. `cor-strong-morse-inequalities` (corollary) — alternating partial sums of the $m_i$ dominate those of $b_i$ with the standard parity sign. **For:** records the sharper form. **Prov:** [S: literature-derived; P: literature-derived].
8. `cor-morse-euler-characteristic-identity` (corollary) — $\sum_p(-1)^{\lambda(p)}=\chi(M)$. **For:** links Morse theory to DT-13. **Prov:** [S: literature-derived; P: literature-derived].
9. `cor-total-critical-point-lower-bound` (corollary) — $\#\operatorname{Crit}(f)\ge\sum_k b_k(M;\Bbbk)$. **For:** supplies a coarse but useful obstruction. **Prov:** [S: literature-derived; P: literature-derived].
10. `def-perfect-morse-function-over-a-field` (definition) — $f$ is perfect over $\Bbbk$ when $m_k=b_k$ for all $k$. **For:** names equality in all weak inequalities. **Prov:** [S: literature-derived; P: not-applicable].
11. `lem-perfectness-is-equivalent-to-vanishing-morse-correction-polynomial` (lemma) — $Q=0$ iff all Morse differentials/connecting losses vanish over the chosen field. **For:** interprets the equality case. **Prov:** [S: literature-derived; P: literature-derived].
12. `prop-relative-morse-inequalities-for-a-cobordism` (proposition) — an adapted Morse function bounds $H_*(W,M_0;\Bbbk)$ by its relative handle counts. **For:** is the version used in h-cobordism. **Prov:** [S: literature-derived; P: literature-derived].
13. `lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers` (lemma) — after index ordering, the cellular boundary matrix is computed by oriented/mod-2 intersections. **For:** connects DT-7 to Morse homology. **Prov:** [S: literature-derived; P: literature-derived].
14. `prop-morse-handle-chain-complex-computes-singular-homology` (proposition) — the finite handle filtration's cellular complex computes $H_*(M;\Bbbk)$ through the AT comparison theorem. **For:** gives a concrete proof route for item 5. **Prov:** [S: literature-derived; P: literature-derived].
15. `rem-morse-inequalities-depend-on-the-coefficient-field` (remark) — torsion can change Betti numbers and perfectness, though the Euler equality is coefficient independent. **For:** states the algebraic boundary. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  The polynomial identity requires more than the weak
inequalities; construct $Q$ from ranks of boundary maps or exact-sequence
defects.  Every finite-dimensional claim depends on compactness.  Perfectness
is always annotated by coefficients.

**B page:** `morse-inequalities-and-the-handle-chain-complex-examples`

1. `ex-perfect-height-function-on-a-sphere` — obtain $1+t^n$. **For:** checks equality at endpoint indices. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-perfect-morse-function-on-a-torus` — obtain $1+2t+t^2$. **For:** verifies the Euler identity. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-real-projective-space-shows-coefficient-dependent-perfectness` — compare $\mathbb F_2$ and rational Betti numbers. **For:** tests item 15. **Prov:** [S: literature-derived; P: literature-derived].
4. `ex-cancellation-pair-contributes-a-one-plus-t-term` — see how a birth adds $t^k+t^{k+1}$. **For:** visualizes $Q$. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-euler-equality-alone-does-not-imply-perfectness` — exhibit extra adjacent-index critical pairs with canceling signs. **For:** blocks a false converse. **Prov:** [S: literature-derived; P: literature-derived].

### DT-9 — Morse trajectory moduli spaces and the Morse differential

**A page:** `morse-trajectory-moduli-spaces-and-the-morse-differential`

**Requires:** DT-3--DT-4; DG orientations; no ambient orientation assumption.

**Sources:** N §§2.5 and 4.4--4.5, pp. 60--69 and 183--200;
Audin--Damian §§3.1--3.4, pp. 55--75; Ritter Lectures 17--19, PDF pp. 76--91;
C §§13.4 and App. A--B, pp. 507--532.

1. `def-mod-two-morse-chain-group` (definition) — $CM_k(f,g;\mathbb F_2)$ is freely generated by index-$k$ critical points. **For:** begins without orientation choices. **Prov:** [S: literature-derived; P: not-applicable].
2. `def-broken-morse-trajectory` (definition) — a finite ordered string of nonconstant trajectories through strictly descending critical points. **For:** names compactification boundary objects. **Prov:** [S: literature-derived; P: not-applicable].
3. `def-geometric-convergence-to-a-broken-morse-trajectory` (definition) — after independent time shifts, components converge on compact intervals and level slices. **For:** fixes the compactification topology. **Prov:** [S: literature-derived; P: not-applicable].
4. `thm-morse-trajectory-compactness-up-to-breaking` (theorem) — on a closed Morse--Smale pair every trajectory sequence with fixed endpoints has a subsequence converging to a broken trajectory. **For:** is the load-bearing finiteness theorem. **Prov:** [S: literature-derived; P: literature-derived].
5. `lem-breaking-length-is-bounded-by-index-drop` (lemma) — each nonconstant component drops index at least one. **For:** turns compactness into a finite stratification. **Prov:** [S: literature-derived; P: literature-derived].
6. `cor-index-one-trajectory-moduli-spaces-are-finite` (corollary) — zero-dimensional compactified spaces admit no breaks and are finite. **For:** makes differential coefficients finite. **Prov:** [S: literature-derived; P: literature-derived].
7. `def-mod-two-morse-differential` (definition) — count index-one unparametrized trajectories modulo two. **For:** defines the chain operator. **Prov:** [S: literature-derived; P: not-applicable].
8. `thm-index-two-compactification-is-a-compact-one-manifold-with-boundary` (theorem) — its boundary is the disjoint union of once-broken products $\mathcal M(p,r)\times\mathcal M(r,q)$. **For:** gives the geometric $\partial^2$ relation. **Prov:** [S: literature-derived; P: literature-derived].
9. `lem-gluing-broken-index-two-trajectories-gives-collar-ends` (lemma) — sufficiently long necks parametrise a neighbourhood of every broken configuration. **For:** proves no boundary points are missing. **Prov:** [S: literature-derived; P: literature-derived].
10. `thm-mod-two-morse-differential-squares-to-zero` (theorem) — compact one-manifolds have an even number of boundary points. **For:** constructs mod-two Morse homology. **Prov:** [S: literature-derived; P: literature-derived].
11. `def-orientation-line-of-a-morse-critical-point` (definition) — use the determinant/orientation line of $T_pW^u(p)$. **For:** supplies integral signs without orienting $M$. **Prov:** [S: literature-derived; P: not-applicable].
12. `lem-unstable-orientations-induce-trajectory-moduli-orientations` (lemma) — transverse intersection and the positive flow direction orient $\mathcal M(p,q)$. **For:** fixes the sign convention. **Prov:** [S: literature-derived; P: literature-derived].
13. `def-signed-morse-differential-over-the-integers` (definition) — sum signed index-one trajectories between chosen orientation-line generators. **For:** defines the integral complex. **Prov:** [S: literature-derived; P: not-applicable].
14. `lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli` (lemma) — the outward-normal-first sign on each broken end equals the product of the two zero-dimensional trajectory signs with the chain-complex convention. **For:** is the integral sign calculation. **Prov:** [S: literature-derived; P: literature-derived].
15. `thm-integral-morse-differential-squares-to-zero` (theorem) — oriented boundary points cancel algebraically. **For:** completes the integral chain complex. **Prov:** [S: literature-derived; P: literature-derived].
16. `rem-morse-homology-over-the-integers-does-not-require-orientability-of-m` (remark) — orientation lines replace an ambient orientation. **For:** records a commonly elided subtlety. **Prov:** [S: literature-derived; P: not-applicable].
17. `rem-compactness-up-to-breaking-needs-closedness-or-a-proper-compactness-package` (remark) — on noncompact manifolds escape and bubbling-at-infinity analogues must be excluded. **For:** protects the scope of item 4. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  Discreteness becomes finiteness only after item 4.
For index drop two, compactness gives candidate broken limits; the gluing lemma
is separately needed to identify a manifold-with-boundary collar.  The
outward boundary orientation in item 14 must match DG exactly.

**B page:** `morse-trajectory-moduli-spaces-and-the-morse-differential-examples`

1. `ex-morse-complex-of-the-circle` — count its two downward arcs modulo two and with signs. **For:** tests cancellation. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-morse-complex-of-the-two-sphere` — the differential vanishes for degree reasons. **For:** checks endpoint grading. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-broken-trajectories-in-an-index-two-torus-moduli-space` — display the two-stage ends. **For:** visualizes item 8. **Prov:** [S: literature-derived; P: literature-derived].
4. `ex-changing-an-unstable-orientation-changes-two-basis-signs` — verify the homology is unchanged. **For:** checks orientation-line well-definedness. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-a-naive-signed-count-without-the-quotient-orientation-can-fail-d-squared-zero` — exhibit the sign ambiguity. **For:** shows item 12 is essential. **Prov:** [S: literature-derived; P: literature-derived].

### DT-10 — Morse homology, continuation, and comparison

**A page:** `morse-homology-continuation-and-comparison`

**Requires:** DT-9; `AT-n[singular-homology]` for the final comparison;
DG time-dependent flows/transversality.

**Sources:** Audin--Damian §§3.3--3.5 and §§4.1, 4.6, 4.9, pp. 68--80,
83--90, 112--126; Ritter Lectures 19--21, PDF pp. 87--101; N §§2.5,
4.4--4.5, pp. 60--69 and 183--200.

1. `def-morse-homology-of-a-morse-smale-pair` (definition) — $HM_*(f,g;R)=H_*(CM_*(f,g;R),\partial)$. **For:** names the provisional invariant. **Prov:** [S: literature-derived; P: not-applicable].
2. `def-regular-continuation-datum-between-morse-smale-pairs` (definition) — choose an $s$-dependent interpolating function/metric constant at both ends and transverse for the continuation equation. **For:** fixes the comparison problem. **Prov:** [S: literature-derived; P: not-applicable].
3. `lem-continuation-energy-identity` (lemma) — solutions satisfy an endpoint energy formula with the controlled $\partial_sf_s$ correction. **For:** bounds continuation trajectories. **Prov:** [S: literature-derived; P: literature-derived].
4. `thm-continuation-trajectories-are-compact-up-to-breaking` (theorem) — on a closed manifold, zero- and one-dimensional continuation moduli compactify by Morse breaking at the ends. **For:** makes continuation counts finite. **Prov:** [S: literature-derived; P: literature-derived].
5. `def-continuation-chain-map` (definition) — count zero-dimensional continuation solutions with mod-two or orientation-line signs. **For:** constructs the candidate invariant map. **Prov:** [S: literature-derived; P: not-applicable].
6. `thm-continuation-count-is-a-chain-map` (theorem) — oriented/mod-two boundaries of one-dimensional continuation moduli give $\Phi\partial=\partial\Phi$. **For:** descends the count to homology. **Prov:** [S: literature-derived; P: literature-derived].
7. `def-two-parameter-continuation-homotopy` (definition) — a regular family between continuation data gives degree-one counts. **For:** prepares independence of choices. **Prov:** [S: literature-derived; P: not-applicable].
8. `thm-homotopic-continuation-data-give-chain-homotopic-maps` (theorem) — compactified parameterised moduli yield the chain-homotopy identity. **For:** removes interpolation dependence. **Prov:** [S: literature-derived; P: literature-derived].
9. `thm-continuation-composition-law-on-homology` (theorem) — concatenation/gluing identifies the composite map with the continuation for the concatenated datum. **For:** gives functoriality. **Prov:** [S: literature-derived; P: literature-derived].
10. `thm-reverse-continuation-is-an-inverse-on-morse-homology` (theorem) — composition with a reverse homotopy is the identity map on homology. **For:** proves invariance under Morse data. **Prov:** [S: literature-derived; P: literature-derived].
11. `def-canonical-morse-homology-of-a-closed-manifold` (definition) — identify all Morse--Smale homologies through canonical continuation isomorphisms. **For:** names the data-independent object. **Prov:** [S: literature-derived; P: not-applicable].
12. `prop-relative-morse-complex-for-an-adapted-cobordism` (proposition) — boundary-directed data count only interior critical points and compute the relative handle complex. **For:** extends the theory safely to cobordisms. **Prov:** [S: literature-derived; P: literature-derived].
13. `thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex` (theorem) — for compatible Morse data, signed trajectory counts agree with attaching-map boundary coefficients. **For:** bridges analytic and handle constructions. **Prov:** [S: literature-derived; P: literature-derived].
14. `thm-morse-homology-is-naturally-isomorphic-to-singular-homology` (theorem) — compose item 13 with the AT cellular--singular comparison, over $\mathbb Z$ or a stated coefficient ring. **For:** identifies the invariant without rebuilding singular theory. **Prov:** [S: literature-derived; P: literature-derived].
15. `cor-morse-homology-recovers-the-morse-inequalities` (corollary) — ranks of a finite chain complex dominate homology ranks and give the correction polynomial. **For:** closes the two classical routes. **Prov:** [S: literature-derived; P: literature-derived].
16. `rem-noncompact-morse-homology-needs-properness-completeness-and-compactness-control` (remark) — the closed theory does not automatically extend to an arbitrary Morse exhaustion. **For:** blocks a false generalisation. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  The continuation chain-map, independence and
composition statements arise from three different compactified moduli
problems.  None follows merely from “generic homotopy.”  The singular
comparison cites AT's construction and must wait for its exact relative label.

**B page:** `morse-homology-continuation-and-comparison-examples`

1. `ex-continuation-across-a-birth-death-adds-an-acyclic-pair` — compute the local two-generator complex. **For:** visualizes invariance. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-two-morse-functions-on-the-circle-have-isomorphic-morse-homology` — compare a minimal and stabilised function. **For:** checks continuation. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-relative-morse-homology-of-a-single-handle-cobordism` — recover one relative generator. **For:** tests item 12. **Prov:** [S: literature-derived; P: literature-derived].
4. `ex-morse-and-cellular-boundaries-for-a-surface-handle-presentation` — match trajectory and attaching coefficients. **For:** checks item 13. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-a-nonproper-noncompact-morse-function-can-lose-continuation-trajectories-at-infinity` — display the escape mechanism. **For:** tests item 16. **Prov:** [S: literature-derived; P: literature-derived].

### DT-11 — Oriented and mod-two intersection numbers

**A page:** `oriented-and-mod-two-intersection-numbers`

**Requires:** DG transversality, orientations, boundary and degree pages;
`AT-n[poincare-duality]` only for the later algebraic identification, not for
the geometric definition.

**Sources:** GP Ch. 2 §4, pp. 77--84 and Ch. 3 §3, pp. 107--118;
H Ch. 5 §2, pp. 131--140; Stanford Math 215B Lectures 14--15, pp. 43--49;
M Chs. 4--5, pp. 20--31.

1. `def-transverse-complementary-dimensional-intersection-set` (definition) — for maps/submanifolds whose dimensions sum to $\dim M$, define the transverse fibre product/intersection. **For:** fixes both map and submanifold versions. **Prov:** [S: literature-derived; P: not-applicable].
2. `lem-compact-transverse-complementary-intersections-are-finite` (lemma) — a compact zero-manifold is finite, including the empty case. **For:** makes numerical counts well defined. **Prov:** [S: literature-derived; P: literature-derived].
3. `def-mod-two-intersection-number` (definition) — count the finite transverse intersection modulo two without orientation hypotheses. **For:** supplies the universal parity theory. **Prov:** [S: literature-derived; P: not-applicable].
4. `lem-boundary-of-a-compact-one-manifold-has-even-cardinality` (lemma) — every compact one-manifold is circles plus intervals. **For:** is the complete mod-two invariance engine. **Prov:** [S: literature-derived; P: literature-derived].
5. `thm-mod-two-intersection-number-is-homotopy-invariant` (theorem) — a transverse compact homotopy trace is a one-manifold whose endpoint parity agrees. **For:** proves perturbation independence. **Prov:** [S: literature-derived; P: literature-derived].
6. `def-local-oriented-intersection-sign` (definition) — the sign is positive when $T_xA\oplus T_xB\to T_xM$ preserves orientation. **For:** fixes the sign and factor order. **Prov:** [S: literature-derived; P: not-applicable].
7. `def-oriented-intersection-number` (definition) — sum local signs for compact transverse complementary oriented intersections. **For:** defines the integral invariant. **Prov:** [S: literature-derived; P: not-applicable].
8. `lem-preimage-orientation-agrees-with-the-local-intersection-sign` (lemma) — the DG exact-sequence orientation on a transverse inverse image gives the same sign. **For:** reconciles map and submanifold conventions. **Prov:** [S: literature-derived; P: literature-derived].
9. `lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs` (lemma) — outward-normal-first orientation yields the terminal count minus the initial count. **For:** isolates the sign in homotopy invariance. **Prov:** [S: literature-derived; P: literature-derived].
10. `thm-oriented-intersection-number-is-homotopy-invariant` (theorem) — under compact/proper trace and boundary-avoidance hypotheses the signed count is unchanged. **For:** makes choices and perturbations irrelevant. **Prov:** [S: literature-derived; P: literature-derived].
11. `cor-oriented-intersection-reduces-to-mod-two-intersection` (corollary) — reduce every local sign modulo two. **For:** relates the two theories. **Prov:** [S: literature-derived; P: literature-derived].
12. `thm-intersection-number-under-factor-interchange` (theorem) — $I(B,A)=(-1)^{ab}I(A,B)$ for dimensions $a,b$. **For:** fixes graded commutativity geometrically. **Prov:** [S: literature-derived; P: literature-derived].
13. `prop-two-map-intersection-as-a-diagonal-preimage` (proposition) — $I(f,g)$ is the intersection of $(f,g)$ with $\Delta_N$, with the adopted diagonal orientation. **For:** prepares fixed-point and coincidence theory. **Prov:** [S: literature-derived; P: literature-derived].
14. `cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary` (corollary) — extend one factor over a compact cobordism and count its oriented/mod-two boundary. **For:** feeds characteristic-number cobordism invariance. **Prov:** [S: literature-derived; P: literature-derived].
15. `cor-negative-expected-dimension-generic-intersections-are-empty` (corollary) — transversality plus dimension forces no points. **For:** powers disjunction arguments. **Prov:** [S: literature-derived; P: literature-derived].
16. `rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact` (remark) — proper maps to a closed target give a safe extension; arbitrary noncompact homotopies do not. **For:** records the exact global hypothesis. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  Finiteness, transversality and invariance are separate
issues.  A numerical intersection before perturbation is defined through a
transverse representative, then item 5 or 10 proves independence.  Boundary
avoidance and compact trace hypotheses must be stated, not inferred from local
transversality.

**B page:** `oriented-and-mod-two-intersection-numbers-examples`

1. `ex-latitude-and-meridian-intersections-on-the-torus` — compute signed and mod-two counts after perturbation. **For:** tests orientations and parity. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-two-projective-lines-have-one-mod-two-intersection` — work in $\mathbb RP^2$ without orientability. **For:** shows why mod two suffices. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-degree-as-intersection-with-a-regular-value` — recover the DG degree sign formula. **For:** checks compatibility rather than re-minting degree. **Prov:** [S: literature-derived; P: literature-derived].
4. `cex-geometric-cardinality-is-not-homotopy-invariant` — create a cancelling pair of transverse intersections. **For:** motivates signs/parity. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-noncompact-intersections-can-escape-during-a-homotopy` — show a count changing at infinity. **For:** tests compact trace. **Prov:** [S: literature-derived; P: literature-derived].

### DT-12 — Intersection pairings, self-intersection, and Euler classes

**A page:** `intersection-pairings-self-intersection-and-euler-classes`

**Requires:** DT-11; DG tubes/orientations; `AT-n[cohomology-products]`,
`AT-n[poincare-duality]`, `AT-n[thom-isomorphism]`, and
`AT-n[characteristic-classes]`.

**Sources:** C §§8.3--9.3, pp. 244--260; GP Ch. 3 §§3--4, pp. 107--131;
Stanford Math 215B Lectures 14--16, pp. 43--52; MS Chs. 11--12, pp. 123--146.

1. `def-geometric-intersection-pairing-on-a-closed-oriented-manifold` (definition) — pair complementary oriented embedded cycles by the DT-11 signed count. **For:** supplies the geometric model of the AT pairing. **Prov:** [S: literature-derived; P: not-applicable].
2. `lem-geometric-intersection-descends-through-oriented-cobordism-of-cycles` (lemma) — boundary traces change the count by zero. **For:** proves representative independence at the geometric level. **Prov:** [S: literature-derived; P: literature-derived].
3. `thm-geometric-intersection-equals-the-poincare-dual-cup-pairing` (theorem) — $I(A,B)=\langle PD[A]\smile PD[B],[M]\rangle$ with the AT cap/cup sign convention substituted at build. **For:** is the central AT interface. **Prov:** [S: literature-derived; P: literature-derived].
4. `rem-cap-product-order-awaits-the-at-sign-convention` (remark) — no independent DT cap-product sign is minted; the geometric order from DT-11 is authoritative. **For:** prevents a concurrent sign mismatch. **Prov:** [S: literature-derived; P: not-applicable].
5. `def-self-intersection-number-of-an-oriented-submanifold` (definition) — intersect a compact oriented submanifold with a transverse small normal push-off. **For:** defines self-intersection geometrically. **Prov:** [S: literature-derived; P: not-applicable].
6. `lem-normal-push-off-zeros-are-self-intersection-points` (lemma) — a transverse normal section meets the zero section exactly where its pushed copy meets the original. **For:** converts self-intersection to Euler zeros. **Prov:** [S: literature-derived; P: literature-derived].
7. `thm-self-intersection-is-the-euler-number-of-the-normal-bundle` (theorem) — $A\cdot A=\langle e(\nu_A),[A]\rangle$ when the normal bundle is oriented; mod two use its top Stiefel--Whitney class via AT. **For:** applies, rather than constructs, characteristic classes. **Prov:** [S: literature-derived; P: literature-derived].
8. `lem-normal-bundle-of-the-diagonal-is-canonically-tm` (lemma) — $T(M\times M)|_\Delta/T\Delta\cong TM$ via the difference map. **For:** identifies diagonal self-intersection. **Prov:** [S: literature-derived; P: literature-derived].
9. `cor-diagonal-self-intersection-is-the-euler-number-of-tm` (corollary) — $\Delta\cdot\Delta=\langle e(TM),[M]\rangle$. **For:** bridges to Euler characteristic and Lefschetz. **Prov:** [S: literature-derived; P: literature-derived].
10. `prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual` (proposition) — the zero submanifold has normal bundle identified with the bundle and represents $PD(e(E))$. **For:** geometric characteristic-class application. **Prov:** [S: literature-derived; P: literature-derived].
11. `cor-nowhere-zero-section-forces-the-euler-class-to-vanish` (corollary) — a section disjoint from zero has empty zero cycle. **For:** gives a bundle obstruction used in DT-13/28. **Prov:** [S: literature-derived; P: literature-derived].
12. `prop-mod-two-self-intersection-needs-no-orientation` (proposition) — the parity is evaluation of the top normal Stiefel--Whitney class. **For:** preserves the nonorientable theory. **Prov:** [S: literature-derived; P: literature-derived].
13. `rem-euler-class-construction-remains-owned-by-at` (remark) — DT proves zero-set and self-intersection applications only. **For:** enforces the seam. **Prov:** [S: literature-derived; P: not-applicable].
14. `rem-not-every-homology-class-is-represented-by-an-embedded-submanifold-integrally` (remark) — geometric representatives require hypotheses; the algebraic pairing remains the general AT object. **For:** blocks overclaiming the geometric model. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  Item 3 waits for AT's exact cup/cap convention.  The
self-intersection proof must use a transverse section, identify its zero signs,
and prove independence of the push-off.  Integral Euler evaluation needs an
oriented normal bundle; mod two is the fallback, not an integral substitute.

**B page:** `intersection-pairings-self-intersection-and-euler-classes-examples`

1. `ex-self-intersection-of-the-zero-section-in-an-oriented-plane-bundle` — compute it as the Euler number. **For:** verifies item 7. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-diagonal-in-the-two-sphere-has-self-intersection-two` — evaluate $e(TS^2)$. **For:** previews $\chi(S^2)$. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-coordinate-circles-give-the-hyperbolic-intersection-form-on-a-torus` — compute the skew/symmetric dimension sign. **For:** tests factor order. **Prov:** [S: literature-derived; P: literature-derived].
4. `cex-the-core-circle-of-a-mobius-band-has-no-integral-oriented-self-intersection` — its normal line is nonorientable, but mod-two data survives. **For:** tests orientability. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-vanishing-euler-class-is-not-in-general-a-complete-nowhere-zero-section-criterion` — record a higher obstruction example from the source. **For:** blocks a converse outside the rank/dimension range. **Prov:** [S: literature-derived; P: literature-derived].

### DT-13 — Vector-field index, Euler characteristic, and Poincare--Hopf

**A page:** `vector-field-index-euler-characteristic-and-poincare-hopf`

**Requires:** DT-1, DT-8, DT-11--DT-12; DG vector fields, degree and boundary
orientation; AT homology for the Betti-number definition of $\chi$.

**Sources:** M Ch. 6, pp. 32--41; GP Ch. 3 §§5 and 7, pp. 132--150;
Stanford Math 215B Lectures 16--17, pp. 49--55; H Ch. 5 §2, pp. 131--140.

1. `def-euler-characteristic-of-a-compact-manifold` (definition) — $\chi(M)=\sum_i(-1)^i\dim H_i(M;\mathbb Q)$, with $\chi(\varnothing)=0$. **For:** fixes the invariant without reminting homology. **Prov:** [S: literature-derived; P: not-applicable].
2. `prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions` (proposition) — use the AT long exact sequence/cellular theory. **For:** justifies handle and boundary calculations. **Prov:** [S: literature-derived; P: literature-derived].
3. `def-isolated-zero-and-local-index-of-a-vector-field` (definition) — in a local oriented/trivialised ball, take the degree of $X/\|X\|$ on the boundary sphere; use local orientation data or mod two as appropriate. **For:** defines the local contribution. **Prov:** [S: literature-derived; P: not-applicable].
4. `lem-vector-field-index-is-independent-of-chart-ball-and-trivialization` (lemma) — homotopy and degree invariance reconcile choices. **For:** makes item 3 intrinsic. **Prov:** [S: literature-derived; P: literature-derived].
5. `def-nondegenerate-zero-of-a-vector-field` (definition) — $X(p)=0$ and $DX_p:T_pM\to T_pM$ is invertible in any local trivialisation. **For:** prepares the determinant formula. **Prov:** [S: literature-derived; P: not-applicable].
6. `thm-index-of-a-nondegenerate-vector-field-zero` (theorem) — $\operatorname{ind}_pX=\operatorname{sign}\det(DX_p)$. **For:** makes computations finite. **Prov:** [S: literature-derived; P: literature-derived].
7. `lem-local-index-is-additive-under-a-transverse-perturbation` (lemma) — the index of an isolated possibly degenerate zero is the sum over nearby nondegenerate zeros. **For:** supports generic reduction. **Prov:** [S: literature-derived; P: literature-derived].
8. `prop-vector-field-zero-index-is-a-zero-section-intersection-number` (proposition) — graph/section intersection with the zero section has the same local signs. **For:** connects index to DT-12. **Prov:** [S: literature-derived; P: literature-derived].
9. `thm-poincare-hopf-for-closed-manifolds` (theorem) — for a vector field with isolated zeros on a closed manifold, the sum of indices equals $\chi(M)$. **For:** is the main Euler/index theorem. **Prov:** [S: literature-derived; P: literature-derived].
10. `thm-poincare-hopf-with-outward-pointing-boundary` (theorem) — on a compact manifold with boundary, a field nonzero and strictly outward along $\partial M$ has the same index sum $\chi(M)$. **For:** states the sharp basic boundary extension. **Prov:** [S: literature-derived; P: literature-derived].
11. `cor-nowhere-zero-vector-field-forces-zero-euler-characteristic` (corollary) — an empty zero set has total index zero. **For:** gives the hairy-ball obstruction. **Prov:** [S: literature-derived; P: literature-derived].
12. `cor-morse-gradient-zero-contributes-minus-one-to-the-index-power-lambda` (corollary) — for $-\operatorname{grad}f$, the local index is $(-1)^{n-\lambda}$; for $+\operatorname{grad}f$, it is $(-1)^\lambda$. **For:** reconciles gradient sign with the Morse Euler formula. **Prov:** [S: literature-derived; P: literature-derived].
13. `cor-morse-critical-point-sum-is-the-euler-characteristic` (corollary) — applying Poincare--Hopf to $+\operatorname{grad}f$ recovers $\sum(-1)^\lambda=\chi(M)$. **For:** cross-checks DT-8 without sign drift. **Prov:** [S: literature-derived; P: literature-derived].
14. `cor-closed-odd-dimensional-manifolds-have-zero-euler-characteristic` (corollary) — use Poincare duality (orientable integral or mod-two/rational local-system route) or a generic field argument. **For:** records the closedness-dependent consequence. **Prov:** [S: literature-derived; P: literature-derived].
15. `thm-converse-poincare-hopf-for-nowhere-zero-fields` (theorem) — a closed connected manifold admits a nowhere-zero vector field iff $\chi(M)=0$. **For:** makes the Euler obstruction complete for one tangent section. **Prov:** [S: literature-derived; P: literature-derived].
16. `rem-the-outward-boundary-hypothesis-cannot-be-replaced-by-nonzero-on-the-boundary` (remark) — inward/tangential behaviour contributes boundary corrections. **For:** guards item 10. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  Item 4 must handle all auxiliary choices.  Prove
Poincare--Hopf by zero-section self-intersection or a relative boundary trace,
then derive Morse signs with explicit choice of positive versus negative
gradient.  The converse theorem needs obstruction theory from AT if not proved
by handle cancellation; resolve that interface at build.

**B page:** `vector-field-index-euler-characteristic-and-poincare-hopf-examples`

1. `ex-hairy-ball-theorem-for-even-spheres` — use $\chi(S^{2m})=2$. **For:** applies item 11. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-a-nowhere-zero-vector-field-on-an-odd-sphere` — give an explicit complex-coordinate field. **For:** checks the converse direction. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-source-sink-and-saddle-indices-on-a-surface` — compute $+1,+1,-1$. **For:** tests the determinant formula. **Prov:** [S: literature-derived; P: literature-derived].
4. `ex-outward-radial-field-on-a-disk` — its one index equals $\chi(D^n)$. **For:** checks the boundary theorem. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-an-inward-radial-field-violates-the-outward-boundary-formula` — show the naive statement fails. **For:** tests item 16. **Prov:** [S: literature-derived; P: literature-derived].
6. `cex-an-interval-has-nonzero-euler-characteristic-despite-being-odd-dimensional` — boundary invalidates the closed odd-dimensional corollary. **For:** fixes the closedness clause. **Prov:** [S: literature-derived; P: literature-derived].

### DT-14 — Fixed-point index and the Lefschetz theorem

**A page:** `fixed-point-index-and-the-lefschetz-theorem`

**Requires:** DT-11--DT-13; DG degree/transversality; `AT-n[singular-homology]`,
`AT-n[cohomology-products]` and `AT-n[poincare-duality]` for the algebraic
trace formula.

**Sources:** GP Ch. 3 §4, pp. 119--131; Stanford Math 215B Lecture 17,
pp. 52--55; full [Lectures on Fixed Point Theory](https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf), Lecture II, pp. 12--23.

1. `lem-fixed-points-are-graph-diagonal-intersections` (lemma) — $x=f(x)$ iff $(x,f(x))\in\Gamma_f\cap\Delta_M$. **For:** brings fixed points under DT-11. **Prov:** [S: literature-derived; P: literature-derived].
2. `def-nondegenerate-fixed-point` (definition) — an isolated fixed point is nondegenerate when $I-Df_x$ is invertible. **For:** states the transverse graph condition. **Prov:** [S: literature-derived; P: not-applicable].
3. `lem-graph-transversality-is-fixed-point-nondegeneracy` (lemma) — $\Gamma_f\pitchfork\Delta$ at $x$ iff $I-Df_x$ is invertible. **For:** connects local algebra to intersection theory. **Prov:** [S: literature-derived; P: literature-derived].
4. `def-local-fixed-point-index` (definition) — for an isolated fixed point take the degree of $(\operatorname{id}-f)/\|\operatorname{id}-f\|$ on a small sphere. **For:** includes degenerate isolated points. **Prov:** [S: literature-derived; P: not-applicable].
5. `lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent` (lemma) — use excision/homotopy of the local degree. **For:** makes item 4 intrinsic. **Prov:** [S: literature-derived; P: literature-derived].
6. `thm-index-of-a-nondegenerate-fixed-point` (theorem) — $\operatorname{ind}_x(f)=\operatorname{sign}\det(I-Df_x)$. **For:** fixes the sign against sources using $Df-I$. **Prov:** [S: literature-derived; P: literature-derived].
7. `lem-local-fixed-point-index-is-additive-under-perturbation` (lemma) — split a degenerate isolated fixed point into finitely many nondegenerate ones and sum. **For:** reduces global proofs to transverse maps. **Prov:** [S: literature-derived; P: literature-derived].
8. `def-global-geometric-lefschetz-number` (definition) — for isolated fixed points on a closed manifold set $I(f)=\sum_x\operatorname{ind}_x(f)$. **For:** records the geometric invariant. **Prov:** [S: literature-derived; P: not-applicable].
9. `def-algebraic-lefschetz-number` (definition) — $L(f)=\sum_i(-1)^i\operatorname{tr}(f_*:H_i(M;\mathbb Q)\to H_i(M;\mathbb Q))$. **For:** states the AT-owned homological target. **Prov:** [S: literature-derived; P: not-applicable].
10. `thm-lefschetz-hopf-index-formula` (theorem) — for a smooth self-map of a closed manifold with isolated fixed points, $I(f)=L(f)$. **For:** identifies local geometry and global homology. **Prov:** [S: literature-derived; P: literature-derived].
11. `lem-diagonal-class-expansion-gives-the-alternating-trace` (lemma) — the Poincare-dual diagonal and Kunneth pairing contract the graph class to the trace sum, with AT signs substituted. **For:** splits the proof of item 10. **Prov:** [S: literature-derived; P: literature-derived].
12. `cor-lefschetz-number-is-homotopy-invariant` (corollary) — induced homology maps agree under homotopy. **For:** extends the geometric count past transverse maps. **Prov:** [S: literature-derived; P: literature-derived].
13. `thm-lefschetz-fixed-point-theorem` (theorem) — if $L(f)\ne0$, then $f$ has a fixed point. **For:** is the existence consequence. **Prov:** [S: literature-derived; P: literature-derived].
14. `cor-lefschetz-number-of-the-identity-is-the-euler-characteristic` (corollary) — $L(\operatorname{id})=\chi(M)$. **For:** links Lefschetz and Poincare--Hopf. **Prov:** [S: literature-derived; P: literature-derived].
15. `prop-small-time-flow-fixed-point-indices-agree-with-vector-field-zero-indices` (proposition) — under a consistent short-time sign, the fixed index of the flow near an isolated zero equals its vector-field index. **For:** derives Poincare--Hopf from Lefschetz. **Prov:** [S: literature-derived; P: literature-derived].
16. `rem-isolated-does-not-imply-nondegenerate` (remark) — determinant formulas apply only under item 2, while item 4 remains defined more generally. **For:** preserves the degenerate case. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  Adopt $I-Df$, not $Df-I$.  Item 10 requires the
diagonal-class computation of item 11; do not cite geometric homotopy
invariance as a substitute for the homological trace equality.  Smooth
perturbation first yields isolated transverse fixed points, and additivity
then returns to degenerate isolated points.

**B page:** `fixed-point-index-and-the-lefschetz-theorem-examples`

1. `ex-rotations-of-the-two-sphere-and-their-lefschetz-number` — compute two fixed-point indices. **For:** tests the determinant sign. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-degree-d-map-on-a-sphere-has-lefschetz-number-one-plus-minus-d` — compute the trace formula. **For:** links degree and fixed points. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-a-torus-translation-has-zero-lefschetz-number-and-no-fixed-points` — verify sharpness of the nonzero condition. **For:** tests item 13. **Prov:** [S: literature-derived; P: literature-derived].
4. `ex-a-degenerate-isolated-fixed-point-with-nonzero-local-index` — compute by degree although $I-Df$ is singular. **For:** tests item 16. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-vanishing-lefschetz-number-allows-fixed-points` — give a map with canceling local indices. **For:** blocks the converse. **Prov:** [S: literature-derived; P: literature-derived].

### DT-15 — Smooth cobordism relations, groups, and rings

**A page:** `smooth-cobordism-relations-groups-and-rings`

**Requires:** DG manifolds with boundary/collars/orientations; DT-11 for
intersection-based invariants; AT fundamental classes only when characteristic
numbers first appear.

**Sources:** F Lectures 1--2, pp. 5--24; MS Ch. 17, pp. 199--204
(original pagination); W §§8.1--8.2, pp. 237--247; Ranicki Ch. 6,
electronic pp. 109--125.

1. `def-unoriented-smooth-cobordism-of-closed-manifolds` (definition) — $M_0$ and $M_1$ are cobordant when a compact smooth $W$ has boundary $M_0\sqcup M_1$, with collars. **For:** defines the unoriented relation, including empty manifolds. **Prov:** [S: literature-derived; P: not-applicable].
2. `def-oriented-smooth-cobordism` (definition) — in the oriented theory require $\partial W=(-M_0)\sqcup M_1$ under outward-normal-first orientation. **For:** fixes the sign consumed by all invariants. **Prov:** [S: literature-derived; P: not-applicable].
3. `lem-cylinders-give-reflexivity-of-cobordism` (lemma) — $M\times[0,1]$ has the required two boundary orientations. **For:** proves the first relation axiom. **Prov:** [S: literature-derived; P: literature-derived].
4. `lem-reversing-a-cobordism-gives-symmetry` (lemma) — interchange incoming/outgoing faces and reverse the oriented cobordism as required. **For:** proves symmetry. **Prov:** [S: literature-derived; P: literature-derived].
5. `lem-collar-gluing-and-corner-smoothing-give-transitivity` (lemma) — glue along the common boundary and smooth the seam. **For:** proves transitivity without hiding smoothness. **Prov:** [S: literature-derived; P: literature-derived].
6. `thm-smooth-cobordism-is-an-equivalence-relation` (theorem) — combine items 3--5 in fixed dimension and category. **For:** licenses class notation. **Prov:** [S: literature-derived; P: literature-derived].
7. `def-null-cobordant-closed-manifold` (definition) — $M$ is null-cobordant when it is the entire boundary of a compact manifold (with orientation if relevant). **For:** identifies the zero class geometrically. **Prov:** [S: literature-derived; P: not-applicable].
8. `def-unoriented-and-oriented-bordism-groups` (definition) — $\Omega_n^O$ and $\Omega_n^{SO}$ are cobordism classes under disjoint union. **For:** packages the relation algebraically without constructing spectra. **Prov:** [S: literature-derived; P: not-applicable].
9. `thm-disjoint-union-makes-bordism-classes-abelian-groups` (theorem) — the empty manifold is zero; orientation reversal is inverse in $SO$, while every unoriented class is self-inverse. **For:** proves the group laws. **Prov:** [S: literature-derived; P: literature-derived].
10. `prop-zero-dimensional-bordism-groups` (proposition) — $\Omega_0^O\cong\mathbb Z/2$ by parity and $\Omega_0^{SO}\cong\mathbb Z$ by signed point count. **For:** grounds the two theories and feeds Hopf degree. **Prov:** [S: literature-derived; P: literature-derived].
11. `lem-product-boundary-formula-for-oriented-manifolds` (lemma) — $\partial(W\times V)=(\partial W)\times V\sqcup(-1)^{\dim W}W\times\partial V$ with the repository convention. **For:** proves product well-definedness and signs. **Prov:** [S: literature-derived; P: literature-derived].
12. `thm-cartesian-product-makes-bordism-a-graded-ring` (theorem) — products descend to classes, with point unit and graded commutativity. **For:** supplies characteristic-number multiplicativity. **Prov:** [S: literature-derived; P: literature-derived].
13. `prop-boundaries-have-zero-stiefel-whitney-numbers` (proposition) — all tangent Stiefel--Whitney numbers of a closed boundary vanish, consuming AT class naturality and the boundary stable tangent identity. **For:** first obstruction to null-cobordism. **Prov:** [S: literature-derived; P: literature-derived].
14. `prop-oriented-boundaries-have-zero-pontryagin-numbers-and-signature` (proposition) — Pontryagin numbers and the $4k$ signature vanish on oriented boundaries. **For:** prepares DT-19/20. **Prov:** [S: literature-derived; P: literature-derived].
15. `rem-bordism-groups-here-are-geometric-not-generalized-homology-constructions` (remark) — Thom spectra and the generalized homology axioms remain AT-owned. **For:** enforces the seam. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  Transitivity includes collars and smoothing.  Product
orientation signs must be recomputed from outward-normal-first, not copied from
a source with inward-normal conventions.  Items 13--14 cite AT class
constructions but prove the geometric boundary application here.

**B page:** `smooth-cobordism-relations-groups-and-rings-examples`

1. `ex-a-circle-is-the-boundary-of-a-disk` — null-cobordism with the induced orientation. **For:** tests boundary signs. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-two-unoriented-points-bound-an-interval` — compute $\Omega_0^O$. **For:** checks self-inverse classes. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-signed-points-give-the-oriented-zero-bordism-invariant` — count positive minus negative points. **For:** checks $\Omega_0^{SO}$. **Prov:** [S: literature-derived; P: literature-derived].
4. `ex-the-pair-of-pants-is-a-cobordism-realizing-addition-of-circles` — visualize disjoint-union addition. **For:** tests gluing. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-real-projective-two-space-is-not-unoriented-null-cobordant` — use its nonzero Stiefel--Whitney number from AT. **For:** demonstrates item 13. **Prov:** [S: literature-derived; P: literature-derived].

### DT-16 — Thom spaces, normal data, and collapse maps

**A page:** `thom-spaces-normal-data-and-collapse-maps`

**Requires:** DG vector bundles, tubes, transversality and approximation;
`AT-n[thom-isomorphism]`, `AT-n[characteristic-classes]` and
`AT-n[classifying-spaces]` for cohomological statements.

**Sources:** MS Ch. 18 §§18.1--18.4, pp. 205--218; MM Ch. III
§§3.8--3.17, PDF pp. 24--29; F Lectures 2--3 and 10, pp. 15--28 and
86--91; W §8.1, pp. 239--242.

1. `def-disk-bundle-sphere-bundle-and-thom-space` (definition) — for a metric vector bundle $E\to B$, set $\operatorname{Th}(E)=D(E)/S(E)$ with $S(E)$ collapsed to a basepoint. **For:** fixes the pointed space used by collapse. **Prov:** [S: literature-derived; P: not-applicable].
2. `lem-thom-space-is-independent-of-the-bundle-metric-up-to-canonical-homeomorphism` (lemma) — radial rescaling identifies disk/sphere quotient models. **For:** removes an auxiliary choice. **Prov:** [S: literature-derived; P: literature-derived].
3. `prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product` (proposition) — $\operatorname{Th}(B\times\mathbb R^r)\cong B_+\wedge S^r$. **For:** gives the framed target and rank-zero case. **Prov:** [S: literature-derived; P: literature-derived].
4. `rem-thom-space-empty-and-rank-zero-conventions` (remark) — $\operatorname{Th}(0_B)=B_+$ and the empty-base Thom space is the one-point space. **For:** closes degeneracies used in zero-dimensional bordism. **Prov:** [S: literature-derived; P: not-applicable].
5. `def-stable-normal-bundle-of-a-compact-smooth-manifold` (definition) — from an embedding $M\hookrightarrow\mathbb R^N$, retain the stable class of $\nu$ with $TM\oplus\nu\cong\varepsilon^N$. **For:** isolates intrinsic normal data beyond DG embedding. **Prov:** [S: literature-derived; P: not-applicable].
6. `thm-stable-normal-bundle-is-independent-of-the-embedding` (theorem) — after adding trivial summands, normal bundles from two embeddings are isomorphic. **For:** makes characteristic and PT constructions intrinsic. **Prov:** [S: literature-derived; P: literature-derived].
7. `def-pontryagin-thom-collapse-of-an-embedded-submanifold` (definition) — collapse the complement of a tubular neighbourhood to the Thom basepoint and identify the tube with $D(\nu)$. **For:** creates a map from geometry. **Prov:** [S: literature-derived; P: not-applicable].
8. `lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint` (lemma) — the quotient/tubular construction is well defined; a cutoff model gives a smooth representative near regular values. **For:** closes a commonly skipped analytic point. **Prov:** [S: literature-derived; P: literature-derived].
9. `lem-collapse-map-is-independent-of-tubular-neighbourhood-and-radius-up-to-based-homotopy` (lemma) — isotope tube data and interpolate radial cutoffs. **For:** proves choice independence. **Prov:** [S: literature-derived; P: literature-derived].
10. `prop-transverse-preimage-carries-a-pulled-back-normal-structure` (proposition) — if $f:X\to\operatorname{Th}(E)$ is transverse to the zero section, its inverse image is a submanifold with normal bundle identified with the pullback of $E$. **For:** supplies the reverse geometric construction. **Prov:** [S: literature-derived; P: literature-derived].
11. `lem-based-homotopies-transverse-to-the-zero-section-give-normal-cobordisms` (lemma) — apply relative transversality to a homotopy and read its boundary. **For:** proves homotopy invariance of inverse images. **Prov:** [S: literature-derived; P: literature-derived].
12. `def-thom-class-and-thom-isomorphism-interface` (definition) — consume AT's Thom class $u_E$ and isomorphism; no construction is repeated. **For:** allows cohomological characteristic applications. **Prov:** [S: literature-derived; P: not-applicable].
13. `prop-collapse-pullback-of-the-thom-class-is-the-poincare-dual` (proposition) — the collapse map pulls $u_\nu$ back to the Poincare dual of the embedded submanifold. **For:** reconciles geometric and AT versions. **Prov:** [S: literature-derived; P: literature-derived].
14. `lem-stabilizing-a-normal-bundle-suspends-its-thom-space` (lemma) — $\operatorname{Th}(E\oplus\varepsilon^1)\cong\Sigma\operatorname{Th}(E)$. **For:** prepares stable PT independence. **Prov:** [S: literature-derived; P: literature-derived].
15. `rem-thom-spectrum-construction-is-not-minted-in-dt` (remark) — DT uses finite Thom spaces and stabilization interfaces; AT owns spectra. **For:** fixes the boundary. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  Separate topological quotient continuity, smooth
transverse approximation, and tubular-choice independence.  Stable normal
independence needs a common ambient embedding/stabilisation argument.  The
Thom class and isomorphism are exact AT dependencies; only collapse/preimage
applications are proved here.

**B page:** `thom-spaces-normal-data-and-collapse-maps-examples`

1. `ex-thom-space-of-a-trivial-line-bundle` — identify it with $\Sigma B_+$. **For:** tests item 3. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-thom-space-of-the-mobius-line-bundle` — obtain the projective-plane quotient model. **For:** shows twisting is retained. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-collapse-map-of-an-equatorial-sphere` — write the normal-framed collapse explicitly. **For:** prepares framed PT. **Prov:** [S: literature-derived; P: literature-derived].
4. `ex-zero-section-pulls-back-the-thom-class-to-the-euler-class` — verify the AT interface. **For:** connects DT-12. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-different-unstabilized-normal-bundles-can-have-nonisomorphic-thom-data` — illustrate why the stable class, rather than one embedding's actual normal bundle, is intrinsic. **For:** tests item 6. **Prov:** [S: literature-derived; P: literature-derived].

### DT-17 — Pontryagin--Thom and framed cobordism

**A page:** `pontryagin-thom-and-framed-cobordism`

**Requires:** DT-15--DT-16; DG tubes/transversality; `AT-n[homotopy-groups-and-stable-homotopy]`
for the homotopy-group notation only.

**Sources:** F Lectures 2--3, pp. 15--28; M Ch. 7, pp. 42--49;
MM Ch. III §§3.1--3.17, PDF pp. 22--29; Ranicki §§6.1--6.2,
electronic pp. 109--116.

1. `def-framing-of-a-normal-bundle` (definition) — a framing is an ordered bundle isomorphism $\nu\cong M\times\mathbb R^k$. **For:** distinguishes actual from stable framing. **Prov:** [S: literature-derived; P: not-applicable].
2. `def-framed-cobordism-of-embedded-submanifolds` (definition) — a compact neat cobordism carries a normal framing restricting to the endpoint framings. **For:** fixes the equivalence relation and boundary signs. **Prov:** [S: literature-derived; P: not-applicable].
3. `lem-framed-cobordism-is-an-equivalence-relation` (lemma) — cylinders, reversal and framed collar gluing preserve normal trivialisations. **For:** licenses framed classes. **Prov:** [S: literature-derived; P: literature-derived].
4. `prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product` (proposition) — $\operatorname{Th}(\nu)\cong M_+\wedge S^k$ and collapse followed by projection gives a map to $S^k$. **For:** specializes DT-16. **Prov:** [S: literature-derived; P: literature-derived].
5. `def-pontryagin-thom-map-of-a-framed-submanifold` (definition) — collapse a framed tubular neighbourhood and use the framing coordinates to map the ambient sphere to $S^k$. **For:** defines the forward correspondence. **Prov:** [S: literature-derived; P: not-applicable].
6. `lem-changing-framed-tube-data-changes-the-pontryagin-thom-map-by-based-homotopy` (lemma) — use framed isotopy and cutoff interpolation. **For:** proves forward well-definedness. **Prov:** [S: literature-derived; P: literature-derived].
7. `lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps` (lemma) — collapse the framed cobordism in a sphere times an interval. **For:** makes the map descend to classes. **Prov:** [S: literature-derived; P: literature-derived].
8. `def-framed-regular-preimage-of-a-map-to-a-sphere` (definition) — for a regular value, pull back an oriented basis of the target tangent space to frame the inverse-image normal bundle. **For:** defines the reverse correspondence. **Prov:** [S: literature-derived; P: not-applicable].
9. `lem-regular-value-choice-does-not-change-the-framed-cobordism-class` (lemma) — choose a transverse path of values or perturb a homotopy. **For:** proves reverse well-definedness. **Prov:** [S: literature-derived; P: literature-derived].
10. `lem-homotopic-sphere-maps-have-framed-cobordant-regular-preimages` (lemma) — relative transversality of the homotopy supplies a framed cobordism. **For:** descends the reverse construction to homotopy classes. **Prov:** [S: literature-derived; P: literature-derived].
11. `lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold` (lemma) — choose the centre regular value in framing coordinates. **For:** is one inverse check. **Prov:** [S: literature-derived; P: literature-derived].
12. `lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map` (lemma) — use local normal form near the regular preimage and collapse the complement. **For:** is the other inverse check. **Prov:** [S: literature-derived; P: literature-derived].
13. `thm-pontryagin-thom-correspondence-in-fixed-codimension` (theorem) — framed cobordism classes of closed $(n-k)$-submanifolds of $S^n$ biject with $\pi_n(S^k)$. **For:** identifies framed geometry and homotopy. **Prov:** [S: literature-derived; P: literature-derived].
14. `thm-stable-pontryagin-thom-identifies-framed-bordism-with-stable-stems` (theorem) — stabilization gives $\Omega_d^{fr}\cong\pi_d^S$. **For:** states the commissioned framed-bordism conclusion while AT owns stable-stem construction. **Prov:** [S: literature-derived; P: literature-derived].
15. `rem-normal-framing-stable-normal-framing-and-tangential-framing-are-distinct-data` (remark) — identify them only after the relevant ambient/trivial summands are supplied. **For:** prevents a common silent equivalence. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  The theorem is decomposed into two constructions, four
well-definedness statements, and two inverse checks.  Regular-value framing
depends on an oriented basis convention for the target.  Item 14 is a stable
AT interface, not a license to reconstruct stable homotopy groups.

**B page:** `pontryagin-thom-and-framed-cobordism-examples`

1. `ex-framed-zero-manifolds-and-signed-points` — identify positive/negative framings in codimension $n$. **For:** prepares Hopf degree. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-pontryagin-thom-map-of-the-standard-framed-equator` — obtain the suspension generator. **For:** tests item 13. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-framed-links-represent-elements-of-pi-three-of-s-two` — compute the basic framed unknot representative without developing Hopf invariant theory. **For:** shows positive-dimensional preimages. **Prov:** [S: literature-derived; P: literature-derived].
4. `cex-changing-a-framing-can-change-the-pontryagin-thom-class` — twist the normal framing of a circle. **For:** shows the framing is load-bearing. **Prov:** [S: literature-derived; P: literature-derived].
5. `ex-stabilizing-a-framed-submanifold-suspends-its-collapse-map` — verify compatibility with item 14. **For:** finite stable check. **Prov:** [S: literature-derived; P: literature-derived].

### DT-18 — The Hopf degree theorem

**A page:** `the-hopf-degree-theorem`

**Requires:** DT-15--DT-17; DG degree; `AT-n[homotopy-groups-and-stable-homotopy]`
only for standard homotopy notation.

**Sources:** F Lecture 2, pp. 20--24; M Ch. 8, pp. 50--51; GP Ch. 3
§6, pp. 141--147.

1. `def-framing-sign-of-a-zero-dimensional-regular-preimage` (definition) — compare the inverse-image normal framing with the orientation of the domain point. **For:** turns PT preimages into signed degree data. **Prov:** [S: literature-derived; P: not-applicable].
2. `lem-oppositely-framed-points-are-framed-null-cobordant-in-pairs` (lemma) — an interval with an interpolating normal framing cancels one positive and one negative point. **For:** proves reduction to signed count. **Prov:** [S: literature-derived; P: literature-derived].
3. `lem-equal-framing-sign-points-do-not-cancel-in-oriented-zero-bordism` (lemma) — signed point count is invariant under compact oriented one-cobordisms. **For:** proves completeness of the integer. **Prov:** [S: literature-derived; P: literature-derived].
4. `thm-oriented-zero-dimensional-framed-bordism-is-the-integers` (theorem) — signed cardinality gives the isomorphism. **For:** is the geometric core of degree classification. **Prov:** [S: literature-derived; P: literature-derived].
5. `thm-unoriented-zero-dimensional-bordism-is-mod-two` (theorem) — parity classifies when no orientation sign exists. **For:** supplies the nonorientable variant. **Prov:** [S: literature-derived; P: literature-derived].
6. `lem-pontryagin-thom-signed-preimage-count-equals-the-dg-degree` (lemma) — for a regular value the PT framing signs reproduce the existing local-degree formula. **For:** reconciles, rather than redefines, degree. **Prov:** [S: literature-derived; P: literature-derived].
7. `thm-hopf-degree-classification-for-oriented-domains` (theorem) — if $M^n$ is closed, connected and oriented, maps $M\to S^n$ are smoothly homotopic iff they have equal integer degree. **For:** is the commissioned Hopf theorem. **Prov:** [S: literature-derived; P: literature-derived].
8. `thm-hopf-mod-two-degree-classification-for-nonorientable-domains` (theorem) — for closed connected nonorientable $M^n$, homotopy classes $[M,S^n]$ are classified by mod-two degree. **For:** states where mod two suffices. **Prov:** [S: literature-derived; P: literature-derived].
9. `lem-every-integer-degree-is-realized-by-a-map-to-the-sphere` (lemma) — collapse disjoint oriented coordinate disks with prescribed local signs. **For:** proves surjectivity in item 7. **Prov:** [S: literature-derived; P: literature-derived].
10. `lem-bordism-of-regular-preimages-produces-a-homotopy-of-sphere-maps` (lemma) — use the inverse PT construction. **For:** proves injectivity in items 7--8. **Prov:** [S: literature-derived; P: literature-derived].
11. `cor-maps-between-oriented-spheres-are-homotopic-iff-their-degrees-agree` (corollary) — specialize $M=S^n$. **For:** gives the familiar formulation. **Prov:** [S: literature-derived; P: literature-derived].
12. `cor-an-oriented-sphere-self-map-is-a-homotopy-equivalence-iff-its-degree-is-plus-or-minus-one` (corollary) — combine Hopf classification with degree multiplication. **For:** supplies a basic recognition result. **Prov:** [S: literature-derived; P: literature-derived].
13. `rem-connectedness-is-needed-for-a-single-degree-invariant` (remark) — disconnected domains have one signed/mod-two contribution per top-dimensional component, subject to orientations. **For:** guards the theorem hypothesis. **Prov:** [S: literature-derived; P: not-applicable].
14. `rem-closedness-is-needed-for-hopf-degree-classification` (remark) — boundary/noncompact cases require relative or compact-support data. **For:** blocks a false extension. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  Do not substitute the already-owned homotopy
invariance of degree for the missing converse.  The converse is precisely the
zero-dimensional framed-cobordism classification plus inverse PT.  Orientation,
connectedness and closedness are all load-bearing.

**B page:** `the-hopf-degree-theorem-examples`

1. `ex-power-maps-on-the-circle-have-their-exponent-as-degree` — classify their homotopy classes. **For:** checks item 11. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-reflection-of-a-sphere-has-degree-minus-one` — compute the orientation sign. **For:** tests the equivalence corollary. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-collapse-of-k-oriented-disks-realizes-degree-k` — implement item 9. **For:** gives explicit representatives. **Prov:** [S: literature-derived; P: literature-derived].
4. `ex-maps-from-real-projective-n-space-to-s-n-use-mod-two-degree-when-n-is-even` — demonstrate the nonorientable classification. **For:** tests item 8. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-equal-total-degree-does-not-classify-maps-from-a-disconnected-domain-componentwise` — swap degree among components. **For:** tests item 13. **Prov:** [S: literature-derived; P: literature-derived].

### DT-19 — Characteristic numbers and cobordism obstructions

**A page:** `characteristic-numbers-and-cobordism-obstructions`

**Requires:** DT-12, DT-15--DT-17; `AT-n[cohomology-products]`,
`AT-n[poincare-duality]`, `AT-n[characteristic-classes]`,
`AT-n[thom-isomorphism]`, and `AT-n[homotopy-groups-and-stable-homotopy]`.

**Sources:** MS Chs. 16--18, pp. 183--218 original pagination; F Lecture 1,
pp. 12--13 and Lectures 7--10, pp. 55--91; TW §§9--18, pp. 15--34.

1. `def-stiefel-whitney-number-of-a-closed-manifold` (definition) — evaluate a degree-$n$ monomial in AT tangent Stiefel--Whitney classes on the mod-two fundamental class. **For:** names unoriented cobordism invariants. **Prov:** [S: literature-derived; P: not-applicable].
2. `def-pontryagin-number-of-a-closed-oriented-manifold` (definition) — evaluate a degree-$n$ Pontryagin monomial on the integral fundamental class, hence only in dimensions divisible by four; the value is integral although completeness below is only rational. **For:** names the oriented characteristic numbers without conflating their values with rational bordism. **Prov:** [S: literature-derived; P: not-applicable].
3. `lem-characteristic-number-degree-constraint` (lemma) — only monomials of total cohomological degree $n$ can pair with $[M]$. **For:** makes partitions and vanishing transparent. **Prov:** [S: literature-derived; P: literature-derived].
4. `lem-stiefel-whitney-numbers-ignore-orientation-and-pontryagin-numbers-change-with-it` (lemma) — mod-two classes are orientation-free, while reversing orientation negates integral evaluations. **For:** fixes category dependence. **Prov:** [S: literature-derived; P: literature-derived].
5. `lem-stable-tangent-bundle-of-an-oriented-boundary-is-the-restriction-of-tw` (lemma) — $T(\partial W)\oplus\varepsilon^1\cong TW|_{\partial W}$. **For:** is the geometric boundary input. **Prov:** [S: literature-derived; P: literature-derived].
6. `thm-characteristic-numbers-are-cobordism-invariants` (theorem) — Stiefel--Whitney numbers are constant under unoriented cobordism; Pontryagin numbers under oriented cobordism. **For:** proves their obstruction role. **Prov:** [S: literature-derived; P: literature-derived].
7. `cor-all-relevant-characteristic-numbers-vanish-on-null-cobordant-manifolds` (corollary) — apply item 6 to the empty manifold. **For:** is the practical boundary test. **Prov:** [S: literature-derived; P: literature-derived].
8. `lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas` (lemma) — expand $T(M\times N)$ and evaluate external products. **For:** computes ring generators and multiplicativity. **Prov:** [S: literature-derived; P: literature-derived].
9. `thm-thom-stiefel-whitney-number-detection-of-unoriented-bordism` (theorem) — two closed smooth manifolds are unoriented cobordant iff all Stiefel--Whitney numbers agree. **For:** makes the invariants complete in the unoriented category. **Prov:** [S: literature-derived; P: literature-derived].
10. `lem-pontryagin-thom-converts-bordism-detection-to-a-thom-space-homotopy-problem` (lemma) — normal collapse and AT Thom classes turn characteristic evaluations into cohomological functionals on stable Thom data. **For:** splits the proof route for item 9. **Prov:** [S: literature-derived; P: literature-derived].
11. `thm-rational-oriented-bordism-is-detected-by-pontryagin-numbers` (theorem) — after tensoring with $\mathbb Q$, equality of all Pontryagin numbers is equivalent to equality of oriented bordism classes. **For:** supplies the signature-theorem reduction. **Prov:** [S: literature-derived; P: literature-derived].
12. `rem-pontryagin-numbers-do-not-detect-integral-oriented-bordism-torsion` (remark) — integral oriented bordism also has torsion information, detected in part by Stiefel--Whitney numbers. **For:** prevents a false integral theorem. **Prov:** [S: literature-derived; P: not-applicable].
13. `prop-products-of-complex-projective-spaces-span-rational-oriented-bordism` (proposition) — one product for each partition gives a triangular nonzero Pontryagin-number matrix. **For:** provides the source-backed test family for DT-20. **Prov:** [S: literature-derived; P: literature-derived].
14. `lem-partition-triangularity-of-projective-space-characteristic-numbers` (lemma) — order partitions by refinement and compute the leading nonzero characteristic number. **For:** splits item 13 rather than citing a rank count. **Prov:** [S: literature-derived; P: literature-derived].
15. `rem-characteristic-class-constructions-and-normalizations-are-at-owned` (remark) — authoring must substitute AT's exact $w_i,p_i,e,c_i$ ids and Pontryagin sign. **For:** enforces the load-bearing seam. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  Boundary invariance uses stable tangent restriction,
naturality, and the fundamental-class boundary relation.  The complete Thom
detection theorem consumes substantial AT Thom/Steenrod machinery and must be
dependency-resolved rather than reproved ad hoc.  Item 11 is rational only.

**B page:** `characteristic-numbers-and-cobordism-obstructions-examples`

1. `ex-stiefel-whitney-number-of-real-projective-space` — compute a nonzero top monomial from the AT formula. **For:** obstructs null-cobordism. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-pontryagin-numbers-of-complex-projective-two-space` — evaluate $p_1$ on $[\mathbb CP^2]$. **For:** supplies the four-dimensional generator check. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-characteristic-numbers-of-a-product` — compute a projective-space product using item 8. **For:** checks multiplicativity. **Prov:** [S: literature-derived; P: literature-derived].
4. `ex-orientation-reversal-negates-pontryagin-numbers` — verify on $\mathbb CP^2$. **For:** checks item 4. **Prov:** [S: literature-derived; P: literature-derived].

### DT-20 — The Hirzebruch signature theorem

**A page:** `the-hirzebruch-signature-theorem`

**Requires:** DT-12, DT-15, DT-19; `AT-n[cohomology-products]`,
`AT-n[poincare-duality]` and `AT-n[characteristic-classes]`.

**Sources:** MS Ch. 19, pp. 219--230 original pagination; F Lectures 11--12,
pp. 92--105; TW §19, pp. 34--36; JL, complete lecture, PDF pp. 1--3.

1. `def-middle-dimensional-intersection-form` (definition) — for a closed oriented $4k$-manifold, $Q_M(x,y)=\langle x\smile y,[M]\rangle$ on $H^{2k}(M;\mathbb R)$. **For:** defines the geometric quadratic datum through AT. **Prov:** [S: literature-derived; P: not-applicable].
2. `lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate` (lemma) — graded commutativity is positive in even middle degree and Poincare duality gives nondegeneracy. **For:** makes signature defined. **Prov:** [S: literature-derived; P: literature-derived].
3. `def-signature-of-a-closed-oriented-four-k-manifold` (definition) — $\sigma(M)$ is the number of positive minus negative eigenvalues of $Q_M$. **For:** fixes the invariant only in dimension $4k$. **Prov:** [S: literature-derived; P: not-applicable].
4. `lem-signature-is-independent-of-basis-and-field-extension-from-rationals-to-reals` (lemma) — Sylvester inertia and scalar extension preserve it. **For:** closes well-definedness. **Prov:** [S: literature-derived; P: literature-derived].
5. `thm-signature-is-an-oriented-cobordism-invariant` (theorem) — the boundary's middle form has a half-dimensional annihilator, hence zero signature. **For:** makes signature a bordism genus. **Prov:** [S: literature-derived; P: literature-derived].
6. `lem-signature-is-additive-under-disjoint-union-and-orientation-reversal` (lemma) — orthogonal sum adds and $[-M]=-[M]$ negates. **For:** supplies group-homomorphism laws. **Prov:** [S: literature-derived; P: literature-derived].
7. `thm-signature-is-multiplicative-under-cartesian-products` (theorem) — Kunneth and the graded tensor intersection form give $\sigma(M\times N)=\sigma(M)\sigma(N)$. **For:** makes signature a genus. **Prov:** [S: literature-derived; P: literature-derived].
8. `def-hirzebruch-l-polynomials` (definition) — define the multiplicative sequence with $L_1=p_1/3$, $L_2=(7p_2-p_1^2)/45$, using AT's Pontryagin convention. **For:** fixes the class in the formula. **Prov:** [S: literature-derived; P: not-applicable].
9. `def-total-l-class-of-a-smooth-manifold` (definition) — $L(TM)$ is the AT Pontryagin-class multiplicative sequence evaluated on the tangent bundle. **For:** states the characteristic side without constructing $p_i$. **Prov:** [S: literature-derived; P: not-applicable].
10. `lem-l-genus-is-an-oriented-rational-bordism-ring-homomorphism` (lemma) — Whitney sum and product evaluation give additivity/multiplicativity; boundaries vanish by DT-19. **For:** sets up generator comparison. **Prov:** [S: literature-derived; P: literature-derived].
11. `lem-signature-and-l-genus-agree-on-complex-projective-spaces` (lemma) — compute the intersection form and AT Pontryagin classes on $\mathbb CP^{2k}$. **For:** supplies generator values. **Prov:** [S: literature-derived; P: literature-derived].
12. `lem-signature-and-l-genus-agree-on-products-of-complex-projective-spaces` (lemma) — use multiplicativity. **For:** covers the DT-19 rational spanning family. **Prov:** [S: literature-derived; P: literature-derived].
13. `thm-hirzebruch-signature-theorem` (theorem) — $\sigma(M)=\langle L_k(TM),[M]\rangle$ for every closed oriented $4k$-manifold. **For:** is the commissioned characteristic-class application. **Prov:** [S: literature-derived; P: literature-derived].
14. `cor-four-dimensional-signature-formula` (corollary) — $\sigma(M)=\frac13\langle p_1(TM),[M]\rangle$. **For:** is the formula used in Milnor-sphere obstructions. **Prov:** [S: literature-derived; P: literature-derived].
15. `cor-eight-dimensional-signature-formula` (corollary) — $\sigma(M)=\frac1{45}\langle7p_2-p_1^2,[M]\rangle$. **For:** records the first nontrivial multiplicative polynomial. **Prov:** [S: literature-derived; P: literature-derived].
16. `cor-signature-theorem-imposes-pontryagin-number-congruences` (corollary) — integrality of signature constrains characteristic numbers. **For:** supplies exotic-sphere and obstruction arithmetic. **Prov:** [S: literature-derived; P: literature-derived].
17. `rem-signature-is-not-defined-geometrically-by-zero-in-other-dimensions` (remark) — extending a genus by zero is bookkeeping, not the definition in item 3. **For:** fixes a common convention ambiguity. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  Prove bordism invariance before using rational bordism.
The signature theorem then compares two rational bordism ring homomorphisms on
the DT-19 spanning family.  The $L$-polynomial signs cannot be authored until
the exact AT Pontryagin normalization is substituted.

**B page:** `the-hirzebruch-signature-theorem-examples`

1. `ex-signature-and-p-one-of-complex-projective-two-space` — verify $1=\langle p_1,[M]\rangle/3$. **For:** checks item 14. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-orientation-reversed-complex-projective-plane-has-signature-minus-one` — test item 6. **For:** fixes orientation signs. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-signature-of-s-two-times-s-two-is-zero` — compute the hyperbolic form. **For:** tests nontrivial middle cohomology with zero signature. **Prov:** [S: literature-derived; P: literature-derived].
4. `ex-signature-is-multiplicative-on-products-of-projective-spaces` — finite generator check. **For:** verifies item 7. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-euler-characteristic-does-not-determine-signature` — compare closed oriented four-manifolds with the same Euler characteristic and different forms. **For:** distinguishes invariants. **Prov:** [S: literature-derived; P: literature-derived].

### DT-21 — Smooth surgery, traces, and handle trading

**A page:** `smooth-surgery-traces-and-handle-trading`

**Requires:** DT-5--DT-7, DT-11--DT-12, DT-15--DT-16; DG tubes and
orientations; AT relative homology/homotopy interfaces.

**Sources:** Lück Ch. 3 §3.4, pp. 69--78 and Ch. 4 §4.1, pp. 80--84;
Ranicki Ch. 10 §§10.1--10.4, electronic pp. 194--211; W §§7.1--7.2,
pp. 195--201; MH §3, pp. 20--36.

1. `def-framed-embedded-surgery-sphere` (definition) — surgery data on an $m$-manifold are an embedding $S^p\times D^q\hookrightarrow M^m$ with $p+q=m$, i.e. an embedded sphere with an actual normal framing. **For:** states the load-bearing normal data. **Prov:** [S: literature-derived; P: not-applicable].
2. `def-p-surgery-on-a-smooth-m-manifold` (definition) — remove $S^p\times\operatorname{int}D^q$ and glue $D^{p+1}\times S^{q-1}$ along $S^p\times S^{q-1}$. **For:** fixes the sphere-dimension convention. **Prov:** [S: literature-derived; P: not-applicable].
3. `lem-surgery-gluing-has-a-canonical-smooth-structure-up-to-diffeomorphism` (lemma) — use collars, the framing and corner smoothing. **For:** makes the construction well defined. **Prov:** [S: literature-derived; P: literature-derived].
4. `def-surgery-trace-cobordism` (definition) — attach a $(p+1)$-handle to $M\times[0,1]$ along the framed sphere. **For:** records the one-index shift explicitly. **Prov:** [S: literature-derived; P: not-applicable].
5. `thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold` (theorem) — handle boundary trading replaces $S^p\times D^q$ by $D^{p+1}\times S^{q-1}$. **For:** identifies surgery and handles. **Prov:** [S: literature-derived; P: literature-derived].
6. `def-dual-surgery-sphere` (definition) — the belt sphere $S^{q-1}$ in the new manifold inherits its dual framing. **For:** names the inverse operation. **Prov:** [S: literature-derived; P: not-applicable].
7. `thm-surgery-is-reversed-by-dual-surgery` (theorem) — surgery on the dual sphere recovers $M$ up to diffeomorphism. **For:** proves construction symmetry. **Prov:** [S: literature-derived; P: literature-derived].
8. `lem-p-surgery-kills-the-represented-pi-p-class-when-p-is-below-the-middle` (lemma) — the core disk fills the surgery sphere in the trace; use relative homotopy and general position. **For:** states the basic purpose of surgery. **Prov:** [S: literature-derived; P: literature-derived].
9. `prop-homology-effect-of-surgery-away-from-the-middle-dimensions` (proposition) — only degrees $p,p+1,q-1,q$ can change, with the exact case determined by the sphere's class. **For:** prevents the slogan “kills homology” from overclaiming. **Prov:** [S: literature-derived; P: literature-derived].
10. `lem-framing-obstruction-lives-in-the-normal-bundle-of-the-surgery-sphere` (lemma) — a homotopy class can be killed smoothly only when represented by an embedded sphere with trivialised normal bundle. **For:** exposes the normal-data obstruction. **Prov:** [S: literature-derived; P: literature-derived].
11. `def-degree-one-normal-map-for-the-surgery-program` (definition) — record a degree-one map plus a stable bundle isomorphism between normal data, citing AT constructions. **For:** states the input to surgery classification at commissioned level. **Prov:** [S: literature-derived; P: not-applicable].
12. `prop-surgery-on-a-normal-map-preserves-its-normal-bordism-class` (proposition) — extend the map and stable normal data across the trace handle when the framed kernel element is chosen. **For:** explains why surgery improves a map without changing its normal problem. **Prov:** [S: literature-derived; P: literature-derived].
13. `rem-middle-dimensional-surgery-has-an-intersection-form-obstruction` (remark) — below-middle connectivity improvement eventually reaches a quadratic/bilinear kernel whose surgery obstruction is not automatic. **For:** marks the exact stopping point. **Prov:** [S: literature-derived; P: not-applicable].
14. `rem-surgery-exact-sequence-and-l-groups-are-a-dedicated-sequel` (remark) — source the existence of the obstruction sequence, but supply no proof or dependency here. **For:** honours the statement/construction boundary. **Prov:** [S: literature-derived; P: not-supplied].
15. `rem-smooth-four-dimensional-surgery-is-not-covered-by-the-high-dimensional-program` (remark) — the required Whitney moves and disk embeddings fail in the smooth category. **For:** states the crucial dimension boundary. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  Surgery is defined from actual framed embeddings, not
from abstract homotopy classes.  The trace is an index-$(p+1)$ handle.  Items
8--12 state exactly what is killed and what normal data must extend.  The
middle-dimensional obstruction and full exact sequence are explicitly
non-load-bearing boundaries.

**B page:** `smooth-surgery-traces-and-handle-trading-examples`

1. `ex-zero-surgery-on-the-circle` — replace two points times intervals and identify the result. **For:** checks $p=0$. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-surgery-on-s-p-times-s-q-produces-a-sphere-in-the-standard-framing` — compute the two pieces. **For:** tests duality. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-one-surgery-on-a-three-manifold-as-framed-knot-surgery` — identify the slope dependence without entering knot classification. **For:** shows framing matters. **Prov:** [S: literature-derived; P: literature-derived].
4. `cex-an-embedded-sphere-with-nontrivial-normal-bundle-is-not-valid-framed-surgery-data` — exhibit the obstruction. **For:** tests item 10. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-middle-dimensional-surgery-can-change-an-intersection-form` — compute a simple handle-pair case. **For:** motivates item 13. **Prov:** [S: literature-derived; P: literature-derived].

### DT-22 — The Whitney trick and surgery below the middle dimension

**A page:** `the-whitney-trick-and-surgery-below-the-middle-dimension`

**Requires:** DT-7, DT-11, DT-21; DG transversality/tubes; AT fundamental
group and relative homotopy interfaces.

**Sources:** Ranicki Ch. 7 §§7.2--7.3, electronic pp. 131--141 and
Ch. 10 §10.4, pp. 204--211; Juhasz Ch. 2 §2.2, pp. 38--42; MH §§6--7,
pp. 67--99; Lück Ch. 1 §1.3, pp. 12--17.

1. `def-whitney-circle-for-a-pair-of-intersection-points` (definition) — join the two points by arcs in the two intersecting submanifolds. **For:** names the boundary to be filled. **Prov:** [S: literature-derived; P: not-applicable].
2. `lem-opposite-local-signs-give-the-compatible-whitney-circle-framing` (lemma) — the two normal sheets fit with opposite oriented intersections. **For:** supplies the algebraic cancellation condition. **Prov:** [S: literature-derived; P: literature-derived].
3. `def-whitney-disk-and-clean-framed-whitney-disk` (definition) — a Whitney disk bounds the circle; clean means embedded with interior disjoint from the sheets, and framed means the boundary normal framing extends. **For:** lists every geometric hypothesis. **Prov:** [S: literature-derived; P: not-applicable].
4. `lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle` (lemma) — path choices label intersections in $\pi_1$ or a group ring. **For:** explains why signed cancellation alone is insufficient. **Prov:** [S: literature-derived; P: literature-derived].
5. `lem-general-position-makes-a-whitney-disk-embedded-and-interior-disjoint-in-the-stable-range` (lemma) — under the stated dimension inequalities, perturb a nullhomotopy to a clean disk. **For:** isolates the dimension use. **Prov:** [S: literature-derived; P: literature-derived].
6. `lem-whitney-disk-framing-obstruction-can-be-corrected-under-the-standard-high-dimensional-hypotheses` (lemma) — boundary twists or accessory constructions correct the normal framing without creating forbidden intersections. **For:** separates framing from embeddedness. **Prov:** [S: literature-derived; P: literature-derived].
7. `def-local-whitney-move` (definition) — isotope one sheet across a clean framed Whitney disk. **For:** states the geometric operation. **Prov:** [S: literature-derived; P: not-applicable].
8. `thm-whitney-move-removes-a-cancelling-pair-of-intersections` (theorem) — the local move deletes the two points and creates no new relevant intersections. **For:** turns algebraic into geometric cancellation. **Prov:** [S: literature-derived; P: literature-derived].
9. `thm-high-dimensional-whitney-trick` (theorem) — with opposite signs, appropriate fundamental-group condition, clean framed disk and dimension hypotheses, a pair can be removed by isotopy. **For:** is the precise global theorem. **Prov:** [S: literature-derived; P: literature-derived].
10. `cor-mod-two-evenness-does-not-by-itself-supply-a-whitney-move` (corollary) — parity gives pairs but not signs, nullhomotopy or framing. **For:** records the unoriented limitation. **Prov:** [S: literature-derived; P: literature-derived].
11. `thm-vanishing-algebraic-intersection-can-be-realized-by-geometric-disjunction-in-the-simply-connected-stable-range` (theorem) — pair opposite points and apply Whitney moves. **For:** feeds handle cancellation and embeddings. **Prov:** [S: literature-derived; P: literature-derived].
12. `prop-surgery-below-the-middle-dimension-improves-connectivity` (proposition) — for $2p+1<m$, represent kernel classes by disjoint embedded framed $p$-spheres and perform surgery to kill them. **For:** states the inductive surgery engine. **Prov:** [S: literature-derived; P: literature-derived].
13. `lem-relative-hurewicz-and-general-position-produce-surgery-spheres` (lemma) — after lower connectivity is established, choose embedded representatives with disjoint images in the allowed range. **For:** splits item 12. **Prov:** [S: literature-derived; P: literature-derived].
14. `lem-stable-normal-data-supplies-framings-below-the-middle-dimension` (lemma) — the normal-map bundle isomorphism trivialises normal bundles of chosen kernel spheres. **For:** closes the other half of item 12. **Prov:** [S: literature-derived; P: literature-derived].
15. `rem-the-smooth-whitney-trick-fails-in-dimension-four` (remark) — immersed Whitney disks cannot generally be replaced by clean smooth embedded disks. **For:** forbids the most dangerous overstatement. **Prov:** [S: literature-derived; P: not-applicable].
16. `rem-nonsimply-connected-whitney-tricks-carry-group-ring-and-whitney-disk-obstructions` (remark) — group labels must cancel and framings must extend. **For:** records the exact extra structure. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  Opposite signs, nullhomotopic Whitney circle, clean
embedded disk, extended framing and adequate dimension are five distinct
conditions.  The below-middle surgery theorem decomposes representative
existence and framing existence.  No statement covers smooth dimension four.

**B page:** `the-whitney-trick-and-surgery-below-the-middle-dimension-examples`

1. `ex-a-local-whitney-move-in-euclidean-space` — trace the two sheets before and after the move. **For:** verifies item 8. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-oppositely-signed-intersections-of-two-surfaces-in-a-simply-connected-six-manifold` — construct a clean disk by general position. **For:** tests the dimension range. **Prov:** [S: literature-derived; P: literature-derived].
3. `cex-same-sign-intersection-points-cannot-be-whitney-cancelled-orientedly` — algebraic intersection stays nonzero. **For:** tests signs. **Prov:** [S: literature-derived; P: literature-derived].
4. `cex-a-nontrivial-whitney-circle-in-the-fundamental-group-blocks-cancellation` — compute its label. **For:** tests item 4. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-an-immersed-whitney-disk-in-a-four-manifold-does-not-give-the-smooth-trick` — show self/interior intersections cannot simply be ignored. **For:** tests item 15. **Prov:** [S: literature-derived; P: literature-derived].

### DT-23 — The smooth h-cobordism theorem

**A page:** `the-smooth-h-cobordism-theorem`

**Requires:** DT-6--DT-8, DT-11, DT-21--DT-22; AT relative homology,
Poincare--Lefschetz duality and fundamental-group interfaces.

**Sources:** MH §§1--9, pp. 1--113; Lück Ch. 1, pp. 1--22;
W §§5.5--5.6, pp. 149--158; Ranicki Ch. 8 §8.2, electronic pp. 154--162.

1. `def-h-cobordism` (definition) — a compact cobordism $(W;M_0,M_1)$ is an h-cobordism when both inclusions $M_i\hookrightarrow W$ are homotopy equivalences. **For:** states the hypothesis symmetrically. **Prov:** [S: literature-derived; P: not-applicable].
2. `lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends` (lemma) — $H_*(W,M_i)=0$, with the corresponding local-coefficient form when needed. **For:** gives the algebraic handle target. **Prov:** [S: literature-derived; P: literature-derived].
3. `prop-h-cobordisms-admit-adapted-ordered-handle-decompositions` (proposition) — choose Morse data, remove endpoint handles and arrange by index. **For:** starts the geometric proof. **Prov:** [S: literature-derived; P: literature-derived].
4. `lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism` (lemma) — connectivity and cancellation remove minima and one-handles relative to $M_0$. **For:** clears low indices. **Prov:** [S: literature-derived; P: literature-derived].
5. `lem-duality-eliminates-top-and-cotop-handles` (lemma) — apply the previous argument to the reversed decomposition. **For:** clears indices $n,n+1$ in an $(n+1)$-cobordism. **Prov:** [S: literature-derived; P: literature-derived].
6. `lem-handle-trading-concentrates-an-acyclic-simply-connected-presentation-in-two-adjacent-middle-indices` (lemma) — add cancelling pairs and slide handles to trade indices. **For:** reduces topology to a matrix. **Prov:** [S: literature-derived; P: literature-derived].
7. `def-middle-handle-intersection-matrix-of-an-h-cobordism` (definition) — record attaching/belt intersections for the remaining adjacent indices. **For:** packages the acyclic handle differential. **Prov:** [S: literature-derived; P: not-applicable].
8. `lem-acyclicity-makes-the-simply-connected-middle-handle-matrix-unimodular` (lemma) — the relative handle complex has zero homology over $\mathbb Z$. **For:** supplies algebraic invertibility. **Prov:** [S: literature-derived; P: literature-derived].
9. `lem-handle-slides-reduce-a-unimodular-middle-handle-matrix-to-the-identity` (lemma) — elementary integer operations are realized geometrically. **For:** produces algebraically cancelling pairs. **Prov:** [S: literature-derived; P: literature-derived].
10. `lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically` (lemma) — in boundary dimension at least five and the simply connected setting, remove surplus intersection pairs. **For:** is where the high-dimensional hypothesis enters. **Prov:** [S: literature-derived; P: literature-derived].
11. `lem-middle-handle-pairs-with-one-geometric-intersection-cancel` (lemma) — apply DT-7 repeatedly. **For:** removes all remaining critical points. **Prov:** [S: literature-derived; P: literature-derived].
12. `thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary` (theorem) — integrate an adapted nonzero gradient field to identify $W\cong M_0\times[0,1]$. **For:** converts handle elimination to diffeomorphism. **Prov:** [S: literature-derived; P: literature-derived].
13. `thm-smooth-simply-connected-h-cobordism-theorem` (theorem) — if $W^{n+1}$ is an h-cobordism between closed simply connected $n$-manifolds and $n\ge5$, then $W$ is diffeomorphic rel $M_0$ to $M_0\times[0,1]$. **For:** is the commissioned theorem with sharp category/dimension. **Prov:** [S: literature-derived; P: literature-derived].
14. `cor-high-dimensional-simply-connected-h-cobordant-manifolds-are-diffeomorphic` (corollary) — restrict the product diffeomorphism to $M_1$. **For:** supplies the classification consequence. **Prov:** [S: literature-derived; P: literature-derived].
15. `cor-high-dimensional-smooth-poincare-for-homotopy-spheres-bounding-a-contractible-manifold` (corollary) — removing a disk gives an h-cobordism to $S^n$ under the stated dimensions and simple connectivity. **For:** prepares exotic-sphere distinctions. **Prov:** [S: literature-derived; P: literature-derived].
16. `rem-the-h-cobordism-theorem-does-not-cover-boundary-dimension-four` (remark) — $n=4$ is excluded; no smooth four-dimensional Poincare conclusion follows. **For:** states the category boundary. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  The proof is explicitly the chain items 3--12:
normalise handles, concentrate indices, diagonalise algebraically, use Whitney
to make that geometric, cancel, then integrate.  The dimension condition is
needed at item 10, and simple connectivity at items 4, 8--10.

**B page:** `the-smooth-h-cobordism-theorem-examples`

1. `ex-a-product-cobordism-is-an-h-cobordism` — verify both inclusions and the empty handle complex. **For:** checks the theorem target. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-an-elementary-cancelling-handle-pair-gives-a-product-cobordism` — cancel explicitly. **For:** local theorem model. **Prov:** [S: literature-derived; P: literature-derived].
3. `cex-a-homology-cobordism-need-not-be-an-h-cobordism` — give nontrivial fundamental-group data. **For:** distinguishes hypotheses. **Prov:** [S: literature-derived; P: literature-derived].
4. `cex-a-four-dimensional-boundary-case-is-outside-the-smooth-h-cobordism-theorem` — locate the Whitney-disk failure. **For:** tests item 16. **Prov:** [S: literature-derived; P: literature-derived].
5. `ex-the-handle-matrix-of-a-simple-acyclic-presentation` — reduce a unimodular $2\times2$ matrix by slides. **For:** finite verification of items 8--9. **Prov:** [S: literature-derived; P: literature-derived].

### DT-24 — Whitehead torsion and the s-cobordism theorem

**A page:** `whitehead-torsion-and-the-s-cobordism-theorem`

**Requires:** DT-23; `AT-n[simple-homotopy]` for Whitehead group/torsion
construction; AT local-coefficient cellular chains.

**Sources:** Lück Ch. 1, pp. 1--22 and Ch. 2 §§2.1--2.3, pp. 23--37;
Ranicki Ch. 8 §§8.1--8.2, electronic pp. 150--162; W §5.5,
pp. 149--153 (geometric simply-connected specialization).

1. `def-based-handle-chain-complex-over-the-fundamental-group-ring` (definition) — lift handles to the universal cover and choose orientations/paths to obtain a finite based free $\mathbb Z[\pi]$ complex. **For:** packages nonsimply-connected intersections. **Prov:** [S: literature-derived; P: not-applicable].
2. `lem-h-cobordism-handle-complex-is-acyclic-over-the-group-ring` (lemma) — homotopy equivalence of the boundary inclusion gives vanishing lifted relative homology. **For:** makes torsion defined. **Prov:** [S: literature-derived; P: literature-derived].
3. `def-whitehead-torsion-interface-for-a-finite-based-acyclic-complex` (definition) — consume AT's class in $\operatorname{Wh}(\pi)$ after quotienting elementary units. **For:** names the obstruction without reconstructing $K_1$. **Prov:** [S: literature-derived; P: not-applicable].
4. `def-whitehead-torsion-of-an-h-cobordism` (definition) — $\tau(W,M_0)$ is the torsion of item 1's acyclic relative complex. **For:** attaches AT algebra to geometry. **Prov:** [S: literature-derived; P: not-applicable].
5. `lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion` (lemma) — they perform elementary basis changes and elementary expansions. **For:** proves presentation independence. **Prov:** [S: literature-derived; P: literature-derived].
6. `thm-whitehead-torsion-of-an-h-cobordism-is-well-defined` (theorem) — changes of lifts, paths, orientations and handles alter the matrix only by the quotient units/elementary moves. **For:** makes item 4 intrinsic. **Prov:** [S: literature-derived; P: literature-derived].
7. `lem-product-h-cobordisms-have-zero-whitehead-torsion` (lemma) — their relative handle complex is empty/simple. **For:** proves necessity in s-cobordism. **Prov:** [S: literature-derived; P: literature-derived].
8. `def-simple-homotopy-equivalence` (definition) — cite AT: a homotopy equivalence is simple iff its Whitehead torsion vanishes. **For:** explains the letter “s”. **Prov:** [S: literature-derived; P: not-applicable].
9. `lem-vanishing-torsion-allows-algebraic-diagonalization-by-simple-handle-moves` (lemma) — after concentrating handles in adjacent indices, zero torsion reduces the group-ring matrix to identity via elementary operations. **For:** supplies the algebraic sufficiency step. **Prov:** [S: literature-derived; P: literature-derived].
10. `lem-group-labelled-whitney-tricks-realize-the-diagonalized-handle-complex` (lemma) — matching group labels and high-dimensional Whitney disks remove surplus geometric intersections. **For:** supplies the geometric sufficiency step. **Prov:** [S: literature-derived; P: literature-derived].
11. `thm-smooth-s-cobordism-theorem` (theorem) — for a connected smooth h-cobordism $W^{n+1}$ with $n\ge5$, $W$ is a product rel $M_0$ iff $\tau(W,M_0)=0$. **For:** is the nonsimply-connected refinement. **Prov:** [S: literature-derived; P: literature-derived].
12. `cor-h-cobordism-theorem-when-the-whitehead-group-vanishes` (corollary) — if $\operatorname{Wh}(\pi_1M_0)=0$, every h-cobordism in the range is a product. **For:** recovers simply connected and other cases. **Prov:** [S: literature-derived; P: literature-derived].
13. `prop-realization-of-whitehead-torsion-by-h-cobordisms` (proposition) — in the standard high-dimensional setting, prescribed torsion classes are realised by h-cobordisms. **For:** shows the obstruction is sharp. **Prov:** [S: literature-derived; P: literature-derived].
14. `rem-torsion-from-the-opposite-boundary-involves-the-standard-involution-and-dimension-sign` (remark) — $\tau(W,M_1)$ is not naively the same element as $\tau(W,M_0)$. **For:** records the duality subtlety. **Prov:** [S: literature-derived; P: not-applicable].
15. `rem-whitehead-group-construction-remains-at-owned` (remark) — DT proves the handle-geometric interpretation and theorem only. **For:** enforces the seam. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  Item 6 is the choice-independence proof.  Sufficiency
again separates group-ring matrix reduction (item 9) from Whitney realization
(item 10).  Exact torsion conventions and the opposite-end involution await the
AT simple-homotopy page.

**B page:** `whitehead-torsion-and-the-s-cobordism-theorem-examples`

1. `ex-simply-connected-h-cobordisms-have-zero-whitehead-obstruction` — $\operatorname{Wh}(1)=0$. **For:** recovers DT-23. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-a-group-ring-handle-matrix-and-its-torsion-class` — compute a finite toy acyclic complex. **For:** checks the definition interface. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-handle-slides-change-the-matrix-but-not-whitehead-torsion` — perform an elementary group-ring operation. **For:** verifies item 5. **Prov:** [S: literature-derived; P: literature-derived].
4. `cex-an-h-cobordism-with-nonzero-torsion-is-not-a-product` — use the realization theorem. **For:** shows h does not imply s. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-ordinary-acyclicity-over-z-does-not-detect-group-ring-torsion` — compare augmented and based complexes. **For:** motivates local coefficients. **Prov:** [S: literature-derived; P: literature-derived].

### DT-25 — Formal immersions and the Smale--Hirsch theorem

**A page:** `formal-immersions-and-the-smale-hirsch-theorem`

**Requires:** DT-6 handle filtrations; DG immersion, vector-bundle and
approximation foundations; `AT-n[classifying-spaces]` for bundle-monomorphism
classification examples.

**Sources:** Ranicki Ch. 7 §7.4, electronic pp. 142--146; Francis,
[Lecture 3](https://sites.math.northwestern.edu/jnf960/classes/hprin/3immersions.pdf),
PDF pp. 1--4 and [Lectures 5--6](https://sites.math.northwestern.edu/jnf960/classes/hprin/5%266smalehirsch.pdf),
PDF pp. 1--4; MW §§1--3 in full; C §7.2, pp. 226--232.

1. `def-formal-immersion-between-smooth-manifolds` (definition) — a formal immersion is $(f,F)$ with $f:M\to N$ smooth and $F:TM\to TN$ a fibrewise injective bundle map covering $f$. **For:** states the correct homotopy-theoretic datum. **Prov:** [S: literature-derived; P: not-applicable].
2. `def-space-of-immersions-and-space-of-formal-immersions` (definition) — use the weak/strong $C^\infty$ topology on maps as appropriate and compact-open topology on bundle data. **For:** makes “weak homotopy equivalence” meaningful. **Prov:** [S: literature-derived; P: not-applicable].
3. `def-derivative-map-from-immersions-to-formal-immersions` (definition) — $D(f)=(f,df)$. **For:** names the comparison map. **Prov:** [S: literature-derived; P: not-applicable].
4. `def-regular-homotopy-of-immersions` (definition) — a regular homotopy is a smooth path all of whose slices are immersions. **For:** reserves “isotopy” for embeddings. **Prov:** [S: literature-derived; P: not-applicable].
5. `lem-parametric-immersion-extension-on-a-disk` (lemma) — a family of formal immersions already holonomic near part of a disk can be deformed rel that part to genuine derivatives in the required direction. **For:** is the local Smale--Hirsch engine. **Prov:** [S: literature-derived; P: literature-derived].
6. `lem-restriction-of-formal-immersion-data-has-the-parametric-lifting-property` (lemma) — compatible families lift across collar/handle restrictions. **For:** allows handle induction. **Prov:** [S: literature-derived; P: literature-derived].
7. `lem-open-manifolds-admit-handle-filtrations-without-top-index-handles` (lemma) — a proper Morse function on an open $m$-manifold can be arranged without index $m$. **For:** supplies room for compression. **Prov:** [S: literature-derived; P: literature-derived].
8. `lem-formal-immersion-homotopies-extend-over-a-subcritical-handle` (lemma) — use the disk lemma on the core and the positive codimension in the cocore. **For:** is the inductive step. **Prov:** [S: literature-derived; P: literature-derived].
9. `thm-smale-hirsch-for-open-source-manifolds` (theorem) — for $\dim M\le\dim N$ under the standard open-source hypotheses, $D$ induces the relative parametric classification of immersions by formal immersions. **For:** records the equidimensional-safe version. **Prov:** [S: literature-derived; P: literature-derived].
10. `lem-positive-codimension-thickening-reduces-closed-sources-to-the-open-case` (lemma) — immerse a neighbourhood/normal thickening and restrict to the zero section. **For:** handles the missing top-index step. **Prov:** [S: literature-derived; P: literature-derived].
11. `thm-smale-hirsch-immersion-theorem` (theorem) — if $\dim M<\dim N$, $D:\operatorname{Imm}(M,N)\to\operatorname{FImm}(M,N)$ is a weak homotopy equivalence, including relative parametric forms. **For:** is the commissioned classification theorem. **Prov:** [S: literature-derived; P: literature-derived].
12. `cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes` (corollary) — take $\pi_0$ of item 11. **For:** is the practical classification statement. **Prov:** [S: literature-derived; P: literature-derived].
13. `def-normal-bundle-of-a-formal-immersion` (definition) — take the quotient $f^*TN/F(TM)$, or an orthogonal complement after choosing a metric. **For:** connects formal data to stable-normal obstructions. **Prov:** [S: literature-derived; P: not-applicable].
14. `lem-formal-immersion-gives-the-tangent-normal-bundle-identity` (lemma) — $TM\oplus\nu_F\cong f^*TN$. **For:** feeds DT-28. **Prov:** [S: literature-derived; P: literature-derived].
15. `rem-smale-hirsch-is-a-weak-homotopy-equivalence-not-asserted-as-an-actual-homotopy-equivalence` (remark) — the topology of the mapping spaces matters. **For:** prevents a standard strengthening error. **Prov:** [S: literature-derived; P: not-applicable].
16. `rem-a-closed-n-manifold-cannot-immerse-in-r-n` (remark) — an equidimensional immersion is a local diffeomorphism with open image, contradicting compact nonempty image. **For:** explains the positive-codimension clause. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  The theorem is not a bare h-principle citation: disk
extension, restriction lifting, handle induction and closed-source thickening
are separate rows.  Equal dimension is confined to the open-source theorem.
The conclusion is weak homotopy equivalence; only its $\pi_0$ consequence is
used later.

**B page:** `formal-immersions-and-the-smale-hirsch-theorem-examples`

1. `ex-immersing-the-circle-in-the-plane-from-a-formal-line-monomorphism` — identify the tangent-direction map. **For:** prepares rotation number. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-the-standard-sphere-immersion-and-its-normal-line` — verify the bundle identity. **For:** tests item 14. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-an-open-parallelizable-manifold-immerses-in-euclidean-space-of-equal-dimension` — apply the open theorem. **For:** tests item 9. **Prov:** [S: literature-derived; P: literature-derived].
4. `cex-a-closed-manifold-with-formally-plausible-rank-data-needs-positive-codimension` — use compactness in equal dimension. **For:** tests item 16. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-a-bundle-map-with-rank-drop-is-not-a-formal-immersion` — display why fibrewise injectivity is pointwise. **For:** checks the definition. **Prov:** [S: literature-derived; P: literature-derived].

### DT-26 — Regular homotopy and sphere eversion

**A page:** `regular-homotopy-and-sphere-eversion`

**Requires:** DT-25; `AT-n[homotopy-groups-and-stable-homotopy]` and
classifying-space/Stiefel-manifold computations.

**Sources:** Cohen, [“Immersions of Manifolds and Homotopy Theory”](https://math.stanford.edu/~ralph/immersions-final.pdf),
§§1--2.2, PDF pp. 4--10; Francis [Lecture 9](https://sites.math.northwestern.edu/jnf960/classes/hprin/9euclidean.pdf),
PDF pp. 1--3 and [Lecture 10](https://sites.math.northwestern.edu/jnf960/classes/hprin/10eversing.pdf),
PDF pp. 1--2; Ranicki §7.4, pp. 142--146.

1. `def-gauss-frame-map-of-an-immersion-into-euclidean-space` (definition) — after choosing local frames, the derivative determines an $m$-frame in $\mathbb R^n$ and hence a section of a Stiefel bundle. **For:** makes formal Euclidean data computable. **Prov:** [S: literature-derived; P: not-applicable].
2. `prop-euclidean-formal-immersions-are-sections-of-a-stiefel-bundle` (proposition) — identify fibrewise monomorphisms $TM\to\varepsilon^n$ with the associated frame-bundle section space. **For:** translates DT-25 to homotopy theory. **Prov:** [S: literature-derived; P: literature-derived].
3. `def-rotation-number-of-an-immersed-oriented-circle-in-the-plane` (definition) — degree of the unit tangent map $S^1\to S^1$. **For:** records the first regular-homotopy invariant. **Prov:** [S: literature-derived; P: not-applicable].
4. `thm-whitney-graustein-classification-of-plane-circle-immersions` (theorem) — two oriented immersions $S^1\looparrowright\mathbb R^2$ are regularly homotopic iff their rotation numbers agree. **For:** is the low-dimensional prototype. **Prov:** [S: literature-derived; P: literature-derived].
5. `lem-regular-homotopy-preserves-the-formal-gauss-class` (lemma) — differentiate a regular homotopy. **For:** gives necessity in all classifications. **Prov:** [S: literature-derived; P: literature-derived].
6. `thm-smale-classification-of-sphere-immersions-in-euclidean-space` (theorem) — regular-homotopy classes are the corresponding homotopy classes of formal frame data/Stiefel maps, with the tangent clutching condition explicit. **For:** applies DT-25 to spheres. **Prov:** [S: literature-derived; P: literature-derived].
7. `lem-standard-and-reflected-two-sphere-immersions-have-homotopic-formal-data-in-r-three` (lemma) — reduce the difference to the vanishing of the relevant $\pi_2(SO(3))$ class. **For:** is the algebraic eversion step. **Prov:** [S: literature-derived; P: literature-derived].
8. `thm-sphere-eversion` (theorem) — the standard embedding $S^2\hookrightarrow\mathbb R^3$ is regularly homotopic to its inside-out reflection through immersions. **For:** is the flagship application. **Prov:** [S: literature-derived; P: literature-derived].
9. `rem-sphere-eversion-cannot-be-an-isotopy-through-embeddings` (remark) — ambient isotopy preserves the induced normal/coorientation side; self-intersections are unavoidable. **For:** distinguishes regular homotopy from isotopy. **Prov:** [S: literature-derived; P: not-applicable].
10. `rem-regular-homotopy-allows-self-intersections-but-never-rank-drop` (remark) — every time slice remains an immersion. **For:** fixes the visual misconception. **Prov:** [S: literature-derived; P: not-applicable].
11. `rem-sphere-immersion-groups-are-at-computations-not-dt-constructions` (remark) — DT consumes the relevant Stiefel homotopy groups. **For:** enforces the AT seam. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  Whitney--Graustein and sphere eversion are consequences
of the parametric theorem only after the formal section spaces and relevant AT
homotopy groups are computed.  An eversion is a regular homotopy, never an
embedding isotopy.

**B page:** `regular-homotopy-and-sphere-eversion-examples`

1. `ex-plane-circle-immersions-of-rotation-number-k` — draw/parametrise representatives. **For:** tests item 4. **Prov:** [S: literature-derived; P: literature-derived].
2. `cex-the-figure-eight-and-round-circle-are-not-regularly-homotopic-as-oriented-immersions` — compare rotation numbers. **For:** shows self-intersection count is not the invariant. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-formal-frame-homotopy-behind-sphere-eversion` — trace the relevant $SO(3)$ map. **For:** finite check of item 7. **Prov:** [S: literature-derived; P: literature-derived].
4. `cex-a-homotopy-through-maps-with-a-rank-drop-is-not-a-regular-homotopy` — pinch a circle. **For:** tests item 10. **Prov:** [S: literature-derived; P: literature-derived].
5. `ex-a-boy-surface-immersion-of-real-projective-two-space` — Boy's surface immerses $\mathbb RP^2$ in $\mathbb R^3$, and its normal line is nontrivial because a global normal would orient the tangent planes in oriented $\mathbb R^3$. **For:** demonstrates nonorientable hypersurface behaviour. **Prov:** [S: literature-derived; P: literature-derived].

### DT-27 — Isotopy extension and embedding theory beyond Whitney

**A page:** `isotopy-extension-and-embedding-theory-beyond-whitney`

**Requires:** DG embeddings, tubes, flows, approximation and transversality;
DT-22 for Whitney disjunction; DT-25 for comparison with immersions.

**Sources:** H Ch. 8 §1, pp. 177--183; Juhasz Ch. 1 §1.3, pp. 13--16;
W §§6.2--6.4, pp. 169--192; Skopenkov, [“Embedding and Knotting of Manifolds in Euclidean Spaces”](https://arxiv.org/abs/math/0604045),
§§1--2, article pp. 1--13.

1. `def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy` (definition) — distinguish a path of embeddings, a path of ambient diffeomorphisms, and its action on an embedding. **For:** fixes terminology against sources calling regular homotopy isotopy. **Prov:** [S: literature-derived; P: not-applicable].
2. `lem-embedding-isotopy-has-a-well-defined-velocity-field-along-its-image` (lemma) — differentiate $F_t$ and transfer the vector to $F_t(M)$. **For:** starts isotopy extension. **Prov:** [S: literature-derived; P: literature-derived].
3. `lem-an-isotopy-velocity-field-extends-over-a-tubular-neighbourhood` (lemma) — use a tube projection and local trivialisation. **For:** separates local extension. **Prov:** [S: literature-derived; P: literature-derived].
4. `lem-compactness-allows-a-cutoff-to-produce-a-compactly-supported-time-dependent-field` (lemma) — choose a uniform tube along a compact isotopy track. **For:** supplies global support/completeness. **Prov:** [S: literature-derived; P: literature-derived].
5. `lem-the-extended-time-dependent-field-has-a-global-time-one-flow` (lemma) — compact support yields completeness on the finite time interval. **For:** completes the analytic construction. **Prov:** [S: literature-derived; P: literature-derived].
6. `thm-isotopy-extension` (theorem) — an isotopy of a compact embedded submanifold extends to a compactly supported ambient diffeotopy, with relative/boundary-stratum versions. **For:** turns intrinsic into ambient isotopy. **Prov:** [S: literature-derived; P: literature-derived].
7. `cor-isotopic-embeddings-have-diffeomorphic-complements` (corollary) — restrict the ambient time-one diffeomorphism. **For:** supplies an embedding invariant. **Prov:** [S: literature-derived; P: literature-derived].
8. `cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy` (corollary) — combine DG tubular existence/uniqueness with item 6. **For:** strengthens the cited DG result. **Prov:** [S: literature-derived; P: literature-derived].
9. `def-self-transverse-immersion-and-double-point-locus` (definition) — require the product map off the diagonal to be transverse to the diagonal. **For:** names the obstruction to upgrading an immersion. **Prov:** [S: literature-derived; P: not-applicable].
10. `lem-double-point-locus-has-expected-dimension-two-m-minus-n` (lemma) — apply transversality on $M\times M\setminus\Delta$. **For:** gives the general-position range. **Prov:** [S: literature-derived; P: literature-derived].
11. `cor-a-generic-proper-immersion-is-an-embedding-when-n-is-greater-than-two-m` (corollary) — the double locus is empty and proper injective immersions are embeddings. **For:** records the easy high-codimension upgrade beyond existence. **Prov:** [S: literature-derived; P: literature-derived].
12. `prop-whitney-disjunction-removes-algebraically-cancelling-double-points-in-the-stable-range` (proposition) — under DT-22's sign, group, framing and dimension hypotheses, regularly homotope an immersion toward an embedding. **For:** links embedding theory to the Whitney trick. **Prov:** [S: literature-derived; P: literature-derived].
13. `def-primary-double-point-obstruction-to-removing-self-intersections` (definition) — record the oriented/mod-two self-intersection class of a self-transverse immersion. **For:** names a genuine embedding obstruction. **Prov:** [S: literature-derived; P: not-applicable].
14. `rem-vanishing-primary-double-point-and-characteristic-obstructions-do-not-classify-embeddings` (remark) — knotting/deleted-product data can remain. **For:** prevents Smale--Hirsch being misapplied to embeddings. **Prov:** [S: literature-derived; P: not-applicable].
15. `rem-metastable-embedding-classification-requires-additional-deleted-product-machinery` (remark) — source the Haefliger--Weber boundary but do not make it load-bearing here. **For:** marks the advanced continuation. **Prov:** [S: literature-derived; P: not-supplied].
16. `rem-isotopy-extension-needs-compact-source-or-proper-support-control` (remark) — arbitrary noncompact isotopies may have no complete ambient extension. **For:** guards item 6. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  Velocity extension, cutoff and flow completeness are
three separate steps.  For boundaries, say whether the isotopy preserves the
strata.  The embedding upgrade distinguishes negative double-point dimension,
Whitney removal in its stable range, and advanced knot/deleted-product
obstructions.

**B page:** `isotopy-extension-and-embedding-theory-beyond-whitney-examples`

1. `ex-ambient-isotopy-of-an-unknotted-circle-in-r-three` — extend a visible embedding isotopy. **For:** tests item 6. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-isotopic-submanifolds-have-isomorphic-normal-bundles-and-complements` — apply the ambient derivative. **For:** checks consequences. **Prov:** [S: literature-derived; P: literature-derived].
3. `cex-regularly-homotopic-knots-need-not-be-isotopic-as-embeddings` — all circle immersions with fixed rotation data ignore knot type in space. **For:** distinguishes theories. **Prov:** [S: literature-derived; P: literature-derived].
4. `ex-double-point-dimension-count-for-surfaces-in-four-and-five-space` — compare isolated versus empty generic loci. **For:** shows why dimension four is critical. **Prov:** [S: literature-derived; P: literature-derived].

### DT-28 — Characteristic-class obstructions to immersions and embeddings

**A page:** `characteristic-class-obstructions-to-immersions-and-embeddings`

**Requires:** DT-16, DT-19, DT-25--DT-27; `AT-n[characteristic-classes]`
and `AT-n[classifying-spaces]`.

**Sources:** Cohen, “Immersions of Manifolds and Homotopy Theory,” §§1--3.1,
PDF pp. 4--13; C §7.2, pp. 226--232; Skopenkov §§1--2, article pp. 1--13;
MS Chs. 11, 14--15, pp. 123--136 and 167--182 for application formulas.

1. `def-stable-normal-inverse-of-the-tangent-bundle` (definition) — $\nu_M$ is the stable bundle with $TM\oplus\nu_M\cong\varepsilon^N$. **For:** names the intrinsic obstruction bundle. **Prov:** [S: literature-derived; P: not-applicable].
2. `lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle` (lemma) — its normal quotient is an actual codimension bundle. **For:** turns immersion existence into rank reduction. **Prov:** [S: literature-derived; P: literature-derived].
3. `lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity` (lemma) — DG tubes provide the actual embedded normal bundle. **For:** supplies necessary embedding conditions. **Prov:** [S: literature-derived; P: literature-derived].
4. `prop-smale-hirsch-makes-rank-reduction-sufficient-for-euclidean-immersion-in-positive-codimension` (proposition) — a rank-$(n-m)$ inverse tangent bundle gives a formal monomorphism and hence an immersion. **For:** shows the normal problem is complete for immersion, not embedding. **Prov:** [S: literature-derived; P: literature-derived].
5. `lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class` (lemma) — $w(\nu_M)w(TM)=1$ via AT Whitney sum. **For:** makes the obstruction calculable. **Prov:** [S: literature-derived; P: literature-derived].
6. `cor-high-normal-stiefel-whitney-classes-obstruct-low-codimension-immersions` (corollary) — if $\nu$ has rank $k$, $w_i(\nu)=0$ for $i>k$. **For:** is the standard nonimmersion test. **Prov:** [S: literature-derived; P: literature-derived].
7. `lem-oriented-normal-pontryagin-class-is-the-inverse-of-the-tangent-pontryagin-class` (lemma) — $p(\nu_M)p(TM)=1$ under AT's convention. **For:** gives integral/rational refinements. **Prov:** [S: literature-derived; P: literature-derived].
8. `cor-high-normal-pontryagin-classes-obstruct-oriented-immersions` (corollary) — a rank bound forces vanishing above its allowed degrees. **For:** supplements mod-two tests. **Prov:** [S: literature-derived; P: literature-derived].
9. `prop-euler-class-of-an-oriented-even-rank-normal-bundle-controls-self-intersection` (proposition) — use DT-12 to identify zero-locus/self-intersection. **For:** links characteristic and double-point obstructions. **Prov:** [S: literature-derived; P: literature-derived].
10. `thm-real-projective-space-stiefel-whitney-nonimmersion-obstruction` (theorem) — compute $\bar w(T\mathbb RP^m)=(1+a)^{-(m+1)}$ and use its highest nonzero term to rule out specified codimensions. **For:** is the canonical explicit application. **Prov:** [S: literature-derived; P: literature-derived].
11. `prop-parallelizable-manifolds-have-no-stable-characteristic-class-obstruction-to-euclidean-immersion` (proposition) — trivial $TM$ gives trivial stable inverse, though dimension/rank and embedding issues remain. **For:** states what the test can and cannot see. **Prov:** [S: literature-derived; P: literature-derived].
12. `cor-embedding-obstructions-include-all-immersion-normal-class-obstructions` (corollary) — every embedding is an immersion with actual normal bundle. **For:** transfers the tests. **Prov:** [S: literature-derived; P: literature-derived].
13. `rem-characteristic-class-vanishing-is-only-necessary-for-embedding` (remark) — knotting, complement and deleted-product obstructions remain. **For:** fixes the embedding boundary. **Prov:** [S: literature-derived; P: not-applicable].
14. `rem-characteristic-class-construction-is-cited-not-rebuilt` (remark) — exact AT $w,p,e$ normalizations must be substituted before authoring calculations. **For:** enforces the seam. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  First prove the actual normal bundle identity, then
apply AT Whitney-sum formulas and rank vanishing.  Smale--Hirsch makes formal
rank reduction sufficient only for immersion under its hypotheses.  No
characteristic calculation is advertised as an embedding classification.

**B page:** `characteristic-class-obstructions-to-immersions-and-embeddings-examples`

1. `ex-normal-class-calculation-for-real-projective-space` — expand the inverse binomial class. **For:** verifies item 10. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-parallelizable-tori-have-trivial-stable-normal-class` — produce a Euclidean formal immersion. **For:** tests item 11. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-the-normal-line-of-an-oriented-hypersurface-is-trivial` — use the coorientation. **For:** checks rank-one vanishing. **Prov:** [S: literature-derived; P: literature-derived].
4. `cex-vanishing-stable-characteristic-classes-does-not-make-two-embeddings-isotopic` — use nontrivial knots with trivial normal bundle. **For:** tests item 13. **Prov:** [S: literature-derived; P: literature-derived].

### DT-29 — Foliation holonomy and the holonomy groupoid

**A page:** `foliation-holonomy-and-the-holonomy-groupoid`

**Requires:** DG regular foliations/maximal leaves/Frobenius; DG
transversality and flows.  No foliation definition is repeated.

**Sources:** MMF §§1.3 and 2.1, pp. 14--24; CC §§4.2--4.3,
pp. 140--154; L §§1.3 and 2.1, pp. 7--12 (corroborating exposition, not
counted as independent from MMF).

1. `def-local-transversal-to-a-regular-foliation` (definition) — a codimension-$q$ submanifold transverse to the leaf distribution at a point. **For:** supplies the domain of holonomy maps. **Prov:** [S: literature-derived; P: not-applicable].
2. `lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism` (lemma) — compose plaque changes along a finite foliation-chart chain. **For:** constructs holonomy. **Prov:** [S: literature-derived; P: literature-derived].
3. `lem-holonomy-germ-is-independent-of-the-foliation-chart-chain` (lemma) — common refinement and plaque uniqueness give the same germ. **For:** closes auxiliary-choice independence. **Prov:** [S: literature-derived; P: literature-derived].
4. `thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints` (theorem) — subdivide a leafwise homotopy into chart rectangles and cancel interior changes. **For:** makes holonomy a path-homotopy invariant. **Prov:** [S: literature-derived; P: literature-derived].
5. `lem-holonomy-respects-path-concatenation-and-reversal` (lemma) — concatenation composes germs and reversal gives the inverse germ. **For:** supplies functoriality. **Prov:** [S: literature-derived; P: literature-derived].
6. `def-holonomy-representation-and-holonomy-group-of-a-leaf` (definition) — map $\pi_1(L,x)$ to germs of local transverse diffeomorphisms; its image is the holonomy group. **For:** distinguishes holonomy from the whole fundamental group. **Prov:** [S: literature-derived; P: not-applicable].
7. `def-holonomy-cover-of-a-leaf` (definition) — take the covering corresponding to the kernel of the holonomy representation. **For:** prepares the finite-holonomy local model. **Prov:** [S: literature-derived; P: not-applicable].
8. `def-monodromy-groupoid-of-a-foliation` (definition) — arrows are leafwise paths modulo fixed-endpoint leafwise homotopy. **For:** records the path-level groupoid. **Prov:** [S: literature-derived; P: not-applicable].
9. `def-holonomy-groupoid-of-a-foliation` (definition) — quotient monodromy arrows by equality of holonomy germs. **For:** records the transverse-effective groupoid. **Prov:** [S: literature-derived; P: not-applicable].
10. `prop-isotropy-of-the-holonomy-groupoid-is-the-leaf-holonomy-group` (proposition) — arrows from a point to itself are precisely the image germs. **For:** checks the definitions. **Prov:** [S: literature-derived; P: literature-derived].
11. `prop-pullback-foliation-under-a-transverse-map` (proposition) — if $f:N\to M$ is transverse to the foliation distribution, components of preimages of plaques define a foliation on $N$. **For:** gives the first global construction beyond Frobenius. **Prov:** [S: literature-derived; P: literature-derived].
12. `prop-quotient-foliation-under-a-free-proper-foliated-action` (proposition) — an action preserving leaves descends the foliation under the stated regularity. **For:** supplies quotient constructions safely. **Prov:** [S: literature-derived; P: literature-derived].
13. `def-suspension-foliation-of-a-group-action` (definition) — from a representation $\pi_1(B)\to\operatorname{Diff}(F)$, quotient $\widetilde B\times F$ and descend horizontal leaves. **For:** generates computable holonomy examples. **Prov:** [S: literature-derived; P: not-applicable].
14. `prop-suspension-holonomy-is-the-germ-of-the-monodromy-action` (proposition) — a base loop transports the transverse fibre by its represented diffeomorphism. **For:** verifies the construction and representation. **Prov:** [S: literature-derived; P: literature-derived].
15. `rem-holonomy-is-a-germ-not-a-globally-defined-return-map` (remark) — only sufficiently small transversals are compared; extensions need not be unique. **For:** prevents a common definition error. **Prov:** [S: literature-derived; P: not-applicable].
16. `rem-holonomy-and-monodromy-groupoids-need-not-be-hausdorff` (remark) — groupoid smooth topology can have non-Hausdorff phenomena even though the ambient manifold is Hausdorff. **For:** records the global subtlety without entering $C^*$-algebras. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  Holonomy requires three checks: chart-chain
independence, leafwise-homotopy invariance, and concatenation.  The holonomy
group is an image of $\pi_1(L)$, not the fundamental group itself.  Pullbacks
require transversality; quotient foliations require free/proper regularity.

**B page:** `foliation-holonomy-and-the-holonomy-groupoid-examples`

1. `ex-kronecker-foliation-of-the-torus-has-trivial-leaf-holonomy` — compute dense leaves and identity germs. **For:** separates density from holonomy. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-mobius-band-central-leaf-has-reflection-holonomy` — traverse the core once. **For:** tests nontrivial finite holonomy. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-suspension-of-a-circle-diffeomorphism` — identify leaves and return germs. **For:** checks items 13--14. **Prov:** [S: literature-derived; P: literature-derived].
4. `ex-flat-bundle-foliation-from-a-linear-representation` — construct the horizontal foliation. **For:** gives a higher-dimensional suspension. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-nontransverse-pullback-of-a-foliation-can-change-rank` — pull back along a tangent map. **For:** shows item 11's hypothesis is essential. **Prov:** [S: literature-derived; P: literature-derived].
6. `cex-two-nonhomotopic-leaf-loops-can-have-the-same-holonomy-germ` — use a leaf with nontrivial holonomy kernel. **For:** distinguishes monodromy and holonomy. **Prov:** [S: literature-derived; P: literature-derived].

### DT-30 — Reeb stability and global foliation constructions

**A page:** `reeb-stability-and-global-foliation-constructions`

**Requires:** DT-29; DG collars/Frobenius.  The general local theorem has one
independently obtained full treatment; the narrower codimension-one/global
forms have two.  This deficiency is repeated honestly in §8.

**Sources:** MMF §§2.3, 2.5--2.6, pp. 30--33 and 44--55 (general local,
global and Thurston stability); CC §4.2, pp. 140--143 and MIT §§22--23,
PDF pp. 54--56 (independent codimension-one/sphere-leaf specialisations only).

1. `def-saturated-neighbourhood-of-a-leaf` (definition) — an open set is saturated when it is a union of leaves. **For:** states the neighbourhood conclusion correctly. **Prov:** [S: literature-derived; P: not-applicable].
2. `lem-finite-holonomy-acts-on-a-small-transverse-disk` (lemma) — choose representatives of finitely many germs on a common disk and average/shrink to an invariant model. **For:** starts local Reeb stability. **Prov:** [S: literature-derived; P: literature-derived].
3. `def-finite-holonomy-normal-model` (definition) — $(\widetilde L_h\times T)/H$ uses the holonomy cover and finite holonomy group acting diagonally. **For:** gives the precise local model. **Prov:** [S: literature-derived; P: not-applicable].
4. `thm-local-reeb-stability` (theorem) — a compact leaf with finite holonomy has a saturated neighbourhood foliated-diffeomorphic to a neighbourhood in the finite-holonomy normal model. **For:** is the general compact-leaf stability theorem. **Prov:** [S: literature-derived; P: literature-derived].
5. `cor-trivial-holonomy-gives-a-product-foliated-neighbourhood` (corollary) — the normal model reduces to $L\times T$. **For:** supplies the simplest usable form. **Prov:** [S: literature-derived; P: literature-derived].
6. `cor-finite-fundamental-group-is-a-sufficient-not-necessary-reeb-stability-hypothesis` (corollary) — finite $\pi_1(L)$ forces finite holonomy image. **For:** states the stronger classical assumption accurately. **Prov:** [S: literature-derived; P: literature-derived].
7. `thm-global-reeb-stability-for-transversely-oriented-codimension-one-foliations` (theorem) — on a compact connected manifold, one compact leaf with finite fundamental group forces all leaves compact and yields the standard global fibration/mapping-torus description under the source hypotheses. **For:** gives the global codimension-one form. **Prov:** [S: literature-derived; P: literature-derived].
8. `lem-compact-stable-leaves-form-an-open-saturated-set` (lemma) — local Reeb stability gives openness. **For:** splits the global proof. **Prov:** [S: literature-derived; P: literature-derived].
9. `lem-compact-leaf-control-and-compact-ambientness-give-the-required-closedness` (lemma) — use transverse orientation and limit plaques to close the stable set. **For:** completes the open-and-closed argument. **Prov:** [S: literature-derived; P: literature-derived].
10. `prop-mapping-torus-foliations-realize-global-reeb-stable-examples` (proposition) — fibres of a bundle over $S^1$ form the compact-leaf foliation, with monodromy transverse to the fibres. **For:** gives the global model. **Prov:** [S: literature-derived; P: literature-derived].
11. `prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf` (proposition) — construct interior planes/cylinders spiralling toward the boundary torus. **For:** supplies the canonical unstable countermodel. **Prov:** [S: literature-derived; P: literature-derived].
12. `prop-gluing-two-reeb-components-gives-a-foliation-of-s-three` (proposition) — match their boundary torus foliations. **For:** shows compact manifolds can have noncompact leaves. **Prov:** [S: literature-derived; P: literature-derived].
13. `thm-reeb-thurston-stability-for-codimension-one-leaves` (theorem) — in a $C^1$ transversely oriented codimension-one foliation, a compact leaf $L$ with $H^1(L;\mathbb R)=0$ has a saturated neighbourhood whose leaves are diffeomorphic to $L$. **For:** records the cohomological refinement and the regularity/coorientation hypotheses. **Prov:** [S: literature-derived; P: literature-derived].
14. `rem-transverse-orientability-is-load-bearing-in-the-global-codimension-one-form` (remark) — otherwise pass to a double cover and descend only justified conclusions. **For:** fixes the coorientation caveat. **Prov:** [S: literature-derived; P: not-applicable].
15. `rem-compact-leaf-does-not-mean-finite-holonomy-or-finite-fundamental-group` (remark) — these are distinct hypotheses. **For:** prevents terminological collapse. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  The local theorem's hypothesis is compact leaf plus
finite *holonomy*, not finite fundamental group.  The global result adds
compact ambientness, connectedness, codimension one and transverse orientation.
The general local theorem has only MMF as an independently inspected full
treatment; the narrower specialisations are corroborated but not promoted.

**B page:** `reeb-stability-and-global-foliation-constructions-examples`

1. `ex-product-foliation-near-a-compact-trivial-holonomy-leaf` — identify the saturated product. **For:** tests item 5. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-finite-holonomy-mobius-normal-model` — compute the twofold cover quotient. **For:** tests item 3. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-a-fibration-over-the-circle-as-a-global-stable-foliation` — compute its compact leaves. **For:** checks item 10. **Prov:** [S: literature-derived; P: literature-derived].
4. `cex-a-reeb-component-has-a-compact-boundary-leaf-with-infinite-holonomy-behaviour` — show spiralling and failure of product stability. **For:** tests item 4. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-a-compact-leaf-with-infinite-fundamental-group-can-still-have-trivial-holonomy` — use a product foliation. **For:** tests item 15. **Prov:** [S: literature-derived; P: literature-derived].

### DT-31 — Codimension-one foliations and secondary classes

**A page:** `codimension-one-foliations-and-secondary-classes`

**Requires:** DT-15, DT-29--DT-30; DG differential forms/de Rham/Frobenius;
AT fundamental-group/homology interfaces for Novikov consequences.

**Sources:** MMF §1.2, pp. 9--13 and §3.2, pp. 65--80; Hurder--Langevin,
[“Dynamics and the Godbillon--Vey Class”](https://homepages.math.uic.edu/~hurder/papers/59manuscript-rev2016.pdf),
§§2--3.1, PDF pp. 3--10; CC §§4.4--4.6, pp. 155--166.

1. `def-transversely-oriented-codimension-one-foliation-by-a-global-one-form` (definition) — choose a nowhere-zero $1$-form $\omega$ with $T\mathcal F=\ker\omega$ and $\omega\wedge d\omega=0$. **For:** translates DG Frobenius to the global cooriented setting. **Prov:** [S: literature-derived; P: not-applicable].
2. `lem-frobenius-divisibility-gives-d-omega-equals-eta-wedge-omega` (lemma) — locally and then globally choose $\eta$ with $d\omega=\eta\wedge\omega$. **For:** starts Godbillon--Vey and fixes the wedge order. **Prov:** [S: literature-derived; P: literature-derived].
3. `lem-eta-wedge-d-eta-is-closed` (lemma) — differentiate the Frobenius relation and use codimension one. **For:** produces a de Rham class. **Prov:** [S: literature-derived; P: literature-derived].
4. `lem-godbillon-vey-form-is-independent-of-the-choice-of-eta-up-to-an-exact-form` (lemma) — replacing $\eta$ by $\eta+h\omega$ changes $\eta\wedge d\eta$ exactly. **For:** closes auxiliary-choice independence. **Prov:** [S: literature-derived; P: literature-derived].
5. `lem-godbillon-vey-form-is-invariant-under-rescaling-the-defining-form` (lemma) — for $\omega'=e^f\omega$, take the corresponding $\eta'$ and compute the exact difference. **For:** proves foliation independence. **Prov:** [S: literature-derived; P: literature-derived].
6. `def-godbillon-vey-class` (definition) — $GV(\mathcal F)=[\eta\wedge d\eta]\in H^3_{\mathrm{dR}}(M)$. **For:** names the secondary invariant. **Prov:** [S: literature-derived; P: not-applicable].
7. `cor-a-codimension-one-foliation-defined-by-a-closed-one-form-has-zero-godbillon-vey-class` (corollary) — choose $\eta=0$. **For:** gives the basic vanishing test. **Prov:** [S: literature-derived; P: literature-derived].
8. `thm-godbillon-vey-class-is-invariant-under-smooth-foliated-concordance` (theorem) — extend the defining data over a foliated cobordism and use Stokes/de Rham restriction. **For:** connects the secondary class to DT cobordism. **Prov:** [S: literature-derived; P: literature-derived].
9. `rem-classical-godbillon-vey-requires-at-least-c-two-regularity` (remark) — no general $C^1$ invariant is asserted. **For:** records the regularity threshold. **Prov:** [S: literature-derived; P: not-applicable].
10. `def-reeb-component-in-a-cooriented-three-manifold-foliation` (definition) — a foliated solid torus has boundary leaf and interior leaves spiralling toward it. **For:** names the global obstruction piece. **Prov:** [S: literature-derived; P: not-applicable].
11. `def-taut-codimension-one-foliation` (definition) — every leaf meets a closed transversal; on a compact connected manifold use the equivalent finite/one-transversal form under the source hypotheses. **For:** fixes the convention. **Prov:** [S: literature-derived; P: not-applicable].
12. `lem-a-reeb-component-obstructs-tautness` (lemma) — its boundary leaf cannot be crossed by a closed everywhere-transverse curve without trapping. **For:** supplies the first implication. **Prov:** [S: literature-derived; P: literature-derived].
13. `prop-transverse-volume-preserving-flow-implies-tautness-in-the-compact-cooriented-three-dimensional-setting` (proposition) — recurrence/volume gives closed transversals through leaves. **For:** provides a dynamical criterion with exact hypotheses. **Prov:** [S: literature-derived; P: literature-derived].
14. `prop-a-leafwise-positive-closed-two-form-calibrates-a-taut-foliation` (proposition) — positivity and Stokes rule out dead ends and yield tautness under the compact oriented cooriented hypotheses. **For:** gives the form-theoretic criterion. **Prov:** [S: literature-derived; P: literature-derived].
15. `def-vanishing-cycle-of-a-codimension-one-foliation` (definition) — a leafwise loop nontrivial in one leaf becomes trivial in nearby leaves through a transverse family. **For:** states Novikov's geometric input. **Prov:** [S: literature-derived; P: not-applicable].
16. `lem-a-simple-vanishing-cycle-produces-a-compact-leaf` (lemma) — use leafwise disks and a limiting/innermost argument. **For:** first Novikov proof stage. **Prov:** [S: literature-derived; P: literature-derived].
17. `lem-the-compact-leaf-produced-by-a-vanishing-cycle-bounds-a-reeb-component` (lemma) — holonomy and the solid-torus model give the component. **For:** second Novikov stage. **Prov:** [S: literature-derived; P: literature-derived].
18. `thm-novikov-reeb-component-theorem` (theorem) — for a $C^2$ transversely oriented codimension-one foliation of a closed oriented $3$-manifold, a nullhomotopic closed transversal or a noninjective map $\pi_1(L)\to\pi_1(M)$ for some leaf forces a Reeb component. **For:** is the global obstruction theorem with its category and compactness hypotheses visible. **Prov:** [S: literature-derived; P: literature-derived].
19. `cor-reebless-leaves-are-pi-one-injective-under-novikov-hypotheses` (corollary) — contrapose item 18. **For:** gives the essential-leaf consequence. **Prov:** [S: literature-derived; P: literature-derived].
20. `rem-reebless-and-taut-are-not-equivalent-without-extra-hypotheses` (remark) — retain Calegari's compact/cooriented/atoroidal qualifications for converse implications. **For:** prevents exporting a three-manifold special case. **Prov:** [S: literature-derived; P: not-applicable].
21. `rem-novikov-conclusions-do-not-extend-to-arbitrary-codimension-or-noncompact-manifolds` (remark) — the theorem is deliberately three-dimensional and codimension one. **For:** fixes scope. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  The Godbillon--Vey proof includes closedness, both
choice changes and concordance invariance.  Tautness equivalences retain
compact oriented cooriented three-manifold hypotheses.  Novikov's theorem is
split through vanishing cycle, compact leaf and Reeb component; it is not
stated in arbitrary codimension.

**B page:** `codimension-one-foliations-and-secondary-classes-examples`

1. `ex-a-fibration-over-the-circle-has-zero-godbillon-vey-class` — use a closed defining form. **For:** checks item 7. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-godbillon-vey-rescaling-calculation` — replace $\omega$ by $e^f\omega$ and compute the exact difference. **For:** verifies item 5. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-reeb-foliation-of-s-three-is-not-taut` — locate its Reeb components. **For:** checks item 12. **Prov:** [S: literature-derived; P: literature-derived].
4. `ex-fibre-foliation-of-a-mapping-torus-is-taut` — use a closed transversal. **For:** provides a positive model. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-a-noncompact-codimension-one-foliation-need-not-satisfy-novikov-compactness-conclusions` — exhibit escape at infinity. **For:** tests item 21. **Prov:** [S: literature-derived; P: literature-derived].

### DT-32 — Exotic smooth structures and Milnor spheres

**A page:** `exotic-smooth-structures-and-milnor-spheres`

**Requires:** DT-15--DT-17, DT-20--DT-24, DT-28;
`AT-n[characteristic-classes]`, `AT-n[classifying-spaces]`, and
`AT-n[homotopy-groups-and-stable-homotopy]`.

**Sources:** MI full paper, Annals pp. 399--405; Northwestern Math 465,
[*Milnor's Construction of Exotic 7-Spheres*](https://sites.math.northwestern.edu/jnf960/classes/mflds/18exotic7spheres2.pdf),
lecture in full; Lück Ch. 6 §§6.1--6.7, pp. 123--142; Kervaire--Milnor,
[*Groups of Homotopy Spheres I*](https://people.math.rochester.edu/faculty/doug/otherpapers/kervaire-milnor.pdf),
§§1--4, pp. 504--515 (whole pp. 504--537 consulted for context); C
§11.6.2, pp. 411--419.

1. `def-exotic-smooth-structure-and-exotic-sphere` (definition) — an exotic smooth structure is homeomorphic but not diffeomorphic to the reference smooth manifold; an exotic $n$-sphere uses $S^n$. **For:** fixes the category distinction. **Prov:** [S: literature-derived; P: not-applicable].
2. `def-smooth-homotopy-sphere` (definition) — a closed smooth manifold homotopy equivalent to $S^n$, with an orientation when forming the group. **For:** names the high-dimensional classification objects. **Prov:** [S: literature-derived; P: not-applicable].
3. `lem-connected-sum-of-oriented-homotopy-spheres-is-a-homotopy-sphere` (lemma) — Mayer--Vietoris/van Kampen and degree-one collapse give the homotopy type. **For:** supplies closure of the operation. **Prov:** [S: literature-derived; P: literature-derived].
4. `def-theta-n-group-of-oriented-h-cobordism-classes-of-homotopy-spheres` (definition) — connected sum is addition, the standard sphere is zero, and orientation reversal is inverse for $n\ge5$. **For:** packages smooth structures geometrically. **Prov:** [S: literature-derived; P: not-applicable].
5. `thm-h-cobordism-identifies-theta-n-with-oriented-diffeomorphism-classes-for-n-at-least-five` (theorem) — an h-cobordism between homotopy spheres is a product, so the group can be read as oriented diffeomorphism classes. **For:** applies DT-23 with the dimension stated. **Prov:** [S: literature-derived; P: literature-derived].
6. `def-b-p-n-plus-one-subgroup-of-homotopy-spheres` (definition) — $bP_{n+1}$ consists of homotopy $n$-spheres bounding parallelizable $(n+1)$-manifolds. **For:** locates framed-cobordism and surgery input. **Prov:** [S: literature-derived; P: not-applicable].
7. `prop-homotopy-spheres-are-stably-parallelizable` (proposition) — use the stable normal/PT description and the source's obstruction calculation. **For:** links $\Theta_n$ to stable homotopy. **Prov:** [S: literature-derived; P: literature-derived].
8. `def-quaternionic-clutching-bundles-xi-h-j-over-s-four` (definition) — clutch two trivial oriented $4$-plane bundles along $S^3$ by left/right quaternionic powers indexed by $(h,j)$. **For:** constructs Milnor's bundle family. **Prov:** [S: literature-derived; P: not-applicable].
9. `lem-euler-and-first-pontryagin-classes-of-xi-h-j` (lemma) — under the reconciled AT convention, $e(\xi_{h,j})=(h+j)u$ and $p_1(\xi_{h,j})=2(h-j)u$ up to the single recorded orientation/sign normalization. **For:** makes topology and smooth obstruction computable. **Prov:** [S: literature-derived; P: literature-derived].
10. `def-milnor-sphere-bundle-m-h-j` (definition) — take the unit $S^3$-bundle of $\xi_{h,j}\to S^4$ and its bounding disk bundle. **For:** creates the seven-manifolds and eight-dimensional bounds. **Prov:** [S: literature-derived; P: not-applicable].
11. `thm-h-plus-j-equals-plus-or-minus-one-gives-a-homology-seven-sphere` (theorem) — the Gysin sequence with Euler number $\pm1$ gives the homology of $S^7$. **For:** is the first sphere-recognition step. **Prov:** [S: literature-derived; P: literature-derived].
12. `lem-milnor-sphere-bundles-with-euler-number-plus-or-minus-one-are-simply-connected` (lemma) — use the fibration homotopy sequence for $S^3\to M_{h,j}\to S^4$. **For:** upgrades homology sphere to homotopy sphere. **Prov:** [S: literature-derived; P: literature-derived].
13. `cor-milnor-sphere-bundles-with-euler-number-plus-or-minus-one-are-homotopy-seven-spheres` (corollary) — Hurewicz/Whitehead gives a homotopy equivalence to $S^7$. **For:** identifies the objects in $\Theta_7$. **Prov:** [S: literature-derived; P: literature-derived].
14. `lem-two-disk-complement-in-a-homotopy-sphere-is-an-h-cobordism-in-dimensions-at-least-six` (lemma) — removing two disjoint smooth $n$-disks from a homotopy $n$-sphere gives a simply connected homology cobordism between standard $(n-1)$-spheres, hence an h-cobordism for $n\ge6$. **For:** makes DT-23 applicable without importing the topological Poincare theorem. **Prov:** [S: literature-derived; P: literature-derived].
15. `lem-a-sphere-homeomorphism-extends-over-the-disk-by-the-alexander-trick` (lemma) — radial extension carries any homeomorphism $S^{n-1}\to S^{n-1}$ to a homeomorphism of $D^n$. **For:** converts the possibly nonextendable boundary diffeomorphism into a topological extension. **Prov:** [S: literature-derived; P: literature-derived].
16. `cor-milnor-homotopy-seven-spheres-are-homeomorphic-to-s-seven` (corollary) — use item 14 and DT-23 to make the two-disk complement a smooth cylinder, then use item 15 on its boundary gluing map. **For:** establishes the “homeomorphic” half of exoticness while exposing why smooth extendability can fail. **Prov:** [S: literature-derived; P: literature-derived].
17. `lem-disk-bundle-intersection-form-and-signature-for-xi-h-j` (lemma) — the zero section generates middle homology with self-intersection $h+j$, so the signature is its sign. **For:** supplies the bounding-manifold term in the smooth invariant. **Prov:** [S: literature-derived; P: literature-derived].
18. `lem-relative-pontryagin-number-of-the-milnor-disk-bundle-is-controlled-by-h-minus-j` (lemma) — use item 9, the tangent splitting of a vector-bundle total space and relative evaluation. **For:** supplies the other characteristic term. **Prov:** [S: literature-derived; P: literature-derived].
19. `thm-milnor-characteristic-number-congruence-is-a-boundary-diffeomorphism-invariant` (theorem) — the source-normalized combination of signature and Pontryagin number is independent of the chosen bounding $8$-manifold and invariant under orientation-preserving diffeomorphism of the boundary. **For:** is the smooth detector; authoring must match AT's $p_1$ sign exactly. **Prov:** [S: literature-derived; P: literature-derived].
20. `thm-milnor-constructed-manifolds-homeomorphic-but-not-diffeomorphic-to-s-seven` (theorem) — selected $(h,j)$ with $h+j=\pm1$ have a congruence invariant different from the standard sphere. **For:** proves existence of exotic smooth spheres. **Prov:** [S: literature-derived; P: literature-derived].
21. `thm-kervaire-milnor-theta-seven-is-cyclic-of-order-twenty-eight` (theorem) — $\Theta_7\cong\mathbb Z/28$, and $bP_8=\Theta_7$. **For:** locates Milnor's examples in the complete high-dimensional classification. **Prov:** [S: literature-derived; P: not-supplied].
22. `rem-the-theta-seven-calculation-consumes-stable-stems-j-and-kervaire-milnor-arithmetic` (remark) — item 21 is non-load-bearing here; its proof belongs to the AT/stable-homotopy sequel. **For:** prevents a fabricated short proof. **Prov:** [S: literature-derived; P: not-applicable].
23. `rem-none-of-the-high-dimensional-exotic-sphere-results-settle-the-smooth-four-dimensional-poincare-problem` (remark) — $n=4$ is explicitly excluded from the h-cobordism bridge. **For:** states the crucial category/dimension boundary. **Prov:** [S: literature-derived; P: not-applicable].

**Hard-proof closure.**  The construction is decomposed into clutching, class
calculation, homology, simple connectivity, the two-disk h-cobordism,
Alexander extension, and smooth characteristic detection.  The sign in item 9
and normalization in item 19
must be reconciled with AT before build.  The order-$28$ classification is a
sourced, non-load-bearing statement, never an invented or abbreviated proof.

**B page:** `exotic-smooth-structures-and-milnor-spheres-examples`

1. `ex-the-standard-seven-sphere-as-a-quaternionic-hopf-sphere-bundle` — identify the reference $(h,j)$ choice. **For:** normalizes the family. **Prov:** [S: literature-derived; P: literature-derived].
2. `ex-gysin-sequence-for-a-milnor-sphere-bundle` — compute homology when $h+j=1$. **For:** verifies item 11. **Prov:** [S: literature-derived; P: literature-derived].
3. `ex-intersection-form-of-the-bounding-disk-bundle` — compute its one-by-one matrix. **For:** verifies item 17. **Prov:** [S: literature-derived; P: literature-derived].
4. `ex-two-milnor-spheres-with-distinct-congruence-invariants` — perform the source arithmetic after AT sign substitution. **For:** demonstrates nondiffeomorphism. **Prov:** [S: literature-derived; P: literature-derived].
5. `cex-homeomorphism-type-does-not-determine-smooth-structure-in-dimension-seven` — compare the standard sphere and item 20. **For:** states the final boundary phenomenon. **Prov:** [S: literature-derived; P: literature-derived].

---

## 8. Per-pair source matrix

Every range below was read as part of a full treatment.  A dash is deliberate:
DT-30's general local finite-holonomy Reeb theorem had only one independently
inspected full treatment; the additional sources treat only narrower
codimension-one/sphere-leaf cases and are not promoted.

| pair | independent full treatment A — exact range read | independent full treatment B — exact range read |
|---|---|---|
| DT-1 | N Ch. 1 §1.1, pp. 1--12 | Audin--Damian Ch. 1 §§1.1, 1.3, pp. 7--11, 14--17 |
| DT-2 | N Ch. 1 §1.2, pp. 13--19 | Audin--Damian Ch. 1 §1.2, pp. 11--14; W §§4.3--4.5, pp. 98--110 |
| DT-3 | C §§13.1--13.2, pp. 483--499 | Audin--Damian §§2.1--2.2, pp. 23--47 |
| DT-4 | C §§13.2--13.4, pp. 491--512 | Ritter Lectures 7--9, PDF pp. 30--44 |
| DT-5 | N §§2.1--2.2, pp. 23--45 | H Ch. 6 §§2--3, pp. 149--165 |
| DT-6 | W §§5.1--5.4, pp. 129--148 | P Ch. 5, pp. 163--194; MH §§2--4, pp. 10--48 |
| DT-7 | W §5.4, pp. 143--148 | MH §§4--6, pp. 37--78 |
| DT-8 | N §2.3, pp. 46--53 | Audin--Damian §4.4, pp. 105--111; Ritter Lecture 21, PDF pp. 96--101 |
| DT-9 | Audin--Damian §§3.1--3.4, pp. 55--75 | Ritter Lectures 17--19, PDF pp. 76--91; C §13.4/App. A--B, pp. 507--532 |
| DT-10 | Audin--Damian §§3.3--3.5, 4.1, 4.6, 4.9, pp. 68--80, 83--90, 112--126 | Ritter Lectures 19--21, PDF pp. 87--101 |
| DT-11 | GP Ch. 2 §4 and Ch. 3 §3, pp. 77--84, 107--118 | Stanford Math 215B Lectures 14--15, pp. 43--49; M Chs. 4--5, pp. 20--31 |
| DT-12 | C §§8.3--9.3, pp. 244--260 | Stanford Math 215B Lectures 14--16, pp. 43--52 |
| DT-13 | M Ch. 6, pp. 32--41 | GP Ch. 3 §§5, 7, pp. 132--150; Stanford Lectures 16--17, pp. 49--55 |
| DT-14 | GP Ch. 3 §4, pp. 119--131 | Stanford Lecture 17, pp. 52--55; *Lectures on Fixed Point Theory* Lecture II, pp. 12--23 |
| DT-15 | F Lectures 1--2, pp. 5--24 | MS Ch. 17, pp. 199--204 |
| DT-16 | MS Ch. 18, pp. 205--218 | F Lectures 2--3 and 10, pp. 15--28, 86--91 |
| DT-17 | F Lectures 2--3, pp. 15--28 | M Ch. 7, pp. 42--49; Ranicki §§6.1--6.2, pp. 109--116 |
| DT-18 | F Lecture 2, pp. 20--24 | M Ch. 8, pp. 50--51; GP Ch. 3 §6, pp. 141--147 |
| DT-19 | MS Chs. 16--18, pp. 183--218 | F Lectures 7--10, pp. 55--91; TW §§9--18, pp. 15--34 |
| DT-20 | MS Ch. 19, pp. 219--230 | F Lectures 11--12, pp. 92--105 |
| DT-21 | Lück Ch. 3 §3.4 and Ch. 4 §4.1, pp. 69--84 | Ranicki Ch. 10 §§10.1--10.4, pp. 194--211 |
| DT-22 | Ranicki Ch. 7 §§7.2--7.3, pp. 131--141 | MH §§6--7, pp. 67--99; Juhasz Ch. 2 §2.2, pp. 38--42 |
| DT-23 | MH §§1--9, pp. 1--113 | Lück Ch. 1, pp. 1--22 |
| DT-24 | Lück Ch. 1 and Ch. 2 §§2.1--2.3, pp. 1--37 | Ranicki Ch. 8 §§8.1--8.2, pp. 150--162 |
| DT-25 | Ranicki Ch. 7 §7.4, pp. 142--146 | Francis Lectures 3, 5--6, PDF pp. 1--4 each |
| DT-26 | Cohen immersion notes §§1--2.2, PDF pp. 4--10 | Francis Lectures 9--10, PDF pp. 1--3 and 1--2 |
| DT-27 | H Ch. 8 §1, pp. 177--183 | Juhasz Ch. 1 §1.3, pp. 13--16; W §§6.2--6.4, pp. 169--192 |
| DT-28 | Cohen immersion notes §§1--3.1, PDF pp. 4--13 | Skopenkov §§1--2, article pp. 1--13 |
| DT-29 | MMF §§1.3, 2.1, pp. 14--24 | CC §§4.2--4.3, pp. 140--154 |
| DT-30 | MMF §§2.3, 2.5--2.6, pp. 30--33, 44--55 | — general local Reeb stability has no second independently inspected full treatment; CC §4.2, pp. 140--143 and MIT §§22--23, PDF pp. 54--56 cover only narrower codimension-one/sphere-leaf cases |
| DT-31 | MMF §1.2 and §3.2, pp. 9--13, 65--80 | Hurder--Langevin §§2--3.1, PDF pp. 3--10; CC §§4.4--4.6, pp. 155--166 |
| DT-32 | MI full paper, pp. 399--405; Kervaire--Milnor §§1--4, pp. 504--515 | Northwestern Math 465 exotic-sphere lecture in full; Lück Ch. 6 §§6.1--6.7, pp. 123--142 |

---

## 9. Canonical heading harvest and heading-to-item crosswalk

The denominator in §11 is the number of rows below whose disposition is
`included`.  Each row is one source section or explicitly named result heading,
not a chapter bundle.  Repeated treatments remain separate rows because the
coverage audit asks whether independent sources were actually read; they do
not cause duplicate items.

### 9.1 Morse theory

| key | source heading read | disposition | proposed item ids produced |
|---|---|---|---|
| H001 | N §1.1, “The local structure of Morse functions” | included | `def-critical-point-and-critical-value-of-a-smooth-function`, `def-hessian-of-a-function-at-a-critical-point`, `def-nondegenerate-critical-point-nullity-index-and-coindex`, `thm-morse-lemma` |
| H002 | Audin--Damian §1.1, “Critical points and the Hessian” | included | `lem-coordinate-change-congruence-for-the-critical-hessian`, `lem-critical-hessian-agrees-with-the-levi-civita-hessian`, `lem-sylvester-inertia-makes-morse-index-intrinsic` |
| H003 | Audin--Damian §1.3, “The Morse lemma” | included | `lem-one-variable-completion-of-the-square-with-a-smooth-parameter`, `lem-morse-splitting-induction-preserves-the-residual-hessian`, `thm-morse-lemma` |
| H004 | C §12.1, “The Hessian and the index of a critical point” | included | `def-nondegenerate-critical-point-nullity-index-and-coindex`, `cor-index-and-coindex-swap-under-negation`, `rem-zero-dimensional-morse-convention` |
| H005 | C §12.2, “Morse functions” | included | `def-morse-function-and-excellent-morse-function`, `lem-nondegenerate-critical-points-are-isolated`, `cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points` |
| H006 | N §1.2, “The existence of Morse functions” | included | `lem-morse-functions-are-transverse-differentials`, `thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse`, `thm-generic-squared-distance-functions-are-morse` |
| H007 | Audin--Damian §1.2, “Morse functions are generic” | included | `thm-morse-functions-form-a-residual-subset`, `thm-morse-functions-are-dense-by-relative-jet-transversality`, `thm-morse-functions-are-open-dense-on-a-compact-manifold` |
| H008 | W §4.3, “Existence of non-degenerate functions” | included | `cor-every-compact-smooth-manifold-admits-an-excellent-morse-function`, `prop-proper-morse-exhaustions-exist-on-smooth-manifolds` |
| H009 | W §4.4, “Jet spaces and function spaces” | included | `thm-morse-functions-form-a-residual-subset`, `rem-noncompact-morse-genericity-is-not-an-open-dense-claim` |
| H010 | N named result, “Excellent Morse functions” | included | `lem-finitely-many-critical-values-can-be-separated-locally`, `thm-excellent-morse-functions-are-open-dense-on-a-compact-manifold`, `rem-morse-does-not-mean-distinct-critical-values` |
| H011 | C §13.1, “The gradient flow equation” | included | `def-negative-gradient-trajectory-of-a-morse-function`, `lem-negative-gradient-energy-identity`, `cor-nonconstant-negative-gradient-trajectories-strictly-decrease-f` |
| H012 | Audin--Damian §2.1, “Pseudo-gradients and descending flows” | included | `def-downward-gradient-like-vector-field`, `prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold`, `prop-proper-morse-slabs-give-complete-connecting-trajectories` |
| H013 | N §2.4, “Morse--Smale flows” — gradient dynamics part | included | `lem-a-limit-point-of-a-gradient-trajectory-is-critical`, `lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits`, `lem-morse-trajectories-have-positive-energy-drop` |
| H014 | C §13.2, “Stable and unstable manifolds” | included | `def-stable-and-unstable-sets-of-a-critical-point`, `thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point`, `thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces` |
| H015 | Audin--Damian §2.2, “Transversality of stable and unstable manifolds” | included | `def-morse-smale-pair`, `thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function`, `thm-relative-morse-smale-perturbation-of-a-gradient-like-field` |
| H016 | C §13.3, “The Morse--Smale condition” | included | `def-parametrized-morse-trajectory-space`, `prop-parametrized-morse-trajectory-space-is-a-manifold`, `cor-no-morse-smale-trajectories-for-nonpositive-index-drop` |
| H017 | C §13.4, “The moduli space of gradient flows” | included | `def-unparametrized-morse-trajectory-moduli-space`, `thm-unparametrized-trajectory-space-is-a-smooth-manifold`, `lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories` |
| H018 | Ritter Lecture 9, “Morse--Smale transversality” | included | `lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator`, `prop-index-one-trajectory-spaces-are-zero-dimensional`, `prop-index-two-trajectory-spaces-are-one-dimensional` |
| H019 | C §12.3, “The Regular Interval Theorem” | included | `lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time`, `thm-regular-interval-diffeomorphism`, `cor-regular-sublevels-are-diffeomorphic` |
| H020 | H Ch. 6 §2, “Differential equations and regular level surfaces” | included | `prop-deformation-lemma-for-a-critical-point-free-slab`, `rem-compact-critical-band-is-the-local-handle-theorem-hypothesis` |
| H021 | C §12.4, “Passing through a critical value” | included | `lem-local-morse-sublevel-pair-is-a-handle-pair`, `lem-gradient-flow-identifies-the-local-and-global-attaching-regions`, `thm-one-critical-point-handle-attachment` |
| H022 | H Ch. 6 §3, “Passing critical levels and attaching cells” | included | `cor-one-critical-point-cell-attachment-homotopy-type`, `cor-relative-homology-of-a-single-handle-pair`, `prop-simultaneous-attachment-at-a-morse-critical-value` |
| H023 | N §2.1, “Surgery, handles and cobordisms” | included | `def-k-handle-core-cocore-attaching-region-and-belt-sphere`, `def-attaching-a-smooth-handle-with-corner-rounding`, `cor-unstable-disk-is-the-handle-core` |
| H024 | N §2.2, “Topology of sublevel sets” | included | `thm-one-critical-point-handle-attachment`, `cor-index-zero-handles-create-components`, `cor-index-n-handles-cap-boundary-spheres` |
| H025 | W §5.1, “Existence” of handle decompositions | included | `def-smooth-cobordism-triad-for-morse-theory`, `def-morse-function-adapted-to-a-cobordism`, `thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms` |
| H026 | W §5.2, “Normalisation” | included | `def-handle-decomposition-relative-to-the-incoming-boundary`, `thm-morse-functions-and-handle-decompositions-correspond`, `lem-a-handle-decomposition-gives-a-relative-cw-complex` |
| H027 | MH §4, “Rearrangement of cobordisms” | included | `lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged`, `thm-morse-rearrangement-by-index`, `thm-self-indexing-morse-function-existence` |
| H028 | P Ch. 5, “Handle decompositions” | included | `lem-handles-of-equal-index-can-be-attached-on-one-level`, `prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles`, `prop-dual-elimination-of-top-index-handles` |
| H029 | W named result, “Dual handle decomposition” | included | `def-dual-handle-decomposition`, `thm-handle-duality-from-negating-a-morse-function` |
| H030 | W §5.4, “Modifying decompositions” | included | `def-geometric-cancelling-handle-pair`, `thm-handle-cancellation`, `thm-creation-of-a-cancelling-handle-pair` |
| H031 | MH §5, “A cancellation theorem” | included | `lem-one-intersection-gives-the-standard-local-cancelling-model`, `prop-morse-cancellation-criterion-via-a-unique-connecting-orbit`, `lem-cancellation-modification-can-be-supported-in-a-trajectory-neighbourhood` |
| H032 | MH §6, “A stronger cancellation theorem” | included | `def-attaching-belt-intersection-matrix-of-adjacent-index-handles`, `lem-geometric-cancellation-is-a-unit-entry-in-the-handle-matrix`, `lem-algebraic-cancellation-does-not-yet-give-geometric-cancellation` |
| H033 | P Ch. 4 §3, “Rearrangement” | included | `def-handle-slide-of-one-k-handle-over-another`, `lem-handle-slides-preserve-the-relative-diffeomorphism-type`, `lem-handle-slides-act-by-elementary-basis-change-on-handle-chains` |
| H034 | Lück named result, “Reducing the handlebody decomposition” | included | `prop-elementary-matrix-operations-are-realized-by-handle-slides`, `rem-elementary-moves-do-not-constitute-full-cerf-theory-here` |
| H035 | N §2.3, “The Morse inequalities” | included | `def-morse-numbers-and-morse-polynomial`, `def-poincare-polynomial-over-a-field`, `thm-morse-polynomial-identity` |
| H036 | C §12.5, “Homotopy equivalence to a CW complex and the Morse inequalities” | included | `lem-exact-sequence-dimension-inequality`, `lem-one-handle-changes-relative-homology-in-one-degree`, `cor-weak-morse-inequalities`, `cor-strong-morse-inequalities` |
| H037 | Audin--Damian §4.4, “Morse inequalities” | included | `cor-morse-euler-characteristic-identity`, `cor-total-critical-point-lower-bound`, `def-perfect-morse-function-over-a-field` |
| H038 | Ritter Lecture 21, “Morse homology and Morse inequalities” | included | `lem-perfectness-is-equivalent-to-vanishing-morse-correction-polynomial`, `prop-relative-morse-inequalities-for-a-cobordism`, `prop-morse-handle-chain-complex-computes-singular-homology` |
| H039 | Audin--Damian §3.1, “The Morse complex over Z/2” | included | `def-mod-two-morse-chain-group`, `def-mod-two-morse-differential`, `thm-mod-two-morse-differential-squares-to-zero` |
| H040 | Audin--Damian §3.2, “Compactness and broken trajectories” | included | `def-broken-morse-trajectory`, `def-geometric-convergence-to-a-broken-morse-trajectory`, `thm-morse-trajectory-compactness-up-to-breaking` |
| H041 | N §4.4, “Compactification of spaces of trajectories” | included | `lem-breaking-length-is-bounded-by-index-drop`, `cor-index-one-trajectory-moduli-spaces-are-finite`, `thm-index-two-compactification-is-a-compact-one-manifold-with-boundary` |
| H042 | Ritter Lectures 17--18, “Compactness and gluing” | included | `lem-gluing-broken-index-two-trajectories-gives-collar-ends`, `thm-mod-two-morse-differential-squares-to-zero` |
| H043 | N §4.5, “Orientations” | included | `def-orientation-line-of-a-morse-critical-point`, `lem-unstable-orientations-induce-trajectory-moduli-orientations`, `def-signed-morse-differential-over-the-integers` |
| H044 | Audin--Damian §3.3, “Orientations of moduli spaces” | included | `lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli`, `thm-integral-morse-differential-squares-to-zero`, `rem-morse-homology-over-the-integers-does-not-require-orientability-of-m` |
| H045 | Audin--Damian §3.5, “Manifolds with boundary and cobordisms” | included | `prop-relative-morse-complex-for-an-adapted-cobordism`, `rem-compactness-up-to-breaking-needs-closedness-or-a-proper-compactness-package` |
| H046 | Audin--Damian §4.1, “Morse homology” | included | `def-morse-homology-of-a-morse-smale-pair`, `def-canonical-morse-homology-of-a-closed-manifold` |
| H047 | Audin--Damian §4.6, “Continuation” | included | `def-regular-continuation-datum-between-morse-smale-pairs`, `lem-continuation-energy-identity`, `def-continuation-chain-map`, `thm-continuation-count-is-a-chain-map` |
| H048 | Ritter Lectures 19--20, “Continuation maps and chain homotopies” | included | `thm-continuation-trajectories-are-compact-up-to-breaking`, `def-two-parameter-continuation-homotopy`, `thm-homotopic-continuation-data-give-chain-homotopic-maps` |
| H049 | Audin--Damian named results, “Composition and inverse continuation maps” | included | `thm-continuation-composition-law-on-homology`, `thm-reverse-continuation-is-an-inverse-on-morse-homology` |
| H050 | Audin--Damian §4.9, “Comparison with singular homology” | included | `thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex`, `thm-morse-homology-is-naturally-isomorphic-to-singular-homology`, `cor-morse-homology-recovers-the-morse-inequalities` |

### 9.2 Intersection, Euler and Lefschetz theory

| key | source heading read | disposition | proposed item ids produced |
|---|---|---|---|
| H051 | GP Ch. 2 §4, “Intersection theory mod 2” | included | `def-transverse-complementary-dimensional-intersection-set`, `def-mod-two-intersection-number`, `thm-mod-two-intersection-number-is-homotopy-invariant` |
| H052 | GP named result, “Boundary theorem for one-manifolds” | included | `lem-compact-transverse-complementary-intersections-are-finite`, `lem-boundary-of-a-compact-one-manifold-has-even-cardinality` |
| H053 | GP Ch. 3 §3, “Oriented intersection number” | included | `def-local-oriented-intersection-sign`, `def-oriented-intersection-number`, `thm-oriented-intersection-number-is-homotopy-invariant` |
| H054 | Stanford Lecture 14, “Orientations and transverse preimages” | included | `lem-preimage-orientation-agrees-with-the-local-intersection-sign`, `lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs` |
| H055 | Stanford Lecture 15, “Intersection theory” | included | `thm-intersection-number-under-factor-interchange`, `prop-two-map-intersection-as-a-diagonal-preimage`, `cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary` |
| H056 | H Ch. 5 §2, “Intersection numbers and the Euler characteristic” | included | `cor-oriented-intersection-reduces-to-mod-two-intersection`, `cor-negative-expected-dimension-generic-intersections-are-empty`, `rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact` |
| H057 | C §9.2, “The intersection product” | included | `def-geometric-intersection-pairing-on-a-closed-oriented-manifold`, `lem-geometric-intersection-descends-through-oriented-cobordism-of-cycles`, `thm-geometric-intersection-equals-the-poincare-dual-cup-pairing` |
| H058 | C §9.2.1, “Intersection theory via differential forms” | included | `rem-cap-product-order-awaits-the-at-sign-convention`, `prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual` |
| H059 | C §9.3.2, “The Euler class and self intersections” | included | `def-self-intersection-number-of-an-oriented-submanifold`, `lem-normal-push-off-zeros-are-self-intersection-points`, `thm-self-intersection-is-the-euler-number-of-the-normal-bundle` |
| H060 | Stanford Lecture 16, “Euler class and zero loci” | included | `lem-normal-bundle-of-the-diagonal-is-canonically-tm`, `cor-diagonal-self-intersection-is-the-euler-number-of-tm`, `prop-mod-two-self-intersection-needs-no-orientation` |
| H061 | M §6, “Vector fields and the Euler number” | included | `def-isolated-zero-and-local-index-of-a-vector-field`, `lem-vector-field-index-is-independent-of-chart-ball-and-trivialization`, `thm-poincare-hopf-for-closed-manifolds` |
| H062 | M named result, “Poincare--Hopf theorem with boundary” | included | `thm-poincare-hopf-with-outward-pointing-boundary`, `rem-the-outward-boundary-hypothesis-cannot-be-replaced-by-nonzero-on-the-boundary` |
| H063 | GP Ch. 3 §5, “Vector fields and the Poincare--Hopf theorem” | included | `def-nondegenerate-zero-of-a-vector-field`, `thm-index-of-a-nondegenerate-vector-field-zero`, `lem-local-index-is-additive-under-a-transverse-perturbation` |
| H064 | GP Ch. 3 §7, “The Euler characteristic and triangulations” | included | `def-euler-characteristic-of-a-compact-manifold`, `prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions`, `cor-closed-odd-dimensional-manifolds-have-zero-euler-characteristic` |
| H065 | Stanford Lecture 17, “Poincare--Hopf and Lefschetz” — vector-field part | included | `prop-vector-field-zero-index-is-a-zero-section-intersection-number`, `cor-nowhere-zero-vector-field-forces-zero-euler-characteristic`, `thm-converse-poincare-hopf-for-nowhere-zero-fields` |
| H066 | GP Ch. 3 §4, “Lefschetz fixed-point theory” | included | `lem-fixed-points-are-graph-diagonal-intersections`, `def-nondegenerate-fixed-point`, `lem-graph-transversality-is-fixed-point-nondegeneracy` |
| H067 | GP named result, “Local Lefschetz index” | included | `def-local-fixed-point-index`, `lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent`, `thm-index-of-a-nondegenerate-fixed-point` |
| H068 | Stanford Lecture 17, “The Lefschetz fixed-point theorem” | included | `def-algebraic-lefschetz-number`, `thm-lefschetz-hopf-index-formula`, `lem-diagonal-class-expansion-gives-the-alternating-trace` |
| H069 | *Lectures on Fixed Point Theory*, Lecture II, “The Lefschetz fixed point theorem” | included | `lem-local-fixed-point-index-is-additive-under-perturbation`, `def-global-geometric-lefschetz-number`, `thm-lefschetz-fixed-point-theorem` |
| H070 | GP named result, “Poincare--Hopf from Lefschetz” | included | `cor-lefschetz-number-of-the-identity-is-the-euler-characteristic`, `prop-small-time-flow-fixed-point-indices-agree-with-vector-field-zero-indices`, `rem-isolated-does-not-imply-nondegenerate` |

### 9.3 Cobordism, Thom spaces, characteristic numbers and signature

| key | source heading read | disposition | proposed item ids produced |
|---|---|---|---|
| H071 | F Lecture 1, “Bordism” | included | `def-unoriented-smooth-cobordism-of-closed-manifolds`, `def-oriented-smooth-cobordism`, `def-null-cobordant-closed-manifold` |
| H072 | F named results, “Cylinder, dual and composite bordisms” | included | `lem-cylinders-give-reflexivity-of-cobordism`, `lem-reversing-a-cobordism-gives-symmetry`, `lem-collar-gluing-and-corner-smoothing-give-transitivity` |
| H073 | F Lecture 1, “Disjoint union and the abelian group structure” | included | `def-unoriented-and-oriented-bordism-groups`, `thm-disjoint-union-makes-bordism-classes-abelian-groups`, `prop-zero-dimensional-bordism-groups` |
| H074 | F Lecture 2, “Cartesian product and ring structure” | included | `lem-product-boundary-formula-for-oriented-manifolds`, `thm-cartesian-product-makes-bordism-a-graded-ring` |
| H075 | MS Ch. 17.1, “Smooth manifolds-with-boundary” | included | `thm-smooth-cobordism-is-an-equivalence-relation`, `prop-boundaries-have-zero-stiefel-whitney-numbers` |
| H076 | MS Ch. 17.2, “Oriented cobordism” | included | `prop-oriented-boundaries-have-zero-pontryagin-numbers-and-signature`, `rem-bordism-groups-here-are-geometric-not-generalized-homology-constructions` |
| H077 | MS Ch. 18.1, “The Thom space of a Euclidean vector bundle” | included | `def-disk-bundle-sphere-bundle-and-thom-space`, `lem-thom-space-is-independent-of-the-bundle-metric-up-to-canonical-homeomorphism`, `prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product` |
| H078 | MM Ch. III named result, “Thom space and suspension” | included | `rem-thom-space-empty-and-rank-zero-conventions`, `lem-stabilizing-a-normal-bundle-suspends-its-thom-space` |
| H079 | MS Ch. 18.3, “Regular values and transversality” — normal-preimage application | included | `prop-transverse-preimage-carries-a-pulled-back-normal-structure`, `lem-based-homotopies-transverse-to-the-zero-section-give-normal-cobordisms` |
| H080 | MS Ch. 18.4, “The main theorem” — stable normal data | included | `def-stable-normal-bundle-of-a-compact-smooth-manifold`, `thm-stable-normal-bundle-is-independent-of-the-embedding` |
| H081 | F Lecture 10, “Thom structures and collapse” | included | `def-pontryagin-thom-collapse-of-an-embedded-submanifold`, `lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint`, `lem-collapse-map-is-independent-of-tubular-neighbourhood-and-radius-up-to-based-homotopy` |
| H082 | F named result, “Collapse and the Thom class” | included | `def-thom-class-and-thom-isomorphism-interface`, `prop-collapse-pullback-of-the-thom-class-is-the-poincare-dual`, `rem-thom-spectrum-construction-is-not-minted-in-dt` |
| H083 | F Lecture 2, “Framed bordism” | included | `def-framing-of-a-normal-bundle`, `def-framed-cobordism-of-embedded-submanifolds`, `lem-framed-cobordism-is-an-equivalence-relation` |
| H084 | F Lecture 2, “The Pontrjagin--Thom construction” | included | `prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product`, `def-pontryagin-thom-map-of-a-framed-submanifold`, `lem-changing-framed-tube-data-changes-the-pontryagin-thom-map-by-based-homotopy` |
| H085 | M Ch. 7, “Framed cobordism” | included | `def-framed-regular-preimage-of-a-map-to-a-sphere`, `lem-regular-value-choice-does-not-change-the-framed-cobordism-class`, `lem-homotopic-sphere-maps-have-framed-cobordant-regular-preimages` |
| H086 | F Lecture 3, “Proof of Pontrjagin--Thom” | included | `lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps`, `lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold`, `lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map` |
| H087 | Ranicki §6.2, “Framed cobordism and homotopy groups” | included | `thm-pontryagin-thom-correspondence-in-fixed-codimension`, `thm-stable-pontryagin-thom-identifies-framed-bordism-with-stable-stems`, `rem-normal-framing-stable-normal-framing-and-tangential-framing-are-distinct-data` |
| H088 | F Lecture 2, “The Hopf degree theorem” | included | `def-framing-sign-of-a-zero-dimensional-regular-preimage`, `lem-oppositely-framed-points-are-framed-null-cobordant-in-pairs`, `thm-oriented-zero-dimensional-framed-bordism-is-the-integers` |
| H089 | M Ch. 8, “The Hopf theorem” | included | `thm-hopf-degree-classification-for-oriented-domains`, `thm-hopf-mod-two-degree-classification-for-nonorientable-domains`, `lem-bordism-of-regular-preimages-produces-a-homotopy-of-sphere-maps` |
| H090 | GP Ch. 3 §6, “The Hopf degree theorem” | included | `lem-pontryagin-thom-signed-preimage-count-equals-the-dg-degree`, `lem-every-integer-degree-is-realized-by-a-map-to-the-sphere`, `cor-maps-between-oriented-spheres-are-homotopic-iff-their-degrees-agree` |
| H091 | MS Ch. 16.1--16.3, “Chern and Pontryagin numbers” | included | `def-stiefel-whitney-number-of-a-closed-manifold`, `def-pontryagin-number-of-a-closed-oriented-manifold`, `lem-characteristic-number-degree-constraint` |
| H092 | MS Ch. 16.5, “A product formula” | included | `lem-stiefel-whitney-numbers-ignore-orientation-and-pontryagin-numbers-change-with-it`, `lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas` |
| H093 | F Lecture 1, “Characteristic numbers are bordism invariants” | included | `lem-stable-tangent-bundle-of-an-oriented-boundary-is-the-restriction-of-tw`, `thm-characteristic-numbers-are-cobordism-invariants`, `cor-all-relevant-characteristic-numbers-vanish-on-null-cobordant-manifolds` |
| H094 | TW §13, “Determination of the unoriented cobordism ring” | included | `thm-thom-stiefel-whitney-number-detection-of-unoriented-bordism`, `lem-pontryagin-thom-converts-bordism-detection-to-a-thom-space-homotopy-problem` |
| H095 | MS Ch. 18.4, “The main theorem” — rational oriented part | included | `thm-rational-oriented-bordism-is-detected-by-pontryagin-numbers`, `rem-pontryagin-numbers-do-not-detect-integral-oriented-bordism-torsion` |
| H096 | MS Ch. 16.6, “Linear independence of Pontryagin numbers” | included | `prop-products-of-complex-projective-spaces-span-rational-oriented-bordism`, `lem-partition-triangularity-of-projective-space-characteristic-numbers` |
| H097 | F Lecture 11, “Definition of signature” | included | `def-middle-dimensional-intersection-form`, `lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate`, `def-signature-of-a-closed-oriented-four-k-manifold` |
| H098 | F Lecture 11, “Signature as a bordism invariant” | included | `lem-signature-is-independent-of-basis-and-field-extension-from-rationals-to-reals`, `thm-signature-is-an-oriented-cobordism-invariant`, `lem-signature-is-additive-under-disjoint-union-and-orientation-reversal` |
| H099 | MS Ch. 19.1, “Multiplicative characteristic classes” | included | `thm-signature-is-multiplicative-under-cartesian-products`, `def-hirzebruch-l-polynomials`, `def-total-l-class-of-a-smooth-manifold` |
| H100 | F Lecture 12, “The Hirzebruch signature theorem” | included | `lem-l-genus-is-an-oriented-rational-bordism-ring-homomorphism`, `lem-signature-and-l-genus-agree-on-complex-projective-spaces`, `lem-signature-and-l-genus-agree-on-products-of-complex-projective-spaces` |
| H101 | MS Ch. 19, “Multiplicative sequences and the signature theorem” | included | `thm-hirzebruch-signature-theorem`, `cor-four-dimensional-signature-formula`, `cor-eight-dimensional-signature-formula`, `cor-signature-theorem-imposes-pontryagin-number-congruences` |

### 9.4 Surgery, h-/s-cobordism, immersions and embeddings

| key | source heading read | disposition | proposed item ids produced |
|---|---|---|---|
| H102 | Lück §3.4, “The surgery step” | included | `def-framed-embedded-surgery-sphere`, `def-p-surgery-on-a-smooth-m-manifold`, `lem-surgery-gluing-has-a-canonical-smooth-structure-up-to-diffeomorphism` |
| H103 | MH §3, “Elementary cobordisms” | included | `def-surgery-trace-cobordism`, `thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold`, `def-dual-surgery-sphere`, `thm-surgery-is-reversed-by-dual-surgery` |
| H104 | Ranicki §10.1, “Surgery on normal maps” | included | `def-degree-one-normal-map-for-the-surgery-program`, `prop-surgery-on-a-normal-map-preserves-its-normal-bordism-class` |
| H105 | Ranicki §10.3, “Kernels and the effect of surgery” | included | `lem-p-surgery-kills-the-represented-pi-p-class-when-p-is-below-the-middle`, `prop-homology-effect-of-surgery-away-from-the-middle-dimensions`, `lem-framing-obstruction-lives-in-the-normal-bundle-of-the-surgery-sphere` |
| H106 | Ranicki §10.4, “Surgery below the middle dimension” | included | `prop-surgery-below-the-middle-dimension-improves-connectivity`, `lem-relative-hurewicz-and-general-position-produce-surgery-spheres`, `lem-stable-normal-data-supplies-framings-below-the-middle-dimension` |
| H107 | Ranicki §7.2, “Algebraic and geometric intersections” | included | `def-whitney-circle-for-a-pair-of-intersection-points`, `lem-opposite-local-signs-give-the-compatible-whitney-circle-framing`, `lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle` |
| H108 | Ranicki §7.3, “The Whitney trick” | included | `def-whitney-disk-and-clean-framed-whitney-disk`, `lem-general-position-makes-a-whitney-disk-embedded-and-interior-disjoint-in-the-stable-range`, `lem-whitney-disk-framing-obstruction-can-be-corrected-under-the-standard-high-dimensional-hypotheses` |
| H109 | Juhasz §2.2, “The Whitney trick” | included | `def-local-whitney-move`, `thm-whitney-move-removes-a-cancelling-pair-of-intersections`, `thm-high-dimensional-whitney-trick` |
| H110 | MH §6, “A stronger cancellation theorem” — Whitney realization | included | `thm-vanishing-algebraic-intersection-can-be-realized-by-geometric-disjunction-in-the-simply-connected-stable-range`, `cor-mod-two-evenness-does-not-by-itself-supply-a-whitney-move` |
| H111 | Lück Ch. 1, “Handlebody decompositions and CW structures” | included | `def-h-cobordism`, `lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends`, `prop-h-cobordisms-admit-adapted-ordered-handle-decompositions` |
| H112 | MH §8, “Elimination of critical points of index 0 and 1” | included | `lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism`, `lem-duality-eliminates-top-and-cotop-handles` |
| H113 | MH §7, “Cancellation in the middle dimensions” | included | `lem-handle-trading-concentrates-an-acyclic-simply-connected-presentation-in-two-adjacent-middle-indices`, `def-middle-handle-intersection-matrix-of-an-h-cobordism`, `lem-acyclicity-makes-the-simply-connected-middle-handle-matrix-unimodular` |
| H114 | Lück named result, “Reducing the handlebody decomposition” | included | `lem-handle-slides-reduce-a-unimodular-middle-handle-matrix-to-the-identity`, `lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically`, `lem-middle-handle-pairs-with-one-geometric-intersection-cancel` |
| H115 | MH §9, “The h-cobordism theorem and applications” | included | `thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary`, `thm-smooth-simply-connected-h-cobordism-theorem`, `cor-high-dimensional-simply-connected-h-cobordant-manifolds-are-diffeomorphic` |
| H116 | Lück Ch. 1, “Handlebody decompositions and Whitehead groups” | included | `def-based-handle-chain-complex-over-the-fundamental-group-ring`, `lem-h-cobordism-handle-complex-is-acyclic-over-the-group-ring` |
| H117 | Lück §2.1, “The Whitehead group” | included | `def-whitehead-torsion-interface-for-a-finite-based-acyclic-complex`, `def-simple-homotopy-equivalence`, `rem-whitehead-group-construction-remains-at-owned` |
| H118 | Lück §2.2, “Torsion of a finite based acyclic free complex” | included | `def-whitehead-torsion-of-an-h-cobordism`, `lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion`, `thm-whitehead-torsion-of-an-h-cobordism-is-well-defined` |
| H119 | Ranicki §8.2, “The h- and s-cobordism theorems” | included | `lem-vanishing-torsion-allows-algebraic-diagonalization-by-simple-handle-moves`, `lem-group-labelled-whitney-tricks-realize-the-diagonalized-handle-complex`, `thm-smooth-s-cobordism-theorem` |
| H120 | Lück named result, “Realisation of Whitehead torsion” | included | `cor-h-cobordism-theorem-when-the-whitehead-group-vanishes`, `prop-realization-of-whitehead-torsion-by-h-cobordisms`, `rem-torsion-from-the-opposite-boundary-involves-the-standard-involution-and-dimension-sign` |
| H121 | Francis Lecture 3, “Immersion theory” | included | `def-formal-immersion-between-smooth-manifolds`, `def-space-of-immersions-and-space-of-formal-immersions`, `def-derivative-map-from-immersions-to-formal-immersions` |
| H122 | Francis Lectures 5--6, “The Hirsch--Smale theorem” — disk/fibration lemmas | included | `lem-parametric-immersion-extension-on-a-disk`, `lem-restriction-of-formal-immersion-data-has-the-parametric-lifting-property` |
| H123 | Francis Lectures 5--6, “The Hirsch--Smale theorem” — handle induction | included | `lem-open-manifolds-admit-handle-filtrations-without-top-index-handles`, `lem-formal-immersion-homotopies-extend-over-a-subcritical-handle`, `thm-smale-hirsch-for-open-source-manifolds` |
| H124 | Ranicki §7.4, “The Smale--Hirsch classification of immersions” | included | `lem-positive-codimension-thickening-reduces-closed-sources-to-the-open-case`, `thm-smale-hirsch-immersion-theorem`, `cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes` |
| H125 | C §7.2, “Obstructions and the Hirsch--Smale theorem” | included | `def-normal-bundle-of-a-formal-immersion`, `lem-formal-immersion-gives-the-tangent-normal-bundle-identity`, `rem-smale-hirsch-is-a-weak-homotopy-equivalence-not-asserted-as-an-actual-homotopy-equivalence` |
| H126 | Cohen immersion notes §1, “Vector bundle obstructions” | included | `def-gauss-frame-map-of-an-immersion-into-euclidean-space`, `prop-euclidean-formal-immersions-are-sections-of-a-stiefel-bundle` |
| H127 | Francis Lecture 9, “Euclidean immersions” | included | `def-rotation-number-of-an-immersed-oriented-circle-in-the-plane`, `thm-whitney-graustein-classification-of-plane-circle-immersions`, `thm-smale-classification-of-sphere-immersions-in-euclidean-space` |
| H128 | Francis Lecture 10, “Sphere eversion” | included | `lem-standard-and-reflected-two-sphere-immersions-have-homotopic-formal-data-in-r-three`, `thm-sphere-eversion`, `rem-sphere-eversion-cannot-be-an-isotopy-through-embeddings` |
| H129 | H Ch. 8 §1, “Extending isotopies” | included | `def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy`, `lem-embedding-isotopy-has-a-well-defined-velocity-field-along-its-image`, `lem-an-isotopy-velocity-field-extends-over-a-tubular-neighbourhood` |
| H130 | Juhasz §1.3, “Isotopy extension” | included | `lem-compactness-allows-a-cutoff-to-produce-a-compactly-supported-time-dependent-field`, `lem-the-extended-time-dependent-field-has-a-global-time-one-flow`, `thm-isotopy-extension` |
| H131 | W §6.2, “Geometry of immersions” | included | `def-self-transverse-immersion-and-double-point-locus`, `lem-double-point-locus-has-expected-dimension-two-m-minus-n`, `cor-a-generic-proper-immersion-is-an-embedding-when-n-is-greater-than-two-m` |
| H132 | W §6.4, “Embeddings and immersions in the metastable range” | included | `prop-whitney-disjunction-removes-algebraically-cancelling-double-points-in-the-stable-range`, `def-primary-double-point-obstruction-to-removing-self-intersections`, `rem-metastable-embedding-classification-requires-additional-deleted-product-machinery` |
| H133 | Cohen immersion notes §2, “Normal bundle and characteristic obstructions” | included | `def-stable-normal-inverse-of-the-tangent-bundle`, `lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle`, `prop-smale-hirsch-makes-rank-reduction-sufficient-for-euclidean-immersion-in-positive-codimension` |
| H134 | Cohen named result, “Inverse Stiefel--Whitney classes” | included | `lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class`, `cor-high-normal-stiefel-whitney-classes-obstruct-low-codimension-immersions`, `thm-real-projective-space-stiefel-whitney-nonimmersion-obstruction` |
| H135 | Skopenkov §2, “The Whitney obstruction” | included | `prop-euler-class-of-an-oriented-even-rank-normal-bundle-controls-self-intersection`, `cor-embedding-obstructions-include-all-immersion-normal-class-obstructions`, `rem-characteristic-class-vanishing-is-only-necessary-for-embedding` |
| H136 | MS Ch. 15, “Pontryagin classes” — normal application | included | `lem-oriented-normal-pontryagin-class-is-the-inverse-of-the-tangent-pontryagin-class`, `cor-high-normal-pontryagin-classes-obstruct-oriented-immersions` |

### 9.5 Foliations and exotic smooth structures

| key | source heading read | disposition | proposed item ids produced |
|---|---|---|---|
| H137 | MMF §2.1, “Holonomy” | included | `def-local-transversal-to-a-regular-foliation`, `lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism`, `lem-holonomy-germ-is-independent-of-the-foliation-chart-chain` |
| H138 | MMF named result, “Homotopy invariance of holonomy” | included | `thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints`, `lem-holonomy-respects-path-concatenation-and-reversal`, `def-holonomy-representation-and-holonomy-group-of-a-leaf` |
| H139 | MMF named headings, “Holonomy cover” and “Holonomy groupoid” | included | `def-holonomy-cover-of-a-leaf`, `def-monodromy-groupoid-of-a-foliation`, `def-holonomy-groupoid-of-a-foliation`, `prop-isotropy-of-the-holonomy-groupoid-is-the-leaf-holonomy-group` |
| H140 | MMF §1.3, “Constructions” | included | `prop-pullback-foliation-under-a-transverse-map`, `prop-quotient-foliation-under-a-free-proper-foliated-action`, `def-suspension-foliation-of-a-group-action` |
| H141 | CC §4.2, “Foliated bundles and holonomy” | included | `prop-suspension-holonomy-is-the-germ-of-the-monodromy-action`, `rem-holonomy-is-a-germ-not-a-globally-defined-return-map`, `rem-holonomy-and-monodromy-groupoids-need-not-be-hausdorff` |
| H142 | MMF §2.3, “Local Reeb stability” | included | `def-saturated-neighbourhood-of-a-leaf`, `lem-finite-holonomy-acts-on-a-small-transverse-disk`, `def-finite-holonomy-normal-model`, `thm-local-reeb-stability` |
| H143 | MMF §2.5, “Global Reeb stability” | included | `cor-trivial-holonomy-gives-a-product-foliated-neighbourhood`, `cor-finite-fundamental-group-is-a-sufficient-not-necessary-reeb-stability-hypothesis`, `thm-global-reeb-stability-for-transversely-oriented-codimension-one-foliations` |
| H144 | MIT 18.965 §23, “Reeb's stability theorem” — sphere-leaf form | included | `lem-compact-stable-leaves-form-an-open-saturated-set`, `lem-compact-leaf-control-and-compact-ambientness-give-the-required-closedness` |
| H145 | MMF §2.6, “Thurston stability” | included | `thm-reeb-thurston-stability-for-codimension-one-leaves`, `rem-transverse-orientability-is-load-bearing-in-the-global-codimension-one-form` |
| H146 | L §1.3.6, “Reeb foliation” | included | `prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf`, `prop-gluing-two-reeb-components-gives-a-foliation-of-s-three`, `rem-compact-leaf-does-not-mean-finite-holonomy-or-finite-fundamental-group` |
| H147 | MMF §1.2, “Alternative definitions” — codimension-one form | included | `def-transversely-oriented-codimension-one-foliation-by-a-global-one-form`, `lem-frobenius-divisibility-gives-d-omega-equals-eta-wedge-omega` |
| H148 | Hurder--Langevin §3.1, “Godbillon--Vey invariant” | included | `lem-eta-wedge-d-eta-is-closed`, `lem-godbillon-vey-form-is-independent-of-the-choice-of-eta-up-to-an-exact-form`, `lem-godbillon-vey-form-is-invariant-under-rescaling-the-defining-form` |
| H149 | Hurder--Langevin §2, “Classical Godbillon--Vey background” | included | `def-godbillon-vey-class`, `cor-a-codimension-one-foliation-defined-by-a-closed-one-form-has-zero-godbillon-vey-class`, `rem-classical-godbillon-vey-requires-at-least-c-two-regularity` |
| H150 | MMF named result, “Foliated concordance invariance” | included | `thm-godbillon-vey-class-is-invariant-under-smooth-foliated-concordance` |
| H151 | CC §4.4, “Volume-preserving flows and dead ends” | included | `def-reeb-component-in-a-cooriented-three-manifold-foliation`, `def-taut-codimension-one-foliation`, `lem-a-reeb-component-obstructs-tautness`, `prop-transverse-volume-preserving-flow-implies-tautness-in-the-compact-cooriented-three-dimensional-setting` |
| H152 | CC §4.5, “Calibrations” | included | `prop-a-leafwise-positive-closed-two-form-calibrates-a-taut-foliation`, `rem-reebless-and-taut-are-not-equivalent-without-extra-hypotheses` |
| H153 | MMF §3.2, “Novikov's theorem” | included | `def-vanishing-cycle-of-a-codimension-one-foliation`, `lem-a-simple-vanishing-cycle-produces-a-compact-leaf`, `lem-the-compact-leaf-produced-by-a-vanishing-cycle-bounds-a-reeb-component` |
| H154 | CC §4.6, “Novikov's theorem” | included | `thm-novikov-reeb-component-theorem`, `cor-reebless-leaves-are-pi-one-injective-under-novikov-hypotheses`, `rem-novikov-conclusions-do-not-extend-to-arbitrary-codimension-or-noncompact-manifolds` |
| H155 | MI §1, sphere bundles over $S^4$ | included | `def-quaternionic-clutching-bundles-xi-h-j-over-s-four`, `def-milnor-sphere-bundle-m-h-j`, `lem-euler-and-first-pontryagin-classes-of-xi-h-j` |
| H156 | MI §2, the homology-sphere and topological-sphere criteria | included | `thm-h-plus-j-equals-plus-or-minus-one-gives-a-homology-seven-sphere`, `lem-milnor-sphere-bundles-with-euler-number-plus-or-minus-one-are-simply-connected`, `cor-milnor-sphere-bundles-with-euler-number-plus-or-minus-one-are-homotopy-seven-spheres`, `lem-two-disk-complement-in-a-homotopy-sphere-is-an-h-cobordism-in-dimensions-at-least-six`, `lem-a-sphere-homeomorphism-extends-over-the-disk-by-the-alexander-trick`, `cor-milnor-homotopy-seven-spheres-are-homeomorphic-to-s-seven` |
| H157 | MI §§3--4, characteristic-number distinction | included | `lem-disk-bundle-intersection-form-and-signature-for-xi-h-j`, `lem-relative-pontryagin-number-of-the-milnor-disk-bundle-is-controlled-by-h-minus-j`, `thm-milnor-characteristic-number-congruence-is-a-boundary-diffeomorphism-invariant`, `thm-milnor-constructed-manifolds-homeomorphic-but-not-diffeomorphic-to-s-seven` |
| H158 | Lück Ch. 6 §6.1, “The group of homotopy spheres” | included | `def-exotic-smooth-structure-and-exotic-sphere`, `def-smooth-homotopy-sphere`, `lem-connected-sum-of-oriented-homotopy-spheres-is-a-homotopy-sphere`, `def-theta-n-group-of-oriented-h-cobordism-classes-of-homotopy-spheres` |
| H159 | Kervaire--Milnor §1, “The group of homotopy spheres” | included | `thm-h-cobordism-identifies-theta-n-with-oriented-diffeomorphism-classes-for-n-at-least-five`, `def-b-p-n-plus-one-subgroup-of-homotopy-spheres`, `prop-homotopy-spheres-are-stably-parallelizable` |
| H160 | Kervaire--Milnor named result, computation in dimension seven | included | `thm-kervaire-milnor-theta-seven-is-cyclic-of-order-twenty-eight`, `rem-the-theta-seven-calculation-consumes-stable-stems-j-and-kervaire-milnor-arithmetic`, `rem-none-of-the-high-dimensional-exotic-sphere-results-settle-the-smooth-four-dimensional-poincare-problem` |

### 9.6 Headings read and deliberately not decomposed

These are not generic scope labels: each row names the read source heading and
the disposition specific to it.

| source heading read | disposition and heading-specific reason |
|---|---|
| N §1.3, “Morse functions on knots” | peripheral knot geometry; no later DT proof consumes it |
| N §2.6, “Morse--Bott functions” | a valuable extension, but the moment-map application is already in the DG anchor and ordinary Morse homology closes without it |
| N §2.7, “Min--max theory” | requires Lusternik--Schnirelmann/variational machinery outside the commissioned spine |
| N Ch. 3, moment maps and equivariant localisation headings | already owned by the differential-geometry predecessor, so cited rather than re-minted |
| N §§4.1--4.3, Whitney stratification headings | the compactified-trajectory consequences in §§4.4--4.5 are included; general stratification theory is not a DT dependency here |
| Audin--Damian Part II, Floer-homology chapter headings | infinite-dimensional symplectic analysis is downstream of the DG anchor and requires new compactness/transversality machinery |
| P circle-valued Morse/Novikov-homology headings after Ch. 6 | local-coefficient completions form a separate theory; ordinary real-valued Morse homology is already complete |
| GP Ch. 2 §§1--3, boundary/transversality headings | already owned by DG |
| GP Ch. 2 §§5--6, “Winding numbers and Jordan--Brouwer” and “Borsuk--Ulam” | algebraic-topology topics not needed by DT intersection counts |
| Stanford notes, “Construction of the Thom and Euler classes,” pp. 41--43 | class construction is AT-owned; only zero-locus/self-intersection applications were included |
| MS Chs. 4--15, characteristic-class construction headings | explicitly AT-owned by the seam; applications start at characteristic numbers |
| MS Ch. 18.2, “Homotopy groups modulo finite abelian groups” | stable/rational homotopy machinery is AT-owned; only its stated rational bordism consequence is consumed |
| F Lectures 6--8, classifying-space and characteristic-class construction headings | AT-owned; no duplicate definitions |
| F Lectures 13--24, bordism spectra, categories, TQFT and cobordism-hypothesis headings | higher/stable continuation beyond the geometric PT and signature applications |
| Lück Ch. 3 §§3.1--3.2, Poincare duality and Spivak normal fibration | AT interfaces, not DT constructions |
| Lück Ch. 4 §§4.2--4.8 and Ch. 5, quadratic kernels, $L$-groups and surgery exact sequence | beyond the dispatched statement/construction level for surgery |
| Ranicki Chs. 11--12, even/odd surgery obstruction groups | same surgery-theory sequel; no shortened substitute was minted |
| MH low-dimensional warnings and lens-space applications | the dimension warning is retained, but lens-space classification is peripheral |
| Ranicki §7.1, Whitney immersion and embedding theorems | already owned by DG |
| Ranicki §7.5, singularity theory | needs a separate multijet/singularity development |
| Cohen immersion notes §§3.2--5.3, Brown--Peterson, immersion conjecture and embedding calculus | substantial stable-homotopy machinery beyond the requested graduate core |
| Skopenkov §§3--8, links, knotted tori, deleted products and Haefliger--Weber calculations | advanced embedding classification; DT-27 records the boundary but does not fabricate the machinery |
| MMF basic foliation/Frobenius headings in Ch. 1 | already owned by DG |
| MMF §2.2, Riemannian foliations, and §2.4, orbifolds | specialist branches not used by holonomy/Reeb/Novikov results |
| MMF Chapters 4--6, Molino theory and Lie algebroids/groupoids | operator-algebra/global structure sequel; only elementary monodromy/holonomy groupoids were needed |
| L Part I §§4 onward, foliation $C^*$-algebras | operator-algebra track, not differential topology scaffolding |
| CC §§4.7--4.11 and Chs. 5--10, Palmeira, branching, Anosov, laminations and universal circles | three-manifold research-level continuation requiring a dedicated track |
| Hurder--Langevin §§3.2--7, Godbillon measure and hyperbolic/resilient-leaf dynamics | foliation dynamics/ergodic theory; the classical smooth invariant was fully closed in §3.1 |
| Kervaire--Milnor stable-stem, $J$-homomorphism, Bernoulli and Kervaire-invariant calculations | AT/stable-homotopy owned; the resulting $\Theta_7$ theorem is explicitly non-load-bearing |
| exotic $\mathbb R^4$, Donaldson/Freedman and gauge-theoretic exotic-manifold headings | the library has not reached gauge theory and the h-cobordism dimension hypotheses fail |

---

## 10. Choice-strength ledger

“ZF” here is relative to the library's supplied real numbers, finite-dimensional
linear algebra/calculus, and any already-authored predecessor named in the
row.  Where DT consumes a predecessor, its final authored choice ledger is
inherited rather than silently weakened.

| pair(s) | sufficient strength planned | reason and inheritance |
|---|---|---|
| DT-1, DT-3, DT-5--DT-8, DT-11--DT-15, DT-18, DT-21--DT-24, DT-32's finite clutching calculations | ZF once the displayed compact manifolds, metrics, orientations, finite handle data and AT invariants are supplied | Local normal forms, finite-dimensional ODEs, compact finite subcovers, finite handle matrices, finite intersection counts and finite cobordism gluings make no arbitrary infinite family of choices. |
| DT-2 and DT-4 genericity/existence | inherit `sard-theorem-and-transversality` and `whitney-embedding-tubular-neighbourhoods-and-approximation`; $\mathsf{AC}_\omega$ is sufficient for countable-atlas globalization, and the library's exact Baire/transversality ledger must be quoted | Residual jet/Morse--Smale perturbations use the already-scaffolded strong-topology transversality and countable organization.  Compact openness itself is ZF once finite charts and critical neighbourhoods are supplied. |
| DT-3/DT-10 noncompact proper variants | $\mathsf{AC}_\omega$ sufficient for an explicit countable exhaustion-shell construction; ZF relative to a supplied exhaustion and all selected local data | The scaffold never selects one trajectory or minimizer from each of an arbitrary family.  Properness/completeness, not a hidden choice principle, supplies compactness. |
| DT-9--DT-10 moduli, orientations and continuation | ZF relative to supplied regular Morse--Smale/continuation data; existence of generic data inherits the previous row | Compactness extracts subsequences in the supplied finite-dimensional metric setting and gluing constructs specified solutions.  Orientation lines avoid selecting an orientation of every component of an arbitrary family. |
| DT-8, DT-10--DT-14, DT-19--DT-20, DT-23--DT-24 | inherit the exact AT ledgers for singular/cellular homology, Poincare duality, classifying spaces, characteristic classes, stable homotopy and simple homotopy | DT does not re-prove these algebraic constructions by Zorn or basis selection.  All additional DT evaluations are finite once the AT objects are supplied. |
| DT-15--DT-17 | ZF for each supplied embedding, tube, framing and compact cobordism; embedding/tubular existence inherits `whitney-embedding-tubular-neighbourhoods-and-approximation`, stable homotopy inherits AT | Independence proofs use explicit isotopies/homotopies, not simultaneous representatives for all classes. |
| DT-25--DT-28 | ZF for a compact finite handle filtration and supplied bundle data; $\mathsf{AC}_\omega$ sufficient for countable handle induction on an open second-countable manifold; classifying-space computations inherit AT | The relative parametric disk/handle extensions are constructive one handle at a time.  No actual homotopy equivalence of mapping spaces is chosen from the weak equivalence. |
| DT-29--DT-31 | local holonomy/Godbillon--Vey calculations are ZF; global leaf/countable plaque organization inherits `distributions-integral-manifolds-and-the-frobenius-theorem`'s $\mathsf{AC}_\omega$-sufficient bound; holonomy covers and $\pi_1$ statements inherit AT covering theory | A single compact leaf uses a finite chart chain.  The scaffold does not select transversals or orientations simultaneously over an arbitrary set of leaves. |
| DT-32 classification statements | finite Milnor-bundle construction is ZF relative to AT class formulas; $\Theta_7$ and $bP_8$ calculations inherit AT stable-homotopy choices and are not supplied here | The non-load-bearing order-$28$ theorem is cited rather than “proved” by an implicit choice of stable representatives. |

Two prohibitions follow.  “Orientable” never silently selects orientations on
an arbitrary family of components; orientation is supplied structure.  A
residual subset is not accompanied by a selected point unless a concrete
existence construction or the inherited Baire/transversality theorem supplies
one.

---

## 11. Verified measurements, handoff, and unresolved seams

### 11.1 Measurements recomputed from this finished file

The task supplied no approximate DT numerator or denominator to correct.  The
owned file was absent at start, so the verified **before count is 0 proposed
DT item ids**.  The finished file contains **668 distinct proposed item ids**;
all 668 item-definition rows are unique and all 668 carry statement and proof
component provenance.

The canonical denominator is **160 `included` source-heading disposition
rows** in §9.  It is intentionally not a count of chapter bundles or source
mentions.  The resulting decomposition ratio is

\[
\frac{668\text{ proposed items}}{160\text{ included headings}}
=4.175\approx\mathbf{4.18\times}.
\]

There are **32 A/B pairs**.  The largest A page is **DT-32 with 23 items**.
No A page exceeds 60, so **no split was required**.  The source
URLs used here span **23 distinct hosts**, of which **22 are independent**
(the Leiden notes explicitly corroborate and derive from MMF).  DT-30 is the sole
matrix row without two independent full treatments of its *general* theorem;
the dash in §8 is deliberate.

### 11.2 Mechanical audit record

- 668 item-definition rows; 668 distinct ids; no duplicate proposed id.
- 668 item-definition rows; 668 provenance suffixes.
- Provenance values used: `literature-derived`, `not-applicable`, and
  `not-supplied` only.  The three `not-supplied` rows are non-load-bearing.
- 32 distinct `DT-n` pair labels, numbered consecutively from 1.
- 160 atomic inclusion-bearing harvest rows, each with an item-id crosswalk.
- No A page above 23 items; no B item is a dependency target.
- Permitted-scope repository collision search found no proposed item or page id
  outside this owned file.  The prohibited concurrent AT scaffold remains an
  orchestrator-owned splice-time collision check.

### 11.3 Refused mints and seam rulings

No DG-owned foundation was re-minted.  No AT-owned singular/cohomology,
Poincare duality, classifying-space, characteristic-class, Thom-isomorphism,
stable-homotopy or Whitehead-group construction was re-minted.  The full
surgery exact sequence/$L$-groups, full metastable embedding classification,
and the $\Theta_7$ order computation remain sourced non-load-bearing statements
or explicit sequels.  Morse--Bott/equivariant/Floer theory, four-dimensional
surgery/gauge theory, operator-algebraic foliation theory and advanced
three-manifold foliation theory were refused under the heading-specific
dispositions in §§6 and 9.6.

### 11.4 Build handoff and blockers recorded without prompting

Before authoring any DT page, the orchestrator must replace every descriptive
`AT-n[...]` token by the actual concurrent AT relative label and then exact
authored item ids, and rerun the global item/page-id collision check including
AT.  In particular, reconcile AT's cap-product order,
Pontryagin sign and Thom-class normalization before DT-12, DT-16--DT-20,
DT-28 or DT-32 is built.  All named DG predecessors likewise still have empty
live `items` arrays and must be authored first.

The remaining source blocker is DT-30: only MMF was obtained as an independent
full treatment of general local Reeb stability.  Calegari and MIT verify
narrower codimension-one/sphere-leaf forms, but were not misreported as a
second general treatment.  This does not change the mathematical scaffold;
it is an explicit source-depth exception for the builder/auditor.

At build time preserve the hypotheses printed here: compact/closed versus
proper noncompact, integral orientation versus mod two, residual versus open
dense, $n\ge5$ boundary dimension for h-/s-cobordism, the smooth
four-dimensional exclusions, and actual versus stable normal framings.
