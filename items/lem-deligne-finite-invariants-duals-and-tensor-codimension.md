---
dependency_level: 0
id: lem-deligne-finite-invariants-duals-and-tensor-codimension
kind: lemma
title: "Finite-group invariant dimensions, duals and tensor codimensions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-tensor-product-of-modules-by-generators-and-relations
  - thm-tensor-product-basis-from-bases
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Fouvry, Kowalski and Michel, Trace functions over finite fields and applications, Dec3 2014 draft"
      url: "https://people.math.ethz.ch/~kowalski/elements.pdf"
      locator: "Chapter3, invariant and tensor formalism; direct finite-dimensional reconstruction"
---

## Statement

Let $E$ be a characteristic-zero field, $G$ a finite group, and $V,W$ finite-dimensional $E$-representations of dimensions $m,n$. Then $\dim(V^\vee)^G=\dim V^G$, and
$$\operatorname{codim}(V\otimes W)^G\le n\operatorname{codim}V^G+m\operatorname{codim}W^G.$$
Here the dual action is contragredient. The codimension inequality also holds for arbitrary groups; only the dual equality uses finiteness.

## Facts & Assumptions

**Given:** The field, group and finite-dimensional representations in the Statement.

[F1] Tensor products are defined by bilinearity, and tensors of pairs of basis vectors form a basis. [[def-tensor-product-of-modules-by-generators-and-relations]] [[thm-tensor-product-basis-from-bases]]

## Proof

1.1 Set $P=|G|^{-1}\sum_{g\in G}\rho_V(g)$. The integer $|G|$ is nonzero in $E$. Permuting the summation by any $h\in G$ gives $\rho_V(h)P=P$; on $V^G$, $P$ is the identity. Thus $P$ is a projection with image $V^G$. Its dual is the average of the inverse-transpose matrices, since inversion permutes $G$, and is the analogous projection on $(V^\vee)^G$. A matrix and its transpose have the same rank (their nonzero minors coincide after transposition), so the two invariant dimensions coincide. This includes $V=0$. [given, algebra]

2.1 Put $a=\dim V^G$ and $b=\dim W^G$. Extend bases of the invariant subspaces to bases of $V,W$. By [F1], the $ab$ tensors of invariant basis vectors are linearly independent and fixed by $G$. Consequently the left side of the asserted inequality is at most $mn-ab$. Since $a\le m$ and $b\le n$, $$n(m-a)+m(n-b)-(mn-ab)=(m-a)(n-b)\ge0.$$ This proves the inequality. The same argument works without averaging or finiteness of $G$, including zero-dimensional factors. [F1, given, algebra] ∎
