---
id: thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space
kind: theorem
title: Basic operations are continuous on Schwartz space
deps: ["def-schwartz-space-and-its-seminorms", "def-schwartz-topology-and-convergence", "def-ck-and-multi-index-notation-in-several-variables", "thm-complex-exponential-addition-and-real-extension", "thm-sine-and-cosine-derivatives", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "thm-general-leibniz-rule", "thm-symmetry-of-higher-mixed-partials"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Semyon Dyatlov, MIT 18.155 (2022)
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Equation (11.6), Proposition 11.7; Teschl text preceding Lemma 14.4
---

## Statement

On $\mathcal S(\mathbb R^n)$, differentiation, multiplication by a fixed polynomial, translation by a fixed vector, and modulation by a fixed frequency are continuous complex-linear maps. Reflection is continuous linear and conjugation continuous antilinear. Pointwise multiplication $\mathcal S\times\mathcal S\to\mathcal S$ is continuous bilinear. These assertions require no choice.

## Facts & Assumptions

**Given:** The seminorms and topology of [[def-schwartz-space-and-its-seminorms]] and [[def-schwartz-topology-and-convergence]], with [[def-ck-and-multi-index-notation-in-several-variables]].

[F1] Apply the higher product rule in each coordinate ([[thm-general-leibniz-rule]]) and commute smooth mixed partials ([[thm-symmetry-of-higher-mixed-partials]]).

[F2] The complex exponential addition and Euler formulas, with the sine and cosine derivative formulas, give $|e^{it}|=1$ and $(d/dt)e^{it}=ie^{it}$ ([[thm-complex-exponential-addition-and-real-extension]], [[thm-sine-and-cosine-derivatives]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $p_{\alpha\beta}(\partial^\delta f)=p_{\alpha,\beta+\delta}(f)$. For a monomial multiplier $x^\delta$, its product-rule term indexed by $\gamma\le\beta,\delta$ is $\binom\beta\gamma\delta!/(\delta-\gamma)!$ times $x^{\delta-\gamma}\partial^{\beta-\gamma}f$, giving the bound by the corresponding finite sum of $p_{\alpha+\delta-\gamma,\beta-\gamma}(f)$. A polynomial is a finite sum of these monomials. For $T_af(x)=f(x-a)$, put $y=x-a$ and expand $(y+a)^\alpha$; then $p_{\alpha\beta}(T_af)\le\sum_{\gamma\le\alpha}\binom\alpha\gamma|a^{\alpha-\gamma}|p_{\gamma\beta}(f)$. [F1, given, algebra]

1.2 For $M_bf(x)=e^{2\pi ib\cdot x}f(x)$, [F1] and [F2] give $p_{\alpha\beta}(M_bf)\le\sum_{\gamma\le\beta}\binom\beta\gamma|(2\pi ib)^\gamma|p_{\alpha,\beta-\gamma}(f)$. Reflection $Rf(x)=f(-x)$ has $p_{\alpha\beta}(Rf)=p_{\alpha\beta}(f)$, and conjugation has the same identity, since coordinate derivatives commute with real and imaginary parts. These formulas also prove the asserted linearity or antilinearity. [F1, F2, given, algebra]

2.1 All bounds in steps 1.1 and 1.2 are finite seminorm sums; requiring their finitely many input seminorms to be sufficiently small proves continuity at zero directly from the topology, and linearity or antilinearity translates this to every point. Product Leibniz further gives $p_{\alpha\beta}(fg)\le\sum_{\gamma\le\beta}\binom\beta\gamma p_{\alpha\gamma}(f)p_{0,\beta-\gamma}(g)$, proving closure. At $(f_0,g_0)$ write $fg-f_0g_0=(f-f_0)g_0+f_0(g-g_0)+(f-f_0)(g-g_0)$ and apply this bound to all three terms. Each of the finitely many errors tends to zero with the relevant input seminorms, proving joint continuity and bilinearity. [step 1.1, step 1.2, F1, given] ∎
