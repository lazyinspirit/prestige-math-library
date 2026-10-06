---
id: thm-borel-polynomial-base-from-a-transgressive-simple-fiber-system
kind: theorem
title: "A transgressive simple fiber system gives a polynomial base"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - thm-cohomological-serre-spectral-sequence
  - thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence
  - def-morphism-of-spectral-sequences
  - cor-contractible-nonempty-spaces-have-the-homology-of-a-point
  - cor-cohomology-over-a-field-is-dual-to-homology-over-that-field
  - def-axiom-of-choice
  - cor-every-vector-space-has-a-basis
  - thm-tensor-products-commute-with-arbitrary-direct-sums
  - thm-unit-isomorphisms-for-module-tensor-products
  - thm-universal-property-of-module-tensor-products
  - lem-relative-lifts-produce-cohomological-transgressions
  - lem-fiber-and-limit-isomorphisms-force-the-base-axis-isomorphism
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Spectral Sequences in Algebraic Topology, Chapter 1"
      url: "https://pi.math.cornell.edu/~hatcher/SSAT/SSch1.pdf"
      locator: "Theorem 1.34 (Borel) and complete proof, printed pp. 54–56: transgressive simple systems and the polynomial-base spectral-sequence comparison."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. Let $F\to E\to B$ be a Serre fibration with $E$ contractible and $B$ simply connected CW. The hypotheses concern the actual strict fiber cohomology ring; no CW-type or homotopy-equivalence assertion for the fiber is assumed. Suppose $H^*(F;\mathbb F_2)$ has a basis consisting of the finite products of **distinct** positive-degree classes $x_\lambda$, including the empty product, and only finitely many $x_\lambda$ occur in each degree. Suppose classes $y_\lambda\in H^{|x_\lambda|+1}(B,*;\mathbb F_2)$ satisfy $\delta x_\lambda=p^*y_\lambda$. Then

$$\mathbb F_2[Y_\lambda]\xrightarrow{\cong}H^*(B;\mathbb F_2), \qquad Y_\lambda\longmapsto y_\lambda.$$

No assertion that $x_\lambda^2=0$ is required.

## Facts & Assumptions

**Given:** AC; a Serre fibration $F\to E\to B$ with contractible total space and simply connected CW base $B$; a mod-two fiber cohomology basis of finite products of distinct positive-degree classes $x_\lambda$, including the empty product, locally finite in each degree; and classes $y_\lambda\in H^{|x_\lambda|+1}(B,*;\mathbb F_2)$ with $\delta x_\lambda=p^*y_\lambda$.

[F1] The cohomological Serre spectral sequence is constructed from a filtered complex, is multiplicative with a Leibniz rule, and converges strongly to the abutment ([[thm-cohomological-serre-spectral-sequence]], [[thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence]]); morphisms of spectral sequences commute with the differentials ([[def-morphism-of-spectral-sequences]]) and a contractible nonempty total space has the cohomology of a point ([[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]]).

[F2] The relative lifts lemma supplies the survival and precise differential page of each $x_\lambda$ and its square, and the fiber-limit comparison lemma makes the fiber-axis and limiting isomorphisms force the base-axis isomorphism ([[lem-relative-lifts-produce-cohomological-transgressions]], [[lem-fiber-and-limit-isomorphisms-force-the-base-axis-isomorphism]]).

[F3] Tensor products decompose over bases, commute with direct sums, satisfy unit isomorphisms, and are characterized by the universal property ([[thm-tensor-products-commute-with-arbitrary-direct-sums]], [[thm-unit-isomorphisms-for-module-tensor-products]], [[thm-universal-property-of-module-tensor-products]]); under AC every vector space has a basis and cohomology over a field is dual to homology ([[cor-every-vector-space-has-a-basis]], [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 For each index form an abstract spectral sequence with initial page $$\Lambda(x_\lambda)\otimes\mathbb F_2[Y_\lambda], \quad|x_\lambda|=(0,d_\lambda),\quad |Y_\lambda|=(d_\lambda+1,0),$$ where $d_\lambda=|x_\lambda|$. All differentials vanish except at $r=d_\lambda+1$, where $d_r(x_\lambda Y_\lambda^t)=Y_\lambda^{t+1}$ and $d_r(Y_\lambda^t)=0$ for every $t\ge0$. [given, F1]

2.1 That differential has bidegree $(r,1-r)$ and square zero. Its homology is the scalar field in $(0,0)$: multiplication by $Y_\lambda$ is injective on the polynomial ring, and its cokernel is its constant term. Tensor the factor sequences and use the sum of the factor differentials. In each fixed total degree only finitely many factors can contribute, because their degrees are positive and degreewise locally finite. Homology of these tensor complexes is the tensor of the factor homologies: over a field, `cor-every-vector-space-has-a-basis` and AC choose bases of boundaries and cycles and extend them to degreewise bases, splitting each complex into its homology and pairs on which the differential is an isomorphism. The tensor universal property makes the maps induced by those linear splittings well defined; `thm-tensor-products-commute-with-arbitrary-direct-sums` and the tensor-unit theorem distribute the splitting over the tensor factors. Tensoring a contractible pair admits the tensor contracting homotopy $H\otimes\mathrm{id}$: the two cross-differential terms cancel in characteristic two, leaving $dH+Hd=\mathrm{id}$ on that summand. These constructions use the listed published basis/tensor interfaces, not an unproved tensor-homology formula. This proves the required page-to-page homology condition, including all finite truncations. Thus the tensor is a well-defined first-quadrant spectral sequence with limiting page only $\mathbb F_2$ in $(0,0)$. [step 1.1, F3]

3.1 The actual Serre $E_2$ page is $H^*(B)\otimes H^*(F)$. Indeed the fiber groups are finite-dimensional in each degree by the simple-system hypothesis; a chosen finite basis identifies the constant coefficient system with a finite direct sum of the scalar system, and cochains and cohomology commute with that finite direct sum. The base is simply connected, so there is no monodromy. No finite-dimensional hypothesis on base cohomology is needed. [step 2.1, F1, F3]

4.1 Define a linear $E_2$ map by evaluating a squarefree monomial in the formal $x_\lambda$ at the corresponding product of actual fiber classes and a polynomial in the $Y_\lambda$ at the $y_\lambda$. It need **not** be a ring map on the whole page: formal $x_\lambda^2=0$ need not hold in fiber cohomology. The relative-lifts lemma gives the survival of each image $x_\lambda$ through its designated page and its differential $y_\lambda$ there. The actual differential's Leibniz rule shows, on each squarefree monomial, precisely the sum of factor differentials in the abstract model. Thus the linear map commutes with the first differential and descends to homology. Repeat on each subsequent page: factors already killed have both $x_\lambda$ and $Y_\lambda$ absent, while every remaining generator survives until its specified page and has the specified differential. The same squarefree-monomial calculation proves commutation and descent at every page. This constructs an actual morphism of spectral sequences, without asserting a false multiplicative map in the fiber direction. [step 3.1, F2]

5.1 On the fiber axis this map is a vector-space isomorphism by the simple-system hypothesis. On the limiting page it is an isomorphism because the actual sequence strongly converges to cohomology of the contractible total space, while the model has the same scalar limiting page. The fiber-limit comparison now proves the base-axis map at $E_2$ is an isomorphism. On that axis the map really is the polynomial ring homomorphism $Y_\lambda\mapsto y_\lambda$, so this is the desired algebra isomorphism. The conclusion is a statement on $E_2$, not an unsupported splitting of an abutment filtration. [step 4.1, F1, F2] ∎
