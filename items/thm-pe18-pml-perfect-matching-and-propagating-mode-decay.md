---
id: thm-pe18-pml-perfect-matching-and-propagating-mode-decay
kind: theorem
title: Perfect matching and attenuation for non-grazing propagating modes
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-pe18-cartesian-complex-stretch-pml]
justified_by: []
proof_strategy: direct
axiom_use: "No axiom is used; the proof is an exact chain-rule substitution for one Fourier mode."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Steven G. Johnson, Notes on Perfectly Matched Layers (PMLs), §§3.1–3.2"
      url: "https://arxiv.org/pdf/2108.05348"
    - title: "Michler, Demkowicz, Kurtz, and Pardo, Improving the performance of Perfectly Matched Layers by means of hp-adaptivity, §§2.1–2.2"
      url: "https://www.cs.ox.ac.uk/people/christian.michler/Homepage%20of%20Christian%20Michler/Publications_files/MicDemKurPar2007NMPDE.pdf"
---

## Statement

Let $k>0$, $\eta\in\mathbb R^2$ satisfy $|\eta|<k$, and let $q=\sqrt{k^2-|\eta|^2}>0$ be the outgoing normal branch. In the stretch of [[def-pe18-cartesian-complex-stretch-pml]],
$$u(x,y)=e^{iqX(x)+i\eta\cdot y}$$
solves the pulled-back Helmholtz equation. At $x=0$, its value and normal flux $(1/s)\partial_xu$ agree with those of the physical mode $e^{iqx+i\eta\cdot y}$. Its modulus is $e^{-qS(x)}$. If a family of modes satisfies $q\ge q_0>0$, then $|u(x,y)|\le e^{-q_0S(x)}$ uniformly; whenever $S(x)\ge\sigma_0x$ for some $\sigma_0>0$, this is at most $e^{-q_0\sigma_0x}$. No uniform bound is asserted as $q\downarrow0$.

## Facts & Assumptions

**Given:** The constant-coefficient Cartesian operator and stretch data in [F1].

[F1] [[def-pe18-cartesian-complex-stretch-pml]]: $X=x+iS$, $s=X'=1+i\sigma$, and the operator is $s^{-1}\partial_x(s^{-1}\partial_x)+\Delta_y+k^2$.

## Proof

**Given:** $k>0$, $|\eta|<k$, $q=\sqrt{k^2-|\eta|^2}$, and [F1].

1.1 For the stated mode, $\partial_xu=iqs(x)u$, so $s^{-1}\partial_xu=iqu$ and $s^{-1}\partial_x(s^{-1}\partial_xu)=s^{-1}\partial_x(iqu)=-q^2u$. Also $\Delta_yu=-|\eta|^2u$. Since $q^2+|\eta|^2=k^2$, substitution into [F1] gives zero. [given, F1, algebra]

2.1 At $x=0$, $S(0)=0$ and $\sigma(0)=0$ by continuity and the definition, so $X(0)=0$, $s(0)=1$, and the stretched mode and its normal flux equal $e^{i\eta\cdot y}$ and $iqe^{i\eta\cdot y}$, respectively, exactly as in the physical outgoing mode. Since $|e^{iq(x+iS)+i\eta\cdot y}|=e^{-qS}$, the bounds follow from $q\ge q_0$ and, when assumed, $S(x)\ge\sigma_0x$. As $q\downarrow0$, the attenuation bound tends to one, so this proof gives no uniform grazing decay. [F1, step 1.1, algebra] ∎
