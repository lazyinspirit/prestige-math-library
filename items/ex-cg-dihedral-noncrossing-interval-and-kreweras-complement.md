---
id: ex-cg-dihedral-noncrossing-interval-and-kreweras-complement
kind: example
title: "The noncrossing interval of a dihedral group: a five-reflection claw for I2(5) and its complement"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 24
deps:
  - def-cg-coxeter-noncrossing-poset-and-kreweras-map
  - thm-cg-noncrossing-finite-lattice-and-conjugacy-independence
  - thm-cg-kreweras-complement-and-type-a-partition-model
  - def-hh-coxeter-matrix-word-group-and-length
  - def-cg-coxeter-diagram-components-and-finite-type
  - def-cg-real-coxeter-form-and-reflection
  - def-cg-reflection-length-absolute-order-and-moved-space
  - def-cg-canonical-reflection-homomorphism
  - lem-cg-reflection-representation-descends-and-root-norms
  - cor-pi-is-the-first-positive-sine-zero
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-sine-and-cosine-addition-formulas
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "D. Armstrong, Generalized Noncrossing Partitions and Combinatorics of Coxeter Groups, Memoirs of the AMS 202 (2009), no. 949, arXiv:math/0611106v2"
      url: "https://arxiv.org/pdf/math/0611106"
      locator: "§2.5, printed pp. 27–28, Lemma 2.5.4 (the interval Kreweras map); §2.6, printed pp. 30–33, Definitions 2.6.1 and 2.6.7 and Lemma 2.6.2 (finite Coxeter elements and the interval); the dihedral calculations below are supplied locally from the rank-two presentation and the exact order of st."
verification:
  audited: "2026-10-08"
---

## Example

Let $m\ge2$ be an integer and let $(W,S)$ be the Coxeter system with $S=\{s,t\}$ and $m(s,t)=m$. Put $c=st$ and let $T$, $\ell_T$, and $\le_T$ be its reflection set, reflection length, and absolute order ([[def-hh-coxeter-matrix-word-group-and-length]], [[def-cg-coxeter-diagram-components-and-finite-type]], [[def-cg-reflection-length-absolute-order-and-moved-space]]). Then $W$ has order $2m$, is of finite type ($I_2(m)$ for $m\ge3$ and $A_1\times A_1$ for $m=2$), and $T$ has exactly $m$ elements. The Coxeter form on $\mathbb R^S$ is positive definite for every such finite $m$, in particular for $m=4$ and $m=5$ ([[def-cg-real-coxeter-form-and-reflection]]).

**(1) The interval.** Every reflection has length one; every nonidentity rotation has length two; and
$$[1,c]_{\le_T}=\{1\}\cup T\cup\{c\}.$$
Thus the interval has $m+2$ elements and $\ell_T(c)=2$. For $m=5$ it is a five-reflection claw, and for $m=4$ it is a four-reflection claw.

**(2) The lattice.** The interval is a lattice. For distinct reflections $r,r'$, $r\wedge r'=1$ and $r\vee r'=c$; also $1\wedge r=1$, $1\vee r=r$, $c\wedge r=r$, and $c\vee r=c$. This is the corresponding instance of the finite-type lattice theorem ([[thm-cg-noncrossing-finite-lattice-and-conjugacy-independence]] (2),(4)).

**(3) Kreweras complement.** On $\operatorname{NC}(W,c)=[1,c]_{\le_T}$ let $K(w)=w^{-1}c$ ([[def-cg-coxeter-noncrossing-poset-and-kreweras-map]], [[thm-cg-kreweras-complement-and-type-a-partition-model]] (1)). It interchanges $1$ and $c$. If $r_k:=c^ks$ for $k\in\mathbb Z/m\mathbb Z$, then $T=\{r_k:0\le k<m\}$ and
$$K(r_k)=r_{k-1},\qquad K^2(r_k)=r_{k-2}.$$
Thus $K$ permutes the reflections in one $m$-cycle, and $K^2$ is the identity on $T$ for $m=2$; for $m\ge3$, it rotates the reflection axes through $-2\pi/m$ in the orthonormal orientation used below (an angle of magnitude $2\pi/m$), giving one $m$-cycle when $m$ is odd and two cycles of length $m/2$ when $m$ is even.

## Facts & Assumptions

**Given:** The rank-two Coxeter presentation with finite label $m$, its real Coxeter form, the reflection-length absolute order, and the interval/Kreweras conventions above.

[F1] The group is presented by $s^2=t^2=1$ and $(st)^m=1$, and a map from $\{s,t\}$ to any group that satisfies these relations extends uniquely to a homomorphism ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F2] $\ell_T$ is the minimum number of factors from $T$ and $u\le_Tv$ exactly when $\ell_T(v)=\ell_T(u)+\ell_T(u^{-1}v)$ ([[def-cg-reflection-length-absolute-order-and-moved-space]] (1)–(2)).

[F3] The real Coxeter form satisfies $B(e_s,e_s)=B(e_t,e_t)=1$ and $B(e_s,e_t)=-\cos(\pi/m)$ for finite $m$ ([[def-cg-real-coxeter-form-and-reflection]] (1)–(2)).

[F4] On a finite-type noncrossing interval, $K(w)=w^{-1}c$ is an order-reversing bijection and $K^2(w)=c^{-1}wc$ ([[thm-cg-kreweras-complement-and-type-a-partition-model]] (1)).

[F5] Sine is positive on $(0,\pi)$ ([[cor-pi-is-the-first-positive-sine-zero]]); $\sin^2x+\cos^2x=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]); and the sine and cosine addition formulas hold ([[thm-sine-and-cosine-addition-formulas]]).

[F6] The canonical homomorphism $\rho$ sends $s,t$ to the orthogonal reflections with normals $e_s,e_t$, and conjugation transports reflection normals by $\rho(w)$ ([[def-cg-canonical-reflection-homomorphism]] (1),(2), [[lem-cg-reflection-representation-descends-and-root-norms]] (1),(4)).

## Verification

**Proof technique:** use $c=st$ and the exact order $m$ to list all group elements and reflections, then apply the absolute-order length equality to those two element types.

**Given:** The data above.

1.1 (The dihedral group and its reflections.) The defining relations give $c^m=1$, $t=sc$, and $scs=c^{-1}$. The order of $c$ is exactly $m$: if $m\ge3$, let $R(i)=i+1$ and $J(i)=-i$ on $\mathbb Z/m\mathbb Z$. Since $J^2=1$ and $JRJ=R^{-1}$, the assignment $s\mapsto J$, $t\mapsto JR$ satisfies $s^2=t^2=1$ and $st\mapsto R$, so [F1] gives a homomorphism with the image of $c$ of order $m$. If $m=2$, map $s,t$ to the independent coordinate flips of $(\mathbb Z/2\mathbb Z)^2$; these are commuting involutions, satisfy the defining relations, and their product has order $2$. Since $c^m=1$ in $W$, in both cases $c$ has exact order $m$. Now $W=\langle s,c\rangle$ and $sc^k=c^{-k}s$, so every word reduces to $c^k$ or $c^ks$, with $k$ taken modulo $m$. These at most $2m$ forms are distinct: the $c^k$ are distinct by the exact order just proved, the $c^ks$ are distinct by cancellation, and the two families are separated by the homomorphism $\varepsilon:W\to\{1,-1\}$ with $\varepsilon(s)=\varepsilon(t)=-1$, which exists by [F1] because both simple generators map to $-1$ and $st$ maps to $1$. Thus $|W|=2m$. The reflection set is exactly $T=\{c^ks:0\le k<m\}$. Every conjugate of $s$ or $t$ has $\varepsilon=-1$ and is therefore in this list. Conversely, for every integer $j$, $c^jsc^{-j}=c^{2j}s$ and, since $t=sc$, $c^jtc^{-j}=c^{2j-1}s$. The exponents $2j$ and $2j-1$ cover all residues modulo $m$, so every $c^ks$ is a conjugate of a simple reflection. In particular $|T|=m$. [F1, algebra]

1.2 (The Coxeter form and its plane action.) Put $\theta=\pi/m$ and $q=\cos\theta$. For $x=ae_s+be_t$, [F3] and [F5] give $B(x,x)=a^2-2qab+b^2=(a-qb)^2+\sin^2\theta\,b^2$. Since $0<\theta\le\pi/2<\pi$, [F5] gives $\sin\theta>0$, so this is positive for every nonzero $(a,b)$. In orthonormal coordinates take $e_s=(1,0)$ and $e_t=(-\cos\theta,\sin\theta)$. The reflection formula $R(v)=I-2vv^{\mathsf T}$ and [F5] give
$$\rho(c)=\rho(s)\rho(t)=\begin{pmatrix}\cos(2\theta)&-\sin(2\theta)\\\sin(2\theta)&\cos(2\theta)\end{pmatrix}.$$
Thus $c$ rotates this plane through $2\pi/m$. The order calculation in step 1.1 proves finite type, including $m=2$, where $s,t$ commute and the diagram consists of two isolated vertices. [F3, F5, F6, step 1.1, algebra]

2.1 (Reflection lengths.) Every $r\in T$ is nonidentity and is itself a reflection, so $\ell_T(r)=1$. Each nonidentity rotation $c^k$ is not in $T$ by the sign $\varepsilon$, and $c^k=(c^ks)s$ is a product of two reflections; hence $\ell_T(c^k)=2$. In particular $c$ has length $2$. [F2, step 1.1, algebra]

3.1 (The interval below $c$.) The identity and $c$ lie below $c$. For $r_k=c^ks\in T$, $r_k$ is a conjugate of an involutory simple reflection, so $r_k^{-1}=r_k$, and $r_k^{-1}c=r_kc=c^ksc=c^{k-1}s=r_{k-1}\in T,$ so $\ell_T(r_k)+\ell_T(r_k^{-1}c)=2=\ell_T(c)$ and every reflection lies below $c$. If $c^k$ is a rotation other than $1$ or $c$, then $c^{1-k}$ is also a nonidentity rotation, so $\ell_T(c^k)+\ell_T((c^k)^{-1}c)=2+2=4\ne2$. These are all group elements by step 1.1, proving the interval formula. When $m=2$ there are no rotations other than $1,c$, so the same argument covers that case. [F2, step 1.1, step 2.1, algebra]

4.1 (Lattice operations.) The interval in step 3.1 has bottom $1$, top $c$, and $m$ distinct reflections of equal length $1$ between them. Distinct reflections are incomparable by [F2], since each has the same length and a strict absolute-order comparison would require positive length increase. Thus two distinct reflections have only $1$ as common lower bound and only $c$ as common upper bound; operations with $1$ and $c$ are forced by their bottom/top roles. This proves the displayed lattice operations directly and verifies the finite-type lattice conclusion in this example. [F2, step 3.1, algebra]

5.1 (Kreweras action on reflections.) By [F4], $K$ is an order-reversing bijection; its explicit action is $K(1)=c$, $K(c)=1$, and $K(r_k)=r_{k-1}$ by step 3.1. It therefore cycles through all $m$ reflections. Direct multiplication gives $K^2(w)=c^{-1}wc$ and $c^{-1}r_kc=c^{k-2}s=r_{k-2}$. By [F6] and step 1.2, this conjugation rotates each reflection axis through $-2\pi/m$ in the displayed orientation (an angle of magnitude $2\pi/m$); for $m=2$, a rotation through $\pi$ fixes every unoriented axis. Iterating $k\mapsto k-2$ returns to $k$ exactly when $m$ divides $2j$. The least positive such $j$ is $m$ for odd $m$ and $m/2$ for even $m$. Hence $K^2$ has one cycle for odd $m$, two cycles for even $m$, and is the identity on $T$ when $m=2$. [F1, F4, F6, step 1.2, step 3.1, algebra] ∎
