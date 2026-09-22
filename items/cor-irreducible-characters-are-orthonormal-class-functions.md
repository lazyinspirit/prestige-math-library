---
id: cor-irreducible-characters-are-orthonormal-class-functions
kind: corollary
title: Irreducible characters are orthonormal class functions
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-schur-orthogonality-for-compact-lie-groups, def-matrix-coefficient-and-character-of-a-compact-group-representation, def-axiom-of-choice, thm-linearity-of-the-lebesgue-integral-on-l-one]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §2, orthonormality of characters"
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§4.7, Corollary after Theorem 4.38"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $G$ be a compact Lie group with normalized Haar
measure $\mu$. The characters of pairwise inequivalent irreducible unitary
finite-dimensional complex representations of $G$ are orthonormal in
$L^2(G,\mu)$, and every such character is a conjugation-invariant class
function.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact Lie group $G$ with normalized Haar measure $\mu$, and irreducible unitary representations $\pi,\sigma$ chosen from a family containing one representative of each equivalence class, with characters $\chi_\pi,\chi_\sigma$. Thus either $\pi=\sigma$ with the same chosen model and basis, or $\pi$ and $\sigma$ are inequivalent.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the normalized Haar measure and the Schur-orthogonality supplier [L1]. The finite-sum linearity statement [L3] is choice-free.

[L1] Schur orthogonality with respect to the matrix coefficient functions fixed on this page gives $\int_G\pi_{ij}(g)\overline{\sigma_{kl}(g)}\,d\mu(g)=0$ for inequivalent irreducible $\pi,\sigma$. For equivalent models and an intertwining isomorphism $S:V_\sigma\to V_\pi$, the integral is $S_{ik}(S^{-1})_{lj}/d_\pi$; in the equal-model, equal-basis case used below, $S=I$ and this specializes to $\delta_{ik}\delta_{jl}/d_\pi$ ([[thm-schur-orthogonality-for-compact-lie-groups]]).

[L2] The character is $\chi_\pi(g)=\operatorname{tr}\pi(g)=\sum_{i=1}^{d_\pi}\pi_{ii}(g)$ in an orthonormal basis, is independent of that basis, and is a class function: $\chi_\pi(ghg^{-1})=\chi_\pi(h)$ for all $g,h$ ([[def-matrix-coefficient-and-character-of-a-compact-group-representation]]).

[L3] The integral of a finite sum of integrable functions is the sum of the integrals ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof

**Proof technique:** direct.

1.1 Expanding both characters by [L2] and using linearity of the integral [L3], $\langle\chi_\pi,\chi_\sigma\rangle=\int_G\chi_\pi\overline{\chi_\sigma}\,d\mu=\sum_{i=1}^{d_\pi}\sum_{k=1}^{d_\sigma}\int_G\pi_{ii}(g)\overline{\sigma_{kk}(g)}\,d\mu(g)$, a finite sum of the orthogonality integrals of [L1]. [L1, L2, L3]

2.1 If $\pi$ and $\sigma$ are inequivalent, every term in step 1.1 vanishes by the first case of [L1], so $\langle\chi_\pi,\chi_\sigma\rangle=0$. If $\pi=\sigma$, then the terms equal $\delta_{ik}\delta_{ik}/d_\pi=\delta_{ik}/d_\pi$ by the second case of [L1] with $j=i$ and $l=k$, so $\langle\chi_\pi,\chi_\pi\rangle=\sum_{i=1}^{d_\pi}1/d_\pi=1$. [L1, step 1.1]

3.1 Conjugation invariance is [L2], so every character is a class function; combining with step 2.1, the characters of pairwise inequivalent irreducible unitary representations are orthonormal in $L^2(G,\mu)$. The Axiom of Choice entered only through the Haar-based supplier [L1]. [A1, L2, step 2.1] ∎
