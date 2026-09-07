---
id: lem-finite-truncations-are-dense-in-c0-and-ell-one
kind: lemma
title: "Finite truncations approximate null and summable sequences"
status: draft
origin: pipeline
deps: ["def-c-zero-and-ell-infinity", "rem-ell-p-is-l-p-of-counting-measure"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Examples 1.35–1.36, pp.36–37"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "The errors are respectively sup_{n>N}|x_n| and sum_{n>N}|a_n|. Define the complex sequence model explicitly, with coordinatewise operations and the absolute-sum norm; scalar series convergence justifies the norm and pairing."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. Use coordinates indexed by $\mathbb N=\{0,1,\ldots\}$. Define $\ell^1(\mathbb K)=\{a:\sum_{n=0}^\infty|a_n|<\infty\}$, with coordinatewise operations and norm $\|a\|_1=\sum_n|a_n|$. Let $P_N$ retain coordinates $0,\ldots,N$ and set all others to zero. Then $$\|x-P_Nx\|_\infty\longrightarrow0\quad(x\in c_0(\mathbb K)),\qquad\|a-P_Na\|_1\longrightarrow0\quad(a\in\ell^1(\mathbb K)).$$

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-c-zero-and-ell-infinity]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$, with absolute value in the real case and modulus $|a+ib|=\sqrt{a^2+b^2}$ in the complex case. A scalar sequence here is a function $x:\mathbb N\to\mathbb K$, including index zero. Let $\ell^\infty=\{x=(x_n)_{n\in\mathbb N}:\sup_{n\in\mathbb N}|x_n|<\infty\},\qquad c_0=\{x\in\ell^\infty:x_n\to0\},$ both equipped with $\|x\|_\infty=\sup_{n\in\mathbb N}|x_n|$. Thus $c_0$ is a specified linear subspace of the bounded-sequence space $\ell^\infty$. Here $x_n\to0$ means that for every real $\varepsilon>0$ there is $N\in\mathbb N$ such that $|x_n|<\varepsilon$ for all $n\ge N$. Addition and scalar multiplication are coordinatewise. The scalar triangle inequality makes bounded sequences and null sequences linear spaces and gives the triangle inequality for the displayed supremum norm. Absolute homogeneity follows coordinatewise, and a zero supremum forces every coordinate to vanish.

[F2] From [[rem-ell-p-is-l-p-of-counting-measure]], with its stated hypotheses: On $(\mathbb N,\mathcal P(\mathbb N),\#)$ with counting measure, every function $f:\mathbb N\to\mathbb R$ is measurable. Writing $a_k:=f(k)$, one has $\int |f|^p\,d\#=\sum_{k=0}^\infty |a_k|^p\qquad(0<p<\infty),$ by the counting-measure integral dictionary, so $\mathcal L^p(\#)$ is exactly the usual sequence class $\ell^p$. Also $\|f\|_\infty=\sup_{k\in\mathbb N}|a_k|,$ because a subset of $\mathbb N$ has counting measure zero only when it is empty. Hence the quotient by almost-everywhere equality does nothing: for counting measure on $\mathbb N$, equality almost everywhere means equality everywhere.

## Proof

1.1 The real absolute-sum model agrees with the counting-measure dictionary at $p=1$. For either scalar field, $\sum|a_n+b_n|\le\sum|a_n|+\sum|b_n|$, absolute homogeneity holds termwise, and a zero sum forces every coordinate to vanish; thus the stated model is a normed linear space. [F2, given]

2.1 For $x\in c_0$, $\|x-P_Nx\|_\infty=\sup_{n>N}|x_n|$, which tends to zero by the definition of convergence to zero. For $a\in\ell^1$, the error is $\sum_{n>N}|a_n|$, the tail of a convergent nonnegative series, so it also tends to zero. Both formulas hold at $N=0$ and for the zero sequence. [F1, step 1.1]

3.1 Each truncation has finite support, so these limits establish finite-support density in both norms. For a sequence already supported in $\{0,\ldots,N\}$ the corresponding error is exactly zero. [step 2.1] ∎
