---
id: lem-base-change-of-a-zero-dimensional-projective-quotient
kind: lemma
title: "Field extension preserves the graded pieces and the total length of a zero-dimensional projective quotient"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-projective-scheme-from-a-homogeneous-quotient, def-graded-ring-and-graded-module, def-homogeneous-polynomial-and-homogeneous-ideal, def-polynomial-ring-on-a-family-of-indeterminates, def-tensor-product-of-modules-by-generators-and-relations, def-product-of-an-ideal-and-a-module, thm-universal-property-of-a-polynomial-ring-on-a-family, thm-coproduct-property-of-tensor-products-of-commutative-algebras, thm-tensor-product-of-algebras-over-a-commutative-ring, thm-symmetry-and-associativity-over-a-commutative-ring, thm-unit-isomorphisms-for-module-tensor-products, thm-tensor-products-commute-with-arbitrary-direct-sums, thm-right-exactness-of-tensor-products, thm-localisation-of-modules-is-tensor-product, def-multiplicative-subset-and-localisation, lem-localisation-of-a-graded-ring-at-a-homogeneous-element, lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union, lem-zero-dimensional-projective-scheme-has-finite-local-charts, def-total-length-of-a-zero-dimensional-projective-scheme, def-composition-series-and-length-of-a-module, def-residue-field-scheme-point, def-extension-degree-and-finite-extension, def-dimension, def-artinian-ring, thm-artinian-ring-primes-are-maximal, thm-structure-theorem-for-artinian-rings, cor-dimension-of-a-direct-sum, def-affine-scheme-spectrum, def-scheme, def-prime-and-maximal-ideals, def-krull-dimension-of-a-ring]
justified_by: []
aliases: []
landmark: false
short: "extending scalars preserves zero-dimensional projective length"
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 27.8 (tag 01M3) and Lemma 33.20.2 (tag 06LH)"
      url: "https://stacks.math.columbia.edu/tag/06LH"
    - title: "A. Gathmann, Algebraic Geometry class notes (2002), Lemma 6.1.4 and Example 6.1.8(i), pp. 93-95"
      url: "https://agag-gathmann.math.rptu.de/class/alggeom-2002/alggeom-2002.pdf"
pipeline_run: frontier-35-ten-categories
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice. Let $k\subseteq K$ be a field extension, let
$I\subseteq k[x_0,\ldots,x_n]$ be a homogeneous ideal, let
$S=k[x_0,\ldots,x_n]/I$ carry its standard grading, and let $X=\operatorname{Proj}S$
be zero-dimensional in the chartwise sense that every standard chart ring
$A_i=(S_{x_i})_0$ is either zero or of Krull dimension $0$
([[def-projective-scheme-from-a-homogeneous-quotient]],
[[def-krull-dimension-of-a-ring]]). Put
$S_K=S\otimes_kK$ with the grading $(S_K)_m=S_m\otimes_kK$, and
$X_K=\operatorname{Proj}(S_K)$. Then:

1. $S_K$ is a standard graded $K$-algebra and for every $m$ the degree-$m$ part
   is $S_m\otimes_kK$, so that $\dim_K(S_K)_m=\dim_kS_m$.
2. The standard chart rings of $X_K$ are $\bigl((S_K)_{x_i}\bigr)_0\cong A_i\otimes_kK$,
   and $X_K$ is again zero-dimensional in the chartwise sense.
3. The total lengths agree: $\operatorname{len}_K(X_K)=\operatorname{len}_k(X)$
   ([[def-total-length-of-a-zero-dimensional-projective-scheme]]).

No finiteness, separability or algebraicness of $K/k$ is assumed; the Axiom of
Choice is inherited from the cited prime-lifting and Artinian-structure
suppliers.

## Facts & Assumptions

**Given:** The Axiom of Choice, a field extension $k\subseteq K$, a homogeneous
ideal $I\subseteq k[x_0,\ldots,x_n]$, the standard graded quotient
$S=k[x_0,\ldots,x_n]/I$, its chart rings $A_i=(S_{x_i})_0$ which are zero or of
Krull dimension $0$, the ring $S_K=S\otimes_kK$ with the grading induced from
$S$ and the trivial grading of $K$, and $X_K=\operatorname{Proj}(S_K)$.

[L1] For a ring homomorphism $\varphi:R\to S$ of commutative rings and a family
$(s_i)_{i\in I}$ in $S$ there is a unique ring homomorphism
$\Phi:R[x_i:i\in I]\to S$ restricting to $\varphi$ on constants and satisfying
$\Phi(x_i)=s_i$; the elements of $R[x_i:i\in I]$ are the finitely supported
coefficient families $\sum_ac_ax^a$ with pointwise addition and convolution
multiplication. For commutative $R$-algebras $A,B,C$ and $R$-algebra
homomorphisms $f:A\to C$, $g:B\to C$ there is a unique $R$-algebra homomorphism
$h:A\otimes_RB\to C$ with $h(a\otimes1)=f(a)$ and $h(1\otimes b)=g(b)$, given by
$h(a\otimes b)=f(a)g(b)$
([[thm-universal-property-of-a-polynomial-ring-on-a-family]],
[[def-polynomial-ring-on-a-family-of-indeterminates]],
[[thm-coproduct-property-of-tensor-products-of-commutative-algebras]]).

[L2] For $R$-algebras $A,B$ the $R$-module $A\otimes_RB$ carries a unique
$R$-algebra structure with $(a\otimes b)(a'\otimes b')=aa'\otimes bb'$ and
$1_{A\otimes_RB}=1_A\otimes1_B$; every element of $M\otimes_RN$ is a finite sum
of elementary tensors; the symmetry $\sigma_{M,N}(m\otimes n)=n\otimes m$, the
associativity
$\alpha_{L,M,N}((l\otimes m)\otimes n)=l\otimes(m\otimes n)$ and the unit maps
$r\otimes n\mapsto rn$, $m\otimes r\mapsto mr$ are natural isomorphisms, and
tensor products commute with arbitrary direct sums,
$\bigoplus_i(M_i\otimes_RN)\cong(\bigoplus_iM_i)\otimes_RN$
([[thm-tensor-product-of-algebras-over-a-commutative-ring]],
[[thm-symmetry-and-associativity-over-a-commutative-ring]],
[[thm-unit-isomorphisms-for-module-tensor-products]],
[[thm-tensor-products-commute-with-arbitrary-direct-sums]],
[[def-tensor-product-of-modules-by-generators-and-relations]]). In particular
$(S_K)_m=S_m\otimes_kK$ has $\dim_K(S_K)_m=\dim_kS_m$, a $k$-basis of $S_m$
tensored with $1\in K$ being a $K$-basis ([[def-dimension]]).

[L3] Tensoring an exact sequence of $R$-modules ending in zero preserves
exactness at the two rightmost terms, so tensor products preserve cokernels and
surjections; and for an ideal $I\mathrel{\trianglelefteq}R$ and an $R$-module
$M$ the product $IM$ is the submodule generated by the products $im$, with
$0M=0$ and $RM=M$
([[thm-right-exactness-of-tensor-products]],
[[def-product-of-an-ideal-and-a-module]]).

[L4] For a commutative ring $R$, a multiplicative subset $M\subseteq R$ and a
left $R$-module $N$, the map
$\Phi:(M^{-1}R)\otimes_RN\to M^{-1}N$, $(a/s)\otimes n\mapsto an/s$, is an
isomorphism of $M^{-1}R$-modules with inverse $n/s\mapsto(1/s)\otimes n$. The
localisation $S^{-1}R$ of a ring is the set of fractions with the arithmetic
$r/s+r'/s'=(rs'+r's)/(ss')$ and $r/s\cdot r'/s'=rr'/(ss')$, the localisation
map being $r\mapsto r/1$; and for a nonnegatively graded ring
$R=\bigoplus_{n\ge0}R_n$ with $t\in R_\delta$ homogeneous,
$R_t=\bigoplus_{n\in\mathbb Z}(R_t)_n$ with
$(R_t)_n=\{r/t^m:m\ge0,\ r\in R_{n+m\delta}\}$
([[thm-localisation-of-modules-is-tensor-product]],
[[def-multiplicative-subset-and-localisation]],
[[lem-localisation-of-a-graded-ring-at-a-homogeneous-element]]).

[L5] The spectrum of a nonempty finite product ring is the disjoint union of the
factor spectra: for $R=\prod_{i=1}^rR_i$ with $r\ge1$ the projections induce
isomorphisms of locally ringed spaces from each factor onto the pairwise
disjoint clopen pieces $D(e_i)$ covering $\operatorname{Spec}R$, and the local
ring at a point of a piece is the local ring of the corresponding factor
([[lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union]]).

[L6] A finite-dimensional $k$-algebra $C$ is Artinian: a strictly descending
chain of ideals is a strictly descending chain of $k$-subspaces, and each strict
inclusion strictly lowers the $k$-dimension, so no infinite strictly descending
chain exists; in an Artinian ring every prime ideal is maximal, so a
finite-dimensional $k$-algebra is zero or of Krull dimension $0$
([[def-artinian-ring]], [[thm-artinian-ring-primes-are-maximal]],
[[def-krull-dimension-of-a-ring]]). Assume AC: for a nonzero commutative
Artinian ring $R$ with maximal ideals $\mathfrak m_1,\ldots,\mathfrak m_r$ the
canonical map $R\to\prod_jR_{\mathfrak m_j}$ is an isomorphism, and each
$R_{\mathfrak m_j}$ has nilpotent maximal ideal
([[thm-structure-theorem-for-artinian-rings]]).

[L7] Assume AC and let $k$ be a field, $I\subseteq k[x_0,\ldots,x_n]$ a
homogeneous ideal, $S=k[x_0,\ldots,x_n]/I$ with its standard grading and
$X=\operatorname{Proj}S$ whose chart rings $A_i=(S_{x_i})_0$ are zero or of
Krull dimension $0$. Then the point set of $X$ is finite, every point is
closed, each local ring $\mathcal O_{X,x}$ is a finite-dimensional local
$k$-algebra of finite length and finite residue degree, $X$ is the finite
disjoint union of the spectra of its local rings, and
$\operatorname{len}_k(X)=\sum_x\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})[\kappa(x):k]$;
for an affine scheme $\operatorname{Spec}B$ with $B$ a finite-dimensional
$k$-algebra one has $\operatorname{len}_k(\operatorname{Spec}B)=\dim_kB$,
computed as the sum over the maximal ideals of $B$
([[lem-zero-dimensional-projective-scheme-has-finite-local-charts]],
[[def-total-length-of-a-zero-dimensional-projective-scheme]],
[[def-composition-series-and-length-of-a-module]],
[[def-residue-field-scheme-point]],
[[def-extension-degree-and-finite-extension]], [[def-affine-scheme-spectrum]],
[[def-scheme]]).
## Proof

**Proof technique:** direct.

1.1 Let $A\to C$ be a unital ring map and $(t_i)_{i\in J}$ a family of variables. By [L1] there is a unique ring homomorphism $\bar\cdot:A[t_i]\to C[t_i]$ restricting to $A\to C$ on constants and sending $t_i\mapsto t_i$ for every $i$, so that $\overline f=\sum_a\bar c_at^a$ for $f=\sum_ac_at^a$; and [L1] applied to the $A$-algebra maps $\bar\cdot$ and $C\hookrightarrow C[t_i]$ yields a unique $A$-algebra homomorphism $\varphi:A[t_i]\otimes_AC\to C[t_i]$ with $\varphi(x\otimes1)=\bar x$ and $\varphi(1\otimes c)=c$, namely $\varphi(f\otimes c)=\bar fc$; by [L2] $A[t_i]\otimes_AC$ is a commutative $A$-algebra for this structure. [given, L1, L2]

1.2 Let $M\subseteq A$ be multiplicative. By [L4] the map $\Phi:(M^{-1}A)\otimes_AC\to\overline M^{-1}C$, $(a/s)\otimes c\mapsto ac/s$, is an isomorphism of $M^{-1}A$-modules, and it is multiplicative and unital on elementary tensors: $((a/s)\otimes c)((a'/s')\otimes c')=(aa'/(ss'))\otimes cc'$ by [L2], and the localisation arithmetic of [L4] gives $(ac/s)(a'c'/s')=aa'cc'/(ss')$; hence $\Phi$ is an isomorphism of commutative rings. It preserves degrees when $A$ is graded, $C$ is graded, $t\in A_1$ is homogeneous and $M=\{t^j:j\ge0\}$, because $\Phi((a/t^j)\otimes c)=(a\otimes c)/t^j$ shifts both sides by the same amount in the gradings of [L4]. [L2, L4]

2.1 By [L1] applied over $C$, with the commutative $C$-algebra structure $c\mapsto1\otimes c$ on $A[t_i]\otimes_AC$ given by [L2], there is a unique ring homomorphism $\psi:C[t_i]\to A[t_i]\otimes_AC$ restricting to $c\mapsto1\otimes c$ and sending $t_i\mapsto t_i\otimes1$ for every $i$. It is a $C$-algebra homomorphism, and $\psi(\bar f)=f\otimes1$ for every $f\in A[t_i]$; the latter identity is independent of the choice of $f$ because a coefficient in the kernel of $A\to C$ tensors to zero. [step 1.1, L1, L2]

2.2 Apply step 1.2 to the ring map $S\to S_K$, $s\mapsto s\otimes1$, and the multiplicative set $M=\{x_i^j:j\ge0\}$: since $\overline M^{-1}S_K=(S_K)_{x_i}$, this identifies $S_{x_i}\otimes_SS_K$ with $(S_K)_{x_i}$, and the unit and associativity isomorphisms of [L2] identify $S_{x_i}\otimes_SS_K=S_{x_i}\otimes_S(S\otimes_kK)$ with $S_{x_i}\otimes_kK$; the composite is degree-preserving for the gradings in which $x_i$ has degree $1$ on both sides, as in step 1.2, so it restricts to the chart ring $\bigl((S_K)_{x_i}\bigr)_0\cong(S_{x_i})_0\otimes_kK=A_i\otimes_kK$ of $X_K$ on $D_+(x_i)$ ([[def-projective-scheme-from-a-homogeneous-quotient]]). Since $\dim_kA_i<\infty$ by [L7], this chart ring has $K$-dimension $\dim_kA_i$ by [L2]. [step 1.2, L2, L4, L7]

3.1 For $c\in C$ and $x\in A[t_i]\otimes_AC$ one has $\varphi((1\otimes c)x)=\varphi(1\otimes c)\varphi(x)=c\varphi(x)$ by [L2], so $\varphi$ is $C$-linear; hence $\varphi\psi$ is a $C$-algebra endomorphism of $C[t_i]$ with $\varphi\psi(t_i)=\varphi(t_i\otimes1)=t_i$ for every $i$, and the identity is a second such endomorphism, so $\varphi\psi=\mathrm{id}$ by the uniqueness in [L1]. [step 1.1, step 2.1, L1, L2]

3.2 If $D_+(x_i)=\varnothing$, then $A_i=0$: by [L7] a nonzero $A_i$ is Artinian with a maximal ideal and hence has a point. Thus $A_i\otimes_kK=0$, and both the original and base-changed charts are empty by step 2.2. If $D_+(x_i)\ne\varnothing$, [L7] gives $A_i\cong\prod_{x\in D_+(x_i)}\mathcal O_{X,x}$ with at least one factor; tensoring this isomorphism with $K$ over $k$ and using that a finite product is a finite direct sum together with [L2] gives an isomorphism of $K$-algebras $A_i\otimes_kK\cong\prod_{x\in D_+(x_i)}\bigl(\mathcal O_{X,x}\otimes_kK\bigr)$. [step 2.2, L2, L7]

3.3 A finite-dimensional $K$-algebra is Artinian with all primes maximal by [L6], so the chart ring $A_i\otimes_kK$ of step 2.2 is zero or of Krull dimension $0$; hence $X_K$ satisfies the chartwise hypothesis of [L7] and all the conclusions of that lemma apply to $X_K$, in particular finiteness of its point set and the finite disjoint-union decomposition into the spectra of the local rings $\mathcal O_{X_K,y}$. [step 2.2, L6, L7]

4.1 Every element of $A[t_i]\otimes_AC$ is a finite sum of elementary tensors by [L2], and $\psi\varphi$ and $\mathrm{id}$ are ring homomorphisms agreeing on every $t_i\otimes1$ and every $1\otimes c$, since $\psi\varphi(t_i\otimes1)=t_i\otimes1$ and $\psi\varphi(1\otimes c)=1\otimes c$; indeed $f\otimes c=\sum_a(a_a\otimes1)(t^a\otimes1)(1\otimes c)$ with $a_a\otimes1=1\otimes\bar a_a$, so both maps are additive and multiplicative on a set of elements in terms of which every element is written; therefore $\psi\varphi=\mathrm{id}$ and $\varphi$ is an isomorphism of $A$-algebras $$A[t_i]\otimes_AC\longrightarrow C[t_i],\qquad f\otimes c\longmapsto\bar fc .$$ [step 1.1, step 2.1, step 3.1, L1, L2]

4.2 By step 2.2 the chart of $X_K$ is $\operatorname{Spec}(A_i\otimes_kK)$. If $D_+(x_i)=\varnothing$, this chart is empty by step 3.2 and contributes no points. Otherwise step 3.2 has a nonempty finite product, so [L5] identifies its points with those of $\coprod_{x\in D_+(x_i)}\operatorname{Spec}(\mathcal O_{X,x}\otimes_kK)$ and its local rings with the localizations of the factors $\mathcal O_{X,x}\otimes_kK$. The chart correspondence of [L7] then identifies the local ring of $X_K$ at a point of the chart with the localization of the chart ring at the corresponding prime; hence the points $y\in X_K$ lying over a given $x\in X$ are exactly the maximal ideals $\mathfrak m$ of $B_x:=\mathcal O_{X,x}\otimes_kK$, and $\mathcal O_{X_K,y}\cong(B_x)_{\mathfrak m}$. [step 2.2, step 3.2, L5, L7]

5.1 Let $J\subseteq A[t_i]$ be an ideal. The sequence $J\to A[t_i]\to A[t_i]/J\to0$ is exact, so by [L3] the sequence $J\otimes_AC\to A[t_i]\otimes_AC\to(A[t_i]/J)\otimes_AC\to0$ is exact and $(A[t_i]/J)\otimes_AC$ is the cokernel of the first map; under the isomorphism of step 4.1 that map has image the finite sums $\sum_k\bar j_kc_k$, which is $JC[t_i]$, the submodule of $C[t_i]$ generated by the products $jm$ with $j\in J$ and $m\in C[t_i]$ by [L3]; hence $(A[t_i]/J)\otimes_AC\cong C[t_i]/JC[t_i]$. [step 4.1, L3]

5.2 Since $X_K$ is finite by step 3.3, its total length is the finite sum $\operatorname{len}_K(X_K)=\sum_y\ell_{\mathcal O_{X_K,y}}(\mathcal O_{X_K,y})[\kappa(y):K]$ by [L7]; grouping the points by the point $x\in X$ over which they lie, using step 4.2, and applying the affine consistency in [L7] to the finite-dimensional $K$-algebra $B_x$, whose spectrum has exactly the points $y$ over $x$ with local rings $(B_x)_{\mathfrak m}$, gives $\operatorname{len}_K(X_K)=\sum_x\dim_KB_x$. [step 3.3, step 4.2, L7]

6.1 Applying step 5.1 with $A=k$, $C=K$, the variables $x_0,\ldots,x_n$ and the ideal $I$ gives a $k$-algebra isomorphism $S_K=S\otimes_kK\cong K[x_0,\ldots,x_n]/IK[x_0,\ldots,x_n]$ carrying $S_m\otimes_kK$ onto the degree-$m$ part. The extended ideal is generated by the images of **all homogeneous elements** of $I$ and so is homogeneous ([[def-homogeneous-polynomial-and-homogeneous-ideal]]); no finite homogeneous generating set is needed here. Hence the quotient is a standard graded $K$-algebra generated in degree one by the images of the variables, by the description of polynomial rings in [L1], and $X_K=\operatorname{Proj}(S_K)$ is defined in the sense of [[def-projective-scheme-from-a-homogeneous-quotient]]. By [L2] the degree-$m$ part of $S_K$ is $S_m\otimes_kK$, whence $\dim_K(S_K)_m=\dim_kS_m$ for every $m$. [step 5.1, L1, L2]

6.2 For every $x\in X$ one has $\dim_KB_x=\dim_K(\mathcal O_{X,x}\otimes_kK)=\dim_k\mathcal O_{X,x}$ by [L2], and the affine consistency in [L7] applied to the finite-dimensional local $k$-algebra $\mathcal O_{X,x}$, whose only maximal ideal has residue field $\kappa(x)$, gives $\dim_k\mathcal O_{X,x}=\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})[\kappa(x):k]$; hence $\operatorname{len}_K(X_K)=\sum_x\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})[\kappa(x):k]=\operatorname{len}_k(X)$ by [L7]. [step 5.2, L2, L7]

7.1 Claim 1 is steps 4.1 and 6.1, claim 2 is steps 2.2 and 3.3, and claim 3 is steps 5.2 and 6.2; the Axiom of Choice enters only through the Artinian-structure, prime-existence and prime-lifting suppliers cited in [L6] and [L7], and no finiteness, separability or algebraicness of the extension $K/k$ was used. [step 4.1, step 6.1, step 2.2, step 3.3, step 5.2, step 6.2, L6, L7] ∎
