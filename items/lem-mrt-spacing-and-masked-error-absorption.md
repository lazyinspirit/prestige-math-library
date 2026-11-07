---
id: lem-mrt-spacing-and-masked-error-absorption
kind: lemma
title: MRT spacing and inclusion–exclusion error absorption
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
proof_strategy: direct
deps:
  - lem-mrt-masked-near-minimum-renormalization
  - thm-fundamental-theorem-of-arithmetic
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Matomäki–Radziwiłł–Tao, An averaged form of Chowla's conjecture, v3, Appendix A, conditions (A.1)–(A.2) and Lemma A.7"
      url: https://arxiv.org/pdf/1503.05121v3
---

## Statement

There are absolute constants $C,X_1>0$ with the following property. Let $X\ge X_1$, $\sqrt X\le X_0\le X$, $L=\log X$, $0<\eta<1/6$, and let $J\ge1$ and $1\le P_j\le Q_j\le\exp(\sqrt{\log X_0})$ satisfy
$$\frac{\eta}{j^2}\log P_j\ge8\log Q_{j-1}+16\log j\quad(2\le j\le J).$$
Let $\mathcal B_j$ be the primes in the literal intervals $[P_j,Q_j]$, or instead in the literal intervals $(P_j,Q_j]$, consistently throughout. Put $\kappa(n)=\prod_{j=1}^J\mathbf1_{\{\exists p\in\mathcal B_j:p\mid n\}}$. Let $f$ be a complex 1-bounded multiplicative function with $f(1)=1$, and let $t_1$ be any fixed real number such that $D_X(t_1)=\sum_{p\le X}(1-\operatorname{Re}(f(p)p^{-it_1}))/p\le\frac18\log\log X$. Then for $x\in[X,2X]$ and $|t-t_1|\le L^{1/16}$,
$$\sum_{n\le x}\kappa(n)f(n)n^{-it}=\frac{x^{i(t_1-t)}}{1+i(t_1-t)}\sum_{n\le x}\kappa(n)f(n)n^{-it_1}+O(xL^{-9/100}),$$
uniformly in all the stated data. If any $\mathcal B_j$ is empty both sums vanish. Otherwise the blocks are disjoint and $2^J\le CL^{1/100}$.

Also write $\ell=\log x$, $T=\ell^2$ and $Y=\max(Q_J,\ell^4)$. Uniformly for the same $x$, $Y\ge\max(e^8,T^2)$, $Y\le\sqrt{x}$, $T\le x^{9/10}$, and $\log Y\le\sqrt L$. Thus, whenever a separate formula is available for each of the $2^J$ avoidance masks with individual error bounded by $C_0x(\log Y/\ell+\ell/T)$, the combined error is at most $CC_0xL^{-49/100}$ in the nonempty-block case; if a block is empty the combined target is zero. This last assertion is conditional on the separate formulas and supplies none of their main terms.

Consequently, if a separate argument gives uniformly $|\sum_{n\le x}\kappa(n)f(n)n^{-it_1}|\le C_1x(e^{-M/2}+L^{-1/2}+L^{-49/100})$ for $M\ge0$, then the first displayed identity implies
$$\left|\sum_{n\le x}\kappa(n)f(n)n^{-it}\right|\le C(1+C_1)x\left(\frac{e^{-M/2}}{1+|t-t_1|}+L^{-1/16}\right).$$
The latter assumption is not proved here. No choice axiom is used.

## Statement references

[MRT, Appendix A](https://arxiv.org/pdf/1503.05121v3)

## Facts & Assumptions

**Given:** The data in the Statement and its literal interval convention. The separate per-mask formulas and baseline bound are used only when explicitly assumed in the conditional conclusions.

[F1] [[lem-mrt-masked-near-minimum-renormalization]] supplies the common factor and uniform error $O(xL^{-1/10})$ simultaneously for any finite collection of prime-avoidance masks below $\exp(\sqrt L)$, with total error bounded by the sum of the absolute coefficients.

[F2] [[thm-fundamental-theorem-of-arithmetic]] gives the finite prime-divisibility structure of every positive integer. The resulting inclusion–exclusion expansion is a finite product identity.

## Proof

1.1 If any $\mathcal B_j$ is empty, $\kappa$ is identically zero, giving the first identity and the conditional final bound immediately. Otherwise $Q_1\ge2$. For $j\ge2$, the spacing inequality implies $\log P_j\ge(8j^2/\eta)\log Q_{j-1}+16j^2\log j/\eta>\log Q_{j-1}$, so successive literal intervals and their prime blocks are disjoint. As $Q_j\ge P_j$ and $\eta<1/6$, also $\log Q_j\ge48j^2\log Q_{j-1}$. [given, algebra]

2.1 Fix once and for all a positive integer $j_0\ge2$ such that $48j^2\ge2^{50}$ for every $j\ge j_0$. If $J\ge j_0$, iteration of step 1.1 gives $\log Q_J\ge(\log2)2^{50(J-j_0)}$. Since $\log Q_J\le\sqrt{\log X_0}\le\sqrt L$, we obtain $2^J\le2^{j_0}(\sqrt L/\log2)^{1/50}=CL^{1/100}$. If $J<j_0$, the same bound follows after increasing $C$, since $L\ge1$. The constant is absolute and independent of $J$ and $\eta$. [step 1.1, given, algebra]

3.1 For each subset $I\subseteq\{1,\ldots,J\}$ let $g_I(n)$ indicate avoidance of all primes in $\bigcup_{j\in I}\mathcal B_j$. For each $n$, $\kappa(n)=\prod_j(1-g_{\{j\}}(n))=\sum_I(-1)^{|I|}g_I(n)$ by the finite distributive law; [F2] ensures the prime-divisibility sets are well-defined and finite on $n$. All masks lie below $\exp(\sqrt L)$. Apply [F1] to every $g_I$ with the common fixed $t_1$, multiply by $(-1)^{|I|}$ and add. The total error is $O(2^JxL^{-1/10})=O(xL^{-9/100})$ by step 2.1, proving the first identity when all blocks are nonempty. The expansion uses the actual closed or half-open masks, without identifying different endpoints. [F1, F2, step 2.1, given, algebra]

3.2 For $x\in[X,2X]$, $L\le\ell\le L+\log2\le2L$ for $L\ge1$. Thus $\log Y=\max(\log Q_J,4\log\ell)\le\sqrt L$ for sufficiently large absolute $X_1$; also $Y\ge\ell^4=T^2$ and $Y\ge e^8$. As $\sqrt L\le L/2$, $Y\le e^{L/2}\le\sqrt x$, and $T=\ell^2\le x^{9/10}$ for sufficiently large $X_1$. Consequently $\log Y/\ell+\ell/T\le L^{-1/2}+L^{-1}\le2L^{-1/2}$. Adding $2^J$ assumed errors and using step 2.1 gives $O(C_0xL^{-49/100})$. No formula or main term is assumed to exist unless separately supplied. [step 2.1, given, algebra]

4.1 If the stated baseline bound is separately available, substitute it in step 3.1. For real $u$, $|1+iu|^{-1}=(1+u^2)^{-1/2}\le\sqrt2/(1+|u|)$. Since $L\ge1$ and $1/2,49/100,9/100>1/16$, each of $L^{-1/2}$, $L^{-49/100}$ and $L^{-9/100}$ is at most $L^{-1/16}$. This gives the conditional final inequality, with its constant depending linearly on $C_1$. All constructions use explicit finite subsets and a fixed $t_1$. [step 3.1, step 3.2, given, algebra] ∎

## Remarks

This lemma isolates the spacing and accumulated error balance only. It does not prove the separate masked triple-integral formula, its Euler-block and rough-polynomial inputs, the resonant baseline bound, or the parent theorem.
