---
id: cex-exponential-local-biholomorphism-is-not-proper
kind: counterexample
title: The exponential map has no finite proper-map degree
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - thm-proper-holomorphic-map-riemann-surfaces-has-degree
  - thm-kernel-and-fibres-of-complex-exponential
  - ex-basic-riemann-surface-atlases
  - lem-nonzero-derivative-gives-local-biholomorphism
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-complex-exponential-surjects-onto-the-punctured-plane
  - def-compact-space
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 2–3, proper maps of Riemann surfaces and the exponential covering C → C^×; used as the standing example of a local biholomorphism that is not proper."
    - title: "Eduard Looijenga, Riemann Surfaces (2007)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 4 §2, the properness hypothesis in the degree theory of holomorphic maps, printed pp. 43–44."
---

## Statement refuted

Every nonconstant holomorphic map of Riemann surfaces that is a local
biholomorphism at every point is proper, and therefore has finite fibres and a
finite degree in the sense of
[[thm-proper-holomorphic-map-riemann-surfaces-has-degree]].

## Facts & Assumptions

**Given:** The complex exponential $\exp:\mathbb C\to\mathbb C^\times= \mathbb C\setminus\{0\}$.

[F1] Both $\mathbb C$ and $\mathbb C^\times$ are plane domains, hence Riemann surfaces with their identity atlases ([[ex-basic-riemann-surface-atlases]]); for these atlases a map is holomorphic exactly when it is holomorphic as a map of plane domains ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]).

[F2] The complex exponential is entire with $\exp'=\exp$, so $\exp'(z)=\exp z\ne0$ for every $z\in\mathbb C$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[F3] The exponential is surjective onto $\mathbb C^\times$ ([[thm-complex-exponential-surjects-onto-the-punctured-plane]]).

[F4] If $f$ is holomorphic near $a$ and $f'(a)\ne0$, then $f$ is biholomorphic between a neighbourhood of $a$ and a neighbourhood of $f(a)$ ([[lem-nonzero-derivative-gives-local-biholomorphism]]).

[F5] $\ker(\exp)=2\pi i\mathbb Z$, and $\exp z=\exp w$ exactly when $z-w\in2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[F6] A subset is compact when every open cover of the subspace has a finite subcover; consequently a one-point subset $\{y\}$ of any space is compact, since an open cover of $\{y\}$ has a member containing $y$ that alone covers it ([[def-compact-space]]).

[F7] With $f:X\to Y$ proper, meaning $f^{-1}(K)$ is compact for every compact $K\subseteq Y$, a nonconstant holomorphic map of Riemann surfaces is onto, has finite fibres, and has a degree $d$ ([[thm-proper-holomorphic-map-riemann-surfaces-has-degree]]).


## Counterexample

**Proof technique:** direct.

1.1 ($\exp$ is a holomorphic local biholomorphism onto $\mathbb C^\times$.) Being entire, $\exp$ is holomorphic as a map of Riemann surfaces in the identity atlases of [F1]; by [F2] its derivative is nowhere zero, so [F4] makes it a biholomorphism between a neighbourhood of each $z$ and a neighbourhood of $\exp z$, and by [F3] it maps $\mathbb C$ onto $\mathbb C^\times$. [F1, F2, F3, F4]

1.2 ({1} is compact.) The singleton $\{1\}\subseteq\mathbb C^\times$ is a one-point space, so by [F6] every open cover of it has a one-member subcover; hence $\{1\}$ is compact. [F6]

1.3 (The fibre of $1$ is infinite.) By [F5], $\exp^{-1}(\{1\})=\ker(\exp)=2\pi i\mathbb Z=\{2\pi ik:k\in\mathbb Z\}$; the assignment $k\mapsto2\pi ik$ is injective on $\mathbb Z$ and $\mathbb Z$ is infinite, so the fibre is infinite. [F5]

2.1 (The fibre of $1$ is not compact.) Suppose $2\pi i\mathbb Z$ were compact. For each $k\in\mathbb Z$ let $U_k$ be the open disc of radius $2\pi$ about $2\pi ik$; the sets $U_k\cap2\pi i\mathbb Z$ form an open cover of the subspace $2\pi i\mathbb Z$ in the sense of [F6]. By compactness finitely many of them cover $2\pi i\mathbb Z$, say for $k$ in a finite set $F$. But distinct points $2\pi im,2\pi ik$ of the fibre satisfy $|2\pi im-2\pi ik|=2\pi|m-k|\ge2\pi$, so the disc $U_k$ contains exactly one point of the fibre, namely $2\pi ik$; the finitely many discs with $k\in F$ therefore cover at most the finitely many points $2\pi ik$, $k\in F$, contradicting the infinitude of the fibre from step 1.3. Hence $\exp^{-1}(\{1\})$ is not compact. [F5, F6, step 1.3]

3.1 ($\exp$ is not proper, and the degree theorem does not apply.) Since $\{1\}$ is compact by step 1.2 while $\exp^{-1}(\{1\})$ is not compact by step 2.1, the exponential is not proper; consequently the hypothesis of [F7] fails, no finite degree exists, and every fibre $\exp^{-1}(w)$, $w\in\mathbb C^\times$, is infinite: by [F3] write $w=\exp z_0$ and by [F5] the fibre is $z_0+2\pi i\mathbb Z$. Thus a holomorphic local biholomorphism of Riemann surfaces need not be proper and need not have finite fibres, so the properness hypothesis in [[thm-proper-holomorphic-map-riemann-surfaces-has-degree]] cannot be dropped. [F3, F5, F7, step 1.2, step 2.1] ∎


## Remarks

The failure is exactly the failure of finiteness of fibres: the degree theorem
[[thm-proper-holomorphic-map-riemann-surfaces-has-degree]] would give the
fibre of $1$ finite if it applied, but properness fails because the fibre
$2\pi i\mathbb Z$ escapes to infinity inside $\mathbb C$. On the source side the
exponential is as regular as possible — entire, nowhere-vanishing derivative,
local biholomorphism at every point — so the example isolates properness as the
hypothesis doing the work, and it contrasts with the compact-source case
$X=\widehat{\mathbb C}$ of
[[ex-power-map-riemann-hurwitz]], where the same local model $z\mapsto z^n$
does give a finite degree.
