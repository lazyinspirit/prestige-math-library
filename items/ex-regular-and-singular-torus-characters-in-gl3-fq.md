---
id: ex-regular-and-singular-torus-characters-in-gl3-fq
kind: example
title: "Regular and singular torus characters in GL_3(F_q)"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - cor-regular-finite-principal-series-is-irreducible
  - thm-spherical-principal-series-constituents-of-gl-n-fq
  - cor-constituents-of-general-principal-series-for-finite-gl-n
  - def-diagonal-torus-characters-and-weyl-action
  - def-principal-series-module-for-finite-gl-n
  - thm-hook-length-formula
  - thm-weyl-stabilizer-controls-principal-series-endomorphisms
  - def-tensor-product-of-complex-representations
  - def-axiom-of-choice
  - thm-determinant-multiplicative
  - thm-determinant-of-a-triangular-matrix
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Corollary 11.12 and Example 11.13, printed p. 50"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Theorem 5.21 and Example 5.22, printed pp. 45-46"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
    - title: "Ivan Losev, Lecture 8: Representations of GL_n(F_q) - Section 2.1, PDF pp. 3-4"
      url: "https://ivanloseu.github.io/RT/RT8.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume the Axiom of Choice, used through Tits deformation. Let
$G=\operatorname{GL}_3(\mathbb F_q)$ and let
$\chi=(\chi_1,\chi_2,\chi_3)\in\widehat T$; every principal series has dimension
$[G:B]=(q+1)(q^2+q+1)$. (a) If the three coordinates are pairwise distinct, then
$W_\chi=1$, $\operatorname{End}_G(I(\chi))=\mathbb C$ and $I(\chi)$ is
irreducible. (b) If exactly two coordinates are equal, say
$\chi=(a,a,b)$ with $a\ne b$, then $W_\chi\cong S_2$,
$\dim\operatorname{End}_G(I(\chi))=2$ and $I(\chi)$ has exactly two
non-isomorphic constituents, both of multiplicity $1$, corresponding to the two
tuples $(\lambda^{(1)},\lambda^{(2)})$ with $\lambda^{(1)}\vdash2$,
$\lambda^{(2)}\vdash1$, i.e. to $((2),(1))$ and $((1,1),(1))$, with
multiplicities $f^{(2)}=f^{(1,1)}=1$. (c) If all three coordinates are equal,
$\chi=(a,a,a)$, then $W_\chi=S_3$, $\dim\operatorname{End}_G(I(\chi))=6$, and
$I(\chi)$ has $3$ pairwise non-isomorphic constituents indexed by the partitions
$\lambda\vdash3$, with multiplicities $f^{(3)}=1$, $f^{(2,1)}=2$,
$f^{(1,1,1)}=1$; equivalently
$\operatorname{End}_G(I(\chi))\cong\mathbb C[S_3]$. In cases (b) and (c) the
counting of constituents agrees with the general corollary, and in case (c) it
also agrees with the spherical computation for $I(1)$ twisted by $a\circ\det$.

## Facts & Assumptions

**Given:** The prime power $q$, the group $G=\operatorname{GL}_3(\mathbb F_q)$ with Borel $B$ and diagonal torus $T$, a character $\chi=(\chi_1,\chi_2,\chi_3)\in\widehat T$, the blocks of equal coordinates and the principal series $I(\chi)$.

[F1] $\dim_{\mathbb C}I(\chi)=[G:B]=\prod_{i=1}^3\frac{q^i-1}{q-1}=(q+1)(q^2+q+1)$ ([[def-principal-series-module-for-finite-gl-n]]).

[F2] The stabiliser $W_\chi\le S_3$ is the group of permutations preserving the equal-coordinate blocks, and $\dim_{\mathbb C}\operatorname{End}_G(I(\chi))=|W_\chi|$; for $\chi$ regular $W_\chi=1$ and $I(\chi)$ is irreducible ([[def-diagonal-torus-characters-and-weyl-action]], [[thm-weyl-stabilizer-controls-principal-series-endomorphisms]], [[cor-regular-finite-principal-series-is-irreducible]]).

[F3] For a character with equal-coordinate blocks of sizes $n_1,\dots,n_k$ the constituents of $I(\chi)$ are indexed by tuples $(\lambda^{(1)},\dots,\lambda^{(k)})$ with multiplicities $\prod_rf^{\lambda^{(r)}}$, and $\operatorname{End}_G(I(\chi))\cong\prod M_{\prod_rf^{\lambda^{(r)}}}(\mathbb C)$ ([[cor-constituents-of-general-principal-series-for-finite-gl-n]]).

[F4] The hook-length numbers are $f^{(3)}=1$, $f^{(2,1)}=2$, $f^{(1,1,1)}=1$, $f^{(2)}=f^{(1,1)}=1$ ([[thm-hook-length-formula]]).

[F5] The constituents of the spherical principal series $I(1)$ are indexed by the partitions of $n$ with multiplicities $f^\lambda$ ([[thm-spherical-principal-series-constituents-of-gl-n-fq]]).

[F6] For a $G$-module $V$ and a one-dimensional $G$-module $W$ on which $G$ acts by a character $\psi$, the tensor product $V\otimes W$ carries the diagonal action $g\cdot(v\otimes w)=gv\otimes gw$ ([[def-tensor-product-of-complex-representations]]).

[F7] Assume AC; the partition parametrisation and the Tits isomorphism used below carry AC from the Tits-deformation supplier ([[def-axiom-of-choice]], [[cor-constituents-of-general-principal-series-for-finite-gl-n]]).



## Proof

**Proof technique:** direct.

1.1 By [F1] every principal series of $\operatorname{GL}_3(\mathbb F_q)$ has dimension $[G:B]=(q+1)(q^2+q+1)$. [F1]

1.2 Case (a): if the three coordinates are pairwise distinct, no nontrivial permutation fixes the character, so $W_\chi=1$; by [F2] $\dim\operatorname{End}_G(I(\chi))=1$ and $I(\chi)$ is irreducible. [F2]

1.3 Case (b): if $\chi=(a,a,b)$ with $a\ne b$, the stabiliser is $W_\chi\cong S_2$, so $\dim\operatorname{End}_G(I(\chi))=2$ by [F2]. The equal-coordinate blocks are $n_1=2,n_2=1$, so by [F3] the constituents are indexed by the tuples $(\lambda^{(1)},\lambda^{(2)})$ with $\lambda^{(1)}\vdash2$, $\lambda^{(2)}\vdash1$, and have multiplicities $f^{\lambda^{(1)}}f^{\lambda^{(2)}}$; by [F4] these multiplicities are all $1$, so there are exactly two non-isomorphic constituents, each of multiplicity one, and $\operatorname{End}_G(I(\chi))\cong\mathbb C\oplus\mathbb C$. [F2, F3, F4]

1.4 Put $\psi=a\circ\det$ and let $W=\mathbb C z_0$ with $g z_0=\psi(g)z_0$. Multiplicativity and the triangular determinant formula show that $\psi$ is a character and $\psi|_B$ is the inflation of $(a,a,a)$ ([[thm-determinant-multiplicative]], [[thm-determinant-of-a-triangular-matrix]]). Define $\Phi:I(1)\otimes W\to I(a,a,a)$ by $\Phi(f\otimes z_0)(x)=f(x)\psi(x)^{-1}$. This lands in $I(a,a,a)$ because $f(xb)=f(x)$ and $\psi(xb)=\psi(x)\psi(b)$, and it is $G$-equivariant since $\Phi(g\cdot(f\otimes z_0))(x)=f(g^{-1}x)\psi(g)\psi(x)^{-1}=\Phi(f\otimes z_0)(g^{-1}x)$ by [F6]. Its inverse sends $F$ to $(x\mapsto F(x)\psi(x))\otimes z_0$, whose function is right $B$-invariant. Thus $I(a,a,a)\cong I(1)\otimes(a\circ\det)$. [F6, algebra]

2.1 Case (c): if $\chi=(a,a,a)$, then $W_\chi=S_3$ and $\dim\operatorname{End}_G(I(\chi))=6$ by [F2]; by [F3] the constituents are indexed by the partitions $\lambda\vdash3$ with multiplicities $f^\lambda$, which by [F4] are $1,2,1$ for $(3),(2,1),(1,1,1)$, and $\operatorname{End}_G(I(\chi))\cong\mathbb C\times\operatorname M_2(\mathbb C)\times\mathbb C\cong\mathbb C[S_3]$. Moreover the twist isomorphism of step 1.4 with $\psi=a\circ\det$ gives $I(a,a,a)\cong I(1)\otimes(a\circ\det)$; tensoring with a one-dimensional character preserves dimensions and multiplicities, so the constituent count and multiplicities agree with the spherical computation [F5] after twisting. [F2, F3, F4, F5, step 1.4]

3.1 Steps 1.1, 1.2, 1.3, 1.4 and 2.1 give the dimension, the three cases (a)-(c) with their endomorphism dimensions and constituent multiplicities, and the agreement with the general corollary and with the twisted spherical computation in case (c). AC is carried only from the Tits-deformation supplier in [F7], as declared; all modules are finite-dimensional over $\mathbb C$. [F1, F2, F3, F4, F5, F6, F7] ∎ 