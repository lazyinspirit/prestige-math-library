---
id: lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts
kind: lemma
title: "The trace commutes with smooth cutoffs and is chart local"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-lp-trace-operator-on-a-bounded-c-one-domain, lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces, lem-sobolev-trace-agrees-with-continuous-boundary-values, thm-trace-estimate-on-the-half-space, lem-c-k-boundary-flattening-preserves-wkp-locally, thm-smooth-up-to-the-boundary-density-on-smooth-domains, def-bounded-c-k-domain-and-boundary-charts, def-surface-integral-on-a-compact-c-one-hypersurface, def-axiom-of-choice, lem-weak-leibniz-rule-with-a-smooth-factor]
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
    - title: "Emilio Gagliardo, Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in $n$ variabili, Rend. Sem. Mat. Univ. Padova 27 (1957), 284-305"
      url: "https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf"
      locator: "No. 1, definition (1.3) and the local-representation discussion on printed pp. 286-288: traces are computed chartwise and must agree on overlaps."
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 9.2, proof of Lemma 9.21, printed p. 210: localisation by a partition of unity and compatibility of traces on the flattened pieces."
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter III, Section III.3.5, proofs of Theorems III.3.21-III.3.22, printed pp. 76-77: flattening and a decomposition of unity."
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subset\mathbb R^n$, $n\ge2$, be a
bounded $C^1$ domain, $1\le p<\infty$, and let $T$ be the trace operator of
[[thm-lp-trace-operator-on-a-bounded-c-one-domain]].

(i) If $\eta\in C_c^\infty(\mathbb R^n;\mathbb K)$, then
$T(\eta u)=(\eta|_{\partial\Omega})\,Tu$ in $L^p(\partial\Omega)$ for every
$u\in W^{1,p}(\Omega;\mathbb K)$, and
$\|T(\eta u)\|_{L^p(\partial\Omega)}\le C_\eta\|u\|_{W^{1,p}(\Omega)}$.

(ii) If $\Omega'\subseteq\Omega$ is a bounded $C^1$ domain and
$\partial\Omega\cap\partial\Omega'$ is relatively open in $\partial\Omega$,
then $(Tu)|_{\partial\Omega\cap\partial\Omega'}=T_{\Omega'}(u|_{\Omega'})$
a.e. for every $u\in W^{1,p}(\Omega)$, where $T_{\Omega'}$ is the trace
operator relative to $\Omega'$; in particular the trace is local and
compatible with restrictions to subdomains.

(iii) If a boundary chart $\Phi$ flattens a neighbourhood of a boundary point,
then for $u$ supported in a compact ambient patch inside that chart the transported trace
equals $T_+$ of the zero-extended flattened function after reflecting $t\mapsto-t$ and the corresponding boundary $L^p$ norms
agree up to the chart Jacobian.

## Facts & Assumptions

**Given:** The Axiom of Choice; a bounded $C^1$ domain $\Omega$; $1\le p<\infty$; the trace operator $T$ of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]]; and the dense class $D$ of restrictions to $\Omega$ of $C_c^\infty(\mathbb R^n)$ functions.

[F1] $T:W^{1,p}(\Omega)\to L^p(\partial\Omega)$ is the unique bounded linear operator with $Tu=u|_{\partial\Omega}$ for every $u\in C(\overline\Omega)\cap W^{1,p}(\Omega)$, and $\|Tu\|\le C(\Omega,p)\|u\|_{W^{1,p}(\Omega)}$; on each boundary chart it is the transported flat half-space trace. ([[thm-lp-trace-operator-on-a-bounded-c-one-domain]])

[F2] If a class in $W^{1,p}(\Omega)$ has a continuous representative on $\overline\Omega$, its trace is the classical restriction of that representative. ([[lem-sobolev-trace-agrees-with-continuous-boundary-values]])

[F3] Assume the Axiom of Choice. Restriction to an open subset is a contraction $W^{1,p}(\Omega)\to W^{1,p}(U)$, and multiplication by the restriction of an ambient smooth function with bounded value and first derivatives is bounded on $W^{1,p}(\Omega)$ with constant depending only on finitely many sup norms of derivatives of $\eta$. ([[lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces]], [[lem-weak-leibniz-rule-with-a-smooth-factor]])

[F4] Assume the Axiom of Choice. $D$ is dense in $W^{1,p}(\Omega)$; and for a flattening chart $\Phi:W\to B\times\mathbb R$ of a bounded $C^k$ domain, $k\ge1$, composition with $\Phi^{-1}$ is bounded from $W^{1,p}$ of a compact patch to $W^{1,p}$ of the corresponding flattened patch. ([[thm-smooth-up-to-the-boundary-density-on-smooth-domains]], [[lem-c-k-boundary-flattening-preserves-wkp-locally]])

[F5] The half-space trace $T_+$ is bounded from $W^{1,p}$ of the half-space to $L^p$ of the flat boundary and agrees with classical restriction on the dense compactly supported smooth class. ([[thm-trace-estimate-on-the-half-space]])

[F6] The surface integral on $\partial\Omega$ is defined chartwise with graph density $J=\sqrt{1+|Dh|^2}$ and is independent of the charts and partition; on the overlap of two subdomains sharing a boundary piece the two surface measures agree. ([[def-surface-integral-on-a-compact-c-one-hypersurface]])

## Proof

**Proof technique:** direct.

1.1 Multiplicativity (i). Let $u\in W^{1,p}(\Omega)$ and let $u_m\in D$ with $u_m\to u$ in $W^{1,p}(\Omega)$ by [F4]. Each $u_m$ extends to a smooth compactly supported function, so $\eta u_m\in C(\overline\Omega)\cap W^{1,p}(\Omega)$ has classical restriction $(\eta|_{\partial\Omega})(u_m|_{\partial\Omega})=(\eta|_{\partial\Omega})Tu_m$ by [F2]; hence $T(\eta u_m)=(\eta|_{\partial\Omega})Tu_m$. By [F3] $\eta u_m\to\eta u$ in $W^{1,p}(\Omega)$, so $T(\eta u_m)\to T(\eta u)$ in $L^p(\partial\Omega)$ by [F1]; and $(\eta|_{\partial\Omega})Tu_m\to(\eta|_{\partial\Omega})Tu$ because $\eta|_{\partial\Omega}$ is bounded and multiplication by a bounded continuous function is continuous on $L^p(\partial\Omega)$ (Holder). The identity follows, and the bound $\|T(\eta u)\|\le C(\Omega,p)\|\eta u\|_{W^{1,p}}\le C(\Omega,p)C_\eta\|u\|_{W^{1,p}}$ follows from [F1] and [F3]. [F1, F2, F3, F4, algebra]

1.2 Locality (ii). Let $\Omega'\subseteq\Omega$ be a bounded $C^1$ domain with $\partial\Omega\cap\partial\Omega'$ relatively open in $\partial\Omega$, and let $T_{\Omega'}$ be the trace operator relative to $\Omega'$, which is defined by [F1] precisely when $\Omega'$ is a bounded $C^1$ domain of the type covered there. Define $R:W^{1,p}(\Omega)\to L^p(\partial\Omega\cap\partial\Omega')$, $Ru:=(T_{\Omega'}(u|_{\Omega'}))|_{\partial\Omega\cap\partial\Omega'}$, a bounded linear map by [F1] and [F3]. On the dense class $D$ of smooth restrictions, $Ru$ is the classical restriction of $u$ to $\partial\Omega\cap\partial\Omega'$, which equals $(Tu)|_{\partial\Omega\cap\partial\Omega'}$ by [F2]. Two bounded linear maps that agree on the dense subspace $D$ are equal, so the identity holds on all of $W^{1,p}(\Omega)$; the two surface measures agree on the common piece by [F6]. [F1, F2, F3, F4, F6, algebra]

1.3 Chart transport (iii). Fix a compact ambient patch $K\subset W$ and a smooth ambient cutoff $\zeta\in C_c^\infty(W)$ equal to one near $K$. For $u$ supported in $K\cap\overline\Omega$, choose $u_m\in D$ tending to $u$ by [F4]. Then $\zeta u_m\to u$ in $W^{1,p}(\Omega)$ by [F3]. Flatten, reflect, and extend each chart-supported function by zero within the half-space. These operations are bounded by [F4] (apply the local composition formula on interior patches and exhaust the chart with the uniform compact ambient derivative bounds); zero extension across the artificial chart edge is licensed by the cutoff support margin. The flattened functions are continuous, compactly supported and Sobolev, so their flat traces equal their classical restrictions by [F5], although they need only be $C^1$, since the chart is $C^1$. Those restrictions equal the transported $T(\zeta u_m)$ by [F2]. Pass to the limit using both trace bounds. The surface formula [F6] gives the claimed norm comparison since its density is bounded above and below on the compact patch. [F2, F3, F4, F5, F6, algebra]

2.1 Conclusion. Step 1.1 proves (i) with the stated bound; step 1.2 proves (ii) by uniqueness of the bounded extension from the dense smooth class; step 1.3 proves (iii), including the equivalence of the transported boundary norms up to the chart Jacobian. [step 1.1, step 1.2, step 1.3, given] ∎

## Source notes

Gagliardo's local-representation discussion (printed pp. 286-288) computes the trace chartwise and requires agreement on overlaps; Teschl's localisation argument (Lemma 9.21, printed p. 210) uses a partition of unity and checks compatibility of the traces on the flattened pieces; Schikorra's proofs of Theorems III.3.21-III.3.22 (printed pp. 76-77) are the second treatment. The lemma above isolates the three consequences used later: multiplicativity under smooth cutoffs, locality under restriction to subdomains, and the chart transport of the trace.
