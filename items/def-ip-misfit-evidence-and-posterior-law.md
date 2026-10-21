---
id: def-ip-misfit-evidence-and-posterior-law
kind: definition
title: Misfit evidence and the potential posterior law
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-prior-on-a-forward-domain
  - def-measurable-space
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-extended-reals
  - def-borel-sigma-algebra-on-the-extended-real-line
  - def-measurable-function-between-measurable-spaces
  - thm-sections-of-product-measurable-functions-are-measurable
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-exponential-is-strictly-increasing
  - thm-exponential-limits-and-range
  - thm-continuous-preimages-of-borel-sets-are-borel
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-measure-kernel-and-probability-kernel
  - def-finite-sigma-finite-and-semifinite-measures
  - def-posterior-evidence-normalizer-and-fiberwise-update
  - prop-fiberwise-posterior-propriety-iff-finite-positive-evidence
  - thm-bayes-formula-for-dominated-kernels
  - def-bayesian-posterior-as-regular-conditional-law
  - def-conditional-law-given-a-random-element
  - def-standard-borel-space
  - def-axiom-of-choice
  - thm-standard-borel-bayesian-posterior-kernel-exists
justified_by: []
forward_refs: []
axiom_use: "The fixed-data potential update and the dominated-density construction are choice-free. The separate existence branch for a posterior kernel on standard-Borel parameter and data spaces assumes the Axiom of Choice."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "M. Dashti and A. M. Stuart, The Bayesian Approach to Inverse Problems (full lecture notes, arXiv:1302.6989)"
      url: "https://arxiv.org/pdf/1302.6989"
      locator: "§3.2, Theorem 3.4 and proof for the potential-density posterior formula and its almost-sure data version; §4.1, Theorem 4.3 and proof for evidence propriety under its stated assumptions. The local support-neighborhood argument is proved independently."
    - title: "J. Latz, On the Well-posedness of Bayesian Inverse Problems, SIAM/ASA Journal on Uncertainty Quantification 8 (2020)"
      url: "https://arxiv.org/pdf/1902.10257"
      locator: "§2.2, Theorem 2.5; proof in Appendix B, 'Proof of Theorem 2.5' (printed pp. 23–24), especially equations (B.2)–(B.3); §2.3, degenerate zero-evidence fibers."
---

## Definition

Let $X$ be a separable real Banach space with its norm topology, $D\subseteq X$ a Borel forward-map domain, and $\mu_0$ a Borel probability measure on $X$ with $\mu_0(D)=1$. Write $\mu_{0,D}$ for its restriction to $D$, so $\mu_{0,D}(A)=\mu_0(A)$ for $A\in\mathcal B(D):=\{D\cap B:B\in\mathcal B(X)\}$. Let $(\mathsf Y,\mathcal Y)$ be a measurable data space. A likelihood potential is a function $\Phi:D\times\mathsf Y\to(-\infty,+\infty]$ that is measurable from $\bigl(D\times\mathsf Y,\mathcal B(D)\otimes\mathcal Y\bigr)$ to $\bigl((-\infty,+\infty],\mathcal B((-\infty,+\infty])\bigr)$, where $\mathcal B((-\infty,+\infty])$ is the trace of $\mathcal B(\overline{\mathbb R})$ on $(-\infty,+\infty]$. Viewing $\Phi$ via the inclusion $(-\infty,+\infty]\hookrightarrow\overline{\mathbb R}$, it is also product-measurable as an extended-real-valued map because for every Borel set $B\subseteq\overline{\mathbb R}$, $\Phi^{-1}(B)=\Phi^{-1}(B\cap(-\infty,+\infty])$ is measurable by the definition of the trace sigma-algebra. Here $+\infty$ is allowed and $-\infty$ is excluded; set $e^{-\infty}=0$. The scalar map $t\mapsto e^{-t}$ on this range is continuous at finite $t$, and is continuous at $+\infty$: given $\varepsilon>0$, the limit supplies $a\in\mathbb R$ such that $t>a$ implies $e^{-t}<\varepsilon$, and the order-topology neighborhood $(a,+\infty]$ maps into $[0,\varepsilon)$. Hence it is Borel, so $L_\Phi:D\times\mathsf Y\to[0,+\infty)$, $L_\Phi(u;y):=e^{-\Phi(u;y)}$, is product-measurable by composition, and each section $u\mapsto L_\Phi(u;y)$ is nonnegative and measurable. Define its evidence by
$$
Z_\Phi(y):=\int_D L_\Phi(u;y)\,\mu_{0,D}(du)\in[0,+\infty].
$$
For each fixed $y$ with $0<Z_\Phi(y)<+\infty$, define the normalized fiberwise update on $A\in\mathcal B(D)$ by
$$\Pi^y(A):=\frac{\int_A L_\Phi(u;y)\,\mu_{0,D}(du)}{Z_\Phi(y)}.$$
No normalized fiberwise update is defined by this formula when $Z_\Phi(y)=0$ or $Z_\Phi(y)=+\infty$.

For a data-indexed claim, an observation model and its version convention must also be specified. In the dominated case, let $Q$ be a proper probability kernel from $(D,\mathcal B(D))$ to $(\mathsf Y,\mathcal Y)$, let $\nu$ be a sigma-finite measure on $(\mathsf Y,\mathcal Y)$, and suppose $Q(u,B)=\int_B L_\Phi(u;y)\,\nu(dy)$ for every $u\in D$ and $B\in\mathcal Y$. Then $Z_\Phi$ is the density of the prior-predictive data law with respect to $\nu$; a data-indexed conditional-law version uses $\Pi^y$ when $0<Z_\Phi(y)<\infty$ and the prior $\mu_{0,D}$ when $Z_\Phi(y)$ is zero or infinite. These filled fibers have zero prior-predictive mass, and their chosen values are not normalized fiberwise updates. More generally, for a proper Bayesian model with standard-Borel parameter space $(D,\mathcal B(D))$ and data space $(\mathsf Y,\mathcal Y)$ (each measurably isomorphic to the Borel space of a Polish space), the Axiom of Choice guarantees a data-indexed posterior kernel; its values are unique as probability measures outside one data-marginal-null set, and values on that null set remain version choices. The dominated construction is choice-free; the separate standard-Borel existence branch assumes the Axiom of Choice.

## Definition references

[[def-ip-prior-on-a-forward-domain|A prior on the admissible domain is a Borel probability with full mass there, and its restriction is a probability.]]

[[def-measurable-space|A measurable space consists of a set and a sigma-algebra.]]

[[def-product-sigma-algebra-and-finite-product-sigma-algebras|Joint measurability uses the product sigma-algebra.]]

[[def-extended-reals|The potential takes extended real values, allows positive infinity, and excludes negative infinity.]]

[[def-borel-sigma-algebra-on-the-extended-real-line|The extended real line carries its order-topology Borel sigma-algebra.]]

[[def-measurable-function-between-measurable-spaces|A function is measurable when preimages of measurable target sets are measurable in the source.]]

[[thm-sections-of-product-measurable-functions-are-measurable|Every section of a product-measurable extended-real function is measurable.]]

[[thm-composition-with-borel-functions-preserves-measurability|Composing a measurable map with a Borel outer map preserves measurability.]]

[[thm-exponential-is-strictly-increasing|The real exponential is continuous on finite inputs.]]

[[thm-exponential-limits-and-range|The exponential tends to zero at negative infinity, giving the likelihood map's value zero at positive infinity.]]

[[thm-continuous-preimages-of-borel-sets-are-borel|A continuous scalar map has Borel preimages of Borel sets.]]

[[def-bayesian-model-as-prior-and-sampling-kernel|A proper Bayesian model is a probability prior with a parameter-measurable probability sampling kernel.]]

[[def-measure-kernel-and-probability-kernel|A probability kernel has measurable evaluations and probability sections at every parameter.]]

[[def-finite-sigma-finite-and-semifinite-measures|The dominating data measure is sigma-finite.]]

[[def-posterior-evidence-normalizer-and-fiberwise-update|Fixed-data evidence normalizers are defined for sigma-finite priors, but do not define a prior-predictive law for an improper prior.]]

[[prop-fiberwise-posterior-propriety-iff-finite-positive-evidence|A nonnegative likelihood update is a probability exactly when its evidence is positive and finite and the scale is the reciprocal.]]

[[thm-bayes-formula-for-dominated-kernels|A jointly measurable dominated sampling density gives the prior-predictive density and a conditional kernel with prior fillers on zero and infinite fibers.]]

[[def-bayesian-posterior-as-regular-conditional-law|A posterior RCD is sample-point-indexed; a data-indexed posterior kernel is a version and its null-set values are not fixed.]]

[[def-conditional-law-given-a-random-element|Changing a conditional kernel on a measurable data-marginal-null set preserves its conditional identities.]]

[[def-standard-borel-space|Standard Borel means measurably isomorphic to a Polish space with its Borel sigma-algebra.]]

[[def-axiom-of-choice|The Axiom of Choice states that every family of nonempty sets has a choice function.]]

[[thm-standard-borel-bayesian-posterior-kernel-exists|Under AC and standard-Borel parameter and data spaces, a data-indexed posterior kernel exists and is unique off one data-marginal-null set.]]

[Dashti and Stuart, §3.2 and §4.1, full lecture notes](https://arxiv.org/pdf/1302.6989)

[Latz, §2.2, Theorem 2.5 and its proof in Appendix B (printed p. 23), full paper](https://arxiv.org/pdf/1902.10257)

