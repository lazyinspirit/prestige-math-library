---
id: thm-holomorphic-constant-rank-theorem
kind: theorem
title: "The holomorphic constant-rank theorem"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-holomorphic-map-and-complex-jacobian, thm-holomorphic-inverse-function-theorem-several-variables, thm-holomorphic-implicit-function-theorem, thm-euclidean-constant-rank-normal-form, thm-componentwise-holomorphy-in-several-complex-variables, prop-holomorphic-functions-are-continuous-and-separately-holomorphic, thm-zero-complex-derivative-on-a-domain-implies-constant]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 5"
      url: "https://jirilebl.github.io/scv/scv.pdf"
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Sections 4.2 and 5.2"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
pipeline_run: frontier-22
---

## Statement

Let $m,n\ge1$, let $U\subseteq\mathbb C^m$ be open, let $F:U\to\mathbb C^n$ be
holomorphic, and suppose the complex rank of $DF$ is the constant value $r$ on a
neighbourhood of $a\in U$. Then there are biholomorphic coordinate changes
$\alpha$ near $a$ and $\beta$ near $F(a)$ such that

$$\beta\circ F\circ \alpha^{-1}(u,v)=(u,0)$$

for $(u,v)\in\mathbb C^r\times\mathbb C^{m-r}$ near $0$. Empty blocks are
omitted when $r=0$, $r=m$, or $r=n$.

## Facts & Assumptions

**Given:** The holomorphic map $F:U\to\mathbb C^n$, the point $a\in U$, and a neighbourhood on which $\operatorname{rank}_{\mathbb C}DF=r$.

[L1] If a holomorphic map has an invertible square complex Jacobian minor at a point, the corresponding coordinate-augmented map is locally biholomorphic ([[thm-holomorphic-inverse-function-theorem-several-variables]]).

[L2] Components of a holomorphic map are holomorphic, and holomorphic scalar functions are separately holomorphic on coordinate discs ([[thm-componentwise-holomorphy-in-several-complex-variables]], [[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]]).

[L3] A one-variable holomorphic function with zero derivative on a domain is constant ([[thm-zero-complex-derivative-on-a-domain-implies-constant]]).

## Proof

**Proof technique:** direct.

1.1 After composing on the source and target with coordinate permutations, we may assume that the first $r\times r$ minor of $J_{\mathbb C}F(a)$ is invertible. Write $$z=(x,y)\in\mathbb C^r\times\mathbb C^{m-r},\qquad F(z)=\bigl(F'(x,y),F''(x,y)\bigr)\in\mathbb C^r\times\mathbb C^{n-r},$$ and define $$\alpha(x,y):=\bigl(F'(x,y),y\bigr).$$ The complex Jacobian of $\alpha$ at $a$ is block triangular with diagonal blocks $\partial_xF'(a)$ and $I_{m-r}$, so it is invertible. Hence [L1] makes $\alpha$ biholomorphic after shrinking around $a$. [given, L1, construct]

2.1 Set $$G:=F\circ\alpha^{-1}.$$ Because $\alpha^{-1}(u,v)$ has second block $v$, one has $$G(u,v)=\bigl(u,h(u,v)\bigr)$$ for a holomorphic map $h$ into $\mathbb C^{n-r}$. Since $DG=DF\circ D\alpha^{-1}$ and $D\alpha^{-1}$ is invertible, $\operatorname{rank}DG$ is also $r$ on the shrunken neighbourhood. [step 1.1, algebra]

3.1 In the Jacobian of $G$, the first $r$ output coordinates are exactly the coordinates $u_1,\dots,u_r$, so the first $r$ rows already contain the $r\times r$ identity block. If some partial derivative $\partial h_k/\partial v_j$ were nonzero at a point, adjoining the corresponding row and $v_j$ column would create an $(r+1)\times(r+1)$ minor with nonzero determinant there, contradicting $\operatorname{rank}DG=r$. Therefore every $\partial h_k/\partial v_j$ vanishes on the neighbourhood. [step 2.1, algebra]

4.1 Fix $u$, fix all $v$-coordinates except $v_j$, and fix a component $h_k$. By [L2], the slice $$\lambda\longmapsto h_k(u,v_1,\dots,v_{j-1},\lambda,v_{j+1},\dots,v_{m-r})$$ is holomorphic on a disc, and step 3.1 says its derivative is identically $0$. Hence [L3] makes it constant. Repeating this for each $j$ shows that $h(u,v)$ is independent of $v$; writing $\phi(u):=h(u,0)$, [L2] makes $\phi$ holomorphic and gives $h(u,v)=\phi(u)$. [step 3.1, L2, L3]

5.1 Define the target shear $$\beta(\xi,\eta):=(\xi,\eta-\phi(\xi)).$$ Its inverse is $(\xi,\eta)\mapsto(\xi,\eta+\phi(\xi))$, so $\beta$ is biholomorphic near $F(a)$. Using step 4.1, $$\beta\circ F\circ\alpha^{-1}(u,v)=\beta\bigl(u,\phi(u)\bigr)=(u,0).$$ This is the claimed normal form, and when one of the dimensions $r$, $m-r$, or $n-r$ is $0$ the same formula is read with the corresponding block omitted. [step 1.1, step 4.1, construct, algebra] ∎
