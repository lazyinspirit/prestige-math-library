---
id: ex-trivial-and-steinberg-splitting-on-p1-fq
kind: example
title: "The trivial and Steinberg splitting on P^1(F_q)"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - lem-spherical-principal-series-is-the-flag-permutation-module
  - lem-equal-coordinate-rank-one-principal-series-of-gl2-fq
  - thm-spherical-principal-series-constituents-of-gl-n-fq
  - thm-hook-length-formula
  - ex-two-dimensional-hecke-algebra-for-gl2-fq
  - cor-type-a-finite-hecke-algebra-is-noncanonically-isomorphic-to-csn
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Masao Oi, Representation Theory of Finite Groups of Lie Type - Proposition 2.8 and its proof, printed pp. 12-13"
      url: "https://masaooi.github.io/DL.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Example 5.22, printed p. 46"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
    - title: "Ivan Losev, Lecture 8: Representations of GL_n(F_q) - Corollary 2.4 and Theorem 2.5 for $n=2$, PDF pp. 4-5"
      url: "https://ivanloseu.github.io/RT/RT8.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume the Axiom of Choice, used through Tits deformation. For
$G=\operatorname{GL}_2(\mathbb F_q)$ the spherical principal series is the
permutation module
$\mathbb C[\mathbb P^1(\mathbb F_q)]=\mathbb C[G/B]$ of dimension $q+1$, and it
decomposes as
$$\mathbb C[\mathbb P^1(\mathbb F_q)]\;=\;\mathbf 1\;\oplus\;\operatorname{St},$$
where $\mathbf 1$ is the trivial representation and $\operatorname{St}$ is the
Steinberg representation of dimension $q$; both occur with multiplicity $1$.
Choose the noncanonical hook-length parametrisation so the Hecke character
$T_s\mapsto q$ matches the trivial $S_2$ character and $T_s\mapsto-1$ the sign
character. Under this parametrisation of
[[thm-spherical-principal-series-constituents-of-gl-n-fq]] the trivial
representation corresponds to $\lambda=(2)$ ($f^{(2)}=1$) and
$\operatorname{St}$ to $\lambda=(1,1)$ ($f^{(1,1)}=1$). The standard Hecke
generator $T_s$ acts on $\mathbf 1$ by the scalar $q$ and on $\operatorname{St}$
by the scalar $-1$, matching the two simple $H$-modules of
[[ex-two-dimensional-hecke-algebra-for-gl2-fq]].

## Facts & Assumptions

**Given:** A prime power $q$, the group $G=\operatorname{GL}_2(\mathbb F_q)$ with
Borel $B$ and nontrivial Weyl element $s$, the flag variety
$\mathbb P^1(\mathbb F_q)=G/B$, the spherical principal series $I(1)$ and the
finite Hecke algebra $H=e_B\mathbb C[G]e_B$.

[F1] $I(1)\cong\mathbb C[G/B]=\mathbb C[\mathbb P^1(\mathbb F_q)]$ as
$\mathbb C[G]$-modules, of dimension $q+1$
([[lem-spherical-principal-series-is-the-flag-permutation-module]]).

[F2] For the equal-coordinate character with $a=1$ one has
$I(1)\cong\mathbf 1\oplus\operatorname{St}$ with
$\dim\operatorname{St}=q$ and each constituent of multiplicity one; the standard
intertwiner $B_s$ acts by the scalar $q$ on the one-dimensional constituent and
by $-1$ on $\operatorname{St}$
([[lem-equal-coordinate-rank-one-principal-series-of-gl2-fq]]).

[F3] The constituents of the spherical principal series are indexed by the
partitions $\lambda\vdash n$ with multiplicities $f^\lambda$
([[thm-spherical-principal-series-constituents-of-gl-n-fq]]).

[F4] For $n=2$ the partitions are $(2)$ and $(1,1)$, and the hook-length formula
gives $f^{(2)}=f^{(1,1)}=1$
([[thm-hook-length-formula]]).

[F5] The two-dimensional Hecke algebra $H$ of $\operatorname{GL}_2(\mathbb F_q)$
is isomorphic to $\mathbb C\oplus\mathbb C$ with two simple modules, and the
generator $T_s$ acts by $q$ on one and by $-1$ on the other
([[ex-two-dimensional-hecke-algebra-for-gl2-fq]]).

[F6] Assume AC; the Tits-deformation isomorphism identifies the simple
$H$-modules with those of $\mathbb C[S_2]$, so the partition labels above are
attached through the noncanonical isomorphism
([[def-axiom-of-choice]],
[[cor-type-a-finite-hecke-algebra-is-noncanonically-isomorphic-to-csn]]).



## Proof

**Proof technique:** direct.

1.1 By [F1] the module $\mathbb C[\mathbb P^1(\mathbb F_q)]$ is $I(1)$ of dimension $q+1$. By [F2] it splits as $\mathbf 1\oplus\operatorname{St}$ with $\dim\operatorname{St}=q$, both constituents of multiplicity one, and the standard intertwiner acts by $q$ on $\mathbf 1$ and by $-1$ on $\operatorname{St}$. [F1, F2]

2.1 By [F5] the Hecke algebra $H\cong\mathbb C\oplus\mathbb C$ has exactly two simple modules, and $T_s$ acts on them by the scalars $q$ and $-1$; these match the two constituents of step 1.1 through the identification $\operatorname{End}_G(\mathbb C[G/B])\cong H^{\mathrm{op}}\cong H$. [F5, step 1.1]

3.1 By [F3] the constituents of the spherical principal series are indexed by the partitions $\lambda\vdash2$, namely $(2)$ and $(1,1)$, and by [F4] both occur with multiplicity $f^{(2)}=f^{(1,1)}=1$, agreeing with the multiplicity-one splitting of step 1.1. Under the noncanonical Tits parametrisation we may choose the matching so that the Hecke character $T_s\mapsto q$ labels the trivial constituent $\mathbf 1$ and $T_s\mapsto-1$ labels the sign character, hence $\mathbf 1$ corresponds to $(2)$ and $\operatorname{St}$ to $(1,1)$. [F3, F4, F6, step 1.1, step 2.1]

4.1 Steps 1.1, 2.1 and 3.1 give the splitting $\mathbb C[\mathbb P^1]=\mathbf 1\oplus\operatorname{St}$ with $\dim\operatorname{St}=q$, the multiplicity-one statement, the $T_s$-eigenvalues $q$ and $-1$, and the partition labels under the noncanonical parametrisation. AC is carried only from the Tits-deformation supplier [F6], as declared. [F6, step 1.1, step 2.1, step 3.1] ∎ 