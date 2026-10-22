---
id: lem-smooth-ball-windows-and-boundary-disk-absorption
kind: lemma
title: "Smooth ball windows and absorption along a boundary disk"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-countable-choice, lem-isotopy-extension-for-a-compact-source-with-boundary]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Chapter 1, Lemma 1.3 and its proof, printed p.3"
---

## Statement

Assume countable choice. For $n=2$ or $3$, a smoothly embedded closed $n$-ball in a connected boundaryless smooth $n$-manifold can be carried to a sufficiently small coordinate round ball by a smooth ambient isotopy. Consequently, a smooth closed disk in the boundary of a smooth $3$-ball is a standard disk window: the pair consisting of the ball and that disk is diffeomorphic to a round ball with a hemispherical boundary disk. Attaching a smooth $3$-ball to a smooth manifold along one such disk window does not change the diffeomorphism type, after smoothing the corner. The same conclusion holds in reverse, when a ball meeting the boundary in one disk is removed; the diffeomorphism is supported near the attached or removed ball and its attaching collar.

## Statement references

[[def-countable-choice]]

[[lem-isotopy-extension-for-a-compact-source-with-boundary]]

## Facts & Assumptions

**Given:** Countable choice; a smooth ball embedding $e:D^n\to N$ for $n=2,3$; and, for the last assertions, a smooth disk window and a rounded disk attachment.

[F1] An isotopy of embeddings of a compact manifold with boundary into a boundaryless manifold of the same dimension, made stationary near its time endpoints, extends to a smooth ambient isotopy with support in any prescribed neighborhood of its track ([[lem-isotopy-extension-for-a-compact-source-with-boundary]]).

[A1] The choice assumption is [[def-countable-choice]] and is used through [F1]. All ball shrinkings, coordinate interpolations and collar choices below are finite constructions.

## Proof

**Given:** The objects and hypotheses above.

1.1 Shrink the parametrized ball without collapsing it: $e_t(x)=e(r(t)x)$, where $r$ decreases smoothly from $1$ to a fixed positive $\varepsilon$ and is constant near both ends. Every slice is an embedding. For sufficiently small $\varepsilon$, its last image lies in one coordinate chart centered at $e(0)$. Write the chart representative of $e$ near $0$ as $f$, with $f(0)=0$ and $L=Df(0)$ invertible. Let $m>0$ satisfy $|Lv|\ge m|v|$. Choose $\varepsilon$ so that $\|Df(y)-L\|<m/2$ for $|y|\le\varepsilon$. The interpolation $f_s(x)=\varepsilon Lx+(1-s)(f(\varepsilon x)-\varepsilon Lx)$ has invertible differential and is injective: its difference from $\varepsilon L$ is Lipschitz with constant less than $\varepsilon m/2$, so $|f_s(x)-f_s(y)|\ge\varepsilon m|x-y|/2$. All images lie in the chart after a further shrink. This is an isotopy from the small ball to a linear ellipsoid. [given, construct]

2.1 Write $L=QP$ with $Q$ orthogonal and $P$ positive definite. The positive definite path $(1-s)P+s\lambda I$, for small $\lambda>0$, gives an isotopy from that ellipsoid to a coordinate round ball. Reparametrize and concatenate the finite paths smoothly with stationary endpoints. By [F1] the resulting embedding isotopy extends to an ambient isotopy carrying $e(D^n)$ to that round ball. A coordinate ball can be moved along any prescribed finite chain of overlapping charts, shrinking it inside each overlap before the next move; a path between its center and any prescribed target center has such a finite chart subdivision. Within a chart, translation and positive dilation of a sufficiently small round ball are embedding isotopies. Hence any two sufficiently small coordinate balls in the same connected component are ambient isotopic. [F1, A1, step 1.1, construct]

3.1 Parametrize the given $3$-ball $B$ by $D^3$. Its boundary is thereby the standard $S^2$. Apply steps 1.1–2.1 in dimension two to a parametrization of its disk window $W\subset S^2$, then move and enlarge the resulting small round disk to a hemisphere by latitude disks. The endpoint parametrization in step 2.1 is linear orthogonal followed by a positive scalar; its orthogonal factor is the restriction of a fixed orthogonal symmetry of $S^2$. Consequently the standardization can retain the specified disk parametrization, up to that fixed symmetry, rather than only its image. Thus there is an isotopy $h_t$ of $S^2$, starting at the identity, that carries $W$ to a hemisphere, and, if needed, a fixed orthogonal symmetry makes its endpoint agree with the specified standard disk coordinates. This isotopy extends over $D^3$ explicitly: in a radial annulus use $(r,x)\mapsto(r,h_{\alpha(r)t}(x))$, where $\alpha=0$ near the inner edge and $\alpha=1$ near $r=1$, and use the identity on the smaller ball. Each slice is a diffeomorphism, with inverse $(r,y)\mapsto(r,h_{\alpha(r)t}^{-1}(y))$. It is smooth across the inner edge because it is the identity there; the fixed orthogonal symmetry also extends linearly over $D^3$. This proves standardization of the ball-window pair with its disk coordinates, without extending an arbitrary sphere diffeomorphism. [F1, step 2.1, construct]

4.1 Standardize the added ball's window using its actual attaching parametrization, as permitted by step 3.1. Its collar map is then the product $(x,t)\mapsto(x,t)$ in the receiving disk coordinates. The standard ball-window pair can be represented as a cap over a flat disk: its remaining boundary is a dome meeting the window at its edge. This representation follows by viewing a round ball as two hemispherical graphs and flattening one graph in its collar; the strictly positive normal-coordinate derivative makes the flattening a diffeomorphism. Making the cap thinner is a positive rescaling of its normal coordinate. Therefore in the collar of a disk $D$ in the receiving boundary the attached ball may be represented as a thin cap, with its attaching map retained. A coordinate neighborhood of the whole closed disk exists: extend its full-rank parametrization across the boundary circle using finitely many boundary charts; the extensions agree with it on the disk, and sufficiently small extensions remain injective by compactness and the inverse function theorem. [step 3.1, construct]

5.1 In these coordinates the receiving manifold is $t\ge0$. After rounding the edge, its union with the thin cap is $t\ge\gamma(x)$, where $\gamma\le0$ is smooth and compactly supported in the disk coordinate neighborhood. Take a smooth cutoff $\rho(t)$ equal to one near the cap and zero beyond the chosen receiving collar. Choose the cap thin enough that $\|\gamma\rho'\|_\infty<1$. Then $(x,t)\mapsto(x,t-\gamma(x)\rho(t))$ sends $t\ge\gamma(x)$ diffeomorphically to $t\ge0$: its normal derivative is $1-\gamma(x)\rho'(t)>0$, its boundary value is zero, and it is the identity at the far end of each collar fiber. It is the identity outside this neighborhood, so it pastes to the identity elsewhere. This proves disk absorption. Applying the inverse construction proves disk removal, with the same support assertion. [step 4.1, construct]

6.1 The first assertion is established by steps 1.1–2.1, the window assertion by step 3.1, and both attachment assertions by step 5.1. In particular two balls glued along one boundary disk form a ball; and a boundary-attached ball indented into a ball can be removed leaving a ball. Every use of isotopy extension is in dimensions two or three with compact source and stationary endpoints, as required by [F1]. [F1, A1, step 1.1, step 2.1, step 3.1, step 5.1] ∎
