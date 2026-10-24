---
id: lem-characters-of-l1-of-an-abelian-lch-group
kind: lemma
title: Characters of the L1 algebra of an abelian group
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
local_addition: true
proof_strategy: direct
deps:
  - thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra
  - lem-haar-translations-are-strongly-continuous-on-lp-one-and-two
  - thm-characters-on-a-unital-banach-algebra-are-continuous
  - def-pontryagin-dual-and-compact-open-topology
  - def-character-and-maximal-ideal-space
  - thm-bochner-integrability-criterion
  - thm-bounded-linear-maps-commute-with-bochner-integration
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-axiom-of-choice
  - lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set
  - lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
  - def-convolution-on-cc-and-l1-of-a-group
  - lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
  - lem-compactly-supported-kernels-admit-commuting-radon-integrals
  - lem-bochner-integral-norm-inequality
  - def-strongly-measurable-banach-valued-function
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Lynn H. Loomis, An Introduction to Abstract Harmonic Analysis, §34A–34C, printed pp. 134–137"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
---

## Statement

Assume AC. For a second-countable LCH abelian group $N$ with Haar measure,
every nonzero complex-linear multiplicative functional $\lambda$ on $L^1(N)$
is uniquely $\lambda(f)=\int_N f(n)\chi(n)\,dn$ for a continuous unitary
character $\chi$. This bijection from $\widehat N$ with its compact-open
topology to the character space with its pointwise-evaluation topology is a
homeomorphism. No Pontryagin duality or Fourier inversion theorem is assumed.

## Facts & Assumptions

**Given:** AC, a second-countable LCH abelian group $N$ with a fixed left Haar measure $\mu$, and a nonzero complex-linear multiplicative functional $\lambda:L^1(N)\to\mathbb C$.

[F1] $L^1(N)$ is a complex Banach $\ast$-algebra whose convolution is bilinear, associative and contractive, $\|f\ast g\|_1\le\|f\|_1\|g\|_1$, and agrees with the $C_c$ convolution $u\ast v(x)=\int_Nu(y)v(y^{-1}x)\,dy$ whenever both arguments lie in $C_c(N)$ ([[thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra]], [[def-convolution-on-cc-and-l1-of-a-group]]).

[F2] $L^1(N)$ is complete and $C_c(N)$ is dense in it ([[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]]).

[F3] For $n\in N$ the translation operator $L_nf(x)=f(n^{-1}x)$ is linear and isometric on $L^1(N)$, $L_nL_m=L_{nm}$, and $n\mapsto L_nf$ is continuous in the norm of $L^1(N)$ for every $f$ ([[lem-haar-translations-are-strongly-continuous-on-lp-one-and-two]]).

[F4] A character of a nonzero unital complex Banach algebra is unital and satisfies $|\chi(a)|\le\|a\|$ ([[thm-characters-on-a-unital-banach-algebra-are-continuous]]).

[F5] A strongly measurable Banach-valued function with $\int\|g\|\,d\mu<\infty$ is Bochner integrable, and its integral obeys $\|\int g\|\le\int\|g\|$; a bounded linear $T$ commutes with the Bochner integral, $T(\int g)=\int Tg$ ([[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]], [[thm-bounded-linear-maps-commute-with-bochner-integration]], [[def-strongly-measurable-banach-valued-function]]).

[F6] For $\sigma$-finite measure spaces $(X,\mu),(Y,\nu)$ and $h\in L^1(\mu\times\nu)$ the two iterated integrals agree with the product integral; the compactly supported instances used below satisfy the $\sigma$-finiteness hypothesis because on a compact subset of $N\times N$ the restricted Haar measures are finite ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[lem-compactly-supported-kernels-admit-commuting-radon-integrals]]).

[F7] Haar measure is positive on nonempty open sets and finite on compact sets, and compact sets admit nonnegative compactly supported cutoffs equal to one on them ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]]).

[F8] $\widehat N$ is the group of continuous homomorphisms $\chi:N\to\mathbb T$ with the compact-open topology, and the character space of $L^1(N)$ carries the topology of pointwise evaluation ([[def-pontryagin-dual-and-compact-open-topology]], [[def-character-and-maximal-ideal-space]]).

[F9] AC is the standing hypothesis ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a second-countable LCH abelian group $N$ with left Haar measure, and a nonzero complex-linear multiplicative $\lambda$ on $L^1(N)$.

1.1 Put $\widetilde A=\mathbb C\oplus L^1(N)$ with $(z,f)(w,g)=(zw,\,zg+wf+f\ast g)$ and $\|(z,f)\|=|z|+\|f\|_1$. The product is bilinear and associative, $\|(z,f)(w,g)\|\le(|z|+\|f\|_1)(|w|+\|g\|_1)$, and $\widetilde A$ is complete, so it is a nonzero unital complex Banach algebra with unit $(1,0)$; the map $\widetilde\lambda(z,f)=z+\lambda(f)$ is complex-linear, multiplicative because $\lambda$ is multiplicative, and $\widetilde\lambda(1,0)=1$, so it is a character. By [F4], $|\lambda(f)|=|\widetilde\lambda(0,f)|\le\|(0,f)\|=\|f\|_1$ for every $f$. [F1, F4, F9, algebra]

1.2 Since $\lambda\ne0$ there is $k\in L^1(N)$ with $\lambda(k)\ne0$; fix such a $k$ and set $\chi(n)=\lambda(L_nk)/\lambda(k)$ for $n\in N$. [F3, choose]

1.3 For all $f,k\in L^1(N)$ and all $n\in N$ one has $(L_nf)\ast k=f\ast(L_nk)$: for $f,k\in C_c(N)$ both sides are continuous functions computed by the pointwise convolution formula, and substituting $y=nz$ in $\int_N f(n^{-1}y)k(y^{-1}x)\,dy$ uses left invariance of $dy$ to give $\int_N f(z)k(z^{-1}n^{-1}x)\,dz=(f\ast L_nk)(x)$; both sides are bounded bilinear in $(f,k)$ by [F1] and [F3], and $C_c(N)\times C_c(N)$ is dense in $L^1(N)\times L^1(N)$ by [F2], so the identity extends to all $f,k\in L^1(N)$. [F1, F2, F3, algebra]

1.4 For all $f,k\in L^1(N)$, $f\ast k=\int_Nf(n)\,L_nk\,dn$ as a Bochner integral. Approximate $f$ in $L^1$ by $u_m\in C_c(N)$ and pass to a subsequence with $u_m\to f$ a.e.; each $n\mapsto u_m(n)L_nk$ is continuous and compactly supported hence strongly measurable, and a diagonal selection of their defining simple approximants shows that the a.e. limit $n\mapsto f(n)L_nk$ is strongly measurable; since $\int_N\|f(n)L_nk\|_1dn=\|f\|_1\|k\|_1<\infty$, it is Bochner integrable by [F5]. The assignment $f\mapsto\int_Nf(n)L_nk\,dn$ is bounded linear, and for $f,k\in C_c(N)$ pairing with any $\varphi\in L^\infty(N)$ and commuting the bounded functional through the Bochner integral reduces the identity to $\int_N\int_Nf(n)k(n^{-1}x)\varphi(x)\,dx\,dn=\int_N(f\ast k)(x)\varphi(x)\,dx$, which follows from [F6] because the kernel is compactly supported; the pairing with all of $L^\infty(N)$ separates points of $L^1(N)$, and both sides are bounded linear in $f$ with $C_c(N)$ dense by [F2], so the identity holds for all $f\in L^1(N)$; repeating the same density argument in the second variable gives it for all $k$ as well. [F1, F2, F5, F6, algebra]

1.5 Conversely, for a continuous character $\chi$ define $\lambda_\chi(f)=\int_Nf\chi\,dn$. Then $\lambda_\chi$ is complex-linear with $|\lambda_\chi(f)|\le\|f\|_1$, and it is multiplicative: for $f,g\in C_c(N)$ the double integral $\int_N\int_Nf(y)g(y^{-1}x)\chi(x)\,dy\,dx$ equals by [F6] the iterated integral $\int_Nf(y)\int_Ng(z)\chi(yz)\,dz\,dy=\lambda_\chi(f)\lambda_\chi(g)$ after the substitution $z=y^{-1}x$ and using $\chi(yz)=\chi(y)\chi(z)$; both $\lambda_\chi(f\ast g)$ and $\lambda_\chi(f)\lambda_\chi(g)$ are bounded bilinear in $(f,g)$, so density of $C_c(N)$ ([F2]) extends multiplicativity to all $f,g\in L^1(N)$. And $\lambda_\chi\ne0$: by continuity of $\chi$ at $e$ there is a nonempty open set $U$ with $\operatorname{Re}\chi>1/2$ on $U$, and by [F7] there is $c\in C_c(N)$ with $c\ge0$, $c\ne0$, supported in $U$; then $\operatorname{Re}\lambda_\chi(c)=\int_Nc\,\operatorname{Re}\chi\,dn>0$, so $\lambda_\chi(c)\ne0$. [F1, F2, F6, F7, algebra]

2.1 Multiplicativity of $\lambda$ applied to [step 1.3] with this $k$ gives $\lambda(L_nf)\lambda(k)=\lambda(f)\lambda(L_nk)$, hence $\lambda(L_nf)=\chi(n)\lambda(f)$ for every $f\in L^1(N)$ and every $n\in N$. [step 1.2, step 1.3]

2.2 If $\chi_i\to\chi$ in the compact-open topology, then $\lambda_{\chi_i}(f)\to\lambda_\chi(f)$ for every $f\in L^1(N)$: given $\varepsilon>0$ choose $u\in C_c(N)$ with $\|f-u\|_1<\varepsilon/4$ ([F2]); then $|\lambda_{\chi_i}(f)-\lambda_\chi(f)|\le2\|f-u\|_1+\|u\|_\infty\int_{\operatorname{supp}u}|\chi_i-\chi|\,dn$, and $\chi_i\to\chi$ uniformly on the compact set $\operatorname{supp}u$ directly from the compact-open subbasis, while the Haar measure of $\operatorname{supp}u$ is finite by [F7]. Thus the map $\chi\mapsto\lambda_\chi$ is continuous for the two stated topologies. [F2, F7, F8, step 1.5]

3.1 $\chi$ is multiplicative: since $L_nL_m=L_{nm}$ and $\lambda(k)\ne0$, applying [step 2.1] to $L_mk$ gives $\chi(nm)\lambda(k)=\lambda(L_nL_mk)=\chi(n)\lambda(L_mk)=\chi(n)\chi(m)\lambda(k)$, so $\chi(nm)=\chi(n)\chi(m)$; in particular $\chi(e)=1$ and $\chi(n^{-1})=\chi(n)^{-1}$. [step 1.2, step 2.1, F3]

3.2 $\chi$ is continuous: for $n\to n_0$ in $N$ one has $|\chi(n)-\chi(n_0)|=|\lambda(L_nk-L_{n_0}k)|/|\lambda(k)|\le\|L_nk-L_{n_0}k\|_1/|\lambda(k)|\to0$ by [step 1.1] and [F3]. [step 1.1, step 2.1, F3]

3.3 Apply the bounded functional $\lambda$ to [step 1.4] and commute it through the Bochner integral: $\lambda(f)\lambda(k)=\lambda(f\ast k)=\int_Nf(n)\lambda(L_nk)\,dn=\lambda(k)\int_Nf(n)\chi(n)\,dn$ by [step 2.1]; since $\lambda(k)\ne0$, dividing gives the classification formula $\lambda(f)=\int_Nf(n)\chi(n)\,dn$ for every $f\in L^1(N)$. [step 1.1, step 2.1, step 1.4, F5]

3.4 Conversely, suppose $\lambda_i\to\lambda$ in the pointwise-evaluation topology of the character space. Fix the $k$ of [step 1.2] and a compact $C\subseteq N$. The set $\{L_nk:n\in C\}$ is norm compact in $L^1(N)$ as the continuous image of $C$ under [F3], so for each $\varepsilon>0$ it has a finite $\varepsilon/3$-net $L_{n_1}k,\dots,L_{n_r}k$. For all sufficiently large $i$ one has $|\lambda_i(L_{n_j}k)-\lambda(L_{n_j}k)|<\varepsilon/3$ for every $j$ and $|\lambda_i(k)-\lambda(k)|<\min\{\varepsilon,|\lambda(k)|/2\}$, using [step 1.1] for the bounds $\|\lambda_i\|\le1$ and $\|\lambda\|\le1$; then for every $n\in C$ and the corresponding $j$ one gets $|\lambda_i(L_nk)-\lambda(L_nk)|<\varepsilon$, and division by the eventually nonvanishing $\lambda_i(k)$ gives $|\chi_i(n)-\chi(n)|\le M\varepsilon$ uniformly on $C$ for a constant $M$ depending only on $\lambda(k)$ and $\|k\|_1$. Hence $\lambda_i\to\lambda$ pointwise implies $\chi_i\to\chi$ uniformly on compacta, that is, the inverse map is continuous. [step 1.1, step 1.2, step 2.1, F3, F8, algebra]

4.1 $|\chi(n)|=1$ for every $n$: [step 1.1] gives $|\chi(n)|\le\|k\|_1/|\lambda(k)|$, and applying [step 3.1] to the powers $n^j$ gives $|\chi(n)|^j\le\|k\|_1/|\lambda(k)|$ for all $j\ge1$, whence $|\chi(n)|\le1$; replacing $n$ by $n^{-1}$ and using $\chi(n^{-1})=\chi(n)^{-1}$ gives $|\chi(n)|\ge1$ as well. Thus $\chi:N\to\mathbb T$ is a continuous character. [step 3.1, step 3.2, algebra]

5.1 If $\lambda_{\chi_1}=\lambda_{\chi_2}=\lambda$, choose $k$ with $\lambda(k)\ne0$. Substitution $x=ny$ in the defining integral gives $\lambda_{\chi_i}(L_nk)=\chi_i(n)\lambda_{\chi_i}(k)$ for $i=1,2$. Hence $\chi_i(n)=\lambda(L_nk)/\lambda(k)$ for every $n$, so $\chi_1=\chi_2$. Together with step 3.3 this proves the bijection. [step 1.5, step 3.3, step 4.1, algebra]

6.1 Steps [2.2] and [3.4] show that $\chi\mapsto\lambda_\chi$ is a homeomorphism from $\widehat N$ with the compact-open topology onto the character space with the pointwise-evaluation topology, and [step 3.3] with [step 5.1] shows every nonzero complex-linear multiplicative functional is uniquely of the form $\lambda_\chi$. [step 3.3, step 5.1, step 2.2, step 3.4] ∎

## Remarks

The proof uses no Pontryagin duality and no Fourier inversion: the characters are produced from $\lambda$ itself through the translation identity, and the only harmonic-analytic inputs are translation continuity, Haar positivity and the Bochner/Fubini calculus.
