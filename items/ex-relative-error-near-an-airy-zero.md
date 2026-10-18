---
id: ex-relative-error-near-an-airy-zero
kind: example
title: Relative error becomes unavailable at an Airy zero
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-airy-functions-have-negative-real-zeros, thm-certified-airy-enclosures, def-certified-evaluation-result-contract, lem-airy-series-coefficient-recurrence-and-tail]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: DLMF, §9.17(i), numerical evaluation of Airy functions
      url: https://dlmf.nist.gov/9.17
    - title: DLMF, §§9.9(i) and 9.17(i)
      url: https://dlmf.nist.gov/9.9
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §2
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 8
---

## Statement

There is a real $\xi<0$ with $\operatorname{Ai}(\xi)=0$. An absolute
enclosure remains meaningful there, but the relative certificate in
[[def-certified-evaluation-result-contract]] cannot be reported by an
enclosure containing zero. Near $\xi$, relative certification requires a
radius proportional to the small value $|\operatorname{Ai}(x)|$ and therefore
requires increasingly fine absolute enclosures.

## Facts & Assumptions

**Given:** A negative real Airy zero $\xi$ and a real input $x$ near $\xi$.

[F1] [[lem-airy-functions-have-negative-real-zeros]]: some $\xi<0$ satisfies
$\operatorname{Ai}(\xi)=0$.

[F2] [[lem-airy-series-coefficient-recurrence-and-tail]]:
$\operatorname{Ai}$ is entire, hence continuous on the real axis.

[F3] [[def-certified-evaluation-result-contract]]: relative certification
requires $0\notin B$ and $\operatorname{rad}(B)/d(B,0)\le\varepsilon_r$.

[F4] [[thm-certified-airy-enclosures]]: successful Airy evaluations provide
absolute enclosures even when no relative certificate is available.

## Proof
1.1 At $x=\xi$, every enclosure containing the exact value also contains $0$. Therefore the zero-exclusion condition in [F3] fails, while [F4] still permits an absolute-radius success enclosure. [F1, F3, F4]

2.1 For any $\eta>0$, continuity in [F2] at the zero [F1] gives a neighborhood of $\xi$ on which $|\operatorname{Ai}(x)|<\eta$. Whenever a relative certificate succeeds for an enclosure $B$ of such a value, [F3] implies $\operatorname{rad}(B)\le\varepsilon_r d(B,0)\le\varepsilon_r|\operatorname{Ai}(x)| <\varepsilon_r\eta$. Thus the required absolute radius tends to zero as the input approaches $\xi$. [F1, F2, F3] ∎