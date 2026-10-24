---
id: lem-cg-reflection-factorizations-and-independent-normals
kind: lemma
title: "Root normals inside the moved space, factorizations into reflections, and independent normals"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
deps: [cor-independent-set-is-no-larger-than-a-finite-spanning-set, def-cg-canonical-reflection-homomorphism, def-cg-coxeter-diagram-components-and-finite-type, def-cg-finite-reflection-arrangement-and-spherical-chambers, def-cg-real-coxeter-form-and-reflection, def-cg-reflection-length-absolute-order-and-moved-space, def-dimension, def-hh-coxeter-matrix-word-group-and-length, def-linear-basis, def-linear-combination-and-span, def-linear-independence, def-linear-subspace, lem-cg-orthogonal-wall-form-and-subspace-restriction, lem-cg-reflection-form-invariance-and-rank-two-orders, lem-cg-reflection-representation-descends-and-root-norms, lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces, thm-cg-finite-chamber-tiling-and-coset-face-identification, thm-cg-finite-type-positive-definite-criterion, thm-cg-root-inversion-formulas-and-strong-exchange, thm-cg-root-length-criterion-and-faithfulness, thm-dimension-of-a-linear-subspace]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. W. Carter, Conjugacy classes in the Weyl group, Compositio Mathematica 25 (1972) 1-59 (Numdam full text)"
      url: https://www.numdam.org/item/CM_1972__25_1_1_0.pdf
      locator: "Section 2 'Products of reflections', printed pp. 2-5: the root-system setup (i)-(iv) and Lemmas 1-5 with the proofs of Lemmas 2, 3 and 4"
    - title: "T. Brady and C. Watt, Lattices in finite real reflection groups (arXiv:math/0501502)"
      url: https://arxiv.org/pdf/math/0501502
      locator: "Introduction and section 2 (printed pp. 1-3: reflection length, absolute order, moved and fixed spaces M(A), F(A), M(A)=F(A)^perp, the main result of [7], and notes (1)-(7)); the opening of section 3 through Note 3.5 (printed pp. 3-6); and the opening paragraphs of section 4 (printed pp. 8-9) with the A_3 intersection example"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Springer GTM 231 (2005), author/class-hosted complete PDF"
      url: https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf
      locator: "Chapter 2, Exercise 2.35 on printed p. 61 (absolute length a-l(w)=min{k: w=t_1...t_k, t_i in T}); Chapter 7, Exercise 2 on printed pp. 234-235"
dependency_level: 16
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $(W,S)$ be a Coxeter system of finite type with $S$ finite, with $V=\mathbb R^S$, positive definite Coxeter form $B$, canonical reflection representation $\rho$, root system $\Phi$ and reflection set $T$ ([[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]], [[thm-cg-finite-type-positive-definite-criterion]]), with the chamber system $wC$, the open faces $wC_I$ and the root hyperplanes $H_\alpha=\{x\in V:B(x,\alpha)=0\}$ of the transferred dual action ([[def-cg-finite-reflection-arrangement-and-spherical-chambers]]), and let $\ell_T$, $M$, $F$ and $\le_{\mathrm O}$ be as in [[def-cg-reflection-length-absolute-order-and-moved-space]]; for $u\in W$ write $M(u)=M(\rho(u))$ and $F(u)=F(\rho(u))$. Then:

**(1) Root normals in the moved space.** Let $w\in W$ with $w\ne1$. Then $\dim M(w)>0$ and there is a root $\alpha\in\Phi$ with $F(w)\subseteq H_\alpha$. For every such root one has $\alpha\in M(w)$, and the reflection $t_\alpha\in T$ with $\rho(t_\alpha)=r_\alpha$ ([[thm-cg-root-inversion-formulas-and-strong-exchange]] (1), [[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2)) satisfies

$$\rho(t_\alpha)\le_{\mathrm O}\rho(w),\qquad \dim M(w)=1+\dim M(t_\alpha w).$$

**(2) Factorizations and Carter's formula.** Every $w\in W$ is a product $w=t_1t_2\cdots t_k$ of $k=\dim M(w)$ reflections $t_i\in T$, and no product of fewer elements of $T$ represents $w$; equivalently

$$\ell_T(w)=\dim M(w).$$

**(3) Independent normals.** Let $t_1,\dots,t_m\in T$ and choose roots $\alpha_i\in\Phi$ with $\rho(t_i)=r_{\alpha_i}$. Then $\dim M(t_1\cdots t_m)\le m$; and if $\dim M(t_1\cdots t_m)=m$ — in particular if $t_1\cdots t_m$ is a shortest reflection factorization of its product — then the $m$ vectors

$$\alpha_1,\ \rho(t_1)\alpha_2,\ \rho(t_1t_2)\alpha_3,\ \dots,\ \rho(t_1t_2\cdots t_{m-1})\alpha_m$$

are linearly independent ([[def-linear-independence]]) and span $M(t_1\cdots t_m)$.

## Facts & Assumptions

**Given:** The finite-type Coxeter datum $V=\mathbb R^S$, $B$, $\rho$, $\Phi$, $T$, $W$ and the elements $w,t_1,\dots,t_m$ above; $M(u)=M(\rho(u))$, $F(u)=F(\rho(u))$ and $\ell_T$ are as in [[def-cg-reflection-length-absolute-order-and-moved-space]].

[F1] For $I\subseteq S$ the open face is $C_I=\{v\in C:B(v,e_s)=0\text{ for }s\in I,\ B(v,e_s)>0\text{ for }s\notin I\}$, the root hyperplane is $H_\alpha=\{v\in V:B(v,\alpha)=0\}$, and $wC_I\subseteq wH_{e_s}$ for $s\in I$; moreover $V\setminus\{0\}$ is the disjoint union of the sets $wC_I$ over the left cosets $wW_I$ with $I\subsetneq S$, and $\operatorname{Stab}_W(x)=wW_Iw^{-1}$ for every $x\in wC_I$. [[def-cg-finite-reflection-arrangement-and-spherical-chambers]] [[thm-cg-finite-chamber-tiling-and-coset-face-identification]]

[F2] No finite family of proper subspaces of a finite-dimensional vector space over an infinite field covers the whole space. [[lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]]

[F3] Every root $\alpha\in\Phi$ satisfies $B(\alpha,\alpha)=1$, and there is a unique $t_\alpha\in T$ with $\rho(t_\alpha)=r_\alpha$. [[thm-cg-root-inversion-formulas-and-strong-exchange]]

[F4] The representation $\rho$ is injective. [[thm-cg-root-length-criterion-and-faithfulness]]

[F5] For $a\in V$ with $B(a,a)\ne0$ the map $r_a$ is linear, preserves $B$, fixes every $v$ with $B(v,a)=0$, and satisfies $r_a(a)=-a$; consequently $r_a(v)-v\in\mathbb Ra$ for every $v$, so $M(r_a)=\mathbb Ra$. [[lem-cg-reflection-form-invariance-and-rank-two-orders]] [[lem-cg-reflection-representation-descends-and-root-norms]]

[F6] On the positive definite space $(V,B)$ the Wall form lemma holds: (1) $\dim M(XY)\le\dim M(X)+\dim M(Y)$ for $X,Y\in\mathrm O(V)$ and $M(A)=F(A)^\perp$ for $A\in\mathrm O(V)$; (3) for every subspace $U\subseteq M(A)$ the operator $A_U$ of the lemma satisfies $M(A_U)=U$, and every line $L\subseteq V$ is the moved space of exactly one reflection of $\mathrm O(V)$, namely $\mathrm{id}-2\Pi_L$; (4) $A_U\le_{\mathrm O}A$ and $\dim M(A)=\dim U+\dim M(A_U^{-1}A)$ for every $U\subseteq M(A)$. [[lem-cg-orthogonal-wall-form-and-subspace-restriction]]

[F7] $\rho$ is a group homomorphism, so $\rho(uv)=\rho(u)\rho(v)$ and $\rho(1)=\mathrm{id}_V$ ([[def-cg-canonical-reflection-homomorphism]]). $\ell_T(w)$ is the least $k$ over products of $k$ elements of $T$; $M(u)=M(\rho(u))$, $F(u)=F(\rho(u))$; and $T=\{wsw^{-1}:w\in W,\ s\in S\}$ with $(W,S)$ presented as in [[def-hh-coxeter-matrix-word-group-and-length]]. [[def-cg-reflection-length-absolute-order-and-moved-space]]

[F8] For a subspace $U$ of a finite-dimensional space $Z$, $\dim U\le\dim Z$, with equality exactly when $U=Z$. A finite-dimensional space has a basis, obtained as the extension of any linearly independent subset; a basis is an independent spanning set and its cardinality is the dimension of the space. [[thm-dimension-of-a-linear-subspace]] [[def-linear-basis]] [[def-dimension]]

[F9] If a vector space has a spanning subset of cardinality $n$, then every linearly independent subset has at most $n$ elements. [[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]

[F10] A list of vectors is linearly dependent exactly when some nontrivial linear relation holds, and dependence of $w_1,\dots,w_m$ lets one of the vectors be solved for as a combination of the others; the span of a set is the set of its finite linear combinations. [[def-linear-independence]] [[def-linear-combination-and-span]]

## Proof

**Proof technique:** direct.

1.1 Let $w\ne1$. First $\dim M(w)>0$: otherwise $M(\rho(w))=0$, so $\rho(w)-\mathrm{id}=0$ and $\rho(w)=\mathrm{id}$, whence $w=1$ by [F4], a contradiction. Next, a root $\alpha$ with $F(w)\subseteq H_\alpha$ exists. If $F(w)=0$ then [F6](1) gives $M(w)=F(w)^\perp=V\ne0$, so $S\ne\emptyset$ and $\alpha:=e_s$ for any $s\in S$ is a root with $F(w)=0\subseteq H_\alpha$. Suppose now that $F(w)\ne0$; let $\Phi'\subseteq\Phi$ be the finite set of roots with $F(w)\not\subseteq H_\alpha$, so that each $H_\alpha\cap F(w)$ with $\alpha\in\Phi'$ is a proper subspace of the finite-dimensional real space $F(w)$; the finite family consisting of those subspaces and $\{0\}$ consists of proper subspaces of $F(w)$, since $F(w)\ne0$; by [F2] its union does not cover $F(w)$, so there is $0\ne x\in F(w)$ with $x\notin H_\alpha$ for every $\alpha\in\Phi'$, including when $\Phi'=\emptyset$; for every root $\beta$ the implication $x\in H_\beta\Rightarrow F(w)\subseteq H_\beta$ holds, and $x$ is fixed by $w$, so $w\in\operatorname{Stab}_W(x)$. By [F1] there are $w_0\in W$ and $I\subsetneq S$ with $x\in w_0C_I$ and $\operatorname{Stab}_W(x)=w_0W_Iw_0^{-1}$; since $w\ne1$ lies in this stabiliser, $I\ne\emptyset$, so for $s\in I$ one has $x\in w_0C_I\subseteq w_0H_{e_s}=H_{\rho(w_0)e_s}$ by [F1], the equality following from the $B$-invariance of $\rho(w_0)$ [F5]; the implication above with $\beta:=\rho(w_0)e_s$ gives $F(w)\subseteq H_{\rho(w_0)e_s}$ for the root $\rho(w_0)e_s\in\Phi$, so in this case a root with the required property exists as well. Finally, if $F(w)\subseteq H_\alpha$, then $B(f,\alpha)=0$ for all $f\in F(w)$, so $\alpha\in F(w)^\perp=M(w)$ by [F6](1). [F1, F2, F4, F5, F6, given]

1.2 Let $t\in T$ and let $\alpha\in\Phi$ satisfy $\rho(t)=r_\alpha$, as supplied by [F3]. Then $r_\alpha(v)-v=-2B(v,\alpha)\alpha$ for every $v$ by [F5], so $M(t)=M(r_\alpha)=\mathbb R\alpha$ and $\dim M(t)=1$; also $\rho(t)^{-1}=\rho(t)=\rho(t^{-1})$ because $t^2=1$. [F3, F5]

1.3 For $X,Y\in\mathrm O(V)$ one has $\dim M(XY)\le\dim M(X)+\dim M(Y)$ by [F6](1). [F6]

1.4 For $t_1,\dots,t_m\in T$, the telescoping identity is $\rho(t_1\cdots t_m)-\mathrm{id}=\sum_{i=1}^m\rho(t_1\cdots t_{i-1})(\rho(t_i)-\mathrm{id})$: each summand is $\rho(t_1\cdots t_i)-\rho(t_1\cdots t_{i-1})$, by the homomorphism property of $\rho$. Thus $M(t_1\cdots t_m)\subseteq\sum_{i=1}^m\rho(t_1\cdots t_{i-1})M(t_i)$. [F7, algebra, given]

1.5 Linear-algebra tool. Let $Z$ be a finite-dimensional vector space spanned by vectors $w_1,\dots,w_m$. Then $\dim Z\le m$: by [F8] $Z$ has a basis $B$ with $|B|=\dim Z$, and $B$ is linearly independent while $Z$ is spanned by $w_1,\dots,w_m$, so [F9] gives $\dim Z\le m$. If moreover $\dim Z=m$, then $w_1,\dots,w_m$ are linearly independent: otherwise a nontrivial relation expresses some $w_j$ as a combination of the remaining $m-1$ vectors by [F10], those remaining vectors still span $Z$ by [F10], and [F9] would give $\dim Z\le m-1$, a contradiction. [F8, F9, F10]

2.1 A product of $k$ elements of $T$ has moved dimension at most $k$: by step 1.2 each factor has moved dimension $1$, and step 1.3 applied $k$ times bounds the moved dimension of the product by the sum $k$. [step 1.2, step 1.3]

2.2 Let $\alpha\in\Phi$ satisfy $F(w)\subseteq H_\alpha$ and $\alpha\in M(w)$, as produced by step 1.1. Then $\mathbb R\alpha$ is a line contained in $M(\rho(w))$, and by [F6](3) and [F3] the unique reflection of $\mathrm O(V)$ with moved space $\mathbb R\alpha$ is $\mathrm{id}-2\Pi_{\mathbb R\alpha}=r_\alpha=\rho(t_\alpha)$; hence $\rho(t_\alpha)=(\rho(w))_{\mathbb R\alpha}$ in the notation of [F6]. Applying [F6](4) with $A=\rho(w)$ and $U=\mathbb R\alpha$ gives $\rho(t_\alpha)\le_{\mathrm O}\rho(w)$ and $\dim M(w)=\dim\mathbb R\alpha+\dim M\bigl(\rho(t_\alpha)^{-1}\rho(w)\bigr)=1+\dim M(t_\alpha w)$, the last equality because $\rho(t_\alpha)^{-1}\rho(w)=\rho(t_\alpha^{-1}w)=\rho(t_\alpha w)$ by steps 1.1 and 1.2. [step 1.1, step 1.2, F3, F6]

2.3 Let $t_1,\dots,t_m\in T$ and put $v_i:=\rho(t_1\cdots t_{i-1})\alpha_i$ and $Z:=\operatorname{span}\{v_1,\dots,v_m\}$. Steps 1.2 and 1.4 give $M(t_1\cdots t_m)\subseteq Z$. Since $Z$ is spanned by these $m$ vectors, step 1.5 gives $\dim Z\le m$; [F8] applied to the subspace $M(t_1\cdots t_m)$ of $Z$ yields $\dim M(t_1\cdots t_m)\le\dim Z\le m$. [step 1.2, step 1.4, step 1.5, F8]

3.1 Carter's formula and factorization: every $w\in W$ satisfies $\ell_T(w)=\dim M(w)$, and $w$ is a product of exactly $\dim M(w)$ elements of $T$. If $w=1$, then $\dim M(w)=0$ and the empty product represents $1$, giving both assertions. If $w\ne1$ with $\dim M(w)=k\ge1$, step 2.2 supplies $t:=t_\alpha\in T$ with $\dim M(tw)=k-1$; by induction on $k$ (applied to $tw$, whose moved dimension is $k-1$) there are $t_2,\dots,t_k\in T$ with $tw=t_2\cdots t_k$, so $w=t\cdot(tw)=tt_2\cdots t_k$ is a product of $k$ elements of $T$. For the reverse inequality let $w=s_1\cdots s_j$ with $s_1,\dots,s_j\in T$; then $k=\dim M(w)=\dim M(\rho(s_1)\cdots\rho(s_j))\le j$ by step 2.1, so no shorter product of elements of $T$ represents $w$ and $\ell_T(w)=k$ by [F7]. [step 2.1, step 2.2, F7]

4.1 Suppose $\dim M(t_1\cdots t_m)=m$ and put $v_i:=\rho(t_1\cdots t_{i-1})\alpha_i$ as in step 2.3. Step 2.3 gives $M(t_1\cdots t_m)\subseteq Z$ with $m=\dim M(t_1\cdots t_m)\le\dim Z\le m$, so $\dim Z=m$ and $M(t_1\cdots t_m)=Z$ by [F8]. Thus the $v_i$ span $M(t_1\cdots t_m)$, and by step 1.5 the vectors $v_1,\dots,v_m$ are linearly independent and hence form a basis of $M(t_1\cdots t_m)$: this is the independence and spanning assertion of (3). Finally, if $t_1\cdots t_m$ is a shortest reflection factorization of its product $u:=t_1\cdots t_m$, then $m=\ell_T(u)=\dim M(u)$ by step 3.1, so the hypothesis $\dim M(t_1\cdots t_m)=m$ holds and the same conclusion applies. This proves (1), (2) and (3). [step 1.5, step 2.3, step 3.1, F8, given] ∎
