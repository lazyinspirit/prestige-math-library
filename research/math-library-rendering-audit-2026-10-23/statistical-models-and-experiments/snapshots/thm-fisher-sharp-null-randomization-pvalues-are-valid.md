---
id: thm-fisher-sharp-null-randomization-pvalues-are-valid
kind: theorem
title: "Fisher sharp-null randomization p-values are valid"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-finite-randomized-treatment-assignment-model
  - def-fisher-sharp-null-and-predeclared-test-orderings
  - lem-finite-weighted-upper-tail-pvalues-and-randomized-ties
  - def-statistic-and-estimator
  - def-p-value
  - def-finite-population-average-treatment-effect-and-weak-null
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 2, §2.4"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
    - title: "Siva Balakrishnan, CMU 36-705 Lecture 28, §28.5 Fisher's Exact p-values"
      url: "https://www.stat.cmu.edu/~siva/teaching/705/lec28.pdf"
---

## Statement

In a finite randomized treatment-assignment model, fix any real-valued
predeclared ordering score $T(z,y)$. For observed data $(z,y)$ define
$$p_{\rm rand}(z,y):=\sum_{z'\in\mathcal Z}p(z')1\{T(z',y)\ge T(z,y)\}.$$
Let $\lambda$ be the uniform probability measure on the Borel subsets of
$[0,1]$. For each $\theta$, equip $\mathcal X\times[0,1]$ with the product
sigma-algebra $2^{\mathcal X}\otimes\mathcal B([0,1])$ and define
$$\widetilde P_\theta(E):=\sum_{z\in\mathcal Z}p(z)\,\lambda\bigl(\{u\in[0,1]:((z,Y_\theta(z)),u)\in E\}\bigr).$$
Let $U$ be the $[0,1]$ coordinate on this extension. Define
$$p^+(z,y,U):=\sum_{z'\in\mathcal Z}p(z')1\{T(z',y)>T(z,y)\}+U\sum_{z'\in\mathcal Z}p(z')1\{T(z',y)=T(z,y)\}.$$
For every schedule satisfying the Fisher sharp null and every
$u\in[0,1]$,
$$P_\theta\!\left(p_{\rm rand}(Z,Y_\theta(Z))\le u\right)\le u,$$
whereas the added randomization gives
$$\widetilde P_\theta\!\left(p^+(Z,Y_\theta(Z),U)\le u\right)=u.$$
Thus $p_{\rm rand}$ is a valid finite-sample p-value for the sharp null,
and randomized ties give an exactly uniform p-value when the additional
independent uniform randomizer is used. For a two-sided test, take
$T(z,y)=|S(z,y)-s_0|$ with its center $s_0$ fixed in advance. The result
uses the actual, possibly unequal assignment probabilities; random
assignment supplies no Gaussian error law, and this theorem makes no
validity claim under the weak zero-average-effect null from
[[def-finite-population-average-treatment-effect-and-weak-null]] unless it
is also Fisher-sharp.

## Facts & Assumptions

**Given:** A finite assignment set with its known probability law, a fixed potential-outcome schedule satisfying the Fisher sharp null, a predeclared real-valued score on assignment and response data, and the uniform probability measure $\lambda$ on $[0,1]$.

[F1] [[def-finite-randomized-treatment-assignment-model]]: the units and potential-outcome schedule are fixed, $Z$ has the finite assignment law $p$, and the observed response vector is $Y_\theta(Z)$.

[F2] [[def-fisher-sharp-null-and-predeclared-test-orderings]]: under the Fisher sharp null there is one vector $y$ with $Y_i(z)=y_i$ for every unit and assignment; the ordering score is fixed before assignment and outcome inspection.

[F3] [[lem-finite-weighted-upper-tail-pvalues-and-randomized-ties]]: for any finite weighted assignment law and real score, the inclusive weighted upper-tail rank is superuniform, and an independent uniform variable fills each score atom to give an exactly uniform value.

[F4] [[def-p-value]]: a p-value statistic is valid for a null when its probability of being at most $u$ is at most $u$ for every null law and every $u\in[0,1]$.

[F5] [[def-statistic-and-estimator]]: a statistic is a measurable map from the experiment's data space to its stated target measurable space.

[F6] [[def-finite-population-average-treatment-effect-and-weak-null]]: in the no-interference binary-treatment submodel, the weak null requires only the finite-population average of unit effects to be zero; the sharp null requires every unit effect to be zero.

[A1] The measure $\lambda$ is uniform, so $\lambda([0,u])=u$ for $u\in[0,1]$.

## Proof

**Proof technique:** reduce each sharp-null schedule to the finite weighted rank lemma.

1.1 The schedule with $Y_i(z)=0$ for every unit and assignment belongs to the Fisher sharp null, so its null class is nonempty as required by [F4]. Fix any sharp-null schedule $\theta$ and choose its common response vector $y$ by [F2]. For every realized assignment $Z$, the observed vector $Y_\theta(Z)$ equals $y$, and every assignment score $T(z,y)$ is therefore imputable. [given, F1, F2, F4, construct, choose]

1.2 For each product-measurable $E$, its section $E_x:=\{u:(x,u)\in E\}$ is Borel, since the sets with Borel sections form a sigma-algebra containing all measurable rectangles. Thus the displayed finite sum defines a measure: for disjoint $E_n$, each section $(\bigcup_n E_n)_{O_\theta(z)}$ is the disjoint union of the sections $(E_n)_{O_\theta(z)}$, and countable additivity of $\lambda$ passes through the finite weighted sum. Its total mass is $\sum_zp(z)\lambda([0,1])=1$. Moreover, for $A\subseteq\mathcal X$ and Borel $B\subseteq[0,1]$, $$\widetilde P_\theta(A\times B)=\sum_{z:O_\theta(z)\in A}p(z)\lambda(B)=P_\theta(A)\lambda(B).$$ Hence the data coordinate has law $P_\theta$, $U$ is uniform and independent of the data, and therefore $U$ is independent of $Z$. [F1, A1, given, construct, algebra]

2.1 The formula $p_{\rm rand}(z,y)$ is a finite sum of selected nonnegative assignment weights, so it lies in $[0,1]$. It is a statistic because the data space has its full power-set sigma-algebra, so every preimage is measurable by [F5]. On the extension, each score-comparison condition defines a measurable subset of the data space, while $U$ is measurable; hence the finite formula for $p^+$ is measurable. Its value lies between zero and the total assignment mass one. [F1, F5, step 1.1, step 1.2, algebra]

3.1 On this fixed schedule set $T_y(z)=T(z,y)$. Substituting $Y_\theta(Z)=y$ from step 1.1 into the two displayed formulas identifies $p_{\rm rand}(Z,Y_\theta(Z))$ and $p^+(Z,Y_\theta(Z),U)$ with the two finite weighted rank transforms of [F3] on $(\mathcal Z,p)$. By steps 1.2 and 2.1, $U$ is independent of $Z$ and uniform, so the tie-randomized transform also satisfies [F3]. Hence $P_\theta(p_{\rm rand}(Z,Y_\theta(Z))\le u)\le u$ and $\widetilde P_\theta(p^+(Z,Y_\theta(Z),U)\le u)=u$ for every $u\in[0,1]$. [F3, step 1.1, step 1.2, step 2.1]

4.1 Since the bound holds for every schedule in the sharp null, [F4] makes $p_{\rm rand}$ a valid p-value for that null. The randomized value is uniform under each extended law $\widetilde P_\theta$, and therefore is also superuniform there; its threshold rule has null rejection probability at most its threshold. No step uses an error distribution. By [F2] and [F6], the argument covers a weak average-effect schedule only when it also satisfies the sharp null. [F2, F4, F6, step 3.1, algebra] ∎
