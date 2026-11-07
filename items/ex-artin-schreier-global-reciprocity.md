---
id: ex-artin-schreier-global-reciprocity
kind: example
title: "Artin–Schreier extension and a nontrivial global Frobenius"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - thm-global-function-field-artin-reciprocity-and-norm-index
  - thm-local-artin-reciprocity-and-norm-index
  - thm-local-artin-unramified-frobenius-normalization
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - def-separable-elements-and-separable-extensions
  - thm-repeated-root-derivative-criterion
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct-verification
axiom_use: AC, Countable Choice, and DC are inherited from the local/global class-field interfaces; the polynomial and local degree checks are choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Romyar Yoon, Global Function Field Class Field Theory: A Neukirch Approach, §3.2"
      url: "https://arxiv.org/pdf/1610.07486"
    - title: "J. S. Milne, Class Field Theory, Chapter VII §6"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
verification: {}
---

## Example

Assume AC, Countable Choice, and DC.

Let $F=\mathbb F_2(t)$ and let $L=F(y)$ with $y^2+y=t$. This is a cyclic
extension of degree two. At the place $v=(t+1)$, it is unramified of residue
degree two. The idele with component $t+1$ at $v$ and component $1$ at every
other place has global Artin image the nontrivial automorphism
$y\mapsto y+1$.

## Example references

[[thm-global-function-field-artin-reciprocity-and-norm-index]]

[[thm-local-artin-reciprocity-and-norm-index]]

[[thm-local-artin-unramified-frobenius-normalization]]

[[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[Yoon, *Global Function Field Class Field Theory: A Neukirch Approach*, §3.2](https://arxiv.org/pdf/1610.07486)

[Milne, *Class Field Theory*, Chapter VII §6](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-dependent-choice]]

## Facts & Assumptions

**Given:** The rational function field $F=\mathbb F_2(t)$, the polynomial
$Y^2+Y-t$, the place $v=(t+1)$, and the local and global reciprocity
normalizations in the cited suppliers, with AC, Countable Choice, and DC.

[A1] These choice assumptions are inherited from the local and global
reciprocity interfaces. ([[def-axiom-of-choice]], [[def-countable-choice]],
[[def-dependent-choice]])

[F1] An irreducible polynomial with no repeated roots defines a separable
extension; in characteristic two the derivative of $Y^2+Y-t$ is $1$.
([[def-separable-elements-and-separable-extensions]],
[[thm-repeated-root-derivative-criterion]])

[F2] A finite unramified extension of a complete discretely valued field is
determined by its residue-field extension.
([[thm-finite-unramified-local-extensions-classified-by-residue-extensions]])

[F3] The local degree is the product of ramification index and residue
degree. ([[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]])

[F4] Local reciprocity sends a uniformizer in an unramified extension to
arithmetic Frobenius, and global reciprocity restricts to the local map.
([[thm-local-artin-reciprocity-and-norm-index]],
[[thm-local-artin-unramified-frobenius-normalization]],
[[thm-global-function-field-artin-reciprocity-and-norm-index]])

## Verification

**Given:** The data in the Example and Facts & Assumptions.

1.1 The polynomial has no root in $\mathbb F_2(t)$. If $z$ has a pole of order $r>0$ at infinity, then $z^2+z$ has pole order $2r$, not one; if $z$ has no pole there, then $z^2+z$ has no pole there. But $t$ has a pole of order one. Thus $Y^2+Y-t$ is irreducible of degree two; by [F1] it is separable, and $y\mapsto y+1$ is its nontrivial Galois automorphism. [A1, F1, algebra]

2.1 Modulo $t+1$, the polynomial becomes $Y^2+Y+1$, irreducible over $\mathbb F_2$ and separable. It remains irreducible over $F_v$ by reduction, so adjoining a root gives a degree-two local field extension whose residue degree is two. The local degree formula gives ramification index one, hence the extension is unramified. By [F2] its Frobenius is nontrivial and acts as $y\mapsto y+1$. [A1, F2, F3, step 1.1, algebra]

3.1 The component $t+1$ is a uniformizer at $v$. By [F3], its local reciprocity image is that nontrivial Frobenius, while all other idele components are $1$. The global Artin image is therefore $y\mapsto y+1$. [A1, F3, F4, step 2.1] ∎
