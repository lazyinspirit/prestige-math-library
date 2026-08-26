---
id: thm-conformal-invariance-of-plane-harmonicity
kind: theorem
title: "Plane harmonicity is preserved by holomorphic and antiholomorphic changes of coordinate"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-local-holomorphic-potential-for-harmonic-functions, thm-chain-rule-for-complex-derivatives, thm-conjugate-difference-quotient-characterizes-antiholomorphic-maps]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jeremy Orloff, MIT 18.04 Topic 5: Introduction to Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/2e739bb156efb0bc7103fc43d0897dda_MIT18_04S18_topic5.pdf"
pipeline_run: null
---

## Statement

Let $u$ be harmonic on an open set $V\subseteq\mathbb C$.

1. If $\phi:U\to V$ is holomorphic on an open set $U$, then $u\circ\phi$ is
   harmonic on $U$.
2. If $\psi:U\to V$ is antiholomorphic on an open set $U$, then $u\circ\psi$ is
   harmonic on $U$.

## Facts & Assumptions

**Given:** A harmonic function $u$ on an open set $V$.

[L1] Near every point of $V$, the function $u$ is the real part of a holomorphic function ([[thm-local-holomorphic-potential-for-harmonic-functions]]).

[L2] Compositions of holomorphic functions are holomorphic ([[thm-chain-rule-for-complex-derivatives]]).

[L3] A map is antiholomorphic exactly when its conjugate is holomorphic, and the same criterion shows that $w\mapsto\overline{F(\overline{w})}$ is holomorphic whenever $F$ is holomorphic ([[thm-conjugate-difference-quotient-characterizes-antiholomorphic-maps]]).

## Proof

**Proof technique:** direct.

1.1 For the holomorphic case, fix $a\in U$. By [L1], choose a neighbourhood $W$ of $\phi(a)$ and a holomorphic function $F$ on $W$ with $\operatorname{Re}F=u$ there. Shrinking around $a$ if necessary, $\phi$ maps that neighbourhood into $W$, so [L2] makes $F\circ\phi$ holomorphic and $\operatorname{Re}(F\circ\phi)=u\circ\phi$ there. Thus $u\circ\phi$ is harmonic near $a$, and since $a$ was arbitrary it is harmonic on $U$. [L1, L2, choose]

2.1 For the antiholomorphic case, fix $a\in U$ and choose $W$ and $F$ as in step 1.1 around $\psi(a)$. By [L3], the map $\widetilde{\psi}(z):=\overline{\psi(z)}$ is holomorphic on $U$, and the map $\widetilde{F}(w):=\overline{F(\overline{w})}$ is holomorphic on $\overline{W}:=\{\,\overline{\zeta}:\zeta\in W\,\}$. Therefore [L2] makes $\widetilde{F}\circ\widetilde{\psi}$ holomorphic on a neighbourhood of $a$, and its real part is $$\operatorname{Re}\widetilde{F}(\widetilde{\psi}(z))=\operatorname{Re}\overline{F(\psi(z))}=\operatorname{Re}F(\psi(z))=u(\psi(z)).$$ Hence $u\circ\psi$ is harmonic near $a$, and therefore on $U$. [step 1.1, L2, L3]

3.1 Steps 1.1 and 2.1 prove the two invariance statements. [step 1.1, step 2.1] ∎
