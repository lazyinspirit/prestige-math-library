---
id: lem-singular-values-equal-approximation-numbers
kind: lemma
title: Singular values equal approximation numbers
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-singular-value-decomposition-for-compact-operators, def-absolute-value-and-singular-values-of-a-compact-operator, thm-rank-nullity, thm-infimum-property, def-dimension, def-kernel-and-image-of-a-linear-map, def-operator-norm, def-bounded-linear-operator, def-infimum, def-compact-linear-operator, def-hilbert-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, lem-finite-bessel-inequality, def-real-and-complex-inner-product-space, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.5, Lemma 3.19 (printed pp. 92–93)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §5"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ and
$K$ be Hilbert spaces over the same field $\mathbb F\in\{\mathbb R,\mathbb C\}$,
let $T\in\mathcal B(H,K)$ be compact
([[def-compact-linear-operator]], [[def-bounded-linear-operator]]) and let
$(s_n(T))_{n\ge1}$ be its zero-padded singular-value sequence
([[def-absolute-value-and-singular-values-of-a-compact-operator]]). For $n\ge1$
put
$$a_n(T):=\inf\bigl\{\|T-F\|:\ F\in\mathcal B(H,K), \operatorname{ran}F\text{ is finite-dimensional}, \dim_{\mathbb F}\operatorname{ran}F<n\bigr\}$$
([[def-infimum]], [[def-operator-norm]], [[def-dimension]]).  The displayed set
is nonempty because it contains $F=0$, and it is bounded below by $0$; its
infimum therefore exists by the real infimum property
([[thm-infimum-property]]). Then
$$a_n(T)=s_n(T)\qquad\text{for every }n\ge1,$$
including the zero-padded case: if $T$ has finite rank $r$ and $n>r$ then both
numbers are $0$, and if $T=0$ both are $0$ for every $n$.

## Facts & Assumptions

**Given:** Countable Choice, a compact $T:H\to K$, its singular system $(e_j)_{j\in J}$, $(f_j)_{j\in J}$, $(s_j)_{j\in J}$ from the singular-value decomposition, and the numbers $a_n(T)$.

[A1] **Singular-value decomposition.** With the index set $J$ of the positive singular values with multiplicity, there are orthonormal systems $(e_j)_{j\in J}\subseteq(\ker T)^\perp$ and $(f_j)_{j\in J}\subseteq\overline{\operatorname{ran}T}$ with $|T|e_j=s_je_j$ and $f_j=s_j^{-1}Te_j$, the expansion $Tx=\sum_{j\in J}s_j\langle x,e_j\rangle f_j$ holds in norm, and for every $n$ with $n+1\in J$ the partial sum $T_n=\sum_{j\le n}s_j\langle\cdot,e_j\rangle f_j$ satisfies $\|T-T_n\|\le s_{n+1}$; moreover $s_n(T)=0$ for all $n>r$ when $r=\dim_{\mathbb F}\operatorname{ran}T<+\infty$, and $J=\{1,\dots,r\}$ in that case ([[thm-singular-value-decomposition-for-compact-operators]], [[def-absolute-value-and-singular-values-of-a-compact-operator]]).

[A2] **Ranks of truncations.** A finite sum $\sum_{j\in F}s_j\langle\cdot,e_j\rangle f_j$ over a finite $F$ has range contained in the span of the finitely many $f_j$, hence rank at most $|F|$; for $F=\{1,\dots,n-1\}$ the truncation $T_{n-1}$ therefore has rank $<n$ ([[def-dimension]], [[def-kernel-and-image-of-a-linear-map]]).

[A3] **Rank–nullity in finite dimensions.** A linear map of a finite-dimensional space $V$ satisfies $\dim V=\dim\ker F+\dim\operatorname{ran}F$; hence a linear map on a finite-dimensional space of dimension $n$ with rank $<n$ has a nonzero kernel ([[thm-rank-nullity]], [[def-dimension]], [[def-kernel-and-image-of-a-linear-map]]).

[A4] **Orthonormal expansion in the span.** If $x=\sum_{j\in F}c_je_j$ lies in the span of finitely many members of the orthonormal family $(e_j)$, then $\|x\|^2=\sum_{j\in F}|c_j|^2$, $\langle x,e_j\rangle=c_j$ for $j\in F$ and $\langle x,e_j\rangle=0$ for $j\notin F$; in particular, for $x$ in the span of $e_1,\dots,e_n$ the expansion of $Tx$ reduces to the finite sum $\sum_{j\le n}s_j\langle x,e_j\rangle f_j$; the finite Bessel inequality bounds partial sums of coefficients ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[lem-finite-bessel-inequality]], [[def-real-and-complex-inner-product-space]]).

[A5] **Infimum.** Every nonempty lower-bounded subset of $\mathbb R$ has an infimum ([[thm-infimum-property]]); by the defining greatest-lower-bound property, every lower bound $a$ of $S$ satisfies $a\le\inf S$, and conversely $a\le\inf S$ makes $a$ a lower bound of $S$ ([[def-infimum]]).

[A6] Countable Choice is the standing hypothesis of this pair's Hilbert-space interface ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, the compact $T$, its singular system and the numbers $a_n(T)=\inf\{\|T-F\|:\operatorname{ran}F\text{ is finite-dimensional and }\dim_{\mathbb F}\operatorname{ran}F<n\}$.

1.1 **Upper bound $a_n\le s_n$.** For $n\ge1$ the truncation $T_{n-1}=\sum_{j\le n-1}s_j\langle\cdot,e_j\rangle f_j$ (empty for $n=1$) has rank $<n$ by [A2], so $a_n\le\|T-T_{n-1}\|$. If $n\in J$ then [A1] with $n-1$ in place of $n$ gives $\|T-T_{n-1}\|\le s_n$; if $n\notin J$ then $r<+\infty$, $n>r$ and $T_{n-1}=T$ by [A1], so $a_n\le0=s_n$. Finally if $T=0$ then $a_n\le\|T-0\|=0=s_n$. In every case $a_n\le s_n$. [A1, A2, A5]

1.2 **Lower bound $s_n\le a_n$.** Let $F\in\mathcal B(H,K)$ have finite-dimensional range with $\dim_{\mathbb F}\operatorname{ran}F<n$. If $n\notin J$ then $s_n=0\le\|T-F\|$ and there is nothing to prove; assume therefore $n\in J$, so that $e_1,\dots,e_n$ exist and their span $V$ has dimension $n$ over $\mathbb F$ by [A4]. The restriction $F|_V:V\to K$ has rank at most $\dim_{\mathbb F}\operatorname{ran}F<n=\dim_{\mathbb F}V$, so by [A3] there is $x\in V$ with $\|x\|=1$ and $Fx=0$. Writing $x=\sum_{j\le n}c_je_j$ with $\sum_{j\le n}|c_j|^2=1$ by [A4], the expansion of [A1] and orthonormality of the $f_j$ give $\|Tx\|^{2}=\|\sum_{j\le n}s_jc_jf_j\|^{2}=\sum_{j\le n}s_j^{2}|c_j|^{2}\ge s_n^{2}\sum_{j\le n}|c_j|^{2}=s_n^{2}$, the inequality because $s_j\ge s_n$ for $j\le n$ by the nonincreasing order of the singular values. Hence $\|T-F\|\ge\|(T-F)x\|=\|Tx\|\ge s_n$. As $F$ was arbitrary among the finite-rank operators with $\dim_{\mathbb F}\operatorname{ran}F<n$, [A5] gives $a_n\ge s_n$. [A1, A3, A4, A5, algebra]

2.1 **Conclusion.** Steps 1.1 and 1.2 give $a_n(T)=s_n(T)$ for every $n\ge1$; in the finite-rank case with $n>r$ both sides are $0$ by [A1] and [step 1.1], and for $T=0$ the equality reads $a_n(0)=0=s_n(0)$. [step 1.1, step 1.2, A1, A6] ∎
