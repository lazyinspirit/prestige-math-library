---
id: lem-qsmx-transfer-regular-point
kind: lemma
title: Regular point and exchange logarithmic derivative
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps: [def-qsmx-rational-monodromy]
dependency_roles:
  def-qsmx-rational-monodromy: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "Section 3, PDF pp. 9–10, equations (49)–(65): regular-point shift and logarithmic derivative."
    - title: "Classical and Quantum Integrable Systems, Lecture 15: The algebraic Bethe ansatz"
      url: "https://vu-ff.github.io/integrability/en/lectures/15/"
      locator: "Section 15.2, Proposition 15.1 and Proposition 15.3: cyclic shift, omitted-factor trace and Hamiltonian derivative."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $t(u)$ and $U$ be the transfer matrix and cyclic shift defined by the
ordered monodromy construction. Use the periodic convention
$P_{N,N+1}:=P_{N,1}$. Then
$$t(0)=i^N U,\qquad i\,t'(0)t(0)^{-1}=\sum_{j=1}^N P_{j,j+1}.$$
In particular, $t(0)$ is invertible. The derivative is with respect to the
dimensionless complex parameter $u$.

## Statement references

[Faddeev, §3, equations (49)–(65)](https://arxiv.org/pdf/hep-th/9605187)

[Classical and Quantum Integrable Systems, Lecture 15, §15.2](https://vu-ff.github.io/integrability/en/lectures/15/)

## Facts & Assumptions

**Given:** An integer $N\ge3$ and the finite-dimensional spaces and operators
of [[def-qsmx-rational-monodromy]].

[F1] [[def-qsmx-rational-monodromy]]: $T_a(u)=R_{aN}(u)\cdots R_{a1}(u)$,
$t(u)=\operatorname{tr}_aT_a(u)$, $R_{aj}(u)=uI+iP_{aj}$, and $U$ sends
$v_1\otimes\cdots\otimes v_N$ to $v_N\otimes v_1\otimes\cdots\otimes
v_{N-1}$.

## Proof

1.1 At $u=0$, every factor is $R_{aj}(0)=iP_{aj}$, so
$t(0)=i^N\operatorname{tr}_a(P_{aN}\cdots P_{a1})$. On an elementary chain
tensor $e_{j_1}\otimes\cdots\otimes e_{j_N}$, start the auxiliary factor at
each basis vector $e_a$ in turn. The swaps pass $e_{j_1},\ldots,e_{j_N}$
successively to the auxiliary factor and shift the preceding entries one site
right; the auxiliary trace retains exactly the term with $e_a=e_{j_N}$. The
output is therefore $e_{j_N}\otimes e_{j_1}\otimes\cdots\otimes e_{j_{N-1}}$.
These tensors form a basis, hence $\operatorname{tr}_a(P_{aN}\cdots P_{a1})=U$.
As $U$ permutes a basis, it is invertible, proving the first identity and
invertibility of $t(0)$. [given, F1, algebra]

2.1 Differentiate the finite product defining $T_a(u)$ and use
$R'_{aj}(0)=I_{aj}$. For each $m$, let
$D_m=\operatorname{tr}_a(P_{aN}\cdots P_{a,m+1}P_{a,m-1}\cdots P_{a1})$,
with the factor $P_{am}$ omitted. Following the auxiliary basis vector
through the remaining swaps and taking its trace gives, for $2\le m<N$,
$$D_m(e_{j_1}\otimes\cdots\otimes e_{j_N})= e_{j_N}\otimes\left(\bigotimes_{r=1}^{m-2}e_{j_r}\right)\otimes e_{j_m}\otimes e_{j_{m-1}}\otimes\left(\bigotimes_{r=m+1}^{N-1}e_{j_r}\right).$$
An empty tensor block in this display is omitted.
For $m=N$ the same calculation gives
$e_{j_{N-1}}\otimes e_{j_1}\otimes\cdots\otimes e_{j_{N-2}}\otimes e_{j_N}$;
for $m=1$ it gives
$e_{j_1}\otimes e_{j_N}\otimes e_{j_2}\otimes\cdots\otimes e_{j_{N-1}}$.
In each case this is exactly $UP_{m-1,m}$ applied to the input, with
$P_{0,1}:=P_{N,1}$. Since the elementary tensors form a basis,
$D_m=UP_{m-1,m}$ as operators. Thus
$t'(0)=i^{N-1}\sum_{m=1}^N UP_{m-1,m}$. [given, F1, step 1.1, algebra]

3.1 From step 1.1, $t(0)^{-1}=i^{-N}U^{-1}$. The definition of $U$ shows
$UP_{m-1,m}U^{-1}=P_{m,m+1}$ for $2\le m\le N$, while
$UP_{N,1}U^{-1}=P_{1,2}$. Therefore
$t'(0)t(0)^{-1}=i^{-1}\sum_{m=1}^N P_{m,m+1}=-i\sum_{m=1}^N P_{m,m+1}$.
Multiplication by $i$ proves the claimed logarithmic-derivative identity.
[given, F1, step 1.1, step 2.1, algebra] ∎

## Remarks

The statement uses the ordered monodromy $R_{aN}\cdots R_{a1}$ and the stated
orientation of $U$. Reversing either convention can change the direction of
the cyclic shift and must be accompanied by a corresponding reindexing of the
periodic bonds.
