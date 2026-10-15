---
id: lem-adaptive-mcmc-uniform-drift-minorization-bound
kind: lemma
title: Common drift and minorization give a uniform geometric bound
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - def-small-set-minorization-and-drift
  - def-total-variation-distance-for-probability-laws
  - cor-markov-inequality-for-random-variables
  - lem-total-variation-coupling-and-kernel-contraction
  - lem-finite-products-of-probability-kernels
  - thm-measurability-of-integration-against-a-kernel
  - thm-monotone-convergence-for-the-integral
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, Coupling and Ergodicity of Adaptive MCMC"
      url: "https://www.probability.ca/jeff/ftpdir/adapt.pdf"
      locator: "§7, Proposition 17 and Theorem 18, pp. 15–16."
    - title: "Gersende Fort, Adaptive MCMC: theory and methods, Warwick lecture notes"
      url: "https://www.math.univ-toulouse.fr/~gfort/Slides/Warwick09.pdf"
      locator: "Slides 30–32: simultaneous drift/minorization and containment."
---

## Statement

Let $(P_\gamma)_{\gamma\in\Gamma}$ be probability kernels on a measurable
space $(\mathsf X,\mathcal X)$ with a common invariant probability $\pi$
([[def-invariant-and-stationary-distribution-for-a-markov-kernel]]). Suppose
there are a measurable set $C$, a finite measurable $V:\mathsf X\to[1,\infty)$,
and constants $v\ge1$, $0<\delta\le1$, $0<\lambda<1$, and $0\le b<\infty$
such that $\sup_{x\in C}V(x)\le v$ and, for every $\gamma$, there is a
probability measure $\nu_\gamma$ with $\nu_\gamma(C)=1$ satisfying
$$P_\gamma(x,A)\ge\delta\nu_\gamma(A)\quad(x\in C,\ A\in\mathcal X),\qquad P_\gamma V(x):=\int V(y)P_\gamma(x,dy)\le\lambda V(x)+b1_C(x)\quad(x\in\mathsf X).$$
Then there are constants $M<\infty$ and $0<\rho<1$, depending only on
$v,\delta,\lambda,b$, such that
$$\lVert P_\gamma^n(x,\cdot)-\pi\rVert_{\rm TV}\le M V(x)\rho^n\quad(x\in\mathsf X,\ n\ge0,\ \gamma\in\Gamma).$$
The support condition $\nu_\gamma(C)=1$ is the strong-aperiodicity
hypothesis in the cited drift/minorization route.

## Facts & Assumptions

**Given:** The kernels, common invariant probability, set $C$, drift function,
and uniform minorization/drift constants in the Statement.

[F1] [[def-small-set-minorization-and-drift]]: a one-step minorization means
$P_\gamma(x,\cdot)\ge\delta\nu_\gamma(\cdot)$ for every $x\in C$, and the
geometric drift inequality is pointwise.

[F2] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]:
$\pi P_\gamma=\pi$ for each $\gamma$.

[F3] [[def-measure-kernel-and-probability-kernel]]: kernel rows are
probability measures and kernel evaluations are measurable.

[F4] [[lem-total-variation-coupling-and-kernel-contraction]]: a measurable
event on which coupled coordinates agree bounds total variation by its
complement probability, and fixed kernels contract total variation.

[F5] [[lem-finite-products-of-probability-kernels]]: finite products of
probability kernels are probability kernels.

[F6] [[thm-measurability-of-integration-against-a-kernel]]: integration of
nonnegative measurable functions against these kernels is measurable.

[F7] [[thm-monotone-convergence-for-the-integral]]: increasing truncations
converge under integration.

[F8] [[cor-markov-inequality-for-random-variables]]: for nonnegative $Z$ and
$t>0$, $\mathbb P(Z\ge t)\le\mathbb E Z/t$.

## Proof

**Given:** The Statement and [F1]–[F8]. No choice axiom is used: for each
fixed $\gamma$ the proof uses a witness $\nu_\gamma$ and all resulting bounds
depend only on the common numerical constants.

0.1 We record the finite-horizon construction used below. If $T$ is a probability kernel on $(S,\Sigma)$, start with any probability measure $\mu_0$ on $S$ (in particular $\mu_0=\delta_s$ for a fixed start $s$). Given a probability measure $\mu_m$ on $S^{m+1}$, the map $\widehat T_m((s_0,\ldots,s_m),A):=T(s_m,A)$ is a probability kernel from $S^{m+1}$ to $S$, since the last-coordinate projection is measurable. For $E\in\Sigma^{\otimes(m+2)}$, set $\mu_{m+1}(E):=\int_{S^{m+1}}\int_S1_E((s_0,\ldots,s_m),z)\,T(s_m,dz)\,\mu_m(d(s_0,\ldots,s_m)).$ The inner integral is measurable by [F6]. Sections of product-measurable sets are measurable, and countable additivity of the rows of $T$ together with [F7] gives countable additivity of $\mu_{m+1}$; its total mass is one. For every measurable prefix set $A\subseteq S^{m+1}$ and $B\in\Sigma$, $\mu_{m+1}(A\times B)=\int_A T(s_m,B)\,\mu_m(d(s_0,\ldots,s_m)).$ Thus this recursion gives a probability law for each finite path, with the stated one-step transition identity; the identity for all prefix events is the displayed formula for arbitrary product-measurable $A$. Kernel integration of a nonnegative measurable test $g$ has the corresponding form $\int_{A\times S}g(z)\,\mu_{m+1}(d(w,z))=\int_A\int_Sg(z)T(s_m,dz)\,\mu_m(dw),$ first for simple $g$ and then by [F7]. These identities are exactly the finite-horizon conditional transition and expectation rules used below. Kernel compositions used below are kernels as well: iterating $(K_1K_2)(x,A)=\int K_2(y,A)K_1(x,dy)$ preserves measurable evaluations by [F6] and countable additivity by [F7]. This applies to probability kernels and finite subprobability kernels. [F6, F7, construct]

1.1 Fix any $\gamma$. For $r\ge1$, set $V_r=V\wedge r$. By [F2], $\int(P_\gamma V_r-V_r)\,d\pi=0$. On $C$ the integrand is at most $\lambda v+b$; on $C^c\cap\{V\le r\}$ it is at most $-(1-\lambda)V$; and on $C^c\cap\{V>r\}$ it is at most zero, because $P_\gamma V_r\le\min(P_\gamma V,r)$. Hence $(1-\lambda)\int_{C^c\cap\{V\le r\}}V\,d\pi\le(\lambda v+b)\pi(C)\le\lambda v+b.$ Letting $r\to\infty$ by [F7] gives the uniform finite bound $\pi V\le v+(\lambda v+b)/(1-\lambda)=:K_\pi$. [F2, F3, F7, given]

1.2 Put $\lambda'=(1+\lambda)/2$ and $c=b/(1-\lambda')$. Choose $d\ge v$ so $2c/(d+1)<1/4$, then choose $N\ge1$ with $d(\lambda')^N\le1/2$, and finally choose $L>N+1$ with $(\lambda')^L<1/4$. Let $D=\{x:V(x)\le d\}$. For fixed $\gamma$, the killed subprobability kernel $K_\gamma(x,A)=1_{C^c}(x)P_\gamma(x,A)$ satisfies $K_\gamma V\le\lambda'V$. To make its finite paths explicit, adjoin a cemetery point $\dagger$ and equip $\bar{\mathsf X}=\mathsf X\sqcup\{\dagger\}$ with $\bar{\mathcal X}=\{A,A\cup\{\dagger\}:A\in\mathcal X\}$. Define the probability kernel $\bar K_\gamma$ on this measurable space by $\bar K_\gamma(x,A)=K_\gamma(x,A\cap\mathsf X)+1_C(x)1_{\{\dagger\in A\}}$ for $x\in\mathsf X$, and $\bar K_\gamma(\dagger,A)=1_{\{\dagger\in A\}}$. This is measurable: the first term is a kernel evaluation, the second is measurable, and each row has mass one. Step 0.1 constructs its finite path laws. Let $\bar V=V$ on $\mathsf X$ and $\bar V(\dagger)=0$; then $\bar V$ is $\bar{\mathcal X}$-measurable, $\bar K_\gamma\bar V=K_\gamma V$ on $\mathsf X$, $\bar K_\gamma\bar V(\dagger)=0$, and by iteration $\bar K_\gamma^{N+1}\bar V(x)=K_\gamma^{N+1}V(x)$. The event that the killed path is in $\mathsf X$ after $N+1$ transitions has probability $K_\gamma^{N+1}1(x)$. Under the finite $P_\gamma$-path law from step 0.1, the same recursive formula inserts $1_{C^c}$ at each current state, so for $\tau_C=\inf\{m\ge0:X_m\in C\}$ one has $\mathbb P_x(\tau_C>N)=K_\gamma^{N+1}1(x)$. $\mathbb P_x(\tau_C>N)=K_\gamma^{N+1}1(x)\le K_\gamma^{N+1}V(x)\le(\lambda')^{N+1}V(x)\le1/2$ for every $x\in D$. Hence $\mathbb P_x(\tau_C\le N)\ge1/2$. [F1, F3, F6, step 0.1, given]

2.1 Since $\nu_\gamma(C)=1$, the minorization gives $\nu_\gamma P_\gamma\ge\delta\nu_\gamma$, and induction gives $\nu_\gamma P_\gamma^q\ge\delta^q\nu_\gamma$ for every $q\ge0$. Split the $L$-step transition according to the first hit time $t\le N$ of $C$. From a state in $C$, the first step minorizes by $\delta\nu_\gamma$ and the remaining $L-t-1$ steps preserve at least $\delta^{L-t-1}\nu_\gamma$. Hence, for every $x\in D$ and measurable $A$, $P_\gamma^L(x,A)\ge\sum_{t=0}^N\mathbb P_x(\tau_C=t)\delta^{L-t}\nu_\gamma(A)\ge\frac{\delta^L}{2}\nu_\gamma(A).$ Thus $D$ is one-step small for $Q_\gamma=P_\gamma^L$, with common $\epsilon=\delta^L/2$. [F1, step 1.2, given]

2.2 Iterating $P_\gamma V\le\lambda V+b1_C\le\lambda'V+b$ gives $Q_\gamma V\le(\lambda')^L V+c$. Put $h(x,y)=(V(x)+V(y))/2$. Outside $D\times D$, at least one coordinate has $V>d$ and the other has $V\ge1$, so $(Q_\gamma\otimes Q_\gamma)h(x,y)\le(\lambda')^Lh(x,y)+c\le a h(x,y),\qquad a:=(\lambda')^L+\frac{2c}{d+1}<1.$ This $a$ is independent of $\gamma$. [F3, F5, step 1.2, algebra]

3.1 For $x\in D$, $Q_\gamma V(x)\le d+c$. The residual probability $R_{\gamma,x}=(Q_\gamma(x,\cdot)-\epsilon\nu_\gamma)/(1-\epsilon)$ is well-defined by step 2.1 and satisfies $R_{\gamma,x}V\le(d+c)/(1-\epsilon)$. Consequently $R_{\gamma,x}\otimes R_{\gamma,y}(h)\le H:=(d+c)/(1-\epsilon)$ for $x,y\in D$. All constants here are independent of $\gamma$. [F1, F3, F5, step 2.1, step 2.2]

3.2 Fix $\gamma$. Let $\Delta(z)=(z,z)$; this map from $(\mathsf X,\mathcal X)$ to $(\mathsf X^2,\mathcal X\otimes\mathcal X)$ is measurable, since inverse images of rectangles are measurable intersections. Write $\Delta_*\eta(E)=\eta(\Delta^{-1}(E))$ for the image of a measure $\eta$. Extend the residual rows to all $x\in\mathsf X$ by setting $R_x=(Q_\gamma(x,\cdot)-\epsilon\nu_\gamma)/(1-\epsilon)$ on $D$ and $R_x=\pi$ on $D^c$; this is a probability kernel by step 2.1 and measurable piecewise definition. On $\mathsf S=\mathsf X^2\times\{0,1\}$, for a measurable $E\subseteq\mathsf S$ write $E_i=\{(u,v):(u,v,i)\in E\}$. Define a transition $T_\gamma$ as follows:  - from $((x,y),0)$ with $(x,y)\notin D^2$, its row on flag $0$ is $Q_\gamma(x,\cdot)\otimes Q_\gamma(y,\cdot)$; - from $((x,y),0)$ with $(x,y)\in D^2$, its row is $(1-\epsilon)(R_x\otimes R_y)$ on flag $0$ plus $\epsilon\Delta_*\nu_\gamma$ on flag $1$; - from $((x,y),1)$, its row is $\Delta_*Q_\gamma(x,\cdot)$ on flag $1$.  Here each $E_i$ is measurable by sectioning the finite flag coordinate, and the displayed measures on $\mathsf X^2$ are placed on their indicated flag sections. The maps $(x,y)\mapsto Q_\gamma(x,A)$ and $(x,y)\mapsto Q_\gamma(y,A)$ (and the analogous maps for $R$) are measurable by the coordinate projections, so [F5] gives the two product-kernel rows. The image-kernel rows are measurable by measurability of $\Delta$ and of $Q_\gamma(x,A)$. Since $D^2$ is measurable, the three cases define a measurable probability kernel on $\mathsf S$. At flag $0$, each coordinate marginal is its corresponding $Q_\gamma$ row, because on $D$ one has $\epsilon\nu_\gamma+(1-\epsilon)R_x=Q_\gamma(x,\cdot)$. At flag $1$ the coordinates coincide on every reachable state and both then advance with $Q_\gamma$. Applying the finite-horizon construction in step 0.1 to $T_\gamma$ defines the finite path laws used below. Starting from $B_0=0$, once $B_k=1$ the coordinates remain equal; $\{B_k=1\}$ is measurable and on it $X_k=Y_k$. [F1, F3, F5, F6, step 2.1, step 0.1, given]

4.1 Let $T=\inf\{m\ge1:B_m=1\}$ and let $N_k$ count failed split attempts in the first $k$ transitions. Choose $B\ge\max\{1,(1-\epsilon)H/a\}$ and define $Z_k=a^{-k}B^{-N_k}h(X_k,Y_k)1_{\{T>k\}}.$ For each finite horizon, the coordinate process under its path law from step 0.1 is a nonnegative supermartingale with respect to its coordinate filtration: on $\{T>k\}$ an outside-$D\times D$ update contracts expected $h$ by step 2.2 and leaves the flag and failure count unchanged; on $D\times D$ a successful split makes the indicator zero, while the failed-split contribution has ratio at most $(1-\epsilon)H/(aB h(X_k,Y_k))\le1$ because $h\ge1$. Since $T\ge1$, $Z_0=h(x,y)$, and therefore $\mathbb E_{x,y} Z_k\le h(x,y)$ for every finite $k$. [step 2.2, step 3.1, step 3.2, step 0.1, given]

5.1 For every integer $j\ge1$, the probability of at least $j$ failed split attempts is at most $(1-\epsilon)^j$, by conditioning successively at the first $j$ attempts. On $\{T>k,N_k<j\}$, $Z_k\ge a^{-k}B^{-(j-1)}$, so Markov's inequality [F8] gives $\mathbb P_{x,y}(T>k)\le(1-\epsilon)^j+a^kB^{j-1}h(x,y).$ Choose $\theta>0$ with $aB^\theta<1$ and take $j=\max(1,\lfloor\theta k\rfloor)$. Both terms are bounded by $M_0h(x,y)\rho_0^k$ for constants $M_0<\infty$, $0<\rho_0<1$ determined only by $a,B,\epsilon$. On the measurable event $\{T\le k\}$ the flagged chains agree, so [F4] yields $\lVert Q_\gamma^k(x,\cdot)-Q_\gamma^k(y,\cdot)\rVert_{\rm TV}\le M_0h(x,y)\rho_0^k.$ [F4, F8, step 4.1, algebra]

6.1 For each finite $k$, start the flagged path law with initial measure $\delta_x\otimes\pi\otimes\delta_0$ on $\mathsf S$, which exists by [F5] and step 0.1. The second coordinate has initial law $\pi$ and transition marginal $Q_\gamma$, so invariance gives $Y_k\sim\pi$. Integrating step 5.1 over $Y_0$ and using step 1.1 yields $\lVert Q_\gamma^k(x,\cdot)-\pi\rVert_{\rm TV}\le\frac{M_0}{2}(V(x)+\pi V)\rho_0^k\le\frac{M_0}{2}(1+K_\pi)V(x)\rho_0^k.$ This bound is uniform in $\gamma$. [F2, F4, F5, step 0.1, step 1.1, step 5.1]

7.1 Write $n=Lk+s$ with $0\le s<L$. By kernel contraction and $\pi P_\gamma^s=\pi$, $\lVert P_\gamma^n(x,\cdot)-\pi\rVert_{\rm TV}\le\lVert Q_\gamma^k(x,\cdot)-\pi\rVert_{\rm TV}.$ Set $\rho=\rho_0^{1/L}$ and enlarge the constant by $\rho^{-(L-1)}$. The resulting $M$ is finite and depends only on $v,\delta,\lambda,b$, proving the stated bound. [F2, F4, step 6.1, algebra] ∎
