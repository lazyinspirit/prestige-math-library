---
id: thm-semisimple-groups-in-characteristic-zero-are-linearly-reductive
kind: theorem
title: "Semisimple groups in characteristic zero are linearly reductive"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 23
deps: [cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue, def-axiom-of-choice, def-rational-representation-and-comodule-of-an-affine-group-scheme, def-simple-and-semisimple-representations, lem-casimir-element-of-a-rational-representation-is-an-endomorphism-of-g-modules, lem-complete-reducibility-reduces-to-codimension-one-simple-submodules, lem-lie-functor-exactness-fixed-points-and-generation, lem-semisimple-groups-are-perfect-and-have-no-nontrivial-characters, lem-semisimplicity-of-rational-representations-descends-along-field-extensions, prop-ideals-and-quotients-of-semisimple-lie-algebras, thm-cartier-smoothness-for-affine-groups-in-characteristic-zero, lem-finite-dimensional-subcomodules-contain-elements, thm-zorn]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 22, Proposition 22.41, printed pp. 477-478"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, the characteristic-zero complete-reducibility paragraph on scan p. 225 (independent compact-form argument)"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be a
semisimple algebraic group over a field $k$ of characteristic $0$. Then every
finite-dimensional rational representation of $G$ is semisimple; equivalently,
$G$ is linearly reductive
([[def-rational-representation-and-comodule-of-an-affine-group-scheme]],
[[def-simple-and-semisimple-representations]]).

## Facts & Assumptions

**Given:** A semisimple algebraic group $G$ over a characteristic-zero field $k$ and a finite-dimensional rational representation $(V,r)$.

[F1] *Descent of semisimplicity.* If $(V_{k'},r_{k'})$ is semisimple for a field extension $k'\supseteq k$, then $(V,r)$ is semisimple ([[lem-semisimplicity-of-rational-representations-descends-along-field-extensions]]).

[F2] *Reduction to codimension one.* If $X(G)=0$, then the following are equivalent: (a) every finite-dimensional rational representation of $G$ is semisimple; (b) every subrepresentation of codimension one is a direct summand; (c) every simple subrepresentation of codimension one is a direct summand ([[lem-complete-reducibility-reduces-to-codimension-one-simple-submodules]]).

[F3] *No characters.* $X(G)=0$, and the same holds after any field extension ([[lem-semisimple-groups-are-perfect-and-have-no-nontrivial-characters]]).

[F4] *Casimir endomorphism.* For a finite-dimensional rational representation $(V,r)$ with $\bar{\mathfrak g}=\rho(\mathfrak g)\ne0$, the Casimir element $c_V$ of the nondegenerate trace form $B_\rho$ is a $G$-module endomorphism of $V$ with $\operatorname{tr}(c_V|_V)=\dim_k\bar{\mathfrak g}$ ([[lem-casimir-element-of-a-rational-representation-is-an-endomorphism-of-g-modules]]).

[F5] *Trivial derived action.* If $\rho(\mathfrak g)=0$ for a rational representation of the connected group $G$, then $V$ is the trivial representation: $\ker r$ is a closed subgroup scheme with $\operatorname{Lie}(\ker r)=\ker\rho=\mathfrak g$, it is smooth in characteristic $0$, and a connected group equals its smooth closed subgroup with the same Lie algebra ([[lem-lie-functor-exactness-fixed-points-and-generation]], [[def-rational-representation-and-comodule-of-an-affine-group-scheme]], [[thm-cartier-smoothness-for-affine-groups-in-characteristic-zero]]).

[F6] *An eigenvalue exists.* A linear operator on a nonzero finite-dimensional vector space over an algebraically closed field has an eigenvalue. ([[cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue]])

[F7] Every finite subset of a rational representation lies in a finite-dimensional subrepresentation. ([[lem-finite-dimensional-subcomodules-contain-elements]])

[A1] Under AC, every nonempty poset whose chains have upper bounds has a maximal element. ([[thm-zorn]])

## Proof

**Proof technique:** direct.

1.1 It suffices to prove the assertion after extending scalars to an algebraic closure $k^{\mathrm a}$ of $k$: if every finite-dimensional representation of $G_{k^{\mathrm a}}$ is semisimple, then [F1] gives semisimplicity of every finite-dimensional representation of $G$. We therefore assume in the rest of the proof that $k$ is algebraically closed. [F1, given]

2.1 For the algebraically closed field $k$ one has $X(G)=0$ by [F3], so by [F2] it suffices to verify condition (c): every simple subrepresentation $W$ of codimension one in a finite-dimensional $V$ is a direct summand. If $V$ is trivial, any finite-dimensional linear complement to $W$ is a $G$-subrepresentation, so the condition holds in every dimension, including zero. Otherwise $\bar{\mathfrak g}=\rho(\mathfrak g)\ne0$ by [F5], and we may use its Casimir operator. [F2, F3, F5, step 1.1, algebra]

3.1 Let $W$ be a simple subrepresentation of codimension one in a nonzero finite-dimensional $V$ with $\bar{\mathfrak g}\ne0$, and let $c_V$ be the Casimir endomorphism of [F4]. The quotient $V/W$ is a one-dimensional rational representation, hence trivial by [F3]; therefore $\mathfrak gV\subseteq W$. Since $c_V$ is a sum of products $\rho(x)\rho(y)$ with $x,y\in\mathfrak g$, it follows that $c_V(V)\subseteq\mathfrak gV\subseteq W$. [F3, F4, step 2.1]

4.1 The restriction $c_V|_W$ is a $G$-module endomorphism by [F4]. Since $k$ is algebraically closed and $W$ is nonzero finite-dimensional, it has an eigenvalue $a\in k$. The kernel of $c_V|_W-a\operatorname{id}_W$ is nonzero and is a $G$-subrepresentation, because that difference is $G$-equivariant. Simplicity of $W$ makes this kernel all of $W$. Hence $c_V|_W=a\operatorname{id}_W$, by the eigenvalue-kernel argument of Schur's lemma applied directly to the rational $G$-module. [F4, F6, step 3.1, algebra]

5.1 The scalar $a$ is nonzero: $c_V$ maps $V$ into $W$, so $\operatorname{tr}(c_V|_V)=\operatorname{tr}(c_V|_W)=a\dim W$, while [F4] gives $\operatorname{tr}(c_V|_V)=\dim_k\bar{\mathfrak g}\ne0$; hence $a\ne0$. Therefore $c_V|_W$ is invertible, $\ker c_V$ intersects $W$ trivially, $c_V(V)=W$, and $\dim\ker c_V=\dim V-\dim W=1$. Since $c_V$ is a $G$-module endomorphism by [F4], its kernel is a $G$-submodule, and $V=W\oplus\ker c_V$ exhibits $W$ as a direct summand. [F4, step 3.1, step 4.1]

6.1 Condition (c) of [F2] holds for every finite-dimensional $V$ by step 5.1, so by [F2] every finite-dimensional rational representation is semisimple; by step 1.1 this descends to the original field. [F2, step 1.1, step 5.1]

7.1 For an arbitrary rational representation $M$, order by inclusion the sets of simple submodules whose sum is direct. The empty set is such a family, and the union of a chain is such a family because each finite relation occurs in one member of the chain. By [A1] choose a maximal family with sum $S$. If $S\ne M$, [F7] gives a finite-dimensional submodule $W$ containing a vector outside $S$. By step 6.1, $W$ is a finite direct sum of simple submodules. Since $W$ is not contained in $S$, one such summand $C$ is not contained in $S$; simplicity gives $C\cap S=0$, so adjoining $C$ extends the family, a contradiction. Therefore $M=S$ is a direct sum of simple submodules, establishing linear reductivity. [F7, A1, step 6.1, algebra] ∎

## Remarks

- The proof is Milne's Proposition 22.41; the independence from the base field, the reduction to codimension-one simple submodules and the Casimir argument are the three inputs (Milne 22.39, 22.40 and the characteristic-zero section).
- The hypothesis that $G$ is semisimple enters twice: through $X(G)=0$ and through the nonvanishing of the Casimir trace $\dim\bar{\mathfrak g}$.
