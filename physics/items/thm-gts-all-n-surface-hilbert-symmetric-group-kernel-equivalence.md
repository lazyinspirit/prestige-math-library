---
id: thm-gts-all-n-surface-hilbert-symmetric-group-kernel-equivalence
kind: theorem
title: "All-n surface Hilbert symmetric-group kernel equivalence and norm-line compatibility"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - thm-gts-all-n-isospectral-hilbert-cohen-macaulay-and-finite-flat
  - lem-gts-isospectral-cm-implies-all-n-surface-kernel-equivalence
  - def-axiom-of-choice
  - def-dependent-choice
dependency_roles:
  thm-gts-all-n-isospectral-hilbert-cohen-macaulay-and-finite-flat: mathematical-premise
  lem-gts-isospectral-cm-implies-all-n-surface-kernel-equivalence: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Mark Haiman, Hilbert schemes, polygraphs and the Macdonald positivity conjecture, retrieved arXiv math/0010246,
      sections 3.8 and 5.1; explicit local constructions below
    url: https://arxiv.org/pdf/math/0010246
    locator: §3.8 (pp.19–22) and §5.1 (pp.57–58), especially Theorem6; all-n CM and the separate local kernel criterion
      supply the equivalence and norm compatibilities.
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/thm-gts-all-n-surface-hilbert-symmetric-group-kernel-equivalence.md
dependency_level: 3
---

## Statement

Assume AC and DC. Let S be any smooth connected projective complex surface and $n\ge 1$. Put $Y=S^{[n]}$, $M=S^{n}$, $Q=Sym^{n}$ S and $X=(Y\times _{Q} M)_{\text{red}}$. With its natural $S_{n}$ linearization, the actual isospectral kernel $O_{X}$ defines an equivalence Φ:Dᵇ(Coh $Y)\to Dᵇ_{S_{n}}(Coh$ M), $Φ(F)=Rπ_{M,*}(O_{X}\otimes ^{L}π_{Y}*F)$. Its universal $p_*O_{X}$ is a rank-n! vector bundle with regular-representation fibers, and Y is the reduced free-orbit $S_{n}$-Hilbert component. No symplectic or trivial-canonical assumption is imposed. For any line A on S, let $A_{(n)}$ be the descent of $A^{⊠n}$ to Q and $A_{n}$ its Hilbert–Chow pullback; then $Φ(F\otimes A_{n})=Φ(F)\otimes A^{⊠n}$, coherently with powers and specified torsion trivializations. The transform naturally intertwines surface automorphisms; exterior products of equivariantly linearized Fourier–Mukai kernels have the canonical $S_{n}$ and wreath compatibilities. No global tilting-bundle assertion on a projective Hilbert scheme is made.

## Statement references

[[thm-gts-all-n-isospectral-hilbert-cohen-macaulay-and-finite-flat]]

[[lem-gts-isospectral-cm-implies-all-n-surface-kernel-equivalence]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

## Facts & Assumptions

[A1] AC and DC are inherited from the two actual locally constructed suppliers.

[F1] [[thm-gts-all-n-isospectral-hilbert-cohen-macaulay-and-finite-flat]] proves the all-n CM and finite-flat input by its attached polygraph/nested induction. [[lem-gts-isospectral-cm-implies-all-n-surface-kernel-equivalence]] proves the actual kernel equivalence and compatibilities from exactly this CM hypothesis.

## Proof

**Given:** The Statement data, without a canonical-triviality assumption.

1.1 Apply the all-n isospectral theorem to S,n. It gives exactly the Cohen–Macaulay reduced isospectral X and its finite-flat regular-representation cluster family. Its proof has no kernel-equivalence premise. [given, A1, F1, algebra]

2.1 Apply the kernel criterion to these same S,n,Y,M,Q,X. Its sole additional geometric premise, Cohen–Macaulayness of X, is the conclusion just obtained. It gives the stated equivalence with the actual structure-sheaf kernel, scheme-level $S_{n}$-Hilbert identification, norm-line identities and the automorphism/product/wreath coherences. The criterion explicitly treats arbitrary canonical line, so Enriques and bielliptic surfaces are included. [given, A1, F1, step 1.1, algebra] ∎
