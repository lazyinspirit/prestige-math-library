---
id: lem-qftx-suspended-hopf-composite-adem-obstruction
kind: lemma
title: "Nonvanishing of consecutive suspended Hopf composites by Adem relation"
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
  - lem-qftx-hopf-generator-and-cone
  - lem-mod-two-cohomology-rings-of-complex-projective-spaces
  - thm-steenrod-squares-are-well-defined-and-natural
  - prop-steenrod-square-normalization-instability-and-top-square
  - thm-adem-relations-for-steenrod-squares
  - thm-cellular-cochains-compute-cohomology-with-local-coefficients
  - def-axiom-of-choice
dependency_roles:
  lem-qftx-hopf-generator-and-cone: mathematical-premise
  lem-mod-two-cohomology-rings-of-complex-projective-spaces: mathematical-premise
  thm-steenrod-squares-are-well-defined-and-natural: mathematical-premise
  prop-steenrod-square-normalization-instability-and-top-square: mathematical-premise
  thm-adem-relations-for-steenrod-squares: mathematical-premise
  thm-cellular-cochains-compute-cohomology-with-local-coefficients: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Appendix"
      url: https://pi.math.cornell.edu/~Hatcher/AT/ATch4.4.pdf
      locator: "§4.L, printed pp. 487–490 and Proposition 4L.11, pp. 498–499; Steenrod operations, suspension, and the Adem obstruction."
    - title: "J. P. May, A Concise Course in Algebraic Topology"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chapter 7, pp. 49–56; cofiber/fibration background."
    - title: "Allen Hatcher, Algebraic Topology, Chapter 4"
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: "§4.2, printed pp. 379–381; Hopf map and its cone."
verification:
  precheck: pending
---
## Statement

Set $\eta_2=h:S^3\to S^2$ and $\eta_j=\Sigma^{j-2}h:S^{j+1}\to S^j$ for $j\ge2$. For every $n\ge2$, the composite $\eta_n\circ\eta_{n+1}:S^{n+2}\to S^n$ is not nullhomotopic.

## Statement references

[Hatcher, Algebraic Topology, Appendix §4.L](https://pi.math.cornell.edu/~Hatcher/AT/ATch4.4.pdf)

[May, A Concise Course in Algebraic Topology](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf)

[Hatcher, Algebraic Topology, §4.2](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

## Facts & Assumptions

**Given:** The Hopf maps $\eta_j$ as defined in the Statement. Use ZF + AC for the imported singular cohomology and Steenrod-operation suppliers.

[F1] The mapping cone $C_h$ is $\mathbb{CP}^2$ with its bottom $S^2=\mathbb{CP}^1$ and one $4$-cell, and the positive degree-two generator has square the nonzero top class. [[lem-qftx-hopf-generator-and-cone]], [[lem-mod-two-cohomology-rings-of-complex-projective-spaces]]

[F2] Steenrod squares are natural, commute with suspension, and on a degree-$d$ class the top square is $Sq^d(x)=x^2$. [[thm-steenrod-squares-are-well-defined-and-natural]], [[prop-steenrod-square-normalization-instability-and-top-square]]

[F3] The mod-two Adem relation is $Sq^2Sq^2=Sq^3Sq^1$. [[thm-adem-relations-for-steenrod-squares]]

[F4] Cellular cochains of a finite CW complex compute its singular cohomology with constant coefficients, naturally for cellular maps. [[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]

[A1] All cohomology in this proof is singular cohomology with coefficients in $\mathbb F_2$; $X$ is the finite CW complex built in the proof.

## Proof

1.1 By [F1], $C_{\eta_2}=\mathbb{CP}^2$ and $Sq^2$ sends its bottom degree-two generator to the nonzero degree-four class by [F2]. For every $n\ge2$, $C_{\eta_n}=\Sigma^{n-2}C_h$. Suspension compatibility in [F2] therefore gives a nonzero $Sq^2:H^n(C_{\eta_n};\mathbb F_2)\to H^{n+2}(C_{\eta_n};\mathbb F_2)$. [F1, F2, given, algebra]

1.2 Suppose for contradiction that $\eta_n\eta_{n+1}$ is null. Put $f=\eta_n:S^{n+1}\to S^n$ and $g=\eta_{n+1}:S^{n+2}\to S^{n+1}$. Let $K:CS^{n+2}\to S^n$ be a based cone extension of $f\circ g$, and let $\chi:CS^{n+1}\to C_f$ be the characteristic map of the cell attached by $f$. Decompose $S^{n+3}$ into two cones on $S^{n+2}$. On the first define $k:S^{n+3}\to C_f$ by $\chi\circ Cg$; on the second define it by $K$ followed by $S^n\hookrightarrow C_f$. On the common equator both formulas equal $f\circ g$, and on the chosen basepoint both equal the target basepoint, so they paste to a based continuous map. Attach an $(n+4)$-cell along $k$, obtaining $X=C_f\cup_kD^{n+4}$. Its cells have dimensions $0,n,n+2,n+4$. Collapsing the bottom $S^n$ makes the cone carrying $K$ constant and turns the other cone into the suspension of $g$; collapsing that constant hemisphere and linearly rescaling the remaining suspension coordinate identifies the quotient attachment with $\Sigma g=\eta_{n+2}$. Hence $X/S^n=C_{\eta_{n+2}}$. This quotient calculation is explicit and does not assume a covariant homotopy exact sequence for cofibers. [F4, given, construct]

2.1 The cells of $X$ have dimensions $0,n,n+2,n+4$, so its cellular cochain differential is zero and $H^{n+1}(X;\mathbb F_2)=0$. Let $x,y,z$ denote the nonzero classes in degrees $n,n+2,n+4$, respectively. Inclusion $C_{\eta_n}\hookrightarrow X$ induces isomorphisms in degrees $n$ and $n+2$, since these cellular cochain groups and their differentials are unchanged by the single top cell. By step 1.1 and naturality [F2], $Sq^2x=y$. The quotient $X/S^n=C_{\eta_{n+2}}$ from step 1.2 has nonzero $Sq^2$ between degrees $n+2$ and $n+4$ by step 1.1 at index $n+2$. Collapsing the bottom subcomplex removes precisely its $0$- and $n$-cells from the cellular cochains; the quotient map preserves the upper cellular generators and their differentials. Naturality [F2] therefore gives $Sq^2y=z$. Thus $Sq^2Sq^2x=z\ne0$. But $H^{n+1}(X;\mathbb F_2)=0$, so $Sq^1x=0$. [F2, F4, step 1.1, step 1.2, algebra]

3.1 On the other hand, [F3] gives $Sq^2Sq^2x=Sq^3Sq^1x=0$ by step 2.1. This contradicts $Sq^2Sq^2x=z\ne0$, so the assumed null composite is impossible. Hence $\eta_n\eta_{n+1}\ne0$ for every $n\ge2$. [F3, step 2.1, contradiction] ∎

