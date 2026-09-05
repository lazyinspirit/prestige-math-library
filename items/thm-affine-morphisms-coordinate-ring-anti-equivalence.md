---
id: thm-affine-morphisms-coordinate-ring-anti-equivalence
kind: theorem
title: "Affine morphisms are contravariantly equivalent to coordinate-ring homomorphisms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-morphism-classical-varieties, def-coordinate-ring-affine-algebraic-set, def-vanishing-ideal-affine-set, thm-global-regular-functions-affine-variety-coordinate-ring]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Proposition 3.24"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, Theorem 3.2.1"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
    - title: "Michael Artin, Notes for a Course in Algebraic Geometry, Corollary 2.5.6"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  precheck: pass
---

## Statement

Let $X$ and $Y$ be classical affine varieties over an algebraically closed field
$k$. Then
$$ \operatorname{Mor}(X,Y)\cong\operatorname{Hom}_{k\text{-alg}}(k[Y],k[X]) $$
canonically. Under this correspondence, identities correspond to identity
homomorphisms and composition of morphisms corresponds to composition of
pullback homomorphisms in the opposite order.

## Facts & Assumptions

**Given:** Classical affine varieties $X \subseteq \mathbf A_k^n$ and $Y \subseteq \mathbf A_k^m$ over an algebraically closed field $k$.

[L1] A morphism $\varphi:X \to Y$ is exactly a map whose pullback sends every global regular function on $Y$ to a global regular function on $X$ ([[def-morphism-classical-varieties]]).

[L2] For an affine variety $Z$, global regular functions on $Z$ are exactly the elements of $k[Z]$ ([[thm-global-regular-functions-affine-variety-coordinate-ring]]).

[L3] If $Y \subseteq \mathbf A_k^m$, then $k[Y]=k[y_1,\ldots,y_m]/I(Y)$ ([[def-coordinate-ring-affine-algebraic-set]]).

[L4] The vanishing ideal $I(Y)$ consists exactly of the polynomials that vanish at every point of $Y$ ([[def-vanishing-ideal-affine-set]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varphi:X \to Y$ be a morphism. By [L1], pullback sends global regular functions on $Y$ to global regular functions on $X$, and [L2] identifies those two rings with $k[Y]$ and $k[X]$. Therefore $\varphi$ determines a $k$-algebra homomorphism $\varphi^*:k[Y]\to k[X]$, $h\mapsto h\circ\varphi$. This is the desired pullback homomorphism attached to $\varphi$. [L1, L2, given]

1.2 Conversely, let $\alpha:k[Y]\to k[X]$ be a $k$-algebra homomorphism. Write $\overline y_1,\ldots,\overline y_m$ for the coordinate classes of $Y$ in [L3]. By [L2], each $\alpha(\overline y_i)$ is a global regular function on $X$, hence an honest function $X \to k$. Define $\varphi_\alpha(x):=\big(\alpha(\overline y_1)(x),\ldots,\alpha(\overline y_m)(x)\big)\in \mathbf A_k^m$. This produces a candidate point of affine $m$-space for each $x \in X$. [L2, L3, given, construct]

2.1 For every polynomial $g \in I(Y)$, its class is $0$ in $k[Y]$ by [L3]. Hence $g\big(\alpha(\overline y_1),\ldots,\alpha(\overline y_m)\big)=\alpha(g)=0$ in $k[X]$. Evaluating at $x \in X$ gives $g(\varphi_\alpha(x))=0$. Since [L4] says that the common zero set of $I(Y)$ is exactly $Y$, the point $\varphi_\alpha(x)$ lies in $Y$. Thus $\varphi_\alpha:X \to Y$ is well defined. [L3, L4, step 1.2, algebra]

2.2 Let $h \in k[Y]$. By [L3], $h$ is a polynomial expression in the coordinate classes $\overline y_i$. Pulling that expression back along $\varphi_\alpha$ replaces each $\overline y_i$ by $\alpha(\overline y_i)$, so $\varphi_\alpha^*(h)=\alpha(h)$. In particular $\varphi_\alpha^*(h)$ is regular on $X$ by [L2], and [L1] shows that $\varphi_\alpha$ is a morphism. [L1, L2, L3, step 1.2, algebra]

3.1 Starting from a morphism $\varphi$, the map constructed from $\varphi^*$ has the same pullback on the coordinate classes $\overline y_i$, so it has the same value as $\varphi$ at every point of $X$. Starting from a homomorphism $\alpha$, step 2.2 shows that the pullback of the constructed morphism is exactly $\alpha$. Therefore the two constructions are inverse to each other. [L3, step 1.1, step 2.2]

4.1 For the identity morphism on $X$, the pullback is the identity on $k[X]$ by the formula in step 1.1. If $\psi:Y \to Z$ and $\varphi:X \to Y$ are morphisms, then for every $h \in k[Z]$ one has $(\psi\circ\varphi)^*(h)=h\circ\psi\circ\varphi=\varphi^*(\psi^*(h))$, so pullback reverses composition. Together with step 3.1 this proves the stated contravariant correspondence. [step 1.1, step 3.1, algebra] ∎
