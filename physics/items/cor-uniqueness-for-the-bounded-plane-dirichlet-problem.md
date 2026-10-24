---
id: cor-uniqueness-for-the-bounded-plane-dirichlet-problem
kind: corollary
title: "The bounded plane Dirichlet problem has at most one continuous harmonic solution"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-maximum-and-minimum-principles-for-plane-harmonic-functions]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jeremy Orloff, MIT 18.04 Topic 5: Introduction to Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/2e739bb156efb0bc7103fc43d0897dda_MIT18_04S18_topic5.pdf"
pipeline_run: null
---

## Statement

Let $\Omega$ be a bounded complex domain, and let $u,v$ be continuous on
$\overline{\Omega}$ and harmonic on $\Omega$. If $u=v$ on $\partial\Omega$, then
$u=v$ on $\overline{\Omega}$.

## Facts & Assumptions

**Given:** A bounded complex domain $\Omega$, continuous functions $u,v$ on $\overline{\Omega}$, both harmonic on $\Omega$, and equality $u=v$ on $\partial\Omega$.

[L1] For a bounded domain, a continuous harmonic function attains its maximum and minimum on the boundary unless it is constant ([[thm-maximum-and-minimum-principles-for-plane-harmonic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Let $w:=u-v$. Then $w$ is continuous on $\overline{\Omega}$, harmonic on $\Omega$, and satisfies $w=0$ on $\partial\Omega$. [given, algebra]

2.1 Applying [L1] to $w$ gives $\sup_{\overline{\Omega}}w=\sup_{\partial\Omega}w=0$, so $w\le0$ on $\overline{\Omega}$; applying [L1] to $-w$ gives $\sup_{\overline{\Omega}}(-w)=0$, so $w\ge0$ on $\overline{\Omega}$. Hence $w=0$ everywhere. [step 1.1, L1, algebra]

3.1 Therefore $u=v$ on $\overline{\Omega}$. [step 2.1] ∎
