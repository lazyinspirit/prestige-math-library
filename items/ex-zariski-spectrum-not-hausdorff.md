---
id: ex-zariski-spectrum-not-hausdorff
kind: example
title: "A generic point and a distinct specialization cannot be separated in the Zariski topology"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [ex-zariski-spectrum-of-the-integers, cor-specialisation-order-is-prime-inclusion]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §13"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Example

The Zariski topology on $\operatorname{Spec}(\mathbb Z)$ is not Hausdorff.

## Facts & Assumptions

**Given:** The points $(0)$ and $(2)$ of $\operatorname{Spec}(\mathbb Z)$.

[L1] In $\operatorname{Spec}(\mathbb Z)$, the point $(0)$ is generic and $(2)$ is a specialization of it ([[ex-zariski-spectrum-of-the-integers]]).

[L2] Specialisation in a spectrum is reverse inclusion ([[cor-specialisation-order-is-prime-inclusion]]).

[A1] If $y$ is a specialization of $x$, then every open neighborhood of $y$ contains $x$.

## Verification

**Proof technique:** direct.

1.1 By [L1], $(2)$ is a specialization of $(0)$. Equivalently, [L2] records the containment $(0)\subseteq(2)$. [L1, L2]

2.1 By [A1], every open neighborhood of $(2)$ contains $(0)$. Hence no open neighborhood of $(0)$ can be disjoint from an open neighborhood of $(2)$. So the two distinct points cannot be separated by disjoint open sets. [A1, step 1.1]

3.1 Therefore $\operatorname{Spec}(\mathbb Z)$ is not Hausdorff. [step 2.1] ∎
