---
id: ex-qftx-two-vertex-log
kind: example
title: Two-vertex scalar logarithm and its local ambiguity
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 11
deps:
  - thm-qftx-scalar-eg-induction
  - prop-qft-four-dimensional-log-scale-anomaly
  - prop-qft-local-counterterm-jet-classification
  - def-qft-distribution-scaling-degree
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  thm-qftx-scalar-eg-induction: mathematical-premise
  prop-qft-four-dimensional-log-scale-anomaly: mathematical-premise
  prop-qft-local-counterterm-jet-classification: mathematical-premise
  def-qft-distribution-scaling-degree: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, full lecture notes
      url: https://arxiv.org/html/1208.1428
      locator: Section 7, equations (77)–(89), the two-vertex scalar graph, its relative kernel and scaling-degree extension.
    - title: "Romeo Brunetti and Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds"
      url: https://arxiv.org/pdf/math-ph/9903028
      locator: Sections 5.1–5.2, printed pp. 21–25, the scaling-degree-four scalar graph and its local delta ambiguity.
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice and Countable Choice. In four-dimensional Euclidean space, let
$$C_0(z)=\frac{1}{4\pi^2|z|^2},\qquad z\in\mathbb R^4\setminus\{0\}.$$
The two-vertex four-point scalar graph with two internal lines has relative numerical kernel
$$u(z)=C_0(z)^2=\frac{1}{16\pi^4|z|^4}.$$
Its scaling degree at the origin is $4$. A same-degree extension is ambiguous only by $c\delta_0$, and the specified extensions $T_\mu$ satisfy
$$T_\mu-T_\nu=\frac{1}{8\pi^2}\log(\mu/\nu)\,\delta_0,\qquad \mu,\nu>0.$$
The scale difference is a local Euclidean distribution term; it is not a numerical scattering probability and makes no assertion about a Lorentzian boundary-value product.

The diagram records two vertices $x,y$, two external scalar slots at each vertex, and two internal scalar contractions. Each internal edge contributes one factor $C_0(x-y)$; the picture fixes no integration or extension convention.

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center)]
  \node[draw,circle,inner sep=2pt] (x) at (0,0) {$x$};
  \node[draw,circle,inner sep=2pt] (y) at (3,0) {$y$};
  \draw (-1,0.45) -- (x);
  \draw (-1,-0.45) -- (x);
  \draw (x) .. controls (1,0.9) and (2,0.9) .. (y);
  \draw (x) .. controls (1,-0.9) and (2,-0.9) .. (y);
  \draw (y) -- (4,0.45);
  \draw (y) -- (4,-0.45);
\end{tikzpicture}
```

## Example references

[[thm-qftx-scalar-eg-induction]]

[[prop-qft-four-dimensional-log-scale-anomaly]]

[[prop-qft-local-counterterm-jet-classification]]

## Facts & Assumptions

**Given:** The Euclidean four-dimensional scalar kernel $C_0$, the Axiom of Choice and Countable Choice, and the local causal-extension theorem at its stated formal scope.

[A1] Assume the Axiom of Choice [[def-axiom-of-choice]] and Countable Choice [[def-countable-choice]], as required by the scaling-degree extension and polar-integral suppliers of [[prop-qft-four-dimensional-log-scale-anomaly]].

[F1] [[thm-qftx-scalar-eg-induction]]: at each finite graph order the scalar causal construction extends the numerical graph distribution across the total diagonal with finite engineering upper bounds; independent balanced coefficients admit degree-preserving analytic extensions.

[F2] [[prop-qft-four-dimensional-log-scale-anomaly]]: for $u(z)=1/(16\pi^4|z|^4)$ and its specified Euclidean extensions $T_\mu$, $\operatorname{sd}_0(u)=4$ and $T_\mu-T_\nu=(8\pi^2)^{-1}\log(\mu/\nu)\delta_0$.

[F3] [[def-qft-distribution-scaling-degree]]: $\operatorname{sd}_0$ uses the positive dilation $T_\rho(\varphi)=\rho^{-4}T(\varphi(\cdot/\rho))$ in $\mathbb R^4$.

[F4] [[prop-qft-local-counterterm-jet-classification]]: in dimension $4$, same-degree extensions of a degree-$4$ punctured distribution differ by a multiple of $\delta_0$ only.

## Proof

**Proof technique:** direct.

**Given:** [A1] and [F1]–[F4].

1.1 The graph in the Example has two distinct vertices and two parallel internal edges, so its numerical relative kernel is the product of the two Euclidean edge kernels, $C_0(z)^2=u(z)$. By [F2], this punctured distribution has scaling degree $4$; the causal extension theorem [F1] supplies the separately stated Lorentzian graph construction for admissible scalar free data at the same formal order. The Euclidean calculation uses [F2] and makes no identification of the Euclidean kernel with that Lorentzian graph. [given, F1, F2, construct]

1.2 Here the relative dimension is $4$ and the scaling degree is also $4$. Thus $\lfloor4-4\rfloor=0$, so [F4] says every two same-degree extensions differ by $c\delta_0$ for a scalar $c\in\mathbb C$; no derivative of $\delta_0$ is allowed. This proves the local ambiguity claim without identifying the Euclidean kernel with $H_F$. [F1, F2, F3, F4, algebra]

2.1 Applying the exact Euclidean calculation in [F2] to the chosen scale parameters gives $T_\mu-T_\nu=(8\pi^2)^{-1}\log(\mu/\nu)\delta_0$. Since the difference is supported at $z=0$ and is proportional to $\delta_0$, it is local. The calculation concerns only the stated Euclidean extension family, so it supplies no Lorentzian amplitude or measured probability. [A1, F2, step 1.2, algebra] ∎
