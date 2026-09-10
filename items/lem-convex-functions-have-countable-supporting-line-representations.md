---
id: lem-convex-functions-have-countable-supporting-line-representations
kind: lemma
title: "Convex functions have countable supporting line representations"
status: draft
origin: pipeline
deps: [thm-supporting-lines-for-convex-functions, thm-one-sided-derivatives-of-convex-functions, thm-rationals-countable, lem-rat-embeds-dense, thm-continuous-preimages-of-borel-sets-are-borel]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Let $\phi:\mathbb R\to\mathbb R$ be finite and convex. For each $q\in\mathbb Q$ define $\ell_q(t)=\phi(q)+\phi^{\prime}_-(q)(t-q)$. Then $\phi(t)=\sup_{q\in\mathbb Q}\ell_q(t)$ for every real $t$. This is a countable family with deterministic real coefficients; the coefficients need not be rational. The function $\phi$ is locally Lipschitz and Borel measurable.

## Facts & Assumptions

**Given:** A finite convex function $\phi:\mathbb R\to\mathbb R$.

[F1] The finite one-sided derivatives bound secant slopes and are ordered at ordered points. ([[thm-one-sided-derivatives-of-convex-functions]])

[F2] A slope between the one-sided derivatives defines a supporting line. ([[thm-supporting-lines-for-convex-functions]])

[F3] The rational contact points form a countable set. ([[thm-rationals-countable]])

[F4] Rational points approximate each real point arbitrarily closely. ([[lem-rat-embeds-dense]])

[F5] A continuous real function is Borel measurable. ([[thm-continuous-preimages-of-borel-sets-are-borel]])

## Proof

**Proof technique:** direct.

1.1 By [F1], $m_q=\phi^{\prime}_-(q)$ is finite and lies between $\phi^{\prime}_-(q)$ and $\phi^{\prime}_+(q)$. Therefore [F2] gives $\ell_q(t)\le\phi(t)$ for every $t$, with equality at $t=q$. The family is countable by [F3], and no slope choice is made. [F1, F2, F3]

1.2 Fix real $a<b$. For $a\le u<v\le b$, the inequalities in [F1], also applied between $a-1,u$ and $v,b+1$, bound the secant slope between the finite numbers $\phi^{\prime}_+(a-1)$ and $\phi^{\prime}_-(b+1)$. The same bounds hold for $\phi^{\prime}_-(q)$ for $q\in[a,b]$. Let $M$ be the maximum of their absolute values. Then $|\phi(v)-\phi(u)|\le M|v-u|$, proving Lipschitz continuity on $[a,b]$ and thus continuity everywhere; [F5] gives Borel measurability. [F1, F5]

2.1 For fixed $x$ use step 1.2 on $[x-1,x+1]$. Given $\varepsilon>0$, [F4] supplies rational $q$ in this interval with $|q-x|<\varepsilon/(2M+1)$. Then $0\le\phi(x)-\ell_q(x)\le|\phi(x)-\phi(q)|+|m_q||x-q|\le2M|x-q|<\varepsilon$. Thus the supremum of the supporting lines is at least $\phi(x)-\varepsilon$ for every positive $\varepsilon$, and at most $\phi(x)$ by step 1.1, proving equality. This also handles $M=0$ and affine functions with irrational slopes. [step 1.1, step 1.2, F4] ∎

## Source notes

Durrett Theorem 4.1.10 and countability remark, printed p.211, motivate the countable-support method. Here rational contact points with real slopes avoid any rational-coefficient ambiguity; the exact local supporting-line and derivative interfaces give the complete derivation.
