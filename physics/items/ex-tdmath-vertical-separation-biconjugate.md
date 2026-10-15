---
id: ex-tdmath-vertical-separation-biconjugate
kind: example
title: "A vertical separator and biconjugation outside the domain"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
proof_strategy: direct
deps:
  - def-tdmath-extended-convex-function
  - def-tdmath-fenchel-transform-and-subgradient
  - lem-tdmath-extended-convex-epigraph-equivalence
  - lem-tdmath-closed-convex-separation
  - thm-tdmath-finite-dimensional-biconjugation
dependency_roles:
  def-tdmath-extended-convex-function: mathematical-premise
  def-tdmath-fenchel-transform-and-subgradient: mathematical-premise
  lem-tdmath-extended-convex-epigraph-equivalence: mathematical-premise
  lem-tdmath-closed-convex-separation: mathematical-premise
  thm-tdmath-finite-dimensional-biconjugation: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "R. T. Rockafellar, Convex Analysis, §12, Theorems 12.1–12.2"
      url: "https://djvu.online/file/68u51YEBQaqiP"
verification:
  precheck: n/a
---

## Example

Let $f:\mathbb R\to\{0,+\infty\}$ be the indicator of $[0,\infty)$: $f(y)=0$ for $y\ge0$ and $f(y)=+\infty$ for $y<0$. At $z=(-1,0)$, the epigraph is separated by a vertical hyperplane (one whose coefficient of the epigraph-height coordinate is zero). The conjugate is $f^*(p)=0$ for $p\le0$ and $+\infty$ for $p>0$, so $f^{**}(-1)=+\infty=f(-1)$. The affine minorants $\ell_k(y)=-ky$, $k\ge0$, display the unbounded dual values at $y=-1$.

## Facts & Assumptions

**Given:** The indicator function just defined and the Euclidean coordinates $(y,s)$ on its epigraph.

[F1] [[def-tdmath-extended-convex-function]]: properness, convexity, lower semicontinuity, and the epigraph use the stated extended-real conventions.

[F2] [[def-tdmath-fenchel-transform-and-subgradient]]: $f^*(p)=\sup_{y\in\operatorname{dom}f}(py-f(y))$ and $f^{**}(x)$ is the supremum over $p$ with finite $f^*(p)$.

[F3] [[lem-tdmath-extended-convex-epigraph-equivalence]]: convexity and lower semicontinuity are equivalent to convexity and closedness of the epigraph.

[L1] [[lem-tdmath-closed-convex-separation]]: a point outside a nonempty closed convex Euclidean set has a strict linear separator.

[L2] [[thm-tdmath-finite-dimensional-biconjugation]]: a proper closed convex extended-real function on finite-dimensional Euclidean space equals its biconjugate.

## Verification

**Proof technique:** direct calculation.

1.1 The domain is $[0,\infty)$, so it is nonempty and $f$ is proper. Its epigraph is $E=\{(y,s):y\ge0,\ s\ge0\}$, a nonempty closed convex set; [F3] therefore makes $f$ closed and convex. The point $(-1,0)$ lies outside $E$. With $u=(-1,0)$ and $c=0$, every $(y,s)\in E$ satisfies $\langle u,(y,s)\rangle=-y\le0<1=\langle u,(-1,0)\rangle$, so this is the strict vertical separator; its height coefficient is zero. [F1, F3, L1, given, algebra]

1.2 For $p\le0$ and $y\ge0$, $py\le0$, with equality at $y=0$, so $f^*(p)=0$. For $p>0$, given any real $M$ choose $y>\max\{0,M/p\}$; then $py>M$, so the defining supremum is $+\infty$. Therefore $\operatorname{dom}f^*=(-\infty,0]$. [F2, given, algebra, choose]

2.1 At $x=-1$, the biconjugate is $\sup_{p\le0}(-p-f^*(p))=\sup_{p\le0}(-p)=+\infty$: for every real bound $M$, the admissible choice $p=-\max\{M,0\}-1$ gives $-p>M$. Thus $f^{**}(-1)=f(-1)$. [F2, step 1.2, algebra, choose]

3.1 For each $k\ge0$ and $y\ge0$, $\ell_k(y)=-ky\le0=f(y)$, so $\ell_k$ is an affine minorant. Its value at $-1$ is $k$, and the conjugate choice $p=-k$ has $f^*(-k)=0$, so the same family realizes arbitrarily large dual values at the point outside the domain. The conclusion is consistent with the full equality in [L2]. [F2, L2, step 1.2, step 2.1, algebra] ∎
