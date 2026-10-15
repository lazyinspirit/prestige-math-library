---
id: pthm-td-collision-h-theorem
kind: physics-theorem
title: Conditional entropy production in the periodic Boltzmann model
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 3
physical_scope: Conditional kinetic-entropy production for a positive periodic solution satisfying the stated regularity, entropy and transport integrability, spatial collision-production, and pointwise weak-identity hypotheses; no many-particle derivation or Maxwellian equality characterization is asserted.
deps:
  - def-td-regular-elastic-collision-model
  - def-td-si-quantities
  - post-td-boltzmann-molecular-chaos-model
  - thm-tdmath-regular-collision-entropy
dependency_roles:
  def-td-regular-elastic-collision-model: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  post-td-boltzmann-molecular-chaos-model: physical-assumption
  thm-tdmath-regular-collision-entropy: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §8.10
      url: https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf
      locator: Complete 607-page lecture notes read; printed pp. 529–534, collision term, incoming versus outgoing factorization, and H theorem.
    - title: "Konstantin Likharev, Essential Graduate Physics: Statistical Mechanics, Chapter 6"
      url: https://batch.libretexts.org/print/Letter/Finished/phys-32579/Full.pdf
      locator: Complete 224-page current-edition PDF read; §§6.1–6.4, Boltzmann collision model and entropy inequality.
    - title: MIT OpenCourseWare, 8.333 Statistical Mechanics I, Lecture 9
      url: https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/ce250b44390106351cb97aafb0060ca7_MIT8_333F13_Lec9.pdf
      locator: Complete 9-page lecture read; pp. 3–4, pre-collision factorization and reversal qualification.
    - title: R. Fitzpatrick, Plasma Physics, Boltzmann H-Theorem
      url: https://farside.ph.utexas.edu/teaching/plasma/lectures1/node40.html
      locator: Complete author-hosted HTML section read; equations (3.123)–(3.144), collision-production sign and equality discussion.
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Let $\Omega_{\rm per}=\prod_{i=1}^3(0,L_i)$ with opposite faces identified, and let $I\subseteq\mathbb R$ be an open time interval. Assume the current conditional mathematical result [[thm-tdmath-regular-collision-entropy]] at its exact draft interface [L1] below. Let $f:\Omega_{\rm per}\times\mathbb R^3\times I\to(0,\infty)$ satisfy the periodic Boltzmann postulate [[post-td-boltzmann-molecular-chaos-model]] and the regularity, integrability, and domination hypotheses in [A2]–[A3]. For the all-time conclusion below, require the kinetic equation $\partial_t f+v\cdot\nabla_x f=Q_\nu(f)$ to hold at every $(x,v,t)$ for the chosen collision representative, in addition to the postulate's product-almost-everywhere equation. Fix a positive constant reference density $f_{\rm ref}$ with the same units as $f$, and define the kinetic entropy
$$S_{\rm kin}(t)=-k_B\int_{\Omega_{\rm per}}\int_{\mathbb R^3}f(x,v,t)\log\!\left(\frac{f(x,v,t)}{f_{\rm ref}}\right)\,d^3v\,d^3x.$$
Then
$$\frac{dS_{\rm kin}}{dt}=\frac{k_B}{4}\int_{\Omega_{\rm per}}\int_{Q_{\rm el}}(A-B)\log\!\left(\frac AB\right)\,d\nu\,d^3x\ge0,$$
where $A=f(x,v,t)f(x,w,t)$ and $B=f(x,v',t)f(x,w',t)$; $\log(A/B)$ is dimensionless because $A$ and $B$ have the same units. Equality holds exactly when $A=B$ for $\nu$-almost every collision at almost every spatial point. This is a conditional deduction inside the adopted incoming-molecular-chaos kinetic model. The cited mathematical carrier is currently draft and has not received independent proof acceptance; no microscopic derivation, experimental claim, or Maxwellian characterization is included.

## Facts & Assumptions

**Given:** The positive regular periodic solution and collision data described in [A1]–[A3], Boltzmann's constant $k_B>0$, and the exact current mathematical supplier interface [L1].

[A1] [[post-td-boltzmann-molecular-chaos-model]]: on the periodic three-torus, the adopted one-sided incoming-pair closure gives an admissible locally integrable collision term $Q_\nu(f)$, the kinetic equation $\partial_t f+v\cdot\nabla_xf=Q_\nu(f)$ almost everywhere, and the weak collision identity with factor $1/4$ for absolutely convergent test functions; it is a model postulate, not a many-particle theorem.

[A2] The solution satisfies $f>0$, is $C^1$ in $(x,t)$ and $C^2$ in $v$, and is periodic in each spatial coordinate. The reference $f_{\rm ref}>0$ is constant in $x,v,t$, so $\ell=\log(f/f_{\rm ref})$ and $\log(A/B)$ are dimensionless.

[A3] For each $t\in I$, $f$, $f|v|^2$, and $f|\ell|$ are integrable over $\Omega_{\rm per}\times\mathbb R^3$. For every compact interval $I_0\subset I$, assume a common $G_{I_0}\in L^1(\Omega_{\rm per}\times\mathbb R^3)$ bounds $|(1+\ell)\partial_t f|$ almost everywhere for every $t\in I_0$. Also assume $(1+|\ell|)|v\cdot\nabla_xf|\in L^1(\Omega_{\rm per}\times\mathbb R^3)$ for each $t\in I$. For every $t\in I$, the map
$$x\longmapsto\int_{Q_{\rm el}}|(A-B)\log(A/B)|\,d\nu$$
is measurable and belongs to $L^1(\Omega_{\rm per})$. In addition to the almost-everywhere weak identity in [A1], assume that the identities for tests $1$ and $\ell(x,\cdot,t)$ are absolutely convergent and hold at every $(x,t)$, as required by the exact current interface [L1]. The collision measure is $\sigma$-finite. Also require $\partial_t f+v\cdot\nabla_xf=Q_\nu(f)$ at every $(x,v,t)$ for this representative, so substitution at each fixed time is licensed.

[F1] [[def-td-regular-elastic-collision-model]]: in dimension three, $Q_{\rm el}$ consists of collisions conserving pair momentum and squared speed; $\nu$ is a nonnegative $\sigma$-finite Borel measure invariant under the two particle exchanges and incoming/outgoing exchange. The $\sigma$-finiteness here is an explicit physical restriction that makes the spatial/collision product integrals well-defined.

[F2] [[def-td-si-quantities]]: $k_B$ is the positive Boltzmann constant with SI units $\mathrm{J\,K^{-1}}$.

[L1] [[thm-tdmath-regular-collision-entropy]]: the current draft supplier assumes a positive $C^1$-in-space-and-time, $C^2$-in-velocity density on a periodic rectangle; finite moments and entropy; a compact-time $L^1$ majorant for $(1+\ell)\partial_t f$; transport integrability at each time; an $L^1$ spatial collision-production map; and absolutely convergent weak identities for tests $1$ and $\ell$ at every point. It states
$$\frac{d}{dt}H[f](t)=-\frac14\int_{\Omega}\int_{Q_{\rm el}}(A-B)\log(A/B)\,d\nu\,dr\le0,$$
with equality exactly when $A=B$ for $\nu$-almost every collision at almost every spatial point. The carrier remains draft without independent proof acceptance; this item uses only that inequality and equality condition, not the supplier's additional Maxwellian branch.

## Proof


**Given:** [A1]–[A3], [F1]–[F2], and [L1] with its current stated proof status.

1.1 Set $H(t)=\int_{\Omega_{\rm per}}\int_{\mathbb R^3}f\ell\,d^3v\,d^3x$. The hypotheses match [L1]: the spatial dimension is $d=3$, the opposite-face identification is periodic, the density is positive with the required regularity and moments, [A3] supplies the compact-time derivative majorant, transport integrability, pointwise weak identities, and spatial collision-production integrability, and [A3] supplies the kinetic equation at every time for the chosen representative. The collision measure is symmetric by [F1] and $\sigma$-finite by [A3]. Thus [L1] gives
$$H'(t)=-\frac14\int_{\Omega_{\rm per}}\int_{Q_{\rm el}}(A-B)\log\!\left(\frac AB\right)\,d\nu\,d^3x\le0,$$
and its equality condition applies at each time where the derivative and production integral are defined. [A1, A2, A3, F1, L1]

2.1 By definition $S_{\rm kin}=-k_BH$, and $k_B>0$ by [F2]. Multiplying the identity in step 1.1 by $-k_B$ reverses its sign and yields the displayed entropy-production formula with nonnegative right-hand side. Since the multiplier is strictly positive, $S'_{\rm kin}(t)=0$ holds exactly when the production integral vanishes; the equality characterization in [L1] gives $A=B$ for $\nu$-almost every collision at almost every spatial point. This remains a conditional model deduction and uses no outgoing-pair molecular-chaos assumption. [A1, F2, L1, step 1.1, algebra] ∎
