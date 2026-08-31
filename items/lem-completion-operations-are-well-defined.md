---
id: lem-completion-operations-are-well-defined
kind: lemma
title: "The Cauchy-class operations of a normed-space completion are well defined"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-metric-completion, thm-metric-completion-exists,
       def-norm-and-normed-space,
       lem-reverse-triangle-inequality-in-a-normed-space,
       thm-algebra-of-limits, lem-limit-preserves-order,
       lem-limit-unique, def-real-limit]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-27
---

## Statement

In the published Cauchy-sequence model of the metric completion of a normed
space, if $[x_n]$ and $[y_n]$ denote equivalence classes of Cauchy sequences,
then

$$[x_n]+[y_n]:=[x_n+y_n],\qquad \lambda[x_n]:=[\lambda x_n],\qquad \|[x_n]\|:=\lim_n \|x_n\|$$

are well defined.

## Facts & Assumptions

**Given:** A normed space $X$; Cauchy sequences $(x_n)$, $(x'_n)$, $(y_n)$, $(y'_n)$ in $X$ with $[x_n]=[x'_n]$ and $[y_n]=[y'_n]$ in the published completion model; and a scalar $\lambda$.

[L1] The published metric completion is the quotient of the Cauchy sequences by the relation $\rho((u_n),(v_n))=0$, where $\rho((u_n),(v_n))=\lim_n\|u_n-v_n\|$ in the norm metric ([[thm-metric-completion-exists]], [[def-metric-completion]]).

[L2] The norm satisfies the triangle inequality, absolute homogeneity, and the reverse triangle inequality ([[def-norm-and-normed-space]], [[lem-reverse-triangle-inequality-in-a-normed-space]]).

[L3] A real Cauchy sequence converges, limits are unique, and limits preserve non-strict inequalities and addition ([[def-real-limit]], [[lem-limit-unique]], [[lem-limit-preserves-order]], [[thm-algebra-of-limits]]).

## Proof

**Proof technique:** direct.

1.1 Termwise sums and scalar multiples of Cauchy sequences are again Cauchy: the triangle inequality gives $\|(x_n+y_n)-(x_m+y_m)\|\le \|x_n-x_m\|+\|y_n-y_m\|$, and absolute homogeneity gives $\|\lambda x_n-\lambda x_m\|=|\lambda|\,\|x_n-x_m\|$. [L2]

1.2 Likewise $\|\lambda x_n-\lambda x'_n\|=|\lambda|\,\|x_n-x'_n\|$ for every $n$, so [L1] and [L3] give $\rho((\lambda x_n),(\lambda x'_n))=0$. Hence scalar multiplication on classes is representative-independent. [L1, L2, L3]

1.3 Because $(x_n)$ is Cauchy, the reverse triangle inequality in [L2] gives $\bigl|\|x_n\|-\|x_m\|\bigr|\le \|x_n-x_m\|$; so the real sequence $(\|x_n\|)$ is Cauchy and therefore convergent by [L3]. [L2, L3]

2.1 If $[x_n]=[x'_n]$ and $[y_n]=[y'_n]$, then $\|(x_n+y_n)-(x'_n+y'_n)\|\le \|x_n-x'_n\|+\|y_n-y'_n\|$ for every $n$; passing to limits and using [L1] and [L3] gives $\rho((x_n+y_n),(x'_n+y'_n))=0$. So addition on classes is representative-independent. [step 1.1, L1, L2, L3]

3.1 If $[x_n]=[x'_n]$, then $\bigl|\|x_n\|-\|x'_n\|\bigr|\le \|x_n-x'_n\|$ for every $n$; the right-hand side tends to $0$ by [L1], so the two real norm sequences have the same limit by [L3]. Thus $\|[x_n]\|:=\lim_n\|x_n\|$ is well defined. [step 1.3, L1, L2, L3] ∎
