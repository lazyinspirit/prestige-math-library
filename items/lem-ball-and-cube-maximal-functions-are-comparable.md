---
id: lem-ball-and-cube-maximal-functions-are-comparable
kind: lemma
title: Ball and cube maximal functions are pointwise comparable
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-axis-parallel-cube-averages-and-cube-maximal-functions, def-centered-and-uncentered-hardy-littlewood-maximal-functions, lem-euclidean-balls-have-positive-finite-lebesgue-measure, prop-measure-monotonicity, thm-lebesgue-measure-under-dilations-and-reflections, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, def-countable-choice, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Remark 7.1.4, comparison of the cube and ball characteristics, printed p. 503"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Remark 4.24(2), cubes versus balls for the doubling condition, printed p. 80"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). There is a
constant $C_n<\infty$, depending only on the dimension, such that every
Euclidean ball $B$ contains an axis-parallel cube $Q_1$ and is contained in an
axis-parallel cube $Q_2$ with $|Q_2|\le C_n|Q_1|$; explicitly, for
$B=B(x,r)$ one may take $Q_1=Q(x,r/\sqrt n)$ and $Q_2=Q(x,r)$ and
$C_n=n^{n/2}$. Consequently, for every $f\in L^1_{\mathrm{loc}}(\mathbb R^n)$
and every $x\in\mathbb R^n$,
$$M^*f(x)\le C_nM_c^*f(x),\qquad M_c^*f(x)\le C_nM^*f(x),$$
and the centred versions satisfy the same two-sided comparison with a constant
that is a dimensional power of $C_n$ (with $C_n=\max\{2^n/v_n,\;v_nn^{n/2}/2^n\}$
and $v_n=\lambda(B(0,1))$ for a comparison constant; the displayed $C_n=n^{n/2}$
is the one for the pure cube sandwich, up to dimensional factors). Hence the
cube-based and ball-based Muckenhoupt characteristics
$\sup_Q\langle w\rangle_Q\langle w^{-1/(p-1)}\rangle_Q^{p-1}$ and
$\sup_B\langle w\rangle_B\langle w^{-1/(p-1)}\rangle_B^{p-1}$ differ by at most
a dimensional power of such a $C_n$, and boundedness of the ball maximal
operator on $L^p(w)$ is equivalent to boundedness of any cube maximal function.

## Facts & Assumptions

**Given:** Countable Choice, a locally integrable $f$, and points and radii as below.

[F1] $Q(x,r)=\prod_i(x_i-r,x_i+r)$ has side $2r$, Lebesgue measure $(2r)^n$, its dilates satisfy $\lambda Q(x,r)=Q(x,\lambda r)$, and $\langle f\rangle_Q=|Q|^{-1}\int_Qf\,d\lambda$ ([[def-axis-parallel-cube-averages-and-cube-maximal-functions]]).

[F2] $Mf(x)=\sup_{r>0}\lambda(B(x,r))^{-1}\int_{B(x,r)}|f|$ and $M^*f(x)=\sup_{B\ni x}\lambda(B)^{-1}\int_B|f|$, the second supremum over all Euclidean balls containing $x$ ([[def-centered-and-uncentered-hardy-littlewood-maximal-functions]]).

[F3] Every ball $B(x,r)$ is Lebesgue measurable with $0<\lambda(B(x,r))<\infty$, and $\lambda(B(x,r))=v_nr^n$ with $v_n=\lambda(B(0,1))\in(0,\infty)$ ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[thm-lebesgue-measure-under-dilations-and-reflections]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]), since $B(x,r)=x+rB(0,1)$.

[F4] For a nonnegative measurable $g$ the set function $A\mapsto\int_Ag\,d\lambda$ is a measure ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]), so $A\subseteq B$ measurable implies $\int_Ag\,d\lambda\le\int_Bg\,d\lambda$ ([[prop-measure-monotonicity]]).

## Proof

**Proof technique:** direct.

1.1 Sandwiches: for $B=B(x,r)$ one has $Q(x,r/\sqrt n)\subseteq B(x,r)$ and $B(x,r)\subseteq Q(x,r)$, because $|y_i-x_i|<r/\sqrt n$ for all $i$ gives $|y-x|<\sqrt n(r/\sqrt n)=r$, and $|y-x|<r$ gives $|y_i-x_i|<r$ for every $i$. By [F1] and [F3], $|Q(x,r)|=(2r)^n$ and $|Q(x,r/\sqrt n)|=(2r/\sqrt n)^n$, so the ratio is $n^{n/2}$; also $|Q(x,r)|/|B(x,r)|=2^n/v_n$ and $|B(x,r)|/|Q(x,r)|=v_n/2^n$. [F1, F3, algebra]

2.1 First comparison: fix $f\in L^1_{\mathrm{loc}}$ and $x$. For every $r>0$, step 1.1 and [F4] give $\int_{B(x,r)}|f|\le\int_{Q(x,r)}|f|$, hence $\lambda(B(x,r))^{-1}\int_{B(x,r)}|f|\le(|Q(x,r)|/\lambda(B(x,r)))\langle|f|\rangle_{Q(x,r)}=(2^n/v_n)\langle|f|\rangle_{Q(x,r)}\le(2^n/v_n)M_cf(x)$; taking the supremum over $r$ gives $Mf(x)\le(2^n/v_n)M_cf(x)$, and the same computation with a ball containing $x$ in place of the centred ball gives $M^*f(x)\le(2^n/v_n)M_c^*f(x)$. [F1, F2, F4, step 1.1, algebra]

2.2 Second comparison: let $Q=Q(y,r)$ contain $x$. Then $Q\subseteq B(y,\sqrt nr)$, and $x\in B(y,\sqrt nr)$, so by [F2] $\langle|f|\rangle_{B(y,\sqrt nr)}\le M^*f(x)$; moreover $Q\subseteq B(y,\sqrt nr)$ and [F4] give $\int_Q|f|\le\int_{B(y,\sqrt nr)}|f|$, hence $\langle|f|\rangle_Q\le(\lambda(B(y,\sqrt nr))/|Q|)\langle|f|\rangle_{B(y,\sqrt nr)}\le(v_nn^{n/2}/2^n)M^*f(x)$ by [F3]. Taking the supremum over all $Q\ni x$ gives $M_c^*f(x)\le(v_nn^{n/2}/2^n)M^*f(x)$; for the centred version the same computation with $Q=Q(x,r)$ and $B(x,\sqrt nr)$ gives $M_cf(x)\le(v_nn^{n/2}/2^n)Mf(x)$. [F1, F2, F3, F4, step 1.1, algebra]

3.1 Both assertions of the Statement now follow with $C_n=\max\{2^n/v_n,\,v_nn^{n/2}/2^n\}$, which is finite because $v_n\in(0,\infty)$: the two-sided pointwise bounds are steps 2.1 and 2.2 (the displayed $C_n=n^{n/2}$ sandwich constant appears here only through dimensional factors). For the characteristic comparison, let $w$ be a weight, $1<p<\infty$ and $\sigma=w^{-1/(p-1)}$; for a cube $Q$ let $B_Q$ be a ball with $Q\subseteq B_Q$ and $|B_Q|\le C_n|Q|$, and note that [F4] applied to $g=w$ and $g=\sigma$ gives $\langle w\rangle_Q\langle\sigma\rangle_Q^{p-1}\le(|B_Q|/|Q|)^p\langle w\rangle_{B_Q}\langle\sigma\rangle_{B_Q}^{p-1}\le C_n^p\sup_B\langle w\rangle_B\langle\sigma\rangle_B^{p-1}$. Conversely every ball $B$ is contained in a cube $Q_B$ with $|Q_B|\le C_n|B|$, so monotonicity of both integrals bounds the ball product by $C_n^p$ times the cube product; the two suprema therefore differ by at most the dimensional factor $C_n^p$. Finally, because all four maximal functions are pointwise comparable in pairs by constants independent of $f$, if one of them has finite $L^p(w)$ norm for every $f$ then so do the others, with norms bounded by the corresponding dimensional multiples; this is the asserted equivalence of boundedness. [F1, F2, F4, step 1.1, step 2.1, step 2.2, algebra] ∎
