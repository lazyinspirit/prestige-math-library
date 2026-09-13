---
id: thm-fourier-transform-converts-allowed-tempered-convolutions-to-products
kind: theorem
title: Fourier transform converts allowed tempered convolutions to products
status: published
origin: pipeline
deps: [thm-tempered-convolution-is-smooth-with-polynomial-growth, lem-smooth-polynomially-bounded-multipliers-on-schwartz-space, lem-schwartz-parameter-pairing-and-integral-interchange, thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier, lem-compact-distribution-convolution-preserves-schwartz-and-tempered-spaces, thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, cor-schwartz-convolution-and-product-transform-laws, def-countable-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Propositions 11.25 and 11.28, pp. 129–131; normalization converted to 2pi"
    - title: "Radu Gelca, Functional Analysis"
      url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
      locator: "Theorem 8.4.4(c),(e) and proof, pp. 130–131"
proof_strategy: direct
---

## Statement

Assume Countable Choice.  Let $u\in\mathcal S'(\mathbb R^n)$ and
$\varphi\in\mathcal S(\mathbb R^n)$.  Then

$$\mathcal F(u*\varphi)=(\mathcal Fu)(\mathcal F\varphi), \qquad \mathcal F(\varphi u)=(\mathcal F\varphi)*(\mathcal Fu).$$

In the second formula the convolution means
$(\mathcal Fu)*(\mathcal F\varphi)$ under the distribution-first convention.
If $v\in\mathcal D'(\mathbb R^n)$ has compact support, then

$$\mathcal F(u*v)=(\mathcal Fu)(\mathcal Fv).$$

Here $\mathcal Fv$ is the smooth polynomially bounded function representing
the transform of the canonical tempered extension of $v$.  No product of two
arbitrary distributions and no convolution of two arbitrary tempered
distributions occurs.

## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]], $u\in\mathcal S'$,
$\varphi\in\mathcal S$, and, for the last formula, compactly supported $v$.

[F1] The convolution $u*\varphi$ is a regular tempered distribution
([[thm-tempered-convolution-is-smooth-with-polynomial-growth]]).

[F2] Schwartz multipliers act on $\mathcal S'$, and $\mathcal Fv$ is a smooth
polynomially bounded multiplier
([[lem-smooth-polynomially-bounded-multipliers-on-schwartz-space]],
[[thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier]]).

[F3] Seminorm-dominated Schwartz integrals commute with tempered pairings
([[lem-schwartz-parameter-pairing-and-integral-interchange]]).

[F4] Compact-distribution convolution preserves $\mathcal S'$ and agrees with
the support-conditioned distribution convolution
([[lem-compact-distribution-convolution-preserves-schwartz-and-tempered-spaces]]).

[F5] Fourier transformation or inversion is available on $\mathcal S'$, with
$\mathcal F^2=R$ ([[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]]).

[F6] Products and convolutions of two Schwartz functions satisfy the same
$2\pi$-normalized transform laws
([[cor-schwartz-convolution-and-product-transform-laws]]).

## Proof

**Proof technique:** test-pairing interchange.

1.1 Let $\psi\in\mathcal S$.  The family $x\mapsto[y\mapsto\varphi(x-y)\widehat\psi(x)]$ is dominated in every $y$-Schwartz seminorm by an integrable polynomial weight times $\widehat\psi(x)$.  Therefore [F3] applies. [F3]

$$\langle\mathcal F(u*\varphi),\psi\rangle =\left\langle u_y, \int\varphi(x-y)\widehat\psi(x)\,dx\right\rangle.$$

[F1, F3]

1.2 Absolute scalar interchange, or equivalently [F6] on Schwartz functions, identifies the inner integral. [F6]

$$\mathcal F(\widehat\varphi\,\psi)(y).$$

Indeed, inserting $\widehat\psi(x)=\int\psi(\xi)e^{-2\pi ix\cdot\xi}d\xi$
and translating $x-y$ produces
$\widehat\varphi(\xi)e^{-2\pi iy\cdot\xi}$.  Hence step 1.1 equals
$\langle\mathcal Fu,\widehat\varphi\,\psi\rangle$, which is
$\langle(\mathcal Fu)(\mathcal F\varphi),\psi\rangle$. [F2, F3, F6,
step 1.1]

1.3 Put $V=\mathcal Fv$.  Evaluate the compact-factor convolution on an arbitrary $\psi\in\mathcal S$. [F4]

$$\langle\mathcal F(u*v),\psi\rangle =\left\langle u_x,\left\langle v_y, \widehat\psi(x+y)\right\rangle\right\rangle.$$

The compact support of $v$ and [F3] permit its pairing to cross the rapidly
convergent Fourier integral, giving

$$\left\langle v_y,\widehat\psi(x+y)\right\rangle =\int V(\xi)\psi(\xi)e^{-2\pi ix\cdot\xi}\,d\xi =\mathcal F(V\psi)(x).$$

Thus the outer pairing is
$\langle\mathcal Fu,V\psi\rangle=
\langle(\mathcal Fu)(\mathcal Fv),\psi\rangle$. [F2, F3, F4]

2.1 Apply the first identity to $\mathcal Fu$ and the Schwartz function $\mathcal F\varphi$, then use Fourier squaring. [F5, step 1.2]

$$\mathcal F((\mathcal Fu)*(\mathcal F\varphi)) =(\mathcal F^2u)(\mathcal F^2\varphi) =(Ru)(R\varphi)=R(\varphi u).$$

Since $\mathcal F^{-1}R=\mathcal F$, inversion gives
$(\mathcal Fu)*(\mathcal F\varphi)=\mathcal F(\varphi u)$.
Zero factors are included.  Countable Choice is used only through the
published Fourier/Lebesgue suppliers. [F5, step 1.2] ∎
