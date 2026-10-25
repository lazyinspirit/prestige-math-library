---
id: thm-identity-principle-for-plane-harmonic-functions
kind: theorem
title: "A plane harmonic function that vanishes on a nonempty open set vanishes everywhere on the domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-local-holomorphic-potential-for-harmonic-functions, cor-maximum-principle-real-part-holomorphic-function, def-complex-domain]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
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
pipeline_run: null
---

## Statement

Let $\Omega$ be a complex domain and let $u:\Omega\to\mathbb R$ be harmonic. If
$u=0$ on some nonempty open subset of $\Omega$, then $u=0$ on all of $\Omega$.

## Facts & Assumptions

**Given:** A complex domain $\Omega$, a harmonic function $u$ on $\Omega$, and a nonempty open subset $U\subseteq\Omega$ on which $u=0$.

[L1] Near every point of $\Omega$, the function $u$ is the real part of a holomorphic function ([[thm-local-holomorphic-potential-for-harmonic-functions]]).

[L2] If the real part of a holomorphic function has an interior local maximum, then the function is constant ([[cor-maximum-principle-real-part-holomorphic-function]]).

[L3] A complex domain is connected ([[def-complex-domain]]).

## Proof

**Proof technique:** direct.

1.1 Let $S:=\{\,z\in\Omega : u = 0 \text{ on some neighbourhood of } z\,\}$. Then $U\subseteq S$, so $S$ is nonempty, and $S$ is open by definition. [given]

2.1 Let $a\in\overline{S}$. By [L1], choose a disc $D\subseteq\Omega$ around $a$ and a holomorphic function $F$ on $D$ with $\operatorname{Re}F=u$ there. Since $S\cap D$ contains a nonempty open set on which $\operatorname{Re}F=0$, both $\operatorname{Re}F$ and $\operatorname{Re}(-F)$ have interior local maxima $0$ on $D$; [L2] therefore makes both $F$ and $-F$ constant, so $u=\operatorname{Re}F$ vanishes on all of $D$. Hence $a\in S$. [step 1.1, L1, L2]

3.1 Thus $S$ is closed in $\Omega$, and [L3] makes the nonempty clopen set $S$ equal to all of $\Omega$. Therefore $u=0$ everywhere on $\Omega$. [step 1.1, step 2.1, L3] ∎
