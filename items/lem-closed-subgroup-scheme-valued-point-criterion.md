---
id: lem-closed-subgroup-scheme-valued-point-criterion
kind: lemma
title: Closed subgroup schemes are detected on all algebra-valued points
deps:
- def-group-scheme-over-a-field
- def-morphism-and-closed-subgroup-scheme
- thm-affine-closed-immersions-quotient-rings
- thm-fibre-products-of-schemes-exist
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: J. S. Milne, Algebraic Groups (corrected 2022 printing)
    url: https://www.jmilne.org/math/Books/iAG2022.pdf
    locator: Chapter1 Definition1.1–1.3 and sections1.4–1.5, printed pp.6–8 (PDF17–19); complete definitions and all-algebra point criterion read.
  - title: The Stacks Project, complete Groupoid Schemes chapter
    url: https://stacks.math.columbia.edu/download/groupoids.pdf
    locator: §4 Definitions4.1/4.3/4.5 and Lemmas4.2/4.4, tags022S/022T/047D/0G8L/047E, printed pp.4–5; full statement/proof text read.
status: draft
origin: pipeline
proof_strategy: direct
---
## Statement

Let $k$ be a field, $G$ a group scheme of finite type over $k$, and $j:H\hookrightarrow G$ a closed subscheme. Then $H$ has the unique induced structure of a closed subgroup scheme if and only if $H(R)\subseteq G(R)$ is a subgroup for every commutative unital $k$-algebra $R$. Equivalently, the identity $e_G$, multiplication restricted to $H\times_kH$, and inverse restricted to $H$ all factor through $H$. No reducedness, smoothness, or algebraic closedness hypothesis is imposed.

## Facts & Assumptions

[F1] The group-object identities and the definitions of homomorphism and closed subgroup scheme are those of [[def-group-scheme-over-a-field]] and [[def-morphism-and-closed-subgroup-scheme]]. A closed immersion has unique factorizations through it.

[F2] A closed subscheme of $\operatorname{Spec}A$ is $\operatorname{Spec}(A/I)$, and fibre products of schemes exist. ([[thm-affine-closed-immersions-quotient-rings]], [[thm-fibre-products-of-schemes-exist]])

[F3] We assume the Axiom of Choice, inherited through the affine closed-immersion quotient theorem in [F2]. Its proof uses prime-ideal detection and nilradical detection to obtain affine quotient presentations. ([[def-axiom-of-choice]])

## Proof

**Given:** AC, $k$, $G$, $j:H\hookrightarrow G$ as above.

1.1 If $H$ is a closed subgroup scheme, its structure morphisms give a group law on $H(R)$ for every $R$ and its inclusion in $G(R)$ preserves the three operations by [F1]. Thus $H(R)$ is a subgroup. Conversely suppose every $H(R)$ is a subgroup. Taking $R=k$ shows that the identity $e_G\in G(k)$ has a factor $e_H:\operatorname{Spec}k\to H$. [F1, given]

2.1 Cover $H\times_kH$ by affine opens $U=\operatorname{Spec}R$. The restrictions of the two projections to $U$ are points $a,b\in H(R)$. By hypothesis their product in $G(R)$ lies in $H(R)$, so $m_G\circ(j\times j)|_U$ factors through $H$. The factors agree on every overlap by uniqueness through the closed immersion and hence glue to $m_H:H\times_kH\to H$. Similarly, on every affine open $\operatorname{Spec}R\subset H$, its inclusion is a point of $H(R)$, whose inverse in $G(R)$ belongs to $H(R)$. These factors glue uniquely to $i_H:H\to H$. This proves all three factorization assertions using universal affine points, rather than only field-valued points. [F1, F2, step 1.1, construct]

3.1 Compose the associativity, identity and inverse identities for these factors with $j$. They become precisely the corresponding identities in $G$ by construction. Since $j$ is a monomorphism, the identities hold in $H$. The closed scheme $H$ is finite type over $k$: a finite affine cover $\operatorname{Spec}A_i$ of the finite-type $G$ pulls back by [F2] to $\operatorname{Spec}(A_i/I_i)$, a finite affine cover with finitely generated $k$-algebras. Thus $H$ is a group scheme of finite type and $j$ a group-scheme morphism by [F1]. Uniqueness of every factor proves uniqueness of its group law. The converse for the equivalent factorization criterion follows from exactly the same transfer of identities. AC is inherited through the affine quotient presentation in [F2], as recorded in [F3]. [F1, F2, F3, step 2.1, algebra] ∎
