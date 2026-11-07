---
id: lem-geometric-progression-exponential-sum
kind: lemma
title: "Geometric Progression Bound and Denominator Control"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-exponential-character-e
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - lem-sine-chord-and-lipschitz-bounds
  - def-finite-sum-in-a-commutative-monoid
  - lem-complex-conjugation-and-modulus-laws
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H. W. E. Elkies, Math 229, Exponential sums II: the Kuzmin and Montgomery-Vaughan estimates"
      url: "https://people.math.harvard.edu/~elkies/M229.09/kmv.pdf"
      locator: "Geometric-progression estimate and denominator identity, complete handout, printed pp. 1-2"
    - title: "H. W. E. Elkies, Math 229, Exponential sums III: the van der Corput inequalities"
      url: "https://people.math.harvard.edu/~elkies/M229.09/vdc.pdf"
      locator: "Opening e(t) convention, complete handout, printed p. 1"
    - title: "Ramdinmawia Vanlalngaia, Hardy's functions of L-series and distribution of primes in arithmetic progressions"
      url: "https://pro.univ-lille.fr/fileadmin/user_upload/pages_pros/gautami_bhowmik/Encadrements/these_RV.pdf"
      locator: "Part I, Chapter 1 §1.10, printed pp. 39-41"
---

## Statement

For all real $s,t$, the character satisfies
$
e(s+t)=e(s)e(t),\qquad |e(t)|=1,\qquad
e(n)=1\ (n\in\mathbb Z),\qquad e(-t)=\overline{e(t)}.
$
For $t\in\mathbb R$, write $\zeta(t):=(1-e(t))^{-1}$ when $t\notin\mathbb Z$.
If $t\in\mathbb Z$ and $M\ge1$ is an integer, then
$
\sum_{j<M}e(jt)=M.
$
If $t\notin\mathbb Z$, then
$
\sum_{j<M}e(jt)=\frac{1-e(Mt)}{1-e(t)},\qquad
\left|\sum_{j<M}e(jt)\right|\le\frac{1}{2\|t\|_{\mathbb T}},
\qquad |1-e(t)|\ge4\|t\|_{\mathbb T}.
$
Moreover, for every integer $m$ and $0<\lambda\le\tfrac12$, the values
$\zeta(t)$ on the strip
$[m+\lambda,m+1-\lambda]$ have real part $\tfrac12$, monotone imaginary
part, and modulus at most $(4\lambda)^{-1}$.

## Statement references

[Elkies, Math 229, “Exponential sums II: the Kuzmin and Montgomery–Vaughan estimates,” complete handout](https://people.math.harvard.edu/~elkies/M229.09/kmv.pdf)

[Elkies, Math 229, “Exponential sums III: the van der Corput inequalities,” complete handout](https://people.math.harvard.edu/~elkies/M229.09/vdc.pdf)

[Vanlalngaia, Chapter 1 §1.10, complete relevant thesis text](https://pro.univ-lille.fr/fileadmin/user_upload/pages_pros/gautami_bhowmik/Encadrements/these_RV.pdf)

## Facts & Assumptions

**Given:** A real $t$, an integer $M\ge1$, and, for the strip estimate,
an integer $m$ and $0<\lambda\le\tfrac12$.

[F1] [[def-exponential-character-e]]:
$e(t)=\exp(2\pi i\,j(t))$ and
$\|t\|_{\mathbb T}=\min(t-\lfloor t\rfloor,\lfloor t\rfloor+1-t)$.

[F2] [[def-complex-exponential]]:
$\exp z$ is the complex power series $\sum_{n=0}^{\infty}z^n/n!$.

[F3] [[thm-complex-exponential-addition-and-real-extension]]:
$\exp(z+w)=\exp z\,\exp w$ for complex $z,w$.

[F4] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]:
$\exp(x+iy)=e^x(\cos y+i\sin y)$, $|\exp(x+iy)|=e^x$, and
$\exp(i\pi)=-1$ for real $x,y$.

[F5] [[lem-sine-chord-and-lipschitz-bounds]]:
$\sin u\ge 2u/\pi$ for $0\le u\le\pi/2$.

[F11] [[lem-complex-conjugation-and-modulus-laws]]:
$\overline{z+w}=\overline z+\overline w$, $\overline{zw}=\overline z\,\overline w$,
$z\overline z=|z|^2$, and modulus is multiplicative.

[F12] [[def-finite-sum-in-a-commutative-monoid]]: each displayed
$\sum_{j<M}$ of complex terms is the finite sum in $(\mathbb C,+,0)$ over
$\{j\in\mathbb Z:0\le j<M\}$; the empty finite sum has value $0$.

## Proof

1.1 By [F2]-[F4], $e(s+t)=e(s)e(t)$, $|e(t)|=1$, and $ e(1)=\exp(2\pi i)=\exp(i\pi+i\pi)=\exp(i\pi)^2=1. $ The defining series in [F2] gives $\exp(0)=1$, hence $e(0)=1$. Induction gives $e(k)=1$ for every nonnegative integer $k$; for a negative integer, $e(k)e(-k)=e(0)=1$ and $e(-k)=1$, so $e(k)=1$ there as well. Thus $e(t+k)=e(t)$ for integer $k$. Also $e(t)\overline{e(t)}=|e(t)|^2=1=e(t)e(-t)$ by [F11], so uniqueness of inverses gives $e(-t)=\overline{e(t)}$. [F2, F3, F4, F11, algebra]

2.1 Put $n=\lfloor t\rfloor$, $\theta=t-n\in[0,1)$, and $d=\min(\theta,1-\theta)=\|t\|_{\mathbb T}\in[0,\tfrac12]$. By step 1.1, $e(t)=e(\theta)$; if $\theta\le\tfrac12$ this is $e(d)$, while if $\theta>\tfrac12$ it is $e(1-d)=\overline{e(d)}$, and [F11] gives $|1-\overline{e(d)}|=|1-e(d)|$. Put $w=\exp(\pi i d)$. By [F2]-[F3], $e(d)=w^2$ and $w^{-1}=\exp(-\pi i d)$; then [F4] gives $ 1-e(d)=w(w^{-1}-w)=-2i\,w\sin(\pi d). $ Since $|w|=1$ and $0\le d\le\tfrac12$, this yields $|1-e(t)|=2\sin(\pi d)\ge4d$ by [F5]. In particular $d=0$ exactly when $t\in\mathbb Z$. [given, F1, F2, F3, F4, F5, F11, step 1.1, algebra]

3.1 If $t\in\mathbb Z$, step 1.1 makes every summand equal to $1$, so the sum is $M$. If $t\notin\mathbb Z$, then $d>0$, and step 2.1 makes $1-e(t)\ne0$. Expanding and cancelling consecutive terms gives $ (1-e(t))\sum_{j<M}e(jt)=1-e(Mt). $ The numerator has modulus at most $2$ by the triangle inequality [F11] and $|e(Mt)|=1$ by step 1.1; dividing and using step 2.1 proves the geometric-series formula and the bound. [given, F1, F2, F11, F12, step 1.1, step 2.1, algebra]

4.1 On the stated strip write $t=m+\theta$, where $\lambda\le\theta\le1-\lambda$, and put $w=\exp(\pi i\theta)$. By [F3]-[F4], $\exp(iu)\exp(-iu)=1$ and $|\exp(iu)|=1$ for every real $u$. Thus [F11] gives $\exp(-iu)=\overline{\exp(iu)}=\cos u-i\sin u$. Factoring as in step 2.1 now gives
$$\zeta(t)=\frac{1}{w(w^{-1}-w)}=\frac{i w^{-1}}{2\sin(\pi\theta)}=\frac12+\frac{i}{2}\frac{\cos(\pi\theta)}{\sin(\pi\theta)}.$$
The denominator is nonzero by step 2.1, and $\|t\|_{\mathbb T}\ge\lambda$; hence $|\zeta(t)|=|1-e(t)|^{-1}\le(4\lambda)^{-1}$.
For every $u\in(0,\pi)$, let $v=\min(u,\pi-u)\in(0,\pi/2]$. By [F3]-[F4] and the conjugation identity just proved,
$$\exp(i(\pi-u))=\exp(i\pi)\exp(-iu)=-\cos u+i\sin u,$$
so $\sin(\pi-u)=\sin u$. Therefore $\sin u=\sin v\ge2v/\pi>0$ by [F5]. In particular $\sin(\pi\theta)>0$ on the strip.
If $\theta_1<\theta_2$ lie in the strip, [F3]-[F4] and $\exp(-iu)=\cos u-i\sin u$ give
$$\sin(\pi(\theta_2-\theta_1))=\sin(\pi\theta_2)\cos(\pi\theta_1)-\cos(\pi\theta_2)\sin(\pi\theta_1).$$
Since $0<\theta_2-\theta_1<1$, the sine on the left is positive by the preceding argument. Dividing by the positive denominator $\sin(\pi\theta_1)\sin(\pi\theta_2)$ shows
$$\frac{\cos(\pi\theta_2)}{\sin(\pi\theta_2)}-\frac{\cos(\pi\theta_1)}{\sin(\pi\theta_1)}=-\frac{\sin(\pi(\theta_2-\theta_1))}{\sin(\pi\theta_1)\sin(\pi\theta_2)}<0.$$
Thus the imaginary part of $\zeta(t)$ is strictly decreasing when the strip is nondegenerate; if $\lambda=\tfrac12$, it is a singleton and monotonicity is immediate. Its real part is $\tfrac12$. Finally, $\sin^2 y+\cos^2 y=1$ follows from [F4] and [F11] applied to $\exp(iy)=\cos y+i\sin y$. [given, F3, F4, F5, F11, F12, step 2.1, algebra] ∎
