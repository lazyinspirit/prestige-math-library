---
id: thm-calderon-zygmund-operators-are-bounded-on-weighted-lp
kind: theorem
title: Weighted L-p bounds for standard Calderon-Zygmund maximal truncations
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [lem-weighted-good-lambda-inequality-for-maximal-truncations, lem-unweighted-good-lambda-local-estimate-for-maximal-truncations, lem-a-infinity-weights-satisfy-power-decay, lem-kernel-tail-integrals-of-weighted-l-p-functions-are-finite, thm-hardy-littlewood-maximal-operator-characterises-a-p, lem-weighted-maximal-weak-bound-for-a-one, thm-layer-cake-formula-for-l-p-powers, thm-fatou-lemma, thm-dominated-convergence, thm-chebyshev-markov-inequality-for-the-integral, def-maximal-truncated-singular-integral, def-standard-holder-calderon-zygmund-kernel, def-calderon-zygmund-kernel-and-principal-value-operator, def-centered-and-uncentered-hardy-littlewood-maximal-functions, def-muckenhoupt-a-p-and-a-one-weights, def-muckenhoupt-a-infinity-class, def-weight-and-weighted-lp-space, thm-maximal-truncations-are-weak-one-one-and-strong-lp, thm-c-c-is-dense-in-l-p-for-radon-measures, def-dependent-choice, def-countable-choice, lem-dependent-choice-implies-countable-choice, def-sublinear-operator-weak-and-strong-type-p-q, lem-complex-translation-and-approximate-identity-interfaces, lem-smooth-bump-between-concentric-euclidean-balls, thm-polar-coordinates-formula-for-lebesgue-measure, cor-mean-value-theorem]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 7.4.6 with (7.4.15)-(7.4.16) and its proof, Theorem 7.4.3, Remark 7.4.4 with (7.4.13)-(7.4.14), and the closing pointwise-control comment on p. 543, printed pp. 533-543"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Theorems 4.29 and 4.31 with the A_p weighted maximal theory, printed pp. 81-85"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]); this supplies
Countable Choice ([[def-countable-choice]],
[[lem-dependent-choice-implies-countable-choice]]), which the published
truncation definitions use. Let $1<p<\infty$, let $w\in A_p$
([[def-muckenhoupt-a-p-and-a-one-weights]]), and let $k$ (pointwise size
$A_1$, standard $\delta$-Hölder $A_2'$, cancellation $A_3$), a principal-value
distribution $W$ for $k$, and the associated $L^2$-bounded convolution operator
$T$ with norm $B$ be as in the published maximal-truncation theorem
([[thm-maximal-truncations-are-weak-one-one-and-strong-lp]],
[[def-maximal-truncated-singular-integral]],
[[def-standard-holder-calderon-zygmund-kernel]],
[[def-calderon-zygmund-kernel-and-principal-value-operator]]). If $A_1+A_2'+A_3+B=0$, the kernel and both maximal truncations vanish; otherwise the constants below are obtained by the indicated homogeneous bounds. Then for every
$f\in L^p(w)$ the maximal truncations are finite almost everywhere and
$$\|T^{**}f\|_{L^p(w)}\le C(A_1+A_2'+A_3+B)\|f\|_{L^p(w)},\qquad C=C(n,p,\delta,[w]_{A_p}),$$
and the same bound holds for $T^*$. Moreover, for $w\in A_1$ the weak type
$(1,1)$ bound ([[def-sublinear-operator-weak-and-strong-type-p-q]])
$$w(\{T^{**}f>\lambda\})\le C(A_1+A_2'+A_3+B)\lambda^{-1}\|f\|_{L^1(w)}$$
holds with $C=C(n,\delta,[w]_{A_1})$. Finally, if the principal-value truncations
$T_\varepsilon f$ converge almost everywhere to a measurable $Tf$ for every $f$
in a dense subspace of $L^p(w)$, then the limit exists almost everywhere for
every $f\in L^p(w)$ and satisfies the same $L^p(w)$ bound.

## Facts & Assumptions

**Given:** Dependent Choice; the kernel data $A_1,A_2',A_3,B,\delta$; a weight $w$; $1<p<\infty$; and, when the weak endpoint is treated, $w\in A_1$.

[F1] For every $f\in L^p(w)$, every $x$ and every $\varepsilon>0$ the truncated integrals are defined by absolutely convergent integrals, $\int_{|y|\ge\varepsilon}|k(y)|\,|f(x-y)|\,dy\le C(n,p,[w]_{A_p})A_1w(Q(x,\varepsilon))^{-1/p}\|f\|_{L^p(w)}$, and the maximal truncations are Borel measurable functions of the centre. Applying the same lemma to the auxiliary kernel $|y|^{-n}$ also establishes $\int_{|y|\ge\varepsilon}|f(x-y)||y|^{-n}dy<\infty$, the finiteness hypothesis of the good-$\lambda$ lemma ([[lem-kernel-tail-integrals-of-weighted-l-p-functions-are-finite]]).

[F2] Quantitative weighted good-$\lambda$. Put $S=A_1+A_2'+A_3+B$. When $A_1+A_2'+A_3>0$, the local estimate of [[lem-unweighted-good-lambda-local-estimate-for-maximal-truncations]] gives, in each Whitney cube $Q_j$, $|E_j|\le C_{n,\delta}\gamma S|Q_j|$ for $0<\gamma<\gamma_0=c_0(n,\delta)/(A_1+A_2'+A_3)$. For $w\in A_\infty$ ([[def-muckenhoupt-a-infinity-class]]), [[lem-a-infinity-weights-satisfy-power-decay]] gives $w(E_j)\le C_w(|E_j|/|Q_j|)^\eta w(Q_j)$, with $C_w,\eta>0$ depending only on $n$ and a witnessing exponent and characteristic. Summing over the disjoint Whitney cubes, as in [[lem-weighted-good-lambda-inequality-for-maximal-truncations]], yields the good-$\lambda$ bound with $\delta'=\eta$ and $C_1=C_w C_{n,\delta}^{\eta}S^\eta$. This applies to $T^{**}$ when its level set is proper and open, and separately to $T^*$ under the corresponding hypothesis. If $A_1+A_2'+A_3=0$, the kernel and its truncations vanish and no absorption is needed.

[F3] Maximal-function bounds: for $w\in A_p$ and $f\in L^p(w)$, $\|Mf\|_{L^p(w)}\le C_{n,p}[w]_{A_p}^{1/(p-1)}\|f\|_{L^p(w)}$ ([[thm-hardy-littlewood-maximal-operator-characterises-a-p]]); for $w\in A_1$ and $f\in L^1(w)$, $w(\{Mf>\lambda\})\le5^n[w]_{A_1}\lambda^{-1}\|f\|_{L^1(w)}$ ([[lem-weighted-maximal-weak-bound-for-a-one]]); and $M(1_{B(0,1)})(x)\ge2^{-n}(1+|x|)^{-n}$ for every $x$, because $B(0,1)\subseteq B(x,2(1+|x|))$ ([[def-centered-and-uncentered-hardy-littlewood-maximal-functions]]).

[F4] Layer cake: for measurable $g\ge0$ and $0<p<\infty$, $\int g^pw\,d\lambda=\int_0^\infty p\lambda^{p-1}w(\{g>\lambda\})\,d\lambda$, both sides allowed to be $+\infty$; Fatou's lemma holds for nonnegative measurable functions ([[thm-layer-cake-formula-for-l-p-powers]], [[thm-fatou-lemma]]).

[F5] $w\,d\lambda$ is Radon. Under DC, $C_c$ is dense in real $L^p(w)$ by [[thm-c-c-is-dense-in-l-p-for-radon-measures]]; apply it to each component for complex inputs. To obtain smooth density, choose a nonnegative smooth bump equal to one on a small ball and supported in a larger ball by [[lem-smooth-bump-between-concentric-euclidean-balls]], and divide by its positive finite Lebesgue integral to get a unit-mass $\rho$. For each $h\in C_c$, the functions $h*\rho_\varepsilon$ are smooth, compactly supported in one fixed bounded ball for $\varepsilon\le1$, and converge uniformly to $h$ ([[lem-complex-translation-and-approximate-identity-interfaces]], Statement and Proof 1.3–1.4, 2.2, 5.1). Their $L^p(w)$ error is at most the uniform error times the finite $w$-measure of that ball to the power $1/p$. Thus $C_c^\infty$ is dense for every finite $p$, including $p=1$.

[F6] Chebyshev's inequality and the dominated convergence theorem ([[thm-chebyshev-markov-inequality-for-the-integral]], [[thm-dominated-convergence]]).

[F7] $T_\varepsilon$ and $T^{(\varepsilon,N)}$ are the truncations, $T^*=\sup_{\varepsilon>0}|T_\varepsilon|$, $T^{**}=\sup_{0<\varepsilon<N}|T^{(\varepsilon,N)}|$, and $T^*\le T^{**}\le2T^*$ pointwise; the kernel obeys $|k(y)|\le A_1|y|^{-n}$ and the cancellation bound $\sup_{0<r<R}\bigl|\int_{r<|y|<R}k(y)\,dy\bigr|\le A_3$; and $T$ is the convolution operator with $W$, $L^2$-bounded with norm $B$, satisfying the off-support representation with kernel $k$ ([[def-maximal-truncated-singular-integral]], [[def-standard-holder-calderon-zygmund-kernel]], [[def-calderon-zygmund-kernel-and-principal-value-operator]]).

[F8] Polar coordinates integrate radial nonnegative kernels ([[thm-polar-coordinates-formula-for-lebesgue-measure]]). Applying the one-variable mean value theorem along coordinate line segments, componentwise, gives $|g(x-z)-g(x)|\le L_g|z|$ for a smooth compactly supported $g$ and a finite $L_g$ determined by its bounded first derivatives ([[cor-mean-value-theorem]]).

## Proof

**Proof technique:** direct.

1.1 A priori finiteness on the dense class. Fix $g\in C_c^\infty$ supported in $B(0,R_g)$. In a double truncation, split at radius one. On the part below one, subtract $g(x)$: [F8] bounds the resulting integral by $A_1L_g\int_{|z|<1}|z|^{1-n}dz=A_1L_g|S^{n-1}|$, while cancellation bounds the constant term by $A_3\|g\|_\infty$. On the part above one, use the original integrand and $|k(z)|\le A_1$ to obtain the bound $A_1\|g\|_1$. Hence $T^{**}g$ is uniformly bounded. If $|x|>2R_g+1$, the original size estimate gives $T^{**}g(x)\le2^nA_1\|g\|_1|x|^{-n}$, so $T^{**}g\le C_g(1+|x|)^{-n}$. Each finite truncation is continuous by dominated convergence, so its supremum has open level sets; the decay makes these bounded and proper. By [F3], $T^{**}g\le2^nC_gM(\mathbf1_{B(0,1)})$. The maximal bounds in [F3] therefore give finite $L^p(w)$ norm for $w\in A_p$, $p>1$, and finite weak $L^1(w)$ norm for $w\in A_1$. [F1, F3, F6, F7, F8, given, algebra]

2.1 Fix $p>1$, $w\in A_p$ and $g\in C_c^\infty$, with $A_1+A_2'+A_3>0$; if this sum vanishes the truncations are zero and the strong bound is immediate. Write $D(\mu)=w(\{T^{**}g>\mu\})$. For every $0<\gamma<\gamma_0$, splitting the level set and applying [F2] gives $D(2\mu)\le C_1\gamma^{\delta'}D(\mu)+w(\{Mg>\gamma\mu\})$. By layer cake [F4], $\|T^{**}g\|_{L^p(w)}^p=2^p\int_0^\infty p\mu^{p-1}D(2\mu)\,d\mu$. The second distribution term integrates exactly to $\gamma^{-p}\|Mg\|_{L^p(w)}^p$ by the substitution $t=\gamma\mu$; it is finite by [F3]. [F2, F3, F4, step 1.1, given, algebra]

2.2 Weak endpoint on the dense class. Let $w\in A_1$ and $g\in C_c^\infty$. If $A_1+A_2'+A_3=0$ the kernel vanishes and the bound is immediate. Otherwise, since $A_1\subseteq A_\infty$, [F2] applies; for every $\lambda>0$ the same splitting with the weak bound of [F3] in place of the strong one gives $w(\{T^{**}g>2\lambda\})\le C_1\gamma^{\delta'}w(\{T^{**}g>\lambda\})+5^n[w]_{A_1}(\gamma\lambda)^{-1}\|g\|_{L^1(w)}$. Multiplying by $2\lambda$, taking the supremum over $\lambda>0$ (finite by step 1.1) and choosing $\gamma=\tfrac12\min\{\gamma_0,(4C_1)^{-1/\delta'}\}$ gives $2C_1\gamma^{\delta'}\le\tfrac12$ and $\gamma^{-1}\le C(n,\delta,[w]_{A_1})S$, and yields $\|T^{**}g\|_{L^{1,\infty}(w)}\le C(n,\delta,[w]_{A_1})(A_1+A_2'+A_3+B)\|g\|_{L^1(w)}$; the weak $(1,1)$ bound for $T^*$ follows from $T^*\le T^{**}$. [F2, F3, step 1.1, given, algebra]

3.1 If $A_1+A_2'+A_3=0$, both maximal truncations vanish and the bounds are immediate. Otherwise, substituting step 2.1 into the layer-cake identity and using the finiteness of $\|T^{**}g\|_{L^p(w)}$ from step 1.1 gives $\|T^{**}g\|_{L^p(w)}^p\le2^pC_1\gamma^{\delta'}\|T^{**}g\|_{L^p(w)}^p+2^p(C_{n,p}[w]_{A_p}^{1/(p-1)})^p\gamma^{-p}\|g\|_{L^p(w)}^p$; choosing $\gamma=\tfrac12\min\{\gamma_0,(2^{p+1}C_1)^{-1/\delta'}\}$ gives $2^pC_1\gamma^{\delta'}\le\tfrac12$, and since $\gamma_0=c_0(A_1+A_2'+A_3)^{-1}$ and $C_1\le C_wC_n^{\delta'}(A_1+A_2'+A_3+B)^{\delta'}$ one has $\gamma^{-1}\le C'(n,p,\delta,[w]_{A_p})(A_1+A_2'+A_3+B)$; hence $\|T^{**}g\|_{L^p(w)}\le C(n,p,\delta,[w]_{A_p})(A_1+A_2'+A_3+B)\|g\|_{L^p(w)}$, and $T^*$ inherits the bound because $T^*\le T^{**}\le2T^*$ by [F7]. [F2, F3, F7, step 1.1, step 2.1, given, algebra]

4.1 Extension to $f\in L^p(w)$. Let $w\in A_p$, $1<p<\infty$, $f\in L^p(w)$, and choose $g_m\in C_c^\infty$ with $\|g_m-f\|_{L^p(w)}\to0$ by [F5]. For every $x$ and every fixed pair $0<\varepsilon<N$, [F1] gives $|T^{(\varepsilon,N)}f(x)-T^{(\varepsilon,N)}g_m(x)|\le C(n,p,[w]_{A_p})A_1w(Q(x,\varepsilon))^{-1/p}\|f-g_m\|_{L^p(w)}\to0$, so $|T^{(\varepsilon,N)}f(x)|=\lim_m|T^{(\varepsilon,N)}g_m(x)|\le\liminf_mT^{**}g_m(x)$ for each fixed pair and, taking the supremum over all pairs, $T^{**}f\le\liminf_mT^{**}g_m$ pointwise. Fatou's lemma [F4] and step 3.1 then give $\|T^{**}f\|_{L^p(w)}^p\le\liminf_m\|T^{**}g_m\|_{L^p(w)}^p\le C(n,p,\delta,[w]_{A_p})^p(A_1+A_2'+A_3+B)^p\|f\|_{L^p(w)}^p$, in particular $T^{**}f<\infty$ $w$-almost everywhere, and $T^*f\le T^{**}f\le2T^*f$ carries the same conclusions. If instead $w\in A_1$ and $f\in L^1(w)$, the same approximation gives $T^{**}f\le\liminf_mT^{**}g_m$ pointwise, hence $\{T^{**}f>\lambda\}\subseteq\liminf_m\{T^{**}g_m>\lambda\}$ for every $\lambda>0$ and $w(\{T^{**}f>\lambda\})\le\liminf_mw(\{T^{**}g_m>\lambda\})\le C(n,\delta,[w]_{A_1})(A_1+A_2'+A_3+B)\lambda^{-1}\|f\|_{L^1(w)}$ by step 2.2, so again $T^{**}f<\infty$ $w$-a.e.; $T^*$ inherits both bounds by the pointwise comparison. [F1, F4, F5, step 3.1, step 2.2, given, algebra]

5.1 Final clause. Let $\mathcal D\subseteq L^p(w)$ be a dense subspace on which $T_\varepsilon$ converges almost everywhere as $\varepsilon\downarrow0$, and let $f\in L^p(w)$. For $g\in\mathcal D$ and $\varepsilon,\varepsilon'>0$ one has $|T_\varepsilon f-T_{\varepsilon'}f|\le2T^*(f-g)+|T_\varepsilon g-T_{\varepsilon'}g|$ pointwise, so for every $\eta>0$ the set where $\limsup_{\varepsilon,\varepsilon'\downarrow0}|T_\varepsilon f-T_{\varepsilon'}f|>4\eta$ has $w$-measure at most $w(\{T^*(f-g)>\eta\})\le\eta^{-p}\|T^*(f-g)\|_{L^p(w)}^p\le C(n,p,\delta,[w]_{A_p})^p(A_1+A_2'+A_3+B)^p\eta^{-p}\|f-g\|_{L^p(w)}^p$ by Chebyshev [F6] and step 4.1. For every $\eta>0$, take the infimum of this bound over $g\in\mathcal D$; density makes the infimum zero, so the exceptional set is null; intersecting the resulting full-measure sets over $\eta=1/m$, $m\ge1$, shows that $(T_\varepsilon f)$ is $w$-almost everywhere Cauchy as $\varepsilon\downarrow0$, so the limit $Tf$ exists $w$-a.e. and is measurable as an a.e. limit of measurable functions [F1]. It obeys $|Tf|\le T^*f$ pointwise, hence $\|Tf\|_{L^p(w)}\le\|T^*f\|_{L^p(w)}\le C(n,p,\delta,[w]_{A_p})(A_1+A_2'+A_3+B)\|f\|_{L^p(w)}$ by step 4.1. [F1, F6, step 4.1, given, algebra] ∎
