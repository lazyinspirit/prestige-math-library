---
id: prop-valid-computation-histories-are-decidable
kind: proposition
title: "For a fixed machine and input, valid accepting computation histories form a decidable language"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-language-recognized-and-decided, def-halting-computation-and-divergence, def-one-step-configuration-relation, def-turing-machine-configuration, lem-finite-tuples-admit-effective-prefix-free-encodings]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 10: The Computation History Method"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/a48f01c5374e72ee4f68a70bc0e38583_MIT18_404f20_lec10.pdf"
    - title: "John E. Savage, Models of Computation: Exploring the Power of Computing, Chapter 5"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf"
---

## Statement

Fix a deterministic one-tape Turing machine $M$ and an input word $w$ for $M$.
Then one can choose a binary encoding of configurations of $M$ and a binary
encoding of finite tuples of such codes so that the set
$$ H_{M,w} $$
of encoded accepting computation histories of $M$ on input $w$ is a decidable
language over $\{0,1\}$.

## Facts & Assumptions

**Given:** A fixed deterministic one-tape Turing machine $M$ and a fixed input word $w$.

[L1] A language is decidable when some deterministic Turing machine halts on every input and accepts exactly the words in that language, by [[def-language-recognized-and-decided]].

[L2] A finite computation history on input $w$ is a finite list $C_0,\dots,C_n$ with $C_0=I_M(w)$ and $C_i\vdash_M C_{i+1}$ for every $i<n$, and it is accepting when $C_n$ is accepting, by [[def-halting-computation-and-divergence]].

[L3] The proof of [[lem-finite-tuples-admit-effective-prefix-free-encodings]] explicitly encodes a word by $c(u)=1^{|u|}0u$ and a binary pair by $E_2(u,v)=110c(u)c(v)$. Its total decoder either rejects or returns two component words, each strictly shorter than the pair code.

[L4] By [[def-turing-machine-configuration]], a configuration word has exactly one state symbol inserted immediately before the scanned tape symbol, and if more than one tape symbol follows that state symbol then the last of them is nonblank.

## Proof

**Proof technique:** direct.

1.1 Because $M$ is fixed, the disjoint tagged alphabet $(\{\mathtt{s}\}\times Q)\cup(\{\mathtt{t}\}\times\Gamma)$ is finite. Choose pairwise distinct binary blocks of one common length for these tagged symbols. Encode each configuration word by replacing its unique state symbol $q$ with the block for $(\mathtt{s},q)$ and each tape symbol $a$ with the block for $(\mathtt{t},a)$. The common block length makes this code uniquely decodable back to the tagged configuration word. [given, construct]

1.2 Use the explicit pair encoding $E_2$ from [L3], and encode finite lists of configuration codes recursively by $$ \operatorname{Hist}() := 0,\qquad \operatorname{Hist}(x_0,\dots,x_n) := 1\,E_2\bigl(x_0,\operatorname{Hist}(x_1,\dots,x_n)\bigr). $$ A decoder returns the empty list only when its entire current candidate is exactly `0`; a candidate beginning with `0` and containing any further bit is malformed. When the candidate begins with `1`, the decoder applies the total decoder for $E_2$ to the remaining suffix. If that suffix is malformed it rejects; otherwise it recovers the first configuration code and a tail-code and continues on the tail. By [L3], every successfully decoded tail-code is strictly shorter than the current candidate, so this recursion halts on every binary input and returns either one finite list or the malformed-code output. [L3, construct]

2.1 Given a decoded tagged word, check mechanically that it contains exactly one state-tagged block, all other blocks are tape-tagged, at least one tape-tagged block follows the state-tagged block, and whenever more than one tape-tagged block follows the state-tagged block the last of them is not the blank-tagged block $(\mathtt{t},\sqcup)$. By [L4], these are exactly the configuration words of $M$: the number of tape-tagged blocks before the unique state-tagged block is the head position, the tagged tape blocks recover the finite word $a_0\cdots a_r$, and the last-block test enforces the canonical choice $r=\max(\{h\}\cup\operatorname{supp}(t))$. Thus valid configuration codes can be parsed effectively back into configurations of $M$. [L4, step 1.1, given]

3.1 On input a candidate binary word $z$, first decode it by the recursive history decoder from step 1.2. If the decoder reports malformed input or the empty list, reject immediately. Otherwise step 2.1 parses each configuration code in the decoded list into a configuration, yielding $C_0,\dots,C_n$. Check whether $C_0=I_M(w)$, whether each adjacent pair satisfies $C_i\vdash_M C_{i+1}$, and whether $C_n$ is accepting. Each check is finite and local: the first compares one explicit configuration with the fixed start configuration, the middle checks one transition of the fixed machine $M$, and the last reads the final state. Accept exactly when all checks pass. [L2, step 2.1, step 1.2]

4.1 By [L2], a decoded list passes the step-3.1 test exactly when it is an accepting computation history of $M$ on input $w$. The machine just described halts on every candidate history code, because the recursive decoder from step 1.2 terminates and the subsequent checks are finite. [L2, step 1.2, step 3.1]

5.1 Therefore there is a deterministic Turing machine that decides $H_{M,w}$. By [L1], $H_{M,w}$ is a decidable language. [L1, step 4.1] ∎
