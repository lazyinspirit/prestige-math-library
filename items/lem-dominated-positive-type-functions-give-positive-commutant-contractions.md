---
id: lem-dominated-positive-type-functions-give-positive-commutant-contractions
kind: lemma
title: Dominated positive type and positive commutant contractions
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - def-bounded-linear-operator
  - def-continuous-function-of-positive-type
  - def-countable-choice
  - def-hilbert-space-adjoint
  - def-linear-map
  - def-matrix-coefficient-of-a-unitary-representation
  - def-real-and-complex-inner-product-space
  - def-self-adjoint-positive-unitary-and-normal-operator
  - def-space-of-bounded-linear-operators
  - def-strongly-continuous-unitary-representation
  - lem-positive-type-functions-define-a-pre-hilbert-form
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-gns-construction-for-topological-groups
  - thm-riesz-representation-for-hilbert-space
axiom_audit: "Assume AC to infer DC and Countable Choice. Countable Choice is used by the GNS completion and its bounded translation extensions and by the Hilbert-space Riesz representation that produces T. It also supplies the hypotheses of the repository's adjoint and positive-operator definitions. The finite-form construction, its uniqueness on the dense orbit span, and the converse matrix tests use no further choice."
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Proposition C.5.1 and complete proof"
      url: https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf
      locator: "Appendix C §C.5, printed pp. 379–380"
---

## Statement

Assume the Axiom of Choice. Let $G$ be a topological group, let
$0\le\psi\le\varphi$ in $P(G)$, and let
$(\pi_\varphi,H_\varphi,\xi_\varphi)$ be the cyclic GNS triple of $\varphi$.
There is a unique bounded linear operator $T\in\mathcal B(H_\varphi)$ such
that $T=T^*$, both $T$ and $I-T$ are positive, $T\in\pi_\varphi(G)'$, and
$$\psi(g)=\langle\pi_\varphi(g)T\xi_\varphi,\xi_\varphi\rangle\qquad(g\in G).$$
Conversely, every bounded self-adjoint $T\in\pi_\varphi(G)'$ for which $T$
and $I-T$ are positive defines a continuous function
$\psi_T(g)=\langle\pi_\varphi(g)T\xi_\varphi,\xi_\varphi\rangle$ of positive
type with $0\le\psi_T\le\varphi$. Here positive means that the quadratic form
$u\mapsto\langle Tu,u\rangle$ is real and nonnegative, as in the positive
operator definition.

## Facts & Assumptions

**Given:** AC; a topological group $G$; $0\le\psi\le\varphi$ in $P(G)$; the first-variable-linear Hilbert pairing; and the GNS triple of $\varphi$.

[F1] The relation $0\le\psi\le\varphi$ means that $\psi$ and $\varphi-\psi$ are continuous functions of positive type ([[def-continuous-function-of-positive-type]]).

[F2] The GNS space is the Hilbert completion of the quotient by the null space of the form $B_\varphi$, the point-mass formula is $B_\varphi(\delta_x,\delta_y)=\varphi(y^{-1}x)$, and the canonical vector is cyclic with $\pi_\varphi(g)\xi_\varphi$ represented by $\delta_g$ ([[lem-positive-type-functions-define-a-pre-hilbert-form]], [[thm-gns-construction-for-topological-groups]]).

[F3] On a complex Hilbert space with the first-variable-linear convention, every bounded linear functional $F$ has a unique representing vector $y$ with $F(v)=\langle v,y\rangle$; the theorem assumes Countable Choice ([[thm-riesz-representation-for-hilbert-space]]).

[F4] Cauchy–Schwarz holds on every real or complex inner-product space ([[thm-cauchy-schwarz-in-an-inner-product-space]]). The quotient of finitely supported functions by the null space of $B_\psi$ is an inner-product space ([[lem-positive-type-functions-define-a-pre-hilbert-form]]).

[F5] Boundedness and linearity have their normed-space meanings; self-adjoint and positive operators and the commutant $\pi_\varphi(G)'$ have the stated definitions ([[def-bounded-linear-operator]], [[def-linear-map]], [[def-self-adjoint-positive-unitary-and-normal-operator]], [[def-strongly-continuous-unitary-representation]], [[def-matrix-coefficient-of-a-unitary-representation]], [[def-space-of-bounded-linear-operators]], [[def-hilbert-space-adjoint]], [[def-real-and-complex-inner-product-space]]).

[F6] AC implies DC and hence Countable Choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

## Proof

Bekka–de la Harpe–Valette's Proposition C.5.1 proves the related domination estimate and constructs an intertwiner into the GNS space of a dominated function. The argument below derives the precise positive-commutant-operator correspondence directly from the dominated sesquilinear form, including uniqueness.

**Proof technique:** direct.

1.1 For $\eta\in\{\psi,\varphi-\psi,\varphi\}$ let $B_\eta(f,h)=\sum_{x,y}f(x)\overline{h(y)}\eta(y^{-1}x)$ on finitely supported functions. By [F1] and [[lem-positive-type-functions-define-a-pre-hilbert-form]], these are Hermitian positive-semidefinite forms, and $B_\varphi=B_\psi+B_{\varphi-\psi}$. Thus $0\le B_\psi(f,f)\le B_\varphi(f,f)$. [F1, F2]

1.2 The form $B_\psi$ induces an inner product on the quotient by its null space, so Cauchy–Schwarz there gives $|B_\psi(f,h)|^2\le B_\psi(f,f)B_\psi(h,h)$ for all finitely supported $f,h$, including null vectors. [F2, F4]

1.3 Conversely, let $T$ satisfy the stated positive-contraction and commutant conditions, and put $\psi_T(g)=\langle\pi_\varphi(g)T\xi_\varphi,\xi_\varphi\rangle$. For a finite list $g_1,\ldots,g_n$ and scalars $c_1,\ldots,c_n$, set $u=\sum_j c_j\pi_\varphi(g_j)\xi_\varphi$. Commutation and unitarity give $$\sum_{i,j}\overline{c_i}c_j\psi_T(g_i^{-1}g_j)=\langle Tu,u\rangle\ge0.$$ Thus $\psi_T$ is positive type; the same calculation with $I-T$ shows that $\varphi-\psi_T$ is positive type. Strong continuity and the matrix coefficient definition make both functions continuous, so $0\le\psi_T\le\varphi$. [F1, F2, F5]

2.1 Let $D=\operatorname{span}_{\mathbb C}\{\pi_\varphi(g)\xi_\varphi:g\in G\}$. Identify a finite sum of orbit vectors with the corresponding quotient class $[f]\in\mathbb C^{(G)}/N_\varphi$. Define $b_0([f],[h])=B_\psi(f,h)$. If $[f]=0$, then $B_\varphi(f,f)=0$, so [F1] gives $B_\psi(f,f)=0$; by step 1.2, $B_\psi(f,h)=0$ for every $h$. Hermitian symmetry gives independence in the second variable as well. Hence $b_0$ is well-defined on $D$. If $\varphi=0$, this also gives $B_\psi(\delta_g,\delta_e)=\psi(g)=0$ for every $g$, and the quotient is zero. [F1, F2, step 1.2]

2.2 For $u=[f],v=[h]\in D$, steps 1.1–1.2 give $$0\le b_0(u,u)\le\|u\|^2,\qquad |b_0(u,v)|\le\|u\|\,\|v\|.$$ Since $D$ is dense in $H_\varphi$, this bound extends $b_0$ uniquely to a continuous Hermitian sesquilinear form $b$ on $H_\varphi\times H_\varphi$, still satisfying $0\le b(u,u)\le\|u\|^2$. [F2, step 1.1, step 1.2]

3.1 Fix $u\in H_\varphi$. The map $v\mapsto\overline{b(u,v)}$ is a bounded linear functional of norm at most $\|u\|$. By [F3] there is a unique $Tu$ with $\overline{b(u,v)}=\langle v,Tu\rangle$, equivalently $b(u,v)=\langle Tu,v\rangle$. Uniqueness of representing vectors and linearity of $b$ in its first argument show that $u\mapsto Tu$ is linear; the norm bound gives $\|Tu\|\le\|u\|$, so $T$ is bounded. [F3, F5, step 2.2]

4.1 Hermitian symmetry gives $\langle Tu,v\rangle=\langle u,Tv\rangle$ for all $u,v$, so $T=T^*$ by uniqueness of the Hilbert adjoint. Also $\langle Tu,u\rangle=b(u,u)\ge0$ and $\langle(I-T)u,u\rangle=\|u\|^2-b(u,u)\ge0$. Thus $T$ and $I-T$ are positive. [F5, step 2.2, step 3.1]

4.2 For $k\in G$, simultaneous left translation leaves each kernel entry $\psi(h^{-1}g)$ unchanged, since $(kh)^{-1}(kg)=h^{-1}g$. Hence $b(\pi_\varphi(k)u,\pi_\varphi(k)v)=b(u,v)$ first on $D$ and then on all of $H_\varphi$ by continuity. Using $b(u,v)=\langle Tu,v\rangle$ and unitarity, this identity gives $\langle\pi_\varphi(k)^{-1}T\pi_\varphi(k)u,v\rangle=\langle Tu,v\rangle$ for all $u,v$. Therefore $T\pi_\varphi(k)=\pi_\varphi(k)T$, so $T\in\pi_\varphi(G)'$. [F2, F5, step 3.1]

5.1 On point masses, the form formula gives $b(\pi_\varphi(g)\xi_\varphi,\xi_\varphi)=B_\psi(\delta_g,\delta_e)=\psi(g)$. Since $T$ commutes with $\pi_\varphi(g)$, this is $\langle\pi_\varphi(g)T\xi_\varphi,\xi_\varphi\rangle$. [F2, step 3.1, step 4.2]

6.1 Suppose $S$ is another bounded operator in the commutant with the same coefficient. For all $g,h\in G$, commutation and unitarity give $$\langle S\pi_\varphi(g)\xi_\varphi,\pi_\varphi(h)\xi_\varphi\rangle=\langle S\pi_\varphi(h^{-1}g)\xi_\varphi,\xi_\varphi\rangle=\psi(h^{-1}g).$$ The same identity holds for $T$. The orbit vectors span the dense subspace $D$, so boundedness and continuity imply $\langle(S-T)u,v\rangle=0$ for all $u,v\in H_\varphi$, whence $S=T$. This proves uniqueness, including the zero space. [F2, F5, step 4.2, step 5.1]

7.1 AC is used to infer Countable Choice for the GNS completion and bounded extensions and for the Riesz representation in step 3.1; it also satisfies the hypotheses of the adjoint and positive-operator definitions. The finite form calculations, extension from the specified dense orbit span, uniqueness, and converse matrix tests use no further choice. [F3, F5, F6, step 3.1] ∎
