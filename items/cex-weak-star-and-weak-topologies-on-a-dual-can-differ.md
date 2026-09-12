---
id: "cex-weak-star-and-weak-topologies-on-a-dual-can-differ"
kind: "counterexample"
title: "Weak star and weak topologies on a dual can differ"
deps: ["thm-dual-of-c0-is-ell-one", "def-weak-star-convergence", "def-weak-convergence-of-nets-and-sequences"]
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
    - title: "Bühler–Salamon, Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Teschl, Topics in Real and Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

The weak and weak-star topologies on a normed dual always coincide. They differ on $\ell^1=c_0^*$ over either the real or complex scalars.

## Facts & Assumptions

[F1] The dual of $c_0$ is isometrically $\ell^1$ under the bilinear pairing $a(x)=\sum_ka_kx_k$ ([[thm-dual-of-c0-is-ell-one]]).

[F2] Weak-star convergence tests vectors of the specified predual ([[def-weak-star-convergence]]), whereas weak convergence tests all bounded functionals on the space in question ([[def-weak-convergence-of-nets-and-sequences]]).

## Counterexample

**Given:** $e_n\in\ell^1=c_0^*$, the coordinate unit sequences.

1.1 For every $x\in c_0$, $e_n(x)=x_n\to0$ by the definition of $c_0$. Hence $e_n$ converges to zero for $\sigma(\ell^1,c_0)$. [given, F1, F2]

2.1 The scalar-linear map $H(a)=\sum_ka_k$ on $\ell^1$ is well-defined by absolute convergence and satisfies $|H(a)|\le\|a\|_1$. Thus it is a weakly continuous functional on $\ell^1$, but $H(e_n)=1$ for all $n$. The sequence is not weakly null. Equal topologies would have the same convergent sequences and limits, so the weak and the specified weak-star topologies differ. $\square$ [step 1.1, F2, algebra]
