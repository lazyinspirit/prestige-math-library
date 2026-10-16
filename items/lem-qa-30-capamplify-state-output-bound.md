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
  - thm-exponential-is-strictly-increasing
  - def-natural-logarithm
  - thm-complex-exponential-addition-and-real-extension
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

Let $V$ be a supplied finite-dimensional unitary preparation, $\Pi$ a supplied success projector, and $|0\rangle$ the declared initial vector. For every unit vector $|\phi\rangle$ on the sampler register, supply a two-outcome flag-only measurement instrument: its good outcome has probability $\|\Pi|\phi\rangle\|^2$ and returns the normalized branch $\Pi|\phi\rangle/\|\Pi|\phi\rangle\|$ when nonzero; its bad outcome returns the normalized $(I-\Pi)|\phi\rangle$ branch when nonzero. It leaves every score, label, and work register unmeasured, and its implementation and cost are declared. Let $p=\|\Pi V|0\rangle\|^2\ge p_{\rm low}>0$, where $p_{\rm low}$ is a supplied positive rational, and let $0<\rho<1$ be a supplied rational failure target. A Grover iteration is $G=(2|\psi\rangle\langle\psi|-I)(I-2\Pi)$, where $|\psi\rangle=V|0\rangle$, using the supplied exact reflections.

Set $K=\lceil1/\sqrt{p_{\rm low}}\rceil$ and let $N$ be the least positive integer for which the exact rational comparison $(15/16)^N\le\rho$ holds. These choices are finite: $K$ is found by integer squaring comparisons, and repeated multiplication by $15/16$ terminates because its powers tend to zero. If $p_{\rm low}\ge1/2$, take at most $N$ fresh preparations and apply the flag-only instrument to each, returning the first good branch or FAIL. Otherwise set $b=\lceil\log_2K\rceil$; in each of at most $N$ rounds, prepare $V|0\rangle$ and measure only the flag. Return its good branch if present. After a bad outcome, draw $b$ fair bits to obtain $J$ uniformly in $\{0,\ldots,2^b-1\}$. If $J<K$, prepare a fresh $V|0\rangle$, apply $J$ Grover iterations, and measure only the flag; return its good branch if present. The events $J\ge K$ and a failed amplified flag count as a failed round. Return FAIL only after the cap. This procedure returns the normalized good projection $\Pi V|0\rangle/\sqrt p$ up to global phase with probability at least $1-\rho$. Its preparation, inverse, reflection, verifier, random-bit, and output costs are charged; the calls to $V,V^*$ and reflections are $O(p_{\rm low}^{-1/2}(1+\ln(1/\rho)))$.

## Facts & Assumptions

**Given:** The declared preparation and exact reflections, the flag-only measurement instrument in the Statement, and the exact finite random bits and rational cap comparisons.

[F1] [[def-qc-controlled-unitary-access]]: controlled uses of a supplied finite unitary are separately declared access operations.

[F2] [[def-qc-inverse-unitary-access]]: the inverse preparation is the adjoint circuit and its calls are separately charged.

[F3] [[def-qc-projective-measurement]]: projective-measurement outcome weights are given by the Born rule; the flag-only branch update used here is an explicit supplied instrument in the Statement.

[F4] [[thm-qc-reflection-unitary-involution]]: projector reflections are self-adjoint unitary involutions.

[F5] [[thm-exponential-is-strictly-increasing]]: the real exponential is strictly increasing.

[F6] [[def-natural-logarithm]]: $\ln$ is the inverse of the positive real exponential.

[F7] [[thm-complex-exponential-addition-and-real-extension]]: the real exponential satisfies $\exp(x+y)=\exp(x)\exp(y)$.

## Proof

**Proof technique:** direct.

1.1 If $p=1$, the direct flag outcome is good. If $0<p<1$, put $u=\sqrt{1-p}$, $v=\sqrt p$, $z=u+iv$, and $\xi=z^2=a+i\beta$, so $a=1-2p$ and $\beta=2\sqrt{p(1-p)}$. The orthonormal vectors $|B\rangle=(I-\Pi)|\psi\rangle/u$ and $|G\rangle=\Pi|\psi\rangle/v$ give $|\psi\rangle=u|B\rangle+v|G\rangle$. In this ordered basis the reflection about $|\psi\rangle$ is $\begin{pmatrix}a&\beta\\\beta&-a\end{pmatrix}$ and $I-2\Pi=\operatorname{diag}(1,-1)$, so one Grover iteration has matrix $\begin{pmatrix}a&-\beta\\\beta&a\end{pmatrix}$. It multiplies the complex coordinate $u+iv$ by $\xi$, hence after $j$ iterations the good amplitude is $\operatorname{Im}(\xi^jz)=\operatorname{Im}(z^{2j+1})$. [given, F4, algebra, induction]

2.1 If $p_{\rm low}<1/2$, then $K\ge2$ and minimality of $b=\lceil\log_2K\rceil$ gives $K/2^b\ge1/2$. Conditional on $J<K$, the draw is uniform on $0,\ldots,K-1$. For $p\le1/2$, $(\operatorname{Im}w)^2=(1-\operatorname{Re}(w^2))/2$ and the finite geometric sum of $\xi^{2j+1}$ give $$\frac1K\sum_{j=0}^{K-1}\bigl(\operatorname{Im}(z^{2j+1})\bigr)^2=\frac12-\frac{\operatorname{Im}(\xi^{2K})}{4K\beta}\ge\frac12-\frac1{4K\beta}.$$ Here $\beta=2\sqrt{p(1-p)}\ge\sqrt{2p}$ and $K\ge1/\sqrt{p_{\rm low}}$, so $K\beta\ge\sqrt2$ and the conditional mean success exceeds $1/8$. Multiplication by $\Pr(J<K)\ge1/2$ gives randomized-branch success at least $1/16$. For $p>1/2$ the direct flag succeeds with probability greater than $1/2$. [given, step 1.1, algebra]

3.1 If $p\le1/2$, the direct-then-randomized round succeeds with probability at least $1/16$ by step 2.1; if $p>1/2$ or $p_{\rm low}\ge1/2$, its direct flag succeeds with probability at least $1/2$. Independent fresh rounds therefore fail altogether with probability at most $(15/16)^N\le\rho$ by the exact cap test. The comparison loop terminates because $(16/15)^N=(1+1/15)^N\ge1+N/15$ by the binomial theorem, so $(15/16)^N\le15/(15+N)\to0$. If $N>1$, minimality gives $(15/16)^{N-1}>\rho$; applying the increasing logarithm and using $\ln((16/15)^{N-1})=(N-1)\ln(16/15)$, with $\ln(16/15)>0$, gives $N-1<\ln(1/\rho)/\ln(16/15)$. The same asymptotic bound holds for $N=1$, so $N=O(1+\ln(1/\rho))$. Since $K=O(p_{\rm low}^{-1/2})$, the stated call bound follows. [given, F5, F6, F7, step 2.1, algebra]

4.1 Every successful branch is passed through the supplied flag-only instrument, so its returned state is the normalized good projection of that branch's input and no score, label, or work register is measured. Step 1.1 shows that each amplified good component is a scalar multiple of $|G\rangle$; direct success has the same good ray. Thus every successful return is $\Pi V|0\rangle/\sqrt p$ up to global phase. Each round uses at most $K-1$ Grover iterations, one direct preparation, at most one amplified preparation, and $b$ random bits; multiplying by $N$ proves the stated call and random-bit bounds, with each controlled, inverse, reflection, verifier, and output cost charged. [given, F1, F2, F3, step 1.1, algebra] ∎
