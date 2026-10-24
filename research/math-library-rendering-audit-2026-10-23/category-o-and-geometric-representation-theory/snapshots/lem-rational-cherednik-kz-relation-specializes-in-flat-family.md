---
id: lem-rational-cherednik-kz-relation-specializes-in-flat-family
kind: lemma
title: "Hecke relations specialize in the generalized-standard family"
deps: [thm-rational-cherednik-pbw-theorem, thm-rational-cherednik-category-o-projective-generator-from-generalized-standards, lem-rational-cherednik-dunkl-localization-and-flat-connection, def-rational-cherednik-kz-functor-and-finite-hecke-algebra]
status: published
dependency_level: 11
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Ginzburg, Guay, Opdam and Rouquier, On the category O for rational Cherednik algebras"
      url: "https://arxiv.org/abs/math/0212036"
      locator: "Sections 2.3–2.6 and 5.3–5.4; complete local proofs below."
    - title: "Etingof and Ma, Lecture Notes on Cherednik Algebras"
      url: "https://arxiv.org/abs/1001.0432"
      locator: "Sections 3.5–3.10 and 6.2, especially Theorems 6.4–6.5."
---

## Statement

For every $n\ge0$ the localized generalized standard family $G_{n,c}$ is a finite-rank trivial vector bundle with flat connection whose matrices depend polynomially on the parameter $c$. Its KZ monodromy matrices depend holomorphically on $c$, and for every finite complex reflection group and every parameter the exact defining meridian polynomials of $\mathcal H_{q(c)}(W)$ annihilate $\operatorname{KZ}(G_{n,c})$. Therefore these polynomials annihilate $\operatorname{KZ}(M)$ for every $M\in\mathcal O_c$. This includes all resonant parameters and makes no claim that resonant meridian monodromy is diagonalizable.

## Facts & Assumptions

**Given:** A finite complex reflection group $W$ on $\mathfrak h$ and an arbitrary conjugacy-invariant parameter $c$, with the current minus-sign Cherednik normalization.

[F1] PBW and localized Dunkl derivations give the fixed generalized-standard vector space and connection $\partial_y=y+\sum_s c_s\alpha_s(y)\alpha_s^{-1}(1-s)$; KZ is exact and the meridian roots and endpoint action are fixed ([[thm-rational-cherednik-pbw-theorem]], [[lem-rational-cherednik-dunkl-localization-and-flat-connection]], [[def-rational-cherednik-kz-functor-and-finite-hecke-algebra]]).

[F2] For fixed $c$, a uniform Euler bound gives a projective generator inside a sufficiently large generalized standard, and standard extensions can be nontrivial only across positive integral Euler differences ([[thm-rational-cherednik-category-o-projective-generator-from-generalized-standards]]).

## Proof

1.1 Write $X=S(\mathfrak h^*)$, $Y=S(\mathfrak h)$, and $B=Y\rtimes\mathbb CW$. Let $\mathbb C^m$ be the parameter space of conjugacy-invariant $c$, and fix $n$. Use the same finite vector space $U_n=\mathbb CW\otimes(Y/Y_{>n})$ at every parameter. PBW identifies $G_{n,c}=H_{1,c}\otimes_B U_n$ with $X\otimes U_n$, with all commutation matrices polynomial in $c$. This holds over $\mathbb C[c]$ as well: the overlap and Jacobi proof of PBW consists of polynomial identities and uses no division; alternatively a polynomial relation among normal words vanishing in the universal quotient specializes at each $c$, where pointwise PBW forces every coefficient to vanish. Hence the normal words are independent over $\mathbb C[c]$. The family is therefore free over the parameter ring and finite free over $X[c]$. [F1, F2, algebra]

2.1 Let $Y_y$ be multiplication by $y$ on $U_n$, and let $s$ act diagonally on it. The localized derivation from [F1] is $\partial_y=y+\sum_s c_s\alpha_s(y)\alpha_s^{-1}(1-s)$. Its action on a constant generator $1\otimes u$ has matrix $\Gamma_y(c,z)=Y_y+\sum_s c_s\alpha_s(y)\alpha_s(z)^{-1}(1-s|_{U_n})$; on nonconstant sections the ordinary derivative of the coefficient is added. These are finite matrices rational in $z$ and polynomial in $c$, without poles on fixed paths in $\mathfrak h_{\mathrm{reg}}$. Flatness is the localized Cherednik relation. On a normal disk to a generic point of a reflecting hyperplane $H$, the residue is $R_H(c)=\sum_{s\text{ fixes }H}c_s(1-s|_{U_n})$, diagonal in the fixed cyclic $W_H$-decomposition; the term $Y_y$ is holomorphic. The horizontal equation has residue $A_0(c)=-R_H(c)$ in the stated convention. [F1, F2, step 1.1, algebra]

3.1 We prove an actual nonresonant gauge normal form. For $zU'=A(z)U$ with $A(z)=\sum_{j\ge0}A_jz^j$ holomorphic, assume $A_0$ is diagonalizable and no difference of two of its eigenvalues is a nonzero integer. A normalized gauge $G(z)=I+\sum_{r\ge1}G_rz^r$ solving $zG'=A(z)G-GA_0$ must satisfy $(rI-\operatorname{ad}A_0)G_r=\sum_{j=1}^rA_jG_{r-j}$. Each operator is invertible. Its inverse norm is at most $C/r$: for $r>2\|\operatorname{ad}A_0\|$, the Neumann series gives $2/r$, and increasing $C$ handles the finitely many remaining indices. If $\|A_j\|\le MR^{-j}$, the recursion gives $\|G_r\|\le (CM/r)\sum_{j=1}^rR^{-j}\|G_{r-j}\|$. The scalar majorant with $g_0\ge\|I\|$ solves $g'(z)=CM(R-z)^{-1}g(z)$, so $g(z)=g_0(1-z/R)^{-CM}$ has positive Taylor coefficients dominating the matrix series. Thus $G$ converges and is invertible near zero. It gauges the equation to $zV'=A_0V$, proving analytic conjugacy rather than merely equality of characteristic polynomials. [F1, F2, step 2.1, algebra]

4.1 The fractional-meridian endpoint is respected by this gauge. Choose the normal disk at a generic point fixed by $W_H$. Its cyclic action rotates the coordinate; the endpoint acts on the fiber by the fixed matrix $g=s_H$, which commutes with $A_0$. Equivariance of the connection transforms the normalized gauge to another solution of the same equation with constant term $I$. Uniqueness of the recursion in step 3.1 forces the equivariance identity for $G$. Hence endpoint-adjusted transport through angle $\vartheta=2\pi/e_H$ is genuinely conjugate to $g\exp(i\vartheta A_0)$. On the $j$th cyclic eigenspace this is the defined scalar $\mu_{H,j}$. The commuting matrices $g,A_0$ are simultaneously diagonal on that decomposition, so $\prod_j(T_H-\mu_{H,j})$ annihilates this nonresonant monodromy, even if two resulting roots coincide. Parallel transport along a basepoint path conjugates the operator and preserves this relation. No diagonalizability assertion is made at resonant parameters. [F1, F2, step 3.1, algebra]

5.1 Exclude the countable collection of conditions $a_E(c)-a_F(c)\in\mathbb Z_{>0}$ and the nonzero integral differences of normal residue eigenvalues at all hyperplanes. Every relevant difference is linear in $c$ and is zero at $c=0$, so each nonzero-integer condition is a proper affine hyperplane or empty. Their complement is dense in every parameter neighborhood: choose a line with direction avoiding the finitely many nonzero linear forms; each excluded condition removes at most one point from that line. The zero-dimensional parameter space or the absence of such forms gives no excluded condition. Steps 3.1–4.1 therefore apply on a dense set. For clarity, category $\mathcal O_c$ is also semisimple there: a proper submodule of a standard with irreducible label has a singular simple label $F$ at degree $d>0$, forcing $a_F-a_E=d$, which is excluded. Such standards are therefore simple. The standard-extension criterion in [F2] makes Ext$^1$ between these standards vanish, and the finite-length result then splits every object into irreducible standards. A standard induced from a reducible finite-dimensional $W$-module is the direct sum of the standards for its irreducible constituents. The generic relation for $G_{n,c}$ follows already from step 4.1 applied directly to $U_n$; this argument does not require the special-parameter standard-factorization assertion. [F1, F2, step 4.1, algebra, step 3.1]

6.1 The monodromy matrices of this fixed family are holomorphic at every parameter. Choose fixed piecewise smooth compact paths in $\mathfrak h_{\mathrm{reg}}$ for the based meridians. Their horizontal ODE coefficients are continuous on each segment and holomorphic in $c$. Picard iteration is a normally convergent sum of iterated integrals on every compact parameter set: its $r$th term has norm at most $L^r/r!$, where $L$ bounds the integral of the coefficient norm there. Each term is holomorphic, so the sum is holomorphic in $c$; reversed paths give holomorphic inverses, and the endpoint matrix is constant. Each root $\mu_{H,j}(c)$ is an exponential of a linear function and is entire. Thus the matrix $Q_H(c)=\prod_j(T_H(c)-\mu_{H,j}(c)I)$ is holomorphic everywhere. It vanishes on the dense set from step 5.1, so continuity gives $Q_H(c)=0$ for all $c$. This is an exact polynomial identity on every $\operatorname{KZ}(G_{n,c})$; it does not infer a relation on an extension merely from its subquotients. [F1, F2, step 5.1, algebra]

7.1 For fixed $c$, choose $n$ by the uniform Euler bound in [F2]. The projective generator is a direct summand of $G_{n,c}$, and every object $M$ is therefore a quotient of a finite sum of these generalized standards. Exact KZ sends that surjection to a surjection of braid representations. The relation proved in step 6.1 passes to finite sums and quotients, so all the defining Hecke polynomials annihilate $\operatorname{KZ}(M)$. This proves arbitrary-object factorization for every finite complex reflection group and every $c$. Taking $M=\Delta(E)$ also proves standard factorization, with no inference of diagonalizability at a resonant parameter. [F1, F2, step 6.1, algebra] ∎
