---
id: "lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes"
kind: "lemma"
title: "Finite chart localization gives choice-free integration and compact Stokes"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-chart-bump-at-a-point-with-prescribed-support","thm-heine-borel-rn","thm-compactness-under-continuous-maps","def-the-standard-smooth-step-function","lem-compactness-of-a-subspace-is-ambient","def-integral-of-an-oriented-chart-supported-top-form","cor-change-of-variables-for-compactly-supported-functions","thm-multidimensional-integral-properties","thm-jordan-fubini-by-sections","thm-newton-leibniz-with-interior-derivative","lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary","thm-continuous-on-a-rectangle-is-riemann-integrable"]
sources:
  references:
    - title: Robbin-Salamon, Introduction to Differential Topology, section5.2.2
        Lemma5.2.10 and section5.2.3 Theorem5.2.12; finite-support
        specialization
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $M^n$ be an oriented smooth manifold without boundary. For each compact set $K\subseteq M$ there are finitely many nonnegative smooth functions $\chi_i$ with compact supports contained in connected coordinate domains $U_i$, such that $\sum_i\chi_i=1$ on a neighbourhood of $K$. For $\omega\in\Omega_c^n(M)$ define
$$\mathcal I_M(\omega)=\sum_i I_{\phi_i}(\chi_i\omega)\quad(K=\operatorname{supp}\omega),$$
using the signed chart integrals. This value is independent of the finite functions and charts. It defines a linear functional, is local under restriction to an open set containing the support, and for $n\ge1$ satisfies
$$\mathcal I_M(d\eta)=0\qquad(\eta\in\Omega_c^{n-1}(M)).$$
For $n=0$ it is the finite signed sum $\sum_{p\in\operatorname{supp}\omega}\varepsilon(p)\omega(p)$. All assertions are choice-free: no partition on the entire manifold is required.

## Facts & Assumptions

[F1] [[lem-chart-bump-at-a-point-with-prescribed-support]] supplies a bump at a specified point with support in any prescribed open set. [[thm-heine-borel-rn]] and [[thm-compactness-under-continuous-maps]] make the image under an inverse chart of a closed coordinate ball compact.

[F2] [[def-the-standard-smooth-step-function]] supplies the smooth function $s$ equal to zero at arguments at most zero and to one at arguments at least one, with values in $[0,1]$.

[F3] [[lem-compactness-of-a-subspace-is-ambient]] permits finite subcovers of compact sets by indexed ambient opens, without choice.

[F4] [[def-integral-of-an-oriented-chart-supported-top-form]] defines the signed chart integral, its compactly supported coefficient and the signed point evaluation.

[F5] [[cor-change-of-variables-for-compactly-supported-functions]] gives change of variables under an injective $C^1$ map with invertible derivative on a Euclidean-open domain, for a compact coefficient supported inside its image.

[F6] [[thm-multidimensional-integral-properties]] gives finite linearity of the Riemann integral.

[F7] [[thm-jordan-fubini-by-sections]] gives iterated integrals of the smooth compactly supported coefficients on a bounding rectangle.

[F8] [[thm-newton-leibniz-with-interior-derivative]] integrates a continuous partial derivative along a nondegenerate interval to its endpoint difference.

[F9] [[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]] gives the local derivative, its linearity and pullback formula; only its boundaryless case is used here.

[F10] [[thm-continuous-on-a-rectangle-is-riemann-integrable]] makes every continuous coefficient and partial derivative integrable on a bounding rectangle.

## Proof

**Given:** $M$ as stated and a compact set $K$. All chart supports below are compact subsets of the chart domain, not merely closed supports reaching its edge.

1.1 For every $p\in K$, take a chart about $p$ and choose concentric coordinate balls $B_r\subseteq\overline B_r\subseteq B_R$ whose closed larger ball lies in the chart image. Put $U_p=\phi^{-1}(B_r)$; it is connected, and its closure lies in the compact set $\phi^{-1}(\overline B_r)$ by [F1]. Apply the bump lemma in [F1] with prescribed open set $U_p$. Its support is closed, lies in $U_p$, and is therefore a closed subset of the displayed compact chart-ball image, hence compact by the ambient-cover criterion [F3]. Consider the set of all such chart-and-bump tuples and their open sets $V_b=\{b>1/2\}$. They cover $K$ without selecting a tuple as a function of $p$. By [F3] retain finitely many tuples, with bumps $b_1,\ldots,b_m$. For $K=\varnothing$ use no tuples. In dimension zero use the singleton chart, whose image and support are compact. [F1, F3, given]

1.2 First establish the comparison of chart integrals without a global partition. Suppose a top form $\zeta$ has compact support contained in two connected charts $\phi,\psi$. On their overlap let $G=\psi\phi^{-1}$. It is a diffeomorphism between Euclidean-open sets; its inverse is the specified reverse chart transition. If $f_x,f_y$ are the two top coefficients, [F9] gives $f_x=(f_y\circ G)\det DG$. The orientation signs satisfy $\sigma_\phi\det DG=\sigma_\psi|\det DG|$ by the signed-frame convention of [F4]. The zero-extended target coefficient has compact support inside $\psi(U\cap V)$, and its transformed zero extension is the source coefficient. Therefore [F5] gives $I_\phi(\zeta)=I_\psi(\zeta)$ with precisely these signs. No localization of the transition is necessary on a boundaryless manifold. When $n=0$, a connected chart is one point and both values are the same signed evaluation in [F4]. [F4, F5, F9, given]

2.1 In the nonempty case put $B=\sum_i b_i$ and $\theta=s(4B-1)$. Since $B>1/2$ on $\bigcup_iV_{b_i}$, $\theta=1$ on this neighbourhood of $K$. Define $\chi_i=\theta b_i/B$ on $B>0$ and zero on $B=0$. This is smooth, because $\theta=0$ on $B\le1/4$, so the quotient is identically zero on a whole neighbourhood of the potential denominator-zero set. Each $\chi_i$ is nonnegative, has support in $\operatorname{supp}b_i$, and $\sum_i\chi_i=\theta$. The supports are closed subsets of the compact supports of the $b_i$, so compact by the ambient-cover criterion [F3]: add the open complement of the smaller closed support to a covering family and then discard it from a finite subcover. This proves the finite localization assertion. [F1, F2, F3, step 1.1]

3.1 Given two finite localizations $(\chi_i,\phi_i)$ and $(\tau_j,\psi_j)$ near $\operatorname{supp}\omega$, the identities $\chi_i\omega=\sum_j\chi_i\tau_j\omega$ and $\tau_j\omega=\sum_i\chi_i\tau_j\omega$ hold globally: on the support both sums of cutoffs equal one, and off it $\omega=0$. Each product has compact support in the intersection of its two chart domains. By step 1.2 its chart integrals agree, so finite linearity [F6] gives $$\sum_i I_{\phi_i}(\chi_i\omega)=\sum_{i,j}I_{\phi_i}(\chi_i\tau_j\omega)=\sum_{i,j}I_{\psi_j}(\chi_i\tau_j\omega)=\sum_jI_{\psi_j}(\tau_j\omega).$$ In dimension zero the same calculation is finite scalar distributivity. Thus $\mathcal I_M$ is well defined. In particular, for a chart-supported form its value is its single chart integral: insert a cutoff identically one near its compact support using step 2.1 inside that chart, and compare. [F4, F6, step 2.1, step 1.2]

4.1 For two forms, their compact supports have compact union by [F3], taking finite subcovers of each and uniting them. Use a single localization near this union; [F6] then proves $\mathcal I_M(a\omega+b\zeta)=a\mathcal I_M(\omega)+b\mathcal I_M(\zeta)$, with step 3.1 removing the temporary localization. If an open $U$ contains the support, make the tuples in step 1.1 lie in $U$. The same finite chart integrals compute the restriction integral on $U$ and the integral on $M$, and step 3.1 proves locality. Compactness of the support in either ambient follows from [F3] and its unchanged subspace topology. [F3, F4, F6, step 1.1, step 2.1, step 3.1]

4.2 Suppose $n\ge2$ and $\eta$ has compact support in one chart. Its coordinate form extends smoothly by zero to $\mathbb R^n$: off the compact coordinate support it vanishes, and that support is contained in the chart image, so the chart image and its complement-of-support open set give agreeing smooth expressions. Write this extension as $$\widetilde\eta=\sum_{j=1}^n(-1)^{j-1}f_j\,dx_1\wedge\cdots\wedge\widehat{dx_j}\wedge\cdots\wedge dx_n.$$ By [F9], its derivative coefficient is $\sum_j\partial_j f_j$. The increasing open cubes cover the finite union of the compact coefficient supports, so [F3] gives a large bounding rectangle with every $f_j$ supported strictly inside it. Its coefficients and derivatives are smooth and therefore integrable there by [F10], as are all their coordinate sections. For fixed other coordinates, [F8] gives $\int\partial_j f_j\,dx_j=0$, because both endpoint values vanish. Applying [F7] to these sections and summing by [F6] yields $\int_{\mathbb R^n}d\widetilde\eta=0$. The chart sign in [F4] only multiplies zero, and step 3.1 proves $\mathcal I_M(d\eta)=0$. For $n=1$ the same calculation is just [F8] for a compactly supported function, so no zero-dimensional Fubini assertion is used. [F3, F4, F6, F7, F8, F9, F10, step 3.1]

5.1 For an arbitrary compactly supported $(n-1)$-form, use step 2.1 near its support to write $\eta=\sum_i\chi_i\eta$. Each summand has compact support in one chart, and linearity of $d$ gives $d\eta=\sum_i d(\chi_i\eta)$. Each term has integral zero by step 4.2; finite linearity from step 4.1 proves $\mathcal I_M(d\eta)=0$. The cutoff derivatives cause no omitted terms: differentiating the exact finite identity for $\eta$ includes all of them. [F9, step 2.1, step 4.1, step 4.2]

6.1 For $n=0$ the singleton cover and [F3] make every compact support finite. Chart integration [F4] then gives precisely the asserted signed sum, independent of its listing. The derivative-zero clause is asserted only for $n\ge1$; with the zero negative-degree convention it also has a vacuous zero input at $n=0$. Empty support, empty manifold and zero forms give empty sums and value zero. The first derivative calculation includes all rectangle endpoints, and no connectedness, compactness of $M$, or infinite choice was assumed. Only finitely many tuples over one compact support and the explicit normalized cutoffs were used. [F3, F4, step 1.1, step 2.1, step 3.1, step 4.2, step 5.1] ∎
