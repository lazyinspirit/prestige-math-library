---
id: thm-harnack-convergence-positive-harmonic-functions
kind: theorem
title: "Positive harmonic boundary measures and compact normalized families"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [lem-compactness-is-intrinsic, cor-c-one-change-of-variables-for-l-one-functions, cor-separable-banach-dual-ball-is-weak-star-sequentially-compact, def-axiom-of-choice, def-complex-measure, def-countable-choice, def-dependent-choice, def-harmonic-hardy-class-disc, def-integration-against-a-signed-or-complex-measure, def-l-one-of-a-measure, def-mean-value-property-for-plane-functions, def-measure, def-metric-compactness, def-nonnegative-lebesgue-integral, def-plane-harmonic-function, def-poisson-integral-of-finite-boundary-measure, def-poisson-kernel-on-the-disc, def-regular-borel-measure-on-an-lch-space, def-regular-complex-borel-measure-on-an-lch-space, def-separable-space, def-signed-measure, def-simple-integral-against-a-signed-or-complex-measure, def-the-one-dimensional-torus-and-normalized-haar-integral, def-total-variation-of-a-signed-or-complex-measure, def-weak-star-convergence, lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family, lem-finite-tori-are-compact-hausdorff-character-spaces, lem-positive-c-zero-functionals-have-finite-regular-representing-measures, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals, thm-choice-implies-dependent-implies-countable-choice, thm-countable-union-of-countable, thm-dominated-convergence, thm-harmonic-hardy-one-measure-representation, thm-heine-borel-rn, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation, thm-mean-value-property-for-plane-harmonic-functions, thm-ultrafilter-lemma]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Axler, Bourdon and Ramey, Harmonic Function Theory, second edition, Chapter 6"
      url: "https://www.axler.net/HFT.pdf"
      locator: "Corollary 6.15 and its proof, printed p. 120 (PDF p. 125): a positive harmonic function on the disc is P[mu] for a unique positive measure, the weak-star limit of its radial measures."
    - title: "Herbert Koch, Notes for Harmonic and Real Analysis (University of Bonn, 2014-15), Chapter 3"
      url: "https://www.math.uni-bonn.de/ag/ana/WiSe1415/V4B5_notes.pdf"
      locator: "Chapter 3 section 2, printed pp. 36-37: weak-star compactness of the measure ball produces a representing measure for a harmonic function with bounded L^1 norms."
---

## Statement

Assume the Axiom of Choice.

(a) If $u:\mathbb D\to\mathbb R$ is nonnegative and harmonic, then there is a
unique finite nonnegative regular Borel measure $\mu$ on $\mathbb T$ with
$u=P[\mu]$, and necessarily $\mu(\mathbb T)=u(0)$.

(b) Conversely, for every finite nonnegative regular Borel measure $\mu$ on
$\mathbb T$, the function $P[\mu]$ is nonnegative and harmonic and satisfies
$P[\mu](0)=\mu(\mathbb T)$.

(c) Every sequence $(u_n)_{n\ge1}$ of nonnegative harmonic functions on
$\mathbb D$ with $u_n(0)=1$ for all $n$ has a subsequence converging locally
uniformly on $\mathbb D$ to a nonnegative harmonic function $u$ with $u(0)=1$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a nonnegative real harmonic function $u$ on $\mathbb D$ where it occurs; a finite nonnegative regular Borel measure $\nu$ on $\mathbb T$ where it occurs; and a sequence $(u_n)$ of nonnegative harmonic functions on $\mathbb D$ with $u_n(0)=1$ where it occurs.

[L1] Under the Axiom of Choice every $u\in h^1(\mathbb D)$ has a unique finite regular complex Borel measure $\mu$ on $\mathbb T$ with $u=P[\mu]$ and $\|u\|_{h^1}=|\mu|(\mathbb T)$; conversely every finite regular complex Borel measure $\mu$ on $\mathbb T$ gives an $h^1$ function $P[\mu]$ with $\|P[\mu]\|_{h^1}=|\mu|(\mathbb T)$; and $u_rm$ converges weak-star to $\mu$ against $C(\mathbb T)$ as $r\uparrow1$ ([[thm-harmonic-hardy-one-measure-representation]]).

[L2] A complex-valued function on $\mathbb D$ is harmonic exactly when its real and imaginary parts are real harmonic; $h^1(\mathbb D)$ consists of the complex harmonic functions with $\sup_{0\le r<1}\|u_r\|_{L^1(\mathbb T,m)}<+\infty$, and $\|u\|_{h^1}$ denotes that supremum. The zero function is harmonic ([[def-harmonic-hardy-class-disc]], [[def-plane-harmonic-function]]).

[L3] A real harmonic function satisfies the circle mean-value property $u(a)=\frac{1}{2\pi}\int_0^{2\pi}u(a+re^{i\theta})\,d\theta$ for every closed disc $\overline{D(a,r)}$ contained in its domain ([[thm-mean-value-property-for-plane-harmonic-functions]], [[def-mean-value-property-for-plane-functions]]).

[L4] The normalized Haar integral on $\mathbb T=\mathbb R/\mathbb Z$ satisfies $\int_{\mathbb T}F\,dm=\int_{[0,1)}F\circ q\,d\lambda_1$; for continuous $G$ on $\mathbb T$ the change of variables $t\mapsto2\pi t$ gives $\int_{\mathbb T}G\,dm=\frac{1}{2\pi}\int_0^{2\pi}G(e^{i\theta})\,d\theta$ ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[cor-c-one-change-of-variables-for-l-one-functions]]).

[L5] For a finite regular complex Borel measure $\mu$ on $\mathbb T$ one has $P[\mu](z)=\int_{\mathbb T}P(z,\zeta)\,d\mu(\zeta)$; the kernel is $P(z,\zeta)=(1-|z|^2)/|\varphi(\zeta)-z|^2>0$ with $P(0,\zeta)=1$ and $\zeta\mapsto P(z,\zeta)$ continuous on $\mathbb T$; for $f\in L^1(\mathbb T,m)$ the density measure satisfies $P[f]=P[fm]$ and $\int_{\mathbb T}g\,d(u_rm)=\int_{\mathbb T}gu_r\,dm$ for bounded measurable $g$ ([[def-poisson-integral-of-finite-boundary-measure]], [[def-poisson-kernel-on-the-disc]]).

[L6] Assume Dependent Choice. Every bounded complex linear functional on $C(\mathbb T,\mathbb C)=C_0(\mathbb T,\mathbb C)$ is integration against a unique finite regular complex Borel measure $\mu$, and $\|\cdot\|=|\mu|(\mathbb T)$ ([[thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals]]).

[L7] Assume Dependent Choice. Every bounded positive real-linear functional $L$ on $C_0(X;\mathbb R)$ for LCH $X$ satisfies $L(f)=\int f\,d\rho$ for a unique finite regular Borel measure $\rho\ge0$ ([[lem-positive-c-zero-functionals-have-finite-regular-representing-measures]]).

[L8] The integral against a signed or complex measure is defined as the limit of simple integrals along $L^1(|\nu|)$-approximating complex simple functions and is independent of the chosen approximating sequence; a finite measure is a finite signed measure and a finite complex measure; a finite regular Borel measure $\rho\ge0$ is a finite regular complex Borel measure with $|\rho|=\rho$ ([[def-integration-against-a-signed-or-complex-measure]], [[def-simple-integral-against-a-signed-or-complex-measure]], [[def-total-variation-of-a-signed-or-complex-measure]], [[def-signed-measure]], [[def-measure]], [[def-complex-measure]], [[def-regular-borel-measure-on-an-lch-space]], [[def-regular-complex-borel-measure-on-an-lch-space]]).

[L9] On a finite measure space a bounded Borel function $h\ge0$ lies in $L^1$ with $\int|h|\,d\rho\le M\rho(X)$ where $M=\sup h$; nonnegative measurable functions admit increasing nonnegative simple approximations; integrals of integrands bounded by an $L^1$ majorant may be passed to the limit ([[def-l-one-of-a-measure]], [[def-nonnegative-lebesgue-integral]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]], [[thm-dominated-convergence]]).

[L10] For $f\in L^1(\nu)$ one has $|\int f\,d\nu|\le\int|f|\,d|\nu|\le\|f\|_\infty|\nu|(X)$ ([[thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]]).

[L11] The Axiom of Choice implies Dependent Choice, which implies countable choice ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-axiom-of-choice]], [[def-dependent-choice]], [[def-countable-choice]]).

[L12] $\mathbb T$ is compact Hausdorff and $\varphi:\mathbb T\to S^1$, $\varphi([t])=(\cos2\pi t,\sin2\pi t)$, is a homeomorphism onto the Euclidean unit circle $S^1$, a closed and bounded hence compact subset of $\mathbb R^2$ ([[lem-finite-tori-are-compact-hausdorff-character-spaces]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[thm-heine-borel-rn]]).

[L13] Assume countable choice. Every nonempty compact metric space $K$ admits a sequence in $C(K,\mathbb R)$ dense for the supremum norm; $\mathbb N\times\mathbb N$ is at most countable; a space is separable when it has an at most countable dense subset ([[lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family]], [[thm-countable-union-of-countable]], [[def-separable-space]]).

[L14] Under the ultrafilter lemma every sequence in the dual unit ball of a separable real or complex normed space has a weak-star convergent subsequence whose limit is an element of the dual; weak-star convergence is evaluation convergence on every element of the predual ([[cor-separable-banach-dual-ball-is-weak-star-sequentially-compact]], [[thm-ultrafilter-lemma]], [[def-weak-star-convergence]]).

[L15] A compact metric subspace admits a finite subcover from every family of ambient open sets covering it; this includes families indexed by points or natural numbers ([[def-metric-compactness]], [[lem-compactness-is-intrinsic]]).

## Proof

**Proof technique:** direct.

1.1 Nonnegative integrands have nonnegative integrals against finite nonnegative measures. Let $\rho$ be a finite measure on $\mathbb T$ and let $h:\mathbb T\to\mathbb R$ be bounded Borel with $h\ge0$, $M:=\sup_{\mathbb T}h<\infty$. Because $\rho$ is countably additive with values in $[0,\infty)$ it is a finite signed measure, and for every countable Borel partition of a Borel set $E$ one has $\sum_j|\rho(E_j)|=\sum_j\rho(E_j)=\rho(E)$, so $|\rho|(E)=\rho(E)$ and $h\in L^1(\rho)=L^1(|\rho|)$ since $\int_{\mathbb T}|h|\,d\rho\le M\rho(\mathbb T)<\infty$. Let $s_n$ be increasing nonnegative simple functions with $s_n\uparrow h$ and $0\le s_n\le h$. Then $|h-s_n|\le M$ with the constant $M$ integrable for the finite measure $\rho$, so $\int_{\mathbb T}|h-s_n|\,d\rho\to0$, and $(s_n)$ is an admissible approximating sequence in the definition of $\int_{\mathbb T}h\,d\rho$; hence $\int_{\mathbb T}h\,d\rho=\lim_n\int_{\mathbb T}s_n\,d\rho$. Writing $s_n=\sum_jc_j\mathbf1_{E_j}$ in canonical form, all $c_j>0$ and all $\rho(E_j)\ge0$, so $\int_{\mathbb T}s_n\,d\rho=\sum_jc_j\rho(E_j)\ge0$ for every $n$ and therefore $\int_{\mathbb T}h\,d\rho\ge0$. [given, L8, L9, algebra]

1.2 The nonnegative harmonic $u$ lies in $h^1(\mathbb D)$ with $\|u\|_{h^1}=u(0)$. For $0\le r<1$ the function $u_r(\zeta)=u(r\zeta)$ is continuous on $\mathbb T$ and $u_r\ge0$. If $r=0$ then $\int_{\mathbb T}u_0\,dm=u(0)$. If $r>0$, then $\int_{\mathbb T}u_r\,dm=\frac{1}{2\pi}\int_0^{2\pi}u(re^{i\theta})\,d\theta=u(0)$, the first equality by the torus identification combined with the change of variables $t\mapsto2\pi t$ and the second by the circle mean-value property applied to the harmonic $u$ on the disc $\overline{D(0,r)}\subseteq\mathbb D$. Hence $\|u_r\|_{L^1(\mathbb T,m)}=\int_{\mathbb T}|u_r|\,dm=\int_{\mathbb T}u_r\,dm=u(0)$ for every radius, so $\sup_{0\le r<1}\|u_r\|_1=u(0)<\infty$: $u$ is complex harmonic, its imaginary part being the harmonic zero function, and therefore $u\in h^1(\mathbb D)$ with $\|u\|_{h^1}=u(0)$. [given, L2, L3, L4]

1.3 Kernel Lipschitz bound on compacta. Let $K\subseteq\mathbb D$ be compact. For $K=\varnothing$ the estimate is vacuous; assume $K\ne\varnothing$. The open discs $U_n=\{z\in\mathbb C:|z|<1-1/n\}$, $n\ge2$, cover $\mathbb D$ and hence $K$, so [L15] gives $N\ge2$ with $K\subseteq U_N$; thus $|\varphi(\zeta)-z|\ge1-|z|>1/N$ for all $z\in K$ and $\zeta\in\mathbb T$. Fix $z,z'\in K$ and $w:=\varphi(\zeta)$ for $\zeta\in\mathbb T$, and set $a:=|w-z|^2$, $b:=|w-z'|^2$. Then $P(z,\zeta)-P(z',\zeta)=\bigl[(1-|z|^2)b-(1-|z'|^2)a\bigr]/(ab)$ and the numerator equals $(1-|z|^2)(b-a)+(|z'|^2-|z|^2)a$, where $|b-a|\le4|z-z'|$ and $|(|z'|^2-|z|^2)a|\le2|z-z'|\cdot4$; hence the numerator has modulus at most $12|z-z'|$ while $ab\ge N^{-4}$. Therefore $|P(z,\zeta)-P(z',\zeta)|\le12N^4|z-z'|$ for every $\zeta\in\mathbb T$. [given, L5, L15, algebra]

1.4 $C(\mathbb T,\mathbb C)$ is separable. By [L12] the torus $\mathbb T$ is homeomorphic to the compact metric space $S^1$, hence is itself a compact metric space; by [L13], and countable choice is available by [L11], there is a sequence $(f_j)$ in $C(\mathbb T,\mathbb R)$ dense for the supremum norm. The family $\{f_j+if_k:j,k\ge1\}$ is at most countable by [L13] and is dense in $C(\mathbb T,\mathbb C)$: for $g=v+iw$ and $\varepsilon>0$ choose $j,k$ with $\|v-f_j\|_\infty<\varepsilon/2$ and $\|w-f_k\|_\infty<\varepsilon/2$, so that $\|g-(f_j+if_k)\|_\infty<\varepsilon$. Hence $C(\mathbb T,\mathbb C)$ has an at most countable dense subset, that is, it is separable. [given, L11, L12, L13]

2.1 Representation of $u$. By [L1] applied to $u\in h^1(\mathbb D)$ there is a unique finite regular complex Borel measure $\mu$ on $\mathbb T$ with $u=P[\mu]$, $|\mu|(\mathbb T)=\|u\|_{h^1}=u(0)$, and $u_rm\overset{*}{\rightharpoonup}\mu$ against $C(\mathbb T)$ as $r\uparrow1$. [step 1.2, L1]

2.2 Converse direction (b). Let $\rho$ be a finite nonnegative regular Borel measure on $\mathbb T$. It is a finite regular complex Borel measure, so by the converse clause of [L1] the function $P[\rho]$ lies in $h^1(\mathbb D)$ and is harmonic. For $z\in\mathbb D$ the function $P(z,\cdot)$ is continuous by [L5], hence bounded Borel, and positive, so step 1.1 with the finite measure $\rho$ and $h=P(z,\cdot)$ gives $P[\rho](z)=\int_{\mathbb T}P(z,\zeta)\,d\rho(\zeta)\ge0$. Moreover $P[\rho](0)=\int_{\mathbb T}P(0,\zeta)\,d\rho(\zeta)=\int_{\mathbb T}1\,d\rho(\zeta)=\rho(\mathbb T)$, because $P(0,\zeta)=1$ and the constant function $1$ is an admissible simple approximant in the definition of the integral. [step 1.1, L1, L5, L8]

3.1 Testing the boundary measure. For every $g\in C(\mathbb T)$ with $g\ge0$ one has $\int_{\mathbb T}g\,d\mu=\lim_{r\uparrow1}\int_{\mathbb T}g\,d(u_rm)=\lim_{r\uparrow1}\int_{\mathbb T}gu_r\,dm\ge0$: the first equality is the weak-star convergence recorded in step 2.1, the second uses the density-measure pairing $g\,d(u_rm)=gu_r\,dm$ of [L5], and for each $0\le r<1$ the function $gu_r$ is a bounded nonnegative Borel function on the probability space $(\mathbb T,m)$, so step 1.1 gives $\int_{\mathbb T}gu_r\,dm\ge0$; limits of nonnegative numbers are nonnegative. [step 2.1, step 1.1, L5]

4.1 The boundary measure is nonnegative. Define $\Lambda(g):=\int_{\mathbb T}g\,d\mu$ for real $g\in C(\mathbb T)$; by step 3.1 these values are real, $\Lambda$ is real-linear and bounded, and $\Lambda(g)\ge0$ whenever $g\ge0$. By [L7], with Dependent Choice available from [L11], there is a finite regular Borel measure $\rho$ on $\mathbb T$ with $\Lambda(g)=\int_{\mathbb T}g\,d\rho$ for every real $g\in C(\mathbb T)$. The complex-linear functionals $g\mapsto\int_{\mathbb T}g\,d\mu$ and $g\mapsto\int_{\mathbb T}g\,d\rho$ agree on real-valued functions and hence, by complex linearity, on all of $C(\mathbb T,\mathbb C)$; the uniqueness clause of [L6] therefore gives $\mu=\rho$. Thus $\mu$ is a nonnegative measure, and since $\mu$ is nonnegative and $|\mu|(\mathbb T)=u(0)$ by step 2.1, also $\mu(\mathbb T)=u(0)$. [step 3.1, step 2.1, L6, L7, L8, L11]

5.1 Part (a). This proves (a): $u=P[\mu]$ for the finite nonnegative regular Borel measure $\mu$ of step 4.1 with $\mu(\mathbb T)=u(0)$, and if $\rho$ is any further finite nonnegative regular Borel measure with $u=P[\rho]$, then $\rho$ is in particular a finite regular complex Borel measure representing $u$, so $\rho=\mu$ by the uniqueness clause of [L1] recorded in step 2.1. The converse direction (b) is step 2.2. [step 2.1, step 2.2, step 4.1, L1]

6.1 Normalized measures. For each $n$ the function $u_n$ is nonnegative harmonic with $u_n(0)=1$, so part (a) as proved in step 5.1 gives a unique finite nonnegative regular Borel measure $\mu_n$ on $\mathbb T$ with $u_n=P[\mu_n]$ and $\mu_n(\mathbb T)=1$; in particular $|\mu_n|(\mathbb T)=1$ for every $n$, so $(\mu_n)$ is a sequence of probability measures. [step 5.1]

7.1 Weak-star subsequence. By step 1.4 the space $C(\mathbb T,\mathbb C)$ is separable and the probability measures $\mu_n$ lie in the closed unit ball of its dual, so [L14] -- the ultrafilter lemma being available from the Axiom of Choice by [L11] -- provides a subsequence $(\mu_{n_k})$ and an element of the dual which [L6] identifies with a finite regular complex Borel measure $\mu$ on $\mathbb T$ such that $\int_{\mathbb T}g\,d\mu_{n_k}\to\int_{\mathbb T}g\,d\mu$ for every $g\in C(\mathbb T,\mathbb C)$. [step 6.1, step 1.4, L6, L11, L14]

8.1 The limit measure is a probability measure. For real $g\in C(\mathbb T)$ with $g\ge0$ step 7.1 gives $\int_{\mathbb T}g\,d\mu=\lim_k\int_{\mathbb T}g\,d\mu_{n_k}\ge0$, the inequality by step 1.1 applied to the finite measures $\mu_{n_k}$ and the bounded nonnegative Borel function $g$. The identification argument of step 4.1, with this positivity in place of step 3.1, now makes $\mu$ a nonnegative measure, and testing the constant function $1$ gives $\mu(\mathbb T)=\lim_k\mu_{n_k}(\mathbb T)=1$, hence $|\mu|(\mathbb T)=1$. [step 7.1, step 4.1, step 1.1]

9.1 The limit function. Put $u:=P[\mu]$. By the converse clause of [L1] the function $u$ is harmonic and lies in $h^1(\mathbb D)$; by step 1.1 applied to the finite measure $\mu$ and the bounded nonnegative Borel function $P(z,\cdot)$ one has $u(z)=\int_{\mathbb T}P(z,\zeta)\,d\mu(\zeta)\ge0$ for every $z\in\mathbb D$; and $u(0)=\int_{\mathbb T}P(0,\zeta)\,d\mu(\zeta)=\int_{\mathbb T}1\,d\mu=\mu(\mathbb T)=1$, exactly as in step 2.2. [step 8.1, step 2.2, step 1.1, L1, L5]

10.1 Pointwise convergence. For each $z\in\mathbb D$ the function $\zeta\mapsto P(z,\zeta)$ is continuous on $\mathbb T$ by [L5], so the weak-star convergence of step 7.1 gives $u_{n_k}(z)=\int_{\mathbb T}P(z,\zeta)\,d\mu_{n_k}(\zeta)\to\int_{\mathbb T}P(z,\zeta)\,d\mu(\zeta)=u(z)$. [step 7.1, step 9.1, L5]

11.1 Local uniform convergence. Fix a compact $K\subseteq\mathbb D$ and $\varepsilon>0$. Uniform convergence on $K=\varnothing$ is vacuous; assume $K\ne\varnothing$. By step 1.3 choose $\delta>0$ with $|P(z,\zeta)-P(z',\zeta)|<\varepsilon$ whenever $z,z'\in K$ satisfy $|z-z'|<\delta$ and $\zeta\in\mathbb T$, and by [L15] applied to the ambient balls $B(z,\delta)$ indexed by $z\in K$ choose $z_1,\dots,z_m\in K$ with $K\subseteq\bigcup_{j=1}^mB(z_j,\delta)$. For $z\in K$ pick $j$ with $|z-z_j|<\delta$ and split $$u_{n_k}(z)-u(z)=\int_{\mathbb T}\bigl(P(z,\zeta)-P(z_j,\zeta)\bigr)d\mu_{n_k}(\zeta)+\int_{\mathbb T}P(z_j,\zeta)\,d(\mu_{n_k}-\mu)(\zeta)+\int_{\mathbb T}\bigl(P(z_j,\zeta)-P(z,\zeta)\bigr)d\mu(\zeta).$$ By [L10] together with $|\mu_{n_k}|(\mathbb T)=1$ from step 6.1 and $|\mu|(\mathbb T)=1$ from step 8.1, the first and third terms have modulus at most $\varepsilon$, while the middle term tends to $0$ as $k\to\infty$ by step 7.1 applied to the continuous function $P(z_j,\cdot)$. Hence $\limsup_k\sup_{z\in K}|u_{n_k}(z)-u(z)|\le2\varepsilon+\max_{j\le m}\lim_k\bigl|\int_{\mathbb T}P(z_j,\zeta)\,d(\mu_{n_k}-\mu)(\zeta)\bigr|\le2\varepsilon$, and since $\varepsilon>0$ is arbitrary the subsequence converges to $u$ uniformly on $K$; as every compact subset of $\mathbb D$ arises this way, the convergence is locally uniform on $\mathbb D$. [step 1.3, step 6.1, step 7.1, step 8.1, step 10.1, L10, L15]

12.1 Assembly. Steps 5.1, 2.2 and 6.1 through 11.1 prove the three assertions: (a) a nonnegative harmonic $u$ is $P[\mu]$ for a unique finite nonnegative regular Borel measure $\mu$ with $\mu(\mathbb T)=u(0)$; (b) conversely every finite nonnegative regular Borel measure gives a nonnegative harmonic $P[\mu]$ with $P[\mu](0)=\mu(\mathbb T)$; (c) every sequence of nonnegative harmonic functions normalized by $u_n(0)=1$ has a subsequence converging locally uniformly on $\mathbb D$ to a nonnegative harmonic function with $u(0)=1$. The Axiom of Choice is used exactly as recorded: it supplies Dependent Choice and countable choice by [L11], for the Riesz representation [L6], the positive-functional lemma [L7] and the countable dense family [L13], and it supplies the ultrafilter lemma for [L14]; no other choice was made. ∎ [step 2.2, step 5.1, step 11.1, L11]
