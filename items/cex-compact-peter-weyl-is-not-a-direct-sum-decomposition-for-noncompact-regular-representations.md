---
id: cex-compact-peter-weyl-is-not-a-direct-sum-decomposition-for-noncompact-regular-representations
kind: counterexample
title: The regular representation of R is not a Hilbert direct sum of irreducibles
deps:
- lem-an-l-two-class-invariant-in-modulus-under-all-translations-of-the-line-is-zero
- def-hilbert-direct-sum-of-unitary-representations
- def-left-and-right-regular-unitary-representations
- thm-regular-representations-are-unitary-and-strongly-continuous
- def-lebesgue-measure-and-the-lebesgue-sigma-algebra
- thm-lebesgue-measure-is-a-complete-measure
- def-half-open-box
- thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
- thm-lebesgue-measure-is-a-radon-measure-on-rn
- prop-compact-discrete-and-abelian-groups-are-unimodular
- thm-schurs-lemma-for-unitary-representations
- def-strongly-continuous-unitary-representation
- def-matrix-coefficient-of-a-unitary-representation
- def-complex-haar-lp-spaces-and-compactly-supported-functions
- def-axiom-of-choice
- thm-plancherel
- thm-dominated-convergence
- thm-complex-exponential-addition-and-real-extension
- thm-fourier-translation-modulation-dilation-and-reflection-laws
- lem-schwartz-space-is-dense-in-l-two
- thm-l-one-l-two-agreement-of-fourier-transform
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for cex-compact-peter-weyl-is-not-a-direct-sum-decomposition-for-noncompact-regular-representations and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-11; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"59cdc6eaa424a6faf52abd60178120cf8214ff6f07df6f70e3060611021e4ece","evidence":["research/frontier-38-owner-30-reader-11.md","research/frontier-38-owner-30-reader-findings-11.json","research/frontier-38-owner-30-dispatch/reader-reader-11.result.json","research/frontier-38-owner-30-step5-hash-11-post-5a.json","research/frontier-38-owner-30-alpha-batch-11-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-11.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/cex-compact-peter-weyl-is-not-a-direct-sum-decomposition-for-noncompact-regular-representations.md","historical_raw_sha256":"7d0e49580574712589f248e8e3a84ef6bf225de35b70e2975a6673d84a1ce492","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:37:53.223Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft, 338 pp.)
    url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    locator: "Ch. 3 §3.4.3, Example 3.4.15 (the regular representation of R contains no irreducible subrepresentation), printed p. 119; Ch. 7 §7.2, printed p. 287; §7.3 direct integrals (7.4), printed pp. 288–289"
status: published
origin: pipeline
---
## Statement refuted

**Statement refuted.** The compact-group Peter–Weyl conclusion — that every continuous unitary representation of a compact group is a Hilbert direct sum of finite-dimensional irreducible unitary subrepresentations — extends to every locally compact group; in particular the left regular representation of $\mathbb R$ on $L^2(\mathbb R,\lambda_1)$ is a Hilbert direct sum of finite-dimensional irreducible unitary subrepresentations.

## Facts & Assumptions

[F1] The left regular representation $\lambda$ of $\mathbb R$ on $L^2(\mathbb R,\lambda_1)$ is a strongly continuous unitary representation, $\lambda(t)v(x)=v(x-t)$ (the group is abelian and unimodular, so no modular factor appears), and $L^2(\mathbb R,\lambda_1)\ne\{0\}$ because the Lebesgue measure $\lambda_1$ of $\mathbb R$ satisfies $\lambda_1((0,1])=1$, the half-open box $(0,1]$ being the unit cube of volume $1$. ([[def-left-and-right-regular-unitary-representations]], [[thm-regular-representations-are-unitary-and-strongly-continuous]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-lebesgue-measure-is-a-complete-measure]], [[def-half-open-box]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[thm-lebesgue-measure-is-a-radon-measure-on-rn]], [[prop-compact-discrete-and-abelian-groups-are-unimodular]], [[def-complex-haar-lp-spaces-and-compactly-supported-functions]])

[F2] Every bounded self-intertwiner of an irreducible strongly continuous unitary representation on a nonzero Hilbert space is a scalar multiple of the identity. ([[thm-schurs-lemma-for-unitary-representations]])

[F3] A representation is irreducible when its carrier is nonzero and its only closed invariant linear subspaces are $\{0\}$ and the whole carrier. ([[def-strongly-continuous-unitary-representation]])

[F4] In a Hilbert direct sum of a family of subspaces, if every summand were $\{0\}$ then the sum would be $\{0\}$; the summands arising in a decomposition of a representation are closed invariant subspaces on which the representation restricts to the corresponding subrepresentation. ([[def-hilbert-direct-sum-of-unitary-representations]])

[F5] If $g\in L^1(\mathbb R,\lambda_1)$ satisfies $g(x-t)=g(x)$ for every $t$ and almost every $x$, then $g=0$ almost everywhere; consequently an $L^2$ class $v$ with $|v(x-t)|=|v(x)|$ for every $t$ and almost every $x$ is zero almost everywhere. ([[lem-an-l-two-class-invariant-in-modulus-under-all-translations-of-the-line-is-zero]])

[F6] A one-dimensional unitary representation of a group is a continuous homomorphism $\chi$ into the circle group $\mathbb T$, so $|\chi(t)|=1$, and $\lambda(t)v=\chi(t)v$ means that for a unit vector $v$ the modulus relation $|v(x-t)|=|\chi(t)||v(x)|=|v(x)|$ holds almost everywhere. ([[def-strongly-continuous-unitary-representation]], [[def-matrix-coefficient-of-a-unitary-representation]])

[F7] Under Countable Choice, supplied by AC, the Plancherel transform $\mathcal F_2$ is a unitary map of complex $L^2(\mathbb R)$ onto itself, Schwartz functions are dense, and the integral Fourier transform agrees with it on $L^1\cap L^2$. The exponential addition/continuity law is [[thm-complex-exponential-addition-and-real-extension]], and dominated convergence for integrable real majorants is [[thm-dominated-convergence]]. For an integrable function the translation law is $\widehat{f(\cdot-t)}(\xi)=e^{-2\pi it\xi}\widehat f(\xi)$. ([[thm-plancherel]], [[lem-schwartz-space-is-dense-in-l-two]], [[thm-l-one-l-two-agreement-of-fourier-transform]], [[thm-fourier-translation-modulation-dilation-and-reflection-laws]])

## Counterexample

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\lambda$ be the left regular representation of the additive group $\mathbb R$ on $L^2(\mathbb R,\lambda_1)$ ([[def-left-and-right-regular-unitary-representations]], [[thm-regular-representations-are-unitary-and-strongly-continuous]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-lebesgue-measure-is-a-complete-measure]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[thm-lebesgue-measure-is-a-radon-measure-on-rn]], [[prop-compact-discrete-and-abelian-groups-are-unimodular]]). Then $L^2(\mathbb R)\ne\{0\}$ and $\lambda$ has no nonzero irreducible subrepresentation: every irreducible unitary representation of the abelian group $\mathbb R$ is one-dimensional ([[thm-schurs-lemma-for-unitary-representations]]), and a one-dimensional subrepresentation is spanned by a unit vector $v\in L^2(\mathbb R)$ with $\lambda(t)v=\chi(t)v$ for a continuous character $\chi:\mathbb R\to\mathbb T$; since $|\chi(t)|=1$, this gives $|v(x-t)|=|v(x)|$ for every $t$ and almost every $x$, so $v=0$ by [[lem-an-l-two-class-invariant-in-modulus-under-all-translations-of-the-line-is-zero]], contradicting $\|v\|=1$. Hence $\lambda$ is not a Hilbert direct sum of irreducible subrepresentations: in any such decomposition of a nonzero space at least one irreducible summand would be nonzero, and it would be an irreducible subrepresentation, which does not exist. Consequently the compact Peter–Weyl decomposition genuinely requires compactness, and for this regular representation the Fourier–Plancherel transform realizes $\lambda$ as the direct integral $\int^\oplus_{\mathbb R}\chi_\xi\,d\xi$ of the characters $\chi_\xi(t)=e^{-2\pi it\xi}$; individual characters are not square-integrable functions of the spatial variable ([[def-hilbert-direct-sum-of-unitary-representations]] is used only for the direct-sum notion).

**Given:** AC, the additive group $\mathbb R$ with Lebesgue measure, its left regular representation $\lambda$ on $L^2(\mathbb R,\lambda_1)$, and the definitions above.

1.1 Suppose $\lambda$ has a nonzero irreducible unitary subrepresentation on a closed invariant subspace $M\subseteq L^2(\mathbb R)$; for $t\in\mathbb R$ the operator $\lambda(t)|_M$ is a bounded self-intertwiner of the restriction because $\lambda(t)\lambda(s)=\lambda(s)\lambda(t)$ for all $s,t$ (the group is abelian), so [F2] makes it a scalar $\chi(t)$ times the identity, and then every one-dimensional subspace of $M$ is invariant, so irreducibility [F3] forces $M=\mathbb Cv$ with $\|v\|=1$ and $\lambda(t)v=\chi(t)v$ for all $t$; by [F6] this gives $|v(x-t)|=|v(x)|$ for every $t$ and almost every $x$, so $v=0$ almost everywhere by [F5], contradicting $\|v\|=1$; hence $\lambda$ has no nonzero irreducible unitary subrepresentation. [F1, F2, F3, F5, F6]

2.1 If $\lambda$ were a Hilbert direct sum of finite-dimensional irreducible unitary subrepresentations, then by [F4] at least one summand would be nonzero because $L^2(\mathbb R)\ne\{0\}$ by [F1], and that summand would be a nonzero irreducible unitary subrepresentation of $\lambda$, contradicting step 1.1; therefore no such decomposition exists, and the refuted statement fails. The Axiom of Choice enters through the cited Schur lemma, the Hilbert-direct-sum and regular-representation suppliers and the Lebesgue-measure facts of [F1] (the complete-measure and Radon-measure theorems are proved under the Axiom of Countable Choice); the vanishing argument itself is choice-free apart from those inputs. [F1, F4, step 1.1]

3.1 In this scalar case the direct integral $\int_{\mathbb R}^{\oplus}\mathbb C\,d\xi$ means the Hilbert space of measurable scalar sections $h(\xi)$ with $\int|h(\xi)|^2d\xi<\infty$, modulo null equality, with its integral inner product; this is exactly $L^2(\mathbb R,d\xi)$. Let its fiberwise action be $(D(t)h)(\xi)=e^{-2\pi it\xi}h(\xi)$. Unit modulus makes each $D(t)$ unitary, the exponential addition law makes it a representation, and dominated convergence with majorant $4|h|^2$ proves strong continuity. On Schwartz inputs [F7] gives $\mathcal F_2\lambda(t)=D(t)\mathcal F_2$; both sides are bounded operators, so density extends this identity to every $L^2$ class. The surjective unitary $\mathcal F_2$ therefore realizes $\lambda$ as the asserted direct integral of one-dimensional characters. For a fixed frequency the character has spatial modulus1, whose squared integral over $\mathbb R$ is infinite, so it is no nonzero vector in the original $L^2$ space. This explicit scalar integral supplies the motivating contrast without assuming general direct-integral decomposition or uniqueness theory. [F1, F7, step 2.1, algebra] ∎
