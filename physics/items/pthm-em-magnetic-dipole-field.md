---
id: "pthm-em-magnetic-dipole-field"
kind: "physics-theorem"
title: "Far-field dipole expansion of a compact conserved current with a uniform explicit remainder"
domain: physics
status: published
origin: session
dependency_level: 19
deps: ["def-em-steady-current-regime", "def-em-magnetic-moment", "pthm-em-magnetostatic-vector-potential", "lem-em-magnetic-dipole-remainder", "def-cross-product-in-r3", "def-countable-choice", "lem-riemann-lebesgue-comparison-for-distribution-test-integrands"]
dependency_roles:
  "def-em-steady-current-regime": "formulation-prerequisite"
  "def-em-magnetic-moment": "formulation-prerequisite"
  "pthm-em-magnetostatic-vector-potential": "physical-result"
  "lem-em-magnetic-dipole-remainder": "mathematical-premise"
  "def-cross-product-in-r3": "mathematical-premise"
  "def-countable-choice": "mathematical-premise"
  "lem-riemann-lebesgue-comparison-for-distribution-test-integrands": "mathematical-premise"
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
      locator: "Section 5.4.3 printed pp. 242-247 (multipole expansion of the vector potential: dipole potential (5.83), dipole field (5.85)-(5.87), and the coordinate-free form $\\mathbf B_{\\rm dip}=\\frac{\\mu_0}{4\\pi}\\frac{3(\\mathbf m\\cdot\\hat r)\\hat r-\\mathbf m}{r^3}$ with its delta term (5.90)); read in the stamped scanned full text."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Sections 3.3.1-3.3.2 printed pp. 54-57 (far field of a circular current loop and the general localised distribution, with the moment (3.24)); read in the stamped 236-page PDF."
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Section 44 printed pp. 103-105 (the average vector potential to first order in the source radius, $H=\\frac{3n(m\\cdot n)-m}{R^3}$ (44.4)); read in the stamped 387-page full text, re-expressed in SI."
physical_scope: "A far-field dipole estimate for the magnetostatic field of a compact smooth conserved current, uniform for $r\\ge2a$, with an explicit remainder and absolute constants. The leading term is not an exact field; nothing is asserted inside $r<2a$ or at the support, and no experiment, apparatus or uncertainty is involved."
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. Let $J\in C_c^\infty(\Omega;\mathbb R^3)$ with $\operatorname{div}J=0$ and $\operatorname{supp}J\subset B_a(0)$ for some $a>0$, let $A$ be the vector potential of [[pthm-em-magnetostatic-vector-potential]] and $B=\operatorname{curl}A$ its magnetostatic field, and let $m=\frac12\int_{\mathbb R^3}y\times J(y)\,dy$ be the magnetic moment of [[def-em-magnetic-moment]](a). Then for $r=|x|\ge2a$, uniformly in the unit vector $n=x/r$,
$$A(x)=\frac{\mu_0}{4\pi}\frac{m\times x}{r^3}+O\!\left(\frac{\mu_0a^2\|J\|_1}{r^3}\right),\qquad B(x)=\frac{\mu_0}{4\pi}\frac{3n(m\cdot n)-m}{r^3}+O\!\left(\frac{\mu_0a^2\|J\|_1}{r^4}\right),$$
where $\|J\|_1=\int_{\mathbb R^3}|J|\,d\lambda_3$ and the constants implicit in the $O$ terms are absolute: one constant works for all $r\ge2a$ and all unit $n$. This is a controlled two-term far-field estimate: nothing is asserted for $r<2a$ or at the support, no higher multipole is defined here, and the leading dipole term is not claimed to be exact.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$; let $J\in C_c^\infty(\mathbb R^3;\mathbb R^3)$ with $\operatorname{div}J=0$ and $\operatorname{supp}J\subset B_a(0)$; let $A$, $B=\operatorname{curl}A$ be as in [[pthm-em-magnetostatic-vector-potential]] and $m$ be as in [[def-em-magnetic-moment]](a).

[F1] The vector potential satisfies $A_i=\mu_0N(J_i)=({\mu_0}/{4\pi})\int_{\mathbb R^3}J_i(y)|x-y|^{-1}dy$ componentwise and $B=\operatorname{curl}A$ is its magnetostatic field ([[pthm-em-magnetostatic-vector-potential]], clauses (a)-(c)).

[F2] The magnetic moment of the compact smooth current is the source moment $m=\frac12\int_{\mathbb R^3}y\times J(y)\,dy$ of [[def-em-magnetic-moment]](a), computed componentwise as a Riemann integral over a nondegenerate closed bounding rectangle $Q\supset\operatorname{supp}J$ of the continuous compactly supported integrand, with the cross product of [[def-cross-product-in-r3]]; clause (c) records that $m$ is a model quantity and that its far-field interpretation is the content of this theorem under its hypotheses.

[F3] Under the stated hypotheses, with $m=\frac12\int_{\mathbb R^3}y\times J(y)\,dy$ (Lebesgue), $r=|x|\ge2a$ and $n=x/r$, one has uniformly in $n$: $A=\frac{\mu_0}{4\pi}\frac{m\times x}{r^3}+O(\mu_0a^2\|J\|_1r^{-3})$ and $B=\frac{\mu_0}{4\pi}\frac{3n(m\cdot n)-m}{r^3}+O(\mu_0a^2\|J\|_1r^{-4})$, with absolute constants and $\|J\|_1=\int|J|$ ([[lem-em-magnetic-dipole-remainder]]).

[F4] If $f$ is a bounded Borel real function on a nondegenerate closed rectangle $Q$ and $f$ is Riemann integrable there, then $f$ is Lebesgue integrable with the same integral; equivalently, for smooth compactly supported integrands the Riemann integral over a bounding rectangle equals the Lebesgue integral of their zero extension ([[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]).

[F5] $\mathrm{AC}_\omega$ is the countable-choice principle assumed here and inherited by the cited comparison and measure interfaces ([[def-countable-choice]]).

## Proof

**Proof technique:** direct transport of the explicit uniform-remainder lemma to the framework's objects, with a Riemann-Lebesgue comparison for the two displayed moments.

1.1 The hypotheses of [F3] are exactly the hypotheses stated here for $J$ (smooth, compactly supported, divergence-free, contained in $B_a(0)$), and the objects of [F3] are the objects of this theorem: $A=\frac{\mu_0}{4\pi}\int J(y)|x-y|^{-1}dy$ componentwise and $B=\operatorname{curl}A$ by [F1]. The moment of [F2] agrees with the Lebesgue moment of [F3]: each component $y\mapsto(y\times J(y))_i$ is smooth and compactly supported, hence bounded Borel and Riemann integrable on any nondegenerate closed rectangle $Q$ containing $\operatorname{supp}J$; by [F4] its Riemann integral over $Q$ equals its Lebesgue integral over $Q$, and since the integrand vanishes off $\operatorname{supp}J\subset Q$ this equals the Lebesgue integral over $\mathbb R^3$. Hence $\frac12\int_{\mathbb R^3}y\times J(y)\,dy$ is the same vector in both items. [given, F1, F2, F3, F4]

2.1 Substituting the identifications of step 1.1 into the conclusion of [F3] gives, for $r=|x|\ge2a$ and uniformly in the unit vector $n=x/r$, the displayed estimates $A(x)=\frac{\mu_0}{4\pi}\frac{m\times x}{r^3}+O(\mu_0a^2\|J\|_1r^{-3})$ and $B(x)=\frac{\mu_0}{4\pi}\frac{3n(m\cdot n)-m}{r^3}+O(\mu_0a^2\|J\|_1r^{-4})$ for the framework's $A$ and $B$, with the lemma's uniformity and absolute constants and with $\|J\|_1=\int_{\mathbb R^3}|J|\,d\lambda_3$ as in the Statement. [step 1.1, F3]

3.1 The estimates of step 2.1 are the content of the Statement; no assertion is made for $r<2a$ or at the support, no higher multipole is defined, and the leading dipole term is not claimed to be exact. Countable Choice is used only through the Riemann-Lebesgue comparison [F4] and the measure and Newtonian interfaces [F5] of the cited suppliers; no stronger choice principle occurs. [step 1.1, step 2.1, F3, F4, F5] ∎

## Source notes

Griffiths, Section 5.4.3, printed pp. 242-247, expands the vector potential and gives the dipole field (5.85)-(5.87) with the coordinate-free form and its delta term (5.90); Tong, Sections 3.3.1-3.3.2, printed pp. 54-57, gives the loop far field and the general moment (3.24); Landau-Lifshitz, Section 44, printed pp. 103-105, gives the first-order average field in Gaussian units, re-expressed here in SI. The uniform remainder is carried by the explicit mathematical supplier [[lem-em-magnetic-dipole-remainder]], not by the textbook expansions, and the Riemann moment of the definition is reconciled with the supplier's Lebesgue moment in step 1.1.
