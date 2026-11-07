---
dependency_level: 1
id: lem-gowers-large-difference-spectra-have-product-additivity
kind: lemma
title: "Large difference spectra have weighted product additivity"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-gowers-weighted-correlation-graph-additivity
  - def-unitary-discrete-fourier-transform-on-z-mod-n
  - thm-holder-inequality-for-integrals
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "W. T. Gowers, A new proof of Szemeredi theorem, Lemmas14.2--14.3, printed pp.555--556; the sum-over-base reduction is reconstructed explicitly"
      url: https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf
---

## Statement

Let $N,k\ge1$, $G=\mathbb Z/N\mathbb Z$, and $0<\gamma\le1$. For $B\subseteq G^k$ and $\phi:B\to G$, define the weighted product-additivity property as follows. Choose any coordinate $j$, any $m\ge1$ restrictions $\phi_1,\ldots,\phi_m$ obtained by fixing all coordinates except $j$, any common domain $E\subseteq G$ of those restrictions, and any $\theta:E\to[0,\infty)$. Then the sum of $\theta(a)\theta(b)\theta(c)\theta(d)$ over $a,b,c,d\in E$ satisfying $a+b=c+d$ and every equation $\phi_i(a)+\phi_i(b)=\phi_i(c)+\phi_i(d)$ must be at least $\gamma^{8m}N^{-1}(\sum_E\theta)^4$.

Each of the following hypotheses implies this property, for every cyclic modulus.

(a) There is $f:G\to\mathbb C$, $|f|\le1$, such that for every $h\in B$ the function $\Delta_hf(x)=\prod_{\epsilon\in\{0,1\}^k}\mathcal C^{|\epsilon|}f(x+\epsilon\cdot h)$ satisfies $|\widetilde{\Delta_hf}(\phi(h))|\ge\gamma N$.

(b) There is $F:G^{k+1}\to\mathbb C$, $|F|\le1$, such that, writing
$$H_h(y)=\sum_{x\in G^k}\prod_{\epsilon\in\{0,1\}^k}\mathcal C^{|\epsilon|}F(x_1+\epsilon_1h_1,\ldots,x_k+\epsilon_kh_k,y),$$
one has $|\widetilde H_h(\phi(h))|\ge\gamma N^{k+1}$ for every $h\in B$. Here $\mathcal C$ is complex conjugation and all tilded Fourier transforms are unnormalised in the remaining scalar variable.

## Statement references

[Gowers, Lemmas14.2--14.3, printed pp.555--556; the sum-over-base reduction is reconstructed explicitly](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf)

## Facts & Assumptions

**Given:** The functions, restriction data, common domain and nonnegative weights in the respective clause. Extend the weights by zero off $E$.

[F1] The two weighted correlation implications are proved in [[lem-gowers-weighted-correlation-graph-additivity]]. Its frequency maps may be extended arbitrarily where their weights are zero.

[F2] Characters and the unnormalised Fourier convention are those of [[def-unitary-discrete-fourier-transform-on-z-mod-n]]. Conjugating a function conjugates its Fourier value after reversing the frequency.

[F3] Finite Cauchy--Schwarz and Holder are [[thm-holder-inequality-for-integrals]].

## Proof

1.1 If $\sum_E\theta=0$, every weight vanishes and the claimed inequality is $0\ge0$. Otherwise fix any coordinate $j$ and the $m$ restrictions in the Statement. Permute the coordinates to put $j$ last; the cube sign $|\epsilon|$ is unchanged. Write $S=\sum_E\theta>0$. We will apply [F1] with frequency maps $\sigma_i=-\phi_i$ on $E$, extended by zero outside $E$, and parameter $\alpha=\gamma^{2m}S/N$. Simultaneous additivity of the $\sigma_i$ is equivalent to that of the $\phi_i$. [given, F1, F2, construct, algebra]

2.1 For clause(a), let the fixed other increments of restriction $i$ be $h^{(i)}\in G^{k-1}$, and put $v_i(x)=\prod_{\epsilon\in\{0,1\}^{k-1}}\mathcal C^{|\epsilon|}f(x+\epsilon\cdot h^{(i)})$. This is bounded by one, and the full cube with last increment $h$ equals $v_i(x)\overline{v_i(x+h)}$. Its Fourier value at $\phi_i(h)$ is therefore the conjugate of $C_i(h,-\phi_i(h))$, with $C_i$ as in [F1](a). Thus $|C_i(h,\sigma_i(h))|\ge\gamma N$ on $E$. The weighted product of their squared magnitudes has sum at least $\gamma^{2m}N^{2m}S=\alpha N^{2m+1}$. Clause(a) of [F1] gives exactly $\alpha^4N^3=\gamma^{8m}S^4/N$. This proves the asserted product property for(a). [F1, F2, step 1.1, construct, algebra]

2.2 For clause(b), for each restriction $i$ and each base vector $u\in G^{k-1}$ define $V_{i,u}(a,y)=\prod_{\epsilon\in\{0,1\}^{k-1}}\mathcal C^{|\epsilon|}F(u+\epsilon h^{(i)},a,y)$, where the first $k-1$ coordinate products are componentwise. It is bounded by one. Splitting the full cube into its last-coordinate faces shows that $\widetilde H_{(h^{(i)},h)}(\phi_i(h))$ is the conjugate of $\sum_uD_{i,u}(h,-\phi_i(h))$, with $D_{i,u}$ the two-variable correlation of [F1](b). The same base vector $u$ occurs on both faces; no product of independently averaged faces is asserted. [F1, F2, step 1.1, construct, algebra]

3.1 Put $n=N^{k-1}$. By [F3], $|\sum_uD_{i,u}(h,\sigma_i(h))|^2\le n\sum_u|D_{i,u}(h,\sigma_i(h))|^2$. Multiply these $m$ inequalities, then sum with weights $\theta(h)$. The assumed lower bounds give $\gamma^{2m}n^{2m}N^{4m}S\le n^m\sum_{u_1,\ldots,u_m}\sum_h\theta(h)\prod_i|D_{i,u_i}(h,\sigma_i(h))|^2$. Averaging over the $n^m$ base-vector tuples supplies a fixed tuple with inner sum at least $\gamma^{2m}N^{4m}S=\alpha N^{4m+1}$. Apply [F1](b) to its actual bounded functions $V_{i,u_i}$. Its graph count is again at least $\alpha^4N^3=\gamma^{8m}S^4/N$. Every coordinate and finite family of restrictions was arbitrary, so this is the full product property. For $k=1$, the empty base vector has one value and the same argument applies; all selections are finite, including at $N=1$. [F1, F3, step 1.1, step 2.2, algebra] ∎
