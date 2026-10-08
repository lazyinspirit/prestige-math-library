---
id: ex-punctured-disc-versus-finite-annulus-modulus
kind: example
title: The punctured disc has infinite conformal parameter, unlike every finite annulus
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 5
deps: [def-extremal-length-and-curve-family-modulus, lem-rho-length-and-extremal-length-are-well-defined, thm-extremal-length-conformal-invariance-and-monotonicity, thm-modulus-rectangle-and-annulus, thm-round-annulus-conformal-parameter-is-complete-invariant, def-complex-annulus, def-countable-choice]
axiom_use: Countable Choice is carried by the extremal-length definition and annulus computation.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §§6.3.1 and 6.3.6, printed pp. 121–124: the round-annulus computation and the degeneration of nested annuli, including Corollary 6.20."
    - title: "Lars Ahlfors and Arne Beurling, Conformal Invariants and Function-Theoretic Null-Sets, Acta Mathematica 83 (1950), 101–129"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5710-11511_2006_Article_BF02392634.pdf"
      locator: "§§4–5, printed pp. 115 and 119–121: the extremal-length computation for separating annular families and conformal invariance."
verification:
  precheck: pass
---

## Sources

- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*, vol. I, Ch. 1 §§6.3.1 and 6.3.6, printed pp. 121–124. Proposition 6.6 and Corollaries 6.11–6.12 compute the annular family values; Corollary 6.20 records the degeneration of nested annuli.
- Lars Ahlfors and Arne Beurling, *Conformal Invariants and Function-Theoretic Null-Sets*, §§4–5, printed pp. 115 and 119–121, for the extremal-distance computations and conformal invariance conventions.

## Example

Assume Countable Choice and use the conformal parameter and path-family conventions of [[thm-round-annulus-conformal-parameter-is-complete-invariant]].

(a) For $0<r<R<\infty$, the round annulus $A(r,R)$ has finite conformal parameter
$$M(A(r,R))=\frac{1}{2\pi}\log\frac Rr,$$
and its connecting-family modulus is
$$\mu(\Gamma_{r,R})=\frac{2\pi}{\log(R/r)}>0.$$

(b) For the punctured disc $D^*=\{0<|z|<1\}$ and its puncture-to-outer-circle family $\Gamma_{D^*}$, the conformal parameter is infinite:
$$M(D^*)=\lambda(\Gamma_{D^*})=+\infty,\qquad \mu(\Gamma_{D^*})=0.$$
For each integer $n\ge2$, every path in $\Gamma_{D^*}$ contains a subpath joining the circles $|z|=1/n$ and $|z|=1$. Consequently the nested finite-annulus parameters force this divergence.

(c) There is no conformal equivalence between $D^*$ and any finite round annulus $A(r,R)$, nor between $D^*$ and $\mathbb D$ or $\mathbb C$; likewise $\mathbb C^*=\mathbb C\setminus\{0\}$ is not conformally equivalent to a finite round annulus, by [[thm-round-annulus-conformal-parameter-is-complete-invariant]](iii).

(d) Quantitatively, on $A(1/n,1)$ the density $\rho(z)=1/(2\pi|z|)$ gives every path joining the two boundary circles length at least $\log n/(2\pi)$ and has area $\log n/(2\pi)$. Its extremal-length quotient is therefore at least $\log n/(2\pi)$.

## Facts & Assumptions

**Given:** Countable Choice, the punctured disc, the finite round annuli, and the density/length conventions.

[F1] Extremal length is monotone under overflow: if each path in $\Gamma_0$ contains a subpath in $\Gamma_1$, then $\lambda(\Gamma_0)\ge\lambda(\Gamma_1)$. Extending densities by zero makes the family comparison independent of the ambient domain ([[thm-extremal-length-conformal-invariance-and-monotonicity]], [[lem-rho-length-and-extremal-length-are-well-defined]]).

[F2] For every $0<r<R<\infty$, the connecting family of $A(r,R)$ has
$$\lambda(\Gamma_{r,R})=\frac{1}{2\pi}\log\frac Rr,\qquad \mu(\Gamma_{r,R})=\frac{2\pi}{\log(R/r)}.$$
The density $1/(|z|\log(R/r))$ gives the lower extremal-length bound, while weighted Cauchy–Schwarz on radial segments gives the upper bound ([[thm-modulus-rectangle-and-annulus]]).

[F3] The conformal parameter is the extremal length of the connecting family; the punctured-disc path family has endpoints at $0$ and the unit circle and has interior in $D^*$; finite annuli have the values in [F2]; and the non-equivalence assertions in (c) are proved by winding families and the Liouville/logarithm obstructions ([[thm-round-annulus-conformal-parameter-is-complete-invariant]]).

[F4] For a rectifiable path crossing the boundary circles of $A(r,R)$,
$$\int_\gamma\frac{|dz|}{|z|}\ge\log(R/r),$$
and polar change of variables gives
$$\int_{A(r,R)}g\,dA=\int_0^{2\pi}\int_r^R g(se^{i\theta})\,s\,ds\,d\theta$$
for every nonnegative Borel $g$ ([[thm-modulus-rectangle-and-annulus]]).

## Verification

**Proof technique:** nested-annulus overflow, with the explicit radial extremal metric as a quantitative check.

1.1 For $0<r<R<\infty$, clause (i) of [F3] and [F2] give $M(A(r,R))=(2\pi)^{-1}\log(R/r)$ and $\mu(\Gamma_{r,R})=2\pi/\log(R/r)$. Since $R/r>1$, the logarithm is finite and positive, so the displayed parameter and reciprocal are finite and positive. [F2, F3]

1.2 Fix $n\ge2$ and a path $\gamma:[0,1]\to\mathbb C$ in $\Gamma_{D^*}$, so $\gamma(0)=0$, $|\gamma(1)|=1$, and $0<|\gamma(t)|<1$ for $0<t<1$. By continuity the set $T_n=\{t\in[0,1]:|\gamma(t)|=1/n\}$ is nonempty and compact; let $t_n=\max T_n$. For every $t\in(t_n,1)$ one has $|\gamma(t)|>1/n$: it cannot be smaller without a later intermediate hit of $1/n$, and it is less than $1$ by the path hypothesis. Thus $\gamma|_{[t_n,1]}$ is a subpath in the connecting family of $A(1/n,1)$. Regard both families in the ambient plane; [F1] and [F2] give $\displaystyle \lambda(\Gamma_{D^*})\ge\lambda(\Gamma_{1/n,1})=\frac{\log n}{2\pi}.$ As $n\to\infty$ the right side tends to $+\infty$, hence $M(D^*)=\lambda(\Gamma_{D^*})=+\infty$ and $\mu(\Gamma_{D^*})=0$. [F1, F2, F3, given]

2.1 The finite-annulus, disc and plane non-equivalence claims, and the punctured-plane claim, are exactly clause (iii) of [F3], whose path-family and winding hypotheses are included in that theorem. No conformal equivalence can preserve a finite positive parameter while taking it to the infinite value of step 1.2. [F3, step 1.1, step 1.2]

3.1 On $A(1/n,1)$, [F4] gives $\displaystyle A(\rho)=\int_0^{2\pi}\int_{1/n}^{1}\frac{1}{4\pi^2s^2}s\,ds\,d\theta=\frac{\log n}{2\pi}.$ The crossing estimate in [F4] gives $\ell_\rho(\Gamma_{1/n,1})\ge\log n/(2\pi)$, so the quotient is at least $(\log n/(2\pi))^2/(\log n/(2\pi))=\log n/(2\pi)$. This is the quantitative lower bound used in step 1.2. [F2, F4, given, algebra] ∎
