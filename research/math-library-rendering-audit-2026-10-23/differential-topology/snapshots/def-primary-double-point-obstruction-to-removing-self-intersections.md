---
id: def-primary-double-point-obstruction-to-removing-self-intersections
kind: definition
title: The primary double point obstruction to removing self-intersections
status: published
origin: session
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
- def-self-transverse-immersion-and-double-point-locus
- lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle
- def-local-oriented-intersection-sign
- cor-every-immersion-is-locally-an-embedding
- def-compact-space
- thm-smooth-inverse-function-theorem-on-manifolds
- def-based-loops-and-fundamental-group
- thm-fundamental-group-laws
justified_by: []
aliases: []
landmark: false
sources:
  references:
  - title: C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University
      Press 2016; full text retrieved from the Internet Archive Wayback Machine snapshot of the ETH Zürich course
      copy), Chapter 6 §§6.2–6.4, printed pp. 169–192 (Theorem 6.2.1; Propositions 6.3.1 and 6.3.3; Theorems 6.3.2,
      6.3.4, 6.3.6, 6.4.5, 6.4.8 and 6.4.9; Lemma 6.3.5)
    url: https://web.archive.org/web/20241113132819/https://people.math.ethz.ch/~dkosanovic/24-FS/Wall-Differential-Topology.pdf
  - title: Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045), §1,
      article pp. 2–5 (self-intersection set; ambient versus non-ambient isotopy) and §2, article pp. 6–14 (Theorems
      2.1–2.3 and 2.8; the modulo 2 and integral Whitney obstruction; the Whitney invariant); §3 and §5 used only
      for the recorded knotting boundary
    url: https://arxiv.org/pdf/math/0604045
---
## Definition

Let $f:M^m\looparrowright X^{2m}$ be a self-transverse immersion of a closed manifold. Use the ordered locus $\Delta_2(f)$, unordered branch-pair set $D(f)$, and collision image $\Sigma(f)$ of [[def-self-transverse-immersion-and-double-point-locus]]. The branch-pair set is finite: local injectivity gives an open neighbourhood of the diagonal in compact $M\times M$ containing no off-diagonal coincidence, so $\Delta_2(f)$ is a closed subset of its compact complement; it is discrete directly: in a common target chart, the difference map $(u,v)\mapsto\chi(f(u))-\chi(f(v))$ has invertible derivative at each coincident pair because the two tangent images are complementary, so [[thm-smooth-inverse-function-theorem-on-manifolds]] isolates that pair. Compact discreteness makes the locus finite. This argument uses [[cor-every-immersion-is-locally-an-embedding]] and [[def-compact-space]]. It also applies whenever finiteness of $D(f)$ is given directly.

The **primary double point data** are:

1. The unoriented count $\bar I(f)=\#D(f)\bmod2\in\mathbb Z_2$, counting unordered branch pairs, including distinct pairs over a triple image.
2. If $M$ and $X$ are oriented and $m$ is even, the integral count
$$I(f)=\sum_{d\in D(f)}\varepsilon(d)\in\mathbb Z.$$
Each sign is the local sign of that branch pair and is independent of its ordering, by [[def-local-oriented-intersection-sign]]. For odd $m$ the pair sign changes under interchange, so an ordering must be fixed if signs are used; the unoriented count remains defined. If there are no triple or higher-multiplicity images, the branch-pair count is also the image-point count, with the corresponding signs when defined. With higher multiplicities there is no such term-by-term identification, although numerical counts can coincide (a triple image contributes three pairs, which is one modulo two).
3. For a chosen pair of genuine double points $p,q$ with chosen joining source arcs, the group obstruction is the class of the resulting Whitney circle $\gamma=\alpha*\beta$ in $\pi_1(X,p)$, where the image paths $\alpha$ and $\beta$ run from $p$ to $q$ and back. A base whisker $\lambda$ from $x_0$ to $p$ and compatible label paths are part of the data. In a normalized convention put $g(p)=1$ and $g(q)=[\lambda*\gamma*\bar\lambda]\in\pi_1(X,x_0)$. Cancelling $\bar\lambda*\lambda$ gives the inverse change of base point, so $g(q)=g(p)$ exactly when $[\gamma]=1$; multiplying both labels on the left by any fixed label preserves this criterion by group cancellation ([[def-based-loops-and-fundamental-group]], [[thm-fundamental-group-laws]]). This is the chosen-path label convention illustrated by [[lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle]], proof step 2.2; the calculation uses only paths, not globally embedded closed sheets. No independence from unrelated choices of joining paths is asserted. There is no construction of a nontrivial label by a codimension-at-least-three meridian. If $X$ is simply connected every such circle class is trivial.

An embedding has $D(f)=\Sigma(f)=\varnothing$, so both defined counts vanish. Counts alone do not classify embeddings up to isotopy. The disjunction criterion on this page uses admissible pairs and, in the simply connected oriented even-dimensional case, the vanishing integral branch-pair count (the disjunction proposition below). No general invariance statement is asserted here. In the Euclidean even-dimensional oriented setting, the later normal push-off argument identifies twice this integral count with minus the normal Euler number; this definition does not consume that later result. All labelled choices are finite data; no Axiom of Choice is needed by this definition.
