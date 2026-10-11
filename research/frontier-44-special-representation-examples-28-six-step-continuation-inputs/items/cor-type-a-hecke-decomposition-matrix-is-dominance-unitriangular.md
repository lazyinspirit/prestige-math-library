---
id: cor-type-a-hecke-decomposition-matrix-is-dominance-unitriangular
kind: corollary
title: "The type-A Hecke decomposition matrix is dominance unitriangular"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-cellular-decomposition-matrices-are-dominance-unitriangular, def-dominance-order-on-partitions, def-quantum-characteristic-of-an-invertible-hecke-parameter, def-type-a-hecke-specht-module-and-cell-form, thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions, thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular]
justified_by: []
aliases: []
landmark: false
dependency_level: 12
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, Theorem 3.18 and the unitriangularity of the Hecke decomposition matrix with respect to dominance, printed pp. 20-34; conjugation reverses dominance (printed p. 19)"
    - title: "Gordon James, The Representation Theory of the Symmetric Group, Encyclopedia of Mathematics and its Applications 16, Addison-Wesley (1981)"
      url: "https://doi.org/10.1017/CBO9781107340732"
      locator: "Dominance lemma and the unitriangularity of the decomposition matrix of the symmetric group"
---

## Statement

Let $F$ be a field, $q\in F^{\times}$, $e=e(F,q)$ and $H=H_{F,q}(S_n)$
([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]). For
$\lambda\vdash n$ and $e$-regular $\mu\vdash n$ let
$$d_{\lambda\mu}:=[S^{\lambda}:D^{\mu}],$$
the multiplicity of $D^{\mu}$ in a composition series of the Specht module
$S^{\lambda}$ ([[def-type-a-hecke-specht-module-and-cell-form]],
[[thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions]]). Then
$$d_{\mu\mu}=1\qquad\text{and}\qquad d_{\lambda\mu}\ne0\ \Longrightarrow\ \mu\unrhd\lambda,$$
where $\unrhd$ is the dominance order on partitions
([[def-dominance-order-on-partitions]]): a simple factor $D^{\mu}$ of
$S^{\lambda}$ can occur only if the $e$-regular label $\mu$ dominates
$\lambda$. Equivalently the decomposition matrix $(d_{\lambda\mu})$ is
unitriangular along dominance. This constrains but does not compute the
entries: no off-diagonal decomposition number is determined by cellularity.

## Facts & Assumptions

**Given:** A field $F$, $q\in F^{\times}$, $H=H_{F,q}(S_n)$ with Specht modules $S^{\lambda}$ and simple quotients $D^{\mu}$ in the signed conjugate normalization ([[def-type-a-hecke-specht-module-and-cell-form]]), together with the dominance order on partitions of $n$ ([[def-dominance-order-on-partitions]]).

[F1] ([[def-type-a-hecke-specht-module-and-cell-form]]) $S^{\lambda}=(S^{\lambda'}_{\mathrm M})^\theta$ and $D^{\mu}=(D^{\mu'}_{\mathrm M})^\theta$ for the conjugate partitions, where $S^{\nu}_{\mathrm M}$ is the Murphy cell module and $\theta$ is the involutive automorphism $\theta(T_i)=-qT_i^{-1}$; pullback along $\theta$ is exact and preserves submodules, quotients, composition multiplicities and simplicity.

[F2] ([[cor-cellular-decomposition-matrices-are-dominance-unitriangular]]) For the Murphy cellular basis of $H$ the composition multiplicity $[S^{\nu}_{\mathrm M}:D^{\rho}_{\mathrm M}]$ satisfies $[S^{\rho}_{\mathrm M}:D^{\rho}_{\mathrm M}]=1$ whenever $D^{\rho}_{\mathrm M}\ne0$ and is zero unless $\nu\unrhd\rho$.

[F3] ([[def-dominance-order-on-partitions]]) Conjugation reverses dominance: $\lambda'\unrhd\mu'$ if and only if $\mu\unrhd\lambda$.

[F4] ([[thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions]]) $D^{\mu}\ne0$ exactly for the $e$-regular $\mu$.



## Proof

**Proof technique:** direct.

1.1 Invariance of composition multiplicities under the normalisation: by [F1] the twist $(-)^\theta$ is an exact equivalence of module categories with inverse $(-)^\theta$ itself, so it is additive on short exact sequences and carries composition series to composition series; hence $[S^{\lambda}:D^{\mu}]=[S^{\lambda'}_{\mathrm M}:D^{\mu'}_{\mathrm M}]$ for all $\lambda\vdash n$ and $e$-regular $\mu\vdash n$. [given, F1, F4]

2.1 Vanishing: if $d_{\lambda\mu}\ne0$, then $[S^{\lambda'}_{\mathrm M}:D^{\mu'}_{\mathrm M}]\ne0$ by step 1.1, so $\lambda'\unrhd\mu'$ by [F2], and conjugation reversal [F3] gives $\mu\unrhd\lambda$. [step 1.1, F2, F3]

2.2 Diagonal: taking $\lambda=\mu$ in step 1.1 gives $d_{\mu\mu}=[S^{\mu'}_{\mathrm M}:D^{\mu'}_{\mathrm M}]=1$ by [F2]. [step 1.1, F2]

3.1 Assembly: steps 2.1 and 2.2 are exactly the two claims; ordering the rows and columns of $(d_{\lambda\mu})$ by any linear extension of dominance displays the unitriangular shape, and no off-diagonal entry is determined by the cellular structure. At $q=1$ the statement specialises to the classical symmetric-group unitriangularity of [[thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular]] by [F4]. [step 2.1, step 2.2] ∎
