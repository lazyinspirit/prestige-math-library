---
id: lem-half-space-chart-transitions-extend-locally-to-side-preserving-diffeomorphisms
title: "Local side-preserving extensions of half-space transitions"
kind: lemma
status: published
origin: pipeline
deps: ["thm-smooth-invariance-of-manifold-boundary", "prop-chain-rule-for-smooth-half-space-maps", "lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space", "thm-euclidean-inverse-function-theorem", "thm-newton-leibniz-with-interior-derivative"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Proposition 16.3, p.404, together with the exact published boundary chain rule and inverse theorem"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Let $n\geq1$ and $G:U\to V$ be a smooth diffeomorphism between relatively open subsets of $H^n$. At every $p\in U\cap\{x_n=0\}$ there are Euclidean open neighborhoods $O$ of $p$ and $O'$ of $G(p)$ and a smooth diffeomorphism $\widehat G:O\to O'$ extending $G$ locally, such that $\widehat G$ maps the positive, zero, and negative sides of $x_n=0$ onto the corresponding sides in $O'$.

## Facts & Assumptions

[F1] [[thm-smooth-invariance-of-manifold-boundary]]: A smooth diffeomorphism between relatively open half-space sets carries face points to face points and relative-interior points to relative-interior points; consequently $\partial M$ and $\operatorname{Int}M$ are intrinsic.

[F2] [[prop-chain-rule-for-smooth-half-space-maps]]: If $f:U\to V$ and $g:V\to W$ are smooth maps between relatively open half-space sets, then $g\circ f$ is smooth and $D(g\circ f)_p=Dg_{f(p)}\circ Df_p$.

[F3] [[lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space]]: If two smooth Euclidean extensions agree on a relatively open subset of $\mathbb H^n$, then all of their derivatives agree at every point of that subset.

[F4] [[thm-euclidean-inverse-function-theorem]]: Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, let $f:U\to\mathbb R^n$ be $C^1$, and let $a\in U$. If $Df(a)$ is invertible, then there are open sets $V,W\subseteq\mathbb R^n$ with $a\in V\subseteq U$ and $f(a)\in W$ such that $f|_V:V\to W$ is bijective. Its inverse $g:W\to V$ is $C^1$, and $$Dg(y)=Df(g(y))^{-1}\qquad(y\in W).$$ Thus $f$ is a local diffeomorphism at $a$.

[F5] [[thm-newton-leibniz-with-interior-derivative]]: Let $a<b$. Suppose $G:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and differentiable on $(a,b)$. If $f:[a,b]\to\mathbb R$ is Riemann integrable and $$f(x)=G'(x)\qquad(a<x<b),$$ then $$\int_a^b f=G(b)-G(a).$$ No derivative of $G$ at either endpoint is assumed, and the two endpoint values assigned to the integrable extension $f$ do not enter the conclusion.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 The face maps into the face and the interior into the interior. The half-space chain rule applied to $G^{-1}G$ shows that $DG_p$ is invertible. Derivatives do not depend on the smooth extensions chosen near $p$. [F1, F2, F3]

2.1 Write the last component of a local extension as $h(x^{\prime},t)$. On a small face disk $h(x^{\prime},0)=0$, so its tangential derivatives vanish. Since $h(x^{\prime},t)>0$ for small $t>0$, $\partial_t h(p)\geq0$. Invertibility and the zero tangential entries in the last row exclude zero, so $\partial_t h(p)>0$. [step 1.1, algebra]

3.1 After shrinking to a product neighborhood, continuity makes $\partial_t h$ positive there. The one-variable fundamental theorem gives $h(x^{\prime},t)=\int_0^t\partial_t h(x^{\prime},s)\,ds=t\,a(x^{\prime},t)$ with $a>0$, also for negative $t$. Hence $h$ has exactly the sign of $t$. [F5, step 2.1]

4.1 Apply the Euclidean inverse theorem to the extension and shrink its inverse neighborhoods inside that product neighborhood. The inverse is smooth: its derivative is the inverse derivative matrix composed with the inverse map, and repeated differentiation bootstraps the stated $C^1$ inverse to every finite order. The sign identity gives both inclusions of each side equality. For $n=1$ the tangential row is empty and the same positive derivative argument applies. [F4, step 3.1] ∎
