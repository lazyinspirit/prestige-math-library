---
id: thm-cft-c2-resonant-extensions-and-projective-socles
kind: theorem
title: C2 resonant extension splitting and same-label projective socles
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
deps:
  - lem-cft-resonant-simple-induction-and-unrestricted-graded-splitting
  - thm-cft-positive-resonant-induced-top-nondegeneracy
  - lem-cft-resonant-finite-root-and-first-kernel-reduction
  - lem-cft-resonant-zhu-associative-algebra
  - def-c2-cofinite-vertex-algebra
  - def-grading-restricted-generalized-vertex-module
  - def-ordinary-vertex-module
  - def-essential-epimorphism-and-projective-cover
  - def-projective-object
  - def-socle-of-a-module
  - lem-cft-cyclic-weak-module-difference-one-spanning
  - lem-cft-c2-cofinite-modules-finitely-generated
  - lem-cft-nonnegative-c2-mode-window-finiteness
  - thm-cft-finitely-generated-weak-joint-modules-grading-restricted
  - thm-cft-contragredient-module-well-defined
  - def-axiom-of-choice
dependency_roles:
  lem-cft-resonant-simple-induction-and-unrestricted-graded-splitting: mathematical-premise
  thm-cft-positive-resonant-induced-top-nondegeneracy: mathematical-premise
  lem-cft-resonant-finite-root-and-first-kernel-reduction: mathematical-premise
  lem-cft-resonant-zhu-associative-algebra: mathematical-premise
  def-c2-cofinite-vertex-algebra: mathematical-premise
  def-grading-restricted-generalized-vertex-module: mathematical-premise
  def-ordinary-vertex-module: mathematical-premise
  def-essential-epimorphism-and-projective-cover: mathematical-premise
  def-projective-object: mathematical-premise
  def-socle-of-a-module: mathematical-premise
  lem-cft-cyclic-weak-module-difference-one-spanning: mathematical-premise
  lem-cft-c2-cofinite-modules-finitely-generated: mathematical-premise
  lem-cft-nonnegative-c2-mode-window-finiteness: mathematical-premise
  thm-cft-finitely-generated-weak-joint-modules-grading-restricted: mathematical-premise
  thm-cft-contragredient-module-well-defined: mathematical-premise
  def-axiom-of-choice: mathematical-premise
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: voa-resonant-induction-and-projective-socles
physical_scope: Pure mathematics; no physical premises or physical claim.
axiom_base: ZFC
axiom_use: "Inherited from the unrestricted splitting result; AC selects complements and maximal independent families."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Toshiyuki Abe, Geoffrey Buhl, and Chongying Dong, Rationality, regularity, and C2-cofiniteness
      url: https://arxiv.org/pdf/math/0204021
      locator: "Theorem 4.5 and C2 spanning inputs; the C2 consequences are reconstructed conditionally below, without attributing the planned same-label projective conclusion to that theorem."
    - title: Masahiko Miyamoto, Modular invariance of vertex operator algebras satisfying C2-cofiniteness
      url: https://arxiv.org/pdf/math/0209101v2
      locator: "Lemma 2.4 and Theorem 2.7; difference-one spanning and grading-restricted consequences used as inspected interfaces."
    - title: Chongying Dong and Cuipo Jiang, Rationality of Vertex Operator Algebras
      url: https://arxiv.org/pdf/math/0607679v1
      locator: "§§2–3; n=0 top and simple-module conventions, with the positive-resonance theorem retained as an unresolved prerequisite."
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Let $V$ be simple of CFT type over $\mathbb C$, $C_2$-cofinite, and have semisimple regular Zhu module. Then every irreducible admissible module is ordinary. Every extension of two ordinary simple $V$-modules in the grading-restricted generalized category splits, including positive-integral lowest-weight resonances. Let $S_i$ range over the ordinary simple objects in that category. Every minimal projective cover $\pi_i:P_i\to S_i$ in that category is an isomorphism; thus $\pi_i^{-1}$ is a same-label socle inclusion. Existence of covers is not assumed or asserted by this last universal quantification.

## Statement references

[[lem-cft-resonant-simple-induction-and-unrestricted-graded-splitting]]

[[def-c2-cofinite-vertex-algebra]]

[[def-grading-restricted-generalized-vertex-module]]

[[def-ordinary-vertex-module]]

[[def-essential-epimorphism-and-projective-cover]]

[[def-projective-object]]

[[def-socle-of-a-module]]

## Facts & Assumptions

**Given:** A simple CFT-type VOA $V$ over $\mathbb C$, finite codimension of $C_2(V)$, semisimplicity of the regular left $A(V)$-module, and the Axiom of Choice.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. It is used in the unrestricted splitting supplier to choose complements and maximal independent families; it is not a restriction on $V$.

[F1] [[lem-cft-nonnegative-c2-mode-window-finiteness]] proves that $A(V)=V/O(V)$ is finite dimensional for a CFT-type $C_2$-cofinite VOA and supplies finite degree spans for cyclic weak modules. [[lem-cft-cyclic-weak-module-difference-one-spanning]] gives the strict-index spanning and finite-dimensional degree-space argument used for ordinarity below.

[F2] [[lem-cft-resonant-finite-root-and-first-kernel-reduction]] and [[lem-cft-resonant-zhu-associative-algebra]]: $A(V)$ has finitely many simple tops; $[\omega]$ is central; the conformal zero mode acts by a scalar on a simple top and propagates by the mode-degree commutator.

[A2] [[thm-cft-positive-resonant-induced-top-nondegeneracy]] is the exact planned input that vanishes every positive-integral resonant singular top. Its carrier remains unresolved. Conditional on [A2], [[lem-cft-resonant-simple-induction-and-unrestricted-graded-splitting]] proves every admissible module splits in its original grading.

[F3] [[thm-cft-finitely-generated-weak-joint-modules-grading-restricted]] in its $k=1$ case gives a compatible admissible grading with finite-dimensional pieces for every finitely generated weak module. [[lem-cft-c2-cofinite-modules-finitely-generated]] shows every grading-restricted generalized module is finitely generated. The proof does not need to assume or reconstruct projective-cover existence.

[F4] [[def-grading-restricted-generalized-vertex-module]] means a direct sum of finite-dimensional generalized $L(0)$-weight spaces with real parts bounded below; [[def-ordinary-vertex-module]] adds semisimplicity of $L(0)$. An extension here is a short exact sequence in this category. By [[def-essential-epimorphism-and-projective-cover]], a projective cover is an epimorphic projective object with superfluous kernel $K$, meaning $H+K=P$ forces $H=P$. By [[def-socle-of-a-module]], the socle is the sum of all simple submodules.

[F5] [[thm-cft-contragredient-module-well-defined]] proves exact restricted contragredient duality and double-dual evaluation on grading-restricted generalized modules. It is used only for the category's ordinary duality interface; no projective is identified with an injective, and no self-contragredience of $V$ is assumed.

## Proof

1.1 $C_2$-cofiniteness and [F1] make $A(V)$ finite dimensional. Its semisimple regular left module therefore has a finite list of simple tops. Let $S$ be an irreducible admissible module, shifted so its least occupied grade is zero. The top $S(0)$ is a simple unital $A(V)$-module by the universal-top correspondence [F2], hence finite dimensional. The central class $[\omega]$ acts on $S(0)$ by a scalar $h$: on a finite-dimensional simple module it is an endomorphism, and Schur's lemma over $\mathbb C$ makes every endomorphism scalar. [F1, F2, algebra]

1.2 The conformal mode commutator gives $L(0)=h+n$ on $S(n)$, because $S$ is generated by its grade-zero top and each state mode shifts the specified grade by its operator degree. Thus $L(0)$ is semisimple. Choose a finite basis of $S(0)$. For each basis vector $u$, the cyclic spanning result [F1] makes the span of all words of total operator degree $n$ on $u$ finite dimensional; since $S$ is generated by $S(0)$, a finite sum of these spaces is $S(n)$. Every grade is therefore finite dimensional, and the weights $h+n$ are bounded below in real part. This is exactly ordinarity under [F4]. [F1, F2, F4, step 1.1, algebra]

2.1 Now assume the conditional input [A2]. The hypotheses of [[lem-cft-resonant-simple-induction-and-unrestricted-graded-splitting]] hold by Step 1.2 and semisimplicity of $A(V)$. That supplier yields a grading-preserving direct-sum decomposition of every admissible module into simple admissible modules. The exact restricted duality and double-dual evaluation in [F5] keep the ordinary duality interface within the grading-restricted generalized category; no projective-injective identification is inferred. This is the only use of the unresolved positive-resonance assertion. [A1, A2, F1, F2, F5, step 1.2]

3.1 Let $W$ be any finitely generated weak $V$-module. By [F3], it has a compatible nonnegative grading with finite-dimensional pieces, hence is admissible; the splitting conclusion of Step 2.1 applies. In particular, every grading-restricted generalized module is finitely generated by [F3], so it is admissible for this argument. Any module homomorphism commutes with $L(0)$ and therefore preserves generalized weight spaces. Thus the splitting of an extension of two ordinary simple objects can be chosen in the grading-restricted generalized category. A surjection from a semisimple module onto a simple quotient has a simple summand mapping nontrivially to that quotient; the restriction is an isomorphism of simples and its inverse is a section. This proves the extension splitting assertion, including resonant lowest weights. [A1, F3, F4, step 2.1, algebra]

4.1 Let $\pi:P\twoheadrightarrow S_i$ be any projective cover in the stated category, if one is given. Step 3.1 makes $P$ a direct sum of simple submodules. Since $\pi$ is surjective and $S_i$ is simple, at least one simple summand $T\subseteq P$ has nonzero image; its restricted map $T\to S_i$ is an isomorphism. Hence $T+\ker\pi=P$. The kernel is superfluous by the projective-cover definition [F4], so $T=P$. Therefore $P$ is simple and $\pi$ is an isomorphism. Its inverse embeds $S_i$ as the whole simple socle of $P$, with the same label $i$. No projective-cover existence is assumed in this implication. [F3, F4, step 3.1, algebra] ∎
