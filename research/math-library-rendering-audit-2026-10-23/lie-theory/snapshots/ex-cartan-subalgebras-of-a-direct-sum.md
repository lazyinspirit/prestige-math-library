---
id: ex-cartan-subalgebras-of-a-direct-sum
kind: example
title: Cartan subalgebras of a direct sum
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-cartan-subalgebra-of-a-lie-algebra, def-normalizer-of-a-lie-subalgebra, def-toral-and-maximal-toral-subalgebra, thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, def-semisimple-lie-algebra-by-vanishing-radical, def-radical-of-a-finite-dimensional-lie-algebra, def-derived-series-and-solvable-lie-algebra, def-lie-subalgebra-ideal-and-center, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, Proposition 19.13"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Example

Assume the Axiom of Choice. Let $\mathfrak g_1,\mathfrak g_2$ be finite-dimensional complex semisimple
Lie algebras and $\mathfrak g=\mathfrak g_1\oplus\mathfrak g_2$ their direct
sum, which is again semisimple because the radical of a direct sum is the
direct sum of the radicals
([[def-semisimple-lie-algebra-by-vanishing-radical]],
[[def-radical-of-a-finite-dimensional-lie-algebra]],
[[def-derived-series-and-solvable-lie-algebra]],
[[def-lie-subalgebra-ideal-and-center]]). Then a subalgebra
$\mathfrak h\subseteq\mathfrak g$ is a Cartan subalgebra
([[def-cartan-subalgebra-of-a-lie-algebra]]) if and only if
$\mathfrak h=\mathfrak h_1\oplus\mathfrak h_2$ with $\mathfrak h_i$ a Cartan
subalgebra of $\mathfrak g_i$; in that case
$\dim\mathfrak h=\dim\mathfrak h_1+\dim\mathfrak h_2$, and the root system of
$\mathfrak g$ relative to $\mathfrak h$ is the disjoint union of the root
systems of the summands.

## Facts & Assumptions

**Given:** Finite-dimensional complex semisimple Lie algebras $\mathfrak g_1,\mathfrak g_2$, their direct sum $\mathfrak g$, Cartan subalgebras and normalizers as in [[def-cartan-subalgebra-of-a-lie-algebra]], [[def-normalizer-of-a-lie-subalgebra]] and [[def-toral-and-maximal-toral-subalgebra]], and the identification of Cartan with maximal toral subalgebras in [[thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]]. Semisimplicity means vanishing radical, the radical contains every solvable ideal, and solvability is defined by the derived series ([[def-semisimple-lie-algebra-by-vanishing-radical]], [[def-radical-of-a-finite-dimensional-lie-algebra]], [[def-derived-series-and-solvable-lie-algebra]], [[def-lie-subalgebra-ideal-and-center]]).

[A1] The Axiom of Choice is assumed for the Cartan/maximal-toral theorem ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 Write $R_i=\operatorname{rad}(\mathfrak g_i)$ and $R=\operatorname{rad}(\mathfrak g)$. The subspace $R_1\oplus R_2$ is a solvable ideal because brackets and every term of its derived series are computed componentwise, so $R_1\oplus R_2\subseteq R$. Conversely each projection $\pi_i(R)$ is an ideal of $\mathfrak g_i$ and is solvable: $\pi_i(R)^{(m)}=\pi_i(R^{(m)})=0$ once $R^{(m)}=0$. Thus $\pi_i(R)\subseteq R_i$ and $R\subseteq R_1\oplus R_2$. Hence $R=R_1\oplus R_2=0$, proving that $\mathfrak g$ is semisimple before the Cartan/maximal-toral theorem is applied. [given, algebra]

1.2 If each $\mathfrak h_i$ is a Cartan subalgebra of $\mathfrak g_i$, then $\mathfrak h_1\oplus\mathfrak h_2$ is nilpotent, being a direct sum of nilpotent algebras, and its normalizer is $N_{\mathfrak g_1}(\mathfrak h_1)\oplus N_{\mathfrak g_2}(\mathfrak h_2)=\mathfrak h_1\oplus\mathfrak h_2$: an element $x=x_1+x_2$ normalizes $\mathfrak h_1\oplus\mathfrak h_2$ exactly when $[x_i,\mathfrak h_i]\subseteq\mathfrak h_i$ for $i=1,2$, because brackets in a direct sum are computed componentwise and mixed brackets vanish. [given, algebra]

2.1 Conversely let $\mathfrak h$ be a Cartan subalgebra of $\mathfrak g$. By step 1.1 and [[thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]] it is maximal toral, hence abelian with all adjoint operators semisimple ([[def-toral-and-maximal-toral-subalgebra]]). Let $\mathfrak h_i$ be the image of $\mathfrak h$ under the projection $\mathfrak g\to\mathfrak g_i$; each $\mathfrak h_i$ is abelian, since it is the image of an abelian subalgebra under a Lie-algebra homomorphism, and each of its elements is semisimple, because the adjoint operator of $x_1+x_2$ splits as the direct sum of the adjoint operators of $x_1$ and $x_2$, and a direct sum of endomorphisms is semisimple exactly when both summands are. Hence $\mathfrak h_1\oplus\mathfrak h_2$ is toral and contains $\mathfrak h$, so maximality gives $\mathfrak h=\mathfrak h_1\oplus\mathfrak h_2$. [A1, given, step 1.1, algebra]

3.1 Each $\mathfrak h_i$ is maximal toral in $\mathfrak g_i$: if $\mathfrak t_i\supsetneq\mathfrak h_i$ were toral in $\mathfrak g_i$, then replacing the $i$th summand of $\mathfrak h_1\oplus\mathfrak h_2$ by $\mathfrak t_i$ would give a toral subalgebra of $\mathfrak g$ strictly containing $\mathfrak h$, contradicting maximality. By [[thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]] each $\mathfrak h_i$ is a Cartan subalgebra of $\mathfrak g_i$, which completes the first half. The dimension formula is additivity of dimensions over a direct sum. [A1, given, step 2.1, algebra]

4.1 For the root statement, the eigenvectors of $\operatorname{ad}_H$ for $H=H_1+H_2\in\mathfrak h$ are exactly the sums of eigenvectors in the two summands: a functional on $\mathfrak h$ that is nonzero on both summands occurs for no nonzero eigenvector, while the roots of $\mathfrak g$ are the union of the roots of $\mathfrak g_1$ with respect to $\mathfrak h_1$ and of $\mathfrak g_2$ with respect to $\mathfrak h_2$, extended by zero on the other summand. Hence the root systems form a disjoint union, as asserted. [given, step 1.2, step 2.1, algebra] ∎
