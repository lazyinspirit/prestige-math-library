---
id: "thm-a-bounded-below-complex-of-injectives-is-homotopically-injective"
kind: "theorem"
title: "A bounded below complex of injectives is homotopically injective"
deps: ["def-homotopically-injective-bounded-below-complex", "def-injective-object", "def-dependent-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/013G"
      title: "13.18.3–13.18.8; W 10.4.8 for the equivalence"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

A bounded-below cochain complex $I$ of injective objects is K-injective. Assume dependent choice for the countable successive homotopy extensions, or supply those extensions as data.

## Facts & Assumptions

**Given:** A bounded-below cochain complex $I$ of injective objects is K-injective. Assume dependent choice for the countable successive homotopy extensions, or supply those extensions as data.

[F1] An injective object extends maps from a subobject to the ambient object ([[def-injective-object]]).

[F2] K-injectivity is vanishing of Hom from every acyclic complex into every shift of the target ([[def-homotopically-injective-bounded-below-complex]]).

[F3] DC supplies a sequence extending successive choices on a nonempty set ([[def-dependent-choice]]).

## Proof

1.1 Let $A$ be acyclic and $f:A\to I$ a chain map. Choose $a$ with $I^n=0$ for $n<a$ and set $h^n:A^n\to I^{n-1}$ equal to zero for $n\leq a$. The equation $f^n=d_Ih^n+h^{n+1}d_A$ holds below $a$. In particular it is valid for zero complexes. [given, algebra]

2.1 If the equation holds below $n$, then $u^n=f^n-d_I^{n-1}h^n$ vanishes on $\operatorname{im}d_A^{n-1}$ by the chain-map identity. Since $A$ is acyclic this image equals $\ker d_A^n$, so $u^n$ factors through $\operatorname{im}d_A^n\hookrightarrow A^{n+1}$. Injectivity of $I^n$ extends it to $h^{n+1}:A^{n+1}\to I^n$. This establishes the equation in degree $n$. [F1, step 1.1, algebra]

3.1 Apply DC to the set of finite partial homotopies with the entire extension relation, or take the supplied successive extensions. The resulting homotopy makes $f$ zero in $K$. Apply the same argument to every shift $I[r]$, which remains bounded below and termwise injective. This is the K-injective condition. [F2, F3, step 2.1] ∎
