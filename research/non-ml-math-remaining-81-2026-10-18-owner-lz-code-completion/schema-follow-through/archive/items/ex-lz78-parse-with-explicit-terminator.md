---
id: ex-lz78-parse-with-explicit-terminator
kind: example
title: "LZ78 parsing of a finite binary word"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - alg-lz78-incremental-prefix-code
  - thm-lz78-prefix-code-lossless
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
---
## Statement

Traces the specified parser and decoder on 0100101001 followed by the explicit terminal symbol, including dictionary indices and exact record sequence.

## Facts & Assumptions

**Given:** The LZ78 parser of [[alg-lz78-incremental-prefix-code]], input $0100101001$, and terminal symbol $\#$.

[F1] [[alg-lz78-incremental-prefix-code]]: output $(i,c)$ appends dictionary word $D[i]c$; the terminator stops parsing and is not added.

[F2] [[thm-lz78-prefix-code-lossless]]: the explicit records decode uniquely, with the terminator ending the codeword.

## Proof

**Given:** The input string, empty root dictionary $D[0]=\epsilon$, and conventions [F1]–[F2].

1.1 Applying the longest-dictionary-prefix rule successively gives phrases $0,1,00,10,100,1\#$. The records are respectively $(0,0),(0,1),(1,0),(2,0),(4,0),(2,\#)$; after the first five records the dictionary indices $1$ through $5$ name $0,1,00,10,100$. The sixth record terminates without insertion. [F1, given, algebra]

2.1 The dictionary trie has root index $0$, edges $0$ and $1$ to nodes $1$ and $2$, then edge $0$ from node $1$ to node $3$, edge $0$ from node $2$ to node $4$, and edge $0$ from node $4$ to node $5$. The dashed edge marked $\#$ from node $2$ is the final output phrase only; it is not a dictionary node. Each node label gives its dictionary index and phrase; each edge label is the symbol appended to the parent's phrase, and the root phrase is empty. The diagram's ordinary nodes are exactly the phrases inserted after the first five records; the terminal edge is drawn dashed because [F1] does not insert it. [F1, step 1.1, construct]

3.1 Starting with the root, the decoder expands the listed records to the same six phrases; concatenating them yields $0100101001\#$. It stops at $\#$, so deleting the marker recovers the input exactly, as guaranteed by [F2]. [F1, F2, step 1.1, step 2.1, algebra] ∎

## Remarks

### Diagram

The trie uses the dictionary indices and appended-symbol edges described in the verification; the dashed terminal edge is output only.

```tikz
\begin{tikzpicture}[every node/.style={draw,circle,inner sep=2pt},>=stealth]
\node (r) at (0,0) {$0:\epsilon$};
\node (a) at (-2,-1) {$1:0$};
\node (b) at (2,-1) {$2:1$};
\node (aa) at (-2,-2) {$3:00$};
\node (ba) at (2,-2) {$4:10$};
\node (baa) at (2,-3) {$5:100$};
\node[draw=none,rectangle] (end) at (4,-2) {$1\#: \text{output only}$};
\draw (r)--node[above left,draw=none] {$0$}(a);
\draw (r)--node[above right,draw=none] {$1$}(b);
\draw (a)--node[left,draw=none] {$0$}(aa);
\draw (b)--node[right,draw=none] {$0$}(ba);
\draw (ba)--node[right,draw=none] {$0$}(baa);
\draw[dashed,->] (b)--node[above,draw=none] {$\#$}(end);
\end{tikzpicture}
```
