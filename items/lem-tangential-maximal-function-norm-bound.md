---
id: lem-tangential-maximal-function-norm-bound
kind: lemma
title: "The tangential maximal function is controlled by the aperture-one nontangential maximal function in $L^p$"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution, def-centered-and-uncentered-hardy-littlewood-maximal-functions, cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded, def-multidimensional-rectangle-and-volume, def-countable-choice, lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable, lem-sphere-and-ball-measures-scale, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-holder-inequality-for-integrals, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Cruz-Uribe SFO, Li-An Daniel Wang, Variable Hardy Spaces, arXiv:1211.6505 (2012)"
      url: "https://arxiv.org/pdf/1211.6505"
      locator: "section 3.1, printed pp. 9-10 (PDF pp. 10-11): the proof of inequality (3.2), $\\|M_{\\Phi,T}f\\|_p\\le C\\|M_{\\Phi,1}f\\|_p$ for $T>n/q$"
    - title: "Marcin Bownik, Anisotropic Hardy Spaces and Wavelets, Memoirs of the American Mathematical Society 164 (2003), no. 781"
      url: "https://pages.uoregon.edu/mbownik/papers/12-memo0781.pdf"
      locator: "Chapter 1, Section 7, Lemma 7.4 and its proof, printed pp. 44-45: the tangential maximal function is controlled by the nontangential one"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice. Let $n\ge1$, $0<q<p<\infty$, $T=n/q$ and $\varphi\in\mathcal S(\mathbb R^n)$
with $\int\varphi\ne0$. For $f\in\mathcal S'(\mathbb R^n)$ define the
**tangential maximal function**
$$M_{\varphi,T}f(x)=\sup_{t>0}\ \sup_{y\in\mathbb R^n} \frac{|(f*\varphi_t)(x-y)|}{(1+|y|/t)^T},\qquad x\in\mathbb R^n .$$
For a nonnegative Borel function $g$ define the extended centered average
$$\widetilde Mg(x):=\sup_{r>0}\frac{1}{\lambda(B(x,r))}\int_{B(x,r)}g,$$
where the nonnegative Lebesgue integral may be $+\infty$. If $g\in L^1_{\rm loc}$,
then $\widetilde Mg$ agrees with the centered Hardy-Littlewood maximal function
$Mg$ of [[def-centered-and-uncentered-hardy-littlewood-maximal-functions]].
The aperture-one nontangential maximal function $M^{*,1}_\varphi f$ is the one
of [[def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution]].
Then, pointwise,
$$M_{\varphi,T}f(x)^q\le \widetilde M\bigl((M^{*,1}_\varphi f)^q\bigr)(x).$$
If $\|M^{*,1}_\varphi f\|_{L^p}<\infty$, then
$$\|M_{\varphi,T}f\|_{L^p}\le C_{n,p,q}\|M^{*,1}_\varphi f\|_{L^p},$$
with $C_{n,p,q}$ depending only on $n,p,q$. The norm inequality also holds in
the extended sense when the right-hand side is infinite, in which case it is
trivial.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $0<q<p<\infty$, $T=n/q$, $\varphi\in\mathcal S$ with $\int\varphi\ne0$, $f\in\mathcal S'$ and $x\in\mathbb R^n$.

[L1] For every $a\in\mathbb R^n$ and $r>0$, $\lambda(B(a,r))=c_nr^n$ with $c_n=\omega_{n-1}/n>0$: the centred-ball formula is [[lem-sphere-and-ball-measures-scale]] and translation invariance is [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]. Hence $B(x-y,t)\subseteq B(x,|y|+t)$ and the volume ratio is $(1+|y|/t)^n$.

[F1] For every $z\in B(x-y,t)$ one has $|(f*\varphi_t)(x-y)|\le M^{*,1}_\varphi f(z)$, because $|z-(x-y)|<t$ and the supremum defining $M^{*,1}_\varphi f(z)$ runs over $t>0$ and all points within distance $t$ of $z$ ([[def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution]]).

[F2] The centered Hardy-Littlewood maximal operator satisfies the strong $L^r$ bound $\|Mg\|_r\le C_{n,r}\|g\|_r$ for $1<r<\infty$ ([[cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded]], [[def-centered-and-uncentered-hardy-littlewood-maximal-functions]]).

[F3] The tangential maximal function is Borel because it is a supremum, over fixed $t,y$, of continuous functions of $x$. The aperture-one nontangential maximal function is Borel for $f\in\mathcal S'$ ([[lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable]]). Also, for every $r>1$, $L^r(\mathbb R^n)\subset L^1_{\mathrm{loc}}(\mathbb R^n)$: for compact $K$, Holder gives $\int_K|g|\le\lambda(K)^{1-1/r}\|g\|_r$, and bounded sets have finite measure ([[thm-holder-inequality-for-integrals]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).



**Proof technique:** local averaging over the ball of radius $t$ and the Hardy-Littlewood maximal bound.

## Proof

**Proof technique:** direct.

1.1 Pointwise bound. Fix $x,y,t$ and put $g=(M^{*,1}_\varphi f)^q$, which is nonnegative Borel by [F3]. By [F1], $|(f*\varphi_t)(x-y)|^q\le g(z)$ for every $z\in B(x-y,t)$. Averaging (allowing an infinite integral) and enlarging to $B(x,|y|+t)$ gives $$|(f*\varphi_t)(x-y)|^q\le\frac{1}{\lambda(B(x-y,t))}\int_{B(x-y,t)}g \le\frac{\lambda(B(x,|y|+t))}{\lambda(B(x-y,t))}\cdot\frac{1}{\lambda(B(x,|y|+t))}\int_{B(x,|y|+t)}g \le(1+|y|/t)^n\,\widetilde Mg(x),$$ by [L1]. Since $Tq=n$, division by $(1+|y|/t)^{Tq}$ and taking the supremum over $t,y$ proves the pointwise inequality. [L1, F1, F3, algebra]

2.1 $L^p$ bound. If $\|M^{*,1}_\varphi f\|_{L^p}=\infty$, the asserted norm inequality is trivial. Otherwise [F3] gives that $g=(M^{*,1}_\varphi f)^q$ is Borel and belongs to $L^{p/q}$. Since $p/q>1$, [F3] also gives $g\in L^1_{\mathrm{loc}}$, so $\widetilde Mg=Mg$. Apply [F2] with $r=p/q$ and use step 1.1: $$\|M_{\varphi,T}f\|_{L^p}^q=\|(M_{\varphi,T}f)^q\|_{L^{p/q}} \le\|Mg\|_{L^{p/q}}\le C_{n,p,q}\|g\|_{L^{p/q}} =C_{n,p,q}\|M^{*,1}_\varphi f\|_{L^p}^q.$$ Taking $q$-th roots proves the estimate (with the constant renamed). [step 1.1, F2, F3, algebra]

3.1 Conclusion. Step 1.1 gives pointwise domination by the extended centered average, which agrees with the ordinary maximal operator on the locally integrable input in step 2.1; the strong $L^{p/q}$ bound then proves the norm estimate. [step 1.1, step 2.1] ∎
