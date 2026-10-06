---
id: ex-dyadic-square-function-of-two-separated-frequency-packets
kind: example
title: "Two separated dyadic frequency packets add in Euclidean square"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition, def-inhomogeneous-dyadic-frequency-partition, def-littlewood-paley-square-function, lem-ltwo-almost-orthogonality-of-dyadic-pieces, thm-plancherel, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "(6.1.1) and the disjointness of the annular supports of the dyadic operators, printed pp. 419-421"
generation:
  role: example
---

## Example

Assume Countable Choice ([[def-countable-choice]]).
Let $0\le j<k$ be integers with $k\ge j+3$, and let $f_1,f_2\in\mathcal S(\mathbb R^n)$ have
Fourier transforms supported in $\{2^{j-1}\le|\xi|\le2^{j+1}\}$ and
$\{2^{k-1}\le|\xi|\le2^{k+1}\}$ respectively; put $f:=f_1+f_2$. Then for every
$i\ge0$ at most one of $\Delta_if_1$, $\Delta_if_2$ is nonzero, so
$$Sf^2=Sf_1^2+Sf_2^2,\qquad \|Sf\|_2^2=\|Sf_1\|_2^2+\|Sf_2\|_2^2 .$$
Moreover $\langle f_1,f_2\rangle=0$ by Plancherel, so
$\|f\|_2^2=\|f_1\|_2^2+\|f_2\|_2^2$ and the square function of the sum has the
Euclidean-square size of the two packets rather than the sum of their absolute
sizes. This is the finite two-packet instance of
[[lem-ltwo-almost-orthogonality-of-dyadic-pieces]].

## Verification

**Given:** Countable Choice and integers $0\le j<k$ with $k\ge j+3$ and $f_1,f_2\in\mathcal S(\mathbb R^n)$
with $\operatorname{supp}\widehat{f_1}\subset\{2^{j-1}\le|\xi|\le2^{j+1}\}$ and
$\operatorname{supp}\widehat{f_2}\subset\{2^{k-1}\le|\xi|\le2^{k+1}\}$;
$f=f_1+f_2$.

[L1] For every $i\ge0$ one has $\widehat{\Delta_if_t}=\varphi_i\widehat{f_t}$ for $t=1,2$, and $\varphi_i$ vanishes for $|\xi|\le2^{i-1}$ (when $i\ge1$) and for $|\xi|\ge2^{i+1}$, with the nonzero set of $\varphi_i$ contained in the open annulus $2^{i-1}<|\xi|<2^{i+1}$ for $i\ge1$ and in $\{|\xi|<2\}$ for $i=0$ ([[def-inhomogeneous-dyadic-frequency-partition]], [[lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition]]).

[L2] For every $h\in L^2$ the square function satisfies $\|Sh\|_2^2=\sum_{i\ge0}\|\Delta_ih\|_2^2$ with the two-sided $L^2$ bound of [[lem-ltwo-almost-orthogonality-of-dyadic-pieces]], in particular the sum is finite for Schwartz $h$; and $\|h\|_2^2=\int|\widehat h|^2$ ([[thm-plancherel]], [[def-littlewood-paley-square-function]]).

1.1 Disjointness of the active levels. Suppose first that $i\ge1$ and $\Delta_if_1\ne0$. Since $\widehat{\Delta_if_1}=\varphi_i\widehat{f_1}$ by [L1] and the Fourier transform is injective, there is $\xi$ with $\varphi_i(\xi)\ne0$ and $2^{j-1}\le|\xi|\le2^{j+1}$. By [L1], $\varphi_i(\xi)\ne0$ forces $2^{i-1}<|\xi|<2^{i+1}$, so $2^{j-1}<2^{i+1}$ and $2^{i-1}<2^{j+1}$, which imply $j-1\le i\le j+1$. If instead $i=0$ and $\Delta_0f_1\ne0$, then some $\xi$ in the packet support also lies in $\operatorname{supp}\varphi_0\subset\{|\xi|<2\}$; since $2^{j-1}\le|\xi|<2$, this forces $j\le1$, and therefore $0\in\{j-1,j,j+1\}$. Thus every active $i$ for $f_1$ belongs to $\{j-1,j,j+1\}\cap\{0,1,2,\dots\}$. The same argument shows every active $i$ for $f_2$ belongs to $\{k-1,k,k+1\}$; because $k\ge j+3$, the two nonnegative index sets are disjoint. Hence for every $i$ at most one of $\Delta_if_1$, $\Delta_if_2$ is nonzero. [L1, given, algebra]

2.1 Pointwise Euclidean-square identity. For every $x$ and every $i$, step 1.1 gives $|\Delta_if(x)|^2=|\Delta_if_1(x)+\Delta_if_2(x)|^2=|\Delta_if_1(x)|^2+|\Delta_if_2(x)|^2$ (the cross term vanishes because one of the two numbers is zero), hence $Sf(x)^2=\sum_i|\Delta_if(x)|^2=Sf_1(x)^2+Sf_2(x)^2$; the rearrangement is legitimate because each packet has at most three active levels by step 1.1, so only finitely many indices contribute. [L1, step 1.1, algebra]

3.1 Norms and orthogonality of the packets. Because $f_1,f_2\in\mathcal S$, both square functions lie in $L^2$ by [L2], and integrating the identity of step 2.1 gives $\|Sf\|_2^2=\|Sf_1\|_2^2+\|Sf_2\|_2^2$; the $L^2$ almost orthogonality [L2] identifies each side with the sum of the squared dyadic-piece norms. Finally, $\widehat{f_1}\widehat{f_2}=0$ pointwise because the two Fourier supports are disjoint, so Plancherel gives $\langle f_1,f_2\rangle=\int\widehat{f_1}\overline{\widehat{f_2}}=0$ and $\|f\|_2^2=\|f_1\|_2^2+\|f_2\|_2^2$. [L2, step 2.1, algebra] ∎
