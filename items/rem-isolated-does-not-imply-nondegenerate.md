---
id: rem-isolated-does-not-imply-nondegenerate
kind: remark
title: "Isolated fixed points need not be nondegenerate"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-nondegenerate-fixed-point, def-local-fixed-point-index, lem-local-fixed-point-index-splits-under-perturbation, lem-graph-transversality-is-fixed-point-nondegeneracy, thm-index-of-a-nondegenerate-fixed-point, def-c-r-and-smooth-maps-between-smooth-manifolds, def-linear-isomorphism-and-invertible-linear-map, def-countable-choice]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete 236-page PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §4, printed p. 126 (polynomial maps z -> z+z^m are not Lefschetz: fixed points may be degenerate)"
    - title: "Peter Wong, Lectures on Fixed Point Theory, Mini-Course XV Encontro Brasileiro de Topologia, Rio Claro 2006 (complete notes)"
      url: "https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf"
      locator: "Lecture II §7, printed p. 16 (the converse of the Lefschetz theorem fails for subtle reasons; local indices of isolated fixed points can be arbitrary integers)"
dependency_level: 6
---

## Remark

Isolatedness of a fixed point is strictly weaker than nondegeneracy. A fixed point
is nondegenerate when $I-Df_x$ is invertible
([[def-nondegenerate-fixed-point]]), whereas the local fixed point index of
[[def-local-fixed-point-index]] is defined for every isolated fixed point,
including degenerate ones. The equivalence of nondegeneracy with transversality
of the graph to the diagonal is [[lem-graph-transversality-is-fixed-point-nondegeneracy]],
and it is exactly this transversality that fails at a degenerate isolated point.

**The standard example.** Take the local model $f(z)=z+z^2$ on $\mathbb C$,
a smooth self-map of the plane
([[def-c-r-and-smooth-maps-between-smooth-manifolds]]).
Its fixed point equation is $z+z^2=z$, i.e. $z^2=0$, so $0$ is the only fixed
point near the origin and it is isolated. Its differential is $Df_0=I$ and
$I-Df_0=0$ is not invertible
([[def-linear-isomorphism-and-invertible-linear-map]]), so $0$ is isolated but
degenerate, and the determinant formula of
[[thm-index-of-a-nondegenerate-fixed-point]] does not apply.

**Its index is nevertheless defined and equals $2$.** With the convention
$I-Df$ of this page the displacement is $\mathrm{id}-f=-z^2$, whose
representative in real coordinates on the circle $|z|=\varepsilon$ is
$v\mapsto-\varepsilon^2e^{2i\theta}$ with $\theta$ the polar angle; after
normalization this is the self-map $e^{i\theta}\mapsto e^{i(2\theta+\pi)}$ of
$S^1$, of degree $2$. Hence $\operatorname{ind}_0(f)=2$: an isolated degenerate
fixed point can carry a nonzero index, and its value is not controlled by
$I-Df_0$.

**The two theorems on this page that survive.** The definition of the local
index applies verbatim, and
under countable choice ([[def-countable-choice]]),
[[lem-local-fixed-point-index-splits-under-perturbation]] splits the degenerate
point into nondegenerate ones with the same total index. For the explicit
quadratic perturbation $f_a(z)=z+z^2-a$, $a\in\mathbb C\setminus\{0\}$ small,
the two fixed points satisfy $z^2=a$. At either point the displacement
derivative is multiplication by $-2z$, of real determinant $4|z|^2>0$,
so each index is $+1$. General smooth perturbations can have more fixed points;
the splitting theorem preserves the total index, not their number. The polynomial extends to a smooth self-map of the Riemann
sphere $S^2=\mathbb C\cup\{\infty\}$ whose only fixed points are $0$ and
$\infty$: in the chart $w=1/z$ the map is $w\mapsto w^2/(w+1)$ and the fixed
point equation $w^2/(w+1)=w$ has the unique solution $w=0$, with displacement
$w-w^2/(w+1)=w/(w+1)$, whose linear part at $0$ is the identity, so
$\operatorname{ind}_\infty(f)=+1$. This is the standard example showing that the
converse direction of the Lefschetz theory needs the index and not merely the
first derivative; the companion examples page computes both indices.
