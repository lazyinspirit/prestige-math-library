---
id: ex-norm-attaining-functionals-on-a-hilbert-space
kind: example
title: Norm-attaining functionals on a Hilbert space
status: published
origin: pipeline
deps: [def-inner-product-space, def-inner-product-norm,
       cor-triangle-inequality-for-inner-product-norm, def-banach-space,
       def-dual-space-of-a-normed-space,
       thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces,
       thm-infimum-property, lem-inf-epsilon,
       cor-archimedean-reciprocal,
       lem-closed-subspace-of-a-banach-space-is-banach,
       def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
      locator: "Definition 1.41 and Theorems 1.43–1.44, printed pp. 39–41"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Riesz-representation example, printed p. 135"
---

## Statement

Assume the Axiom of Countable Choice.  Let $H$ be a real or complex Hilbert
space, meaning an inner product space complete for its induced norm.  Every
bounded linear functional $f\in H^*$ attains its norm on the closed unit ball.
More precisely, if $f\ne0$, then there is a unique $y\in H\setminus\{0\}$ such
that

$$f(x)=\langle x,y\rangle\qquad(x\in H),$$

and $f$ attains its norm at $y/\|y\|$.  The zero functional is represented by
$y=0$ and attains its norm at every point of the closed unit ball.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice $\mathrm{AC}_\omega$, a real or complex Hilbert space $H$, and a bounded linear functional $f\in H^*$.

[F1] The inner product is linear in its first variable, conjugate-linear in its second, conjugate symmetric, and positive definite ([[def-inner-product-space]]).  It induces the norm $\|x\|=\sqrt{\langle x,x\rangle}$ ([[def-inner-product-norm]]), which is definite, homogeneous, and satisfies the triangle inequality ([[cor-triangle-inequality-for-inner-product-norm]]).

[F2] Completeness for the norm metric makes $H$ a Banach space ([[def-banach-space]]).  The dual $H^*$ consists of bounded scalar-linear functionals and has norm $\|f\|=\sup_{\|x\|\le1}|f(x)|$ ([[def-dual-space-of-a-normed-space]]).  Consequently $|f(x)|\le\|f\|\|x\|$ for every $x\in H$.

[F3] Every nonempty real set bounded below has an infimum, and if $d$ is that infimum then for every $\eta>0$ the set contains a point smaller than $d+\eta$ ([[thm-infimum-property]], [[lem-inf-epsilon]]).

[F4] For every positive real $\eta$ some reciprocal $1/n$ is smaller than $\eta$ ([[cor-archimedean-reciprocal]]).

[F5] A closed linear subspace of a Banach space is Banach ([[lem-closed-subspace-of-a-banach-space-is-banach]]).

[F6] Countable Choice selects one element from every member of an $\mathbb N$-indexed family of nonempty sets ([[def-countable-choice]]).  It is used below only to select the countable sequence of approximate minimizers.

[F7] Cauchy–Schwarz gives $|\langle x,y\rangle|\le\|x\|\|y\|$ in either scalar field ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

**Proof technique:** Construct the Riesz vector as the shortest point of an affine hyperplane, proving existence of that point from a countably chosen minimizing sequence and the parallelogram identity.

1.1 If $f=0$, take $y=0$.  Then $f(x)=\langle x,0\rangle$ and $\|f\|=0=|f(x)|$ for every $x$ in the closed unit ball, including $x=0$ when $H=\{0\}$.  Hence assume from now on that $f\ne0$; in particular $H\ne\{0\}$ and $\|f\|>0$. [F1, F2]

1.2 Choose $w\in H$ with $f(w)\ne0$ and put $v=w/f(w)$, so $f(v)=1$.  Let $M=\ker f$.  It is a linear subspace, and the following estimate proves that it is closed and hence Banach. [F1, F2, F5]

Indeed, if $x\notin M$, then

$$r=\frac{|f(x)|}{2\|f\|}>0,$$

and $\|h-x\|<r$ implies

$$|f(h)|\ge |f(x)|-|f(h-x)|>|f(x)|-\|f\|r=\frac{|f(x)|}{2}>0.$$

Thus the open ball $B(x,r)$ misses $M$, so the complement of $M$ is open. By [F5], $M$ is therefore a Banach space with the restricted norm. [F1, F2, F5]

2.1 The set $D=\{\|v-u\|:u\in M\}$ is nonempty (take $u=0$) and bounded below by $0$, so [F3] gives $d=\inf D$; the functional estimate below also proves that this infimum is positive. [step 1.2, F2, F3]

For every $u\in M$,

$$1=|f(v-u)|\le\|f\|\,\|v-u\|,$$

and hence $d\ge1/\|f\|>0$. [step 1.2, F2, F3]

3.1 For each natural $n$, define the following set of approximate minimizers and use Countable Choice to select from all of them. [step 2.1, F3, F6]

$$A_n=\left\{u\in M:\|v-u\|<d+\frac1{n+1}\right\}.$$

Each $A_n$ is nonempty by [F3].  Apply $\mathrm{AC}_\omega$ once to this family and choose $m_n\in A_n$ for every $n$.  Thus, with $r_n=\|v-m_n\|$,

$$d\le r_n<d+\frac1{n+1}.$$

This is the sole use of choice in the proof. [F3, F6]

4.1 Put $a_n=v-m_n$.  Expanding squared norms and using that the kernel contains midpoints gives the estimate below. [step 2.1, step 3.1, F1]

$$\|a_n-a_k\|^2+\|a_n+a_k\|^2=2\|a_n\|^2+2\|a_k\|^2.$$

Since $(m_n+m_k)/2\in M$, the definition of $d$ gives $\|(a_n+a_k)/2\|\ge d$.  Therefore

$$\|m_n-m_k\|^2\le2r_n^2+2r_k^2-4d^2.\tag{1}$$

This is the estimate used below. [step 2.1, step 3.1, F1]

5.1 The sequence $(m_n)$ is Cauchy by the following explicit use of the reciprocal bound in the estimate from step 4.1. [step 3.1, step 4.1, F4]

Given $\varepsilon>0$, set

$$\eta=\min\left\{1,\frac{\varepsilon^2}{8d+4}\right\}>0.$$

By [F4], choose $N$ so that $1/(N+1)<\eta$.  For $n,k\ge N$, step 3.1 and the eventual monotonicity of reciprocals give $r_n,r_k<d+\eta$.  Using $\eta\le1$ in (1),

$$\|m_n-m_k\|^2 <4(d+\eta)^2-4d^2 =8d\eta+4\eta^2 \le(8d+4)\eta \le\varepsilon^2.$$

Both sides before squaring are nonnegative, so $\|m_n-m_k\|<\varepsilon$. [step 3.1, step 4.1, F4]

6.1 Since $M$ is Banach, $m_n\to m$ for some $m\in M$; the minimizing bounds and triangle inequality show that this limit realizes the infimum. [step 1.2, step 2.1, step 3.1, step 5.1, F1, F4, F5]

The triangle inequality gives

$$d\le\|v-m\|\le\|v-m_n\|+\|m_n-m\|.$$

Given $\varepsilon>0$, step 3.1, [F4], and convergence let us make the two terms on the right smaller than $d+\varepsilon/2$ and $\varepsilon/2$, respectively.  Thus $\|v-m\|<d+\varepsilon$ for every $\varepsilon>0$, while $d$ is a lower bound, so $\|v-m\|=d$. [step 1.2, step 2.1, step 3.1, step 5.1, F1, F4, F5]

7.1 Set $z=v-m$.  Then $f(z)=1$, and $z\ne0$ because $\|z\|=d>0$; real variations, and then the $iu$ variation over the complex field, prove that $z$ is orthogonal to the kernel. [step 2.1, step 6.1, F1]

For $u\in M$ and $t\in\mathbb R$, minimality of $m$ and $m+tu\in M$ give

$$\|z-tu\|^2-\|z\|^2 =t^2\|u\|^2-2t\operatorname{Re}\langle z,u\rangle\ge0.\tag{2}$$

If $\operatorname{Re}\langle z,u\rangle\ne0$, then $u\ne0$ and taking $t=\operatorname{Re}\langle z,u\rangle/\|u\|^2$ makes the right side of (2) negative.  Hence $\operatorname{Re}\langle z,u\rangle=0$.  Over $\mathbb C$, apply the same conclusion to $iu\in M$; the linear-first convention gives $\langle z,iu\rangle=-i\langle z,u\rangle$, whose real part is $\operatorname{Im}\langle z,u\rangle$.  Thus in either scalar field $\langle z,u\rangle=0$ for every $u\in M$. [step 2.1, step 6.1, F1]

8.1 For arbitrary $x\in H$, subtracting $f(x)z$ puts the remainder in the kernel and yields the unique representing vector. [step 7.1, F1]

Indeed, the vector $u=x-f(x)z$ lies in $M$.  Step 7.1 and conjugate symmetry give $\langle u,z\rangle=0$, so

$$\langle x,z\rangle=f(x)\|z\|^2.$$

Consequently, with $y=z/\|z\|^2$,

$$f(x)=\langle x,y\rangle\qquad(x\in H).$$

If another vector $y'$ represented $f$, then $\langle x,y-y'\rangle=0$ for all $x$; choosing $x=y-y'$ and using positive definiteness gives $y=y'$. [step 7.1, F1]

9.1 Cauchy–Schwarz supplies the upper bound, and evaluation at the normalized representing vector supplies equality and norm attainment. [step 1.1, step 8.1, F1, F2, F7]

By [F7], $|f(x)|\le\|x\|\|y\|$, so $\|f\|\le\|y\|$.  Conversely the unit vector $x_0=y/\|y\|$ satisfies

$$f(x_0)=\left\langle\frac{y}{\|y\|},y\right\rangle=\|y\|,$$

where the last number is positive real.  Thus $\|f\|=\|y\|=|f(x_0)|$, and $f$ attains its norm at $x_0$.  Together with the zero case in step 1.1, this proves every clause, including both scalar fields and the zero Hilbert space. [step 1.1, step 8.1, F1, F2, F7] ∎

## Remarks

The construction is a local proof of the Riesz representation needed for this example; it does not cite the later Hilbert-space geometry page.  The argument is choice-free except for the one $\mathbb N$-indexed selection in step 3.1, which is why the statement explicitly assumes $\mathrm{AC}_\omega$.
