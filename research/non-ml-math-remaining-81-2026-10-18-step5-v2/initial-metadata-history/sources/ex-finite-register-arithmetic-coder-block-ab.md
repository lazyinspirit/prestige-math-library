---
id: ex-finite-register-arithmetic-coder-block-ab
kind: example
title: "Exact rational interval coding of the block AB"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-finite-discrete-source-and-blocks, alg-finite-register-rational-arithmetic-coder, thm-finite-register-rational-arithmetic-coder-is-prefix-and-lossless]
justified_by: []
proof_strategy: direct
strategy: "Run the integer interval updates for a two-symbol block and verify the emitted dyadic cell by exact rational inequalities."
axiom_use: "No choice axiom is used; all calculations are exact integers and rational numbers."
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Scott D. Roweis, CSC310 Lecture 8x: Arithmetic Coding Without Blocks, version 1.1"
      url: "https://cs.nyu.edu/home/people/in_memoriam/roweis/csc310-2005/notes/lec8x.pdf"
      locator: "slides 10–15, positive integer frequencies and exact integer interval updates"
---
## Facts & Assumptions

**Given:** Alphabet order $A,B,C$, rational frequencies $(q_A,q_B,q_C)=(3,2,1)$ with $Q=6$, maximum and fixed frame length $N=n=2$, and input block $AB$.

[F1] [[alg-finite-register-rational-arithmetic-coder]]: At symbol $x_t$, the update is $L\leftarrow L+Wc_{x_t}Q^{n-t}$ and $W\leftarrow Wq_{x_t}$; the output uses the largest $u$ with $2^uW\le Q^n$, then $s=u+2$ and $k=\lfloor2^s(2L+W)/(2Q^n)\rfloor$.

[F2] [[thm-finite-register-rational-arithmetic-coder-is-prefix-and-lossless]]: The finite decoder returns exactly the encoded block.

[F3] [[def-finite-discrete-source-and-blocks]]: The block law is the product of the one-symbol probabilities.

## Example

With $p=(1/2,1/3,1/6)$ and a length-two frame, the interval for $AB$ should be $[1/4,5/12)$. The emitted codeword is $0101$, whose dyadic cell is strictly inside that interval.

The diagram uses horizontal position for the real coordinate on $[0,1)$. The upper bar is the source interval for $AB$; the lower bar is the dyadic cell represented by $0101$. It illustrates the exact rational comparisons below but is not used as proof.

```tikz
\begin{tikzpicture}[x=0.25cm,y=0.7cm]
  \draw[->] (0,0) -- (24,0) node[right] {$1$};
  \draw (0,0.08) -- (0,-0.08) node[below=2pt] {$0$};
  \draw (6,0.08) -- (6,-0.08) node[below=2pt] {$1/4$};
  \draw (9,0.08) -- (9,-0.08) node[below=2pt] {$3/8$};
  \draw (10,0.08) -- (10,-0.08) node[below=2pt] {$5/12$};
  \draw (12,0.08) -- (12,-0.08) node[below=2pt] {$1/2$};
  \draw (24,0.08) -- (24,-0.08) node[below=2pt] {$1$};
  \draw[line width=2pt] (6,1) -- (10,1) node[midway,above=2pt] {$I(AB)=[1/4,5/12)$};
  \draw[line width=2pt] (7.5,0.45) -- (9,0.45) node[midway,below=2pt] {$J(0101)=[5/16,3/8)$};
\end{tikzpicture}
```

## Verification

1.1 For the first symbol $A$, $c_A=0$, so the update from $(L,W)=(0,1)$ gives $(0,3)$. For the second symbol $B$, $c_B=q_A=3$ and $Q^{n-2}=1$, so $(L,W)=(0+3\cdot3,3\cdot2)=(9,6)$. With $D=Q^n=36$, the source interval is $[9/36,15/36)=[1/4,5/12)$; its width $6/36=1/6$ equals $p_Ap_B$ by [F3]. [F1, F3, given, algebra]

1.2 Since $2^2\cdot6=24\le36<48=2^3\cdot6$, the largest admissible $u$ is $2$ and the payload length is $s=4$. The midpoint is $(2\cdot9+6)/(2\cdot36)=1/3$, hence $k=\lfloor16/3\rfloor=5$ and its four-bit representation is $0101$. Also $B=6$ because $2^5<36\le2^6$, so the emitted four-bit word obeys the configured $B+2$ limit. [F1, given, algebra]

2.1 The dyadic cell of $0101$ is $[5/16,6/16)=[5/16,3/8)$. Exact comparisons give $1/4=4/16<5/16$ and $3/8=9/24<10/24=5/12$, so this cell is inside $[1/4,5/12)$. By [F2], the decoder returns $AB$ uniquely. [F2, step 1.1, step 1.2, algebra] ∎

