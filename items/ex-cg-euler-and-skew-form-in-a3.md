---
id: ex-cg-euler-and-skew-form-in-a3
kind: example
title: "The Euler and skew forms of c = s1s2s3 in A3, and the orientation of its rank-two subsystems"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 18
deps:
  - def-cg-coxeter-oriented-euler-form-and-c-sorting-word
  - lem-cg-coxeter-word-transport-and-form-independence
  - lem-cg-finite-dihedral-subsystems-and-canonical-roots
  - lem-cg-finite-rank-two-inversion-set-recognition
  - def-cg-geometric-inversion-set
  - def-cg-real-coxeter-form-and-reflection
  - def-cg-coxeter-diagram-components-and-finite-type
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
  - def-cg-canonical-reflection-homomorphism
  - thm-cg-root-sign-and-simple-reflection-positivity
  - thm-cg-root-inversion-formulas-and-strong-exchange
proof_strategy: direct
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
      locator: "Section 3, Example 3.6, printed p. 19 (the sign of omega_c on type-A roots from the order of adjacent simple generators)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $(W,S)$ have type $A_3$, with $S=\{s_1,s_2,s_3\}$,
$m(s_1,s_2)=m(s_2,s_3)=3$, and $m(s_1,s_3)=2$. Put $c=s_1s_2s_3$; it is a
reduced Coxeter word by
[[lem-cg-coxeter-word-transport-and-form-independence]] (1). With respect to
the simple basis $(e_{s_1},e_{s_2},e_{s_3})$, the Cartan form $K=2B$ and the
forms of [[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]] are
$$K=\begin{pmatrix}2&-1&0\\-1&2&-1\\0&-1&2\end{pmatrix},\quad E_c=\begin{pmatrix}1&0&0\\-1&1&0\\0&-1&1\end{pmatrix},\quad \omega_c=E_c-E_c^{\mathsf T}=\begin{pmatrix}0&1&0\\-1&0&1\\0&-1&0\end{pmatrix}.$$

**(i)** $E_c+E_c^{\mathsf T}=K$, and $E_c$ is lower triangular with diagonal
$1$, as specified by the ordered word $(s_1,s_2,s_3)$.

**(ii)** The sign table is $\omega_c(e_{s_1},e_{s_2})=1>0$,
$\omega_c(e_{s_2},e_{s_3})=1>0$, and $\omega_c(e_{s_1},e_{s_3})=0$. Thus the
commuting pair has zero orientation and each adjacent pair is positive in the
order induced by $c$.

**(iii)** Put $P_{12}:=\operatorname{span}\{e_{s_1},e_{s_2}\}$,
$P_{23}:=\operatorname{span}\{e_{s_2},e_{s_3}\}$,
$W_{12}:=\langle s_1,s_2\rangle$, and $W_{23}:=\langle s_2,s_3\rangle$.
By [[thm-cg-root-inversion-formulas-and-strong-exchange]] and
[[lem-cg-finite-dihedral-subsystems-and-canonical-roots]], these are the
generalized rank-two parabolics attached to $P_{12}$ and $P_{23}$.
The positive roots in the displayed planes, in angular order from the ray of
$e_{s_1}$ to that of $e_{s_2}$ and from $e_{s_2}$ to $e_{s_3}$, are
$(e_{s_1},e_{s_1}+e_{s_2},e_{s_2})$ and
$(e_{s_2},e_{s_2}+e_{s_3},e_{s_3})$, respectively.
For each $ij\in\{12,23\}$, on this root order $\omega_c$ is positive on all
pairs in increasing order. For each subgroup, the restrictions
$N(w)\cap\Phi_+\cap P_{ij}$, for $w\in W_{ij}$, are exactly the empty,
initial, and final segments; these are the rank-two patterns in
[[lem-cg-finite-rank-two-inversion-set-recognition]] (1).

**(iv)** For the other Coxeter word $c':=s_1s_3s_2$,
$$E_{c'}=\begin{pmatrix}1&0&0\\-1&1&-1\\0&0&1\end{pmatrix},\quad \omega_{c'}=E_{c'}-E_{c'}^{\mathsf T}=\begin{pmatrix}0&1&0\\-1&0&-1\\0&1&0\end{pmatrix}.$$
Thus $\omega_{c'}(e_{s_1},e_{s_2})=1$ while
$\omega_{c'}(e_{s_2},e_{s_3})=-1$: the orientation of the edge
$\{s_2,s_3\}$ is reversed and the commuting pair $\{s_1,s_3\}$ still has
value $0$. No Axiom of Choice is used.

## Facts & Assumptions

**Given:** The type-$A_3$ Coxeter matrix, its simple basis, real reflection
representation and positive roots, and the two ordered words $c$ and $c'$.

[F1] For the type-$A_3$ matrix, the canonical map to $S_4$ is an isomorphism
([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4)).

[F2] Every standard parabolic $(W_J,J)$ is a Coxeter system with the restricted
matrix ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2)).

[F3] Finite type (spherical type) means exactly that $W$ is finite
([[def-cg-coxeter-diagram-components-and-finite-type]] (4)).

[F4] A Coxeter word uses each element of $S$ once
([[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]] (1)).

[F5] Every Coxeter word is reduced
([[lem-cg-coxeter-word-transport-and-form-independence]] (1)).

[F6] For the chosen ordered word, $K=2B$ and
$E_c(e_{s_i},e_{s_j})=K(e_{s_i},e_{s_j})$ when $i>j$, $1$ when $i=j$, and
$0$ when $i<j$; $\omega_c=E_c-E_c^{\mathsf T}$
([[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]] (2)).

[F7] $B(e_s,e_s)=1$ and $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite
$m(s,t)$ ([[def-cg-real-coxeter-form-and-reflection]] (2)).

[F8] For a root $\alpha=\rho(w)e_s$, its associated reflection is
$t_\alpha:=wsw^{-1}$; in particular, $t_{e_s}=s$
([[thm-cg-root-inversion-formulas-and-strong-exchange]] (1)).

[F9] For every root-spanned plane $P$, there is an $x\in P^\perp$ such that
$B(x,\alpha)\ne0$ for every root $\alpha\notin P$; for such $x$ the
rank-two subgroup $W'=\operatorname{Stab}_W(x)$ satisfies
$t_\alpha\in W'\iff\alpha\in P$
([[lem-cg-finite-dihedral-subsystems-and-canonical-roots]] (1)).

[F10] If $r_1,r_2$ are the extreme positive roots in $P$ and
$a=t_{r_1},b=t_{r_2}$, then $W'=\langle a,b\rangle$ is dihedral
([[lem-cg-finite-dihedral-subsystems-and-canonical-roots]] (2),(3)).

[F11] The reflection with normal $e_s$ is $r_{e_s}(v)=v-2B(v,e_s)e_s$
([[def-cg-real-coxeter-form-and-reflection]] (3)).

[F12] $\rho:W\to\mathrm{GL}(V)$ is a homomorphism with $\rho(s)=r_{e_s}$
([[def-cg-canonical-reflection-homomorphism]] (1)).

[F13] $\Phi=\{\rho(w)e_s:w\in W,s\in S\}$
([[def-cg-canonical-reflection-homomorphism]] (2)).

[F14] $\Phi_+=\Phi\cap V_+$, where $V_+$ is the cone of nonnegative simple
coordinates; every root is positive or negative ([[thm-cg-root-sign-and-simple-reflection-positivity]] (2)).

[F15] A finite positive-root set is an inversion set exactly when every
noncommutative generalized rank-two restriction is empty, an initial segment,
or a final segment ([[lem-cg-finite-rank-two-inversion-set-recognition]] (1)).

[F16] $N(w)=\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_-\}$
([[def-cg-geometric-inversion-set]] (1)).

## Proof

**Proof technique:** compute the Coxeter form entries, apply the triangular Euler-form definition to each word, and evaluate $\omega$ on the two root lists using bilinearity.

1.1 Finite-type setup. By [F1], $W$ is isomorphic to $S_4$ and hence finite; by [F3] it is of finite type. Each displayed word uses every simple generator once by [F4], so [F5] says that $c$ and $c'$ are reduced Coxeter words, as required to define their Euler forms. [F1, F3, F4, F5]

1.2 Cartan and Euler matrices. From [F7], $K_{ii}=2$, $K_{12}=K_{21}=K_{23}=K_{32}=-1$, and $K_{13}=K_{31}=0$. Applying [F6] in the order $(s_1,s_2,s_3)$ gives exactly the displayed $E_c$; subtracting its transpose gives the displayed $\omega_c$. For $x=\sum_i x_i e_{s_i}$, $B(x,x)=(x_1-x_2/2)^2+\frac34(x_2-\frac23x_3)^2+\frac23x_3^2$, so $B$ is positive definite. [F6, F7]

1.3 The second Coxeter word. The word $c'=s_1s_3s_2$ uses each generator once by [F4] and is reduced by [F5]. With its order $(s_1,s_3,s_2)$, [F6]-[F7] give the displayed $E_{c'}$ and $\omega_{c'}$ matrices. Their entries yield $\omega_{c'}(e_{s_1},e_{s_2})=1$, $\omega_{c'}(e_{s_2},e_{s_3})=-1$, and $\omega_{c'}(e_{s_1},e_{s_3})=0$, proving (iv). [F4, F5, F6, F7]

2.1 The two rank-two root lists. Let $f_1,\dots,f_4$ be the standard basis of $\mathbb R^4$ and let $H=\{x:\sum_jx_j=0\}$. The vectors $\alpha_i:=(f_i-f_{i+1})/\sqrt2$ have Gram matrix $K/2=B$ from step 1.2, so $e_{s_i}\mapsto\alpha_i$ extends to an isometry from $V$ to $H$. Under it, [F11]-[F12] identify $\rho(s_i)$ with the coordinate transposition $(i\ i+1)$. Since the adjacent transpositions generate $S_4$ and [F1] identifies $W$ with $S_4$, the root orbit [F13] is exactly $\{\pm(f_p-f_q)/\sqrt2:p<q\}$. The positive members are exactly those with $p<q$, whose simple coordinates are $e_{s_p}+\cdots+e_{s_{q-1}}$, by [F14]. In each rank-two plane the three positive roots have coefficient pairs $(1,0),(1,1),(0,1)$ in its simple basis, so the middle root lies strictly inside the sector from the first simple root to the second. Thus the positive roots in $P_{12}$ and $P_{23}$ are exactly the three displayed in (iii), in the stated angular orders. [F1, F7, F11, F12, F13, F14, step 1.2]

2.2 Symmetrization and simple-root signs. Adding the displayed matrices yields $E_c+E_c^{\mathsf T}=K$. The entries of $\omega_c$ give $\omega_c(e_{s_1},e_{s_2})=1$, $\omega_c(e_{s_2},e_{s_3})=1$, and $\omega_c(e_{s_1},e_{s_3})=0$. [F6, step 1.2]

3.1 All rank-two signs. By bilinearity and the matrix in step 1.2, for $i=1$ and $i=2$ we have $\omega_c(e_{s_i},e_{s_i}+e_{s_{i+1}})=1$, $\omega_c(e_{s_i},e_{s_{i+1}})=1$, and $\omega_c(e_{s_i}+e_{s_{i+1}},e_{s_{i+1}})=1$. Thus every pair in each increasing root order has positive value. [F6, step 1.2, step 2.1]

4.1 Segment restrictions in each rank-two plane. For $P=P_{i,i+1}$, write $W_P=\langle t_\alpha:\alpha\in\Phi\cap P\rangle$ as in [F15]. Its extreme positive roots are $e_{s_i},e_{s_{i+1}}$ by step 2.1. By [F8], their reflections are $s_i,s_{i+1}$; [F9] puts every generator of $W_P$ in $W'$, while [F10] gives $W'=\langle t_{e_{s_i}},t_{e_{s_{i+1}}}\rangle\subseteq W_P$. Thus $W_P=W'=W_{i,i+1}$. By [F2], this subgroup has the two-generator Coxeter presentation with exponent $3$. Its relations $a^2=b^2=(ab)^3=1$ reduce every word to one of $1,a,b,ab,ba,aba$ for $a=s_i,b=s_{i+1}$; the inversion sets below show these six elements are distinct. On $(x,y,z)=(e_{s_i},e_{s_i}+e_{s_{i+1}},e_{s_{i+1}})$, [F7], [F11], and [F12] give $a(x,y,z)=(-x,z,y)$ and $b(x,y,z)=(y,x,-z)$. The restrictions $N(w)\cap\{x,y,z\}$ for $w=1,a,b,ab,ba,aba$, respectively, are $\emptyset,\{x\},\{z\},\{y,z\},\{x,y\},\{x,y,z\}$ by these actions and [F16]. They are exactly the empty, initial, and final segments in the rank-two criterion [F15]. The sign computation in step 3.1 gives the positive orientation. [F2, F3, F7, F8, F9, F10, F11, F12, F15, F16, step 1.1, step 1.2, step 2.1, step 3.1]

5.1 Conclusion. Steps 1.2-4.1 and 1.3 verify (i)-(iv) by exact matrix and root calculations. The computation is finite and makes no choice from an infinite family, so AC is not used. [F1, step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 3.1, step 4.1] ∎
