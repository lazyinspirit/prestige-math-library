---
id: lem-sectorial-form-angle-controls-the-numerical-range-of-its-operator
kind: lemma
title: The sectorial form angle controls the numerical range of its operator
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-closed-sectorial-form-and-its-associated-operator, def-hilbert-space, def-bounded-coercive-and-symmetric-sesquilinear-forms, def-real-and-complex-inner-product-space, def-complex-conjugate-real-imaginary-part-and-modulus, def-numerical-range-and-numerical-radius]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: 'Chapter 2 Section 2.3, the computation of $\operatorname{Re}(e^{\pm i\vartheta}Au|u)$ in the proof of Corollary 2.29, printed p. 66'
verification:
  precheck: pass
---

## Statement

Let $a$ be a closed sectorial form on $V\subseteq H$ with constants $M,\theta$
and associated operator $A$
([[def-closed-sectorial-form-and-its-associated-operator]]), and write
$\overline{S_\theta}:=\{\zeta\in\mathbb C:|\arg\zeta|\le\theta\}\cup\{0\}$
for the closed sector of half-angle $\theta$ around the positive real axis.
Then for every $u\in D(A)$:

1. $\langle Au,u\rangle=-a(u,u)$;
2. $\langle(A-M)u,u\rangle\in-\overline{S_\theta}$.

In particular the normalized quadratic form values
$\langle(A-M)u,u\rangle/\|u\|_H^2$ for $u\in D(A)\setminus\{0\}$ lie in
$-\overline{S_\theta}$ and those of $A$ lie in its translate by $M$; when $A$ is
bounded this is the containment of the numerical range
([[def-numerical-range-and-numerical-radius]]). No choice principle is used.

## Facts & Assumptions

**Given:** A closed sectorial form $a$ on the dense subspace $V\subseteq H$ with constants $M\ge0$ and $\theta\in[0,\pi/2)$ and associated operator $A$ ([[def-closed-sectorial-form-and-its-associated-operator]]); the closed sector $\overline{S_\theta}=\{\zeta:\operatorname{Re}\zeta\ge0,\ |\operatorname{Im}\zeta|\le\tan\theta\,\operatorname{Re}\zeta\}$; and a vector $u\in D(A)$ with $f:=Au$.

[L1] $D(A)=\{u\in V:\exists f\in H,\ a(u,v)=-(f,v)\ \forall v\in V\}$ and $Au:=f$, and the form satisfies $\operatorname{Re}a(u,u)\ge-M\|u\|_H^2$ and $|\operatorname{Im}a(u,u)|\le\tan\theta\,(\operatorname{Re}a(u,u)+M\|u\|_H^2)$ for all $u\in V$; the pairing is linear in the first argument ([[def-closed-sectorial-form-and-its-associated-operator]]).

[L2] The inner product of a complex Hilbert space satisfies $\langle u,v\rangle=\overline{\langle v,u\rangle}$, $\langle v,v\rangle\ge0$ with equality only for $v=0$, and is linear in the first argument; in particular $\langle v,v\rangle=\|v\|_H^2$ is real and nonnegative ([[def-real-and-complex-inner-product-space]], [[def-hilbert-space]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1. For $u\in D(A)$ the defining relation with $f=Au$ gives $a(u,v)=-(Au,v)$ for every $v\in V$; testing with $v=u$ gives $a(u,u)=-(Au,u)$, that is $\langle Au,u\rangle=-a(u,u)$. [L1, given, algebra]

1.2 The shifted form and its sector. Define $b(u,v):=a(u,v)+M\langle u,v\rangle$ on $V\times V$. Then $b$ is sesquilinear and, for $u\in V$, $\operatorname{Re}b(u,u)=\operatorname{Re}a(u,u)+M\|u\|_H^2\ge0$ by [L1] and [L2], while $\operatorname{Im}b(u,u)=\operatorname{Im}a(u,u)$ and $|\operatorname{Im}a(u,u)|\le\tan\theta\,(\operatorname{Re}a(u,u)+M\|u\|_H^2)$, so $|\operatorname{Im}b(u,u)|\le\tan\theta\operatorname{Re}b(u,u)$; by the description of $\overline{S_\theta}$ in the givens this says $b(u,u)\in\overline{S_\theta}$. [L1, L2, given, algebra]

2.1 Claim 2. For $u\in D(A)$, $\langle(A-M)u,u\rangle=\langle Au,u\rangle-M\langle u,u\rangle=-a(u,u)-M\|u\|_H^2=-(a(u,u)+M\langle u,u\rangle)=-b(u,u)$ by [step 1.1], [step 1.2] and [L2], and $-b(u,u)\in-\overline{S_\theta}$ by [step 1.2]. [step 1.1, step 1.2, L2, algebra]

3.1 Normalized consequences. If $u\in D(A)\setminus\{0\}$ then $\|u\|_H^2>0$ by [L2], and multiplying by the positive real scalar $\|u\|_H^{-2}$ preserves the closed sector $\overline{S_\theta}$, so $\langle(A-M)u,u\rangle/\|u\|_H^2\in-\overline{S_\theta}$ and $\langle Au,u\rangle/\|u\|_H^2\in M-\overline{S_\theta}$; for bounded $A$ on a nonzero $H$, these normalized values are exactly the numerical ranges of $A-M$ and $A$, respectively. On $H=\{0\}$ both operators are zero and their numerical ranges are $\{0\}$ by the convention in [[def-numerical-range-and-numerical-radius]]; the containments still hold since $0\in-\overline{S_\theta}$ and $0=M-M\in M-\overline{S_\theta}$. Claims 1 and 2 are [step 1.1] and [step 2.1], and the argument fixed the arbitrary vector $u$ and used no selection, so no choice principle was used. [step 1.1, step 2.1, L2, given] ∎ 