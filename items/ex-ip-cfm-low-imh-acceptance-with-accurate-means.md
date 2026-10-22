---
id: ex-ip-cfm-low-imh-acceptance-with-accurate-means
kind: example
title: Posterior summaries close to DRAM with low independent-MH acceptance
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - lem-metropolis-hastings-density-ratio
  - def-axiom-of-choice
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: >-
  The reported experiment is empirical. AC is required only by the general
  density-based Metropolis–Hastings interface used to interpret its correction;
  no theorem that the observed finite-run summaries equal the posterior is
  asserted.
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "Jan Blechschmidt, Oliver G. Ernst, Moritz Poguntke, and Björn Sprungk, Flow Matching for Fast Posterior Sampling in Bayesian Inverse Problems"
      url: "https://arxiv.org/pdf/2610.02377"
      locator: "§4.2.1, Fig. 6 and Table 1 (PDF pp. 15–16): $m=256$, noise variance $10^{-5}$, $n_{KL}=128$, baseline MLP with 800 hidden units and four FM-IMH acceptance rates; §4.2.2, normalized observation radii and prior-predictive training-tail frequencies; §4.2.1, relative $L^2$ comparison of posterior means and 95% bands with DRAM."
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://probability.ca/jeff/ftpdir/probsurv.pdf"
      locator: "§2.1 and Proposition 2: independent Metropolis–Hastings acceptance and invariant target-flow construction."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

Assume the Axiom of Choice for the general density-based Metropolis–Hastings interface. In the stationary-diffusion inverse-problem experiment with $m=256$ observations, noise variance $\gamma^2=10^{-5}$, and $n_{KL}=128$ prior modes, use the baseline conditional-flow-matching MLP with 800 hidden units. The reported flow-matching independent-Metropolis–Hastings acceptance rates for four different true parameters are respectively $0.66\%$, $11.21\%$, $5.97\%$, and $5.47\%$. In this same experiment, the reported posterior means and 95\% bands agree with the DRAM reference to between $0.8\%$ and $1.8\%$ in relative $L^2$. The first truth is a prior-predictive tail observation: its normalized radius is $2.53$, the median training radius is $0.85$, and only $0.12\%$ of the two million training observations have a larger radius. This reported case shows that close posterior means and bands do not by themselves imply high independent-Metropolis–Hastings acceptance or establish full posterior accuracy.

## Example references

[[lem-metropolis-hastings-density-ratio|A density-based Metropolis–Hastings correction accepts according to the common-density target/proposal ratio.]]

[Blechschmidt et al., §4.2.1–§4.2.2, Fig. 6 and Table 1](https://arxiv.org/pdf/2610.02377)

[Roberts and Rosenthal, §2.1 and Proposition 2](https://probability.ca/jeff/ftpdir/probsurv.pdf)

## Facts & Assumptions

**Given:** The reported setting and empirical quantities in the Statement.

[A1] Assume AC for the general common-density Metropolis–Hastings construction. [[def-axiom-of-choice]], [[lem-metropolis-hastings-density-ratio]]

[F1] In the stated $m=256$, $\gamma^2=10^{-5}$, $n_{KL}=128$ setting, Table 1 reports baseline MLP-800 acceptance rates $(0.66,11.21,5.97,5.47)\%$ for the four truths. [[Blechschmidt et al., §4.2.1, Fig. 6 and Table 1](https://arxiv.org/pdf/2610.02377)]

[F2] In the same Fig. 6 setting, the paper reports that the MLP's posterior means and 95\% bands match the DRAM reference between $0.8\%$ and $1.8\%$ in relative $L^2$. [[Blechschmidt et al., §4.2.1](https://arxiv.org/pdf/2610.02377)]

[F3] For the first truth the normalized observation radius is $2.53$ versus median training radius $0.85$, and the source reports that $0.12\%$ of the two million training observations have a still larger radius. It describes the sine observation as an extreme prior-predictive tail with almost no nearby training data. [[Blechschmidt et al., §4.2.2](https://arxiv.org/pdf/2610.02377)]

[F4] The acceptance figures are for the paper's independent-MH correction, which uses a flow-matching proposal and a density-based acceptance ratio; the general density-ratio interface is stated in the published MH lemma. [[lem-metropolis-hastings-density-ratio]]

## Verification

**Given:** [A1], [F1]–[F4] and the empirical qualifications in the Statement.

1.1 The source labels its proposal model as a conditional-flow-matching MLP. The four rates in [F1] are all below $12\%$, while the fourth is $5.47\%$ and the first is $0.66\%$. Thus the table itself records low acceptance across all four truths for this baseline configuration; these are the reported finite-experiment rates, not an asymptotic bound. [F1, given, algebra]

2.1 By [F2], posterior means and 95\% bands are nevertheless close to the DRAM reference in relative $L^2$. By [F3], the first observation lies far into the empirical prior-predictive tail, which accompanies the lowest rate. Under [A1], [F4] identifies the rates as those of the paper's density-based independent-MH correction. Hence this is a concrete reported case where close mean and band summaries coexist with low independent-MH acceptance; it does not prove that every low-acceptance flow has accurate summaries or that these summaries establish full-distribution accuracy. [A1, F1, F2, F3, F4, step 1.1, given] ∎
