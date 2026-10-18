---
id: lem-it-quantum-and-private-information-product-additivity
kind: lemma
title: Product additivity of coherent and private information
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-it-quantum-channel-complement-and-coherent-information
  - def-it-quantum-channel-private-information
  - lem-it-quantum-coherent-information-complement-identity
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-qc-channels-compose-and-tensor
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all decompositions and ensemble sums are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Igor Devetak, The private classical capacity and quantum capacity of a quantum channel, §§3–5"
      url: "https://arxiv.org/pdf/quant-ph/0304127"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, Chapters 23–24"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $\mathcal N_i:A_i\to B_i$ be finite-dimensional channels. For input states $\rho_i$,

$$I_c(\rho_1\otimes\rho_2,\mathcal N_1\otimes\mathcal N_2)=I_c(\rho_1,\mathcal N_1)+I_c(\rho_2,\mathcal N_2).$$

For finite ensembles $\mathcal E_i=\{p^{(i)}_{x_i},\rho^{(i)}_{x_i}\}$, their product ensemble satisfies

$$I_p(\mathcal E_1\otimes\mathcal E_2,\mathcal N_1\otimes\mathcal N_2)=I_p(\mathcal E_1,\mathcal N_1)+I_p(\mathcal E_2,\mathcal N_2).$$

## Facts & Assumptions

**Given:** The two finite-dimensional channels, input states, and finite ensembles in the Statement.

[F1] [[def-it-quantum-channel-complement-and-coherent-information]] and [[lem-it-quantum-coherent-information-complement-identity]]: coherent information for a fixed complement is $S(B)-S(E)$.

[F2] [[def-it-quantum-channel-private-information]]: private information is the receiver Holevo quantity minus the complementary-output Holevo quantity.

[F3] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: every finite-dimensional density operator has a finite orthonormal eigenbasis.

[F4] [[thm-natural-logarithm-laws]]: $\ln(xy)=\ln x+\ln y$ for positive $x,y$.

## Proof

1.1 Let $\tau$ and $\sigma$ be density operators with positive eigenvalues $(\lambda_i)_i$ and $(\mu_j)_j$, respectively. By [F3], the product eigenvectors form an orthonormal eigenbasis of $\tau\otimes\sigma$ with eigenvalues $\lambda_i\mu_j$; zero eigenvalues contribute zero. Expanding the entropy sum and using [F4], $\ln(\lambda_i\mu_j)=\ln\lambda_i+\ln\mu_j$, gives $S(\tau\otimes\sigma)=S(\tau)+S(\sigma)$. [F3, F4, given, algebra]

2.1 Choose purifications $|\psi_i\rangle\in A_i\otimes R_i$ of $\rho_i$. Their product purifies $\rho_1\otimes\rho_2$. The joint output-reference states under the tensor-product channels and the complementary outputs under the product dilations are products. Applying step 1.1 to both entropy terms in [F1] proves the coherent-information equality. [F1, step 1.1, construct, algebra]

3.1 The product ensemble has probabilities $p^{(1)}_{x_1}p^{(2)}_{x_2}$ and product receiver and environment output states. Its average receiver and environment states are the corresponding products of the two ensemble averages. Apply step 1.1 to each average and each positive-probability conditional state. Substitution into the two Holevo differences in [F2] separates the finite double sums into the two one-ensemble private-information terms, proving the second equality. [F2, F3, F4, step 1.1, algebra] ∎
