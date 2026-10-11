---
id: ex-exterior-square-of-the-fi-permutation-module
kind: example
title: "The exterior square of the permutation FI-module has character polynomial $\\binom{X_1}{2}-X_2$"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-fi-category-and-fi-module,
       def-character-polynomial-in-cycle-counts,
       ex-fi-permutation-module-has-character-x-one,
       def-kth-exterior-power-of-a-linear-map,
       def-kth-exterior-power-by-quotient,
       def-exterior-algebra-of-a-finite-free-module,
       lem-exterior-algebra-basis-monomials,
       def-permutation-support-disjoint-cycles-and-cycle-type,
       def-trace-of-a-square-matrix]
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
    date: 2026-10-11
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, “FI-modules and stability for representations of symmetric groups”, arXiv:1204.4533v4 (2014); published in Duke Math. J. 164 (2015) 1833–1910"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "The introductory exterior-square computation, printed p. 4: for $W=\\Lambda^2V$ with $V$ the permutation representation one has $\\chi_W=\\binom{X_1}{2}-X_2$"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (author-hosted full text)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §7, Example I.7.14, printed pp. 122–124: evaluation of character polynomials on cycle counts"
---

## Example

Let $V=M(1)$ be the permutation FI-module of
[[ex-fi-permutation-module-has-character-x-one]], so $V_S$ is the free
$k$-module on $S$ and $V(f)$ is the linear extension of $f$, and define
$W_S:=\Lambda^2V_S$ with $W(f):=\Lambda^2V(f)$
([[def-kth-exterior-power-by-quotient]],
[[def-kth-exterior-power-of-a-linear-map]]). Then $W$ is an FI-module
([[def-fi-category-and-fi-module]]) with $W_n\cong\Lambda^2(k^n)$ as an
$S_n$-module, and its character is the character polynomial

$$\binom{X_1}{2}-X_2$$

of weighted degree $2$ ([[def-character-polynomial-in-cycle-counts]]): for
every $n\ge0$ and every $\sigma\in S_n$ the trace of $\sigma$ on $W_n$ equals
$\binom{X_1(\sigma)}{2}-X_2(\sigma)$, where $X_1(\sigma)$ is the number of
fixed points and $X_2(\sigma)$ the number of $2$-cycles
([[def-permutation-support-disjoint-cycles-and-cycle-type]]). No choice
principle is used.

The displayed integer-valued expression is first evaluated on the integer
cycle counts and then mapped to $k$ by $\mathbb Z\to k$. This convention
also covers positive characteristic; rational polynomial coefficients are
not reduced individually when their denominators vanish in $k$.

## Facts & Assumptions

**Given:** A field $k$; the permutation FI-module $V$ with $V_S=k^{(S)}$ and basis $\{e_s:s\in S\}$; and $W_S=\Lambda^2V_S$ with $W(f)=\Lambda^2V(f)$.

[F1] $V$ is an FI-module: $V(\mathrm{id}_S)=\mathrm{id}$ and $V(g\circ f)=V(g)V(f)$; $V\cong M(1)$ and $V_n\cong k^n$ is the permutation representation of $S_n$ ([[def-fi-category-and-fi-module]], [[ex-fi-permutation-module-has-character-x-one]]).

[F2] For a linear map $T\colon V\to W$, the exterior square $\Lambda^2T$ is induced by $T\otimes T$ on $V\otimes V$ and satisfies $\Lambda^2(g\circ f)=\Lambda^2(g)\circ\Lambda^2(f)$ and $\Lambda^2(\mathrm{id})=\mathrm{id}$; $\Lambda^2$ is the quotient of $V^{\otimes2}$ by the span of the tensors $v\otimes v$ ([[def-kth-exterior-power-of-a-linear-map]], [[def-kth-exterior-power-by-quotient]]).

[F3] If $F$ is a finite free $R$-module with ordered basis $e_1,\dots,e_r$, the wedges $e_i\wedge e_j$ with $i<j$ form an $R$-basis of the degree-two part $\bigwedge^2F$ of the exterior algebra, which is the same quotient as $\Lambda^2F$ ([[def-exterior-algebra-of-a-finite-free-module]], [[lem-exterior-algebra-basis-monomials]], [[def-kth-exterior-power-by-quotient]]).

[F4] $X_1(\sigma)$ is the number $c_1(\sigma)$ of fixed points of $\sigma$ and, more generally, $X_r(\sigma)=c_r(\sigma)$ is the number of $r$-element orbits; a partition of $\{i,j\}$ into orbits of $\sigma$ is either two $1$-cycles or one $2$-cycle ([[def-character-polynomial-in-cycle-counts]], [[def-permutation-support-disjoint-cycles-and-cycle-type]]).

[F5] For a square matrix, the trace is the sum of the diagonal entries ([[def-trace-of-a-square-matrix]]); the polynomial $\binom{X_1}{2}-X_2\in\mathbb Q[X_1,X_2]$ has weighted degree $2$.

## Verification

**Proof technique:** direct.

1.1 $W$ is a functor: $W(\mathrm{id}_S)=\Lambda^2(\mathrm{id}_{V_S})=\mathrm{id}_{W_S}$ and $W(g\circ f)=\Lambda^2(V(g)V(f))=\Lambda^2V(g)\circ\Lambda^2V(f)=W(g)W(f)$, using that $V$ satisfies the functor axioms [F1] and that $\Lambda^2$ preserves identities and composites [F2]; hence $W$ is an FI-module with values $W_S=\Lambda^2V_S$, and for $S=[n]$ this is $W_n=\Lambda^2(k^n)$ with the action induced by the permutation action of $S_n$ on $k^n$. [F1, F2]

1.2 Fix $n$ and $\sigma\in S_n$. By [F3], applied to the free module $V_n$ with basis $e_0,\dots,e_{n-1}$, the elements $e_i\wedge e_j$ with $i<j$ form a $k$-basis of $W_n$; and $\sigma\cdot(e_i\wedge e_j)=e_{\sigma(i)}\wedge e_{\sigma(j)}$. Hence the diagonal entry of the matrix of $\sigma$ at the basis element $e_i\wedge e_j$ is the coefficient of $e_i\wedge e_j$ in $e_{\sigma(i)}\wedge e_{\sigma(j)}$, which can be nonzero only when $\{\sigma(i),\sigma(j)\}=\{i,j\}$. In that case $\sigma$ restricts to a bijection of the two-element set $\{i,j\}$: it is either the identity, giving coefficient $+1$, or the transposition $(\,i\ j\,)$, giving $e_j\wedge e_i=-e_i\wedge e_j$ and coefficient $-1$. There is no other possibility, so the diagonal entry is $+1$ exactly for the unordered pairs of distinct fixed points of $\sigma$, is $-1$ exactly for the $2$-cycles of $\sigma$, and is $0$ otherwise. [F3, F4, given, algebra]

2.1 By [F5] the trace of $\sigma$ on $W_n$ is the sum of the diagonal entries computed in step 1.2, namely the number $\binom{X_1(\sigma)}{2}$ of unordered pairs of distinct fixed points minus the number $X_2(\sigma)$ of $2$-cycles: $\operatorname{tr}(\sigma;W_n)=\binom{X_1(\sigma)}{2}-X_2(\sigma)$. For $n=0$ and $n=1$ the module $W_n$ is $0$ and both sides are $0$, since then $X_1(\sigma)\le1$. This holds for every $n$, and $\binom{X_1}{2}-X_2$ is a character polynomial of weighted degree $2$, so the trace function of $W$ is given by that character polynomial. [F4, F5, step 1.2]

3.1 Steps 1.1, 1.2 and 2.1 show that $W=\Lambda^2V$ is an FI-module with $W_n\cong\Lambda^2(k^n)$ whose character is the weighted-degree-two character polynomial $\binom{X_1}{2}-X_2$. [step 1.1, step 1.2, step 2.1] ∎
