---
id: ex-cg-a-tilde-1-infinity-edge-versus-finite-dihedral
kind: example
title: "The A-tilde 1 infinity edge, separated from finite dihedral families and from the 4-edge"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 17
deps:
  - def-cg-irreducible-affine-coxeter-type
  - def-cg-standard-affine-diagrams
  - lem-cg-affine-slice-simplex-and-wall-reflections
  - lem-cg-affine-type-crystallographic-alcove-diagrams
  - def-cg-real-coxeter-form-and-reflection
  - def-hh-coxeter-matrix-word-group-and-length
  - def-linear-basis
  - def-function-space
  - def-bilinear-symmetric-skew-and-alternating-forms
  - def-pi-via-first-positive-cosine-zero
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-sine-and-cosine-by-power-series
  - cor-sine-and-cosine-are-one-lipschitz
  - cor-cauchy-reals-lub-complete
  - thm-reals-ordered-field
  - cor-archimedean-reciprocal
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, Princeton University Press, 2008; 600 PDF pages)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Section 6.4, Example 6.4.1 (printed p. 82; PDF p. 98) identifies reflections in the endpoints of a Euclidean interval with the infinite dihedral group. Theorem 6.4.3 and its proof (printed pp. 83-84; PDF pp. 99-100) allow m_ij = infinity for disjoint facets and require finite integer labels only when facets intersect. Section 6.8, Definition 6.8.11 and Theorem 6.8.12 (printed pp. 101-102; PDF pp. 117-118) define the cosine matrix and, unlike Theorem 6.4.3, explicitly assume no Coxeter label is infinity."
    - title: "R. Xiong, Lectures on Affine Weyl Groups (complete lecture notes, October 26, 2024; 77 PDF pages)"
      url: "https://cubicbear.github.io/doc/affineNotes.pdf"
      locator: "Chapter 1, Section 1.4 (printed p. 3): the dihedral group D_m as the Coxeter group I_2(m); Section 1.6 (printed p. 4): the low-rank coincidence B2=C2; Chapter 2, Sections 2.2-2.3 (PDF p. 11): the A1 affine Weyl group, its coroot-lattice translations, and the infinite-dihedral presentation."
  scraped: []
---

## Statement

Let $S=\{s,t\}$, let $m(s,t)=\infty$, let $V=\mathbb R^S$ with coordinate basis $(e_s,e_t)$, and let $B$ be the real Coxeter form. Thus the diagram is the two-vertex standard affine diagram $\tilde A_1$ with its single $\infty$-edge ([[def-cg-standard-affine-diagrams]] (1)), and $$[B]_{(e_s,e_t)}=\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$$ ([[def-cg-real-coxeter-form-and-reflection]] (2)). Then:

**(i) The degenerate form.** $B$ is positive semidefinite of corank one, with $\operatorname{rad}(B)=\mathbb R\delta$ for $\delta=e_s+e_t=(1,1)>0$. The product of the two generator reflections is represented by a nonidentity unipotent matrix of infinite order. Hence $\tilde A_1$ is of affine form type but its Coxeter group is infinite.

**(ii) The slice and its reflection action.** The slice $E=\{\varphi\in V^*:\varphi(\delta)=1\}$ has coordinate $\alpha=\varphi(e_s)$ and $\varphi(e_t)=1-\alpha$. Its walls are $\alpha=0$ and $\alpha=1$, its vertices are $v_s=(1,0)$ and $v_t=(0,1)$, and $\bar A=[v_t,v_s]$ is a Euclidean $1$-simplex ([[lem-cg-affine-slice-simplex-and-wall-reflections]] (2)-(4)). The facet reflections are $\rho^*(s):\alpha\mapsto-\alpha$ and $\rho^*(t):\alpha\mapsto2-\alpha$. For the left dual action, $(st)\cdot\alpha=\alpha-2$ and $(ts)\cdot\alpha=\alpha+2$. Their group is the rank-one affine reflection group $W_a(A_1)\cong2\mathbb Z\rtimes\{\pm1\}$; it acts simply transitively on the open alcoves $$\{(k,k+1):k\in\mathbb Z\}.$$

**(iii) Finite rank-two labels.** If instead $m(s,t)=m<\infty$, where $m\ge2$, then $$\det[B]=1-\cos^2(\pi/m)=\sin^2(\pi/m)>0,$$ so the Coxeter form is positive definite and has no radical. The presented group is finite: every word reduces to $(st)^k$ or $(st)^ks$, and the relation $(st)^m=1$ leaves at most $2m$ elements. For $m\ge3$ these are the finite dihedral families $I_2(m)$; for $m=2$ the diagram is disconnected and the group is $A_1\times A_1$. Thus among two-vertex Coxeter diagrams, the only affine one is $\tilde A_1$.

**(iv) The label $4$ is different.** The two-vertex label-$4$ diagram is the finite $B_2=C_2=I_2(4)$ diagram; it is not $\tilde A_1$. In the standard affine extension of $B_2$ or $C_2$, the added affine vertex gives the three-vertex path with labels $(4,4)$, namely $\tilde B_2=\tilde C_2$ ([[def-cg-standard-affine-diagrams]] (7); [[lem-cg-affine-type-crystallographic-alcove-diagrams]] (1)).

**(v) Source-hypothesis caveat.** Davis's Euclidean simplex criterion, Theorem 6.8.12(ii), assumes that every Coxeter label is finite. The $\infty$-edge case above is established directly. Numerically, the convention $\cos(\pi/\infty)=1$ agrees with $\lim_{m\to\infty}\cos(\pi/m)=1$, but the infinite label imposes no finite $(st)^m$ relator and gives the degenerate matrix in (i).

## Facts & Assumptions

**Given:** The two-element set $S=\{s,t\}$, the Coxeter matrix with $m(s,t)=\infty$, the coordinate space $V=\mathbb R^S$, its real Coxeter form $B$, and the dual affine slice of [[def-cg-irreducible-affine-coxeter-type]].

[F1] The Coxeter form has $B(e_s,e_s)=B(e_t,e_t)=1$ and $B(e_s,e_t)=-1$; for a unit basis vector the reflection is $r_{e_u}(v)=v-2B(v,e_u)e_u$ ([[def-cg-real-coxeter-form-and-reflection]] (2)-(3)).

[F2] $B$ is symmetric and bilinear ([[def-bilinear-symmetric-skew-and-alternating-forms]]).

[F3] The group is presented by $s^2=t^2=1$ and the relator $(st)^m=1$ only when $m(s,t)<\infty$; an infinite label imposes no relator on the pair ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F4] Affine form type means a connected diagram and a positive-semidefinite Coxeter form of corank one ([[def-cg-irreducible-affine-coxeter-type]] (1)).

[F5] For this affine form, the closed slice is a Euclidean simplex with vertices $v_u(e_u)=1/\delta_u$, $v_u(e_v)=0$ for $v\ne u$, and each generator acts by reflection in its wall ([[lem-cg-affine-slice-simplex-and-wall-reflections]] (3)-(4)).

[F6] $\tilde A_1$ is the two-vertex graph with an $\infty$-edge, and it is the only standard affine diagram with such an edge. The finite label-$4$ diagram is the two-vertex $B_2=C_2=I_2(4)$ diagram, while $\tilde B_2=\tilde C_2$ is the three-vertex path $(4,4)$ ([[def-cg-standard-affine-diagrams]] (1),(7)).

[F7] $\pi>0$, $\cos(\pi/2)=0$, and $\sin(\pi/2)=1$ ([[def-pi-via-first-positive-cosine-zero]], [[thm-quarter-turn-values-and-shift-formulas]]).

[F8] Cosine is strictly decreasing on $[0,\pi]$, and sine is strictly increasing on $[0,\pi/2]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[F9] $\sin^2x+\cos^2x=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[F10] In the affine highest-root table, both $B_2$ and $C_2$ add a label-$4$ edge to their finite label-$4$ diagram, giving the path $(4,4)$ ([[lem-cg-affine-type-crystallographic-alcove-diagrams]] (1)).

[F11] The functions $(e_s,e_t)$ form the coordinate basis of $\mathbb R^S$: every function is determined by its two values and is their corresponding linear combination of $e_s,e_t$ ([[def-linear-basis]], [[def-function-space]]).

[F12] $\cos 0=1$ from the defining power series ([[def-sine-and-cosine-by-power-series]]).

[F13] Davis identifies the group generated by reflections in a Euclidean interval's endpoints as the infinite dihedral group (Example 6.4.1, printed p. 82).

[F14] In type $A_1$, Xiong describes the affine Weyl group using the coroot lattice $Q^\vee=\mathbb Z\alpha^\vee$ (Chapter 2, §§2.2–2.3, PDF p. 11).

[F15] Davis's Theorem 6.8.12 assumes that no Coxeter label is $\infty$ (printed p. 102).

[F16] Xiong records the low-rank finite Weyl-group coincidence $B_2=C_2$ (Chapter 1, Section 1.6, printed p. 4).

[F17] Xiong identifies the dihedral group $D_m$ of order $2m$ with the Coxeter group of type $I_2(m)$ (Chapter 1, Section 1.4, printed p. 3).

[F18] Cosine is $1$-Lipschitz: $|\cos u-\cos v|\le|u-v|$ for all real $u,v$ ([[cor-sine-and-cosine-are-one-lipschitz]]).

[F19] $\mathbb R$ is a complete ordered field, so for every $\eta>0$ there is an integer $N\ge1$ with $1/N<\eta$ ([[cor-cauchy-reals-lub-complete]], [[thm-reals-ordered-field]], [[cor-archimedean-reciprocal]]).

[F20] $\pi>0$ ([[def-pi-via-first-positive-cosine-zero]]).

## Proof

**Proof technique:** compute the rank-two form, its reflection matrices, the slice coordinates, and the group orbit explicitly. No Choice is used.

1.1 The matrix in the statement gives $B(x_se_s+x_te_t,x_se_s+x_te_t)=(x_s-x_t)^2$. Also $B(x,e_s)=x_s-x_t$ and $B(x,e_t)=x_t-x_s$, so the radical is exactly $\mathbb R(e_s+e_t)$. Thus $B$ is positive semidefinite of corank one; the diagram is connected, so the pair is of affine form type by [F4]. [F1,F2,F4,F11,algebra]

1.2 In the ordered basis $(e_s,e_t)$, direct substitution in [F1] gives $$[r_{e_s}]=\begin{pmatrix}-1&2\\0&1\end{pmatrix},\qquad [r_{e_t}]=\begin{pmatrix}1&0\\2&-1\end{pmatrix}.$$ Both square to the identity. Their product is $$[r_{e_s}r_{e_t}]=\begin{pmatrix}3&-2\\2&-1\end{pmatrix}=I+N,\qquad N=\begin{pmatrix}2&-2\\2&-2\end{pmatrix},\quad N\ne0,\quad N^2=\begin{pmatrix}2\cdot2+(-2)\cdot2&2\cdot(-2)+(-2)\cdot(-2)\\2\cdot2+(-2)\cdot2&2\cdot(-2)+(-2)\cdot(-2)\end{pmatrix}=0.$$ Since $m(s,t)=\infty$, the presentation in [F3] has no relation beyond the two involutions, so the assignment $s\mapsto r_{e_s}$, $t\mapsto r_{e_t}$ defines a representation of $W$. For every integer $k$, $(I+N)^k=I+kN$ (use $(I+N)^{-1}=I-N$ for $k<0$), which is never the identity when $k\ne0$. Thus the product is a nonidentity unipotent of infinite order and $W$ is infinite. [F1,F2,F3,F11,algebra]

1.3 Here $\delta_s=\delta_t=1$. The slice condition is $\varphi(e_s)+\varphi(e_t)=1$, so with $\alpha=\varphi(e_s)$ its points are exactly $(\alpha,1-\alpha)$ for $\alpha\in\mathbb R$. The vertices from [F5] are $v_s=(1,0)$ and $v_t=(0,1)$; the alcove inequalities give $0<\alpha<1$, and its closure is the Euclidean segment $[v_t,v_s]$. The two walls are its endpoints $\alpha=0$ and $\alpha=1$. [F5,F11,algebra]

1.4 For the left dual action, $(w\cdot\varphi)(v)=\varphi(\rho(w)^{-1}v)$. Since each reflection is involutory, evaluating at $e_s$ gives $(s\cdot\varphi)(e_s)=\varphi(-e_s)=-\alpha$. Also $r_{e_t}(e_s)=e_s+2e_t$ by [F1], so $(t\cdot\varphi)(e_s)=\alpha+2(1-\alpha)=2-\alpha$. Therefore $s\cdot\alpha=-\alpha$ and $t\cdot\alpha=2-\alpha$. Under the left-action convention, $(st)\cdot\alpha=s\cdot(t\cdot\alpha)=\alpha-2$, while $(ts)\cdot\alpha=t\cdot(s\cdot\alpha)=\alpha+2$. [F1,F5,F11,algebra]

1.5 If $m=m(s,t)<\infty$, then $m\ge2$ and $0<\pi/m\le\pi/2$. By [F7]-[F8] and $\cos0=1$ from [F12], $0\le c:=\cos(\pi/m)<1$. Therefore $$\det\begin{pmatrix}1&-c\\-c&1\end{pmatrix}=1-c^2=\sin^2(\pi/m)>0,$$ where the identity is [F9] and positivity follows from $0\le c<1$. Moreover the quadratic form is $(x_s-cx_t)^2+(1-c^2)x_t^2$, positive for every nonzero $(x_s,x_t)$; thus it has no radical. From [F3], $ts=(st)^{-1}$ and every word reduces to an alternating word, hence to $(st)^k$ or $(st)^ks$; the finite relator $(st)^m=1$ reduces $k$ modulo $m$, leaving at most $2m$ elements. At $m=2$ the generators commute; the presentation maps onto $A_1\times A_1$ by sending them to the two factors, and the normal-form bound gives at most four elements, so $W\cong A_1\times A_1$. For $m\ge3$, let $X=\mathbb Z/m\mathbb Z$ and define permutations $\sigma(j)=-j$ and $\tau(j)=1-j$. They are involutions and $(\sigma\tau)(j)=j-1$, which has exact order $m$. The $m$ maps $(\sigma\tau)^k$ are distinct translations, and the $m$ maps $(\sigma\tau)^k\sigma$ are distinct reflections. No reflection is a translation: equality of $j\mapsto-j-k$ and $j\mapsto j+\ell$ at $j=0,1$ would imply $m\mid2$, contrary to $m\ge3$. By [F3], these permutations define a homomorphic image of $W$ with $2m$ elements. Together with the upper bound, this proves that $W$ is the finite dihedral group $I_2(m)$ of order $2m$, with the standard Coxeter notation [F17]. [F1,F2,F3,F7,F8,F9,F12,F17,algebra]

2.1 Compositions of $\alpha\mapsto-\alpha$ and $\alpha\mapsto2-\alpha$ are precisely the maps $\alpha\mapsto\pm\alpha+2k$ for $k\in\mathbb Z$: the product $(ts)^k$ is translation by $2k$, and composing it with $s$ gives every orientation-reversing map of this form. The images of $(0,1)$ are all integer intervals: translations by $2k$ give $(2k,2k+1)$ and composing those translations with $\alpha\mapsto2-\alpha$ gives $(2k+1,2k+2)$. A positive-orientation map stabilizes $(0,1)$ only when $k=0$; a negative-orientation map sends it to $(2k-1,2k)$, which cannot equal $(0,1)$ for integral $k$. Hence the action is simply transitive on these alcoves. This is the rank-one affine reflection group $W_a(A_1)$; its translation subgroup is $2\mathbb Z$ and its linear part is $\{\pm1\}$, hence $W_a(A_1)\cong2\mathbb Z\rtimes\{\pm1\}$ as in Xiong's rank-one affine Weyl group example. [F3,F5,F11,F13,F14,step 1.4,algebra]

2.2 For $m(s,t)=4$, the finite diagram has one label-$4$ edge, whereas $\tilde A_1$ has one label-$\infty$ edge by [F6]; these labelled graphs are distinct. Xiong's low-rank coincidence [F16] matches the two names $B_2$ and $C_2$ for this finite type. Their rank-two affine extensions have one additional label-$4$ edge by [F10], giving the three-vertex path $(4,4)=\tilde B_2=\tilde C_2$, not $\tilde A_1$. [F6,F10,F16,step 1.5,algebra]

3.1 The matrix entry $B(e_s,e_t)=-1$ for $m(s,t)=\infty$ is the defining convention in [F1]. For any $\varepsilon>0$, [F20] gives $\varepsilon/\pi>0$, so apply [F19] to choose $N\ge1$ with $1/N<\varepsilon/\pi$. If $m\ge N$, then $0<N/m\le1$, so $0<\pi/m\le\pi/N<\varepsilon$. By the Lipschitz bound [F18] and $\cos0=1$ [F12], $|\cos(\pi/m)-1|\le\pi/m<\varepsilon$; hence $\lim_{m\to\infty}\cos(\pi/m)=1$, confirming that the matrix convention is the numerical limit. The infinite label still imposes no finite relator by [F3]. By [F15], Davis's cited Euclidean simplex criterion assumes every Coxeter label is finite, so the rank-one $\infty$-edge case is established directly here. No choice principle is used. [F1,F3,F12,F15,F18,F19,F20,algebra] ∎
