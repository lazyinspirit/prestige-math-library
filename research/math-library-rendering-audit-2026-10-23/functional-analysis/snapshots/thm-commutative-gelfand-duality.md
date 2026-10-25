---
id: thm-commutative-gelfand-duality
kind: theorem
title: Commutative Gelfand duality
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-commutative-gelfand-naimark, lem-characters-of-continuous-functions-are-evaluations, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-axiom-of-choice, def-c-star-algebra, thm-maximal-ideal-space-is-compact-hausdorff]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Theorem 3.3.5 and Corollary 3.3.6 (compact case), printed pp. 80–81"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Theorem 5.64, printed pp. 266–267"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Marcus Tressl, Stone Duality for Boolean Algebras — §4, pp. 16–17 (naturality template)"
      url: "https://personalpages.manchester.ac.uk/staff/marcus.tressl/papers/StoneDualityBooleanAlgebras.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$\mathsf{CHaus}_{\ne\varnothing}$ be the category whose objects are nonempty
compact Hausdorff spaces and whose arrows are continuous maps, and let
$\mathsf{uC}^*_{\ne0}$ be the category whose objects are nonzero unital
commutative complex C\*-algebras ([[def-c-star-algebra]]) and whose arrows are
unital $\ast$-homomorphisms. Then the assignments

$$X \longmapsto C(X,\mathbb C), \qquad A \longmapsto \Delta(A),$$

together with the pullback $g \mapsto g^*$, $g^*(f) := f \circ g$, on continuous
maps and the transpose $\varphi \mapsto \varphi^*$,
$\varphi^*(\psi) := \psi \circ \varphi$, on unital $\ast$-homomorphisms, define a
**contravariant equivalence of categories**: for every compact Hausdorff $X$ the
evaluation map $\eta_X : X \to \Delta(C(X))$, $\eta_X(x) = \mathrm{ev}_x$, is a
homeomorphism, for every unital commutative C\*-algebra $A$ the Gelfand
transform $\Gamma_A : A \to C(\Delta(A))$ is an isometric unital
$\ast$-isomorphism ([[thm-commutative-gelfand-naimark]]), these identifications
are natural, and the two arrow assignments are mutually inverse under them.
The empty space and zero algebra are excluded because this library's unital
Banach-algebra convention requires a nonzero unit of norm one.

## Facts & Assumptions

**Given:** The Axiom of Choice, the categories $\mathsf{CHaus}_{\ne\varnothing}$ and $\mathsf{uC}^*_{\ne0}$ as described in the statement.

[L1] For a nonzero unital commutative C\*-algebra $A$, the Gelfand transform $\Gamma_A : A \to C(\Delta(A))$ is an isometric unital $\ast$-isomorphism onto $C(\Delta(A))$ ([[thm-commutative-gelfand-naimark]], [[def-axiom-of-choice]]).

[L2] For a nonempty compact Hausdorff space $X$, the evaluation map $\eta_X : X \to \Delta(C(X))$ is a homeomorphism, under Dependent Choice, which follows from the Axiom of Choice ([[lem-characters-of-continuous-functions-are-evaluations]]).

[L3] In a unital commutative C\*-algebra a $\ast$-homomorphism between unital algebras is unital by hypothesis here; the transpose $\varphi^*(\psi) = \psi \circ \varphi$ of a unital $\ast$-homomorphism $\varphi$ is nonzero because $\psi(\varphi(1_A)) = \psi(1_B) = 1$, and it is a character of the domain; likewise $g^*(f) = f \circ g$ is a unital $\ast$-homomorphism of unital commutative C\*-algebras.

## Proof

**Proof technique:** direct.

1.1 The object assignments are well defined: for nonempty compact Hausdorff $X$, the algebra $C(X,\mathbb C)$ is a nonzero unital commutative complex C\*-algebra with the supremum norm and pointwise conjugation; and for every nonzero unital commutative C\*-algebra $A$, the character space $\Delta(A)$ is a nonempty compact Hausdorff space by [[thm-maximal-ideal-space-is-compact-hausdorff]]. [L1, L2, algebra]

1.2 For a continuous map $g : Y \to X$ between compact Hausdorff spaces, the pullback $g^* : C(X) \to C(Y)$, $g^*(f) = f \circ g$, is a unital $\ast$-homomorphism: it is complex-linear, multiplicative, preserves constants and conjugation, and is bounded with $\|g^*\| \le 1$; the identity map induces the identity pullback and $(g \circ h)^* = h^* \circ g^*$ for composable continuous maps. [L3, algebra]

1.3 For a unital $\ast$-homomorphism $\varphi : A \to B$ of unital commutative C\*-algebras, the transpose $\varphi^* : \Delta(B) \to \Delta(A)$, $\varphi^*(\psi) = \psi \circ \varphi$, is well defined: $\psi \circ \varphi$ is a nonzero complex-linear multiplicative map because $\psi$ is, and $(\psi \circ \varphi)(1_A) = \psi(1_B) = 1$ by unitality of $\psi$ and $\varphi$; it is continuous for the evaluation topologies, since for $a \in A$ the composition $\psi \mapsto (\psi \circ \varphi)(a) = \psi(\varphi(a))$ is the evaluation at $\varphi(a)$. Moreover $(\mathrm{id}_A)^* = \mathrm{id}_{\Delta(A)}$ and $(\psi \circ \varphi)^* = \varphi^* \circ \psi^*$ for composable unital $\ast$-homomorphisms. [L3, algebra]

2.1 The evaluation homeomorphisms of [L2] and the inverse Gelfand isomorphisms $\Gamma_A^{-1}$ of [L1] are the components of natural isomorphisms: for a continuous $g : Y \to X$ and $y \in Y$ one has $\mathrm{ev}_{g(y)} = \mathrm{ev}_y \circ g^*$, that is, $\eta_X \circ g = g^{**} \circ \eta_Y$; and for a unital $\ast$-homomorphism $\varphi : A \to B$, every $\psi \in \Delta(B)$ satisfies $\Gamma_B(\varphi(a))(\psi) = \psi(\varphi(a)) = (\psi \circ \varphi)(a) = \Gamma_A(a)(\varphi^*(\psi))$, that is, $\Gamma_B \circ \varphi = \varphi^{**} \circ \Gamma_A$. [step 1.2, step 1.3, L1, L2, algebra]

3.1 The assignments are inverse equivalences on arrows: given a unital $\ast$-homomorphism $\varphi : A \to B$, naturality in [step 2.1] gives $\varphi = \Gamma_B^{-1} \circ (\varphi^*)^* \circ \Gamma_A$, so $\varphi$ is determined by $\varphi^*$; given a continuous $g : Y \to X$, the same identity at the space level gives $g = \eta_X^{-1} \circ (g^*)^* \circ \eta_Y$, so $g$ is determined by $g^*$; and both $\varphi \mapsto \varphi^*$ and $g \mapsto g^*$ preserve identities and composition in the reversed order by [step 1.2] and [step 1.3]. Hence the two contravariant functors are mutually inverse up to the natural isomorphisms $\eta$ and $\Gamma^{-1}$. [step 1.2, step 1.3, step 2.1, L1, L2]

4.1 The object-level identifications [L1], [L2] and the arrow-level bijections [step 3.1] define a contravariant equivalence between $\mathsf{CHaus}_{\ne\varnothing}$ and $\mathsf{uC}^*_{\ne0}$, as claimed. [step 3.1, L1, L2] ∎

## Remarks

- **AC and DC are both inherited.** The Gelfand–Naimark side spends AC, the evaluation side inherits DC from Urysohn through [[lem-characters-of-continuous-functions-are-evaluations]]; the derivation DC from AC is the declared dependency, so no choice principle weaker than what is used is claimed.
- **"Equivalence", not "duality of objects only".** The content is the arrow-level statement of [step 3.1]: the two functors are inverse on hom-sets through the natural isomorphisms. The nonempty/nonzero restriction makes the statement agree with the library's normalized unital Banach-algebra convention.
