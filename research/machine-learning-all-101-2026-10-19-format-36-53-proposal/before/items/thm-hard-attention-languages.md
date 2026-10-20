---
id: thm-hard-attention-languages
kind: theorem
title: "Fixed-depth hard attention cannot recognize PARITY or 2DYCK"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - lem-hard-attention-depth-reduction
  - def-hahn-hard-soft-attention-sequence-model
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Hahn, Theoretical Limitations of Self-Attention in Neural Sequence Models, §5.1, Theorem 1 and Corollary 2"
      url: "https://aclanthology.org/2020.tacl-1.11.pdf"
---

## Statement

Let $\mathrm{PARITY}=\{w\in\{0,1\}^*: w\text{ contains an even number of }1\text{s}\}$. Let $\mathrm{2DYCK}$ be the language over $\{(,),[,]\}$ of words whose brackets are correctly balanced and properly nested by type. No fixed finite-depth hard-attention sequence model with a fixed finite number of heads, fixed maps independent of input length, and a fixed classification readout from its end-marker state classifies every sufficiently long input exactly as a member or nonmember of $\mathrm{PARITY}$; no such model recognizes $\mathrm{2DYCK}$ either. Exact recognition means that the model's binary output equals the language membership indicator for every input word, with the end marker appended before the model is evaluated.

## Statement references

[Hahn, §5.1: hard-attention language limits](https://aclanthology.org/2020.tacl-1.11.pdf)

## Facts & Assumptions

**Given:** A fixed hard-attention sequence model and the two language definitions in the Statement.

[F1] For every finite input alphabet, hard-attention depth reduction can refine a restriction while retaining any specified smaller positive fraction of free positions; iterating through the fixed finite depth yields a restriction on which the output depends on a bounded number of original input positions ([[lem-hard-attention-depth-reduction]]).

[F2] A hard-attention sequence model appends a fixed end marker, uses shared score, value, and positionwise maps fixed independently of input length, and classifies from the final state after reading that marker ([[def-hahn-hard-soft-attention-sequence-model]]).

## Proof

1.1 Let the model have $L$ layers and let $N=n+1$ be the number of input positions for a word of length $n$, including its fixed end marker. Initially each free layer-zero state depends on its own input symbol. For all sufficiently large $n$, at least $0.99N$ positions are free, since only the end-marker position is fixed. Apply [F1] successively through the $L$ layers, using free fractions $0.99=C_0>C_1>\cdots>C_L=0.9$. For every sufficiently large $n$, this gives a restriction leaving at least $0.9N$ free word positions and a constant $c_L$ such that the classification output depends on at most $c_L$ input positions. [given, F1, F2, choose, induction, discharge-induction]

1.2 Choose $n$ large enough that $0.9N>c_L$. Some free bit position $i$ is not among the at most $c_L$ positions determining the output. Complete the restriction arbitrarily to a word $w$, and let $w'$ be obtained by flipping bit $i$. Their model outputs agree because all input positions on which the output depends agree, but exactly one of $w,w'$ has an even number of ones. Thus no such model classifies all length-$n$ words exactly as $\mathrm{PARITY}$. [step 1.1, construct, algebra]

2.1 Now suppose the model recognizes $\mathrm{2DYCK}$. Its restriction to the two-symbol subalphabet consisting of one opening bracket and its matching closing bracket would recognize the one-type Dyck language, whose words have equal numbers of opening and closing brackets and nonnegative opening-minus-closing count at every prefix. Fix an even word length $n$, put $N=n+1$, and let $m=\lfloor n/5\rfloor$. Initially fix the first $m$ word symbols to the opening bracket and the last $m$ word symbols to the closing bracket; leave the middle symbols free and keep the end marker fixed. For all sufficiently large even $n$, at least $0.59N$ positions are free. By [F1], with final free fraction $0.55$, refine this restriction so the model output depends on at most $c_L$ input positions and at least $0.55N$ word positions remain free. If $t$ middle positions were additionally fixed, then
$$
t\le n-2m-0.55N\le0.06N
$$
for all sufficiently large $N$. Also $m\ge N/5-6/5$, so $m>t$. [given, F1, F2, algebra, choose]

2.2 Let $f_o$ be the number of additionally fixed middle symbols that are opening brackets, and let $M=n-2m-t$ be the number of still-free middle positions. Assign an opening bracket to the first $r=n/2-m-f_o$ still-free positions in their order, and assign a closing bracket to the rest. Since $m+t<n/2$, we have $r\ge0$ and
$$
M-r=n/2-m-t+f_o>0.
$$
The completed word has exactly $n/2$ opening brackets, hence total balance zero. A prefix before the last of the assigned free opening brackets has height at least $m-t>0$, because at most $t$ fixed middle symbols are closings. After that last free opening, every still-free middle symbol is a closing; the remaining suffix contains the final $m$ fixed closings and at most $t$ fixed openings, so its net opening-minus-closing count is at most $t-m<0$. Since the whole word has total balance zero, every such prefix also has positive height. Thus this completion is a valid one-type Dyck word. [step 2.1, construct, algebra]

2.3 At least $0.55N$ positions remain free, so for sufficiently large $n$ there is a free word position $i$ outside the at most $c_L$ positions determining the model output. Flip its bracket in the valid completion from step 2.2. The new word is unbalanced, while the model output is unchanged because position $i$ does not affect that output. This contradicts recognition of the one-type Dyck language. Any exact recognizer for $\mathrm{2DYCK}$ would restrict to an exact recognizer for this one-type sublanguage, so no such hard-attention model recognizes $\mathrm{2DYCK}$. [step 2.1, step 2.2, algebra] ∎
