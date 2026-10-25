---
id: rem-mihlin-does-not-assert-strong-endpoint-bounds
kind: remark
title: "Mihlin endpoints: weak (1,1), but no general strong endpoint bounds"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-countable-choice, thm-mihlin-fourier-multiplier-theorem, thm-calderon-zygmund-operator-has-weak-type-one-one]
forward_refs: [cex-calderon-zygmund-strong-lone-bound-fails, cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader plus completed current item adjudication proof read; item rem-mihlin-does-not-assert-strong-endpoint-bounds; evidence research/frontier-38-owner-30-reader-5.md, research/frontier-38-owner-30-reader-findings-5.json, research/frontier-38-owner-30-alpha-batch-5-5a-decisions.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 6.2.7, printed p. 446, including its weak (1,1) conclusion; Theorem 5.3.3, printed pp. 359–362"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). The displayed estimate in
[[thm-mihlin-fourier-multiplier-theorem]] gives strong $L^p$ bounds for
$1<p<\infty$. Its proof also identifies $T_m$ as a Calderón–Zygmund operator
with Hörmander constant at most $C_nA$ and $L^2$ norm $\|m\|_\infty$.
Consequently [[thm-calderon-zygmund-operator-has-weak-type-one-one]] gives the
weak endpoint
$$|\{|T_mf|>\lambda\}|\le C_n(A+\|m\|_\infty)\lambda^{-1}\|f\|_1\qquad(f\in L^1,\ \lambda>0),$$
where $A$ is the derivative-bound constant in the Mihlin theorem. This is a
bound for the multiplier operator; it does not require the stronger
principal-value and pointwise kernel hypotheses used for maximal truncations.

## Remarks

No general strong $L^1$ or $L^\infty$ bound follows. In dimension one,
$m(\xi)=-i\operatorname{sgn}\xi$ satisfies the Mihlin hypotheses despite its
jump at the origin, and its Hilbert transform has the weak endpoint above
while the interval-indicator counterexamples refute compatible strong
$L^1$ and $L^\infty$ bounds
([[cex-calderon-zygmund-strong-lone-bound-fails]],
[[cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity]]).
A jump at a nonzero frequency violates the Mihlin smoothness hypothesis;
boundedness of a symbol alone does not imply a strong $L^1$ bound.
