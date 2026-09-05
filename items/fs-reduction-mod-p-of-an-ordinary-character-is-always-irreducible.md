---
id: fs-reduction-mod-p-of-an-ordinary-character-is-always-irreducible
kind: false-statement
title: "FALSE: reduction mod p of an ordinary irreducible is always irreducible"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-decomposition-map-from-ordinary-to-modular-grothendieck-groups, def-decomposition-numbers-and-decomposition-matrix]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
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

1.1 By the given realization, the ordinary character afforded by $K\otimes_{\mathcal O}L$ is irreducible. [given]

2.1 By [F1], reducing modulo the maximal ideal gives the $kS_3$-module $$\overline L=L/(1-\zeta_3)L.$$ The nonzero vector $(1,1,1)\in\overline L$ is fixed by every permutation matrix and belongs to $\overline L$ because it is the reduction of $(1,1,-2)\in L$. Hence $\overline L$ has a nontrivial proper invariant line and is reducible. [F1, step 1.1, algebra]

3.1 Thus an ordinary irreducible representation can have reducible reduction modulo $p$. In the decomposition process recorded by [F2], this reduction is therefore not irreducible. The statement is false. [F2, step 2.1] ∎
