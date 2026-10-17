---
id: lem-parabolic-zero-boundary-sobolev-space-is-separable
kind: lemma
title: The zero-boundary Sobolev energy space is a separable Hilbert space
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-countable-choice
  - def-parabolic-evolution-triple-and-energy-space
  - def-separable-space
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - thm-poincare-inequality-for-w-one-p-zero
  - thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 11, §§11.1–11.2, PDF pp. 100–103: the Hilbert evolution triple and its energy space."
    - title: Long Chen, Finite Element Methods for Parabolic Equations
      url: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf
      locator: "§1, pp. 1–3: the parabolic weak formulation with H=L² and V=H¹₀."
verification: {}
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^d$ be a bounded
polyhedral open set with $d\ge1$. Put
$$H=L^2(\Omega;\mathbb R),\qquad V=W^{1,2}_0(\Omega;\mathbb R),\qquad \|v\|_V=\|v\|_{W^{1,2}(\Omega)}.$$
Then $V$ is a separable real Hilbert space, and the inclusion
$V\hookrightarrow H$ is continuous, injective and dense. Consequently
$(V,H,V^*)$ is a real evolution triple in the sense of
[[def-parabolic-evolution-triple-and-energy-space]]. The gradient norm
$\|\nabla v\|_{L^2}$ is equivalent to this norm on $V$ by Poincare's
inequality.

## Facts & Assumptions

**Given:** Countable Choice and a bounded polyhedral open set
$\Omega\subseteq\mathbb R^d$.

[F1] Real $L^2(\Omega)$ with the integral pairing is a Hilbert space under
Countable Choice ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F2] For $1\le p<\infty$, rational box-step functions form a countable
dense subset of $L^p(\mathbb R^d)$ under Countable Choice
([[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]]).

[F3] $W^{1,2}(\Omega)$ consists of $L^2$ classes with all first weak
derivatives in $L^2$, with norm squared the sum of their squared $L^2$ norms;
$W^{1,2}_0$ is the norm closure of $C_c^\infty(\Omega)$
([[def-sobolev-space-wkp-and-its-norm]],
[[def-wkp-zero-as-a-sobolev-closure]]).

[F4] On a set bounded in one direction, every $v\in W^{1,2}_0$ obeys
$\|v\|_{L^2}\le C_\Omega\|\nabla v\|_{L^2}$
([[thm-poincare-inequality-for-w-one-p-zero]]).

[F5] Zero extension is a well-defined isometry from $L^2(\Omega)$ into
$L^2(\mathbb R^d)$, and $C_c^\infty(\Omega;\mathbb R)$ is dense in
$L^2(\Omega;\mathbb R)$ under Countable Choice
([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]).

[F6] A dense continuous Hilbert inclusion $V\hookrightarrow H$ gives the
canonical evolution triple and dual pairing
([[def-parabolic-evolution-triple-and-energy-space]]).

[A1] Countable Choice supplies the dense-set selections used below and is
required by [F1], [F2] and [F5] ([[def-countable-choice]]).

## Proof
1.1 If $\Omega=\varnothing$, then $V=H=\{0\}$ and the assertions hold. Otherwise choose finite $a<b$ such that $\Omega\subset\{x:a<x_1<b\}$; boundedness permits this. Then [F4] applies to $V$ and gives $\|v\|_H\le C_\Omega\|\nabla v\|_2$. [A1, F1, F4, given, choose]

1.2 The rational box-step family from [F2], restricted to $\Omega$, is countable and dense in $H$: for $h\in H$, extend its class by zero to $\mathbb R^d$ by [F5], approximate there in $L^2$ by [F2], and restrict the approximants back to $\Omega$, which cannot increase the $L^2$ error. Therefore $H$ is separable by the definition in [F1]. Finite products of the resulting countable dense set show that $Z:=H^{d+1}$ is separable; its product inner product makes it a real Hilbert space. [A1, F1, F2, F5, given, construct]

2.1 Map $J:W^{1,2}(\Omega;\mathbb R)\to Z$ by $J(u)=(u,D_1u,\ldots,D_du)$. The norm from [F3] makes $J$ an isometry onto its image. Its image is closed: if $J(u_n)\to(u,g_1,\ldots,g_d)$ in $Z$, then for every $\varphi\in C_c^\infty(\Omega)$ and every $i$, $$\int_\Omega u\,\partial_i\varphi =\lim_n\int_\Omega u_n\,\partial_i\varphi =-\lim_n\int_\Omega D_i u_n\,\varphi =-\int_\Omega g_i\varphi,$$ where each limit follows from Cauchy–Schwarz in $L^2$. Thus $g_i$ is the weak derivative $D_i u$, and the limit lies in the image. A closed subspace of the complete Hilbert space $Z$ is complete in its inherited inner product, so $W^{1,2}(\Omega)$ is Hilbert. [F1, F3, step 1.2, given, algebra]

3.1 By [F3], $V$ is a closed subspace of $W^{1,2}(\Omega)$, hence Hilbert for the inherited Sobolev inner product. From step 1.1, $$\|\nabla v\|_2^2\le\|v\|_{W^{1,2}}^2 =\|v\|_2^2+\|\nabla v\|_2^2 \le(1+C_\Omega^2)\|\nabla v\|_2^2.$$ Thus the gradient norm is equivalent to the inherited Hilbert norm and is also complete; the norm chosen for $V$ in the Statement is the inherited $W^{1,2}$ norm. [F3, step 1.1, step 2.1, algebra]

4.1 Since $W^{1,2}(\Omega)$ is a subspace of the separable metric space $Z$, it is separable. For any point $x$ in a relatively open set, choose $\epsilon>0$ such that $B(x,\epsilon)\cap W^{1,2}$ lies in that set. Choose a center $z$ from a countable dense subset of $Z$ with $\|x-z\|<\epsilon/4$, then a positive rational $r$ with $\|x-z\|<r<\epsilon-\|x-z\|$. The relative balls $B(z,r)\cap W^{1,2}$ form a countable base. By [A1], choose one point from every nonempty base member; these points are dense. Apply the same argument to the subspace $V$. The equivalent gradient norm from step 3.1 induces the same topology, so $V$ is separable in its stated norm. [A1, step 1.2, step 2.1, step 3.1, given, choose]

5.1 By [F5], $C_c^\infty(\Omega;\mathbb R)$ is dense in $H$. It is a subset of $V$ by [F3], so $V$ is dense in $H$. Step 1.1 gives continuity of the inclusion, and injectivity holds because both spaces consist of almost- everywhere classes of the same functions. The defining hypotheses in [F6] now hold, giving the canonical dense inclusion $H\hookrightarrow V^*$ and the claimed evolution triple. [F3, F5, F6, step 1.1, step 4.1, given] ∎
