# Analytic versus topological equivariant index: local authoring obligation

This is research evidence, not an accepted item or proof of the comparison theorem. No `lem-equivariant-symbol-index-comparison.md` carrier was created: the available suppliers do not support a complete local proof. The missing result is an established theorem awaiting local authoring, not an open mathematical problem. The approved arbitrary first-order elliptic-complex and positive-dimensional fixed-set scope is retained.

## Exact comparison interface

Let T be a compact torus, M a compact smooth manifold without boundary, and E^bullet a finite first-order complex of smooth complex T-vector bundles. Choose invariant Riemannian and Hermitian metrics. Use the section action U_t s(x)=rho_t(t^{-1}x)s(t^{-1}x), the positive-frequency principal symbol, and D=d+d*. Put E^+=direct sum of the even bundles and E^-=direct sum of the odd bundles. Ellipticity means that the symbol complex is exact at every nonzero real cotangent vector.

Writing a=sigma(d), one has a²=0 and sigma(D)=a+a*. For nonzero xi, if (a+a*)v=0 then 0=||(a+a*)v||²=||av||²+||a*v||². Exactness gives ker a=im a, and v lies in both im a and its orthogonal complement; hence v=0. Thus b=sigma(D)^+:pi*E^+ -> pi*E^- is invertible away from the zero section and defines a compact-support equivariant triple s(E) in K^0_{T,c}(T*M). On a zero-dimensional component the empty off-zero condition is vacuous and the class is the fiberwise graded difference. The cotangent action is (x,xi) -> (tx,(dt_x^{-1})*xi).

For an equivariant embedding j:M -> V into a finite-dimensional orthogonal real T-representation, choose an invariant normal bundle N -> M and an invariant connection to split its tangent bundle. The normal bundle of the induced cotangent embedding T*M -> T*V is, over T*M, pi*(N direct sum N*). The metric identifies N* with N; specify J(v,eta)=(-eta#,v^flat). This fixes a complex orientation on N direct sum N*. Its Koszul/Bott class defines the doubled-normal Thom map, followed by extension from an invariant tubular neighborhood:

    j_!: K^0_{T,c}(T*M) -> K^0_{T,c}(T*V).

The extension map is along the actual cotangent embedding with this specified complex orientation; it is not a Thom map for N alone. If B_V:R(T) -> K^0_{T,c}(T*V) is the representation Bott isomorphism with the same convention, the topological index is B_V^{-1}(j_!s(E)). Its independence of j also needs proof unless fixed-j comparison is already available.

The required conclusion is equality in R(T), not merely equality of dimensions:

    sum_j (-1)^j [H^j(E)] = B_V^{-1}(j_!s(E)).

The identity at the group unit does not determine this conclusion. For T=S¹, the virtual representation [weight one]-[trivial] is nonzero but has dimension zero.

## Smallest missing analytic inventory

Two interfaces suffice. They may be organized into more than two items, but each named property below remains a genuine proof obligation.

(A) Equivariant compact-symbol analytic realization, homotopy and excision. For every smooth boundaryless T-manifold X and every equivariant triple on T*X invertible outside a compact subset of T*X, construct an index map

    a_X: K^0_{T,c}(T*X) -> R(T).

An appropriate construction must use stabilized symbols or compactifications with an explicitly defined quantization; a differential operator on X alone is not available for every triple. Prove independence of representative, stabilization, homotopy and quantization. For an invariant open inclusion u:U -> X and extension-by-zero u_!, prove a_X(u_!s)=a_U(s). For closed M prove a_M(s(E))=sum_j(-1)^j[H^j(E)], with exact Sobolev domains, closed-range and harmonic-representative arguments. For a finite-dimensional real representation V prove a_V(B_V(W))=[W] for every finite-dimensional T-representation W, with matching Bott orientation. Empty manifolds, zero-dimensional manifolds and zero-rank triples must be included. Compactness of T alone does not establish any of these analytic realization properties.

(B) Equivariant analytic compatibility with the doubled-normal embedding Thom map. Given the same X-index construction in (A), every compact closed T-manifold M, every finite-dimensional orthogonal real T-representation V, every smooth equivariant embedding j:M -> V and every s in K^0_{T,c}(T*M), prove

    a_V(j_!s) = a_M(s),

where j_! is exactly the preceding Thom/extension construction with J(v,eta)=(-eta#,v^flat). This is the indispensable substantive comparison result. A proof must construct the analytic normal operator, establish its Fredholm realization and estimates, compare its symbol with j_!s, and justify the deformation/excision transferring its kernel representation to that on M. A fiberwise algebraic Bott symbol is not a proof of that transfer. An external theorem asserting this equality would supply the missing theorem rather than reconstruct it locally; no exception authorizing that substitution was found for this run.

Conditional reduction: assuming (A), (B), and the topological Bott isomorphism, apply (A) on M to identify the left side with a_M(s(E)), apply (B) to replace it by a_V(j_!s(E)), then write j_!s(E)=B_V(W) for the unique W in R(T) and apply the normalization in (A). This gives W and therefore the asserted equality. The argument is valid for every fixed-set dimension because it places no condition on fixed sets. Its shortness does not discharge (A) or (B).

One can combine (A) and (B) in a single new supplier, but that merely relocates the full analytic index theorem. The statement in (B) is the smallest precise additional *comparison* supplier once analytic compact-symbol realization and normalization have been constructed.

## A genuine partial argument: representation-valued operator homotopy

Suppose H_0,H_1 are complex Hilbert spaces with fixed continuous unitary T-actions, and A:H_0 -> H_1 is an equivariant bounded Fredholm operator. Set K=ker A, C=(ran A)^perp, X=K^perp, Y=ran A. These are invariant closed subspaces; K and C are finite dimensional and A_11:X -> Y is a bounded equivariant isomorphism. For an equivariant B sufficiently close to A in operator norm, the block B_11:X -> Y is invertible by the Neumann series. Equivariant invertible triangular row and column operations reduce B to diag(B_11,S), where S=B_22-B_21 B_11^{-1} B_12:K -> C. Hence the kernel and cokernel representations of B equal those of S. Since S is a map of finite-dimensional unitary representations, invariant orthogonal splitting of its kernel and image gives [ker S]-[coker S]=[K]-[C] in R(T). Thus the equivariant Fredholm index is locally constant on the space of equivariant bounded Fredholm operators on these fixed Hilbert representations. An operator-norm-continuous path of such operators has constant index by connectedness of its parameter interval.

This directly upgrades the block proof of the root local-constancy theorem to R(T). It is not yet symbol homotopy invariance: a path of arbitrary compact-symbol triples does not supply a path of operators on fixed Hilbert representations with Fredholm estimates. Nor does it prove excision between different manifolds or Hilbert spaces.

## What oscillator normalization can construct

For orthogonal V=R^n, let epsilon_i and iota_i be exterior multiplication and contraction on Lambda* V_C*. On Schwartz forms on V set

    Q = sum_i (epsilon_i-iota_i) partial_i + (epsilon_i+iota_i) x_i.

The orthogonally natural expression is T-equivariant. Its square is -Delta+|x|²+2N-n, where N is exterior degree. Algebraically Q has the Gaussian exp(-|x|²/2) in exterior degree zero as its unique possible L² nullspace: in degree k the scalar identity sum_i(-partial_i+x_i)(partial_i+x_i)+2k shows positivity for k>0; in degree zero, equality requires (partial_i+x_i)f=0 for every i, which forces the Gaussian. The Gaussian is T-invariant. Tensoring with W therefore yields formal kernel representation W and zero odd kernel. The joint phase-space symbol is i(epsilon-iota)(xi)+(epsilon+iota)(x), square |xi|²+|x|², with the matching Koszul convention.

A full normalization proof must also specify a closed selfadjoint realization, prove compact resolvent/Fredholmness, and identify this joint phase-space symbol realization with the compact-support analytic-index definition in (A). Q's ordinary differential principal symbol is only i(epsilon-iota)(xi), whose noninvertibility at xi=0 occurs over all of V. Thus one cannot simply call Q a compactly supported ordinary principal-symbol representative. The oscillator calculation is a concrete attainable normalization component; it does not prove (B).

## Why existing heat bounds do not repair the gap

For a fixed component F of dimension f and codimension c, the leading bound has scale t^{-(f+c)/2}. Substituting normal coordinates z=sqrt(t)w and integrating the c normal directions contributes t^{c/2}, leaving t^{-f/2}. When f=0 the leading rescaled limit suffices. When f>0, cancellation and finite terms require higher coefficients, including curvature terms. The existing leading Schwartz rescaling limit and off-diagonal bound supply no such coefficients or supertrace cancellations. Passing a leading limit under the integral cannot yield the Todd and normal-denominator density. A Dirac local index proof uses specific Clifford identities unavailable for an arbitrary elliptic complex; a reduction to Dirac symbols would require the missing comparison and symbol realization machinery.

## Actual supplier reading and limits

Read the complete bodies of these root mathematical items, without editing them:

- `../items/thm-complex-bott-periodicity.md`: ordinary complex K theory of finite CW pairs; assumes full AC; no T-equivariant representation Bott isomorphism.
- `../items/thm-complex-spinc-thom-orientation.md`: associated spinor-symbol covariance and ordinary K-theory Thom isomorphism. The word equivariant in its title concerns Clifford covariance in the construction; its Statement and proof do not establish K_T or an analytic-index map.
- `../items/thm-geometric-clifford-module-dirac-index-formula.md`: closed even-dimensional geometric Clifford module, ordinary complex index, full AC; does not identify R(T)-valued index of arbitrary symbols.
- `../items/lem-fredholm-splitting-and-parametrix.md`: abstract bounded Banach Fredholm operator splitting; no pseudodifferential calculus or manifold excision.
- `../items/thm-fredholm-index-is-locally-constant.md`: operator-norm local constancy of integer index; its block proof supports the explicit representation-valued refinement above on fixed unitary Hilbert representations.
- `../items/thm-fredholm-index-is-stable-under-compact-perturbations.md`: abstract compact perturbations; no symbol quantization.
- `../items/thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity.md`: compact, boundaryless, dimension at least two, second-order formally symmetric scalar-positive principal symbol. Exact domain H². Explicitly excludes arbitrary-order elliptic operators and pseudodifferential symbol classes.
- `../items/thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition.md`: inherits precisely that scalar-positive-symbol scope. It cannot be applied to general matrix-symbol Hodge Laplacians by its title alone.

Read the current local definition and both local heat lemmas named in the parent review. The matrix-symbol heat lemma assumes spectral/heat-kernel existence; it does not construct an analytic index for general symbol triples. The trace-limit lemma requires isolated simple fixed points.

No new external fulltext was retrieved. The already present Gilkey text was searched for index/equivariant/embedding/excision locators and its introductory retrieved excerpts were read; no claim of complete book reading or reconstruction is made. Existing source URLs are source locators, not substitutes for the missing local proof.

No manifests, contracts, state, gates, receipts, acceptance stamps, publication statuses or commits were written. This document does not close the parent's general fixed-component proof obligation.
