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

1.1 The set of embeddings of the compact circle into $\mathbb R^3$ is open in the $C^1$ topology. To verify this for the given compact family, cover $S^1$ by finitely many parameter intervals on which the derivative of each $K_s$ has a uniform positive lower bound; a sufficiently small $C^1$ perturbation remains an immersion there. On the compact complement of a neighborhood of the diagonal in $S^1\times S^1$, injectivity has a uniform positive separation because $(s,x,y)\mapsto\|K_s(x)-K_s(y)\|$ is continuous and positive. A sufficiently small $C^0$ perturbation preserves that separation. Thus a small perturbation of $h$ alone keeps every slice embedded and fixed at the two endpoint collars. The straight interpolation between $h$ and its perturbation is also $C^1$-small, hence stays embedded; [F6] extends this path to ambient isotopy. [given, F1, F2, F6, construct, algebra]

1.2 For a smooth height family $h$ on $S^1\times[0,1]$, use finitely many coordinate intervals and smooth bump functions supported away from the endpoint collars to form a finite-dimensional perturbation family $h_a=h+\sum_j a_j\phi_j$. Cutoff multiples of $x$, $x^2/2$, $x^3/6$, and $(s-s_0)x$ prescribe, independently, $h_x,h_{xx},h_{xxx},h_{xs}$ at a point; finitely many smaller intervals cover the compact cylinder. The universal maps for $h_x$, $(h_x,h_{xx})$, $(h_x,h_{xx},h_{xxx})$, and $(h_x,h_{xx},h_{xs})$ are transverse to zero because the parameter derivatives span the corresponding target coordinates. By [F4], choose one arbitrarily small parameter for which all four slices are transverse. The zero set of $h_x$ is then a one-manifold; the zero set of $(h_x,h_{xx})$ is zero-dimensional; and the two three-coordinate maps have no zeros because their two-dimensional source has smaller dimension than their target. Thus every degeneracy has $h_x=h_{xx}=0$, $h_{xxx}\ne0$, and $h_{xs}\ne0$. The fold condition is open, so later perturbations can be chosen small enough to preserve it. [given, F3, F4, construct, algebra]

2.1 The fold set from step 1.2 is a compact zero-dimensional transverse preimage in the two-dimensional cylinder, hence finite. Near a fold $(s_0,x_0)$, the equation $h_x(s,x)=0$ has $h_x=h_{xx}=0$, $h_{xxx}\ne0$, and $h_{xs}\ne0$. By [F5], solve it locally as $s=\psi(x)$; differentiating gives $\psi'(x_0)=0$ and $\psi''(x_0)=-h_{xxx}/h_{xs}\ne0$. Thus on one side of $s_0$ there are exactly two nondegenerate critical points and on the other side none. Between these finitely many fold values, $h_x=0$ is a finite union of smooth branches by the implicit function theorem. At the birth, the two new critical values are distinct away from the fold: $h_x$ has constant nonzero sign between its two roots, so $h(s,x_+)-h(s,x_-)=\int_{x_-}^{x_+}h_x(s,x)\,dx\ne0$. [F5, step 1.2, algebra]

3.1 Remove small disjoint fold neighborhoods and endpoint collars from the parameter cylinder. On the remaining compact set, distinct critical points have a positive separation in the circle coordinate. Cover it by finitely many charts and add bump functions with disjoint small supports so that, at any two distinct critical points, the parameter derivatives independently span the two derivative values and the difference of the function values. For a pair $(x,y)$, the event map $(s,x,y)\mapsto(h_x(s,x),h_x(s,y),h(s,x)-h(s,y))$ is therefore transverse to zero for generic coefficients by [F4]. Its source and target both have dimension three, so its zeros are isolated. At a zero the derivative matrix has determinant $h_{xx}(s,x)h_{xx}(s,y)(h_s(s,x)-h_s(s,y))$. The first two factors are nonzero because the fold neighborhoods were removed; transversality makes the third nonzero. Thus the two critical values cross transversely. These zeros stay away from the removed diagonal neighborhoods by the fold model of step 2.1, so they form a compact zero-dimensional set and are finite. [F4, F5, step 1.2, step 2.1, construct, algebra]

4.1 Use further bump functions supported near mutually distinct critical points, so their value and derivative jets can be changed independently. For three distinct critical points, the event map with their three $x$-derivatives and two value differences has five scalar components on a four-dimensional parameter-and-point domain; [F4] makes its zero set empty. For two disjoint value crossings, four critical-point equations and two value differences give six components on a five-dimensional domain, so simultaneous crossings are absent. A birth/death coinciding in height with another critical point imposes $h_x=h_{xx}=0$ at the fold, $h_x=0$ at the other point, and equality of their values: four independent conditions on a three-dimensional domain, so this event is absent. A fold simultaneous with a value crossing at two other critical points imposes five independent conditions on a four-dimensional domain and is absent. Two folds at the same parameter impose four equations on a three-dimensional domain and are absent as well. The same finite-dimensional bump family can impose all these conditions simultaneously: the bad parameter set for each map is null by [F4], their finite union is null, and every coefficient ball contains a point outside that union. [F3, F4, step 1.2, step 2.1, step 3.1, algebra]

5.1 Outside the finite fold and crossing parameters, every critical point is nondegenerate and the critical values are pairwise distinct, so each height slice is strict Morse. Steps 2.1–4.1 show that the only exceptional events are isolated max-min births or deaths and transverse crossings of two distinct critical values; the imposed three-point, four-point, and fold-pair conditions exclude simultaneous events and triple values. The total perturbation can be chosen arbitrarily small, so step 1.1 keeps every slice embedded and in the same oriented knot class. The perturbation vanishes near $s=0,1$, hence leaves the specified endpoint presentations fixed. [given, F1, F2, F6, step 1.1, step 2.1, step 3.1, step 4.1] ∎
