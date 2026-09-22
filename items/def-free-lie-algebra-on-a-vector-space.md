---
id: def-free-lie-algebra-on-a-vector-space
kind: definition
title: Free Lie algebra on a vector space
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-tensor-algebra-of-a-vector-space, def-lie-subalgebra-ideal-and-center]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §9, the free Lie algebra, printed p. 186"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 14, Section 14.2, printed pp. 78-79"
landmark: false
---

## Definition

Let $V$ be a complex vector space and let $T(V)=\bigoplus_{n\ge0}V^{\otimes n}$
be its tensor algebra ([[def-tensor-algebra-of-a-vector-space]]). The
commutator bracket $[x,y]=xy-yx$ makes $T(V)$ a Lie algebra whose underlying
vector space is $T(V)$. The **free Lie algebra** on $V$, written $L(V)$, is the
Lie subalgebra of $T(V)$ ([[def-lie-subalgebra-ideal-and-center]]) generated
by the image of $V=V^{\otimes1}$, that is, the smallest Lie subalgebra of
$T(V)$ containing $V$. Elements of $L(V)$ are finite linear combinations of
iterated commutators of elements of $V$.

The terminology "free" refers to the universal property proved in
[[thm-universal-property-of-the-free-lie-algebra]]: every linear map from $V$
to a complex Lie algebra extends uniquely to a homomorphism of Lie algebras
from $L(V)$. The construction is licensed by the Poincaré-Birkhoff-Witt
theorem, which identifies $T(V)$ with the universal enveloping algebra of the
free Lie algebra and shows in particular that $V$ embeds in $L(V)$ and that
$L(V)=0$ when $V=0$, $L(V)=V$ when $\dim V=1$, and $L(V)$ is
infinite-dimensional when $\dim V\ge2$.
