# Finite two-collar cover in dimension five

NEW author construction from the fully read primary Luft proof. It has not received independent review. The precise accepted raw operation is consumed only as a Statement; no accepted proof body was read.

## Sources actually retrieved and read

E. Luft, *On Contractible Open Topological Manifolds*, Inventiones4 (1967),192–201, DOI10.1007/BF01425755. The complete primary issue was retrieved from https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0004/LOG_0016.pdf . The full10-page article, including the copied GDZ terms page, is retained in `sources/luft-contractible-open-manifolds-full.pdf`; the whole issue in `sources/inventiones-4-issue3-primary.pdf`. Every article page192–201 was visually read, with durable images `sources/luft-192.png` through `luft-201.png`. No OCR or heavy allocation was used.

The finite source proof is Lemma3.1, printed194–195. Its two engulfings put the(n−3)-skeleton and complementary2-complex into the respective target images; a simplex-preserving join stretch gives whole-cube coverage. Source property(c) preserves the previously covered inner second ball. The source does NOT claim that its second homeomorphism fixes that inner ball pointwise where the new chart meets it: it is small there. The exact protected-subcollar conclusion below is a new relative adaptation, proved rather than attributed verbatim to Luft.

L. Siebenmann, *On Detecting Euclidean Space Homotopically among Topological Manifolds*,1968, Assertion4.4 printed256, was read in the actual primary scan `/tmp/sieb1968-primary.pdf`, from https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0006/LOG_0026.pdf . That assertion states the desired compact two-cover and refers to Luft3.1 or Connell. Connell's actual title/DOI is *A topological H-cobordism theorem for n≥5*, Illinois J.Math.11 (1967),300–309, DOI10.1215/ijm/1256054669. Public metadata was acquired, but public PDF/legacy landing requests returned an HTML access challenge, not the paper. No Connell proof was acquired or read, and none is credited here.

## Exact input and result

Let M be a second countable TOP five-manifold with boundaryB, and let U₁,U₂ be actual open collars ofB, with fixed parametrizations c_i:B×[0,1)→U_i. Suppose U_i→M is a homotopy equivalence, or more generally π_j(M,U_i)=0 through degree2. Prescribe standard closed SUBCOLLARS A_i=c_i(B×[0,a_i]), 0<a_i<1. The parallel parametrizations are input; no uniqueness assertion about an arbitrary embedded collar is used.

For every compactK⊂M there are compactly supported TOP ambient isotopies H_i,t starting at the identity, fixing an OPEN neighborhood ofA_i, such that

K⊂H₁,₁(U₁) ∪ H₂,₁(U₂).

No PL structure onM is assumed. Every polyhedron below lies in one actual Euclidean coordinate chart. This is finite TWO-collar coverage, not containment in one collar or collar recognition. The construction is dimensionfive: both moving skeleta have dimension2. In dimensionm>5 the identical proof requires an additional raw engulfing operation in dimensionm−3; the accepted p≤2 primitive alone does not provide it.

## Exact imported raw operation and collar work pairs

The separately adopted raw TOP finite engulfing contract supplied by the assembly owner is: in an open boundaryless TOP work manifoldO, a CLOSED p-dominated subsetX, p≤2, withX−V compact and π_j(O,V)=0 throughp, can be put insideh(V) by a uniformly compactly supported ambient isotopyh_t. Local p-domination may use actual Euclidean charts;X need not be a polyhedron after an arbitrary TOP cut. A protected closed ambient setF is handled ONLY by doing the operation in the actual openO=M−F with its verified relative homotopy hypotheses. Compact support there fixes a neighborhood ofF. This proof uses none of its additional map/relative-polyhedron clauses.

If U=c(B×[0,1)) is a collar and C is a CLOSED parallel subcollar, the pair(M−C,U−C) has the same relative homotopy groups as(M,U), but its push must have a CLOSED outer support buffer. Use the enlargement construction below to choose a CLOSED parallel C⁺ with C⊂intC⁺⊂C⁺⊂U. Reparametrize the rays soC andC⁺ have levelsb<e. Chooseb<d<e and letτ:[0,e]→[d,e] be the increasing affine map withτ(0)=d andτ(e)=e; use the identity outsideC⁺. The collar map is continuous on the CLOSED setC⁺, agrees with the identity on its frontier, and its entire support closure lies inC⁺. Pasting with the identity on the closed complement of intC⁺ therefore gives a continuous global mapM→M−C, jointly continuous through the straight collar homotopy fromt toτ(t). This explicitly prevents support from accumulating outsideU through a nonproper collar parametrization.

The global homotopy respectsU. OnM−C it remains inM−C throughout: a heightt>b moves through increasing convex combinations withτ(t)>b. Thus inclusion followed by the push and the push followed by inclusion are homotopic to the respective pair identities. M−C is open and boundaryless becauseC is closed and contains the whole original boundaryB. EVERY work-pair application below includes its own closed outer buffer. Neither compactness ofC⁺ nor compact support of this auxiliary homotopy is asserted; compact support is supplied by the subsequent imported engulfing operation in the actual open complement.

## Enlarging CLOSED parallel collar shields

For noncompactB one must not assume that every constant-height slice of an arbitrary open collar is closed inM. The needed enlargement has an explicit construction. Given a CLOSED subcollarA at heighta and a compactJ⊂U, adjoin all initial collar segments belowJ; that additional set is compact, being the image ofc⁻¹(J)×[0,1] under(x,t,u)↦c(x,ut). Thus their unionF withA is closed inM and lies inU. In a metric onM, the set

N={z:dist(z,F)≤(1/2)dist(z,M−U)} (use the constant1 for the second distance ifU=M)

is closed, contained inU, and containsF in its interior. Along each collar ray define r(x) to be the supremum of heights whose full initial segment lies in intN. This r is lower semicontinuous and exceedsa. The maximum height needed forJ on each ray, ora when there is none, is upper semicontinuous; its excess abovea has compact support inB. It is strictly belowr. Here is a SPECIFIED countable formula for the intermediate height, without a noncompact choice of cover or partition of unity. Denote the upper semicontinuous required height byμ(x), and fix an enumeration(q_j) of the rationals in(a,1). The setsO_j={x:μ(x)<q_j<r(x)} are open and coverB. In a fixed compatible metric onB set

w_j(x)=2^(−j) min{1,dist(x,B−O_j)},

using1 for the truncated distance whenO_j=B. Define

b(x)=[∑w_j(x)q_j]/[∑w_j(x)].

Both series converge uniformly and are continuous, the denominator is positive at everyx, and every positive weight hasμ(x)<q_j<r(x). Henceb is continuous and satisfiesμ<b<r strictly. The enumeration and formula are fixed, not countably many selected geometric objects. ConsequentlyC={c(x,t):0≤t≤b(x)} containsA∪J in its relative interior and lies inN. It is closed inU; since its closure inM lies in the closedN⊂U, it is CLOSED inM.

Repeating once givesC⊂intC′⊂U. These are parallel variable-height subcollars. A continuous piecewise-linear reparametrization on each collar ray, fixing[0,a] and takingb(x),b′(x) to two fixed intermediate levels, makes them standard subcollars without changingU or the protectedA. No ambient collar-uniqueness theorem is used. The collar-pair homotopy argument above applies in these reparametrized coordinates.

## A finite local addition preserving a covered ledger

Suppose actual collarsU₁,U₂ currently cover a compact ledgerL, and still have the fixed originalA_i as their standard subcollars. Let g:C₁⁵→intM−A₂ be a coordinate embedding of the closed cube, with0<α<α′<1. We will coverL together withg(C_α⁵), keepingA_i fixed.

SplitL into compact setsL₁⊂U₁ andL₂⊂U₂. For example, in a fixed metric use the closed subsets where the distance to the complement ofU_i is at least the corresponding other distance. Their union isL and the selected distance is positive. Choose enlarged standard subcollars B₁⊂U₁ and B₂⊂intB₂′⊂U₂ containing respectivelyA₁∪L₁ andA₂∪L₂ in their relative interiors. Use the CLOSED parallel-shield enlargement just proved, and reparametrize the current collars while fixingA_i. This retains closedness even for noncompact baseB; it is not an assumption that arbitrary constant-height images are closed.

Also choose a CLOSED parallel outer shield B₁⁺ with B₁⊂intB₁⁺⊂U₁, and a CLOSED parallel B₂″ with B₂′⊂intB₂″⊂U₂. The first work-pair push is supported inB₁⁺, and the second inB₂″; reparametrize these frontiers as the outer levele in the preceding pair argument. B₂′ remains the second WORK shield, not its own unproved outer support buffer.

TriangulateC_α′ finitely so thatC_α is a subcomplex, its closed star stays in intC_α′, and

(*) if g(Δ) meetsB₂ for a simplexΔ, then g(Δ)⊂intB₂′.

The open cover g⁻¹(intB₂′), g⁻¹(M−B₂) of the compact cube gives(*) after sufficiently fine subdivision. Put P=K^(2). In the first barycentric subdivision let Q be the complementary complex whose vertices are barycenters of simplices of dimension3,4,5. Hence dimP=dimQ=2.

Apply the raw operation in M−B₁ to X₁=g(P)−B₁ and V₁=U₁−B₁. The setX₁ is closed there and locally2-dominated byP; X₁−V₁=g(P)−U₁ is compact. The preceding collar-pair argument verifiesπ through2. Extend the resulting compact isotopy by the identity acrossB₁; call its endpointh₁′. It fixesB₁, and ALL ofg(P) lies inh₁′(U₁), including its part inB₁.

Likewise apply the raw operation in M−B₂′ to X₂=g(Q)−B₂′ and V₂=U₂−B₂′. Obtainh₂′ fixing an open neighborhood ofB₂′ and withg(Q)⊂h₂′(U₂). Both extensions fix the original boundary. Only the accepted CLOSED2-dominated class is used; intersecting a chart polyhedron with the complement of a TOP subcollar is not mislabeled a globally simplicial cut.

## Explicit join stretch and its isotopy

In each barycentric simplex separate its vertices into the low face inP and the high face inQ. Every point outsideP∪Q has a UNIQUE expression

x=(1−t)u+t v,  u∈P, v∈Q, 0<t<1,

withu,v in the same barycentric simplex. On common faces the expressions agree. The possible endpoint pairs form a compact finite unionE of products of low/high faces. WriteO_i=g⁻¹(h_i′(U_i))∩C_α′. Compactness givesε>0 such thatt<ε impliesx∈O₁, andt>1−ε impliesx∈O₂, for EVERY join segment. Takeε<1/4.

Let φ:[0,1]→[0,1] be the increasing piecewise-linear homeomorphism taking0 to0, 1−ε toε/2, and1 to1. Setφ_s(t)=(1−s)t+sφ(t). Eachφ_s is increasing and fixes0,1.

We need to fix the OUTER cube boundary, rather than falsely extending a nonfixed boundary map by the identity. LetE_active consist of endpoint pairs carried by barycentric simplices in the closed star ofC_α; letE_boundary consist of those carried by the outer boundary∂C_α′. They are disjoint compact subsets ofE because that closed star is in the cube interior. Choose the explicit continuous cutoff

λ(e)=dist(e,E_boundary)/(dist(e,E_boundary)+dist(e,E_active)).

It equals1 onE_active and0 onE_boundary. If one set is empty use the corresponding constant cutoff. DefineS_s by fixingP∪Q and sending each segment parameter t toφ_(sλ(u,v))(t). It is a homeomorphism on each segment, maps every barycentric simplex ONTO itself, and depends continuously onx ands. AtP andQ continuity follows uniformly because allφ_r fix0,1 andr ranges over[0,1]. Its inverse uses the inverse increasing segment maps and has the same continuity. ThereforeS_s is an actual TOP isotopy ofC_α′, fixes its boundary, and extends by the identity toC₁ and then throughg to a compact ambient isotopy ofM.

Every join fiber carrying a point ofC_α has its endpoints inE_active. On that fiberS₁ sends the O₂ tail t>1−ε onto a set containing t>ε/2, whileO₁ contains t<ε. Consequently

g(C_α)⊂h₁′(U₁) ∪ gS₁g⁻¹ h₂′(U₂).

Set h₁=h₁′ and h₂=(gS₁g⁻¹)h₂′, with the lift understood as identity off the chart. Since the entire chartg(C₁) missesA₂, this newh₂ still fixes an open neighborhood ofA₂. The first map fixesA₁.

The previous ledger remains covered. L₁⊂B₁ is fixed byh₁′, soL₁⊂h₁(U₁). For x∈L₂⊂B₂ outsideg(C_α′), the join lift is the identity andh₂′ fixesx. If x lies in an affected simplexg(Δ), condition(*) places ALL ofg(Δ) insideB₂′, whichh₂′ fixes. SinceS₁ maps each such simplex onto itself, x still lies in the second target image. ThusL₂⊂h₂(U₂). This is the actual source property(c) argument; it does not assert that the enlargedB₂ is pointwise fixed by the join stretch.

## Finite iteration gives the WHOLE compact set

Choose a larger original CLOSED parallel subcollar A₂⁺⊂U₂ with A₂⊂intA₂⁺, by the enlargement construction, and reparametrize it as a standard level. The compact setL₀=K∩A₂⁺ is initially covered byU₂. The remaining compact K−intA₂⁺ is disjoint fromA₂ and from the original boundary. Cover it by finitely many chart cubes g_j(C_α_j), with the ENTIRE larger chart cubes g_j(C₁) disjoint fromA₂.

Apply the local addition successively to these finitely many cubes. After each step the two updated opens remain actual collars, being images under homeomorphisms fixingB. The originalA_i remain fixed standard subcollars in their transported parametrizations. The compact ledger isL₀ plus the previously included chart cubes; split it into compact pieces and choose enlarged current subcollars as above. Thus every next step has the same verified input. The final ledger containsK. The accumulated H_i are finite composites of compact ambient isotopies, hence are compact ambient isotopies fixing open neighborhoods ofA_i. This proves the stated finite TWO-collar cover.

## Imports and limits

The genuine imported geometry is the separately adopted CLOSED p-dominated TOP engulfing operation forp≤2. Basic collar coordinates, finite Euclidean triangulation, and metric compactness are the remaining elementary background. The wholecompact step is the explicit finite chart iteration and join isotopy above; neither a two-open-cell theorem nor a collar-recognition theorem is used as a black box.

For m>5, P has dimensionm−3 andQ dimension2. That version requires the additional high-p raw operation and is not supplied by this proof's adoptedp≤2 input. The result does not give one-collar containment, an E3 homeomorphismU→V fixed on an arbitrary saturated set, or a proper collaring theorem. Those are separate consumer constructions. The geometric selections in each finite chart iteration are finite, relative to fixed compatible metrics and the imported raw operation. Noncompact closed-shield heights use the displayed SPECIFIED uniformly convergent countable rational formula; there is no separately chosen locally finite cover or partition of unity onB hidden in a claim of finite choice. The finite number of shield enlargements and the finite chart iteration therefore introduce no dependent countable geometric selection. Countable stretching is a separate consumer with its own choice ledger.

## Focused repair history

The exact first input is preserved in `finite-relative-two-collar-cover-first-review-input.md`; the ONE first report is `independent-two-collar-review.json`. This ONE focused repair changes only its C1–C2 passages: closed OUTER buffers for every collar work-pair push, includingB₁ and the actual second shieldB₂′; and the explicit rational-weight height formula plus corrected choice ledger. The two-dimensional engulfings, join cutoff and finite ledger/wholecompact iteration are unchanged. Final changed-passage review remains required.
