---
id: ex-permutation-pvalue-resolution
kind: example
title: "Exact-orbit and finite-B permutation p-value resolution"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-statistical-and-computational-error-ledger
  - thm-pathwise-error-ledger-decomposition
  - def-finite-group-randomization-test
  - def-orbit-rank-p-value
  - thm-finite-group-randomization-validity
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Let $\Omega=G=\{e,a,a^2\}$ with multiplication $a^3=e$, so $a^i a^j=a^{i+j\ (\mathrm{mod}\ 3)}$. The group acts on itself by left multiplication, the null law is uniform on $G$, and $T(e)=3$, $T(a)=2$, $T(a^2)=1$. For the observed point $e$, the full-orbit inclusive upper-tail rank is one out of three. Separately, define a finite-$B$ reported value for this example by adjoining the observed identity and using
$$p_+:=\frac{1+\sum_{b=1}^{B}\mathbf 1\{T(g_b e)\ge T(e)\}}{B+1}.$$
Take $B=4$ and the realized sampled transformations $(g_1,g_2,g_3,g_4)=(a^2,a,e,a^2)$. This example calculates the two resolutions and their realized difference; it does not establish validity, unbiasedness, or a general error bound for the finite-$B$ formula.

## Facts & Assumptions

**Given:** The group, action, statistic, invariant uniform null law, and finite list of sampled transformations in the Example. Prove the exact-orbit and realized finite-$B$ calculations.

[F1] A finite-group randomization setup consists of a finite probability space, finite group action, statistic, and null laws invariant under that action. ([[def-finite-group-randomization-test]])

[F2] The inclusive orbit upper-tail rank counts group elements with $T(gx)\ge T(x)$ and divides by $|G|$. ([[def-orbit-rank-p-value]])

[F3] Under an invariant null, the full-orbit inclusive rank p-value is superuniform. ([[thm-finite-group-randomization-validity]])

[F4] For a finite scalar reference chain, the total realized error is the sum of its signed adjacent-stage errors. ([[thm-pathwise-error-ledger-decomposition]])

[A1] The operation $a^i a^j=a^{i+j\ (\mathrm{mod}\ 3)}$ is associative with identity $e=a^0$ and inverses $a^{3-i}$; for each $g\in G$, left multiplication $x\mapsto gx$ is a bijection of $G$.

[A2] The finite-$B$ formula is the explicitly defined calculation in the Example; no validity property is assumed for it.

## Verification

1.1 Each map $x\mapsto gx$ permutes $G$, so the uniform law is invariant and the data form the finite-group setup of [F1]. [given, A1, F1, construct]

1.2 The sampled statistic values are $1,2,3,1$, so the inclusive count among the four sampled transforms is one and $p_+=(1+1)/5=2/5$. [given, A2, algebra]

2.1 Exactly one of $e,a,a^2$ has statistic at least $T(e)=3$, so [F2] gives the exact-orbit rank $p_0(e)=1/3$; [F3] supplies its superuniformity under this invariant null. [given, F2, F3, step 1.1, algebra]

3.1 The finite-$B$ output lies on the grid $\{1/5,2/5,3/5,4/5,1\}$ because its count is an integer from zero through four. Set $m=1$, $r_0=p_0(e)$, and $r_1=\widetilde r=p_+$; then the one-stage error is $2/5-1/3=1/15$ by [F4]. [A2, F4, step 1.2, step 2.1, algebra] ∎
