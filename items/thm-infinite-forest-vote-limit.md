---
id: thm-infinite-forest-vote-limit
kind: theorem
title: "Almost-sure limiting risk of an infinite random-forest classifier"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 4
deps:
  - alg-bagged-random-forest
  - def-identically-distributed-and-iid-random-variables
  - lem-measurable-functions-preserve-independence
  - thm-kolmogorov-iid-l1-strong-law
  - thm-independent-random-elements-have-product-joint-law
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-dominated-convergence
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  scraped: []
  references:
    - title: 'Leo Breiman, "Random Forests," Machine Learning 45 (2001), 5–32; full text hosted by the University of Chicago Macro Finance Research Program'
      url: 'https://mfm.uchicago.edu/wp-content/uploads/2020/06/Breiman-Random-Forests.pdf'
    - title: 'Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing, Chapter 15'
      url: 'https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS'
pipeline_run: machine-learning-all-101-2026-10-19
---

## Statement

Fix a finite training dataset and a classifier $h(x,\theta)$ taking values in an ordered finite class set $\mathcal C=\{c_1<\cdots<c_J\}$ with $J\ge2$. Let $\Theta_1,\Theta_2,\ldots$ be IID random elements of a measurable space $(\mathsf T,\mathcal T)$ with common law $Q$. Regard the sequence as a random element of $(\mathsf T^{\mathbb N},\mathcal T^{\otimes\mathbb N})$ and assume it is independent of a test pair $(X,Y)$ with law $P$ on $\mathcal X\times\mathcal C$. Assume $h$ is jointly measurable in $(x,\theta)$. For $j\in\{1,\ldots,J\}$ define $p_j(x)=Q\{\theta:h(x,\theta)=c_j\}$, and let

$$
m(x,y)=p_{k}(x)-\max_{j\ne k}p_j(x),\qquad y=c_k.
$$

For each $B\ge1$, let $G_B(x)$ be the class with the largest number of votes among $h(x,\Theta_1),\ldots,h(x,\Theta_B)$, choosing the least class index in a tie. Define the finite-forest conditional risk by

$$
PE_B(\Theta_{1:B})=\int_{\mathcal X\times\mathcal C}\mathbf1\{G_B(x)\ne y\}\,dP(x,y).
$$

If $P\{(x,y):m(x,y)=0\}=0$, then, almost surely with respect to the IID tree-randomization sequence,

$$
PE_B(\Theta_{1:B})\longrightarrow P\{(x,y):m(x,y)<0\}.
$$

## Statement references

[Breiman, “Random Forests,” Theorem 1.2 and Appendix I, printed pp. 7 and 29–30](https://mfm.uchicago.edu/wp-content/uploads/2020/06/Breiman-Random-Forests.pdf)

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §15.2, printed pp. 587–593; used for the forest construction, not as a proof of this risk limit](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

## Facts & Assumptions

**Given:** The fixed training data, measurable classifier and IID tree-randomization sequence, independent test pair, finite ordered class set, and zero-margin hypothesis in the Statement.

[F1] [[alg-bagged-random-forest]]: Classification uses the class with the largest number of tree votes and the least class index for a tie.

[F2] [[def-identically-distributed-and-iid-random-variables]]: IID means mutual independence together with identical laws; it includes no moment assumption.

[F3] [[lem-measurable-functions-preserve-independence]]: Applying the same measurable map to each member of an independent family preserves independence.

[F4] [[thm-kolmogorov-iid-l1-strong-law]]: For IID real random variables with finite first absolute moment, their sample averages converge almost surely to their common mean.

[F5] [[thm-independent-random-elements-have-product-joint-law]]: The joint law of a finite independent family of random elements is the product of their marginal laws.

[F6] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: For an integrable function on a product of sigma-finite measure spaces, either order of iterated integration gives the product integral.

[F7] [[thm-dominated-convergence]]: Almost-everywhere convergence under a common integrable majorant implies convergence of the integrals.

[F8] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: Expectation on a probability space is integration against its probability measure.

## Proof

1.1 Fix a test pair $(x,y)$ outside the zero-margin set. For each class $c_j$, the variables $\mathbf1\{h(x,\Theta_b)=c_j\}$ are identically distributed because they use the same measurable map on randomizations with common law, independent by [F3], and integrable because they are bounded by $1$. Applying [F4] to each of the finitely many classes shows that every vote proportion converges almost surely to $p_j(x)$. [given, F2, F3, F4]

2.1 On a sequence where those proportions converge, if $m(x,y)>0$, the true class has a strictly larger limiting vote proportion than each wrong class, so the finite forest eventually predicts $y$. If $m(x,y)<0$, a wrong class attaining the finite maximum in the definition of $m$ has a strictly larger limiting proportion than $y$, so the finite forest eventually predicts a wrong class. Thus the finite-forest error indicator converges almost surely in the randomizations to $\mathbf1\{m(x,y)<0\}$ for $P$-almost every test pair. [given, F1, step 1.1, algebra]

3.1 The functions $p_j(x)$ are measurable by [F6] applied to the bounded jointly measurable indicators $\mathbf1\{h(x,\theta)=c_j\}$. Hence the error indicators and the limiting margin indicator are jointly measurable and bounded. Independence of the sequence-valued randomization and test pair lets [F5] give their product joint law. Applying [F6] to the indicator of the nonconvergence set and using step 2.1 shows that for almost every randomization sequence the error indicators converge for $P$-almost every test pair. [given, F5, F6, step 2.1]

4.1 For each such sequence, the error indicators are dominated by the integrable constant $1$ on the probability space $(\mathcal X\times\mathcal C,P)$. By [F7] their integrals converge to the integral of $\mathbf1\{m<0\}$, which by [F8] is $P\{m<0\}$. These integrals are exactly $PE_B(\Theta_{1:B})$, proving the claimed limit. [F7, F8, step 3.1, algebra] ∎
