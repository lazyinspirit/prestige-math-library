---
id: "def-em-steady-current-regime"
kind: "definition"
title: "The steady-current (magnetostatic) regime, the compact smooth current class and the declared ideal noncompact models"
domain: physics
status: draft
origin: session
dependency_level: 17
deps: ["def-em-lab-geometry", "def-em-fields", "def-em-sources", "def-em-si-conventions", "def-em-weak-sources", "post-em-vacuum-maxwell", "pthm-em-charge-continuity", "def-ck-euclidean-maps-and-diffeomorphisms", "def-divergence-and-curl-of-a-c1-vector-field", "def-distribution", "def-distributional-derivative", "def-test-function-space-d-of-an-open-set", "def-surface-integral-on-a-compact-c-one-hypersurface", "def-cross-product-in-r3", "def-regular-distribution-from-a-locally-integrable-function", "thm-locally-integrable-functions-embed-in-distributions", "thm-multidimensional-integral-properties", "def-countable-choice", "def-directional-and-partial-derivatives"]
dependency_roles:
  "def-em-lab-geometry": "formulation-prerequisite"
  "def-em-fields": "formulation-prerequisite"
  "def-em-sources": "formulation-prerequisite"
  "def-em-si-conventions": "formulation-prerequisite"
  "def-em-weak-sources": "formulation-prerequisite"
  "post-em-vacuum-maxwell": "physical-assumption"
  "pthm-em-charge-continuity": "formulation-prerequisite"
  "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise"
  "def-divergence-and-curl-of-a-c1-vector-field": "mathematical-premise"
  "def-distribution": "mathematical-premise"
  "def-distributional-derivative": "mathematical-premise"
  "def-test-function-space-d-of-an-open-set": "mathematical-premise"
  "def-surface-integral-on-a-compact-c-one-hypersurface": "mathematical-premise"
  "def-cross-product-in-r3": "mathematical-premise"
  "def-regular-distribution-from-a-locally-integrable-function": "mathematical-premise"
  "thm-locally-integrable-functions-embed-in-distributions": "mathematical-premise"
  "thm-multidimensional-integral-properties": "mathematical-premise"
  "def-countable-choice": "mathematical-premise"
  "def-directional-and-partial-derivatives": "mathematical-premise"
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 5.2.1 printed pp. 215-216 (steady currents: 'a continuous flow that has been going on forever, without change and without charge piling up anywhere'; $\\nabla\\cdot J=0$) and Section 5.1.3 printed pp. 208-214 (line, surface and volume current densities); read in the stamped scanned full text."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Chapter 3 opening printed pp. 41-42 (steady currents, $\\rho=0$, $\\nabla\\cdot J=0$, and the two magnetostatic equations in the static limit); read in the stamped 236-page PDF."
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Section 43 printed pp. 101-103 (the time-averaged constant magnetic field: $\\operatorname{div}H=0$, $\\operatorname{curl}H=4\\pi j/c$ in Gaussian units, the vector potential and the Coulomb condition); read in the stamped 387-page full text, re-expressed in SI."
    - title: "W. C. Chew, Lectures on Electromagnetic Field Theory, Purdue University (Fall 2020, 497 pp.)"
      url: "https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf"
      locator: "Lecture 4 Section 4.1 printed pp. 39-41 (the magnetostatic equations $\\nabla\\times H=J$, $\\nabla\\cdot B=0$ and the vector potential in the Coulomb gauge); read in the stamped full text."
physical_scope: "A model restriction inside the classical electromagnetic framework: the steady-current regime is the time-independent reduction of the adopted Maxwell equations in one inertial frame, and the compact smooth current class and the three declared ideal models are hypotheses, not measurements or empirical findings. The ideal noncompact models carry declared symmetry and decay data and have no finite-energy or compact-support property; no experiment, apparatus, uncertainty or statistical claim is involved, and no claim is made that any real current is exactly steady, compactly supported or divergence-free."
---

## Definition

For the Lebesgue/surface/distributional source and admissibility branches (c)-(d), assume Countable Choice ([[def-countable-choice]]). The smooth formulation in (a) and the smooth conserved-current predicate in (b) do not themselves use Choice. Let the laboratory region and its chart, the field and source objects and the units be those of [[def-em-lab-geometry]], [[def-em-fields]], [[def-em-sources]] and [[def-em-si-conventions]], and fix $\mu_0>0$, $c>0$, $\varepsilon_0=(\mu_0c^2)^{-1}$.

**(a) [Steady-current regime].** A steady-current (magnetostatic) configuration on $\Omega\times I$ consists of a field pair $E,B:\Omega\times I\to\mathbb R^3$ and source fields $\rho:\Omega\times I\to\mathbb R$, $J:\Omega\times I\to\mathbb R^3$ that are independent of $t$ and satisfy the smooth branch of [[post-em-vacuum-maxwell]] with the operators of [[def-divergence-and-curl-of-a-c1-vector-field]] and [[def-directional-and-partial-derivatives]]. For such a configuration the formal distributional branch of [[pthm-em-charge-continuity]] gives $\operatorname{div}J=0$ distributionally; this is pointwise when $J$ is $C^1$. In the jointly $C^2$ field/$C^1$ source branch its classical proof applies directly. The locally integrable distributional reading here inherits Countable Choice, whereas the stated classical $C^2/C^1$ compatibility calculation is choice-free, and the four adopted equations are equivalent to the electrostatic pair and the magnetostatic pair
$$\operatorname{div}E=\rho/\varepsilon_0,\qquad \operatorname{curl}E=0,\qquad \operatorname{div}B=0,\qquad \operatorname{curl}B=\mu_0J .$$

**(b) [Compact smooth current class].** The compact smooth current class of this framework consists of the currents $J\in C_c^\infty(\Omega;\mathbb R^3)$ with $\operatorname{div}J=0$, extended by zero to $\mathbb R^3$. A magnetostatic field of such a current is a field $B$ of class $C^1$ on $\mathbb R^3$ satisfying $\operatorname{div}B=0$ and $\operatorname{curl}B=\mu_0J$ on $\mathbb R^3$ with the extended $J$. This is the hypothesis class of the vector-potential, Biot-Savart and dipole theorems of this page; this definition asserts neither existence nor uniqueness of $B$ in the class.

**(c) [Ideal source objects].** Define three ideal current source objects outside the compact class, together with the data selecting their fields. Curve parameters $s$ and $L$ and the radius $a$ carry metres; the signed line-current amplitude $I$ carries amperes and the signed sheet-current amplitude $K$ carries A m$^{-1}$. The field $B$ carries tesla, as in [[def-em-si-conventions]].

**(c1) [Closed thin loop].** For a closed embedded $C^2$ curve $\gamma:\mathbb R/L\mathbb Z\to\mathbb R^3$ with $|\gamma'|\equiv1$ ($L>0$) and $I\in\mathbb R$, the ideal loop current is the distribution
$$\langle J_\gamma,\psi\rangle:=I\int_0^L\gamma'(s)\cdot\psi(\gamma(s))\,ds,\qquad \psi\in C_c^\infty(\mathbb R^3;\mathbb R^3),$$
with $\rho_\gamma:=0$.

**(c2) [Infinite straight wire].** For $\gamma(s)=(0,0,s)$, $s\in\mathbb R$, and $I\in\mathbb R$, the ideal wire current is
$$\langle J_{\rm w},\psi\rangle:=I\int_{\mathbb R}\psi_3(0,0,s)\,ds,$$
with $\rho_{\rm w}:=0$.

**(c3) [Infinite cylindrical sheet].** For $a>0$, $S=\{\rho=a\}$, $\rho=\sqrt{x_1^2+x_2^2}$, $e_\rho:=\rho^{-1}(x_1,x_2,0)$ and $e_\varphi:=\rho^{-1}(-x_2,x_1,0)$ on $\{\rho>0\}$, and $K\in\mathbb R$, the ideal solenoid sheet current is
$$\langle J_S,\psi\rangle:=K\int_S e_\varphi\cdot\psi\,dS$$
([[def-surface-integral-on-a-compact-c-one-hypersurface]], read on compact cylinder segments), with $\rho_S:=0$. All three pairings are finite because $\psi$ has compact support.

**(c4) [Admissibility].** A field $B$ is admitted for one of these declared models when: $B$ is locally integrable on $\mathbb R^3$ (hence a distribution by [[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]]) and $C^1$ off the support of the current; $\operatorname{div}B=0$ and $\operatorname{curl}B=0$ hold pointwise off that support; the distributional identities $\operatorname{div}B=0$ and $\operatorname{curl}B=\mu_0J$ hold against every scalar divergence test $\varphi\in C_c^\infty(\mathbb R^3)$ and vector curl test $\psi\in C_c^\infty(\mathbb R^3;\mathbb R^3)$ in the sense of [[def-distributional-derivative]]; $B$ has the model's declared symmetry: in (c2) and (c3), $B(x+he_3)=B(x)$ for every $h\in\mathbb R$, and $B(R_\theta x)=R_\theta B(x)$ for every $\theta\in\mathbb R$, at off-source points, where $R_\theta(x_1,x_2,x_3)=(x_1\cos\theta-x_2\sin\theta,x_1\sin\theta+x_2\cos\theta,x_3)$; no symmetry is required in (c1); and $B$ obeys the decay requirement: $|B(x)|\to0$ as $|x|\to\infty$ in (c1), and in (c2), (c3), $\sup_{(\theta,z)\in C}|B(r\cos\theta,r\sin\theta,z)|\to0$ as $r\to\infty$ for every nonempty compact $C\subset\mathbb R^2$. The companion examples exhibit and verify the fields of the two axisymmetric models in this class; the definition itself asserts no existence, uniqueness, finite energy or limiting relation for the declared models, and no compact-class theorem of this page applies to them.

**(d) [Scope].** This is a model restriction: the steady-current regime for compact smooth currents, and three explicitly declared ideal noncompact or singular models. It excludes point charges, weaker-regularity volume sources, moving sheets, normal sheet currents and any claim of empirical exactness; the equations in (c4) define a mathematical admissibility predicate; its physical adoption for these source objects is a separate postulate, and no product of distributions is formed.

## Remarks

**Well-definedness of the clauses.** In (c1)-(c3) the pairings are order-zero continuous linear functionals on the test spaces of [[def-test-function-space-d-of-an-open-set]]: on a fixed compact test support their absolute values are bounded by $|I|L\|\psi\|_\infty$, by $|I|$ times the finite length of the axis projection times $\|\psi\|_\infty$, and by $|K|$ times the finite area of a containing compact cylindrical face times $\|\psi\|_\infty$, respectively. The cylinder chart $X(\theta,z)=(a\cos\theta,a\sin\theta,z)$ has Gram density $a$, and finitely many angular charts cover each compact face, so the surface pairing is the chart-defined integral of [[def-surface-integral-on-a-compact-c-one-hypersurface]]; the scalar triple product and the direction $e_\varphi$ are those of [[def-cross-product-in-r3]]. The divergence pairing uses scalar tests and the curl pairing vector tests under [[def-distributional-derivative]], a vector distribution being a triple of scalar distributions in $\mathcal D'(\mathbb R^3)$ of [[def-distribution]]; a locally integrable field is a distribution in the sense of the regular-distribution embedding [[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]]. Smoothness statements use [[def-ck-euclidean-maps-and-diffeomorphisms]]. The finite area of a compact angular face is the Riemann integral of the constant function one over its rectangular chart domain, with the properties of [[thm-multidimensional-integral-properties]]. The declared ideal objects lie outside the source classes of [[def-em-weak-sources]]: that definition excludes line and noncompact sheet currents, so no equation for these singular objects is inherited from it, and Countable Choice is inherited only through the compact-face surface and regular-distribution interfaces.

## Source notes

Griffiths, Section 5.2.1, printed pp. 215-216, and the opening of Tong, Chapter 3, printed pp. 41-42, describe steady currents and the reduction to $\nabla\cdot J=0$ and the static field equations; Griffiths, Section 5.1.3, printed pp. 208-214, supplies the line, surface and volume current-density conventions reproduced in (c). Landau-Lifshitz, Section 43, printed pp. 101-103, and Chew, Lecture 4 Section 4.1, printed pp. 39-41, give the constant-field equations and the vector-potential formulation in the same regime. The ideal noncompact models are declared modelling hypotheses of this framework, not measurements or exact descriptions of any apparatus.
