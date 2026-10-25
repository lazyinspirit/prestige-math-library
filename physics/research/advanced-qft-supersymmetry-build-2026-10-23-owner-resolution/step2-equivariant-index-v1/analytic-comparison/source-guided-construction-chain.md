# Constructive continuation: compactification and associated-bundle products

This supersedes the earlier obstruction-only direction with a concrete construction route. It does not claim completed comparison or an authored supplier. No source carrier or workflow metadata is written.

## Actual primary-source retrieval and reading

Retrieved https://math.uchicago.edu/~shmuel/tom-readings/ASI.pdf into `atiyah-singer-I.pdf`; this is an image-only 48-page scan and its extracted text is not useful. Retrieved https://math.cs.kitami-it.ac.jp/~kouno/paper/Atiyah_Index.pdf into `atiyah-singer-I-searchable.pdf`; this 121-page compilation contains original papers I, II and III with searchable OCR. Read paper I, sections 4–9, printed pages 501–529, from its extracted text. Exact mathematics checked below is a local reconstruction using explicit hypotheses, not an import of the comparison theorem. OCR has errors in matrices and signs; the displayed operator below is independently fixed by checking its domain, adjoint and square.

Downloaded Nicolaescu's 177-page notes from https://www3.nd.edu/~lnicolae/ind-thm.pdf and searched its text; this is a geometric Dirac/heat route and did not provide the sought arbitrary-symbol embedding proof. No claim of full reading of those notes. The initially attempted Edinburgh filenames returned 404; the attempted Melrose path returned 403; no reading claimed for those failures.

## Better route: no oscillator transfer on a noncompact representation

Work first on compact smooth manifolds and define a compact-support index on U only by extension into a compactification. Prove excision. Replace analytic normal-oscillator transfer by associated-bundle multiplicativity and a compact sphere normalization. The normal bundle is associated to its orthogonal frame bundle, and its sphere compactification is an associated sphere bundle. This gives analytic doubled-normal Thom compatibility without having to identify a Callias oscillator full symbol with the ordinary compact-symbol quantization.

The representation-valued compact index, symbol class, and cotangent Thom convention remain exactly those specified in the earlier evidence. Full AC should be carried if the existing Hilbert-space/Fredholm/Sobolev suppliers are used. Compact group averaging and associated bundles introduce their own explicit formulation suppliers; compactness of a torus does not make the frame group O(n) a torus. Either formulate the construction for T times O(n), or prove exactly the O(n)-equivariant vertical sphere operators needed here.

## Concrete reconstruction inventory in dependency order

1. **Finite-chart order-zero symbol realization and principal-symbol exactness.** For a compact smooth boundaryless X, complex bundles E,F and fixed smooth density/metrics, define S^m_{1,0} in each chart by all estimates |partial_x^alpha partial_xi^beta p| <= C_alpha,beta <xi>^{m-|beta|}. Define the classical leading homogeneous part and quantize by the positive-frequency Fourier convention with kernel cutoff near the diagonal. Prove coordinate/bundle covariance modulo order m-1, composition/adjoint principal symbols, integer Sobolev mapping, order -1 compactness, surjectivity onto smooth homogeneous symbols, and elliptic parametrices/regularity. For the order-zero norm closure prove the exact sequence with kernel the compact operators and quotient all continuous sphere-bundle homomorphisms. This is the central new foundational analytic supplier; the existing scalar Laplace parametrix theorem supplies none of its symbol estimates. Smooth symbol homotopy and approximation may suffice instead of the full C*-exact sequence if every K-class and homotopy has first been smoothed with a proved smoothing lemma.

2. **Equivariant index of compact symbols and controlled representatives.** Average quantizations over the compact acting group with a proved operator-topology continuity argument. Combine the calculus, Atkinson and the representation-valued Fredholm block proof from prior evidence. Prove every class has a stabilized homogeneous representative with bundles/trivializations matched outside a compact base subset. On an invariant open U inside a compact manifold, quantize it as a bundle isomorphism outside that compact subset, with the nontrivial operator kernel supported in L times L for some compact invariant L inside U. Prove homotopies/stabilizations preserve the index. For compact first-order complexes use elliptic regularity and harmonic decomposition for the matrix symbol, not the scalar-positive Hodge supplier. This yields a_X and its comparison with cohomology for E^bullet.

3. **Positive-order tensor lift and associated-bundle multiplicativity.** For the closure of classical order-one operators in all integer Sobolev operator norms, prove that the lift of A on X to X times F belongs to the closure and has symbol sigma(A)(xi), extended continuously by zero when xi=0. This is important: an order-zero lift has a discontinuity at horizontal xi=0, and ordinary classical symbol calculus does not close under it. Prove the order-one lift by cutting off a shrinking cone around xi=0; the small-cone error is small H^s to H^{s-1}. Localize and glue lifts over a principal compact H-bundle. Then prove the full finite-dimensional vertical-kernel formula below. Only this controlled family of lifts is needed, not arbitrary family index theory.

4. **Compact sphere normalization.** One can use the round sphere de Rham operator together with an explicit circle Hardy-projection symbol to fix the remaining sign. For the latter, let P_+ project onto Fourier modes n>=0 and A=e^{ix}P_+ +(1-P_+). Direct Fourier computation gives ker A=0 and coker A the constants; the symbol is e^{ix} at xi>0 and 1 at xi<0. Its winding on a positively oriented cotangent rectangle is minus the chosen plane Bott generator. Prove this class identification with the precise cotangent complex orientation. For S¹ the de Rham cohomology representations are the trivial line in degree zero and the reflection sign line in degree one; for S² the two nonzero groups are trivial under rotations. Product and restriction determine normalization on O(n) real representations; alternatively prove directly that the O(n)-sphere local Bott class has index one. The elementary sphere topology must be proved or supplied at its exact scope. The existing two-sphere example may contribute but does not automatically provide O(1) reflection or symbol-clutching data.

5. **Index uniqueness and embedding reduction.** With excision, normalization and the associated-bundle formula, first treat zero section M -> N in a real equivariant bundle by taking its frame bundle and standard fiber R^n inside S^n. The vertical symbol is the local Bott class, its O(n)-index is the trivial representation, so the associated-bundle formula returns a_M(s). For a general embedding j:M -> V apply this to N, then excision through the tubular neighborhood in V or its one-point compactification. This establishes the exact doubled-normal j_! equality. Comparing with the point inclusion into V finishes the topological-index comparison. Every step is compatible with nontrivial base actions and positive-dimensional fixed sets.

Items 1–4 are actual missing local proofs, not new assumptions to hide in Facts of a completed comparison carrier. The final uniqueness/embedding reduction is short once they exist. There is no reason to add an open-problem item.

## Independent completed estimate: a usable Fourier bound for local quantization

Here is one substantial part of inventory 1 that follows directly from Fourier estimates. Fix a compact K in R^n. Let p(x,xi) be a smooth complex matrix, supported in x in K, and suppose its x-derivatives through order 2N are uniformly bounded in (x,xi), with N>n/2. For Schwartz u define

    Pu(x)=(2pi)^(-n) integral exp(i x.xi) p(x,xi) uhat(xi) dxi.

Let phat_x(zeta,xi) be the Fourier transform in x only. Integration by parts gives

    phat_x(zeta,xi)=(1+|zeta|²)^(-N)
      integral exp(-i x.zeta) (1-Delta_x)^N p(x,xi) dx.

Consequently ||phat_x(zeta,xi)|| <= C_K,N (1+|zeta|²)^(-N) times the maximum of the stated derivative bounds. The right side is integrable in zeta because 2N>n. Fourier transformation in x turns P into the integral operator with kernel (2pi)^(-n) phat_x(eta-xi,xi). Both its integrals in eta and in xi are bounded by one common finite constant C. To see the L² bound without invoking a named Schur theorem, pointwise weighted Cauchy–Schwarz gives

    |integral K(eta,xi) v(xi) dxi|²
      <= (integral ||K(eta,xi)|| dxi)
         (integral ||K(eta,xi)|| |v(xi)|² dxi).

Integrate in eta, use the second integral bound and Fubini to obtain ||K v||²_2 <= C²||v||²_2. Plancherel therefore extends P uniquely to a bounded L² operator. This argument applies entrywise to matrices, with a fixed finite matrix-norm constant. It also proves norm continuity whenever the finitely many uniform x-derivative bounds tend to zero for a symbol difference.

If instead the x-derivatives through order 2N+1 satisfy bounds C<xi>^(-1), p(x,D):L² -> H¹ is bounded: differentiate Pu in x, whose symbols are i xi_j p + partial_j p and satisfy uniform x-derivative bounds. The output remains supported in K. A bounded L² input sequence therefore has outputs bounded in H¹ on a fixed bounded smooth ball containing K. Rellich compactness gives an L²-convergent output subsequence; hence P is compact on L². This proves compactness for negative-order chart quantizations with compact x support using exact existing Fourier/Rellich suppliers.

These estimates alone do not prove coordinate covariance, symbol composition or positive-order product lifting. In particular they cannot justify a compact-support index map before the symbol calculus is constructed.

## Independent completed excision argument for controlled operators

Let U embed openly and equivariantly into compact closed X and X'. Suppose E,F over U are identified outside a compact invariant L with the same trivial equivariant bundle. Suppose P=I+R in these identifications, where the distribution kernel of R has support in L times L. Assume its extensions P_X and P_X' are elliptic Fredholm operators in the chosen compact calculus, and their formal adjoints have smooth distributional kernels as supplied by elliptic regularity. Outside L the equation P_X u=0 reduces to u=0. Thus every kernel section is supported in L, and restriction to U is injective and gives a solution of Pu=0. Conversely every smooth solution of Pu=0 vanishes off L and extends by zero smoothly across the complement of U, since L is compactly contained in U. Therefore ker P_X and ker P_X' are canonically identical as T-representations. The same reasoning applies to adjoints because R* also has kernel support in L times L. Closed range identifies coker P_X with ker P_X*, and similarly for X'. Their virtual kernel differences agree in R(T). This proves excision for controlled representatives once their realization is established in inventory 2.

The kernel-support condition is indispensable in this proof. Saying only that P acts as identity on sections supported outside L must be paired with the corresponding adjoint/range support statement; the stronger I+R formulation removes that ambiguity.

## Independent complete algebraic kernel reduction for the associated-bundle product

Let P -> X be a smooth principal compact H-bundle over compact closed X. Let T act on P on the left, commute with H, and act on a compact H-manifold F commuting with H. Put Y=P times_H F. Let A:E^0 -> E^1 be a first-order elliptic operator on X and B:G^0 -> G^1 an H times T-equivariant first-order elliptic operator on F, allowing the positive-order Sobolev closure from inventory 3. B has finite smooth kernel K and finite smooth adjoint kernel L, both H times T-modules. All inner products and volume densities are chosen compatibly with product charts and the compact actions.

Assume horizontal lifts A_0 on E^0 tensor G^0 -> E^1 tensor G^0 and A_1 on E^0 tensor G^1 -> E^1 tensor G^1 have been constructed by local product quantization and averaging. Write B_0 and B_1 for the same fiberwise B on E^0 and E^1. The required *exact* commutations, with domains first on smooth sections, are

    B_1 A_0 = A_1 B_0,
    B_0* A_1* = A_0* B_1*,
    A_0* B_1* = B_0* A_1*,
    A_1 B_0 = B_1 A_0.

For the squares below the additional identities A_0 B_0*=B_1* A_1 and A_1* B_1=B_0 A_0* are needed; these follow from constructing all four lifts compatibly so local horizontal operators act solely in the base coordinate and commute with both B and B*. They are not consequences of merely commuting with B. Compatible product inner products ensure the adjoints are the corresponding adjoint lifts.

Define the even-to-odd product operator on Y by

    D = [[A_0, -B_1*], [B_0, A_1*]],

with domain bundles (E^0 tensor G^0) direct sum (E^1 tensor G^1), target bundles (E^1 tensor G^0) direct sum (E^0 tensor G^1). By the exact commutations its squared norms on smooth inputs (u,v) satisfy

    ||D(u,v)||² = ||A_0 u||²+||B_0 u||²
                         +||A_1* v||²+||B_1* v||².

For the adjoint the corresponding identity gives the four terms ||A_0* w||²+||B_1 w||²+||A_1 z||²+||B_0* z||². Thus

    ker D = (ker A_0 intersect ker B_0)
              direct sum (ker A_1* intersect ker B_1*),
    ker D* = (ker A_0* intersect ker B_1)
              direct sum (ker A_1 intersect ker B_0*).

Assume elliptic regularity for D and D* and their Fredholm realizations, supplied by inventory 1 and the lift-symbol result. Fiberwise ker B consists exactly of sections of P times_H K, and fiberwise ker B* consists exactly of sections of P times_H L. The restricted horizontal lifts are elliptic operators C_K:E^0 tensor(P times_H K) -> E^1 tensor(P times_H K) and C_L with K replaced by L. Their principal symbols are sigma(A) tensor identity. Their adjoints are the restrictions of the adjoint lifts: the lifts commute with the orthogonal projections onto the vertical kernels, since those projections are the same H-equivariant finite-rank operators in every product trivialization. Therefore the four kernel intersections give

    [ker D]-[ker D*] = Ind_T(C_K)-Ind_T(C_L).

Every identification is T-equivariant. The principal symbol of D is exactly the graded tensor-product symbol of A and B. It is invertible away from joint zero because the positive diagonal symbol blocks are sigma(A)*sigma(A)+sigma(B)*sigma(B), or their parity reversals, whose vanishing forces both horizontal and vertical cotangent variables to be zero. Thus, after the symbol index is constructed, the identity is precisely

    a_Y(sigma(A) times sigma(B))
      = a_X(sigma(A) times ([P times_H K]-[P times_H L])).

This proves the algebraic/analytic kernel step entirely under clearly stated calculus and lift hypotheses. It reduces normal embedding compatibility to compact vertical sphere kernels and avoids any large-parameter normal oscillator estimates. It does not claim those missing hypotheses have been proved.

## Is one bounded new foundational supplier feasible?

Yes in principle for inventory 1: compact finite-chart symbol calculus can be reconstructed from Fourier estimates, partitions, Rellich and Fredholm theory, using explicit oscillatory-integral remainder estimates. A full statement could package covariance, composition, adjoints, parametrices and symbol homotopies into one lengthy mathematical supplier. The existing Fourier estimate above completes boundedness/negative-order compactness components. It is not credible to present the remaining complete package in a few paragraphs or as 'the same proof equivariantly'. Compact averaging can be an explicitly proved final operation after the nonequivariant estimates.

Inventory 3 has a distinct product-lift issue and should remain a separate supplier. It is not obtained by simply applying ordinary classical calculus to A tensor 1: its leading homogeneous symbol is only continuous at horizontal zero. The order-one Sobolev closure and shrinking-cone approximation are the concrete missing proof. Once 1–3 and compact sphere normalization are locally complete, the desired comparison itself is bounded and can be authored without narrowing any fixed-set scope.

## Further completed local step: positive-order cone approximation

The local tensor-lift obstacle in inventory 3 admits the following explicit solution. This supplies its Euclidean approximation step, leaving global coordinate covariance, gluing and regularity to inventory 1.

Let x in R^p, y in R^q, theta=(xi,eta), and let a(x,xi) be a classical order-one matrix symbol with compact x support and leading homogeneous symbol a_1(x,xi). Multiply the output by a compactly supported smooth function psi(y); the lifted local operator has symbol b(x,y,theta)=psi(y)a(x,xi). It is bounded H^s -> H^{s-1} for every integer s by the weighted version of the Fourier bound below. Although b need not be a classical symbol on R^{p+q}, its approximation is explicit.

Choose smooth scalar h on [0,infinity), equal to one on [0,1] and zero on [4,infinity). Choose smooth chi on [0,infinity), zero on [0,1] and one on [2,infinity). For 0<t<1/4 and theta nonzero set

    c_t(theta)=h(|xi|²/(t²|theta|²)),
    r_t(theta)=1-chi(t|theta|)c_t(theta),
    b_t(x,y,theta)=b(x,y,theta)r_t(theta).

Set r_t=1 near theta=0; the cutoff makes it smooth there. For each fixed t, b_t is a classical order-one symbol on the joint space. To check the only problematic estimates, at sufficiently large |theta| either r_t vanishes near xi=0 or |xi|>=t|theta|; on the latter region each xi derivative of a is bounded by C_t<theta>^{1-|beta|}. Derivatives of c_t are homogeneous of the negative derivative degree away from zero; derivatives of chi have bounded frequency support for fixed t. Product differentiation gives exactly the S^1_{1,0} estimates. The leading symbol is

    b_{t,1}(x,y,theta)=psi(y)a_1(x,xi)(1-c_t(theta)).

Extend a_1(x,0)=0, giving a continuous degree-one function at horizontal zero. The difference from psi(y)a_1(x,xi) is supported where |xi|<=2t|theta|, so its norm on the joint unit sphere is at most Ct and tends uniformly to zero.

For the operator estimate put e_t=b-b_t=b chi(t|theta|)c_t. On its support, |theta|>=1/t and |xi|<=2t|theta|. Thus <xi><=<sqrt(5)t|theta|, and for every output derivative alpha,

    |partial_(x,y)^alpha e_t(x,y,theta)| <= C_alpha t<theta>.

The constants C_alpha do not depend on t: output derivatives hit only psi and a, not the frequency cutoffs. All e_t have one common compact output support. Fourier transformation in (x,y), followed by the integration-by-parts argument already proved, gives

    |ehat_t(zeta,theta)| <= C_N t<theta><zeta>^(-2N)

for any integer N; here all symbol derivatives required for that fixed N are finite because a and psi are smooth symbols. The conjugated Fourier kernel from H^s to H^{s-1} has the additional factor <theta+zeta>^{s-1}<theta>^{-s}. The elementary estimate

    <theta+zeta>^{s-1}<theta>^{1-s} <= C_s<zeta>^{|s-1|}

holds for every integer s, using both directions of the triangle inequality for bracket weights. Therefore the kernel is bounded by C_N,s t<zeta>^{-2N+|s-1|}. Choose 2N>|s-1|+p+q and apply the two integral bounds and weighted Cauchy–Schwarz from the preceding Fourier proof. It gives

    ||Op(b)-Op(b_t)||_(H^s -> H^{s-1}) <= C_s t.

Consequently the lifted operator lies in the closure of classical order-one operators simultaneously at all integer Sobolev orders (the same family b_t converges at every fixed s). Right multiplication by a fixed smooth compact cutoff is continuous on each such Sobolev space, so the same conclusion holds for the input-localized operators used to glue a bundle lift. This is an explicit positive-order tensor-lift proof, not an assertion of ordinary classical closure under tensoring.

The weighted Fourier bound uses only output derivatives. It imposes no uniform frequency-derivative estimates on e_t; the S^1 property is needed for each approximant b_t separately. This distinction is exactly why the cone approximation works despite the degenerating constants as t tends to zero.
