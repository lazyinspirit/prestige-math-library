---
dependency_level: 0
id: lem-deligne-irreducible-comparison-and-frobenius-scalar
kind: lemma
title: "Irreducible comparison lines and the Frobenius scalar"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-schurs-lemma-for-modules
  - cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Fouvry, Kowalski and Michel, Trace functions over finite fields and applications, Dec3 2014 draft"
      url: "https://people.math.ethz.ch/~kowalski/elements.pdf"
      locator: "Sections3.2-3.3 and Proposition4.1.6; abstract representation calculation only"
---

## Statement

Let $E$ be algebraically closed of characteristic zero. Let $H$ be a group and let $V_1,V_2$ be nonzero finite-dimensional irreducible $H$-representations. Then $\operatorname{Hom}_H(V_2,V_1)$ is zero unless they are isomorphic, and has dimension one if they are isomorphic. Suppose automorphisms $F_i$ of $V_i$ implement the same automorphism $\sigma$ of $H$, namely $F_i\rho_i(h)F_i^{-1}=\rho_i(\sigma h)$. In the isomorphic case, fix an $H$-isomorphism $A:V_2\to V_1$. There is $\lambda\in E^\times$ with
$$F_1=\lambda A F_2 A^{-1},$$
and the action $T\mapsto F_1TF_2^{-1}$ on $\operatorname{Hom}_H(V_2,V_1)$ has eigenvalue $\lambda$. Under a field embedding $\iota:E\hookrightarrow\mathbb C$, if for some integer $d\ge1$ and $h\in H$ both $F_i^d\rho_i(h)$ have all eigenvalues of absolute value one, then $|\iota(\lambda)|=1$.

## Facts & Assumptions

**Given:** The specified irreducible representations and, in the second assertion, the automorphisms, isomorphism and spectral condition.

[F1] A nonzero map between simple modules is an isomorphism. [[thm-schurs-lemma-for-modules]]

[F2] Endomorphisms of a finite-dimensional irreducible representation over an algebraically closed field are scalars. [[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]]

## Proof

1.1 View representations as modules over $E[H]$. Kernels and images of intertwiners are invariant, so [F1] shows that a nonzero intertwiner is an isomorphism. In the isomorphic case, $T\mapsto A^{-1}T$ identifies the intertwiner space with $\operatorname{End}_H(V_2)=E$ by [F2]. This proves both alternatives, with no semisimplicity assumption on arbitrary representations. [given, F1, F2, algebra]

2.1 The automorphism-implementation identities show directly that $(AF_2A^{-1})^{-1}F_1$ commutes with every $\rho_1(h)$. By [F2] it is scalar, necessarily nonzero since both factors are invertible. This gives the displayed identity. Substitution gives $F_1AF_2^{-1}=\lambda A$, so the indicated line action has eigenvalue $\lambda$. [given, F2, step 1.1, algebra]

3.1 If $r=\dim V_i$, the displayed identity also gives $F_1^d\rho_1(h)=\lambda^d A(F_2^d\rho_2(h))A^{-1}$. Taking determinants and applying $\iota$, the spectral hypotheses imply that both determinant absolute values are one. Hence $|\iota(\lambda)|^{dr}=1$. Since $d,r\ge1$, it follows that $|\iota(\lambda)|=1$. This conclusion uses no identification of sheaves with representations or arithmetic fundamental-group exactness; those are separate interfaces for geometric applications. [given, step 2.1, algebra] ∎
