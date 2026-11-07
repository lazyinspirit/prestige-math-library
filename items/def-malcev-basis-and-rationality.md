---
dependency_level: 2
id: def-malcev-basis-and-rationality
kind: definition
title: Mal’cev bases, rationality, and coordinate metrics
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-filtered-nilpotent-lie-group-and-nilmanifold
  - lem-tangent-space-of-a-lie-group-is-a-lie-algebra
  - def-lie-group
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Definitions 2.1–2.6, printed pp. 478–480; Appendix A.4–A.6 and A.15
    - title: Bob Hough, Math 639 Lecture 16, Equidistribution on nilmanifolds
      url: https://www.math.stonybrook.edu/~rdhough/mat639-spring17/lectures/lecture16.pdf
      locator: Mal’cev bases, coordinate metrics, rationality, pp. 6–10 and 22–25
---

## Definition

Let $G/\Gamma$ be an $m$-dimensional nilmanifold with filtration $G_\bullet$,
and put $m_i=\dim G_i$. A **Mal’cev basis adapted to $G_\bullet$** is an
ordered basis $X=(X_1,\ldots,X_m)$ of the tangent Lie algebra such that each
subspace $\mathfrak h_j=\operatorname{span}(X_{j+1},\ldots,X_m)$ is a Lie
ideal, each $H_j=\exp(\mathfrak h_j)$ is a closed connected normal subgroup,
$G_i=H_{m-m_i}$, and every $g\in G$ has a unique expression

$$g=\exp(t_1X_1)\cdots\exp(t_mX_m),\qquad (t_1,\ldots,t_m)\in\mathbb R^m,$$

with the coordinate map $\psi_X(g)=(t_1,\ldots,t_m)$ a smooth
diffeomorphism and $\Gamma=\psi_X^{-1}(\mathbb Z^m)$. Here $\exp(X)$ is the
time-one value of the one-parameter subgroup with tangent vector $X$.

For $Q\geq1$, the basis is **$Q$-rational** if the structure constants
$c_{ij}^k$ in $[X_i,X_j]=\sum_k c_{ij}^kX_k$ are rational numbers of height
at most $Q$. The height of a reduced rational $a/b$ is
$\max(|a|,|b|)$, and irrational numbers have infinite height. A closed
connected subgroup $G'\leq G$ is **$Q$-rational relative to $X$** if its Lie
algebra has a basis made of rational linear combinations of $X_1,\ldots,X_m$
whose coefficient heights are at most $Q$, and $\Gamma'=G'\cap\Gamma$ is a
lattice in $G'$. A **horizontal character** is a
continuous homomorphism $\eta:G\to\mathbb R/\mathbb Z$ that annihilates
$\Gamma$. It has a unique vector $k\in\mathbb Z^m$ with
$\eta(g)=k\cdot\psi_X(g)\pmod{\mathbb Z}$; define $|\eta|=\|k\|_\infty$.

Define the coordinate chain distance on $G$ by

$$d_X^G(x,y)=\inf\sum_{i=1}^r\min\bigl(\|\psi_X(x_{i-1}x_i^{-1})\|_\infty,\|\psi_X(x_ix_{i-1}^{-1})\|_\infty\bigr),$$

where the infimum is over finite chains $x_0=x,\ldots,x_r=y$. The quotient
distance is

$$d_X(x\Gamma,y\Gamma)=\inf_{\gamma\in\Gamma}d_X^G(x,y\gamma).$$

For $M\geq1$, a group element $\gamma\in G$ is **$M$-rational** if
$\gamma^q\in\Gamma$ for some integer $1\leq q\leq M$; the coset $\gamma\Gamma$
is an $M$-rational point. A subgroup or point called $M$-rational uses the
same height or denominator bounds with $Q=M$.

## Definition references

[Green and Tao, Definitions 2.1–2.6](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

[Hough, Math 639 Lecture 16](https://www.math.stonybrook.edu/~rdhough/mat639-spring17/lectures/lecture16.pdf)

## Facts & Assumptions

**Given:** A nilmanifold $G/\Gamma$ with a Mal’cev basis $X$ satisfying the
conditions in the definition above.

[F1] $G$ is a connected, simply connected nilpotent Lie group, and $\Gamma$
is a discrete subgroup with compact right quotient. The filtration and tangent
Lie algebra use the stated group and lower-central conventions.
[[def-filtered-nilpotent-lie-group-and-nilmanifold]]

[F2] The tangent Lie algebra uses the left-translation-invariant derivation
bracket on $T_eG$. [[lem-tangent-space-of-a-lie-group-is-a-lie-algebra]]

[F3] Lie-group multiplication and inversion are smooth maps.
[[def-lie-group]]

## Proof

**Proof technique:** direct.

1.1 For $x,y\in G$, let $c(x,y)$ be the minimum of the two coordinate norms appearing in the definition of $d_X^G$. It is symmetric, and $c(xa,ya)=c(x,y)$ because $(xa)(ya)^{-1}=xy^{-1}$ and $(ya)(xa)^{-1}=yx^{-1}$. Taking infima over chains shows that $d_X^G$ is symmetric and right invariant. Concatenating chains gives the triangle inequality, and a one-edge chain makes it finite. [given, F1, algebra]

1.2 For a horizontal character $\eta$, the restriction $\lambda_i(t)=\eta(\exp(tX_i))$ is a continuous homomorphism $\mathbb R\to\mathbb R/\mathbb Z$. Continuity at $0$ gives $r>0$ such that for $|t|<r$ its values have unique representatives $\widetilde\lambda_i(t)\in(-1/4,1/4)$; this lift is continuous. If $s,t,s+t$ lie in $(-r,r)$, the homomorphism law makes $\widetilde\lambda_i(s)+\widetilde\lambda_i(t)-\widetilde\lambda_i(s+t)$ an integer. Its absolute value is less than $3/4$, so it is zero. Fix $t_0\in(0,r)$; repeated local additivity gives $\widetilde\lambda_i(qt_0)=q\widetilde\lambda_i(t_0)$ for every rational $q$ with $|qt_0|<r$: first divide $t_0$ into equal parts, then add those parts or their negatives to reach $qt_0$. These rational multiples are dense in $(-r,r)$, so continuity gives $\widetilde\lambda_i(t)=k_it$ there, where $k_i=\widetilde\lambda_i(t_0)/t_0$. For arbitrary $t$, choose a positive integer $n$ with $|t/n|<r$ and use the homomorphism law to get $\lambda_i(t)=n\lambda_i(t/n)=k_it\pmod{\mathbb Z}$. Since $\exp(X_i)\in\Gamma$, annihilation of $\Gamma$ gives $0=\lambda_i(1)=k_i\pmod{\mathbb Z}$, hence $k_i\in\mathbb Z$. The unique Mal’cev factorization of $g$ and the homomorphism property then give $\eta(g)=\sum_i k_it_i\pmod{\mathbb Z}$. If two vectors gave the same character, varying each real coordinate $t_i$ would force their $i$th coordinates to agree, so the integral vector and its norm are unique. [given, F1, F2, algebra]

2.1 In global coordinates, multiplication and inversion are smooth by [F3]. On compact coordinate cubes their derivatives are bounded. For a small coordinate increment $z$, the smooth maps $\psi_X(\psi_X^{-1}(z)\psi_X^{-1}(\xi))$ and $\psi_X(\psi_X^{-1}(z)^{-1}\psi_X^{-1}(\xi))$ equal $\xi$ when $z=0$. The mean-value inequality in $z$ therefore supplies $\epsilon,C>0$ such that, if $\|\psi_X(x)\|_\infty\leq1$ and $c(x,y)<\epsilon$, then $\|\psi_X(y)\|_\infty\leq2$ and $\|\psi_X(y)-\psi_X(x)\|_\infty\leq Cc(x,y)$; the two maps cover the cases $y=(yx^{-1})x$ and $y=(xy^{-1})^{-1}x$. Choose $\epsilon_0<\min(\epsilon,1/(2C))$. For a chain from $e$ with total cost $S<\epsilon_0$, induction gives $\|\psi_X(x_j)\|_\infty\leq C\sum_{i=1}^j c(x_{i-1},x_i)<1/2$ at every vertex: the estimate applies at each edge because the preceding vertex stays in the unit cube. If $d_X^G(e,x_r)=0$, such chains exist with $S$ arbitrarily small, so the bound forces $\psi_X(x_r)=0$ and $x_r=e$. Right invariance then proves nondegeneracy for every pair. A one-edge chain gives $d_X^G(e,x)\leq\|\psi_X(x)\|_\infty$; conversely the chain estimate gives $\|\psi_X(x)\|_\infty\leq C d_X^G(e,x)$ locally by taking infima. Thus the metric and coordinate topologies agree locally. [given, F1, F3, step 1.1, algebra, choose]

2.2 Right translations by elements of $\Gamma$ are isometries for $d_X^G$. Replacing $x$ by $x\gamma_0$ and $y$ by $y\gamma_1$ changes the infimum to $\inf_{\gamma\in\Gamma}d_X^G(x\gamma_0,y\gamma_1\gamma)$; right translating both entries by $\gamma_0^{-1}$ replaces the variable $\gamma$ by $\gamma_1\gamma\gamma_0^{-1}$, which again ranges over all of $\Gamma$. Thus the displayed infimum defining $d_X$ is independent of representatives. Its symmetry follows by right translating $d_X^G(x,y\gamma)$ by $\gamma^{-1}$ and using symmetry. For $\gamma,\eta\in\Gamma$, the triangle inequality on $G$ gives $d_X^G(x,z\eta\gamma)\leq d_X^G(x,y\gamma)+d_X^G(y\gamma,z\eta\gamma) =d_X^G(x,y\gamma)+d_X^G(y,z\eta)$; taking infima gives the quotient triangle inequality. [F1, step 1.1, algebra]

3.1 If $d_X(x\Gamma,y\Gamma)=0$, choose $\gamma_n\in\Gamma$ with $d_X^G(x,y\gamma_n)\to0$. By step 2.1 the metric topology on $G$ agrees with the coordinate topology, so $y\gamma_n\to x$ in $G$ and $\gamma_n\to y^{-1}x$. A discrete subgroup of a Lie group is closed: if a sequence in it converges, pairwise quotients eventually lie in an identity neighborhood meeting the subgroup only at $e$, so the sequence is eventually constant. Therefore $y^{-1}x\in\Gamma$, which is equivalent to $x\Gamma=y\Gamma$. The zero-dimensional one-point quotient is included. This proves that $d_X$ is a metric on $G/\Gamma$. [F1, step 2.1, step 2.2, algebra]

4.1 The height, rational subgroup, rational point, and rational group-element conditions above are definitions in terms of reduced rational coefficients, the supplied basis, and powers landing in $\Gamma$. The zero-dimensional case has the empty basis and trivial character; the statements above remain valid. [given, F1, step 1.2] ∎
