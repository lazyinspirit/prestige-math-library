---
id: thm-tdmath-conditional-contact-calibrator
kind: theorem
title: Contact calibrators under explicit join coherence
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 12
deps: [lem-tdmath-contact-energy-orientation, def-tdmath-forward-sector-hypotheses, def-tdmath-thermal-contact-hypotheses, lem-tdmath-forward-spectator-cancellation, def-tdmath-forward-signed-comparison, thm-tdmath-sector-nesting, thm-tdmath-forward-boundary-graph, thm-tdmath-reference-strip-gluing, thm-tdmath-additive-entropy-representation, lem-tdmath-thermal-class-dichotomy]
dependency_roles:
  lem-tdmath-contact-energy-orientation: mathematical-premise
  def-tdmath-forward-sector-hypotheses: mathematical-premise
  def-tdmath-thermal-contact-hypotheses: mathematical-premise
  lem-tdmath-forward-spectator-cancellation: mathematical-premise
  def-tdmath-forward-signed-comparison: mathematical-premise
  thm-tdmath-sector-nesting: mathematical-premise
  thm-tdmath-forward-boundary-graph: mathematical-premise
  thm-tdmath-reference-strip-gluing: mathematical-premise
  thm-tdmath-additive-entropy-representation: mathematical-premise
  lem-tdmath-thermal-class-dichotomy: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Theorems 4.5–4.8, pp. 55–59"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapters 2 and 4, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  precheck: n/a
---

## Statement

Let $\Gamma_1,\Gamma_2$ be simple domains in a family of finite thermal joins satisfying A1–A7, S1–S3, T1–T5, and C1 of [[def-tdmath-forward-sector-hypotheses]] and [[def-tdmath-thermal-contact-hypotheses]]. Then there are $x_0\prec\prec x_1$ in $\Gamma_1$ and $y_0\prec\prec y_1$ in $\Gamma_2$ such that

$$(x_0,y_1)\sim(x_1,y_0).$$

Moreover, for every fixed finite composition of scaled copies of $\Gamma_1$ and $\Gamma_2$, any two equal-mass states of that same composition are comparable (CH). The conclusion is conditional on the explicitly stated join-coherence and universal-range assumptions C1 and T5.

## Facts & Assumptions

**Given:** The forward-sector and contact hypotheses for the whole join-closed family.

[A1] [[def-tdmath-forward-sector-hypotheses]]: A1–A7 and S1–S3 hold on each member of the family, including finite joins.

[A2] [[def-tdmath-thermal-contact-hypotheses]]: T1–T5 hold for every ordered pair in the family, and C1 makes an equilibrated joined state thermally equivalent to each equilibrium constituent.

[F1] [[thm-tdmath-reference-strip-gluing]]: CH holds on every finite scaled product of copies of any simple type in the family.

[F2] [[thm-tdmath-additive-entropy-representation]]: under that CH, each simple type and its scaled products have an additive extensive entropy representing accessibility.

[F3] [[lem-tdmath-thermal-class-dichotomy]]: for each simple join, either every pair of its states is thermally equivalent or one of its adiabats contains two thermally inequivalent states.

[F4] [[thm-tdmath-sector-nesting]] and [[thm-tdmath-forward-boundary-graph]]: a common adiabat has identical forward sectors; fixed-work accessibility is ordered by energy, and each component adiabat has one state at each work coordinate in its projection.

[F5] [[lem-tdmath-forward-spectator-cancellation]] and [[def-tdmath-forward-signed-comparison]]: signed equivalence is preserved by finite addition and cancellation of common spectators.

[F8] [[lem-tdmath-contact-energy-orientation]]: T1–T2 and arbitrary-spectator cancellation force a common mathematical energy orientation; the common affine change preserves the join energy-sum rule.

## Proof

**Given:** [A1]–[A2], [F1]–[F5], and [F8].

1.1 Work in [F8]'s common affine mathematical energy orientation, without redefining any physical energy or calibration. Apply [F1] and [F2] to each simple type, including every finite join, using the positive normalization by its fixed weight in [A1]. Throughout, entropy at a state means its represented-state value: $w_\Gamma$ times its unit-point-mass representation. This normalization preserves order and finite scalar amounts. The convex-combination access hypothesis in [A1] makes each resulting entropy concave, since the comparison of a scaled pair with its convex-combination state translates under the representation to the concavity inequality. By [F4], each entropy is strictly increasing with energy at fixed work coordinates. [A1, F1, F2, F4, F8]

1.2 Use T5 to choose $\bar x\in\Gamma_1$ and $\bar y\in\Gamma_2$ with $\bar x\sim_T\bar y$. Let $\phi=J_{12}(\bar x,\bar y)$ and consider its adiabat $\partial A_\phi$. T2 gives every $Z$ on that adiabat at least one split $Z=J_{12}(x_Z,y_Z)$ with $x_Z\sim_T y_Z$. [A2, F4, choose]

2.1 Suppose a join state $Z$ on $\partial A_\phi$ has two distinct equilibrium splits $(x^{(1)},y^{(1)})$ and $(x^{(2)},y^{(2)})$. By the definition of $\sim_T$, both pairs are reversible with $Z$, hence mutually accessible compounds. Their work coordinates are fixed by $Z$ and their total energies equal its energy. If the first-component energies agreed, both component states in the splits would agree, so distinctness forces unequal first-component energies. If $u_{x^{(1)}}<u_{x^{(2)}}$, fixed-work comparison [F4] gives $x^{(1)}\prec\prec x^{(2)}$; conservation of total energy gives $u_{y^{(2)}}<u_{y^{(1)}}$, hence $y^{(2)}\prec\prec y^{(1)}$. Taking $(x_0,x_1,y_0,y_1)=(x^{(1)},x^{(2)},y^{(2)},y^{(1)})$ gives $(x_0,y_1)\sim(x_1,y_0)$ because both split compounds are reversible with $Z$. If the first energies occur in the opposite order, swap the two splits and obtain the same calibrator form. Therefore, if no calibrator exists, every $Z\in\partial A_\phi$ has a unique equilibrium split. [A2, F4, step 1.2, choose]

3.1 Assume no calibrator exists. For any equilibrium split $(x_Z,y_Z)$ of $Z\in\partial A_\phi$, reversibility with $Z$ and the common adiabat give $(x_Z,y_Z)\sim(\bar x,\bar y)$ as compounds. By [F1], $x_Z$ and $\bar x$ are comparable; [F4] says their sectors coincide exactly when they are equivalent. If $x_Z\prec\prec\bar x$, pair reversibility gives $(\bar x,\bar y)\prec(x_Z,y_Z)$. Consistency adds $\bar y$ to $x_Z\prec\bar x$, and cancellation [F5] gives $\bar y\prec y_Z$. If $y_Z\prec\bar y$, consistency and the pair comparison instead cancel to give $\bar x\prec x_Z$, a contradiction. Thus $\bar y\prec\prec y_Z$, making a calibrator. The case $\bar x\prec\prec x_Z$ is symmetric: it gives $y_Z\prec\prec\bar y$, again a calibrator. Since neither is allowed under the assumption, $x_Z\sim\bar x$. Adding spectators to the two directions and cancelling by [F5] then gives both $\bar y\prec y_Z$ and $y_Z\prec\bar y$, so $y_Z\sim\bar y$. Thus every split on this adiabat has components in the corresponding component adiabats. [A1, A2, F1, F4, F5, step 1.2, step 2.1, algebra]

4.1 Under the no-calibrator assumption, fix a first-component work coordinate $v_1$ in the projection of $\partial A_{\bar x}$. The boundary-graph result [F4] gives exactly one state $x_*$ on that component adiabat at $v_1$. Every split of a join state on $\partial A_\phi$ with first work coordinate $v_1$ therefore has first component $x_*$. Each split is thermal, so $x_*\sim_T y_Z$ for its second component. T3 makes all such $y_Z$ thermally equivalent, and C1 makes each joined state $J(x_*,y_Z)=Z$ thermally equivalent to $x_*$. Hence all join states on this adiabat over fixed $v_1$ lie in one thermal class. Fixing a second-component work coordinate instead gives the corresponding conclusion for first components. [A2, F4, step 3.1]

5.1 Let $\Omega$ be the open connected work-coordinate projection of $\partial A_\phi$ from [F4]. From any point of $\Omega$, the set reachable by finitely many coordinate-axis segments contained in open boxes in $\Omega$ is relatively open, and its complement is also relatively open; connectedness makes the reachable set all of $\Omega$. Along each such segment, step 4.1 gives equivalence of the corresponding join states; T3 composes these finitely many equivalences. Thus the whole adiabat $\partial A_\phi$ is one thermal class. Since the argument works for every starting join state, every join adiabat is one thermal class. [A2, F4, step 4.1, construct]

6.1 Still assuming no calibrator, apply [F3] to each join system. Its alternative with two thermally inequivalent states on one adiabat is excluded by step 5.1, so all states of each join system are thermally equivalent. For any $x,x'\in\Gamma_1$, use T5 with one allowed second work coordinate to choose $y,y'$ with $x\sim_T y$ and $x'\sim_T y'$. C1 relates each component to its joined state, and all join states are in one thermal class; T3 therefore gives $x\sim_T x'$. The same argument gives one thermal class in $\Gamma_2$. Now take $Z=\phi\in\partial A_\phi$ and a split $(x,y)$ supplied by T2. Choose nonzero sufficiently small $\delta$ so $(u_x+\delta,v_1)\in\Gamma_1$ and $(u_y-\delta,v_2)\in\Gamma_2$, possible because the domains are open. These states form a distinct split of the same $Z$. Since the original split has $x\sim_T y$ and each component type is one thermal class, T3 gives thermal equivalence of the changed pair as well. This contradicts uniqueness of the split from step 2.1. Therefore a calibrator exists. [A2, F3, step 1.2, step 2.1, step 5.1, choose]

7.1 Fix a calibrator $x_0\prec\prec x_1$, $y_0\prec\prec y_1$, whose existence is step 6.1. Choose same-type entropy representatives $S_1,S_2$ from [F2], with positive gaps $h_1=S_1(x_1)-S_1(x_0)$ and $h_2=S_2(y_1)-S_2(y_0)$. Normalize $\widetilde S_i=S_i/h_i$, so both calibrator increments are one, and put $s(x)=\widetilde S_1(x)-\widetilde S_1(x_0)$ and $t(y)=\widetilde S_2(y)-\widetilde S_2(y_0)$. Write $u=\iota(x_0)+\iota(y_1)$ and $v=\iota(x_1)+\iota(y_0)$. The calibrator says $u\sim v$, so $v-u=(\iota(x_1)-\iota(x_0))-(\iota(y_1)-\iota(y_0))$ is equivalent to zero; translation and cancellation [F5] give $(\iota(x_1)-\iota(x_0))\sim_s(\iota(y_1)-\iota(y_0))$. For any state $x$, the signed map $d_x=\iota(x)-(1-s(x))\iota(x_0)-s(x)\iota(x_1)$ has total mass and $\widetilde S_1$-value zero. Its positive and negative parts have equal mass and entropy, so [F2] makes them equivalent. Hence $\iota(x)\sim_s(1-s(x))\iota(x_0)+s(x)\iota(x_1)$; the same argument applies to states of the second type. These are formal signed maps when a coefficient lies outside $[0,1]$. [F2, F5, step 6.1, algebra]

8.1 For a state pair $(x,y)$, put $\lambda=(s(x)+t(y))/2$ and $\delta=(s(x)-t(y))/2$. Adding the signed reductions from step 7.1 makes the pair equivalent to $(1-\lambda)(\iota(x_0)+\iota(y_0))+\lambda(\iota(x_1)+\iota(y_1))$ plus $\delta[(\iota(x_1)-\iota(x_0))-(\iota(y_1)-\iota(y_0))]$. The calibrator increment equivalence from step 7.1 makes the latter term equivalent to zero for either sign of $\delta$. Thus each pair reduces to its reference map at parameter $\lambda$. For any finite compound $A$ with amounts $M_1,M_2$ of the two types, add and scale these single-state reductions. Writing $q_1(A),q_2(A)$ for the amount-weighted sums of $s(x),t(y)$, respectively, gives $A\sim_s(M_1-q_1(A))\iota(x_0)+q_1(A)\iota(x_1)+(M_2-q_2(A))\iota(y_0)+q_2(A)\iota(y_1)$. Using $(\iota(x_1)-\iota(x_0))\sim_s(\iota(y_1)-\iota(y_0))$, this is equivalent to $M_1\iota(x_0)+M_2\iota(y_0)+Q(A)(\iota(x_1)-\iota(x_0))$, where $Q(A)=q_1(A)+q_2(A)$. If the total mass is zero, both compounds are empty and reflexivity compares them. Otherwise, for same-composition $A,B$, their base terms agree. If $Q(A)<Q(B)$, the positive and negative parts of the reference-map difference are $(Q(B)-Q(A))\iota(x_1)$ and $(Q(B)-Q(A))\iota(x_0)$, so $x_0\prec x_1$ and positive scaling compares the maps forward. If the Q values agree the maps coincide; if $Q(A)>Q(B)$ the reverse comparison holds. Translation, addition, and ordinary-order compatibility [F5] transfer the result to $A,B$. This proves CH for every fixed finite composition of the two types and their scaled copies. [A1, F2, F5, step 7.1, algebra] ∎

## Remarks

The proof uses C1 in steps 4.1 and 6.1 and T5 in steps 1.2 and 6.1. It does not establish the calibrator from the bare set-valued join formula or from T1–T4 alone. All conclusions remain conditional mathematical consequences of the listed hypotheses.
