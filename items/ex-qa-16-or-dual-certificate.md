---
id: ex-qa-16-or-dual-certificate
kind: example
title: Dual adversary certificate for OR_N
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
deps:
  - def-qa-16-boolean-query-domain
  - def-qa-16-input-mismatch-matrices
  - def-qa-16-general-adversary-bound
  - thm-qa-16-dual-vector-characterization
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Example


For the partial OR problem $D=\{0,e_1,\ldots,e_N\}$, define $v_{0,i}=N^{-1/4}$ and $v_{e_j,i}=N^{1/4}\mathbf1[i=j]$. This is a balanced dual certificate with $C_0=C_1=\sqrt N$. The matrix with only the symmetric edges $(0,e_j)$ has norm $\sqrt N$ and each filtered norm 1. Hence
$$\operatorname{Adv}^{\pm}(\mathrm{OR}_N)=\sqrt N.$$

## Facts & Assumptions

**Given:** The partial Boolean function OR_N on the zero string and the N unit vectors.



[F1] [[def-qa-16-boolean-query-domain]]: OR_N is the finite Boolean query problem on the declared domain.

[F2] [[def-qa-16-input-mismatch-matrices]]: Δ_i marks exactly the pairs that differ in bit i.

[F3] [[def-qa-16-general-adversary-bound]]: a real symmetric opposite-output Γ certifies its norm ratio as a lower bound on Adv±.

[F4] [[thm-qa-16-dual-vector-characterization]]: a vector certificate of cost C gives Adv±≤C, and the optimum is attained.

## Verification

1.1 Let D={0,e_1,…,e_N}⊂{0,1}^N and f(x)=OR_N(x). For every i set v_{0,i}=N^{-1/4} and v_{e_j,i}=N^{1/4}δ_{ij} in the one-dimensional real space. If x=0,y=e_j, the only mismatch is coordinate j and the corresponding product is 1. If x=e_j,y=e_k with j≠k, the mismatch coordinates are j,k and both products vanish. Reverse pairs give the same real values. Thus all constraints in [F4] hold. [given, F1, F2, F4, construct]

2.1 The cost on the unique 0-input is Σ_iN^{-1/2}=√N. On each 1-input e_j the cost is Σ_iN^{1/2}δ_{ij}=√N. Hence Adv±(OR_N)≤√N by [F4]. [given, F4, step 1.1, algebra]

3.1 For the reverse bound, let Γ have Γ_{0,e_j}=Γ_{e_j,0}=1 for every j and all other entries zero. Its nonzero block is the all-ones 1×N matrix, whose singular value is √N, so ||Γ||=√N. For each i, Γ∘Δ_i retains only the two entries joining 0 and e_i and has norm 1. Therefore [F3] gives Adv±(OR_N)≥√N; equality follows. [given, F2, F3, step 2.1, algebra] ∎
