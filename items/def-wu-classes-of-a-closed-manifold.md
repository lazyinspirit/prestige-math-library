---
id: def-wu-classes-of-a-closed-manifold
kind: definition
title: Wu classes of a closed manifold
status: published
origin: pipeline
deps: ["prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise", "cor-poincare-duality-gives-a-nonsingular-cup-pairing", "thm-steenrod-squares-are-well-defined-and-natural", "prop-steenrod-square-normalization-instability-and-top-square", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Husemöller, Joachim, Jurčo, and Schottenloher, Basic Bundle Theory and K-Cohomology Invariants
      url: https://www.mathematik.uni-muenchen.de/~schotten/Texte/978-3-540-74955-4_Book_LNP726corr1.pdf
      locator: Chapter 11, Definition 5.2 and its displayed pairing calculation, printed page 132
---

## Definition

Assume AC. Let $M$ be a closed topological $n$-manifold, possibly empty or
disconnected. Give it its canonical mod-two orientation and write $[M]_2$ for
the resulting fundamental class. For $0\leq k\leq n$, the **$k$th Wu class**
is the unique class $v_k(M)\in H^k(M;\mathbb F_2)$ such that

$$
\langle v_k(M)\smile x,[M]_2\rangle=\langle Sq^k(x),[M]_2\rangle\quad\text{for every }x\in H^{n-k}(M;\mathbb F_2).
$$

Set $v_k(M)=0$ outside $0\leq k\leq n$. The **total Wu class** is the finite
sum

$$
v(M):=\sum_{k=0}^{n}v_k(M)\in H^*(M;\mathbb F_2).
$$

## Facts & Assumptions

**Given:** The closed $n$-manifold $M$ and an integer $k$.

[F1] Every manifold has a canonical $\mathbb F_2$-orientation, and a compact
manifold has finitely many components
([[prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise]]).

[F2] Assuming AC, the mod-two cup pairing of a closed oriented manifold is
perfect in both variables
([[cor-poincare-duality-gives-a-nonsingular-cup-pairing]]).

[F3] Each $Sq^k$ is an additive cohomology operation
([[thm-steenrod-squares-are-well-defined-and-natural]]).

[F4] On $H^d(-;\mathbb F_2)$, $Sq^0$ is the identity and $Sq^k$ is zero for
$k>d$
([[prop-steenrod-square-normalization-instability-and-top-square]]).

[A1] [[def-axiom-of-choice]] is assumed exactly because [F2] assumes it; no
new family of choices is made here.

## Verification

**Proof technique:** represent the Steenrod-square functional by the perfect
Poincaré cup pairing.

1.1 Fix $0\leq k\leq n$. [F1, F3]
The canonical orientation supplies $[M]_2$. Since $Sq^k$ is additive, the map

$$
L_k\colon H^{n-k}(M;\mathbb F_2)\longrightarrow\mathbb F_2,\qquad L_k(x)=\langle Sq^k(x),[M]_2\rangle
$$

is an $\mathbb F_2$-linear functional. This remains true componentwise: the
fundamental class is the finite sum of the component classes and evaluation
is additive.

1.2 The first adjoint of the cup pairing is an isomorphism. [F2, A1]
In the present degrees it is

$$
H^k(M;\mathbb F_2)\xrightarrow{\ \cong\ }\operatorname{Hom}_{\mathbb F_2}\bigl(H^{n-k}(M;\mathbb F_2),\mathbb F_2\bigr),\quad a\longmapsto\bigl(x\longmapsto\langle a\smile x,[M]_2\rangle\bigr).
$$

Consequently $L_k$ has exactly one preimage. Defining that preimage to be
$v_k(M)$ proves both existence and uniqueness in the displayed definition.
AC is used only through the already proved perfectness assertion [F2].

1.3 The normalization and high-degree components are determined. [F2, F4,
step 1.2]
For $k=0$, [F4] gives $L_0(x)=\langle x,[M]_2\rangle$. The unit
$1\in H^0(M;\mathbb F_2)$ represents this functional, so uniqueness gives
$v_0(M)=1$. If $2k>n$, every $x\in H^{n-k}$ has degree $n-k<k$; instability
in [F4] makes $Sq^k(x)=0$. Thus $L_k=0$, and injectivity of the adjoint gives
$v_k(M)=0$. This includes $k=n>0$.

2.1 For the empty manifold the Wu classes and defining functionals vanish, with degree-zero unit equal to zero. [F1, F2, F3, F4, A1, step 1.1, step 1.2, step 1.3]
For the empty manifold all displayed groups and functionals are zero, and the
degree-zero unit is the zero element of its zero cohomology ring. For a point,
$n=0$ and $v=v_0=1$. The zero functional is represented by the zero class.
The endpoints $k=0,n$ were treated in step 1.3; indices $k<0$ and $k>n$ are
zero by the stated convention, so the total sum is finite. Disconnected
manifolds are included by the finite component sum in step 1.1. Degenerate
singular simplices require no new convention because [F2] and [F3] are
statements about ordinary singular cohomology. No biconditional is asserted.
Apart from the AC already exposed by [F2], the definition makes no choice. ∎
