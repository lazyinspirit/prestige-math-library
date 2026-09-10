---
id: lem-brauer-maps-kill-nontrivial-idempotent-orbit-sums
kind: lemma
title: Brauer maps kill nontrivial idempotent orbit sums
deps: [def-relative-brauer-homomorphism, thm-p-group-fixed-point-congruence]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Jacobsen, Block fusion systems and the center of the group ring, §§1.1 and 2.2, pp.3–8 and 13–18
      url: https://www.math.ku.dk/bibliotek/arkivet/phd-theses/phd14mwj.pdf
proof_strategy: direct
---

## Statement

If $Q\trianglelefteq P$ are $p$-subgroups and $\mathcal O$ is a non-singleton $P$-orbit of primitive central idempotents of $kC_G(Q)$, then $\operatorname{Br}_{P/Q}(\sum_{f\in\mathcal O}f)=0$. The same coefficient assertion holds for any finite non-singleton orbit of elements of that algebra.

## Facts & Assumptions

**Given:** The stated normal subgroups and non-singleton orbit.

[F1] The relative Brauer map retains $C_G(P)$ coefficients of a $P$-fixed input. ([[def-relative-brauer-homomorphism]])

[F2] A nontrivial orbit of a $p$-group has size divisible by $p$. ([[thm-p-group-fixed-point-congruence]])

## Proof

**Proof technique:** direct.

1.1 The orbit sum is $P$-fixed because conjugation permutes its summands, so it is in the relative-map domain. At $x\in C_G(P)$, every conjugate of a fixed representative has the same coefficient: conjugation fixes the basis element $x$. [F1]

2.1 The coefficient of $x$ in the sum is therefore $|\mathcal O|$ times that coefficient, which is zero in characteristic $p$ by [F2]. All retained coefficients vanish, proving the assertion. The calculation never used idempotence, establishing the additional finite-orbit clause. [F1, F2, step 1.1] ∎

## Sources

Jacobsen, Block fusion systems and the center of the group ring, §§1.1 and 2.2, pp.3–8 and 13–18. Local argument and conventions as displayed above.
