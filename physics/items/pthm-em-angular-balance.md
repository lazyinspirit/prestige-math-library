---
id: pthm-em-angular-balance
kind: physics-theorem
title: "Orbital field angular momentum and torque balance"
domain: physics
physical_scope: "The conditional orbital angular momentum balance of the classical vacuum electromagnetic field about the fixed origin of the laboratory chart: the local identity linking the time derivative of the orbital angular momentum density and the divergence of its flux tensor to the torque density, and its fixed-volume form with the boundary angular flux retained, deduced from the momentum balance of the same framework. The density is orbital only; no spin or intrinsic angular momentum of matter is defined or claimed, and no empirical claim is made."
status: published
origin: pipeline
dependency_level: 19
proof_strategy: direct
deps: [def-countable-choice, def-cross-product-in-r3, def-directional-and-partial-derivatives, def-em-vacuum-stress-momentum, lem-em-parameter-integrals, lem-em-quadratic-stress-identity, pthm-em-momentum-balance, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, thm-graphs-of-continuous-functions-have-content-zero, cor-integral-over-a-null-set-vanishes, def-em-fields, post-em-lorentz-coupling, post-em-vacuum-maxwell]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-em-vacuum-stress-momentum: formulation-prerequisite
  lem-em-parameter-integrals: mathematical-premise
  lem-em-quadratic-stress-identity: mathematical-premise
  pthm-em-momentum-balance: physical-result
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  thm-graphs-of-continuous-functions-have-content-zero: mathematical-premise
  cor-integral-over-a-null-set-vanishes: mathematical-premise
  def-em-fields: formulation-prerequisite
  post-em-lorentz-coupling: physical-assumption
  post-em-vacuum-maxwell: physical-assumption
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§8.2.4 printed pp. 358-360 (PDF pp. 374-376), eq. (8.34): orbital angular density, followed by the field/matter angular exchange example. This section does not give the flux tensor; that tensor and its balance are derived locally. Relevant passages independently read during Step 5a reader-32, 10 October 2026."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (cover dated Lent Term 2015, 236-page PDF)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§5.6.3 printed pp. 132-133 (PDF pp. 140-141), eq. (5.51) and its preceding calculation: angular density x cross P and cancellation of the symmetric stress contraction. Tong's stress equals our Pi; the sourced torque term is deduced locally from the matter-coupled momentum identity. Relevant passages independently read during Step 5a reader-32, 10 October 2026."
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§32 printed p. 79 (PDF p. 91), eqs. (32.8)-(32.9): angular momentum tensor and the symmetric-stress cancellation. The local sourced and fixed-volume orbital balances are proved here. Relevant passages independently read during Step 5a reader-32, 10 October 2026."
---

## Statement

Assume the hypotheses of [[pthm-em-momentum-balance]]: the smooth branch of
[[post-em-vacuum-maxwell]], clause (ii) of [[post-em-lorentz-coupling]], the
jointly $C^1$ fields of [[def-em-fields]], continuous sources, and the force
density $f=\rho E+J\times B$. Let $g$, $\sigma$, $\Pi=-\sigma$, the orbital
angular momentum density $\ell=x\times g$ and its flux $x\times\Pi$ be those
of [[def-em-vacuum-stress-momentum]] relative to the origin fixed there. Then:

(a) [Local identity] On $\Omega\times I$,

$$\partial_t\ell+\operatorname{div}(x\times\Pi)=-x\times f,$$

componentwise
$\partial_t\ell_i+\sum_{j=1}^{3}\partial_j(x\times\Pi)_{ij}=-(x\times f)_i$,
where $(\operatorname{div}(x\times\Pi))_i:=\sum_{j=1}^{3}\partial_j(x\times\Pi)_{ij}$
and $(x\times f)_i=\sum_{j,k=1}^{3}\epsilon_{ijk}x_jf_k$ with the Levi-Civita
symbol of [[def-em-vacuum-stress-momentum]], and $\partial_t$ is the partial
time derivative at fixed position
([[def-directional-and-partial-derivatives]]).

(b) [Fixed-volume identity] Under the domain, time-interval and
$\mathrm{AC}_\omega$ hypotheses of [[pthm-em-momentum-balance]](b), and with
$n$ the outward unit normal, for every $t\in(t_0,t_1)$ and each $i$,

$$\frac{d}{dt}\int_{\Omega'}\ell_i\,dx=-\oint_{\partial\Omega'}\Bigl(\sum_{j=1}^{3}(x\times\Pi)_{ij}n_j\Bigr)dS-\int_{\Omega'}(x\times f)_i\,dx,$$

the closed-surface integral being the finite face sum of the divergence
theorem used in that clause.

(c) [Scope] The identities depend on the origin fixed in
[[def-em-vacuum-stress-momentum]](e) through the explicit factor $x$; no
field-only conservation follows by dropping the boundary flux: (b) retains
both that flux and the integrated torque, which can cancel to give a zero
field-angular-momentum rate. Conservation of field-plus-matter angular
momentum requires explicit matter balances and their boundary fluxes. The hypotheses and exclusions of
[[pthm-em-momentum-balance]](c) are inherited. The density $\ell$ is orbital,
$\ell=x\times g$; no spin or intrinsic angular momentum of matter is defined
or claimed by this item. This is not an empirical claim.

## Facts & Assumptions

**Given:** The hypotheses of [[pthm-em-momentum-balance]]; the objects $g,\sigma,\Pi,\ell,x\times\Pi$ of [[def-em-vacuum-stress-momentum]]; and, in clause (b), the admissible volume $\Omega'$, the interval $(t_0,t_1)\subseteq I$ and $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] Under the stated hypotheses the local momentum identity $\partial_tg+\operatorname{div}\Pi=-f$ holds pointwise on $\Omega\times I$, with $g$ of class $C^1$, $\Pi$ of class $C^1$ and symmetric, and $f$ continuous ([[pthm-em-momentum-balance]]).

[F2] The objects of [[def-em-vacuum-stress-momentum]]: $g$, $\sigma$ and $\Pi=-\sigma$ are of class $C^1$; $\Pi$ is symmetric; the orbital angular momentum density is $\ell=x\times g$, componentwise $\ell_i=\sum_{j,k=1}^{3}\epsilon_{ijk}x_jg_k$, and its flux tensor is $(x\times\Pi)_{i\ell}=\sum_{j,k=1}^{3}\epsilon_{ijk}x_j\Pi_{k\ell}$; both depend on the fixed origin of the spatial chart. The cross product is that of [[def-cross-product-in-r3]], and the Levi-Civita symbol is defined in [[def-em-vacuum-stress-momentum]](d).

[F3] Angular local identity of [[lem-em-quadratic-stress-identity]]: for open $V\subseteq\mathbb R^3$ and open $I\subseteq\mathbb R$, let $\Pi:V\times I\to\mathbb R^{3\times3}$ have continuous entries and spatial first partial derivatives, with $\Pi_{kj}=\Pi_{jk}$. Let $g,f:V\times I\to\mathbb R^3$ be continuous, with $\partial_tg$ existing componentwise and $\partial_tg+\operatorname{div}\Pi=-f$. Then $\partial_t(x\times g)+\operatorname{div}(x\times\Pi)=-x\times f$ on $V\times I$.

[F4] Fixed-volume tools: for compact measurable $K$ with finite Lebesgue measure and $h,\partial_th$ continuous on a neighbourhood of $K\times[a,b]$, $t\mapsto\int_Kh\,d\lambda_n$ is differentiable on $(a,b)$ with derivative $\int_K\partial_th\,d\lambda_n$ ([[lem-em-parameter-integrals]]); if $\Omega$ carries the finite piecewise $C^1$ presentation and $F\in C^1(\overline\Omega;\mathbb R^n)$, then $\int_\Omega\operatorname{div}F=\sum_j\int_{S_j}F\cdot\nu_j\,dS$ with faces counted once off the edge set, under $\mathrm{AC}_\omega$ ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]]); and the boundary of such an $\Omega$ is Lebesgue-null by the graph-coordinate Fubini and rigid-change-of-variables argument in Proof step 4.1 of that divergence theorem, followed by finite subadditivity over its faces; the integral of a nonnegative measurable function over a null set vanishes ([[cor-integral-over-a-null-set-vanishes]]), so signed integrals over $\Omega$ and its closure agree.

## Proof

**Proof technique:** direct; apply the angular identity of the quadratic stress lemma to the momentum balance, and integrate the result over an admissible fixed volume with compact-parameter differentiation and the same divergence theorem.

1.1 Local identity: by [F1] the hypotheses of [F3] hold on $\Omega\times I$ with $V=\Omega$: $g$ and the symmetric $\Pi$ are jointly $C^1$, and $f$ is continuous. Applying [F3] gives $\partial_t(x\times g)+\operatorname{div}(x\times\Pi)=-x\times f$ there, which is clause (a) with $\ell=x\times g$ and the component conventions of [F2]. [given, F1, F2, F3, algebra]

1.2 Fixed-volume setup: let $\Omega'$, $t_0<t_1$ be as in clause (b), fix $t\in(t_0,t_1)$ and choose $a,b$ with $t_0<a<t<b<t_1$. The closure $\overline{\Omega'}$ is compact and contained in the open $\Omega$, and each $\ell_i$ together with $\partial_t\ell_i$ is continuous on a neighbourhood of $\overline{\Omega'}\times[a,b]$ by [F2] and [F3]; the boundary is Lebesgue-null by the finite piecewise $C^1$ presentation and [F4], so integrals over $\Omega'$ and over its closure agree, and [F4] makes $t\mapsto\int_{\Omega'}\ell_i(x,t)\,dx$ differentiable at $t$ with derivative $\int_{\Omega'}\partial_t\ell_i(x,t)\,dx$. [given, F2, F4, algebra]

2.1 Fixed-volume identity: by steps 1.2 and 1.1, $\frac{d}{dt}\int_{\Omega'}\ell_i\,dx=\int_{\Omega'}\partial_t\ell_i\,dx=-\int_{\Omega'}(x\times f)_i\,dx-\int_{\Omega'}(\operatorname{div}(x\times\Pi))_i\,dx$; the fixed-time vector field $x\mapsto((x\times\Pi)_{i1},(x\times\Pi)_{i2},(x\times\Pi)_{i3})(x,t)$ is $C^1$ on a neighbourhood of $\overline{\Omega'}$ by [F2], so the divergence theorem of [F4] gives $\int_{\Omega'}(\operatorname{div}(x\times\Pi))_i\,dx=\oint_{\partial\Omega'}\sum_j(x\times\Pi)_{ij}n_j\,dS$ as a finite face sum, which is clause (b) under the stated $\mathrm{AC}_\omega$. [step 1.1, step 1.2, F2, F4, algebra]

3.1 Clause (c): the identity depends on the fixed origin through the explicit coordinate factor in $\ell$ and $x\times\Pi$ (the shift law of [F2]); the boundary term is retained, and the hypotheses and exclusions of the momentum balance are inherited unchanged; no spinor or material intrinsic angular momentum enters the argument. [step 1.1, step 2.1, F1, F2] ∎

## Remarks

- **Why symmetry of $\Pi$ is the whole content.** Contracting the momentum balance with the position vector, the term produced by the derivative of $x$ is the antisymmetric contraction $\epsilon_{ijk}\Pi_{kj}$, which vanishes exactly because $\Pi$ is symmetric; the identity is therefore not a second dynamical law but a consequence of the momentum balance together with the symmetry recorded in the definition.
- **Origin dependence.** Under a shift of origin the left and right sides change in the same way, since $x\mapsto x+a$ adds $a\times(\partial_tg+\operatorname{div}\Pi)$ to the left-hand side and $-a\times f$ to the right and these are equal by the momentum balance; the displayed form nevertheless refers to the one fixed origin.
