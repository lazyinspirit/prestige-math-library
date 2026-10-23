---
id: ex-fd-bingham-rest-stress
kind: example
title: "Resting Bingham graph supports nonzero stress"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - lem-fd-bingham-monotone-graph
dependency_roles:
  lem-fd-bingham-monotone-graph: mathematical-premise
physical_scope: "Worked model calculation/counterexample; leaf, no downstream suppliers."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. N. Reddy, An Introduction to Continuum Mechanics, Second Edition, Chapter 6, §6.6.2.3"
      url: "https://courses.washington.edu/mengr503/Chapter_6.pdf"
    - title: "Chiang C. Mei, MIT OpenCourseWare 1.63J/2.21J Lecture Notes on Fluid Dynamics, §1.6.2"
      url: "https://ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/0c5e315f2b97fff948cb35f10a97894c_16stressstrain.pdf"
verification:
  precheck: pending
---

## Example

Use the Bingham graph on $\mathrm{Sym}_0(3)=\{D\in M_3(\mathbb R):D=D^{\mathsf T},\operatorname{tr}D=0\}$ with Frobenius norm $|S|=(\operatorname{tr}(S^{\mathsf T}S))^{1/2}$, whose zero-rate value is $\mathcal B(0)=\{S\in\mathrm{Sym}_0(3):|S|\le\tau_y\}$. Let the strain rate be $D=0$, let the yield-ball radius satisfy $\tau_y>0$ in Pa, and choose

$$
S=\frac{\tau_y}{\sqrt2} \begin{pmatrix} 1&0&0\\ 0&-1&0\\ 0&0&0 \end{pmatrix}.
$$

This example tests membership in the constitutive graph only. It does not assert force balance, a realized material state, or an experimental observation.

## Example references

[J. N. Reddy, *An Introduction to Continuum Mechanics*, 2nd ed., Chapter 6, §6.6.2.3, PDF p. 27 (printed p. 247)](https://courses.washington.edu/mengr503/Chapter_6.pdf)

[Chiang C. Mei, MIT 1.63J/2.21J *Lecture Notes on Fluid Dynamics*, §1.6.2, equations (1.6.14)–(1.6.16), complete 4-page PDF](https://ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/0c5e315f2b97fff948cb35f10a97894c_16stressstrain.pdf)

## Facts & Assumptions

**Given:** The Frobenius-normalized Bingham graph and a positive yield-ball radius $\tau_y$.

[F1] [[lem-fd-bingham-monotone-graph]]: at zero strain rate, the Bingham graph value is the full set of trace-free symmetric stresses whose Frobenius norm is at most $\tau_y$.

[A1] $\tau_y>0$ Pa and the strain rate is $D=0$.

## Proof

1.1 The displayed matrix $S$ is symmetric and has trace $\frac{\tau_y}{\sqrt2}(1-1+0)=0$. Its squared Frobenius norm is the sum of its squared entries, $|S|^2=\frac{\tau_y^2}{2}(1^2+(-1)^2)=\tau_y^2$, so $|S|=\tau_y$. [given, A1, algebra]

2.1 By [F1] and $D=0$, the admissible rest stresses are exactly the trace-free symmetric matrices with norm at most $\tau_y$. Step 1.1 shows that $S$ meets these conditions; since $\tau_y>0$, it is nonzero. Thus $S\in\mathcal B(0)$ is a nonzero graph-admissible stress at rest. [F1, step 1.1] ∎

## Remarks

The figure shows the planar section of the five-dimensional space $\mathrm{Sym}_0(3)$ spanned by

$$
E_1=\frac1{\sqrt2}\begin{pmatrix}1&0&0\\0&-1&0\\0&0&0\end{pmatrix},\qquad E_2=\frac1{\sqrt2}\begin{pmatrix}0&1&0\\1&0&0\\0&0&0\end{pmatrix}.
$$

These matrices are Frobenius-orthonormal, so stress coordinates $s_1,s_2$ in Pa give $|s_1E_1+s_2E_2|^2=s_1^2+s_2^2$. The disk is the intersection of the full stress ball with this plane, and its boundary point $(\tau_y,0)$ represents the proved stress $S=\tau_yE_1$. The cross-section is explanatory; the proof above uses the matrix entries and the supplier's graph definition, not the drawing.

\begin{center}
\begin{tikzpicture}[scale=1]
  \draw[->] (-1.45,0) -- (1.55,0) node[right] {$s_1$};
  \draw[->] (0,-1.35) -- (0,1.45) node[above] {$s_2$};
  \draw[thick] (0,0) circle [radius=1.1];
  \fill (0,0) circle (1.2pt) node[below left] {$0$};
  \fill (1.1,0) circle (1.7pt) node[below right] {$(\tau_y,0)$};
  \draw[dashed] (0,0) -- (1.1,0) node[midway,above] {$\tau_y$};
\end{tikzpicture}
\end{center}
