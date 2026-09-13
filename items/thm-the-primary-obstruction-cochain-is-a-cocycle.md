---
id: thm-the-primary-obstruction-cochain-is-a-cocycle
kind: theorem
title: The primary obstruction cochain is a cocycle
status: draft
origin: pipeline
deps: ["def-primary-cellular-obstruction-cochain", "thm-cellular-chains-compute-homology-with-local-coefficients", "thm-long-exact-sequence-of-relative-homotopy-groups", "thm-cellular-cochains-compute-cohomology-with-local-coefficients", "lem-relative-single-cell-layer-has-compatible-homotopy-and-homology-bases", "prop-the-first-hurewicz-map-in-degree-one-is-abelianization", "thm-long-exact-sequence-of-a-pair-in-singular-homology"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Proposition 7.5 and Theorem 7.6, printed pages 170--172
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: Proposition 15.2, printed pages 48--49
---

## Statement

Under the hypotheses and coefficient conventions of the primary obstruction
definition,

$$ \delta\theta(f)=0. $$

Thus $\theta(f)$ determines a class

$$ [\theta(f)]\in H^{n+1}(X,A;\mathcal P) $$

in cellular, equivalently singular, cohomology with local coefficients.

## Facts & Assumptions

[F1] For a simply connected base and cells of dimension at least two, consecutive relative CW skeleta have the oriented characteristic classes as compatible relative-homotopy and homology generators ([[lem-relative-single-cell-layer-has-compatible-homotopy-and-homology-bases]]). We use this only for $n\geq2$, after passage to the supplied universal-cover coordinates.

[F2] The boundary followed by the relative inclusion in the homotopy exact sequence of a pair has zero composite ([[thm-long-exact-sequence-of-relative-homotopy-groups]]).

[F3] The AT-23 cellular differential is the signed incidence map with monodromy ([[thm-cellular-chains-compute-homology-with-local-coefficients]]), and its equivariant Hom differential computes singular local cohomology ([[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]).

[F4] For each path-connected component $B_i$, the first Hurewicz map identifies $H_1(B_i;\mathbb Z)$ with the abelianization of $\pi_1(B_i)$, naturally and without Choice ([[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]).

[F5] For a pair $(W,B)$, the singular-homology sequence is exact at $H_2(W,B;\mathbb Z)$, so the connecting map $\partial:H_2(W,B;\mathbb Z)\to H_1(B;\mathbb Z)$ kills the image of $H_2(W;\mathbb Z)$ ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]]).

## Proof

**Given:** $(X,A)$, $f:X^n\cup A\to Y$, and the local coefficient data of the statement.

1.1 First suppose $n\geq2$. Work in one component and in a supplied universal-cover coordinate system. The lift of $X^n\cup A$ is simply connected: adjoining the remaining relative cells, whose dimensions are at least three, does not change $\pi_1$. Hence [F1] identifies each lifted $(n+1)$-cell characteristic class with its oriented relative cellular generator. [F1]

1.2 Now suppose $n=1$. Put $B=X^1\cup A$ and $W=X^2\cup A$. On each component $B_i$ with its supplied basepoint and whisker, $f_*:\pi_1(B_i)\to\pi_1(Y,f(b_i))$ has abelian target by hypothesis. Thus [F4] gives a unique homomorphism $\lambda_i:H_1(B_i;\mathbb Z)\to\pi_1(Y,f(b_i))$ with $f_*=\lambda_i\circ h_{B_i}$. For an oriented relative two-cell $e$, let $u_e\in H_2(W,B;\mathbb Z)$ be its characteristic disk class. Its pair boundary $\partial u_e\in H_1(B_i;\mathbb Z)$ is the Hurewicz class of the attaching loop, including the supplied orientation and whisker. Therefore $\theta(f)(e)=\lambda_i(\partial u_e)$. The assumed trivial conjugation action makes this formula independent of loop transport in the target and makes the $n=1$ coefficient system constant in these component coordinates. No representatives are selected simultaneously. [F3, F4, F5]

2.1 In this $n\geq2$ case, the geometric obstruction on a lifted $(n+1)$-cell is the value on its cellular generator of the composite “inverse relative Hurewicz, relative boundary, then $f_*$,” with the prescribed whisker transport. The coordinate rule is equivariant under deck transformations, so it descends to the local cochain $\theta(f)$ of the definition. [F1, F3, step 1.1]

2.2 For $n=1$, let $c$ be an oriented relative three-cell. Its attaching sphere determines $v_c\in H_2(W;\mathbb Z)$; under the relative inclusion $i_*:H_2(W;\mathbb Z)\to H_2(W,B;\mathbb Z)$, the class $i_*v_c$ is the relative cellular boundary of $c$, by the connecting-map and signed-incidence description in [F3]. The sphere and all its boundary incidences lie in one component, so Step 1.2 gives $(\delta\theta(f))(c)=\lambda_i\bigl(\partial i_*v_c\bigr)=0.$ The last equality is exactness of the pair homology sequence [F5]. This argument retains every cell and path in the arbitrary subcomplex $A$ inside the pair $(W,B)$; it never assumes that $A$ is simply connected. [F3, F5, step 1.2]

3.1 For $n\geq2$, let $c$ be an oriented lifted $(n+2)$-cell. Naturality of relative Hurewicz for the two consecutive skeletal pairs identifies the cellular boundary of $c$ with the Hurewicz image of its attaching class in $\pi_{n+1}(X^{n+1}\cup A,X^n\cup A)$. Evaluating $\theta(f)$ on that boundary is therefore $f_*$ applied after the next relative boundary. The consecutive maps $\pi_{n+1}(X^{n+1}\cup A)\to\pi_{n+1}(X^{n+1}\cup A,X^n\cup A)\to\pi_n(X^n\cup A)$ have zero composite by [F2]. Thus $(\delta\theta(f))(c)=0$. [F1, F2, step 2.1]

4.1 The relative $(n+2)$-cells freely generate the cellular chain module, so Steps 3.1 and 2.2 give $\delta\theta(f)=0$ in their respective ranges, component by component. For $n\geq2$, [F3] includes exactly the whisker monodromy used in Step 2.1; for $n=1$, it is the identity by Step 1.2. Hence $\theta(f)$ defines a cellular cohomology class, and the AT-23 comparison in [F3] carries it naturally to the stated singular local-coefficient class. No simultaneous choices beyond the supplied coordinates are made. $\square$ [F3, step 2.1, step 1.2, step 3.1, step 2.2]
