---
id: lem-meromorphic-jensen-formula-with-centre-divisor
kind: lemma
title: "Meromorphic Jensen identity with a zero or pole at the centre"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-poisson-jensen-formula-meromorphic-function, def-nevanlinna-counting-proximity-and-characteristic, thm-nevanlinna-quantities-well-defined, thm-laurent-expansion-annulus, thm-zero-order-factorization-holomorphic-function, thm-pole-characterizations, thm-poles-meromorphic-function-are-discrete-and-countable, thm-identity-theorem-holomorphic-functions, def-meromorphic-function-complex-domain]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §1"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions, Ch. 1 §2"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
---

## Statement

Let $a\in\mathbb C$ and let $f$ be nonconstant meromorphic. Near $0$, write
$f(z)-a=c_a z^{k_a}+\text{higher Laurent terms}$ with $c_a\ne0$ and
$k_a\in\mathbb Z$. Then for every $r>0$,

$$
M_r\log|f-a|=\log|c_a|+N(r,a;f)-N(r,\infty;f),
$$

where $M_r$ is the angular mean on $|z|=r$. If that circle contains a zero or
pole of $f-a$, its mean is interpreted by its continuous radial limit.

## Facts & Assumptions

**Given:** A nonconstant meromorphic $f$ on $\mathbb C$ and a finite target $a$.

[F1] Poisson–Jensen expresses the logarithm as the boundary Poisson mean minus zero Green terms plus pole Green terms ([[thm-poisson-jensen-formula-meromorphic-function]]).

[F2] The integrated count is $N(r,a;f)=n(0,a;f)\log r+\int_0^r(n(t,a;f)-n(0,a;f))\,dt/t$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F3] A function holomorphic on a punctured annulus has a locally uniformly convergent Laurent expansion there ([[thm-laurent-expansion-annulus]]).

[F4] The divisor counts are finite on bounded discs, and $N$ and chordal proximities are finite and continuous at every positive radius ([[thm-nevanlinna-quantities-well-defined]]).

[F5] Chordal distance and its logarithmic proximity are given by the normalized formulas in the definition ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F6] An infinite-order zero occurs exactly when the function vanishes on a neighborhood; a finite-order zero has a local factorization ([[thm-zero-order-factorization-holomorphic-function]]).

[F7] A pole has a finite Laurent principal part, and its order is the largest negative exponent ([[thm-pole-characterizations]]).

[F8] The pole set is closed and discrete ([[thm-poles-meromorphic-function-are-discrete-and-countable]]).

[F9] Holomorphic functions on a complex domain that agree on a set with an accumulation point agree everywhere ([[thm-identity-theorem-holomorphic-functions]]).

[F10] A meromorphic function is holomorphic away from its pole set ([[def-meromorphic-function-complex-domain]]).

## Proof

**Proof technique:** apply Poisson–Jensen to $f-a$, isolate the central Green term, and identify the remaining divisor sums with $N(r,a)-N(r,\infty)$.

1.1 Fix a radius $r$ with no zero or pole of $f-a$ on its boundary, and write $m_0=n(0,a;f)$ and $\nu_0=n(0,\infty;f)$. Applying [F1] to $f-a$ gives its boundary Poisson mean, a negative sum over $a$-points, and a positive sum over poles; the central Green factor is $G_r(z,0)=\log(r/|z|)$. [F1, given]

1.2 Let $P$ be the pole set and $\Omega=\mathbb C\setminus P$. By [F8] and [F10], $\Omega$ is open and $f$ is holomorphic there; it is nonempty because a discrete pole set cannot equal $\mathbb C$. For any two points of $\Omega$, take a bounded closed disc containing a polygonal path between them in its interior. This disc meets $P$ in finitely many points because $P$ is closed and discrete. Choose small disjoint discs around those finitely many poles, avoiding the path endpoints and containing no other poles; replacing portions of the polygonal path through these discs by arcs in the punctured discs gives a path in $\Omega$. Thus $\Omega$ is connected. [F8, F10, given]

1.3 If $f$ has a pole at $0$ of order $\nu_0$, [F3] gives a Laurent expansion on a punctured disc and [F7] makes its first nonzero exponent $-\nu_0$; subtracting finite $a$ does not change that leading exponent. [F3, F7, given]

1.4 If $f(0)$ is finite and not equal to $a$, then $f-a$ is nonzero at $0$, so its leading exponent is $k_a=0=m_0-\nu_0$. [given, algebra]

2.1 If $f(0)=a$ and the zero of $f-a$ at $0$ had infinite order, [F6] would make $f-a$ vanish near $0$. By [F9] on the connected domain from step 1.2, it would then vanish on all of $\Omega$; if $P$ is empty this makes $f$ constant, while if $P$ is nonempty it contradicts [F7] at each pole. Thus the order is finite, and [F6] gives $f-a=z^{m_0}h$ with $h(0)\ne0$, so its leading exponent is $k_a=m_0$. [F6, F7, F9, step 1.2, given]

3.1 The three cases in steps 1.3, 1.4, and 2.1 show that $f(z)-a=c_a z^{k_a}(1+o(1))$ and $k_a=m_0-\nu_0$; hence $\log|f(z)-a|=\log|c_a|+k_a\log|z|+o(1)$. [step 2.1, step 1.3, step 1.4, algebra]

4.1 Let $z\to0$ in step 1.1 through nondivisor points. The boundary Poisson mean tends to $M_r\log|f-a|$; every noncentral Green term tends to $\log(r/|b|)$ or $\log(r/|p|)$; and the central contribution is $-k_a(\log r-\log|z|)$. Comparing with step 3.1 and cancelling $k_a\log|z|$ yields $M_r\log|f-a|=\log|c_a|+k_a\log r+\sum_{0<|b|<r}m_b\log(r/|b|)-\sum_{0<|p|<r}\nu_p\log(r/|p|)$. [F1, step 1.1, step 3.1, algebra]

4.2 By [F2] and the finite divisor lists in [F4], integrating each counting step gives $N(r,a;f)=m_0\log r+\sum_{0<|b|<r}m_b\log(r/|b|)$ and $N(r,\infty;f)=\nu_0\log r+\sum_{0<|p|<r}\nu_p\log(r/|p|)$. Since $k_a=m_0-\nu_0$, step 3.1 is exactly $\log|c_a|+N(r,a;f)-N(r,\infty;f)$. [F2, F4, step 3.1, algebra]

5.1 For any radius meeting a divisor, the pointwise chordal identity gives $M_r\log|f-a|=m(r,\infty;f)+\tfrac12\log(1+|a|^2)-m(r,a;f)$. By [F4]–[F5], this mean is finite and continuous in $r$; the two counting functions are continuous as well. Taking regular radii to the divisor radius in step 4.2 proves the same identity there by continuous radial limit. [F4, F5, step 4.2] ∎
