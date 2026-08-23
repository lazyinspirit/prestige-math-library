---
id: fs-finite-volume-implies-finite-lateral-surface-area
kind: false-statement
title: 'FALSE: finite volume implies finite lateral surface area'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-volume-of-a-solid-of-revolution-by-discs, def-improper-integral-at-infinity, thm-improper-p-test-rational, cor-surface-area-of-revolution-formula, thm-algebra-of-derivatives, thm-monotonicity-of-the-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'APEX Calculus II, Section 7.4, Example 216'
      url: 'https://web.archive.org/web/20251010212618if_/https://www.vmi.edu/media/content-assets/documents/academics/appliedmath/CalculusII_Version2.pdf'
pipeline_run: null
---

## Statement

Every solid of revolution with finite volume has finite lateral surface area.

## Facts & Assumptions

**Given:** Gabriel's horn, obtained by rotating $r(x)=1/x$ for $x\ge1$, and its compact truncations $1\le x\le T$.

[L1] If $a\le b$ and $f:[a,b]\to[0,\infty)$ is continuous, then its solid of revolution about the $x$-axis is compact and Jordan measurable and has volume $\pi\int_a^b f(x)^2\,dx$ ([[thm-volume-of-a-solid-of-revolution-by-discs]]).

[L2] The improper integral $\int_1^\infty x^{-p}\,dx$ converges for rational $p>1$ and diverges for $p\le1$ ([[def-improper-integral-at-infinity]], [[thm-improper-p-test-rational]]).

[L3] If $a<b$ and $r:[a,b]\to[0,\infty)$ is $C^1$ on a neighbourhood of $[a,b]$, positive on $(a,b)$, and vanishes at most at the endpoints, then the surface obtained by rotating $r$ about the axis has area $2\pi\int_a^b r(s)\sqrt{1+r'(s)^2}\,ds$ ([[cor-surface-area-of-revolution-formula]]).

[L4] Products, sums, scalar multiples, and quotients with nonzero denominator obey their usual derivative rules ([[thm-algebra-of-derivatives]]).

[L5] If $a<b$ and integrable $f,g:[a,b]\to\mathbb R$ satisfy $f(x)\le g(x)$ for every $x$, then $\int_a^bf\le\int_a^bg$ ([[thm-monotonicity-of-the-integral]]).

## Refutation

**Proof technique:** direct.

1.1 Fix $T>1$. The profile $r(x)=x^{-1}$ is continuous and positive on $[1,T]$, so [L1] applies with $a=1$, $b=T$ and gives the truncation volume $V(T)=\pi\int_1^Tx^{-2}\,dx$. By [L2] at $p=2$, these volumes tend to the finite value $\pi$. [given, L1, L2]

1.2 On a neighbourhood of $[1,T]$ the same $r$ is $C^1$ with $r'(x)=-x^{-2}$ by [L4], and it is positive throughout, so the hypotheses of [L3] hold and $A(T)=2\pi\int_1^Tx^{-1}\sqrt{1+x^{-4}}\,dx$. Since $\sqrt{1+x^{-4}}\ge1$ on $[1,T]$, [L5] gives $A(T)\ge2\pi\int_1^Tx^{-1}\,dx$. By [L2] at $p=1$, the right side is unbounded as $T\to\infty$. [given, L2, L3, L4, L5, algebra]

2.1 Thus the horn has finite improper volume but unbounded compact-truncation lateral area, refuting the implication. The truncation $T=1$ is excluded because [L1] and [L3] need $a\le b$ and $a<b$ respectively; the refutation concerns the unbounded endpoint and uses only $T>1$. [step 1.1, step 1.2, L1, L3] ∎
