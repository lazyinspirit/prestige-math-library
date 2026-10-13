---
id: rem-sr-newtonian-bridge-limits-and-failures
kind: remark
domain: physics
title: 'Limits of the Newtonian bridge: speed-dependent error constants, the excluded massless case, and bounded chart regions'
status: published
origin: session
dependency_level: 17
deps: [pthm-sr-newtonian-p-e-correspondence, lem-sr-uniform-low-speed-expansion-of-observer-quantities, lem-sr-energy-momentum-observer-identities, post-sr-ideal-massless-particle-momentum, def-sr-observed-energy-momentum-and-kinetic-energy, def-sr-newtonian-comparison-quantities, lem-sr-uniform-galilean-limit-of-boost-charts, thm-sr-proper-time-and-observer-decomposition, def-rational-power, thm-of-archimedean, def-time-orientation-and-future-causal-sets, thm-path-connected-implies-connected]
dependency_roles:
  thm-path-connected-implies-connected: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  pthm-sr-newtonian-p-e-correspondence: physical-result
  lem-sr-uniform-low-speed-expansion-of-observer-quantities: mathematical-premise
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  post-sr-ideal-massless-particle-momentum: physical-assumption
  def-sr-observed-energy-momentum-and-kinetic-energy: mathematical-premise
  def-sr-newtonian-comparison-quantities: formulation-prerequisite
  lem-sr-uniform-galilean-limit-of-boost-charts: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-rational-power: mathematical-premise
  thm-of-archimedean: mathematical-premise
aliases: []
landmark: false
physical_scope: 'Scope remark for the flat special-relativity massive-particle model and the same bounded low-speed domain as pthm-sr-newtonian-p-e-correspondence: it records the failure of any speed-independent error constant as |w| -> c, the exclusion of ideal massless particles, and the Galilean chart limit on bounded regions and its whole-domain failure for nonzero boost velocity (the zero-velocity maps coincide everywhere). It asserts no new physical law, no dynamics, and no empirical statement.'
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas restored to x^0 = c t; Section 4.2 pp. 82-86 (relativistic kinetic energy; Example 5 p. 86, the Newtonian prediction eV = (1/2)mv^2), Section 4.3.3 Example 8 p. 91 (the Newtonian limit v = p/m), Section 4.3.4 p. 96 (p = m gamma v; the momentum of a material particle approaches infinity as its speed approaches c) and problems 11-12 p. 116 (expand K = m(gamma-1) and p = m gamma v in Taylor series; show the first terms are the nonrelativistic expressions)'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997); signature (-+++) with c = 1. Chapter 1 printed p. 27, equations (1.98)-(1.101) (PDF p. 34): for small v, p^0 = m + (1/2)mv^2 (rest energy plus kinetic energy) and p^1 = mv (Newtonian momentum); Chapter 4 printed pp. 105-106 (PDF pp. 112-113): the Newtonian limit, the slow-motion condition (4.10) and the weak static field'
      url: 'https://arxiv.org/pdf/gr-qc/9712019'
verification:
  precheck: pass
---

## Limits of the low-speed bridge

Scope remark on the limits of the low-speed bridge. Each quantitative assertion is an immediate consequence of the cited displayed identities; none of them is used as a premise elsewhere on this page, and the remark asserts no new physical law, dynamics or empirical content.

### (i) No speed-independent error constant

Let $m>0$. For every $B\ge0$ there are a future unit $n\in V$, a vector $U$ with $\eta(U,U)=-c^2$ and a state $P=mU$ whose relative velocity $w$ of [[thm-sr-proper-time-and-observer-decomposition]]\,(d) satisfies $|w|<c$ and $\bigl|T_n(P)-\tfrac12m|w|^2\bigr|>B$, with $T_n$ as in [[def-sr-observed-energy-momentum-and-kinetic-energy]]. Explicitly, fix a future unit $n$ and a unit $e\in n^\perp$ and, for every integer $\gamma\ge2$, take the state with Lorentz factor $\gamma$, namely $w=c\sqrt{1-\gamma^{-2}}e$, $U=c\gamma(n+w/c)$ and $P=mU$. Bilinearity gives $\eta(U,U)=-c^2$. The continuous segment $s\mapsto n+sw/c$, $0\le s\le1$, is timelike because its squared norm is $-1+s^2|w|^2/c^2<0$; it starts at $n\in C^+$ and its endpoint lies in that same component ([[def-time-orientation-and-future-causal-sets]], [[thm-path-connected-implies-connected]]\,(3)). Positive scaling gives $U\in C^+$, while $-\eta(n,U/c)=\gamma$ and the rest projection gives $h(U)/\gamma=w$. Hence these states have the claimed relative velocity and Lorentz factor; [[lem-sr-energy-momentum-observer-identities]]\,(b) gives $T_n(P)=mc^2(\gamma-1)$ while $\tfrac12m|w|^2=\tfrac12mc^2(1-\gamma^{-2})$, so $$T_n(P)-\tfrac12m|w|^2=mc^2\Bigl(\gamma-\tfrac32+\tfrac{1}{2\gamma^2}\Bigr)\to\infty\quad(\gamma\to\infty),$$ and the relative deviation from the Newtonian value equals $\frac{(2\gamma+1)(\gamma-1)}{\gamma+1}\to\infty$; the Archimedean property of $\mathbb R$ ([[thm-of-archimedean]]) turns either display into the explicit violation of a prescribed $B$ at a sufficiently large integer $\gamma$. Consequently the constants $K(z_0)$ and $\tfrac12+K(z_0)z_0$ of [[pthm-sr-newtonian-p-e-correspondence]] necessarily depend on the speed bound $z_0$, no bound of that form is uniform on the whole domain $|w|<c$, and $E_n(P)=mc^2\gamma$ and $|q_n(P)|=mc\sqrt{\gamma^2-1}$ are unbounded as $|w|\to c$ although $\tfrac12m|w|^2\le\tfrac12mc^2$ there. The mechanism is explicit: the remainder is $R_E=mc^2R(z)$ with $|R(z)|\le K(z_0)z^2$, and $K(z_0)=\tfrac38(1-z_0)^{-5/2}$ diverges as $z_0\uparrow1$ ([[lem-sr-uniform-low-speed-expansion-of-observer-quantities]]).

### (ii) The massless case is excluded, not a limit

An ideal massless particle of [[post-sr-ideal-massless-particle-momentum]] carries a nonzero future null four-momentum $P$ and, by [[lem-sr-energy-momentum-observer-identities]]\,(a)(i), satisfies $E_n(P)=c|q_n(P)|>0$ exactly; it has no four-velocity, proper time or relative velocity, and no rest mass, rest energy or kinetic energy is assigned to it. The hypotheses $m>0$ and $z\le z_0<1$ of [[pthm-sr-newtonian-p-e-correspondence]] exclude it, and no substitution $w$ with $|w|=c$ is available because $\gamma_w=(1-|w|^2/c^2)^{-1/2}$ is undefined there. The bridge therefore concerns massive particles only, and it neither derives nor constrains the ideal massless case or light.

### (iii) Bounded chart regions, not a limit of frameworks

For fixed $v\in S$, the uniform chart statement [[lem-sr-uniform-galilean-limit-of-boost-charts]] holds on each bounded region $D_{T,R}$ as $C\to\infty$ (its clause (c)). For $v\ne0$ it fails on the whole chart domain $\mathbb R\times S$ (its clause (d)); for $v=0$, $\Phi_{0,C}=G_0=\mathrm{id}$ for every $C>0$, so convergence is uniform on the whole chart domain. The nonzero-velocity failure does not assert failure on every unbounded subset; the correspondence is a conditional statement about the adopted model in a bounded low-speed domain, and it is neither an equivalence between the relativistic and Newtonian frameworks, nor a physical process in which the constant $c$ varies, nor empirical evidence for either framework. The Newtonian comparison quantities [[def-sr-newtonian-comparison-quantities]] are comparison expressions built from a named frame and the mass parameter, not the derived quantities of a separate theory; the correspondence theorem's clause (e) records the same scope restriction on the pair.
