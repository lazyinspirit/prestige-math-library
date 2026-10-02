---
id: thm-elliptic-function-divisor-laws
kind: theorem
title: "Divisor and residue laws for elliptic functions"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: true
deps:
  - def-complex-lattice-and-complex-torus
  - def-elliptic-function-for-a-lattice
  - def-admissible-cycle-for-residue-theorem
  - def-null-homologous-and-homologous-complex-cycles
  - def-weighted-zero-and-pole-counts-on-cycle
  - def-residue-isolated-singularity
  - def-simple-pole
  - def-complex-contours-reversal-concatenation-and-closedness
  - def-complex-line-integral-over-a-rectifiable-path
  - def-complex-metric-convergence-and-continuity
  - thm-argument-principle-null-homologous-cycle
  - thm-residue-theorem-null-homologous-cycle
  - thm-complex-torus-quotient-is-well-defined
  - thm-isolated-zeros-holomorphic-function
  - thm-poles-meromorphic-function-are-discrete-and-countable
  - thm-zero-order-factorization-holomorphic-function
  - thm-pole-characterizations
  - thm-liouville-bounded-entire-function
  - cor-meromorphic-functions-on-a-domain-form-a-field
  - lem-index-of-graph-bounded-region-boundary
  - prop-reversal-and-concatenation-of-complex-line-integrals
  - thm-riemann-stieltjes-and-parametric-contour-integrals-agree
  - thm-invariance-of-complex-line-integrals-under-increasing-reparametrization
  - thm-chain-rule-for-complex-derivatives
  - thm-algebra-of-complex-derivatives
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - thm-compactness-under-continuous-maps
  - lem-complex-conjugation-and-modulus-laws
  - cor-independent-set-is-no-larger-than-a-finite-spanning-set
  - thm-complex-numbers-are-the-real-coordinate-plane
  - lem-integer-part
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, pp. 41-47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, Proposition 3.1(a)-(b): the pole and zero counts in a fundamental parallelogram agree and the residue sum vanishes, printed p. 42."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.1, pp. 79-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5 §5.1, basic properties (1)-(2) of elliptic functions and the translation argument, printed pp. 81-82."
    - title: "NIST Digital Library of Mathematical Functions, §23.2"
      url: https://dlmf.nist.gov/23.2
      locator: "§23.2(i)-(iii): existence of the fundamental parallelogram and the divisor conventions for doubly periodic functions."
verification:
  precheck: pass
---

## Statement

Let $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2\subseteq\mathbb C$ be a full
complex lattice with oriented basis $(\omega_1,\omega_2)$
([[def-complex-lattice-and-complex-torus]]), let $f$ be a nonconstant
$\Lambda$-elliptic meromorphic function, and for $a\in\mathbb C$ put

$$P:=\{a+s\omega_1+t\omega_2:0\le s,t\le1\},\qquad P^\circ:=\{a+s\omega_1+t\omega_2:0<s,t<1\}$$

for the closed fundamental parallelogram and its interior. Assume that the
boundary $\partial P$ of $P$ contains no zero and no pole of $f$. Then:

1. the numbers of zeros and of poles of $f$ in $P^\circ$, both counted with
   multiplicity, are finite and equal:

$$\sum_{c\in\operatorname{Zer}(f)\cap P^\circ}\operatorname{ord}_c(f)=\sum_{p\in\operatorname{Pol}(f)\cap P^\circ}\operatorname{ord}^{\mathrm{pole}}_p(f);$$

2. the sum of the residues of $f$ at its poles in $P^\circ$ vanishes:
   $\sum_{p\in\operatorname{Pol}(f)\cap P^\circ}\operatorname{Res}(f,p)=0$;
3. both numbers in (1), and the residue sum in (2), do not depend on the
   translation $a$: the same values arise for every translate whose
   parallelogram boundary avoids the zeros and poles of $f$;
4. in particular, a $\Lambda$-elliptic function with no poles is constant, and
   a nonconstant $\Lambda$-elliptic function has at least two poles counted with
   multiplicity.

## Facts & Assumptions

**Given:** A full complex lattice $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ with oriented basis $(\omega_1,\omega_2)$, a nonconstant $\Lambda$-elliptic function $f$ with zero set $\operatorname{Zer}(f)$ and pole set $\operatorname{Pol}(f)$, a point $a\in\mathbb C$, the closed parallelogram $P=\{a+s\omega_1+t\omega_2:0\le s,t\le1\}$ with interior $P^\circ=\{a+s\omega_1+t\omega_2:0<s,t<1\}$ and boundary $\partial P$, and the hypothesis that $\partial P$ contains no zero and no pole of $f$.

[F1] $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ is a subgroup of $\mathbb C$ with $\omega_1,\omega_2$ real-linearly independent; $(\omega_1,\omega_2)$ is oriented when $\operatorname{Im}(\omega_2/\omega_1)>0$; $T_\Lambda=\mathbb C/\Lambda$ carries the quotient topology ([[def-complex-lattice-and-complex-torus]]). The complex numbers form a real vector space spanned by $\{1,i\}$, and an independent set is no larger than a finite spanning set ([[thm-complex-numbers-are-the-real-coordinate-plane]], [[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]), so the independent pair $\omega_1,\omega_2$ is a real basis of $\mathbb C$: every $z\in\mathbb C$ is $z=s\omega_1+t\omega_2$ with unique $s,t\in\mathbb R$.

[F2] $f:\mathbb C\to\widehat{\mathbb C}$ is meromorphic on the plane and satisfies $f(z+\lambda)=f(z)$ for all $z\in\mathbb C$ and all $\lambda\in\Lambda$, both sides being values in $\widehat{\mathbb C}$; in particular $z+\lambda$ is a pole of $f$ exactly when $z$ is ([[def-elliptic-function-for-a-lattice]]).

[F3] Let $w<w'$, let $\alpha,\beta:[w,w']\to\mathbb R$ be continuous with $\alpha\le\beta$, real-analytic on $(w,w')$ with Puiseux-analytic graphs, and let $\gamma$ be the positively oriented boundary contour of $T=\{x+iy:w\le y\le w',\ \alpha(y)\le x\le\beta(y)\}$. Then $n(\gamma,q)=1$ for every $q\in T^\circ$ and $n(\gamma,q)=0$ for every $q\in\mathbb C\setminus T$; the same two index assertions hold for the region $\sigma(T)$ with boundary contour $\sigma\circ\gamma$, for every orientation-preserving similarity $\sigma(z)=cz+d$ ([[lem-index-of-graph-bounded-region-boundary]]).

[F4] If $\phi:[c,d]\to[a,b]$ is a strictly increasing continuous bijection, $\gamma:[a,b]\to\mathbb C$ is rectifiable and $f$ is continuous on the trace of $\gamma$, then $\int_{\gamma\circ\phi}f\,dz=\int_\gamma f\,dz$ ([[thm-invariance-of-complex-line-integrals-under-increasing-reparametrization]]).

[F5] Let $\Omega\subseteq\mathbb C$ be open, $f$ meromorphic on $\Omega$, $\Gamma$ admissible for the residue theorem in $\Omega$, $f$ not identically zero on any connected component of $\Omega$ and $f\ne0$ on $\Gamma^\ast$. Then $\frac{1}{2\pi i}\int_\Gamma\frac{f'(z)}{f(z)}\,dz=Z(f,\Gamma)-P(f,\Gamma)$, and only finitely many terms in those weighted counts are nonzero ([[thm-argument-principle-null-homologous-cycle]]).

[F6] For $\Gamma$ admissible and $f$ as in [F5], the weighted zero and pole counts are $$Z(f,\Gamma)=\sum_{a\in\operatorname{Zer}(f)}n(\Gamma,a)\operatorname{ord}_a(f),\qquad P(f,\Gamma)=\sum_{b\in\operatorname{Pol}(f)}n(\Gamma,b)\operatorname{ord}^{\mathrm{pole}}_b(f)$$ ([[def-weighted-zero-and-pole-counts-on-cycle]]).

[F7] Let $\Omega\subseteq\mathbb C$ be open, let $f$ be meromorphic on $\Omega$ with pole set $S$, and let $\Gamma$ be admissible for the residue theorem in $\Omega$. Then $\int_\Gamma f(z)\,dz=2\pi i\sum_{a\in S}n(\Gamma,a)\operatorname{Res}(f,a)$, with only finitely many nonzero terms ([[thm-residue-theorem-null-homologous-cycle]]).

[F8] A complex cycle $\Gamma$ is admissible for the residue theorem in $\Omega$ when $\Gamma^\ast\subseteq\Omega\setminus S$, $S$ the pole set of the meromorphic function, and $\Gamma$ is null-homologous in $\Omega$, that is $n(\Gamma,p)=0$ for every $p\in\mathbb C\setminus\Omega$ ([[def-admissible-cycle-for-residue-theorem]], [[def-null-homologous-and-homologous-complex-cycles]]).

[F9] Let $\gamma:[a,b]\to\mathbb C$ be piecewise-$C^1$ and let $f$ be continuous on its trace. Then $\int_\gamma f(z)\,dz=\sum_j\int_{t_j}^{t_{j+1}}f(\gamma(t))\gamma'_j(t)\,dt$ over the smooth pieces ([[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]).

[F10] For a rectifiable contour $\gamma$ one has $\int_{\gamma^-}f\,dz=-\int_\gamma f\,dz$, and for composable rectifiable contours $\alpha,\beta$ one has $\int_{\alpha*\beta}f\,dz=\int_\alpha f\,dz+\int_\beta f\,dz$ ([[prop-reversal-and-concatenation-of-complex-line-integrals]]); the reversal of $\gamma:[a,b]\to\mathbb C$ is $\gamma^-(t)=\gamma(a+b-t)$ ([[def-complex-contours-reversal-concatenation-and-closedness]]).

[F11] Let $f$ be meromorphic on a plane domain $\Omega$ with pole set $P$. Then every $a\in P$ has a neighbourhood in $\Omega$ containing no other pole, $P$ is closed in $\Omega$, and every point of $\Omega$ therefore has a neighbourhood meeting $P$ in at most one point ([[thm-poles-meromorphic-function-are-discrete-and-countable]]).

[F12] The meromorphic functions on a connected plane domain form a field; in particular for a nonzero meromorphic $f$ the reciprocal $1/f$ is meromorphic, and $f$ has a zero of order $m$ at $a$ exactly when $1/f$ has a pole of order $m$ at $a$ ([[cor-meromorphic-functions-on-a-domain-form-a-field]], [[thm-zero-order-factorization-holomorphic-function]]).

[F13] Let $f$ be holomorphic on a punctured disc $0<|z-a|<R$ with a pole at $a$ of order $m$ and principal part $c_{-m}(z-a)^{-m}+\cdots+c_{-1}(z-a)^{-1}$, $c_{-m}\ne0$. Then the Laurent expansion of $f$ has finite nonzero principal part, and if $m=1$ the coefficient $c_{-1}$ is nonzero ([[thm-pole-characterizations]], [[def-simple-pole]]).

[F14] The residue of $f$ at an isolated singularity $a$ is the Laurent coefficient $c_{-1}$ ([[def-residue-isolated-singularity]]).

[F15] Every bounded entire function is constant ([[thm-liouville-bounded-entire-function]]).

[F16] In $\mathbb R^n$ every closed box is compact, and a subset of $\mathbb R^n$ is compact exactly when it is closed and bounded; the image of a compact set under a continuous map is compact ([[thm-heine-borel-rn]], [[thm-compactness-under-continuous-maps]]).

[F17] A continuous real-valued function on a nonempty compact metric space is bounded above and below and attains a maximum and a minimum ([[thm-extreme-value-metric]]).

[F18] If $f:U\to V$ and $g:V\to\mathbb C$ are complex differentiable at $a$ and $f(a)$ respectively, then $(g\circ f)'(a)=g'(f(a))f'(a)$; derivatives are additive and the derivative of the identity is $1$ ([[thm-chain-rule-for-complex-derivatives]], [[thm-algebra-of-complex-derivatives]]).

[F19] For all $z,w\in\mathbb C$ one has $|z+w|\le|z|+|w|$ and $|zw|=|z|\,|w|$ ([[lem-complex-conjugation-and-modulus-laws]]); convergence and continuity on $\mathbb C$ are the metric notions for $d_{\mathbb C}(z,w)=|z-w|$ ([[def-complex-metric-convergence-and-continuity]]).

[F20] For every real $x$ there is exactly one integer $m$ with $m\le x<m+1$, its integer part $\lfloor x\rfloor$ ([[lem-integer-part]]).

## Proof

**Proof technique:** direct.

1.1 Put $\varphi(s,t):=a+s\omega_1+t\omega_2$. By [F19], $|\varphi(s,t)-\varphi(s',t')|\le|\omega_1|\,|s-s'|+|\omega_2|\,|t-t'|$, so $\varphi$ is continuous; the box $[0,1]^2$ is compact by [F16] and $P=\varphi([0,1]^2)$ is its continuous image, hence $P$ is compact and nonempty by [F16]. [F16, F19, given]

1.2 Put $\tau:=\omega_2/\omega_1$, so $\operatorname{Im}\tau>0$ by [F1], and let $\alpha(y):=(\operatorname{Re}\tau/\operatorname{Im}\tau)y$, $\beta(y):=\alpha(y)+1$ on $[0,\operatorname{Im}\tau]$, so that $T:=\{x+iy:0\le y\le\operatorname{Im}\tau,\alpha(y)\le x\le\beta(y)\}=\{s+t\tau:0\le s,t\le1\}$ with $T^\circ=\{s+t\tau:0<s,t<1\}$; the affine functions $\alpha\le\beta$ are real-analytic with Puiseux-analytic graphs, and the orientation-preserving similarity $\sigma(w):=a+\omega_1w$ has $\sigma(T)=P$, $\sigma(T^\circ)=P^\circ$. Define $\gamma_1(t):=a+t\omega_1$, $\gamma_2(t):=a+\omega_1+t\omega_2$, $\gamma_3(t):=a+\omega_1+\omega_2-t\omega_1$, $\gamma_4(t):=a+\omega_2-t\omega_2$ for $t\in[0,1]$ and $\Gamma:=\gamma_1*\gamma_2*\gamma_3*\gamma_4$. Since $\sigma(0+t)=a+t\omega_1$, $\sigma(1+t\tau)=a+\omega_1+t\omega_2$, $\sigma(1+\tau-t)=a+\omega_1+\omega_2-t\omega_1$ and $\sigma(\tau-t\tau)=a+\omega_2-t\omega_2$, the four paths of $\Gamma$ are the four pieces of $\sigma\circ\gamma_T$, where $\gamma_T$ is the boundary contour of [F3], up to the strictly increasing reparametrizations $y=t\operatorname{Im}\tau$ of the two graph pieces; by [F4] and the concatenation additivity of [F10] the integrals defining the indices agree, so the index assertions of [F3] give $n(\Gamma,q)=1$ for $q\in P^\circ$ and $n(\Gamma,q)=0$ for $q\in\mathbb C\setminus P$. In particular $\Gamma^\ast=\partial P$ is a closed contour avoiding $\operatorname{Zer}(f)\cup\operatorname{Pol}(f)$, so every zero and every pole of $f$ lies in $P^\circ$ or outside $P$. [F1, F3, F4, F10, given]

1.3 Since $\Gamma^\ast=\partial P$ avoids $\operatorname{Zer}(f)\cup\operatorname{Pol}(f)$ by the given hypothesis, and $\Gamma$ is null-homologous in $\mathbb C$ (the condition $n(\Gamma,p)=0$ for $p\in\mathbb C\setminus\mathbb C$ is vacuous), [F8] makes $\Gamma$ admissible for the residue theorem in $\Omega=\mathbb C$ both for $f$, whose pole set is $\operatorname{Pol}(f)$, and for $f'/f$, whose pole set is $\operatorname{Zer}(f)\cup\operatorname{Pol}(f)$. [F8, given]

1.4 Write points of $P^\circ$ as $a+s\omega_1+t\omega_2$ with $s,t\in(0,1)$. If $u,v\in P^\circ$ and $u-v\in\Lambda$, then $u-v=(m\omega_1+n\omega_2)$ with $m,n\in\mathbb Z$ and also $u-v=(s-s')\omega_1+(t-t')\omega_2$ with $s-s',t-t'\in(-1,1)$; uniqueness of the real coordinates from [F1] gives $m=s-s'$ and $n=t-t'$, so $m=n=0$ and $u=v$. Conversely, write $z-a=s\omega_1+t\omega_2$ with $s,t\in\mathbb R$, [F20] provides integers $m\le s<m+1$ and $n\le t<n+1$, so $z-(m\omega_1+n\omega_2)=a+(s-m)\omega_1+(t-n)\omega_2\in\{a+s'\omega_1+t'\omega_2:0\le s',t'<1\}\subseteq P$; hence every $\Lambda$-orbit meets $P$, and it meets $P^\circ$ in at most one point. For a zero $c$ of $f$, the representative $w\in P$ of its orbit is again a zero by [F2], and $w\notin\partial P$ by the hypothesis, so $w\in P^\circ$; moreover the order is preserved since $f(c+\lambda+u)=f(c+u)$ for all $u$, so the germ of $f$ at a translate is the translated germ. Therefore the map sending a zero class to its representative in $P^\circ$ is a bijection from the classes of zeros of $f$ onto $\operatorname{Zer}(f)\cap P^\circ$ preserving multiplicity, and the same argument with poles in place of zeros gives a multiplicity preserving bijection from the classes of poles onto $\operatorname{Pol}(f)\cap P^\circ$. [F1, F2, F20, given]

1.5 For $t\in[0,1]$ the paths $\gamma_1(t)=a+t\omega_1$, $\gamma_2(t)=a+\omega_1+t\omega_2$, $\gamma_3(t)=a+\omega_1+\omega_2-t\omega_1$ and $\gamma_4(t)=a+\omega_2-t\omega_2$ are $C^1$ with $\gamma_1'=\omega_1$, $\gamma_2'=\omega_2$, $\gamma_3'=-\omega_1$, $\gamma_4'=-\omega_2$. For any function $g$ continuous on the trace of $\Gamma$ the parametric formula [F9] and the concatenation identity of [F10] give $\int_\Gamma g\,dz=\sum_{j=1}^4\int_0^1g(\gamma_j(t))\gamma_j'(t)\,dt$; moreover $\gamma_3$ is the reversal of the translated path $\delta_1(t):=\gamma_1(t)+\omega_2$ and $\gamma_4$ is the reversal of $\delta_2(t):=\gamma_2(t)-\omega_1$, so $\int_{\gamma_3}g\,dz=-\int_{\delta_1}g\,dz$ and $\int_{\gamma_4}g\,dz=-\int_{\delta_2}g\,dz$ by [F10]. [F9, F10]

1.6 On the open set $U:=\mathbb C\setminus\operatorname{Pol}(f)$ the function $f$ is holomorphic, and $U+\lambda=U$ for every $\lambda\in\Lambda$ by [F2]. Fix $\lambda\in\Lambda$ and let $T_\lambda(z):=z+\lambda$; the chain rule [F18] applied to $f=g$ and $T_\lambda$ at $z\in U$ gives $(f\circ T_\lambda)'(z)=f'(z+\lambda)\cdot 1$, while $f\circ T_\lambda=f$ by [F2], so $f'(z+\lambda)=f'(z)$ for all $z\in U$. Consequently $g:=f'/f$, which is holomorphic on $U\setminus\operatorname{Zer}(f)$, satisfies $g(z+\lambda)=g(z)$ at every point of its domain. [F2, F18]

2.1 By [F11] applied to $f$, $\operatorname{Pol}(f)$ is closed and discrete in $\mathbb C$ and every point of $\mathbb C$ has a neighbourhood meeting $\operatorname{Pol}(f)$ in at most one point. Since $f$ is not identically zero, [F12] makes $1/f$ meromorphic, and its pole set is exactly $\operatorname{Zer}(f)$, with a zero of $f$ of order $m$ becoming a pole of order $m$ of $1/f$; applying [F11] to $1/f$ shows that $\operatorname{Zer}(f)$ is closed and discrete as well, and every point of $\mathbb C$ has a neighbourhood meeting each of $\operatorname{Zer}(f)$, $\operatorname{Pol}(f)$ in at most one point. Because $P$ is compact by step 1.1, finitely many such neighbourhoods cover $P$, so the sets $\operatorname{Zer}(f)\cap P$ and $\operatorname{Pol}(f)\cap P$ are finite, and so are their subsets in $P^\circ$. [F11, F12, step 1.1]

2.2 The hypotheses of [F5] hold with $\Omega=\mathbb C$: $f$ is meromorphic and not identically zero on the connected component $\mathbb C$ because it is nonconstant, $\Gamma$ is admissible by step 1.3, and $f$ has no zero on $\Gamma^\ast$ by the hypothesis; hence $\frac{1}{2\pi i}\int_\Gamma\frac{f'}{f}\,dz=Z(f,\Gamma)-P(f,\Gamma)$, with only finitely many nonzero terms in the weighted counts. By [F6] these counts are the sums over $\operatorname{Zer}(f)$ and $\operatorname{Pol}(f)$ weighted by $n(\Gamma,\cdot)$ and by the orders; by step 1.2 the index is $1$ on $P^\circ$ and $0$ off $P$, and by the hypothesis there is no zero or pole on $\partial P$, so $$Z(f,\Gamma)=Z_P:=\sum_{c\in\operatorname{Zer}(f)\cap P^\circ}\operatorname{ord}_c(f),\qquad P(f,\Gamma)=P_P:=\sum_{p\in\operatorname{Pol}(f)\cap P^\circ}\operatorname{ord}^{\mathrm{pole}}_p(f),$$ both finite sums. [F5, F6, step 1.2, step 1.3, given]

2.3 The hypotheses of [F7] hold with $\Omega=\mathbb C$: $f$ is meromorphic on $\mathbb C$ with pole set $\operatorname{Pol}(f)$ and $\Gamma$ is admissible by step 1.3. Hence $\int_\Gamma f(z)\,dz=2\pi i\sum_{p\in\operatorname{Pol}(f)}n(\Gamma,p)\operatorname{Res}(f,p)$, and by step 1.2 all poles on $\partial P$ are absent and the index is $1$ exactly at the poles in $P^\circ$, so $\int_\Gamma f\,dz=2\pi i\sum_{p\in\operatorname{Pol}(f)\cap P^\circ}\operatorname{Res}(f,p)$. [F7, step 1.2, step 1.3, given]

2.4 Applying step 1.5 to $g:=f$, which is continuous on $\Gamma^\ast$ because $\Gamma^\ast=\partial P$ has no pole of $f$, and using the $\Lambda$-periodicity $f(a+\omega_2+t\omega_1)=f(a+t\omega_1)$ and $f(a+\omega_1+t\omega_2)=f(a+t\omega_2)$ from [F2] gives $\int_{\delta_1}f\,dz=\int_0^1f(a+\omega_2+t\omega_1)\omega_1\,dt=\int_0^1f(a+t\omega_1)\omega_1\,dt=\int_{\gamma_1}f\,dz$, and, since $\delta_2(t)=a+t\omega_2$, $\int_{\delta_2}f\,dz=\int_0^1f(a+t\omega_2)\omega_2\,dt=\int_0^1f(a+\omega_1+t\omega_2)\omega_2\,dt=\int_{\gamma_2}f\,dz$; with the reversal identities of step 1.5 the integrals over $\gamma_3,\gamma_4$ cancel those over $\gamma_1,\gamma_2$, so $\int_\Gamma f(z)\,dz=0$. [F2, step 1.5]

2.5 Suppose that $\operatorname{Pol}(f)=\varnothing$, so that $f$ is holomorphic on all of $\mathbb C$ and $|f|:\mathbb C\to\mathbb R$ is continuous. By step 1.4 every $z\in\mathbb C$ is $w+\lambda$ with $w\in P$ and $\lambda\in\Lambda$, so $|f(z)|=|f(w)|$ by [F2]; since $P$ is nonempty and compact by step 1.1, [F17] provides $M:=\max_{w\in P}|f(w)|<\infty$, hence $|f(z)|\le M$ for every $z\in\mathbb C$. Thus $f$ is a bounded entire function, and $f$ is constant by [F15]. [F2, F15, F17, step 1.1, step 1.4]

3.1 Applying step 1.5 to the function $g=f'/f$, which is holomorphic and hence continuous on the complement of $\operatorname{Zer}(f)\cup\operatorname{Pol}(f)$ and in particular on $\Gamma^\ast$: by step 1.6, $g$ is $\Lambda$-periodic on its domain, so $g(a+\omega_2+t\omega_1)=g(a+t\omega_1)$ and $g(a+\omega_1+t\omega_2)=g(a+t\omega_2)$ for $t\in[0,1]$; the same computation as in step 2.4 gives $\int_\Gamma\frac{f'}{f}\,dz=0$. [step 1.5, step 1.6]

3.2 Combining steps 2.3 and 2.4 gives $0=\int_\Gamma f(z)\,dz=2\pi i\sum_{p\in\operatorname{Pol}(f)\cap P^\circ}\operatorname{Res}(f,p)$, hence the residue sum vanishes. [step 2.3, step 2.4]

4.1 Combining steps 2.2 and 3.1 gives $Z_P-P_P=\frac{1}{2\pi i}\int_\Gamma\frac{f'}{f}\,dz=0$, so the two finite multiplicities of step 2.2 agree: $Z_P=P_P$. [step 2.2, step 3.1]

4.2 Let $f$ be nonconstant and let $D:=P_P$ be the total pole multiplicity attached to $P$ by step 2.2. By step 2.5, $\operatorname{Pol}(f)\ne\varnothing$, so $D\ge1$. If $D=1$, then $\operatorname{Pol}(f)\cap P^\circ$ consists of a single point $p$ with $\operatorname{ord}^{\mathrm{pole}}_p(f)=1$, so the pole is simple and [F13] gives a principal part $c_{-1}(z-p)^{-1}$ with $c_{-1}\ne0$; by [F14], $\operatorname{Res}(f,p)=c_{-1}\ne0$. The residue sum of step 3.2 then equals this single nonzero residue, contradicting step 3.2. Hence $D\ge2$: counted with multiplicity, $f$ has at least two poles. [F13, F14, step 2.2, step 2.5, step 3.2]

5.1 Let $b\in\mathbb C$ be a translation for which $\partial P_b$ avoids $\operatorname{Zer}(f)\cup\operatorname{Pol}(f)$, where $P_b=\{b+s\omega_1+t\omega_2:0\le s,t\le1\}$. The argument of steps 1.2, 1.3, 2.2, 2.3, 2.4 and 3.1 uses only this avoidance and the lattice periodicity, so it applies verbatim with $b$ in place of $a$ and yields $Z_{P_b}=P_{P_b}$ and vanishing residue sum for $P_b$. By step 1.4 applied to $P$, the number $Z_P$ is the total multiplicity of the zeros of $f$ on $T_\Lambda$ (the sum of $\operatorname{ord}_c(f)$ over the finitely many zero classes), an invariant of $f$ and $\Lambda$ alone, and the same holds for $P_P$; applied to $P_b$ the same identification gives $Z_{P_b}=Z_P$ and $P_{P_b}=P_P$. Hence both multiplicities and, by step 3.2 applied to each translate, the residue sum are independent of the translation. [step 1.4, step 2.2, step 4.1, step 3.2]

6.1 Steps 4.1 and 3.2 prove clauses (1) and (2) for the given translate, step 5.1 proves clause (3), and steps 2.5 and 4.2 prove the two assertions of clause (4). ∎

## Remarks


The divisor law and the residue law are the two integrals of $f'/f$ and of $f$ over the parallelogram boundary, whose opposite sides cancel by periodicity; the index assertions of [[lem-index-of-graph-bounded-region-boundary]] replace the general Jordan curve theorem in evaluating the weighted counts. Clause (4) discharges the promise recorded in [[def-elliptic-function-for-a-lattice]] that the pole-free $\Lambda$-elliptic functions are exactly the constants, and it uses Liouville's theorem rather than the compactness of $T_\Lambda$ ([[thm-complex-torus-quotient-is-well-defined]]) so that no Riemann-surface degree theory is presupposed here. Alternatively, the isolated-zero theorem [[thm-isolated-zeros-holomorphic-function]] isolates the zeros of $f$ on the punctured plane and gives the same discreteness conclusion as the reciprocal argument in step 2.1. The proof selects nothing beyond the finitely many neighbourhoods of step 2.1 and the finitely many terms of the two sums; in particular no countable or dependent choice is invoked.
