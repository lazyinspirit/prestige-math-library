---
id: lem-mtheory-integral-to-de-rham-period-map
kind: lemma
title: Integral cohomology classes define real de Rham periods
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps:
  - def-countable-choice
  - def-singular-cochain-complex-with-coefficients
  - def-singular-cohomology-with-coefficients
  - def-de-rham-cohomology
  - thm-the-de-rham-map-on-cohomology-is-well-defined
  - thm-de-rham-theorem-for-smooth-singular-cohomology
  - thm-smooth-and-continuous-real-singular-cohomology-agree
dependency_roles:
  def-countable-choice: mathematical-premise
  def-singular-cochain-complex-with-coefficients: mathematical-premise
  def-singular-cohomology-with-coefficients: mathematical-premise
  def-de-rham-cohomology: mathematical-premise
  thm-the-de-rham-map-on-cohomology-is-well-defined: mathematical-premise
  thm-de-rham-theorem-for-smooth-singular-cohomology: mathematical-premise
  thm-smooth-and-continuous-real-singular-cohomology-agree: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf"
      locator: "§3.1, printed pp. 197–198; singular cochains, coefficient groups, and the cohomology quotient."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Statement

Assume countable choice. For every finite-dimensional Hausdorff second-countable smooth manifold $Y$ without boundary, coefficient inclusion $\mathbb Z\hookrightarrow\mathbb R$ and the standard comparisons define a group homomorphism
$$\rho_Y:H^4_{\mathrm{sing}}(Y;\mathbb Z)\longrightarrow H^4_{\mathrm{dR}}(Y;\mathbb R).$$
Concretely, extend an integral singular cocycle coefficientwise to a real cocycle, pass from continuous to smooth singular cohomology by restriction, and apply the inverse of the de Rham integration isomorphism. This composite is well defined and sends every torsion class to zero.

## Statement References

[Hatcher, *Algebraic Topology*, §3.1](https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf)

## Facts & Assumptions

**Given:** Countable choice and a finite-dimensional Hausdorff second-countable smooth manifold $Y$ without boundary.

[A1] Assume countable choice, $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] Singular cochains are homomorphisms from the free abelian singular chain group, with coboundary given by precomposition with the singular boundary ([[def-singular-cochain-complex-with-coefficients]]).

[F2] Singular cohomology is the cocycle group modulo the coboundary group ([[def-singular-cohomology-with-coefficients]]).

[F3] Under [A1], restriction induces a natural isomorphism from continuous real singular cohomology to smooth real singular cohomology ([[thm-smooth-and-continuous-real-singular-cohomology-agree]]).

[F4] Integration induces the well-defined real linear de Rham map from de Rham cohomology to smooth singular cohomology ([[thm-the-de-rham-map-on-cohomology-is-well-defined]]).

[F5] Under [A1], this de Rham map is an isomorphism ([[thm-de-rham-theorem-for-smooth-singular-cohomology]]).

[F6] De Rham cohomology is the quotient of closed forms by exact forms and is a real vector space ([[def-de-rham-cohomology]]).

## Proof

**Given:** [A1], $Y$, and the coefficient inclusion $j:\mathbb Z\hookrightarrow\mathbb R$.

1.1 For a singular cochain $\varphi:C_4(Y;\mathbb Z)\to\mathbb Z$, define $j_\#\varphi=j\circ\varphi$. Since both coboundaries are precomposition with the same boundary map, $\delta(j_\#\varphi)=j_\#(\delta\varphi)$. Thus cocycles map to cocycles and coboundaries map to coboundaries; [F2] gives the induced homomorphism $r_Y:H^4_{\mathrm{sing}}(Y;\mathbb Z)\to H^4_{\mathrm{sing}}(Y;\mathbb R)$. [given, F1, F2, algebra]

2.1 Let $s_Y$ be the restriction isomorphism in [F3], and let $I_Y$ be the de Rham isomorphism in [F4]–[F5]. Define $\rho_Y=I_Y^{-1}\circ s_Y\circ r_Y$. Each factor is a group homomorphism and $I_Y^{-1}$ exists by [F5], so this defines a well-defined group homomorphism with the stated domain and codomain. [A1, F3, F4, F5, step 1.1, algebra]

3.1 If $c$ is torsion, then $nc=0$ for some integer $n>0$. By additivity, $n\rho_Y(c)=\rho_Y(nc)=0$. The target is a real vector space by [F6], whose additive group has no nonzero finite-order elements; hence $\rho_Y(c)=0$. [F6, step 2.1, algebra] ∎

## Remarks

The displayed map records only the real cohomology class of an integral class. In particular, it discards torsion and does not provide differential-cohomology data.

Here $H^4_\infty(Y;\mathbb R)$ denotes smooth singular cohomology as in [F3]–[F5]. The rows point to the right; the upper arrows are coefficient extension $r_Y$ and restriction $s_Y$, the vertical arrow is $\rho_Y$, and the lower arrow is de Rham integration $I_Y$. The diagram records $I_Y\circ\rho_Y=s_Y\circ r_Y$; the proof above establishes this identity from the maps and isomorphism suppliers, rather than relying on the picture.

```tikzcd
\begin{tikzcd}
H^4_{\mathrm{sing}}(Y;\mathbb Z) \arrow[r,"r_Y"] \arrow[d,"\rho_Y"'] &
H^4_{\mathrm{sing}}(Y;\mathbb R) \arrow[r,"s_Y"] &
H^4_\infty(Y;\mathbb R) \\
H^4_{\mathrm{dR}}(Y;\mathbb R) \arrow[rr,"I_Y"'] && H^4_\infty(Y;\mathbb R)
\end{tikzcd}
```
