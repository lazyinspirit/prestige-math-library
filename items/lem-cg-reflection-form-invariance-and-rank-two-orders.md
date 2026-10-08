---
id: lem-cg-reflection-form-invariance-and-rank-two-orders
kind: lemma
title: "Reflections: involutivity, form invariance, fixed hyperplane, and exact rank-two order"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 2
deps: [def-cg-real-coxeter-form-and-reflection, def-hh-coxeter-matrix-word-group-and-length, def-linear-map, def-linear-subspace, def-kernel-and-image-of-a-linear-map, thm-rank-nullity, def-rank-and-nullity, def-dimension, def-linear-basis, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-linear-combination-and-span, def-sum-of-linear-subspaces, def-internal-direct-sum, lem-direct-sum-criterion, def-coordinate-column-and-matrix-of-a-linear-map, thm-matrix-of-a-composite-is-the-product, def-matrix-product-and-identity-matrix, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-zero-sets-and-fundamental-period, thm-reals-ordered-field, def-definiteness-inertia-and-signature-data-over-the-reals, thm-bilinear-forms-correspond-to-linear-maps-into-the-dual, lem-standard-basis-of-f-n, def-function-space, def-bilinear-symmetric-skew-and-alternating-forms, thm-quarter-turn-values-and-shift-formulas, def-sine-and-cosine-by-power-series, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press; author's full institutional PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "\u00a76.12, printed p. 117: Lemma 6.12.3 and its proof, including the $m=\\infty$ computation $(\\rho_i\\rho_j)^n(e_i)=2nu+e_i$ with $u=e_i+e_j$ and the finite case via the sector of angle $\\pi/m$; Appendix D.1, printed p. 441: the determinant $1-\\cos^2(\\pi/m)=\\sin^2(\\pi/m)>0$"
    - title: "Anders Bj\u00f6rner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "\u00a74.2, printed p. 93: Proposition 4.2.1 (the order of $\\sigma_s\\sigma_{s'}$ is $m(s,s')$); \u00a71.2, printed p. 6: Example 1.2.7, the dihedral rotation through $2\\pi/m$"
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters (revised 2014 text, arXiv:math/0208154v2)"
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "\u00a71.3, printed p. 11: Proposition 1.3 and its proof, with the characteristic polynomial $X^2-2\\cos\\frac{2\\pi}{m}X+1$ and the order-$m$ conclusion"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $S$, $m$, $V=\mathbb R^S$, $B$ and $r_a$ be as in [[def-cg-real-coxeter-form-and-reflection]].

**(1) Well-definedness of $B$.** The functions $e_s$ ($s\in S$) form a basis of $V$, and there is exactly one symmetric bilinear form $B$ on $V$ with $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite $m(s,t)$ and $B(e_s,e_t)=-1$ for $m(s,t)=\infty$; it satisfies $B(u,w)=\sum_{s,t\in S}u(s)w(t)B(e_s,e_t)$ for all $u,w\in V$.

**(2) Reflection identities.** Let $a\in V$ with $B(a,a)\ne0$. Then $r_a$ is linear, $r_a^2=\mathrm{id}_V$, $r_a(a)=-a$, $r_a(v)=v$ for every $v$ with $B(v,a)=0$, and $B(r_au,r_aw)=B(u,w)$ for all $u,w\in V$. Moreover $\ker B(-,a)$ is a linear subspace of dimension $\dim V-1$ (a hyperplane of $V$, in the codimension-one sense) and is fixed pointwise by $r_a$.

**(3) The rank-two plane.** Let $s\ne t$ in $S$, put $P:=\mathbb Re_s+\mathbb Re_t$ and $c:=c(s,t)$ as in [[def-cg-real-coxeter-form-and-reflection]] (so $c=1$ when $m(s,t)=\infty$). Then:

(i) $B|_P$ has Gram matrix $\begin{pmatrix}1&-c\\-c&1\end{pmatrix}$; for finite $m$ it is positive definite, with $B(x_se_s+x_te_t,\,x_se_s+x_te_t)=(x_s-cx_t)^2+\sin^2(\pi/m)\,x_t^2$; for $m=\infty$ it is positive semidefinite, i.e. $B(x,x)\ge0$ for all $x\in P$, with radical $\mathbb R(e_s+e_t)$.

(ii) $r_s$ and $r_t$ fix every element of $P^\perp=\{v\in V:B(v,e_s)=B(v,e_t)=0\}$ pointwise; and if $m<\infty$ then $V=P\oplus P^\perp$.

(iii) The product $A:=r_sr_t$ has, in the ordered basis $(e_s,e_t)$ of $P$, the matrix $A=\begin{pmatrix}4c^2-1&-2c\\2c&-1\end{pmatrix}$, of determinant $1$.

(iv) If $m<\infty$ then $\operatorname{tr}A=2\cos(2\pi/m)$, $A^m=\mathrm{id}_V$, and $A^k\ne\mathrm{id}_V$ for $0<k<m$. If $m=\infty$ then $A=\mathrm{id}_P+N$ on $P$ for some $N$ with $N\ne0$ and $N^2=0$; hence $(r_sr_t)^k|_P=\mathrm{id}_P+kN$ for every $k\in\mathbb Z$, so $r_sr_t$ has infinite order on $V$.

## Facts & Assumptions

**Given:** a finite set $S$, a Coxeter matrix $m$ on $S$, the real vector space $V=\mathbb R^S$, the Coxeter form $B$ and the maps $r_a$ defined for $B(a,a)\ne0$ of [[def-cg-real-coxeter-form-and-reflection]], and, for the rank-two clauses, distinct $s,t\in S$ with $c:=c(s,t)$.

[F1] The data fixed by the Statement: $m(s,s)=1$ and $m(s,t)=m(t,s)\in\{2,3,\dots\}\cup\{\infty\}$ for $s\ne t$; $e_s\in V$ is the function with $e_s(s)=1$ and $e_s(t)=0$ for $t\ne s$; and $c(s,t)=\cos(\pi/m(s,t))$ for finite $m(s,t)$, while $c(s,t)=1$ when $m(s,t)=\infty$ ([[def-cg-real-coxeter-form-and-reflection]], [[def-function-space]]).

[F2] A bilinear form on $V$ is a function $V\times V\to\mathbb R$ that is linear in each variable separately, and it is symmetric when $B(u,v)=B(v,u)$ for all $u,v\in V$ ([[def-bilinear-symmetric-skew-and-alternating-forms]], [[def-cg-real-coxeter-form-and-reflection]]).

[F3] For a linear map $T$ of a finite-dimensional vector space over $\mathbb R$ one has $\dim V=\dim(\ker T)+\dim(\operatorname{im}T)$, and $\dim_{\mathbb R}\mathbb R=1$; if a linear map $V\to\mathbb R$ has a nonzero value then its image is all of $\mathbb R$ and its rank is $1$ ([[thm-rank-nullity]], [[def-rank-and-nullity]], [[lem-standard-basis-of-f-n]]).

[F4] In ordered bases the matrix of a composite is the product of the matrices of the factors, matrix powers are iterated products, and $I_2$ denotes the identity matrix ([[def-coordinate-column-and-matrix-of-a-linear-map]], [[thm-matrix-of-a-composite-is-the-product]], [[def-matrix-product-and-identity-matrix]]).

[F5] Trigonometric values and identities: the addition formulas $\sin(x+y)=\sin x\cos y+\cos x\sin y$ and $\cos(x+y)=\cos x\cos y-\sin x\sin y$; $\sin^2x+\cos^2x=1$; $\sin x=0$ if and only if $x\in\pi\mathbb Z$, and $\cos x=0$ if and only if $x=(k+\frac12)\pi$ for some $k\in\mathbb Z$; $\cos(\pi/2)=0$, $\cos\pi=-1$, $\cos(x+\pi)=-\cos x$, and $\cos 0=1$ by the defining series evaluated at $0$ ([[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[thm-quarter-turn-values-and-shift-formulas]], [[def-sine-and-cosine-by-power-series]]).

[F6] For linear subspaces: $V=U\oplus W$ means $U+W=V$ and $U\cap W=\{0_V\}$; a symmetric bilinear form is positive definite when $B(v,v)>0$ for every $v\ne0$; the left radical of a bilinear form is $\operatorname{rad}_L(B)=\{u:B(u,v)=0\text{ for every }v\}$ ([[def-internal-direct-sum]], [[lem-direct-sum-criterion]], [[def-definiteness-inertia-and-signature-data-over-the-reals]], [[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]).

[F7] In the ordered field $\mathbb R$ one has $2\ne0$, so $2a=0_V$ implies $a=0_V$ ([[thm-reals-ordered-field]]).

## Proof

**Proof technique:** direct finite-dimensional computation, in layers: first the basis and reflection algebra, then the rank-two plane with its trigonometry, and finally the order statements on the whole space.

1.1 The functions $e_s$ are linearly independent: if $\sum_{s\in S}\lambda_se_s=0_V$ then evaluating at $s$ gives $\lambda_s=0$. They span $V$: every $u\in V$ satisfies $u=\sum_{s\in S}u(s)e_s$, since the right side is a finite sum ($S$ is finite) whose value at any $t\in S$ is $u(t)$. So $(e_s)_{s\in S}$ is a basis of $V$. Consequently, for all $u,w\in V$ one has $B(u,w)=\sum_{s,t\in S}u(s)w(t)B(e_s,e_t)$: expanding $u$ and $w$ in the basis and distributing with bilinearity in each variable gives that finite sum. In particular a bilinear form on $V$ is determined by the numbers $B(e_s,e_t)$. [given, F1, F2]

1.2 The displayed $r_a$ for $B(a,a)\ne0$ is linear in $v$, because $v\mapsto B(v,a)$ is linear and $r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$ is a sum of the identity and the composite of that functional with scalar multiplication by $a$; also $r_a(a)=a-\frac{2B(a,a)}{B(a,a)}a=a-2a=-a$, and $r_a(v)=v$ for every $v\in\ker B(-,a)$. Moreover $B(r_av,a)=B(v,a)-\frac{2B(v,a)}{B(a,a)}B(a,a)=-B(v,a)$, so $r_a(r_a(v))=r_a(v)-\frac{2B(r_av,a)}{B(a,a)}a=r_a(v)+\frac{2B(v,a)}{B(a,a)}a=v$; hence $r_a^2=\mathrm{id}_V$. Finally, expanding with bilinearity and cancelling the equal cross terms via symmetry $B(u,a)=B(a,u)$ and $B(w,a)=B(a,w)$, $$B(r_au,r_aw)=B(u,w)-\frac{2B(u,a)B(a,w)}{B(a,a)}-\frac{2B(w,a)B(a,u)}{B(a,a)}+\frac{4B(u,a)B(w,a)}{B(a,a)}=B(u,w),$$ so $r_a$ is $B$-preserving. [given, F1, F2, algebra]

1.3 Put $\varphi(v):=B(v,a)$. By $B(a,a)\ne0$ the value $\varphi(a)$ is nonzero, so the image of $\varphi$ is all of $\mathbb R$ and its rank is $1$; the kernel $\ker B(-,a)=\ker\varphi$ is a linear subspace and rank-nullity gives $\dim\ker B(-,a)=\dim V-1$. [given, F1, F2, F3]

1.4 For distinct $s,t\in S$, evaluating the definition of $r$ at $e_s$ and $e_t$ with $B(e_s,e_s)=B(e_t,e_t)=1$ and $B(e_s,e_t)=-c$ gives $r_s(e_s)=-e_s$, $r_s(e_t)=e_t+2ce_s$, $r_t(e_t)=-e_t$ and $r_t(e_s)=e_s+2ce_t$. Hence in the ordered basis $(e_s,e_t)$ the matrices are $[r_s]=\begin{pmatrix}-1&2c\\0&1\end{pmatrix}$ and $[r_t]=\begin{pmatrix}1&0\\2c&-1\end{pmatrix}$, and the composite $A:=r_sr_t$ has matrix $$[A]=[r_s][r_t]=\begin{pmatrix}4c^2-1&-2c\\2c&-1\end{pmatrix},\qquad \det[A]=(4c^2-1)(-1)-(2c)(-2c)=1 .$$ [given, F1, F2, F4, algebra]

1.5 On $P=\mathbb Re_s+\mathbb Re_t$ write $x=x_se_s+x_te_t$. Bilinearity and the values $B(e_s,e_s)=B(e_t,e_t)=1$, $B(e_s,e_t)=-c$ give $B(x,x)=x_s^2-2cx_sx_t+x_t^2=(x_s-cx_t)^2+(1-c^2)x_t^2$. For finite $m$ one has $1-c^2=\sin^2(\pi/m)$ and $\sin(\pi/m)\ne0$ because $0<\pi/m\le\pi/2$ and the sine zero set is $\pi\mathbb Z$; hence $B(x,x)>0$ whenever $x\ne0$, so $B|_P$ is positive definite. For $m=\infty$ one has $c=1$ and $B(x,x)=(x_s-x_t)^2\ge0$, which vanishes exactly when $x_s=x_t$, i.e. on $\mathbb R(e_s+e_t)$; and $\mathbb R(e_s+e_t)$ is precisely the radical of $B|_P$, since $B(x,e_s)=x_s-cx_t$ and $B(x,e_t)=x_t-cx_s$ vanish for all such $x$, while $x_s\ne x_t$ makes $B(x,e_s)\ne0$. [given, F1, F2, F5, F6, algebra]

1.6 Assume $m<\infty$ and put $\theta:=\pi/m$, so $c=\cos\theta$. The trace of the matrix in 1.4 is $\operatorname{tr}[A]=4c^2-2=2(2c^2-1)=2\cos 2\theta$ by the double-angle instance of the addition formulas, and the $2\times2$ Cayley-Hamilton identity, verified directly from the displayed entries, reads $A^2=2\cos2\theta\,A-I_2$. For $m\ge3$ one has $2\theta\in(0,\pi)$ and $\sin2\theta\ne0$, and for $m=2$ one has $c=\cos(\pi/2)=0$, so $[A]=-I_2$. [given, F1, F4, F5, algebra]

2.1 Assume $m\ge3$; then $\sin2\theta\ne0$ and induction on $k\ge1$ using $A^2=2\cos2\theta\,A-I_2$ and the product-to-sum identity $2\sin x\cos y=\sin(x+y)+\sin(x-y)$ gives $$A^k=\frac{\sin(2k\theta)A-\sin(2(k-1)\theta)I_2}{\sin2\theta}$$ for every $k\ge1$: the case $k=1$ is $\sin0=0$, and the induction step replaces $A^{k+1}=A\cdot A^k$ using the displayed identity. Hence $A^m=I_2$ because $\sin(2m\theta)=\sin(2\pi)=0$ and $\sin(2(m-1)\theta)=-\sin2\theta$. If $1\le k<m$ and $A^k=I_2$, then $\sin(2k\theta)A=\bigl(\sin2\theta+\sin(2(k-1)\theta)\bigr)I_2$; were $\sin(2k\theta)\ne0$, the matrix $A$ would be scalar, contradicting its nonzero off-diagonal entry $-2c$ (for $m\ge3$ the value $c$ is nonzero, since $c=0$ would force $\pi/m=(j+\frac12)\pi$, that is $2/m=2j+1>0$ for an integer $j$, so $j\ge0$ and $2/m\ge1$, impossible because $m\ge3$). So $\sin(2k\theta)=0$, and then $\sin(2(k-1)\theta)=\sin(2k\theta-2\theta)=-\cos(2k\theta)\sin2\theta$ forces $\cos(2k\theta)=1$; with $\sin(2k\theta)=0$ it gives $2k\theta\in2\pi\mathbb Z$ (indeed $\sin x=0$ writes $x=\ell\pi$, and $\cos(\ell\pi)=(-1)^\ell$ follows from $\cos0=1$ and $\cos(x+\pi)=-\cos x$, so $\cos(2k\theta)=1$ forces $\ell$ even), hence $m\mid k$, contradicting $1\le k<m$. Hence $A^k\ne I_2$ for $0<k<m$. [given, F5, step 1.6, algebra]

2.2 Assume $m=\infty$, so $c=1$ and $[A]=\begin{pmatrix}3&-2\\2&-1\end{pmatrix}=I_2+N$ with $N=\begin{pmatrix}2&-2\\2&-2\end{pmatrix}$. Then $N\ne0$ and $N^2=0$ by direct multiplication, so the binomial theorem gives $A^k=I_2+kN$ for every $k\ge0$, while $A^{-1}=I_2-N$ because $(I_2+N)(I_2-N)=I_2-N^2=I_2$, so $(I_2-N)^j=I_2+(-j)N$ for $j\ge0$ and $A^k=I_2+kN$ for every $k\in\mathbb Z$. For $k\ne0$ the matrix $kN$ has entry $2k\ne0$ in its first column, so $A^k\ne I_2$; the product $A=r_sr_t$ therefore has infinite order on $P$. [given, F4, F7, step 1.4, algebra]

2.3 The Coxeter form $B$ of the Statement is well defined: the prescription $B(u,w):=\sum_{s,t\in S}u(s)w(t)\bigl(-c(s,t)\bigr)$ is a finite sum of scalar multiples of products of coordinate values, hence a function $V\times V\to\mathbb R$ linear in each variable; it is symmetric because $c(s,t)=c(t,s)$, which follows from $m(s,t)=m(t,s)$ and the symmetry of cosine; and it has $B(e_s,e_t)=-c(s,t)$ for all $s,t$. By 1.1 it is the unique symmetric bilinear form with these values, and $c(s,s)=\cos(\pi/1)=\cos\pi=-1$ gives $B(e_s,e_s)=1$. [given, F1, F2, F5, step 1.1]

2.4 The maps $r_s$ and $r_t$ fix $P^\perp=\{v\in V:B(v,e_s)=B(v,e_t)=0\}$ pointwise, since $r_s(v)=v-\frac{2B(v,e_s)}{B(e_s,e_s)}e_s=v$ and likewise for $t$. If $m<\infty$, then $V=P\oplus P^\perp$: the Gram matrix $\begin{pmatrix}1&-c\\-c&1\end{pmatrix}$ of $B|_P$ has determinant $1-c^2=\sin^2(\pi/m)\ne0$, so for given $v$ the $2\times2$ system $B(p,e_s)=B(v,e_s)$, $B(p,e_t)=B(v,e_t)$ has a unique solution $p\in P$; then $z:=v-p$ satisfies $B(z,e_s)=B(z,e_t)=0$, hence $z\in P^\perp$ and $v=p+z$, so $P+P^\perp=V$. If $p\in P\cap P^\perp$ then $B(p,p)=0$ with $p\in P$, and positive definiteness of $B|_P$ forces $p=0$; thus $P\cap P^\perp=\{0\}$ and $V=P\oplus P^\perp$. [given, F1, F2, F6, step 1.2, step 1.4, step 1.5]

3.1 Let $A=r_sr_t$. If $m<\infty$, then $A^m|_P=I_2$ and $A^k|_P\ne I_2$ for $0<k<m$ by steps 1.6 and 2.1 and the case $m=2$ of step 1.6, while $A|_P$ has the matrix displayed in step 1.4; on $P^\perp$ the map $A$ fixes every vector by step 2.4, so $A^m=\mathrm{id}_V$ and $A^k\ne\mathrm{id}_V$ for $0<k<m$ because its restriction to the direct summand $P$ differs from $I_2$. If $m=\infty$, then $[A]=I_2+N$ with $N\ne0$, $N^2=0$ and $A^k|_P=I_2+kN\ne I_2$ for every $k\ne0$ by step 2.2, so $A^k\ne\mathrm{id}_V$ for every $k\ne0$ and $r_sr_t$ has infinite order on $V$. [given, step 1.6, step 2.1, step 2.2, step 2.4] ∎
