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
  - thm-nrqmx-floquet-sambe-domain
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
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
      locator: Section 2.3, equations (19)-(20), and Appendix B, equations (184)-(185), Fourier block convention for the quasienergy operator.
---

## Definition

Assume the Axiom of Choice and Countable Choice. Fix integers $d\ge1$, $b,N\ge0$, and real numbers $\hbar>0$, $\omega>0$, and $\tau>0$. Let $H_k\in M_d(\mathbb C)$ for $-b\le k\le b$ satisfy $H_{-k}=H_k^*$; set $H_k=0$ when $|k|>b$. Thus $H(t)=\sum_{k=-b}^{b}H_ke^{ik\omega t}$ is a finite Fourier polynomial with period $T=2\pi/\omega$. Let $S_\tau$ be a caller-supplied total classical routine for finite Hermitian matrices whose declared interface returns $(2N+1)d$ real approximate eigenvalues $\widetilde\lambda_j$, an orthonormal basis $x_j$, and residuals $r_j=\|K_Nx_j-\widetilde\lambda_jx_j\|$ with target $r_j\le\tau$. This algorithm returns that finite record unchanged and does not certify its residual claims.

The algorithm takes $(d,b,N,\hbar,\omega,(H_k)_{|k|\le b},\tau,S_\tau)$ and returns a matrix $K_N$ and the eigensolver's output record:

1. Order the Fourier indices as $-N,-N+1,\ldots,N$ and allocate a $(2N+1)d$ by $(2N+1)d$ block matrix.

2. For each ordered pair $n,m\in\{-N,\ldots,N\}$, assign the $d$ by $d$ block
$$ (K_N)_{nm}:=H_{n-m}+n\hbar\omega\,\delta_{nm}I_d,$$
where $\delta_{nm}=1$ if $n=m$ and $0$ otherwise.

3. Call $S_\tau(K_N)$ once and return $(K_N,S_\tau(K_N))$.

The block assembly always terminates after $(2N+1)^2$ block assignments; the complete procedure terminates by the assumed totality of $S_\tau$. This procedure defines the exact finite compression matrix; the solver's residual claims and convergence of finite-section quasienergies are separate claims.

## Definition references

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[thm-nrqmx-floquet-sambe-domain]]

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
