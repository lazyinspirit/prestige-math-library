---
id: cor-misspecified-iid-bvm-under-kv-regularity
kind: corollary
title: Misspecified iid LAN gives a BvM limit when the posterior has the required parameter rate
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - thm-lan-implies-total-variation-bvm
  - thm-misspecified-iid-lan-under-kv-smoothness
justified_by: []
proof_strategy: direct
axiom_use: "Inherits AC only for the Gaussian comparison law required by the LAN-to-BvM theorem. No additional axiom is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises theorem under misspecification, Theorem 2.1 and Lemma 2.1"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
    - title: "A. W. van der Vaart, Asymptotic Statistics, Chapter 10, §10.2, Theorem 10.1 and proof"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/asymp/bayes.pdf"
---

## Statement

Assume the hypotheses of [[thm-misspecified-iid-lan-under-kv-smoothness]] at
$\theta^*$, and assume AC. Let a proper prior have a Lebesgue density
continuous and strictly positive near $\theta^*$, and suppose the posterior
has finite positive evidence almost surely and contracts in Euclidean
parameter norm outside $n^{-1/2}M_n$ for every deterministic $M_n\to\infty$.
Here the posterior is based on the iid likelihood $\prod_{i=1}^np_\theta(X_i)$.
Then its law of $\sqrt n(\theta-\theta^*)$ is
$$o_{P_0}(1)\text{ in total variation from }N_d(V^{-1}S_n,V^{-1}),\qquad S_n=n^{-1/2}\sum_{i=1}^ns(X_i).$$
The parameter-rate contraction is an explicit premise. Ordinary consistency
at a KL projection alone does not discharge it.

## Facts & Assumptions

**Given:** The local smoothness, finite KL-minimizer, score, and contrast hypotheses of the referenced iid LAN theorem; AC; the stated proper prior, evidence, and every-diverging-radius parameter-contraction hypotheses.

[F1] [[thm-misspecified-iid-lan-under-kv-smoothness]]: Under its hypotheses, the iid log-likelihood ratio has a compact-uniform $n^{-1/2}$ LAN expansion with central vector $S_n$ and positive-definite curvature matrix $V$.

[F2] [[thm-lan-implies-total-variation-bvm]]: Compact-uniform LAN, a prior density continuous and positive at the interior center, proper posterior, and contraction outside $\delta_nM_n$ for every $M_n\to\infty$ imply the event-supremum total-variation BvM limit.

## Proof

**Given:** The hypotheses of the two cited theorems and the posterior-rate condition in the Statement.

1.1 By [F1], take $\delta_n=n^{-1/2}$ and use $S_n$ as the central vector $\Delta_n$ in [F2]. The local LAN theorem supplies the required compact-uniform expansion with curvature $V$ and proves $S_n=O_{P_0}(1)$; [F2] therefore centers the Gaussian at $V^{-1}S_n$. [F1, given]

2.1 For each $n$, the iid sample experiment is dominated by the finite product $\mu^{\otimes n}$, with densities $p_{0,n}(x_1,\ldots,x_n)=\prod_i p_0(x_i)$ and $p_{n,\theta}(x_1,\ldots,x_n)=\prod_i p_\theta(x_i)$. Iterated integration gives the product-law formula on measurable rectangles, so uniqueness of product measures identifies these as densities of $P_0^{\otimes n}$ and $P_\theta^{\otimes n}$. Thus the LAN expansion in [F1] is the log-likelihood ratio for this iid experiment. The prior, evidence, interior-point, and parameter-tail hypotheses in the Statement are exactly the remaining hypotheses of [F2]. Applying [F2] gives the claimed total-variation limit. [F2, step 1.1, given] ∎
