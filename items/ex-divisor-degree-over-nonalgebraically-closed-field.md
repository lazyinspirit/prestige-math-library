---
id: ex-divisor-degree-over-nonalgebraically-closed-field
kind: example
title: "Divisor degree with residue degrees over a nonclosed field"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - def-relative-projective-space-standard-charts
  - lem-projective-line-curve-and-divisor-basics
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
verification:
  audited: 2026-10-02
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the
DVR local-ring context in [[def-divisor-smooth-proper-curve]]. Let $k=\mathbb R$ and let
$C=\mathbb P^1_{\mathbb R}$ with coordinate $t$ on the standard chart
([[def-relative-projective-space-standard-charts]],
[[def-projective-line-two-affine-cover-and-twisting-sheaf]]). The closed point
$x=V(t^2+1)$ has residue field $\kappa(x)=\mathbb R[t]/(t^2+1)\cong\mathbb C$,
of degree two over $\mathbb R$, so the divisor $D=[x]$ satisfies
$\deg_{\mathbb R}(D)=1\cdot2=2$ even though its support is a single point: the
degree of a divisor weights each closed point by its residue degree
([[def-degree-divisor-proper-curve]]). The rational function $f=t^2+1\in
\mathbb R(C)^\times$ has divisor
$$\operatorname{div}(f)=[x]-2[\infty],$$
so $[x]$ is linearly equivalent to $2[\infty]$ and the principal divisor has
degree $2-2\cdot1=0$, as it must. After base change to $\mathbb C$ the point
$x$ splits as the two $\mathbb C$-points $t=\mathrm i$ and $t=-\mathrm i$, each
of residue degree one over $\mathbb C$, with total degree $2=\deg_{\mathbb R}[x]$.

## Facts & Assumptions
**Given:** $k=\mathbb R$, the curve $C=\mathbb P^1_{\mathbb R}$ with coordinate $t$ on the standard affine chart $U_0=\operatorname{Spec}\mathbb R[t]$, the closed point $x=V(t^2+1)\subseteq U_0$, the rational function $f=t^2+1$, and the divisor $D=[x]$.

[F1] A curve over a field $k$ is geometrically integral, separated and finite type of chain dimension one. Under AC, $\mathbb P^1_k$ is a smooth proper geometrically integral curve for every field $k$, hence for $k=\mathbb R$ and $k=\mathbb C$. ([[def-algebraic-curve-over-field]], [[lem-projective-line-curve-and-divisor-basics]])

[F2] For a proper curve $C$ over $k$, a divisor is a finite $\mathbb Z$-linear combination $D=\sum_x n_x[x]$ of closed points, the residue field $\kappa(x)$ of a closed point is a finite extension of $k$, and $\deg_k D=\sum_x n_x[\kappa(x):k]$; the degree is additive. ([[def-degree-divisor-proper-curve]], [[def-divisor-smooth-proper-curve]])

[F3] The projective line $\mathbb P^1_k$ has the two standard charts $U_0=\operatorname{Spec}k[t]$ and $U_\infty=\operatorname{Spec}k[u]$ glued along $tu=1$, with $\infty$ the origin $u=0$ of the second chart; on a smooth curve the closed points are the maximal ideals of the chart rings. ([[def-projective-line-two-affine-cover-and-twisting-sheaf]], [[def-algebraic-curve-over-field]])

[F4] Assume AC, inherited from the projective-line charts and curve basics in [F1] and [F3], as well as the smooth-curve DVR context. The closed-point local rings are DVRs, supplying the local orders in a principal divisor. The degree homomorphism itself is the choice-free finite sum in [F2]. ([[def-axiom-of-choice]], [[def-divisor-smooth-proper-curve]], [[def-degree-divisor-proper-curve]])



## Proof

**Proof technique:** direct; compute the residue field, the local orders of $f=t^2+1$ at its zero and at infinity, and the base change to $\mathbb C$.

1.1 Residue field of $x$. On the chart $U_0=\operatorname{Spec}\mathbb R[t]$ the point $x=V(t^2+1)$ corresponds to the maximal ideal $(t^2+1)$, which is maximal because $t^2+1$ is irreducible over $\mathbb R$ (it has no real root and degree two); hence $\kappa(x)=\mathbb R[t]/(t^2+1)\cong\mathbb C$ [F3], a finite extension of $\mathbb R$ of degree $2$. [F1, F3]

1.2 Order of vanishing at $x$. In the local ring $\mathcal O_{C,x}=\mathbb R[t]_{(t^2+1)}$ the element $t^2+1$ generates the maximal ideal, hence is a uniformizer and $\operatorname{ord}_x(f)=1$: the divisor of $f$ has the term $+[x]$. [F3]

1.3 Order of the pole at infinity. In the chart $U_\infty=\operatorname{Spec}\mathbb R[u]$ with $u=1/t$ one has $f=t^2+1=u^{-2}(1+u^2)$ with $1+u^2$ a unit of the local ring at $u=0$ because it evaluates to $1$ there; hence $\operatorname{ord}_\infty(f)=-2$ and the divisor of $f$ has the term $-2[\infty]$. [F3]

2.1 Degree of $[x]$. By the degree formula of [F2], $\deg_{\mathbb R}([x])=1\cdot[\kappa(x):\mathbb R]=1\cdot2=2$, while the support of $[x]$ is the single point $x$; this is the sense in which the degree counts with residue-field degrees rather than with a point count. [F2, step 1.1]

3.1 Principal divisor. At every other closed point of $U_0$, $t^2+1$ is a unit, since its only irreducible factor is $t^2+1$; the complement of $U_0$ is the single point $\infty$. Thus steps 1.2 and 1.3 account for every nonzero order: $\operatorname{div}(f)=[x]-2[\infty]$, and its degree is $\deg_{\mathbb R}([x])-2\deg_{\mathbb R}([\infty])=2-2\cdot1=0$ by [F2]; the point $\infty$ has residue field $\mathbb R$ and degree one. Thus $[x]$ is linearly equivalent to $2[\infty]$, a divisor of the same degree $2$. [F2, F3, step 1.2, step 1.3, step 2.1]

3.2 Base change to $\mathbb C$. On the base-changed affine chart, the fibre of $x$ has coordinate algebra $\mathbb C[t]/(t^2+1)=\mathbb C[t]/((t-\mathrm i)(t+\mathrm i))$. Evaluation at $\mathrm i$ and $-\mathrm i$ identifies this algebra with $\mathbb C\times\mathbb C$: every class has a unique representative $a+bt$, and its evaluations $a+b\mathrm i,a-b\mathrm i$ determine $a,b$ uniquely. Thus the fibre consists of the two distinct reduced points $t=\mathrm i$ and $t=-\mathrm i$, each with residue field $\mathbb C$ and degree one. At each point $t^2+1$ has order one, since its other linear factor is a unit. Hence the base-changed divisor is $[\mathrm i]+[-\mathrm i]$, of degree $2=\deg_{\mathbb R}([x])$. [F2, step 2.1]

4.1 Conclusion. On $\mathbb P^1_{\mathbb R}$ the divisor $D=[x]$ has degree $2$ although it is supported at one point, its class is the class of $2[\infty]$ by the principal divisor $[x]-2[\infty]$, and after base change to $\mathbb C$ it becomes the sum of the two degree-one points $\mathrm i,-\mathrm i$ with the same total degree. Degree is therefore computed with residue-field degrees, as in [F2]; Choice in [F4] is inherited from the projective-line and DVR suppliers, whereas additivity of the degree is choice-free and no further selection is used here. [F2, F4, step 2.1, step 3.2] ∎
