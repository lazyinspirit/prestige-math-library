---
id: thm-sobolev-gauss-green-formula-on-c-one-domains
kind: theorem
title: "The Gauss-Green integration-by-parts formula with Sobolev traces"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-lp-trace-operator-on-a-bounded-c-one-domain, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, def-bounded-c-one-domain-boundary-charts-and-outward-normal, def-classical-normal-derivative, def-surface-integral-on-a-compact-c-one-hypersurface, lem-sobolev-trace-agrees-with-continuous-boundary-values, thm-smooth-up-to-the-boundary-density-on-smooth-domains, thm-holder-inequality-for-integrals, def-sobolev-space-wkp-and-its-norm, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-4.md; immutable carrier: research/frontier-38-owner-30-step5-hash-4-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-4 dispatch"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 9.2, Lemma 9.20 and its proof, printed p. 210: Gauss-Green and integration by parts for $W^{1,p}$ with boundary traces."
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter III, Section III.3.5, proof of Theorem III.3.21, printed p. 77: integration by parts producing the boundary term."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Section 3.7, proof of Theorem 3.14, Step 1, printed p. 63: fundamental-theorem boundary calculation with a cutoff."
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subset\mathbb R^n$, $n\ge2$, be a
bounded $C^1$ domain, $1<p<\infty$, $p'=p/(p-1)$,
$u\in W^{1,p}(\Omega;\mathbb K)$, $v\in W^{1,p'}(\Omega;\mathbb K)$, and let
$T$ be the trace of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]] with
$\nu$ the outward normal of
[[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]. Then for
every $i=1,\dots,n$,
$$\int_\Omega u\,\partial_iv\,dx=-\int_\Omega(\partial_iu)v\,dx+\int_{\partial\Omega}(Tu)(Tv)\,\nu_i\,dS,$$
and all three integrals are finite. If $u,v\in C^1(\overline\Omega)$, the
boundary term is the classical $\int_{\partial\Omega}uv\,\nu_i\,dS$ of the
divergence theorem
[[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]] applied to the
field $uv\,e_i$; if in addition $Tu=\partial_\nu w$ on $\partial\Omega$ for a specified $w\in C^1(\overline\Omega)$, the boundary term is $\int_{\partial\Omega}(\partial_\nu w)(Tv)\nu_i\,dS$. The normal derivative of [[def-classical-normal-derivative]] is defined on the boundary, and this extra identity is an assumption, not an interior substitution.

## Facts & Assumptions

**Given:** The Axiom of Choice; a bounded $C^1$ domain $\Omega$; $1<p<\infty$ with conjugate $p'$; $u\in W^{1,p}(\Omega;\mathbb K)$ and $v\in W^{1,p'}(\Omega;\mathbb K)$; and the trace operator $T$ of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]].

[F1] Divergence theorem: for $F\in C^1(\overline\Omega;\mathbb R^n)$, $\int_\Omega\operatorname{div}F\,dx=\int_{\partial\Omega}F\cdot\nu\,dS$, with both integrals finite and $\nu$ the outward normal. ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]])

[F2] $T:W^{1,r}(\Omega)\to L^r(\partial\Omega)$ is bounded and linear for $1\le r<\infty$, and $Tu=u|_{\partial\Omega}$ when $u$ has a continuous representative on $\overline\Omega$. ([[thm-lp-trace-operator-on-a-bounded-c-one-domain]], [[lem-sobolev-trace-agrees-with-continuous-boundary-values]])

[F3] The restrictions to $\Omega$ of $C_c^\infty(\mathbb R^n)$ functions are dense in $W^{1,r}(\Omega)$ for $1\le r<\infty$. ([[thm-smooth-up-to-the-boundary-density-on-smooth-domains]])

[F4] Holder's inequality holds on $\Omega$ and, since the surface measure is finite, on $\partial\Omega$ with the same exponents. ([[thm-holder-inequality-for-integrals]], [[def-surface-integral-on-a-compact-c-one-hypersurface]])

[F5] The outward normal $\nu$ is continuous on $\partial\Omega$ with $|\nu_i|\le1$, and the classical normal derivative of a $C^1(\overline\Omega)$ function $w$ is $\partial_\nu w=Dw\cdot\nu$. ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]], [[def-classical-normal-derivative]])

[F6] $W^{1,r}(\Omega)$ consists of $L^r$ classes whose first weak derivatives lie in $L^r$. ([[def-sobolev-space-wkp-and-its-norm]])

## Proof

**Proof technique:** direct.

1.1 The smooth case. Let $u,v\in C^1(\overline\Omega)$ and $F:=uv\,e_i$, which is a $C^1$ vector field on $\overline\Omega$ for real scalars; for complex scalars apply the real case to the real and imaginary parts and add, the identity being bilinear. Since $\operatorname{div}(uv\,e_i)=\partial_i(uv)=(\partial_iu)v+u\partial_iv$ and $F\cdot\nu=uv\nu_i$, the divergence theorem [F1] gives $\int_\Omega(\partial_iu)v+u\partial_iv=\int_{\partial\Omega}uv\nu_i dS$, that is $\int_\Omega u\partial_iv=-\int_\Omega(\partial_iu)v+\int_{\partial\Omega}uv\nu_i dS$. By [F2] the classical restrictions are $Tu$ and $Tv$, so the boundary term is $\int_{\partial\Omega}(Tu)(Tv)\nu_i dS$; all integrals are finite because $u,v,\partial_iu,\partial_iv$ and $\nu$ are bounded on $\overline\Omega$. If the boundary restriction of $u$ equals $\partial_\nu w$ for a specified $w\in C^1(\overline\Omega)$, substitute that equality only into the boundary integrand, using [F5]. [F1, F2, F5, algebra, given]

2.1 The general case by density and limits. Let $u_m,v_m$ be restrictions of $C_c^\infty(\mathbb R^n)$ functions with $u_m\to u$ in $W^{1,p}(\Omega)$ and $v_m\to v$ in $W^{1,p'}(\Omega)$, which exist by [F3]. Step 1.1 gives $\int_\Omega u_m\partial_iv_m=-\int_\Omega(\partial_iu_m)v_m+\int_{\partial\Omega}(Tu_m)(Tv_m)\nu_i dS$ for every $m$. The volume terms converge: by Holder [F4], $|\int_\Omega u_m\partial_iv_m-\int_\Omega u\partial_iv|\le\|u_m-u\|_{L^p}\|\partial_iv_m\|_{L^{p'}}+\|u\|_{L^p}\|\partial_iv_m-\partial_iv\|_{L^{p'}}\to0$ and $|\int_\Omega(\partial_iu_m)v_m-\int_\Omega(\partial_iu)v|\le\|\partial_iu_m-\partial_iu\|_{L^p}\|v_m\|_{L^{p'}}+\|\partial_iu\|_{L^p}\|v_m-v\|_{L^{p'}}\to0$. The boundary terms converge: by Holder on $\partial\Omega$ and the boundedness of $T$ [F2], $|\int_{\partial\Omega}[(Tu_m)(Tv_m)-(Tu)(Tv)]\nu_i dS|\le\|Tu_m-Tu\|_{L^p(\partial\Omega)}\|Tv_m\|_{L^{p'}(\partial\Omega)}+\|Tu\|_{L^p(\partial\Omega)}\|Tv_m-Tv\|_{L^{p'}(\partial\Omega)}\to0$. Hence the identity passes to the limit. Finally each of the three integrals is finite: $u\partial_iv$ and $(\partial_iu)v$ lie in $L^1(\Omega)$ by Holder, and $(Tu)(Tv)\nu_i$ lies in $L^1(\partial\Omega)$ by Holder with $|\nu_i|\le1$ on the finite-measure boundary. [F2, F3, F4, F5, F6, step 1.1, algebra, given] ∎

## Source notes

Teschl's Lemma 9.20 (printed p. 210) is the integration-by-parts identity for $W^{1,p}$ functions with boundary traces; Schikorra's proof of Theorem III.3.21 (printed p. 77) obtains the boundary term by the same integration by parts, and Laugesen's Step 1 of Theorem 3.14 (printed p. 63) carries out the boundary calculation behind it. The proof above separates the divergence theorem on smooth fields from the density extension, and it records the finiteness of all three pairings.
