---
id: lem-dp-joint-measure-purification
kind: lemma
title: Approximate privacy admits purification of a joint measure with fixed history marginal
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-measure-kernel-and-probability-kernel
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-measurability-of-integration-against-a-kernel
  - thm-sections-of-product-measurable-functions-are-measurable
  - thm-monotone-convergence-for-the-integral
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: AC is used only through the ordinary finite-measure Radon–Nikodym theorem. No regular conditional distribution or kernel Radon–Nikodym version is used.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Dwork and Roth, The Algorithmic Foundations of Differential Privacy, Lemma 3.17 and Theorem 3.20"
      url: https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf
---

## Statement

Assume AC. Let $H,Y$ be arbitrary measurable spaces, let $\lambda$ be a probability measure on $H$, and let $K,L$ be probability kernels from $H$ to $Y$. Suppose $\varepsilon\ge0$, $0\le\delta\le1$, and, for every $h$ and every measurable $A\subseteq Y$,
$$K(h,A)\le e^\varepsilon L(h,A)+\delta,\qquad L(h,A)\le e^\varepsilon K(h,A)+\delta.$$
Define probability measures on the product sigma-algebra by
$$R(B)=\int_H K(h,B_h)\lambda(dh),\qquad S(B)=\int_H L(h,B_h)\lambda(dh).$$
There is a probability measure $T$ on $H\times Y$ whose $H$ marginal is $\lambda$, such that, as inequalities of measures,
$$e^{-\varepsilon}S\le T\le e^\varepsilon S,\qquad \operatorname{TV}(R,T)\le\delta.$$
Here $\operatorname{TV}(U,V)=\sup_B|U(B)-V(B)|$. No countability or topological condition is imposed on either measurable space.

## Statement references

[Dwork and Roth, Lemma 3.17 and the approximate-privacy reduction in Theorem 3.20.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

## Facts & Assumptions

**Given:** AC, arbitrary measurable $H,Y$, probability $\lambda$, probability kernels $K,L$, and the pointwise two-directional event bounds in the Statement.

[A1] [[def-axiom-of-choice|AC]] is assumed for [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality|ordinary Radon–Nikodym derivatives]] of finite measures; the whole space is a common finite exhaustion.

[F1] [[def-measure-kernel-and-probability-kernel|Probability kernels]], [[thm-sections-of-product-measurable-functions-are-measurable|measurable sections]], and [[thm-measurability-of-integration-against-a-kernel|kernel integration measurability]] apply on the arbitrary [[def-product-sigma-algebra-and-finite-product-sigma-algebras|product sigma-algebra]].

[F2] [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure|A nonnegative density defines a measure]]. [[thm-monotone-convergence-for-the-integral|Monotone convergence]] extends identities for indicator integrals first to simple functions and then to nonnegative measurable functions.

[F3] [[thm-composition-with-borel-functions-preserves-measurability|Borel composition]] preserves measurability of the finite scalar clipping and correction formulas below.

[F4] At $u=0$, [[cor-exponential-reciprocal-and-positivity]] gives $\exp(0)=1/\exp(0)>0$, hence $\exp(0)=1$. Then [[thm-exponential-is-strictly-increasing]] gives $a=\exp(\varepsilon)\ge1$ for $\varepsilon\ge0$, and the reciprocal identity gives $1/a=\exp(-\varepsilon)>0$.

## Proof

1.1 By [F1], the integrands defining $R,S$ are measurable. Countable additivity follows by applying monotone convergence to disjoint sections, and total mass is one. The same argument gives $\mu=(R+S)/2=\lambda\otimes M$, where $M=(K+L)/2$ is the explicit mixture probability kernel and the notation $\lambda\otimes M$ denotes the displayed iterated integral. Both $R,S$ have marginal $\lambda$. By [A1], choose a density of $R$ relative to $\mu$. The inequality $0\le R\le2\mu$ forces this density into $[0,2]$ almost everywhere: a positive-measure level set violating a bound would contradict that measure inequality. Clip it into $[0,2]$ and call the result $p$; put $q=2-p$. Thus $p,q$ are finite nonnegative product-measurable densities of $R,S$ relative to $\mu$. The indicator identities extend to nonnegative integrands by [F2]. [A1, F1, F2, F3, given, choose, construct]

2.1 Write $a=\exp(\varepsilon)\ge1$ by [F4]. Let $E=\{p>aq\}$ and $F=\{p<q/a\}$, both product-measurable. For every measurable history event $C$, apply the assumed event inequality to $E_h$ for $h\in C$, and integrate. The density identities give $\int_{C\times Y}(p-aq)_+\,d\mu=R(E\cap(C\times Y))-aS(E\cap(C\times Y))\le\delta\lambda(C)$. Similarly $\int_{C\times Y}(q/a-p)_+\,d\mu\le(\delta/a)\lambda(C)$. Define $\alpha(h)=\int(p-aq)_+(h,y)M(h,dy)$ and $\beta(h)=\int(q/a-p)_+(h,y)M(h,dy)$. These are finite measurable functions. Localization over all $C$ implies $\alpha\le\delta$ and $\beta\le\delta/a$ almost everywhere, since a violating positive-measure level set could be used for $C$. Likewise, the common history marginals imply $\int p(h,y)M(h,dy)=\int q(h,y)M(h,dy)=1$ for $\lambda$-almost every $h$, by equality of their integrals over every $C$. Let $G$ be the measurable conull set where all four scalar conditions hold. Only the two specified joint level sets and scalar marginal identities have been used; no simultaneous fiberwise density representation is asserted. [F1, F2, F3, F4, step 1.1, given, construct]

3.1 Put $c=\min\{\max\{p,q/a\},aq\}$ and $m(h)=\int c(h,y)M(h,dy)$. On $G$, $m=1-\alpha+\beta$ and $q/a\le c\le aq$. If $m<1$, set $w=c+\frac{1-m}{a-m}(aq-c)$; if $m>1$, set $w=c-\frac{m-1}{m-1/a}(c-q/a)$; if $m=1$, set $w=c$. Every used denominator is strictly positive and its fraction lies in $[0,1]$. These formulas give $q/a\le w\le aq$ and $\int w(h,y)M(h,dy)=1$ on $G$. Off $G$, set $w=q$. All formulas are measurable by [F1] and [F3]; each division is confined to its stated measurable branch. In particular, when $a=1$, $c=q$ and $m=1$ on $G$, so no zero denominator is used. [F1, F3, F4, step 1.1, step 2.1, construct, algebra]

4.1 Define $T(B)=\int_B w\,d\mu$. By [F2] this is a measure. The conditional normalization on $G$ and the fact that $G^c$ is $\lambda$-null imply $T(C\times Y)=\lambda(C)$, so $T$ is a probability measure with the required marginal. Integrating $q/a\le w\le aq$ gives $S/a\le T\le aS$. On $G$, clipping changes $p$ by conditional absolute integral $\alpha+\beta$, and the correction changes $c$ in one direction by conditional absolute integral $|1-m|=|\alpha-\beta|$. Consequently $\int|p-w|\,d\mu\le2\int\max\{\alpha,\beta\}\,d\lambda\le2\delta$. Because $p,w$ have equal total integral, the positive and negative parts of $p-w$ have the same integral; every event integral lies between these two extrema, attained by its sign sets. Thus $\operatorname{TV}(R,T)=\frac12\int|p-w|\,d\mu\le\delta$. This proves all claims, including $\delta=0$ and $\varepsilon=0$. [F1, F2, step 1.1, step 2.1, step 3.1, algebra] ∎

## Source notes

The source gives the clipping/redistribution idea and the advanced-composition reduction for discrete distributions. The proof here supplies the joint-measure construction on arbitrary measurable spaces. Its conclusion concerns measures with a fixed marginal and does not claim a measurable family of fiberwise Radon–Nikodym derivatives or a disintegration of $T$.
