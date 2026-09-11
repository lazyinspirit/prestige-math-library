# Smooth author: boundaryless face extension and relative smoothing candidate

Mathematical support only. This note proposes complete arguments for the two existing draft IDs below; it is not an item acceptance, owner ruling, canonical edit, or independent review. Only this authorized research note was written during this subtask.

## Scope and supplier readings

The target N is a finite-dimensional smooth manifold **without boundary** throughout. Assume countable choice AC_omega exactly for the existing finite-dimensional embedding/tubular-retraction and relative Whitney suppliers. The local coordinate operations, finite bump constructions, prism retraction, and finite induction below require only finite choices, hence no further choice. If the main author states full AC instead, declare `def-axiom-of-choice` and explain that its countable consequence is used; do not conceal that stronger formulation.

Read in full during this subtask:

* `items/thm-relative-whitney-approximation-for-manifold-valued-maps.md`, all five numbered proof steps and facts;
* `items/thm-whitney-approximation-for-manifold-valued-maps.md`, all nine numbered proof steps and facts;
* current smooth fragment entries for the two lemmas and the homology comparison consumer.

Previously read in full in the preceding boundary audit: CLAUDE.md, README.md, the standard smooth-step definition and its flat-function supplier, the boundary-map definition, and the complete boundary inward-push candidate. The separate explicit boundary-target counterexample is in `research/phase-2-next-20-owner-author-smooth-boundary-audit.md` and remains in force.

Exact supplier extracts and uses:

1. Relative Whitney Statement: “suppose F is smooth on an open neighbourhood of A.” This is why Sections 1–2 below must manufacture actual neighbourhood smoothness; smoothness of each closed face alone does not match that hypothesis.
2. Whitney proof 1.1 fixes a smooth embedding `j:N→R^m` with smooth inverse on `S=j(N)`. Proof 6.1 defines `R=pi∘(E|Omega)^(-1):U→S` and proves “R(p)=p on S”. We use precisely these auxiliary data: U is ambient open, R is smooth, and R fixes the embedded target. All intervening radius, injectivity, and local inverse steps 2.1–5.1 were read, rather than assuming an unprinted general tube theorem.
3. Relative Whitney Statement supplies a smooth map and a homotopy fixed on an open neighbourhood of the closed set. We apply it with source the affine space of the simplex, not the simplex as an unprovided smooth manifold with corners.
4. `def-the-standard-smooth-step-function`, Definition and Remarks, supplies smooth sigma:R→[0,1] with sigma=0 for arguments<=0 and sigma=1 for arguments>=1. All cutoffs below are explicit finite compositions of this one function.

No external source was fetched in this subtask. The argument is derived here using the printed suppliers and explicit formulas; no Park backing read is claimed. The original Park/Hatcher/Merry failure histories, fetch stamps, coverage obligations, and source-exhaustion records are untouched. The note does not certify the complete transitive closure of these published suppliers.

## 1. Compatible smooth faces extend near the boundary: exact claim

Candidate for `lem-compatible-smooth-simplex-faces-have-a-neighbourhood-extension`:

Let D=Delta^n be the closed affine standard n-simplex, with affine span E and boundary B. Suppose for every codimension-one face D_i a map g_i:D_i→N is given that extends smoothly to an open neighbourhood of D_i in its affine span, and suppose g_i and g_j agree on D_i∩D_j. Then there exist an open O⊂E containing B and a smooth h:O→N whose restriction to each D_i is g_i.

This means extension of the face VALUES, not simultaneous extension of arbitrarily chosen off-face extensions or their transverse derivatives. No claim of an extension over all D is made here: a boundary map may have a topological obstruction to filling. When n=0, B is empty; O=empty and the empty map suffice. For n>=1, B is nonempty, and the given face maps imply that N is nonempty. The glued map g:B→N is continuous by the finite closed-set pasting lemma.

### 1.1 Local Euclidean extension by inclusion–exclusion

Use the embedding/tube data j,S,U,R from the Whitney supplier cited above. Write the barycentric coordinate functions on E as lambda_0,...,lambda_n, with sum lambda_i=1. Fix p∈B and let

`J={i : lambda_i(p)=0}`.

J is nonempty. Choose an index k outside J (one exists because the coordinates sum to 1); use the n coordinates lambda_i with i≠k as affine coordinates on E. Near p, precisely the faces indexed by J can occur: restrict the neighbourhood so lambda_i>0 for every i outside J.

For each nonempty subset I⊂J define the affine projection P_I by setting lambda_i=0 for i∈I, keeping all other non-k coordinates unchanged, and increasing lambda_k by the sum of the removed coordinates. These maps commute in the relation P_I P_L=P_(I union L), and fix p. If x∈D, then P_I x∈D: all retained coordinates are nonnegative and lambda_k increases by a nonnegative amount, while their sum remains one.

The common face-intersection map on

`D_I = {x∈D : lambda_i(x)=0 for all i∈I}`

is well-defined by compatibility. Its composition with j has a smooth extension to a relative open neighbourhood of p in the affine subspace `E_I={lambda_i=0 for i∈I}`: choose the least index i∈I, take a given smooth extension of j∘g_i on its face hyperplane, and restrict that extension to E_I. Call the resulting extension a_I. It equals j∘g on D_I near p. Only finitely many such choices are made, and no compatibility is claimed outside the actual simplex intersections.

Shrink an ambient neighbourhood V_p of p so every a_I(P_I x) is defined there and so nonincident faces are excluded. Set

`A_p(x)= sum_(empty≠I⊂J) (-1)^(|I|+1) a_I(P_I x)`.

This is a smooth R^m-valued function on V_p. For x∈B∩V_p, choose j0∈J with lambda_j0(x)=0. Pair every nonempty I not containing j0 with I∪{j0}. Then P_I x=P_(I∪{j0})x belongs to D_(I∪{j0}), and the actual face compatibility makes their a-values equal. The signs are opposite, so they cancel. The only unpaired term is I={j0}, whose value is a_{j0}(x)=j(g(x)). Thus A_p|_(B∩V_p)=j∘g.

The qualification “belongs to D” in this cancellation is essential: arbitrary smooth face extensions need not agree off their nonnegative simplex intersections. The calculation uses no such off-simplex agreement and imposes no unsupported matching-jet hypothesis.

### 1.2 Finite gluing and target retraction

Choose for each eligible local datum a Euclidean ball centred at its p with closed doubled ball contained in V_p. The family of all such smaller balls covers compact B; extract finitely many. Thus one has centres p_a, radii r_a>0, and extensions A_a defined on neighbourhoods of the closed balls of radius 2r_a, while the radius-r_a balls cover B.

Define the globally smooth Euclidean bump

`eta_a(x)=1-sigma((||x-p_a||^2-r_a^2)/(3r_a^2))`.

It is 1 on the closed r_a ball and 0 outside the 2r_a ball. Define the product eta_a A_a where A_a is available and extend it by zero elsewhere. This product is smooth globally: the support of eta_a lies in a closed ball contained in the extension domain, so near every point outside that domain the product is identically zero.

Let `w=sum_a eta_a`. Then w>0 on an open neighbourhood O_0 of B. Define on O_0

`A(x)=(sum_a eta_a(x) A_a(x))/w(x)`.

For x∈B every active A_a equals jg(x), and hence A(x)=jg(x). Now O=O_0∩A^(-1)(U) is open and contains B because A(B)⊂S⊂U. The map

`h=j^(-1)∘R∘A : O→N`

is smooth and equals g on B. This completes the proof of the neighbourhood-extension claim. Compactness licenses a finite subcover from the set of all eligible data; it does not require selecting a neighbourhood or radius for every point simultaneously.

## 2. Relative simplex smoothing with exact prescribed face homotopies

Candidate for `lem-relative-smoothing-of-a-continuous-simplex-along-its-faces`:

Let f:D=Delta^n→N be continuous. For every codimension-one face D_i suppose a smooth simplex g_i:D_i→N and a jointly continuous homotopy H_i:D_i×[0,1]→N are given, with H_i(x,0)=f(x), H_i(x,1)=g_i(x). Require H_i(x,t)=H_j(x,t) on every common face and at every time. Then there is a smooth simplex g:D→N and a jointly continuous homotopy H:D×[0,1]→N from f to g whose restriction to D_i×[0,1] is **exactly** H_i, with the supplied time parameter unchanged.

Additional fixed clause needed for finite smoothing: if f itself is already a smooth simplex and EVERY supplied H_i is constant at f|D_i, take g=f and H(x,t)=f(x). This clause is not valid if a supplied face homotopy moves a face, since then a constant whole-simplex homotopy would violate the prescribed restriction. The finite induction in Section 3 guarantees the constant-face premise when this clause is used.

When n=0, f is automatically a smooth simplex from a point and the fixed constant choice proves the result. Thus assume n>=1. The finite closed-set pasting lemma gives one continuous H_B:B×I→N with these restrictions. Its final map g_B is a compatible family of smooth faces, so Section 1 gives an open O⊃B and a smooth h:O→N with h|B=g_B.

### 2.1 A completely explicit extension of the prescribed boundary homotopy

Let b be the barycentre of D, so each lambda_i(b)=1/(n+1). On the bottom-plus-sides closed subset

`C=(D×{0}) union (B×I)`

define A to equal f on the bottom and H_B on the sides. The maps agree on B×{0}, so A is continuous.

For (x,t)∈D×I put

`d(x,t)=max( (2-t)/2, max_(0<=i<=n) (1-(n+1)lambda_i(x)) )`,

`s(x,t)=1/d(x,t)`.

The first entry is in [1/2,1], while every other entry is at most 1. Thus 1/2<=d<=1 and 1<=s<=2; these functions are continuous. Define

`r(x,t)=( b+s(x,t)(x-b), 2+s(x,t)(t-2) )`.

Its barycentric coordinate i is

`(1/(n+1)) [1-s(1-(n+1)lambda_i(x))] >= 0`

because d dominates each displayed entry and s=1/d. Its time coordinate is >=0 because s<=2/(2-t), and it is <=t<=1 because s>=1. The coordinate sums remain one. Hence r maps D×I into D×I. A maximum is attained among the finitely many entries defining d. If the first entry attains it, r's time coordinate is zero; if another entry attains it, the corresponding barycentric coordinate is zero. Thus r(x,t)∈C.

If t=0, the first entry equals 1, so d=s=1 and r(x,0)=(x,0). If x∈B, some barycentric coordinate vanishes, giving another entry equal to 1 and again r(x,t)=(x,t). Therefore r is a continuous retraction onto C. Define

`K=A∘r : D×I→N`, and `f_1(x)=K(x,1)`.

Then K starts at f, has precisely the prescribed boundary homotopy H_B at its original time, and ends at a continuous f_1 with f_1|B=g_B.

### 2.2 Extend f_1 to affine space and make it smooth near B

There is an explicit continuous retraction pi:E→D. For x∈E put

`mu_i(x)=max(lambda_i(x),0) / sum_j max(lambda_j(x),0)`.

The denominator is >=sum_j lambda_j(x)=1. The mu_i are continuous, nonnegative and sum to one, so define pi(x) to be the point with barycentric coordinates mu_i(x). On D this is the identity. Let `f_bar=f_1∘pi:E→N`; this is continuous and extends f_1.

Use embedding/tube data j,S,U,R as in Section 1. Put C_U=R^m\U. If C_U is empty, set epsilon(x)=1. Otherwise set

`epsilon(x)=min(1, d(j f_bar(x), C_U)/2)`.

This is a positive continuous function, using exactly the distance argument in Whitney proof 7.1. It has `B(j f_bar(x),epsilon(x))⊂U`. Define the open neighbourhood of B

`V={x∈O : ||j h(x)-j f_bar(x)||<epsilon(x)}`.

It contains B because h=f_bar=g_B there. Construct a smooth chi:E→[0,1] equal to 1 on a neighbourhood of B, with compact support contained in V, as follows. Select finitely many balls covering B whose closed doubled balls are contained in V; use the eta_a bump formula from Section 1; set `chi=1-product_a(1-eta_a)`. At any point in a smaller ball, one eta_a is identically 1 on a neighbourhood if the ball is open, so chi is 1 there. The support lies in the finite union of the closed doubled balls, hence is compact and contained in V.

For u∈I define on V

`F_u(x)=j^(-1) R( j f_bar(x)+u chi(x)(j h(x)-j f_bar(x)) )`.

Outside the support of chi define F_u=f_bar. The definitions agree on V where chi=0, and patch continuously: outside V, every point has a neighbourhood avoiding the compact support. The input to R lies in U, since its displacement from j f_bar(x) has norm <=||j h(x)-j f_bar(x)||<epsilon(x). Thus this is a jointly continuous homotopy on E×I. It begins at f_bar. On B it is g_B for every u because the two maps coincide there.

The endpoint F_1 is smooth on the open neighbourhood of B where chi=1: there F_1=j^(-1)R(jh)=h. No smoothness of f_bar away from that neighbourhood is asserted or needed.

### 2.3 Apply the actual relative Whitney theorem

The source E is an ordinary boundaryless affine n-manifold, B is compact and therefore closed in E, and F_1:E→N is continuous and smooth on an open neighbourhood of B. These are precisely the existing theorem's hypotheses. It supplies a smooth G:E→N and a continuous homotopy Q:E×I→N from F_1 to G, fixed on an open neighbourhood of B. In particular G|B=g_B and Q|_(B×I)=g_B.

Restrict the F_u homotopy and Q to D and concatenate them linearly at time 1/2. Call the result L:D×I→N. Then L(x,0)=f_1(x), L(x,1)=G(x), and L(b,t)=g_B(b) for every b∈B and t∈I. The restriction g=G|D is a smooth simplex in the strict open-extension sense, since G is already defined smoothly on the entire affine space E.

### 2.4 Preserve the exact original face time parameter

Naively concatenating K and L would change the prescribed face homotopies' time parameter. To avoid that, let

`a(x)=1/(1+dist(x,B))` on D.

Then a is continuous, a=1 exactly on B, and 0<a<1 in the interior. It has a strictly positive minimum because D is compact. For x in the interior define

`H(x,t)=K(x,t/a(x))` when `0<=t<=a(x)`,

`H(x,t)=L(x,(t-a(x))/(1-a(x)))` when `a(x)<=t<=1`.

The two expressions agree at t=a(x), since K(x,1)=f_1(x)=L(x,0). For x∈B set H(x,t)=H_B(x,t). Continuity at all interior points follows from the closed-set pasting lemma locally (both denominators are nonzero there).

At a boundary point (b,t_0) with t_0<1, nearby points satisfy t<a(x), so only the first branch occurs and t/a(x)→t_0. The continuous K agrees with H_B on B, proving continuity there.

At (b,1), the first branch, if present, has t/a(x)→1 and hence tends to K(b,1)=g_B(b). For the second branch its time argument need not converge, but L is constant on {b}×I. To prove continuity without a fictitious time limit, take any open W⊂N containing g_B(b). The compact set {b}×I lies in L^(-1)(W). Finitely many product neighbourhoods covering it give one neighbourhood V_b⊂D of b with V_b×I⊂L^(-1)(W). Thus every second-branch value with x∈V_b lies in W, uniformly in its time argument. This proves continuity at (b,1). The same argument covers intersections of all face strata because b was any boundary point.

Finally H(x,0)=f(x), H(x,1)=g(x), and H|_(D_i×I)=H_i with the original time parameter. This proves all conclusions, including the endpoints and exact side restrictions. No smoothness of H as a time-dependent map is asserted; the homology application needs an ordinary continuous prism.

## 3. Exact finite induction and the fixed-smooth clause

This paragraph supplies the logical interface to `thm-smooth-singular-chains-compute-singular-homology`; the main author must also author the prism identity and coefficient bookkeeping at their own suppliers.

Let T be a finite collection of continuous singular simplices in N, closed under taking faces (with each element a parametrized map, not an occurrence or an image subset). To obtain such T from a finite chain, take its finite support and the finitely many iterated face maps. Repeated equal maps occur only once in T at their fixed dimension.

Induct on dimension. In dimension zero, choose the original map and constant homotopy. Suppose smooth replacements and continuous homotopies have been assigned to every lower-dimensional member, with each assignment restricting to the assignment already made to every face. For sigma∈T of dimension n, its codimension-one face assignments therefore agree on every overlap, by the simplicial face identities and induction: either order of taking an intersection produces the same parametrized lower-dimensional simplex. Apply Section 2 with these precise face maps and homotopies.

If sigma was originally smooth, all its face maps are smooth: precompose its smooth open extension with the affine extension of a face inclusion and restrict to the inverse image of the extension domain, an open neighbourhood of the face. By the induction rule that every originally smooth member is left fixed, each prescribed face homotopy is constant. Therefore use the fixed clause and take sigma unchanged with constant homotopy. This both preserves the desired smooth subcollection and remains compatible with every lower face assignment. For a nonsmooth sigma there is no such fixed requirement, and the constructed relative smoothing applies.

At a given dimension there are finitely many distinct maps, so choosing one extension per map uses finite choice only. No selection on the infinite set of all singular simplices is made. The construction is not claimed to be natural in N or canonical on chains.

Consequences of the usual prism calculation on this finite face-closed set:

* The replacements obey `partial sigma'=sum_i (-1)^i (sigma_i)'` because their face restrictions were imposed exactly. Thus replacement extends linearly to a chain map on the finite span in each relevant degree.
* The homotopies obey exact face restriction identities, so the ordinary signed triangulated prism satisfies `partial P(sigma)+P(partial sigma)=sigma'-sigma`. Cancellation of lateral terms uses these exact restrictions, not an informal claim that the homotopies agree up to reparametrization.
* For a continuous cycle z, this identity gives `z'-z=partial Pz` and z' is smooth, yielding surjectivity.
* For injectivity, take a continuous bounding chain b with partial b=z smooth. Use T consisting of the support of b AND z and all their faces. Every originally smooth simplex is left fixed, so the replacement of z is exactly z, and `partial b'=z`. This proves injectivity directly, without needing the homotopy of an originally smooth simplex to be a smooth prism, and without relying on a constant-prism operator vanishing in the unnormalized chain complex.

Finite cancellation in partial b remains valid even when non-smooth face terms cancel algebraically: equal parametrized face maps receive equal replacements. Zero chains have empty support and require no choices or smoothing. Negative chain degrees are zero by the existing convention. The inclusion of smooth into continuous chains is natural under smooth maps; once it induces an isomorphism, naturality of that isomorphism follows from the actual inclusion square, without claiming natural smoothing choices.

For boundary targets the same induction with arbitrary prescribed faces is false by the separate tetrahedron counterexample. Homology comparison there must use the independent finite inward-push reduction, after its actual proof is authored; this note does not silently extend Section 2 to that setting.

## 4. Integration checklist and limits

The author can keep both existing IDs. A precise boundaryless statement is now supplied for each. Any unrestricted boundary-target relative-smoothing clause remains owner-held and mathematically false under the current strong smooth-simplex convention. No scope or inventory decision is changed here.

Suggested direct dependency reconciliation for the completed arguments: the ordinary Whitney item (its explicit embedding/retraction proof 1.1–6.1), the relative Whitney item, `def-countable-choice` (or explicit full AC plus its countable consequence if required by owner scope), `def-the-standard-smooth-step-function`, the smooth-simplex definition, and the elementary existing continuity/smooth-composition/compactness/distance suppliers actually used in the final contract. The current face-extension fragment cites only relative Whitney, whose [L1] refers to the ordinary Whitney auxiliary construction; cite that auxiliary construction directly rather than presenting existence of R as the final relative theorem's statement.

This note contains no new canonical lemma, no manifest mutation, no shared coverage proposal or source replacement hash, no item decision, no proof contract, and no rendering/precheck/audit stamp. The main author remains responsible for completed item-specific contracts, exact leaf dependency registration, the existing provenance/source obligations, authorized scope reconciliation, and checks. No confirmed new published defect is asserted by this bounded audit.
