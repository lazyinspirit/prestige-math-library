---
id: ex-a-nonreduced-bc-root-system-from-a-real-form
kind: example
title: A nonreduced bc root system from a real form
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-restricted-root-systems-may-be-nonreduced, def-restricted-root-and-restricted-root-space, def-maximal-split-abelian-subspace-and-real-rank, def-axiom-of-choice, def-cartan-involution-of-a-real-semisimple-lie-algebra, def-cartan-decomposition-of-a-real-semisimple-lie-algebra, def-reduced-crystallographic-euclidean-root-system, ex-classical-simple-lie-algebras-and-their-killing-forms, prop-complexification-preserves-semisimplicity, def-killing-form-of-a-finite-dimensional-lie-algebra, ex-unitary-and-special-unitary-lie-groups]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §4, Example 2 (su(p,q)) with the explicit restricted-root spaces, printed pp. 371-372; Chapter VI, §11, the Cayley-transform computation of the restricted roots of su(p,n-p) and table (6.107), printed pp. 422-424"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 43, §§43.5-43.6, printed pp. 220-222"
landmark: false
proof_strategy: direct
---

## Example

Assume the Axiom of Choice. Fix integers $1\le p<q$ and put $m=p+q$. Let

$$\mathfrak g_0=\mathfrak{su}(p,q)=\{X\in M_m(\mathbb C):X^{*}I+IX=0,\ \operatorname{tr}X=0\},\qquad I=\operatorname{diag}(I_p,-I_q),$$

written in block form as $X=\begin{pmatrix}A&C\\ C^{*}&E\end{pmatrix}$ with $A\in\mathfrak u(p)$, $E\in\mathfrak u(q)$, $\operatorname{tr}A+\operatorname{tr}E=0$ and $C\in\mathbb C^{p\times q}$, with Cartan involution $\theta(X)=-X^{*}$ and Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, $\mathfrak k_0=\{X:C=0\}$, $\mathfrak p_0=\{X:A=E=0\}$. Let

$$\mathfrak a=\{H_D:D=\operatorname{diag}(d_1,\dots,d_p)\in M_p(\mathbb R)\},\qquad H_D=\begin{pmatrix}0&[D\ \ 0]\\ [D\ \ 0]^{*}&0\end{pmatrix},$$

where $[D\ \ 0]$ is the $p\times q$ matrix whose first $p$ columns are $D$, and let $f_i(H_D)=d_i$. Then $\mathfrak a$ is a maximal abelian subspace of $\mathfrak p_0$ and the restricted root system of $(\mathfrak g_0,\mathfrak a)$ is

$$\Sigma=\{\pm f_i\pm f_j:\ i\ne j\}\cup\{\pm f_i\}\cup\{\pm 2f_i\},$$

the classical nonreduced system of type $BC_p$, with multiplicities $2$ for
$\pm f_i\pm f_j$ ($i\ne j$), $2(q-p)$ for $\pm f_i$ and $1$ for $\pm 2f_i$
([[def-restricted-root-and-restricted-root-space]],
[[def-maximal-split-abelian-subspace-and-real-rank]],
[[prop-restricted-root-systems-may-be-nonreduced]]).

## Facts & Assumptions

**Given:** The Axiom of Choice; integers $1\le p<q$ and $m=p+q$; the algebra $\mathfrak g_0=\mathfrak{su}(p,q)$ with its block form as displayed, the Cartan involution $\theta(X)=-X^{*}$, the Cartan decomposition $\mathfrak k_0\oplus\mathfrak p_0$, and the subspace $\mathfrak a$ of the displayed matrices $H_D$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters only through the restricted-root decomposition interface of [L4] and the classification statement of [L5].

[L1] The Killing form of $\mathfrak{sl}_m(\mathbb C)$ is $B(X,Y)=2m\operatorname{tr}(XY)$, the complexification of $\mathfrak{su}(p,q)$ is $\mathfrak{sl}_m(\mathbb C)$, and the Killing form of $\mathfrak{su}(p,q)$ is the restriction of the Killing form of the complexification to the real form ([[ex-classical-simple-lie-algebras-and-their-killing-forms]], [[prop-complexification-preserves-semisimplicity]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[ex-unitary-and-special-unitary-lie-groups]]).

[L2] $\theta$ is an involutive automorphism with $B_\theta(X,Y)=-B(X,\theta Y)$ positive definite, so it is a Cartan involution and $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ is its Cartan decomposition ([[def-cartan-involution-of-a-real-semisimple-lie-algebra]], [[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]]).

[L3] $\mathfrak a\subseteq\mathfrak p_0$ is a maximal abelian subspace exactly when it is abelian and equals its own centralizer in $\mathfrak p_0$; its dimension is the real rank ([[def-maximal-split-abelian-subspace-and-real-rank]]).

[L4] A restricted root of $(\mathfrak g_0,\mathfrak a)$ is a nonzero real functional $\lambda$ on $\mathfrak a$ with nonzero root space $\mathfrak g_0^{\lambda}=\{X:[H,X]=\lambda(H)X\text{ for all }H\in\mathfrak a\}$, whose dimension is its multiplicity ([[def-restricted-root-and-restricted-root-space]]).

[L5] Restricted root systems of real semisimple Lie algebras need not be reduced: both $\lambda$ and $2\lambda$ can occur, and every irreducible finite nonreduced restricted-root system has type $BC_r$ ([[prop-restricted-root-systems-may-be-nonreduced]]).

[L6] A crystallographic root system is reduced when $\mathbb R\alpha\cap\Phi=\{\alpha,-\alpha\}$ for every root $\alpha$ ([[def-reduced-crystallographic-euclidean-root-system]]).





**Proof technique:** direct block-matrix computation.

1.1 The displayed block form is correct and $\theta$ is a Cartan involution. Writing $X=\begin{pmatrix}A&C\\ C^{*}&E\end{pmatrix}$, the two conditions $X^{*}I+IX=0$ and $\operatorname{tr}X=0$ are equivalent to $A^{*}+A=0$, $E^{*}+E=0$ and $\operatorname{tr}A+\operatorname{tr}E=0$, so $\mathfrak k_0=\{X:C=0\}$ and $\mathfrak p_0=\{X:A=E=0\}$ for $\theta(X)=-X^{*}$; moreover $B_\theta(X,X)=-2m\operatorname{tr}(X(-X^{*}))=2m\sum_{i,j}|X_{ij}|^2>0$ for $X\ne0$ by [L1], so $\theta$ is a Cartan involution by [L2] and the decomposition is the one claimed. [given, L1, L2, algebra]

2.1 Each $H_D$ lies in $\mathfrak p_0$, and $\mathfrak a$ is abelian: $H_D$ has $A=E=0$ and real $C=[D\ \ 0]$, so $H_D\in\mathfrak p_0$, and for $B=[D\ \ 0]$, $B'=[D'\ \ 0]$ one computes $[H_D,H_{D'}]=\begin{pmatrix}BB'^{*}-B'B^{*}&0\\ 0&B^{*}B'-B'^{*}B\end{pmatrix}$ with $BB'^{*}=DD'$ and $B^{*}B'=\operatorname{diag}(DD',0)$ diagonal, so both blocks vanish because diagonal matrices commute. [given, step 1.1, algebra]

2.2 The adjoint action has the block form $\left[H_D,\begin{pmatrix}A&C\\ C^{*}&E\end{pmatrix}\right]=\begin{pmatrix}DC_1^{*}-C_1D&[DE_{11}-AD,\ DE_{12}]\\ \begin{bmatrix}DA-E_{11}D\\ -E_{21}D\end{bmatrix}&\begin{pmatrix}DC_1-C_1^{*}D&DC_2\\ -C_2^{*}D&0\end{pmatrix}\end{pmatrix}$, where $C=[C_1\ \ C_2]$ and $E=\begin{pmatrix}E_{11}&E_{12}\\ E_{21}&E_{22}\end{pmatrix}$ are the block decompositions matching the sizes $p$ and $q-p$. This follows by writing $[H_D,Y]=H_DY-YH_D$ and multiplying block matrices, using $C^{*}=\begin{pmatrix}C_1^{*}\\ C_2^{*}\end{pmatrix}$ and $B^{*}=\begin{pmatrix}D\\ 0\end{pmatrix}$. [given, step 1.1, algebra]

3.1 The subspace $\mathfrak a$ is maximal abelian in $\mathfrak p_0$. Let $Y=\begin{pmatrix}0&C\\ C^{*}&0\end{pmatrix}\in\mathfrak p_0$ satisfy $[H_D,Y]=0$ for every real diagonal $D$. With $C=[C_1\ \ C_2]$ split into its first $p$ and remaining $q-p$ columns, the four blocks of the commutator are $DC_1^{*}-C_1D$, $DC_2$, $-C_2^{*}D$ and $DC_1-C_1^{*}D$, all of which must vanish. From $DC_2=0$ for every real diagonal $D$, taking $D=E_{kk}$ gives $C_2=0$. The identity $DC_1^{*}=C_1D$ says $d_k\overline{C_{lk}}=C_{kl}d_l$ for all $k,l$ and all real diagonal entries; for $k\ne l$ the entries $d_k,d_l$ vary independently, so both $C_{kl}$ and $C_{lk}$ vanish, while for $k=l$ the identity gives $\overline{C_{kk}}=C_{kk}$. The remaining block identities are then satisfied automatically, and they impose no further condition. Hence $C=[D\ \ 0]$ with $D=\operatorname{diag}(C_{11},\dots,C_{pp})$ real diagonal, that is $Y=H_D$, so the centralizer of $\mathfrak a$ in $\mathfrak p_0$ is $\mathfrak a$ itself and $\mathfrak a$ is maximal abelian by [L3]. [step 2.1, L3, algebra]

3.2 Roots $\pm(f_i-f_j)$ and $\pm(f_i+f_j)$ for $i\ne j$, each of multiplicity $2$. Fix $i\ne j$ and consider an element whose only possibly nonzero entries in the relevant slots are $z=C_{ij}$, $w=C_{ji}$, $a=A_{ij}$ and $e=(E_{11})_{ij}$, the companion entries being determined by skew-Hermiticity. By step 2.2 the eigen-relation $[H_D,Y]=\lambda(H_D)Y$ for a functional $\lambda=c_if_i+c_jf_j$ is equivalent to the four scalar equations $a=\frac{d_i\overline w-d_jz}{\lambda(H_D)}$, $e=\frac{d_iz-d_j\overline w}{\lambda(H_D)}$, $z=\frac{d_ie-d_ja}{\lambda(H_D)}$ and $w=\frac{d_i\overline a-d_j\overline e}{\lambda(H_D)}$. Substituting the first two into the last two gives $\lambda^2z=(d_i^2+d_j^2)z-2d_id_j\overline w$ and its conjugate $\lambda^2\overline w=(d_i^2+d_j^2)\overline w-2d_id_jz$, hence $\lambda^2(z+\overline w)=(d_i-d_j)^2(z+\overline w)$ and $\lambda^2(z-\overline w)=(d_i+d_j)^2(z-\overline w)$. Since $\lambda=c_id_i+c_jd_j$, a nonzero solution has either $(c_i,c_j)=\pm(1,-1)$ with $z=\overline w$, or $(c_i,c_j)=\pm(1,1)$ with $z=-\overline w$. The equations then determine $a,e$ as follows: $a=e=z$ for $\lambda=f_i-f_j$ and $a=e=-z$ for $\lambda=-(f_i-f_j)$; $a=-z$, $e=z$ for $\lambda=f_i+f_j$ and $a=z$, $e=-z$ for $\lambda=-(f_i+f_j)$. Each of the four cases is a complex line in $(z,w)$ with $a,e$ determined, hence a two-dimensional real eigenspace; for instance $(z,w,a,e)=(1,1,1,1)$ satisfies the four equations with $\lambda(H_D)=d_i-d_j$ and $(1,-1,-1,1)$ satisfies them with $\lambda(H_D)=d_i+d_j$. [step 2.2, L4, algebra]

3.3 Roots $\pm f_i$, each of multiplicity $2(q-p)$. Fixing $i$ and a column $p+k$ with $1\le k\le q-p$, the entries $z=C_{i,p+k}$ and $e=(E_{12})_{i,k}$ are subject to the two equations $e=c^{-1}z$ and $z=c^{-1}e$ for a functional $cf_i$; hence $c=\pm1$, and for $c=1$ the eigenspace is $\{e=z\}$ while for $c=-1$ it is $\{e=-z\}$, each a complex line, that is two real dimensions per pair $(i,k)$. Summing over the $q-p$ values of $k$ gives multiplicity $2(q-p)$ for $f_i$ and for $-f_i$. [step 2.2, L4, algebra]

4.1 Roots $\pm2f_i$, each of multiplicity $1$. For the diagonal slot $i=j$ the same equations read $a=\frac{\overline z-z}{c}$, $e=\frac{z-\overline z}{c}$ and $z=\frac{e-a}{c}$ for a functional $cf_i$; substituting the first two into the third gives $c^2z=2(z-\overline z)=4i\operatorname{Im}z$, so $z$ is pure imaginary, and writing $z=i\beta$ with $\beta\ne0$ for a nonzero eigenvector gives $c=\pm2$. With $z=i\beta$ one has $a=-i\beta$, $e=i\beta$ for $c=2$ and $a=i\beta$, $e=-i\beta$ for $c=-2$, so these are the one-dimensional real spaces of the roots $2f_i$ and $-2f_i$. [step 2.2, step 3.2, L4, algebra]

5.1 The list is complete. The zero functional contributes the centralizer $\mathfrak g_0^{0}=\mathfrak m\oplus\mathfrak a$ of $\mathfrak a$ in $\mathfrak g_0$; from the block form of step 2.2 its elements have $C_1$ diagonal with purely imaginary entries, $C_2=0$, $E_{12}=E_{21}=0$ and $E_{11}=A$, with $\operatorname{tr}A+\operatorname{tr}E=0$, so $\dim\mathfrak m=p+(q-p)^2-1$ and $\dim\mathfrak g_0^{0}=(q-p)^2+2p-1$. Adding the dimensions found in steps 3.2, 4.1 and 3.3, namely $4\cdot\binom{p}{2}\cdot2=4p(p-1)$ for the roots $\pm f_i\pm f_j$, $2p$ for the roots $\pm2f_i$ and $2p\cdot2(q-p)=4p(q-p)$ for the roots $\pm f_i$, gives $(p+q)^2-1=\dim\mathfrak g_0$, so no joint eigenspace is missing and the multiplicities are as claimed. [step 3.1, step 3.2, step 4.1, step 3.3, L4, algebra]

6.1 Consequently the restricted roots are exactly $\pm f_i\pm f_j$ ($i\ne j$), $\pm f_i$ and $\pm 2f_i$, with the multiplicities computed in steps 3.2, 3.3 and 4.1, and the system is of type $BC_p$, the classical nonreduced system in $p$ coordinates. It is not reduced in the sense of [L6], because $f_i$ is a root and $2f_i$ is a root while $2f_i\ne\pm f_i$; this realizes the phenomenon recorded in [L5]. The real rank is $\dim\mathfrak a=p=\min(p,q)$ and the multiplicities agree with the standard tables. [step 3.2, step 4.1, step 3.3, step 5.1, L4, L5, L6]

7.1 The result agrees with the source computation: the restricted roots of $\mathfrak{su}(p,q)$ are the projections of the roots $e_k-e_l$ of the complexification onto $\mathfrak a$, giving $\pm f_k\pm f_l$, $\pm2f_k$ and, when $p\ne q$, the roots $\pm f_k$, so that the system is $(BC)_r$ where $r$ is the smaller of the two indices. The table of real ranks and restricted root systems records $(BC)_q$ for $\mathfrak{su}(p,q)$ with $p>q$ in its convention in which the second index is the smaller one; under the present convention, in which the first index $p$ is the smaller, the same statement reads $BC_p$. [step 5.1, step 6.1, algebra]

8.1 Endpoints and scope: for $p=1<q$ the list collapses to $\{\pm f_1,\pm2f_1\}$ with multiplicities $2(q-1)$ and $1$, the nonreduced rank-one system $BC_1$, and the dimension count of step 5.1 reads $4(q-1)+2+(q-1)^2+1=q^2+2q=\dim\mathfrak{su}(1,q)$; the case $p=q$ is excluded because then $\pm f_i$ are not restricted roots and the system is reduced of type $C_p$, and $p=0$ is excluded because $\mathfrak{su}(0,q)$ is compact and has no restricted roots at all. The Axiom of Choice is inherited solely through [L4] and [L5]. [given, step 3.3, step 5.1, step 6.1, A1, algebra] ∎
