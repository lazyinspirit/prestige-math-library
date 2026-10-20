---
id: thm-soft-attention-parity-chance-limit
kind: theorem
title: "Fixed soft attention has no parity advantage over the unigram predictor"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-hahn-hard-soft-attention-sequence-model
  - lem-paired-crossentropy-mixture-bound
  - lem-soft-attention-one-symbol-influence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Hahn, Theoretical Limitations of Self-Attention in Neural Sequence Models, §6, Theorem 6 proof"
      url: "https://aclanthology.org/2020.tacl-1.11.pdf"
---

## Statement

Fix $p\in(0,1)$. Generate a bit string by a two-state process whose state is the parity of the number of emitted $1$s: in the even state it terminates with probability $p$, and otherwise emits $0$ or $1$ with probability $(1-p)/2$ each; in the odd state it emits $0$ or $1$ with probability $1/2$ each and cannot terminate. For each $n\ge2$, let $D_n$ be the law of length-$(n-1)$ prefixes conditional on the process emitting at least $n-1$ bits, and ask a fixed soft-attention model to predict the next symbol in $\{\mathtt{eos},0,1\}$ from that prefix followed by the end marker. Let $r_x$ be the true next-symbol distribution and let $q_n(x)$ be the model's predicted distribution. Define cross-entropy by $\operatorname{CE}(r,q)=-\sum_a r(a)\log q(a)$, with value $+\infty$ if $r(a)>0=q(a)$, and entropy by $H(r)=-\sum_{a:r(a)>0}r(a)\log r(a)$. Then every fixed soft-attention model satisfying the one-symbol influence hypotheses has

$$
\liminf_{n\to\infty}\mathbb E_{x\sim D_n}\operatorname{CE}(r_x,q_n(x))\ge H(u),\qquad
u(\mathtt{eos})=p/2,\quad u(0)=u(1)=(2-p)/4.
$$
A constant predictor $q_n(x)=u$ attains $H(u)$ for every $n$, so $H(u)$ is the sharp unigram chance level. An arbitrary fixed predictor may have greater cross-entropy; this result gives no soft-attention exact-classification impossibility theorem.

## Statement references

[Hahn, §6: the parity automaton, next-token targets, and the soft-attention parity limit](https://aclanthology.org/2020.tacl-1.11.pdf)

## Facts & Assumptions

**Given:** The parity source process and prefix law in the Statement, and a fixed soft-attention next-token predictor satisfying the one-symbol influence hypotheses.

[F1] Changing one nonfinal token changes the predicted next-token probability vector by at most $C/n$ for a constant independent of $n$ ([[lem-soft-attention-one-symbol-influence]]).

[F2] The model reads an end marker at its final input position, and the last bit of the prefix is therefore a nonfinal input token ([[def-hahn-hard-soft-attention-sequence-model]]).

[F3] If two next-token predictions differ by at most $\epsilon$ in $\ell^1$, their average cross-entropy on target laws $r,s$ is at least $H((r+s)/2)-\log(1+|\Sigma|\epsilon)$ ([[lem-paired-crossentropy-mixture-bound]]).

## Proof

1.1 If a prefix $x$ has even parity, its next-symbol distribution is $r_e=(p,(1-p)/2,(1-p)/2)$ in the coordinate order $(\mathtt{eos},0,1)$. If it has odd parity, the distribution is $r_o=(0,1/2,1/2)$. Their equal mixture is $u=(r_e+r_o)/2$ with the coordinates stated. [given, algebra]

1.2 Pair each prefix $w0$ with $w1$, where $w$ has length $n-2$. Both extensions have equal probability: their shared first $n-2$ symbols fix the same pre-emission parity, and the source emits the final bit values with equal probability in either state, conditional on emitting a bit. Each pair contains one even and one odd prefix; conditioning on length at least $n-1$ uses one common normalizing constant, so the two members still have equal $D_n$ mass. [given, construct, algebra]

2.1 Let $q=q_n(w0)$ and $q'=q_n(w1)$. By [F1]–[F2], $\|q-q'\|_1\le C/n$. The pair's mean cross-entropy is $\Phi(q,q')=\tfrac12\operatorname{CE}(r_e,q)+\tfrac12\operatorname{CE}(r_o,q')$. [step 1.1, step 1.2, F1, F2]

2.2 Applying [F3] with $\epsilon=C/n$ bounds the pair mean cross-entropy below by $H(u)-\log(1+3C/n)$, which tends to $H(u)$. [step 2.1, step 1.1, F3, algebra]

3.1 Every prefix pair has the same limiting lower bound from step 2.2. Averaging over the equal-mass pairs in step 1.2 proves the expected cross-entropy lower bound. The constant predictor $u$ has expected loss $H(u)$ because the paired target marginal is $u$; it is realized by fixed logits $\log u(a)$, whose softmax is $u$. Thus the lower bound is sharp, while no upper bound at $H(u)$ is asserted for every fixed model. [step 2.2, step 1.2, algebra] ∎
