---
id: lem-em-finitely-subtracted-analytic-dispersion
kind: lemma
domain: mathematics
title: "Dispersion relations for a finitely subtracted analytic response"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 1
deps: [def-complex-domain, thm-taylor-expansion-holomorphic-function, cor-cauchy-theorem-star-shaped-domain, def-star-shaped-open-subset-of-rn, lem-em-integrable-causal-dispersion, thm-heine-cantor-metric, thm-uniform-limit-interchanges-complex-line-integrals, def-countable-choice, def-dependent-choice, def-derivative]
dependency_roles:
  def-complex-domain: mathematical-premise
  thm-taylor-expansion-holomorphic-function: mathematical-premise
  cor-cauchy-theorem-star-shaped-domain: mathematical-premise
  def-star-shaped-open-subset-of-rn: mathematical-premise
  lem-em-integrable-causal-dispersion: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-uniform-limit-interchanges-complex-line-integrals: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-derivative: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. K. Hunter, Notes on Partial Differential Equations (University of California, Davis; revised 6/18/2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "No claim is attributed to this source beyond contextual conventions; the contour, subtraction and constitutive arguments are the design's local arguments, using the batch's published complex-analysis and causal-dispersion suppliers."
    - title: "NIST Digital Library of Mathematical Functions, Chapter 1 (Algebraic and Analytic Methods), Section 1.14 (Integral Transforms)"
      url: "https://dlmf.nist.gov/1.14"
      locator: "Section 1.14(v), equations 1.14.41-1.14.46, defines the Hilbert transform, gives inversion for continuously differentiable compactly supported functions, and records Lp inequalities and a Fourier-transform identity. It is context for principal-value transform notation only; the upper-half-plane boundary-part relations, subtraction factorization and constitutive branch are proved locally here."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $n\ge1$ be an integer, let $\omega_0\in\mathbb R$, and let $\chi$ be holomorphic on the upper half-plane and continuous on its closure, of class $C^1$ on its real boundary away from $\omega_0$, holomorphic on a neighbourhood of $\omega_0$ in $\mathbb C$, and satisfying $|\chi(z)|\le C(1+|z|^{n-1})$ on $\operatorname{Im}z\ge0$ outside a compact set ([[def-complex-domain]]). Let $P(z)=\sum_{j=0}^{n-1}\chi^{(j)}(\omega_0)(z-\omega_0)^j/j!$ be the Taylor polynomial at $\omega_0$ and $f(z)=[\chi(z)-P(z)]/(z-\omega_0)^n$, with the removable value at $\omega_0$. Assume the boundary restriction of $f$ is class $C^1$ (the local holomorphy supplies this at $\omega_0$). Then for real $\omega$,

$$\operatorname{Re}\chi(\omega)=\operatorname{Re}P(\omega)+\frac{(\omega-\omega_0)^n}{\pi}\operatorname{PV}\!\int_{\mathbb R}\frac{\operatorname{Im}f(\xi)}{\xi-\omega}\,d\xi,$$

$$\operatorname{Im}\chi(\omega)=\operatorname{Im}P(\omega)-\frac{(\omega-\omega_0)^n}{\pi}\operatorname{PV}\!\int_{\mathbb R}\frac{\operatorname{Re}f(\xi)}{\xi-\omega}\,d\xi.$$

At $\omega=\omega_0$ the formula is read as the stated Taylor value. The unsubtracted $n=0$ case is also valid with $P=0$, $f=\chi$, growth $O(1/|z|)$, and the factor $(\omega-\omega_0)^0=1$ for all $\omega$; at $\omega_0$ use the same principal-value formula rather than a Taylor-value convention. For the separate constitutive polynomial branch assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]), fix integers $d\ge1$, $m\ge0$, let $A_0,\ldots,A_m\in\mathbb R^{d\times d}$ (real scalars when $d=1$), and let $K:[0,\infty)\to\mathbb R^{d\times d}$ satisfy all hypotheses of [[lem-em-integrable-causal-dispersion]]. On histories $E:\mathbb R\to\mathbb R^d$ of class $C^m$ with $E^{(j)}$ bounded for $0\le j\le m$, the response $\sum_{j=0}^mA_jE^{(j)}+K*E$ is causal, and its transfer function in the $e^{-i\omega t}$ convention is $Q(z)+\chi_K(z)$ with $Q(z):=\sum_{j=0}^mA_j(-iz)^j$. Subtracting the declared polynomial $Q$ leaves the proved entrywise dispersion formulas for $\chi_K$; this branch does not require holomorphic continuation through a real subtraction point. The Taylor-subtracted formulas above apply to the total response when its additional local-holomorphy, growth and boundary hypotheses are satisfied; $Q$ need not equal its Taylor polynomial $P$. General passivity and storage remain separate model conditions.

## Facts & Assumptions
**Given:** An integer $n\ge0$, a real $\omega_0$, a function $\chi$ with the listed holomorphy, continuity, boundary regularity and growth, the polynomial $P$ specified in the Statement ($P=0$ for $n=0$), and the divided function $f$; in the constitutive branch, coefficients $A_0,\ldots,A_m$ and a matrix kernel $K$ satisfying the hypotheses of [[lem-em-integrable-causal-dispersion]].

[F1] **Holomorphy, domains and Taylor expansion.** The upper half-plane $H=\{z:\operatorname{Im}z>0\}$ is an open subset of $\mathbb C$ ([[def-complex-domain]]); if $g$ is holomorphic on an open disc about $a$, then $g(z)=\sum_{j\ge0}g^{(j)}(a)(z-a)^j/j!$ throughout the largest centred disc contained in its domain ([[thm-taylor-expansion-holomorphic-function]]).

[F2] **Cauchy theorem and contour limits.** A closed rectifiable contour in a star-shaped open subset $U\subseteq\mathbb C$ ([[def-star-shaped-open-subset-of-rn]] applied to $\mathbb C\cong\mathbb R^2$) integrates a holomorphic function to $0$ ([[cor-cauchy-theorem-star-shaped-domain]]); uniform convergence of continuous integrands on a fixed rectifiable contour passes through the contour integral ([[thm-uniform-limit-interchanges-complex-line-integrals]]); a continuous function is uniformly continuous on every compact subset ([[thm-heine-cantor-metric]]).

[F3] **Integrable causal dispersion.** Assume $\mathrm{AC}_\omega$ and $\mathrm{DC}$ with the meanings of [[def-countable-choice]] and [[def-dependent-choice]]; for a locally absolutely continuous matrix kernel $K$ on $[0,\infty)$ with $K,K'\in L^1$ and $sK\in L^1$, the response function $\chi_K(z)=\int_0^\infty K(s)e^{izs}ds$ is holomorphic on $H$, continuous and $C^1$ on the real boundary, satisfies $|\chi_K(z)|\le(|K(0)|+\|K'\|_1)/|z|$ for $z\ne0$, $\operatorname{Im}z\ge0$, and its entries satisfy the principal-value formulas $\operatorname{Re}\chi_K(\omega)=\frac1\pi\operatorname{PV}\int\frac{\operatorname{Im}\chi_K(\xi)}{\xi-\omega}d\xi$, $\operatorname{Im}\chi_K(\omega)=-\frac1\pi\operatorname{PV}\int\frac{\operatorname{Re}\chi_K(\xi)}{\xi-\omega}d\xi$ ([[lem-em-integrable-causal-dispersion]]). The first branch of this item uses no choice beyond the ambient conventions of the cited complex-analysis suppliers.

[F4] **Derivatives are local and convolution is causal.** The derivative $E^{(j)}(t)$ depends only on the values of $E$ in an arbitrarily small neighbourhood of $t$ ([[def-derivative]]), and $(K*E)(t)=\int_0^\infty K(s)E(t-s)ds$ depends only on the values of $E$ on $(-\infty,t]$.


## Proof

**Proof technique:** direct.

1.1 For $n\ge1$, by [F1] applied in a disc contained in the neighbourhood of $\omega_0$ on which $\chi$ is holomorphic, $\chi(z)=P(z)+(z-\omega_0)^n\tilde g(z)$ for a holomorphic $\tilde g$ there; hence $f$ has the holomorphic removable continuation $\tilde g$ at $\omega_0$, and elsewhere $f=(\chi-P)/(z-\omega_0)^n$ is holomorphic on $H$ because the denominator does not vanish; the two definitions agree on the punctured intersection, so $f$ is holomorphic on $H$ and near $\omega_0$, continuous on the closure of $H$ (the removable continuation at $\omega_0$ together with the continuity of $\chi$ and polynomiality of $P$), of class $C^1$ on $\mathbb R$ by hypothesis, and $|f(z)|\le C'(1+|z|^{n-1})/|z-\omega_0|^n=O(1/|z|)$ uniformly on $\operatorname{Im}z\ge0$ outside a compact set. [given, F1, algebra]

1.2 Fix real $\omega$, $R>|\omega|+2$ and $0<\eta<1$, and form the closed indented contour $\Gamma$ consisting of the real segments from $\omega-R$ to $\omega-\eta$ and from $\omega+\eta$ to $\omega+R$, the upper semicircle of radius $\eta$ about $\omega$ traversed from $\omega-\eta$ to $\omega+\eta$, and the large upper semicircle of radius $R$ about $\omega$ traversed from $\omega+R$ to $\omega-R$. For $\delta>0$ the domain $D_\delta=\{z:\operatorname{Im}z>-\delta/2\}\setminus\{\omega-iv:v\ge0\}$ is open and star-shaped about $\omega+iA$ for every $A>0$, the contour $\Gamma$ lies in $D_\delta$, and $z\mapsto f(z+i\delta)/(z-\omega)$ is holomorphic on $D_\delta$ because $\operatorname{Im}(z+i\delta)>\delta/2>0$ and the denominator avoids its slit zero; hence [F2] gives $\int_\Gamma f(z+i\delta)/(z-\omega)\,dz=0$. [given, F2, algebra]

1.3 Constitutive branch: for histories $E_1,E_2$ with the stated bounded continuous derivatives through order $m$ that agree on $(-\infty,t]$, locality [F4] gives equality of all derivatives through order $m$ at every $s<t$, because a sufficiently small neighbourhood of $s$ lies in $(-\infty,t)$. Their continuity then gives $E_1^{(j)}(t)=E_2^{(j)}(t)$ by taking $s\uparrow t$, and the convolutions agree, $(K*E_1)(t)=(K*E_2)(t)=\int_0^\infty K(s)E_i(t-s)ds$, because $t-s\le t$ for $s\ge0$; hence the response $\sum_{j=0}^mA_jE^{(j)}+K*E$ evaluated at $t$ is the same for $E_1$ and $E_2$: the response is causal. [given, F4, algebra]

2.1 On the fixed contour $\Gamma$ the functions $z\mapsto f(z+i\delta)$ converge uniformly to $z\mapsto f(z)$ as $\delta\downarrow0$ by the uniform continuity [F2] of the continuous $f$ on a compact neighbourhood of $\Gamma$ in the closed half-plane, so [F2] transfers the identity of step 1.2 to $\int_\Gamma f(z)/(z-\omega)dz=0$; the large arc contributes at most $\pi R\cdot C/(R(R-|\omega|))=O(1/R)\to0$ as $R\to\infty$ because $|f(z)|\le C/|z|$ holds for $|z|\ge1$ in the closed half-plane, while the small arc, parametrized by $z=\omega+\eta e^{i\theta}$ with $\theta$ decreasing from $\pi$ to $0$, contributes $-i\pi f(\omega)+o(1)$ as $\eta\downarrow0$ by continuity of $f$ at $\omega$; the two real segments, whose tails are absolutely integrable since $f(\xi)/(\xi-\omega)=O(|\xi|^{-2})$, therefore satisfy $\operatorname{PV}\int_{\mathbb R}f(\xi)/(\xi-\omega)d\xi=i\pi f(\omega)$, the principal value existing because the constant term $f(\omega)/(\xi-\omega)$ cancels under the symmetric truncation and the $C^1$ hypothesis bounds the divided difference. [step 1.2, F2, algebra]

2.2 Transfer function: for the monochromatic history $E(t)=E_0e^{-i\omega t}$ with constant $E_0$, one has $E^{(j)}(t)=(-i\omega)^jE_0e^{-i\omega t}$ and $(K*E)(t)=\chi_K(\omega)E_0e^{-i\omega t}$ by the defining formula of [F3] with $z=\omega$; hence the response is $(Q(\omega)+\chi_K(\omega))E_0e^{-i\omega t}$ with $Q(z)=\sum_{j=0}^mA_j(-iz)^j$, the analytic transfer function is $Q(z)+\chi_K(z)$ on $\operatorname{Im}z>0$, with its real boundary values just computed. The formal evaluation on $e^{-izt}$ gives the same expression because $e^{izs}$ decays on the causal integral, but this complex-frequency history is not claimed to belong to the globally bounded history class. [step 1.3, F3, algebra]

3.1 Taking real and imaginary parts of the identity $i\pi f(\omega)=\operatorname{PV}\int_{\mathbb R}f(\xi)/(\xi-\omega)d\xi$ gives $\operatorname{Re}f(\omega)=\frac1\pi\operatorname{PV}\int_{\mathbb R}\frac{\operatorname{Im}f(\xi)}{\xi-\omega}d\xi$ and $\operatorname{Im}f(\omega)=-\frac1\pi\operatorname{PV}\int_{\mathbb R}\frac{\operatorname{Re}f(\xi)}{\xi-\omega}d\xi$; multiplying by the real number $(\omega-\omega_0)^n$ and adding the complex polynomial $P$ yields the two displayed formulas for $\operatorname{Re}\chi$ and $\operatorname{Im}\chi$, since $\chi=P+(\cdot-\omega_0)^nf$ on the closed half-plane. [step 1.1, step 2.1, algebra]

4.1 For $n\ge1$ and $\omega=\omega_0$ the factor $(\omega-\omega_0)^n$ vanishes and $P(\omega_0)=\chi(\omega_0)$ by Taylor's formula at $\omega_0$, so the displayed formulas are read as that Taylor value; the imaginary numerator subtracts the full complex polynomial $P$, which therefore cannot be omitted. For $n=0$ one has $P=0$, $f=\chi$, factor $1$, and the growth hypothesis is exactly $O(1/|z|)$, so the same contour argument of steps 1.2, 2.1 and 3.1 applies with the principal-value convention at $\omega_0$ as well. [step 3.1, step 2.1, F1, algebra]

5.1 Subtracting the declared polynomial $Q$ from $Q+\chi_K$ leaves $\chi_K$, whose entrywise principal-value dispersion formulas are exactly those proved in [F3]; this branch therefore requires no holomorphic continuation through a real subtraction point and no growth hypothesis beyond those of [F3]; general passivity and storage remain separate model conditions, and the declared polynomial $Q$ of this branch need not coincide with the Taylor polynomial $P$ of the first branch. This proves both branches of the Statement, the first with no choice beyond the cited complex-analysis suppliers and the second with the declared Countable Choice and Dependent Choice inherited from [F3]. [step 2.2, F3, algebra] ∎
