---
id: thm-rpm-proper-time-parametrization
kind: theorem
title: "Proper-time parameter and normalized tangent"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-rpm-spacetime-observer-and-worldline, def-gr-timelike-worldline-and-proper-time, thm-ftc-first-part, thm-chain-rule-for-total-derivatives, thm-euclidean-inverse-function-theorem, cor-mean-value-theorem]
dependency_roles:
  def-rpm-spacetime-observer-and-worldline: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
sources:
  references:
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, Ch. 1, proper time and four-velocity"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "David Tong, General Relativity, author-hosted lecture-note chapter excerpt, §§1.1–1.2"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: pass
---

## Statement

Let $x:I\to M$ be a $C^2$ future timelike curve on a nonempty open interval $I$, with parameter $s$ and tangent $T=dx/ds$. Fix $c>0$, $s_0\in I$, and $\tau_0\in\mathbb R$, and define $\ell(s)=\sqrt{-g(T,T)}$ and $\tau(s)=\tau_0+c^{-1}\int_{s_0}^s\ell(r)\,dr$. Then $\tau'(s)=\ell(s)/c>0$, so $\tau$ is an increasing $C^2$ coordinate on its open image $J=\tau(I)$. The tangent with respect to this parameter is $U=dx/d\tau=cT/\ell$ and satisfies $g(U,U)=-c^2$. This is a mathematical reparametrization result; by itself it does not identify $\tau$ with a physical clock reading.

## Facts & Assumptions

**Given:** A $C^2$ future timelike curve and the definitions in the Statement.

[F1] For a future timelike worldline, the proper-time density is $h=\sqrt{-g(T,T)}>0$ and its integral defines proper time ([[def-gr-timelike-worldline-and-proper-time]]).

[F2] The fundamental theorem gives the derivative of an integral of a continuous density ([[thm-ftc-first-part]]); a $C^1$ map with nonzero derivative has a local $C^1$ inverse ([[thm-euclidean-inverse-function-theorem]]).

[F3] The chain rule gives $(x\circ\tau^{-1})'=T/(\tau')$ ([[thm-chain-rule-for-total-derivatives]]).

[F4] The mean value theorem applies on every compact subinterval of $I$ ([[cor-mean-value-theorem]]).

## Proof

1.1 Since $T$ is future timelike and continuous, $-g(T,T)$ is a continuous positive function, so $\ell$ is continuous and strictly positive. By [F1] and [F2], $\tau$ is differentiable with $\tau'=\ell/c>0$. By [F4], the mean value theorem on each compact subinterval makes $\tau$ strictly increasing. [given, F1, F2, F4, algebra]

2.1 At each point the nonzero derivative gives a local inverse; injectivity makes those local inverses agree, so they define a $C^1$ inverse on the open image $J$. Because $T$ is $C^1$ and $g$ is smooth, $\ell$ is $C^1$ and $\tau$ is $C^2$. Its inverse is first $C^1$ by [F2], and $(\tau^{-1})'=1/(\tau'\circ\tau^{-1})$ is $C^1$, so $\tau^{-1}$ is $C^2$. By [F3], $U=T/\tau'=cT/\ell$, and hence $g(U,U)=c^2g(T,T)/\ell^2=-c^2$. [step 1.1, F2, F3, algebra] ∎