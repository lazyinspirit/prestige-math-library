---
id: thm-faltings-finite-extensions-unramified-outside-bounded-set
kind: theorem
title: Finitely many bounded-degree extensions unramified outside a finite set
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
- def-axiom-of-choice
- def-countable-choice
- def-number-field
- thm-hermite-minkowski-finiteness
- lem-faltings-local-discriminant-exponent-bounded-for-bounded-degree
- thm-relative-discriminant-ideal-is-nonzero-integral-and-transitive
- lem-number-field-completions-as-local-polynomial-factors
- lem-number-field-relative-discriminant-local-exponent
- thm-primitive-element-theorem-for-finite-separable-extensions
- thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Faltings–Wüstholz, *Rational Points*, Chapter V, Theorem 2.6
    url: https://yhzhumath.github.io/Mordell2024/RP.pdf
    locator: Printed pp. 160–161; bounded-degree extensions unramified outside a fixed
      finite set.
verification:
  precheck: pending
axiom_use: AC and Countable Choice are retained literally. AC supplies completion,
  integer-ring/discriminant and Hermite contexts; the new finite characteristic-zero
  local bound is proved in ZF.
---

## Statement

Assume AC and Countable Choice. Let $K$ be a number field, $S$ a finite set of finite places of $K$, and $D\ge1$ an integer. There are only finitely many $K$-isomorphism classes of finite extensions $L/K$ with $[L:K]\le D$ that are unramified at every finite place outside $S$.

## Statement references

[[thm-hermite-minkowski-finiteness]]

[Faltings 1983, Lemma 4, printed p. 357](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf)

[Faltings–Wüstholz, *Rational Points*, Chapter V, Theorem 2.6](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** Exactly AC and Countable Choice, the number field $K$, finite set $S$ of finite places, and integer $D\ge1$ in the Statement.

[A1] AC and CC are retained literally ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] The complete local discriminant proof supplies $C(F,D)=N-1+Nv_F(N!)$, where $N=\lfloor D\rfloor$, for every real $D\ge1$ and finite extension $F/\mathbb Q_p$ and all finite extensions of degree at most $D$, and proves exponent zero for an unramified extension; these are the explicit conclusions of its steps 12.1–13.1 ([[lem-faltings-local-discriminant-exponent-bounded-for-bounded-degree]]).

[F2] Relative discriminants are nonzero integral ideals and $|d_L|=|d_K|^{[L:K]}N_{K/\mathbb Q}\mathfrak d_{L/K}$ under AC ([[thm-relative-discriminant-ideal-is-nonzero-integral-and-transitive]]). Its actual complete lattice/embedding proof, rather than its proof-provenance tag, is the required supplier.

[F3] Completion gives the product of local extensions with total degree $[L:K]$ and the sum of the local traces ([[lem-number-field-completions-as-local-polynomial-factors]]).

[F4] The local-to-global discriminant proof constructs the integral completion and proves in its steps 2.1 and 3.1 that the local trace-Gram exponent equals $f_wd_w$ by a finite DVR Gram/index computation. Its theorem consequently identifies the global exponent with the sum of local trace-discriminant exponents; this substantive bridge is not assumed from the definition of a different ([[lem-number-field-relative-discriminant-local-exponent]]).

[F5] Under AC, fixed absolute degree and bounded absolute discriminant leave finitely many number fields up to $\mathbb Q$-isomorphism ([[thm-hermite-minkowski-finiteness]]).

[F6] A finite separable extension is simple, and its embeddings are determined by distinct roots of a minimal polynomial ([[thm-primitive-element-theorem-for-finite-separable-extensions]], [[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]).

[F7] The base field is finite over $\mathbb Q$ ([[def-number-field]]).

## Proof

**Proof technique:** direct.

1.1 Fix $L/K$ of degree $n\le D$ in the target family and a finite place $v$. The product [F3] has finitely many local factors $L_w/K_v$ whose positive degrees sum to $n$, so their number is at most $D$ and each degree is at most $D$. The integral-completion and Gram/index bridge [F4] gives $$ v(\mathfrak d_{L/K})=\sum_{w\mid v}\delta(L_w/K_v). $$ For $v\notin S$, each factor is unramified and [F1] makes every summand zero. For $v\in S$, each is at most $C(K_v,D)$, so $v(\mathfrak d_{L/K})\le D C(K_v,D)$. The local proof also yields the sharper estimate $n-1+n v_{K_v}(n!)$: writing $n_w=e_wf_w$, its bound on a summand is $n_w-f_w+n_w v_{K_v}(e_w)$; sum, use $\sum n_w=n$, $\sum f_w\ge1$, and $e_w\le n$ so $v_{K_v}(e_w)\le v_{K_v}(n!)$. This calculation uses the actual local proof, not local classification. [A1, F1, F3, F4, given, algebra]

2.1 Put $B_v=D C(K_v,D)$ for $v\in S$ and $X=\prod_{v\in S}N(v)^{B_v}$, taking the empty product to be $1$. Integrality and the support/exponent bounds of step 1.1 give $N_{K/\mathbb Q}\mathfrak d_{L/K}\le X$. By [F2], $$ |d_L|=|d_K|^nN_{K/\mathbb Q}\mathfrak d_{L/K}\le |d_K|^D X, $$ since $|d_K|$ is a positive integer. Thus the absolute discriminant is bounded independently of $L$. [F2, step 1.1, given, algebra]

3.1 For each of the finitely many degrees $1\le n\le D$, [F5] applied to degree $n[K:\mathbb Q]$ and an integer upper bound for $|d_K|^D X$ leaves finitely many underlying $\mathbb Q$-isomorphism classes. Choose representatives $E_1,\ldots,E_r$ of this finite list. By [F6], choose a primitive element $\theta$ of $K/\mathbb Q$. An embedding $K\hookrightarrow E_i$ is determined by the image of $\theta$, a root in $E_i$ of its fixed minimal polynomial; there are at most $[K:\mathbb Q]$ possibilities. Each $K$-extension in the target family transports along a $\mathbb Q$-isomorphism to one of the finitely many pairs $(E_i,K\hookrightarrow E_i)$. Conversely such a pair determines one $K$-extension up to $K$-isomorphism, so the finite pairs surject onto the target classes. This is finite selection, not a choice of isomorphisms for every member of an infinite family. Taking the finite union over $n$ proves the claim. When $D=1$ the only class is $K$, and $S=\varnothing$ is already covered by $X=1$. [A1, F5, F6, F7, step 2.1, given, algebra] ∎
