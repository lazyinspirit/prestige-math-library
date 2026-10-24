---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-brownian-bridge-from-brownian-motion.json
  precheck: pass
id: ex-brownian-bridge-from-brownian-motion
kind: example
title: "Brownian bridge from Brownian motion"
status: published
origin: pipeline
deps: [def-gaussian-process, def-brownian-motion, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-covariance-bilinearity-and-symmetry, lem-algebra-of-continuous-real-maps-on-a-space, lem-probability-measure-basic-identities, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Nobuaki Yoshida, Probability Theory, Exercise 6.1.10"
      url: "https://www.math.nagoya-u.ac.jp/~noby/pdf/prob.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 8.4"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Example

Assume the Axiom of Choice. Let $B$ be a standard Brownian motion and, for
$0\le t\le1$, define

$$\beta_t=B_t-tB_1.$$

Then $\beta$ is a centered Gaussian process with one almost-surely continuous
path event,

$$\operatorname{Cov}(\beta_s,\beta_t)=\min(s,t)-st\qquad(0\le s,t\le1),$$

and $\beta_0=0$ almost surely while $\beta_1=0$ identically. This is the
standard Brownian bridge from $0$ to $0$ over $[0,1]$.

## Facts & Assumptions

**Given:** AC and a standard Brownian motion $B$.

[F1] Brownian motion is a centered Gaussian process with covariance $\operatorname{Cov}(B_s,B_t)=\min(s,t)$ and has one probability-one continuity event. [[def-brownian-motion]], [[def-gaussian-process]].

[F2] Covariance is symmetric and bilinear in finite linear combinations. [[thm-covariance-bilinearity-and-symmetry]].

[F3] The Lebesgue integral, hence expectation on an arbitrary probability space, is linear on finite linear combinations of integrable random variables. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F4] Finite sums, products, and scalar multiples of continuous real maps are continuous. [[lem-algebra-of-continuous-real-maps-on-a-space]].

[F5] A finite intersection of probability-one events has probability one. [[lem-probability-measure-basic-identities]].

[F6] AC is inherited through the Brownian and Gaussian-law interfaces. [[def-axiom-of-choice]].

## Verification

**Proof technique:** direct.

1.1 Fix $n\ge1$, times $t_1,\ldots,t_n\in[0,1]$, and coefficients $a_1,\ldots,a_n$. Then $$\sum_{j=1}^na_j\beta_{t_j}=\sum_{j=1}^na_jB_{t_j}-\left(\sum_{j=1}^na_jt_j\right)B_1.$$ This is a finite linear combination of Brownian values, with time $1$ appended if necessary, so [F1] makes it normal; repeated occurrences of time $1$, repeated $t_j$, and zero coefficients are allowed. Its mean is zero by finite linearity because all Brownian values are centered. Hence $\beta$ is a centered Gaussian process. [F1, F3, algebra]

1.2 For $s,t\in[0,1]$, covariance bilinearity gives $$\operatorname{Cov}(\beta_s,\beta_t)=\min(s,t)-t\min(s,1)-s\min(1,t)+st\operatorname{Var}(B_1).$$ Since $s,t\le1$ and $\operatorname{Var}(B_1)=1$, this is $\min(s,t)-ts-st+st=\min(s,t)-st$. [F1, F2, algebra]

1.3 Let $A$ be the probability-one event on which $t\mapsto B_t(\omega)$ is continuous on $[0,\infty)$, and let $A_0=\{B_0=0\}$. Their intersection has probability one by [F5]. For $\omega\in A\cap A_0$, the map $t\mapsto tB_1(\omega)$ is continuous and [F4] makes $t\mapsto\beta_t(\omega)$ continuous on $[0,1]$. On this event $\beta_0=B_0=0$, while for every $\omega$ one has $\beta_1=B_1-B_1=0$. [F1, F4, F5, algebra]

2.1 Steps 1.1--1.3 establish Gaussianity, centering, the covariance, path continuity, and both endpoints. The cases $s=0$, $t=0$, $s=t$, and $s=t=1$ follow directly from the same covariance formula, including its zero endpoint variances. The empty finite-dimensional list, if admitted, has the unique empty-tuple law. AC is used only through [F1]; the deterministic linear transformation and continuity argument make no new choice. [step 1.1, step 1.2, step 1.3, F1, F6] ∎

## Source notes

Yoshida, Exercise 6.1.10, printed p. 180, defines a Brownian bridge from $a$ to $b$ over duration $s$ as $B_t-(t/s)B_s+(1-t/s)a+(t/s)b$. Durrett, Section 8.4, printed pp. 412--413, specializes this to $B_t-tB_1$ and computes the covariance $s(1-t)$ for $s<t$. The proof above supplies all finite-dimensional and endpoint details.


## Remarks

On the probability-one event in step 1.3, subtracting the straight line
$t\mapsto tB_1(\omega)$ moves the endpoint at time $1$ to zero while preserving
the endpoint at time $0$. The two polygonal sketches below illustrate this
pointwise subtraction using the same time coordinates; they are not Brownian
sample paths and make no assertion about Gaussianity or covariance. The
verification above is independent of the picture.

```tikz
\begin{tikzpicture}[x=0.75cm,y=1.1cm]
  \begin{scope}
    \draw[->] (-0.2,0) -- (6.6,0) node[right] {$t$};
    \draw[->] (0,-0.55) -- (0,2.1);
    \node at (3,2.5) {Before subtraction};
    \draw[blue,thick] (0,0) -- (1,0.7) -- (2,0.2) -- (3,1.4) -- (4,0.6) -- (5,1.6) -- (6,1.2);
    \draw[orange,dashed,thick] (0,0) -- (6,1.2);
    \node[blue] at (2.6,1.85) {$B_t(\omega)$};
    \node[orange] at (3.7,0.15) {$tB_1(\omega)$};
    \fill (0,0) circle (1.8pt);
    \fill[blue] (6,1.2) circle (1.8pt);
    \node[above right] at (6,1.2) {$B_1(\omega)$};
    \draw (6,0.06) -- (6,-0.06);
    \node[below left] at (0,0) {$0$};
    \node[below] at (6,0) {$1$};
  \end{scope}
  \begin{scope}[xshift=6.6cm]
    \draw[->] (-0.2,0) -- (6.6,0) node[right] {$t$};
    \draw[->] (0,-0.55) -- (0,2.1);
    \node at (3,2.5) {After subtraction};
    \draw[green!65!blue,thick] (0,0) -- (1,0.5) -- (2,-0.2) -- (3,0.8) -- (4,-0.2) -- (5,0.6) -- (6,0);
    \node[green!65!blue] at (3,1.45) {$\beta_t(\omega)=B_t(\omega)-tB_1(\omega)$};
    \fill (0,0) circle (1.8pt);
    \fill (6,0) circle (1.8pt);
    \node[below left] at (0,0) {$0$};
    \node[below] at (6,0) {$1$};
    \node at (3,-0.8) {$\beta_0(\omega)=\beta_1(\omega)=0$};
  \end{scope}
\end{tikzpicture}
```
