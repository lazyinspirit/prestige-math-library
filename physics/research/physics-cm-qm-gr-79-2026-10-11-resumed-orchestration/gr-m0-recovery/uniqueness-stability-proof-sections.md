# Homogeneous uniqueness and stability: robust replacement sections

Keep both current Statement clauses. All coefficient constants must be localized to a compact time slab: in (a) argue on each closed segment joining 0 to a given t in J, then cover J; there need not be one uniform constant on an arbitrary open/unbounded J. In (b) use the fixed compact coefficient time slab containing [-T,T]. If constants are named without a time-slab argument, treat that slab as part of the fixed coefficient family data.

Avoid the false requirement that K or K' lie in a compact convex subset of O. For any compact E subset O choose a smooth cutoff chi compactly supported in O and equal to 1 near E; extend chi F by zero outside O. One explicit construction uses a finite cover of E by inner balls with doubled closures inside O, smooth bumps phi_l equal to 1 on each inner ball and supported on its doubled ball, and chi=1-product_l(1-phi_l). Smooth radial bumps follow from eta(r)=exp(-1/r) for r>0, eta=0 for r<=0. All derivatives vanish at 0 by polynomial-versus-exponential decay, so this construction is smooth. The extension equals F and all its derivatives near E. On the compact convex hull of E, extensions have uniform derivatives. Straight-line mean-value arguments for the extension now prove the Lipschitz estimates for actual values in E without assuming segments lie in O. One never needs positivity of the extended A^0 away from E.

## Homogeneous estimates to declare and prove in the supplier

Let r=s-1>=4, and u,v have bounded H^s norm and values in E. Write a=A^0(t,x,u), a_i=A^i(t,x,u), w=u-v, and
$f=-(A^0(u)-A^0(v))\partial_t v-(A^i(u)-A^i(v))\partial_i v-(B(u)-B(v))$.
The coefficient extension plus composition and H^r algebra imply
$\|f\|_{H^r}\le C\|w\|_{H^r}$,
since partial_t v and partial_i v have bounded H^r norm. The PDE supplies the time derivative bound for *any* classical solution with the assumed H^s and value bounds: partial_t v=-(A^0(v))^{-1}(A^i(v)partial_i v+B(v)). Thus (a) must not invoke L4, which only covers the existence construction.

Homogeneous coefficient commutators for every 1<=j<=r satisfy
$\|[D^\alpha,a]z\|_2\le C\|z\|_{H^{j-1}}$ for |alpha|=j.
Indeed use the finite Leibniz sum over 0<gamma<=alpha. When |gamma|<=s-2, D^gamma a is L-infinity bounded by the bounded H^s coefficient norm, and D^{alpha-gamma}z has L2 norm bounded by H^{j-1}. When |gamma|=s-1, necessarily j=s-1 and no derivative remains on z; D^gamma a is L2 bounded and z is L-infinity bounded by H^{s-2}, because s-2>=3. This also shows why the additive 1 is unnecessary. Fourier density extends the result to Sobolev z. At order s, the separate estimate needed by the base energy supplier is norm [D^alpha,a]z in L2 <=C norm z in H^{s-1}; in the exceptional |gamma|>=s-1 case at most one derivative remains on z, controlled in L-infinity by H^{s-1} since s>=5.

From $a\partial_t w+a_i\partial_i w=f$, multiplier and inverse bounds give
$\|\partial_t w\|_{H^{r-1}}\le C\|w\|_{H^r}$.
All these bounds vanish with w, including the commutators involving partial_t w; none introduces C alone.

## Replacement Facts and Proof

Facts: [L1] Subtracted equation a partial_t w+a_i partial_i w=f. [L2] Uniform aI<=a<=bI on the fixed value/time sets. [L3] The homogeneous forcing, product, difference and commutator estimates just proved. [L4] The equation bounds partial_t u and partial_t v in H^r and therefore in L-infinity, and gives bounds for total dot a and spatial partial_i a_i. [L5] Integral Gronwall, applied in each time direction.

**Given:** The stated coefficient family, compact value and norm bounds; in (a) a fixed compact segment between 0 and t; in (b) the common existence slab and its uniform H^s bounds.

**Proof technique:** direct.

1.1 (L2 uniqueness for all stated classical solutions.) Set $E_0(t)=\int w^{\mathsf T}a w$. Integration by parts in the leading spatial term gives $E_0'=\int w^{\mathsf T}(\dot a+\partial_i a_i)w+2\int w^{\mathsf T}f$. Pointwise coefficient Lipschitz bounds give |f|<=C|w| because partial_t v and partial_i v are L-infinity bounded by [L4]. Hence |E_0'|<=C E_0. If w(0)=0, apply Gronwall on either oriented segment from 0 to t to obtain E_0(t)=0. Since t was arbitrary this proves (a) on J. [L1, L2, L3, L4, L5, algebra]

1.2 (Homogeneous time derivative of the difference.) Invert a in [L1]; multiplier bounds at H^{r-1}, [L3]'s forcing estimate, and norm partial_i w in H^{r-1} <=norm w in H^r give norm partial_t w in H^{r-1} <=C norm w in H^r. There is no additive constant. [L1, L2, L3, algebra]

2.1 (The order-r difference energy.) Put $E=\sum_{|\alpha|\le r}\int(D^\alpha w)^{\mathsf T}a D^\alpha w$, so a norm w in H^r squared <=E<=b norm w in H^r squared. Differentiating the subtracted equation gives $a\partial_t D^\alpha w+a_i\partial_i D^\alpha w= D^\alpha f-[D^\alpha,a]\partial_t w-[D^\alpha,a_i]\partial_i w$. Integration by parts therefore gives the energy derivative as the sum of the dot a+partial_i a_i quadratic terms and twice the pairings of D^alpha w with these three right-side terms. The first is bounded by C norm w in H^r squared by [L4]; the forcing term has this bound by [L3]; time commutators have this bound by [L3] and step 1.2; spatial commutators have this bound by [L3] since partial_i w has H^{r-1} norm <=norm w in H^r. Thus |E'|<=C E. For the stated Sobolev regularity the same identity holds in integral form: w and partial_t w lie in L-infinity H^r by the equation and solution assumptions, hence w is absolutely continuous into H^r: partial_t w is strongly measurable because its finite Fourier projections are continuous and converge pointwise in H^r, its bounded H^r norm makes it Bochner integrable, and coefficientwise FTC identifies w(t)-w(t' ) with its integral; a and dot a are bounded in the coefficient norms used above. Spatial Fourier approximation justifies integration by parts and commutator identities by density. Equivalently perform the identity after spatial regularization and pass in the integral formula using these homogeneous bounds. [step 1.2, L1, L2, L3, L4, algebra]

2.2 (Continuous dependence.) Applying [L5] in both directions gives E(t)<=E(0)e^{C|t|}; equivalence yields norm w(t) in H^r <=sqrt(b/a)e^{C|t|/2}norm w(0) in H^r. Enlarge C' to cover sqrt(b/a) and C/2. This is the stated estimate in (b). [step 2.1, L2, L5, algebra] ∎

This replacement uses only homogeneous energy bounds. It does not change the stability topology or relax the claimed data class.
