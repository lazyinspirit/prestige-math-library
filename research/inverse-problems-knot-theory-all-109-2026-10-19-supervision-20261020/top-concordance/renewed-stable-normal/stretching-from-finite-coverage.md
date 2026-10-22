# An actual end-stretching diffeomorphism from finite coverage, using only countable choice

This is the domain/limit construction requested by the marked-torus owner. It proves the implication from the exact finite coverage interface below. It does NOT prove that interface by engulfing. In particular a statement that finite complexes can be engulfed is not silently substituted for finite coverage of the specified two ends.

## Exact sufficient finite interface

Let Q be a smooth manifold whose underlying space is X×R, with X compact, possibly with boundary. The displayed product is a TOP coordinate system; it need not define a smooth product structure. Let Y⊂Q be a marked smooth submanifold which in these underlying coordinates is Y_X×R. Assume the product coordinate is smooth on the prescribed boundary collar, so that ordinary product R-slides there make sense. Fix

U_+=X×(a,∞),   C_m=X×[a+1/m,∞),   U^-_j=X×(−∞,−j),

for positive integers m and all sufficiently large integers j so that −j<a.

For EACH such pair (j,m) suppose there exists a smooth compactly supported pair isotopy h_{j,m,s} of Q, s∈[0,1], starting at id, with the following properties:

1. Every h_{j,m,s} is the identity on C_m (identity on a neighborhood is harmless but not required).
2. Its terminal map satisfies h_{j,m,1}(U^-_j)∪U_+=Q.
3. The entire isotopy preserves Y and the prescribed product structure near the outer boundary: there it has the form (x,t)↦(x,r_{j,m,s}(t)), for a smooth R-diffeomorphism independent of x. The ordinary R-slide is allowed on the marked core; demanding that every core point or every boundary point remain fixed would make condition2 impossible for the central core/boundary points.

If auxiliary compact BASE factors are present, require the table maps to be the original h_{j,m,s} times their identity, rather than newly chosen maps which mix those coordinates.

The conclusion is a genuine pair diffeomorphism φ_+:U_+→Q, onto all of Q, isotopic through pair open embeddings to inclusion, fixed on the smaller positive end C_1, and product near the boundary. A desired standard boundary product can additionally be obtained as described below.

## Obtaining the fixed-tail table from ordinary two-end coverage

The fixed-tail clause does not require a new theorem for arbitrary protected closed sets. Suppose ordinary finite two-end coverage is proved for this class of smooth marked product manifolds, with the needed pair preservation and boundary-product control, and is applicable after restricting to an open product end interval. For each m remove C_m and set

Q_m=Q−C_m=X×(−∞,b_m),   b_m=a+1/m.

This is an ACTUAL OPEN subset of the smooth manifold Q. Nothing asserts that the level t=b_m is a smooth hypersurface. Topologically Q_m is again X×R; a monotone reparametrization such as t↦t−log(b_m−t) gives a proper coordinate. Its marked subset is Y_X×(−∞,b_m), and the prescribed outer boundary product restricts to the same type of product. In Q_m the desired positive end is X×(a,b_m), and the desired negative end is U^-_j. Ordinary finite coverage there gives a compactly supported pair isotopy k_s with

k_1(U^-_j)∪(U_+∩Q_m)=Q_m.

Its compact support is contained in the open set Q_m, so extension by the identity is a smooth isotopy of Q, fixed on a neighborhood of C_m. Since C_m⊂U_+, this extended isotopy has the full coverage property on Q. Applying countable choice to these countably many (j,m)-problems supplies exactly the table above. This deduction retains the PAIR-preserving and boundary-product hypotheses: an ambient-only coverage theorem is not silently upgraded to the marked version.

## Why the countable table is important

Use countable choice ONCE to choose one entire isotopy h_{j,m,s} for every pair in this countable grid. Thereafter the construction uses deterministic least-integer rules and ordinary recursion on the natural numbers. Choosing a new admissible isotopy after inspecting each previous output would instead be an unjustified appeal to dependent choice. That approach is not used.

Put h_{j,m}=h_{j,m,1}. Condition2 gives the useful equivalent inclusion

h_{j,m}(Q−U^-_j)⊂U_+.

Indeed x∉U^-_j implies h_{j,m}(x)∉h_{j,m}(U^-_j); the displayed covering then puts h_{j,m}(x) in U_+.

## The deterministic recursion

Start with Ψ_0=id, A_0=C_1, D_0=C_1. Inductively Ψ_{n−1} is an actual compactly supported pair diffeomorphism of all of Q; A_{n−1} is a closed positive half-cylinder (after the initial stage, A_{n−1}=X×[−ℓ_{n−1},∞)); and

D_{n−1}=Ψ_{n−1}(A_{n−1})⊂U_+.

Because Ψ_{n−1} has compact support and D_{n−1} is closed in Q, the t-coordinate on D_{n−1} has a minimum b_{n−1}>a. To verify the strict inequality, outside a compact slab the map is the identity and D_{n−1} is a positive tail. Its remaining part is a closed subset of a compact X×[−R,R]. That part is contained in the open set t>a, so its minimum is strictly greater than a.

Choose the LEAST integer m_n>n+1 with a+1/m_n<b_{n−1}. Thus D_{n−1}⊂int(C_{m_n}). The set Ψ_{n−1}^{−1}(C_{m_n}) is another closed positive-side set bounded below in its t-coordinate, since Ψ_{n−1} is compactly supported. Choose the LEAST integer ℓ_n large enough that ℓ_n≥n, that A_{n−1}⊂int(A_n), and that

Ψ_{n−1}^{−1}(C_{m_n})⊂int(A_n),   A_n=X×[−ℓ_n,∞).

These conditions can be tested by the minimum t-coordinate of the specified closed set and by the previous cut. A margin of one in the inequality gives the stated interiors. Now Ψ_{n−1}(A_n) is likewise closed, bounded below in t, and equal to a standard positive tail outside a compact set. Choose the LEAST admissible j_n so large that

Ψ_{n−1}(A_n)⊂Q−U^-_{j_n}.

Finally set

Ψ_n=h_{j_n,m_n} Ψ_{n−1},   D_n=Ψ_n(A_n).

The coverage inclusion proves D_n⊂U_+. Since C_{m_n}⊂Ψ_{n−1}(int A_n) and h_{j_n,m_n} fixes C_{m_n}, we also have

C_{m_n}⊂int(D_n).

Moreover D_{n−1}⊂int(C_{m_n}), so h_{j_n,m_n,s} fixes a neighborhood of all of D_{n−1}, for EVERY s. Hence Ψ_n agrees with Ψ_{n−1} on a neighborhood of A_{n−1}. Also D_{n−1}⊂int(D_n). The inductive properties are proved with no further selection of isotopies.

## Both limits exist, and the endpoint is onto

The A_n exhaust Q with their interiors because ℓ_n≥n. On a neighborhood of A_N, every later Ψ_n and every intermediate isotopy in later stages equals Ψ_N. Thus

Ψ(x)=lim_n Ψ_n(x)

is locally a single finite-stage smooth map. Its image lies in U_+, since x belongs to some A_N and Ψ_N(A_N)⊂U_+. It is injective: any two source points lie in the same A_N and their limit values are given by the injective map Ψ_N.

The D_n exhaust U_+ with their interiors. In fact they contain C_{m_n}, and m_n>n+1 implies that every t>a is greater than a+1/m_n for all sufficiently large n. For y∈int D_N, the inverse maps Ψ_n^{-1} equal Ψ_N^{-1} on a neighborhood of y for every later n, because all later changes fix D_N. Consequently the inverse limit is locally smooth. It is defined at EVERY y∈U_+, not merely on some unspecified open image. This proves surjectivity and establishes an actual diffeomorphism

Ψ:Q→U_+.

All finite-stage maps and inverse maps preserve Y. Hence Ψ identifies Y with Y∩U_+, and φ_+=Ψ^{-1}:U_+→Q is a pair diffeomorphism. This proves the full marked-subspace assertion, not only an ambient map with an untracked core.

## The isotopy to inclusion and its endpoint control

Concatenate the chosen stage isotopies on intervals [1−2^{−(n−1)},1−2^{−n}], n≥1, using a fixed smooth parameter change constant to infinite order at each endpoint. Let Ψ_s be the resulting family for s<1 and set Ψ_1=Ψ. Each source point has a neighborhood on which the family is stationary for all sufficiently late stages, so Ψ_s is jointly continuous, and indeed smooth, at s=1 as a family of open embeddings. It is not asserted that the endpoint is onto Q: its image is exactly U_+.

On U_+ define φ_{+,s}=Ψ_s^{-1}|_{U_+} for s<1, and set φ_{+,1}=φ_+. The inverse stabilization on D_N proves joint continuity and smoothness at s=1. Thus this is an isotopy of U_+ into Q from inclusion to an onto diffeomorphism. Since every C_m contains C_1, every chosen isotopy, the limit, and the inverse family fix C_1 pointwise. This gives the required fixed SMALLER END, which would not follow from pointwise convergence of forward maps alone.

## Boundary product and optional normalization

Every finite composition is a product near the outer boundary, with the same one-variable function for every boundary point. Local stabilization makes the limit a product germ there as well. Its boundary restriction is (x,t)↦(x,b(t)), where b:R→(a,∞) is an actual smooth increasing diffeomorphism and equals id for t≥a+1. The inverse end-stretch has the corresponding product boundary germ b^{-1}.

If a particular standard compression r:R→(a,∞), equal to id on the same smaller positive end, is required instead, put β=r b^{-1}:(a,∞)→(a,∞). The increasing interpolation β_s(t)=(1−s)t+sβ(t) consists of diffeomorphisms of (a,∞): its derivative is positive and its endpoint limits are a and ∞. It fixes the smaller positive end. In the prescribed smooth base-boundary collar choose a smooth cutoff χ, equal to one near the boundary and zero off a slightly larger collar, and define B(x,t)=(x,β_{χ(x)}(t)). This is a diffeomorphism of U_+, with inverse supplied fiberwise by the increasing maps, preserving the marked pair whenever the boundary collar is a pair collar. Replace Ψ by BΨ. Its boundary product is now exactly r. The homotopy B_s and the previous inverse isotopy give the required inclusion-to-stretch isotopy with that final boundary normalization.

This normalization is performed in the KNOWN SMOOTH product boundary collar only. It asserts no new smooth product structure in the interior. The ensuing FURLING identifications occur only between the chosen end neighborhoods; a protected central chart disjoint from those neighborhoods stays outside these quotient identifications. The finite h_{j,m,s} themselves need not fix that chart, and no such extra fixed-chart condition was assumed.

## The negative end

Apply the same argument with the underlying coordinate −t, provided the analogous finite coverage table for the reversed ends has been supplied. This relabels a coordinate and does not assume that reflection is a global diffeomorphism of the unknown interior smooth structure. Preselecting both signed tables is still one countable-choice step. The resulting maps give both end compressions required for furling; existence of the reversed finite table is not inferred from the positive table alone.

## Auxiliary product naturality

For an auxiliary compact factor T², take the already chosen table times id_{T²}. The minima of the t-coordinate and all least-integer rules are unchanged, so every Ψ_n, every homotopy, and the limit are the old constructions times id_{T²}. The boundary normalization has the same property. This proves the product naturality needed before removing the two auxiliary BASE circles. Compactness of T² keeps every finite-stage support compact.

## What has and has not been proved

The construction establishes actual end stretching, both inverse and forward controls, the fixed-end homotopy, boundary-product normalization, marked-subspace preservation, auxiliary-product naturality, and countable-choice strength FROM the specified finite table. Existence of that table remains the marked-torus owner's genuine dimension-five two-end coverage problem. No use of the resulting end-stretching diffeomorphism occurs in the finite interface or its derivation here.

## Compact-furl bridge after the consolidated first review

This module proves end compressions only. The actual quotient atlas, compact cut model, relative comparison with product end compressions and both covering-class markings are now constructed in `five-dimensional-handle-device.md`, under “Actual compact furl and its comparison”. An S-product diffeomorphism is never asserted to descend through an unrelated deck map. The second split requires the separately exposed S6-proper input extension recorded there; it is not a consequence of this stretching recursion or of the old actual-TOP-product S contract.
