---
id: thm-laurent-lafforgue-global-langlands-for-gl-r-over-function-fields
kind: theorem
title: "Laurent Lafforgue global Langlands correspondence for GL_r over function fields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 23
deps:
  - def-drinfeld-shtuka-with-bounded-modification
  - def-cuspidal-automorphic-representation-over-function-field
  - thm-essential-shtuka-cohomology-splits-by-hecke-eigensystems
  - thm-grothendieck-lefschetz-trace-formula-for-constructible-l-adic-sheaves
  - thm-deligne-weight-bound-for-compactly-supported-cohomology
  - thm-global-function-field-artin-reciprocity-and-norm-index
  - thm-global-function-field-class-field-existence
  - thm-function-field-idele-class-degree-exact-sequence
  - thm-chebotarev-dirichlet-density
  - thm-strong-multiplicity-one-for-gln-over-function-fields
  - thm-piatetski-shapiro-converse-theorem-for-gln-over-function-fields
  - thm-laumon-product-formula-for-function-field-l-functions
  - def-function-field-local-rankin-selberg-l-and-epsilon-factors
  - def-absolute-galois-group-of-a-global-field
  - def-continuous-l-adic-galois-representation
  - def-arithmetic-frobenius-coset
  - def-axiom-of-choice
  - def-countable-choice
  - thm-existence-hardernarasimhan-truncation-for-drinfeld-shtukas
provenance:
  statement: literature-derived
  proof: not-supplied
axiom_use: >-
  AC is used for the coefficient-field isomorphism and adelic compactness;
  Countable Choice enters through local compact-open valuation-ring inputs.
  The theorem is not asserted in a weaker axiom branch.
sources:
  references:
    - title: "Laurent Lafforgue, Chtoucas de Drinfeld et correspondance de Langlands"
      url: "https://www.laurentlafforgue.org/math/fulltext.pdf"
      locator: "Chapter VI §1(d), Theorem VI.9, printed pp. 157–159; proof uses Chapters I–VI."
    - title: "Gérard Laumon, La correspondance de Langlands sur les corps de fonctions"
      url: "https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf"
      locator: "§§1.1–1.5 and the proof-strategy discussion, printed pp. 207–265."
---

## Statement

Assume AC and Countable Choice. Let $X/\mathbb F_q$ be a smooth projective geometrically connected curve, let $F=\mathbb F_q(X)$, let $r\ge1$, and let $\ell$ be a prime distinct from $\operatorname{char}(\mathbb F_q)$. Fix a field isomorphism $\iota:\overline{\mathbb Q}_\ell\cong\mathbb C$. Let $\mathcal A_r(F)$ be the irreducible cuspidal automorphic representations of $\mathrm{GL}_r(\mathbb A_F)$ with finite-order central character, and let $\mathcal G_\ell^r(F)$ be the isomorphism classes of continuous irreducible homomorphisms $G_F\to\mathrm{GL}_r(\overline{\mathbb Q}_\ell)$ that are unramified outside finitely many places and have finite-order determinant. There is a unique bijection $\pi\mapsto\sigma_\pi$ from $\mathcal A_r(F)$ to $\mathcal G_\ell^r(F)$ characterized at every place $v$ where $\pi_v$ is unramified by the equality, after applying $\iota$, of its normalized Satake eigenvalue multiset and the geometric-Frobenius eigenvalue multiset of $\sigma_\pi$. The ramification sets of $\pi$ and $\sigma_\pi$ agree. For every pair $\pi\in\mathcal A_r(F)$ and $\pi'\in\mathcal A_{r'}(F)$ and every place $v$, choose a nontrivial additive character $\psi_v:F_v\to\mathbb C^\times$. The local Rankin–Selberg $L$-factors and $\epsilon$-factors of $\pi_v\times\pi'_v$, normalized by $\psi_v$, equal those of $\sigma_{\pi,v}\otimes\sigma_{\pi',v}$ with $\psi_v$ transported through $\iota^{-1}$ on the Galois side and $\iota$ applied to the resulting Galois-side coefficients.

## Statement references

[Laurent Lafforgue, Theorem VI.9](https://www.laurentlafforgue.org/math/fulltext.pdf)

[Gérard Laumon, §1.3](https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf)

## Proof obligations

No complete local proof is supplied. The source proof uses rank-one global function-field class field theory, the induction on rank through essential shtuka cohomology, Chebotarev uniqueness, strong multiplicity one, Grothendieck functional equations, Laumon's product formula for constants, and the Hecke–Weil–Piatetski-Shapiro converse theorem. The exact class-field suppliers `thm-global-function-field-artin-reciprocity-and-norm-index` and `thm-global-function-field-class-field-existence` now have complete local proofs at their AC, Countable Choice and DC scope; the AC assumed here implies DC. These inputs do not by themselves prove the global correspondence or its geometric-Frobenius and local-factor comparisons. The current `thm-chebotarev-dirichlet-density` carrier concerns number fields; its literal Statement does not supply the function-field Chebotarev input needed here. Strong multiplicity one, the converse theorem, and Laumon's product formula have no current local supplier. These gaps affect uniqueness, surjectivity, ramification matching, and the local $L$/$\epsilon$ equalities; each remains held.
