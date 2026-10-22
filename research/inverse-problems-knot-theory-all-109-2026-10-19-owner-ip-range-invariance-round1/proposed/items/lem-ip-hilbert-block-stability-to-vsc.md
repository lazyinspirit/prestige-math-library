---
id: lem-ip-hilbert-block-stability-to-vsc
kind: lemma
title: A Hilbert block cutoff converts conditional stability to a source inequality
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Frederic Weidling, Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs
      url: https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1
      locator: Theorem 6.12, complete proof, printed pp. 181–182
---

## Statement

Let $s_0<s_1<s_2<2s_1-s_0$. For finite-dimensional real Hilbert spaces $E_j$, $j\ge0$, define
$$\|f\|_{H^s}^2:=\sum_{j\ge0}2^{2js}\|f_j\|_{E_j}^2,\qquad \|f\|_{B^s_{2,\infty}}:=\sup_{j\ge0}2^{js}\|f_j\|_{E_j}.$$
Let $D\subset H^{s_1}$, let $G:D\to Y$ map into a normed space, and let $f^\dagger\in D$ satisfy $\|f^\dagger\|_{B^{s_2}_{2,\infty}}\le A$. Suppose $\|f-f^\dagger\|_{H^{s_0}}\le C\omega(\|G(f)-G(f^\dagger)\|_Y)$ on a specified subset $D_0\subset D$ containing $f^\dagger$, where $\omega(0)=0$ and $0\le\omega\le1$. Then there is $C_*>0$ depending only on $s_0,s_1,s_2,A,C$ such that, for every $f\in D_0$,
$$-\langle f^\dagger,f-f^\dagger\rangle_{H^{s_1}}\le\frac34\left(\frac12\|f-f^\dagger\|_{H^{s_1}}^2\right)+C_*\omega(\|G(f)-G(f^\dagger)\|_Y)^{2(s_2-s_1)/(s_2-s_0)}.$$
In particular, if $s_0=1$, $s_1\in(5/2,7/2)$, $s_2\in(s_1,2s_1-1)$, and $\omega(t)\lesssim[\log(1/t)]^{-(s_1-3/2)}$ as $t\downarrow0$, the source term is bounded by a constant times $[\log(1/t)]^{-\nu}$, where
$$\nu=\frac{(s_2-s_1)(2s_1-3)}{s_2-1}.$$
This statement concerns the specified block spaces; using it for function-space Besov and Sobolev norms requires their corresponding decomposition and dual-pairing identification.

## Statement references

[Weidling, Theorem 6.12](https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1)

## Facts & Assumptions

**Given:** The spaces, exponents, truth bound and stability estimate in the Statement.

[A1] $d:=s_2-s_1>0$ and $a:=2s_1-s_2-s_0>0$.

## Proof

1.1 Set $e=f-f^\dagger$, $W=\omega(\|G(f)-G(f^\dagger)\|_Y)$, and let $P_J$ retain blocks $0\le j\le J$. The truth bound and the geometric-series formula give $\|(I-P_J)f^\dagger\|_{H^{s_1}}^2\le A^2\sum_{j>J}2^{-2jd}\le C_1A^2 2^{-2Jd}$. For the low blocks, weighted Cauchy–Schwarz gives $|\langle P_Jf^\dagger,e\rangle_{H^{s_1}}|\le(\sum_{j\le J}2^{2j(2s_1-s_0)}\|f_j^\dagger\|^2)^{1/2}\|e\|_{H^{s_0}}\le C_2AC2^{Ja}W$, since $a>0$. All series converge in their stated norms; the same estimates follow from finite partial sums and their limits. [A1, given, algebra]

2.1 Apply $uv\le3u^2/8+2v^2/3$, obtained by expanding $(\sqrt{3/8}\,u-\sqrt{2/3}\,v)^2\ge0$, to the high-block pairing in step 1.1. This gives $-\langle f^\dagger,e\rangle_{H^{s_1}}\le3\|e\|_{H^{s_1}}^2/8+C_3(2^{-2Jd}+2^{Ja}W)$. If $W=0$, the stability estimate gives $e=0$ in $H^{s_0}$ and hence every block of $e$ is zero; the conclusion holds directly. [step 1.1, given, algebra]

3.1 For $0<W\le1$, choose the integer $J\ge0$ satisfying $2^{-J(a+2d)}\ge W>2^{-(J+1)(a+2d)}$. Then $2^{-2Jd}\le2^{2d}W^{2d/(a+2d)}$ and $2^{Ja}W\le W^{2d/(a+2d)}$. Substitution into step 2.1 proves the inequality since $a+2d=s_2-s_0$. In the stated specialization, raising the logarithmic stability modulus to $2d/(s_2-1)$ multiplies its logarithmic exponent by this factor, giving $\nu=2(s_1-3/2)(s_2-s_1)/(s_2-1)$ as claimed. [A1, step 2.1, algebra] ∎
