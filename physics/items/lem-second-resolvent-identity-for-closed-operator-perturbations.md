---
id: lem-second-resolvent-identity-for-closed-operator-perturbations
kind: lemma
title: "Second resolvent identity for a closed perturbation"
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-relative-boundedness-with-respect-to-an-operator, def-densely-defined-closed-and-closable-operator, def-bounded-linear-operator, def-unbounded-linear-operator-domain-and-graph, thm-closed-graph-theorem, def-dependent-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 6.1, Lemma 6.5 with proof, p.159"
verification:
  audited: 2026-09-22
---

## Statement

Assume Dependent Choice. Let $A$ and $C$ be closed operators with $D(C)=D(A)$, put $B:=C-A$, and
assume $B$ is bounded for the graph norm of $A$
([[def-relative-boundedness-with-respect-to-an-operator]]). Then for every
$z\in\rho(A)\cap\rho(C)$
$$R_C(z)-R_A(z)=R_A(z)BR_C(z)=R_C(z)BR_A(z),$$
and every product here is defined on all of $H$ and is bounded.

## Facts & Assumptions

[A1] For $z\in\rho(A)$ the operator $R_A(z)$ maps $H$ bijectively onto $D(A)$ and $A R_A(z)=zR_A(z)-I$ on $H$, since $A=z-(z-A)$ ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]).

[A2] $B$ is bounded for the graph norm of $A$: there are $a,b\ge0$ with $\|Bx\|\le a\|Ax\|+b\|x\|$ for $x\in D(A)$; each $B R_A(z)$ is therefore everywhere defined and bounded, since $\|BR_A(z)y\|\le a\|AR_A(z)y\|+b\|R_A(z)y\|$ and both terms are bounded in $y$ ([[def-relative-boundedness-with-respect-to-an-operator]], [A1]).

[A3] $(z-C)R_C(z)=I$ and $(z-A)R_A(z)=I$ on $H$, so $R_A(z)(C-z)R_C(z)=-R_A(z)$ and $R_C(z)(A-z)R_A(z)=-R_C(z)$, because $R_C(z)$ has range $D(C)=D(A)$ ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]).

[A4] The graph norms of two closed operators with the same domain are equivalent: both domains are Banach, and the identity map from the $C$-graph norm to the $A$-graph norm has closed graph, hence is bounded by the closed graph theorem ([[thm-closed-graph-theorem]], [[def-dependent-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Closed $A,C$ with $D(A)=D(C)$, $B=C-A$ graph-norm bounded for $A$, and $z\in\rho(A)\cap\rho(C)$.

1.1 The operator $BR_A(z)$ is bounded by [A1] and [A2]. By [A4] the $A$-graph norm is bounded by a constant times the $C$-graph norm, so the same relative bound makes $B$ bounded for the $C$-graph norm; applying [A1] with $C$ in place of $A$ shows that $BR_C(z)$ is bounded as well. [A1, A2, A4]

2.1 $-R_C(z)+R_A(z)BR_C(z)=-R_A(z)$, that is $R_C(z)-R_A(z)=R_A(z)BR_C(z)$: by [A3], $R_A(z)(C-z)R_C(z)=-R_A(z)$, and expanding $C=A+B$ gives $R_A(z)(C-z)R_C(z)=R_A(z)(A-z)R_C(z)+R_A(z)BR_C(z)=-R_C(z)+R_A(z)BR_C(z)$, because $R_A(z)(A-z)$ is minus the identity on $D(A)=D(C)$ and $R_C(z)$ takes values in $D(C)$. [A2, A3, step 1.1]

2.2 By the same computation with the roles of $A$ and $C$ interchanged (so that the perturbation is $-B$), $-R_A(z)-R_C(z)BR_A(z)=-R_C(z)$, that is $R_C(z)-R_A(z)=R_C(z)BR_A(z)$. [A2, A3, step 1.1]

3.1 Rearranging steps 2.1 and 2.2 gives $R_C(z)-R_A(z)=R_A(z)BR_C(z)$ and $R_C(z)-R_A(z)=R_C(z)BR_A(z)$, which is the stated identity; all products are bounded by step 1.1. ∎
