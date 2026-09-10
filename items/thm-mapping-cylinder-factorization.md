---
id: thm-mapping-cylinder-factorization
kind: theorem
title: Mapping cylinder factorization
deps: ["def-mapping-cylinder-and-mapping-cone", "prop-cofibrations-are-characterized-by-a-retraction-of-the-mapping-cylinder-strip", "lem-interval-exponential-law-and-quotient-homotopies", "lem-continuity-is-local-and-pastes", "def-retraction-and-deformation-retract", "lem-compact-generation-preserves-the-cylinder-and-closed-pushouts"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 6 §3 p.45
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

For a continuous map $f:X\to Y$ of CGWH spaces, $f=rj$ through its mapping cylinder, j is an unbased cofibration, and the included Y is a strong deformation retract of $M_f$. The construction is natural for strictly commuting squares. The corresponding based constructions hold for reduced mapping cylinders; the based inclusion $X\to CX$ at the base of the reduced cone is a based cofibration.

## Facts & Assumptions

[F1] The cylinder identifies (x,0) with f(x) and its free end is j(x)=[x,1]. [[def-mapping-cylinder-and-mapping-cone]]

[F2] The cylinder and closed-end quotient constructions are CGWH. [[lem-compact-generation-preserves-the-cylinder-and-closed-pushouts]]

[F3] Products of quotient maps with I are quotient. [[lem-interval-exponential-law-and-quotient-homotopies]]

[F4] Continuous functions on a finite closed cover paste. [[lem-continuity-is-local-and-pastes]]

[F5] A strong deformation retract keeps the retracted subspace fixed throughout the deformation. [[def-retraction-and-deformation-retract]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 F2 makes the cylinder CGWH and its free end a closed embedded copy of X. By the defining formulas, $rj(x)=f(x)$. Define $D(y,t)=y$ and $D([x,s],t)=[x,(1-t)s]$. At s=0 both clauses have value f(x); F3 makes the induced homotopy continuous. It starts at the identity, ends at the inclusion followed by r, and fixes Y at every time. This is the claimed strong deformation retraction by F5. [F1, F2, F3, F5]

1.2 Given initial data $a:M_f\to Z$ and a homotopy $b:X\times I\to Z$ with $b(x,0)=a(j(x))$, prescribe data on the bottom and two vertical sides of the square with coordinates $(s,t)$: $a([x,s])$ on t=0, $b(x,t)$ on s=1, and $a(f(x))$ on s=0. The corner values agree. Keep a(y) constant on Y. Put $\lambda=1/\max(1-t/2,2|s-1/2|)$ and $R(s,t)=(1/2+\lambda(s-1/2),2+\lambda(t-2))$. The denominator is at least 1/2. If its first term is maximal the second output is zero; otherwise the first output is 0 or 1. Both coordinates lie in I, and on the three designated sides λ=1. Thus R is a continuous retraction onto those sides. [F1, F4]

2.1 Compose the pasted side data with R. This gives a continuous extension on $X\times I\times I$; its value at s=0 is always a(f(x)). Together with the constant homotopy on Y, F3 descends it to $M_f\times I$. It restricts to a initially and to b on the free end, proving HEP. If a commuting square is $v f=f^{\prime}u$, the map $[x,s]\mapsto[u(x),s]$, $y\mapsto v(y)$ respects the attaching relation and all displayed height formulas. This proves naturality of the factorization and deformation. [F1, F3, F4, step 1.2]

3.1 For based data the values on the basepoint track are constant, so the same formulas descend after collapsing that track. Interchange the two vertical sides in step 1.2 to extend a prescribed homotopy at the base s=0 of the reduced cone, keeping the tip s=1 constant. Descent then proves the based cone-base cofibration as well. Empty X gives the unchanged space Y and an empty free-end inclusion. [F2, F3, step 1.2, step 2.1] ∎
