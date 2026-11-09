---
id: lem-eilenberg-maclane-shift-index
kind: lemma
title: Complex shifts and spectral homotopy indices
status: draft
domain: mathematics
deps:
  - def-stable-spectra-interface
  - lem-author-80e2d7bee57f-cochain-to-chain
  - lem-author-80e2d7bee57f-shift-cohomology
  - lem-author-80e2d7bee57f-chain-shift-reindex
  - lem-author-80e2d7bee57f-spectral-integer-shift
  - lem-author-80e2d7bee57f-tower-group-index
  - thm-author-80e2d7bee57f-eilenberg-maclane-input
dependency_roles:
  def-stable-spectra-interface: mathematical-premise
  lem-author-80e2d7bee57f-cochain-to-chain: mathematical-premise
  lem-author-80e2d7bee57f-shift-cohomology: mathematical-premise
  lem-author-80e2d7bee57f-chain-shift-reindex: mathematical-premise
  lem-author-80e2d7bee57f-spectral-integer-shift: mathematical-premise
  lem-author-80e2d7bee57f-tower-group-index: mathematical-premise
  thm-author-80e2d7bee57f-eilenberg-maclane-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 5
---

## Statement
Let $C$ be an unbounded cochain complex of abelian groups. Write $HC$ for the spectrum associated, through the stable spectra interface, to the Eilenberg–Mac Lane Omega spectrum of the chain complex $D_n=C^{-n}$. Then, naturally in $C$ and for all integers $i,j$,

$$\pi_i(HC)\cong H^{-i}(C),\qquad \pi_i(H(C[2j]))\cong H^{2j-i}(C),\qquad \pi_i((HC)[2j])\cong H^{2j-i}(C).$$

Here $C[2j]$ is the cochain shift, whereas $(HC)[2j]$ is spectral suspension by $2j$; the formulas do not identify these two objects by a specified equivalence. Consequently, a given equivalence $\operatorname{gr}^jE\simeq (HC_j)[2j]$ induces $\pi_i\operatorname{gr}^jE\cong H^{2j-i}(C_j)$. The unshifted realization of a support complex $C_{j,T}$ has $\pi_i=H^{-i}(C_{j,T})$; its $2j$-shift has the latter shifted index.

## Facts & Assumptions
**Given:** $C$, $i$, and $j$ as stated; for the graded conclusion, a specified equivalence $\operatorname{gr}^jE\simeq(HC_j)[2j]$.

**Goal:** Establish the displayed natural group identifications and their graded and support consequences.

[F1] [[lem-author-80e2d7bee57f-cochain-to-chain]] identifies $H_i(D)$ with $H^{-i}(C)$.

[F2] [[thm-author-80e2d7bee57f-eilenberg-maclane-input]] supplies the simplicial Omega spectrum of $D$ and its stable homotopy groups.

[F3] [[lem-author-80e2d7bee57f-tower-group-index]] compares a coherent Omega tower with its associated spectrum.

[F4] [[lem-author-80e2d7bee57f-shift-cohomology]] computes cohomology after cochain shift, and [[lem-author-80e2d7bee57f-chain-shift-reindex]] identifies the corresponding shifted chain complex.

[F5] [[lem-author-80e2d7bee57f-spectral-integer-shift]] computes homotopy groups after spectral shift; [[def-stable-spectra-interface]] supplies the associated stable category and homotopy-group functors.

## Proof
1.1 Apply [F2] to $D_n=C^{-n}$. Its simplicial Omega spectrum defines a coherent Omega tower of pointed spaces and hence, by the stable spectra interface, an associated spectrum $HC$. By [F3], its enhanced homotopy groups agree with the stable groups in [F2]; by [F1] these are $H^{-i}(C)$. These identifications are natural in maps of complexes. [F1, F2, F3, F5, given]

2.1 Apply step 1.1 to $C[2j]$. By [F4], its associated chain complex is the corresponding chain shift and $H^{-i}(C[2j])\cong H^{2j-i}(C)$. Independently, [F5] gives $\pi_i((HC)[2j])\cong\pi_{i-2j}(HC)\cong H^{2j-i}(C)$. A specified equivalence of the graded object induces an isomorphism on homotopy groups, proving the graded formula. Applying the same two formulas to the support complex proves the final assertion, with its unshifted and shifted spectra kept distinct. [F4, F5, given, step 1.1] ∎
