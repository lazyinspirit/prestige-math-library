---
id: ex-ell-three-framing-anomaly-and-kirby-blowup
kind: example
title: "The ell=3 framing anomaly and Kirby blow-up"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
deps: [thm-su2-root-unity-ribbon-category-is-modular, lem-su2-hopf-link-sine-data-from-truncated-fusion, lem-modular-gauss-sums-and-kirby-color, def-weighted-lagrangian-ribbon-bordism, def-countable-choice, thm-weighted-rt-tqft-and-factorization, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §§3.3 and 5.7"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
    - title: "Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity, §3.3"
      url: "https://arxiv.org/pdf/math/0308281"
---

## Statement

Conditional on the actual $\ell=3$ ribbon category and weighted surgery construction of [[thm-su2-root-unity-ribbon-category-is-modular]] and [[thm-weighted-rt-tqft-and-factorization]], the normalized Gauss sums are $p_+=1+i$, $p_-=1-i$, and $\kappa=e^{\pi i/4}$. The weighted normalization is unchanged by either Kirby blow-up, while the unweighted link sum changes by $\kappa^{\pm1}\ne1$.

## Facts & Assumptions

**Given:** $\ell=3$, $q=e^{\pi i/3}$, the positive-trace convention in the conditional sine data, and the surgery normalization of [[lem-modular-gauss-sums-and-kirby-color]].

[F1] The conditional $\ell$-level data give labels $a=0,\ldots,\ell-2$, $d_a=\sin((a+1)\pi/\ell)/\sin(\pi/\ell)$, $\theta_a=q^{a(a+2)/2}$, and the sine Hopf matrix ([[lem-su2-hopf-link-sine-data-from-truncated-fusion]]).

[F2] $p_\pm=\sum_a\theta_a^{\pm1}d_a^2$, $p_+p_-=D^2$, and the normalized blow-up factors are $D^{-1}\kappa^{-1}p_+$ and $D^{-1}\kappa p_-$ ([[lem-modular-gauss-sums-and-kirby-color]]).

[A1] The actual tilting quotient and weighted TQFT carriers are still escalated; this computation is conditional on their exact hypotheses ([[thm-su2-root-unity-ribbon-category-is-modular]], [[thm-weighted-rt-tqft-and-factorization]]).

## Proof

**Given:** The conditional data in the Statement.

1.1 The labels are $0,1$. The dimension formula gives $d_0=d_1=1$. The twist formula gives $\theta_0=1$ and $\theta_1=q^{3/2}=e^{\pi i/2}=i$. Thus $D^2=1+1=2$ and choose $D=\sqrt2$. The Gauss sums are
$p_+=1+i,\qquad p_-=1-i,\qquad \kappa=\frac{1+i}{\sqrt2}=e^{\pi i/4}.$
In particular $\kappa\ne1$. [F1, given, algebra]

1.2 A positive blow-up multiplies the surgery link value by $p_+$ and changes $(m,\sigma)$ to $(m+1,\sigma+1)$, so its normalized ratio is
$D^{-1}\kappa^{-1}p_+=D^{-1}\frac{D}{p_+}p_+=1.$
A negative blow-up has ratio
$D^{-1}\kappa p_-=D^{-1}\frac{p_+p_-}{D}=1$
by [F2]. If the factor $\kappa^{-\sigma}$ is omitted, the same two blow-ups multiply the value by $p_+/D=\kappa$ and $p_-/D=\kappa^{-1}$, both nontrivial. Thus an unweighted surgery link sum is not invariant under these moves for this conditional data. [F2, step 1.1, algebra]

2.1 The arithmetic and both blow-up cancellations are proved under the displayed hypotheses. The assertion that these values arise from the actual $\ell=3$ tilting quotient and define a bordism invariant still depends on [A1], whose cited item bodies do not yet prove those claims. [A1, step 1.2] ∎

## Readiness note

The conditional calculation is complete; readiness is escalated until the actual modular quotient and weighted TQFT suppliers are proved.
