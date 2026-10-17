---
id: def-tgr-spherical-entropy-constraint-functional
kind: definition
title: "Proper spherical entropy and particle constrained functionals"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps:
  - def-tgr-spherical-static-state-domain
  - lem-tgr-even-radial-center-regularity
  - def-countable-choice
  - thm-differentiation-under-the-integral-sign-on-a-compact-rectangle
  - def-darboux-integral
  - thm-continuous-implies-integrable
  - thm-real-power-continuity-and-derivatives
dependency_roles:
  def-tgr-spherical-static-state-domain: mathematical-premise
  lem-tgr-even-radial-center-regularity: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  def-darboux-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "P.-H. Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, arXiv:1908.10806v1 (2019), Secs. III.B–III.C, Eqs. (113)–(125)"
      url: "https://arxiv.org/pdf/1908.10806"
    - title: "MIT 8.962, General Relativity, Spring 2020 Lecture Guide, Lectures 21–22, PDF pp. 7–9"
      url: "https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/743631236d2866f6ba129f06110d8b1a_MIT8_962S20_guide.pdf"
---

## Definition

Assume $\mathrm{ZF}+\mathrm{AC}_\omega$ as in [[def-countable-choice]]. Fix $R>0$, an open state chart $\mathcal U\subset(0,\infty)^2$, and a function $s\in C^2(\mathcal U,\mathbb R)$ with $s_\epsilon>0$. The coordinates on $\mathcal U$ are energy density $\epsilon$ in $\mathrm J\,\mathrm m^{-3}$ and particle number density $n$ in $\mathrm m^{-3}$; the entropy density has units $[s]=\mathrm J\,\mathrm K^{-1}\,\mathrm m^{-3}$. Define the local temperature, chemical potential, and pressure functions by
$$\Theta(\epsilon,n):=\frac1{s_\epsilon(\epsilon,n)},\qquad \mu(\epsilon,n):=-\Theta(\epsilon,n)s_n(\epsilon,n),\qquad p(\epsilon,n):=\Theta s+\mu n-\epsilon.$$
These are $C^1$ functions on $\mathcal U$; their formal SI dimensions are $\mathrm K$, $\mathrm J$, and $\mathrm J\,\mathrm m^{-3}$, respectively. By definition $\epsilon+p=\Theta s+\mu n$, and differentiation gives $d\epsilon=\Theta\,ds+\mu\,dn$ and $dp=s\,d\Theta+n\,d\mu$ on the chart.

Let $\epsilon,n$ be restrictions to $[0,R]$ of even $C^2$ functions on an open interval containing $[-R,R]$, positive on $[0,R]$, with image in a compact subset of $\mathcal U$. This evenness is the center regularity convention. With $K:=4\pi G/c^4$, define
$$M(r):=\frac{4\pi}{c^2}\int_0^r \epsilon(t)t^2\,dt,\qquad b(r):=1-\frac{2GM(r)}{c^2r}\quad(r>0),\qquad b(0):=1.$$
Equivalently, $b(r)=1-r^2q(r)$ on $[-R,R]$, where
$$q(r):=2K\int_0^1s^2\epsilon(rs)\,ds.$$
The compact-parameter differentiation theorem [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]] makes $q$ even $C^2$. Therefore [[lem-tgr-even-radial-center-regularity]] gives the corresponding $C^2$ Cartesian spatial metric coefficients.
Assume $b(r)\ge b_*>0$ on $[0,R]$. The displayed integrals are Riemann integrals in the Darboux convention of [[def-darboux-integral]]; their continuous integrands are integrable by [[thm-continuous-implies-integrable]], and $b^{-1/2}$ is continuous on this positive range by [[thm-real-power-continuity-and-derivatives]]. Use the spatial metric $h=b(r)^{-1}dr^2+r^2\gamma$ on $(0,R)\times S^2$, where $\gamma$ is the unit round sphere metric used in [[def-tgr-spherical-static-state-domain]]. Here $h$ has $C^2$ coefficients and the Cartesian center extension just established; no globally smooth static state is required. Define its volume density in a spherical coordinate chart by $\sqrt{\det(h_{ij})}\,dr\,d\theta\,d\varphi$. Since $\det(h_{ij})=b^{-1}r^4\sin^2\theta$, integration over the unit sphere gives the radial density $4\pi r^2b(r)^{-1/2}dr$. This uses the same spatial metric formula as the smooth static domain, at the present $C^2$ regularity. Define the proper entropy, proper particle number, and spherical mass-energy functionals
$$S[\epsilon,n]:=4\pi\int_0^R s(\epsilon(r),n(r))\,r^2b(r)^{-1/2}\,dr,\quad N_b[\epsilon,n]:=4\pi\int_0^R n(r)\,r^2b(r)^{-1/2}\,dr,\quad E[\epsilon,n]:=c^2M(R)=4\pi\int_0^R\epsilon(r)r^2\,dr.$$
Their formal dimensions are $[S]=\mathrm J\,\mathrm K^{-1}$, $[N_b]=1$, and $[E]=\mathrm J$. These are mathematical functionals on the supplied state chart and positive-$b$ profile domain; they assert no entropy law, equilibrium, maximum, dynamics, or empirical fact.

## Remarks

The energy functional is the spherical mass-energy constraint $c^2M(R)$, not a generic additive gravitational energy on arbitrary spacetimes. No relation between this state chart and any particular material equation of state is assumed beyond the displayed definitions.

