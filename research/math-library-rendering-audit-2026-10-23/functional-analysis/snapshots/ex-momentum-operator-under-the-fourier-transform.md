---
id: ex-momentum-operator-under-the-fourier-transform
kind: example
title: Momentum operator under the Fourier transform
deps: ["lem-real-ltwo-multipliers-and-unitary-transport", "thm-plancherel", "thm-fourier-transform-maps-schwartz-space-continuously-to-itself", "thm-fourier-translation-modulation-dilation-and-reflection-laws", "lem-schwartz-space-is-dense-in-l-two", "thm-l-one-l-two-agreement-of-fourier-transform", "lem-complex-translation-and-approximate-identity-interfaces", "def-countable-choice"]
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
    - title: Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd edition
      url: https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf
      locator: §2.2 multiplication examples (2.15), (2.20), (2.22)–(2.27), pp.66–69; §8.1 (8.1)–(8.4), pp.207–208. Generator/domain and transport proved directly here.
---

## Statement

Assume countable choice. On complex $L^2(\mathbb R)$, with negative-sign $2\pi$ Fourier convention, put
$$D(P)=\{f\in L^2:\xi\mathcal F_2f\in L^2\},\qquad P=\mathcal F_2^{-1}M_{2\pi\xi}\mathcal F_2.$$
Then $P$ is self-adjoint, agrees with $-i\,d/dx$ on Schwartz functions, and $e^{itP}f=f(\cdot+t)$ in $L^2$. The exponential is the explicitly transported multiplier group. Its derivative at zero exists precisely on $D(P)$ and equals $iPf$.

## Facts & Assumptions

**Given:** [[def-countable-choice]] and first-variable-linear pairing.

[F1] Real finite measurable multipliers and unitary transport have the proved adjoint domain and group-generator properties ([[lem-real-ltwo-multipliers-and-unitary-transport]]).

[F2] $\mathcal F_2$ is unitary ([[thm-plancherel]]).

[F3] Fourier preserves Schwartz space and sends derivatives to multiplication by $2\pi i\xi$ ([[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]).

[F4] The translation law is $\widehat{\tau_af}(\xi)=e^{-2\pi ia\xi}\widehat f(\xi)$ ([[thm-fourier-translation-modulation-dilation-and-reflection-laws]]).

[F5] Schwartz classes are dense in $L^2$ ([[lem-schwartz-space-is-dense-in-l-two]]).

[F6] Integral and norm Fourier transforms agree on the intersection ([[thm-l-one-l-two-agreement-of-fourier-transform]]).

[F7] Translation is an isometry of complex $L^2$ ([[lem-complex-translation-and-approximate-identity-interfaces]]).

## Verification

1.1 The multiplier $m(\xi)=2\pi\xi$ is real, finite and measurable. Apply [F1] with the specified unitary $U=\mathcal F_2$ from [F2]. The domain condition $mUf\in L^2$ is equivalent to $\xi Uf\in L^2$ since $2\pi\ne0$. Hence [F1] gives exactly the stated self-adjoint operator and the strongly continuous group $e^{itP}=\mathcal F_2^{-1}M_{e^{2\pi it\xi}}\mathcal F_2$, including both directions of its derivative-domain criterion. [F1, F2, given]

2.1 If $f\in\mathcal S$, [F3] gives $\mathcal F(-if')=2\pi\xi\widehat f$. The left side is a Schwartz function and hence is in $L^2$; by [F6] and [F2], this proves $f\in D(P)$ and $Pf=-if'$. Also [F4] with $a=-t$ gives $\mathcal F(f(\cdot+t))=e^{2\pi it\xi}\widehat f$. By [F6] and step 1.1 it follows that $e^{itP}f=f(\cdot+t)$ for Schwartz $f$, with the plus sign appropriate to $e^{itP}$. [step 1.1, F2, F3, F4, F6]

3.1 For any $f\in L^2$, use [F5] and countable choice to take $f_j\in\mathcal S$ tending to $f$. Both $e^{itP}$ and $f\mapsto f(\cdot+t)$ are isometries, respectively by step 1.1 and [F7]. Therefore the norm of their difference on $f$ is at most $2\|f-f_j\|_2$, since it is zero on $f_j$ by step 2.1. Let $j\to\infty$. This proves the group identity on every class. The exact domain and derivative assertion remain those proved in step 1.1; no unspecified self-adjoint extension or general functional calculus is used. [step 1.1, step 2.1, F5, F7, given] ∎
