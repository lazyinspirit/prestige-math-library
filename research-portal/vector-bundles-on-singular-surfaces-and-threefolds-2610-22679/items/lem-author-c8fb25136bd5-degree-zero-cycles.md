---
id: lem-author-c8fb25136bd5-degree-zero-cycles
kind: lemma
title: Degree-zero Bloch cycles are ordinary cycles
status: published
domain: mathematics
deps:
  - math:def-fibre-product-schemes-universal-property
  - math:def-free-abelian-group
  - def-bloch-higher-cycle-complex
  - math:def-axiom-of-choice
  - math:lem-evaluation-ideal-is-maximal
  - math:thm-first-isomorphism-theorem-rings
  - math:thm-affine-scheme-ring-anti-equivalence
dependency_roles:
  math:def-fibre-product-schemes-universal-property: mathematical-premise
  math:def-free-abelian-group: mathematical-premise
  def-bloch-higher-cycle-complex: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:lem-evaluation-ideal-is-maximal: mathematical-premise
  math:thm-first-isomorphism-theorem-rings: mathematical-premise
  math:thm-affine-scheme-ring-anti-equivalence: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 5
formulation_deps:
  - math:def-fibre-product-schemes-universal-property
  - math:def-free-abelian-group
  - def-bloch-higher-cycle-complex
  - math:def-axiom-of-choice
  - math:lem-evaluation-ideal-is-maximal
  - math:thm-first-isomorphism-theorem-rings
  - math:thm-affine-scheme-ring-anti-equivalence
argument_deps:
  - math:def-fibre-product-schemes-universal-property
  - math:def-free-abelian-group
  - def-bloch-higher-cycle-complex
  - math:def-axiom-of-choice
  - math:lem-evaluation-ideal-is-maximal
  - math:thm-first-isomorphism-theorem-rings
  - math:thm-affine-scheme-ring-anti-equivalence
---

## Statement
Assume the Axiom of Choice, retaining the foundational premise of the specified Bloch cycle construction.

Let $k$ be a field, $X$ a smooth finite-type $k$-scheme, and $r\geq 0$. Write $Z^r(X)$ for the free abelian group on integral closed subschemes of codimension $r$ in $X$, with codimension measured on the ambient irreducible component containing the generic point. All products are over $S=\operatorname{Spec}k$. Then the canonical identification $X\times_S\Delta^0\cong X$ gives $z^r(X,0)=Z^r(X)$ after transporting generators along this identification.

## Statement references
[[def-bloch-higher-cycle-complex]]

[[math:def-fibre-product-schemes-universal-property]]

[[math:def-free-abelian-group]]

[[math:def-axiom-of-choice]]

[[math:lem-evaluation-ideal-is-maximal]]

[[math:thm-first-isomorphism-theorem-rings]]

[[math:thm-affine-scheme-ring-anti-equivalence]]

## Facts & Assumptions
**Given:** The Axiom of Choice and $k$, $X$, $r$ and $S$ as in the statement.

**Goal:** Identify the two free abelian groups on their generators.

[F1] The definition of the Bloch complex uses integral closed codimension-$r$ subschemes meeting all nonempty coordinate faces in codimension $r$. [[def-bloch-higher-cycle-complex]]

[F2] For $f:X\to S$, the fibre product $P=X\times_S S$ has projections $p:P\to X$ and $q:P\to S$ with $fp=q$. For each compatible pair of maps into $X$ and $S$, there is a unique map into $P$ with those projections. [[math:def-fibre-product-schemes-universal-property]]

[F3] A function from the generator set of a free abelian group into an abelian group extends uniquely to a group homomorphism. [[math:def-free-abelian-group]]

[A1] The specified Bloch complex and its admissible face construction are used under their stated Axiom of Choice. This premise is inherited from that construction; the subsequent calculation does not assert that Choice is necessary for its formal algebraic conclusion. [[math:def-axiom-of-choice]]

[F4] For a field $k$, the evaluation map $k[t_0]\to k$ at $1$ has kernel $(t_0-1)$. It is surjective because it sends each constant polynomial to that same scalar. The ring first-isomorphism theorem consequently induces the $k$-algebra isomorphism $k[t_0]/(t_0-1)\xrightarrow{\sim}k$, $[f]\mapsto f(1)$. [[math:lem-evaluation-ideal-is-maximal]] [[math:thm-first-isomorphism-theorem-rings]]

[F5] The contravariant affine scheme–ring equivalence sends a ring isomorphism to an affine-scheme isomorphism, respects identities and composition, and identifies structure morphisms with the corresponding coefficient maps. Thus the $k$-algebra isomorphism of [F4] identifies the displayed simplex with $\operatorname{Spec}k$ as a $k$-scheme. [[math:thm-affine-scheme-ring-anti-equivalence]]


## Proof
1.1 By [F1], $\Delta^0=\operatorname{Spec}(k[t_0]/(t_0-1))$. Apply [F4] with the single evaluation coordinate $1\in k$: constants make evaluation surjective, its kernel is $(t_0-1)$, and the induced quotient isomorphism fixes $k$. By [F5] this is a canonical $k$-scheme isomorphism $\Delta^0\cong S$. Put $P=X\times_S S$ and let $f:X\to S$ be the structure map. By [F2] the compatible pair $(\operatorname{id}_X,f)$ gives $u:X\to P$ with $pu=\operatorname{id}_X$ and $qu=f$. The maps $up$ and $\operatorname{id}_P$ have the same projections $p$ and $q=fp$, so uniqueness gives $up=\operatorname{id}_P$. Hence $p$ is the canonical isomorphism $X\times_S\Delta^0\cong X$. The only nonempty coordinate face of $\Delta^0$ is itself; after this identification every integral closed codimension-$r$ subscheme of $X$ satisfies the face condition, which imposes no further restriction. [A1, F1, F2, F4, F5]

2.1 Consequently the generator sets of $z^r(X,0)$ and $Z^r(X)$ are identified bijectively, with the codimension convention of the statement. By [F3] this bijection and its inverse extend uniquely to group homomorphisms. Their composites agree with the identity on every generator, so uniqueness makes the composites identity homomorphisms. This is the asserted canonical identification of free abelian groups. [F3, step 1.1] ∎
