---
id: lem-rational-isotropic-subspace-saturates-to-integral-metabolizer
kind: lemma
title: "A rational isotropic subspace saturates to an integral direct summand"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.2, Definition 2.5 and Theorem 2.6, printed p. 323"
    - title: "Charles Livingston and Allison N. Miller, The concordance genus of knots, II"
      url: "https://msp.org/agt/2009/9-1/agt-v9-n1-p06-p.pdf"
      locator: "§2, the definition of Witt-trivial integral Seifert matrices, printed p. 170"
---

## Statement

Let $H$ be a free abelian group of rank $2g$ and let $V:H\times H\to\mathbb Z$ be a bilinear form. Write $H_{\mathbb Q}=H\otimes_{\mathbb Z}\mathbb Q$ and extend $V$ $\mathbb Q$-bilinearly to $H_{\mathbb Q}$. If $L\subset H_{\mathbb Q}$ is a $\mathbb Q$-subspace of dimension $g$ and $V(x,y)=0$ for all $x,y\in L$, then $M=H\cap L$ is a rank-$g$ direct summand of $H$ and $V|_{M\times M}=0$.

## Statement references

[[def-metabolic-seifert-form-and-algebraic-knot-concordance|A metabolizer is a primitive rank-half direct summand on which the integral Seifert pairing vanishes]]

## Facts & Assumptions

**Given:** A finite-rank free abelian group $H$, an integral bilinear form $V$, and a $g$-dimensional rational isotropic subspace $L\subset H_{\mathbb Q}$, where $\operatorname{rank}H=2g$.

[A1] The displayed hypotheses are the complete input; no choice axiom is used.

## Proof

1.1 Choose a $\mathbb Q$-basis $v_1,\ldots,v_g$ of $L$. Clearing the finitely many denominators in the coordinates of each $v_i$ gives nonzero integer multiples $x_i\in H\cap L$. The $x_i$ remain $\mathbb Q$-linearly independent, so $M=H\cap L$ has rank at least $g$; it has rank at most $\dim_{\mathbb Q}L=g$. Hence $\operatorname{rank}M=g$. [given, A1, choose, algebra]

2.1 If $n\ne0$, $x\in H$, and $nx\in M$, then $nx\in L$ and therefore $x=n^{-1}(nx)\in L$ because $L$ is a $\mathbb Q$-subspace. Thus $x\in M$, so $M$ is saturated in $H$. [given, step 1.1, algebra]

3.1 We prove by induction on $r$ that every saturated subgroup $P\subset\mathbb Z^r$ is a direct summand. The cases $P=0$ and $P=\mathbb Z^r$ are immediate. Otherwise choose a nonzero $p\in P$, divide its coordinates by their greatest common divisor, and use saturation to see that the resulting primitive vector $e_1$ still lies in $P$. The Euclidean algorithm gives a unimodular change of basis carrying $e_1$ to the first standard basis vector, so write $\mathbb Z^r=\mathbb Ze_1\oplus H'$. Every $p'\in P$ has a unique form $ae_1+h'$ with $h'\in H'$, and $h'=p'-ae_1\in P\cap H'$. Therefore $P=\mathbb Ze_1\oplus(P\cap H')$. The subgroup $P\cap H'$ is saturated in $H'$; its rank is $\operatorname{rank}P-1$, since the projection of $P$ to $\mathbb Ze_1$ is onto. Induction makes $P\cap H'$ a direct summand of $H'$, hence $P$ a direct summand of $\mathbb Z^r$. [given, A1, step 2.1, induction, construct]

4.1 Apply step 3.1 to the saturated rank-$g$ subgroup $M\subset H\cong\mathbb Z^{2g}$ from step 2.1. It is a direct summand of $H$. [given, step 1.1, step 2.1, step 3.1]

5.1 Since $M\subset L$ and $V$ vanishes on $L\times L$, its restriction to $M\times M$ vanishes. Together with rank $g$ and the direct-summand conclusion of step 4.1, this proves the claim. [given, step 1.1, step 4.1, algebra] ∎

