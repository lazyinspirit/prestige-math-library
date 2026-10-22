---
id: thm-nrqmx-spin-cover-projective-rotations
kind: theorem
domain: mathematics
title: "Spin rotations and projective $SO(3)$"
status: draft
origin: pipeline
dependency_level: 0
deps:
  - thm-nrqm-orbital-and-spin-finite-spin-block-decomposition
  - ex-su-two-to-so-three-as-a-covering-homomorphism
  - def-countable-choice
  - def-strongly-continuous-unitary-representation
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions
  - thm-sine-and-cosine-derivatives
  - thm-sine-and-cosine-addition-formulas
  - thm-algebra-of-derivatives
  - cor-mean-value-theorem
dependency_roles:
  thm-nrqm-orbital-and-spin-finite-spin-block-decomposition: mathematical-premise
  ex-su-two-to-so-three-as-a-covering-homomorphism: mathematical-premise
  def-countable-choice: mathematical-premise
  def-strongly-continuous-unitary-representation: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Peter Bongaarts, Quantum Theory: A Mathematical Approach, Chapter 24,
        §24.8.1–§24.8.5, pp. 385–388"
      url: "https://www.ndl.ethernet.edu.et/bitstream/123456789/75323/1/429.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 7,
        §7.1, pp. 141–152"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9, §2, pp.
        11–18"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2f\
        d50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
---

## Statement

Assume Countable Choice. Let $SU(2)=\{W\in M_2(\mathbb C):W^*W=I,\det W=1\}$, and let $\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$, and $\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$. For $i\in\{x,y,z\}$ put $A_i(t)=\cos(t/2)I-i\sin(t/2)\sigma_i$. Let $V\ne\{0\}$ be a finite-dimensional complex Hilbert space and let $D:SU(2)\to U(V)$ be a differentiable unitary representation. Define its self-adjoint infinitesimal generators $J_i$ by $\frac{d}{dt}D(A_i(t))|_{t=0}=-iJ_i$. For complex-linear maps $X,Y:V\to V$, write $[X,Y]:=XY-YX$. Assume $[J_x,J_y]=iJ_z$, $[J_y,J_z]=iJ_x$, and $[J_z,J_x]=iJ_y$, and that the triple is irreducible, meaning that no nonzero proper subspace $M\subset V$ satisfies $J_iM\subseteq M$ for all $i$. The spin label $s\in\{0,\tfrac12,1,\tfrac32,\ldots\}$ is its largest $J_z$ eigenvalue, as in the finite spin-block classification. Then

$$D(-I)=(-1)^{2s}I_V.$$

Let $\rho:SU(2)\to SO(3)$ be the standard two-sheeted covering homomorphism with kernel $\{I,-I\}$. Give $PU(V)=U(V)/\{zI:|z|=1\}$ its quotient topology and let $q:U(V)\to PU(V)$ be the quotient map; write $[U]:=q(U)$. The ray action $R\mapsto[D(W)]$ for any lift $W$ of $R$ is a well-defined continuous homomorphism $SO(3)\to PU(V)$. For integer $s$, $D$ itself descends to an ordinary unitary representation of $SO(3)$; for half-integer $s$, its unitary representation does not descend, while its ray representation does. No classification of all projective representations of $SO(3)$ is asserted.

The projective descent is summarized by the following commutative diagram; $q$ is the quotient map $U(V)\to PU(V)$ and $\overline D$ is the ray representation just defined.

```tikzcd
\begin{tikzcd}
SU(2) \arrow[r,"D"] \arrow[d,"\rho"'] & U(V) \arrow[d,"q"]\\
SO(3) \arrow[r,"\overline D"'] & PU(V)
\end{tikzcd}
```

The proof below verifies that $q\circ D$ is constant on each $\rho$-fiber, which defines $\overline D$ and makes this diagram commute; no proof step relies on the diagram.

## Statement references

[[thm-nrqm-orbital-and-spin-finite-spin-block-decomposition]]

[[ex-su-two-to-so-three-as-a-covering-homomorphism]]

[[def-countable-choice]]

[[def-strongly-continuous-unitary-representation]]

[[def-complex-exponential]]

[[thm-complex-exponential-addition-and-real-extension]]

[[thm-complex-exponential-is-entire-with-derivative-itself]]

[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

[[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]

[[thm-sine-and-cosine-derivatives]]

[[thm-sine-and-cosine-addition-formulas]]

[[thm-algebra-of-derivatives]]

[[cor-mean-value-theorem]]

## Facts & Assumptions

**Given:** Countable Choice; the spin label $s$; a finite-dimensional complex Hilbert space $V$; a differentiable unitary representation $D$ with the single spin-$s$ generator block; and the standard cover $\rho:SU(2)\to SO(3)$.

[A1] Countable Choice (AC$_\omega$) is the choice-function principle for every countable family of nonempty sets. [[def-countable-choice]]

[F1] The finite spin-block theorem decomposes the self-adjoint triple into an orthogonal sum of nonzero invariant spin blocks. Under this item's irreducibility hypothesis there can be only one block: any block is invariant under all three $J_i$, so two or more blocks would give a nonzero proper invariant subspace. The single block has highest weight equal to the largest $J_z$ eigenvalue $s$ and an orthonormal basis $v_k$, $k=0,\ldots,2s$, with $J_zv_k=(s-k)v_k$ and the stated finite spin ladder coefficients. [[thm-nrqm-orbital-and-spin-finite-spin-block-decomposition]]

[F2] Under AC$_\omega$, $\rho:SU(2)\to SO(3)$ is a surjective two-sheeted covering homomorphism with kernel $\{I,-I\}$. [[ex-su-two-to-so-three-as-a-covering-homomorphism]]

[F3] A unitary representation is a homomorphism into bijective complex-linear isometries, and unitary equivalence means there is a unitary intertwiner. [[def-strongly-continuous-unitary-representation]]

[F4] The scalar complex exponential is the everywhere-convergent power series $\exp z=\sum_{k=0}^\infty z^k/k!$, also written $e^z$. [[def-complex-exponential]]

[F5] $\exp(z+w)=\exp z\exp w$ for all $z,w\in\mathbb C$. [[thm-complex-exponential-addition-and-real-extension]]

[F6] $\exp$ is entire with $\exp'(z)=\exp z$. [[thm-complex-exponential-is-entire-with-derivative-itself]]

[F7] For real $x,y$, $\exp(x+iy)=e^x(\cos y+i\sin y)$, $|\exp(x+iy)|=e^x$, and $\exp(i\pi)=-1$. [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

[F8] For every real $x$, $\sin^2x+\cos^2x=1$, $\sin(-x)=-\sin x$, and $\cos(-x)=\cos x$. [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]

[F9] Sine and cosine are differentiable on $\mathbb R$, with derivatives cosine and minus sine. [[thm-sine-and-cosine-derivatives]]

[F10] For real $x,y$, $\sin(x+y)=\sin x\cos y+\cos x\sin y$ and $\cos(x+y)=\cos x\cos y-\sin x\sin y$. [[thm-sine-and-cosine-addition-formulas]]

[F11] For differentiable real scalar functions on a real interval, sums and scalar multiples differentiate termwise, and $(fg)'=f'g+fg'$. [[thm-algebra-of-derivatives]]

[F12] A real function continuous on $[a,b]$ and differentiable on $(a,b)$ satisfies $f(b)-f(a)=f'(c)(b-a)$ for some $c\in(a,b)$. [[cor-mean-value-theorem]]

## Proof

1.1 We use real-parameter differentiation in the finite orthonormal basis supplied by [F1]. For a complex scalar $f=a+ib$ with real components, its derivative is $a'+ib'$: convergence of the complex difference quotient is equivalent to convergence of its two real coordinates, since $|x|,|y|\le|x+iy|\le|x|+|y|$. Expanding $(a+ib)(c+id)=(ac-bd)+i(ad+bc)$ transfers [F11] to complex scalar products, and conjugation differentiates by conjugating the derivative. Finite sums then give the scalar-vector and matrix product rules entry by entry, and $(M^*)'=(M')^*$. These entry derivatives are the finite-dimensional vector or operator derivatives: in an orthonormal basis the squared vector norm is the finite sum of squared coordinate moduli, while for a $d\times d$ matrix $A$, each coordinate of $Ax$ has modulus at most $d\max_{j,k}|A_{jk}|\,\|x\|$ by the finite triangle inequality and $|x_k|\le\|x\|$. Thus $\|Ax\|^2\le d^3(\max_{j,k}|A_{jk}|)^2\|x\|^2$. Thus entrywise difference-quotient remainders tending to zero also tend to zero in the corresponding norm. Direct calculation for each displayed Pauli matrix gives $\sigma_i^*=\sigma_i$, $\sigma_i^2=I$, $\operatorname{tr}\sigma_i=0$, and $\det\sigma_i=-1$. With $c=\cos(t/2)$ and $s_t=\sin(t/2)$, direct $2\times2$ matrix calculations and the Pythagorean identity [F8] give $A_i(t)^*A_i(t)=(c^2+s_t^2)I=I$ and $\det A_i(t)=c^2+s_t^2=1$, so each $A_i(t)$ lies in $SU(2)$. Its entries are differentiable by [F9]. The addition formulas [F10] and $\sigma_i^2=I$ give $A_i(t+h)=A_i(t)A_i(h)$ for each $i$, and [F9] gives $A_i(0)=I$; thus each map $t\mapsto A_i(t)$ is a homomorphism from $(\mathbb R,+)$ to $SU(2)$. Differentiating $D(A_i(t))^*D(A_i(t))=I$ at $0$ and using $\frac{d}{dt}D(A_i(t))|_{t=0}=-iJ_i$ gives $J_i^*=J_i$. For $i=z$, the Euler formula [F7] and parity [F8] give $A_z(t)=\operatorname{diag}(\exp(-it/2),\exp(it/2))$. Set $U(t):=D(A_z(t))$. Since $D$ is a differentiable representation, $U$ is differentiable, $U(t+h)=U(t)U(h)=U(h)U(t)$, and the generator convention gives $U'(0)=-iJ_z$. Differentiating the two products with respect to $h$ at $0$ yields $U'(t)=U(t)(-iJ_z)=(-iJ_z)U(t)$. [F1, F3, F7, F8, F9, F10, F11, given, algebra]

1.2 By [F1], the irreducibility hypothesis leaves one spin-$s$ block, with orthonormal basis $v_k$, $k=0,\ldots,2s$, and $J_zv_k=(s-k)v_k$. Write $\mu_k=s-k$ and $u_k(t)=U(t)v_k$. Step 1.1 gives $u_k'(t)=-i\mu_k u_k(t)$. From [F5] and [F6], the scalar map $t\mapsto\exp(i\mu_k t)$ has derivative $i\mu_k\exp(i\mu_k t)$: its difference quotient at $t$ factors as $\exp(i\mu_k t)(\exp(i\mu_k h)-1)/h$ and the second factor tends to $i\mu_k$. The coordinate product rule established in step 1.1 gives $\frac{d}{dt}(\exp(i\mu_k t)u_k(t))=0$. To justify constancy, write this vector in the fixed finite orthonormal basis of [F1]. Every real and imaginary coordinate has zero derivative on $\mathbb R$ and is continuous (its increment is its difference quotient times the real increment). For arbitrary $a<b$, apply [F12] separately to these real coordinate functions on $[a,b]$; each has equal endpoint values. All coordinates, and hence the vector, are therefore constant on $\mathbb R$ and equal $v_k$ at $t=0$. Consequently $U(t)v_k=\exp(-i\mu_k t)v_k$. [F1, F5, F6, F11, F12, step 1.1, algebra]

1.3 Put $N=2s\in\mathbb N_0$. For every $k=0,\ldots,2s$, $2(s-k)=N-2k$ is an integer and [F5], [F7] give $\exp(-i2\pi(s-k))=\exp(-i\pi N)\exp(i2\pi k)=(-1)^N$. Indeed, $\exp(-i\pi)=-1$ follows from $\exp(i\pi)=-1$ and $\exp(-i\pi)\exp(i\pi)=\exp(0)=1$ by the power-series definition [F4]; also $\exp(i2\pi)=\exp(i\pi)^2=1$. Repeated use of [F5] gives the displayed integer powers. Thus step 1.2 implies $U(2\pi)v_k=(-1)^{2s}v_k$ for every basis vector. [F4, F5, F7, step 1.2, algebra]

2.1 By the diagonal form in step 1.1 and [F7], $A_z(2\pi)=\operatorname{diag}(\exp(-i\pi),\exp(i\pi))=-I$. Hence $D(-I)=U(2\pi)$; step 1.3 evaluates this operator on an orthonormal basis and proves $D(-I)=(-1)^{2s}I_V$. [F7, step 1.1, step 1.3, algebra]

3.1 By [F2], every $R\in SO(3)$ has exactly two lifts $W$ and $-W$. The representation law gives $D(-W)=D(-I)D(W)=(-1)^{2s}D(W)$ by step 2.1. The scalar has modulus one by [F7], so the projective class $[D(W)]\in PU(V)$ is independent of the lift. If $R_1=\rho(W_1)$ and $R_2=\rho(W_2)$, then $W_1W_2$ lifts $R_1R_2$, and $[D(W_1W_2)]=[D(W_1)][D(W_2)]$; hence the ray map is a homomorphism. The map is continuous: on any evenly covered neighborhood for $\rho$, its local section $s$ is continuous and the descended map there is $q\circ D\circ s$, a composition of continuous maps. [A1, F2, F3, F7, step 2.1, algebra]

4.1 If $s$ is integer, $(-1)^{2s}=1$, so $D(W)$ is independent of the lift; defining $\widetilde D(R)=D(W)$ gives a unitary representation because products of lifts lift the product, as in step 3.1, and it is continuous by the same local-section argument. If $s$ is half-integer, $(-1)^{2s}=-1$, so the two lifts $I$ and $-I$ of the identity have images $I_V$ and $-I_V$; these differ since $V\ne\{0\}$. Therefore $D$ cannot factor as a unitary representation through $\rho$, although its projective class from step 3.1 does factor. [A1, F2, step 2.1, step 3.1, algebra] ∎
