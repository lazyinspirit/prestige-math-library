---
id: thm-stationary-process-birkhoff-ergodic-limit
kind: theorem
title: "Birkhoff limit for a stationary integrable process"
status: published
origin: pipeline
landmark: false
deps:
  - def-axiom-of-choice
  - def-stationary-process-and-canonical-shift
  - def-strict-and-mod-null-invariant-sigma-algebras
  - def-ergodic-measure-preserving-system
  - def-conditional-expectation-given-a-sigma-algebra
  - thm-birkhoff-ergodic-theorem
  - thm-birkhoff-limit-identification-on-finite-measure-spaces
  - lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces
  - cor-birkhoff-ergodic-theorem-for-ergodic-probability-systems
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition, §6.2, Birkhoff ergodic theorem and stationary sequences"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $Y=(Y_n)_{n\ge0}$ be a real-valued
strictly stationary process with $\mathbb E|Y_0|<\infty$
([[def-stationary-process-and-canonical-shift]]), with canonical path law
$\mathbb P_Y$ and left shift $\theta$. Let
$\mathcal I=\{A:\theta^{-1}A=A\}$ be the strictly invariant sigma-algebra on
path space ([[def-strict-and-mod-null-invariant-sigma-algebras]]). Then

$$\frac1n\sum_{k=0}^{n-1}Y_k\ \longrightarrow\ \mathbb E_{\mathbb P_Y}[z_0\mid\mathcal I]\circ\Phi \qquad\text{almost surely and in }L^1(\mathbb P),$$

where $\Phi(\omega)=(Y_n(\omega))_{n\ge0}$ and the conditional expectation is
that of [[def-conditional-expectation-given-a-sigma-algebra]]. If moreover the
canonical shift is ergodic ([[def-ergodic-measure-preserving-system]]), then
the limit is the constant $\mathbb EY_0$. For complex-valued processes the
assertions hold componentwise for real and imaginary parts.

## Facts & Assumptions

**Given:** AC, a real-valued strictly stationary process $Y$ with $\mathbb E|Y_0|<\infty$, its canonical path law $\mathbb P_Y$ on $\mathbb R^{\mathbb N_0}$, and the left shift $\theta$.

[A1] Every family of nonempty sets has a choice function; AC is assumed and is used exactly through the conditional-expectation identification [F4]. ([[def-axiom-of-choice]])

[F1] $\mathbb P_Y$ is the pushforward of $\mathbb P$ under the coordinate map $\Phi(\omega)=(Y_n(\omega))_{n\ge0}$; the left shift $\theta(z)_n=z_{n+1}$ preserves $\mathbb P_Y$; the process is ergodic when $\theta$ is ergodic for $\mathbb P_Y$. ([[def-stationary-process-and-canonical-shift]])

[F2] $\mathcal I=\{E:T^{-1}E=E\}$ is the strictly invariant sigma-algebra; a measure-preserving system is ergodic for $\mu$ when every $E\in\mathcal I$ has $\mu(E)=0$ or $\mu(X\setminus E)=0$. ([[def-strict-and-mod-null-invariant-sigma-algebras]], [[def-ergodic-measure-preserving-system]])

[F3] Let $\mu$ be sigma-finite, $T$ preserve $\mu$, and $f\in\mathcal L^1(\mu)$; then $A_nf$ converges $\mu$-almost everywhere to a finite-valued integrable $f^*$ with $f^*\circ T=f^*$ $\mu$-a.e. ([[thm-birkhoff-ergodic-theorem]])

[F4] Assume Choice. If $\mu(X)<\infty$, $T$ preserves $\mu$, $f\in L^1(\mu)$ and $f^*$ is its Birkhoff limit, then $\int_Ef^*\,d\mu=\int_Ef\,d\mu$ for every $E\in\mathcal I$, and $f^*$ has an $\mathcal I$-measurable integrable representative, unique up to a.e. equality. ([[thm-birkhoff-limit-identification-on-finite-measure-spaces]])

[F5] If $\mu(X)<\infty$, $T$ preserves $\mu$ and $f\in L^1(\mu)$ with Birkhoff limit $f^*$, then $\lVert A_nf-f^*\rVert_1\to0$. ([[lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces]])

[F6] Assume Choice. If $T$ preserves an ergodic measure $\mu$ with $0<\mu(X)<\infty$ and $f\in L^1(\mu)$, then $A_nf\to\frac1{\mu(X)}\int_Xf\,d\mu$ both $\mu$-a.e. and in $L^1(\mu)$. ([[cor-birkhoff-ergodic-theorem-for-ergodic-probability-systems]])

[F7] A conditional-expectation version of an integrable $X$ given a sub-sigma-algebra $\mathcal G$ is a $\mathcal G$-measurable integrable $Z$ with $\int_AZ\,dP=\int_AX\,dP$ for every $A\in\mathcal G$. ([[def-conditional-expectation-given-a-sigma-algebra]])

## Proof

**Given:** AC, a strictly stationary real process $Y$ with $\mathbb E|Y_0|<\infty$, canonical path law $\mathbb P_Y$, coordinate map $\Phi$, and left shift $\theta$.

**Proof technique:** apply Birkhoff, its finite-measure identification and its L1 lemma on canonical path space to the coordinate functional $z_0$, then pull the conclusions back along $\Phi$; handle the ergodic case with the ergodic corollary.

1.1 The coordinate functional $f(z):=z_0$ is measurable on path space and belongs to $L^1(\mathbb P_Y)$: by [F1] and the change-of-variables identity for the pushforward, $\int_{\mathbb R^{\mathbb N_0}}|z_0|\,d\mathbb P_Y=\mathbb E|Y_0|<\infty$, and $\mathbb P_Y$ is a probability, hence finite and sigma-finite. [F1, given]

2.1 Let $A_nf:=n^{-1}\sum_{k<n}f\circ\theta^k$, so that $A_nf(z)=n^{-1}\sum_{k<n}z_k$. By [F3]–[F5] applied to the measure-preserving probability system $(\mathbb R^{\mathbb N_0},\mathbb P_Y,\theta)$ and $f\in L^1(\mathbb P_Y)$ there is $f^*\in L^1(\mathbb P_Y)$ with: $A_nf\to f^*$ $\mathbb P_Y$-almost everywhere; $f^*$ is $\mathcal I$-measurable with $\int_Ef^*\,d\mathbb P_Y=\int_Ez_0\,d\mathbb P_Y$ for every $E\in\mathcal I$; and $\lVert A_nf-f^*\rVert_{L^1(\mathbb P_Y)}\to0$. [F3, F4, F5, step 1.1, given]

3.1 By [F7] the function $f^*$ is a conditional-expectation version of $z_0$ given $\mathcal I$, that is, $f^*=\mathbb E_{\mathbb P_Y}[z_0\mid\mathcal I]$ as an a.e. class; this is the unique a.e. class characterized by $\mathcal I$-measurability and the displayed integrals. [F7, step 2.1, given]

3.2 Pullback of the $L^1$ statement: for each $n$, $\int_\Omega\bigl|\frac1n\sum_{k<n}Y_k-f^*\circ\Phi\bigr|\,d\mathbb P=\int_{\mathbb R^{\mathbb N_0}}|A_nf-f^*|\,d\mathbb P_Y$ by the pushforward identity [F1], and the right side tends to $0$ by step 2.1. [F1, step 2.1, given]

4.1 Pullback of the a.e. statement: $A_nf\circ\Phi=\frac1n\sum_{k=0}^{n-1}Y_k$ as functions on $\Omega$, and $\{z:A_nf(z)\not\to f^*(z)\}$ is a $\mathbb P_Y$-null set; by [F1] its preimage under $\Phi$ is a $\mathbb P$-null set, since $\mathbb P(\Phi^{-1}N)=\mathbb P_Y(N)$. Hence $\frac1n\sum_{k<n}Y_k\to f^*\circ\Phi$ almost surely. [F1, step 3.1, given]

5.1 If the canonical shift is ergodic for $\mathbb P_Y$ [F1, F2], then [F6] applies with $\mu=\mathbb P_Y$ and gives $A_nf\to\int z_0\,d\mathbb P_Y=\mathbb E Y_0$ $\mathbb P_Y$-a.e. and in $L^1(\mathbb P_Y)$; pulling back as in steps 3.2 and 4.1 gives $\frac1n\sum_{k<n}Y_k\to\mathbb EY_0$ almost surely and in $L^1(\mathbb P)$. [F1, F2, F6, step 4.1, step 3.2, given]

6.1 Boundary and axiom cases: if $Y_0$ is a constant $c$ almost surely then all averages equal $c$, $\mathcal I$-measurability is automatic, and the ergodic conclusion is the same constant; if the process is ergodic but $Y_0$ is integrable with $\mathbb E Y_0=0$ the limit is the constant $0$, covered by step 5.1; the a.e. class of the limit is well defined because conditional-expectation versions are unique up to a.e. equality by [F7], and the theorem asserts convergence in two modes, not merely integrability of a limit; complex processes are handled by applying the real assertion to $\operatorname{Re}Y_n$ and $\operatorname{Im}Y_n$, both strictly stationary with finite first absolute moment, and recombining; and AC [A1] is used exactly through the identification [F4] and the uniqueness of the conditional-expectation class in [F7]. [A1, F1, F4, F6, F7, step 4.1, step 5.1, given] ∎
