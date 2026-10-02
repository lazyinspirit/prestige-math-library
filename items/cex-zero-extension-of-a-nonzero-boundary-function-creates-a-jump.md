---
id: cex-zero-extension-of-a-nonzero-boundary-function-creates-a-jump
kind: counterexample
title: A nonzero boundary value creates a zero-extension jump
status: published
origin: pipeline
deps: [def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, def-dirac-delta-and-its-derivatives, rem-weak-derivatives-are-distributional-derivatives-with-function-values, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, thm-dominated-convergence, lem-smooth-bump-between-concentric-euclidean-balls, thm-lebesgue-measure-of-a-box-of-every-kind, def-complex-lp-and-euclidean-test-function-conventions, def-sobolev-extension-domain-and-extension-operator, def-countable-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Theorem 1.25 and Example 1.7
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.1 and §1.6, Example 1.7, printed pp. 2–3, and Theorem 1.25, printed pp. 22–23
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations (2020), §3.6
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: Chapter 3 §3.6 "Extending past the boundary", printed pp. 60–62
    - title: John K. Hunter, Notes on Partial Differential Equations (2014), Example 3.4
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Chapter 3 §3.2, Example 3.4, printed pp. 48–49
---

## Statement refuted

The claim that unrestricted zero extension is a Sobolev extension operator —
that for every open $\Omega\subseteq\mathbb R^n$ and every $1\le p\le\infty$
the extension of a class $u\in W^{1,p}(\Omega;\mathbb K)$ by zero outside
$\Omega$ belongs to $W^{1,p}(\mathbb R^n;\mathbb K)$ — is false. On
$\Omega=(0,1)$ the constant $u\equiv1$ belongs to $W^{1,p}(\Omega)$ for every
$1\le p\le\infty$, while its zero extension $\chi_{(0,1)}$ has distributional
derivative $\delta_0-\delta_1$ and does not belong to $W^{1,p}(\mathbb R)$ for
any $p$. Consequently zero extension is not an extension operator in the sense
of [[def-sobolev-extension-domain-and-extension-operator]].

## Facts & Assumptions

**Given:** Countable Choice; $\Omega=(0,1)$; the constant function $u\equiv1$ on $\Omega$; its zero extension $H=\chi_{(0,1)}$ on $\mathbb R$; the Dirac distributions $\delta_0,\delta_1$; and $1\le p\le\infty$.

[F1] A locally integrable $v$ is the weak first derivative of a locally integrable $u$ on an open set exactly when $\int u\varphi'=-\int v\varphi$ for every test $\varphi$; this is equivalent to the distributional identity $\partial T_u=T_v$, and weak derivatives are unique up to almost-everywhere equality ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F2] A weak $L^1_{\mathrm{loc}}$ derivative of a locally integrable $u$ exists exactly when the distributional derivative $\partial T_u$ is a regular distribution $T_v$ with $v\in L^1_{\mathrm{loc}}$; in that case $v$ is unique almost everywhere, and distributional derivatives of general distributions need not be regular ([[rem-weak-derivatives-are-distributional-derivatives-with-function-values]]).

[F3] The Dirac distribution at $a$ is defined by $\langle\delta_a,\psi\rangle=\psi(a)$; for a $C^1$ function on $[0,1]$ $\langle T_{\chi_{(0,1)}},\psi'\rangle=\int_0^1\psi'$ and $\langle\partial T_{\chi_{(0,1)}},\psi\rangle=-\int_0^1\psi'$, and $\int_0^1\psi'=\psi(1)-\psi(0)$ ([[def-dirac-delta-and-its-derivatives]], [[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

[F4] Intervals in $\mathbb R$ are Lebesgue measurable with their length as measure, and singletons are null; in particular $\chi_{(0,1)}\in L^p(\mathbb R)$ for every $1\le p\le\infty$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F5] For $0<r<R$ and $n\ge1$ there is a smooth cut-off equal to one on the closed ball of radius $r$ with support in the open ball of radius $R$; after translation and scaling this gives, for each integer $m\ge1$, a $[0,1]$-valued $\psi_m\in C_c^\infty(\mathbb R)$ with $\psi_m(0)=1$ and $\operatorname{supp}\psi_m\subseteq(-1/m,1/m)$ ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F6] Dominated convergence: if $g_m\to g$ almost everywhere and $|g_m|\le G$ for a single integrable $G$, then $\int g_m\to\int g$ ([[thm-dominated-convergence]]).

[F7] Each $W^{1,p}(\Omega;\mathbb K)$ class lies in $L^p(\Omega;\mathbb K)$ and has weak coordinate derivatives in $L^p(\Omega;\mathbb K)$, and $L^p\subseteq L^1_{\mathrm{loc}}$ on a $\sigma$-finite open set ([[def-sobolev-space-wkp-and-its-norm]]).

**Choice use.** The declared interfaces of [F1], [F2] and [F7] are those of the published Sobolev and distributional calculi, which assume Countable Choice; the concrete computation of the distributional derivative and the approximating cut-offs is explicit.

## Counterexample

1.1 The constant $u\equiv1$ satisfies $u\in L^p((0,1))$ for every $1\le p\le\infty$, since $\int_0^1|1|^p=1<\infty$ and $|1|$ is bounded. For every $\varphi\in C_c^\infty((0,1))$ the functions $\varphi$ and the constant $0$ give $$\int_0^1u\,\varphi'=\int_0^1\varphi'=\varphi(1)-\varphi(0)=0=-\int_0^1 0\cdot\varphi,$$ because $\varphi$ is supported in $(0,1)$. By [F1] the zero class is the weak derivative of $u$, so $u\in W^{1,p}((0,1))$ for every $p$ by [F7]. [F1, F3, F7, given]

1.2 The zero extension $H=\chi_{(0,1)}$ is measurable with $|H|\le1$, so $H\in L^p(\mathbb R)$ for every $p$ by [F4]. For $\varphi\in C_c^\infty(\mathbb R)$ the distributional derivative acts by $$\langle\partial T_H,\varphi\rangle=-\int_{\mathbb R}H\varphi'=-\int_0^1\varphi'=-\bigl(\varphi(1)-\varphi(0)\bigr)=\langle\delta_0-\delta_1,\varphi\rangle,$$ so $\partial T_H=\delta_0-\delta_1$ in $\mathcal D'(\mathbb R)$. [F1, F3, F4, given]

1.3 Fix the cut-offs $\psi_m$ of [F5]. They satisfy $\psi_m(0)=1$, $\psi_m(1)=0$ for $m\ge1$, and $$\langle\delta_0-\delta_1,\psi_m\rangle=\psi_m(0)-\psi_m(1)=1-0=1$$ for every $m\ge1$. [F3, F5, given]

2.1 Suppose, for contradiction, that $\partial T_H$ were a regular distribution $T_v$ with $v\in L^1_{\mathrm{loc}}(\mathbb R)$, that is, that $H$ had a weak derivative in $L^1_{\mathrm{loc}}(\mathbb R)$. Testing the identity $T_v=\delta_0-\delta_1$ against each $\psi_m$ of step 1.3 gives $\int_{\mathbb R}v\psi_m=\langle\delta_0-\delta_1,\psi_m\rangle=1$ for every $m\ge1$. [F2, step 1.3]

3.1 On the other hand $v\psi_m\to0$ almost everywhere and $|v\psi_m|\le|v|\chi_{(-1,1)}$, which is integrable because $v$ is locally integrable; [F6] therefore gives $\int_{\mathbb R}v\psi_m\to0$. This contradicts step 2.1. Hence $\partial T_H$ is not a regular distribution, and by [F2] the function $H$ has no weak first derivative in $L^1_{\mathrm{loc}}(\mathbb R)$. [F2, F6, step 2.1]

4.1 If $H$ belonged to $W^{1,p}(\mathbb R)$ for some $1\le p\le\infty$, then by [F7] its weak first derivative would be an $L^p$ class, hence in particular a weak $L^1_{\mathrm{loc}}$ derivative, contradicting step 3.1. Therefore $H\notin W^{1,p}(\mathbb R)$ for every $p$, while $H|_{\Omega}=u$ and $u\in W^{1,p}(\Omega)$ by step 1.1. The map $u\mapsto\chi_{(0,1)}u$ therefore fails to send $W^{1,p}(\Omega)$ into $W^{1,p}(\mathbb R)$ for each exponent, so it is not an extension operator in the sense of [[def-sobolev-extension-domain-and-extension-operator]]. [F7, step 1.1, step 3.1, given] ∎
