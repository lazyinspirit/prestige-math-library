---
id: ex-arithmetic-degree-on-arithmetic-curve
kind: example
title: "Arithmetic degree on a regular arithmetic curve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-arithmetic-chow-group-with-green-currents
  - def-arithmetic-variety-over-the-integers
  - def-absolute-norm-of-an-ideal
  - def-number-field
  - lem-number-ring-is-regular-projective-arithmetic-curve
  - def-ring-of-integers-of-a-number-field
  - thm-arithmetic-degree-of-zero-cycle
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Henri Gillet and Christophe Soulé, Arithmetic intersection theory"
      url: "https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf"
      locator: "§3.4.3, printed pp. 130–132"
    - title: "Ziyang Jeremy Gao, An Introduction to Arakelov Geometry"
      url: "https://ziyangjeremygao.github.io/teaching/Arakelov/ArakelovGeometry.pdf"
      locator: "§2.4.2, printed pp. 31–32"
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice. Let $K$ be a number field and $X=\operatorname{Spec}\mathcal O_K$, the regular projective arithmetic curve of relative dimension zero. For a nonzero prime ideal $\mathfrak p$ of $\mathcal O_K$, the vertical arithmetic zero-cycle $([\mathfrak p],0)$ has arithmetic degree $\log N\mathfrak p$, where $N\mathfrak p=\#(\mathcal O_K/\mathfrak p)$.

## Example references

[Gillet–Soulé, §3.4.3](https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf)

[Gao, §2.4.2](https://ziyangjeremygao.github.io/teaching/Arakelov/ArakelovGeometry.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$, $X=\operatorname{Spec}\mathcal O_K$, and a nonzero prime ideal $\mathfrak p\subset\mathcal O_K$.

[A1] The Axiom of Choice is used to establish that $\operatorname{Spec}\mathcal O_K$ is regular and projective arithmetic ([[def-axiom-of-choice]], [[lem-number-ring-is-regular-projective-arithmetic-curve]]).

[F1] $X$ is the regular projective arithmetic variety of relative dimension zero over $\operatorname{Spec}\mathcal O_K$ ([[def-arithmetic-variety-over-the-integers]], [[lem-number-ring-is-regular-projective-arithmetic-curve]]).

[F2] The arithmetic zero-cycle degree is $\sum_x n_x\log\#\kappa(x)+\frac12\sum_{\sigma:K\hookrightarrow\mathbb C}\int_{X_\sigma(\mathbb C)}g_\sigma$ ([[thm-arithmetic-degree-of-zero-cycle]]).

[F3] $N\mathfrak p=\#(\mathcal O_K/\mathfrak p)$ ([[def-absolute-norm-of-an-ideal]]).

## Verification

**Given:** The arithmetic variety and prime ideal of the Example.

1.1 The closed subscheme $\operatorname{Spec}(\mathcal O_K/\mathfrak p)$ is a vertical closed point of $X$, so its complexification is empty. Hence $\delta_{[\mathfrak p]}=0$ on $X_\infty$, and the zero Green current satisfies $dd^c0+\delta_{[\mathfrak p]}=0$. The pair in the Example is an arithmetic zero-cycle. [A1, F1, given]

1.2 In [F2] the current term vanishes because $g=0$. The only finite term is $\log\#(\mathcal O_K/\mathfrak p)=\log N\mathfrak p$ by [F3], which is the asserted arithmetic degree. [F2, F3, step 1.1] ∎
