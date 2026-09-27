---
id: ex-distance-to-a-subspace-via-annihilating-functionals
kind: example
title: Distance to a subspace via annihilating functionals
status: published
origin: pipeline
deps: [def-continuous-annihilator-of-a-subspace, thm-hahn-banach-dominated-extension, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
generation:
  role: example
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: Theo Buehler and Dietmar Salamon, Functional Analysis, Theorem 2.53
      url: https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf
---

## Example

Assume the Axiom of Choice. Let $X$ be a real or complex normed space. For a subspace $M\subseteq X$ and $x\in X$,

$$\operatorname{dist}(x,\overline M)=\sup\{|f(x)|:f\in M^\perp,\ \|f\|\le1\}.$$

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), a real or complex normed space $X$, a subspace $M\subseteq X$, and $x\in X$.

[F1] Under AC, a real linear functional dominated by a sublinear functional extends with the same domination ([[thm-hahn-banach-dominated-extension]]).

[F2] $M^\perp$ consists of the continuous linear functionals vanishing on $M$ ([[def-continuous-annihilator-of-a-subspace]]).

## Verification

**Proof technique:** direct.

1.1 For $f\in M^\perp$ with $\|f\|\le1$, continuity gives $f|_{\overline M}=0$.  Hence, for every $m\in\overline M$, $|f(x)|=|f(x-m)|\le\|x-m\|$.  Taking infima gives the $\le$ direction. [given, algebra]

2.1 Put $\delta=\operatorname{dist}(x,\overline M)$.  If $\delta>0$, define $g:\overline M+\mathbb Kx\to\mathbb K$ by $g(m+\lambda x)=\lambda\delta$.  This is well defined, and $$|g(m+\lambda x)|=|\lambda|\delta\le\|m+\lambda x\|,$$ so $\|g\|\le1$.  In the real case apply [F1] with $p(y)=\|y\|$; domination at $y$ and $-y$ gives an extension $f$ with $\|f\|\le1$. In the complex case apply [F1] to $\operatorname{Re}g$ on the underlying real subspace, obtaining a real linear $U$ with $|U(y)|\le\|y\|$. Then $f(y)=U(y)-iU(iy)$ is complex linear and extends $g$. For each $y$, choose a scalar $a$ of modulus one with $af(y)=|f(y)|$; thus $|f(y)|=U(ay)\le\|y\|$. This is the exact use of AC in both scalar cases; this extension lies in $M^\perp$ and satisfies $|f(x)|=\delta$.  If $\delta=0$, then $x\in\overline M$, so continuity makes every annihilator vanish at $x$.  Thus equality holds in both cases. [F1, given, construct, algebra] ∎
