---
id: lem-standard-normal-matrix-has-full-row-rank-almost-surely
kind: lemma
title: A standard-normal matrix with at least as many columns as rows has full row rank almost surely
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - def-independent-random-elements
  - thm-independent-random-elements-have-product-joint-law
  - thm-finite-dimensional-orthogonal-decomposition
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - cor-continuous-functions-are-borel-measurable
  - lem-ac-supplies-sequential-choices-for-probability-constructions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Arak Mathai, Serge Provost, and Hans Haubold, Multivariate Statistical Analysis in the Real and Complex Domains, Chapter 3, PDF pp. 55–58"
      url: "https://link.springer.com/content/pdf/10.1007/978-3-030-95864-0_3.pdf"
    - title: "Soumendu Sundar Mukherjee, Multivariate Analysis 2021, Lecture 3, PDF pp. 1–3"
      url: "https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-3.pdf"
    - title: "Peter D. Hoff, Multivariate Statistical Analysis, Duke STA 832 lecture notes, relevant sections in Chapters 4 and 7"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/832/Materials/notes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Assume the Axiom of Choice. Let $1\le p\le m$ and let $G=[G_1|\cdots|G_m]$ be a $p\times m$ matrix whose columns are independent $N_p(0,I_p)$ random vectors. Then the first $p$ columns are linearly independent almost surely. Consequently $GG^T$ is positive definite almost surely.

## Facts & Assumptions

**Given:** The Axiom of Choice, integers $1\le p\le m$, and independent standard multivariate-normal columns $G_j\in\mathbb R^p$.

[A1] The Axiom of Choice supplies the countable-choice measurability branch used by the continuous-map supplier and the Gaussian law definitions. [[def-axiom-of-choice]] [[lem-ac-supplies-sequential-choices-for-probability-constructions]]

[F1] A family of random elements is independent when the sigma-algebras it generates are independent, and its finite joint law is the product of its marginal laws. [[def-independent-random-elements]] [[thm-independent-random-elements-have-product-joint-law]]

[F2] If $G_j\sim N_p(0,I_p)$, then $a^TG_j\sim N(0,a^Ta)$ for every fixed $a\in\mathbb R^p$. [[def-multivariate-normal-law]]

[F3] Every proper subspace of a finite-dimensional inner-product space has a nonzero orthogonal complement. [[thm-finite-dimensional-orthogonal-decomposition]]

[F4] Nonnegative measurable functions on finite product probability spaces may be integrated by sections using Tonelli's theorem. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F5] Continuous Euclidean functions are Borel measurable under countable choice; determinant minors are continuous polynomials. [[cor-continuous-functions-are-borel-measurable]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 For $k=0$, the first column is nonzero almost surely: the event $G_1=0$ is contained in the event that its first coordinate is zero, which has probability zero because a standard normal has a density. For $1\le k<p$, suppose the first $k$ columns are linearly independent. For each fixed such tuple $v_1,\ldots,v_k$, their span $V$ is proper; by [F3] choose $a\ne0$ with $a\perp V$. The next column is independent of this tuple by [F1], and [F2] gives $a^TG_{k+1}\sim N(0,\|a\|^2)$, so $\mathbb P(G_{k+1}\in V)=0$ because that event is contained in $\{a^TG_{k+1}=0\}$. The set of dependent $(k+1)$-tuples is Borel, since dependence is the simultaneous vanishing of its $(k+1)\times(k+1)$ minors and [F5] makes these determinant maps Borel. Integrating these zero-probability sections by [F1] and [F4], and adding the null set of dependent first $k$-tuples, shows that the first $k+1$ columns are linearly independent almost surely. [A1, F1, F2, F3, F4, F5, choose]

2.1 Applying step 1.1 successively through $k=p-1$ shows that the square matrix $B=[G_1|\cdots|G_p]$ is invertible almost surely. For any nonzero $v\in\mathbb R^p$, the first $p$ coordinates of $G^Tv$ are $B^Tv\ne0$, so $v^TGG^Tv=\|G^Tv\|^2>0$. Thus $GG^T$ is positive definite almost surely. [step 1.1, algebra] ∎