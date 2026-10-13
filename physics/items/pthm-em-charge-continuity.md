---
id: pthm-em-charge-continuity
kind: physics-theorem
title: "Charge continuity as a compatibility condition of the vacuum Maxwell equations"
domain: physics
status: published
origin: pipeline
dependency_level: 16
deps: [post-em-vacuum-maxwell,
       post-em-distributional-vacuum-maxwell,
       def-em-fields,
       def-em-sources,
       def-em-si-conventions,
       def-em-lab-geometry,
       def-divergence-and-curl-of-a-c1-vector-field,
       def-directional-and-partial-derivatives,
       thm-the-divergence-of-a-curl-vanishes,
       thm-clairaut-schwarz-mixed-partials,
       thm-algebra-of-derivatives,
       def-distribution,
       def-distributional-derivative,
       def-test-function-space-d-of-an-open-set,
       def-regular-distribution-from-a-locally-integrable-function,
       thm-locally-integrable-functions-embed-in-distributions,
       thm-distributional-differentiation-is-continuous-and-commutes,
       def-countable-choice]
dependency_roles:
  post-em-vacuum-maxwell: physical-assumption
  post-em-distributional-vacuum-maxwell: physical-assumption
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-the-divergence-of-a-curl-vanishes: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  thm-distributional-differentiation-is-continuous-and-commutes: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The conditional compatibility statement that any field and source tuple satisfying the framework's vacuum Maxwell equations, in the smooth C2 branch or in the distributional branch including the separately adopted singular-source models, satisfies div J + partial_t rho = 0 pointwise or in the sense of distributions. It is a compatibility condition on sources, not a conservation law of matter, not an existence statement and not empirical evidence; it inherits the regularity and source hypotheses of the branch used."
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 7.3.3 printed pp. 326-328 (compatibility of the Maxwell equations with charge continuity, including the divergence-of-curl cancellation); read in the stamped scanned full text."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Section 4.2.1 printed p. 81 (the divergence of the amended Ampere equation combined with Gauss law gives charge continuity), with Section 1.1.1 printed p. 4 for the local conservation formulation. The distributional extension is proved locally."
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Section 29 printed pp. 71-72 (the continuity equation as a consequence of the field equations); read in the stamped full text."
proof_strategy: direct
---


## Statement

Let $U\cong I\times\Omega$ be the laboratory region of
[[def-em-lab-geometry]] with the constants and units of
[[def-em-si-conventions]], let $E,B$ be the fields of [[def-em-fields]] and
$\rho,J$ the source fields of [[def-em-sources]], with
$\varepsilon_0=(\mu_0c^2)^{-1}$.

(a) [Smooth branch] Let $E,B$ be jointly of class $C^2$ on $\Omega\times I$ and
$\rho,J$ of class $C^1$, and suppose the smooth branch of
[[post-em-vacuum-maxwell]] holds with these fields and sources, in particular
$\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$. Then the continuity equation

$$\partial_t\rho+\operatorname{div}J=0$$

holds pointwise on $\Omega\times I$, where $\operatorname{div}$ is the
divergence of [[def-divergence-and-curl-of-a-c1-vector-field]] and
$\partial_t$ the partial time derivative of
[[def-directional-and-partial-derivatives]].

(b) [Distributional branch] Let $E,B,\rho,J$ be distributions on
$\Omega\times I$ ([[def-distribution]], [[def-distributional-derivative]]); in
particular they may be locally integrable fields and sources identified with
their regular distributions
([[def-regular-distribution-from-a-locally-integrable-function]],
[[thm-locally-integrable-functions-embed-in-distributions]]). Suppose the four
equations

$$\operatorname{div}E=\rho/\varepsilon_0,\qquad \operatorname{div}B=0,\qquad \operatorname{curl}E=-\partial_tB,\qquad \operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$$

hold in $\mathcal D'(\Omega\times I)$ with distributional derivatives. This
includes the original locally integrable weak branch of
[[post-em-vacuum-maxwell]] and the separately adopted declared singular-source
models of [[post-em-distributional-vacuum-maxwell]], when their source and
field hypotheses hold. More generally the formal compatibility implication
applies to every distributional source pair for which the four identities
hold, without asserting physical adoption of arbitrary distributions. Then
$\partial_t\rho+\operatorname{div}J=0$ in $\mathcal D'(\Omega\times I)$.

The conclusion is a compatibility condition: it does not assert that every
source pair is compatible with the Maxwell equations, and by itself it proves
no conservation of physical charge. The derivative compatibility argument is
choice-free. An application to the declared singular-source model retains the
Countable Choice assumption of its defining source and surface-measure
formulation ([[def-countable-choice]]).

## Facts & Assumptions

**Given:** The laboratory region, fields, sources and constants of the Statement; in clause (a) the joint $C^2$ and $C^1$ regularity and the smooth branch of [[post-em-vacuum-maxwell]]; in clause (b) the four distributional identities.

[F1] The smooth branch of [[post-em-vacuum-maxwell]] holds pointwise, in particular $\operatorname{div}E=\rho/\varepsilon_0$ and $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$, with $\varepsilon_0=(\mu_0c^2)^{-1}$ and $\mu_0>0$ ([[post-em-vacuum-maxwell]], [[def-em-si-conventions]]).

[F2] The separately adopted distributional postulate requires the four identities in $\mathcal D'(U)$ for the declared singular-source models ([[post-em-distributional-vacuum-maxwell]]).

[F3] For a $C^2$ vector field on an open set the divergence of its curl vanishes pointwise ([[thm-the-divergence-of-a-curl-vanishes]]), and mixed partial derivatives commute ([[thm-clairaut-schwarz-mixed-partials]]); derivatives of sums and scalar multiples are computed termwise ([[thm-algebra-of-derivatives]], [[def-divergence-and-curl-of-a-c1-vector-field]], [[def-directional-and-partial-derivatives]]).

[F4] Distributional derivatives are defined by $\langle\partial_\mu T,\psi\rangle=-\langle T,\partial_\mu\psi\rangle$ on tests $\psi\in C_c^\infty(U)$, are linear in $T$ and commute with one another ([[def-distribution]], [[def-distributional-derivative]], [[def-test-function-space-d-of-an-open-set]], [[thm-distributional-differentiation-is-continuous-and-commutes]]).

[F5] For $f\in L^1_{\mathrm{loc}}(\Omega\times I)$, its regular functional is $\langle u_f,\psi\rangle=\int_{\Omega\times I}f\psi$, well-defined modulo almost-everywhere equality. For tests supported in a compact $K\subseteq\Omega\times I$, $|\langle u_f,\psi\rangle|\le(\int_K|f|)\sup_K|\psi|$; this choice-free order-zero estimate makes $u_f$ a distribution, componentwise for vector fields ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]], proof step 1.1). The cited theorem's injectivity conclusion assumes Countable Choice and is not used here.

## Proof

1.1 In the smooth branch, the identity $\operatorname{div}(\operatorname{curl}B)=0$ holds pointwise. Taking the divergence of the Ampere equation and using linearity of the coordinate derivatives gives $0=\operatorname{div}(\operatorname{curl}B)=\mu_0\operatorname{div}J+c^{-2}\operatorname{div}(\partial_tE)$, and the mixed partials commute, so $\operatorname{div}(\partial_tE)=\partial_t(\operatorname{div}E)$; the Gauss law gives $\operatorname{div}E=\rho/\varepsilon_0$ and, $\rho$ being $C^1$, $\partial_t(\operatorname{div}E)=\varepsilon_0^{-1}\partial_t\rho$. Substituting gives $0=\mu_0\operatorname{div}J+c^{-2}\varepsilon_0^{-1}\partial_t\rho=\mu_0(\operatorname{div}J+\partial_t\rho)$, because $c^2\varepsilon_0\mu_0=1$ by the definition of $\varepsilon_0$, and division by $\mu_0>0$ gives $\partial_t\rho+\operatorname{div}J=0$ pointwise on $\Omega\times I$. [F1, F3, given, algebra]

1.2 In the distributional branch, fix $\psi\in C_c^\infty(\Omega\times I)$. The distributional curl is built from the components $\partial_jB_k-\partial_kB_j$, so $\langle\operatorname{div}(\operatorname{curl}B),\psi\rangle=\sum_{i,j,k}\varepsilon_{ijk}\langle\partial_i\partial_jB_k,\psi\rangle$, where $i,j,k$ range over $1,2,3$ and $\varepsilon_{ijk}$ is $+1$ for cyclic permutations of $(1,2,3)$, $-1$ for the other permutations and $0$ for repeated indices; the distributional derivatives commute and $\varepsilon_{ijk}$ is antisymmetric, so exchanging the summation indices $i$ and $j$ presents this number as its own negative, and hence it is zero. The Ampere identity in $\mathcal D'$, linearity of the pairing and commutativity with $\partial_t$ give $0=\mu_0\langle\operatorname{div}J,\psi\rangle+c^{-2}\langle\partial_t\operatorname{div}E,\psi\rangle$; the Gauss identity in $\mathcal D'$ reads $\operatorname{div}E=\rho/\varepsilon_0$, so $\partial_t\operatorname{div}E=\varepsilon_0^{-1}\partial_t\rho$ as distributions, and substitution with $c^2\varepsilon_0\mu_0=1$ and $\mu_0>0$ gives $\langle\partial_t\rho+\operatorname{div}J,\psi\rangle=0$. As $\psi$ was arbitrary, $\partial_t\rho+\operatorname{div}J=0$ in $\mathcal D'(\Omega\times I)$; every ingredient is either a distributional identity or a constant multiple, so no choice principle is used. [F4, given, algebra]

2.1 For locally integrable fields and sources, apply the regular-distribution construction of [F5] componentwise and then step 1.2; injectivity of that construction is unnecessary. The physical adoption of the singular-source models remains the separate postulate [F2], and the Countable Choice assumption is carried only by their defining source and surface-measure formulation. [F2, F5, step 1.2, given] ∎

## Source notes



Continuity as a compatibility condition of the Maxwell equations, obtained by the divergence-of-curl cancellation, is the standard textbook derivation cited in the frontmatter. The distributional form uses the library's own distribution interface; the singularity of point and sheet sources is handled only through the separate adopted postulate, never through an undefined product of distributions.
