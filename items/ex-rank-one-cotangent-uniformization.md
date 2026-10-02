---
id: ex-rank-one-cotangent-uniformization
kind: example
title: "The rank-one cotangent and its conic"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-trigonometric-and-hyperbolic-functions
  - def-tangent-cotangent-secant-cosecant
  - cor-complex-trigonometric-and-hyperbolic-derivatives
  - thm-complex-sine-and-cosine-zero-sets
  - thm-mittag-leffler-expansion-of-pi-cotangent
  - thm-chain-rule-for-complex-derivatives
  - thm-algebra-of-complex-derivatives
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - thm-kernel-and-fibres-of-complex-exponential
  - thm-complex-exponential-surjects-onto-the-punctured-plane
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.4, printed pp. 156-157"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213a/course/course.pdf
      locator: "Ch. 5 §5.4 'Aside: conics and singly-periodic functions', Theorems 5.26-5.27: pi cot(pi z) uniformizes C/Z onto a conic minus two points."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Put

$$P(z):=\pi\cot(\pi z)\qquad (z\in\mathbb C\setminus\mathbb Z),\qquad q:=e^{2\pi iz}.$$

Then:

1. the map $z\mapsto q$ induces a bijection $\mathbb C/\mathbb Z\to
   \mathbb C^\ast=\mathbb C\setminus\{0\}$, and
   $P(z)=\pi i\,(q+1)/(q-1)$ for every $z\in\mathbb C\setminus\mathbb Z$;
2. $P$ is holomorphic on $\mathbb C\setminus\mathbb Z$, its poles are exactly the
   integers and they are simple of residue $1$, its period group is exactly
   $\mathbb Z$, its principal part at $0$ is $1/z$, and
   $$-P'(z)=P(z)^2+\pi^2\qquad(z\notin\mathbb Z);$$
3. writing $x=P(z)$ and $y=-P'(z)$, the map $z\mapsto[x:y:1]$ extends at the
   class of $0$ to $[0:1:0]$ and identifies $\mathbb C/\mathbb Z$ bijectively
   with the conic $YZ=X^2+\pi^2Z^2$ minus its two points $[-i\pi:0:1]$ and
   $[i\pi:0:1]$; off the class of $0$ the identification is holomorphic with
   nowhere-vanishing derivative.

This is the rank-one analogue of the double-periodic uniformization of the
companion page: there the period lattice $\Lambda$ has rank two, here the
period group is $\mathbb Z$, and the cubic is replaced by a conic.

## Facts & Assumptions

**Given:** the functions $\sin,\cos$ of [[def-complex-trigonometric-and-hyperbolic-functions]], the cotangent $\cot x=\cos x/\sin x$ of [[def-tangent-cotangent-secant-cosecant]], the complex exponential $\exp$ of [[def-complex-exponential]], and the function $P(z)=\pi\cot(\pi z)$ on $\mathbb C\setminus\mathbb Z$.

[F1] For $z\in\mathbb C$, $\sin z=\frac{\exp(iz)-\exp(-iz)}{2i}$ and $\cos z=\frac{\exp(iz)+\exp(-iz)}2$ ([[def-complex-trigonometric-and-hyperbolic-functions]]).

[F2] $\cot x=\frac{\cos x}{\sin x}$ for every $x\ne m\pi$ with $m\in\mathbb Z$ ([[def-tangent-cotangent-secant-cosecant]]).

[F3] The functions $\sin,\cos$ are entire and satisfy $\sin'=\cos$ and $\cos'=-\sin$ ([[cor-complex-trigonometric-and-hyperbolic-derivatives]]).

[F4] $\sin z=0$ exactly for $z=k\pi$ with $k\in\mathbb Z$, and $\cos z=0$ exactly for $z=(k+\tfrac12)\pi$ with $k\in\mathbb Z$ ([[thm-complex-sine-and-cosine-zero-sets]]).

[F5] For every $z\in\mathbb C\setminus\mathbb Z$, $\pi\cot(\pi z)=\frac1z+\sum_{n\ge1}\frac{2z}{z^2-n^2}$, the series converging locally uniformly on $\mathbb C\setminus\mathbb Z$ ([[thm-mittag-leffler-expansion-of-pi-cotangent]]).

[F6] If $f$ is complex differentiable at $a$ and $g$ at $f(a)$, then $(g\circ f)'(a)=g'(f(a))f'(a)$ ([[thm-chain-rule-for-complex-derivatives]]).

[F7] The sum, product, reciprocal and quotient rules displayed in [[thm-algebra-of-complex-derivatives]] hold at every point where the functions are complex differentiable and the denominators do not vanish; in particular $(f/g)'=(f'g-fg')/g^2$.

[F8] $\exp z=\sum_{n\ge0}z^n/n!$ for every $z\in\mathbb C$, and $\exp(z+w)=\exp z\,\exp w$ for all $z,w\in\mathbb C$ ([[def-complex-exponential]], [[thm-complex-exponential-addition-and-real-extension]]).

[F9] $\ker(\exp)=2\pi i\mathbb Z$, and $\exp z=\exp w$ exactly when $z-w\in2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[F10] The exponential maps $\mathbb C$ onto $\mathbb C\setminus\{0\}$ ([[thm-complex-exponential-surjects-onto-the-punctured-plane]]).

Every object below is given by an explicit formula and no choice principle is used.

## Verification

**Proof technique:** direct.

Steps 1.1-1.5 compute the quotient description, the Möbius form of $P$, its principal part, the derivative identity and the conic; steps 2.1-2.4 prove holomorphy and zero-freeness, injectivity modulo the period, the exact period group and the extension across the class of $0$; steps 3.1-4.1 record the pole bookkeeping and identify the image.

1.1 The map $Q([z]):=e^{2\pi iz}$ on $\mathbb C/\mathbb Z$ is well defined because $e^{2\pi i(z+m)}=e^{2\pi iz}e^{2\pi im}=e^{2\pi iz}$ for $m\in\mathbb Z$, as $2\pi im\in\ker(\exp)$; it is injective because $e^{2\pi iz}=e^{2\pi iw}$ forces $2\pi i(z-w)\in2\pi i\mathbb Z$, that is $z-w\in\mathbb Z$; it is surjective because every $v\ne0$ is $e^w$ for some $w$ and then $v=Q([w/(2\pi i)])$; and it is holomorphic with derivative $2\pi i\,e^{2\pi iz}\ne0$ at every point. [F8, F9, F10, algebra]

1.2 For $z\in\mathbb C\setminus\mathbb Z$ put $s=e^{i\pi z}$, so that $s^2=q$ and $s^{-1}=e^{-i\pi z}$; then $\sin(\pi z)=\frac{s-s^{-1}}{2i}$ and $\cos(\pi z)=\frac{s+s^{-1}}2$ by [F1], and $\sin(\pi z)\ne0$ by [F4], so by [F2] and multiplication of numerator and denominator by $s$, $P(z)=\pi\frac{\cos(\pi z)}{\sin(\pi z)}=\pi i\,\frac{s+s^{-1}}{s-s^{-1}}=\pi i\,\frac{s^2+1}{s^2-1}=\pi i\,\frac{q+1}{q-1}$. [F1, F2, F4, algebra]

1.3 The expansion of [F5] shows that near $z=0$ the sum $\sum_{n\ge1}\frac{2z}{z^2-n^2}$ tends to $\sum_{n\ge1}(\frac1{0-n}+\frac1{0+n})=0$, so $P(z)-\frac1z$ extends holomorphically to $0$ with value $0$; equivalently $P$ has principal part $1/z$ at $0$. [F5, algebra]

1.4 Differentiating $P(z)=\pi\cos(\pi z)/\sin(\pi z)$ by the chain rule [F3, F6] and the quotient rule [F7], and using $\sin(\pi z)\ne0$, gives $P'(z)=-\pi^2/\sin^2(\pi z)$, so $-P'(z)=\pi^2/\sin^2(\pi z)$; since $\sin^2+\cos^2=1$, dividing by $\sin^2$ gives $\csc^2=1+\cot^2$ and hence $-P'(z)=\pi^2(1+\cot^2(\pi z))=\pi^2+P(z)^2$. [F3, F6, F7, algebra]

1.5 The projective curve $YZ=X^2+\pi^2Z^2$ has a unique point with $Z=0$, namely $[0:1:0]$, because $Z=0$ forces $X^2=0$; in the chart $Y=1$ its equation is $v=u^2+\pi^2v^2$ with $u=X/Y$, $v=Z/Y$, and $\partial_v(v-u^2-\pi^2v^2)=1-2\pi^2v$ equals $1$ at the origin, so $u$ is a local coordinate there. In the chart $Z=1$ the equation is the parabola $y=x^2+\pi^2$, whose projection to the $x$-line is a bijection onto $\mathbb C$; hence every conic point is $[x:x^2+\pi^2:1]$ for a unique $x\in\mathbb C$, or $[0:1:0]$, and the two points with vanishing $y$ are $[\pm i\pi:0:1]$. [algebra, given]

2.1 The function $P$ is holomorphic on $\mathbb C\setminus\mathbb Z$: there it is the composite of $z\mapsto e^{2\pi iz}$ with the rational function $q\mapsto\pi i(q+1)/(q-1)$, holomorphic on $\mathbb C^\ast\setminus\{1\}$. By [F4], its zeros are exactly $\frac12+\mathbb Z$. [F4, F7, F8, step 1.2, algebra]

2.2 If $P(z)=P(w)$ for $z,w\in\mathbb C\setminus\mathbb Z$, then step 1.2 gives $\pi i(q+1)/(q-1)=\pi i(q'+1)/(q'-1)$ with $q=e^{2\pi iz}\ne1$ and $q'=e^{2\pi iw}\ne1$; cross-multiplying, $qq'-q+q'-1=q'q-q'+q-1$, hence $2q'=2q$, $q=q'$, and $z-w\in\mathbb Z$ by [F9]. Thus $P$ is injective on the coset space $(\mathbb C\setminus\mathbb Z)/\mathbb Z$; since $P'\ne0$ there by step 1.4, $P$ is locally biholomorphic on $\mathbb C\setminus\mathbb Z$. [F9, step 1.2, step 1.4, algebra]

2.3 For $z\notin\mathbb Z$ and $T\in\mathbb C$ with $z+T\notin\mathbb Z$, step 1.2 gives $P(z+T)=P(z)$ if and only if $e^{2\pi iT}=1$, which by [F9] holds exactly when $T\in\mathbb Z$; since $P$ is nonconstant by step 1.4, the period group of $P$ is exactly $\mathbb Z$. [F8, F9, step 1.2, step 1.4]

2.4 On $\mathbb C\setminus\mathbb Z$ the point $[P(z):-P'(z):1]$ equals $[u(z):1:v(z)]$ with $u=P/(-P')=\sin(2\pi z)/(2\pi)$ and $v=1/(-P')=\sin^2(\pi z)/\pi^2$, using step 1.4 and $\sin(2\pi z)=2\sin(\pi z)\cos(\pi z)$; writing $q=1+2\pi iz\,h(z)$ with $h(z)=\sum_{k\ge1}(2\pi iz)^{k-1}/k!$ entire and $h(0)=1$ by [F8], step 1.2 gives $P(z)=\frac1z\cdot\frac{1+\pi iz\,h(z)}{h(z)}$, so $u$ and $v$ are holomorphic near $0$ with $u(0)=v(0)=0$ and $v=u^2+\pi^2v^2$ by step 1.4. Thus $z\mapsto[u(z):1:v(z)]$ extends holomorphically to $z=0$ with value $[0:1:0]$. [F1, F8, step 1.2, step 1.4, algebra]

3.1 By [F5] the function $P(z)-\frac1z=\sum_{n\ge1}\frac{2z}{z^2-n^2}$ is holomorphic on $\mathbb C\setminus\mathbb Z$; near $z=m\in\mathbb Z\setminus\{0\}$ the summand with $n=|m|$ contributes the only singularity, a simple pole of residue $1$, so the poles of $P$ are exactly the integers, all simple of residue $1$. Consequently the only class of $\mathbb C/\mathbb Z$ at which $P$ is not defined is the class of $0$. [F5, step 2.1, algebra]

4.1 By steps 2.2 and 2.3 the map is invariant under $\mathbb Z$ and injective on $(\mathbb C\setminus\mathbb Z)/\mathbb Z$, so adding the class of $0$ gives a bijection onto its image; by step 3.1 every other class is in the domain of $P$; for $z\notin\mathbb Z$ the finite image $[x:y:1]$ has $y=-P'(z)=\pi^2/\sin^2(\pi z)\ne0$, so it avoids $[\pm i\pi:0:1]$, and $x=P(z)$ runs exactly once over $\mathbb C\setminus\{\pm i\pi\}$ because $q$ runs exactly once over $\mathbb C^\ast\setminus\{1\}$ by step 1.1 and $q\mapsto\pi i(q+1)/(q-1)$ is a bijection $\mathbb C^\ast\setminus\{1\}\to\mathbb C\setminus\{\pm i\pi\}$ with inverse $x\mapsto(x+\pi i)/(x-\pi i)$ by step 1.2. Hence the extended map is a bijection of $\mathbb C/\mathbb Z$ onto the conic minus $[\pm i\pi:0:1]$, holomorphic with nowhere-vanishing derivative off the class of $0$. [step 1.1, step 1.2, step 1.5, step 2.2, step 2.3, step 2.4, step 3.1] ∎

The excluded points $[-i\pi:0:1]$ and $[i\pi:0:1]$ correspond to $q=0$ and $q=\infty$, respectively, approached as $\operatorname{Im}z\to+\infty$ and $\operatorname{Im}z\to-\infty$. At the real half-periods $z=\pm\frac12$, one has $P(z)=0$.
