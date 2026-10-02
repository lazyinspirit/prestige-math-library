---
id: lem-logarithmic-energy-strict-positivity-for-zero-mass-charges
kind: lemma
title: "Strict positivity of logarithmic energy for a zero-mass signed charge"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-logarithmic-potential-and-energy
  - def-support-of-a-borel-measure
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-monotone-convergence-for-the-integral
  - thm-dominated-convergence
  - thm-differentiation-under-the-integral-sign
  - thm-real-stone-weierstrass-for-compact-metric-spaces
  - cor-second-countable-lch-locally-finite-borel-measures-are-regular
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Frerick, Müller, Thomaser, A Fourier integral formula for logarithmic energy"
      url: "https://arxiv.org/pdf/2209.05439"
      locator: "Theorem 1.1 and Remark 3.3; the Frullani–Gaussian representation of the logarithmic kernel"
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §1"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, positivity of the energy form on zero-mass charges, printed pp. 168–170"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Countable Choice. Let $\mu,\nu$ be finite positive Borel
measures on $\mathbb C$ with compact support, equal total mass
$\mu(\mathbb C)=\nu(\mathbb C)=M$, and finite logarithmic energy
$I(\mu)<\infty$, $I(\nu)<\infty$ in the normalization of
[[def-logarithmic-potential-and-energy]]. Then:

1. the mixed energy $I(\mu,\nu)$ is finite, and
   $I(\sigma):=I(\mu)-2I(\mu,\nu)+I(\nu)$ is a well-defined real number for
   $\sigma:=\mu-\nu$;
2. $I(\sigma)\ge0$, and $I(\sigma)=\tfrac12\int_0^\infty Q_t(\sigma)\,\frac{dt}{t}$
   where $Q_t(\sigma):=\iint e^{-t|z-w|^2}\,d\sigma(z)\,d\sigma(w)$ for $t>0$;
3. $I(\sigma)=0$ if and only if $\sigma=0$.

The case $M=0$ is included and settled separately: then $\mu=\nu=0$, hence
$I(\mu)=I(\nu)=I(\mu,\nu)=0$ by the zero clauses of
[[def-logarithmic-potential-and-energy]], so $\sigma=0$, the number
$I(\sigma)=0$ is well defined and the representation of (2) holds because
$Q_t(0)=0$ for every $t>0$; assertion (3) is then a tautology. The proof below
therefore assumes $M>0$.

Countable Choice enters at exactly one point, step 6.1, through the regularity of
finite Borel measures on the second-countable space $\mathbb C$; the pointwise,
Gaussian and convergence steps are choice-free.

## Facts & Assumptions

**Given:** finite positive compactly supported Borel measures $\mu,\nu$ on
$\mathbb C$ with $\mu(\mathbb C)=\nu(\mathbb C)=M$ and $I(\mu),I(\nu)<\infty$
(the case $M=0$ is settled in the Statement, so $M>0$ below);
$\sigma=\mu-\nu$; the compact set
$K:=\operatorname{supp}\mu\cup\operatorname{supp}\nu$, which is nonempty for
$M>0$ and carries $\sigma$; the notation $k(z,w)=\log(1/|z-w|)$ and $I(\mu)$,
$I(\mu,\nu)$ of [[def-logarithmic-potential-and-energy]]; and the Axiom of
Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] For $R>\operatorname{diam}(\operatorname{supp}\mu\cup\operatorname{supp}\nu)$
the shifted kernel $k_R(z,w)=\log(R/|z-w|)$ is nonnegative on the product of the
supports, $I(\mu)=\iint k_R\,d\mu\,d\mu-M^2\log R$ and
$I(\mu,\nu)=\iint k_R\,d\mu\,d\nu-M^2\log R$; these values do not depend on the
admissible $R$ ([[def-logarithmic-potential-and-energy]]).

[F2] For $\sigma$-finite measure spaces and a product-measurable nonnegative
integrand, the iterated integrals and the product integral agree
([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F3] For a product-integrable integrand the iterated integrals agree with the
product integral ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F4] For a nondecreasing sequence of measurable functions with nonnegative
values, the integrals converge to the integral of the limit
([[thm-monotone-convergence-for-the-integral]]).

[F5] $\mathrm{AC}_\omega$: every countable family of nonempty sets has a choice
function ([[def-countable-choice]]).

[F6] Assume $\mathrm{AC}_\omega$: every Borel measure on a second-countable
locally compact Hausdorff space that is finite on compact sets is regular, so
for every Borel $B$, $\rho(B)=\inf\{\rho(U):U\supseteq B\text{ open}\}$
([[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]).

[F7] A unital subalgebra of the real continuous functions on a nonempty compact
metric space separating points is dense in the supremum norm
([[thm-real-stone-weierstrass-for-compact-metric-spaces]]).

[F8] Differentiation under the integral sign for a parameter integral with an
integrable dominating function of the derivative
([[thm-differentiation-under-the-integral-sign]]).

[F9] Dominated convergence ([[thm-dominated-convergence]]).

[F10] The support $\operatorname{supp}\rho$ of a finite positive Borel measure
$\rho$ on $\mathbb C$ carries $\rho$ and is the smallest closed carrier; a
nonzero such measure has nonempty support, and if $\rho$ is carried by a
compact set then its support is compact
([[def-support-of-a-borel-measure]]).

## Proof

**Proof technique:** direct.

1.1 Fix $R$ with $R>\operatorname{diam}(\operatorname{supp}\mu\cup\operatorname{supp}\nu)$, write $r=|z-w|$, and let $0<\varepsilon<1$. For $0<a<b$ the identity $\int_0^\infty (e^{-at}-e^{-bt})\,dt/t=\log(b/a)$ follows from Tonelli applied to the nonnegative integrand $\int_a^b e^{-st}\,ds$ and $\int_0^\infty e^{-st}\,dt=1/s$; taking $a=r^2$, $b=R^2$ gives $\log(R/r)=\tfrac12\int_0^\infty(e^{-tr^2}-e^{-tR^2})\,dt/t$ when $r>0$, while at $r=0$ the integral is $+\infty$; the truncation $K_\varepsilon(z,w):=\tfrac12\int_\varepsilon^{1/\varepsilon}(e^{-t|z-w|^2}-e^{-tR^2})\,dt/t$ is continuous on $\mathbb C\times\mathbb C$, satisfies $0\le K_\varepsilon\le k_R$ pointwise on $\{|z-w|\le R\}$, and increases to $k_R$ as $\varepsilon\downarrow0$. [F2, given, algebra]

1.2 Let $t>0$ and let $\rho,\rho'$ be finite signed Borel measures of compact support on $\mathbb C$. Put $c_t:=\int_{\mathbb C}e^{-4t|u|^2}\,dA(u)$, which satisfies $0<c_t<\infty$ since $\pi e^{-4t}\le c_t$ and $c_t\le\pi+2\pi\int_1^\infty e^{-4tr}r\,dr<\infty$; $T_t\rho(z):=\int e^{-2t|x-z|^2}\,d\rho(x)$ is a bounded continuous function of $z$ by [F9], and Fubini–Tonelli applied to the triple integral of the nonnegative integrand $|e^{-2t|x-z|^2}e^{-2t|y-z|^2}|$, together with the substitution $z=\tfrac{x+y}{2}+u$ and $|x-z|^2+|y-z|^2=\tfrac12|x-y|^2+2|u|^2$, gives $\iint e^{-t|x-y|^2}\,d\rho(x)\,d\rho'(y)=c_t^{-1}\int_{\mathbb C}T_t\rho(z)\,\overline{T_t\rho'(z)}\,dA(z)$. [F2, F3, F9, algebra]

2.1 In the situation of step 1.1, expanding $\sigma\otimes\sigma=\mu\otimes\mu-\mu\otimes\nu-\nu\otimes\mu+\nu\otimes\nu$ and applying Fubini to each finite positive measure with the bounded integrand $K_\varepsilon$ gives $\iint K_\varepsilon\,d\sigma\,d\sigma=\tfrac12\int_\varepsilon^{1/\varepsilon}\iint(e^{-t|z-w|^2}-e^{-tR^2})\,d\sigma(z)\,d\sigma(w)\,dt/t$; since $\sigma(\mathbb C)=0$ the second exponential contributes $e^{-tR^2}\sigma(\mathbb C)^2=0$, so by step 1.2 the inner integral is $c_t^{-1}\int|T_t\sigma|^2\,dA\ge0$ for every $t>0$, and hence $E_\varepsilon:=\iint K_\varepsilon\,d\sigma\,d\sigma\ge0$ for every $\varepsilon\in(0,1)$. [step 1.1, step 1.2, F2, F3, given]

3.1 Put $A_\varepsilon:=\iint K_\varepsilon\,d\mu\,d\mu$, $B_\varepsilon:=\iint K_\varepsilon\,d\mu\,d\nu$, $C_\varepsilon:=\iint K_\varepsilon\,d\nu\,d\nu$, so that $E_\varepsilon=A_\varepsilon-2B_\varepsilon+C_\varepsilon$ by step 2.1. Since $0\le K_\varepsilon\uparrow k_R$ pointwise by step 1.1, [F4] gives the monotone limits $A_\varepsilon\uparrow A:=\iint k_R\,d\mu\,d\mu=I(\mu)+M^2\log R<\infty$, $C_\varepsilon\uparrow C:=I(\nu)+M^2\log R<\infty$ and $B_\varepsilon\uparrow B:=\iint k_R\,d\mu\,d\nu\in[0,\infty]$, using [F1]. From $0\le E_\varepsilon=A_\varepsilon-2B_\varepsilon+C_\varepsilon\le A+C-2B_\varepsilon$ we get $2B_\varepsilon\le A+C$ for every $\varepsilon$, so $B\le(A+C)/2<\infty$: the mixed energy $I(\mu,\nu)=B-M^2\log R$ is finite, and $I(\sigma):=I(\mu)-2I(\mu,\nu)+I(\nu)=A-2B+C=\lim_{\varepsilon\downarrow0}E_\varepsilon$ is a well-defined real number with $I(\sigma)\ge0$. [step 1.1, step 2.1, F1, F4]

4.1 Combining the integral representation of $E_\varepsilon$ in step 2.1 with the convergence $E_\varepsilon\to I(\sigma)$ of step 3.1 shows $\tfrac12\int_\varepsilon^{1/\varepsilon}Q_t(\sigma)\,dt/t\uparrow I(\sigma)$ as $\varepsilon\downarrow0$, where $Q_t(\sigma)=\iint e^{-t|z-w|^2}\,d\sigma\,d\sigma=c_t^{-1}\int|T_t\sigma|^2\,dA\ge0$ for every $t>0$ by step 1.2; since $t\mapsto Q_t(\sigma)$ is measurable and nonnegative, [F4] gives $\tfrac12\int_0^\infty Q_t(\sigma)\,dt/t=I(\sigma)$. [step 1.2, step 2.1, step 3.1, F4]

5.1 Suppose $I(\sigma)=0$. Then $\int_0^\infty Q_t(\sigma)\,dt/t=0$ by step 4.1, so $Q_t(\sigma)=0$ for almost every $t>0$ and in particular there is $t_0\in[1,2]$ with $Q_{t_0}(\sigma)=0$; by step 1.2 this means $\int|T_{t_0}\sigma|^2\,dA=0$, so $T_{t_0}\sigma=0$ almost everywhere, and since $z\mapsto T_{t_0}\sigma(z)$ is continuous by [F9] one has $T_{t_0}\sigma\equiv0$ on $\mathbb C$. The functions $z\mapsto\int e^{-2t_0|x-z|^2}\,d\sigma(x)$ and their complex derivatives $\partial_z^j\partial_{\bar z}^k$ are continuous on $\{|z|\le1\}$ by [F8] applied iteratively, with dominating functions bounded on $|z|\le1$ by a constant times a power of $\operatorname{diam}K+1$, which is integrable against the finite signed measure $\sigma$ carried by the compact set $K$; since $T_{t_0}\sigma\equiv0$, all these derivatives vanish at $z=0$. Expanding $e^{-2t_0|x-z|^2}=e^{-2t_0|x|^2}e^{2t_0\bar{x}z+2t_0x\bar z-2t_0z\bar z}$ shows that the $(j,k)$ derivative at zero is $e^{-2t_0|x|^2}$ times $(2t_0)^{j+k}\bar{x}^{\,j}x^k$ plus a linear combination of terms $\bar{x}^{\,j-r}x^{k-r}$ with $1\le r\le\min(j,k)$. Induction on $j+k$ therefore gives $\int\bar{x}^{\,j}x^k e^{-2t_0|x|^2}\,d\sigma(x)=0$ for all $j,k\ge0$. The monomials $\bar x^jx^k$ span the polynomials in the real variables $\operatorname{Re}x,\operatorname{Im}x$ (equivalently, the polynomials in $x$ and $\bar x$), so $\int P(x)e^{-2t_0|x|^2}\,d\sigma(x)=0$ for every such polynomial $P$. [step 1.2, step 4.1, F8, F9, F10, given]

6.1 Assume $I(\sigma)=0$ and, seeking a contradiction, $\sigma\ne0$; by [F10] and $M>0$ the set $K$ is a nonempty compact subset of $\mathbb C$, and $\sigma$ is carried by $K$ because $\mu(\mathbb C\setminus K)=\nu(\mathbb C\setminus K)=0$ by [F10]. For every $g\in C(K,\mathbb R)$ the function $g(x)e^{2t_0|x|^2}$ is continuous on $K$, so by [F7] applied to the polynomials in the real variables $\operatorname{Re}x,\operatorname{Im}x$ — a unital subalgebra of $C(K,\mathbb R)$ separating points of $K$ — there are such polynomials $P_n$ with $P_n\to ge^{2t_0|{\cdot}|^2}$ uniformly on $K$; since $|e^{-2t_0|x|^2}|\le1$ on $K$, the integrals of bounded Borel functions against the finite signed measure $\sigma$ are bounded by $\mu(K)+\nu(K)<\infty$ in absolute value, and $\sigma$ is carried by $K$, step 5.1 gives $\int_K g\,d\sigma=\lim_n\int_K P_n(x)e^{-2t_0|x|^2}\,d\sigma(x)=0$. For a proper open $U\subsetneq\mathbb C$, the functions $\psi_j(x):=\min(1,j\,d(x,\mathbb C\setminus U))$ are continuous with $0\le\psi_j\uparrow\mathbf 1_U$; hence $\int\psi_j\,d\mu=\int\psi_j\,d\nu$, and [F4] gives $\mu(U)=\nu(U)$. Equality also holds for $U=\mathbb C$ because both measures have mass $M$. By [F6] the finite Borel measures $\mu,\nu$ are outer regular, so for every Borel $B$ one has $\mu(B)=\inf_{U\supseteq B}\mu(U)=\inf_{U\supseteq B}\nu(U)=\nu(B)$, that is, $\sigma=0$, contradicting $\sigma\ne0$. Hence $I(\sigma)=0$ forces $\sigma=0$. [step 5.1, F4, F5, F6, F7, F10, given]

7.1 Conversely $\sigma=0$ means $\mu=\nu$, hence $I(\mu,\nu)=I(\mu)$ and $I(\sigma)=I(\mu)-2I(\mu)+I(\mu)=0$ by the definition in step 3.1; combined with step 6.1 this proves the equivalence (3), while the finiteness of $I(\mu,\nu)$ and the well-definedness of $I(\sigma)$ with $I(\sigma)\ge0$ were proved in step 3.1 and the representation of $I(\sigma)$ in step 4.1. [step 3.1, step 4.1, step 6.1, F1] ∎
