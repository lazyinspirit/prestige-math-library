---
id: "thm-a-bounded-above-complex-of-projectives-is-homotopically-projective"
kind: "theorem"
title: "A bounded above complex of projectives is homotopically projective"
deps: ["def-homotopically-projective-bounded-above-complex", "def-projective-object", "def-dependent-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/0643"
      title: "13.19.3–13.19.8; W 10.4.8 for the equivalence"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

A bounded-above cochain complex $P$ of projective objects is K-projective. Assume dependent choice for the countable successive homotopy choices, or supply those lifts as data.

## Facts & Assumptions

**Given:** A bounded-above cochain complex $P$ of projective objects is K-projective. Assume dependent choice for the countable successive homotopy choices, or supply those lifts as data.

[F1] K-projectivity means vanishing of Hom in the homotopy category into every shift of every acyclic complex ([[def-homotopically-projective-bounded-above-complex]]).

[F2] A projective object lifts maps through every epimorphism ([[def-projective-object]]).

[F3] DC supplies a sequence through an entire relation on a nonempty set from a prescribed starting point ([[def-dependent-choice]]).

## Proof

1.1 Let $A$ be acyclic and $f:P\to A$ a chain map; shifting the target will give the same argument for any $A[r]$. Choose an upper bound $b$ for $P$, and set $h^n=0$ for $n>b$. We seek $h^n:P^n\to A^{n-1}$ satisfying $f^n=d_A^{n-1}h^n+h^{n+1}d_P^n$. The zero complex permits all choices to be zero. [F1, given]

2.1 Suppose the equation holds in degrees above $n$. Put $u^n=f^n-h^{n+1}d_P^n$. The chain-map equation and the equation at $n+1$ give $d_A^nu^n=0$. Acyclicity makes $A^{n-1}\to Z^n(A)$ epic, so projectivity of $P^n$ lifts $u^n$ to $h^n$. This establishes the equation in degree $n$, including the initial degree $b$. [F2, step 1.1, algebra]

3.1 The partial homotopies form a nonempty set of finite sequences of maps (all relevant Hom collections are sets), with an entire extension relation. DC, or the supplied successive lifts, gives the infinite descending homotopy. Thus every $P\to A[r]$ is nullhomotopic for every $r$, which is K-projectivity. The recursion requires an upper bound; no assertion for arbitrary unbounded projectives follows. [F1, F3, step 2.1] ∎
