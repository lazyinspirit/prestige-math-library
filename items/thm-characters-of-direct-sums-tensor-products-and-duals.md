---
id: thm-characters-of-direct-sums-tensor-products-and-duals
kind: theorem
title: "Characters add on direct sums, multiply on tensor products, and conjugate on duals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-character-of-a-complex-representation, def-dual-complex-representation, def-tensor-product-of-complex-representations, prop-basic-value-properties-of-a-complex-character, prop-trace-is-linear, thm-tensor-product-basis-from-bases]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Proposition 3.1.3"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.4"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Statement

Let $G$ be a finite group and let $V$ and $W$ be finite-dimensional complex
representations of $G$. Then, for every $g\in G$:

1. $\chi_{V\oplus W}(g)=\chi_V(g)+\chi_W(g)$;
2. $\chi_{V\otimes W}(g)=\chi_V(g)\,\chi_W(g)$;
3. $\chi_{V^{*}}(g)=\overline{\chi_V(g)}$.

## Facts & Assumptions

**Given:** Finite-dimensional complex representations $V$, $W$ of a finite group $G$, and an element $g\in G$.

[F1] The character is $\chi(g)=\operatorname{tr}\rho(g)$ ([[def-character-of-a-complex-representation]]).

[F2] The dual action is $(g\cdot f)(v)=f(g^{-1}\cdot v)$ ([[def-dual-complex-representation]]).

[F3] The tensor-product action is $g\cdot(v\otimes w)=(g\cdot v)\otimes(g\cdot w)$ ([[def-tensor-product-of-complex-representations]]).

[A1] In a basis made of a basis of $V$ followed by a basis of $W$, the matrix of the direct-sum action on $V\oplus W$ is block diagonal with the two action matrices on its diagonal, so its trace is the sum of the two block traces.

[A2] Trace is linear, in particular additive, on the space of square matrices ([[prop-trace-is-linear]]).

[A3] A basis of $V$ and a basis of $W$ give the basis $(v_i\otimes w_j)_{i,j}$ of the tensor product ([[thm-tensor-product-basis-from-bases]]).

[A4] For a complex character, $\chi(g^{-1})=\overline{\chi(g)}$ ([[prop-basic-value-properties-of-a-complex-character]]).

## Proof

**Proof technique:** direct.

1.1 Writing the direct-sum action in the concatenated basis of [A1], its trace is the sum of the traces of the two diagonal blocks, so $\chi_{V\oplus W}(g)=\operatorname{tr}(\rho_V(g)\oplus\rho_W(g)) =\operatorname{tr}\rho_V(g)+\operatorname{tr}\rho_W(g) =\chi_V(g)+\chi_W(g)$ by [F1]. This is claim 1. [F1, A1, A2, given]

1.2 By [F3] and [A3], the matrix of the tensor-product action in the basis $(v_i\otimes w_j)$ has entry $\rho_{V}(g)_{ii'}\,\rho_{W}(g)_{jj'}$ at the position $(i,j)\mapsto(i',j')$, because $g\cdot(v_{i'}\otimes w_{j'})=\sum_{i,j}\rho_V(g)_{ii'}v_i\otimes \rho_W(g)_{jj'}w_j$. [F3, A3, given]

1.3 With dual bases $(v_i)$ of $V$ and $(v_i^{*})$ of $V^{*}$, the matrix of the dual action of [F2] is the transpose of the matrix of $\rho_V(g^{-1})$: writing $g^{-1}\cdot v_j=\sum_i\rho_V(g^{-1})_{ij}v_i$ gives $(g\cdot v_i^{*})(v_j)=v_i^{*}(g^{-1}\cdot v_j)=\rho_V(g^{-1})_{ij}$. [F2, given]

2.1 Its trace is the sum of its diagonal entries: $\sum_{i,j}\rho_V(g)_{ii}\rho_W(g)_{jj} =\bigl(\sum_i\rho_V(g)_{ii}\bigr)\bigl(\sum_j\rho_W(g)_{jj}\bigr)$. By [F1] the two factors are $\chi_V(g)$ and $\chi_W(g)$, so $\chi_{V\otimes W}(g)=\chi_V(g)\chi_W(g)$, which is claim 2. [F1, step 1.2, algebra]

3.1 A matrix and its transpose have the same diagonal entries, hence the same trace, so $\chi_{V^{*}}(g)=\operatorname{tr}\rho_V(g^{-1})=\chi_V(g^{-1})$. By [A4], $\chi_V(g^{-1})=\overline{\chi_V(g)}$, which is claim 3. [F1, A4, step 1.3, algebra] ∎
