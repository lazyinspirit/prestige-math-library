---
id: ex-cg-bn-and-cn-are-the-same-coxeter-diagram
kind: example
title: "$B_n$ and $C_n$ define the same Coxeter diagram and the same Coxeter group"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 15
deps: [thm-laplace-cofactor-expansion, thm-double-angle-and-power-reduction-identities, thm-sine-cosine-signs-monotonicity-and-ranges, thm-cg-finite-coxeter-classification-including-h-and-dihedral, thm-cg-finite-type-positive-definite-criterion, def-cg-coxeter-diagram-components-and-finite-type, def-cg-real-coxeter-form-and-reflection, lem-cg-reflection-form-invariance-and-rank-two-orders, thm-sylvesters-criterion-for-positive-definiteness, thm-quarter-turn-values-and-shift-formulas, def-graph-isomorphism-and-complement, def-definiteness-inertia-and-signature-data-over-the-reals, lem-cg-positive-definite-diagram-exclusions, lem-viete-finite-cosine-product-and-nested-radicals, cor-trigonometric-parity-and-pythagorean-identity, def-matrix-minors-cofactors-and-adjugate, thm-determinant-is-the-unique-normalized-alternating-multilinear-function, thm-induction-principle, def-natural-numbers, thm-hh-parabolic-minimal-representatives-and-length-additivity]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jean Michel, Lectures on Coxeter groups (Beijing lecture notes, April-May 2014)"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf"
      locator: "Classification preview, printed p. 3: 'Bn/Cn : n vertices, n >= 2'; proof of Theorem 5.15, printed p. 13: det C(Bn) = 2; the preview's remark that A, B, D, E, F, G types are the Weyl groups with I2(2) = A1 x A1, I2(3) = A2, I2(4) = B2"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix C, Table C.1 (printed p. 436): det(2A)(B_n) = 2; Theorem C.1.2 and the spherical B_n path in Table 6.1 (printed p. 104). The B_n/C_n naming identification is in Michel's classification preview, printed p. 3; Davis's right-hand column instead lists the distinct Euclidean diagrams B_n~ and C_n~."
verification:
  precheck: pass
---

## Example

Let $n\ge2$ and let $B_n$ and $C_n$ denote the Coxeter systems whose diagram is
the path on $n$ vertices with labels $3,\dots,3,4$
([[def-cg-coxeter-diagram-components-and-finite-type]]). Then:

**(i) Same diagram, same system.** The Coxeter matrices of $B_n$ and $C_n$ are
equal, so the two names denote the same Coxeter system, the same diagram and the
same group $W$; the distinction between the $B$ and $C$ families belongs to
root-system data (a long and a short simple root), not to the Coxeter
presentation.

**(ii) Positivity and determinant.** With $C$ the cosine matrix,
$\det(2C)(B_n)=2$, while the leading principal minors of $2C$ are those of the
paths $A_k$ ($1\le k\le n-1$), namely $2,3,\dots,n$, and the full determinant
$2$. Hence $B_n$ is positive definite, $B_n$ is of finite type, and the groups
$B_n$, $C_n$ are finite of the same order
([[thm-cg-finite-type-positive-definite-criterion]]).

**(iii) Small ranks.** $B_2=C_2=I_2(4)$, and $B_n$ contains $A_{n-1}=S_n$ as a
standard parabolic; type $C_n$ has the same Coxeter system and the same Coxeter
diagram as $B_n$ for every $n\ge2$
([[thm-cg-finite-coxeter-classification-including-h-and-dihedral]] (4)).

## Facts & Assumptions

**Given:** $n\ge2$, the path $B_n=C_n$ on vertices $s_1,\dots,s_n$ with labels $m(s_k,s_{k+1})=3$ for $k\le n-2$ and $m(s_{n-1},s_n)=4$, the Coxeter form $B$ on $V=\mathbb R^{\{s_1,\dots,s_n\}}$, its cosine matrix $C=(B(e_s,e_t))$, and the presented group $W$.

[F1] A diagram is determined by its Coxeter matrix and conversely: two Coxeter systems with the same labelled graph have the same matrix and hence are the same diagram and the same presented group; the subdiagram on a vertex subset is the induced labelled graph ([[def-cg-coxeter-diagram-components-and-finite-type]]).

[F2] $B(e_s,e_s)=1$, $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite $m(s,t)$ and $B(e_s,e_t)=-1$ for $m(s,t)=\infty$, without any positivity assumption ([[def-cg-real-coxeter-form-and-reflection]]).

[F3] $\cos(\pi/4)=\sqrt2/2$; $\cos(2x)=2\cos^2x-1$, $\cos(x+\pi)=-\cos x$, cosine is even and strictly decreasing on $[0,\pi]$, and $\cos\pi=-1$ ([[lem-viete-finite-cosine-product-and-nested-radicals]], [[thm-double-angle-and-power-reduction-identities]], [[thm-quarter-turn-values-and-shift-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[F4] Laplace expansion along any row or column expresses a determinant in terms of cofactors, with the empty minor assigned determinant $1$; scaling an $n\times n$ matrix by $2$ multiplies its determinant by $2^n$; and induction on $\mathbb N$ is available ([[thm-laplace-cofactor-expansion]], [[def-matrix-minors-cofactors-and-adjugate]], [[thm-determinant-is-the-unique-normalized-alternating-multilinear-function]], [[thm-induction-principle]], [[def-natural-numbers]]).

[F5] A symmetric real matrix is positive definite if and only if its leading principal minors are positive; $W$ is finite if and only if $B$ is positive definite ([[thm-sylvesters-criterion-for-positive-definiteness]], [[def-definiteness-inertia-and-signature-data-over-the-reals]], [[thm-cg-finite-type-positive-definite-criterion]]).

[F6] $B_2$, $C_2$ and $I_2(4)$ name the two-vertex diagram with label $4$, and the standard parabolic $W_{A_{n-1}}$ of type $A_{n-1}$ is isomorphic to the symmetric group $S_n$ ([[thm-cg-finite-coxeter-classification-including-h-and-dihedral]] (4), [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2),(4)).

## Verification

1.1 (The diagram and the leading minors.) The two names denote the same labelled path, hence the same Coxeter matrix, presented group and form [F1]. Let $C_k$ be its leading $k\times k$ submatrix and $d_k:=\det C_k$, with $d_0:=1$ and $d_1=1$. For $k\ge2$ put $a:=\cos(\pi/m_{k-1})$. The last row has only $-a$ and $1$ as potentially nonzero entries [F2]. Its diagonal cofactor is $d_{k-1}$; deleting row $k$ and column $k-1$ leaves a matrix whose last column has only the bottom entry $-a$, so a second Laplace expansion gives deleted-matrix determinant $-a d_{k-2}$. The off-diagonal cofactor has sign $-1$, and therefore $d_k=d_{k-1}-a^2d_{k-2}$ [F4], without assuming positivity. To compute the all-$3$ prefix, put $c:=\cos(\pi/3)$: [F3] gives $2c^2-1=\cos(2\pi/3)=-c$ and $c>-1$, hence $(2c-1)(c+1)=0$ and $c=1/2$. Thus for $2\le k\le n-1$ the recurrence is $d_k=d_{k-1}-\frac14d_{k-2}$. Induction, starting with $d_0=d_1=1$, gives $d_k=(k+1)/2^k$ for $0\le k\le n-1$, since $\frac{k}{2^{k-1}}-\frac{k-1}{2^k}=\frac{k+1}{2^k}$ [F4]. At the final label-$4$ edge, [F3] gives $d_n=\frac n{2^{n-1}}-\frac12\frac{n-1}{2^{n-2}}=2^{1-n}$. Consequently the leading minors of $2C$ are $2^kd_k=k+1$ for $1\le k<n$, and $\det(2C)=2^nd_n=2$ [F4]. This also covers $n=2$, using $d_0=1$. [F1, F2, F3, F4, algebra]

1.2 (Small ranks and the parabolic $A_{n-1}$.) For $n=2$ the path has the single edge labelled $4$, which is the diagram $I_2(4)$, and this is the same labelled graph as $B_2=C_2=I_2(4)$ [F1, F6]. The subdiagram on $\{s_1,\dots,s_{n-1}\}$ is the all-$3$ path $A_{n-1}$; hence $W_{A_{n-1}}=\langle s_1,\dots,s_{n-1}\rangle$ is a standard parabolic subgroup of $W$, isomorphic to the Coxeter group of type $A_{n-1}$, which is the symmetric group $S_n$ [F6]. Since the two names share the same labelled graph, type $C_n$ has the same Coxeter system and the same standard parabolic $A_{n-1}$, which is (iii). [F1, F6, algebra]

2.1 (Positive definiteness, finiteness, and the same order.) By 1.1 [step 1.1] the leading principal minors of $2C$ are $2,3,\dots,n$ and the full determinant is $2$, all positive; scaling by the positive factor $2$ does not change definiteness, so $C$ has all leading principal minors positive and is positive definite by Sylvester's criterion [F5]. By the finiteness criterion [F5] the group of $B_n$ is finite, and since $C_n$ has the same Coxeter matrix it has the same Coxeter system, the same form and the same finite group, in particular the same order [F1]. This is (i) and (ii). [F1, F5, step 1.1, algebra]

3.1 (Conclusion.) The Coxeter matrices of $B_n$ and $C_n$ are equal, so the two names denote the same Coxeter diagram, the same Coxeter system and the same group, and the distinction between the $B$ and $C$ families lies in root-system data rather than in the presentation; the doubled cosine determinant is $\det(2C)(B_n)=2$ with leading minors $2,3,\dots,n$, so $B_n$ and $C_n$ are positive definite and of finite type; and $B_2=C_2=I_2(4)$ while $B_n$ has $A_{n-1}=S_n$ as a standard parabolic, with $C_n$ identical. [step 2.1, step 1.2, algebra] ∎
