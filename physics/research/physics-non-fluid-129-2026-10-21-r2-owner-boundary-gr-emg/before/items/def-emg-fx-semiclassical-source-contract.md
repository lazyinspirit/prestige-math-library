---
id: def-emg-fx-semiclassical-source-contract
kind: definition
title: "Conditional semiclassical Einstein–Maxwell source contract"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - lem-emg-maxwell-stress-divergence
dependency_roles:
  lem-emg-maxwell-stress-divergence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "L. H. Ford, Quantum Field Theory in Curved Spacetime, lecture notes (1997), Chapter 3 and §5.1"
      url: "https://arxiv.org/pdf/gr-qc/9707062"
      locator: "Chapter 3, printed pp. 18–20 (PDF pp. 19–21), point-separation renormalization, curvature counterterms, and the semiclassical equation; §5.1, printed pp. 32–34 (PDF pp. 33–35), state fluctuations and limitations. The source contract here is only an abstract interface, not a construction."
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes (2019), §§4.5.2–4.5.3"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
      locator: "§§4.5.2–4.5.3, printed pp. 183–185 (PDF pp. 190–192), Einstein equations with matter, the divergence-free stress condition, and the Maxwell Hilbert tensor."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Chapter 3, equations (3.93)–(3.96), and Chapter 4, equations (4.68)–(4.70): the contracted Bianchi identity and Einstein source convention. No quantum-state or renormalization construction is imported."
---

## Definition

Fix a smooth oriented, time-oriented Lorentzian four-manifold $(M,g)$ with signature $(-,+,+,+)$, the metric-selected connection $\nabla$, a smooth real two-form $F$, and constants $\mu_0>0$ and $c>0$ in the inherited SI bookkeeping convention. A unital complex $*$-algebra $\mathfrak A_{g,F}$ means an associative complex algebra with unit $1$ and an antilinear involution satisfying $(AB)^*=B^*A^*$ and $1^*=1$. A state on this algebra means a complex-linear functional $\omega$ such that $\omega(1)=1$ and $\omega(A^*A)\ge0$ for every $A\in\mathfrak A_{g,F}$. Choose a specified state class $\mathscr S_{g,F}$ of such states, with any additional regularity conditions stated as part of that choice.

A renormalization prescription $\mathcal R$ is a fixed item of input recording the subtraction rule, scale, and finite local counterterms used for the source assignments. A candidate assignment consists of maps
$$\omega\longmapsto T_{\mathcal R}[g,F,\omega]\in\Gamma(\operatorname{Sym}^2T^*M),\qquad \omega\longmapsto j_{\mathcal R}[g,F,\omega]\in\Gamma(TM),$$
for $\omega\in\mathscr S_{g,F}$, with smooth spacetime fields. In the inherited SI bookkeeping, $F$ has units $\mathrm{Wb\,m^{-2}}$, $j_{\mathcal R}$ has units $\mathrm{A\,m^{-2}}$, and $T_{\mathcal R}$ has units $\mathrm{J\,m^{-3}}$; these are formal units, not observations. The maps may depend nonlocally on the state.

The assignment is **contract-admissible** when, for every $\omega\in\mathscr S_{g,F}$,
$$\nabla_a j_{\mathcal R}^{a}=0,\qquad \nabla^a T_{\mathcal R,ab}=F_{bc}j_{\mathcal R}^{c}.$$
The current convention is the one in which the classical sourced Maxwell equation is $\nabla_aF^{ab}=-\mu_0j^b$ and the Maxwell stress divergence is $\nabla^aT^{\mathrm{EM}}_{ab}=-F_{bc}j^c$. The identities displayed in this definition are interface conditions; they do not construct $\mathfrak A_{g,F}$, $\mathscr S_{g,F}$, $\mathcal R$, or either source map, and they do not assert that any assignment is contract-admissible.

## Definition references

[[lem-emg-maxwell-stress-divergence]]

## Facts & Assumptions

**Given:** A smooth Lorentzian background, smooth $F$, positive $\mu_0,c$, a specified algebra and state class, a fixed renormalization prescription, and source maps of the tensor types stated in the Definition.

[F1] [[lem-emg-maxwell-stress-divergence]] fixes the current sign and formal units: $\nabla_aF^{ab}=-\mu_0j^b$ gives $\nabla_aT_{\mathrm{EM}}^{ab}=-F^{bc}j_c$ for the Maxwell Hilbert tensor. Lowering the free index gives the opposite exchange term required for the additional source.

[A1] The state algebra, state class, renormalization prescription, and source maps are supplied as candidate data. No existence, uniqueness, Hadamard property, locality, or quantum-field construction is assumed by this definition.

## Proof

1.1 For each chosen state, $j_{\mathcal R}$ is a vector field, so $\nabla_a j_{\mathcal R}^a$ is a scalar field. The divergence $\nabla^aT_{\mathcal R,ab}$ and contraction $F_{bc}j_{\mathcal R}^c$ are both covector fields. Their equalities are therefore well-typed tensor equations on $M$. [given, F1, A1, algebra]

2.1 Tensor contraction and covariant differentiation are coordinate-independent, so the two conditions have the same truth value in every chart. Requiring them for each element of the supplied state class defines a predicate on the supplied renormalization and source-assignment data. This proves the contract is mathematically well-defined without constructing any such data or asserting that the predicate is satisfied. [given, F1, A1, step 1.1, algebra] ∎

## Remarks

The state class and renormalization prescription are part of the interface, not suppressed choices. A concrete QFT application must supply them and prove that its source maps have the stated regularity and identities. Nonlocal state dependence and higher-curvature counterterms can change the differential order of the coupled equations; order reduction is a separate approximation. Hawking spectra, KMS/Unruh states, generalized entropy, and black-hole thermodynamic laws are contextual applications, not prerequisites here.
