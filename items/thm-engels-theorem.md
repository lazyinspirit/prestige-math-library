---
id: thm-engels-theorem
kind: theorem
title: Engel's theorem
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-lower-central-series-and-nilpotent-lie-algebra, thm-engels-triangularization-theorem, prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal]
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Corollary 2.11"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Corollary 2.11, printed p. 14"
---

## Statement

A finite-dimensional Lie algebra $\mathfrak g$ over any field is nilpotent if
and only if $\operatorname{ad}_x$ is a nilpotent endomorphism of
$\mathfrak g$ for every $x\in\mathfrak g$.

## Facts & Assumptions

**Given:** A finite-dimensional Lie algebra $\mathfrak g$.

[L1] Nilpotence is termination of the lower central series
([[def-lower-central-series-and-nilpotent-lie-algebra]]).

[L2] A nil finite-dimensional representation has a flag lowered by every
represented operator ([[thm-engels-triangularization-theorem]]).

[L3] Inner derivations form the adjoint representation, with
$\operatorname{ad}_x(y)=[x,y]$
([[prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\gamma_{c+1}(\mathfrak g)=0$. For $x,y\in\mathfrak g$, the vector $(\operatorname{ad}_x)^c(y)$ is a left-nested bracket with $c$ copies of $x$, hence lies in $\gamma_{c+1}=0$ by [L1] and [L3]. Thus every $\operatorname{ad}_x$ is nilpotent. This also covers $\mathfrak g=0$. [given, L1, L3, algebra]

2.1 Conversely suppose every $\operatorname{ad}_x$ is nilpotent. The adjoint representation in [L3] is nil, so [L2] gives $0=V_0\subset V_1\subset\cdots\subset V_n=\mathfrak g$ with $[\mathfrak g,V_i]\subseteq V_{i-1}$. Induction then gives $\gamma_{r+1}(\mathfrak g)\subseteq V_{n-r}$ for $0\leq r\leq n$, and in particular $\gamma_{n+1}\subseteq V_0=0$. Hence $\mathfrak g$ is nilpotent by [L1]. [given, L1, L2, L3, algebra] ∎
