---
id: cor-regular-finite-principal-series-is-irreducible
kind: corollary
title: "Regular finite principal series are irreducible"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - thm-weyl-stabilizer-controls-principal-series-endomorphisms
  - def-diagonal-torus-characters-and-weyl-action
  - thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
  - thm-schurs-lemma-for-modules
  - def-principal-series-module-for-finite-gl-n
  - cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue
  - cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Masao Oi, Representation Theory of Finite Groups of Lie Type - Proposition 2.7 and its proof (if chi_1 != chi_2 then chi_1 x chi_2 is irreducible), printed pp. 12-13"
      url: "https://masaooi.github.io/DL.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Theorem 5.21 and Example 5.22, printed pp. 45-46"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $n\ge1$, let $q$ be a prime power, put $G=\operatorname{GL}_n(\mathbb F_q)$
with Borel $B$ and diagonal torus $T$, and let $\chi\in\widehat T$ be a
**regular** character, that is, its coordinates $\chi_1,\dots,\chi_n$ are
pairwise distinct ([[def-diagonal-torus-characters-and-weyl-action]]). Then
$W_\chi=1$, $\operatorname{End}_G(I(\chi))=\mathbb C\cdot\operatorname{id}$,
and $I(\chi)$ is an irreducible $\mathbb C[G]$-module of dimension
$$[G:B]=\prod_{i=1}^n\frac{q^i-1}{q-1}$$
([[def-principal-series-module-for-finite-gl-n]]). Conversely, if $\chi$ is not
regular then $W_\chi\ne1$ and $I(\chi)$ is reducible. Hence
$$I(\chi)\text{ is irreducible}\iff W_\chi=1\iff\chi\text{ is regular}.$$
In particular, for fixed $q$ every principal series attached to a regular
character is irreducible, and its isomorphism class depends only on the
$S_n$-orbit of $\chi$. No choice principle is used.

## Facts & Assumptions

**Given:** $G=\operatorname{GL}_n(\mathbb F_q)$ with Borel $B$ and torus $T$, a character $\chi\in\widehat T$, its principal series module $I(\chi)$ with character $c$, and the Weyl stabiliser $W_\chi$.

[F1] The dimension of the endomorphism algebra is $\dim_{\mathbb C}\operatorname{End}_G(I(\chi))=|W_\chi|$, and $W_\chi=1$ exactly for regular $\chi$; moreover $I(\chi)\cong I(w\cdot\chi)$ for every $w\in S_n$ ([[thm-weyl-stabilizer-controls-principal-series-endomorphisms]], [[def-diagonal-torus-characters-and-weyl-action]]).

[F2] Maschke's theorem gives an invariant complement to every submodule of the finite-dimensional complex $G$-module $I(\chi)$. Induction on dimension, splitting a nonzero submodule of least positive dimension at each stage, therefore makes $I(\chi)$ semisimple. In particular, a nonzero proper submodule gives a direct sum decomposition into two nonzero submodules ([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]).

[F3] Schur's lemma: the endomorphism ring of a simple module is a division ring ([[thm-schurs-lemma-for-modules]]). A finite-dimensional complex division algebra equals $\mathbb C$: every endomorphism of a nonzero finite-dimensional complex vector space has an eigenvalue, and an element $T$ of a division algebra with eigenvalue $\lambda$ satisfies $T=\lambda$ ([[cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue]], [[cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals]]).

[F4] The dimension of $I(\chi)$ is $[G:B]=\prod_{i=1}^n(q^i-1)/(q-1)$ ([[def-principal-series-module-for-finite-gl-n]]).



## Proof

**Proof technique:** direct.

1.1 If $\chi$ is regular then $W_\chi=1$ by [F1], so $\dim_{\mathbb C}\operatorname{End}_G(I(\chi))=1$ by [F1], and therefore $\operatorname{End}_G(I(\chi))=\mathbb C\cdot\operatorname{id}$: a one-dimensional complex subspace of the endomorphism algebra containing the nonzero element $\operatorname{id}$. [F1, algebra]

1.2 Conversely assume that $\chi$ is not regular, so $W_\chi\ne1$ by [F1] and $\dim_{\mathbb C}\operatorname{End}_G(I(\chi))=|W_\chi|>1$ by [F1]. If $I(\chi)$ were irreducible, then $\operatorname{End}_G(I(\chi))$ would be a division ring by [F3], and being finite-dimensional over $\mathbb C$ it would equal $\mathbb C\cdot\operatorname{id}$ by the eigenvalue argument of [F3]; its dimension would be $1$, contradicting $|W_\chi|>1$. Hence $I(\chi)$ is not irreducible, and since it is nonzero it has a nonzero proper submodule, that is, it is reducible. [F1, F3, algebra]

2.1 Assume $\chi$ regular. The module $I(\chi)$ is nonzero of dimension $[G:B]\ge1$ by [F4] and semisimple by [F2]. If it were not simple, [F2] would produce a decomposition $I(\chi)=A\oplus B$ with $A,B\ne0$, and the projection onto $A$ along $B$ would be an endomorphism $p$ with $p\ne0$ and $p\ne\operatorname{id}$, so that $p\notin\mathbb C\cdot\operatorname{id}$; this contradicts step 1.1. Hence $I(\chi)$ is irreducible, with endomorphism algebra $\mathbb C\cdot\operatorname{id}$. [F2, F4, step 1.1, algebra]

3.1 Steps 2.1 and 1.2 prove both directions of the equivalence $I(\chi)\text{ irreducible}\iff W_\chi=1$, and $W_\chi=1\iff\chi\text{ regular}$ is the definition of regularity in [F1]; the dimension is [F4], and [F1] also gives $I(\chi)\cong I(w\cdot\chi)$, so the isomorphism class of a regular principal series depends only on the $S_n$-orbit of $\chi$. The argument used Maschke, Schur and the finite-dimensional eigenvalue principle only, so no choice principle is used. [F1, F4, step 2.1, step 1.2] ∎ 
