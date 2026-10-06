---
id: lem-tensor-product-of-real-symmetric-forms-has-multiplicative-inertia
kind: lemma
title: "The tensor product of nondegenerate real symmetric forms has multiplicative signature"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 0
deps:
  - def-definiteness-inertia-and-signature-data-over-the-reals
  - thm-sylvesters-law-of-inertia
  - thm-symmetric-bilinear-forms-have-an-orthogonal-basis
  - def-bilinear-symmetric-skew-and-alternating-forms
  - cor-real-symmetric-bilinear-forms-are-classified-by-inertia
  - def-tensor-product-of-modules-by-generators-and-relations
  - thm-universal-property-of-module-tensor-products
  - thm-tensor-product-basis-from-bases
  - def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Exercise 11.25, printed p. 95: multiplicativity of the signature of a product is the tensor-product inertia computation"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, property (2) and its proof, printed pp. 34-36: the middle forms tensor and signatures multiply"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $V,W$ be finite-dimensional real vector spaces with nondegenerate
symmetric bilinear forms $B$ and $C$
([[def-bilinear-symmetric-skew-and-alternating-forms]]) of inertia data $(p,q)$
and $(p',q')$. The symmetric form $B\otimes C$ on $V\otimes_{\mathbb R}W$
defined on simple tensors by
$(B\otimes C)(v\otimes w,v'\otimes w')=B(v,v')C(w,w')$ is nondegenerate with
inertia data $(pp'+qq',\ pq'+p'q)$, so
$$\operatorname{sign}(B\otimes C)=\operatorname{sign}(B)\operatorname{sign}(C).$$

## Facts & Assumptions

**Given:** Finite-dimensional real vector spaces $V,W$, nondegenerate symmetric bilinear forms $B$ on $V$ and $C$ on $W$, with inertia data $(p,q)$ and $(p',q')$.

[F1] If a basis diagonalizes a symmetric bilinear form with $p$ positive, $q$ negative and $r$ zero diagonal entries, then its inertia is $(p,q,r)$ and its signature is $p-q$ ([[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F2] Every symmetric bilinear form on a finite-dimensional real vector space is congruent to exactly one normal form $\operatorname{diag}(I_p,-I_q,0_r)$ ([[thm-sylvesters-law-of-inertia]]).

[F3] Every symmetric bilinear form on a finite-dimensional vector space over a field of characteristic not $2$ has a basis whose distinct vectors are pairwise orthogonal ([[thm-symmetric-bilinear-forms-have-an-orthogonal-basis]]).

[F4] A symmetric bilinear form satisfies $B(u,v)=B(v,u)$ for all $u,v$ ([[def-bilinear-symmetric-skew-and-alternating-forms]]).

[F5] In a basis with coordinate columns $x,y$ one has $B(u,v)=x^{\mathsf T}[B]y$; the form is nondegenerate exactly when its radical vanishes, equivalently when its matrix in any basis is invertible ([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]).

[F6] If $(v_i)$ and $(w_j)$ are bases of $V$ and $W$ over the commutative ring $\mathbb R$, then $(v_i\otimes w_j)$ is a basis of $V\otimes_{\mathbb R}W$ ([[thm-tensor-product-basis-from-bases]]).

[F7] The elementary tensors generate $V\otimes_{\mathbb R}W$ and are additive and $\mathbb R$-balanced in each variable ([[def-tensor-product-of-modules-by-generators-and-relations]], [[thm-universal-property-of-module-tensor-products]]).

[F8] Two real symmetric forms of the same finite dimension are congruent exactly when they have the same inertia ([[cor-real-symmetric-bilinear-forms-are-classified-by-inertia]]).

## Proof

**Proof technique:** direct; diagonalize both factors and read off the inertia of the tensor product in the product basis.

1.1 By [F3] there are bases $v_1,\dots,v_n$ of $V$ and $w_1,\dots,w_m$ of $W$ diagonalizing $B$ and $C$: $B(v_i,v_{i'})=b_i\delta_{ii'}$ and $C(w_j,w_{j'})=c_j\delta_{jj'}$ for real $b_i,c_j$. No $b_i$ is zero: a zero entry would make $v_i$ pair to zero with every basis vector, hence lie in the radical by [F5], contradicting nondegeneracy; the same holds for the $c_j$. After reordering, $b_i>0$ for $i\le p$, $b_i<0$ for $p<i\le n$, and $c_j>0$ for $j\le p'$, $c_j<0$ for $p'<j\le m$. [given, F3, F5]

1.2 By [F6] the products $v_i\otimes w_j$ form a basis of $V\otimes_{\mathbb R}W$. Define a bilinear form $D$ on $V\otimes_{\mathbb R}W$ by prescribing its diagonal matrix in this basis, $D(v_i\otimes w_j,v_{i'}\otimes w_{j'}):=b_ic_j\,\delta_{ii'}\delta_{jj'}$, and extending by the matrix formula of [F5]: this is a well-defined bilinear form, and it is symmetric because the diagonal matrix is symmetric. [given, F4, F5, F6]

2.1 For $v=\sum_ia_iv_i$, $w=\sum_jd_jw_j$, $v'=\sum_{i'}a'_{i'}v_{i'}$, $w'=\sum_{j'}d'_{j'}w_{j'}$ in $V$ and $W$, bilinearity and the diagonal prescription give $D(v\otimes w,v'\otimes w')=\sum_{i,i',j,j'}a_id_ja'_{i'}d'_{j'}b_ic_j\delta_{ii'}\delta_{jj'}=\bigl(\sum_ia_ia'_ib_i\bigr)\bigl(\sum_jd_jd'_jc_j\bigr)=B(v,v')C(w,w')$. Hence $D$ is exactly the form $B\otimes C$ of the statement on simple tensors, and by [F7] it is the unique bilinear form with these values on elementary tensors. [step 1.2, F5, F7, algebra]

2.2 Inertia: the basis $(v_i\otimes w_j)$ is diagonal for $D$ with entries $b_ic_j$, none zero. The entry $b_ic_j$ is positive exactly when $b_i$ and $c_j$ have the same sign, which happens for $pp'$ pairs of positive entries and $qq'$ pairs of negative entries; it is negative for the $pq'$ pairs with $b_i>0>c_j$ and the $p'q$ pairs with $c_j>0>b_i$. By [F1] the inertia of $D$ is therefore $(pp'+qq',\,pq'+p'q,0)$. [step 1.1, step 1.2, F1, algebra]

3.1 Nondegeneracy: let $u=\sum_{i,j}x_{ij}\,v_i\otimes w_j$ satisfy $D(u,u')=0$ for all $u'$. Evaluating on $u'=v_i\otimes w_j$ and using the diagonal prescription gives $x_{ij}b_ic_j=0$, and $b_ic_j\ne0$, so every $x_{ij}=0$ and $u=0$. By symmetry the same computation with the second variable shows the right radical vanishes, so $D$ is nondegenerate. [step 1.1, step 1.2, step 2.1, F4, F5]

4.1 Consequently $\operatorname{sign}(B\otimes C)=(pp'+qq')-(pq'+p'q)=(p-q)(p'-q')=\operatorname{sign}(B)\operatorname{sign}(C)$; if $V=0$ then $p=q=0$, and if $W=0$ then $p'=q'=0$; in either case the tensor-product basis is empty and both sides vanish. By [F8] the inertia computation pins down the congruence class of $D$, and [F2] gives its normal form. [step 3.1, step 2.2, F1, F2, F8] ∎
