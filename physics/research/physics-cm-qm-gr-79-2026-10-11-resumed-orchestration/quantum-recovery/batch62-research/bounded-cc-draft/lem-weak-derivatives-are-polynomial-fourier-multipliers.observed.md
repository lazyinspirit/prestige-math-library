---
id: lem-weak-derivatives-are-polynomial-fourier-multipliers
kind: lemma
title: Distributional derivatives are polynomial Fourier multipliers
status: published
origin: pipeline
deps:
  - thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - thm-plancherel
  - lem-smooth-polynomially-bounded-multipliers-on-schwartz-space
  - thm-polynomial-growth-functions-define-tempered-distributions
  - thm-locally-integrable-functions-embed-in-distributions
  - def-regular-distribution-from-a-locally-integrable-function
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-ck-and-multi-index-notation-in-several-variables
  - def-countable-choice
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, current revision"
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: "§12.1.1, Proposition 12.1 and its proof, printed pp. 139-140, with the 2 pi normalization inserted"
    - title: "Mark Williams, Notes on Harmonic Analysis"
      url: https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf
      locator: "§5.3 and §6.2, Fourier multiplier and Sobolev conventions, printed pp. 19-25"
---

## Statement

Assume Countable Choice and let $n\ge1$. For every $u\in\mathcal S'(\mathbb R^n)$ and every multi-index $\alpha\in\mathbb N_0^n$,
$$\mathcal F(D^\alpha u)=(2\pi i\xi)^\alpha\mathcal Fu\qquad\text{in }\mathcal S'(\mathbb R^n),$$
where $D^\alpha$ is the distributional derivative of
[[def-ck-and-multi-index-notation-in-several-variables]] and $\mathcal F$ is
the negative-sign $2\pi$-normalized transform. Moreover, if $u=u_f$ and
$D^\alpha u=u_g$ for $L^2$ classes $f,g\in L^2(\mathbb R^n)$ and their regular
distributions, then the unitary Plancherel transforms satisfy
$$\mathcal F_2g(\xi)=(2\pi i\xi)^\alpha\mathcal F_2f(\xi)\qquad\text{for almost every }\xi\in\mathbb R^n.$$
The second assertion compares the Plancherel classes only; it neither asserts
pointwise values of arbitrary representatives nor presupposes any Sobolev-space
notation.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $u\in\mathcal S'(\mathbb R^n)$, a
multi-index $\alpha$, and, for the second assertion, $L^2$ classes $f,g$ with
$u=u_f$ and $D^\alpha u=u_g$.

[A1] Countable Choice is the hypothesis carried by the cited tempered
distribution and Plancherel interfaces ([[def-countable-choice]]).

[F1] The distributional derivative of a tempered distribution is tempered and
$\mathcal F(\partial^\alpha u)=(2\pi i\xi)^\alpha\mathcal Fu$ in
$\mathcal S'$, with the conventions $\langle\partial^\alpha
u,\varphi\rangle=(-1)^{|\alpha|}\langle u,\partial^\alpha\varphi\rangle$ and
bilinear test pairing ([[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]]).

[F2] Every complex $L^p$ class, $1\le p\le\infty$, has a representative whose
regular distribution is tempered; in particular $L^2$ classes define tempered
distributions ([[thm-polynomial-growth-functions-define-tempered-distributions]]).

[F3] The locally integrable regular distribution is
$u_h(\varphi)=\int h\varphi$, with bilinear pairing, and the map
$h\mapsto u_h$ factors through almost-everywhere equality
([[def-regular-distribution-from-a-locally-integrable-function]]).

[F4] The regular-distribution map on locally integrable functions is injective
after almost-everywhere identification
([[thm-locally-integrable-functions-embed-in-distributions]]).

[F5] For $h\in L^2(\mathbb R^n)$ the distributional transform of the regular
distribution is the regular distribution of the Plancherel transform:
$\mathcal Fu_h=u_{\mathcal F_2h}$ in $\mathcal S'$
([[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]).

[F6] Multiplication of a tempered distribution $w$ by a smooth function $a$
with polynomially bounded derivatives is the tempered distribution
$\langle aw,\varphi\rangle=\langle w,a\varphi\rangle$
([[lem-smooth-polynomially-bounded-multipliers-on-schwartz-space]]).

[F7] Plancherel extends the Schwartz transform to a surjective complex-linear
isometry $\mathcal F_2:L^2\to L^2$
([[thm-plancherel]]).

## Proof

**Proof technique:** transpose the published differentiation identity, then compare regular distributions.

1.1 The multi-index derivative $D^\alpha u$ is the iterated distributional partial derivative, so [F1] applies verbatim and gives $\mathcal F(D^\alpha u)=(2\pi i\xi)^\alpha\mathcal Fu$ in $\mathcal S'$; this includes $\alpha=0$, where the multiplier is the constant $1$. [F1]

1.2 Assume now that $u=u_f$ and $D^\alpha u=u_g$ for $L^2$ classes $f,g$. Both regular distributions are tempered by [F2], and [F5] identifies their transforms as $\mathcal Fu_f=u_{\mathcal F_2f}$ and $\mathcal Fu_g=u_{\mathcal F_2g}$. [F2, F5]

2.1 Substituting step 1.2 into step 1.1 applied to $u_f$ gives $u_{\mathcal F_2g}=(2\pi i\xi)^\alpha u_{\mathcal F_2f}=u_{(2\pi i\xi)^\alpha\mathcal F_2f}$: the last equality follows from the product rule [F6] with the smooth polynomially bounded multiplier $(2\pi i\xi)^\alpha$ together with the defining formula [F3], since both sides pair a test $\varphi$ with $\int_{\mathbb R^n}(2\pi i\xi)^\alpha\mathcal F_2f(\xi)\varphi(\xi)\,d\xi$. [F3, F6, step 1.1, step 1.2]

3.1 Since $\mathcal F_2$ is a surjective isometry of $L^2$ [F7], the class $\mathcal F_2f$ lies in $L^2$; the function $\xi\mapsto(2\pi i\xi)^\alpha\mathcal F_2f(\xi)$ is a polynomially growing multiple of it and hence is locally integrable, so both sides of step 2.1 are regular distributions of locally integrable functions; injectivity of that map [F4] yields $\mathcal F_2g=(2\pi i\xi)^\alpha\mathcal F_2f$ almost everywhere. [F3, F4, F7, step 2.1]

4.1 Countable Choice is used only through the cited tempered-distribution and Plancherel interfaces [A1]; the transposition computation of step 1.1 and the injectivity argument of step 3.1 add no further choice. [A1, step 1.1, step 3.1] ∎

## Sources

- Semyon Dyatlov, *Lecture Notes for 18.155*, §12.1.1, Proposition 12.1 and
  proof, printed pp. 139-140. The source uses $D=-i\partial$ and unit
  normalization; its identity is converted here to the repository convention
  $\mathcal F(\partial_j u)=2\pi i\xi_j\mathcal Fu$.
- Mark Williams, *Notes on Harmonic Analysis*, §5.3 and §6.2, printed
  pp. 19-25, for the multiplier and Sobolev conventions in which the
  polynomial symbol is consumed.
