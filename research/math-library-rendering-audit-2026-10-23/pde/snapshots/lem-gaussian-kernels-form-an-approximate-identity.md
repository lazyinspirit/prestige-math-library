---
id: lem-gaussian-kernels-form-an-approximate-identity
kind: lemma
title: "Gaussian kernels form an approximate identity"
status: published
origin: pipeline
deps:
  - def-countable-choice
  - def-l-one-approximate-identity-on-rn
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-dominated-convergence
  - thm-linear-change-of-variables-for-lebesgue-measure
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item lem-gaussian-kernels-form-an-approximate-identity; evidence research/frontier-38-owner-30-reader-3.md, research/frontier-38-owner-30-reader-findings-3.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§5.1.1–5.1.2, printed pp. 129–131, (5.6)–(5.9), Theorem 5.5"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Definition 1.0.1 and Lemma 1.0.2, pp. 1–2"
---

## Statement

Assume Countable Choice. For $n\ge1$, the kernels $\Gamma_t$ are positive with
unit mass and $\|\Gamma_t\|_1=1$. For every $\delta>0$,
$\int_{|x|>\delta}\Gamma(x,t)\,dx\to0$ as $t\downarrow0$. Thus they form an
$L^1$ approximate identity.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, and $\delta>0$ wherever it appears.

[A1] Countable Choice is the hypothesis carried by the cited integration
interface ([[def-countable-choice]]).

[F1] For every $t>0$ the kernel satisfies
$\Gamma(\cdot,t)>0$, $\int_{\mathbb R^n}\Gamma(x,t)\,dx=1$, and the parabolic
scaling identity $\Gamma(\lambda x,\lambda^2t)=\lambda^{-n}\Gamma(x,t)$ for
every $\lambda>0$ and $x\in\mathbb R^n$
([[lem-heat-kernel-normalisation-scaling-and-derivatives]]).

[F2] An $L^1$ approximate identity on $\mathbb R^n$ is a family
$(K_\varepsilon)_{\varepsilon>0}\subseteq L^1(\mathbb R^n)$ with
$\int K_\varepsilon=1$, with $\|K_\varepsilon\|_1$ bounded independently of
$\varepsilon$, and with $\int_{|x|>\delta}|K_\varepsilon|\to0$ as
$\varepsilon\to0^+$ for every $\delta>0$
([[def-l-one-approximate-identity-on-rn]]).

[F3] If $f_n\to f$ almost everywhere and $|f_n|\le g$ almost everywhere for a
single integrable nonnegative $g$, then $\int f_n\to\int f$
([[thm-dominated-convergence]]).

[F4] For a $C^1$ diffeomorphism $T:U\to V$ of open sets and every nonnegative
Lebesgue measurable $f:V\to[0,\infty]$,
$\int_Vf(y)\,dy=\int_Uf(T(x))|\det DT(x)|\,dx$; the scaling $x=\sqrt t\,z$ is
such a diffeomorphism with $|\det DT|=t^{n/2}$
([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]],
[[thm-linear-change-of-variables-for-lebesgue-measure]]).



## Proof

**Proof technique:** direct.

1.1 Work under [A1] and fix $t>0$. By [F1] the kernel is strictly positive with $\int_{\mathbb R^n}\Gamma(x,t)\,dx=1$, so $\Gamma_t\in L^1(\mathbb R^n)$, $\Gamma_t>0$ and $\|\Gamma_t\|_1=1$. [A1, F1, given]

2.1 Tail estimate: by the scaling clause of [F1] with $\lambda=\sqrt t$ and with $x$ replaced by $x/\sqrt t$, $\Gamma(x,t)=t^{-n/2}\Gamma(x/\sqrt t,1)$; the diffeomorphism substitution $x=\sqrt t\,z$ of [F4] therefore gives $\int_{|x|>\delta}\Gamma(x,t)\,dx=\int_{|z|>\delta/\sqrt t}\Gamma(z,1)\,dz$ for every $\delta>0$. As $t\downarrow0^+$ the integrands $1_{\{|z|>\delta/\sqrt t\}}\Gamma(z,1)$ are dominated by the fixed integrable function $\Gamma(\cdot,1)$ from step 1.1 and converge at every $z\ne0$ to $0$, so dominated convergence [F3] gives $\int_{|z|>\delta/\sqrt t}\Gamma(z,1)\,dz\to0$. [step 1.1, F1, F3, F4, given]

3.1 Steps 1.1 and 2.1 verify the three clauses of [F2] for the family $K_\varepsilon:=\Gamma(\cdot,\varepsilon)$: unit integral, the uniform $L^1$ bound $\|K_\varepsilon\|_1=1$, and the vanishing of the tails; hence $(\Gamma(\cdot,t))_{t>0}$ is an $L^1$ approximate identity. [step 1.1, step 2.1, F2, given] ∎
