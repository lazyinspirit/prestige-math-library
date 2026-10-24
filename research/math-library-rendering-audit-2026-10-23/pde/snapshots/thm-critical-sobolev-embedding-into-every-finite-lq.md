---
id: thm-critical-sobolev-embedding-into-every-finite-lq
kind: theorem
title: "The critical Sobolev embedding into every finite $L^q$"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-axiom-of-choice, def-sobolev-conjugate-exponent, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-extension-domain-and-extension-operator, thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n, thm-holder-inequality-for-integrals, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, thm-polar-coordinates-formula-for-lebesgue-measure, def-polar-surface-measure-on-the-unit-sphere, def-weak-derivative-of-a-locally-integrable-function, thm-tonelli-and-fubini-for-completed-product-measures, cor-vector-valued-ftc-and-lipschitz-bound]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 §3.2, Remark 3.16 and the critical exponent discussion, printed pp. 73-74."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3 §3.7, the discussion at the exponent p=n, printed p. 66."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge2$ and let $\Omega\subseteq\mathbb R^n$ be nonempty, open, bounded and a $W^{1,p}$-extension domain for every $p\in(n/2,n)$ (the extension operator may depend on $p$). For every $1\le q<\infty$ there is $C(n,q,\Omega)$ with
$$\|u\|_{L^q(\Omega)}\le C(n,q,\Omega)\|u\|_{W^{1,n}(\Omega)}\qquad(u\in W^{1,n}(\Omega;\mathbb K));$$
that is, $W^{1,n}(\Omega)\hookrightarrow L^q(\Omega)$ continuously for every finite $q$. The constant necessarily blows up as $q\to\infty$, so no $L^\infty$ bound is asserted.

## Facts & Assumptions

**Given:** The Axiom of Choice; $n\ge2$; a bounded nonempty open set $\Omega$ that is a $W^{1,p}$-extension domain for every $p\in(n/2,n)$, with the operator allowed to depend on $p$ ([[def-sobolev-extension-domain-and-extension-operator]]); $1\le q<\infty$; and a class $u\in W^{1,n}(\Omega;\mathbb K)$.

[F1] Holder's inequality on the finite measure set $\Omega$: for $1\le a\le b<\infty$, $\|w\|_{L^a(\Omega)}\le|\Omega|^{1/a-1/b}\|w\|_{L^b(\Omega)}$ ([[thm-holder-inequality-for-integrals]]).

[F2] Subcritical Sobolev embedding: for $1\le p<n$ and $p\le r\le p^{*}=\frac{np}{n-p}$, $\|w\|_{L^r(\Omega)}\le C(n,p,r,\Omega)\|w\|_{W^{1,p}(\Omega)}$ on a bounded extension domain ([[thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n]]).

[F3] $W^{1,n}$ consists of the $L^n$ classes with all first weak derivatives in $L^n$, and the Sobolev norm is the $\ell^n$ norm of the component $L^n$ norms ([[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-sobolev-conjugate-exponent]]).

[F4] If $\overline{B(a,2R)}\subset\Omega$, there is $\eta\in C_c^\infty(B(a,2R))$ equal to $1$ on $B(a,R)$ ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]). Polar coordinates give the radial integral formula ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-polar-surface-measure-on-the-unit-sphere]]), and weak derivatives are defined by integration by parts against compactly supported smooth tests ([[def-weak-derivative-of-a-locally-integrable-function]]).

## Proof

**Proof technique:** direct.

1.1 The case $q\le n$. By [F1] with $a=q$ and $b=n$, $\|u\|_{L^q(\Omega)}\le|\Omega|^{1/q-1/n}\|u\|_{L^n(\Omega)}\le|\Omega|^{1/q-1/n}\|u\|_{W^{1,n}(\Omega)}$. [F1, F3, given, algebra]

1.2 The case $q>n$. Put $s:=\frac{nq}{n+q}$. Then $n/2<s<n$ and $s^{*}=\frac{ns}{n-s}=q$ by [F3]. By the domain hypothesis, $\Omega$ is a $W^{1,s}$-extension domain, so the subcritical embedding [F2] with $p=s$ and $r=q=s^{*}$ gives $\|u\|_{L^q(\Omega)}\le C(n,s,q,\Omega)\|u\|_{W^{1,s}(\Omega)}$. Holder [F1] applied to each component with $a=s<b=n$ gives $\|D^\alpha u\|_{L^s}\le|\Omega|^{1/s-1/n}\|D^\alpha u\|_{L^n}$ for $|\alpha|\le1$; summing over the finitely many multi-indices yields $\|u\|_{W^{1,s}(\Omega)}\le C(|\Omega|,n,s)\|u\|_{W^{1,n}(\Omega)}$. Combining the two estimates proves the case $q>n$; since $s=nq/(n+q)$, the resulting constant depends only on $n,q,\Omega$. [F1, F2, F3, given, algebra]

2.1 Conclusion. Steps 1.1 and 1.2 cover $q\le n$ and $q>n$, so every finite $q$ is covered with a constant depending only on $n,q,\Omega$. To see that these constants cannot remain bounded as $q\to\infty$, choose $a\in\Omega$ and $R>0$ with $\overline{B(a,2R)}\subset\Omega$, and choose $\eta$ as in [F4]. Define $w(x)=\eta(x)\log\log(1+R/|x-a|)$ for $x\ne a$, assigning any finite value at $a$. If $r=|x-a|\le R/2$, then $$|D\log\log(1+R/r)|=\frac{R}{r(r+R)\log(1+R/r)}\le\frac1{r\log(R/r)}.$$ Thus polar coordinates [F4] give $\int_{B(a,R/2)}|Dw|^n\,dx\le C\int_0^{R/2}\frac{dr}{r(\log(R/r))^n}<\infty$ for $n\ge2$; also $w\in L^n$ near $a$ because $\log\log(1+R/r)=O(r^{-1/2})$ and the polar $L^n$ integral of $r^{-1/2}$ converges for $n\ge2$, and on the rest of its compact support $w$ is smooth with bounded derivatives. For every coordinate line with nonzero transverse displacement from $a$, $w$ is smooth and compactly supported on that line. Apply the fundamental theorem ([[cor-vector-valued-ftc-and-lipschitz-bound]]) to $w$ times a test function. The transverse singleton of excluded lines is null since $n\ge2$, and $w,Dw\in L^n\subseteq L^1$ on their bounded support. Fubini ([[thm-tonelli-and-fubini-for-completed-product-measures]]) therefore integrates the section identities to the weak derivative identity, proving $w\in W^{1,n}(\Omega)$. It is essentially unbounded on every neighbourhood of $a$: for every $M>0$ it exceeds $M$ on a punctured ball about $a$, so $E_M$ has positive measure. If $q_j\to\infty$ and admissible constants satisfied $C(q_j)\le C_*$, then for each $M>0$, the set $E_M=\{x:|w(x)|>M\}$ has positive measure and $$C_*\|w\|_{W^{1,n}(\Omega)}\ge\|w\|_{L^{q_j}(\Omega)}\ge M|E_M|^{1/q_j}.$$ Letting $j\to\infty$ gives $C_*\|w\|_{W^{1,n}}\ge M$ for every $M$, a contradiction. Hence the best constants necessarily diverge as $q\to\infty$, and no $L^\infty$ endpoint is asserted. [F3, F4, step 1.1, step 1.2, given, algebra] ∎


## Source notes

Kinnunen's Remark 3.16 and Hunter's discussion at $p=n$ record the critical embedding $W^{1,n}\hookrightarrow L^q$ for finite $q$ and the failure of the $L^\infty$ endpoint. The proof above reduces $q>n$ to the subcritical embedding with source exponent $s=nq/(n+q)\in(n/2,n)$ and uses Holder on the finite measure domain to compare $W^{1,s}$ with $W^{1,n}$. The all-exponents hypothesis supplies exactly this $W^{1,s}$ extension operator for each finite $q>n$; the case $q\le n$ is direct Holder.
