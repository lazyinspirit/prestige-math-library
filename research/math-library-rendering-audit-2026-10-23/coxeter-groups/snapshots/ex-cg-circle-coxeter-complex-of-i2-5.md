---
id: ex-cg-circle-coxeter-complex-of-i2-5
kind: example
title: "The Coxeter complex of $I_2(5)$: the circle triangulated by the ten chambers"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 17
deps: [cor-inner-product-induces-a-norm, cor-trigonometric-parity-and-pythagorean-identity, def-cg-canonical-reflection-homomorphism, def-cg-finite-reflection-arrangement-and-spherical-chambers, def-cg-geometric-inversion-set, def-cg-real-coxeter-form-and-reflection, def-definiteness-inertia-and-signature-data-over-the-reals, def-dual-family-associated-to-a-basis, def-hh-coxeter-matrix-word-group-and-length, def-matrix-product-and-identity-matrix, def-principal-inverse-sine-and-cosine, lem-cg-reflection-form-invariance-and-rank-two-orders, thm-cg-finite-chamber-tiling-and-coset-face-identification, thm-cg-finite-parabolic-longest-element-and-opposition, thm-cg-finite-type-positive-definite-criterion, thm-cg-root-inversion-formulas-and-strong-exchange, thm-cg-root-sign-and-simple-reflection-positivity, thm-determinant-multiplicative, thm-determinant-of-a-triangular-matrix, thm-dual-family-is-a-basis-in-finite-dimension, thm-hh-parabolic-minimal-representatives-and-length-additivity, thm-quarter-turn-values-and-shift-formulas, thm-sine-and-cosine-addition-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, thm-lagrange]
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
  audited: "2026-10-08"
  precheck: pass
---

## Example

Let $S=\{s,t\}$ with $m(s,t)=5$ and put $c:=\cos(\pi/5)$, so that $B(e_s,e_s)=B(e_t,e_t)=1$ and
$B(e_s,e_t)=-c$ ([[def-cg-real-coxeter-form-and-reflection]],
[[lem-cg-reflection-form-invariance-and-rank-two-orders]] (3)); let $\mathcal A$, $C$, the faces
$\overline{C_I}$, the sphere $S^1$, the coset face poset and the triangulation $\Sigma$ be as in
[[def-cg-finite-reflection-arrangement-and-spherical-chambers]] and
[[thm-cg-finite-chamber-tiling-and-coset-face-identification]]. Then:

**(i)** $B$ is positive definite, $|W|=10$, $|\Phi|=10$, $|\Phi_+|=|T|=5$, and the arrangement
$\mathcal A$ consists of the five distinct root lines $H_\alpha$ ($\alpha\in\Phi_+$).

**(ii)** The five root lines cut $S^1$ into ten arcs, and these arcs are exactly the spherical
chambers $wC\cap S^1$ ($w\in W$); the complex $\Sigma$ is a circle triangulated by ten edges and ten
vertices, five of type $\{t\}$ (the cosets $wW_{\{t\}}$) and five of type $\{s\}$ (the cosets
$wW_{\{s\}}$), with combinatorial Euler characteristic $10-10=0$ (the number of vertices minus the number of edges).

**(iii)** The $B$-dual vectors are $v_s=(e_s+ce_t)/(1-c^2)$ and $v_t=(ce_s+e_t)/(1-c^2)$, with
$B(v_s,v_s)=B(v_t,v_t)=1/(1-c^2)$ and $B(v_s,v_t)=c/(1-c^2)$; hence the two vertices
$u_s:=v_s/\lVert v_s\rVert_B$ and $u_t:=v_t/\lVert v_t\rVert_B$ of the fundamental chamber satisfy
$B(u_s,u_t)=c=\cos(\pi/5)$, so that every spherical chamber subtends the angle
$\arccos c=\pi/5$ at the centre, and the ten arcs account for the full turn
$10\cdot(\pi/5)=2\pi$.

**(iv)** Each vertex of $\Sigma$ lies in exactly two chambers and each chamber has exactly two
vertices; the residue of a vertex of the coset $wW_{\{t\}}$ is the Coxeter complex of the
rank-one parabolic $W_{\{t\}}\cong\mathbb Z/2$, namely the two chambers $wC$ and $wtC$, and
symmetrically for the cosets $wW_{\{s\}}$.

**(v)** The longest element satisfies $\ell(w_0)=5=|\Phi_+|=|T|$, $w_0^2=1$,
$w_0=(st)^2s$, and $\rho(w_0)e_s=-e_t$, $\rho(w_0)e_t=-e_s$; the permutation of
[[thm-cg-finite-parabolic-longest-element-and-opposition]] (1)(v) interchanges $s$ and $t$.

## Facts & Assumptions

**Given:** the two-element set $S=\{s,t\}$ with $m(s,t)=5$, the constant $c=\cos(\pi/5)$, the space $V=\mathbb R^S$ with the Coxeter form $B$, the presented group $W$ with length function $\ell$, the canonical reflection homomorphism $\rho$ with root system $\Phi$, the dual action with chamber $C$, faces $\overline{C_I}$ and Tits cone $U$, the arrangement $\mathcal A$, the unit sphere $S^1$, the coset face poset $\{wW_I:I\subsetneq S\}$ and the triangulation $\Sigma$ of [[def-cg-finite-reflection-arrangement-and-spherical-chambers]] and [[thm-cg-finite-chamber-tiling-and-coset-face-identification]].

[F1] $B(e_s,e_s)=B(e_t,e_t)=1$ and $B(e_s,e_t)=-c$; the reflection formula is $r_a(v)=v-2B(v,a)a$ for $B(a,a)=1$, and in the ordered basis $(e_s,e_t)$ of $P=\mathbb Re_s+\mathbb Re_t$ one has $[\rho(s)]=[r_s]=\begin{pmatrix}-1&2c\\0&1\end{pmatrix}$ and $[\rho(t)]=[r_t]=\begin{pmatrix}1&0\\2c&-1\end{pmatrix}$, so that $[A]=\begin{pmatrix}4c^2-1&-2c\\2c&-1\end{pmatrix}$ for $A:=\rho(s)\rho(t)=\rho(st)$, with $\det A=1$, $A^5=I$ and $A^k\ne I$ for $0<k<5$ ([[def-cg-real-coxeter-form-and-reflection]], [[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2), (3)(i)-(iv), [[def-cg-canonical-reflection-homomorphism]]).

[F2] $c=\cos(\pi/5)$ and $4c^2-2c-1=0$, so $4c^2-1=2c$ and $4c^2-2c=1$; $c>0$ ([[thm-sine-and-cosine-addition-formulas]], [[thm-quarter-turn-values-and-shift-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[F3] $W$ is the group presented on $\{s,t\}$ by $s^2=t^2=(st)^5=1$; $\rho$ is the homomorphism with $\rho(s)=r_s$, $\rho(t)=r_t$, and $\Phi=\{\rho(w)e_s:w\in W\}\cup\{\rho(w)e_t:w\in W\}$ ([[def-hh-coxeter-matrix-word-group-and-length]], [[def-cg-canonical-reflection-homomorphism]]).

[F4] $\Phi=\Phi_+\sqcup\Phi_-$ with $\Phi_+=\Phi\cap V_+$, $V_+=\{\lambda e_s+\mu e_t:\lambda,\mu\ge0\}$ and $V_+\cap(-V_+)=\{0\}$, and $\alpha\mapsto t_\alpha$ is a bijection $\Phi_+\to T$ ([[thm-cg-root-sign-and-simple-reflection-positivity]] (1), (2), [[thm-cg-root-inversion-formulas-and-strong-exchange]] (1)(iv)).

[F5] Chambers and faces of the finite chamber system: $V=\bigcup_{w\in W}wC$, distinct closed chambers have disjoint interiors, $\overline{C_I}=\{\sum_{s\notin I}\lambda_sv_s:\lambda_s\ge0\}$ for the $B$-dual basis $(v_s)_{s\in S}$, the assignment $wW_I\mapsto w\overline{C_I}$ is a bijection onto the proper faces with $wW_I=vW_J\iff w\overline{C_I}=v\overline{C_J}$ and $w\overline{C_I}\cap v\overline{C_J}=w\overline{C_{I\cup J\cup S(v^{-1}w)}}$, and $\Sigma$ realizes $S^1$ as a simplicial complex with one maximal simplex per chamber ([[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (1)-(4)).

[F6] For $J\subseteq S$, $W_J=\{w\in W:S(w)\subseteq J\}$, where $S(w)$ is the support of a reduced expression, and $W_J\cap S=J$; the subsystem $(W_{\{t\}},\{t\})$ is a Coxeter system with $W_{\{t\}}=\{1,t\}$, and symmetrically $W_{\{s\}}=\{1,s\}$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (1), (2)).

[F7] The longest element: for finite $W$ there is a unique $w_0$ with $N(w_0)=\Phi_+$, equivalently with $w_0\cdot C=-C$, and then $\ell(w_0)=|N(w_0)|=|\Phi_+|=|T|$, $w_0^2=1$, and there is a permutation $\sigma$ of $S$ with $\rho(w_0)e_s=-e_{\sigma(s)}$ for every $s\in S$, equivalently $w_0sw_0=\sigma(s)$ ([[thm-cg-finite-parabolic-longest-element-and-opposition]] (1)(i), (ii), (iv), (v), [[def-cg-geometric-inversion-set]]).

[F8] The $B$-dual family: there are $v_s,v_t\in V$ with $B(v_s,e_s)=B(v_t,e_t)=1$ and $B(v_s,e_t)=B(v_t,e_s)=0$, and they form a basis of $V$ ([[def-dual-family-associated-to-a-basis]], [[thm-dual-family-is-a-basis-in-finite-dimension]]).

[F9] $\lVert v\rVert_B=B(v,v)^{1/2}$ is a norm, $\lVert v\rVert_B>0$ for $v\ne0$, and $\arccos(\cos x)=x$ for $x\in[0,\pi]$; for $B$-unit vectors $u,u'$ we define their principal angle to be $\arccos B(u,u')$ ([[cor-inner-product-induces-a-norm]], [[def-principal-inverse-sine-and-cosine]]).

[F10] For the determinant of a matrix: $\det(AB)=\det A\det B$, $\det A^k=(\det A)^k$, and the determinant of a triangular matrix is the product of its diagonal entries ([[def-matrix-product-and-identity-matrix]], [[thm-determinant-multiplicative]], [[thm-determinant-of-a-triangular-matrix]]).

[F11] For a subgroup $H$ of a finite group $G$, the coset count is $[G:H]=|G|/|H|$ ([[thm-lagrange]]).

## Verification

**Proof technique:** explicit computation in the rank-two plane, with the two generators represented by the matrices of [F1].

1.1 The number $c=\cos(\pi/5)$ satisfies $4c^2-2c-1=0$: with $\theta:=\pi/5$ one has $\cos 2\theta=2c^2-1$ and $\cos 3\theta=4c^3-3c$ by the addition formulas, while $3\theta=\pi-2\theta$ gives $\cos 3\theta=-\cos 2\theta=-(2c^2-1)$ by the shift formula $\cos(\pi-x)=-\cos x$; hence $4c^3-3c=-2c^2+1$, that is $(c+1)(4c^2-2c-1)=0$, and $c>0>-1$ forces $4c^2-2c-1=0$, equivalently $4c^2-1=2c$ and $4c^2-2c=1$. [F2, algebra]

1.2 $\rho(s)^2=\rho(s^2)=I$ and $[\rho(s)]$ is triangular with diagonal entries $-1,1$, so $\det\rho(s)=-1$; with $\det A=1$ and $\det A^k=(\det A)^k$ this gives $\det A^k=1$ for every $k\in\mathbb Z$, so no power of $A$ equals $\rho(s)$. [F1, F10, algebra]

1.3 Put $z:=st$. Then $t=sz$, $szs=ts=z^{-1}$, and therefore $sz^k=z^{-k}s$ for every integer $k$. Substitute $t=sz$ into a word in $s,t$ and move every $s$ to the right by this identity, cancelling $s^2=1$; the value is $z^k$ or $z^ks$. Since $z^5=1$, reduce $k$ modulo $5$. Thus $W=\{(st)^k,(st)^ks:0\le k<5\}$ has at most ten elements and is finite. [F1, F3, algebra]

1.4 By the positive-definiteness clause of [F1], $1-c^2=\sin^2(\pi/5)>0$. The dual vectors are $v_s=(e_s+ce_t)/(1-c^2)$ and $v_t=(ce_s+e_t)/(1-c^2)$: with $v_s=\alpha e_s+\beta e_t$ the conditions $B(v_s,e_s)=1$ and $B(v_s,e_t)=0$ read $\alpha-c\beta=1$ and $\beta-c\alpha=0$, that is $\beta=c\alpha$ and $\alpha(1-c^2)=1$; the computation for $v_t$ is symmetric. Then $B(v_s,v_s)=\alpha B(v_s,e_s)+\beta B(v_s,e_t)=\alpha=1/(1-c^2)$ and $B(v_s,v_t)=B(v_s,ce_s+e_t)/(1-c^2)=c/(1-c^2)$, and $B(v_t,v_t)=1/(1-c^2)$ similarly. [F1, F8, algebra]

1.5 The faces containing a face $w\overline{C_I}$ are exactly the faces $u\overline{C_K}$ with $u\in wW_I$ and $K\subseteq I$: if $K\subseteq I$ and $u=wx$ with $x\in W_I$ then $u\overline{C_K}\supseteq u\overline{C_I}=w\overline{C_I}$ because $x$ fixes $\overline{C_I}$ pointwise and $\overline{C_I}\subseteq\overline{C_K}$; conversely $w\overline{C_I}\subseteq u'\overline{C_K}$ makes their intersection equal to $w\overline{C_I}$. By [F5] that intersection is $w\overline{C_{I\cup K\cup S(u'^{-1}w)}}$; the dual-basis formula of [F5] distinguishes the face types, so $I\cup K\cup S(u'^{-1}w)=I$. Hence $K\subseteq I$ and $S(u'^{-1}w)\subseteq I$, giving $u'^{-1}w\in W_I$ by [F6], equivalently $u'\in wW_I$. Here $\overline{C_\emptyset}=C$. [F5, F6, algebra]

2.1 $\rho(s)A\rho(s)^{-1}=\rho(s)\rho(s)\rho(t)\rho(s)^{-1}=\rho(t)\rho(s)=A^{-1}$, using $\rho(s)^{-1}=\rho(s)$ and $A^{-1}=\rho(t)^{-1}\rho(s)^{-1}=\rho(t)\rho(s)$; consequently $\rho(t)=\rho(s)A$ and every element of the subgroup generated by $\rho(s)$ and $\rho(t)$ has the form $A^k$ or $A^k\rho(s)$ with $k\in\mathbb Z$. [step 1.2, F1, F3, algebra]

2.2 The root set is $\Phi=\{\pm e_s,\ \pm e_t,\ \pm 2c(e_s+e_t),\ \pm(2ce_s+e_t),\ \pm(e_s+2ce_t)\}$: in the basis $(e_s,e_t)$ the matrices of $A^k$ applied to $e_s$ give $Ae_s=2c(e_s+e_t)$, $A^2e_s=e_t$, $A^3e_s=-(2ce_s+e_t)$ and $A^4e_s=-(e_s+2ce_t)$ (using $4c^2-1=2c$ and $4c^2-2c=1$), and applying $\rho(s)$, whose matrix sends $e_s\mapsto-e_s$ and $e_t\mapsto 2ce_s+e_t$, to those five vectors gives $-e_s$, $e_s+2ce_t$, $2ce_s+e_t$, $-e_t$ and $-2c(e_s+e_t)$; since by step 1.3 every element of $W$ is $(st)^k$ or $(st)^ks$, the roots $\rho(w)e_s$ ($w\in W$) are exactly those ten vectors. The roots $\rho(w)e_t$ are the values $\rho((st)^k)A^2e_s=A^{k+2}e_s$ and $\rho((st)^ks)e_t=A^k(2ce_s+e_t)$; the first five are $e_t$, $-(2ce_s+e_t)$, $-(e_s+2ce_t)$, $e_s$ and $2c(e_s+e_t)$, and the second five are $2ce_s+e_t$, $e_s+2ce_t$, $-e_s$, $-2c(e_s+e_t)$ and $-e_t$, so both families lie in the displayed set and $\Phi$ equals it. The five vectors $e_s$, $e_t$, $2c(e_s+e_t)$, $2ce_s+e_t$ and $e_s+2ce_t$ have pairwise different coordinate pairs in the basis $(e_s,e_t)$ (because $2c\ne1$: $4c^2-2c-1$ vanishes at $c$ but not at $c=\tfrac12$) and lie in $V_+\setminus\{0\}$, while their negatives lie in $-V_+\setminus\{0\}$; hence the five are pairwise distinct, and $V_+\cap(-V_+)=\{0\}$ shows that none of the ten is a negative of another of the five, so the displayed set has ten elements. By [F4] each root lies in $V_+\setminus\{0\}\cup(-V_+\setminus\{0\})$, so $\Phi_+=\Phi\cap V_+$ consists exactly of those five vectors: $|\Phi|=10$ and $|\Phi_+|=5$. [step 1.3, F1, F3, F4, algebra]

2.3 The vertex $\overline{C_{\{t\}}}=\mathbb R_{\ge0}v_s$ lies in exactly two chambers, namely $C$ and $tC$: by step 1.5 with $I=\{t\}$ the chambers containing it are the $uC$ with $u\in W_{\{t\}}=\{1,t\}$, and these are distinct. Symmetrically the vertex $\overline{C_{\{s\}}}=\mathbb R_{\ge0}v_t$ lies in exactly the chambers $C$ and $sC$; every vertex of $\Sigma$ is of the form $w\overline{C_{\{t\}}}$ or $w\overline{C_{\{s\}}}$ and hence, by the $W$-action, lies in exactly two chambers. Each chamber $wC$ has exactly the two vertices $w\overline{C_{\{s\}}}$ and $w\overline{C_{\{t\}}}$, since these are exactly the two one-dimensional faces of $C$ by the dual-basis formula of [F5]. The residue of the vertex $wW_{\{t\}}$ is therefore the two-point complex $\{wC,wtC\}$, which is the Coxeter complex of the rank-one system $(W_{\{t\}},\{t\})$, and symmetrically for $wW_{\{s\}}$. This proves (iv). [step 1.5, F5, F6, algebra]

3.1 The ten elements $A^k$ and $A^k\rho(s)$ ($0\le k<5$) are pairwise distinct: the $A^k$ are distinct by $A^5=I$ and $A^k\ne I$ for $0<k<5$, the $A^k\rho(s)$ are distinct for the same reason, and $A^k=A^j\rho(s)$ is impossible because the left side has determinant $1$ while $\det\rho(s)=-1$. Hence the image group $\rho(W)=\langle\rho(s),\rho(t)\rangle$ has at least ten elements, so $|W|\ge10$; combined with step 1.3 this gives $|W|=10$. [step 1.3, step 1.2, step 2.1, F1, F10, algebra]

3.2 By steps 1.3 and 2.2 the group $W$ is finite, so the finiteness criterion applies; by clause (1) of [[thm-cg-finite-type-positive-definite-criterion]] the form $B$ is positive definite. The map $\alpha\mapsto t_\alpha$ is a bijection $\Phi_+\to T$ by [F4], so $|T|=5$; and $H_{-\alpha}=H_\alpha$ because $B(v,-\alpha)=-B(v,\alpha)$, so $\mathcal A=\{H_\alpha:\alpha\in\Phi_+\}$. The five lines are pairwise distinct: the five positive roots correspond in the coordinates $(y_s,y_t)$ to the directions $(1,0)$, $(0,1)$, $(2c,2c)$, $(2c,1)$ and $(1,2c)$; two of these are proportional only if the corresponding pairs differ by a common nonzero factor, which fails for $(1,0)$ and $(0,1)$ against all others (a zero coordinate stays zero) and for the remaining three, as is checked by comparing ratios: $(2c,2c)$ versus $(1,2c)$ would force $2c=1$, $(2c,2c)$ versus $(2c,1)$ likewise, and $(2c,1)$ versus $(1,2c)$ would force $4c^2=1$, hence $2c+1=1$ and $c=0$, contrary to $4c^2-2c-1=-1\ne0$. This proves (i). [step 2.2, F4, algebra]

3.3 Put $w_1:=(st)^2s$; then $\rho(w_1)=A^2\rho(s)$ has matrix $\begin{pmatrix}0&-1\\1&-2c\end{pmatrix}\begin{pmatrix}-1&2c\\0&1\end{pmatrix} =\begin{pmatrix}0&-1\\-1&0\end{pmatrix}$, so $\rho(w_1)e_s=-e_t$ and $\rho(w_1)e_t=-e_s$; applied to the five positive roots in the order of step 2.2 this gives $-e_t$, $-e_s$, $-2c(e_s+e_t)$, $-(e_s+2ce_t)$ and $-(2ce_s+e_t)$, so $\rho(w_1)\Phi_+=\Phi_-$ and hence $N(w_1)=\Phi_+$. [step 2.2, F1, F7, algebra]

4.1 By [F5] the chamber $C$ equals $\{\lambda v_s+\mu v_t:\lambda,\mu\ge0\}$, the cone over the segment $[v_s,v_t]$, and $0\notin[v_s,v_t]$ because $v_s,v_t$ are linearly independent; the radial projection $x\mapsto x/\lVert x\rVert_B$ of that segment is therefore a continuous injective map of a connected set, so $C\cap S^1$ is an arc with endpoints $u_s$ and $u_t$. Its images $\rho(w)(C\cap S^1)=wC\cap S^1$ under the ten elements of $W$ are the ten spherical chambers; by [F5] the closed chambers cover $S^1$ and distinct closed chambers have disjoint interiors, so these ten closed arcs cover the circle and meet only in their endpoints, and the five root lines meet $S^1$ in exactly the ten endpoints; hence the five lines cut $S^1$ into the ten arcs $wC\cap S^1$. The triangulation $\Sigma$ has one edge per chamber and one vertex per coset $wW_{\{s\}}$, $wW_{\{t\}}$; by [F6] and [F11] these cosets number $|W|/|W_{\{t\}}|=10/2=5$ and $|W|/|W_{\{s\}}|=5$, so $\Sigma$ is a circle with ten edges and ten vertices and Euler characteristic $10-10=0$. [F5, F6, F11, step 1.3, step 2.2, step 3.1, algebra]

5.1 Consequently $B(u_s,u_t)=B(v_s,v_t)/(\lVert v_s\rVert_B\lVert v_t\rVert_B)=(c/(1-c^2))/(1/(1-c^2))=c$, so the endpoints of the fundamental arc subtend the principal angle $\arccos c=\arccos(\cos(\pi/5))=\pi/5$. For each $w\in W$ the map $\rho(w)$ preserves $B$ by [F1] and therefore preserves $\lVert\cdot\rVert_B$, so $B(\rho(w)u_s,\rho(w)u_t)=B(u_s,u_t)=c$; hence every spherical chamber subtends the same angle $\pi/5$, and the ten arcs account for the full turn $10\cdot(\pi/5)=2\pi$. [step 4.1, step 1.4, F1, F9, algebra]

6.1 By [F7] the element with $N(w_0)=\Phi_+$ is unique, so $w_1=w_0$; consequently $\ell(w_0)=|N(w_0)|=|\Phi_+|=5=|T|$, $w_0^2=1$, and the permutation $\sigma$ of [F7] satisfies $\rho(w_0)e_s=-e_{\sigma(s)}$; since $\rho(w_0)e_s=-e_t$ and $\rho(w_0)e_t=-e_s$, $\sigma$ interchanges $s$ and $t$. This proves (v) and completes all clauses. [step 2.2, step 3.3, F7, algebra] ∎

## Remarks

- **The two vertices of the fundamental arc.** The arc $C\cap S^1$ is cut out by the two walls $H_{e_t}$ and $H_{e_s}$ through its endpoints $u_s$ and $u_t$, in agreement with the general vertex description $C\cap S^{1}\cap\bigcap_{t\ne s}H_{e_t}=\{v_s/\lVert v_s\rVert_B\}$ of [[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (2).

- **Lengths versus angles.** Clause (iii) computes the principal angles subtended by the ten arcs; it does not use, and does not assert, any identification of a path length on $S^1$ with that angle, which belongs to the metric theory of spherical complexes on the in-run page `spherical-simplex-metrics-angular-links-and-cones`.
