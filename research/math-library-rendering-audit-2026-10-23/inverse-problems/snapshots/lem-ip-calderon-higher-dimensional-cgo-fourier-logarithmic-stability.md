---
id: lem-ip-calderon-higher-dimensional-cgo-fourier-logarithmic-stability
kind: lemma
title: Higher-dimensional C1alpha logarithmic Calderón stability
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-ip-calderon-admissible-conductivity-class
  - def-ip-calderon-weak-dn-map-for-bounded-conductivities
  - lem-ip-calderon-rough-dn-map-wellposedness
  - lem-ip-calderon-fixed-collar-c1alpha-extension
  - lem-ip-calderon-rough-alessandrini-and-quotient-norm
  - lem-ip-calderon-bourgain-cutoff-estimates
  - lem-ip-calderon-averaged-negative-bourgain-estimate
  - lem-ip-calderon-rough-potential-cgo-construction
  - thm-plancherel
  - thm-poincare-inequality-for-w-one-p-zero
  - cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pedro Caro, Andoni García and Juan Manuel Reyes, Stability of the
        Calderón problem for less regular conductivities
      url: https://arxiv.org/pdf/1205.2487
      locator: Theorem 1.1, printed p. 2, and its proof in Section 4, printed pp.
        15–19; the proof uses the boundary-to-interior estimate of Section 2 and
        the averaged CGO remainders from Section 3.
    - title: Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H.
        Nelsen, Extension and neural operator approximation of the electrical
        impedance tomography inverse map
      url: https://arxiv.org/pdf/2511.20361
      locator: Section 3.1, Theorem 3.2 and its dimension-at-least-three proof,
        printed p. 14.
    - title: Haberman and Tataru, Uniqueness in Calderón's problem with Lipschitz
        conductivities
      url: https://arxiv.org/pdf/1108.6068
      locator: Sections 2–4, localized Bourgain norms, circle averaging and the CGO
        contraction; all used estimates are supplied by local proved helpers.
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $d\ge3$, $0<\alpha<1$, let $\Omega\subset(0,1)^d$ be a nonempty bounded connected smooth domain, let $\Omega'\Subset\Omega$, and fix $m>0$, $M\ge\max\{1,m\}$ and $R>0$. For every $\gamma,\gamma_0\in X_d(R)$ there exist constants $C>0$, $\rho>0$ and $t_0\in(0,1)$, depending only on $d,\alpha,\Omega,\Omega',m,M,R$, such that
$$\|\gamma-\gamma_0\|_{L^2(\Omega)}\le C\,\omega\!\left(\|\dot{\Lambda}_\gamma-\dot{\Lambda}_{\gamma_0}\|_{\mathcal L(\mathcal D(\Omega)/\mathbb C\mathbf1,(\mathcal D(\Omega)/\mathbb C\mathbf1)^*)}\right),$$
where $\mathcal D(\Omega)$ is the trace quotient and $\dot\Lambda_\gamma$ is the induced weak Dirichlet-to-Neumann map on the constant quotient, and
$$\omega(0):=0,\qquad \omega(t):=\left[\log\!\left(\frac1{\min\{t,t_0\}}\right)\right]^{-\rho}\quad(t>0).$$

## Statement references

[[def-ip-calderon-admissible-conductivity-class|The higher-dimensional uniformly elliptic C1alpha class with fixed background near the boundary.]]

[[def-ip-calderon-weak-dn-map-for-bounded-conductivities|The weak DN map and its constant quotient.]]


## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice, the fixed parameters in the statement, and $\gamma_1=\gamma$, $\gamma_2=\gamma_0$ in $X_d(R)$.

[F1] Fixed-collar extension preserves global $C^{1,\alpha}$ bounds, ellipticity, and support of $\gamma_j-1$ in $\overline{\Omega'}$. ([[def-ip-calderon-admissible-conductivity-class]], [[lem-ip-calderon-fixed-collar-c1alpha-extension]])

[F2] Weak conductivity solutions and their energy-form DN maps are well-defined, and the full trace-space norm of their difference equals its constant-quotient norm. The rough Alessandrini identity holds. ([[def-ip-calderon-weak-dn-map-for-bounded-conductivities]], [[lem-ip-calderon-rough-dn-map-wellposedness]], [[lem-ip-calderon-rough-alessandrini-and-quotient-norm]])

[F3] The cutoff estimates give local $L^2$ and gradient bounds $Cs^{-1/2}$ and $Cs^{1/2}$ from the homogeneous positive-half norm, and bounded cutoff maps between the negative-half norms. ([[lem-ip-calderon-bourgain-cutoff-estimates]])

[F4] For a compactly supported $C^{0,\alpha}$ vector field $a=\nabla\log\gamma$, the potential $q=\tfrac12\operatorname{div}a+\tfrac14|a|^2$ admits null-phase CGO solutions $U_\zeta=e^{x\cdot\zeta}(1+r_\zeta)$ with $\|r_\zeta\|_{\dot X^{1/2}_\zeta}\le2\|q\|_{\dot X^{-1/2}_\zeta}$. If $\beta=\alpha/(1+\alpha)$, the circle-and-scale average of either squared norm is at most $C(1+(1+|k|^2)/\lambda)\lambda^{-\beta}$. ([[lem-ip-calderon-rough-potential-cgo-construction]], [[lem-ip-calderon-averaged-negative-bourgain-estimate]])

[F5] Plancherel identifies the $H^1(\mathbb R^d)$ norm with $\|(1+|\xi|^2)^{1/2}\widehat v\|_2$ in the unitary angular-frequency convention; zero-boundary functions on a bounded ball satisfy Poincaré. Smooth compactly supported functions are dense in $W^{1,2}(\mathbb R^d)$. ([[thm-plancherel]], [[thm-poincare-inequality-for-w-one-p-zero]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]])

[A1] The Axiom of Choice and Countable Choice are assumed at the stated Sobolev, weak-solution and Fourier interfaces. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** The data in the statement. All constants below depend only on its fixed parameters, and may increase from line to line.

1.1 Extend both coefficients by $1$ using [F1], and fix a ball $B$ containing $[0,1]^d$ and a neighborhood of it. Put $g_j=\sqrt{\gamma_j}$ and $a_j=\nabla\log\gamma_j$. These are globally $C^1$ and $C^{0,\alpha}$, respectively, and $a_j$ has support in $\overline{\Omega'}$. Their supremum and Hölder bounds are uniform: the positive lower bound $m_*:=\min\{m,1\}$ gives $|a_j|\le C_dR/m_*$; on $|x-y|\le1$, expand $\nabla\gamma_j(x)/\gamma_j(x)-\nabla\gamma_j(y)/\gamma_j(y)$, using the derivative Hölder bound and $|\gamma_j(x)-\gamma_j(y)|\le\sqrt dR|x-y|$; on larger distances use twice the supremum. Thus [F4] applies uniformly. Let $q_j=\tfrac12\operatorname{div}a_j+\tfrac14|a_j|^2$ and $Q=q_1-q_2$, with bilinear distribution pairings as in [F4]. [A1, F1, F4, given, algebra]

2.1 The Liouville form identity is $\int\nabla v\cdot\nabla w+\langle q_j,vw\rangle=\int\gamma_j\nabla(v/g_j)\cdot\nabla(w/g_j)$ for $v,w\in H^1$ on a bounded set. Indeed $q_j=g_j^{-1}\Delta g_j$ means $\langle q_j,vw\rangle=-\int\nabla g_j\cdot\nabla(g_j^{-1}vw)$; expanding this derivative gives the displayed identity term by term. All products are integrable since $g_j,g_j^{-1},\nabla g_j$ are bounded and the factors are in $H^1$. The identity extends from smooth factors by local $H^1$ approximation; multiplication by a bounded $C^1$ function with bounded derivative is continuous on $H^1$, as follows from the product rule and the same approximation. Since $g_j=1$ near $\partial\Omega$, the trace of $U_j$ equals that of $u_j:=U_j/g_j$. Testing the form identity with $w=g_jz$, first for compactly supported tests and then in $H_0^1$ by density, shows that each Schrödinger solution $U_j$ yields a weak conductivity solution $u_j$. Define the symmetric bilinear forms $B_j(V,W):=\int_\Omega\nabla V\cdot\nabla W+\langle q_j,VW\rangle$ and $b_j(v,w):=\int_\Omega\gamma_j\nabla v\cdot\nabla w$. Let $v_1$ be the $\gamma_1$-harmonic representative with trace $f_2$. Then $B_1(U_1,U_2)=b_1(u_1,U_2/g_1)=b_1(u_1,v_1)$, because $U_2/g_1$ has trace $f_2$ and its difference from $v_1$ is in $H_0^1$, which is annihilated by the weak equation for $u_1$. This equals $((\Lambda_{\gamma_1}f_1)(\overline{f_2}))$ by the weak DN definition [F2]. By symmetry, $B_2(U_1,U_2)=B_2(U_2,U_1)=b_2(u_2,U_1/g_2)=b_2(u_2,v_2)$, where $v_2$ is the $\gamma_2$-harmonic representative with trace $f_1$; Since $b_2$ is symmetric for real $\gamma_2$, this equals $b_2(v_2,u_2)=((\Lambda_{\gamma_2}f_1)(\overline{f_2}))$. Hence subtraction gives $\langle Q,U_1U_2\rangle=((\Lambda_{\gamma_1}-\Lambda_{\gamma_2})f_1)(\overline{f_2})$. The compact support of $Q$ makes its whole-space pairing identical to its pairing on $\Omega$. Consequently $|\langle Q,U_1U_2\rangle|\le\delta\|u_1\|_{H^1(\Omega)}\|u_2\|_{H^1(\Omega)}$. [F2, F4, F5, step 1.1, algebra]

3.1 Use the paired phases $\zeta_\pm=s(\pm\eta)+i(k/2\pm\sqrt{s^2-|k|^2/4}\,\eta^\perp)$ of [F4]. For fixed $s$ their remainders satisfy $\|r_j\|_{\dot X^{1/2}_{\zeta_j}}\le C\sqrt s$. To verify this last uniform bound, the symbol inequality $|\xi|^2/(s+|p_{\zeta_j}(\xi)|)\le Cs$ follows by splitting $|\xi|\le8s$ and its complement. Apply the negative cutoff bound in [F3] to $\operatorname{div}a_j$ and $|a_j|^2$ as in [F4] to obtain $\|q_j\|_{\dot X^{-1/2}_{\zeta_j}}\le C\sqrt s$. The two positive cutoff bounds then give $\|r_j\|_{L^2(B)}\le C$ and $\|\nabla r_j\|_{L^2(B)}\le Cs$. Multiplication by $g_j^{-1}e^{x\cdot\zeta_j}$ yields $\|u_j\|_{H^1(\Omega)}\le Ce^{Cs}s$. Thus step 2.1 bounds the exact interior product by $C\delta e^{Cs}s^2$. [F3, F4, step 1.1, step 2.1, algebra]

4.1 Fix a compactly supported smooth cutoff $\phi=1$ near $\overline{\Omega'}$. We first prove the modulated cutoff bound used for each linear remainder term. Let $u$ be Schwartz and write the Fourier convolution for $\phi e^{ik\cdot x}u$ with $h=\xi-\eta-k$. The symbol comparison and characteristic-sphere estimate proved in [F3] give, uniformly in the center $y$, $\int\langle\xi-y\rangle^{-L}(1+D_\zeta(\xi)^{-1})\,d\xi\le C_L$ for sufficiently large $L$, and $s+|p_\zeta(\eta)|\le C(s+|p_\zeta(\xi)|)\langle\xi-\eta\rangle^2$, where $D_\zeta$ is distance to the characteristic sphere of $p_\zeta$. Since $s/|p_\zeta(\xi)|\le C(1+D_\zeta(\xi)^{-1})$, these estimates imply $\sup_\eta\int |\widehat\phi(\xi-\eta-k)|\frac{s+|p_\zeta(\eta)|}{|p_\zeta(\xi)|}\,d\xi\le C\langle k\rangle^2$. Indeed, after substituting $h=\xi-\eta-k$, the integrand is bounded by $C|\widehat\phi(h)|\langle k+h\rangle^2(1+D_\zeta(\eta+k+h)^{-1})$; use $\langle k+h\rangle^2\le C\langle k\rangle^2\langle h\rangle^2$, the rapid decay of $\widehat\phi$, and the uniform-center estimate. The same weighted Schur argument as in [F3] gives $\|\phi e^{ik\cdot x}u\|_{\dot X^{-1/2}_\zeta}\le C\langle k\rangle^2\|u\|_{X^{-1/2}_\zeta}$. Applying the dual argument of [F3] to $\overline\phi e^{-ik\cdot x}$ yields $\|\phi e^{ik\cdot x}v\|_{X^{1/2}_\zeta}\le C\langle k\rangle^2\|v\|_{\dot X^{1/2}_\zeta}$, and hence also the same bound with the homogeneous positive-half norm on the left. Density in the weighted Fourier completions follows by truncating away from the characteristic sphere, as in [F3]. Since $2\le N=d+10$, this proves the modulation estimate used below with the stated exponent. Because $q_j$ is real, $\widehat q_j(-\xi)=\overline{\widehat q_j(\xi)}$, and $p_{-\zeta}(\xi)=p_\zeta(-\xi)$, so $\|q_j\|_{\dot X^{-1/2}_{-\zeta}}=\|q_j\|_{\dot X^{-1/2}_\zeta}$. Weighted Fourier Cauchy–Schwarz in the bilinear pairing therefore gives $|\langle q_j,e^{ik\cdot x}r_l\rangle|\le C\langle k\rangle^N\|q_j\|_{\dot X^{-1/2}_{\zeta_l}}\|r_l\|_{\dot X^{1/2}_{\zeta_l}}$. For the quadratic term, expand the definition of $q_j$ on $e^{ik\cdot x}r_1r_2$ and use [F3] on each factor with its own phase. The product and differentiated product have $L^1$ norms at most $Cs^{-1}$ and $C$, respectively, times the two remainder norms. The derivative of the exponential adds $C|k|s^{-1}$, giving $|\langle q_j,e^{ik\cdot x}r_1r_2\rangle|\le C(1+|k|)\|r_1\|_{\dot X^{1/2}_{\zeta_1}}\|r_2\|_{\dot X^{1/2}_{\zeta_2}}$. [F3, F4, step 1.1, step 3.1, algebra]

5.1 Since $\zeta_1+\zeta_2=ik$, expand $U_1U_2=e^{ik\cdot x}(1+r_1+r_2+r_1r_2)$ in step 3.1. Move the three remainder terms to the other side and apply step 4.1. Average over $\lambda\le s\le2\lambda$ and the unit circle in the fixed plane $P\perp k$, dividing by its total measure $2\pi\lambda$. The left side $|\langle Q,e^{ik\cdot x}\rangle|$ is independent of these parameters. For each linear or quadratic product, integral Cauchy–Schwarz and [F4] bound its average by $C\langle k\rangle^N(1+\langle k\rangle^2/\lambda)\lambda^{-\beta}$, where $\beta=\alpha/(1+\alpha)$. The same bound applies when the potential $q_j$ and remainder $r_l$ have different indices, because [F4] holds for either coefficient and either phase. Absorbing the fixed Fourier normalization gives $|\widehat Q(k)|\le C\delta e^{C\lambda}\lambda^2+C\langle k\rangle^N(1+\langle k\rangle^2/\lambda)\lambda^{-\beta}$ whenever $\lambda\ge\max\{s_0,100\langle k\rangle\}$. Replacing $k$ by $-k$ if needed accounts for the negative-sign Fourier convention. [F4, step 3.1, step 4.1, algebra]

6.1 Define $\mathcal Q:=\|(1+|\xi|^2)^{-1/2}\widehat Q(\xi)\|_2$. This is finite since $Q=\tfrac12\operatorname{div}(a_1-a_2)+\tfrac14(|a_1|^2-|a_2|^2)$ with both coefficient fields in $L^2$. For $t\ge1$, its low-frequency contribution is at most $Ct^{d/2}\sup_{|k|\le t}|\widehat Q(k)|$. The high-frequency contribution of the zero-order field is at most $Ct^{-1}$. For the divergence field $f=a_1-a_2$, split $f=\rho_h*f+(f-\rho_h*f)$ with a fixed nonnegative unit-mass mollifier. Plancherel bounds its high-frequency contribution by $Ct^{-1}\|\operatorname{div}(\rho_h*f)\|_2+\|f-\rho_h*f\|_2\le C(t^{-1}h^{-1}+h^\alpha)$. The last two bounds follow by differentiating the convolution kernel and by the uniform Hölder estimate with fixed compact support, exactly as in [F4]. Taking $h=t^{-1/(1+\alpha)}$ gives $\mathcal Q\le C[t^{d/2}\sup_{|k|\le t}|\widehat Q(k)|+t^{-\beta}]$. [F4, F5, step 1.1, step 5.1, algebra]

7.1 Choose $A=2+(N+d+1)/\beta$ and a fixed $L\ge\max\{s_0,200\}$. Set $\lambda=Lt^A$. Then $\lambda\ge100\sqrt{1+t^2}$, $1+\langle k\rangle^2/\lambda\le C$ for $|k|\le t$, and $t^{N+d/2}\lambda^{-\beta}\le Ct^{-\beta}$. Substituting step 5.1 in step 6.1 therefore gives $\mathcal Q\le C[\delta e^{D t^A}+t^{-\beta}]$ for a fixed $D>0$, after absorbing the polynomial factor $t^{d/2}\lambda^2$ into the exponential. For sufficiently small $0<\delta<t_0$, take $t=(\log(1/\delta)/(2D))^{1/A}\ge1$. The first term becomes $\sqrt\delta$, and the second is $C[\log(1/\delta)]^{-\beta/A}$. The former is bounded by a constant times the latter, since $e^{-x/2}x^{\beta/A}$ is bounded for $x\ge1$. Hence $\mathcal Q\le C[\log(1/\delta)]^{-\rho}$ with $\rho=\beta/A>0$. If $\delta=0$, let $t\to\infty$ in the estimate before this choice to obtain $\mathcal Q=0$. [step 5.1, step 6.1, algebra]

8.1 Put $w=\log g_1-\log g_2$ and $H=g_1g_2$. Both $w$ and $\nabla w$ have compact support in $\overline{\Omega'}$, and $w\in H_0^1(B)$. Expanding the formula for $Q$ gives the distribution identity $HQ=\operatorname{div}(H\nabla w)$: the divergence part is $\Delta w$, while the zero-order part is $\nabla\log H\cdot\nabla w$. Test this identity with $w$ to obtain $\int H|\nabla w|^2=-\langle Q,Hw\rangle$. The test is legitimate by $H^1$ approximation, since $Q$ is an $L^2$ field plus a divergence of an $L^2$ field and $Hw\in H_0^1(B)$. Weighted Fourier Cauchy–Schwarz gives $|\langle Q,Hw\rangle|\le\mathcal Q\|Hw\|_{H^1(\mathbb R^d)}\le C\mathcal Q\|w\|_{H^1(B)}$. Since $H\ge m_*>0$, Poincaré in [F5] implies $\|w\|_{H^1(B)}\le C\mathcal Q$; if this norm is zero the estimate is immediate, otherwise divide the resulting quadratic inequality by it. Finally the mean value theorem on the bounded interval of possible $\log g_j$ gives $|\gamma_1-\gamma_2|=|e^{2\log g_1}-e^{2\log g_2}|\le2\max\{M,1\}|w|$. Thus $\|\gamma_1-\gamma_2\|_{L^2(\Omega)}\le C\mathcal Q$. In particular $\delta=0$ forces equality of the coefficients. [F1, F5, step 1.1, step 6.1, step 7.1, algebra]

9.1 Combine steps 7.1–8.1 for $0\le\delta<t_0$, reducing $t_0$ below $1/2$ if necessary. For $\delta\ge t_0$, use $\|\gamma_1-\gamma_2\|_2\le2M|\Omega|^{1/2}$ and enlarge $C$ to at least $2M|\Omega|^{1/2}[\log(1/t_0)]^\rho$. This is precisely the saturated modulus in the statement. Every bound used only the fixed class parameters, the geometry and $d,\alpha$, and the zero-data case was proved in step 8.1. [F1, step 7.1, step 8.1, algebra] ∎

