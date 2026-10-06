---
id: lem-lie-algebra-of-a-semisimple-group-in-characteristic-zero-is-semisimple
kind: lemma
title: "The Lie algebra of a semisimple group in characteristic zero is semisimple"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 21
deps: [def-derived-series-and-solvable-lie-algebra, def-axiom-of-choice, def-algebraic-group-action-and-scheme-theoretic-stabilizer, def-derived-subgroup-and-solvable-algebraic-group, def-radical-and-unipotent-radical-of-an-algebraic-group, def-split-reductive-algebraic-group, lem-action-map-fibres-and-stabilizer-subscheme, lem-adjoint-representation-of-an-affine-group-scheme, lem-lie-algebra-of-the-stabilizer-of-a-subspace-and-lie-stable-subspaces, lem-lie-functor-exactness-fixed-points-and-generation, lem-lie-ideals-and-normal-connected-subgroups-in-characteristic-zero, lem-reductive-center-radical-and-semisimple-quotient, thm-cartier-smoothness-for-affine-groups-in-characteristic-zero]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 22, the paragraph before Lemma 22.39, printed p. 477; Ch. 10 (10.30)-(10.34)"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, the paragraph before Theorem 39 (semisimple Lie algebras in the characteristic-zero route)"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be a
semisimple algebraic group over a field $k$ of characteristic $0$
([[def-split-reductive-algebraic-group]],
[[def-radical-and-unipotent-radical-of-an-algebraic-group]]). Then its Lie
algebra $\mathfrak g=\operatorname{Lie}(G)$ is semisimple: it has no nonzero
solvable ideal.

## Facts & Assumptions

**Given:** A semisimple algebraic group $G$ over a characteristic-zero field
$k$, with $\mathfrak g=\operatorname{Lie}(G)$ and the adjoint representation
$\operatorname{Ad}:G\to\operatorname{GL}_{\mathfrak g}$
([[lem-adjoint-representation-of-an-affine-group-scheme]]).

[F1] The derived series of a Lie algebra is defined by successive brackets; Jacobi makes the successive derived terms of an ideal ideals in the ambient algebra. ([[def-derived-series-and-solvable-lie-algebra]])

[F2] *Stabilizers and their Lie algebras.* For a finite-dimensional rational
representation $(V,r)$ and a $k$-point $w\in V(k)$, the stabilizer of the point
$w$ is a closed subgroup scheme of $G$ with
$\operatorname{Lie}(\operatorname{Stab}_G(w))=\{x\in\mathfrak g:xw=0\}$; for
the adjoint representation this is the computation
$\operatorname{Ad}(e^{\varepsilon x})=\operatorname{id}+\varepsilon\operatorname{ad}(x)$
([[def-algebraic-group-action-and-scheme-theoretic-stabilizer]],
[[lem-action-map-fibres-and-stabilizer-subscheme]],
[[lem-adjoint-representation-of-an-affine-group-scheme]]).

[F3] *Normal subgroups and ideals.* For a smooth closed subgroup scheme
$H\subseteq G$, the identity component $H^\circ$ is normal in $G$ if and only
if $\operatorname{Lie}(H)$ is an ideal of $\mathfrak g$
([[lem-lie-ideals-and-normal-connected-subgroups-in-characteristic-zero]]).

[F4] Cartier's theorem makes every affine finite-type group scheme in characteristic $0$ smooth. The Lie algebra of a scheme-theoretic centralizer is the fixed subspace under the adjoint action; the differential of the adjoint action is the bracket. ([[lem-lie-functor-exactness-fixed-points-and-generation]], [[lem-adjoint-representation-of-an-affine-group-scheme]], [[thm-cartier-smoothness-for-affine-groups-in-characteristic-zero]])

[F5] *The radical of a semisimple group.* $G$ is semisimple exactly when
$R(G)=1$, and a semisimple group is reductive; the radical $R(G)$ is the
largest smooth connected normal solvable subgroup
([[lem-reductive-center-radical-and-semisimple-quotient]],
[[def-radical-and-unipotent-radical-of-an-algebraic-group]]).

## Proof

**Given:** A semisimple algebraic group $G$ over a characteristic-zero field
$k$, with $\mathfrak g=\operatorname{Lie}(G)$ and the adjoint representation
$\operatorname{Ad}:G\to\operatorname{GL}_{\mathfrak g}$
([[lem-adjoint-representation-of-an-affine-group-scheme]]).

**Proof technique:** direct.

1.1 If a nonzero solvable ideal $\mathfrak r$ exists, take its last nonzero derived term. Jacobi gives $[\mathfrak g,[I,I]]\subseteq[I,I]$ for each ambient ideal $I$, so this term is an ambient ideal, and its next derived term being zero makes it commutative. Thus it suffices to exclude nonzero commutative ideals. [F1, given, algebra]

1.2 Let $\mathfrak n\subseteq\mathfrak g$ be a commutative ideal and put $\mathfrak h=\{x\in\mathfrak g:[x,\mathfrak n]=0\}$. Then $\mathfrak n\subseteq\mathfrak h$ because $\mathfrak n$ is commutative, and $\mathfrak h$ is an ideal of $\mathfrak g$: for $y\in\mathfrak g$, $x\in\mathfrak h$ and $n\in\mathfrak n$ one has $\bigl[\bigl[y,x\bigr],n\bigr]=\bigl[y,[x,n]\bigr]-\bigl[x,[y,n]\bigr]=0$ because $[x,n]=0$ and $[y,n]\in\mathfrak n$ is killed by $x$. [given, algebra]

2.1 Choose a $k$-basis $y_1,\dots,y_m$ of $\mathfrak n$ and let $H$ be the stabilizer of the point $(y_1,\dots,y_m)$ of the rational representation $\mathfrak g^{\oplus m}$; this is a closed subgroup scheme of $G$, and $\operatorname{Lie}(H)=\mathfrak h$: a dual-number point $e^{\varepsilon x}$ lies in $H$ exactly when $\operatorname{Ad}(e^{\varepsilon x})y_i=y_i$ for all $i$, that is, by [F2], exactly when $[x,y_i]=0$ for all $i$. [F2, step 1.2]

3.1 Cartier's theorem [F4] makes the closed affine group $H$ smooth. Since $\mathfrak h=\operatorname{Lie}(H)$ is an ideal of $\mathfrak g$ by step 1.2, [F3] shows that $H^\circ$ is normal in $G$. [F3, F4, step 1.2, step 2.1]

4.1 For any smooth connected affine $H_0$ in characteristic $0$, $Z(H_0)=\ker\operatorname{Ad}_{H_0}$. Indeed, over an algebraic closure a point of the latter has centralizer with full Lie algebra by [F4]. Cartier makes that centralizer smooth, so it has full dimension and equals connected $H_0$. Hence the geometric points of the adjoint kernel and centre agree; Cartier makes both subgroup schemes smooth and reduced, so they agree as schemes, and the equality descends to $k$. Differentiating the adjoint kernel now gives $\operatorname{Lie}Z(H_0)=\ker\operatorname{ad}=Z(\operatorname{Lie}H_0)$. Apply this to $H_0=H^\circ$: its centre is characteristic in $H^\circ$, hence normal in $G$ by step 3.1, and its Lie algebra is $Z(\mathfrak h)$. [F4, step 3.1, algebra]

5.1 $Z(H^\circ)$ is finite: its identity component is a connected commutative, hence solvable, normal subgroup of $G$, so it is contained in $R(G)=1$ by [F5]; since $Z(H^\circ)$ is smooth of dimension $0$ in characteristic $0$, its Lie algebra is zero. [F4, F5, step 4.1]

6.1 Finally $\mathfrak n\subseteq Z(\mathfrak h)$: for $n\in\mathfrak n\subseteq\mathfrak h$ and $x\in\mathfrak h$ one has $[x,n]=0$ by the definition of $\mathfrak h$. Hence $\mathfrak n\subseteq Z(\mathfrak h)=\operatorname{Lie}(Z(H^\circ))=0$, so $\mathfrak n=0$, and by step 1.1 the algebra $\mathfrak g$ has no nonzero solvable ideal. [step 1.1, step 1.2, step 4.1, step 5.1] ∎

## Remarks

- The proof is Milne's argument in the paragraph before Lemma 22.39: a
  commutative ideal $\mathfrak n$ has a centralizer $\mathfrak h$ that is again
  an ideal. The identity component of $Z(H^\circ)$ is a normal connected
  commutative subgroup of $G$, hence trivial; the full centre is finite,
  so its Lie algebra is zero in characteristic $0$.
- Characteristic $0$ is used twice: Cartier's theorem for smoothness of
  $H^\circ$, $Z(H^\circ)$ and $G$, and the Lie-normal-subgroup correspondence.
