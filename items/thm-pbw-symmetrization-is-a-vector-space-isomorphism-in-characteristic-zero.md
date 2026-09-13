---
id: thm-pbw-symmetrization-is-a-vector-space-isomorphism-in-characteristic-zero
kind: theorem
title: PBW symmetrization in characteristic zero
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-poincare-birkhoff-witt, lem-field-is-a-commutative-ring, def-ring-characteristic, def-factorial-and-falling-factorial, lem-finite-sum-reindexing-and-fubini]
landmark: false
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, Corollary 13.7, printed p. 75"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, Corollary 5.15, printed p. 75"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Statement

Suppose $\operatorname{char}k=0$ and a basis of $\mathfrak g$ equipped with a
total order is supplied. The
linear map defined on homogeneous products by

$$\operatorname{sym}(v_1\cdots v_n)=\frac1{n!}\sum_{\pi\in S_n}\iota_{\mathfrak g}(v_{\pi(1)})\cdots\iota_{\mathfrak g}(v_{\pi(n)})$$

is a filtered vector-space isomorphism
$\operatorname{sym}:S(\mathfrak g)\to U(\mathfrak g)$. In general it is not an
algebra homomorphism.

## Facts & Assumptions

**Given:** A characteristic-zero field $k$, a Lie algebra $\mathfrak g$ over
$k$, and a specified totally ordered basis of $\mathfrak g$.

[L1] In a characteristic-zero field, every positive integer and hence every
$n!$ is nonzero and invertible
([[def-ring-characteristic]], [[lem-field-is-a-commutative-ring]],
[[def-factorial-and-falling-factorial]]).

[L2] Finite sums may be reindexed bijectively
([[lem-finite-sum-reindexing-and-fubini]]).

[L3] PBW identifies the symbol map
$\sigma:S(\mathfrak g)\to\operatorname{gr}U(\mathfrak g)$ as a graded-algebra
isomorphism ([[thm-poincare-birkhoff-witt]]).

## Proof

**Proof technique:** induction on filtration degree after constructing the map.

1.1 By [L1] the coefficient $1/n!$ exists. Reindexing the finite sum by $\pi\mapsto\pi\tau$ for any $\tau\in S_n$ shows by [L2] that the displayed multilinear expression is invariant under permuting the inputs, so it descends to a linear map on $S^n(\mathfrak g)$; for $n=0$ it sends $1$ to $1$. Taking the graded direct sum defines $\operatorname{sym}$, and degree $n$ maps into $F_nU(\mathfrak g)$. [L1, L2, construct]

1.2 In degree zero, $\operatorname{sym}:S^0(\mathfrak g)=k\to F_0U(\mathfrak g)$ has associated-graded map $\sigma_0$, hence is bijective by [L3]. [base, L3]

1.3 Assume that every element of $F_{n-1}U(\mathfrak g)$ has a unique preimage in $\bigoplus_{r<n}S^r(\mathfrak g)$. [ih, assume-hyp]

2.1 In $F_n/F_{n-1}$ all reordered products of $v_1,\ldots,v_n$ have the same symbol, because interchanging adjacent factors changes a word by a bracket term of degree $n-1$. Thus the leading symbol of $\operatorname{sym}(v_1\cdots v_n)$ is the average of $n!$ identical symbols, namely $\sigma(v_1\cdots v_n)$. Hence $\operatorname{gr}(\operatorname{sym})=\sigma$. [step 1.1, L1, L3, algebra]

3.1 Given $u\in F_n$, use the surjectivity of $\sigma_n$ and step 2.1 to choose $s_n\in S^n(\mathfrak g)$ whose symmetrization has the same class as $u$ in $F_n/F_{n-1}$. Then $u-\operatorname{sym}(s_n)\in F_{n-1}$ and step 1.3 supplies a preimage, proving surjectivity through degree $n$. [step 2.1, step 1.3, L3, choose]

3.2 If $s=\sum_{r\leq n}s_r$ and $\operatorname{sym}(s)=0$, its top filtration class is $\sigma_n(s_n)$ by step 2.1, so $s_n=0$ by injectivity of [L3]. Descending in degree, or using the uniqueness clause in step 1.3, gives every $s_r=0$. Thus symmetrization is injective through degree $n$. [step 2.1, step 1.3, L3, algebra]

4.1 Steps 1.2–3.2 complete the filtration induction. Every element of either algebra has finite degree, so $\operatorname{sym}$ is a filtered vector-space isomorphism on the full direct sums. The proof asserts no multiplicativity. [step 1.2, step 3.1, step 3.2, discharge-induction: step 1.2] ∎
