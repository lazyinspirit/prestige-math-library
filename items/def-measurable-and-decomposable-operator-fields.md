---
id: def-measurable-and-decomposable-operator-fields
kind: definition
title: Measurable and decomposable operator fields
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-triangle-inequality-for-inner-product-norm
  - def-complex-metric-convergence-and-continuity
  - def-direct-integral-of-a-measurable-hilbert-field
  - def-essential-supremum-with-respect-to-a-measure
  - def-measurable-function-between-measurable-spaces
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - def-operator-norm
  - def-real-and-complex-inner-product-space
  - def-space-of-bounded-linear-operators
  - lem-complex-conjugation-and-modulus-laws
  - lem-measurable-sections-have-measurable-pointwise-inner-products
  - lem-rat-embeds-dense
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-n-cross-n-countable
  - thm-rational-points-and-boxes-in-rn
  - thm-rationals-countable
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "B. Bekka and P. de la Harpe, Unitary Representations of Groups, Duals, and Characters"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Ch. 1 §1.G.3, printed pp. 60–61 (operator fields and decomposable action); §1.H.1, printed pp. 65–68 (commutant characterization and constant-field proof scope)"
    - title: "F. Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Ch. 10"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr14.pdf"
      locator: "Part III, Ch. 10 §§1.6–1.8, printed pp. 96–100; Proposition 6 on p. 99"
verification:
  precheck: n/a
axiom_use: "No axiom of choice is used: the rational test family uses the explicit pairing code in Fact [F3], and pointwise approximations use least natural indices."
---

## Definition

Let $(X,\mathcal B,\mu;H_x,e_n(x))$ be the measurable Hilbert field of
[[def-measurable-hilbert-field-from-a-countable-fundamental-family]], and let
$\mathcal H=\int_X^\oplus H_x\,d\mu(x)$ be the direct-integral inner-product
space of [[def-direct-integral-of-a-measurable-hilbert-field]]. The inner
products are linear in their first variables. An **operator field** is a family
$(T_x)_{x\in X}$ with $T_x\in\mathcal B(H_x)$ for every $x$.

The field is **weakly measurable** when every fundamental matrix coefficient
$x\longmapsto\langle T_xe_n(x),e_m(x)\rangle$ is measurable. As proved below,
this is equivalent to measurability of
$x\mapsto\langle T_x\xi(x),\eta(x)\rangle$ for every pair of measurable
sections $\xi,\eta$. The proof obtains this equivalence from pointwise
boundedness of each $T_x$, so the equivalence also holds when the field is
essentially bounded.

For a weakly measurable operator field, the operator-norm function
$x\mapsto\|T_x\|$ is measurable. Such a field is
**essentially bounded** when
$\operatorname*{ess\,sup}_{x\in X}\|T_x\|<\infty$, with essential supremum
taken with respect to $\mu$.

A bounded operator $S\in\mathcal B(\mathcal H)$ is **decomposable** if there
is a weakly measurable, essentially bounded operator field $(T_x)$ such that
for every square-integrable measurable section $\xi$, the pointwise section
$(T\xi)(x):=T_x\xi(x)$ is again square-integrable and
$S[\xi]=[T\xi]$. The square-integrability and class equality are part of this
definition; the next theorem proves that every weakly measurable essentially
bounded field indeed has this action. Operator fields are identified when
equal off a measurable $\mu$-null set.

## Facts & Assumptions

[F1] Each fundamental vector $e_n$ is a measurable section because its Gram
coefficients are measurable
([[def-measurable-hilbert-field-from-a-countable-fundamental-family]]).

[F2] The section lemma proves the coefficient test for measurability and its
equivalence with testing all measurable-section pairings
([[lem-measurable-sections-have-measurable-pointwise-inner-products]]).

[F3] Let $\beta:\mathbb N^2\to\mathbb N$ be the bijection in [F8]. Define
$c_0(())=0$ and
$c_{k+1}(a_0,\ldots,a_k)=\beta(a_0,c_k(a_1,\ldots,a_k))$. Then
$c(a_0,\ldots,a_{k-1})=\beta(k,c_k(a_0,\ldots,a_{k-1}))$ is injective on all
finite sequences: the outer pairing recovers the length, and repeated inverse
pairing recovers each entry. This is the finite-sequence code used below.

[F4] The direct integral is the quotient of square-integrable measurable
sections by almost-everywhere equality
([[def-direct-integral-of-a-measurable-hilbert-field]]).

[F5] $\mathcal B(X,Y)$ consists of bounded linear operators between normed
spaces ([[def-space-of-bounded-linear-operators]]).

[F6] The operator norm is the supremum over the unit ball; rescaling gives
$\|Tu\|\le\|T\|\|u\|$ ([[def-operator-norm]]).

[F7] Cauchy--Schwarz gives
$|\langle u,v\rangle|\le\|u\|\,\|v\|$
([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F8] There is a bijection between $\mathbb N^2$ and $\mathbb N$
([[thm-n-cross-n-countable]]).

[F9] A countable supremum of measurable extended-real functions is measurable
([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]).

[F10] The essential supremum of a measurable real function is the infimum of
its almost-everywhere bounds; finite essential supremum defines essential
boundedness ([[def-essential-supremum-with-respect-to-a-measure]]).

[F11] Measurability is inverse-image measurability
([[def-measurable-function-between-measurable-spaces]]).

[F12] Composition with a Borel map preserves measurability
([[thm-composition-with-borel-functions-preserves-measurability]]).

[F13] Continuous maps have Borel preimages
([[thm-continuous-preimages-of-borel-sets-are-borel]]).

[F14] Complex modulus is subadditive and multiplicative
([[lem-complex-conjugation-and-modulus-laws]]).

[F15] $d_{\mathbb C}(z,w)=|z-w|$ is the Euclidean metric on $\mathbb R^2$
([[def-complex-metric-convergence-and-continuity]]).

[F16] Rational boxes form a countable basis in each finite-dimensional real
coordinate space ([[thm-rational-points-and-boxes-in-rn]]).

[F17] The inner product is linear in its first variable and conjugate-linear in
its second ([[def-real-and-complex-inner-product-space]]).

[F18] There is a bijection between $\mathbb Q$ and $\mathbb N$
([[thm-rationals-countable]]).

[F19] Rational numbers approximate every real and lie strictly between any two
distinct reals ([[lem-rat-embeds-dense]]).

[F20] The complex-linear span of the fundamental family is dense in every
fibre ([[def-measurable-hilbert-field-from-a-countable-fundamental-family]]).

[F21] The fibre norm is absolutely homogeneous and satisfies the triangle
inequality ([[cor-triangle-inequality-for-inner-product-norm]]).

[F22] On a nonzero domain the operator norm is the supremum over the unit
sphere ([[def-operator-norm]]).

[F23] Measurable sections have measurable pointwise norms and pairings, and
are closed under measurable scalar combinations and pointwise norm limits
([[lem-measurable-sections-have-measurable-pointwise-inner-products]]).

## Proof

**Proof technique:** direct.

**Given:** The measurable field, its countable fundamental family, and a
pointwise field $T_x\in\mathcal B(H_x)$ whose matrix coefficients are
measurable.

1.1 Fix a bijection $\rho:\mathbb Q\to\mathbb N$ from [F18] and a bijection $\beta:\mathbb N^2\to\mathbb N$ from [F8]. Encode a term $(n,a,b)$, representing $(a+ib)e_n$, by $\kappa(n,a,b)=\beta(n,\beta(\rho(a),\rho(b)))$. Use the injective finite-sequence code [F3] on each finite list of term codes; if a natural $j$ is not in the code's range, decode it as the empty list, and otherwise use its unique decoded list. Define $q_j(x)=\sum_r(a_r+ib_r)e_{n_r}(x)$ over that list, with the empty sum zero. Every rational-complex finite combination occurs, and each $q_j$ is a measurable section by [F1,F23]. These values are dense in every fibre: given $v\in H_x$ and $\varepsilon>0$, choose a finite complex combination $u=\sum_{r=1}^N z_re_{n_r}(x)$ with $\|v-u\|<\varepsilon/2$ by [F20]. Put $C=\sum_r\|e_{n_r}(x)\|$ and use [F19] to choose a rational $\eta$ with $0<\eta<\varepsilon/(4(1+C))$; approximate each real and imaginary coordinate of $z_r$ within $\eta$ by rationals $a_r,b_r$. Absolute homogeneity and the triangle inequality [F21], together with the complex modulus triangle inequality [F14], give $\|u-\sum_r(a_r+ib_r)e_{n_r}(x)\|\le2\eta C<\varepsilon/2$. Hence $q_j(x)$ is dense. This construction fixes only individual bijections and makes no arbitrary selections, so it uses no AC. [F1,F3,F8,F14,F18,F19,F20,F21,F23,construct]
1.2 Fix $j,m$ and write $q_j=\sum_{r=1}^N c_re_{n_r}$ with its finite rational-complex coefficients. First-variable linearity [F17] gives $\langle T_xq_j(x),e_m(x)\rangle=\sum_r c_r\langle T_xe_{n_r}(x),e_m(x)\rangle$. If this combination is empty, then $T_xq_j(x)=0$ and is measurable. Otherwise the finitely many complex coefficient functions form a measurable map into their real-coordinate space because rational boxes give a countable basis [F15,F16]; for input tuples $z,w$, [F14] gives $|\sum_r c_rz_r-\sum_r c_rw_r|\le\sum_r|c_r||z_r-w_r|$, so the finite-sum map is continuous in these finitely many coordinates and hence Borel [F13]; composition [F12] makes this coefficient measurable. The coefficient criterion [F2] therefore makes $x\mapsto T_xq_j(x)$ a measurable section. [F2,F11,F12,F13,F14,F15,F16,F17,construct]
2.1 Put $r_j(x)=1/\|q_j(x)\|$ when $\|q_j(x)\|>0$ and $r_j(x)=0$ otherwise, and set $u_j(x)=r_j(x)q_j(x)$. Since $\|q_j\|$ is measurable [F23], define $g:[0,\infty)\to\mathbb R$ by $g(0)=0$ and $g(t)=1/t$ for $t>0$. For every Borel $A\subseteq\mathbb R$, $g^{-1}(A)$ is the union of $\{0\}$ when $0\in A$ and $(0,\infty)\cap(t\mapsto1/t)^{-1}(A\cap(0,\infty))$, a Borel set by continuity of reciprocal on $(0,\infty)$ and [F13]. Thus $g$ is Borel and $r_j=g\circ\|q_j\|$ is measurable by [F11,F12]; hence $u_j$ is a measurable section by [F23]. It has norm one when $q_j(x)\ne0$ and is zero otherwise. On a nonzero fibre, the nonzero normalized $q_j(x)$ are dense in the unit sphere: for each unit vector $u$ and each $k$, take the least $j$ with $\|q_j(x)-u\|<1/k$; these approximants are eventually nonzero and their normalizations converge to $u$, since $\|q_j/\|q_j\|-u\|\le2\|q_j-u\|$ when $q_j\ne0$. This is a least-index construction, not a choice of arbitrary witnesses. By step 1.2, each $T_xq_j$ is measurable; measurable scalar closure [F23] makes $T_xu_j$ measurable. [F11,F12,F13,F21,F23,step 1.1,step 1.2,construct]
2.2 Suppose first that the fundamental matrix coefficients are measurable. For any measurable section $\xi$ and $k\ge1$, the sets $E_{j,k}=\{x:\|\xi(x)-q_j(x)\|<1/k\}$ are measurable by [F23] and cover $X$ by step 1.1. At each $x$ take the least qualifying $j_k(x)$; the sets $E_{j,k}\setminus\bigcup_{i<j}E_{i,k}$ form a measurable partition; call its pieces $P_{j,k}$. For each $m$ and Borel $B\subseteq\mathbb C$, the inverse image of $B$ under the $m$th coefficient of $\xi_k(x)=q_{j_k(x)}(x)$ is $\bigcup_j(P_{j,k}\cap\{x:\langle q_j(x),e_m(x)\rangle\in B\})$, which is measurable, so $\xi_k$ is a measurable section and $\|\xi_k(x)-\xi(x)\|<1/k$. The inverse image under the $m$th coefficient of $T\xi_k$ is $\bigcup_j(P_{j,k}\cap\{x:\langle T_xq_j(x),e_m(x)\rangle\in B\})$, which is also measurable; thus $T\xi_k$ is measurable. Pointwise boundedness of $T_x$ [F5] gives $\|T_x\xi_k(x)-T_x\xi(x)\|\le\|T_x\|/k\to0$ for every $x$, so [F23] makes $T\xi$ measurable and its pairing with every measurable $\eta$ measurable. Conversely, if all section pairings are measurable, test on $\xi=e_n$ and $\eta=e_m$, both measurable by [F1], to recover every fundamental coefficient. This proves both directions of the equivalence; no essential bound is needed because each individual $T_x$ is bounded. [F1,F5,F23,step 1.1,step 1.2]
3.1 For each $j,k$, the pairing $x\mapsto\langle T_xu_j(x),u_k(x)\rangle$ is measurable by [F23]. Modulus is continuous by the reverse triangle inequality from [F14,F15], so [F13] makes these moduli Borel and [F12] makes them measurable. For every nonzero fibre, $\|T_x\|=\sup_{j,k\in\mathbb N}|\langle T_xu_j(x),u_k(x)\rangle|$. The upper bound follows from [F6,F7], since $\|u_j\|,\|u_k\|\le1$. For the reverse bound, [F22] gives $\|T_x\|=\sup_{\|u\|=1}\|T_xu\|$, and Cauchy--Schwarz with $v=T_xu/\|T_xu\|$ when $T_xu\ne0$ gives $\|T_xu\|=\sup_{\|v\|=1}|\langle T_xu,v\rangle|$. The normalized $q_j$ are dense in the unit sphere by step 2.1. First-variable linearity [F17], the modulus triangle inequality [F14], and [F6,F7] give $|\langle T_xu,v\rangle-\langle T_xu_j,u_k\rangle|\le\|T_x\|(\|u-u_j\|+\|v-u_k\|)$, proving continuity in both unit vectors. On a zero fibre all $u_j$ and the operator norm are zero, so the same supremum formula holds. Use [F8] to enumerate pairs $(j,k)$ by one natural index; [F9] then makes $x\mapsto\|T_x\|$ measurable, including on zero fibres. [F6,F7,F8,F9,F12,F13,F14,F15,F17,F22,F23,step 2.1,step 1.2,algebra]
4.1 Since step 3.1 proves $\|T_x\|$ measurable and nonnegative, [F10] defines $\operatorname*{ess\,sup}_x\|T_x\|$ and the field is essentially bounded exactly when that value is finite. By [F4], $S\in\mathcal B(\mathcal H)$ is decomposable when there is such a field for which each pointwise action $T\xi$ belongs to the square-integrable section space and $S[\xi]=[T\xi]$ for every class. This states the well-definedness required by the formula; it does not presume the next theorem's existence result. If two fields agree off a measurable null set, their pointwise actions agree there, so they give the same direct-integral class. The definition and measurable-field arguments use no axiom of choice. [F4,F5,F10,step 3.1,construct] ∎
## Boundary cases

If $X=\varnothing$, its unique operator field has no coefficients to test;
measurability is vacuous, and the essential supremum is $0$ because every
$M\ge0$ is an almost-everywhere bound. The direct integral is the zero space,
so its only bounded operator is decomposable. If every fibre is zero, then
$T_x=0$ and every tested coefficient and operator norm is zero; the direct
integral is again the zero space. The normalization in step 2.1 sends every
zero test vector to zero without division by zero. On a one-point base of
finite positive mass with $H_{x_0}=\mathbb C$, $e_1(x_0)=1$, and
$e_n(x_0)=0$ for every $n\in\mathbb N\setminus\{1\}$, the field $T_{x_0}z=az$ has matrix coefficient
$a$ at $(n,m)=(1,1)$ and zero coefficients otherwise, and its norm is $|a|$.
The field acts by scalar multiplication on the one-dimensional direct
integral. If the whole base is null, every measurable norm is zero almost
everywhere, so the essential bound and direct integral are zero. There is no
endpoint parameter. The construction uses the previously coded countable
family and least qualifying indices, with no axiom of choice.

## Source qualifications

Bekka--de la Harpe define a measurable operator field by testing all measurable
sections and state that an essentially bounded field induces the pointwise
operator, with operator norm equal to the essential supremum; their displayed
passage cites Dixmier--von Neumann for that norm assertion. That passage does
not prove the countable coefficient criterion or measurability of the norm,
which are established above. Bruhat's Proposition 6 uses a locally compact,
Lusin/topological field, local boundedness, and continuity off sets of small
measure. His §1.8 also states the action result in that setting. These are
contextual comparisons only; neither is used to import hypotheses or proof
steps into the standard-Borel measurable-field definition here.
