---
id: prop-se-compact-eigenfunction-vanishing
kind: proposition
domain: mathematics
title: Vanishing of an eigenfunction invisible outside a ball
status: published
deps:
  - def-se-geometry
  - def-se-control-cutoffs
  - def-se-dirichlet-laplacian
  - def-se-dirichlet-scale
  - prop-se-scale-flow
  - lem-author-03489e9088b7-spectral-cutoff-scale-identifications
  - lem-se-helmholtz-open-set-continuation
  - math:def-test-function-space-d-of-an-open-set
  - math:thm-locally-integrable-functions-embed-in-distributions
  - math:def-axiom-of-choice
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-control-cutoffs: mathematical-premise
  def-se-dirichlet-laplacian: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  lem-author-03489e9088b7-spectral-cutoff-scale-identifications: mathematical-premise
  lem-se-helmholtz-open-set-continuation: mathematical-premise
  math:def-test-function-space-d-of-an-open-set: mathematical-premise
  math:thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
proof_strategy: direct
dependency_level: 8
---

## Statement

Assume the Axiom of Choice. Let $\Omega=\mathbb R^n\setminus\Theta$, $n\ge2$, be the connected smooth exterior of the compact obstacle, and let $\varphi$ be the real observation cutoff: $\varphi=0$ on $B_R(0)$ and $\varphi>0$ on $\omega=\{x\in\Omega:|x|>R\}$, where $\Theta\subset B_R(0)$. Let $A=I-\Delta_D$ be the positive self-adjoint Dirichlet realization, $R_A=A^{-1}$, and $H_D^s$ its completed spectral scale.

For any $\sigma\in\mathbb R$ and $\mu\in\mathbb C$, suppose $v_0\in H_D^\sigma$ satisfies $\Delta_Dv_0=\mu v_0$ in $H_D^{\sigma-2}$ and is invisible to $\varphi$. Then $v_0=0$.

Here the eigenvalue equation uses the consistent map $\Delta_D=I-A:H_D^\sigma\to H_D^{\sigma-2}$, with the right-hand side placed in that space by the canonical embedding. For arbitrary real $\sigma$, invisibility means $\langle v_0,\varphi\eta\rangle=0$ for every $\eta\in C_c^\infty(\Omega;\mathbb C)$, using the pivot pairing, linear in its first argument. This is well-defined because $\varphi\eta$ belongs to the common core $D(A^\infty)$. For function-valued states it is the usual weak meaning of $\varphi v_0=0$. Thus no cutoff bound outside the already supplied range is assumed.

In fact, unless $v_0$ is already zero, the resolvent identity places it in every higher spectral space, its eigenvalue is real, and it has the analytic representative supplied by Helmholtz continuation. Non-trapping and a boundary multiplier sign are not needed for this eigenfunction implication.

## Facts & Assumptions

**Given:** The geometry, cutoff, spectral scale, $\sigma$, $\mu$ and $v_0$ in the statement, under the Axiom of Choice.

**Goal:** Prove that $v_0=0$.

[F1] The exterior $\Omega$ is open and connected. The cutoff $\varphi$ is real and smooth, and $\omega=\{x\in\Omega:\varphi(x)>0\}=\{|x|>R\}$ is a nonempty open subset of $\Omega$. Compactness of $\Theta$ and $\Theta\subset B_R(0)$ ensure that this exterior region is present. The geometry and cutoff are fixed by [[def-se-geometry]] and [[def-se-control-cutoffs]].

[F2] The Dirichlet realization is self-adjoint and nonpositive on $L^2(\Omega)$, with domain $H^2(\Omega)\cap H^1_0(\Omega)$; on that domain it is the weak Laplacian. Its shift $A=I-\Delta_D$ is self-adjoint and at least the identity [[def-se-dirichlet-laplacian]].

[F3] The completed scale has the first-slot-linear pivot pairing and identifies $H_D^0=L^2$, $H_D^1=H^1_0$, and $H_D^2=D(A)=H^2\cap H^1_0$. The pivot pairing agrees with the $L^2$ integral when its arguments are functions at nonnegative levels [[def-se-dirichlet-scale]].

[F4] For every real $a$, $R_A:H_D^a\to H_D^{a+2}$ is an isometric isomorphism. Powers and embeddings are consistent extensions of their common-core operations; in particular $A:H_D^{a+2}\to H_D^a$ is inverse to $R_A$, and $\Delta_D=I-A:H_D^a\to H_D^{a-2}$ is the consistent scale Laplacian [[prop-se-scale-flow]], [[def-se-dirichlet-scale]].

[F5] If $b\ge a$, the identity on the common core extends to a contractive injective embedding $H_D^b\to H_D^a$. A finite set of these spaces has a common Hausdorff realization at its smallest index; identities of scale powers agree under these embeddings [[lem-author-03489e9088b7-spectral-cutoff-scale-identifications]].

[F6] The complex test functions $C_c^\infty(\Omega;\mathbb C)$ are smooth actual functions with support compactly contained in $\Omega$; conjugation preserves this test space [[math:def-test-function-space-d-of-an-open-set]]. The map $f\mapsto(\eta\mapsto\int_\Omega f\eta)$ is injective on $L^1_{\mathrm{loc}}$ classes under Countable Choice [[math:thm-locally-integrable-functions-embed-in-distributions]].

[F7] Under Choice, an $H^1$ weak solution of $\Delta u=\mu u$ on a connected open subset of $\mathbb R^n$, $n\ge2$, with real $\mu$, has a real analytic representative; if it vanishes almost everywhere on a nonempty open subset, it vanishes everywhere as a Sobolev class [[lem-se-helmholtz-open-set-continuation]].

[F8] Full Choice is assumed for the exact spectral and realization interfaces, and supplies Countable Choice for the injectivity and continuation inputs. It is the foundational hypothesis used here, not an empirical or physical premise [[math:def-axiom-of-choice]].

## Proof

**Given:** The geometry, cutoff, spectral scale, $\sigma$, $\mu$ and $v_0$ in the statement, under the Axiom of Choice.

**Goal:** Prove that $v_0=0$.

[F1] The exterior $\Omega$ is open and connected. The cutoff $\varphi$ is real and smooth, and $\omega=\{x\in\Omega:\varphi(x)>0\}=\{|x|>R\}$ is a nonempty open subset of $\Omega$. Compactness of $\Theta$ and $\Theta\subset B_R(0)$ ensure that this exterior region is present. The geometry and cutoff are fixed by [[def-se-geometry]] and [[def-se-control-cutoffs]].

[F2] The Dirichlet realization is self-adjoint and nonpositive on $L^2(\Omega)$, with domain $H^2(\Omega)\cap H^1_0(\Omega)$; on that domain it is the weak Laplacian. Its shift $A=I-\Delta_D$ is self-adjoint and at least the identity [[def-se-dirichlet-laplacian]].

[F3] The completed scale has the first-slot-linear pivot pairing and identifies $H_D^0=L^2$, $H_D^1=H^1_0$, and $H_D^2=D(A)=H^2\cap H^1_0$. The pivot pairing agrees with the $L^2$ integral when its arguments are functions at nonnegative levels [[def-se-dirichlet-scale]].

[F4] For every real $a$, $R_A:H_D^a\to H_D^{a+2}$ is an isometric isomorphism. Powers and embeddings are consistent extensions of their common-core operations; in particular $A:H_D^{a+2}\to H_D^a$ is inverse to $R_A$, and $\Delta_D=I-A:H_D^a\to H_D^{a-2}$ is the consistent scale Laplacian [[prop-se-scale-flow]], [[def-se-dirichlet-scale]].

[F5] If $b\ge a$, the identity on the common core extends to a contractive injective embedding $H_D^b\to H_D^a$. A finite set of these spaces has a common Hausdorff realization at its smallest index; identities of scale powers agree under these embeddings [[lem-author-03489e9088b7-spectral-cutoff-scale-identifications]].

[F6] The complex test functions $C_c^\infty(\Omega;\mathbb C)$ are smooth actual functions with support compactly contained in $\Omega$; conjugation preserves this test space [[math:def-test-function-space-d-of-an-open-set]]. The map $f\mapsto(\eta\mapsto\int_\Omega f\eta)$ is injective on $L^1_{\mathrm{loc}}$ classes under Countable Choice [[math:thm-locally-integrable-functions-embed-in-distributions]].

[F7] Under Choice, an $H^1$ weak solution of $\Delta u=\mu u$ on a connected open subset of $\mathbb R^n$, $n\ge2$, with real $\mu$, has a real analytic representative; if it vanishes almost everywhere on a nonempty open subset, it vanishes everywhere as a Sobolev class [[lem-se-helmholtz-open-set-continuation]].

[F8] Full Choice is assumed for the exact spectral and realization interfaces, and supplies Countable Choice for the injectivity and continuation inputs. It is the foundational hypothesis used here, not an empirical or physical premise [[math:def-axiom-of-choice]].



**Proof technique:** resolvent regularization, the self-adjoint L2 pairing, and connected-domain Helmholtz continuation.

1.1 The eigenvalue equation gives $Av_0=(1-\mu)v_0$ in $H_D^{\sigma-2}$. Applying $R_A$ there gives $v_0=(1-\mu)R_Av_0$ in $H_D^\sigma$, where the right-hand side is the image of an element of $H_D^{\sigma+2}$. If $\mu=1$, this identity already gives $v_0=0$; henceforth suppose $v_0\ne0$, so $\mu\ne1$. [given, F4, F5]

2.1 Applying powers of $R_A$ to the identity in step 1.1 and using their consistency gives $v_0=(1-\mu)^kR_A^kv_0$ in the common lower scale, for every integer $k\ge1$. Its right-hand side belongs to $H_D^{\sigma+2k}$. The embeddings are injective, so these are compatible representatives of the same element. Thus $v_0$ belongs to every higher spectral space. In particular choose $k$ with $b=\sigma+2k\ge2$ and write $u$ for its representative in $H_D^2\subseteq L^2$. If $u=0$ then injectivity would give $v_0=0$, contrary to the present case. [step 1.1, F3, F4, F5]

3.1 The difference $\Delta_Du-\mu u$ belongs to $H_D^{b-2}$ and maps to zero in $H_D^{\sigma-2}$ by the original eigenvalue equation and consistency. Injectivity of the scale embedding implies that the difference is zero already in $H_D^{b-2}$, and therefore in $L^2$ because $b-2\ge0$. Since $u\in H_D^2=D(\Delta_D)$, this is the weak equation $\Delta u=\mu u$ with $u\in H^1_0(\Omega)$. [given, step 2.1, F2, F3, F4, F5]

3.2 For each test function $\eta$, the product $\varphi\eta$ is again smooth with compact support in $\Omega$. Every iterate $A^j(\varphi\eta)=(I-\Delta)^j(\varphi\eta)$ is smooth with compact support there, so $\varphi\eta\in D(A^\infty)$. Compatibility of the pivot pairing and step 2.1 turn the assumed invisibility into $0=\langle u,\varphi\eta\rangle=\int_\Omega\varphi u\overline\eta\,dx$. The product $\varphi u$ is locally integrable, since $u\in L^2$ and $\varphi$ is smooth and bounded. Conjugation maps the test space onto itself; hence [F6] implies $\varphi u=0$ almost everywhere. [given, step 2.1, F1, F2, F3, F5, F6, F8]

4.1 Self-adjointness and nonpositivity give $\mu\|u\|_2^2=\langle\Delta_Du,u\rangle_2\in(-\infty,0]$. Because $u\ne0$, $\|u\|_2^2>0$, so $\mu$ is real and nonpositive. This obtains the real eigenvalue only after regularization has placed the eigenvector in the self-adjoint operator domain. [step 2.1, step 3.1, F2, F3]

5.1 On $\omega$, the multiplier $\varphi$ is strictly positive. Removing the null set on which $\varphi u$ may fail to vanish therefore gives $u=0$ almost everywhere on the nonempty open set $\omega$. Steps 3.1 and 4.1 meet exactly the $H^1$, real-eigenvalue and weak-equation hypotheses of [F7], with the connected domain $D=\Omega$. That lemma gives an analytic representative and $u=0$ in $\Omega$. Injectivity of the scale embeddings then gives $v_0=0$, contradicting the assumed nonzero case and proving the assertion. [step 3.1, step 4.1, step 3.2, F1, F5, F7, F8] ∎

## Source notes

The original article, Lemma 3.4 proof (iii), PDF page 11, is retained as attribution for the spectral regularization and connected-exterior argument. The proof above is locally authored from the completed exact supplier interfaces; the analytic-continuation input is the completed harmonic-lift lemma. No upstream proof review or new external literature reading is claimed. The published closed-form and flow suppliers stored in the physics namespace both have mathematical domain; that storage namespace introduces no physical premise. This authoring resolution concerns a generated draft and makes no finding about the original article.
