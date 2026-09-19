---
id: prop-restricted-root-systems-may-be-nonreduced
kind: proposition
title: Restricted root systems may be nonreduced
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-restricted-root-and-restricted-root-space, thm-restricted-root-space-decomposition, prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition, def-reduced-crystallographic-euclidean-root-system, def-reducible-and-irreducible-root-system, thm-rank-two-root-system-classification, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching, thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix, thm-classification-of-irreducible-reduced-crystallographic-root-systems, ex-classical-root-systems-in-euclidean-coordinates, ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups, thm-finite-dimensional-representations-of-sl-two, prop-complexification-preserves-semisimplicity, ex-classical-simple-lie-algebras-and-their-killing-forms, def-classical-complex-matrix-lie-algebras, thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §4, Examples after Proposition 6.40 (su(p,q) for p > q), §5, Proposition 6.52 and Corollary 6.53, printed pp. 370-381"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §§5 and 8, Proposition 2.48, Lemma 2.91 and Proposition 2.92, printed pp. 152-156 and 184-186"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g_0$ be a finite-dimensional real
semisimple Lie algebra with Cartan involution $\theta$, Cartan decomposition
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, Killing form $B$, inner
product $B_\theta(X,Y)=-B(X,\theta Y)$, and a maximal abelian subspace
$\mathfrak a\subseteq\mathfrak p_0$, with restricted-root system
$\Sigma=\Sigma(\mathfrak g_0,\mathfrak a)$
([[def-restricted-root-and-restricted-root-space]],
[[thm-restricted-root-space-decomposition]]). Let $G$ be a connected
semisimple Lie group with finite center and Lie algebra $\mathfrak g_0$, let
$\Theta$ be a global Cartan involution of $G$ with $d\Theta_e=\theta$, and put
$K=G^\Theta$, a closed compact subgroup with Lie algebra $\mathfrak k_0$
([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]).
Write $\operatorname{Ad}$ for the adjoint representation of $G$ and put
$$N_K(\mathfrak a)=\{k\in K:\operatorname{Ad}(k)\mathfrak a=\mathfrak a\},\qquad Z_K(\mathfrak a)=\{k\in K:\operatorname{Ad}(k)|_{\mathfrak a}=\mathrm{id}_{\mathfrak a}\};$$
the assertions below depend only on the restriction of $\operatorname{Ad}$
to $K$. Write
$(\,\cdot\,,\,\cdot\,)$
for the restriction of $B_\theta$ to $\mathfrak a$. For
$\lambda\in\mathfrak a^*$ let $H_\lambda\in\mathfrak a$ be the vector with
$(H_\lambda,H)=\lambda(H)$ for every $H\in\mathfrak a$, and put
$\langle\lambda,\mu\rangle=(H_\lambda,H_\mu)$ and
$|\lambda|^2=\langle\lambda,\lambda\rangle$, so that
$\langle\,\cdot\,,\,\cdot\,\rangle$ is an inner product on
$\mathfrak a^*$ with $|\lambda|^2>0$ for $\lambda\ne0$. For $\lambda\ne0$ let
$s_\lambda$ be the orthogonal reflection
$$s_\lambda(\mu)=\mu-2\langle\mu,\lambda\rangle|\lambda|^{-2}\lambda .$$
Call $\Sigma$ **reducible** if there are nonzero orthogonal subspaces
$E_1,E_2\subseteq\mathfrak a^*$ with $\Sigma\subseteq E_1\cup E_2$ and
$\Sigma\cap E_i\ne\emptyset$ for $i=1,2$, and **irreducible** otherwise. Put
$\Sigma_s=\{\alpha\in\Sigma:\alpha/2\notin\Sigma\}$ and
$\Psi=\{\alpha\in\Sigma_s:2\alpha\in\Sigma\}$. Then:

(a) $\Sigma$ is finite, spans $\mathfrak a^*$, and satisfies
$s_\lambda(\Sigma)=\Sigma$ as well as
$2\langle\mu,\lambda\rangle|\lambda|^{-2}\in\mathbb Z$ for all
$\mu,\lambda\in\Sigma$; moreover for every $\lambda\in\Sigma$ there is
$k\in N_K(\mathfrak a)$
such that the dual action of $\operatorname{Ad}(k)$ on $\mathfrak a^*$ is
$s_\lambda$. Thus $\Sigma$ is a finite abstract root system in
$\mathfrak a^*$ with the reflections $s_\lambda$ realised inside
$N_K(\mathfrak a)$.

(b) Restricted-root systems need not be reduced: both a functional and its
double can occur. Explicitly, for
$\mathfrak g_0=\mathfrak{su}(2,1)=\{X\in M_3(\mathbb C):X^*J+JX=0,\
\operatorname{tr}X=0\}$ with $J=\operatorname{diag}(1,1,-1)$,
$\theta(X)=-X^*$ and $\mathfrak a=\mathbb RH$,
$H=E_{13}+E_{31}$, the functional $f\in\mathfrak a^*$ with $f(H)=1$ satisfies
$$\Sigma=\{\pm f,\pm2f\},\qquad m_{\pm f}=2,\qquad m_{\pm2f}=1 .$$

(c) Let $\Sigma$ be irreducible and nonreduced. Then with
$r=\dim\mathfrak a\ge1$ there is a linear isomorphism
$\varphi:\mathfrak a^*\to\mathbb R^r$ with $\varphi(\Sigma)=BC_r$, where
$$BC_r=\{\pm e_i\}\cup\{\pm e_i\pm e_j:1\le i<j\le r\}\cup\{\pm2e_i\}$$
for the standard orthonormal basis $e_1,\dots,e_r$, and $\varphi$ preserves all
Cartan integers: $2\langle\varphi(\mu),\varphi(\lambda)\rangle
|\varphi(\lambda)|^{-2}=2\langle\mu,\lambda\rangle|\lambda|^{-2}$ for all
$\mu,\lambda\in\Sigma$. In particular the irreducible nonreduced restricted-root
systems are exactly the systems of type $BC_r$: the doubled roots form the
$B_r$-part $\{\pm e_i\}$ and the reduced part of $\Sigma$ is the type-$B_r$
system $\{\pm e_i\}\cup\{\pm e_i\pm e_j\}$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a real semisimple $\mathfrak g_0$ with Cartan involution $\theta$, Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, Killing form $B$, inner product $B_\theta(X,Y)=-B(X,\theta Y)$, maximal abelian $\mathfrak a\subseteq\mathfrak p_0$, and restricted-root system $\Sigma$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the finite-dimensional representation theory of [L6] used for the integrality of the Cartan integers.

[L1] $\Sigma$ is finite, $\mathfrak g_0=\mathfrak g_0^0\oplus\bigoplus_{\lambda\in\Sigma}\mathfrak g_0^\lambda$ with $\mathfrak g_0^0=Z_{\mathfrak g_0}(\mathfrak a)=\mathfrak a\oplus\mathfrak m$, $\mathfrak m=Z_{\mathfrak k_0}(\mathfrak a)$, $[\mathfrak g_0^\lambda,\mathfrak g_0^\mu]\subseteq\mathfrak g_0^{\lambda+\mu}$ and $\theta\mathfrak g_0^\lambda=\mathfrak g_0^{-\lambda}$, and for $H\in\mathfrak a$ with $\lambda(H)\ne0$ for all $\lambda\in\Sigma$ one has $Z_{\mathfrak g_0}(H)=\mathfrak g_0^0$ ([[thm-restricted-root-space-decomposition]], [[def-restricted-root-and-restricted-root-space]]).

[L2] $B$ is invariant and nondegenerate, $B_\theta$ is positive definite, $B(\theta X,\theta Y)=B(X,Y)$, $B$ is negative definite on $\mathfrak k_0$ and positive definite on $\mathfrak p_0$ ([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]).

[L3] $\Sigma_s$ and $2\Psi$ behave as follows at the level of subsets of $\mathfrak a^*$: the definitions above give $\Sigma_s\subseteq\Sigma$ and $2\Psi\subseteq\Sigma$, and $\mathbb R\alpha\cap\Sigma_s=\{\pm\alpha\}$ will follow from the computation of step 5.2.

[L4] Rank-two facts for a reduced crystallographic root system $\Phi$ with nonproportional roots $\alpha,\beta$: $n_{\alpha\beta}n_{\beta\alpha}=4\cos^2\theta\in\{0,1,2,3\}$ with the listed length-ratio alternatives; $(\alpha,\beta)>0$ implies $\alpha-\beta\in\Phi$; distinct simple roots satisfy $(\alpha,\beta)\le0$; and the irreducible rank-two systems are $A_2$, $B_2\cong C_2$ and $G_2$ ([[thm-rank-two-root-system-classification]]). Moreover the simple roots of a positive system form a basis and every root is a signed integral combination of them ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

[L5] If $\Gamma$ is the Dynkin diagram of an irreducible reduced crystallographic root system, then $\Gamma$ is a tree, has at most one multiple edge, and in the case of a multiple edge the underlying graph is a path with a double edge at an end, a double edge in the middle of a four-vertex path, or a two-vertex triple edge ([[lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching]]); a based root system is determined up to isomorphism by its Cartan matrix ([[thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix]]), and the irreducible reduced crystallographic root systems are $A_n,B_n,C_n,D_n,E_6,E_7,E_8,F_4,G_2$ with the low-rank coincidences $B_1=C_1=A_1$, $B_2=C_2$ ([[thm-classification-of-irreducible-reduced-crystallographic-root-systems]]). The standard systems $B_r=\{\pm e_i\}\cup\{\pm e_i\pm e_j\}$ and $C_r=\{\pm2e_i\}\cup\{\pm e_i\pm e_j\}$ are reduced crystallographic root systems with their standard simple roots and Dynkin diagrams ([[ex-classical-root-systems-in-euclidean-coordinates]]), and $W(B_r)$ is the group of signed permutations of the coordinates, which acts transitively on $\{\pm e_i\}$ and on $\{\pm e_i\pm e_j\}$ ([[ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups]]).

[L6] A finite-dimensional module over a copy of $\mathfrak{sl}_2$ has the standard diagonal element acting diagonalisably with integer eigenvalues ([[thm-finite-dimensional-representations-of-sl-two]]).

[L7] A real finite-dimensional Lie algebra is semisimple if and only if its complexification is ([[prop-complexification-preserves-semisimplicity]]), and the Killing form of $\mathfrak{sl}_3(\mathbb C)$ is nondegenerate ([[ex-classical-simple-lie-algebras-and-their-killing-forms]], [[def-classical-complex-matrix-lie-algebras]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] the restriction $(\,\cdot\,,\,\cdot\,)$ of $B_\theta$ to $\mathfrak a\subseteq\mathfrak p_0$ is a positive definite inner product; for $\lambda\in\mathfrak a^*$ the vector $H_\lambda\in\mathfrak a$ with $(H_\lambda,H)=\lambda(H)$ for all $H\in\mathfrak a$ exists and is unique, and $\langle\lambda,\mu\rangle=(H_\lambda,H_\mu)$ is an inner product on $\mathfrak a^*$ with $|\lambda|^2>0$ for $\lambda\ne0$; also $\lambda(H_\mu)=\langle\lambda,\mu\rangle$; the reflection $s_\lambda(\mu)=\mu-2\langle\mu,\lambda\rangle|\lambda|^{-2}\lambda$ is orthogonal, fixes $\lambda^{\perp}$ pointwise and sends $\lambda$ to $-\lambda$; put $H'_\lambda=2|\lambda|^{-2}H_\lambda$, so that $\lambda(H'_\lambda)=2$. [L2, algebra]

1.2 Witness setup: let $J=\operatorname{diag}(1,1,-1)$ and $\mathfrak g_0=\mathfrak{su}(2,1)=\{X\in M_3(\mathbb C):X^*J+JX=0,\ \operatorname{tr}X=0\}$ with $\theta(X)=-X^*$; then $\theta$ is an involutive automorphism of $\mathfrak g_0$, and $X\in M_3(\mathbb C)$ lies in $\mathfrak g_0$ exactly when $X=\begin{pmatrix}a&b\\ b^*&d\end{pmatrix}$ with $a\in u(2)$, $b\in\mathbb C^2$ and $d=-\operatorname{tr}a\in i\mathbb R$, so that $k_0=\{X\in\mathfrak g_0:b=0\}$ and $p_0=\{X\in\mathfrak g_0:a=0,\ d=0\}=\{zE_{13}+wE_{23}+\bar zE_{31}+\bar wE_{32}:z,w\in\mathbb C\}$; write $a=\begin{pmatrix}iA&\gamma\\ -\bar\gamma&iB\end{pmatrix}$ with $A,B\in\mathbb R$, $\gamma\in\mathbb C$ and $b=\begin{pmatrix}p\\ q\end{pmatrix}$; the element $H=E_{13}+E_{31}$ lies in $p_0$ and $\mathfrak a=\mathbb RH$ is a $1$-dimensional subspace of $p_0$; finally $\mathfrak g_0$ is semisimple, because $\mathfrak g_0^{\mathbb C}=\mathfrak{sl}_3(\mathbb C)$ has nondegenerate Killing form and $\mathfrak g_0$ is its real form. [L7, algebra]

1.3 $\Sigma$ spans $\mathfrak a^*$: if $H\in\mathfrak a$ satisfies $\lambda(H)=0$ for every $\lambda\in\Sigma$, then $[H,\mathfrak g_0^\lambda]=0$ for every $\lambda\in\Sigma$ and also $[H,\mathfrak g_0^0]=0$ because $H\in\mathfrak a\subseteq\mathfrak g_0^0=Z_{\mathfrak g_0}(\mathfrak a)$, so $[H,\mathfrak g_0]=0$ by [L1], i.e. $H\in Z(\mathfrak g_0)=0$ because $\mathfrak g_0$ is semisimple; hence no nonzero $H\in\mathfrak a$ annihilates $\Sigma$, and $\Sigma$ spans $\mathfrak a^*$. [L1, algebra]

1.4 Notation: $\Sigma$ is reducible if there are nonzero orthogonal subspaces $E_1,E_2\subseteq\mathfrak a^*$ with $\Sigma\subseteq E_1\cup E_2$ and $\Sigma\cap E_i\ne\emptyset$ for $i=1,2$, and irreducible otherwise; $\Sigma_s=\{\alpha\in\Sigma:\alpha/2\notin\Sigma\}$ and $\Psi=\{\alpha\in\Sigma_s:2\alpha\in\Sigma\}$. [given]

2.1 Let $\lambda\in\Sigma$ and choose $0\ne E_\lambda\in\mathfrak g_0^\lambda$; then $B(E_\lambda,\theta E_\lambda)=-B_\theta(E_\lambda,E_\lambda)<0$ by [L2], the bracket $[E_\lambda,\theta E_\lambda]$ lies in $\mathfrak g_0^0$ by [L1] and satisfies $\theta[E_\lambda,\theta E_\lambda]=-[E_\lambda,\theta E_\lambda]$, hence lies in $\mathfrak a$, and for every $H\in\mathfrak a$ one has $B([E_\lambda,\theta E_\lambda],H)=B(E_\lambda,[\theta E_\lambda,H])=\lambda(H)B(E_\lambda,\theta E_\lambda)=B(B(E_\lambda,\theta E_\lambda)H_\lambda,H)$, so $[E_\lambda,\theta E_\lambda]=B(E_\lambda,\theta E_\lambda)H_\lambda$; rescaling $E_\lambda$ by a positive real number we arrange $B_\theta(E_\lambda,E_\lambda)=2|\lambda|^{-2}$, that is $B(E_\lambda,\theta E_\lambda)=-2|\lambda|^{-2}$, and then $[E_\lambda,\theta E_\lambda]=-H'_\lambda$. [L1, L2, step 1.1, algebra]

2.2 Witness computation, part 1: for $X\in\mathfrak g_0$ with coordinates $(A,B,\gamma,p,q)$ as in step 1.2, a direct computation of $[H,X]$ gives the new coordinates $A'=\dfrac{\bar p-p}{i}$, $B'=0$, $\gamma'=\bar q$, $p'=-i(2A+B)$, $q'=\bar\gamma$; hence $[H,X]=0$ if and only if $p\in\mathbb R$, $q=\gamma=0$ and $B=-2A$; consequently $Z_{p_0}(H)=\{p(E_{13}+E_{31}):p\in\mathbb R\}=\mathfrak a$, and $\mathfrak a$ is maximal abelian in $\mathfrak p_0$, since every abelian subspace of $\mathfrak p_0$ containing $\mathfrak a$ is contained in $Z_{p_0}(H)=\mathfrak a$. [step 1.2, algebra]

3.1 The normalization of step 2.1 gives the bracket relations $[H'_\lambda,E_\lambda]=2E_\lambda$, $[H'_\lambda,\theta E_\lambda]=-2\theta E_\lambda$ and $[E_\lambda,\theta E_\lambda]=-H'_\lambda$, so the real span of $H'_\lambda,E_\lambda,\theta E_\lambda$ is a three-dimensional Lie subalgebra of $\mathfrak g_0$ isomorphic to $\mathfrak{sl}_2(\mathbb R)$ with $H'_\lambda$ corresponding to $\operatorname{diag}(1,-1)$; complexifying, its complexification is a copy of $\mathfrak{sl}_2$ in $\mathfrak g_0^{\mathbb C}$ acting on the finite-dimensional complex vector space $\mathfrak g_0^{\mathbb C}$. [step 2.1, algebra]

3.2 Witness computation, part 2: solving the coordinate equations of step 2.2 for eigenvectors of $\operatorname{ad}H$ shows that the eigenvalues are $0$ with multiplicity $2$, $\pm1$ with multiplicity $2$ each, and $\pm2$ with multiplicity $1$ each; explicitly $[H,X]=2X$ for $X=i(E_{33}-E_{11}+E_{13}-E_{31})$, the elements $E_{12}-E_{21}+E_{23}+E_{32}$ and $i(E_{12}+E_{21}-E_{23}+E_{32})$ of $\mathfrak g_0$ satisfy $[H,X]=X$ and are linearly independent, hence span the eigenspace for the functional $f$ with $f(H)=1$, and $\ker(\operatorname{ad}H)=\mathfrak g_0^0$ is spanned by $H$ and $i(E_{11}-2E_{22}+E_{33})$. [step 2.2, algebra]

4.1 Let $k_\lambda=\exp\bigl(\tfrac{\pi}{2}(E_\lambda+\theta E_\lambda)\bigr)$; since $\theta(E_\lambda+\theta E_\lambda)=E_\lambda+\theta E_\lambda$ one has $E_\lambda+\theta E_\lambda\in\mathfrak k_0$, so $k_\lambda\in K=\exp(\mathfrak k_0)$; moreover $(\operatorname{ad}(E_\lambda+\theta E_\lambda))H=0$ for $H\in\ker\lambda$ and, with $X=\tfrac{\pi}{2}(E_\lambda+\theta E_\lambda)$, $(\operatorname{ad}X)H'_\lambda=\pi(\theta E_\lambda-E_\lambda)$ and $(\operatorname{ad}X)^2H'_\lambda=-\pi^2H'_\lambda$, so the exponential series gives $\operatorname{Ad}(k_\lambda)H'_\lambda=\cos(\pi)H'_\lambda+\sin(\pi)(\theta E_\lambda-E_\lambda)=-H'_\lambda$; hence $\operatorname{Ad}(k_\lambda)$ preserves $\mathfrak a=\ker\lambda\oplus\mathbb RH'_\lambda$, acts as the identity on $\ker\lambda$ and as $-1$ on $H'_\lambda$, i.e. acts on $\mathfrak a$ by the reflection with fixed hyperplane $\ker\lambda$. [step 3.1, algebra]

4.2 Witness computation, part 3: by step 3.2 the restricted-root system of the pair $(\mathfrak g_0,\mathfrak a)$ of step 1.2 is $\Sigma=\{\pm f,\pm2f\}$ with $f(H)=1$, the spaces $\mathfrak g_0^{\pm f}$ being the two $2$-dimensional eigenspaces and $\mathfrak g_0^{\pm2f}$ the two $1$-dimensional eigenspaces; hence $m_{\pm f}=2$ and $m_{\pm2f}=1$, and this restricted-root system is not reduced, since both $f$ and $2f$ occur. [step 3.2]

4.3 Integrality: let $\mu,\lambda\in\Sigma$; by step 3.1 the copy of $\mathfrak{sl}_2(\mathbb C)$ spanned by $H'_\lambda,E_\lambda,\theta E_\lambda$ acts on $\mathfrak g_0^{\mathbb C}$, and $H'_\lambda$ is its standard diagonal element; by [L6] the operator $\operatorname{ad}H'_\lambda$ is diagonalisable with integer eigenvalues on $\mathfrak g_0^{\mathbb C}$; since $\mathfrak g_0^\mu$ lies in the eigenspace of $\operatorname{ad}H'_\lambda$ for the eigenvalue $\mu(H'_\lambda)=2\langle\mu,\lambda\rangle|\lambda|^{-2}$, this number is an integer. [L6, step 3.1, algebra]

5.1 The reflection $s_\lambda$ is realised in $N_K(\mathfrak a)$ and permutes $\Sigma$: by step 4.1 the element $k_\lambda\in K$ satisfies $\operatorname{Ad}(k_\lambda)\mathfrak a=\mathfrak a$ and acts on $\mathfrak a^*$ by $s_\lambda$, so $k_\lambda\in N_K(\mathfrak a)$; and for $\mu\in\Sigma$ and $0\ne X\in\mathfrak g_0^\mu$ one has $[H,\operatorname{Ad}(k_\lambda)X]=\operatorname{Ad}(k_\lambda)[\operatorname{Ad}(k_\lambda)^{-1}H,X]=(s_\lambda\mu)(H)\operatorname{Ad}(k_\lambda)X$ for all $H\in\mathfrak a$, so $\operatorname{Ad}(k_\lambda)\mathfrak g_0^\mu=\mathfrak g_0^{s_\lambda\mu}$ and $s_\lambda\mu\in\Sigma$; hence $s_\lambda(\Sigma)=\Sigma$ for every $\lambda\in\Sigma$. [step 4.1, algebra]

5.2 Multiples of a restricted root: let $\lambda\in\Sigma$ and let $C=\{c>0:c\lambda\in\Sigma\}$, a finite nonempty set of positive reals with minimum $a$; by step 4.3 one has $2c/d\in\mathbb Z$ for all $c,d\in C$, so with $c=a$ and $d=\max C$ one gets $2a/\max C\in\{1,2\}$ and hence $\max C\in\{a,2a\}$; moreover no $c\in C$ satisfies $a<c<2a$, since then $2a/c$ would lie strictly between $1$ and $2$; therefore $C=\{a\}$ or $C=\{a,2a\}$, and since $1\in C$ we have $a=1$ or $a=1/2$; hence every element of $\Sigma$ is either indivisible or twice an indivisible root, that is $\Sigma=\Sigma_s\sqcup 2\Psi$, and for every $\beta\in\Sigma_s$ the only positive multiples of $\beta$ in $\Sigma$ are $\beta$ and possibly $2\beta$. [step 4.3, algebra]

6.1 $\Sigma_s$ is a reduced crystallographic root system in $\mathfrak a^*$: it is finite by [L1]; it spans $\mathfrak a^*$ because $\Sigma\subseteq\operatorname{span}\Sigma_s$ by step 5.2 and $\Sigma$ spans $\mathfrak a^*$ by step 1.3; it satisfies $s_\alpha(\Sigma_s)=\Sigma_s$ for $\alpha\in\Sigma_s$ because $s_\alpha(\Sigma)=\Sigma$ by step 5.1 and $s_\alpha$ preserves the property $\alpha/2\notin\Sigma$, since $s_\alpha(\beta)/2=s_\alpha(\beta/2)$; it satisfies the integrality condition by step 4.3; and it is reduced because $\mathbb R\beta\cap\Sigma_s=\{\pm\beta\}$ for $\beta\in\Sigma_s$, which is exactly the statement proved in step 5.2. [L1, step 1.3, step 4.3, step 5.1, step 5.2]

7.1 $\Psi$ is invariant under the Weyl group $W(\Sigma_s)$: if $\alpha\in\Psi$ and $\beta\in\Sigma_s$, then $2s_\beta(\alpha)=s_\beta(2\alpha)\in\Sigma$ by step 5.1, and $s_\beta(\alpha)\in\Sigma_s$ by step 6.1, so $s_\beta(\alpha)\in\Psi$. [step 5.1, step 6.1]

7.2 $\Sigma$ is irreducible if and only if $\Sigma_s$ is: if $\Sigma_s=\Phi_1\sqcup\Phi_2$ with $(\Phi_1,\Phi_2)=0$ and both parts nonempty, then $\Sigma=(\Phi_1\cup2(\Psi\cap\Phi_1))\sqcup(\Phi_2\cup2(\Psi\cap\Phi_2))$ by step 5.2, and both parts are nonempty and mutually orthogonal, so $\Sigma$ is reducible; conversely if $\Sigma=\Sigma_1\sqcup\Sigma_2$ with $(\Sigma_1,\Sigma_2)=0$ and both parts nonempty, then every $\lambda\in\Sigma_i$ is $\alpha$ or $2\alpha$ with $\alpha\in\Sigma_s\cap\Sigma_i$ (if $\alpha\in\Sigma_j$, $j\ne i$, then $(\alpha,2\alpha)=0$, impossible), so $\Sigma_s=(\Sigma_s\cap\Sigma_1)\sqcup(\Sigma_s\cap\Sigma_2)$ with both parts nonempty and orthogonal, and $\Sigma_s$ is reducible. [step 5.2, step 6.1]

7.3 Every root of $\Sigma_s$ is a $W(\Sigma_s)$-conjugate of a simple root: it suffices to treat $\gamma\in\Sigma_s^+$ and to induct on the height $h=\operatorname{ht}(\gamma)$, the negative case following from $-\delta=s_\delta(\delta)$; if $\gamma\in\Delta_s$ there is nothing to prove, so suppose $\gamma\notin\Delta_s$, write $\gamma=\sum_i n_i\alpha_i$ over $\Delta_s$ with $n_i\ge0$ integers and $h=\sum_i n_i\ge2$ by [L4], and note that $0<(\gamma,\gamma)=\sum_i n_i(\gamma,\alpha_i)$ gives an index $i$ with $(\gamma,\alpha_i)>0$, which forces $n_i\ge1$ because $(\alpha_j,\alpha_i)\le0$ for $j\ne i$ by [L4]; with $n=n(\gamma,\alpha_i)=2(\gamma,\alpha_i)(\alpha_i,\alpha_i)^{-1}\ge1$ one has $n\le2n_i\le2h$ and $n=2n_i=2h$ would force $\gamma=n_i\alpha_i$ with $n_i=h$, hence $h=1$ by reducedness of $\Sigma_s$ and $\gamma=\alpha_i\in\Delta_s$, a contradiction, so $|h-n|<h$; the root $\beta=s_{\alpha_i}(\gamma)=\gamma-n\alpha_i$ has height $h-n$, so either $\beta$ or $-\beta$ is a positive root of smaller height, which by induction is a $W(\Sigma_s)$-conjugate of a simple root, and since $\gamma=s_{\alpha_i}(\beta)$ and $\gamma=s_{\alpha_i}s_{-\beta}(-\beta)$ in the respective cases, $\gamma$ is such a conjugate too. [L4, step 6.1, algebra]

7.4 For $\alpha\in\Psi$ and $\beta\in\Sigma_s$ one has $\langle\beta,\alpha\rangle\langle\alpha,\alpha\rangle^{-1}\in\mathbb Z$: indeed the pair $(\beta,2\alpha)$ consists of two elements of $\Sigma$, so step 4.3 applied to it gives $2\langle\beta,2\alpha\rangle|\langle2\alpha,2\alpha\rangle|^{-1}\in\mathbb Z$, which is the displayed number. [step 4.3, step 6.1, algebra]

8.1 Suppose $\Sigma$ is irreducible and nonreduced, so that $\Sigma_s$ is irreducible by step 7.2 and $\Psi\ne\emptyset$ by step 5.2; fix a positive system of $\Sigma_s$ with simple roots $\Delta_s$; choosing $\alpha\in\Psi$ and applying step 7.3 to the roots of $\Sigma_s$ shows that some $\beta\in\Delta_s$ satisfies $2\beta\in\Sigma$, that is $\beta\in\Psi\cap\Delta_s$, because $\Psi$ is $W(\Sigma_s)$-invariant by step 7.1. [step 5.2, step 7.1, step 7.2, step 7.3]

8.2 The rank-one case: if $\mathfrak a$ is one-dimensional, then $\Sigma_s=\{\pm\alpha\}$ for some $\alpha$ by step 5.2 and step 6.1, so $W(\Sigma_s)=\{1,s_\alpha\}$ acts transitively on $\Sigma_s$; by step 7.1 the nonempty set $\Psi$ is $W(\Sigma_s)$-invariant, hence $\Psi=\Sigma_s$ and $\Sigma=\{\pm\alpha,\pm2\alpha\}$ by step 5.2; then the linear map sending $\alpha$ to $e_1$ and $2\alpha$ to $2e_1$ carries $\Sigma$ onto $BC_1=\{\pm e_1,\pm2e_1\}$ and preserves all Cartan integers, since $2\langle e_1,2e_1\rangle|2e_1|^{-2}=1$ and $2\langle2e_1,e_1\rangle|e_1|^{-2}=4$ match the corresponding numbers computed in $\mathfrak a^*$. [step 5.2, step 6.1, step 7.1, algebra]

9.1 Suppose from now on that $\dim\mathfrak a\ge2$ and let $\beta\in\Psi\cap\Delta_s$ be as in step 8.1; if $\gamma\in\Delta_s$, $\gamma\ne\beta$, satisfies $(\gamma,\beta)\ne0$, then $(\gamma,\beta)<0$ and, in the convention $n_{\alpha\delta}=2(\delta,\alpha)/(\alpha,\alpha)$ of [L4], one has $n_{\beta\gamma}=2(\gamma,\beta)(\beta,\beta)^{-1}\in\{-1,-2,-3\}$. This integer is even by step 7.4, so $n_{\beta\gamma}=-2$ and [L4] gives $n_{\gamma\beta}=-1$ and $(\gamma,\gamma)=2(\beta,\beta)$; hence every neighbour of $\beta$ in the Dynkin diagram is longer than $\beta$ and is joined to $\beta$ by a double edge, and since the diagram has at most one multiple edge by [L5] the vertex $\beta$ has degree one; applying [L5] once more, the diagram of $\Sigma_s$ is a path with exactly one multiple edge, which is the double edge at the end $\beta$, all other edges being simple, and the double edge carries the arrow pointing to the shorter root $\beta$: indeed the remaining configurations of [L5] with a multiple edge are a double edge in the middle of a four-vertex path and a two-vertex triple edge, and neither can occur here because every edge at $\beta$ is a double edge while $\beta$ has degree one. [L4, L5, step 7.4, step 8.1]

10.1 All simple roots of $\Sigma_s$ other than $\beta$ have length $(\gamma,\gamma)=2(\beta,\beta)$: the neighbour $\gamma$ of $\beta$ does by step 9.1, and every further vertex is reached along a path of simple edges, along which the length ratio is $1$ by [L4]; consequently the Cartan matrix of $\Sigma_s$ with respect to the base $\Delta_s$ is that of the standard type-$B_r$ base $\alpha_i=e_i-e_{i+1}$ $(i<r)$, $\alpha_r=e_r$, as computed in [L5]: diagonal entries $2$, entries $-1$ between consecutive non-final simple roots, entry $n_{\alpha_{r-1}\alpha_r}=-1$ and $n_{\alpha_r\alpha_{r-1}}=-2$ along the double edge, and $0$ otherwise; since a based root system is determined up to isomorphism by its Cartan matrix by [L5], the linear isomorphism carrying $\Delta_s$ to that base is an isomorphism of $\Sigma_s$ onto $B_r$. [L4, L5, step 9.1]

11.1 $\Psi$ is exactly the set of short roots of $\Sigma_s$: $\Psi$ is $W(\Sigma_s)$-invariant by step 7.1, and under the isomorphism of step 10.1 the roots of $\Sigma_s$ correspond to $B_r=\{\pm e_i\}\cup\{\pm e_i\pm e_j\}$ with $\beta$ corresponding to a short root $e_r$; since $W(B_r)$ is the group of signed permutations and acts transitively on $\{\pm e_i\}$ by [L5], $\Psi$ contains the whole short class; conversely no long root $e_i\pm e_j$ lies in $\Psi$, because for such a root $\alpha$, the short root $e_i$ satisfies $(\alpha,\alpha)=2(e_i,e_i)$ and $|(e_i,\alpha)|=(e_i,e_i)$, so $(e_i,\alpha)(\alpha,\alpha)^{-1}=\pm1/2\notin\mathbb Z$, contradicting step 7.4. [step 7.4, step 10.1, L5]

12.1 Conclusion of (c): by steps 10.1 and 11.1 there is a linear isomorphism $\varphi$ of $\mathfrak a^*$ onto $\mathbb R^r$ carrying $\Sigma_s$ onto $B_r=\{\pm e_i\}\cup\{\pm e_i\pm e_j\}$ and $\Psi$ onto $\{\pm e_i\}$; therefore $\varphi$ carries $\Sigma=\Sigma_s\sqcup2\Psi$ onto $B_r\cup2\{\pm e_i\}=BC_r$; and $\varphi$ preserves Cartan integers: on pairs of roots of $\Sigma_s$ this holds by the definition of a root-system isomorphism, and for pairs involving a doubled root $2\alpha$ with $\alpha\in\Psi$ one computes $2\langle2\alpha,\beta\rangle|\beta|^{-2}=2\cdot2\langle\alpha,\beta\rangle|\beta|^{-2}$ and $2\langle2\alpha,2\beta\rangle|2\beta|^{-2}=2\langle\alpha,\beta\rangle|\beta|^{-2}$, which are the corresponding Cartan integers computed in $BC_r$ because the doubled roots are the short roots; combined with the rank-one case of step 8.2 this proves (c) for all $\dim\mathfrak a\ge1$. [step 8.2, step 10.1, step 11.1, algebra]

13.1 Statements (a), (b) and (c) are now proved: finiteness, spanning and the reflection and integrality properties of $\Sigma$ in steps 1.3, 4.3 and 5.1, together with the realisation of $s_\lambda$ in $N_K(\mathfrak a)$ in step 5.1, give (a); the explicit nonreduced restricted-root system of the pair $(\mathfrak{su}(2,1),\mathbb RH)$ in step 4.2 gives (b); and the classification of the irreducible nonreduced case in step 12.1 completes (c). The Axiom of Choice was used only through the representation theory of [L6] in step 4.3. [A1, step 1.3, step 4.2, step 4.3, step 5.1, step 12.1] ∎
