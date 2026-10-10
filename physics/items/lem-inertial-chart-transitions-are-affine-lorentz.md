---
id: lem-inertial-chart-transitions-are-affine-lorentz
kind: lemma
title: Inertial charts are related by proper orthochronous affine Lorentz maps, and every such map is a chart transition
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 7
deps: [def-lorentz-map-and-lorentz-group,
       lem-lorentz-map-preserves-metric-and-causal-structure,
       def-sr-affine-minkowski-model, def-inertial-frame-and-inertial-chart,
       def-time-orientation-and-future-causal-sets, def-change-of-basis-matrix,
       def-linear-isomorphism-and-invertible-linear-map,
       def-matrix-product-and-identity-matrix,
       def-orientation-of-a-finite-dimensional-real-vector-space,
       def-determinant-of-a-linear-operator,
       lem-timelike-cone-has-two-convex-components,
       thm-cauchy-schwarz-and-the-euclidean-norm, def-euclidean-inner-product]
dependency_roles:
  def-lorentz-map-and-lorentz-group: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-change-of-basis-matrix: mathematical-premise
  def-linear-isomorphism-and-invertible-linear-map: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-orientation-of-a-finite-dimensional-real-vector-space: mathematical-premise
  def-determinant-of-a-linear-operator: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Section 1.4 'The Lorentz transformation' pp. 30-32 including Examples 11-14, Sections 2.3-2.4 'Additional postulates'/'Other axiomatizations' pp. 46-49, and Section 8.3 'Boosts and rotations' pp. 174-176; signature (+---) converted to (-+++) with x^0 = ct restored"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), Section 2.2 'Lorentzian signature' pp. 26-28 (PDF pp. 27-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Statement

Let $(A,V,\eta,C^+)$ be the affine Minkowski space and let
$(o;e_0,e_1,e_2,e_3)$, $(o';e'_0,e'_1,e'_2,e'_3)$ be two inertial frames with
charts $x$, $x'$ ([[def-inertial-frame-and-inertial-chart]]). Let $M$ be the
change-of-basis matrix defined by $e'_a=\sum_bM^b_ae_b$. Then:

(i) $M$ is the matrix, in the ordered basis $(e_0,\dots,e_3)$, of a linear
Lorentz map $L:V\to V$, that is $L(e_a)=e'_a$ for all $a$; $M$ is proper and
orthochronous: $M^{T}\eta_0M=\eta_0$, $\det M=+1$, and $M$ maps the future cone
onto the future cone. The same holds for $M^{-1}$, the matrix of $L^{-1}$.

(ii) The chart transition $F:=x'\circ x^{-1}:\mathbb R^4\to\mathbb R^4$
is the affine map $F(u)=M^{-1}(u-x(o'))$, whose linear part $M^{-1}$ is a
proper orthochronous Lorentz matrix. For any $u,v\in\mathbb R^4$ one has
$F(u)-F(v)=M^{-1}(u-v)$ and $q(F(u)-F(v))=q(u-v)$, where
$q(d):=\eta_0(d,d)=-(d^0)^2+|d_{\mathrm{vec}}|^2$. In particular, if
$u-v$ is future causal (that is $u-v\neq0$ and
$u^0-v^0\ge|u_{\mathrm{vec}}-v_{\mathrm{vec}}|$), then $F(u)-F(v)$ is
future causal. Thus causal displacements are preserved; the linear part
maps the future causal coordinate cone onto itself.

(iii) Conversely, for every proper orthochronous linear Lorentz map
$L:V\to V$ and every point $c\in A$, the tuple
$(c;Le_0,Le_1,Le_2,Le_3)$ is an inertial frame, and, writing $M_L:=E^{-1}\circ L\circ E:\mathbb R^4\to\mathbb R^4$, where $E(u)=\sum_a u^ae_a$, its chart satisfies $x_L(p)=M_L^{-1}(x(p)-x(c))$ for all $p\in A$. Hence the transitions from the
chart $x$ are exactly the affine maps $u\mapsto M_L^{-1}(u-x(c))$ with $L$
ranging over the proper orthochronous linear Lorentz maps and $c$ over $A$,
and the linear parts of transitions are exactly the proper orthochronous
Lorentz matrices and their inverses.

## Facts & Assumptions

**Given:** Two inertial frames $(o;e_0,\dots,e_3)$, $(o';e'_0,\dots,e'_3)$ with charts $x$, $x'$, and the change-of-basis matrix $M$ with $e'_a=\sum_bM^b_ae_b$.

[L1] A linear Lorentz map is a linear $L$ with $\eta(Lv,Lw)=\eta(v,w)$ for all $v,w$, its matrix $M$ in an ordered $\eta$-orthonormal basis satisfies $M^{T}\eta_0M=\eta_0$, and $L$ is proper when $\det L=1$ and orthochronous when $L(C^+)=C^+$ ([[def-lorentz-map-and-lorentz-group]]).

[L2] A Lorentz map is invertible, $\det L=\pm1$, $L(C^+)$ is one of the two components $C^+,C^-$, and $L(C^+)=C^+$ if and only if $L(C^+)\subseteq C^+$; the inverse of a Lorentz map is a Lorentz map, and proper orthochronous Lorentz maps form a subgroup under composition ([[lem-lorentz-map-preserves-metric-and-causal-structure]]).

[L3] An inertial frame has an $\eta$-orthonormal ordered basis ($\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$), its first vector lies in $C^+$, and its ordered basis is positively oriented; the chart is $x(p)=E^{-1}(p-o)$ with $E(u)=\sum_au^ae_a$ ([[def-inertial-frame-and-inertial-chart]]).

[L4] Positively oriented ordered bases are those in the fixed orientation class of the model ([[def-sr-affine-minkowski-model]], [[def-orientation-of-a-finite-dimensional-real-vector-space]]): two ordered bases $\mathcal B,\mathcal B'$ are in the same class exactly when the change-of-basis map $P$ with $P(b_j)=b'_j$ satisfies $\det P>0$, and the relation is an equivalence relation.

[L5] The change-of-basis matrix satisfies $P_{\mathcal C\leftarrow\mathcal B} =[\operatorname{id}_V]_{\mathcal B}^{\mathcal C}$, whose $j$-th column is $[b_j]_{\mathcal C}$ ([[def-change-of-basis-matrix]]).

[L6] The determinant of an operator is the determinant of its matrix in any ordered basis, independently of the basis ([[def-determinant-of-a-linear-operator]]).

[L7] $T=C^+\sqcup C^-$ and the timelike vectors are exactly the points of $T$ ([[def-time-orientation-and-future-causal-sets]]).

[L8] In an $\eta$-orthonormal ordered basis, $T_+=\{x:x^0>|x_{\mathrm{vec}}|\}$ and $T_-=\{x:x^0<-|x_{\mathrm{vec}}|\}$ are the two components of $T$, with closures $\operatorname{cl}(T_+)=\{x:x^0\ge|x_{\mathrm{vec}}|\}$ and $\operatorname{cl}(T_-)=\{x:x^0\le-|x_{\mathrm{vec}}|\}$ ([[lem-timelike-cone-has-two-convex-components]]).

[L9] $|u\cdot z|\le|u|\,|z|$ for all $u,z\in\mathbb R^3$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-euclidean-inner-product]]).

[L10] For two inertial frames with charts $x,x'$ one has $E'=E\circ M$ and $x'(p)=M^{-1}\bigl(x(p)-x(o')\bigr)$ for all $p\in A$, the change-of-basis matrix $M$ being the one with $e'_a=\sum_bM^b_ae_b$ ([[def-inertial-frame-and-inertial-chart]]).

## Proof

**Proof technique:** direct.

1.1 Define $L:V\to V$ by $L(u^0e_0+\dots+u^3e_3):=u^0e'_0+\dots+u^3e'_3$; by [L3] the coordinate maps $E,E'$ are linear isomorphisms, so $L=E'\circ E^{-1}$ is linear with $L(e_a)=e'_a$, it is unique with this property, and $M$ is its matrix in the ordered basis $(e_a)$ by [L5]. Since both bases are $\eta$-orthonormal by [L3], $\eta(Le_a,Le_b)=\eta(e'_a,e'_b)=\eta(e_a,e_b)$ for all $a,b$; expanding two general vectors in the basis and using bilinearity of $\eta$ gives $\eta(Lv,Lw)=\eta(v,w)$ for all $v,w$, so $L$ is a linear Lorentz map; in particular $M^{T}\eta_0M=\eta_0$ by [L1], and $Le_0=e'_0\in C^+$ by [L3]. [L1, L3, L5, algebra]

1.2 By the transition law [L10], $x'(p)=M^{-1}(x(p)-x(o'))=M^{-1}x(p)-M^{-1}x(o')$ for all $p\in A$; under the identification of events with their $x$-coordinates this is the affine map $u\mapsto M^{-1}(u-x(o'))$ of $\mathbb R^4$, with linear part $M^{-1}$ and constant part $-M^{-1}x(o')$. [L10, L5, algebra]

1.3 Let $L$ be a proper orthochronous linear Lorentz map and $c\in A$. The images $Le_0,\dots,Le_3$ form an ordered basis, and $\eta(Le_a,Le_b)=\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$, so it is $\eta$-orthonormal; $Le_0\in C^+$ because $e_0\in C^+$ by [L3] and $L$ is orthochronous; and it is positively oriented, because the change-of-basis map from $(e_a)$ to $(Le_a)$ is $L$ itself with $\det L=+1>0$, so both ordered bases lie in one class by [L4]. Hence $(c;Le_0,Le_1,Le_2,Le_3)$ is an inertial frame. Its coordinate isomorphism $E_L(u):=\sum_au^aLe_a$ satisfies $E_L(u)=L\bigl(\sum_au^ae_a\bigr)=L(E(u))$ by linearity, so its chart is $x_L(p)=E_L^{-1}(p-c)=E^{-1}(L^{-1}(p-c))=M_L^{-1}(x(p)-x(c))$, with $M_L=E^{-1}\circ L\circ E$ and $M_L^{-1}=E^{-1}\circ L^{-1}\circ E$, so $x_L(p)=M_L^{-1}(x(p)-x(c))$ for all $p\in A$. [L1, L3, L4, algebra]

2.1 By step 1.1 the matrix $M$ is the matrix of the linear Lorentz map $L$, so $\det L=\det M$ by [L6]; by [L2], $\det L=\pm1$. Both $(e_a)$ and $(e'_a)$ are positively oriented by [L3], hence lie in the same orientation class of [L4], so the change-of-basis map $P$ with $P(e_a)=e'_a$ satisfies $\det P>0$; by the uniqueness in step 1.1, $P=L$, so $\det M=\det L>0$ and therefore $\det M=+1$. [step 1.1, L2, L3, L4, L6, algebra]

2.2 By step 1.1, $Le_0=e'_0\in C^+$ lies in $L(C^+)$, so $L(C^+)\cap C^+\neq\emptyset$; by [L2] the set $L(C^+)$ is one of the two components $C^+,C^-$, hence it cannot be $C^-$ and $L(C^+)=C^+$. [step 1.1, L2, L7, algebra]

3.1 By [L2] the inverse $L^{-1}$ is a linear Lorentz map, and its matrix in the ordered basis $(e_a)$ is $M^{-1}$ by [L5]; moreover $L^{-1}$ is proper by the subgroup assertion of [L2], since $L$ is proper orthochronous by steps 2.1 and 2.2, and $L^{-1}(C^+)=C^+$ because $L(C^+)=C^+$ from step 2.2 and $L$ is a bijection. Hence $M^{-1}$ is the matrix of the proper orthochronous Lorentz map $L^{-1}$, and $M^{-1}$ maps the future cone onto the future cone. [step 2.1, step 2.2, L1, L2, L5, algebra]

4.1 Let $A:=M^{-1}$ and $u$ belong to the future closed coordinate cone, that is $q(u)\le0$ and $u^0\ge0$, which by [L8] and [L7] is exactly the condition that $E(u)$ lies in the closed future cone $\operatorname{cl}(C^+)$. Put $w:=Au$. First, $q(w)=\eta_0(Au,Au)=\eta_0(u,u)=q(u)\le0$, because $A$ is the matrix of the Lorentz map $L^{-1}$ by step 3.1 and $E(M^{-1}u)=L^{-1}(E(u))$ by step 1.1's construction $L\circ E=E\circ M$. Second, define the coordinate column $\varepsilon_0:=(1,0,0,0)\in\mathbb R^4$, so $E(\varepsilon_0)=e_0$, and put $z:=A^{-1}\varepsilon_0=M\varepsilon_0\in\mathbb R^4$. Then $E(z)=L(E(\varepsilon_0))=Le_0=e'_0\in C^+$ by step 1.1 and [L3], so $z^0>|z_{\mathrm{vec}}|\ge0$ by [L8]. Since $A^{T}\eta_0A=\eta_0$ implies $\eta_0(Au,v)=\eta_0(u,A^{-1}v)$ for all coordinate columns $u,v$, we get $w^0=-\eta_0(Au,\varepsilon_0)=-\eta_0(u,z)=u^0z^0-u_{\mathrm{vec}}\cdot z_{\mathrm{vec}}\ge u^0z^0-|u_{\mathrm{vec}}|\,|z_{\mathrm{vec}}|\ge u^0\bigl(z^0-|z_{\mathrm{vec}}|\bigr)\ge0$, where the middle step is [L9] and the last uses $u^0\ge|u_{\mathrm{vec}}|$. Hence $q(w)\le0$ and $w^0\ge0$, so $w$ lies in the future closed coordinate cone. If $u$ is future causal, it is additionally nonzero; invertibility gives $w\ne0$, so $w$ is future causal as well. The linear map $A$ fixes zero, which is not called causal. Replacing $A$ by $A^{-1}=M$ gives the reverse cone inclusion by the same argument, since $M$ is also proper orthochronous by steps 1.1, 2.1 and 2.2. For the affine transition $F$ of step 1.2, translation cancels: $F(u)-F(v)=A(u-v)$ for all $u,v\in\mathbb R^4$. Applying the identities just proved to $u-v$ gives $q(F(u)-F(v))=q(u-v)$ and preservation of future causal displacements. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, L7, L8, L9, algebra]

5.1 Clause (i) is step 1.1 with the properness of step 2.1, the orthochrony of step 2.2 and the statements about $M^{-1}$ in step 3.1. Clause (ii) is the transition formula of step 1.2 together with the preservation of $q$ on differences and of future causal displacements in step 4.1. Clause (iii) is step 1.3, and conversely every transition arises there: given the two frames, step 1.1 produces the proper orthochronous Lorentz map $L$ with $Le_a=e'_a$, and step 1.2 writes the transition as $u\mapsto M^{-1}(u-x(o'))=M_L^{-1}(u-x(c))$ with $M_L=M$ and $c:=o'$, so the transitions from $x$ are exactly the maps listed, and their linear parts are exactly the proper orthochronous Lorentz matrices and their inverses because step 3.1 computes the linear part of the reverse transition as $M$ for the same pair. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 3.1, step 4.1] ∎
