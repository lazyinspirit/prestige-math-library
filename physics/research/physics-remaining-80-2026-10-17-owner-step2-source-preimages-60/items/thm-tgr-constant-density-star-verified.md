---
id: thm-tgr-constant-density-star-verified
kind: theorem
title: "Exact regular constant-density star with verified matching"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps:
  - def-tgr-spherical-static-state-domain
  - def-countable-choice
  - lem-tgr-spherical-einstein-tov-reduction
  - lem-tgr-even-radial-center-regularity
  - thm-real-power-continuity-and-derivatives
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
dependency_roles:
  def-tgr-spherical-static-state-domain: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-tgr-spherical-einstein-tov-reduction: mathematical-premise
  lem-tgr-even-radial-center-regularity: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
sources:
  references:
    - title: "P.-H. Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, arXiv:1908.10806v1 (2019), Sec. III.A, Eqs. (99)–(110)"
      url: "https://arxiv.org/pdf/1908.10806"
    - title: "MIT 8.962, General Relativity, Spring 2020 Lecture Guide, Lecture 21, PDF pp. 7–9"
      url: "https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/743631236d2866f6ba129f06110d8b1a_MIT8_962S20_guide.pdf"
---

## Statement

Assume $\mathrm{ZF}+\mathrm{AC}_\omega$ exactly as in [[def-countable-choice]] and use the geometry and units of [[def-tgr-spherical-static-state-domain]]. Let $\rho_0>0$ be a constant mass density in $\mathrm{kg}\,\mathrm m^{-3}$, $R>0$ in metres, $\epsilon_0=\rho_0c^2$ in $\mathrm J\,\mathrm m^{-3}$, $M_R=4\pi\rho_0R^3/3$ in kilograms, and
$$u=\frac{2GM_R}{c^2R}\in(0,8/9),\qquad a=\sqrt{1-u},\qquad B(r)=\sqrt{1-u r^2/R^2}.$$
For $0\le r\le R$, define
$$M(r)=M_R(r/R)^3,\quad b(r)=B(r)^2,\quad p(r)=\epsilon_0\frac{B(r)-a}{3a-B(r)},\quad e^{\phi(r)}=\frac{3a-B(r)}2.$$
Set $\epsilon(r)=\epsilon_0$ for $0\le r<R$ and $\epsilon(r)=0$ for $r\ge R$. For $r\ge R$, also set $M(r)=M_R$, $b(r)=1-2GM_R/(c^2r)$, $p(r)=0$, and $e^{\phi(r)}=\sqrt{b(r)}$. Then $p(R)=0$, $b>0$, the interior lapse is positive, and the central pressure is finite and equals $\epsilon_0(1-a)/(3a-1)$. The interior and exterior fields solve the spherical Einstein and conservation system of [[lem-tgr-spherical-einstein-tov-reduction]] on their open pieces; the interior equations extend to the center by continuity. The interior metric has a $C^2$ Cartesian center; the interior and exterior join at $r=R$ as a $C^1$ metric that is piecewise $C^2$, with no delta-supported surface stress. The branch bound $u<8/9$ is proved for this constant-density family only; it is not a general Buchdahl theorem.

## Facts & Assumptions

**Given:** $\rho_0>0$, $R>0$, $u\in(0,8/9)$, $\epsilon_0=\rho_0c^2$, the metric convention of [[def-tgr-spherical-static-state-domain]], $\mathrm{AC}_\omega$ of [[def-countable-choice]], and the reduction and radial regularity results below.

[F1] The metric signature, source components, curvature sign, and SI units are those of [[def-tgr-spherical-static-state-domain]]; the spherical Einstein/conservation system is equivalent on $r>0$ to the mass, lapse, and pressure equations in [[lem-tgr-spherical-einstein-tov-reduction]].

[F2] For $b=1-r^2q$ with even $C^2$ $q$ and $b>0$, the spatial metric has the Cartesian form $\delta_{ij}+x_ix_jq/b$, and even radial lapse coefficients extend $C^2$ ([[lem-tgr-even-radial-center-regularity]]).

[F3] The square-root function is smooth on $(0,\infty)$ and has derivative $(\sqrt{x})'=1/(2\sqrt{x})$ ([[thm-real-power-continuity-and-derivatives]]).

[A1] The displayed constant-density formulas are the complete mathematical data to be checked; no empirical stellar model or causal transport law is assumed.

[A2] The geometric suppliers use $\mathrm{AC}_\omega$ as specified in [[def-countable-choice]]; no full Axiom of Choice is used.

## Proof

1.1 Since $0<u<8/9$, $a=\sqrt{1-u}>1/3$. On $0\le r\le R$, $a\le B(r)\le1$, so $b=B^2>0$ and $3a-B(r)\ge3a-1>0$. Thus the lapse and pressure are finite and the lapse is positive; $p(R)=0$, $p(r)\ge0$, and $p(0)=\epsilon_0(1-a)/(3a-1)$. [given, A1, A2, F3, algebra]

2.1 The mass formula gives $M'=3M_Rr^2/R^3=4\pi\rho_0r^2=4\pi r^2\epsilon_0/c^2$. The functions $B,\phi,p$ are even and smooth near $r=0$ because $1-u r^2/R^2>0$ and $3a-B>0$. Writing $b=1-r^2q$ with $q=u/R^2$, [F2] gives a $C^2$ Cartesian center for the interior metric. The Einstein equations hold at the center by continuity of the curvature and source components from $r>0$. [A2, step 1.1, F2, F3, algebra]

2.2 For $0<r<R$, differentiation gives $$B'=-\frac{ur}{R^2B},\quad \phi'=\frac{ur}{R^2B(3a-B)},\quad \left(\frac p{\epsilon_0}\right)'=-\frac{2au r}{R^2B(3a-B)^2}.$$ Also $1+p/\epsilon_0=2a/(3a-B)$, so $p'=-(\epsilon_0+p)\phi'$. Using $u=8\pi G\epsilon_0R^2/(3c^4)$ and $p/\epsilon_0=(B-a)/(3a-B)$, direct simplification yields $$\phi'=\frac{4\pi G r(\epsilon_0/3+p)}{c^4b} =\frac{GM/c^2+4\pi G r^3p/c^4}{r^2b},$$ where $M=M_Rr^3/R^3$. Substituting the displayed lapse into $p'=-(\epsilon_0+p)\phi'$ is the TOV pressure equation in [F1], so the interior mass, lapse, and pressure equations all hold. [A2, step 1.1, F1, F3, algebra]

2.3 For $r\ge R$, $M'=0$, $\epsilon=p=0$, and $b=1-uR/r>0$ since $u<1$. Here $\phi'=\frac12 b'/b=uR/(2r^2b)=GM_R/(c^2r^2b)$, so the vacuum mass and lapse equations hold and the pressure equation is $0=0$. [A2, F1, step 1.1, algebra]

3.1 At $r=R$, the interior and exterior values satisfy $b(R)=a^2$ and $e^{\phi(R)}=a$, so the induced metric and lapse agree. Choose additive constants so the interior and exterior outward proper radial coordinate $\ell$, defined by $d\ell=dr/\sqrt b$, agrees at $R$. Then $dr/d\ell=\sqrt b$ agrees at $R$. The lapse derivative also agrees: the interior gives $d(e^\phi)/d\ell=e^\phi\phi'\sqrt b=u/(2R)$ at $R$, and the exterior gives $d\sqrt b/d\ell=b'/2=u/(2R)$. Hence the coefficients $g_{00}=-e^{2\phi}$ and $r(\ell)^2\gamma$ have matching first derivatives; $g_{\ell\ell}=1$ on both sides. The metric is therefore $C^1$ and piecewise $C^2$. A piecewise $C^2$ function with continuous first derivative has a distributional second derivative equal to the ordinary piecewise second derivative, with no delta at the join; consequently this metric has no delta-supported curvature or surface stress. [A2, step 1.1, step 2.1, step 2.2, step 2.3, algebra] ∎

## Remarks

The $u<8/9$ pressure restriction and endpoint divergence belong to this explicit uniform-density branch. The argument neither proves the general Buchdahl theorem nor supplies a finite-sound-speed matter dynamics for the incompressible equation of state.


