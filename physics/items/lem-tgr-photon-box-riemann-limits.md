---
id: lem-tgr-photon-box-riemann-limits
kind: lemma
title: Photon-box energy and singular entropy Riemann limits
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-countable-choice
  - lem-tgr-photon-box-shell-summability
  - lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates
  - thm-polar-coordinates-formula-for-lebesgue-measure
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-tgr-photon-box-shell-summability: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333 Statistical Mechanics I, Lecture 20, photon-gas section"
      url: "https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/368b2180e6efa1417ab336d79b2df6db_MIT8_333F13_Lec20.pdf"
    - title: "University of Mississippi PHY 727 course notes, Lecture 18: The Photon Gas"
      url: "https://www.phy.olemiss.edu/~luca/phys727/Topics/L18_photons.pdf"
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$) as defined in [[def-countable-choice]]. For $r>0$ define $f(r)=r/(e^r-1)$ and $g(r)=f(r)-\log(1-e^{-r})$, with $f(0)=1$. Let $|n|$ be the Euclidean norm on $\mathbb Z^3$. Then, as the dimensionless mesh $d\downarrow0$,
$$d^3\sum_{n\ne0}f(d|n|)\longrightarrow\int_{\mathbb R^3}f(|x|)\,d^3x,$$
$$d^3\sum_{n\ne0}g(d|n|)\longrightarrow\int_{\mathbb R^3}g(|x|)\,d^3x<\infty.$$
Both sums converge absolutely for each $d>0$. In addition, for every continuous compactly supported $\psi:[0,\infty)\to\mathbb R$,
$$d^3\sum_{n\ne0}\psi(d|n|)\longrightarrow4\pi\int_0^\infty r^2\psi(r)\,dr.$$

## Facts & Assumptions

**Given:** Countable Choice and the functions and lattice sums in the Statement, with $d>0$ tending to zero.

[F1] [[lem-tgr-photon-box-shell-summability]]: the shell $|n|_\infty=j$ has $24j^2+2$ points.

[F2] [[thm-polar-coordinates-formula-for-lebesgue-measure]], Statement: under Countable Choice, a nonnegative Borel function on $\mathbb R^3$ has integral $\int_0^\infty\int_{S^2}h(r\omega)r^2\,d\sigma(\omega)\,dr$; radial functions therefore integrate as $4\pi\int_0^\infty h(r)r^2\,dr$.

[F3] [[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]], Statement: the polar surface measure has $\sigma(S^2)=4\pi$.

[F4] [[def-countable-choice]]: the Axiom of Countable Choice $\mathrm{AC}_\omega$ is the exact hypothesis used by [F2] and [F3].

[A1] For radial integrals, extend $g$ to $[0,\infty)$ by setting $g(0):=0$, so $x\mapsto g(|x|)$ is defined on all of $\mathbb R^3$; this point value does not affect its Lebesgue integral. All displayed integrals are Lebesgue integrals. The functions $f,g$ on $(0,\infty)$ and their nonnegative series partial sums below are continuous. With this extension, $x\mapsto f(|x|)$ and $x\mapsto g(|x|)$ are Borel measurable and nonnegative; the other displayed integrands are Borel measurable (and may be signed).

## Proof

1.1 For a continuous compactly supported $h:\mathbb R^3\to\mathbb R$, the cubes $Q_{n,d}=dn+[-d/2,d/2]^3$ tile $\mathbb R^3$ up to boundaries of volume zero. Uniform continuity of $h$ bounds $|d^3\sum_nh(dn)-\int h|$ by the volume of one fixed enlarged support box times the modulus of continuity at $\sqrt3d/2$, which tends to zero. Taking $h(x)=\psi(|x|)$ proves the compactly supported radial lattice limit. To rewrite its integral when $\psi$ is signed, apply [F2] separately to the nonnegative radial functions $h_+(x)=\max(h(x),0)$ and $h_-(x)=\max(-h(x),0)$; both are continuous and compactly supported, so their integrals are finite. Subtracting the resulting identities and using $\sigma(S^2)=4\pi$ from [F3] gives $\int_{\mathbb R^3}h(x)\,d^3x=4\pi\int_0^\infty r^2\psi(r)\,dr$. Omitting $n=0$ changes the sum by $d^3\psi(0)\to0$. [given, F2, F3, F4, algebra]

1.2 For $0<r\le1$, $f(r)\le1$ and $1-e^{-r}\ge r/2$, so $0\le g(r)\le C(1+|\log r|)$. Formulae [F2] and [F3] give the small-ball integral bound because, for $0<\delta\le1$, $\int_0^\delta r^2(1+|\log r|)\,dr=\delta^3(4/9+|\log\delta|/3)$. For the discrete sum with $0<d|n|\le\delta$, put $j=|n|_\infty$; then $dj\le\delta$ and $d|n|\ge dj$. Group the shells by $dj\in(\delta2^{-\ell-1},\delta2^{-\ell}]$. If such a group is nonempty, then $d\le\delta2^{-\ell}$ and its shell indices obey $j\le J_\ell:=\lfloor\delta2^{-\ell}/d\rfloor$. By [F1], the number of lattice points in shells up to $J_\ell$ is $\sum_{j\le J_\ell}(24j^2+2)\le C J_\ell^3\le C(\delta2^{-\ell}/d)^3$. Every point in the selected small-ball subset of this group has $d|n|\ge dj>\delta2^{-\ell-1}$ and $d|n|\le\delta\le1$, so its entropy value is at most $C(1+|\log\delta|+\ell)$. Multiplication by the cell volume $d^3$ bounds this group's contribution by $C\delta^3 2^{-3\ell}(1+|\log\delta|+\ell)$. Summing the convergent geometric series over $\ell\ge0$ gives $C'\delta^3(1+|\log\delta|)$ uniformly in $d$. [given, A1, F1, F2, F3, F4, algebra]

2.1 The function $f$ is continuous at zero since $\lim_{r\downarrow0}r/(e^r-1)=1$, and for $r\ge1$ it is bounded by $C(1+r)e^{-r}$. For $0<d\le1$ and $x\in Q_{n,d}$, $||dn|-|x||\le\sqrt3/2$. Thus, for $R\ge2$, each cube with $|dn|>R$ lies in $|x|>R-\sqrt3/2>1$, and the exponential bound yields $\sum_{|dn|>R}d^3f(d|n|)\le C'\int_{|x|>R-\sqrt3/2}(1+|x|)e^{-|x|}\,d^3x$. The integral tail tends to zero as $R\to\infty$, uniformly in $0<d\le1$. Apply step 1.1 on compact cutoffs and then this uniform tail bound to obtain the asserted $f$ limit and integrability. [given, step 1.1, algebra]

3.1 For each fixed $d>0$, only finitely many lattice points have $d|n|<1$, and there are only finitely many shells with $dj<1$. On every remaining shell, $dj\ge1$, the Euclidean norm satisfies $j\le|n|\le\sqrt3j$, and the exponential bound gives $f(d|n|),g(d|n|)\le C(1+dj)e^{-dj}$. The shell count [F1] therefore bounds the shell contribution by $Cj^2(1+dj)e^{-dj}\le Cj^3(1+dj)e^{-dj}$. The comparison series converges by the ratio test, since the ratio of consecutive terms tends to $e^{-d}<1$. For $r\ge1$, $-\log(1-e^{-r})\le e^{-r}/(1-e^{-r})$, so $g(r)\le C(1+r)e^{-r}$; the cube estimate of step 2.1 then gives uniformly vanishing large-radius tails for the integral and the lattice sum. On each annulus $\delta\le|x|\le R$, $g(|x|)$ is continuous and the compact Riemann-sum argument of step 1.1 applies with a continuous radial cutoff equal to one on that annulus and zero near the origin and outside a larger ball. Letting $\delta\downarrow0$ and $R\to\infty$ using the small-ball bound of step 1.2 and these tail bounds proves the $g$ limit and its finiteness. [given, F1, step 1.1, step 2.1, step 1.2, algebra] ∎
