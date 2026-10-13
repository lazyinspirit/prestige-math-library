---
id: pthm-nrqm-composites-marker-overlap-and-visibility-bound
aliases: [ nrqm-composites-marker-overlap-and-visibility-bound ]
kind: physics-theorem
domain: physics
title: "Marker overlap contracts the cross term: the detection law and the
  visibility bound of an overlap-normalized marked model"
status: published
origin: session
dependency_level: 13
deps:
  [
    def-axiom-of-choice,
    def-countable-choice,
    def-nrqm-composites-framework-composite-systems-and-local-readouts,
    def-nrqm-composites-framework-reduced-preparations,
    def-nrqm-composites-marker-model-and-fringe-visibility,
    def-nrqm-state-geometry-framework-state-space,
    lem-nrqm-composites-hilbert-tensor-construction,
    lem-nrqm-composites-rank-one-operator-calculus,
    lem-nrqm-composites-separable-partial-trace,
    pthm-nrqm-composites-local-readout-laws-and-reduced-preparations,
    pthm-nrqm-kinematics-spin-s-outcome-laws,
    thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-composites-framework-composite-systems-and-local-readouts: formulation-prerequisite
  def-nrqm-composites-framework-reduced-preparations: formulation-prerequisite
  def-nrqm-composites-marker-model-and-fringe-visibility: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-composites-separable-partial-trace: mathematical-premise
  pthm-nrqm-composites-local-readout-laws-and-reduced-preparations: physical-result
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared overlap-normalized marked two-component model of
  the interferometer pair: the phase family of marked preparations has unit
  norm, its local position-bin detection law is the which-path law plus a cross
  term whose modulus is contracted by the marker overlap, and the fringe
  visibility of the family at a bin is bounded by the marker overlap and
  computed exactly. The statement is a conditional computation in the declared
  model; it asserts no measured pattern, no counts, no decoherence mechanism, no
  irreversibility, no which-path ontology and no empirical fact."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        6.3.1, printed pages 125-127 (PDF pages 133-135): entanglement with an
        unobserved environment, the reduced density operator and the loss of
        interference"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8
        'Multiparticle States and Tensor Products', Section 2, chapter pages
        8-9: non-product two-particle vectors and the two-dimensional
        determinant criterion"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba\
        2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the declared marked two-component model of
[[def-nrqm-composites-marker-model-and-fringe-visibility]] with unit path
components $\psi_{1},\psi_{2}\in H_{s}$, unit marker states $e_{1},e_{2}\in K$,
phase family $\rho(\varphi)$, marker-carried which-path preparation
$\rho_{\mathrm{mix}}$, and a declared detection bin $B$. Assume the model is
**overlap-normalized**, $\langle\psi_{1},\psi_{2}\rangle=0$, and assume the
Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]), as required by the
cited position and local-readout suppliers. Put
$$\gamma(B):=\langle e_{1},e_{2}\rangle\,\langle G(B)\psi_{1},\psi_{2}\rangle,\qquad p_{j}(B):=\langle G(B)\psi_{j},\psi_{j}\rangle\quad(j=1,2),\qquad p_{\mathrm{mix}}(B)=\tfrac12\bigl(p_{1}(B)+p_{2}(B)\bigr).$$
Then:
 
**(a) Unit-norm phase family.** $\|\Psi(\varphi)\|=1$ for every $\varphi$, so
$\rho(\varphi)=T_{\Psi(\varphi),\Psi(\varphi)}$.
 
**(b) Detection law.** For every $\varphi$,
$$p(\varphi)(B)=p_{\mathrm{mix}}(B)+\operatorname{Re}\bigl(e^{-i\varphi}\gamma(B)\bigr).$$
 
**(c) Contraction of the cross term.** For every $\varphi$,
$$\bigl|p(\varphi)(B)-p_{\mathrm{mix}}(B)\bigr|\le|\gamma(B)|\le|\langle e_{1},e_{2}\rangle|\sqrt{p_{1}(B)p_{2}(B)}\le|\langle e_{1},e_{2}\rangle|\,p_{\mathrm{mix}}(B).$$
In particular, if $e_{1}\perp e_{2}$, then $p(\varphi)(B)=p_{\mathrm{mix}}(B)$
for every $\varphi$: the marked detection law is exactly the which-path law.
 
**(d) Visibility.** Writing $\gamma(B)=|\gamma(B)|e^{i\theta}$ with
$\theta\in[0,2\pi)$, one has
$$\sup_{\varphi}p(\varphi)(B)=p_{\mathrm{mix}}(B)+|\gamma(B)|,\qquad \inf_{\varphi}p(\varphi)(B)=p_{\mathrm{mix}}(B)-|\gamma(B)|,$$
so that, whenever $p_{\mathrm{mix}}(B)>0$, the fringe visibility of clause (e)
of the definition is
$$V(B)=\frac{|\gamma(B)|}{p_{\mathrm{mix}}(B)}=|\langle e_{1},e_{2}\rangle|\,\frac{|\langle G(B)\psi_{1},\psi_{2}\rangle|}{p_{\mathrm{mix}}(B)}\le|\langle e_{1},e_{2}\rangle| .$$
 
**(e) Extremes.** If the model is trivially marked,
$|\langle e_{1},e_{2}\rangle|=1$, then for every bin with
$p_{\mathrm{mix}}(B)>0$ one has
$V(B)=\frac{|\langle G(B)\psi_{1},\psi_{2}\rangle|}{p_{\mathrm{mix}}(B)}\le1$;
if $e_{1}\perp e_{2}$, then $V(B)=0$ for every bin with $p_{\mathrm{mix}}(B)>0$.
 
**(f) Scope.** Clauses (a)-(e) are conditional computations in the declared
model. They assert no measured pattern, no trial counts, no statistical
analysis, no decoherence mechanism, no irreversibility and no which-path
ontology, and they contain no empirical claim.

## Facts & Assumptions

**Given:** The declared overlap-normalized marked model with unit $\psi_{1},\psi_{2},e_{1},e_{2}$, $\langle\psi_{1},\psi_{2}\rangle=0$; a declared detection bin $B$; the phase family and preparations of the model definition; the Axiom of Countable Choice and the Axiom of Choice.

[F1] **Model data.** $\Psi(\varphi)=\frac{1}{\sqrt2}(\kappa(\psi_{1}\otimes e_{1})+e^{i\varphi}\kappa(\psi_{2}\otimes e_{2}))$, $\rho(\varphi)=\widehat\rho(\Psi(\varphi))$, $\rho_{\mathrm{mix}}=\frac12T_{\kappa(\psi_{1}\otimes e_{1}),\kappa(\psi_{1}\otimes e_{1})}+\frac12T_{\kappa(\psi_{2}\otimes e_{2}),\kappa(\psi_{2}\otimes e_{2})}$, $p(\varphi)(B)=\operatorname{tr}(\rho(\varphi)(G(B)\otimes I_{K}))$, $p_{\mathrm{mix}}(B)=\frac12(p_{1}(B)+p_{2}(B))$, and $G(B)$ is the position spectral projection with $p_{j}(B)=\|G(B)\psi_{j}\|^{2}\in[0,1]$ ([[def-nrqm-composites-marker-model-and-fringe-visibility]] clauses (a)-(d), [[pthm-nrqm-kinematics-spin-s-outcome-laws]] clause (b)).

[F2] **Partial trace on elementary rank-one operators.** The partial trace is linear and satisfies $\operatorname{Tr}_{K}T_{x\otimes e,y\otimes f}=\langle e,f\rangle T_{x,y}$ for all $x,y\in H_s$ and $e,f\in K$ ([[lem-nrqm-composites-separable-partial-trace]] clauses (a), (c)).

[F3] **Partial-trace pairing and local weights.** For every trace-class $R$ on the composite and every bounded $X$ on the particle factor, $\operatorname{tr}(R(X\otimes I_K))=\operatorname{tr}((\operatorname{Tr}_KR)X)$ by [[lem-nrqm-composites-separable-partial-trace]] clause (a). Taking $X=G(B)$ is legitimate because $G(B)$ is a bounded projection, even though its outcome set is a Borel subset of $\mathbb R^3$. The model definition [F1] reads this pairing as its position-bin detection weight. For a real-valued assigned sharp observable and a Borel subset of $\mathbb R$, the corresponding physical local-readout law is separately [[pthm-nrqm-composites-local-readout-laws-and-reduced-preparations]] clause (a); no extension of that theorem's outcome domain is needed here.

[F4] **Tensor and rank-one calculus.** The tensor pairing is $\langle\kappa(x\otimes e),\kappa(y\otimes f)\rangle=\langle x,y\rangle\langle e,f\rangle$ ([[lem-nrqm-composites-hilbert-tensor-construction]]). Rank-one operators $T_{x,y}z=\langle z,y\rangle x$ are linear in $x$, conjugate-linear in $y$, and for bounded $S$ satisfy $\operatorname{tr}(T_{x,y}S)=\langle Sx,y\rangle$ by the product and trace formulas of [[lem-nrqm-composites-rank-one-operator-calculus]] clauses (a), (b), (d).

[F5] **Cauchy-Schwarz.** For vectors in a complex inner product space $|\langle x,y\rangle|\le\|x\|\,\|y\|$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F6] **Choice hypothesis.** The Axiom of Choice is assumed by the cited position and local-readout suppliers for their general spectral PVM constructions ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct; expand the tensor norm and the rank-one operator, then apply the partial trace to obtain the unit norm and the reduced weight, convert the weight into the composite detection law by the local readout law, bound the cross term by Cauchy-Schwarz, and evaluate the supremum and infimum of the resulting cosine modulation.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Unit norm and reduced weight] Put $q_j=\kappa(\psi_j\otimes e_j)$, $\alpha=1/\sqrt2$ and $\beta=e^{i\varphi}/\sqrt2$. By [F4], $\|q_j\|=1$ and $\langle q_1,q_2\rangle=\langle\psi_1,\psi_2\rangle\langle e_1,e_2\rangle=0$, so $\|\Psi(\varphi)\|^2=|\alpha|^2+|\beta|^2=1$. Thus $I=\mathbb R$ and $\rho(\varphi)=T_{\Psi(\varphi),\Psi(\varphi)}$ by [F1]. Expanding by the sesquilinearity in [F4] gives $T_{\Psi,\Psi}=|\alpha|^2T_{q_1,q_1}+|\beta|^2T_{q_2,q_2}+\alpha\overline\beta T_{q_1,q_2}+\overline\alpha\beta T_{q_2,q_1}$. Applying [F2] termwise gives $\rho(\varphi)_A=\frac12T_{\psi_1,\psi_1}+\frac12T_{\psi_2,\psi_2}+\frac12e^{-i\varphi}\langle e_1,e_2\rangle T_{\psi_1,\psi_2}+\frac12e^{i\varphi}\langle e_2,e_1\rangle T_{\psi_2,\psi_1}$. This proves (a) and the reduction identity for every spin label, without applying a scalar-$L^2$ supplier to vector-valued paths. [given, F1, F2, F4, algebra]

2.1 [Detection law] By [F3], $p(\varphi)(B)=\operatorname{tr}(\rho(\varphi)(G(B)\otimes I_{K}))=\operatorname{tr}(\rho(\varphi)_{A}G(B))$; since $G(B)$ is a bounded self-adjoint operator with $G(B)=M_{\mathbf 1_{B}}$ and $T_{x,y}$ pairs as $\operatorname{tr}(T_{x,y}G(B))=\langle G(B)x,y\rangle$ by [F4], the weight of step 1.1 gives $p(\varphi)(B)=\frac12p_{1}(B)+\frac12p_{2}(B)+\operatorname{Re}(e^{-i\varphi}\langle e_{1},e_{2}\rangle\langle G(B)\psi_{1},\psi_{2}\rangle)=p_{\mathrm{mix}}(B)+\operatorname{Re}(e^{-i\varphi}\gamma(B))$, which is (b). [given, F1, F3, F4, F6, step 1.1, algebra]

3.1 [Cross-term contraction] Since $G(B)=G(B)^*=G(B)^2$, $\langle G(B)\psi_1,\psi_2\rangle=\langle G(B)\psi_1,G(B)\psi_2\rangle$. By [F5] its modulus is at most $\sqrt{p_1(B)p_2(B)}$. Hence step 2.1 gives $|p(\varphi)(B)-p_{\mathrm{mix}}(B)|\le|\gamma(B)|\le|\langle e_1,e_2\rangle|\sqrt{p_1(B)p_2(B)}\le|\langle e_1,e_2\rangle|p_{\mathrm{mix}}(B)$, where the last inequality follows from $(\sqrt{p_1}-\sqrt{p_2})^2\ge0$. The marker overlap is at most one by [F5] and unit normalization. If it is zero, $\gamma(B)=0$ and the detection law is $p_{\mathrm{mix}}(B)$ for every phase. This proves (c), including zero-weight bins. [given, F1, F5, step 2.1, algebra]

4.1 [Visibility] Write $\gamma(B)=|\gamma(B)|e^{i\theta}$ when $\gamma(B)\ne0$; then $\operatorname{Re}(e^{-i\varphi}\gamma(B))=|\gamma(B)|\cos(\theta-\varphi)$, whose supremum over $\varphi\in\mathbb R$ is $|\gamma(B)|$ (attained at $\varphi=\theta$) and whose infimum is $-|\gamma(B)|$ (attained at $\varphi=\theta+\pi$); when $\gamma(B)=0$ the function is identically zero and the same formulae hold. Hence $\sup_{\varphi}p(\varphi)(B)=p_{\mathrm{mix}}(B)+|\gamma(B)|$ and $\inf_{\varphi}p(\varphi)(B)=p_{\mathrm{mix}}(B)-|\gamma(B)|$, and if $p_{\mathrm{mix}}(B)>0$ the definition of the visibility gives $V(B)=|\gamma(B)|/p_{\mathrm{mix}}(B)$; the bound $V(B)\le|\langle e_{1},e_{2}\rangle|$ is step 3.1. This is (d), and (e) is the special case $|\langle e_{1},e_{2}\rangle|=1$ using the ratio bound of step 3.1 and the case $e_{1}\perp e_{2}$. [given, F1, step 2.1, step 3.1, algebra]

5.1 [Assembly and scope] Step 1.1 is (a), step 2.1 is (b), step 3.1 is (c), step 4.1 is (d), (e); only the declared model, its overlap-normalized hypothesis and the cited mathematics were used, with no measured pattern, count or mechanism asserted, which is (f). [step 1.1, step 2.1, step 3.1, step 4.1] ∎

## Remarks

- **What the bound does and does not say.** The factor $|\langle e_{1},e_{2}\rangle|$ is an upper bound on the visibility of the declared phase family; the actual visibility also contains the overlap factor $|\langle G(B)\psi_{1},\psi_{2}\rangle|/p_{\mathrm{mix}}(B)$ of the path components at the bin, so a large marker overlap alone does not guarantee a visible fringe and a small marker overlap alone does not by itself describe a measured pattern.
- **No mechanism claim.** The marker is part of the declared preparation; the computation exhibits the correlation between the marker state and the path component as the origin of the reduced contrast in the model. It asserts no dynamical decoherence process, no irreversibility and no preference among interpretations of the alternatives.
