---
id: thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension
aliases: [nrqm-orbital-and-spin-harmonic-polynomial-dimension]
kind: theorem
domain: mathematics
title: "Harmonic polynomial dimension"
status: published
origin: pipeline
dependency_level: 5
deps: [thm-nrqm-orbital-and-spin-legendre-rodrigues-equation, thm-nrqm-orbital-and-spin-associated-polynomial-normalization, thm-nrqm-orbital-and-spin-sphere-onb, def-homogeneous-polynomial-and-homogeneous-ideal, def-monomials-multidegree-and-total-degree, def-laplacian-of-a-c2-function, def-directional-and-partial-derivatives, thm-algebra-of-derivatives, thm-chain-rule, thm-stars-and-bars, def-dimension, def-linear-map, def-linear-subspace, def-linear-basis, def-inner-product-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-orthogonality-and-orthogonal-complement, def-self-adjoint-and-normal-endomorphism, cor-inner-product-induces-a-norm, thm-nrqm-oscillator-multidimensional-oscillator-completeness, thm-nrqm-oscillator-oscillator-scaling-and-exact-realization, thm-nrqm-oscillator-hermite-recurrence, thm-nrqm-oscillator-hermite-orthogonality, def-factorial-and-falling-factorial, def-natural-numbers, def-finite-sum-in-a-commutative-monoid, def-countable-choice, thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain, lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates, thm-sine-and-cosine-derivatives, thm-chain-rule-for-total-derivatives, thm-euclidean-inverse-function-theorem]
dependency_roles:
  thm-nrqm-orbital-and-spin-legendre-rodrigues-equation: mathematical-premise
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  def-homogeneous-polynomial-and-homogeneous-ideal: mathematical-premise
  def-monomials-multidegree-and-total-degree: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-stars-and-bars: mathematical-premise
  def-dimension: mathematical-premise
  def-linear-map: mathematical-premise
  def-linear-subspace: mathematical-premise
  def-linear-basis: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-orthogonality-and-orthogonal-complement: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  thm-nrqm-oscillator-multidimensional-oscillator-completeness: mathematical-premise
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  thm-nrqm-oscillator-hermite-orthogonality: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  def-natural-numbers: mathematical-premise
  def-finite-sum-in-a-commutative-monoid: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "S. Axler, P. Bourdon, W. Ramey, Harmonic Function Theory, 2nd edition, author-hosted full text, Chapter 5, Proposition 5.5 and Proposition 5.8 (decomposition of homogeneous polynomials and dimension 2m+1), printed pp. 78-82"
      url: "https://www.axler.net/HFT.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 'Angular Momentum', §6 pp. 28-32 (three-dimensional isotropic oscillator and its angular-momentum levels)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2fd50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). For $k\in\mathbb N$ let $\mathcal P_k$ be the real vector space of homogeneous polynomial functions of degree $k$ on $\mathbb R^3$, with $\mathcal P_k=\{0\}$ for $k<0$. Put $r^2=x_1^2+x_2^2+x_3^2$, $\Delta=\partial_1^2+\partial_2^2+\partial_3^2$, and $\mathcal H_k=\ker(\Delta|_{\mathcal P_k})$. Define their explicit complexifications $\mathcal P_k^{\mathbb C}:=\{p+iq:p,q\in\mathcal P_k\}$ and $\mathcal H_k^{\mathbb C}:=\{p+iq:p,q\in\mathcal H_k\}$. The Laplacian and real rotation pullbacks extend complex-linearly to these spaces. Then:

(a) for every $l\ge2$, $\Delta:\mathcal P_l\to\mathcal P_{l-2}$ is onto and $\mathcal P_l=\mathcal H_l\oplus r^2\mathcal P_{l-2}$ as real vector spaces; the same decomposition holds over $\mathbb C$ after complexification;

(b) for every $l\ge0$, $\dim_{\mathbb R}\mathcal P_l=\binom{l+2}{2}$ and $\dim_{\mathbb R}\mathcal H_l=2l+1$, and these equal $\dim_{\mathbb C}\mathcal P_l^{\mathbb C}$ and $\dim_{\mathbb C}\mathcal H_l^{\mathbb C}$, respectively;

(c) for $l\ge0$ and $0\le m\le l$, using the exact positive constants $b_{lm}$ and Legendre polynomials of [[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]], set, initially for $x\ne0$,
$$h_{lm}(x):=(-1)^m b_{lm}(2\pi)^{-1/2}(x_1+ix_2)^m r^{l-m}P_l^{(m)}(x_3/r).$$
This expression has a unique polynomial extension to $\mathbb R^3$, with value $0$ at the origin for $l>0$ and the nonzero constant $b_{00}/\sqrt{2\pi}=1/\sqrt{4\pi}$ for $l=0$. It is a nonzero element of $\mathcal H_l^{\mathbb C}$, and $h_{lm}|_{S^2}=Y_{lm}$. For $1\le m\le l$ define $h_{l,-m}=(-1)^m\overline{h_{lm}}$. The $2l+1$ functions $(h_{lm})_{-l\le m\le l}$ form a complex basis of $\mathcal H_l^{\mathbb C}$, and their restrictions form a complex basis of its restriction space. The restriction maps on $\mathcal H_l$ and $\mathcal H_l^{\mathbb C}$ are injective; a corresponding real basis of $\mathcal H_l$ is $h_{l0}$ together with $\sqrt2\operatorname{Re}h_{lm}$ and $\sqrt2\operatorname{Im}h_{lm}$ for $1\le m\le l$.

(d) let $\omega,m_0,\hbar>0$, $\ell=\sqrt{\hbar/(m_0\omega)}$, and let $(\psi_N)_{N\in\mathbb N^3}$ be the complex Hilbert-space eigenbasis of the realised isotropic oscillator in [[thm-nrqm-oscillator-multidimensional-oscillator-completeness]], with $H\psi_N=\hbar\omega(|N|+\tfrac32)\psi_N$, $|N|=N_1+N_2+N_3$. Put $E_M:=\operatorname{span}_{\mathbb C}\{\psi_N:|N|=M\}$. Then:

(d1) each $f\in E_M$ has a unique representation $f=P e^{-r^2/(2\ell^2)}$ with a complex polynomial $P$ of degree at most $M$, and the map $\Phi_M:E_M\to\mathcal P_M^{\mathbb C}$ assigning its degree-$M$ homogeneous part (zero if its degree is lower) is a complex-linear isomorphism. It restricts to a real-linear isomorphism from the real span of the same $\psi_N$ onto $\mathcal P_M$;

(d2) every rotation $R\in SO(3)$ preserves $E_M$. With $\pi(R)f=f(R^{-1}\cdot)$ on $E_M$ and $\rho(R)p=p(R^{-1}\cdot)$ on $\mathcal P_M^{\mathbb C}$, one has $\Phi_M\pi(R)=\rho(R)\Phi_M$; the same identity holds on the real subspaces;

(d3) one has the decomposition into rotation-invariant complex subspaces
$$E_M=\bigoplus_{j=0}^{\lfloor M/2\rfloor}\Phi_M^{-1}(r^{2j}\mathcal H_{M-2j}^{\mathbb C}),$$
and the analogous real decomposition. The harmonic orbital degrees in this level are exactly $l=M,M-2,M-4,\dots\ge0$, each occurring once as a harmonic-degree summand. In particular not every $l\le M$ occurs, and $\sum_{j=0}^{\lfloor M/2\rfloor}(2(M-2j)+1)=\binom{M+2}{2}$ is the oscillator-level multiplicity.

All assertions concern polynomials and the realised oscillator, with no physical interpretation asserted.

## Facts & Assumptions

**Given:** The real and complex polynomial spaces, $r^2$, $\Delta$, the exact $Y_{lm}$ convention, and the oscillator parameters and basis.

[F1] Product differentiation gives $\Delta(fg)=f\Delta g+2\nabla f\cdot\nabla g+g\Delta f$, $\Delta r^2=6$, and Euler's identity $x\cdot\nabla q=dq$ for a degree-$d$ homogeneous polynomial ([[thm-algebra-of-derivatives]], [[def-homogeneous-polynomial-and-homogeneous-ideal]]). Sine and cosine satisfy $\sin'=\cos$ and $\cos'=-\sin$ (published result [[thm-sine-and-cosine-derivatives]]). For totally differentiable maps $f:U\to V$ and $g:V\to\mathbb R^p$, the total derivative satisfies $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ when the composite is defined (published result [[thm-chain-rule-for-total-derivatives]]). The Euclidean inverse function theorem states that a $C^1$ map with invertible total derivative at a point has a local $C^1$ inverse $g$ satisfying $Dg(y)=Df(g(y))^{-1}$ (published result [[thm-euclidean-inverse-function-theorem]]). The polar-chart map $T(r,\theta,\varphi)=r\Phi(\theta,\varphi)$ from $(0,\infty)\times(0,\pi)\times(0,2\pi)$ onto $\mathbb R^3\setminus K$, where $K:=\{(x,0,z):x\ge0\}$, is a $C^1$ diffeomorphism: this is proved in step 2.1 of [[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]]; its determinant $r^2\sin\theta$ is nonzero on that open domain. Thus its inverse coordinates $r,\theta,\varphi$ are $C^1$ there.

[F2] The degree-$l$ monomials in three variables are a basis of $\mathcal P_l$ and of its complexification; their number is $\binom{l+2}{2}$ ([[def-monomials-multidegree-and-total-degree]], [[thm-stars-and-bars]], [[def-linear-basis]], [[def-dimension]]). Finite-dimensional surjective endomorphisms are injective, by finite basis elimination.

[F3] $P_l(t)=(2^ll!)^{-1}(d/dt)^l(t^2-1)^l$ has degree $l$ and nonzero leading coefficient ([[thm-nrqm-orbital-and-spin-legendre-rodrigues-equation]]). The supplied associated function is $w_{lm}=(-1)^m(1-t^2)^{m/2}P_l^{(m)}$, and $Y_{lm}=b_{lm}w_{lm}(\cos\theta)e^{im\varphi}/\sqrt{2\pi}$, with $Y_{l,-m}=(-1)^m\overline{Y_{lm}}$ and the full family orthonormal in complex $L^2(S^2)$ ([[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]], [[thm-nrqm-orbital-and-spin-sphere-onb]]). Its angular differential equation gives $\Delta_{S^2}Y_{lm}=-l(l+1)Y_{lm}$ ([[thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]], [[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]], [[thm-sine-and-cosine-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[thm-euclidean-inverse-function-theorem]]).

[F4] $\psi_N=Q_Ne^{-r^2/(2\ell^2)}$ with $Q_N$ a real product of scaled Hermite polynomials, degree $|N|$, and degree-$|N|$ part a nonzero real multiple of $x^N$. The oscillator is self-adjoint and diagonal in the complete product basis, with eigenvalue $\lambda_{|N|}=\hbar\omega(|N|+3/2)$; the energies differ exactly when the total degrees differ, not whenever the multi-indices differ. On the finite product span its action is $H=-\hbar^2\Delta/(2m_0)+m_0\omega^2r^2/2$ ([[thm-nrqm-oscillator-multidimensional-oscillator-completeness]], [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]], [[thm-nrqm-oscillator-hermite-recurrence]], [[thm-nrqm-oscillator-hermite-orthogonality]]).

## Proof

1.1 [An explicit Laplacian right inverse with the correct degree] Fix $l\ge2$ and $q\in\mathcal P_{l-2}$. Let $J=\lfloor(l-2)/2\rfloor$ and $A_j=2(j+1)(2l-2j-1)$ for $0\le j\le J$. Every $A_j>0$. Define $c_0=(4l-2)^{-1}$ and $c_j=-c_{j-1}/A_j$ for $1\le j\le J$, and put $S_lq=\sum_{j=0}^Jc_jr^{2j+2}\Delta^jq$. Every term has degree $2j+2+(l-2-2j)=l$, and the whole polynomial lies in $r^2\mathcal P_{l-2}$. More generally [F1] gives $\Delta(r^{2t}p)=2t(2d+2t+1)r^{2t-2}p+r^{2t}\Delta p$ for $p\in\mathcal P_d$: compute $\nabla r^{2t}=2tr^{2t-2}x$ and $\Delta r^{2t}=2t(2t+1)r^{2t-2}$ and substitute Euler's identity. For $t=j+1$, $p=\Delta^jq$ this is $\Delta(r^{2j+2}\Delta^jq)=A_jr^{2j}\Delta^jq+r^{2j+2}\Delta^{j+1}q$. In $\Delta S_lq$, the coefficient of $q$ is $c_0A_0=1$, each coefficient of $r^{2j}\Delta^jq$ for $j\ge1$ is $c_jA_j+c_{j-1}=0$, and the last leftover vanishes since $\Delta^{J+1}q=0$. Hence $\Delta S_lq=q$. [F1, given, algebra]

1.2 [Legendre parity makes the solid expression a polynomial] Rodrigues' formula in [F3] gives $P_l(-t)=(-1)^lP_l(t)$ by differentiating an even polynomial $l$ times. After $m$ more derivatives, $P_l^{(m)}(-t)=(-1)^{l-m}P_l^{(m)}(t)$, and its degree is $l-m$ with nonzero leading coefficient for $0\le m\le l$. Thus if $P_l^{(m)}(t)=\sum_kd_kt^k$, every nonzero term has $0\le k\le l-m$ and $k\equiv l-m\pmod2$. Consequently $r^{l-m}P_l^{(m)}(x_3/r)=\sum_kd_kx_3^k(r^2)^{(l-m-k)/2}$ is a polynomial: every exponent of $r^2$ is a nonnegative integer. Multiplication by $(-1)^mb_{lm}(x_1+ix_2)^m/\sqrt{2\pi}$ makes the displayed $h_{lm}$ homogeneous of degree $l$. This polynomial determines the unique extension from $x\ne0$, taking value zero for $l>0$ and the nonzero constant $b_{00}/\sqrt{2\pi}$ for $l=0$; since $P_0=1$ and $\int_{-1}^1P_0^2=2$, this constant is $1/\sqrt{4\pi}$. In angle coordinates $x_1+ix_2=r\sin\theta e^{i\varphi}$, so the factor $(-1)^m$ gives exactly $h_{lm}=r^lY_{lm}$, including the required convention. [F3, algebra]

1.3 [Polynomial Gaussian core and the top-degree isomorphism] Write $G(x)=e^{-r^2/(2\ell^2)}$. The leading terms in [F4] show by induction on degree that every complex polynomial $P$ of degree at most $D$ is a finite linear combination of the $Q_N$ with $|N|\le D$: subtract the matching nonzero multiples of all leading monomials of degree $D$ and apply the induction to the polynomial of lower degree. The same argument uses real coefficients when $P$ is real. Hence every $PG$ belongs to the oscillator's finite product core. An element of $E_M$ is uniquely $PG$ with degree at most $M$, because $G$ never vanishes; equality of the continuous functions as $L^2$ classes implies equality everywhere and thus polynomial uniqueness. On the basis $(\psi_N)_{|N|=M}$, the degree-$M$ map $\Phi_M$ takes each vector to a nonzero real multiple of its distinct monomial $x^N$. These monomials are a basis of $\mathcal P_M^{\mathbb C}$, so $\Phi_M$ is directly an isomorphism, and its restriction to real spans is the stated real isomorphism. This avoids the incorrect assertion that different multi-indices necessarily have different energies. [F2, F4, algebra]

2.1 [Direct sum and all dimensions] Multiplication by $r^2$ is injective on polynomials, so $r^2\mathcal P_{l-2}$ and $\mathcal P_{l-2}$ have the same finite dimension. Step 1.1 proves that $\Delta:r^2\mathcal P_{l-2}\to\mathcal P_{l-2}$ is onto, hence bijective by [F2]. For $p\in\mathcal P_l$, $p-S_l(\Delta p)\in\mathcal H_l$ and $S_l(\Delta p)\in r^2\mathcal P_{l-2}$, proving the sum. If a vector in the intersection is $r^2q$ and harmonic, bijectivity makes $q=0$, proving directness. Thus $\dim\mathcal H_l=\binom{l+2}{2}-\binom l2=2l+1$ for $l\ge2$; for $l=0,1$, every polynomial is harmonic and the dimensions are $1,3$. Applying the real decomposition separately to real and imaginary parts proves the complex decomposition. A real basis remains a complex basis of its explicit complexification, since taking real and imaginary parts verifies both spanning and independence, so the complex dimensions agree. [step 1.1, F2, algebra]

2.2 [Rotations preserve oscillator levels before intertwining] Let $f=PG\in E_M$ and $R\in SO(3)$. Since $|R^{-1}x|=|x|$, its pullback is $(P\circ R^{-1})G$, a polynomial Gaussian of degree at most $M$; step 1.3 places it in the finite product core, hence in $D(H)$. The chain rule and $R^{-1}(R^{-1})^{\mathsf T}=I$ give $\Delta(f\circ R^{-1})=(\Delta f)\circ R^{-1}$, and multiplication by $r^2$ also commutes with the pullback. The exact differential expression of [F4] on the core therefore gives $H\pi(R)f=\pi(R)Hf=\lambda_M\pi(R)f$. Expand the rotated vector in its finite product basis. Since the energies are $\lambda_K=\hbar\omega(K+3/2)$ for total degree $K$ and are distinct when $K\ne M$, the eigen-equation kills every coefficient outside total degree $M$. Thus $\pi(R)f\in E_M$, and applying $R^{-1}$ proves equality of the preserved space. Only after establishing this invariance define $\pi(R)$ on $E_M$. An invertible linear substitution preserves each homogeneous degree, so the degree-$M$ part of $P\circ R^{-1}$ is $(\Phi_Mf)\circ R^{-1}$. Hence $\Phi_M\pi(R)=\rho(R)\Phi_M$, also on the real subspaces. [step 1.3, F1, F4, algebra]

3.1 [Harmonicity, complex basis and its real counterpart] On the open polar-coordinate set $r>0$, $0<\theta<\pi$, [F1] gives that the inverse coordinates are $C^1$ and that their derivative is the inverse Jacobian of $T$. Differentiating the coordinate map with the sine and cosine derivatives in [F1], the Jacobian of $T$ has columns $\partial_rT=(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$, $\partial_\theta T=(r\cos\theta\cos\varphi,r\cos\theta\sin\varphi,-r\sin\theta)$, and $\partial_\varphi T=(-r\sin\theta\sin\varphi,r\sin\theta\cos\varphi,0)$; its determinant is $r^2\sin\theta\ne0$. Matrix inversion gives the inverse Jacobian rows, hence $\partial_{x_1}=\sin\theta\cos\varphi\,\partial_r+\frac{\cos\theta\cos\varphi}{r}\,\partial_\theta-\frac{\sin\varphi}{r\sin\theta}\,\partial_\varphi$, $\partial_{x_2}=\sin\theta\sin\varphi\,\partial_r+\frac{\cos\theta\sin\varphi}{r}\,\partial_\theta+\frac{\cos\varphi}{r\sin\theta}\,\partial_\varphi$, and $\partial_{x_3}=\cos\theta\,\partial_r-\frac{\sin\theta}{r}\,\partial_\theta$. Squaring these operators and adding with the product rule, the mixed terms cancel, the second-derivative coefficients are $1$, $r^{-2}$, and $(r^2\sin^2\theta)^{-1}$, and the first-derivative coefficients are $2r^{-1}$, $r^{-2}\cot\theta$, and $0$. Thus $\Delta=\partial_r^2+\frac2r\partial_r+\frac1{r^2}\left(\partial_\theta^2+\cot\theta\,\partial_\theta+\frac1{\sin^2\theta}\partial_\varphi^2\right)$. Applying this identity to $h_{lm}(x)=r^lY_{lm}(\theta,\varphi)$ gives $\Delta h_{lm}=r^{l-2}\bigl(l(l+1)Y_{lm}-\mathcal S Y_{lm}\bigr)=0$ by [F3], where $\mathcal S$ is the angular differential expression from [[thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]], [[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]], [[thm-sine-and-cosine-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[thm-euclidean-inverse-function-theorem]] and $\mathcal S Y_{lm}=l(l+1)Y_{lm}$. The polynomial $\Delta h_{lm}$ is continuous and vanishes on this dense set, hence vanishes everywhere. Its real and imaginary parts are therefore real harmonic polynomials. Negative indices follow by complex conjugation, and nonvanishing follows from the norm-one restriction $Y_{lm}$. Restriction is injective: if a homogeneous polynomial vanishes on $S^2$, then $p(x)=|x|^lp(x/|x|)=0$ for $x\ne0$, and continuity also gives its value at zero. Thus the $2l+1$ orthonormal restrictions are linearly independent in a complex space of dimension $2l+1$ by step 2.1 and hence form a basis. The invertible pairwise transformation from $h_{lm},h_{l,-m}$ to $\sqrt2\operatorname{Re}h_{lm},\sqrt2\operatorname{Im}h_{lm}$, together with real $h_{l0}$, produces $2l+1$ real harmonic polynomials which are complex-linearly independent, hence real-linearly independent and a real basis. [step 2.1, step 1.2, F1, F3, algebra]

3.2 [Full oscillator-level decomposition and multiplicities] Iterating the proved direct decomposition of step 2.1 yields $\mathcal P_M=\bigoplus_{j=0}^{\lfloor M/2\rfloor}r^{2j}\mathcal H_{M-2j}$: at each substitution directness is preserved because multiplication by $r^2$ is injective. Complexifying gives the same result for $\mathcal P_M^{\mathbb C}$. A rotation commutes with the Laplacian, preserves degree, and preserves $r^2$, so each displayed harmonic-degree summand is invariant. Transfer it through the intertwining isomorphism of steps 1.3 and 2.2 to obtain exactly the stated decomposition of $E_M$, with one copy of each degree $M,M-2,\dots$. All listed degrees occur because their dimensions $2(M-2j)+1$ are positive; no other degree is part of the exhaustive direct decomposition. Their sum is $\binom{M+2}{2}$ by the polynomial-space dimension, and equals the number of oscillator basis vectors with $|N|=M$ by [F2] and [F4]. The same transfer over $\mathbb R$ gives the claimed real decomposition. [step 2.1, step 1.3, step 2.2, F1, F2, F4, algebra]

4.1 [Conclusion] Steps 1.1 and 2.1 prove (a) and (b), steps 1.2 and 3.1 prove (c), and steps 1.3, 2.2 and 3.2 prove (d1)–(d3) with the full real and complex spaces explicit. Countable Choice is retained for the invoked sphere and realised-oscillator suppliers; the finite polynomial recursions, finite basis changes and fixed top-degree maps require no additional choice principle. [step 1.1, step 2.1, step 1.2, step 3.1, step 1.3, step 2.2, step 3.2, given] ∎
