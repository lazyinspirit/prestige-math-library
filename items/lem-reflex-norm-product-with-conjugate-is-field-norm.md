---
id: lem-reflex-norm-product-with-conjugate-is-field-norm
kind: lemma
title: "A reflex norm times its conjugate is the reflex-field norm"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-cm-algebra-and-cm-type
  - def-reflex-norm-associated-to-a-cm-type
  - lem-cm-type-module-exists-uniquely
  - thm-dedekind-linear-independence-of-characters
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Complex Multiplication, Chapter I §1"
      url: "https://www.jmilne.org/math/CourseNotes/CM.pdf"
      locator: "Remark 1.24(b), formula (10), printed p. 16."
    - title: "J. S. Milne, The Fundamental Theorem of Complex Multiplication"
      url: "https://arxiv.org/pdf/0705.3446"
      locator: "§1, reflex norm formula (3), printed p. 3."
verification: {}
---

## Statement

Let $(E,\Phi)$ be a CM pair with reflex field $E^r$. For every commutative $\mathbb Q$-algebra $R$ and $u\in(E^r\otimes_{\mathbb Q}R)^\times$, the reflex norm satisfies
$$N_\Phi(u)\,\overline{N_\Phi(u)}=N_{E^r/\mathbb Q}(u)$$
in $(E\otimes_{\mathbb Q}R)^\times$, where the field norm on the right is embedded diagonally as a scalar. The same identity holds componentwise for finite idèles.

## Statement references

[J. S. Milne, *Complex Multiplication*, Remark 1.24(b), formula (10)](https://www.jmilne.org/math/CourseNotes/CM.pdf)

## Facts & Assumptions

**Given:** A CM pair $(E,\Phi)$, its reflex field $E^r$, and $u\in(E^r\otimes R)^\times$.

[F1] The reflex norm is the determinant of the reflex-field action on the CM-type trace module. [[def-reflex-norm-associated-to-a-cm-type]]

[F2] The CM type $\Phi$ and its conjugate $\bar\Phi$ partition all embeddings of $E$ into a conjugate pair. [[def-cm-algebra-and-cm-type]]

[F3] The trace modules for $\Phi$ and $\bar\Phi$ exist uniquely over $E^r$. [[lem-cm-type-module-exists-uniquely]]

## Proof

1.1 Let $W=V_\Phi\oplus V_{\bar\Phi}$. After extending scalars to a field containing all embeddings of $E$, [F2] and [F3] identify $W$ with the direct sum of one-dimensional embedding spaces, one for every embedding of $E$. The algebra $E\otimes E^r$ splits into the same coordinate factors, so $W$ has dimension one on each factor and is the regular rank-one $E\otimes E^r$-module. [F2, F3, given, algebra]

2.1 On the regular module, $u$ acts by multiplication in the $E^r$ tensor factor; its determinant as an $E$-linear map is the field norm $N_{E^r/\mathbb Q}(u)$ embedded in $E$. Twisting the $E$-action on $V_\Phi$ by the CM involution changes its trace character from $\Phi$ to $\bar\Phi$; by [F3] the resulting module is $V_{\bar\Phi}$, and its determinant is $\overline{N_\Phi(u)}$. Since determinants multiply on direct sums, the determinant on $W$ is $N_\Phi(u)\overline{N_\Phi(u)}$, proving the formula. Scalar extension gives it for every $R$, and the same local determinant gives the finite-idèle identity. [F1, F3, step 1.1, given, algebra] ∎

