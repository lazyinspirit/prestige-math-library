---
id: thm-harmonic-measure-maximum-principle-and-domain-comparison
kind: theorem
title: "Borel harmonicity and comparison of harmonic measure"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - def-borel-sigma-algebra
  - def-complex-domain
  - def-dependent-choice
  - def-distance-from-a-point-to-a-subset
  - def-harmonic-measure-plane-domain
  - def-lambda-system
  - def-plane-harmonic-function
  - def-pi-system
  - def-radon-measure-on-an-lch-space
  - lem-closed-subset-of-a-compact-space-is-compact
  - lem-compactness-is-intrinsic
  - lem-distance-to-set-is-lipschitz
  - lem-relative-compact-closed-sets-have-a-positive-distance-gap
  - thm-harnack-convergence-principle-for-plane-harmonic-functions
  - thm-dynkin-pi-lambda
  - thm-harmonic-measure-is-well-defined
  - thm-maximum-and-minimum-principles-for-plane-harmonic-functions
  - thm-monotone-convergence-for-the-integral
sources:
  references:
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I, Appendix 1, Sections 10.1-10.9"
      url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
      locator: "Section 10.8, printed pp. 170-172: harmonic measure, its harmonic dependence on the pole and domain comparison"
    - title: "Boris Khoruzhenko, LTCC Potential Theory lecture notes, Sections 4.1-4.2"
      url: https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf
      locator: "Section 4.2, PDF pp. 37-39: harmonic measure of Borel boundary sets at varying poles"
    - title: "Axler, Bourdon and Ramey, Harmonic Function Theory, 2nd ed., Chapter 11"
      url: https://www.axler.net/HFT.pdf
      locator: "Chapter 11, printed pp. 223-237: boundary behaviour, regularity and comparison"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Assume Dependent Choice. Let $\Omega$ be a bounded regular plane domain, in the
sense of [[def-harmonic-measure-plane-domain]]. Then for every Borel set
$E\subseteq\partial\Omega$ the function $z\mapsto\omega_\Omega^z(E)$ is
harmonic on $\Omega$ ([[def-plane-harmonic-function]]) and takes values in
$[0,1]$, and for every fixed $z\in\Omega$ the assignment
$E\mapsto\omega_\Omega^z(E)$ is countably additive. If
$\Omega_1\subseteq\Omega_2$ are bounded regular domains and
$E\subseteq\partial\Omega_1\cap\partial\Omega_2$ is Borel, then
$$\omega_{\Omega_1}^z(E)\le\omega_{\Omega_2}^z(E)\qquad(z\in\Omega_1).$$
The inequality is in this direction: enlarging the domain does not decrease the
harmonic mass of a common boundary piece.

## Facts & Assumptions

**Given:** Bounded regular plane domains in the sense of [[def-harmonic-measure-plane-domain]] and [[def-complex-domain]], a point $z$ of the relevant domain, and Dependent Choice ([[def-dependent-choice]]). Harmonicity is that of [[def-plane-harmonic-function]], distances to subsets are as in [[def-distance-from-a-point-to-a-subset]], and Radon measures are as in [[def-radon-measure-on-an-lch-space]].

[F1] Under Dependent Choice, for every bounded regular plane domain $\Omega$ and every $z\in\Omega$ the harmonic measure $\omega_\Omega^z$ exists and is the unique Radon Borel probability measure on $\partial\Omega$ with $H_\varphi(z)=\int_{\partial\Omega}\varphi\,d\omega_\Omega^z$ for every real continuous $\varphi$; moreover $z\mapsto H_\varphi(z)$ is the unique continuous extension to $\overline\Omega$ that is harmonic on $\Omega$ and agrees with $\varphi$ on $\partial\Omega$ ([[thm-harmonic-measure-is-well-defined]], [[def-harmonic-measure-plane-domain]]).

[F2] A Radon measure $\mu$ on a locally compact Hausdorff space satisfies $\mu(E)=\inf_{E\subseteq V\ \text{open}}\mu(V)$ for every Borel $E$, $\mu(U)=\sup_{K\subseteq U\ \text{compact}}\mu(K)$ for every open $U$, and $\mu(K)<\infty$ for every compact $K$ ([[def-radon-measure-on-an-lch-space]]).

[F3] If $(u_m)$ is an increasing sequence of harmonic functions on a complex domain, then either $u_m\to+\infty$ pointwise everywhere or $u_m$ converges locally uniformly to a harmonic function ([[thm-harnack-convergence-principle-for-plane-harmonic-functions]]).

[F4] If $0\le f_1\le f_2\le\cdots$ are measurable with $f_m\uparrow f$ pointwise, then $\int f_m\,d\mu\uparrow\int f\,d\mu$ ([[thm-monotone-convergence-for-the-integral]]).

[F5] For a bounded complex domain $\Omega$ and $u$ continuous on $\overline\Omega$ and harmonic on $\Omega$, $\inf_{\overline\Omega}u=\inf_{\partial\Omega}u$ and $\sup_{\overline\Omega}u=\sup_{\partial\Omega}u$ ([[thm-maximum-and-minimum-principles-for-plane-harmonic-functions]]).

[F6] For nonempty $A\subseteq X$ in a metric space, $x\mapsto d(x,A)$ is $1$-Lipschitz, hence continuous, and the set $\{x:d(x,A)\ge c\}$ is closed for every $c$ ([[lem-distance-to-set-is-lipschitz]], [[def-distance-from-a-point-to-a-subset]]).

[F7] If $K$ is nonempty compact, $C$ nonempty closed and $K\cap C=\varnothing$ in a real or complex normed space, then there is $\delta>0$ with $\|k-c\|\ge\delta$ for all $k\in K$, $c\in C$ ([[lem-relative-compact-closed-sets-have-a-positive-distance-gap]]).

[F8] A closed subset of a compact metric space is a compact subset of it ([[lem-closed-subset-of-a-compact-space-is-compact]]).

[F9] Compactness of a subset is intrinsic: a set that is a compact subset of one ambient space is a compact subset of every ambient space inducing the same topology on it ([[lem-compactness-is-intrinsic]]).

[F10] The Borel sigma-algebra on a topological space is the sigma-algebra generated by its open sets; a family of subsets that contains every open set and is closed under complements and countable unions contains every Borel set ([[def-borel-sigma-algebra]]).

[F11] A lambda-system contains the whole space, is closed under differences $B\setminus A$ when $A\subseteq B$ are members, and is closed under increasing countable unions ([[def-lambda-system]]). The family of open subsets of a topological space is a pi-system, and Dynkin's pi-lambda theorem says that every lambda-system containing a pi-system contains the sigma-algebra it generates ([[def-pi-system]], [[thm-dynkin-pi-lambda]]).

[F12] Finite linear combinations of harmonic functions are harmonic, since harmonic functions are $C^2$ with Laplacian zero and the Laplacian is linear ([[def-plane-harmonic-function]]).

## Proof

**Proof technique:** direct.

1.1 Fix a compact nonempty $K\subseteq\partial\Omega$ and for $m\ge1$ define $\varphi_m(x)=\max\{0,1-m\,d(x,K)\}$ on $\partial\Omega$. Each $\varphi_m$ is continuous and $0\le\varphi_{m+1}\le\varphi_m\le1$; and $\varphi_m=1$ on $K$, while for $x\notin K$ the compact set $K$ and the closed set $\{x\}$ are disjoint, so $d(x,K)>0$ by [F7] and $\varphi_m(x)=0$ for all $m\ge1/d(x,K)$. Thus $\varphi_m\downarrow\mathbf 1_K$ pointwise on $\partial\Omega$. [F6, F7, given]

1.2 Let $U\subseteq\partial\Omega$ be open. The cases $U=\partial\Omega$ and $U=\varnothing$ give the constant functions $1$ and $0$, which are harmonic; assume $U\notin\{\varnothing,\partial\Omega\}$. For $m\ge1$ put $K_m=\{x\in\partial\Omega:d(x,\partial\Omega\setminus U)\ge1/m\}$. Since $\partial\Omega\setminus U$ is a nonempty closed set and $d(\cdot,\partial\Omega\setminus U)$ is continuous, each $K_m$ is closed in $\partial\Omega$, hence compact because $\partial\Omega$ is compact; clearly $K_m\subseteq K_{m+1}$. If $x\in K_m$ then $d(x,\partial\Omega\setminus U)\ge1/m>0$, so $x\notin\partial\Omega\setminus U$ (that set being closed, a point of it would have distance zero), hence $x\in U$ and $K_m\subseteq U$. Conversely every $x\in U$ lies outside the nonempty closed set $\partial\Omega\setminus U$, so by [F7] applied to the compact singleton $\{x\}$ we have $d(x,\partial\Omega\setminus U)>0$, hence $x\in K_m$ for all large $m$; therefore $\bigcup_mK_m=U$. [F1, F6, F7, F8, given]

1.3 Now let $\Omega_1\subseteq\Omega_2$ be bounded regular domains, let $z\in\Omega_1$, and let $K\subseteq\partial\Omega_1\cap\partial\Omega_2$ be compact. Such a $K$ is a compact subset of both $\partial\Omega_1$ and $\partial\Omega_2$ by [F9]. Let $\varphi_2:\partial\Omega_2\to\mathbb R$ be continuous with $\varphi_2\ge\mathbf 1_K$, and let $u_2$ be the continuous harmonic extension of $\varphi_2$ on $\Omega_2$ provided by [F1]. Evaluating the representation of [F1] for $\Omega_2$ at $z$ gives $\int_{\partial\Omega_2}\varphi_2\,d\omega_{\Omega_2}^z=u_2(z)$. Since $\Omega_1\subseteq\Omega_2$ we have $\overline{\Omega_1}\subseteq\overline{\Omega_2}$, and $u_2\ge0$ on $\overline{\Omega_2}$ by [F5] and $\varphi_2\ge0$; restricted to $\overline{\Omega_1}$ it is continuous, harmonic on $\Omega_1$, and hence is the unique continuous harmonic extension of its trace $u_2|_{\partial\Omega_1}$. Applying the representation of [F1] to $\Omega_1$ with that trace gives $\int_{\partial\Omega_1}u_2\,d\omega_{\Omega_1}^z=u_2(z)$. Finally $u_2\ge\mathbf 1_K$ at every point of $K\subseteq\partial\Omega_1\cap\partial\Omega_2$, because $u_2=\varphi_2$ on $\partial\Omega_2$, and $u_2\ge0$ everywhere on $\partial\Omega_1$, so $\int_{\partial\Omega_1}u_2\,d\omega_{\Omega_1}^z\ge\omega_{\Omega_1}^z(K)$. Chaining the three displays, $\omega_{\Omega_1}^z(K)\le\int_{\partial\Omega_2}\varphi_2\,d\omega_{\Omega_2}^z$. [F1, F5, F9, given]

1.4 The compact set $K\subseteq\partial\Omega_2$ satisfies $\omega_{\Omega_2}^z(K)=\inf\{\int_{\partial\Omega_2}\varphi\,d\omega_{\Omega_2}^z:\varphi\in C(\partial\Omega_2),\ \varphi\ge\mathbf 1_K\}$. The inequality "$\ge$" is monotonicity of the integral against the positive measure $\omega_{\Omega_2}^z$; for "$\le$" fix $\varepsilon>0$ and use outer regularity [F2] to choose open $V\supseteq K$ with $\omega_{\Omega_2}^z(V)<\omega_{\Omega_2}^z(K)+\varepsilon$. If $\partial\Omega_2\setminus V=\varnothing$ the constant function $1$ is admissible and $\int1\,d\omega_{\Omega_2}^z=1=\omega_{\Omega_2}^z(V)<\omega_{\Omega_2}^z(K)+\varepsilon$. Otherwise $\partial\Omega_2\setminus V$ is nonempty closed and disjoint from $K$, so $\delta:=d(K,\partial\Omega_2\setminus V)>0$ by [F7]; the function $\varphi(x)=\max\{0,1-d(x,K)/\delta\}$ is continuous by [F6], satisfies $\mathbf 1_K\le\varphi\le\mathbf 1_V$, and hence $\int\varphi\,d\omega_{\Omega_2}^z\le\omega_{\Omega_2}^z(V)<\omega_{\Omega_2}^z(K)+\varepsilon$. Letting $\varepsilon\downarrow0$ proves the displayed infimum. [F2, F6, F7, given]

1.5 Let $E\subseteq\partial\Omega_1\cap\partial\Omega_2$ be Borel and let $\varepsilon>0$. The measure $\omega_{\Omega_1}^z$ has total mass one and is outer regular on Borel sets by [F2]; applied to the Borel set $\partial\Omega_1\setminus E$ it yields an open $V\supseteq\partial\Omega_1\setminus E$ with $\omega_{\Omega_1}^z(V)<\omega_{\Omega_1}^z(\partial\Omega_1\setminus E)+\varepsilon$. Then $C:=\partial\Omega_1\setminus V$ is closed in $\partial\Omega_1$, hence compact by [F8] and $\partial\Omega_1$ being compact, satisfies $C\subseteq E$, and $\omega_{\Omega_1}^z(C)=1-\omega_{\Omega_1}^z(V)>1-\omega_{\Omega_1}^z(\partial\Omega_1\setminus E)-\varepsilon=\omega_{\Omega_1}^z(E)-\varepsilon$. [F2, F8, given]

2.1 For each $m$ let $u_m:=H_{\varphi_m}$ be the corresponding envelope for $\Omega$; by [F1] each $u_m$ is harmonic on $\Omega$, continuous on $\overline\Omega$, and satisfies $u_m(w)=\int_{\partial\Omega}\varphi_m\,d\omega_\Omega^w$ for every $w\in\Omega$. Since $\varphi_{m+1}\le\varphi_m$ and $\omega_\Omega^w$ is a positive measure, $u_{m+1}(w)=\int\varphi_{m+1}\,d\omega_\Omega^w\le\int\varphi_m\,d\omega_\Omega^w=u_m(w)$ and $u_m(w)\ge0$ for every $w$. [F1, step 1.1]

2.2 Combining steps 1.3 and 1.4, for every compact $K\subseteq\partial\Omega_1\cap\partial\Omega_2$ we have $\omega_{\Omega_1}^z(K)\le\inf_{\varphi_2\ge\mathbf 1_K}\int_{\partial\Omega_2}\varphi_2\,d\omega_{\Omega_2}^z=\omega_{\Omega_2}^z(K)$; for $K=\varnothing$ both sides are $0$. [step 1.3, step 1.4]

3.1 Fix $w\in\Omega$. The functions $\varphi_1-\varphi_m$ are nonnegative, measurable, and increase to $\varphi_1-\mathbf 1_K$ pointwise by step 1.1, so monotone convergence [F4] gives $\int(\varphi_1-\varphi_m)\,d\omega_\Omega^w\uparrow\int(\varphi_1-\mathbf 1_K)\,d\omega_\Omega^w$. All these integrals are finite because $\omega_\Omega^w$ is a probability measure and $0\le\varphi_1-\varphi_m\le1$; subtracting the common finite value $\int\varphi_1\,d\omega_\Omega^w$ gives $u_m(w)=\int\varphi_m\,d\omega_\Omega^w\downarrow\omega_\Omega^w(K)$. [F1, F4, step 1.1, step 2.1]

4.1 The sequence $-u_m$ is increasing by step 2.1 and bounded above by $0$, so the divergent alternative of [F3] is excluded and $-u_m$ converges locally uniformly on $\Omega$ to a harmonic function; equivalently $u_m$ converges locally uniformly to a harmonic function $u$, and by step 3.1 $u(w)=\lim_m u_m(w)=\omega_\Omega^w(K)$ for every $w\in\Omega$. Hence $w\mapsto\omega_\Omega^w(K)$ is harmonic on $\Omega$ for every nonempty compact $K\subseteq\partial\Omega$; for $K=\varnothing$ it is the constant $0$, which is harmonic. [F1, F3, step 2.1, step 3.1]

5.1 Since every $\omega_\Omega^w$ is a probability measure, $0\le\omega_\Omega^w(K)\le1$ for every $w$ and every compact $K$. [F1, step 4.1]

6.1 For each $w$, continuity from below for the measure $\omega_\Omega^w$ gives $\omega_\Omega^w(U)=\lim_m\omega_\Omega^w(K_m)$ by step 1.2. The functions $w\mapsto\omega_\Omega^w(K_m)$ are harmonic by step 4.1, the sequence is increasing in $m$ and takes values in $[0,1]$ by step 5.1, so its limit $w\mapsto\omega_\Omega^w(U)$ is harmonic on $\Omega$ by [F3]. [F3, step 4.1, step 5.1, step 1.2]

7.1 Let $\mathcal A$ be the family of Borel sets $E\subseteq\partial\Omega$ for which $w\mapsto\omega_\Omega^w(E)$ is harmonic on $\Omega$. It contains $\partial\Omega$ because the harmonic measure is a probability, and it contains every open set by steps 1.2 and 6.1 and the two trivial open cases there. If $A,B\in\mathcal A$ with $A\subseteq B$, then for every $w$ the measure identity gives $\omega_\Omega^w(B\setminus A)=\omega_\Omega^w(B)-\omega_\Omega^w(A)$; the right side is a difference of harmonic functions, hence harmonic by [F12], so $B\setminus A\in\mathcal A$. If $E_1\subseteq E_2\subseteq\cdots$ are in $\mathcal A$, then continuity from below for each measure gives $\omega_\Omega^w(\bigcup_n E_n)=\lim_n\omega_\Omega^w(E_n)$. This is an increasing sequence of harmonic functions bounded above by $1$, so its limit is harmonic by [F3]. Thus $\mathcal A$ is a lambda-system by [F11]. The open subsets of $\partial\Omega$ form a pi-system that generates its Borel sigma-algebra, so Dynkin's pi-lambda theorem [F11] implies that $\mathcal A$ contains every Borel set. Hence $w\mapsto\omega_\Omega^w(E)$ is harmonic for every Borel $E$, its values lie in $[0,1]$ because each $\omega_\Omega^w$ is a probability measure, and countable additivity in $E$ at fixed $w$ is the measure property of $\omega_\Omega^w$. [F1, F3, F10, F11, F12, step 5.1, step 6.1, step 1.2]
8.1 The compact set $C$ of step 1.5 is a compact subset of $\partial\Omega_1\cap\partial\Omega_2$ and hence of $\partial\Omega_2$ by [F9]; if $C\ne\varnothing$ step 2.2 gives $\omega_{\Omega_1}^z(C)\le\omega_{\Omega_2}^z(C)$, while for $C=\varnothing$ this inequality is trivial. Since $C\subseteq E\subseteq\partial\Omega_2$, monotonicity of $\omega_{\Omega_2}^z$ gives $\omega_{\Omega_2}^z(C)\le\omega_{\Omega_2}^z(E)$. Therefore $\omega_{\Omega_1}^z(E)<\omega_{\Omega_1}^z(C)+\varepsilon\le\omega_{\Omega_2}^z(E)+\varepsilon$ for every $\varepsilon>0$, so $\omega_{\Omega_1}^z(E)\le\omega_{\Omega_2}^z(E)$. Dependent Choice was used only through the existence and uniqueness theorem [F1]; the compact and Borel approximation arguments and the comparison itself are choice-free. [F1, F9, step 2.2, step 1.5, given] ∎
