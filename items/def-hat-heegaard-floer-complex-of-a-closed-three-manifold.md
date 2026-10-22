---
id: def-hat-heegaard-floer-complex-of-a-closed-three-manifold
kind: definition
title: "Hat Heegaard Floer complex of a closed three-manifold"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - lem-complete-heegaard-data-have-a-zero-chern-spin-c-sector
justified_by:
  - lem-os-disk-and-polygon-analytic-foundations
  - thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant
proof_strategy: not-applicable
axiom_use: "Countable Choice is assumed only for the stated equivalence of full-sector and global weak admissibility, through the zero-Chern Spin-c sector supplier; the diagram and conditional count definitions make no analytic existence assertion."
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

A Whitney class $\phi\in\pi_2(x,y)$ is a relative homotopy class of maps of a closed disk with two marked boundary points into the symmetric product, taking its two boundary arcs into $T_\alpha,T_\beta$ and its marked points to $x,y$. For $g>0$, its domain is the integral two-chain of complementary regions; its coefficient at an interior point $p$ is the intersection multiplicity $n_p(\phi)$ with $\{p\}+\operatorname{Sym}^{g-1}(\Sigma)$. In particular $n_z(\phi)$ is the basepoint coefficient. A periodic domain is an integral region two-chain whose boundary is an integral sum of full attaching circles. The domain of a class $\psi\in\pi_2(x,x)$ is periodic. Such a class is normalized when $n_z(\psi)=0$. Write $\mu(\phi)$ for the real Fredholm index of the disk linearization, before quotienting longitudinal translation; well-definedness and its topological index formula are properties to be proved in the analytic and index theory.

For $g=0$, the target is a point and the only Whitney class is constant: define its domain and every $n_p(\phi)$ to be zero and its index to be zero. Formal periodic domains are $m\Sigma$, with coefficient $n_p(m\Sigma)=m$ at every point. Thus the only basepoint-normalized periodic domain is zero, and every sector weak-admissibility test is vacuous. No negative symmetric power or point-divisor intersection is used in this rank.

For a periodic domain P, cap its full attaching-circle boundary with the specified compression disks, using the boundary multiplicities and orientations, to obtain the integral class $H(P)\in H_2(Y;\mathbb Z)$. A Spin-c structure $\mathfrak s$ is a lift of the oriented tangent frame bundle through $\operatorname{Spin}^c(3)\to SO(3)$; $c_1(\mathfrak s)$ is the first Chern class of its determinant line, with determinant character $[s,u]\mapsto u^2$. **Weak admissibility in the specified Spin-c sector $\mathfrak s$** means that EVERY nonzero integral periodic domain P with $n_z(P)=0$ and $\langle c_1(\mathfrak s),H(P)\rangle=0$ has both positive and negative region coefficients. This condition is imposed even when the sector has no diagram generators. It is a condition on domains and the intended sector, not only on periodic classes based at existing generators.

The ordinary sector module $\widehat{CF}(\mathcal H,\mathfrak s)$ uses generators with Morse Spin-c label $\mathfrak s_z(x)=\mathfrak s$. The label is defined by compatible handle Morse data: replace the gradient in disjoint tubes around the generator's index-one/index-two trajectories and the basepoint's index-zero/index-three trajectory by nonsingular fields, and take the Spin-c lift of their oriented perpendicular planes. Its actual construction, independence properties and periodic-index formula are obligations of the Spin-c and index theory. In particular the equality between the index of a REALIZED normalized periodic class based at x and the Chern evaluation in $\mathfrak s_z(x)$ is not assumed as its own proof. A realized-generator test alone is not substituted for the stated domain condition.

An **admissible diagram for the full single-diagram hat module** satisfies this sector condition for EVERY Spin-c structure on Y, including the sectors with no generators. The full module below uses all generators and hence all intended sectors; an empty sector contributes a zero summand but is not omitted from the admissibility test. Under Countable Choice, this full-diagram condition is equivalent to global weak admissibility: every nonzero periodic domain with $n_z=0$ has both signs. Global weakness implies every sector test by restriction; conversely, the zero-Chern Spin-c sector supplied under Countable Choice by Complete Heegaard data have a zero-Chern Spin-c sector tests every normalized periodic domain. No generator in that sector is needed. For a SINGLE specified sector, ordinary weak admissibility remains the stated Chern-kernel condition and need not imply global weakness. No assertion of the full group from a diagram tested only at its represented sectors is made.

For $g>0$ choose a complex structure $j$ and positive area form on $\Sigma$. Analytic data include a smooth path $J_t$ on the symmetric product, constant on actual neighborhoods of $t=0,1$. On a fixed neighborhood of the diagonal and the point-divisors for a chosen interior point of every complementary region, including $z$, it agrees with the integrable structure $\operatorname{Sym}^g(j)$; away from that neighborhood it is tame for the form descended from the product surface area form. The path is chosen in a sufficiently small nearly symmetric class. Product-integrable normal forms near the finitely many transverse generators may be included among its specified auxiliary choices. Existence of such choices and of the regular perturbations needed below remains a mathematical obligation. A holomorphic strip is an actual smooth finite-Dirichlet-energy map $u:\mathbb R\times[0,1]\to\operatorname{Sym}^g(\Sigma)$ satisfying
$$u_s+J_t(u)u_t=0,\qquad u(s,0)\in T_\alpha,\quad u(s,1)\in T_\beta,$$
with uniform generator limits at both longitudinal ends. The space in class $\phi$ is $\mathcal M_J(\phi)$, and translation in $s$ acts on it. Regular means that its actual linearized operator is surjective at the solutions being counted. Local multiplicity positivity, Fredholmness, the class index and compactness are results to be proved, not choices of which maps to count.

The hat diagram-level module $\widehat{CF}(\mathcal H;\mathbb F_2)$ is free over $\mathbb F_2$ on the generators. For regular data for which the displayed quotient sets are finite and, for each $x$, only finitely many nonempty pairs $(y,\phi)$ occur, its candidate count operator is
$$\widehat\partial x=\sum_y\ \sum_{\substack{\phi\in\pi_2(x,y)\\\mu(\phi)=1,\ n_z(\phi)=0}}\#_2\bigl(\mathcal M_J(\phi)/\mathbb R\bigr)y.$$
Here $\#_2$ is parity of an actual finite zero-dimensional quotient. For $g=0$ the operator is zero on the empty generator. That the required regular finite counts exist, that $\widehat\partial^2=0$, and that its homology is invariant under changing pointed admissible diagrams and auxiliary choices are separate analytic and move theorems. Once these hold, the common homology is denoted $\widehat{HF}(Y;\mathbb F_2)$. No filtered chain-homotopy invariant, integral orientations or absolute grading is asserted by this definition.

Comparisons of embedded diagrams permit orientation-preserving isomorphisms carrying $Y$, its two handlebodies, their oriented surface, the attaching systems and $z$ to the specified counterparts, equivalently compatible collared extensions of the surface map. Curve-factor reordering gives the corresponding product identification. Analytic data are transported by the induced symmetric-product map, including $j$, the area form, protected neighborhoods and $J_t$. The intended count identification is the actual pushforward of generators and disk classes with these transported data; its compatibility with the operator requires proof. An ambient isotopy is not assumed to act as the identity. Comparison of independently chosen perturbations likewise requires the continuation theorem.

## Definition references

[[def-countable-choice|Countable Choice]]

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]

[[lem-complete-heegaard-data-have-a-zero-chern-spin-c-sector]]

[Ozsvath and Szabo, *Holomorphic disks and topological invariants for closed three-manifolds*, §§2–3, Definition4.10, Theorem4.9 and Theorem7.5](https://arxiv.org/pdf/math/0101206)

[Lipshitz, *Heegaard Floer Homologies*, §§2–5](https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf)

## Remarks

The multipointed knot construction has additional knot-arc and marked-pair data and is specialized to knots in the three-sphere. Its terminology is contextual here; no closed-manifold analytic conclusion is deduced from it.

The knot-specialized pointed convention is defined independently with additional knot-arc and marked-pair data; it does not alter this closed-manifold definition.

## Remarks references

[[def-admissible-pointed-heegaard-floer-data|The separate knot-specialized pointed convention]]

