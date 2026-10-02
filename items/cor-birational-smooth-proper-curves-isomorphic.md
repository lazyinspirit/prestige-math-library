---
id: cor-birational-smooth-proper-curves-isomorphic
kind: corollary
title: "Birational smooth proper curves are isomorphic"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-birational-morphism-schemes
  - def-rational-map-integral-schemes
  - lem-rational-map-smooth-curve-to-proper-scheme-extends
  - thm-curves-function-fields-equivalence
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Statement

Assume the Axiom of Choice. Let $C$ and $D$ be smooth proper geometrically
integral curves over a field $k$. Every birational rational map
$\varphi:C\dashrightarrow D$, that is, every dominant rational map whose
pullback $k(D)\to k(C)$ on function fields is an isomorphism, is represented by
a $k$-isomorphism $C\to D$. In particular every dominant $k$-morphism
$C\to D$ which is birational as a morphism of integral finite-type schemes is
an isomorphism.

## Facts & Assumptions
**Given:** A field $k$, smooth proper geometrically integral $k$-curves $C,D$, and a birational rational map $\varphi:C\dashrightarrow D$.

[F1] Under Choice, for smooth proper geometrically integral $k$-curves the assignment $f\mapsto f^*$ is a bijection from dominant $k$-morphisms $C\to D$ onto injective $k$-algebra homomorphisms $k(D)\hookrightarrow k(C)$. ([[thm-curves-function-fields-equivalence]])

[F2] A rational map $X\dashrightarrow Y$ is an equivalence class of pairs $(U,\varphi_U)$ with $U$ nonempty open and $\varphi_U:U\to Y$ a $k$-morphism; it is dominant when a representative has dense image; a morphism of integral finite-type $k$-schemes is birational when it maps the generic point to the generic point and induces an isomorphism on function fields. ([[def-rational-map-integral-schemes]], [[def-birational-morphism-schemes]])

[F3] A curve over $k$ is a nonempty geometrically integral, separated, finite-type $k$-scheme of chain dimension one; a smooth proper curve is smooth and proper over $k$, in particular separated. ([[def-algebraic-curve-over-field]])

[F4] Under Choice every rational map from a smooth curve to a proper $k$-scheme extends to a morphism, uniquely. ([[lem-rational-map-smooth-curve-to-proper-scheme-extends]])

[F5] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])



## Proof

**Proof technique:** direct; transport an isomorphism of function fields through the bijection of the function-field equivalence in both directions and cancel.

1.1 Let $\varphi:C\dashrightarrow D$ be a birational rational map and let $\alpha:k(D)\to k(C)$ be the pullback induced by a representative $\varphi_U:U\to D$; the definition of birationality makes $\alpha$ an isomorphism of $k$-algebras [F2]. In particular $\alpha$ is injective, so under Choice [F5] and [F1] there is a unique dominant $k$-morphism $F:C\to D$ with $F^*=\alpha$, and $F$ represents the rational map $\varphi$ because $F$ extends the representative and representatives of a rational map with the same generic pullback agree [F2, F4]. [F1, F2, F3, F4, F5, given]

2.1 Similarly $\alpha^{-1}:k(C)\to k(D)$ is an injective $k$-algebra homomorphism, so it is the pullback of a unique dominant $k$-morphism $G:D\to C$ [F1]. [F1, step 1.1]

3.1 The composites satisfy $(F\circ G)^*=G^*\circ F^*=\alpha^{-1}\circ\alpha=\mathrm{id}_{k(D)}$ and $(\mathrm{id}_D)^*=\mathrm{id}_{k(D)}$; both $F\circ G$ and $\mathrm{id}_D$ are dominant $k$-morphisms $D\to D$ with the same pullback, so by the injectivity part of the bijection [F1] they are equal. Symmetrically $(G\circ F)^*=\mathrm{id}_{k(C)}$ gives $G\circ F=\mathrm{id}_C$. Hence $F$ is an isomorphism with inverse $G$, and it represents $\varphi$. [F1, step 1.1, step 2.1]

4.1 If moreover $f:C\to D$ is a dominant $k$-morphism which is birational in the sense of birational morphisms of integral finite-type schemes, then its pullback $f^*:k(D)\to k(C)$ is an isomorphism by definition [F2], so step 3.1 applied to the rational map represented by $(C,f)$ produces an isomorphism representing it; as $f$ and that isomorphism are dominant morphisms with the same pullback, they are equal by [F1], so $f$ itself is an isomorphism. [F1, F2, step 3.1]

5.1 Steps 3.1 and 4.1 prove both assertions; the only choice-theoretic inputs are the extension lemma [F4] and the function-field bijection [F1], both used under Choice [F5]. [F1, F4, F5, step 3.1, step 4.1] ∎
