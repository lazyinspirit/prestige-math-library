---
id: thm-the-subobject-lattice-of-an-abelian-category-is-modular
kind: theorem
title: "The subobject lattice of an abelian category is modular"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-modular-lattice, thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice, thm-first-isomorphism-theorem-in-an-abelian-category, thm-third-isomorphism-theorem-in-an-abelian-category, thm-an-abelian-category-is-balanced, def-the-join-of-subobjects-in-an-abelian-category, thm-the-meet-of-subobjects-is-their-pullback]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Daniel Murfet, Abelian Categories, Proposition 73 and Corollary 72"
      url: "https://therisingsea.org/notes/AbelianCategories.pdf"
pipeline_run: frontier-22
---

## Statement

For every object $A$ in an abelian category, the lattice of subobjects of $A$
is modular.

## Facts & Assumptions

**Given:** An object $A$ in an abelian category.

[L1] A modular lattice is one satisfying $x\le z \Rightarrow x\vee(y\wedge z)=(x\vee y)\wedge z$ ([[def-modular-lattice]]).

[L2] The subobjects of $A$ form a lattice ([[thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice]]).

[L3] Quotienting by the kernel identifies a morphism with its image ([[thm-first-isomorphism-theorem-in-an-abelian-category]]).

[L4] Quotienting nested subobjects satisfies the third isomorphism theorem ([[thm-third-isomorphism-theorem-in-an-abelian-category]]).

[L5] In an abelian category, a morphism that is both monic and epic is an isomorphism ([[thm-an-abelian-category-is-balanced]]).

[L6] The join of two subobjects is the image of the induced map from their biproduct ([[def-the-join-of-subobjects-in-an-abelian-category]]).

[L7] The meet of two subobjects is represented by their pullback ([[thm-the-meet-of-subobjects-is-their-pullback]]).

## Proof

**Proof technique:** direct.

1.1 Consider any lattice in which comparable complements of a fixed element coincide in every interval. Let $X\le Z$ and put $$U:=X\vee(Y\wedge Z),\qquad V:=(X\vee Y)\wedge Z.$$ Then $U\le V$ by monotonicity. [construct]

1.2 Fix an interval $[B_1,B_2]$ of subobjects of $A$, and write $Q:=B_2/B_1$ with quotient map $q:B_2\to Q$. If $D$ is any intermediate subobject, let $q_D:B_2\to B_2/D$ be its quotient map. Because $B_1\le D$, the composite $q_D$ kills $B_1$, so it factors through $q$ as a map $\overline q_D:Q\to B_2/D$. Define $\Phi(D)$ to be the kernel subobject of $\overline q_D$. [L4, construct]

2.1 Both $U$ and $V$ are complements of $Y$ in the interval $[Y\wedge Z,X\vee Y]$: one has $U\vee Y=X\vee Y=V\vee Y$, and $Y\wedge Z\le U\le Z$ gives $U\wedge Y=Y\wedge Z$, while $V\le Z$ and $Y\le X\vee Y$ give $V\wedge Y=Y\wedge Z$. By step 1.1, the interval hypothesis forces $U=V$. Therefore the modular-law identity of [L1] holds. [L1, step 1.1, algebra]

2.2 Conversely, if $S\le Q$ with quotient map $t_S:Q\to Q/S$, define $\Psi(S)$ to be the kernel subobject of $t_S q$ in $B_2$. Then $B_1\le\Psi(S)\le B_2$. If $D$ lies in the interval, the equality $q_D=\overline q_D q$ gives $\Psi(\Phi(D))=D$. If $S\le Q$, the morphism $t_S q$ is epic, so its image is all of $Q/S$; by [L3], $$B_2/\Psi(S)\cong Q/S.$$ Under this identification, $\overline q_{\Psi(S)}$ is a cokernel of $S$, so $\Phi(\Psi(S))=S$. Thus $\Phi$ and $\Psi$ are inverse bijections between $[B_1,B_2]$ and the subobject lattice of $Q$. [L3, L4, step 1.2, construct]

3.1 If $D\le E$ in the interval, then $q_E$ factors through $q_D$, so $\overline q_E$ kills $\Phi(D)$. Hence $\Phi(D)\le\Phi(E)$. The same argument applied to $\Psi$ shows that $\Phi$ is an order isomorphism from $[B_1,B_2]$ onto $\operatorname{Sub}(Q)$. [step 1.2, step 2.2]

4.1 By step 3.1, it is enough to prove the comparable-complements property in $\operatorname{Sub}(Q)$. Let $E\le Q$, and let $U\le V$ be two complements of $E$. Write $t:Q\to Q/E$ for the quotient map. [construct]

5.1 Because $U\wedge E=0$, the pullback description [L7] makes the kernel of the restricted map $t|_U:U\to Q/E$ trivial. Because $U\vee E=Q$, the canonical map $[i_U,i_E]:U\oplus E\to Q$ has image $Q$ by [L6], so composing with $t$ shows that $t|_U$ is epic. By [L5], $t|_U$ is an isomorphism. The same argument shows that $t|_V$ is an isomorphism. Let $i:U\to V$ represent the comparison $U\le V$. Then $t|_U=(t|_V)\,i$, so $i$ is an isomorphism. Therefore $U$ and $V$ represent the same subobject of $Q$. [L5, L6, L7, step 4.1, construct]

6.1 Step 5.1 proves that every interval in the subobject lattice has the comparable-complements property, and step 2.1 shows that this property implies the modular law of [L1]. With [L2], this proves that the subobject lattice of $A$ is modular. [L1, L2, step 2.1, step 3.1, step 5.1] ∎
