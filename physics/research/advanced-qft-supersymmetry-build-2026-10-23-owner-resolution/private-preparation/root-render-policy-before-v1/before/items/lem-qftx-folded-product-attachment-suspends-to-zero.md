---
id: lem-qftx-folded-product-attachment-suspends-to-zero
kind: lemma
title: "Folded product attachment has Hopf invariant two and null suspension"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-gauge-group-sphere-homotopy
physical_scope: null
proof_strategy: direct
axiom_base: "ZF + AC"
deps:
  - def-qftx-suspension-pinch-map
  - lem-qftx-hopf-generator-and-cone
  - thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism
  - def-axiom-of-choice
dependency_roles:
  def-qftx-suspension-pinch-map: mathematical-premise
  lem-qftx-hopf-generator-and-cone: mathematical-premise
  thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Chapter 4"
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: "§4.2, Example 4.52, printed pp. 380–381; product-cell attaching map."
    - title: "J. P. May, A Concise Course in Algebraic Topology"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chapter 7, pp. 49–56; cellular/cofiber homotopy framework."
    - title: "Allen Hatcher, Algebraic Topology, Appendix"
      url: https://pi.math.cornell.edu/~Hatcher/AT/ATch4.4.pdf
      locator: "§4.L, printed pp. 487–490; suspension and Steenrod context."
verification:
  precheck: pending
---
## Statement

Give $S^2\times S^2$ its product CW structure with $2$-skeleton $W=S^2\vee S^2$ and one oriented $4$-cell attached by $\alpha:S^3\to W$. Let $\nabla:W\to S^2$ fold the two oriented summands by the identity and put $\beta=\nabla\circ\alpha$. For a based map $f:S^3\to S^2$, its integral Hopf invariant $H(f)$ is defined by $x^2=H(f)y$ in the mapping cone $C_f=S^2\cup_fD^4$, where $x$ and $y$ are the positive generators of $H^2(C_f;\mathbb Z)$ and $H^4(C_f;\mathbb Z)$. With the product orientation, $H(\beta)=2$. Moreover the suspension $\Sigma\beta:S^4\to S^3$ is nullhomotopic. Consequently, if $\eta_3=\Sigma h$ is the suspension of the Hopf generator, then $2[\eta_3]=0$ in $\pi_4(S^3)$.

## Statement references

[Hatcher, Algebraic Topology, Example 4.52](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

[May, A Concise Course in Algebraic Topology](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf)

[Hatcher, Algebraic Topology, Appendix §4.L](https://pi.math.cornell.edu/~Hatcher/AT/ATch4.4.pdf)

[Reduced suspension pinch-map definition]([[def-qftx-suspension-pinch-map]])

[Hopf generator and mapping-cone coefficient convention]([[lem-qftx-hopf-generator-and-cone]])

## Facts & Assumptions

**Given:** The product CW structure and orientations of the Statement. Use ZF + AC for the imported cohomological Künneth theorem.

[F1] For $f:S^3\to S^2$, the mapping-cone coefficient $H(f)$ is defined by $x^2=H(f)y$ in $C_f$. [[lem-qftx-hopf-generator-and-cone]]

[F2] The cohomological cross product gives a ring isomorphism $H^*(S^2;\mathbb Z)\otimes H^*(S^2;\mathbb Z)\cong H^*(S^2\times S^2;\mathbb Z)$ under these finite free-cohomology hypotheses. [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]

[F3] The suspension pinch map $p_Z:\Sigma Z\to\Sigma Z\vee\Sigma Z$ is defined by linearly rescaling the first and second half-intervals of the suspension coordinate into the two wedge summands. [[def-qftx-suspension-pinch-map]]

[A1] Orient the $4$-cell by the product orientation, so the top cellular cohomology generator pulls back to the positive cross product $ab$.

## Proof

1.1 Let $a,b\in H^2(S^2\times S^2;\mathbb Z)$ be the positive generators from the two projections. By [F2], $a^2=b^2=0$ and $ab$ is the positive top generator. The map $\nabla:W\to S^2$ extends over the cone on $\beta$ by the definition $\beta=\nabla\alpha$; hence it extends to a map $q:S^2\times S^2=W\cup_\alpha D^4\to C_\beta$. On $W$, $q$ is the fold into the bottom $S^2$ of $C_\beta$, so $q^*x=a+b$. On the open $4$-cell, the extension is the characteristic disk of $C_\beta$ with degree $+1$ by [A1], so $q^*y=ab$. [F1, F2, A1, construct]

2.1 In the cone $C_\beta$, $x^2=H(\beta)y$ by [F1]. Pulling back with step 1.1 yields $(a+b)^2=H(\beta)ab$. Since $a^2=b^2=0$ and degree-two classes commute, the left side is $2ab$. The class $ab$ is a generator, so $H(\beta)=2$. [F1, step 1.1, algebra]

3.1 Let $i:W\hookrightarrow S^2\times S^2$ be the $2$-skeleton inclusion. The characteristic disk extends $i\alpha$ over $D^4$, so $\Sigma i\circ\Sigma\alpha$ is null. Define
$$r=(\Sigma p_1\vee\Sigma p_2)\circ\operatorname{pinch}:\Sigma(S^2\times S^2)\longrightarrow\Sigma S^2\vee\Sigma S^2,$$
where $p_1,p_2$ are the projections and the pinch is [F3]. On the first suspended wedge summand, the first projection branch is the identity up to linear rescaling of the suspension coordinate and the second branch is constant; on the second summand the roles reverse. Thus $r\circ\Sigma i\simeq\operatorname{id}_{\Sigma W}$. Applying $r$ to the nullhomotopy in the first sentence gives $\Sigma\alpha\simeq *$. Composing with $\Sigma\nabla$ gives $\Sigma\beta\simeq *$. By the definition of the suspension homomorphism, this is $2[\Sigma h]=0$ because $[\beta]=2[h]$ from step 2.1 and [F1] identifies $[h]$ as the generator. [F1, F3, step 2.1, construct] ∎

