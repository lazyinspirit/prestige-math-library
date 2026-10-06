---
id: ex-natural-transformations-between-tensor-composites
kind: example
title: "Natural transformations between tensor composites are governed by bimodule maps"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - thm-natural-transformations-of-tensor-functors-are-bimodule-maps
  - thm-associativity-of-balanced-tensor-products
  - thm-bimodule-actions-induced-on-tensor-products
  - def-bimodule
  - prop-functoriality-of-module-tensor-products
  - def-natural-transformation
  - def-vertical-composition-of-natural-transformations
  - lem-vertical-composition-of-natural-transformations-is-natural
  - thm-universal-property-of-module-tensor-products
  - def-balanced-and-bilinear-maps
  - thm-unit-isomorphisms-for-module-tensor-products
  - def-direct-sum-of-a-family-of-modules
  - thm-universal-property-of-module-direct-sums
justified_by: []
aliases: []
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Kamensky, Non-Commutative Algebra (BGU course notes, Spring 2017), §5.1, Theorem 5.1.43, Proposition 5.1.40, Lemma 5.1.46, Corollaries 5.1.48-5.1.49"
      url: "https://mkamensky.github.io/teaching/2017s/noncommutative-algebra/notes.pdf"
    - title: "A. Nyman and S. P. Smith, A Generalization of Watts's Theorem: Right Exact Functors on Module Categories, arXiv:0806.0832, Theorem 1.1-1.2, Propositions 3.2-3.3, Lemma 3.4"
      url: "https://arxiv.org/pdf/0806.0832"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Let $A,B,C$ be unital rings, let $M$ be a $(B,A)$-bimodule and $N$ a
$(C,B)$-bimodule, with further bimodules $M',N'$ of the same types
([[def-bimodule]]), and write $T_M=M\otimes_A-$ and $T_N=N\otimes_B-$. By
[[thm-bimodule-actions-induced-on-tensor-products]] the outer actions make
$N\otimes_BM$ a $(C,A)$-bimodule, and the associativity isomorphism
$\alpha_X:(N\otimes_BM)\otimes_AX\to N\otimes_B(M\otimes_AX)$ of
[[thm-associativity-of-balanced-tensor-products]] identifies the composite
functor $T_N\circ T_M$ with the tensor functor $T_{N\otimes_BM}$ of that
bimodule.

Consequently natural transformations
$T_N\circ T_M\Rightarrow T_{N'}\circ T_{M'}$ correspond bijectively to
$(C,A)$-bimodule maps $N\otimes_BM\to N'\otimes_BM'$: conjugating by the two
associativity isomorphisms reduces the classification to
[[thm-natural-transformations-of-tensor-functors-are-bimodule-maps]]. Each pair
of bimodule maps $g:N\to N'$ and $f:M\to M'$ yields the transformation with
components

$$\alpha'_X\circ((g\otimes f)\otimes1_X)\circ\alpha_X^{-1}:\quad n\otimes(m\otimes x)\longmapsto g(n)\otimes(f(m)\otimes x),$$

and the classification covers all bimodule maps, not only those of the form
$g\otimes f$: the verification below exhibits a bimodule map between tensor
products of bimodules that is not induced by any pair $(g,f)$.

## Facts & Assumptions

**Given:** Unital rings $A,B,C$, a $(B,A)$-bimodule $M$, a $(C,B)$-bimodule $N$, bimodules $M',N'$ of the same types, and a field $k$ for the witness.

[F1] The associativity map $\alpha:(N\otimes_BM)\otimes_AX\to N\otimes_B(M\otimes_AX)$, $\alpha((n\otimes m)\otimes x)=n\otimes(m\otimes x)$, is a natural isomorphism in $X$ and respects compatible outer actions ([[thm-associativity-of-balanced-tensor-products]]).

[F2] Outer actions: if $N$ is a $(C,B)$-bimodule and $M$ a left $B$-module, then $N\otimes_BM$ carries a left $C$-action $c(n\otimes m)=(cn)\otimes m$; if $N$ is a right $B$-module and $M$ a $(B,A)$-bimodule, then $N\otimes_BM$ carries a right $A$-action $(n\otimes m)a=n\otimes(ma)$; when both are present they commute, so $N\otimes_BM$ is a $(C,A)$-bimodule. Over a commutative ring $k$, every left $k$-module is a $(k,k)$-bimodule for the same action ([[thm-bimodule-actions-induced-on-tensor-products]], [[def-bimodule]]).

[F3] Natural transformations are families of components satisfying the naturality equation, and their vertical composites are componentwise and natural ([[def-natural-transformation]], [[def-vertical-composition-of-natural-transformations]], [[lem-vertical-composition-of-natural-transformations-is-natural]]).

[F4] Induced tensor maps satisfy $(f\otimes g)(n\otimes m)=f(n)\otimes g(m)$ and $(f'\circ f)\otimes(g'\circ g)=(f'\otimes g')\circ(f\otimes g)$, with $\operatorname{id}\otimes\operatorname{id}=\operatorname{id}$ ([[prop-functoriality-of-module-tensor-products]]).

[F5] For $(C,A)$-bimodules $K,K'$ the assignment $f\mapsto(f\otimes1_X)$ is a bijection $\operatorname{Hom}_{C\text{-}A}(K,K')\to\operatorname{Nat}(T_K,T_{K'})$ compatible with vertical composition ([[thm-natural-transformations-of-tensor-functors-are-bimodule-maps]]).

[F6] $\rho:k\otimes_kk\to k$, $\rho(x\otimes y)=xy$, is a group isomorphism, so every element of $k\otimes_kk$ is detected by its image under $\rho$ ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[F7] Every balanced map into an abelian group factors uniquely through the tensor product: a map $\overline\beta$ with $\overline\beta(m\otimes n)=\beta(m,n)$ exists exactly for balanced $\beta$ ([[thm-universal-property-of-module-tensor-products]]).

[F8] Over a commutative ring, a bilinear map is balanced ([[def-balanced-and-bilinear-maps]]).

[F9] The module $k^2$ is the direct sum $k\oplus k$ with coordinate inclusions $\jmath_1,\jmath_2$; for every family of maps $k\to P$ there is a unique map $k^2\to P$ with the prescribed composites, and the empty case is the zero module ([[def-direct-sum-of-a-family-of-modules]], [[thm-universal-property-of-module-direct-sums]]).

## Verification

**Given:** The data of the Example, and for the witness a field $k$ with $e_1=\jmath_1(1)$, $e_2=\jmath_2(1)$ the standard generators of $k^2$.

1.1 The associativity maps $\alpha_X:(N\otimes_BM)\otimes_AX\to N\otimes_B(M\otimes_AX)=(T_N\circ T_M)(X)$ are natural isomorphisms in $X$ by [F1], and $N\otimes_BM$ is a $(C,A)$-bimodule by [F2], so $\alpha$ is a natural isomorphism of functors $T_{N\otimes_BM}\Rightarrow T_N\circ T_M$. [F1, F2]

1.2 Witness data: take $A=B=C=k$, $M=N=k^2$, $M'=N'=k$, all regarded as bimodules via the field action by [F2]. Define $\beta:k^2\times k^2\to k$ by $\beta(m,n)=m_1n_1+m_2n_2$ for $m=m_1e_1+m_2e_2$, $n=n_1e_1+n_2e_2$. The map $\beta$ is bilinear, hence balanced by [F8], so by [F7] there is a unique group homomorphism $\overline\beta:k^2\otimes_kk^2\to k$ with $\overline\beta(m\otimes n)=\beta(m,n)$; it is $k$-linear because $\overline\beta(c(m\otimes n))=\beta(cm,n)=c\,\beta(m,n)$ on generators, and $\beta(e_i,e_j)=\delta_{ij}$ since $e_1,e_2$ are the standard generators. [F7, F8, F9]

2.1 Conjugation by $\alpha$ and by the corresponding isomorphism $\alpha'$ for the primed bimodules is a bijection from $\operatorname{Nat}(T_N\circ T_M,T_{N'}\circ T_{M'})$ to $\operatorname{Nat}(T_{N\otimes_BM},T_{N'\otimes_BM'})$: for $\eta$ in the first set put $\eta'_X:=(\alpha'_X)^{-1}\circ\eta_X\circ\alpha_X$, a natural transformation by [F3], and the assignment $\xi\mapsto\bigl(\alpha'_X\circ\xi_X\circ\alpha_X^{-1}\bigr)$ is inverse to it by the componentwise cancellation of inverse natural isomorphisms. [F3, step 1.1]

3.1 A pair of bimodule maps $g:N\to N'$, $f:M\to M'$ gives the natural transformation $T_N\circ T_M\Rightarrow T_{N'}\circ T_{M'}$ with components $(g\otimes1_{M'\otimes_AX})\circ(1_N\otimes(f\otimes1_X))$, equal to $\alpha'_X\circ((g\otimes f)\otimes1_X)\circ\alpha_X^{-1}$ by [F1] and agreement on every $n\otimes(m\otimes x)$; this is natural by [F3] and [F4], and under the conjugations of step 2.1 it corresponds to the bimodule map $g\otimes f:N\otimes_BM\to N'\otimes_BM'$ with $(g\otimes f)(n\otimes m)=g(n)\otimes f(m)$ of [F4]. [F1, F3, F4, step 2.1]

4.1 By [F5] the natural transformations $T_{N\otimes_BM}\Rightarrow T_{N'\otimes_BM'}$ correspond bijectively to $(C,A)$-bimodule maps $N\otimes_BM\to N'\otimes_BM'$; composing with the bijection of step 2.1 classifies the transformations between the composites, and step 3.1 identifies the image of every pair $(g,f)$. [F5, step 2.1, step 3.1]

5.1 The element $\tau:=\rho^{-1}\circ\overline\beta\in\operatorname{Hom}_{k\text{-}k}(k^2\otimes_kk^2,k\otimes_kk)$ is a bimodule map by [F6] and step 1.2. Suppose that $\tau=g\otimes f$ for $k$-linear $g,f:k^2\to k$, i.e. $\tau(m\otimes n)=g(m)\otimes f(n)$ by [F4]; applying the isomorphism $\rho$ of [F6] and evaluating on the four elementary tensors $e_i\otimes e_j$ gives $g(e_i)f(e_j)=\rho(\tau(e_i\otimes e_j))=\beta(e_i,e_j)=\delta_{ij}$. These four equations are contradictory: $g(e_1)f(e_1)=1$ forces $g(e_1)\neq0$ and $f(e_1)\neq0$, then $g(e_1)f(e_2)=0$ forces $f(e_2)=0$, and then $g(e_2)f(e_2)=0$ contradicts $g(e_2)f(e_2)=1$. Hence no pair $(g,f)$ produces $\tau$, while step 4.1 classifies $\tau$ as a genuine bimodule map $N\otimes_BM\to N'\otimes_BM'$. [F4, F6, step 1.2, step 4.1]

6.1 Steps 1.1 and 4.1 identify $T_N\circ T_M$ with $T_{N\otimes_BM}$ and classify all natural transformations between the composites by all $(C,A)$-bimodule maps of kernels, step 3.1 gives the components $\alpha'_X\circ((g\otimes f)\otimes1_X)\circ\alpha_X^{-1}$ for pairs $(g,f)$, and steps 1.2 and 5.1 exhibit a bimodule map not of the form $g\otimes f$. No basis of an infinite-dimensional space and no presentation is chosen, and no commutativity of the rings is assumed. [step 1.1, step 3.1, step 4.1, step 5.1] ∎
