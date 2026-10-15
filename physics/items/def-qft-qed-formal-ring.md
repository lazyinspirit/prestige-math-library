---
id: def-qft-qed-formal-ring
kind: definition
title: Finite matrix formal kernel and inverse series
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-qft-qed-gauge-data
  - def-qft-qed-finite-graph-gauge-data
dependency_roles:
  def-qft-qed-gauge-data: mathematical-premise
  def-qft-qed-finite-graph-gauge-data: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: David Tong, Quantum Field Theory, §§6.1.1 and 6.4–6.5
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted Chapter 6 HTML; local U(1) gauge convention and finite-dimensional QED propagator/rule symbols.
    - title: Mark Srednicki, Quantum Field Theory, §§44 and 67
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted draft; finite Grassmann Gaussian conventions and QED Ward-identity context, printed pp. 276–281 and 400–401.
---

## Definition

For a formal indeterminate $z$, let $\mathbb C\llbracket z\rrbracket$ be the commutative ring of sequences $(a_0,a_1,\ldots)$ written $\sum_{n\ge0}a_nz^n$, with coefficientwise addition and Cauchy-product multiplication. No convergence of a numerical series is part of this definition. For $d\ge1$, matrices over $\mathbb C\llbracket z\rrbracket$ use the usual finite matrix addition and multiplication.

Use the finite graph phase data of [[def-qft-qed-finite-graph-gauge-data]] and the QED $U(1)$, Clifford, and natural-unit conventions of [[def-qft-qed-gauge-data]]. Let $K_0(\zeta)\in GL_d(\mathbb C)$ be an invertible base matrix and let $V(\zeta)\in M_d(\mathbb C)$ be its finite link-hopping matrix. The admissible covariant families satisfy
$$ K_0(\zeta^\theta)=D_\theta K_0(\zeta)D_\theta^{-1},\qquad V(\zeta^\theta)=D_\theta V(\zeta)D_\theta^{-1}. $$
The scalar base $K_0=mI_d$, $m\in\mathbb C\setminus\{0\}$, is an explicit admissible case. Define
$$ K(z;\zeta):=K_0(\zeta)+zV(\zeta),\qquad S(z;\zeta):=\sum_{n=0}^{\infty}(-zK_0(\zeta)^{-1}V(\zeta))^nK_0(\zeta)^{-1}. $$
The coefficient of each power $z^n$ in $S$ is one finite matrix. The item defines this formal candidate; the following lemma proves its two-sided inverse and covariance properties. Define $\det A$ for a finite matrix $A$ over $\mathbb C\llbracket z\rrbracket$ by the Leibniz formula $\det A=\sum_{\sigma\in S_d}\operatorname{sgn}(\sigma)\prod_{j=1}^d A_{j,\sigma(j)}$.

## Remarks

The draft carrier for [[def-qft-qed-gauge-data]] is present and fixes the $(-+++)$ spacetime convention, the gamma-matrix convention, the natural charge $g$, and $D_a=\partial_a-ig a_a$. The current qft-mg01 manifest lists its draft items; this definition remains conditional on their mathematical conventions. The finite graph angle $\theta$ is an independent real vertex tuple. If a real vertex tuple $\alpha$ is separately assigned, one may set $\theta_x=g\alpha_x$ numerically, but no graph-to-spacetime embedding or evaluation of a spacetime gauge function at a vertex is supplied. This definition asserts no continuum kernel, convergence, or loop-distribution claim.
