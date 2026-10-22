---
id: lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption
kind: lemma
title: "Choice-free marked smooth ball windows and disk absorption"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [lem-choice-free-isotopy-extension-for-a-compact-smooth-source, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. The input includes actual ball and window parameters and, for attachment, the attaching collar. All shrinking paths, Euclidean cutoffs and ambient extensions use finitely many charts and the choice-free compact-source extension supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Lemma1.3 and its complete proof, printed p.3; the fixed-input finite-chart extension removes any dependence on a general partition-of-unity theorem"
---

## Statement

For $n=2,3$, a given smooth ball embedding $e:D^n\to N$ into a connected boundaryless smooth $n$-manifold is isotopic through embeddings to a small coordinate round ball, and that embedding isotopy extends ambiently with compact support. For a parametrized smooth $n$-ball $B$ and a parametrized smooth boundary $(n-1)$-disk $W$, the pair $(B,W)$ is diffeomorphic to the standard ball with a hemispherical window. The diffeomorphism can retain the specified window parameter, using stereographic parameters on the standard hemisphere and allowing the necessary orientation of that parameter. No choice axiom is assumed.

Consequently, attaching a parametrized smooth $n$-ball to a smooth $n$-manifold along such a window does not change its diffeomorphism type, provided an attaching collar and corner rounding are supplied. The resulting diffeomorphism is supported in the added ball and an arbitrarily small receiving collar. The inverse assertion holds for removing a ball that meets the boundary in exactly one such window with the supplied collar charts. In dimension two the windows are intervals.

## Facts & Assumptions

**Given:** The specified smooth embeddings, ball and disk parameters, and the attaching collar and rounded local corner charts where attachment or removal is asserted.

[F1] An isotopy of embeddings of a compact smooth source into a boundaryless smooth target, stationary near its time endpoints, extends smoothly with compact support in a chosen track neighborhood, without choice ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]], Statement).

[F2] Full-rank Euclidean maps have smooth local inverses, without choice ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], Statement).

## Proof

1.1 First shrink the source parameter by $e_t(x)=e(r(t)x)$, with $r$ decreasing from $1$ to a fixed $\varepsilon>0$ and stationary near both time endpoints. For small enough $\varepsilon$ the last image lies in one chart about $e(0)$. Write its coordinate map near zero as $f$, with $f(0)=0$ and derivative $L$ invertible. Choose $m>0$ with $|Lv|\ge m|v|$, and $\varepsilon$ with $\|Df(y)-L\|<m/2$ for $|y|\le\varepsilon$. The maps $$f_u(x)=\varepsilon Lx+(1-u)(f(\varepsilon x)-\varepsilon Lx)$$ are embeddings: their derivatives are invertible and their differences satisfy $|f_u(x)-f_u(y)|\ge\varepsilon m|x-y|/2$. Their images lie in the chart after a further shrink. Write $L=QP$, with $Q$ orthogonal and $P$ positive definite. The path from $P$ to a small scalar matrix stays positive definite. It takes this parameterized ellipsoid to a coordinate round ball with parameter $x\mapsto\lambda Qx$. Stationarize the joins and apply [F1]. These are finitely specified paths. Small round balls can be moved along a finite chart chain: connectedness and local path-connectedness give a path between their centers, its compact image has a finite chart subdivision, and small translations and positive dilations in each chart give the required disk embedding paths. Apply [F1] to each path. [F1, F2, given, construct]

2.1 Pull the window to $S^{n-1}$ using the supplied parameter of $B$. Repeat step 1.1 in dimension $n-1$ for its full-dimensional disk embedding. Here the shrinking dimension is one for $n=2$, and the argument is unchanged. Move the small coordinate disk to a fixed pole and use a stereographic chart centered there. Its final disk parameter is $x\mapsto\lambda Qx$ in that chart. Increase $\lambda$ to the radius for a hemisphere; all disks in this path are embedded, and [F1] extends this isotopy of boundary disk embeddings to the whole sphere. Therefore the endpoint sphere isotopy sends the original window parameter exactly to stereographic $Qx$ on the hemisphere. Orthogonal $Q\in O(n-1)$ extends by the orthogonal symmetry $\operatorname{diag}(Q,1)$ of $S^{n-1}$; compose with its inverse if exact standard orientation of the disk parameter is required. This fixed symmetry extends linearly over $D^n$. The sphere isotopy itself extends over the ball by $$rx\longmapsto r\,h_{\alpha(r)t}(x),$$ with $\alpha=0$ near an inner radius and $\alpha=1$ near the outer boundary, and the identity on the inner ball. Its inverse has $h_{\alpha(r)t}^{-1}$ in the same formula, and it is smooth at the inner gluing sphere because it is exactly the identity nearby. Thus the window and its full parameter are standardized without an extension assertion for arbitrary sphere diffeomorphisms. [F1, step 1.1, construct]

3.1 Use that retained parameter to standardize the added ball's actual attaching map. A standard hemisphere window can be flattened in its normal collar to give a flat disk with a dome over it; interpolate the two graph functions while keeping positive normal derivative. Thin this dome by positive scaling of its normal coordinate. In the supplied receiving collar, use disk coordinates $x$ and inward coordinate $t\ge0$. After the specified corner rounding, the union with this thin cap has equation $t\ge\gamma(x)$, where $\gamma\le0$ is smooth and supported in a slightly extended disk chart. A full-dimensional disk parameter extends a little across its edge by [F2] and finitely many boundary charts: local smooth extensions agree on the disk, and a finite bump-weighted extension retains them there; its differential remains invertible, and compactness separates distant parameters, giving one smaller injective extension. These are only finite constructions. Choose a smooth one-variable cutoff $\rho(t)$ equal to one near the thin cap and zero beyond the receiving collar. Make the cap so thin that $\|\gamma\rho'\|_\infty<1$. Then $$ (x,t)\longmapsto(x,t-\gamma(x)\rho(t))$$ takes the rounded union diffeomorphically to $t\ge0$: its normal derivative is positive, its value on $t=\gamma(x)$ is zero, and it is the identity at the far end of every collar fiber. Off this coordinate neighborhood it is the identity. The inverse gives the removal statement with the same support. In dimension two $x$ is one-dimensional and the identical formula proves interval attachment. No general collar-existence or unmarked ball-identification theorem has been used; the required parameters and attaching collars were part of the input. [F2, step 2.1, construct] ∎
