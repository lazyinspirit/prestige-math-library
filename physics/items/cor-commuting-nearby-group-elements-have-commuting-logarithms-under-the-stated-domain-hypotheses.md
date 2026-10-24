---
id: cor-commuting-nearby-group-elements-have-commuting-logarithms-under-the-stated-domain-hypotheses
kind: corollary
title: Commuting nearby group elements have commuting logarithms under the stated domain hypotheses
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, def-local-logarithm-on-a-lie-group, prop-adjoint-intertwines-the-exponential-map, prop-adjoint-exponential-identity, lem-right-trivialized-differential-of-the-lie-group-exponential]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Proposition 1.91 and formulas (1.92)–(1.93), printed pages 80–81
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Section 3.6, printed pages 37–38
---

## Statement

Assume $\mathrm{AC}_\omega$. There is an exponential neighborhood $U$ of the
identity such that, whenever $g,h\in U$ commute and
$X=\log_Gg$, $Y=\log_Gh$, one has $[X,Y]=0$.

## Facts & Assumptions

**Given:** The stated group and local logarithm.

[F1] The local logarithm is inverse to the exponential on its fixed domain. [[def-local-logarithm-on-a-lie-group]].

[F2] Conjugation intertwines exponential, and $\operatorname{Ad}_{\exp X}=e^{\operatorname{ad}_X}$ under countable choice. [[prop-adjoint-intertwines-the-exponential-map]]. [[prop-adjoint-exponential-identity]]. [[def-countable-choice]].

[F3] The entire operator series $D(A)=\sum_{n\ge0}A^n/(n+1)!$ has constant term $I$. [[lem-right-trivialized-differential-of-the-lie-group-exponential]].

## Proof

**Proof technique:** direct.

1.1 The map $(g,Y)\mapsto\operatorname{Ad}_gY$ is continuous and equals $Y$ at $g=e$. Shrink the logarithm neighborhood so that $Y$ and $\operatorname{Ad}_gY$ both lie in its exponential chart whenever $g,h\in U$ and $Y=\log_Gh$. Since the power series $D(\operatorname{ad}_X)$ depends continuously on $X$ and equals $I$ at $X=0$, shrink once more so it is invertible for every $X=\log_Gg$. [F1, F2, F3]

2.1 If $gh=hg$, then $ghg^{-1}=h$. With $h=\exp_GY$, [F2] gives $\exp_G(\operatorname{Ad}_gY)=\exp_GY$. Both exponents lie in the injectivity domain fixed in step 1.1, so $\operatorname{Ad}_gY=Y$. [F1, F2, step 1.1]

3.1 Write $g=\exp_GX$. By [F2], $(e^{\operatorname{ad}_X}-I)Y=0$. The power-series identity $e^A-I=D(A)A$ gives $D(\operatorname{ad}_X)[X,Y]=0$; invertibility from step 1.1 yields $[X,Y]=0$. [F2, F3, step 1.1, step 2.1, algebra]

4.1 The group is nonempty. In dimensions zero and one the conclusion is automatic. Singular $\operatorname{ad}_X$ is allowed because only $D(\operatorname{ad}_X)$, close to $I$, is inverted. There is no interval, endpoint, metric, or biconditional. $\mathrm{AC}_\omega$ is inherited exactly through [F1]–[F3]; finitely many neighborhood shrinkings add no choice. [F1, F2, F3, step 1.1, step 2.1, step 3.1] ∎
