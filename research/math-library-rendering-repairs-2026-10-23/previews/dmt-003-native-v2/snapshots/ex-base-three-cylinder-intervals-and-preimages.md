---
id: ex-base-three-cylinder-intervals-and-preimages
kind: example
title: Base-three cylinders and their preimages
deps: ["def-integer-base-map-on-the-circle", "prop-integer-base-map-preserves-lebesgue-measure", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Example 2.4 pp.14–15, base-three specialization; MT-22 binding example amendment
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Example

Assume countable choice. For $D_3(x)=\{3x\}$, one has $D_3^{-1}[0,1/3)=[0,1/9)\cup[1/3,4/9)\cup[2/3,7/9)$, of measure $1/3$. With $I_{n,k}=[k/3^n,(k+1)/3^n)$, $D_3(I_{2,3a+c})=I_{1,c}$ for $a,c\in\{0,1,2\}$: applying $D_3$ deletes the first ternary digit.

## Facts & Assumptions

[F1] On the base-three branch $I_{1,a}$ the map is $3x-a$, and the intervals use half-open endpoints. [[def-integer-base-map-on-the-circle]].

[F2] Integer-base maps preserve Lebesgue probability under countable choice. [[prop-integer-base-map-preserves-lebesgue-measure]].

## Verification

**Given:** Assume countable choice. For $D_3(x)=\{3x\}$, one has $D_3^{-1}[0,1/3)=[0,1/9)\cup[1/3,4/9)\cup[2/3,7/9)$, of measure $1/3$. With $I_{n,k}=[k/3^n,(k+1)/3^n)$, $D_3(I_{2,3a+c})=I_{1,c}$ for $a,c\in\{0,1,2\}$: applying $D_3$ deletes the first ternary digit.

1.1 For $x\in[a/3,(a+1)/3)$ with $a=0,1,2$, [F1] gives $D_3x=3x-a$. The condition $0\le3x-a<1/3$ is equivalent to $a/3\le x<a/3+1/9$. Substitution of the three values of $a$ gives exactly the three stated disjoint intervals. Their lengths add to $3(1/9)=1/3$, as required by [F2]. [F1, F2]

2.1 The interval $I_{2,3a+c}=[a/3+c/9,a/3+(c+1)/9)$ lies in branch $a$. Its affine image under $3x-a$ is $[c/3,(c+1)/3)=I_{1,c}$. Surjectivity onto that interval is explicit: for $y\in I_{1,c}$ use $x=(y+a)/3$, which lies in $I_{2,3a+c}$. The included left and excluded right endpoints are preserved by this increasing affine map, including $a=c=2$ where the right endpoint is the excluded point 1. No ambiguous choice of ternary expansion is required. Countable choice enters only in the Lebesgue measure statement of [F2]. [1.1, F1, F2] ∎

## Remarks

The graph shows the three increasing branches of $D_3$ on $[0,1)$. The shaded vertical strips are $D_3^{-1}[0,1/3)$; their highlighted graph segments all have image $[0,1/3)$. Filled dots mark included branch left endpoints and open dots excluded branch right endpoints. The highlighted portions also exclude their upper endpoints at height $1/3$. More generally, cutting each branch into three equal pieces gives $I_{2,3a+c}\mapsto I_{1,c}$, as verified in step 2.1. The proof above is independent of the illustration.

```tikz
\begin{tikzpicture}[x=1.05cm,y=1.05cm,>=stealth]
  \fill[blue!12] (0,0) rectangle (1,3);
  \fill[blue!12] (3,0) rectangle (4,3);
  \fill[blue!12] (6,0) rectangle (7,3);
  \draw[dashed,gray] (0,1) -- (9,1);
  \draw[dashed,gray] (0,3) -- (9,3);
  \draw[->] (0,0) -- (9.5,0) node[right] {$x$};
  \draw[->] (0,0) -- (0,3.6) node[above] {$D_3(x)$};
  \draw[thick] (0,0) -- (3,3);
  \draw[thick] (3,0) -- (6,3);
  \draw[thick] (6,0) -- (9,3);
  \draw[blue,very thick] (0,0) -- (1,1);
  \draw[blue,very thick] (3,0) -- (4,1);
  \draw[blue,very thick] (6,0) -- (7,1);
  \foreach \a in {0,3,6} {
    \fill (\a,0) circle (2pt);
  }
  \foreach \b in {3,6,9} {
    \draw[fill=white] (\b,3) circle (2pt);
  }
  \node[below left] at (0,0) {$0$};
  \node[left] at (0,1) {$1/3$};
  \node[left] at (0,3) {$1$};
  \draw (1,0.06) -- (1,-0.06);
  \node[below] at (1,-0.08) {$1/9$};
  \draw (3,0.06) -- (3,-0.06);
  \node[below] at (3,-0.08) {$1/3$};
  \draw (4,0.06) -- (4,-0.06);
  \node[below] at (4,-0.08) {$4/9$};
  \draw (6,0.06) -- (6,-0.06);
  \node[below] at (6,-0.08) {$2/3$};
  \draw (7,0.06) -- (7,-0.06);
  \node[below] at (7,-0.08) {$7/9$};
  \draw (9,0.06) -- (9,-0.06);
  \node[below] at (9,-0.08) {$1$};
  \node[above] at (1.5,3.15) {$a=0$};
  \node[above] at (4.5,3.15) {$a=1$};
  \node[above] at (7.5,3.15) {$a=2$};
\end{tikzpicture}
```
