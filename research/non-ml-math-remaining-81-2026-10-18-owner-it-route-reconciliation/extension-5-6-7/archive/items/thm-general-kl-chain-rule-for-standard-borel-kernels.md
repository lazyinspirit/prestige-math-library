---
id: thm-general-kl-chain-rule-for-standard-borel-kernels
kind: theorem
title: "KL chain rule for standard-Borel disintegrations"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-kullback-leibler-divergence
  - def-conditional-kl-for-probability-kernels
  - thm-conditional-kl-is-measurable
  - lem-prior-and-model-kernel-define-joint-law
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - thm-integration-against-a-radon-nikodym-derivative
  - cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras
  - cor-finite-nonnegative-integral-implies-finite-almost-everywhere
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - def-standard-borel-space
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC supplies the Radon–Nikodym densities and the countable determining algebra. Conditional kernels are supplied, not selected in the proof."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapter 5 §5.3, Lemmas 5.3.1–5.3.2 and Theorem 5.3.2"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
    - title: "Yury Polyanskiy and Yihong Wu, MIT 6.441 Information Theory, Chapter 2 §2.2"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/184197ca5d5418da2415d37e929860b9_MIT6_441S16_chapter_2.pdf"
---

## Statement

Let $E,F$ be standard-Borel spaces, let $\mu,\nu$ be probability measures on E, and let $K,L:E\rightsquigarrow F$ be probability kernels. Let $P=\mu\ltimes K$ and $Q=\nu\ltimes L$ be the joint probability laws defined by
$$P(C)=\int_E K(x,C_x)\,\mu(dx),\qquad Q(C)=\int_E L(x,C_x)\,\nu(dx)$$
for product-measurable $C\subseteq E\times F$. Then
$$D(P\|Q)=D(\mu\|\nu)+\int_E D(K(x,\cdot)\|L(x,\cdot))\,\mu(dx)=D(\mu\|\nu)+D_\mu(K\|L),$$
as an equality in $[0,+\infty]$. In particular, when $\mu=\nu$, the joint KL is the conditional KL from [[def-conditional-kl-for-probability-kernels]].

## Facts & Assumptions

**Given:** AC, standard-Borel spaces E,F, probability measures $\mu,\nu$ on E, and supplied probability kernels K,L into F.

[A1] AC is required for the Radon–Nikodym densities and the countable determining algebra. [[def-axiom-of-choice]]

[F1] A probability measure and a probability kernel define a joint probability law with the section-integral formula for every product-measurable set and nonnegative function. [[lem-prior-and-model-kernel-define-joint-law]]

[F2] The conditional KL integrand is measurable and its base integral is well-defined. [[def-conditional-kl-for-probability-kernels]] [[thm-conditional-kl-is-measurable]]

[F3] Under AC, finite measures absolutely continuous with respect to one another have Radon–Nikodym densities, unique almost everywhere, and integrating a density recovers the measure on every measurable set. [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]] [[thm-integration-against-a-radon-nikodym-derivative]]

[F4] A standard-Borel target has a countable algebra generating its sigma-algebra and determining finite measures. [[cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras]]

[F5] A nonnegative function with finite integral is finite almost everywhere, and one with zero integral vanishes almost everywhere. [[cor-finite-nonnegative-integral-implies-finite-almost-everywhere]] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]

[F6] In the absolutely continuous case, if $r=dP/dQ$ then the negative part of the log-density has integral $\int(\ln r)^-dP=\int(r\ln r)^-dQ\le1/e$ for probability laws; the positive part may be infinite. [[def-kullback-leibler-divergence]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 If $\mu\not\ll\nu$, choose A with $\nu(A)=0<\mu(A)$. Then $Q(A\times F)=0<P(A\times F)$ by [F1], so $P\not\ll Q$. Both $D(P\|Q)$ and $D(\mu\|\nu)+D_\mu(K\|L)$ are $+\infty$. Now suppose $\mu\ll\nu$ but $P\not\ll Q$. If $D_\mu(K\|L)<\infty$, [F5] implies $D(K(x,\cdot)\|L(x,\cdot))<\infty$ for $\mu$-almost every x, hence $K(x,\cdot)\ll L(x,\cdot)$ there by [F6]. For any product-measurable C with $Q(C)=0$, [F1] and [F5] give $L(x,C_x)=0$ for $\nu$-almost every x, hence for $\mu$-almost every x. On the intersection with the conditional absolute-continuity set, $K(x,C_x)=0$, and then [F1] gives $P(C)=0$, a contradiction. Thus $D_\mu(K\|L)=+\infty$ and the identity holds in this case too. [A1, F1, F2, F5, F6, given]

1.2 It remains to consider the case $P\ll Q$. [given]
Then $\mu\ll\nu$, since $Q(A\times F)=0$ whenever $\nu(A)=0$, and [F1] gives $P(A\times F)=\mu(A)$. Let $a=d\mu/d\nu$ and $h=dP/dQ$, choosing measurable finite-valued representatives from [F3]. Fix B in the countable determining algebra $\mathcal A_F$ of [F4]. For every measurable A in E, [F1] and [F3] give
$$\int_A a(x)K(x,B)\,\nu(dx)=P(A\times B)=\int_A\left(\int_Bh(x,y)L(x,dy)\right)\nu(dx).$$
Both integrands are measurable by the kernel integration interface in [F1]. Equality on every A makes them equal $\nu$-almost everywhere. Intersecting these conull sets over the countable $\mathcal A_F$, and using $a>0$ $\mu$-almost everywhere, yields one set of full $\mu$-measure on which
$$K(x,B)=\int_B r(x,y)L(x,dy)\quad(B\in\mathcal A_F),\qquad r(x,y):=\frac{h(x,y)}{a(x)}.$$
The algebra contains F, so the right-hand measure has total mass one. By measure determination [F4], it equals $K(x,\cdot)$ on all measurable subsets of F for each such x. [A1, F1, F3, F4, given, choose]

2.1 For product-measurable C, apply the section formula and the fiber identity. [F1, step 1.2]
$$P(C)=\int K(x,C_x)\,\mu(dx)=\int\!\!\int\mathbf1_C(x,y)r(x,y)L(x,dy)\,\mu(dx)=\int_C a(x)r(x,y)\,Q(d(x,y)).$$
Thus $ar$ is a Radon–Nikodym density of P with respect to Q; by uniqueness in [F3], $h=ar$ Q-almost everywhere. On a P-full set, $\ln h=\ln a+\ln r$. By [F6], the negative part of $\ln a$ under $\mu$ is at most $1/e$, and for $\mu$-almost every x the negative part of $\ln r(x,\cdot)$ under $K(x,\cdot)$ is at most $1/e$; integrating the latter bound over the probability base $\mu$ is finite. Hence both sides can be integrated by adding their positive and negative parts separately, with finite negative parts and no $\infty-\infty$ ambiguity. The section formula [F1] now gives
$$D(P\|Q)=\int\ln a\,dP+\int\ln r\,dP=D(\mu\|\nu)+\int D(K(x,\cdot)\|L(x,\cdot))\,\mu(dx).$$
The right side is a sum of extended nonnegative divergences, so this equality includes the infinite cases. [A1, F1, F3, F4, F6, step 1.2, algebra] ∎
