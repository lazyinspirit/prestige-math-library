---
id: thm-reflexive-approximation-property-implies-metric-approximation-property
kind: theorem
title: "Reflexive approximation property implies metric approximation property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-approximation-property-and-bounded-approximation-property, def-reflexive-banach-space, thm-hahn-banach-dominated-extension, thm-complex-hahn-banach-norm-preserving-extension, thm-banach-alaoglu, lem-bounded-real-c-zero-functional-is-a-difference-of-positive-functionals, lem-positive-c-zero-functionals-have-finite-regular-representing-measures, thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, thm-reflexive-iff-unit-ball-weakly-compact, thm-reflexivity-of-lp-for-one-less-p-less-infinity, thm-eberlein-smulian, thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable]
justified_by: []
forward_refs: []
aliases: [Grothendieck reflexive AP theorem]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Raymond A. Ryan, Introduction to Tensor Products of Banach Spaces"
      url: "https://djvu.online/file/ATNjYmfESxgzE"
      locator: "Proposition 4.12 and Theorem 4.14; Theorem 5.32; Proposition 5.36 and Corollary 5.37; Theorem 5.44 and Corollary 5.45; Theorem 5.50 and Corollary 5.51, printed pp. 78--81 and 113--122"
pipeline_run: phase-2-next-18
---

## Statement

Assume the Axiom of Choice. If a real or complex reflexive Banach space $X$
has the approximation property, then it has the metric approximation property.
Equivalently, for every norm-compact $K\subseteq X$ and every $\varepsilon>0$
there is a bounded finite-rank $T:X\to X$ such that

$$\|T\|\le 1,\qquad \sup_{x\in K}\|Tx-x\|<\varepsilon.$$

## Facts & Assumptions

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[L1] AP and $\lambda$-BAP mean compact-uniform approximation of the identity by finite-rank operators, with $\lambda$-BAP imposing norm at most $\lambda$ ([[def-approximation-property-and-bounded-approximation-property]]). Here MAP denotes $1$-BAP.

[L2] Reflexivity means that the canonical isometry $J_X:X\to X^{**}$ is onto ([[def-reflexive-banach-space]]), equivalently its closed unit ball is weakly compact ([[thm-reflexive-iff-unit-ball-weakly-compact]]).

[L3] Under AC, Hahn--Banach separation is available over both scalar fields, dual balls are weak-star compact, bounded functionals on $C(K)$ have finite regular representing measures over either scalar field, and scalar Radon--Nikodym densities exist ([[thm-hahn-banach-dominated-extension]], [[thm-complex-hahn-banach-norm-preserving-extension]], [[thm-banach-alaoglu]], [[lem-bounded-real-c-zero-functional-is-a-difference-of-positive-functionals]], [[lem-positive-c-zero-functionals-have-finite-regular-representing-measures]], [[thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals]], [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]).

[L4] Under AC, $L^2$ is reflexive and weak compactness is equivalent to weak sequential compactness ([[thm-reflexivity-of-lp-for-one-less-p-less-infinity]], [[thm-eberlein-smulian]]).

[L5] Under Countable Choice, $L^1$ of a sigma-finite, countably generated measure space is separable ([[thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable]]). Assumption [A1] supplies Countable Choice by restriction to countable families.

## Proof

**Proof technique:** Grothendieck's nuclear--integral tensor criterion.

**Given:** AC and a reflexive Banach space $X$ with AP.

1.1 Set up the tensor and operator norms. For Banach spaces $E,F$ and $u=\sum_{j=1}^n e_j\otimes f_j$, put [given, L1, construct]

$$\pi(u)=\inf\sum_j\|e_j\|\|f_j\|, \qquad \varepsilon(u)=\sup_{e^*\in B_{E^*},f^*\in B_{F^*}} \left|\sum_j e^*(e_j)f^*(f_j)\right|.$$

Their completions are $E\widehat\otimes_\pi F$ and $E\widehat\otimes_\varepsilon F$. A tensor $u=\sum_ne_n^*\otimes f_n\in E^*\widehat\otimes_\pi F$ induces the nuclear operator $S_u(e)=\sum_ne_n^*(e)f_n$; the nuclear norm is the quotient of $\pi$ by the kernel of $u\mapsto S_u$.

For later use, call $S:E\to F$ **integral** when

$$B_S(e,f^*)=f^*(Se)$$

extends continuously to $E\widehat\otimes_\varepsilon F^*$; its norm is the norm of that functional. Call $S$ **Pietsch integral** when there are a finite measure $\mu$ and bounded maps

$$E\xrightarrow{U}L^\infty(\mu) \xrightarrow{I}L^1(\mu)\xrightarrow{R}F$$

with $S=RIU$; its Pietsch norm is the infimum of $\|R\|\|U\|\mu(\Omega)$ after the harmless normalization of $\mu$. Every nuclear map is Pietsch integral and every Pietsch-integral map is integral, with

$$\|S\|_{I}\leq\|S\|_{PI}\leq\|S\|_N.$$

1.2 Prove the vector-density fact for a reflexive range. We need the following local form of the Radon--Nikodym theorem: if $m$ is a countably additive $X$-valued measure of bounded variation and $m\ll\mu$ for a finite positive measure $\mu$, then [A1, L2, L3, L4, L5]

$$m(A)=\int_A g\,d\mu$$

for a Bochner-integrable $g:\Omega\to X$. We give the operator proof because this fact is load-bearing below.

First suppose that a weakly compact operator $T:L^1(\mu)\to Y$ has separable range. Replacing $Y$ by the separable closed span of $T[L^1]$, choose a countable norming set $(y_n^*)\subseteq B_{Y^*}$ and put

$$|||y|||=\sum_{n\geq1}2^{-n}|y_n^*(y)|.$$

On the weakly compact closure $K$ of $T[B_{L^1}]$, this metric induces the weak topology: the identity from weak $K$ to $|||\cdot|||$-metric $K$ is continuous by uniform convergence of the displayed series, and compactness then makes it a homeomorphism. If $Z$ is the completion of $(Y,|||\cdot|||)$ and $j:Y\to Z$ is the inclusion, $jT$ is compact.

The dual $L^\infty(\mu)$ has MAP directly. Given a norm-compact $C\subseteq L^\infty$ and $\delta>0$, choose a finite $\delta$-net $f_1,\ldots,f_q$ in $C$, uniformly approximate the $f_i$ by simple functions, and let $\mathcal P$ be the common finite measurable partition on which those simple functions are constant. Averaging over each positive-measure cell (and putting zero on null cells) defines a norm-one finite-rank conditional-average map $P_{\mathcal P}$. The triangle inequality gives $\sup_{f\in C}\|P_{\mathcal P}f-f\|_\infty<4\delta$. The standard adjoint form of AP therefore approximates the compact operator $jT$ in operator norm by finite-rank maps $T_r:L^1(\mu)\to Z$. Write

$$T_r f=\int f g_r\,d\mu$$

with a finite-dimensional-valued strongly measurable $g_r$. For such densities, $\|T_r-T_s\|=\operatorname*{ess\,sup}\|g_r-g_s\|_Z$: the easy inequality is Holder's inequality, and the reverse follows by testing on a positive-measure set where a norming functional almost attains the essential supremum. Thus $(g_r)$ converges in $L^\infty(\mu;Z)$ to a strongly measurable bounded $g$, and $jTf=\int fg\,d\mu$.

For every $A$ of positive measure,

$$\frac1{\mu(A)}\int_Ag\,d\mu =jT\!\left(\frac{\mathbf1_A}{\mu(A)}\right)\in jK.$$

The function $g$ lies in $jK$ almost everywhere. Indeed, $Z$ is separable; cover $Z\setminus jK$ by countably many open balls whose closures miss $jK$. If the inverse image of one such ball had positive measure, the average of $g$ over a smaller concentric inverse image would lie both in that ball and in $jK$, a contradiction. On $K$, the $Z$-norm topology is the weak topology of $Y$. Hence $j^{-1}g$ is weakly measurable, essentially separably valued, and bounded in the original norm. To see strong measurability directly, use the norming sequence above: norm balls about a countable dense subset of $Y$ are countable intersections of inverse images of scalar Borel sets, so choosing the first ball of radius $2^{-q}$ that contains $j^{-1}g(\omega)$ gives countably-valued measurable approximants; truncating their ranges gives simple functions converging pointwise in norm. Thus $T$ is represented by an essentially bounded Bochner-measurable $Y$-valued density.

Now let $T:L^1(\mu)\to Y$ be any weakly compact operator. The family of characteristic functions is relatively weakly compact in $L^1$: it lies in the image of the closed set $\{h\in L^2:|h|\leq1\}$ under the continuous inclusion $L^2\to L^1$, and that set is weakly compact by [L4]. For a sequence $(A_n)$, restrict $T$ to the $L^1$ space of the countably generated sigma-algebra generated by the $A_n$. The restricted finite measure is sigma-finite, so this $L^1$ space is separable by [A1] and [L5]. If $D$ is a countable dense subset, continuity makes $T(D)$ dense in the image of the restriction; the closed linear span of $T(D)$ is therefore separable and contains that image. Thus the restriction has separable range and hence has the representation just proved. Representable maps are completely continuous on weakly convergent sequences: if $f_n\rightharpoonup0$ in $L^1$, then $(f_n)$ is uniformly integrable. For completeness, failure of uniform integrability would permit a gliding-hump subsequence on successively almost-disjoint small sets; putting the scalar sign of the selected $f_n$ on each hump produces one $h\in L^\infty$ for which $\int hf_n$ stays bounded away from zero, contradicting weak convergence. A pointwise simple approximation to the bounded density, Egorov on a large set, and uniform integrability on its small complement reduce the assertion to finitely many scalar integrals $\int_E f_n\,d\mu\to0$. Consequently $(T\mathbf1_{A_n})$ has a norm-convergent subsequence. Thus $\{T\mathbf1_A:A\text{ measurable}\}$ is relatively norm compact and is separable. Characteristic functions span a dense subspace of $L^1$, so the range of $T$ is separable. The preceding paragraph now represents $T$.

Apply this to the integration operator

$$T_m:L^1(|m|)\to X,\qquad T_m f=\int f\,dm.$$

It is bounded, and it is weakly compact because its range is in the reflexive space $X$ by [L2]. Hence $T_mf=\int fh\,d|m|$ for an essentially bounded Bochner-measurable $h$. Scalar Radon--Nikodym under [L3] gives $|m|=w\mu$; then $g=wh$ is Bochner integrable and $m(A)=\int_Ag\,d\mu$. This proves the required density fact.

2.1 Use the density fact to identify nuclear and Pietsch-integral maps into $X$. Let $S:E\to X$ be Pietsch integral and choose $S=RIU$ as in step 1.1 with $\mu$ a probability measure. The vector measure $\nu(A)=R\mathbf1_A$ has variation at most $\|R\|\mu$ and is absolutely continuous with respect to $\mu$. By step 1.2 it has a Bochner density $g\in L^1(\mu;X)$, and equality first on simple functions and then by density gives [step 1.1, step 1.2]

$$Rf=\int fg\,d\mu\qquad(f\in L^1(\mu)).$$

Choose simple $g_q\to g$ in $L^1(\mu;X)$. If $g_q=\sum_k\mathbf1_{A_k}x_k$, then

$$e\longmapsto\int (Ue)g_q\,d\mu =\sum_k e_k^*(e)x_k, \qquad e_k^*(e)=\int_{A_k}Ue\,d\mu,$$

and $\sum_k\|e_k^*\|\|x_k\|\leq\|U\|\int\|g_q\|d\mu$. Passing to the projective completion shows that $S$ is nuclear and $\|S\|_N\leq\|U\|\|R\|$. Infimizing over factorizations and using the general inequalities of step 1.1 yields, isometrically,

$$\mathcal N(E,X)=\mathcal{PI}(E,X).$$

2.2 Identify Pietsch-integral and integral maps into $X$. An integral $S:E\to X$ has a factorization [L2, L3, step 1.1]

$$J_XS=RIU:E\longrightarrow X^{**}$$

whose product norm can be chosen arbitrarily close to $\|S\|_I$. Here is the factorization explicitly. By [L3] the relevant weak-star dual balls are compact. Embed the injective tensor product isometrically into the continuous functions on their product, extend $B_S$ without increasing its norm by [L3], and apply the real or complex Riesz--Markov suppliers in [L3] to represent that extension by a finite regular measure $\lambda$. Put $Ue(e^*,x^{**})=e^*(e)$, and define

$$Rf(x^*)=\int f(e^*,x^{**})x^{**}(x^*)\,d\lambda.$$

Then $R:L^1(|\lambda|)\to X^{**}$ is bounded, and the identity defining $B_S$ gives $J_XS=RIU$ first after evaluation at each $x^*$ and hence in $X^{**}$. Applying the polar decomposition of $\lambda$ puts its total variation exactly into the product norm, proving the asserted infimum. Since $J_X$ is onto and isometric, $J_X^{-1}R$ is a factorization of $S$ through $I:L^\infty\to L^1$ with the same norm. Hence $\|S\|_{PI}\leq\|S\|_I$; the reverse inequality is general. Combining this with step 2.1 gives

$$\mathcal N(E,X)=\mathcal{PI}(E,X)=\mathcal I(E,X)$$

isometrically.

2.3 Use AP to remove the projective-tensor kernel. Take $u\in X^*\widehat\otimes_\pi X$. After rescaling a nuclear representation we may write [L1, step 1.1]

$$u=\sum_{n\geq1}x_n^*\otimes x_n, \qquad \sum_n\|x_n^*\|<\infty, \qquad x_n\to0.$$

Indeed, choose successive finite-tensor approximants whose projective-norm errors are below $4^{-q}$, write the difference in block $q$ with total coefficient norm below $2\cdot4^{-q}$, and multiply its second factors by $2^{-q}$ while multiplying its first factors by $2^q$. The first-factor norms then have summable block totals and the second-factor norms tend to zero after normalizing each original elementary tensor.

Thus $K_0=\{0,x_1,x_2,\ldots\}$ is compact. AP supplies finite-rank maps $R_\alpha$ for which $\sup_n\|R_\alpha x_n-x_n\|\to0$, and consequently

$$u=\lim_\alpha\sum_nx_n^*\otimes R_\alpha x_n$$

in projective norm. If the operator $S_u$ induced by $u$ is zero and $R_\alpha x=\sum_ky_k^*(x)y_k$, then

$$\sum_nx_n^*\otimes R_\alpha x_n =\sum_k S_u^*(y_k^*)\otimes y_k=0.$$

Therefore $u=0$. The canonical quotient $X^*\widehat\otimes_\pi X\to\mathcal N(X,X)$ is injective, hence isometric.

3.1 Prove the isometric tensor criterion. Define [step 1.1, step 2.2, step 2.3]

$$Q:X^*\widehat\otimes_\pi X \longrightarrow (X\widehat\otimes_\varepsilon X^*)^*$$

by

$$Q\!\left(\sum_nx_n^*\otimes x_n\right) \!\left(\sum_jy_j\otimes y_j^*\right) =\sum_{n,j}x_n^*(y_j)y_j^*(x_n).$$

By step 2.3 the domain is $\mathcal N(X,X)$ with its nuclear norm, and by the definition in step 1.1 the codomain is $\mathcal I(X,X^{**})$. Under these identifications $Q$ sends $S$ to $J_XS$. The two associated bilinear forms are literally equal,

$$B_{J_XS}(x,x^*)=J_X(Sx)(x^*)=x^*(Sx)=B_S(x,x^*),$$

so the integral norm is unchanged. Step 2.2 identifies the nuclear and integral norms on the domain. Hence $Q$ is an isometry.

4.1 Derive finite-rank contractions from the criterion. Let $\mathcal F_1$ be the convex balanced set of finite-rank operators on $X$ of norm at most one. The isometry in step 3.1 says, for every $u\in X^*\widehat\otimes_\pi X$, [L2, L3, step 3.1]

$$\pi(u)=\sup_{T\in\mathcal F_1}|\operatorname{tr}(TS_u)|.$$

Reflexivity identifies every functional on $X^*\widehat\otimes_\pi X$ with an operator on $X$, so the ordinary dual formula for the projective norm gives the same supremum over the full unit ball of $\mathcal L(X)$. The Hahn--Banach bipolar theorem from [L3] therefore makes $\mathcal F_1$ weak-operator dense in that unit ball. In particular, for every finite tuple $x_1,\ldots,x_r$, the tuple $(x_1,\ldots,x_r)$ lies in the weak closure of

$$\{(Tx_1,\ldots,Tx_r):T\in\mathcal F_1\}\subseteq X^r.$$

This set is convex, so its weak and norm closures agree by [L3]. It follows that $I_X$ is in the strong-operator closure of $\mathcal F_1$: there is a net $(T_\alpha)$ of finite-rank contractions with $T_\alpha x\to x$ for every $x\in X$.

5.1 Upgrade pointwise convergence to MAP. Fix compact $K\subseteq X$ and $\varepsilon>0$. Choose a finite $\varepsilon/3$-net $x_1,\ldots,x_r$ in $K$ and then $\alpha$ so that $\|T_\alpha x_i-x_i\|<\varepsilon/3$ for all $i$. Since $\|T_\alpha\|\leq1$, any $x\in K$ and a corresponding $x_i$ satisfy [L1, step 4.1]

$$\|T_\alpha x-x\| \leq\|T_\alpha(x-x_i)\|+\|T_\alpha x_i-x_i\|+\|x_i-x\| <\varepsilon.$$

Thus $X$ has MAP by [L1]. The zero space is covered by $T=0$. The proof works over both scalar fields; in the complex case every separation argument is applied to real parts. AC is the umbrella assumption for the supplier hypotheses and selections listed above: scalar Radon--Nikodym, Banach--Alaoglu and the weak-compactness/subsequence steps, real and complex Hahn--Banach (including separation and norming functionals), regular-measure representation, countably generated $L^1$ separability, and the countable approximation and tensor-representation choices. [A1, L1, L3, step 1.2] ∎
