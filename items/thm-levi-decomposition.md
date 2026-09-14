---
id: thm-levi-decomposition
kind: theorem
title: Levi decomposition theorem
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-levi-subalgebra-and-levi-decomposition, thm-second-whitehead-lemma, thm-second-lie-algebra-cohomology-classifies-abelian-extensions, prop-the-radical-is-characteristic-and-the-radical-quotient-has-zero-radical, prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras]
landmark: true
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Weibel, Lie Algebra Homology and Cohomology, Levi's Theorem 7.8.13"
      url: https://math.mit.edu/~hrm/palestine/weibel/07-lie_algebra_homology_and_cohomology.pdf
      locator: "§7.8, Theorem 7.8.13, printed pp. 246–247"
---

## Statement

Every finite-dimensional Lie algebra $\mathfrak g$ over a
characteristic-zero field has a Levi subalgebra. Thus
$\mathfrak g=\operatorname{rad}(\mathfrak g)\rtimes\mathfrak s$ with
$\mathfrak s\cong\mathfrak g/\operatorname{rad}(\mathfrak g)$.

## Facts & Assumptions

**Given:** Such a Lie algebra, its radical $\mathfrak r$, and
$\mathfrak q=\mathfrak g/\mathfrak r$.

[L1] The quotient $\mathfrak q$ is semisimple
([[prop-the-radical-is-characteristic-and-the-radical-quotient-has-zero-radical]]).

[L2] Its second cohomology with every finite-dimensional module vanishes
([[thm-second-whitehead-lemma]]).

[L3] Extensions of solvable algebras are solvable
([[prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras]]).

[L4] A complement to the radical with the stated properties is a Levi
subalgebra ([[def-levi-subalgebra-and-levi-decomposition]]).

[L5] The second cohomology of a finite-dimensional algebra with coefficients
in a finite-dimensional module is naturally in bijection with equivalence
classes of abelian extensions, and the zero class is exactly the split
extensions ([[thm-second-lie-algebra-cohomology-classifies-abelian-extensions]]).

## Proof

**Proof technique:** induction on the derived length of the radical.

1.1 If $\mathfrak r$ is abelian, including $\mathfrak r=0$, the exact sequence $0\to\mathfrak r\to\mathfrak g\to\mathfrak q\to0$ is an abelian extension for the induced adjoint $\mathfrak q$-action, so it defines a class in $H^2(\mathfrak q,\mathfrak r)$ under the bijection of [L5]. That class is zero by [L1]–[L2], and the zero class is exactly the split case by [L5]; hence the extension has a Lie section $\sigma:\mathfrak q\to\mathfrak g$. Its image $\mathfrak s$ is semisimple, intersects $\mathfrak r$ trivially, and complements it. This is the derived-length induction base. [L1, L2, L4, L5, base]
2.1 Suppose $\mathfrak r$ is nonabelian and put $\mathfrak t=[\mathfrak r,\mathfrak r]$. This is a characteristic ideal of $\mathfrak r$ and hence an ideal of $\mathfrak g$. The radical of $\mathfrak g/\mathfrak t$ is $\mathfrak r/\mathfrak t$: it is solvable, and any larger solvable ideal would have a solvable inverse image by [L3], contradicting maximality of $\mathfrak r$. Since this radical is abelian, step 1.1 supplies a Levi factor $\overline{\mathfrak h}$ in $\mathfrak g/\mathfrak t$. [L3, step 1.1]
3.1 Let $\mathfrak h$ be the inverse image of $\overline{\mathfrak h}$. Then $\mathfrak h/\mathfrak t\cong\mathfrak q$ is semisimple and $\operatorname{rad}(\mathfrak h)=\mathfrak t$: the inclusion $\mathfrak t\subseteq\operatorname{rad}(\mathfrak h)$ is clear, while every solvable ideal of $\mathfrak h$ maps to a solvable ideal of the semisimple quotient and hence lies in $\mathfrak t$. Since $\mathfrak t=\mathfrak r^{(1)}$ has smaller derived length, apply the induction hypothesis to $\mathfrak h$ to obtain a semisimple complement $\mathfrak s$ to $\mathfrak t$. [L1, L3, step 2.1, IH]
4.1 Since $\mathfrak h=\mathfrak t\oplus\mathfrak s$ and $\mathfrak g=\mathfrak r+\mathfrak h$, we have $\mathfrak g=\mathfrak r+\mathfrak s$. Their intersection lies in $\mathfrak r\cap\mathfrak h=\mathfrak t$ and is zero, so $\mathfrak s$ is the required Levi factor by [L4]. The zero algebra is included, and all choices are finite-dimensional basis or subspace choices. [L4, step 1.1, step 3.1, discharge-induction: step 1.1] ∎
