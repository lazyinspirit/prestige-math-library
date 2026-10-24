---
id: lem-qftx-adhm-entrywise-conjugation-does-not-match-real-moment-map
kind: lemma
title: Entrywise conjugation does not match the raw ADHM real moment map
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence
dependency_level: 1
deps:
  - def-qftx-donaldson-adhm-matrix-convention
  - def-qftx-adhm-linear-data-stability-and-regularity
dependency_roles:
  def-qftx-donaldson-adhm-matrix-convention: mathematical-premise
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Simon K. Donaldson, The ADHM construction of Yang-Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "§6, printed pp. 10–11, equations (8)–(9): source convention compared with the raw moment-map convention."
verification:
  precheck: pass
---

## Statement

Let $(\alpha_1,\alpha_2,P,Q)$ obey the source equations stated in the following references section. Under the proposed substitution

$$B_i=\overline{\alpha_i},\qquad I=\overline P,\qquad J=\overline Q,$$

the raw complex moment map vanishes, but the raw real moment map is

$$\mu_{\mathbb R}=\overline C+\overline X-\overline Y,$$

where $C=[\alpha_1,\alpha_1^\dagger]+[\alpha_2,\alpha_2^\dagger]$, $X=PP^\dagger$, and $Y=Q^\dagger Q$. The conjugated source real equation gives $\overline C-\overline X+\overline Y=0$, so on source solutions the proposed raw real moment map equals $2\overline C$; the source equations alone therefore do not establish its vanishing. This failure occurs for the explicit $k=N=2$ source solution in the proof below.

## Statement references

[[def-qftx-donaldson-adhm-matrix-convention]]

[[def-qftx-adhm-linear-data-stability-and-regularity]]

[Donaldson, §6, printed pp. 10–11](https://arxiv.org/pdf/2205.08639)

## Facts & Assumptions

**Given:** Standard Hermitian spaces $V=\mathbb C^k$, $W=\mathbb C^N$, the source equations in the Statement, and the run's raw moment maps.

[F1] The source equations are $[\alpha_1,\alpha_2]+PQ=0$ and $C-X+Y=0$, with $P:W\to V$ and $Q:V\to W$. [[def-qftx-donaldson-adhm-matrix-convention]]

[F2] The raw moment maps are $\mu_{\mathbb C}(B,I,J)=[B_1,B_2]+IJ$ and $\mu_{\mathbb R}(B,I,J)=[B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J$. [[def-qftx-adhm-linear-data-stability-and-regularity]]

## Proof

**Given:** [F1], [F2], and the proposed entrywise-conjugate substitution.

1.1 Componentwise conjugation of $[\alpha_1,\alpha_2]+PQ=0$ gives $[\overline{\alpha_1},\overline{\alpha_2}]+\overline P\,\overline Q=0$. By [F2], this is exactly $\mu_{\mathbb C}(B,I,J)=0$. [F1, F2, algebra]

2.1 Since $(\overline{\alpha_i})^\dagger=\overline{\alpha_i^\dagger}$, the commutator part of $\mu_{\mathbb R}$ is $\overline C$. Also $II^\dagger=\overline X$ and $J^\dagger J=\overline Y$. Thus $\mu_{\mathbb R}=\overline C+\overline X-\overline Y$. Conjugating the source real equation gives $\overline C-\overline X+\overline Y=0$, so the raw expression on such a source solution is $2(\overline X-\overline Y)=2\overline C$. [F1, F2, step 1.1, algebra]

3.1 To verify that the source equations permit $C\ne0$, take $k=N=2$, $\alpha_1=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, $\alpha_2=0$, $P=\begin{pmatrix}1&0\\0&0\end{pmatrix}$, and $Q=\begin{pmatrix}0&0\\0&1\end{pmatrix}$. Then $[\alpha_1,\alpha_2]+PQ=0$, $C=\operatorname{diag}(1,-1)$, $X=\operatorname{diag}(1,0)$, and $Y=\operatorname{diag}(0,1)$, so $C-X+Y=0$. Under the proposed substitution the raw real moment map is $\operatorname{diag}(2,-2)\ne0$. This checks the claimed failure using only the source algebraic equations; it makes no claim that this tuple satisfies the separate source full-rank condition. [F1, F2, step 2.1, algebra] ∎
