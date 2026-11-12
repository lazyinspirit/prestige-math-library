---
id: lem-codimension-two-picard-restriction
kind: lemma
title: Line bundles are detected off codimension two
status: published
domain: mathematics
deps:
  - lem-codimension-two-extension
  - math:def-picard-group-scheme
  - math:def-axiom-of-choice
  - math:def-scheme
  - math:def-open-immersion-schemes
  - math:def-irreducible-component-scheme
  - math:def-restriction-sheaf-open-subspace
  - math:def-direct-image-sheaf
  - math:def-sheaf-hom
  - math:def-sheaf-on-topological-space
  - math:def-module-on-ringed-space
  - math:def-sheaf-tensor-product
  - math:def-generic-point-irreducible-closed-subset
  - math:def-noetherian-ring-and-module
  - math:def-integral-closure-and-integrally-closed-domain
  - math:def-group-homomorphism
  - math:def-kernel-and-image-of-group-homomorphism
  - math:thm-group-homomorphism-injective-iff-trivial-kernel
dependency_roles:
  lem-codimension-two-extension: mathematical-premise
  math:def-picard-group-scheme: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-open-immersion-schemes: mathematical-premise
  math:def-irreducible-component-scheme: mathematical-premise
  math:def-restriction-sheaf-open-subspace: mathematical-premise
  math:def-direct-image-sheaf: mathematical-premise
  math:def-sheaf-hom: mathematical-premise
  math:def-sheaf-on-topological-space: mathematical-premise
  math:def-module-on-ringed-space: mathematical-premise
  math:def-sheaf-tensor-product: mathematical-premise
  math:def-generic-point-irreducible-closed-subset: mathematical-premise
  math:def-noetherian-ring-and-module: mathematical-premise
  math:def-integral-closure-and-integrally-closed-domain: mathematical-premise
  math:def-group-homomorphism: mathematical-premise
  math:def-kernel-and-image-of-group-homomorphism: mathematical-premise
  math:thm-group-homomorphism-injective-iff-trivial-kernel: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 3
---

## Statement
Assume the Axiom of Choice. Let $X$ be a noetherian normal scheme and let $j:U\hookrightarrow X$ be an open immersion whose image contains every point of codimension at most one in its irreducible component. Then restriction $\operatorname{Pic}(X)\to\operatorname{Pic}(U)$ is injective. More precisely, a trivialization $\mathcal O_U\xrightarrow{\sim}\mathcal L|_U$ of a line bundle $\mathcal L$ determines a section of $\mathcal L|_U$ and an inverse section of its dual; both extend uniquely to $X$, and their evaluation product is $1$.

A noetherian normal scheme is a scheme with a finite cover by spectra of noetherian rings and with all local rings integrally closed domains. The codimension of a point in its irreducible component is the supremum of the lengths of chains of strict specializations from the component's generic point to that point. A line bundle is an $\mathcal O_X$-module locally isomorphic to $\mathcal O_X$; its dual is $\mathcal L^\vee=\mathcal Hom_{\mathcal O_X}(\mathcal L,\mathcal O_X)$. The Picard group consists of isomorphism classes of line bundles, with tensor product as its operation and $[\mathcal O_X]$ as identity. Restriction sends a class to the class of its restriction.

## Statement references

[[lem-codimension-two-extension]]

[[math:def-picard-group-scheme]]

## Facts & Assumptions

[F1] Under the stated hypotheses and the Axiom of Choice, restriction is an isomorphism of sheaves of rings $\mathcal O_X\xrightarrow{\sim}j_*\mathcal O_U$ ([[lem-codimension-two-extension]]).

[F2] The Picard group has the stated tensor-product law, identity and dual inverses ([[math:def-picard-group-scheme]]).

[F3] Schemes, open immersions and irreducible components have their usual meanings ([[math:def-scheme]], [[math:def-open-immersion-schemes]], [[math:def-irreducible-component-scheme]]). A generic point of a component has that component as its closure ([[math:def-generic-point-irreducible-closed-subset]]). Here a strict specialization from $x$ to $y$ means $y\in\overline{\{x\}}$ and $y\ne x$; codimension and normality are as defined in the Statement. Noetherian commutative rings and integrally closed domains are used in precisely the senses of [[math:def-noetherian-ring-and-module]] and [[math:def-integral-closure-and-integrally-closed-domain]].

[F4] An $\mathcal O_X$-module is a sheaf of modules with restriction-compatible scalar multiplication; its morphisms are sectionwise linear sheaf morphisms ([[math:def-module-on-ringed-space]]). For an open inclusion, $(\mathcal M|_U)(W)=\mathcal M(W)$ on opens $W\subseteq U$, and $(j_*\mathcal N)(V)=\mathcal N(V\cap U)$ on opens $V\subseteq X$ ([[math:def-restriction-sheaf-open-subspace]], [[math:def-direct-image-sheaf]]). The internal Hom sheaf has sections on $V$ equal to module-sheaf morphisms between the restrictions to $V$; its restriction maps restrict morphisms ([[math:def-sheaf-hom]]). Thus $(\mathcal L^\vee)|_U$ identifies with the dual of $\mathcal L|_U$, and evaluation is evaluation of these local morphisms.

[F5] Compatible local sections of a sheaf glue uniquely, and equality of sections can be checked on an open cover ([[math:def-sheaf-on-topological-space]]). In particular, inverse sheaf morphisms defined on an open cover glue when they agree on overlaps: apply these axioms to their values on each local section.

[F6] The tensor-product sheaf of module sheaves is the sheafification of their sectionwise tensor-product presheaf ([[math:def-sheaf-tensor-product]]). Its local construction restricts to the same construction on an open subspace, so the restriction of a tensor product is canonically the tensor product of the restrictions. The Picard-group operation in [F2] uses this tensor product.

[F7] A group homomorphism preserves products ([[math:def-group-homomorphism]]). Its kernel consists of the elements mapping to the identity ([[math:def-kernel-and-image-of-group-homomorphism]]). A group homomorphism is injective if and only if its kernel consists only of the identity of its domain ([[math:thm-group-homomorphism-injective-iff-trivial-kernel]]).

[A1] The Axiom of Choice is assumed as required by [F1] ([[math:def-axiom-of-choice]]).

## Proof

**Given:** $X$, $U$ and $j$ as in the statement, the Axiom of Choice, and a line bundle $\mathcal L$ on $X$.

**Goal:** Extend a trivialization on $U$ as stated and prove injectivity of restriction on Picard groups.

1.1 For any line bundle $\mathcal M$ on $X$, the natural restriction morphism $\mathcal M\to j_*(\mathcal M|_U)$ is an isomorphism. Indeed, on every open set $V$ where $\mathcal M\cong\mathcal O_V$, it identifies with the restriction of the isomorphism in [F1] to $V$. Such opens cover $X$, and a morphism of sheaves that is an isomorphism locally is an isomorphism: its local inverses agree on overlaps and glue. In particular, sections of $\mathcal M|_U$ extend uniquely to sections of $\mathcal M$ on $X$. The dual $\mathcal L^\vee$ is also a line bundle, since the dual of a local copy of $\mathcal O_X$ is a local copy of $\mathcal O_X$. [F1, F4, F5, A1, given]

2.1 Suppose $\phi:\mathcal O_U\xrightarrow{\sim}\mathcal L|_U$ is a trivialization. Set $s_U=\phi(1)$ and let $t_U$ be the section of $\mathcal L^\vee|_U$ corresponding to $\phi^{-1}$; thus $t_U(s_U)=1$. By step 1.1, these sections extend uniquely to $s\in\Gamma(X,\mathcal L)$ and $t\in\Gamma(X,\mathcal L^\vee)$. The evaluation $t(s)$ restricts to $1$ on $U$, so [F1] implies $t(s)=1$ on $X$. Locally write $s=a e$ and $t=b e^\vee$ in a basis $e$ and its dual. Then $ba=1$, so the maps $\mathcal O_X\to\mathcal L$, $1\mapsto s$, and $\mathcal L\to\mathcal O_X$ defined by $t$ are inverse isomorphisms locally, hence globally. [F1, F4, F5, step 1.1, construct]

3.1 Restriction respects tensor products and the identity by their local constructions, so it is a homomorphism of the Picard groups in [F2]. If a class restricts to the identity, its representative admits a trivialization on $U$; step 2.1 makes that representative trivial on $X$. Thus the kernel is trivial, and [F7] makes the restriction homomorphism injective. [F2, F5, F6, F7, step 2.1] ∎
