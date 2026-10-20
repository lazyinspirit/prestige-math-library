---
id: ex-target-specific-vs-target-independent-approximation
kind: example
title: "Same target with adaptive and target-independent architectures"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps: [thm-yarotsky-fixed-architecture-sobolev-approximation-rate, thm-yarotsky-adaptive-one-dimensional-lipschitz-approximation, def-sobolev-space-wkp-and-its-norm]
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
    - title: "Michael J. Sullivan, Deep Learning Theory, §5.3"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "§5.3, fixed-architecture and adaptive-architecture rate comparison."
---

## Example

For $f(x)=x^2/2$ on $[0,1]$, which belongs to the unit ball of $W^{1,\infty}((0,1))$, the target-independent theorem supplies one architecture that works for the whole unit ball with size $O(\varepsilon^{-1}\log(1/\varepsilon))$, while the adaptive theorem supplies an architecture chosen for this $f$ with size $O(1/[\varepsilon\log(1/\varepsilon)])$ and depth $6$. The ratio of these two upper bounds is $O((\log(1/\varepsilon))^{-2})$ as $\varepsilon\downarrow0$.

## Example references

[Yarotsky, Theorems 1–2: target-independent and adaptive rates](https://arxiv.org/pdf/1610.01145)

[Sullivan, §5.3: architecture-selection comparison](https://mjt.cs.illinois.edu/dlt/index.html)

## Facts & Assumptions

**Given:** $f(x)=x^2/2$ on $[0,1]$ and $0<\varepsilon<1/2$.

[F1] The $W^{1,\infty}$ norm is the maximum of the function and weak-derivative essential suprema ([[def-sobolev-space-wkp-and-its-norm]]).

[F2] Every target in the unit $W^{1,\infty}$ ball has a target-independent architecture of size $O(\varepsilon^{-1}(1+\log(1/\varepsilon)))$ ([[thm-yarotsky-fixed-architecture-sobolev-approximation-rate]]).

[F3] Every unit-Lipschitz target in one dimension has an adaptive depth-six architecture of size $O(1/[\varepsilon\log(1/\varepsilon)])$ ([[thm-yarotsky-adaptive-one-dimensional-lipschitz-approximation]]).

## Verification

1.1 The derivative of $f$ is $f'(x)=x$, so $\|f\|_{L^\infty}=1/2$ and $\|f'\|_{L^\infty}=1$. By [F1], $\|f\|_{W^{1,\infty}}=1$. Directly, $|x^2-y^2|/2=|x-y||x+y|/2\le|x-y|$ on $[0,1]$, so $f$ is unit-Lipschitz. [given, F1, algebra]

2.1 Apply [F2] and [F3] to this same target. Their size ratio is $[1/(\varepsilon\log(1/\varepsilon))]/[\varepsilon^{-1}\log(1/\varepsilon)]=(\log(1/\varepsilon))^{-2}$ up to constants, which tends to zero. This compares existence rates only and makes no claim about optimization or training. [step 1.1, F2, F3, algebra] ∎
