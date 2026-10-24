---
id: cor-smooth-proper-curve-finite-map-projective-line
kind: corollary
title: "Finite morphisms from a curve to the projective line"
status: published
origin: pipeline
deps:
  - lem-curve-closed-subsets-finite
  - lem-pullback-cartier-divisor-line-bundle
  - def-pullback-cartier-divisor
  - cor-existence-rational-function-bounded-pole
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-divisor-smooth-proper-curve
  - def-divisor-support-positive-negative-parts
  - def-nonconstant-morphism-curves-degree
  - def-order-codimension-one-rational-function
  - def-relative-projective-space-standard-charts
  - lem-function-with-poles-defines-map-p1
  - lem-projective-line-divisors-classified-by-degree
  - lem-proper-normal-curve-rational-function-map
  - thm-h0-structure-sheaf-proper-curve
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
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 18.5 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
pipeline_run: frontier-37-owner-30
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the rational-map extension and
finite-map suppliers. Let $k$ be a field and let $C$ be a smooth proper
geometrically integral curve over $k$
([[def-algebraic-curve-over-field]]), and let
$f\in k(C)^{\times}$ be a nonconstant rational function, for instance one
produced by [[cor-existence-rational-function-bounded-pole]]. Then $f$ defines
a finite locally free $k$-morphism
$$\varphi_f:C\longrightarrow\mathbb P^1_k$$
of degree $[k(C):k(f)]\ge1$, whose fibre over infinity is the pole divisor
$$(f)_\infty=\sum_{\operatorname{ord}_x(f)<0}\bigl(-\operatorname{ord}_x(f)\bigr)[x] \ \ge\ 0$$
of degree $[k(C):k(f)]$
([[lem-function-with-poles-defines-map-p1]],
[[def-divisor-support-positive-negative-parts]]). In particular every smooth
proper geometrically integral curve over $k$ admits a finite $k$-morphism to
$\mathbb P^1_k$, and if $A:=(f)_\infty$ then $A$ is an effective divisor with
$$\mathcal O_C(A)\cong\varphi_f^*\mathcal O_{\mathbb P^1_k}(1).$$


## Facts & Assumptions

**Given:** a field $k$, a smooth proper geometrically integral curve $C$ over $k$, and a nonconstant rational function $f\in k(C)^\times$.

[F1] The map attached to a rational function: $f$ defines a finite locally free morphism $\varphi_f:C\to\mathbb P^1_k$ of degree $[k(C):k(f)]$, whose fibre over infinity is the pole divisor $(f)_\infty=\sum_{\operatorname{ord}_x(f)<0}(-\operatorname{ord}_x(f))[x]$ of degree $[k(C):k(f)]$ and whose fibre over zero is the zero divisor $(f)_0$ of the same degree; a nonzero rational function with no poles is algebraic over $k$ and a global unit ([[lem-function-with-poles-defines-map-p1]]).

[F2] The function-field construction: if $f$ is transcendental over $k$ then there is a finite locally free morphism $\varphi_f:C\to\mathbb P^1_k$ of degree $[k(C):k(f)]$ with $\varphi_f^{\#}(t)=f$ for the standard coordinate $t=x^{(0)}_1$ of $\mathbb P^1_k$; if $f$ is algebraic over $k$ then $f$ and $f^{-1}$ are global units, that is $f\in\Gamma(C,\mathcal O_C)^\times$ ([[lem-proper-normal-curve-rational-function-map]], [[def-relative-projective-space-standard-charts]]).

[F3] Units are constants: the canonical map $k\to H^0(C,\mathcal O_C)$ is an isomorphism, so $\Gamma(C,\mathcal O_C)^\times=k^\times$ and a global unit is a constant function ([[thm-h0-structure-sheaf-proper-curve]]).

[F4] Degree of a morphism: for a nonconstant morphism $\varphi:C\to D$ of smooth proper geometrically integral curves the degree is $\deg(\varphi)=[k(C):k(D)]$, a positive integer; for $\varphi_f$ with $\varphi_f^{\#}(t)=f$ the target function field is $k(\mathbb P^1_k)=k(t)$ identified with $k(f)$, so this agrees with the degree $[k(C):k(f)]$ of [F1] and [F2] ([[def-nonconstant-morphism-curves-degree]]).

[F5] Nonconstant functions exist under the numerical hypothesis: for a closed point $p$ and an integer $n\ge1$ with $n[\kappa(p):k]+1-g\ge2$ there is a nonconstant $f\in L(np)$, with $(f)_\infty$ a nonzero effective divisor supported at $p$ ([[cor-existence-rational-function-bounded-pole]]).

[F6] Divisors of functions and the projective line: on $\mathbb P^1_k$ with coordinate $t$ one has $\operatorname{div}(t)=[V(t)]-[\infty]$, $\mathcal O_{\mathbb P^1_k}(1)\cong\mathcal O_{\mathbb P^1_k}([\infty])$ with $\deg_k\mathcal O_{\mathbb P^1_k}(1)=1$, and the divisors $\operatorname{div}(f)$ of rational functions form a subgroup of the divisor group; the zero and pole parts of $\operatorname{div}(f)$ are effective divisors with $(f)_0-(f)_\infty=\operatorname{div}(f)$ ([[lem-projective-line-divisors-classified-by-degree]], [[def-divisor-smooth-proper-curve]], [[def-order-codimension-one-rational-function]]).

[F7] A flat morphism has defined pullbacks of Cartier divisors, computed by pulling back their local equations. Whenever the pullback is defined, there is a canonical isomorphism $\mathcal O_C(\varphi_f^*D)\cong\varphi_f^*\mathcal O_{\mathbb P^1_k}(D)$. ([[def-pullback-cartier-divisor]], [[lem-pullback-cartier-divisor-line-bundle]])

[F8] The Axiom of Choice is available and is inherited through the suppliers named above; the proof below uses the maps and divisors attached to the given function $f$ and, for the existence clause, one function produced by [F5] ([[def-axiom-of-choice]]).


[F9] Under AC, every proper closed subset of an integral finite-type curve is a finite set of closed points. A dimension-one curve has a strict chain of nonempty irreducible closed subsets $Z_0\subsetneq Z_1$; hence $Z_0$ is a nonempty proper closed subset of $C$ and contains a closed point. ([[lem-curve-closed-subsets-finite]])

## Proof

**Proof technique:** direct; rule out the algebraic case for a nonconstant function so that the function-field construction applies, read the degree and the fibre over infinity off the rational-map lemma, and identify the pullback of $\mathcal O(1)$ with the sheaf of the pole divisor through the local-equation Cartier pullback dictionary.

1.1 Nonconstant functions are transcendental, hence define the map. Suppose first that $f$ is algebraic over $k$. By [F2] both $f$ and $f^{-1}$ are global units, so $f\in\Gamma(C,\mathcal O_C)^\times$, and by [F3] this group is $k^\times$, so $f$ is a constant function, contrary to the hypothesis. Hence $f$ is transcendental over $k$, and the transcendental clause of [F2] provides a finite locally free morphism $\varphi_f:C\to\mathbb P^1_k$ of degree $[k(C):k(f)]$ with $\varphi_f^{\#}(t)=f$ for the standard coordinate $t$ of $\mathbb P^1_k$. [F2, F3]

2.1 Degree and the fibre over infinity. By [F1] the morphism $\varphi_f$ is finite locally free of degree $[k(C):k(f)]$, its fibre over infinity is exactly the pole divisor $(f)_\infty=\sum_{\operatorname{ord}_x(f)<0}(-\operatorname{ord}_x(f))[x]$, and this divisor has degree $[k(C):k(f)]$; by [F4] the integer $[k(C):k(f)]$ is the degree of the nonconstant morphism $\varphi_f$ in the sense of the curve-degree definition, since $\varphi_f^{\#}(t)=f$ identifies the function field of the target with $k(f)$. In particular $[k(C):k(f)]\ge1$, a degree of a finite field extension being positive, and $(f)_\infty\ge0$ is an effective divisor. [F1, F2, F4, step 1.1]

3.1 The existence clause. Let $C$ be any smooth proper geometrically integral curve over $k$, take a closed point $p$, which exists by [F9], and an integer $n\ge1$ with $n[\kappa(p):k]+1-g\ge2$; by [F5] there is a nonconstant $f\in L(np)$ with $(f)_\infty$ a nonzero effective divisor supported at $p$, and by steps 1.1 and 2.1 the function $f$ defines a finite locally free $k$-morphism $\varphi_f:C\to\mathbb P^1_k$ of positive degree. Hence every such curve admits a finite $k$-morphism to the projective line, for instance one obtained from the bounded-pole corollary. [F5, F9, step 1.1, step 2.1]

3.2 The sheaf of the pole divisor is the pullback of $\mathcal O(1)$. The map $\varphi_f$ is flat by [F1], so [F7] defines the Cartier pullback. On the chart about infinity use the equation $s=1/t$ for $[\infty]$ and on its complement use the equation $1$. Their pullbacks are $1/f$ on $\varphi_f^{-1}(U_\infty)$ and $1$ on the complement of the infinity fibre. At a point of that fibre, $f$ has negative order, so the pulled-back equation has order $-\operatorname{ord}_x(f)>0$; outside the fibre the local equation is $1$ and its order is zero. Thus these are exactly the local Cartier equations of the pole divisor from [F1], and $\varphi_f^*[\infty]=(f)_\infty=A$. Now [F6] and [F7] give $$\varphi_f^*\mathcal O_{\mathbb P^1_k}(1)\cong\varphi_f^*\mathcal O_{\mathbb P^1_k}([\infty])\cong\mathcal O_C(\varphi_f^*[\infty])=\mathcal O_C(A).$$ The degree of $A$ is the weighted fibre degree in step 2.1; no claim that pullback preserves degree is needed. [F1, F6, F7, step 2.1]

4.1 Conclusion and choice accounting. Steps 1.1 and 2.1 show that every nonconstant $f\in k(C)^\times$ defines a finite locally free morphism $\varphi_f:C\to\mathbb P^1_k$ of degree $[k(C):k(f)]\ge1$ whose fibre over infinity is the pole divisor $(f)_\infty$ of that degree; step 3.1 shows that each smooth proper geometrically integral curve over $k$ carries such a function, hence admits a finite $k$-morphism to $\mathbb P^1_k$; and step 3.2 identifies the sheaf of the pole divisor with $\varphi_f^*\mathcal O_{\mathbb P^1_k}(1)$. The fibre-degree clause is the actual pole-map interface [F1]; the sheaf identity follows from the explicit local Cartier pullback and its canonical line-bundle isomorphism [F7]. AC is inherited through the stated suppliers as in [F8]; the existence clause uses one closed point supplied by [F9] and one function from [F5]. [F1, F5, F7, F8, F9, step 1.1, step 2.1, step 3.1, step 3.2] ∎
