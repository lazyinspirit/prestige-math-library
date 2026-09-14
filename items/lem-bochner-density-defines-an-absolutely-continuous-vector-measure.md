---
id: lem-bochner-density-defines-an-absolutely-continuous-vector-measure
kind: lemma
title: "A Bochner density defines an absolutely continuous vector measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-banach-valued-vector-measure-and-variation, lem-bounded-variation-of-a-vector-measure-is-a-finite-measure, lem-bochner-integral-norm-inequality, def-bochner-integrable-function, thm-bochner-integrability-criterion, def-banach-valued-simple-function-and-integral, lem-banach-valued-simple-integral-is-well-defined, prop-indefinite-integral-of-an-integrable-function-is-countably-additive]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://webusers.imj-prg.fr/~gilles.pisier/ihp-pisier.pdf"
      locator: "Chapter 2, Proposition 2.1 and identity (2.2), complete proof, printed pp. 33--34"
pipeline_run: phase-2-next-18
---

## Statement

If $f:\Omega\to X$ is Bochner integrable and
$\nu_f(E):=\int_Ef\,d\mu$, then $\nu_f$ is a norm-countably additive vector
measure, $\nu_f\ll\mu$, and

$$|\nu_f|(E)=\int_E\|f\|\,d\mu$$

for every measurable $E$.

## Facts & Assumptions

[L1] Vector measures, variation, and absolute continuity have the stated norm and partition meanings ([[def-banach-valued-vector-measure-and-variation]]).

[L2] Bochner integrals satisfy the norm inequality ([[lem-bochner-integral-norm-inequality]]).

[L3] For an integrable scalar function, its indefinite integral is countably additive ([[prop-indefinite-integral-of-an-integrable-function-is-countably-additive]]).

[L4] A Bochner-integrable function has integrable scalar norm and one defining
$L^1$ simple approximation
([[thm-bochner-integrability-criterion]], [[def-bochner-integrable-function]]). If
$s=\sum_jx_j\mathbf1_{A_j}$ is integrable simple, then
$\int_Es=\sum_j\mu(E\cap A_j)x_j$
([[def-banach-valued-simple-function-and-integral]]), and this integral is
representation-independent and linear
([[lem-banach-valued-simple-integral-is-well-defined]]).

[L5] Bounded variation makes variation a finite measure ([[lem-bounded-variation-of-a-vector-measure-is-a-finite-measure]]).

## Proof

**Proof technique:** direct.

**Given:** A Bochner-integrable $f$ and the set function $\nu_f$ in the Statement.

1.1 Establish scalar control and absolute continuity. By [L4], $\|f\|$ is integrable. Put $\rho(E)=\int_E\|f\|$. By [L3], $\rho$ is a finite positive measure. By [L2], $\|\nu_f(E)\|\leq\rho(E)$, so $\nu_f\ll\mu$. For every finite partition $(E_j)$ of $E$, summing the same inequality gives $\sum_j\|\nu_f(E_j)\|\leq\rho(E)$; hence $|\nu_f|(E)\leq\rho(E)$ by [L1]. [given, L1, L2, L3, L4]

1.2 Fix a simple approximation for the reverse variation bound. Choose integrable simple $s_n$ with $\int\|f-s_n\|\to0$ as supplied by [L4]. For fixed $E$, partition $E$ into the nonzero level sets of $s_n$ and the remaining zero cell. [L4, choose]

2.1 Prove norm countable additivity without a new choice. For disjoint $(E_k)$ with union $E$, finite additivity follows from simple approximation and [L4]. Moreover $\|\nu_f(E)-\sum_{k=1}^N\nu_f(E_k)\| =\|\nu_f(E\setminus\bigcup_{k=1}^NE_k)\|\le \rho(E\setminus\bigcup_{k=1}^NE_k)\to0$ by countable additivity of the finite measure $\rho$. Thus $\nu_f$ is norm-countably additive. [L2, L3, step 1.1]

2.2 Prove the reverse variation inequality. On the partition from step 1.2, [L2] and [L4] give $|\nu_f|(E)\geq\int_E\|s_n\|-\int_E\|f-s_n\|$. The pointwise inequality $\|s_n\|\geq\|f\|-\|f-s_n\|$ then yields $|\nu_f|(E)\geq\rho(E)-2\int_E\|f-s_n\|$. Letting $n\to\infty$ proves $|\nu_f|(E)\geq\rho(E)$. [L2, L4, step 1.1, step 1.2]

3.1 Combine the bounds and close all cases. [L1, L5, step 1.1, step 2.1, step 2.2] Steps 1.1 and 2.2 give $|\nu_f|=\rho$; step 2.1 gives the required vector measure. In particular variation is finite (consistently with [L5]). For $E=\varnothing$, $f=0$, or a one-level simple density, the equality reduces respectively to $0=0$, $0=0$, or $\|\mu(E\cap A)x\|=\mu(E\cap A)\|x\|$. [L1, L5, step 1.1, step 2.1, step 2.2] ∎