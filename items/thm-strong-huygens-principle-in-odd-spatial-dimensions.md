---
id: thm-strong-huygens-principle-in-odd-spatial-dimensions
kind: theorem
title: "The strong Huygens principle in odd spatial dimensions"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [def-strong-huygens-principle, thm-odd-dimensional-wave-formula-by-spherical-means, lem-spherical-means-of-smooth-data-are-smooth, def-spherical-mean-of-space-dependent-data, def-countable-choice, def-wave-equation-cauchy-data-and-wave-speed, lem-relative-compact-closed-sets-have-a-positive-distance-gap, thm-chain-rule-for-total-derivatives, thm-differentiation-under-the-integral-sign, thm-algebra-of-derivatives, def-support-and-compactly-supported-riemann-integral-in-rn, cor-euclidean-closed-balls-and-spheres-are-compact]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.2, printed pp. 174–175, (7.23) and Theorem 7.7: odd-dimensional representation; §7.1, printed pp. 171–172: the three-dimensional sharp support consequence"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.1, printed pp. 281-289, remarks (c) and (e): for odd $n\\ge3$ the value does not depend on the data at points with $|x-y|<ct$"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #12: Kirchhoff's Formula and Minkowskian Geometry (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/940561a138578640826f762b5a57bcad_MIT18_152F11_lec_12.pdf"
      locator: "Remark 1.0.1: the sharp Huygens principle in odd dimensions $n\\ge3$"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$n=2k+1\ge3$ be odd, $c>0$, and let $u$ be the $C^2$ solution given by the
odd-dimensional formula
[[thm-odd-dimensional-wave-formula-by-spherical-means]] for admissible data
$(u_0,u_1)$ with $u_0\in C^{k+2}(\mathbb R^n)$, $u_1\in C^{k+1}(\mathbb R^n)$
([[def-spherical-mean-of-space-dependent-data]]). Fix $x_0\in\mathbb R^n$,
$t_0>0$ and $S=\partial B_{ct_0}(x_0)$. Then:

(a) **(germ form)** $u(x_0,t_0)$ is a finite linear combination
$$\sum_{j\le k}\alpha_j\,\partial_r^jM_{u_0}(x_0,ct_0)+\sum_{j\le k-1}\beta_j\,\partial_r^jM_{u_1}(x_0,ct_0)$$
of radial derivatives of spherical means, and
$$\partial_r^jM_f(x_0,r)=\frac1{\omega_{n-1}}\int_{S^{n-1}}\partial_r^j\bigl[f(x_0+r\omega)\bigr]\,d\sigma(\omega)\qquad(r=ct_0),$$
so the value is determined by the jet of $(u_0,u_1)$ on $S$: admissible data
agreeing on a neighbourhood of $S$ give the same value at $(x_0,t_0)$;

(b) **(shell form)** if the data are supported in the compact $K$, then
for $t>0$, $u(x,t)=0$ whenever $\partial B_{ct}(x)\cap K=\varnothing$; in particular for
$K=\overline B_r(x_0)$ and $ct>r$ the ball $B_{ct-r}(x_0)$ is quiet, and its support is contained in the annulus $ct-r\le|x-x_0|\le ct+r$ (this does not assert that both bounding spheres are occupied).

Hence the strong Huygens principle of [[def-strong-huygens-principle]] holds in
dimension $n$ (germ form (iii), and with it the strictly-inside form (i) and the
shell form (ii)); bare agreement of the restrictions to $S$ is not sufficient
in general, exactly because the transverse derivatives displayed above may
differ (the caution in [[def-strong-huygens-principle]]).

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; odd $n=2k+1\ge3$, $c>0$, admissible data $(u_0,u_1)$ in the stated classes; the solution $u(x,t)=\frac1{(n-2)!!}\bigl[\partial_tD_t^{k-1}(t^{n-2}M_{u_0}(x,ct))+D_t^{k-1}(t^{n-2}M_{u_1}(x,ct))\bigr]$ of [[thm-odd-dimensional-wave-formula-by-spherical-means]], with $D_t=t^{-1}\partial_t$ and $M_f$ the spherical mean of [[def-spherical-mean-of-space-dependent-data]].

[F1] For $C^m$ data, $r\mapsto M_f(x,r)$ is $C^m$ for $r>0$ and the derivatives may be taken under the compact sphere integral. ([[lem-spherical-means-of-smooth-data-are-smooth]])

[F2] Chain rule: $\partial_t^jM_f(x,ct)=c^j\partial_r^jM_f(x,ct)$ for the one-variable composition. ([[thm-chain-rule-for-total-derivatives]])

[F3] Differentiation under an integral over the compact sphere with continuous integrand. ([[thm-differentiation-under-the-integral-sign]])

[F4] Product rule and linearity of differentiation for the expansion of $D_t^{k-1}[t^{n-2}g(t)]$. ([[thm-algebra-of-derivatives]])

[F5] Nonempty disjoint compact subsets of $\mathbb R^n$ have a positive distance gap. ([[lem-relative-compact-closed-sets-have-a-positive-distance-gap]], [[cor-euclidean-closed-balls-and-spheres-are-compact]])

[F6] The support of a function is the closure of its nonzero set; a function vanishing on a neighbourhood of $S(x,ct)$ has zero data there. ([[def-support-and-compactly-supported-riemann-integral-in-rn]])

## Proof

1.1 The value is a finite functional of radial spherical-mean derivatives: expanding $D_t^{k-1}[t^{n-2}g(t)]$ by the product rule [F4] gives $\sum_{j\le k-1}p_j(t)g^{(j)}(t)$ with coefficients $p_j(t)=a_jt^{1+j}$, where the constants $a_j$ depend only on $n,k$; this follows by induction because $D_t(t^ag^{(j)})=at^{a-2}g^{(j)}+t^{a-1}g^{(j+1)}$; applying this to $g(t)=M_{u_0}(x_0,ct)$ and to $g(t)=M_{u_1}(x_0,ct)$ in the odd-dimensional formula, and applying one further $\partial_t$ to the first bracket, exhibits $u(x_0,t_0)$ as $\sum_{j\le k}\alpha_j\partial_t^jM_{u_0}(x_0,ct_0)+\sum_{j\le k-1}\beta_j\partial_t^jM_{u_1}(x_0,ct_0)$ with finite coefficients $\alpha_j,\beta_j$; the chain rule [F2] converts $\partial_t^jM_f(x_0,ct_0)$ into $c^j\partial_r^jM_f(x_0,ct_0)$, and [F1] with [F3] gives the displayed sphere-integral formula $\partial_r^jM_f(x_0,r)=\frac1{\omega_{n-1}}\int_{S^{n-1}}\partial_r^j[f(x_0+r\omega)]\,d\sigma(\omega)$. [given, F1, F2, F3, F4, algebra]

2.1 The jet along $S$ determines the value: each derivative $\partial_r^j[f(x_0+r\omega)]$ at $r=ct_0$ is the $j$-th radial derivative of $f$ at the point $x_0+ct_0\omega\in S$, hence is determined by the values of $f$ on any neighbourhood of that point; consequently, if two admissible data pairs agree on a neighbourhood of $S$, their difference $f$ vanishes on that neighbourhood and all derivatives of $f$ vanish along $S$, so every integral in step 1.1 vanishes for the difference and the two data pairs give the same value $u(x_0,t_0)$; this proves (a) and the germ form (iii). [given, step 1.1, F1, algebra]

3.1 The shell form: suppose the data are supported in the compact $K$ and $\partial B_{ct}(x)\cap K=\varnothing$; if $K=\varnothing$ the data are zero and the conclusion is immediate; otherwise the two compact sets $\partial B_{ct}(x)$ and $K$ have a positive distance gap [F5], so the data vanish on a neighbourhood of $\partial B_{ct}(x)$ by [F6]; comparing the given data with the zero data — which agree on that neighbourhood and give the solution $0$ with value $0$ — step 2.1 gives $u(x,t)=0$; hence the value is carried by the $ct$-sphere shell of $K$, and for $K=\overline B_r(x_0)$ and $ct>r$ every $x$ with $|x-x_0|<ct-r$ has $\partial B_{ct}(x)\cap K=\varnothing$, so the interior ball is quiet, giving (b). [given, step 2.1, F5, F6, algebra]

4.1 Conclusion: the germ form and the shell form established above are exactly the forms (iii) and (ii) of [[def-strong-huygens-principle]], and the strictly-inside form (i) follows because a perturbation supported in the open base ball is supported away from $S$; hence the strong Huygens principle holds in every odd dimension $n\ge3$. [step 2.1, step 3.1] ∎ 