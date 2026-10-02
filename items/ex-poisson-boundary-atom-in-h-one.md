---
id: ex-poisson-boundary-atom-in-h-one
kind: example
title: "A boundary atom gives an h1 function without an L1 density"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [cor-integral-over-a-null-set-vanishes, cor-second-countable-lch-locally-finite-borel-measures-are-regular, def-axiom-of-choice, def-complex-measure, def-countable-choice, def-dirac-measure, def-harmonic-hardy-class-disc, def-integration-against-a-signed-or-complex-measure, def-measure, def-poisson-integral-of-finite-boundary-measure, def-poisson-kernel-on-the-disc, def-regular-complex-borel-measure-on-an-lch-space, def-signed-measure, def-simple-integral-against-a-signed-or-complex-measure, def-the-one-dimensional-torus-and-normalized-haar-integral, def-total-variation-of-a-signed-or-complex-measure, lem-finite-tori-are-compact-hausdorff-character-spaces, prop-countable-subsets-of-rn-are-lebesgue-null, prop-dirac-measure-is-a-probability-measure, thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation, thm-harmonic-hardy-one-measure-representation]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Axler, Bourdon and Ramey, Harmonic Function Theory, second edition, Chapter 6"
      url: "https://www.axler.net/HFT.pdf"
      locator: "Poisson Integrals of Measures, printed pp. 111-113 (PDF pp. 116-118) and the isometry M(S) -> h^1, printed p. 119 (PDF p. 124): a point mass gives P[delta] = P(., zeta), with no L^1 density."
    - title: "Herbert Koch, Notes for Harmonic and Real Analysis (University of Bonn, 2014-15), Chapter 3"
      url: "https://www.math.uni-bonn.de/ag/ana/WiSe1415/V4B5_notes.pdf"
      locator: "Chapter 3 section 2, printed p. 36: measures, including point masses, act on continuous functions by integration and produce harmonic functions."
---

## Example

Assume the Axiom of Choice and fix $\zeta_0\in\mathbb T$, and put
$u:=P[\delta_{\zeta_0}]$, so that $u(z)=P(z,\zeta_0)$ for $z\in\mathbb D$.
Then:

1. $u>0$ everywhere, $u$ is harmonic, and $u\in h^1(\mathbb D)$ with
   $\|u\|_{h^1}=1$;
2. $u$ has no representing $L^1$ density: there is no $f\in L^1(\mathbb T,m)$
   with $u=P[f]$;
3. $u(z)\to0$ whenever $z\to\zeta$ in $\mathbb D$ with
   $\zeta\in\mathbb T\setminus\{\zeta_0\}$;
4. $u(r\zeta_0)=\frac{1+r}{1-r}$ for every $0\le r<1$, so
   $u(r\zeta_0)\to+\infty$ as $r\uparrow1$ and $u$ is unbounded on $\mathbb D$.

## Facts & Assumptions

**Given:** The Axiom of Choice, hence countable choice; a point $\zeta_0\in\mathbb T$; the Dirac measure $\delta_{\zeta_0}$; the density-measure and Poisson-integral conventions of [L2]; and $u=P[\delta_{\zeta_0}]$.

[L1] The torus $\mathbb T=\mathbb R/\mathbb Z$ is compact Hausdorff with a countable base, and $\varphi:\mathbb T\to S^1$, $\varphi([t])=e^{2\pi it}$, is a bijection onto the Euclidean unit circle, so $|\varphi(\zeta)|=1$ and $\varphi$ is injective. Its normalized Haar measure $m$ is a probability measure with $m(E)=\lambda_1\bigl(q^{-1}[E]\cap[0,1)\bigr)$ for Borel $E$; every fibre $q^{-1}\{\zeta\}$ is at most countable, so $m(\{\zeta_0\})=0$, and the integral of an $L^1$ function over an $m$-null set vanishes ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[lem-finite-tori-are-compact-hausdorff-character-spaces]], [[prop-countable-subsets-of-rn-are-lebesgue-null]], [[cor-integral-over-a-null-set-vanishes]]).

[L2] For a finite regular complex Borel measure $\mu$ on $\mathbb T$ one has $P[\mu](z)=\int_{\mathbb T}P(z,\zeta)\,d\mu(\zeta)$ with $P(z,\zeta)=(1-|z|^2)/|\varphi(\zeta)-z|^2>0$; for $f\in L^1(\mathbb T,m)$ the density measure is $(fm)(E)=\int_Ef\,dm$ and $P[f]=P[fm]$ ([[def-poisson-integral-of-finite-boundary-measure]], [[def-poisson-kernel-on-the-disc]]).

[L3] Under the Axiom of Choice every $u\in h^1(\mathbb D)$ has a unique finite regular complex Borel measure $\mu$ on $\mathbb T$ with $u=P[\mu]$ and $\|u\|_{h^1}=|\mu|(\mathbb T)$; conversely every finite regular complex Borel measure $\mu$ on $\mathbb T$ gives an $h^1$ function $P[\mu]$ with $\|P[\mu]\|_{h^1}=|\mu|(\mathbb T)$; and a general $h^1$ function need not have an $L^1$ density ([[thm-harmonic-hardy-one-measure-representation]]).

[L4] The elements of $h^1(\mathbb D)$ are complex harmonic functions and $\|u\|_{h^1}=\sup_{0\le r<1}\|u_r\|_{L^1(\mathbb T,m)}$ ([[def-harmonic-hardy-class-disc]]).

[L5] $\delta_{\zeta_0}$ is a probability measure with $\delta_{\zeta_0}(\{\zeta_0\})=1$ and $\delta_{\zeta_0}(\mathbb T)=1$; for bounded Borel $h$ the evaluation identity $\int_{\mathbb T}h\,d\delta_{\zeta_0}=h(\zeta_0)$ is proved locally in step 1.1 from these facts and the definition of the integral ([[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]]).

[L6] The integral against a signed or complex measure is defined as the limit of simple integrals along $L^1(|\nu|)$-approximating complex simple functions and does not depend on the approximating sequence; a probability measure is a finite signed measure and a finite complex measure, and for a measure $\rho\ge0$ viewed as a signed measure one has $|\rho|(E)=\rho(E)$ for every Borel $E$ ([[def-integration-against-a-signed-or-complex-measure]], [[def-simple-integral-against-a-signed-or-complex-measure]], [[def-total-variation-of-a-signed-or-complex-measure]], [[def-signed-measure]], [[def-measure]], [[def-complex-measure]]).

[L7] Assume countable choice. Every Borel measure on a second-countable LCH space that is finite on compact sets is regular, so $\delta_{\zeta_0}$ is a finite regular Borel measure and hence a finite regular complex Borel measure; a complex measure $\mu$ is regular exactly when its total variation $|\mu|$ is regular. A density measure $fm$ with $f\in L^1(\mathbb T,m)$ is a complex measure with $|fm|(E)=\int_E|f|\,dm$, so $|fm|(\mathbb T)=\|f\|_1<\infty$ and $fm$ is likewise finite regular ([[cor-second-countable-lch-locally-finite-borel-measures-are-regular]], [[def-regular-complex-borel-measure-on-an-lch-space]], [[thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]], [[def-countable-choice]]).

## Verification

**Proof technique:** direct.

1.1 Integrating bounded Borel functions against $\delta_{\zeta_0}$. Since $\delta_{\zeta_0}$ is a probability measure, $|\delta_{\zeta_0}|=\delta_{\zeta_0}$ and $\delta_{\zeta_0}(\mathbb T)=1$ by [L6] and [L5]. Let $h$ be a bounded Borel function on $\mathbb T$ and let $s:=h(\zeta_0)\mathbf 1_{\mathbb T}$, a complex simple function with simple integral $\int_{\mathbb T}s\,d\delta_{\zeta_0}=h(\zeta_0)\,\delta_{\zeta_0}(\mathbb T)=h(\zeta_0)$. The constant sequence $(s)$ is admissible in the definition of $\int_{\mathbb T}h\,d\delta_{\zeta_0}$, because $|h-s|=|h-h(\zeta_0)|$ is a nonnegative measurable function with $\int_{\mathbb T}|h-s|\,d|\delta_{\zeta_0}|=0$: the integrand vanishes at $\zeta_0$ and is supported on $\mathbb T\setminus\{\zeta_0\}$, which is $\delta_{\zeta_0}$-null by [L5], so its integral vanishes by [[cor-integral-over-a-null-set-vanishes]]. Hence $\int_{\mathbb T}h\,d\delta_{\zeta_0}=h(\zeta_0)$. [given, L5, L6, algebra]

2.1 The function $u$ is the translate of the kernel. Fix $z\in\mathbb D$. The function $\zeta\mapsto P(z,\zeta)$ is continuous on $\mathbb T$ by [L2], hence bounded Borel, so step 1.1 and the definition of the Poisson integral give $u(z)=\int_{\mathbb T}P(z,\zeta)\,d\delta_{\zeta_0}(\zeta)=P(z,\zeta_0)=(1-|z|^2)/|\varphi(\zeta_0)-z|^2$, and this is strictly positive because $|\varphi(\zeta_0)-z|\ge1-|z|>0$. [given, step 1.1, L2]

3.1 Membership and norm. By [L7] the Dirac measure is a finite regular complex Borel measure, so the converse clause of [L3] shows that $u=P[\delta_{\zeta_0}]$ lies in $h^1(\mathbb D)$ with $\|u\|_{h^1}=|\delta_{\zeta_0}|(\mathbb T)=\delta_{\zeta_0}(\mathbb T)=1$, and $u$ is harmonic by [L4]. [step 2.1, L3, L4, L5, L6, L7]

3.2 Limits at the other boundary points. Let $\zeta\in\mathbb T\setminus\{\zeta_0\}$ and let $z_m\to\zeta$ with $z_m\in\mathbb D$. Then step 2.1 gives $u(z_m)=(1-|z_m|^2)/|\varphi(\zeta_0)-z_m|^2$; here $1-|z_m|^2\to0$, while by injectivity of $\varphi$ and $\zeta\ne\zeta_0$ one has $\varphi(\zeta_0)\ne\zeta$, so $|\varphi(\zeta_0)-z_m|^2\to|\varphi(\zeta_0)-\zeta|^2>0$. Hence $u(z_m)\to0$: the limit is $0$ at every boundary point other than $\zeta_0$, along arbitrary sequences inside the disc. [step 2.1, L1, L2, algebra]

3.3 The radial blow-up at $\zeta_0$. For $0\le r<1$ one has $\varphi(\zeta_0)-r\varphi(\zeta_0)=(1-r)\varphi(\zeta_0)$ with $|\varphi(\zeta_0)|=1$, so step 2.1 gives $u(r\zeta_0)=\frac{1-r^2}{(1-r)^2}=\frac{1+r}{1-r}$. As $r\uparrow1$ the numerator tends to $2$ and the denominator to $0$ through positive values, so $u(r\zeta_0)\to+\infty$; in particular $u$ is unbounded on $\mathbb D$. [step 2.1, L1, L2, algebra]

4.1 No $L^1$ density. Suppose $f\in L^1(\mathbb T,m)$ satisfied $P[f]=u$. Then $P[fm]=P[f]=u=P[\delta_{\zeta_0}]$, and by [L7] the density measure $fm$ is a finite complex measure with $|fm|(\mathbb T)=\|f\|_1<\infty$, hence a finite regular complex Borel measure; being finite and regular it is one of the measures to which the uniqueness clause of [L3] applies, so $fm=\delta_{\zeta_0}$. Evaluating both sides at the singleton $\{\zeta_0\}$ gives $0=\int_{\{\zeta_0\}}f\,dm=(fm)(\{\zeta_0\})=\delta_{\zeta_0}(\{\zeta_0\})=1$: the middle integral vanishes because $m(\{\zeta_0\})=0$ and $f\in L^1(\mathbb T,m)$, while the last value is $1$ by [L5]. This contradiction shows that no $f\in L^1(\mathbb T,m)$ represents $u$. [step 3.1, step 2.1, L1, L2, L3, L5, L7]

5.1 Assembly. Steps 2.1, 3.1, 4.1, 3.2 and 3.3 establish, respectively, the identification $u(z)=P(z,\zeta_0)>0$, the membership $u\in h^1(\mathbb D)$ with norm $1$ and harmonicity, the absence of a representing $L^1$ density, the boundary limit $0$ at every point other than $\zeta_0$, and the radial formula $u(r\zeta_0)=(1+r)/(1-r)\to+\infty$. So the boundary atom $\delta_{\zeta_0}$ produces an unbounded positive $h^1$ function whose boundary measure is singular with respect to $m$ and which therefore has no $L^1$ density; the Axiom of Choice is used only through the representation theorem [L3] and the countable-choice regularity corollary [L7]. ∎ [step 2.1, step 3.1, step 4.1, step 3.2, step 3.3, L3, L7]
