---
id: ex-quadratic-hamilton-jacobi-data-produce-explicit-caustic-time
kind: example
title: "Quadratic Hamilton–Jacobi data produce an explicit caustic time"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-characteristic-crossing-and-caustic-for-first-order-pde, lem-charpit-momentum-equation-from-differentiating-hamilton-jacobi]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Part I: Explicit methods — Lecture notes for MA342H"
      url: "https://www.maths.tcd.ie/~pete/pde2/part_1.pdf"
---

## Example

For $u_t+(u_x)^2/2=0$ with $u_0(\xi)=-\xi^2/2$, the characteristic map is
$X(t,\xi)=(1-t)\xi$.  Its first caustic time is $1$.

## Facts & Assumptions

**Given:** The Hamiltonian $H(p)=p^2/2$ and initial momentum $p_0(\xi)=-\xi$.

## Verification

**Proof technique:** direct.

1.1 Since $H_x=0$, the momentum equation gives $\dot p=0$, hence $p(t,\xi)=-\xi$. [given, algebra]

2.1 As $\dot X=H_p(p)=p$, integration from $X(0,\xi)=\xi$ gives $X=(1-t)\xi$. [step 1.1, given, algebra]

3.1 $X_\xi=1-t$ is nonzero for $t<1$ and zero at $t=1$, which is the first caustic by the stated convention. [step 2.1, given] ∎


## Remarks

The diagram shows the projected characteristics $(x,t)=((1-t)\xi,t)$ for
$\xi\in\{-2,-1,0,1,2\}$ and $0\le t\le1$; time increases upward. These
sample curves meet at $(0,1)$, as does every other initial label. The marked
point is the caustic of the projection, not an endpoint of the characteristic
ODE. The verification above is independent of the illustration.

```tikz
\begin{tikzpicture}[x=1.2cm,y=2.7cm]
  \draw[->] (-2.8,0) -- (2.8,0) node[right] {$x$};
  \draw[->] (-2.7,-0.05) -- (-2.7,1.28) node[above] {$t$};
  \draw[dashed] (-2.7,1) -- (2.35,1);
  \node[left] at (-2.7,1) {$1$};
  \node[left] at (-2.7,0) {$0$};
  \draw[thick,cyan] (-2,0) -- (0,1);
  \draw[thick,cyan] (-1,0) -- (0,1);
  \draw[thick,cyan] (0,0) -- (0,1);
  \draw[thick,cyan] (1,0) -- (0,1);
  \draw[thick,cyan] (2,0) -- (0,1);
  \node[below] at (-2,0) {$-2$};
  \node[below] at (-1,0) {$-1$};
  \node[below] at (0,0) {$0$};
  \node[below] at (1,0) {$1$};
  \node[below] at (2,0) {$2$};
  \node at (0,-0.32) {$t=0:\quad x=\xi$};
  \fill[cyan] (0,1) circle (1.8pt);
  \node[above right] at (0,1) {$(0,1)$: caustic};
\end{tikzpicture}
```
