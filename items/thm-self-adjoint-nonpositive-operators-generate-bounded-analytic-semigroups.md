---
id: thm-self-adjoint-nonpositive-operators-generate-bounded-analytic-semigroups
kind: theorem
title: Self-adjoint nonpositive operators generate bounded analytic semigroups
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 13
deps: [def-sectorial-operator-with-the-semigroup-sign-convention, thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, lem-unbounded-adjoint-is-well-defined-and-closed, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-unbounded-linear-operator-domain-and-graph, def-orthogonality-and-orthogonal-complement, def-real-and-complex-inner-product-space, def-hilbert-space, thm-cauchy-schwarz-in-an-inner-product-space, def-dissipative-operator, thm-lumer-phillips-generation-theorem, lem-generator-of-the-contour-semigroup-is-the-sectorial-operator, def-countable-choice, thm-double-orthogonal-complement-is-closure, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: 'Chapter II Section 4.a, Corollary 4.7 and the sectorial estimate, printed pp. 101-105'
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: 'Chapter 2 Section 2.3, Example 2.19 and Corollary 2.28, printed pp. 56 and 66'
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: 'Chapter 11 Section 11.5, the self-adjoint heat generator and (11.45)-(11.48), printed pp. 274-275'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]) for the cited integral and semigroup suppliers.

Let $H$ be a complex Hilbert space and let $A$ be a self-adjoint operator on
$H$ with dense domain
([[def-symmetric-self-adjoint-and-essentially-self-adjoint]],
[[def-unbounded-linear-operator-domain-and-graph]]) satisfying the quadratic
nonpositivity $\langle Au,u\rangle\le0$ for every $u\in D(A)$. Then:

(1) for every $\lambda=a+ib$ with $b\ne0$,
$\|(\lambda I-A)u\|\ge|b|\,\|u\|$ for all $u\in D(A)$, $\lambda\in\rho(A)$ and
$\|R(\lambda,A)\|\le1/|b|$; more generally
$\|R(\lambda,A)\|\le1/\operatorname{dist}(\lambda,\{z:\operatorname{Re}z\le0\})$
for $\operatorname{Re}\lambda>0$;

(2) $A$ is sectorial of angle $\pi/2$ in the $e^{tA}$ convention
([[def-sectorial-operator-with-the-semigroup-sign-convention]]) and generates
a bounded analytic semigroup of angle $\pi/2$ which is contractive on
$[0,\infty)$: $\|T(t)\|\le1$. Dependent Choice is assumed for the semigroup suppliers; Countable Choice is inherited from the
vocabulary item
[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]; the proof below
uses no choice principle beyond Dependent Choice.

## Facts & Assumptions

**Given:** A complex Hilbert space $H$, a densely defined self-adjoint operator $A$ on $H$ with $\langle Au,u\rangle\le0$ for all $u\in D(A)$, and the numbers $a_u:=\langle Au,u\rangle/\|u\|_H^2$ for $u\in D(A)\setminus\{0\}$.

[L1] Self-adjointness means $T=T^*$: domains and values agree, under Countable Choice for the adjoint vocabulary ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-adjoint-of-a-densely-defined-unbounded-operator]]).

[L2] For a densely defined $T$ one has $\operatorname{ran}(T-z)^\perp=\ker(T^*-\overline z)$ for every $z\in\mathbb C$ ([[lem-unbounded-adjoint-is-well-defined-and-closed]]).

[L3] The adjoint $T^*$ is closed ([[lem-unbounded-adjoint-is-well-defined-and-closed]]).

[L4] Cauchy-Schwarz: $|\langle x,y\rangle|\le\|x\|\,\|y\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[L5] $z\in\rho(T)$ when $z-T:D(T)\to H$ is bijective with bounded inverse $R_T(z)=(z-T)^{-1}$ ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]).

[L6] $A$ is sectorial of angle $\delta>0$ at vertex $0$ when $\Sigma_{\pi/2+\delta}\subseteq\rho(A)$ with $\|R(\lambda,A)\|\le M_\varepsilon/|\lambda|$ on $\Sigma_{\pi/2+\delta-\varepsilon}$ for every $\varepsilon\in(0,\delta)$ ([[def-sectorial-operator-with-the-semigroup-sign-convention]]).

[L7] The conditions (a)-(e) of the sectorial resolvent characterisation are equivalent, and when they hold the generated semigroup is the contour semigroup ([[thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups]]).

[L8] On a Hilbert space $A$ is dissipative if and only if $\operatorname{Re}\langle Au,u\rangle\le0$ for all $u\in D(A)$, and Lumer-Phillips makes a densely defined dissipative $A$ generate a contraction semigroup if and only if $\operatorname{Ran}(\lambda_0I-A)=H$ for some $\lambda_0>0$ ([[def-dissipative-operator]], [[thm-lumer-phillips-generation-theorem]]).

[L9] The contour semigroup generated by $A$ is the unique strongly continuous semigroup generated by $A$ within the class of exponentially bounded semigroups ([[lem-generator-of-the-contour-semigroup-is-the-sectorial-operator]]).

[L13] Under Countable Choice, $N^{\perp\perp}=\overline N$ for every linear subspace $N$ of a Hilbert space ([[thm-double-orthogonal-complement-is-closure]]).

## Proof

**Proof technique:** direct.

1.1 The lower bound, injectivity and closed range. For $u\in D(A)\setminus\{0\}$ put $a_u:=\langle Au,u\rangle/\|u\|_H^2\le0$; by [L4], $\|(\lambda I-A)u\|\,\|u\|_H\ge|\langle(\lambda I-A)u,u\rangle|=|\lambda-a_u|\,\|u\|_H^2\ge\operatorname{dist}(\lambda,(-\infty,0])\|u\|_H^2$, so for every $\lambda\notin(-\infty,0]$ the operator $\lambda I-A$ is injective with the lower bound $\|(\lambda I-A)u\|\ge\operatorname{dist}(\lambda,(-\infty,0])\|u\|$; moreover its range is closed, because if $(\lambda I-A)u_n\to w$ then $(u_n)$ is Cauchy, $u_n\to u$ and $Au_n=\lambda u_n-(\lambda I-A)u_n\to\lambda u-w$, and closedness of $A$ from [L3] and [L1] gives $u\in D(A)$ with $(\lambda I-A)u=w$. [L1, L3, L4, given, algebra]

2.1 The range is dense. If $v\perp\operatorname{Ran}(\lambda I-A)$ for some $\lambda\notin(-\infty,0]$, then [L2] with $T=A$ and $z=\lambda$ gives $v\in\ker(A^*-\overline\lambda)$; by self-adjointness [L1] this says $Av=\overline\lambda v$, that is $(\overline\lambda I-A)v=0$, and the lower bound of [step 1.1] at $\overline\lambda$ (which also lies outside $(-\infty,0]$) forces $v=0$; hence $\operatorname{Ran}(\lambda I-A)^\perp=\{0\}$ and, since the range is closed by [step 1.1], [L13] gives $\operatorname{Ran}(\lambda I-A)=\{0\}^\perp=H$. [step 1.1, L1, L2, L13, given, algebra]

3.1 The resolvent bounds and sectoriality. By [step 2.1] and [step 1.1] the map $\lambda I-A$ is bijective with inverse bounded by $1/\operatorname{dist}(\lambda,(-\infty,0])$, so $\lambda\in\rho(A)$ with $\|R(\lambda,A)\|\le1/\operatorname{dist}(\lambda,(-\infty,0])$ for every $\lambda\notin(-\infty,0]$ by [L5]; for $\operatorname{Re}\lambda>0$ the distance to the smaller set $(-\infty,0]$ dominates the distance to $\{z:\operatorname{Re}z\le0\}$, which equals $\operatorname{Re}\lambda$, and for $\lambda=a+ib$ with $b\ne0$ the distance to the real set $(-\infty,0]$ is at least $|b|$; finally, for $|\arg\lambda|\le\pi-\varepsilon$ the nearest point of $(-\infty,0]$ is the origin when $|\arg\lambda|\le\pi/2$ and has distance $|\lambda|\sin(\pi-|\arg\lambda|)\ge|\lambda|\sin\varepsilon$ otherwise, so $\|R(\lambda,A)\|\le M_\varepsilon/|\lambda|$ with $M_\varepsilon=1/\sin\varepsilon$ on $\Sigma_{\pi-\varepsilon}$; since $\Sigma_\pi=\mathbb C\setminus(-\infty,0]\subseteq\rho(A)$, this is sectoriality of angle $\pi/2$. [step 1.1, step 2.1, L5, L6, given, algebra]

4.1 Generation and contractivity. By [step 3.1] $A$ satisfies the sectorial resolvent condition with exponent $\pi/2$, so [L7] provides a bounded analytic semigroup $T$ of angle $\pi/2$ generated by $A$; separately $A$ is dissipative by [L8] because $\operatorname{Re}\langle Au,u\rangle\le0$, and $\operatorname{Ran}(\lambda I-A)=H$ for every $\lambda>0$ by [step 3.1], so Lumer-Phillips [L8] makes $A$ generate a strongly continuous contraction semigroup; that semigroup is bounded, hence exponentially bounded, and has generator $A$, so by uniqueness [L9] it coincides with the analytic semigroup $T$, giving $\|T(t)\|\le1$ for $t\ge0$; the argument assumes Dependent Choice and inherits Countable Choice from the adjoint vocabulary [L1] and uses no further choice principle beyond Dependent Choice. [step 3.1, L1, L7, L8, L9, given, algebra] ∎
