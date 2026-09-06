---
id: lem-finite-lacunary-fourier-sums-have-their-coefficient-ell-two-norm
kind: lemma
title: "Finite lacunary Fourier sums have their coefficient ell-two norm"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed., §3.6.2"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement

If $J\subset\mathbb N_{>0}$ is finite and
$f=\sum_{j\in J}a_je_{\lambda_j}$ is a lacunary sum in the sense of
[[def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series]], then

$$\|f\|_{L^2(\mathbb T)}^2=\sum_{j\in J}|a_j|^2.$$ 

## Facts & Assumptions

**Given:** A finite set $J$ and the displayed lacunary sum $f$.

## Proof

**Proof technique:** direct character integration.

1.1 Expanding $|f|^2$ gives [given, algebra]
$$|f(x)|^2=\sum_{j,k\in J}a_j\overline{a_k}e_{\lambda_j-\lambda_k}(x).$$
The frequencies are distinct because the defining sequence is strictly
increasing. [given, algebra]

2.1 For an integer $n$, direct integration gives [step 1.1, algebra]
$\int_0^1e_n(x)\,dx=1$ when $n=0$ and $0$ otherwise. Thus integration of
step 1.1 retains precisely the $j=k$ terms and gives
$$\int_0^1|f(x)|^2\,dx=\sum_{j\in J}|a_j|^2.$$ [step 1.1, algebra] ∎
