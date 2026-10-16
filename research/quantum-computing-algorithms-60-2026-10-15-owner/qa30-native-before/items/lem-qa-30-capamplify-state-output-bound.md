---
id: lem-qa-30-capamplify-state-output-bound
kind: lemma
title: "Capped randomized amplitude amplification preserves a flagged output"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-projective-measurement
  - def-qc-reflection
  - thm-qc-reflection-unitary-involution
  - thm-sine-and-cosine-addition-formulas
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-real-exponential-function-and-e
  - thm-exponential-is-strictly-increasing
  - def-natural-logarithm
  - thm-complex-exponential-addition-and-real-extension
  - lem-exponential-series-has-infinite-radius
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brassard, Høyer, Mosca, and Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
verification:
  precheck: pass
---

## Statement

Let $V$ be a supplied finite-dimensional unitary preparation, $\Pi$ a supplied success projector, and $|0\rangle$ the declared initial vector. Let $p=\|\Pi V|0\rangle\|^2\ge p_{\rm low}>0$, where $p_{\rm low}$ is a supplied positive rational, and let $0<\rho<1$ be a supplied rational failure target. The following finite cap-amplification procedure returns the normalized good projection $\Pi V|0\rangle/\sqrt p$ (up to global phase) with probability at least $1-\rho$. If $p_{\rm low}\ge1/2$, it uses direct verified samples. Otherwise, in each round it first takes one direct sample; after failure it draws $b=\lceil\log_2K\rceil$ fair bits, where $K=\lceil1/\sqrt{p_{\rm low}}\rceil$, obtaining an integer $J$ uniformly from $0,\ldots,2^b-1$. It runs $J$ Grover iterations only when $J<K$; $J\ge K$ counts as that round's randomized-branch failure. Use $N=\lceil16\ln(1/\rho)\rceil+16$ fresh rounds and return FAIL only after the cap. The calls to $V,V^*$, reflections, verifier, $bN$ random bits, and output are explicit; the call count is $O(p_{\rm low}^{-1/2}(1+\ln(1/\rho)))$.

## Facts & Assumptions

**Given:** A unit vector $|\psi\rangle=V|0\rangle$, a success projector $\Pi$, exact reflections about $|\psi\rangle$ and the good subspace implemented using the supplied preparation/access, and a verifier that accepts exactly the good flag.

[F1] [[def-qc-controlled-unitary-access]]: controlled uses of a supplied finite unitary are separately declared access operations.

[F2] [[def-qc-inverse-unitary-access]]: the inverse preparation is the adjoint circuit and its calls are separately charged.

[F3] [[def-qc-projective-measurement]]: measurement of the success projector has the corresponding projected branch.

[F4] [[thm-sine-and-cosine-addition-formulas]]: sine addition gives the finite-angle recurrence.

[F5] [[cor-trigonometric-parity-and-pythagorean-identity]]: $\sin^2\theta+\cos^2\theta=1$.

[F6] [[thm-qc-reflection-unitary-involution]]: the two projector reflections $2\Pi-I$ and $I-2\Pi$ are self-adjoint unitary involutions.

[F7] [[def-real-exponential-function-and-e]]: $\exp(x)=\sum_{n=0}^{\infty}x^n/n!$ for real $x$.

[F8] [[thm-exponential-is-strictly-increasing]]: the real exponential is strictly increasing.

[F9] [[def-natural-logarithm]]: $\exp(\ln y)=y$ for every $y>0$.

[F10] [[thm-complex-exponential-addition-and-real-extension]]: $\exp(x+y)=\exp(x)\exp(y)$ for real $x,y$.

[F11] [[lem-exponential-series-has-infinite-radius]]: the real exponential power series converges absolutely at every real input.

## Proof

**Proof technique:** direct.

1.1 If $p=1$, a direct sample succeeds. If $0<p<1$, set $\sin\theta=\sqrt p$ with $0<\theta<\pi/2$, and define unit vectors $|B\rangle=(I-\Pi)|\psi\rangle/\sqrt{1-p}$ and $|G\rangle=\Pi|\psi\rangle/\sqrt p$. Then $|\psi\rangle=\cos\theta|B\rangle+\sin\theta|G\rangle$. In this ordered basis, reflection about $|\psi\rangle$ has matrix $\begin{pmatrix}\cos2\theta&\sin2\theta\\\sin2\theta&-\cos2\theta\end{pmatrix}$ and the phase flip on the good space is $\operatorname{diag}(1,-1)$. Their product is $\begin{pmatrix}\cos2\theta&-\sin2\theta\\\sin2\theta&\cos2\theta\end{pmatrix}$, a rotation by $2\theta$. Induction using [F4] shows that after $j$ iterations the good probability is $\sin^2((2j+1)\theta)$. [given, F4, F5, F6, algebra, induction]

2.1 For $p_{\rm low}<1/2$, let $b=\lceil\log_2K\rceil$. Since $K\ge2$, minimality of $b$ gives $K/2^b\ge1/2$. Conditional on $J<K$, the draw is uniform on the integers $0,\ldots,K-1$. For $p\le1/2$, using $\sin^2u=(1-\cos(2u))/2$ and $2\sin(2\theta)\cos((4j+2)\theta)=\sin((4j+4)\theta)-\sin(4j\theta)$ and summing over $j$ gives $\frac1K\sum_{j=0}^{K-1}\sin^2((2j+1)\theta)=\frac12-\frac{\sin(4K\theta)}{4K\sin(2\theta)}\ge\frac12-\frac1{4K\sin(2\theta)}$. Since $\sin(2\theta)=2\sqrt{p(1-p)}\ge\sqrt{2p}$ and $K\ge1/\sqrt{p_{\rm low}}$, the conditional mean success is at least $1/2-1/(4\sqrt2)>1/8$. Multiplying by $\Pr(J<K)=K/2^b\ge1/2$ gives randomized-branch success at least $1/16$. If $p>1/2$, the direct sample succeeds with probability greater than $1/2$. [given, step 1.1, F4, F5, algebra]

3.1 In each round, the direct sample succeeds with probability $p$. When it does not, step 2.1 gives randomized-branch success at least $1/16$ if $p\le1/2$; for $p>1/2$ or $p_{\rm low}\ge1/2$, direct success already exceeds $1/2$. Thus every fresh round succeeds with probability at least $1/16$. Put $t=1/16$. By [F7], $\exp(-t)=1-t+\sum_{k=1}^{\infty}\bigl(t^{2k}/(2k)!-t^{2k+1}/(2k+1)!\bigr)\ge1-t$: the series can be paired by [F11], and each pair equals $\frac{t^{2k}}{(2k)!}(1-\frac{t}{2k+1})\ge0$. Hence $(15/16)^N\le\exp(-N/16)$. The cap gives $N/16\ge\ln(1/\rho)$, so [F8] implies $\exp(-N/16)\le\exp(-\ln(1/\rho))$. By [F9] and [F10], $\exp(-\ln(1/\rho))\exp(\ln(1/\rho))=1$ and $\exp(\ln(1/\rho))=1/\rho$, hence $\exp(-\ln(1/\rho))=\rho$. Independence of the fresh rounds now bounds total failure by $\rho$. [given, F7, F8, F9, F10, F11, step 2.1, algebra]

4.1 Every successful direct or Grover branch is a projection onto $\operatorname{ran}\Pi$ of the same initial vector. In step 1.1 each iterate changes only the two scalar coordinates in $\operatorname{span}\{|B\rangle,|G\rangle\}$, so its good component is a scalar multiple of $|G\rangle$. Verification therefore preserves exactly the normalized good ray. Each round uses at most $K-1$ Grover iterations plus one direct preparation and $b$ random bits; multiplying by $N$ proves the stated call and random-bit orders, with each controlled/inverse/reflection/verifier cost charged. [given, F1, F2, F3, step 1.1, algebra] ∎
