---
id: thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture
aliases: [nrqm-controlled-dynamics-strong-bounded-interaction-picture]
kind: theorem
domain: mathematics
title: "Strong bounded interaction picture"
status: published
origin: pipeline
dependency_level: 1
deps: [thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, lem-bochner-integral-norm-inequality, thm-bochner-integrability-criterion, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  lem-bochner-integral-norm-inequality: mathematical-premise
  thm-bochner-integrability-criterion: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 5.1 pp. 123-126 (Stone's theorem and the time evolution) and Section 7.3 pp. 169-171 (time evolution in the free case)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"

---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $H$ be any complex Hilbert space, let $H_0=H_0^*$ have its
exact dense domain $D(H_0)$, let $\hbar>0$, let $I=[a,b]$, and let
$V:I\to\mathcal B(H)$ be strongly continuous with each $V(t)$ self-adjoint
and $v=\sup_{t\in I}\|V(t)\|<\infty$. Put $K=v/\hbar$ and

$$E(t)=e^{-itH_0/\hbar},\qquad V_I(t)=E(-t)V(t)E(t),\qquad B(t)=-iV_I(t)/\hbar.$$

The autonomous group is the CC arbitrary-H construction in [F1]. Then
$V_I$ is strongly continuous, self-adjoint, and
$\|V_I(t)\|=\|V(t)\|\le v$.

For $s\le t$, define bounded operators by **vector strong integrals**:

$$D_n(t,s)\psi=(-i/\hbar)^n\int_{s<t_1<\cdots<t_n<t}V_I(t_n)\cdots V_I(t_1)\psi\,dt_1\cdots dt_n,\qquad D_0(t,s)=I.$$

For every fixed vector, these are integrals of continuous $H$-valued
functions on a compact simplex (equivalently iterated integrals). They
define a bounded operator by their action on vectors. This is the meaning
of a strong operator integral; no norm-Bochner integrability into the
Banach space $\mathcal B(H)$ is asserted. The series
$U_I(t,s)=\sum_{n\ge0}D_n(t,s)$ converges in operator norm uniformly on
the time triangle, with

$$\|D_n(t,s)\|\le\frac{(K(t-s))^n}{n!},\qquad \left\|U_I(t,s)-\sum_{n=0}^ND_n(t,s)\right\|\le e^{K(t-s)}\frac{(K(t-s))^{N+1}}{(N+1)!}.$$

It extends to all $s,t\in I$ as a strongly continuous unitary evolution,
with genuine inverse $U_I(s,t)=U_I(t,s)^{-1}=U_I(t,s)^*$ and full cocycle.
For every $\psi\in H$ its first-endpoint map is $C^1$ in $H$, with

$$U_I(t,s)\psi=\psi+\int_s^tB(r)U_I(r,s)\psi\,dr,\qquad \partial_tU_I(t,s)\psi=B(t)U_I(t,s)\psi.$$

The second endpoint satisfies
$\partial_sU_I(t,s)\psi=-U_I(t,s)B(s)\psi$. These derivatives are strong
derivatives; operator-norm differentiability is not claimed.

The physical propagator
$U(t,s)=E(t)U_I(t,s)E(-s)$ is unitary, jointly strongly continuous, has
the full cocycle and inverse, and satisfies the vectorwise mild identity

$$U(t,s)\psi=E(t-s)\psi-\frac{i}{\hbar}\int_s^tE(t-r)V(r)U(r,s)\psi\,dr.$$

For $\psi,\varphi\in D(H_0)$ the scalar curve is continuously
differentiable, with

$$\frac{d}{dt}\langle U(t,s)\psi,\varphi\rangle=-\frac{i}{\hbar}\left[\langle U(t,s)\psi,H_0\varphi\rangle+\langle V(t)U(t,s)\psi,\varphi\rangle\right].$$

The proof actually permits arbitrary initial $\psi\in H$ in this weak
equation. The original statement on $D(H_0)$ is therefore preserved.
No invariance of $D(H_0)$ under the physical $U$, and no strong full
Schrödinger derivative for its domain vectors, is deduced from these
mere strong-continuity hypotheses. In particular, differentiating
$E(t)U_I(t,s)E(-s)\psi$ by an unbounded product rule would require
domain membership which has not been established.

## Facts & Assumptions

**Given:** CC, the stated $H,H_0,V,I,\hbar,v,K$. Inner products are linear
in the first argument.

[F1] For a self-adjoint $A$ on arbitrary $H$, the CC nonreal resolvent
estimate gives $R_z=(A-z)^{-1}$ with
$\|R_z\|\le|\operatorname{Im}z|^{-1}$. The proved common-domain supplier
[[thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution]],
proof step 1.2, constructs the autonomous group without Stone or separability:
$J_n=n^2R_{in}R_{-in}\to I$ strongly,
$A_n=AJ_n=(n^2/2)(R_{in}+R_{-in})$ is bounded self-adjoint,
$A_ny\to Ay$ on $D(A)$, and the commuting bounded exponentials
$e^{-itA_n}$ converge strongly, uniformly on compact times. Closedness
gives exact domain preservation and $AE(t)y=E(t)Ay$; the limiting integral
identity gives the strong generator derivative on $D(A)$. Apply this
construction to $A=H_0/\hbar$. This uses that concrete autonomous construction,
with no time-regularity condition imposed on the present perturbation $V$.

[F2] Continuous Hilbert-valued curves on compact intervals have norm
Riemann integrals: uniform continuity makes their Riemann sums Cauchy, and
completeness gives the limit. The integral norm inequality follows from
finite triangle inequalities, and the fundamental theorem follows by
averaging over a shrinking interval. Continuous parameter families give
continuous integrals by uniform continuity on compact parameter sets.
All such integrals below are on individual vectors; their continuous
images are compact, even when $H$ is nonseparable. The vector integral interfaces are [[thm-bochner-integrability-criterion]],
[[lem-bochner-integral-norm-inequality]] and
[[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]].
No arbitrary-basis or operator-valued Bochner-measurability theorem is used.
An operator-norm Cauchy sequence has a bounded linear limit by taking its
unique limits on each vector in the complete $H$, so $\mathcal B(H)$ is
complete even for arbitrary $H$ ([[def-hilbert-space]]).

## Proof

1.1 [The correct conjugation and strong continuity] For $t\to u$ and fixed $\psi\in H$, subtract $E(-u)V(u)E(u)\psi$ from $E(-t)V(t)E(t)\psi$ and write the difference as $E(-t)V(t)[E(t)-E(u)]\psi+E(-t)[V(t)-V(u)]E(u)\psi+[E(-t)-E(-u)]V(u)E(u)\psi$. Its three norms tend to zero respectively by the bound $v$ and group continuity, strong continuity of $V$ on the fixed vector $E(u)\psi$, and group continuity on the fixed vector $V(u)E(u)\psi$. Unitary conjugation gives self-adjointness and the exact norm identity. Thus $B$ is strongly continuous with $\|B(t)\|\le K$ and $B(t)^*=-B(t)$. If $x(t)$ is any continuous $H$-valued curve, $B(t)x(t)$ is continuous: subtract $B(u)x(u)$, use the uniform bound on $B(t)[x(t)-x(u)]$, and use strong continuity on the fixed $x(u)$. Iterating this observation proves joint vector continuity of every finite time-ordered product. [given, F1, algebra]

2.1 [Vector integrals and all-time oriented recursion] For all $t,s\in I$, define $D_0(t,s)=I$ and $D_{n+1}(t,s)\psi=\int_s^tB(r)D_n(r,s)\psi\,dr$, with the usual signed orientation when $t<s$. Induction using [F2] proves existence, linearity and joint strong continuity; one may also change variables to fixed unit-interval simplexes to prove continuity in both endpoints. The bound $\|D_n(t,s)\|\le K^n|t-s|^n/n!$ follows inductively from the integral inequality. For $t\ge s$, expanding the iterated integral puts the newest factor $B(t_n)$ on the left, giving precisely the increasing-simplex expression in the Statement. For $t<s$, the signed recursion gives the genuinely backward construction; it is not postulated to be the adjoint of a forward series. The operator norm bounds are uniform on $I\times I$, despite each integral being defined vectorwise. [F2, step 1.1, construct, algebra]

3.1 [Norm convergence, tails and actual strong differential equation] The factorial bounds make $\sum_nD_n(t,s)$ uniformly convergent in operator norm, with norm at most $e^{K|t-s|}$. For $x=K|t-s|$, $(N+1+j)!\ge(N+1)!j!$ gives $\sum_{n>N}x^n/n!\le e^x x^{N+1}/(N+1)!$, including the zero case. Uniform convergence on each vector permits summation through the recursive integral and gives $U_I(t,s)\psi=\psi+\int_s^tB(r)U_I(r,s)\psi\,dr$. The integrand is continuous by step 1.1 and joint strong continuity of the uniformly convergent series. [F2] therefore proves the strong first-endpoint derivative on every $H$ vector, with continuous derivative. If two continuous solutions of this integral identity have the same initial vector, their difference satisfies $\|w(t)\|\le M K^n|t-s|^n/n!$ for all $n$, where $M$ is its finite maximum norm on the compact interval; repeated integration proves the inequality and its limit gives zero. This is vector uniqueness in either time orientation. [F2, step 1.1, step 2.1, construct, algebra]

4.1 [Cocycle and genuine unitary reverse] For every fixed $\psi$, $t\mapsto U_I(t,s)U_I(s,r)\psi$ and $t\mapsto U_I(t,r)\psi$ solve the same strong equation with the same value $U_I(s,r)\psi$ at $t=s$. Step 3.1's vector uniqueness gives the full cocycle for all orientations. In particular, the independently constructed reverse family satisfies $U_I(t,s)U_I(s,t)=U_I(s,t)U_I(t,s)=I$. For every vector, differentiation gives $\frac{d}{dt}\|U_I(t,s)\psi\|^2=2\operatorname{Re}\langle B(t)U_I(t,s)\psi,U_I(t,s)\psi\rangle=0$ by skew-adjointness. Thus both orientations preserve norms. The two-sided inverse implies onto, so the evolution is unitary with $U_I(t,s)^*=U_I(s,t)$. This proves both unitary identities without illegitimate differentiation of an operator adjoint from strong convergence alone. [step 1.1, step 3.1, algebra]

5.1 [Endpoint continuity and the reverse derivative] The integral identity and unitary bound give $\|U_I(t,s)-I\|\le K|t-s|$. Cocycle and unitarity then imply $\|U_I(t,s)-U_I(t',s')\|\le K(|t-t'|+|s-s'|)$, so the interaction evolution is even jointly norm-continuous; this conclusion does not imply norm continuity of $V_I$. The cocycle identity $U_I(t,s+h)\psi-U_I(t,s)\psi=U_I(t,s+h)[\psi-U_I(s+h,s)\psi]$ and the diagonal first-endpoint derivative yield $\partial_sU_I(t,s)\psi=-U_I(t,s)B(s)\psi$. Strong continuity of $B$ and joint continuity of $U_I$ make this derivative continuous. A first-time derivative of the reverse operator $U_I(s,t)$ instead obeys $\partial_sU_I(s,t)\psi=B(s)U_I(s,t)\psi$. [step 3.1, step 4.1, algebra]

5.2 [Physical propagator and vector mild identity] Define $U(t,s)=E(t)U_I(t,s)E(-s)$. Products of uniformly bounded strongly continuous families are strongly continuous on each vector, as in step 1.1. The group law of $E$ and the cocycle and unitarity of $U_I$ prove the physical cocycle, unitarity and inverse. Apply the integral identity of step 3.1 to the fixed vector $E(-s)\psi$, then multiply by $E(t)$. In its integrand, $E(t)V_I(r)U_I(r,s)E(-s)\psi=E(t-r)V(r)U(r,s)\psi$. This proves the mild formula on every vector. Its integrand is continuous in $(t,r,s)$ on vectors by uniform boundedness and strong continuity, so it is a well-defined vector strong integral defining a bounded operator. No claim of a norm-Bochner integral into $\mathcal B(H)$ follows or is needed. [F1, F2, step 1.1, step 3.1, step 4.1, algebra]

6.1 [Weak equation with no hidden domain assertion] Fix initial $\psi\in H$ and test vector $\varphi\in D(H_0)$, and write $x(t)=U_I(t,s)E(-s)\psi$, so $x\in C^1(I;H)$ by step 3.1. The scalar pairing is $\langle U(t,s)\psi,\varphi\rangle=\langle x(t),E(-t)\varphi\rangle$. The second curve belongs to the autonomous domain and has derivative $(i/\hbar)H_0E(-t)\varphi$ by [F1]. The ordinary scalar product rule, with conjugate linearity in the second argument, gives derivative $\langle B(t)x(t),E(-t)\varphi\rangle-(i/\hbar)\langle x(t),H_0E(-t)\varphi\rangle$. The first term equals $-(i/\hbar)\langle V(t)U(t,s)\psi,\varphi\rangle$ by the exact conjugation; autonomous commutation gives the second term $-(i/\hbar)\langle U(t,s)\psi,H_0\varphi\rangle$. Both are continuous by strong continuity and uniform bounds. This proves the stated weak equation, including its original domain-restricted initial-vector clause, without applying $H_0$ to $U(t,s)\psi$ or assuming this vector lies in its domain. All retained assertions and the explicit ordering/integral corrections follow. [F1, step 1.1, step 3.1, step 5.2, algebra] ∎
