---
id: def-the-artin-representation-on-a-free-group
kind: definition
title: "The Artin representation on a free group"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 5
deps: [def-braid-group-by-the-artin-presentation, lem-artin-automorphisms-satisfy-the-braid-relations, thm-von-dyck]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-15.md"
      - "research/frontier-38-owner-30-alpha-batch-15-5a.md"
      - "research/frontier-38-owner-30-step5-hash-15-post-5a.json"
    content_sha256: "109f0b46c2ff6fee8772508061040689dfa86a4024f1d90345bf884c16b44e4e"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, printed pp. 9-10 (rho is well defined on the Artin presentation)"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Emil Artin, Theory of Braids, Annals of Mathematics 48 (1947), pp. 101-126, relations (18)-(19) and Theorem 16, printed p. 115"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf"
---

## Definition

By [[lem-artin-automorphisms-satisfy-the-braid-relations]] the assignment
$\sigma_i\mapsto\rho(\sigma_i)$ satisfies the defining relations of the
presented braid group $B_n$ of
[[def-braid-group-by-the-artin-presentation]], so von Dyck's theorem
[[thm-von-dyck]] yields a unique homomorphism
$$\rho:B_n\longrightarrow\operatorname{Aut}(F_n).$$
This is the **Artin representation**; it is the frozen convention for every
later statement of the page.

**Uniqueness and effectivity.** The homomorphism is unique because it is
prescribed on the generating set $\{\sigma_1,\dots,\sigma_{n-1}\}$, and it is
computed on a braid word by composing the finitely many automorphisms
$\rho(\sigma_i)^{\pm1}$ attached to its letters, as frozen in
[[def-artin-automorphisms-of-the-free-group]]. No choice principle and no
geometric input are used in the construction; von Dyck's theorem
[[thm-von-dyck]] supplies existence and uniqueness of the extension.

## Remarks

- For $n\le1$ the group $B_n$ is trivial, so $\rho$ is the unique
  homomorphism from the trivial group and the assertion is vacuous.
- The construction uses the abstract presentation only; that the abstract
  group is the mapping class group of the punctured disk, and that its
  generator acts by the frozen Nielsen substitutions, is proved separately in
  `prop-the-geometric-action-on-meridians-is-the-artin-representation`.
