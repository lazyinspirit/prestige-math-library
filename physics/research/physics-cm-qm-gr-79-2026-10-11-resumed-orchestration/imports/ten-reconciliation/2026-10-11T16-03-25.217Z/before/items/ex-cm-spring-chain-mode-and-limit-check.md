---
id: ex-cm-spring-chain-mode-and-limit-check
kind: example
title: "A four-node cyclic chain mode with $a=c=1$: exact ODE check, dispersion value $\\omega^2=2$, and the continuum error bound"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [thm-cm-spring-chain-dispersion-relation, def-cm-cyclic-spring-chain, lem-cm-second-difference-remainder-bound, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, thm-algebra-of-derivatives]
dependency_roles:
  thm-cm-spring-chain-dispersion-relation: mathematical-premise
  def-cm-cyclic-spring-chain: mathematical-premise
  lem-cm-second-difference-remainder-bound: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 6.3 (chain modes, dispersion relation and the continuum limit)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014), Section 6.1 (the discrete chain and its continuum limit)"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"

  precheck: pass
proof_strategy: direct
---

## Example

Take $N=4$, $a=1$, $c=1$ in the cyclic chain of [[def-cm-cyclic-spring-chain]]. The wave number $\kappa=\pi/2$ gives

$$\omega^2=\frac{4c^2}{a^2}\sin^2\Bigl(\frac{\kappa a}{2}\Bigr)=4\sin^2\Bigl(\frac{\pi}{4}\Bigr)=2,\qquad \omega=\sqrt2,$$

and the profile $q_j(t)=\cos\bigl(\frac{\pi j}{2}-\sqrt2\,t\bigr)$, $j\in\mathbb Z/4$, solves the chain equation exactly; the continuum comparison at this wave number gives the exact error $|\omega^2-c^2\kappa^2|=\frac{\pi^2}{4}-2$ against the exact bound $\frac{c^2\kappa^4a^2}{12}=\frac{\pi^4}{192}$.

## Facts & Assumptions

**Given:** $N=4$, $a=1$, $c=1$, $\kappa=\pi/2$, $\omega=\sqrt2$ and $q_j(t)=\cos(\kappa j-\omega t)$.

[L1] The ansatz solves the cyclic chain for all $t$ if and only if $\omega^2=\frac{4c^2}{a^2}\sin^2(\kappa a/2)$; and for $|\kappa a|\le1$, $|\omega^2-c^2\kappa^2|\le c^2\kappa^4a^2/12$ ([[thm-cm-spring-chain-dispersion-relation]]).

[L2] The chain equation for the cosine ansatz reduces to $-2q_j=(q_{j+1}-2q_j+q_{j-1})$ by the addition formulas and the derivative of cosine ([[thm-sine-and-cosine-derivatives]], [[thm-sine-and-cosine-addition-formulas]], [[def-sine-and-cosine-by-power-series]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-algebra-of-derivatives]]).

## Verification

**Proof technique:** direct; substitute the numbers into the dispersion relation and evaluate the error bound.

1.1 Dispersion: $\frac{4c^2}{a^2}\sin^2(\kappa a/2)=4\sin^2(\pi/4)=4\cdot\frac12=2$, so by [L1] the ansatz with $\omega=\sqrt2$ solves the chain equation; explicitly, $q_j''=-2q_j$ and $(q_{j+1}-2q_j+q_{j-1})=-2q_j$ by [L2], matching the equation $q_j''=(q_{j+1}-2q_j+q_{j-1})$. [given, L1, L2, algebra]

2.1 Error bound: $\kappa^4=(\pi/2)^4=\pi^4/16$, so the bound is $c^2\kappa^4a^2/12=\pi^4/192$, and the exact error is $|\omega^2-c^2\kappa^2|=|2-\pi^2/4|$. Since $\pi^2/4>2$ (equivalently $\pi^2>8$), this error equals $\pi^2/4-2$, and the comparison $\pi^2/4-2\le\pi^4/192$ is equivalent to $48\pi^2-384\le\pi^4$; the latter holds for the constant $\pi$, as a numerical evaluation of the two exact closed forms shows, so the bound of [L1] is consistent at this wave number. The verification certifies the exact formulas; the final numerical comparison concerns the constant $\pi$ only and is not a measurement. [step 1.1, L1, algebra]

3.1 The example verifies the exact discrete dispersion at explicit parameters and checks that the continuum error bound is satisfied, not saturated, at this wave number. [step 1.1, step 2.1, algebra] ∎

## Remarks

- The arithmetic is exact for the dispersion value and for both closed forms; only the last comparison of the two $\pi$-expressions is numerical, with values strictly less than the bound (the error is about $0.467$ against a bound of about $0.507$). No physical identification of the chain parameters is asserted.
