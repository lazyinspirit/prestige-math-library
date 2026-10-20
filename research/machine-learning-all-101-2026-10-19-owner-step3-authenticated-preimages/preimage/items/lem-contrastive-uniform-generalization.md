---
id: lem-contrastive-uniform-generalization
kind: lemma
title: "Uniform generalization bound for the one-negative contrastive loss"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-identically-distributed-and-iid-random-variables
  - def-latent-class-contrastive-learning
  - def-natural-logarithm
  - lem-contrastive-hinge-and-logistic-loss-properties
  - lem-vector-rademacher-contraction-for-bounded-classes
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - thm-independent-random-elements-have-product-joint-law
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-natural-logarithm-laws
  - thm-rademacher-uniform-generalization
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Nikunj Saunshi et al., A Theoretical Analysis of Contrastive Unsupervised Representation Learning, Supplementary Appendix A.3"
      url: "https://proceedings.mlr.press/v97/saunshi19a/saunshi19a-supp.pdf"
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Theorem 3.3 and complete proof"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Andreas Maurer, A vector-contraction inequality for Rademacher complexities, Theorem 3, Corollary 4, and complete proof"
      url: "https://arxiv.org/pdf/1605.00251"
---

## Statement

Assume the Axiom of Choice. In the one-negative latent-class model, fix $R>0$, a source loss $\ell\in\{\ell_{\rm h},\ell_{\rm log}\}$, a sample size $M\ge1$, and a sample $S$ of $M$ IID triplets. Assume the loss risks and all sample, independent-copy, and sign suprema below are measurable. Let $B_{\ell,R}=\ell(2R^2)-\ell(-2R^2)$ and define

$$\Gamma_M(S,\delta):=\frac{2\sqrt{18}L_0R\,\mathcal R_S(\mathcal F)}{M}+3B_{\ell,R}\sqrt{\frac{\ln(4/\delta)}{2M}},\qquad 0<\delta<1.$$

With probability at least $1-\delta$ over $S$,

$$\forall f\in\mathcal F,\qquad |L_{\rm un}(f)-\widehat L_{\rm un}(f)|\le\Gamma_M(S,\delta).$$

Here $\mathcal R_S(\mathcal F)$ is the unnormalized vector Rademacher complexity of the three embeddings in each triplet.

## Statement references

[[def-latent-class-contrastive-learning]]: fixes the one-negative triplet loss, IID sample, representation bound and unnormalized vector Rademacher complexity.

[[lem-contrastive-hinge-and-logistic-loss-properties]]: supplies $L_0$ and the positive oscillation $B_{\ell,R}$ of either source loss on the score range.

[[lem-vector-rademacher-contraction-for-bounded-classes]]: bounds the one-sided vector Rademacher average, with constant $\sqrt3$.

[[thm-rademacher-uniform-generalization]]: supplies the two-sided high-probability deviation bound for measurable $[0,1]$-valued classes under AC.

[Saunshi et al., Supplementary Appendix A.3](https://proceedings.mlr.press/v97/saunshi19a/saunshi19a-supp.pdf): applies vector contraction and bounded-loss uniform generalization to the contrastive class.

[Mohri et al., Theorem 3.3 and complete proof, printed pp. 30–33](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1): proves the bounded-loss Rademacher uniform-deviation step.

[Maurer, Theorem 3, Corollary 4 and complete proof](https://arxiv.org/pdf/1605.00251): gives a sharper vector-contraction constant; the proof here instead uses the local $\sqrt3$ lemma.

## Facts & Assumptions

**Given:** AC, the one-negative latent-class model with $R>0$, either source loss, IID triplets, $M\ge1$, $0<\delta<1$, and the measurability assumptions in the Statement.

[A1] AC is the set-theoretic choice axiom used by the uniform-generalization supplier through its bounded-differences theorem. [[def-axiom-of-choice]], [[thm-rademacher-uniform-generalization]]

[F1] The triplets are IID; the population and empirical risks are the expectation and sample average of $\ell(q_f)$. [[def-latent-class-contrastive-learning]], [[def-identically-distributed-and-iid-random-variables]], [[thm-independent-random-elements-have-product-joint-law]]

[F2] The score obeys $|q_f(x,x^+,x^-)|\le2R^2$, the loss is nondecreasing and $L_0$-Lipschitz, and its range on that interval is $B_{\ell,R}>0$. [[def-latent-class-contrastive-learning]], [[lem-contrastive-hinge-and-logistic-loss-properties]]

[F3] The two-sided empirical Rademacher deviation theorem for a measurable class $\mathcal G$ of functions into $[0,1]$ gives, with probability at least $1-\delta$, $\sup_{g\in\mathcal G}|Pg-P_Mg|\le2\widehat{\mathfrak R}_S(\mathcal G)+3\sqrt{\ln(4/\delta)/(2M)}$. It assumes AC. [[thm-rademacher-uniform-generalization]]

[F4] For a nonempty bounded trace set and coordinatewise functions with common Euclidean Lipschitz constant $L$, one-sided vector contraction bounds the scalar sign supremum by $\sqrt3L$ times the independent coordinate-sign supremum. [[lem-vector-rademacher-contraction-for-bounded-classes]]

[F5] For vectors $u,v$, $|u^\top v|\le\|u\|_2\|v\|_2$; integrable expectations are linear. [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]

## Proof

**Given:** The hypotheses in the Statement and Facts & Assumptions.

1.1 Set $a=\ell(-2R^2)$ and $B=B_{\ell,R}$. For each triplet $z=(x,x^+,x^-)$, define $g_f(z)=(\ell(q_f(z))-a)/B$. By [F2], $g_f$ takes values in $[0,1]$. Since the shift $a$ is common to every $f$, averaging over the signs shows that the empirical one-sided Rademacher complexity of $\{g_f:f\in\mathcal F\}$ equals $B^{-1}$ times that of $\{\ell(q_f):f\in\mathcal F\}$: the extra term is $-(a/B)\sum_j\varepsilon_j$, whose sign expectation is zero. [A1, F1, F2, F5, given]

1.2 For a fixed triplet, write $v=(u_0,u_+,u_-)\in(\mathbb R^d)^3$ and $h(v)=\ell(u_0^\top(u_--u_+))$ on $K=(\overline B_R)^3$, where $\overline B_R=\{u:\|u\|_2\le R\}$. For $v,v'\in K$, expansion of the score difference and [F5] give $|h(v)-h(v')|\le L_0R(2\|u_0-u'_0\|_2+\|u_--u'_-\|_2+\|u_+-u'_+\|_2)\le\sqrt6L_0R\|v-v'\|_2$. The last inequality is Cauchy–Schwarz for the three nonnegative coordinate distances. This Lipschitz function extends to all of $(\mathbb R^d)^3$ with the same constant by $\widetilde h(v)=\inf_{w\in K}\{h(w)+\sqrt6L_0R\|v-w\|_2\}$: on $K$ the Lipschitz inequality gives equality with $h$, and the triangle inequality gives the global Lipschitz bound. [F2, F5, given, algebra]

2.1 For the observed triplets, let $V=\{(f(x_j),f(x_j^+),f(x_j^-))_{j=1}^M:f\in\mathcal F\}$, a nonempty bounded trace set. Apply [F4] to the extensions in step 1.2 with $L=\sqrt6L_0R$. The independent coordinate signs are exactly those defining $\mathcal R_S(\mathcal F)$, so $\widehat{\mathfrak R}_S(\{g_f:f\in\mathcal F\})\le\frac{\sqrt3\sqrt6L_0R\,\mathcal R_S(\mathcal F)}{BM}=\frac{\sqrt{18}L_0R\,\mathcal R_S(\mathcal F)}{BM}$. The normalization $1/M$ comes from the empirical complexity convention; $\mathcal R_S$ itself is unnormalized. [F1, F4, step 1.1, step 1.2, given, algebra]

3.1 Apply [F3] to the normalized class in step 1.1. With probability at least $1-\delta$, its uniform deviation is at most twice the complexity in step 2.1 plus $3\sqrt{\ln(4/\delta)/(2M)}$. Multiplying by $B$ converts that deviation to the unnormalized losses and yields exactly $\Gamma_M(S,\delta)$ for every $f\in\mathcal F$. [A1, F1, F2, F3, step 1.1, step 2.1, given, algebra] ∎
