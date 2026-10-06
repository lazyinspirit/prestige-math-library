---
id: thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence
kind: theorem
title: "The Rouquier complex is well defined up to canonical homotopy equivalence"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
deps: [thm-rouquier-complexes-form-a-coherent-braid-group-action, def-rouquier-complex-of-a-braid-word, lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps, lem-rouquier-normalized-comparison-isomorphisms-are-transitive]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Raphaël Rouquier, Categorification of the braid groups, arXiv:math/0409593v1 (30 September 2004), §3 \"The 2-braid group\""
      url: "https://arxiv.org/pdf/math/0409593"
      locator: "Theorem 3.5 and §3.3.1, arXiv pp. 10-11"
    - title: "Eugene Gorsky, Oscar Kivinen, José Simental, Algebra and geometry of link homology: Lecture Notes from the IHES 2021 Summer School, Bull. London Math. Soc. 55 (2023) 537-591, §3.1"
      url: "https://arxiv.org/pdf/2108.10356"
      locator: "Theorem 3.10 and the paragraph defining $T_\\beta$, printed pp. 544-545"
verification:
  precheck: pass
---

## Statement

Let $t,u$ be signed words for the same braid $v$. Then the normalized map
$$\gamma_{t,u}\colon F(t)\longrightarrow F(u)$$
of [[lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps]]
is a canonical homotopy equivalence, natural with respect to the multiplication
maps: for every other braid $v'$ with chosen words $t',u'$, the diagrams
comparing $F(t)\otimes_RF(t')$ with $F(u)\otimes_RF(u')$ commute up to the
canonical associativity isomorphisms, and $\gamma_{t,u}$ is the unique homotopy
class with the prescribed derived image $c_{t,u}$. Consequently the object
$G_v$ of [[thm-rouquier-complexes-form-a-coherent-braid-group-action]] is
independent of the chosen representative up to canonical homotopy equivalence,
and the notation $F(\beta)$ for the Rouquier complex of a braid element is well
defined up to canonical isomorphism in $K^b(R^e\text{-grmod})$; this is an
isomorphism statement in the homotopy category, not an equality of complexes.

## Facts & Assumptions

**Given:** Signed words $t,u$ for the same braid $v$, words $t',u'$ for a braid $v'$, and the normalized maps of [[lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps]].

[F1] *Uniqueness and inverses.* $\operatorname{Hom}_{K^b}(F(t),F(u))$ is one-dimensional in degree $0$, $\gamma_{t,u}$ is its unique element with derived image $c_{t,u}$, $\gamma_{t,t}=\mathrm{id}$ and $\gamma_{u,t}\gamma_{t,u}=\mathrm{id}$. ([[lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps]], and the transitivity of the same system)

[F2] *The coherent action.* The choices $G_v=F(t(v))$ and the normalized compositors $m_{v,w}$ assemble into a coherent action; in particular the composite of $m$'s is associative and unital up to the canonical maps. ([[thm-rouquier-complexes-form-a-coherent-braid-group-action]])

## Proof

**Proof technique:** direct.

1.1 By [F1] $\gamma_{t,u}$ is the unique degree-zero class with derived image $c_{t,u}$ and $\gamma_{u,t}$ is its two-sided homotopy inverse, so $\gamma_{t,u}$ is a canonical homotopy equivalence. [F1]

2.1 Naturality: the composite $F(t)\otimes_RF(t')\to F(u)\otimes_RF(u')$ given by $\gamma_{t,u}\otimes\gamma_{t',u'}$ and the composite given by the compositors and the associator both lie in $\operatorname{Hom}_{K^b}$ of one-dimensional degree-zero spaces, and their derived images are the same graph multiplication; by uniqueness they agree up to the canonical associativity isomorphism of [F2]. [F1, F2, step 1.1]

3.1 The independence of the representative: replacing the word $t(v)$ by another word changes $G_v$ by $\gamma_{t,u}$, a homotopy equivalence, and these comparisons are compatible with the compositors by step 2.1, so the object is well defined up to canonical isomorphism in $K^b$. [F2, step 2.1] ∎

## Remarks

The statement is an isomorphism statement: $F(t)$ and $F(u)$ are generally not
equal complexes, and the canonical comparison depends on the two words. No
choice principle is used: the words are chosen, and the comparisons are then
unique in internal degree $0$. This is Rouquier's well-definedness statement
underlying the construction of $G_v$; the coherent-action theorem is the
finite form of the same statement.
