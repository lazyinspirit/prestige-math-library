---
id: def-real-projective-line-and-its-sl2-action
kind: definition
title: The real projective line and the action of SL2(R)
status: published
origin: pipeline
dependency_level: 0
deps:
  - def-one-point-compactification
  - thm-one-point-compactification-properties
  - lem-unit-circle-is-a-compact-metrizable-topological-group
  - def-metrizable-space
  - thm-metric-hausdorff-separation
  - thm-compactness-under-continuous-maps
  - thm-heine-borel-r
  - lem-compact-implies-closed-and-bounded-r
  - def-continuous-map-top
  - def-homeomorphism-and-open-maps
  - def-topological-space
  - def-product-topology
  - def-subspace-topology-top
  - thm-product-universal-property
  - lem-algebra-of-continuous-real-maps-on-a-space
  - lem-continuity-is-local-and-pastes
  - def-complex-metric-convergence-and-continuity
  - def-topological-group
  - def-matrix-product-and-identity-matrix
  - def-determinant-of-a-square-matrix
  - thm-determinant-multiplicative
  - thm-ring-matrix-arithmetic-laws
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Choice-free. Only finite products, explicit coordinates, and one locally specified vector or point are used. The finite-product clauses of the product topology suppliers are used; their arbitrary-index Choice clauses are not. The countable-choice-dependent general-linear Lie-group example is not used."
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix A, Example A.6.4(ii), printed pp. 327–328: the fractional-linear action of SL2(R) on R∪{∞}"
---

## Definition

Give $\mathbb R^2$ its finite product topology and define $P^1(\mathbb R)$ to be the set of equivalence classes of nonzero pairs $(x,y)\in\mathbb R^2$, where $(x,y)\sim(\lambda x,\lambda y)$ for $\lambda\in\mathbb R^\times$; write a class as $[x:y]$. Identify it as a set with the one-point compactification $\mathbb R^*=\mathbb R\cup\{\infty\}$ ([[def-one-point-compactification]]) by $[t:1]\leftrightarrow t$ and $[1:0]\leftrightarrow\infty$, and give it the transported topology. The map
$$h(t)=\frac{2t}{1+t^2}+i\frac{t^2-1}{1+t^2}\quad(t\in\mathbb R),\qquad h(\infty)=i$$
is a homeomorphism $\mathbb R^*\to\mathbb T:=\{z\in\mathbb C:|z|=1\}$; consequently $P^1(\mathbb R)$ is compact and metrizable ([[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[def-metrizable-space]]). The map $\varphi:\mathbb R^2\setminus\{(0,0)\}\to P^1(\mathbb R)$, $\varphi(x,y)=[x:y]$, is continuous and surjective, and $\varphi(u,v)=\varphi(x,y)$ exactly when $(u,v)=\lambda(x,y)$ for some $\lambda\in\mathbb R^\times$ ([[def-continuous-map-top]]).

Let $G=\mathrm{SL}_2(\mathbb R)=\left\{\begin{pmatrix}a&b\\c&d\end{pmatrix}:ad-bc=1\right\}$ have matrix multiplication and the subspace topology from the finite product $\mathbb R^4$ ([[def-product-topology]], [[def-topological-group]]). For $g=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in G$, define
$$g\cdot[x:y]:=[ax+by:cx+dy].$$
This is a well-defined left action by homeomorphisms, and its action map $G\times P^1(\mathbb R)\to P^1(\mathbb R)$ is continuous ([[def-homeomorphism-and-open-maps]]). In the coordinate $t=x/y$,
$$g\cdot t=\frac{at+b}{ct+d}\quad(ct+d\ne0),\qquad g\cdot(-d/c)=\infty\quad(c\ne0),\qquad g\cdot\infty=\begin{cases}a/c,&c\ne0,\\ \infty,&c=0.\end{cases}$$
In particular $u_+=\begin{pmatrix}1&1\\0&1\end{pmatrix}$ acts by $t\mapsto t+1$ and fixes $\infty$. The matrix $u_-=\begin{pmatrix}1&0\\1&1\end{pmatrix}$ acts by $t\mapsto t/(t+1)$, fixes $t=0$, and sends $t=-1$ to $\infty$. In the other chart $s=y/x$, $u_-$ acts by $s\mapsto s+1$ for finite $s$ and fixes the omitted point $s=\infty$ (the line $[0:1]$).

## Remarks

For the circle map, $(2t)^2+(t^2-1)^2=(1+t^2)^2$, so $|h(t)|=1$. If $z=x+iy\ne i$ lies on the circle, then $1-y\ne0$ and $t=x/(1-y)$ satisfies $h(t)=z$; the remaining circle point $i$ is $h(\infty)$. At finite $t$ the coordinates of $h$ are quotients of continuous real functions with denominator $1+t^2>0$. Also $|h(t)-i|=2/\sqrt{1+t^2}\to0$ as $|t|\to\infty$. For each $\eta>0$, choose $R>0$ with $2/\sqrt{1+R^2}<\eta$. The set $\mathbb R^*\setminus[-R,R]$ is a neighbourhood of $\infty$, since $[-R,R]$ is compact by [[thm-heine-borel-r]] and closed by [[lem-compact-implies-closed-and-bounded-r]], and $h$ maps it into the $\eta$-ball about $i$. Thus $h$ is continuous at $\infty$. It is therefore a continuous bijection from compact $\mathbb R^*$ ([[thm-one-point-compactification-properties]]) to the Hausdorff metric circle ([[thm-metric-hausdorff-separation]]), so it is a homeomorphism by [[thm-compactness-under-continuous-maps]]. Pulling back the circle metric gives a metric on $P^1(\mathbb R)$.

The map $\varphi$ is continuous at every point with $y\ne0$: near $(x,y)$ keep $|y'|>|y|/2$, and use $\left|x'/y'-x/y\right|\le 2|x'-x|/|y|+2|x||y'-y|/|y|^2$. If $y=0$ then $x\ne0$; for any closed compact $K\subseteq\mathbb R$, choose $M$ with $|t|\le M$ for all $t\in K$ ([[lem-compact-implies-closed-and-bounded-r]]). On the neighbourhood $|x'-x|<|x|/2$, $|y'|<|x|/(2(M+1))$, a point with $y'=0$ maps to $\infty$, while a point with $y'\ne0$ has $|x'/y'|>M$ and maps outside $K$. This proves continuity at $[x:0]$ by the neighbourhood basis of the one-point compactification. The fiber statement follows by comparing ratios when both second coordinates are nonzero; when the common value is $\infty$, both second coordinates vanish and the first coordinates are nonzero, so the pairs are again nonzero scalar multiples.

The set $G$ is a group: determinant multiplicativity gives closure under multiplication, and the inverse of $\begin{pmatrix}a&b\\c&d\end{pmatrix}$ is $\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$; associativity is inherited from matrix multiplication. Its multiplication entries are sums of products of coordinate maps, and inversion entries are coordinate maps with signs, so both are continuous by [[lem-algebra-of-continuous-real-maps-on-a-space]] and the finite product and subspace topologies. Thus $G$ is a topological group without using a choice-dependent Lie-group result.

The reciprocal map $J:\mathbb R^*\to\mathbb R^*$, $J(t)=1/t$ for $t\ne0,\infty$, $J(0)=\infty$, and $J(\infty)=0$, is a homeomorphism. It is continuous away from $0,\infty$ by ordinary reciprocal continuity. Given a neighbourhood $\mathbb R^*\setminus K$ of $\infty$, choose $M$ bounding the compact set $K$ ([[lem-compact-implies-closed-and-bounded-r]]); then $J$ maps $(-1/(M+1),1/(M+1))$ into that neighbourhood, proving continuity at $0$. Every interval $(-\varepsilon,\varepsilon)$ about $0$ contains $J(t)$ for $|t|>1/\varepsilon$ and for $t=\infty$, and that tail is a neighbourhood of $\infty$, proving continuity there. Since $J^2$ is the identity, $J$ is a homeomorphism. It is the coordinate swap $[x:y]\mapsto[y:x]$ and supplies the second coordinate chart $s=y/x$ around $t=\infty$.

For joint continuity of the action, use the two source charts $[t:1]$ and $[1:s]$. Their unnormalized output coordinates are $(at+b,ct+d)$ and $(a+bs,c+ds)$, respectively. They cannot both vanish because $g$ is invertible. Wherever the second coordinate is nonzero, the target $t$-coordinate is the quotient of the first by the second; wherever the first is nonzero, the target $s$-coordinate is the quotient of the second by the first. These quotients are continuous on their open domains by [[lem-algebra-of-continuous-real-maps-on-a-space]]. The charts cover the source and target, so the action map is continuous. The identity and composition laws follow from matrix multiplication, and the map for $g^{-1}$ is the inverse homeomorphism. No choice principle is used.
