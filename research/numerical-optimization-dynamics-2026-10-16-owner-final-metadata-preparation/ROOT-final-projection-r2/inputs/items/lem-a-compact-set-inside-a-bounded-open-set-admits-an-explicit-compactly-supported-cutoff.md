---
id: lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff
kind: lemma
title: "A compact set inside a bounded open set admits an explicit compactly supported continuous cutoff"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-distance-to-set-is-lipschitz, thm-heine-borel-rn, thm-extreme-value-metric, def-support-and-compactly-supported-riemann-integral-in-rn, def-c-c-and-c-c-infinity-on-rn]
landmark: false
proof_strategy: "For compact $K \\subset O \\subset \\mathbb{R}^n$ with $O$ bounded and open, use the distance-to-the-complement function $u(x)=d(x,O^c)$ and the positive minimum of $u$ on $K$. A piecewise-linear cutoff in $u$ then equals $1$ on $K$ and vanishes on a collar near $O^c$, so its support stays compactly inside $O$."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---
## Statement

Let $K \subseteq O \subseteq \mathbb{R}^n$, where $K$ is compact and $O$ is
bounded and open. Then there is $\eta \in C_c(\mathbb{R}^n)$ such that
$0 \le \eta \le 1$, $\eta = 1$ on $K$, and $\operatorname{supp}(\eta) \subseteq O$.

## Facts & Assumptions

**Given:** A compact set $K$ and a bounded open set $O$ with $K \subseteq O$.

[L1] The distance-to-set map is Lipschitz ([[lem-distance-to-set-is-lipschitz]]).

[L2] In $\mathbb{R}^n$, compact sets are exactly closed and bounded sets, and a continuous real-valued function on a nonempty compact metric space attains a minimum ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]]).

[L3] Compact support is defined by the closure of the nonzero set ([[def-support-and-compactly-supported-riemann-integral-in-rn]], [[def-c-c-and-c-c-infinity-on-rn]]).

## Proof

**Proof technique:** constructive.

1.1 If $K=\varnothing$, the zero function belongs to $C_c(\mathbb{R}^n)$ and [L3, given, algebra] already satisfies the conclusion. So assume from now on that $K$ is nonempty. [L3, given, algebra]

1.2 Let $u(x):=d(x,O^c)$. By openness of $O$, one has $u(x)>0$ for every [L1, L2, given, choose, algebra] $x\in K$. The function $u$ is continuous by [L1], so [L2] gives a minimum value $$ \delta:=\min_{x\in K} u(x)>0. $$ [L1, L2, given, choose, algebra]

2.1 Define $\eta:\mathbb{R}^n\to\mathbb{R}$ by [L1, step 1.2, construct] $$ \eta(x):= \begin{cases} 0,& u(x)\le \delta/2,\\ 2u(x)/\delta-1,& \delta/2<u(x)<\delta,\\ 1,& u(x)\ge \delta. \end{cases} $$ Because $\eta$ is obtained by composing the continuous function $u$ with a continuous piecewise-linear cutoff on $[0,\infty)$, it is continuous and $0\le\eta\le1$. Since $u\ge\delta$ on $K$, one has $\eta=1$ on $K$. [L1, step 1.2, construct]

3.1 The nonzero set of $\eta$ is contained in $\{x:u(x)>\delta/2\}$, so [L1, L2, L3, step 2.1, algebra] [[def-support-and-compactly-supported-riemann-integral-in-rn]] gives $$ \operatorname{supp}(\eta)\subseteq\{x:u(x)\ge\delta/2\}. $$ Every point of the right-hand set lies in $O$, because $u(x)>0$ means $x\notin O^c$. Also $O$ is bounded, so $\overline O$ is compact by [L2], and the closed set $\{u\ge\delta/2\}$ lies in $\overline O$. Hence $\operatorname{supp}(\eta)$ is compact and contained in $O$, so $\eta\in C_c(\mathbb{R}^n)$. [L1, L2, L3, step 2.1, algebra] ∎
