---
id: lem-zero-scheme-of-line-bundle-section
kind: lemma
title: "A section of an invertible sheaf has a canonical zero subscheme"
status: draft
origin: pipeline
deps:
  - def-module-on-ringed-space
  - def-section-restriction-and-global-section
  - thm-localisation-commutes-with-quotients
  - thm-gluing-affine-schemes
  - lem-morphism-schemes-local-on-source-target
  - lem-quotient-spectrum-map-is-closed
  - def-closed-immersion-schemes
  - lem-closed-immersion-local-on-target
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Vakil, Foundations of Algebraic Geometry Classes 51–52, §3.9 Corollary 3.9, p. 10"
      url: "https://virtualmath1.stanford.edu/~vakil/0506-216/216class5152.pdf"
---

## Statement

Let $X$ be a scheme, let $L$ be an invertible (locally free of rank one)
$\mathcal O_X$-module, and let $s\in\Gamma(X,L)$. Choose an affine open cover
$U_i=\operatorname{Spec}A_i$ on which $L$ has a generator $e_i$, and write
$s|_{U_i}=f_i e_i$. The affine schemes
$\operatorname{Spec}(A_i/(f_i))$ glue, with their quotient maps, to a closed
subscheme $Z(s)\hookrightarrow X$ that is canonical up to unique isomorphism
over $X$ and independent of the chosen trivializations. The construction uses
the ideal $(f_i)$ itself, with no nonzerodivisor or reducedness hypothesis;
it retains nilpotents and includes the empty and whole zero schemes.

## Facts & Assumptions

**Given:** A scheme $X$, an invertible $\mathcal O_X$-module $L$, and a global
section $s\in\Gamma(X,L)$.

[F1] An $\mathcal O_X$-module is a sheaf of modules compatible with restriction
of scalars ([[def-module-on-ringed-space]]).

[F2] A global section restricts along every open inclusion, and successive
restrictions agree ([[def-section-restriction-and-global-section]]).

[F3] Localizing a quotient by an ideal canonically gives the quotient by the
localized ideal, including when the localization is zero
([[thm-localisation-commutes-with-quotients]]).

[F4] For an ideal $I\trianglelefteq R$, $\operatorname{Spec}(R/I)$ is
homeomorphic to the closed subset $V(I)\subseteq\operatorname{Spec}R$
([[lem-quotient-spectrum-map-is-closed]]).

[F5] Affine schemes with compatible open-overlap isomorphisms satisfying the
cocycle condition glue to a scheme, uniquely up to unique chart-compatible
isomorphism ([[thm-gluing-affine-schemes]]).

[F6] Compatible scheme morphisms on an open cover glue uniquely
([[lem-morphism-schemes-local-on-source-target]]).

[F7] A morphism is a closed immersion when its underlying map is a homeomorphism
onto a closed subset and its structure-sheaf map is surjective
([[def-closed-immersion-schemes]]).

[F8] Closed immersions can be checked on the inverse images of an open cover of
the target ([[lem-closed-immersion-local-on-target]]).

## Proof

**Proof technique:** construct the local quotients and glue them using the
transition units of the line bundle.

1.1 Since $L$ is locally free of rank one, choose an affine trivializing open cover $U_i=\operatorname{Spec}A_i$ with generator $e_i$. By [F1] and [F2], there is a unique $f_i\in A_i$ such that $s|_{U_i}=f_i e_i$. Put $Z_i=\operatorname{Spec}(A_i/(f_i))$ and let $q_i:Z_i\to U_i$ be the quotient morphism. Its image is $V(f_i)$ by [F4], and it is a homeomorphism onto that image. On each distinguished open $D(g)\subseteq U_i$, [F3] identifies the restricted quotient with the quotient map $A_{i,g}\to A_{i,g}/(f_i)$; thus the map of structure sheaves is surjective locally. Hence $q_i$ is a closed immersion by [F7]. If $f_i$ is a unit then $A_i/(f_i)=0$ and $Z_i$ is empty; if $f_i=0$ then $Z_i=U_i$. [F1, F2, F3, F4, F7, given, choose]

2.1 On $U_i\cap U_j$, the two generators differ by an invertible function: $e_i=u_{ij}e_j$. Comparing the expressions for the same restricted section gives $f_j=u_{ij}f_i$, so the generated ideals agree. Refine each overlap by affine opens $W=\operatorname{Spec}R$. On such a $W$, both local zero schemes restrict to $\operatorname{Spec}(R/(f_i|_W))$ and $\operatorname{Spec}(R/(f_j|_W))$; equality of the ideals gives the canonical identity-on-$R$ isomorphism. On distinguished opens of $W$, [F3] identifies the restrictions with the corresponding localized quotients. [F1, F2, F3, step 1.1, algebra]

3.1 These overlap isomorphisms are compatible when further restricted: each acts on residue classes by the identity on functions from $\mathcal O_X$. They therefore satisfy the identity and cocycle conditions, including on triple overlaps. By [F5] the $Z_i$ glue to a scheme $Z$, with each $Z_i$ an open subscheme of $Z$. Their maps $q_i$ to the open subsets $U_i\subseteq X$ agree on overlaps, so [F6] glues them to a unique morphism $q:Z\to X$. [F5, F6, step 2.1]

4.1 The restriction $q^{-1}(U_i)\to U_i$ is $q_i$, a closed immersion by step 1.1. The $U_i$ cover $X$, so [F8] implies that $q$ is a closed immersion. For any other affine trivializing cover, refine both covers by affine opens. On each such open the two equations differ by a unit, hence define the same quotient ring and the same morphism to $X$. The uniqueness in [F5] and [F6] then gives a unique isomorphism over $X$ between the two constructions. [F5, F6, F8, step 1.1, step 2.1, step 3.1]

5.1 No radical or regularity condition entered the construction: it quotients by $(f_i)$, even when $f_i$ is a zero divisor or nilpotent. For example, on $X=\operatorname{Spec}(k[\epsilon]/(\epsilon^3))$ with $L=\mathcal O_X$ and $s=\epsilon^2$, the zero scheme is $\operatorname{Spec}(k[\epsilon]/(\epsilon^2))$, which is still nonreduced. Thus the construction retains precisely the nilpotents not killed by the section equation. [step 1.1, step 2.1, algebra] ∎

## Source note

Vakil, *Foundations of Algebraic Geometry Classes 51–52*, §3.9 Corollary 3.9,
printed p. 10 (PDF page 10), states that a section of an invertible sheaf gives
a closed subscheme and that general such sections are smooth; the subsequent
Exercise 3.10 asks for the Bertini proof. The notes assert the zero-subscheme
construction but do not give its local quotient-and-gluing proof. Steps 1.1–4.1
derive that construction from the local equations, localization, and scheme
gluing; the source is context for the application, not a substitute for this
argument.
