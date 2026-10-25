---
id: ex-huffman-dyadic-source-and-code-tree
kind: example
title: "Huffman tree for a dyadic three-symbol source"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-finite-discrete-source-and-blocks, def-base-two-entropy-of-a-finite-source, def-binary-source-code-and-extension, def-binary-prefix-code, alg-binary-huffman-coding, thm-huffman-coding-is-prefix-optimal, cor-huffman-code-lengths-are-within-one-bit-of-entropy, def-it-information-units-and-logarithm-base, thm-logarithm-change-of-base]
justified_by: []
proof_strategy: direct
strategy: "Execute the declared deterministic merges, read the leaf paths, and compute the exact expected length and entropy."
axiom_use: "No choice axiom is used; the example has three symbols."
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Stanford EE376A, Information Theory Course Notes, Chapter 4: Lossless Compression"
      url: "https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf"
      locator: "§4.5, worked Huffman tree and codeword lengths"
---
## Facts & Assumptions

**Given:** The source $p=(1/2,1/4,1/4)$ on symbols $1,2,3$ and the deterministic Huffman procedure.

[F1] [[alg-binary-huffman-coding]]: Equal weights are ordered by increasing serial number; the first selected node is the left child and the second is the right child.

[F2] [[def-binary-source-code-and-extension]]: $L_p(C)=\sum_i p_i\ell_i$.

[F3] [[def-base-two-entropy-of-a-finite-source]]: $H_2(p)=-\sum_i p_i\log_2p_i$.

[F4] [[cor-huffman-code-lengths-are-within-one-bit-of-entropy]]: If $m\ge2$, then $H_2(p)\le L_p(C_H)<H_2(p)+1$.

[F5] [[thm-huffman-coding-is-prefix-optimal]]: The deterministic Huffman procedure returns a binary prefix code minimizing $L_p(C)$ among all binary prefix codes on the same alphabet.

[F6] [[def-it-information-units-and-logarithm-base]]: $\log_2x=\ln x/\ln2$.

[F7] [[thm-logarithm-change-of-base]]: $\log_2(2^u)=u$ for every real $u$.

## Example

The weights of symbols 2 and 3 are tied for least, so the first merge combines them. The final tie is between symbol 1 and the merged node; the serial rule puts symbol 1 on the left. The code tree uses edge labels 0 on the left and 1 on the right; each leaf label is a source symbol, and reading its root path gives its codeword.

```tikz
\begin{tikzpicture}[
  level distance=12mm,
  level 1/.style={sibling distance=34mm},
  level 2/.style={sibling distance=18mm},
  every node/.style={draw,circle,inner sep=1.5pt}
]
\node {$\circ$}
  child {node {$1$} edge from parent node[left] {$0$}}
  child {node {$\circ$}
    child {node {$2$} edge from parent node[left] {$0$}}
    child {node {$3$} edge from parent node[right] {$1$}}
    edge from parent node[right] {$1$}
  };
\end{tikzpicture}
```

The diagram records the tree structure and edge convention; the verification below computes the codewords and lengths directly.

## Verification

1.1 The first merge combines 2 and 3 into a node of weight $1/2$. The active nodes are then $(1,1/2)$ and the merged node of weight $1/2$; the serial tie-break puts 1 on the left and the merged node on the right. Thus $C_H(1)=0$, $C_H(2)=10$, and $C_H(3)=11$. [F1, given, construct]

2.1 These lengths are $(1,2,2)$, so [F2] gives $L_p(C_H)=\frac12+\frac12+\frac12=\frac32$. By [F6] and [F7], $\log_2(1/2)=-1$ and $\log_2(1/4)=-2$, so [F3] gives $H_2(p)=\frac12+\frac12+\frac12=\frac32$ as well, which satisfies the two-sided bound [F4]; [F5] confirms the optimal prefix-code conclusion. [F2, F3, F4, F5, F6, F7, step 1.1, algebra] ∎

