---
id: "pthm-em-biot-savart"
kind: "physics-theorem"
title: "Biot-Savart representation for a compact smooth conserved current and its declared thin-loop limit"
domain: physics
status: published
origin: session
dependency_level: 19
deps: ["def-em-steady-current-regime", "def-em-si-conventions", "pthm-em-magnetostatic-vector-potential", "lem-em-newtonian-kernel-curl-identity", "lem-em-thin-current-limit", "def-cross-product-in-r3", "thm-integral-triangle-inequality", "def-integral-over-a-measurable-set", "def-countable-choice", "post-em-ideal-magnetostatic-models"]
dependency_roles:
  "def-em-steady-current-regime": "formulation-prerequisite"
  "def-em-si-conventions": "formulation-prerequisite"
  "pthm-em-magnetostatic-vector-potential": "physical-result"
  "lem-em-newtonian-kernel-curl-identity": "mathematical-premise"
  "lem-em-thin-current-limit": "mathematical-premise"
  "def-cross-product-in-r3": "mathematical-premise"
  "thm-integral-triangle-inequality": "mathematical-premise"
  "def-integral-over-a-measurable-set": "mathematical-premise"
  "def-countable-choice": "mathematical-premise"
  "post-em-ideal-magnetostatic-models": "physical-assumption"
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
      locator: "Section 5.2.2 printed pp. 215-219 (the Biot-Savart law (5.34) and (5.39) for line, surface and volume currents, with the straight-wire and circular-loop evaluations (5.36), (5.38)) and Section 5.3.2 printed pp. 222-225 (derivation of $\\operatorname{curl}B=\\mu_0J$ from the volume integral); read in the stamped scanned full text."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Section 3.2.3 printed pp. 49-52 (the Biot-Savart law (3.15) and its thin-wire form (3.16)); read in the stamped 236-page PDF."
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Sections 43-44 printed pp. 101-104 (the average field of a system of moving charges and the law of Biot and Savart (43.7)); read in the stamped 387-page full text, re-expressed in SI."
    - title: "W. C. Chew, Lectures on Electromagnetic Field Theory, Purdue University (Fall 2020, 497 pp.)"
      url: "https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf"
      locator: "Lecture 5 Section 5.1 printed pp. 49-52 (derivation of the Biot-Savart law from the vector potential, eqs. (5.1.1)-(5.1.9)); read in the stamped full text."
physical_scope: "Biot-Savart representation of the magnetostatic field of a compact smooth conserved current, together with the declared thin-loop limit of that representation. Both legs are conditional on the framework's adopted equations and on the declared ideal models; the smooth-current formula holds even on its support, whereas no pointwise value on the ideal loop is asserted; nothing is claimed about self-energy, radiation, forces or noncompact currents, and no measurement, apparatus or uncertainty is involved."
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. Let $J\in C_c^\infty(\Omega;\mathbb R^3)$ with $\operatorname{div}J=0$ be a compact smooth current of [[def-em-steady-current-regime]](b), extended by zero to $\mathbb R^3$, let $A$ be the vector potential of [[pthm-em-magnetostatic-vector-potential]] and $B=\operatorname{curl}A$ its magnetostatic field, with the constants of [[def-em-si-conventions]]. Then for every $x\in\mathbb R^3$ the absolutely convergent Biot-Savart integral represents the field,
$$B(x)=\frac{\mu_0}{4\pi}\int_{\mathbb R^3}\frac{J(y)\times(x-y)}{|x-y|^3}\,dy .$$
Moreover the same formula holds in the declared thin-loop limit, constructed in the all-space laboratory $\Omega=\mathbb R^3$: if $\gamma:\mathbb R/L\mathbb Z\to\mathbb R^3$ is a closed embedded $C^2$ curve parametrized by arc length ($|\gamma'|\equiv1$), $I\in\mathbb R$, and $j_\varepsilon=j*\eta_\varepsilon$ are the mollified divergence-free compact currents of [[lem-em-thin-current-limit]] associated with the tangent line current of $\gamma$, then their fields (given by the displayed formula with $J:=j_\varepsilon$) converge, with every derivative uniformly on every compact $K$ disjoint from $\gamma$, to
$$B_\gamma(x)=\frac{\mu_0 I}{4\pi}\int_0^L\frac{\gamma'(s)\times(x-\gamma(s))}{|x-\gamma(s)|^3}\,ds,$$
a locally integrable global distributional field with $\operatorname{div}B_\gamma=0$, $\operatorname{curl}B_\gamma=\mu_0J_\gamma$, smoothness off the curve and decay at spatial infinity, hence the admitted field of the declared ideal thin loop under [[post-em-ideal-magnetostatic-models]]. Its almost-everywhere representative on $\mathbb R^3$ is supplied by [[lem-em-thin-current-limit]], independently of the away-from-curve convergence. Nothing is asserted on the wire, about line self-energy, about the infinite-wire or sheet models, or for currents outside the compact smooth class and its declared thin-loop limit.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$; let $J\in C_c^\infty(\Omega;\mathbb R^3)$ with $\operatorname{div}J=0$, extended by zero to $\mathbb R^3$; let $A$, $B=\operatorname{curl}A$ be as in [[pthm-em-magnetostatic-vector-potential]] with the constants of [[def-em-si-conventions]].

[F1] The vector potential satisfies $A_i=\mu_0N(J_i)$ componentwise and $B=\operatorname{curl}A$ is $C^\infty$ with $\operatorname{div}B=0$ and $\operatorname{curl}B=\mu_0J$ pointwise on $\mathbb R^3$ ([[pthm-em-magnetostatic-vector-potential]], clauses (a)-(c)).

[F2] For $f\in C_c^\infty(\mathbb R^3;\mathbb R^3)$ the curl of the Newtonian potential is $\operatorname{curl}N(f)(x)=\frac1{4\pi}\int_{\mathbb R^3}\frac{f(y)\times(x-y)}{|x-y|^3}\,dy$ at every $x\in\mathbb R^3$, the integral being absolutely convergent, and the estimate $|f(y)\times(x-y)|\le\|f\|_\infty|x-y|$ with $\int_{B_R(x)}|x-y|^{-2}d\lambda_3<+\infty$ underlies it ([[lem-em-newtonian-kernel-curl-identity]]).

[F3] For a closed embedded $C^2$ arc-length curve $\gamma$ and $I\in\mathbb R$, the tangent line current $j$ has $\operatorname{div}j=0$ distributionally; for any family of nonnegative smooth radial unit-mass kernels supported in $B_\varepsilon(0)$ the mollified fields $j_\varepsilon=j*\eta_\varepsilon$ are smooth, compactly supported and divergence-free; their Biot-Savart fields converge with every derivative uniformly on every compact $K$ disjoint from $\gamma$ to $B_\gamma(x)=\frac{\mu_0I}{4\pi}\int_0^L\frac{\gamma'(s)\times(x-\gamma(s))}{|x-\gamma(s)|^3}\,ds$; and the same field has a locally integrable representative on $\mathbb R^3$, is smooth off $\gamma$, satisfies $\operatorname{div}T_{B_\gamma}=0$ and $\operatorname{curl}T_{B_\gamma}=\mu_0j$ globally, and decays with $|B_\gamma(x)|\le\frac{\mu_0|I|L}{4\pi(|x|-a)^2}$ for $|x|>a$ when $\gamma\subset B_a(0)$ ([[lem-em-thin-current-limit]]).

[F4] The compact smooth current class is [[def-em-steady-current-regime]](b); the ideal closed thin loop is [[def-em-steady-current-regime]](c1); and a field is admitted for it exactly when the predicate (c4) holds, which includes local integrability, $C^1$ regularity and vanishing divergence and curl off the source, the two global distributional identities, the model symmetry and the decay requirement ([[def-em-steady-current-regime]]).

[F5] The physical reading of the declared ideal models is the separate adoption [[post-em-ideal-magnetostatic-models]]; it asserts no existence, uniqueness, finite self-energy, force, self-force or apparatus accuracy, and it is an adopted assumption rather than a deduction.

[F6] The cross product is that of [[def-cross-product-in-r3]], volume integrals are over measurable sets in the sense of [[def-integral-over-a-measurable-set]], and the modulus of an integral is bounded by the integral of the modulus ([[thm-integral-triangle-inequality]]).

[F7] $\mathrm{AC}_\omega$ is the countable-choice principle assumed here and inherited by the cited measure, regular-distribution and Newtonian interfaces ([[def-countable-choice]]).

## Proof

**Proof technique:** direct; the differentiated-kernel identity for the compact class, then the declared thin-current limit with its supplier-supplied global properties.

1.1 By [F1], $B=\operatorname{curl}A$ with $A_i=\mu_0N(J_i)$. Applying [F2] to $f:=J$ and multiplying by $\mu_0$ gives, at every $x\in\mathbb R^3$, $B(x)=\frac{\mu_0}{4\pi}\int_{\mathbb R^3}\frac{J(y)\times(x-y)}{|x-y|^3}\,dy$, with the integral absolutely convergent by the estimate $|J(y)\times(x-y)|\le\|J\|_\infty|x-y|$ and $\int_{B_R(x)}|x-y|^{-2}d\lambda_3<+\infty$ for a ball containing $\operatorname{supp}J$; this proves the first assertion at every point, including points of the support of $J$. [given, F1, F2, F6]

2.1 By [F3], the tangent line current $j$ of the declared loop is divergence-free, its mollified currents $j_\varepsilon$ are smooth, compactly supported and divergence-free, so, taking $\Omega=\mathbb R^3$ for this loop construction, each $j_\varepsilon$ is a compact smooth conserved current of the class [F4](b); step 1.1 applied with $J:=j_\varepsilon$ identifies the field of $j_\varepsilon$ with its displayed Biot-Savart integral. The supplier's every-derivative uniform convergence on every compact $K$ disjoint from $\gamma$ therefore identifies the limit field with $B_\gamma(x)=\frac{\mu_0I}{4\pi}\int_0^L\frac{\gamma'(s)\times(x-\gamma(s))}{|x-\gamma(s)|^3}\,ds$ on the complement of $\gamma$. [step 1.1, F3, F4]

3.1 The same supplier [F3] supplies, independently of the away-from-curve convergence, the globally locally integrable representative of $B_\gamma$ on $\mathbb R^3$, its smoothness off $\gamma$, the global distributional identities $\operatorname{div}T_{B_\gamma}=0$ and $\operatorname{curl}T_{B_\gamma}=\mu_0j$, and the decay bound. Together with the symmetry requirement (vacuous for the loop clause) these are exactly the clauses of the admissibility predicate [F4](c4), so $B_\gamma$ is an admitted field of the declared ideal thin loop; the physical reading of that declaration is the separate adopted assumption [F5], which asserts no existence, uniqueness, self-energy or force content. [step 2.1, F3, F4, F5]

4.1 Clauses (a) and (b) of the Statement are steps 1.1 and 2.1-3.1; the scope clause records that no formula is asserted for noncompact currents (the infinite-wire model is verified separately on the companion examples page), and that no near-wire, self-energy, radiation or force claim is made. Countable Choice is inherited only through the cited measure, regular-distribution and Newtonian supplier interfaces [F7]; no stronger choice principle occurs. [step 1.1, step 2.1, step 3.1, F3, F7] ∎

## Source notes

Griffiths, Section 5.2.2, printed pp. 215-219, states the Biot-Savart law for line, surface and volume currents and evaluates the straight wire (5.36) and circular loop (5.38); Section 5.3.2, printed pp. 222-225, derives $\operatorname{curl}B=\mu_0J$ from the volume integral. Tong, Section 3.2.3, printed pp. 49-52, gives (3.15) and its thin-wire form (3.16); Chew, Lecture 5 Section 5.1, printed pp. 49-52, derives the law from the vector potential, and Landau-Lifshitz, Sections 43-44, printed pp. 101-104, give the corresponding constant-field and Biot-Savart formulas, re-expressed here in SI. The thin-loop leg of this item is conditional on its mathematical supplier [[lem-em-thin-current-limit]] for the global distributional identities and the local integrability, which are not consequences of away-from-curve convergence alone.
