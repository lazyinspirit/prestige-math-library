---
id: thm-weyl-essential-spectrum-invariance
kind: theorem
title: "Weyl's theorem: invariance of the essential spectrum"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-discrete-and-essential-spectrum-of-a-self-adjoint-operator, thm-weyl-criterion-for-essential-spectrum, def-relative-compactness-with-respect-to-an-operator, lem-second-resolvent-identity-for-closed-operator-perturbations, thm-kato-rellich, thm-compact-operator-sends-weakly-convergent-sequences-to-norm-convergent-sequences, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-axiom-of-choice, def-symmetric-self-adjoint-and-essentially-self-adjoint, lem-compositions-with-a-compact-operator-are-compact, def-compact-linear-operator]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Theorem 6.19 with proof, Lemma 6.21 and Lemmas 6.22-6.23, pp.171-174"
---

## Statement

Assume the Axiom of Choice. Let $A,C$ be self-adjoint operators such that
$R_A(z)-R_C(z)$ is compact for one nonreal $z$ (equivalently, for every
$z\in\rho(A)\cap\rho(C)$). Then
$\sigma_{\mathrm{ess}}(A)=\sigma_{\mathrm{ess}}(C)$. In particular a bounded
self-adjoint compact perturbation preserves the essential spectrum, and if $K$
is symmetric and $A$-compact, then
$\sigma_{\mathrm{ess}}(A+K)=\sigma_{\mathrm{ess}}(A)$ with
$D(A+K)=D(A)$.

## Facts & Assumptions

[A1] $\lambda\in\sigma_{\mathrm{ess}}(S)$ exactly when $S$ has an orthonormal singular Weyl sequence at $\lambda$ ([[thm-weyl-criterion-for-essential-spectrum]], [[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]]).

[A2] For $z\in\rho(S)$ and $\lambda\in\mathbb R$ one has $R_S(z)+\frac1{\lambda-z}I = -\frac1{\lambda-z}R_S(z)(S-\lambda)$ on $D(S)$, equivalently $R_S(z)(S-\lambda) = -(\lambda-z)\bigl(R_S(z)+\frac1{\lambda-z}I\bigr)$ ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]).

[A3] A compact operator maps weakly convergent sequences to norm convergent sequences, and $R_S(z)$ is bounded ([[thm-compact-operator-sends-weakly-convergent-sequences-to-norm-convergent-sequences]], [[def-compact-linear-operator]]).

[A4] With $D_z:=R_A(z)-R_C(z)$ the resolvent identity gives $D_z=R_A(z)(C-A)R_C(z)$, and for $w\in\rho(A)\cap\rho(C)$ the algebraic identity $D_w=[I+(w-z)R_A(z)]^{-1}D_z[I-(w-z)R_C(w)]$ holds, the first factor being $I+(z-w)R_A(w)$; hence compactness of $D_z$ transfers to every common resolvent point $w$, and conversely by exchanging the roles of $z$ and $w$ ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]], [[lem-compositions-with-a-compact-operator-are-compact]]).

[A5] An $A$-compact symmetric $K$ has $A$-bound zero, so Kato-Rellich makes $A+K$ self-adjoint on $D(A)$; the second resolvent identity $R_{A+K}(z)-R_A(z)=R_{A+K}(z)KR_A(z)$ holds for $z$ in the common resolvent set ([[def-relative-compactness-with-respect-to-an-operator]], [[thm-kato-rellich]], [[lem-second-resolvent-identity-for-closed-operator-perturbations]]).

## Proof

**Proof technique:** direct.

**Given:** Self-adjoint $A,C$ with compact resolvent difference at a nonreal $z$.

1.1 Let $\lambda\in\sigma_{\mathrm{ess}}(A)$ and let $(x_n)$ be the orthonormal Weyl sequence of [A1]. By [A2] and $\|(A-\lambda)x_n\|\to0$ one has $(R_A(z)+\frac1{\lambda-z})x_n\to0$; since $R_A(z)-R_C(z)$ is compact and $x_n\rightharpoonup0$, [A3] gives $(R_C(z)+\frac1{\lambda-z})x_n\to0$ as well. [A1, A2, A3]

1.2 Parameter independence is [A4]. [A4]

2.1 Then $(C-\lambda)R_C(z)x_n=(z-\lambda)R_C(z)x_n-x_n\to0$ by [A2] and step 1.1, and $\|R_C(z)x_n\|\to|\lambda-z|^{-1}>0$; the normalized vectors $y_n:=\|R_C(z)x_n\|^{-1}R_C(z)x_n$ lie in $D(C)$, have unit norm, converge weakly to $0$ and satisfy $(C-\lambda)y_n\to0$, so they form a singular Weyl sequence and $\lambda\in\sigma_{\mathrm{ess}}(C)$ by [A1]. Interchanging the roles of $A$ and $C$ gives equality. [A1, A2, step 1.1]

3.1 Bounded compact perturbations: if $K$ is bounded, symmetric and compact, then $A+K$ is self-adjoint with $D(A+K)=D(A)$ by Kato-Rellich applied with the admissible pair $(0,\|K\|)$, and the second resolvent identity gives $R_{A+K}(z)-R_A(z)=R_{A+K}(z)KR_A(z)$, compact as a product of the compact $K$ with bounded factors; so $\sigma_{\mathrm{ess}}(A+K)=\sigma_{\mathrm{ess}}(A)$ by steps 1.1-1.2. [A4, A5, step 2.1]

3.2 $A$-compact perturbations: for symmetric $K$ that is $A$-compact, [A5] makes $A+K$ self-adjoint with $D(A+K)=D(A)$ and gives $R_{A+K}(z)-R_A(z)=R_{A+K}(z)KR_A(z)$, a product of the bounded operator $R_{A+K}(z)$ with the compact operator $KR_A(z)$, hence compact; then steps 1.1-1.2 apply. [A5, step 2.1]

4.1 The claims are steps 1.1, 1.2 and 2.1 (compact resolvent difference), 3.1 (bounded compact perturbations) and 3.2 ($A$-compact perturbations). ∎
