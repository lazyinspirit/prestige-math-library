---
id: lem-casimir-element-of-a-rational-representation-is-an-endomorphism-of-g-modules
kind: lemma
title: "The Casimir element of a rational representation is an endomorphism of G-modules"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 22
deps: [def-axiom-of-choice, def-casimir-operator-relative-to-an-invariant-form, def-rational-representation-and-comodule-of-an-affine-group-scheme, lem-lie-algebra-of-a-semisimple-group-in-characteristic-zero-is-semisimple, lem-lie-algebra-of-the-stabilizer-of-a-subspace-and-lie-stable-subspaces, lem-lie-functor-exactness-fixed-points-and-generation, lem-semisimple-groups-are-perfect-and-have-no-nontrivial-characters, lem-tensor-and-hom-representations-are-rational, lem-the-casimir-operator-is-basis-independent-and-intertwining, lem-trace-form-of-a-faithful-representation-of-a-semisimple-lie-algebra-is-nondegenerate, prop-ideals-and-quotients-of-semisimple-lie-algebras]
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
      locator: "Ch. 22 (22c), printed pp. 476-477"
    - title: "James E. Humphreys, Introduction to Lie Algebras and Representation Theory (Springer GTM 9, 1972)"
      url: "https://link.springer.com/book/10.1007/978-1-4612-6398-2"
      locator: "Section 6.2 (the Casimir operator is an endomorphism of g-modules); Section 4.2 (Cartan's criterion)"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be a
semisimple algebraic group over a field $k$ of characteristic $0$ and let
$(V,r)$ be a finite-dimensional rational representation with
$\rho:\mathfrak g\to\mathfrak{gl}(V)$ the derived representation and
$\bar{\mathfrak g}=\rho(\mathfrak g)$. If $\bar{\mathfrak g}\ne0$, then:
(a) $\bar{\mathfrak g}$ is a semisimple Lie algebra and the trace form
$B_\rho$ of the faithful representation of $\bar{\mathfrak g}$ on $V$ is
nondegenerate; (b) the Casimir element
$\Omega_{B_\rho}\in U(\bar{\mathfrak g})$ of $B_\rho$ defines a $G$-module endomorphism
$c_V:V\to V$
([[def-casimir-operator-relative-to-an-invariant-form]],
[[lem-the-casimir-operator-is-basis-independent-and-intertwining]]);
(c) $\operatorname{tr}(c_V|_V)=\dim_k\bar{\mathfrak g}$.
Here $U(\bar{\mathfrak g})$ is the universal enveloping algebra, and
$c_V$ is the action of $\Omega_{B_\rho}$ on $V$ induced by the inclusion
$\bar{\mathfrak g}\hookrightarrow\mathfrak{gl}(V)$.

## Facts & Assumptions

**Given:** A semisimple algebraic group $G$ over a characteristic-zero field $k$ with $\mathfrak g=\operatorname{Lie}(G)$, a finite-dimensional rational representation $(V,r)$ with differential $\rho:\mathfrak g\to\mathfrak{gl}(V)$, and $\bar{\mathfrak g}=\rho(\mathfrak g)\ne0$.

[F1] *Quotients of semisimple Lie algebras.* $\mathfrak g$ is semisimple ([[lem-lie-algebra-of-a-semisimple-group-in-characteristic-zero-is-semisimple]]), and every quotient of a finite-dimensional semisimple characteristic-zero Lie algebra is semisimple ([[prop-ideals-and-quotients-of-semisimple-lie-algebras]]); hence $\bar{\mathfrak g}\cong\mathfrak g/\ker\rho$ is semisimple.

[F2] *Nondegenerate trace form.* The representation $\bar{\mathfrak g}\hookrightarrow\mathfrak{gl}(V)$ is faithful and finite-dimensional, so its trace form $B_\rho(x,y)=\operatorname{tr}(xy)$ for $x,y\in\bar{\mathfrak g}$ is nondegenerate and invariant ([[lem-trace-form-of-a-faithful-representation-of-a-semisimple-lie-algebra-is-nondegenerate]]).

[F3] *Casimir element.* For a semisimple Lie algebra with nondegenerate invariant form $B$, a basis $(e_i)$ and the $B$-dual basis $(e'_i)$, the element $\Omega_{B_\rho}=\sum_i e_i e'_i\in U(\bar{\mathfrak g})$ is independent of the basis. Its action $c_V=\sum_i e_i\circ e'_i\in\operatorname{End}_k(V)$ is an endomorphism of $V$ as a $\bar{\mathfrak g}$-module, and $\operatorname{tr}(c_V|_V)=\sum_iB(e_i,e'_i)=\dim\bar{\mathfrak g}$ ([[def-casimir-operator-relative-to-an-invariant-form]], [[lem-the-casimir-operator-is-basis-independent-and-intertwining]]).

[F4] *Endomorphisms of $V$.* The space $\operatorname{End}_k(V)\cong V^*\otimes_kV$ is a finite-dimensional rational representation of $G$ with $(g\cdot f)(v)=r(g)f(r(g)^{-1}v)$, whose fixed points are exactly the $G$-module endomorphisms of $V$ ([[lem-tensor-and-hom-representations-are-rational]], [[def-rational-representation-and-comodule-of-an-affine-group-scheme]]).

[F5] *Lie-stable subspaces are stable.* Since $k$ has characteristic $0$ and $G$ is connected and smooth, a subspace $W$ of a rational representation with $\mathfrak gW\subseteq W$ is $G$-stable ([[lem-lie-algebra-of-the-stabilizer-of-a-subspace-and-lie-stable-subspaces]]).

[F6] *Semisimple groups have no characters.* $X(G)=0$, so a one-dimensional rational representation of the semisimple group $G$ is trivial ([[lem-semisimple-groups-are-perfect-and-have-no-nontrivial-characters]]).

## Proof

**Proof technique:** direct.

1.1 The image $\bar{\mathfrak g}=\rho(\mathfrak g)$ is a quotient of $\mathfrak g$ by the ideal $\ker\rho$, so it is semisimple by [F1], and $B_\rho$ is the trace form of the faithful finite-dimensional representation of $\bar{\mathfrak g}$ on $V$, hence nondegenerate by [F2]. This is (a). [F1, F2, given]

2.1 By [F3], $\Omega_{B_\rho}=\sum_i e_i e'_i\in U(\bar{\mathfrak g})$ is basis-independent. Its action on $V$ is $c_V=\sum_i e_i\circ e'_i\in\operatorname{End}_k(V)$, where the $e_i,e'_i$ are already operators in $\bar{\mathfrak g}\subseteq\mathfrak{gl}(V)$. This operator commutes with every $x\in\bar{\mathfrak g}$ and has trace $\sum_iB_\rho(e_i,e'_i)=\dim\bar{\mathfrak g}$. [F3, step 1.1]

3.1 The line $W=kc_V$ inside the rational representation $\operatorname{End}_k(V)\cong V^*\otimes_kV$ of [F4] is annihilated by $\mathfrak g$, because the infinitesimal action is $x\cdot f=[\rho(x),f]$ and step 2.1 gives $[\rho(x),c_V]=0$; in particular $\mathfrak gW\subseteq W$. By [F5] the line $W$ is $G$-stable, and by [F6] the action of $G$ on the one-dimensional representation $W$ is trivial. Hence $c_V$ is a fixed point of the action on $\operatorname{End}_k(V)$, so by [F4] it is a $G$-module endomorphism of $V$. This is (b). [F4, F5, F6, step 2.1]

3.2 The trace identity $\operatorname{tr}(c_V|_V)=\dim_k\bar{\mathfrak g}$ of step 2.1 is (c). [step 2.1]

4.1 Steps 1.1, 3.1 and 3.2 establish (a), (b) and (c). [step 1.1, step 3.1, step 3.2] ∎

## Remarks

- The point of the lemma is that the Casimir operator, which a priori is only an endomorphism of $\mathfrak g$-modules, is fixed by the whole connected group in characteristic zero: the line it spans is a one-dimensional rational representation of the semisimple group $G$, and $X(G)=0$.
- If $\bar{\mathfrak g}=0$, the representation is trivial by the characteristic-zero connected equal-Lie subgroup criterion. The empty-sum convention defines both the Casimir element and its operator as zero; the hypothesis $\bar{\mathfrak g}\ne0$ ensures a nonzero trace and a nonzero line $kc_V$ in step 3.1.
