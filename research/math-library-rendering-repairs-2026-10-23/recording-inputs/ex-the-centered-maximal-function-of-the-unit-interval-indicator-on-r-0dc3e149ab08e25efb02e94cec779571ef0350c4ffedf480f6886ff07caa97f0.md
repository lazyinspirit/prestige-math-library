---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-the-centered-maximal-function-of-the-unit-interval-indicator-on-r.json
  precheck: pass
id: ex-the-centered-maximal-function-of-the-unit-interval-indicator-on-r
kind: example
title: "The centered maximal function of $\\mathbf{1}_{[0,1]}$ on $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, def-centered-and-uncentered-hardy-littlewood-maximal-functions]
proof_strategy: direct
sources:
  references:
    - title: "G. H. Hardy and J. E. Littlewood, A maximal theorem with function-theoretic applications, Section IV"
      url: "https://web.archive.org/web/20240816135714if_/https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5446-11511_2006_Article_BF02547518.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $f=\mathbf{1}_{[0,1]}$ on $\mathbb{R}$. Then the centered maximal function is
$$Mf(x)= \begin{cases} \dfrac{1}{2(1-x)},&x\le0,\\[4pt] 1,&0<x<1,\\[4pt] \dfrac{1}{2x},&x\ge1. \end{cases}$$
In particular $Mf(0)=Mf(1)=1/2$ and $Mf(x)\sim (2|x|)^{-1}$ at infinity.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the function $f=\mathbf{1}_{[0,1]}$ on $\mathbb{R}$.

[L1] The centered maximal function is the supremum of normalized averages of $|f|$ over centered intervals. ([[def-centered-and-uncentered-hardy-littlewood-maximal-functions]])

## Verification

**Proof technique:** direct.

1.1 Let $x>1$, and let $I_r=[x-r,x+r]$ with $r>0$. If $r\le x-1$, then [L1, given, algebra] $I_r\cap[0,1]=\varnothing$ and the average is $0$. If $x-1<r<x$, then $I_r\cap[0,1]=[x-r,1]$, so the average is $$\frac{r-x+1}{2r}=\frac12-\frac{x-1}{2r},$$ which increases with $r$. If $r\ge x$, then $I_r$ contains $[0,1]$, so the average is $1/(2r)$, which decreases with $r$. The maximum is therefore attained at $r=x$, with value $1/(2x)$. [L1, given, algebra]

1.2 If $0<x<1$, choose $r<\min\{x,1-x\}$; then $[x-r,x+r]\subseteq[0,1]$, so [L1, given, choose, algebra] the average equals $1$. Since no average of an indicator can exceed $1$, one has $Mf(x)=1$ on $(0,1)$. [L1, given, choose, algebra]

2.1 The same calculation with the reflected interval shows that for $x<0$ the [step 1.1, algebra] maximum is attained at $r=1-x$ and equals $1/(2(1-x))$. At the endpoints this gives $Mf(0)=Mf(1)=1/2$. [step 1.1, algebra]

3.1 Steps 1.1, 1.2, and 2.1 give the displayed formula. [step 1.1, step 1.2, step 2.1] ∎


## Remarks

The graph below illustrates the displayed formula. Filled dots give the values $Mf(0)=Mf(1)=1/2$; the open circles at height $1$ are excluded endpoints of the plateau on $(0,1)$. Both tails continue toward $0$ at infinity. The verification above is independent of the figure.

```tikz
\begin{tikzpicture}[x=1.4cm,y=2.8cm]
\draw[->] (-2.5,0) -- (3.6,0) node[right] {$x$};
\draw[->] (0,-0.1) -- (0,1.3) node[above] {$Mf(x)$};
\draw[dashed,gray] (0,0.5) -- (1,0.5);
\draw (1,-0.025) -- (1,0.025) node[below=4pt] {$1$};
\node[below left] at (0,0) {$0$};
\node[left] at (0,0.5) {$\frac12$};
\node[left] at (0,1) {$1$};
\draw[blue,thick,<-] plot[domain=-2.3:0,samples=70] (\x,{1/(2*(1-\x))});
\draw[blue,thick] (0,1) -- (1,1);
\draw[blue,thick,->] plot[domain=1:3.3,samples=70] (\x,{1/(2*\x)});
\fill[blue] (0,0.5) circle (1.7pt);
\fill[blue] (1,0.5) circle (1.7pt);
\draw[blue,thick,fill=white] (0,1) circle (2pt);
\draw[blue,thick,fill=white] (1,1) circle (2pt);
\node[above] at (-1.25,0.43) {$\frac{1}{2(1-x)}$};
\node[above] at (2.3,0.43) {$\frac{1}{2x}$};
\end{tikzpicture}
```
