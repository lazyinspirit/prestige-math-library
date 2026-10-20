---
id: lem-soft-attention-one-symbol-influence
kind: lemma
title: "A nonfinal token has inverse-length influence under bounded soft attention"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-hahn-hard-soft-attention-sequence-model
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Hahn, Theoretical Limitations of Self-Attention in Neural Sequence Models, §6, Lemma 5 and proof"
      url: "https://aclanthology.org/2020.tacl-1.11.pdf"
---

## Statement

Fix a finite token alphabet and a fixed soft-attention sequence model with $L$ layers, $H$ heads per layer, fixed query/key/value matrices, and positionwise maps that are globally Lipschitz. Assume the token embeddings are bounded, the positional embeddings satisfy $\sup_i\|p_i\|_2<\infty$, and all model parameters are independent of the input length $n$. For two length-$n$ inputs with the same end marker at position $n$ and differing in only one token at a position $i<n$, there is a constant $C<\infty$, depending only on these bounds, matrices, maps, $L$, and $H$, such that their final hidden states satisfy

$$
\|y_n^{(L)}(x)-y_n^{(L)}(x')\|_2\le \frac{C}{n}.
$$

If a fixed globally Lipschitz map followed by softmax converts the final hidden state to next-token probabilities, then another constant $C'<\infty$ with the same allowed dependence satisfies $\|q_n(x)-q_n(x')\|_1\le C'/n$. No bound is asserted when the changed symbol is the final end marker, or when the number of layers, matrices, or their norms vary with $n$.

## Statement references

[Hahn, §6, Lemma 5 and proof: fixed depth and bounded embeddings give inverse-length influence](https://aclanthology.org/2020.tacl-1.11.pdf)

## Facts & Assumptions

**Given:** A fixed soft-attention model satisfying the bounds in the Statement, an input length $n\ge2$, and two inputs differing only at position $i<n$.

[F1] In each soft-attention head, the row attention weights are the softmax of the query-key scores, sum to one, and the head output is their weighted sum of value vectors ([[def-hahn-hard-soft-attention-sequence-model]]).

[A1] The finite matrices, layer count, number of heads, embedding bounds, and global Lipschitz constants are fixed independently of $n$, as required in the Statement.

## Proof

1.1 There are constants $B_k<\infty$ such that $\|y_j^{(k)}\|_2\le B_k$ for every position $j$, input length $n$, and input pair. At layer zero this follows from $y_j^{(0)}=v_{x_j}+p_j$ and the bounded token and positional embeddings. If it holds at layer $k-1$, each value vector has norm at most $\|V_{k,h}\|B_{k-1}$ and each attention output is a convex combination of those values by [F1]; the fixed globally Lipschitz positionwise map is bounded on this resulting bounded set. Induction gives all $B_k$. [given, F1, A1, induction]

2.1 Consequently every dot-product score at every layer has absolute value at most some $A_k<\infty$. For any row with $n$ keys, its softmax weight $a_j$ is at most $e^{2A_k}/n$, since its numerator is at most $e^{A_k}$ and its denominator is at least $n e^{-A_k}$. [step 1.1, F1, A1, algebra]

3.1 We prove by induction on $k$ that for constants $D_k,E_k$ independent of $n$, the changed position satisfies $\|y_i^{(k)}-y_i'^{(k)}\|_2\le D_k$, while every $j\ne i$ satisfies $\|y_j^{(k)}-y_j'^{(k)}\|_2\le E_k/n$. This holds at $k=0$ because only the bounded token embedding at $i$ changes. Assume it holds at $k-1$ and fix a query position $j\ne i$ and one head. Its query changes by $O(1/n)$. Its key at position $i$ can change by $O(1)$, while all other keys change by $O(1/n)$, using the fixed linear matrices and the induction hypothesis. Hence its score-difference vector $\Delta$ has $|\Delta_i|\le K$ and $|\Delta_r|\le K/n$ for $r\ne i$, for a constant $K$ independent of $n$. [given, step 1.1, step 2.1, A1, algebra]

4.1 Interpolate the two score vectors linearly. All interpolated scores remain in $[-A_k,A_k]$, so the distinguished key has softmax weight at most $e^{2A_k}/n$ throughout by step 2.1. For softmax probabilities $a_r(t)$, differentiation gives $a_r'(t)=a_r(t)(\Delta_r-\sum_s a_s(t)\Delta_s)$; therefore $\sum_r|a_r'(t)|\le2\sum_r a_r(t)|\Delta_r|=O(1/n)$, and integration yields $\|a-a'\|_1=O(1/n)$. [step 2.1, step 3.1, algebra]

5.1 The head values are uniformly bounded by step 1.1. Splitting the difference of the two weighted sums into (i) the change of values under the first attention row and (ii) the change of attention weights applied to the second value list gives $\|b_{j,k,h}-b'_{j,k,h}\|_2=O(1/n)$: the changed value at $i$ has weight $O(1/n)$, all other value changes are $O(1/n)$, and the total weight change is $O(1/n)$ by step 4.1. The positionwise map is Lipschitz, so $\|y_j^{(k)}-y_j'^{(k)}\|_2=O(1/n)$ for every $j\ne i$. At $j=i$, boundedness from step 1.1 gives a constant difference. This proves the induction claim. [step 1.1, step 4.1, A1, algebra]

6.1 Since $i<n$, the induction bound gives $\|y_n^{(L)}-y_n'^{(L)}\|_2\le E_L/n$. For a logit perturbation $\Delta$, the softmax derivative is $p_r(\Delta_r-\sum_s p_s\Delta_s)$, whose $\ell^1$ norm is at most $2\|\Delta\|_\infty\le2\|\Delta\|_2$; hence the prediction probabilities differ by at most a constant times $1/n$. Taking $C=E_L$ completes the hidden-state bound and supplies the stated probability bound. [step 5.1, A1, algebra] ∎

## Remarks

The proof includes the change in softmax attention weights caused by the changed key. This term is necessary because attention scores depend on the hidden states; it is bounded using the $O(1/n)$ mass of the one changed key and the $O(1/n)$ changes of the remaining logits.
