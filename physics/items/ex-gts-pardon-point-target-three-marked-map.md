---
id: ex-gts-pardon-point-target-three-marked-map
kind: example
title: Three marked points stabilize the constant sphere and give the point-target invariant
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 11
domain: mathematics
library: physics
deps:
  - def-axiom-of-choice
  - def-gts-symplectic-and-almost-complex-curve-data
  - def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor
  - def-gts-pardon-implicit-atlas-and-vfc-package
  - thm-singular-homology-satisfies-dimension-and-arbitrary-additivity
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
  def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor: mathematical-premise
  def-gts-pardon-implicit-atlas-and-vfc-package: mathematical-premise
  thm-singular-homology-satisfies-dimension-and-arbitrary-additivity: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: John Pardon, An Algebraic Approach to Virtual Fundamental Cycles on Moduli Spaces of Pseudo-Holomorphic Curves, arXiv:1309.2370v6
      url: https://arxiv.org/pdf/1309.2370v6
      locator: §5.2 Lemma 5.2.6 and §9.3 Definition 9.3.1.
    - title: Dietmar Salamon, Lectures on Floer Homology, IAS/Park City Graduate Summer School notes (1997)
      url: https://www.math.utoronto.ca/mgualt/Morse%20Theory/Salamon%20floer.pdf
      locator: §4.2, pp. 45–51, definitions and equivalence of genus-zero stable maps.
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Assume full AC for the supplied Čech/VFC convention. Let $X=\{\ast\}$ be the one-point smooth zero-dimensional symplectic manifold with its unique two-form $\omega=0$ and unique almost-complex structure $J=0$. Let $\beta=0$, $g=0$, and $n=3$. The unique isomorphism class of stable map is the constant map $u:\mathbb P^1\to\{\ast\}$ with ordered markings $0,1,\infty$. The resulting moduli space is one regular point, its Pardon virtual class is the ordinary class $[\ast]$, and the three-point invariant is $1\in H_0(\{\ast\};\mathbb Q)\cong\mathbb Q$. By contrast, the constant map from $\mathbb P^1$ with only the two markings $0,\infty$ is not stable.

## Example references

[[def-gts-symplectic-and-almost-complex-curve-data]]

[[def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor]]

[[def-gts-pardon-implicit-atlas-and-vfc-package]]

[[thm-singular-homology-satisfies-dimension-and-arbitrary-additivity]]

## Facts & Assumptions

**Given:** Full AC and the target, class, genus, and markings in the example.

[F1] [[def-gts-symplectic-and-almost-complex-curve-data]]: a symplectic manifold is smooth with a closed pointwise nondegenerate two-form, and a map from a Riemann surface is $J$-holomorphic when $du\circ j=J\circ du$.

[F2] [[def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor]]: arithmetic genus is $g(C)=1-\chi(C,\mathcal O_C)$; an ordinary node has local model $\mathbb C\{x,y\}/(xy)$; and a constant rational component is stable exactly when it has at least three special points.

[F3] [[def-gts-pardon-implicit-atlas-and-vfc-package]]: under full AC for its Čech/VFC clauses, an oriented regular zero-obstruction atlas has virtual fundamental class equal to the ordinary fundamental class; the stable-map GW class is its pushforward under stabilization and evaluation.

[F4] [[thm-singular-homology-satisfies-dimension-and-arbitrary-additivity]]: for every abelian group $G$, the ordinary singular homology of a point satisfies $H_0(\ast;G)\cong G$.

## Verification
 1.1 For the two-marked constant map, every automorphism $z\mapsto az$ with $a\in\mathbb C^\times$ fixes $0$ and $\infty$ and preserves the constant map. This gives an infinite automorphism group, so the two-marked map is not stable by [F2]. [given, F2, construct]

2.1 A Möbius transformation fixing the three distinct points $0,1,\infty$ is the identity. Thus the three-marked constant map has trivial automorphism group, and its domain is stable by [F2]. The unique map to a point satisfies the $J$-holomorphic equation because both sides are the zero tangent map; its homology class is $\beta=0$. [given, F1, F2, step 1.1, algebra]

3.1 Let $C$ be any genus-zero nodal curve with three ordered markings; write $k$ for its number of irreducible components, $e$ for its number of nodes, and $h_v$ for the genus of the normalization of component $v$. At each node the local ring $\mathbb C\{x,y\}/(xy)$ embeds in the normalization $\mathbb C\{x\}\oplus\mathbb C\{y\}$ as the pairs with equal constant terms, whose quotient is $\mathbb C$; away from nodes the normalization is an isomorphism. Hence the normalization sequence is $0\to\mathcal O_C\to\nu_*\mathcal O_{\widetilde C}\to\bigoplus_{q\text{ a node}}\mathbb C_q\to0$, so $\chi(\mathcal O_C)=\sum_v(1-h_v)-e=k-\sum_vh_v-e$ and $g(C)=\sum_vh_v+e-k+1$. A connected graph with $k$ vertices and $e$ edges has first Betti number $e-k+1$: the boundaries of a spanning tree generate the rank-$(k-1)$ augmentation-zero subgroup of its vertex group. Thus all terms in the genus formula are nonnegative, so every $h_v=0$ and the dual graph is a tree with $e=k-1$. Counting special points over all components counts each marking once and each node twice, giving $3+2e=2k+1$. Stability of every rational component requires at least three special points, so $2k+1\ge3k$ and $k\le1$. Since $k\ge1$, $k=1$. Therefore the domain is a smooth projective line; an ordered triple of distinct points is carried to $(0,1,\infty)$ by a unique Möbius transformation. The unique map to the point makes the stable-map moduli one point. Its domain tangent space and target-map deformation/obstruction spaces are zero; the linearized section $0\to0$ is surjective of index zero. Hence $Z=\{\ast\}$, $E=0$, $s=0$ is a regular zero-dimensional chart. Orient it by the positive generator of $H_0(\{\ast\};\mathbb Z)$. [given, F1, F2, F3, step 2.1, algebra]

4.1 By [F3], this oriented regular atlas has virtual class the ordinary fundamental class $[\ast]$. The stabilization/evaluation map is the identity of the one-point space, so its pushforward remains $[\ast]$. On the cohomology-dual convention this is the functional $a\mapsto a(\ast)$ on $\check H^0(\{\ast\};\mathbb Q)=\mathbb Q$: the singleton cover is cofinal, with degree-zero cochains $\mathbb Q$ and no higher cochains. Identifying that functional with its value at $1$ gives the ordinary point class. By [F4] with $G=\mathbb Q$, this is the generator $1\in H_0(\{\ast\};\mathbb Q)\cong\mathbb Q$. This is a mathematical model calculation, not empirical evidence. [F3, F4, step 3.1, algebra] ∎ 
## Remarks

The diagram records the reparametrization square for a constant map. Its arrows are the domain automorphism and the constant map to the target point; commutativity follows because $u\circ h=u$. It illustrates the infinite symmetry in the two-marked case only; the verification above establishes the group and invariant claims without relying on the diagram.

```tikzcd
\mathbb P^1 \arrow[r, "u"] \arrow[d, "h"'] & \{\ast\} \arrow[d, "\mathrm{id}"] \\
\mathbb P^1 \arrow[r, "u"'] & \{\ast\}
```
