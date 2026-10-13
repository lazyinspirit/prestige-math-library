---
id: thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism
kind: theorem
title: "Exponential dichotomy for a hyperbolic endomorphism: invariant stable
  and unstable subspaces with exponential estimates"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps:
  [
    lem-exponential-series-of-a-bounded-operator,
    def-complexification-of-a-real-vector-space,
    def-complexification-of-a-real-linear-map,
    def-eigenvalue-eigenvector-eigenspace-and-spectrum,
    def-annihilator-ideal-and-minimal-polynomial-of-an-endomorphism,
    thm-characteristic-and-minimal-polynomials-survive-complexification,
    thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors,
    cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial,
    thm-jordan-canonical-form-from-pid-module-structure,
    thm-fundamental-theorem-of-algebra-minimum-modulus-proof,
    thm-bezout-identity-for-polynomials,
    thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent,
    def-equivalent-norms,
    cor-real-spectral-theorem-for-self-adjoint-endomorphisms,
    thm-euclidean-space-complete,
    thm-complex-numbers-are-the-real-coordinate-plane,
    thm-cauchy-schwarz-and-the-euclidean-norm,
    cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  ]
dependency_roles:
  lem-exponential-series-of-a-bounded-operator: mathematical-premise
  def-complexification-of-a-real-vector-space: mathematical-premise
  def-complexification-of-a-real-linear-map: mathematical-premise
  def-eigenvalue-eigenvector-eigenspace-and-spectrum: mathematical-premise
  def-annihilator-ideal-and-minimal-polynomial-of-an-endomorphism: mathematical-premise
  thm-characteristic-and-minimal-polynomials-survive-complexification: mathematical-premise
  thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors: mathematical-premise
  cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial: mathematical-premise
  thm-jordan-canonical-form-from-pid-module-structure: mathematical-premise
  thm-fundamental-theorem-of-algebra-minimum-modulus-proof: mathematical-premise
  thm-bezout-identity-for-polynomials: mathematical-premise
  thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent: mathematical-premise
  def-equivalent-norms: mathematical-premise
  cor-real-spectral-theorem-for-self-adjoint-endomorphisms: mathematical-premise
  thm-euclidean-space-complete: mathematical-premise
  thm-complex-numbers-are-the-real-coordinate-plane: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS
        Graduate Studies in Mathematics 140, online edition), Section 9.1,
        Theorems 9.1 and 9.2 and formulas (9.2), (9.4), (9.6), printed pages
        253-254"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "F. Ramponi, Notes on Lyapunov's theorem, Section 3 (the Lyapunov
        equation and the exponential estimate P = integral of e^{A^T t} Q e^{A
        t})"
      url: "https://federico-ramponi.unibs.it/docs/lyapunov.pdf"
verification:
  precheck: pass
---

## Statement

Let $V$ be a real vector space of finite dimension $n\ge1$, equipped with a symmetric positive-definite bilinear form $\langle\cdot,\cdot\rangle:V\times V\to\mathbb R$, and set $\|v\|_2:=\sqrt{\langle v,v\rangle}$. Let $T:V\to V$ be linear, let $V_{\mathbb C}:=\mathbb C\otimes_{\mathbb R}V$ with canonical embedding $\iota v:=1\otimes v$ and complex-linear extension $T_{\mathbb C}:=\operatorname{id}_{\mathbb C}\otimes T$ ([[def-complexification-of-a-real-vector-space]], [[def-complexification-of-a-real-linear-map]]), and use the exponential series $e^{tT}$ and $e^{tT_{\mathbb C}}$ of these bounded operators ([[lem-exponential-series-of-a-bounded-operator]]; boundedness is justified in [F1]). Suppose that no eigenvalue of $T_{\mathbb C}$ in the sense of [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]] has real part $0$.

Then there exist $T$-invariant linear subspaces $E_s,E_u\subseteq V$ and real constants $C\ge1$, $c>0$ such that $V=E_s\oplus E_u$ and, for every $t\in\mathbb R$:

1. $\|e^{tT}v\|_2\le Ce^{-ct}\|v\|_2$ for $v\in E_s$ and $t\ge0$;
2. $\|e^{tT}v\|_2\le Ce^{ct}\|v\|_2$ for $v\in E_u$ and $t\le0$;
3. $\|e^{tT}v\|_2\ge C^{-1}e^{ct}\|v\|_2$ for $v\in E_u$ and $t\ge0$;
4. $E_s=\{v\in V:e^{tT}v\to0\ (t\to+\infty)\}$ and $E_u=\{v\in V:e^{tT}v\to0\ (t\to-\infty)\}$.

## Facts & Assumptions

**Given:** The finite-dimensional real vector space $V$ with its symmetric positive-definite bilinear form, the linear map $T$, its complexification $T_{\mathbb C}$, and the assumption that no complex eigenvalue of $T_{\mathbb C}$ is purely imaginary.

[F1] The real spectral theorem applied to $\operatorname{id}_V$ supplies a real orthonormal basis of $V$ ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]). In that basis every element of $V_{\mathbb C}$ has a unique form $x+iy:=\iota x+i\iota y$, with $x,y\in V$. Define $\langle x+iy,x'+iy'\rangle_{\mathbb C}:=\langle x,x'\rangle+\langle y,y'\rangle+i(\langle y,x'\rangle-\langle x,y'\rangle)$ and $\|x+iy\|_{2,\mathbb C}:=(\|x\|_2^2+\|y\|_2^2)^{1/2}$; this is the induced Hermitian inner product and norm, and $\iota$ is isometric. These coordinates identify $V$ with $\mathbb R^n$ and $V_{\mathbb C}$ with $\mathbb R^{2n}$, so both spaces are complete ([[thm-euclidean-space-complete]], [[thm-complex-numbers-are-the-real-coordinate-plane]]). If a linear map has coordinate matrix $L=(L_{ij})$, Cauchy--Schwarz row by row gives $\|Lz\|_2^2\le(\sum_{i,j}|L_{ij}|^2)\|z\|_2^2$ in the corresponding real coordinates ([[thm-cauchy-schwarz-and-the-euclidean-norm]]); hence $T$ and $T_{\mathbb C}$ are bounded. Thus the exponential-series lemma applies to both; it gives absolute operator-norm convergence, $E(0)=\operatorname{id}$, $E(s+t)=E(s)E(t)$, $E(t)^{-1}=E(-t)$ and $E'(t)=T_{\mathbb C}E(t)=E(t)T_{\mathbb C}$. Termwise application of $T_{\mathbb C}^m\iota=\iota T^m$ gives $E(t)\iota=\iota e^{tT}$ ([[lem-exponential-series-of-a-bounded-operator]], [[def-complexification-of-a-real-vector-space]], [[def-complexification-of-a-real-linear-map]]).

[F2] The minimal polynomial $\mu_T\in\mathbb R[x]$ annihilates $T$, the characteristic polynomial satisfies $\chi_{T_{\mathbb C}}=\chi_T$, and $\mu_T$ and $\chi_T$ have the same irreducible factors over $\mathbb C$; every nonconstant complex polynomial splits into linear factors, so the eigenvalues of $T_{\mathbb C}$ are exactly the complex roots of $\mu_T$, each with a positive multiplicity $e_\lambda$ equal to its multiplicity as a root of $\mu_T$ ([[def-annihilator-ideal-and-minimal-polynomial-of-an-endomorphism]], [[thm-characteristic-and-minimal-polynomials-survive-complexification]], [[thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors]], [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]], [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]).

[F3] Since $\mu_{T_{\mathbb C}}=\mu_T$ splits over $\mathbb C$, the generalised eigenspaces $G_\lambda=\ker(T_{\mathbb C}-\lambda)^{\,e_\lambda}$ over the distinct eigenvalues $\lambda$ of $T_{\mathbb C}$ form a direct sum decomposition $V_{\mathbb C}=\bigoplus_\lambda G_\lambda$, each $G_\lambda$ being $T_{\mathbb C}$-invariant ([[cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial]]). On each $G_\lambda$ the operator admits a Jordan basis, so $T_{\mathbb C}|_{G_\lambda}=\lambda I+N_\lambda$ with $N_\lambda$ nilpotent of index at most $e_\lambda$ ([[thm-jordan-canonical-form-from-pid-module-structure]]).

[F4] Coprime polynomials satisfy a Bézout identity: if $p,q\in F[x]$ have no common root, there are $a,b\in F[x]$ with $ap+bq=1$ ([[thm-bezout-identity-for-polynomials]]).

[F5] The Hermitian norm $\|\cdot\|_{2,\mathbb C}$ is the norm defined in [F1]. Any two norms on the finite-dimensional complex vector space $V_{\mathbb C}$ are equivalent ([[thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent]], [[def-equivalent-norms]]): there is $K\ge1$ such that $K^{-1}\|z\|_\infty\le\|z\|_{2,\mathbb C}\le K\|z\|_\infty$ for every $z\in V_{\mathbb C}$, where $\|\cdot\|_\infty$ is the maximum norm of the basis fixed in step 2.3. In particular, $\|\iota v\|_{2,\mathbb C}=\|v\|_2$.

## Proof

**Proof technique:** direct; split the spectrum into left and right half-planes, build the corresponding real invariant subspaces from coprime factors of the minimal polynomial, and estimate each Jordan block by its exponential series.

1.1 Let $\Lambda$ be the set of eigenvalues of $T_{\mathbb C}$ and, for $\lambda\in\Lambda$, let $e_\lambda\ge1$ be its multiplicity as a root of the real polynomial $\mu_T$; by [F2] all elements of $\Lambda$ have nonzero real part, and $\Lambda$ is stable under conjugation with $e_{\bar\lambda}=e_\lambda$: conjugating $\mu_T=(x-\lambda)^{e_\lambda}q$ with $q(\lambda)\ne0$ gives $\mu_T=(x-\bar\lambda)^{e_\lambda}\bar q$ with $\bar q(\bar\lambda)\ne0$. Define $$p_s:=\prod_{\operatorname{Re}\lambda<0}(x-\lambda)^{e_\lambda},\qquad p_u:=\prod_{\operatorname{Re}\lambda>0}(x-\lambda)^{e_\lambda}.$$ Conjugation invariance of $\Lambda$ with equal multiplicities shows $p_s,p_u\in\mathbb R[x]$; by construction $\mu_T=p_sp_u$, and $p_s,p_u$ have no common complex root, hence are coprime with a Bézout identity $ap_s+bp_u=1$ over $\mathbb R[x]$ [F4]. [given, F2, F4]

1.2 Exponential on a generalised eigenspace: fix $\lambda\in\Lambda$ and put $A_\lambda:=\lambda I+N_\lambda$ on $G_\lambda$ with $N_\lambda^{\,e_\lambda}=0$ as in [F3]. For the partial sum through $m=M$, the binomial expansion and nilpotence of $N_\lambda$ give the finite rearrangement $$\sum_{m=0}^{M}\frac{t^m}{m!}A_\lambda^m=\sum_{k=0}^{e_\lambda-1}\frac{t^k}{k!}N_\lambda^{\,k}\sum_{j=0}^{M-k}\frac{(t\lambda)^j}{j!},$$ with an empty inner sum when $M<k$. As $M\to\infty$, the left side converges to $e^{tA_\lambda}$ by [F1], and each of the finitely many inner sums converges to $e^{t\lambda}$ by [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]. Thus $$e^{tA_\lambda}=\sum_{k=0}^{e_\lambda-1}\frac{t^k}{k!}N_\lambda^{\,k}\,e^{t\lambda}.$$ [F1, F3, algebra]

2.1 Define $E_s:=\ker p_s(T)$ and $E_u:=\ker p_u(T)$. Both are $T$-invariant because $T$ commutes with $p_s(T)$ and $p_u(T)$. Every $v\in V$ satisfies $$v=(ap_s+bp_u)(T)v=a(T)p_s(T)v+b(T)p_u(T)v\in E_u+E_s,$$ the membership following from $p_u(T)a(T)p_s(T)=a(T)\mu_T(T)=0$ on the first summand and $p_s(T)b(T)p_u(T)=b(T)\mu_T(T)=0$ on the second, where $\mu_T(T)=0$ ([[def-annihilator-ideal-and-minimal-polynomial-of-an-endomorphism]]). If $v\in E_s\cap E_u$, the same identity gives $v=a(T)p_s(T)v+b(T)p_u(T)v=0$. Hence $V=E_s\oplus E_u$. [step 1.1, F2, F4, algebra]

2.2 Complexified description: $(E_s)_{\mathbb C}=\ker p_s(T_{\mathbb C})=\bigoplus_{\operatorname{Re}\lambda<0}G_\lambda$ and $(E_u)_{\mathbb C}=\ker p_u(T_{\mathbb C})=\bigoplus_{\operatorname{Re}\lambda>0}G_\lambda$. Writing $z=\iota x+i\iota y$ with $x,y\in V$, one has $p_s(T_{\mathbb C})z=\iota(p_s(T)x)+i\iota(p_s(T)y)$, so $\ker p_s(T_{\mathbb C})=(\ker p_s(T))_{\mathbb C}$; the same holds for $p_u$. Indeed, on a summand $G_\lambda$ with $\operatorname{Re}\lambda<0$, the factor $(x-\lambda)^{e_\lambda}$ divides $p_s$, so $p_s(T_{\mathbb C})$ vanishes on $G_\lambda$; on a summand with $\operatorname{Re}\lambda>0$, $p_s$ and $(x-\lambda)^{e_\lambda}$ are coprime, and evaluating a Bézout identity on $G_\lambda$ (where $(T_{\mathbb C}-\lambda)^{e_\lambda}=0$) shows $p_s(T_{\mathbb C})$ is invertible there, so its kernel meets $G_\lambda$ trivially. Summing over [F3] gives the claim; the same argument with $p_u$ gives the second identity. [step 1.1, F3, F4, algebra]

2.3 Estimates on one generalised eigenspace: fix a basis of $V_{\mathbb C}$ adapted to the decomposition $V_{\mathbb C}=\bigoplus_\lambda G_\lambda$ (for instance the union of Jordan bases of the summands, whose existence is [F3]), and let $\|\cdot\|_\infty$ be the corresponding maximum norm; then every $z=\sum_\lambda z_\lambda$ has its coordinate block in $G_\lambda$ equal to the coordinate block of $z_\lambda$, so $\|z_\lambda\|_\infty\le\|z\|_\infty$ for every $\lambda$. On each block use the induced operator norm $\|N_\lambda\|_\infty:=\sup\{\|N_\lambda z\|_\infty:z\in G_\lambda,\ \|z\|_\infty\le1\}$; this is finite for a finite matrix. Put $$P_\lambda(t):=\sum_{k=0}^{e_\lambda-1}\frac{|t|^k}{k!}\|N_\lambda\|_\infty^{\,k} ,$$ so that $\|e^{tA_\lambda}z\|_\infty\le e^{(\operatorname{Re}\lambda)t}P_\lambda(t)\|z\|_\infty$ for $z\in G_\lambda$ and all real $t$ by step 1.2. Choose $$c:=\frac12\min_{\lambda\in\Lambda}|\operatorname{Re}\lambda|>0 .$$ For $u\ge0$ and $a>0$, the nonnegative exponential series gives $e^{au}\ge(au)^k/k!$, hence $u^ke^{-au}\le k!a^{-k}$ for every integer $k\ge0$. Applying this to each term of $P_\lambda(\pm u)$, with $a=-\operatorname{Re}\lambda-c>0$ on stable blocks and $a=\operatorname{Re}\lambda-c>0$ on unstable blocks, proves that the following suprema are finite: for $\operatorname{Re}\lambda<0$, $$C^s_\lambda:=\sup_{t\ge0}P_\lambda(t)e^{(\operatorname{Re}\lambda+c)t}<+\infty,$$ and for $\operatorname{Re}\lambda>0$, $$C^u_\lambda:=\sup_{t\le0}P_\lambda(t)e^{(\operatorname{Re}\lambda-c)t}<+\infty .$$ [step 1.2, F1, algebra]

3.1 Constants for the two invariant subspaces. By steps 2.2 and 2.3, for $z\in(E_s)_{\mathbb C}$ and $t\ge0$ the decomposition $z=\sum_{\operatorname{Re}\lambda<0}z_\lambda$ yields $$\|e^{tT_{\mathbb C}}z\|_\infty\le\sum_{\operatorname{Re}\lambda<0}e^{(\operatorname{Re}\lambda)t}P_\lambda(t)\|z_\lambda\|_\infty\le e^{-ct}\Bigl(\sum_{\operatorname{Re}\lambda<0}C^s_\lambda\Bigr)\|z\|_\infty,$$ since, in the adapted basis of step 2.3, $\|z_\lambda\|_\infty\le\|z\|_\infty$, and $\operatorname{Re}\lambda+c\le-c$ for every $\operatorname{Re}\lambda<0$ (as $c=\frac12\min|\operatorname{Re}\lambda|$). Similarly, for $z\in(E_u)_{\mathbb C}$ and $t\le0$, $$\|e^{tT_{\mathbb C}}z\|_\infty\le e^{ct}\Bigl(\sum_{\operatorname{Re}\lambda>0}C^u_\lambda\Bigr)\|z\|_\infty .$$ Set $C:=\max\bigl(1,\ K^2\sum_{\operatorname{Re}\lambda<0}C^s_\lambda,\ K^2\sum_{\operatorname{Re}\lambda>0}C^u_\lambda\bigr)$ with $K$ as in [F5]. For $v\in E_s$ and $t\ge0$, applying the first estimate to $z=\iota v$ and using [F5] in both directions, $\|e^{tT}v\|_2=\|e^{tT_{\mathbb C}}\iota v\|_{2,\mathbb C}\le K\|e^{tT_{\mathbb C}}\iota v\|_\infty\le Ke^{-ct}\bigl(\sum_{\operatorname{Re}\lambda<0}C^s_\lambda\bigr)\|\iota v\|_\infty\le K^2\bigl(\sum_{\operatorname{Re}\lambda<0}C^s_\lambda\bigr)e^{-ct}\|v\|_2\le Ce^{-ct}\|v\|_2$, which is clause 1; the same computation with the second estimate gives clause 2 for $v\in E_u$, $t\le0$. [step 2.2, 2.3, F1, F5, algebra]

4.1 Clause 3: let $u\in E_u$ and $t\ge0$. By [F1] $e^{tT}$ is invertible with inverse $e^{-tT}$, and $e^{-tT}u\in E_u$ because $E_u$ is $T$-invariant. Applying clause 2 with the time $-t\le0$ to the vector $e^{tT}u$ gives $$\|u\|_2=\|e^{-tT}e^{tT}u\|_2\le Ce^{-ct}\|e^{tT}u\|_2,$$ hence $\|e^{tT}u\|_2\ge C^{-1}e^{ct}\|u\|_2$. [step 3.1, F1, algebra]

5.1 Clause 4: by clauses 1 and 3, every $v\in E_s$ satisfies $e^{tT}v\to0$ as $t\to+\infty$, and by clause 2 every $v\in E_u$ satisfies $e^{tT}v\to0$ as $t\to-\infty$. Conversely, let $v\in V$ satisfy $e^{tT}v\to0$ as $t\to+\infty$ and write $v=u+s$ with $u\in E_u$, $s\in E_s$; by clauses 3 and 1, $$\|e^{tT}v\|_2\ge\|e^{tT}u\|_2-\|e^{tT}s\|_2\ge C^{-1}e^{ct}\|u\|_2-Ce^{-ct}\|s\|_2\to+\infty$$ unless $u=0$. So convergence to $0$ forces $u=0$, that is $v\in E_s$. The characterisation of $E_u$ follows by the same argument with $t\to-\infty$: clause 2 gives $\|e^{tT}u\|_2\le Ce^{ct}\|u\|_2\to0$ for $u\in E_u$, while for $s\ne0$ the growth estimate $\|e^{tT}s\|_2\ge C^{-1}e^{-ct}\|s\|_2$ for $t\le0$, obtained from clause 1 at time $-t\ge0$ and invertibility of $e^{tT}$, forces divergence. [step 3.1, 4.1, F1, algebra] ∎

## Remarks

- The subspaces $E_s$ and $E_u$ are the **stable** and **unstable** subspaces of $T$; they are constructed from the coprime factorisation $\mu_T=p_sp_u$ and are real by construction, so no separate descent argument from the complexification is needed. The constant $C$ depends on the basis fixed in step 2.3, through the equivalence constant $K$ of [F5], and on $T$, while $c$ is any positive number below $\min_\lambda|\operatorname{Re}\lambda|$.

- The hypothesis is a spectral gap at the imaginary axis. A purely imaginary eigenvalue (including the eigenvalue $0$) is not covered: if $0$ is an eigenvalue then no positive rate $c$ can work for the corresponding directions. [[thm-cm-exponential-stability-by-a-lyapunov-quadratic-form]] and [[thm-cm-instability-of-a-hyperbolic-saddle]] use only the cases $E_u=\{0\}$ (all eigenvalues in the open left half-plane) and $E_u\ne\{0\}$.
