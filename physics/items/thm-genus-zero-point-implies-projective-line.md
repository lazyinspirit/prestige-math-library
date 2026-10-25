---
id: thm-genus-zero-point-implies-projective-line
kind: theorem
title: "A genus-zero curve with a degree-one divisor is the projective line"
status: published
origin: pipeline
deps:
  - cor-birational-smooth-proper-curves-isomorphic
  - cor-riemann-inequality-divisor-sections
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-dimension
  - def-divisor-smooth-proper-curve
  - def-genus-euler-characteristic-curve
  - def-little-l-divisor
  - def-nonconstant-morphism-curves-degree
  - def-principal-weil-divisor-and-class-group
  - def-residue-field-scheme-point
  - def-riemann-roch-space-of-divisor
  - lem-effective-divisors-sections-mod-scalars
  - lem-function-with-poles-defines-map-p1
  - thm-principal-divisor-degree-zero-proper-curve
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the curve, divisor and cohomology
suppliers. Let $k$ be a field and let $C$ be a smooth proper geometrically
integral curve over $k$ ([[def-algebraic-curve-over-field]]) with genus
$g(C)=0$ ([[def-genus-euler-characteristic-curve]]). Suppose that $C$ admits a
divisor of degree $1$ ([[def-degree-divisor-proper-curve]]). Then $C$ is
isomorphic to $\mathbb P^1_k$; equivalently, if $C$ has a $k$-rational closed
point $p$, that is a closed point with $[\kappa(p):k]=1$
([[def-residue-field-scheme-point]]), then $C\cong\mathbb P^1_k$. The two
hypotheses are equivalent by step 1.1.

The current [[thm-principal-divisor-degree-zero-proper-curve]] supplies
$\deg_k(\operatorname{div}f)=0$ in step 1.1. The divisor and function-space
interfaces are [[def-principal-weil-divisor-and-class-group]] and
[[def-riemann-roch-space-of-divisor]]. The finite map and its pole-fibre
degree in steps 3.1–4.1 are supplied by
[[lem-function-with-poles-defines-map-p1]], which uses the current
finite-flat fibre-degree result.

## Facts & Assumptions

**Given:** a field $k$, a smooth proper geometrically integral curve $C$ over $k$ of genus $g=g(C)=0$, and a divisor $D$ on $C$ with $\deg_k(D)=1$.

[F1] The Riemann inequality: for every divisor $E$ on $C$ one has $l(E)\ge\deg_k(E)+1-g$, so here $l(E)\ge\deg_k(E)+1$ ([[cor-riemann-inequality-divisor-sections]], [[def-genus-euler-characteristic-curve]]).

[F2] Divisors, degrees and rational points: a divisor on $C$ is a finite formal combination $E=\sum_xn_x[x]$ of closed points $x$, it is effective exactly when every $n_x\ge0$, and $\deg_k(E)=\sum_xn_x[\kappa(x):k]$ with $[\kappa(x):k]\ge1$ for every closed point; a closed point $x$ is $k$-rational exactly when $[\kappa(x):k]=1$, and then $\deg_k([x])=1$ ([[def-divisor-smooth-proper-curve]], [[def-degree-divisor-proper-curve]], [[def-residue-field-scheme-point]]).

[F3] The Riemann-Roch space and principal divisors: for a divisor $E$, $L(E)=\{f\in k(C)^{\times}:\operatorname{div}(f)+E\ge0\}\cup\{0\}$ is a $k$-subspace of $k(C)$, where $\operatorname{div}(f)=\sum_x\operatorname{ord}_x(f)[x]$ uses the order of vanishing at each closed point; the constant functions $c\in k^{\times}$ have $\operatorname{div}(c)=0$ and therefore lie in $L(E)$ whenever $E$ is effective, $\dim_kL(E)=l(E)$ ([[def-riemann-roch-space-of-divisor]], [[def-little-l-divisor]]), and for every nonzero $f\in L(E)$ the divisor $\operatorname{div}(f)+E$ is effective and linearly equivalent to $E$ ([[lem-effective-divisors-sections-mod-scalars]]).

[F4] Principal divisors on a proper curve have degree zero: for every nonzero rational function $f\in k(C)^\times$, $\deg_k(\operatorname{div}f)=0$ ([[thm-principal-divisor-degree-zero-proper-curve]]). This is used at step 1.1.

[F5] The map attached to a nonconstant function: for nonconstant $f\in k(C)^{\times}$ there is a finite locally free morphism $\varphi_f:C\to\mathbb P^1_k$ of degree $[k(C):k(f)]$, a positive integer, whose fibre over infinity is the pole divisor $(f)_\infty=\sum_{\operatorname{ord}_x(f)<0}(-\operatorname{ord}_x(f))[x]$ of degree $[k(C):k(f)]$; a nonzero rational function with no poles is algebraic over $k$ and is a global unit ([[lem-function-with-poles-defines-map-p1]], [[def-nonconstant-morphism-curves-degree]]).

[F6] Birational curves: every birational rational map $C\dashrightarrow\mathbb P^1_k$, that is, every dominant rational map whose pullback on function fields is an isomorphism, is represented by a $k$-isomorphism $C\to\mathbb P^1_k$ ([[cor-birational-smooth-proper-curves-isomorphic]]).

[F7] Vector-space dimension: if $\dim_kV\ge2$ and $W\subseteq V$ is a subspace of dimension one, then $W\ne V$ and there exists $v\in V\setminus W$ ([[def-dimension]]).

[F8] The Axiom of Choice is inherited from the curve, divisor and cohomology suppliers recorded above; the argument below works with the given curve and divisor, chooses one nonzero $f\in L(D)$ and one $h\in L([q])\setminus k$, and selects nothing else ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** reduce a degree-one divisor to a rational point through a section of $L(D)$, then read a nonconstant function with pole divisor a single rational point, whose associated morphism to $\mathbb P^1_k$ has degree one and is therefore birational.

1.1 From a degree-one divisor to a rational point. Let $D$ be a divisor on $C$ with $\deg_k(D)=1$. By [F1] one has $l(D)\ge\deg_k(D)+1-g=2$, so $\dim_kL(D)\ge2$ and there is a nonzero $f\in L(D)$. By [F3] the divisor $E:=\operatorname{div}(f)+D$ is effective and linearly equivalent to $D$, and by [F4] $\deg_k(\operatorname{div}f)=0$, so $\deg_k(E)=\deg_k(D)=1$. Write $E=\sum_xn_x[x]$ with $n_x\ge0$ by [F2]; then $1=\deg_k(E)=\sum_xn_x[\kappa(x):k]$ is a sum of nonnegative terms, so exactly one closed point $q$ has $n_q\ge1$, with $n_q[\kappa(q):k]=1$ and $n_x=0$ for $x\ne q$; hence $n_q=1$ and $[\kappa(q):k]=1$, that is, $q$ is a $k$-rational closed point by [F2]. Conversely, if $p$ is a closed point with $[\kappa(p):k]=1$ then $\deg_k([p])=1$ by [F2], so $C$ admits a divisor of degree $1$; this proves the equivalence of the two hypotheses of the statement. [F1, F2, F3, F4]

2.1 A nonconstant function with poles at most at $q$. With $q$ as in step 1.1 one has $\deg_k([q])=[\kappa(q):k]=1$ by [F2], so [F1] gives $l([q])\ge1+1-g=2$. The divisor $[q]$ is effective, so every constant $c\in k^{\times}$ satisfies $\operatorname{div}(c)+[q]=[q]\ge0$ and lies in $L([q])$ by [F3]; thus $k\cdot1\subseteq L([q])$ is a subspace of dimension one, and since $\dim_kL([q])\ge2$ it is proper, so by [F7] there is $h\in L([q])\setminus k\cdot1$. The function $h$ is nonconstant, and $h\in L([q])$ means $\operatorname{div}(h)+[q]\ge0$ by [F3]. [F1, F2, F3, F7, step 1.1]

3.1 The pole divisor of $h$ is $[q]$. From $\operatorname{div}(h)+[q]\ge0$ at every closed point $x\ne q$ the order $\operatorname{ord}_x(h)$ is $\ge0$, and at $q$ it is $\ge-1$; hence the pole divisor $(h)_\infty=\sum_{\operatorname{ord}_x(h)<0}(-\operatorname{ord}_x(h))[x]$ of [F5] satisfies $(h)_\infty\le[q]$. Since $h$ is nonconstant, [F5] exhibits the finite locally free morphism $\varphi_h$ whose fibre over infinity is $(h)_\infty$, of degree $[k(C):k(h)]\ge1$; in particular $(h)_\infty\ne0$. As $(h)_\infty\le[q]$ and $[q]$ has coefficient one at $q$ and zero elsewhere, the only nonzero effective divisor dominated by $[q]$ that is nonzero is $[q]$ itself, so $(h)_\infty=[q]$. [F3, F5, step 2.1]

4.1 Degree one and birationality. By [F5] the degree of $\varphi_h$ is $\deg_k(h)_\infty=\deg_k[q]=1$ by step 3.1 and [F2], that is $[k(C):k(h)]=1$; the pullback of the coordinate function of $\mathbb P^1_k$ is $h$, so the image of $k(\mathbb P^1_k)\to k(C)$ is $k(h)$ and the extension $k(C)/k(h)$ is trivial, $k(C)=k(h)$. Hence $\varphi_h$ is dominant with pullback an isomorphism of function fields, that is, $\varphi_h$ is birational. [F2, F5, step 3.1]

5.1 Conclusion. By [F6] the birational map $\varphi_h:C\dashrightarrow\mathbb P^1_k$ of step 4.1 is represented by a $k$-isomorphism $C\to\mathbb P^1_k$; hence $C\cong\mathbb P^1_k$, which is the claim. The proof used one nonzero $f\in L(D)$ in step 1.1, one nonconstant $h\in L([q])$ in step 2.1, and the morphism $\varphi_h$ supplied by [F5]; the Axiom of Choice is inherited only through the suppliers recorded in [F8]. [F2, F5, F6, F8, step 1.1, step 2.1, step 3.1, step 4.1] ∎
