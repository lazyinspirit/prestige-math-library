---
id: ex-two-equation-implicit-system
kind: example
title: "Two equations implicitly determine two variables near the origin"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-parametrized-implicit-function-theorem-with-higher-regularity, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-algebra-of-total-derivatives, thm-algebra-of-derivatives, thm-chain-rule, lem-derivative-of-a-power, thm-derivative-of-exponential]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Example 8.5.7"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
pipeline_run: null
---

## Example

Near $(x,y,z)=(0,0,0)$, the system

$$x^2+y^2-(z+1)^3=-1,\qquad e^x+e^y+e^z=3$$

determines unique smooth functions $y=y(x)$ and $z=z(x)$ with $y(0)=z(0)=0$. Their derivatives at zero are $y'(0)=-1$ and $z'(0)=0$.

## Facts & Assumptions

**Given:** Put $F_1=x^2+y^2-(z+1)^3+1$ and $F_2=e^x+e^y+e^z-3$. Sums and scalar multiples use [[thm-algebra-of-total-derivatives]] and [[thm-algebra-of-derivatives]].

[L1] Let $k,m,n\ge1$ and $p\in\mathbb N$, let $U\subseteq\mathbb R^{m+n+p}$ be open, and let $F:U\to\mathbb R^n$ be $C^k$. If $F(a,b,\lambda_0)=0$ and $D_yF(a,b,\lambda_0)$ is invertible, then on suitable neighbourhoods there is a unique $C^k$ map $\varphi$ with $F(x,y,\lambda)=0$ exactly when $y=\varphi(x,\lambda)$, and $D\varphi=-D_yF^{-1}D_{(x,\lambda)}F$ along its graph ([[thm-parametrized-implicit-function-theorem-with-higher-regularity]]).

[L2] The real exponential function is $C^\infty$ and has derivative equal to itself ([[thm-derivative-of-exponential]]).

[L3] For every integer $d\ge1$, the derivative of $x^d$ is $d x^{d-1}$ ([[lem-derivative-of-a-power]]).

[L4] The derivative of a composite is the product of the outer derivative at the inner value and the inner derivative ([[thm-chain-rule]]).

[L5] Finite componentwise sums, products, scalar multiples, and composites of $C^k$ Euclidean maps are $C^k$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

## Verification

**Proof technique:** direct.

1.1 Repeated use of [L3] and [L5] makes the polynomial terms smooth, while [L2] and [L5] make the exponential terms smooth; hence $F$ is smooth. Direct substitution gives $F(0,0,0)=0$, and [L2]–[L4] give $$D_{(y,z)}F(0,0,0)=\begin{pmatrix}0&-3\\1&1\end{pmatrix},$$ whose determinant is $3$, while $D_xF(0,0,0)=(0,1)^T$. [L2, L3, L4, L5, given, algebra]

2.1 Step 1.1 satisfies [L1], so unique smooth $y(x),z(x)$ solve the system near zero. Its derivative formula gives $\binom{y'(0)}{z'(0)}=-D_{(y,z)}F(0)^{-1}D_xF(0)=\binom{-1}{0}$. [step 1.1, L1, algebra] ∎
