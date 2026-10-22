# Altered-determinant product geometry and its genus-two reduction

This is the new alternative product operation, disjoint from the marked ruled-surface counts. Write $Y_g=\Sigma_g\times S^1$, let $w$ have degree one on $\Sigma_g$, and let $u$ be dual to a nonseparating curve on a surface slice. The distinction between the full determinant-one theory and a chosen degree-four quotient is retained throughout. A quotient polynomial is never asserted on the entire full point-$+2$ kernel.

The primary passages actually read are Kronheimer–Mrowka arXiv:0807.4891v2, Propositions7.8–7.9 and their proofs/remark (PDF57–58). Their theorem statements are not substituted for the constructions below. The ordinary odd-torus cap, signed deck normalization and newly supplied genus-two chosen-quotient polynomial are used at their recorded scopes.

## Actual flat critical manifolds

Choose surface generators $A_i,B_i$ and a circle generator $T$. Arrange that $u$ is the mixed class making $A_1$ and $T$ anticommute. For determinant $\epsilon w+u$, $\epsilon=0,1$, the projective relations are

$$A_1T=-TA_1,\quad [B_1,T]=[A_i,T]=[B_i,T]=1\ (i>1),\quad\prod_i[A_i,B_i]=(-1)^\epsilon.$$

An anticommuting pair in $SU(2)$ has trace zero and perpendicular quaternion axes. Conjugate it to $A_1=i,T=j$. Every remaining generator then lies in the centralizer $U(1)_j$ of $T$. Its commutators vanish, so the surface relation becomes $[i,B_1]=(-1)^\epsilon$, giving $B_1=\pm j^\epsilon$. The other $2g-2$ holonomies are arbitrary $e^{\theta j}$. The stabilizer of the ordered pair $(i,j)$ is precisely the center. Thus the actual full critical set is two copies of $T^{2g-2}$.

There are no hidden normal deformations. The adjoint local system splits into its $j$-axis and the two perpendicular real axes. On the $j$-axis, $A_1$ acts by $-1$ and $T$ acts trivially; the associated surface line system $L$ has $H^0=H^2=0$ and $\dim H^1(\Sigma_g;L)=2g-2$. On the perpendicular summand, $T$ acts by $-1$, so the circle cochain contraction $(T-1)^{-1}$ contracts the entire product complex. Hence $H^1(Y_g;\operatorname{ad})$ is exactly the tangent space to the displayed torus. The critical manifold is Morse–Bott, with invertible Hessian normal to it.

## The actual genus-two finite complex

For $g=2$, choose a small holonomy perturbation restricting on each critical torus to a perfect Morse function with one minimum, two saddles and one maximum. The ordinary all-class index/energy construction supplies the corresponding adiabatic identification. The transformation $\eta$ which changes the central sign of $B_1$ exchanges the two critical components, with the same remaining angle coordinates. Its projective period has index four: the characteristic pairing of its $H^1$ class with $w_2=\epsilon w+u$ is one. Therefore the two Morse degree lists differ by four.

After an overall grading choice the eight generator degrees are $0,1,1,2$ and $4,5,5,6$. Between the components no index-one trajectory is possible, since the index is $4+d$ modulo eight with $-2\le d\le2$. Within one component, all nonzero ordinary period classes change the index by eight, while its Morse degree spread is only two. The only index-one class is the small-energy Morse class. Compactness sends it to a constant flat connection followed by a Morse trajectory; gluing its normal inverse identifies the count with the actual Morse differential. That differential is zero for the chosen perfect torus Morse function. Thus the full genus-two cohomology has exactly these eight generators; no large-genus Morse collapse is assumed here.

The surface incidence restricts on a critical $T^2$ to twice its primitive area class. In angle coordinates its adjoint perpendicular-plane Euler class has the mixed terms $2a\,d\theta/(2\pi)+2b\,d\phi/(2\pi)$; slanting its square over the surface and multiplying by $-1/4$ gives $2d\theta\wedge d\phi/(2\pi)^2$, with the chosen orientation. This supplies the ordinary degree-zero-to-degree-two coefficient. The reverse coefficient is determined below by the actual chosen-quotient relation, rather than by identifying this classical restriction with the whole Floer operator.

## The two deck actions and the point normalization

For $\epsilon=1$, the degree-four transformation $\iota_\Sigma$ changes the lift of $T$. Restoring $T=j$ by conjugation with $i$ changes the sign of $B_1=\pm j$ and sends all other angles to their negatives. Consequently

$$\iota_\Sigma=\eta\delta,\qquad\delta(\theta,\phi)=(-\theta,-\phi).$$

The product complex-symbol orientation fixes these lifts. The action of $\eta$ on the two torus Morse complexes identifies equal angle coordinates. The degree-zero action $\delta$ is the usual pullback by inversion: $+1$ on the even torus cohomology and $-1$ on its odd cohomology. Its normal orientation is positive. Indeed the perpendicular normal modes occur in complex-conjugate pairs and the axis nonzero modes in paired Fourier levels; inversion has positive determinant on each such paired orientation factor. The finite tangent kernel has dimension two and inversion determinant $+1$. This retains the end kernel instead of dropping it in a symbol-only comparison.

The torus $A_1\times S^1$ is odd. Its normal projective transformation is exactly $\eta$. For the ordinary torus cap the recorded normalization is $p=-2\tau_D$, while its genus-one Donaldson lift is $\tau_D=-\tau_{\mathrm{cx}}$. With the actual angle-preserving complex lift $\eta=\tau_{\mathrm{cx}}$, this gives

$$p=\mu(\mathrm{pt})=2\eta.$$

This fixes a sign by the actual torus orientation operation. Choosing an unnamed sign would not identify the needed genus-two quotient. Thus the full point-$+2$ kernel is the $\eta=+1$ space, of even dimension two and odd dimension two. On its even part $\iota_\Sigma=+1$, and on its odd part $\iota_\Sigma=-1$.

## Why the chosen genus-two quotient relation applies exactly where needed

Remove $\Sigma_2\times D^2$ from the cylinder on this product $Y_2$. The resulting cobordism is literally $\Sigma_2$ times a pair of pants. The determinant has odd surface restriction on all three ends. Its mixed class is zero on the new product end and equals $u$ on the other two ends: the corresponding circle cohomology values $(0,1,1)$ satisfy the pair-of-pants boundary relation.

There is also an actual projective gauge class on this pair of pants taking values $(1,0,1)$ on the new product, incoming old product and outgoing product circles. It follows, with the genus-two complex-symbol orientation, that its count satisfies

$$m(\iota_\Sigma a,v)=\iota_\Sigma m(a,v).$$

Gluing the actual ordinary cap unit $e$ into the new product boundary recovers the cylinder, so $m(e,v)=v$. For a vector with $\iota_\Sigma v=v$, the projected unit $e_+=(e+\iota_\Sigma e)/2$ still satisfies $m(e_+,v)=v$. Hence the action on this target subspace factors through the CHOSEN incoming quotient. Surface and point incidence homotopies intertwine its $m=\mu(\Sigma_2)$ and $p$ operators with those on the outgoing end.

The newly supplied genus-two relation $p=m^2-2$ is valid on that chosen quotient. It therefore gives $m^2=4$ on the even point-$+2$ subspace just identified. This is not an identity asserted on the full point-$+2$ group. That even subspace has two dimensions, in residues zero and two modulo four; the degree-two operator is off-diagonal and has trace zero. Its eigenvalues are consequently $+2,-2$, each simple. On the odd point-$+2$ subspace the degree-two operator has no target in residues three or seven of the full degree list, so it is zero. Thus the actual full altered-odd product has point-$+2$ surface spectrum $\{-2,0,2\}$, with one-dimensional simple extreme blocks.

No cap $\Sigma_2\times D^2$ for the altered mixed determinant was used: its mixed class would not extend over that cap. The only cap used was the ordinary incoming product cap in the actual pair-of-pants action.

## Removing the surface-degree marking by an odd-torus count

Take $Y_g$ with determinant $uw$ and a copy of $T^2\times S^1$ with determinant $u_1w_1$, choosing cutting tori $c\times S^1$ which meet the respective mixed markings once. Both cutting tori are odd. Cut and cross-glue. On the surface slices this joins $\Sigma_g\setminus\nu c$ to $T^2\setminus\nu c_1$; the latter is an annulus, so the resulting surface has genus $g$. The two surface-degree markings add to an even marking, while the mixed marking arcs join to one mixed marking. The output determinant is therefore $u$ up to tensoring by a square line bundle, which leaves the actual adjoint bundle and incidence operators unchanged.

The ordinary odd-torus excision gives an isomorphism on point-$+2$ groups. Its torus factor is the already constructed rational line. It intertwines the outgoing surface operator with $\mu(\Sigma_g)+\mu(T^2)$ on the incoming tensor product. The latter torus operator is zero, by its two acyclic flat lifts and degree residues. Thus the isomorphism preserves the actual $\Sigma_g$ operator. This proves the same point-$+2$ spectrum and multiplicities for $u$ and $uw$, without a higher-genus excision theorem.

## Actual multiplicativity for the pure mixed determinant

For $Y_g$ and $Y_h$ with pure mixed determinants, cut odd tori $c\times S^1$ and cross-glue. The surface slices become $\Sigma_{g+h-1}$, because their Euler characteristics add after cutting the nonseparating circles. The two mixed marking arcs join to a single mixed marking; neither input has surface degree, so neither does the output. Odd-torus excision therefore gives

$$I(Y_{g+h-1},u)^{(2)}\cong I(Y_g,u)^{(2)}\otimes I(Y_h,u)^{(2)},$$

and intertwines surface operators with their sum. The genus-one factor is a line with zero surface operator. Iterating with $h=2$ expresses the actual point-$+2$ pure-mixed group as $g-1$ copies of the computed genus-two group. Tensor eigenvalues are sums. They are real even integers in $[-2g+2,2g-2]$. The two extreme values require every tensor factor to be in its corresponding simple extreme line, so each extreme block is itself a simple rational line. This is an actual all-genus ALTERED-determinant calculation from odd-torus gluing, not an all-genus ordinary product ring presentation.

By the preceding marking toggle the same result holds for $uw$. It gives precisely the altered product interface used in the new closure constructions. The ordinary determinant $w$ with no mixed marking, its cap projection and its universal arbitrary-surface annihilators remain separate. In particular the pair-of-pants action has only transferred a genus-two chosen-quotient relation in a deck-compatible target sector; no faithfulness assertion upgrades altered-product eigenvalues to all ordinary-product eigenvalues.
