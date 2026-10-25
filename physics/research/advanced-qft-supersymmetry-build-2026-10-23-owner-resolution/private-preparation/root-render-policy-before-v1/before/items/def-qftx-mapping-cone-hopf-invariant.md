---
id: def-qftx-mapping-cone-hopf-invariant
kind: definition
title: Integral mapping-cone Hopf invariant for maps S3 to S2
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
axiom_base: "ZF + AC, inherited through the stated singular and cellular cohomology suppliers."
deps:
  - lem-cw-quotients-and-collapse-of-a-contractible-subcomplex
  - def-mapping-cylinder-and-mapping-cone
  - def-reduced-cone-suspension-and-cofiber-sequence
  - def-singular-cohomology-ring
  - thm-cellular-cochains-compute-cohomology-with-local-coefficients
  - def-axiom-of-choice
dependency_roles:
  lem-cw-quotients-and-collapse-of-a-contractible-subcomplex: mathematical-premise
  def-mapping-cylinder-and-mapping-cone: mathematical-premise
  def-reduced-cone-suspension-and-cofiber-sequence: mathematical-premise
  def-singular-cohomology-ring: mathematical-premise
  thm-cellular-cochains-compute-cohomology-with-local-coefficients: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Appendix 4"
      url: https://pi.math.cornell.edu/~Hatcher/AT/ATch4.4.pdf
      locator: "§4.B, printed pp. 427–428: mapping cones, cup-square coefficient, and the Hopf invariant."
    - title: "J. Peter May, A Concise Course in Algebraic Topology"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chapter 7, pp. 49–56; cofiber and cellular cohomology framework."
verification:
  precheck: pending
---
## Definition

Let $f:S^3\to S^2$ be a based continuous map. Give $S^2$ an orientation and give the attached $4$-cell its chosen orientation. Its mapping cone is the CW complex $C_f=S^2\cup_fD^4$, with the basepoint as its $0$-cell. Let $x\in H^2(C_f;\mathbb Z)$ be the unique class restricting to the positive generator of $H^2(S^2;\mathbb Z)$, and let $y\in H^4(C_f;\mathbb Z)$ be the generator determined by the oriented $4$-cell. Define the integral mapping-cone Hopf invariant $H(f)\in\mathbb Z$ by the equation
$$x\smile x=H(f)y.$$

## Definition references

[Hatcher, Algebraic Topology, Appendix §4.B](https://pi.math.cornell.edu/~Hatcher/AT/ATch4.4.pdf)

[May, A Concise Course in Algebraic Topology, Chapter 7](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf)

## Facts & Assumptions

**Given:** The based map, orientations, and coefficient group in the Definition. Use ZF + AC for the imported cohomology suppliers.

[F1] The ordinary cell cone $C_f=S^2\cup_fD^4$ attaches the cone base by $f$ and collapses its tip, without collapsing the basepoint track. [[def-mapping-cylinder-and-mapping-cone]] In the coned CW structure that track is a contractible subcomplex; collapsing it gives the reduced cone and is a based homotopy equivalence by [[lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]]. The reduced convention is [[def-reduced-cone-suspension-and-cofiber-sequence]]. The ordinary attachment has the three-cell structure used below.

[F2] Singular cohomology has a natural cup product $H^p(C_f;\mathbb Z)\times H^q(C_f;\mathbb Z)\to H^{p+q}(C_f;\mathbb Z)$. [[def-singular-cohomology-ring]]

[F3] Cellular cochains compute singular cohomology of a finite CW complex with the stated constant coefficients. [[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]

[A1] The $0$-, $2$-, and $4$-cells of $C_f$ carry the orientations specified in the Definition.

## Verification

1.1 By [F1], the cells of $C_f$ have dimensions $0,2,4$. Its cellular cochain groups are therefore $\mathbb Z$ in those degrees and zero in degrees $1$ and $3$; every cellular coboundary into or out of degrees $2$ and $4$ is zero because the adjacent cochain group is zero. [F3] gives $H^2(C_f;\mathbb Z)\cong\mathbb Z$ and $H^4(C_f;\mathbb Z)\cong\mathbb Z$, with the restriction and oriented top-cell generators in the Definition. [F1, F3, A1, algebra]

2.1 By [F2], $x\smile x$ belongs to $H^4(C_f;\mathbb Z)=\mathbb Z y$. Since $y$ is a generator, there is a unique integer $H(f)$ with $x\smile x=H(f)y$. The orientations fix its sign, so the displayed equation defines an integer without any further choice. [F2, step 1.1, A1, algebra] ∎

