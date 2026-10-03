---
id: thm-half-space-lift-by-normal-mollification
kind: theorem
title: "A bounded right inverse of the half-space trace by normal mollification"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-mean-zero-kernel-scale-estimate, lem-smooth-compactly-supported-functions-are-dense-in-slobodeckij-spaces, thm-trace-estimate-on-the-half-space, lem-sobolev-trace-agrees-with-continuous-boundary-values, def-fractional-slobodeckij-space-on-euclidean-space, thm-sobolev-spaces-are-banach-spaces, thm-completion-universal-property-for-bounded-linear-maps, lem-complex-translation-and-approximate-identity-interfaces, def-countable-choice, def-axiom-of-choice]
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
    - title: "Petru Mironescu, Fine properties of functions: an introduction (Internet Archive capture of the HAL deposit cel-00747696)"
      url: "https://web.archive.org/web/20200319104529id_/https://hal.science/cel-00747696/document"
      locator: "Chapter 11, Theorem 25(b), Remark 12 and Corollary 17, printed pp. 77-79: the lift $v(x,t)=f*\\rho_{|t|}(x)$, $u=v\\phi(t)$ is linear, has trace $f$, and satisfies the inverse estimate."
    - title: "Maria Kampanou, Trace Theorems for Sobolev Spaces (master's thesis, National and Kapodistrian University of Athens, July 2018)"
      url: "https://pergamos.lib.uoa.gr/uoa/dl/object/2864871/file.pdf"
      locator: "Chapter 3, Theorem 3.3 and estimates (3.4)-(3.7), printed pp. 23-26: the scaled-bump lift, its tangential and normal derivative estimates, and the exponential normal cutoff."
    - title: "Emilio Gagliardo, Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in $n$ variabili, Rend. Sem. Mat. Univ. Padova 27 (1957), 284-305"
      url: "https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf"
      locator: "No. 3, construction of the extension in the proof of Teorema [1.I], printed pp. 290-300: the extension is built from local smoothed representatives."
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter V, Section V.2, printed pp. 98-101: the scaled-kernel extension and the $p=2$ energy computation."
    - title: "Petru Mironescu, Fine properties of functions: an introduction (author-hosted 89-page edition)"
      url: "https://math.univ-lyon1.fr/~mironescu/resources/introduction_fine_properties_functions_2005.pdf"
      locator: "Chapter 12, Theorem 25(b), complete proof (12.30)-(12.37) and Corollary 17, printed pp. 86-87."
---

## Statement

Assume the Axiom of Choice. Let $d\ge1$, $1<p<\infty$, $\theta=1-1/p$. Fix
$\varphi\in C_c^\infty(\mathbb R^d)$ with $\int_{\mathbb R^d}\varphi=1$, put
$\varphi_t(y):=t^{-d}\varphi(y/t)$ for $t>0$ and
$\psi:=-\sum_i\partial_i(y_i\varphi)$, so that $\int\psi=0$ and
$\partial_t(g*\varphi_t)=t^{-1}(g*\psi_t)$; fix
$\eta\in C_c^\infty([0,\infty))$ with $\eta\equiv1$ on $[0,1]$ and
$\eta\equiv0$ on $[2,\infty)$. For $g\in W^{\theta,p}(\mathbb R^d)$ define
$$R_+g(x,t):=\eta(t)\,(g*\varphi_t)(x),\qquad x\in\mathbb R^d,\ t>0.$$
Then $R_+g\in W^{1,p}(\mathbb R^d\times(0,\infty))$ with
$$\partial_t(R_+g)=\eta'(t)(g*\varphi_t)+\eta(t)t^{-1}(g*\psi_t),\qquad \partial_{x_i}(R_+g)=\eta(t)(g*\partial_i\varphi_t),$$
and $\|R_+g\|_{W^{1,p}}\le C(d,p,\varphi,\eta)\|g\|_{W^{\theta,p}(\mathbb R^d)}$.
Moreover $T_+(R_+g)=g$, so $R_+$ is a bounded linear right inverse of the
half-space trace $T_+$.

## Facts & Assumptions

**Given:** The Axiom of Choice; $d\ge1$, $1<p<\infty$, $\theta=1-1/p$; a bump $\varphi\in C_c^\infty(\mathbb R^d)$ with $\int\varphi=1$; the kernels $\varphi_t(y)=t^{-d}\varphi(y/t)$ and $\psi_t$ for $\psi=-\sum_i\partial_i(y_i\varphi)$; a cutoff $\eta\in C_c^\infty([0,\infty))$ equal to $1$ on $[0,1]$ and $0$ on $[2,\infty)$; and the half-space trace $T_+$ of [[thm-trace-estimate-on-the-half-space]].

[F1] For $K\in C_c(\mathbb R^d)$ with $\int K=0$, $1<p<\infty$ and $g\in L^p$, $\int_0^Tt^{-p}\|g*K_t\|_{L^p}^pdt\le C(d,p,K)[g]_{\theta,p}^p$ for every $T>0$, with $C$ independent of $T$ and $g$. ([[lem-mean-zero-kernel-scale-estimate]])

[F2] The half-space trace $T_+:W^{1,p}(H)\to L^p(\mathbb R^d)$ is linear and bounded, and it agrees with classical restriction for compactly supported continuous classes in $W^{1,p}(H)$. ([[thm-trace-estimate-on-the-half-space]])

[F3] Assume Countable Choice. $C_c^\infty(\mathbb R^d)$ is dense in $W^{\theta,p}(\mathbb R^d)$. ([[lem-smooth-compactly-supported-functions-are-dense-in-slobodeckij-spaces]])

[F4] For $K\in L^1$ and $f\in L^p$, $\|K*f\|_p\le\|K\|_1\|f\|_p$; for a mollifier the convolution is smooth and $\partial^\alpha(\rho_\varepsilon*f)=(\partial^\alpha\rho_\varepsilon)*f$. ([[lem-complex-translation-and-approximate-identity-interfaces]])

[F5] The Slobodeckij norm is $\|g\|_{W^{\theta,p}}=\|g\|_{L^p}+[g]_{\theta,p}$. ([[def-fractional-slobodeckij-space-on-euclidean-space]])

[F6] $W^{1,p}(H)$ and $L^p$ are complete normed spaces. ([[thm-sobolev-spaces-are-banach-spaces]])

## Proof

**Proof technique:** direct.

1.1 The identities on the smooth class. First $\int\psi=0$, because $\int\partial_i(y_i\varphi)=0$ for the compactly supported function $y_i\varphi$. Next $\psi_t(y)=t^{-d}\psi(y/t)$ satisfies $\partial_t\varphi_t(y)=-t^{-1}\bigl(d\varphi_t(y)+y\cdot\nabla\varphi_t(y)\bigr)=t^{-1}\psi_t(y)$: differentiating $\varphi_t(y)=t^{-d}\varphi(y/t)$ in $t$, the two contributions combine into $-t^{-1}[d\varphi(z)+\nabla\varphi(z)\cdot z]$ times $t^{-d}$, with $z=y/t$, which is exactly $t^{-1}\psi_t(y)$ by the definition of $\psi$. Let $g\in C_c^\infty(\mathbb R^d)$ and extend $R_+g$ to $t=0$ by $\eta(0)\cdot g=g$. The function is smooth on $(0,\infty)$, and differentiating the convolution gives $\partial_{x_i}(g*\varphi_t)=g*\partial_i\varphi_t$ and $\partial_t(g*\varphi_t)=g*\partial_t\varphi_t=t^{-1}(g*\psi_t)$; hence $\partial_{x_i}(R_+g)=\eta(g*\partial_i\varphi_t)$ and $\partial_t(R_+g)=\eta'(g*\varphi_t)+\eta t^{-1}(g*\psi_t)$ as classical derivatives. Finally $g*\varphi_t\to g$ uniformly as $t\downarrow0$ for $g\in C_c^\infty$, so the extension is continuous up to $t=0$ with boundary value $g$. [F5, algebra, given]

2.1 The norm estimates. For smooth compactly supported $g$, Young's inequality [F4] gives $\int_0^\infty\|R_+g(\cdot,t)\|_p^pdt\le2\|\eta\|_\infty^p\|\varphi\|_1^p\|g\|_p^p$, and the term $\eta'(g*\varphi_t)$ is bounded by $\|\eta'\|_\infty^p\|\varphi\|_1^p\|g\|_p^p$, since $\eta'$ is supported in $[1,2]$. For $K_i=\partial_i\varphi$, compact support gives $\int K_i=0$, and $\partial_i\varphi_t=t^{-1}(K_i)_t$. Thus [F1] bounds $\int_0^2\|\eta(t)(g*\partial_i\varphi_t)\|_p^pdt$ by $C_i\|\eta\|_\infty^p[g]_{\theta,p}^p$. The same estimate with $K=\psi$ controls the normal term $\eta t^{-1}(g*\psi_t)$. Combining with $|a+b|^p\le2^{p-1}(|a|^p+|b|^p)$ gives $\|R_+g\|_{W^{1,p}}^p\le C(\|g\|_p^p+[g]_{\theta,p}^p)\le C\|g\|_{W^{\theta,p}}^p$. These smooth interior derivatives are weak derivatives by integration against compactly supported tests. [F1, F4, F5, step 1.1, algebra]

3.1 Extension to $W^{\theta,p}$ and the right-inverse identity. Let now $g\in W^{\theta,p}(\mathbb R^d)$ and choose $g_m\in C_c^\infty(\mathbb R^d)$ with $g_m\to g$ in $W^{\theta,p}$ by [F3]. By step 2.1 the sequence $(R_+g_m)$ is Cauchy in the complete space $W^{1,p}(H)$ [F6]; define $R_+g$ as its limit. The value is independent of the approximating sequence and the resulting operator is linear and bounded with the constant of step 2.1, because any two approximating sequences can be interleaved. The weak derivatives of the limit are the limits of the weak derivatives, which by step 1.1 converge to the displayed convolution expressions in $L^p(H)$ by [F1] for the mean-zero tangential and normal terms, and by [F4] for the cutoff term; hence the limit satisfies the same two derivative identities. The values themselves converge to $\eta(t)(g*\varphi_t)$ in $L^p(H)$ by [F4], so this limit is the formula specified in the Statement. For the trace, step 1.1 and [F2] give $T_+(R_+g_m)=g_m$ for each smooth $g_m$; since $T_+$ and $R_+$ are bounded, $T_+(R_+g)=\lim_mT_+(R_+g_m)=\lim_mg_m=g$ in $L^p(\mathbb R^d)$. Thus $T_+\circ R_+=\mathrm{id}$ on $W^{\theta,p}(\mathbb R^d)$ and $R_+$ is a bounded linear right inverse. [F1, F2, F3, F4, F6, step 1.1, step 2.1, algebra, given] ∎

## Source notes

Mironescu's Theorem 25(b) with Remark 12 and Corollary 17 (printed pp. 77-79) is the source's lift $v(x,t)=f*\rho_{|t|}(x)$, $u=v\phi(t)$; Kampanou's Theorem 3.3 and estimates (3.4)-(3.7) (printed pp. 23-26) give the scaled-bump derivative estimates and the normal cutoff; Gagliardo's construction (printed pp. 290-300) and Schikorra's Section V.2 (printed pp. 98-101) are the companion treatments. The mean-zero kernel comes from differentiating the scaled mollifier in its scale, which is why the normal derivative is controlled by the fractional seminorm and not by the plain $L^p$ norm.
