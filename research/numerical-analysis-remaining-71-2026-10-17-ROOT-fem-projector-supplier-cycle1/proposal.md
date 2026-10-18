# PE12 standard-mesh projector supplier — cycle 1 research proposal

Research only, 2026-10-17. No canonical carrier, manifest, contract, note, shared plan, engine state, gate or certification is changed. Native batch 39 is live. All integration proposals below require the author to drain and root to inspect the actual final carriers. This packet records an independently checked argument, not native authoring/review credit.

## Scope and smallest integration

Keep the rich abstract stable-family definition and its abstract convergence theorem. Add the following three typed proved suppliers to the **same PE12 A page**; no new pair is needed:

1. `lem-pe12-quasiuniform-mass-inverse-decay`: fixed-degree Lagrange basis construction, coefficient scaling, graph growth, mass inverse exponential decay, and uniform row/column sums.
2. `lem-pe12-boundary-preserving-quasi-interpolation`: an explicit smoothed nodal operator with zero boundary coefficients, local first-order approximation, gradient stability, and strong W01p approximation. This proves the substantial missing interpolation interface rather than invoking an unauthored Scott–Zhang theorem.
3. `thm-pe12-l2-projector-w1p-stability`: uniform Lp projection stability and W01p stability/convergence on the concrete meshes, for every 1<p<∞. Its Lp conclusion also holds at 1 and infinity, but no W01∞ density/convergence claim is needed or made.

Then instantiate the abstract family in the nonlinear convergence theorem and p-Laplacian example with these actual meshes. The exact original strict p range is preserved, and h and the maximum time step tend to zero independently.

There is also a necessary domain compatibility repair: the current flux definition and compactness lemma say bounded C1 Ω, whereas matching affine simplicial meshes exactly resolve polyhedral domains. A cube is not C1. Extend the W01p compactness and zero-boundary space-time compactness lemmas by the local arguments below to arbitrary bounded open Ω; allow that domain class in the flux definition, retaining the old C1 branch. The concrete mesh theorem uses bounded **Lipschitz polyhedral** Ω. This supplies a genuine instance, rather than an empty C1/straight-mesh intersection or an unexplained replacement family.

## Exact concrete mesh contract

Assume Countable Choice for the already published Sobolev/finite-dimensional suppliers. Let d≥2 and let Ω be a bounded nonempty Lipschitz polyhedral domain. Let (T_h) be a sequence of finite matching affine simplicial meshes of Ω as in `def-matching-affine-simplicial-meshes`, with h=max_K diam K→0, uniform shape regularity diam K/inradius K≤σ, and **global quasi-uniformity** diam K≥θh for one θ>0. Fix one integer k≥1 independent of h. Use the complete scalar continuous Lagrange space of degree k, with all boundary nodal values set to zero:

    V_h={v continuous on Ω closure: v|K∈P_k(K), v=0 on ∂Ω}.

Its functions belong to W01p(Ω) for every finite p by the published zero-boundary piecewise-polynomial theorem. No nonobtuse condition, nesting, mesh/time coupling, p-dependent mesh restriction, or elliptic H2 regularity is used. Constants can depend on Ω,d,k,σ,θ,p and the fixed mollifier; they cannot depend on h, the number of elements, or the time partition. It suffices to take h≤h0 for a fixed small h0; omitting finitely many coarser meshes does not affect convergence and their finite operator norms can alternatively be absorbed.

## Supplier 1: basis, graph growth, and mass inverse

**Proposed statement.** On the contract above, let φ_i be the standard global interior-node Lagrange basis, M_ij=∫Ωφ_iφ_j, and A=h^{-d}M. There are a,b>0 independent of h with spectrum(A)⊂[a,b]. Join distinct nodes whenever they occur in a common cell, and let δ(i,j) be the graph distance (infinite between different components). There are C and q∈(0,1), independent of h, for which

    |(A^{-1})_ij|≤C q^{δ(i,j)},
    sup_i Σ_j |(A^{-1})_ij| + sup_j Σ_i |(A^{-1})_ij|≤C.

For every fixed finite p≥1 the nodal coefficient representation has

    c_p h^{d/p} ||c||_ellp ≤ ||Σ_i c_i φ_i||_Lp ≤ C_p h^{d/p}||c||_ellp,

and at p=∞ omit h^{d/p}. The same upper/lower scaling holds with boundary coefficients included. Empty interior-node spaces are understood separately as V_h={0}.

**Full argument.** Use barycentric nodes (α_0/k,…,α_d/k), α_j nonnegative integers of sum k. Their evaluation is unisolvent on P_k. Here is a proof, so no stencil assumption is hidden: induct on d and k. A polynomial vanishing at all nodes restricts to a polynomial vanishing at all degree-k nodes on the face λ_0=0, hence vanishes identically there by the dimension induction. It is divisible by λ_0. At the remaining nodes λ_0≥1/k the quotient vanishes. For k≥2 these remaining nodes are precisely the affine image of the degree-(k−1) lattice under λ_0=(1+(k−1)μ_0)/k, λ_j=(k−1)μ_j/k for j≥1. The degree induction kills the quotient. For k=1 the quotient is constant and the remaining vertex kills it. Dimension zero is one point with constants; degree zero is constants as well. The node count is dim P_k, so injectivity gives the nodal basis. Restrictions on shared faces agree by the same lower-dimensional unisolvence. Boundary zero coefficients therefore force zero boundary facet polynomials. The reference basis has finite cardinality N=N(d,k) and uniform reference sup/gradient bounds.

On the reference cell the coefficient ellp norm and polynomial Lp norm are equivalent by finite-dimensional norm equivalence (`lem-reference-polynomial-norm-equivalence` supplies bounded nodal functionals, and the converse follows by the triangle inequality on the finite basis). Affine scaling and |K|≍h^d give

    ||Σ_{i∈K}c_iφ_i||_Lp(K)^p ≍ h^d Σ_{i∈K}|c_i|^p.

For infinity use the maximum instead. Every global node occurs in at least one cell and in uniformly finitely many cells: every incident cell lies in B(z,h), has volume at least c h^d, and cell interiors are disjoint. Their number is at most |B(z,h)|/(c h^d). Sum the local estimate over cells; this proves coefficient scaling and, at p=2, a||c||_2²≤c^TAc≤b||c||_2². Symmetry and the finite real spectral theorem give the spectral claim.

If δ(i,j)≤m, a chain of common cells puts |z_i−z_j|≤mh. To bound the number of such nodes, charge each node to any incident cell, choosing for example the smallest numbered incident cell. A charged cell meets B(z_i,mh), so is contained in B(z_i,(m+1)h). Disjoint interiors and the lower cell volume bound give at most C(m+1)^d such cells; each receives at most N nodes. Thus

    #{j:δ(i,j)≤m}≤C(m+1)^d.

This estimate uses global quasi-uniformity. Shape regularity alone would not justify it.

Choose β=2b and B=I−A/β. Symmetry and the spectral bounds imply ||B||_2≤q:=1−a/(2b)<1. A_ij=0 unless i=j or i,j share a cell, so (B^n)_ij=0 whenever n<δ(i,j). The Neumann series converges in matrix operator norm and

    A^{-1}=β^{-1}Σ_{n≥0}B^n,
    |(A^{-1})_ij|≤β^{-1}Σ_{n≥δ(i,j)}q^n.

For different graph components all these entries vanish. Summing the geometric bound using the polynomial ball count gives at most CΣ_{m≥0}(m+1)^d q^m<∞. One can prove convergence by the ratio test since the ratio tends to q<1. Symmetry gives the column bound as well. All arguments remain valid for principal matrices obtained by deleting boundary nodes; they used the interior graph throughout.

## Supplier 2: fully local zero-boundary quasi-interpolant

**Proposed statement.** Under the same mesh contract and for each 1≤p<∞ there is an explicitly defined linear Q_h:W01p(Ω)→V_h such that

    ||v−Q_hv||_Lp≤Ch ||∇v||_Lp,
    ||∇Q_hv||_Lp≤C||∇v||_Lp,
    Q_hv→v in W1p(Ω) for each v∈W01p(Ω).

No assumption that v has point values is made. Q_h need not be a projector.

**Construction.** Fix a smooth nonnegative unit-integral bump ρ supported in B(0,1). Put u=E_0v, S_hu=ρ_h*u. At every interior degree-k node z set its coefficient to S_hu(z); set every boundary-node coefficient to zero. Unisolvence from Supplier 1 defines Q_hv. The published `lem-zero-extension-from-w-one-p-zero` applies to any open Ω and gives u∈W1p(R^d), ∇u=E_0∇v with preserved norms. The published mollifier smoothness/weak-derivative results justify the convolution and derivatives. Zeroing boundary coefficients is essential: raw mollification alone does not preserve the trace.

**Geometric and Poincare details.** Choose a cube C_K centered at a point of K with side length Rh, where a fixed large R ensures that C_K contains K and every B(z,h) for every node z of K. The cubes have uniformly bounded overlap: if x∈C_K then K lies in B(x,C_Rh); disjoint cell interiors of volume ≥c h^d bound their number. If K contains a boundary node z, C_K contains B(z,2h) after increasing R.

A bounded Lipschitz domain has constants η,r0>0 with |B(z,r)\Ω|≥η r^d for every z∈∂Ω and r≤r0. This follows directly from finite boundary charts: write Ω locally as x_d>g(x') with uniform Lipschitz constant L. The downward cone x_d<−L|x'| based at z is outside Ω; a fixed smaller cone sector lies in B(z,r), has volume c(d,L)r^d, and is inside the chart when r≤r0. A finite cover of the compact boundary makes L,r0 uniform. Thus for boundary-touching K and small h, the zero set of u occupies at least η'|C_K|.

For every cube C and smooth w, the segment identity, convexity and Jensen give

    ||w−w_C||_Lp(C)^p ≤ diam(C)^p |C|^{-1}∫C∫C∫_0^1 |∇w(tx+(1−t)y)|^p dt dy dx
                            ≤ 2^d diam(C)^p ||∇w||_Lp(C)^p.

For t≥1/2 fix y and change x; for t≤1/2 fix x and change y. The inverse Jacobians are bounded by 2^d and all images remain inside C. Approximate a global W1p function by its mollifications on a slightly larger cube and pass to the limit to obtain the same inequality for u on C. This step uses the existing global mollification/density suppliers, not a boundary extension of the cube. For boundary-touching C_K, let E=C_K\Ω with |E|≥η'|C_K|. Since u=0 on E,

    |u_{C_K}| |E|^{1/p}≤||u−u_{C_K}||_Lp(C_K),
    ||u||_Lp(C_K)≤(1+η'^{-1/p})Ch||∇u||_Lp(C_K).

If K has no boundary node, put c=u_{C_K}. If K has a boundary node, put c=0. The previous arguments give in either case

    ||u−c||_Lp(C_K)≤Ch||∇u||_Lp(C_K).

At an interior node z of K, Holder for ρ_h gives

    |S_hu(z)−c|≤||ρ_h||_Lp' ||u−c||_Lp(B(z,h))≤Ch^{-d/p}||u−c||_Lp(C_K).

At boundary nodes the coefficient minus c is zero (the boundary case has c=0). If K has no boundary node all local coefficients are interior and Σ local φ_i=1 by polynomial reproduction, so Q_hv−c is the corresponding coefficient-difference polynomial. If it has boundary nodes the same identity holds since c=0. The reference basis bounds and affine scaling therefore give

    ||Q_hv−c||_Lp(K)≤C||u−c||_Lp(C_K)≤Ch||∇u||_Lp(C_K),
    ||∇Q_hv||_Lp(K)≤Ch^{-1}||u−c||_Lp(C_K)≤C||∇u||_Lp(C_K).

Combining the first estimate with ||v−c||_Lp(K) gives local approximation; summing pth powers and using bounded overlap proves both global estimates.

For strong W1p convergence, first take ψ∈C_c∞(Ω). For sufficiently small h, any boundary node has distance greater than h from supp ψ, so S_hE_0ψ=0 there. Hence Q_hψ is ordinary nodal interpolation of the globally smooth S_hE_0ψ. Taylor's formula about a cell vertex, subtraction of the affine Taylor polynomial, exact affine reproduction (k≥1), and the reference basis gradient bounds yield

    ||∇(Q_hψ−S_hE_0ψ)||_L∞(K)≤Ch sup_Rd |D²(S_hE_0ψ)|≤Ch sup_Rd |D²E_0ψ|.

Indeed every nodal Taylor remainder is O(h²), and every physical basis gradient is O(h^{-1}); the smooth function's own gradient remainder is O(h). The analogous value error is O(h²). Also ∇S_hE_0ψ→∇E_0ψ uniformly by uniform continuity and the unit mass bump, and values converge uniformly. Since Ω has finite measure, Q_hψ→ψ in W1p. For arbitrary v choose ψ∈C_c∞(Ω) close in W1p by the defining closure of W01p. The already proved uniform gradient bound and the Lp approximation bound (or Poincare on Q_h(v−ψ)) make ||Q_h(v−ψ)||_W1p≤C||v−ψ||_W1p uniformly. Triangle inequality and then the smooth convergence prove the claim. No W01∞ density assertion is used.

## Supplier 3: actual orthogonal projector theorem

**Proposed statement.** With the mesh contract above, define P_h by ∫ΩP_hf w_h=∫Ωf w_h for every w_h∈V_h. The finite mass system defines P_h for f∈L1(Ω), agrees with the L2 orthogonal projector on L2, and is the identity on V_h. For every 1≤p≤∞,

    ||P_h f||_Lp≤C_p||f||_Lp.

For every 1<p<∞ and v∈W01p(Ω),

    ||∇P_hv||_Lp≤C_p||∇v||_Lp,
    P_hv→v in W1p(Ω).

Also P_hf→f in L2 for every f∈L2. In the nonlinear branch p>max(1,2d/(d+2)), the restriction to V=W01p of the H=L2 orthogonal projector is precisely this P_h. Hence these spaces and projectors satisfy every spatial clause of the abstract stable family.

**Full argument.** Let r_i=h^{-d}∫Ωfφ_i, so the coefficient vector c of P_hf solves Ac=r. The support of φ_i consists of uniformly finitely many cells and has volume O(h^d); its absolute value is uniformly bounded. Holder and then bounded support overlap give, for finite p,

    |r_i|^p≤Ch^{-d}∫supp φ_i |f|^p,
    ||r||_ellp≤Ch^{-d/p}||f||_Lp.

For p=1 this is the same integral bound without a conjugate finite exponent; at infinity, ||r||∞≤C||f||∞. Let D=A^{-1} and let R,C0 bound its absolute row and column sums from Supplier 1. For 1≤p<∞, weighted Jensen (or Holder) gives

    Σ_i |Σ_jD_ij r_j|^p≤R^{p−1} Σ_{i,j}|D_ij||r_j|^p≤R^{p−1}C0 Σ_j|r_j|^p.

The infinity bound is the row sum bound. Combine with coefficient scaling to obtain uniform Lp stability. This also proves that the extension of the L2 projector to Lp is the mass-system map without any inconsistent domain definition for p<2.

The published polynomial inverse estimate, summed over cells using h_K≥θh, yields ||∇w_h||_Lp≤Ch^{-1}||w_h||_Lp. Since P_hQ_hv=Q_hv,

    ||∇P_hv||_Lp≤||∇Q_hv||_Lp+Ch^{-1}||P_h(v−Q_hv)||_Lp
                    ≤C||∇v||_Lp.

The last step uses Supplier 2 and the Lp stability just proved. Uniform W1p stability follows, either including the Lp projector bound or by the zero-boundary Poincare inequality. Finally

    ||P_hv−v||_W1p≤(C+1)||Q_hv−v||_W1p→0,

because P_h fixes Q_hv. Strong H convergence follows by choosing ψ∈C_c∞(Ω) close to f in L2, then using the L2 contraction and ||P_hψ−ψ||_2→0 (the same quasi-interpolation argument at p=2 suffices). Density of the union in V and H is an immediate consequence, without assuming mesh nesting. Every step is quantitative and uniform over the concrete family.

## Domain repair: exact local arguments

### `lem-pe12-w1p-compact-l2-embedding`

Replace “bounded C1 domain” by “bounded open set”; retain d≥2, AC and the full strict p threshold. Choose one r satisfying max(1,2d/(d+2))<r<min(p,d), which exists because d≥2 and p exceeds the threshold. Holder on finite-measure Ω gives a bounded inclusion W1p→W1r; approximating by C_c∞ also gives W01p→W01r. The existing `cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets` gives compactness into L2 since 2<dr/(d−r). Continuous embedding follows by its Sobolev-inequality supplier `cor-sobolev-inequality-for-w-one-p-zero` followed by Holder L^{r*}→L2. Dense inclusion still follows from C_c∞ density in L2. This removes any need for a smooth-domain extension theorem and retains every old C1 instance.

### `lem-pe12-space-time-gradient-weak-compactness`

At actual author drain inspect its full proof. If it invokes “kernel of trace=W01p” on C1 Ω to recover zero boundary data, replace that part by the following geometry-free closed-range argument. Let X=W01p(Ω), and define T:X→Y=(Lp(R^d))^{d+1} by T(v)=(E_0v,E_0∂_1v,…,E_0∂_dv). The published zero-extension lemma makes T isometric for the finite-product norm corresponding to the Sobolev norm. X is Banach, so its image R is norm closed, hence weakly closed by Hahn–Banach. The induced map from Lp(0,T;X) to Lp(0,T;Y) has image exactly Lp(0,T;R), a norm-closed linear subspace; it too is weakly closed. To see closedness directly, a norm-convergent sequence has an almost-everywhere-in-time convergent subsequence by summable increments; pointwise closedness gives values in R. T^{-1} on R is continuous, so the inverse composition is strongly measurable and in Lp. Finite products identify Lp(0,T;Y) with the scalar Lp space-time components by Fubini. Weak limits of the zero-extended function/gradients therefore stay in this image and give a limit in Lp(0,T;W01p), with no trace theorem. Existing scalar Lp reflexivity supplies extraction; inherited AC/CC/DC declarations remain honest.

If this introduces a substantial previously unproved Bochner closed-subspace interface, it can be a fourth local typed lemma (`lem-pe12-bochner-closed-subspace-weak-closure`) rather than buried in a claim that merely asserts it. Its proof is exactly the closedness/measurability argument above. For completeness, strong measurability in the closed subspace requires no unspoken projection onto R: given finite-valued simple Y-approximants s_n→g almost everywhere with g∈R, replace each of the finitely many values y of s_n by one r_y∈R satisfying ||y−r_y||≤2dist(y,R)+1/n. Finite choice suffices for each n and CC for the sequence. The resulting R-valued simple functions satisfy ||r_{s_n(t)}−g(t)||≤3||s_n(t)−g(t)||+1/n and converge almost everywhere. Composing them with the bounded inverse T^{-1}:R→X proves its strong measurability. Completeness of Lp(X) can be consumed from the now-authored `thm-pe12-bochner-lp-completeness`, after inspection of its final current source; completeness of X follows because W01p is a closed subspace of the Banach Sobolev space (`thm-sobolev-spaces-are-banach-spaces`). No new pair is needed.

### Flux and downstream boundary statements

Change the flux definition's ambient Ω to bounded open set after the embedding repair. All flux growth/coercivity/pairing and evolution arguments are geometric-free and keep the original p threshold. For the concrete scheme clause explicitly require Lipschitz polyhedral Ω and the mesh theorem's contract. Do not broaden the domain by claiming a generic nonzero-trace extension theorem, and do not attempt to reuse a C1 trace-kernel result on a polyhedron.

## Verified source use and truthful limits

Read the actual batch-39 notes, current 18-item manifest, original PE12 design record in the spatial inventory, the complete PE12 section of `research/plan-numerical-spatial-track.md`, and the full spatial audit. Read actual current supplier statements/proofs: matching affine meshes, polynomial norm equivalence, polynomial inverse inequalities, reference-simplex Poincare, zero-boundary piecewise polynomial membership, zero extension from W01p, subcritical W01p compactness, and the current PE12 flux/family/embedding/Bochner-completeness carriers. Several consumer carriers were not yet on disk while the native author remained live; final consumer checks remain owed.

Downloaded the full 37-page PDF **Diening–Storn–Tscherpel, On the Sobolev and Lp-Stability of the L2-Projection**, arXiv:2008.01801v2, https://arxiv.org/pdf/2008.01801. Converted it with PyMuPDF. Actually read its introduction and §2 through the Neumann/accelerated-decay setup, and the complete statement/proof of Theorems 4.13 and 4.14, §§4.3–4.4 (printed pp.24–25). Those proofs confirm the Lp-stability + inverse inequality + stable quasi-interpolation route and the separate zero-boundary treatment. The source imports Scott–Zhang; this packet instead supplies a complete local mollified construction. The paper's adaptive grading results and its full weighted Lp proof were **not** read and are **not** claimed or used. Our global quasi-uniform graph-ball proof is independently derived above and avoids any conjectured 3D mesh grading.

The proposed source-backed statement/proof provenance is `literature-derived`/`ai-altered`; the source URL documents provenance only. It supplies no external logical fallback. No tests, content gates, hashes, recertification, native-control commands or acceptance stamps were run or manufactured.

## Consumer ownership and guarded integration checklist

The same reviewer owns these supplier/domain changes and all actual direct/indirect affected consumers, including newly appearing authored carriers. In the currently read batch-39 manifest the closure is:

- `def-pe12-monotone-diffusion-flux`: extend Ω as above; check Poincare and compact embedding clauses.
- `def-pe12-stable-conforming-fem-family`: retain its abstract clauses; replace pending-verification remark by a precise standard-mesh instantiation referencing the new theorem. If the theorem depends on this definition, put this application in Remarks or use `justified_by`, avoiding a dependency cycle.
- `thm-pe12-backward-euler-galerkin-existence-energy`: its abstract argument is retained; concrete meshes satisfy its projector hypothesis. Verify that the derivative lift really uses (d_tU_h,v)_H=(d_tU_h,P_hv)_H and obtains the same uniform V* estimate.
- `lem-pe12-minty-identification`: check that domain broadening needs only finite measure, Holder and scalar weak limits; no boundary chart is consumed.
- `lem-pe12-space-time-gradient-weak-compactness`: replace the trace recovery exactly as above before any concrete mesh consumer relies on it.
- `thm-pe12-monotone-fem-limit`: retain the abstract stable-family theorem and append the concrete standard-mesh clause with the full p range; verify fixed tests use strong P_hv→v in V and u0 initialization uses P_hu0→u0 in H. Ensure the mesh/domain clauses are compatible, and every reconstruction/initial/jump term in the actual final proof is checked.
- `thm-pe12-strong-monotone-residual-estimate`: purely variational comparison is retained; check all changed flux/domain references, and no unwarranted mesh-rate claim is introduced.
- `ex-pe12-p-laplacian`: explicitly instantiate standard meshes rather than say “conditional when the projector interface is met”; preserve the strict p threshold and existing monotonicity verification.
- `cex-pe12-linear-ritz-does-not-commute`: retain its actual counterexample; check compatibility of its declared domain/flux assumptions and remove no approved example.
- PE12 A/B page prose and all corresponding manifest/contract/coverage mirrors need focused truthful integration after carriers drain. Existing Aubin–Lions, chain-rule and time-oscillation statements are abstract and unchanged unless final actual text links a changed domain clause.

An inspection of current run manifests found no other manifest item explicitly depending on the three existing root IDs (stable family, compact L2 embedding, space-time gradient compactness) beyond the above closure. This is not a promise about live future writes; root must recompute actual consumers after author drain, including unlinked uses. No separate read-only consumer reviewer should be substituted for this same-reviewer duty. At most one further review/repair cycle remains for this escalation after cycle 1 integration.

## Cycle-1 completion addendum: an explicit nonempty mesh family

This completes the concrete-family detail within the same research cycle; it is not a second review or acceptance. Take Ω=(0,1)^d for any fixed d≥2. For N=1,2,… partition its closure into the cubes a+[0,1/N]^d, where a=m/N and m∈{0,…,N−1}^d. For each permutation π of {1,…,d}, take the closed simplex with vertices

    a, a+e_{π(1)}/N, a+(e_{π(1)}+e_{π(2)})/N, …, a+(e_1+…+e_d)/N.

These are the uniform Kuhn/Freudenthal simplices. Within a cube, in coordinates t=N(x−a), the simplex is precisely 1≥t_{π(1)}≥…≥t_{π(d)}≥0. Every t∈[0,1]^d admits such an ordering, so the simplices cover the cube, and strict distinct-coordinate orderings have disjoint interiors. Intersection of two such ordered regions forces equalities between any coordinates whose relative orders disagree; those equalities, together with possible endpoint equalities, select a common chain of the cumulative-subset vertices. Thus their intersection is a whole face of each. On any cube face obtained by fixing some coordinates to 0 or 1, the induced subdivision is exactly the ordered-coordinate subdivision on the remaining free coordinates. It is independent of the side from which that face is approached. Neighboring cubes therefore induce the same simplices on their common face, and any intersections across cubes are again whole faces. This proves the required global matching property, including lower-dimensional intersections; interior facets have two incident cells and exterior facets one. Their union is [0,1]^d and its interior is exactly Ω.

Every cell is a translation and coordinate permutation of 1/N times the same fixed ordered simplex. Its volume is 1/(d!N^d): the edge matrix of the cumulative vertices has determinant ±1 before scaling. Every simplex contains both opposite cube corners, and is contained in the cube, so its diameter is exactly h_N=√d/N. Its inradius is

    ρ_N=1/[N(2+(d−1)√2)].

Indeed in the ordered simplex the facets are t_{π(1)}=1, t_{π(d)}=0 and t_{π(j)}=t_{π(j+1)}. A point at distance r from each has endpoint gaps r and consecutive-coordinate gaps √2r, so 1=2r+(d−1)√2r; those coordinates give an interior ball tangent to every facet. Conversely, an inscribed radius r cannot exceed that value because the corresponding endpoint and consecutive-gap inequalities sum to the same bound. Hence diam/inradius is the fixed constant √d(2+(d−1)√2). All cell diameters equal h_N, so global quasi-uniformity holds with θ=1, and h_N→0. The family is explicitly finite at each N (d!N^d cells), with finitely many reference shapes. No mesh-existence theorem or adaptive-refinement assertion is being assumed.

The cube is a bounded Lipschitz polyhedral domain: at a boundary point its active coordinate-face inequalities, after rotation along an inward vector having positive component along every active inward face normal, express the local interior as the epigraph of the maximum of finitely many affine functions. This graph is Lipschitz. Thus the family satisfies every hypothesis of the proposed projector theorem for each fixed k≥1 and every finite p. Taking k=1 gives a particularly concrete p-Laplacian example for every p>max(1,2d/(d+2)). Choose any time partitions with maximum step tending to zero; there is no required relation between their steps and h_N. The abstract stable-family clauses follow from the actual projector proof above, not an additional stability assumption. Retain the existing p-Laplacian flux, data class, energy/compactness/Minty argument and every original sound conclusion when adding this example.

### Actual Poincare interface checked for the domain repair

Read the full current published `items/thm-poincare-inequality-for-w-one-p-zero.md`. Its literal Statement assumes only Countable Choice, an **open set bounded in one direction**, and 1≤p<∞. Its full proof uses compactly supported smooth zero extensions, the directional fundamental theorem, Holder/Tonelli and the defining W01p closure. It does not require C1 boundary or a trace-kernel characterization. It already covers both arbitrary bounded open Ω in the proposed flux-domain repair and the unit cube in this addendum. No new Poincare supplier or published repair is necessary.

For clarity the exact usable bound is already proved there with constant 1: enclose Ω in a slab a<x_1<b; for φ∈C_c∞(Ω), extend smoothly by zero and write φ(x)=∫_a^{x_1}∂_1φ(s,x')ds. Holder gives |φ(x)|^p≤(b−a)^{p−1}∫_a^b|∂_1φ(s,x')|^p ds, including p=1 by the integral triangle inequality. Integrating in x_1 over the containing interval and in x' gives ||φ||_p≤(b−a)||∂_1φ||_p≤(b−a)||∇φ||_p. Pass through C_c∞ approximation in the W01p defining norm. Thus the flux norm ||v||_V=||∇v||_p remains equivalent to the full W1p norm throughout the broadened domain branch, with all original choice assumptions retained.

## Same-cycle precision: preserve the actual authored gradient compactness supplier

While native writer 39 remains live, read the **entire current** `items/lem-pe12-space-time-gradient-weak-compactness.md`, including its Statement, facts, dependencies and all proof steps 1.1–4.1. It now proves exactly the required closed gradient-range argument locally, using the newly authored Bochner completeness theorem. This observation **supersedes** the earlier conditional suggestion above to replace C1 trace-kernel recovery or add `lem-pe12-bochner-closed-subspace-weak-closure`: the actual current proof has no trace-kernel recovery and needs neither that replacement nor that fourth item. Keep the three projector suppliers; do not duplicate substantial work that this existing lemma already supplies.

The actual Statement is richer than the earlier proposed zero-extension formulation: it allows every d≥1, every 1<p<∞ and any continuous inclusion of V=W01p into a real Hilbert H, assumes strong convergence of the H images, and concludes weak Lp(V) convergence and identification of that image. Preserve this full Statement and this argument. Its steps correctly prove that Γ:V→Lp(Ω;R^d) is an isometry for the gradient norm, the pointwise Bochner map Γ_p has closed range by `thm-pe12-bochner-lp-completeness`, the scalar finite-product space is reflexive, and the closed range is reflexive. Extract in that range, pull back through the isometry and identify the prescribed H limit through the bounded inclusion. This reasoning works on arbitrary bounded **open** Ω, including Lipschitz polyhedra, without a C1 boundary or trace theorem. In particular the lemma already preserves the d=1 branch; the separate d≥2 compact-L2 embedding argument must not restrict it.

There are two minimal textual corrections for root to make **only after the original writer drains and after rereading the actual final carrier**:

1. In both Statement and Given, say “bounded open Ω” rather than merely “bounded Ω”. Openness is the defining domain hypothesis of W01p and of the actual Poincare/Sobolev suppliers. If finite time intervals have not already been fixed by the surrounding evolution convention, write 0<T<∞ explicitly. No geometric regularity should be added.
2. Replace step 1.1's “If Ω=∅, then V=H={0} and the conclusion is immediate” by: “If Ω=∅, then V={0}; every u_j and its H image is zero, so the assumed strong H-valued limit u is zero. Taking U=0 gives all conclusions, even when H is nonzero.” A continuous inclusion of the zero space into an arbitrary Hilbert space does not force H itself to be zero. No other argument depends on that mistaken phrase.

For clarity in step 1.2, Γ_p maps a strongly measurable V-valued function to its strongly measurable Lp(Ω;R^d)-valued gradient by continuity of Γ; the usual scalar/finite-vector Bochner–Fubini identification then gives its space-time representative and equality of the displayed Lp norms. This can be stated locally if the final source needs that identification spelled out; it does not require a new closed-subspace theorem. The existing proof's completeness argument establishes closedness directly, so no separate inverse-measurability construction is needed there.

Consumer disposition remains the same-reviewer obligation: the monotone FEM limit consumes this unchanged rich compactness interface on the concrete polyhedral branch; scalar Lp reflexivity, Bochner completeness, AC/Hahn–Banach and the gradient Poincare norm remain the actual suppliers. The change “bounded”→“bounded open” makes an existing defining hypothesis explicit; the corrected empty-domain paragraph preserves the actual conclusion. No canonical edit, new review round, test, hash, certification or acceptance is recorded by this precision addendum.

## Same-cycle dimensional completion: retain d=1 everywhere it is approved

Reread the live current `lem-pe12-w1p-compact-l2-embedding` and the defining domain paragraph of `def-pe12-monotone-diffusion-flux`. Both now explicitly allow **d≥1**. This supersedes every earlier packet sentence that described their dimension scope as d≥2. Preserve that richer current scope. The strict p threshold is unchanged, reducing to p>1 when d=1. The gradient compactness lemma above already allows d≥1 and needs no dimensional restriction.

### Exact 1D compact-L2 proof; do not misapply the current Morrey supplier

Read the **full current published** `thm-morrey-rellich-compactness-for-p-greater-than-n`. Its literal Statement assumes **n≥2**, so its present use as [F4] for d=1 in the live embedding proof is not justified by that interface, even when Ω is an interval. Do not narrow the embedding's dimension claim to evade this; supply the following short complete 1D argument locally, consuming the existing zero-extension lemma and dimension-independent Arzelà–Ascoli theorem. A new page or published Morrey repair is unnecessary.

Let Ω⊂R be any bounded open set, p>1, and choose a bounded interval I=(a,b) whose interior contains Ω closure, with L=b−a. By `lem-zero-extension-from-w-one-p-zero`, E_0:W01p(Ω)→W1p(R) preserves function and derivative norms. Indeed E_0v|I belongs to W01p(I), because any sequence φ_m∈C_c∞(Ω) converging to v gives E_0φ_m∈C_c∞(I) converging in W1p(I). For these smooth zero-boundary functions the fundamental theorem and Holder give

    |φ(x)−φ(y)|≤|x−y|^{1−1/p}||φ'||_Lp(I),
    ||φ||_L∞([a,b])≤L^{1−1/p}||φ'||_Lp(I).

Apply the second estimate to differences of approximants. Their derivatives are Cauchy in Lp, so they converge uniformly on [a,b] to a continuous representative w of E_0v|I. It is the same Lp class since uniform convergence implies Lp convergence, and it vanishes at the endpoints. Passing to the limit in both inequalities yields the displayed Holder and sup bounds for w, with ||w'||_Lp(I)=||v'||_Lp(Ω). Consequently a bounded sequence in W01p(Ω) gives uniformly bounded equicontinuous representatives on the **fixed compact interval** [a,b]. The actual dimension-independent `thm-arzela-ascoli-for-real-ck` supplies a uniformly convergent subsequence; restriction to Ω gives strong L2 convergence because ||f||_L2(Ω)≤|Ω|^{1/2}||f||∞. The same estimates give a continuous embedding, for example ||v||_2≤L^{3/2−1/p}||v'||_p. Density remains C_c∞(Ω) density in L2. This proof uses no regularity or finite-component assumption on Ω. The empty set is trivial. Retain AC/CC for the actual approximation/extraction suppliers.

For d≥2 retain the r-reduction already proved above, choosing max(1,2d/(d+2))<r<min(p,d); do not attempt that choice for d=1. These two branches together give the complete approved d≥1 compact-L2 lemma on arbitrary bounded open Ω. Its actual direct consumers, including the flux definition, monotone FEM limit and p-Laplacian example, retain their full dimension and p ranges.

### Actual 1D standard-mesh analogue of all three projector suppliers

The projector proofs themselves extend to d=1, but the current published matching-affine-simplex definition explicitly starts at d≥2. Therefore define the d=1 mesh branch directly rather than pretending that published definition already includes it: let Ω be a bounded interval (or a finite disjoint union of bounded intervals with disjoint closures), and take finite partitions into closed nondegenerate intervals, meeting only in whole endpoints and covering Ω closure. Require h=max_K|K|→0 and θh≤|K|≤h uniformly. Use continuous piecewise P_k functions with zero values at boundary endpoints, for fixed k≥1.

Here are the complete reductions of the previously proved interfaces:

- Each interval maps affinely from [0,1] with derivative |K|; its inradius is |K|/2. Degree-k equally spaced nodes are unisolvent since a nonzero degree-k univariate polynomial has at most k distinct roots. The fixed reference nodal polynomial norms and inverse derivative bounds follow by the same finite-dimensional norm-equivalence proof and this scalar affine change of variables. Thus ||Σc_iφ_i||_p≍h^{1/p}||c||_ellp and the inverse estimate ||w_h'||_p≤Ch^{-1}||w_h||_p hold. Every node lies in at most two intervals (interior element nodes in one), and local support overlaps are uniformly bounded.
- Membership V_h⊂W01p for finite p can be proved directly without consuming a d≥2 theorem: extend a continuous piecewise polynomial with zero outer endpoint values by zero. This is globally Lipschitz with derivative equal to the cell derivative almost everywhere, since the partition is finite and all matching endpoint values agree. If M bounds its cell derivatives, then |v(x)|≤M dist(x,R\Ω). Multiply by a smooth boundary-layer cutoff vanishing within distance ε of endpoints, equal to one beyond distance 2ε, with derivative bounded C/ε. The W1p error tends to zero: the layer measure is O(ε), the function is O(Mε) there, and both derivative errors are bounded O(M). Mollifying each resulting compactly supported Lipschitz function at sufficiently small radius produces C_c∞(Ω) approximation in W1p by the existing mollification/density suppliers. This proves exactly the required zero-boundary closure membership.
- The scaled mass matrix is A=h^{-1}M. Nodes at graph distance at most m lie in an interval of length O((m+1)h); each cell has length at least θh, so the graph ball count is C(m+1). All spectral, Neumann-decay and row/column-sum arguments above then apply verbatim, with d=1. There is no dimensional spectral restriction.
- For Q_h, extend by zero and convolve with the 1D unit-mass bump, evaluate only the smoothed function at the degree-k interior nodes and set boundary-node coefficients to zero. The enlarged cubes C_K are intervals. Their overlap is bounded by the lower cell-length bound. At a domain boundary endpoint, half of every sufficiently small centered interval is exterior, so the exterior-density argument holds directly. The convex-cube Poincare/segment proof, coefficient bounds, derivative estimate and smooth density argument above apply with d=1. They give ||v−Q_hv||_p≤Ch||v'||_p, ||(Q_hv)'||_p≤C||v'||_p and strong W1p convergence.
- The mass-system right-hand-side estimate, row/column Jensen inequality, Lp stability of P_h, inverse estimate and P_hQ_h=Q_h now give uniform W01p stability and strong W1p convergence for every 1<p<∞ exactly as above. Strong L2 convergence for arbitrary initial data follows by density and L2 contraction. Thus the entire stable-family interface is genuinely instantiated in dimension one too.

For an explicit nonempty family take Ω=(0,1), K_j=[j/N,(j+1)/N], 0≤j<N. This is precisely the d=1 version of the Kuhn addendum: N cells, length/diameter h_N=1/N, inradius 1/(2N), shape ratio 2 and θ=1. It supports any fixed degree k≥1 and every approved p>1, with independent time refinement. The original three typed projector suppliers may include this elementary interval branch alongside the d≥2 simplicial branch; no extra mesh prerequisite pair is required. Do not narrow the flux, compactness, limit theorem or example to d≥2 during integration.
