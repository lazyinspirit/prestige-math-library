---
id: thm-spherical-principal-series-constituents-of-gl-n-fq
kind: theorem
title: "The constituents of the spherical principal series of GL_n"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - lem-spherical-principal-series-is-the-flag-permutation-module
  - thm-finite-hecke-algebra-as-convolution-corner-and-endomorphisms
  - cor-type-a-finite-hecke-algebra-is-noncanonically-isomorphic-to-csn
  - lem-constituent-multiplicities-under-a-semisimple-endomorphism-algebra
  - thm-complex-irreducibles-of-symmetric-groups-are-specht-modules
  - thm-hook-length-formula
  - thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
  - def-partition-young-diagram-and-conjugate-partition
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jay Taylor, Finite Reductive Groups - Theorem 5.21 and Example 5.22 (the bijection $\\operatorname{Irr}(W^F)\\to\\operatorname{Irr}(G\\mid R_T^G(M))$ with multiplicities $\\langle R_T^G(M),M_r\\rangle=\\dim r$; the $GL_n$ case indexed by partitions with multiplicities computed by the hook-length formula), printed pp. 45-46"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
    - title: "Ivan Losev, Lecture 8: Representations of GL_n(F_q) - Section 2.1 (summands of $\\mathbb C[B\\backslash G]$ and $\\operatorname{End}_G$), PDF pp. 3-4"
      url: "https://ivanloseu.github.io/RT/RT8.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Theorem 10.11 and Corollary 11.12 (parametrisation of a Harish-Chandra series), printed pp. 45 and 50"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice, used through Tits deformation. Let
$G=\operatorname{GL}_n(\mathbb F_q)$ and let $\mathbb C[G/B]$ be the permutation
module on the complete flags. The set of isomorphism classes of simple
constituents of $\mathbb C[G/B]$ is in bijection with the set
$\{\lambda:\lambda\vdash n\}$ of partitions of $n$: the bijection is the
composite of the endomorphism-algebra parametrisation of
[[lem-constituent-multiplicities-under-a-semisimple-endomorphism-algebra]], the
Tits isomorphism
$\operatorname{End}_G(\mathbb C[G/B])\cong\mathbb C[S_n]$ of
[[cor-type-a-finite-hecke-algebra-is-noncanonically-isomorphic-to-csn]] and the
classification of the irreducible $\mathbb C[S_n]$-modules by partitions. Write
$V_\lambda$ for the simple $\mathbb C[G]$-module attached to $\lambda$ by that
bijection. Then
$$\mathbb C[G/B]\;\cong\;\bigoplus_{\lambda\vdash n}V_\lambda^{\oplus f^\lambda},$$
where $f^\lambda=\dim_{\mathbb C}S^\lambda$ is the number of standard
$\lambda$-tableaux, and the multiplicities satisfy
$$\dim_{\mathbb C}\operatorname{Hom}_G\bigl(V_\lambda,\mathbb C[G/B]\bigr)=f^\lambda,\qquad \operatorname{End}_G\bigl(\mathbb C[G/B]\bigr)\cong\prod_{\lambda\vdash n}\operatorname M_{f^\lambda}(\mathbb C).$$
Equivalently, the constituents of the spherical principal series $I(1)$ are
indexed by the partitions of $n$ and the constituent indexed by $\lambda$ occurs
with multiplicity $f^\lambda$.

## Facts & Assumptions

**Given:** $G=\operatorname{GL}_n(\mathbb F_q)$ with Borel $B$, the permutation
module $M:=\mathbb C[G/B]$ on the complete flags, the spherical principal series
$I(1)$, the finite Hecke algebra $H=e_B\mathbb C[G]e_B$ and the symmetric group
$S_n$ with its partition-indexed Specht modules $S^\lambda$.

[F1] $I(1)\cong\mathbb C[G/B]$ as $\mathbb C[G]$-modules
([[lem-spherical-principal-series-is-the-flag-permutation-module]]).

[F2] Right multiplication identifies
$H\cong\operatorname{End}_{\mathbb C[G]}(\mathbb C[G]e_B)^{\mathrm{op}}\cong\operatorname{End}_G(\mathbb C[G/B])^{\mathrm{op}}$,
and $H\cong H^{\mathrm{op}}$
([[thm-finite-hecke-algebra-as-convolution-corner-and-endomorphisms]]).

[F3] Assume AC; the Tits-deformation isomorphism gives
$H\cong\mathbb C[S_n]$, preserving the number and dimensions of simple modules
([[cor-type-a-finite-hecke-algebra-is-noncanonically-isomorphic-to-csn]],
[[def-axiom-of-choice]]).

[F4] For a finite-dimensional semisimple $\mathbb C$-algebra $A$ and a
finite-dimensional semisimple $A$-module $M$ with
$M\cong\bigoplus_iV_i^{\oplus m_i}$ over pairwise non-isomorphic simples $V_i$,
the algebra $E=\operatorname{End}_A(M)$ is semisimple with
$E\cong\prod_i\operatorname M_{m_i}(\mathbb C)$; the simple $E$-modules are the
spaces $\operatorname{Hom}_A(V_i,M)$ of dimension $m_i$, and they form a
complete set of simple isomorphism classes
([[lem-constituent-multiplicities-under-a-semisimple-endomorphism-algebra]]).

[F5] The simple $\mathbb C[S_n]$-modules are exactly the Specht modules
$S^\lambda$, $\lambda\vdash n$, pairwise non-isomorphic
([[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]],
[[def-partition-young-diagram-and-conjugate-partition]]).

[F6] $\dim_{\mathbb C}S^\lambda=f^\lambda$, the number of standard
$\lambda$-tableaux, by the hook-length formula
([[thm-hook-length-formula]]).

[F7] Every finite-dimensional complex representation of the finite group $G$ is
semisimple, since $\operatorname{char}\mathbb C=0\nmid|G|$
([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]).



## Proof

**Proof technique:** direct.

1.1 By [F7] the $\mathbb C[G]$-module $M=\mathbb C[G/B]$ is semisimple, and by [F1] it is the spherical principal series $I(1)$. Put $E:=\operatorname{End}_G(M)$; by [F2] $E\cong H^{\mathrm{op}}\cong H$, a finite-dimensional semisimple algebra by the finite Hecke algebra theorem. Applying [F4] to $M$ over $A=\mathbb C[G]$, the simple constituents $V_i$ of $M$ are in bijection with the simple $E$-modules $\operatorname{Hom}_G(V_i,M)$, each of dimension equal to the multiplicity $m_i$ of $V_i$ in $M$. [F1, F2, F4, F7]

2.1 By [F3] there is an isomorphism $E\cong\mathbb C[S_n]$ preserving the number and dimensions of simple modules. By [F5] the simple $\mathbb C[S_n]$-modules are the Specht modules $S^\lambda$, $\lambda\vdash n$, and by [F6] $\dim_{\mathbb C}S^\lambda=f^\lambda$. Transporting along $E\cong\mathbb C[S_n]$, the simple constituents of $M$ are therefore indexed by the partitions $\lambda\vdash n$: define $V_\lambda$ as the constituent corresponding to $S^\lambda$ under the transport. Its multiplicity in $M$ equals $\dim_{\mathbb C}S^\lambda=f^\lambda$ by step 1.1, and $\dim_{\mathbb C}\operatorname{Hom}_G(V_\lambda,M)=f^\lambda$. [F3, F5, F6, step 1.1]

3.1 Assembling steps 1.1 and 2.1, $M$ is the direct sum of its constituents with multiplicities $f^\lambda$, that is $M\cong\bigoplus_{\lambda\vdash n}V_\lambda^{\oplus f^\lambda}$; by [F4] the endomorphism algebra is $E\cong\prod_{\lambda\vdash n}\operatorname M_{f^\lambda}(\mathbb C)$, agreeing with the transport in step 2.1. This is the stated description of the constituents of the spherical principal series. [F4, step 1.1, step 2.1]

4.1 Steps 1.1, 2.1 and 3.1 give the bijection, the multiplicities and the endomorphism algebra. AC is carried only from the Tits-deformation supplier [F3], as declared; the remaining arguments use Maschke's theorem and finite-dimensional semisimple module theory over $\mathbb C$. [F3, F4, step 1.1, step 2.1, step 3.1] ∎ 