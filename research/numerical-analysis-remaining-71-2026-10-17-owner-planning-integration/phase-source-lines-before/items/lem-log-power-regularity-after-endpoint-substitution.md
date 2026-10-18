---
id: lem-log-power-regularity-after-endpoint-substitution
kind: lemma
title: A sufficiently high power regularizes finite logarithmic endpoint factors
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-real-power, def-natural-logarithm, def-higher-derivatives-and-smoothness, thm-real-power-continuity-and-derivatives, thm-exponential-limits-and-range, thm-algebra-of-derivatives, thm-chain-rule]
proof_strategy: direct
axiom_use: None. The derivative induction and exponential limit are choice-free.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: J. Lebl, Basic Analysis I, §5.4.1–5.4.2, The logarithm and the exponential
      url: https://www.jirka.org/ra/html/sec_logandexp.html
      locator: §§5.4.1–5.4.2, real powers defined through exp and log and the exponential limit at negative infinity.
---

## Statement

Let $r,m$ be nonnegative integers and $\gamma>r$. Define $u(t)=t^\gamma(\log t)^m$ for $0<t\le1$ and $u(0)=0$. Then $u\in C^r([0,1])$ in the sense of [[def-higher-derivatives-and-smoothness]], and $u^{(j)}(0)=0$ for $0\le j\le r$.

## Facts & Assumptions

**Given:** Natural numbers $r,m$, a real exponent $\gamma>r$, and the function $u$ above.

[F1] [[def-real-power]] and [[def-natural-logarithm]]: $t^\gamma=\exp(\gamma\log t)$ for $t>0$.

[F2] [[thm-real-power-continuity-and-derivatives]]: $(t^\gamma)'=\gamma t^{\gamma-1}$ for $t>0$.

[F3] [[thm-algebra-of-derivatives]] and [[thm-chain-rule]]: products and compositions of differentiable functions obey the product and chain rules.

[F4] [[thm-exponential-limits-and-range]]: $e^{-y}\to0$ as $y\to+\infty$.

[F5] [[def-higher-derivatives-and-smoothness]]: membership in $C^r$ means that derivatives through order $r$ exist and are continuous, with one-sided endpoint derivatives.

## Proof

1.1 For $t>0$, induction using [F2]–[F3] gives $u^{(j)}(t)=t^{\gamma-j}P_j(\log t)$, where $P_0(z)=z^m$ and $P_{j+1}(z)=(\gamma-j)P_j(z)+P'_j(z)$. Each $P_j$ is a polynomial of degree at most $m$. [given, F1, F2, F3, induction]

1.2 If $\delta>0$ and $P$ is a polynomial, put $y=-\log t$. Then $t^\delta|P(\log t)|=e^{-\delta y}|P(-y)|\to0$ as $t\downarrow0$: for some $C>0$ and integer $d$, $|P(-y)|\le C(1+y^d)$ for $y\ge1$, while the exponential series gives $e^{\delta y/2}\ge(\delta y/2)^{d+1}/(d+1)!$ and [F4] gives $e^{-\delta y/2}\to0$. Since $\gamma-j>0$ for every $j\le r$, step 1.1 therefore shows $u^{(j)}(t)\to0$ at zero. [F1, F4, step 1.1, algebra]

2.1 Set $u^{(j)}(0)=0$ for $j\le r$. Continuity at zero follows from step 1.2. For $j<r$, the difference quotient of this extension at zero is $t^{\gamma-j-1}P_j(\log t)$, which tends to zero by step 1.2 because $\gamma-j-1>0$; hence the derivative at zero equals the defined $u^{(j+1)}(0)$. Thus the derivatives through order $r$ exist and are continuous on $[0,1]$ by the definition [F5]. [given, F5, step 1.1, step 1.2, algebra] ∎
