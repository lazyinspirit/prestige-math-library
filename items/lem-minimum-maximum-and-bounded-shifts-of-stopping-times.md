---
id: lem-minimum-maximum-and-bounded-shifts-of-stopping-times
kind: lemma
title: Minimum, maximum, and bounded shifts of stopping times
status: published
origin: pipeline
deps: [def-discrete-stopping-time, lem-equivalent-event-tests-for-a-discrete-stopping-time]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Durrett, Probability: Theory and Examples, 5th ed., §4.4", url: "https://web.archive.org/web/20240514054731if_/https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}
---

## Statement

If $\sigma,\tau$ are stopping times, then $\sigma\wedge\tau$ and $\sigma\vee\tau$ are stopping times. If $c\in\mathbb N_0$, then $\tau+c$ is a stopping time for $(\mathcal F_n)$, with $\infty+c=\infty$. More generally, if $\rho$ is stopping for $\mathcal G_n=\mathcal F_{n+c}$, then $\rho+c$ is stopping for $(\mathcal F_n)$. The earlier shift $(\tau-c)^+$ is stopping for $(\mathcal F_{n+c})$ but need not be stopping for $(\mathcal F_n)$. Finally, for every deterministic $N\in\mathbb N_0$, $\tau\wedge N$ is a bounded stopping time.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-discrete-stopping-time]] supplies the finite-horizon test.

[F2] [[lem-equivalent-event-tests-for-a-discrete-stopping-time]] supplies the complementary tests.

## Proof

1.1 The identities $$\{\sigma\wedge\tau\le n\}=\{\sigma\le n\}\cup\{\tau\le n\},\qquad \{\sigma\vee\tau\le n\}=\{\sigma\le n\}\cap\{\tau\le n\}$$ prove the first two claims by F1. [F1]

1.2 If $n<c$, $\{\tau+c\le n\}=\varnothing$; if $n\ge c$, it is $\{\tau\le n-c\}\in\mathcal F_{n-c}\subseteq\mathcal F_n$. If $\rho$ is stopping for $\mathcal G$, the same event is in $\mathcal G_{n-c}=\mathcal F_n$. [F1]

1.3 For the earlier shift, $$\{(\tau-c)^+\le n\}=\{\tau\le n+c\}\in\mathcal F_{n+c},$$ so it is stopping for the shifted filtration. The right side need not lie in $\mathcal F_n$, which is why no unshifted assertion is made. [F1]

2.1 A deterministic $N$ is a stopping time, so step 1.1 makes $\tau\wedge N$ a stopping time, and it is bounded by $N$. All empty and infinite-value cases follow from the displayed identities. [F1, F2] ∎
