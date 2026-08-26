---
id: thm-plane-harmonic-functions-are-smooth-and-real-analytic
kind: theorem
title: "Plane harmonic functions are smooth and real analytic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-local-holomorphic-potential-for-harmonic-functions, cor-holomorphic-functions-are-real-analytic-and-smooth]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Jeremy Orloff, MIT 18.04 Topic 5: Introduction to Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/2e739bb156efb0bc7103fc43d0897dda_MIT18_04S18_topic5.pdf"
    - title: "Sigurdur Helgason, MIT 18.112 Lecture 16: Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-112-functions-of-a-complex-variable-fall-2008/414780e0991d20cd338320d3784fae4d_lecture16.pdf"
pipeline_run: null
---

## Statement

Every plane harmonic function is of class $C^\infty$ and is real analytic in the
two real coordinates.

## Facts & Assumptions

**Given:** A harmonic function $u$ on an open subset $\Omega\subseteq\mathbb C$.

[L1] Near every point of $\Omega$, the function $u$ is the real part of a holomorphic function ([[thm-local-holomorphic-potential-for-harmonic-functions]]).

[L2] Holomorphic functions are smooth and real analytic in their two real coordinates ([[cor-holomorphic-functions-are-real-analytic-and-smooth]]).

## Proof

**Proof technique:** direct.

1.1 Fix $a\in\Omega$. By [L1], some disc $D(a,r)\subseteq\Omega$ and some holomorphic $F=U+iV$ on that disc satisfy $u=U$ there. [L1, choose]

2.1 By [L2], the coordinate map $(U,V)$ is smooth and real analytic on $D(a,r)$, so its first coordinate $U=u$ is smooth and real analytic there. [step 1.1, L2]

3.1 Since $a$ was arbitrary, $u$ is smooth and real analytic on all of $\Omega$. [step 2.1] ∎
