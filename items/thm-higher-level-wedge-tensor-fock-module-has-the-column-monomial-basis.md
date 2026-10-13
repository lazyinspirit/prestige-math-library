---
id: thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis
kind: theorem
title: "The column monomial basis of the higher-level Fock module"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 10
deps: [def-higher-level-wedge-tensor-fock-module,
       def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules,
       lem-tensor-products-of-integrable-weight-modules-are-integrable,
       thm-integrable-quantum-highest-weight-module-exists-and-is-unique,
       def-kashiwara-lattices-lambda-and-infinity,
       def-crystal-lattice-and-crystal-basis,
       def-tensor-product-of-crystals,
       thm-crystal-basis-tensor-product-rule,
       thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals]
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
    date: 2026-10-11
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Sections 2.1-2.2 and the proof of the monomial basis theorem (printed pp. 5-8, formulas (2.4)-(2.13)): quantum exterior powers, the semi-infinite wedge as a direct limit over $\\iota_k$, the monomial basis and $\\iota_k(M_A)=M_{A\\sqcup(k-1)^l}$; complete passage read."
    - title: "Jonathan Brundan, Dual canonical bases and Kazhdan-Lusztig polynomials, J. Algebra 306 (2006) 17-46 (complete 29-page arXiv v2 article)"
      url: "https://arxiv.org/pdf/math/0509700"
      locator: "Section 5, Theorems 7 and 11 and Corollary 12 (printed pp. 13-19): symmetric and exterior powers of the natural module with their monomial bases and crystal lattices; complete passage read."
---

## Statement

Work in the conventions of
[[def-higher-level-wedge-tensor-fock-module]] and
[[def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules]] with
source parameter $s$.

(1) For a finite interval $[k,r]$, the normally ordered wedges
$v_{i_1}\wedge\cdots\wedge v_{i_d}$, $i_1>\cdots>i_d$, $i_a\in[k,r]$, form an
integral basis of the fundamental wedge $\Lambda^d V$, where the wedge is the
antisymmetrized tensor word with coefficients $(-s)^{\ell(w)}$ over the
symmetric group; the span is primitive over $\mathbb Z[s^{\pm1}]$. This does
not assert that the antisymmetrizer embedding into the raw tensor power is based
in the library's lower $q_0$ chart.

(2) The column monomials $M_A$, $A\in\mathrm{Col}^\Lambda$, form a basis of the
higher-level Fock module $F(\Lambda)$ on every finite cut, with the weights
$\mathrm{wt}(A)$ of the Definition.

(3) Let a finite interval $[k,r]\subseteq I^+$ be a **cut** containing all
entries of a given monomial (upper cut), and $k-1<k$ a further lower residue;
the **lower-cut embedding** $\iota_k$ appends the common bottom entry $k-1$ to
each of the $l$ columns, $\iota_k(M_A)=M_{A\sqcup(k-1)^l}$. The embeddings are
injective, compatible with the monomial action, and their compatible direct
limit over shrinking lower cuts and growing upper cuts is the full bounded or
semi-infinite Fock module of the Definition.

(4) Every generator acts by finitely many box moves and shifts weight spaces;
each fixed-weight space of $F(\Lambda)$ is finite dimensional. A merely
lower-bounded infinite interval need not give finite-dimensional fundamental
factors; all finite-Cartan statements are applied on finite cuts.

## Facts & Assumptions

**Given:** A finite cut $[k,r]$ of the consecutive residue set $I^+$, a level $l$ and dominant weight $\Lambda=\Lambda_{m_1}+\cdots+\Lambda_{m_l}$ with $m_1\ge\cdots\ge m_l$, the fundamental wedge $\Lambda^dV$ of the natural module with basis $v_i$, and the column monomials $M_A$ of [[def-higher-level-wedge-tensor-fock-module]].

[F1] Dictionary and Fock conventions ([[def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules]], [[def-higher-level-wedge-tensor-fock-module]]): the source generators act by $D_av_b=s^{\delta_{ab}}v_b$, $E_av_b=\delta_{a+1,b}v_a$, $F_av_b=\delta_{a,b}v_{a+1}$; the fundamental factors are the integrable highest weight modules $V(\Lambda_{m_j})$ with highest weight vectors the ground wedges; weights are computed by $\mathrm{wt}(A)$.

[F2] Integrability and tensor products ([[lem-tensor-products-of-integrable-weight-modules-are-integrable]], [[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]]): integrable highest weight modules exist, are generated from their highest weight vectors by divided lowering powers, and tensor products of integrable modules are integrable.

[F3] Crystal and lattice suppliers ([[def-kashiwara-lattices-lambda-and-infinity]], [[def-crystal-lattice-and-crystal-basis]], [[def-tensor-product-of-crystals]], [[thm-crystal-basis-tensor-product-rule]], [[thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals]]): crystal bases, tensor rules and highest-weight decompositions in the library normalization.

## Proof

**Proof technique:** direct.

1.1 **The ordered-word lattice for one fundamental factor.** Define the exterior quotient by $v_a\otimes v_a=0$ and $v_b\otimes v_a=-s^{-1}v_a\otimes v_b$ for $b>a$. Thus sorting an ascending adjacent pair into descending order contributes $-s$, not a positive scalar. The coproduct sends a repeated-letter relation under $E_a$ or $F_a$ to the corresponding signed adjacent relation; on distinct letters the same two-term computation preserves that relation. Hence the quotient is a module. Sorting distinct letters has scalar $(-s)^{\ell(w)}$; commutation and braid moves preserve the number of inversions, and repeated-letter words vanish. The quotient therefore has one independent ordered generator for each distinct-letter orbit. [F1, algebra]

2.1 **The integral basis and primitive antisymmetrizer.** The quotient sorting relations have Laurent-unit coefficients and disjoint permutation orbits, giving a free ordered-word lattice. In the tensor lattice the alternating word of a descending tuple is the sum over permutations with coefficients $(-s)^{\ell(w)}$, with ordered coefficient one. Different tuples have disjoint supports; their span is a direct summand by taking the ordered coefficients and is therefore primitive. A coproduct replacement on the alternating sum cancels if it creates a repeated letter, and otherwise gives the alternating word of the replaced tuple with coefficient one; the two adjacent terms are exactly the cancellation checked in step 1.1. Thus sending an ordered quotient vector to its alternating word is an integral module isomorphism onto this span. No raw tensor-chart basedness is inferred. [F1, step 1.1, algebra]

3.1 **The wedge is the fundamental module with its own lattice, bar and crystal.** On ordered wedges the generators act by replacing a single entry: $E_av_b=\delta_{a+1,b}v_a$ and $F_av_b=\delta_{a,b}v_{a+1}$ on letters, extended multiplicatively to a wedge; an attempted replacement producing a repeated letter gives $0$. The top wedge is annihilated by all $E_a$ and is the highest weight vector; divided lowering powers reach every ordered wedge, so the wedge is generated as the integrable highest weight module $V(\Lambda_m)$ with highest weight $\Lambda_m=\sum$ of its ground letters, and the ordered-wedge lattice is its divided-power lattice with the induced bar involution and crystal chart. [F1, F2, F3, step 2.1, construct]

4.1 **The tensor basis.** The tensor product of fundamental factors has as integral basis the tensor products of their ordered-wedge bases, i.e. precisely the column monomials $M_A$ with one wedge per column; by [F2] the tensor product is integrable and its weight is the sum of the factor weights, which is $\mathrm{wt}(A)$ as computed in [[def-higher-level-wedge-tensor-fock-module]]. This proves (1) and (2) on a finite cut. [F1, F2, step 3.1, algebra]

5.1 **The lower-cut embeddings.** Appending the same entry $k-1$ below every column defines a linear map on the span of monomials; since the appended letters are smaller than every letter of the cut, the image is again a span of ordered wedges, so $\iota_k$ is injective and intertwines the common-root generator action: the appended letter is never moved by a generator whose residue lies in the cut, for the common root subalgebra. No assertion says the new boundary generator acts by zero: it may move the appended letter when the next letter is absent. The embeddings for decreasing cuts are compatible, and every semi-infinite tableau differs from the ground state in finitely many positions, hence belongs to the image of some lower cut and to some upper cut. [F1, step 4.1, construct]

6.1 **Direct limit and finiteness.** The compatible system of the maps of step 5.1 with upper cuts containing all entries of the monomials gives the full Fock module as a direct limit; generators act by finitely many box moves because each generator replaces one letter in one factor, hence shifts the weight by a root and changes only finitely many entries; a fixed weight fixes the multiset difference from the common ground tail, so only finitely many tableaux occur and the weight space is finite dimensional. All finite-Cartan suppliers of [F2], [F3] are applied on the finite cuts, where every module involved is finite dimensional; no finite-dimensionality is claimed for fundamental factors on a merely lower-bounded infinite interval. [F1, F2, F3, step 5.1] ∎
