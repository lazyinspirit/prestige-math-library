---
id: thm-qa-12-exact-success-guarantee
kind: theorem
title: "Exact success for known positive amplitude with explicit dilution"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - alg-qa-12-exact-success-amplification
  - thm-qa-12-amplification-rotation-correctness
  - thm-qc-projective-measurement-outcome-law
  - thm-qc-projective-conditional-state
  - def-complex-trigonometric-and-hyperbolic-functions
  - cor-complex-trigonometric-and-hyperbolic-addition-formulas
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-pi-via-first-positive-cosine-zero
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-and-cosine-derivatives
  - thm-cosine-has-a-smallest-positive-zero
justified_by: []
proof_strategy: direct
axiom_use: "None; the proof uses exact supplied rotations and finite-dimensional state vectors."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Under the exact access and rotation assumptions of [[alg-qa-12-exact-success-amplification]], its output is good with probability $1$ for every $0<a\le1$. The $a=0$ branch returns fail and makes no claim that a good output exists.

## Facts & Assumptions

**Given:** The exact-success algorithm, its known weight $a$, and its supplied coherent flag operation and rotations.

[F1] [[alg-qa-12-exact-success-amplification]]: for $0<a<1$, the chosen $m,\theta',r$ satisfy the displayed formulas, and every iterate uses the modified pair $(A',\Pi')$.

[F2] [[thm-qa-12-amplification-rotation-correctness]]: a prepared state with good weight $\sin^2\theta'$ has good probability $\sin^2((2m+1)\theta')$ after $m$ standard iterates.

[F3] [[thm-qc-projective-measurement-outcome-law]]: the good measurement weight is the probability of that outcome.

[F4] [[thm-qc-projective-conditional-state]]: on a positive-probability projective branch, the conditional state is supported in the measured projection range.

[F5] [[cor-complex-trigonometric-and-hyperbolic-addition-formulas]] and [[cor-trigonometric-parity-and-pythagorean-identity]]: the angle-addition and $\sin^2x+\cos^2x=1$ identities hold.

[F6] [[thm-sine-and-cosine-derivatives]], [[thm-cosine-has-a-smallest-positive-zero]], and [[def-pi-via-first-positive-cosine-zero]]: $\sin'=\cos$, and cosine is positive before its first positive zero $\pi/2$; hence sine is increasing on $[0,\pi/2]$.

## Proof

1.1 The algorithm sets $m=\lceil\pi/(4\theta)-1/2\rceil$, so $m\ge\pi/(4\theta)-1/2$. Multiplying by $4\theta>0$ gives $4m\theta+2\theta\ge\pi$, hence $4m+2\ge\pi/\theta$ and $0<\theta'=\pi/(4m+2)\le\theta<\pi/2$. By sine monotonicity in [F6], $0<\sin^2\theta'\le\sin^2\theta=a$, so $0<r=\sin^2\theta'/a\le1$ and the two nonnegative square roots used in the supplied flag rotation are defined. [given, F1, F6, algebra]

2.1 In the prepared state, the good and bad components are $\sqrt a\,|G\rangle$ and $\sqrt{1-a}\,|B\rangle$. The coherent flag operation sets the temporary bit exactly on the good component; the controlled rotation places flag-$1$ amplitude $\sqrt r$ on that component and leaves the bad component with flag $0$; uncomputing the temporary bit returns it to $0$. Thus $A'|0\rangle$ has good component $\sqrt{ar}\,|G\rangle|1\rangle|0\rangle$. Since $ar=\sin^2\theta'$, the modified pair $(A',\Pi')$ has success weight $\sin^2\theta'$. [given, F1, step 1.1, construct, algebra]

3.1 The rotation theorem [F2] applied to the modified pair after $m$ iterates gives good probability [given, F1, F2, F3, F4, F5, step 2.1, algebra]
$$
\sin^2((2m+1)\theta')=\sin^2\!\left((2m+1)\frac{\pi}{4m+2}\right)=\sin^2(\pi/2)=1.
$$
By the projective outcome law [F3], its good branch occurs with probability one. Its conditional output has support in $\operatorname{ran}\Pi'$ by [F4]; the success flag is $1$ and the temporary bit was uncomputed to $0$ in step 2.1. [given, F1, F2, F3, F4, F5, step 2.1, algebra]

4.1 If $a=1$, the algorithm's direct branch prepares a state in $\operatorname{ran}\Pi_{\mathrm{good}}$, so [F3] gives good-outcome probability one and [F4] gives its conditional support. If $a=0$, it returns fail without normalizing a zero good component and makes no claim that a good state exists. [given, F1, F3, F4] ∎
