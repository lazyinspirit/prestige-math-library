---
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for def-analytic-hardy-space-disc and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-20; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"c4233ff621f024ef996fc26518d1cda488364d7de76c7aa30cf4d89bb9935017","evidence":["research/frontier-38-owner-30-reader-20.md","research/frontier-38-owner-30-reader-findings-20.json","research/frontier-38-owner-30-dispatch/reader-reader-20.result.json","research/frontier-38-owner-30-step5-hash-20-post-5a.json","research/frontier-38-owner-30-alpha-batch-20-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-20.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/def-analytic-hardy-space-disc.md","historical_raw_sha256":"f8326f63fe2425f3f04befd69639c90694c050c2b420f9d59f917b57f8e82808","transformations":["publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:34:44.642Z"}}
id: def-analytic-hardy-space-disc
kind: definition
title: "Analytic Hardy spaces on the unit disc"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-complex-lp-and-euclidean-test-function-conventions, thm-complex-holder-minkowski-and-the-quotient-norm, def-complex-differentiability-holomorphic-and-entire, def-the-one-dimensional-torus-and-normalized-haar-integral, def-essential-supremum-with-respect-to-a-measure, def-unit-disc-upper-half-plane-and-blaschke-factor, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, def-countable-choice, thm-complex-polynomials-and-rational-functions-are-holomorphic, lem-geometric-sequence-null]
justified_by: [lem-hardy-radial-means-are-monotone]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.1"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "Properties of H^p spaces, printed pp. 26-28: the radial-mean definition of H^p(D), the quasi-norm for p<1 and the containment H^q in H^p."
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §1"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "Definitions, printed pp. 49-51: the H^p(dt) and H^p(D) definitions, the p<1 quasi-norm and the completeness remark."
---

## Definition

Assume [[def-countable-choice|countable choice]]. Let $\mathbb T=\mathbb R/\mathbb Z$
be the one-dimensional torus, identified with the Euclidean unit circle through
$\varphi([t])=e^{2\pi it}$, and let $m$ be its normalized Haar measure, a
probability measure on the compact metric space $\mathbb T$
([[def-the-one-dimensional-torus-and-normalized-haar-integral]]). Let
$$\mathbb D:=\{\,z\in\mathbb C:|z|<1\,\}$$
be the unit disc of [[def-unit-disc-upper-half-plane-and-blaschke-factor]], and
let $f:\mathbb D\to\mathbb C$ be a function, holomorphic in the sense of
[[def-complex-differentiability-holomorphic-and-entire]] when required below.
For $0\le r<1$ write
$$f_r:\mathbb T\to\mathbb C,\qquad f_r(\zeta):=f(r\zeta).$$
If $f$ is holomorphic, each $f_r$ is continuous, hence measurable with finite
modulus; for $0<p<\infty$ the number
$$\Bigl(\int_{\mathbb T}|f(r\zeta)|^p\,dm(\zeta)\Bigr)^{1/p}$$
is therefore a well-defined element of $[0,+\infty)$, computed from the
continuous representative of $f_r$ in the conventions of
[[def-complex-lp-and-euclidean-test-function-conventions]].

**The classes $\mathbf{H^p(\mathbb D)}$.** For $0<p<\infty$ define
$$H^p(\mathbb D):=\Bigl\{\,f\ \text{holomorphic on}\ \mathbb D:\ \|f\|_{H^p}:=\sup_{0\le r<1}\Bigl(\int_{\mathbb T}|f(r\zeta)|^p\,dm(\zeta)\Bigr)^{1/p}<+\infty\,\Bigr\},$$
and for $p=\infty$ define
$$H^\infty(\mathbb D):=\Bigl\{\,f\ \text{holomorphic on}\ \mathbb D:\ \|f\|_\infty:=\sup_{z\in\mathbb D}|f(z)|<+\infty\,\Bigr\}.$$
Writing $u_r(\zeta):=u(r\zeta)$ for any function $u$ on $\mathbb D$, the
definition of $H^\infty$ is equivalently
$\|f\|_\infty=\sup_{0\le r<1}\operatorname{ess\,sup}_{\mathbb T}|f_r|$: a
continuous function on the compact space $\mathbb T$ has the same supremum and
essential supremum, because a nonempty open subset of $\mathbb T$ has positive
$m$-measure, and every $z\in\mathbb D$ has the form $r\zeta$ with $r=|z|$ and
$\zeta\in\mathbb T$ ([[def-essential-supremum-with-respect-to-a-measure]],
[[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

**The (quasi-)norm assertions.** For $1\le p\le\infty$, $\|\cdot\|_{H^p}$ is a
norm on the complex vector space $H^p(\mathbb D)$. Homogeneity
$\|\lambda f\|_{H^p}=|\lambda|\,\|f\|_{H^p}$ for $\lambda\in\mathbb C$ and the
triangle inequality
$\|f+g\|_{H^p}\le\|f\|_{H^p}+\|g\|_{H^p}$ follow by taking suprema over $r$ of
the corresponding statements for the $L^p$ classes of the continuous functions
$f_r,g_r$ on the probability space $(\mathbb T,m)$
([[thm-complex-holder-minkowski-and-the-quotient-norm]]); the case $p=\infty$
is the elementary inequality between suprema of moduli, and
$\|f\|_\infty=\sup_{r<1}\sup_{\zeta}|f(r\zeta)|$ holds because the radii and
circle points range over $\mathbb D$. All $H^p(\mathbb D)$ are closed under
finite linear combinations: sums and scalar multiples of holomorphic functions
are holomorphic ([[def-complex-differentiability-holomorphic-and-entire]]), and
the (quasi-)norm of a finite linear combination is finite by the inequalities
just stated.

For $0<p<1$, $\|\cdot\|_{H^p}$ is a quasi-norm, not a norm. For complex numbers
$a,b$ one has $|a+b|^p\le|a|^p+|b|^p$, because the power function is
subadditive on $[0,\infty)$ when $0<p\le1$: for $x,y\ge0$ it suffices to prove
$(x+y)^p\le x^p+y^p$, which is trivial when $y=0$, and for $y>0$ and $t=x/y\ge0$
is the claim $(1+t)^p\le 1+t^p$; the function
$h(t):=1+t^p-(1+t)^p$ is continuous on $[0,\infty)$ with $h(0)=0$ and, for
$t>0$, $h'(t)=p\,(t^{p-1}-(1+t)^{p-1})\ge0$ because $p-1\le0$ and $t\le 1+t$, so
$h$ is nondecreasing and $h\ge0$. Integrating at each radius gives
$$\int_{\mathbb T}|f(r\zeta)+g(r\zeta)|^p\,dm(\zeta)\le\int_{\mathbb T}|f(r\zeta)|^p\,dm(\zeta)+\int_{\mathbb T}|g(r\zeta)|^p\,dm(\zeta),$$
and taking suprema over $r$ yields
$\|f+g\|_{H^p}^p\le\|f\|_{H^p}^p+\|g\|_{H^p}^p$. Writing
$A:=\|f\|_{H^p}$, $B:=\|g\|_{H^p}$ and $x:=A/(A+B)$ when $A+B>0$, the bound
$x^p+(1-x)^p\le 2^{1-p}$ for $0\le x\le1$ (the maximum of the concave left side
is at $x=1/2$) gives $A^p+B^p\le 2^{1-p}(A+B)^p$, hence
$$\|f+g\|_{H^p}\le 2^{\frac1p-1}\bigl(\|f\|_{H^p}+\|g\|_{H^p}\bigr),$$
the quasi-norm statement; homogeneity and the case $A+B=0$ are immediate. The
quasi-norm inequality for $p<1$ is the only place where the constant
$2^{1/p-1}$ enters, and no further structure (completeness, separability,
duality) of these spaces is asserted here or used later.

The ordinary triangle inequality does fail for each $0<p<1$. Put
$f_n(z)=(1+z)^n$, $g_n(z)=(1-z)^n$ for positive integers $n$, holomorphic
polynomials ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).
Any polynomial $h$ is bounded on the closed disc, hence lies in $H^p$; the radial-means certifier
[[lem-hardy-radial-means-are-monotone]] and uniform boundary continuity give
$\|h\|_{H^p}^p=\int_{\mathbb T}|h(\zeta)|^pdm$.
Write $A_n=\int|f_n|^pdm=\int|g_n|^pdm$, using Haar invariance under
$\zeta\mapsto-\zeta$, and $D_n=\int\min(|f_n|^p,|g_n|^p)dm$.
The already proved subadditivity gives
$|u+v|^p\ge\max(|u|^p,|v|^p)-\min(|u|^p,|v|^p)$, hence
$\int|f_n+g_n|^pdm\ge2A_n-2D_n$.
Since $|1+\zeta|^2+|1-\zeta|^2=4$, $D_n\le2^{np/2}$.
The open set $U=\{\zeta\in\mathbb T:|1+\zeta|>\sqrt3\}$ contains $1$,
so $c=m(U)>0$ and $A_n\ge c\,3^{np/2}$
([[def-the-one-dimensional-torus-and-normalized-haar-integral]]).
Thus $D_n/A_n\le c^{-1}((2/3)^{p/2})^n\to0$
([[lem-geometric-sequence-null]]). For sufficiently large $n$,
$D_n/A_n<1-2^{p-1}$, so
$\|f_n+g_n\|_{H^p}^p>2^pA_n$ and
$\|f_n+g_n\|_{H^p}>2A_n^{1/p}=\|f_n\|_{H^p}+\|g_n\|_{H^p}$.
This proves the claimed failure without any later factorization or
outer-function existence result.

For $p=\infty$, $\|f\|_\infty=0$ immediately gives $f\equiv0$.
For $0<p<\infty$, if $\|f\|_{H^p}=0$, then
$\int_{\mathbb T}|f(r\zeta)|^p\,dm(\zeta)=0$ for every $0\le r<1$, so
$|f_r|^p=0$ $m$-almost everywhere
([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]), hence
$f_r=0$ everywhere since $f_r$ is continuous; taking $r=|z|$ for $z\ne0$ and
$r=0$ gives $f\equiv0$. Thus $\|\cdot\|_{H^p}$ is a genuine norm on
$H^p(\mathbb D)$ for $1\le p\le\infty$ and a genuine quasi-norm for $0<p<1$.

This item defines the classes and their (quasi-)norms only. The monotonicity of
the radial $p$-means in $r$, and with it the containments
$H^q(\mathbb D)\subseteq H^p(\mathbb D)$ for $q>p$ together with
$\|f\|_{H^p}\le\|f\|_{H^q}$, are proved in
[[lem-hardy-radial-means-are-monotone]], which is the item that certifies this
definition. No choice principle beyond countable choice is used.
