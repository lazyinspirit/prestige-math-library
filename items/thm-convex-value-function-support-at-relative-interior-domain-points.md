---
id: thm-convex-value-function-support-at-relative-interior-domain-points
kind: theorem
title: A finite-dimensional convex value function has a support at relative-interior points
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-convex-program-duality-and-slater-condition
  - thm-convex-functions-on-open-convex-sets-are-locally-lipschitz
  - thm-nearest-point-in-a-nonempty-closed-convex-set
  - lem-projection-onto-a-closed-convex-set-has-the-variational-inequality
  - lem-finite-dimensional-unit-spheres-are-sequentially-compact
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Boyd and Vandenberghe, Convex Optimization
      url: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf
      locator: Chapter 5, Section 5.3.2, printed pp. 235–236; the Slater proof obtains a supporting affine lower bound to the perturbation value function.
    - title: "Zhiyuan Li, Convex Optimization, Lecture 5: Lagrange Multipliers and KKT"
      url: https://zhiyuanli.ttic.edu/convex-optimization-site/Lecture-5___-Lagrange-Multipliers-and-KKT/
      locator: Theorem 5.3, full proof in the Slater and exactness section; it invokes a relative-interior subgradient theorem for the perturbation value function.
---

## Statement

Let $V$ be a finite-dimensional Euclidean space and let
$p:V\to(-\infty,+\infty]$ be convex, never $-\infty$, and finite somewhere.
If $0\in\operatorname{ri}(\operatorname{dom}p)$ and $p(0)\in\mathbb R$, then
there is a linear functional $\ell:V\to\mathbb R$ such that
$$p(z)\ge p(0)+\ell(z)\qquad(z\in V).$$

## Facts & Assumptions

**Given:** The finite-dimensional Euclidean space, convex value function,
relative-interior point, and finite value in the Statement. The conventions
for domains, affine hull, relative interior and epigraph are those of
[[def-convex-program-duality-and-slater-condition]].

[F1] A finite convex real-valued function on an open convex subset of a
finite-dimensional Euclidean space is locally Lipschitz and hence continuous
([[thm-convex-functions-on-open-convex-sets-are-locally-lipschitz]]).

[F2] Every point has a nearest point in a nonempty closed convex Euclidean
set ([[thm-nearest-point-in-a-nonempty-closed-convex-set]]), and the
projection satisfies
$\langle z-\Pi_Cz,y-\Pi_Cz\rangle\le0$ for every $y\in C$
([[lem-projection-onto-a-closed-convex-set-has-the-variational-inequality]]).

[F3] The unit sphere in a finite-dimensional normed space is sequentially
compact, including the choice-free finite-dimensional case
([[lem-finite-dimensional-unit-spheres-are-sequentially-compact]]).

## Proof

1.1 Let $W=\operatorname{aff}(\operatorname{dom}p)$. Since $0$ belongs to the domain, $W$ is a linear subspace; relative interior gives a ball about $0$ in $W$ contained in $\operatorname{dom}p$. If $W=\{0\}$, take $\ell=0$. Otherwise identify $W$ with a Euclidean coordinate space. The restriction of $p$ to that open ball is finite and convex, so [F1] makes it continuous at $0$. [given, F1]

2.1 In $W\times\mathbb R$, let $E=\{(z,t):p(z)\le t\}$ and let $\overline E$ be its closure. The set $E$ is convex, $(0,p(0))\in E$, and $\overline E$ is nonempty, closed and convex. Continuity from step 1.1 shows that $(0,p(0)-\epsilon)\notin\overline E$ for every $\epsilon>0$: choose $\delta>0$ so $p(z)>p(0)-\epsilon/3$ whenever $\|z\|<\delta$, while a sufficiently small open ball about $(0,p(0)-\epsilon)$ has $\|z\|<\delta$ and $t<p(0)-2\epsilon/3$, so it misses $E$. Thus $(0,p(0))$ is a boundary point of $\overline E$. [step 1.1, given, algebra]

3.1 For each positive integer $k$, project $z_k=(0,p(0)-1/k)$ onto $\overline E$, obtaining $y_k$. Since $(0,p(0))\in\overline E$, the projection distance is at most $1/k$, so $y_k\to(0,p(0))$. The unit vectors $a_k=(y_k-z_k)/\|y_k-z_k\|_2$ have a convergent subsequence by [F3], with unit limit $a=(s,\alpha)\in W\times\mathbb R$. For each $y\in\overline E$, [F2] gives $\langle a_k,y-y_k\rangle\ge0$; passing along that subsequence gives $\langle a,y-(0,p(0))\rangle\ge0$. [F2, F3, step 2.1, construct]

4.1 The epigraph contains every upward vertical ray, so the support inequality forces $\alpha\ge0$. If $\alpha=0$, points $(z,p(z))\in E$ for all sufficiently small $z$ and $-z$ in the ball from step 1.1 force both $\langle s,z\rangle\ge0$ and $\langle s,-z\rangle\ge0$. Hence $s=0$, contradicting $\|a\|_2=1$. Therefore $\alpha>0$. Setting $\ell(z)=-\langle s,z\rangle/\alpha$, the support inequality at $(z,p(z))$ yields $p(z)\ge p(0)+\ell(z)$ for $z$ in the domain; outside the domain the inequality is automatic because $p(z)=+\infty$. [step 1.1, step 3.1, algebra] ∎
