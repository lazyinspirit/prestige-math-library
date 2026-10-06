---
id: thm-fractional-rellich-kondrachov-compactness-on-bounded-sets
kind: theorem
title: "Subcritical compactness for compactly supported Slobodeckij functions"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [thm-fractional-sobolev-inequality-on-euclidean-space, lem-slobodeckij-mollification-approximation-rates, thm-rellich-kondrachov-for-p-less-than-n, thm-rellich-kondrachov-at-the-critical-source-exponent, thm-morrey-rellich-compactness-for-p-greater-than-n, thm-lyapunov-interpolation-inequality-for-l-p-norms, def-fractional-slobodeckij-space-on-euclidean-space, def-l-p-space-as-a-quotient-by-null-functions, def-totally-bounded, thm-complete-and-totally-bounded-implies-compact, def-countable-choice, def-dependent-choice, def-axiom-of-choice, thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, thm-holder-inequality-for-integrals, thm-frechet-kolmogorov-compactness-criterion-in-lp, lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic, thm-riesz-fischer-completeness-of-l-p, lem-totally-bounded-basic, thm-metric-compactness-equivalences, thm-complex-holder-minkowski-and-the-quotient-norm]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Eleonora Di Nezza, Giampiero Palatucci and Enrico Valdinoci, Hitchhiker's guide to the fractional Sobolev spaces (arXiv:1104.4345, survey)"
      url: "https://arxiv.org/pdf/1104.4345"
      locator: "Theorem 7.1 and Corollary 7.2 with their complete proofs, printed pp. 49-54, give bounded-domain fractional compactness and the subcritical interpolation range; this item proves its fixed whole-space-support version locally using mollification and first-order Rellich."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Theorems 3.45 and 3.49 for the integer-order compactness used on the mollified family, printed pp. 74-76"
---

## Statement

Assume the Axiom of Choice. Let $d\ge1$, $0<\theta<1$, $1\le p<\infty$ with
$p\theta<d$ and $p_\star=\frac{dp}{d-p\theta}$. Let
$\mathcal F\subseteq W^{\theta,p}(\mathbb R^d)$ be a family of functions all
supported in one fixed bounded set. In the displayed nonnegative supremum,
take the value $0$ if $\mathcal F=\varnothing$. Assume it satisfies
$\sup_{g\in\mathcal F}\bigl(\|g\|_{L^p(\mathbb R^d)}+[g]_{\theta,p}\bigr)<\infty$.
Then $\mathcal F$ is relatively compact in $L^q(\mathbb R^d)$ for every
$1\le q<p_\star$: every sequence in $\mathcal F$ has a subsequence converging
in $L^q(\mathbb R^d)$.

## Facts & Assumptions

**Given:** the Axiom of Choice, $d\ge1$, $0<\theta<1$, $1\le p<\infty$ with $p\theta<d$, $p_\star=dp/(d-p\theta)$, a family $\mathcal F\subseteq W^{\theta,p}(\mathbb R^d)$ supported in one fixed bounded set and bounded in the norm $\|\cdot\|_p+[\cdot]_{\theta,p}$ by $M<\infty$, and $1\le q<p_\star$.

[F1] *Fractional Sobolev inequality.* For real compactly supported $g$, $\|g\|_{L^{p_\star}}^p\le C_1[g]_{\theta,p}^p$; hence $\|g-h\|_{p_\star}\le C_1^{1/p}([g]+[h])$ for compactly supported $g,h$. For complex $g$, apply the real inequality to its real and imaginary parts, whose seminorms are at most $[g]_{\theta,p}$, and use the $L^{p_\star}$ triangle inequality, enlarging the constant by at most $2$. ([[thm-fractional-sobolev-inequality-on-euclidean-space]])

[F2] *Mollification rates.* With the radial mollifier at scale $\delta$, $\|g-g_\delta\|_{L^p}\le C_2\delta^{\theta}[g]_{\theta,p}$ and $\|g_\delta\|_{W^{1,p}}\le C_2(\|g\|_p+\delta^{\theta-1}[g]_{\theta,p})$; the mollified functions are supported in the $\delta$-neighbourhood of the fixed support set, and $[g_\delta]_{\theta,p}\le[g]_{\theta,p}$ because $|g_\delta(x)-g_\delta(y)|\le\int\eta_\delta(z)|g(x-z)-g(y-z)|\,dz$ and Minkowski's inequality applies in the weighted $L^p$-space of the seminorm. ([[lem-slobodeckij-mollification-approximation-rates]], [[def-fractional-slobodeckij-space-on-euclidean-space]])

[F3] *First-order compactness on a ball.* For fixed $\delta>0$, the mollified family is bounded in $W^{1,p}$ on a smooth ball containing all its supports. Its closure in $L^p$ is compact by the first-order Rellich theorem, including dimension one. ([[thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain]])

[F4] *Interpolation, completeness and compactness.* Strict interpolation between $p$ and $p_\star$ is supplied by [[thm-lyapunov-interpolation-inequality-for-l-p-norms]]; finite-measure inclusion follows from [[thm-holder-inequality-for-integrals]]. Under Countable Choice, $L^q$ is complete and total boundedness passes to closures, so a totally bounded family has compact closure. Under Countable and Dependent Choice the closure is sequentially compact. ([[thm-riesz-fischer-completeness-of-l-p]], [[lem-totally-bounded-basic]], [[thm-complete-and-totally-bounded-implies-compact]], [[thm-metric-compactness-equivalences]], [[def-totally-bounded]])

## Proof

**Proof technique:** Obtain finite $L^p$ nets from uniform mollification error and first-order Rellich, then interpolate pairwise differences against the fractional critical bound.

1.1 The empty family is immediate. Otherwise fix a ball $S$ containing the common bounded support and its distance-one neighbourhood, and use only $0<\delta\le1$. By [F2], $\mathcal G_\delta$ is supported in $S$ and bounded in $W^{1,p}$; [F3] makes it totally bounded in $L^p(\mathbb R^d)$, since restriction to $S$ and zero extension preserve distances on this family. Also $\sup_g\|g-g_\delta\|_p\le C_2\delta^\theta M\to0$. Given $\varepsilon>0$, choose $\delta$ making this error less than $\varepsilon/4$ and a finite $\varepsilon/4$-net for $\mathcal G_\delta$. Its centres cover $\mathcal F$ with radius $\varepsilon/2$; choosing one point of $\mathcal F$ in every nonempty such ball moves the centres into $\mathcal F$ and gives an $\varepsilon$-net. Thus $\mathcal F$ is totally bounded in $L^p$. [F2, F3, F4, given]

2.1 Fix $1\le q<p_\star$. If $q=p$, step 1.1 applies. If $q<p$, all members and their differences vanish off $S$, so $\|g-h\|_q\le|S|^{1/q-1/p}\|g-h\|_p$ by [F4]. If $p<q<p_\star$, [F1] gives $\|g-h\|_{p_\star}\le 2C_1^{1/p}M$ for $g,h\in\mathcal F$, and [F4] gives $\|g-h\|_q\le\|g-h\|_p^\lambda(2C_1^{1/p}M)^{1-\lambda}$ with $0<\lambda<1$ and $1/q=\lambda/p+(1-\lambda)/p_\star$. Hence a sufficiently fine finite $L^p$ net with centres in $\mathcal F$ is an $L^q$ net in each case. If $M=0$, the family contains only the zero class. [F1, F4, step 1.1]

3.1 By [F4] the totally bounded closure in the complete space $L^q(\mathbb R^d)$ is compact and sequentially compact, giving the asserted subsequence for every sequence in $\mathcal F$. The assumed Axiom of Choice supplies the first-order Rellich interface and Countable and Dependent Choice in [F4]. [F4, step 2.1] ∎
