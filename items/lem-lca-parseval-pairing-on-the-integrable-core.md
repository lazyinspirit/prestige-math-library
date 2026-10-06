---
id: lem-lca-parseval-pairing-on-the-integrable-core
kind: lemma
title: Parseval pairing on the integrable core
dependency_level: 12
deps:
- thm-lca-fourier-inversion-for-integrable-transform
- thm-compatible-dual-haar-normalisation
- def-fourier-transform-on-an-lca-group
- def-l-p-space-as-a-quotient-by-null-functions
- def-integrable-real-and-complex-functions-and-their-integrals
- thm-tonelli-theorem-for-sigma-finite-product-spaces
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- cor-cauchy-schwarz-inequality-for-l-two
- lem-lca-lone-convolution-is-a-commutative-banach-star-algebra
- lem-lca-haar-measure-is-inversion-invariant
- lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution
- lem-lca-translations-and-normalised-local-approximate-identities
- def-dependent-choice
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
  - title: "T. W. Koerner, Topological Groups (author PDF, Internet Archive snapshot of the dpmms.cam.ac.uk Topg.pdf file)"
    url: "https://web.archive.org/web/2024id_/https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf"
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let $G$ be a locally compact Hausdorff abelian group with the compatible dual Haar normalisation. If $f,g\in L^1(G,m_G)\cap L^2(G,m_G)$ and $\widehat f,\widehat g\in L^1(\widehat G,m_{\widehat G})$, then
$$\int_G f(x)\overline{g(x)}\,dm_G(x)=\int_{\widehat G}\widehat f(\gamma)\overline{\widehat g(\gamma)}\,dm_{\widehat G}(\gamma).$$
In particular $\|\widehat f\|_2=\|f\|_2$ for such $f$.

## Facts & Assumptions

**Given:** The Axiom of Choice and Dependent Choice, a locally compact Hausdorff abelian group $G$ with Haar measure $m_G$ and compatible dual Haar measure $m_{\widehat G}$ on $\widehat G$, and $f,g\in L^1(G,m_G)\cap L^2(G,m_G)$ with $\widehat f,\widehat g\in L^1(\widehat G,m_{\widehat G})$.

[F1] $A=L^1(G,m_G)$ is a commutative Banach $*$-algebra under convolution and $u^*(x)=\overline{u(-x)}$; for $u,v\in A$ the class $u*v$ is given $m_G$-a.e. by an absolutely convergent integral and $\|u*v\|_1\le\|u\|_1\|v\|_1$, and $\|u^*\|_1=\|u\|_1$, $u^{**}=u$ ([[lem-lca-lone-convolution-is-a-commutative-banach-star-algebra]]); for $g\in L^2$ also $g^*\in L^2$ with $\|g^*\|_2=\|g\|_2$ because inversion preserves Haar measure and conjugation preserves moduli ([[lem-lca-haar-measure-is-inversion-invariant]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F2] The transform satisfies $\widehat{u*v}=\widehat u\,\widehat v$ and $\widehat{u^*}=\overline{\widehat u}$ ([[lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution]]); in particular $\widehat{f*g^*}=\widehat f\,\overline{\widehat g}$, and since $\widehat f$ is bounded and $\overline{\widehat g}\in L^1(\widehat G,m_{\widehat G})$, this product lies in $L^1(\widehat G,m_{\widehat G})$ with $\|\widehat f\,\overline{\widehat g}\|_1\le\|\widehat f\|_\infty\|\widehat g\|_1$ ([[def-fourier-transform-on-an-lca-group]]).

[F3] For $f,g\in L^2(G,m_G)$ the integral $H(x):=\int_Gf(y)\overline{g(y-x)}\,dm_G(y)$ converges absolutely for every $x$ with $|H(x)|\le\|f\|_2\|g\|_2$ by Cauchy-Schwarz ([[cor-cauchy-schwarz-inequality-for-l-two]]), and $H$ is continuous: $|H(x)-H(x_0)|\le\|f\|_2\|T_xg-T_{x_0}g\|_2\to0$ by norm continuity of translations in $L^2$ ([[lem-lca-translations-and-normalised-local-approximate-identities]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F4] The convolution $h:=f*g^*$ lies in $L^1(G,m_G)$ with $\|h\|_1\le\|f\|_1\|g\|_1$, its representative $H$ of [F3] satisfies $H=h$ $m_G$-a.e., and its transform $\widehat h=\widehat f\,\overline{\widehat g}$ lies in $L^1(\widehat G,m_{\widehat G})$ ([[lem-lca-lone-convolution-is-a-commutative-banach-star-algebra]], [[lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution]], [[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F5] Fourier inversion for integrable transforms: if $h\in L^1(G,m_G)$ has $\widehat h\in L^1(\widehat G,m_{\widehat G})$, then $h^\vee(x)=\int_{\widehat G}\widehat h(\gamma)\gamma(x)\,dm_{\widehat G}(\gamma)$ is a bounded uniformly continuous function with $h^\vee=h$ $m_G$-a.e., and $h^\vee$ is the unique continuous representative of the class of $h$ ([[thm-lca-fourier-inversion-for-integrable-transform]], [[thm-compatible-dual-haar-normalisation]]).

## Proof

**Proof technique:** direct.

1.1 (The convolution is continuous and its value at $0$.) With $h:=f*g^*\in L^1(G,m_G)$ as in [F4], the function $H(x)=\int_Gf(y)\overline{g(y-x)}\,dm_G(y)$ of [F3] is defined everywhere, bounded by $\|f\|_2\|g\|_2$ and continuous, and it agrees with $h$ $m_G$-a.e. In particular $H(0)=\int_Gf(y)\overline{g(y)}\,dm_G(y)$. [F1, F3, F4]

1.2 (Integrability of the transform.) By [F2] and [F4], $\widehat h=\widehat f\,\overline{\widehat g}\in L^1(\widehat G,m_{\widehat G})$ with $\|\widehat h\|_1\le\|\widehat f\|_\infty\|\widehat g\|_1\le\|f\|_1\|\widehat g\|_1$. [F2, F4]

2.1 (Inversion evaluated at the identity.) By step 1.2 the inversion theorem [F5] applies to $h$: its inverse transform $h^\vee$ is continuous with $h^\vee=h$ a.e. Since $H$ is continuous and $H=h$ a.e. by step 1.1, uniqueness of the continuous representative in [F5] gives $H=h^\vee$. Evaluating at $x=0$ and using $\widehat h=\widehat f\,\overline{\widehat g}$ from [F4] yields $$\int_Gf(y)\overline{g(y)}\,dm_G(y)=H(0)=h^\vee(0)=\int_{\widehat G}\widehat h(\gamma)\,dm_{\widehat G}(\gamma)=\int_{\widehat G}\widehat f(\gamma)\overline{\widehat g(\gamma)}\,dm_{\widehat G}(\gamma).$$ [F4, F5, step 1.1, step 1.2]

3.1 (The norm identity.) Taking $g=f$ in step 2.1 gives $\int_G|f|^2\,dm_G=\int_{\widehat G}|\widehat f|^2\,dm_{\widehat G}$; the left side is finite, so $\widehat f\in L^2(\widehat G,m_{\widehat G})$ and $\|\widehat f\|_2=\|f\|_2$. [step 2.1]

4.1 Step 2.1 is the stated Parseval pairing identity and step 3.1 is its norm specialisation. [step 2.1, step 3.1] ∎
