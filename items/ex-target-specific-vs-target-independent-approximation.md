---
id: ex-target-specific-vs-target-independent-approximation
kind: example
title: "Same target with adaptive and target-independent architectures"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps: [thm-yarotsky-fixed-architecture-sobolev-approximation-rate, thm-yarotsky-adaptive-one-dimensional-lipschitz-approximation, def-sobolev-space-wkp-and-its-norm, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Dmitry Yarotsky, Error bounds for approximations with deep ReLU networks, Theorems 1–2"
      url: "https://arxiv.org/pdf/1610.01145"
      locator: "Theorem 1, proof §3.2; Theorem 2, complete proof §3.3."
    - title: "Matus Telgarsky, Deep learning theory lecture notes, Chapter 5"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "Chapter 5, Benefits of depth; supplementary context. The exact rate comparison is given locally using Yarotsky's theorems."
---

## Example

Assume the Axiom of Choice. For $f(x)=x^2/2$ on $[0,1]$, which belongs to the unit ball of $W^{1,\infty}((0,1))$, the target-independent theorem supplies one architecture that works for the whole unit ball with size $O(\varepsilon^{-1}\log(1/\varepsilon))$, while the adaptive theorem supplies an architecture chosen for this $f$ with size $O(1/[\varepsilon\log(1/\varepsilon)])$ and depth $6$. The ratio of these two upper bounds is $O((\log(1/\varepsilon))^{-2})$ as $\varepsilon\downarrow0$.

## Example references

[Yarotsky, Theorems 1–2: target-independent and adaptive rates](https://arxiv.org/pdf/1610.01145)

[Telgarsky, Chapter 5: depth and approximation context](https://mjt.cs.illinois.edu/dlt/index.html)

## Facts & Assumptions

**Given:** The Axiom of Choice, $f(x)=x^2/2$ on $[0,1]$, and $0<\varepsilon<1/2$.

[F1] The $W^{1,\infty}$ norm is the maximum of the function and weak-derivative essential suprema ([[def-sobolev-space-wkp-and-its-norm]]).

[F2] Every target in the unit $W^{1,\infty}$ ball has a target-independent architecture of size $O(\varepsilon^{-1}(1+\log(1/\varepsilon)))$ ([[thm-yarotsky-fixed-architecture-sobolev-approximation-rate]]).

[F3] Every target in the unit $W^{1,\infty}$ ball in one dimension has an adaptive depth-six architecture of size $O(1/[\varepsilon\log(1/\varepsilon)])$ ([[thm-yarotsky-adaptive-one-dimensional-lipschitz-approximation]]).

[A1] The Axiom of Choice is assumed by both approximation theorems ([[def-axiom-of-choice]]).

## Verification

1.1 The derivative of $f$ is $f'(x)=x$, so $\|f\|_{L^\infty}=1/2$ and $\|f'\|_{L^\infty}=1$. By [F1], $\|f\|_{W^{1,\infty}}=1$. Directly, $|x^2-y^2|/2=|x-y||x+y|/2\le|x-y|$ on $[0,1]$, so $f$ is unit-Lipschitz. [given, F1, algebra]

2.1 Under [A1], apply [F2] and [F3] to this same target. Writing $t=\log(1/\varepsilon)$, the target-independent size is bounded by $C_1\varepsilon^{-1}(1+t)$ and the adaptive size by $C_2/(\varepsilon t)$. The quotient of these explicit upper-bound functions is $(C_2/C_1)/[t(1+t)]=O(t^{-2})$, which tends to zero. Upper bounds alone give no ratio of the actual architecture sizes or of optimal sizes. This comparison makes no claim about optimization or training. [step 1.1, F2, F3, A1, algebra] ∎
