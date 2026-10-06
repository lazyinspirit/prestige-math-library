---
id: ex-q-equals-two-torus-boundary
kind: example
title: "The q=2 torus boundary"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-diagonal-torus-characters-and-weyl-action
  - thm-weyl-stabilizer-controls-principal-series-endomorphisms
  - cor-regular-finite-principal-series-is-irreducible
  - thm-spherical-principal-series-constituents-of-gl-n-fq
  - lem-semisimplicity-and-trace-form-for-the-finite-spherical-hecke-algebra
  - lem-spherical-principal-series-is-the-flag-permutation-module
  - lem-rank-one-hecke-quadratic-relation
  - cor-type-a-finite-hecke-algebra-is-noncanonically-isomorphic-to-csn
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ivan Losev, Lecture 8: Representations of GL_n(F_q) - Sections 2.1 and 2.3 (the spherical case and Tits deformation), PDF pp. 3-5"
      url: "https://ivanloseu.github.io/RT/RT8.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Theorem 5.18 and Example 5.22, printed pp. 45-46"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Section 11.1 and Remark 11.6, printed pp. 45-47"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume the Axiom of Choice, used through Tits deformation. For $q=2$ the
multiplicative group $\mathbb F_2^\times$ is trivial, so the diagonal torus
$T\cong(\mathbb F_2^\times)^n$ is trivial and there is exactly one character
$\chi=1$ of $T$ for every $n$: the regular case is empty for $n\ge2$ (for $n=1$
the unique coordinate is vacuously pairwise distinct), $W_\chi=S_n$ for all $n$,
and every principal series is spherical,
$I(\chi)=I(1)=\mathbb C[G/B]$. The general theorems remain valid:
$\dim\operatorname{End}_G(I(1))=|S_n|=n!$, the constituents are indexed by
partitions $\lambda\vdash n$ with multiplicities $f^\lambda$, and the finite
Hecke algebra $H_q(n)$ at $q=2$ is semisimple by
[[lem-semisimplicity-and-trace-form-for-the-finite-spherical-hecke-algebra]],
so Tits deformation still identifies it with $\mathbb C[S_n]$. Its generators
also satisfy $T_i^2=T_i+2$, with distinct roots $2$ and $-1$. The boundary
phenomenon is the collapse of the parametrising torus and of the Weyl action,
not a failure of the constituent description.

## Facts & Assumptions

**Given:** The prime power $q=2$, the group $G=\operatorname{GL}_n(\mathbb F_2)$ with Borel $B$ and diagonal torus $T$, its character group $\widehat T$, the Weyl group $W=S_n$ with its action on $\widehat T$, and the spherical principal series $I(1)$.

[F1] For $q=2$ the group $\mathbb F_2^\times$ is trivial, so $T\cong(\mathbb F_2^\times)^n$ is trivial and $\widehat T=\{1\}$; the Weyl action is trivial and $W_\chi=S_n$ for the unique character, while the regular case consists of characters whose coordinates are pairwise distinct ([[def-diagonal-torus-characters-and-weyl-action]]).

[F2] $I(1)\cong\mathbb C[G/B]$, the permutation module on the complete flags ([[lem-spherical-principal-series-is-the-flag-permutation-module]]).

[F3] $\dim_{\mathbb C}\operatorname{End}_G(I(\chi))=|W_\chi|$, so for the unique character this dimension is $n!$ ([[thm-weyl-stabilizer-controls-principal-series-endomorphisms]]).

[F4] The constituents of the spherical principal series are indexed by the partitions $\lambda\vdash n$ with multiplicities $f^\lambda$, the numbers of standard tableaux ([[thm-spherical-principal-series-constituents-of-gl-n-fq]]).

[F5] The finite Hecke algebra $H_q(n)$ is semisimple, with quadratic relation $T_{s_i}^2=(q-1)T_{s_i}+q\,1$; at $q=2$ this is $T_{s_i}^2=T_{s_i}+2$, whose two roots $2$ and $-1$ are distinct ([[lem-semisimplicity-and-trace-form-for-the-finite-spherical-hecke-algebra]], [[lem-rank-one-hecke-quadratic-relation]]).

[F6] Assume AC; Tits deformation identifies $H_q(n)$ with $\mathbb C[S_n]$ for every prime power $q$, hence also for $q=2$ ([[cor-type-a-finite-hecke-algebra-is-noncanonically-isomorphic-to-csn]], [[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 For $q=2$ the group $\mathbb F_2^\times=\{1\}$ is trivial, so the diagonal torus $T\cong(\mathbb F_2^\times)^n$ is the trivial group and its character group has the single element $1$; the Weyl action fixes it, so $W_1=S_n$, and every principal series is $I(1)$. A regular character would need pairwise distinct coordinates, impossible in a one-element group when $n\ge2$; for $n=1$ the single coordinate is vacuously pairwise distinct. [F1, F2]

1.2 Since the unique character is fixed by $W$, [F3] gives $\dim_{\mathbb C}\operatorname{End}_G(I(1))=n!$, and [F4] gives the constituent indexing by partitions with multiplicities $f^\lambda$. [F3, F4]

1.3 By [F5] the Hecke algebra is semisimple with quadratic relation $T_{s_i}^2=T_{s_i}+2$ at $q=2$, and the two roots $2\ne-1$ are distinct; by [F6] Tits deformation identifies it with $\mathbb C[S_n]$ in this case as in every other. Hence the collapse of $\widehat T$ to a point and of the Weyl action to the trivial action is a genuine boundary phenomenon of the parametrising torus, while the endomorphism algebra, the constituent multiplicities and the Tits isomorphism retain their general form. [F5, F6]

2.1 Steps 1.1-1.3 establish the two boundary statements: the torus and the regular characters collapse, whereas the endomorphism algebra, the partition parametrisation with multiplicities $f^\lambda$ and the Tits isomorphism to $\mathbb C[S_n]$ remain valid. AC is carried only from the Tits-deformation supplier [F6], as declared. [F1, F2, F3, F4, F5, F6] ∎ 