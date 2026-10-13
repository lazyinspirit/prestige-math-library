---
id: "ex-em-infinite-wire-and-solenoid"
kind: "example"
domain: physics
title: "Declared ideal infinite wire and cylindrical current sheet: explicit fields and their distributional equations"
status: published
origin: session
dependency_level: 19
deps: ["def-em-steady-current-regime", "lem-em-ideal-line-current-field", "lem-em-ideal-cylindrical-sheet-field", "def-cross-product-in-r3", "def-divergence-and-curl-of-a-c1-vector-field", "def-riemann-integral-over-a-jordan-set", "def-scalar-and-vector-line-integrals-along-piecewise-c1-paths", "def-surface-integral-on-a-compact-c-one-hypersurface", "thm-continuous-functions-on-compact-jordan-sets-are-integrable", "def-countable-choice", "post-em-ideal-magnetostatic-models"]
dependency_roles:
  "def-em-steady-current-regime": "formulation-prerequisite"
  "lem-em-ideal-line-current-field": "mathematical-premise"
  "lem-em-ideal-cylindrical-sheet-field": "mathematical-premise"
  "def-cross-product-in-r3": "mathematical-premise"
  "def-divergence-and-curl-of-a-c1-vector-field": "mathematical-premise"
  "def-riemann-integral-over-a-jordan-set": "mathematical-premise"
  "def-scalar-and-vector-line-integrals-along-piecewise-c1-paths": "mathematical-premise"
  "def-surface-integral-on-a-compact-c-one-hypersurface": "mathematical-premise"
  "thm-continuous-functions-on-compact-jordan-sets-are-integrable": "mathematical-premise"
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
      locator: "Section 5.2.2 printed pp. 215-217 (Example 5.5: the field of a long straight wire (5.36)) and Section 5.3.3 printed pp. 226-228 (Example 5.7 the straight wire and Example 5.9 the infinite solenoid, with the field $\\mu_0nI$ inside and zero outside); read in the stamped scanned full text."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Sections 3.1.1-3.1.2 printed pp. 42-46 (the wire field $B=\\mu_0I/(2\\pi r)$, the surface-current discontinuity (3.5)-(3.6) and the solenoid $B=\\mu_0IN\\hat z$ (3.7)); read in the stamped 236-page PDF."
    - title: "W. C. Chew, Lectures on Electromagnetic Field Theory, Purdue University (Fall 2020, 497 pp.)"
      url: "https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf"
      locator: "Lecture 4 Section 4.3.3 printed pp. 46-48 (the Ampere-law jump condition at a current sheet) and Section 4.3.4 printed p. 48 (the normal-$B$ continuity); read in the stamped full text."
physical_scope: "Explicit verification of the two declared ideal noncompact source models, the infinite straight wire and the infinite cylindrical current sheet (ideal solenoid). The models carry declared symmetry and decay data; they are not finite-energy localised-current theorems, nothing is claimed about self-energy, inductance or self-forces, and no measurement, apparatus or statistical inference is involved."
---

## Example

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]].

**(a) [Ideal infinite straight wire].** Let $\gamma(s)=(0,0,s)$, $s\in\mathbb R$, let $J_{\rm w}$ be the declared ideal line current of amplitude $I$ along $\gamma$ ([[def-em-steady-current-regime]](c2)), and define, on $\mathbb R^3\setminus\gamma$,
$$B(x):=\frac{\mu_0I}{2\pi\rho}\,e_\varphi,\qquad \rho=\sqrt{x_1^2+x_2^2},\qquad e_\varphi=\rho^{-1}(-x_2,x_1,0).$$
Then $B$ is locally integrable on $\mathbb R^3$ and of class $C^\infty$ off $\gamma$; $\operatorname{div}B=0$ and $\operatorname{curl}B=0$ pointwise off $\gamma$; $B$ is invariant under translations along $\gamma$ and rotations about it, and its transverse far-zone supremum tends to $0$ as $\rho\to\infty$; for every $r>0$ and $h\in\mathbb R$, the circulation of $B$ along $\gamma_{r,h}(t)=(r\cos t,r\sin t,h)$, $0\le t\le2\pi$, traversed once with increasing $t$, is $\mu_0I$ ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]); and $\operatorname{div}B=0$, $\operatorname{curl}B=\mu_0J_{\rm w}$ hold in the distributional sense of [[def-em-steady-current-regime]](c4). Hence $B$ is an admitted field of the declared wire model; the transverse decay excludes an added homogeneous longitudinal field, and no further selection, uniqueness or energy claim is made.

**(b) [Ideal infinite cylindrical sheet].** Let $a>0$, $S=\{\rho=a\}$, $K\in\mathbb R$, let $J_S$ be the declared ideal sheet current of amplitude $K$ along $S$ ([[def-em-steady-current-regime]](c3)), and define $B:=\mu_0Ke_3$ for $\rho<a$ and $B:=0$ for $\rho>a$. Then $B$ is locally integrable on $\mathbb R^3$ and of class $C^\infty$ off $S$; $\operatorname{div}B=0$ and $\operatorname{curl}B=0$ pointwise off $S$; $B$ has the declared symmetry (translations along and rotations about the axis) and its transverse far-zone supremum is $0$; the one-sided jump across $S$, with $n=e_\rho$ from the interior to the exterior and $[B]=B_+-B_-$, is $n\times[B]=\mu_0Ke_\varphi$ and $n\cdot[B]=0$, the stationary tangential-sheet jump for this noncompact cylinder, established by the test-localized [[lem-em-ideal-cylindrical-sheet-field]] for the current density $Ke_\varphi$ (computed directly as $e_\rho\times(0-\mu_0Ke_3)=\mu_0Ke_\varphi$); and $\operatorname{div}B=0$, $\operatorname{curl}B=\mu_0J_S$ hold in the distributional sense of [[def-em-steady-current-regime]](c4). Hence $B$ is an admitted field of the declared solenoid model.

**(c) [Scope].** Both models are declared noncompact idealisations: they are not finite-energy localized-current theorems; nothing is asserted about self-energy, inductance, self-force, the fields on the sources, or the approximation of any physical apparatus; and the fields are selected within the declared symmetry and decay class, not shown to be the only solutions of the magnetostatic equations off the sources without that class. The external force between two such wires is treated in [[ex-em-wire-force-coupling]] under the adopted thin-wire coupling.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$; let the ideal line current $J_{\rm w}$ and the ideal sheet current $J_S$ be the declared objects of [[def-em-steady-current-regime]](c2) and (c3); let $B$ be the fields defined in (a) and (b) of the Example.

[F1] The field $f:=\rho^{-1}e_\varphi$ on $\mathbb R^3\setminus\gamma$ is locally integrable, is $C^\infty$ off $\gamma$ with $\operatorname{div}f=\operatorname{curl}f=0$ there, has circulation $2\pi$ along each positively oriented circle $\gamma_{r,h}$ defined in (a), and satisfies $\langle\operatorname{curl}T_f,\psi\rangle=2\pi A(\psi)$ with $A(\psi)=\int_{\mathbb R}\psi_3(0,0,x_3)\,dx_3$ and $\langle\operatorname{div}T_f,\varphi\rangle=0$ for all scalar and vector tests ([[lem-em-ideal-line-current-field]]).

[F2] The piecewise constant field $g=e_3\mathbf 1_{\{\rho<a\}}$ extended by zero outside the cylinder satisfies $\langle\operatorname{curl}T_g,\psi\rangle=\int_S e_\varphi\cdot\psi\,dS$ and $\langle\operatorname{div}T_g,\varphi\rangle=0$ for all tests, with the one-sided values satisfying $g_+-g_-=-e_3$, $e_\rho\times(g_+-g_-)=e_\varphi$ and $e_\rho\cdot(g_+-g_-)=0$ ([[lem-em-ideal-cylindrical-sheet-field]]).

[F3] The declared line current acts as $\langle J_{\rm w},\psi\rangle=I\int_{\mathbb R}\psi_3(0,0,s)\,ds$ and the declared sheet current as $\langle J_S,\psi\rangle=K\int_S e_\varphi\cdot\psi\,dS$ ([[def-em-steady-current-regime]](c2)-(c3)), and the admissibility predicate (c4) requires local integrability, $C^1$ regularity and vanishing divergence and curl off the source, the two global distributional identities, the declared symmetry and the stated decay ([[def-em-steady-current-regime]]).

[F4] The cross product and the identities $e_3\times e_\rho=e_\varphi$, $e_\rho\times e_3=-e_\varphi$ hold ([[def-cross-product-in-r3]]); divergence and curl are the coordinate expressions of [[def-divergence-and-curl-of-a-c1-vector-field]]; the circulation is the vector line integral of [[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]; surface integrals over the cylinder are those of [[def-surface-integral-on-a-compact-c-one-hypersurface]], with the compact-face area computed through the Riemann integral of [[def-riemann-integral-over-a-jordan-set]] and [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]].

[F5] The physical reading of these declared ideal models is the separate adopted assumption [[post-em-ideal-magnetostatic-models]], which asserts no existence, uniqueness, finite self-energy, force, self-force or apparatus accuracy ([[post-em-ideal-magnetostatic-models]]).

[F6] $\mathrm{AC}_\omega$ is the countable-choice principle assumed here and inherited by the cited measure, surface, regular-distribution and Newtonian interfaces ([[def-countable-choice]]).

## Verification

**Proof technique:** direct; the two explicit fields are scalar multiples of the fields of the two mathematical lemmas, so their pointwise, symmetry and distributional properties transport, and the admissibility predicate is then checked clause by clause.

1.1 The field of (a) is $B=\frac{\mu_0I}{2\pi}f$ with $f=\rho^{-1}e_\varphi$; by [F1] it is locally integrable on $\mathbb R^3$ and $C^\infty$ off $\gamma$, with $\operatorname{div}B=\operatorname{curl}B=0$ pointwise off $\gamma$, and all these properties are stable under multiplication by the constant $\frac{\mu_0I}{2\pi}$. [given, F1]

1.2 The field of (b) is $B=\mu_0Kg$ with $g$ the piecewise constant cylinder field: it is bounded, hence locally integrable, constantly $\mu_0Ke_3$ for $\rho<a$ and $0$ for $\rho>a$, so it is $C^\infty$ off $S$ with $\operatorname{div}B=\operatorname{curl}B=0$ there; it is invariant under translations along and rotations about the third axis, and its supremum on any compact set of cross-sectional parameters is $0$ for every $\rho>a$, hence its transverse far-zone supremum is $0$. [given, F2]

2.1 For the wire, $\langle\operatorname{curl}T_B,\psi\rangle=\frac{\mu_0I}{2\pi}\langle\operatorname{curl}T_f,\psi\rangle=\mu_0I\,A(\psi)=\mu_0\langle J_{\rm w},\psi\rangle$ and $\langle\operatorname{div}T_B,\varphi\rangle=0$ for all tests by [F1] and [F3]; moreover $B$ depends only on $\rho$ through the scalar factor $\frac{\mu_0I}{2\pi\rho}$ multiplying $e_\varphi$, so it is invariant under translations along $\gamma$ and rotations about it, and its transverse far-zone supremum is $\frac{\mu_0|I|}{2\pi\rho}\to0$. The circulation of $B$ along the increasing-$t$ traversal $\gamma_{r,h}$ of (a) is $\frac{\mu_0I}{2\pi}$ times the circulation $2\pi$ of $f$, that is $\mu_0I$, by [F1] and the linearity of the line integral [F4]. [step 1.1, F1, F3, F4]

2.2 For the sheet, $\langle\operatorname{curl}T_B,\psi\rangle=\mu_0K\langle\operatorname{curl}T_g,\psi\rangle=\mu_0K\int_S e_\varphi\cdot\psi\,dS=\mu_0\langle J_S,\psi\rangle$ and $\langle\operatorname{div}T_B,\varphi\rangle=0$ for all tests by [F2] and [F3]. The one-sided values across $S$ are $B_+=0$ and $B_-=\mu_0Ke_3$ in the direction from the interior to the exterior, so $[B]=B_+-B_-=-\mu_0Ke_3$ and, by [F4], $n\times[B]=e_\rho\times(-\mu_0Ke_3)=\mu_0Ke_\varphi$ and $n\cdot[B]=0$; this is the jump displayed in (b), computed directly from the one-sided values of the declared field. [step 1.2, F2, F3, F4]

3.1 For the wire, every clause of the admissibility predicate [F3](c4) holds: local integrability and off-source $C^\infty$ regularity from step 1.1, the two pointwise vanishing identities off $\gamma$ from step 1.1, the two distributional identities and the line-measure value from step 2.1, the translation and rotation symmetry from step 2.1, and the transverse decay from step 2.1. Hence the field of (a) is admitted for the declared wire model; the decay requirement is what rules out adding a constant longitudinal field, and nothing else is claimed. [step 1.1, step 2.1, F3]

3.2 For the sheet, every clause of [F3](c4) holds: local integrability, off-source $C^\infty$ regularity, the two pointwise vanishing identities and the symmetry and the vanishing transverse far-zone supremum from step 1.2, and the two distributional identities from step 2.2, with the one-sided jump of step 2.2 as the interface content. Hence the field of (b) is admitted for the declared solenoid model. [step 1.2, step 2.2, F3]

4.1 Steps 3.1 and 3.2 prove that both explicit fields are admitted under the predicate (c4) of [F3]; the physical reading of the declared models is the separate adopted assumption [F5], which adds no existence, uniqueness, self-energy, inductance, force or apparatus claim. Both models are declared noncompact idealisations: no finite-energy or localized-current conclusion is drawn, nothing is asserted on the sources, and the fields are selected within the declared symmetry and decay class rather than shown to be the only solutions off the sources. Countable Choice is inherited only through the cited measure, surface, regular-distribution and Newtonian interfaces [F6]; no stronger choice principle occurs. [step 3.1, step 3.2, F3, F5, F6] ∎

## Source notes

Griffiths, Example 5.5 and Examples 5.7 and 5.9, printed pp. 215-217 and 226-228, evaluates the wire field $\mu_0I/(2\pi r)$ and the infinite-solenoid field $\mu_0nI$ inside and zero outside; Tong, Sections 3.1.1-3.1.2, printed pp. 42-46, gives the wire field, the surface-current discontinuity (3.5)-(3.6) and the solenoid field (3.7); Chew, Lecture 4 Section 4.3.3-4.3.4, printed pp. 46-48, gives the current-sheet jump and the normal-field continuity. The verification above is the exact ideal-model check against the framework's admissibility predicate; no measurement, apparatus or uncertainty is involved, and the idealizations are not claimed to describe any real conductor or coil.
