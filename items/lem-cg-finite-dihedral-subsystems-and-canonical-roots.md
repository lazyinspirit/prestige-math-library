---
id: "lem-cg-finite-dihedral-subsystems-and-canonical-roots"
kind: "lemma"
title: "Plane subsystems, their canonical generators, and the angular order of their roots"
status: draft
origin: "pipeline"
pipeline_run: "frontier-42-coxeter-32"
dependency_level: 16
deps:
  - def-cg-real-coxeter-form-and-reflection
  - def-cg-canonical-reflection-homomorphism
  - lem-cg-reflection-form-invariance-and-rank-two-orders
  - thm-cg-root-sign-and-simple-reflection-positivity
  - thm-cg-root-inversion-formulas-and-strong-exchange
  - thm-cg-finite-type-positive-definite-criterion
  - def-cg-finite-reflection-arrangement-and-spherical-chambers
  - thm-cg-finite-chamber-tiling-and-coset-face-identification
  - thm-cg-dual-chamber-intersections-and-point-stabilizers
  - thm-cg-parabolic-intersections-and-coset-factorization
  - thm-cg-root-length-criterion-and-faithfulness
  - lem-cg-dual-action-and-chamber-faces-exist
proof_strategy: induction
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
      locator: "section 2.4, Theorem 2.7 and Proposition 2.11, published pp. 709-710 (canonical generators and the rank-two alternating reflections), and Proposition 2.9, published p. 710 (when a generalized rank-two subgroup is parabolic)"
    - title: "N. Reading, Sortable elements and Cambrian lattices, arXiv:math/0512339v1 (2005); Algebra Universalis 56 (2007) 35-56"
      url: "https://arxiv.org/pdf/math/0512339"
      locator: "section 2, p. 5 (reflections, inversion sets and rank-two parabolic subgroups in the finite case)"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Sections 2.4, pp. 38-40 (parabolic subgroups), and 4.5, pp. 105-108 (roots and subgroups)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---
## Statement
Let $(W,S)$ be a Coxeter system of finite type with $S$ finite and $n:=|S|$, canonical reflection representation $\rho$ on $V=\mathbb R^S$, Coxeter form $B$ (positive definite, [[thm-cg-finite-type-positive-definite-criterion]] (1)), root system $\Phi=\Phi_+\sqcup\Phi_-$, reflection set $T$, the finite reflection arrangement with chamber $C$ and the chamber tiling, and the parabolic subsystems $\Phi_I=\Phi\cap V_I$ ([[def-cg-finite-reflection-arrangement-and-spherical-chambers]], [[thm-cg-finite-chamber-tiling-and-coset-face-identification]], [[thm-cg-parabolic-intersections-and-coset-factorization]] (2)). For $P\subseteq V$, write $P^\perp:=\{v\in V:B(v,p)=0\text{ for all }p\in P\}$.
For each $\alpha\in\Phi$, let $t_\alpha\in T$ be its associated reflection, so $\rho(t_\alpha)=r_\alpha$, and for each $t\in T$ let $\beta_t\in\Phi_+$ be its unique positive root with $t_{\beta_t}=t$ ([[thm-cg-root-inversion-formulas-and-strong-exchange]] (1)).
Let $P\subseteq V$ be a $2$-dimensional subspace spanned by roots, and let $x\in P^\perp$ satisfy $B(x,\alpha)\ne0$ for every root $\alpha\in\Phi\setminus P$; if $n=2$ take $x=0$. (Existence: the sets $P^\perp\cap H_\alpha$ for $\alpha\in\Phi\setminus P$ are finitely many proper subspaces of $P^\perp$, since $P^\perp\subseteq H_\alpha$ would force $\alpha\in(P^\perp)^\perp=P$, and a finite union of proper subspaces does not cover a vector space over the infinite field $\mathbb R$.)
**(1) Stabilizer and roots.** $W':=\mathrm{Stab}_W(x)=\{u\in W:\rho(u)x=x\}$ is a parabolic subgroup of $(W,S)$, a conjugate of a standard parabolic, of rank two, and its roots are exactly the roots in the plane:
$$t_\alpha\in W'\iff\alpha\in P,\qquad\text{so}\qquad\{\alpha\in\Phi:t_\alpha\in W'\}=\Phi\cap P.$$
Moreover $\Phi\cap P$ spans $P$.
**(2) Canonical generators and angular order.** $\Phi_P^+:=\Phi\cap P\cap V_+$ is the positive system of the rank-two subsystem $\Phi\cap P$ and has exactly two extreme rays. Let $r_1,r_2$ be the roots on those rays, and put $a:=t_{r_1}$ and $b:=t_{r_2}$ for their corresponding group reflections. Let $m:=\operatorname{ord}(ab)\in\{2,3,\dots\}$. For $1\le j\le m$, let $u_j$ be the alternating word of length $2j-1$ in $a,b$ starting with $a$; these are reflections, since for $q:=ab$ one has $u_{2j+1}=q^j a q^{-j}$ and $u_{2j}=q^j b q^{-j}$ whenever the indicated index is in range. Thus $u_1=a$ and $u_m=b$. Then $\Phi\cap P=\{\pm\beta_{u_1},\dots,\pm\beta_{u_m}\}$, the positive roots ordered by angle from the ray of $r_1$ to the ray of $r_2$ are $\beta_{u_1},\beta_{u_2},\dots,\beta_{u_m}$, and all positive roots of $\Phi\cap P$ lie in the closed angular sector spanned by $r_1,r_2$.
**(3) The dihedral subsystem.** $W'=\langle a,b\rangle$ is dihedral of order $2m$ (for $m=2$ it is $\mathbb Z/2\times\mathbb Z/2$); its reflection set is $W'\cap T=\{u_1,\dots,u_m\}$, and every reflection of $W'$ is conjugate in $W'$ to $a$ or $b$. The root pair $\{r_1,r_2\}$ is the **canonical system**: its positive span contains every positive subsystem root, and neither root is in the positive span of the other positive subsystem roots.
**(4) Subplanes and reversal.** If $Q\subseteq P$ is a $2$-dimensional subspace spanned by roots of $\Phi\cap P$, then $Q=P$, so $\Phi\cap Q=\Phi\cap P$; the same construction in $Q$ gives the same extreme rays, rank-two subsystem and reflection subgroup, with the same angular order. Exchanging the two extreme rays (using the opposite orientation from $r_2$ to $r_1$) reverses the index order $u_1,\dots,u_m$ to $u_m,\dots,u_1$.
**(5) No Choice.** The point $x$ is chosen in the complement of a finite union of proper subspaces of $P^\perp$, which is nonempty without the Axiom of Choice.
## Facts & Assumptions
**Given:** A Coxeter system $(W,S)$ of finite type with $V=\mathbb R^S$, Coxeter form $B$, canonical reflection representation $\rho$, root system $\Phi=\Phi_+\sqcup\Phi_-$, reflection set $T$, positive cone $V_+$, the chamber $C$ and its interior $C^\circ$ of the dual action, and a $2$-dimensional subspace $P\subseteq V$ spanned by roots, with $x\in P^\perp$ satisfying $B(x,\alpha)\ne0$ for every root $\alpha\in\Phi\setminus P$ (and $x=0$ when $n=|S|=2$).

[F1] [[def-cg-real-coxeter-form-and-reflection]]: $(e_s)_{s\in S}$ is a basis of $V$; $B$ is symmetric bilinear with $B(e_s,e_s)=1$, $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite $m(s,t)$ and $B(e_s,e_t)=-1$ for $m(s,t)=\infty$; and for $a$ with $B(a,a)\ne0$ the reflection with normal $a$ is $r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$.

[F2] [[def-cg-canonical-reflection-homomorphism]]: $\rho(s)=r_{e_s}$ defines the homomorphism $\rho:W\to\mathrm{GL}(V)$, $\Phi=\{\rho(w)e_s:w\in W,\ s\in S\}$, $T=\{wsw^{-1}\}$, and $V_+=\{\sum_s\lambda_se_s:\lambda_s\ge0\}$.

[F3] [[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2): for $B(a,a)\ne0$, $r_a$ is linear, involutive and preserves $B$, and $\ker B(-,a)$ is a hyperplane fixed pointwise by $r_a$.

[F4] [[thm-cg-root-sign-and-simple-reflection-positivity]] (2): every root lies in $V_+\setminus\{0\}$ or in $-V_+\setminus\{0\}$, and $\Phi_+=\Phi\cap V_+$, $\Phi_-=\Phi\cap(-V_+)$.

[F5] [[thm-cg-root-inversion-formulas-and-strong-exchange]]: every root has $B$-norm one; for $\alpha=\rho(w)e_s$, $t_\alpha:=wsw^{-1}$ is independent of the representation, $t_{-\alpha}=t_\alpha$, $\rho(t_\alpha)=r_\alpha$, $t_{\rho(w)\alpha}=w t_\alpha w^{-1}$, and the map $\Phi_+\to T$, $\alpha\mapsto t_\alpha$, is a bijection.

[F6] [[thm-cg-finite-type-positive-definite-criterion]] (1): $W$ is finite if and only if $B$ is positive definite.

[F7] [[def-cg-finite-reflection-arrangement-and-spherical-chambers]]: because $W$ is finite, $B$ is positive definite, and identifying $V$ with $V^*$ by $b$ one has $C=\{v:B(v,e_s)\ge0\ \forall s\}$, $C^\circ=\{v:B(v,e_s)>0\ \forall s\}$ and $H_\alpha=\{v:B(v,\alpha)=0\}$, with $\mathcal A=\{H_\alpha:\alpha\in\Phi\}$ a finite set of hyperplanes permuted by $\rho(W)$.

[F8] [[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (1): $U=V^*$, under the identification $V=\bigcup_{w\in W}wC$, the connected components of $V\setminus\bigcup_\alpha H_\alpha$ are exactly the chambers $wC^\circ$, and every $W$-orbit in $V$ meets $C$ in exactly one point.

[F9] [[thm-cg-dual-chamber-intersections-and-point-stabilizers]]: (1) $wH_{e_s}=H_{\rho(w)e_s}$; (4) for $f\in U$ and $w\in W$ with $w^{-1}\cdot f\in C$ one has $\operatorname{Stab}_W(f)=w\,W_{S(w^{-1}\cdot f)}\,w^{-1}$, where $S(f)=\{s\in S:f(e_s)=0\}$.

[F10] [[thm-cg-parabolic-intersections-and-coset-factorization]] (2): for $I\subseteq S$, $\rho(v)V_I=V_I$ for $v\in W_I$, and $\Phi_I=\{\rho(v)e_s:v\in W_I,\ s\in I\}=\Phi\cap V_I$; the reflections lying in $W_I$ are exactly the $t_\alpha$ with $\alpha\in\Phi_I\cap\Phi_+$.

[F11] [[lem-cg-dual-action-and-chamber-faces-exist]] (2): $0\in C$ (equivalently $C_S=\{0\}$).


[F12] [[thm-cg-root-length-criterion-and-faithfulness]] (3): the homomorphism $\rho$ is injective.



## Proof
**Proof technique:** One induction, on the number of subspaces in the finite-union lemma; the remaining clauses are proved directly, and the alternating-list claims are proved by the dihedral recursion.

1.1 By [F6](1), $B$ is positive definite. Fact [F7] identifies $V$ with $V^*$ by $b(v)=B(v,\cdot)$ and gives $b(\rho(w)v)=w\cdot b(v)$; it also gives the vector descriptions of $C,C^\circ,H_\alpha$. Thus the chamber tiling and stabilizer statements [F8](1), [F9](4) apply in this model. Put $S(v):=\{s\in S:B(v,e_s)=0\}$. [given, F6, F7, F8, F9]

1.2 Finite-union base cases: if $N=0$, the empty union misses $0$ in every vector space; if $N=1$, a proper subspace $V_1\subsetneq W$ misses a point of $W$ by definition. [base]

1.3 Induction hypothesis of the finite-union lemma: for $N\ge2$, assume that for every real vector space $W$ and every family of $N-1$ proper subspaces the union is not all of $W$. [ih]

2.1 Step of the finite-union lemma, $N\ge2$: let $V_1,\dots,V_N$ be proper subspaces of $W$. If $V_N\subseteq\bigcup_{i<N}V_i$, then $\bigcup_{i\le N}V_i=\bigcup_{i<N}V_i\ne W$ by step 1.3. Otherwise choose $u\in W\setminus\bigcup_{i<N}V_i$ (nonempty by step 1.3) and $w\in W\setminus V_N$ (nonempty since $V_N$ is proper), and form the line $L:=\{u+\lambda w:\lambda\in\mathbb R\}$; each $V_i$ meets $L$ in at most one point, because two distinct points of $L$ in $V_i$ give $w\in V_i$ and then $u\in V_i$. Hence at most $N$ values of $\lambda$ are excluded, and since $\mathbb R$ is infinite some $\lambda$ has $u+\lambda w\notin\bigcup_{i\le N}V_i$; this proves the lemma for $N$, and every selection made is a single existential instantiation from a set already known to be nonempty, so no choice principle is used. [step 1.3, algebra]

2.2 Orbit and stabilizer: by [F8](1) the orbit $Wx$ meets $C$ in exactly one point $y$ (for $x=0$ one has $y=0$, and $0\in C$ by [F11](2)); fix $w\in W$ with $x=w\cdot y$. Then $\operatorname{Stab}_W(x)=w\operatorname{Stab}_W(y)w^{-1}=wW_{S(y)}w^{-1}$ by [F9](4), where $S(y)=\{s:B(y,e_s)=0\}$. Hence $W'=\operatorname{Stab}_W(x)$ is a conjugate of the standard parabolic $W_{S(y)}$. [step 1.1, F8, F9, F11]

3.1 Existence of $x$ and clause (5): if $n=2$, then $P=V$ and the family indexed by $\Phi\setminus P$ is empty, so take $x=0$. If $n>2$, some simple root is outside $P$ because the simple roots span $V$, hence the finite family $P^\perp\cap H_\alpha$, $\alpha\in\Phi\setminus P$, is nonempty. Each member is a proper subspace of $P^\perp$: $P^\perp\subseteq H_\alpha$ would mean $B(y,\alpha)=0$ for all $y\in P^\perp$, i.e. $\alpha\in(P^\perp)^\perp=P$, contrary to $\alpha\notin P$, since $B$ is positive definite. If there is one such subspace, step 1.2 supplies a point outside it; if there are at least two, step 2.1 supplies a point outside their union. This gives $x\in P^\perp$ with $B(x,\alpha)\ne0$ for every root $\alpha\in\Phi\setminus P$. This proves the existence asserted in the statement and shows that no Choice is used (clause (5)). [step 1.2, step 2.1, F2, F6]

4.1 Roots of $W'$: for $\alpha\in\Phi$ one has $t_\alpha\in W'$ if and only if $\alpha\in P$. If $\alpha\in\Phi\cap P$, then $B(x,\alpha)=0$ because $x\in P^\perp$, so $r_\alpha(x)=x-\frac{2B(x,\alpha)}{B(\alpha,\alpha)}\alpha=x$ by [F1], and $\rho(t_\alpha)=r_\alpha$ by [F5](1), hence $t_\alpha\in\operatorname{Stab}_W(x)=W'$. Conversely, if $t_\alpha\in W'$, then the same two formulas give $x=r_\alpha(x)=x-\frac{2B(x,\alpha)}{B(\alpha,\alpha)}\alpha$, hence $B(x,\alpha)=0$ (as $\alpha\ne0$), and the defining property of $x$ from step 3.1 forces $\alpha\in P$. In particular $\{\alpha\in\Phi:t_\alpha\in W'\}=\Phi\cap P$, and this proves the second display of clause (1). [step 3.1, F1, F5]

5.1 Rank and span: put $J:=S(y)$ and $\Phi_J:=\Phi\cap V_J$. By [F5](1) and [F10](2), $t_\alpha\in wW_Jw^{-1}\iff w^{-1}t_\alpha w\in W_J\iff t_{\rho(w)^{-1}\alpha}\in W_J\iff\rho(w)^{-1}\alpha\in\Phi\cap V_J\iff\alpha\in\rho(w)(\Phi\cap V_J)$; the third equivalence also uses $t_{-\gamma}=t_\gamma$ when $\gamma$ is negative. Thus the roots of the conjugate parabolic $wW_Jw^{-1}$ are $\rho(w)(\Phi\cap V_J)$. Comparing with step 4.1 gives $\rho(w)(\Phi\cap V_J)=\Phi\cap P$; since $e_s\in\Phi_J$ for $s\in J$, the set $\Phi_J$ spans $V_J$, and invertibility of $\rho(w)$ shows $\dim V_J=\dim\operatorname{span}(\Phi\cap P)=\dim P=2$. Hence $|J|=\dim V_J=2$ because $(e_s)_{s\in J}$ is a basis of $V_J$, and $\Phi\cap P$ spans $P$ because it equals the image of $\Phi_J$. Thus $W'$ is a conjugate of a standard parabolic of rank two. [step 4.1, F5, F10]

6.1 The finite dihedral model: $W_J=\langle s:s\in J\rangle=\langle t_{e_s}:s\in J\rangle$, and conjugating the generating set by $w$ gives $W'=\langle w t_{e_s}w^{-1}:s\in J\rangle=\langle t_{\rho(w)e_s}:s\in J\rangle$ by [F2, F5]; each $\rho(w)e_s$ lies in $\rho(w)\Phi_J=\Phi\cap P=:R$, so $W'$ is contained in $\langle t_\alpha:\alpha\in R\rangle$. Conversely every $t_\alpha$ for $\alpha\in R$ belongs to $W'$ by step 4.1, proving equality. Moreover $R=\Phi_P^+\sqcup(-\Phi_P^+)$ with $\Phi_P^+:=\Phi\cap P\cap V_+$ by [F4], and $R$ is finite by [F6]. [step 4.1, step 5.1, F2, F4, F5, F6]

7.1 Faithful plane action: $W'=wW_Jw^{-1}$ preserves $P=\rho(w)V_J$, because $W_J$ preserves $V_J$ by [F10](2). Since $B$ is positive definite, $V=V_J\oplus V_J^\perp$. Every generator $s\in J$ fixes $V_J^\perp$ pointwise by the reflection formula [F1] and $\rho(s)=r_{e_s}$ [F2]; hence every $v\in W_J$ fixes $V_J^\perp$ pointwise. If $u=wvw^{-1}$ acts trivially on $P$, then $\rho(v)$ acts trivially on $V_J=\rho(w)^{-1}P$ and on $V_J^\perp$, so it is the identity on $V$ and $v=1$ by [F12]. Thus $G:=\rho(W')|_P$ is faithful. [step 6.1, F1, F2, F6, F10, F12]

8.1 Orthogonal plane action: $G$ is finite by [F6] and is contained in $O(P)$ because $W'$ preserves $P$ and is generated by the B-isometric reflections from step 6.1 and [F3]. Each $t_\alpha$ with $\alpha\in R$ acts as a nontrivial orthogonal reflection on $P$: [F5] gives $B(\alpha,\alpha)=1$, so its normal line lies in $P$ and its restriction fixes the one-dimensional orthogonal line and negates $\alpha$. [step 6.1, step 7.1, F3, F5, F6]

8.2 Identify plane reflections with group reflections: take $g\in G$ with determinant $-1$ and let $u\in W'$ be its unique preimage under the faithful action of step 7.1. Every determinant-$-1$ map in $O(P)$ is a reflection, since its eigenvalues are $1$ and $-1$. By step 6.1, $W'$ is generated by $t_\alpha$ with $\alpha\in R\subseteq P$; each $\rho(t_\alpha)=r_\alpha$ fixes $P^\perp$ pointwise by [F1]. By positive definiteness [F7], $V=P\oplus P^\perp$, so $\rho(u)$ is the reflection $g$ on $P$ and the identity on $P^\perp$, hence has fixed hyperplane $M$. If $M$ is not a root hyperplane, each $M\cap H_\beta$ is a proper subspace of $M$; the arrangement is finite by [F7]. Applying the finite-union lemma from step 2.1 inside $M$ gives $z\in M$ outside every root hyperplane. Choose $v\in W$ with $y:=v^{-1}\cdot z\in C$ using [F8](1). The arrangement is $W$-invariant, so $y$ also avoids every root hyperplane; because $y\in C$, this makes $y\in C^\circ$, and [F9](4) gives $\operatorname{Stab}_W(y)=\{1\}$. Since $z=v\cdot y$, its stabilizer is conjugate to the trivial stabilizer of $y$, contradicting $u\ne1$ and $z\in M=\operatorname{Fix}(\rho(u))$. Therefore $M=H_\alpha$ for some root $\alpha$. The unique $B$-orthogonal reflection with fixed hyperplane $H_\alpha$ is $r_\alpha$, so [F5] gives $\rho(u)=r_\alpha=\rho(t_\alpha)$ and faithfulness [F12] yields $u=t_\alpha\in T$; step 4.1 forces $\alpha\in P$. Conversely every $t_\alpha$ with $\alpha\in\Phi\cap P$ lies in $W'$ by step 4.1 and acts as a reflection on $P$. Hence the determinant-$-1$ elements of $G$ correspond exactly to $T\cap W'$. [step 2.1, step 4.1, step 6.1, step 7.1, F1, F5, F7, F8, F9, F12]

9.1 Finite orthogonal plane groups: $R$ spans $P$, so choose two nonproportional roots in $R$. Their reflections restrict to distinct reflections of $G$ by steps 6.1 and 8.1, and their product is a nonidentity rotation and the rotation subgroup $H:=G\cap SO(P)$ is nontrivial. The determinant maps $G$ onto $\{\pm1\}$, with kernel $H$, so $|G|=2|H|$. Let $\theta$ be the least positive rotation angle in the finite group $H$. For any angle $\varphi\in(0,2\pi)$ of an element of $H$, division by $\theta$ gives $\varphi=d\theta+\delta$ with $0\le\delta<\theta$; the rotation of angle $\delta$ is in $H$, so minimality forces $\delta=0$. Dividing $2\pi$ by $\theta$ likewise gives $2\pi=N\theta+\delta$ with $0\le\delta<\theta$; the inverse of the rotation through $N\theta$ has angle $\delta$, so again $\delta=0$. Thus $h$, the rotation through $\theta$, has exact order $N$ and every element of $H$ is a power of $h$, so $N=|H|=:k\ge2$ and $\theta=2\pi/k$. The coset $Ht$ for any reflection $t\in G$ consists of all $k$ orientation-reversing orthogonal maps, each a reflection in a line of $P$. If $\theta_0$ is the angle of a unit normal to the reflection line of $t$, then the unit normal to $h^jt$ has angle $\theta_0+j\pi/k$; including both orientations gives $2k$ equally spaced normal directions. [step 7.1, step 8.1, F3, F5, algebra]

10.1 Angular order and count: let $k:=|H|=|T\cap W'|=|\Phi_+\cap P|$ by steps 9.1 and 8.2 and the positive-root/reflection bijection [F5]. Put $C':=\operatorname{cone}(R\cap V_+)$; since $R\cap V_+$ spans $P$ by steps 5.1 and 6.1, it is a pointed, finitely generated full-dimensional cone in the plane and has exactly two extreme rays, each containing a generator $r_1,r_2\in R\cap V_+$. Its positive roots lie in the closed angular sector between those rays, and a root in that sector is positive, so this sector contains exactly the $k$ positive roots counted above. The normal lines are spaced by $\pi/k$ by step 9.1; therefore these $k$ roots occupy consecutive directions, and the sector has angle $(k-1)\pi/k$. The unit normals $r_1,r_2$ therefore have angle $(k-1)\pi/k$, so the product of their linear reflections $r_{r_1}r_{r_2}$ is a rotation through $2\pi/k$, of exact order $k$. Since $\rho(ab)=r_{r_1}r_{r_2}$ and $\rho$ is injective by [F12], $m:=\operatorname{ord}(ab)=k$. [step 4.1, step 5.1, step 6.1, step 9.1, step 8.2, F1, F4, F5, F12, algebra]

11.1 The alternating list: put $a:=t_{r_1}$, $b:=t_{r_2}$ and $q:=ab$. Step 10.1 gives $m=k$ and the angle between the unit roots $r_1,r_2$ as $\pi-\pi/m$, whence $B(r_1,r_2)=-\cos(\pi/m)$. The conjugate formulas in the Statement show each $u_j$ is a reflection in $W'$. Their positive roots satisfy $\beta_{u_1}=r_1$ and $\beta_{u_2}=\rho(a)r_2=r_{r_1}(r_2)=r_2+2\cos(\pi/m)r_1$, which has angle $\pi/m$ from $r_1$. For $2\le j<m$, the alternating-word identity $u_{j+1}=q u_{j-1}q^{-1}$ and the root-conjugation identity [F5] give the root $\rho(q)\beta_{u_{j-1}}$ for $u_{j+1}$; its angle is $j\pi/m<\pi$, so it is the positive root $\beta_{u_{j+1}}$. By step 10.1, $\rho(q)$ rotates through $2\pi/m$. Starting from $u_1,u_2$, induction now gives $\beta_{u_j}$ at angle $(j-1)\pi/m$ from $r_1$ for all $1\le j\le m$. These are the $m=k$ consecutive positive roots; at $j=m$ the vector is the unit root on the ray of $r_2$, hence equals $r_2$ and [F5] gives $u_m=b$. The conjugate formulas show odd-indexed $u_j$ are conjugate to $a$ and even-indexed $u_j$ to $b$. [step 10.1, F1, F5, algebra]

12.1 Clauses (2) and (3): by steps 8.2 and 11.1, the $2k$ roots of $R$ are $\{\pm\beta_{u_1},\dots,\pm\beta_{u_m}\}$ with $m=k$ and distinct positive roots, so this is all of $\Phi\cap P$ and its positive roots are ordered from the ray $r_1$ to $r_2$ between its two extreme rays. By step 6.1, $W'$ is generated by its reflections $T\cap W'$; steps 8.2 and 11.1 together with [F5] identify that set with the alternating elements $u_j$, each a word in $a,b$, so $W'=\langle a,b\rangle$. The involutions $a,b$ with product of order $m$ give a surjection from the dihedral group of order $2m$ onto $W'$, and $|W'|=|G|=2k=2m$ by steps 7.1, 9.1 and 10.1; hence this surjection is an isomorphism. Every reflection is conjugate to $a$ or $b$ by step 11.1. For the canonical-system characterization stated in (3), it remains to check positive spanning and extremality. The roots in $\Phi_P^+$ lie in the cone generated by the extreme roots $r_1,r_2$, so condition (i) holds. Extremality gives condition (ii): if $r_i$ were a nonnegative combination of other positive subsystem roots, every nonzero summand would have to lie on its extreme ray; since every root has norm one, the only positive root on that ray is $r_i$ itself, a contradiction. Thus $\{r_1,r_2\}$ is the canonical system of $W'$. [step 6.1, step 7.1, step 8.2, step 9.1, step 10.1, step 11.1, F5]

13.1 Clause (4) and the reversal: a $2$-dimensional subspace $Q\subseteq P$ equals $P$, so $\Phi\cap Q=\Phi\cap P$; therefore the extreme rays, rank-two subsystem, reflection subgroup, and angular order constructed in $Q$ are the same as those already established in steps 10.1--12.1 and 6.1. If the extreme rays are exchanged, let $r_1':=r_2$ and $r_2':=r_1$. Repeating the calculation of step 11.1 with the rays exchanged (so the product is $ba=(ab)^{-1}$) gives the new alternating roots at angle $(j-1)\pi/m$ from $r_2$, hence at angle $(m-j)\pi/m$ from $r_1$; this is the angle of $\beta_{u_{m+1-j}}$. The root-reflection bijection [F5] then gives $u_j'=u_{m+1-j}$, so the index order reverses. [step 6.1, step 10.1, step 11.1, step 12.1, F5, algebra]

14.1 The finite-union induction is discharged by steps 1.2, 1.3 and 2.1, and the alternating-root induction by step 11.1; together with steps 3.1--10.1, 12.1, and 13.1 these establish clauses (1)--(5). The proof uses no Choice. [step 1.2, step 1.3, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, step 8.1, step 9.1, step 8.2, step 10.1, step 11.1, step 12.1, step 13.1, discharge-induction] ∎
