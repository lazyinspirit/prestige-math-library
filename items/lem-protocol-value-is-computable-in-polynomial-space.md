---
id: lem-protocol-value-is-computable-in-polynomial-space
kind: lemma
title: "A polynomial-round protocol value is computable in polynomial space"
status: published
verification:
  audited: 2026-09-07
origin: session
deps: [def-protocol-game-tree-and-value, lem-optimal-prover-may-be-deterministic, def-pspace-and-npspace]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Goldreich, Foundations of Complexity Theory, §11.3.1"
      url: "https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf"
---

## Statement

Fix a polynomial-time interactive verifier with polynomial bounds on rounds,
communication and fair random bits, as in the protocol convention. Its exact
root value $v(x)$ is computable by a deterministic polynomial-space
transducer: if $r(n)$ bounds its random bits, the output is the pair of binary
integers $(A(x),2^{r(|x|)})$ with $v(x)=A(x)/2^{r(|x|)}$.
In particular, the threshold language
$$ L_V={(x,a,b):a,b	ext{ are binary nonnegative integers}, b>0, v(x)>a/b} $$
belongs to PSPACE (malformed encodings are rejected).

## Facts & Assumptions

**Given:** a fixed polynomial-time verifier with the stated polynomial bounds.

## Proof

1.1 Pad its random tape to $r=r(|x|)$ fair bits. For a public transcript $	au$, let $C(	au)$ be the set of all length-$r$ tapes consistent with the verifier messages in $	au$ when it is fed the prover messages recorded there. Enumerate tapes and simulate the verifier to test this condition, without storing $C(	au)$. A deterministic strategy choosing the recorded prover messages gives every tape in $C(	au)$ the same conditional weight. This is the private-history distribution of [[def-protocol-game-tree-and-value]]. Terminal values average over all compatible tapes. Variable stopping times can be handled by a public termination marker and dummy exchanges after termination, retaining the original accept/reject outcome. [given, construct]

2.1 Compute an integer $W(	au)$, the maximum number of tapes in $C(	au)$ accepted by a single continuation strategy based on public transcripts. If $C(	au)$ is empty, put $W(	au)=0$ and do not recurse. At a terminal node count the accepting compatible tapes. At a verifier node the sets $C(	au m)$, for distinct next public messages $m$, partition $C(	au)$, so put $W(	au)=sum_m W(	au m)$. At a prover node, appending its response $m$ does not filter the compatible tapes, so put $W(	au)=max_m W(	au m)$. Enumerate all bounded message strings; invalid responses cause rejection. Strategies in distinct public-message children can be combined because the prover sees which child occurred. At a prover node the same response serves every compatible hidden history. Backward induction, also justified by [[lem-optimal-prover-may-be-deterministic]], therefore gives the intended maximum. [step 1.1, given, construct]

3.1 For nonempty $C(	au)$ the conditional value is $W(	au)/|C(	au)|$. At verifier nodes this is exactly the weighted average of child values, since each weight is $|C(	au m)|/|C(	au)|$; at prover nodes the common denominator makes maximizing the numerator equivalent to maximizing the value. Moreover $0le W(	au)le |C(	au)|le2^r$. Each running sum, maximum, count and message or tape index therefore has polynomial bit length. A depth-first evaluation retains polynomial space per frame and has polynomially many frames; verifier simulations take polynomial space and siblings are recomputed. Thus $A(x)=W(\emptyset)$ is computable in polynomial space and $|C(\emptyset)|=2^r$. This includes $r=0$, whose tape set consists of the empty string. [step 1.1, step 2.1]

4.1 Output $A(x)$ and $2^r$ in binary, without needing to reduce the fraction. For a well-formed threshold input, compute $A(x)$ and decide $A(x)b>a2^r$ by integer arithmetic. Its space is polynomial in the total input length, including the bit lengths of $a,b$. This deterministic decider places $L_V$ in PSPACE by [[def-pspace-and-npspace]], while the binary-pair output establishes the claimed exact function computation. [step 2.1, step 3.1] ∎
