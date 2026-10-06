---
id: lem-nevanlinna-sup-mean-criterion
kind: lemma
title: "A harmonic majorant of log^+|F| exists exactly when the radial log^+ means are bounded"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-plane-subharmonic-function, thm-log-modulus-of-a-holomorphic-function-is-subharmonic, lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity, def-poisson-modification-of-a-subharmonic-function, thm-poisson-modification-preserves-subharmonicity-and-majorizes, def-poisson-integral-on-the-disc, def-poisson-integral-of-finite-boundary-measure, thm-maximum-and-minimum-principles-for-plane-harmonic-functions, thm-harnack-inequality-on-a-disc, thm-harnack-convergence-principle-for-plane-harmonic-functions, thm-mean-value-property-for-plane-harmonic-functions, def-mean-value-property-for-plane-functions, lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined, cor-c-one-change-of-variables-for-l-one-functions, def-the-one-dimensional-torus-and-normalized-haar-integral, thm-poisson-integral-solves-the-disc-dirichlet-problem]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader plus completed current item adjudication proof read; item lem-nevanlinna-sup-mean-criterion; evidence research/frontier-38-owner-30-reader-20.md, research/frontier-38-owner-30-reader-findings-20.json, research/frontier-38-owner-30-alpha-batch-20-5a-decisions.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
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

**Given:** A holomorphic function $F$ on the unit disc $\mathbb D$, the function $u=\log^+|F|=\max(\log|F|,0)$ with $\log|F(z)|=-\infty$ at zeros of $F$, the number $C:=\sup_{0<r<1}\int_{\mathbb T}u(r\zeta)\,dm(\zeta)$ where it occurs, and the radii $r_n:=1-1/(n+1)\uparrow1$, $n\ge1$ of the converse construction.

[L1] If $F\not\equiv0$, then $\log|F|$ is subharmonic on $\mathbb D$, and a finite maximum of subharmonic functions is subharmonic; subharmonic functions are upper semicontinuous by definition. Hence $u=\max(\log|F|,0)$ is subharmonic and upper semicontinuous; for $F\equiv0$ the same holds because $u=0$. In both cases $u\ge0$ everywhere ([[thm-log-modulus-of-a-holomorphic-function-is-subharmonic]], [[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]], [[def-plane-subharmonic-function]]).

[L2] Since $u$ is upper semicontinuous on $\mathbb D$, on every circle $\partial D(0,r)$ the boundary data $u_r$ are upper semicontinuous and bounded above, its average is a well-defined element of $[-\infty,\infty)$, and there exist boundary approximations $\phi_n\downarrow u\big|_{\partial D(0,r)}$ by continuous functions; the associated harmonic functions $h_n$ on $D(0,r)$, continuous on $\overline{D(0,r)}$, with boundary values $\phi_n$ exist uniquely by the Poisson boundary-value theorem, and the Poisson modification $P_{D(0,r)}u$ is $P_{D(0,r)}u=\inf_nh_n$ on $D(0,r)$ ([[lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined]], [[def-poisson-modification-of-a-subharmonic-function]], [[thm-poisson-integral-solves-the-disc-dirichlet-problem]]).

[L3] The Poisson modification $H_r:=P_{D(0,r)}u$ is well defined, subharmonic on $\mathbb D$, harmonic on $D(0,r)$, satisfies $H_r\ge u$ on $\mathbb D$ and equals $u$ outside $D(0,r)$; moreover $h_n\ge H_r\ge u$ on $D(0,r)$ for every boundary approximation ([[thm-poisson-modification-preserves-subharmonicity-and-majorizes]]).

[L4] Every plane harmonic function $h$ satisfies the circle mean-value property $h(a)=\frac{1}{2\pi}\int_0^{2\pi}h(a+Re^{it})\,dt$ for every closed disc $\overline{D(a,R)}$ in its domain ([[thm-mean-value-property-for-plane-harmonic-functions]], [[def-mean-value-property-for-plane-functions]]). For a continuous $G$ on $\mathbb T$ one has $\int_{\mathbb T}G\,dm=\int_{[0,1)}G(e^{2\pi it})\,dt=\frac{1}{2\pi}\int_0^{2\pi}G(e^{is})\,ds$, the last step by the linear change of variables $s=2\pi t$ ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[def-poisson-integral-of-finite-boundary-measure]], [[cor-c-one-change-of-variables-for-l-one-functions]]); in particular $\int_{\mathbb T}u(r\zeta)\,dm(\zeta)=\frac{1}{2\pi}\int_0^{2\pi}u(re^{is})\,ds$.


[L6] (Minimum principle.) If $k$ is harmonic on a bounded domain $\Omega$ and continuous on $\overline{\Omega}$, then $\inf_{\overline{\Omega}}k=\inf_{\partial\Omega}k$ ([[thm-maximum-and-minimum-principles-for-plane-harmonic-functions]]).

[L7] (Harnack.) A positive harmonic function $k$ on a neighbourhood of $\overline{D(a,R)}$ satisfies $k(z)\le\frac{R+\rho}{R-\rho}k(a)$ for $|z-a|=\rho<R$. If $(k_n)$ is an increasing sequence of harmonic functions on a domain $\Omega$, then either $k_n\to+\infty$ pointwise on $\Omega$, or $k_n$ converges locally uniformly on $\Omega$ to a harmonic limit ([[thm-harnack-inequality-on-a-disc]], [[thm-harnack-convergence-principle-for-plane-harmonic-functions]]).



## Proof

**Proof technique:** direct.

1.1 Forward implication. Suppose $h$ is a harmonic majorant of $u$ on $\mathbb D$, i.e. $h$ is harmonic and $h\ge u$. Fix $0<r<1$; $h$ is harmonic on a neighbourhood of $\overline{D(0,r)}$, so integrating $u(r\zeta)\le h(r\zeta)$ over $\mathbb T$ and applying the mean-value property in torus form gives $$\int_{\mathbb T}u(r\zeta)\,dm(\zeta)\le\int_{\mathbb T}h(r\zeta)\,dm(\zeta)=h(0)<+\infty.$$ Taking the supremum over $r$ gives the stated bound, so the forward implication holds. [given, L4, algebra]

1.2 If $F\equiv0$, then $u=0$, its radial means are zero and the zero harmonic function is a majorant, so both conditions hold. Assume henceforth $F\not\equiv0$. The function $u=\log^+|F|$ is subharmonic and nonnegative by [L1]. It is also continuous: $F$ is continuous and $x\mapsto\log^+x$, with value $0$ at $x=0$, is continuous on $[0,\infty)$. [given, L1]

2.1 The modifications and their values at the origin. Since $u$ is continuous by step 1.2, in [L2] choose the specific boundary approximants $\phi_n=u|_{\partial D(0,r)}+1/n$. Their extensions are $h_n=P_r[u]+1/n$, by uniqueness and linearity of the Dirichlet solution. Thus $H_r=P_{D(0,r)}u=P_r[u]$, continuous on the closed radius-$r$ disc, harmonic inside, with boundary value $u$ and $H_r\ge u$ by [L3]. Its mean value at the origin is $H_r(0)=\int_{\mathbb T}u(r\zeta)\,dm(\zeta)$ by [L4]. [step 1.2, L2, L3, L4, algebra]

3.1 Monotonicity in the radius. Let $0<r<\rho<1$. On $\partial D(0,r)$, $H_r=u$ by step 2.1 whereas $H_\rho\ge u$ by [L3]. Both are harmonic on $D(0,r)$ and continuous on its closure, so their difference is nonnegative there by the minimum principle [L6]. Hence $H_\rho\ge H_r$ on $D(0,r)$. [step 2.1, L3, L6, algebra]

3.2 Harnack bounds for the converse. Suppose $C<\infty$. For $|z|<R<r<1$, apply [L7] to $H_r+\varepsilon$ on the radius-$R$ disc and let $\varepsilon\downarrow0$. Using step 2.1 gives $0\le H_r(z)\le(R+|z|)(R-|z|)^{-1}C$. Letting $R\uparrow r$ yields $H_r(z)\le(r+|z|)(r-|z|)^{-1}C$. In particular, for any fixed $|z|<r_0<1$, these values are uniformly bounded for $r\ge r_0$, by $(r_0+|z|)(r_0-|z|)^{-1}C$. [step 2.1, L3, L7, algebra]

4.1 Construction of the harmonic majorant. Put $r_n:=1-1/(n+1)$ for $n\ge1$ and $H_n:=H_{r_n}$. Fix $R<1$. For all $n$ with $r_n>R$, the function $H_n$ is harmonic on a neighbourhood of $\overline{D(0,R)}$ (namely on $D(0,r_n)$), and by step 3.1 the sequence $(H_n)_{n\ge n_R}$ is increasing on $D(0,R)$; it is bounded at the origin by $C$ by step 2.1, so the increasing Harnack convergence principle [L7] provides a harmonic function $H^{(R)}$ on $D(0,R)$ with $H_n\to H^{(R)}$ locally uniformly there. For $R<R'<1$ the two limits $H^{(R)}$ and $H^{(R')}$ agree on $D(0,R)$ by uniqueness of pointwise limits of the same sequence, so there is a single harmonic function $H$ on $\mathbb D$ with $H_n\to H$ locally uniformly on $\mathbb D$. For each fixed $z\in\mathbb D$ and all $n$ with $r_n>|z|$ one has $H_n(z)\ge u(z)$ by [L3], and $(H_n(z))$ is eventually nondecreasing by step 3.1, so $H(z)=\lim_nH_n(z)\ge u(z)$. Hence $H$ is a harmonic majorant of $u$ on $\mathbb D$. [step 2.1, step 3.1, L3, L7, algebra]

5.1 Assembly. If a harmonic majorant exists, step 1.1 bounds the radial $u$-means by its value at the origin, so the supremum is finite. Conversely, if the supremum is finite and equal to $C$, step 4.1 constructs a harmonic majorant $H$ of $u$ on $\mathbb D$; the construction uses the subharmonicity and upper semicontinuity of $u$ from step 1.2 together with the Poisson modifications, so both implications hold. [step 1.1, step 1.2, step 4.1, L1] ∎
