---
id: ex-aqft-heavy-fermion-anomaly-threshold
kind: example
title: Compactly supported background with a nonzero heavy-fermion anomaly variation
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 8
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: aqft-eft-anomalies-examples
deps:
  - pthm-aqft-heavy-chiral-threshold-wess-zumino-match
justified_by: []
dependency_roles:
  pthm-aqft-heavy-chiral-threshold-wess-zumino-match: physical-result
physical_scope: "A fixed smooth compactly supported background-field calculation inside the perturbative local U(1)_V threshold model; it is illustrative and makes no empirical or global-anomaly claim."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Adel Bilal, Lectures on Anomalies"
      url: "https://arxiv.org/pdf/0802.0634"
      locator: "Full lecture-note PDF inspected; §9.3, Eq. (9.30), the consistent anomaly normalization used by the supplied theorem."
    - title: "John Preskill, Gauge Anomalies in an Effective Field Theory"
      url: "https://preskill.caltech.edu/pubs/preskill-1991-effective.pdf"
      locator: "Full lecture-note PDF inspected; §6.4, Eq. (6.45), the local Wess–Zumino threshold interpretation used by the supplied theorem."
verification:
  precheck: pending
---
## Example

In the trivial-bundle $H=SU(3)\times U(1)_V$ threshold model on natural-unit Minkowski space $M=\mathbb R^{1,3}$ with $\eta=\operatorname{diag}(-1,1,1,1)$, orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, and zero $SU(3)$ background, use a smooth real compactly supported $U(1)_V$ potential $B$ and parameter $\alpha$, with $G=dB$ and $B\mapsto B+d\alpha$, $\theta\mapsto\theta-\alpha$. Choose a smooth compactly supported cutoff $\chi$ that equals $1$ on a neighborhood of $\operatorname{supp}\alpha$, with $\alpha\geq0$. Let $\lambda>0$ have mass dimension two and set $B=\lambda\chi(x)(x^0dx^1+x^2dx^3)$, normalizing $\alpha$ so that $\lambda^2\int_M\alpha\,d^4x=1$. For the charge-one positive-chirality field, neutral mass partner, and heavy mass $M_H$ of the stated model, choose the external scale $E$ in the regime $E/M_H\ll1$. Then the consistent heavy-sector variation and the Wess–Zumino variation are equal, nonzero, and each equals $+1/(12\pi^2)$.

## Example references

[[pthm-aqft-heavy-chiral-threshold-wess-zumino-match|Conditional local threshold-matching theorem and anomaly normalization]]

## Facts & Assumptions

**Given:** The theorem's charge, transformation, and consistent-anomaly convention, together with the smooth compactly supported cutoff and normalized nonnegative test parameter.

[F1] [[pthm-aqft-heavy-chiral-threshold-wess-zumino-match]]: the heavy-sector consistent variation and Wess–Zumino variation both equal $+\frac{1}{24\pi^2}\int_M\alpha G\wedge G$.

[A1] The support of $\alpha$ lies where $\chi=1$, $\alpha\geq0$, and $\lambda^2\int_M\alpha\,d^4x=1$.

## Verification

**Given:** [F1], [A1], and the orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$.

1.1 On a neighborhood of $\operatorname{supp}\alpha$, $B=\lambda(x^0dx^1+x^2dx^3)$, so $G=dB=\lambda(dx^0\wedge dx^1+dx^2\wedge dx^3)$. The cutoff makes $B$ globally smooth and compactly supported. [given, A1, construct, algebra]

2.1 The two summands of $G$ have degree two, so they commute under the wedge product; each self-wedge is zero. Hence $G\wedge G=2\lambda^2dx^0\wedge dx^1\wedge dx^2\wedge dx^3$ on $\operatorname{supp}\alpha$. [step 1.1, algebra]

3.1 Integrating against $\alpha$ and using [A1] gives $\int_M\alpha G\wedge G=2\lambda^2\int_M\alpha\,d^4x=2$. Therefore both variations in [F1] equal $+2/(24\pi^2)=+1/(12\pi^2)$. [F1, A1, step 2.1, algebra] ∎
