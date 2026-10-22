---
id: ex-qftx-resolution-probability
kind: example
domain: mathematics
library: mathematics
title: Detector resolution changes a finite inclusive event
status: draft
origin: pipeline
dependency_level: 3
deps:
  - prop-qftx-soft-unresolved-cancellation
  - thm-logarithm-derivative-and-integral
  - thm-exponential-is-strictly-increasing
dependency_roles:
  prop-qftx-soft-unresolved-cancellation: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, full lecture notes"
      url: https://arxiv.org/pdf/math-ph/0511030
      locator: "§§5.3–5.6, PDF pp. 19–21; bosonic coherent-vector factorization."
    - title: "Physikalisch-Technische Bundesanstalt, Quantum Optics, Lecture 5"
      url: https://www.ptb.de/cms/fileadmin/internet/institute/fpm/Quantenoptik19/lecture_5.pdf
      locator: "PDF p. 3, subsection 'Photon statistics of coherent states': Eq. (12) gives the mean photon number; the following unnumbered display gives the normalized single-mode Poisson probabilities."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Example

In the finite-cutoff coherent model, fix $C>0$ and
$0<\varepsilon<\Delta<\Lambda$. The probability of no resolved emission is
$$P(\Delta)=\exp\!\left(-C\log\frac{\Lambda}{\Delta}\right).$$
For any two thresholds $\Delta_1<\Delta_2$ in $(\varepsilon,\Lambda)$,
$P(\Delta_1)<P(\Delta_2)$. This is an exact model law, not a reported
detector count or an empirical estimate.

## Example references

[[prop-qftx-soft-unresolved-cancellation]]

[Dereziński, §§5.3–5.6](https://arxiv.org/pdf/math-ph/0511030)

[PTB Quantum Optics, Lecture 5](https://www.ptb.de/cms/fileadmin/internet/institute/fpm/Quantenoptik19/lecture_5.pdf)

## Facts & Assumptions

**Given:** $C>0$ and $0<\varepsilon<\Delta_1<\Delta_2<\Lambda$ in the defined coherent model.

[F1] [[prop-qftx-soft-unresolved-cancellation]]: for every threshold $\Delta$, the no-resolved-emission probability is $\exp(-C\log(\Lambda/\Delta))$.

[F2] [[thm-logarithm-derivative-and-integral]]: $\log(b/a)=\int_a^b d\nu/\nu$ for $0<a<b$.

[F3] [[thm-exponential-is-strictly-increasing]]: the real exponential is strictly increasing.

## Verification

1.1 By [F1], $P(\Delta_j)=\exp(-C\log(\Lambda/\Delta_j))$ for $j=1,2$. By [F2], $\log(\Lambda/\Delta_1)-\log(\Lambda/\Delta_2) =\int_{\Delta_1}^{\Delta_2}d\nu/\nu>0$, so $-C\log(\Lambda/\Delta_2)>-C\log(\Lambda/\Delta_1)$ because $C>0$. [given, F1, F2, algebra]

2.1 Apply strict monotonicity [F3] to the two real exponents in step 1.1. It gives $P(\Delta_2)>P(\Delta_1)$. This compares two predictions of the specified model and asserts no empirical observation. [F3, step 1.1] ∎
