---
id: ex-short-run-contrastive-divergence-bias
kind: example
title: A two-state witness to short-run contrastive-divergence bias
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-energy-based-density-and-partition-function, alg-contrastive-divergence-k, thm-contrastive-divergence-k-gradient-omits-chain-derivative, def-derivative, thm-algebra-of-derivatives, thm-chain-rule, thm-derivative-of-exponential, cor-exponential-reciprocal-and-positivity]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Geoffrey Hinton, A Practical Guide to Training Restricted Boltzmann Machines, Version 1, Section 2"
      url: "https://www.cs.toronto.edu/~hinton/absps/guideTR.pdf"
    - title: "Kevin P. Murphy, Probabilistic Machine Learning: Advanced Topics, Chapter 24, Section 24.2.2"
      url: "https://github.com/probml/pml2-book/releases/download/2025-dec-10/book2.pdf"
---

## Example

Let $\mathcal X=\{0,1\}$, $\theta\in\mathbb R$, and
$E_\theta(0)=0$, $E_\theta(1)=\theta$. Then
$$Z_\theta=1+e^{-\theta},\qquad p_\theta(1)=\frac{e^{-\theta}}{1+e^{-\theta}},\qquad p_\theta(0)=\frac{1}{1+e^{-\theta}}.$$
Take $q_0=\delta_0$ and the transition kernel
$$K_\theta(x,y)=\frac12\mathbf1_{\{y=x\}}+\frac12p_\theta(y).$$
This kernel is strictly positive and leaves $p_\theta$ invariant. For $k=1$
and $\theta=0$, the reconstruction law satisfies $q_{1,0}(1)=1/4$ while
$p_0(1)=1/2$. The population stop-gradient CD-1 direction for the negative
log-likelihood is $-1/4$, whereas the exact negative log-likelihood gradient is
$-1/2$. The exact derivative of the scalar CD-1 objective at $\theta=0$ is
$$\left.\frac{d}{d\theta}\operatorname{CD}_1(\theta)\right|_{\theta=0}=-\frac14-\frac18\log 3.$$
Thus the stop-gradient direction also omits a nonzero derivative of the
reconstruction law. This finite witness asserts no general sign or consistency
claim for contrastive-divergence bias.

At $\theta=0$, the transition matrix and its state diagram are
$$K_0=\begin{pmatrix}3/4&1/4\\1/4&3/4\end{pmatrix}.$$

```tikz
\begin{tikzpicture}[>=stealth]
  \node[circle,draw] (s0) at (0,0) {$0$};
  \node[circle,draw] (s1) at (3,0) {$1$};
  \draw[->] (s0) edge[loop left] node[left] {$3/4$} (s0);
  \draw[->] (s1) edge[loop right] node[right] {$3/4$} (s1);
  \draw[->] (s0) to[bend left=18] node[above] {$1/4$} (s1);
  \draw[->] (s1) to[bend left=18] node[below] {$1/4$} (s0);
\end{tikzpicture}
```

The nodes are states; each arrow label is $K_0(x,y)$ from its source state $x$
to its target state $y$. A self-loop records staying at the current state. The
diagram displays the matrix and is not used in the verification.

## Example references

[Geoffrey Hinton, Section 2 of the full technical report](https://www.cs.toronto.edu/~hinton/absps/guideTR.pdf) describes the contrastive-divergence reconstruction update and its omitted derivative.

[Kevin P. Murphy, Chapter 24, Section 24.2.2](https://github.com/probml/pml2-book/releases/download/2025-dec-10/book2.pdf) defines the finite-step contrastive-divergence objective.

## Facts & Assumptions

**Given:** The two-state energy family, data mass $q_0=\delta_0$, invariant kernel $K_\theta$, $k=1$, and parameter value $\theta=0$ specified in the Example.

[F1] [[def-energy-based-density-and-partition-function]]: $p_\theta(x)=e^{-E_\theta(x)}/Z_\theta$ for finite positive $Z_\theta$.

[F2] [[alg-contrastive-divergence-k]]: $q_{1,\theta}=q_0K_\theta$ and the population CD-1 direction is $\mathbb E_{q_0}\nabla E_\theta-\mathbb E_{q_{1,\theta}}\nabla E_\theta$.

[F3] [[alg-contrastive-divergence-k]]: for finite states, the population CD-1 direction is $\mathbb E_{q_0}\nabla E_\theta-\mathbb E_{q_{1,\theta}}\nabla E_\theta$.

[F4] [[thm-contrastive-divergence-k-gradient-omits-chain-derivative]]: the exact finite-state likelihood gradient is the data energy-gradient mean minus the model energy-gradient mean, and $\partial_\theta\operatorname{CD}_1$ subtracts the reconstruction-law derivative term.

[F5] [[thm-algebra-of-derivatives]]: finite sums, scalar multiples, products and quotients with nonzero denominator obey the stated derivative rules.

[F6] [[thm-chain-rule]]: the derivative of a composition is the outer derivative at the image times the inner derivative.

[F7] [[thm-derivative-of-exponential]]: $\exp'(u)=\exp(u)$ for real $u$.

[F8] [[def-derivative]]: the derivative in each real parameter coordinate is the limit of its difference quotient on an open interval around the point.

[F9] [[cor-exponential-reciprocal-and-positivity]]: $\exp(u)>0$ for every real $u$.

## Verification

1.1 Direct normalization gives $Z_\theta=1+e^{-\theta}$ and the displayed $p_\theta$. By [F9], its coordinates are positive. Each row of $K_\theta$ sums to $1/2+\sum_y p_\theta(y)/2=1$, every entry is positive, and $\sum_xp_\theta(x)K_\theta(x,y)=\frac12p_\theta(y)+\frac12p_\theta(y)\sum_xp_\theta(x)=p_\theta(y)$, so $K_\theta$ is an admissible invariant kernel. [given, F1, F9, construct, algebra]

2.1 At $\theta=0$, $p_0(0)=p_0(1)=1/2$ and $q_0=\delta_0$, so [F2] gives $q_{1,0}(1)=K_0(0,1)=p_0(1)/2=1/4$ and $q_{1,0}(0)=3/4$. Also $E'_\theta(0)=0$ and $E'_\theta(1)=1$. By [F6] and [F7], $(e^{-\theta})'=-e^{-\theta}$; applying the quotient rule [F5] to $u/(1+u)$, where $u=e^{-\theta}$, gives $p'_\theta(1)=u'/(1+u)^2=-e^{-\theta}/(1+e^{-\theta})^2=-p_\theta(1)p_\theta(0)$. Hence $p'_0(1)=-1/4$; the scalar rule [F5] applied to $q_{1,\theta}(1)=p_\theta(1)/2$ gives $q'_{1,0}(1)=-1/8$ and, since $q_{1,\theta}(0)=1-q_{1,\theta}(1)$, $q'_{1,0}(0)=1/8$. [given, F1, F2, F5, F6, F7, F8, step 1.1, algebra]

3.1 By [F4], the exact negative log-likelihood gradient at $0$ is $0-p_0(1)=-1/2$. By [F3], the population stop-gradient CD-1 direction is $0-q_{1,0}(1)=-1/4$, so it differs from the exact likelihood gradient. [F3, F4, step 2.1, algebra]

4.1 By [F4] and step 2.1, the chain correction is $\sum_{x\in\{0,1\}}q'_{1,0}(x)\log(q_{1,0}(x)/p_0(x))=\frac18\log\frac32-\frac18\log\frac12=\frac18\log3>0$. Subtracting it from the first two CD terms $-1/4$ gives $\left.\frac{d}{d\theta}\operatorname{CD}_1(\theta)\right|_{\theta=0}=-\frac14-\frac18\log3$, as stated. Thus the stop-gradient CD-1 direction also differs from the exact CD-1 objective derivative. [F4, step 2.1, step 3.1, algebra] ∎
