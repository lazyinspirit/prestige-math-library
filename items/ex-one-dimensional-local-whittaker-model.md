---
id: ex-one-dimensional-local-whittaker-model
kind: example
title: "The rank-one local Whittaker model"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Cogdell, L-functions and Converse Theorems for GL(n)"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
      locator: "Context for the genericity convention; the rank-one calculation is explicit below."
---

## Example

Let $L$ be a complete discretely valued field with finite residue field, $\mathbb R$, or $\mathbb C$. Let $\chi:L^\times\to\mathbb C^\times$ be a continuous multiplicative character, locally constant when $L$ is nonarchimedean. Let $V=\mathbb C$ and let $\pi$ be the representation of $\mathrm{GL}_1(L)=L^\times$ defined by $\pi(g)z=\chi(g)z$. The upper unitriangular subgroup $N_1$ of $\mathrm{GL}_1(L)$ is $\{1\}$, and its pinned character satisfies $\psi_{N_1}(1)=1$. The space of Whittaker linear forms, namely the complex-linear maps $\ell:V\to\mathbb C$ satisfying $\ell(\pi(u)z)=\psi_{N_1}(u)\ell(z)$ for $u\in N_1$ and $z\in V$, is one-dimensional; in the archimedean cases all these linear maps are continuous.

## Example references

[J. W. Cogdell, *L-functions and Converse Theorems for GL(n)*, §1.2, pp. 9–10](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)

## Facts & Assumptions

**Given:** The local field and one-dimensional character representation in the Example.

[A1] The representation space is $\mathbb C$ and $\pi(g)z=\chi(g)z$, as specified in the Example.

## Verification

**Given:** The Example data and [A1].

1.1 For $n=1$, the conditions defining $N$ leave only the identity matrix, and the sum defining $\psi_N$ is empty and equals $0$; hence $\psi_N(1)=1$. Every linear form on $V=\mathbb C$ is therefore Whittaker-equivariant, and every such form is continuous. The identity form is nonzero. [given, A1, algebra]

2.1 The dual of a one-dimensional complex vector space has dimension one, so these equivariant functionals form a one-dimensional space, as asserted. [step 1.1, algebra] ∎
