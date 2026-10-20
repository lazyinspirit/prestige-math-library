---
id: lem-anm-parent-dependence-persists-under-conditioning
kind: lemma
title: "Parent dependence persists under nondescendant conditioning"
status: draft
dependency_level: 2
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - def-additive-noise-model
  - lem-anm-joint-density
  - def-countable-choice
  - lem-anm-noise-independent-of-nondescendants
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonas Peters, Joris Mooij, Dominik Janzing, and Bernhard Schölkopf, Causal Discovery with Continuous Additive Noise Models, Appendix A.10, Lemma 38 and Proposition 17"
      url: "https://jmlr.org/papers/volume15/peters14a/peters14a.pdf"
    - title: "Jonas Peters, Dominik Janzing, and Bernhard Schölkopf, Elements of Causal Inference, §4.1.4 and §7.2"
      url: "https://web.math.ku.dk/~peters/jonas_files/ElementsOfCausalInference.pdf"
---

## Statement

Assume Countable Choice, or suppose the specified noise densities are Borel measurable.
Let $X$ follow a finite additive-noise model with a strictly positive joint
density and continuous structural functions that are causally minimal in each
parent coordinate. For positive joint densities, write
$Y\perp_d A\mid Z$ when the conditional-density factorization
$$p_{Y,A,Z}(y,a,z)p_Z(z)=p_{Y,Z}(y,z)p_{A,Z}(a,z)$$
holds almost everywhere. For every edge $i\to j$ and every set $S$ such that
$$\operatorname{pa}(j)\setminus\{i\}\subseteq S\subseteq\operatorname{nd}(j)\setminus\{i\},$$
the density conditional-independence factorization
$X_j\perp_d X_i\mid X_S$ fails.

## Statement references

[[def-countable-choice|Countable Choice only when Borel density versions are not supplied]]

[[def-additive-noise-model|Causal minimality and finite additive-noise equations]]

[[lem-anm-joint-density|Positive joint density and conditional-density versions]]

[[lem-anm-noise-independent-of-nondescendants|Noise independence from nondescendants]]

## Facts & Assumptions

**Given:** A finite ANM with positive joint density, continuous parent-coordinate functions, and causal minimality.

[F1] Every parent input is essential: for each edge $i\to j$, $f_j$ is nonconstant in the $i$-coordinate for some setting of the other parents; noises are independent and have positive densities. [[def-additive-noise-model]]

[F2] For Borel noise densities (supplied, or chosen under Countable Choice without changing the laws), the joint density is the positive Borel product $p_X(x)=\prod_k q_k(x_k-f_k(x_{\operatorname{pa}(k)}))$. Marginal densities are obtained by integrating this formula, and a conditional density at a positive finite marginal-density value is the corresponding ratio. [[lem-anm-joint-density]]

[F3] For every vertex $j$, $N_j$ is independent of any vector of nondescendants. [[lem-anm-noise-independent-of-nondescendants]]

## Proof
**Given:** Fix an edge $i\to j$ and a set $S$ in the range in the Statement. Put $P=\operatorname{pa}(j)\setminus\{i\}$ and $Q=S\setminus P$.

1.1 Use the supplied Borel noise densities, or their positive finite Borel versions from [F2] under Countable Choice. Work with their Borel shifted-noise product and its integrated marginals; changing density versions does not change an almost-everywhere conditional-independence factorization. Every variable in $\{i\}\cup P\cup Q$ is a nondescendant of $j$. By [F3], $N_j$ is independent of the vector $(X_i,X_P,X_Q)$. Conditional on $(X_i=x,X_P=p,X_Q=q)$, the structural equation therefore gives the density $p_{X_j\mid X_i,X_P,X_Q}(y\mid x,p,q)=q_j(y-f_j(p,x))$ for almost every $(x,p,q,y)$. This density does not depend on $q$, so the joint conditional density of $(X_j,X_Q)$ given $(X_i,X_P)$ factors; hence $X_j\perp_d X_Q\mid(X_i,X_P)$. [given, F1, F2, F3]

1.2 Suppose, for contradiction, that $X_j\perp_d X_i\mid X_P$. Since $N_j$ is independent of the parent vector $(X_i,X_P)$, its conditional density is $q_j(y-f_j(p,x))$. The assumed factorization says this density is independent of $x$ for almost every $p$ and almost every $x$. The conditional density of $X_i$ given $X_P=p$ is positive for almost every $x$ at almost every $p$ with $0<p_P(p)<\infty$, because the full joint density is strictly positive. Therefore, for almost every such $p$, for almost every pair $x,x'$, the two translates $q_j(y-f_j(p,x))$ and $q_j(y-f_j(p,x'))$ agree for almost every $y$. [given, F1, F2, F3, algebra]

2.1 A positive integrable density cannot have a nonzero period: if $q_j(y-a)=q_j(y-b)$ almost everywhere with $a\ne b$, then $q_j$ repeats on every translate of an interval of length $|a-b|$; that interval has positive integral, so the integral over the disjoint translates is infinite, contradicting $\int q_j=1$. Thus step 1.2 forces $f_j(p,x)=f_j(p,x')$ for almost every pair $x,x'$ and almost every $p$. Continuity of $f_j$ extends this constancy to every setting of the other parent coordinates: any two unequal values would persist on open neighborhoods of positive Lebesgue measure. This contradicts [F1], so $X_j\not\perp_d X_i\mid X_P$. [step 1.2, F1, F2, algebra]

3.1 If $Q$ is empty, $S=P$ and step 2.1 is the required conclusion. Otherwise, suppose $X_j\perp_d X_i\mid X_{P,Q}$. By the conditional-density equality in step 1.1 and this supposition, for almost every $(p,y)$ one has $p_{X_j\mid X_i=x,X_P=p}(y)=p_{X_j\mid X_P=p,X_Q=q}(y)$ for almost every pair $(x,q)$. The left side depends only on $x$ and the right side only on $q$; by Fubini, each is therefore almost everywhere constant in its varying coordinate. Hence $X_j\perp_d X_i\mid X_P$, contradicting step 2.1. Thus the factorization given $X_S$ fails. [step 1.1, step 2.1, F2, algebra] ∎
## References

[Peters et al., JMLR (2014), Appendix A.10, Proposition 17 and Lemma 38](https://jmlr.org/papers/volume15/peters14a/peters14a.pdf)

[Peters, Janzing, and Schölkopf, Elements of Causal Inference, §4.1.4](https://web.math.ku.dk/~peters/jonas_files/ElementsOfCausalInference.pdf)
