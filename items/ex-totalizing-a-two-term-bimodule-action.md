---
id: ex-totalizing-a-two-term-bimodule-action
kind: example
title: "Totalizing a two-term twist action"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-khovanov-seidel-positive-and-negative-twist-complexes, def-signed-totalization-of-graded-a-m-bimodule-actions, lem-graded-balanced-tensor-and-shift-isomorphisms, def-khovanov-seidel-beta-and-gamma-bimodule-maps]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §2c, printed pp. 10-11"
      url: "https://arxiv.org/pdf/math/0006056"
    - title: "Charles Weibel, An Introduction to Homological Algebra, ch. 10 §10.4, pp. 387-390"
      url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Example

Fix $m\ge1$ and $1\le i\le m$, let $R_i=[U_i\xrightarrow{\beta_i}A_m]$ be the
twist complex of
[[def-khovanov-seidel-positive-and-negative-twist-complexes]], with $U_i$ in
homological degree $-1$ and $A_m$ in homological degree $0$, and let
$$X=\bigl[\,X^{-1}\xrightarrow{\ d\ }X^{0}\,\bigr]$$
be a two-term complex of finitely generated graded projective left
$A_m$-modules, concentrated in homological degrees $-1$ and $0$ with $d$ of
internal degree $0$. Then the signed totalization
$R_i\otimes_{A_m}X$ of
[[def-signed-totalization-of-graded-a-m-bimodule-actions]] has exactly four
tensor summands, distributed over three homological degrees:
$$\bigl(R_i\otimes_{A_m}X\bigr)^{-2}=U_i\otimes_{A_m}X^{-1},\qquad \bigl(R_i\otimes_{A_m}X\bigr)^{-1}=\bigl(U_i\otimes_{A_m}X^{0}\bigr)\oplus\bigl(A_m\otimes_{A_m}X^{-1}\bigr),\qquad \bigl(R_i\otimes_{A_m}X\bigr)^{0}=A_m\otimes_{A_m}X^{0},$$
with differentials
$$d^{-2}(r\otimes x)=\beta_i(r)\otimes x-r\otimes dx,\qquad d^{-1}(r\otimes y)=\beta_i(r)\otimes y,\qquad d^{-1}(a\otimes x)=a\otimes dx,\qquad d^{0}=0,$$
for $r\otimes x\in U_i\otimes_{A_m}X^{-1}$, $r\otimes y\in U_i\otimes_{A_m}X^{0}$
and $a\otimes x\in A_m\otimes_{A_m}X^{-1}$. The two routes from the bottom
degree to the top degree cancel: with the sign $(-1)^{-1}=-1$ attached to the
column $U_i$, the composite $d^{-1}d^{-2}$ sends $r\otimes x$ first to
$\beta_i(r)\otimes x-r\otimes dx$ and then to $\beta_i(r)\otimes dx-\beta_i(r)\otimes dx=0$.

## Facts & Assumptions

**Given:** An integer $m\ge1$, an index $1\le i\le m$, the bimodule $U_i$ with the degree-zero bimodule map $\beta_i:U_i\to A_m$, the twist complex $R_i=[U_i\xrightarrow{\beta_i}A_m]$ with $U_i$ in degree $-1$ and $A_m$ in degree $0$, and a two-term complex $X$ of finite graded projective left $A_m$-modules with terms $X^{-1},X^{0}$ and degree-zero differential $d$.

[L1] For a bounded complex $R$ of graded $(A_m,A_m)$-bimodules and a bounded complex $X$ of graded left $A_m$-modules the totalization has $(R\otimes_{A_m}X)^n=\bigoplus_{p+q=n}R^p\otimes_{A_m}X^q$ and total differential $d(r\otimes x)=d_Rr\otimes x+(-1)^pr\otimes d_Xx$ for $r$ in homological degree $p$; the sign uses the homological degree of the first factor and never its internal degree ([[def-signed-totalization-of-graded-a-m-bimodule-actions]]).

[F2] $\beta_i:U_i\to A_m$ is a degree-zero map of graded $(A_m,A_m)$-bimodules, and the only nonzero differential of $R_i$ is $\beta_i$, $R_i^{1}=0$ and $R_i^{n}=0$ for $n\ne-1,0$ ([[def-khovanov-seidel-positive-and-negative-twist-complexes]], [[def-khovanov-seidel-beta-and-gamma-bimodule-maps]]).

[F3] $X$ has $X^{n}=0$ for $n\ne-1,0$ and $d_X^{-1}=d$, with $d_X^{0}=0$ because there is no term in degree $1$; $d$ is a degree-zero $A_m$-linear map ([[def-signed-totalization-of-graded-a-m-bimodule-actions]]).

[L4] For a graded ring $R$ and a graded left $R$-module $N$ the unit map $R\otimes_RN\to N$, $r\otimes n\mapsto rn$, is a degree-zero isomorphism, so the summands $A_m\otimes_{A_m}X^{q}$ may be read as $X^{q}$ ([[lem-graded-balanced-tensor-and-shift-isomorphisms]]).




## Proof

**Proof technique:** direct.

1.1 *The four summands and their degrees.* Since $R_i$ has its two terms in degrees $-1$ and $0$ by [F2] and $X$ has its two terms in degrees $-1$ and $0$ by [F3], the index pairs $(p,q)$ with both $R_i^p$ and $X^q$ nonzero are $(-1,-1),(-1,0),(0,-1),(0,0)$, and the diagonal $\bigoplus_{p+q=n}$ of [L1] collects them as $p+q=-2$ for $(-1,-1)$, as $p+q=-1$ for $(-1,0)$ and $(0,-1)$, and as $p+q=0$ for $(0,0)$; this gives the three displayed degrees with the four tensor summands $U_i\otimes_{A_m}X^{-1}$, $U_i\otimes_{A_m}X^{0}$, $A_m\otimes_{A_m}X^{-1}$, $A_m\otimes_{A_m}X^{0}$. [F2, F3, L1]

1.2 *The differentials.* By [L1] the differential on $U_i\otimes_{A_m}X^{-1}$ is $d_R\otimes1+(-1)^{-1}1\otimes d_X=\beta_i\otimes1-1\otimes d$, which on an elementary tensor is $r\otimes x\mapsto\beta_i(r)\otimes x-r\otimes dx$, and the differential on $U_i\otimes_{A_m}X^{0}$ is $\beta_i\otimes1+(-1)^{-1}1\otimes d_X=\beta_i\otimes1$, since $d_X=0$ on $X^{0}$ by [F3]; the differential on $A_m\otimes_{A_m}X^{-1}$ is $0+(-1)^{0}1\otimes d=1\otimes d$, that is $a\otimes x\mapsto a\otimes dx$, and on $A_m\otimes_{A_m}X^{0}$ it is $0$ because $R_i^{1}=0$ and $d_X^{0}=0$. No internal degree enters any sign, and all four maps preserve the total internal degree because $\beta_i$ and $d$ are degree-zero maps by [F2] and [F3]. [F2, F3, L1]

2.1 *The two routes cancel.* For $r\otimes x\in U_i\otimes_{A_m}X^{-1}$ step 1.2 gives $d^{-2}(r\otimes x)=\beta_i(r)\otimes x-r\otimes dx$, an element of the two summands of degree $-1$; applying $d^{-1}$ to the two pieces separately gives $d^{-1}(\beta_i(r)\otimes x)=\beta_i(r)\otimes dx$ in the first summand and $d^{-1}(-r\otimes dx)=-\beta_i(r)\otimes dx$ in the second, the latter because $d^{-1}$ on $U_i\otimes_{A_m}X^{0}$ is $\beta_i\otimes1$ and $d_X(dx)=0$; the two results are negatives of one another, so $d^{-1}d^{-2}=0$ on the bottom term, and $d^{0}d^{-1}=0$ holds trivially because $d^{0}=0$. Hence the four displayed maps make the totalization a complex, as [L1] guarantees in general. [step 1.2, L1]

2.2 *Unit form of the two upper summands.* By [L4] the summands $A_m\otimes_{A_m}X^{-1}$ and $A_m\otimes_{A_m}X^{0}$ are degree-zero isomorphic to $X^{-1}$ and $X^{0}$ through the multiplication maps, so the middle term of the totalization may be written as $X^{-1}\oplus(U_i\otimes_{A_m}X^{0})$ and the top term as $X^{0}$, with the differentials $x\mapsto dx$ and the $U_i$-component $\beta_i\otimes1$ respectively. [step 1.2, L4]

3.1 *Conclusion.* A two-term twist complex $R_i$ and a two-term projective complex $X$ produce the totalization $U_i\otimes_{A_m}X^{-1}\to\bigl(U_i\otimes_{A_m}X^{0}\bigr)\oplus\bigl(A_m\otimes_{A_m}X^{-1}\bigr)\to A_m\otimes_{A_m}X^{0}$ with the four summands and the differentials of step 1.2, whose square vanishes by the explicit cancellation of step 2.1, and whose two $A_m$-columns may be read as $X^{-1}$ and $X^{0}$ by step 2.2. The sign $-1$ in the bottom differential is the Koszul sign $(-1)^{p}$ at $p=-1$, that is, it is attached to the homological degree of the first factor and not to any internal degree, which is the point of the construction. [step 1.2, step 2.1, step 2.2] ∎
