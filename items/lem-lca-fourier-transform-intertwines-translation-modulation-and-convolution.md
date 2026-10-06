---
id: lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution
kind: lemma
title: Fourier transform intertwines translation, modulation and convolution
dependency_level: 2
deps:
- def-fourier-transform-on-an-lca-group
- def-pontryagin-dual-and-compact-open-topology
- lem-character-evaluation-pairing-is-jointly-continuous
- lem-lca-lone-convolution-is-a-commutative-banach-star-algebra
- lem-lca-haar-measure-is-inversion-invariant
- thm-tonelli-theorem-for-sigma-finite-product-spaces
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- lem-unit-circle-is-a-compact-metrizable-topological-group
- lem-complex-conjugation-and-modulus-laws
- def-l-p-space-as-a-quotient-by-null-functions
- def-integrable-real-and-complex-functions-and-their-integrals
- def-dependent-choice
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
  - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C.2-C.3 (course-hosted full text)"
    url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]).
Let $G$ be a locally compact Hausdorff abelian group with Haar measure $m_G$.
For $f,g\in L^1(G,m_G)$, $x\in G$ and a character $\gamma_0\in\widehat G$, the
following identities hold pointwise on $\widehat G$:
$$\widehat{T_xf}(\gamma)=\overline{\gamma(x)}\,\widehat f(\gamma),\qquad \widehat{\gamma_0 f}(\gamma)=\widehat f(\gamma_0^{-1}\gamma),\qquad \widehat{f*g}(\gamma)=\widehat f(\gamma)\widehat g(\gamma),\qquad \widehat{f^*}(\gamma)=\overline{\widehat f(\gamma)},$$
where $T_xf=f(\cdot-x)$, $(\gamma_0f)(x)=\gamma_0(x)f(x)$ and
$f^*(x)=\overline{f(-x)}$. All four identities are identities of bounded
complex-valued functions on $\widehat G$; the first three are used only after
the transform codomain has been identified.

## Facts & Assumptions

**Given:** Dependent Choice, a locally compact Hausdorff abelian group $G$ with Haar measure $m_G$, functions $f,g\in L^1(G,m_G)$ ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-integrable-real-and-complex-functions-and-their-integrals]]), a point $x\in G$ and a character $\gamma_0\in\widehat G$.

[F1] Each $\gamma\in\widehat G$ is a continuous homomorphism into the unit circle, so $\gamma(y-x)=\gamma(y)\overline{\gamma(x)}$, $\gamma_0^{-1}\gamma$ is again a character, $\gamma(-y)=\overline{\gamma(y)}$ and $|\gamma|=1$ ([[def-pontryagin-dual-and-compact-open-topology]], [[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[lem-complex-conjugation-and-modulus-laws]]).

[F2] $m_G$ is translation invariant and inversion invariant ([[def-fourier-transform-on-an-lca-group]], [[lem-lca-haar-measure-is-inversion-invariant]]); the transform is defined by $\widehat h(\gamma)=\int_Gh(y)\overline{\gamma(y)}\,dm_G(y)$ and $|\widehat h|\le\|h\|_1$ ([[def-fourier-transform-on-an-lca-group]]).

[F3] The convolution $f*g$ of two $L^1$ functions is a well-defined class in $L^1$; its defining integral may be computed after restricting to $\sigma$-compact essential supports, where Tonelli's theorem and Fubini's theorem for $L^1$ functions apply to the $\sigma$-finite product ([[lem-lca-lone-convolution-is-a-commutative-banach-star-algebra]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

**Proof technique:** direct.

1.1 (Translation and modulation.) For every $\gamma$, [F2] gives $$\widehat{T_xf}(\gamma)=\int_Gf(y-x)\overline{\gamma(y)}\,dm_G(y)=\int_Gf(z)\overline{\gamma(z+x)}\,dm_G(z)=\overline{\gamma(x)}\int_Gf(z)\overline{\gamma(z)}\,dm_G(z)=\overline{\gamma(x)}\widehat f(\gamma),$$ substituting $z=y-x$ (a translation) and using $\gamma(z+x)=\gamma(z)\gamma(x)$ from [F1]. Likewise $$\widehat{\gamma_0f}(\gamma)=\int_G\gamma_0(y)f(y)\overline{\gamma(y)}\,dm_G(y)=\int_Gf(y)\overline{(\gamma_0^{-1}\gamma)(y)}\,dm_G(y)=\widehat f(\gamma_0^{-1}\gamma),$$ since $\gamma_0(y)\overline{\gamma(y)}=\overline{\gamma_0(y)^{-1}\gamma(y)}$ and $\gamma_0^{-1}\gamma$ is a character by [F1]. [F1, F2]

1.2 (Convolution.) By [F3] choose $\sigma$-compact essential supports $S,T$ of $f,g$; the function $(y,z)\mapsto f(y)g(z)\overline{\gamma(y+z)}$ is integrable over the $\sigma$-finite product $S\times T$ and Tonelli and Fubini give $$\widehat{f*g}(\gamma)=\int_G\Bigl(\int_Gf(y)g(x-y)\,dm_G(y)\Bigr)\overline{\gamma(x)}\,dm_G(x)=\int_{S}\int_{T}f(y)g(z)\overline{\gamma(y+z)}\,dm_G(z)\,dm_G(y)=\widehat f(\gamma)\widehat g(\gamma),$$ the middle step substituting $x=y+z$ (a translation) and the last step using $\gamma(y+z)=\gamma(y)\gamma(z)$ and factoring. [F1, F3]

1.3 (Conjugation.) Using inversion invariance [F2] in the substitution $y\mapsto-y$ and then $\gamma(-y)=\overline{\gamma(y)}$ from [F1], $$\widehat{f^*}(\gamma)=\int_G\overline{f(-y)}\,\overline{\gamma(y)}\,dm_G(y)=\int_G\overline{f(y)}\,\overline{\gamma(-y)}\,dm_G(y)=\int_G\overline{f(y)\overline{\gamma(y)}}\,dm_G(y)=\overline{\widehat f(\gamma)} .$$ [F1, F2]

2.1 (Conclusion.) Steps 1.1, 1.2 and 1.3 establish the four displayed identities at every $\gamma\in\widehat G$; both sides are bounded because $|\widehat h|\le\|h\|_1$ by [F2], so the identities are identities of bounded functions on $\widehat G$. [F2, step 1.1, step 1.2, step 1.3] ∎ 
