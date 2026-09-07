---
id: "lem-minimal-free-resolutions-unique-up-to-chain-isomorphism"
kind: "lemma"
title: "minimal free resolutions unique up to chain isomorphism"
deps: ["cor-betti-number-is-rank-in-minimal-resolution", "thm-projective-comparison-map-exists", "thm-projective-comparison-maps-are-unique-up-to-chain-homotopy", "thm-nakayama-lemma"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Remark 12.28, p.121"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

Any two minimal degreewise finite free resolutions of a finite module over a nonzero Noetherian local ring are augmentation-preservingly chain-isomorphic, in general noncanonically. In particular their ranks agree in every degree.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[cor-betti-number-is-rank-in-minimal-resolution]]: For every minimal degreewise finite free resolution $F_\bullet\to M$ of a finite module over a nonzero Noetherian local ring, $\beta_i^R(M)=\operatorname{rank}_RF_i$ for all $i\ge0$.

[F2] [[thm-projective-comparison-map-exists]]: Assume the Axiom of Dependent Choice. Let $u:A\to B$ be a morphism, and let $P_\bullet\to A$ and $Q_\bullet\to B$ be projective resolutions. Then there exists an augmentation-preserving chain map $f_\bullet:P_\bullet\to Q_\bullet$ lifting $u$.

[F3] [[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]]: Assume the Axiom of Dependent Choice. Any two augmentation-preserving maps between projective resolutions lifting the same object morphism are chain-homotopic.

[F4] [[thm-nakayama-lemma]]: Assume the Axiom of Choice. Let $R$ be a commutative ring, let $I \trianglelefteq R$ satisfy $I \subseteq J(R)$, and let $M$ be a finitely generated left $R$-module. If $IM=M$, then $M=0$.

## Proof

1.1 Choose comparison maps $f:F\to G$ and $g:G\to F$ lifting the identity on $M$. Their composites are homotopic to the identities. The cited comparison assertions use DC and supplied resolution data. [F2, F3]

2.1 After reduction modulo $\mathfrak m$, all differentials vanish, so the homotopy identities become $\bar g_i\bar f_i=1$ and $\bar f_i\bar g_i=1$. The finite ranks agree, also by the Betti rank theorem. Nakayama makes each $f_i$ surjective; equivalently its square matrix has determinant nonzero modulo $\mathfrak m$, hence unit. Its adjugate gives an inverse over $R$. These inverses form a chain map since $f$ does. Rank zero causes no difficulty: the unique map between zero modules is invertible. [F1, F4, step 1.1, algebra] ∎
