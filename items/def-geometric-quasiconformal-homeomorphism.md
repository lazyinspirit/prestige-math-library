---
id: def-geometric-quasiconformal-homeomorphism
kind: definition
title: Orientation-preserving homeomorphisms and the geometric definition of quasiconformality
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 2
deps: [def-extremal-length-and-curve-family-modulus, lem-rho-length-and-extremal-length-are-well-defined, def-complex-domain, def-homeomorphism-and-open-maps, def-orientation-of-a-finite-dimensional-real-vector-space, def-r-orientation-of-a-topological-manifold, lem-coordinate-ball-classes-identify-local-homology-stalks, thm-local-homology-detects-interior-points-boundary-points-and-dimension, thm-excision-for-singular-homology, prop-relative-homology-is-functorial-for-maps-of-pairs, def-countable-choice]
axiom_use: Countable Choice is inherited only through the extremal-length and modulus definition and its well-definedness supplier. The local-homology orientation sign uses no choice.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §2, printed pp. 51–53: a quadrilateral and its modulus, and the two-sided modulus bound for every quadrilateral in the geometric definition."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §12.5, printed p. 188: QC2 defines quasiconformality by quasi-invariance of moduli of quadrilaterals and annuli for an orientation-preserving homeomorphism."
    - title: "Lars Ahlfors and Arne Beurling, Conformal invariants and function-theoretic null-sets, Acta Mathematica 83 (1950), 101–129"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5710-11511_2006_Article_BF02392634.pdf"
      locator: "§§4–5, printed pp. 114–120: extremal length, its conformal invariance, and the modulus convention used here."
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Sources

- Christopher J. Bishop, *Quasiconformal Mappings*, Ch. 2 §2, printed pp. 51–53. Bishop defines a quadrilateral as a Jordan domain with two disjoint closed boundary arcs marked, assigns its modulus by a conformal rectangle, and defines geometric quasiconformality by the two-sided modulus bound for every quadrilateral.
- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*, vol. I, Ch. 2 §12.5, printed p. 188. QC2 states that moduli of quadrilaterals and annuli are $K$-quasi-invariant for an orientation-preserving homeomorphism.
- Lars Ahlfors and Arne Beurling, *Conformal Invariants and Function-Theoretic Null-Sets*, §§4–5, printed pp. 114–120, for the extremal-length convention and its conformal invariance.

## Definition

Let $\Omega,\Omega'\subseteq\mathbb C$ be complex domains and $f:\Omega\to\Omega'$ a homeomorphism ([[def-complex-domain]], [[def-homeomorphism-and-open-maps]]).

**Orientation.** For $a\in\Omega$, $f$ induces an isomorphism
$$f_*:H_2(\Omega,\Omega\setminus\{a\};\mathbb Z)\longrightarrow H_2(\Omega',\Omega'\setminus\{f(a)\};\mathbb Z).$$
Excision and the local-homology calculation identify both groups with $\mathbb Z$ ([[thm-excision-for-singular-homology]], [[thm-local-homology-detects-interior-points-boundary-points-and-dimension]]). The generators are those determined by the standard orientation of $\mathbb C\cong\mathbb R^2$, with positively oriented basis $(1,i)$ ([[def-orientation-of-a-finite-dimensional-real-vector-space]], [[def-r-orientation-of-a-topological-manifold]]); the restriction isomorphisms from coordinate balls to points are supplied by [[lem-coordinate-ball-classes-identify-local-homology-stalks]]. Write $\varepsilon_f(a)\in\{+1,-1\}$ for the multiplier of $f_*$. Naturality of relative homology ([[prop-relative-homology-is-functorial-for-maps-of-pairs]]) makes these maps compatible with coordinate-ball restrictions. In the local-system charts of [[def-r-orientation-of-a-topological-manifold]], their multiplier is locally constant. Since $\Omega$ is connected, $\varepsilon_f$ is constant. The map $f$ is **orientation-preserving** when this sign is $+1$, and **orientation-reversing** when it is $-1$.

**A quadrilateral.** A **quadrilateral in $\Omega$** is a set $Q=\varphi(\overline\Pi)$, where $\Pi=(0,w)\times(0,h)$ with $w,h>0$ and $\varphi:\overline\Pi\to\mathbb C$ is continuous and injective. Its two marked sides are either $\varphi(\{0\}\times[0,h])$ and $\varphi(\{w\}\times[0,h])$, or the other pair of opposite sides. For one such choice, let $\Gamma(Q)$ be the family of continuous paths in $Q$ whose endpoints lie on different marked sides and whose interior lies in $\operatorname{int}Q$. This is a curve family in $\Omega$; its modulus $\mu(\Gamma(Q))$ is defined in [[def-extremal-length-and-curve-family-modulus]]. The image $f(Q)$ is again a quadrilateral with marked sides carried by $f$, and $f\Gamma(Q)=\Gamma(f(Q))$.

**Geometric definition.** Let $K\ge1$. The homeomorphism $f$ is **$K$-geometrically quasiconformal** when it is orientation-preserving and, for every quadrilateral $Q$ with $\overline Q\subseteq\Omega$ and for each choice of its marked sides,
$$\frac1K\,\mu\bigl(\Gamma(Q)\bigr)\le\mu\bigl(\Gamma(f(Q))\bigr)\le K\,\mu\bigl(\Gamma(Q)\bigr),$$
using the conventions of [[def-extremal-length-and-curve-family-modulus]] for zero and infinite values. It is **geometrically quasiconformal** if it is $K$-geometrically quasiconformal for some finite $K$; the least such $K$ is $K_f\ge1$, its maximal dilatation.

The modulus condition uses the extremal-length construction and its Countable-Choice hypothesis; the orientation sign itself uses no choice ([[def-countable-choice]]). The inverse of a $K$-geometrically quasiconformal map is also $K$-geometrically quasiconformal: its local-homology map is the inverse isomorphism, and the two modulus inequalities rearrange to the same bounds for $f^{-1}$. Thus $K_{f^{-1}}=K_f$. The local orientation clause and the modulus inequality are distinct parts of this definition.
