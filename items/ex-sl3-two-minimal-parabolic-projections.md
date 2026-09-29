---
id: ex-sl3-two-minimal-parabolic-projections
kind: example
title: Two minimal-parabolic projections for SL(3)
status: draft
origin: pipeline
landmark: false
deps:
  - def-borel-character-equivariant-line-bundle
  - thm-minimal-parabolic-flag-projection-is-p1-bundle
  - lem-flag-line-bundle-degree-on-minimal-parabolic-fibre
  - lem-flag-variety-canonical-bundle-weight-minus-two-rho
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - lem-semisimple-borel-root-factorization
  - lem-semisimple-minimal-parabolic-root-subgroup
  - lem-semisimple-projective-orbit-flag-quotients
  - def-fundamental-weights-for-a-chosen-simple-root-system
  - def-coroot-and-dual-root-system
  - def-weyl-vector-rho
  - ex-diagonal-cartan-subalgebra-and-roots-of-sl-n
  - ex-exterior-powers-and-fundamental-weights-of-sl-n
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Michel Brion, Lectures on the Geometry of Flag Varieties"
      url: https://www-fourier.univ-grenoble-alpes.fr/~mbrion/lecturesrev.pdf
      locator: "§§1.2-1.4 and §2.1"
    - title: "J. S. Milne, Algebraic Groups"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Chapters 7, 21-22"
---

## Statement

Assume the Axiom of Choice. Let $G=SL_3(\mathbb C)$ with its upper triangular
Borel $B$, diagonal maximal torus $T$, simple roots
$\alpha_1=\varepsilon_1-\varepsilon_2$, $\alpha_2=\varepsilon_2-\varepsilon_3$
and fundamental weights $\omega_1,\omega_2$ of
[[def-fundamental-weights-for-a-chosen-simple-root-system]]. Then the flag
variety $X_B=G/B$ is the variety of complete flags
$0\subsetneq L\subsetneq H\subsetneq\mathbb C^3$, and the two minimal-parabolic
projections of [[thm-minimal-parabolic-flag-projection-is-p1-bundle]]
$$f_{\alpha_1},f_{\alpha_2}:X_B\longrightarrow G/P_{\alpha_1},\,G/P_{\alpha_2}$$
are, in the order fixed below, the maps forgetting the line $L$ and forgetting
the plane $H$; each of the two has fibre $\mathbb P^1$. For the associated line
bundles $\mathcal L_{\omega_i}$ of [[def-borel-character-equivariant-line-bundle]]
the degree on the fibre of $f_{\alpha_j}$ is
$\langle\omega_i,\alpha_j^\vee\rangle=\delta_{ij}$, so that the fibre-degree
pairs of $\mathcal L_{\omega_1}$ and $\mathcal L_{\omega_2}$ are $(1,0)$ and
$(0,1)$; consequently $\mathcal L_{\omega_1}\otimes\mathcal L_{\omega_2}\cong\mathcal L_\rho$
has fibre-degree pair $(1,1)$ and $\omega_{G/B}\cong\mathcal L_{-2\rho}$ has
fibre degree $-2$ on both families.

## Facts & Assumptions

**Given:** the group $G=SL_3(\mathbb C)$ with its upper triangular Borel $B$ and diagonal torus $T$, the simple roots $\alpha_1,\alpha_2$ and fundamental weights $\omega_1,\omega_2$, the minimal parabolics $P_{\alpha_1},P_{\alpha_2}$, the flag varieties $X_B=G/B$, $X_{\alpha_i}=G/P_{\alpha_i}$, the line bundles $\mathcal L_\lambda$, and the Axiom of Choice.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] For every simple root $\alpha$ the induced map $f:X_B\to X_\alpha$, $g[v_B]\mapsto g[v_\alpha]$, is a surjective morphism with fibre $P_\alpha/B$, which is $\mathbb P^1$ in the two-chart description $z\mapsto u_{-\alpha}(z)B$, $t\mapsto u_\alpha(t)n_\alpha B$, $t=z^{-1}$; the morphism is locally a projective-line bundle. ([[thm-minimal-parabolic-flag-projection-is-p1-bundle]], [[lem-semisimple-minimal-parabolic-root-subgroup]])

[F2] For $\lambda\in X^*(T)$ the restriction of $\mathcal L_\lambda$ to the fibre of the projection $X_B\to X_\alpha$ over $[v_\alpha]$ is $\mathcal O_{\mathbb P^1}(\langle\lambda,\alpha^\vee\rangle)$ for the fixed identification of that fibre with $\mathbb P^1$, so its degree is the coroot pairing $\langle\lambda,\alpha^\vee\rangle$. ([[lem-flag-line-bundle-degree-on-minimal-parabolic-fibre]], [[def-borel-character-equivariant-line-bundle]])

[F3] $X_B=G/B$ is the orbit of $[v_B]$ in $\mathbb P(W_B)$ with stabilizer $H_B=B$, $X_\alpha=G/P_\alpha$ likewise, $\dim X_B=|\Phi^+|$ and $\dim X_\alpha=|\Phi^+|-1$; the associated bundles satisfy $\mathcal L_0=\mathcal O$, $\mathcal L_\lambda\otimes\mathcal L_\mu=\mathcal L_{\lambda+\mu}$ and $\mathcal L_\lambda^\vee=\mathcal L_{-\lambda}$. ([[lem-semisimple-projective-orbit-flag-quotients]], [[def-borel-character-equivariant-line-bundle]], [[def-complex-semisimple-algebraic-group-borel-and-flag-variety]])

[F4] The group $G$ is the connected simply connected complex semisimple algebraic group with Borel $B=T\ltimes U$ and positive system $\Phi^+$. ([[def-complex-semisimple-algebraic-group-borel-and-flag-variety]], [[lem-semisimple-borel-root-factorization]])

[F5] The roots of $\mathfrak{sl}_3(\mathbb C)$ with its diagonal Cartan subalgebra $\mathfrak h$ are the functionals $\varepsilon_i-\varepsilon_j$ ($i\ne j$) with root spaces $\mathbb CE_{ij}$, and the fundamental weights of $\mathfrak{sl}_3$ are $\omega_1=\varepsilon_1$, $\omega_2=\varepsilon_1+\varepsilon_2$ in the notation of the classical $A_2$ data; the fundamental weights are characterised by $\omega_i(\alpha_j^\vee)=\delta_{ij}$ and the coroots are the vectors $\alpha^\vee=2\alpha/(\alpha,\alpha)$ of the dual root system. ([[ex-diagonal-cartan-subalgebra-and-roots-of-sl-n]], [[ex-exterior-powers-and-fundamental-weights-of-sl-n]], [[def-fundamental-weights-for-a-chosen-simple-root-system]], [[def-coroot-and-dual-root-system]])

[F6] The canonical bundle of the flag variety is $\omega_{G/B}\cong\mathcal L_{-2\rho}$ with $\rho$ the Weyl vector, half the sum of the positive roots. ([[lem-flag-variety-canonical-bundle-weight-minus-two-rho]], [[def-weyl-vector-rho]])

**Proof technique:** direct: identify the flag variety of $SL_3$ with complete flags, compute which maximal parabolic stabilises the standard plane and which the standard line by a dimension count inside the $6$-dimensional stabilisers, read off the two families of $\mathbb P^1$-fibres, and evaluate the degrees of $\mathcal L_{\omega_i}$ with the coroot pairing $\langle\omega_i,\alpha_j^\vee\rangle=\delta_{ij}$.

## Proof

1.1 Root data and pairings. The flag manifold of $G=SL_3(\mathbb C)$ has $|\Phi^+|=3$ positive roots $\alpha_1,\alpha_2,\alpha_1+\alpha_2$ and $\dim X_B=3$; the simple coroots are the diagonal matrices $h_{\alpha_1}=\operatorname{diag}(1,-1,0)$ and $h_{\alpha_2}=\operatorname{diag}(0,1,-1)$, which act on the coordinate functionals by $\langle\varepsilon_i,\alpha_j^\vee\rangle=\delta_{i,j}-\delta_{i,j+1}$. With $\omega_1=\varepsilon_1$ and $\omega_2=\varepsilon_1+\varepsilon_2$ this gives the four pairings $$\langle\omega_1,\alpha_1^\vee\rangle=1,\quad\langle\omega_1,\alpha_2^\vee\rangle=0,\quad\langle\omega_2,\alpha_1^\vee\rangle=1-1=0,\quad\langle\omega_2,\alpha_2^\vee\rangle=0+1=1,$$ that is $\langle\omega_i,\alpha_j^\vee\rangle=\delta_{ij}$, as required of the fundamental weights; also $\rho=\frac12(2\alpha_1+2\alpha_2)=\alpha_1+\alpha_2$, so $2\rho=2(\alpha_1+\alpha_2)$ and $\langle2\rho,\alpha_j^\vee\rangle=2\langle\alpha_1+\alpha_2,\alpha_j^\vee\rangle=2$ for $j=1,2$, using $\langle\alpha_1,\alpha_2^\vee\rangle=\langle\alpha_2,\alpha_1^\vee\rangle=-1$. [F4, F5, algebra]

1.2 The flag variety as complete flags. The stabilizer in $G$ of the standard flag $E_1=\mathbb Ce_1\subset E_2=\mathbb Ce_1\oplus\mathbb Ce_2$ is exactly the upper triangular subgroup $B$, and $G$ acts transitively on complete flags: given $0\ne v_1\in L$ and $v_2\in H\setminus L$ one extends to a basis $v_1,v_2,v_3$ adapted to $L\subset H$, and after replacing $v_1$ by $\lambda^{-1}v_1$ for $\lambda=\det(v_1,v_2,v_3)$ the corresponding matrix lies in $SL_3$ and carries the standard flag to $L\subset H$; the replacement does not change $L$. Hence $G/B\to\{L\subset H\}$, $gB\mapsto g(E_1\subset E_2)$, is a $G$-equivariant bijection. [F3, F4, algebra]

1.3 The two parabolics are the two stabilizers. The subgroup of $G$ stabilising the plane $E_2$ consists of the block matrices $\begin{pmatrix}*&*&*\\ *&*&*\\0&0&*\end{pmatrix}$ of determinant one, a closed subgroup of dimension $6$ containing $B$ and the root group $U_{-\alpha_1}$; by [F1] the minimal parabolic $P_{\alpha_1}$ is an irreducible closed subgroup with $P_{\alpha_1}/B\cong\mathbb P^1$, so $\dim P_{\alpha_1}=\dim B+1=8-3+1=6$, and a closed subgroup of the same dimension containing it equals it; hence $P_{\alpha_1}$ is the stabilizer of the plane $E_2$. The same count with the line $E_1$, whose stabilizer is the block subgroup of dimension $6$ containing $B$ and $U_{-\alpha_2}$, gives that $P_{\alpha_2}$ is the stabilizer of the line $E_1$. Consequently the projection $f_{\alpha_1}:X_B\to G/P_{\alpha_1}$ forgets the line and keeps the plane, while $f_{\alpha_2}$ forgets the plane and keeps the line. [F1, F3, F4, algebra]

1.4 Both fibres are projective lines. Over a plane $H$ the fibre of $f_{\alpha_1}$ is the set of lines $L\subset H$, which is $\mathbb PH\cong\mathbb P^1$; over a line $L$ the fibre of $f_{\alpha_2}$ is the set of planes $H\supset L$, which corresponds to the set of lines in $\mathbb C^3/L$, that is $\mathbb P(\mathbb C^3/L)\cong\mathbb P^1$. Both descriptions have exactly the two-chart shape $z\mapsto u_{-\alpha}(z)B$, $t\mapsto u_\alpha(t)n_\alpha B$ of [F1], with $z$ a coordinate on $\mathbb A^1=\mathbb P^1\setminus\{\infty\}$ and $t=z^{-1}$ on the other chart. [F1, F3, algebra]

2.1 Fibre degrees. By [F2] the degree of $\mathcal L_{\omega_i}$ on the fibre of the projection attached to $\alpha_j$ is $\langle\omega_i,\alpha_j^\vee\rangle=\delta_{ij}$ by step 1.1; hence the fibre-degree pair of $\mathcal L_{\omega_1}$ is $(1,0)$ and that of $\mathcal L_{\omega_2}$ is $(0,1)$ on the two families of fibres. In particular $\mathcal L_{\omega_1}\otimes\mathcal L_{\omega_2}\cong\mathcal L_{\omega_1+\omega_2}=\mathcal L_\rho$ has fibre-degree pair $(1,1)$, and $\omega_{G/B}\cong\mathcal L_{-2\rho}$ has degree $\langle-2\rho,\alpha_j^\vee\rangle=-2$ on both families, matching the behaviour $\mathcal O(-2)$ of a canonical bundle on the fibres of a $\mathbb P^1$-bundle. [F2, F3, F6, step 1.1, step 1.3]

3.1 Wrap-up and the Axiom of Choice. The two projections of the statement are $f_{\alpha_1}$ and $f_{\alpha_2}$ of step 1.3, with fibers $\mathbb P^1$ by step 1.4 and fibre-degree pairs $(1,0)$, $(0,1)$ by step 2.1; the consistency check with $\omega_{G/B}$ is step 2.1. The Axiom of Choice [A1] is assumed in the statement and inherited from the named suppliers [F1]-[F6]; no choice is made in the example itself, whose only selections are the finitely many standard data $\alpha_i,\omega_i$ and the standard flag. [A1, F1, F2, F3, F4, F5, F6, step 2.1] ∎
