---
id: "cex-pointwise-boundedness-without-a-uniform-bound-on-an-incomplete-domain"
kind: "counterexample"
title: "Pointwise boundedness without a uniform bound on an incomplete domain"
deps: ["def-operator-norm", "def-weak-star-convergence"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Teschl, Topics in Real and Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

Pointwise bounded sequences of bounded scalar-linear maps on an arbitrary normed domain have uniformly bounded norms. Completeness cannot be omitted, even when the sequence is pointwise eventually zero.

## Facts & Assumptions

[F1] Operator norm is the unit-ball supremum ([[def-operator-norm]]).

[F2] Weak-star convergence in a dual means convergence on each fixed primal vector, with a limit in that dual ([[def-weak-star-convergence]]).

## Counterexample

**Given:** $X=c_{00}$, the real or complex finitely supported sequences indexed by $k\ge1$, with norm $\|x\|_\infty=\sup_k|x_k|$. Put $T_0=0$ and $T_n(x)=nx_n$ for $n\ge1$.

1.1 For $n\ge1$, the map $T_n$ is scalar-linear and $|T_n(x)|\le n\|x\|_\infty$, with equality at the unit vector $e_n$. Thus $\|T_n\|=n$ for $n\ge1$, while $\|T_0\|=0$. For any fixed finitely supported $x$, $T_n(x)=0$ past its last nonzero index; hence the sequence $(T_n)_{n\in\mathbb N}$ is pointwise bounded and even converges weak-star to the zero functional in $X^*$. [given, F1, F2]

2.1 To check incompleteness, let $a^{(m)}_k=1/k$ for $1\le k\le m$ and zero otherwise. For $m>r$, $\|a^{(m)}-a^{(r)}\|_\infty=1/(r+1)$, so these form a Cauchy sequence. A norm limit would have coordinate $1/k$ for each fixed $k$, since coordinate evaluation has norm at most one. That sequence is not finitely supported, so no limit exists in $X$. The pointwise convergence in step 1.1 therefore gives no uniform norm bound on this incomplete domain. $\square$ [step 1.1, given, algebra]
