---
id: cex-linfinity-approximate-identity-need-not-converge-in-supremum-norm
kind: counterexample
title: "The heat flow need not converge in supremum norm"
status: published
origin: pipeline
deps:
  - cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions
  - cor-uniform-limit-uniformly-continuous
  - cor-mean-value-theorem
  - def-countable-choice
  - def-heat-evolution-of-initial-data
  - def-heat-kernel
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - prop-indicator-function-is-measurable-iff-its-set-is-measurable
  - thm-heat-cauchy-solution-for-bounded-continuous-data
  - thm-heat-cauchy-solution-for-lp-data
  - thm-reals-cauchy-complete
  - thm-spatial-derivative-estimates-for-heat-flow
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Theorem 5.5, printed p. 131 (the hypothesis $1\\le p<\\infty$ for $L^p$ convergence; the supremum-norm case is excluded)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Theorem 6.9, printed p. 152 (continuity assumed on all of $[0,\\infty)\\times\\mathbb R^n$)"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Definition 1.0.1 and Lemma 1.0.2, pp. 1–3 (explicit Gaussian and unit mass; indicator witnesses calculated locally)"
---

## Statement refuted

Assuming Countable Choice, the claim that the $p=\infty$ endpoint can be added to the $L^p$ convergence
theorem for the heat flow, that is: for every
$f\in L^\infty(\mathbb R)\cap\bigcap_{1\le p<\infty}L^p(\mathbb R)$ one has
$\sup_{x\in\mathbb R}|H_tf(x)-f(x)|\to0$ as $t\downarrow0^+$. This fails even
for the simplest jump data, and locally uniform convergence on compact sets
containing the jump fails as well. The same witnesses also obstruct convergence
in the essential supremum norm: for $f=\mathbf1_{[0,\infty)}$ one has
$H_tf(0)=1/2$ and $\|H_tf-f\|_\infty\ge1/2$; for
$f_0=\mathbf1_{[0,1)}$, which belongs to every finite $L^p$ and to $L^\infty$,
one has $H_tf_0(0)<1/2$ and $\|H_tf_0-f_0\|_\infty>1/2$ for every $t>0$. Thus the continuity hypothesis cannot be discarded;
actual supremum convergence for bounded real data requires uniform continuity,
and essential supremum convergence requires a uniformly continuous representative.

## Facts & Assumptions

**Given:** Countable Choice, $n=1$, $t>0$, $x\in\mathbb R$, the half-line
datum $f=\mathbf 1_{[0,\infty)}$ and the compactly supported datum
$f_0=\mathbf 1_{[0,1)}$.

[A1] Countable Choice is the hypothesis carried by the evolution suppliers
below ([[def-countable-choice]]).

[F1] For $t>0$ the heat kernel is
$\Gamma(z,t)=(4\pi t)^{-1/2}e^{-z^2/(4t)}>0$, even in $z$, and satisfies
$\int_{\mathbb R}\Gamma(z,t)\,dz=1$
([[def-heat-kernel]],
[[lem-heat-kernel-normalisation-scaling-and-derivatives]]).

[F2] The indicator of a measurable set is measurable
([[prop-indicator-function-is-measurable-iff-its-set-is-measurable]]), so
$f=\mathbf 1_{[0,\infty)}\in L^\infty(\mathbb R)$ and
$f_0=\mathbf 1_{[0,1)}\in L^\infty(\mathbb R)\cap\bigcap_{1\le p<\infty}L^p(\mathbb R)$.

[F3] For bounded measurable data $g$ the heat evolution $H_tg$ is the
everywhere-defined bounded representative
$x\mapsto\int_{\mathbb R}\Gamma(x-y,t)g(y)\,dy$
([[def-heat-evolution-of-initial-data]]).

[F4] For $1\le p<\infty$ and $g\in L^p(\mathbb R)$,
$\|H_tg-g\|_p\to0$ as $t\downarrow0^+$
([[thm-heat-cauchy-solution-for-lp-data]]), and for bounded uniformly
continuous data the convergence is locally uniform
([[thm-heat-cauchy-solution-for-bounded-continuous-data]],
[[cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions]]).

[F5] For bounded real data $g$, $H_tg$ is smooth and its first spatial
 derivative satisfies $\|(H_tg)'\|_\infty\le C t^{-1/2}\|g\|_\infty$
([[thm-spatial-derivative-estimates-for-heat-flow]], with $n=1$, $p=q=\infty$).
A bounded continuous derivative obeys this essential bound pointwise: a
violation would persist on an interval of positive measure. The mean value
theorem then bounds increments by the derivative bound
([[cor-mean-value-theorem]]). Uniform limits of uniformly continuous
real functions are uniformly continuous
([[cor-uniform-limit-uniformly-continuous]]); every real Cauchy sequence
converges ([[thm-reals-cauchy-complete]]).

## Counterexample

**Proof technique:** direct.

1.1 The half-line datum $f$ is bounded and measurable, with $f(0)=1$, but $\int_{\mathbb R}|f|^p=\infty$ for every finite $p$. Evenness and unit mass give $H_tf(0)=\int_0^\infty\Gamma(y,t)\,dy=1/2$, so its pointwise supremum distance is at least $1/2$. This also gives an essential supremum bound: for any $0<\eta<1/2$, continuity of $H_tf$ at $0$ supplies $\delta>0$ such that $|H_tf(x)-1/2|<1/2-\eta$ for $0<x<\delta$. On that interval $f(x)=1$, so $|H_tf(x)-f(x)|>\eta$. As the interval has positive measure and $\eta$ is arbitrary, $\|H_tf-f\|_\infty\ge1/2$ for every $t>0$. [A1, F1, F2, F3, F5, given, algebra]

1.2 Uniform continuity is necessary for an actual supremum-norm convergence claim on bounded real data: for each fixed $t>0$, [F5] and the mean value theorem make $H_tg$ globally Lipschitz, hence uniformly continuous. If $\sup_x|H_tg(x)-g(x)|\to0$, the sequence $H_{1/(k+1)}g$ converges uniformly to $g$, which is uniformly continuous by [F5]. For convergence in the essential supremum norm the corresponding necessity concerns the class: the continuous differences $H_{1/(k+1)}g-H_{1/(\ell+1)}g$ have equal supremum and essential supremum, so the sequence is uniformly Cauchy; real completeness gives a pointwise limit $v$. For any $\varepsilon>0$, a uniform Cauchy bound $|H_{1/(k+1)}g(x)-H_{1/(\ell+1)}g(x)|<\varepsilon$ for all $x$ and sufficiently large $k,\ell$, followed by $\ell\to\infty$, gives $\sup_x|H_{1/(k+1)}g(x)-v(x)|\le\varepsilon$. Thus the limit is uniform and $v$ is uniformly continuous by [F5]. Finally $\|v-g\|_\infty\le\sup_x|v-H_{1/(k+1)}g|+\|H_{1/(k+1)}g-g\|_\infty\to0$. Thus that class has a uniformly continuous representative. [F5, given, algebra]

2.1 The interval datum $f_0$ has $\int|f_0|^p=1$ for every finite $p$ and $\|f_0\|_\infty=1$. By positivity and step 1.1, $H_tf_0(0)=\int_0^1\Gamma(y,t)\,dy<1/2$, since the omitted integral on $(1,\infty)$ is positive. Put $d=1-H_tf_0(0)>1/2$ and $c=(d+1/2)/2$, so $1/2<c<d$. Continuity at $0$ supplies $0<\delta<1$ with $|H_tf_0(x)-H_tf_0(0)|<d-c$ for $0<x<\delta$. There $f_0(x)=1$ and $|H_tf_0(x)-1|\ge d-|H_tf_0(x)-H_tf_0(0)|>c$. Hence $\|H_tf_0-f_0\|_\infty\ge c>1/2$ on a set of positive measure, and the pointwise supremum is also greater than $1/2$. [step 1.1, F1, F2, F3, F5, given, algebra]

3.1 For this same $f_0$, [F4] gives $\|H_tf_0-f_0\|_p\to0$ for every $1\le p<\infty$. Nevertheless each compact set containing $0$ has pointwise supremum error at least $|H_tf_0(0)-f_0(0)|>1/2$, so locally uniform convergence fails there. The continuity hypothesis in the bounded-data theorem cannot be discarded. [step 2.1, F4, given]

4.1 Steps 1.1–3.1 preserve the exact half-line value $1/2$ and supply compactly supported data in $L^\infty\cap\bigcap_{1\le p<\infty}L^p$ with essential and pointwise supremum errors bounded away from zero, while every finite-$p$ norm converges. Step 1.2 justifies the uniform-continuity qualification with the distinction between representatives and classes explicit. These witnesses refute the claimed endpoint extension and locally uniform convergence at the jump. [step 1.1, step 2.1, step 3.1, step 1.2, given] ∎
