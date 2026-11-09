---
id: lem-author-3cde9692a7e9-derived-chain-detection
kind: lemma
title: Local integral chains detect global natural maps into Chern targets
status: draft
domain: mathematics
deps:
  - lem-author-3cde9692a7e9-local-free-test
  - thm-author-d026a7b99ace-universal-chern-space
  - def-scheme-sites-and-sheafification
  - def-derived-sections-on-sites
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-3cde9692a7e9-local-free-test: mathematical-premise
  thm-author-d026a7b99ace-universal-chern-space: mathematical-premise
  def-scheme-sites-and-sheafification: mathematical-premise
  def-derived-sections-on-sites: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 20
---

## Statement
Assume the Axiom of Choice and the fixed compatible universe and site-size bounds of the supplied constructions.

Let $f:P\to Q$ be a map of pointed simplicial sheaves whose normalized integral chain map is a local quasi-isomorphism. For every coefficient complex $D$ with its derived Eilenberg target $K(D,n)$, precomposition gives an equivalence of derived mapping spaces into that target. In particular it is injective on homotopy classes. This applies to $j$ and $j\times j$ of the preceding lemma. Therefore identities of natural Chern maps on $\mathcal K$ or $\mathcal K\times\mathcal K$ may be detected after this local free-class comparison, including all descent morphisms and global cohomology classes.

## Facts & Assumptions

[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]] and the stated universe and site-size bounds. They are inherited from the selected local sheaf and derived-section models in [F2] at steps 1.1–2.1 and from the local free-class comparison in [F1] at step 3.1. The mapping-space argument is conditional on those supplied constructions.

[F1] [[lem-author-3cde9692a7e9-local-free-test]] gives local integral homology equivalences. The coefficient targets and local simplicial-sheaf model are those of [[thm-author-d026a7b99ace-universal-chern-space]], concretely the derived version of Asakura–Sato Definition5.1(2).

[F2] The free abelian sheaf/forgetful adjunction and normalized-chain/Dold–Kan adjunction identify maps into $K(D,n)$ with derived maps from normalized free integral chains into $D[n]$. Sheafification of abelian presheaves is exact; its compatible local/derived conventions are those of [[def-scheme-sites-and-sheafification]] and [[def-derived-sections-on-sites]].

## Proof
**Given:** $f$ as stated and any of the actual coefficient complexes. Assume Choice and the universe and site-size bounds in [A1].

**Goal:** Prove map-level detection rather than compare values of Picard/cohomology groups on affine opens.

1.1 Apply normalized free integral chains and then sheafification. Its cohomology sheaves are computed from the local homology groups, so the hypothesis makes the resulting chain map a quasi-isomorphism of complexes of sheaves. This is an equivalence in the derived category, not an assertion that the original spaces are locally weakly equivalent. [F1, F2, A1]

2.1 The derived adjunction in [F2] identifies $\operatorname{Map}(Q,K(D,n))\to\operatorname{Map}(P,K(D,n))$ with the map of derived Hom spaces obtained by precomposing with that chain equivalence. It is an equivalence, hence injective on $\pi_0$. The adjunction and chain map are natural in $P,Q,D$, so this proves an identity in the local sheaf homotopy category. Evaluating a homotopy between fibrant natural maps gives the corresponding homotopy on derived sections over $X$; it retains all gluing data. [F2, step 1.1]

3.1 Use step 2.1 for $j$ and $j\times j$ by [F1]. A Cartan difference is a map to one such abelian Eilenberg target, so its vanishing on the free-class test forces its vanishing as the global natural map. No generation of $K_0(X)$ by global vector bundles is used. [F1, step 1.1, step 2.1] ∎
