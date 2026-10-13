---
id: "def-em-magnetic-moment"
kind: "definition"
title: "The magnetic dipole moment of a compact conserved current and of the declared ideal thin loop"
domain: physics
status: published
origin: session
dependency_level: 18
deps: ["def-em-steady-current-regime", "def-em-si-conventions", "def-cross-product-in-r3", "def-riemann-integral-over-a-jordan-set", "thm-continuous-functions-on-compact-jordan-sets-are-integrable", "thm-multidimensional-integral-properties"]
dependency_roles:
  "def-em-steady-current-regime": "formulation-prerequisite"
  "def-em-si-conventions": "formulation-prerequisite"
  "def-cross-product-in-r3": "mathematical-premise"
  "def-riemann-integral-over-a-jordan-set": "mathematical-premise"
  "thm-continuous-functions-on-compact-jordan-sets-are-integrable": "mathematical-premise"
  "thm-multidimensional-integral-properties": "mathematical-premise"
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 5.4.3 printed pp. 242-246 (multipole expansion of the vector potential; the line-current and volume-current magnetic moments, including the volume-current formula (5.91)) and Problem 5.34 printed p. 246 (circular-loop moment); read in the stamped scanned full text."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Sections 3.3.1-3.3.2 printed pp. 54-57 (the current loop and the general distribution, with $m=\\frac12\\int d^3r'\\,r'\\times J(r')$, eq. (3.24)); read in the stamped 236-page PDF."
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Section 44 printed pp. 103-105 (definition of the magnetic moment $m=\\frac1{2c}\\sum e\\,r\\times v$ of a system of charges and its use for the average field); read in the stamped 387-page full text, re-expressed in SI."
physical_scope: "The magnetic moment defined here is a source moment of two declared current models (the compact smooth conserved current and the ideal closed thin loop). It is not a rest mass, not an intrinsic spin and not an empirically measured quantity; the definition asserts no far-field property, no equivalence between the two clauses and no moment for any other source. No measurement, apparatus or uncertainty is involved."
---

## Definition

Let the compact smooth current class and the declared ideal models be those of [[def-em-steady-current-regime]], with the units of [[def-em-si-conventions]].

**(a) [Compact smooth currents].** Let $J\in C_c^\infty(\Omega;\mathbb R^3)$ with $\operatorname{div}J=0$, extended by zero to $\mathbb R^3$. The **magnetic dipole moment** of $J$ is the vector
$$m:=\frac12\int_{\mathbb R^3}y\times J(y)\,dy\in\mathbb R^3,$$
of unit A m$^2$. The integral is computed componentwise over any nondegenerate closed bounding rectangle $Q$ containing $\operatorname{supp}J$, using the continuous functions $y\mapsto(y\times J(y))_i$ on $Q$ and their zero extension outside $Q$. Its value is independent of the chosen larger bounding rectangle by finite rectangular subdivision and vanishing of the integrand off its support; the support itself need not be Jordan measurable. Thus this is a Riemann integral of continuous compactly supported functions ([[def-riemann-integral-over-a-jordan-set]], [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]], [[def-cross-product-in-r3]]); it is absolutely finite because $J$ is bounded with compact support.

**(b) [Declared ideal thin loop].** For a closed embedded $C^2$ curve $\gamma:\mathbb R/L\mathbb Z\to\mathbb R^3$ with $|\gamma'|\equiv1$ and $I\in\mathbb R$, the **magnetic moment** of the ideal loop current of [[def-em-steady-current-regime]](c1) is
$$m:=\frac I2\int_0^L\gamma(s)\times\gamma'(s)\,ds,$$
again a componentwise Riemann integral over the compact interval $[0,L]$ of continuous functions; for the circle $\gamma(s)=a(\cos(s/a),\sin(s/a),0)$ traversed in the positive orientation this is $m=I\pi a^2e_3$.

**(c) [Status and scope].** In both clauses $m$ is a source moment of the declared current model: it is not a rest mass, not an intrinsic spin and not an observed quantity. The definition asserts no far-field property of $m$ (that is the content of [[pthm-em-magnetic-dipole-field]] under its hypotheses), no agreement between the two clauses in a common limit, and no moment for currents outside the two classes; no higher multipole is defined here. The finite Riemann moment definitions and circular-loop evaluation themselves are choice-free; no distribution-embedding or surface-measure theorem is used to compute these moments.

## Remarks

**Well-definedness and units.** In (a), $y\mapsto y\times J(y)$ is continuous on the compact rectangle $Q$ and vanishes off $\operatorname{supp}J$, so each component is Riemann integrable on $Q$ by [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]] and bounded there, hence the integral of [[def-riemann-integral-over-a-jordan-set]] is finite. Two bounding rectangles are compared through a common larger rectangle subdivided at their face coordinates: every added cell lies outside $\operatorname{supp}J$, where the integrand vanishes, so finite additivity of the integral ([[thm-multidimensional-integral-properties]]) identifies both values without integrating over the support itself. The cross product is that of [[def-cross-product-in-r3]]. Since $y$ carries the metre and $J$ the ampere per square metre, the product $y\times J$ carries A m$^{-1}$ and the volume integral A m$^2$ ([[def-em-si-conventions]]). In (b), $\gamma$ and $\gamma'$ are continuous on the compact circle and periodic, so each component of $\gamma\times\gamma'$ is a continuous periodic function on $[0,L]$ and the componentwise Riemann integral exists; $|\gamma'|\equiv1$ makes the parametrization unit-speed so that the value is independent of an orientation-preserving change of unit-speed parameter; reversing orientation reverses the tangent current unless the signed current parameter $I$ is also reversed. The circular evaluation is the componentwise computation $\gamma\times\gamma'=ae_3$ and $\int_0^{2\pi a}ae_3\,ds=2\pi a^2e_3$. No measurement, apparatus or uncertainty enters either clause.

## Source notes

Griffiths, Section 5.4.3, printed pp. 242-246, introduces the line-current and volume-current magnetic moments for volume currents (eqs. (5.84) and (5.91)); Tong, Sections 3.3.1-3.3.2, printed pp. 54-57, gives $m=\frac12\int d^3r'\,r'\times J(r')$ (eq. (3.24)); Landau-Lifshitz, Section 44, printed pp. 103-105, gives the corresponding charged-particle moment in Gaussian units, re-expressed here in SI. The definition keeps the moment a declared source quantity of the two explicit models and defers every far-field interpretation to the dipole theorem.
