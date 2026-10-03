---
id: def-verma-flag-and-its-multiplicities
kind: definition
title: Finite Verma flags and their multiplicities
status: draft
origin: pipeline
deps:
- def-axiom-of-choice
- def-bgg-category-o
- def-grothendieck-group-and-character-of-category-o
- def-standard-and-costandard-objects-in-category-o
- def-verma-module
justified_by:
- lem-verma-flag-multiplicities-are-independent-of-the-flag
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Lin Chen, lecture notes (Spring 2024), Lecture 9, Theorem-Definition 1.1 and Proposition-Definition
      2.1
    url: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    locator: §1, Theorem-Definition 1.1 with Corollary 1.3, printed pp. 1-3; §2, Proposition-Definition
      2.1, printed p. 4 (full text read at harvest)
  - title: Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Sec. 20.2
    url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
    locator: §20.2, printed pp. 100-102 (standard filtrations); §20.3, printed p. 102 (independence
      of multiplicities).
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Work in category
$\mathcal O$ with the conventions of [[def-bgg-category-o]], and write
$\Delta(\mu)=M(\mu)$ for the standard objects of
[[def-standard-and-costandard-objects-in-category-o]], i.e. the Verma modules
of [[def-verma-module]].

A **finite Verma flag** of an object $X$ of $\mathcal O$ — also called a
**standard flag** or a **$\Delta$-flag** — is a finite increasing sequence of
subobjects
$$0=X_0\subseteq X_1\subseteq\cdots\subseteq X_n=X$$
such that each quotient $X_i/X_{i-1}$ is isomorphic to a Verma module
$\Delta(\mu_i)=M(\mu_i)$, for $i=1,\dots,n$. An object admitting such a flag is
called **Verma-filtered**. Since the flag is exhausted by its factors, its
class in the Grothendieck group
$K_0(\mathcal O)$ of [[def-grothendieck-group-and-character-of-category-o]]
is
$$[X]=\sum_{i=1}^n[\Delta(\mu_i)].$$

For a Verma-filtered object $X$ and a weight $\mu$, the **multiplicity**
$(X:\Delta(\mu))$ is the number of indices $i$ with $\mu_i=\mu$ in a Verma
flag of $X$. This number is independent of the chosen flag by
[[lem-verma-flag-multiplicities-are-independent-of-the-flag]], so the notation
$(X:\Delta(\mu))$ is well-defined for Verma-filtered $X$.

The zero object has the empty flag, and every multiplicity of the zero object
is zero; a nonzero Verma-filtered object has at least one factor. A one-step
flag of $X$ is exactly an isomorphism $X\cong\Delta(\mu)$ for a single weight
$\mu$, so the objects with a one-step flag are the Verma modules themselves.
The flag is a chain of subobjects of $X$ in the module category; it is not
required to split, and later examples show that it need not.
