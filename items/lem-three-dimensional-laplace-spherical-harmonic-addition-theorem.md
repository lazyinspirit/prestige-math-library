---
id: lem-three-dimensional-laplace-spherical-harmonic-addition-theorem
kind: lemma
title: Three-dimensional Laplace spherical-harmonic addition theorem
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-three-dimensional-spherical-harmonic-space]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Michael O’Neil, Integral Equations and Fast Algorithms, complete course lecture notes (2017)"
      url: "https://cims.nyu.edu/~oneil/courses/fa17-math2011/int_eq_notes_2017.pdf"
    - title: "James Demmel, Fast Hierarchical Methods for the N-body Problem, Part 2, CS267 Lecture 25 (1996)"
      url: "https://people.eecs.berkeley.edu/~demmel/cs267/lecture27/lecture27.html"
---

## Statement

For every integer $\ell\ge0$, the space $\mathcal H_\ell$ of [[def-three-dimensional-spherical-harmonic-space]] has dimension $2\ell+1$. For any orthonormal basis $\{Y_{\ell m}:-\ell\le m\le\ell\}$, there is a basis-independent normalized zonal polynomial $P_\ell$ such that
$$\sum_{m=-\ell}^{\ell}Y_{\ell m}(\omega)\overline{Y_{\ell m}(\omega')}=\frac{2\ell+1}{4\pi}P_\ell(\omega\cdot\omega'),\qquad P_\ell(1)=1.$$
It obeys $|P_\ell(t)|\le1$ for $-1\le t\le1$ and the generating identity
$$\frac1{\sqrt{1-2rt+r^2}}=\sum_{\ell=0}^{\infty}r^\ell P_\ell(t),\qquad -1\le t\le1,\quad 0\le r<1.$$

## Facts & Assumptions

**Given:** The unit sphere, surface measure, inner product, and homogeneous harmonic polynomial spaces of [[def-three-dimensional-spherical-harmonic-space]].

[F1] [[def-three-dimensional-spherical-harmonic-space]]: $\mathcal H_\ell$ consists of restrictions of homogeneous degree-$\ell$ polynomials annihilated by the three-dimensional Laplacian, with inner product $\int_{\mathbb S^2}f\overline g\,dS$ and total sphere area $4\pi$.

## Proof

1.1 Let $\mathcal P_\ell$ be the homogeneous degree-$\ell$ polynomials in three variables; it has $\binom{\ell+2}{2}$ monomials. For a homogeneous polynomial $g$ of degree $d$, direct differentiation and Euler's identity give $\Delta(|x|^{2s}g)=2s(2d+2s+1)|x|^{2s-2}g+|x|^{2s}\Delta g$. If $\ell\ge2$, put $n=\ell-2$, $J=\lfloor n/2\rfloor$, $A_j=2(j+1)(2n-2j+3)$, $c_0=1/A_0$, and $c_j=-c_{j-1}/A_j$ for $1\le j\le J$. For $f\in\mathcal P_n$, the degree-$\ell$ polynomial $q=\sum_{j=0}^Jc_j|x|^{2(j+1)}\Delta^jf$ satisfies $\Delta q=f$: the coefficients of $|x|^{2j}\Delta^jf$ telescope by $c_0A_0=1$ and $c_jA_j+c_{j-1}=0$, and $\Delta^{J+1}f=0$. Hence $\Delta:\mathcal P_\ell\to\mathcal P_{\ell-2}$ is onto; for $\ell=0,1$ the target is zero. [given, F1, algebra]

2.1 Restriction of a homogeneous polynomial to $\mathbb S^2$ is injective, because homogeneity recovers its value at every nonzero $x$ from its value at $x/|x|$. Rank-nullity therefore gives $\dim\mathcal H_\ell=\binom{\ell+2}{2}-\binom{\ell}{2}=2\ell+1$ for $\ell\ge2$, and direct counting gives $1$ and $3$ for $\ell=0,1$. Gram-Schmidt on any finite spanning list gives an orthonormal basis; no choice axiom is used. [F1, step 1.1, algebra]

3.1 For an orthonormal basis define $K_\ell(\omega,\omega')=\sum_mY_{\ell m}(\omega)\overline{Y_{\ell m}(\omega')}$. A unitary basis change leaves this sum unchanged, and rotations carry one orthonormal basis of $\mathcal H_\ell$ to another, so $K_\ell$ is rotation-invariant. Thus $K_\ell(\omega,\omega)$ is constant in $\omega$; integrating it over the sphere gives $2\ell+1$, so this constant is $(2\ell+1)/(4\pi)$. [given, F1, step 2.1, algebra]

4.1 Fix $\omega'$. After rotating it to the third coordinate axis, use $w=x_1+ix_2$ and $\bar w=x_1-ix_2$. A rotation sends these to $e^{i\theta}w$ and $e^{-i\theta}\bar w$, so an invariant monomial $w^a\bar w^b x_3^c$ must have $a=b$. The invariant homogeneous polynomials are therefore sums of $(x_1^2+x_2^2)^j x_3^{\ell-2j}$, whose restrictions to the sphere are polynomials $f(t)$ of degree at most $\ell$, with $t=x_3$. The polar-coordinate Laplacian is $\partial_{rr}+2r^{-1}\partial_r+r^{-2}\Delta_{\mathbb S^2}$; applying it to $r^\ell f(\cos\theta)$ gives $\Delta_{\mathbb S^2}f=-\ell(\ell+1)f$. For a zonal $f$, the angular term is $(\sin\theta)^{-1}\partial_\theta(\sin\theta\partial_\theta f)=(1-t^2)f''-2tf'$ by $t=\cos\theta$, so $(1-t^2)f''-2tf'+\ell(\ell+1)f=0$. Writing $f(t)=\sum_{k=0}^{\ell}a_kt^k$ yields $(k+2)(k+1)a_{k+2}+\bigl(\ell(\ell+1)-k(k+1)\bigr)a_k=0$. For $\ell\ge1$, the equation at $k=\ell-1$, using $a_{\ell+1}=0$, gives $2\ell a_{\ell-1}=0$; descending through $k=\ell-3,\ell-5,\ldots$ forces every coefficient of parity opposite to $\ell$ to vanish. For $k=\ell-2,\ell-4,\ldots$, the coefficient $\ell(\ell+1)-k(k+1)$ is positive, so each lower coefficient of parity $\ell$ is determined by the next one. Thus the zonal solution space has dimension at most one (for $\ell=0$ it is the constants). The function $K_\ell(\cdot,\omega')$ is a zonal harmonic, and $K_\ell(\omega',\omega')=(2\ell+1)/(4\pi)>0$, so a nonzero such solution exists. Define $P_\ell(t)=K_\ell(\omega,\omega')/K_\ell(\omega',\omega')$ when $t=\omega\cdot\omega'$. Rotation invariance makes this depend only on $t$, and $P_\ell(1)=1$. The diagonal value in step 3.1 now gives the displayed addition theorem. [F1, step 3.1, algebra]

5.1 Cauchy-Schwarz applied to the finite basis sum gives $|K_\ell(\omega,\omega')|\le\sqrt{K_\ell(\omega,\omega)K_\ell(\omega',\omega')}=(2\ell+1)/(4\pi)$. Dividing by the diagonal constant proves $|P_\ell(t)|\le1$. [step 3.1, step 4.1, algebra]

6.1 Fix $\omega'\in\mathbb S^2$ and let $u(x)=|\omega'-x|^{-1}$ for $|x|<1$. The radial formula $\Delta |x-\omega'|^{-1}=f''(r)+2f'(r)/r=0$ away from $\omega'$ shows $u$ is harmonic in the unit ball. Its homogeneous Taylor term of degree $\ell$ is therefore harmonic, since the homogeneous terms in $\Delta u=0$ of each degree vanish separately; it is also invariant under rotations fixing $\omega'$. By step 4.1 it has the form $b_\ell r^\ell P_\ell(\omega\cdot\omega')$. On the ray $x=r\omega'$, $u(r\omega')=(1-r)^{-1}=\sum_{\ell\ge0}r^\ell$, so coefficient comparison gives $b_\ell=1$. Finally $u(r\omega)=(1-2r(\omega\cdot\omega')+r^2)^{-1/2}$, whose Taylor series in $r$ has radius at least $1$: its possible denominator zeros are $t\pm i\sqrt{1-t^2}$, both of modulus one. This proves the generating identity for $0\le r<1$. [given, F1, step 4.1, algebra] ∎
