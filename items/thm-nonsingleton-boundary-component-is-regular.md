---
id: thm-nonsingleton-boundary-component-is-regular
kind: theorem
title: "A point on a nonsingleton boundary component is regular"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-boundary-point-whose-complementary-component-contains-another-point-is-regular]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Boris Khoruzhenko, Potential Theory lecture notes"
      url: "https://www.yumpu.com/en/document/view/12029492/potential-theory"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a bounded complex domain and let
$\zeta\in\partial\Omega$. If the connected component of $\partial\Omega$
containing $\zeta$ is not a singleton, then $\zeta$ is regular for $\Omega$.

## Facts & Assumptions

**Given:** A bounded complex domain $\Omega$ and a boundary point $\zeta\in\partial\Omega$ whose boundary component contains another point.

[L1] If the complementary component of $\widehat{\mathbb C}\setminus\Omega$ containing $\zeta$ contains a second point, then $\zeta$ is regular ([[lem-boundary-point-whose-complementary-component-contains-another-point-is-regular]]).

## Proof

**Proof technique:** direct.

1.1 Let $C$ be the connected component of $\partial\Omega$ containing $\zeta$, and choose $a\in C$ with $a\ne\zeta$. Because $C\subseteq\widehat{\mathbb C}\setminus\Omega$ is connected, it lies in a single connected component of $\widehat{\mathbb C}\setminus\Omega$; that component contains both $\zeta$ and $a$. [given, choose]

2.1 Step 1.1 puts $\zeta$ under the hypothesis of [L1], so $\zeta$ is regular for $\Omega$. [L1, step 1.1] ∎
