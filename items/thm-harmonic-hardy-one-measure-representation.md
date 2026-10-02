---
id: thm-harmonic-hardy-one-measure-representation
kind: theorem
title: "h1 is isometric to finite regular complex boundary measures"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [thm-complex-polynomials-and-rational-functions-are-holomorphic, thm-c2-holomorphic-components-are-harmonic, thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic, def-axiom-of-choice, def-countable-choice, def-dirac-measure, def-harmonic-hardy-class-disc, def-poisson-integral-of-finite-boundary-measure, def-poisson-kernel-on-the-disc, def-the-one-dimensional-torus-and-normalized-haar-integral, def-weak-star-convergence, lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family, lem-poisson-kernel-is-a-boundary-approximate-identity, lem-poisson-kernel-properties-on-the-disc, prop-dirac-measure-is-a-probability-measure, cor-second-countable-lch-locally-finite-borel-measures-are-regular, cor-separable-banach-dual-ball-is-weak-star-sequentially-compact, thm-choice-implies-dependent-implies-countable-choice, thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation, thm-countable-union-of-countable, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-total-variation-is-a-measure, thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals, thm-poisson-representation-for-disc-harmonic-functions, thm-ultrafilter-lemma]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  references:
    - title: "Axler, Bourdon and Ramey, Harmonic Function Theory, second edition, Chapter 6"
      url: "https://www.axler.net/HFT.pdf"
      locator: "The Spaces h^p(B), printed pp. 117-121 (PDF pp. 122-126): Theorem 6.13(a) on the isometric surjection M(S) -> h^1 and the weak-star convergence of radial measures."
    - title: "Herbert Koch, Notes for Harmonic and Real Analysis (University of Bonn, 2014-15), Chapter 3"
      url: "https://www.math.uni-bonn.de/ag/ana/WiSe1415/V4B5_notes.pdf"
      locator: "§§1.2.1-3, printed pp. 35-37: the boundary measure representation of harmonic Hardy class functions."
---

## Statement

Assume the Axiom of Choice. Every $u\in h^1(\mathbb D)$ has a unique finite
regular complex Borel measure $\mu$ on $\mathbb T$ with $u=P[\mu]$.
Conversely every finite regular complex Borel measure $\mu$ on $\mathbb T$
gives an $h^1$ function $P[\mu]$, and
$$\|P[\mu]\|_{h^1}=|\mu|(\mathbb T),$$
with $(P[\mu])_rm$ converging weak-star to $\mu$ against $C(\mathbb T)$ as
$r\uparrow1$. A general $h^1$ function need not have an $L^1$ density: its
boundary measure need not be of the form $fm$ with $f\in L^1(\mathbb T,m)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, hence Countable Choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]), a function $u\in h^1(\mathbb D)$ with bound $M:=\|u\|_{h^1}$, and finite regular complex Borel measures $\mu,\nu$ on $\mathbb T$ where they occur.

[L1] $P[\mu](z)=\int_{\mathbb T}P(z,\zeta)\,d\mu(\zeta)$ for finite complex Borel measures and $P[f]=P[fm]$ for $f\in L^1$; the radial traces are $(P[\mu])_r(\zeta)=P[\mu](r\zeta)$ ([[def-poisson-integral-of-finite-boundary-measure]]).

[L2] The kernel is positive with $P(z,\eta)=(1-|z|^2)/|\eta-z|^2$, $\int_{\mathbb T}P(z,\eta)\,dm(\eta)=1$, and $P_r*g\to g$ uniformly on $\mathbb T$ for every continuous $g$ as $r\uparrow1$; $m$ is a probability measure on the compact metric space $\mathbb T$ ([[lem-poisson-kernel-properties-on-the-disc]], [[lem-poisson-kernel-is-a-boundary-approximate-identity]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[L3] For $f\in L^1(\mu)$ one has $|\int f\,d\mu|\le\int|f|\,d|\mu|$, and $|\mu|$ is a finite measure ([[thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]], [[thm-total-variation-is-a-measure]]).

[L4] Fubini's theorem applies to functions integrable for a product of sigma-finite measures, and Tonelli's theorem applies to nonnegative product-measurable functions ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[L5] For $0\le r<1$ the density measure $u_rm$ is a finite complex measure with $|u_rm|(\mathbb T)=\int_{\mathbb T}|u_r|\,dm=\|u_r\|_1$; the class $h^1(\mathbb D)$ consists of the complex harmonic functions with $\sup_{0\le r<1}\|u_r\|_1<\infty$ and $\|u\|_{h^1}$ denotes that supremum ([[thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]], [[def-harmonic-hardy-class-disc]]).

[L6] $C(\mathbb T,\mathbb R)$ has a countable dense family $(f_j)_{j\ge1}$, namely rational polynomials in finitely many distance functions to an enumerated dense subset; passing to the double family $f_j+if_k$ over the countable set $\mathbb N\times\mathbb N$ exhibits a countable dense family in $C(\mathbb T,\mathbb C)$, so that space is separable ([[lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family]], [[thm-countable-union-of-countable]]).

[L7] If $X$ is a separable real or complex normed space, then under the ultrafilter lemma every sequence in the dual unit ball has a weak-star convergent subsequence, and the limit functional is again an element of $X^*$; weak-star convergence is evaluation convergence on every element of $X$ ([[cor-separable-banach-dual-ball-is-weak-star-sequentially-compact]], [[def-weak-star-convergence]], [[thm-ultrafilter-lemma]]).

[L8] Assume Dependent Choice. Every bounded complex linear functional on $C_0(X;\mathbb C)$ of an LCH space $X$ is represented uniquely by a finite regular complex Borel measure, and conversely every such measure defines a functional of norm $|\mu|(X)$; in particular for compact $\mathbb T$ this gives $|\mu|(\mathbb T)=\sup\{|\int g\,d\mu|:g\in C(\mathbb T),\|g\|_\infty\le1\}$ and uniqueness of the representing measure ([[thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals]]).

[L9] A harmonic function on an open set containing the closed disc of radius $r$ is recovered on it by the Poisson formula with the kernel $(r^2-|z|^2)/|r\eta-z|^2$; under the identification of $\mathbb T$ with the unit circle this is the formula $w(z)=\int_{\mathbb T}\frac{r^2-|z|^2}{|r\eta-z|^2}w(r\eta)\,dm(\eta)$ for $|z|<r$ ([[thm-poisson-representation-for-disc-harmonic-functions]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[L10] The Dirac measure $\delta_{\zeta_0}$ at a point of $\mathbb T$ is a probability measure and a finite regular Borel measure, with $\delta_{\zeta_0}(\{\zeta_0\})=1$ and $m(\{\zeta_0\})=0$; for every $f\in L^1(\mathbb T,m)$ the density measure satisfies $(fm)(\{\zeta_0\})=\int_{\{\zeta_0\}}f\,dm=0$ ([[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]], [[cor-second-countable-lch-locally-finite-borel-measures-are-regular]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[L11] Complex polynomials are holomorphic; their real and imaginary parts, being $C^2$, are harmonic. Under Countable Choice, locally uniform limits of real harmonic functions are harmonic ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]], [[thm-c2-holomorphic-components-are-harmonic]], [[thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic]]).

## Proof

**Proof technique:** direct.

1.1 Converse direction, norm bound. Let $\mu$ be a finite regular complex Borel measure and put $v:=P[\mu]$. First establish harmonicity. Identifying $\eta\in\mathbb T$ with its unit-circle point, the geometric series gives
$$P(z,\eta)=1+\sum_{k\ge1}\bigl(z^k\overline\eta^{\,k}+\overline z^{\,k}\eta^k\bigr).$$
Put $a_k:=\int\overline\eta^{\,k}\,d\mu(\eta)$ and $b_k:=\int\eta^k\,d\mu(\eta)$. These integrals exist by [L3]. The functions
$$v_N(z):=\mu(\mathbb T)+\sum_{k=1}^N(a_kz^k+b_k\overline z^{\,k})$$
are complex harmonic by [L11] and linearity of the Laplacian. For $|z|\le\rho<1$, the kernel remainder and [L3] give
$$|v(z)-v_N(z)|\le\frac{2|\mu|(\mathbb T)\rho^{N+1}}{1-\rho}.$$
Thus $v_N\to v$ locally uniformly; [L11], applied to real and imaginary parts under the given Countable Choice, proves that $v$ is complex harmonic. For $0\le r<1$ and $\zeta\in\mathbb T$, [L1] and [L3] give $|v_r(\zeta)|\le\int_{\mathbb T}P(r\zeta,\eta)\,d|\mu|(\eta)$; integrating over $\zeta$ and applying Tonelli's theorem [L4] to the nonnegative integrand, together with translation invariance of $m$ and the unit mass of the kernel from [L2], yields $$\int_{\mathbb T}|v_r|\,dm\le\int_{\mathbb T}\Bigl(\int_{\mathbb T}P(r\zeta,\eta)\,dm(\zeta)\Bigr)d|\mu|(\eta)=|\mu|(\mathbb T)<+\infty.$$ Hence $\sup_{0\le r<1}\|v_r\|_1\le|\mu|(\mathbb T)$ and $v\in h^1(\mathbb D)$ with $\|v\|_{h^1}\le|\mu|(\mathbb T)$ by [L5]. [given, L1, L2, L3, L4, L5, L11, algebra]

1.2 Converse direction, weak-star convergence. Let $g\in C(\mathbb T,\mathbb C)$. The function $(\zeta,\eta)\mapsto g(\zeta)P(r\zeta,\eta)$ is bounded by $\|g\|_\infty\sup_{\zeta}P(r\zeta,\eta)$ and is integrable for the product of the probability measure $m$ and the finite measure $|\mu|$; Fubini's theorem [L4] therefore gives $$\int_{\mathbb T}g\,v_r\,dm=\int_{\mathbb T}\Bigl(\int_{\mathbb T}g(\zeta)P(r\zeta,\eta)\,dm(\zeta)\Bigr)d\mu(\eta).$$ The inner integral equals $(P_r*g)(\eta)$ by translation invariance of $m$ and the symmetry $P_r(-\theta)=P_r(\theta)$, and $P_r*g\to g$ uniformly by [L2]; hence $|\int g\,v_r\,dm-\int g\,d\mu|=|\int(P_r*g-g)\,d\mu|\le\|P_r*g-g\|_\infty|\mu|(\mathbb T)\to0$. Thus $v_rm\overset{*}{\rightharpoonup}\mu$ against $C(\mathbb T)$ as $r\uparrow1$. [given, L1, L2, L3, L4, L7, algebra]

1.3 Extraction of a boundary measure. Let $u\in h^1(\mathbb D)$ with $M=\|u\|_{h^1}<\infty$ and put $r_j:=1-1/(j+1)\uparrow1$. Each $u_{r_j}m$ is a finite complex measure with $|u_{r_j}m|(\mathbb T)=\|u_{r_j}\|_1\le M$ by [L5], so $(u_{r_j}m)$ is a bounded sequence in the dual of the separable space $C(\mathbb T,\mathbb C)$ by [L6]. The ultrafilter lemma gives a subsequence, relabelled $(u_{r_j}m)$, and a finite regular complex Borel measure $\mu$ with $u_{r_j}m\overset{*}{\rightharpoonup}\mu$ by [L7] and [L8]. For every $g\in C(\mathbb T)$ with $\|g\|_\infty\le1$, $$|\smallint g\,d\mu|=\lim_j|\smallint g\,u_{r_j}\,dm|\le\liminf_j\|u_{r_j}\|_1\le M,$$ and taking the supremum over such $g$ gives $|\mu|(\mathbb T)\le M$ by the norm formula of [L8]. [given, L5, L6, L7, L8, algebra]

1.4 The Dirac measure is not a density. Fix $\zeta_0\in\mathbb T$. By [L10], $\delta_{\zeta_0}$ is a finite regular complex Borel measure with $\delta_{\zeta_0}(\{\zeta_0\})=1$, while $(fm)(\{\zeta_0\})=\int_{\{\zeta_0\}}f\,dm=0$ for every $f\in L^1(\mathbb T,m)$ because $m(\{\zeta_0\})=0$. Hence there is no $f\in L^1(\mathbb T,m)$ with $fm=\delta_{\zeta_0}$: the boundary measure $\delta_{\zeta_0}$ admits no $L^1$ density. [given, L5, L10, algebra]

2.1 Converse direction, reverse norm inequality. For a finite regular complex Borel measure $\mu$ and $v=P[\mu]$, the norm formula of [L8] gives $|\mu|(\mathbb T)=\sup\{|\int g\,d\mu|:\|g\|_\infty\le1\}$; for each such $g$, step 1.2 yields $|\int g\,d\mu|=\lim_{r\uparrow1}|\int g\,v_r\,dm|\le\sup_{r<1}\|v_r\|_1=\|v\|_{h^1}$. Taking the supremum over $g$ and combining with step 1.1 gives $\|P[\mu]\|_{h^1}=|\mu|(\mathbb T)$. [step 1.1, step 1.2, L5, L8, algebra]

2.2 Identification of the Poisson integral. Let $u$ and $\mu$ be as in step 1.3 and fix $z\in\mathbb D$. For all large $j$ one has $r_j>|z|$, and [L9] applied to the harmonic function $u$ on the disc of radius $r_j$ gives, in the torus normalization, $$u(z)=\int_{\mathbb T}\frac{r_j^2-|z|^2}{|r_j\eta-z|^2}\,u_{r_j}(\eta)\,dm(\eta)=\int_{\mathbb T}P(z,\eta)u_{r_j}(\eta)\,dm(\eta)+\int_{\mathbb T}\bigl(P^{(j)}(z,\eta)-P(z,\eta)\bigr)u_{r_j}(\eta)\,dm(\eta),$$ where $P^{(j)}(z,\eta):=(r_j^2-|z|^2)/|r_j\eta-z|^2\to P(z,\eta)$ uniformly in $\eta$ as $j\to\infty$ because $|z|<1$ stays a positive distance from the boundary circle; the second term is bounded by $\|P^{(j)}(z,\cdot)-P(z,\cdot)\|_\infty\|u_{r_j}\|_1\to0$. The first term tends to $\int_{\mathbb T}P(z,\eta)\,d\mu(\eta)=P[\mu](z)$ by step 1.3, since $\eta\mapsto P(z,\eta)$ is continuous. Hence $u(z)=P[\mu](z)$ for every $z\in\mathbb D$, that is, $u=P[\mu]$. [step 1.3, L1, L2, L5, L9, algebra]

2.3 Uniqueness of the boundary measure. If $P[\mu]=P[\nu]$, then for every $g\in C(\mathbb T)$ step 1.2 applied to $\mu$ and to $\nu$ gives $\int g\,d\mu=\lim_r\int g\,(P[\mu])_r\,dm=\lim_r\int g\,(P[\nu])_r\,dm=\int g\,d\nu$. The uniqueness clause of the representation theorem [L8] then gives $\mu=\nu$. In particular the measure produced by the weak-star subsequence in step 1.3 is the unique representing measure of $u$, independently of the subsequence. [step 1.2, L8]

3.1 Norm equality on $h^1$. Let $u\in h^1(\mathbb D)$ with representing measure $\mu$ as in steps 1.3 and 2.2. Step 1.3 gives $|\mu|(\mathbb T)\le\|u\|_{h^1}$, and step 2.2 gives $u=P[\mu]$, so step 2.1 yields $\|u\|_{h^1}=\|P[\mu]\|_{h^1}=|\mu|(\mathbb T)$. Therefore the representation is an isometry, and every $h^1$ function has the same norm as its boundary measure. [step 1.3, step 2.1, step 2.2, L5, algebra]

3.2 Full-net weak-star convergence. Since $u=P[\mu]$ by step 2.2, step 1.2 applied to the measure $\mu$ shows that $u_rm=(P[\mu])_rm\overset{*}{\rightharpoonup}\mu$ against $C(\mathbb T)$ along the whole net $r\uparrow1$, not merely along the subsequence selected in step 1.3. [step 1.2, step 2.2]

4.1 Assembly. (i) If $u\in h^1(\mathbb D)$, steps 1.3 and 2.2 produce a finite regular complex Borel measure $\mu$ with $u=P[\mu]$, step 2.3 shows it is unique, step 3.1 gives $\|u\|_{h^1}=|\mu|(\mathbb T)$, and step 3.2 gives $u_rm\overset{*}{\rightharpoonup}\mu$. Conversely, if $\mu$ is a finite regular complex Borel measure, step 1.1 puts $P[\mu]$ in $h^1(\mathbb D)$ and step 2.1 gives $\|P[\mu]\|_{h^1}=|\mu|(\mathbb T)$, while step 1.2 gives the weak-star convergence of the radial measures; this proves both directions of the asserted isometric correspondence. (ii) For the final clause, the measure $\delta_{\zeta_0}$ of step 1.4 is finite and regular, so $P[\delta_{\zeta_0}]$ is an $h^1$ function whose boundary measure is not of the form $fm$; hence a general $h^1$ function need not have an $L^1$ density. (iii) The Axiom of Choice is used exactly as recorded: it gives the ultrafilter lemma used in the separable-predual sequential compactness theorem and Dependent Choice for the Riesz representation theorem, both cited in [L7] and [L8] and carried in the dependency list of this item. [step 1.1, step 1.3, step 1.4, step 2.1, step 2.2, step 2.3, step 3.1, step 3.2, L7, L8] ∎
