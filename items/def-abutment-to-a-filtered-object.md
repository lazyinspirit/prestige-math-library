---
id: def-abutment-to-a-filtered-object
kind: definition
title: Abutment to a filtered object
deps: ["def-associated-graded-object-of-a-filtered-object", "def-limiting-cycles-boundaries-and-e-infinity", "def-spectral-sequence-stabilization-at-a-bidegree"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
---



## Definition

An **abutment to a filtered family** $H_n$ consists of specified isomorphisms
$$E^\infty_{p,q}\xrightarrow{\sim}\operatorname{gr}^F_pH_{p+q}=F_pH_{p+q}/F_{p-1}H_{p+q}.$$
Use [[def-associated-graded-object-of-a-filtered-object]] for the graded pieces, and [[def-limiting-cycles-boundaries-and-e-infinity]] or [[def-spectral-sequence-stabilization-at-a-bidegree]] for the stable terms. On this page every asserted convergence has a finite filtration in each total degree. In particular it is exhaustive and separated. The associated graded family is not identified with the unfiltered target. A morphism of abutments is a filtered map on the $H_n$ whose maps on these quotients agree with the stable-page maps under the specified identifications. For decreasing cohomological filtrations replace the quotient by $F^pH^{p+q}/F^{p+1}H^{p+q}$.

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.
