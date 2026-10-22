---
id: ex-tgrx-wedge-typeiii-warning
kind: example
title: Finite two-mode squeeze illustrates but does not construct wedge factorization
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 8
deps:
  - post-tgrx-wedge-modular-model
dependency_roles:
  post-tgrx-wedge-modular-model: formulation-prerequisite
physical_scope: "A two-oscillator-mode illustration of a reduced state and its entropy. It is not a construction of the continuum wedge algebra's inside/outside factorization, a thermal density matrix for that algebra, or an experimental observation."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
generation:
  role: example
sources:
  references:
    - title: "Daniel Harlow, Jerusalem Lectures on Black Holes and Quantum Information, complete lecture notes, arXiv:1409.1231"
      url: "https://arxiv.org/pdf/1409.1231"
      locator: "Complete lecture notes; §3.2–3.3 (PDF pp. 15–21), the finite-system entanglement analogy, Rindler decomposition, and the limitations of a naive continuum tensor-factor picture. The oscillator normalization, partial trace, and entropy are derived locally below."
    - title: "Edward Witten, Notes on Some Entanglement Properties of Quantum Field Theory, complete lecture notes, arXiv:1803.04993"
      url: "https://arxiv.org/pdf/1803.04993"
      locator: "Complete 80-page lecture notes inspected at §§5.2–5.3 (PDF pp. 47–54). Section 5.2 explicitly qualifies the Euclidean path-integral/factorization account as nonrigorous; this supports the example's continuum-scope warning, not its oscillator calculations."
---

## Example

Let $\mathcal H_R=\mathcal H_L=\ell^2(\mathbb N_0)$ with orthonormal number
bases $\{|n\rangle_R:n\in\mathbb N_0\}$ and
$\{|n\rangle_L:n\in\mathbb N_0\}$. Use inner products linear in the second
variable. For a Hilbert space $K$, write $\mathcal B(K)$ for its bounded
linear operators, and for $u,v\in K$ write $|u\rangle\langle v|$ for the
rank-one operator $w\mapsto u\langle v,w\rangle$. For dimensionless
$0<z<1$, define
$$|\psi_z\rangle=\sqrt{1-z}\sum_{n=0}^\infty z^{n/2} |n\rangle_R\otimes|n\rangle_L.$$
Define its left-traced operator $\rho_R$ by
$$\langle m|\rho_R|n\rangle =\sum_{k=0}^\infty \langle m,k|\psi_z\rangle\overline{\langle n,k|\psi_z\rangle}.$$
This coefficient formula defines the partial trace of this rank-one operator
over the left oscillator. The vector is normalized, and $\rho_R$ is a
positive diagonal operator with eigenvalues $p_n=(1-z)z^n$, whose sum is one.
Its entropy in nats, using the natural logarithm, is
$$S(\rho_R)=-\sum_{n=0}^\infty p_n\ln p_n =-\ln(1-z)-\frac{z\ln z}{1-z}.$$
This explicitly constructed pair of oscillator modes does not construct a
tensor-product factorization of the continuum right-wedge Hilbert space or a
density matrix for its local von Neumann algebra.

## Example references

[[post-tgrx-wedge-modular-model]]

## Diagram: partial trace in the two-mode model

Write $P_z=|\psi_z\rangle\langle\psi_z|$. Set
$V_z=\{cP_z:c\in\mathbb C\}\subseteq
\mathcal B(\mathcal H_R\otimes\mathcal H_L)$ and
$W_z=\{c\rho_R:c\in\mathbb C\}\subseteq\mathcal B(\mathcal H_R)$.
The rank-one reduction used here is the linear map
$\mathcal R_z:V_z\to W_z$ defined by
$\mathcal R_z(cP_z)=c\rho_R$ for $c\in\mathbb C$; its value on $P_z$ is
specified by the product-basis coefficient formula in the Example. The
diagram uses $\chi_z:\mathbb C\to V_z$, $\chi_z(c)=cP_z$, and
$r_z:\mathbb C\to W_z$, $r_z(c)=c\rho_R$. The verification shows
$\mathcal R_z(P_z)=\rho_R$, so the diagram commutes. Every arrow is defined
only on its stated domain; the reduction arrow acts only on scalar multiples
of $P_z$. The TikZ source below specifies that rank-one diagram. Since the library renderer does not execute
TikZ, the adjacent array is its rendered algebraic layout. No operation on
general trace-class operators or continuum factorization is asserted.

```tikz
\begin{tikzcd}[column sep=large,row sep=large]
\mathbb C \arrow[r,"\chi_z"] \arrow[dr,"r_z"'] &
V_z \arrow[d,"\mathcal R_z"]\\
&W_z
\end{tikzcd}
```

$$\begin{array}{ccc}\mathbb C&\xrightarrow{\chi_z}&V_z\\&\searrow_{r_z}&\downarrow_{\mathcal R_z}\\&&W_z\end{array}$$

## Facts & Assumptions

**Given:** $0<z<1$, the two Hilbert spaces, and their number bases.

[F1] The shared wedge postulate fixes the continuum scalar Fock model and
local right-wedge algebra, and explicitly does not assume a tensor-product
factorization across that wedge and its complement.
[[post-tgrx-wedge-modular-model]]

## Verification

**Proof technique:** Normalize the explicit series, compute the partial
trace in the product basis, and evaluate its convergent entropy series.

**Given:** [F1] and the data in the Example.

1.1 Let $\psi_{z,N}=\sqrt{1-z}\sum_{n=0}^N z^{n/2}
|n\rangle_R\otimes|n\rangle_L$. Orthogonality gives, for $M>N$,
$\|\psi_{z,M}-\psi_{z,N}\|^2=(1-z)\sum_{n=N+1}^M z^n
\le (1-z)\sum_{n=N+1}^{\infty}z^n=z^{N+1}\to0$.
Thus the partial sums converge in $\mathcal H_R\otimes\mathcal H_L$ to
$\psi_z$. Also $(1-z)\sum_{n=0}^N z^n=1-z^{N+1}$, so continuity of the
norm gives $\langle\psi_z|\psi_z\rangle
=(1-z)\sum_{n=0}^\infty z^n=1$.
[given, algebra]

2.1 The product-basis coefficients are
$\langle m,k|\psi_z\rangle=\sqrt{1-z}\,z^{k/2}\delta_{mk}$.
Substitution in the defining partial-trace sum gives
$\langle m|\rho_R|n\rangle
=(1-z)\sum_{k=0}^\infty z^k\delta_{mk}\delta_{nk}
=(1-z)z^n\delta_{mn}$. Therefore the eigenvalues are exactly
$p_n=(1-z)z^n$, they are positive, and their sum is one by step 1.1.
[given, step 1.1, algebra]

3.1 Put $a_n=nz^n$ for $n\ge1$. Since
$a_{n+1}/a_n=z(1+1/n)\to z<1$, choose $q$ with $z<q<1$; for all
sufficiently large $n$, $a_{n+1}\le q a_n$, so $a_n\to0$ and the tail
$\sum a_n$ is bounded by a geometric series. Differentiating
$\sum_{n=0}^N z^n=(1-z^{N+1})/(1-z)$ gives
$\sum_{n=1}^N n z^{n-1}
=\bigl(1-(N+1)z^N+Nz^{N+1}\bigr)/(1-z)^2$. Since $Nz^N\to0$,
taking $N\to\infty$ gives $\sum_{n=0}^\infty n z^n=z/(1-z)^2$. Hence
$\sum_{n=0}^\infty n p_n=z/(1-z)$, and
$-\sum_{n=0}^\infty p_n\ln p_n
=-\ln(1-z)-(\ln z)\sum_{n=0}^\infty n p_n
=-\ln(1-z)-z\ln z/(1-z)$. The series converges because
$\sum z^n$ and $\sum n z^n$ converge for $0<z<1$. In particular,
$\sum_{n=0}^\infty p_n|\ln p_n|
=|\ln(1-z)|+|\ln z|\,z/(1-z)<\infty$. [given, step 2.1, algebra]

4.1 Step 2.1 shows that the coefficient formula in the Example gives
$\rho_R|n\rangle=p_n|n\rangle$ with $0<p_n<1$ and $\sum_n p_n=1$; hence
$\rho_R$ is bounded and nonzero. Step 1.1 gives $P_z\ne0$. Every element of
$V_z$ therefore has a unique form $cP_z$, so $\mathcal R_z(cP_z)=c\rho_R$
defines a linear map from $V_z$ to $W_z$. On $P_z$ its matrix coefficients
are exactly those of the rank-one coefficient formula in the Example; thus
$\mathcal R_z(P_z)=\rho_R$ and the displayed rank-one diagram commutes. The
asserted reduction is confined to this rank-one input. The continuum
postulate [F1] instead defines a scalar Fock representation and a right-wedge
von Neumann algebra; no map identifying those two constructions is defined
or used here. Consequently this example proves the stated oscillator
identities but no continuum wedge factorization or density-matrix claim.
[F1, step 1.1, step 2.1, step 3.1, given, construct, algebra] ∎
