---
id: lem-second-resolvent-identity-for-closed-operator-perturbations
kind: lemma
title: "Second resolvent identity for a closed perturbation"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-relative-boundedness-with-respect-to-an-operator, def-densely-defined-closed-and-closable-operator, def-bounded-linear-operator, def-unbounded-linear-operator-domain-and-graph]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 6.1, Lemma 6.5 with proof, p.159"
---

## Statement

Let $A$ and $C$ be closed operators with $D(C)=D(A)$, put $B:=C-A$, and
assume $B$ is bounded for the graph norm of $A$
([[def-relative-boundedness-with-respect-to-an-operator]]). Then for every
$z\in\rho(A)\cap\rho(C)$
$$R_C(z)-R_A(z)=R_A(z)BR_C(z)=R_C(z)BR_A(z),$$
and every product here is defined on all of $H$ and is bounded.

## Facts & Assumptions

[A1] For $z\in\rho(A)$ the operator $R_A(z)$ maps $H$ bijectively onto $D(A)$ and $A R_A(z)=zR_A(z)-I$ on $H$, since $A=z-(z-A)$ ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]).

[A2] $B$ is bounded for the graph norm of $A$: there are $a,b\ge0$ with $\|Bx\|\le a\|Ax\|+b\|x\|$ for $x\in D(A)$; each $B R_A(z)$ is therefore everywhere defined and bounded, since $\|BR_A(z)y\|\le a\|AR_A(z)y\|+b\|R_A(z)y\|$ and both terms are bounded in $y$ ([[def-relative-boundedness-with-respect-to-an-operator]], [A1]).

[A3] $(z-C)R_C(z)=I$ and $(z-A)R_A(z)=I$ on $H$, so $R_A(z)(C-z)R_C(z)=-R_A(z)$ and $R_C(z)(A-z)R_A(z)=-R_C(z)$, because $R_C(z)$ has range $D(C)=D(A)$ ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]).

## Proof

**Proof technique:** direct.

**Given:** Closed $A,C$ with $D(A)=D(C)$, $B=C-A$ graph-norm bounded for $A$, and $z\in\rho(A)\cap\rho(C)$.

1.1 Both $BR_A(z)$ and $BR_C(z)$ are everywhere defined and bounded by [A1] and [A2]. [A1, A2]

2.1 $-R_C(z)+R_A(z)BR_C(z)=-R_A(z)$, that is $R_C(z)-R_A(z)=R_A(z)BR_C(z)$: by [A3], $R_A(z)(C-z)R_C(z)=-R_A(z)$, and expanding $C=A+B$ gives $R_A(z)(C-z)R_C(z)=R_A(z)(A-z)R_C(z)+R_A(z)BR_C(z)=-R_C(z)+R_A(z)BR_C(z)$, because $R_A(z)(A-z)$ is minus the identity on $D(A)=D(C)$ and $R_C(z)$ takes values in $D(C)$. [A2, A3, step 1.1]

2.2 By the same computation with the roles of $A$ and $C$ interchanged (so that the perturbation is $-B$), $-R_A(z)-R_C(z)BR_A(z)=-R_C(z)$, that is $R_C(z)-R_A(z)=R_C(z)BR_A(z)$. [A2, A3, step 1.1]

3.1 Rearranging steps 2.1 and 2.2 gives $R_C(z)-R_A(z)=R_A(z)BR_C(z)$ and $R_C(z)-R_A(z)=R_C(z)BR_A(z)$, which is the stated identity; all products are bounded by step 1.1. ∎
