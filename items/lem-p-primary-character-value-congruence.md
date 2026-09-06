---
id: lem-p-primary-character-value-congruence
kind: lemma
title: $p$-primary congruence for integer-valued cyclotomic character combinations
status: draft
origin: pipeline
deps: [def-p-elementary-and-p-hyperelementary-finite-groups, def-virtual-character-and-character-ring-of-a-finite-group, thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: János Kramár, Artin's and Brauer's Theorems on Induced Characters, Lemma 4
      url: https://www.math.toronto.edu/murnaghan/courses/mat445/artinbrauer.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Let $A=\mathbb Z[\zeta_{|G|}]$, and let $A R(G)$ denote the $A$-span of the complex characters of $G$. If $\chi\in A R(G)$ is integer-valued, $g\in G$, and $g=g_pg_{p'}$ is its commuting $p$-part/$p'$-part decomposition, then

$$\chi(g)\equiv\chi(g_{p'})\pmod p.$$

## Facts & Assumptions

[F1] The cited prerequisite is [[thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]].

## Proof

**Given:** $|g|=p^n l$ with $(p,l)=1$, and $g_{p'}=g^{p^n a}$ for $ap^n\equiv1\pmod l$.

1.1 On the cyclic group $\langle g\rangle$, every irreducible complex character is linear. For each such character $\psi$, the $p^n$-th powers of $\psi(g)$ and $\psi(g_{p'})$ agree, since $g^{p^n}=g_{p'}^{p^n}$. [F1, given]

2.1 Write the restriction as $\sum_i a_i\psi_i$ with $a_i\in A$ and the $\psi_i$ linear. In $A/pA$, the freshman's dream and step 1.1 give the following congruence. [step 1.1, algebra]

$$\chi(g)^{p^n}-\chi(g_{p'})^{p^n} \equiv\sum_i a_i^{p^n} (\psi_i(g)^{p^n}-\psi_i(g_{p'})^{p^n})=0.$$

3.1 Both character values are integers.  The power basis $1,\zeta_{|G|},\ldots,\zeta_{|G|}^{\varphi(|G|)-1}$ makes $\mathbb Z\cdot1$ a direct summand of $A$, so $pA\cap\mathbb Z=p\mathbb Z$. Fermat's congruence then gives $\chi(g)\equiv\chi(g)^{p^n}\equiv \chi(g_{p'})^{p^n}\equiv\chi(g_{p'})\pmod p$. $\square$ [step 2.1, algebra]
