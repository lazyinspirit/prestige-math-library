---
id: fs-reduction-mod-p-of-an-ordinary-character-is-always-irreducible
kind: false-statement
title: "FALSE: reduction mod p of an ordinary irreducible is always irreducible"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-decomposition-map-from-ordinary-to-modular-grothendieck-groups, def-decomposition-numbers-and-decomposition-matrix]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Statement

If $\chi$ is an ordinary irreducible character, then its reduction modulo $p$
is always irreducible.

## Facts & Assumptions

**Given:** A primitive cube root $\zeta_3$, the local cyclotomic triple $$(K,\mathcal O,k)=(\mathbb Q_3(\zeta_3),\mathbb Z_3[\zeta_3],\mathbb F_3),$$ and the standard $\mathcal O S_3$-lattice $$L=\{(a,b,c)\in\mathcal O^3:a+b+c=0\},$$ whose scalar extension to $K$ affords the ordinary standard irreducible representation of $S_3$.

[F1] Reduction modulo $p$ is recorded by the decomposition map ([[def-decomposition-map-from-ordinary-to-modular-grothendieck-groups]]).

[F2] Decomposition numbers describe the simple factors of that reduction ([[def-decomposition-numbers-and-decomposition-matrix]]).

## Refutation

**Proof technique:** direct.

1.1 The space $K\otimes_{\mathcal O}L$ is the two-dimensional sum-zero subspace of $K^3$. The cycle $(123)$ has distinct eigenlines there with eigenvalues $\zeta_3$ and $\zeta_3^2$ (for example, they are spanned by $(1,\zeta_3^2,\zeta_3)$ and $(1,\zeta_3,\zeta_3^2)$). A transposition conjugates the cycle to its inverse and swaps these eigenlines. Thus neither line is stable under $S_3$; a proper nonzero submodule of a two-dimensional representation would be a stable line, so this ordinary representation is irreducible. [given, algebra]

2.1 By [F1], reducing modulo the maximal ideal gives the $kS_3$-module $$\overline L=L/(1-\zeta_3)L.$$ Coordinate reduction identifies $\overline L$ with the two-dimensional sum-zero subspace of $k^3$: if all coordinates of a vector in $L$ are divisible by $1-\zeta_3$, dividing them by this element still gives a vector in $L$. The image of $(1,1,-2)\in L$ is the nonzero vector $(1,1,1)$ because $k=\mathbb F_3$. It is fixed by every permutation matrix, so its line is a nonzero proper invariant subspace of $\overline L$. Thus the reduction is reducible. [F1, step 1.1, algebra]

3.1 Thus an ordinary irreducible representation can have reducible reduction modulo $p$. In the decomposition process recorded by [F2], this reduction is therefore not irreducible. The statement is false. [F2, step 2.1] ∎
