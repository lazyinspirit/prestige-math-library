---
id: ex-empirical-language-model-scaling-law
kind: example
title: "An observed-range language-model scaling fit"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-foundation-model-as-broad-pretraining-and-adaptation
  - def-transformer-encoder-decoder-layer
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Jared Kaplan et al., Scaling Laws for Neural Language Models, §§1.2, 2.1–2.3, 3.2–3.3, 6.1–6.3, §8, and Appendix A"
      url: "https://arxiv.org/html/2001.08361"
---

## Example

Kaplan et al. measured held-out next-token cross-entropy for decoder-only autoregressive Transformer language models trained on WebText2. Here a decoder-only model uses a causal decoder stack and assigns a next-token conditional distribution given earlier tokens; its sequence likelihood factors into those next-token probabilities. Let $N$ be the paper’s non-embedding parameter count, $D$ the training dataset size in tokens, and $L$ the held-out test loss. The tested model sizes range from $768$ to $1.5\times10^9$ non-embedding parameters, and tested dataset sizes range from $22\times10^6$ to $23\times10^9$ tokens. WebText2 contains $20.3$ million documents and $2.29\times10^{10}$ tokens, of which $6.6\times10^8$ were reserved for testing.

The paper reports three separate empirical one-variable fits, each for its stated regime, rather than one joint formula. For parameter-limited models trained to convergence on sufficiently large data,
$$
L(N)\approx\left(\frac{N_c}{N}\right)^{\alpha_N},\qquad \alpha_N\approx0.076,\qquad N_c\approx8.8\times10^{13}\text{ non-embedding parameters}.
$$
For large models trained on a limited dataset with early stopping,
$$
L(D)\approx\left(\frac{D_c}{D}\right)^{\alpha_D},\qquad \alpha_D\approx0.095,\qquad D_c\approx5.4\times10^{13}\text{ tokens}.
$$
For compute-efficient training with a sufficiently large dataset and an optimally sized model, the source uses its critical-batch-adjusted non-embedding compute estimate $C_{\min}=6NB_{\mathrm{crit}}S$, where $B_{\mathrm{crit}}$ is the critical batch size in tokens and $S$ is the number of training steps. Its fitted compute curve is
$$
L(C_{\min})\approx\left(\frac{C_c^{\min}}{C_{\min}}\right)^{\alpha_{C_{\min}}},\qquad \alpha_{C_{\min}}\approx0.050,\qquad C_c^{\min}\approx3.1\times10^8\text{ PF-days}.
$$
The compute fit spans eight orders of magnitude in $C_{\min}$. The reported compute-allocation fits are $N_{\mathrm{opt}}\propto C_{\min}^{0.73}$, $B_{\mathrm{crit}}\propto C_{\min}^{0.24}$, and $S_{\min}\propto C_{\min}^{0.03}$; the last exponent is sufficiently small that the authors say it may be consistent with zero. The paper’s table labels the reported S-min relation as a lower bound. The paper also gives a separate model-derived compute-loss exponent of about $0.054$; it is not the empirical fit value $0.050$. The scale constants depend on vocabulary and tokenization.

For any doubling that stays within a fit’s measured range, the corresponding fitted curve predicts a loss ratio of $2^{-0.076}$, $2^{-0.095}$, or $2^{-0.050}$ in its respective regime. Applying any curve beyond its reported range, or interpreting a smooth loss fit as a prediction about an unmeasured capability, is extrapolation. The paper reports similar model-size trends on a finite set of other text datasets after WebText2 training, but this is not a universal transfer or reliability guarantee under distribution shift. These are empirical fits, not general theorems about emergent capability, downstream-task performance, other modalities, or universally optimal compute allocation.

## Example references

[[def-foundation-model-as-broad-pretraining-and-adaptation]]: gives the report’s qualitative foundation-model usage and states that pretraining loss entails no general capability or transfer guarantee.

[[def-transformer-encoder-decoder-layer]]: defines the decoder stack and its causal mask; this example imports no expressivity or universality theorem.

[Kaplan et al., *Scaling Laws for Neural Language Models*, §§1.2, 2.1–2.3, 3.2–3.3, 6.1–6.3, §8, and Appendix A](https://arxiv.org/html/2001.08361): empirical one-variable fits, parameter and dataset ranges, batch-adjusted compute definition, allocation fits, and stated limits.

## Facts & Assumptions

**Given:** Each reported curve is a fitted empirical relation used only in its stated training regime. Its scale variable is positive, and its exponent is the approximate value stated in the example.

[F1] [[def-foundation-model-as-broad-pretraining-and-adaptation]]: a foundation model is broadly pretrained and adapted to downstream tasks; the definition guarantees no downstream performance from a pretraining loss.

[F2] [[def-transformer-encoder-decoder-layer]]: a decoder layer applies masked self-attention, its causal mask admits keys only at positions $j\le i$, and a decoder stack is a finite composition of such layers.

## Verification

1.1 For $x,x_c,\lambda>0$ and a fitted power curve $\widehat L(x)=(x_c/x)^\alpha$, exponent laws give $\widehat L(\lambda x)/\widehat L(x)=((x_c/(\lambda x))/(x_c/x))^\alpha=\lambda^{-\alpha}$. [given, algebra]

2.1 Set $\lambda=2$ and use in turn $(x,\alpha)=(N,0.076)$, $(D,0.095)$, and $(C_{\min},0.050)$ in their respective regimes; the fitted ratios are $2^{-0.076}$, $2^{-0.095}$, and $2^{-0.050}$. The allocation fits similarly multiply $N_{\mathrm{opt}}$, $B_{\mathrm{crit}}$, and $S_{\min}$ by $2^{0.73}$, $2^{0.24}$, and $2^{0.03}$ when $C_{\min}$ doubles. These substitutions unpack the empirical fits only; [F1] and [F2] do not turn them into transfer or architecture theorems. [given, F1, F2, step 1.1, algebra] ∎
