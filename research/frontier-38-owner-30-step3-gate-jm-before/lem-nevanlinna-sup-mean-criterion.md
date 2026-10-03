---
id: lem-nevanlinna-sup-mean-criterion
kind: lemma
title: "A harmonic majorant of log^+|F| exists exactly when the radial log^+ means are bounded"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-plane-subharmonic-function, thm-log-modulus-of-a-holomorphic-function-is-subharmonic, lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity, def-poisson-modification-of-a-subharmonic-function, thm-poisson-modification-preserves-subharmonicity-and-majorizes, def-poisson-integral-on-the-disc, def-poisson-integral-of-finite-boundary-measure, thm-maximum-and-minimum-principles-for-plane-harmonic-functions, thm-harnack-inequality-on-a-disc, thm-harnack-convergence-principle-for-plane-harmonic-functions, thm-mean-value-property-for-plane-harmonic-functions, def-mean-value-property-for-plane-functions, lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined, thm-monotone-convergence-for-the-integral, cor-c-one-change-of-variables-for-l-one-functions, def-the-one-dimensional-torus-and-normalized-haar-integral, thm-poisson-integral-solves-the-disc-dirichlet-problem]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §5, definition of $N$ and (5.1), with Theorem 5.1 and the remark after its proof"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed pp. 66-67: $f\\in N$ iff $\\log^+|f|$ has a harmonic majorant, $N$ is characterized by boundedness of the radial $\\log^+$ means (5.1), and a subharmonic $v$ is majorized by a Poisson integral iff $v^+=\\max(v,0)$ has a harmonic majorant."
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §6.3, the paragraph before Theorem 6.21 and Theorem 6.21"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "printed pp. 67-69: the original definition of $N$ by $\\sup_{0\\le r<1}\\int_{\\mathbb T}\\log^+|f(r\\xi)|d\\xi<\\infty$ and its equivalence with the quotient description."
---

## Statement

Let $F:\mathbb D\to\mathbb C$ be holomorphic and put $u:=\log^+|F|$. Then $u$
has a harmonic majorant on $\mathbb D$ if and only if
$$\sup_{0<r<1}\int_{\mathbb T}\log^+|F(r\zeta)|\,dm(\zeta)<+\infty.$$
The forward implication is immediate from the mean value property of a harmonic
majorant; the converse is the Poisson-modification construction below.

## Facts & Assumptions

**Given:** A holomorphic function $F$ on the unit disc $\mathbb D$, the function $u=\log^+|F|=\max(\log|F|,0)$ with $\log|F(z)|=-\infty$ at zeros of $F$, the number $C:=\sup_{0<r<1}\int_{\mathbb T}u(r\zeta)\,dm(\zeta)$ where it occurs, and the radii $r_n:=1-1/(n+1)\uparrow1$ of the converse construction.

[L1] $\log|F|$ is subharmonic on $\mathbb D$, and a finite maximum of subharmonic functions is subharmonic; subharmonic functions are upper semicontinuous by definition. Hence $u=\max(\log|F|,0)$ is subharmonic and upper semicontinuous, and $u\ge0$ everywhere ([[thm-log-modulus-of-a-holomorphic-function-is-subharmonic]], [[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]], [[def-plane-subharmonic-function]]).

[L2] Since $u$ is upper semicontinuous on $\mathbb D$, on every circle $\partial D(0,r)$ the boundary data $u_r$ are upper semicontinuous and bounded above, its average is a well-defined element of $[-\infty,\infty)$, and there exist boundary approximations $\phi_n\downarrow u\big|_{\partial D(0,r)}$ by continuous functions; the associated harmonic functions $h_n$ on $D(0,r)$, continuous on $\overline{D(0,r)}$, with boundary values $\phi_n$ exist uniquely by the Poisson boundary-value theorem, and the Poisson modification $P_{D(0,r)}u$ is $P_{D(0,r)}u=\inf_nh_n$ on $D(0,r)$ ([[lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined]], [[def-poisson-modification-of-a-subharmonic-function]], [[thm-poisson-integral-solves-the-disc-dirichlet-problem]]).

[L3] The Poisson modification $H_r:=P_{D(0,r)}u$ is well defined, subharmonic on $\mathbb D$, harmonic on $D(0,r)$, satisfies $H_r\ge u$ on $\mathbb D$ and equals $u$ outside $D(0,r)$; moreover $h_n\ge H_r\ge u$ on $D(0,r)$ for every boundary approximation ([[thm-poisson-modification-preserves-subharmonicity-and-majorizes]]).

[L4] Every plane harmonic function $h$ satisfies the circle mean-value property $h(a)=\frac{1}{2\pi}\int_0^{2\pi}h(a+Re^{it})\,dt$ for every closed disc $\overline{D(a,R)}$ in its domain ([[thm-mean-value-property-for-plane-harmonic-functions]], [[def-mean-value-property-for-plane-functions]]). For a continuous $G$ on $\mathbb T$ one has $\int_{\mathbb T}G\,dm=\int_{[0,1)}G(e^{2\pi it})\,dt=\frac{1}{2\pi}\int_0^{2\pi}G(e^{is})\,ds$, the last step by the linear change of variables $s=2\pi t$ ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[def-poisson-integral-of-finite-boundary-measure]], [[cor-c-one-change-of-variables-for-l-one-functions]]); in particular $\int_{\mathbb T}u(r\zeta)\,dm(\zeta)=\frac{1}{2\pi}\int_0^{2\pi}u(re^{is})\,ds$.

[L5] If $0\le f_1\le f_2\le\cdots$ are measurable with $f_n\uparrow f$ pointwise, then $\int f_n\,d\mu\uparrow\int f\,d\mu$; consequently a decreasing sequence $\phi_1\ge\phi_2\ge\cdots\ge u\ge0$ of measurable functions with $\int\phi_1\,d\mu<+\infty$ satisfies $\int\phi_n\,d\mu\downarrow\int u\,d\mu$ ([[thm-monotone-convergence-for-the-integral]]).

[L6] (Minimum principle.) If $k$ is harmonic on a bounded domain $\Omega$ and continuous on $\overline{\Omega}$, then $\inf_{\overline{\Omega}}k=\inf_{\partial\Omega}k$ ([[thm-maximum-and-minimum-principles-for-plane-harmonic-functions]]).

[L7] (Harnack.) A positive harmonic function $k$ on a neighbourhood of $\overline{D(a,R)}$ satisfies $k(z)\le\frac{R+\rho}{R-\rho}k(a)$ for $|z-a|=\rho<R$. If $(k_n)$ is an increasing sequence of harmonic functions on a domain $\Omega$, then either $k_n\to+\infty$ pointwise on $\Omega$, or $k_n$ converges locally uniformly on $\Omega$ to a harmonic limit ([[thm-harnack-inequality-on-a-disc]], [[thm-harnack-convergence-principle-for-plane-harmonic-functions]]).



## Proof

**Proof technique:** direct.

1.1 Forward implication. Suppose $h$ is a harmonic majorant of $u$ on $\mathbb D$, i.e. $h$ is harmonic and $h\ge u$. Fix $0<r<1$; $h$ is harmonic on a neighbourhood of $\overline{D(0,r)}$, so integrating $u(r\zeta)\le h(r\zeta)$ over $\mathbb T$ and applying the mean-value property in torus form gives $$\int_{\mathbb T}u(r\zeta)\,dm(\zeta)\le\int_{\mathbb T}h(r\zeta)\,dm(\zeta)=h(0)<+\infty.$$ Taking the supremum over $r$ gives the stated bound, so the forward implication holds. [given, L4, algebra]

1.2 The function $u$ is subharmonic, upper semicontinuous and nonnegative. [L1]

1.3 The modifications and their values at the origin. Fix $0<r<1$ and let $(\phi_n)$ and $(h_n)$ be as in [L2]; set $H_r:=P_{D(0,r)}u$. By [L3], $H_r$ is harmonic on $D(0,r)$, $H_r\ge u$ on $\mathbb D$, and $H_r=\inf_nh_n$ on $D(0,r)$. Each $h_n$ is harmonic on a neighbourhood of $\overline{D(0,r)}$ with continuous boundary values $\phi_n$, so the mean-value property and the torus normalization [L4] give $$h_n(0)=\frac{1}{2\pi}\int_0^{2\pi}\phi_n(re^{is})\,ds=\int_{\mathbb T}\phi_n(r\zeta)\,dm(\zeta).$$ Since $\phi_n\ge u\ge0$ and $\phi_n\downarrow u$, and $\int_{\mathbb T}\phi_1(r\zeta)\,dm(\zeta)<+\infty$ because $\phi_1$ is continuous on the compact circle, the decreasing monotone convergence statement [L5] gives $$H_r(0)=\inf_nh_n(0)=\lim_n\int_{\mathbb T}\phi_n(r\zeta)\,dm(\zeta)=\int_{\mathbb T}u(r\zeta)\,dm(\zeta).$$ [given, L2, L3, L4, L5, algebra]

1.4 Monotonicity in the radius. Let $0<r<\rho<1$. We show $H_\rho\ge H_r$ on $D(0,r)$. Fix $n,m\ge1$, let $\phi^{(r)}_m$ be the boundary function of the $m$-th approximant $h^{(r)}_m$ of the modification on $D(0,r)$ (so $h^{(r)}_m$ is continuous on $\overline{D(0,r)}$ and $\phi^{(r)}_m\ge u$ on the circle), and let $h^{(\rho)}_n$ be the $n$-th approximant on $D(0,\rho)$. By [L3], $h^{(\rho)}_n\ge u$ on $D(0,\rho)$, hence on $D(0,r)$; and on $\partial D(0,r)$ one has $h^{(r)}_m=\phi^{(r)}_m\ge u$. Therefore the harmonic function $k:=h^{(\rho)}_n-h^{(r)}_m+\tfrac1m$, continuous on $\overline{D(0,r)}$, satisfies $k\ge\tfrac1m>0$ on $\partial D(0,r)$, so the minimum principle [L6] gives $k\ge0$ on $D(0,r)$, that is $h^{(\rho)}_n\ge h^{(r)}_m-\tfrac1m$ there. Letting $m\to\infty$ gives $h^{(\rho)}_n\ge H_r$ on $D(0,r)$, and letting $n\to\infty$ gives $H_\rho\ge H_r$ on $D(0,r)$. [given, L2, L3, L6, algebra]

2.1 Harnack bounds. Fix $z\in\mathbb D$ and let $r\in(0,1)$ with $r>|z|$. By [L3], $H_r\ge u\ge0$ on $D(0,r)$; applying the Harnack inequality [L7] to $H_r+\varepsilon$ for $\varepsilon>0$ on a disc $\overline{D(0,R)}$ with $|z|<R<r$ and letting $\varepsilon\downarrow0$ gives $$0\le H_r(z)\le\frac{R+|z|}{R-|z|}\,H_r(0)\le\frac{R+|z|}{R-|z|}\,C.$$ Letting $R\uparrow1$ along $R<1$ yields $0\le H_r(z)\le\frac{1+|z|}{1-|z|}\,C$. [step 1.3, L3, L7, algebra]

2.2 Construction of the harmonic majorant. Put $r_n:=1-1/(n+1)$ and $H_n:=H_{r_n}$. Fix $R<1$. For all $n$ with $r_n>R$, the function $H_n$ is harmonic on a neighbourhood of $\overline{D(0,R)}$ (namely on $D(0,r_n)$), and by step 1.4 the sequence $(H_n)_{n\ge n_R}$ is increasing on $D(0,R)$; it is bounded at the origin by $C$ by step 1.3, so the increasing Harnack convergence principle [L7] provides a harmonic function $H^{(R)}$ on $D(0,R)$ with $H_n\to H^{(R)}$ locally uniformly there. For $R<R'<1$ the two limits $H^{(R)}$ and $H^{(R')}$ agree on $D(0,R)$ by uniqueness of pointwise limits of the same sequence, so there is a single harmonic function $H$ on $\mathbb D$ with $H_n\to H$ locally uniformly on $\mathbb D$. For each fixed $z\in\mathbb D$ and all $n$ with $r_n>|z|$ one has $H_n(z)\ge u(z)$ by [L3], and $(H_n(z))$ is eventually nondecreasing by step 1.4, so $H(z)=\lim_nH_n(z)\ge u(z)$. Hence $H$ is a harmonic majorant of $u$ on $\mathbb D$. [step 1.3, step 1.4, L3, L7, algebra]

3.1 Assembly. If a harmonic majorant exists, step 1.1 bounds the radial $u$-means by its value at the origin, so the supremum is finite. Conversely, if the supremum is finite and equal to $C$, step 2.2 constructs a harmonic majorant $H$ of $u$ on $\mathbb D$; the construction uses the subharmonicity and upper semicontinuity of $u$ from step 1.2 together with the Poisson modifications, so both implications hold. [step 1.1, step 1.2, step 2.2, L1] ∎
