---
id: ex-gaussian-prior-to-data-conditional-interpolation
kind: example
title: A one-dimensional Gaussian prior-to-data conditional interpolation
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - thm-gaussian-conditional-optimal-transport-map
  - def-axiom-of-choice
justified_by: []
axiom_use: AC is used by the Gaussian-law and density interfaces consumed by the Gaussian conditional optimal-transport theorem.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yaron Lipman et al., Flow Matching for Generative Modeling, §4.1 Example II"
      url: "https://arxiv.org/html/2210.02747"
    - title: "Peter Holderrieth and Ezra Erives, Introduction to Flow Matching and Diffusion Models, §3.2 Example 8"
      url: "https://arxiv.org/html/2506.02070"
---

## Example

Assume the Axiom of Choice. Fix $a\in\mathbb R$ and $\sigma_{\min}>0$, let $Z\sim N(0,1)$, and set
$$\sigma_t=1-(1-\sigma_{\min})t,\qquad X_t=\sigma_t Z+ta\quad(0\le t\le1).$$
Then $X_t\sim N(ta,\sigma_t^2)$, with density
$$\rho_t(x\mid a)=\frac{1}{\sqrt{2\pi}\,\sigma_t}\exp\!\left(-\frac{(x-ta)^2}{2\sigma_t^2}\right),$$
and a conditional velocity field is
$$u_t(x\mid a)=a+\frac{\sigma_{\min}-1}{\sigma_t}(x-ta).$$
For every fixed $z\in\mathbb R$, the particle path $t\mapsto\sigma_tz+ta$ is a straight line from $z$ to $a+\sigma_{\min}z$. The endpoint map $T(z)=a+\sigma_{\min}z$ is quadratic-cost optimal from $N(0,1)$ to $N(a,\sigma_{\min}^2)$, and its squared transport cost is $a^2+(1-\sigma_{\min})^2$.

## Example references

[Lipman et al., §4.1 Example II](https://arxiv.org/html/2210.02747)

[Holderrieth and Erives, §3.2 Example 8](https://arxiv.org/html/2506.02070)

## Facts & Assumptions

**Given:** AC, $a\in\mathbb R$, $\sigma_{\min}>0$, and a standard normal random variable $Z$.

[A1] The Axiom of Choice is the assertion that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]); it is required by the Gaussian-law and density suppliers used by [F1].

[F1] [[thm-gaussian-conditional-optimal-transport-map]]: under AC, for $d\ge1$, fixed $x_1$, and $\sigma_{\min}>0$, the affine conditional Gaussian path has mean $tx_1$, scale $1-(1-\sigma_{\min})t$, the stated Gaussian density and velocity, and a quadratic-cost optimal endpoint map with cost $\|x_1\|_2^2+d(1-\sigma_{\min})^2$.

## Verification

**Given:** The hypotheses in the Example.

1.1 Apply [F1] with $d=1$ and $x_1=a$. It gives the law and density of $X_t$, the field $u_t(x\mid a)$, and the optimality of $T(z)=a+\sigma_{\min}z$ with cost $a^2+(1-\sigma_{\min})^2$. [given, A1, F1]

2.1 For fixed $z$, differentiation gives $\frac{d}{dt}(\sigma_tz+ta)=(\sigma_{\min}-1)z+a$. Substituting $x=\sigma_tz+ta$ into the displayed field yields $$u_t(x\mid a)=a+\frac{\sigma_{\min}-1}{\sigma_t}\,\sigma_tz=a+(\sigma_{\min}-1)z,$$ which is that particle derivative. Since $\sigma_t>0$, its dependence on $t$ is affine and the endpoints are $z$ and $a+\sigma_{\min}z$. [given, F1, algebra] ∎

## Diagram

The graph uses $a=1$ and $\sigma_{\min}=1/4$. The horizontal coordinate is time $t$ and the vertical coordinate is particle state $X_t$. The three line segments are the exact paths for starting values $z=-1,0,1$, evaluated from $X_t=(1-3t/4)z+t$. The plotted endpoints are the images of those starting values under $T(z)=1+z/4$; the diagram illustrates the formulas and is not used in the verification.

```tikz
\begin{tikzpicture}[x=4cm,y=1.2cm]
  \draw[->] (-0.08,0) -- (1.08,0) node[right] {$t$};
  \draw[->] (0,-1.18) -- (0,1.38) node[above] {$X_t$};
  \draw[gray] (1,-0.04) -- (1,0.04) node[below=4pt] {$1$};
  \draw[blue,thick] (0,-1) -- (1,0.75) node[right] {$z=-1$};
  \draw[orange!85!black,thick] (0,0) -- (1,1) node[right] {$z=0$};
  \draw[green!50!black,thick] (0,1) -- (1,1.25) node[right] {$z=1$};
  \fill[blue] (0,-1) circle (1.2pt);
  \fill[orange!85!black] (0,0) circle (1.2pt);
  \fill[green!50!black] (0,1) circle (1.2pt);
\end{tikzpicture}
```

## Source notes

The two sources present the same scalar Gaussian interpolation and its affine velocity. The optimality and cost statement here are inherited from the complete coupling proof in the Gaussian theorem, not from the diagram.
