---
id: ex-standard-parabolics-in-gl-n
kind: example
title: Standard parabolics in GL_n
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 31
deps: [def-root-datum-of-a-split-reductive-group, lem-sl2-structure-and-root-coordinates, thm-parabolics-and-levi-decomposition, thm-bruhat-decomposition-for-split-reductive-group, lem-standard-levi-subgroup, lem-root-coordinate-cells-and-generation, def-weyl-group-and-length-for-finite-gl-n, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 21 (21.16), (21.87), (21.93), printed pp. 429, 452 and 456-457; Ch. 7 (7.29)-(7.30)"
    - title: "Brian Conrad, Reductive Group Schemes (SGA 3 summer school, Luminy; Panoramas et Syntheses)"
      url: "https://math.stanford.edu/~conrad/papers/luminysga3smf.pdf"
      locator: "Example 4.1.8 and S5.2"
---

## Example

Assume the Axiom of Choice inherited from the named suppliers. Let $k$ be a field and $n\ge1$, $G=\mathrm{GL}_n$ with standard split maximal torus $T=D_n$ of diagonal matrices and standard Borel $B$ of upper triangular matrices ([[def-root-datum-of-a-split-reductive-group]], [[thm-parabolics-and-levi-decomposition]]). The roots are $\alpha_{ij}=\chi_i-\chi_j$ ($i\neq j$) with root groups $U_{ij}=\{I+aE_{ij}\}$, and the base is $\{\alpha_{i,i+1}:1\le i\le n-1\}$, identified with $\{1,\dots,n-1\}$. For $I\subseteq\{1,\dots,n-1\}$ let $\Delta\smallsetminus I=\{a_1,a_1+a_2,\dots,a_1+\cdots+a_{s-1}\}$ with $a_i\ge1$ and $\sum a_i=n$; then $P_I$ consists of the block upper triangular matrices with diagonal blocks of sizes $a_1,\dots,a_s$, arbitrary entries above the block diagonal and zero below, the standard Levi subgroup is $L_I=\prod_i\mathrm{GL}_{a_i}$ (block diagonal) and $R_u(P_I)$ is the block upper unitriangular subgroup, with identity diagonal blocks, zero blocks below them and arbitrary blocks above them; the multiplication $R_u(P_I)\rtimes L_I\to P_I$ is an isomorphism, $I\mapsto P_I$ is a bijection onto the smooth parabolic subgroup varieties containing $B$, and $P_\varnothing=B$, $P_{\Delta}=G$. The maximal proper parabolics $P_{\Delta\smallsetminus\{i\}}$ are the stabilizers of the partial flags with a single subspace of dimension $i$, and the Bruhat cells of the complete flag variety $G/B$ are indexed by $S_n$ with $\dim Y(w)=n(w)=\#\{(i,j):i<j,\ w(i)>w(j)\}$.

## Facts & Assumptions

**Given:** AC, a field $k$, $n\ge1$, $G=\mathrm{GL}_n$ with diagonal torus $T=D_n$, upper triangular Borel $B$, and the roots and root groups above ([[def-root-datum-of-a-split-reductive-group]]).

[F1] The standard root datum of $\mathrm{GL}_n$: $X(T)=\bigoplus_i\mathbb Z\chi_i$, roots $\alpha_{ij}=\chi_i-\chi_j$ with $\alpha_{ij}^\vee=\lambda_i-\lambda_j$ and $\langle\alpha_{ij},\alpha_{ij}^\vee\rangle=2$, root groups $U_{ij}=\{I+aE_{ij}\}\cong\mathbf G_a$, positive system $i<j$, base $\{\alpha_{i,i+1}\}$ ([[def-root-datum-of-a-split-reductive-group]], [[lem-sl2-structure-and-root-coordinates]] for the rank-one case).

[F2] Parabolics and Levi decomposition: standard parabolics $P_I$ are described by subsets $I$ of the base, $R_u(P_I)\rtimes L_I\to P_I$ is an isomorphism with $L_I=C_G(T_I)$ the standard Levi subgroup, and the correspondence $I\mapsto P_I$ is a bijection ([[thm-parabolics-and-levi-decomposition]], [[lem-standard-levi-subgroup]]).

[F3] Bruhat cells of $G/B$ are indexed by $W$ with $\dim Y(w)=n(w)$ ([[thm-bruhat-decomposition-for-split-reductive-group]], [[lem-root-coordinate-cells-and-generation]]). The inversion notation in [[def-weyl-group-and-length-for-finite-gl-n]] is combinatorial; its finite-field group conventions are not used for the arbitrary-field claim here.

## Verification

1.1 The roots and root groups of $\mathrm{GL}_n$ are as in [F1]: the weight of the coordinate function $\chi_i$ on $D_n$ is $\chi_i(\operatorname{diag}(x_1,\dots,x_n))=x_i$; the adjoint action on $E_{ij}$ gives the weight $\chi_i-\chi_j$, and the root group $U_{ij}$ consists of the elementary matrices $I+aE_{ij}$, isomorphic to $\mathbf G_a$; the positive roots relative to $B$ are those with $i<j$, and the simple roots $\alpha_{i,i+1}$ form the base of the root system $A_{n-1}$. [F1, given, algebra]

2.1 Let $I\subseteq\{1,\dots,n-1\}$ and let the complement of $I$ in the ordered set of simple roots be the partial sums listed, so that the integers $a_1,\dots,a_s\ge1$ sum to $n$. Choose a cocharacter with diagonal exponents constant within each block and strictly decreasing between consecutive blocks. Entrywise conjugation scales $x_{ij}$ by the exponent difference, so its limit subgroup is precisely the group with zero blocks below the diagonal and its limit kernel has identity diagonal blocks. By [F2] its zero simple-root pairings recover $I$. Thus $P_I$ is the group of invertible matrices preserving the flag of subspaces $0\subseteq k^{a_1}\subseteq k^{a_1+a_2}\subseteq\cdots\subseteq k^n$, i.e. the block upper triangular matrices with diagonal blocks of sizes $a_1,\dots,a_s$; its unipotent radical $R_u(P_I)$ has identity diagonal blocks, zeros below and arbitrary blocks above and its Levi factor is the block diagonal $\prod_i\mathrm{GL}_{a_i}$; the multiplication map $R_u(P_I)\rtimes L_I\to P_I$ is a group-scheme isomorphism by [F2], and $P_\varnothing=B$ and $P_{\Delta}=G$ because the corresponding flags are the complete flag and the trivial flag. The all-algebra matrix equations verify these stabilizers scheme-theoretically. For $n=1$ the simple-root set is empty, both endpoints are $G=B=\mathbf G_m$, and its unipotent radical is trivial. [F2, step 1.1, algebra]

3.1 The maximal proper parabolics correspond to $I=\Delta\smallsetminus\{i\}$, i.e. to the stabilizers of a single subspace of dimension $i$: taking $a_1=i$, $a_2=n-i$ gives the block upper triangular group with two diagonal blocks, which is the stabilizer of $k^i\subseteq k^n$, and the general $P_I$ is the intersection of these stabilizers over the cuts $i\in\Delta\smallsetminus I$, not over $I$. For $n\ge3$, the minimal proper parabolics strictly above $B$ are $P_{\{i\}}$, since singletons are the minimal nonempty proper subsets of the base. For $n\le2$ there is no proper parabolic strictly between $B$ and $G$; in particular, for $n=2$ the singleton gives $G$, rather than a proper parabolic. Finally, the simple-root reflections act on the characters $\chi_i$ by adjacent transpositions. Since they generate the Weyl group, its faithful lattice action is precisely $S_n$. The Bruhat cells of $G/B$ are indexed by $S_n$, and the length $n(w)$ equals the dimension of the cell by the length formula of [F3]. For the roots $\chi_i-\chi_j$ with $i<j$, the count $|\Phi^+\cap w\Phi^-|$ is the inversion number of $w^{-1}$. This equals the inversion number of $w$: $(i,j)\mapsto(w(j),w(i))$ bijects their inversion sets. Thus the count is $\#\{(i,j):i<j,\ w(i)>w(j)\}$ over every field. [F2, F3, step 2.1, algebra] ∎
