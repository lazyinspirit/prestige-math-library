---
id: lem-slobodeckij-seminorm-controls-dyadic-level-sets
kind: lemma
title: "The Slobodeckij seminorm bounds the dyadic level-set sum"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [lem-fractional-level-set-kernel-measure-estimate, def-fractional-slobodeckij-space-on-euclidean-space, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-tonelli-and-fubini-for-completed-product-measures, thm-finite-and-countable-subadditivity-of-measures, prop-measure-of-a-set-difference, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Eleonora Di Nezza, Giampiero Palatucci and Enrico Valdinoci, Hitchhiker's guide to the fractional Sobolev spaces (arXiv:1104.4345, survey)"
      url: "https://arxiv.org/pdf/1104.4345"
      locator: "Lemma 6.3 and its proof, printed pp. 41-44"
---

## Statement

Assume the Axiom of Countable Choice. Let $d\ge1$, $0<\theta<1$,
$1\le p<\infty$ with $p\theta<d$, let $f\in L^\infty(\mathbb R^d)$ have
compact support, and put $A_k:=\{|f|>2^k\}$, $a_k:=|A_k|$. Then
$$[f]_{\theta,p}^{p}\ \ge\ c(d,p,\theta)\sum_{k\in\mathbb Z:\,a_k\ne0} a_{k+1}\,a_k^{-p\theta/d}\,2^{pk},$$
where $[\cdot]_{\theta,p}$ is the Slobodeckij seminorm of
[[def-fractional-slobodeckij-space-on-euclidean-space]].

## Facts & Assumptions

**Given:** the Axiom of Countable Choice, $d\ge1$, $0<\theta<1$, $1\le p<\infty$ with $p\theta<d$, a compactly supported $f\in L^\infty(\mathbb R^d)$, and the sets $A_k=\{|f|>2^k\}$ with $a_k=|A_k|$. Write $\alpha:=p\theta/d\in(0,1)$, $T:=2^p>1$, and $D_k:=A_k\setminus A_{k+1}$, $d_k:=|D_k|$.

[F1] *Level sets and annuli.* $A_{k+1}\subseteq A_k$, so $a_{k+1}\le a_k$ and $d_k=a_k-a_{k+1}$; the $D_k$ are pairwise disjoint, $A_k=\bigcup_{\ell\ge k}D_\ell$ up to a null set, $a_k=\sum_{\ell\ge k}d_\ell$, and $a_k=0$ for all large $k$ because $f$ is bounded with compact support. With $Z:=\{f=0\}$, for every $i$ we have $A_{i-1}^c=Z\cup\bigcup_{j\le i-2}D_j$ up to a null set. All these sets are measurable. ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-finite-and-countable-subadditivity-of-measures]], [[prop-measure-of-a-set-difference]])

[F2] *Kernel estimate.* If $E$ is measurable with $0<|E|<\infty$ and $x\in\mathbb R^d$, then $\int_{\mathbb R^d\setminus E}|x-y|^{-d-p\theta}\,dy\ge c_1|E|^{-p\theta/d}$ with $c_1=c_1(d,p,\theta)>0$ independent of $x$ and $E$. ([[lem-fractional-level-set-kernel-measure-estimate]])

[F3] *Slobodeckij seminorm on disjoint blocks.* For measurable $B\subseteq\mathbb R^d\times\mathbb R^d$, $\iint_B|f(x)-f(y)|^p|x-y|^{-d-p\theta}\,dx\,dy\le[f]_{\theta,p}^p$; sums over pairwise disjoint such blocks of a nonnegative integrand are bounded by the total integral. ([[def-fractional-slobodeckij-space-on-euclidean-space]], [[thm-tonelli-and-fubini-for-completed-product-measures]])

## Proof

**Proof technique:** Pair the annulus $D_i$ with the complement of $A_{i-1}$, where the level gap is at least $2^{i-1}$; sum the resulting block estimates against the geometric weights, control the overlap of the nested tails by a geometric series, and relabel.

1.1 By [F1] the annuli $D_k$ are pairwise disjoint measurable sets with $d_k=a_k-a_{k+1}$ and $a_k=\sum_{\ell\ge k}d_\ell$, and $a_k=0$ for all $k$ large. Let $Z:=\{f=0\}$. If $x\in D_i$ and $y\in D_j$ with $j\le i-2$, then $|f(x)|>2^i$ and $|f(y)|\le2^{j+1}\le2^{i-1}$, so $|f(x)-f(y)|\ge2^{i-1}$. The same bound holds for $y\in Z$, since $|f(y)|=0$ and $|f(x)|>2^i$. Thus the low positive bands together with $Z$ cover $A_{i-1}^c$ up to a null set. [F1, given]

2.1 If $[f]_{\theta,p}=\infty$, the conclusion is immediate. Otherwise the disjoint-block sum $I$ below is finite by [F3]. The sums $X,S,Y$ are finite: $a_i a_{i-1}^{-\alpha}\le a_{i-1}^{1-\alpha}$, the $a_i$ are bounded and eventually zero, and $T>1$, so the negative tail is geometric. Fix $i$ with $a_{i-1}\ne0$. By [F2] applied to $E=A_{i-1}$ (which has $0<a_{i-1}<\infty$), for every $x\in D_i$ the integral of $|x-y|^{-d-p\theta}$ over $A_{i-1}^c$ is at least $c_1a_{i-1}^{-\alpha}$. Since $A_{i-1}^c=Z\cup\bigcup_{j\le i-2}D_j$ up to a null set, the lower bound from step 1.1 gives $$I_i:=\sum_{j\le i-2}\iint_{D_i\times D_j}|f(x)-f(y)|^p|x-y|^{-d-p\theta}dxdy+\iint_{D_i\times Z}|f(x)-f(y)|^p|x-y|^{-d-p\theta}dxdy\ge c_02^{pi}a_{i-1}^{-\alpha}d_i,$$ where $c_0:=2^{-p}c_1$. Writing $d_i=a_i-\sum_{\ell\ge i+1}d_\ell$ and summing over $i$ with $a_{i-1}\ne0$, $I:=\sum_iI_i\ge c_0X-c_0Y$ where $X:=\sum_{i:a_{i-1}\ne0}2^{pi}a_{i-1}^{-\alpha}a_i$ and $Y:=\sum_{i:a_{i-1}\ne0}\sum_{\ell\ge i+1}2^{pi}a_{i-1}^{-\alpha}d_\ell$. Swapping the order of summation in $Y$ and using $a_{i-1}\ge a_{\ell-1}$ whenever $i\le\ell$ gives $Y\le\sum_{\ell:a_{\ell-1}\ne0}d_\ell a_{\ell-1}^{-\alpha}\sum_{i\le\ell-1}2^{pi}=\frac{T^{-1}}{1-T^{-1}}\sum_{\ell:a_{\ell-1}\ne0}2^{p\ell}a_{\ell-1}^{-\alpha}d_\ell=\frac{1}{T-1}S$, where $S:=\sum_{\ell:a_{\ell-1}\ne0}2^{p\ell}a_{\ell-1}^{-\alpha}d_\ell$. On the other hand, the block bound itself gives $I\ge c_0S$, so $S\le I/c_0$ and therefore $I\ge c_0X-\frac{c_0}{T-1}S\ge c_0X-\frac{1}{T-1}I$, that is $I\ge\frac{c_0(T-1)}{T}X$. [F2, F3, step 1.1, algebra]

3.1 The blocks $D_i\times D_j$ with $j\le i-2$ and $D_i\times Z$ are pairwise disjoint: the $D_i$ are disjoint in the first coordinate, and for each $i$ the second-coordinate bands and $Z$ are disjoint. Hence [F3] gives $I\le[f]_{\theta,p}^p$. Relabelling $k=i-1$ in $X=\sum_{i:a_{i-1}\ne0}2^{pi}a_{i-1}^{-\alpha}a_i$ yields $X=2^p\sum_{k:a_k\ne0}2^{pk}a_k^{-\alpha}a_{k+1}$, so $[f]_{\theta,p}^p\ge\frac{c_0(T-1)2^p}{T}\sum_{k:a_k\ne0}a_{k+1}a_k^{-p\theta/d}2^{pk}$, which is the assertion with $c=\frac{c_0(T-1)2^p}{T}>0$. [F3, step 2.1, algebra] ∎