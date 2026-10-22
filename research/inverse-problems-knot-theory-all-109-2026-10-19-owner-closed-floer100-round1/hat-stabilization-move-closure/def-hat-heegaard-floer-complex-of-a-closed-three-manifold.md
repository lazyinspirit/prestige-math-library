---
id: def-hat-heegaard-floer-complex-of-a-closed-three-manifold
kind: definition
title: "Hat Heegaard Floer complex of a closed three-manifold"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps: []
justified_by:
  - lem-os-disk-and-polygon-analytic-foundations
  - thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Ozsváth and Szabó, Holomorphic disks and topological invariants for closed three-manifolds, §§2–3"
      url: "https://arxiv.org/pdf/math/0101206"
    - title: "Lipshitz, Heegaard Floer Homologies, §§2–5"
      url: "https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf"
---

## Definition

Let $Y$ be a closed connected oriented smooth three-manifold. A pointed genus-$g$ Heegaard diagram for $Y$ consists of an embedded splitting $Y=U_\alpha\cup_\Sigma U_\beta$, where $\Sigma=\partial U_\alpha$ is a closed oriented genus-$g$ surface and each $U$ is a handlebody, meaning a regular neighborhood of a finite connected graph; ordered systems $\boldsymbol\alpha=(\alpha_1,\ldots,\alpha_g)$ and $\boldsymbol\beta=(\beta_1,\ldots,\beta_g)$ of pairwise disjoint smooth simple closed curves bounding specified disjoint proper compression disks in the respective handlebodies, each disk system cutting its handlebody into one ball; and one point $z$ off the curves. Opposite-system curves meet transversely in finitely many points. This is closed-manifold data; it includes neither a knot nor a second marked point.

Write $q:\Sigma^g\to\operatorname{Sym}^g(\Sigma)=\Sigma^g/S_g$ for the permutation quotient. The product tori are the images
$$T_\alpha=q(\alpha_1\times\cdots\times\alpha_g),\qquad T_\beta=q(\beta_1\times\cdots\times\beta_g).$$
The group $S_g$ acts on the ambient product, rather than on a fixed ordered product of distinct attaching circles. A generator is an intersection $x\in T_\alpha\cap T_\beta$; equivalently it selects one intersection point on each curve of each system. There are finitely many generators. For $g=0$ the symmetric product and both empty products are one point, with the empty generator.

A Whitney class $\phi\in\pi_2(x,y)$ is a relative homotopy class of maps of a closed disk with two marked boundary points into the symmetric product, taking its two boundary arcs into $T_\alpha,T_\beta$ and its marked points to $x,y$. Its domain is the integral two-chain of complementary regions; its coefficient at an interior point $p$ is the intersection multiplicity $n_p(\phi)$ with $\{p\}+\operatorname{Sym}^{g-1}(\Sigma)$. In particular $n_z(\phi)$ is the basepoint coefficient. A periodic domain is an integral region two-chain whose boundary is an integral sum of full attaching circles. The domain of a class $\psi\in\pi_2(x,x)$ is periodic. Such a class is normalized when $n_z(\psi)=0$. Write $\mu(\phi)$ for the real Fredholm index of the disk linearization, before quotienting longitudinal translation; well-definedness and its topological index formula are properties to be proved in the analytic and index theory.

For the hat construction, **weak admissibility in a generator sector** means that every normalized periodic class $\psi\in\pi_2(x,x)$ with $\mu(\psi)=0$ and nonzero domain has both positive and negative region coefficients. An admissible diagram for the full hat module satisfies this condition at every generator. This is the index-zero weak condition: it does not require mixed signs for periodic classes with nonzero index. In the standard Spin-c formulation the periodic-index theorem identifies this index with the first-Chern pairing of the generator's Spin-c structure; that identification is a separate theorem, not an assumption of that theorem's own proof. One may additionally choose a **globally weakly admissible** diagram, meaning that every nonzero periodic domain with zero basepoint coefficient has both signs. This stronger auxiliary condition is not imposed on all input diagrams here.

For $g>0$ choose a complex structure $j$ and positive area form on $\Sigma$. Analytic data include a smooth path $J_t$ on the symmetric product, constant on actual neighborhoods of $t=0,1$. On a fixed neighborhood of the diagonal and the point-divisors for a chosen interior point of every complementary region, including $z$, it agrees with the integrable structure $\operatorname{Sym}^g(j)$; away from that neighborhood it is tame for the form descended from the product surface area form. The path is chosen in a sufficiently small nearly symmetric class. Product-integrable normal forms near the finitely many transverse generators may be included among its specified auxiliary choices. Existence of such choices and of the regular perturbations needed below remains a mathematical obligation. A holomorphic strip is an actual smooth finite-Dirichlet-energy map $u:\mathbb R\times[0,1]\to\operatorname{Sym}^g(\Sigma)$ satisfying
$$u_s+J_t(u)u_t=0,\qquad u(s,0)\in T_\alpha,\quad u(s,1)\in T_\beta,$$
with uniform generator limits at both longitudinal ends. The space in class $\phi$ is $\mathcal M_J(\phi)$, and translation in $s$ acts on it. Regular means that its actual linearized operator is surjective at the solutions being counted. Local multiplicity positivity, Fredholmness, the class index and compactness are results to be proved, not choices of which maps to count.

The hat diagram-level module $\widehat{CF}(\mathcal H;\mathbb F_2)$ is free over $\mathbb F_2$ on the generators. For regular data for which the displayed quotient sets are finite and, for each $x$, only finitely many nonempty pairs $(y,\phi)$ occur, its candidate count operator is
$$\widehat\partial x=\sum_y\ \sum_{\substack{\phi\in\pi_2(x,y)\\\mu(\phi)=1,\ n_z(\phi)=0}}\#_2\bigl(\mathcal M_J(\phi)/\mathbb R\bigr)y.$$
Here $\#_2$ is parity of an actual finite zero-dimensional quotient. For $g=0$ the operator is zero on the empty generator. That the required regular finite counts exist, that $\widehat\partial^2=0$, and that its homology is invariant under changing pointed admissible diagrams and auxiliary choices are separate analytic and move theorems. Once these hold, the common homology is denoted $\widehat{HF}(Y;\mathbb F_2)$. No filtered chain-homotopy invariant, integral orientations or absolute grading is asserted by this definition.

Comparisons of embedded diagrams permit orientation-preserving isomorphisms carrying $Y$, its two handlebodies, their oriented surface, the attaching systems and $z$ to the specified counterparts, equivalently compatible collared extensions of the surface map. Curve-factor reordering gives the corresponding product identification. Analytic data are transported by the induced symmetric-product map, including $j$, the area form, protected neighborhoods and $J_t$. The intended count identification is the actual pushforward of generators and disk classes with these transported data; its compatibility with the operator requires proof. An ambient isotopy is not assumed to act as the identity. Comparison of independently chosen perturbations likewise requires the continuation theorem.

## Definition references

[Ozsvath and Szabo, *Holomorphic disks and topological invariants for closed three-manifolds*, §§2–3, Definition4.10, Theorem4.9 and Theorem7.5](https://arxiv.org/pdf/math/0101206)

[Lipshitz, *Heegaard Floer Homologies*, §§2–5](https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf)

## Remarks

The multipointed knot construction has additional knot-arc and marked-pair data and is specialized to knots in the three-sphere. Its terminology is contextual here; no closed-manifold analytic conclusion is deduced from it.

[[def-admissible-pointed-heegaard-floer-data|The separate knot-specialized pointed convention]]
