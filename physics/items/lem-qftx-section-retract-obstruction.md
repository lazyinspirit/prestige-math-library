---
id: lem-qftx-section-retract-obstruction
kind: lemma
title: "A section forces the structure group to retract from a principal bundle"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 0
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-gauge-group-sphere-homotopy
physical_scope: null
proof_strategy: direct
axiom_base: "ZF"
deps:
  - prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant
  - def-locally-trivial-fiber-bundle
dependency_roles:
  prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant: mathematical-premise
  def-locally-trivial-fiber-bundle: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. P. May, A Concise Course in Algebraic Topology"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chapter 7, pp. 49–56; locally trivial bundles."
    - title: "Allen Hatcher, Algebraic Topology, Chapter 4"
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: "§4.2, printed pp. 379–381; bundle and homotopy context."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---
## Terminology

Let $H$ be a group with a topology making multiplication $H\times H\to H$ and inversion $H\to H$ continuous, and write $e$ for its identity. A continuous right $H$-action on $E$ is a continuous map $E\times H\to E$, $(z,h)\mapsto zh$, satisfying $ze=z$ and $(zh_1)h_2=z(h_1h_2)$.

A **locally trivial right principal $H$-bundle** is a surjective continuous map $p:E\to B$ of topological spaces with a continuous right $H$-action satisfying $p(zh)=p(z)$, such that the action is free ($zh=z$ implies $h=e$) and transitive (for each $z,z'\in p^{-1}(b)$ there is $h\in H$ with $zh=z'$) on each fiber, and $B$ has an open cover $(U_i)$ with $H$-equivariant homeomorphisms $p^{-1}(U_i)\cong U_i\times H$ over $U_i$. Here $H$ acts on the second factor by right multiplication. A space $E$ is **weakly contractible** when it is path connected and $\pi_j(E,z_0)=0$ for every $z_0\in E$ and $j\ge1$.

## Statement

Let $p:E\to B$ be a nonempty locally trivial principal topological $H$-bundle with right $H$-action, and suppose it has a continuous section. For any $b_0\in B$, the fiber $H$ is a retract of $E$. If $E$ is weakly contractible, then $H$ is path connected and $\pi_j(H,e)=0$ for every $j\ge1$.

The retraction is expressed by the commutative diagram
$$\begin{array}{ccc}H&\xrightarrow{i}&E\\\Big\downarrow{\scriptstyle\operatorname{id}_H}&&\Big\downarrow{\scriptstyle r}\\H&=&H\end{array}$$
with TikZ source
```tikz
\begin{tikzcd}
H \arrow[r,"{i}"] \arrow[dr,"{\mathrm{id}_H}"'] & E \arrow[d,"{r}"]\\
& H
\end{tikzcd}
```

## Statement references

[May, A Concise Course in Algebraic Topology, Chapter 7](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf)

[Hatcher, Algebraic Topology, Chapter 4](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

## Facts & Assumptions

**Given:** The locally trivial principal bundle, its right action, and continuous section $s:B\to E$ from the Statement. For the final conditional conclusion additionally assume that $E$ is weakly contractible.

[F1] A locally trivial fiber bundle has local product charts over an open cover. The free and transitive right $H$-action and the $H$-equivariance of the charts are the additional principal-bundle hypotheses stated above. [[def-locally-trivial-fiber-bundle]]

[F2] Based homotopy groups are functorial and invariant under based homotopy. [[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]]

[A1] In the final implication, assume the weak-contractibility condition defined in Terminology.

## Proof

1.1 Define $\Phi:B\times H\to E$ by $\Phi(b,h)=s(b)h$. Every $e\in E$ lies over a unique $b=p(e)$ and the principal action is free and transitive on $p^{-1}(b)$, so there is a unique $h$ with $e=s(b)h$. Thus $\Phi$ is bijective. In each local principal chart, $s$ is a continuous local section and the group coordinate $h$ is continuous; these charts cover $B$, so the inverse $e\mapsto(p(e),h(e))$ is continuous. The forward map is continuous by the action. Hence $\Phi$ is a homeomorphism. [F1, given, construct]

2.1 Fix $b_0\in B$. Under $\Phi$, the inclusion $i:H\to E$, $h\mapsto s(b_0)h$, and the map $r:E\to H$, $r(e)=\operatorname{pr}_H(\Phi^{-1}(e))$, satisfy $r\circ i=\operatorname{id}_H$. Thus $H$ is a retract. If $E$ is weakly contractible, it is path connected by [A1], so its continuous image $r(E)=H$ is path connected. [A1, step 1.1, given]

3.1 Choose basepoint $e_0=s(b_0)$. The maps $i$ and $r$ are based at $e_H$ and $e_0$, respectively, and [F2] gives $r_*i_*=(r\circ i)_*=\operatorname{id}_{\pi_j(H,e_H)}$. But $\pi_j(E,e_0)=0$ by [A1], so $i_*$ has zero target; the identity on $\pi_j(H,e_H)$ factors through zero and is zero. Therefore $\pi_j(H,e_H)=0$ for each $j\ge1$. [A1, F2, step 2.1, algebra] ∎

