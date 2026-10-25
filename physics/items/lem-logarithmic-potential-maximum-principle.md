---
id: lem-logarithmic-potential-maximum-principle
kind: lemma
title: "Maximum principle for a compact logarithmic potential"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-logarithmic-potential-and-energy
  - def-support-of-a-borel-measure
  - thm-continuity-from-above-for-measures
  - thm-differentiation-under-the-integral-sign
  - thm-dominated-convergence
  - lem-log-modulus-is-harmonic-off-its-centre
  - def-plane-harmonic-function
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - def-metric-interior-closure-boundary
  - cor-components-of-open-subsets-of-rn-are-polygonally-connected
  - thm-path-connected-implies-connected
  - thm-maximum-and-minimum-principles-for-plane-harmonic-functions
  - cor-rn-is-polygonally-connected-and-locally-path-connected
  - def-complex-domain
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §§1–3"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§2, the maximum principle for logarithmic potentials, printed pp. 179–180"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §§3 and 5"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§3, upper semicontinuity and the maximum principle for potentials"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $\mu\ne0$ be a finite positive Borel measure on $\mathbb C$ carried by a
compact set, let $S=\operatorname{supp}\mu$, and let $M\in\mathbb R$. If
$U^\mu(x)\le M$ for every $x\in S$, then $U^\mu(z)\le M$ for every
$z\in\mathbb C$. No choice principle is required.

## Facts & Assumptions

**Given:** a nonzero finite positive Borel measure $\mu$ on $\mathbb C$ carried
by a compact set, its support $S=\operatorname{supp}\mu$, a real number $M$, the
hypothesis $U^\mu\le M$ on $S$, and the kernel and potential conventions of
[[def-logarithmic-potential-and-energy]].

[F1] The kernel is $k(z,w)=\log\frac1{|z-w|}$ with the diagonal value
$k(w,w):=+\infty$, it is Borel, and $k(z,w)=+\infty$ exactly when $z=w$; the
potential $U^\mu(z)=\int_{\mathbb C}k(z,w)\,d\mu(w)\in(-\infty,+\infty]$ is the
extended integral of this Borel function, and
$p_\mu=-U^\mu=\int\log|z-w|\,d\mu(w)$
([[def-logarithmic-potential-and-energy]]).

[F2] The support is the complement of the union of all open $\mu$-null sets; it
is closed, it carries $\mu$, it is contained in every closed carrier, and
$\mu\ne0$ holds if and only if $\operatorname{supp}\mu\ne\varnothing$
(the definition and its countable-basis proof in the Remark of
[[def-support-of-a-borel-measure]]).

[F3] For decreasing measurable sets $E_0\supseteq E_1\supseteq\cdots$ with
$\mu(E_{n_0})<+\infty$ for some $n_0$, one has
$\mu(\bigcap_nE_n)=\inf_n\mu(E_n)$ ([[thm-continuity-from-above-for-measures]]).

[F4] If the parameter integrand is integrable for every parameter, is
differentiable in the parameter almost everywhere, and its measurable
parameter derivative has a single integrable majorant on the parameter
interval, the derivative passes inside the integral
([[thm-differentiation-under-the-integral-sign]]). Dominated convergence
gives continuity of parameter integrals of continuous integrands under a
single integrable majorant ([[thm-dominated-convergence]]).

[F5] The function $z\mapsto\log|z-a|$ is smooth and harmonic on
$\mathbb C\setminus\{a\}$, so its Laplacian vanishes there
([[lem-log-modulus-is-harmonic-off-its-centre]]).

[F6] A real-valued function on an open plane set is harmonic when it is $C^2$
and its Laplacian vanishes there ([[def-plane-harmonic-function]]).

[F7] A continuous real-valued function on a nonempty compact metric space is
bounded and attains its greatest and least values
([[thm-extreme-value-metric]]).

[F8] A subset of $\mathbb R^2$ is compact if and only if it is closed and
bounded ([[thm-heine-borel-rn]]).

[F9] A point lies in the boundary $\partial A$ exactly when every ball about it
meets both $A$ and its complement, and for open $A$ one has
$\overline{A}=A\cup\partial A$ ([[def-metric-interior-closure-boundary]]).

[F10] Every connected component of an open subset of $\mathbb R^n$ is open and
path-connected ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]).

[F11] A path-connected space is connected ([[thm-path-connected-implies-connected]]).

[F12] A harmonic function on a complex domain that has an interior local maximum
or interior local minimum is constant on the domain
([[thm-maximum-and-minimum-principles-for-plane-harmonic-functions]]).

[F13] $\mathbb R^n$ is connected ([[cor-rn-is-polygonally-connected-and-locally-path-connected]]).

[F14] A complex domain is a nonempty connected open subset of $\mathbb C$
([[def-complex-domain]]).

## Proof

**Proof technique:** direct.

1.1 Set $S:=\operatorname{supp}\mu$, $m:=\mu(\mathbb C)>0$ and $p:=p_\mu=-U^\mu$, so that $p(z)=\int_{\mathbb C}\log|z-w|\,d\mu(w)\in[-\infty,\infty)$ for every $z\in\mathbb C$. [F1, given]

2.1 By [F2] the set $S$ is closed, carries $\mu$ and is contained in every closed carrier; since $\mu\ne0$ is carried by a compact set, $S$ is a nonempty compact subset of that carrier and $\mu(\mathbb C\setminus S)=0$, so the function $p$ of step 1.1 satisfies $p(z)=\int_S\log|z-w|\,d\mu(w)$ for every $z$. [F2, step 1.1, given]

2.2 For $x\in S$ the hypothesis gives $p(x)\ge-M>-\infty$ for the function $p$ of step 1.1; were $\mu(\{x\})>0$, the diagonal contributes $+\infty$ to the integral for $U^\mu(x)$, while the kernel on the compact support is bounded below, so $U^\mu(x)=+\infty$, that is $p(x)=-\infty$, so $\mu(\{x\})=0$. [F1, step 1.1, given, algebra]

2.3 Suppose, for contradiction, that $p(z_0)<-M$ for some $z_0\in\mathbb C$; then $z_0\notin S$ by the hypothesis at the points of $S$, and with $p$ as in step 1.1 one can choose $c$ with $p(z_0)<c<-M$ (if $p(z_0)$ is finite take $c=(p(z_0)-M)/2$ and if $p(z_0)=-\infty$ take $c=-M-1$) and set $A:=\{z\in\mathbb C\setminus S:p(z)<c\}$. [step 1.1, given, assume-contra, algebra]

3.1 Hence for every $x\in S$ the decreasing measurable sets $B(x,1/j)$ satisfy $\mu(B(x,1/j))\downarrow\mu(\{x\})=0$ as $j\to\infty$: continuity from above applies to the finite measure $\mu$, and $\mu(\{x\})=0$ is step 2.2. [step 2.2, F3, algebra]

3.2 Since $S$ carries $\mu$ by step 2.1, for $z_0\notin S$ with $\delta:=d(z_0,S)>0$ the kernel $\log|z-w|$ and its partial derivatives in $z$ of order at most two are continuous and uniformly bounded on $B(z_0,\delta/2)\times S$. These constant bounds are $\mu$-integrable because $\mu$ is finite. Apply [F4] successively along coordinate intervals to the kernel and its first derivatives: the measurable differentiated integrands obey these bounds, so $\Delta p(z)=\int_S\Delta_z\log|z-w|\,d\mu(w)=0$ by [F5]. Dominated convergence in [F4] makes the resulting derivatives continuous. Thus $p\in C^2$ locally off $S$ and is harmonic there by [F6]. [step 1.1, step 2.1, F4, F5, F6, algebra]

3.3 Fix $x\in\partial S$, $\varepsilon\in(0,1)$ and $z\in\mathbb C\setminus S$ with $|z-x|<\varepsilon/8$; the continuous function $w\mapsto|z-w|$ attains a least value over the nonempty compact $S$ of step 2.1 at some $y\in S$, so $|y-z|=d(z,S)\le|z-x|$ and hence $|y-x|\le2|z-x|$ and $|y-w|\le|y-z|+|z-w|\le2|z-w|$ for every $w\in S$; the estimates below hold for every nearest point $y$, so only its existence is used. [step 2.1, F7, algebra]

3.4 The set $A$ of step 2.3 is bounded: with $r_0:=\max\{1,\sup_{w\in S}|w|\}$ (finite by step 2.1) and $|z|\ge2r_0$ one has $|z-w|\ge|z|/2$ for every $w\in S$, so by step 2.1 $p(z)\ge m\log(|z|/2)\to+\infty$ and $p(z)\ge c$ for all large $|z|$; therefore $\overline A$ is closed and bounded, hence compact. [step 2.1, step 2.3, F8, algebra]

4.1 On the region $F:=\{w:|x-w|\ge\varepsilon\}$ both $|z-w|$ and $|y-w|$ exceed $3\varepsilon/4$ for the points $z,y$ of step 3.3, so the mean value estimate for the logarithm gives $|\log|z-w|-\log|y-w||\le8|z-x|/(3\varepsilon)$, while on the region $N:=\{w:|x-w|<\varepsilon\}$ the nearest-point inequality of step 3.3 gives $\log|z-w|\ge\log|y-w|-\log2$. [step 3.3, algebra]

5.1 Splitting the integral of step 2.1 at $N$ and $F$ and integrating the two pointwise bounds of step 4.1 for the nearest point $y$ of step 3.3 gives $p(z)\ge p(y)-\mu(B(x,\varepsilon))\log2-8m|z-x|/(3\varepsilon)\ge-M-\mu(B(x,\varepsilon))\log2-8m|z-x|/(3\varepsilon)$, the last inequality by the hypothesis at $y\in S$; the near part of $\int\log|y-w|\,d\mu$ is finite because $p(y)\ge-M$ is finite and the integrand on $F$ is bounded, so no difference of infinities occurs. [step 2.1, step 3.3, step 4.1, given, algebra]

6.1 Consequently, for every $\eta>0$ there is $r>0$ with $p(z')\ge-M-\eta$ whenever $z'\in\mathbb C\setminus S$ and $|z'-x|<r$: by step 3.1 choose $j\ge2$ with $\mu(B(x,1/j))\log2\le\eta/2$, and put $\varepsilon:=1/j$ and $r:=\min\{\varepsilon/8,\,3\varepsilon\eta/(16m)\}>0$, so that the last term of step 5.1 is less than $\eta/2$; thus $\limsup_{z'\to x,\,z'\notin S}U^\mu(z')\le M$ at every $x\in\partial S$. [step 3.1, step 5.1, algebra]

7.1 The set $A$ of step 2.3 is nonempty and open, and $\overline A\cap\partial S=\varnothing$: since $c<-M$ and step 6.1 applies at every $x\in\partial S$ with $\eta:=(-M-c)/2>0$, giving $-M-\eta=(-M+c)/2>c$, the set $A$ misses a whole ball about each boundary point, so no limit point of $A$ lies in $\partial S$; hence $\overline A\subseteq\mathbb C\setminus S$, because a point of $\overline A$ lying in $S$ would have every ball about it meeting both $S$ and $\mathbb C\setminus S$, that is, would lie in $\partial S$. [step 6.1, step 2.3, F9, algebra]

8.1 The function $p$ is continuous on the nonempty compact set $\overline A$ of step 3.4 and attains there a minimum at some $a\in\overline A$; every point $b\in\partial A$ satisfies $p(b)=c$, because $b\in\overline A\subseteq\mathbb C\setminus S$ by step 7.1 and $p$ is continuous at $b$, points of $A$ approach $b$ with $p<c$ and points outside $A$ approach $b$ with $p\ge c$ (on $S$ because $p\ge-M>c$ by the hypothesis, on $\mathbb C\setminus S$ by the definition of $A$ in step 2.3); since $p(a)\le p(z_0)<c$, the minimiser $a$ lies in $A$, and $p(z)\ge c>p(a)$ for every $z\in\mathbb C\setminus S$ outside $\overline A$, so $p$ attains a global minimum over $\mathbb C\setminus S$ at the interior point $a$. [step 2.3, step 7.1, step 3.4, F7, F9, algebra]

9.1 Let $\Omega$ be the connected component of $\mathbb C\setminus S$ containing $a$; it is open and path-connected, hence a domain, $p|_\Omega$ is harmonic by step 3.2, and $a\in\Omega$ is an interior local minimum of $p|_\Omega$, so [F12] forces $p\equiv p(a)$ on $\Omega$, with $p(a)<c<-M$ by step 8.1. [step 3.2, step 8.1, F10, F11, F12, F14]

10.1 The component $\Omega$ is a proper subset of $\mathbb C$, because $\Omega\subseteq\mathbb C\setminus S$ and $S\ne\varnothing$ by step 2.1; hence $\partial\Omega\ne\varnothing$, since otherwise $\overline\Omega=\Omega\cup\partial\Omega=\Omega$ would make the nonempty proper subset $\Omega$ both open and closed in the connected space $\mathbb C$. [step 2.1, step 9.1, F9, F13]

10.2 Every point $\zeta\in\partial\Omega$ lies in $\partial S$: it lies in $\overline\Omega\subseteq\overline{\mathbb C\setminus S}$, and if $\zeta\notin S$ then $\zeta\in\mathbb C\setminus S$, whose component $\Omega'$ is open by [F10] and disjoint from $\Omega$, so $\overline\Omega$ is contained in the closed set $\mathbb C\setminus\Omega'$, which does not contain $\zeta$; hence $\zeta\in S$, and every ball about $\zeta$ also meets $\mathbb C\setminus S$ because $\zeta$ is a boundary point of the domain $\Omega$ of step 9.1, so $\zeta\in\partial S$. [step 9.1, F9, F10, algebra]

10.3 If $\Omega$ were unbounded, choose $R>2r_0$ with $m\log(R/2)>p(a)$ and a point $z\in\Omega$ with $|z|\ge R$; then step 3.4 gives $p(z)\ge m\log(|z|/2)\ge m\log(R/2)>p(a)=p(z)$ by step 9.1, a contradiction. [step 3.4, step 9.1, contradiction]

11.1 If $\Omega$ were bounded, step 10.1 gives a point $\zeta\in\partial\Omega$, hence $\zeta\in\partial S$ by step 10.2, and step 6.1 with $\eta:=(-M-p(a))/2>0$ gives a ball $B(\zeta,r)$ with $p(z)\ge-M-\eta=(-M+p(a))/2>p(a)$ for all $z\in(\mathbb C\setminus S)\cap B(\zeta,r)$, using $p(a)<-M$ from step 9.1; but $\zeta\in\partial\Omega$ makes $B(\zeta,r)$ meet $\Omega$, and any $z$ in that intersection satisfies $p(z)=p(a)$ by step 9.1, a contradiction. [step 6.1, step 9.1, step 10.1, step 10.2, contradiction]

12.1 Both cases of steps 11.1 and 10.3 are impossible, so the supposition of step 2.3 is false: $p\ge-M$ holds on $\mathbb C\setminus S$, and on $S$ it is exactly the hypothesis, so $p\ge-M$ on all of $\mathbb C$ and therefore $U^\mu=-p\le M$ everywhere. [step 2.3, step 11.1, step 10.3, discharge-contradiction, algebra] ∎
