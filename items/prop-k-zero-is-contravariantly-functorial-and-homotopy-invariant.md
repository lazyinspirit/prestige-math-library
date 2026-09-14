---
id: prop-k-zero-is-contravariantly-functorial-and-homotopy-invariant
kind: proposition
title: K⁰ is contravariantly functorial and homotopy invariant
status: draft
origin: pipeline
deps: [def-complex-topological-k-zero-by-grothendieck-completion, def-grothendieck-ring-structure-and-rank-map, def-reduced-complex-k-theory, prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism, thm-homotopy-invariance-of-vector-bundle-pullback, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §2.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Functoriality and homotopy invariance, printed pp.40–42"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 §1"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Functoriality of KU, printed pp.203–204"
---

## Statement

Assume AC. A continuous map $f:X\to Y$ of compact Hausdorff spaces induces a
unital ring map

$$f^*:K^0(Y)\longrightarrow K^0(X),$$

with $\operatorname{id}^*=\operatorname{id}$ and
$(g\circ f)^*=f^*g^*$. Homotopic maps induce the same map. If $f$ is based,
then $f^*$ restricts to $\widetilde K^0(Y)\to\widetilde K^0(X)$.

## Facts & Assumptions

**Given:** AC and continuous maps between compact Hausdorff spaces.

[F1] Pullback bundles have canonical identity and composite comparisons
([[prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism]]).

[F2] Under AC, homotopic maps pull a vector bundle back to isomorphic endpoint
bundles ([[thm-homotopy-invariance-of-vector-bundle-pullback]]).

[F3] Grothendieck completion is universal for monoid maps
([[def-complex-topological-k-zero-by-grothendieck-completion]]), and tensor
product defines the ring structure
([[def-grothendieck-ring-structure-and-rank-map]]).

[F4] Reduced $K^0$ is the kernel of restriction to the basepoint
([[def-reduced-complex-k-theory]]).

[A1] AC is used only through the endpoint-isomorphism theorem [F2].

## Proof

**Proof technique:** direct.

1.1 Pullback sends $[E]$ to $[f^*E]$ and preserves Whitney sums. By [F3] it extends uniquely to $f^*([E]-[F])=[f^*E]-[f^*F]$. Pullback also preserves tensor products and the trivial line, so this is a unital ring map. The canonical isomorphisms in [F1] give the identity and contravariant composition laws on bundle generators, hence on all virtual classes. [F1, F3, algebra]

2.1 If $f_0\simeq f_1$, [F2] gives $f_0^*E\cong f_1^*E$ for every bundle $E$. The two induced maps therefore agree on all generators and, by the formula in step 1.1, on $K^0(Y)$. This is the sole use of AC. [F2, A1, step 1.1]

3.1 If $f:(X,x_0)\to(Y,y_0)$ is based, then $f\circ i_{x_0}=i_{y_0}$. Step 1.1 gives $i_{x_0}^*f^*=i_{y_0}^*$, so $f^*$ carries the kernel in [F4] into the corresponding kernel. [F1, F4, step 1.1] ∎
