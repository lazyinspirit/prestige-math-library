---
id: thm-restricted-anm-population-identification
kind: theorem
title: "Population identifiability and RESIT correctness for restricted ANMs"
status: draft
dependency_level: 4
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - def-additive-noise-model
  - def-restricted-additive-noise-model
  - lem-anm-joint-density
  - lem-anm-noise-independent-of-nondescendants
  - lem-anm-parent-dependence-persists-under-conditioning
  - lem-youngest-child-descendants-conditionally-independent
  - lem-positive-minimal-dags-have-a-conditioned-reversal
  - lem-probability-measure-has-no-nonzero-period
  - lem-smooth-residual-independence-has-pointwise-density-factorization
  - alg-resit
  - thm-bivariate-additive-noise-identifiability
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "The proof uses finite graph arguments, density factorizations, and the declared regression and bivariate interfaces; it requires no choice axiom."
sources:
  references:
    - title: "Jonas Peters, Joris Mooij, Dominik Janzing, and Bernhard Schölkopf, Causal Discovery with Continuous Additive Noise Models, Theorems 28/34 and Appendices A.11/A.15"
      url: "https://jmlr.org/papers/volume15/peters14a/peters14a.pdf"
    - title: "Jonas Peters, Dominik Janzing, and Bernhard Schölkopf, Elements of Causal Inference, §4.1.4 and §7.2"
      url: "https://web.math.ku.dk/~peters/jonas_files/ElementsOfCausalInference.pdf"
    - title: "K. Assaad, E. Devijver, and G. Gaussier, Causal discovery: noise-based methods, ENS Lyon course notes (2023), slides 29–35"
      url: "https://ckassaad.github.io/courses/courses_materials/ENSLyon_Causality/2023/CausalDiscoveryNoiseBased.pdf"
---

## Statement

Let a finite nonempty causally sufficient additive-noise model on a
DAG $G$ have a strictly positive joint density, be a restricted additive-noise
model, and be causally minimal. Then its observational law determines $G$
among all causally minimal restricted additive-noise models on the same
vertices.

For the population RESIT procedure, let $m_{j,C}:\mathbb R^C\to\mathbb R$ be
a supplied Borel regression rule and use an exact independence oracle and a
fixed total order for all ties and loops. Assume the rule is population
consistent on the model: whenever
$\operatorname{pa}(j)\subseteq C\subseteq\operatorname{nd}(j)$, there is a
constant $c_{j,C}$ such that
$$m_{j,C}(X_C)=f_j(X_{\operatorname{pa}(j)})+c_{j,C}\quad\text{almost surely}.$$
Assume in addition that every Phase 1 regression function $m_{j,C}$ is $C^3$
on its full predictor space. Then RESIT terminates without failure and returns
the DAG $G$. This is a population statement and makes no finite-sample claim.

## Statement references

[[def-additive-noise-model|Finite causally sufficient additive-noise models and edgewise causal minimality]]

[[def-restricted-additive-noise-model|Condition 19 and the restricted conditioning-set quantifier]]

[[alg-resit|The two-phase population RESIT procedure and its consistency interface]]

[[thm-bivariate-additive-noise-identifiability|No reverse bivariate ANM under Condition 19]]

## Facts & Assumptions

**Given:** The restricted causally minimal ANM, its positive joint density, a population-consistent regression rule with $C^3$ Phase 1 functions, and a perfect independence oracle.

[F1] Distinct positive-density causally minimal ANM DAGs admit a reversed edge $y\to l$ / $l\to y$ and an intermediate conditioning set $S$ lying between the other parents and nondescendants in both models, by a finite graph argument and a local density-factorization proof that uses no choice axiom. [[lem-positive-minimal-dags-have-a-conditioned-reversal]]

[F2] Each ANM noise is independent of every finite vector of its nondescendants. [[lem-anm-noise-independent-of-nondescendants]]

[F3] In a restricted model, every structural function and noise density is $C^3$ and strictly positive where required, and each edge/set pair has a positive finite conditioning witness whose bivariate slice satisfies Condition 19. [[def-restricted-additive-noise-model]]

[F4] The full ANM law has the positive product density; deleting a sink leaves the same product formula on the remaining vertices. [[lem-anm-joint-density]]

[F5] For a child $z$ of $y$ with no path from $z$ to another child of $y$, the descendants of $z$ are density-conditionally independent of $y$ given all other current vertices and $z$, including at every positive finite conditioning section. [[lem-youngest-child-descendants-conditionally-independent]]

[F6] If $R=Y-m(C)$ is independent of $C$, the joint density of $(Y,C)$ is strictly positive $C^3$, and $m$ is $C^3$, then continuous positive $C^3$ density versions factor as $p(y,c)=q_R(y-m(c))p_C(c)$ at every $(y,c)$. [[lem-smooth-residual-independence-has-pointwise-density-factorization]]

[F7] A probability measure on $\mathbb R$ cannot be invariant under a nonzero translation. [[lem-probability-measure-has-no-nonzero-period]]

[F8] A Condition 19 bivariate forward ANM has no reverse representation with independent residual and $C^3$ reverse structural function. [[thm-bivariate-additive-noise-identifiability]]

[F9] Every causal-minimal parent remains conditionally dependent after conditioning on any set between the other parents and the nondescendants. [[lem-anm-parent-dependence-persists-under-conditioning]]

[F10] RESIT selects residual-independent sinks, reverses their removal list, and prunes candidate edges by residual independence; population consistency identifies the structural regression on every parent-to-nondescendant predictor set. [[alg-resit]]

## Proof
**Given:** The hypotheses in the Statement.

1.1 Suppose another causally minimal restricted ANM on the same vertices gives the same observational law but has a different DAG $G'$. By [F1], there are vertices $y,l$ and a set $S$ such that $y\to l$ in $G$, $l\to y$ in $G'$, and $S$ contains the other parents of $l$ in $G$ and is contained in its nondescendants; also $S$ contains the other parents of $y$ in $G'$ and is contained in its nondescendants. [given, F1, contradiction]

1.2 Consider Phase 1 on a current vertex set $J$ obtained by deleting true sinks. A deleted sink cannot be a parent of a remaining vertex, so $J$ is parent-closed and its marginal law is the ANM product over $J$ by [F4]; consequently every original directed path between vertices still in $J$ stays in $J$. A finite DAG on nonempty $J$ has a sink $j$. Every other current vertex is a nondescendant of $j$ in the original graph: if one were a descendant, its path from $j$ would remain in the parent-closed current graph, contradicting that $j$ is a sink there. Thus for $C=J\setminus\{j\}$, $\operatorname{pa}(j)\subseteq C\subseteq\operatorname{nd}(j)$. [F4, F10, construct]

2.1 Both models in step 1.1 are restricted ANMs. By [F3] their structural functions and noise densities are $C^3$, so the product density versions supplied by [F4] are $C^3$. Since the models have the same observational law, these continuous densities agree almost everywhere and hence everywhere; denote their common pointwise version by $p$. Define the marginal versions needed below by iterated integration of this same $p$, and define conditional-density versions at each finite positive value of $p_{X_S}$ by the corresponding ratios. Apply the restricted-model definition in $G$ to the edge $y\to l$ and this exact set $S$. It supplies $s$ with $0<p_{X_S}(s)<\infty$ such that the pair $Y^*=X_y\mid X_S=s$, $L^*=X_l\mid X_S=s$, using these common density versions, is a smooth bivariate ANM satisfying Condition 19. In particular, the definition gives the forward equation $L^*=f_l(s_{\operatorname{pa}(l)\setminus\{y\}},Y^*)+N_l$ with $N_l$ independent of $Y^*$. [F2, F3, F4, step 1.1, construct]

2.2 Population consistency gives $m_{j,C}(X_C)=f_j(X_{\operatorname{pa}(j)})+c_{j,C}$ almost surely, so the tested residual is $N_j-c_{j,C}$. By [F2] it is independent of $X_C$, and the perfect oracle accepts $j$. Hence every iteration has at least one accepted candidate and cannot return failure. [F2, F10, step 1.2, algebra]

3.1 In $G'$, the reverse edge is $l\to y$ and $S$ contains all other parents of $y$. Since $S\cup\{l\}\subseteq\operatorname{nd}_{G'}(y)$, [F2] gives $N'_y$ independent of $(X_l,X_S)$. Let $q_{N'_y}$ be its density and choose the product density version
$$p_{N'_y,X_l,X_S}(n,l,s):=q_{N'_y}(n)p_{X_l,X_S}(l,s),$$
using the common marginal version fixed in step 2.1. Because $0<p_{X_S}(s)<\infty$, dividing this version by $p_{X_S}(s)$ shows that, conditional on $X_S=s$, $N'_y$ and $X_l$ are independent. The reverse structural equation at that section is
$$Y^*=g_y(s_{\operatorname{pa}_{G'}(y)\setminus\{l\}},L^*)+N'_y,$$
and its structural slice is $C^3$ by [F3]. In the $G'$ product-density formula, the factor for $X_y$ depends only on $y,l,s$, because all other parents of $y$ lie in $S$; integrating the remaining coordinates by the same iterated-integral convention in step 2.1 gives the common section density
$$p_{X_y,X_l,X_S}(y,l,s)=q_{N'_y}\!\left(y-g_y(s_{\operatorname{pa}_{G'}(y)\setminus\{l\}},l)\right)p_{X_l,X_S}(l,s).$$
Thus the reverse conditional pair at this exact $s$ is formed from the same density $p_{X_y,X_l,X_S}(\cdot,\cdot,s)/p_{X_S}(s)$ as the forward pair in step 2.1. They have the same law, and this is a reverse representation forbidden by [F8], proving population graph identifiability. [F2, F3, F4, F8, step 1.1, step 2.1, contradiction]

3.2 Now suppose a candidate $y\in J$ is not a sink. By the current-set invariant in step 1.2, choose a child $z$ of $y$ in $G[J]$ with no directed path to any other child of $y$ in $G[J]$; finiteness and acyclicity give such a child. Let $D$ be the strict descendants of $z$ in $G[J]$ and put $T=J\setminus(D\cup\{y,z\})$. Every parent of $z$ other than $y$ lies in $T$, and $T\subseteq\operatorname{nd}(z)\setminus\{y,z\}$ in the original graph as well as in $G[J]$. The restricted condition for edge $y\to z$ and set $T$ supplies $t$ with $0<p_{X_T}(t)<\infty$ at which the conditional bivariate forward model of $Z^*=X_z\mid X_T=t$ from $Y^*=X_y\mid X_T=t$ satisfies Condition 19. [given, F3, step 1.2, step 2.2, choose, construct]

4.1 The predictor set tested for $y$ is $C=J\setminus\{y\}=T\cup\{z\}\cup D$. Suppose the oracle accepts it, and set $R_y=X_y-m_{y,C}(X_C)$. Then $R_y$ is independent of $X_C$. The current joint density is positive $C^3$ by [F3]–[F4], and $m_{y,C}$ is $C^3$ by hypothesis, so [F6] gives a pointwise density version $p_{X_y,X_C}(u,c)=q_{R_y}(u-m_{y,C}(c))p_{X_C}(c).$ By [F5], at the exact witness $t$, for almost every $(z,d)$ the conditional density of $Y^*$ given $(Z^*=z,X_D=d,X_T=t)$ does not depend on $d$. Combining this with the pointwise factorization above shows that the probability laws of $R_y+m_{y,C}(t,z,d)$ and $R_y+m_{y,C}(t,z,d')$ are equal for almost every $z,d,d'$. [F3, F4, F5, F6, step 3.2, algebra]

5.1 If $D\ne\varnothing$, [F7] forces $m_{y,C}(t,z,d)=m_{y,C}(t,z,d')$ for almost every $(z,d,d')$. Fubini supplies a fixed $d_0$ for which $m_{y,C}(t,z,d)=m_{y,C}(t,z,d_0)$ for almost every $(z,d)$. Define $g_t(z)=m_{y,C}(t,z,d_0)$; this is $C^3$ by the Phase 1 smoothness hypothesis. If $D=\varnothing$, define $g_t(z)=m_{y,C}(t,z)$, which is also $C^3$. In either case the accepted residual equation yields $Y^*=g_t(Z^*)+R_y$ almost surely. The pointwise factorization [F6], restricted to $X_T=t$ and integrated over $X_D$, shows that $R_y$ is independent of $Z^*$ in this conditional law. This is a reverse representation of the Condition 19 pair from step 3.2, contradicting [F8]. Therefore no nonsink candidate is accepted. [F6, F7, F8, step 3.2, step 4.1, F10, construct, contradiction]

6.1 Phase 1 therefore removes only true sinks. Reversing their removal order gives a topological order: for every edge $i\to j$, $j$ must be removed before $i$ while both remain, so $i$ precedes $j$ in the reversed list. The provisional parent set of each vertex is exactly the set of vertices preceding it in that order. [F10, step 2.2, step 5.1, construct]

7.1 Fix a vertex $j$ and consider its candidate parents in the fixed loop order. We prove by induction through that list that no true parent is deleted. At a true-parent candidate $\ell$, all other true parents are still present: they were either untested or retained by the induction hypothesis. The current set $C$ contains them and is contained in the preceding vertices, hence in $\operatorname{nd}(j)\setminus\{\ell\}$. If the oracle accepted deletion, the residual $U=X_j-m_{j,C}(X_C)$ would be independent of the full preceding vector, in particular of $(X_\ell,X_C)$. Since $X_j=m_{j,C}(X_C)+U$, its conditional law given $(X_\ell,X_C)$ would not depend on $X_\ell$, yielding $X_j\perp_d X_\ell\mid X_C$. This contradicts [F9]. Thus every true parent is retained. [F9, F10, step 6.1, induction, contradiction]

8.1 If the tested candidate $\ell$ is not a true parent, step 7.1 ensures that every true parent remains in the predictor set $C$ after deleting $\ell$. This set is contained in $\operatorname{nd}(j)$, so [F10] makes the residual $N_j$ minus a constant; [F2] makes it independent of all vertices preceding $j$. The oracle accepts and the algorithm deletes this superfluous edge. [F2, F10, step 6.1, step 7.1, algebra]

9.1 Steps 7.1 and 8.1 show that pruning removes exactly the superfluous preceding vertices and retains every parent. Each returned parent set is therefore the true parent set, so RESIT returns $G$. [step 7.1, step 8.1, F10] ∎
## References

[Peters et al., JMLR (2014), Theorems 28/34 and Appendices A.11/A.15](https://jmlr.org/papers/volume15/peters14a/peters14a.pdf)

[Peters, Janzing, and Schölkopf, Elements of Causal Inference, §4.1.4 and §7.2](https://web.math.ku.dk/~peters/jonas_files/ElementsOfCausalInference.pdf)

[Assaad, Devijver, and Gaussier, course notes (2023), slides 29–35](https://ckassaad.github.io/courses/courses_materials/ENSLyon_Causality/2023/CausalDiscoveryNoiseBased.pdf)

