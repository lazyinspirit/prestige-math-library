---
id: def-gts-directed-and-wrapped-fukaya-interface
kind: definition
title: Directed and wrapped Fukaya category interfaces
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-hms-landau-ginzburg-categories
dependency_level: 12
deps:
  - def-gts-weinstein-lefschetz-fibration-interface
  - def-gts-r4-09b-multi-object-fukaya-category-of-branes-and-polygon-morphisms
dependency_roles:
  def-gts-weinstein-lefschetz-fibration-interface: mathematical-premise
  def-gts-r4-09b-multi-object-fukaya-category-of-branes-and-polygon-morphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Paul Hacking and Ailsa Keating, Homological mirror symmetry for log Calabi–Yau surfaces
      url: https://arxiv.org/pdf/2005.05010v3
      locator: Theorems 1.1–1.2 and §3.1; directed and wrapped categories for the constructed fibration
    - title: Denis Auroux, Mirror Symmetry, Lecture 18
      url: https://ocw.mit.edu/courses/18-969-topics-in-geometry-mirror-symmetry-spring-2009/61111f696db97ee7a1bc449ae59529c4_MIT18_969s09_lec18.pdf
      locator: complete lecture notes, A-infinity categories, twisted complexes and split-closed Fukaya categories
    - title: Mohammed Abouzaid and Paul Seidel, An open string analogue of Viterbo functoriality
      url: https://arxiv.org/pdf/0712.3177v2
      locator: Introduction, pp. 1–2, chord complexes, sequential continuation and the homotopy direct limit; used for interface conventions only, not an imported construction theorem.
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Fix a geometric realization $(M,\lambda,w)$ with ordered exact vanishing cycles $L_1,\ldots,L_r$ as in the Weinstein Lefschetz fibration interface. Choose a coefficient field $k$, gradings and relative Spin structures as in the compact-brane interface, and finite-rank $k$-local systems on the cycles. The **directed Fukaya interface** specifies $\hom(L_i,L_j)=0$ for $i>j$, $\hom(L_i,L_i)=k e_i$ in degree zero, and a chosen transverse Floer cochain complex for $i<j$. For each increasing sequence $i_0<\cdots<i_d$ it specifies maps $\mu^d:\hom(L_{i_{d-1}},L_{i_d})\otimes\cdots\otimes\hom(L_{i_0},L_{i_1})\to\hom(L_{i_0},L_{i_d})$ of degree $2-d$, and the strict-unit extensions involving the $e_i$. Construction of these maps, compactifications, orientations and the signed A-infinity equations remains required; the ordered cycles alone supply none of these assertions.

For the wrapped interface, let $(M,\lambda)$ be a Weinstein domain of real dimension $2n$. Put $Y=\partial M$, $\alpha=\lambda|_Y$, and define the completion $\widehat M=M\cup_Y([1,\infty)\times Y)$ with primitive $r\alpha$ on the attached end. Here $\alpha\wedge(d\alpha)^{n-1}$ is nowhere zero. The Reeb vector field $R_\alpha$ is specified by $\alpha(R_\alpha)=1$ and $d\alpha(R_\alpha,-)=0$. A cylindrical brane has a proper smooth embedded oriented Lagrangian $L\subset\widehat M$ and a smooth function $f_L:L\to\mathbb R$ with $\lambda|_L=df_L$, such that outside a compact set $L=[r_L,\infty)\times\Lambda_L$, where $\Lambda_L\subset Y$ is a closed embedded $(n-1)$-manifold with $\alpha|_{T\Lambda_L}=0$. Thus $f_L$ is constant on each end component. It also has a finite-rank $k$-local system, a chosen relative Spin structure (a Spin structure on $TL\oplus B|_L$ for a fixed oriented background bundle $B$ with $w_2(B)|_L=w_2(TL)$), and a grading lift of its Gauss map to a specified Maslov covering of the ambient Lagrangian Grassmannian bundle. Integer gradings require a covering with deck group $\mathbb Z$ and the chosen lift; their existence is part of the data. The compact-brane definition does not supply this noncompact object class.

Choose smooth Hamiltonians $H_j:[0,1]\times\widehat M\to\mathbb R$, $j\ge1$, with $\iota_{X_{H_j}}d\lambda=-dH_j$, linear of slope $a_j$ in $r$ for large $r$, where $a_j\to+\infty$. For each selected ordered brane pair require these slopes to avoid its Reeb-chord lengths and choose compact perturbations so the time-one chords are nondegenerate. Require a finite chord set $\mathcal X_j(L_0,L_1)$ at each level; simultaneous choices and the analytic no-escape estimates are construction data. With $x(0)\in L_0$, $x(1)\in L_1$ and $\dot x=X_{H_j}(t,x)$, the level-$j$ cochain module is
$$CF_j(L_0,L_1)=\bigoplus_{x\in\mathcal X_j(L_0,L_1)}o_x\otimes_k\operatorname{Hom}_k(E_{0,x(0)},E_{1,x(1)}).$$
The graded orientation line $o_x$ has the degree fixed by the two grading lifts; its gluing signs are fixed by the relative Spin structures. Choose compatible cylindrical almost-complex structures and strip data to specify a degree-one differential $d_j$ with $d_j^2=0$ and degree-zero continuation chain maps $\kappa_j:CF_j\to CF_{j+1}$. Composites of the consecutive $\kappa_j$ define the sequential diagram; any additional geometric continuation maps must be accompanied by the corresponding chain homotopies and higher coherences.

Let $C=\bigoplus_{j\ge1}CF_j$ and let $T:C\to C$ be $\kappa_j$ on its $j$th summand, valued in the $(j+1)$st. A wrapped cochain model is the telescope $CW(L_0,L_1)=\operatorname{Cone}(1-T:C\to C)$, with $\operatorname{Cone}(f)^r=C^r\oplus C^{r+1}$ and differential $(b,a)\mapsto(db+fa,-da)$. Its target cohomology is $\varinjlim_j HF_j$ for the induced continuation maps. The **wrapped Fukaya interface** further specifies maps $\mu^d:CW(L_{d-1},L_d)\otimes\cdots\otimes CW(L_0,L_1)\to CW(L_0,L_d)$ of degree $2-d$, with $\mu^1$ this differential, units and coherent continuation components. In suspended degree $|x|-1$, their bar coderivation must have square zero. These are typed data and required identities, not an existence theorem: compactness, regularization, finite counts, coherent gluing and independence comparisons must still be supplied. A cohomological direct limit alone does not define these chain operations.

Directed objects lie in the regular fibre and use its ordering; wrapped objects lie in the completed total space. Equivalences with coherent-sheaf categories are additional results.

## Definition references

[[def-gts-weinstein-lefschetz-fibration-interface]]

[[def-gts-r4-09b-multi-object-fukaya-category-of-branes-and-polygon-morphisms]]

