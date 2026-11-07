---
id: thm-booker-lee-strombergsson-twist-minimal-sieve
kind: theorem
title: Booker–Lee–Strömbergsson Newform and Twist-Minimal Sieve
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - thm-booker-lee-strombergsson-explicit-gamma0n-twist-minimal-trace-formula
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
      locator: "§3, equations (3.1)–(3.3) and Theorem 1.7: newform and twist-minimal trace sieves."
    - title: "A. Booker and A. Strömbergsson, Numerical Computations with the Trace Formula and the Selberg Eigenvalue Conjecture"
      url: "https://www.degruyterbrill.com/document/doi/10.1515/CRELLE.2007.047/pdf"
      locator: "§2.3, Theorem 4: the squarefree newform sieve underlying the finite-level comparison."
---

## Statement

Let $N\ge1$, let $\chi$ be an even Dirichlet character modulo $N$, put
$q=\operatorname{cond}(\chi)$, and let $\lambda>0$. Put
$$\Gamma_0(N)=\left\{\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\mathrm{SL}_2(\mathbb Z):N\mid c\right\},\qquad
\chi\!\left(\begin{pmatrix}a&b\\c&d\end{pmatrix}\right)=\chi(d\bmod N).$$
For a positive integer $L$ divisible by $q$, let $\chi_L$ be the unique character
modulo $L$ agreeing with $\chi$ on integers coprime to $N$. Let
$A_\lambda(\chi_L)$ be the space of smooth weight-zero cuspidal Maass forms
$f$ satisfying
$$f\!\left(\frac{az+b}{cz+d}\right)=\chi_L(d)f(z)\quad
\left(\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\Gamma_0(L)\right),\qquad
\int_{\Gamma_0(L)\backslash\mathbb H}|f(z)|^2\frac{dx\,dy}{y^2}<\infty,
\qquad \Delta f=\lambda f,$$
where $\Delta=-y^2(\partial_x^2+\partial_y^2)$ and cuspidal means that
$f$ has zero constant term at every cusp. For $n\in\{1,-1\}$ set
$T_1f=f$ and $T_{-1}f(z)=f(-\overline z)$; the latter is the involution induced
by the determinant-negative isometry and preserves this space because $\chi$ is
even. For positive integers $m$ coprime to $N$, use the Hecke operator
$$T_mf(z)=\frac1{\sqrt m}\sum_{ad=m\atop a,d>0}\chi(a)
\sum_{b\bmod d}f\!\left(\frac{az+b}{d}\right).$$
Write the Fourier expansion at infinity as
$$f(x+iy)=\sqrt y\sum_{r\in\mathbb Z\setminus\{0\}}
a_f(r)K_{\sqrt{1/4-\lambda}}(2\pi|r|y)e^{2\pi i r x};$$
then a normalized Hecke eigenform is a common eigenfunction of these $T_m$
with $a_f(1)=1$.

For $q\mid L\mid N$ and $d\mid N/L$, define the degeneracy map
$\ell_{L,d}:A_\lambda(\chi_L)\to A_\lambda(\chi)$ by
$(\ell_{L,d}f)(z)=f(dz)$. Define the oldspace and newspace by
$$A_\lambda^{\mathrm{old}}(\chi)=
\operatorname{span}\{\ell_{L,d}A_\lambda(\chi_L):q\mid L<N,\ d\mid N/L\},\qquad
A_\lambda^{\mathrm{new}}(\chi)=
A_\lambda^{\mathrm{old}}(\chi)^\perp,$$
where the orthogonal complement is taken in $A_\lambda(\chi)$ for the Petersson
inner product. The conductor $\operatorname{cond}(f)$ of a newform is its
minimal new level. The twist $f\otimes\psi$ by a Dirichlet character $\psi$
is the normalized newform whose Hecke eigenvalues satisfy
$a_{f\otimes\psi}(m)=a_f(m)\psi(m)$ for integers $m$ coprime to
$\operatorname{cond}(\psi)$. Call $f$ twist-minimal if
$\operatorname{cond}(f\otimes\psi)\ge\operatorname{cond}(f)$ for every
Dirichlet character $\psi$, and let $A_\lambda^{\min}(\chi)$ be the span of
its twist-minimal normalized Hecke eigenforms in $A_\lambda^{\mathrm{new}}(\chi)$.

Write $\chi=\prod_{p\mid N}\chi_p$, put $e_p=\operatorname{ord}_p(N)$ and
$s_p=\operatorname{ord}_p(q)$. The character $\chi$ is minimal if, for every
odd $p\mid N$, either $s_p\in\{0,e_p\}$ or $\chi_p$ has order
$2^{\operatorname{ord}_2(p-1)}$, and for $p=2$,
$$s_2\in\{\lfloor e_2/2\rfloor,e_2\}\cup
\begin{cases}
\{0\},&e_2\le3,\\
\{0,2\},&e_2>3\text{ and }2\nmid e_2,\\
\varnothing,&e_2>3\text{ and }2\mid e_2.
\end{cases}$$
Here $\operatorname{ord}_p(m)$ is the exponent of $p$ in $m$, and
$\operatorname{ord}_2(p-1)$ is the exponent of $2$ in $p-1$.

The newform trace is obtained from the full trace by the exact conductor sieve
$$\operatorname{Tr}\!\left(T_n\mid A_\lambda^{\mathrm{new}}(\chi)\right)
=\sum_{M\mid N/q}\beta\!\left(\frac{N}{Mq}\right)
\operatorname{Tr}\!\left(T_n\mid A_\lambda(\chi_{Mq})\right),$$
where $\beta$ is the multiplicative function determined by
$\zeta(s)^{-2}=\sum_{m\ge1}\beta(m)m^{-s}$.
For minimal $\chi$, let $S_\chi$ consist of pairs $(M,\psi)$ such that $M\mid N$,
$\psi$ is primitive,
$\operatorname{lcm}(M,\operatorname{cond}(\psi)\operatorname{cond}(\chi\psi))=N$,
$\operatorname{cond}(\chi\psi^2)\mid M$, and the character $\chi\psi^2$
viewed modulo $M$ is minimal. Define $(M,\psi)\sim(M',\psi')$ exactly when
$M'=M$ and the subspaces satisfy
$$A_\lambda^{\min}((\chi\psi^2)_M)\otimes\psi
=A_\lambda^{\min}((\chi(\psi')^2)_M)\otimes\psi'.$$
Then, for every $\lambda>0$, the newspace decomposes as the direct sum, over
representatives of $S_\chi/\sim$, of
$A_\lambda^{\min}((\chi\psi^2)_M)\otimes\psi$, and
$$\operatorname{Tr}(T_n\mid A_\lambda^{\mathrm{new}}(\chi))
=\sum_{(M,\psi)\in S_\chi/\sim}\psi(n)
\operatorname{Tr}(T_n\mid A_\lambda^{\min}((\chi\psi^2)_M))\qquad(n\in\{1,-1\}).$$
For a character $\eta$ with conductor dividing $M$, $\eta_M$ denotes the same
character viewed modulo $M$; $\operatorname{lcm}$ is least common multiple, and
$S_\chi/\sim$ denotes the set of equivalence classes. A Dirichlet character is
primitive when its modulus equals its conductor.

## Statement references

[A. Booker, M. Lee, and A. Strömbergsson, *Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture*](https://arxiv.org/pdf/1803.06016v2)

[A. Booker and A. Strömbergsson, *Numerical Computations with the Trace Formula and the Selberg Eigenvalue Conjecture*](https://www.degruyterbrill.com/document/doi/10.1515/CRELLE.2007.047/pdf)

## Proof status

The source proves the direct-sum and trace identities using local conductor
formulas, strong multiplicity one, and the explicit arbitrary-conductor trace
formula. The local reconstruction of those classification and multiplicity
steps is not supplied here. This theorem remains escalated together with its
explicit-trace-formula supplier.
