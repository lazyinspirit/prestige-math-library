---
id: pthm-em-linear-superposition
kind: physics-theorem
title: "Superposition for prescribed Maxwell fields and sources"
status: draft
origin: session
domain: physics
deps: [def-distribution, def-distributional-derivative, def-divergence-and-curl-of-a-c1-vector-field, def-directional-and-partial-derivatives, def-em-fields, def-em-lab-geometry, def-em-si-conventions, def-em-sources, post-em-vacuum-maxwell, thm-algebra-of-derivatives, thm-componentwise-limits-and-continuity, thm-linearity-of-the-lebesgue-integral-on-l-one, def-regular-distribution-from-a-locally-integrable-function]
dependency_roles:
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  post-em-vacuum-maxwell: physical-assumption
  thm-algebra-of-derivatives: mathematical-premise
  thm-componentwise-limits-and-continuity: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§1.2.1 printed pp. 5-6 (the Maxwell equations are linear in the fields and sources; the notes use linearity throughout, e.g. in the superposition of electrostatic fields in Chapter 2), read in the stamped 236-page PDF"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§7.3.3 printed pp. 326-327 (the Maxwell equations as linear equations in E, B and the sources; the superposition discussion in §2.1.4 printed pp. 68-70 for the electrostatic case), read in the stamped scanned full text"
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§26 and §30 printed pp. 66-75 (the field equations are linear in the potentials, fields and current, so solutions add with their sources), read in the stamped 387-page full text"
physical_scope: "Superposition of finitely many prescribed Maxwell field-source pairs on a common laboratory region, within the adopted vacuum Maxwell postulate, in either its smooth or its weak branch. The theorem excludes nonlinear constitutive laws and makes no convergence claim for infinite superpositions; it is a conditional deduction and not an empirical claim, and it inherits only the postulate's physical assumptions."
---

## Statement

Assume the vacuum Maxwell postulate [[post-em-vacuum-maxwell]] on the laboratory
region $U\cong I\times\Omega$ of [[def-em-lab-geometry]] with the fields of
[[def-em-fields]] and the sources of [[def-em-sources]], and fix the constants
$\mu_0>0$, $c>0$, $\varepsilon_0=(\mu_0c^2)^{-1}$ of
[[def-em-si-conventions]]. Let $n\ge1$, let
$(E_1,B_1,\rho_1,J_1),\dots,(E_n,B_n,\rho_n,J_n)$ be $n$ field-source pairs
each satisfying one and the same branch of the postulate on the same region
(all in the smooth branch, or all in the weak branch), and let
$a_1,\dots,a_n\in\mathbb R$. Put $E:=\sum_{j=1}^na_jE_j$,
$B:=\sum_{j=1}^na_jB_j$, $\rho:=\sum_{j=1}^na_j\rho_j$ and
$J:=\sum_{j=1}^na_jJ_j$. Then:

(a) $(E,B,\rho,J)$ satisfies the same branch of the postulate on the same
region with the same constants: pointwise in the smooth branch and in the sense
of the pairings of clause (b) of [[post-em-vacuum-maxwell]] in the weak branch.

(b) Nothing beyond this linearity is asserted: the result does not apply to a
source whose density depends nonlinearly on the fields (a nonlinear
constitutive law), and no convergence statement is made for infinite series or
integrals of solutions or for infinite linear combinations.

(c) The theorem is conditional on the adopted postulate and is not an empirical
claim about nature.

## Facts & Assumptions

**Given:** the postulate [[post-em-vacuum-maxwell]] on
$U\cong I\times\Omega$; an integer $n\ge1$; field-source pairs
$(E_j,B_j,\rho_j,J_j)$, $j=1,\dots,n$, each satisfying one and the same branch
of the postulate on $U$; coefficients $a_1,\dots,a_n\in\mathbb R$; and the
combinations $E,B,\rho,J$ of the statement.

[F1] In the smooth branch the four equations
$\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$,
$\operatorname{curl}E=-\partial_tB$ and
$\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$ hold pointwise for jointly
$C^1$ fields with the additional derivatives required by each equation, and
continuous sources. ([[post-em-vacuum-maxwell]])

[F2] In the weak branch, for locally integrable fields and sources the four
pairings $\langle\operatorname{div}E-\rho/\varepsilon_0,\psi\rangle$,
$\langle\operatorname{div}B,\psi\rangle$,
$\langle\operatorname{curl}E+\partial_tB,\psi\rangle$ and
$\langle\operatorname{curl}B-\mu_0J-c^{-2}\partial_tE,\psi\rangle$ vanish for
every $\psi\in C_c^\infty(I\times\Omega)$, all derivatives being
distributional. ([[post-em-vacuum-maxwell]])

[F3] The divergence is the sum of the three coordinate partial derivatives of
the components, and each component of the curl is the difference of two such
partial derivatives; only first partial derivatives occur.
([[def-divergence-and-curl-of-a-c1-vector-field]])

[F4] The partial derivative $\partial_\mu F(a)$ is the derivative at $0$ of
the line map $t\mapsto F(a+te_\mu)$.
([[def-directional-and-partial-derivatives]])

[F5] Derivatives of sums and scalar multiples in one variable are the sums and
scalar multiples of the derivatives.
([[thm-algebra-of-derivatives]])

[F6] For a metric space $X$ and $A\subseteq X$, sums $f+g$ and scalar multiples
$\lambda f$ of maps $A\to\mathbb R^m$ continuous at a point are continuous at
that point; for $m=1$ this yields continuity of finite sums of continuous real
functions. ([[thm-componentwise-limits-and-continuity]])

[F7] For a measure space, $L^1$ is a vector space, so a finite linear
combination of $L^1$ functions is $L^1$; applied on each compact subset of
$I\times\Omega$ this gives local integrability of finite combinations of
locally integrable functions. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[F8] The regular functional $u_f(\varphi)=\int f\varphi$ is complex-linear in
$f$ and depends only on the almost-everywhere class of $f$.
([[def-regular-distribution-from-a-locally-integrable-function]])

[F9] The distribution pairing is bilinear, and the distributional derivative
is defined by
$\langle\partial^\alpha u,\varphi\rangle=(-1)^{|\alpha|}\langle u,\partial^\alpha\varphi\rangle$,
so it is linear in $u$. ([[def-distribution]], [[def-distributional-derivative]])

## Proof

**Proof technique:** direct; the smooth branch and the weak branch are computed separately.

1.1 Assume first that all pairs lie in the smooth branch. For jointly $C^1$ maps $F_1,\dots,F_n$ from the open set $\Omega\times I$ to $\mathbb R^q$ and scalars $a_1,\dots,a_n$, the combination $F:=\sum_ja_jF_j$ is jointly $C^1$ and $\partial_\mu F=\sum_ja_j\partial_\mu F_j$ for every coordinate index $\mu$: componentwise, at a point $a$ the line map $t\mapsto F^i(a+te_\mu)=\sum_ja_jF^i_j(a+te_\mu)$ is a finite sum of one-variable functions differentiable at $0$, so its derivative at $0$ exists and equals the combination $\sum_ja_j\partial_\mu F^i_j(a)$ of derivatives by [F5] through the line-map definition [F4], and each partial $\partial_\mu F^i=\sum_ja_j\partial_\mu F^i_j$ is continuous by the finite-sum clause [F6]; Hence $E$ and $B$ are jointly $C^1$ (and every additional derivative required by the branch combines by the same argument), while $\rho$ and $J$ are continuous by [F6]; thus all four combinations meet the regularity hypotheses of the smooth branch without assuming differentiability of the continuous sources. [F4, F5, F6]

1.2 Assume instead that all pairs lie in the weak branch. For locally integrable scalar fields $f_1,\dots,f_n$ on $I\times\Omega$ the combination $f:=\sum_ja_jf_j$ is locally integrable: on each compact $K\subseteq I\times\Omega$ the restrictions of the $f_j$ are $L^1$ functions on $K$, so their finite linear combination is $L^1$ on $K$ by [F7] and $\int_K|f|<\infty$. By the linearity in $f$ of the regular functional [F8] one has $u_f=\sum_ja_ju_{f_j}$, and by the defining formula and the bilinearity of the pairing [F9] the distributional derivatives satisfy $\partial^\alpha u_f=\sum_ja_j\partial^\alpha u_{f_j}$, so that $\operatorname{div}$, $\operatorname{curl}$ and $\partial_t$ of the combination are the corresponding combinations of the summands' distributional derivatives; componentwise the same holds for the vector fields $E_j$, $B_j$, $J_j$ and the scalar fields $\rho_j$. [F7, F8, F9]

2.1 The operators $\operatorname{div}$ and $\operatorname{curl}$ are linear on jointly $C^1$ vector fields: by the component formulas [F3] together with step 1.1, $\operatorname{div}(\sum_ja_jF_j)=\sum_i\partial_i(\sum_ja_jF^i_j)=\sum_ja_j\sum_i\partial_iF^i_j=\sum_ja_j\operatorname{div}F_j$, and the same finite rearrangement applied to the two-term difference in each curl component gives $\operatorname{curl}(\sum_ja_jF_j)=\sum_ja_j\operatorname{curl}F_j$; the same argument gives $\partial_t(\sum_ja_jF_j)=\sum_ja_j\partial_tF_j$. [step 1.1, F3]

2.2 In the weak branch, for each $\psi\in C_c^\infty(I\times\Omega)$, step 1.2 expands every pairing of the combination into the finite sum of the corresponding pairings of the summands, for instance $\langle\operatorname{div}E-\rho/\varepsilon_0,\psi\rangle=\sum_ja_j\langle\operatorname{div}E_j-\rho_j/\varepsilon_0,\psi\rangle$, and likewise for $\langle\operatorname{div}B,\psi\rangle$, $\langle\operatorname{curl}E+\partial_tB,\psi\rangle$ and $\langle\operatorname{curl}B-\mu_0J-c^{-2}\partial_tE,\psi\rangle$; since each summand pairing vanishes by [F2], all four pairings of the combination vanish, so the combination satisfies the branch in the distributional sense, which is clause (a) in that branch. [step 1.2, F2]

3.1 In the smooth branch, applying step 2.1 to the combinations $E=\sum_ja_jE_j$, $B=\sum_ja_jB_j$, $\rho=\sum_ja_j\rho_j$ and $J=\sum_ja_jJ_j$, and using [F1] for each summand, gives $\operatorname{div}E=\sum_ja_j\rho_j/\varepsilon_0=\rho/\varepsilon_0$, $\operatorname{div}B=\sum_ja_j\cdot0=0$, $\operatorname{curl}E=-\sum_ja_j\partial_tB_j=-\partial_tB$ and $\operatorname{curl}B=\sum_ja_j(\mu_0J_j+c^{-2}\partial_tE_j)=\mu_0J+c^{-2}\partial_tE$, while step 1.1 supplies the regularity hypotheses; thus the combination satisfies the branch pointwise, which is clause (a) in that branch. [step 2.1, F1]

4.1 The two branches are exactly those the hypothesis permits, so clause (a) holds in every case; clause (b) records that only the finite linearity actually computed is asserted, with no nonlinear constitutive law and no infinite superposition, and clause (c) records that the result is a conditional consequence of the adopted postulate, which completes the proof. [step 3.1, step 2.2] ∎
