---
id: def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum
kind: definition
title: "Degreewise mod-two cohomology of the universal real Thom prespectrum"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-thom-prespectrum-of-the-universal-real-and-oriented-bundles
  - thm-thom-isomorphism-for-oriented-vector-bundles
  - lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology
  - prop-steenrod-square-normalization-instability-and-top-square
  - def-axiom-of-choice
justified_by:
  - lem-stable-thom-cohomology-is-degreewise-eventually-constant
dependency_level: 2
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. P. May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Thom spaces and suspension, printed pp.194–196; universal TO construction, printed p.220; inverse-limit/lim-one caveat, printed p.233."
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "Section 12, Definition 13 and stabilization of Thom cohomology, printed pp.22–23; variance and compatible-tuple definition are made explicit locally."
verification:
  precheck: n/a
---

## Definition

Assume AC, inherited from the shared bundle and Thom construction. Use the real levels $T_r=\operatorname{Th}(\gamma_r)$ and first-coordinate structure maps $\alpha_r:S^1\wedge T_r\to T_{r+1}$ of the shared Thom prespectrum. For $q\in\mathbb Z$ put $A_r(q)=\widetilde H^{r+q}(T_r;\mathbb F_2)$ and define the backwards bonding map

$$\rho_r(q)=\sigma^{-1}\alpha_r^*:A_{r+1}(q)\longrightarrow A_r(q),$$

where $\sigma$ is reduced cohomology suspension with the sphere coordinate first. Define

$$\widehat H^q(TO;\mathbb F_2)=\{(x_r)_{r\ge0}\in\prod_{r\ge0}A_r(q):\rho_r(q)x_{r+1}=x_r\text{ for every }r\},\qquad \widehat H^*(TO;\mathbb F_2)=\bigoplus_{q\in\mathbb Z}\widehat H^q(TO;\mathbb F_2).$$

The conditions are linear, so this is a well-defined vector space with componentwise operations. It is an inverse-limit prespectrum invariant; identifying it with represented spectrum cohomology would require a separate comparison theorem.

The normalized Thom isomorphisms give $A_r(q)\cong H^q(BO(r);\mathbb F_2)$, with $u_r$ the normalized rank-$r$ Thom class. The bonding-map computation and eventual constancy are proved in [[lem-stable-thom-cohomology-is-degreewise-eventually-constant]]: all terms vanish for $q<0$, and for $q\ge0$ projection to any rank $r\ge q$ identifies the compatible tuples with the weight-$q$ polynomial Thom module. In particular, writing $U=(u_r)$,

$$\widehat H^*(TO;\mathbb F_2)\cong\mathbb F_2[w_1,w_2,\ldots]U,\qquad |w_i|=i,\quad |U|=0.$$

This is a graded vector-space and characteristic-polynomial-module identification, justified by that lemma. It gives no ring structure from reduced finite-level cup products. Each weight is finite-dimensional.
