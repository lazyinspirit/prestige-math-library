---
id: lem-adjudicate-1ef158934564-singular-sphere-comparison
kind: lemma
title: Singular sphere classes and ordered suspension
status: draft
domain: mathematics
deps:
  - thm-author-e0b0bf18ed2b-singular-realization-input
dependency_roles:
  thm-author-e0b0bf18ed2b-singular-realization-input: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Kerodon, simplicial homotopy groups
      url: https://kerodon.net/tag/00VJ
      locator: Construction 3.2.2.4, Notation 3.2.2.5, Example 3.2.2.7; Theorem 3.2.2.10
      statement: Simplicial homotopy groups of a singular complex identify with
        topological sphere classes, with their group structure.
      hypotheses: A based topological space and positive homotopy degree.
      reading_limits: Read these passages and the displayed group-law theorem; its
        horn-filling foundations were not reconstructed. Online version accessed
        2026-11-09.
    - title: Kerodon, exactness of realization
      url: https://kerodon.net/tag/013E
      locator: Corollary 3.6.2.2, full statement and displayed proof
      statement: Realization of a product is the topological product when one
        simplicial factor is finite.
      hypotheses: Simplicial sets with one finite factor.
      reading_limits: Read the corollary and proof, accessed 2026-11-09; the preceding
        triangulation theorem was imported.
dependency_level: 1
---

## Statement
Let $Z$ be a based space and put $K=\Delta^1/\partial\Delta^1$, with $|K|=S^1$ in a fixed orientation. For every $d\geq1$, adjunction identifies the simplicial group $\pi_d(\operatorname{Sing}Z)$ with $\pi_d(Z)$. On a finite pointed simplicial sphere $A$ a representative $a:A\to\operatorname{Sing}Z$ is sent to $\epsilon_Z|a|:|A|\to Z$. The comparison respects suspension with $K$ as the first smash factor and $S^1$ as the first topological factor.

## Facts & Assumptions
**Given:** $Z,K,d$ as stated and the ordinary simplicial homotopy groups of the Kan complex $\operatorname{Sing}Z$.

**Goal:** Compare actual sphere classes and their suspension representatives.

[F1] The pointed realization–singular adjunction identifies maps with their evaluated realizations. [[thm-author-e0b0bf18ed2b-singular-realization-input]]

[F2] Kerodon Construction 3.2.2.4, Notation 3.2.2.5, Example 3.2.2.7 and Theorem 3.2.2.10 give the sphere-class convention and group law. Corollary 3.6.2.2 identifies realization of a product with a finite simplicial factor with the product. These precise standard facts are imported at the recorded locators.

## Proof
1.1 Apply [F1] to $A=\Delta^d/\partial\Delta^d$. A pointed simplicial map corresponds exactly to a continuous pointed map from $|A|=S^d$. Relative homotopies correspond as well: a simplicial homotopy uses $\Delta^1\times A$, whose realization is $[0,1]\times|A|$ by [F2], with the basepoint cylinder collapsed in the pointed version. Thus adjunction induces a bijection of pointed sphere classes. The group identification is the one of [F2]; its multiplication is the usual concatenation of sphere representatives under this correspondence. [F1, F2, construct]

2.1 The same adjunction argument applies to finite pointed sphere models, including iterated smash powers of $K$. Realization preserves quotients and, by [F2], products with $K$, hence $|K\wedge A|\cong S^1\wedge|A|$. For a simplicial structure map adjoint to $S^1\wedge|\operatorname{Sing}Z|\xrightarrow{1\wedge\epsilon_Z}S^1\wedge Z\xrightarrow{\sigma}Z'$, evaluation of the suspension of $a$ is exactly $\sigma(1\wedge\epsilon_Z|a|)$. The first factor remains the first factor. This proves the claimed compatibility on actual representatives and on their homotopy classes. [F1, F2, step 1.1] ∎
