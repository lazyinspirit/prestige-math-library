---
id: "thm-transpose-is-weak-to-weak-continuous"
kind: "theorem"
title: "Transpose is weak to weak continuous"
deps: ["def-transpose-of-a-bounded-operator", "def-weak-convergence-of-nets-and-sequences"]
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

## Statement

Every bounded scalar-linear $T:X\to Y$ between real or complex normed spaces is weak-to-weak continuous. Its transpose $T^*:Y^*\to X^*$ is continuous for $\sigma(Y^*,Y^{**})$ and $\sigma(X^*,X^{**})$. No choice principle is needed.

## Facts & Assumptions

[F1] The transpose is $(T^*g)(x)=g(Tx)$, a bounded functional of $x$ ([[def-transpose-of-a-bounded-operator]]).

[F2] Weak convergence is coordinate convergence under bounded functionals, for arbitrary nets ([[def-weak-convergence-of-nets-and-sequences]]).

## Proof

**Given:** a bounded scalar-linear map $T:X\to Y$.

1.1 For $g\in Y^*$, $g\circ T\in X^*$ and $|(g\circ T)(x)|\le\|g\|\|T\|\|x\|$. The inverse under $T$ of a weak subbasic set $g^{-1}(V)$ is $(g\circ T)^{-1}(V)$, which is weakly open in $X$. Inverse images preserve unions and finite intersections, proving continuity of $T$. Equivalently, F2 gives $g(Tx_i)\to g(Tx)$ for every weakly convergent net. [given, F1, F2]

2.1 Taking the supremum over $\|x\|\le1$ in the bound of step 1.1 gives $\|T^*g\|\le\|T\|\|g\|$, so $T^*$ is bounded. Apply the step 1.1 argument to this bounded map: for every $\Phi\in X^{**}$, $\Phi\circ T^*\in Y^{**}$ since $|\Phi(T^*g)|\le\|\Phi\|\|T\|\|g\|$. Thus inverse weak subbasic sets are weakly open, proving weak-to-weak continuity of $T^*$. The estimates remain valid for zero maps and zero spaces. $\square$ [step 1.1, F1, algebra]
