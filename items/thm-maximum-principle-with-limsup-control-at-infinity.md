---
id: thm-maximum-principle-with-limsup-control-at-infinity
kind: theorem
title: "Maximum principle with limsup control at infinity"
status: draft
origin: pipeline
deps: [thm-weak-maximum-principle-for-the-laplacian]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Thomas Schmidt, Lectures Notes, PDE"
      url: https://www.math.uni-hamburg.de/home/schmidt/lectures/PDE.pdf
      locator: "§2.4 Remarks (on Phragmen-Lindelof principles), (1), printed p.22 / PDF p.24"
---

## Statement

Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be unbounded and open, and let $u\in C^2(\Omega)\cap C(\overline\Omega)$ be subharmonic. Suppose $M\in\mathbb R$, $u\le M$ on $\partial\Omega$, and
$$\limsup_{\substack{x\in\Omega\\ |x|\to\infty}}u(x)\le M.$$
Here the last condition means that for every $\varepsilon>0$ there is $R_0$ with $u(x)\le M+\varepsilon$ whenever $x\in\Omega$ and $|x|>R_0$. Then $u\le M$ on $\overline\Omega$, even if $\partial\Omega$ is empty.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] A subharmonic $C^2$ function continuous on the closure of a bounded nonempty open set is bounded above by its boundary maximum. ([[thm-weak-maximum-principle-for-the-laplacian]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in\Omega$ and $\varepsilon>0$, choose $R_0$ from the infinity hypothesis, and choose $R>\max(R_0,|x|)$. The set $D=\Omega\cap B_R$ is bounded nonempty open; its boundary lies in $(\partial\Omega\cap\overline B_R)\cup(\overline\Omega\cap\partial B_R)$. [given]

2.1 On the first part $u\le M$. On the second part the infinity bound, extended from $\Omega$ by continuity when necessary, gives $u\le M+\varepsilon$. The weak maximum principle on $D$ yields $u(x)\le M+\varepsilon$. Let $\varepsilon\downarrow0$; the original boundary inequality then also includes all closure points. [F1, step 1.1, algebra] ∎
