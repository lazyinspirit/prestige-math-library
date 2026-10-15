---
id: cex-tdmath-nonconcave-ensemble-inequivalence
kind: counterexample
title: "A controlled nonconcave entropy model with ensemble inequivalence"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: ["def-natural-logarithm","def-real-exponential-function-and-e","thm-extreme-value-metric","thm-heine-borel-rn","thm-logarithm-derivative-and-integral"]
justified_by: []
dependency_roles: {"def-natural-logarithm":"mathematical-premise","def-real-exponential-function-and-e":"mathematical-premise","thm-heine-borel-rn":"mathematical-premise","thm-logarithm-derivative-and-integral":"mathematical-premise","thm-extreme-value-metric":"mathematical-premise"}
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture text"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S1
      locator: "Complete author-hosted HTML chapter read; §§1.2–1.4, finite canonical and microcanonical ensemble conventions."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics"
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
      locator: "Complete 635-page lecture notes retrieved and read; §§4.2–4.6, pp.192–217, ensembles, microcanonical phase space, quantum density matrices, and traces."
---

## Statement refuted

For every sequence of finite systems with admissible exact-group microcanonical energy densities tending to an interior value $e$, there is a fixed positive inverse temperature for which the canonical energy density concentrates at $e$ as system size tends to infinity, without further hypotheses such as entropy concavity.

## Example

Fix an energy scale $\varepsilon>0$. For each $N\ge1$ and $k=0,\ldots,N$, set $e_{N,k}=1+k/N$, $E_{N,k}=N\varepsilon e_{N,k}$, and
$$g_{N,k}:=\left\lfloor e^{N e_{N,k}^2}\right\rfloor.$$
Construct the finite state set $\{(k,j):0\le k\le N,\ 1\le j\le g_{N,k}\}$ with energy $E_{N,k}$ for each state in group $k$. Its dimensionless exact-group entropy density tends uniformly on the grid to $s(e)=e^2$ on $[1,2]$, which is nonconcave. For fixed inverse temperature $\beta>0$, put $b=\beta\varepsilon$ and let $p_N(b)$ be the canonical log partition sum per site. Then
$$p_N(b)\longrightarrow\max_{1\le e\le2}(e^2-be)=\max(1-b,4-2b).$$
For every compact $K\subset(1,2)$, the canonical probability that the energy density lies in $K$ tends to zero, while an exact microcanonical group with $e_{N,k_N}\to e\in(1,2)$ is supported at that interior density and has entropy density tending to $e^2$. This is an explicit constructed finite sequence demonstrating that ensemble equivalence does not follow from large $N$ alone.

## Facts & Assumptions

**Given:** The finite group degeneracies, energies, and canonical weighting defined in the statement.

[A1] $\varepsilon>0$, $N\ge1$, $e_{N,k}=1+k/N$, and $g_{N,k}=\lfloor e^{Ne_{N,k}^2}\rfloor$.

[A2] At $b=\beta\varepsilon>0$, the group weight is $g_{N,k}e^{-Nb e_{N,k}}$; an exact microcanonical group is uniform on its $g_{N,k}$ states.

[F1] [[def-real-exponential-function-and-e]] and [[def-natural-logarithm]]: the exponential is positive and $\log$ is its inverse on positive reals.

[F2] [[thm-logarithm-derivative-and-integral]]: $\log$ is continuous and increasing on $(0,\infty)$.

[F3] [[thm-heine-borel-rn]]: closed bounded intervals are compact. [[thm-extreme-value-metric]]: a continuous real-valued function on a nonempty compact metric space attains its minimum and maximum.

## Counterexample



**Given:** [A1]–[A2] and [F1]–[F3].

1.1 Since $e_{N,k}\ge1$, $e^{Ne_{N,k}^2}\ge e^N$. For $x\ge e^N$, $x-1\le\lfloor x\rfloor\le x$, so $$e_{N,k}^2+\frac1N\log(1-e^{-N})\le \frac1N\log g_{N,k}\le e_{N,k}^2.$$ The error tends to zero uniformly in $k$. The grid mesh is $1/N$; for a continuous function on $[1,2]$, uniform continuity makes its grid maxima converge to its interval maximum. [A1, F1, F2]

2.1 Let $Z_N(b)=\sum_{k=0}^Ng_{N,k}e^{-Nb e_{N,k}}$ and $m_N=\max_k[N^{-1}\log g_{N,k}-b e_{N,k}]$. The largest summand is $e^{Nm_N}$ and there are $N+1$ summands, so $$m_N\le N^{-1}\log Z_N(b)\le m_N+N^{-1}\log(N+1).$$ By 1.1, $m_N\to\max_{e\in[1,2]}(e^2-be)$. If $e=\theta\cdot1+(1-\theta)\cdot2$ with $0<\theta<1$, direct expansion gives $$e^2-be=\theta(1-b)+(1-\theta)(4-2b)-\theta(1-\theta),$$ strictly below the weighted endpoint values. Thus the maximum is at an endpoint and equals $\max(1-b,4-2b)$. [A1, A2, F1, F2, step 1.1, algebra]

3.1 If $K=\emptyset$, the probability is zero. Otherwise, for compact $K\subset(1,2)$ strict convexity gives $$\eta:=\min_{e\in K}\left[\max(1-b,4-2b)-(e^2-be)\right]>0$$ by [F3]. Uniform approximation in 1.1 makes every grid exponent in $K$ at most the maximum minus $\eta/2$ for all sufficiently large $N$. On the other hand, an endpoint group has exponent tending to the maximum. By [F2], $\log(N+1)/N\le2\sqrt{N+1}/N\to0$, so the polynomial factor is dominated by the exponential gap and the canonical probability of $K$, at most $(N+1)e^{-N\eta/2+o(N)}$, tends to zero. [A1, A2, F1, F2, F3, step 1.1, step 2.1]

4.1 Choose integers $k_N$ with $e_{N,k_N}\to e\in(1,2)$. The microcanonical exact-group law has energy density exactly $e_{N,k_N}$ at every state. By 1.1 its entropy density $N^{-1}\log g_{N,k_N}$ tends to $e^2$. Thus, for example at the crossing $b=3$, canonical mass escapes every compact neighborhood of any interior target while the microcanonical group remains there. Finally $s(3/2)=9/4<5/2=(s(1)+s(2))/2$, so $s(e)=e^2$ is not concave. The example is a constructed model, not an observation about a material. [A1, A2, step 1.1, step 3.1] ∎
