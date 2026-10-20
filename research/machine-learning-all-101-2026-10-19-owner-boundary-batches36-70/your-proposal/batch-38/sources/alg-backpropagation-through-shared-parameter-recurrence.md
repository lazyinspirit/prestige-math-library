---
id: alg-backpropagation-through-shared-parameter-recurrence
kind: algorithm
title: "Backpropagation through a finite shared-parameter recurrence"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-finite-straight-line-computational-program, def-c-one-map-and-local-inverse, def-total-derivative-in-euclidean-space, alg-reverse-mode-automatic-differentiation]
justified_by: []
verification:
  precheck: n/a
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Atılım Güneş Baydin, Barak A. Pearlmutter, Alexey Andreyevich Radul, and Jeffrey Mark Siskind, Automatic Differentiation in Machine Learning: a Survey, §§3.1–3.2"
      url: "https://jmlr.org/papers/volume18/17-468/17-468.pdf"
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, Lecture 5 Part 3, §§8.3–8.4"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec08.pdf"
---

## Definition

Let $p,q\ge1$, let $\Theta\subseteq\mathbb R^p$ and $H\subseteq\mathbb R^q$ be open, let $T\ge0$ be an integer, and fix $\theta\in\Theta$. A map is continuously differentiable here when it is totally differentiable at every point of its open domain and its derivative matrix varies continuously there. A finite shared-parameter recurrence consists of an initial-state map $h_0:\Theta\to H$, transition maps $\Phi_t:\Theta\times H\to H$ for $t=1,\ldots,T$, and a scalar loss $\ell:\Theta\times H\to\mathbb R$, all continuously differentiable on open domains containing the evaluated inputs. Put $h_0=h_0(\theta)$, $h_t=\Phi_t(\theta,h_{t-1})$, and $J(\theta)=\ell(\theta,h_T)$. A fixed collection of external inputs, such as the observations at successive time steps, may be built into the maps $\Phi_t$. The same parameter vector $\theta$ is supplied to every transition.

For each map, its registered local derivative is the total derivative with respect to the indicated variable while the other displayed variables are held fixed. Transposes are Euclidean adjoints for the stated coordinate inner products. Evaluate and store $h_0,h_1,\ldots,h_T$. If a map is undefined, return DOMAIN_ERROR. For piecewise-$C^1$ maps, use only the derivative on a unique strict active branch; if any evaluated input lies on a branch boundary or has ambiguous branch selection, return NONDIFFERENTIABLE and no gradient.

Initialize $\lambda_T=(D_h\ell(\theta,h_T))^T$ and $g=(D_\theta\ell(\theta,h_T))^T$. For $t=T,T-1,\ldots,1$, set $A_t=D_\theta\Phi_t(\theta,h_{t-1})$, $B_t=D_h\Phi_t(\theta,h_{t-1})$, then update

$$g\leftarrow g+A_t^T\lambda_t,\qquad \lambda_{t-1}=B_t^T\lambda_t.$$

After the reverse sweep, set $g\leftarrow g+(Dh_0(\theta))^T\lambda_0$ and return $(J(\theta),g)$. For $T=0$, the reverse loop is empty and the same initialization and final update apply. All derivative calculations in this procedure are real-arithmetic operations on the specified maps; no floating-point accuracy guarantee is asserted.

The diagram shows the finite unrolling: arrows point from an input value to the operation that uses it. The single $\theta$ node feeds each transition and the loss, so the reverse updates add all of those contributions into the same accumulator $g$; the $h_t$ cotangents flow from right to left. The diagram illustrates the algorithm, and no correctness proof relies on it.

```tikz
\begin{tikzpicture}[>=stealth, node distance=1.55cm]
  \node[draw,circle] (theta) {$\theta$};
  \node[draw,rectangle,right of=theta,xshift=0.4cm] (h0) {$h_0(\theta)$};
  \node[draw,rectangle,right of=h0,xshift=0.65cm] (phi1) {$\Phi_1$};
  \node[draw,rectangle,right of=phi1,xshift=0.65cm] (h1) {$h_1$};
  \node[draw,rectangle,right of=h1,xshift=0.65cm] (phi2) {$\Phi_2$};
  \node[right of=phi2,xshift=0.35cm] (dots) {$\cdots$};
  \node[draw,rectangle,right of=dots,xshift=0.35cm] (phit) {$\Phi_T$};
  \node[draw,rectangle,right of=phit,xshift=0.65cm] (ht) {$h_T$};
  \node[draw,rectangle,right of=ht,xshift=0.65cm] (loss) {$\ell(\theta,h_T)$};
  \draw[->] (theta) -- (h0);
  \draw[->] (h0) -- (phi1);
  \draw[->] (theta) to[bend left=30] (phi1);
  \draw[->] (phi1) -- (h1);
  \draw[->] (h1) -- (phi2);
  \draw[->] (theta) to[bend left=42] (phi2);
  \draw[->] (phi2) -- (dots);
  \draw[->] (dots) -- (phit);
  \draw[->] (theta) to[bend left=55] (phit);
  \draw[->] (phit) -- (ht);
  \draw[->] (ht) -- (loss);
  \draw[->] (theta) to[bend left=68] (loss);
\end{tikzpicture}
```

## Definition references

[[def-finite-straight-line-computational-program|Finite real-arithmetic graph and strict-branch conventions]]

[[alg-reverse-mode-automatic-differentiation|Generic scalar-output reverse-mode sweep]]

[[def-c-one-map-and-local-inverse|Continuously differentiable Euclidean maps]]

[[def-total-derivative-in-euclidean-space|Total derivative as a linear first-order approximation]]

## Remarks

This is a mathematical real-arithmetic procedure. A floating-point implementation may round its primal values and local derivatives; the definition supplies no numerical error estimate.
