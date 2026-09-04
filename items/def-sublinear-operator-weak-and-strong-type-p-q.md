---
id: def-sublinear-operator-weak-and-strong-type-p-q
kind: definition
title: "Sublinear operators and weak or strong type $(p,q)$ bounds"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-distribution-function-of-absolute-value, def-l-infinity-on-a-measure-space, def-l-p-space-as-a-quotient-by-null-functions]
verification:
  audited: 2026-09-04
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Sections 6.4-6.5"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Definition

Let $(X,\mathcal{A},\mu)$ and $(Y,\mathcal{B},\nu)$ be measure spaces, and let
$T$ assign to each measurable function on $X$ a measurable function on $Y$.

The operator $T$ is **sublinear** if for all scalars $a,b$ and measurable
functions $f,g$ one has
$$|T(af+bg)|\le |a|\,|Tf|+|b|\,|Tg|.$$

For $1\le p\le\infty$ and $1\le q\le\infty$, we say that $T$ is of
**strong type $(p,q)$** if there is a constant $C\ge0$ such that
$$\|Tf\|_{L^q(\nu)}\le C\|f\|_{L^p(\mu)}$$
for every $f\in L^p(\mu)$ ([[def-l-p-space-as-a-quotient-by-null-functions]],
[[def-l-infinity-on-a-measure-space]]).

For $1\le p<\infty$ and $1\le q<\infty$, we say that $T$ is of
**weak type $(p,q)$** if there is a constant $C\ge0$ such that for every
$f\in L^p(\mu)$ and every $t>0$,
$$\nu(\{|Tf|>t\})\le\left(\frac{C\|f\|_{L^p(\mu)}}{t}\right)^q.$$
Equivalently, the distribution function of $Tf$
([[def-distribution-function-of-absolute-value]]) obeys
$$A_{Tf}(t)\le\left(\frac{C\|f\|_{L^p(\mu)}}{t}\right)^q\qquad(t>0).$$
