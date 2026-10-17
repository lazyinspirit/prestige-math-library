---
id: thm-winding-number-zero-unbounded-component
kind: theorem
title: "The winding number vanishes on the unbounded component of the complement of the trace"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complement-of-a-compact-plane-set-has-one-unbounded-component, thm-winding-number-locally-constant, thm-winding-number-is-integer, cor-ml-estimate-for-complex-line-integrals, def-winding-number-closed-complex-contour, thm-compact-subset-is-closed-and-bounded, thm-continuous-image-of-a-compact-space-is-compact, thm-heine-borel-rn, def-connected-component-and-quasicomponent, thm-components-partition-and-are-closed, def-metric-bounded-diameter, lem-complex-conjugation-and-modulus-laws, def-integers, thm-int-comm-ring, thm-int-ordered-ring, lem-integer-part]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.1, Properties (i) and (ii)"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $\gamma$ be a closed complex contour with trace $\gamma^\ast$ and length
$L(\gamma)$. Then $\mathbb C\setminus\gamma^\ast$ has exactly one unbounded
connected component $U_\infty$, and

$$n(\gamma,p)=0\qquad\text{for every }p\in U_\infty.$$

More precisely, if $R>0$ satisfies $\gamma^\ast\subseteq\{z:|z|\le R\}$ and
$|p|>R+L(\gamma)/(2\pi)$, then $p\in U_\infty$ and $n(\gamma,p)=0$.

## Facts & Assumptions

**Given:** A closed complex contour $\gamma:[a,b]\to\mathbb C$.

[L1] For a compact $K\subseteq\mathbb C$, the complement $\mathbb C\setminus K$ has exactly one unbounded connected component $U_\infty$, every other component is bounded, and $\{z:|z|>R\}\subseteq U_\infty$ whenever $R>0$ satisfies $K\subseteq\{z:|z|\le R\}$ ([[thm-complement-of-a-compact-plane-set-has-one-unbounded-component]]).

[L2] The index $n(\gamma,\cdot)$ is constant on every connected component of $\mathbb C\setminus\gamma^\ast$ ([[thm-winding-number-locally-constant]]).

[L3] The winding number of a closed complex contour about a point off its trace is an integer ([[thm-winding-number-is-integer]]).

[L4] If $|f(z)|\le M$ on the trace of a rectifiable contour $\gamma$, with $M\ge0$, then $|\int_\gamma f(z)\,dz|\le M\,L(\gamma)$ ([[cor-ml-estimate-for-complex-line-integrals]]).

[L5] $n(\gamma,p)=(2\pi i)^{-1}\int_\gamma dz/(z-p)$ ([[def-winding-number-closed-complex-contour]]).

[L6] A compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]); the continuous image of a compact subset is compact ([[thm-continuous-image-of-a-compact-space-is-compact]]); a closed bounded interval is compact ([[thm-heine-borel-rn]]).

[L7] The connected component $C(x)$ is the union of all connected subsets containing $x$ ([[def-connected-component-and-quasicomponent]]) and contains every connected subset containing $x$ ([[thm-components-partition-and-are-closed]]).

[L8] A subset of a metric space is bounded when it is empty or contained in some ball ([[def-metric-bounded-diameter]]).

[L9] $|z+w|\le|z|+|w|$ for complex $z,w$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L10] The integers form an ordered commutative ring and their canonical image in $\mathbb R$ is discrete; in particular the only integer of modulus below $1$ is $0$ ([[thm-int-comm-ring]], [[thm-int-ordered-ring]], [[lem-integer-part]]).

## Proof

**Proof technique:** direct.

1.1 The trace $\gamma^\ast$ is the continuous image of a compact interval, hence compact by [L6], and bounded by [L6], so there is $R>0$ with $\gamma^\ast\subseteq\{z:|z|\le R\}$. By [L1] the set $\mathbb C\setminus\gamma^\ast$ has exactly one unbounded component $U_\infty$, and $\{z:|z|>R\}\subseteq U_\infty$. [given, L1, L6, L8]

2.1 Let $|p|>R$. For $w\in\gamma^\ast$ one has $|w|\le R$, so $|w-p|\ge|p|-|w|\ge|p|-R>0$ by [L9]; hence $p\notin\gamma^\ast$ and $|1/(z-p)|\le1/(|p|-R)$ on the trace. By [L4] and [L5], $|n(\gamma,p)|\le L(\gamma)/\bigl(2\pi(|p|-R)\bigr)$. [step 1.1, L4, L5, L9]

3.1 If in addition $|p|>R+L(\gamma)/(2\pi)$ then $|p|-R>L(\gamma)/(2\pi)$, so step 2.1 gives $|n(\gamma,p)|<1$; since $n(\gamma,p)$ is an integer by [L3], it is $0$ by [L10]. Such $p$ exist, for instance $p=R+L(\gamma)/(2\pi)+1$, and each lies in $U_\infty$ by step 1.1. [step 1.1, step 2.1, L3, L10]

4.1 By [L2] the index is constant on the connected component $U_\infty$, and step 3.1 exhibits a point of $U_\infty$ where its value is $0$; hence $n(\gamma,p)=0$ for every $p\in U_\infty$, which by [L7] contains every connected unbounded subset of $\mathbb C\setminus\gamma^\ast$ that meets it. [step 3.1, L2, L7] ∎
