---
id: ex-specialisation-poset-of-a-small-spectrum
kind: example
title: "A local PID gives a two-point spectrum with one generic point and one closed point"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-specialisation-order-is-prime-inclusion, cor-closed-points-of-spectrum-are-maximal-ideals]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.17: The spectrum of a ring"
      url: "https://stacks.math.columbia.edu/tag/00DY"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Example

Let $k$ be a field and let $R=k[x]_{(x)}$. Then $$ \operatorname{Spec}(R)=\{(0),(x)\}, $$ with $(0)$ the generic point and $(x)$ the unique closed point.

## Facts & Assumptions

**Given:** A field $k$ and the local PID $R=k[x]_{(x)}$.

[L1] Specialisation in a prime spectrum is reverse inclusion ([[cor-specialisation-order-is-prime-inclusion]]).

[L2] Closed points of a spectrum are exactly maximal ideals ([[cor-closed-points-of-spectrum-are-maximal-ideals]]).

[A1] The only prime ideals of the discrete valuation ring $k[x]_{(x)}$ are $(0)$ and $(x)$, and $(x)$ is maximal.

## Verification

**Proof technique:** direct.

1.1 Fact [A1] gives the full point set $\operatorname{Spec}(R)=\{(0),(x)\}$. Since $(0)\subseteq(x)$, fact [L1] shows that $(x)$ is a specialization of $(0)$, so $(0)$ is the generic point. [L1, A1]

1.2 By [A1], the ideal $(x)$ is maximal. Therefore [L2] makes $(x)$ the unique closed point of the spectrum. [L2, A1]

2.1 Thus the specialization poset of $\operatorname{Spec}(k[x]_{(x)})$ is the two-point chain $(0)\leadsto(x)$. [step 1.1, step 1.2] ∎

