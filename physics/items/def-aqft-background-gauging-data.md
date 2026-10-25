---
id: def-aqft-background-gauging-data
kind: definition
title: Finite background groupoid and cocycle-weighted gauging data
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps:
- def-aqft-two-group-background
- def-aqft-finite-background-two-groupoid
- thm-aqft-finite-background-two-groupoid-coherence
- def-qftx-finite-groupoid-integration
dependency_roles:
  def-aqft-two-group-background: mathematical-premise
  def-aqft-finite-background-two-groupoid: mathematical-premise
  thm-aqft-finite-background-two-groupoid-coherence: mathematical-premise
  def-qftx-finite-groupoid-integration: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: No choice principle is used; all field, arrow, and automorphism sets are
  finite.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
  - title: Moore and Saxena, TASI Lectures on Topological Field Theories and Differential
      Cohomology
    url: https://arxiv.org/pdf/2510.07408
    locator: §23.3 PDF97–100 / printed96–99, especially (23.34)–(23.38); alternating
      homotopy-group measure, not an explicit proof of the local cochain gluing formula.
  - title: Daniel S. Freed and Frank Quinn, Chern-Simons Theory with Finite Gauge
      Group
    url: https://www.math.ru.nl/~mueger/TQFT/FQ.pdf
    locator: §2, PDF pp. 8–11, for the finite bundle groupoid, automorphism measure,
      and cocycle-weighted partition function.
  - title: Robbert Dijkgraaf and Edward Witten, Topological Gauge Theories and Group
      Cohomology
    url: https://www.ias.edu/sites/default/files/sns/%5B126%5DCommMathPhys129-1990.pdf
    locator: §§6.2 and 6.4–6.5, PDF pp. 22–30, for the finite 3D cocycle action, ordered
      simplex weights, and gauge-invariance scope.
---


## Definition

Let $K$ be a finite ordered simplicial complex. A **finite background field groupoid** $\mathcal F(K)$ is a small category of declared fields and invertible gauge equivalences, with finitely many isomorphism classes and finite automorphism groups. Its automorphisms retain the multiplicities declared by the field model. A **cocycle/action weight** is a function $W_K:\operatorname{Ob}\mathcal F(K)\to U(1)$ constant on every gauge arrow. Its normalized gauging sum is

$$
Z_K(W_K)=\sum_{[x]\in\pi_0\mathcal F(K)}\frac{W_K(x)}{|\operatorname{Aut}_{\mathcal F(K)}(x)|}.
$$

For the finite $2$-group specialization, fix finite $(G,A,\rho,\beta)$ and let $\mathcal B(K)$ be the explicit background gauge $2$-groupoid: objects are flat $G$-edge cochains and $A$-face cochains satisfying $\delta_aB=a^*\beta$; $1$-arrows retain raw vertex/edge parameters $(g,\lambda)$, and $2$-arrows are vertex cochains $t$ with $\lambda'-\lambda=\delta_{a^g}t$, for fixed $g$. The raw $1$-composition is the displayed $\tau$-corrected composition; its associator is $\beta(k_i,h_i,g_i)$. Write $\pi_0$ for object equivalence classes, $\pi_1(\mathcal B(K),x)$ for $2$-isomorphism classes of $1$-automorphisms, and $\pi_2(\mathcal B(K),x)$ for $2$-automorphisms of the identity $1$-arrow. For a phase weight $W_K$ constant on all $1$-arrows, define the higher normalized gauging sum

$$
Z^{(2)}_K(W_K)=\sum_{[x]\in\pi_0\mathcal B(K)}W_K(x)\frac{|\pi_2(\mathcal B(K),x)|}{|\pi_1(\mathcal B(K),x)|}.
$$

Distinct raw gauge labels are not identified by equality of their effects on fields. The higher sum retains $\pi_2$; it is not ordinary groupoid integration of the $1$-truncation. In particular a point has higher weight $|A|/|G|$ for unit action, whereas an ordinary field groupoid $BG$ has weight $1/|G|$.

For a subcomplex $L\subseteq K$ and fixed field $s$ on $L$, relative fields and arrows use exact restriction to $s$, identity vertex gauge labels on $L$, zero edge gauge labels on $L$, and zero vertex $2$-gauge labels on $L$. Their higher sum uses the same $\pi_2/\pi_1$ prescription. Ordinary groupoids are included as $2$-groupoids with only identity $2$-arrows, so this prescription reduces to the preceding ordinary sum. A higher cocycle supplies an admissible scalar action only after its evaluated weight is proved invariant; nontrivial boundary line-bundle actions require their own transgression data and are not silently treated as scalar functions.

## Definition references

[[def-aqft-two-group-background]]

[[def-aqft-finite-background-two-groupoid]]

[[thm-aqft-finite-background-two-groupoid-coherence]]

[[def-qftx-finite-groupoid-integration]]

## Facts & Assumptions

**Given:** the finite field models and invariant phase weights in the Definition.

[F1] [[def-aqft-finite-background-two-groupoid]] gives the full raw $1$- and $2$-arrow conventions and relative cochains.

[F2] [[thm-aqft-finite-background-two-groupoid-coherence]] proves all coherence, equivalence and finiteness assertions for this model, with finite groups $\pi_1,\pi_2$ and point values $G,A$.

[F3] [[def-qftx-finite-groupoid-integration]] defines ordinary finite groupoid integration with retained automorphism groups.

## Proof

1.1 By [F2], the higher field model and its relative versions are finite $2$-groupoids, so their component sets and both homotopy groups are finite. Every denominator $|\pi_1|$ is a positive integer. By [F3] the same holds for the component and automorphism data of the ordinary model. Thus both displayed sums are finite. [given, F2, F3, algebra]

1.2 An equivalence arrow has a reverse and associators; conjugation by it identifies the $2$-isomorphism classes of $1$-automorphisms at its endpoints. Whiskering with it and its reverse similarly identifies $2$-automorphisms of the identity arrows; the inverse composites are identified with identities by the specified invertible $2$-arrows. These constructions are inverse on the respective classes, so $|\pi_1|$ and $|\pi_2|$ are constant on each component. The invariant $W_K$ therefore makes the higher summand independent of representative. In the ordinary case this is exactly invariance of automorphism orders under conjugation. [given, F1, F2, F3, construct]

1.3 At a point [F2] gives $\pi_1=G$, $\pi_2=A$, hence the higher unit-weight sum is $|A|/|G|$. When all $2$-arrows are identities, $\pi_2$ is trivial and $\pi_1$ is the ordinary automorphism group, so the higher prescription equals the ordinary one. [given, F2, F3, algebra]

2.1 The finite, representative-independent sums in steps 1.1–1.3 supply the stated ordinary and higher gauging data, including the point normalization and relative prescription. [step 1.1, step 1.2, step 1.3] ∎
