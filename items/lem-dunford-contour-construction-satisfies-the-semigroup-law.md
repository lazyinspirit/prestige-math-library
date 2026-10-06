---
id: lem-dunford-contour-construction-satisfies-the-semigroup-law
kind: lemma
title: The Dunford contour construction satisfies the semigroup law and strong continuity at the vertex
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [def-resolvent-of-a-closed-operator, lem-contour-definition-of-an-analytic-semigroup, def-complex-sector-and-bounded-analytic-semigroup, def-sectorial-operator-with-the-semigroup-sign-convention, lem-resolvent-identity-and-holomorphy-for-closed-operators, lem-banach-valued-cauchy-theorem-on-star-shaped-domains, def-complex-contours-reversal-concatenation-and-closedness, lem-bochner-integral-norm-inequality, lem-linearity-of-the-bochner-integral, def-densely-defined-closed-and-closable-operator, def-banach-space, def-dependent-choice, def-winding-number-closed-complex-contour, thm-winding-number-locally-constant, thm-winding-number-zero-unbounded-component]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: 'Chapter II Section 4.a, Proposition 4.3(iii),(iv), printed pp. 98-99'
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: 'Chapter 2 Section 2.3, Theorem 2.23(a) and the strong-continuity part of its proof, printed pp. 60-62'
verification:
  precheck: pass
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]) for the cited integral and semigroup suppliers.

In the setting of [[lem-contour-definition-of-an-analytic-semigroup]], extend
$T$ by $T(0):=I$. Then:

1. $T(z_1+z_2)=T(z_1)T(z_2)$ for all $z_1,z_2\in\Sigma_\delta$;
2. $T(z)x\to x$ as $\Sigma_{\delta'}\ni z\to0$ for every $x\in X$ and every
   $\delta'<\delta$, with the quantitative estimate
   $\|T(z)x-x\|\le C_{\delta',r}|z|\,\|Ax\|$ for $x\in D(A)$ and $|z|\le r$;

hence $(T(z))_{z\in\Sigma_\delta\cup\{0\}}$ is a bounded analytic semigroup of
angle $\delta$ in the sense of
[[def-complex-sector-and-bounded-analytic-semigroup]]. No choice principle beyond Dependent Choice is used.

## Facts & Assumptions

**Given:** A sectorial operator $A$ of angle $\delta$ with vertex $0$ on a complex Banach space $X$ and the contour family $T(z)$ of [[lem-contour-definition-of-an-analytic-semigroup]], with $T(0):=I$; fixed $z_1,z_2\in\Sigma_\delta$ and $\delta_0<\delta$ with $z_1,z_2,z_1+z_2\in\Sigma_{\delta_0}$; and for the strong-continuity part a fixed $x\in D(A)$.

[L1] $T$ is well defined, norm-holomorphic on $\Sigma_\delta$, independent of the inner radius and of the admissible angle, and $\sup_{z\in\Sigma_{\delta'}}\|T(z)\|<\infty$ for every $\delta'<\delta$ ([[lem-contour-definition-of-an-analytic-semigroup]]).

[L2] For $\lambda,\mu\in\rho(A)$, $R(\lambda,A)-R(\mu,A)=(\mu-\lambda)R(\lambda,A)R(\mu,A)$ ([[lem-resolvent-identity-and-holomorphy-for-closed-operators]]). For $\mu\in\rho(A)\setminus\{0\}$ and $x\in D(A)$, the inverse relation $R(\mu,A)(\mu x-Ax)=x$ gives $R(\mu,A)x-\mu^{-1}x=\mu^{-1}R(\mu,A)Ax$ ([[def-resolvent-of-a-closed-operator]]).

[L3] On any open star-shaped domain $U\subseteq\mathbb C$, the integral of a holomorphic scalar- or Banach-valued function over a closed piecewise $C^1$ contour in $U$ is zero ([[lem-banach-valued-cauchy-theorem-on-star-shaped-domains]]). In particular this applies to contours in the sector $S:=\{\lambda\ne0:|\arg\lambda|<\pi/2+\delta\}$; the improper keyhole integrals defining $T$ converge absolutely ([[lem-contour-definition-of-an-analytic-semigroup]]).

[L4] For the curve integral, $\|\int_\gamma f\|\le\int_\gamma\|f\|$ and the integral is linear ([[lem-bochner-integral-norm-inequality]], [[lem-linearity-of-the-bochner-integral]]).

[L5] The index is the integral $(2\pi i)^{-1}\oint(\lambda-p)^{-1}d\lambda$, is constant on each connected component off the trace, and vanishes on the unbounded component ([[def-winding-number-closed-complex-contour]], [[thm-winding-number-locally-constant]], [[thm-winding-number-zero-unbounded-component]]).

## Proof

**Proof technique:** direct.

1.1 The double integral. Fix admissible contours $\Gamma_1=\Gamma(r_1,\theta_1)$ and $\Gamma_2=\Gamma(r_2,\theta_2)$ with $\pi/2+\delta_0<\theta_1<\theta_2<\pi/2+\delta$ and $r_2<r_1$; then every point of $\Gamma_1$ lies outside the interior of $\Gamma_2$ and every point of $\Gamma_2$ lies inside the interior of $\Gamma_1$. By [L1] and [L4] the product $T(z_1)T(z_2)$ is the norm limit of the truncated products, and for each truncation the finite double integral of $e^{\lambda_1z_1+\lambda_2z_2}R(\lambda_1)R(\lambda_2)$ equals its iterate, so $T(z_1)T(z_2)=\frac1{(2\pi i)^2}\int_{\Gamma_2}\int_{\Gamma_1}e^{\lambda_1z_1+\lambda_2z_2}R(\lambda_1)R(\lambda_2)\,d\lambda_1d\lambda_2$ with absolutely convergent iterated integrals. [L1, L4, given, algebra]

1.2 The finite-keyhole winding calculation. For $R>r$, let $C_R(r,\theta)$ be the closed contour obtained by appending to $\Gamma_R(r,\theta)$ the counterclockwise outer arc $Re^{i\alpha}$, $\theta\le\alpha\le2\pi-\theta$, through the left half-plane. Its interior is $D_R=\{\lambda:|\lambda|<R,\ |\lambda|<r\text{ or }|\arg\lambda|>\theta\}$, with $0$ included by the first alternative; it is star-shaped about $0$. For $p$ off $C_R$, the winding number is one when $p\in D_R$ and zero when $p$ is outside $\overline{D_R}$; equivalently $\oint_{C_R(r,\theta)}(\lambda-p)^{-1}d\lambda$ is $2\pi i$ or $0$, respectively. At $p=0$, the two radial integrals of $d\lambda/\lambda$ cancel, while the inner and outer arcs contribute $2i\theta$ and $i(2\pi-2\theta)$, so the index is $1$. Since $D_R$ is connected, [L5] gives the same index at every interior point. Every exterior point can move radially out beyond radius $R$ without meeting the trace, then along an outer circle, so it belongs to the unbounded component, where [L5] gives index $0$. If $z\in\Sigma_\delta$ and $\theta$ is admissible for $z$, then on the outer arc $\operatorname{Re}(\lambda z)\le-cR|z|$ for some $c>0$, so $\int_{A_R}e^{\lambda z}(\lambda-p)^{-1}d\lambda\to0$ for fixed $p$. Put $D_\infty:=\bigcup_{R>r}D_R$. If $p\in D_\infty$, then $p\in D_R$ for every sufficiently large $R$; writing $e^{\lambda z}(\lambda-p)^{-1}=e^{pz}(\lambda-p)^{-1}+G(\lambda)$ with entire $G$ having a global primitive shows that the open contour integral tends to $2\pi i e^{pz}$. If instead $p\notin\overline{D_\infty}$, then $p$ lies outside every $\overline{D_R}$ and, for each finite $R$, choose $0<\varepsilon_R<\operatorname{dist}(p,\overline{D_R})$ and set $U_{R,\varepsilon_R}=\overline{D_R}+B(0,\varepsilon_R)$. This is an open star-shaped neighborhood of $\overline{D_R}$ that avoids $p$; the integrand is holomorphic there, so its closed integral vanishes by [L3], and the outer arc tends to zero, giving an open contour integral equal to zero. The nested-contour cases evaluated below have $p$ either inside $D_\infty$ or outside $\overline{D_\infty}$, so no boundary-pole case is needed. [L3, L5, given, algebra]

2.1 The resolvent identity and the inner integrals. By [L2], $R(\lambda_1)R(\lambda_2)=\frac{R(\lambda_2)-R(\lambda_1)}{\lambda_1-\lambda_2}$, so the double integral of [step 1.1] splits as $A_2-A_1$, where $A_1$ is the term with $R(\lambda_1)$ and the inner $\Gamma_2$ integral, and $A_2$ is the term with $R(\lambda_2)$ and the inner $\Gamma_1$ integral. The two infinite contours are disjoint and have positive separation $d:=\operatorname{dist}(\Gamma_1,\Gamma_2)>0$: their finite arc pieces are disjoint compact sets, and their ray tails have distinct angles $\theta_1\ne\theta_2$, so the distance between tails tends to infinity. Thus $|\lambda_1-\lambda_2|^{-1}\le d^{-1}$; together with exponential decay along the rays and the sectorial resolvent bound, this gives absolute integrability of each split double-integral term and justifies Fubini. For each fixed $\lambda_1\in\Gamma_1$, the nesting in [step 1.1] puts $\lambda_1$ outside the closure of the full unbounded keyhole region $D_{\infty,2}:=\bigcup_{R_2>r_2}D_{R_2}(r_2,\theta_2)$, so it is outside every truncated interior. For each $R_2$, the scalar integrand $e^{\lambda_2z_2}/(\lambda_1-\lambda_2)$ is holomorphic on an open star-shaped neighborhood of $\overline{D_{R_2}}$ avoiding its pole, so the integral on $C_{R_2}(r_2,\theta_2)$ is zero by [L3]. Its outer arc contribution tends to zero by exponential decay, hence the open inner $\Gamma_2$ integral in $A_1$ vanishes. For each fixed $\lambda_2\in\Gamma_2$, the nesting puts it inside the unbounded keyhole interior of $\Gamma_1$, and therefore in $D_{R_1}$ for every sufficiently large $R_1$. On $C_{R_1}(r_1,\theta_1)$, the decomposition $e^{\lambda_1z_1}/(\lambda_1-\lambda_2)=e^{\lambda_2z_1}/(\lambda_1-\lambda_2)+[e^{\lambda_1z_1}-e^{\lambda_2z_1}]/(\lambda_1-\lambda_2)$ has an entire second term with a global primitive; by [step 1.2] the first term integrates to $2\pi i e^{\lambda_2z_1}$. The outer arc of the original exponential integrand tends to zero for this fixed $\lambda_2$, so the open inner $\Gamma_1$ integral in $A_2$ is $2\pi i e^{\lambda_2z_1}$. These are pointwise evaluations of the inner improper integrals; no radius-limit is interchanged with the outer integration. [step 1.1, step 1.2, L2, L3, given, algebra]

2.2 Strong continuity with the quantitative estimate. Let $x\in D(A)$ and fix $0<\delta'<\delta$. Choose once and for all an angle $\theta$ with $\pi/2+\delta'<\theta<\pi/2+\delta$, and choose $\varepsilon>0$ so that $\theta<\pi/2+\delta-\varepsilon$; this same contour angle is admissible for every $z\in\Sigma_{\delta'}$. Every $\mu$ on the contour is nonzero, so [L2] gives $R(\mu,A)x-\mu^{-1}x=\mu^{-1}R(\mu,A)Ax$, and the scalar identity $\frac1{2\pi i}\int_\Gamma e^{\mu z}\frac{d\mu}{\mu}=1$ for $z\in\Sigma_{\delta'}$ follows by closing the truncated keyhole: the closed integral is $2\pi i$ by [step 1.2] at $p=0$ plus the entire quotient $(e^{\mu z}-1)/\mu$, whose integral is zero, and the outer arc of $e^{\mu z}/\mu$ tends to zero. Hence $T(z)x-x=\frac1{2\pi i}\int_\Gamma e^{\mu z}\mu^{-1}R(\mu,A)Ax\,d\mu$. Use this fixed $\theta$ and the contour inner radius $\varrho=1/|z|$. Since $|\arg z|<\delta'$, on both rays $\operatorname{Re}(\mu z)\le-cs|z|$ with a single $c=c(\theta,\delta')>0$; the two rays contribute at most $2M_\varepsilon\|Ax\|\,|z|\int_1^\infty e^{-c\sigma}\sigma^{-2}d\sigma$ after $\sigma=s|z|$, and the arc contributes at most $2\theta eM_\varepsilon|z|\|Ax\|$. Thus $\|T(z)x-x\|\le C_{\delta',r}|z|\|Ax\|$ with one constant for all $z\in\Sigma_{\delta'}$ and $|z|\le r$, and this tends to $0$ as $z\to0$ in that smaller sector. [step 1.2, L1, L2, L3, given, algebra]

3.1 The semigroup law. Substituting [step 2.1] into [step 1.1] gives $T(z_1)T(z_2)=\frac1{(2\pi i)^2}\int_{\Gamma_2}e^{\lambda_2z_2}2\pi i e^{\lambda_2z_1}R(\lambda_2,A)\,d\lambda_2=\frac1{2\pi i}\int_{\Gamma_2}e^{\lambda_2(z_1+z_2)}R(\lambda_2,A)\,d\lambda_2=T(z_1+z_2)$, the last equality by the independence of the contour [L1], since $\Gamma_2$ is admissible for $z_1+z_2\in\Sigma_{\delta_0}$ when $\theta_2>\pi/2+\delta_0$. [step 1.1, step 2.1, L1, given, algebra]

4.1 Extension to all $x$ and assembly. $D(A)$ is dense in $X$, and $\|T(z)\|\le M_{\delta'}$ on $\Sigma_{\delta'}$ by [L1], so the uniform estimate of [step 2.2] on the dense set extends the strong limit $T(z)x\to x$ to every $x\in X$. Together with the semigroup law [step 3.1], the holomorphy and boundedness of [L1], and $T(0)=I$, this exhibits $T$ as a bounded analytic semigroup of angle $\delta$; the argument used only the resolvent identity, the contour computations and norm estimates, so no choice principle beyond Dependent Choice was used. [step 2.2, step 3.1, L1, given] ∎
