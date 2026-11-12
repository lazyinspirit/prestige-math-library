---
id: lem-author-80e2d7bee57f-cochain-to-chain
kind: lemma
title: Reindexing cochains as chains
status: published
domain: mathematics
deps:
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-chain-complex-in-an-abelian-category
  - math:def-cochain-map
  - math:def-chain-map
  - math:def-cohomology-object-of-a-cochain-complex
  - math:def-homology-object-of-a-chain-complex
  - math:def-group
  - math:def-group-homomorphism
  - math:thm-abelian-groups-form-an-abelian-category
  - math:thm-a-chain-map-induces-a-well-defined-map-on-homology
dependency_roles:
  math:def-cochain-complex-in-an-abelian-category: mathematical-premise
  math:def-chain-complex-in-an-abelian-category: mathematical-premise
  math:def-cochain-map: mathematical-premise
  math:def-chain-map: mathematical-premise
  math:def-cohomology-object-of-a-cochain-complex: mathematical-premise
  math:def-homology-object-of-a-chain-complex: mathematical-premise
  math:def-group: mathematical-premise
  math:def-group-homomorphism: mathematical-premise
  math:thm-abelian-groups-form-an-abelian-category: mathematical-premise
  math:thm-a-chain-map-induces-a-well-defined-map-on-homology: mathematical-premise
formulation_deps:
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-chain-complex-in-an-abelian-category
  - math:def-cochain-map
  - math:def-chain-map
  - math:def-cohomology-object-of-a-cochain-complex
  - math:def-homology-object-of-a-chain-complex
  - math:def-group
  - math:def-group-homomorphism
  - math:thm-abelian-groups-form-an-abelian-category
argument_deps:
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-chain-complex-in-an-abelian-category
  - math:def-cochain-map
  - math:def-chain-map
  - math:def-cohomology-object-of-a-cochain-complex
  - math:def-homology-object-of-a-chain-complex
  - math:def-group
  - math:def-group-homomorphism
  - math:thm-abelian-groups-form-an-abelian-category
  - math:thm-a-chain-map-induces-a-well-defined-map-on-homology
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 0
---

## Statement
Let $C$ be a cochain complex of abelian groups, with group homomorphisms $d^q:C^q\to C^{q+1}$ satisfying $d^{q+1}d^q=0$ for every integer $q$. Define a chain complex $D$ by $D_n=C^{-n}$ and $\partial_n=d^{-n}$. Then $H_n(D)=H^{-n}(C)$ naturally in $C$. Here homology and cohomology mean the kernel of the outgoing differential modulo the image of the incoming differential.

## Facts & Assumptions
**Given:** A cochain complex $C$ as stated, indexed by all integers, with no boundedness assumption.

**Goal:** Construct $D$ and identify its homology naturally in cochain maps.

[F1] [[math:def-cochain-complex-in-an-abelian-category]] and [[math:def-chain-complex-in-an-abelian-category]] supply the complex conventions, specialized to abelian groups: cochain differentials raise degree and chain differentials lower degree, with consecutive differentials composing to zero.

[F2] [[math:def-cochain-map]] and [[math:def-chain-map]] supply the map conventions. For a cochain map $f:C\to C'$, the components satisfy $d_{C'}^q f^q=f^{q+1}d_C^q$; for a chain map $g:D\to D'$, they satisfy $\partial_n^{D'}g_n=g_{n-1}\partial_n^D$.

[F3] [[math:def-cohomology-object-of-a-cochain-complex]] and [[math:def-homology-object-of-a-chain-complex]] give the quotients $H^q(C)=\ker(d_C^q)/\operatorname{im}(d_C^{q-1})$ and $H_n(D)=\ker(\partial_n)/\operatorname{im}(\partial_{n+1})$ in abelian groups.

[F4] [[math:def-group]] defines abelian groups, and [[math:def-group-homomorphism]] defines their homomorphisms. By [[math:thm-abelian-groups-form-an-abelian-category]], the category of abelian groups and homomorphisms is abelian, with kernels and images the usual subgroups and cokernels the usual quotient groups. Thus the abelian-category interfaces in [F1]–[F3] apply in this setting.

[F5] [[math:thm-a-chain-map-induces-a-well-defined-map-on-homology]] supplies the unique map on homology induced by a chain map, characterized by commutation with the quotient maps from cycles. We apply it to the reindexed chain maps constructed in step 1.1.

## Proof
1.1 The map $\partial_n=d_C^{-n}$ has target $C^{-n+1}=D_{n-1}$, and the composite $\partial_{n-1}\partial_n=d_C^{-n+1}d_C^{-n}$ is zero. Thus the displayed groups and maps form a chain complex. For a cochain map $f:C\to C'$, put $g_n=f^{-n}$; then $\partial_n^{D'}g_n=d_{C'}^{-n}f^{-n}=f^{-n+1}d_C^{-n}=g_{n-1}\partial_n^D$, so $g$ is a chain map. Reindexing preserves identity maps and composition componentwise. [F1, F2, F4, given, construct]

2.1 In degree $n$, $\ker(\partial_n)=\ker(d_C^{-n})$ and $\operatorname{im}(\partial_{n+1})=\operatorname{im}(d_C^{-n-1})$. The latter subgroup lies in the former because $d_C^{-n}d_C^{-n-1}=0$, so both quotients are defined and equal. For $f:C\to C'$ as in step 1.1, $d_{C'}^{-n}f^{-n}x=f^{-n+1}d_C^{-n}x=0$ for every cycle $x$, and $f^{-n}d_C^{-n-1}y=d_{C'}^{-n-1}f^{-n-1}y$ for every $y$. Hence $f^{-n}$ preserves cycles and boundaries. By [F5] applied to the chain map of step 1.1, the induced homology map exists uniquely and is characterized by commutation with the cycle quotient maps; on both identical quotients it is therefore $[x]\mapsto[f^{-n}x]$. The identity on representatives therefore gives the claimed natural identification. [F1, F2, F3, F4, F5, given, step 1.1] ∎
