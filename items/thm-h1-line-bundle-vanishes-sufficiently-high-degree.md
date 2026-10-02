---
id: thm-h1-line-bundle-vanishes-sufficiently-high-degree
kind: theorem
title: "Vanishing of H^1 in a fixed ample direction"
status: published
origin: pipeline
deps:
  - cor-smooth-proper-curve-finite-map-projective-line
  - def-algebraic-curve-over-field
  - def-ample-invertible-sheaf
  - def-axiom-of-choice
  - def-dependent-choice
  - def-cartier-divisor
  - def-coherent-module-scheme
  - def-divisor-smooth-proper-curve
  - def-finite-morphism-schemes
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-little-l-divisor
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-noetherian-and-noetherian-scheme
  - def-projective-morphism-pre-proj
  - def-riemann-roch-space-of-divisor
  - def-proper-morphism
  - def-sheaf-cohomology-derived-global-sections
  - def-twist-quasi-coherent-sheaf-projective
  - def-very-ample-invertible-sheaf-relative
  - lem-ample-pullback-finite-morphism
  - lem-cartier-divisor-addition-tensor
  - lem-cartier-divisor-sheaf-invertible
  - lem-field-is-noetherian
  - lem-h1-stabilizes-downward-point-removal
  - lem-riemann-roch-space-finite-dimensional
  - lem-very-ample-implies-ample
  - thm-ample-powers-very-ample-proper-base
  - thm-cartier-weil-divisors-curves-agree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-noetherian-ring-has-noetherian-spectrum
  - thm-serre-vanishing
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 18.5 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice as inherited from Serre vanishing and the
ample-powers theorem. It also supplies the Dependent Choice premise of the
curve Cartier-to-Weil result through
[[thm-choice-implies-dependent-implies-countable-choice]]. Let $k$ be a field and let $C$ be a smooth proper
geometrically integral curve over $k$ ([[def-algebraic-curve-over-field]]).
Let $\varphi:C\to\mathbb P^1_k$ be a finite $k$-morphism (such a morphism
exists by [[cor-smooth-proper-curve-finite-map-projective-line]]) and let $A$
be an effective divisor on $C$ with $\mathcal O_C(A)\cong\varphi^*\mathcal
O_{\mathbb P^1_k}(1)$ ([[def-divisor-smooth-proper-curve]]). Write
$L=\mathcal O_C(A)$ ([[def-little-l-divisor]]).

Then for every divisor $D_0$ on $C$ there is an integer $n_0$ such that
$$H^1\bigl(C,\mathcal O_C(D_0+nA+E)\bigr)=0 \qquad\text{for every }n\ge n_0\text{ and every effective divisor }E,$$
equivalently $h^1(D)=0$ for every divisor $D$ with $D\ge D_0+n_0A$. The bound
$n_0$ may depend on $D_0$ and on the fixed morphism $\varphi$, but not on $E$
or on the degree of $E$. No Serre duality and no Riemann-Roch threshold
$2g-2$ are used.

The divisor-to-sheaf interface used below first identifies the Weil divisors
$D_0$ and $A$ as Cartier divisors, constructs their sheaves, and applies the
Cartier addition/tensor isomorphism; the actual interfaces and their uses are
recorded in [F6]. The finite morphism and pole-divisor realization in [F1]
are the stated interface of
[[cor-smooth-proper-curve-finite-map-projective-line]]. The proof uses the
closed H-very ample witness from [F4] and the established affine-base
implication in [F9] for Serre vanishing, and uses
[[lem-riemann-roch-space-finite-dimensional]] to establish coherence of
$\mathcal O_C(D_0)$ as recorded in [F10].

## Facts & Assumptions

**Given:** a field $k$, a smooth proper geometrically integral curve $C$ over $k$, a finite $k$-morphism $\varphi:C\to\mathbb P^1_k$, an effective divisor $A$ on $C$ with $\mathcal O_C(A)\cong\varphi^*\mathcal O(1)$, the invertible sheaf $L=\mathcal O_C(A)$, and a divisor $D_0$.

[F1] The morphism and its twist: every smooth proper geometrically integral curve over $k$ admits a finite locally free $k$-morphism to $\mathbb P^1_k$, and for a nonconstant $f\in k(C)^{\times}$ with pole divisor $A=(f)_\infty$ the sheaf $\mathcal O_C(A)$ is isomorphic to $\varphi_f^*\mathcal O_{\mathbb P^1_k}(1)$ ([[cor-smooth-proper-curve-finite-map-projective-line]], [[def-finite-morphism-schemes]]).

[F2] Ampleness of the twisting sheaf on $\mathbb P^1_k$: the identity of $\mathbb P^1_k$ over $\operatorname{Spec}k$ is a closed immersion pulling $\mathcal O(1)$ back to $\mathcal O(1)$, so $\mathcal O(1)$ is H-very ample relative to $\operatorname{Spec}k$; since the base is affine, [[lem-very-ample-implies-ample]] makes $\mathcal O(1)$ ample in the absolute sense of [[def-ample-invertible-sheaf]] ([[def-very-ample-invertible-sheaf-relative]], [[def-twist-quasi-coherent-sheaf-projective]], [[def-invertible-sheaf]]).

[F3] Ampleness pulls back along finite morphisms: the pullback $g^*L$ of an ample invertible sheaf along a finite morphism $g$ is ample ([[lem-ample-pullback-finite-morphism]]).

[F4] Ample powers are closed H-very ample over a proper finite-type base: for a proper finite-type morphism $X\to S$ with $S$ Noetherian and $L$ an ample invertible $\mathcal O_X$-module, there is $d_0\ge1$ such that $L^{\otimes d}$ is closed H-very ample relative to $S$ for every $d\ge d_0$, witnessed by a closed immersion into a relative projective space with $\mathcal O(1)$ pulling back to $L^{\otimes d}$ ([[thm-ample-powers-very-ample-proper-base]], [[def-locally-noetherian-and-noetherian-scheme]], [[def-proper-morphism]], [[def-locally-finite-type-and-finite-type-morphism]], [[def-very-ample-invertible-sheaf-relative]]).

[F5] Serre vanishing: for a Noetherian commutative ring $A$, a scheme $X$ projective over $A$ in the finite-dimensional H-projective convention, an ample invertible $\mathcal O_X$-module $L$ and a coherent $\mathcal O_X$-module $\mathcal F$, there is $m_0$ with $H^q(X,\mathcal F\otimes L^{\otimes m})=0$ for every $q>0$ and every $m\ge m_0$ ([[thm-serre-vanishing]], [[def-projective-morphism-pre-proj]], [[def-coherent-module-scheme]], [[def-sheaf-cohomology-derived-global-sections]]); a field is Noetherian and its spectrum is Noetherian ([[lem-field-is-noetherian]], [[thm-noetherian-ring-has-noetherian-spectrum]]).

[F6] Divisor and tensor dictionary. The divisors $D_0$ and $A$ on the smooth curve are Weil divisors. The curve Cartier-to-Weil result [[thm-cartier-weil-divisors-curves-agree]] identifies them as Cartier divisors; [[def-invertible-sheaf-of-cartier-divisor]] constructs their associated sheaves, and [[lem-cartier-divisor-sheaf-invertible]] proves those sheaves invertible. For every integer $n\ge0$, repeated application of [[lem-cartier-divisor-addition-tensor]] gives $\mathcal O_C(D_0+nA)\cong\mathcal O_C(D_0)\otimes\mathcal O_C(A)^{\otimes n}\cong\mathcal O_C(D_0)\otimes L^{\otimes n}$. The rational-section identification with $L(D_0+nA)$ is the one in [[def-riemann-roch-space-of-divisor]], using [[thm-line-bundle-rational-section-cartier-divisor]]. This is the actual interface used in step 4.1.

[F7] Monotonicity of $h^1$: for every divisor $D$ and every effective divisor $E\ge0$ one has $h^1(D+E)\le h^1(D)$, where $h^1(D)=\dim_kH^1(C,\mathcal O_C(D))$; equivalently $h^1$ is antitone in the divisor ([[lem-h1-stabilizes-downward-point-removal]], [[def-little-l-divisor]]).

[F8] The Axiom of Choice is inherited from the ample-powers theorem [F4] and Serre vanishing [F5]. In ZF, AC implies DC by [[thm-choice-implies-dependent-implies-countable-choice]], so the stated assumption supplies the Dependent Choice premise of the curve Cartier-to-Weil result in [F6] ([[def-axiom-of-choice]], [[def-dependent-choice]]). Apart from the integers supplied by the cited existence theorems, the proof makes no further selection.

[F9] A closed H-very ample invertible sheaf on a scheme over the affine base $\operatorname{Spec}k$ is ample in the absolute sense by [[lem-very-ample-implies-ample]]; the implication applies to the closed immersion and pulled-back $\mathcal O(1)$ witness supplied in step 2.1. This is the route establishing ampleness of $L^{\otimes d}$ for Serre vanishing, rather than an assumed closure of ampleness under tensor powers.

[F10] The actual lemma [[lem-riemann-roch-space-finite-dimensional]] applies to the given smooth proper geometrically integral curve and divisor $D_0$; it proves that $\mathcal O_C(D_0)$ is coherent. This supplies the coherent-sheaf hypothesis of [F5] in step 3.1.

## Proof

**Proof technique:** pull the ample twisting sheaf on $\mathbb P^1_k$ back along the finite morphism, use that an ample power of the pullback embeds $C$ projectively, apply Serre vanishing to the twist of $\mathcal O_C(D_0)$, and remove the extra effective summand by monotonicity of $h^1$.

1.1 Ampleness of $L$. By [F2] the twisting sheaf $\mathcal O(1)$ is ample on $\mathbb P^1_k$, and by the hypothesis $\varphi$ is a finite $k$-morphism with $\mathcal O_C(A)\cong\varphi^*\mathcal O(1)$; hence $L=\mathcal O_C(A)$ is isomorphic to the pullback of an ample invertible sheaf along a finite morphism, and [F3] makes $L$ ample. [F1, F2, F3]

2.1 An ample power embeds $C$ projectively. The curve $C$ is proper and of finite type over the field $k$ by [F1], so the structure morphism $C\to\operatorname{Spec}k$ is proper and of finite type, and $\operatorname{Spec}k$ is Noetherian by [F5]; with $L$ ample by step 1.1, [F4] provides an integer $d\ge1$ such that $L^{\otimes d}$ is closed H-very ample relative to $\operatorname{Spec}k$, witnessed by a closed immersion $C\hookrightarrow\mathbb P^N_k$ with $\mathcal O(1)$ pulling back to $L^{\otimes d}$. In particular $C$ is projective over the Noetherian ring $k$ in the H-projective convention of [F5]. [F1, F4, F5, step 1.1]

3.1 Serre vanishing for the twist by a power of $L$. The field $k$ and $\operatorname{Spec}k$ are Noetherian by [F5]. The sheaf $\mathcal O_C(D_0)$ is coherent by [F10], and the closed H-very ample witness for $L^{\otimes d}$ from step 2.1 makes $L^{\otimes d}$ ample by [F9]. Applying [F5] to the projective $k$-scheme $C$, this ample invertible sheaf and the coherent sheaf $\mathcal O_C(D_0)$ gives an integer $m_1$ such that $$H^1\bigl(C,\mathcal O_C(D_0)\otimes_{\mathcal O_C}L^{\otimes dm}\bigr)=0\qquad\text{for every }m\ge m_1.$$ Set $m_0:=\max(m_1,0)$. Since the vanishing holds for every $m\ge m_1$, it holds for every $m\ge m_0$, and now all exponents used in the divisor translation are nonnegative. [F5, F9, F10, step 2.1]

4.1 Translation to divisors. By [F6] one has $\mathcal O_C(D_0)\otimes L^{\otimes dm}\cong\mathcal O_C(D_0+dmA)$ for every $m\ge0$, with $L=\mathcal O_C(A)$; since $m_0\ge0$, step 3.1 gives $H^1(C,\mathcal O_C(D_0+dmA))=0$ for every $m\ge m_0$. [F6, step 3.1]

5.1 The stated form. Put $n_0:=dm_0$, which is nonnegative since $d\ge1$ and $m_0\ge0$. By step 4.1 one has $H^1(C,\mathcal O_C(D_0+n_0A))=0$, and this vanishing spreads to all $n\ge n_0$ and all effective $E$: write $n=n_0+r$ with $r\ge0$, so $D_0+nA+E=D_0+n_0A+(rA+E)$, where $rA+E$ is effective because $A$ and $E$ are effective; by [F7] applied to the divisor $D_0+n_0A$ and the effective divisor $rA+E$ one gets $h^1(D_0+nA+E)\le h^1(D_0+n_0A)=0$. Thus $H^1(C,\mathcal O_C(D_0+nA+E))=0$ for every $n\ge n_0$ and every effective $E$. [F1, F7, step 4.1]

6.1 The equivalent form. If $D$ is a divisor with $D\ge D_0+n_0A$, then $E:=D-(D_0+n_0A)$ has nonnegative coefficients, that is, $E$ is effective, and $D=D_0+n_0A+E$; step 5.1 at $n=n_0$ gives $h^1(D)=0$. Conversely, if $h^1(D)=0$ for every $D\ge D_0+n_0A$, then for every $n\ge n_0$ and every effective $E$ the divisor $D_0+nA+E$ satisfies $D_0+nA+E\ge D_0+n_0A$, so $h^1(D_0+nA+E)=0$; the two formulations are therefore equivalent. [F7, step 5.1]

7.1 Conclusion and choice accounting. Step 1.1 makes $L=\mathcal O_C(A)$ ample as the pullback of the ample twisting sheaf of $\mathbb P^1_k$ along the finite morphism $\varphi$; step 2.1 exhibits $C$ as projective over the Noetherian ring $k$ through a closed H-very ample witness; step 3.1 applies Serre vanishing to the coherent twist by the ample sheaf $L^{\otimes d}$ and replaces its bound by $m_0\ge0$; step 4.1 translates that vanishing to the divisors $D_0+dmA$; and steps 5.1 and 6.1 spread it to all $n\ge n_0$ and all effective summands $E$, proving both formulations with $n_0=dm_0$. The integers $d$ and $m_0$ depend only on the morphism $\varphi$ (through $L$ and the closed immersion witness) and on $D_0$, not on $E$ or on $\deg_kE$. No Serre duality and no threshold $2g-2$ is used anywhere; the Choice premise used by the Cartier-to-Weil supplier is explicitly obtained from the stated Axiom of Choice by [F8]. [F1, F4, F5, F6, F7, F8, F9, F10, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1] ∎
