---
id: lem-csm-frontier-periodic-laplacian-spectrum
kind: lemma
title: Fourier spectrum and positivity of the periodic lattice Laplacian
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-integers-modulo-n
  - thm-standard-representatives-modulo-n
  - def-addition-and-multiplication-modulo-n
  - thm-integers-modulo-n-basic-algebra
  - lem-orthogonality-of-characters-on-a-finite-cyclic-group
  - lem-finite-sum-reindexing-and-fubini
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - thm-kernel-and-fibres-of-complex-exponential
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - lem-complex-conjugation-and-modulus-laws
  - thm-sine-and-cosine-addition-formulas
  - thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions
dependency_roles:
  def-integers-modulo-n: mathematical-premise
  thm-standard-representatives-modulo-n: mathematical-premise
  def-addition-and-multiplication-modulo-n: mathematical-premise
  thm-integers-modulo-n-basic-algebra: mathematical-premise
  lem-orthogonality-of-characters-on-a-finite-cyclic-group: mathematical-premise
  lem-finite-sum-reindexing-and-fubini: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-kernel-and-fibres-of-complex-exponential: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Sacha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems (A Concrete Mathematical Introduction), complete book PDF
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: Chapter 8, §§8.2–8.3, printed pp. 385–388, finite Gaussian fields and the discrete Laplacian/Green identities.
    - title: David Tong, Statistical Field Theory, complete Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/sft/sft.pdf
      locator: §2.2.2, printed pp. 44–46 / PDF pp. 45–47, Fourier representation of the Gaussian Green kernel.
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $d,L\ge1$ be integers and let $\Lambda_{d,L}:=(\mathbb Z/L\mathbb Z)^d$, where $\mathbb Z/L\mathbb Z$ is the quotient set of integers modulo $L$. Use the quotient addition $[a]_L+[b]_L=[a+b]_L$ and additive inverse $-[a]_L=[-a]_L$, and define these operations coordinatewise on $\Lambda_{d,L}$. For $x\in\Lambda_{d,L}$, write $\widetilde x=(\widetilde x_1,\ldots,\widetilde x_d)\in\{0,\ldots,L-1\}^d$ for its unique coordinate representatives. For $1\le j\le d$, let $e_j\in\Lambda_{d,L}$ have coordinate $[1]_L$ in position $j$ and $[0]_L$ elsewhere. Count the two terms $x+e_j$ and $x-e_j$ separately even when they coincide for $L=1$ or $L=2$.

For a real-valued function $f:\Lambda_{d,L}\to\mathbb R$, define

$$(-\Delta f)(x):=\sum_{j=1}^d\bigl(2f(x)-f(x+e_j)-f(x-e_j)\bigr).$$

For a complex-valued function, use the same formula for $-\Delta$, which is its complex-linear extension. Write $\mathbb C^{\Lambda_{d,L}}$ for the complex-valued functions on $\Lambda_{d,L}$ with pointwise vector operations. For $r=(r_1,\ldots,r_d)\in\{0,\ldots,L-1\}^d$, define the function $\chi_r:\Lambda_{d,L}\to\mathbb C$ by

$$\chi_r(x):=\exp\!\left(\frac{2\pi i}{L}\sum_{j=1}^d r_j\widetilde x_j\right).$$

Use the inner product $\langle f,g\rangle:=L^{-d}\sum_{x\in\Lambda_{d,L}}f(x)\overline{g(x)}$. Identify real functions with coordinate vectors using the lexicographic order on the representatives $\widetilde x$, and let $I_{\Lambda_{d,L}}$ be the identity operator on those functions. A real matrix $A$ is symmetric when $A^{\mathsf T}=A$; a real symmetric matrix is positive semidefinite when $v^{\mathsf T}Av\ge0$ for every real vector $v$, and positive definite when $v^{\mathsf T}Av>0$ for every nonzero real vector $v$. For all $r,s\in\{0,\ldots,L-1\}^d$, the inner products satisfy $\langle\chi_r,\chi_s\rangle=1$ if $r=s$ and $0$ otherwise; every complex-valued function on $\Lambda_{d,L}$ is a unique linear combination of the functions $\chi_r$.

For each $r$, the equation $-\Delta\chi_r=\lambda_r\chi_r$ holds with $\lambda_r:=4\sum_{j=1}^d\sin^2(\pi r_j/L)$; this scalar is the eigenvalue associated with $\chi_r$.

Consequently $-\Delta$ is real symmetric positive semidefinite, and for real $m^2>0$ and $\kappa>0$ the matrix $m^2I_{\Lambda_{d,L}}+\kappa(-\Delta)$ is real symmetric positive definite with eigenvalues $m^2+4\kappa\sum_{j=1}^d\sin^2(\pi r_j/L)>0$.

## Statement references

[[def-integers-modulo-n]]

[[thm-standard-representatives-modulo-n]]

[[def-addition-and-multiplication-modulo-n]]

[[thm-integers-modulo-n-basic-algebra]]

[[lem-orthogonality-of-characters-on-a-finite-cyclic-group]]

[[lem-finite-sum-reindexing-and-fubini]]

[[def-complex-exponential]]

[[thm-complex-exponential-addition-and-real-extension]]

[[thm-kernel-and-fibres-of-complex-exponential]]

[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

[[lem-complex-conjugation-and-modulus-laws]]

[[thm-sine-and-cosine-addition-formulas]]

[[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]

## Facts & Assumptions

**Given:** Integers $d,L\ge1$, the coordinatewise quotient operations, canonical representatives, and discrete Laplacian of the Statement.

[F1] Every class in $\mathbb Z/L\mathbb Z$ has a unique representative in $\{0,\ldots,L-1\}$ ([[def-integers-modulo-n]], [[thm-standard-representatives-modulo-n]]).

[F2] Quotient addition is $[a]_L+[b]_L=[a+b]_L$ and is independent of representatives; $\mathbb Z/L\mathbb Z$ with this operation is an additive abelian group, with inverse $-[a]_L=[-a]_L$ ([[def-addition-and-multiplication-modulo-n]], [[thm-integers-modulo-n-basic-algebra]]).

[F3] For $N\ge1$ and integers $k,\ell$, $\sum_{u=0}^{N-1}e^{2\pi i(k-\ell)u/N}$ is $N$ if $k\equiv\ell\pmod N$ and is $0$ otherwise ([[lem-orthogonality-of-characters-on-a-finite-cyclic-group]]).

[F4] Finite sums over product index sets may be factored and evaluated in either order ([[lem-finite-sum-reindexing-and-fubini]]).

[F5] $\exp(z+w)=\exp z\exp w$ and $\exp z=1$ exactly when $z\in2\pi i\mathbb Z$ ([[def-complex-exponential]], [[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]]).

[F6] For real $t$, $e^{it}=\cos t+i\sin t$ and $\cos(2t)=\cos^2t-\sin^2t$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-sine-and-cosine-addition-formulas]]).

[F7] For real $t$, $\sin^2t+\cos^2t=1$, $\sin(-t)=-\sin t$, and $\cos(-t)=\cos t$ ([[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]).

[F8] Complex conjugation fixes real numbers and sends $i$ to $-i$ ([[lem-complex-conjugation-and-modulus-laws]]); together with [F6] and [F7], this gives $\overline{e^{it}}=e^{-it}$ for real $t$.

## Proof

1.1 Fix $x\in\Lambda_{d,L}$ and put $a_j=\widetilde x_j$. By [F1]–[F2], the $j$th representative of $x+e_j$ is $a_j+1-L\epsilon_j$, where $\epsilon_j=1$ if $a_j=L-1$ and $0$ otherwise; the $j$th representative of $x-e_j$ is $a_j-1+L\eta_j$, where $\eta_j=1$ if $a_j=0$ and $0$ otherwise. All other representatives are unchanged. Substitution into the definition of $\chi_r$, followed by the exponential addition law and $\exp(2\pi i n)=1$ for integers $n$ from [F5], gives $\chi_r(x+e_j)=e^{2\pi i r_j/L}\chi_r(x)$ and $\chi_r(x-e_j)=e^{-2\pi i r_j/L}\chi_r(x)$. This also holds for $L=1$ and $L=2$. [given, F1, F2, F5, algebra]

1.2 For $r,s\in\{0,\ldots,L-1\}^d$, finite-sum factorization [F4] and the conjugation identity [F8] give $\langle\chi_r,\chi_s\rangle=\prod_{j=1}^d L^{-1}\sum_{u=0}^{L-1}e^{2\pi i(r_j-s_j)u/L}$. By [F1], distinct canonical representatives are incongruent modulo $L$, so [F3] makes each factor $1$ when $r_j=s_j$ and $0$ otherwise. This is the inner-product identity stated above. [F1, F3, F4, F8, algebra]

2.1 Substituting the shift identities of step 1.1 into $-\Delta$ gives $-\Delta\chi_r=\sum_{j=1}^d(2-e^{2\pi i r_j/L}-e^{-2\pi i r_j/L})\chi_r$. By [F6]–[F7], each coefficient equals $2-2\cos(2\pi r_j/L)=4\sin^2(\pi r_j/L)$, proving the eigenvalue formula. [F6, F7, step 1.1, algebra]

2.2 For any $f:\Lambda_{d,L}\to\mathbb C$, set $\widehat f(r)=L^{-d}\sum_{y\in\Lambda_{d,L}}f(y)\overline{\chi_r(y)}$. By [F4] and [F8], the frequency sum factors as $\sum_r\chi_r(x)\overline{\chi_r(y)}=\prod_{j=1}^d\sum_{r_j=0}^{L-1}e^{2\pi i r_j(\widetilde x_j-\widetilde y_j)/L}$. The canonical-representative theorem [F1] and orthogonality [F3] make this product $L^d$ if $x=y$ in $\Lambda_{d,L}$ and $0$ otherwise. Therefore $\sum_r\widehat f(r)\chi_r(x)=L^{-d}\sum_y f(y)\sum_r\chi_r(x)\overline{\chi_r(y)}=f(x)$ for every $x$. If a linear combination $\sum_r c_r\chi_r$ vanishes, taking its inner product with $\chi_s$ and applying step 1.2 gives $c_s=0$ for each $s$, so the expansion is unique. [F1, F3, F4, F8, step 1.2, algebra]

3.1 For every real $f$, the translations $x\mapsto x+e_j$ are bijections with inverses $x\mapsto x-e_j$, so reindexing the finite sums [F4] gives $\sum_xf(x)(-\Delta f)(x)=\sum_{j=1}^d\sum_x(f(x+e_j)-f(x))^2\ge0$. Thus $-\Delta$ is positive semidefinite; its matrix is symmetric because every shift term is paired with its inverse shift. For nonzero $f$, $$f^{\mathsf T}(m^2I+\kappa(-\Delta))f=m^2\sum_xf(x)^2+\kappa\sum_{j=1}^d\sum_x(f(x+e_j)-f(x))^2>0,$$ since $m^2>0$ and $\kappa>0$. By steps 2.1 and 2.2, the spanning functions $\chi_r$ satisfy the eigenvalue equations in the Statement, so the combined operator has the displayed eigenvalues. [given, F2, F4, step 2.1, step 2.2, algebra] ∎

