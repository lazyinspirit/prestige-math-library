---
id: thm-krawczyk-inclusion-exclusion-and-uniqueness
kind: theorem
title: Krawczyk inclusion proves existence, disjointness excludes roots, and contraction proves uniqueness
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: interval-newton-krawczyk-and-polynomial-root-isolation
dependency_level: 8
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - alg-krawczyk-root-certification
  - def-real-boxes-and-interval-jacobian-enclosures
  - lem-interval-jacobian-mean-value-enclosure
  - lem-brouwer-fixed-point-for-closed-box
  - lem-real-interval-arithmetic-preserves-enclosure
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
  - thm-total-differentiability-gives-a-local-linear-bound-and-continuity
verification:
  precheck: pass
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §13, Theorem 13.3, pp. 89–90"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "R. Baker Kearfott, Interval Computations: Introduction, Uses, and Resources, §2"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
---

## Statement

Let $U\subseteq\mathbb R^n$ be open and convex, let $X\subset U$ be a nonempty real box, and let $F:U\to\mathbb R^n$ be $C^1$. For a processed box $Y\subseteq X$, let $x_0\in Y$, let $C$ be a nonsingular point matrix, let $F_0$ enclose $F(x_0)$, and let $J(Y)$ enclose every Jacobian entry on $Y$. Form the outward interval box
$$
K=x_0-CF_0+(I-CJ(Y))(Y-x_0).
$$
Every root of $F$ in $Y$ lies in $K$. Thus $K\cap Y=\varnothing$ proves that $Y$ has no root. If $K\subset\operatorname{int}Y$, then $F$ has at least one root in $Y$. Define $\|v\|_\infty=\max_i|v_i|$ and $\|A\|_\infty=\max_i\sum_j|A_{ij}|$. Let $E$ be the outward interval matrix enclosing $I-CJ(Y)$ and put $\bar q=\max_i\sum_j\max(|\inf E_{ij}|,|\sup E_{ij}|)$. If $\bar q<1$, then $F$ has at most one root in $Y$; strict inclusion together with this bound proves a unique root. No uniqueness is inferred from strict inclusion alone.

For a run with a verified nonsingular preconditioner and valid interval evaluators, every finite execution of [[alg-krawczyk-root-certification]] terminates, and each root in the initial box lies in a unique-root, existence-only, or unresolved output box. Root-free outputs contain no root; unique-root outputs contain exactly one; an existence-only output proves at least one but makes no count claim. An unresolved or existence-only output prevents an all-roots conclusion.

## Facts & Assumptions

**Given:** $F,U,X,Y,x_0,C,F_0,J(Y)$ and the Krawczyk box in the Statement.

[F1] Every continuous self-map of a nonempty closed real box has a fixed point ([[lem-brouwer-fixed-point-for-closed-box]]).

[F2] For any $x,y\in Y$, there is a rowwise mean-value matrix $A\in\mathcal J(Y)$ with $F(x)-F(y)=A(x-y)$ ([[lem-interval-jacobian-mean-value-enclosure]]).

[F3] Finite real interval operations enclose their exact values and finite expression evaluations ([[lem-real-interval-arithmetic-preserves-enclosure]]).

[F4] A $C^1$ map is continuous on its open domain ([[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]).

[F5] The Krawczyk algorithm checks an exact left-inverse witness for $C$, computes $K$ and $E=I-CJ(Y)$ by outward operations, and returns "unique-root" only when strict inclusion and $\bar q<1$ both hold ([[alg-krawczyk-root-certification]]).

[F6] The real box, its interior, and the interval Jacobian set $\mathcal J(X)$ have the definitions used here ([[def-real-boxes-and-interval-jacobian-enclosures]]).

## Proof

1.1 Fix a root $z\in Y$. By [F2], choose $A\in\mathcal J(Y)$ with $F(z)-F(x_0)=A(z-x_0)$. Since $F(z)=0$, rearrangement gives $z=x_0-CF(x_0)+(I-CA)(z-x_0)$. The enclosure conditions on $F_0,J(Y)$ and the finite interval operations [F3] place this exact value in $K$. [given, F2, F3, F6, algebra, choose]

2.1 Thus any root in $Y$ belongs to $K\cap Y$; if that intersection is empty, no root lies in $Y$. [step 1.1, algebra]

2.2 Define $g:Y\to\mathbb R^n$ by $g(x)=x-CF(x)$. It is continuous by [F4]. For every $x\in Y$, [F2] applied to $x$ and $x_0$ gives a matrix in $\mathcal J(Y)$, and the same enclosure argument as in step 1.1 gives $g(x)\in K$. If $K\subset\operatorname{int}Y$, then $g(Y)\subseteq Y$; [F1] gives $x\in Y$ with $g(x)=x$. Since $C$ is nonsingular, this identity implies $F(x)=0$. [given, F1, F2, F3, F4, F6, step 1.1, algebra]

2.3 Suppose $x,y\in Y$ are both roots. Choose $A\in\mathcal J(Y)$ from [F2]. By [F3], every entry of $I-CA$ lies in the corresponding interval $E_{ij}$, so $|(I-CA)_{ij}|\le\max(|\inf E_{ij}|,|\sup E_{ij}|)$ and $\|I-CA\|_\infty\le\bar q$. The rowwise identity gives $F(x)-F(y)=A(x-y)=0$, so $(I-CA)(x-y)=x-y$. The row-sum definition of the induced infinity norm gives $\|(I-CA)(x-y)\|_\infty\le\bar q\|x-y\|_\infty$. Since $\bar q<1$, $x=y$. [given, F2, F3, step 1.1, algebra]

3.1 Strict inclusion supplies existence by step 2.2, and the certified contraction bound supplies at most one root by step 2.3. Thus "unique-root" is sound only in this combined case; with strict inclusion but no contraction bound, the algorithm reports "existence-only" by [F5]. Root-free output is justified by step 2.1, and unresolved output makes no claim. [step 2.1, step 2.2, step 2.3, F5]

4.1 The algorithm processes at most the finite budget $B$. A non-finite evaluation marks its current box unresolved and leaves the remaining queue to be processed; every other inconclusive box is either marked unresolved or replaced by two closed halves whose union is the parent. Thus the bisection and queue rules preserve coverage of the initial box. Together with the sound terminal statuses in step 3.1, this proves that every initial root lies in a unique-root, existence-only, or unresolved output box. If an existence-only or unresolved box remains, no all-roots conclusion is made. [step 3.1, F5, induction, construct] ∎
