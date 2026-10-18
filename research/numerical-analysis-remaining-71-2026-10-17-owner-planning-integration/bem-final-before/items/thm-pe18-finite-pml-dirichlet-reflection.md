---
id: thm-pe18-finite-pml-dirichlet-reflection
kind: theorem
title: Exact reflected-mode error from a finite Dirichlet-terminated PML
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-pe18-cartesian-complex-stretch-pml, thm-pe18-pml-perfect-matching-and-propagating-mode-decay]
justified_by: []
proof_strategy: direct
axiom_use: "No axiom is used; this is an exact two-mode boundary calculation in the continuous stretched coordinate."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Steven G. Johnson, Notes on Perfectly Matched Layers (PMLs), §2"
      url: "https://arxiv.org/pdf/2108.05348"
    - title: "Michler, Demkowicz, Kurtz, and Pardo, Improving the performance of Perfectly Matched Layers by means of hp-adaptivity, §§2.1–2.2"
      url: "https://www.cs.ox.ac.uk/people/christian.michler/Homepage%20of%20Christian%20Michler/Publications_files/MicDemKurPar2007NMPDE.pdf"
---

## Statement

For $q>0$, $A\ne0$, and a finite layer $0\le x\le L$ with $S(L)>0$, let a one-dimensional mode be $u(x)=Ae^{iqX(x)}+Be^{-iqX(x)}$, with the PML stretch from [[def-pe18-cartesian-complex-stretch-pml]]. Imposing $u(L)=0$ gives the reflected amplitude at the interface
$$\frac BA=-e^{2iqX(L)},\qquad \left|\frac BA\right|=e^{-2qS(L)}.$$
This is the exact continuous one-mode error for a Dirichlet termination.

## Facts & Assumptions

**Given:** A propagating mode $q>0$ and finite stretch data [F1].

[F1] [[def-pe18-cartesian-complex-stretch-pml]]: $X(L)=L+iS(L)$; the positive and negative normal modes in the stretched coordinate are $e^{iqX}$ and $e^{-iqX}$.

[F2] [[thm-pe18-pml-perfect-matching-and-propagating-mode-decay]]: the outgoing mode is matched at the interface and attenuated by $e^{-qS}$ in one pass.

## Proof

**Given:** $q>0$, $S(L)>0$, and [F1]–[F2].

1.1 The condition $u(L)=0$ reads $Ae^{iqX(L)}+Be^{-iqX(L)}=0$. Since exponentials never vanish, if $A\ne0$ division gives $B/A=-e^{2iqX(L)}$. [given, F1, algebra]

2.1 With $X(L)=L+iS(L)$, $|e^{2iqX(L)}|=|e^{2iqL-2qS(L)}|=e^{-2qS(L)}$. The result measures the reflected-to-incident coefficient at $x=0$, where $X(0)=0$; it is the two-way attenuation through the continuous layer. [F1, F2, step 1.1, algebra] ∎
