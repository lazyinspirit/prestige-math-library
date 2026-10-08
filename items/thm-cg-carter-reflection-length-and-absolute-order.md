---
id: thm-cg-carter-reflection-length-and-absolute-order
kind: theorem
title: "Carter's reflection-length formula, the absolute order on a finite Coxeter group, and moved-space rigidity under a common upper bound"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
deps: [def-cg-canonical-reflection-homomorphism, def-cg-coxeter-diagram-components-and-finite-type, def-cg-real-coxeter-form-and-reflection, def-cg-reflection-length-absolute-order-and-moved-space, def-graded-poset-and-rank, def-hh-coxeter-matrix-word-group-and-length, def-partial-order, lem-cg-orthogonal-wall-form-and-subspace-restriction, lem-cg-reflection-factorizations-and-independent-normals, thm-cg-finite-coxeter-classification-including-h-and-dihedral, thm-cg-finite-type-positive-definite-criterion]
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
dependency_level: 17
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $(W,S)$ be a Coxeter system of finite type with $S$ finite, with $V=\mathbb R^S$, positive definite Coxeter form $B$, canonical reflection representation $\rho$, root system $\Phi$, reflection set $T$ and length function $\ell$ ([[def-hh-coxeter-matrix-word-group-and-length]], [[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]], [[thm-cg-finite-type-positive-definite-criterion]]), and let $\ell_T$, $M$, $F$ and $\le_T$ be as in [[def-cg-reflection-length-absolute-order-and-moved-space]]. Then:

**(1) Carter's formula.** For every $w\in W$,

$$\ell_T(w)=\dim M(w)=\dim V-\dim F(w).$$

**(2) The absolute order.** $\le_T$ is a partial order on $W$ ([[def-partial-order]]), and:

**(i)** $u\le_T v$ holds if and only if there are reflections $t_1,\dots,t_m\in T$ and an index $k\le m$ such that $u=t_1\cdots t_k$ and $v=t_1\cdots t_m$ are shortest reflection factorizations, that is, $k=\ell_T(u)$ and $m=\ell_T(v)$ (a shortest reflection factorization of $u$ is a prefix of one of $v$);

**(ii)** $\ell_T(1)=0$, $u<_T v$ implies $\ell_T(u)<\ell_T(v)$, and $\ell_T(y)=\ell_T(x)+1$ whenever $y$ covers $x$; hence $\ell_T$ is a rank function and every interval $[u,v]_T=\{x\in W:u\le_Tx\le_Tv\}$ is finite ([[def-graded-poset-and-rank]]);

**(iii)** $|\ell_T(u)-\ell_T(v)|\le\ell_T(u^{-1}v)$, $\ell_T(u^{-1})=\ell_T(u)$ and $\ell_T(vuv^{-1})=\ell_T(u)$ for all $u,v\in W$;

**(iv)** $u\le_T v$ implies $M(u)\subseteq M(v)$ and $F(v)\subseteq F(u)$.

**(3) Moved-space rigidity under a common upper bound.** Let $\alpha,\beta,\delta\in W$ with $\alpha\le_T\delta$ and $\beta\le_T\delta$. Then

$$\alpha\le_T\beta\iff M(\alpha)\subseteq M(\beta);$$

in particular $M(\alpha)=M(\beta)$ implies $\alpha=\beta$, and $u\mapsto M(u)$ is an order isomorphism from $[1,\delta]_T$ onto its image ordered by inclusion. The proof of the converse uses the common upper bound $\delta$, through the restriction of $\delta$ to the subspace $M(\alpha)$; the converse is claimed only under this hypothesis (see the companion example of the $I_2(4)$ rotation, where the hypothesis fails).

## Facts & Assumptions

**Given:** The finite-type Coxeter datum $W,S,V,B,\rho,\Phi,T$ and the elements $\alpha,\beta,\delta\in W$ above; $\ell_T$, $M$, $F$ and $\le_T$ are as in [[def-cg-reflection-length-absolute-order-and-moved-space]].

[F1] Every $w\in W$ is a product of $k=\dim M(w)$ elements of $T$, no product of fewer elements of $T$ represents $w$, and $\ell_T(w)=\dim M(w)$. [[lem-cg-reflection-factorizations-and-independent-normals]]

[F2] The Wall form lemma holds on the positive definite space $(V,B)$: (1) $M(A)=F(A)^\perp$ and $V=M(A)\oplus F(A)$ for $A\in\mathrm O(V)$; (4) for $B\le_{\mathrm O}A$ one has $M(B)\subseteq M(A)$ and $B=A_{M(B)}$, the assignment $U\mapsto A_U$ is a bijection from subspaces of $M(A)$ onto $\{B\in\mathrm O(V):B\le_{\mathrm O}A\}$, and it is an order isomorphism for inclusion and $\le_{\mathrm O}$, with $(A_{U'})_U=A_U$ and $A_U\le_{\mathrm O}A_{U'}$ for $U\subseteq U'$; (5) an element of $\mathrm O(V)$ is a product of exactly $\dim M$ reflections, and $B\le_{\mathrm O}A$ holds exactly when $B$ is a prefix of a shortest factorization of $A$. [[lem-cg-orthogonal-wall-form-and-subspace-restriction]]

[F3] $u\le_T v$ means $\ell_T(v)=\ell_T(u)+\ell_T(u^{-1}v)$, $B\le_{\mathrm O}A$ means $\dim M(A)=\dim M(B)+\dim M(B^{-1}A)$, and $T=\{wsw^{-1}:w\in W,\ s\in S\}$ is closed under inversion; for $u\in W$ one has $M(u)=M(\rho(u))$ and $F(u)=F(\rho(u))$. [[def-cg-reflection-length-absolute-order-and-moved-space]]

[F4] $\le_T$ is a relation on the finite set $W$; $\le_T$ is a partial order exactly when it is reflexive, antisymmetric and transitive, and a rank function on a finite poset is a map $\rho$ with $\rho(\text{minimal})=0$ and $\rho(y)=\rho(x)+1$ across covers. [[def-partial-order]] [[def-graded-poset-and-rank]]

[F5] [[def-cg-canonical-reflection-homomorphism]] (1): $\rho:W\to\mathrm{GL}(V)$ is a group homomorphism into the group of invertible linear maps, so $\rho(v)^{-1}=\rho(v^{-1})$ and $\rho(v)^{-1}(V)=V$.

## Proof

**Proof technique:** direct.

1.1 For every $w\in W$ the factorization lemma gives $\ell_T(w)=\dim M(w)$ [F1], and the Wall form lemma gives $V=M(w)\oplus F(w)$ [F2](1), so $\dim M(w)=\dim V-\dim F(w)$; this is Carter's formula (1). [F1, F2]

1.2 For $x,y\in W$ one has $\ell_T(xy)\le\ell_T(x)+\ell_T(y)$: shortest factorizations $x=t_1\cdots t_k$ and $y=s_1\cdots s_l$ with $k=\ell_T(x)$, $l=\ell_T(y)$ exist by [F1] and concatenate to $xy=t_1\cdots t_ks_1\cdots s_l$, a product of $k+l$ elements of $T$. Also $\ell_T(x^{-1})=\ell_T(x)$, because if $x=t_1\cdots t_k$ then $x^{-1}=t_k\cdots t_1$, giving $\ell_T(x^{-1})\le\ell_T(x)$, and applying this to $x^{-1}$ gives equality. [F1]

1.3 $\ell_T(x)=0$ if and only if $x=1$: by [F1] an element of reflection length $0$ is a product of $0$ elements of $T$, which is the identity, and conversely the empty product represents $1$; in particular $1$ is the only element of reflection length $0$. [F1]

2.1 For $u,v\in W$ one has $u\le_Tv$ if and only if $\rho(u)\le_{\mathrm O}\rho(v)$: by [F3] the two relations read $\ell_T(v)=\ell_T(u)+\ell_T(u^{-1}v)$ and $\dim M(v)=\dim M(u)+\dim M(u^{-1}v)$, and $\ell_T=\dim M$ is step 1.1. [step 1.1, F3]

2.2 Conjugation invariance: for $u,v\in W$, [F5] gives $\rho(vuv^{-1})-\mathrm{id}=\rho(v)(\rho(u)-\mathrm{id})\rho(v)^{-1}$. Since $\rho(v)^{-1}(V)=V$, taking images and using [F3] yields $M(vuv^{-1})=\rho(v)M(u)$. The invertible map $\rho(v)$ preserves the dimension of this subspace, so $\dim M(vuv^{-1})=\dim M(u)$ and hence $\ell_T(vuv^{-1})=\ell_T(u)$ by step 1.1. [step 1.1, F3, F5, algebra]

2.3 The relation $\le_T$ is reflexive, antisymmetric and transitive, and the triangle inequality holds. Reflexive: $\ell_T(u)=\ell_T(u)+\ell_T(u^{-1}u)$ by step 1.3. Antisymmetric: if $u\le_Tv$ and $v\le_Tu$, then $\ell_T(u^{-1}v)=\ell_T(v)-\ell_T(u)$ and $\ell_T(v^{-1}u)=\ell_T(u)-\ell_T(v)$, while $\ell_T(v^{-1}u)=\ell_T((u^{-1}v)^{-1})=\ell_T(u^{-1}v)$ by step 1.2, so $\ell_T(u^{-1}v)=0$ and $u^{-1}v=1$, that is $u=v$, by step 1.3. Transitive: if $u\le_Tv\le_Tw$, then $\ell_T(w)=\ell_T(u)+\ell_T(u^{-1}v)+\ell_T(v^{-1}w)$, while $\ell_T(u^{-1}w)\le\ell_T(u^{-1}v)+\ell_T(v^{-1}w)$ and $\ell_T(w)\le\ell_T(u)+\ell_T(u^{-1}w)$ by step 1.2; all inequalities are therefore equalities and $\ell_T(w)=\ell_T(u)+\ell_T(u^{-1}w)$, that is $u\le_Tw$. Triangle inequality: $\ell_T(v)\le\ell_T(u)+\ell_T(u^{-1}v)$ and $\ell_T(u)\le\ell_T(v)+\ell_T(v^{-1}u)=\ell_T(v)+\ell_T(u^{-1}v)$ by step 1.2, so $|\ell_T(u)-\ell_T(v)|\le\ell_T(u^{-1}v)$. [step 1.2, step 1.3]

2.4 Prefix form: $u\le_Tv$ holds if and only if there are reflections $t_1,\dots,t_m\in T$ and an index $k\le m$ such that $u=t_1\cdots t_k$ and $v=t_1\cdots t_m$ are shortest factorizations, that is $k=\ell_T(u)$ and $m=\ell_T(v)$. If $u\le_Tv$, then [F1] supplies shortest factorizations $u=t_1\cdots t_k$ and $u^{-1}v=s_1\cdots s_l$ with $l=\ell_T(u^{-1}v)$, and $v=u\cdot(u^{-1}v)=t_1\cdots t_ks_1\cdots s_l$ has length $k+l=\ell_T(v)$, so it is shortest and exhibits the required prefix. Conversely, given such factorizations, $u^{-1}v=(t_1\cdots t_k)^{-1}t_1\cdots t_m=t_k\cdots t_1t_1\cdots t_m=t_{k+1}\cdots t_m$, so $\ell_T(u^{-1}v)\le m-k$ and hence $\ell_T(u)+\ell_T(u^{-1}v)\le k+(m-k)=m=\ell_T(v)$, while $\ell_T(v)\le\ell_T(u)+\ell_T(u^{-1}v)$ by step 1.2; thus equality holds and $u\le_Tv$. [step 1.2, F1]

3.1 Part (ii). First $\ell_T(1)=0$ by step 1.3. If $u<_Tv$, then $\ell_T(v)=\ell_T(u)+\ell_T(u^{-1}v)$ with $u^{-1}v\ne1$, so $\ell_T(u^{-1}v)\ge1$ by step 1.3 and $\ell_T(u)<\ell_T(v)$. Suppose now that $y$ covers $x$, so $x<_Ty$, and put $d:=\ell_T(y)-\ell_T(x)=\ell_T(x^{-1}y)\ge1$; by step 2.4 there are $t_1,\dots,t_m\in T$ with $y=t_1\cdots t_m$ and $x=t_1\cdots t_k$ shortest, so $d=m-k$. If $d\ge2$, put $z:=t_1\cdots t_{k+1}$; then $z^{-1}y=t_{k+2}\cdots t_m$ is a product of $m-k-1$ elements of $T$, so $\ell_T(z^{-1}y)\le m-k-1$ and, by the triangle inequality of step 2.3, $\ell_T(z)\ge\ell_T(y)-\ell_T(z^{-1}y)\ge m-(m-k-1)=k+1$, while $\ell_T(z)\le k+1$; hence $\ell_T(z)=k+1$ and step 2.4 applied to the shortest factorizations $x=t_1\cdots t_k$ and $z=t_1\cdots t_{k+1}$ gives $x<_Tz$, and applied to $z=t_1\cdots t_{k+1}$ and $y=t_1\cdots t_m$ gives $z<_Ty$ — contradicting that $y$ covers $x$. Hence $d=1$. Every minimal element is $1$: if $x$ is minimal and $x\ne1$, then $1<_Tx$ because $\ell_T(x)=\ell_T(1)+\ell_T(x)$ by steps 1.3, a contradiction; and $\ell_T(1)=0$. Consequently $\ell_T$ is a rank function on the finite poset $(W,\le_T)$ [F4], and every interval $[u,v]_T$ is contained in the finite set $W$. [step 1.3, step 2.3, step 2.4, F4]

3.2 Part (iv): if $u\le_Tv$, then $\rho(u)\le_{\mathrm O}\rho(v)$ by step 2.1, so [F2](4) gives $M(u)\subseteq M(v)$, and then $F(v)=M(v)^\perp\subseteq M(u)^\perp=F(u)$ by [F2](1) and [F3]. [step 2.1, F2, F3]

4.1 Let $\alpha\le_T\delta$ and $\beta\le_T\delta$. If $\alpha\le_T\beta$, then $M(\alpha)\subseteq M(\beta)$ by step 3.2. Conversely assume $M(\alpha)\subseteq M(\beta)$; by step 2.1 one has $\rho(\alpha)\le_{\mathrm O}\rho(\delta)$ and $\rho(\beta)\le_{\mathrm O}\rho(\delta)$, so [F2](4) gives $\rho(\alpha)=(\rho(\delta))_{M(\alpha)}$, $\rho(\beta)=(\rho(\delta))_{M(\beta)}$, and $M(\beta)\subseteq M(\delta)$; since the restriction assignment of [F2](4) is an order isomorphism and $M(\alpha)\subseteq M(\beta)$, one has $\rho(\alpha)=\bigl((\rho(\delta))_{M(\beta)}\bigr)_{M(\alpha)}=(\rho(\beta))_{M(\alpha)}\le_{\mathrm O}\rho(\beta)$, and step 2.1 gives $\alpha\le_T\beta$. Hence $\alpha\le_T\beta$ if and only if $M(\alpha)\subseteq M(\beta)$; in particular $M(\alpha)=M(\beta)$ yields both $\alpha\le_T\beta$ and $\beta\le_T\alpha$, so $\alpha=\beta$ by antisymmetry in step 2.3, and the map $u\mapsto M(u)$ is an order isomorphism from $[1,\delta]_T$ onto its image ordered by inclusion, being order-preserving and order-reflecting by the equivalence just proved and injective by the equality statement. This proves (1), (2) and (3). [step 2.1, step 2.3, step 3.2, F2] ∎
