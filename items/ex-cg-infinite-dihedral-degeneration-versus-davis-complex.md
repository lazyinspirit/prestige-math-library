---
id: ex-cg-infinite-dihedral-degeneration-versus-davis-complex
kind: example
title: "Infinite dihedral type: the chamber system is a line, not a sphere; the contractible model is deferred"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 14
deps: [def-cg-canonical-reflection-homomorphism, def-cg-dual-chambers-and-reflection-hyperplanes, def-cg-real-coxeter-form-and-reflection, def-cg-tits-cone-and-fundamental-chamber, def-hh-coxeter-matrix-word-group-and-length, lem-cg-dual-action-and-chamber-faces-exist, lem-cg-reflection-form-invariance-and-rank-two-orders, thm-cg-dual-chamber-intersections-and-point-stabilizers, thm-cg-tits-cone-finite-negativity-and-convexity, thm-cg-tits-cone-interior-and-local-finiteness]
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press 2008, first-edition author manuscript PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Chapter 6, section 6.6 (Theorem 6.6.3) and section 6.8 (the cosine matrix and dihedral angles of a spherical simplex, printed pp. 96-102); Appendix D.2, Examples D.2.1 (printed pp. 442-443)"
    - title: "Jean Michel, Lectures on Coxeter groups (Beijing lecture notes, April-May 2014, author-hosted PDF)"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf"
      locator: "Section 5, Proposition 5.4(i) (the order of s_H s_H' equals pi divided by the angle of the walls, printed p. 7) and Proposition 5.8 (printed p. 9)"
verification:
  precheck: pass
---

## Example

Let $S=\{s,t\}$ with $m(s,t)=\infty$ (infinite dihedral type), so that $B(e_s,e_t)=-1$ and $B$
is positive semidefinite with radical $\mathbb R(e_s+e_t)$
([[def-cg-real-coxeter-form-and-reflection]],
[[lem-cg-reflection-form-invariance-and-rank-two-orders]], clause (3)(i)); write a functional
$f\in V^*$ as $(y_s,y_t)=(f(e_s),f(e_t))$ and put $\Delta(f):=f(e_s+e_t)=y_s+y_t$. Let $C$,
the chambers $wC$ and the Tits cone $U=\bigcup_{w\in W}wC$ be as in
[[def-cg-dual-chambers-and-reflection-hyperplanes]] and
[[def-cg-tits-cone-and-fundamental-chamber]]. Then:

**(i)** The generators act by $s:(y_s,y_t)\mapsto(-y_s,\,2y_s+y_t)$ and
$t:(y_s,y_t)\mapsto(y_s+2y_t,\,-y_t)$, and $\Delta$ is $W$-invariant. The fundamental chamber is
the closed positive quadrant $C=\{y_s\ge0,\ y_t\ge0\}$, and the chambers $wC$ $(w\in W)$ are
the cones over the unit intervals $[k,k+1]$ $(k\in\mathbb Z)$ of the affine line
$\{\Delta=1\}$; their relative interiors are pairwise disjoint.

**(ii)** $U=\{f:\Delta(f)>0\}\cup\{0\}$, so $U\neq V^*$; the nonzero points of the line
$\{\Delta=0\}$ lie outside $U$, and $0\notin U^\circ$.

**(iii)** There is no $w\in W$ with $wC=-C$: indeed every nonzero $f\in-C$ has
$\Delta(f)<0$, hence $-C\setminus\{0\}$ is disjoint from $U$, while every chamber lies in $U$.
Consequently $\Phi$ is infinite and the length function $\ell$ is unbounded on $W$, so $W$ has
no longest element; the spherical conclusion of
[[thm-cg-finite-chamber-tiling-and-coset-face-identification]] fails at its finiteness
hypothesis.

**(iv)** The rays of $U$ are the nonzero points of the chart $\{\Delta=1\}$: the map
$f\mapsto f/\Delta(f)$ is a bijection from $(U\setminus\{0\})/\mathbb R_{>0}$ onto
$\{\Delta=1\}\cong\mathbb R$, and the images of the chambers are the unit intervals $[k,k+1]$.
The chamber subdivision is therefore infinite and has no finite subcomplex covering it; in
particular the complex is not a finite sphere. The construction of a contractible $W$-complex
for infinite $W$ (the Davis complex) and its comparison with this chamber system belong to the
later page spherical-parabolic-cosets-and-the-davis-complex (order 1768); no result of that
page is used or asserted here.

## Facts & Assumptions

**Given:** The Coxeter system with $S=\{s,t\}$ and $m(s,t)=\infty$, the form $B$ on
$V=\mathbb R^S$, the dual action on $V^*$ with chamber $C$, chambers $wC$ and Tits cone
$U$, and a functional written as $(y_s,y_t)$ with $\Delta=y_s+y_t$.

[F1] $B$ is symmetric bilinear with $B(e_s,e_s)=B(e_t,e_t)=1$ and $B(e_s,e_t)=-1$, and
$B|_P$ on $P=\mathbb Re_s+\mathbb Re_t$ is positive semidefinite with radical
$\mathbb R(e_s+e_t)$; the reflection formula is $r_a(v)=v-2B(v,a)a$ for $B(a,a)=1$, so
$r_s(e_s)=-e_s$, $r_s(e_t)=e_t+2e_s$, $r_t(e_t)=-e_t$, $r_t(e_s)=e_s+2e_t$; the product
$A:=\rho(st)=r_sr_t$ has matrix
$\begin{pmatrix}3&-2\\2&-1\end{pmatrix}=I+N$ with $N=\begin{pmatrix}2&-2\\2&-2\end{pmatrix}\ne0$
and $N^2=0$, so $A^k=I+kN$ for every $k\in\mathbb Z$
([[def-cg-real-coxeter-form-and-reflection]],
[[lem-cg-reflection-form-invariance-and-rank-two-orders]], clauses (1)-(3)); and $\rho$ is the
canonical reflection homomorphism with root system $\Phi=\{\rho(w)e_s:w\in W,\ s\in S\}$
([[def-cg-canonical-reflection-homomorphism]]).

[F2] The dual action is $(w\cdot f)(v)=f(\rho(w)^{-1}v)$, and in the coordinates $(y_s,y_t)$
its generators act by $s:(y_s,y_t)\mapsto(-y_s,\,2y_s+y_t)$ and
$t:(y_s,y_t)\mapsto(y_s+2y_t,\,-y_t)$; the closed chamber is
$C=\{f:f(e_s)\ge0,\ f(e_t)\ge0\}$ and the chambers of the chamber system are the sets $wC$
([[def-cg-dual-chambers-and-reflection-hyperplanes]],
[[lem-cg-dual-action-and-chamber-faces-exist]], clause (3),
[[def-cg-tits-cone-and-fundamental-chamber]]).

[F3] The open chambers $wC^\circ$ $(w\in W)$ are pairwise disjoint
([[thm-cg-dual-chamber-intersections-and-point-stabilizers]], clause (6)).

[F4] $0\in U^\circ$ if and only if $W$ is finite
([[thm-cg-tits-cone-interior-and-local-finiteness]], clause (5)).

## Verification

**Proof technique:** explicit coordinate computation with the dual action.

1.1 In the coordinates $(y_s,y_t)$ the generators act by the displayed formulas [F2], and both fix $\Delta$: $(-y_s)+(2y_s+y_t)=y_s+y_t$ and $(y_s+2y_t)+(-y_t)=y_s+y_t$. Since $S$ generates $W$ and the dual action is a left action, $\Delta(w\cdot f)=\Delta(f)$ for every $w\in W$. [F2, algebra, given]

1.2 The element $st$ satisfies $\rho(st)=r_sr_t$ and by [F1] its matrix on $P$ is $A=I+N$ with $N\ne0$ and $N^2=0$; hence $\rho((st)^k)=A^k=I+kN\ne I$ for every $k\ne0$ (for negative $k$ use $(I+N)^{-1}=I-N$, which holds because $N^2=0$). Therefore $(st)^k\ne1$ in $W$ for every $k\ne0$, and $W$ is infinite. [F1, algebra, given]

2.1 For $f$ with $\Delta(f)=1$ write $a:=y_s$, so $y_t=1-a$; then [F2] gives $s\cdot f=(-a,\,2a+1-a)=(-a,\,1+a)$, that is, $s$ acts on the line $\{\Delta=1\}$ by $a\mapsto-a$, and $t\cdot f=(a+2(1-a),\,-(1-a))=(2-a,\,a-1)$, that is, $a\mapsto2-a$; since the action is a left action, $(st)^k$ acts by $a\mapsto a-2k$ and $s(st)^k$ by $a\mapsto-a+2k$, so the images of $C\cap\{\Delta=1\}=\{0\le a\le1\}=[0,1]$ under $W$ include every interval $[2k,2k+1]$ and $[2k-1,2k]$, that is, every unit interval $[k,k+1]$ with $k\in\mathbb Z$. Conversely $s$ sends a unit interval $[k,k+1]$ to $[-k-1,-k]$ and $t$ to $[1-k,2-k]$, both unit intervals, so by induction on length every $w$ sends $[0,1]$ to a unit interval. Since the $w$ act linearly and $C=\{y_s\ge0,\ y_t\ge0\}$ is the cone over $[0,1]$, each $wC$ is the cone over $w\cdot[0,1]$. Hence the chambers are exactly the cones over the unit intervals $[k,k+1]$. [F2, step 1.1, algebra]

2.2 By step 1.2 the group $W$ is infinite, so [F4] gives $0\notin U^\circ$. [F4, step 1.2, given]

2.3 By [F1], $\rho((st)^k)=I+kN$ on $P$ gives $\rho((st)^k)e_s=e_s+k(2e_s+2e_t)=(1+2k)e_s+2ke_t$, and these are pairwise distinct roots for $k\in\mathbb Z$ because their $e_s$-coefficients $1+2k$ are distinct; hence $\Phi$ is infinite. If $\ell$ were bounded by some natural number $N$, then every element of $W$ would be the value of one of the finitely many words in $S$ of length at most $N$ (using $s^{-1}=s$), so $W$ would be finite, contradicting step 1.2. Thus $\ell$ is unbounded on $W$ and $W$ has no longest element. [F1, step 1.2, algebra]

3.1 Every chamber is the cone over a unit interval of $\{\Delta=1\}$ by step 2.1, and every point of such a cone is $\lambda g$ with $\lambda\ge0$ and $\Delta(g)=1$, so $\Delta$ is nonnegative on $U$ and positive on $U\setminus\{0\}$. Conversely, if $\Delta(f)>0$ then $a:=y_s/\Delta(f)$ is a real number, hence lies in some unit interval $[k,k+1]$, and then $f=\Delta(f)(a,1-a)$ lies in the cone over $[k,k+1]$, which is a chamber; and $0\in C\subseteq U$. Therefore $U=\{f:\Delta(f)>0\}\cup\{0\}$, so the nonzero points of $\{\Delta=0\}$ lie outside $U$ and $U\ne V^*$. [step 2.1, algebra]

3.2 The relative interior of the chamber which is the cone over $[k,k+1]$ is the open cone over $(k,k+1)$, which is the open chamber $wC^\circ$ for the corresponding $w$; by [F3] these are pairwise disjoint. [F3, step 2.1, algebra]

3.3 If $wC=-C$ for some $w$, then $-C\subseteq\{\Delta\ge0\}$ because every chamber is contained in $\{\Delta\ge0\}$ by step 2.1; but $-C$ contains $-(v)$ for $v\in C^\circ$, and $\Delta(-v)=-\Delta(v)<0$ since $\Delta(v)>0$ for $v\in C^\circ$ ($C^\circ$ is the open quadrant and $v\ne0$). This contradiction shows that no chamber equals $-C$. [step 2.1, algebra]

4.1 The map $f\mapsto f/\Delta(f)$ is well defined on $U\setminus\{0\}$ by step 3.1, has values in $\{\Delta=1\}$, is invariant under positive scaling and separates distinct positive rays: if $f/\Delta(f)=g/\Delta(g)$ then $f=(\Delta(f)/\Delta(g))g$ with positive factor, and conversely positive multiples have the same image; it is surjective onto $\{\Delta=1\}$ because $\Delta(g)=1$ gives $g=g/\Delta(g)$ with $g\in U$ by step 3.1. By step 2.1 it carries the chambers onto the unit intervals $[k,k+1]$. The subdivision is infinite because the intervals are pairwise distinct, and no finite union of chambers covers $U$: a finite union of cones over $[k_1,k_1+1],\dots,[k_n,k_n+1]$ contains no point $f$ with $\Delta(f)=1$ and $y_s$-coordinate $a>\max_i k_i+1$, while such points of $\{\Delta=1\}\subseteq U$ exist. Hence this chamber system is not a finite sphere; the contractible comparison complex (the Davis complex) belongs to the later page named in the statement and is not used here. [step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **Consistency with the finite-negativity criterion.** For a nonzero $f$ with $\Delta(f)=0$, one has $y_t=-y_s$ and $y_s\ne0$. By the matrix in [F1], the roots $\alpha_k:=\rho((st)^k)e_s=(1+2k)e_s+2ke_t$ and $\beta_k:=\rho((st)^{-k})e_t=2ke_s+(1+2k)e_t$ are positive for every integer $k\ge0$, and each family is pairwise distinct. Their values are $f(\alpha_k)=y_s$ and $f(\beta_k)=-y_s$. Thus the first family supplies infinitely many negative values when $y_s<0$, and the second does so when $y_s>0$. Hence $f$ has infinitely many negative positive roots, in agreement with [[thm-cg-tits-cone-finite-negativity-and-convexity]] (1), which gives $f\notin U$.

- **The negative comparison is the whole of it.** This item proves that the finiteness
  hypothesis in the spherical tiling and triangulation cannot be dropped, and it stops there:
  it asserts nothing about a contractible complex on which $W$ acts, and it declares no
  dependency on the later page that supplies one.
