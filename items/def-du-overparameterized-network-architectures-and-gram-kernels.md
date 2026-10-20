---
id: def-du-overparameterized-network-architectures-and-gram-kernels
kind: definition
title: "Fully connected and residual networks with the Du Gram kernel"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
  - def-feedforward-neural-network
  - lem-du-activation-normalizer-finite-positive
  - def-multivariate-normal-law
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
justified_by: [lem-du-population-gram-kernels-are-finite-symmetric-psd]
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "AC, DC and countable choice are assumed explicitly for Gaussian-law existence. The finite real recurrences require no additional choice."
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Simon S. Du, Jason D. Lee, Haochuan Li, Liwei Wang, and Xiyu Zhai, Gradient Descent Finds Global Minima of Deep Neural Networks, §§3.3, 5, and 6"
      url: "https://proceedings.mlr.press/v97/du19c.html"
    - title: "Simon S. Du, Jason D. Lee, Haochuan Li, Liwei Wang, and Xiyu Zhai, Gradient Descent Finds Global Minima of Deep Neural Networks, Supplement, Appendix C equation (14) and Appendix E.1 equations (16)–(17)"
      url: "https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf"
    - title: "Princeton Theory of Deep Learning, Chapter 8, §§8.1–8.5"
      url: "https://www.cs.princeton.edu/courses/archive/fall19/cos597B/lecnotes/bookdraft.pdf"
---

## Definition

Assume AC, DC and countable choice for the Gaussian probability-law constructions below. The displayed finite real network recurrences and empirical loss are deterministic definitions for fixed parameters. Fix positive integers $d,n,H,m$, training inputs $x_1,\ldots,x_n\in\mathbb R^d$ with $\|x_i\|_2=1$, labels $y_1,\ldots,y_n\in\mathbb R$, an analytic nonpolynomial activation $\sigma$ satisfying $|\sigma(0)|<\infty$ and finite Lipschitz constants for $\sigma$ and $\sigma'$, and the positive finite normalization $c_\sigma=(\mathbb E_{Z\sim N(0,1)}[\sigma(Z)^2])^{-1}$. A fully connected network of width $m$ and depth $H$ is the finite feedforward recurrence

$$x^{(0)}=x,\qquad x^{(h)}=\sqrt{c_\sigma/m}\,\sigma(W^{(h)}x^{(h-1)})\quad(1\le h\le H),\qquad f_{\rm fc}(x,\theta)=a^Tx^{(H)},$$

where $W^{(1)}\in\mathbb R^{m\times d}$, $W^{(h)}\in\mathbb R^{m\times m}$ for $h\ge2$, $a\in\mathbb R^m$, and $\sigma$ acts coordinatewise. The residual network uses the same first layer and then

$$x^{(1)}=\sqrt{c_\sigma/m}\,\sigma(W^{(1)}x),\qquad x^{(h)}=x^{(h-1)}+\frac{c_{\rm res}}{H\sqrt m}\,\sigma(W^{(h)}x^{(h-1)})\quad(2\le h\le H),\qquad f_{\rm res}(x,\theta)=a^Tx^{(H)},$$

with $0<c_{\rm res}<1$. In either architecture, random initialization means all entries of all matrices $W^{(h)}$ and of $a$ are independent $N(0,1)$ random variables; all these entries are trained by full-batch gradient descent. The empirical quadratic loss is $L(\theta)=\frac12\sum_{i=1}^n(f(x_i,\theta)-y_i)^2$.

For the fully connected architecture and the same fixed data, define the population matrices by

$$K_{ij}^{(0)}=\langle x_i,x_j\rangle.$$

For $1\le h<H$, let $(U_{ij}^{(h)},V_{ij}^{(h)})$ be a centered bivariate normal vector with covariance

$$A_{ij}^{(h)}=\begin{pmatrix}K_{ii}^{(h-1)}&K_{ij}^{(h-1)}\\K_{ji}^{(h-1)}&K_{jj}^{(h-1)}\end{pmatrix},$$

and put $K_{ij}^{(h)}=c_\sigma\mathbb E[\sigma(U_{ij}^{(h)})\sigma(V_{ij}^{(h)})]$. For $h=H$, use the same bivariate-normal definition with $A_{ij}^{(H)}$ formed from $K^{(H-1)}$, and set

$$K_{ij}^{(H)}=c_\sigma K_{ij}^{(H-1)}\mathbb E[\sigma'(U_{ij}^{(H)})\sigma'(V_{ij}^{(H)})].$$

When $H=1$, this last formula uses $K^{(0)}$ directly and there are no intermediate activation-covariance matrices. For the fully connected theorem, this terminal matrix is denoted $K_{\rm fc}^{(H)}$.

For the residual architecture with $H\ge2$, use a separate sequence $S^{(h)}$ and mean vector $b^{(h)}$. Set $S^{(0)}=K^{(0)}$. For $G^{(0)}\sim N_n(0,S^{(0)})$, put

$$S_{ij}^{(1)}=c_\sigma\mathbb E[\sigma(G_i^{(0)})\sigma(G_j^{(0)})],\qquad b_i^{(1)}=\sqrt{c_\sigma}\mathbb E[\sigma(G_i^{(0)})].$$

Write $\alpha=c_{\rm res}/H$. For $2\le h<H$, take a fresh centered Gaussian vector $G^{(h-1)}$ with covariance $S^{(h-1)}$, put $\mu_i^{(h-1)}=\mathbb E[\sigma(G_i^{(h-1)})]$, and define

$$S_{ij}^{(h)}=S_{ij}^{(h-1)}+\alpha\bigl(b_i^{(h-1)}\mu_j^{(h-1)}+b_j^{(h-1)}\mu_i^{(h-1)}\bigr)+\alpha^2\mathbb E[\sigma(G_i^{(h-1)})\sigma(G_j^{(h-1)})],\qquad b_i^{(h)}=b_i^{(h-1)}+\alpha\mu_i^{(h-1)}.$$

For $G\sim N_n(0,S^{(H-1)})$, define the residual terminal matrix by

$$K_{{\rm res},ij}^{(H)}=\frac{c_{\rm res}^2}{H^2}S_{ij}^{(H-1)}\mathbb E[\sigma'(G_i)\sigma'(G_j)].$$

The fully connected and residual convergence statements use $K_{\rm fc}^{(H)}$ and $K_{\rm res}^{(H)}$, respectively. At $H=1$, the two architectures coincide; define $K_{\rm res}^{(1)}=K_{\rm fc}^{(1)}$. The residual recursion above is the scalar specialization of the source's general mean/second-moment recursion, equation (16); in particular it includes the mean cross terms. Its terminal Gaussian covariance is $S^{(H-1)}$, as determined by the finite-width last-layer Gram formula (14).

The residual recurrence has one identity contribution from $x^{(h-1)}$ and one nonlinear contribution at every layer $2\le h\le H$; the arrows below depict that convention for one generic layer and do not enter any proof.

```tikz
\begin{tikzpicture}[>=stealth,node distance=1.3cm]
  \node (in) {$x^{(h-1)}$};
  \node[draw,rectangle,right=1.7cm of in] (act) {$\frac{c_{\rm res}}{H\sqrt m}\sigma(W^{(h)}x^{(h-1)})$};
  \node[draw,circle,right=2.0cm of act] (sum) {$+$};
  \node[right=1.2cm of sum] (out) {$x^{(h)}$};
  \draw[->] (in) -- (act);
  \draw[->] (act) -- (sum);
  \draw[->] (in) to[bend right=28] (sum);
  \draw[->] (sum) -- (out);
\end{tikzpicture}
```

## Definition references

[Du et al., fully connected and residual architectures, equations (2)–(3)](https://proceedings.mlr.press/v97/du19c.html)

[Du et al., population Gram recursions, Definitions 5.1 and 6.1, equations (7) and (8)](https://proceedings.mlr.press/v97/du19c.pdf)

[Du et al., Appendix C, last-layer Gram formula (14)](https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf)

[Du et al., Appendix E.1, general population mean and second-moment recursion (16)–(17)](https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf)

[[def-feedforward-neural-network|Finite feedforward computation graphs and layered perceptrons]]

[Princeton Theory of Deep Learning, Chapter 8, §§8.1–8.5, infinite-width context](https://www.cs.princeton.edu/courses/archive/fall19/cos597B/lecnotes/bookdraft.pdf)
