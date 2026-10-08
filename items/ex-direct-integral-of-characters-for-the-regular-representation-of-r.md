---
id: ex-direct-integral-of-characters-for-the-regular-representation-of-r
kind: example
title: "The regular representation of the real line as a multiplicity-one integral of characters"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - def-direct-integral-of-unitary-representations
  - def-left-and-right-regular-unitary-representations
  - thm-regular-representations-are-unitary-and-strongly-continuous
  - thm-plancherel-theorem-for-lca-groups
  - lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-group
  - def-topological-group
  - lem-real-line-is-a-metric-space
  - thm-heine-borel-r
  - thm-rationals-countable
  - lem-rat-embeds-dense
  - lem-continuous-characters-of-the-real-line-are-exponentials
  - lem-unit-circle-is-a-compact-metrizable-topological-group
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-pontryagin-dual-and-compact-open-topology
  - lem-compact-open-character-group-operations-are-continuous
  - lem-character-evaluation-pairing-is-jointly-continuous
  - thm-dual-of-an-lca-group-is-locally-compact-abelian
  - def-compact-space
  - lem-second-countable-lch-spaces-are-standard-borel
  - def-standard-borel-space
  - def-finite-sigma-finite-and-semifinite-measures
  - def-left-haar-integral-and-left-haar-measure
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-radon-measure-on-rn
  - thm-lebesgue-measure-is-the-unique-normalised-translation-invariant-borel-measure
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - def-direct-integral-of-a-measurable-hilbert-field
  - def-strongly-continuous-unitary-representation
  - lem-lca-haar-measure-is-inversion-invariant
  - def-fourier-transform-on-an-lca-group
  - def-l-p-space-as-a-quotient-by-null-functions
  - thm-composition-with-borel-functions-preserves-measurability
  - def-nonnegative-lebesgue-integral
  - def-integral-of-a-nonnegative-simple-function
  - thm-lca-plancherel-isometric-extension
  - thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p
  - thm-uniqueness-of-left-haar-measure-up-to-scale
  - prop-countable-subsets-of-rn-are-lebesgue-null
dependency_level: 1
axiom_use: "Assume AC. It yields DC and countable choice via thm-choice-implies-dependent-implies-countable-choice, supplying the Fourier covariance, Plancherel, Haar-dual, and Lebesgue-measure prerequisites. The direct-integral suppliers also assume AC. The proof makes no additional selections."
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.G, Example 1.G.9, printed pp. 62–63: the regular representation as a direct integral of characters; its Appendix A.G transform convention is the positive-phase formula F(f)(χ)=∫χ(x)f(x) dm(x), printed p. 418. The local library uses the conjugate-phase transform, so this proof makes the dual-inversion correction explicit."
    - title: "Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras (author-hosted complete text)"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "Part II §§II.10.2.7–II.10.2.9, printed pp. 211–212: the abelian Fourier–Plancherel C*-algebra model and the second-countability criterion; Part III §§III.1.6.1–III.1.6.4, printed pp. 252–254: direct-integral and decomposable-field context. These passages do not supply the local Fourier-sign computation."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice. Let $G=\mathbb R$ with its usual additive locally compact topology and Borel Lebesgue Haar measure $m_{\mathbb R}$. Give the Pontryagin dual $\widehat{\mathbb R}$ its compact-open topology and a dual Haar measure $\mu$ normalized compatibly with Plancherel. For each $\chi\in\widehat{\mathbb R}$, set $H_\chi=\mathbb C$ and $\pi_\chi(t)z=\chi(t)z$. Then $(H_\chi)$ is the constant measurable Hilbert field over the standard-Borel, sigma-finite measure space $(\widehat{\mathbb R},\mu)$, and $(\pi_\chi)$ is a measurable field of strongly continuous one-dimensional unitary representations. Write $\mathcal F_-$ for the library's conjugate-phase Plancherel transform, whose $L^1\cap L^2$ formula is $\mathcal F_-f(\chi)=\int_{\mathbb R}f(t)\overline{\chi(t)}\,dm_{\mathbb R}(t)$, and define dual inversion by $(J\varphi)(\chi)=\varphi(\chi^{-1})$. Then $\mathcal F_+:=J\mathcal F_-$ is a unitary; on $L^1\cap L^2$ it has the positive-phase formula $\mathcal F_+f(\chi)=\int_{\mathbb R}f(t)\chi(t)\,dm_{\mathbb R}(t)$. Under the canonical identification $\int_{\widehat{\mathbb R}}^\oplus\mathbb C\,d\mu\cong L^2(\widehat{\mathbb R},\mu)$ it intertwines the left regular representation with the direct integral:
$$\lambda_{\mathbb R}\cong\int_{\widehat{\mathbb R}}^\oplus\pi_\chi\,d\mu(\chi).$$
The fibres have dimension one and the dual Haar measure has no point masses, giving the basic multiplicity-one continuous-spectrum model.

## Facts & Assumptions

**Given:** AC; $G=\mathbb R$ with Borel Lebesgue Haar measure; the compact-open dual and compatible dual Haar measure; and the left regular representation.

[F1] AC implies DC and countable choice, so the DC hypotheses of the Fourier and Plancherel results and the countable-choice hypotheses of the Lebesgue-measure results hold ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-dependent-choice]], [[def-countable-choice]]).

[F2] The absolute-value metric gives $\mathbb R$ its usual Hausdorff topology; rational intervals give a countable base, rational points are dense, and closed bounded intervals are compact ([[lem-real-line-is-a-metric-space]], [[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-heine-borel-r]]).

[F3] With addition and inverse, $\mathbb R$ is a topological group; the local estimates $|(x+y)-(x_0+y_0)|\le|x-x_0|+|y-y_0|$ and $|(-x)-(-x_0)|=|x-x_0|$ verify continuity ([[def-group]], [[def-topological-group]]).

[F4] Every continuous character of $\mathbb R$ has a unique form $\chi_\xi(t)=e^{2\pi i\xi t}$; $\mathbb T$ is a compact metric group, the dual carries the compact-open topology, and complex exponentiation is continuous with $e^{\pi i}=e^{-\pi i}=-1$ ([[lem-continuous-characters-of-the-real-line-are-exponentials]], [[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[def-pontryagin-dual-and-compact-open-topology]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F5] The compact-open topology on $\widehat{\mathbb R}$ makes character multiplication and inversion continuous and makes evaluation jointly continuous; the dual of an LCA group is LCH abelian, and Haar measure is finite on compact sets. Step 2.2 identifies $\widehat{\mathbb R}$ homeomorphically with $\mathbb R$, so the dual is second countable and its Borel space is standard Borel ([[lem-compact-open-character-group-operations-are-continuous]], [[lem-character-evaluation-pairing-is-jointly-continuous]], [[thm-dual-of-an-lca-group-is-locally-compact-abelian]], [[def-compact-space]], [[def-left-haar-integral-and-left-haar-measure]], [[def-finite-sigma-finite-and-semifinite-measures]], [[lem-second-countable-lch-spaces-are-standard-borel]], [[def-standard-borel-space]]).

[F6] Borel Lebesgue measure on $\mathbb R$ is a nonzero Radon measure, is translation invariant with $m_{\mathbb R}((0,1])=1$, is finite on bounded sets, and is sigma-finite; hence it is a left Haar measure ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-lebesgue-measure-is-a-radon-measure-on-rn]], [[thm-lebesgue-measure-is-the-unique-normalised-translation-invariant-borel-measure]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], [[def-left-haar-integral-and-left-haar-measure]], [[def-finite-sigma-finite-and-semifinite-measures]]).

[F7] For the constant field $H_\chi=\mathbb C$, the section $e_0(\chi)=1$ is a countable fundamental family, the direct integral is the quotient of square-integrable measurable scalar sections, and it is a Hilbert space; with the scalar Haar $L^2$ convention this gives the canonical unitary to $L^2(\widehat{\mathbb R},\mu)$ ([[def-measurable-hilbert-field-from-a-countable-fundamental-family]], [[def-direct-integral-of-a-measurable-hilbert-field]], [[thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces]], [[def-complex-haar-lp-spaces-and-compactly-supported-functions]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F8] Each $\pi_\chi$ is a strongly continuous unitary representation because $\chi$ is a continuous character, and for fixed $t$ the scalar operator field $\chi\mapsto\chi(t)$ is Borel by continuity of evaluation; the direct-integral representation is then defined by the in-run definition ([[def-strongly-continuous-unitary-representation]], [[lem-character-evaluation-pairing-is-jointly-continuous]], [[def-direct-integral-of-unitary-representations]]).

[F9] The library Fourier transform uses the conjugate phase and satisfies $\widehat{T_tf}(\chi)=\overline{\chi(t)}\widehat f(\chi)$ for $f\in L^1$; its Plancherel extension agrees with this transform on $L^1\cap L^2$, is unitary under the compatible dual Haar normalization, and finite-measure-support simple functions are dense in $L^2$ ([[def-fourier-transform-on-an-lca-group]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution]], [[thm-lca-plancherel-isometric-extension]], [[thm-plancherel-theorem-for-lca-groups]], [[thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p]]).

[F10] Inversion on the LCA dual is Borel and preserves Haar measure; composing by it preserves Borel measurability, and the nonnegative integral is the supremum of the simple integrals of its simple minorants ([[lem-lca-haar-measure-is-inversion-invariant]], [[thm-composition-with-borel-functions-preserves-measurability]], [[def-nonnegative-lebesgue-integral]], [[def-integral-of-a-nonnegative-simple-function]]).

[F11] The left regular representation is given by $[\lambda(t)f](x)=f(x-t)$ on the additive real line and is a strongly continuous unitary representation ([[def-left-and-right-regular-unitary-representations]], [[thm-regular-representations-are-unitary-and-strongly-continuous]]).

[F12] Any two left Haar measures on an LCH group are positive scalar multiples; every countable subset of $\mathbb R$ is Lebesgue null ([[thm-uniqueness-of-left-haar-measure-up-to-scale]], [[prop-countable-subsets-of-rn-are-lebesgue-null]]).

## Proof

**Proof technique:** identify the dual explicitly, apply Plancherel in the library convention, then compose with inversion.

1.1 By [F1], the assumed AC supplies both DC and countable choice. Thus the DC hypotheses in [F9] and the countable-choice hypotheses in [F6] are met; the direct-integral assumptions are also covered by the given AC. [F1, F6, F9, given]

1.2 The metric and compact intervals in [F2] make $\mathbb R$ Hausdorff and locally compact, and rational intervals give second countability. With the group operations verified in [F3], $\mathbb R$ is a second-countable LCA group. Therefore [F5] applies to show that $\widehat{\mathbb R}$ is LCH abelian. [F2, F3, F5, given]

1.3 Let $J$ initially act on Borel representatives by $Jf(\chi)=f(\chi^{-1})$. Inversion preserves the dual Haar measure by [F10], and it is Borel by [F5], so composition preserves measurability and null equivalence. For every nonnegative Borel function $g$, the map $s\mapsto s\circ\iota$ bijects simple minorants of $g$ and $g\circ\iota$; their simple integrals agree because inversion preserves the measures of their level sets. Taking suprema in the definition of the nonnegative integral [F10] gives $\int g\circ\iota\,d\mu=\int g\,d\mu$. Applying this to $g=|f|^2$ proves that $J$ is a linear isometry on $L^2$. Since inversion is involutive, $J^2=I$, so $J$ is unitary. Put $\mathcal F_+:=J\mathcal F_-$; it is unitary by [F9]. For every $f$ and $t$, $$JM_{\overline{\chi(t)}}f(\chi)=\overline{\chi^{-1}(t)}f(\chi^{-1})=\chi(t)Jf(\chi).$$ [F4, F5, F9, F10, F7, algebra]

2.1 By Step 1.2, the LCA hypotheses in [F9] hold. Let $s$ be a simple function with finite-measure support. It lies in $L^1\cap L^2$; [F9] says the $L^2$ Plancherel transform $\mathcal F_-$ agrees there with the integral Fourier transform. Since $\lambda(t)s=T_ts$, the Fourier translation formula in [F9] gives $\mathcal F_-\lambda(t)s=M_{\overline{\chi(t)}}\mathcal F_-s$. Such simple functions are dense in $L^2$ by [F9], while $\lambda(t)$, $M_{\overline{\chi(t)}}$ and $\mathcal F_-$ are bounded by [F4, F9, F11], so the equality extends to every $f\in L^2(\mathbb R)$. [F4, F9, F11, step 1.2, given]

2.2 By [F4], $\Phi:\mathbb R\to\widehat{\mathbb R}$, $\Phi(\xi)=\chi_\xi$, is a bijection and a group homomorphism. The evaluation formula is jointly continuous: near $(\xi_0,t_0)$, $|\xi t-\xi_0t_0|\le|\xi|\,|t-t_0|+|t_0|\,|\xi-\xi_0|$, and continuity of the complex exponential in [F4] then gives continuity of $e^{2\pi i\xi t}$. For a subbasic compact-open neighborhood $S(K,V)=\{\chi:\chi[K]\subseteq V\}$ containing $\chi_{\xi_0}$, this joint continuity and compactness of $K$ give finitely many product neighborhoods covering $\{\xi_0\}\times K$ on which the exponential remains in $V$; intersecting their parameter neighborhoods gives an interval around $\xi_0$ mapped into $S(K,V)$. The inverse is continuous at the identity character: for $\delta>0$, put $K_\delta=[-1/(2\delta),1/(2\delta)]$ and $V_0=\{z\in\mathbb T:|z-1|<1\}$. If $\chi_\xi[K_\delta]\subseteq V_0$ and $|\xi|\ge\delta$, then $t=1/(2|\xi|)\in K_\delta$ and $\chi_\xi(t)=e^{\pm\pi i}=-1\notin V_0$, a contradiction. Continuity of translations in the dual group from [F5] gives continuity of $\Phi^{-1}$ everywhere. Hence $\Phi$ is a homeomorphism. [F4, F5, F2, step 1.2, construct]

3.1 The homeomorphism in Step 2.2 makes $\widehat{\mathbb R}$ second countable; it is LCH by Step 1.2. Thus [F5] gives its standard-Borel structure. The compact sets $K_n=\Phi([-n,n])$ cover the dual, and [F5] gives $\mu(K_n)<\infty$; hence $\mu$ is sigma-finite by [F5]. [F5, step 1.2, step 2.2]

4.1 Set $e_0(\chi)=1$ and $e_n(\chi)=0$ for $n>0$. Its Gram coefficients are constant and its values span $\mathbb C$, so [F7] makes $(H_\chi)$ the constant measurable Hilbert field. Every $\pi_\chi$ is a unitary homomorphism and is strongly continuous by [F4, F8]. For fixed $t$, the scalar field $\chi\mapsto\chi(t)$ is continuous by [F8], hence weakly measurable. The standard-Borel sigma-finite base was established in Step 3.1, so the in-run definition [F8] applies and forms $\Pi=\int^\oplus\pi_\chi\,d\mu(\chi)$. [F4, F7, F8, step 3.1, given]

5.1 The map $\mathcal V:L^2(\widehat{\mathbb R},\mu)\to\int_{\widehat{\mathbb R}}^\oplus\mathbb C\,d\mu$, $\mathcal V f=[\chi\mapsto f(\chi)]$, is a unitary by the quotient definition in [F7]. From the pointwise definition of the direct-integral representation in [F8], $\mathcal V^{-1}\Pi(t)\mathcal V$ is multiplication by $\chi\mapsto\chi(t)$. [F7, F8, step 4.1]

6.1 By Steps 1.3 and 2.1, $\mathcal F_+=J\mathcal F_-$ intertwines $\lambda(t)$ with multiplication by $\chi(t)$. By Step 5.1 this is $\Pi(t)$ under the canonical direct-integral identification, so $\mathcal V\mathcal F_+$ intertwines the left regular representation with $\int^\oplus\pi_\chi\,d\mu$. Each fibre is exactly $\mathbb C$, and [F4] parametrizes each character exactly once. The vector $\mathbf1_{(0,1]}$ is nonzero in $L^2(\mathbb R)$ because $m_{\mathbb R}((0,1])=1$ by [F6], so the decomposition is not the zero Hilbert space. The homeomorphic group isomorphism $\Phi$ pulls $\mu$ back to a nonzero regular Borel measure finite on compact sets and invariant under translations, hence to a left Haar measure on $\mathbb R$ by [F6]. By [F12] it is a positive multiple of Lebesgue measure; its countable subsets are null, so the parameter measure has no point masses. This is the stated multiplicity-one continuous-spectrum model. [F4, F5, F6, F12, step 1.2, step 1.3, step 2.1, step 2.2, step 5.1, algebra] ∎

## Remarks

Open supplier obligation: [[def-direct-integral-of-unitary-representations]] is the in-run supplier of this item, [[ex-direct-integral-of-characters-for-the-regular-representation-of-r]]. This proof provisionally uses it in Steps 4.1 and 5.1 to form the field's direct-integral representation and identify its pointwise multiplication action. The supplier remains draft and has no current Step 3 item decision, so reconcile its completed authoring and actual use before accepting this consumer; this item's decision must remain escalated until then.
