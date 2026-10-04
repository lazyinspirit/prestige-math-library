---
id: lem-hardy-radial-means-are-monotone
kind: lemma
title: "Radial p-means of a holomorphic function are nondecreasing"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-analytic-hardy-space-disc, cor-modulus-powers-of-holomorphic-functions-are-subharmonic, cor-holomorphic-functions-are-real-analytic-and-smooth, def-poisson-modification-of-a-subharmonic-function, thm-poisson-modification-preserves-subharmonicity-and-majorizes, thm-poisson-integral-solves-the-disc-dirichlet-problem, def-poisson-kernel-on-the-disc, lem-poisson-kernel-properties-on-the-disc, def-poisson-integral-of-finite-boundary-measure, thm-mean-value-property-for-plane-harmonic-functions, def-mean-value-property-for-plane-functions, thm-jensen-inequality-for-expectation, cor-lyapunov-moment-inequality-on-a-probability-space, def-the-one-dimensional-torus-and-normalized-haar-integral]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.1, §5.6"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "Properties of H^p spaces, printed pp. 26-28 and Jensen section, printed pp. 32-34: monotone radial means and the containment H^q(D) in H^p(D)."
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter I §6 and II §1"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "Subharmonic functions, printed pp. 35-37, and Definitions, printed p. 49: monotonicity of the means of a subharmonic function and the containment of the H^p classes."
---

## Statement

Let $f:\mathbb D\to\mathbb C$ be holomorphic and let $0<p<\infty$. For all
$0<r\le R<1$,
$$\int_{\mathbb T}|f(r\zeta)|^p\,dm(\zeta)\le\int_{\mathbb T}|f(R\zeta)|^p\,dm(\zeta).$$
Consequently, for $f\in H^p(\mathbb D)$ the nondecreasing radial means satisfy
$$\|f\|_{H^p}^p=\lim_{r\uparrow1}\int_{\mathbb T}|f(r\zeta)|^p\,dm(\zeta),$$
so that
$\|f\|_{H^p}=\lim_{r\uparrow1}\|f_r\|_{L^p}$. Moreover, for $0<p<q\le\infty$
one has $H^q(\mathbb D)\subseteq H^p(\mathbb D)$ and
$\|f\|_{H^p}\le\|f\|_{H^q}$ for every $f\in H^q(\mathbb D)$.

## Facts & Assumptions

**Given:** A holomorphic function $f$ on $\mathbb D$, an exponent $0<p<\infty$, radii $0<r\le R<1$, and the function $u:=|f|^p$.

[L1] If $f$ is not identically zero, then $u=|f|^p$ is subharmonic on $\mathbb D$; $f$ is smooth, hence continuous, so $u$ is continuous on $\mathbb D$ ([[cor-modulus-powers-of-holomorphic-functions-are-subharmonic]], [[cor-holomorphic-functions-are-real-analytic-and-smooth]]).

[L2] For a subharmonic function $u$ on $\mathbb D$ and a disc $D(0,R)\Subset\mathbb D$, the Poisson modification $P_{D(0,R)}u$ is harmonic on $D(0,R)$ and satisfies $P_{D(0,R)}u\ge u$ on $\mathbb D$, where it is defined by boundary approximations $\phi_n\downarrow u|_{\partial D(0,R)}$ and the unique harmonic extensions $h_n$ of $\phi_n$ to the disc; when $u$ is continuous on $\overline{D(0,R)}$ one may take $\phi_n:=u|_{\partial D(0,R)}+1/(n+1)$ for $n\ge0$. If $H$ is the Poisson extension of the continuous boundary datum $u|_{\partial D(0,R)}$, uniqueness gives $h_n=H+1/(n+1)$, so $P_{D(0,R)}u=H$ inside the disc ([[def-poisson-modification-of-a-subharmonic-function]], [[thm-poisson-modification-preserves-subharmonicity-and-majorizes]], [[thm-poisson-integral-solves-the-disc-dirichlet-problem]]).

[L3] For continuous boundary data $\phi$ on the circle of radius $R$, the function $$z\mapsto\int_{\mathbb T}P(z/R,\eta)\,\phi(R\eta)\,dm(\eta)\qquad(|z|<R)$$ is the unique harmonic extension of $\phi$ to $D(0,R)$, continuous on the closed disc, where $P$ is the Poisson kernel of the unit disc ([[thm-poisson-integral-solves-the-disc-dirichlet-problem]], [[def-poisson-kernel-on-the-disc]], [[def-poisson-integral-of-finite-boundary-measure]]). In particular its value at $z=0$ is $\int_{\mathbb T}\phi(R\eta)\,dm(\eta)$, because $P(0,\eta)=1$.

[L4] A harmonic function $w$ on a neighbourhood of the closed disc $\overline{D(0,r)}$ satisfies $w(0)=\int_{\mathbb T}w(r\zeta)\,dm(\zeta)$, the circle mean-value property in the torus normalization ([[thm-mean-value-property-for-plane-harmonic-functions]], [[def-mean-value-property-for-plane-functions]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[L5] On the probability space $(\mathbb T,m)$, for $0<p<q<\infty$ and measurable $g$ one has $\bigl(\int_{\mathbb T}|g|^p\,dm\bigr)^{1/p}\le\bigl(\int_{\mathbb T}|g|^q\,dm\bigr)^{1/q}$. The case of an infinite right-hand side is immediate. Otherwise, for $p\ge1$ use [[cor-lyapunov-moment-inequality-on-a-probability-space]]; for $p<1$, apply [[thm-jensen-inequality-for-expectation]] to the integrable variable $X=|g|^q$ and the convex function $\varphi(t)=-t^{p/q}$ on $[0,\infty)$. Its composition is integrable because $X^{p/q}\le1+X$, and Jensen gives $\int|g|^p\,dm\le(\int|g|^q\,dm)^{p/q}$. For $q=\infty$, integrating the almost-everywhere bound $|g|^p\le\|g\|_\infty^p$ gives the same comparison for every $p>0$.

[L6] The classes $H^p(\mathbb D)$, $0<p\le\infty$, and their (quasi-)norms are defined by the suprema of the radial $L^p$ means over $0\le r<1$ ([[def-analytic-hardy-space-disc]]).



## Proof

**Proof technique:** direct.

1.1 Reduction and subharmonicity. If $f\equiv0$, then both sides of the asserted inequality vanish and the further claims are immediate, so assume $f$ is not identically zero. Then $u=|f|^p$ is subharmonic on $\mathbb D$ and continuous, by [L1]. [given, L1]

1.2 The $L^p$ comparison. Let $0<p<q<\infty$ and let $g$ be measurable on $\mathbb T$. By [L5], $\|g\|_{L^p}\le\|g\|_{L^q}$; and if $q=\infty$, $\|g\|_{L^p}\le\|g\|_\infty$. [L5]

2.1 The modification is the Poisson extension of the boundary data. Fix $0<R<1$. By [L2] and continuity of $u$ on $\overline{D(0,R)}$ (a compact subset of $\mathbb D$), the Poisson modification $h:=P_{D(0,R)}u$ is harmonic on $D(0,R)$, satisfies $h\ge u$ on $\mathbb D$, and is the Poisson extension of $u|_{\partial D(0,R)}$; hence by [L3], $$h(z)=\int_{\mathbb T}P(z/R,\eta)\,u(R\eta)\,dm(\eta)\quad(|z|<R),\qquad h(0)=\int_{\mathbb T}u(R\eta)\,dm(\eta).$$ [step 1.1, L2, L3]

2.2 Containment of the classes. Let $0<p<q\le\infty$ and $f\in H^q(\mathbb D)$; every radius $r\in[0,1)$ satisfies $\|f_r\|_{L^p}\le\|f_r\|_{L^q}$ by step 1.2, and $\|f_r\|_{L^q}\le\|f\|_{H^q}$ by the definition of the supremum when $q<\infty$, while $\|f_r\|_{L^q}\le\|f\|_{H^q}$ for $q=\infty$ as well because $|f_r|\le\|f\|_{H^\infty}$ pointwise. Taking suprema over $r$ gives $\|f\|_{H^p}\le\|f\|_{H^q}<+\infty$, so $f\in H^p(\mathbb D)$ and the containment $H^q(\mathbb D)\subseteq H^p(\mathbb D)$ holds with the asserted norm comparison. [step 1.2, L6, algebra]

3.1 Monotonicity of the means. Let $0<r\le R<1$. The case $r=R$ is an equality of the two integrals, so assume $r<R$. Step 2.1 gives $h\ge u$ on $D(0,r)$ and $h(0)=\int_{\mathbb T}u(R\eta)\,dm(\eta)$; since $h$ is harmonic on $D(0,R)$, hence on a neighbourhood of the closed disc $\overline{D(0,r)}$ for $r<R$, integrating the inequality $u(r\zeta)\le h(r\zeta)$ over $\mathbb T$ against $m$ and applying the mean value property [L4] gives $$\int_{\mathbb T}|f(r\zeta)|^p\,dm(\zeta)=\int_{\mathbb T}u(r\zeta)\,dm(\zeta)\le\int_{\mathbb T}h(r\zeta)\,dm(\zeta)=h(0)=\int_{\mathbb T}|f(R\eta)|^p\,dm(\eta).$$ [step 2.1, L4, algebra]

4.1 The supremum is the limit. Let $f\in H^p(\mathbb D)$. Continuity of $u=|f|^p$ at $0$ gives $\sup_{\zeta\in\mathbb T}|u(r\zeta)-u(0)|\to0$ as $r\downarrow0$. Thus the mean inequality of step 3.1 also holds when the smaller radius is $0$. The map $r\mapsto\int_{\mathbb T}|f(r\zeta)|^p\,dm(\zeta)$ is therefore nondecreasing on $[0,1)$ and bounded by $\|f\|_{H^p}^p<+\infty$ by [L6]. A nondecreasing bounded real function on $[0,1)$ has supremum equal to its limit as $r\uparrow1$, so $$\sup_{0\le r<1}\Bigl(\int_{\mathbb T}|f(r\zeta)|^p\,dm(\zeta)\Bigr)^{1/p}=\lim_{r\uparrow1}\Bigl(\int_{\mathbb T}|f(r\zeta)|^p\,dm(\zeta)\Bigr)^{1/p},$$ that is, $\|f\|_{H^p}=\lim_{r\uparrow1}\|f_r\|_{L^p}$. [step 1.1, step 3.1, L6, algebra]

5.1 Assembly. The mean inequality is step 3.1, the limit description of the norm is step 4.1, and the containment together with the norm comparison is step 2.2; all were proved under the given hypotheses. [step 3.1, step 4.1, step 2.2] ∎
