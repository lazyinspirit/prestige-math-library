---
id: thm-qftx-cook-scattering-limit
kind: theorem
title: Integrable derivatives yield scattering vectors
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-qftx-scattering-approximant-contract
  - def-qft-fock-and-test-spaces
  - lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
  - lem-bochner-integral-norm-inequality
dependency_roles:
  def-qftx-scattering-approximant-contract: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  lem-bochner-integral-norm-inequality: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Detlev Buchholz and Wojciech Dybalski, Scattering in relativistic quantum field theory: basic concepts, tools, and results"
      url: https://arxiv.org/pdf/math-ph/0509047
      locator: "Version 3, revised 2024-11-03; §2, PDF pp. 4–5, equations (2.4)–(2.6): integrable derivative estimates imply strong limits; Fock inner products are a separate step."
    - title: "Klaus Fredenhagen, Quantum Field Theory, lecture notes, Wintersemester 2009/10 and Sommersemester 2010"
      url: https://www.physik.uni-hamburg.de/th2/ag-fredenhagen/dokumente/qft09-10.pdf
      locator: "Chapter IV §3, PDF pp. 84–85, Theorem IV.2: convergence is tied to decay of the derivative; the lecture notes refer the complete Haag–Ruelle proof to the literature."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $\mathcal D_\sigma$ and the direction-labelled packet families
$\Psi_t^\eta(f)\in\mathcal H$ be as in the massive scattering approximant
contract, with
$\eta\in\{+1,-1\}$, $f\in\mathcal D_\sigma$, and $t\ge1$. Assume that for
each fixed $\eta,f$, the map $t\mapsto\Psi_t^\eta(f)$ is continuously
differentiable in Hilbert-space norm and
$$\left\|\frac{d}{dt}\Psi_t^\eta(f)\right\|\le C_{\eta,f}(1+t)^{-1-\epsilon_{\eta,f}}$$
for constants $C_{\eta,f}\ge0$ and $\epsilon_{\eta,f}>0$. Then the norm limit
$W_\eta f=\lim_{t\to\infty}\Psi_t^\eta(f)$ exists and
$$\|\Psi_t^\eta(f)-W_\eta f\|\le \frac{C_{\eta,f}}{\epsilon_{\eta,f}}(1+t)^{-\epsilon_{\eta,f}}.$$
In particular, each approximant family is uniformly bounded in norm. Write
$(f,g)_{\mathcal F,1}:=\langle g,f\rangle_{\mathcal F,2}$ for the
first-variable-linear pairing corresponding to the QFT Fock definition's
second-variable-linear pairing. If $f\mapsto\Psi_t^\eta(f)$ is linear on
$\mathcal D_\sigma$ and its pairwise first-variable inner products converge
to $(f,g)_{\mathcal F,1}$, then $W_\eta$ is an isometry on
$\mathcal D_\sigma$ and extends uniquely to an isometry on its Hilbert-space
closure. The derivative estimate alone does not assert this inner-product
convergence or that the range is all of $\mathcal H$.

## Statement references

[[def-qftx-scattering-approximant-contract]]

[[def-qft-fock-and-test-spaces]]

## Facts & Assumptions

**Given:** A complete complex Hilbert space $\mathcal H$, a packet domain
$\mathcal D_\sigma$, a sign $\eta\in\{+1,-1\}$, continuously
differentiable maps $\Psi_t^\eta:\mathcal D_\sigma\to\mathcal H$ for $t\ge1$
that are linear in their packet label, and constants
$C_{\eta,f}\ge0$, $\epsilon_{\eta,f}>0$ satisfying the displayed derivative
bound for every $f\in\mathcal D_\sigma$. For the isometry conclusion, also
assume the stated pairwise inner-product limit.

[F1] [[def-qftx-scattering-approximant-contract]]: the candidate families are
Hilbert-space-valued norm-$C^1$ functions on each time half-line; their
one-particle limits, smooth packet labels, and symmetric or antisymmetric
packet-domain inner product are part of the construction data. The derivative
and Fock inner-product estimates remain hypotheses of this theorem. The
contract assumes Countable Choice.

[F2] [[def-qft-fock-and-test-spaces]]: the bosonic and fermionic Fock spaces
are square-summable direct sums of the symmetric and antisymmetric completed
tensor sectors, with a second-variable-linear componentwise pairing. Its
first-variable-linear counterpart is
$(f,g)_{\mathcal F,1}=\langle g,f\rangle_{\mathcal F,2}$.

[F3] [[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]:
under Countable Choice, for real $s<t$, a real or complex Banach space $X$,
and a continuous curve $\varphi:[s,t]\to X$ that is differentiable on
$(s,t)$ with derivative extending continuously to $[s,t]$, the Bochner
integral with respect to Lebesgue measure satisfies
$\varphi(t)-\varphi(s)=\int_s^t\varphi'(r)\,dr$. The contract's Countable
Choice assumption in [F1] supplies this hypothesis; a complex Hilbert space is
a Banach space, and the contract's norm-$C^1$ condition supplies the required
curve and derivative regularity on each compact interval.

[F4] [[lem-bochner-integral-norm-inequality]]: for a Bochner-integrable
Banach-valued function $g$ on a measurable set $E$,
$\left\|\int_Eg\right\|\le\int_E\|g\|$. The continuous derivative in [F3]
is Bochner integrable on $[s,t]$.

[A1] For all $f,g\in\mathcal D_\sigma$,
$\lim_{t\to\infty}(\Psi_t^\eta(f),\Psi_t^\eta(g))
=(f,g)_{\mathcal F,1}$.

## Proof

1.1 Fix $1\le s\le t$. If $s=t$ the increment inequality is immediate.
If $s<t$, restrict $r\mapsto\Psi_r^\eta(f)$ to $[s,t]$. By [F1] this is a
continuous curve into the Banach space $\mathcal H$, differentiable on $(s,t)$
with derivative extending continuously to $[s,t]$.
The contract's Countable Choice premise satisfies the hypothesis of [F3], so
the Banach-valued fundamental theorem gives
$\Psi_t^\eta(f)-\Psi_s^\eta(f)=\int_s^t\partial_r\Psi_r^\eta(f)\,dr$.
The derivative is continuous and hence Bochner integrable on this compact
interval; [F4] then gives
$\|\Psi_t^\eta(f)-\Psi_s^\eta(f)\|\le\int_s^t
\|\partial_r\Psi_r^\eta(f)\|\,dr$. [F1, F3, F4, given]

2.1 Apply the derivative bound in [F1] and integrate the scalar power:
$$\|\Psi_t^\eta(f)-\Psi_s^\eta(f)\|\le \frac{C_{\eta,f}}{\epsilon_{\eta,f}}\bigl((1+s)^{-\epsilon_{\eta,f}}-(1+t)^{-\epsilon_{\eta,f}}\bigr)\le \frac{C_{\eta,f}}{\epsilon_{\eta,f}}(1+s)^{-\epsilon_{\eta,f}}.$$
As $s\to\infty$, the last expression tends to zero uniformly for $t\ge s$.
Thus $\Psi_t^\eta(f)$ is Cauchy as $t\to\infty$; completeness gives a limit
$W_\eta f\in\mathcal H$. Taking $t\to\infty$ in the first inequality gives
the claimed rate, and taking $s=1$ gives
$\|\Psi_t^\eta(f)\|\le\|\Psi_1^\eta(f)\|+
C_{\eta,f}/\epsilon_{\eta,f}$ for every $t\ge1$. [F1, step 1.1, algebra]

3.1 For $f,g\in\mathcal D_\sigma$, linearity of each $\Psi_t^\eta$ and norm
convergence from 2.1 imply
$W_\eta(af+bg)=aW_\eta f+bW_\eta g$ for all scalars $a,b\in\mathbb C$:
apply the triangle inequality to the finite linear combination and pass to
the limit. Hence $W_\eta$ is linear on $\mathcal D_\sigma$. [F1, step 2.1, algebra]

4.1 By continuity of the Hilbert inner product and the assumed limit [A1],
$(W_\eta f,W_\eta g)=\lim_{t\to\infty}
(\Psi_t^\eta(f),\Psi_t^\eta(g))=(f,g)_{\mathcal F,1}$.
Setting $g=f$ proves preservation of norm, so $W_\eta$ is an isometry on
$\mathcal D_\sigma$. [A1, F2, step 3.1, algebra]

5.1 If $(f_n)$ in $\mathcal D_\sigma$ converges in its Hilbert-space closure,
then $(W_\eta f_n)$ is Cauchy because
$\|W_\eta f_n-W_\eta f_k\|=\|f_n-f_k\|$. Completeness of $\mathcal H$
defines a limit independent of the approximating sequence; the same equality
passes to the limit. This is the unique isometric extension to
$\overline{\mathcal D_\sigma}$. No surjectivity onto $\mathcal H$ follows.
[F1, F2, step 4.1, algebra] ∎
