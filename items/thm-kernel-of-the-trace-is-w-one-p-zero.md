---
id: thm-kernel-of-the-trace-is-w-one-p-zero
kind: theorem
title: "The kernel of the trace is the closure of the test functions"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-lp-trace-operator-on-a-bounded-c-one-domain, lem-sobolev-trace-agrees-with-continuous-boundary-values, lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts, thm-sobolev-gauss-green-formula-on-c-one-domains, def-wkp-zero-as-a-sobolev-closure, thm-smooth-up-to-the-boundary-density-on-smooth-domains, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, lem-compact-support-zero-extension-in-wkp, lem-c-k-boundary-flattening-preserves-wkp-locally, lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces, lem-finite-ambient-partitions-for-euclidean-boundary-integration, def-bounded-c-k-domain-and-boundary-charts, def-sobolev-space-wkp-and-its-norm, thm-wkp-extension-from-a-half-space, thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity, thm-tonelli-and-fubini-for-completed-product-measures, thm-holder-inequality-for-integrals, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, def-axiom-of-choice, lem-complex-translation-and-approximate-identity-interfaces, lem-weak-leibniz-rule-with-a-smooth-factor]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 9.2, Lemma 9.21 and its proof, printed p. 210: both inclusions, including the extension by zero and the translated mollification."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Section 3.7, Corollary 3.15, printed p. 64: the forward direction and the attribution of the converse to Evans."
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter III, Section III.3.5, Theorem III.3.22, printed p. 77: the identity $W^{1,p}_0=\\{u:Tu=0\\}$."
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3, Section 3.9, Theorem 3.44 statement, printed p. 72: $Tf=0$ if and only if $f\\in W^{1,p}_0$."
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subset\mathbb R^n$, $n\ge2$, be a
bounded $C^1$ domain and $1\le p<\infty$. Then the kernel of the trace
operator of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]] equals the
zero-boundary Sobolev space:
$$\{u\in W^{1,p}(\Omega;\mathbb K):Tu=0\}=W_0^{1,p}(\Omega;\mathbb K),$$
the $W^{1,p}$-closure of $C_c^\infty(\Omega)$
([[def-wkp-zero-as-a-sobolev-closure]]).

## Facts & Assumptions

**Given:** The Axiom of Choice; a bounded $C^1$ domain $\Omega$; $1\le p<\infty$; the trace operator $T$ of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]]; a finite boundary atlas and subordinate ambient partition $\{\chi_j\}$ as in [[lem-finite-ambient-partitions-for-euclidean-boundary-integration]]; and the half-space $H=\{x_n>0\}$ with its trace $T_+$.

[F1] $T$ is bounded, $Tu=u|_{\partial\Omega}$ for continuous Sobolev classes, and $T(\eta u)=(\eta|_{\partial\Omega})Tu$ for $\eta\in C_c^\infty(\mathbb R^n)$; on a chart, for classes supported inside it, the trace is the transported flat half-space trace. ([[thm-lp-trace-operator-on-a-bounded-c-one-domain]], [[lem-sobolev-trace-agrees-with-continuous-boundary-values]], [[lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts]])

[F2] Assume the Axiom of Choice. Restrictions of $C_c^\infty(\mathbb R^n)$ functions are dense in $W^{1,p}$ of a bounded $C^1$ domain, and on the half-space they are dense as well: the published half-space extension operator followed by approximation in $\mathbb R^n$ produces them. ([[thm-smooth-up-to-the-boundary-density-on-smooth-domains]], [[thm-wkp-extension-from-a-half-space]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]])

[F3] Restriction to an open subset is a contraction on $W^{1,p}$, and multiplication by a smooth function with bounded value and first derivatives is bounded on $W^{1,p}$ with constants depending on finitely many sup norms of the cutoff. ([[lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces]], [[lem-weak-leibniz-rule-with-a-smooth-factor]])

[F4] If a class in $W^{1,p}$ vanishes a.e. outside a compact subset of an open set, its zero extension lies in $W^{1,p}(\mathbb R^n)$ with derivatives the zero extensions. ([[lem-compact-support-zero-extension-in-wkp]])

[F5] For $1\le p<\infty$ and $f\in L^p(\mathbb R^n)$, $\|f(\cdot-he_n)-f\|_p\to0$; the same holds componentwise for a $W^{1,p}$ function and each of its weak derivatives. ([[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]])

[F6] Under the declared Axiom of Choice (which supplies Countable and Dependent Choice), On products of sigma-finite measure spaces the double integral of a nonnegative measurable function equals the iterated integrals, and for integrable functions the one-variable fundamental theorem holds: if $g$ is absolutely continuous on $[0,\infty)$ with $g'$ integrable and $g$ has compact support, then $\int_0^\infty g'=-g(0)$. ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]])

[F7] Holder's inequality and the flattening lemma: $\int|fg|\le\|f\|_p\|g\|_{p'}$, and composition with a flattening chart is bounded between the corresponding local $W^{1,p}$ spaces. ([[thm-holder-inequality-for-integrals]], [[lem-c-k-boundary-flattening-preserves-wkp-locally]])

[F8] Mollification converges in $L^p$ for $p<\infty$, is smooth, and preserves compact support up to the mollifier radius. Testing and Fubini give $D_i(\rho_\delta*f)=\rho_\delta*D_if$ for $f\in W^{1,p}(\mathbb R^n)$, so convergence holds in $W^{1,p}$ componentwise. ([[lem-complex-translation-and-approximate-identity-interfaces]])

## Proof

**Proof technique:** direct.

1.1 The forward inclusion. Every $\varphi\in C_c^\infty(\Omega)$ is continuous on $\overline\Omega$ and vanishes on a neighbourhood of $\partial\Omega$, so $T\varphi=0$ by [F1]. Since $T$ is bounded and $W_0^{1,p}(\Omega)$ is the closure of $C_c^\infty(\Omega)$ ([[def-wkp-zero-as-a-sobolev-closure]]), every class in $W_0^{1,p}(\Omega)$ is a limit of test functions and hence has zero trace. [F1, given]

1.2 The half-space zero-extension computation. Let $w\in W^{1,p}(H)$ be compactly supported with $T_+w=0$, and let $\bar w$ be its extension by zero to $\mathbb R^n$. Choose $w_m\in C_c^\infty(\mathbb R^n)|_H$ with $w_m\to w$ in $W^{1,p}(H)$ by [F2] and let $\tilde w_m\in C_c^\infty(\mathbb R^n)$ extend $w_m$. Fix $\varphi\in C_c^\infty(\mathbb R^n)$ and $i$. For each $m$, integrating the identity $\partial_i(\tilde w_m\varphi)=\partial_i\tilde w_m\,\varphi+\tilde w_m\partial_i\varphi$ over $H$ and using [F6]: for $i\ne n$ the integral of the tangential derivative vanishes (its inner $x_i$-integral has compact support), and for $i=n$ it equals $-\int_{\mathbb R^{n-1}}\tilde w_m(x',0)\varphi(x',0)dx'$; hence $\int_Hw_m\partial_i\varphi=-\int_H(\partial_iw_m)\varphi-\delta_{in}\int_{\mathbb R^{n-1}}(T_+w_m)\varphi(\cdot,0)$. Passing to the limit by [F7] (the volume pairings converge because $w_m\to w$ and $\partial_iw_m\to\partial_iw$ in $L^p$ and $\varphi,\partial_i\varphi$ are bounded with compact support) and using $T_+w_m\to T_+w=0$ in $L^p(\mathbb R^{n-1})$ gives $\int_Hw\partial_i\varphi=-\int_H(\partial_iw)\varphi$ for every $i$ and every test function. By the definition of the weak derivative on $\mathbb R^n$, the zero extension satisfies $\int_{\mathbb R^n}\bar w\,\partial_i\varphi=-\int_{\mathbb R^n}\overline{\partial_iw}\,\varphi$, so $\bar w\in W^{1,p}(\mathbb R^n)$ with $D_i\bar w$ the zero extension of $D_iw$. [F2, F6, F7, algebra, given]

2.1 Approximation in the half-space by test functions of $H$. Let $w$ be as in step 1.2. In the notation of [F5], the translates $\bar w_\varepsilon:=\bar w(\cdot-\varepsilon e_n)$ converge to $\bar w$ in $W^{1,p}(\mathbb R^n)$ as $\varepsilon\downarrow0$, hence their restrictions to $H$ converge to $w$ in $W^{1,p}(H)$ by [F3]. Each $\bar w_\varepsilon$ is supported in $\{x_n\ge\varepsilon\}$, so for $0<\delta<\varepsilon/2$ the mollifications $\rho_\delta*\bar w_\varepsilon$ lie in $C_c^\infty(\mathbb R^n)$ with support in $\{x_n>0\}$ and converge to $\bar w_\varepsilon$ in $W^{1,p}(\mathbb R^n)$ by [F8]; their restrictions lie in $C_c^\infty(H)$ and converge to $w$ in $W^{1,p}(H)$. Hence every compactly supported class in $W^{1,p}(H)$ with zero flat trace is a limit of test functions of $H$. [F3, F5, F8, step 1.2, algebra]

3.1 The chart pieces. Let $u\in W^{1,p}(\Omega)$ with $Tu=0$. Choose the finite atlas and partition of [F1] and write $u=\sum_j\chi_ju+u_0$, where $u_0:=(1-\sum_j\chi_j)u$ is supported away from $\partial\Omega$. For each $j$ the class $\chi_ju$ is supported in the chart, $T(\chi_ju)=(\chi_j|_{\partial\Omega})Tu=0$ by [F1], and by the chart-transport part of [F1] its flattening $w_j:=(\chi_ju)\circ\Phi_j^{-1}$, reflected into $H$, is a compactly supported class in $W^{1,p}(H)$ with $T_+w_j=0$; by [F7] the flattening is bounded, and by step 2.1, $w_j$ is a $W^{1,p}(H)$-limit of test functions of the half-space. Multiply the half-space approximants by a fixed smooth cutoff in the flattened ambient patch equal to one near the support of $w_j$, before pulling them back. The resulting pullbacks have compact support inside $\Omega$ and converge to $\chi_ju$ by [F3] and [F7]; because the charts are only $C^1$, these functions need only be $C^1$, not smooth. For each such compactly supported Sobolev approximant, [F4] and [F8] give a smooth approximation with mollifier radius smaller than its distance to $\partial\Omega$. These lie in $C_c^\infty(\Omega)$ and can be chosen with errors tending to zero. Thus $\chi_ju\in W_0^{1,p}(\Omega)$ for every $j$. [F1, F3, F4, F7, F8, step 2.1, algebra, given]

4.1 The interior piece and conclusion. The function $1-\sum_j\chi_j$ is bounded with bounded first derivatives and vanishes on a neighbourhood of $\partial\Omega$, so $u_0$ vanishes a.e. outside a compact subset of the open set $\Omega$; by [F4] its zero extension lies in $W^{1,p}(\mathbb R^n)$. By [F2] choose $\psi_m\in C_c^\infty(\mathbb R^n)$ with $\psi_m\to\bar u_0$ in $W^{1,p}(\mathbb R^n)$, and fix $\xi\in C_c^\infty(\Omega)$ with $\xi=1$ on a neighbourhood of $\operatorname{supp}u_0$; then $\xi\psi_m\in C_c^\infty(\Omega)$ and $\xi\psi_m\to\xi\bar u_0=u_0$ in $W^{1,p}(\Omega)$ by [F3]. Hence $u_0\in W_0^{1,p}(\Omega)$. Since $W_0^{1,p}(\Omega)$ is a linear subspace and $u=\sum_j\chi_ju+u_0$ with every summand in it by step 3.1, $u\in W_0^{1,p}(\Omega)$. Together with the forward inclusion of step 1.1, this proves $\{Tu=0\}=W_0^{1,p}(\Omega)$. [F2, F3, F4, step 1.1, step 3.1, algebra, given] ∎

## Source notes

Teschl's Lemma 9.21 (printed p. 210) proves both inclusions, including the extension by zero and the translated mollification used above; Laugesen's Corollary 3.15 (printed p. 64), Schikorra's Theorem III.3.22 (printed p. 77) and Hunter's Theorem 3.44 (printed p. 72) record the same identity. The half-space zero-extension computation in step 1.2 replaces the scaffold's reference to a half-space Gauss-Green formula, which is not available for the unbounded half-space as a bounded-$C^1$-domain identity; the direct integration of the tangential and normal derivatives uses only Fubini and the one-dimensional fundamental theorem.
