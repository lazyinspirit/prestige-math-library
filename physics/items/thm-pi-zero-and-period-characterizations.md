---
id: thm-pi-zero-and-period-characterizations
kind: theorem
title: "Pi is equivalently the first sine zero, twice the first cosine zero, and half the least common period"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pi-via-first-positive-cosine-zero, cor-pi-is-the-first-positive-sine-zero, thm-sine-cosine-zero-sets-and-fundamental-period]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 11.4.2"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

For a positive real $p$, the following are equivalent:

1. $p=\pi$;
2. $p$ is the least positive zero of sine;
3. $p/2$ is the least positive zero of cosine;
4. $2p$ is the least positive common period of sine and cosine.

## Facts & Assumptions

**Given:** A positive real $p$.

[L1] If $\gamma$ is the unique least positive zero of cosine, then $\pi=2\gamma$ ([[def-pi-via-first-positive-cosine-zero]]).

[L2] $\sin\pi=0$, and $\sin x>0$ for every $0<x<\pi$; thus $\pi$ is the first positive zero of sine ([[cor-pi-is-the-first-positive-sine-zero]]).

[L3] Both sine and cosine have period $2\pi$, and no smaller positive number is a common period ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

## Proof

**Proof technique:** direct.

1.1 If $p=\pi$, then [L2] says that $p$ is the least positive zero of sine. [given, L2]

1.2 If $p=\pi$, write $\pi=2\gamma$ as in [L1]. Then $p/2=\gamma$, the least positive zero of cosine. [given, L1, algebra]

1.3 If $p=\pi$, then $2p=2\pi$, which is the least positive common period by [L3]. [given, L3, algebra]

1.4 Conversely, if $p$ is the least positive zero of sine, then $p=\pi$ because [L2] identifies $\pi$ as that least positive zero. [given, L2]

1.5 If $p/2$ is the least positive zero of cosine, then [L1] gives $p/2=\pi/2$, hence $p=\pi$. [given, L1, algebra]

1.6 If $2p$ is the least positive common period, then [L3] gives $2p=2\pi$, hence $p=\pi$. [given, L3, algebra]

2.1 Steps 1.1 to 1.6 prove every implication to and from $p=\pi$, so the four conditions are equivalent. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6] ∎
