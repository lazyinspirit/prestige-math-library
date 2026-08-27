---
id: thm-perron-envelope-is-harmonic
kind: theorem
title: "The regularized Perron envelope is harmonic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-perron-envelope-for-the-plane-dirichlet-problem, lem-perron-family-is-nonempty-and-bounded, def-poisson-modification-of-a-subharmonic-function, thm-poisson-modification-preserves-subharmonicity-and-majorizes, lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity, thm-harnack-convergence-principle-for-plane-harmonic-functions, thm-upper-envelope-theorem-for-plane-subharmonic-functions, thm-maximum-principle-for-plane-subharmonic-functions]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, 2nd ed."
      url: "https://www.axler.net/HFT.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a bounded complex domain and let
$\varphi:\partial\Omega\to\mathbb R$ be continuous. Then the regularized Perron
envelope $H_\varphi$ is harmonic on $\Omega$.

## Facts & Assumptions

**Given:** A bounded complex domain $\Omega$ and a continuous boundary datum $\varphi:\partial\Omega\to\mathbb R$.

[L1] The Perron family is nonempty, every lower function is bounded above by $M=\max_{\partial\Omega}\varphi$, and the envelope satisfies $m\le U_\varphi\le M$ ([[lem-perron-family-is-nonempty-and-bounded]]).

[L2] Poisson modification of a lower function on an interior disc stays subharmonic, is harmonic on that disc, majorizes the original lower function, and is again a lower function because it is unchanged near the outer boundary of $\Omega$ ([[thm-poisson-modification-preserves-subharmonicity-and-majorizes]], [[def-poisson-modification-of-a-subharmonic-function]]).

[L3] Finite maxima preserve subharmonicity and therefore preserve membership in the Perron family ([[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]]).

[L4] An increasing harmonic sequence bounded above at one point converges locally uniformly to a harmonic limit ([[thm-harnack-convergence-principle-for-plane-harmonic-functions]]).

[L5] The upper-semicontinuous regularization of a locally bounded-above subharmonic supremum is subharmonic ([[thm-upper-envelope-theorem-for-plane-subharmonic-functions]]).

[L6] A subharmonic function that attains a finite interior maximum is constant ([[thm-maximum-principle-for-plane-subharmonic-functions]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the family $\mathcal P(\varphi,\Omega)$ is locally bounded above. Applying [L5] to that family shows that $H_\varphi$ is subharmonic on $\Omega$. [L1, L5]

2.1 Fix $z_0\in\Omega$ and choose a closed disc $\overline D\Subset\Omega$ centered at $z_0$. By the definition of upper-semicontinuous regularization, choose points $z_n\to z_0$ with $U_\varphi(z_n)>H_\varphi(z_0)-1/n$. For each $n$, choose $v_n\in\mathcal P(\varphi,\Omega)$ with $v_n(z_n)>U_\varphi(z_n)-1/n$. [step 1.1, given, choose]

3.1 Put $w_n=\max(v_1,\dots,v_n)$. By [L3], each $w_n$ lies in the Perron family, and $w_n(z_n)>H_\varphi(z_0)-1/n$. Let $h_n=P_Dw_n$. By [L2], each $h_n$ is harmonic on $D$, belongs to the Perron family, majorizes $w_n$, and the sequence $(h_n)$ is increasing because the sequence $(w_n)$ is increasing. Step [L1] also gives $h_n\le M$ on $D$. [L1, L2, L3, step 2.1]

4.1 The sequence $(h_n)$ is increasing and bounded above at every point by $M$, so [L4] yields a harmonic limit $h$ on $D$. Since each $h_n$ belongs to the Perron family, one has $h_n\le U_\varphi\le H_\varphi$, hence $h\le H_\varphi$ on $D$. On the other hand, [step 3.1, L4]
$$H_\varphi(z_0)-\frac1n<h_n(z_n)\le h(z_n)\le H_\varphi(z_n).$$
Letting $n\to\infty$ and using continuity of $h$ and upper semicontinuity of $H_\varphi$ gives $h(z_0)=H_\varphi(z_0)$. [step 3.1, L4]

5.1 The function $H_\varphi-h$ is subharmonic on $D$: both $h$ and $-h$ are harmonic and therefore subharmonic, and [L3] handles sums with positive coefficients. Step 4.1 shows $H_\varphi-h\le0$ on $D$ and vanishes at the interior point $z_0$, so [L6] forces $H_\varphi-h$ to be constant $0$ on $D$. Hence $H_\varphi=h$ on $D$, and therefore $H_\varphi$ is harmonic near $z_0$. Since $z_0$ was arbitrary, $H_\varphi$ is harmonic on $\Omega$. [L3, L6, step 1.1, step 4.1] ∎
