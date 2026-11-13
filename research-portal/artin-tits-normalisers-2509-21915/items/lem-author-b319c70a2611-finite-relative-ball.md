---
id: lem-author-b319c70a2611-finite-relative-ball
kind: lemma
title: Finite pair separation yields a finite relative ball
status: published
domain: mathematics
origin: pipeline
deps:
  - prop-relative-linear-interface-artin-tits-prerequisites
  - def-relative-cone-artin-tits-normalisers
  - lem-finite-separation-artin-tits-normalisers
  - lem-author-b319c70a2611-coordinate-vertices
  - lem-author-b319c70a2611-hyperplane-vertex-separation
dependency_roles:
  prop-relative-linear-interface-artin-tits-prerequisites: mathematical-premise
  def-relative-cone-artin-tits-normalisers: mathematical-premise
  lem-finite-separation-artin-tits-normalisers: mathematical-premise
  lem-author-b319c70a2611-coordinate-vertices: mathematical-premise
  lem-author-b319c70a2611-hyperplane-vertex-separation: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 9
formulation_deps:
  - prop-relative-linear-interface-artin-tits-prerequisites
  - def-relative-cone-artin-tits-normalisers
argument_deps:
  - prop-relative-linear-interface-artin-tits-prerequisites
  - def-relative-cone-artin-tits-normalisers
  - lem-finite-separation-artin-tits-normalisers
  - lem-author-b319c70a2611-coordinate-vertices
  - lem-author-b319c70a2611-hyperplane-vertex-separation
---

## Statement

Let $E=\Theta_J$, $T=\mathrm{Cone}(J)$ and $u\in T^\circ$. There is $r>0$ with $B_E(u,r)\subseteq T$ meeting only finitely many distinct hyperplanes in $\mathcal H^J$.

## Facts & Assumptions

[F1] The space $E=\Theta_J$ has the metric $d_E$ induced by the coordinate Euclidean metric on $\Theta$; $B_E(u,r)=\{x\in E:d_E(x,u)<r\}$, and relative interior is computed using these balls. [[prop-relative-linear-interface-artin-tits-prerequisites]]

[F2] **Given:** The relative arrangement in [[def-relative-cone-artin-tits-normalisers]], finite strict separation of every pair of Tits-cone points in [[lem-finite-separation-artin-tits-normalisers]], and the two coordinate-vertex lemmas [[lem-author-b319c70a2611-coordinate-vertices]] and [[lem-author-b319c70a2611-hyperplane-vertex-separation]]. **Goal:** Establish a finite relative ball without ambient local finiteness.

## Proof


**Given:** The relative arrangement in [[def-relative-cone-artin-tits-normalisers]], finite strict separation of every pair of Tits-cone points in [[lem-finite-separation-artin-tits-normalisers]], and the two coordinate-vertex lemmas [[lem-author-b319c70a2611-coordinate-vertices]] and [[lem-author-b319c70a2611-hyperplane-vertex-separation]]. **Goal:** Establish a finite relative ball without ambient local finiteness.



**Proof technique:** direct.

1.1 If $E=0$, it has no proper hyperplanes, so the assertion is immediate. Otherwise put $d=\dim E>0$, choose vertices and $\varepsilon$ by [[lem-author-b319c70a2611-coordinate-vertices]] and set $r=\varepsilon/d$. All vertices lie in $T\subseteq\mathrm{Cone}$. For each of the finitely many pairs $(p_i^+,p_i^-)$ the ambient root hyperplanes strictly separating that pair form a finite set by [[lem-finite-separation-artin-tits-normalisers]]. Let $\mathcal F$ be their finite union. [F1, F2, given]

2.1 Every proper trace $K=H\cap E\in\mathcal H^J$ meeting $B_E(u,r)$ strictly separates one such pair by [[lem-author-b319c70a2611-hyperplane-vertex-separation]]. Restricted evaluation and ambient evaluation agree on $E$, so its representative ambient hyperplane $H$ belongs to $\mathcal F$. Hence all these $K$ belong to the finite set $\{H\cap E:H\in\mathcal F\}$. Also $0<r=\varepsilon/d\leq\varepsilon$, so $B_E(u,r)\subseteq B_E(u,\varepsilon)\subseteq T$ by [F1] and the choice of $\varepsilon$. This proves the assertion, counting coincident traces once. [step 1.1, F1, F2, given] ∎
