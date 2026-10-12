---
id: thm-nrqm-intervals-robin-simple-complete-spectrum
aliases: [nrqm-intervals-and-contacts-robin-simple-complete-spectrum]
kind: theorem
domain: mathematics
title: "Simple complete spectrum of the separated Robin realisation"
status: draft
origin: pipeline
dependency_level: 5
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, thm-nrqm-intervals-separated-robin-green-resolvent, thm-nrqm-intervals-regular-ivp-parameter-series, thm-nrqm-intervals-sine-on-completeness, lem-nrqm-intervals-compact-resolvent-eigenbasis, lem-nrqm-intervals-integration-by-parts, lem-nrqm-intervals-endpoint-trace-and-half-line-decay, cor-independent-set-is-no-larger-than-a-finite-spanning-set, def-dimension, def-linear-basis, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  thm-nrqm-intervals-separated-robin-green-resolvent: mathematical-premise
  thm-nrqm-intervals-regular-ivp-parameter-series: mathematical-premise
  thm-nrqm-intervals-sine-on-completeness: mathematical-premise
  lem-nrqm-intervals-compact-resolvent-eigenbasis: mathematical-premise
  lem-nrqm-intervals-integration-by-parts: mathematical-premise
  lem-nrqm-intervals-endpoint-trace-and-half-line-decay: mathematical-premise
  cor-independent-set-is-no-larger-than-a-finite-spanning-set: mathematical-premise
  def-dimension: mathematical-premise
  def-linear-basis: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.1 pp. 181-186 (separated boundary conditions and simplicity of the resulting spectrum)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Section 8.6 pp. 231-233 (eigenfunction expansions for one-dimensional Sturm-Liouville problems)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Statement

Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]],
[[def-countable-choice]]). Let $0<L<\infty$, $\alpha,\beta\in\mathbb R$,
$V\in C([0,L];\mathbb R)$, and let $A$ be the Robin realisation of
[[thm-nrqm-intervals-separated-robin-green-resolvent]]:
$D(A)=\{u\in H^2(0,L):u'^*(0)=\alpha u^*(0),\ u'^*(L)=\beta u^*(L)\},\qquad
Au=-D^2u+Vu .$
Then:

(a) $A$ has compact resolvent; there is a complete orthonormal family
$(\psi_n)_{n\ge1}$ of eigenvectors of $A$, every eigenspace of $A$ is
one-dimensional, and the spectrum of $A$ consists exactly of the eigenvalues
$\lambda_n$ of $A$, listed with multiplicity, which satisfy
$\lambda_n\to\infty$ and $\sigma_{\mathrm{ess}}(A)=\varnothing$;

(b) in particular the eigenvalues can be listed strictly increasingly as
$\lambda_1<\lambda_2<\cdots$ (each simple), and if $A\psi=\lambda\psi$ with
$\psi\ne0$, then $\psi$ is a nonzero multiple of the solution $u_a(\cdot,\lambda)$
of $-u''+Vu=\lambda u$, $u(0)=1$, $u'(0)=\alpha$, and the eigenvalue
condition is $\beta=\tfrac{u_a'(L,\lambda)}{u_a(L,\lambda)}$ when
$u_a(L,\lambda)\ne0$, while $u_a(L,\lambda)=0$ occurs for no eigenvalue.

## Facts & Assumptions

**Given:** the Robin realisation $A$ of [[thm-nrqm-intervals-separated-robin-green-resolvent]].

[F1] $A$ is self-adjoint, its resolvent is an integral operator with continuous kernel, and $(A-z)^{-1}$ is compact for every $z$ in the resolvent set ([[thm-nrqm-intervals-separated-robin-green-resolvent]]).

[F2] Compact-resolvent structure ([[lem-nrqm-intervals-compact-resolvent-eigenbasis]]): a self-adjoint operator with compact resolvent on an infinite-dimensional Hilbert space has a complete orthonormal family $(\psi_n)_{n\ge1}$ of eigenvectors with eigenvalues $\mu_n$ satisfying $|\mu_n|\to\infty$, all eigenspaces finite dimensional, spectrum exactly the eigenvalue set, and empty essential spectrum ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F3] For every $\lambda\in\mathbb R$ the unique solution $u_a(\cdot,\lambda)$ of $-u''+Vu=\lambda u$, $u(0)=1$, $u'(0)=\alpha$, exists and is $C^2$; every eigenfunction of $A$ with eigenvalue $\lambda$ satisfies the left boundary condition and hence, together with its value at $0$, is determined by $u_a(\cdot,\lambda)$ up to the scalar $u(0)$ ([[thm-nrqm-intervals-regular-ivp-parameter-series]]).

[F4] $L^2(0,L;\mathbb C)$ is infinite dimensional: the vectors $e_n(x)=\sqrt{2/L}\sin(n\pi x/L)$, $n\ge1$, form an infinite orthonormal family ([[thm-nrqm-intervals-sine-on-completeness]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]), while a space with a finite spanning set has no linearly independent subset equinumerous with $\mathbb N$ ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]) and a finite-dimensional space has a finite basis, hence a finite spanning set ([[def-dimension]], [[def-linear-basis]]).

[F5] For $u\in D(A)$, the first-order identity of [[lem-nrqm-intervals-integration-by-parts]] clause (a) applied to the pair $(u',u)$ (both in $H^1(0,L)$ because $u\in H^2(0,L)$), together with the boundary conditions $u'^*(0)=\alpha u^*(0)$ and $u'^*(L)=\beta u^*(L)$ and the reality of $\alpha,\beta$, gives $\langle Au,u\rangle=\int_0^L|u'|^2+\int_0^LV|u|^2+\alpha|u(0)|^2-\beta|u(L)|^2;$ and the trace bound of [[lem-nrqm-intervals-endpoint-trace-and-half-line-decay]] clause (a) on the intervals $(0,\delta)$ and $(L-\delta,L)$, $0<\delta\le L$, gives $|u(0)|^2,|u(L)|^2\le2\delta^{-1}\|u\|_{L^2}^2+2\delta\|u'\|_{L^2}^2$.

## Proof

1.1 [Compact resolvent and eigenbasis] By [F1], $(A-i)^{-1}$ is compact and $i$ lies in the resolvent set of the self-adjoint operator $A$. By [F4] the space $L^2(0,L;\mathbb C)$ is infinite dimensional, so [F2] supplies a complete orthonormal family $(\psi_n)_{n\ge1}$ of eigenvectors with eigenvalues $\mu_n$ satisfying $|\mu_n|\to\infty$, finite-dimensional eigenspaces, $\sigma(A)$ equal to the eigenvalue set with all spectral points isolated of finite multiplicity, and $\sigma_{\mathrm{ess}}(A)=\varnothing$. [F1, F2, F4]

1.2 [Boundedness below] Put $V_\infty:=\max_{[0,L]}|V|$ and $\delta:=\min\bigl\{L,(4(|\alpha|+|\beta|+1))^{-1}\bigr\}$, so that $2\delta(|\alpha|+|\beta|)\le\tfrac12$. For $u\in D(A)$, [F5] gives $\langle Au,u\rangle =\|u'\|_{L^2}^2+\int_0^LV|u|^2+\alpha|u(0)|^2-\beta|u(L)|^2 \ge\bigl(1-2\delta(|\alpha|+|\beta|)\bigr)\|u'\|_{L^2}^2-\bigl(V_\infty+2\delta^{-1}(|\alpha|+|\beta|)\bigr)\|u\|_{L^2}^2 \ge-C\|u\|_{L^2}^2,$ where $C:=V_\infty+2\delta^{-1}(|\alpha|+|\beta|)$: the integral term is at least $-V_\infty\|u\|^2$, each of the two boundary terms is at least $-|\alpha|$ resp. $-|\beta|$ times the trace bound of [F5], and the coefficient of $\|u'\|^2$ is at least $\tfrac12\ge0$. In particular every eigenvalue $\lambda$ of $A$ satisfies $\lambda\ge-C$, because $\lambda\|u\|_{L^2}^2=\langle Au,u\rangle\ge-C\|u\|_{L^2}^2$ for an eigenvector $u\ne0$. [F5, given, algebra]

2.1 [Simplicity] Let $A\psi=\lambda\psi$ with $\psi\ne0$. By [F3] the solution $u_a(\cdot,\lambda)$ is the unique solution of the initial value problem with data $(1,\alpha)$ at $0$, so the $C^2$ representative of $\psi$ equals $\psi^*(0)u_a(\cdot,\lambda)$; here $\psi^*(0)\ne0$, because otherwise the representative vanishes at $0$ together with its derivative $\alpha\psi^*(0)=0$, forcing $\psi=0$ by uniqueness. Hence $\ker(A-\lambda)=\mathbb C u_a(\cdot,\lambda)$ is one-dimensional: every nonzero eigenfunction at $\lambda$ is a nonzero multiple of $u_a(\cdot,\lambda)$. The eigenvalue condition is the right boundary condition evaluated on $u_a(\cdot,\lambda)$; $u_a(L,\lambda)=0$ would give $u_a'(L,\lambda)=\beta u_a(L,\lambda)=0$ and hence $u_a\equiv0$ by uniqueness, which is impossible since $u_a(0)=1$. [step 1.1, F3, algebra]

3.1 [The increasing list] By [F2] the eigenvalues $\mu_n$ of the eigenfamily of step 1.1 satisfy $|\mu_n|\to\infty$, and by step 1.2 they satisfy $\mu_n\ge-C$; hence $\mu_n\to+\infty$, since a sequence bounded below whose moduli tend to infinity tends to $+\infty$. By step 2.1 every eigenspace is one-dimensional, so the $\mu_n$ are pairwise distinct; ordering the infinite set $\{\mu_n:n\ge1\}$ increasingly gives a strictly increasing list $\lambda_1<\lambda_2<\cdots$ with $\lambda_n\to\infty$, which is the listing with multiplicity because every eigenspace is one-dimensional. With steps 1.1 and 2.1 this proves (a) and (b). [step 1.1, step 1.2, step 2.1, F2] ∎
