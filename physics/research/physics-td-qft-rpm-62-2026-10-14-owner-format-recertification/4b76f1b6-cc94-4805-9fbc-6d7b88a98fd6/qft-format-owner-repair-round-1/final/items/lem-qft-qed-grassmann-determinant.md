---
id: lem-qft-qed-grassmann-determinant
kind: lemma
title: Finite Grassmann Gaussian and gauge-invariant determinant
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - def-qft-qed-formal-ring
  - def-qft-qed-finite-grassmann-algebra
dependency_roles:
  def-qft-qed-formal-ring: mathematical-premise
  def-qft-qed-finite-grassmann-algebra: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Mark Srednicki, Quantum Field Theory, §44, Formal Development of Fermionic Path Integrals
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete author-hosted 616-page draft; finite Grassmann integration and complex Gaussian determinant, printed pp. 276–281.
    - title: David Tong, Quantum Field Theory, §§6.3.1 and 6.4
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted Chapter 6 HTML; charged-fermion QED and finite-dimensional fermion propagator context.
---

## Statement

Let $R=\mathbb C\llbracket z\rrbracket$, let $d\ge1$, and let $K\in M_d(R)$ be a finite matrix as in [[def-qft-qed-formal-ring]]. With $\mathcal I_d$ the top-coefficient functional of [[def-qft-qed-finite-grassmann-algebra]],
$$ \mathcal I_d\!\left(\exp\!\left(-\sum_{i,j=1}^d\bar\psi_iK_{ij}\psi_j\right)\right)=\det K. $$
If $D=\operatorname{diag}(u_1,\ldots,u_d)$ with each $u_i\in R^\times$ and $K'=DKD^{-1}$, then the finite Grassmann integral and determinant are gauge invariant: $\mathcal I_d(\exp(-\bar\psi K'\psi))=\det K'=\det K$. No infinite-dimensional Grassmann measure, continuum limit, or anomaly claim is made.

## Facts & Assumptions

**Given:** A finite integer $d\ge1$, the commutative coefficient ring $R=\mathbb C\llbracket z\rrbracket$, and $K\in M_d(R)$.

[F1] [[def-qft-qed-finite-grassmann-algebra]] defines anticommuting generators, the ordered top monomial $M_d$, the coefficient functional $\mathcal I_d(P)=(-1)^{d(d+1)/2}[M_d]P$, and the finite exponential.

[F2] [[def-qft-qed-formal-ring]] defines $\det K$ by the finite Leibniz sum and the diagonal vertex-phase conjugation convention.

[A1] The integer $d\ge1$, commutative unital coefficient ring $R=\mathbb C\llbracket z\rrbracket$, matrix $K\in M_d(R)$, and diagonal units $u_i\in R^\times$ are as in the Statement.

## Proof

1.1 Put $B_K=\sum_{i,j}\bar\psi_iK_{ij}\psi_j$. Every factor has Grassmann degree two, so a product of more than $d$ such factors has degree greater than $2d$ and vanishes. Hence the exponential is the finite sum $\sum_{n=0}^d(-B_K)^n/n!$, and only its degree-$2d$ term contributes to $[M_d]$. [A1, F1, algebra]

2.1 In $B_K^d/d!$, any term with a repeated row or column index vanishes. The surviving terms are indexed by permutations $\sigma\in S_d$. Reordering $\bar\psi_1\psi_{\sigma(1)}\cdots\bar\psi_d\psi_{\sigma(d)}$ into $M_d$ contributes $(-1)^{d(d-1)/2}\operatorname{sgn}(\sigma)$; the exponential contributes $(-1)^d$. Therefore
$$ [M_d]\exp(-B_K)=(-1)^{d(d+1)/2}\sum_{\sigma\in S_d}\operatorname{sgn}(\sigma)\prod_{i=1}^dK_{i,\sigma(i)} =(-1)^{d(d+1)/2}\det K . $$
Applying the normalization in [F1] proves the Gaussian identity. [A1, F1, F2, step 1.1, algebra]

3.1 For diagonal $D$, $K'_{ij}=u_iK_{ij}u_j^{-1}$. In each Leibniz term, $\prod_i u_i\prod_i u_{\sigma(i)}^{-1}=1$, since $\sigma$ permutes the indices; thus $\det K'=\det K$. The Gaussian identity from [step 2.1] then gives the same equality for the finite Grassmann integral. [A1, F2, step 2.1, algebra] ∎
