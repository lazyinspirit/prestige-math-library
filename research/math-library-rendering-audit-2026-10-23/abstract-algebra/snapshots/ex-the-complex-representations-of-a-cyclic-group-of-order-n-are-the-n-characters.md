---
id: ex-the-complex-representations-of-a-cyclic-group-of-order-n-are-the-n-characters
kind: example
title: "Over $\\mathbb{C}$, a cyclic group of order $n$ has exactly $n$ irreducible representations up to equivalence, represented by the characters $g\\mapsto \\lambda$ with $\\lambda^n=1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars, cor-every-complex-polynomial-splits-into-linear-factors, def-generated-subgroup, def-roots-of-unity-in-a-field, def-splitting-field-for-a-finite-group, thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group, thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional, thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.3"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Example

Let $G=\langle g\rangle$ be a cyclic group of order $n$. Over $\mathbb C$, the
irreducible representations of $G$ are all one-dimensional, and up to
equivalence they are represented by the $n$ degree-one characters
$$\chi_\lambda(g^m)=\lambda^m\qquad(\lambda^n=1).$$

## Facts & Assumptions

**Given:** A cyclic group $G=\langle g\rangle$ of order $n$.

[L1] Over an algebraically closed field, every endomorphism of an irreducible representation is scalar ([[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]]).

[L2] A splitting field for $G$ is a field over which every irreducible representation has scalar endomorphism ring, and then every irreducible representation of a finite abelian group is one-dimensional ([[def-splitting-field-for-a-finite-group]], [[thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]]).

[L3] Equivalence classes of degree-one representations are exactly homomorphisms to the unit group $\mathbb C^\times$, and each such homomorphism has the normalized representative on $\mathbb C$ ([[thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group]]).

[L4] Every nonconstant complex polynomial splits, and when $t^n-1$ splits over a field of characteristic not dividing $n$, the $n$-th roots of unity form a cyclic group of order exactly $n$ ([[cor-every-complex-polynomial-splits-into-linear-factors]], [[thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity]], [[def-roots-of-unity-in-a-field]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the field $\mathbb C$ satisfies the scalar-endomorphism condition of [L2], so it is a splitting field for the finite group $G$. Since $G$ is abelian, [L2] makes every irreducible complex representation of $G$ one-dimensional. [L1, L2, given]

2.1 By [L3], every irreducible representation of $G$ is equivalent to a normalized degree-one representation on $\mathbb C$, hence to a homomorphism $\chi:G \to \mathbb C^\times$. Because $G=\langle g\rangle$, such a homomorphism is determined by the value $\lambda=\chi(g)$, and the relation $g^n=e$ forces $\lambda^n=1$. Conversely, if $\lambda^n=1$, then $\chi_\lambda(g^m):=\lambda^m$ is well defined and multiplicative. [step 1.1, L3, given, algebra]

3.1 By [L4], the polynomial $t^n-1$ splits over $\mathbb C$ and has exactly $n$ distinct roots there, namely the elements of $\mu_n(\mathbb C)$. So step 2.1 produces exactly $n$ equivalence classes of irreducible complex representations, represented by the normalized characters $\chi_\lambda$ with $\lambda \in \mu_n(\mathbb C)$. [step 2.1, L4] ∎
