---
id: prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class
kind: proposition
title: "Null functions form a linear subspace and are exactly the zero-seminorm class"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-null-subspace-of-almost-everywhere-zero-functions, def-calligraphic-l-p-on-a-measure-space, def-l-infinity-on-a-measure-space, prop-essential-supremum-is-attained-as-the-least-essential-bound, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, def-linear-subspace, thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one, thm-finite-and-countable-subadditivity-of-measures]
proof_strategy: "Use countable-union stability of null sets for addition and scalar multiplication. For 1 <= p < infinity, the p-seminorm vanishes exactly when the integral of |f|^p is zero; for p = infinity, vanishing means the essential supremum is zero."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Definition 7.15 and Section 7B"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Section 7.1 and 7.4"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space.

1. For each $1\le p<\infty$, the set
   $$\mathcal N_p(\mu):=\mathcal L^p(\mu)\cap\mathcal N(\mu)$$
   is a linear subspace of $\mathcal L^p(\mu)$, and for
   $f\in\mathcal L^p(\mu)$ one has
   $$f\in\mathcal N(\mu)\quad\Longleftrightarrow\quad \|f\|_p=0.$$
2. The set
   $$\mathcal N_\infty(\mu):=L^\infty(\mu)\cap\mathcal N(\mu)$$
   is a linear subspace of $L^\infty(\mu)$, and for $f\in L^\infty(\mu)$ one
   has
   $$f\in\mathcal N(\mu)\quad\Longleftrightarrow\quad \|f\|_\infty=0.$$

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$.

[L1] The null functions are those that vanish almost everywhere
([[def-null-subspace-of-almost-everywhere-zero-functions]]).

[L2] $\mathcal L^p(\mu)$ and $L^\infty(\mu)$ are vector spaces in the relevant
ranges ([[thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one]]).

[L3] A countable union of measurable null sets is null
([[thm-finite-and-countable-subadditivity-of-measures]]).

[L4] A linear subspace means the three closure conditions of
[[def-linear-subspace]].

[L5] For $1\le p<\infty$, a nonnegative measurable function has integral $0$
exactly when it vanishes almost everywhere
([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[L6] If $\|f\|_\infty<\infty$, then $|f|\le\|f\|_\infty$ almost everywhere
([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

## Proof

**Proof technique:** Use countable-union stability of null sets for addition and
scalar multiplication. For $1 \le p < infinity$, the $p$-seminorm vanishes
exactly when the integral of $|f|^p$ is zero; for $p = infinity$, vanishing
means the essential supremum is zero.

1.1 Fix $1\le p<\infty$. If $f,g\in\mathcal N_p(\mu)$, choose measurable null sets $E_f,E_g$ outside which $f=0$ and $g=0$. Their union is null, and on its complement one has $f+g=0$ and $af=0$ for every $a\in\mathbb R$. Because $\mathcal L^p(\mu)$ is a vector space, [L4] makes $\mathcal N_p(\mu)$ a linear subspace. [L1, L2, L3, L4]

1.2 If $f\in\mathcal N_p(\mu)$, then $|f|^p=0$ almost everywhere, so [L1, L5]
$$\int |f|^p\,d\mu=0,$$
hence $\|f\|_p=0$. Conversely, if $\|f\|_p=0$, then the same theorem [L5]
forces $|f|^p=0$ almost everywhere and therefore $f=0$ almost everywhere.

1.3 If $f\in\mathcal N_\infty(\mu)$, then $0$ is an essential bound for $|f|$, so $\|f\|_\infty=0$. Conversely, if $\|f\|_\infty=0$, then [L6] gives $|f|\le0$ almost everywhere, hence $f=0$ almost everywhere. [L1, L6]

2.1 If $f,g\in\mathcal N_\infty(\mu)$, the same null-set union argument as in step 1.1 shows that $f+g$ and $af$ vanish almost everywhere, and [L2] places them in $L^\infty(\mu)$. Therefore [L4] makes $\mathcal N_\infty(\mu)$ a linear subspace. [L1, L2, L3, L4]

3.1 Steps 1.1 and 2.1 prove the two subspace claims, and steps 1.2 and 1.3 identify the zero-seminorm class in every range. [step 1.1, step 1.2, step 2.1, step 1.3] ∎
