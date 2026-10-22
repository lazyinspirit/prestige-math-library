---
id: lem-gr-fx-kerr-horizon-modal-flux
kind: lemma
title: "Time-averaged stationary flux of a Kerr horizon mode"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
physical_scope: "A local algebraic flux identity for a smooth scalar mode trace on a regular subextremal Kerr future horizon; it asserts no global mode existence or scattering amplification."
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-countable-choice
  - def-gr-fx-kerr-exterior
  - def-gr-fx-kerr-horizon-mode
  - def-gr-fx-scalar-wave-stress
  - def-integral-curve-of-a-vector-field
  - thm-unique-maximal-integral-curve-through-each-point
  - thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves
  - prop-gr-fx-kerr-horizon-generator
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-fx-kerr-exterior: mathematical-premise
  def-gr-fx-kerr-horizon-mode: mathematical-premise
  def-gr-fx-scalar-wave-stress: mathematical-premise
  def-integral-curve-of-a-vector-field: mathematical-premise
  thm-unique-maximal-integral-curve-through-each-point: mathematical-premise
  thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves: mathematical-premise
  prop-gr-fx-kerr-horizon-generator: mathematical-premise
sources:
  references:
    - title: "M. Dafermos and I. Rodnianski, Lectures on black holes and linear waves, arXiv:0811.0354v1 (2008), §§5.2.1–5.2.3, PDF pp. 59–61"
      url: "https://arxiv.org/pdf/0811.0354"
    - title: "H. S. Reall, Black Holes (Part III lecture notes, 15 March 2024), §§7.3–7.4 and 9.1, PDF pp. 94–96 and 113–114"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $0<|a|<M$, and let
$P\subset H^+=\{r=r_+\}$ be the smooth open mode patch, with stationary field $T$, axial field $\Phi$,
future null generator $\chi=T+\Omega_H\Phi$, and
$\Omega_H=a/(r_+^2+a^2)$. Let $u\in C^\infty(P,\mathbb C)$ be a nonzero
$(\omega,m)$ mode trace, where $\omega>0$, $m\in\mathbb Z$, and suppose that
$\psi=\operatorname{Re}u$ is the trace of a smooth real scalar field near
$P$. No wave equation or global extension of the mode is assumed. For each
$p\in P$, let $\gamma_p:I_p\to H^+$ be the unique maximal integral curve of
$T$ through $p$, with $\gamma_p(0)=p$ and maximal open interval domain
$I_p\subseteq\mathbb R$. For
$p$ with $[0,2\pi/\omega]\subset I_p$ and
$\gamma_p([0,2\pi/\omega])\subset P$, define

$$\langle Q(\chi,T)\rangle_T(p):=\frac{\omega}{2\pi}\int_0^{2\pi/\omega}Q_{ab}[\psi](\gamma_p(\tau))\chi^aT^b\,d\tau.$$

Write $P_{\omega,T}$ for the set of such points. Then, for every
$p\in P_{\omega,T}$,

$$\langle Q(\chi,T)\rangle_T=\frac12\omega(\omega-m\Omega_H)|u|^2.$$

Consequently, when $m\Omega_H>\omega>0$, this averaged stationary horizon-flux density is nonpositive at every point of $P_{\omega,T}$, is zero at every node $u=0$, and is strictly negative exactly where $u\ne0$.

For a compact smooth spacelike horizon-cut patch $D\subset P_{\omega,T}$ with
nonempty interior and smooth boundary, let $d\mu_D$ be the positive area
measure of its induced metric. Thus the mode domain contains the full
integral-curve segment of length $2\pi/\omega$ from every point of $D$. Define the
integrated averaged stationary flux by
$$\mathcal F_D:=\int_D\langle Q(\chi,T)\rangle_T\,d\mu_D =\frac12\omega(\omega-m\Omega_H)\int_D|u|^2\,d\mu_D.$$
In the same frequency band, $\mathcal F_D<0$ whenever $u|_D$ is not identically zero. At any $p\in P_{\omega,T}$ with $u(p)\ne0$, such an admissible patch can be chosen around $p$. This is a conditional local mode-trace calculation; it does not assert the existence of a global wave or scattering solution.

## Statement references

[[def-gr-fx-kerr-exterior]]

[[def-gr-fx-kerr-horizon-mode]]

[[def-gr-fx-scalar-wave-stress]]

[[def-integral-curve-of-a-vector-field]]

[[thm-unique-maximal-integral-curve-through-each-point]]

[[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]]

[[prop-gr-fx-kerr-horizon-generator]]

## Facts & Assumptions

**Given:** The regular Kerr horizon geometry, a nonzero smooth mode trace,
and the smooth real scalar field with that trace.

[F1] [[def-gr-fx-kerr-horizon-mode]]: $Tu=-i\omega u$, $\Phi u=im u$, and $\chi u=-i(\omega-m\Omega_H)u$.

[F2] [[def-gr-fx-scalar-wave-stress]]: $Q_{ab}[\psi]=\nabla_a\psi\nabla_b\psi-\tfrac12g_{ab}g^{cd}\nabla_c\psi\nabla_d\psi$.

[F3] [[prop-gr-fx-kerr-horizon-generator]]: $H^+$ is null, $\chi=T+\Omega_H\Phi$ is its null normal generator, and $T,\Phi$ preserve the horizon.

[F4] [[def-integral-curve-of-a-vector-field]]: an integral curve $\gamma$ of $T$ satisfies $\gamma'(\tau)=T_{\gamma(\tau)}$ on its interval domain.

[F5] [[thm-unique-maximal-integral-curve-through-each-point]]: there is a unique maximal integral curve $\gamma_p:I_p\to H^+$ of $T$ through every $p\in H^+$.

[F6] [[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]]: near each point of $H^+$, the local integral curves of the smooth field $T$ exist on a common time interval and depend smoothly on their initial points.

[A1] $\mathrm{AC}_\omega$ is the only choice principle used in the Kerr horizon extension and smooth tangent-bundle conventions of [F3] ([[def-countable-choice]]).

## Proof

1.1 Since $\chi$ is normal to the null hypersurface $H^+$ and both $T$ and $\Phi$ are tangent to it by [F3], $g(\chi,T)=g(\chi,\Phi)=0$ on $H^+$. Hence the metric-trace term in [F2] vanishes when contracted with $\chi^aT^b$, so
$Q(\chi,T)=(\chi\psi)(T\psi)$. [given, A1, F2, F3, algebra]

2.1 Fix $p\in P_{\omega,T}$ and put $A:=u(p)$. Along its stationary integral-curve segment, $\frac{d}{d\tau}u(\gamma_p(\tau))=(Tu)(\gamma_p(\tau))=-i\omega u(\gamma_p(\tau))$ by [F4], so $u(\gamma_p(\tau))=Ae^{-i\omega\tau}$. The mode equations [F1] give
$T\psi=\operatorname{Re}(-i\omega u)$ and
$\chi\psi=\operatorname{Re}(-i(\omega-m\Omega_H)u)$. [given, F1, F4, step 1.1, algebra]

3.1 If $A=0$, both differentiated real fields vanish along this orbit and the displayed average identity is $0=0$. Otherwise put $\vartheta=\arg A-\omega\tau$. Then
$T\psi=\omega|A|\sin\vartheta$ and
$\chi\psi=(\omega-m\Omega_H)|A|\sin\vartheta$. Averaging their product over $\tau\in[0,2\pi/\omega]$ uses
$\frac{\omega}{2\pi}\int_0^{2\pi/\omega}\sin^2(\arg A-\omega\tau)\,d\tau=\frac12$, and gives the displayed identity. [step 2.1, algebra]

4.1 If $m\Omega_H>\omega>0$, the coefficient $\omega(\omega-m\Omega_H)/2$ is strictly negative. Since $|u|^2\ge0$, step 3.1 gives a nonpositive averaged density, with equality exactly at $u=0$ and strict negativity exactly at $u\ne0$. A mode that is not identically zero need not be nonvanishing at every point. [given, step 3.1, algebra]

5.1 On the compact patch $D$, smoothness bounds $|u|^2$ and the induced area density, so both displayed integrals are finite. Integrating step 3.1 gives the formula for $\mathcal F_D$. If $u|_D$ is not identically zero, continuity and density of the interior give an interior point where $|u|^2>0$ and a smaller coordinate disk where $|u|^2\ge b>0$. The positive smooth area density has a positive lower bound $a>0$ on a still smaller closed disk; its positive Euclidean area makes $\int_D|u|^2d\mu_D\ge ab\,\operatorname{area}(\text{disk})>0$. Step 4.1 then makes $\mathcal F_D<0$. To find a patch near a point $p\in P_{\omega,T}$ with $u(p)\ne0$, cover the compact integral-curve segment $\gamma_p([0,2\pi/\omega])$ by finitely many neighborhoods supplied by [F6] and subdivide the parameter interval so each piece lies in one such neighborhood. Composing the corresponding local solution maps gives smooth dependence on initial data through the whole interval. Since $\gamma_p([0,2\pi/\omega])\subset P$ and $P$ is open, shrink the initial neighborhood of $p$ so all these curves remain in $P$; nearby points then also lie in $P_{\omega,T}$. By [F3], $T_pH^+=\chi_p^\perp$ for a nonzero null normal $\chi_p$. Nondegeneracy gives $v$ with $g(\chi_p,v)=-1$; then $k=v+\tfrac12g(v,v)\chi_p$ is null and $g(\chi_p,k)=-1$. The plane spanned by $\chi_p,k$ has one negative and one positive direction, so its orthogonal complement is a positive two-plane in $T_pH^+$. Choose a smooth hypersurface chart whose first two coordinate vectors span that plane at $p$, fix its third coordinate, and shrink a closed coordinate disk about $p$. Positivity persists by continuity of its metric matrix, and the disk can be chosen inside the neighborhood and the nonzero set. No integral over a full noncompact horizon is used. [given, F3, F4, F5, F6, step 3.1, step 4.1, algebra] ∎
