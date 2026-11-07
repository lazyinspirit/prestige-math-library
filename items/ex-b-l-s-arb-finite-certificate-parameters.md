---
id: ex-b-l-s-arb-finite-certificate-parameters
kind: example
title: Finite Arb Certificate Parameters in the BLS Computation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "A. Booker, M. Lee, and A. Strömbergsson, Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture"
      url: "https://arxiv.org/pdf/1803.06016v2"
      locator: "§5, numerical remarks: class numbers through e²⁰, X≤40, and M=200."
proof_strategy: direct
axiom_use: None. These deductions concern the written scope of dated source reports, not an open conjecture or a new numerical result.
---

## Example

In §5 of the BLS paper, the authors report the parameter choice $M=200$ with values $X\le40$. They describe class-number inputs using the expressions $\mathbb Q(\sqrt{t^2\pm4})$ and the quoted cutoff “$t\le e^{20}$”. These are reported parameter limits in that source, not a claim here that any table, certificate, interval output or Selberg-eigenvalue computation has been locally replayed.

## Example references

[A. Booker, M. Lee, and A. Strömbergsson, *Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture*](https://arxiv.org/pdf/1803.06016v2)

## Facts & Assumptions

**Given:** The cached BLS §5 passage says “Taking $M=200$, various $X\le40$” and describes class-number inputs for the displayed quadratic expressions with cutoff $t\le e^{20}$. The present example records that passage only. It supplies no production transcript, raw interval results or proof of a numerical spectral claim.

## Proof

1.1 Reading the three reported cutoffs as source data yields exactly the parameter triple recorded in the example: the paper writes $M=200$, $X\le40$, and the cutoff $t\le e^{20}$. No evaluation of a class number or interval expression is needed to transcribe these parameters. [given, algebra]

2.1 A parameter choice specifies neither the resulting interval values nor the successful inequalities of a production certificate. Therefore this source report makes no assertion of a checked Selberg-eigenvalue result, availability of raw tables, or a local replay. In particular it adopts none of the unapproved level-880 or level-226 computation claims. [given, step 1.1, algebra] ∎

## Scope

Only four separately authorized finite-computation inputs exist for this run. This bibliographic example adds none. The unapproved BLS spectral computations retain their existing holds; neither this example nor a generic interval-algorithm soundness result supplies their missing production replay. No current web retrieval, full-paper reading or independent computation is claimed here.
