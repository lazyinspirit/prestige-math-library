---
id: ex-reflexivity-of-ell-p-and-lp
kind: example
title: Reflexivity of $\ell^p$ and $L^p$
status: published
verification:
  audited: 2026-09-14
origin: pipeline
deps: [def-countable-choice, thm-reflexivity-of-lp-for-one-less-p-less-infinity, rem-ell-p-is-l-p-of-counting-measure, def-complex-lp-and-euclidean-test-function-conventions, lem-real-and-complex-c-zero-are-banach, cor-ell-one-is-not-reflexive, def-dependent-choice, def-hahn-banach-extension-principle-relative, def-reflexive-banach-space, def-c-zero-and-ell-infinity, thm-dual-of-c0-is-ell-one, cor-ell-p-duality-by-counting-measure, thm-complex-dual-of-ell-one-is-ell-infinity, lem-c-zero-is-a-closed-subspace-of-ell-infinity, thm-closed-subspaces-of-reflexive-spaces-are-reflexive]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "§4.3, sequence-space examples following Theorem 4.20, printed p. 116"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$.  For every measure space
$(S,\mathcal A,\mu)$ and every $1<p<\infty$, both real and complex
$L^p(\mu)$ are reflexive.  In particular, real and complex $\ell^p$ are
reflexive in this exponent range.

The open range is essential.  Real and complex $c_0$ are not reflexive.  If,
in addition to $\mathrm{AC}_\omega$, the ultrafilter lemma, dependent choice,
and the relative Hahn--Banach principle are assumed, then real and complex
$\ell^1$ and $\ell^\infty$ are not reflexive. In particular, counting
measure gives an $L^\infty$ endpoint counterexample.

## Facts & Assumptions

**Given:** Countable choice, an arbitrary measure space, an exponent $1<p<\infty$, and a scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$; for the $\ell^1$ endpoint clause also the ultrafilter lemma, DC, and relative HB.

[F1] Under $\mathrm{AC}_\omega$, real and complex $L^p$ over an arbitrary measure space are reflexive for $1<p<\infty$ ([[def-countable-choice]], [[thm-reflexivity-of-lp-for-one-less-p-less-infinity]]).

[F2] On counting measure on $\mathbb N$, real $L^p$ is exactly real $\ell^p$ with the same norm.  For complex functions, the complex $L^p$ definition uses the same integral of the real nonnegative modulus $|f|^p$; applying the counting-measure identity to that modulus gives $\|f\|_p^p=\sum_k|f(k)|^p$.  Since counting measure has no nonempty null set, its a.e. quotient is equality everywhere, so complex $L^p$ is isometrically complex $\ell^p$ as well ([[rem-ell-p-is-l-p-of-counting-measure]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F3] Under the ultrafilter lemma, DC, and relative HB, neither real nor complex $\ell^1$ is reflexive ([[def-dependent-choice]], [[def-hahn-banach-extension-principle-relative]], [[cor-ell-one-is-not-reflexive]]).

[F4] Real and complex $c_0$ are Banach without choice ([[lem-real-and-complex-c-zero-are-banach]]).  A Banach space is reflexive exactly when its canonical evaluation map $J_X:X\to X^{**}$ is onto ([[def-reflexive-banach-space]]).  The bilinear sequence-pairing identifications give $c_0(\mathbb K)^*=\ell^1(\mathbb K)$; the real dual of $\ell^1$ is $\ell^\infty$ by counting-measure duality, and the complex dual is $\ell^\infty(\mathbb C)$ by the complex sequence theorem ([[thm-dual-of-c0-is-ell-one]], [[cor-ell-p-duality-by-counting-measure]], [[thm-complex-dual-of-ell-one-is-ell-infinity]]).  A sequence lies in $c_0$ exactly when it tends to zero, while $\ell^\infty$ contains every bounded sequence ([[def-c-zero-and-ell-infinity]]).

[F5] $c_0(\mathbb K)$ is a closed linear subspace of $\ell^\infty(\mathbb K)$ ([[lem-c-zero-is-a-closed-subspace-of-ell-infinity]]). Under the assumed relative Hahn--Banach principle, every closed linear subspace of a reflexive real or complex Banach space is reflexive ([[thm-closed-subspaces-of-reflexive-spaces-are-reflexive]]).

## Proof

**Proof technique:** Specialize arbitrary-measure reflexivity to counting measure, then compute the canonical image of $c_0$ under the published bilinear duality identifications.

1.1 The first assertion is exactly [F1]: under $\mathrm{AC}_\omega$, both scalar versions of $L^p(\mu)$ are reflexive for every measure space and every $1<p<\infty$.  Empty and zero measure spaces are included; their $L^p$ spaces are zero and the cited theorem still applies. [F1, given]

1.2 Under the three additional principles stated for the endpoint clause, [F3] gives nonreflexivity of both real and complex $\ell^1$.  Those principles are used here only through that cited corollary. [F3, given]

1.3 The $c_0$ conclusion needs none of those additional principles.  Fix $\mathbb K$.  By [F4], $c_0(\mathbb K)$ is a Banach space.  Let $T:\ell^1(\mathbb K)\to c_0(\mathbb K)^*$ be the isometric bijection in [F4], so $T(a)(x)=\sum_na_nx_n$.  Identify $(\ell^1(\mathbb K))^*$ with $\ell^\infty(\mathbb K)$ by [F4], using the same bilinear series pairing.  For $x\in c_0$ and $a\in\ell^1$, $$J_{c_0}(x)(T(a))=T(a)(x)=\sum_na_nx_n.$$ Thus, under the composite identification $c_0^{**}\cong\ell^\infty$, the canonical image $J_{c_0}(x)$ is exactly the bounded sequence $x$.  The constant sequence $\mathbf1=(1,1,\ldots)$ belongs to $\ell^\infty$ but not to $c_0$ by [F4], so it is a concrete bidual element outside $J_{c_0}(c_0)$.  Hence $J_{c_0}$ is not onto and [F4] proves that real and complex $c_0$ are not reflexive. [F4]

Under relative Hahn--Banach, suppose $\ell^\infty(\mathbb K)$ were reflexive. Then it would be a reflexive Banach space, and [F5] would make its closed subspace $c_0(\mathbb K)$ reflexive, contradicting the preceding canonical-image calculation. Hence $\ell^\infty(\mathbb K)$ is not reflexive, for either scalar field. The ultrafilter lemma and DC in the endpoint hypotheses are needed for the selected $\ell^1$ proof, not for this $\ell^\infty$ argument. [F4, F5]

2.1 Give $\mathbb N$ counting measure.  By [F2], the real or complex $L^p$ space in step 1.1 is isometrically the corresponding $\ell^p$.  Reflexivity therefore gives the asserted sequence-space specialization. [step 1.1, F2]

For counting measure, no nonempty subset is null, so the essential-supremum norm on $L^\infty(\mathbb N)$ is the ordinary supremum norm and its a.e. equivalence is equality. Thus $L^\infty(\mathbb N;\mathbb K)$ is isometrically $\ell^\infty(\mathbb K)$; Step 1.3 supplies the claimed $L^\infty$ endpoint counterexample under its exact assumptions. [F2, F4, step 1.3]

3.1 Steps 1.1 and 2.1 prove the positive result in the entire open exponent range, while steps 1.2, 1.3, and 2.1 provide the promised failures outside it.  Countable choice is used through the arbitrary-measure $L^p$ theorem.  The ultrafilter lemma, DC, and relative HB are additionally used only for the selected $\ell^1$ proof; the direct canonical-image proof for $c_0$ is choice-free.  No assertion about reflexivity of $L^1$ or $L^\infty$ on every measure space is made. [step 1.1, step 2.1, step 1.2, step 1.3, F1, F3, F5] ∎

## Remarks

- The ultrafilter lemma is a hypothesis of the $\ell^1$ endpoint clause, not a result consumed from its proof: the clause above states the assumption in full. The library states the ultrafilter lemma, and proves it from AC, as [[thm-ultrafilter-lemma]]; this example assumes the lemma and inherits no part of that AC-based proof.

## Source notes

Teschl's sequence-space examples after Theorem 4.20 identify reflexivity of $\ell^p$ for $1<p<\infty$ and compute the canonical image of $c_0$ as the proper inclusion $c_0\subset\ell^\infty$ (printed p. 116).  The arbitrary-measure and complex-scalar claims here use the stronger local suppliers listed above.  The $\ell^1$ endpoint retains the exact assumptions of the library's selected Schur/Eberlein--Smulian proof rather than silently weakening them from the source's classical setting.
