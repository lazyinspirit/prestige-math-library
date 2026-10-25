---
id: lem-qftx-positive-real-monad-internal-positivity
kind: lemma
title: Positivity of the internal Hermitian form
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-positive-real-linear-monad-normal-forms
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - lem-qftx-positive-real-monad-analytic-twist-cohomology
  - lem-qftx-positive-real-monad-flat-splitting
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  lem-qftx-positive-real-monad-analytic-twist-cohomology: mathematical-premise
  lem-qftx-positive-real-monad-flat-splitting: mathematical-premise
axiom_base: "ZF + full AC inherited through the analytic scalar-cohomology input; the finite Hermitian matrix calculation is choice-free."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J.-L. Verdier, Exposé VII, Astérisque 71–72"
      url: https://numdam.org/item/AST_1980__71-72__1_0.pdf
      locator: "Exposé VII, Lemma 6.10, Proposition 6.11, and proof 6.13–6.18, printed pp. 125–130. The arbitrary-auxiliary-dimension matrix/Laplacian/Stokes proof is reconstructed here."
    - title: "W. Barth and K. Hulek, Monads and Moduli of Vector Bundles"
      url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN365956996_0025/LOG_0021.pdf
      locator: "Section 4, Propositions 5–6, printed pp. 333–334: bilinear self-dual monads and uniqueness under their explicit Hom vanishings; no positive sigma-Hermitian conclusion is imported."
verification:
  precheck: pending
---

## Statement

Let $M$ be the coefficient-image subspace of a linear monad on $\mathbb P^3(\mathbb C)$ after removing its constant orthogonal summand as in the preceding splitting lemma. Thus its reduced middle cohomology has no global sections, is trivial on every $\sigma$-invariant real line, and has a positive section pairing on each such line. Let $H$ be the induced nondegenerate Hermitian form on $M$, linear in the first variable, and suppose $\beta(z)=\alpha(jz)^\dagger H$ and $\beta(z)\alpha(z)=0$ for every $z\in\mathbb C^4$, with $j^2=-1$. Then $H$ is positive definite on all of $M$.

## Statement references

[[lem-qftx-positive-real-monad-flat-splitting]]

[Verdier, Exposé VII, Lemma 6.10 and Proposition 6.11](https://numdam.org/item/AST_1980__71-72__1_0.pdf)

## Facts & Assumptions

**Given:** The reduced monad and its pairing as stated.

[A1] AC is inherited through the analytic sheaf-cohomology supplier. [[def-axiom-of-choice]]

[F1] The reduced splitting has $H^0(F_M)=0$, is trivial and positive on each real line, and retains a nondegenerate middle Hermitian form. [[lem-qftx-positive-real-monad-flat-splitting]]

[F2] The analytic hyperplane calculation supplies $H^0(\mathbb P^1,\mathcal O(-1))=0$. [[lem-qftx-positive-real-monad-analytic-twist-cohomology]]

[F3] The bundle and Hermitian conventions are locally trivial holomorphic bundles with first-slot-linear Hermitian pairings. [[def-complex-manifolds-and-holomorphic-vector-bundles]]

## Proof

**Given:** Let $S=M$, and choose coordinates identifying the end space $U'$ with $U^*$ by the lifted pairing. All transposes below are complex-linear duals, while daggers are Hermitian adjoints.

1.1 Define $S_d=S\oplus S^*$ and $R=U\oplus U^*$. On $S_d$ put
$$
\omega((s,\phi),(t,\psi))=\phi^Tt-\psi^Ts,\qquad
J(s,\phi)=(H^{-1}\bar\phi,-H^T\bar s).
$$
Then $\omega$ is a nondegenerate complex-bilinear alternating form, $J$ is antilinear, $J^2=-1$, and $\omega(Jx,Jy)=\overline{\omega(x,y)}$ by direct substitution and $H^\dagger=H$. Consequently $\omega(Jx,y)=-\overline{\omega(x,Jy)}$ and $h_d(Jx,Jy)=h_d(y,x)$. Thus $h_d(x,y)=\omega(x,Jy)$ is a nondegenerate first-slot-linear Hermitian form with matrix $\operatorname{diag}(H,H^{-T})$. [A1, F3, algebra]

1.2 Define $a_d(z)=\operatorname{diag}(\alpha(z),\beta(z)^T):R\to S_d$ and the complex-linear map $\Phi:R\otimes\mathbb C^4\to S_d$ by $\Phi(r\otimes z)=a_d(z)r$. Let $c(u,\phi)=(\bar\phi,\bar u)$, the antilinear involution of $R$. The two identities for $\beta$ give $J a_d(z)=a_d(jz)c$. Also $\operatorname{im}a_d(z)$ is $\omega$-isotropic, since its pairing is the transpose of $\beta(z)\alpha(z)=0$. Consequently $\mathscr H=\Phi^*h_d$ satisfies $\mathscr H((c\otimes j)x,(c\otimes j)y)=\mathscr H(y,x)$ and $R\otimes z\perp_{\mathscr H}R\otimes jz$. [given, step 1.1, algebra]

2.1 Fix $z\ne0$ and write $A_z=\alpha(z)$, $B_z=\alpha(jz)$. On the real line spanned by $z,jz$, its linear coordinate $(a,b)$ gives $\alpha(a,b)=aA_z+bB_z$ and $\beta(a,b)=aB_z^\dagger H-bA_z^\dagger H$. Expanding $\beta(a,b)\alpha(a,b)=0$ in $a,b$ gives $A_z^\dagger HB_z=B_z^\dagger HA_z=0$ and $A_z^\dagger HA_z=B_z^\dagger HB_z=:G_z$. The matrix $G_z$ is invertible: if $G_zv=0$ for $v\ne0$, injectivity of $A_z$ gives $A_zv\ne0$, while $\beta(a,b)A_zv=0$ for every $(a,b)$. Its class is a global section of the trivial bundle $F_M|_\ell$ vanishing at $(1,0)$, hence is identically zero; exactness on $\ell$ would then put the constant $A_zv$ in the image of $H^0(U\otimes\mathcal O_\ell(-1))=0$, a contradiction by [F2]. [F1, F2, step 2.1, algebra]

2.2 The two images $\operatorname{im}A_z$ and $\operatorname{im}B_z$ are therefore nondegenerate and $H$-orthogonal. Their orthogonal complement
$$
E_z=\ker(A_z^\dagger H)\cap\ker(B_z^\dagger H)
$$
is the section space of $F_M|_\ell$: in bases given by $A_z,B_z$ and $G_z^{-1}$, the first two summands form copies of the exact Euler complex $\mathcal O(-1)\to\mathcal O^2\to\mathcal O(1)$, and the remaining summand is $E_z\otimes\mathcal O$. Thus $H|_{E_z}$ is positive by [F1]. The doubled target complement is $E_z\oplus E_z^*$, on which $h_d$ is positive. [F1, step 2.1, algebra]

3.1 The form $\mathscr H$ is nondegenerate on $R\otimes z$ because its Gram matrix there is $\operatorname{diag}(G_z,G_z^T)$. Its orthogonal complement to $(R\otimes z)\oplus(R\otimes jz)$ maps by $\Phi$ into $E_z\oplus E_z^*$; hence $\mathscr H$ is nonnegative on that complement, with $\ker\Phi$ allowed. Moreover $\Phi$ is onto: the images of the $\alpha_i$ span $M$ by definition, and the annihilator of the span of the $\beta_i^T$ is $\bigcap_i\ker\beta_i=H^0(F_M)=0$ by [F1]. This verifies the linewise orthogonality, nondegeneracy, and complement-positivity hypotheses needed for the following finite matrix calculation. [F1, step 1.2, step 2.2, algebra]

4.1 Choose a basis $e_1,e_2=je_1,e_3,e_4=je_3$ of $\mathbb C^4$ and decompose $R\otimes\mathbb C^4=(R\otimes D_0)\oplus(R\otimes D_\infty)$, where $D_0=\operatorname{span}(e_1,e_2)$ and $D_\infty=\operatorname{span}(e_3,e_4)$. In a $c$-compatible real basis of $R$ and this $j$-adapted basis of $\mathbb C^4$, solving the entry equations for Hermitian symmetry and the real-structure identity in step 1.2 puts the matrix of $\mathscr H$ in the form
$$
\begin{pmatrix}A&N^\dagger\\N&M_0\end{pmatrix},\quad
A=\begin{pmatrix}A_0&0\\0&A_0\end{pmatrix},\quad
M_0=\begin{pmatrix}M_1&0\\0&M_1\end{pmatrix},\quad
N=\begin{pmatrix}B&C\\-C^\dagger&B^\dagger\end{pmatrix},
$$
with $A_0=A_0^\dagger$ and $M_1=M_1^\dagger$. Here $M_0$ is invertible by the nondegeneracy in step 3.1 on $R\otimes e_3$. For $x=(x_1,x_2,x_3,x_4)\in\mathbb R^4$, set
$$
X(x)=\begin{pmatrix}x_4+ix_3&x_2+ix_1\\-x_2+ix_1&x_4-ix_3\end{pmatrix},\quad
\tau(x)=\begin{pmatrix}I&0\\I_R\otimes X(x)&I\end{pmatrix}.
$$
Direct multiplication gives $X(x)^\dagger X(x)=|x|^2I$; the graphs of these $j$-stable planes give every real line except $D_\infty$. The block matrix of $\mathscr H$ in the corresponding real-line decomposition is
$$
\begin{pmatrix}A(x)&N(x)^\dagger\\N(x)&M_0\end{pmatrix},
$$
where $A(x)=A+(I_R\otimes X(x))^TN+N^\dagger(I_R\otimes\overline{X(x)})+|x|^2M_0$ and $N(x)=N+M_0(I_R\otimes\overline{X(x)})$. Nondegeneracy on every $R\otimes z$ gives $\det A(x)\ne0$ for every $x$, while nonnegative complement restriction in step 3.1 gives the Schur complement $M_0-N(x)A(x)^{-1}N(x)^\dagger\succeq0$. [step 1.2, step 3.1, algebra]

5.1 Put $P_i=\partial X/\partial x_i$ and
$$
N_1=\tfrac12\operatorname{diag}(iC-iC^\dagger,iC-iC^\dagger),\quad
N_2=\tfrac12\operatorname{diag}(C+C^\dagger,C+C^\dagger),
$$
$$
N_3=\tfrac12\operatorname{diag}(iB-iB^\dagger,iB-iB^\dagger),\quad
N_4=\tfrac12\operatorname{diag}(B+B^\dagger,B+B^\dagger).
$$
Entrywise multiplication gives $X(x)=\sum_i x_iP_i$, $A(x)=A+2\sum_i x_iN_i+|x|^2M_0$, $\partial_iA(x)=2(N_i+x_iM_0)$, $P_i^TP_j+P_j^TP_i=2\delta_{ij}I$, and $\Theta((I_R\otimes P_i)^T(I_R\otimes P_j))=2\delta_{ij}I_R$. For $U=\operatorname{diag}(U_0,U_0)$, direct block multiplication also gives $\Theta(UV)=U\Theta(V)$. Let $\Theta$ send a $2\times2$ block matrix $(V_{ij})$ to $\operatorname{diag}(V_{11}+V_{22},V_{11}+V_{22})$. It preserves nonnegativity on Hermitian matrices. Substitution of these displayed identities in the Schur complement yields
$$
\Theta(M_0-N(x)A(x)^{-1}N(x)^\dagger)
=2M_0-2\sum_i(N_i+x_iM_0)A(x)^{-1}(N_i+x_iM_0)\succeq0.
$$
Differentiating $A(x)A(x)^{-1}=I$ twice gives
$$
-A(x)(\Delta A(x)^{-1})A(x)
=\Delta A(x)-2\sum_i\partial_iA(x)A(x)^{-1}\partial_iA(x)
=4\Theta(M_0-N(x)A(x)^{-1}N(x)^\dagger)\succeq0.
$$
Since $A(x)$ is Hermitian and invertible, congruence implies $\Delta A(x)^{-1}\preceq0$. [step 4.1, algebra]

6.1 As $|x|\to\infty$, $A(x)=|x|^2M_0+O(|x|)$, so $A(x)^{-1}=|x|^{-2}M_0^{-1}+O(|x|^{-3})$ and its radial derivative is $-2|x|^{-3}M_0^{-1}+O(|x|^{-4})$. The divergence theorem on balls in $\mathbb R^4$ therefore gives
$$
\lim_{R\to\infty}\int_{|x|\le R}\Delta A(x)^{-1}\,dx=-2\,\operatorname{vol}(S^3)\,M_0^{-1}.
$$
The left side is negative semidefinite by step 5.1, so $M_0^{-1}\succeq0$; invertibility gives $M_0\succ0$. Hence $A(x)\succ0$ for large $|x|$, and its invertibility for every $x$ plus connectedness of $\mathbb R^4$ keeps it positive definite for every $x$. The Schur complement in step 4.1 then makes $\mathscr H$ nonnegative. Surjectivity of $\Phi$ in step 3.1 implies $h_d$ is nonnegative on $S_d$; since $h_d$ is nondegenerate, it is positive definite, so its restriction $H$ to $M\oplus0$ is positive definite. Combining this with $H|_L\succ0$ from the preceding splitting lemma proves the required internal positivity. [F1, step 3.1, step 4.1, step 5.1, algebra] ∎
