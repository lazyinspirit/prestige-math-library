---
id: thm-proximal-operator-existence-resolvent-firm-nonexpansive
kind: theorem
title: "Existence, resolvent characterization, and firm nonexpansiveness of the proximal map"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-proper-closed-convex-function-on-rn
  - lem-proper-closed-convex-function-affine-minorant
  - def-extended-real-epsilon-subdifferential
  - def-proximal-mapping
  - def-euclidean-inner-product
  - lem-smooth-composite-sum-preserves-proper-closed-convexity
  - thm-heine-borel-rn
  - thm-euclidean-semicontinuous-extreme-value-theorem
  - thm-euclidean-semicontinuity-level-set-characterisations
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §§1.1 and 2.3"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
    - title: "Amir Beck, First-Order Methods in Optimization, SIAM, 2017, Chapter 6"
      url: "https://epubs.siam.org/doi/book/10.1137/1.9781611974997"
---

## Statement

Let $g:\mathbb R^n\to(-\infty,+\infty]$ be proper, closed and convex in the epigraph convention of [[def-proper-closed-convex-function-on-rn]]. For every $t>0$ and $v\in\mathbb R^n$, the set $\operatorname{prox}_{tg}(v)$ is a singleton. Its unique element $u$ satisfies the resolvent equivalence
$$u=\operatorname{prox}_{tg}(v)\quad\Longleftrightarrow\quad (v-u)/t\in\partial g(u).$$
For any $v_1,v_2$ and $u_i=\operatorname{prox}_{tg}(v_i)$,
$$\|u_1-u_2\|_2^2\le\langle u_1-u_2,v_1-v_2\rangle.$$
In particular the proximal map is nonexpansive.

## Facts & Assumptions

**Given:** The function $g$, parameter $t>0$, and input points in the Statement.

[F1] [[def-proper-closed-convex-function-on-rn]]: $g$ has nonempty effective domain, is convex, and has closed epigraph.

[F2] [[lem-proper-closed-convex-function-affine-minorant]]: there are $a\in\mathbb R^n,b\in\mathbb R$ with $g(x)\ge\langle a,x\rangle+b$ for every $x$.

[F3] [[lem-smooth-composite-sum-preserves-proper-closed-convexity]]: adding a finite continuous convex function preserves properness, convexity and closed epigraph.

[F4] [[thm-heine-borel-rn]]: a closed bounded subset of $\mathbb R^n$ is compact.

[F5] [[thm-euclidean-semicontinuous-extreme-value-theorem]]: a real-valued lower-semicontinuous function on a nonempty compact Euclidean set attains its minimum.

[F6] [[thm-euclidean-semicontinuity-level-set-characterisations]]: lower semicontinuity is equivalent to closedness of every weak sublevel set.

[F7] [[def-extended-real-epsilon-subdifferential]]: $p\in\partial g(u)$ means $g(z)\ge g(u)+\langle p,z-u\rangle$ for every $z$.

[F8] [[def-proximal-mapping]]: the proximal set consists of all global minimizers of $g(x)+\|x-v\|_2^2/(2t)$.

[F9] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle x,y\rangle|\le\|x\|_2\|y\|_2$.


[F10] [[def-euclidean-inner-product]]: $\mathbb R^0$ is the singleton zero vector space, and its inner product and norm are zero.

## Proof

1.1 If $n=0$, [F10] gives $\mathbb R^0=\{0\}$. Properness [F1] forces $g(0)$ to be finite. Every input $v$, candidate $u$, competitor $z$ and subgradient vector $p$ is $0$. The objective in [F8] has only the candidate $0$, so $\operatorname{prox}_{tg}(0)=\{0\}$. The inequality in [F7] is $g(0)\ge g(0)+0$, so $\partial g(0)=\{0\}$ and $(v-u)/t=0\in\partial g(0)$; both directions of the resolvent equivalence hold. Firm nonexpansiveness and nonexpansiveness both reduce to $0\le0$. This proves every conclusion for $n=0$ without compactness or an affine-minorant argument. For the remainder assume $n\ge1$. [F1, F7, F8, F10, given, algebra]

1.2 Define $H(x)=g(x)+\|x-v\|_2^2/(2t)$. The quadratic is finite and continuous, and the identity $$\|(1-\theta)x+\theta y-v\|_2^2=(1-\theta)\|x-v\|_2^2+\theta\|y-v\|_2^2-\theta(1-\theta)\|x-y\|_2^2$$ shows it is convex. Thus [F3] makes $H$ proper, closed and convex. Choose $x_0\in\operatorname{dom}g$ and put $c=H(x_0)$. Then $S=\{x:H(x)\le c\}$ is nonempty and closed: it is the inverse image of $\operatorname{epi}H$ under the continuous map $x\mapsto(x,c)$. [F1, F3, F8, given, choose]

2.1 By [F2], completing the square gives $$H(x)\ge b+\langle a,x\rangle+\frac{\|x-v\|_2^2}{2t}=b+\langle a,v\rangle-\frac t2\|a\|_2^2+\frac1{2t}\|x-(v-ta)\|_2^2.$$ Thus $H(x)\le c$ forces $x$ into a fixed-radius ball, so $S$ is bounded and hence compact by [F4]. The restriction $H|_S$ is real-valued; each weak sublevel set is the intersection of $S$ with the inverse image of $\operatorname{epi}H$ under $x\mapsto(x,r)$ for its level $r$, hence closed in $S$. By [F6] it is lower semicontinuous, so [F5] gives a minimizer on $S$. Every point outside $S$ has value greater than $c$, while the minimum on $S$ is at most $c$, so this minimizer is global. [F2, F4, F5, F6, step 1.2, algebra]

2.2 The quadratic satisfies $\|\frac{x+y}{2}-v\|_2^2=\frac12\|x-v\|_2^2+\frac12\|y-v\|_2^2-\frac14\|x-y\|_2^2$. If two distinct points minimized $H$, convexity of $g$ and this identity would make their midpoint have strictly smaller value, a contradiction. Hence the global minimizer is unique, proving the singleton claim. [F1, step 1.2, algebra]

3.1 Suppose $u$ minimizes $H$ and fix $z\in\operatorname{dom}g$. For $0<\alpha<1$, convexity gives $g(u+\alpha(z-u))\le(1-\alpha)g(u)+\alpha g(z)$. Minimality and expansion of the quadratic therefore imply $$0\le H(u+\alpha(z-u))-H(u)\le\alpha\left(g(z)-g(u)+\frac{\langle u-v,z-u\rangle}{t}\right)+\frac{\alpha^2}{2t}\|z-u\|_2^2.$$ Divide by $\alpha$ and let $\alpha\downarrow0$; the parenthesized term is nonnegative. The same subgradient inequality is automatic for $z\notin\operatorname{dom}g$, so $(v-u)/t\in\partial g(u)$. [F1, F7, F8, step 2.2, algebra]

3.2 Conversely, if $(v-u)/t\in\partial g(u)$, then for every finite-valued $g(z)$ the subgradient inequality and $$\|z-v\|_2^2-\|u-v\|_2^2=\|z-u\|_2^2+2\langle u-v,z-u\rangle$$ give $H(z)-H(u)\ge\|z-u\|_2^2/(2t)\ge0$. Infinite-valued competitors cannot lower $H$, so $u$ is the unique minimizer from step 2.2. This proves the reverse implication. [F7, F8, step 2.2, algebra]

4.1 Let $u_i=\operatorname{prox}_{tg}(v_i)$ and $p_i=(v_i-u_i)/t$. From step 3.1, $p_i\in\partial g(u_i)$. Applying the two subgradient inequalities with $(u_1,u_2)$ and $(u_2,u_1)$ and adding yields $\langle p_1-p_2,u_1-u_2\rangle\ge0$. Substitution and multiplication by $t>0$ give $\|u_1-u_2\|_2^2\le\langle u_1-u_2,v_1-v_2\rangle$. By [F9] the right side is at most $\|u_1-u_2\|_2\|v_1-v_2\|_2$; if $u_1=u_2$ nonexpansiveness is immediate, and otherwise division gives it. [F7, F9, step 3.1, given, algebra] ∎
