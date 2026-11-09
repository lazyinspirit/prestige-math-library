---
id: lem-author-74a9c17e63f1-index-calculation
kind: lemma
title: Cohomological indexing of the actual graded groups
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-74a9c17e63f1-graded-comparison
  - lem-eilenberg-maclane-shift-index
  - prop-tower-exact-couple-interface
  - def-motivic-cohomology
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-74a9c17e63f1-graded-comparison: mathematical-premise
  lem-eilenberg-maclane-shift-index: mathematical-premise
  prop-tower-exact-couple-interface: mathematical-premise
  def-motivic-cohomology: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 14
---

## Statement
Assume the Axiom of Choice. For the actual motivic tower, the additive tower spectral sequence indexed from page2 has
$$E_2^{a,b}=\pi_{-a-b}\operatorname{gr}^{-b}F_{\mathrm{mot}}K(X)=H^{a-b,-b}_{\mathrm{mot}}(X,\mathbb Z),$$
with zero terms when $-b<0$. Its differentials are $d_s:E_s^{a,b}\to E_s^{a+s,b-s+1}$, and the corresponding target homotopy degree at $(a,b)$ is $-a-b$. Convergence is a separate assertion requiring additional hypotheses, such as the degreewise bounds of the tower interface.

## Facts & Assumptions
[A1] The Axiom of Choice and the fixed size conventions of the cited constructions are inherited through [[lem-author-74a9c17e63f1-graded-comparison]]. They discharge that supplier’s local-realization premise at its first application below. [[math:def-axiom-of-choice]]

**Given:** The Axiom of Choice and the fixed size conventions of the cited constructions, together with the actual cofiber triangles and source graded equivalences.

**Goal:** Check the stage, weight, shift and differential labels explicitly.

[F1] [[prop-tower-exact-couple-interface]] supplies the page2 indexing $\pi_{-a-b}\operatorname{gr}^{-b}$ and differential degrees without convergence hypotheses. Its convergence clause additionally requires degreewise high-stage vanishing and low-stage isomorphisms, which are not assumed here.

[F2] [[lem-author-74a9c17e63f1-graded-comparison]] supplies the actual graded complex; [[lem-eilenberg-maclane-shift-index]] gives $\pi_n(C[2r])=H^{2r-n}(C)$. [[def-motivic-cohomology]] supplies the two-index notation.

## Proof
1.1 Use the supplied realization under [A1]. Substitute $r=-b$ and $n=-a-b$ into [F2]. Then $2r-n=-2b+a+b=a-b$, so the actual graded equivalence yields the displayed group identification. If $b>0$, the stage weight is negative and its group is zero by the zero extension in [F2]. [A1, F1, F2, algebra]

2.1 The exact-couple source and target labels are those already calculated in [F1]; their differential sends $(a,b)$ to $(a+s,b-s+1)$ and lowers total homotopy degree by one. Indeed $-(a+s)-(b-s+1)=-a-b-1$. Thus the shift calculation is compatible with the differential and with the corresponding target homotopy degree. It establishes these indices; convergence requires the separate additional hypotheses in [F1]. [F1, F2, step 1.1, algebra] ∎
