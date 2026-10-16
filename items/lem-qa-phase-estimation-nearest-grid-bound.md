---
id: lem-qa-phase-estimation-nearest-grid-bound
kind: lemma
title: Nearest-grid probability in phase estimation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - lem-qa-phase-estimation-outcome-kernel
  - lem-qa-phase-estimation-geometric-sum
  - lem-qa-phase-estimation-sine-chord-bounds
  - def-qa-circular-phase-distance
  - lem-integer-part
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - thm-kernel-and-fibres-of-complex-exponential
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - lem-complex-conjugation-and-modulus-laws
  - cor-trigonometric-parity-and-pythagorean-identity
justified_by: []
axiom_use: "None; the nearest label is constructed using the integer-part lemma."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §4.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6, §4.6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Lin Lin, Lecture Notes on Quantum Algorithms for Scientific Computation, §§16.1–16.3"
      url: "https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf"
---

## Statement

For every $m\ge1$, $Q=2^m$, and $\theta\in[0,1)$, a nearest grid label $y\in\{0,\ldots,Q-1\}$, minimizing $d_{\mathbb T}(\theta-y/Q)$, exists. Every nearest label satisfies
$$P_\theta(y)\ge\frac4{\pi^2}.$$
In particular, this holds at ties between adjacent labels and at the wrap-around between $Q-1$ and $0$.

## Facts & Assumptions

**Given:** $m\ge1$, $Q=2^m$, and $\theta\in[0,1)$.

[F1] For every real $t$, there is an integer $n=\lfloor t\rfloor$ with $n\le t<n+1$ ([[lem-integer-part]]).

[F2] For $x\in(-1,1)$, $d_{\mathbb T}(x)=\min(|x|,1-|x|)\in[0,1/2]$ ([[def-qa-circular-phase-distance]]).

[F3] The phase-estimation probability is $P_\theta(y)=Q^{-2}|\sum_{j<Q}\exp(2\pi ij(\theta-y/Q))|^2$ ([[lem-qa-phase-estimation-outcome-kernel]]).

[F4] If $z\ne1$, then $\sum_{j<Q}z^j=(1-z^Q)/(1-z)$ ([[lem-qa-phase-estimation-geometric-sum]]).

[F5] For $0\le u\le1/2$, $\sin(\pi u)\ge2u$, and for $v\ge0$, $\sin v\le v$ ([[lem-qa-phase-estimation-sine-chord-bounds]]).

[F6] The complex exponential is additive in its exponent, $\exp(w)=1$ exactly for $w\in2\pi i\mathbb Z$, and $\exp(it)=\cos t+i\sin t$ with $|\exp(it)|=1$ ([[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F7] Complex conjugation preserves modulus and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F8] Sine is odd and cosine is even ([[cor-trigonometric-parity-and-pythagorean-identity]]).

## Proof

1.1 Put $n=\lfloor Q\theta\rfloor$ and $r=Q\theta-n$, so $n\in\{0,\ldots,Q-1\}$ and $0\le r<1$ by [F1]. If $r\le1/2$, choose $y=n$; if $r>1/2$ and $n+1<Q$, choose $y=n+1$; if $r>1/2$ and $n+1=Q$, choose $y=0$. The resulting circular distance is respectively $r/Q$ or $(1-r)/Q$, at most $1/(2Q)$. [F1, F2, given, choose]

2.1 Every integer $k$ has a lift representation $k=y+sQ$ with $s\in\mathbb Z$ and $y\in\{0,\ldots,Q-1\}$: apply [F1] to $k/Q$ and set $s=\lfloor k/Q\rfloor$, $y=k-sQ$, so $0\le y<Q$. Thus grid labels and their lifts range over all integers, and minimizing circular phase distance is the same as choosing an integer nearest to $Q\theta=n+r$. If $r\le1/2$, every integer $k\le n$ is at distance at least $r$ and every $k\ge n+1$ is at distance at least $1-r\ge r$, so $n$ is nearest; when $r=1/2$, $n+1$ is also nearest. If $r>1/2$, every integer $k\le n$ is at distance at least $r>1-r$ and every $k\ge n+1$ is at distance at least $1-r$, so $n+1$ is nearest. If a nearest integer is $Q$, its label is $0$: this is the wrap-around choice in step 1.1 when $r>1/2$, and the tied wrap-around label when $r=1/2$. Thus every nearest label has distance $d\le1/(2Q)$. [step 1.1, F1, F2, algebra]

3.1 Fix a nearest label and set $x=\theta-y/Q$, $d=d_{\mathbb T}(x)$. Since $x\in(-1,1)$, the definition of $d$ gives an integer $\ell\in\{-1,0,1\}$ and sign $\varepsilon\in\{-1,1\}$ with $x=\ell+\varepsilon d$. By [F6], $\exp(2\pi ix)=\exp(2\pi i\varepsilon d)$. If $\varepsilon=-1$, Euler's formula and the evenness of cosine and oddness of sine in [F8] give $\exp(-2\pi id)=\overline{\exp(2\pi id)}$, so [F7] shows its distance from $1$ has the same modulus as for $d$. Euler's formula gives $1-\exp(2\pi id)=\exp(\pi id)(\exp(-\pi id)-\exp(\pi id))=-2i\exp(\pi id)\sin(\pi d)$. Since $|\exp(\pi id)|=1$ and $\sin(\pi d)\ge2d\ge0$ by [F5], $|1-\exp(2\pi ix)|=2\sin(\pi d)$. The same calculation with $Qx=Q\ell+\varepsilon Qd$ gives $|1-\exp(2\pi iQx)|=2\sin(\pi Qd)$ when $d>0$, because $Qd\le1/2$. [F5, F6, F7, F8, step 2.1, algebra]

4.1 When $d>0$, [F4] and step 3.1 yield $P_\theta(y)=Q^{-2}(\sin(\pi Qd)/\sin(\pi d))^2$. If $d=0$, then $x=0$ and [F3] gives $P_\theta(y)=1$. [F3, F4, step 3.1]

5.1 If $d>0$, step 2.1 gives $0<Qd\le1/2$. By [F5], $\sin(\pi Qd)\ge2Qd$ and $0<\sin(\pi d)\le\pi d$; hence step 4.1 gives $P_\theta(y)\ge Q^{-2}(2Qd/(\pi d))^2=4/\pi^2$. If $d=0$, step 4.1 gives $P_\theta(y)=1\ge4/\pi^2$. Thus every nearest label, including either label at a tie, has the claimed probability. [F5, step 4.1, step 2.1, algebra] ∎
