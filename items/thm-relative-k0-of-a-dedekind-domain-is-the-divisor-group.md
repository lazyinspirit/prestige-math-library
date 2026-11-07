---
id: thm-relative-k0-of-a-dedekind-domain-is-the-divisor-group
kind: theorem
title: Relative K0 of a Dedekind Domain Is Its Divisor Group
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-relative-algebraic-k0-group
- thm-relative-k-theory-localization-sequence
- def-dedekind-domain
- def-field-of-fractions
- def-localisation-at-a-prime-ideal
- lem-dedekind-localisation-at-nonzero-prime-is-dvr
- lem-finite-projective-modules-over-a-domain-have-constant-rank
- def-determinant-of-a-square-matrix
- cor-square-matrix-invertible-iff-determinant-is-a-unit
- def-axiom-of-choice
- lem-relative-triples-over-a-dedekind-domain-are-torsion-module-classes
sources:
  references:
  - title: Weibel, The K-book, Chapter V, §6.1 and Chapter III, §3
    url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $R$ be a Dedekind domain and let $K=\operatorname{Frac}(R)$. For a nonzero prime ideal $\mathfrak p$, write $R_{\mathfrak p}=(R\setminus\mathfrak p)^{-1}R$ and $P_{\mathfrak p}=R_{\mathfrak p}\otimes_RP$. Write $\operatorname{Div}(R)=\bigoplus_{\mathfrak p\ne0}\mathbb Z[\mathfrak p]$ for the free abelian group on the nonzero prime ideals. For a relative triple $(P,\alpha,Q)$ in $K_0(R,K)$, choose bases of the free $R_{\mathfrak p}$-modules $P_{\mathfrak p}$ and $Q_{\mathfrak p}$, and let $\alpha_{\mathfrak p}:K\otimes_{R_{\mathfrak p}}P_{\mathfrak p}\xrightarrow{\sim}K\otimes_{R_{\mathfrak p}}Q_{\mathfrak p}$ be the induced generic isomorphism. The valuation $v_{\mathfrak p}(\det(\alpha_{\mathfrak p}))$ is independent of those bases because a basis change has unit determinant. The finite-support divisor $\sum_{\mathfrak p\ne0}v_{\mathfrak p}(\det(\alpha_{\mathfrak p}))[\mathfrak p]$ induces an isomorphism $K_0(R,K)\xrightarrow{\sim}\operatorname{Div}(R)$. Under this isomorphism, localization at $R_{\mathfrak p}$ is the coordinate projection to the $\mathfrak p$-coordinate for each nonzero prime $\mathfrak p$.

## Statement references

[Weibel, *The K-book*, Chapter V, §6.1 and Chapter III, §3](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf)

## Facts & Assumptions

**Given:** A Dedekind domain $R$, its fraction field $K$, and a relative triple $(P,\alpha,Q)$.

[F1] [[def-dedekind-domain]]: $R$ is a Noetherian integrally closed domain of Krull dimension one.

[F2] [[lem-dedekind-localisation-at-nonzero-prime-is-dvr]]: localization at each nonzero prime ideal is a discrete valuation ring, so the valuation of a determinant is defined.

[F3] [[lem-finite-projective-modules-over-a-domain-have-constant-rank]]: the localized finite projectives $P_{\mathfrak p}$ and $Q_{\mathfrak p}$ are free of finite rank.

[F4] [[def-determinant-of-a-square-matrix]] and [[cor-square-matrix-invertible-iff-determinant-is-a-unit]]: a basis change has a square invertible matrix, whose determinant is a unit.

[F5] [[def-localisation-at-a-prime-ideal]]: $R_{\mathfrak p}=(R\setminus\mathfrak p)^{-1}R$ and localization tensors the projective modules with this ring.

[The Stacks Project, More on Algebra, Sections 15.8 and 15.22](https://stacks.math.columbia.edu/download/book.pdf)


[A1] [[def-axiom-of-choice]] is retained from the torsion-free-projectivity and ideal-factorization suppliers.

[F6] [[lem-relative-triples-over-a-dedekind-domain-are-torsion-module-classes]] identifies relative triples with finite torsion-module classes and then with their localized lengths, which equal the determinant valuations.

## Proof

1.1 Apply [F6] to obtain the isomorphism from $K_0(R,K)$ to the finite-support divisor group. Its final local matrix calculation gives exactly the formula in the statement, so it also proves representative and basis independence and compatibility with the triple relations. [A1, F6, given, algebra]

2.1 Localizing the common-lattice quotients used in [F6] is exact. Their lengths over $R_{\mathfrak p}$ are precisely the $\mathfrak p$-coordinate; over the DVR $R_{\mathfrak p}$ there is just that one nonzero prime. Thus localization is the stated coordinate projection. [F2, F5, F6, step 1.1, algebra] ∎
