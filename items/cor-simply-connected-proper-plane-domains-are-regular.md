---
id: cor-simply-connected-proper-plane-domains-are-regular
kind: corollary
title: "Every bounded simply connected proper plane domain is regular"
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
    - title: "Harold P. Boas, Class Notes Math 618: Complex Variables II, Spring 2016"
      url: "https://haroldpboas.gitlab.io/courses/618-2016a/notes2016.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a bounded proper complex domain whose
complement in the Riemann sphere $\widehat{\mathbb C}$ is connected. Then every
boundary point of $\Omega$ is regular. In the planar working convention of the
batch sources, this says that every bounded simply connected proper plane domain
is regular.

## Facts & Assumptions

**Given:** A bounded proper complex domain $\Omega$ with connected complement in $\widehat{\mathbb C}$.

[L1] If the complementary component of $\widehat{\mathbb C}\setminus\Omega$ containing a boundary point also contains another point, then that boundary point is regular ([[lem-boundary-point-whose-complementary-component-contains-another-point-is-regular]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\zeta\in\partial\Omega$. The complement $\widehat{\mathbb C}\setminus\Omega$ is connected by hypothesis, contains $\zeta$, and also contains $\infty$ because $\Omega$ is bounded and proper. Therefore the complementary component containing $\zeta$ contains a second point. [given]

2.1 Applying [L1] to the boundary point $\zeta$ shows that $\zeta$ is regular. Since $\zeta$ was arbitrary, every boundary point is regular. [L1, step 1.1] ∎
