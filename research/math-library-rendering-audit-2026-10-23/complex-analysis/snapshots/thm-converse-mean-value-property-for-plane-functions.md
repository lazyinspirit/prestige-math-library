---
id: thm-converse-mean-value-property-for-plane-functions
kind: theorem
title: "A continuous plane function with the local mean-value property is harmonic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-mean-value-property-for-plane-functions, thm-poisson-integral-solves-the-disc-dirichlet-problem, thm-mean-value-property-for-plane-harmonic-functions, thm-heine-borel-rn]
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

Let $\Omega\subseteq\mathbb C$ be open, and let $u:\Omega\to\mathbb R$ be
continuous. If $u$ satisfies the local mean-value property of
[[def-mean-value-property-for-plane-functions]], then $u$ is harmonic on
$\Omega$.

## Facts & Assumptions

**Given:** A continuous function $u:\Omega\to\mathbb R$ with the local mean-value property.

[L1] The Poisson integral of continuous boundary data is the unique continuous harmonic extension to a closed disc ([[thm-poisson-integral-solves-the-disc-dirichlet-problem]]).

[L2] Harmonic functions satisfy the mean-value property ([[thm-mean-value-property-for-plane-harmonic-functions]]).

[L3] Closed and bounded subsets of $\mathbb R^2$ are compact ([[thm-heine-borel-rn]]).

## Proof

**Proof technique:** direct.

1.1 Fix a closed disc $\overline{D(a,R)}\subseteq\Omega$. By [L1], the boundary values $t\mapsto u(a+Re^{it})$ have a unique continuous harmonic Poisson extension $v$ to $\overline{D(a,R)}$, and [L2] makes $v$ satisfy the same mean-value property there. Put $w:=u-v$. Then $w$ is continuous on $\overline{D(a,R)}$, has the local mean-value property on $D(a,R)$, and vanishes on the boundary circle. [L1, L2, given, algebra]

2.1 By [L3], the closed disc is compact, so $w$ attains a maximum $M$ and a minimum $m$ on $\overline{D(a,R)}$. If $M>0$, then the boundary values being $0$ force the maximum to occur at some interior point $b$. For a small circle centered at $b$, the circle mean-value property gives $M=w(b)$ as the average of values all bounded above by $M$, so every value on that circle is also $M$. Repeating this argument on overlapping small circles shows that the set $\{w=M\}$ is both open and closed in the connected disc, hence all of $D(a,R)$; this contradicts the boundary value $0$. Therefore $M\le0$. [step 1.1, L3]

3.1 Applying the same argument to $-w$ gives $\max_{\overline{D(a,R)}}(-w)\le0$, so $-w\le0$ and therefore $w\ge0$ on the closed disc. Together with step 2.1 this gives $w=0$ on $\overline{D(a,R)}$, so $u=v$ there. [step 2.1, algebra]

4.1 Since the closed disc was arbitrary and $v$ is harmonic on its interior, $u$ is harmonic on every point of $\Omega$, hence on all of $\Omega$. [step 1.1, step 3.1] ∎
