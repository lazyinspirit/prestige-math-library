---
id: ex-cg-dihedral-gram-determinants-and-low-rank-coincidences
kind: example
title: "Dihedral diagrams $I_2(m)$: Gram determinants, the infinite case, and the low-rank coincidences"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 15
deps: [thm-cg-finite-type-positive-definite-criterion, thm-cg-finite-coxeter-classification-including-h-and-dihedral, def-cg-coxeter-diagram-components-and-finite-type, def-cg-real-coxeter-form-and-reflection, lem-cg-reflection-form-invariance-and-rank-two-orders, def-hh-coxeter-matrix-word-group-and-length, thm-quarter-turn-values-and-shift-formulas, def-sine-and-cosine-by-power-series, def-pi-via-first-positive-cosine-zero, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, def-definiteness-inertia-and-signature-data-over-the-reals, thm-external-direct-product-is-a-group, def-external-direct-product-of-groups, thm-cg-root-length-criterion-and-faithfulness, lem-cg-reflection-representation-descends-and-root-norms, thm-sylvesters-criterion-for-positive-definiteness, lem-cg-diagram-products-and-invariant-form-comparison]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix C.2 (printed p. 435): det A = sin^2(pi/m) > 0 for I_2(m); Table C.1 (printed p. 436) for doubled determinants; Example 3.5.2 (printed p. 42) for the rank-two diagram conventions. The low-rank naming coincidences are in the Michel reference below."
    - title: "Jean Michel, Lectures on Coxeter groups (Beijing lecture notes, April-May 2014)"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf"
      locator: "Classification preview, printed p. 3, and the cosine table in the proof of Theorem 5.15, printed p. 13: I2(2) = A1 x A1, I2(3) = A2, I2(4) = B2, I2(6) = G2 (the finite Weyl types)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $S=\{s,t\}$ with $m(s,t)=r\in\{3,4,\dots\}\cup\{\infty\}$ and
$m(s,s)=m(t,t)=1$; let $W$ be the presented group
([[def-hh-coxeter-matrix-word-group-and-length]]), $B$ the Coxeter form on
$V=\mathbb R^S$ ([[def-cg-real-coxeter-form-and-reflection]]) and $\Gamma$ its
diagram ([[def-cg-coxeter-diagram-components-and-finite-type]]).

**(i) The diagram and the matrix.** $\Gamma$ is the single edge $st$ labelled
$r$, and the matrix of $B$ in the basis $(e_s,e_t)$ is
$\begin{pmatrix}1&-c\\-c&1\end{pmatrix}$ with $c=\cos(\pi/r)$ for finite $r$ and
$c=1$ for $r=\infty$.

**(ii) Finite case.** For finite $r$ one has $\det B=\sin^2(\pi/r)>0$ and the
$1\times1$ principal minors are $1$, so $B$ is positive definite and $W$ is
finite; it is the dihedral group $I_2(r)$ of order $2r$, and the canonical
product $\rho(s)\rho(t)$ has exact order $r$ on $V$
([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (3)(iv),
[[thm-cg-finite-type-positive-definite-criterion]]).

**(iii) Infinite case.** For $r=\infty$ one has $\det B=0$ and the kernel vector
$u=e_s+e_t$ satisfies $B(u,u)=0$; hence $B$ is not positive definite and $W$ is
infinite, namely the infinite dihedral group.

**(iv) Low-rank coincidences and products.** As Coxeter systems $I_2(3)=A_2$,
$I_2(4)=B_2=C_2$, $I_2(6)=G_2$, $I_2(2)=A_1\times A_1$ (no edge for $m=2$),
$I_2(5)=H_2$, and $A_1=B_1$ is the one-vertex diagram; these are the only
overlaps among the rank-two families, and in the classification
[[thm-cg-finite-coxeter-classification-including-h-and-dihedral]] they appear
under both names. The one-vertex diagram $A_1$ has $B=(1)$ positive definite and
$W\cong\mathbb Z/2$; the disconnected two-vertex diagram $A_1\times A_1$ is the
direct product of two such groups, of order $4$
([[def-external-direct-product-of-groups]],
[[thm-external-direct-product-is-a-group]]).

## Facts & Assumptions

**Given:** $S=\{s,t\}$, a Coxeter matrix with $m(s,t)=r$ and $m(s,s)=m(t,t)=1$, the presented group $W$ with canonical homomorphism $\rho$, the space $V=\mathbb R^S$ with Coxeter form $B$, and the diagram $\Gamma$; write $c:=\cos(\pi/r)$ for finite $r$.

[F1] In a diagram with two distinct vertices $s,t$, an edge is drawn exactly when $m(s,t)\ge3$ and it carries the label $m(s,t)$; when $m(s,t)=2$ no edge is drawn, and the subdiagram on a single vertex is the one-vertex diagram ([[def-cg-coxeter-diagram-components-and-finite-type]]).

[F2] $B(e_s,e_s)=B(e_t,e_t)=1$, $B(e_s,e_t)=-\cos(\pi/r)$ for finite $r$ and $B(e_s,e_t)=-1$ for $r=\infty$; more generally $m(s,t)$ is the order of $st$ in $W$ ([[def-cg-real-coxeter-form-and-reflection]], [[def-hh-coxeter-matrix-word-group-and-length]]).

[F3] The reflection $r_a$ is linear and an involution, fixes $\ker B(-,a)$ pointwise, and $B(r_au,r_aw)=B(u,w)$; on the plane $P=\mathbb Re_s+\mathbb Re_t$ the product $r_sr_t$ has exact order $m(s,t)$ for finite $m(s,t)$, fixing $P^\perp$ pointwise, while for $m(s,t)=\infty$ it is $\mathrm{id}+N$ on $P$ with $N\ne0$, $N^2=0$, so it has infinite order ([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2),(3)(ii),(3)(iv)).

[F4] $\rho:W\to\mathrm{GL}(V)$ is a homomorphism with $\rho(s)=r_{e_s}$; it is injective ([[thm-cg-root-length-criterion-and-faithfulness]] (3), [[lem-cg-reflection-representation-descends-and-root-norms]]).

[F5] $W$ is finite if and only if $B$ is positive definite; a symmetric matrix is positive definite if and only if all its leading principal minors are positive; the form is positive definite when its quadratic form is $>0$ on every nonzero vector, so a nonzero $u$ with $B(u,u)\le0$ excludes positive definiteness ([[thm-cg-finite-type-positive-definite-criterion]], [[thm-sylvesters-criterion-for-positive-definiteness]], [[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F6] $\cos(\pi/2)=0$; $\sin^2x+\cos^2x=1$ and $\sin x>0$ for $0<x<\pi$; $\sin^2(\pi/r)>0$ for every finite Coxeter label $r\ge3$ ([[thm-quarter-turn-values-and-shift-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[def-sine-and-cosine-by-power-series]], [[def-pi-via-first-positive-cosine-zero]], [[thm-sine-cosine-signs-monotonicity-and-ranges]]); sine positivity also follows from the positive rank-two quadratic coefficient in [F3].

[F7] An external direct product $G\times H$ is a group and is finite exactly when both factors are, with $|G\times H|=|G|\,|H|$; for a disconnected diagram the group is the direct product of the standard parabolics of its components ([[def-external-direct-product-of-groups]], [[thm-external-direct-product-is-a-group]], [[lem-cg-diagram-products-and-invariant-form-comparison]] (1)).

## Verification

1.1 (The matrix, the finite determinant and the infinite kernel vector.) Since $m(s,t)=r\ge3$, or $r=\infty$, the diagram $\Gamma$ is the single edge $st$ labelled $r$ [F1], and in the basis $(e_s,e_t)$ the matrix of $B$ is $\begin{pmatrix}1&-c\\-c&1\end{pmatrix}$ with $c=\cos(\pi/r)$ for finite $r$ and $c=1$ for $r=\infty$ [F2]; this is (i). Its determinant is $1-c^2$. For finite $r$ the Pythagorean identity gives $1-c^2=\sin^2(\pi/r)$, which is positive because $0<\pi/r\le\pi/3<\pi$ [F6]; the $1\times1$ principal minors are the diagonal entries $1>0$. For $r=\infty$ we have $c=1$ and $\det B=0$, while $u=e_s+e_t\ne0$ satisfies $B(u,u)=1+1-2\cdot1\cdot1=0$ [F2]; by [F5] the form is not positive definite, giving (iii) for the form. [F2, F3, F5, F6, algebra]

2.1 (Finite case: positive definiteness, order $2r$.) Let $r<\infty$. The leading principal minors of $B$ are $1$ and $1-c^2=\sin^2(\pi/r)>0$ by 1.1 [step 1.1], so $B$ is positive definite by [F5] and $W$ is finite by the criterion [F5]. By [F3] the product $\rho(s)\rho(t)=r_{e_s}r_{e_t}$ acts on $P=\mathbb Re_s+\mathbb Re_t$ as a rotation of exact order $r$ and fixes $P^\perp$ pointwise, so $\rho(s)\rho(t)$ has exact order $r$ on $V$. Put $A:=\rho(s)\rho(t)=\rho(st)$, of exact order $r$; every element of $W$ is of the form $A_0^k$ or $sA_0^k$ with $A_0:=st\in W$ and $k\in\mathbb Z$, because every alternating word in the two involutions is a power of $st$ possibly preceded by $s$. Hence $\rho(W)=\{A^k,\ \rho(s)A^k:0\le k<r\}$: the $A^k$ are distinct because $A$ has exact order $r$, the $\rho(s)A^k$ are distinct for the same reason, and $A^k\ne\rho(s)A^l$ because $\det A^k=1$ while $\det(\rho(s)A^l)=-1$; so $|\rho(W)|=2r$ and injectivity of $\rho$ [F4] gives $|W|=2r$, $W$ being the dihedral group $I_2(r)$. For $r=\infty$ the same factorisation with $\rho(s)\rho(t)$ of infinite order [F3] exhibits infinitely many distinct elements and $W$ is the infinite dihedral group, completing (ii) and (iii). [F3, F4, F5, step 1.1, algebra]

3.1 (The low-rank coincidences and the products (iv).) Reading the labelled graphs: $I_2(3)$ is a single edge labelled $3$, which is the one-edge path $A_2$; $I_2(4)$ is a single edge labelled $4$, which is $B_2$, also written $C_2$; $I_2(6)$ is a single edge labelled $6$, conventionally $G_2$; $m(s,t)=2$ draws no edge [F1], so the two-vertex diagram with $m=2$ is the disconnected diagram $A_1\times A_1$, which is the direct product of two one-vertex groups by the component statement [F7]; and $I_2(5)=H_2$ by the rank-two naming convention. The one-vertex diagram $A_1$ has $B=(1)$, which is positive definite [F5], and presentation $\langle s\mid s^2=1\rangle$, so $W\cong\mathbb Z/2$; the disconnected two-vertex diagram has group $(\mathbb Z/2)\times(\mathbb Z/2)$, of order $2\cdot2=4$ [F7]. These coincidences and the group orders are (iv), and the group $I_2(r)$ of 2.1 [step 2.1] is the dihedral group appearing under both names in the classification. [F1, F5, F7, step 2.1, algebra] ∎
