---
id: lem-kontsevich-morse-isotopy-decomposition
kind: lemma
title: Generic isotopies have finite Morse movies
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-kontsevich-integral-on-parenthesized-braids
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-countable-choice
  - thm-parametric-transversality
  - thm-smooth-inverse-function-theorem-on-manifolds
  - lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy
justified_by: []
dependency_level: 4
sources:
  references:
    - title: Introduction to Vassiliev Knot Invariants, §§8.6–8.7
      url: https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf
    - title: "Gualtieri, Topology I: Smooth Manifolds, §3.4, Theorem 3.26"
      url: https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf

---

## Statement

Assume the Axiom of Countable Choice. Let $K_s:S^1\hookrightarrow\mathbb C\times\mathbb R$, $0\le s\le1$, be a smooth isotopy of oriented embeddings that is constant near $s=0,1$, and suppose its endpoint height functions are strict Morse functions with distinct critical values. For every $\delta>0$, there is a smooth family of embeddings $\widetilde K_s$ fixed near $s=0,1$ and within $\delta$ of $K_s$ in the $C^1$ topology such that:

1. except at finitely many parameter values, $t|_{\widetilde K_s}$ is strict Morse with distinct critical values;
2. at each exceptional value, either one nondegenerate maximum-minimum pair is born or dies, or two distinct nondegenerate critical points have a transverse crossing of their critical values;
3. no two exceptional events occur at the same parameter, no three critical values coincide, and a birth or death does not coincide in height with another critical point.

The perturbation can be made in the height coordinate alone, so every $\widetilde K_s$ remains in the same oriented knot class as $K_s$. The diagram is a schematic of the allowed event types; the proof uses the jet conditions, not the drawing.

```tikz
\begin{tikzpicture}[scale=0.9,thick]
  \draw[->] (-1,0) -- (3,0) node[right] {$s$};
  \draw[->] (0,-1.4) -- (0,1.5) node[above] {critical value};
  \draw (0.1,0) .. controls (0.65,0) and (0.85,0.65) .. (1.35,0.72);
  \draw (0.1,0) .. controls (0.65,0) and (0.85,-0.65) .. (1.35,-0.72);
  \fill (0.1,0) circle (1.4pt);
  \node at (1.2,1.05) {birth/death};
  \draw (1.65,-1.1) -- (2.85,1.1);
  \draw (1.65,1.1) -- (2.85,-1.1);
  \fill (2.25,0) circle (1.4pt);
  \node at (2.65,1.35) {value crossing};
\end{tikzpicture}
```

## Statement references

[[def-kontsevich-integral-on-parenthesized-braids|Strict Morse height convention]]

[[def-oriented-link-in-s-three-and-ambient-isotopy|Smooth isotopy of oriented knots]]

[Chmutov, Duzhin, and Mostovoy, §§8.6–8.7, printed pp. 233–240](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)

[Gualtieri, Topology I: Smooth Manifolds, §3.4, Theorem 3.26, PDF pp. 34–35](https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf)

## Facts & Assumptions

**Given:** A smooth compact one-parameter family of oriented embeddings with fixed strict Morse endpoint heights, and $\mathrm{AC}_\omega$.

[F1] [[def-kontsevich-integral-on-parenthesized-braids]]: a strict Morse presentation is an embedding of the compact oriented circle whose height has only nondegenerate critical points with distinct critical values.

[F2] [[def-oriented-link-in-s-three-and-ambient-isotopy]]: oriented knot equivalence is ambient isotopy of the embedded oriented circle.

[F3] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is the axiom of countable choice.

[F4] [[thm-parametric-transversality]]: under $\mathrm{AC}_\omega$, if a smooth finite-dimensional parameter family is transverse to a submanifold, then almost every parameter gives a transverse slice.

[F5] [[thm-smooth-inverse-function-theorem-on-manifolds]]: a smooth map with invertible derivative has a smooth local inverse.

[F6] [[lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy]]: under $\mathrm{AC}_\omega$, a smooth isotopy through embeddings of the compact circle extends to an ambient isotopy.

## Proof

**Given:** As above. Write $K_s(x)=(z(s,x),h(s,x))$ with $x\in S^1$. All perturbations below vanish on fixed collars of $s=0,1$.

1.1 The set of embeddings of the compact circle into $\mathbb R^3$ is open in the $C^1$ topology. To verify this for the given compact family, cover the compact parameter cylinder by finitely many coordinate rectangles on each of which one fixed component of the spatial tangent has constant sign and is bounded away from zero. Shrinking these rectangles gives a uniform neighborhood of the circle diagonal on which every sufficiently small $C^1$ perturbation is injective on each slice, by strict monotonicity of that component. On the compact complement of a neighborhood of the diagonal in $S^1\times S^1$, injectivity has a uniform positive separation because $(s,x,y)\mapsto\|K_s(x)-K_s(y)\|$ is continuous and positive. A sufficiently small $C^0$ perturbation preserves that separation. Thus a small perturbation of $h$ alone keeps every slice embedded and fixed at the two endpoint collars. The straight interpolation between $h$ and its perturbation is also $C^1$-small, hence stays embedded; after a smooth reparametrization stationary near both interpolation endpoints, [F6] extends this path to ambient isotopy. [given, F1, F2, F6, construct, algebra]

1.2 Identify $S^1$ with $\mathbb R/2\pi\mathbb Z$. Perturb $h$ by $\chi(s)(p(x)+s q(x))$, where $\chi$ vanishes on fixed endpoint collars and is positive on the remaining parameter interval, and $p,q$ range over real trigonometric polynomials of degree at most $16$. At up to four distinct circle points these polynomials prescribe all jets through order three independently: complexify, multiply by $e^{16ix}$, and use ordinary polynomial Hermite interpolation at the distinct nodes $e^{ix}$ (at most sixteen conditions in degree at most $32$); taking the real part recovers real data. The two coefficients $p,q$ independently prescribe these jets and their $s$-derivatives at any fixed interior $s$. Thus the universal maps for $h_x$, $(h_x,h_{xx})$, $(h_x,h_{xx},h_{xxx})$, and $(h_x,h_{xx},h_{xs})$ are transverse to zero. By [F4] choose arbitrarily small coefficients making all four slices transverse. Near the endpoint collars strict Morse behavior is already stable; shrink the coefficient ball to preserve it there. The critical locus is a one-manifold, the fold locus is zero-dimensional, and the two three-coordinate maps have empty zero sets by dimension. Every degeneracy therefore satisfies $h_x=h_{xx}=0$, $h_{xxx}\ne0$, and $h_{xs}\ne0$. The same finite family will impose the distinct-point conditions below simultaneously, rather than perturbing an already chosen slice. [given, F3, F4, construct, algebra]

2.1 The fold set from step 1.2 is a compact zero-dimensional transverse preimage in the two-dimensional cylinder, hence finite. Near a fold $(s_0,x_0)$, the equation $h_x(s,x)=0$ has $h_x=h_{xx}=0$, $h_{xxx}\ne0$, and $h_{xs}\ne0$. By [F5], solve it locally as $s=\psi(x)$; differentiating gives $\psi'(x_0)=0$ and $\psi''(x_0)=-h_{xxx}/h_{xs}\ne0$. Thus on one side of $s_0$ there are exactly two nondegenerate critical points and on the other side none. Between these finitely many fold values, $h_x=0$ is a finite union of smooth branches by the implicit function theorem. At the birth, the two new critical values are distinct away from the fold: $h_x$ has constant nonzero sign between its two roots, so $h(s,x_+)-h(s,x_-)=\int_{x_-}^{x_+}h_x(s,x)\,dx\ne0$. [F5, step 1.2, algebra]

3.1 On the entire domain $(0,1)\times\{(x,y)\in(S^1)^2:x\ne y\}$, including pairs involving a fold neighborhood, impose transversality to zero of $(h_x(s,x),h_x(s,y),h(s,x)-h(s,y))$. The independent distinct-point jets from step 1.2 make the universal map a submersion, so [F4] applies on this domain without a compactness assumption. At a zero the slice Jacobian has determinant, up to sign, $h_{xx}(s,x)h_{xx}(s,y)(h_s(s,x)-h_s(s,y))$. Thus both critical points are nondegenerate and their critical values cross transversely; in particular a fold cannot share a critical value with any other critical point. The zero set is discrete. It cannot accumulate at the removed diagonal: near a nondegenerate critical point there is only one critical branch, and near a fold the only two branches have unequal values by step 2.1. Compactness of the diagonal supplies finitely many such neighborhoods. The endpoint collars have distinct critical values and no events. Consequently the crossing set is closed in a compact subset away from the diagonal and endpoint collars, hence finite. [F4, F5, step 1.2, step 2.1, construct, algebra]

4.1 Use the same distinct-point jet family of step 1.2, so all genericity conditions hold for one arbitrarily small coefficient choice. For three distinct critical points, the event map with their three $x$-derivatives and two value differences has five scalar components on a four-dimensional parameter-and-point domain; [F4] makes its zero set empty. For two disjoint value crossings, four critical-point equations and two value differences give six components on a five-dimensional domain, so simultaneous crossings are absent. A birth/death coinciding in height with another critical point imposes $h_x=h_{xx}=0$ at the fold, $h_x=0$ at the other point, and equality of their values: four independent conditions on a three-dimensional domain, so this event is absent. A fold simultaneous with a value crossing at two other critical points imposes five independent conditions on a four-dimensional domain and is absent. Two folds at the same parameter impose four equations on a three-dimensional domain and are absent as well. The same finite-dimensional family imposes these conditions together with steps 1.2 and 3.1: the bad parameter set for each map is null by [F4], their finite union is null, and every coefficient ball contains a point outside that union. [F3, F4, step 1.2, step 2.1, step 3.1, algebra]

5.1 Outside the finite fold and crossing parameters, every critical point is nondegenerate and the critical values are pairwise distinct, so each height slice is strict Morse. Steps 2.1–4.1 show that the only exceptional events are isolated max-min births or deaths and transverse crossings of two distinct critical values; the imposed three-point, four-point, and fold-pair conditions exclude simultaneous events and triple values. The total perturbation can be chosen arbitrarily small, so step 1.1 keeps every slice embedded and in the same oriented knot class. The perturbation vanishes near $s=0,1$, hence leaves the specified endpoint presentations fixed. [given, F1, F2, F6, step 1.1, step 2.1, step 3.1, step 4.1] ∎
