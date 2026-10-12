---
id: thm-nrqm-orbital-and-spin-tensor-spin-composition
aliases: [ nrqm-orbital-and-spin-tensor-spin-composition ]
kind: theorem
domain: mathematics
title: "Tensor spin composition"
status: draft
origin: pipeline
dependency_level: 2
deps:
  - prop-nrqm-orbital-and-spin-finite-spin-matrices
  - thm-nrqm-orbital-and-spin-finite-spin-block-decomposition
  - thm-tensor-product-basis-from-bases
  - def-inner-product-space
  - def-linear-map
  - def-linear-subspace
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-self-adjoint-and-normal-endomorphism
  - def-orthogonality-and-orthogonal-complement
  - def-dimension
  - def-natural-numbers
  - def-finite-sum-in-a-commutative-monoid
  - def-factorial-and-falling-factorial
  - cor-inner-product-induces-a-norm
  - lem-nrqm-composites-hilbert-tensor-construction
dependency_roles:
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  thm-nrqm-orbital-and-spin-finite-spin-block-decomposition: mathematical-premise
  thm-tensor-product-basis-from-bases: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-linear-map: mathematical-premise
  def-linear-subspace: mathematical-premise
  def-adjoint-of-a-linear-map-between-inner-product-spaces: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  def-orthogonality-and-orthogonal-complement: mathematical-premise
  def-dimension: mathematical-premise
  def-natural-numbers: mathematical-premise
  def-finite-sum-in-a-commutative-monoid: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 7
        (Angular Momentum), §7.5 pp. 173-176 (addition of angular momenta) and
        §7.5.1 pp. 173-175 (case j1 = j2 = 1/2)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 'Angular Momentum',
        §2 pp. 11-18 (algebraic theory and weights) and Chapter 8 'Multiparticle
        States and Tensor Products' (tensor products and product bases)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2f\
        d50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
---

## Statement

Let $s,t\in\frac12\mathbb N$, write $L_s:=\{-s,-s+1,\dots,s\}$ and $L_t:=\{-t,-t+1,\dots,t\}$, and let
$(V_s,J^{(s)}_x,J^{(s)}_y,J^{(s)}_z)$ and $(V_t,J^{(t)}_x,J^{(t)}_y,J^{(t)}_z)$ be the spin models of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]] with orthonormal bases $(e^{(s)}_m)_{m\in L_s}$ and
$(e^{(t)}_n)_{n\in L_t}$ and the ladders $J^{(s)}_\pm:=J^{(s)}_x\pm iJ^{(s)}_y$,
$J^{(t)}_\pm:=J^{(t)}_x\pm iJ^{(t)}_y$ and Casimirs $J^{(s)2}$, $J^{(t)2}$
([[thm-tensor-product-basis-from-bases]]). On the tensor product $V_s\otimes V_t$ put

$$J^{\mathrm{tot}}_i:=J^{(s)}_i\otimes I_{V_t}+I_{V_s}\otimes J^{(t)}_i\quad(i=x,y,z),\qquad J^{\mathrm{tot}}_\pm:=J^{\mathrm{tot}}_x\pm iJ^{\mathrm{tot}}_y,\qquad J^{\mathrm{tot}\,2}:=(J^{\mathrm{tot}}_x)^2+(J^{\mathrm{tot}}_y)^2+(J^{\mathrm{tot}}_z)^2 .$$

Then:

(a) each $J^{\mathrm{tot}}_i$ is self-adjoint, the triple $J^{\mathrm{tot}}_x,J^{\mathrm{tot}}_y,J^{\mathrm{tot}}_z$
satisfies the commutation relations of
[[thm-nrqm-orbital-and-spin-finite-spin-block-decomposition]], and
$J^{\mathrm{tot}\,2}=J^{(s)2}\otimes I_{V_t}+I_{V_s}\otimes J^{(t)2}+2\sum_{i}J^{(s)}_i\otimes J^{(t)}_i$ is
self-adjoint and commutes with $J^{\mathrm{tot}}_x,J^{\mathrm{tot}}_y,J^{\mathrm{tot}}_z$;

(b) there is an orthogonal decomposition $V_s\otimes V_t=\bigoplus_{j=|s-t|}^{s+t}W_j$ into
$J^{\mathrm{tot}}$-invariant subspaces, one for each $j\in\{|s-t|,|s-t|+1,\dots,s+t\}$, with
$\dim W_j=2j+1$, on each of which $(J^{\mathrm{tot}}_x,J^{\mathrm{tot}}_y,J^{\mathrm{tot}}_z)$ is unitarily
equivalent to the spin-$j$ model of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]]; consequently
$\sum_{j=|s-t|}^{s+t}(2j+1)=(2s+1)(2t+1)$;

(c) for every $M\in\frac12\mathbb Z$ the $M$-eigenspace of $J^{\mathrm{tot}}_z$ has dimension
$$N(M):=\#\{m\in L_s:\ M-m\in L_t\}=\begin{cases}\max\bigl(0,\ \min(s,M+t)-\max(-s,M-t)+1\bigr),&M-(s+t)\in\mathbb Z,\\0,&M-(s+t)\notin\mathbb Z.\end{cases},$$
and the identity $(e^{(s)}_m\otimes e^{(t)}_n)_{m,n}$ is an orthonormal basis of $V_s\otimes V_t$ consisting of
eigenvectors of $J^{\mathrm{tot}}_z$ with eigenvalues $m+n$;

(d) the number of summands with parameter equal to $M$ in the decomposition of (b) is
$N(M)-N(M+1)$ if $M\ge0$, and this number equals $1$ when $M-(s+t)\in\mathbb Z$ and $|s-t|\le M\le s+t$, and equals $0$ otherwise; hence the
multiset of parameters in (b) is exactly $\{|s-t|,|s-t|+1,\dots,s+t\}$, each occurring once;

(e) for each $j\in\{|s-t|,\dots,s+t\}$ the space of vectors of $J^{\mathrm{tot}}_z$-eigenvalue $j$ orthogonal to
all summands $W_{j'}$ with $j'>j$ is one-dimensional; for a unit vector $u_j$ in it the vectors
$$v_{j,k}:=\bigl(k!(2j)(2j-1)\cdots(2j-k+1)\bigr)^{-1/2}(J^{\mathrm{tot}}_-)^ku_j\qquad(0\le k\le2j)$$
form an orthonormal basis of $W_j$ with $J^{\mathrm{tot}}_zv_{j,k}=(j-k)v_{j,k}$,
$J^{\mathrm{tot}}_+v_{j,k}=\sqrt{k(2j-k+1)}\,v_{j,k-1}$ and
$J^{\mathrm{tot}}_-v_{j,k}=\sqrt{(k+1)(2j-k)}\,v_{j,k+1}$; the coefficients of $v_{j,k}$ in the product basis
are therefore determined by the phase of $u_j$, and choosing that phase fixes the Clebsch-Gordan numbers
explicitly; in particular $u_{s+t}=e^{(s)}_s\otimes e^{(t)}_t$ is a permissible choice.

The theorem is a purely mathematical statement about tensor products of the explicit matrices of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]]; it asserts no physical coupling, conservation law or
measurement fact.

## Facts & Assumptions

**Given:** $s,t\in\frac12\mathbb N$; the spin models $V_s,V_t$ with their operators and orthonormal bases; the tensor product $V_s\otimes V_t$; the operators $J^{\mathrm{tot}}_i$, $J^{\mathrm{tot}}_\pm$, $J^{\mathrm{tot}\,2}$.

[F1] By [[thm-tensor-product-basis-from-bases]], the algebraic tensor product $V_s\otimes V_t$ has the finite basis $e^{(s)}_m\otimes e^{(t)}_n$. Give its coordinate vectors the inner product $\langle\sum c_{mn}e_m\otimes e_n,\sum d_{mn}e_m\otimes e_n\rangle=\sum c_{mn}\overline{d_{mn}}$. This is positive definite, makes that basis orthonormal, and expansion of two elementary tensors gives $\langle u\otimes v,u'\otimes v'\rangle=\langle u,u'\rangle\langle v,v'\rangle$. This is a finite construction with explicitly supplied bases; no completion or countable choice is invoked.

[F2] Define $S\otimes T$ by its values $Se_m\otimes Te_n$ on the finite product basis. Bilinear expansion gives $(S\otimes T)(u\otimes v)=Su\otimes Tv$, and hence $(S\otimes T)(S'\otimes T')=(SS')\otimes(TT')$. The inner product of [F1] gives $\langle(S\otimes T)(u\otimes v),u'\otimes v'\rangle=\langle u\otimes v,(S^*\otimes T^*)(u'\otimes v')\rangle$, proving $(S\otimes T)^*=S^*\otimes T^*$ on the spanning product basis. Also $I\otimes I=I$, so $[S\otimes I,S'\otimes I]=[S,S']\otimes I$, $[I\otimes T,I\otimes T']=I\otimes[T,T']$, and operators acting on different factors commute.

[F3] On $V_s$ and $V_t$ the operators are self-adjoint, satisfy $[J_x,J_y]=iJ_z$ and its cyclic companions, and have $J^2=s(s+1)I_{V_s}$, respectively $t(t+1)I_{V_t}$; the ladder actions on the bases are $J^{(s)}_\pm e^{(s)}_m=\sqrt{(s\mp m)(s\pm m+1)}e^{(s)}_{m\pm1}$ and $J^{(s)}_ze^{(s)}_m=me^{(s)}_m$ ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]]).

[F4] Every finite-dimensional triple of self-adjoint operators satisfying the commutation relations decomposes orthogonally into spin blocks with $\sum_\nu(2j_\nu+1)=\dim V$, the block actions being the spin-$j_\nu$ actions; the number of blocks with parameter $M\ge0$ equals $\dim\ker(J_z-MI)-\dim\ker(J_z-(M+1)I)$, and $M$ must lie in $\frac12\mathbb N$ ([[thm-nrqm-orbital-and-spin-finite-spin-block-decomposition]] (b), (d)).

[F5] $\dim(V_s\otimes V_t)=\dim V_s\dim V_t=(2s+1)(2t+1)$, and dimensions add over orthogonal direct sums ([[lem-nrqm-composites-hilbert-tensor-construction]], [[def-dimension]], [[def-orthogonality-and-orthogonal-complement]]).

[F6] For a self-adjoint operator the eigenspaces for distinct eigenvalues are orthogonal, and for a unit vector $w$ and self-adjoint $T$, $\langle Tw,w\rangle=\langle w,Tw\rangle$ is real; $\|w\|^2=\langle w,w\rangle$ ([[def-self-adjoint-and-normal-endomorphism]], [[def-orthogonality-and-orthogonal-complement]], [[cor-inner-product-induces-a-norm]]).

[F7] Factorials and products: $k!=\prod_{i=1}^k i\ge1$ for $k\ge0$, and a finite product of positive numbers is positive ([[def-factorial-and-falling-factorial]], [[def-natural-numbers]]).



## Proof

1.1 [Self-adjointness and the algebra] For $i=x,y,z$, [F2] and [F3] give $(J^{(s)}_i\otimes I)^*=J^{(s)}_i\otimes I$ and $(I\otimes J^{(t)}_i)^*=I\otimes J^{(t)}_i$, so $J^{\mathrm{tot}}_i$ is self-adjoint. Adding the two-sided commutators, $[J^{\mathrm{tot}}_x,J^{\mathrm{tot}}_y]=[J^{(s)}_x,J^{(s)}_y]\otimes I+I\otimes[J^{(t)}_x,J^{(t)}_y]=iJ^{(s)}_z\otimes I+iI\otimes J^{(t)}_z=iJ^{\mathrm{tot}}_z$, and cyclically; so the triple satisfies the commutation relations. [F2, F3, algebra]

1.2 [Weights] By [F1] and [F3], $J^{\mathrm{tot}}_z(e^{(s)}_m\otimes e^{(t)}_n)=(m+n)e^{(s)}_m\otimes e^{(t)}_n$, so the elementary tensors form an orthonormal eigenbasis of $J^{\mathrm{tot}}_z$ with eigenvalues $m+n$, and the number of basis vectors of eigenvalue $M$ is the number of pairs $(m,n)\in L_s\times L_t$ with $m+n=M$, which is $\#\{m\in L_s:M-m\in L_t\}=N(M)$; all sums $m+n$ lie in $s+t+\mathbb Z$, so $N(M)=0$ off that lattice. On the lattice, the interval endpoints lie in the same unit-spaced lattice $L_s$; the displayed closed form follows by counting the interval $[\max(-s,M-t),\min(s,M+t)]$, which is empty exactly when the maximum exceeds the minimum, and otherwise contributes one element per unit lattice step. [F1, F3, algebra]

2.1 [The Casimir] Expanding $J^{\mathrm{tot}\,2}=\sum_i(J^{(s)}_i\otimes I+I\otimes J^{(t)}_i)^2$ gives $J^{(s)2}\otimes I+I\otimes J^{(t)2}+2C$ with $C:=\sum_iJ^{(s)}_i\otimes J^{(t)}_i$, which is self-adjoint by [F2] and [F3]; moreover $[J^{\mathrm{tot}\,2},J^{\mathrm{tot}}_i]=[J^{(s)2},J^{(s)}_i]\otimes I+I\otimes[J^{(t)2},J^{(t)}_i]+2[C,J^{(s)}_i\otimes I+I\otimes J^{(t)}_i]$ vanishes because the first two commutators are $0$ by [F3] and $2[C,J^{(s)}_i\otimes I+I\otimes J^{(t)}_i]=2i\sum_{k,l}\varepsilon_{kil}(J^{(s)}_l\otimes J^{(t)}_k+J^{(s)}_k\otimes J^{(t)}_l)=0$, the parenthesised tensor being symmetric in $k,l$ while $\varepsilon_{kil}$ is antisymmetric. [step 1.1, F2, F3, algebra]

2.2 [The parity-qualified difference] Restrict now to $M\ge0$. If $M-(s+t)\notin\mathbb Z$, neither $M$ nor $M+1$ is a weight and both counts are zero by step 1.2. On the compatible lattice, exchange the factors if necessary to suppose $s\ge t$. Counting the interval in step 1.2 gives $N(M)=\min(2t+1,s+t-M+1)$ for $0\le M\le s+t$, and $N(M)=0$ for $M>s+t$. Therefore $N(M)-N(M+1)=0$ on the plateau $0\le M<s-t$, equals one for $s-t\le M\le s+t$, and is zero above $s+t$, including the upper endpoint where $N(s+t)=1$ and $N(s+t+1)=0$. Restoring factor symmetry gives precisely the admissible lattice points in $[|s-t|,s+t]$. [step 1.2, F1, algebra]

3.1 [Existence and parameter list] By steps 1.1, 2.1 and [F4] the triple $(J^{\mathrm{tot}}_x,J^{\mathrm{tot}}_y,J^{\mathrm{tot}}_z)$ decomposes $V_s\otimes V_t$ into an orthogonal direct sum of spin blocks with parameters $j_\nu\in\frac12\mathbb N$, and by [F4](d) the number of blocks with parameter $M$ equals $\dim\ker(J^{\mathrm{tot}}_z-MI)-\dim\ker(J^{\mathrm{tot}}_z-(M+1)I)=N(M)-N(M+1)$ for $M\ge0$, which by step 2.2 is $1$ precisely for $M\in\{|s-t|,|s-t|+1,\ldots,s+t\}$ and $0$ otherwise. Hence the block parameters are exactly the numbers $|s-t|,|s-t|+1,\dots,s+t$, each once; each block has dimension $2j+1$ and its operators are unitarily equivalent to the spin-$j$ model by [F4](b). The dimension identity $\sum_{j=|s-t|}^{s+t}(2j+1)=(2s+1)(2t+1)$ follows from $\sum_\nu(2j_\nu+1)=\dim(V_s\otimes V_t)$ and [F5]. This proves (b) and (d). [step 1.1, step 2.1, step 2.2, F4, F5, algebra]

4.1 [The constructive bases and Clebsch-Gordan phase] Fix $j$ in the parameter list and let $E_j$ be the space of $J^{\mathrm{tot}}_z$-eigenvectors of eigenvalue $j$ orthogonal to all blocks $W_{j'}$ with $j'>j$. Counting as in step 3.1, $\dim\ker(J^{\mathrm{tot}}_z-jI)=\#\{\nu:j_\nu-j\in\mathbb Z,\ j_\nu\ge j\}$ (a block with parameter $j_\nu\ge j\ge0$ and $j_\nu-j\in\mathbb Z$ contributes exactly one eigenvector of eigenvalue $j$), and the higher blocks with parameters $j'>j$ contribute one each, so $\dim E_j=\#\{\nu:j_\nu-j\in\mathbb Z,\ j_\nu\ge j\}-\#\{\nu:j_\nu-j\in\mathbb Z,\ j_\nu>j\}=1$. Pick a unit $u_j\in E_j$, which is determined up to multiplication by a phase; applying the ladder identities of [F4](b) in the block normal form, the vectors $v_{j,k}$ of the Statement are well defined and form the orthonormal basis of $W_j$, with the stated actions, because $\|(J^{\mathrm{tot}}_-)^ku_j\|^2=k!(2j)(2j-1)\cdots(2j-k+1)$ by [F7] and the recursion of [F4](b); expanding $v_{j,k}$ in the product basis [F1] exhibits the Clebsch-Gordan coefficients, and replacing $u_j$ by $e^{i\theta}u_j$ multiplies them all by the same phase. For $j=s+t$, $e^{(s)}_s\otimes e^{(t)}_t$ has weight $s+t$ and is annihilated by $J^{\mathrm{tot}}_+$ because $J^{(s)}_+e^{(s)}_s=J^{(t)}_+e^{(t)}_t=0$ by [F3]; this is the top vector of the unique block of parameter $s+t$, so it is a permissible choice. This proves (e) and completes the proof. [step 3.1, F1, F3, F4, F6, F7, algebra] ∎
