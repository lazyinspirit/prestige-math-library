---
id: lem-ip-collared-sobolev-besov-source-functional-cutoff
kind: lemma
title: Besov smoothness gives the exact collared Sobolev penalty a cutoff source bound
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-plancherel
  - thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions
  - thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces
  - thm-young-convolution-inequality
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Frederic Weidling, Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs
      url: https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1
      locator: Theorem 6.12; the present proof treats the intrinsic quadratic Sobolev pairing directly
dependency_level: 0
---

## Statement

Assume Countable Choice. Put $\Omega=B_1(0)\subset\mathbb R^3$, fix $0<\rho<1$, and let $5/2<s<7/2$ and $s<t<2s-1$. Use the following precise intrinsic Hilbert norm on $H^s(\Omega)$. If $s=m+\theta$ with integer $m\ge0$ and $0<\theta<1$, set
$$\|v\|_{s,\Omega}^2=\sum_{|\alpha|\le m}\|D^\alpha v\|_{L^2(\Omega)}^2+\sum_{|\alpha|=m}\int_{\Omega\times\Omega}\frac{|D^\alpha v(x)-D^\alpha v(y)|^2}{|x-y|^{3+2\theta}}\,dx\,dy.$$
For integer $s=3$ use just the derivative sum with $m=3$. Denote the corresponding real inner product by $(\cdot,\cdot)_{s,\Omega}$. On $\mathbb R^3$ use the unitary Fourier transform and $\|f\|_{H^r}^2=\int\langle\xi\rangle^{2r}|\widehat f(\xi)|^2d\xi$. Let $B^r_{2,\infty}(\mathbb R^3)$ have norm $\sup_{j\ge0}2^{jr}\|\mathbf1_{A_j}\widehat f\|_2$, where $A_0=\{|\xi|<2\}$ and $A_j=\{2^j\le|\xi|<2^{j+1}\}$ for $j\ge1$; the restriction space on $\Omega$ consists of restrictions of members of this whole-space Besov space.

Let $\sigma^\dagger\in H^s(\Omega)\cap B^t_{2,\infty}(\Omega)$ be real and equal to $1$ almost everywhere on $\Omega\setminus B_\rho$. Then there is $C>0$, depending on $\sigma^\dagger,s,t,\rho$, such that for every real $\sigma\in H^s(\Omega)$ also equal to $1$ there and every integer $J\ge0$,
$$-(\sigma^\dagger,\sigma-\sigma^\dagger)_{s,\Omega}\le C2^{J(2s-t-1)}\|\sigma-\sigma^\dagger\|_{H^1(\Omega)}+C2^{-J(t-s)}\|\sigma-\sigma^\dagger\|_{s,\Omega}.$$
Consequently, suppose on a specified admissible sublevel a forward map $G$ satisfies $\|\sigma-\sigma^\dagger\|_{H^1(\Omega)}\le C_0\omega(\|G(\sigma)-G(\sigma^\dagger)\|)$ with $\omega(0)=0$ and $0\le\omega\le1$. For the exact regularizer $R(\sigma)=\frac12\|\sigma\|_{s,\Omega}^2$, its exact Bregman distance is $D_R(\sigma,\sigma^\dagger)=\frac12\|\sigma-\sigma^\dagger\|_{s,\Omega}^2$, and
$$-(\sigma^\dagger,\sigma-\sigma^\dagger)_{s,\Omega}\le\frac34D_R(\sigma,\sigma^\dagger)+C_1\omega(\|G(\sigma)-G(\sigma^\dagger)\|)^{2(t-s)/(t-1)}.$$
In particular, an $H^1$ stability modulus of order $[\log(1/u)]^{-(s-3/2)}$ yields a VSC source term of order $[\log(1/u)]^{-\nu}$ with $\nu=(t-s)(2s-3)/(t-1)$. The conditional stability estimate is a hypothesis here, not a conclusion.

## Statement references

[[thm-plancherel]]

[[thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces]]

[Weidling, Theorem 6.12](https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1)

## Facts & Assumptions

**Given:** Countable Choice and the intrinsic penalty, exponents, collar and truth in the Statement.

[F1] Plancherel supplies the unitary $L^2$ transform. Its extension to tempered distributions, agreement with the $L^2$ transform, and derivative rule are supplied separately by [[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]], [[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]], and [[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]]. [[thm-plancherel]]

[F2] Smooth dyadic Fourier blocks characterize the Bessel Hilbert Sobolev norms. [[thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces]]

[F3] Young's convolution inequality in the $L^1*L^2\to L^2$ case bounds convolution by an $L^1$ kernel on $L^2$. [[thm-young-convolution-inequality]]

[F4] Tonelli's theorem permits interchanging nonnegative measurable integrals on the sigma-finite Lebesgue product used below. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[A1] Countable Choice is used at the Fourier and Hilbert-Sobolev interfaces. [[def-countable-choice]]

## Proof

1.1 Use the angular-frequency convention $\widehat f(\xi)=(2\pi)^{-3/2}\int e^{-ix\cdot\xi}f(x)dx$. The $2\pi$-frequency results in [F1] transfer by $\widehat f(\xi)=(2\pi)^{-3/2}(\mathcal F_{2\pi}f)(\xi/(2\pi))$, with the same change of variables on distributional tests; hence $\widehat{D^\alpha f}=(i\xi)^\alpha\widehat f$ and the transform remains unitary. The fixed frequency dilation changes only equivalence constants in the dyadic norms of [F2]. We record explicitly the smooth-multiplication bound for the stated Besov convention. Write $Q_j=\mathbf1_{A_j}(D)$. For $\chi\in C_c^\infty(\mathbb R^3)$, $Q_j\chi Q_k$ has Fourier kernel $(2\pi)^{-3/2}\mathbf1_{A_j}(\xi)\widehat\chi(\xi-\eta)\mathbf1_{A_k}(\eta)$. If $|j-k|\le2$, Young's convolution inequality [F3] bounds its $L^2$ operator norm by a constant times $\|\widehat\chi\|_1$. If $|j-k|>2$, then $|\xi-\eta|\ge c2^{\max(j,k)}$ on these supports. Repeated integration by parts in the Fourier integral of $\chi$ gives $|\widehat\chi(\zeta)|\le C_N(1+|\zeta|)^{-N}$. Cauchy–Schwarz in the two frequency variables therefore bounds the operator norm by $C_N2^{-N\max(j,k)}2^{3(j+k)/2}$. For any real $r$, multiply these bounds by $2^{jr-kr}$ and sum over $k$. Choosing $N>2|r|+8$ makes both off-diagonal geometric sums uniformly bounded in $j$, while the near-diagonal sum has at most five terms. Hence $\|\chi f\|_{B^r_{2,\infty}}\le C_{r,\chi}\|f\|_{B^r_{2,\infty}}$. These calculations first apply to finite block sums; the same estimates give their convergence in distributions, since a Schwartz test has faster-than-polynomial Fourier decay. [A1, F1, F3, given, algebra]

2.1 The sharp annular definition agrees, up to constants, with any usual smooth inhomogeneous dyadic definition at $p=2$. Indeed a sharp annulus meets at most a fixed number of the smooth supports at neighboring scales. On that annulus, the identity $\sum\varphi_j=1$ and Cauchy–Schwarz give its $L^2$ norm at most the sum of those finitely many smooth-block $L^2$ norms; conversely each smooth symbol has magnitude at most one and support in finitely many sharp annuli. The weights $2^{jr}$ differ by only a constant at neighboring scales. The low blocks also meet only finitely many supports. This proves both Besov norm comparisons. For Hilbert Sobolev norms, [F1] gives directly $\|f\|_{H^r}^2\asymp\sum_j2^{2jr}\|Q_jf\|_2^2$, consistently with [F2]. [F1, F2, step 1.1, algebra]

3.1 Choose $\chi_0\in C_c^\infty(\Omega)$ equal to one near $\overline{B_\rho}$, and choose $\eta\in C_c^\infty(\mathbb R^3)$ equal to one near $\overline\Omega$. Let $\widetilde\sigma^\dagger$ be one whole-space $B^t_{2,\infty}$ extension, whose existence is part of the restriction-space hypothesis. The compactly supported distribution $f^\dagger:=\chi_0(\widetilde\sigma^\dagger-1)$ is in $B^t_{2,\infty}(\mathbb R^3)$ by step 1.1 (the constant term multiplied by $\chi_0$ is smooth). It equals $\sigma^\dagger-1$ on $\Omega$ and vanishes outside $\overline{B_\rho}$, since the conductivity equals one in the collar. Thus $v^\dagger=\eta+f^\dagger$ is a compactly supported $B^t_{2,\infty}$ extension of $\sigma^\dagger$. In particular $v^\dagger\in H^s(\mathbb R^3)$: the squared block sum is bounded by a constant times $\sum_j2^{-2j(t-s)}<\infty$. [step 1.1, step 2.1, given, choose, algebra]

3.2 For $e=\sigma-\sigma^\dagger$, let $e_0$ be its zero extension. Its support lies in $\overline{B_\rho}$. Zero extension creates no boundary derivatives because $e$ vanishes on an open collar: local distributional tests near $\partial\Omega$ see zero, and interior tests give exactly the zero extensions of the weak derivatives. For $s=m+\theta$ noninteger, the whole-space top-order difference integral equals the integral over $\Omega^2$ plus $2\int_\Omega|D^\alpha e(x)|^2\int_{\mathbb R^3\setminus\Omega}|x-y|^{-3-2\theta}dy\,dx$. Where $D^\alpha e$ can be nonzero, the inner integral is bounded by $\int_{|z|\ge1-\rho}|z|^{-3-2\theta}dz<\infty$. The whole-space difference norm is therefore bounded by $C\|e\|_{s,\Omega}$, and the integer case is immediate. The translation identity $\widehat{g(\cdot+h)}(\xi)=e^{i\xi\cdot h}\widehat g(\xi)$ follows by substitution for Schwartz functions and then by $L^2$ density and unitarity for every $g\in L^2$. Thus [F1] and Tonelli [F4] give $\int\int|g(x+h)-g(x)|^2|h|^{-3-2\theta}dx\,dh=\int|\widehat g(\xi)|^2\int|e^{i\xi\cdot h}-1|^2|h|^{-3-2\theta}dh\,d\xi$. The inner integral equals $c_\theta|\xi|^{2\theta}$ by rotation and dilation; $0<c_\theta<\infty$ follows by the bounds $|e^{iu}-1|\le\min\{2,|u|\}$. Summing derivative multipliers shows that this whole-space difference norm is equivalent to $\|e_0\|_{H^s}$. Thus $\|e_0\|_{H^s}\le C\|e\|_{s,\Omega}$, while exactly $\|e_0\|_{H^1}=\|e\|_{H^1(\Omega)}$. [F1, F4, step 2.1, given, algebra]

4.1 Let $B_s(v,w)$ be the whole-space intrinsic bilinear form associated with the derivative and difference norm in step 3.2. Its Fourier multiplier $p_s(\xi)$ equals $\sum_{|\alpha|\le m}\xi^{2\alpha}+c_\theta\sum_{|\alpha|=m}\xi^{2\alpha}|\xi|^{2\theta}$ in the noninteger case, and just the first polynomial in the integer case. Thus $|p_s(\xi)|\le C\langle\xi\rangle^{2s}$, and $P_0:=p_s(D)v^\dagger$ belongs to $B^{t-2s}_{2,\infty}$ by the annular multiplier bound and step 3.1. Its distributional pairing with $e_0$ is $B_s(v^\dagger,e_0)$. The pairing is defined by convergent Fourier blocks: high blocks have the product bound $C2^{-j(t-s)}\|e_0\|_{H^s}$, a summable sequence. This also justifies the bilinear identity by truncation and limits, without assuming classical derivatives of order $2s$. [F1, step 2.1, step 3.1, step 3.2, algebra]

5.1 In the integer case the whole-space and domain pairings are identical, since every derivative of $e_0$ is supported in $\overline{B_\rho}$; take $P=P_0$. For noninteger $s=m+\theta$, their difference is $$B_s(v^\dagger,e_0)-(\sigma^\dagger,e)_{s,\Omega}=2\sum_{|\alpha|=m}\int_\Omega D^\alpha e(x)\big(A(x)D^\alpha v^\dagger(x)-b_\alpha(x)\big)dx,$$ where $A(x)=\int_{\Omega^c}|x-y|^{-3-2\theta}dy$ and $b_\alpha(x)=\int_{\Omega^c}D^\alpha\eta(y)|x-y|^{-3-2\theta}dy$. To obtain the formula, split each whole-space double integral into $\Omega^2$, $\Omega\times\Omega^c$ and its transpose; $D^\alpha e_0$ is zero outside and $v^\dagger=\eta$ there. On any fixed neighborhood of $\overline{B_\rho}$ compact in $\Omega$, every derivative of $A,b_\alpha$ is bounded, by differentiating the separated kernel and using its integrable tail. Choose $\chi\in C_c^\infty(\Omega)$ equal to one on that neighborhood. The domain pairing is therefore the pairing of $e_0$ with $$P=P_0-2\sum_{|\alpha|=m}(-1)^mD^\alpha\big(\chi A D^\alpha v^\dagger-\chi b_\alpha\big).$$ By step 1.1, its correction terms lie in $B^{t-2m}_{2,\infty}$: differentiation lowers the block regularity by the derivative order, multiplication by the smooth compact coefficient preserves it, and $\chi b_\alpha$ is smooth and compactly supported. Since $2m\le2s$, they also lie in $B^{t-2s}_{2,\infty}$. Hence $P\in B^{t-2s}_{2,\infty}$ in every case, and $\langle P,e_0\rangle=(\sigma^\dagger,e)_{s,\Omega}$. This treats the exact domain penalty pairing rather than replacing its norm by an equivalent one. [F4, step 1.1, step 3.1, step 3.2, step 4.1, algebra]

6.1 Put $d=t-s>0$ and $a=2s-t-1>0$. Let $P_{\le J}=\sum_{j\le J}Q_jP$. By step 5.1 and the Hilbert block norm formula, $\|P_{\le J}\|_{H^{-1}}^2\le C\sum_{j\le J}2^{2j(2s-t-1)}\le C2^{2Ja}$. Similarly $\|P-P_{\le J}\|_{H^{-s}}^2\le C\sum_{j>J}2^{2j(s-t)}\le C2^{-2Jd}$. Weighted Fourier Cauchy–Schwarz and step 3.2 now give $|\langle P,e_0\rangle|\le C2^{Ja}\|e\|_{H^1(\Omega)}+C2^{-Jd}\|e\|_{s,\Omega}$, the first claimed estimate. [F1, step 2.1, step 3.2, step 5.1, algebra]

7.1 Expansion of the quadratic form gives exactly $D_R(\sigma,\sigma^\dagger)=\|e\|_{s,\Omega}^2/2$. Set $W=\omega(\|G(\sigma)-G(\sigma^\dagger)\|)$. The conditional stability hypothesis and $uv\le3u^2/8+2v^2/3$ applied to the high-frequency term in step 6.1 yield $-(\sigma^\dagger,e)_{s,\Omega}\le3\|e\|_{s,\Omega}^2/8+C(2^{Ja}W+2^{-2Jd})$. If $W=0$, stability gives $e=0$. For $0<W\le1$, take the integer $J\ge0$ with $2^{-J(a+2d)}\ge W>2^{-(J+1)(a+2d)}$. Then $2^{-2Jd}\le2^{2d}W^{2d/(a+2d)}$ and $2^{Ja}W\le W^{2d/(a+2d)}$. Since $a+2d=t-1$, this proves the asserted source inequality with coefficient $3/4$ on the exact Bregman distance. Substitution of the stated logarithmic stability exponent gives $\nu=2(s-3/2)(t-s)/(t-1)$ by multiplying exponents. [step 6.1, given, choose, algebra] ∎
