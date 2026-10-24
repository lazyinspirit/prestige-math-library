---
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
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
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
