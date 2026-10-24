---
id: ex-power-map-riemann-hurwitz
kind: example
title: Riemann–Hurwitz for the sphere power map
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-ramification-index-and-branch-value
  - thm-proper-holomorphic-map-riemann-surfaces-has-degree
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - thm-riemann-hurwitz-formula
  - def-riemann-sphere-holomorphic-charts
  - def-axiom-of-choice
  - ex-basic-riemann-surface-atlases
  - thm-stereographic-projection-riemann-sphere-homeomorphism
  - rem-riemann-sphere-one-point-compactification
  - thm-complex-nth-roots-and-roots-of-unity
  - thm-complex-polynomials-and-rational-functions-are-holomorphic
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-biholomorphic-map
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 1 §2 and Ch. 4 §§2–3: the sphere power map z^n as the standard totally ramified example, with the Riemann–Hurwitz check."
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Chs. 2–3 and 6: the local model z^n and the Riemann–Hurwitz count for the sphere power map."
    - title: "Vladimir Hinich, Riemann Surfaces, lecture 7, §8.5"
      url: https://math.haifa.ac.il/hinich/RSlec/lec7.pdf
      locator: "§8.5.1–8.5.3, printed pp. 8–9: the Riemann–Hurwitz bookkeeping for a degree-n map of the sphere."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

Assume the Axiom of Choice. For every $n\ge1$ the **power map**
$$f:\widehat{\mathbb C}\to\widehat{\mathbb C},\qquad f(z)=z^n\ (z\in\mathbb C),\qquad f(\infty)=\infty,$$
is a holomorphic map of the Riemann sphere of degree $n$, with
$e_0(f)=n$, $e_\infty(f)=n$ and $e_z(f)=1$ for every
$z\in\mathbb C^\times$. Riemann–Hurwitz for $f$ therefore reads
$$-2=-2n+2(n-1),$$
both sides equal to $-2$, with the genus of the sphere equal to $0$. For
$n=1$ the map is the identity, all indices equal $1$, and there is no
ramification.

## Facts & Assumptions

**Given:** An integer $n\ge1$ and the map $f(z)=z^n$ on $\mathbb C$, $f(\infty)=\infty$.

[F1] The standard charts of $\widehat{\mathbb C}$ are $\phi_0(z)=z$ on $U_0=\widehat{\mathbb C}\setminus\{\infty\}$ and $\phi_\infty(z)=1/z$ on $U_\infty=\widehat{\mathbb C}\setminus\{0\}$, with transition $w\mapsto1/w$ on the overlap ([[def-riemann-sphere-holomorphic-charts]]); these charts make $\widehat{\mathbb C}$ a Riemann surface ([[ex-basic-riemann-surface-atlases]]) that is compact Hausdorff, being the one-point compactification of $\mathbb C$ ([[rem-riemann-sphere-one-point-compactification]]).

[F2] A map of Riemann surfaces is holomorphic when its chart expressions are holomorphic; in the standard charts a map fixing $\infty$ is holomorphic at infinity exactly when the expression $u\mapsto1/f(1/u)$ is holomorphic at $0$ ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]], [[def-riemann-sphere-holomorphic-charts]]).

[F3] A complex polynomial $P(z)=\sum_ka_kz^k$ is entire with $P'(z)=\sum_kka_kz^{k-1}$ ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]); in particular $z\mapsto z^n$ is entire with derivative $nz^{n-1}$, which vanishes only at $z=0$ when $n\ge2$ and nowhere when $n=1$.

[F4] Ramification index: $e_x(f)$ is the unique $e\ge1$ with the chart expression $z\mapsto z^e$ in suitable centred charts, and $e_x(f)=1$ exactly when $f$ is a local biholomorphism at $x$; $x$ is a critical point when $e_x(f)>1$ and $f(x)$ is then a branch value ([[def-ramification-index-and-branch-value]], [[def-biholomorphic-map]]).

[F5] Degree of a proper nonconstant holomorphic map: it is onto with finite fibres and has a degree $d=\sum_{x\in f^{-1}(y)}e_x(f)$ independent of $y$ ([[thm-proper-holomorphic-map-riemann-surfaces-has-degree]]).

[F6] For $w\ne0$ the equation $z^n=w$ has exactly $n$ distinct solutions, the $n$-th roots of $w$; the $n$-th roots of unity are exactly $\exp(2\pi ik/n)$, $0\le k<n$ ([[thm-complex-nth-roots-and-roots-of-unity]]).

[F7] Stereographic projection identifies the Riemann sphere $\widehat{\mathbb C}$ homeomorphically with $S^2$ ([[thm-stereographic-projection-riemann-sphere-homeomorphism]]); by the genus definition, $g(\widehat{\mathbb C})=0$ and $\chi(\widehat{\mathbb C})=2$ ([[def-genus-and-euler-characteristic-compact-riemann-surface]]).

[F8] Riemann–Hurwitz: for a nonconstant holomorphic map $f:X\to Y$ of compact connected Riemann surfaces of degree $d$, $2g(X)-2=d(2g(Y)-2)+\sum_{x\in X}(e_x(f)-1)$ ([[thm-riemann-hurwitz-formula]]).

[F9] The Axiom of Choice ([[def-axiom-of-choice]]).


## Verification

**Proof technique:** direct.

1.1 ($f$ is a holomorphic nonconstant self-map of the sphere.) In the chart $\phi_0$ the expression of $f$ is $z\mapsto z^n$, entire by [F3]; at infinity, using the source chart $u=1/z$ and the target chart $v=1/f(z)$, the expression is $v=u^n$ for $u\ne0$, which extends holomorphically to $u=0$ with value $0=\phi_\infty(f(\infty))$; hence $f$ is holomorphic on $\widehat{\mathbb C}$ by [F2]. It is nonconstant: for $n=1$ it is the identity and for $n\ge2$ the values $0$ and $1$ differ. [F2, F3]

1.2 ($f$ is proper.) $\widehat{\mathbb C}$ is compact and $f$ is continuous [F1]; for every compact $K\subseteq\widehat{\mathbb C}$ the preimage $f^{-1}(K)$ is closed in the compact space $\widehat{\mathbb C}$, hence compact. Thus [F5] applies to $f$. [F1, F5]

1.3 (The ramification indices.) At $0$ the centred charts are the standard charts near $0$, and the chart expression is $z\mapsto z^n$, so $e_0(f)=n$ by [F4]. At $\infty$ the centred charts $(u,1/u)$ on the source and $(v,1/w)$ on the target give the expression $u\mapsto u^n$, so $e_\infty(f)=n$; for $n=1$ both statements read $e=1$ and there is no critical point. For $a\in\mathbb C^\times$ the chart expression near $a$ is $z\mapsto z^n$ with derivative $nz^{n-1}$ nonzero at $a$ by [F3], so $f$ is a local biholomorphism at $a$ and $e_a(f)=1$ by [F4]; such $a$ is therefore not a critical point. [F3, F4]

2.1 (The degree is $n$.) By [F5] and step 1.2 the degree equals $\sum_{x\in f^{-1}(1)}e_x(f)$. The solutions of $z^n=1$ are the $n$ distinct $n$-th roots of unity, all in $\mathbb C^\times$, by [F6]; each has index $1$ by step 1.3, so $d=n$. [F5, F6, step 1.3]

3.1 (Riemann–Hurwitz reads $-2=-2n+2(n-1)$.) Apply [F8] to $f$, which is nonconstant holomorphic of degree $d=n$ between compact connected Riemann surfaces by steps 1.1, 1.2 and 2.1: $2g(\widehat{\mathbb C})-2=n(2g(\widehat{\mathbb C})-2)+\sum_x(e_x(f)-1)$. By the stereographic homeomorphism and genus definition in [F7], $g(\widehat{\mathbb C})=0$. For $n\ge2$, step 1.3 gives exactly two ramification points, $0$ and $\infty$, each with $e=n$, so the sum is $2(n-1)$; for $n=1$ there is no ramification and the empty sum is also $2(n-1)=0$. Substituting gives $-2=-2n+2(n-1)$, an identity of integers. [F7, F8, step 1.3, step 2.1]

4.1 (Conclusion and choice.) All indices, the degree and the ramification sum are computed from the explicit charts, so this example is choice-free; the Axiom of Choice is inherited only through the genus interface [F7] used in [F8], as [F9] records. [F7, F8, F9, step 3.1] ∎


## Remarks

The power map is the simplest nontrivial Riemann–Hurwitz identity: for $n\ge2$
the two critical points $0$ and $\infty$ each contribute $n-1$, so the total deficit is
$2(n-1)$, and in Euler-characteristic form the count gives
$\chi=d\,\chi(\widehat{\mathbb C})-\sum(e_x-1)=2n-2(n-1)=2$, the Euler
characteristic of a sphere again — as it must be, since the source is the
sphere. Criticality is independent of the coordinate choices: at both $0$
and $\infty$, centred source and target coordinates give the same local model
$u\mapsto u^n$, with ramification index $n$. For the same computation in the general
$\mathbb P^1$ setting with the local model $z\mapsto z^n$ see
[[ex-morphism-projective-line-power-map]]; the present example stays in the
sphere charts used throughout this pair.
