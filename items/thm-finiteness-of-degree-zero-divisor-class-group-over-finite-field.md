---
id: thm-finiteness-of-degree-zero-divisor-class-group-over-finite-field
kind: theorem
title: "Finiteness of the degree-zero divisor class group over a finite field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - cor-smooth-proper-curve-finite-map-projective-line
  - def-axiom-of-choice
  - def-dependent-choice
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-finite-field-and-its-order
  - def-genus-euler-characteristic-curve
  - def-little-l-divisor
  - def-principal-weil-divisor-and-class-group
  - def-riemann-roch-space-of-divisor
  - lem-finitely-many-closed-points-of-bounded-degree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-full-riemann-roch-divisor
  - thm-principal-divisor-degree-zero-proper-curve
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michael Rosen, Number Theory in Function Fields, Chapter 5, Proposition 5.1 and Lemma 5.6"
      url: "https://knihovna.inpb.cz/soubory/number_theory_in_function_field_rosen.pdf"
    - title: "William Fulton, Algebraic Curves, Chapter 8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $k=\mathbb F_q$ be a finite field and let
$C$ be a smooth proper geometrically integral curve over $k$. Let
$\operatorname{Div}(C)$ be the group of finite integral combinations of closed
points, let
$$
\operatorname{Prin}(C)=\left\{\sum_x\operatorname{ord}_x(f)[x]:f\in k(C)^\times\right\},\qquad \operatorname{Cl}(C)=\operatorname{Div}(C)/\operatorname{Prin}(C),
$$
and let the degree of $\sum_xn_x[x]$ be
$\sum_xn_x[\kappa(x):k]$. Since principal divisors have degree zero, degree
induces a homomorphism $\deg:\operatorname{Cl}(C)\to\mathbb Z$. The subgroup
$$\operatorname{Cl}^0(C):=\ker(\deg:\operatorname{Cl}(C)\to\mathbb Z),$$
called the degree-zero divisor class group, is finite.

## Statement references

[[def-divisor-smooth-proper-curve]]

[[def-degree-divisor-proper-curve]]

[[def-principal-weil-divisor-and-class-group]]

[[thm-principal-divisor-degree-zero-proper-curve]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The Axiom of Choice; a finite field $k=\mathbb F_q$; and a smooth
proper geometrically integral curve $C$ over $k$ of genus $g$.

[F1] Divisors on $C$ are finite integral combinations of closed points,
$\deg_k(\sum_xn_x[x])=\sum_xn_x[\kappa(x):k]$, and a divisor is effective
when all coefficients are nonnegative. ([[def-divisor-smooth-proper-curve]],
[[def-degree-divisor-proper-curve]])

[F2] Under DC, $\operatorname{Div}(C)$ is the group of Weil divisors,
$\operatorname{Prin}(C)$ is the subgroup of principal divisors
$\operatorname{div}(f)=\sum_x\operatorname{ord}_x(f)[x]$, and
$\operatorname{Cl}(C)=\operatorname{Div}(C)/\operatorname{Prin}(C)$.
([[def-principal-weil-divisor-and-class-group]])

[F3] Under AC, every principal divisor on a normal proper curve has degree
zero; AC implies the DC required in [F2]. Thus degree descends to a homomorphism
$\deg:\operatorname{Cl}(C)\to\mathbb Z$.
([[thm-principal-divisor-degree-zero-proper-curve]],
[[def-axiom-of-choice]], [[def-dependent-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]])

[F4] Under AC, there is a finite morphism $\varphi:C\to\mathbb P^1_k$
whose fibre over infinity is an effective divisor $A$ of positive integer
degree $d$. ([[cor-smooth-proper-curve-finite-map-projective-line]])

[F5] For any divisor $T$, $l(T)=\dim_kL(T)\ge0$ and the full Riemann--Roch
identity is $l(T)-l(K_C-T)=\deg_k(T)+1-g$; the spaces are
$L(T)=\{f\in k(C)^\times:\operatorname{div}(f)+T\ge0\}\cup\{0\}$.
([[thm-full-riemann-roch-divisor]], [[def-little-l-divisor]],
[[def-riemann-roch-space-of-divisor]])

[F6] The genus $g$ of a smooth proper geometrically integral curve is the
nonnegative integer $\dim_kH^1(C,\mathcal O_C)$.
([[def-genus-euler-characteristic-curve]])

[F7] For every nonnegative integer $N$, only finitely many closed points of
$C$ have residue degree at most $N$.
([[lem-finitely-many-closed-points-of-bounded-degree]])

## Proof



**Given:** The data and hypotheses above.

1.1 By [F4], choose the effective pole divisor $A$ of degree $d\ge1$, and put $E=(2g+1)A$. Then $E$ is effective and $\deg_k(E)=(2g+1)d\ge2g+1$. Fix any divisor $D$ of degree zero. Applying [F5] to $T=E+D$ gives $l(E+D)=\deg_k(E+D)+1-g+l(K_C-E-D)\ge (2g+1)+1-g=g+2>0,$ since $\deg_k(D)=0$ and $l(K_C-E-D)\ge0$. Hence some nonzero $f\in L(E+D)$ exists. [F1, F4, F5, F6, given, choose]

2.1 Define $B=\operatorname{div}(f)+E+D$. Membership $f\in L(E+D)$ in [F5] makes $B$ effective. By [F3] and $\deg_k(D)=0$, $\deg_k(B)=0+\deg_k(E)+0=\deg_k(E)=:N$. Also $B-E=D+\operatorname{div}(f)$, so $B-E$ and $D$ define the same class in $\operatorname{Cl}(C)$. [F1, F2, F3, F5, step 1.1]

3.1 Every closed point in the support of an effective divisor $B$ of degree $N$ has residue degree at most $N$, because its positive contribution to $\deg_k(B)$ is at least its residue degree. By [F7], all such supports lie in one finite set $X_N$ of closed points. For each $x\in X_N$, its coefficient in $B$ is an integer between $0$ and $\lfloor N/[\kappa(x):k]\rfloor$; thus there are only finitely many possible coefficient lists and only finitely many such divisors $B$. [F1, F7, step 2.1, algebra]

4.1 By step 2.1 every degree-zero divisor class is represented by $B-E$ for one of the finitely many effective divisors counted in step 3.1. The image of that finite set under $B\mapsto[B-E]$ is finite and contains $\operatorname{Cl}^0(C)$; therefore $\operatorname{Cl}^0(C)$ is finite. AC is used through the map and Riemann--Roch suppliers, and it supplies DC for the principal-divisor class-group interface; no degree-one closed point is assumed. [F2, F3, F4, F5, step 2.1, step 3.1, algebra, given] ∎

