---
id: def-sr-stress-energy-tensor-and-force-density
kind: definition
title: "Stress-energy tensor, force density and local balance on flat spacetime"
status: draft
origin: pipeline
domain: mathematics
deps: [def-sr-affine-minkowski-model, def-ck-tensor-field-on-minkowski-space, thm-sr-tensor-and-current-transformation, def-directional-and-partial-derivatives, def-lorentz-form-and-inertia, def-inertial-frame-and-inertial-chart]
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
  thm-sr-tensor-and-current-transformation: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Chapter 9 pp. 179-197: 9.1 pp. 179-182 (current vector, flux, charge conservation), 9.2 pp. 183-191 (stress-energy tensor, conservation and flux, symmetry, dust, rank-2 transformation law, pressure, perfect fluid, worked examples, energy conditions), 9.3 pp. 192-197 (Gauss's theorem, integral conservation laws, the energy-momentum vector, angular momentum); the printed 9.2.8 dominant energy condition p. 191 has the defective |P| > rho and is not used"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "D. Tong, General Relativity, University of Cambridge Part III Mathematical Tripos (Michaelmas Term 2019); c = 1 formulas converted to x^0 = c t; 4.5.1-4.5.5 printed pp. 181-191: scalar-field action (4.42)-(4.43) and equation of motion, Hilbert energy-momentum tensor (4.46), diffeomorphism invariance and conservation (4.50), flat-space Noether form, scalar tensor (4.51), Maxwell tensor (4.52), perfect fluid (4.53) with conservation equations (4.54)-(4.55), and the flat-space conserved-charge box argument of 4.5.5"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 printed pp. 28-30 (energy-momentum tensor, dust T^{mu nu}=rho U^mu U^nu (1.106), perfect fluid (1.107)-(1.110), scalar and Maxwell tensors (1.111)-(1.112), conservation (1.113) with the remark that the proof follows from each matter model's equations of motion) and Chapter 5 printed pp. 138-139 (on-shell conservation from diffeomorphism invariance with compact-support variations, (5.34)-(5.38))"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Definition

Let $(A,V,\eta,C^+)$ be the affine Minkowski model ([[def-sr-affine-minkowski-model]]), fix an independent numerical parameter $c>0$, and let $\Omega\subseteq A$ be a nonempty open set.

(a) A **stress-energy tensor** on $\Omega$ of class $C^k$, $k\ge0$ (with $C^0$ meaning continuous), is a $C^k$ symmetric type-$(2,0)$ tensor field $T$ on $\Omega$ in the sense of [[def-ck-tensor-field-on-minkowski-space]]: at every $p\in\Omega$ the map $T(p):V^*\times V^*\to\mathbb R$ is bilinear and symmetric, so in every inertial chart its components satisfy $T^{ab}=T^{ba}$ ([[thm-sr-tensor-and-current-transformation]]\,(iii)).

(b) In each inertial chart $x$ of the model ([[def-inertial-frame-and-inertial-chart]]) define the component families $\varepsilon_x:=T^{00}$, $\pi_x^i:=T^{0i}/c=T^{i0}/c$ and $S_x^{ij}:=T^{ij}$. These are numerical component and scaling conventions involving the fixed positive number $c$; their transformation behaviour is inherited from $T$ and no physical units or measurement interpretation form part of this mathematical definition.

(c) When $k\ge1$, the **four-force density** of $T$ is the $C^{k-1}$ field whose inertial components are $f^b:=\partial_aT^{ab}$, where $\partial_a$ are the coordinate partial derivatives of [[def-directional-and-partial-derivatives]] and the sum over $a$ is the standard contraction of a contravariant index with a coordinate derivative. The components $\partial_aT^{ab}$ transform as a vector, so $f$ is a well-defined vector field on $\Omega$ independent of the inertial chart: under an inertial transition $x'=\Lambda x+a$ the components satisfy $\partial'_aT'^{ab}=\Lambda^b{}_d\,\partial_cT^{cd}$ ([[thm-sr-tensor-and-current-transformation]]\,(iv)), which is exactly the vector transformation law of clause (i) applied to the components $f^b$. For $k\ge1$ one says that $T$ is **locally conserved**, or **balanced**, on $\Omega$ when $f=0$ on $\Omega$, and that $T$ is **balanced against the four-force density** $f$ when $\partial_aT^{ab}=f^b$.

(d) The definition asserts no conservation of any prescribed symmetric field $T$: whether a given $T$ is conserved, whether it arises from an action or a matter model, and whether any of its integrals over a slice converges are separate hypotheses stated elsewhere. No choice principle is used. For a merely continuous tensor ($k=0$) the component conventions and pointwise contractions of (b) are defined, while the divergence, the four-force density and the balance terminology of (c) require the additional $C^1$ hypothesis; no derivative of a merely continuous field is asserted.

## Remarks

The symmetry condition in (a) is chart-independent by the rank-two component law ([[thm-sr-tensor-and-current-transformation]]\,(iii)): if $T^{ab}=T^{ba}$ in one inertial chart, then $T'^{ab}=\Lambda^a{}_c\Lambda^b{}_dT^{cd}=\Lambda^b{}_d\Lambda^a{}_cT^{dc}=T'^{ba}$ in every other. The constants $\varepsilon_x,\pi_x,S_x$ of (b) are numerical component conventions only; the physical readings of such components — energy density, momentum density, stress, force density — are model premises adopted separately in [[post-sr-matter-models-and-evolution]] and used in [[pthm-sr-local-stress-energy-conservation]]. Nothing in this definition requires the metric contraction $\eta_{ab}T^{ab}$ to have a sign, requires any energy condition, or asserts that a locally conserved field is the total stress-energy of an isolated system.
