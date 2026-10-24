---
id: thm-harmonic-hardy-representation-p-greater-one
kind: theorem
title: "h^p is the Poisson image of Lp for 1<p<=infinity"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, def-complex-lp-and-euclidean-test-function-conventions, def-dependent-choice, def-hahn-banach-extension-principle-relative, def-harmonic-hardy-class-disc, def-l-one-of-a-measure, def-poisson-integral-of-finite-boundary-measure, def-the-one-dimensional-torus-and-normalized-haar-integral, lem-complex-lq-norm-from-finite-simple-dual-tests, lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori, prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm, cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence, cor-second-countable-lch-locally-finite-borel-measures-are-regular, thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals, thm-choice-implies-dependent-implies-countable-choice, thm-complex-holder-minkowski-and-the-quotient-norm, thm-extension-of-a-bounded-map-from-a-dense-subspace, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-hahn-banach-dominated-extension, thm-harmonic-hardy-one-measure-representation, thm-poisson-extension-lp-contraction-and-norm-limit, thm-poisson-representation-for-disc-harmonic-functions, thm-reflexivity-of-lp-for-one-less-p-less-infinity, thm-sigma-finite-duality-for-bounded-functionals-on-l-p, thm-ultrafilter-lemma]
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
      locator: "The Spaces h^p(B), printed pp. 117-121 (PDF pp. 122-126): Theorem 6.9(b) on weak-star convergence in L-infinity, Theorem 6.13(b) on the isometric surjection L^p -> h^p for 1 < p <= infinity, and the dilation argument 6.14."
    - title: "Herbert Koch, Notes for Harmonic and Real Analysis (University of Bonn, 2014-15), Chapter 3"
      url: "https://www.math.uni-bonn.de/ag/ana/WiSe1415/V4B5_notes.pdf"
      locator: "§§1.2.1-3, printed pp. 35-37: boundary values of harmonic Hardy class functions and the Lp duality route."
---

## Statement

Assume [[def-axiom-of-choice|the Axiom of Choice]]. Let $1<p\le\infty$ and let
$u$ be complex harmonic on $\mathbb D$ with $u\in h^p(\mathbb D)$. Then there
is a unique $f\in L^p(\mathbb T,m;\mathbb C)$ with $u=P[f]$, and
$$\|u\|_{h^p}=\|f\|_p .$$
Moreover, if $p<\infty$ then $\|(P[f])_r-f\|_p\to0$ as $r\uparrow1$, while for
$p=\infty$ the radial functions converge weak-star to $f$ in
$L^\infty(\mathbb T,m)=L^1(\mathbb T,m)^*$, that is,
$$\int_{\mathbb T}g\,u_r\,dm\longrightarrow\int_{\mathbb T}gf\,dm\qquad(g\in L^1(\mathbb T,m))$$
as $r\uparrow1$. No $L^\infty$ norm-convergence of the radial functions is
asserted.

## Facts & Assumptions

**Given:** the Axiom of Choice, an exponent $1<p\le\infty$ with conjugate exponent $q$, $r_j:=1-\frac1{j+1}$ for $j\ge1$, and a complex harmonic $u\in h^p(\mathbb D)$ with $M:=\|u\|_{h^p}$.

[L1] $h^p(\mathbb D)$ consists of the complex harmonic functions with $\|u\|_{h^p}=\sup_{0\le r<1}\|u_r\|_p<\infty$, where $u_r(\zeta)=u(r\zeta)$; for $f\in L^p(\mathbb T,m;\mathbb C)$ the Poisson integral $P[f]=P[fm]$ is defined and complex harmonic, $(P[f])_r=P_r*f$ satisfies $\|P_r*f\|_p\le\|f\|_p$, so $P[f]\in h^p(\mathbb D)$ with $\|P[f]\|_{h^p}\le\|f\|_p$, and for $p<\infty$ one has $\|P_r*f-f\|_p\to0$ as $r\uparrow1$ ([[def-harmonic-hardy-class-disc]], [[def-poisson-integral-of-finite-boundary-measure]], [[thm-poisson-extension-lp-contraction-and-norm-limit]]).

[L2] If $w$ is harmonic on an open set containing the closed disc of radius $R<1$ about $0$, then for $|z|<R$ one has $w(z)=\int_{\mathbb T}\frac{R^2-|z|^2}{|R\eta-z|^2}w(R\eta)\,dm(\eta)$, the integral being taken over the normalized torus measure ([[thm-poisson-representation-for-disc-harmonic-functions]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[L3] Every $v\in h^1(\mathbb D)$ has a unique finite regular complex Borel measure $\mu$ on $\mathbb T$ with $v=P[\mu]$, $\|v\|_{h^1}=|\mu|(\mathbb T)$, and $\int_{\mathbb T}g\,d\mu=\lim_{r\uparrow1}\int_{\mathbb T}gv_r\,dm$ for every continuous $g$ ([[thm-harmonic-hardy-one-measure-representation]]).

[L4] Under $\mathrm{AC}_\omega$ the space $L^p(\mathbb T,m;\mathbb C)$ is reflexive for $1<p<\infty$; under the ultrafilter lemma, DC and HB every norm-bounded sequence in a reflexive space has a weakly convergent subsequence; weak convergence $x_j\rightharpoonup x$ means $\Lambda(x_j)\to\Lambda(x)$ for every bounded linear functional, and for $L^p$ the functionals $h\mapsto\int hg\,dm$ with $g\in L^q$ are bounded with $\|h\mapsto\int hg\,dm\|\le\|g\|_q$ ([[thm-reflexivity-of-lp-for-one-less-p-less-infinity]], [[cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence]], [[prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm]]).

[L5] For a measurable $f$ with $fs$ integrable for every complex finite simple $s$ of finite-measure support, $\|f\|_p=\sup\{|\int_{\mathbb T}fs\,dm|:\|s\|_{p'}\le1\}$, where $p'$ is conjugate to $p$ and $1\le p\le\infty$; and Hölder gives $|\int hg\,dm|\le\|h\|_p\|g\|_{p'}$ for conjugate exponents ([[lem-complex-lq-norm-from-finite-simple-dual-tests]], [[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[L6] The measure space $(\mathbb T,\mathcal B(\mathbb T),m)$ is sigma-finite; every bounded real linear functional on the real space $L^1(\mathbb T,m;\mathbb R)$ is integration against a unique real $g\in L^\infty(\mathbb T,m)$ with equal norms; the complex continuous functions are dense in $L^1(\mathbb T,m;\mathbb C)$; a bounded linear map from a dense normed subspace into a Banach space extends uniquely to the whole space with the same norm ([[thm-sigma-finite-duality-for-bounded-functionals-on-l-p]], [[lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori]], [[thm-extension-of-a-bounded-map-from-a-dense-subspace]], [[def-l-one-of-a-measure]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[L7] Integration against every continuous function determines a finite regular complex Borel measure on $\mathbb T$ uniquely; the density measure $fm$ of $f\in L^1$ is a finite Borel measure with $|fm|(E)=\int_E|f|\,dm$, and every finite Borel measure on the second-countable space $\mathbb T$ is regular ([[thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals]], [[cor-second-countable-lch-locally-finite-borel-measures-are-regular]], [[def-poisson-integral-of-finite-boundary-measure]]).

[L8] Fubini's theorem applies to integrable functions on the product of the sigma-finite spaces $(\mathbb T,m)$ and $(\mathbb T,m)$, and $m$ is a translation invariant probability measure ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[L9] The Axiom of Choice implies DC and $\mathrm{AC}_\omega$; it implies the ultrafilter lemma; and it implies the dominated-extension principle HB ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-dependent-choice]], [[thm-ultrafilter-lemma]], [[thm-hahn-banach-dominated-extension]], [[def-hahn-banach-extension-principle-relative]]).

## Proof

**Proof technique:** direct.

1.1 Setup. Let $u\in h^p(\mathbb D)$ with $M=\|u\|_{h^p}$ and let $r_j=1-\frac1{j+1}\uparrow1$. By [L1] the function $u$ is complex harmonic, hence continuous, on $\mathbb D$, and $u_r(\zeta)=u(r\zeta)$ is measurable with $\|u_r\|_p\le M$ for every $0\le r<1$; if $p=\infty$ this reads $|u_r|\le M$ everywhere, and then the probability measure $m$ gives $\|u_r\|_1\le\|u_r\|_\infty\le M$ by [L5]. [given, L1, L5]

1.2 Choice bookkeeping. By [L9] the Axiom of Choice supplies $\mathrm{AC}_\omega$, the ultrafilter lemma, DC and HB, so the reflexivity and weak-subsequence hypotheses recorded in [L4] are met. [given, L4, L9]

2.1 The finite exponent case: a weak limit. Assume $1<p<\infty$. The sequence $(u_{r_j})$ is norm-bounded by $M$ in the reflexive space $L^p(\mathbb T,m;\mathbb C)$ by steps 1.1 and 1.2, so [L4] provides a subsequence, relabelled $(u_{r_j})$, and an element $f\in L^p(\mathbb T,m;\mathbb C)$ with $u_{r_j}\rightharpoonup f$; explicitly $\int_{\mathbb T}u_{r_j}g\,dm\to\int_{\mathbb T}fg\,dm$ for every $g\in L^q(\mathbb T,m;\mathbb C)$. [step 1.1, step 1.2, L4]

2.2 The exponent infinity: a boundary measure. Assume $p=\infty$. By step 1.1, $\|u_r\|_1\le M$ for every $r$, so $u\in h^1(\mathbb D)$ with $\|u\|_{h^1}\le M$; [L3] therefore gives a unique finite regular complex Borel measure $\mu$ on $\mathbb T$ with $u=P[\mu]$, $\|u\|_{h^1}=|\mu|(\mathbb T)$ and $\int_{\mathbb T}g\,d\mu=\lim_{r\uparrow1}\int_{\mathbb T}gu_r\,dm$ for every continuous $g$. [step 1.1, L1, L3, L5]

3.1 The finite exponent case: identification of $u$. Assume $1<p<\infty$ and let $f$ be the weak limit of step 2.1. Fix $z\in\mathbb D$. For every $j$ with $r_j>|z|$ the function $u$ is harmonic on an open set containing the closed disc of radius $r_j$, so [L2] gives $$u(z)=\int_{\mathbb T}P^{(j)}(z,\eta)u_{r_j}(\eta)\,dm(\eta),\qquad P^{(j)}(z,\eta):=\frac{r_j^2-|z|^2}{|r_j\eta-z|^2},$$ and writing $P(z,\eta)=(1-|z|^2)/|\eta-z|^2$ this becomes $$u(z)=\int_{\mathbb T}P(z,\eta)u_{r_j}(\eta)\,dm(\eta)+\int_{\mathbb T}\bigl(P^{(j)}(z,\eta)-P(z,\eta)\bigr)u_{r_j}(\eta)\,dm(\eta).$$ The function $P(z,\cdot)$ is continuous on $\mathbb T$, hence belongs to $L^q$, so step 2.1 gives $\int_{\mathbb T}P(z,\cdot)u_{r_j}\,dm\to\int_{\mathbb T}P(z,\cdot)f\,dm=P[f](z)$; the second integral is bounded in modulus by $\|P^{(j)}(z,\cdot)-P(z,\cdot)\|_q\,\|u_{r_j}\|_p$ by [L5], and this tends to $0$ because $r_j\uparrow1$, the point $z$ stays at positive distance from $\mathbb T$, and $\|u_{r_j}\|_p\le M$. Hence $u(z)=P[f](z)$ for every $z\in\mathbb D$, that is $u=P[f]$. [step 2.1, L2, L5, algebra]

3.2 The exponent infinity: extension of the boundary functional. Assume $p=\infty$ and let $\mu$ be the measure of step 2.2. For continuous $g$ and $0\le r<1$, [L5] gives $|\int_{\mathbb T}gu_r\,dm|\le\|g\|_1\|u_r\|_\infty\le M\|g\|_1$; letting $r\uparrow1$ along the convergence of step 2.2 yields $|\int_{\mathbb T}g\,d\mu|\le M\|g\|_1$. Hence $W(g):=\int_{\mathbb T}g\,d\mu$ is a complex linear functional on the dense subspace $C(\mathbb T,\mathbb C)$ of $L^1(\mathbb T,m;\mathbb C)$ satisfying $|W(g)|\le M\|g\|_1$, and the bound in particular shows that $W$ vanishes on continuous functions that are $m$-almost everywhere zero, so $W$ is well defined on the corresponding subspace of the quotient; [L6] therefore extends it uniquely to a bounded complex linear functional $\widetilde W$ on $L^1(\mathbb T,m;\mathbb C)$ with $\|\widetilde W\|\le M$. [step 2.2, L5, L6, algebra]

4.1 The exponent infinity: the density. Keep $p=\infty$, $\widetilde W$ as in step 3.2. The functional $h\mapsto\operatorname{Re}\widetilde W(h)$ is real linear and bounded on the real space $L^1(\mathbb T,m;\mathbb R)$ with norm at most $\|\widetilde W\|\le M$, so [L6] (applied with $p=1$ on the sigma-finite space $(\mathbb T,m)$) provides $f_1\in L^\infty(\mathbb T,m;\mathbb R)$ with $\operatorname{Re}\widetilde W(h)=\int_{\mathbb T}hf_1\,dm$ for all real $h\in L^1$ and $\|f_1\|_\infty\le M$; applying the same theorem to $h\mapsto\operatorname{Im}\widetilde W(h)$ gives $f_2\in L^\infty(\mathbb T,m;\mathbb{R})$ with $\|f_2\|_\infty\le M$. Put $f:=f_1+if_2\in L^\infty(\mathbb T,m;\mathbb{C})$: by complex linearity of $\widetilde W$ and of the integral, $\widetilde W(h)=\int_{\mathbb T}hf\,dm$ for every $h\in L^1(\mathbb T,m;\mathbb{C})$, and in particular $\int_{\mathbb T}g\,d\mu=\int_{\mathbb T}gf\,dm$ for every continuous $g$. Both $\mu$ and the density measure $fm$ are finite Borel measures on the second-countable space $\mathbb T$, hence regular by [L7], and they agree on all continuous functions, so the uniqueness clause of [L7] gives $\mu=fm$; consequently $u=P[\mu]=P[fm]=P[f]$ by [L1]. [step 3.2, L1, L6, L7, algebra]

4.2 The finite exponent case: norm equality. Assume $1<p<\infty$, let $f$ be the weak limit of step 2.1 and keep the identification $u=P[f]$ of step 3.1. For every complex finite simple $s$ of finite-measure support with $\|s\|_q\le1$, step 2.1 gives $\int_{\mathbb T}fs\,dm=\lim_j\int_{\mathbb T}u_{r_j}s\,dm$, and [L5] bounds $|\int_{\mathbb T}u_{r_j}s\,dm|\le\|u_{r_j}\|_p\|s\|_q\le M$; the norm identity of [L5] therefore gives $\|f\|_p\le M$. Since $u=P[f]$, the contraction in [L1] gives $\|u\|_{h^p}=\|P[f]\|_{h^p}\le\|f\|_p$, and hence $\|f\|_p=M=\|u\|_{h^p}$. [step 2.1, step 3.1, L1, L5, algebra]

5.1 The finite exponent case: uniqueness and norm convergence. Assume $1<p<\infty$ and let $g\in L^p(\mathbb T,m;\mathbb{C})$ satisfy $P[g]=u=P[f]$. Then $P[f-g]=0$, and the convergence clause of [L1] gives $\|(P[f-g])_r-(f-g)\|_p\to0$, so $f-g=0$ almost everywhere and $f$ is the unique representing function. The same convergence clause applied to $f$ yields $\|u_r-f\|_p=\|(P[f])_r-f\|_p\to0$ as $r\uparrow1$. [step 3.1, step 4.2, L1]

5.2 The exponent infinity: the sharp norm bound. Keep $p=\infty$ and $f=f_1+if_2$ from step 4.1. For every complex finite simple $s$ of finite-measure support with $\|s\|_1\le1$ one has $s\in L^1(\mathbb T,m;\mathbb{C})$, so step 4.1 gives $\int_{\mathbb T}fs\,dm=\widetilde W(s)$ and hence $|\int_{\mathbb T}fs\,dm|\le\|\widetilde W\|\,\|s\|_1\le M$. The norm identity of [L5] at $p=\infty$, whose hypothesis $\int|fs|\,dm<\infty$ holds because $f\in L^\infty$ and $s$ is bounded with finite-measure support, gives $\|f\|_\infty\le M$. [step 3.2, step 4.1, L5, algebra]

6.1 The exponent infinity: norm equality and uniqueness. Assume $p=\infty$. By step 4.1, $u=P[f]$ with $f\in L^\infty(\mathbb T,m;\mathbb{C})$, so the contraction of [L1] at $p=\infty$ gives $\|u\|_{h^\infty}=\|P[f]\|_{h^\infty}\le\|f\|_\infty\le M=\|u\|_{h^\infty}$, and therefore $\|f\|_\infty=\|u\|_{h^\infty}$. If also $P[g]=u$ with $g\in L^\infty$, then $f-g\in L^1$ and $P[f-g]=0$, so the finite exponent convergence clause of [L1] at $p=1$ gives $\|(P[f-g])_r-(f-g)\|_1\to0$, whence $f=g$ almost everywhere. [step 4.1, step 5.2, L1, algebra]

7.1 The exponent infinity: weak-star convergence of the radial functions. Keep $p=\infty$ and $f$ as in step 4.1. For $g\in L^1(\mathbb T,m;\mathbb{C})$ and $0\le r<1$ one has $u_r=P_r*f$ by [L1], and the product integrand $(\zeta,\eta)\mapsto g(\zeta)P_r(\zeta-\eta)f(\eta)$ is integrable for the product of the probability measure $m$ with itself, because $|f|\le\|f\|_\infty$ and $\int_{\mathbb T}P_r(\zeta-\eta)\,dm(\zeta)=1$ for every $\eta$; Fubini [L8] and the translation invariance of $m$ therefore give $$\int_{\mathbb T}g\,u_r\,dm=\int_{\mathbb T}\Bigl(\int_{\mathbb T}g(\zeta)P_r(\zeta-\eta)\,dm(\zeta)\Bigr)f(\eta)\,dm(\eta)=\int_{\mathbb T}(P_r*g)(\eta)f(\eta)\,dm(\eta).$$ Consequently [L5] bounds $\bigl|\int_{\mathbb T}gu_r\,dm-\int_{\mathbb T}gf\,dm\bigr|\le\|P_r*g-g\|_1\|f\|_\infty$, which tends to $0$ as $r\uparrow1$ by the $L^1$ convergence clause of [L1]; hence $u_rm\overset{*}{\rightharpoonup}f$ in $\sigma(L^\infty(\mathbb T,m),L^1(\mathbb T,m))$. [step 4.1, step 6.1, L1, L5, L8, algebra]

8.1 Assembly. If $1<p<\infty$, steps 2.1, 3.1, 4.2 and 5.1 produce a unique $f\in L^p(\mathbb T,m;\mathbb{C})$ with $u=P[f]$, the norm identity $\|u\|_{h^p}=\|f\|_p$ and the $L^p$ convergence $\|u_r-f\|_p\to0$. If $p=\infty$, steps 2.2, 3.2, 4.1, 5.2, 6.1 and 7.1 produce a unique $f\in L^\infty(\mathbb T,m;\mathbb{C})$ with $u=P[f]$, the norm identity $\|u\|_{h^\infty}=\|f\|_\infty$ and the weak-star convergence of the radial functions against $L^1$; no norm convergence is claimed at $p=\infty$, in accordance with the fact that [L1] asserts norm convergence only for finite exponents. The Axiom of Choice was used exactly through step 1.2: $\mathrm{AC}_\omega$ for reflexivity of $L^p$ and the ultrafilter lemma, DC and HB for the weak-subsequence criterion of [L4], while the case $p=\infty$ additionally rests on the $h^1$ representation theorem [L3], itself licensed by AC. This proves all the assertions of the Statement. [step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 4.2, step 5.1, step 5.2, step 6.1, step 7.1, L1, L3, L4] ∎
