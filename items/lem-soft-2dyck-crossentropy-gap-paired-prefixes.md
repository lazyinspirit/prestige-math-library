---
id: lem-soft-2dyck-crossentropy-gap-paired-prefixes
kind: lemma
title: "Paired-prefix lower bound for soft-attention 2DYCK prediction"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-hahn-hard-soft-attention-sequence-model
  - lem-soft-attention-one-symbol-influence
  - lem-paired-crossentropy-mixture-bound
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Hahn, Theoretical Limitations of Self-Attention in Neural Sequence Models, §6, Theorem 6 proof"
      url: "https://aclanthology.org/2020.tacl-1.11.pdf"
---

## Statement

Fix $p\in(0,1)$ and let $D_n$ be a probability law on valid length-$(n-1)$ prefixes over $\{(,),[, ]\}$. Let $E_n$ be a union of disjoint equal-mass pairs $\{x,x'\}$ in the support of $D_n$ such that each prefix in a pair ends in a closing bracket and has positive stack height after that bracket; $x'$ is obtained by changing the type of the top unmatched opening bracket in $x$, at a position before the final prefix symbol. Assume that, conditional on $x$, the next-symbol law assigns probability $p/2$ to each opening bracket and probability $1-p$ to the closing bracket matching its top unmatched opening, and that the law conditional on $x'$ swaps the two possible closing-bracket types while leaving the opening probabilities unchanged. If $D_n(E_n)\ge P_0>0$ for all sufficiently large $n$, then every fixed soft-attention predictor satisfying the one-symbol influence hypotheses has

$$
\liminf_{n\to\infty}\bigl(\mathcal L_n-\mathcal L_n^*\bigr)\ge P_0(1-p)\log 2,
$$

where $\mathcal L_n$ is expected next-symbol cross-entropy and $\mathcal L_n^*=\mathbb E_{x\sim D_n}H(r_x)$ is the optimal conditional cross-entropy. This lemma requires the positive-mass paired-prefix hypothesis; it does not assert that a particular PCFG supplies that hypothesis.

## Statement references

[Hahn, §6: paired-prefix argument and constant 2DYCK cross-entropy gap](https://aclanthology.org/2020.tacl-1.11.pdf)

## Facts & Assumptions

**Given:** The probability law $D_n$, disjoint pairs $E_n$, next-symbol distributions described in the Statement, $P_0>0$, and a fixed soft-attention predictor.

[F1] Predictions on inputs differing at one nonfinal token differ in $\ell^1$ by at most $C/n$ ([[lem-soft-attention-one-symbol-influence]]).

[F2] If two target laws on a five-symbol alphabet have predictions within $\epsilon$ in $\ell^1$, their mean cross-entropy is at least the entropy of the mean target law minus $\log(1+5\epsilon)$ ([[lem-paired-crossentropy-mixture-bound]]).

## Proof

1.1 For one pair, write $r$ for the target law at $x$ and $r'$ for the law at $x'$. Both assign $p/2$ to each opening token; $r$ assigns $1-p$ to one closing type and $r'$ assigns $1-p$ to the other. Thus $H(r)=H(r')$, while $\bar r=(r+r')/2$ splits the close mass evenly between the two closing types, giving $H(\bar r)-H(r)=(1-p)\log2$. [given, algebra]

2.1 Let $q=q_n(x)$ and $q'=q_n(x')$. Because the changed opening position is nonfinal, [F1] gives $\|q-q'\|_1\le C/n$. Applying [F2] yields pair-mean loss at least $H(\bar r)-\log(1+5C/n)$. Subtracting the pair's optimal mean loss $H(r)$ gives excess at least $(1-p)\log2-\log(1+5C/n)$. [step 1.1, F1, F2, algebra]

3.1 At every context outside $E_n$, cross-entropy is at least its conditional entropy by the finite-distribution inequality proved in [F2]. The pair-mass condition and step 2.1 therefore give $\mathcal L_n-\mathcal L_n^*\ge P_0((1-p)\log2-\log(1+5C/n))$ for all sufficiently large $n$. [step 2.1, given, F2, algebra]

4.1 Since $\log(1+5C/n)\to0$, taking the lower limit in step 3.1 proves the stated gap. [step 3.1, algebra] ∎