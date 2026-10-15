---
id: lem-qft-example-dirac-pauli-square
kind: lemma
title: Minimal Dirac magnetic square and formal Pauli benchmark
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-qft-example-data
  - lem-qft-example-spin-trace-completeness
dependency_roles:
  def-qft-example-data: mathematical-premise
  lem-qft-example-spin-trace-completeness: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Mark Srednicki, Quantum Field Theory, author-posted prepublication draft, section 64
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted textbook draft; printed pp. 383–385, minimally coupled Dirac electron and tree plus radiative magnetic-moment coefficients.
    - title: David Tong, Quantum Field Theory, Chapter 4, sections 4.3 and 4.7
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S4.html
      locator: Complete author-hosted HTML chapter; Clifford matrices, Dirac equation, Pauli spinors, and positive-/negative-frequency solutions.
---

## Statement

Let $m>0$ be a particle mass in kilograms, $q\in\mathbb R$ its charge in coulombs, and $A:\mathbb R^3\to\mathbb R^3$ a smooth spatial vector potential with components in tesla-metres. Set $B_k=\epsilon_{kij}\partial_iA_j$ and define on the common core $\mathcal C=C_c^\infty(\mathbb R^3;\mathbb C^4)$
$$\pi_i=-i\hbar\partial_i-qA_i,\qquad H_D=c\sum_i\alpha_i\pi_i+\beta mc^2,\qquad \Sigma_i=\operatorname{diag}(\sigma_i,\sigma_i).$$
Here the matrices are those of [[lem-qft-example-spin-trace-completeness]] and $\hbar,c$ have the SI conventions of [[def-qft-example-data]]. These differential maps preserve $\mathcal C$, and on $\mathcal C$,
$$[\pi_i,\pi_j]=iq\hbar\epsilon_{ijk}B_k,\qquad H_D^2=m^2c^4I_4+c^2(\boldsymbol\pi^2-q\hbar\boldsymbol\Sigma\cdot\mathbf B).$$
If the formal first-order square-root coefficient is written as $mc^2+K/(2m)$ with $K=\boldsymbol\pi^2-q\hbar\boldsymbol\Sigma\cdot\mathbf B$, then its spin term is $-(q/m)\mathbf S\cdot\mathbf B$, where $\mathbf S=\hbar\boldsymbol\Sigma/2$. Under the coefficient convention $H_{\mathrm{mag}}=-\boldsymbol\mu_{\mathrm{mag}}\cdot\mathbf B$ and $\boldsymbol\mu_{\mathrm{mag}}=g_s(q/(2m))\mathbf S$, equality of the formal coefficients as a linear function of $q$ gives $g_s=2$ for the minimal tree-level term. No magnetic self-adjoint closure, full spectrum, operator square-root theorem, radiative correction, or empirical prediction is asserted.

## Facts & Assumptions

**Given:** Assume $m>0$, smooth $A$, and the common compactly supported smooth core $\mathcal C$. Use the explicit finite Dirac matrices and the SI constants and gauge-unit conventions stated above.

[F1] [[lem-qft-example-spin-trace-completeness]]: the Hermitian Pauli/Dirac blocks satisfy $\alpha_i\alpha_j=\delta_{ij}I_4+i\epsilon_{ijk}\Sigma_k$ and $\alpha_i\beta=-\beta\alpha_i$.

[F2] [[def-qft-example-data]]: $c$ is in metres per second, $\hbar$ is in joule-seconds, $q$ is in coulombs, and spatial $A_i$ is in tesla-metres.

## Proof

1.1 For $\psi\in\mathcal C$, expand $\pi_i\pi_j\psi-\pi_j\pi_i\psi$. The second derivatives and products $A_iA_j$ cancel; the remaining derivative terms are $iq\hbar(\partial_iA_j-\partial_jA_i)\psi=iq\hbar\epsilon_{ijk}B_k\psi$. Smoothness of $A$ ensures each multiplication and differentiation maps $\mathcal C$ to itself. [given, F2, algebra]

2.1 Expand $(\boldsymbol\alpha\cdot\boldsymbol\pi)^2=\alpha_i\alpha_j\pi_i\pi_j$. The $\delta_{ij}$ term in [F1] is $\boldsymbol\pi^2$. Its antisymmetric term is
$$\frac{i}{2}\epsilon_{ijk}\Sigma_k[\pi_i,\pi_j] =-\frac{q\hbar}{2}\epsilon_{ijk}\epsilon_{ij\ell}\Sigma_kB_\ell =-q\hbar\boldsymbol\Sigma\cdot\mathbf B,$$
because $\epsilon_{ijk}\epsilon_{ij\ell}=2\delta_{k\ell}$. The cross terms with $\beta mc^2$ cancel by $\alpha_i\beta+\beta\alpha_i=0$, and $\beta^2=I_4$. This proves the displayed square identity on $\mathcal C$; no product outside that core is used. [step 1.1, F1, algebra]

3.1 In the formal expansion parameter $t$, let $E(t)=mc^2+t\,aK+O(t^2)$ and require $E(t)^2=m^2c^4+t\,c^2K+O(t^2)$. Comparing the coefficient of $t$ gives $2mc^2aK=c^2K$, hence $a=1/(2m)$ since $m>0$. The spin part of $K/(2m)$ is $-q\hbar\boldsymbol\Sigma\cdot\mathbf B/(2m)=-(q/m)\mathbf S\cdot\mathbf B$. [step 2.1, given, algebra]

4.1 The coefficient of the term linear in $q$ is $-(q/m)\mathbf S\cdot\mathbf B$. Equating it with $-g_s(q/(2m))\mathbf S\cdot\mathbf B$ as a formal coefficient identity gives $g_s=2$, including the zero-charge specialization of that identity. This is only a formal lowest-order coefficient comparison, not an operator or empirical conclusion. [step 3.1, given, algebra] ∎
