---
id: thm-support-of-banach-gaussian-is-closure-of-rkhs
kind: theorem
title: "The support of a Banach Gaussian is the closure of its RKHS"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - def-banach-gaussian-covariance-operator-and-rkhs
  - def-separable-space
  - thm-banach-gaussian-covariance-rkhs-is-well-defined
  - thm-cameron-martin-translation-for-separable-banach-gaussian-law
  - lem-separable-banach-has-countable-norming-family
  - lem-countable-norming-family-determines-borel-laws
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
  - lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal
  - lem-borel-product-of-second-countable-spaces
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-every-borel-probability-on-a-polish-space-is-tight
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-independent-random-elements
  - thm-rectangle-criterion-for-independent-random-elements
  - thm-relative-hahn-banach-geometric-separation
  - def-axiom-of-choice
  - def-hahn-banach-extension-principle-relative
  - def-countable-choice
  - thm-hahn-banach-dominated-extension
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "The proof uses tightness, an independent product copy, and Hahn–Banach separation. AC supplies HB, and countable choice supplies the countable norming family."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors (2008)"
      url: "https://arxiv.org/pdf/0806.3024"
      locator: "Section 2.1, printed pp. 1436–1438: support of a Borel Gaussian law."
    - title: "M. Hairer, An Introduction to Stochastic PDEs"
      url: "https://www.hairer.org/notes/SPDEs_Course.pdf"
      locator: "Exercise 4.46 and surrounding discussion, source PDF pp. 25–26."
---

## Statement

Assume AC and countable choice. Let $\mu$ be a centered tight Borel Gaussian
law on a real separable Banach
space $B$, and let $H\subseteq B$ be its covariance RKHS. Define
$\operatorname{supp}\mu$ to be the set of $x\in B$ for which every open
neighborhood has positive $\mu$-measure. Then
$$\operatorname{supp}\mu=\overline H^{\,B}.$$

## Facts & Assumptions

[F1] Cameron–Martin translations by $h\in H$ are equivalent to $\mu$
([[thm-cameron-martin-translation-for-separable-banach-gaussian-law]]).

[F2] Tightness supplies a compact set of positive measure
([[thm-every-borel-probability-on-a-polish-space-is-tight]]).

[F3] Centered multivariate normal vectors are determined by their covariance,
and countable norming coordinates determine Borel laws on $B$
([[def-multivariate-normal-law]],
[[lem-characteristic-function-of-a-multivariate-normal-law]],
[[lem-countable-norming-family-determines-borel-laws]]).

[F4] A point outside a closed linear subspace of a normed space can be
separated from it by a continuous linear functional
([[thm-relative-hahn-banach-geometric-separation]],
[[def-hahn-banach-extension-principle-relative]]).

[A1] The product of two copies of $\mu$ exists and its coordinate maps are independent
([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]],
[[def-independent-random-elements]],
[[thm-rectangle-criterion-for-independent-random-elements]]).


[A2] Under AC, the real dominated-extension theorem supplies the Hahn–Banach principle HB used by geometric separation ([[thm-hahn-banach-dominated-extension]], [[def-hahn-banach-extension-principle-relative]]).

[F5] Countable dense sets and rational-radius balls give countable bases for the separable Banach factors; their product Borel sigma-algebra is the product of the factor Borel sigma-algebras. Continuous maps have Borel preimages of Borel sets. ([[def-separable-space]], [[lem-borel-product-of-second-countable-spaces]], [[thm-continuous-preimages-of-borel-sets-are-borel]])

[F6] A finite stack of independent multivariate Gaussian vectors is multivariate Gaussian, including singular covariance matrices. ([[lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal]])
## Proof


**Given:** AC, countable choice, a centered tight Borel Gaussian law $\mu$ on a real separable Banach space $B$ and its covariance RKHS $H$.

1.1 First, $0\in\operatorname{supp}\mu$. Fix $\varepsilon>0$. By [F2] choose compact $K$ with $\mu(K)>1/2$ and cover it by finitely many balls of radius $\rho=\varepsilon/(2\sqrt2)$. One ball $B(x,\rho)$ has positive $\mu$-measure. On $(B\times B,\mathcal B(B)\otimes\mathcal B(B),\mu\otimes\mu)$ let $W,W'$ be the independent coordinate copies. By [F5], this product sigma-algebra is the Borel sigma-algebra of $B\times B$; the maps $(x,y)\mapsto x-y$ and $x\mapsto\sqrt2x$ are continuous, so $W-W'$ and $\sqrt2W$ are Borel random elements. The event that both copies lie in $B(x,\rho)$ has positive probability and implies $\|W-W'\|<2\rho$. Choose a countable norming family using countable choice and HB from [A2]. For any finite subfamily, the coordinate vectors of $W,W'$ are independent centered multivariate normals with common covariance $\Sigma$; [F6] makes their stack multivariate Gaussian, so its linear image giving the difference is multivariate Gaussian. The vector for $\sqrt2W$ is also multivariate Gaussian, and both vectors have covariance $2\Sigma$. Thus [F3] makes their finite laws equal. Countable norming-law determination in [F3] gives $W-W'\stackrel{d}=\sqrt2W$. Hence $\mu(B(0,\varepsilon/2))>0$, and therefore $\mu(B(0,\varepsilon))>0$. [A1, A2, F2, F3, F5, F6, given, choose]

1.2 Suppose $x\notin\overline H^{\,B}$. By [F4] choose $\ell\in B^*$ with $\ell(H)=0$ and $\ell(x)\ne0$. For every $m\in B^*$, $\ell(Cm)=E[\ell(W)m(W)]=0$, since $Cm\in H$. Taking $m=\ell$ gives $E[\ell(W)^2]=0$, so $\ell(W)=0$ almost surely. Hence $\mu(\ker\ell)=1$. Because $\ker\ell$ is closed and does not contain $x$, some open neighborhood of $x$ is disjoint from $\ker\ell$ and has measure zero. Thus $x\notin\operatorname{supp}\mu$. [A2, F4, given, algebra]

2.1 For $h\in H$, [F1] gives equivalence of the law of $W-h$ with $\mu$. Thus its mass on $B(0,\varepsilon)$ is positive by step 1.1. That mass is $\mu(B(h,\varepsilon))$, so every $h\in H$ lies in the support. Since the support is closed, $\overline H^{\,B}\subseteq\operatorname{supp}\mu$. [F1, step 1.1]

3.1 Step 2.1 gives $\overline H^{\,B}\subseteq\operatorname{supp}\mu$, and step 1.2 gives the reverse inclusion. Therefore the two sets are equal. [step 2.1, step 1.2] ∎

