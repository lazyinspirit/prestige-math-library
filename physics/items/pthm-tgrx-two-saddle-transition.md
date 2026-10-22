---
id: pthm-tgrx-two-saddle-transition
kind: physics-theorem
title: Entropy transition in a specified two-candidate model
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 5
proof_strategy: direct
deps:
  - post-tgrx-semiclassical-ads-dictionary
dependency_roles:
  post-tgrx-semiclassical-ads-dictionary: physical-assumption
justified_by: []
aliases: []
forward_refs: []
physical_scope: >
  A conditional prediction for a boundary region whose prescribed candidate
  class consists of exactly two quantum-stationary surfaces with finite,
  continuously differentiable generalized-entropy branches on an open boundary
  time interval. The cusp is a property of the adopted minimum rule, not a
  deduction about an exact finite-cutoff microscopic entropy or about which
  saddle contributes in a different gravitational path integral.
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Ahmed Almheiri, Thomas Hartman, Juan Maldacena, Edgar Shaghoulian, and Amirhossein Tajdini, The entropy of Hawking radiation, §§6 and 8"
      url: "https://arxiv.org/html/2006.06872"
      locator: "Full-text review; §6, equation (6.2), and §8, equation (8.2), for extremize-then-minimize generalized-entropy prescriptions and competing contributions. The local theorem proves the two-branch transition directly."
---

## Statement

Let $I\subset\mathbb R$ be an open interval of boundary time, measured in seconds, and let $t_0\in I$. Suppose the prescribed candidate class for the adopted entropy dictionary consists, near $t_0$, of exactly two admissible surfaces $X_1(t)$ and $X_2(t)$. Let their finite generalized entropies be $S_1,S_2\in C^1(I,\mathbb R)$, with values in $\mathrm{J\,K^{-1}}$; here $C^1$ means continuously differentiable. Assume $S_1(t_0)=S_2(t_0)$, that $S_1(t)\ne S_2(t)$ for all sufficiently close $t\ne t_0$, and that $S_1'(t_0)\ne S_2'(t_0)$. Then the adopted semiclassical boundary-entropy prediction $S_{\partial}^{\rm model}(t)=\min\{S_1(t),S_2(t)\}$ is continuous at $t_0$ and is not differentiable there. This conclusion concerns the selected two-candidate minimum. The hypotheses do not identify it with an exact finite-cutoff microscopic entropy, which need not have this cusp.

## Statement references

[[post-tgrx-semiclassical-ads-dictionary]]

[Ahmed Almheiri et al., *The entropy of Hawking radiation*](https://arxiv.org/html/2006.06872)

## Facts & Assumptions

**Given:** The open time interval, the two prescribed admissible candidates, their finite $C^1$ generalized-entropy functions, the isolated crossing, and the unequal derivatives specified in the Statement.

[F1] [[post-tgrx-semiclassical-ads-dictionary]]: for a specified candidate class with finite values and an attained minimum, the adopted boundary-entropy prediction is the minimum of the scheme-fixed generalized entropies; the postulate does not identify this prediction with the exact finite-cutoff entropy.

## Proof

1.1 For real numbers $x,y$, $\min\{x,y\}=(x+y-|x-y|)/2$. Therefore $S_{\partial}^{\rm model}(t)=(S_1(t)+S_2(t)-|S_1(t)-S_2(t)|)/2$. Since $S_1$ and $S_2$ are continuous, and absolute value is continuous, $S_{\partial}^{\rm model}$ is continuous at $t_0$. By [F1], this minimum is the model's semiclassical prediction. [given, F1, algebra]

1.2 Put $D(t)=S_1(t)-S_2(t)$ and $m=D'(t_0)\ne0$. Since $D(t_0)=0$, the definition of derivative gives $D(t_0+h)=mh+r(h)$ with $r(h)/h\to0$ as $h\to0$. Choose $\delta>0$ small enough that $|r(h)|<|m||h|/2$ whenever $0<|h|<\delta$. Then $D(t_0+h)$ has the sign of $mh$ on each side of $t_0$. Hence the smaller branch on the left is different from the smaller branch on the right. [given, algebra]

2.1 On each side the minimum equals the selected $C^1$ branch from step 1.2. Its left derivative at $t_0$ is one of $S_1'(t_0),S_2'(t_0)$ and its right derivative is the other. These numbers are unequal by hypothesis, so the two-sided derivative of $S_{\partial}^{\rm model}$ does not exist. [given, step 1.2, algebra]

3.1 Supplement the same model data with a regulated boundary code space $\mathbb C^2$ and constant boundary-state family $\rho_{\partial}(t)=I_2/2$ for $t\in I$. This is a density operator supported on that code space. Its eigenvalues are $1/2,1/2$, so $S_{\rm exact}(t)=-k_B\operatorname{tr}(\rho_{\partial}(t)\log\rho_{\partial}(t))=k_B\log2$ is constant and smooth. The postulate does not impose $S_{\rm exact}=S_{\partial}^{\rm model}$, so this assignment is compatible with the two-branch premises and the cusp established in step 2.1. Thus those premises do not force a cusp in exact finite-cutoff entropy. [given, F1, step 2.1, algebra] ∎

## Remarks

For the symmetric branches $S_1=S_0+a(t-t_0)$ and $S_2=S_0-a(t-t_0)$, with $a>0$ measured in $\mathrm{J\,K^{-1}\,s^{-1}}$, the plot below shows the crossing and the lower envelope. It is illustrative only; the proof above establishes the result for all functions satisfying the stated hypotheses.

```tikz
\begin{tikzpicture}[x=1.1cm,y=0.9cm]
  \draw[->] (-2.2,0) -- (2.2,0) node[right] {$t-t_0$ (s)};
  \draw[->] (0,-1.7) -- (0,1.8) node[above] {$S-S_0$ ($\mathrm{J\,K^{-1}}$)};
  \draw[gray,dashed] (-1.7,-1.25) -- (1.7,1.25) node[right] {$S_1$};
  \draw[gray,dashed] (-1.7,1.25) -- (1.7,-1.25) node[right] {$S_2$};
  \draw[very thick,blue] (-1.7,-1.25) -- (0,0) -- (1.7,-1.25)
    node[right] {$\min(S_1,S_2)$};
  \fill (0,0) circle (1.5pt) node[above left] {$t_0$};
\end{tikzpicture}
```
