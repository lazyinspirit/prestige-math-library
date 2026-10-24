---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/alg-adjoint-sensitivity-method.json
  precheck: n/a
id: alg-adjoint-sensitivity-method
kind: algorithm
title: Exact continuous adjoint sensitivity for a neural ODE
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-neural-ode
  - thm-neural-ode-global-smooth-flow
  - thm-continuous-ode-adjoint-gradient-formula
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ricky T. Q. Chen, Yulia Rubanova, Jesse Bettencourt, and David Duvenaud, Neural Ordinary Differential Equations, §2 and Appendix B"
      url: "https://arxiv.org/pdf/1806.07366"
    - title: "George Papamakarios, Eric Nalisnick, Danilo Jimenez Rezende, Shakir Mohamed, and Balaji Lakshminarayanan, Normalizing Flows for Probabilistic Modeling and Inference, §4.2.2"
      url: "https://www.jmlr.org/papers/volume22/19-1028/19-1028.pdf"

---

## Definition

Let $T>0$, let $d,q\ge1$, let $\Theta\subseteq\mathbb R^q$ be open, and let $v:I\times\mathbb R^d\times\Theta\to\mathbb R^d$ be jointly $C^\infty$ on an open time interval $I$ containing $[0,T]$. For each compact $K\subseteq\Theta$, suppose there are constants $L_K,M_K\ge0$ such that for all $t\in[0,T]$, $\theta\in K$, and $z,w\in\mathbb R^d$,

$$\|v(t,z,\theta)-v(t,w,\theta)\|_2\le L_K\|z-w\|_2,\qquad \|v(t,0,\theta)\|_2\le M_K.$$

Let $\Omega\subseteq\Theta$ be open with compact closure contained in $\Theta$, let $U_0\subseteq\Theta$ be an open neighborhood of $\overline\Omega$, and let $u_0:U_0\to\mathbb R^d$ be $C^1$. Write $u_\theta$ for the exact solution of $\dot u_\theta(t)=v(t,u_\theta(t),\theta)$, $u_\theta(0)=u_0(\theta)$, and let $\mathcal T:=\{(t,u_\theta(t),\theta):t\in[0,T],\theta\in\overline\Omega\}$ be its common compact trajectory tube. Let

$$\mathcal T_T:=\{(u_\theta(T),\theta):\theta\in\overline\Omega\}$$

be the terminal state-parameter slice. Let $U_\phi\subseteq\mathbb R^d\times\Theta$ and $U_\ell\subseteq I\times\mathbb R^d\times\Theta$ be open sets containing $\mathcal T_T$ and $\mathcal T$, respectively, and let $\phi:U_\phi\to\mathbb R$ and $\ell:U_\ell\to\mathbb R$ be $C^1$. Assume their first derivatives, measured in Euclidean operator norms, are bounded and uniformly continuous on $\mathcal T_T$ and $\mathcal T$, respectively. Define

$$\mathcal J(\theta)=\phi(u_\theta(T),\theta)+\int_0^T\ell(t,u_\theta(t),\theta)\,dt.$$

For each $\theta\in\Omega$, the exact continuous adjoint sensitivity procedure is:

1. Solve the state initial-value problem forward on $[0,T]$.
2. Solve the terminal adjoint problem backward,
   $$-p'(t)=D_u v(t,u_\theta(t),\theta)^T p(t)+D_u\ell(t,u_\theta(t),\theta)^T,\qquad p(T)=D_u\phi(u_\theta(T),\theta)^T.$$
3. Return the vector
   $$G(\theta)=D_\theta\phi(u_\theta(T),\theta)^T+D_\theta u_0(\theta)^Tp(0)+\int_0^T\left(D_\theta\ell(t,u_\theta(t),\theta)^T+D_\theta v(t,u_\theta(t),\theta)^Tp(t)\right)dt.$$

Here $D_u$ and $D_\theta$ denote Jacobian matrices in the displayed variables, $p(t)\in\mathbb R^d$, and $G(\theta)\in\mathbb R^q$. All state and adjoint equations and the integral are exact continuous mathematical objects. Replacing them by numerical solver outputs defines a finite computation and is outside this algorithm's accuracy guarantees.

## Definition references

[Chen et al., §2 and Appendix B](https://arxiv.org/pdf/1806.07366)

[Papamakarios et al., §4.2.2](https://www.jmlr.org/papers/volume22/19-1028/19-1028.pdf)

## Remarks

The diagram separates the forward state solve, the backward terminal adjoint solve, and the assembly of the returned vector. In its labels, derivatives of $v$ and $\ell$ are evaluated at $(t,u_\theta(t),\theta)$, and derivatives of $\phi$ at $(u_\theta(T),\theta)$. The dashed arrow indicates that the adjoint coefficients use the same state trajectory; the downward arrow indicates assembly from the displayed data, not time evolution. Every equation and integral is continuous and exact, as in the procedure above; no numerical accuracy claim is illustrated.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\large}, line width=0.7pt]
\node (u0) at (0,0) {$u_0(\theta)$};
\node (uT) at (9,0) {$u_\theta(T)$};
\draw[->] (u0) -- node[above] {state: $\dot u_\theta=v$} node[below] {$0\longrightarrow T$} (uT);
\node (p0) at (0,-2.3) {$p(0)$};
\node (pT) at (9,-2.3) {$p(T)=D_u\phi^T$};
\draw[->] (pT) -- node[above] {adjoint: $-p'=D_uv^Tp+D_u\ell^T$} node[below] {$0\longleftarrow T$} (p0);
\draw[->,dashed] (4.5,-0.7) -- node[right] {along $u_\theta(t)$} (4.5,-1.65);
\node[draw,rounded corners,align=center,inner sep=9pt] (G) at (4.5,-4.8) {$G(\theta)=D_\theta\phi^T$\\[4pt] $\displaystyle {}+D_\theta u_0(\theta)^Tp(0)$\\[4pt] $\displaystyle {}+\int_0^T\bigl(D_\theta\ell^T+D_\theta v^Tp(t)\bigr)\,dt$};
\draw[->] (4.5,-2.95) -- node[right] {assemble parameter contributions} (G.north);
\end{tikzpicture}
```

The illustration only organizes the three instructions. Their full hypotheses, equations, and output formula above remain the mathematical definition independently of the figure.
