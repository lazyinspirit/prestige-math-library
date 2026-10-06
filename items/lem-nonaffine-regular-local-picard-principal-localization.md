---
id: lem-nonaffine-regular-local-picard-principal-localization
kind: lemma
title: "Line bundles on a principal localization of a regular local ring are trivial"
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-localisation-and-polynomial-extension-of-regular-rings, lem-finite-local-modules-admit-minimal-free-resolutions, thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective, thm-nakayama-lemma, thm-localisation-of-modules-is-exact]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-24.md"
      - "research/frontier-38-owner-30-alpha-batch-24-5a.md"
      - "research/frontier-38-owner-30-step5-hash-24-post-5a.json"
    content_sha256: "17fbb8b7dc5472a1565e787d2ade8db470f2abc1519346f20c7ff9c51282fe95"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks Project, Lemma 15.123.1, including corrected K0 argument"
      url: https://stacks.math.columbia.edu/tag/0AFZ
    - title: "Stacks Project, Algebra, regular local finite free resolutions"
      url: https://stacks.math.columbia.edu/tag/00O7
---

## Statement

Assume the Axiom of Choice. Let $R$ be a regular local ring and $f\in R$. Every invertible $R_f$-module is free of rank one.

## Facts & Assumptions

[F1] Regular local rings have finite global dimension equal to their dimension. Finite local modules have finite-rank minimal free resolutions; the $d$-th syzygy is projective when the projective dimension is at most $d$. ([[thm-localisation-and-polynomial-extension-of-regular-rings]], [[lem-finite-local-modules-admit-minimal-free-resolutions]], [[thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective]])

[F2] Nakayama's lemma holds for finite modules over local rings, and localization preserves exactness. ([[thm-nakayama-lemma]], [[thm-localisation-of-modules-is-exact]])

## Proof

**Given:** AC, $R$, $f$, and an invertible $R_f$-module $L$.

1.1 If $R_f=0$, the assertion is vacuous. Otherwise $L$ is finitely presented: its dual gives finite elements $l_i\in L$, $\lambda_i\in L^\vee$ with $\sum_i\lambda_i(l)l_i=l$ for every $l$, exhibiting $L$ as a direct summand of a finite free module. Choose a finite presentation matrix for $L$ over $R_f$. Multiply its finitely many columns by powers of $f$ to lift that matrix to $R$; its cokernel $M$ is finite over $R$, and $M_f\cong L$. [given, algebra, construct]

2.1 Let $d=\dim R$. By [F1], a minimal finite-rank free resolution of $M$ has projective $d$-th syzygy. A finite projective module $P$ over a local ring is free: lift a basis of $P/\mathfrak mP$, yielding a surjection $R^r\to P$ by [F2]; it splits by projectivity, and its kernel is finite with zero reduction modulo $\mathfrak m$, so it vanishes by [F2]. Truncate the resolution using a finite free module for its last syzygy. Thus $M$ has a bounded resolution by finite free modules. Localization gives such a resolution of $L$ over $R_f$. [F1, F2, step 1.1, algebra]

3.1 Since $L$ is projective, the surjection from the degree-zero free module splits, making its kernel finite projective. Inductively every subsequent short exact sequence in the localized resolution splits. For a split sequence $0\to P\to Q\to T\to0$ of finite projective modules of constant ranks, exterior multiplication gives $\det Q\cong\det P\otimes\det T$: after any localization choose bases and concatenate them, and the resulting transition determinants multiply, so the local identifications glue independently of the chosen splitting. All these modules have constant ranks, since they are direct summands in the finite free resolution and $R_f$ is a domain. Multiplying the determinant identities with alternating signs gives $L=\det L\cong\bigotimes_i(\det(F_i)_f)^{(-1)^i}$. Every $F_i$ is free, so the last invertible module is trivial. Consequently $L\cong R_f$. AC is inherited from the resolution and regularity suppliers. [F1, F2, step 2.1, algebra] ∎
