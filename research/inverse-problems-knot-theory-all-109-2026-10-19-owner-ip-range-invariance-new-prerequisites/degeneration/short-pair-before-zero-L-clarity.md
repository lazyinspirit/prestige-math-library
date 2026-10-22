---
id: lem-finite-area-thick-points-have-uniformly-short-noncommuting-loops
kind: lemma
title: Finite area thick points have uniformly short noncommuting loops
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-tonelli-and-fubini-for-completed-product-measures
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Iteration on Teichmuller space
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/iter/iter.pdf
      locator: Theorem6.1 comparison-region proof printed447–448 fully read; the short-pair carrier needed after a supplied Lipschitz retraction is proved directly by cyclic-model area packing, without a pleated-boundary or graph-spine import
---

## Statement

Assume AC, hence Countable Choice. Let $A,\varepsilon>0$, and put
$$s=\varepsilon/4,\qquad v(s)=4\pi\sinh^2(s/2),\qquad N=\lfloor A/v(s)\rfloor+1,\qquad C(A,\varepsilon)=2(3sN+s).$$
Let $\Gamma\le\operatorname{PSL}_2(\mathbb R)$ be discrete and torsion free, with $\operatorname{area}(X)\le A$ for $X=H^2/\Gamma$. If $x=[o]\in X$ has injectivity radius at least $\varepsilon$, then there are noncommuting $a,b\in\Gamma$ with
$$d_{H^2}(o,ao)<C(A,\varepsilon),\qquad d_{H^2}(o,bo)<C(A,\varepsilon).$$
Thus two noncommuting based loops of those bounded lengths exist at every such thick point. They may range through the whole surface; no claim that they stay inside its fixed thick component is needed.

More generally supply a faithful representation $\rho:\Gamma\to\operatorname{Isom}^+(H^3)$ and a $\rho$-equivariant map $F:H^2\to H^3$ that is $L$-Lipschitz for the displayed hyperbolic metrics. The same elements have noncommuting images and
$$d_{H^3}(F(o),\rho(a)F(o)),\ d_{H^3}(F(o),\rho(b)F(o))<L C(A,\varepsilon).$$
This gives actual two-element short-loop carriers at images of thick points whenever such an equivariant Lipschitz map is supplied. No retraction, intrinsic convex-hull-boundary metric or comparison-ball existence is asserted.

## Facts & Assumptions

**Given:** AC, the area-bound quotient and thick basepoint; the faithful representation and equivariant Lipschitz map only for their conclusion.

[A1] Full choice and Countable Choice are [[def-axiom-of-choice]] and [[def-countable-choice]].

[F1] The standard complete hyperbolic models and their quotient metrics are actual local geometric suppliers. In particular the half-plane metric is $(dx^2+dy^2)/y^2$, and an axis has global signed normal coordinates with metric $dr^2+\cosh^2r\,dt^2$. [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]]

[F2] Nonnegative model integrals obey measurable smooth change of variables and Tonelli/Fubini under Countable Choice. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[thm-tonelli-and-fubini-for-completed-product-measures]]

## Proof

1.1 Every abelian subgroup $E\le\Gamma$ is trivial or infinite cyclic. Here is the complete real-group argument used below. A nonidentity elliptic in a discrete group has finite order: its conjugate lies in the compact rotation circle, whose infinite powers would have a subsequence whose pairwise differences approach identity, contrary to discreteness. Torsion freeness therefore leaves only parabolic or loxodromic nonidentity elements. If a chosen nonidentity element is parabolic, put its unique fixed point at infinity and write it $z\mapsto z+\ell$. Every commuting element preserves that fixed point and is $z\mapsto az+b$ with $a>0$. Commuting with the translation forces $a=1$. Their translation parameters form a discrete additive subgroup of $\mathbb R$, hence $d\mathbb Z$. If the chosen element is loxodromic, put its repelling and attracting endpoints at $0,\infty$. A commuting element preserves both endpoints individually; swapping them would conjugate the chosen element to its inverse, incompatible with commuting in a torsion-free group. It is thus $z\mapsto az$, $a>0$. Their logarithms again form a discrete additive subgroup of $\mathbb R$. Such a nonzero discrete subgroup has a least positive element: otherwise differences of two positive elements tending to the positive infimum tend to zero, contradicting discreteness; if the infimum were zero it contradicts discreteness directly. Integer division by the least positive element then proves it is its integer span. This proves the asserted trivial/cyclic classification without a finite-generation assumption. [F1, given, construct, algebra]

2.1 For each of the quotients $H^2/E$ in step 1.1 and each point of injectivity radius at least $\varepsilon$, there is a unit-speed minimizing ray along which the injectivity radius stays at least $\varepsilon$. For trivial $E$ use any geodesic ray. For a parabolic normalize the primitive generator to $z\mapsto z+\ell$ and take the downward vertical ray $y(t)=y_0e^{-t}$. The injectivity radius is $\operatorname{arsinh}(\ell/(2y))$, hence increases down this ray. The inequality $|d\log y|\le ds$ makes distances along it equal to parameter differences even after horizontal identifications. For a loxodromic cyclic group use signed normal coordinates around its axis, with axis-period $\ell$. The displacement formula is $\sinh(d(z,T^kz)/2)=\sinh(|k|\ell/2)\cosh r$, obtained by the model inner-product formula, so its injectivity radius increases with $|r|$. Take the outward normal ray, choosing either side if $r=0$. Since $|dr|\le ds$ and the quotient identifies only the axis parameter, this ray is likewise minimizing between all its points. The radius-$s$ balls centered at parameters $0,3s,\ldots,3s(N-1)$ are therefore pairwise disjoint and embedded, since $s<\varepsilon$. Each has area $v(s)$. For this last formula, the Cayley disc metric is $4|dw|^2/(1-|w|^2)^2$; radial integration identifies its radius-$s$ ball with $|w|<\tanh(s/2)$, and polar integration of $4r/(1-r^2)^2$ gives $4\pi\sinh^2(s/2)$ by [F2]. All $N$ balls lie inside the open radius-$R$ ball about the initial point, where $R=3sN+s$. Hence every such cyclic or trivial model has radius-$R$ ball area at least $Nv(s)>A$. [F1, F2, step 1.1, given, construct, algebra]

3.1 Let $\mathcal S=\{g\in\Gamma:d(o,go)<2R\}$. Suppose its elements all commute pairwise, and let $E$ be the subgroup they generate. It is abelian and so trivial or cyclic by step 1.1. The basepoint of $Y=H^2/E$ has injectivity radius at least that of $X$, hence at least $\varepsilon$, since its nonidentity deck transformations are a subset of those for $X$. The natural covering $Y\to X$ is injective on the entire open ball $B_Y([o],R)$. Indeed choose any two points of that ball with the same image. Lift them to $z,w\in H^2$ with $d(o,z),d(o,w)<R$, by lifting paths of length less than $R$. If $w=gz$ for $g\in\Gamma$, then $$d(o,go)\le d(o,w)+d(w,go)=d(o,w)+d(z,o)<2R.$$ Thus $g\in\mathcal S\subset E$ and the two points in $Y$ were already equal. The covering is a local isometry, so [F2] computes the area of that injective ball as the area of its image in $X$. Step 2.1 makes that area greater than $A$, contradicting $\operatorname{area}(X)\le A$. Therefore $\mathcal S$ contains two noncommuting elements $a,b$. Their two displayed displacement bounds are $<2R=C(A,\varepsilon)$, as required. [F2, step 1.1, step 2.1, given, construct, algebra]

4.1 Project the model geodesic segments from $o$ to $ao$ and $bo$ to $X$. They are based loops of exactly the corresponding displacement lengths; their elements do not commute by step 3.1. If the additional equivariant $L$-Lipschitz map is supplied, then $$d(F(o),\rho(a)F(o))=d(F(o),F(ao))\le Ld(o,ao)<LC(A,\varepsilon),$$ and the same holds for $b$. Faithfulness ensures the two images still do not commute. This proves the actual short-pair carrier conclusion under precisely the stated map hypothesis, without requiring that a loop stay in a chosen thick component or asserting existence of a convex-hull retraction. [step 3.1, given, algebra] ∎

## Actual reading and remaining geometric interface

The full authentic Iteration Sections5–7, including the complete comparison-region argument of6.1, were read. The complete hyperbolic-model and real change-of-variables/product-integral suppliers were read. The proof here is the explicit elementary-model area argument and does not import a graph-spine theorem, pleated-boundary area theorem or a two-short-loops assertion from a source sentence.

This provides exactly the noncommuting short-pair input after a genuine equivariant Lipschitz map from the cofinite boundary model has been constructed. Such a map, the mixed Margulis separation and the resulting normalized comparison-ball geometry remain distinct operations; they are not proved by this carrier estimate.
