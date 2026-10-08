---
id: ex-cg-simple-and-reflection-length-of-a-long-transposition-in-s5
kind: example
title: "Simple and reflection lengths of a long transposition in $S_5$"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
deps: [cor-double-orthogonal-complement-and-dimension, def-cg-canonical-reflection-homomorphism, def-cg-coxeter-diagram-components-and-finite-type, def-cg-real-coxeter-form-and-reflection, def-cg-reflection-length-absolute-order-and-moved-space, def-hh-coxeter-matrix-word-group-and-length, def-inversions-inversion-number-and-sign, def-linear-isometry-and-orthogonal-or-unitary-operator, def-real-and-complex-inner-product-space, lem-cg-orthogonal-wall-form-and-subspace-restriction, lem-cg-reflection-representation-descends-and-root-norms, thm-cg-carter-reflection-length-and-absolute-order, thm-hh-parabolic-minimal-representatives-and-length-additivity, thm-quarter-turn-values-and-shift-formulas, thm-double-angle-and-power-reduction-identities, cor-trigonometric-parity-and-pythagorean-identity, thm-cosine-has-a-smallest-positive-zero, def-pi-via-first-positive-cosine-zero, lem-sine-positive-and-cosine-decreasing-on-zero-two]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. W. Carter, Conjugacy classes in the Weyl group, Compositio Mathematica 25 (1972) 1-59 (Numdam full text)"
      url: https://www.numdam.org/item/CM_1972__25_1_1_0.pdf
      locator: "Section 2 'Products of reflections', printed pp. 2-5: the root-system setup (i)-(iv) and Lemmas 1-5 with the proofs of Lemmas 2, 3 and 4"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Springer GTM 231 (2005), author/class-hosted complete PDF"
      url: https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf
      locator: "Chapter 2, Exercise 2.35 on printed p. 61 (absolute length a-l(w)=min{k: w=t_1...t_k, t_i in T}); Chapter 7, Exercise 2 on printed pp. 234-235"
dependency_level: 18
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $W$ be the Coxeter group of type $A_4$, with $S=\{s_1,\dots,s_4\}$, reflection representation $V=\mathbb R^S$ with positive definite Coxeter form $B$, reflection set $T$ and lengths $\ell$ and $\ell_T$ ([[def-hh-coxeter-matrix-word-group-and-length]], [[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]], [[def-cg-reflection-length-absolute-order-and-moved-space]], [[thm-cg-carter-reflection-length-and-absolute-order]]); fix the isomorphism $\varphi:W\to S_5$ with $s_i\mapsto(i\ i+1)$ ([[def-cg-coxeter-diagram-components-and-finite-type]], [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4), [[def-inversions-inversion-number-and-sign]]). Then:

**(i)** $T=\{\varphi^{-1}(\tau):\tau\text{ a transposition of }S_5\}$ and $\ell_T(w)=1$ for the transpositions $w$; for a transposition $(i\ j)$ with $i<j$ one has $\ell(\varphi^{-1}(i\ j))=2(j-i)-1$.

**(ii)** For the long transposition $\varphi^{-1}(1\ 5)$ the two lengths are $\ell=2\cdot4-1=7$ while $\ell_T=1$; explicitly $(1\ 5)=(2\ 5)(1\ 2)(2\ 5)^{-1}$ is a reflection and has $7$ inversions.

**(iii)** Under the linear isometry $e_{s_i}\mapsto\frac{1}{\sqrt2}(e_i-e_{i+1})$ of $(V,B)$ onto the hyperplane $\mathbf H=\{x\in\mathbb R^5:\sum_ix_i=0\}$ with the standard inner product ([[def-real-and-complex-inner-product-space]], [[def-linear-isometry-and-orthogonal-or-unitary-operator]]), $\varphi$ corresponds to the permutation action, so $F(\varphi^{-1}(\sigma))$ corresponds to the fixed space $\{x\in\mathbf H:\sigma x=x\}$, of dimension $c(\sigma)-1$ for the cycle count $c(\sigma)$ (fixed points included). Since $\dim M=\dim V-\dim F$ ([[cor-double-orthogonal-complement-and-dimension]]) and $\ell_T=\dim M$, one has $\ell_T(\varphi^{-1}(\sigma))=\dim\mathbf H-(c(\sigma)-1)=5-c(\sigma)$ for every $\sigma\in S_5$. In particular $\ell_T(\varphi^{-1}(1\ 5))=1$; for the longest element $w_0=\varphi^{-1}((1\ 5)(2\ 4))$ one has $\ell(w_0)=10$ while $\ell_T(w_0)=5-3=2$ (the reversal has three cycles), and every $5$-cycle has $\ell_T=4=\dim V$.

## Facts & Assumptions

**Given:** The type-$A_4$ Coxeter datum $W,S,V,B,\rho,\Phi,T$ and the isomorphism $\varphi:W\to S_5$ with $s_i\mapsto(i\ i+1)$; a permutation $\sigma\in S_5$ acts on $\mathbb R^5$ by permuting coordinates.

[F1] $s_i\mapsto(i\ i+1)$ extends to an isomorphism $\varphi:W\to S_5$, $\ell(w)=\operatorname{inv}(\varphi(w))$ for the inversion number, and $S$ generates $W$. [[thm-hh-parabolic-minimal-representatives-and-length-additivity]]

[F2] $\rho(s_i)=r_{e_{s_i}}$, $T=\{wsw^{-1}:w\in W,\ s\in S\}$, $\Phi=\{\rho(w)e_s:w\in W,\ s\in S\}$, and $B(e_s,e_t)=-\cos(\pi/m(s,t))$ with $m(s_i,s_j)=3$ for adjacent and $2$ for non-adjacent generators of $A_4$. [[def-cg-canonical-reflection-homomorphism]] [[def-cg-real-coxeter-form-and-reflection]]

[F3] $\ell_T(w)=\dim M(w)=\dim V-\dim F(w)$, $M(w)=F(w)^\perp$ and $V=M(w)\oplus F(w)$; every line of $V$ is the moved space of a unique reflection of the orthogonal group of $(V,B)$. [[thm-cg-carter-reflection-length-and-absolute-order]] [[lem-cg-orthogonal-wall-form-and-subspace-restriction]]

[F4] $F(w)=\ker(\rho(w)-\mathrm{id})$ and $M(w)=\operatorname{im}(\rho(w)-\mathrm{id})$ for $w\in W$, and $T$ is the reflection set in which $\ell_T$ is computed. [[def-cg-reflection-length-absolute-order-and-moved-space]]

[F5] The inversion number of a permutation is the number of pairs $a<b$ with $\sigma(a)>\sigma(b)$. [[def-inversions-inversion-number-and-sign]]

[F6] Each $\rho(s_i)$ is an inner-product-preserving involution with normal $e_{s_i}$. An orthogonal operator with moved line $L$ equals $\mathrm{id}-2\Pi_L$ and fixes $L^\perp$ pointwise. [[lem-cg-reflection-representation-descends-and-root-norms]] (1), (2), (4), [[lem-cg-orthogonal-wall-form-and-subspace-restriction]] (3).

[F7] Write $\gamma=\pi/2$ for the smallest positive cosine zero; $0<\gamma<2$, and cosine is strictly decreasing on $[0,2]$. Also $\cos(\pi/2)=0$, $\cos(\pi-x)=-\cos x$, and $\cos(2x)=2\cos^2x-1$. [[def-pi-via-first-positive-cosine-zero]] [[thm-cosine-has-a-smallest-positive-zero]] [[lem-sine-positive-and-cosine-decreasing-on-zero-two]] [[thm-quarter-turn-values-and-shift-formulas]] [[thm-double-angle-and-power-reduction-identities]] [[cor-trigonometric-parity-and-pythagorean-identity]]

## Verification

**Proof technique:** direct.

1.1 Put $c:=\cos(\pi/3)$. By [F7], $0<\pi/3<\gamma<2$ gives $c>\cos\gamma=0$, while $2c^2-1=\cos(2\pi/3)=-c$, so $(2c-1)(c+1)=0$ and $c=\tfrac12$; also $\cos(\pi/2)=0$ by [F7]. Put $v_i:=\frac1{\sqrt2}(e_i-e_{i+1})\in\mathbf H$ for $1\le i\le4$. Then $\langle v_i,v_i\rangle=1$, $\langle v_i,v_{i+1}\rangle=-\tfrac12$ and $\langle v_i,v_j\rangle=0$ for $|i-j|\ge2$, matching $B(e_{s_i},e_{s_j})=-\cos(\pi/m(s_i,s_j))$ by [F2] and [F7]; since the $v_i$ are linearly independent (their coordinates in the order $(e_1,\dots,e_5)$ are $(a,-a+b,-b+c,-c+d,-d)/\sqrt2$ for $av_1+bv_2+cv_3+dv_4$) and every $x\in\mathbf H$ equals $\sqrt2\sum_{i=1}^4(x_1+\cdots+x_i)v_i$, they form a basis of $\mathbf H$, so $\dim\mathbf H=4$ and the map $\Theta:V\to\mathbf H$ with $\Theta(e_{s_i})=v_i$ is a linear isometry onto $\mathbf H$. For each $i$ the transposition $(i\ i+1)$ preserves $\mathbf H$, reverses $v_i$ and fixes ${v_i}^\perp\cap\mathbf H$ pointwise, so it is the reflection with normal line $\mathbb Rv_i$; the image $\Theta\rho(s_i)\Theta^{-1}$ is by [F2] and [F6] likewise an inner-product-preserving involution of $\mathbf H$ that reverses $v_i$ and fixes ${v_i}^\perp\cap\mathbf H$ pointwise, so the two agree on all of $\mathbf H$. Since $\varphi$ is an isomorphism and $S$ generates $W$ [F1], the homomorphisms $\Theta\rho\Theta^{-1}$ and $\sigma\mapsto\sigma|_{\mathbf H}$ agree on $S$, hence everywhere: $\Theta\rho(w)\Theta^{-1}=\varphi(w)|_{\mathbf H}$ for all $w\in W$. The permutation action on $\mathbf H$ is faithful, because if $\sigma$ acts trivially then $\sigma(e_i-e_k)=e_i-e_k$ for all $i\ne k$, and choosing $k\notin\{i,\sigma(i)\}$ forces $\sigma(i)=i$. Therefore for $t=wsw^{-1}\in T$ the permutation $\varphi(t)$ has moved line $\Theta\mathbb R\rho(w)e_s=\mathbb R(e_p-e_q)$ for some $p\ne q$ and fixes the orthogonal hyperplane pointwise, so $\varphi(t)(p\ q)^{-1}$ acts trivially on $\mathbf H$ and $\varphi(t)=(p\ q)$; conversely every transposition $(p\ q)=\sigma(1\ 2)\sigma^{-1}$ equals $\varphi(us_1u^{-1})$ for $u:=\varphi^{-1}(\sigma)$, so $T=\{\varphi^{-1}(\tau):\tau\text{ a transposition}\}$. [F1, F2, F3, F6, F7]

1.2 For a permutation $\sigma\in S_5$ the inversion number of the transposition $(i\ j)$, $i<j$, is $2(j-i)-1$: the pairs $a<b$ with $(i\ j)a>(i\ j)b$ are exactly the $j-i-1$ pairs $(i,k)$ with $i<k<j$, the single pair $(i,j)$, and the $j-i-1$ pairs $(k,j)$ with $i<k<j$. In particular the transposition $(1\ 5)$ has $2\cdot4-1=7$ inversions, and the reversal $(1\ 5)(2\ 4)$ inverts every one of the $\binom52=10$ pairs, so it has $10$ inversions, the maximal value; in $S_5$ this is the longest element. [F5, algebra]

2.1 By step 1.1 the fixed space of $\rho(w)$ corresponds to $\{x\in\mathbf H:\sigma x=x\}$ for $\sigma=\varphi(w)$, and $\ell_T(w)=4-\dim\{x\in\mathbf H:\sigma x=x\}$ by [F3]. The fixed space of $\sigma$ in $\mathbb R^5$ is spanned by the incidence vectors of its cycles, so it has dimension $c(\sigma)$ and its intersection with $\mathbf H$ is defined by the single equation $\sum_C|C|a_C=0$ on the cycle coefficients $a_C$. Every $|C|$ is positive, so fixing one cycle lets its coefficient be solved uniquely from the other $c(\sigma)-1$ coefficients; the intersection therefore has dimension $c(\sigma)-1$; hence $\ell_T(w)=4-(c(\sigma)-1)=5-c(\sigma)$, with $c(\sigma)$ the number of cycles of $\sigma$ (fixed points included). In particular a transposition has $c=4$ and $\ell_T=1$, the long transposition $(1\ 5)$ has $c=4$ and $\ell_T=1$, the reversal $(1\ 5)(2\ 4)$ has $c=3$ and $\ell_T=2$, and a $5$-cycle has $c=1$ and $\ell_T=4=\dim V$. [step 1.1, F3, F4]

3.1 Collecting the results: by step 1.1 the reflections of $W$ are exactly the $\varphi^{-1}(\tau)$ with $\tau$ a transposition, and each has $\ell_T=1$ by step 2.1, which is claim (i)'s first part, while claim (i)'s second part is the inversion count of step 1.2. For the long transposition, $\ell(\varphi^{-1}(1\ 5))=7$ by steps 1.2 and [F1] and $\ell_T(\varphi^{-1}(1\ 5))=1$ by step 2.1, and $\varphi^{-1}(1\ 5)\in T$ because $(1\ 5)=(2\ 5)(1\ 2)(2\ 5)^{-1}$ exhibits $(1\ 5)$ as $\varphi(us_1u^{-1})$ for the element $u:=\varphi^{-1}(2\ 5)$; this is claim (ii). Claim (iii)'s dimension formula, the values $\ell(w_0)=10$ and $\ell_T(w_0)=2$, and $\ell_T=4$ for every $5$-cycle are steps 1.2, 2.1 and [F1]. [step 1.1, step 1.2, step 2.1, F1, F3] ∎
