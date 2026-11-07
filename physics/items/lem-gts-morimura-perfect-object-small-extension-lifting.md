---
id: lem-gts-morimura-perfect-object-small-extension-lifting
kind: lemma
title: Perfect-object lifting through an Artin dg deformation
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-classical-deformation-cotangent-theory
deps:
  - def-gts-small-dg-categories-perfect-modules-and-morita-deformation
  - lem-gts-morimura-perfect-generator-persistence
  - lem-gts-morimura-ample-power-perfect-generator
  - def-axiom-of-choice
dependency_roles:
  def-gts-small-dg-categories-perfect-modules-and-morita-deformation: mathematical-premise
  lem-gts-morimura-perfect-generator-persistence: mathematical-premise
  lem-gts-morimura-ample-power-perfect-generator: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Wendy Lowen, Obstruction theory for objects in abelian and derived categories
      url: https://arxiv.org/pdf/math/0407019
      locator: Section 3, Theorem 3.8 and Corollary 3.11, PDF pp. 7–10; square-zero curvature and homotopy lifting mechanism, adapted here to dg modules with coefficient kernel I.
    - title: Keller and Lowen, On Hochschild Cohomology and Morita Deformations
      url: https://webusers.imj-prg.fr/~bernhard.keller/publ/KellerLowenHochDefo.pdf
      locator: Lemmas 3.6 and 3.10, PDF pp. 7–9; K-flatness and compactness issues are discharged below for the stated bounded-fiber hypotheses.
verification:
  precheck: pass
dependency_level: 2
---

## Statement

Assume the Axiom of Choice. Let $R'\twoheadrightarrow R$ be a surjection of commutative finite-dimensional local Artin $k$-algebras with residue field $k$ and kernel $I$ annihilated by the maximal ideal of $R'$. Let $\mathcal A'$ be an $R'$-linear dg category, let $\mathcal A=\mathcal A'\otimes_{R'}^{\mathbf L}R$, and let $\mathcal A_0=\mathcal A'\otimes_{R'}^{\mathbf L}k$. Let $P$ be a perfect right $\mathcal A$-module. Require that for every object $a$ the complex $P_0(a)$, where $P_0=P\otimes_R^{\mathbf L}k$, has bounded cohomology. If $\operatorname{Ext}^2_{\mathcal A_0}(P_0,P_0)=0$, there exists a perfect $\mathcal A'$-module $P'$ with a specified equivalence $P'\otimes_{R'}^{\mathbf L}R\simeq P$. If also $\operatorname{Ext}^1_{\mathcal A_0}(P_0,P_0)=0$, any two such marked lifts are equivalent by an equivalence inducing the specified identity on $P$ in the derived category. Consequently the existence and uniqueness assertions are independent of the cofibrant dg presentations and semifree module resolutions used in their construction. No uniqueness of that equivalence itself is asserted.

## Statement references

[[def-gts-small-dg-categories-perfect-modules-and-morita-deformation]]

[[lem-gts-morimura-perfect-generator-persistence]]

[[lem-gts-morimura-ample-power-perfect-generator]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** $R'$, $R$, $I$, $\mathcal A'$, $P$, the bounded-fiber condition, and the stated Ext vanishing.

[F1] [[def-gts-small-dg-categories-perfect-modules-and-morita-deformation]] defines derived modules, perfect modules and derived Morita equivalence.

[F2] [[lem-gts-morimura-perfect-generator-persistence]] proves derived Nakayama for arbitrary Artin-base complexes, compactness descent, and natural Hom base change for a perfect source.

[F3] The semifree-module argument in [[lem-gts-morimura-ample-power-perfect-generator]], step 4.1, proves that compact dg modules are finite-cell retracts. For a dg category the identical proof replaces the free algebra module by its representable modules: a finite cell uses finitely many shifted representables, and its differential has finite support in the preceding attachment stages.

[A1] [[def-axiom-of-choice]] permits the resolutions and vector-space splittings used below.

## Proof

**Given:** [F1]–[F3], [A1], and the hypotheses in the Statement.

1.1 Work with a dg presentation of $\mathcal A'$ whose mapping complexes are semifree over $R'$. Such a presentation may be constructed with the same objects by freely adjoining morphism generators in nonnegative attachment stages. Start with free differential disks mapping onto every homogeneous morphism of $\mathcal A'$; a disk consists of generators $u,du$ mapping to the given morphism and its differential. Adjoin closed generators mapping onto remaining cohomology classes, and then a generator of degree $n-1$ with prescribed differential for every degree-$n$ cycle in the kernel, choosing its image to be a primitive in the target. Repeat the last two operations. The filtered union maps surjectively on morphism complexes and is a quasi-isomorphism: every target cohomology class is hit and every kernel cycle is killed at a finite subsequent stage. Compositions are free words in the adjoined generators. Their differentials use earlier stages or disk partners, so the mapping complexes are semifree $R'$-complexes, in particular K-flat. Derived scalar change is now ordinary scalar change. Replace $P$ by a semifree module $Q$ over $\mathcal A$; attach shifted representables to hit cohomology and kill kernel cycles as above. Its reduction $Q_0$ is a semifree module over $\mathcal A_0$. The construction preserves actual markings as derived equivalences. [F1, A1, construct]

2.1 Lift the graded carrier of $Q$ to the same direct sum of shifted representables over $\mathcal A'$. Each generator differential is a finite linear combination of generators at earlier stages with coefficients in morphism complexes; choose lifts of those coefficients. Together with the internal differential on $\mathcal A'$ this gives a graded derivation $D$ of degree one on the lifted module, reducing to the differential of $Q$. Its curvature $D^2$ is an $\mathcal A'$-linear map of degree two with image in $I$ times the module. Write $K$ for the complex of graded maps with that image. Since $I\mathfrak m_{R'}=0$, its differential $[D,-]$ is independent of all lift choices and identifies it with $$K=\operatorname{Hom}_{\mathcal A}(Q,Q\otimes_R I)\simeq\mathbf R\operatorname{Hom}_{\mathcal A_0}(P_0,P_0)\otimes_k I.$$ The first identity is literal on the free graded carriers. The second follows from scalar-extension/restriction adjunction on the semifree $Q$, whose derived reduction is $Q_0$, and from the fact that $I$ is a finite-dimensional $k$-vector space. Infinite products of coefficient spaces commute with tensoring by this finite-dimensional vector space. The curvature is closed since $DD^2-D^2D=0$. Replacing $D$ by $D+u$ with $u\in K^1$ changes curvature by $[D,u]$ because $u^2=0$. Vanishing of the asserted Ext² therefore gives $u$ with $(D+u)^2=0$. This constructs an ordinary dg module $V$ whose ordinary reduction is $Q$. It remains to establish that its derived reduction is also $Q$. [F1, A1, step 1.1, algebra]

3.1 We give the required K-flatness argument. For each object $a$, the underlying graded module $V(a)$ is free over $R'$, because both the representables in step 2.1 and the mapping complexes in step 1.1 have free terms. Its reduction to $k$ is the complex $Q_0(a)$, with bounded cohomology by hypothesis. Choose a splitting of this vector-space complex as its cohomology $H$ with zero differential plus contractible pairs. Thus there are maps $i:H\to Q_0(a)$, $p:Q_0(a)\to H$, and $h$ of degree $-1$ satisfying $pi=1$, $1-ip=d_0h+hd_0$, and $h^2=hi=ph=0$. Lift the chosen bases and these maps to free $R'$-modules, with $d_0$ the differential of the contractible pairs. The actual differential is $d_0+\delta$, where $\delta$ has entries in $\mathfrak m_{R'}$. All products containing sufficiently many copies of $\delta$ vanish, even for infinite-dimensional graded spaces. [A1, step 1.1, step 2.1, choose]

4.1 The finite perturbation identities give a homotopy equivalence with the bounded complex on $H\otimes_k R'$ having differential $d_H=p\delta(1+h\delta)^{-1}i$. For precision put $T=\delta(1+h\delta)^{-1}=(1+\delta h)^{-1}\delta$, $i'=i-hTi$, $p'=p-pTh$, and $h'=h-hTh$. The geometric inverses here are finite. Substitution using $(d_0+\delta)^2=0$, $1-ip=d_0h+hd_0$, and $h^2=hi=ph=0$ gives $$d_H^2=0,\qquad (d_0+\delta)i'=i'd_H,\qquad p'(d_0+\delta)=d_Hp',\qquad p'i'=1,$$ $$1-i'p'=(d_0+\delta)h'+h'(d_0+\delta).$$ These identities can also be verified one power of $\mathfrak m_{R'}$ at a time: expand each inverse as $\sum_{j\ge0}(-h\delta)^j$ or $\sum_{j\ge0}(-\delta h)^j$, cancel adjacent $d_0h+hd_0$ using $1-ip$, and the remaining two adjacent differentials cancel by $d_0\delta+\delta d_0=-\delta^2$. Thus every term except the displayed endpoint terms cancels, and nilpotence leaves no infinite tail. Since $H$ is bounded, $H\otimes R'$ is a bounded complex of free modules and is K-flat. A homotopy equivalent complex is K-flat, so $V(a)$ is K-flat for every $a$. [A1, step 3.1, algebra]

5.1 A semifree resolution $W\to V$ over $\mathcal A'$ is objectwise K-flat, since the mapping complexes are K-flat and its attachment filtration builds it by sums, cones and filtered unions of their shifts. Both $W(a)$ and $V(a)$ are K-flat by step 4.1, so their quasi-isomorphism remains a quasi-isomorphism after tensoring by $R$. Consequently the derived reduction of $V$ is the specified $Q\simeq P$. Its reduction to $k$ is $P_0$, which is perfect and therefore compact by evaluation on representables and finite stable retract closure. Compactness descent in [F2] makes $V$ compact. By [F3] it is a finite-cell retract, hence perfect. This proves existence of the marked perfect lift. [F1, F2, F3, step 1.1, step 2.1, step 4.1]

6.1 To prove uniqueness, represent two marked perfect lifts by semifree modules $W_1,W_2$. Their scalar reductions $Q_1,Q_2$ represent $P$. The marked identity is represented by a closed degree-zero map $q:Q_1\to Q_2$ because $Q_1$ is semifree. A graded lift $\widetilde q:W_1\to W_2$ exists: a map on a free graded module is specified by arbitrary images of its generators, and the reduction of each target morphism module is surjective. Its failure to be closed is a degree-one closed element of the kernel complex $$\operatorname{Hom}_{\mathcal A'}(W_1,W_2\otimes_{R'}I)\simeq\mathbf R\operatorname{Hom}_{\mathcal A_0}(P_0,P_0)\otimes_k I.$$ Here the identification uses the same semifree adjunction as step 2.1. Vanishing of Ext¹ corrects $\widetilde q$ by a kernel element of degree zero to a chain map $q'$. Its cone has zero derived reduction to $R$, and hence to $k$; derived Nakayama [F2], applied objectwise over $R'$, makes the cone zero. Thus $q'$ is an equivalence lifting exactly the marked identity in the derived category. [F1, F2, step 2.1, step 5.1, algebra]

7.1 All constructions above compute the intrinsic derived reduction and derived Ext groups. A quasi-equivalence or Morita equivalence of dg presentations induces an equivalence of module categories by its defining extension/restriction adjunction, and derived scalar change commutes with that adjunction: this is tensor associativity on semifree representable resolutions. It therefore transports marked perfect modules and their lifts. Existence holds in every presentation by steps 1.1–5.1. When Ext¹ vanishes, step 6.1 compares any two transported outputs by an equivalence inducing the prescribed identity on $P$, so neither the semifree resolution, the chosen graded coefficients, nor the vector-space splitting changes the marked lift class. This proves the claimed presentation independence; no assertion about uniqueness of its automorphism is needed. [F1, F2, F3, step 1.1, step 5.1, step 6.1] ∎
