---
id: lem-spherical-principal-series-is-the-flag-permutation-module
kind: lemma
title: "The spherical principal series is the flag permutation module"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-principal-series-module-for-finite-gl-n
  - thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets
  - thm-complete-flags-form-gl-n-over-b
  - def-coset
  - def-group-action
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jay Taylor, Finite Reductive Groups - Exercise 5.10 (Ind_B^G(M) is the Harish-Chandra induction R_T^G(M_0)), printed p. 44"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
    - title: "Masao Oi, Representation Theory of Finite Groups of Lie Type - Section 2.3 (the spherical principal series for GL_2), printed pp. 12-13"
      url: "https://masaooi.github.io/DL.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $1\in\widehat T$ be the trivial character and let
$G=\operatorname{GL}_n(\mathbb F_q)$ with Borel $B=T\ltimes U$. Then
$$I(1)=R_T^G(1)=\operatorname{Ind}_B^G(1)$$
([[def-principal-series-module-for-finite-gl-n]]) is isomorphic, as a complex
$G$-module, to the permutation module $\mathbb C[G/B]$ on the left cosets of $B$
([[def-coset]], [[def-group-action]]), and hence, under the $G$-equivariant
bijection $G/B\to\{\text{complete flags}\}$, $gB\mapsto gV_\bullet$, to the
permutation module on the complete flags of $\mathbb F_q^n$
([[thm-complete-flags-form-gl-n-over-b]]): the induced module corresponds to the
module of complex functions on complete flags with $G$ acting by translation. In
particular
$$\dim_{\mathbb C}I(1)=[G:B]=\#\{\text{complete flags}\}=\prod_{i=1}^n\frac{q^i-1}{q-1}.$$
No choice principle is used.

## Facts & Assumptions

**Given:** $G=\operatorname{GL}_n(\mathbb F_q)$ with Borel $B=T\ltimes U$, the trivial character $1$ of $T$, and the principal series module $I(1)=R_T^G(1)$.

[F1] Inflating the trivial character of $T$ to $B$ gives the trivial character of $B$, so $I(1)=\operatorname{Ind}_B^G(1)$; the module $I(1)$ has dimension $[G:B]=\prod_{i=1}^n(q^i-1)/(q-1)$, the number of complete flags ([[def-principal-series-module-for-finite-gl-n]]).

[F2] Inducing the trivial complex representation of a subgroup $H$ of a finite group $G$ gives the permutation representation on the left coset set $G/H$ ([[thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets]]).

[F3] The map $gB\mapsto gV_\bullet$ is a $G$-equivariant bijection from $G/B$ onto the set of complete flags of $\mathbb F_q^n$ ([[thm-complete-flags-form-gl-n-over-b]]).

## Proof

**Proof technique:** direct.

1.1 The trivial character of $T$ is fixed by inflation, so $\operatorname{Inf}_T^B1=1$ and therefore $I(1)=R_T^G(1)=\operatorname{Ind}_B^G(1)$ by definition of $I(1)$. [F1]

1.2 By the permutation description of induction of the trivial representation, the complex $G$-module $\operatorname{Ind}_B^G(1)$ is the permutation module on the left cosets $G/B$. [F2]

2.1 Composing the isomorphism of step 1.2 with the $G$-equivariant bijection of [F3] identifies $I(1)$ with the module of complex functions on the complete flags of $\mathbb F_q^n$ on which $G$ acts by translation: an equivariant bijection of $G$-sets induces an isomorphism of permutation modules by transporting a function $\varphi$ to $\varphi\circ\beta$, where $\beta:G/B\to\{\text{complete flags}\}$ is the bijection. Since $\beta$ identifies the $B$-cosets with the flags, this transport preserves the action. The dimension is $\dim_{\mathbb C}I(1)=[G:B]$ by [F1], and $[G:B]$ equals the number of complete flags because of the same bijection; the product formula is the one recorded in [F1]. [F1, F3, step 1.1, step 1.2]

3.1 Steps 1.1 and 1.2 give the isomorphism $I(1)\cong\mathbb C[G/B]$, step 2.1 transports it to the flag module and computes the dimension; the trivial character, the induction and the bijection are canonical, and no selection of coset representatives is made, so no choice principle is used. [step 1.1, step 1.2, step 2.1] ∎ 