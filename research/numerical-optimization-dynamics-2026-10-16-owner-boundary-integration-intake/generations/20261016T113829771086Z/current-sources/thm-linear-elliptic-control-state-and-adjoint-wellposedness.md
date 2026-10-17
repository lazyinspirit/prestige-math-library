---
id: thm-linear-elliptic-control-state-and-adjoint-wellposedness
kind: theorem
title: Well-posedness of elliptic control state and adjoint equations
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - def-countable-choice
  - def-linear-elliptic-pde-constrained-control-problem
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - lem-weak-derivatives-are-unique-almost-everywhere
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-lax-milgram
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Hannes Meinlschmidt, Optimization with Partial Differential Equations, FAU lecture notes
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
      locator: "§§2–3, printed pp. 5–25: weak state equations, existence, and adjoint optimality framework."
---

## Statement

Assume Countable Choice and the setting of [[def-linear-elliptic-pde-constrained-control-problem]]. For every $q\in U$, there is a unique state $u(q)\in V$ satisfying
$$
a(u(q),v)=\langle f+Bq,v\rangle\qquad(v\in V),
$$
and
$$
\|u(q)\|_V\le \beta^{-1}\|f+Bq\|_{V^*}.
$$
For every $q\in U$, there is also a unique adjoint $p(q)\in V$ satisfying
$$
a(v,p(q))=(Ju(q)-u_d,Jv)_H\qquad(v\in V),
$$
with
$$
\|p(q)\|_V\le \beta^{-1}\|J\|\,\|Ju(q)-u_d\|_H.
$$

## Facts & Assumptions
**Given:** Countable Choice, the normed spaces and data of [[def-linear-elliptic-pde-constrained-control-problem]], and the bounded real bilinear form and operator in that definition.

[F1] The form satisfies $|a(v,w)|\le M\|v\|_V\|w\|_V$ and $a(v,v)\ge\beta\|v\|_V^2$; symmetry is not assumed ([[def-linear-elliptic-pde-constrained-control-problem]], [[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F2] Lax–Milgram under Countable Choice gives a unique $w$ for every bounded linear functional $F$ with $a(w,v)=F(v)$ and $\|w\|_V\le\|F\|_{V^*}/\beta$ ([[thm-lax-milgram]], [[def-countable-choice]]).

[F3] Under Countable Choice, real $L^2(\Omega)$ with its integral inner product is a Hilbert space ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F4] $W^{1,2}(\Omega;\mathbb R)$ uses the norm with components $v,D_1v,\ldots,D_dv$ and the weak-derivative test identity; $H^1_0(\Omega)$ is its closed norm closure of $C_c^\infty(\Omega)$ ([[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]]). A weak derivative value is unique as an almost-everywhere class under Countable Choice ([[lem-weak-derivatives-are-unique-almost-everywhere]]).

[F5] Compactly supported smooth tests and their first derivatives are in $L^2(\Omega)$ because $\Omega$ is bounded and bounded Lebesgue measurable sets have finite measure. Every $L^2$ class is locally integrable by Cauchy–Schwarz on compact subsets, and the $L^2$ inner product obeys Cauchy–Schwarz ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], [[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

1.1 The weak-derivative test identities are linear, and [F4] makes each derivative coordinate intrinsic, so $W^{1,2}(\Omega;\mathbb R)$ is a vector space with the inner product induced from $L^2(\Omega)^{d+1}$; it induces the displayed full Sobolev norm and is definite because its zeroth coordinate is $v$. Let $(v_n)$ be Cauchy in this norm. Its function coordinates and each of its finitely many weak-derivative coordinates are Cauchy in $L^2(\Omega)$ because each coordinate norm is bounded by the full $W^{1,2}$ norm. By [F3], there are $v,g_1,\ldots,g_d\in L^2(\Omega)$ with $v_n\to v$ and $D_i v_n\to g_i$ in $L^2$ for each $i$. [F3, F4, given, construct, algebra]

2.1 For every $\varphi\in C_c^\infty(\Omega)$ and $i$, the weak-derivative identity for $v_n$ is $\int_\Omega v_nD_i\varphi=-\int_\Omega (D_i v_n)\varphi$. By [F5], both test functions are in $L^2$; Cauchy–Schwarz lets both integrals pass to the limits in [F3], giving $\int_\Omega vD_i\varphi=-\int_\Omega g_i\varphi$. Thus each $g_i$ is a weak derivative of $v$. By uniqueness in [F4], $D_i v=g_i$ as an $L^2$ class, and the component convergences from step 1.1 give $v_n\to v$ in the full $W^{1,2}$ norm. Hence $W^{1,2}(\Omega;\mathbb R)$ is complete. [F3, F4, F5, step 1.1, algebra]

3.1 By [F4], $V=H^1_0(\Omega;\mathbb R)$ is the closure of the linear space $C_c^\infty(\Omega;\mathbb R)$ in $W^{1,2}$. It is therefore a closed linear subspace of that complete space, and the inherited inner product is exactly the one in [[def-linear-elliptic-pde-constrained-control-problem]]. Thus $V$ is a real Hilbert space under Countable Choice. [F4, step 2.1, given]

4.1 For fixed $q$, the functional $F_q(v)=\langle f+Bq,v\rangle$ is bounded and linear, with $\|F_q\|_{V^*}\le\|f+Bq\|_{V^*}$. Applying [F2] to $a$ and $F_q$ now gives the unique state and the stated bound. [F1, F2, step 3.1, given]

5.1 Define the adjoint form $a^*(p,v):=a(v,p)$. It is bounded with the same constant $M$, and $a^*(p,p)=a(p,p)\ge\beta\|p\|_V^2$, so it is coercive with the same $\beta$. The functional $G_q(v)=(Ju(q)-u_d,Jv)_H$ is bounded by $\|J\|\|Ju(q)-u_d\|_H\|v\|_V$. Apply [F2] to $a^*$ and $G_q$; the result is the unique $p(q)$ with $a(v,p(q))=G_q(v)$ and the stated bound. No symmetry of $a$ is used. [F1, F2, step 4.1, given, algebra]

6.1 Steps 1.1, 2.1, and 3.1 establish the real Hilbert structure required by [F2] using Countable Choice through the real $L^2$ completeness result [F3]. Steps 4.1 and 5.1 give the state, adjoint, uniqueness, and both estimates. [F2, F3, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎

