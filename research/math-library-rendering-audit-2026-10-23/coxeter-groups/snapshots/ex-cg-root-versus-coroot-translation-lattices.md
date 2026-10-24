---
id: ex-cg-root-versus-coroot-translation-lattices
kind: example
title: "Root versus coroot translation lattices: A2, B2 and two conventions"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 2
deps:
  - def-cg-affine-root-hyperplane-reflection-and-alcove
  - lem-cg-affine-reflection-identities-and-local-finiteness
  - def-reduced-crystallographic-euclidean-root-system
  - def-coroot-and-dual-root-system
  - def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice
  - cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant
  - def-index
  - lem-integer-part
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: "2026-10-08"
  precheck: pass
sources:
  references:
    - title: "J. Morgan, Lie Groups Fall 2025, Lecture XII: The Affine Weyl Group (Columbia course notes)"
      url: "https://www.math.columbia.edu/~jmorgan/LieGroups2025/2025LGLecture12.pdf"
      locator: "§3.1 Proposition 3.1 and §3.2 Proposition 3.2, PDF pp. 4–7: in the compact-Lie-group normalization with walls α=2πk, the translation vectors λ_α are coroot-scaled and generate the translation subgroup. The factor 2π and the Lie-group lattice hypotheses differ from the present convention; this is context only, while the local lattice calculations are explicit here."
    - title: "P. Magyar, Schubert classes of a loop group (arXiv:0705.3826)"
      url: "https://arxiv.org/pdf/0705.3826"
      locator: "§1.4–1.5, PDF pp. 4–5: in the SL_n/type-A setting the affine group uses Q∨ translations, while the extended group uses P∨ and its alcove stabilizer. The affine-reflection parameterization has a different sign/composition convention; this is a type-A comparison only, not a supplier for the B2 lattice calculation."
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., digital edition"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II §5, printed pp. 149–156, especially (2.43), Figure 2.2, Propositions 2.48–2.49 and table (2.50): abstract-root-system axioms, classical coordinate models, the B2/C2 isomorphism, and simple-root data. Knapp does not state the lattice index or covolume computation; those are proved locally here."
---
## Example

Let $E_{A_2}=\{(x_1,x_2,x_3)\in\mathbb R^3:x_1+x_2+x_3=0\}$ and $E_{B_2}=\mathbb R^2$, both with the standard dot product $B$. With standard basis vectors $e_i$, use
$$\Phi_{A_2}=\{e_i-e_j:1\le i\ne j\le3\}\subset E_{A_2},\qquad \Phi_{B_2}=\{\pm e_1,\pm e_2,\pm e_1\pm e_2\}\subset E_{B_2}.$$

**(1) Standard affine convention.** For walls $H_{\alpha,k}=\{x:B(x,\alpha)=k\}$ and affine reflection group $W_a$, the translation subgroup is $Q^\vee$ ([[lem-cg-affine-reflection-identities-and-local-finiteness]]). In type $A_2$, $\alpha^\vee=\alpha$ for every root, so $Q^\vee=Q$. In type $B_2$,
$$Q=\mathbb Z e_1+\mathbb Z e_2,\qquad Q^\vee=\mathbb Z(e_1-e_2)+\mathbb Z(2e_2),\qquad [Q:Q^\vee]=2.$$
A half-open fundamental parallelogram for the $Q^\vee$-translations tiles $E_{B_2}$, and its covolume is twice that of a fundamental parallelogram for $Q$. Here covolume means the Euclidean area of a basis parallelogram.

**(2) Dual-normal convention.** If instead the walls are $H^\vee_{\alpha,k}=\{x:B(x,\alpha^\vee)=k\}$, the translations are by the root lattice $Q$ of $\Phi$. Thus the convention determines which of the two lattices acts.

**(3) Coxeter-diagram limitation.** The dual root system $\Phi_{B_2}^\vee$ is the standard $C_2$ root system. The root and coroot lattices exchange:
$$Q(C_2)=Q^\vee(B_2),\qquad Q^\vee(C_2)=Q(B_2).$$
The simple-reflection pairs for $B_2$ and $C_2$ both have product of order $4$, so their unoriented Coxeter diagram (one edge labelled $4$) does not determine the translation lattice; root-length information is needed.

## Verification

**Proof technique:** explicit root and lattice calculations.

**Given:** The two displayed coordinate sets and the affine-wall convention above.

[F1] A reduced crystallographic root system is finite, spans its ambient space, is preserved by each root reflection, has integral Cartan integers, and has only $\pm\alpha$ on each root line ([[def-reduced-crystallographic-euclidean-root-system]]).

[F2] The affine reflection group for the walls $B(x,\alpha)=k$ has translation subgroup $Q^\vee$ ([[def-cg-affine-root-hyperplane-reflection-and-alcove]], [[lem-cg-affine-reflection-identities-and-local-finiteness]]).

[F3] $\alpha^\vee=2\alpha/B(\alpha,\alpha)$, the dual root system is $\Phi^\vee=\{\alpha^\vee:\alpha\in\Phi\}$, and $(\alpha^\vee)^\vee=\alpha$ ([[def-coroot-and-dual-root-system]]).

[F4] $Q=\sum_{\alpha\in\Phi}\mathbb Z\alpha$ and $Q^\vee=\sum_{\alpha\in\Phi}\mathbb Z\alpha^\vee$ ([[def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]]).

[F5] For a full-rank integer sublattice $L=A\mathbb Z^n\subseteq\mathbb Z^n$ with $\det A\ne0$, the quotient $\mathbb Z^n/L$ is finite of order $|\det A|$ ([[cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant]]).

[F6] The subgroup index is $[G:H]=|G/H|$ when the quotient is finite ([[def-index]]).

[F7] For vectors $u,v\in\mathbb R^2$, the Euclidean area of their parallelogram is $|\det(u,v)|$; this is the covolume convention used here.

[F8] Every real number $u$ has a unique integer part $m$ satisfying $m\le u<m+1$ ([[lem-integer-part]]).

[F9] The coroot set is itself reduced crystallographic and has reflections $s_{\alpha^\vee}=s_\alpha$ ([[lem-cg-affine-reflection-identities-and-local-finiteness]]).

1.1 The $A_2$ set is finite, nonzero, and spans the sum-zero plane because $e_1-e_2$ and $e_2-e_3$ are independent. Each root reflection swaps two coordinates, so it preserves the set. Every root has squared length $2$, and the dot product of any two listed roots is an integer; hence $2B(\beta,\alpha)/B(\alpha,\alpha)=B(\beta,\alpha)\in\mathbb Z$. No root line contains any listed multiple other than the two signs. Thus $\Phi_{A_2}$ is a reduced crystallographic root system. [F1, algebra]

1.2 The $B_2$ set is finite, nonzero, and spans $\mathbb R^2$. Reflection in a short root $\pm e_i$ changes the sign of one coordinate; reflection in a long root $\pm e_1\pm e_2$ swaps or swaps-and-negates the two coordinates. These maps preserve the displayed set. Short roots have squared length $1$ and long roots squared length $2$; all dot products of listed roots are integers, so $2B(\beta,\alpha)/B(\alpha,\alpha)$ is integral for either possible denominator. Each root line contains only the two signs. Thus $\Phi_{B_2}$ is a reduced crystallographic root system. [F1, algebra]

1.3 By [F2], the standard walls give translation lattice $Q^\vee$. The dual-normal walls are exactly the standard affine walls of the reduced crystallographic root system $\Phi^\vee$ from [F9], so [F2] applied to $\Phi^\vee$ gives translation lattice $Q^\vee(\Phi^\vee)=\sum_{\alpha\in\Phi}\mathbb Z(\alpha^\vee)^\vee=Q$ by [F3, F4]. [F2, F3, F4, F9, algebra]

2.1 Every $A_2$ root has squared length $2$, so $\alpha^\vee=\alpha$ and the root and coroot lattices agree. [F3, F4, step 1.1, algebra]

2.2 In $B_2$, the roots $\pm e_i$ have coroots $\pm2e_i$, while the roots $\pm e_1\pm e_2$ have the same coroots. Since $e_1+e_2=(e_1-e_2)+2e_2$ and $2e_1=2(e_1-e_2)+2e_2$, all these coroots lie in $\mathbb Z(e_1-e_2)+\mathbb Z(2e_2)$; conversely both displayed generators are coroots. The roots include $\pm e_1,\pm e_2$, and every other root is their integer combination. Therefore $Q=\mathbb Ze_1+\mathbb Ze_2$ and $Q^\vee=\mathbb Z(e_1-e_2)+\mathbb Z(2e_2)\subset Q$. [F3, F4, step 1.2, algebra]

3.1 Relative to the basis $(e_1,e_2)$ of $Q$, the two displayed generators of $Q^\vee$ are the columns of $M=\begin{pmatrix}1&0\\-1&2\end{pmatrix}$, so $|\det M|=2$. By [F5], $Q/Q^\vee$ has order $2$, and by [F6] this says $[Q:Q^\vee]=2$. [F4, F5, F6, step 2.2, algebra]

3.2 Relative to $(e_1,e_2)$, the basis matrices of $Q$ and $Q^\vee$ are $I$ and $M=\begin{pmatrix}1&0\\-1&2\end{pmatrix}$. By [F7], their basis-parallelogram areas are $|\det I|=1$ and $|\det M|=2$. For any $x\in E_{B_2}$, write its unique coordinates in the latter basis as $(u_1,u_2)$ and let $m_i=\lfloor u_i\rfloor$ by [F8], so $u_i-m_i\in[0,1)$. Then $x=(m_1(e_1-e_2)+2m_2e_2)+((u_1-m_1)(e_1-e_2)+2(u_2-m_2)e_2)$. The first term lies in $Q^\vee$ and the second in the half-open parallelogram $P=\{t_1(e_1-e_2)+2t_2e_2:0\le t_1,t_2<1\}$. Uniqueness of the integer parts makes this decomposition unique; hence the translates of $P$ by $Q^\vee$ partition the plane. Its covolume is twice that of $Q$. [F7, F8, step 2.2, algebra]

4.1 In $B_2$, take the generating root-reflection pair with normals $\alpha_1=e_1-e_2$ and $\alpha_2=e_2$; their reflections swap coordinates and change one coordinate sign, so they generate the signed permutation reflection group of $B_2$. Their dual roots are $\beta_1=\alpha_1^\vee=e_1-e_2$ and $\beta_2=\alpha_2^\vee=2e_2$, so $\Phi_{B_2}^\vee=\{\pm2e_i,\pm e_1\pm e_2\}$ is $C_2$, and [F3, F4] give the stated lattice exchange. The normal pairs satisfy $\frac{B(\alpha_1,\alpha_2)}{\|\alpha_1\|\|\alpha_2\|}=\frac{B(\beta_1,\beta_2)}{\|\beta_1\|\|\beta_2\|}=-\frac1{\sqrt2}$. Thus both pairs of reflecting hyperplanes meet at acute angle $\pi/4$; the product of the two reflections is a rotation through $\pi/2$ and has order $4$. This proves the diagram statement. All coordinate lists are finite and explicit, and the only interval representatives use the unique integer part; no axiom of choice is used. [F1, F3, F4, step 2.2, algebra] ∎
