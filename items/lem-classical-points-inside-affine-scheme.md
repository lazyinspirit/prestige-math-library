---
id: lem-classical-points-inside-affine-scheme
kind: lemma
title: "Classical k-points give closed points over an algebraically closed field"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-closed-point-scheme, def-algebraically-closed-field, cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: "James S. Milne, Algebraic Geometry, 10.24"
      url: "https://www.jmilne.org/math/CourseNotes/AG10.pdf"
---
## Statement

Let $k$ be algebraically closed and let $A$ be a reduced finite-type
$k$-algebra. The closed points of $\operatorname{Spec}A$ are exactly the
kernels of the $k$-algebra maps $A\to k$. They need not exhaust all points of
$\operatorname{Spec}A$.

## Facts & Assumptions

**Given:** An algebraically closed field $k$ and a reduced finite-type
$k$-algebra $A$.

[F1] Every maximal ideal of an affine $k$-algebra is the kernel of a
$k$-algebra map to $k$ ([[cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field]]).

[F2] Closed points of an affine scheme are its maximal ideals
([[def-closed-point-scheme]]).

## Proof

**Proof technique:** direct.

1.1 A closed point is maximal by [F2], and [F1] identifies every such ideal with a kernel $A\to k$. [F1, F2]

1.2 Every unital $k$-algebra map $A\to k$ is surjective, so its kernel is maximal and hence closed by [F2]. [F2, algebra]

2.1 Thus classical $k$-points and closed points agree, but this makes no assertion that every prime is maximal. [step 1.1, step 1.2] ∎
 
