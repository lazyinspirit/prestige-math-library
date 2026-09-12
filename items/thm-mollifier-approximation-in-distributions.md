---
id: "thm-mollifier-approximation-in-distributions"
kind: "theorem"
title: "Mollifier approximation in distributions"
deps: ["thm-convolution-with-a-test-function-is-smooth", "lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis", "def-mollifier-family-generated-by-a-unit-mass-smooth-bump", "thm-test-function-operations-are-continuous", "def-countable-choice", "lem-distribution-pairing-with-smooth-parameter-families", "lem-riemann-lebesgue-comparison-for-distribution-test-integrands", "cor-change-of-variables-for-compactly-supported-functions", "thm-local-finite-order-characterization-of-distributions", "def-regular-distribution-from-a-locally-integrable-function", "thm-locally-integrable-functions-embed-in-distributions"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume Countable Choice for Lebesgue integration. Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be open, and let $u\in\mathcal D'(\Omega)$. Fix $\rho\in\mathcal D(\mathbb R^n)$ with $\int\rho=1$, and put $\rho_\varepsilon(x)=\varepsilon^{-n}\rho(x/\varepsilon)$ for $\varepsilon>0$. The smooth local convolution $f_\varepsilon(x)=u(\rho_\varepsilon(x-\cdot))$ is defined on $V_\varepsilon=\{x:x-\varepsilon\operatorname{supp}\rho\subseteq\Omega\}$. Its regular distribution converges weakly to $u$ locally: every test $\psi\in\mathcal D(\Omega)$ is supported in $V_\varepsilon$ for all sufficiently small positive $\varepsilon$, and $\int f_\varepsilon\psi\to u(\psi)$.

## Facts & Assumptions

[F1] The stated scaling defines a unit-mass-bump mollifier family ([[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]]).

[F2] Local convolution on the safe domain is smooth, and all derivatives commute with the distribution pairing ([[thm-convolution-with-a-test-function-is-smooth]]).

[F3] For compactly supported smooth parameter integrands, integration commutes with distribution pairing under Countable Choice ([[lem-distribution-pairing-with-smooth-parameter-families]]).

[F4] Compactly supported Riemann substitution is valid, and real and imaginary parts of bounded smooth box integrands have equal Riemann and Lebesgue integrals under Countable Choice ([[cor-change-of-variables-for-compactly-supported-functions]], [[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]).

[F5] A distribution has a finite-order estimate on every fixed compact test support ([[thm-local-finite-order-characterization-of-distributions]]).

[F6] Locally integrable functions have regular functionals ([[def-regular-distribution-from-a-locally-integrable-function]]), and under Countable Choice these embed into distributions ([[thm-locally-integrable-functions-embed-in-distributions]]). Countable Choice is assumed exactly for the Lebesgue-integral interfaces ([[def-countable-choice]]).

## Proof

**Given:** an integer $n\ge1$, $u,\Omega,\rho$, and Countable Choice.

1.1 Choose $R>0$ with $\operatorname{supp}\rho\subseteq\overline B(0,R)$. For a nonempty compact test support $K\subseteq\Omega$ choose $d>0$ such that $K+\overline B(0,2d)\subseteq\Omega$. If $\varepsilon R<d$, then $K\subseteq V_\varepsilon$, even with a fixed compact neighborhood inside it. F2 gives smoothness there. Hence $f_\varepsilon$ is Borel and bounded on every compact subset of its safe domain, so it is locally integrable; F6 types its integral functional as a regular distribution. No nonnegativity or symmetry of $\rho$ is required. [given, F1, F2, F6]

2.1 Apply F3 to $F(x,y)=\psi(x)\rho_\varepsilon(x-y)$, with parameter $x$ in $V_\varepsilon$, integrating on a compact neighborhood of $K$ contained in that domain. Its slices have a common compact support in $\Omega$ there. Outside $K$ the integrand is zero. Thus F3 and F6 give [step 1.1, F3, F6]
$$\int f_\varepsilon(x)\psi(x)\,dx=u(\psi_\varepsilon),\qquad \psi_\varepsilon(y)=\int\rho_\varepsilon(x-y)\psi(x)\,dx.$$
By the affine substitution $x=y+\varepsilon z$, justified for these compact smooth integrands by F4, $\psi_\varepsilon(y)=\int\rho(z)\psi(y+\varepsilon z)\,dz$. All these tests are supported in $K+\overline B(0,d)$. [step 1.1, F3, F4, F6]

3.1 Extend $\psi$ smoothly by zero to $\mathbb R^n$. Its every derivative is uniformly continuous. Differentiating the last compact integral (by uniform difference-quotient estimates, or F3's derivative clause) yields [step 2.1, F3, F4]
$$p_m(\psi_\varepsilon-\psi)\le \|\rho\|_{L^1}\max_{|\alpha|\le m}\sup_{y,\,|h|\le\varepsilon R}|\partial^\alpha\psi(y+h)-\partial^\alpha\psi(y)|\longrightarrow0.$$
Here unit mass subtracts $\psi(y)$ inside the integral; the displayed estimate is also the Riemann integral triangle estimate for continuous compact functions. F5 on the common compact support now gives $u(\psi_\varepsilon)\to u(\psi)$. This proves the assertion with step 2.1. If the test or domain is empty, both sides are zero; $\varepsilon=0$ is a limit endpoint, not a defined kernel. Countable Choice enters only through F3, F4 and the Lebesgue regular-distribution interpretation. $\square$ [step 2.1, F3, F4, F5, F6]
