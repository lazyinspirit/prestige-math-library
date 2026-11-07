---
id: thm-booker-lee-strombergsson-explicit-gamma0n-twist-minimal-trace-formula
kind: theorem
title: Booker–Lee–Strömbergsson Explicit Γ₀(N) Twist-Minimal Trace Formula
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - thm-booker-strombergsson-general-selberg-trace-formula
  - def-booker-lee-strombergsson-explicit-gamma0n-trace-terms
  - def-selberg-exceptional-eigenvalue-parameter
  - def-weight-zero-maass-form-on-gamma0n
  - def-dirichlet-character-modulo-q
  - def-primitive-dirichlet-character-and-conductor
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "A. Booker, M. Lee, and A. Strömbergsson, Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture"
      url: "https://arxiv.org/pdf/1803.06016v2"
      locator: "§2.2, Theorem 2.1 and equations (2.24)–(2.35): explicit arbitrary-conductor Γ₀(N) formula, with all terms defined in the local formula-terms item."
    - title: "A. Booker and A. Strömbergsson, Numerical Computations with the Trace Formula and the Selberg Eigenvalue Conjecture"
      url: "https://www.degruyterbrill.com/document/doi/10.1515/CRELLE.2007.047/pdf"
      locator: "§2.2: squarefree Γ₀(N) and nebentypus specialization used to check the convention."
---

## Statement

Let $N\ge1$, and let $\chi$ be a Dirichlet character modulo $N$ with
$\chi(-1)=1$. Put $q=\operatorname{cond}(\chi)$, and write
$N=\prod_{p\mid N}p^{e_p}$ and
$q=\prod_{p\mid N}p^{s_p}$. Let $V=\begin{pmatrix}-1&0\\0&1\end{pmatrix}$ and
$\Gamma_0^\pm(N)=\langle\Gamma_0(N),V\rangle$. On the weight-zero Maass
space define $T_1f=f$ and $T_{-1}f(z)=f(-\overline z)$. For each $\lambda\ge0$,
let $A_\lambda(\chi)$ be the space of smooth, square-integrable functions
automorphic under $\Gamma_0(N)$ with character $\chi$, zero constant term at
every cusp whose stabilizer acts trivially under $\chi$, and
$\Delta f=\lambda f$ for $\Delta=-y^2(\partial_x^2+\partial_y^2)$.
Let $h$ be even, holomorphic on $|\operatorname{Im}r|\le\frac12+\delta$ for
some $\delta>0$, and satisfy $|h(r)|\le A(1+|\operatorname{Re}r|)^{-2-\delta}$
there; put $g(u)=\frac1{2\pi}\int_{\mathbb R}h(r)e^{-iru}\,dr$.

For each $n\in\{1,-1\}$, the trace
$$\sum_{\lambda\ge0}\operatorname{tr}\!\left(T_n\mid A_\lambda(\chi)\right)
h\!\left(\sqrt{\lambda-1/4}\right)$$
equals
$$I(\Gamma,\chi;n)+(NEll+Ell)(\Gamma,\chi;n)+(C+Eis)(\Gamma,\chi;n),$$
where $\Gamma=\Gamma_0^\pm(N)$ and the three terms are those in the local
Booker–Lee–Strömbergsson explicit Γ₀(N) trace-formula definition. Explicitly,
the identity contribution is
$$I(\Gamma,\chi;n)=\frac{1+n}{2}\,\frac{N\prod_{p\mid N}(1+p^{-1})}{12}
\int_{\mathbb R}rh(r)\tanh(\pi r)\,dr,$$
and the elliptic and nonelliptic contribution is
$$
(NEll+Ell)(\Gamma,\chi;n)=
\sum_{\substack{t\in\mathbb Z,\ t^2-4n=d\ell^2\\
\sqrt{t^2-4n}\notin\mathbb Q}}
A_{t,n}[h]H(d)
\prod_{p\mid N}S_p(p^{e_p},\chi_p;t,n)
\prod_{p\nmid N}S_p(1,1;t,n),
$$
where $d$ is the unique fundamental discriminant and $\ell>0$ with
$t^2-4n=d\ell^2$. The continuous-spectrum and Eisenstein contribution
$C+Eis$ is the $n=1$ or $n=-1$ branch, respectively, of the complete explicit
formula in the earlier definition of Booker–Lee–Strömbergsson Explicit
Γ₀(N) Trace-Formula Terms; that definition specifies both branches, every
local factor, and the Fourier-transform convention. The formula allows
arbitrary conductor $q\mid N$ and does not assume that $N$ is squarefree.

## Statement references

[A. Booker, M. Lee, and A. Strömbergsson, *Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture*](https://arxiv.org/pdf/1803.06016v2)

[A. Booker and A. Strömbergsson, *Numerical Computations with the Trace Formula and the Selberg Eigenvalue Conjecture*](https://www.degruyterbrill.com/document/doi/10.1515/CRELLE.2007.047/pdf)

## Proof status

The explicit formulas and their local notation are now stated in the local
formula-term definition. The BLS proof that these terms equal the spectral
trace expands and evaluates the orbital and spectral contributions through
§§2.3–2.9; that derivation, including the finite-conductor character sums and
continuous-spectrum calculation, is not reconstructed in this batch. The
theorem is retained with its arbitrary-conductor scope and escalated; the BS07
squarefree case does not prove it.
