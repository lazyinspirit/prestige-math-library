---
id: pthm-em-electrostatic-work
kind: physics-theorem
title: Work of the electrostatic force equals charge times the potential drop and is path independent
domain: physics
physical_scope: "The work done by the electric force of a prescribed static external field on a test charge of constant parameter $q$ carried along a prescribed piecewise $C^1$ path in a star-shaped pure electrostatic region: the work equals $q$ times the potential drop, depends only on the endpoints, vanishes on closed paths and is unchanged by the additive constant of the potential. No equation of motion, radiative loss, work on sources or empirical claim is included."
status: draft
origin: pipeline
proof_strategy: direct
deps: ["pthm-em-electrostatic-potential", "post-em-lorentz-coupling", "def-em-electrostatic-regime", "def-em-fields", "def-em-sources", "def-em-si-conventions", "def-em-lab-geometry", "thm-gradient-theorem-for-line-integrals", "def-scalar-and-vector-line-integrals-along-piecewise-c1-paths", "cor-potentials-differ-by-a-componentwise-constant", "def-ck-euclidean-maps-and-diffeomorphisms", "def-interval", "def-directional-and-partial-derivatives", "def-euclidean-inner-product", "thm-algebra-of-derivatives", "def-star-shaped-open-subset-of-rn", "def-em-electromagnetic-tensor", "lem-sr-four-force-and-work-energy-identities"]
dependency_roles:
  lem-sr-four-force-and-work-energy-identities: mathematical-premise
  def-em-electromagnetic-tensor: formulation-prerequisite
  pthm-em-electrostatic-potential: physical-result
  post-em-lorentz-coupling: physical-assumption
  def-em-electrostatic-regime: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  thm-gradient-theorem-for-line-integrals: mathematical-premise
  def-scalar-and-vector-line-integrals-along-piecewise-c1-paths: mathematical-premise
  cor-potentials-differ-by-a-componentwise-constant: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-interval: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-star-shaped-open-subset-of-rn: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: Section 2.4.1 printed pp. 90-92 (work to move a charge, the potential difference, path independence and the definition of potential energy). Read in the stamped scanned full text, OCR cross-checked.
    - title: David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: Section 2.2 printed pp. 16-17 (conservative static fields and the potential). Read in the stamped full text.
    - title: L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition (Pergamon 1971, 387 pp.; full text)
      url: http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf
      locator: Section 36 printed pp. 88-89 (static fields as gradients of the potential). Read in the stamped full text.
    - title: Weng Cho Chew, Lectures on Electromagnetic Field Theory (Purdue University, Fall 2020, 497 pp.)
      url: https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf
      locator: Sections 1.3.1-1.3.2 printed pp. 8-9 (Coulomb force and work against the field). Read in the stamped full text.
---

## Statement

Let $\Omega\subseteq\mathbb R^3$ be open, star-shaped ([[def-star-shaped-open-subset-of-rn]]) and the spatial region of a pure electrostatic regime as in [[pthm-em-electrostatic-potential]], with fields of [[def-em-fields]], charge parameters of [[def-em-sources]] and the units of [[def-em-si-conventions]]; thus $E:\Omega\to\mathbb R^3$ is $C^1$, $B=0$ and $J=0$ ([[def-em-electrostatic-regime]]), and by [[pthm-em-electrostatic-potential]] there is $\varphi\in C^2(\Omega)$ with $E=-\nabla\varphi$.
Let $q\in\mathbb R$ (coulombs) be the charge of a test particle and let $\gamma:[t_0,t_1]\to\Omega$ be a piecewise $C^1$ path ([[def-interval]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).
Define the **work of the electric force** along the prescribed path by the vector line integral
$$W(\gamma):=\int_\gamma qE\cdot d\mathbf r$$
of [[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]; $qE$ is the laboratory three-force of [[post-em-lorentz-coupling]](i) when $B=0$, using the tensor components of [[def-em-electromagnetic-tensor]](a) and the four-force/three-force relation of [[lem-sr-four-force-and-work-energy-identities]](c), as computed in [F5] below.
Then:

(a) [Value] $W(\gamma)=q\,(\varphi(\gamma(t_0))-\varphi(\gamma(t_1)))$;

(b) [Path independence] if $\gamma_1,\gamma_2$ are piecewise $C^1$ paths in $\Omega$ with the same initial and the same terminal point, then $W(\gamma_1)=W(\gamma_2)$; in particular $W(\gamma)=0$ for every closed piecewise $C^1$ path;

(c) [Potential energy] with the potential energy $U:=q\varphi$ (joules) the identity reads $W(\gamma)=-(U(\gamma(t_1))-U(\gamma(t_0)))$;

(d) [Gauge invariance of the work] if $\varphi' \in C^2(\Omega)$ is any other potential with $\nabla\varphi'=-E$, then $\varphi'=\varphi+c$ with a constant $c\in\mathbb R$ and the formula of (a) is unchanged ([[cor-potentials-differ-by-a-componentwise-constant]]).

The statement is a line-integral identity for a prescribed path in a prescribed static external field. It asserts no equation of motion, no radiation, no work done on the sources and no claim that the test particle actually follows $\gamma$; the interpretation of $W$ as work done by the adopted external coupling is the physical reading supplied by [[post-em-lorentz-coupling]], not a dynamical theorem.

## Facts & Assumptions

**Given:** A star-shaped open $\Omega\subseteq\mathbb R^3$ carrying a pure electrostatic regime with $C^1$ field $E$ and $B=J=0$, a charge parameter $q\in\mathbb R$, and a piecewise $C^1$ path $\gamma:[t_0,t_1]\to\Omega$.

[F1] The pure electrostatic regime has $B=0$, $J=0$, time-independent fields and the reduced equations; on a star-shaped region the potential theorem provides $\varphi\in C^2(\Omega)$ with $\nabla\varphi=-E$ ([[def-em-electrostatic-regime]], [[pthm-em-electrostatic-potential]], [[def-em-fields]], [[def-em-sources]], [[def-em-si-conventions]], [[def-em-lab-geometry]], [[def-star-shaped-open-subset-of-rn]]).

[F2] The vector line integral is $\int_\gamma F\cdot d\mathbf r=\sum_i\int_{t_i}^{t_{i+1}}\langle F(\gamma(t)),v_i(t)\rangle\,dt$ over an admissible partition, the inner product is the Euclidean one and the integral is linear in the field ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]], [[def-euclidean-inner-product]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-interval]], [[thm-algebra-of-derivatives]]).

[F3] The gradient theorem evaluates the line integral of a gradient of a $C^1$ function along a piecewise $C^1$ path as the endpoint increment ([[thm-gradient-theorem-for-line-integrals]]).

[F4] Two $C^1$ potentials with the same gradient differ by a constant on each piecewise-$C^1$ path component, and a star-shaped set has a single such component through its centre ([[cor-potentials-differ-by-a-componentwise-constant]], [[def-star-shaped-open-subset-of-rn]], [[def-directional-and-partial-derivatives]]).

[F5] For a massive test worldline in the prescribed external field, [[post-em-lorentz-coupling]](i) gives the four-force $K^\mu=qF^{\mu\nu}U_\nu$. Write $w$ for its laboratory coordinate velocity, $|w|<c$, and $\gamma:=(1-|w|^2/c^2)^{-1/2}>0$. In the laboratory frame $U^0=\gamma c$ and $U_0=-\gamma c$, while $K^i=\gamma f_i$ with $f=d\mathbf p/dt$ the laboratory three-force ([[lem-sr-four-force-and-work-energy-identities]], Statement and (c)). When $B=0$, [[def-em-electromagnetic-tensor]](a) gives $F^{i0}=-E_i/c$ and $F^{ij}=0$, hence $\gamma f_i=q(-E_i/c)(-\gamma c)=q\gamma E_i$. Since $\gamma>0$, $f=qE$. This identifies the force used by the work definition whenever the external particle model applies; the prescribed path itself is not assumed to be a particle worldline.

## Proof

**Proof technique:** direct.

1.1 By [F1] the potential $\varphi\in C^2(\Omega)$ satisfies $\nabla\varphi=-E$; the field $qE$ is $C^1$ on $\Omega$ for the constant $q$, and the work $W(\gamma)=\int_\gamma qE\cdot d\mathbf r$ is defined by the vector line integral of [F2], which is finite because the integrand is continuous on each smooth piece of the compact parameter interval. [given, F1, F2]

2.1 Clause (a): by the linearity of the line integral in the field and the constancy of $q$, $W(\gamma)=q\int_\gamma E\cdot d\mathbf r$ ([F2]); substituting $E=-\nabla\varphi$ and applying the gradient theorem [F3] gives $$W(\gamma)=-q\int_\gamma\nabla\varphi\cdot d\mathbf r=-q\bigl(\varphi(\gamma(t_1))-\varphi(\gamma(t_0))\bigr)=q\bigl(\varphi(\gamma(t_0))-\varphi(\gamma(t_1))\bigr),$$ which is the displayed formula, including the degenerate case $t_0=t_1$ where the line integral is $0$ and the right side vanishes too. [step 1.1, F1, F2, F3]

3.1 Clause (b): if $\gamma_1,\gamma_2$ are piecewise $C^1$ paths in $\Omega$ with the same initial point $x$ and the same terminal point $y$, then by step 2.1 applied to each path $W(\gamma_1)=q(\varphi(x)-\varphi(y))=W(\gamma_2)$; for a closed path, where $x=y$, both formulas give $W(\gamma)=0$. [step 2.1]

4.1 Clause (c): with $U:=q\varphi$, the identity of step 2.1 reads $W(\gamma)=U(\gamma(t_0))-U(\gamma(t_1))=-\bigl(U(\gamma(t_1))-U(\gamma(t_0))\bigr)$, the potential energy being the constant multiple $q\varphi$ of the potential. [step 3.1]

5.1 Clause (d): let $\varphi'\in C^2(\Omega)$ satisfy $\nabla\varphi'=-E=\nabla\varphi$. Then $\nabla(\varphi'-\varphi)=0$ on $\Omega$, and by [F4] the difference is constant on every piecewise-$C^1$ path component of $\Omega$; since $\Omega$ is star-shaped, every point is joined to the centre by a $C^1$ segment, so all of $\Omega$ is one path component ([F4]) and $\varphi'=\varphi+c$ for a constant $c\in\mathbb R$. Substituting into the formula of step 2.1 replaces $\varphi$ by $\varphi+c$ and leaves the right side unchanged, so the work is independent of the additive normalisation of the potential. [step 4.1, F4]

6.1 Clauses (a)-(d) are steps 2.1, 3.1, 4.1 and 5.1. The force whose work was computed is the electric term $qE$ of the adopted external coupling [F5] along the prescribed path; the computation used only the potential representation, the gradient theorem and the constancy of the potential up to an additive constant, and asserted no equation of motion, no radiation, no work done on the sources and no claim that the particle follows $\gamma$, which is exactly the scope stated. [step 3.1, step 4.1, step 5.1, F5] ∎
