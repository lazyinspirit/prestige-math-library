---
id: def-mod-p-reduced-power-operations
kind: definition
title: Mod-p reduced power operations
status: draft
origin: pipeline
deps: ["lem-cyclic-p-fold-power-construction", "def-bockstein-connecting-operation", "lem-the-bockstein-is-independent-of-lift-and-cocycle-representative", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: N. E. Steenrod and D. B. A. Epstein, Cohomology Operations
      url: https://web.archive.org/web/20230124163804if_/https://people.math.rochester.edu/faculty/doug/otherpapers/steenrod-epstein.pdf
      locator: Chapter VII Definition 6.1 and Lemmas 6.3--6.4, printed pages 112--113
---

## Definition

Assume AC, let $p$ be an odd prime, and put $m=(p-1)/2$. For
$q\geq0$, $x\in H^q(X;\mathbb F_p)$, and $i\geq0$, define

$$
P^i(x):=(-1)^{\,i+m(q^2+q)/2}(m!)^{-q}D_{(q-2i)(p-1)}(x)\in H^{q+2i(p-1)}(X;\mathbb F_p).
$$

Here $D_j$ is the cyclic coefficient operation of
[[lem-cyclic-p-fold-power-construction]], and the negative exponent denotes
the inverse of the nonzero element $(m!)^q\in\mathbb F_p^\times$. Define
$P^i=0$ for $i<0$, and define

$$
\beta P^i:=\beta\circ P^i:H^q(X;\mathbb F_p)\longrightarrow H^{q+2i(p-1)+1}(X;\mathbb F_p)
$$

using the mod-$p$ Bockstein associated to
$0\to\mathbb Z/p\xrightarrow{p}\mathbb Z/p^2\to\mathbb Z/p\to0$. For
$i<0$, set $\beta P^i=0$ as well.

The inverse factorial is intentional. The displayed formula in
Steenrod--Epstein VII Definition 6.1 prints $(m!)^q$, but its proof of
Lemma 6.4 uses $(m!)^{-q}$. The inverse is forced by the top coefficient in
the preceding lemma; for example, at $p=5,q=1$, the printed positive power
would make $P^0=-\mathrm{id}$.

## Facts & Assumptions

**Given:** AC, an odd prime $p$, $m=(p-1)/2$, a space $X$, a degree
$q\geq0$ class, and an integer $i$.

[F1] The cyclic coefficients are natural and additive and vanish for
$j<0$ or $j>(p-1)q$
([[lem-cyclic-p-fold-power-construction]]).

[F2] The mod-$p$ Bockstein is the connecting operation for the cyclic
coefficient sequence ([[def-bockstein-connecting-operation]]).

[F3] The Bockstein is independent of its lift and cocycle representative
([[lem-the-bockstein-is-independent-of-lift-and-cocycle-representative]]).

[F4] The top cyclic coefficient is
$D_{(p-1)q}(x)=(-1)^{mq(q+1)/2}(m!)^qx$
([[lem-cyclic-p-fold-power-construction]]).

[A1] [[def-axiom-of-choice]] is assumed exactly because the singular cyclic
coefficient supplier [F1] assumes it.

## Verification

**Proof technique:** check the grading and normalization directly from the
cyclic coefficient formula.

1.1 The formula is defined and has the stated degree. [given, F1, A1]
None of $1,\ldots,m$ is zero in $\mathbb F_p$, so $m!$ and every
$(m!)^q$ are units. If $j=(q-2i)(p-1)$, then

$$
pq-j=pq-(q-2i)(p-1)=q+2i(p-1).
$$

Thus the scalar multiple of $D_j(x)$ lies in the displayed target. Since
$q(q+1)$ is even, the sign exponent is an integer. Naturality and
additivity are inherited from [F1].

2.1 The normalization gives $P^0=\mathrm{id}$. [F4, step 1.1]
At $i=0$, [F4] gives

$$
P^0(x)=(-1)^{mq(q+1)/2}(m!)^{-q}(-1)^{mq(q+1)/2}(m!)^qx=x.
$$

The two equal sign exponents add to an even integer, and the factorial
factors cancel.

2.2 The index conventions include negative operations and instability. [F1, step 1.1]
For $i<0$, the operation is zero by definition; equivalently its cyclic
index exceeds $(p-1)q$. If $i\geq0$ and $2i>q$, then
$(q-2i)(p-1)<0$, so [F1] makes $P^i(x)=0$. At $2i=q$, the cyclic index
is zero and the formula legitimately uses $D_0(x)=x^p$; it is not included
in the vanishing range.

3.1 The Bockstein composite and all boundary cases are well-defined. [F2, F3, A1, step 1.1, step 2.1, step 2.2]
The specified cyclic short exact sequence and [F2] define the positive mod-$p$
Bockstein, while [F3] makes the resulting cohomology operation independent of
cochain choices. Hence its composite with $P^i$ has degree one more than
$P^i$.

For the empty space and the zero class, both operations are zero. At $q=0$,
step 2.1 gives $P^0=\mathrm{id}$, while every $i>0$ is in the strict
instability range; this includes the point and its elements zero and one.
The endpoints $i=0$ and $2i=q$, negative $i$, and $2i>q$ are all
explicit. Degenerate singular simplices require no new convention because
the operations are formed by composing the already well-defined suppliers.
No biconditional is asserted. This definition makes no new selection: AC is
propagated exactly from [F1], and the cyclic Bockstein uses canonical least
residue lifts. ∎
