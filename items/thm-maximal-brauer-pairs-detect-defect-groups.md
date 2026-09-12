---
id: thm-maximal-brauer-pairs-detect-defect-groups
kind: theorem
title: Maximal Brauer pairs detect defect groups
deps: [thm-maximal-brauer-pairs-exist-and-are-conjugate, thm-defect-groups-are-maximal-brauer-support, thm-brauer-pair-order-is-independent-of-the-normal-chain]
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Jacobsen, Block fusion systems and the center of the group ring, Lemma 2.32 and Theorem 2.33, pp.18–19; general-field lifting proved locally
      url: https://www.math.ku.dk/bibliotek/arkivet/phd-theses/phd14mwj.pdf
proof_strategy: direct
---

## Statement

A $b$-Brauer pair $(D,e)$ is maximal if and only if $D$ is a defect group of $b$.

## Facts & Assumptions

**Given:** A $b$-Brauer pair $(D,e)$ over a field of characteristic $p$.

[F1] Every maximal pair has a defect subgroup. ([[thm-maximal-brauer-pairs-exist-and-are-conjugate]])

[F2] Defect groups are exactly maximal nonzero support subgroups. ([[thm-defect-groups-are-maximal-brauer-support]])

[F3] Pair inclusion entails subgroup inclusion and is equality at equal subgroups. ([[thm-brauer-pair-order-is-independent-of-the-normal-chain]])

## Proof

**Proof technique:** direct.

1.1 If $(D,e)$ is maximal, [F1] states and proves that $D$ is a defect group. Its hypotheses hold because this is a $b$-pair. [F1]

2.1 Conversely assume $D$ is a defect group and $(D,e)\le(P,f)$ for a $b$-pair. Then $D\le P$ by [F3] and $\operatorname{Br}_P(b)f=f\ne0$, so $P$ has nonzero support. Maximality in [F2] forces $P=D$. Inclusion at equal subgroups in [F3] now forces $f=e$. Thus no strictly larger pair exists. [F2, F3] ∎

## Sources

Jacobsen, Block fusion systems and the center of the group ring, Lemma 2.32 and Theorem 2.33, pp.18–19; general-field lifting proved locally. Local argument and conventions as displayed above.
