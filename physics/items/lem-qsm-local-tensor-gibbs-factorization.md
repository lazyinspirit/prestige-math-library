---
id: lem-qsm-local-tensor-gibbs-factorization
kind: lemma
title: Factorization of finite additive canonical densities
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-qsm-local-additive-spectral-ensembles
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
dependency_roles:
  def-qsm-local-additive-spectral-ensembles: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: David Tong, Statistical Physics, §§1.2–1.3
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.3–4.4
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
---

## Statement

Use the finite additive spectral data of
[[def-qsm-local-additive-spectral-ensembles]]. For every $N\ge1$,
$Z_N=Z_1^N$. For each product label $\mathbf j=(j_1,\ldots,j_N)$, the
diagonal entry of $\gamma_N$ is $\prod_{a=1}^N p_{j_a}$ and its off-diagonal
entries are zero. For each integer $k$ with $1\le k\le N$, write
$x,x'\in\{1,\ldots,q\}^k$ and $y\in\{1,\ldots,q\}^{N-k}$, and define the
first-$k$ reduced matrix $R_{N,k}$ by
$$ (R_{N,k})_{x,x'}:=\sum_{y\in\{1,\ldots,q\}^{N-k}}(\gamma_N)_{(x,y),(x',y)}. $$
When $k=N$, the tail-label set consists of the single empty tuple. Then
$R_{N,k}=\gamma_k$, where $\gamma_k$ is the diagonal matrix on
$V_k=(\mathbb C^q)^{\otimes k}$ with entries
$(\gamma_k)_{x,x}=\prod_{a=1}^k p_{x_a}$, and the canonical state has expected
additive energy $NE$.

## Facts & Assumptions

**Given:** A finite alphabet $\{1,\ldots,q\}$, real levels $e_j$, finite $\beta\in\mathbb R$, and the canonical matrices and partition sums of [[def-qsm-local-additive-spectral-ensembles]].

[F1] [[def-qsm-local-additive-spectral-ensembles]]: the energy of a product label is $\sum_a e_{j_a}$ and its canonical weight is the exponential of $-\beta$ times that energy.

[F2] [[thm-exponential-addition-formula]]: for real $x,y$, $\exp(x+y)=\exp(x)\exp(y)$.

[F3] [[def-real-exponential-function-and-e]]: $e^x$ denotes the real exponential $\exp(x)$ defined by its power series.

## Proof

1.1 By [F1] and the notation in [F3], each label weight uses the real
exponential $e^x=\exp(x)$. Apply [F2]
repeatedly and use distributivity of finite sums to obtain
$$Z_N=\sum_{j_1,\ldots,j_N}\prod_{a=1}^N e^{-\beta e_{j_a}} =\prod_{a=1}^N\sum_{j_a=1}^q e^{-\beta e_{j_a}}=Z_1^N.$$
For each product label, division by this positive denominator makes its
canonical diagonal entry $\prod_a p_{j_a}$, while off-diagonal entries vanish.
This is the matrix description of $\gamma_N$ in the Statement. [given, F1,
F2, F3, algebra]

2.1 For first-block labels $x,x'$, the matrix entry
$(\gamma_N)_{(x,y),(x',y)}$ vanishes when $x\ne x'$, since $\gamma_N$ is
diagonal in the product basis. For $x=x'$, its value is
$\prod_{a=1}^k p_{x_a}\prod_{a=k+1}^N p_{y_{a-k}}$. Summing over the tail
labels in the definition of $R_{N,k}$ gives
$(R_{N,k})_{x,x}=\prod_{a=1}^k p_{x_a}$, because each tail factor has sum
$\sum_{j=1}^q p_j=1$. Hence $R_{N,k}=\gamma_k$. Finally the
canonical state's mean energy is
$$\sum_{j_1,\ldots,j_N}\Bigl(\prod_a p_{j_a}\Bigr)\sum_a e_{j_a} =\sum_{a=1}^N\sum_{j_a}p_{j_a}e_{j_a}=NE,$$
because every other factor sum is one. [given, F1, step 1.1, algebra] ∎
