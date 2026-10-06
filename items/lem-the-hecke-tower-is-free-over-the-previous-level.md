---
id: lem-the-hecke-tower-is-free-over-the-previous-level
kind: lemma
title: "The Hecke tower is free over the previous level"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
deps: [def-markov-trace-on-the-type-a-hecke-tower, thm-standard-basis-of-the-generic-type-a-hecke-algebra,
       def-generic-type-a-hecke-algebra, lem-finite-weyl-strong-exchange-and-deletion,
       def-symmetric-group, def-free-module-on-a-set-and-standard-basis,
       thm-the-symmetric-group-has-the-coxeter-presentation, def-weyl-group-and-length-for-finite-gl-n,
       def-tensor-product-of-modules-by-generators-and-relations,
       thm-universal-property-of-module-tensor-products]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Theo Johnson-Freyd, MATH 448 Reshetikhin-Turaev invariants, lecture notes 15 January 2016, Lemma 2.1 and its use in Theorem 2.2 (the bimodule decomposition of the Hecke tower)"
      url: "https://categorified.net/RTinvariants/Jan15.pdf"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 4.3 printed pp. 47-49 (the n!-element standard basis and the inductive trace computation)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Statement

Let $H(1)\subset H(2)\subset\cdots$ be the Hecke tower of
[[def-markov-trace-on-the-type-a-hecke-tower]], with $H(n)$ free of rank $n!$
over $\Lambda$ with basis $\{T_w:w\in S_n\}$
([[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]), and for
$1\le i\le n$ put $w^{(i)}:=s_ns_{n-1}\cdots s_{n-i+1}$, $w^{(0)}:=1$. Then for
every $n\ge1$:

1. $H(n+1)$ is a free left $H(n)$-module with basis
   $T_{w^{(0)}},T_{w^{(1)}},\dots,T_{w^{(n)}}$: every element of $H(n+1)$ has a
   unique expression $\sum_{i=0}^{n}x_iT_{w^{(i)}}$ with $x_i\in H(n)$;
2. $H(n+1)$ is also a free right $H(n)$-module with basis
   $T_{(w^{(0)})^{-1}},T_{(w^{(1)})^{-1}},\dots,T_{(w^{(n)})^{-1}}$;
3. the  $H(n)$-sub-bimodule $H(n)T_nH(n)$ equals the direct sum
   $\bigoplus_{i=1}^{n}H(n)T_{w^{(i)}}$, and the multiplication map
   $$H(n)\otimes_{H(n-1)}H(n)\longrightarrow H(n+1),\qquad x\otimes y\longmapsto xT_ny,$$
   is an isomorphism of $H(n)$-bimodules onto $H(n)T_nH(n)$; consequently
   $H(n+1)=H(n)\oplus H(n)T_nH(n)$ holds as a direct sum of $H(n)$-bimodules in
   the form $H(n+1)=H(n)\oplus\bigl(H(n)\otimes_{H(n-1)}H(n)\bigr)$. All three parts are proved here. Each chosen nonidentity minimal left-coset representative $w^{(i)}$
   has a displayed reduced expression containing $s_n$ exactly once; this does
   not characterize all basis elements whose reduced expressions contain
   $s_n$ once. In the tensor notation of part (3), set $H(0):=\Lambda$, the
   scalar extension $\Lambda\otimes_AH_v(0)$, so the $n=1$ case is defined.

## Facts & Assumptions

**Given:** The Hecke tower $H(1)\subset H(2)\subset\cdots$ over $\Lambda=\mathbb Z[v^{\pm1},z]$ and an integer $n\ge1$. No choice principle is used.

[F1] $H(n)$ is the $\Lambda$-algebra with generators $T_1,\dots,T_{n-1}$ and the quadratic, braid and far-commutation relations, and $\{T_w:w\in S_n\}$ is a $\Lambda$-basis ([[def-markov-trace-on-the-type-a-hecke-tower]], [[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]).

[F2] For $w\in S_n$ and $1\le i\le n-1$, $T_wT_i=T_{ws_i}$ if $\ell(ws_i)=\ell(w)+1$, and $T_wT_i=(v-1)T_w+v\,T_{ws_i}$ if $\ell(ws_i)=\ell(w)-1$; $T_w$ is the product along a reduced word ([[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]).

[F3] For permutations, word length equals inversion length, $\ell(ws_i)=\ell(w)\pm1$ with the minus sign exactly when $w(i)>w(i+1)$, and a product of two reduced words is reduced exactly when lengths add ([[lem-finite-weyl-strong-exchange-and-deletion]], [[def-weyl-group-and-length-for-finite-gl-n]], [[thm-the-symmetric-group-has-the-coxeter-presentation]], [[def-symmetric-group]]).

[F4] The free left $H(n)$-module on the finite set $\{T_{w^{(0)}},\dots,T_{w^{(n)}}\}$ consists of the unique finite sums $\sum_ix_iT_{w^{(i)}}$ with $x_i\in H(n)$ ([[def-free-module-on-a-set-and-standard-basis]]); a basis is a linearly independent generating set.

[F5] The tensor product imposes additivity in both variables and the balancing relation $xh\otimes y=x\otimes hy$ for $h\in H(n-1)$ ([[def-tensor-product-of-modules-by-generators-and-relations]], [[thm-universal-property-of-module-tensor-products]]). Here the commuting outer left and right $H(n)$-actions descend to the tensor product. The generators of $H(n-1)$ are $T_1,\ldots,T_{n-2}$, all commuting with $T_n$ by [F1].

## Proof

1.1 **Coset representatives.** For $0\le i\le n$ the permutation $w^{(i)}=s_ns_{n-1}\cdots s_{n-i+1}$ has length $i$ and satisfies $w^{(i)}(n+1)=n$ for $i\ge1$, while $w^{(0)}=\mathrm{id}$ fixes $n+1$; equivalently $w^{(i)-1}(n+1)=n-i+1$. Since two elements of $S_{n+1}$ lie in the same left coset of $S_n$ exactly when their inverses send $n+1$ to the same point, the $w^{(i)}$ form a complete set of left coset representatives: $S_{n+1}=\bigsqcup_{i=0}^{n}S_nw^{(i)}$. [F3, given]

2.1 **Length additivity.** Every $v\in S_n$ satisfies $\ell(vw^{(i)})=\ell(v)+i$. Indeed $w^{(i)}=w^{(i-1)}s_{n-i+1}$ and $w^{(i-1)}(n-i+1)=n-i+1<n+1=w^{(i-1)}(n-i+2)$. For $v\in S_n$, $v$ fixes $n+1$ and maps $\{1,\dots,n\}$ to itself, so $(vw^{(i-1)})(n-i+1)=v(n-i+1)\le n<n+1=v(n+1)=(vw^{(i-1)})(n-i+2)$. The ascent criterion in [F3] therefore gives $\ell(vw^{(i)})=\ell(vw^{(i-1)})+1$. Induction on $i$ yields $\ell(vw^{(i)})=\ell(v)+i$, and in particular $\ell(w^{(i)})=i$. Length-additive products of reduced words are reduced, so [F2] gives $T_vT_{w^{(i)}}=T_{vw^{(i)}}$. Taking inverses also gives $\ell((w^{(i)})^{-1}v)=i+\ell(v)$ and $T_{(w^{(i)})^{-1}}T_v=T_{(w^{(i)})^{-1}v}$ for every $v\in S_n$. [F2, F3, step 1.1]

3.1 **The module bases.** By step 1.1 and step 2.1, the elements $vw^{(i)}$, $v\in S_n$, $0\le i\le n$, are exactly the elements of $S_{n+1}$, each occurring once. Hence $\{T_{vw^{(i)}}\}$ is the standard $\Lambda$-basis of $H(n+1)$ by [F1], and $T_{vw^{(i)}}=T_vT_{w^{(i)}}$. Regrouping by $i$ proves part (1). For the right module, invert the left-coset decomposition $S_{n+1}=\bigsqcup_i S_nw^{(i)}$ to obtain $S_{n+1}=\bigsqcup_i (w^{(i)})^{-1}S_n$. The length-additive formulas of step 2.1 show that the resulting standard-basis elements are $T_{(w^{(i)})^{-1}}T_v$ for $v\in S_n$, each exactly once; regrouping by $i$ proves the stated right-module basis. [F1, F4, step 1.1, step 2.1]

4.1 **The sub-bimodule and the tensor decomposition.** For $i\ge1$, the reduced word $w^{(i)}=s_n s_{n-1}\cdots s_{n-i+1}$ begins with $s_n$, so $T_{w^{(i)}}\in T_nH(n)$ and $H(n)T_{w^{(i)}}\subseteq H(n)T_nH(n)$. This proves $\bigoplus_{i=1}^nH(n)T_{w^{(i)}}\subseteq H(n)T_nH(n)$. Conversely, for every $v\in S_n$, $\ell(s_nv)=\ell(v)+1$: indeed $\ell(s_nv)=\ell(v^{-1}s_n)$ by invariance of length under inversion, and $v^{-1}\in S_n$ fixes $n+1$, so right multiplication by $s_n$ is an ascent. Thus $T_nT_v=T_{s_nv}$ by concatenating reduced words. The permutation $s_nv$ does not fix $n+1$, since $(s_nv)(n+1)=n$; hence in the left-coset decomposition of step 1.1 it belongs to a coset $S_nw^{(i)}$ with $i\ge1$. By step 2.1, $T_{s_nv}=T_aT_{w^{(i)}}$ for some $a\in S_n$. Since the $T_v$ form a $\Lambda$-basis of $H(n)$ by [F1], this shows $T_nH(n)\subseteq\bigoplus_{i=1}^nH(n)T_{w^{(i)}}$, and left multiplication by $H(n)$ gives the reverse inclusion for the generated sub-bimodule. Therefore $H(n)T_nH(n)=\bigoplus_{i=1}^nH(n)T_{w^{(i)}}$. Thus step 3.1 gives $H(n+1)=H(n)\oplus H(n)T_nH(n)$ as $H(n)$-bimodules. [F1, step 1.1, step 2.1, step 3.1]

5.1 **The tensor isomorphism over $\Lambda$.** For $0\le j\le n-1$ put $b_j=T_{n-1}T_{n-2}\cdots T_{n-j}$, with $b_0=1$. Applying part (1), already proved in step 3.1, at level $n-1$ gives $H(n)=\bigoplus_j H(n-1)b_j$ as a left module; for $n=1$ this is simply $H(1)=H(0)=\Lambda$. Consequently every tensor has a unique form $\sum_j a_j\otimes b_j$, $a_j\in H(n)$. Explicitly, if $y=\sum_j h_jb_j$, balancing sends $x\otimes y$ to the coefficient tuple $(xh_j)_j$; this is additive and balanced, and is inverse to $(a_j)_j\mapsto\sum_j a_j\otimes b_j$. By [F5], $\mu(x\otimes y)=xT_ny$ is well defined and an $H(n)$-bimodule map. It sends $a_j\otimes b_j$ to $a_jT_{w^{(j+1)}}$. These form the unique left-module coordinates of $H(n)T_nH(n)$ from step 4.1, so $\mu$ is bijective. This proves part (3). [F1, F5, step 3.1, step 4.1, algebra] ∎
