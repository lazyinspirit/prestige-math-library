---
dependency_level: 1
id: lem-finite-kernel-cokernel-preserve-iwasawa-characteristic-ideal
kind: lemma
title: Finite kernel and cokernel preserve Iwasawa characteristic ideals
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-iwasawa-characteristic-ideal-over-zp-power-series
- thm-nakayama-lemma
- thm-localisation-of-modules-is-exact
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. Coates and R. Sujatha, The Main Conjecture
    url: https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download
    locator: Sections 1–3, completed group algebras, continuous actions and characteristic
      ideals; local reconstruction.
verification: {}
---

## Statement

Assume the Axiom of Choice. Put $R=\mathbb Z_p[[T]]$. If $f:M\to N$ is a homomorphism of finitely generated torsion $R$-modules whose kernel and cokernel are finite as sets, then
$$\operatorname{char}_R(M)=\operatorname{char}_R(N).$$
More precisely every finite $R$-module vanishes upon localization at any height-one prime of $R$, and $f$ becomes an isomorphism at each such prime. No arithmetic comparison theorem is assumed or proved here.

## Facts & Assumptions

**Given:** AC, the prime $p$, $R$, and $f:M\to N$ as in the Statement.

[F1] $R$ is a Noetherian domain, and the characteristic ideal of a finitely generated torsion module is the finite product of height-one primes with exponents the lengths of its localizations. ([[def-iwasawa-characteristic-ideal-over-zp-power-series]])

[F2] Under AC, a finitely generated module $L$ over a local ring with maximal ideal $\mathfrak m$ satisfies $L=0$ if $\mathfrak mL=L$. ([[thm-nakayama-lemma]], [[def-axiom-of-choice]])

[F3] Localization of modules is exact. ([[thm-localisation-of-modules-is-exact]])

## Proof

1.1 The ring $R$ is local with maximal ideal $\mathfrak m=(p,T)$: a series outside this ideal has unit constant coefficient and its inverse is obtained recursively coefficient by coefficient. The quotient by $\mathfrak m$ is $\mathbb F_p$, so this is the only maximal ideal. The ideal $(p)$ is prime because $R/(p)=\mathbb F_p[[T]]$ is a domain: in a product the first nonzero coefficients multiply to the first nonzero coefficient. Thus $(0)\subsetneq(p)\subsetneq\mathfrak m$ is a chain of primes, and $\mathfrak m$ has height at least two. [F1, given, algebra]

2.1 Let $C$ be a finite $R$-module. The descending chain $C\supseteq\mathfrak mC\supseteq\mathfrak m^2C\supseteq\cdots$ stabilizes, since the underlying sets are finite. For some $k$, $L=\mathfrak m^kC$ satisfies $\mathfrak mL=L$. It is finitely generated because it is finite as a set, so [F2] gives $L=0$. If $\mathfrak p$ has height one, step 1.1 implies $\mathfrak m\not\subseteq\mathfrak p$. Fix $a\in\mathfrak m\setminus\mathfrak p$. Then $a^k C=0$, but $a$ is invertible in $R_{\mathfrak p}$, forcing $C_{\mathfrak p}=0$. This includes $C=0$, where one may take $k=0$. [F2, step 1.1, construct, algebra]

3.1 Localize the two short exact sequences $0\to\ker f\to M\to\operatorname{im}f\to0$ and $0\to\operatorname{im}f\to N\to\operatorname{coker}f\to0$. By [F3] and step 2.1, their end terms from the finite kernel and cokernel vanish at every height-one prime, so $M_{\mathfrak p}\to N_{\mathfrak p}$ is an isomorphism. Its source and target have equal finite length by [F1]. All exponents in their finite characteristic-ideal products are therefore equal, proving the assertion. AC is used exactly through [F1] and [F2]. [F1, F2, F3, step 2.1, algebra] ∎
