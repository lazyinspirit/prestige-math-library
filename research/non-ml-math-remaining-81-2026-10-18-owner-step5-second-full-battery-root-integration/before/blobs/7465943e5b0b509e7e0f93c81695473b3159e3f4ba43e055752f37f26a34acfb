---
id: thm-finite-kullback-leibler-data-processing
kind: theorem
title: Finite data processing for Kullback–Leibler divergence
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-finite-probability-vector
  - def-finite-stochastic-kernel
  - def-finite-f-divergence
  - def-finite-kullback-leibler-divergence
  - thm-finite-f-divergence-data-processing
  - lem-finite-kl-generator-is-admissible
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 7, §§7.1–7.2"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-2022.pdf"
    - title: "Igal Sason and Sergio Verdú, f-Divergence Inequalities, §II-B, equations (43)–(45)"
      url: "https://arxiv.org/pdf/1508.00335"
---

## Statement

For probability vectors $P,Q$ on a finite nonempty alphabet and a stochastic
kernel $K$ to another finite nonempty alphabet,
$$D(PK\|QK)\le D(P\|Q).$$

## Facts & Assumptions

**Given:** $P,Q,K$ as in the Statement.

[F1] [[lem-finite-kl-generator-is-admissible]]: $f(t)=t\log t$ is convex,
$f(1)=0$, $f(0)=0$, and $f_\infty=+\infty$.

[F2] [[def-finite-kullback-leibler-divergence]]: $D(P\|Q)$ is the
f-divergence with generator $t\log t$, including value $+\infty$ when
$p_x>0=q_x$.

[F3] [[thm-finite-f-divergence-data-processing]]: applying any stochastic
kernel to both arguments cannot increase the f-divergence.

[F4] [[def-finite-f-divergence]]: the f-divergence sums $q_xf(p_x/q_x)$
on $q_x>0$ and adds $p_xf_\infty$ on $q_x=0$.

## Proof

1.1 By [F1], $f(t)=t\log t$ is an admissible convex generator with $f(1)=0$, $f(0)=0$, and $f_\infty=+\infty$. The coordinate formula of [F2] and [F4] therefore contributes $p_x\log(p_x/q_x)$ when $p_x,q_x>0$, zero when $p_x=0\le q_x$, and $+\infty$ when $p_x>0=q_x$. These are exactly the terms and support convention in [F2]; the same identification applies to $PK,QK$. [F1, F2, F4, given, algebra]

2.1 Apply [F3] to this generator and to the given common kernel $K$. Step 1.1 identifies the two f-divergences in that inequality with $D(PK\|QK)$ and $D(P\|Q)$, respectively, and gives the stated result. [F3, step 1.1] ∎
