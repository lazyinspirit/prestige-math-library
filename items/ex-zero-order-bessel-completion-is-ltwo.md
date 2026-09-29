---
id: ex-zero-order-bessel-completion-is-ltwo
kind: example
title: The zero-order Bessel completion is exactly L2
status: draft
origin: pipeline
deps:
  - thm-bessel-potential-completions-embed-in-tempered-distributions
  - def-bessel-potential-pre-hilbert-norm-on-schwartz-space
  - def-real-order-bessel-potential-sobolev-space
  - thm-plancherel
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions
  - lem-schwartz-space-is-dense-in-l-two
  - def-countable-choice
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Semyon Dyatlov, Lecture Notes for 18.155 (current revision)"
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: "Section 12.1.2 property (3), printed p. 140; Fourier normalization converted"
    - title: "Richard B. Melrose, Differential Analysis, Chapter 3"
      url: https://math.mit.edu/~rbm/18-155-F17/Chapter3.pdf
      locator: "Section 4, H^0=L2 after (4.8) and Proposition 4.8, printed pp. 66,69; Fourier normalization converted"
---

## Statement

Assume Countable Choice and use the negative-sign $2\pi$ Fourier convention.
For $n\ge1$, let $J_0:H^0(\mathbb R^n)\to L^2(\mathbb R^n)$ be the
surjective weighted-transform isometry from the completion theorem, and let
$E_0:H^0(\mathbb R^n)\to\mathcal S'(\mathbb R^n)$ be its canonical
distribution embedding. The map
$$I_0=\mathcal F_2^{-1}\circ J_0:H^0(\mathbb R^n)\longrightarrow L^2(\mathbb R^n)$$
is a surjective linear isometry, agrees with the identity on canonical
Schwartz classes, and satisfies $E_0(U)=u_{I_0U}$ for every $U\in H^0$.
Consequently $E_0$ identifies $H^0$ with precisely the regular distributions
of complex $L^2$ classes, and
$$\|U\|_{H^0}=\|I_0U\|_2,\qquad q_0(u)=\|u\|_2\quad(u\in\mathcal S).$$
The normalization factor in both norm identities is exactly one.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, and the fixed negative-sign $2\pi$
Fourier transform.

[A1] Countable Choice holds for the countable approximations and completion
interfaces used by the cited Plancherel and Bessel-completion results
([[def-countable-choice]]).

[F1] The candidate norm is
$q_s(u)=\|\langle\xi\rangle^s\widehat u\|_2$
([[def-bessel-potential-pre-hilbert-norm-on-schwartz-space]]).

[F2] $H^s$ is the norm completion of Schwartz space with its canonical dense
constant-sequence map ([[def-real-order-bessel-potential-sobolev-space]]).

[F3] $J_s$ is a surjective linear isometry and the embedding formula is
$E_s(U)=\mathcal F^{-1}(u_{\langle\xi\rangle^{-s}J_sU})$; $E_s$ is injective
([[thm-bessel-potential-completions-embed-in-tempered-distributions]]).

[F4] The Plancherel extension $\mathcal F_2$ is a surjective complex-linear
isometry extending Fourier transformation on Schwartz space
([[thm-plancherel]]).

[F5] For $f\in L^2$, the distributional transform satisfies
$\mathcal F u_f=u_{\mathcal F_2f}$ ([[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]).

[F6] Schwartz classes are dense in complex $L^2$
([[lem-schwartz-space-is-dense-in-l-two]]).

[F7] Fourier transformation is injective on $\mathcal S'$ because it is a
topological automorphism ([[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]]).

## Proof

**Proof technique:** Compose the two unitary identifications at order zero and check their distributional meaning.

1.1 For $u\in\mathcal S$, $\langle\xi\rangle^0=1$, so [F1] gives $q_0(u)=\|\widehat u\|_2$. The extension property and isometry in [F4] give $\|\widehat u\|_2=\|u\|_2$, proving the exact factor-one norm identity on Schwartz space. [F1, F4, given]

1.2 Define $I_0=\mathcal F_2^{-1}\circ J_0$. Under the inherited Countable Choice assumption [A1], [F3] and [F4] supply two surjective linear isometries, so $I_0$ is a surjective linear isometry. If $i(u)$ is the canonical constant-sequence class of $u\in\mathcal S$, then $J_0i(u)=\widehat u$ and [F4] gives $I_0i(u)=u$ as an $L^2$ class. By [F6], this canonical copy of Schwartz space is dense in the target. [A1, F2, F3, F4, F6, given]

2.1 Given $U\in H^0$, put $f=I_0U$, so $J_0U=\mathcal F_2f$. At $s=0$, [F3] gives $\mathcal F(E_0U)=u_{J_0U}$, while [F5] gives $\mathcal F(u_f)=u_{\mathcal F_2f}=u_{J_0U}$. Injectivity [F7] yields $E_0U=u_f$. Since $I_0$ is onto, every regular distribution $u_f$ with $f\in L^2$ occurs as an $E_0$ image; injectivity of $E_0$ in [F3] makes this identification unique. The isometry of $I_0$ gives $\|U\|_{H^0}=\|I_0U\|_2$, and step 1.1 gives the Schwartz norm formula. [A1, F3, F4, F5, F7, step 1.2, step 1.1] ∎
