---
id: "lem-integer-cyclic-presentation-descends-the-simple-head-generator-line"
kind: "lemma"
title: "An integer cyclic presentation descends the simple-head generator line"
status: "draft"
origin: "session"
provenance: {"statement": "ai-altered", "proof": "ai-altered"}
deps: ["thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple", "thm-wedderburn-artin-theorem", "thm-simple-modules-over-semisimple-rings", "thm-schurs-lemma-for-modules", "thm-irreducible-quotient-adjoins-a-root"]
proof_strategy: "direct"
sources: {"references": []}
axiom_use: "None: regular trace is checked on nonsplit Wedderburn division blocks; radical basechange is finite rational row reduction; absolute Schur uses one finite root field."
---

## Statement

Let $A_{\mathbb Z}$ be a finite free unital integer algebra with $A_{\mathbb Q}=\mathbb Q\otimes A_{\mathbb Z}$, and let $K$ be any characteristic-zero field. Suppose a finite-dimensional graded cyclic $A_K$-module $S_K$, with specified homogeneous generator $z_K$, is obtained from a homogeneous integer cyclic presentation $S_{\mathbb Z}=A_{\mathbb Z}/I_{\mathbb Z}$ by scalar extension, carrying $1+I_{\mathbb Z}$ to $z_K$. Suppose $S_K$ has a nonzero simple head $D_K$, with its specified grading normalization. Then the pair consisting of $D_K$ and the line spanned by the image $v$ of $z_K$ descends to $\mathbb Q$. More precisely there is a graded quotient $D_{\mathbb Q}$ of $S_{\mathbb Q}$ and $v_{\mathbb Q}\ne0$ such that $K\otimes D_{\mathbb Q}\cong D_K$ carries $1\otimes v_{\mathbb Q}$ to $v$. Consequently $A_{\mathbb Z}v$ is free of rank $\dim_KD_K$. If $D_K$ is absolutely simple, every nonzero quotient map from the specified $S_K$ to the fixed normalized $D_K$ has generator image on this same line, up to $K^\times$.

## Facts & Assumptions

[F1] [[thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple]] gives a nilpotent radical and semisimple quotient for every finite-dimensional algebra.

[F2] [[thm-wedderburn-artin-theorem]] and [[thm-simple-modules-over-semisimple-rings]] describe semisimple finite-dimensional algebras and their simples.

[F3] [[thm-schurs-lemma-for-modules]] applies to simple modules.

[F4] [[thm-irreducible-quotient-adjoins-a-root]] constructs a finite root field for a monic irreducible polynomial. A nonconstant characteristic polynomial has a monic irreducible factor by finite induction on degree.

[A1] The integer presentation is an explicit prerequisite, not asserted here for the existing Hecke Specht construction. Its identification must preserve the specified generator.

## Proof

**Given:** The hypotheses in the statement and F1–F4. All constructions involve finite-dimensional spaces and finite root fields; no Axiom of Choice is used.

1.1 We prove the regular-trace radical criterion directly over ANY characteristic-zero field $F$, without a splitting field or algebraic closure. Let $B$ be a finite-dimensional $F$-algebra and $\beta_B(a,b)=\operatorname{Tr}_F(L_{ab}:B\to B)$. Every element of $J(B)$ is orthogonal to $B$, because its product with any element lies in the nilpotent radical and hence has nilpotent left multiplication and zero trace. Choose a finite composition series of the left regular module. F1–F2 give $B/J(B)\cong\prod_iM_{n_i}(D_i)$, where each $D_i$ is a finite-dimensional division algebra over $F$; every simple composition factor is its column module $D_i^{n_i}$. Additivity of trace along the composition series shows that on this quotient the pairing is $\sum_i m_i\operatorname{Tr}_F(\rho_i(X_iY_i):D_i^{n_i}\to D_i^{n_i})$, where $m_i$ is the positive integer multiplicity of the column module in the regular composition series. Every $m_i$ is positive because the regular quotient already contains the corresponding column module. For a nonzero entry $x_{ab}$ of a block $X_i$, choose $Y_i$ with its only nonzero entry $(b,a)$ equal to $x_{ab}^{-1}$, and set all other blocks of $Y$ to zero. The product $X_iY_i$ has exactly one nonzero diagonal entry, namely $1$ at position $a$. On the $F$-space $D_i^{n_i}$, its action therefore has trace $\dim_F D_i$; off-diagonal blocks contribute no trace. The full pairing on this $Y$ is $m_i\dim_FD_i\ne0$ in characteristic zero. Thus the quotient pairing is nondegenerate and $\ker\beta_B=J(B)$. [F1, F2, algebra]

1.2 Apply step 1.1 over $F=\mathbb Q$ and $F=K$. The regular multiplication and trace matrices for $A_K$ are scalar extensions of those for $A_{\mathbb Q}$. Row reduction of a finite matrix commutes with field extension, so the kernels satisfy $\ker\beta_{A_K}=K\otimes\ker\beta_{A_{\mathbb Q}}$. The radical criterion gives $J(A_K)=K\otimes J(A_{\mathbb Q})$. This argument applies equally to nonsplit division factors and needs no separable splitting theorem. [step 1.1, algebra]

2.1 Put $S_{\mathbb Q}=\mathbb Q\otimes S_{\mathbb Z}$ and $D_{\mathbb Q}=S_{\mathbb Q}/J(A_{\mathbb Q})S_{\mathbb Q}$. Tensoring quotient presentations is right exact and $K/\mathbb Q$ is flat, so $K\otimes D_{\mathbb Q}=S_K/J(A_K)S_K$. This last quotient is precisely the semisimple head: $A_K/J(A_K)$ is semisimple, so the quotient is semisimple, while every simple quotient kills $J(A_K)S_K$. Equivalently, intersections of maximal submodules equal $J(A_K)S_K$, since the intersection of the maximal submodules of a finite semisimple module is zero. The assumed head is simple, so this quotient is $D_K$. Its rational precursor is nonzero and simple: a proper nonzero rational submodule would remain proper and nonzero after faithful scalar extension. [F1, F2, step 1.2, algebra]

2.2 The radical of a finite-dimensional $\mathbb Q$-graded algebra is homogeneous. Indeed all scaling automorphisms $a_d\mapsto t^d a_d$ preserve its characteristic ideal $J$, for $t\in\mathbb Q^\times$. If $a=\sum_{d\in E}a_d\in J$ with finite degree set $E$, take $t=2^j$ for $j=0,\ldots,|E|-1$. The resulting coefficient matrix $((2^d)^j)_{j,d}$ is Vandermonde in the pairwise distinct rational numbers $2^d$, hence invertible; each $a_d$ is a rational linear combination of elements of $J$. Thus $J(A_{\mathbb Q})S_{\mathbb Q}$ is homogeneous and $D_{\mathbb Q}$ has the required quotient grading. Put $v_{\mathbb Q}=z_{\mathbb Q}+J(A_{\mathbb Q})S_{\mathbb Q}$. It is nonzero: otherwise cyclicity would force $D_{\mathbb Q}=0$. The scalar-extension quotient isomorphism preserves the generator, and hence its image is exactly $v$, including its degree. Any prescribed normalization shift is imposed simultaneously on both modules. [step 2.1, algebra]

3.1 The orbit $A_{\mathbb Z}v_{\mathbb Q}$ is generated as an abelian group by the images of a finite integer basis of $A_{\mathbb Z}$. It is torsion-free because it is a subgroup of a rational vector space. Its rational span is $D_{\mathbb Q}$, by cyclicity, so its rank equals $\dim_{\mathbb Q}D_{\mathbb Q}=\dim_KD_K$. The generator-preserving scalar-extension isomorphism identifies this orbit with $A_{\mathbb Z}v$. A finitely generated torsion-free abelian group is free, which proves the lattice assertion. [step 2.1, step 2.2, algebra]

3.2 If a fixed normalized $D_K$ is absolutely simple, a nonzero map $S_K\to D_K$ is surjective and kills the radical. Since the head is already the simple $D_K$, such maps factor through its canonical quotient and differ by an invertible endomorphism of $D_K$. This endomorphism $f$ is scalar using a finite root-field construction. Its nonconstant characteristic polynomial has a monic irreducible factor; by F4 the corresponding quotient field $L/K$ supplies a root $\alpha$. The matrix $f_L-\alpha I$ has zero determinant and hence a nonzero kernel. Absolute simplicity makes $D_L$ simple, so this commuting endomorphism must be zero. Thus $f_L=\alpha I$, and any diagonal entry of the original $K$-matrix shows $\alpha\in K$. Thus every allowed generator image is a scalar multiple of the constructed image, and scaling the lattice preserves freeness and rank. No claim concerning an arbitrary vector in $D_K$ was used. [F3, F4, step 2.1, step 3.1, algebra] ∎

