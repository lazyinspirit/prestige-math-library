---
id: pthm-td-mean-dissipation
kind: physics-theorem
title: "Mean work is at least the finite free-energy difference"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps: [pthm-td-finite-jarzynski, thm-finite-jensen-inequality, thm-exponential-two-point-convexity, thm-exponential-is-strictly-increasing]
dependency_roles:
  pthm-td-finite-jarzynski: physical-result
  thm-finite-jensen-inequality: mathematical-premise
  thm-exponential-two-point-convexity: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
physical_scope: "An inequality for the ensemble-mean work in the finite protocol under the Jarzynski model assumptions; it is not a per-path second-law inequality and is not an empirical statement."
sources:
  references:
    - title: "C. Jarzynski, Nonequilibrium Equality for Free Energy Differences"
      url: "https://www.physics.uci.edu/~tritz/BP/Jarz97.pdf"
      locator: "Complete four-page paper; work average and nonequilibrium equality."
    - title: "C. Jarzynski, Introduction to Nonequilibrium Statistical Physics, lecture notes, Nonequilibrium Work Relations"
      url: "https://terpconnect.umd.edu/~cjarzyns/CHEM-CHPH-PHYS_703_Spr_20/onlineLectures/Nonequilibrium%20Work%20Relations.pdf"
      locator: "Complete 21-page lecture PDF; average work inequality and fluctuating trajectories."
    - title: "U. Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/html/1205.4176v1"
      locator: "Sections 3.2.1 and 4.6."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Under the hypotheses of [[pthm-td-finite-jarzynski]], the mean work obeys $\mathbb E_F W\ge\Delta F$. The conclusion concerns the path ensemble only; individual paths may have $W<\Delta F$.

## Facts & Assumptions

**Given:** A finite-valued work random variable $W$ under the forward path law and $\beta>0$.

[F1] [[pthm-td-finite-jarzynski]]: $\mathbb E_F e^{-\beta W}=e^{-\beta\Delta F}$.

[F2] [[thm-exponential-two-point-convexity]]: $x\mapsto e^x$ is convex on $\mathbb R$.

[F3] [[thm-finite-jensen-inequality]]: for a finite probability vector $(p_j)$ and real values $(x_j)$, $e^{\sum p_jx_j}\le\sum p_je^{x_j}$.

[F4] [[thm-exponential-is-strictly-increasing]]: the exponential is strictly increasing on $\mathbb R$.

## Proof

**Given:** [F1]--[F4].

1.1 Apply finite Jensen to the finitely many forward paths with $x_\omega=-\beta W(\omega)$ and weights $P_F(\omega)$. Then $e^{-\beta\mathbb E_F W}\le\mathbb E_F e^{-\beta W}=e^{-\beta\Delta F}$. [given, F1, F2, F3]

2.1 Strict increase of the exponential yields $-\beta\mathbb E_F W\le-\beta\Delta F$. Since $\beta>0$, multiplying by $-1/\beta$ reverses the order and gives $\mathbb E_F W\ge\Delta F$. [F4, step 1.1, algebra] ∎
