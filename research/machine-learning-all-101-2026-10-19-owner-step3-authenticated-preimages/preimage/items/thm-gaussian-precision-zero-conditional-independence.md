---
id: thm-gaussian-precision-zero-conditional-independence
kind: theorem
title: "Gaussian precision zeros characterize pairwise conditional independence"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-undirected-graphical-model-and-markov-properties
  - def-multivariate-normal-law
  - thm-nondegenerate-multivariate-normal-law-has-density
  - thm-conditional-density-formula
  - def-conditional-independence-given-a-sigma-algebra
  - lem-characteristic-function-of-a-normal-law
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - def-countable-choice
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition"
      url: "https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf"
      locator: "§17.3.1 and Exercise 17.3, printed pp. 630–631"
    - title: "Robin Evans, Graphical Models course notes"
      url: "https://www.stats.ox.ac.uk/~evans/gms/lecturenotes.pdf"
      locator: "§5.1, Proposition 5.2, printed p. 23"
---

## Statement

Assume AC. Let $p\ge2$ and let $X=(X_1,\ldots,X_p)$ have multivariate normal law $N_p(\mu,\Sigma)$ with real symmetric positive-definite covariance $\Sigma$; put $\Theta=\Sigma^{-1}$. For every pair of distinct indices $i,j$, $X_i$ and $X_j$ are conditionally independent given $\sigma(X_k:k\notin\{i,j\})$ if and only if $\Theta_{ij}=0$. Thus the graph whose edges are exactly the nonzero off-diagonal entries of $\Theta$ is the Gaussian pairwise conditional-dependence graph.

## Statement references

[The Elements of Statistical Learning, §17.3.1 and Exercise 17.3](https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf)

[Evans, Graphical Models, §5.1, Proposition 5.2](https://www.stats.ox.ac.uk/~evans/gms/lecturenotes.pdf)

## Facts & Assumptions

**Given:** AC, $p\ge2$, a random vector $X$ with law $N_p(\mu,\Sigma)$, and real symmetric positive-definite $\Sigma$.

[F1] A multivariate normal law has the scalar normal projections prescribed by its mean and covariance, including the covariance of every linear projection. [[def-multivariate-normal-law]].

[F2] When $\Sigma$ is positive definite, the law has density $(2\pi)^{-p/2}\det(\Sigma)^{-1/2}\exp(-\tfrac12(x-\mu)^T\Sigma^{-1}(x-\mu))$. [[thm-nondegenerate-multivariate-normal-law-has-density]].

[F3] For a joint density with positive finite marginal sections, normalizing each section gives a regular conditional distribution of the first coordinate given the second. [[thm-conditional-density-formula]].

[F4] Conditional independence given a sigma-algebra is factorization of conditional expectations for every pair of bounded measurable real functions. [[def-conditional-independence-given-a-sigma-algebra]].

[F5] A scalar $N(m,s^2)$ law has characteristic function $\exp(itm-\tfrac12s^2t^2)$. [[lem-characteristic-function-of-a-normal-law]].

[F6] On Borel subsets of $\mathbb R^{r+s}$, product Lebesgue measure agrees with Euclidean Lebesgue measure under countable choice. [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]] [[def-countable-choice]].

[F7] AC implies countable choice. [[lem-ac-supplies-sequential-choices-for-probability-constructions]].

[F8] The pairwise Markov property tests conditional independence exactly at nonedges of a finite simple undirected graph. [[def-undirected-graphical-model-and-markov-properties]].

[A1] AC is the explicit hypothesis of the conditional-independence convention, and here means that every family of nonempty sets has a choice function. [[def-conditional-independence-given-a-sigma-algebra]] [[def-axiom-of-choice]].

## Proof

1.1 Fix distinct $i,j$. By [A1], [F1] and [F2], the joint density of $X$ is the stated nondegenerate Gaussian density; here positive definiteness is an additional hypothesis beyond the singular-covariance multivariate-normal definition. [given, A1, F1, F2]

2.1 Reorder coordinates so $Y=(X_i,X_j)$ and $Z=(X_k)_{k\notin\{i,j\}}$. In the correspondingly permuted precision matrix write $\Theta=\begin{pmatrix}A&B\\B^T&C\end{pmatrix}$, where $A=\begin{pmatrix}a&c\\c&d\end{pmatrix}$. For every nonzero $u\in\mathbb R^2$, $u^TAu=(u,0)^T\Theta(u,0)>0$, so $A$ is positive definite and $\det A=ad-c^2>0$. If $p=2$, the $Z$ coordinate is a singleton and the following conditional-density calculation is the unconditional bivariate density. [step 1.1, algebra]

3.1 For $p>2$, [F7] supplies the countable-choice hypothesis of [F6], so the joint Euclidean density in [F2] is also a density relative to $\lambda_2\otimes\lambda_{p-2}$. Put $u=y-\mu_Y$, $w=z-\mu_Z$, and $D=C-B^TA^{-1}B$. For nonzero $w$, $(-A^{-1}Bw,w)^T\Theta(-A^{-1}Bw,w)=w^TDw>0$, hence $D$ is positive definite. Completing the square gives $u^TAu+2u^TBw+w^TCw=(u+A^{-1}Bw)^TA(u+A^{-1}Bw)+w^TDw$. The section integral over $y$ is therefore positive and finite for every $z$: its $y$ factor is the normalized two-dimensional Gaussian density with precision $A$, multiplied by a finite positive constant. [step 2.1, F2, F6, F7, algebra]

4.1 For $p>2$, use the explicit filler probability concentrated at $(0,0)$ on $\mathbb R^2$ in [F3]; the positive finite marginal sections from step 3.1 show that the conditional law at every $z$ has density $\frac{\sqrt{\det A}}{2\pi}\exp(-\tfrac12(u+A^{-1}Bw)^TA(u+A^{-1}Bw))$. It is the bivariate normal law with mean $\mu_Y-A^{-1}B(z-\mu_Z)$ and covariance $A^{-1}$. For $p=2$, this is the unconditional law with covariance $\Theta^{-1}=A^{-1}$. [step 2.1, step 3.1, F2, F3]

5.1 If $\Theta_{ij}=c=0$, then $A$ is diagonal and the conditional density in step 4.1 is a product of two univariate Gaussian densities for every $z$. Its conditional expectations therefore factor for all bounded measurable coordinate functions; [F4] gives $X_i\perp\!\!\!\perp X_j\mid\sigma(Z)$. [step 4.1, F4, algebra]

5.2 Conversely, suppose $X_i\perp\!\!\!\perp X_j\mid\sigma(Z)$. Apply [F4] to the four bounded pairs formed from $\cos(X_i),\sin(X_i)$ and $\cos(X_j),\sin(X_j)$ and combine the resulting identities. For almost every $z$, the conditional joint characteristic function at $(1,1)$ equals the product of its conditional marginal characteristic functions. By [F1], [F4] and [F5], the joint characteristic function from step 4.1 is $\exp(i(m_1(z)+m_2(z))-\tfrac12((A^{-1})_{11}+2(A^{-1})_{12}+(A^{-1})_{22}))$, whereas that product omits the middle covariance term. Equality implies $\exp(-(A^{-1})_{12})=1$, and since $(A^{-1})_{12}$ is real this forces $(A^{-1})_{12}=0$. [step 4.1, F1, F4, F5]

6.1 The inverse of $A$ is $(ad-c^2)^{-1}\begin{pmatrix}d&-c\\-c&a\end{pmatrix}$. Since $\det A>0$, $(A^{-1})_{12}=0$ if and only if $c=0$, which is exactly $\Theta_{ij}=0$. Steps 5.1 and 5.2 prove the two implications; by [F8], these are exactly the nonedge and conditional-independence cases of the Gaussian pairwise Markov graph. [step 2.1, step 5.1, step 5.2, F8, algebra] ∎
