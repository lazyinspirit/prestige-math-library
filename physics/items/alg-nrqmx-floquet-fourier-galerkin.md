---
id: alg-nrqmx-floquet-fourier-galerkin
kind: algorithm
domain: mathematics
library: mathematics
title: Floquet Fourier–Galerkin assembly
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-nrqmx-finite-hermitian-matrix-exponential
  - thm-nrqmx-floquet-sambe-domain
justified_by:
  - thm-nrqmx-floquet-galerkin-correctness
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqmx-finite-hermitian-matrix-exponential: mathematical-premise
  thm-nrqmx-floquet-sambe-domain: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Konrad Viebahn, Introduction to Floquet theory, lecture notes (2020)
      url: https://boulderschool.yale.edu/sites/default/files/files/floquetlecture_Konrad%20Viebahn.pdf
      locator: Section IV, equations (55)-(60), Fourier-sector representation and finite truncation discussion.
    - title: André Eckardt and Egidijus Anisimovas, High-frequency approximation for periodically driven quantum systems from a Floquet-space perspective, New Journal of Physics 17 (2015), 093039
      url: https://arxiv.org/pdf/1502.06477
      locator: Section 2.3, equation (22), and Appendix B, equations (B.1)-(B.3), Fourier block convention for the quasienergy operator.
---

## Definition

Assume the Axiom of Choice and Countable Choice. Fix integers $d\ge1$, $b,N\ge0$, and real numbers $\hbar>0$, $\omega>0$, and $\tau>0$. On every coordinate space $\mathbb C^r$ used below, use the standard inner product $\langle x,y\rangle:=\sum_{a=1}^{r}x_a\overline{y_a}$, linear in the first argument, and induced norm $\|x\|=(\sum_{a=1}^{r}|x_a|^2)^{1/2}$, as fixed in the finite-dimensional matrix exponential definition; matrix adjoints are conjugate transposes. Let $H_k\in M_d(\mathbb C)$ for $-b\le k\le b$ satisfy $H_{-k}=H_k^*$; set $H_k=0$ when $|k|>b$. Thus $H(t)=\sum_{k=-b}^{b}H_ke^{ik\omega t}$ is a finite Fourier polynomial with period $T=2\pi/\omega$. Put $q=(2N+1)d$ and use this coordinate inner product and norm on $\mathbb C^q$. Let $S_\tau$ be a caller-supplied total classical routine on $\{M\in M_q(\mathbb C):M=M^*\}$ whose declared interface, on input $M$, returns real numbers $\widetilde\lambda_1,\ldots,\widetilde\lambda_q$, an orthonormal basis $x_1,\ldots,x_q$ for this inner product, and residuals $r_j=\|Mx_j-\widetilde\lambda_jx_j\|\le\tau$ for $1\le j\le q$. This algorithm returns that finite record unchanged and does not independently certify its residual claims.

The algorithm takes $(d,b,N,\hbar,\omega,(H_k)_{|k|\le b},\tau,S_\tau)$ and returns a matrix $K_N$ and the eigensolver's output record:

1. Order the Fourier indices as $-N,-N+1,\ldots,N$ and allocate a $(2N+1)d$ by $(2N+1)d$ block matrix.

2. For each ordered pair $n,m\in\{-N,\ldots,N\}$, assign the $d$ by $d$ block
$$ (K_N)_{nm}:=H_{n-m}+n\hbar\omega\,\delta_{nm}I_d,$$
where $\delta_{nm}=1$ if $n=m$ and $0$ otherwise.

3. Set $R:=S_\tau(K_N)$ by one call, then return $(K_N,R)$.

## Definition references

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[thm-nrqmx-floquet-sambe-domain]]

[[def-nrqmx-finite-hermitian-matrix-exponential]]

## Fourier-sector diagram

For the special case $b=1$, an input Fourier sector $m$ contributes to output sector $n$ through block $H_{n-m}$; the diagonal also contains $n\hbar\omega I_d$. The arrows show block locations only and are not used in the proof of the compression theorem.

```tikz
\begin{tikzpicture}[>=stealth]
\node[draw,minimum width=25mm,minimum height=9mm] (a) at (0,0) {$\mathbb C^d_{\,n-1}$};
\node[draw,minimum width=25mm,minimum height=9mm] (b) at (4,0) {$\mathbb C^d_{\,n}$};
\node[draw,minimum width=25mm,minimum height=9mm] (c) at (8,0) {$\mathbb C^d_{\,n+1}$};
\draw[->] (a) -- node[above] {$H_1$} (b);
\draw[->] (b) -- node[above] {$H_1$} (c);
\draw[->] (b) -- node[below] {$H_{-1}$} (a);
\draw[->] (c) -- node[below] {$H_{-1}$} (b);
\end{tikzpicture}
```
