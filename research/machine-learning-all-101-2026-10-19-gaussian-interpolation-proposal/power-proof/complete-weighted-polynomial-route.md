# Complete constructive cube route for the Gaussian power function

Proof proposal only; no item, workflow evidence, acceptance stamp, or source-history record is changed. The full existing dissertation text was read at Chapter 4, especially Theorem 4.2.1 (which cites Madych–Nelson), Theorem 4.4.1, Corollary 4.4.3, and Theorem 4.5.1. The argument below proves its own weaker-in-constants polynomial reproduction statement, which is sufficient for the exact claimed asymptotic rate. It requires neither the cited reproduction theorem nor a Gaussian Fourier/native-space extension theorem.

All constants below depend only on dimension, cube, and Gaussian scale. Separation, a Cartesian arrangement of samples, and locality of the eventual reproduction coefficients are unnecessary.

## 1. Elementary interior Bernstein inequality

For every real polynomial r of degree at most N≥1,

$$|r'(u)|\le \frac{100N}{\sqrt{1-u^2}}\|r\|_{[-1,1]},\qquad -1<u<1.$$

Here is a full proof using only finite Fourier sums and integration. For an integer m≥1 the Fejér polynomial is

$$F_m(t)=\sum_{|k|<m}(1-|k|/m)e^{ikt}=\frac1m\left|\sum_{j=0}^{m-1}e^{ijt}\right|^2=\frac{\sin^2(mt/2)}{m\sin^2(t/2)}.$$

The first equality with the square follows by expanding it and counting the pairs of indices with prescribed difference. The last expression follows by summing the finite geometric series, with its continuous value at multiples of 2π. On |t|≤1/m the Fourier sum gives |F'_m(t)|≤∑_{|k|<m}|k|(1-|k|/m)≤m². On 1/m≤|t|≤π, differentiation of the last expression, together with |sin(t/2)|≥|t|/π, gives

$$|F'_m(t)|\le \frac{\pi^2}{t^2}+\frac{\pi^3}{m|t|^3}.$$

Consequently, integrating these bounds over [-π,π] gives

$$\frac1{2\pi}\int_{-\pi}^{\pi}|F'_m(t)|\,dt\le \frac{2+2\pi^2+\pi^3}{2\pi}m\le20m.$$

The case m=1 has F'_1=0 and satisfies the same bound. Set V_N=2F_{2N}-F_N. Its Fourier coefficient at k equals 1 whenever |k|≤N: for |k|<N it is 2(1-|k|/(2N))-(1-|k|/N)=1, and for |k|=N it is 2(1/2)-0=1. Thus for every trigonometric polynomial T of degree at most N, Fourier orthogonality, obtained by directly integrating exponentials, gives

$$T(t)=\frac1{2\pi}\int_{-\pi}^{\pi}T(s)V_N(t-s)\,ds.$$

Differentiate this finite-sum identity and use the preceding integral bound to obtain ||T'||∞≤100N||T||∞. Apply this to T(t)=r(cos t). Powers of cos t are trigonometric polynomials of the corresponding degree, and T'(t)=-sin(t)r'(cos t). This proves the asserted inequality.

## 2. Elementary extrapolation from the central half cube

Let Q=[-1,1]^d and Q_c=[-1/2,1/2]^d. For every polynomial p of total degree at most n≥1,

$$\|p\|_Q\le R^n\|p\|_{Q_c},\qquad R=(3e)^d.$$

Indeed, for a univariate polynomial of degree ≤n interpolate at t_j=-1/2+j/n, 0≤j≤n. For |t|≤1 its jth Lagrange polynomial has absolute value at most (3/2)^n n^n/(j!(n-j)!), since each numerator factor is ≤3/2 and the denominator absolute value is n^{-n}j!(n-j)!. Summing yields a bound (3n)^n/n!≤(3e)^n. The factorial inequality follows from

$$\log(n!)=\sum_{j=1}^n\log j\ge\int_1^n\log t\,dt=n\log n-n+1.$$

Apply the univariate estimate successively in each coordinate, keeping the other coordinates fixed and taking suprema. Each coordinate degree is ≤n, so the resulting constant is (3e)^{dn}=R^n. The interpolation identity itself follows because its difference from p has degree ≤n and n+1 distinct roots.

## 3. Exponential polynomial norming on an arbitrary sufficiently dense set

There are constants κ>0 and A>1 depending only on d such that, for every finite nonempty Y⊂Q of Euclidean fill distance η and every n≥1 with nη≤κ,

$$\|p\|_Q\le A^n\max_{y\in Y}|p(y)|\qquad(\deg p\le n).$$

Here are explicit admissible choices. Put

$$a=(3/4)^d,\qquad \delta=\min\{1/4,a/(8R)\},\qquad G=600\sqrt d/\sqrt\delta,\qquad \kappa=\min\{\delta/2,1/(2G)\},\qquad A=2R/a.$$

For nonzero p form the polynomial

$$q(u)=p(u)\prod_{i=1}^d(1-u_i^2)^n,$$

whose degree in each separate coordinate is at most 3n. Write S=||q||_Q and M=max_Y|p|. On Q_c the product weight is at least a^n, whence S≥a^n||p||_{Q_c}. If some coordinate of u has |u_i|≥1-δ, its corresponding factor 1-u_i² is ≤2δ and the other factors are ≤1. Extrapolation therefore gives

$$|q(u)|\le(2\delta)^n\|p\|_Q\le(2\delta R)^n\|p\|_{Q_c}\le(1/4)^n S<S.$$

Thus a maximum point u_* for |q| lies in [-1+δ,1-δ]^d. Choose a sample y∈Y with ||y-u_*||₂≤η. Since η≤κ≤δ/2, the segment between them lies in [-1+δ/2,1-δ/2]^d. Applying §1 to every coordinate slice of q bounds the Euclidean gradient there by GnS: indeed each derivative is bounded by 300nS/√(δ-δ²/4), and this is ≤600nS/√δ. Integrating the derivative along the segment gives

$$S\le |q(y)|+Gn\eta S\le M+S/2.$$

Therefore S≤2M. Combining this with S≥a^n||p||_{Q_c} and §2 proves ||p||_Q≤2(R/a)^n M≤A^n M. The zero polynomial requires no separate argument beyond the trivial inequality. Every use of a maximum is justified by continuity on a compact finite-dimensional cube.

## 4. Reproduction with bounded sum of absolute coefficients

For each x∈Q and each Y as in §3, there exist real coefficients λ_y such that

$$p(x)=\sum_{y\in Y}\lambda_y p(y)\quad(\deg p\le n),\qquad \sum_{y\in Y}|\lambda_y|\le A^n.$$

For completeness this follows from an elementary finite-dimensional convex argument, so no Hahn–Banach or choice principle is needed. Fix the finite monomial basis of polynomials of total degree ≤n, and let v(u) be its vector of values. Let K be the convex hull of the finitely many vectors ±v(y), y∈Y; it is compact as the image of the compact simplex of convex weights. Suppose v(x)∉A^n K. Choose z∈A^n K minimizing its Euclidean distance to v(x), and set b=v(x)-z≠0. For every w∈A^n K, the segment z+t(w-z), 0≤t≤1, is in A^n K. Expanding its squared distance to v(x) and taking its right derivative at t=0 gives b·(w-z)≤0. Hence

$$b\cdot v(x)>b\cdot z=\sup_{w\in A^nK}b\cdot w=A^n\max_{y\in Y}|b\cdot v(y)|.$$

This contradicts §3 for the polynomial p(u)=b·v(u). Therefore v(x) belongs to A^n K. Expressing that membership as a convex combination of ±v(y) and combining the coefficients for identical y proves the claim.

For a physical cube Ω with side length L, transport this result through an affine isometry and the dilation u=2(z-z_c)/L. Its normalized fill distance is η=2h/L. Thus the same coefficient bound holds whenever n≤κL/(2h). Polynomials of total degree ≤n are preserved by this affine transformation.

## 5. Gaussian feature-tail argument, including all moment bounds

Use Euclidean orthonormal coordinates centered at the cube center z_c, writing u=z-z_c in these coordinates; rotating the cube to coordinate alignment changes no distances or Gaussian values. Let B=max_{z∈Ω}||u||₂=L√d/2, and t=B²/σ²>0. For multi-indices α∈N_0^d define

$$\Phi_\alpha(z)=e^{-\|u\|_2^2/(2\sigma^2)}\frac{u^\alpha}{\sigma^{|\alpha|}\sqrt{\alpha!}}.$$

The exponential power series, multiplied in d coordinates, gives the absolutely convergent identity

$$k_\sigma(z,w)=\sum_\alpha\Phi_\alpha(z)\Phi_\alpha(w).$$

In particular Φ(z) is square summable with squared norm k(z,z)=1. For every finite linear combination of kernel sections, its squared RKHS norm equals the squared ℓ² norm of the corresponding combination of feature vectors: expand both squared norms into their finite Gram sums and use this identity. This assertion uses only the reproducing property, not a description of the whole Gaussian RKHS.

For x∈Ω obtain λ_j from §4 and put

$$b_j=\lambda_j\exp\left(\frac{\|x_j-z_c\|_2^2-\|x-z_c\|_2^2}{2\sigma^2}\right).$$

Then ∑_j|b_j|≤e^{t/2}A^n, and every coordinate of Φ(x)-∑_j b_jΦ(x_j) with |α|≤n vanishes, by polynomial reproduction of (z-z_c)^α. Let Φ_{>n} denote the remaining coordinates. The multinomial identity gives uniformly for z∈Ω

$$\|\Phi_{>n}(z)\|_{\ell^2}^2=e^{-\|u\|^2/\sigma^2}\sum_{r=n+1}^\infty\frac{(\|u\|^2/\sigma^2)^r}{r!}\le\sum_{r=n+1}^\infty\frac{t^r}{r!}.$$

If n+2≥2t, successive terms have ratio at most 1/2, so the last sum is at most 2t^{n+1}/(n+1)!. The factorial estimate in §2 bounds this by 2(et/(n+1))^{n+1}. The ℓ² triangle inequality and the Gram identity therefore show, uniformly in x,

$$P_X(x)\le\sqrt2(1+e^{t/2}A^n)\left(\frac{et}{n+1}\right)^{(n+1)/2}.$$

This is already a fully quantitative bound for every integer n≥1 satisfying n(2h/L)≤κ and n+2≥2t. It also proves the claim if the kernel section span has dependent generators; no Gram invertibility or strict positive definiteness was used.

## 6. Exact rate conversion

Put D=κL/2>0 and n=floor(D/h). For sufficiently small h>0 we have n≥1, n+2≥2t, n≥D/(2h), and n≤D/h. The logarithm of the right side in §5 is at most

$$-\tfrac12(n+1)\log(n+1)+K(n+1)$$

for some fixed finite K depending only on A,t; this follows from 1+e^{t/2}A^n≤2e^{t/2}A^n. Decreasing h_0 ensures log(n+1)≥4K, and log(n+1)≥(1/2)|log h|. The first inequality bounds the exponent by -(n+1)log(n+1)/4, and the second together with n≥D/(2h) bounds it by

$$-\frac{D}{16}\frac{|\log h|}{h}.$$

Thus the requested statement holds, for example with c=D/16 and C=1 after reducing h_0 as above. Allowing a generic C>0 is harmless. This retains the full inverse-h exponent.

## Logical completeness and integration notes

The norming argument is the missing substantial supplier; it should be authored as a separate local lemma (possibly with §§1–2 as auxiliary lemmas if editorial length warrants). The finite reproduction step can be in that supplier. The Gaussian item can then use §§5–6 and list the norming/reproduction supplier in deps. The proof uses elementary finite-dimensional compactness, the fundamental theorem of calculus, elementary sine bounds, finite Fourier orthogonality, and exponential power series; every special quantitative inequality needed is proved above. No unresolved analytic or approximation-theoretic assertion is left as a citation. Countable Choice remains in the existing item contract solely through its selected canonical RKHS-construction supplier; this proof adds no further choice use.
