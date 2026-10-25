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
---
## Statement

Let $p:E\to B$ be a nonempty locally trivial principal topological $H$-bundle with right $H$-action, and suppose it has a continuous section. For any $b_0\in B$, the fiber $H$ is a retract of $E$. If $E$ is weakly contractible, then $H$ is path connected and $\pi_j(H,e)=0$ for every $j\ge1$.

The retraction is expressed by the commutative diagram
$$\begin{array}{ccc}H&\xrightarrow{i}&E\\\Big\downarrow{\scriptstyle\operatorname{id}_H}&&\Big\downarrow{\scriptstyle r}\\H&=&H\end{array}$$
with TikZ source
```tikz
\begin{tikzcd}
H \arrow[r,"i"] \arrow[dr,"\operatorname{id}_H"'] & E \arrow[d,"r"]\\
& H
\end{tikzcd}
```

## Statement references

[May, A Concise Course in Algebraic Topology, Chapter 7](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf)

[Hatcher, Algebraic Topology, Chapter 4](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

## Facts & Assumptions

**Given:** The locally trivial principal bundle, its right action, and continuous section $s:B\to E$ from the Statement.

[F1] A locally trivial fiber bundle has local product charts in which each fiber point has a unique group coordinate under a principal action. [[def-locally-trivial-fiber-bundle]]

[F2] Based homotopy groups are functorial and invariant under based homotopy. [[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]]

[A1] “Weakly contractible” means path connected and with all based homotopy groups in positive degrees trivial.

## Proof

1.1 Define $\Phi:B\times H\to E$ by $\Phi(b,h)=s(b)h$. Every $e\in E$ lies over a unique $b=p(e)$ and the principal action is free and transitive on $p^{-1}(b)$, so there is a unique $h$ with $e=s(b)h$. Thus $\Phi$ is bijective. In each local principal chart, $s$ is a continuous local section and the group coordinate $h$ is continuous; these charts cover $B$, so the inverse $e\mapsto(p(e),h(e))$ is continuous. The forward map is continuous by the action. Hence $\Phi$ is a homeomorphism. [F1, given, construct]

2.1 Fix $b_0\in B$. Under $\Phi$, the inclusion $i:H\to E$, $h\mapsto s(b_0)h$, and the map $r:E\to H$, $r(e)=\operatorname{pr}_H(\Phi^{-1}(e))$, satisfy $r\circ i=\operatorname{id}_H$. Thus $H$ is a retract. Since $E$ is path connected by [A1], its continuous image $r(E)=H$ is path connected. [A1, step 1.1, given]

3.1 Choose basepoint $e_0=s(b_0)$. The maps $i$ and $r$ are based and [F2] gives $r_*i_*=(r\circ i)_*=\operatorname{id}_{\pi_j(H,e)}$. But $\pi_j(E,e_0)=0$ by [A1], so $i_*$ has zero target; the identity on $\pi_j(H,e)$ factors through zero and is zero. Therefore $\pi_j(H,e)=0$ for each $j\ge1$. [A1, F2, step 2.1, algebra] ∎

