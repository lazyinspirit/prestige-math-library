---
id: lem-em-spherical-harmonic-basis-and-addition
kind: lemma
domain: mathematics
title: "Spherical harmonics: orthogonal decomposition, complete basis and addition theorem"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 1
deps: [lem-em-convergent-legendre-kernel, thm-real-stone-weierstrass-general, lem-complex-translation-and-approximate-identity-interfaces, cor-second-green-identity-on-a-bounded-c-one-domain, thm-gram-schmidt-orthonormalisation, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-laplacian-of-a-c2-function, def-countable-choice, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, def-homogeneous-polynomial-and-homogeneous-ideal, def-monomials-multidegree-and-total-degree, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, def-directional-and-partial-derivatives, lem-character-orthogonality-on-a-lattice-fundamental-domain, lem-finite-ambient-partitions-for-euclidean-boundary-integration, lem-test-function-cutoffs-and-euclidean-localization, def-surface-integral-on-a-compact-c-one-hypersurface, thm-sine-and-cosine-derivatives, thm-ftc-second-part]
dependency_roles:
  thm-ftc-second-part: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  lem-em-convergent-legendre-kernel: mathematical-premise
  thm-real-stone-weierstrass-general: mathematical-premise
  lem-complex-translation-and-approximate-identity-interfaces: mathematical-premise
  cor-second-green-identity-on-a-bounded-c-one-domain: mathematical-premise
  thm-gram-schmidt-orthonormalisation: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  def-homogeneous-polynomial-and-homogeneous-ideal: mathematical-premise
  def-monomials-multidegree-and-total-degree: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  lem-character-orthogonality-on-a-lattice-fundamental-domain: mathematical-premise
  lem-finite-ambient-partitions-for-euclidean-boundary-integration: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sheldon Axler, Paul Bourdon, Wade Ramey, Harmonic Function Theory, 2nd edition, author-hosted full text"
      url: "https://www.axler.net/HFT.pdf"
      locator: "Chapter 5 (printed pp. 78-82: orthogonal spherical decomposition; pp. 94-100: zonal harmonic projection, addition theorem and Poisson expansion), read in the run's recorded full-text retrieval. The source uses unit-mass sphere measure; the formulas here adapt to mass 4 pi. The choice bookkeeping and the finite Fourier zonal-uniqueness argument are supplied locally and are not claimed as verbatim source theorems."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. Let $\mathcal P_l$ denote the real vector space of homogeneous polynomials of degree $l$ on $\mathbb R^3$ ([[def-homogeneous-polynomial-and-homogeneous-ideal]], [[def-monomials-multidegree-and-total-degree]]), $H_l=\ker(\Delta:\mathcal P_l\to\mathcal P_{l-2})$ with $\mathcal P_k=\{0\}$ for $k<0$, and let spherical harmonics of degree $l$ be the restrictions of $H_l$ to $S^2$, with unnormalised surface measure $d\Omega$ of total mass $4\pi$ ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]). Then $\mathcal P_l=H_l\oplus|x|^2\mathcal P_{l-2}$, $\dim H_l=2l+1$, harmonics of distinct degree are orthogonal in $L^2(S^2,d\Omega)$, and the union over $l$ of the spaces of spherical harmonics admits a complete orthonormal basis of $L^2(S^2,d\Omega)$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]). For any real orthonormal basis $Y_{lm}$, $m=1,\dots,2l+1$, of degree-$l$ harmonics the addition theorem holds:

$$\sum_{m=1}^{2l+1}Y_{lm}(n)Y_{lm}(n')=\frac{2l+1}{4\pi}P_l(n\cdot n'),$$

where $P_l$ is the Legendre polynomial of the convergent zonal kernel lemma ([[lem-em-convergent-legendre-kernel]]). The Laplacian is the Euclidean one ([[def-laplacian-of-a-c2-function]]). This supplies the harmonic decomposition, orthogonality, completeness and exact addition kernel; it does not assert higher boundary regularity. The purely polynomial decomposition and finite dimension identities use no Choice; the surface/$L^2$/completeness claims retain the stated Countable Choice.

## Facts & Assumptions
**Given:** Countable Choice; the spaces $\mathcal P_l$ and $H_l$ of the Statement; the unit sphere $S^2$ with its chart/polar surface measure $d\Omega$ of total mass $4\pi$; the Legendre polynomials $P_l$ of [[lem-em-convergent-legendre-kernel]].

[F1] **Homogeneous polynomials.** A polynomial on $\mathbb R^3$ is homogeneous of degree $d$ when every occurring monomial has total degree $d$; monomials are indexed by exponent multi-indices and their total degree is the sum of exponents ([[def-homogeneous-polynomial-and-homogeneous-ideal]], [[def-monomials-multidegree-and-total-degree]]).

[F2] **Radial calculus and Euler identity.** For a $C^2$ function $f$ of $r=|x|$, $\Delta f=f''+2f'/r$ away from the origin, and differentiability rules hold for polynomials and composites ([[def-laplacian-of-a-c2-function]], [[def-directional-and-partial-derivatives]], [[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]]); for a homogeneous polynomial $Q$ of degree $d$, Euler's identity $x\cdot\nabla Q=dQ$ holds, obtained by differentiating $t\mapsto Q(tx)=t^dQ(x)$.

[F3] **Second Green identity and Euler on spheres.** For a bounded $C^1$ domain, $\int_\Omega(v\Delta u-u\Delta v)=\int_{\partial\Omega}(v\partial_\nu u-u\partial_\nu v)$ with outward normal ([[cor-second-green-identity-on-a-bounded-c-one-domain]]); consequently homogeneous harmonics $H_k$ satisfy $\partial_\nu H_k=kH_k/R$ on the sphere of radius $R$.

[F4] **Sphere measure and surface integrals.** The chart surface measure on $S^2$ agrees with the polar measure ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]), is rotation invariant, and surface integrals over compact hypersurfaces are those of [[def-surface-integral-on-a-compact-c-one-hypersurface]]; finite ambient partitions and smooth cutoffs subordinate to the six coordinate graph charts of $S^2$ exist ([[lem-finite-ambient-partitions-for-euclidean-boundary-integration]], [[lem-test-function-cutoffs-and-euclidean-localization]]).

[F5] **$L^2$ structure and density tools.** Real $L^2(S^2,d\Omega)$ with the integral pairing is a real Hilbert space under $\mathrm{AC}_\omega$ ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]); whole-space mollification converges in $L^2$ and the translation and approximate-identity interfaces apply ([[lem-complex-translation-and-approximate-identity-interfaces]]); the restricted real polynomial algebra on $S^2$ is unital and separates points, so it is uniformly dense in $C(S^2)$ by Stone-Weierstrass ([[thm-real-stone-weierstrass-general]]); finite Gram-Schmidt orthonormalises a finite linearly independent family ([[thm-gram-schmidt-orthonormalisation]]).

[F6] **Circle character orthogonality.** For the lattice $\mathbb Z\subseteq\mathbb R$, $\int_0^1e^{2\pi ik\theta}d\theta=\delta_{k0}$ ([[lem-character-orthogonality-on-a-lattice-fundamental-domain]]); after rescaling this is the vanishing of all nonzero Fourier coefficients of trigonometric polynomials used below.

[F7] **Legendre coefficient formula.** [[lem-em-convergent-legendre-kernel]] supplies $P_l(z)=\pi^{-1}\int_0^\pi[z+i\sqrt{1-z^2}\cos\theta]^l\,d\theta$ for $-1\le z\le1$, its real polynomial character, $P_l(1)=1$ and the convergent exterior coefficients $c_l(x,y)=|y|^l|x|^{-l-1}P_l(x\cdot y/(|x||y|))$. Harmonicity in $y$ is proved locally below, rather than attributed to its spatial-derivative clause.

[F8] **Trigonometric calculus and FTC.** Sine and cosine have derivatives cosine and minus sine ([[thm-sine-and-cosine-derivatives]]). For a differentiable function on a compact interval with integrable derivative, the integral of its derivative is its endpoint difference ([[thm-ftc-second-part]]); this applies to the smooth trigonometric products below.

## Proof

**Proof technique:** direct.

1.1 For a homogeneous $Q$ of degree $d$, differentiating $t\mapsto Q(tx)$ at $t=1$ gives Euler's identity $x\cdot\nabla Q=dQ$ by [F2]; consequently, for homogeneous $Q$ of degree $l-2j$, the product and chain rules and $\Delta(r^{2j})=2j(2j+1)r^{2j-2}$, $\nabla(r^{2j})\cdot\nabla Q=2j(l-2j)r^{2j-2}Q$ give $\Delta(r^{2j}Q)=2j(2l-2j+1)r^{2j-2}Q+r^{2j}\Delta Q$. [given, F1, F2, algebra]

1.2 Continuous functions are dense in $L^2(S^2,d\Omega)$: cover $S^2$ by its six coordinate graph charts, take a subordinate finite ambient partition and smooth cutoffs by [F4], pull a localised $L^2$ function back to the compact planar chart support (the surface density is bounded above and below there, so the pullback is $L^2$ for Lebesgue measure), extend by zero, mollify in the plane by [F5], multiply by the cutoff, pull back and sum the finitely many parts, obtaining continuous functions converging in $L^2(S^2,d\Omega)$. [given, F4, F5, algebra]

1.3 Fix $x\ne0$ and rotate coordinates so that $x/|x|=e_3$; write $s=y_3$ and $\varrho^2=y_1^2+y_2^2$. Put $A_j=\pi^{-1}\int_0^\pi\cos^{2j}\theta\,d\theta$. Finite expansion of [F7]'s integral and cancellation of the odd cosine powers under $\theta\mapsto\pi-\theta$ give $|x|^{l+1}c_l(x,y)=\sum_{j=0}^{\lfloor l/2\rfloor}b_j s^{l-2j}\varrho^{2j}$ with $b_j=(-1)^j\binom l{2j}A_j$. This polynomial agrees with the supplied coefficient for $y\ne0$ and defines its value at zero. Here $A_0=1$; integrating the derivative of $\sin\theta\cos^{2j+1}\theta$ by [F8], whose endpoint values vanish, gives $(2j+2)A_{j+1}=(2j+1)A_j$. Thus for $0\le j<\lfloor l/2\rfloor$, $4(j+1)^2b_{j+1}=-(l-2j)(l-2j-1)b_j$. Direct coordinate differentiation gives $\Delta(s^{l-2j}\varrho^{2j})=(l-2j)(l-2j-1)s^{l-2j-2}\varrho^{2j}+4j^2s^{l-2j}\varrho^{2j-2}$, with any term having zero coefficient omitted; the displayed recursion cancels every Laplacian coefficient, including the last term because its $s$ exponent is zero or one. Therefore the solid coefficient is homogeneous of degree $l$ and harmonic in $y$. It is nonzero and invariant under rotations fixing $x$, since $b_0=1$ and its value at $y=x/|x|$ after multiplication by $|x|^{l+1}$ is one. Rotation covariance transfers the conclusion to every fixed $x\ne0$. [F2, F7, F8, algebra]

2.1 For $P\in\mathcal P_l$ take $H=\sum_{j=0}^{\lfloor l/2\rfloor}a_jr^{2j}\Delta^jP$ with $a_0=1$ and $a_j=-a_{j-1}/[2j(2l-2j+1)]$; applying step 1.1 to each term, the coefficient of $r^{2j}\Delta^{j+1}P$ in $\Delta H$ is $a_j+2(j+1)(2l-2j-1)a_{j+1}=0$ for $0\le j<\lfloor l/2\rfloor$, and the remaining top term $\Delta^{\lfloor l/2\rfloor+1}P$ vanishes because $\Delta$ lowers degree by two and $2(\lfloor l/2\rfloor+1)>l$; hence $H\in H_l$ and $P-H\in r^2\mathcal P_{l-2}$, so $\mathcal P_l=H_l+r^2\mathcal P_{l-2}$. [step 1.1, F1, algebra]

3.1 For homogeneous harmonic $H_l,H_m$ with $l\ne m$, the second Green identity [F3] on the ball $B_R$ with both Laplacians zero gives $0=\int_{S_R}(H_l\partial_\nu H_m-H_m\partial_\nu H_l)=\frac{m-l}{R}\int_{S_R}H_lH_m\,dS$, and $\int_{S_R}H_lH_m\,dS=R^{l+m+2}\int_{S^2}H_lH_m\,d\Omega$ by homogeneity and [F4]; since $m\ne l$, the spherical functions $H_l|_{S^2}$ and $H_m|_{S^2}$ are orthogonal in $L^2(S^2,d\Omega)$, and by Euler the same computation shows the radial derivative of any homogeneous harmonic of degree $k$ on $S_R$ is $kH_k/R$. [step 2.1, F3, F4, algebra]

3.2 Directness is purely algebraic. On real polynomials define the positive inner product $\langle \sum_\alpha p_\alpha x^\alpha,\sum_\alpha q_\alpha x^\alpha\rangle_F=\sum_\alpha\alpha!p_\alpha q_\alpha$, with finite sums and $\alpha!=\alpha_1!\alpha_2!\alpha_3!$. Comparing monomial coefficients gives $\langle x_iP,Q\rangle_F=\langle P,\partial_iQ\rangle_F$, hence $\langle r^2P,Q\rangle_F=\langle P,\Delta Q\rangle_F$. If a harmonic homogeneous polynomial $H$ equals $r^2Q$, then $\langle H,H\rangle_F=\langle Q,\Delta H\rangle_F=0$, so $H=0$. The decomposition of step 2.1 is therefore direct in ZF, and multiplication by $r^2$ is injective (a product with $r^2$ vanishing as a polynomial vanishes at every nonzero point, and hence everywhere). Counting the degree-$l$ monomials gives $\dim H_l=\dim\mathcal P_l-\dim\mathcal P_{l-2}=2l+1$, including $l=0,1$ when $\mathcal P_{l-2}=\{0\}$. [step 2.1, F1, algebra]

4.1 The restricted real polynomial algebra on $S^2$ is unital and separates points (the three coordinate functions separate distinct points of the sphere), so it is uniformly dense in $C(S^2)$ by Stone-Weierstrass [F5]; decomposing each polynomial into homogeneous parts and each homogeneous part by step 2.1 into harmonic pieces of degrees $\le$ its degree, every polynomial restriction lies in the finite linear span of the spaces of spherical harmonics, so that span is dense in $C(S^2)$ in the uniform norm and hence in $L^2(S^2,d\Omega)$ together with step 1.2. [step 3.2, step 1.2, F5, algebra]

5.1 For each $l$ the restrictions of $H_l$ form a finite-dimensional inner-product space of dimension $2l+1$ by step 3.2, and finite Gram-Schmidt [F5] applied to a fixed ordered monomial-elimination basis of $H_l$ produces an orthonormal basis $Y_{l1},\dots,Y_{l,2l+1}$; by step 3.1 the spaces of different degrees are mutually orthogonal, so the union is an orthonormal family whose closed span contains all spherical harmonics and is dense by step 4.1, that is, it is a complete orthonormal system of $L^2(S^2,d\Omega)$ in the sense of [F5]'s definition. [step 3.2, step 4.1, F5, algebra]

6.1 Fix $l$ and set $K_l(n,n')=\sum_{m=1}^{2l+1}Y_{lm}(n)Y_{lm}(n')$; if $\tilde Y_{lm}=\sum_kO_{mk}Y_{lk}$ is another real orthonormal basis, then $\sum_m\tilde Y_{lm}(n)\tilde Y_{lm}(n')=\sum_{k,k'}\bigl(\sum_mO_{mk}O_{mk'}\bigr)Y_{lk}(n)Y_{lk'}(n')=K_l(n,n')$ because $O$ is orthogonal, so $K_l$ is basis independent. [step 5.1, algebra]

7.1 For a proper rotation $R$ of $\mathbb R^3$, the map $H\mapsto H\circ R$ permutes the harmonic polynomials of each degree and preserves the sphere measure [F4]; hence $K_l(Rn,Rn')=K_l(n,n')$. For fixed $n'$, the function $n\mapsto K_l(n,n')$ is the restriction of a homogeneous harmonic polynomial of degree $l$ (a linear combination of the chosen representatives of the $Y_{lm}$) that is invariant under all rotations fixing $n'$; after rotating $n'$ to $e_3$, such an invariant homogeneous polynomial has the form $\sum_{j=0}^{\lfloor l/2\rfloor}b_jx_3^{l-2j}(x_1^2+x_2^2)^j$, because in the complex coordinates $u=x_1+ix_2$, $v=x_1-ix_2$ the monomial $u^pv^qz^c$ acquires the factor $e^{i(p-q)\theta}$ under the rotation by $\theta$ and the vanishing of all nonzero Fourier coefficients [F6] forces $p=q$; harmonicity then gives the recursion $4(j+1)^2b_{j+1}=-(l-2j)(l-2j-1)b_j$, so all coefficients are determined by $b_0$ and the space of invariant harmonics of degree $l$ is at most one dimensional. [step 6.1, F2, F4, F6, algebra]

8.1 By step 1.3 the solid zonal coefficient $c_l(x,y)$ of the convergent kernel lemma, read for fixed $x\ne0$ as a function of $y$, is a homogeneous harmonic polynomial of degree $l$, equal to $|x|^{-l-1}|y|^lP_l(x\cdot y/(|x||y|))$; for $n'=x/|x|$ and $y=rn$ it restricts to the nonzero invariant harmonic $r^lP_l(n\cdot n')$, so by the one-dimensionality of step 7.1 there is a scalar $\lambda(n')$ with $K_l(n,n')=\lambda(n')P_l(n\cdot n')$; since $K_l$ is rotation invariant by step 7.1 and proper rotations act transitively on $S^2$, $\lambda$ is independent of $n'$, and $K_l(n,n)=\lambda P_l(1)=\lambda$ by $P_l(1)=1$. [step 7.1, step 1.3, given, F7, algebra]

9.1 Integrate the diagonal identity $K_l(n,n)=\sum_mY_{lm}(n)^2=\lambda$ over $S^2$: orthonormality gives $\sum_m\|Y_{lm}\|_{L^2(S^2)}^2=2l+1$ while the constant $\lambda$ integrates to $4\pi\lambda$ by the total mass [F4], so $\lambda=(2l+1)/(4\pi)$ and $\sum_mY_{lm}(n)Y_{lm}(n')=\frac{2l+1}{4\pi}P_l(n\cdot n')$; this proves the addition theorem and completes the decomposition, orthogonality, completeness and exact kernel assertions of the Statement, with Countable Choice used only through the cited surface, $L^2$ and mollification interfaces. [step 8.1, given, F4, F5, algebra] ∎
