---
id: "pthm-em-magnetostatic-vector-potential"
kind: "physics-theorem"
title: "Coulomb-gauge Newtonian vector potential for a compact smooth conserved current"
domain: physics
status: published
origin: session
dependency_level: 18
deps: ["def-em-steady-current-regime", "def-em-si-conventions", "post-em-vacuum-maxwell", "lem-em-smooth-newtonian-upgrade", "def-divergence-and-curl-of-a-c1-vector-field", "def-directional-and-partial-derivatives", "def-laplacian-of-a-c2-function", "thm-the-divergence-of-a-curl-vanishes", "cor-the-curl-of-a-curl-of-a-c2-field", "def-countable-choice"]
dependency_roles:
  "def-em-steady-current-regime": "formulation-prerequisite"
  "def-em-si-conventions": "formulation-prerequisite"
  "post-em-vacuum-maxwell": "physical-assumption"
  "lem-em-smooth-newtonian-upgrade": "mathematical-premise"
  "def-divergence-and-curl-of-a-c1-vector-field": "mathematical-premise"
  "def-directional-and-partial-derivatives": "mathematical-premise"
  "def-laplacian-of-a-c2-function": "mathematical-premise"
  "thm-the-divergence-of-a-curl-vanishes": "mathematical-premise"
  "cor-the-curl-of-a-curl-of-a-c2-field": "mathematical-premise"
  "def-countable-choice": "mathematical-premise"
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 5.4.1 printed pp. 234-240 (the vector potential, the Coulomb condition $\\nabla\\cdot A=0$ (5.61), the Poisson equation $\\nabla^2A=-\\mu_0J$ and $A=\\frac{\\mu_0}{4\\pi}\\int\\frac{J}{\\mathcal r}\\,d\\tau'$ (5.63)); read in the stamped scanned full text."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Sections 3.2-3.2.3 printed pp. 46-52 (the vector potential, Coulomb gauge $\\nabla\\cdot A=0$ and the three Poisson equations $\\nabla^2A_i=-\\mu_0J_i$, eqs. (3.11)-(3.14)); read in the stamped 236-page PDF."
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Section 43 printed pp. 101-103 (constant field: $\\operatorname{grad}\\operatorname{div}A-\\Delta A=-4\\pi j/c$ in Gaussian units, the auxiliary condition $\\operatorname{div}A=0$ and the Poisson solution (43.4)-(43.5)); read in the stamped 387-page full text, re-expressed in SI."
    - title: "W. C. Chew, Lectures on Electromagnetic Field Theory, Purdue University (Fall 2020, 497 pp.)"
      url: "https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf"
      locator: "Lecture 4 Section 4.1 printed pp. 39-41 (the vector Poisson equation (4.1.10) and its free-space solution (4.1.11)); read in the stamped full text."
physical_scope: "A conditional construction theorem for the compact smooth current class of the framework's steady-current regime (adopted Maxwell equations, one inertial frame, SI units). The Coulomb gauge is a construction choice; no uniqueness, no noncompact-current or singular-source statement and no empirical claim about any apparatus or observed field is made."
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. Let $J\in C_c^\infty(\Omega;\mathbb R^3)$ with $\operatorname{div}J=0$ be a compact smooth current of [[def-em-steady-current-regime]](b), extended by zero to $\mathbb R^3$, and let $\mu_0>0$, $c>0$, $\varepsilon_0=(\mu_0c^2)^{-1}$ be the constants of [[def-em-si-conventions]]. Define, for $i\in\{1,2,3\}$ and $x\in\mathbb R^3$,
$$A_i(x):=\frac{\mu_0}{4\pi}\int_{\mathbb R^3}\frac{J_i(y)}{|x-y|}\,dy=\mu_0\,N(J_i)(x),\qquad A:=(A_1,A_2,A_3),$$
the componentwise Newtonian potentials of [[lem-em-smooth-newtonian-upgrade]]. Then:

(a) $A\in C^\infty(\mathbb R^3;\mathbb R^3)$ and $-\Delta A=\mu_0J$ pointwise on $\mathbb R^3$, componentwise ([[def-laplacian-of-a-c2-function]]);

(b) $\operatorname{div}A=0$ pointwise on $\mathbb R^3$: the Coulomb-gauge condition holds;

(c) the field $B:=\operatorname{curl}A$ is of class $C^\infty$ and satisfies the magnetostatic pair of [[def-em-steady-current-regime]](a) pointwise on $\mathbb R^3$,
$$\operatorname{div}B=0,\qquad \operatorname{curl}B=\mu_0J ;$$
consequently $E=0$, $\rho=0$, with $B,J$ independent of time, gives an explicit full smooth-Maxwell completion on $\mathbb R^3\times I$ for every open time interval $I$ under [[post-em-vacuum-maxwell]]. More generally any compatible steady electrostatic pair satisfying $\operatorname{curl}E=0$ and $\operatorname{div}E=\rho/\varepsilon_0$ can be combined with $B,J$; no electrostatic existence theorem is implied;

(d) [Scope] $A$ is a vector potential for $B$ in the Coulomb gauge; the gauge condition is a construction choice and no uniqueness of $A$ or of $B$ is asserted. The construction is carried out for the compact smooth class only: nothing is claimed for the declared ideal models of [[def-em-steady-current-regime]](c), for noncompact currents or for currents of weaker regularity.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$; let $J\in C_c^\infty(\Omega;\mathbb R^3)$ with $\operatorname{div}J=0$, extended by zero to $\mathbb R^3$; let $\mu_0,c,\varepsilon_0$ be as in [[def-em-si-conventions]] and $A$ be as in the Statement.

[F1] For $h\in C_c^\infty(\mathbb R^3;\mathbb R)$ the Newtonian potential satisfies $Nh\in C^\infty(\mathbb R^3)$, $-\Delta Nh=h$ pointwise, and $D^\alpha Nh=N(D^\alpha h)$ for every multi-index $\alpha$ ([[lem-em-smooth-newtonian-upgrade]]).

[F2] The Laplacian is $\Delta F=(\Delta F_1,\Delta F_2,\Delta F_3)$ componentwise, and $\Delta f=\operatorname{div}\nabla f=\sum_i\partial_i\partial_if$ for $C^2$ scalars ([[def-laplacian-of-a-c2-function]]); divergence and curl are the coordinate expressions $\operatorname{div}G=\sum_i\partial_iG_i$ and $\operatorname{curl}G=(\partial_2G_3-\partial_3G_2,\ \partial_3G_1-\partial_1G_3,\ \partial_1G_2-\partial_2G_1)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]), with partial derivatives as in [[def-directional-and-partial-derivatives]].

[F3] For a $C^2$ field $G$ on an open subset of $\mathbb R^3$, $\operatorname{div}(\operatorname{curl}G)=0$ ([[thm-the-divergence-of-a-curl-vanishes]]).

[F4] For a $C^2$ field $G$ on an open subset of $\mathbb R^3$, $\operatorname{curl}\operatorname{curl}G=\nabla\operatorname{div}G-\Delta G$ ([[cor-the-curl-of-a-curl-of-a-c2-field]]).

[F5] The compact smooth current class is the class of [[def-em-steady-current-regime]](b): $J\in C_c^\infty(\Omega;\mathbb R^3)$ with $\operatorname{div}J=0$, extended by zero; the magnetostatic pair $\operatorname{div}B=0$, $\operatorname{curl}B=\mu_0J$ is the time-independent reduction of clause (a) there, and the adopted smooth equations with these constants are [[post-em-vacuum-maxwell]](a).

[F6] $\mathrm{AC}_\omega$ is the countable-choice principle assumed here and inherited by the Newtonian-potential supplier ([[def-countable-choice]]).

## Proof

**Proof technique:** direct; componentwise reduction to the smooth Newtonian upgrade and the standard second-derivative vector identities.

1.1 For each $i$ the datum $J_i$ is smooth and compactly supported, so [F1] gives $A_i=\mu_0N(J_i)\in C^\infty(\mathbb R^3)$, the derivative identity $D^\alpha A_i=\mu_0N(D^\alpha J_i)$ for every multi-index $\alpha$, and $-\Delta A_i=\mu_0J_i$ pointwise on $\mathbb R^3$; since all components are smooth, $A\in C^\infty(\mathbb R^3;\mathbb R^3)$ by [F2], and $-\Delta A=\mu_0J$ holds pointwise componentwise. This is (a). [given, F1, F2]

2.1 Taking $\alpha=e_i$ in the derivative identity of step 1.1 and summing, $\operatorname{div}A=\sum_i\partial_iA_i=\mu_0\sum_iN(\partial_iJ_i)$; $N$ is componentwise linear by finite additivity of the integral over the compactly supported data, so this equals $\mu_0N(\sum_i\partial_iJ_i)=\mu_0N(\operatorname{div}J)$ pointwise, and $\operatorname{div}J=0$ gives $\operatorname{div}A=0$ on $\mathbb R^3$. This is (b), and the hypothesis $\operatorname{div}J=0$ is used in no other step. [step 1.1, F2, F5]

3.1 Since $A$ is $C^\infty$, the field $B:=\operatorname{curl}A$ is $C^\infty$ by [F2]. Then $\operatorname{div}B=\operatorname{div}\operatorname{curl}A=0$ by [F3], and $\operatorname{curl}B=\operatorname{curl}\operatorname{curl}A=\nabla(\operatorname{div}A)-\Delta A$ by [F4]; substituting step 2.1 and step 1.1 gives $\operatorname{curl}B=0-(-\mu_0J)=\mu_0J$. Hence the magnetostatic pair of [F5] holds pointwise on $\mathbb R^3$. [step 1.1, step 2.1, F2, F3, F4, F5]

4.1 Read step 3.1 inside the framework: [F5] identifies the pair $\operatorname{div}B=0$, $\operatorname{curl}B=\mu_0J$ with the time-independent reduction of the adopted equations, and the smooth branch of [[post-em-vacuum-maxwell]](a) then holds for the fields $E:=0$, $\rho:=0$ on $\Omega\times I$ and the time-independent $B,J$ restricted to $\Omega\times I$: indeed $\operatorname{div}E=0=\rho/\varepsilon_0$, $\operatorname{curl}E=0$ and $\partial_tB=0$ give $\operatorname{curl}E=-\partial_tB$, $\operatorname{div}B=0$, and $\partial_tE=0$ with $\operatorname{curl}B=\mu_0J$ gives $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$. More generally a compatible steady electrostatic pair satisfying $\operatorname{curl}E=0$ and $\operatorname{div}E=\rho/\varepsilon_0$ may be combined with $B,J$; no existence theorem for such a pair is asserted here. [step 3.1, F5]

5.1 Clauses (a)-(d) are steps 1.1, 2.1, 3.1, 4.1 together with the scope statement: $A$ is a vector potential for $B$ in the Coulomb gauge, the gauge condition $\operatorname{div}A=0$ is a construction choice, and no uniqueness of $A$, no uniqueness of $B$ and no statement for the ideal noncompact models of [[def-em-steady-current-regime]](c) is claimed. Countable Choice is used only through the Newtonian-potential supplier [F1] and the measure interfaces it inherits [F6]; no stronger choice principle occurs, and the vector identities of [F3], [F4] are choice-free. [step 1.1, step 2.1, step 3.1, step 4.1, F5, F6] ∎

## Source notes

Griffiths, Section 5.4.1, printed pp. 234-240, derives the Poisson equation $\nabla^2A=-\mu_0J$ in the Coulomb gauge and gives the integral solution (5.63); Tong, Sections 3.2-3.2.3, printed pp. 46-52, and Chew, Lecture 4 Section 4.1, printed pp. 39-41, give the same componentwise construction; Landau-Lifshitz, Section 43, printed pp. 101-103, gives the corresponding constant-field formulation in Gaussian units, re-expressed here in SI. The proof above is the exact componentwise version: smoothness and the Poisson identity come from the smooth Newtonian upgrade, and the divergence-free hypothesis enters only through step 2.1.
