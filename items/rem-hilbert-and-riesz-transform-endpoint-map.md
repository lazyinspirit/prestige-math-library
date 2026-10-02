---
id: rem-hilbert-and-riesz-transform-endpoint-map
kind: remark
title: "Endpoint map for Hilbert and Riesz transforms"
status: draft
origin: pipeline
deps: [thm-marcel-riesz-conjugate-function-theorem, cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity, cor-riesz-transforms-are-ltwo-bounded]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapters 12 and 20, printed pp. 67-71 and 113-119"
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Section 5.1.3, Remark 5.1.9, printed p. 322"
---

## Statement

This page proves the strict-range facts for the periodic conjugate operator and
the $L^2$ facts for the line Hilbert transform and the Euclidean Riesz
transforms: [[thm-marcel-riesz-conjugate-function-theorem]] bounds the conjugate
operator on $L^p(\mathbb T)$ for $1<p<\infty$ and records the failure of
compatible strong-type $L^1$ and $L^\infty$ extensions;
[[cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity]]
identifies the line Hilbert transform as the $L^2$ multiplier by
$-i\operatorname{sgn}$ with $H^2=-I$; and
[[cor-riesz-transforms-are-ltwo-bounded]] gives the Euclidean $L^2$ contractions
with $\sum_jR_j^2=-I$.

Three distinct endpoints are deliberately **not** settled here, and the reader
should not read this page as a negative statement about them. First, weak
$(1,1)$ bounds, the real-line strict-range $L^p$ theory for the line and Riesz
transforms, and the almost-everywhere convergence of truncated integrals are
deferred to the later Calderón–Zygmund decomposition and singular-integrals
material, which supplies the covering and Calderón–Zygmund kernel estimates
this page stops short of. Second, the real Hardy space endpoint belongs to the
later real Hardy space and maximal-function material. Third, the bounded
mean-oscillation endpoint belongs to the later BMO material. Each of those
later pages is named here by title only; no result from them is used as a
premise anywhere on this page.

Two further distinctions are recorded. The periodic conjugate operator is
presented through the circle's zero mode: constants lie in its kernel and the
multiplier vanishes at frequency $0$, whereas on the line the corresponding
signum multiplier vanishes on a Lebesgue-null singleton and the $L^2$ square
identity holds with no zero-mode exception. The line Hilbert and Riesz endpoint questions are distinct from the circle's
partial-sum operator norms. For the periodic conjugate operator itself,
however, the Lebesgue-constant lower bound above is used to rule out compatible
strong $L^1$ and $L^\infty$ extensions.

Finally, the companion examples page constructs the interval indicator whose
Hilbert transform is $\pi^{-1}\log|x/(x-1)|$ and uses it to refute a bounded
strong-type $L^1\to L^1$ action and a bounded $L^\infty\to L^\infty$ action
compatible with the $L^2$ transform. Those computations refute **strong-type**
mapping only: they are consistent with a weak $(1,1)$ bound and with a
bounded BMO-valued endpoint, and they say nothing against the deferred results
named above.
