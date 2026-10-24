---
id: thm-full-rank-exponential-family-sufficiency
kind: theorem
title: "The canonical statistic of an exponential family is sufficient"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-exponential-family
  - def-sufficient-statistic
  - thm-common-reference-factorization-criterion
  - def-axiom-of-choice
  - def-standard-borel-space
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
proof_strategy: direct
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Joshua M. Tebbs, STAT 512 Mathematical Statistics Lecture Notes"
      url: "https://people.stat.sc.edu/Tebbs/stat512/s24notes.pdf"
    - title: "Peter Kempthorne, MIT 18.655 Lecture Note 6: Sufficiency"
      url: "https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/bbbca14a2009e47add8c7ea2a49daa41_MIT18_655S16_LecNote6.pdf"
    - title: "Noah Fithian, Stat 210a Reader: Sufficiency"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/sufficiency.html"
    - title: "Noah Fithian, Stat 210a Reader: Completeness, Ancillarity, and Basu’s Theorem"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/completeness.html"
    - title: "Charles J. Geyer, Stat 5421 Lecture Notes: Exponential Families"
      url: "https://www.stat.umn.edu/geyer/5421/notes/expfam.pdf"
    - title: "Jiahao Tian, Chapter 2: Sufficiency and Exponential Families"
      url: "https://jiahaotian-stat.github.io/Notes/en/Advanced_Stat/2Sufficiency/"
---

## Statement

Assume AC. Let $(P_\eta)_{\eta\in\Omega}$ be the exponential family of [[def-exponential-family]] on a standard Borel sample space, with $\Omega\ne\varnothing$, and let $T$ be its canonical statistic. Then $T$ is sufficient.

## Facts & Assumptions

**Given:** AC, the measurable carrier $h$, sigma-finite base $\mu$, nonempty natural parameter set $\Omega$, log normalizer $A$, and density formula from the exponential-family definition.

[A1] [[def-axiom-of-choice]]: the common-reference RN criterion is used under AC.

[F1] [[def-exponential-family]]: $p_\eta=h\exp(\eta\cdot T-A(\eta))$ and $A=\log\int h e^{\eta\cdot T}d\mu$.

[F2] [[def-sufficient-statistic]]: a common regular conditional law of the data given $T$ is the sufficiency criterion.

[F3] [[thm-common-reference-factorization-criterion]]: with a reference probability that is a member of the family, $T$ is sufficient when every RN derivative relative to it is a Borel function of $T$.

## Proof

1.1 Fix any $\eta_0\in\Omega$; nonemptiness is part of the family being considered. The density in [F1] is positive exactly on $\{h>0\}$ for every parameter. For $\eta\in\Omega$, dividing the densities there gives $dP_\eta/dP_{\eta_0}=\exp\{(\eta-\eta_0)\cdot T-(A(\eta)-A(\eta_0))\}$ $P_{\eta_0}$-almost surely. The right side is a Borel function of $T$. [F1, given, algebra]

2.1 The reference $P_{\eta_0}$ is a member of the model and dominates every other member because the densities have the common support $\{h>0\}$. Apply [F3] to the derivative in step 1.1; its criterion yields a common conditional law of $X$ given $T$. By [F2], $T$ is sufficient. [A1, F2, F3, step 1.1, given] ∎
