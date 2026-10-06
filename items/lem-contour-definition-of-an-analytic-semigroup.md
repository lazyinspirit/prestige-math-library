---
id: lem-contour-definition-of-an-analytic-semigroup
kind: lemma
title: The Dunford contour integral defines a bounded holomorphic family on the sector
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-sectorial-operator-with-the-semigroup-sign-convention, def-complex-sector-and-bounded-analytic-semigroup, lem-resolvent-identity-and-holomorphy-for-closed-operators, lem-banach-valued-cauchy-theorem-on-star-shaped-domains, def-complex-contours-reversal-concatenation-and-closedness, lem-bochner-integral-norm-inequality, lem-linearity-of-the-bochner-integral, def-bounded-linear-operator, def-operator-norm, def-banach-space, thm-bounded-operator-space-is-banach, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: 'Chapter 2 Section 2.3, Lemma 2.22 and (2.16)-(2.17), printed pp. 58-59'
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: 'Chapter II Section 4.a, Definition 4.2 and Proposition 4.3, printed pp. 96-98'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]) for the cited integral and semigroup suppliers.

Let $A$ be sectorial of angle $\delta\in(0,\pi/2]$ with vertex $0$ on a complex
Banach space $X$
([[def-sectorial-operator-with-the-semigroup-sign-convention]],
[[def-banach-space]]). For $r>0$ and $\theta\in(\pi/2,\pi/2+\delta)$ let
$\Gamma(r,\theta)$ consist of the lower ray $se^{-i\theta}$ for $s\ge r$, the
circular arc $re^{i\alpha}$ for $-\theta\le\alpha\le\theta$, and the upper ray
$se^{i\theta}$ for $s\ge r$, oriented counterclockwise around the spectrum.
For $R>r$ let $\Gamma_R(r,\theta)$ be the corresponding truncated path. Its
integrand $\lambda\mapsto e^{\lambda z}R(\lambda,A)$ is
$\mathcal B(X)$-valued, and its contour integral is the Bochner integral in
the Banach space $\mathcal B(X)$ with the operator norm; this space is Banach
because $X$ is Banach
([[def-complex-contours-reversal-concatenation-and-closedness]],
[[lem-linearity-of-the-bochner-integral]],
[[lem-bochner-integral-norm-inequality]],
[[thm-bounded-operator-space-is-banach]]). For $z\in\Sigma_\delta$
([[def-complex-sector-and-bounded-analytic-semigroup]]) choose an admissible
angle satisfying $\pi/2+|\arg z|<\theta<\pi/2+\delta$ and set
$$T(z):=\frac1{2\pi i}\lim_{R\to\infty}\int_{\Gamma_R(r,\theta)}e^{\lambda z}R(\lambda,A)\,d\lambda,$$
where the limit is taken in the complete operator-norm space $\mathcal B(X)$
([[def-bounded-linear-operator]], [[def-operator-norm]],
[[thm-bounded-operator-space-is-banach]]). Then:

1. the integral converges absolutely for every such $z$; for each compact
   $K\subset\Sigma_\delta$ one admissible angle can be chosen for all $z\in K$,
   and the truncated integrals converge absolutely and locally uniformly in
   operator norm on $K$;
2. the value is independent of $r>0$ and of the admissible angle $\theta$;
3. $z\mapsto T(z)$ is norm-holomorphic and
   $$T'(z)=\frac1{2\pi i}\int_{\Gamma(r,\theta)}\lambda e^{\lambda z}R(\lambda,A)\,d\lambda;$$
4. $\sup_{z\in\Sigma_{\delta'}}\|T(z)\|<\infty$ for every $\delta'<\delta$.

No choice principle beyond Dependent Choice is used.

## Facts & Assumptions

**Given:** A sectorial operator $A$ of angle $\delta$ with vertex $0$ on a complex Banach space $X$, with $\|R(\lambda,A)\|\le M_\varepsilon/|\lambda|$ on $|\arg\lambda|<\pi/2+\delta-\varepsilon$ for every $\varepsilon\in(0,\delta)$ ([[def-sectorial-operator-with-the-semigroup-sign-convention]]); fixed $r>0$; a compact $K\subset\Sigma_\delta$ with $\delta_K:=\max_{z\in K}|\arg z|<\delta$, $m_K:=\min_{z\in K}|z|>0$, $M_K:=\max_{z\in K}|z|$; a fixed $\theta$ with $\pi/2+\delta_K<\theta<\pi/2+\delta$ and $\varepsilon>0$ with $\theta<\pi/2+\delta-\varepsilon$; the truncated contours $\Gamma_R(r,\theta)$; and $\psi_z(\lambda):=e^{\lambda z}R(\lambda,A)$.

[L1] $|\arg\lambda|\le\theta$ implies $\lambda\in\rho(A)$ and $\|R(\lambda,A)\|\le M_\varepsilon/|\lambda|$ with $M_\varepsilon$ as in the givens ([[def-sectorial-operator-with-the-semigroup-sign-convention]]).

[L2] $\lambda\mapsto R(\lambda,A)$ is norm-holomorphic on $\rho(A)$ with derivative $-R(\lambda,A)^2$, and for every $z\in\mathbb C$ the maps $\lambda\mapsto e^{\lambda z}R(\lambda,A)$ and $\lambda\mapsto \lambda e^{\lambda z}R(\lambda,A)$ are norm-holomorphic on $\rho(A)$ ([[lem-resolvent-identity-and-holomorphy-for-closed-operators]]).

[L3] The open sector $S_\varepsilon:=\{\lambda\ne0:|\arg\lambda|<\pi/2+\delta-\varepsilon\}$ has half-angle $<\pi$ and omits the negative real axis, so it is star-shaped with base point any positive real number: a segment from a positive real number to a point of the sector cannot contain $0$ and its arguments stay in the convex cone spanned by the positive axis and the endpoint; every $\mathcal B(X)$-valued function continuous and complex-differentiable on a star-shaped domain has vanishing integral over closed piecewise $C^1$ contours in it, since $\mathcal B(X)$ is Banach by [L5] ([[lem-banach-valued-cauchy-theorem-on-star-shaped-domains]]).

[L4] For the curve integral of a continuous integrand, $\|\int_\gamma f\,d\lambda\|\le\int_\gamma\|f\|\,|d\lambda|$ and the integral is linear in $f$ ([[lem-bochner-integral-norm-inequality]], [[lem-linearity-of-the-bochner-integral]]).

[L5] Since $X$ is Banach, $\mathcal B(X)=\mathcal B(X,X)$ is Banach in the operator norm ([[thm-bounded-operator-space-is-banach]]).

## Proof

**Proof technique:** direct.

1.1 Angle geometry on $K$. For $z\in K$, the upper-ray angle satisfies $\pi/2<\theta+\arg z<3\pi/2$, since $\theta+\arg z\ge\theta-\delta_K>\pi/2$ and $\theta+\arg z\le\theta+\delta_K<\pi/2+\delta+\delta_K<3\pi/2$. The lower-ray angle satisfies $-3\pi/2< -\theta+\arg z< -\pi/2$, since $-\theta+\arg z\le -\theta+\delta_K< -\pi/2$ and $-\theta+\arg z\ge -\theta-\delta_K> -\pi/2-\delta-\delta_K> -3\pi/2$. Thus $\cos(\pm\theta+\arg z)<0$ for both rays. The continuous function $z\mapsto-\cos(\pm\theta+\arg z)$ is positive on $K$, so $c_K:=\min_{z\in K,\theta'=\pm\theta}\bigl(-\cos(\theta'+\arg z)\bigr)>0$, and for $\lambda=se^{\pm i\theta}$ one has $\operatorname{Re}(\lambda z)=s|z|\cos(\pm\theta+\arg z)\le-c_Ks|z|$. [given, algebra]

1.2 The integrand is holomorphic on a star-shaped sector. By [L1] the sector $S_\varepsilon$ of [L3] lies in $\rho(A)$, and by [L2] both $\lambda\mapsto e^{\lambda z}R(\lambda,A)$ and $\lambda\mapsto\lambda e^{\lambda z}R(\lambda,A)$ are norm-holomorphic on it; $S_\varepsilon$ is star-shaped with base point any positive real by [L3]. Since $\mathcal B(X)$ is Banach by [L5], the Banach-valued Cauchy theorem applies to these $\mathcal B(X)$-valued maps. [L1, L2, L3, L5, given]

2.1 Absolute convergence and local uniformity. For $z\in K$ and $\lambda=se^{\pm i\theta}$ on the rays, [step 1.1] and [L1] give $\|\psi_z(\lambda)\|\le e^{-c_Ks|z|}M_\varepsilon/s\le e^{-c_Km_Ks}M_\varepsilon/s$, which is integrable over $s\ge r$; on the arc $|\lambda|=r$ one has $\|\psi_z(\lambda)\|\le e^{M_Kr}M_\varepsilon/r$, an integrable bound on a compact interval. Hence $\int_\Gamma\|\psi_z(\lambda)\|\,|d\lambda|<\infty$ and, by [L4], $\|\int_{\Gamma_R}\psi_z\,d\lambda-\int_{\Gamma_{R'}}\psi_z\,d\lambda\|\le 2M_\varepsilon\int_R^{R'}e^{-c_Km_Ks}\,ds/s$ for $R<R'$, a bound independent of $z\in K$ tending to $0$. Thus the truncated integrals form a Cauchy family in $\mathcal B(X)$ and converge there by [L5]; this is the operator-norm limit, uniformly on $K$, and the integrals converge absolutely. [step 1.1, L1, L4, L5, given, algebra]

3.1 Independence of the inner radius. Fix $\theta$ and $0<r_1<r_2$ and $R>r_2$. The truncated paths $\Gamma_R(r_1,\theta)$ and $\Gamma_R(r_2,\theta)$ have the same initial point $Re^{-i\theta}$ and the same terminal point $Re^{i\theta}$, so their concatenation with the reversal of the second is a closed piecewise $C^1$ contour lying in the star-shaped sector $S_\varepsilon$ of [step 1.2], where $\psi_z$ is holomorphic; by the Banach-valued Cauchy theorem in $\mathcal B(X)$, applicable by [L5], [L3] its integral vanishes, hence $\int_{\Gamma_R(r_1,\theta)}\psi_z\,d\lambda=\int_{\Gamma_R(r_2,\theta)}\psi_z\,d\lambda$ for every $R>r_2$; letting $R\to\infty$ and using [step 2.1] gives equality of the limits. [step 1.2, step 2.1, L3, L5, given, algebra]

3.2 Independence of the angle. Fix $r$ and $\pi/2<\theta_1<\theta_2<\pi/2+\delta$, both admissible for the given $z$, and $R>r$. Let $A_R^{+}$ be the counterclockwise arc $Re^{i\alpha}$, $\alpha\in[\theta_1,\theta_2]$, and $A_R^{-}$ its reflection $\alpha\in[-\theta_2,-\theta_1]$; then $\Gamma_R(r,\theta_1)+A_R^{+}-\Gamma_R(r,\theta_2)+A_R^{-}$ is a closed piecewise $C^1$ contour in the star-shaped sector $S_\varepsilon$ (for $\theta_2<\pi/2+\delta-\varepsilon$), so the Banach-valued Cauchy theorem in $\mathcal B(X)$ applies by [L5] and [L3] its integral vanishes; hence $\int_{\Gamma_R(r,\theta_1)}\psi_z-\int_{\Gamma_R(r,\theta_2)}\psi_z=-\int_{A_R^{+}}\psi_z-\int_{A_R^{-}}\psi_z$. On the arcs $|\lambda|=R$ with angle $\alpha$ between $\theta_1,\theta_2$ and their reflections one has $|\alpha+\arg z|>\pi/2$ uniformly, so $\|\psi_z\|\le e^{-cR}$ for a constant $c>0$ and the right-hand side tends to $0$ as $R\to\infty$; hence the two limits agree. [step 1.2, step 2.1, L3, L5, given, algebra]

3.3 Norm-holomorphy and the derivative formula. Fix $K$, the angle $\theta$ of [step 1.1] and $r>0$. Put $d_K:=\operatorname{dist}(K,\mathbb C\setminus\Sigma_\delta)>0$ and choose $h_0<\min\{c_Km_K,d_K\}$. Then $z+h\in\Sigma_\delta$ for $z\in K$, $|h|<h_0$, and the exponential estimate $|h^{-1}(e^{\lambda h}-1)-\lambda|\le|h|\,|\lambda|^2e^{|h||\lambda|}$ together with [L1] gives, on the rays, $\|h^{-1}(\psi_{z+h}(\lambda)-\psi_z(\lambda))-\lambda\psi_z(\lambda)\|\le|h|\,M_\varepsilon|\lambda|\,e^{-c_K|\lambda||z|+h_0|\lambda|}\le|h|\,M_\varepsilon s\,e^{-(c_Km_K-h_0)s}$ with $c_Km_K-h_0>0$, an integrable bound whose integral tends to $0$ with $h$, while on the compact arc the same estimate is bounded uniformly and contributes $O(|h|)$; hence for each fixed $R$ the difference quotients of $\int_{\Gamma_R}\psi$ tend to $\int_{\Gamma_R}\lambda\psi_z\,d\lambda$ with an error bounded uniformly in $R$, and letting $R\to\infty$ with the majorant of [step 2.1] and [L4] gives $\|h^{-1}(T(z+h)-T(z))-(2\pi i)^{-1}\int_\Gamma\lambda e^{\lambda z}R(\lambda,A)\,d\lambda\|\to0$; completeness [L5] ensures that this derivative integral and the limit lie in $\mathcal B(X)$, so $T$ is complex-differentiable with that derivative (uniformly on $K$). [step 2.1, L1, L2, L4, L5, given, algebra]

4.1 Uniform boundedness on smaller sectors. Fix $\delta'<\delta$ and an angle $\theta$ with $\pi/2+\delta'<\theta<\pi/2+\delta$; for $z\in\Sigma_{\delta'}$ the value $T(z)$ is, by the independence of the inner radius [step 3.1], computable with $r=1/|z|$, so on the rays $\operatorname{Re}(\lambda z)\le-c\,s|z|$ with $c=c(\theta,\delta')>0$ and the ray contribution is at most $M_\varepsilon\int_{1}^{\infty}e^{-c\sigma}\,d\sigma/\sigma$, while the arc has length at most $2\theta/|z|$, radius $1/|z|$ and integrand norm at most $eM_\varepsilon|z|$, contributing at most $2\theta eM_\varepsilon$; both bounds are independent of $z$, so $\sup_{\Sigma_{\delta'}}\|T\|<\infty$. [step 3.1, L1, L4, given, algebra]

5.1 Conclusion. [step 2.1] proves claim 1, [step 3.1] and [step 3.2] prove claim 2, [step 3.3] proves claim 3, and [step 4.1] proves claim 4; the argument used only the sectorial resolvent bound, the resolvent holomorphy, the contour integral over closed curves in the star-shaped sector and norm estimates, hence no choice principle beyond Dependent Choice was used. [step 2.1, step 3.1, step 3.2, step 3.3, step 4.1, given] ∎ 
