---
id: thm-lp-trace-operator-on-a-bounded-c-one-domain
kind: theorem
title: "The $L^p$ trace operator on a bounded $C^1$ domain"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-trace-estimate-on-the-half-space, lem-c-k-boundary-flattening-preserves-wkp-locally, def-bounded-c-k-domain-and-boundary-charts, def-bounded-c-one-domain-boundary-charts-and-outward-normal, def-surface-integral-on-a-compact-c-one-hypersurface, lem-surface-integral-is-independent-of-c-one-boundary-charts, lem-finite-ambient-partitions-for-euclidean-boundary-integration, thm-smooth-up-to-the-boundary-density-on-smooth-domains, thm-completion-universal-property-for-bounded-linear-maps, thm-riesz-fischer-completeness-of-l-p, thm-sobolev-spaces-are-banach-spaces, lem-weak-leibniz-rule-with-a-smooth-factor, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-axiom-of-choice]
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
      locator: "Section 9.2, Theorem 9.18 and its proof, printed pp. 208-209: bounded trace operator on a bounded $C^1$ domain, reduction by a finite partition and boundary straightening."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Section 3.7, Theorem 3.14, Steps 2-3, printed pp. 63-64: curved boundary by a $C^1$ diffeomorphism, then a finite covering of the boundary."
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter III, Section III.3.5, Theorem III.3.21, printed pp. 76-77: density and flattening argument for $\\partial\\Omega\\in C^1$."
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3, Section 3.9, Theorem 3.44, printed pp. 71-73: the half-space model used on each chart."
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subset\mathbb R^n$, $n\ge2$, be a
bounded $C^1$ domain in the graph sense of
[[def-bounded-c-k-domain-and-boundary-charts]], let $\partial\Omega$ carry the
chart-independent surface measure of
[[def-surface-integral-on-a-compact-c-one-hypersurface]] and
[[lem-surface-integral-is-independent-of-c-one-boundary-charts]], let
$1\le p<\infty$ and $\mathbb K\in\{\mathbb R,\mathbb C\}$. Then there is a
unique bounded linear operator
$$T:W^{1,p}(\Omega;\mathbb K)\longrightarrow L^p(\partial\Omega;\mathbb K)$$
with $Tu=u|_{\partial\Omega}$ for every
$u\in C(\overline\Omega)\cap W^{1,p}(\Omega;\mathbb K)$, and it satisfies
$\|Tu\|_{L^p(\partial\Omega)}\le C(\Omega,p)\|u\|_{W^{1,p}(\Omega)}$. On each
boundary chart the operator is the flat half-space trace of
[[thm-trace-estimate-on-the-half-space]] transported by the flattening
diffeomorphism, and the chartwise definitions agree on overlaps; uniqueness
holds because two bounded operators agreeing on the dense subspace
$C(\overline\Omega)\cap W^{1,p}(\Omega)$ are equal.

## Facts & Assumptions

**Given:** The Axiom of Choice; a bounded $C^1$ domain $\Omega$ with finite boundary atlas and subordinate finite ambient partition as in [[def-bounded-c-k-domain-and-boundary-charts]] and [[lem-finite-ambient-partitions-for-euclidean-boundary-integration]]; $1\le p<\infty$; and the surface measure conventions of [[def-surface-integral-on-a-compact-c-one-hypersurface]].

[F1] The half-space trace: for $H=\{x_n>0\}$ and $1\le p<\infty$ there is a unique bounded linear $T_+:W^{1,p}(H;\mathbb K)\to L^p(\mathbb R^{n-1};\mathbb K)$ with $T_+u=u(\cdot,0)$ for every compactly supported $u\in C(\overline H)\cap W^{1,p}(H)$, and $\|T_+u\|_{L^p}\le C(n,p)\|u\|_{W^{1,p}(H)}$. ([[thm-trace-estimate-on-the-half-space]])

[F2] Let $\Phi:U\to V$ be a $C^k$ diffeomorphism with bounded derivatives through order $k$ on a compact patch and bounded derivatives of its inverse on the corresponding patch. Then $u\mapsto u\circ\Phi$ is bounded from $W^{k,p}(V_0)$ to $W^{k,p}(U_0)$ for every $k\ge1$, $1\le p\le\infty$; for $k=1$ bounded $C^1$ chart and inverse data suffice. ([[lem-c-k-boundary-flattening-preserves-wkp-locally]])

[F3] A bounded $C^k$ domain, $k\ge1$, has flattening charts $\Phi_j:W_j\to B_j\times\mathbb R$, $\Phi_j(p)=(y,s-h_j(y))$, with $\Phi_j(\Omega\cap W_j)=\Phi_j(W_j)\cap\{t<0\}$ and $\Phi_j(\partial\Omega\cap W_j)=\Phi_j(W_j)\cap\{t=0\}$; derivatives through order $k$ of $\Phi_j$ and $\Phi_j^{-1}$ are bounded on compactly contained patches. The outward normal is as in [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]. ([[def-bounded-c-k-domain-and-boundary-charts]])

[F4] Assume $\mathrm{AC}_\omega$. A finite family of open sets covering the compact boundary has a subordinate finite ambient partition $\chi_j\in C_c^\infty(W_j)$ with $\sum_j\chi_j=1$ on a neighbourhood of $\partial\Omega$. ([[lem-finite-ambient-partitions-for-euclidean-boundary-integration]])

[F5] The surface integral over the compact $C^1$ hypersurface $\partial\Omega$ is defined by patching chartwise integrals with graph density $J_j(y)=\sqrt{1+|Dh_j(y)|^2}$; it is a finite Borel measure independent of the charts and the partition, and on a one-sided domain boundary the outward unit normal agrees on overlaps. ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-surface-integral-is-independent-of-c-one-boundary-charts]])

[F6] Assume the Axiom of Choice. The restrictions to $\Omega$ of functions in $C_c^\infty(\mathbb R^n;\mathbb K)$ are dense in $W^{1,p}(\Omega;\mathbb K)$, $1\le p<\infty$. ([[thm-smooth-up-to-the-boundary-density-on-smooth-domains]])

[F7] For a bounded smooth multiplier $\eta$ with bounded derivatives, $\eta u\in W^{1,p}(\Omega)$ for $u\in W^{1,p}(\Omega)$, with $D_i(\eta u)=(\partial_i\eta)u+\eta D_iu$ and $\|\eta u\|_{W^{1,p}}\le C_\eta\|u\|_{W^{1,p}}$. ([[lem-weak-leibniz-rule-with-a-smooth-factor]])

[F8] Assume Countable Choice. If $X$ is a normed space with completion $(\widehat X,i)$ and $Y$ is a Banach space, a linear $T:X\to Y$ with $\|Tx\|\le C\|x\|$ extends uniquely to a bounded linear $\widehat T:\widehat X\to Y$ with the same bound. ([[thm-completion-universal-property-for-bounded-linear-maps]])

[F9] $L^p(\partial\Omega;\mathbb K)$ is complete for $1\le p\le\infty$ and $W^{1,p}(\Omega;\mathbb K)$ is a complete normed space. ([[thm-riesz-fischer-completeness-of-l-p]], [[thm-sobolev-spaces-are-banach-spaces]])

[F10] $W^{1,p}(\Omega;\mathbb K)$ consists of $L^p$ classes with weak first derivatives in $L^p$, normed as displayed; equalities of classes are almost-everywhere equalities. ([[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]])

## Proof

**Proof technique:** direct.

1.1 The boundary estimate on continuous classes. Let $u\in C(\overline\Omega)\cap W^{1,p}(\Omega)$ and let $\{(\Phi_j,\chi_j)\}$ be the finite atlas and partition of [F3] and [F4], so that $u|_{\partial\Omega}=\sum_j(\chi_ju)|_{\partial\Omega}$ and the inequality for a sum of $N$ terms gives $\|u|_{\partial\Omega}\|_{L^p(\partial\Omega)}^p\le N^{p-1}\sum_j\int_{\mathbb R^{n-1}}\bigl|(\chi_ju)\circ\Psi_j(y)\bigr|^pJ_j(y)\,dy$, where $\Psi_j(y):=\Phi_j^{-1}(y,0)$ and $J_j=\sqrt{1+|Dh_j|^2}$. For each $j$ put $u_j:=(\chi_ju)\circ\Phi_j^{-1}$ on the flattened patch $\Phi_j(W_j)\cap\{t<0\}$ and extend it by zero; because $\operatorname{supp}\chi_j$ is compactly contained in $W_j$, the extension is compactly supported and continuous on the closed half-space, and $u_j\in W^{1,p}$ of the half-space with $\|u_j\|_{W^{1,p}}\le C_j\|u\|_{W^{1,p}(\Omega)}$ by [F2] and [F7]. Reflecting $t\mapsto-t$ and applying the half-space estimate [F1] to the reflected function, whose boundary value is $y\mapsto(\chi_ju)\circ\Psi_j(y)$, gives $\int|(\chi_ju)\circ\Psi_j|^pdy\le C_j'\|u\|_{W^{1,p}(\Omega)}^p$. Since $J_j$ is bounded on the compact patch, $\int|(\chi_ju)\circ\Psi_j|^pJ_j(y)dy\le\|J_j\|_\infty\int|(\chi_ju)\circ\Psi_j|^pdy$, and summing the finitely many bounds yields $\|u|_{\partial\Omega}\|_{L^p(\partial\Omega)}\le C(\Omega,p)\|u\|_{W^{1,p}(\Omega)}$. [F1, F2, F3, F4, F5, F7, algebra, given]

2.1 Construction of $T$ by density. Let $D$ be the class of restrictions to $\Omega$ of functions in $C_c^\infty(\mathbb R^n)$, a linear subspace of $C(\overline\Omega)\cap W^{1,p}(\Omega)$ that is dense in $W^{1,p}(\Omega)$ by [F6]. The restriction map $S:D\to L^p(\partial\Omega)$, $S\varphi:=\varphi|_{\partial\Omega}$, is linear and satisfies $\|S\varphi\|_{L^p(\partial\Omega)}\le C(\Omega,p)\|\varphi\|_{W^{1,p}(\Omega)}$ by step 1.1. Since $D$ is dense in the complete space $W^{1,p}(\Omega)$ [F9] and carries the subspace norm, the pair $(W^{1,p}(\Omega),\text{inclusion})$ is a completion of $D$; the completion universal property [F8], applied with the Banach space $L^p(\partial\Omega)$ [F9], produces a unique bounded linear $T:W^{1,p}(\Omega)\to L^p(\partial\Omega)$ with $T|_D=S$ and $\|T\|\le C(\Omega,p)$. [F6, F8, F9, step 1.1, algebra]

3.1 Agreement, uniqueness and class-dependence. If $u\in C(\overline\Omega)\cap W^{1,p}(\Omega)$ and $\varphi_m\in D$ with $\varphi_m\to u$ in $W^{1,p}(\Omega)$ (step 1.1 and [F6]), then $T\varphi_m=\varphi_m|_{\partial\Omega}\to Tu$ by continuity of $T$, while $\|\varphi_m|_{\partial\Omega}-u|_{\partial\Omega}\|_{L^p(\partial\Omega)}\le C(\Omega,p)\|\varphi_m-u\|_{W^{1,p}(\Omega)}\to0$ by step 1.1 applied to $\varphi_m-u\in C(\overline\Omega)\cap W^{1,p}(\Omega)$; hence $Tu=u|_{\partial\Omega}$ in $L^p(\partial\Omega)$. If $T'$ is another bounded linear operator with the same property on $C(\overline\Omega)\cap W^{1,p}(\Omega)$, then $T-T'$ vanishes on the dense subspace $D$ and is bounded, hence zero by the same limiting argument; this is the asserted uniqueness. Finally, if $u=v$ are the same $W^{1,p}$ class in the sense of the quotient representation [F10], then $u-v$ is the zero class, $T(u-v)=0$ because $0\in D$ is a limit of the constant sequence and $S0=0$, so $T$ depends only on the class. The construction is chartwise exactly the transported flat trace, and the chartwise definitions agree because both equal $T$ on the dense class. [F6, F10, step 1.1, step 2.1, algebra, given] ∎

## Source notes

Teschl's Theorem 9.18 (printed pp. 208-209) reduces the bounded-domain trace to finitely many flattened pieces; Laugesen's Steps 2-3 of Theorem 3.14 (printed pp. 63-64) flattens the curved boundary and covers it by finitely many charts; Schikorra's Theorem III.3.21 (printed pp. 76-77) and Hunter's flat half-space model (Theorem 3.44, printed pp. 71-73) are the second independent treatments. The proof above separates the chartwise estimate on continuous classes from the density extension, and it uses the bounded graph density to compare the transported boundary norms with the flat $L^p$ norms.
