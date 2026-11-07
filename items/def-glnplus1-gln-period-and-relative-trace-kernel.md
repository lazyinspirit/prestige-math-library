---
dependency_level: 2
id: def-glnplus1-gln-period-and-relative-trace-kernel
kind: definition
title: "GL(n+1) × GL(n) Period and Relative Trace Kernel"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-unitary-cuspidal-generic-gln-representation
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula and L-functions for GL(n+1) × GL(n), §§1.5, 2.1"
      url: "https://arxiv.org/pdf/2303.02225v1"
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), Lecture 1, §§1.1–1.2"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Definition

Let $F$ be a number field with adele ring $\mathbb A_F$, let $n\geq2$, and put $G=\mathrm{GL}_{n+1}$ and $G'=\mathrm{GL}_n$. Fix a unitary central character $\omega:F^\times\backslash\mathbb A_F^\times\to S^1$, normalized to be trivial on the positive real split center, as are the other central characters in Yang’s formulas. For an algebraic group $H$ write $[H]=H(F)\backslash H(\mathbb A_F)$ and $[\overline H]=Z_H(\mathbb A_F)H(F)\backslash H(\mathbb A_F)$, and give quotient groups the Tamagawa measures for which the unipotent quotients have volume one. Embed $G'$ in $G$ by $\iota(x)=\operatorname{diag}(x,1)$. Fix a nontrivial additive character $\psi:F\backslash\mathbb A_F\to\mathbb C^\times$ and set $\theta_m(u)=\psi(\sum_{i=1}^{m-1}u_{i,i+1})$ for the upper-unitriangular subgroup $N_m$ of $\mathrm{GL}_m$.

For a cuspidal automorphic form $\phi$ in a globally $\theta_{n+1}$-generic representation, its Whittaker function is $W_\phi(g)=\int_{[N_{n+1}]}\phi(ug)\overline{\theta_{n+1}(u)}\,du$. On $G'$ use the opposite character: $W'_{\phi'}(g)=\int_{[N_n]}\phi'(ug)\theta_n(u)\,du$. Thus the larger-rank function transforms by $\theta_{n+1}$ and the smaller-rank function by $\theta_n^{-1}$. For Whittaker functions $W$ and $W'$ with these opposite characters, define, initially on the domain of absolute convergence,

$$\Psi(s,W,W')=\int_{N_n(\mathbb A_F)\backslash G'(\mathbb A_F)}W(\iota(x))W'(x)|\det x|_{\mathbb A_F}^{s}\,dx.$$

This is the shifted Whittaker period: its central Rankin–Selberg value occurs at $s=0$, with argument $1/2$ in the functional-equation-centered convention. It is defined here only as an integral; this definition asserts no continuation, functional equation, or identification with an $L$-function.

For a smooth function $f:G(\mathbb A_F)\to\mathbb C$, finite under both left and right translation by the chosen archimedean maximal compact subgroup and compactly supported modulo the center with $f(zg)=\omega(z)^{-1}f(g)$, the automorphic kernel is $K_f(g_1,g_2)=\sum_{\gamma\in Z(F)\backslash G(F)}f(g_1^{-1}\gamma g_2)$ wherever the sum is defined. The summand is independent of the rational central representative because the Hecke character is trivial on $F^\times$. Convolution uses the quotient $Z(\mathbb A_F)\backslash G(\mathbb A_F)$ with the compensating central character. Relative trace integrals use the restrictions $K_f(\iota(x),\iota(y))$ for $x,y\in G'(\mathbb A_F)$. When $K_f$ is projected to the cuspidal summand of $L^2([G],\omega)$, write the result $K_{f,0}$ and write $K_{f,\mathrm{Eis}}+K_{f,\mathrm{Res}}$ for its remaining continuous and residual spectral summands.

## Definition references

[Liyang Yang, *Relative Trace Formula and L-functions for GL(n+1) × GL(n)*, §§1.5 and 2.1](https://arxiv.org/pdf/2303.02225v1)

[James W. Cogdell, *L-functions and Converse Theorems for GL(n)*, Lecture 1, §§1.1–1.2](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)

The opposite Whittaker characters make the period integrand invariant under left $N_n(\mathbb A_F)$. Central quotient notation, conjugated characters and rational central quotients are retained explicitly; their omission would change or invalidate the defining integrals.
