---
id: lem-free-homotopy-classes-of-loops-are-conjugacy-classes
kind: lemma
title: "Free homotopy classes of loops are conjugacy classes"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-based-loops-and-fundamental-group, def-conjugacy-class-and-centralizer,
       thm-fundamental-group-laws, def-homotopy-relative-and-path-homotopy,
       lem-continuity-is-local-and-pastes, thm-algebra-of-continuous-functions,
       thm-product-universal-property]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Chapter 1, Proposition 1.6 and the discussion of free homotopy of loops"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2, the free-homotopy/conjugacy bridge for closed braids"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Statement

Let $X$ be a path-connected topological space with basepoint $x_0$, and let
$\alpha,\beta\colon I\to X$ be loops at $x_0$. Write $I=[0,1]$. Two loops
$\alpha,\beta$ at $x_0$ are **freely homotopic** when there is a continuous map
$H\colon I\times I\to X$ with

$$H(s,0)=\alpha(s),\qquad H(s,1)=\beta(s),\qquad H(0,t)=H(1,t)\quad(s,t\in I),$$

so that the two boundary paths $t\mapsto H(0,t)=H(1,t)$ coincide but need not be
constant. Free homotopy is an equivalence relation on the loops at $x_0$; its
classes are the **free homotopy classes**. Then $\alpha$ and $\beta$ are freely
homotopic if and only if their classes in $\pi_1(X,x_0)$ are conjugate:

$$\beta\text{ is freely homotopic to }\alpha\quad\Longleftrightarrow\quad[\beta]=[\gamma]^{-1}[\alpha][\gamma]\ \text{ for some loop }\gamma\text{ at }x_0.$$

Consequently the free homotopy classes of loops in $X$ correspond bijectively to
the conjugacy classes of $\pi_1(X,x_0)$ ([[def-conjugacy-class-and-centralizer]]).

## Facts & Assumptions

**Given:** A path-connected topological space $X$ with basepoint $x_0$, two loops $\alpha,\beta\colon I\to X$ at $x_0$, and a free homotopy $H$ from $\alpha$ to $\beta$ with boundary loop $\gamma(t):=H(0,t)=H(1,t)$.

[F1] Two based loops at $x_0$ are equivalent when they are path-homotopic relative to the endpoints, the multiplication on loop classes is $[\alpha][\beta]:=[\alpha*\beta]$, the constant loop is $c_{x_0}$, and the reversed loop is $\bar\alpha(s)=\alpha(1-s)$ ([[def-based-loops-and-fundamental-group]]).

[F2] For every pointed space the product $[\alpha][\beta]=[\alpha*\beta]$ is well defined and makes $\pi_1(X,x_0)$ a group; its identity is the class of the constant loop $c_{x_0}$, and $[\alpha]^{-1}=[\bar\alpha]$ ([[thm-fundamental-group-laws]]).

[F3] The conjugacy class of an element $x$ of a group is $\operatorname{Cl}_G(x)=\{gxg^{-1}:g\in G\}$ ([[def-conjugacy-class-and-centralizer]]).

[F4] A path homotopy from $\alpha$ to $\beta$ relative to the endpoints is a homotopy $H:I\times I\to X$ rel $\{0,1\}$, that is, with $H(0,t)=\alpha(0)=\beta(0)$ and $H(1,t)=\alpha(1)=\beta(1)$ for all $t$ ([[def-homotopy-relative-and-path-homotopy]]).

[F5] If $f:X\to Y$ and $g:Y\to Z$ are continuous then $g\circ f$ is continuous; and if $F_1,\dots,F_n$ are closed subsets of a space $X$ with $F_1\cup\dots\cup F_n=X$ and $f|_{F_k}$ is continuous for every $k$, then $f$ is continuous ([[lem-continuity-is-local-and-pastes]]).

[F6] On a domain $A\subseteq\mathbb R$, constant functions, the identity, and sums and products of continuous real functions are continuous ([[thm-algebra-of-continuous-functions]]).

[F7] A map $h:Z\to\prod_i X_i$ into a product is continuous exactly when all its components $\pi_i\circ h$ are continuous ([[thm-product-universal-property]]).

## Proof

**Proof technique:** direct.

1.1 **The square homotopy that realizes the conjugation.** Assume a free homotopy $H$ from $\alpha$ to $\beta$ is given and let $\gamma(t):=H(0,t)=H(1,t)$; then $\gamma$ is a loop at $x_0$, because $\gamma(0)=H(0,0)=\alpha(0)=x_0$ and $\gamma(1)=H(0,1)=\beta(0)=x_0$. Define the piecewise-affine path in the square $B\colon I\to I\times I$ by $B(s):=(0,1-4s)$ for $s\le\tfrac14$, $B(s):=(4s-1,0)$ for $\tfrac14\le s\le\tfrac12$, and $B(s):=(1,2s-1)$ for $s\ge\tfrac12$, and define $\varphi(s,t):=(1-t)(s,1)+t\,B(s)\in I\times I$ and $J:=H\circ\varphi\colon I\times I\to X$. For joint continuity on a rectangle, the product topology has neighborhoods $|s-s_0|<\delta$, $|t-t_0|<\delta$. At a point $(a_0,b_0)$, $|(a+b)-(a_0+b_0)|\le |a-a_0|+|b-b_0|$ and $|ab-a_0b_0|\le |a|\,|b-b_0|+|b_0|\,|a-a_0|$, with $|a|\le |a_0|+1$ when $|a-a_0|<1$. These estimates prove joint continuity of addition and multiplication; composing them with continuous coordinates gives continuity of each polynomial expression used below. Every piece of $B$ is affine, so $B$ is continuous by [F5] and [F6]; on each of the three closed pieces every component of $\varphi$ is a sum of products of affine coordinate functions, hence is continuous by these estimates; the pieces agree on their seams, so $\varphi$ is continuous by [F5], [F6] and [F7]; hence $J$ is continuous by [F5]. [F5, F6, F7, given, construct]

2.1 **The moving-basepoint homotopy.** Assume now that $\gamma$ is an arbitrary loop at $x_0$ and define, for $(s,u)\in I\times I$, $R_u(s):=\gamma(u(1-4s))$ for $s\le\tfrac14$, $R_u(s):=\alpha(4s-1)$ for $\tfrac14\le s\le\tfrac12$, and $R_u(s):=\gamma(u(2s-1))$ for $s\ge\tfrac12$. Each $R_u$ is a loop at $\gamma(u)$, because the three pieces join continuously at $s=\tfrac14$ and $s=\tfrac12$, they take the values $\gamma(u),x_0,x_0,\gamma(u)$ at $s=0,\tfrac14,\tfrac12,1$, and each argument supplied to $\gamma$ or $\alpha$ is a polynomial in $(s,u)$ on its closed rectangle. These arguments are continuous by the estimates in step 1.1, and composing with the continuous loops is permitted by [F5]; consequently the map $R\colon I\times I\to X$, $R(s,u):=R_u(s)$, is continuous by [F5], [F6] and [F7]. [F5, F6, F7, step 1.1, given, construct]

2.2 **The square homotopy is a path homotopy from $\beta$ to $(\bar\gamma*\alpha)*\gamma$.** For $J$ of step 1.1: $J(s,0)=H(\varphi(s,0))=H(s,1)=\beta(s)$; $J(s,1)=H(B(s))$ and the three pieces of $B$ give $H(B(s))=\gamma(1-4s)=\bar\gamma(4s)$ for $s\le\tfrac14$, $H(B(s))=\alpha(4s-1)$ for $\tfrac14\le s\le\tfrac12$ and $H(B(s))=\gamma(2s-1)$ for $s\ge\tfrac12$, which is exactly the loop $(\bar\gamma*\alpha)*\gamma$ of [F1]; finally $\varphi(0,t)=(1-t)(0,1)+t(0,1)=(0,1)$ and $\varphi(1,t)=(1-t)(1,1)+t(1,1)=(1,1)$, so $J(0,t)=H(0,1)=\beta(0)=x_0$ and $J(1,t)=H(1,1)=\beta(1)=x_0$ for every $t$. Hence $J$ is a path homotopy relative to the endpoints from $\beta$ to $(\bar\gamma*\alpha)*\gamma$ in the sense of [F4]. [F4, step 1.1, given, algebra]

3.1 **The moving-basepoint family is a free homotopy.** For the family $R$ of step 2.1 one has $R(s,0)=c_{x_0}$-insertions: $R_0(s)=x_0$ for $s\le\tfrac14$ and $s\ge\tfrac12$, while $R_0(s)=\alpha(4s-1)$ in between, so $R_0=\bar c_{x_0}*\alpha*c_{x_0}$ is the loop obtained from $\alpha$ by adjoining constant loops; and $R_1=\bar\gamma*\alpha*\gamma$. Since $R(0,u)=\gamma(u)=R(1,u)$ for every $u$, the family $R$ is a free homotopy from $R_0$ to $R_1=\bar\gamma*\alpha*\gamma$ in the sense of the Statement. [F1, step 2.1, given]

3.2 **Free homotopy implies conjugacy.** By step 2.2 and [F1] the classes satisfy $[\beta]=[(\bar\gamma*\alpha)*\gamma]=[\bar\gamma][\alpha][\gamma]=[\gamma]^{-1}[\alpha][\gamma]$, using associativity of the group product and $[\bar\gamma]=[\gamma]^{-1}$ from [F2]. [F1, F2, step 2.2, algebra]

4.1 **Conjugacy implies free homotopy.** Conversely, let $\gamma$ be a loop at $x_0$ with $[\beta]=[\gamma]^{-1}[\alpha][\gamma]$. By [F2] the class of $R_0=\bar c_{x_0}*\alpha*c_{x_0}$ is $[c_{x_0}]^{-1}[\alpha][c_{x_0}]=[\alpha]$, so by [F1] there is a path homotopy relative to the endpoints from $\alpha$ to $R_0$; by step 3.1 the family $R$ is a free homotopy from $R_0$ to $\bar\gamma*\alpha*\gamma$; and $[\bar\gamma*\alpha*\gamma]=[\gamma]^{-1}[\alpha][\gamma]=[\beta]$, so again by [F1] there is a path homotopy relative to the endpoints from $\bar\gamma*\alpha*\gamma$ to $\beta$. Reparametrising the homotopy parameter by the three-part affine map $t\mapsto3t$, $t\mapsto3t-1$, $t\mapsto3t-2$ on $[0,\tfrac13],[\tfrac13,\tfrac23],[\tfrac23,1]$ and pasting the three homotopies, which agree on the seams, gives one continuous $K\colon I\times I\to X$ with $K(s,0)=\alpha(s)$, $K(s,1)=\beta(s)$ and $K(0,t)=K(1,t)$ for every $t$: the pasting is licensed by [F5] and the affine reparametrisation by [F6]. So $\alpha$ and $\beta$ are freely homotopic. [F1, F2, F5, F6, step 3.1, given, algebra]

5.1 **Conclusion.** Step 3.2 shows that a free homotopy from $\alpha$ to $\beta$ produces a conjugating loop $\gamma$ with $[\beta]=[\gamma]^{-1}[\alpha][\gamma]$, and step 4.1 shows conversely that each conjugating relation produces a free homotopy. Hence $\alpha$ and $\beta$ are freely homotopic if and only if their classes are conjugate. Moreover free homotopy is an equivalence relation: it is reflexive via the constant homotopy $H(s,t):=\alpha(s)$, symmetric by reversing the deformation parameter, and transitive by the pasting argument of step 4.1. Therefore the free homotopy classes of loops at $x_0$ are in bijection with the conjugacy classes of $\pi_1(X,x_0)$, the map being induced by $\alpha\mapsto[\alpha]$. [F3, F5, step 3.2, step 4.1] ∎
