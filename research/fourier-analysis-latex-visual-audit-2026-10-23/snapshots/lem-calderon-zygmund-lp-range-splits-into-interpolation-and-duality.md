---
id: lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality
kind: lemma
title: "The Lp range: interpolation below two and adjoint duality above two"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-monotone-convergence-for-the-integral, cor-l-p-norm-recovery-by-unit-l-q-pairings, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice, def-hilbert-space-adjoint, def-l-one-of-a-measure, lem-marcinkiewicz-interpolation-from-weak-one-one-and-strong-two-two, thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p, thm-complex-holder-minkowski-and-the-quotient-norm]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality; evidence research/frontier-38-owner-30-reader-5.md, research/frontier-38-owner-30-reader-findings-5.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 5.3.3, the duality and interpolation argument for (5.3.14), printed pp. 362–363"
    - title: "Terence Tao, Math 247A Lecture Notes 4"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "paragraph and Corollary 2.10 on interpolation, adjointness and duality, printed pp. 9–10"
    - title: "Juha Kinnunen, Harmonic Analysis"
      url: "https://math.aalto.fi/~jkkinnunen/files/harmonic_analysis.pdf"
      locator: "Chapter 2, Theorem 2.4, printed pp. 27–29"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]).

Let $T$ be a linear operator defined on $L^1(\mathbb R^n)+L^2(\mathbb R^n)$ that
is bounded on $L^2(\mathbb R^n)$ with norm $B$, let $T^*$ denote its adjoint with
respect to the $L^2$ pairing, and suppose that $T$ and $T^*$ both satisfy the
weak $(1,1)$ bound $|\{|Tf|>\lambda\}|\le A\lambda^{-1}\|f\|_1$ for every
$f\in L^1(\mathbb R^n)$ and $\lambda>0$ (and likewise for a compatible linear extension of $T^*$ to $L^1+L^2$). Then for every
$1<p<\infty$, $p\ne2$, $T$ is bounded on $L^p(\mathbb R^n)$: for $1<p<2$ the
operator norm is at most
$$C_p:=\Bigl[p\Bigl(\frac{2A}{p-1}+\frac{4B^2}{2-p}\Bigr)\Bigr]^{1/p},$$
and for $2<p<\infty$ it is at most $C_{p'}$, the same expression evaluated at the
conjugate exponent $p'=p/(p-1)\in(1,2)$.

## Facts & Assumptions

**Given:** A linear operator $T$ on $L^1+L^2$, bounded on $L^2$ with norm $B$; its $L^2$ adjoint $T^*$; weak $(1,1)$ bounds with constant $A$ for both $T$ and $T^*$; an exponent $1<p<\infty$, $p\ne2$, with conjugate $p'$; Countable Choice.

[F1] $T^*$ is the bounded $L^2$ adjoint: $\langle Tf,g\rangle=\langle f,T^*g\rangle$ for all $f,g\in L^2(\mathbb R^n;\mathbb C)$ with the first-variable-linear pairing $\langle u,v\rangle=\int u\overline v$, and $T^*$ is likewise bounded on $L^2$ with norm $B$ ([[def-hilbert-space-adjoint]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F2] Let $(X,\mu)$ be $\sigma$-finite, $1<q<2$, and let $S$ be a sublinear operator on $L^1(X)+L^2(X)$, weak $(1,1)$ with constant $A$ and strong $(2,2)$ with constant $B$. Then $\|Sf\|_q\le\bigl[q(2A/(q-1)+4B^2/(2-q))\bigr]^{1/q}\|f\|_q$ for every $f\in L^q(X)$ ([[lem-marcinkiewicz-interpolation-from-weak-one-one-and-strong-two-two]]).

[F3] Complex finite simple functions, and under Countable Choice also $C_c^\infty(\mathbb R^n;\mathbb C)$, are dense in $L^p(\mathbb R^n;\mathbb C)$ for every $1\le p<\infty$ ([[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]], [[def-countable-choice]]).

[F4] For $1\le p<\infty$ and conjugate $q$, $\|f\|_p=\sup\{|\int fg\,d\mu|:g\in L^q,\|g\|_q\le1\}$ ([[cor-l-p-norm-recovery-by-unit-l-q-pairings]]); the Hölder and Minkowski inequalities for the complex $L^p$ spaces are recorded in [[thm-complex-holder-minkowski-and-the-quotient-norm]], and the integral conventions in [[def-l-one-of-a-measure]]. Monotone convergence is [[thm-monotone-convergence-for-the-integral]].

## Proof

**Proof technique:** direct.

1.1 Let $1<q<2$ and $f\in L^q\cap L^2$. Then $f\in L^1+L^2$ and $T$ is defined at $f$; sublinearity is automatic for the linear $T$, the weak $(1,1)$ and strong $(2,2)$ hypotheses are those assumed, so [F2] applies with $(X,\mu)=(\mathbb R^n,\lambda)$ and gives $\|Tf\|_q\le C_q\|f\|_q$ with $C_q=[q(2A/(q-1)+4B^2/(2-q))]^{1/q}$. [F2, given]

2.1 Consequently, for every $1<q<2$ the operator $T$ has a unique bounded extension to all of $L^q(\mathbb R^n;\mathbb C)$ with norm at most $C_q$: since $C_c^\infty(\mathbb R^n;\mathbb{C})\subseteq L^q\cap L^2$ is dense in $L^q$ by [F3], step 1.1 applied to differences of test functions shows that $g\mapsto Tg$ is uniformly continuous on this dense subspace, so it extends uniquely to the closure with the same bound. [F3, step 1.1, algebra]

3.1 The adjoint $T^*$ is a bounded linear operator on $L^2$ with norm $B$ by [F1]; it satisfies the weak $(1,1)$ bound with constant $A$ by hypothesis, and it is linear, hence sublinear. Therefore step 2.1 applies to $T^*$ at the exponent $p'\in(1,2)$ whenever $2<p<\infty$: for every $h\in L^{p'}(\mathbb R^n;\mathbb C)$, $\|T^*h\|_{p'}\le C_{p'}\|h\|_{p'}$. [F1, step 2.1, given]

4.1 Let $2<p<\infty$, $f\in L^p\cap L^2$ and $g\in L^{p'}\cap L^2$ with $\|g\|_{p'}\le1$. Using $\overline g\in L^{p'}\cap L^2$ and the adjoint identity of [F1] applied to the pair $(Tf,\overline g)$, $$\Bigl|\int_{\mathbb R^n}(Tf)g\,d\lambda\Bigr|=\bigl|\langle Tf,\overline g\rangle\bigr|=\bigl|\langle f,T^*\overline g\rangle\bigr|\le\|f\|_p\,\|T^*\overline g\|_{p'}\le C_{p'}\|f\|_p,$$ where the first inequality is Hölder's inequality [F4] and the second is step 3.1 applied to $h=\overline g$, which has $\|\overline g\|_{p'}=\|g\|_{p'}\le1$. To establish $Tf\in L^p$ before using norm recovery, put $u=Tf\in L^2$, $E_N=B(0,N)\cap\{|u|\le N\}$ and $a_N=(\int_{E_N}|u|^p)^{1/p}$. If $a_N>0$, take $g_N=\mathbf1_{E_N}|u|^{p-1}\theta_u/a_N^{p-1}$, with $\theta_u=\overline u/|u|$ on $u\ne0$ and zero otherwise. This test is bounded on a finite-measure set, hence lies in $L^{p'}\cap L^2$, and satisfies $\|g_N\|_{p'}=1$, $\int ug_N=a_N$. The preceding pairing bound gives $a_N\le C_{p'}\|f\|_p$; if $a_N=0$ the same inequality is immediate. Since $E_N$ increases to a full-measure set, monotone convergence gives $\|Tf\|_p\le C_{p'}\|f\|_p$. [F1, F4, step 3.1, algebra]

5.1 If $2<p<\infty$, step 4.1 and the density [F3] of $C_c^\infty\subseteq L^p\cap L^2$ in $L^p$ extend the bound to all $f\in L^p$ with the same constant $C_{p'}$, exactly as in step 2.1. Together with step 2.1 for $1<p<2$, this proves the asserted bounds for every $1<p<\infty$, $p\ne2$. [F3, step 2.1, step 4.1] ∎
