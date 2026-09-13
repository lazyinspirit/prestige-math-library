---
id: thm-postnikov-towers-exist-for-connected-cw-complexes
kind: theorem
title: Postnikov towers exist for connected CW complexes
status: published
origin: pipeline
deps: ["def-postnikov-section-and-postnikov-tower", "thm-long-exact-sequence-of-relative-homotopy-groups", "lem-extending-a-map-over-one-cell-is-equivalent-to-nullhomotoping-its-attaching-sphere", "def-axiom-of-choice", "lem-high-relative-cells-do-not-change-lower-homotopy", "cor-homotopy-groups-of-a-cw-complex-depend-on-finite-skeleta-in-each-representative"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Section 7.12.1 and Theorem 7.40, printed pages 192--193
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: Lecture 12, Theorem 12.1, Lemma 12.2, Corollary 12.3, and Proposition 12.4, printed pages 37--40
---

## Statement

Assume AC. Every connected based CW complex $X$ admits Postnikov sections

$$ p_n:X\longrightarrow P_nX\qquad(n\geq1) $$

in which $P_nX$ is a CW complex obtained from $X$ by attaching cells of dimension at least $n+2$. They can be equipped with maps $q_n:P_nX\to P_{n-1}X$ satisfying $q_np_n=p_{n-1}$ for the chosen models, with $P_0X=*$. The maps $q_n$ are unique up to homotopy rel $X$ after the sections are fixed. No inverse-limit recovery assertion is part of the theorem.

## Facts & Assumptions

[F1] If every relative cell has dimension at least $r+1$, the inclusion preserves $\pi_i$ for $i<r$ and is surjective on $\pi_r$ ([[lem-high-relative-cells-do-not-change-lower-homotopy]]).

[F2] For a cell attachment, the relative homotopy boundary sends the characteristic-disk class to the attaching-sphere class ([[thm-long-exact-sequence-of-relative-homotopy-groups]]).

[F3] Each sphere map, disk map, and homotopy in a CW union has finite cell support, so it occurs at a finite construction stage ([[cor-homotopy-groups-of-a-cw-complex-depend-on-finite-skeleta-in-each-representative]]).

[F4] The one-cell criterion reduces each extension and homotopy-extension over a relative cell of dimension at least $n+2$ to a homotopy group of the $(n-1)$-truncated target ([[lem-extending-a-map-over-one-cell-is-equivalent-to-nullhomotoping-its-attaching-sphere]]).

[A1] AC chooses simultaneous representatives, attachments, fillers, and the countable family of stage constructions ([[def-axiom-of-choice]]).

## Proof

**Given:** A connected based CW complex $X$ and [A1].

1.1 Fix $n\geq1$ and put $Z_n=X$. Suppose $Z_{t-1}$ has been constructed for $t>n$. Choose a based sphere map $S^t\to Z_{t-1}$ representing every element of $\pi_t(Z_{t-1})$, and attach one $(t+1)$-cell along each map to form $Z_t$. The relative pair has only $(t+1)$-cells, so [F1] preserves every $\pi_i$ with $i<t$ and makes $\pi_t(Z_{t-1})\to\pi_t(Z_t)$ surjective. [A1, F1]

2.1 In the relative homotopy exact sequence, each selected attaching map is the boundary of its characteristic-disk class by [F2]. Because all elements were selected, the boundary $\pi_{t+1}(Z_t,Z_{t-1})\to\pi_t(Z_{t-1})$ is surjective. Exactness and the vanishing of $\pi_t(Z_t,Z_{t-1})$ from [F1] therefore give $\pi_t(Z_t)=0$. [F1, F2, step 1.1]

3.1 Define $P_nX=\bigcup_{t>n}Z_t$ and let $p_n$ be the inclusion of $X$. Every added cell has dimension $t+1\geq n+2$. For $i\leq n$, all inclusions preserve $\pi_i$ by [F1]. For fixed $i>n$, Step 2.1 kills $\pi_i$ at stage $Z_i$, and later cells have dimension at least $i+2$, so [F1] prevents its reappearance. [F1, step 2.1]

4.1 A sphere representative in the union has image in a finite subcomplex by [F3], hence in one $Z_t$; the same holds for a disk nullhomotopy. It follows in both the surjective and injective directions that $\pi_i(P_nX)$ is the sequential colimit of the stage groups. Step 3.1 thus gives

$$ \pi_i(P_nX)\cong\pi_i(X)\ (i\leq n),\qquad \pi_i(P_nX)=0\ (i>n). $$

Therefore $p_n$ is a Postnikov section. [F3, step 3.1]

5.1 Carry out Steps 1.1--4.1 for every $n\geq1$ under [A1], and put $P_0X=*$. Suppose $p_{n-1}:X\to P_{n-1}X$ is fixed. The target has no homotopy above degree $n-1$, while every relative cell of $(P_nX,X)$ has dimension at least $n+2$. Extending $p_{n-1}$ one cell at a time encounters an attaching sphere of dimension at least $n+1$, whose class in the target is zero. Simultaneous fillers give $q_n:P_nX\to P_{n-1}X$ with $q_np_n=p_{n-1}$. [A1, F4, step 4.1]

6.1 If $q_n'$ is another such extension, regard a homotopy rel $X$ as an extension over the relative prism cells. Their dimensions are one greater than those of $(P_nX,X)$, so every obstruction again lies above degree $n-1$ and vanishes. Thus $q_n\simeq q_n'$ rel $X$. Together with the unique map to $P_0X$, these maps form the claimed tower. [A1, F4, step 5.1]

7.1 Empty higher homotopy groups merely yield empty attachment families, and the trivial group requires no representative. Connectedness supplies a common component and based groups throughout. All arbitrary family selections occur in Steps 1.1 and 5.1--6.1 and are covered by [A1]; the limit argument itself is the individual finite-support argument of [F3]. The construction gives no comparison from $X$ to an ordinary or homotopy inverse limit, so no convergence has been smuggled in. $\square$ [A1, F3, step 4.1, step 6.1]
