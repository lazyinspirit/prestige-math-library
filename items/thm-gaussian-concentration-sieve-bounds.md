---
dependency_level: 8
id: thm-gaussian-concentration-sieve-bounds
kind: theorem
title: Gaussian concentration-function sieve bounds
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-gaussian-prior-concentration-function
  - def-banach-gaussian-covariance-operator-and-rkhs
  - def-separable-space
  - thm-cameron-martin-translation-for-separable-banach-gaussian-law
  - def-multivariate-normal-law
  - lem-rat-embeds-dense
  - thm-rationals-countable
  - thm-product-of-countable
  - lem-countable-norming-family-determines-borel-laws
  - lem-borel-product-of-second-countable-spaces
  - lem-separable-banach-has-countable-norming-family
  - thm-borell-sudakov-tsirelson-expansion-for-banach-gaussian-law
  - lem-banach-gaussian-rkhs-unit-ball-is-compact
  - def-standard-normal-and-normal-laws
  - def-covering-packing-bracketing-number-and-metric-entropy
  - thm-borel-probability-measures-on-polish-spaces-are-inner-regular
  - def-axiom-of-choice
  - def-countable-choice
  - thm-hahn-banach-dominated-extension
  - def-hahn-banach-extension-principle-relative
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: The result uses the declared Gaussian, Cameron–Martin, inner-regularity and expansion interfaces. AC supplies HB for the norming coordinates; no statistical-model or posterior-contraction assumption is made.
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
    - title: A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors (2008)
      url: https://arxiv.org/pdf/0806.3024
      locator: Theorem 2.1 and complete proof in §5, printed pp. 1437–1440 and 1454–1456.
    - title: C. Borell, The Brunn–Minkowski inequality in Gauss space (1975)
      url: https://dornsife.usc.edu/sergey-lototsky/wp-content/uploads/sites/211/2023/06/Borell-Subspace-original.pdf
      locator: "Section 3, Theorem 3.1: Gaussian enlargement inequality used for the sieve tail."
---

## Statement

Assume AC and countable choice. Let $\mu$ be a centered tight Borel Gaussian
law on a real separable Banach
space $B$, with covariance RKHS $H$, and let $w_0\in\overline H^{\,B}$.
Suppose $n\ge1$, $\varepsilon>0$, $C>1$,
$e^{-Cn\varepsilon^2}<1/2$, and
$\phi_{w_0}(\varepsilon)\le n\varepsilon^2$, where $\phi_{w_0}$ is the
concentration function. Then there is a measurable set $B_n\subseteq B$
such that
$$\log N(3\varepsilon,B_n,\|\cdot\|_B)\le6Cn\varepsilon^2,\qquad \mu(B\setminus B_n)\le e^{-Cn\varepsilon^2},$$
and
$$\mu\{\|W-w_0\|_B<2\varepsilon\}\ge e^{-n\varepsilon^2}.$$
These are prior-mass and sieve bounds only; they assert no posterior
contraction without separate statistical-distance and Kullback–Leibler
comparisons.

## Facts & Assumptions

[A1] AC and countable choice are inherited from the Gaussian translation and Banach expansion suppliers ([[def-axiom-of-choice]], [[def-countable-choice]]).

[A2] Under AC, the real dominated-extension theorem supplies the Hahn–Banach principle HB used by the dual-norming interface ([[thm-hahn-banach-dominated-extension]], [[def-hahn-banach-extension-principle-relative]]).

[F1] The concentration function satisfies $\phi_{w_0}(\varepsilon)= \inf_{\|h-w_0\|_B<\varepsilon} \{\|h\|_H^2-\log\mu(\varepsilon B^\circ)\}$ ([[def-gaussian-prior-concentration-function]]).

[F2] For $h\in H$, the law of $W+h$ has density $\exp(z_h-\|h\|_H^2/2)$ with respect to $\mu$ ([[thm-cameron-martin-translation-for-separable-banach-gaussian-law]]).

[F3] The Gaussian expansion inequality gives $\mu_*(A+rH_1)\ge\Phi(\Phi^{-1}(\mu(A))+r)$ for Borel $A$ ([[thm-borell-sudakov-tsirelson-expansion-for-banach-gaussian-law]]).

[F4] $H_1$ is compact in the Banach norm ([[lem-banach-gaussian-rkhs-unit-ball-is-compact]]).

[F5] A standard normal has density $(2\pi)^{-1/2}e^{-z^2/2}$ ([[def-standard-normal-and-normal-laws]]).

[F6] A Borel subset of a Polish space is inner regular, so its inner measure equals its probability ([[thm-borel-probability-measures-on-polish-spaces-are-inner-regular]]).

[F7] Balls with rational radii and centers in a countable dense subset form a countable base for $B$; together with the countable base of $\mathbb R$, this makes $B\times\mathbb R$ second countable and its Borel sigma-algebra the product Borel sigma-algebra ([[def-separable-space]], [[lem-rat-embeds-dense]], [[thm-rationals-countable]], [[thm-product-of-countable]], [[lem-borel-product-of-second-countable-spaces]]). The Borel version of $z_h$ from the Cameron–Martin theorem therefore gives a Borel joint law for $(W,z_h)$. Appending $z_h$ to a countable norming family for $B$ gives a norming family for $B\times\mathbb R$, whose finite centered Gaussian coordinate laws are invariant under simultaneous negation ([[thm-cameron-martin-translation-for-separable-banach-gaussian-law]], [[lem-separable-banach-has-countable-norming-family]], [[lem-countable-norming-family-determines-borel-laws]], [[def-multivariate-normal-law]]).

[F8] $N(\delta,A,\|\cdot\|_B)$ is the least number of closed radius-$\delta$ balls centered in $A$ that cover $A$, and metric entropy is its logarithm ([[def-covering-packing-bracketing-number-and-metric-entropy]]).

## Proof


**Given:** $\mu,B,H,w_0,n,\varepsilon,C$ as in the Statement. Set $t=n\varepsilon^2$ and $p=\mu(\varepsilon B^\circ)$.

1.1 The hypothesis [F1] implies $p\ge e^{-t}>0$, because every candidate $h$ has $\|h\|_H^2\ge0$. Fix $h\in H$. Take a countable norming family for $B$ and append the scalar coordinate $z_h$; this is a countable norming family for $B\times\mathbb R$ with the maximum product norm. By [F7], each finite coordinate vector is centered Gaussian and hence invariant under negation, so countable law determination makes the joint law symmetric under $(x,z)\mapsto(-x,-z)$. Thus, since $\varepsilon B^\circ$ is symmetric, $\int_{\varepsilon B^\circ}e^{-z_h(x)}\,d\mu(x) =\int_{\varepsilon B^\circ}\cosh(z_h(x))\,d\mu(x) \ge p.$ The Cameron–Martin identity [F2] for $-h$ now gives $\mu(h+\varepsilon B^\circ)\ge e^{-\|h\|_H^2/2}p$. [A1, A2, F1, F2, F7, given, algebra]

2.1 For each $\delta>0$, choose $h\in H$ with $\|h-w_0\|_B<\varepsilon$ and $\|h\|_H^2-\log p<\phi_{w_0}(\varepsilon)+\delta\le t+\delta$. Since $\|h\|_H^2/2-\log p\le\|h\|_H^2-\log p<t+\delta$, and $h+\varepsilon B^\circ\subset w_0+2\varepsilon B^\circ$, step 1.1 gives $\mu\{\|W-w_0\|_B<2\varepsilon\}\ge e^{-t-\delta}$. Letting $\delta\downarrow0$ proves the small-ball lower bound. [F1, step 1.1, choose, algebra]

2.2 Let $b=\Phi^{-1}(e^{-Ct})<0$ and $M=-2b>0$, and set $B_n=\varepsilon B^\circ+MH_1$. This is open, hence measurable. Since $p\ge e^{-t}$ and $C>1$, monotonicity of $\Phi^{-1}$ gives $\Phi^{-1}(p)>b$. By [F3], $\mu(B_n)\ge \Phi(\Phi^{-1}(p)+M) >\Phi(-b)=1-e^{-Ct}.$ The set $B_n$ is open and therefore Borel, so [F6] identifies its inner measure with $\mu(B_n)$. Thus $\mu(B\setminus B_n)\le e^{-Ct}$. [F3, F6, step 1.1, algebra]

2.3 Choose a maximal finite set $\{h_1,\ldots,h_N\}\subset MH_1$ with pairwise distances greater than $2\varepsilon$; such a set exists and covers $MH_1$ by closed $2\varepsilon$-balls because $MH_1$ is compact by [F4]. The open balls $h_i+\varepsilon B^\circ$ are disjoint. Step 1.1 and $\|h_i\|_H\le M$ imply each has $\mu$-measure at least $e^{-M^2/2}p$. Hence $N e^{-M^2/2}p\le1$ and $\log N\le M^2/2-\log p\le M^2/2+t$. Every point of $B_n$ is $x+h$ with $x\in\varepsilon B^\circ$ and $h\in MH_1$, so it lies within $3\varepsilon$ of some $h_i$. Also $h_i=0+h_i\in B_n$ because $0\in\varepsilon B^\circ$. Thus these are admissible centers in the covering-number convention [F8], and $N(3\varepsilon,B_n,\|\cdot\|_B)\le N$. [F1, F2, F4, F8, step 1.1, construct]

3.1 Completing the square in the standard normal density [F5] gives $E e^{-\lambda Z}=e^{\lambda^2/2}$. For $x\ge0$, on $\{Z\le-x\}$ one has $e^{-xZ}\ge e^{x^2}$, so $\Phi(-x)=P(Z\le-x)\le e^{-x^2}E e^{-xZ}=e^{-x^2/2}$. With $x=\sqrt{2Ct}$ this gives $\Phi(-\sqrt{2Ct})\le e^{-Ct}=\Phi(b)$, hence $-\sqrt{2Ct}\le b<0$ and $b^2\le2Ct$. Consequently $\log N(3\varepsilon,B_n,\|\cdot\|_B)\le2b^2+t\le4Ct+t\le5Ct\le6Ct$, using $C>1$. Step 2.2 supplies the complement bound and step 2.1 the small-ball bound. No posterior statement follows from these three prior inequalities alone. [F5, step 2.1, step 2.2, step 2.3, algebra] ∎
