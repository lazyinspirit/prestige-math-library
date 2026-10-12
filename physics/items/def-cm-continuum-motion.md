---
id: def-cm-continuum-motion
kind: definition
title: "Continuum motions, spatial velocity, material acceleration and swept regions"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-material-region-and-density, def-cm-euclidean-spatial-calculus, def-ck-euclidean-maps-and-diffeomorphisms, cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image, def-determinant-of-a-square-matrix, def-total-derivative-in-euclidean-space, thm-chain-rule-for-total-derivatives, def-interval, def-metric-ball, def-euclidean-inner-product]
dependency_roles:
  def-cm-material-region-and-density: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-interval: mathematical-premise
  def-metric-ball: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 1.5 (motion of a body) and Sections 3.1 and 3.3 (motion; velocity gradient, stretching and spin tensors)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 8.3 (velocity field of a continuum, material derivative)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"

  precheck: pass
---

## Definition

Let $B\subseteq\mathbb R^3$ be a material region (nonempty, bounded, open, [[def-cm-material-region-and-density]]) and let $I\subseteq\mathbb R$ be a nonempty open interval ([[def-interval]]).

A **motion of $B$ on $I$** consists of an open set $O\subseteq\mathbb R^3$ with $\overline B\subseteq O$ ([[def-metric-ball]]) together with a map

$$\chi:I\times O\longrightarrow\mathbb R^3$$

such that:

1. $\chi$ is of class $C^2$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]);
2. for every $t\in I$ the map $\chi_t:=\chi(t,\cdot):O\to\mathbb R^3$ is of class $C^1$, is injective, and has $D_X\chi_t(X)$ invertible for every $X\in O$;
3. writing

$$J(t,X):=\det\bigl(D_X\chi_t(X)\bigr)$$

with the determinant of [[def-determinant-of-a-square-matrix]], one has $J(t,X)>0$ for every $(t,X)\in I\times B$.

We call $X\in B$ the **material label** (reference position), $x=\chi(t,X)$ the **position** at time $t$ of the label $X$, and

$$\Omega_t:=\chi_t(B)$$

the **current (material) region** at time $t$. Condition 2 makes each $\chi_t:O\to\chi_t(O)$ a $C^1$ diffeomorphism onto the open set $\chi_t(O)$ ([[cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image]]).

The **spatial velocity field** of the motion is

$$u:\{(t,x):t\in I,\ x\in\chi_t(O)\}\longrightarrow\mathbb R^3,\qquad u\bigl(t,\chi(t,X)\bigr):=\partial_t\chi(t,X),$$

and the **spatial acceleration field** is the material derivative of $u$ in the sense of [[def-cm-euclidean-spatial-calculus]],

$$a(t,x):=D_tu(t,x)=\partial_tu(t,x)+Du(t,x)u(t,x).$$

For a compact subinterval $K\subseteq I$ the **swept region** of $B$ over $K$ is

$$\Sigma_K:=\bigl\{(t,x):t\in K,\ x\in\chi_t(\overline B)\bigr\},$$

and for a scalar field $f$ on a neighbourhood of $\Sigma_K$ the spatial field $f(t,x)$ of a material quantity $F(t,X)$ is defined by $f(t,\chi(t,X))=F(t,X)$.

## Well-definedness

Put $\Phi(t,X):=(t,\chi(t,X))$ on $I\times O$. By condition 1, $\Phi$ is $C^1$ and its total derivative at $(t,X)$ is the block map $(s,Y)\mapsto(s,\partial_t\chi(t,X)s+D_X\chi_t(X)Y)$, invertible because $D_X\chi_t(X)$ is invertible. If $\Phi(t,X)=\Phi(t',X')$, then $t=t'$ and injectivity of $\chi_t$ (condition 2) gives $X=X'$; so $\Phi$ is injective and, by [[cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image]], $\Phi$ corestricts to a $C^1$ diffeomorphism from $I\times O$ onto the open set $\Phi(I\times O)$. On that set the **inverse map**

$$\Lambda:=\Phi^{-1},\qquad \Lambda(t,x)=\bigl(t,\chi_t^{-1}(x)\bigr),$$

is $C^1$ by the same corollary. Hence $u(t,x)=\partial_t\chi\bigl(t,\Lambda(t,x)\bigr)$ is a composition of $C^1$ maps, so $u$ is $C^1$ on its open domain by the chain rule ([[thm-chain-rule-for-total-derivatives]]), and $a=D_tu$ is continuous there. Finally $\Sigma_K=\Phi(K\times\overline B)$ is compact: it is the continuous image of a compact set.

## Remarks

- The positive Jacobian in condition 3 is required only on $I\times B$; the definition itself is purely mathematical and asserts neither conservation of mass nor any physical identification of $B$ with a body of matter. Physical readings (a constitutive law, a mass balance, a traction model) are separate adopted hypotheses in consuming items.

- Boundary regularity of $B$ is **not** part of this definition. Statements that integrate over $\chi_t(B)$ or $\partial\chi_t(B)$ carry their own hypotheses; the transport theorem of this collection states the boundary regularity it uses, and the local balance statements say when $\chi_t(B)$ is required to be a bounded $C^1$ domain.

- The notation $\chi_t(O)$ keeps the domain of $u$ honest: $u(t,\cdot)$ is defined on the image of the whole reference chart $O$, not merely on $\Omega_t$; this is what allows differentiation of $u$ at points of the current region with room to spare. Values of $u$ are spatial quantities, whereas $\partial_t\chi$ is a material quantity; the identity $u(t,\chi(t,X))=\partial_t\chi(t,X)$ is the definition that relates them, and no equality of the two off the image is claimed.
