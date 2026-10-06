---
id: lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded
kind: lemma
title: "The associated elliptic operator is densely defined, symmetric and lower bounded"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [cor-a-sufficiently-large-shift-is-coercive, def-bounded-coercive-and-symmetric-sesquilinear-forms, def-countable-choice, def-formal-adjoint-and-adjoint-weak-dirichlet-problem, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-ltwo-operator-associated-with-a-symmetric-elliptic-form, def-orthogonality-and-orthogonal-complement, def-shifted-elliptic-solution-operator, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set, thm-double-orthogonal-complement-is-closure, thm-garding-inequality-for-a-divergence-form-elliptic-operator]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.8, the operator $L$ on $L^2$ with dense domain and its closedness discussion, printed p. 106 (read in full)'
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 4, Section 4.1, the solution map $B$ and its self-adjointness, printed pp. 84-86 (read in full)'
    - title: 'Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)'
      url: 'https://math.stanford.edu/~lms/lecs-on-pde.pdf'
      locator: 'Lecture 10, condition (C) and the operator setting, printed pp. 100-101 (read in full)'
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. In the symmetric case of [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], let $\Omega\subseteq\mathbb R^n$ be open, fix $\mu\ge\beta$ with $\beta$ as in [[thm-garding-inequality-for-a-divergence-form-elliptic-operator]], and let $K_\mu$ be the shifted solution operator of [[def-shifted-elliptic-solution-operator]]. Then:
1. $D(L)$ is dense in $L^2(\Omega)$;
2. $L$ is symmetric, i.e. $(Lu,v)_{L^2}=(u,Lv)_{L^2}$ for all $u,v\in D(L)$;
3. $L$ is lower bounded, i.e. $(Lu,u)_{L^2}=a(u,u)\ge-\beta\|u\|_{L^2}^2$ for every $u\in D(L)$ (and also $a(u,u)\ge-\mu\|u\|_{L^2}^2$).
No boundary regularity of $\Omega$ is used.

## Facts & Assumptions

**Given:** Countable Choice; an open set $\Omega\subseteq\mathbb R^n$; the symmetric divergence-form form $a$ with constants $\theta,M_a,M_c$ and $b=0$; a fixed $\mu\ge\beta$; the shifted solution operator $K_\mu$; the operator $L:D(L)\to L^2(\Omega)$ of [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]].

[F1] Range identity: for every $f\in L^2(\Omega)$ the class $K_\mu f$ lies in $D(L)$ with $L(K_\mu f)=f-\mu K_\mu f$, because $a(K_\mu f,v)=a_\mu(K_\mu f,v)-\mu(K_\mu f,v)_{L^2}=(f-\mu K_\mu f,v)_{L^2}$ for all $v\in H^1_0(\Omega)$ ([[def-shifted-elliptic-solution-operator]], [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]]).

[F2] Coercivity: $\operatorname{Re}a_\mu(u,u)=a_\mu(u,u)\ge\frac\theta2\|u\|_{H^1_0}^2$ for $u\in H^1_0(\Omega)$, since $\mu\ge\beta$ ([[cor-a-sufficiently-large-shift-is-coercive]], [[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[def-sobolev-space-wkp-and-its-norm]]).

[F3] Density: $H^1_0(\Omega)$ is dense in $L^2(\Omega)$, and the closure of a linear subspace equals its double orthogonal complement, so a subspace is dense in the Hilbert space $L^2(\Omega)$ exactly when its orthogonal complement is trivial ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]], [[thm-double-orthogonal-complement-is-closure]], [[def-orthogonality-and-orthogonal-complement]], [[def-hilbert-space]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F4] Garding's inequality: $a(u,u)\ge\frac\theta2\|u\|_{H^1}^2-\beta\|u\|_{L^2}^2$ and $a(u,u)\ge-\beta\|u\|_{L^2}^2$ ([[thm-garding-inequality-for-a-divergence-form-elliptic-operator]]).

[F5] Weak representer: for $u\in D(L)$ and $f=Lu$ one has $a(u,v)=(f,v)_{L^2}$ for all $v\in H^1_0(\Omega)$ ([[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], [[def-wkp-zero-as-a-sobolev-closure]]).

## Proof

**Proof technique:** direct.

1.1 Range inclusion. By [F1] every element of $\operatorname{ran}K_\mu$ lies in $D(L)$, so it suffices to show that $\operatorname{ran}K_\mu$ is dense in $L^2(\Omega)$. Let $y\in L^2(\Omega)$ be orthogonal to $\operatorname{ran}K_\mu$. Then $(y,K_\mu y)_{L^2}=0$, while the defining equation of $K_\mu$ at $v=K_\mu y$ gives $a_\mu(K_\mu y,K_\mu y)=(y,K_\mu y)_{L^2}=0$; coercivity [F2] yields $\|K_\mu y\|_{H^1_0}^2\le\frac2\theta a_\mu(K_\mu y,K_\mu y)=0$, so $K_\mu y=0$. For every $v\in H^1_0(\Omega)$ the defining equation then gives $(y,v)_{L^2}=a_\mu(K_\mu y,v)=0$, and density of $H^1_0(\Omega)$ in $L^2(\Omega)$ ([F3]) forces $y=0$. Since $K_\mu$ is linear, its range is a linear subspace; by [F3] its orthogonal complement is trivial, so $\operatorname{ran}K_\mu$ is dense; hence its superset $D(L)$ is dense in $L^2(\Omega)$. [F1, F2, F3, given]

1.2 Symmetry. Let $u,v\in D(L)$ and write $f=Lu$, $g=Lv$. By [F5], $(Lu,v)_{L^2}=(f,v)_{L^2}=a(u,v)$ and $(u,Lv)_{L^2}=(u,g)_{L^2}=\overline{(g,u)_{L^2}}=\overline{a(v,u)}$. Since the coefficients are Hermitian and $b=0$ with real $c$, the form $a$ is symmetric, $a(u,v)=\overline{a(v,u)}$ ([[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], [[def-bounded-coercive-and-symmetric-sesquilinear-forms]]), so $(Lu,v)_{L^2}=(u,Lv)_{L^2}$. [F5, given, algebra]

2.1 Lower bound. For $u\in D(L)$, [F5] with $v=u$ gives $(Lu,u)_{L^2}=a(u,u)$, which is real by symmetry; Garding's inequality [F4] yields $a(u,u)\ge-\beta\|u\|_{L^2}^2$, and a second application with the positive shift gives $a(u,u)=a_\mu(u,u)-\mu\|u\|_{L^2}^2\ge-\mu\|u\|_{L^2}^2$ because $a_\mu(u,u)\ge0$ by [F2]. No boundary regularity of $\Omega$ was used. [F2, F4, F5, step 1.1, given, algebra] ∎ 