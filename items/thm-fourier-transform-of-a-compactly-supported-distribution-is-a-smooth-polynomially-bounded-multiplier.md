---
id: thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier
kind: theorem
title: Fourier transform of a compactly supported distribution is a smooth polynomially bounded multiplier
status: published
origin: pipeline
deps: [def-fourier-transform-of-a-tempered-distribution, thm-compactly-supported-distributions-are-tempered, lem-compactly-supported-distributions-extend-to-smooth-functions, lem-distribution-pairing-with-smooth-parameter-families, lem-smooth-polynomially-bounded-multipliers-on-schwartz-space, lem-schwartz-parameter-pairing-and-integral-interchange, def-countable-choice]
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
      locator: "Proposition 11.26 and equations (11.42)–(11.44), pp. 129–130; normalization converted to 2pi"
proof_strategy: direct
---

## Statement

Assume Countable Choice.  Let $v\in\mathcal D'(\mathbb R^n)$ have compact
support, let $\widetilde v\in\mathcal S'$ be its canonical extension, and let
$\chi\in\mathcal D$ equal one on a neighborhood of $\operatorname{supp}v$.
Then $\mathcal F\widetilde v$ is the regular tempered distribution represented
by

$$V(\xi)=\left\langle v_x,\chi(x)e^{-2\pi ix\cdot\xi}\right\rangle.$$

The function $V$ is independent of $\chi$, is smooth, and for every
multi-index $\alpha$ there are $C_\alpha,m_\alpha$ with
$|\partial^\alpha V(\xi)|\leq C_\alpha(1+|\xi|)^{m_\alpha}$.  Consequently
multiplication by $V$ is continuous on $\mathcal S$ and, by transpose, on
$\mathcal S'$ in both dual topologies.

## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]], a compactly supported
distribution $v$, and a cutoff $\chi$ as in the statement.

[F1] The extension $\widetilde v$ is tempered and its pairing with a smooth
function is computed using any cutoff equal to one near the support
([[thm-compactly-supported-distributions-are-tempered]],
[[lem-compactly-supported-distributions-extend-to-smooth-functions]]).

[F2] Compactly supported distribution pairings with smooth parameter families
differentiate in the parameter
([[lem-distribution-pairing-with-smooth-parameter-families]]).

[F3] The Fourier transform is defined by bilinear transposition
([[def-fourier-transform-of-a-tempered-distribution]]), and the local Schwartz
integral lemma permits a seminorm-dominated integral to cross a tempered
pairing ([[lem-schwartz-parameter-pairing-and-integral-interchange]]).

[F4] A smooth function whose derivatives grow polynomially is a continuous
Schwartz multiplier, as is its transpose
([[lem-smooth-polynomially-bounded-multipliers-on-schwartz-space]]).

## Proof

**Proof technique:** compact finite-order estimate and pairing interchange.

1.1 If $\chi_1$ and $\chi_2$ are both one near $\operatorname{supp}v$, then $(\chi_1-\chi_2)e^{-2\pi ix\cdot\xi}$ vanishes near that support, so [F1] makes its pairing with $v$ zero.  Thus $V$ is cutoff-independent. [F1]

1.2 Apply smooth parameter differentiation from [F2]. [F2]

$$\partial_\xi^\alpha V(\xi) =\left\langle v_x,\chi(x)(-2\pi ix)^\alpha e^{-2\pi ix\cdot\xi}\right\rangle.$$

On one fixed compact containing $\operatorname{supp}\chi$, the finite-order
estimate for $v$ differentiates the displayed test in $x$ only finitely many
times.  Each resulting term is bounded by a constant times
$(1+|\xi|)^m$.  Hence $V$ is smooth and every derivative has the claimed
polynomial bound. [F1, F2, algebra]

1.3 Let $\varphi\in\mathcal S$ and set $H(\xi,x)=\chi(x)e^{-2\pi ix\cdot\xi}\varphi(\xi)$.  As an $x$-Schwartz family, $H(\xi,\cdot)$ is continuous in $\xi$, and every $x$-Schwartz seminorm has an integrable majorant $C(1+|\xi|)^q|\varphi(\xi)|$.  Thus [F3] applies. [F3]

$$\begin{aligned} \langle\mathcal F\widetilde v,\varphi\rangle &=\langle\widetilde v,\mathcal F\varphi\rangle\\ &=\int\left\langle v_x,\chi(x)e^{-2\pi ix\cdot\xi}\right\rangle \varphi(\xi)\,d\xi =\int V(\xi)\varphi(\xi)\,d\xi. \end{aligned}$$

[F1, F3]

2.1 Equality in step 1.3 identifies $\mathcal F\widetilde v$ with the regular distribution $u_V$.  The derivative bounds from step 1.2 satisfy [F4], which proves both multiplier assertions.  For $v=0$, $V=0$; empty support causes no exception.  Countable Choice enters only through the published Fourier and Lebesgue-interchange clauses. [F4, step 1.2, step 1.3] ∎
