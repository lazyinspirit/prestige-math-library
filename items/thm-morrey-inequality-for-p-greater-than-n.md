---
id: thm-morrey-inequality-for-p-greater-than-n
kind: theorem
title: "Morrey's inequality for $p>n$"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-axiom-of-choice, def-countable-choice, def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-space-wkp-and-its-norm, def-ball-average-operator-on-r-n, def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, lem-ball-mean-oscillation-potential-bound, lem-sphere-and-ball-measures-scale, thm-polar-coordinates-formula-for-lebesgue-measure, thm-holder-inequality-for-integrals, thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 §3.3, Theorem 3.23 and Remark 3.25(3), printed pp. 76-79."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3 §3.8, Theorem 3.36 and its proof, printed pp. 68-70."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge2$, $n<p<\infty$, let $\Omega\subseteq\mathbb R^n$ be open and let $u\in W^{1,p}(\Omega;\mathbb K)$. Then $u$ has a continuous representative $u^{*}$, and for every ball $B(x,r)$ with $B(x,2r)\Subset\Omega$ one has
$$|u^{*}(z)-u^{*}(y)|\le C(n,p)\,|z-y|^{1-n/p}\,\|Du\|_{L^p(B(x,2r))}\qquad(z,y\in B(x,r));$$
equivalently $[u^{*}]_{C^{0,1-n/p}(B(x,r))}\le C(n,p)\|Du\|_{L^p(B(x,2r))}$.

## Facts & Assumptions

**Given:** The Axiom of Choice, used through the Countable-Choice interfaces of the cited measure-theoretic and approximation results; $n\ge2$; $n<p<\infty$; an open set $\Omega\subseteq\mathbb R^n$; a field $\mathbb K\in\{\mathbb R,\mathbb C\}$; and a class $u\in W^{1,p}(\Omega;\mathbb K)$.

[F1] The ball oscillation estimate: for a ball $B(x,\rho)$ and $u\in W^{1,p}(B(x,\rho))$, $|u(z)-u_{B(x,\rho)}|\le C_0(n)\int_{B(x,\rho)}|Du(y)|\,|z-y|^{1-n}dy$ for almost every $z\in B(x,\rho)$ ([[lem-ball-mean-oscillation-potential-bound]]).

[F2] Holder's inequality $\int|fg|\le\|f\|_p\|g\|_{p'}$ for conjugate exponents ([[thm-holder-inequality-for-integrals]]), and $\int_{B(z,R)}|z-y|^{(1-n)p'}dy=\omega_{n-1}R^{\,n-(n-1)p'}/(n-(n-1)p')$ with $n-(n-1)p'>0$ because $p>n$, while $(n-(n-1)p')/p'=1-n/p$ by polar coordinates ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F3] The ball average is the normalized integral, and $A_\rho u(x)\to u(x)$ as $\rho\downarrow0$ for almost every $x$ ([[def-ball-average-operator-on-r-n]], [[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]]).

[F4] $W^{1,p}$ consists of the $L^p$ classes with weak gradient in $L^p$; $L^p$ classes are determined up to null sets; for $\alpha=1-n/p\in(0,1)$ the local Holder norm is $[v]_{C^{0,\alpha}(B)}=\sup_{z\ne y\in B}|v(z)-v(y)|/|z-y|^{\alpha}$ ([[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]]).

[F5] Countable Choice is available from the Axiom of Choice and is the hypothesis of the cited differentiation interface; the cited Holder theorem requires no choice hypothesis ([[def-axiom-of-choice]], [[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Oscillation on a ball. Fix a ball $B(x,\rho)\subseteq\Omega$. By [F1], for almost every $z\in B(x,\rho)$, $|u(z)-u_{B(x,\rho)}|\le C_0(n)\int_{B(x,\rho)}|Du(y)|\,|z-y|^{1-n}dy$. Holder [F2] with exponents $p$ and $p'$ bounds this by $C_0(n)\|Du\|_{L^p(B(x,\rho))}\bigl(\int_{B(z,2\rho)}|z-y|^{(1-n)p'}dy\bigr)^{1/p'}$, where the integration region has been enlarged from $B(x,\rho)\subseteq B(z,2\rho)$ to $B(z,2\rho)$. By [F2] the kernel integral equals $c(n,p)\rho^{\,n-(n-1)p'}$ with $n-(n-1)p'>0$ and exponent $(n-(n-1)p')/p'=1-n/p$, so $|u(z)-u_{B(x,\rho)}|\le C_1(n,p)\,\rho^{1-n/p}\|Du\|_{L^p(B(x,\rho))}$ for almost every $z\in B(x,\rho)$. [F1, F2, given, algebra]

2.1 Convergence of the ball means and the representative. Fix a ball $B(x,r)$ with $B(x,2r)\Subset\Omega$ and let $0<\rho\le\sigma\le r$. For almost every $z\in B(x,\rho)$ step 1.1 applied on $B(x,\sigma)$ gives $|u(z)-u_{B(x,\sigma)}|\le C_1\sigma^{1-n/p}\|Du\|_{L^p(B(x,\sigma))}\le C_1\sigma^{1-n/p}\|Du\|_{L^p(B(x,r))}$; averaging in $z$ over $B(x,\rho)$ yields $|u_{B(x,\rho)}-u_{B(x,\sigma)}|\le C_1\sigma^{1-n/p}\|Du\|_{L^p(B(x,r))}$. Hence the net $(u_{B(x,\rho)})_{\rho\downarrow0}$ is Cauchy and we may define $u^{*}(x):=\lim_{\rho\downarrow0}u_{B(x,\rho)}$ for every $x$ such that some $B(x,2r)\Subset\Omega$, with $|u^{*}(x)-u_{B(x,\rho)}|\le C_1\rho^{1-n/p}\|Du\|_{L^p(B(x,r))}$ for $0<\rho\le r$. The zero extension of $u$ to $\mathbb R^n$ lies in $L^1_{\mathrm{loc}}(\mathbb R^n)$ by Holder [F2] on bounded balls, since $u\in L^p(\Omega)$; its sufficiently small ball means at each interior point are those of $u$. Thus [F3] and [F4] give $u_{B(x,\rho)}\to u(x)$ for almost every $x$, so $u^{*}=u$ almost everywhere: $u^{*}$ is a representative of the class. The Countable-Choice interface used here is supplied by [F5]. [F2, F3, F4, F5, step 1.1, given, algebra]

3.1 The Holder bound and continuity. Let $z,y\in B(x,r)$ and put $\ell:=|z-y|$; the case $\ell=0$ is trivial. If $\ell\le r/2$, apply step 1.1 on the balls $B(z,\ell)$ and $B(y,\ell)$ and step 2.1 on their means: $|u^{*}(z)-u_{B(z,\ell)}|\le C_1\ell^{1-n/p}\|Du\|_{L^p(B(z,\ell))}$ and similarly at $y$; both balls lie in $B(x,r+\ell)\subseteq B(x,2r)$ when $\ell\le r/2$, so the two norms are at most $\|Du\|_{L^p(B(x,2r))}$. For the difference of the two means, both balls $B(z,\ell)$ and $B(y,\ell)$ lie in $B(z,2\ell)\subseteq B(x,r+2\ell)\subseteq B(x,2r)$, and step 1.1 on $B(z,2\ell)$ bounds $|u(a)-u(b)|\le 2C_1(2\ell)^{1-n/p}\|Du\|_{L^p(B(x,2r))}$ for almost every $a\in B(z,\ell)$, $b\in B(y,\ell)$; averaging gives $|u_{B(z,\ell)}-u_{B(y,\ell)}|\le 2C_1(2\ell)^{1-n/p}\|Du\|_{L^p(B(x,2r))}$. Combining the three terms, $|u^{*}(z)-u^{*}(y)|\le C_2(n,p)\ell^{1-n/p}\|Du\|_{L^p(B(x,2r))}$. If $\ell>r/2$, use the mean over the fixed ball $B(x,2r)$: by step 1.1 on $B(x,2r)$, for almost every $a\in B(x,2r)$ one has $|u(a)-u_{B(x,2r)}|\le C_1(2r)^{1-n/p}\|Du\|_{L^p(B(x,2r))}$, and since $B(z,\rho)\subseteq B(x,2r)$ for $0<\rho<r$, averaging over $B(z,\rho)$ and letting $\rho\downarrow0$ gives $|u^{*}(z)-u_{B(x,2r)}|\le C_1(2r)^{1-n/p}\|Du\|_{L^p(B(x,2r))}$, with the same bound at $y$; hence $|u^{*}(z)-u^{*}(y)|\le 2C_1(2r)^{1-n/p}\|Du\|_{L^p(B(x,2r))}\le C_2'\, \ell^{1-n/p}\|Du\|_{L^p(B(x,2r))}$ because $(2r)^{1-n/p}\le 4^{1-n/p}\ell^{1-n/p}$ when $\ell>r/2$. This proves the displayed estimate with a constant depending only on $n$ and $p$; since the exponent $1-n/p$ is positive, $u^{*}$ is continuous on every ball $B(x,r)$ with $B(x,2r)\Subset\Omega$, hence on all of $\Omega$, and the equivalent Holder-norm statement follows from [F4]. [F4, step 1.1, step 2.1, given, algebra] ∎

## Source notes

Kinnunen proves Morrey's inequality by combining the ball oscillation estimate (Lemma 5.22, reproduced in the preceding item) with Holder's inequality in the form $\int_{B(x,r)}|Du(w)||y-w|^{1-n}dw\le c r^{1-n/p}\|Du\|_{L^p(B(x,r))}$, printed pp. 140 and 77-79; the present proof follows that route and records the two-regime comparison of means needed because the statement normalizes the right-hand norm on the fixed ball $B(x,2r)$. The continuity of the representative and the identification $u^{*}=u$ almost everywhere are the standard Lebesgue-point argument.
