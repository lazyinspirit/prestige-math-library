---
id: ex-emgmath-monopole-patch-flux
kind: example
title: "Nonexact sphere flux and circle winding"
status: draft
origin: pipeline
domain: mathematics
physical_scope: null
dependency_level: 5
deps:
  - lem-emg-sphere-flux-holonomy
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
dependency_roles:
  lem-emg-sphere-flux-holonomy: mathematical-premise
  def-emg-finite-real-supremum-domain: mathematical-premise
  def-emg-real-metric-axiom-convention: mathematical-premise
  lem-emg-metric-axioms-imply-nonnegativity: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-sequence-limit-criterion-with-choice: mathematical-premise
  def-emg-boundaryless-completeness-domain: mathematical-premise
  def-emg-set-size-and-class-schema: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Gauge Theory, Cambridge Part III lecture notes (2018), section 1.1.2"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "Section 1.1.2, 'A Patchwork of Gauge Fields,' printed pp. 6–8 (PDF pp. 16–18), local monopole potentials and their transition."
    - title: "Scott Morrison, Connections on Principal Fibre Bundles (2000)"
      url: "https://tqft.net/papers/ConnectionsAndBundles.pdf"
      locator: "Sections 5.1 and 7.1–7.3, printed pp. 8–15 (PDF pp. 7–16), principal connection and its local representatives."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Use the conditional, still-escalated draft result [[lem-emg-sphere-flux-holonomy]] with $b=\kappa_0/2$. Its authored supplier status and remaining external closure obligation are recorded below; no independent proof acceptance is asserted. The local potentials are

$$
A_N=\frac{\kappa_0}{2}(1-\cos\theta)\,d\phi,\qquad A_S=-\frac{\kappa_0}{2}(1+\cos\theta)\,d\phi.
$$

They have common curvature $F=\frac{\kappa_0}{2}\sin\theta\,d\theta\wedge d\phi$, flux $2\pi\kappa_0$, and transition $g_{NS}=e^{-i\phi}$ of winding number $-1$ under the north-to-south convention. The example is a mathematical circle-connection patch model. It is not an observation of a magnetic monopole and makes no quantum or empirical claim.

## Facts & Assumptions

**Given:** The exact punctured-domain two-form, smooth patch potentials, circle normalization and transition convention of [[lem-emg-sphere-flux-holonomy]].

[A1] This example retains the reserved EMG-MG01 dependency interfaces: finite-real supremum and infimum domain; finite-valued metric and pseudometric conventions with metric nonnegativity proved; rational-root and real-power domains; the sequence criterion under exactly ACω; boundaryless metric and geodesic completeness domains; and set-sized objects/definable-class schemas under power-set and separation. Their exact hypotheses and conventions are at anchors #supremum-domain, #metric-definition, #metric-nonnegativity, #power-domain, #heine-choice, #boundaryless-domain, and #category-size in research/extended-frameworks-2026-10-03/einstein-maxwell-models/foundational-replacements.md. Those typed carriers are now authored earlier on emg-mg02, preserving the exact interfaces. This verification asserts no independent acceptance.

[L1] [[lem-emg-sphere-flux-holonomy]]: conditionally, the displayed sphere flux is $4\pi b$, the local potentials differ by $-2b\,d\phi$, and the normalized transition is $e^{-2ib\phi/\kappa_0}$ with integer winding when single-valued. The source is an authored draft with complete local calculations; no independent acceptance is asserted.


## Verification

1.1 Under the exact planned conditional interfaces in [A1], substitute $b=\kappa_0/2$ into the flux $4\pi b$ from [L1] to obtain $\int_{S^2}F=2\pi\kappa_0$ and hence $\int_{S^2}F/(2\pi\kappa_0)=1$. [given, A1, L1, algebra]

2.1 The same substitution gives $A_S-A_N=-\kappa_0\,d\phi$ and $g_{NS}=e^{-i\phi}$. As $\phi$ runs from $0$ to $2\pi$, this transition makes one negative turn, so its winding number is $-1$. [given, L1, step 1.1, algebra]

3.1 The transition is single-valued because $e^{-i(\phi+2\pi)}=e^{-i\phi}$; the local forms are smooth at their respective poles and both differentiate to $F$. By [[lem-emg-sphere-flux-holonomy]], the nonzero flux rules out a global potential. The calculation is conditional mathematical verification, not evidence about nature. [given, L1, step 2.1, algebra] ∎

