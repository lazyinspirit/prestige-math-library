---
id: thm-fernique-integrability-for-separable-banach-gaussian-law
kind: theorem
title: "Fernique integrability for a separable Banach Gaussian law"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-borel-gaussian-random-element-on-a-separable-banach-space
  - def-separable-space
  - lem-countable-norming-family-determines-borel-laws
  - lem-uncorrelated-joint-banach-gaussians-are-independent
  - lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal
  - lem-borel-product-of-second-countable-spaces
  - thm-continuous-preimages-of-borel-sets-are-borel
  - def-independent-random-elements
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
  - def-axiom-of-choice
  - thm-continuity-from-above-for-measures
  - thm-choice-implies-dependent-implies-countable-choice
  - def-countable-choice
  - thm-hahn-banach-dominated-extension
  - def-hahn-banach-extension-principle-relative
  - lem-separable-banach-has-countable-norming-family
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "AC supplies the independent product and also supplies countable choice and HB for the norming-family and independence interfaces. The tail argument after the orthogonal Gaussian rotation is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. Lunardi, M. Miranda, and D. Pallara, Infinite Dimensional Analysis"
      url: "https://www.mathematik.tu-darmstadt.de/media/analysis/lehrmaterial_anapde/hallerd/Lectures.pdf"
      locator: "Theorem 2.3.1 and complete proof, source PDF pp. 25–26."
    - title: "M. Hairer, An Introduction to Stochastic PDEs"
      url: "https://www.hairer.org/notes/SPDEs_Course.pdf"
      locator: "Theorem 4.13 and complete proof, source PDF pp. 20–21."
---

## Statement

Assume the Axiom of Choice. Let $W$ be a centered Borel Gaussian random
element in a real separable Banach space $B$. There is a constant $a>0$ such
that
$$E\exp(a\|W\|^2)<\infty.$$
In particular, $E\|W\|^2<\infty$.

## Facts & Assumptions

[A1] Under AC, the product probability space supplies an independent copy ([[def-axiom-of-choice]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]).

[A2] AC supplies countable choice and the real Hahn–Banach principle HB through the stated choice theorems ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]], [[thm-hahn-banach-dominated-extension]], [[def-hahn-banach-extension-principle-relative]]).

[F1] If two jointly centered Gaussian Banach-valued random elements have zero
mixed covariance under every pair of continuous linear functionals, they are
independent ([[lem-uncorrelated-joint-banach-gaussians-are-independent]]).

[F2] A centered multivariate normal vector is determined by its covariance
matrix, including in the singular case
([[def-multivariate-normal-law]],
[[lem-characteristic-function-of-a-multivariate-normal-law]]).

[F3] For a decreasing sequence of events, probability is continuous from above
([[thm-continuity-from-above-for-measures]]).


[F4] Under HB and countable choice, a separable Banach space has a countable norming family, and its finite-coordinate laws determine Borel laws ([[lem-separable-banach-has-countable-norming-family]], [[lem-countable-norming-family-determines-borel-laws]]).

[F5] A countable dense subset of the separable metric space $B$, together with positive rational radii, gives a countable base; for second-countable spaces the Borel sigma-algebra of the product is the product Borel sigma-algebra. [[def-separable-space]], [[lem-borel-product-of-second-countable-spaces]]. Continuous maps have Borel preimages of Borel sets. [[thm-continuous-preimages-of-borel-sets-are-borel]]

[F6] A finite stack of independent multivariate Gaussian vectors is multivariate Gaussian, including singular covariance matrices. [[lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal]].

## Proof


**Given:** AC, a centered Borel Gaussian random element $W$ in a real separable Banach space $B$.

1.1 On $(B\times B,\mathcal B(B)\otimes\mathcal B(B),\mu\otimes\mu)$ let $W(x,y)=x$ and $W'(x,y)=y$ be the coordinate copies. The product-measure rectangle formula makes them independent. A countable dense subset of $B$ and rational-radius balls give a countable base, and products of base sets give one for $B\times B$, so [F5] identifies the product sigma-algebra with $\mathcal B(B\times B)$. The coordinate projections are continuous, hence Borel; the maps $(x,y)\mapsto(x+y)/\sqrt2$ and $(x,y)\mapsto(x-y)/\sqrt2$ are continuous as well, so [F5] makes $U=(W+W')/\sqrt2$ and $V=(W-W')/\sqrt2$ Borel random elements. For any finite list of functionals used on either $U$ or $V$, the corresponding vectors from $W$ and $W'$ are independent centered Gaussian vectors, so [F6] makes their stack multivariate Gaussian. The finite coordinate vector of $(U,V)$ is a linear image of that stack, hence is also centered multivariate Gaussian. [A1, F5, F6, given, construct]

2.1 Centering and independence give, for all $\ell,m\in B^*$, $E[\ell(U)m(V)]=\tfrac12(E[\ell(W)m(W)]-E[\ell(W)m(W')]+E[\ell(W')m(W)]-E[\ell(W')m(W')])=0$. Independence and centering give $E[\ell(U)m(U)]=E[\ell(W)m(W)]$ and $E[\ell(V)m(V)]=E[\ell(W)m(W)]$. Thus each finite coordinate vector of $U$ or $V$ is centered Gaussian with the same covariance as the corresponding vector of $W$, so [F2] gives matching finite laws. [F2, step 1.1, given, algebra]

3.1 By [A2], the HB and countable-choice hypotheses of [F1] and [F4] hold. The zero mixed covariances from step 2.1 let [F1] make $U,V$ independent, while [F4] upgrades their matching finite norming-coordinate laws to equality of Borel laws with $W$. Thus $U,V$ are independent copies of $W$. [A2, F1, F4, step 1.1, step 2.1]

4.1 Let $p(r)=P(\|W\|>r)$. By [F3] and $\|W\|<\infty$ almost surely, $p(r)\to0$ as $r\to\infty$; choose $s>0$ with $q:=1-p(s)>0$. For $r>s$, the event $\{\|W\|>r,\ \|W'\|\le s\}$ has probability $p(r)q$. On it, $\sqrt2\,U=W+W'$ and $\sqrt2\,V=W-W'$ imply $\|U\|>(r-s)/\sqrt2$ and $\|V\|>(r-s)/\sqrt2$, by the reverse triangle inequality. Since $U,V$ are independent copies by step 3.1, $p(r)q\le p((r-s)/\sqrt2)^2.$ [F3, step 1.1, step 3.1, given, algebra]

5.1 Choose $r_0>s$ with $p(r_0)<q$, and define $r_{n+1}=\sqrt2\,r_n+s$. If $p(r_0)=0$, then $W$ is bounded almost surely and the theorem follows immediately. Otherwise put $\theta=p(r_0)/q\in(0,1)$. Iterating step 4.1 gives $p(r_n)\le q\,\theta^{2^n}$. The explicit recurrence solution is $r_n=(r_0+c)2^{n/2}-c$, where $c=s/(\sqrt2-1)$. Hence for all sufficiently large $n$, $r_n$ is bounded below by a positive multiple of $2^{n/2}$ and $r_{n+1}\le2r_n$. If $r_n<t\le r_{n+1}$, then $p(t)\le p(r_n)\le q e^{-|\log\theta|2^n}\le C e^{-b t^2}$ for constants $C,b>0$ independent of $n$. Thus $P(\|W\|>t)\le C e^{-b t^2}$ for all sufficiently large $t$. [step 4.1, algebra]

6.1 Choose $0<a<b/3$. Partition according to $\|W\|\le r_N$ and the intervals $r_n<\|W\|\le r_{n+1}$ for sufficiently large fixed $N$. On the $n$th interval, $e^{a\|W\|^2}\le e^{a r_{n+1}^2}$, while step 5.1 bounds its probability by $C e^{-b r_n^2}$. Since $r_{n+1}^2/r_n^2\to2$, the resulting series is bounded for large $n$ by a constant times $e^{-(b-3a)r_n^2}$ and converges. The initial bounded interval contributes finitely. Therefore $E e^{a\|W\|^2}<\infty$, and then $\|W\|^2\le c_a e^{a\|W\|^2}$ for a finite constant $c_a$ proves the second claim. [step 5.1, algebra] ∎

