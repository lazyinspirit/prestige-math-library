---
id: ex-borel-fixed-point-on-projective-space
kind: example
title: Borel subgroups of GL_n are flag stabilizers and act on projective space with a fixed line
dependency_level: 14
deps:
  - def-axiom-of-choice
  - def-borel-subgroup-and-maximal-torus
  - def-complete-variety
  - def-projective-bundle-scheme
  - def-smooth-morphism-schemes
  - def-upper-unitriangular-group-scheme
  - lem-borel-subgroup-is-the-stabilizer-of-a-maximal-flag
  - lem-flag-variety-of-a-vector-space
  - lem-general-linear-group-scheme-and-its-coordinate-ring
  - lem-orbit-map-faithfully-flat-and-orbit-locally-closed
  - lem-projective-space-action-from-linear-representation
  - prop-faithfully-flat-orbit-map-represents-coset-quotient
  - thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field
  - thm-homogeneous-space-for-smooth-affine-group
  - thm-lie-kolchin-for-smooth-connected-solvable-groups
  - lem-upper-unitriangular-central-series
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Example 17.7 and Theorems 17.9-17.10, printed pp. 354-355
    - title: Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)
      url: https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf
      locator: Introduction, printed p. 3; Remarks 121 and Theorem 122, printed pp. 50-51
---
## Example

Assume the Axiom of Choice. Let $k$ be an algebraically closed field, let $V$ be a finite-dimensional $k$-vector space of dimension $n\ge1$ and let $G=\mathrm{GL}(V)$ ([[lem-general-linear-group-scheme-and-its-coordinate-ring]]). The Borel subgroups of $G$ are exactly the stabilizers of maximal flags in $V$, hence exactly the conjugates of the upper triangular group $T_n$, and each is a semidirect product $U_n\rtimes D_n$ ([[def-upper-unitriangular-group-scheme]], [[def-borel-subgroup-and-maximal-torus]]). The group $T_n$ acts on the projective space of lines $\mathbf P(V)$ with fixed line $\langle e_1\rangle$, and $\mathrm{GL}(V)/T_n\cong\mathrm{Fl}(V)$, the complete flag variety, so the Borel fixed point theorem is visible here as the existence of a $T_n$-invariant line: the eigenvector corresponding to the first step of the flag.

## Facts & Assumptions
**Given:** The Axiom of Choice, an algebraically closed field $k$, a finite-dimensional $k$-vector space $V$ of dimension $n\ge1$, and $G=\mathrm{GL}(V)$.

[F1] $T_n=D_n\ltimes U_n$ is a closed subgroup scheme of $\mathrm{GL}_n$, the upper triangular invertible matrices; $D_n$ is a diagonalizable torus and $U_n$ has a central series with successive quotients $\mathbf G_a$, so $T_n$ is smooth connected and solvable. A smooth connected solvable subgroup of $G$ is trigonalizable: there is a basis of $V$ in which it acts through upper triangular matrices. ([[def-upper-unitriangular-group-scheme]], [[lem-upper-unitriangular-central-series]], [[thm-lie-kolchin-for-smooth-connected-solvable-groups]])

[F2] Assume AC. Any two Borel subgroups of $G$ are conjugate by an element of $G(k)$, and for every Borel subgroup $B$ the quotient $G/B$ is complete. ([[thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field]])

[F3] The variety $\mathrm{Fl}(V)$ of maximal flags is smooth projective, hence separated, finite type and complete; $\mathrm{GL}(V)$ acts transitively on it, and the scheme-theoretic stabilizer of the standard flag is $T_n$. The standard flag is a $k$-point, and $\mathrm{GL}(V)$ is smooth of finite type: in a basis it is the determinant-open subscheme $D(\det)\subseteq\mathbb A_k^{n^2}$. Thus the orbit-map lemma applies to this action and gives a locally closed orbit $O_F$ and a faithfully flat, locally finitely presented map $\mathrm{GL}(V)\to O_F$. Transitivity makes $O_F$ contain every closed point of $\mathrm{Fl}(V)$; since it is locally closed and both orbit and flag variety are reduced, $O_F=\mathrm{Fl}(V)$. The stabilizer of any maximal flag is a closed subgroup scheme conjugate to $T_n$, hence solvable. ([[def-smooth-morphism-schemes]], [[lem-flag-variety-of-a-vector-space]], [[lem-general-linear-group-scheme-and-its-coordinate-ring]], [[lem-orbit-map-faithfully-flat-and-orbit-locally-closed]], [[lem-borel-subgroup-is-the-stabilizer-of-a-maximal-flag]])

[F4] Assume AC. The standard representation $V$ of $G$ induces a rational action of $G$, and of each closed subgroup, on the space of lines $\mathbf P(V)$, and for a line $L\subseteq V$ the scheme stabilizer of the point $[L]$ has $R$-points $\{g:gL_R=L_R\}$. ([[lem-projective-space-action-from-linear-representation]], [[def-projective-bundle-scheme]])

[F5] Assume AC. For a smooth affine group $G$ of finite type and a closed subgroup $H$, the fppf quotient $G/H$ is representable by a separated finite-type scheme and the orbit map exhibits it as the orbit of the corresponding point of a projective space when $H$ is a line stabilizer; in particular the orbit of the standard flag under $\mathrm{GL}(V)$ with stabilizer $T_n$ is $\mathrm{GL}(V)/T_n$. ([[thm-homogeneous-space-for-smooth-affine-group]], [[prop-faithfully-flat-orbit-map-represents-coset-quotient]], [[lem-projective-space-action-from-linear-representation]])

## Proof

**Given:** The Axiom of Choice, an algebraically closed field $k$, a finite-dimensional $k$-vector space $V$ of dimension $n\ge1$, and $G=\mathrm{GL}(V)$.

1.1 A Borel subgroup $B$ of $G$ is solvable, hence trigonalizable by [F1]: there is a basis $v_1,\dots,v_n$ of $V$ in which $B$ acts through upper triangular matrices, so $B\subseteq T_n$ relative to that basis; maximality of $B$ gives $B=T_n$ in that basis. Conversely $T_n$ is a Borel subgroup by [F1]: it is connected solvable, and a connected solvable subgroup strictly containing $T_n$ would be trigonalizable in a basis of its own, contradicting maximality of the dimension of $T_n$. Hence the Borel subgroups of $G$ are exactly the conjugates of $T_n$, and by [F2] any two of them are conjugate by an element of $G(k)$. [F1, F2]

2.1 A conjugate $gT_ng^{-1}$ is exactly the stabilizer of the flag $gF_{\mathrm{std}}$, where $F_{\mathrm{std}}$ is the standard flag with $i$-th step $\langle e_1,\dots,e_i\rangle$: an element $h$ stabilizes the flag $F_{\mathrm{std}}$ if and only if its matrix is upper triangular, so $gT_ng^{-1}$ is the scheme-theoretic stabilizer of $gF_{\mathrm{std}}$, and conversely every maximal flag is $gF_{\mathrm{std}}$ for some $g$ because $G$ acts transitively on bases and maximal flags correspond to bases. Therefore the Borel subgroups of $G$ are exactly the stabilizers of maximal flags in $V$, and each is a semidirect product $U_n\rtimes D_n$ by [F1]. [F1, F3, step 1.1]

3.1 By [F4] the standard representation makes $G$, and hence its subgroup $T_n$, act rationally on the space of lines $\mathbf P(V)$; an upper triangular matrix satisfies $g e_1=g_{11}e_1$ with $g_{11}\in k^\times$, so $g$ preserves the line $\langle e_1\rangle$. Thus $\langle e_1\rangle$ is a line fixed by all of $T_n(k)$: the Borel fixed point theorem is realized concretely, the fixed line being the first step of the standard flag. [F4, step 2.1]

4.1 By [F3] the orbit of the standard flag is all of $\mathrm{Fl}(V)$, its scheme-theoretic stabilizer is $T_n$, and the orbit map $\mathrm{GL}(V)\to\mathrm{Fl}(V)$ is faithfully flat and locally of finite presentation. The coset-quotient proposition [F5] therefore applies and shows that $\mathrm{Fl}(V)$ represents the fppf quotient $\mathrm{GL}(V)/T_n$. Since $\mathrm{Fl}(V)$ is complete by [F3], this illustrates the completeness of $G/B$ from [F2] in the special case of $\mathrm{GL}(V)$. [F2, F3, F5, step 3.1]

5.1 Collecting: the Borel subgroups of $\mathrm{GL}(V)$ are the flag stabilizers, equivalently the conjugates of $T_n=U_n\rtimes D_n$; the standard maximal flag provides a $T_n$-fixed line in $\mathbf P(V)$, and $\mathrm{GL}(V)/T_n\cong\mathrm{Fl}(V)$ is the complete flag variety. [step 2.1, step 3.1, step 4.1] ∎ 