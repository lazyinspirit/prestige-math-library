---
id: ex-fixed-length-vs-unbounded-sequence-limits
kind: example
title: "Fixed-length universality and unbounded sequence limits"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - thm-fixed-width-transformer-lp-universality
  - thm-hard-attention-languages
  - thm-soft-attention-parity-chance-limit
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
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

Fix a maximum length $N$. For each individual length $n\le N$, the fixed-length theorem concerns a compact-domain approximation problem and permits a Transformer chosen for that particular $n$ and error tolerance. The hard-attention language limit instead fixes one finite-depth model, with one set of parameter maps independent of length, and rules out exact recognition of PARITY and 2DYCK for all sufficiently long strings. The soft-attention parity result fixes one model across lengths and bounds its limiting expected cross-entropy on the stated parity source. These statements concern different quantifiers and different notions of approximation.

## Example references

[Yun et al., Theorems 2–3: fixed-length integrated $L_p$ approximation](https://arxiv.org/pdf/1912.10077)

[Hahn, §5, Corollary 2: fixed-depth hard-attention language limits](https://aclanthology.org/2020.tacl-1.11.pdf)

## Facts & Assumptions

**Given:** A finite cutoff $N$, the fixed-length Transformer approximation theorem, and the fixed-model hard-attention PARITY theorem.

[F1] At each fixed $n,d$, continuous compactly supported permutation-equivariant maps admit integrated $L_p$ approximants with two heads of size one and width-four ReLU feedforward layers; trainable positions give the compact-domain non-equivariant version ([[thm-fixed-width-transformer-lp-universality]]).

[F2] No single fixed finite-depth hard-attention model with parameters fixed independently of input length recognizes PARITY or 2DYCK on all sufficiently long strings ([[thm-hard-attention-languages]]).

[F3] For the stated parity next-symbol distribution, every fixed soft-attention predictor has limiting expected cross-entropy at least the unigram chance entropy, attained by the constant predictor ([[thm-soft-attention-parity-chance-limit]]).

## Verification

1.1 Apply [F1] separately for each $n\le N$ and each chosen tolerance. The theorem's existential network may depend on both $n$ and the tolerance; it gives no shared parameter set or depth bound uniform in $n$. [given, F1, construct]

1.2 [F2] fixes one model across all lengths and asserts failure of exact recognition for sufficiently large PARITY and 2DYCK inputs. [F3] likewise fixes one soft model and concerns expected cross-entropy on a specified source. Neither statement contradicts the separate fixed-length approximation claims, whose metric is integrated $L_p$ error and whose parameters may vary with length. [step 1.1, F2, F3, algebra] ∎
