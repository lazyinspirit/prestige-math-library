---
id: def-wishart-law
kind: definition
title: Wishart law by Gaussian outer products
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
  - def-probability-measure
  - def-finite-sigma-finite-and-semifinite-measures
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-law-or-distribution-of-a-random-element
  - cor-continuous-functions-are-borel-measurable
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Arak Mathai, Serge Provost, and Hans Haubold, Multivariate Statistical Analysis in the Real and Complex Domains, Chapter 5 §5.5, PDF pp. 47–66"
      url: "https://link.springer.com/content/pdf/10.1007/978-3-030-95864-0_5.pdf"
    - title: "Soumendu Sundar Mukherjee, Multivariate Analysis 2021, Lecture 2, PDF pp. 2–3"
      url: "https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-2.pdf"
    - title: "Soumendu Sundar Mukherjee, Multivariate Analysis 2021, Lecture 3, PDF pp. 1–3"
      url: "https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-3.pdf"
    - title: "Peter D. Hoff, Multivariate Statistical Analysis, Duke STA 832 lecture notes, relevant sections in Chapters 4 and 7"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/832/Materials/notes.pdf"

---

## Definition

Assume the Axiom of Choice. Let $p,m\ge1$ be integers and let $\Sigma$ be a real symmetric positive-semidefinite $p\times p$ matrix, in the sense of [[def-multivariate-normal-law]]. Give $\mathrm{Sym}_p$, the space of real symmetric $p\times p$ matrices, its Euclidean Borel sigma-algebra by identifying a matrix with its upper-triangular entries. The finite product measure $N_p(0,\Sigma)^{\otimes m}$ exists because each factor is a probability measure and hence sigma-finite. Define the **Wishart law** $W_p(\Sigma,m)$ as the pushforward of this product measure by the continuous map $(z_1,\ldots,z_m)\mapsto\sum_{j=1}^m z_jz_j^T$. Equivalently, it is the law of $\sum_{j=1}^m Z_jZ_j^T$ for independent $Z_j\sim N_p(0,\Sigma)$.

Here $\Sigma$ is the scale matrix and the positive integer $m$ is the degrees of freedom. This definition allows a singular Wishart law when $m<p$ or $\Sigma$ is singular; no Lebesgue density is included in the convention. The usual nonsingular density when $m\ge p$ is not needed below.
