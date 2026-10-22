---
id: prop-ip-posterior-mean-is-square-loss-optimal
kind: proposition
title: The posterior mean is the unique squared-loss Bayes action in a Hilbert target
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-measurable-space
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-measure-kernel-and-probability-kernel
  - def-hilbert-space
  - def-separable-space
  - def-real-and-complex-inner-product-space
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
  - thm-product-of-countable
  - def-axiom-of-choice
  - def-countable-choice
  - thm-parseval-equivalences-for-a-complete-orthonormal-family
  - def-conditional-expectation-given-a-sigma-algebra
  - thm-conditional-expectation-is-the-l2-orthogonal-projection
  - thm-measurability-of-integration-against-a-kernel
  - thm-monotone-convergence-for-the-integral
  - def-posterior-risk-and-bayes-action
  - def-conditional-law-given-a-random-element
  - thm-conditional-integration-through-a-regular-conditional-law
  - lem-conditional-expectation-is-unique-almost-surely
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "Assume AC. It is used by the scalar L2 projection supplier; it also supplies the Countable Choice hypothesis of Parseval. The basis is supplied as part of the statement, and the remaining coordinate, kernel, and summation arguments require no additional choice axiom."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.3.1, PDF pp. 104–105"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
      locator: "Example 5.4 gives scalar posterior risk under squared error as a quadratic in the action and identifies its posterior-mean minimizer when expectations exist; the local proof extends the argument coordinatewise to a Hilbert target."
    - title: "Giannis Daras et al., A Survey on Diffusion Models for Inverse Problems, arXiv:2410.00083v1"
      url: "https://arxiv.org/pdf/2410.00083v1"
      locator: "Lemma A.1, PDF p. 25, proves a finite-dimensional conditional-mean/MMSE identity by expanding the square and conditioning the residual; it is supporting context only, while the Hilbert-target result is proved locally."
    - title: "Masoumeh Dashti and Andrew M. Stuart, The Bayesian Approach to Inverse Problems, arXiv:1302.6989v4"
      url: "https://arxiv.org/pdf/1302.6989v4"
      locator: "§3.2, Theorem 3.4 and proof, for an inverse posterior as a data-indexed conditional law; §4.1, Theorem 4.3 and proof, for posterior propriety and data-version hypotheses. Context only: the Hilbert-risk proof assumes a probability kernel directly and does not import this source proof."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $(\mathsf Y,\mathcal Y)$ be a measurable data space, let $H$ be a separable real Hilbert space, and fix a complete orthonormal basis $(e_j)_{j\in J}$, where $J$ is either finite with its supplied ordering or $J=\mathbb N$. A complex Hilbert signal space is included by viewing it as a real Hilbert space with inner product the real part of its complex inner product and supplying a real orthonormal basis. Let $\Pi$ be a probability kernel from $\mathsf Y$ to $H$ with its norm Borel sigma-algebra. Define
$$D_2:=\left\{y\in\mathsf Y:\int_H\|h\|_H^2\,\Pi_y(dh)<\infty\right\}.$$
For every $y\in D_2$ and $j\in J$, define
$$m_j(y):=\int_H\langle h,e_j\rangle_H\,\Pi_y(dh),\qquad \mu(y):=\sum_{j\in J}m_j(y)e_j,$$
where the last sum is the norm limit of its finite partial sums. Then $D_2\in\mathcal Y$, the sum defining $\mu(y)$ exists for every $y\in D_2$, and $\mu:D_2\to H$ is measurable. For every $y\in D_2$ and every action $a\in H$,
$$\int_H\|h-a\|_H^2\,\Pi_y(dh)=\int_H\|h-\mu(y)\|_H^2\,\Pi_y(dh)+\|a-\mu(y)\|_H^2.$$
Thus $\mu(y)$ is the unique finite-risk action minimizing posterior squared-error risk over all of $H$, and it is a measurable Bayes action rule on $D_2$. The minimization is over the full Hilbert space: the mean need not belong to a nonconvex admissible signal subset, and no perceptual-representativeness claim is made. For a probability space $(\Omega,\mathcal F,P)$, let $Y:\Omega\to(\mathsf Y,\mathcal Y)$ and $T:\Omega\to H$ be measurable random elements with $E\|T\|_H^2<\infty$. If the same $\Pi$ is a supplied regular conditional law of $T$ given $Y$, write $P_Y(B)=P(Y\in B)$ for the law of $Y$. Then $D_2$ has full $P_Y$-measure. Extend $\mu$ by zero to a measurable map $\bar\mu:\mathsf Y\to H$; the coordinates of $\bar\mu(Y)$ are versions of $E[\langle T,e_j\rangle_H\mid\sigma(Y)]$, and $\bar\mu(Y)$ is square-integrable. Any square-integrable $H$-valued random variable whose basis coordinates are versions of those same conditional expectations equals $\bar\mu(Y)$ almost surely. The RCD's values on $P_Y$-null data sets remain version choices.

## Statement references

[[def-measurable-space|A measurable data space is a set with a specified sigma-algebra.]]

[[def-measure-kernel-and-probability-kernel|A probability kernel has measurable evaluations and probability-measure sections.]]

[[def-product-sigma-algebra-and-finite-product-sigma-algebras|Kernel integrands are measurable on the product sigma-algebra.]]

[[def-hilbert-space|A real Hilbert space is complete for its inner-product norm.]]

[[def-separable-space|Separability supplies a countable dense subset.]]

[[def-real-and-complex-inner-product-space|The inner product induces the Hilbert norm and scalar coordinate functionals.]]

[[thm-cauchy-schwarz-in-an-inner-product-space|Cauchy–Schwarz bounds each fixed basis-coordinate functional by the Hilbert norm, giving its continuity.]]

[[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis|A Hilbert basis is a complete orthonormal family.]]

[[thm-parseval-equivalences-for-a-complete-orthonormal-family|Under Countable Choice, basis coordinates satisfy Parseval's identity.]]

[[thm-conditional-expectation-is-the-l2-orthogonal-projection|Under AC, scalar conditional expectation is the unique L2 projection.]]

[[def-posterior-risk-and-bayes-action|A measurable rule with finite posterior risk attaining the minimum is a Bayes action rule.]]

[[def-conditional-law-given-a-random-element|A conditional law is a probability kernel, and changes on marginal-null data sets preserve its conditional identities.]]

[[thm-conditional-integration-through-a-regular-conditional-law|Kernel integrals of scalar tests give conditional-expectation versions.]]

[[lem-conditional-expectation-is-unique-almost-surely|Scalar conditional-expectation versions agree almost surely.]]

[Martin, §5.3.1, complete lecture notes](https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf)

[Daras et al., Lemma A.1, full diffusion survey](https://arxiv.org/pdf/2410.00083v1)

[Dashti and Stuart, §3.2 and §4.1, full lecture notes](https://arxiv.org/pdf/1302.6989v4)

## Facts & Assumptions

**Given:** AC; a measurable data space; a separable real Hilbert target $H$ with a supplied finite or countable complete orthonormal basis; and a supplied probability kernel $\Pi_y$ on $H$. The theorem is applied on the data domain $D_2$ of finite posterior second moment.

[A1] The Axiom of Choice gives a choice function for every family of nonempty sets. [[def-axiom-of-choice]]

[A2] Countable Choice is the restriction of AC to countable families; it is assumed by the Parseval supplier below. [[def-countable-choice]]

[F1] A probability kernel has a measurable evaluation for every Borel target set and a probability measure at every data point. [[def-measure-kernel-and-probability-kernel]]

[F2] The product sigma-algebra makes the continuous norm and coordinate functions into product-measurable kernel integrands. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[def-real-and-complex-inner-product-space]], [[thm-cauchy-schwarz-in-an-inner-product-space]]

[F3] Separability supplies an at-most-countable dense subset of $H$. [[def-separable-space]]

[F4] A real Hilbert space is complete for its inner-product norm, and a Hilbert basis is a complete orthonormal family. [[def-hilbert-space]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]

[F5] For a complete orthonormal family, Parseval's identity equates the squared norm with the sum of squared coordinates; this supplier assumes Countable Choice. [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]

[F6] A scalar conditional-expectation version is integrable, measurable with respect to its conditioning sigma-algebra, and satisfies the conditioning-event integral identities. [[def-conditional-expectation-given-a-sigma-algebra]]

[F7] Under AC, a scalar conditional expectation of an $L^2$ input is its orthogonal projection onto $L^2(\mathcal G)$; in particular its residual is orthogonal to constant random variables. [[thm-conditional-expectation-is-the-l2-orthogonal-projection]]

[F8] Integrating a product-measurable nonnegative function against a probability kernel gives a measurable function; signed integrals are measurable on their absolute-integrability domain. [[thm-measurability-of-integration-against-a-kernel]]

[F9] Increasing nonnegative measurable functions pass through their integrals by monotone convergence. [[thm-monotone-convergence-for-the-integral]]

[F10] A measurable action rule with finite posterior risk attaining the pointwise minimum is a Bayes action rule. [[def-posterior-risk-and-bayes-action]]

[F11] A conditional law is a probability kernel indexed by the conditioning random element; changing its values on a marginal-null set preserves the conditional identities. [[def-conditional-law-given-a-random-element]]

[F12] Integrals of measurable nonnegative or integrable scalar tests against an RCD are conditional-expectation versions. [[thm-conditional-integration-through-a-regular-conditional-law]]

[F13] Two integrable scalar versions of the same conditional expectation agree almost surely. [[lem-conditional-expectation-is-unique-almost-surely]]

[F14] A product of two at-most-countable sets is at most countable. [[thm-product-of-countable]]

[F15] Cauchy–Schwarz gives $|\langle x,e_j\rangle_H|\le\|x\|_H$ for each unit basis vector $e_j$, so each coordinate functional is continuous; it also gives continuity of the inner product in either argument. [[thm-cauchy-schwarz-in-an-inner-product-space]]

[F16] A measurable space $(\mathsf Y,\mathcal Y)$ has a sigma-algebra $\mathcal Y$ of measurable subsets. [[def-measurable-space]]

## Proof

1.1 The function $(y,h)\mapsto\|h\|_H^2$ is product-measurable because the norm is continuous, so kernel integration [F8] makes $s_2(y)=\int_H\|h\|_H^2\,\Pi_y(dh)$ measurable and $D_2=\{s_2<\infty\}$ measurable. For each $j$, $X_j(h)=\langle h,e_j\rangle_H$ is continuous by [F15] and $\|e_j\|_H=1$. The decomposition $h=X_j(h)e_j+(h-X_j(h)e_j)$ is orthogonal, so $X_j(h)^2\le\|h\|_H^2$; hence $2|X_j(h)|\le1+\|h\|_H^2$. Thus each signed coordinate integral defining $m_j(y)$ is finite on $D_2$, and the signed-kernel clause of [F8] makes $m_j$ measurable there. [F1, F2, F4, F8, F15, F16, given, algebra]

2.1 Fix $y\in D_2$. Under the probability space $(H,\mathcal B(H),\Pi_y)$, each $X_j$ is square-integrable. The constant $m_j(y)=\int X_j\,d\Pi_y$ satisfies the conditional-expectation identities for the trivial sigma-algebra by [F6], so [F7] makes it the projection of $X_j$ onto constants and gives $\int_H(X_j-m_j(y))\,d\Pi_y=0$. For every real $b$, expand $X_j-b=(X_j-m_j(y))+(m_j(y)-b)$; the cross term integrates to zero, yielding $\int_H(X_j-b)^2\,d\Pi_y=\int_H(X_j-m_j(y))^2\,d\Pi_y+(b-m_j(y))^2$. Taking $b=0$ gives $m_j(y)^2\le\int_HX_j^2\,d\Pi_y$. Let $J_N$ be the first $N$ basis indices, taking all indices once $N$ reaches the finite endpoint when $J$ is finite. Summing over $J_N$ and applying Parseval [F5] pointwise, followed by monotone convergence [F9], yields $\sum_{j\in J}m_j(y)^2\le\int_H\sum_{j\in J}X_j(h)^2\,\Pi_y(dh)=\int_H\|h\|_H^2\,\Pi_y(dh)<\infty$. Orthonormality gives $\|\sum_{j\in J_N}m_j(y)e_j\|_H^2=\sum_{j\in J_N}m_j(y)^2$; for $M>N$, the squared norm of the difference of the two partial sums is $\sum_{j\in J_M\setminus J_N}m_j(y)^2$, which tends to zero as $M,N\to\infty$ because the series converges. Thus the partial sums are Cauchy, and completeness [F4] gives their norm limit $\mu(y)$. Since the sum in the statement is over those same initial segments, it is this norm limit. By continuity of the inner product [F15], $\langle\mu(y),e_j\rangle_H=m_j(y)$ for every $j$. [A1, A2, F1, F4, F5, F6, F7, F9, F15, step 1.1, construct]

3.1 Let $C$ be a countable dense subset of $H$ from [F3]. The balls with centers in $C$ and radii $1/n$ form a countable base by [F14]: for any point in an open set, choose $n$ with $3/(2n)$ smaller than the radius of a ball about that point contained in the open set, then choose a center in $C$ within $1/(2n)$ of the point. The resulting radius-$1/n$ ball contains the point and lies in the open set. For $c\in C$ and a basis ball radius $r=1/n$, the finite sums $s_N(y)=\sum_{j\in J_N}(m_j(y)-\langle c,e_j\rangle_H)^2$ are measurable by step 1.1. By Parseval [F5] and step 2.1, $\|\mu(y)-c\|_H^2=\sup_Ns_N(y)$, where finite bases use the full sum once all coordinates are included. The preimage of the open ball is the countable union $\bigcup_{k\ge2}\bigcap_N\{s_N<r^2(1-1/k)\}$; this equals $\{\sup_Ns_N<r^2\}$. Hence every basis-ball preimage is measurable, and the countable base makes $\mu$ measurable on $D_2$. [F3, F5, F14, step 1.1, step 2.1, construct]

4.1 Fix $y\in D_2$ and $a\in H$. Write $a_j=\langle a,e_j\rangle_H$. Applying the scalar identity established in step 2.1 with $b=a_j$ gives $\int_H(X_j-a_j)^2\,d\Pi_y=\int_H(X_j-m_j(y))^2\,d\Pi_y+(a_j-m_j(y))^2$. Sum over the initial segments $J_N$ from step 2.1 and pass to their increasing limits with [F9]; Parseval [F5] identifies the three sums as $\int_H\|h-a\|_H^2\,d\Pi_y$, $\int_H\|h-\mu(y)\|_H^2\,d\Pi_y$, and $\|a-\mu(y)\|_H^2$, respectively. The first integral is finite because $\|h-a\|_H^2\le2\|h\|_H^2+2\|a\|_H^2$; the same bound with $\mu(y)$ gives finite risk at the mean. The resulting identity proves that only $a=\mu(y)$ attains the minimum. By [F10] and step 3.1, $\mu$ is a measurable Bayes action rule on $D_2$. [F4, F5, F9, F10, step 2.1, step 3.1, algebra]

5.1 Now suppose $\Pi$ is a supplied RCD of the measurable random element $T:\Omega\to H$ given $Y:\Omega\to\mathsf Y$, with $E\|T\|_H^2<\infty$. Applying [F12] to $h\mapsto\|h\|_H^2$ shows that $s_2(Y)$ has finite expectation $E\|T\|_H^2$; a nonnegative random variable with finite expectation is finite almost surely, so $P_Y(D_2)=1$. By [F15], $|\langle T,e_j\rangle_H|\le\|T\|_H$, and $2\|T\|_H\le1+\|T\|_H^2$, so every coordinate is integrable. For every $j$, [F12] now identifies $m_j(Y)$ as a version of $E[\langle T,e_j\rangle_H\mid\sigma(Y)]$. Extend $\mu$ by zero outside $D_2$; because $D_2$ is measurable by step 1.1 and $\mu$ is measurable on $D_2$ by step 3.1, this piecewise extension is measurable, and step 4.1 at $a=0$ gives $\|\mu(y)\|_H^2\le s_2(y)$ on $D_2$, so the extension evaluated at $Y$ is square-integrable. If another square-integrable $H$-valued random variable has each basis coordinate as a version of the corresponding scalar conditional expectation, [F13] makes each coordinate equal to $m_j(Y)$ outside a null set. There are at most countably many coordinates, so the union of these exceptional null sets is null; completeness of the basis [F4] then makes the two vectors equal there. The RCD's values on $P_Y$-null data sets remain version choices by [F11]. [F4, F11, F12, F13, F15, F16, step 1.1, step 3.1, step 4.1, construct] ∎
