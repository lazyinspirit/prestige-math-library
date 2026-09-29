---
id: thm-green-function-uniqueness-symmetry-and-monotonicity
kind: theorem
title: "Canonical Green kernels are unique, symmetric and domain monotone"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - cor-power-series-sums-are-smooth-with-coefficient-formula
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - def-complex-domain
  - def-countable-choice
  - def-dirichlet-green-function-for-minus-laplacian
  - def-green-function-plane-domain
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - def-plane-harmonic-function
  - def-real-analytic-function
  - lem-log-modulus-is-harmonic-off-its-centre
  - lem-analytic-boundary-green-corrector-is-smooth
  - lem-analytic-exhaustion-of-plane-domains
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-conformal-invariance-of-plane-harmonicity
  - thm-distributional-differentiation-is-continuous-and-commutes
  - thm-green-function-exists-on-bounded-plane-domains
  - thm-green-function-symmetry
  - thm-harnack-convergence-principle-for-plane-harmonic-functions
  - thm-locally-integrable-functions-embed-in-distributions
  - thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions
sources:
  references:
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I, Appendix 1, Sections 10.1-10.9"
      url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
      locator: "Section 10.3, printed pp. 164-166: the logarithmic Green correction and its comparison properties"
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, Section 3"
      url: https://arxiv.org/pdf/1010.3760
      locator: "Section 3, PDF pp. 19-25: Green functions with a logarithmic pole; symmetry is stated there and proved here through the in-run PDE Green symmetry theorem"
    - title: "Gerald Teschl, Partial Differential Equations, Section 5.4"
      url: https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf
      locator: "Lemma 5.23, printed pp. 126-127: two-pole symmetry of the Dirichlet Green function, used here on the exhaustion domains"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Assume Countable Choice. Let $\Omega$ be a Greenian plane domain
([[def-green-function-plane-domain]]). Then:

1. a canonical Green kernel is unique: if a pointwise least logarithmic-pole
   candidate at $a\in\Omega$ exists, it is unique, so the notation
   $g_\Omega(\cdot,a)$ is unambiguous;
2. symmetry: $g_\Omega(z,a)=g_\Omega(a,z)$ for all distinct $a,z\in\Omega$;
3. domain monotonicity: if $\Omega_1\subseteq\Omega_2$ are Greenian plane
   domains and $a,z\in\Omega_1$ are distinct, then
   $g_{\Omega_1}(z,a)\le g_{\Omega_2}(z,a)$. The inequality is in this
   direction: enlarging the domain increases the Green kernel.

Countable Choice is used only through the cited bounded-domain existence
theorem and the cited PDE Green symmetry theorem.

## Facts & Assumptions

**Given:** Countable Choice ([[def-countable-choice]]); a Greenian plane domain $\Omega$ ([[def-green-function-plane-domain]]), so $\Omega$ is a nonempty connected open set with $\Omega\ne\mathbb C$ ([[def-complex-domain]]); harmonicity in the sense of [[def-plane-harmonic-function]]; and distinct points $x,y\in\Omega$ in the symmetry part.

[F1] A logarithmic-pole candidate at $a$ on a proper plane domain is a nonnegative function on $\Omega\setminus\{a\}$ that is harmonic there and whose sum with $\log|z-a|$ extends harmonically across $a$; the canonical Green function is the pointwise least candidate, when such a member exists, a pointwise least member is unique, and $\Omega$ is Greenian when $g_\Omega(\cdot,a)$ exists for every $a\in\Omega$ ([[def-green-function-plane-domain]]).

[F2] Assume Countable Choice. If $D$ is a bounded complex domain and $p\in D$, then with $F_p(z):=-\log|z-p|$, $b_p:=F_p|_{\partial D}$ and $h_p:=H_{b_p}$ one has $g_D(z,p)=F_p(z)-h_p(z)$ is the canonical positive Green kernel of $D$ at $p$, and $-\Delta_zT_{g_D(\cdot,p)}=2\pi\delta_p$ as distributions on $D$ ([[thm-green-function-exists-on-bounded-plane-domains]]).

[F3] Every plane domain admits an increasing sequence $D_1\subseteq D_2\subseteq\cdots$ of relatively compact connected open subsets whose boundaries are real-analytic regular in the one-sided sense: for every $\zeta\in\partial D_j$ there are a neighbourhood $U$ of $\zeta$ and a real-analytic function $g$ of one real variable with, after relabelling the two coordinate axes if necessary, $\partial D_j\cap U=\{(x,y)\in U:y=g(x)\}$ and $D_j\cap U$ one of the two connected components of $U\setminus\{(x,y)\in U:y=g(x)\}$. Every compact $K\subseteq\Omega$ lies in $D_j$ for all sufficiently large $j$, and if $A\subseteq\Omega$ is finite the sequence may be chosen with $A\subseteq D_1$ ([[lem-analytic-exhaustion-of-plane-domains]]).

[F4] Let $D$ be a bounded complex domain whose boundary is a compact real-analytic curve, locally parametrized by a real-analytic $\gamma$ with $\gamma'(0)\ne0$ and $D$ on one side. Then for $a\in D$ the Perron corrector $h_a:=-\log|\cdot-a|-g_D(\cdot,a)$ extends to a function of class $C^2$ on $\overline D$; consequently $g_D(\cdot,a)=-\log|\cdot-a|-h_a$ extends to a $C^2$ function on $\overline D\setminus\{a\}$ whose trace on $\partial D$ is identically zero ([[lem-analytic-boundary-green-corrector-is-smooth]]).

[F5] Assume Countable Choice. Let $n\ge2$ and let $\Omega\subset\mathbb R^n$ be a bounded $C^1$ domain carrying a Dirichlet Green function $G_\Omega$ for $-\Delta$ whose designated harmonic correctors satisfy $H_y\in C^2(\overline\Omega)$; then $G_\Omega(x,y)=G_\Omega(y,x)$ for all distinct $x,y$ ([[thm-green-function-symmetry]]).

[F6] Assume Countable Choice. A Dirichlet Green function for $-\Delta$ on $\Omega$ is a function $G_\Omega$ on pairs of distinct points such that for each pole $y$ there is a harmonic $H_y$ with $H_y=\Phi(\cdot-y)$ on $\partial\Omega$ and $G_\Omega(x,y)=\Phi(x-y)-H_y(x)$, such that $G_\Omega(\cdot,y)$ is harmonic off $y$ with zero boundary trace, and such that $-\Delta T_{G_\Omega(\cdot,y)}=\delta_y$ in $\mathcal D'(\Omega)$ ([[def-dirichlet-green-function-for-minus-laplacian]]).

[F7] A bounded $C^1$ domain is a nonempty bounded open set whose boundary is locally, after a rigid change of coordinates, the graph of a $C^1$ function with the set locally exactly the corresponding subgraph; connectedness is not required ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]).

[F8] Assume Countable Choice and $n\ge2$. The fundamental solution is $\Phi(x)=|x|^{2-n}/((n-2)\omega_{n-1})$ for $n\ge3$ and $\Phi(x)=-(2\pi)^{-1}\log|x|$ for $n=2$, $x\ne0$ ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]).

[F9] An increasing sequence of harmonic functions on a complex domain either tends to $+\infty$ at every point or converges locally uniformly to a harmonic limit ([[thm-harnack-convergence-principle-for-plane-harmonic-functions]]).

[F10] A harmonic function on a punctured disc that is bounded on that punctured disc extends harmonically across the puncture ([[thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions]]).

[F11] Countable Choice: every family $(X_n)$ of nonempty sets indexed by $\mathbb N$ has a choice function ([[def-countable-choice]]).

[F12] The function $\log|\cdot|$ is harmonic on $\mathbb C\setminus\{0\}$ ([[lem-log-modulus-is-harmonic-off-its-centre]]), and precomposition of a harmonic function with a holomorphic map is harmonic ([[thm-conformal-invariance-of-plane-harmonicity]]); hence $z\mapsto\log|z-p|$ is harmonic on $\mathbb C\setminus\{p\}$.

[F13] A harmonic function is $C^2$ with $\Delta u=0$ ([[def-plane-harmonic-function]]), and finite sums of $C^2$ functions are $C^2$ with linear Laplacian ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]); hence sums and differences of harmonic functions are harmonic.

[F14] Assume Countable Choice. The map $f\mapsto T_f$ is complex-linear from $L^1_{\mathrm{loc}}$ into distributions, distributional differentiation is linear and continuous on $\mathcal D'(\Omega)$, and it extends classical smooth differentiation ([[thm-locally-integrable-functions-embed-in-distributions]], [[thm-distributional-differentiation-is-continuous-and-commutes]]).

[F15] A real-analytic function of one real variable is locally the sum of a convergent power series ([[def-real-analytic-function]]), and such sums have derivatives of every order ([[cor-power-series-sums-are-smooth-with-coefficient-formula]]); hence a real-analytic function is $C^1$.

## Proof

**Proof technique:** direct.

1.1 By [F1] the canonical Green function on a Greenian $\Omega$ is defined as the pointwise least member of the family of logarithmic-pole candidates at $a$, and the definition records that a pointwise least member is unique; hence whenever it exists it is unique, as claimed in clause 1. [F1]

1.2 Domain monotonicity. Let $\Omega_1\subseteq\Omega_2$ be Greenian plane domains and let $a,z\in\Omega_1$ be distinct. The restriction of $g_{\Omega_2}(\cdot,a)$ to $\Omega_1\setminus\{a\}$ is a logarithmic-pole candidate at $a$ on $\Omega_1$: it is nonnegative, it is harmonic on $\Omega_1\setminus\{a\}\subseteq\Omega_2\setminus\{a\}$, and the corrector $g_{\Omega_2}(\cdot,a)+\log|\cdot-a|$ agrees with a harmonic function on $\Omega_2$ by [F1] whose restriction to $\Omega_1$ is harmonic, so the sum extends harmonically across $a$ inside $\Omega_1$. Leastness of $g_{\Omega_1}(\cdot,a)$ gives $g_{\Omega_1}(z,a)\le g_{\Omega_2}(z,a)$, which is clause 3. [F1]

1.3 Symmetry setup. Assume Countable Choice and fix distinct $x,y\in\Omega$. Apply [F3] with the finite set $A=\{x,y\}$: there are relatively compact connected open subsets $D_1\subseteq D_2\subseteq\cdots$ of $\Omega$ with $\{x,y\}\subseteq D_1$, real-analytic regular one-sided boundaries, and every compact subset of $\Omega$ contained in $D_j$ for all large $j$. [F3, F11]

2.1 For each $j$, $D_j$ is a bounded complex domain, its boundary is a compact real-analytic curve in the sense of [F4], and $D_j$ is a bounded $C^1$ domain in the sense of [F7]. Indeed $D_j$ is nonempty, open, connected and relatively compact, hence bounded; for $\zeta\in\partial D_j$ the regularity of [F3] provides $U$ and a real-analytic $g$ with $\partial D_j\cap U=\{(x,y)\in U:y=g(x)\}$ and $D_j\cap U$ equal to one of the two components of $U\setminus\{(x,y)\in U:y=g(x)\}$. Parametrizing that graph, after translating the parameter, by $\gamma(t):=(t,g(t))$ gives a real-analytic curve with $\gamma'(t)=(1,g'(t))\ne0$ for which $D_j\cap U$ is one of the two components of $U\setminus\gamma$, so [F4] applies; and since $g$ is $C^1$ by [F15], after relabelling the axes and if necessary reflecting one of them the boundary is locally a $C^1$ graph with $D_j$ locally the corresponding subgraph, which is the structure required by [F7]. [F3, F4, F7, F15, step 1.3]

2.2 Fix a pole $p\in\{x,y\}$ and $z\in\Omega\setminus\{p\}$. Since the sequence exhausts $\Omega$ and $z$ is an interior point, $z\in D_j$ for all large $j$, and $\{p\}\subseteq D_1$; step 1.2 applied to the Greenian domains $D_j\subseteq D_{j+1}$ shows $g_{D_j}(z,p)\le g_{D_{j+1}}(z,p)$, and applied to $D_j\subseteq\Omega$ it shows $g_{D_j}(z,p)\le g_\Omega(z,p)$, a finite bound by [F1]. Hence the limit $u_p(z):=\lim_{j\to\infty}g_{D_j}(z,p)$ exists and lies in $[0,g_\Omega(z,p)]$. [F1, F3, step 1.2, step 1.3]

3.1 For each $j$ and each pole $p\in\{x,y\}$ the canonical kernel $g_{D_j}(\cdot,p)$ exists by [F2] because $D_j$ is a bounded complex domain, and [F4] applied to $D=D_j$ shows that the Perron corrector $h^{(j)}_p:=-\log|\cdot-p|-g_{D_j}(\cdot,p)$ is harmonic on $D_j$, extends to $C^2(\overline{D_j})$, and that $g_{D_j}(\cdot,p)=-\log|\cdot-p|-h^{(j)}_p$ extends to a $C^2$ function on $\overline{D_j}\setminus\{p\}$ with trace identically zero on $\partial D_j$. [F2, F4, step 2.1]

3.2 The limit $u_p$ is harmonic on $\Omega\setminus\{p\}$. Let $W\subseteq\Omega\setminus\{p\}$ be nonempty, open and relatively compact; by [F3] there is $j_0$ with $\overline W\subseteq D_{j_0}$, so $(g_{D_{j_0+n}}(\cdot,p)|_W)_{n\ge0}$ is an increasing sequence of harmonic functions on $W$ bounded above by $g_\Omega(\cdot,p)$, which is finite by [F1]. The first alternative of [F9] is therefore impossible and the second applies: the limit is harmonic on $W$ and the convergence is locally uniform there. As $W$ is arbitrary, $u_p$ is harmonic on $\Omega\setminus\{p\}$. [F1, F9, F3, step 2.2]

4.1 For each $j$, $G_j:=g_{D_j}/(2\pi)$ with correctors $H^{(j)}_p:=h^{(j)}_p/(2\pi)$ is a Dirichlet Green function for $-\Delta$ on $D_j$ in the sense of [F6] with designated $C^2(\overline{D_j})$ correctors. Correctors: for $z\in D_j\setminus\{p\}$, $\Phi(z-p)-H^{(j)}_p(z)=-\frac1{2\pi}\log|z-p|-\frac1{2\pi}h^{(j)}_p(z)=\frac1{2\pi}\bigl(-\log|z-p|-h^{(j)}_p(z)\bigr)=\frac1{2\pi}g_{D_j}(z,p)=G_j(z,p)$ by [F8] and step 3.1, and $H^{(j)}_p$ is harmonic with $H^{(j)}_p=\Phi(\cdot-p)$ on $\partial D_j$ because $g_{D_j}(\cdot,p)$ has zero boundary trace; harmonicity off the pole and the zero trace of $G_j(\cdot,p)$ are step 3.1. Dirac identity: by [F2] and step 2.1, $-\Delta T_{g_{D_j}(\cdot,p)}=2\pi\delta_p$ in $\mathcal D'(D_j)$, and linearity of the embedding and of distributional differentiation [F14] gives $-\Delta T_{G_j(\cdot,p)}=\frac1{2\pi}(-\Delta T_{g_{D_j}(\cdot,p)})=\delta_p$. [F2, F6, F8, F14, step 2.1, step 3.1]

4.2 The limit $u_p$ is a logarithmic-pole candidate at $p$ on $\Omega$: it is nonnegative by step 2.2, harmonic by step 3.2, and $\Phi_p:=u_p+\log|\cdot-p|$ is harmonic on $\Omega\setminus\{p\}$ by [F12] and [F13]. Near $p$ the function $\Phi_p$ is bounded: below, $u_p\ge g_{D_1}(\cdot,p)$ by step 2.2, so $\Phi_p\ge g_{D_1}(z,p)+\log|z-p|=-h^{(1)}_p(z)$ by step 3.1, and $h^{(1)}_p\in C^2(\overline{D_1})$ is bounded on a neighbourhood of $p$; above, $u_p\le g_\Omega(\cdot,p)$ by step 2.2, so $\Phi_p\le g_\Omega(z,p)+\log|z-p|$, and the right-hand side is harmonic on $\Omega$, hence bounded on a neighbourhood of $p$ by [F13]. Thus $\Phi_p$ is harmonic and bounded on a punctured disc about $p$, and [F10] extends it harmonically across $p$; so $u_p+\log|\cdot-p|$ extends harmonically to $\Omega$ and $u_p$ is a candidate in the sense of [F1]. [F1, F10, F12, F13, step 3.1, step 2.2, step 3.2]

5.1 Symmetry on the exhaustion domains. [F5] applies to the bounded $C^1$ domain $D_j$ of step 2.1, to the Dirichlet Green function $G_j$ of step 4.1 and to its correctors $H^{(j)}_p\in C^2(\overline{D_j})$: hence $G_j(u,v)=G_j(v,u)$ for all distinct $u,v\in D_j$, and multiplying by $2\pi$, $g_{D_j}(u,v)=g_{D_j}(v,u)$. [F5, step 2.1, step 4.1]

5.2 Identification of the limit. Leastness of $g_\Omega(\cdot,p)$ among the candidates on the Greenian domain $\Omega$ [F1] gives $g_\Omega(\cdot,p)\le u_p$, while step 2.2 gives $u_p(z)\le g_\Omega(z,p)$ for every $z\in\Omega\setminus\{p\}$; hence $u_p=g_\Omega(\cdot,p)$, that is $\lim_jg_{D_j}(z,p)=g_\Omega(z,p)$ for every $z\in\Omega\setminus\{p\}$. [F1, step 2.2, step 4.2]

6.1 Symmetry. Step 5.1 gives $g_{D_j}(x,y)=g_{D_j}(y,x)$ for every $j$. Taking $j\to\infty$ and applying step 5.2 with $p=y$ on the left and with $p=x$ on the right yields $g_\Omega(x,y)=g_\Omega(y,x)$, which is clause 2 for the given pair; as $x,y$ were arbitrary distinct points of $\Omega$, symmetry holds throughout. [step 5.1, step 5.2]

7.1 Choice accounting and scope. Countable Choice is used exactly through the bounded-domain existence theorem [F2], applied to each $D_j$ in step 3.1, and through the PDE Green symmetry theorem [F5] in step 5.1; the exhaustion [F3], the monotone bound of step 2.2, the Harnack limit of step 3.2, the removable-singularity step 4.2 and the comparison steps 1.1-1.2 and 5.2 use no choice principle. Steps 1.1-1.2, 6.1 establish the three clauses: 1.1 the uniqueness, 1.2 the domain monotonicity for arbitrary Greenian pairs, and 6.1 the symmetry for the Greenian $\Omega$ fixed in step 1.3. [F2, F5, F11, step 1.1, step 1.2, step 2.2, step 3.1, step 3.2, step 4.2, step 5.1, step 5.2, step 6.1] ∎
