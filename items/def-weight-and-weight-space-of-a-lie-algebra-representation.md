---
id: def-weight-and-weight-space-of-a-lie-algebra-representation
kind: definition
title: Weight and weight space
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-representation-of-a-lie-algebra, def-cartan-subalgebra-of-a-lie-algebra, def-linear-subspace, thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§8.1"
---

## Definition

Let $\mathfrak g$ be a complex semisimple Lie algebra with a fixed Cartan
subalgebra $\mathfrak h$ ([[def-cartan-subalgebra-of-a-lie-algebra]]), and let
$V$ be a representation of $\mathfrak g$
([[def-representation-of-a-lie-algebra]]), written $H\cdot v$ for
$\rho(H)(v)$. No finite-dimensionality of $V$ is assumed here.

For $\mu\in\mathfrak h^*$ the **weight space** of $\mu$ is
$$V_\mu=\{v\in V:H\cdot v=\mu(H)v\text{ for every }H\in\mathfrak h\};$$
this is a linear subspace of $V$
([[def-linear-subspace]]), being the intersection of the kernels of the
endomorphisms $\rho(H)-\mu(H)\operatorname{id}_V$. A **weight** of $V$ is a
functional $\mu\in\mathfrak h^*$ with $V_\mu\ne0$, and a nonzero $v\in V_\mu$
is a **weight vector** of weight $\mu$. The zero functional is allowed as a
weight; $V_0$ is the space of vectors fixed by $\mathfrak h$.

Distinct weight spaces are independent. Indeed, if
$v_1+\dots+v_m=0$ with $0\ne v_j\in V_{\mu_j}$ and pairwise distinct functionals
$\mu_1,\dots,\mu_m$, choose $H\in\mathfrak h$ with the scalars $\mu_j(H)$
pairwise distinct; this is possible because the finitely many sets
$\{H\in\mathfrak h:(\mu_i-\mu_j)(H)=0\}$ are proper subspaces of $\mathfrak h$
(the functionals $\mu_i-\mu_j$ are nonzero for $i\ne j$) and a finite union of
proper subspaces of a vector space over the infinite field $\mathbb C$ is
proper. Then the $v_j$ are eigenvectors of $\rho(H)$ for the
pairwise distinct eigenvalues $\mu_j(H)$ and hence are linearly independent
([[thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent]]),
forcing $v_1=\dots=v_m=0$, a contradiction. Thus the sum
$\sum_\mu V_\mu$ is direct.

If $V$ is finite-dimensional, then $V$ has only finitely many weights: the
nonzero weight spaces form a direct sum inside $V$, so their number is at most
$\dim V$.
