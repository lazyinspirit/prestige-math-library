---
id: lem-author-3af31ead36fb-local-rank
kind: lemma
title: Local ranks in the affine bundle correspondence
status: published
domain: mathematics
deps:
  - lem-affine-bundle-module-interface
  - math:def-axiom-of-choice
  - math:def-affine-scheme-spectrum
  - math:thm-structure-sheaf-affine-scheme
  - math:def-locally-free-sheaf-finite-rank
  - math:def-section-restriction-and-global-section
  - math:def-localisation-of-a-module
  - math:def-stalk-of-presheaf
  - math:def-associated-sheaf-module-affine-scheme
  - math:lem-associated-sheaf-stalk-localization
  - math:thm-stalk-structure-sheaf-prime-localization
dependency_roles:
  lem-affine-bundle-module-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-affine-scheme-spectrum: mathematical-premise
  math:thm-structure-sheaf-affine-scheme: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:def-section-restriction-and-global-section: mathematical-premise
  math:def-localisation-of-a-module: mathematical-premise
  math:def-stalk-of-presheaf: mathematical-premise
  math:def-associated-sheaf-module-affine-scheme: mathematical-premise
  math:lem-associated-sheaf-stalk-localization: mathematical-premise
  math:thm-stalk-structure-sheaf-prime-localization: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement
Assume the Axiom of Choice. If $E$ is a rank-$r$ vector bundle on $X=\operatorname{Spec}A$ and $P=\Gamma(X,E)$, then $P$ is finite projective and $P_{\mathfrak p}$ is free of rank $r$ over $A_{\mathfrak p}$ for every prime $\mathfrak p$. A vector bundle is a finite locally free sheaf, and rank $r$ means that its local free rank is $r$ at every point.

## Facts & Assumptions

**Given:** A commutative unital ring $A$, a rank-$r$ vector bundle $E$ on $X=\operatorname{Spec}A$, and the Axiom of Choice.

**Goal:** Identify the projectivity and local ranks of $P=\Gamma(X,E)$.

[A1] The Axiom of Choice is assumed for the affine equivalence and the existence and stalk-localization interfaces of the associated sheaf. No further choice is used in the local argument. [[math:def-axiom-of-choice]]

[F1] Associated sheaf and global sections give quasi-inverse equivalences between finite projective $A$-modules and finite locally free sheaves on $X$. In particular, $P=\Gamma(X,E)$ is finite projective and $\widetilde P\cong E$. Here finite projective means finitely generated with the lifting property through surjective module homomorphisms. [[lem-affine-bundle-module-interface]]

[F2] For every $A$-module $M$ and prime $\mathfrak p$, the associated sheaf has a canonical $A_{\mathfrak p}$-linear stalk isomorphism $(\widetilde M)_{\mathfrak p}\cong M_{\mathfrak p}$. Its hypotheses require only a commutative ring and the assumed Axiom of Choice. [[math:lem-associated-sheaf-stalk-localization]]

[F3] Global sections mean $\Gamma(X,E)=E(X)$. Write $P_{\mathfrak p}=(A\setminus\mathfrak p)^{-1}P$ and $A_{\mathfrak p}=(A\setminus\mathfrak p)^{-1}A$. The stalk $E_{\mathfrak p}$ consists of germs of local sections, equal when their representatives agree on a smaller neighbourhood. The associated sheaf $\widetilde M$ is the module sheaf with sections $M_f$ on distinguished opens and canonical localization restrictions. [[math:def-section-restriction-and-global-section]] [[math:def-localisation-of-a-module]] [[math:def-stalk-of-presheaf]] [[math:def-associated-sheaf-module-affine-scheme]]

[F4] The points of $\operatorname{Spec}A$ are its prime ideals; the localization construction supplies its structure sheaf $\mathcal O_X$, whose stalk at $\mathfrak p$ is canonically $A_{\mathfrak p}$. [[math:def-affine-scheme-spectrum]] [[math:thm-structure-sheaf-affine-scheme]] [[math:thm-stalk-structure-sheaf-prime-localization]]

[F5] A rank-$r$ vector bundle is a sheaf of $\mathcal O_X$-modules with a local trivialization $E|_U\cong\mathcal O_U^r$ near every point. The finite power sheaf has componentwise sections and restrictions; its chart rank is well-defined. [[math:def-locally-free-sheaf-finite-rank]]

## Proof

1.1 By the affine equivalence, $P=\Gamma(X,E)$ is finite projective and its associated sheaf is isomorphic to $E$. The assumed Axiom of Choice supplies the hypothesis of this equivalence. [A1, F1, F3, given]

2.1 Fix a prime $\mathfrak p$. A rank-$r$ local trivialization near $\mathfrak p$ induces $E_{\mathfrak p}\cong\mathcal O_{X,\mathfrak p}^r$: a tuple of finitely many germs has representatives on one common neighbourhood, obtained by intersecting their neighbourhoods, and equality is checked on a common smaller neighbourhood. This also covers $r=0$. By the structure-sheaf stalk identification, $E_{\mathfrak p}\cong A_{\mathfrak p}^r$. Taking germs of the isomorphism in step 1.1 and its inverse gives $(\widetilde P)_{\mathfrak p}\cong E_{\mathfrak p}$; applying the canonical module-sheaf stalk isomorphism yields $P_{\mathfrak p}\cong A_{\mathfrak p}^r$. Since the prime was arbitrary, all asserted local ranks follow. If $X$ is empty there are no primes to check, and step 1.1 still applies. AC enters through the cited interfaces in [A1]; the germ comparison uses only finite intersections. [A1, F2, F3, F4, F5, given, step 1.1] ∎
