---
id: ex-nrqm-interference-uniform-phase-averaging
aliases: [nrqm-interference-uniform-phase-averaging]
kind: example
domain: physics
title: "A declared finite phase-averaging model reproduces the which-path law for orthogonal components"
status: draft
origin: session
dependency_level: 11
deps: [def-nrqm-interference-two-path-preparation-and-detection-model, pthm-nrqm-interference-coherent-and-mixture-detection-laws, post-nrqm-framework-preparation-and-apparatus, cor-sum-of-roots-of-unity, thm-complex-nth-roots-and-roots-of-unity, def-complex-exponential, def-countable-choice]
dependency_roles:
  def-nrqm-interference-two-path-preparation-and-detection-model: formulation-prerequisite
  pthm-nrqm-interference-coherent-and-mixture-detection-laws: physical-result
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  cor-sum-of-roots-of-unity: mathematical-premise
  thm-complex-nth-roots-and-roots-of-unity: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "An exact computation in the declared two-path preparation model of the pair for a declared statistical ensemble of preparations whose relative phase is uniformly distributed over the finitely many n-th roots of unity, in the case of orthogonal path components: the averaged bin law equals the which-path law with the norm weights, and the cross term averages to zero bin by bin. The example is a conditional computation in the declared model; it asserts no decoherence mechanism, no environmental model, no detector response, no counts and no empirical result, and it does not cover the continuous uniform phase distribution."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 1.3, printed pages 14-18 (PDF pages 17-21): interference and the loss of the cross term under phase averaging"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.4 printed page 15 (PDF page 23): coherent versus incoherent preparation and the vanishing of the cross term"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Example

Adopt the declared two-path preparation and detection model
[[def-nrqm-interference-two-path-preparation-and-detection-model]] with path
components $\psi_{1},\psi_{2}\ne0$ satisfying
$\langle\psi_{1},\psi_{2}\rangle=0$ (orthogonal components), and the coherent
and which-path detection laws
[[pthm-nrqm-interference-coherent-and-mixture-detection-laws]]. Assume the
Axiom of Countable Choice ([[def-countable-choice]]). Fix an integer $n\ge2$
and declare the **finite phase-averaging model**: the relative phase takes the
$n$ values
$$\varphi_{k}:=\frac{2\pi k}{n}\qquad(k=0,1,\dots,n-1)$$
with equal statistical weight $1/n$, so that the averaged bin law of a Borel
set $B\subseteq\mathbb R^{3}$ is
$$\bar p(B):=\frac1n\sum_{k=0}^{n-1}\mu^{G}_{\rho_{\mathrm{coh}}(\varphi_{k})}(B).$$
Put $N:=\|\psi_{1}\|^{2}+\|\psi_{2}\|^{2}$ and $w_{*}:=\|\psi_{1}\|^{2}/N$.
Then:

(a) $\|\psi_{1}+e^{i\varphi_{k}}\psi_{2}\|^{2}=N$ for every $k$, so every
coherent preparation of the declared model has the same normalization $N$;

(b) the averaged cross term vanishes bin by bin:
$$\frac1n\sum_{k=0}^{n-1}2\operatorname{Re}\Bigl(e^{-i\varphi_{k}}\int_{B}\langle\psi_{1}(x),\psi_{2}(x)\rangle_{\mathbb C^{r}}dx\Bigr)=0 ;$$

(c) consequently $\bar p(B)=\mu^{G}_{\rho_{\mathrm{mix}}(w_{*})}(B)$ for every
Borel set $B$: the declared finite phase-averaging model reproduces the
which-path law with the norm weights, while each single phase shows the cross
term of [[pthm-nrqm-interference-coherent-and-mixture-detection-laws]].

The averaging over the phase is a declared statistical model of the preparation
ensemble in the sense of clause (ii) of the preparation and apparatus postulate
[[post-nrqm-framework-preparation-and-apparatus]]; the computation asserts no
decoherence mechanism, no detector response, no counts and no empirical result,
and it does not cover the continuous uniform phase distribution, which would
require its own integral model.

## Verification

**Given:** The declared model data with $\psi_{1},\psi_{2}\ne0$, $\langle\psi_{1},\psi_{2}\rangle=0$; an integer $n\ge2$ with phases $\varphi_{k}=2\pi k/n$; a Borel set $B\subseteq\mathbb R^{3}$; $N=\|\psi_{1}\|^{2}+\|\psi_{2}\|^{2}$ and $w_{*}=\|\psi_{1}\|^{2}/N$; the Axiom of Countable Choice.

[L1] The coherent and which-path laws are $\mu^{G}_{\rho_{\mathrm{coh}}(\varphi)}(B)=\|\psi_{1}+e^{i\varphi}\psi_{2}\|^{-2}\int_{B}\|\psi_{1}+e^{i\varphi}\psi_{2}\|^{2}dx$ and $\mu^{G}_{\rho_{\mathrm{mix}}(w)}(B)=w\|\psi_{1}\|^{-2}\int_{B}\|\psi_{1}\|^{2}dx+(1-w)\|\psi_{2}\|^{-2}\int_{B}\|\psi_{2}\|^{2}dx$, and the coherent numerator expands as $\int_{B}(\|\psi_{1}\|^{2}+\|\psi_{2}\|^{2})dx+2\operatorname{Re}(e^{-i\varphi}\int_{B}\langle\psi_{1},\psi_{2}\rangle dx)$ ([[pthm-nrqm-interference-coherent-and-mixture-detection-laws]] clauses (a) and (b), [[def-nrqm-interference-two-path-preparation-and-detection-model]] clauses (c)-(e)).

[L2] The $n$-th roots of unity are $e^{i2\pi k/n}$ for $k=0,\dots,n-1$ ([[thm-complex-nth-roots-and-roots-of-unity]], [[def-complex-exponential]]), and for $n\ge2$ their sum is zero ([[cor-sum-of-roots-of-unity]]).

**Proof technique:** direct; compute the coherent norm under orthogonality, average the cross term over the roots of unity, and read the averaged law off the coherent and which-path formulas.

**Given:** The data of the statement and [L1]-[L2].

1.1 [Phase-independent normalization] For every $k$, [L1] gives $\|\psi_{1}+e^{i\varphi_{k}}\psi_{2}\|^{2}=\|\psi_{1}\|^{2}+\|\psi_{2}\|^{2}+2\operatorname{Re}\langle\psi_{1},e^{i\varphi_{k}}\psi_{2}\rangle=N+2\operatorname{Re}\bigl(e^{-i\varphi_{k}}\langle\psi_{1},\psi_{2}\rangle\bigr)=N$, since $\langle\psi_{1},\psi_{2}\rangle=0$. This proves (a). [given, L1, algebra]

1.2 [Root sum] The numbers $e^{i\varphi_{k}}$, $k=0,\dots,n-1$, are exactly the $n$-th roots of unity and $\zeta\mapsto\zeta^{-1}$ permutes them, so $\sum_{k=0}^{n-1}e^{-i\varphi_{k}}=\sum_{k=0}^{n-1}e^{i\varphi_{k}}=0$ by [L2]. [given, L2, algebra]

2.1 [Averaged law] By step 1.1 each summand of $\bar p(B)$ has denominator $N$, and by [L1] its numerator is $\int_{B}(\|\psi_{1}\|^{2}+\|\psi_{2}\|^{2})dx+2\operatorname{Re}(e^{-i\varphi_{k}}\int_{B}\langle\psi_{1},\psi_{2}\rangle dx)$. Averaging the $n$ summands and using linearity of the finite average, the cross term contributes $\frac{2}{N}\operatorname{Re}\bigl(\bigl(\frac1n\sum_{k}e^{-i\varphi_{k}}\bigr)\int_{B}\langle\psi_{1},\psi_{2}\rangle dx\bigr)=0$ by step 1.2, and the remaining term is $\frac1N\int_{B}(\|\psi_{1}\|^{2}+\|\psi_{2}\|^{2})dx=w_{*}\frac{\int_{B}\|\psi_{1}\|^{2}dx}{\|\psi_{1}\|^{2}}+(1-w_{*})\frac{\int_{B}\|\psi_{2}\|^{2}dx}{\|\psi_{2}\|^{2}}$, since $w_{*}\|\psi_{1}\|^{-2}=N^{-1}=(1-w_{*})\|\psi_{2}\|^{-2}$; this is $\mu^{G}_{\rho_{\mathrm{mix}}(w_{*})}(B)$ by [L1]. This proves (b) and (c). [step 1.1, step 1.2, L1, L2, algebra] ∎

## Remarks

- **The averaging is not a dynamics.** Nothing here evolves the state or removes
  coherence dynamically; the computation concerns a declared ensemble of
  preparations whose relative phase is randomized over a finite set. A
  continuous uniform phase distribution is a different declared model and is
  not computed here.
- **Orthogonality is used.** The identification of the averaged law with the
  which-path law uses $\langle\psi_{1},\psi_{2}\rangle=0$, which makes the
  normalization independent of the phase. For non-orthogonal components the
  averaged law need not coincide with the which-path law, and no claim is made
  about that case.
