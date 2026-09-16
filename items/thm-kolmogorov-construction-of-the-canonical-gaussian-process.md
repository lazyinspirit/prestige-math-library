---
id: thm-kolmogorov-construction-of-the-canonical-gaussian-process
kind: theorem
title: "Kolmogorov construction of the canonical Gaussian process"
status: published
origin: pipeline
deps: [lem-consistency-of-brownian-finite-dimensional-laws, thm-kolmogorov-extension-for-standard-borel-coordinate-spaces, cor-canonical-process-realizes-consistent-finite-dimensional-laws, def-gaussian-process, def-standard-borel-space, def-polish-space, thm-euclidean-space-complete, thm-rationals-countable, lem-rat-embeds-dense, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, Section 7.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "Perla Sousi, Advanced Probability, Section 6.2"
      url: "https://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
---

## Statement

Assume the Axiom of Choice. There is a probability measure on the cylinder
sigma-algebra of $\mathbb R^{[0,\infty)}$ under which the coordinate process
$X_t(x)=x(t)$ is centered Gaussian and
$$E[X_sX_t]=\min(s,t)\qquad(s,t\ge0).$$
This construction alone asserts neither continuous sample paths nor that the
coordinate process is Brownian motion.

## Facts & Assumptions

**Given:** The Axiom of Choice and the Brownian Gaussian finite-dimensional laws.

[F1] The centered Gaussian laws with covariance $\min(t_i,t_j)$ are well-defined and consistent under finite coordinate restriction. [[lem-consistency-of-brownian-finite-dimensional-laws]]

[F2] Assume AC. A consistent family on arbitrary standard-Borel coordinate spaces has a unique extension to the cylinder sigma-algebra. [[thm-kolmogorov-extension-for-standard-borel-coordinate-spaces]]

[F3] Under that extension measure, the coordinate process realizes precisely the prescribed finite-dimensional distributions. [[cor-canonical-process-realizes-consistent-finite-dimensional-laws]]

[F4] A process is Gaussian exactly when every finite evaluation vector has a possibly singular multivariate normal law. [[def-gaussian-process]]

[F5] A standard Borel structure may be presented by a Polish topology; the usual real metric is complete, and the embedded rationals form a countable dense subset. [[def-standard-borel-space]] [[def-polish-space]] [[thm-euclidean-space-complete]] [[thm-rationals-countable]] [[lem-rat-embeds-dense]]

## Proof

**Proof technique:** direct.

1.1 By [F5], the usual real line is complete and has the countable dense subset $\mathbb Q$, hence is Polish; its Borel measurable space is therefore standard Borel via the identity presentation. This verifies, rather than merely assumes, the coordinate-space hypothesis of [F2]. [F2, F5]

2.1 For every finite $F\subseteq[0,\infty)$, use [F1] to put on $\mathbb R^F$ the centered Gaussian law with covariance $(\min(s,t))_{s,t\in F}$; step 1.1 and [F2] give a probability $P$ on the cylinder sigma-algebra of $\mathbb R^{[0,\infty)}$ with exactly those marginals. The empty marginal has mass one on the singleton empty product. [step 1.1, F1, F2]

3.1 Let $X_t(x)=x(t)$. By [F3], every finite evaluation vector of $X$ has the prescribed centered Gaussian law. Thus [F4] makes $X$ Gaussian, and its one- and two-coordinate marginals give $E[X_t]=0$ and $E[X_sX_t]=\min(s,t)$, including $X_0=0$ almost surely because its variance is zero. [step 2.1, F3, F4]

4.1 The conclusion of [F2] is only a measure on the cylinder sigma-algebra realizing finite-coordinate laws; neither [F2] nor [F3] supplies a common full-measure set on which $t\mapsto X_t(x)$ is continuous. Consequently step 3.1 does not establish the path-continuity clause needed for Brownian motion. AC is used in [F1]–[F2] and the Gaussian interface [F4], including the choices inside arbitrary-index Kolmogorov extension; no stronger regularity is inferred from it. [step 3.1, F1, F2, F3, F4] ∎

## Source notes

Durrett, Section 7.1, Theorem 7.1.1 and the discussion immediately after it (printed pp. 355–356), separates the finite-dimensional Kolmogorov construction from the subsequent continuity theorem. Sousi, Section 6.2, makes the same separation before Theorem 6.4.
