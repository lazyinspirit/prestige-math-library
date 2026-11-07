---
id: ex-mr-restricted-bilinear-parameter-balance
kind: example
title: "Conditional parameter balance for the restricted bilinear estimate"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps:
  - lem-mr-bilinear-restricted-comparison-under-moment-inputs
justified_by: []
aliases: []
sources:
  references:
    - title: "Matomäki and Radziwiłł, Multiplicative Functions in Short Intervals, §10, Theorem 4 parameter choice"
      url: "https://arxiv.org/pdf/1501.04585v4"
---

## Example

Take $0<\eta<1/6$, $e\le P\le Q\le h$, $N=\sqrt{x}\ge10$,
$$H_1=hN\le H_2=x(\log x)^{-1/5}\le x/8,\qquad T_0=(\log x)^{1/12},\qquad T_0\le x/H_2,$$
and put
$$\varepsilon=\frac{(\log Q)^{1/6}}{P^{1/12-\eta/2}}+(\log x)^{-1/100}\le1/4.$$
Let $a_n=f(n)\mathbf1_S(n)$ for a fixed global set $S\subseteq\mathbb N$ and real 1-bounded multiplicative $f$. Suppose the moment and long-average hypotheses (M), (L1), (L2) of the comparison lemma hold with $E\le C_0\varepsilon^2$ and $L\le C_1\varepsilon$. Then
$$\frac1{h\sqrt{x}\log2}\sum_{\substack{x\le n_1n_2\le x+h\sqrt{x}\\\sqrt{x}\le n_1\le2\sqrt{x}\\n_1,n_2\in S}}f(n_1)f(n_2)=\left(\frac1{\sqrt{x}}\sum_{\substack{\sqrt{x}\le n\le2\sqrt{x}\\n\in S}}f(n)\right)^2+O_{C_0,C_1}(\varepsilon).$$
This is a conditional parameter calculation on the stated range of $h$. It neither proves (M), (L1), (L2) nor extends the range of $h$.

## Example references

[[lem-mr-bilinear-restricted-comparison-under-moment-inputs]]

[Matomäki–Radziwiłł, §10, printed pp. 32–33](https://arxiv.org/pdf/1501.04585v4)

## Facts & Assumptions

**Given:** Exactly the parameters and conditional moment and long-average bounds in the Example.

[F1] The comparison lemma with all its explicit hypotheses: [[lem-mr-bilinear-restricted-comparison-under-moment-inputs]].

## Verification

1.1 Choose $\delta=\varepsilon$, which lies in $(0,1/4]$. Then $E/\delta\le C_0\varepsilon$ and $L\le C_1\varepsilon$. Also $T_0^2H_2/x=(\log x)^{-1/30}\le(\log x)^{-1/100}\le\varepsilon$, since $H_2\le x/8$ implies $\log x>1$. Finally $N/H_1=1/h\le1/P\le P^{-1/12+\eta/2}(\log Q)^{1/6}\le\varepsilon$. Thus every error term in F1 is $O_{C_0,C_1}(\varepsilon)$. [F1, given, choose, algebra]

2.1 All range hypotheses of F1 are supplied in the Example, including $H_1\ge N$ since $h\ge Q\ge e$. Substitution of $a_n=f(n)\mathbf1_S(n)$ identifies its $A$ and $B(H_1)$ exactly with the displayed mean and restricted product sum, respectively. Applying F1 and step 1.1 proves the conditional formula. [F1, given, step 1.1, algebra] ∎
