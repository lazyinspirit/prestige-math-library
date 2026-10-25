---
id: thm-cayley-correspondence
kind: theorem
title: "Cayley correspondence between self-adjoint operators and unitaries"
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-cayley-transform-of-a-self-adjoint-operator, thm-self-adjointness-range-criterion, thm-hilbert-adjoint-properties, lem-kernel-range-orthogonality-for-hilbert-adjoints, lem-unbounded-adjoint-is-well-defined-and-closed, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-orthogonality-and-orthogonal-complement, def-dense-top, def-countable-choice, def-adjoint-of-a-densely-defined-unbounded-operator, thm-self-adjoint-resolvent-estimate]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Theorem 2.26 with complete proof, pp.91-92"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Theorem 6.39, Sec. 6.3.2"
verification:
  audited: 2026-09-22
---

## Statement

Assume Countable Choice. The map $T\mapsto C_T=(T-i)(T+i)^{-1}$ is a bijection
from the set of self-adjoint operators on $H$ onto the set of unitary operators
$U$ on $H$ with $\ker(I-U)=\{0\}$. The inverse map assigns to such a $U$ the
operator
$$D(T_U)=\operatorname{ran}(I-U),\qquad T_U(I-U)y=i(I+U)y\quad(y\in H).$$
For this $T_U$ both $T_U-i$ and $T_U+i$ map $D(T_U)$ onto $H$, so $T_U$ is
self-adjoint, and $C_{T_U}=U$.

## Facts & Assumptions

[A1] For self-adjoint $T$ the Cayley transform $C_T$ is unitary, $\ker(I-C_T)=\{0\}$, and $\operatorname{ran}(I-C_T)=D(T)$; also $\|(T\mp i)x\|^2=\|Tx\|^2+\|x\|^2$ for $x\in D(T)$ ([[def-cayley-transform-of-a-self-adjoint-operator]], [[thm-self-adjoint-resolvent-estimate]]).

[A2] A densely defined symmetric operator $T$ is self-adjoint if $\operatorname{ran}(T-i)=\operatorname{ran}(T+i)=H$ ([[thm-self-adjointness-range-criterion]]).

[A3] For unitary $U$ one has $U^*U=UU^*=I$ and $U$ is bijective, with $U^{-1}=U^*$; moreover $\operatorname{ran}(A)^\perp=\ker(A^*)$ for bounded $A$, so $\operatorname{ran}(I-U)$ is dense exactly when $\ker(I-U^*)=\{0\}$ ([[thm-hilbert-adjoint-properties]], [[lem-kernel-range-orthogonality-for-hilbert-adjoints]], [[def-orthogonality-and-orthogonal-complement]], [[def-dense-top]]).

## Proof

**Proof technique:** direct.

**Given:** A unitary $U$ with $\ker(I-U)=\{0\}$, and the map $T\mapsto C_T$ of [A1].

1.1 The assignment is well defined: if $y,y'\in H$ satisfy $(I-U)y=(I-U)y'$, then $y=y'$ because $\ker(I-U)=\{0\}$; hence $D(T_U):=\operatorname{ran}(I-U)$ is well defined and $T_U(I-U)y:=i(I+U)y$ defines a map on $D(T_U)$. [A3, given]

1.2 $D(T_U)$ is dense: by [A3], $\operatorname{ran}(I-U)^\perp=\ker(I-U^*)$, and $I-U^*=I-U^{-1}$ has kernel $\{0\}$ because $(I-U^{-1})y=0$ means $y=Uy$, that is $y\in\ker(I-U)=\{0\}$. [A3, given]

1.3 Conversely $T_{C_T}=T$ for every self-adjoint $T$: by [A1] $\operatorname{ran}(I-C_T)=D(T)$ and $I-C_T=2i(T+i)^{-1}$, so for $x\in D(T)$ one has $(I-C_T)(T+i)x=2ix$ and $i(I+C_T)(T+i)x=i(2Tx)$; hence the inverse construction sends $C_T$ to $T$. [A1]

2.1 $T_U$ is symmetric: for $y,y'\in H$, expanding both pairings and using $\langle Uy,Uy'\rangle=\langle y,y'\rangle$, one gets $\langle T_U(I-U)y,(I-U)y'\rangle=i(\langle Uy,y'\rangle-\langle y,Uy'\rangle)=\langle (I-U)y,T_U(I-U)y'\rangle$. [A3, step 1.1]

2.2 Ranges: for every $y\in H$ one has $(T_U+i)(I-U)y=2iy$ and $(T_U-i)(I-U)y=2iUy$; hence $\operatorname{ran}(T_U+i)=H$ and, since $U$ is onto by [A3], $\operatorname{ran}(T_U-i)=H$. [A1, A3, step 1.1]

3.1 By steps 1.2, 2.1 and 2.2 the operator $T_U$ is densely defined, symmetric, and has both ranges equal to $H$, so $T_U$ is self-adjoint by [A2]. [A2, step 1.2, step 2.1, step 2.2]

4.1 $C_{T_U}=U$: by [A1] applied to the self-adjoint $T_U$ and by step 2.2 one has $(T_U+i)^{-1}(2iy)=(I-U)y$, so $C_{T_U}(2iy)=(T_U-i)(I-U)y=2iUy$; since $y\mapsto2iy$ is onto $H$, $C_{T_U}=U$. [A1, step 2.2, step 3.1]

5.1 By steps 1.3 and 4.1 the two constructions are mutually inverse, and every assignment above is a bijection by construction; hence $T\mapsto C_T$ is a bijection onto the stated class. [step 1.3, step 3.1, step 4.1] ∎
