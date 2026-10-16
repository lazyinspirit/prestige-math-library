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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
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

**Given:** The exact-success algorithm, its known weight $a$, and its supplied coherent flag operation, rotations, and the selected enlarged-reflection and terminal-instrument implementations.

[F1] [[alg-qa-12-exact-success-amplification]]: for $0<a<1$, the chosen $m,\theta',r$ satisfy the displayed formulas, and every iterate uses the modified pair $(A',\Pi')$ with the explicitly specified access modes.

[F2] [[thm-qa-12-amplification-rotation-correctness]]: a prepared state with good weight $\sin^2\theta'$ has good probability $\sin^2((2m+1)\theta')$ after $m$ standard iterates.

[F3] [[thm-qc-projective-measurement-outcome-law]]: the good measurement weight is the probability of that outcome.

[F4] [[thm-qc-projective-conditional-state]]: on a positive-probability projective branch, the conditional state is supported in the measured projection range.

[F5] [[cor-complex-trigonometric-and-hyperbolic-addition-formulas]] and [[cor-trigonometric-parity-and-pythagorean-identity]]: the angle-addition and $\sin^2x+\cos^2x=1$ identities hold.

[F6] [[thm-sine-and-cosine-derivatives]], [[thm-cosine-has-a-smallest-positive-zero]], and [[def-pi-via-first-positive-cosine-zero]]: $\sin'=\cos$, and cosine is positive before its first positive zero $\pi/2$; hence sine is increasing on $[0,\pi/2]$.

## Proof


1.1 The algorithm sets $m=\lceil\pi/(4\theta)-1/2\rceil$, so $m\ge\pi/(4\theta)-1/2$. Multiplying by $4\theta>0$ gives $4m\theta+2\theta\ge\pi$, hence $4m+2\ge\pi/\theta$ and $0<\theta'=\pi/(4m+2)\le\theta<\pi/2$. By sine monotonicity in [F6], $0<\sin^2\theta'\le\sin^2\theta=a$, so $0<r=\sin^2\theta'/a\le1$ and the two nonnegative square roots used in the supplied flag rotation are defined. [given, F1, F6, algebra]

1.2 In the constructed zero reflection, on fixed logical flag/temporary bits $f,t$, the four $X$ gates and two Toffolis compute and then erase $q=(1-f)(1-t)$. The data sees $S_0$ exactly when $f=t=0$, and identity otherwise. This is $I-2|0\rangle\langle0|_H\otimes|00\rangle\langle00|_{F,T}=S'_0$. In the constructed good reflection, split any data vector as $v_g+v_b$ with $v_g=\Pi_{\mathrm{good}}v$. The first flag call records $1$ on $v_g$ and $0$ on $v_b$ in $q$; $CZ(q,F)$ multiplies only $v_g$ with $F=1$ by $-1$, and the inverse flag call clears $q$. Thus it is $I-2\Pi_{\mathrm{good}}\otimes|1\rangle\langle1|_F\otimes I_T=S'_{\mathrm{good}}$ for arbitrary $T$. Linearity extends both calculations to every logical vector with clean external scratch. Direct modes supply these same operators by hypothesis. [given, F1, construct, algebra]

1.3 For the optional constructed terminal instrument, the coherent computation into $d$ records exactly the predicate defining $\Pi'$. Measuring only $d$ therefore leaves the unnormalized logical branches $\Pi'\rho\Pi'$ and $(I-\Pi')\rho(I-\Pi')$; reversing the conjunction and flag computation clears $d,q$ within either branch without measuring the good component separately. This is the stated projective instrument. The direct mode supplies it by hypothesis. [given, F1, F3, F4, construct, algebra]

2.1 In the prepared state, the good and bad components are $\sqrt a\,|G\rangle$ and $\sqrt{1-a}\,|B\rangle$. The coherent flag operation sets the temporary bit exactly on the good component; the controlled rotation places flag-$1$ amplitude $\sqrt r$ on that component and leaves the bad component with flag $0$; uncomputing the temporary bit returns it to $0$. Thus $A'|0'\rangle$ has good component $\sqrt{ar}\,|G\rangle|1\rangle|0\rangle$. Since $ar=\sin^2\theta'$, the modified pair $(A',\Pi')$ has success weight $\sin^2\theta'$. [given, F1, step 1.1, construct, algebra]

3.1 By step 1.2 the selected access modes implement the exact modified-pair iterates with external scratch reset after each call. The two-dimensional amplification plane is spanned by the good and bad components of $A'|0'\rangle$, both with $T=0$ by step 2.1; it therefore retains $T=0$. The rotation theorem [F2] applied after $m$ iterates gives the following good probability. [given, F1, F2, F3, F4, F5, step 2.1, step 1.2, step 1.3, algebra] $$ \sin^2((2m+1)\theta')=\sin^2\!\left((2m+1)\frac{\pi}{4m+2}\right)=\sin^2(\pi/2)=1. $$ By the projective outcome law [F3], its good branch occurs with probability one. Its conditional output has support in $\operatorname{ran}\Pi'$ by [F4]; the success flag is $1$ and the temporary bit was uncomputed to $0$ in step 2.1. [given, F1, F2, F3, F4, F5, step 2.1, step 1.2, step 1.3, algebra]

4.1 If $a=1$, the algorithm's direct branch prepares a state in $\operatorname{ran}\Pi_{\mathrm{good}}$, so [F3] gives good-outcome probability one and [F4] gives its conditional support. If $a=0$, it returns fail without normalizing a zero good component and makes no claim that a good state exists. [given, F1, F3, F4] ∎

