---
id: ex-qftmath-x09
kind: example
title: Formal Dirac spin coefficient in a uniform field
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - lem-qft-example-dirac-pauli-square
dependency_roles:
  lem-qft-example-dirac-pauli-square: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Mark Srednicki, Quantum Field Theory, author-posted prepublication draft, section 64
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted textbook draft; printed pp. 383–385, minimal Dirac magnetic term and electron g-factor.
    - title: David Tong, Quantum Field Theory, Chapter 4, section 4.7
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S4.html
      locator: Complete author-hosted HTML chapter; finite Dirac spinors and Pauli spin basis.
---

## Facts & Assumptions

**Given:** Use the formal spin term and magnetic-moment convention of [[lem-qft-example-dirac-pauli-square]]. Let $q=-e$ with $e>0$, take $\mathbf B=B_0\mathbf e_3$ with $B_0>0$, and use the Pauli eigenvectors of $\sigma_3$.

[F1] [[lem-qft-example-dirac-pauli-square]]: the formal magnetic term is $-(q/m)\mathbf S\cdot\mathbf B$ with $\mathbf S=\hbar\boldsymbol\Sigma/2$ and the minimal coefficient convention has $g_s=2$.

## Example

The two spin eigenvalues give opposite energy coefficients in the same uniform field. Their gap matches the cyclotron angular-frequency coefficient for charge magnitude $e$ and mass $m$.

## Verification

1.1 With $q=-e$, the supplier's term is $(e/m)S_3B_0$. Since $\sigma_3$ has eigenvalues $\pm1$, $S_3$ has eigenvalues $\pm\hbar/2$, so the two coefficients are $\pm e\hbar B_0/(2m)=\pm\mu_BB_0$, where $\mu_B=e\hbar/(2m)$. Their gap is $e\hbar B_0/m$. [given, F1, algebra]

2.1 Dividing that energy gap by $\hbar$ gives angular frequency $eB_0/m$, and dividing by $2\pi$ gives cyclic frequency $\nu_s=eB_0/(2\pi m)$. The classical cyclotron coefficient for charge magnitude $e$ in the same uniform field is $\nu_c=eB_0/(2\pi m)$ by its defining relation. This compares formal coefficients only; it is not a full Landau-spectrum result or an empirical prediction. [step 1.1, F1, algebra] ∎
