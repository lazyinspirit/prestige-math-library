---
id: ex-fixed-length-vs-unbounded-sequence-limits
kind: example
title: "Fixed-length universality and unbounded sequence limits"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-countable-choice
  - thm-fixed-width-transformer-lp-universality
  - thm-hard-attention-languages
  - thm-soft-attention-parity-chance-limit
axiom_use: "Countable Choice is inherited only from the fixed-length theorem for its countably additive Lebesgue integral; this example makes no additional infinite selection."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: "Yun et al., Theorems 2–3: fixed-length approximation"
      url: "https://arxiv.org/pdf/1912.10077"
    - title: "Hahn, Theorems 1 and 6: hard and soft sequence limits"
      url: "https://aclanthology.org/2020.tacl-1.11.pdf"
---

## Example

Assume the Axiom of Countable Choice and fix an integer maximum length $N\ge2$. For each individual integer length $2\le n\le N$, the fixed-length theorem concerns a compact-domain approximation problem and permits a Transformer chosen for that particular $n$ and error tolerance. The hard-attention language limit instead fixes one finite-depth model, with one set of parameter maps independent of length, and rules out exact recognition of PARITY and 2DYCK for all sufficiently long strings. For each fixed source parameter $p\in(0,1)$, the soft-attention parity result fixes one model satisfying the one-symbol influence hypotheses across lengths and bounds its limiting expected cross-entropy on the stated parity source. These statements concern different quantifiers and different notions of approximation.

## Example references

[Yun et al., Theorems 2–3: fixed-length integrated $L_p$ approximation](https://arxiv.org/pdf/1912.10077)

[Hahn, §5, Corollary 2: fixed-depth hard-attention language limits](https://aclanthology.org/2020.tacl-1.11.pdf)

[[def-countable-choice]]: the inherited premise for the local integrated-Lebesgue approximation theorem.

## Facts & Assumptions

**Given:** Countable Choice, an integer cutoff $N\ge2$, the fixed-length Transformer approximation theorem, and the fixed-model hard-attention PARITY theorem.

[F1] Under Countable Choice, at each fixed $n\ge2$, $d\ge1$, and $1\le p<\infty$, continuous compactly supported permutation-equivariant maps admit integrated $L_p$ approximants with two heads of size one, width-four ReLU feedforward layers, and no layer normalization; trainable positions give the compact-domain non-equivariant version ([[thm-fixed-width-transformer-lp-universality]]).

[F2] No single fixed finite-depth hard-attention model with parameters fixed independently of input length recognizes PARITY or 2DYCK on all sufficiently long strings ([[thm-hard-attention-languages]]).

[F3] For the stated parity next-symbol distribution with fixed source parameter in $(0,1)$, every fixed soft-attention predictor satisfying the one-symbol influence hypotheses has limiting expected cross-entropy at least the unigram chance entropy, attained by the constant predictor ([[thm-soft-attention-parity-chance-limit]]).

## Verification

1.1 Under Countable Choice, apply [F1] separately for each integer $2\le n\le N$, each fixed $d\ge1$, each $1\le p<\infty$, and each chosen positive tolerance, to a target satisfying its corresponding continuity, compactness, and symmetry hypotheses. The theorem's existential network may depend on both $n$ and the tolerance; it gives no shared parameter set or depth bound uniform in $n$. [given, F1, construct]

2.1 [F2] fixes one model across all lengths and asserts failure of exact recognition for sufficiently large PARITY and 2DYCK inputs. [F3] likewise fixes one soft model and concerns expected cross-entropy on a specified source. Neither statement contradicts the separate fixed-length approximation claims, whose metric is integrated $L_p$ error and whose parameters may vary with length. [step 1.1, F2, F3, algebra] ∎
