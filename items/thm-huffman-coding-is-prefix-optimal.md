---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-huffman-coding-is-prefix-optimal.json
  precheck: pass
id: thm-huffman-coding-is-prefix-optimal
kind: theorem
title: "The deterministic Huffman code is prefix-optimal"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-finite-discrete-source-and-blocks, def-binary-source-code-and-extension, def-binary-prefix-code, thm-binary-kraft-criterion-for-finite-lengths, alg-binary-huffman-coding]
justified_by: []
proof_strategy: induction
strategy: "Establish an optimal finite prefix tree, move the two least weights to a deepest sibling pair by exchanges, contract that pair, and induct on the alphabet size."
axiom_use: "No choice axiom is used; optimality reduces to a finite set of integer length vectors and every tie is deterministic."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stanford EE376A, Information Theory Course Notes, Chapter 4: Lossless Compression"
      url: "https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf"
      locator: "§4.5–4.6, sibling rearrangement, contraction, and Huffman induction"
    - title: "MIT OpenCourseWare 6.450, Memory-less sources, prefix free codes, and entropy"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communication-i-fall-2009/f57623d4056984d18685fdb37cea01d6_MIT6_450F09_slide03.pdf"
      locator: "PDF slides 3–8, full trees and the reduced-source cost identity"
---
## Statement

For every finite full-support source, the algorithm [[alg-binary-huffman-coding]] terminates, returns a binary prefix code, and minimizes $L_p(C)$ among all binary prefix codes on the same alphabet. For a one-symbol source it returns the one-bit codeword $0$, which is optimal among codes with nonempty codewords.

## Facts & Assumptions

**Given:** A finite full-support source $(m,p)$ and the deterministic algorithm [[alg-binary-huffman-coding]].

[F1] [[def-finite-discrete-source-and-blocks]]: The alphabet has $m\ge1$ symbols, every source weight $p_i$ is positive, and $\sum_i p_i=1$.

[F2] [[def-binary-prefix-code]]: The code tree is the finite trie of codeword prefixes, and a prefix code has distinct codeword leaves with no codeword a proper prefix of another.

[F3] [[def-binary-source-code-and-extension]]: Every codeword is nonempty and $L_p(C)=\sum_i p_i\ell_i$.

[F4] [[thm-binary-kraft-criterion-for-finite-lengths]]: A finite positive integer length list with Kraft sum at most one is realized by a binary prefix code.

[F5] [[alg-binary-huffman-coding]]: Order active nodes lexicographically by (weight, serial number), using the ordinary order on real weights and then integer serials.

[F6] [[alg-binary-huffman-coding]]: Remove the first two nodes. Make a new parent whose left child is the first removed node and whose right child is the second, whose weight is their sum, and whose serial is the next unused integer.

[F7] [[alg-binary-huffman-coding]]: If $m=1$, return the one-bit codeword $C_H(1)=0$.

## Proof

**Proof technique:** Induct on list size at least two: for every finite list of at least two positive weights with distinct serial numbers and total weight one, every sequence of minimum-weight merges, including every tie resolution, gives an optimal prefix code. The base case is size two; the one-symbol source is handled separately in step 1.1. A reduced list retains positive weights, total weight one, and distinct serials because each parent receives a fresh serial. The original source and each reduced active list are instances of this claim.

1.1 If $m=1$, the algorithm returns $0$ by [F7]. Every codeword is nonempty by [F3], so every one-symbol code has expected length at least $1$; the returned code is prefix-free by [F2] and attains that value. [F2, F3, F7, given]

1.2 Suppose $m\ge2$. Every merge removes two nodes and adds one, so the active count decreases by exactly one; after $m-1$ merges there is one root. Each original symbol remains one leaf, and the only new nodes are internal parents by [F6]. Distinct leaves cannot lie on one root-to-leaf path, so their path words are distinct and neither is a prefix of another. Every path has positive length because the root is internal. Thus [F2] gives a binary prefix code. [F2, F6, given, algebra]

1.3 An optimal prefix code exists. For every integer $m\ge1$, $m\le2^m$ by induction: it holds at $m=1$, and $2^{m+1}\ge2m\ge m+1$. Thus [F4] applied to the length list $(m,\ldots,m)$ gives a finite prefix code, since its Kraft sum $m2^{-m}\le1$; let its cost be $L_0$. Any code with cost at most $L_0$ has $1\le\ell_i\le L_0/p_i$ for every $i$, because $p_i>0$ and all summands in $L_p$ are nonnegative. Only finitely many positive integer length vectors satisfy these bounds, and at least one is realized. A least cost among those realized vectors exists and is a global minimum because every code outside the set has cost greater than $L_0$. [F1, F3, F4, given, choose, algebra]

1.4 For an active list of size two and total weight one, the algorithm merges its two nodes into a root with two leaves, giving lengths $1,1$ and cost $1$. Every binary source code has nonempty words by [F3], so every competing prefix code has both lengths at least one and cost at least the sum of the weights, namely $1$ by [F1]. Thus the size-two case is optimal. [F1, F3, F6, given, base]

1.5 Suppose the active list has size $m\ge3$ and assume as induction hypothesis that every sequence of minimum-weight merges on a positive normalized list of size $m-1$ with distinct serials gives an optimal code. [given, assume-hyp, ih]

2.1 In an optimal code tree, no internal vertex has exactly one child: contracting its sole edge preserves the leaves and their incomparability, so [F2] still gives a prefix code, while every codeword below the vertex loses one bit. At least one symbol is below it by the trie definition, and its positive weight by [F1] makes the expected length strictly smaller, a contradiction. Hence every internal vertex has two children. Choose a leaf of maximal depth $d$. Its sibling cannot be internal, since that sibling would have a descendant leaf deeper than $d$; it is therefore another leaf at depth $d$. [F1, F2, step 1.3, algebra]

2.2 The first selected pair $a,b$ gives a reduced list of size $m-1$ with positive weights summing to one and distinct serials. Its subsequent merges are minimum-weight choices by [F5] and [F6]. The induction hypothesis in step 1.5 therefore makes the reduced tree optimal for its weights. [F5, F6, step 1.5, induction]

3.1 Let $a,b$ be the two symbols selected by the algorithm for its first merge; [F5] and [F6] make them two symbols of least weight. Place them at a sibling pair of leaves at depth $d$ without increasing cost. If $a$ is currently at depth $e\le d$ and a symbol $x$ of weight $p_x\ge p_a$ occupies the chosen depth-$d$ leaf, swapping them changes the two cost terms from $p_ae+p_xd$ to $p_ad+p_xe$, a difference $(p_a-p_x)(d-e)\le0$. Then place $b$ in the sibling leaf by the same calculation, since its current occupant has weight at least $p_b$. Relabeling leaves preserves the prefix property; the original code was optimal, so the resulting code is still optimal. [F1, F2, F5, F6, step 2.1, given, algebra]

4.1 Contract the two sibling leaves labeled $a,b$ to one leaf $z$ with weight $p_z=p_a+p_b$. The contracted tree is a prefix code on the reduced alphabet and its cost is the original cost minus $p_a+p_b$, since both leaf depths decrease by one. Conversely, expanding any reduced prefix code by replacing the codeword for $z$ with its two children labeled $a,b$ preserves the prefix property and increases cost by $p_a+p_b$. Therefore contraction sends an optimal original code to an optimal reduced code, and expanding an optimal reduced code gives an optimal original code. [F1, F2, F3, step 3.1, algebra]

5.1 By step 4.1, expansion of that reduced tree is optimal for the original weights. The algorithm terminates and returns a prefix code by step 1.2; the base case step 1.4 and the induction step prove its optimality for every $m\ge2$. [step 1.2, step 4.1, step 1.4, step 2.2, discharge-induction: step 2.2] ∎

