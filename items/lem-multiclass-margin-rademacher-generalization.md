---
id: lem-multiclass-margin-rademacher-generalization
kind: lemma
title: "Uniform margin-risk deviation from empirical Rademacher complexity"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-multiclass-margin-ramp-loss
  - def-spectral-network-complexity
  - def-rademacher-complexity
  - def-identically-distributed-and-iid-random-variables
  - def-probability-measure
  - def-axiom-of-choice
  - thm-heine-borel-rn
  - lem-q-and-irrationals-dense-r
  - thm-mcdiarmid-bounded-differences
  - thm-dominated-convergence
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-independent-random-elements-have-product-joint-law
  - thm-change-of-variables-for-expectation
  - lem-probability-measure-basic-identities
  - def-natural-logarithm
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Peter L. Bartlett, Dylan J. Foster, and Matus Telgarsky, Spectrally-normalized margin bounds for neural networks, Appendix A.2"
      url: "https://arxiv.org/pdf/1706.08498"
    - title: "Mehryar Mohri, Foundations of Machine Learning, Lecture 3, pp. 4–9"
      url: "https://www.cs.nyu.edu/~mohri/mls/lecture_3.pdf"
---

## Statement

Assume the axiom of choice.

Fix a finite network architecture with $L\ge1$, widths $d_0,\ldots,d_L\ge1$, output size $K=d_L\ge2$, and activations as in the spectral-network-complexity definition. Let $s_i>0$, $b_i\ge0$, and reference matrices $M_i$ be such that the class
$$\mathcal F:=\{F_A:\lVert A_i\rVert_\sigma\le s_i,\ \lVert A_i^\top-M_i^\top\rVert_{2,1}\le b_i\text{ for every }i\}$$
is nonempty. Let $D$ be any Borel probability measure on $\mathbb R^{d_0}\times\{1,\ldots,K\}$, let $S=((x_1,y_1),\ldots,(x_n,y_n))$ be an independent identically distributed sample from $D$ with $n\ge1$, and fix $\gamma>0$ and $0<\delta<1$. Define the ramp-loss class
$$\mathcal L_\gamma:=\{(x,y)\mapsto\ell_\gamma(-m_F(x,y)):F\in\mathcal F\}.$$
With probability at least $1-\delta$ over $S$, every $F\in\mathcal F$ satisfies
$$L_0(F)\le\widehat L_{\gamma,S}(F)+2\widehat{\mathfrak R}_S(\mathcal L_\gamma)+3\sqrt{\frac{\log(2/\delta)}{2n}},$$
where $\widehat{\mathfrak R}_S$ is the one-sided empirical Rademacher complexity with $1/n$ normalization.

## Statement references

[[def-multiclass-margin-ramp-loss]]: defines multiclass margin, ramp risk, zero-one risk, and empirical margin loss.

[[def-spectral-network-complexity]]: fixes the network family and the layer constraints used to form $\mathcal F$.

[[def-rademacher-complexity]]: fixes the one-sided empirical Rademacher convention and normalization.

## Facts & Assumptions

**Given:** The compactly constrained network class, Borel probability measure, iid sample, fixed margin level, confidence parameter, and ramp-loss class in the Statement.

[F1] Scores are formed by finite matrix layers and zero-origin Lipschitz activations; the margin is the finite minimum $m_F(x,y)=\min_{j\ne y}(F(x)_y-F(x)_j)$, and the ramp loss takes values in $[0,1]$. [[def-spectral-network-complexity]] [[def-multiclass-margin-ramp-loss]]

[F2] Closed bounded subsets of finite-dimensional real Euclidean space are compact. [[thm-heine-borel-rn]]

[F3] For bounded pointwise-convergent measurable functions, dominated convergence passes the limit through the probability integral. [[thm-dominated-convergence]]

[F4] Independent random elements have the product joint law, and change of variables transfers integrable product-law functions to expectations; these facts justify the independent ghost sample, pairwise swaps, and expectation identities. [[def-identically-distributed-and-iid-random-variables]] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]] [[thm-independent-random-elements-have-product-joint-law]] [[thm-change-of-variables-for-expectation]]

[F5] The axiom of choice permits choosing one point from every nonempty member of a countable family of sets. [[def-axiom-of-choice]]

[F6] If changing one independent coordinate changes a bounded measurable statistic by at most $1/n$, McDiarmid's inequality bounds each of its upper and lower tails by $\exp(-2nt^2)$; the lower-tail bound follows by applying the upper-tail bound to the negative statistic. [[thm-mcdiarmid-bounded-differences]]

[F7] The empirical Rademacher complexity is the expectation over independent uniform signs of the supremum of the normalized signed sample averages. [[def-rademacher-complexity]]

[F8] The logarithm is increasing and $\log(xy)=\log x+\log y$. [[def-natural-logarithm]] [[thm-natural-logarithm-laws]]

[F9] The rationals are dense in the reals: every nonempty open real interval contains a rational. [[lem-q-and-irrationals-dense-r]]

## Proof
1.1 Let $\Theta$ be the set of all feasible tuples $(A_1,\ldots,A_L)$. The mixed-norm constraints are closed because each is a finite sum of continuous Euclidean column norms. For each layer, $\lVert A_i\rVert_\sigma\le s_i$ is the intersection, over all unit vectors $v$, of the closed conditions $\lVert A_iv\rVert_2\le s_i$, by the induced-operator-norm definition. Each column $A_ie_j$ then has norm at most $s_i$, so all matrix entries are bounded. Hence $\Theta$ is closed and bounded in finite-dimensional Euclidean space and is compact by [F2]. [F1, F2, given, algebra]

2.1 For fixed $x$, induction over the layers shows that the score vector depends continuously on the matrix tuple: matrix multiplication is jointly continuous and each Lipschitz activation is continuous. Finite maxima, coordinate differences, and the ramp preserve continuity, so for fixed $(x,y)$ the loss $A\mapsto\ell_\gamma(-m_{F_A}(x,y))$ is continuous. If $A^{(r)}\to A$, these losses converge pointwise in $(x,y)$ and are bounded by one, so [F3] shows that $A\mapsto R_\gamma(F_A)$ is continuous. Each empirical loss and each finite signed sum of losses is also continuous in $A$. [F1, F3, step 1.1, given]

3.1 Identify the parameter tuples with $\mathbb R^p$, where $p:=\sum_{i=1}^L d_i d_{i-1}$. The balls $B(q,r)$ with $q\in\mathbb Q^p$ and $r\in\mathbb Q_{>0}$ form a countable family: each rational is a quotient of an integer by a positive integer, the integers have the enumeration $0,1,-1,2,-2,\ldots$, and finite tuples of natural numbers are enumerated by iterating the diagonal pairing $\pi(a,b):=(a+b)(a+b+1)/2+b$. They form a base because for any open $O\subseteq\mathbb R^p$ and $x\in O$, choose $\eta>0$ with $B(x,\eta)\subseteq O$, then use [F9] in each coordinate interval $(x_j-\eta/(4\sqrt p),x_j+\eta/(4\sqrt p))$ to choose $q\in\mathbb Q^p$ with $\lVert q-x\rVert_2<\eta/4$. Use [F9] again to choose a rational $r$ with $\lVert q-x\rVert_2<r<\eta-\lVert q-x\rVert_2$ (a nonempty interval with positive upper endpoint); then $x\in B(q,r)\subseteq B(x,\eta)\subseteq O$. Intersecting these balls with $\Theta$ gives a countable base for its subspace topology. Using [F5], choose one point of $\Theta$ from each nonempty basic intersection; the selected countable subset is dense in $\Theta$. By step 2.1, each supremum over $\Theta$ defining the uniform deviation or a signed empirical supremum equals the supremum over this countable dense subset. The losses are Borel in $(x,y)$ because the scores are continuous in $x$, the margin is a finite minimum of continuous score-coordinate differences, and the label set is finite. These countable suprema are therefore measurable. [F1, F5, F9, step 1.1, step 2.1, given]

4.1 Write $Z(S):=\sup_{F\in\mathcal F}(R_\gamma(F)-\widehat R_{\gamma,S}(F))$. Let $S'$ be an independent ghost sample from $D$. By the integral identities in [F4] and the inequality $\sup_F\mathbb E_{S'}U_F\le\mathbb E_{S'}\sup_F U_F$, $\mathbb E Z(S)\le\mathbb E_{S,S'}\sup_{F\in\mathcal F}\frac1n\sum_{i=1}^n\bigl(\ell_F(x_i',y_i')-\ell_F(x_i,y_i)\bigr),$ where $\ell_F(x,y)=\ell_\gamma(-m_F(x,y))$. Swapping each iid pair $(z_i,z_i')$ leaves its law unchanged; introducing independent uniform signs $\varepsilon_i$ therefore leaves this expectation unchanged when each difference is multiplied by $\varepsilon_i$. The supremum of a sum is at most the sum of the suprema, and symmetry of the signs gives $\mathbb E Z(S)\le2\mathbb E_S\widehat{\mathfrak R}_S(\mathcal L_\gamma)$. [F4, F7, step 3.1, given, algebra]

5.1 Replacing one sample coordinate changes $Z(S)$ by at most $1/n$, since every loss lies in $[0,1]$; it also changes $\widehat{\mathfrak R}_S(\mathcal L_\gamma)$ by at most $1/n$, by [F7] and the same range bound. Apply the upper-tail bound [F6] to $Z$ and to $-\widehat{\mathfrak R}_S(\mathcal L_\gamma)$, each with failure probability $\delta/2$ and $t=\sqrt{\log(2/\delta)/(2n)}$. Outside a set of probability at most $\delta$, both $Z(S)\le\mathbb EZ(S)+t$ and $\mathbb E\widehat{\mathfrak R}_S(\mathcal L_\gamma)\le\widehat{\mathfrak R}_S(\mathcal L_\gamma)+t$. Combining with step 4.1 gives $Z(S)\le\mathbb EZ(S)+t\le2\mathbb E\widehat{\mathfrak R}_S(\mathcal L_\gamma)+t\le2\widehat{\mathfrak R}_S(\mathcal L_\gamma)+3t$. [F6, F7, F8, step 4.1, given, algebra]

6.1 If the predicted label differs from $y$, some competing score is at least the true-label score, so $m_F(x,y)\le0$ and $\ell_\gamma(-m_F(x,y))=1$. Hence the zero-one loss is pointwise at most the ramp loss. Also $\ell_\gamma(-m)\le\mathbf1\{m\le\gamma\}$ for every real $m$, so empirical ramp risk is at most empirical margin loss. Apply the definition of $Z(S)$ and step 5.1 to conclude the stated bound for every $F\in\mathcal F$ simultaneously. [F1, step 5.1, given, algebra] ∎

## Sources

[Bartlett, Foster, and Telgarsky, *Spectrally-normalized margin bounds for neural networks*, Appendix A.2](https://arxiv.org/pdf/1706.08498).

[Mohri, *Foundations of Machine Learning*, Lecture 3, pp. 4–9](https://www.cs.nyu.edu/~mohri/mls/lecture_3.pdf).
