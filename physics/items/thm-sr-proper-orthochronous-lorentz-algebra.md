---
id: thm-sr-proper-orthochronous-lorentz-algebra
kind: theorem
title: "The proper orthochronous Lorentz group: boosts, rotations, unique factorization and invariants"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 10
deps: [def-lorentz-map-and-lorentz-group, def-lorentz-boost,
       def-spatial-rotation-of-an-inertial-frame,
       lem-lorentz-map-preserves-metric-and-causal-structure,
       lem-boost-is-proper-orthochronous-with-inverse,
       lem-collinear-boost-composition-and-velocity-addition,
       lem-rapidity-parametrization-of-collinear-boosts,
       lem-boost-rotation-factorization,
       def-inertial-frame-and-inertial-chart,
       def-time-orientation-and-future-causal-sets,
       lem-timelike-cone-has-two-convex-components,
       def-causal-classification-of-lorentz-vectors,
       def-oriented-minkowski-volume-form,
       def-determinant-of-a-linear-operator,
       def-determinant-of-a-square-matrix, thm-cauchy-schwarz-and-the-euclidean-norm]
dependency_roles:
  def-lorentz-map-and-lorentz-group: mathematical-premise
  def-lorentz-boost: mathematical-premise
  def-spatial-rotation-of-an-inertial-frame: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  lem-collinear-boost-composition-and-velocity-addition: mathematical-premise
  lem-rapidity-parametrization-of-collinear-boosts: mathematical-premise
  lem-boost-rotation-factorization: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-oriented-minkowski-volume-form: mathematical-premise
  def-determinant-of-a-linear-operator: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), Section 2.2 'Lorentzian signature' pp. 26-28 (PDF pp. 27-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Section 1.4 'The Lorentz transformation' pp. 30-32 including Examples 11-14, Sections 2.3-2.4 'Additional postulates'/'Other axiomatizations' pp. 46-49, and Section 8.3 'Boosts and rotations' pp. 174-176; signature (+---) converted to (-+++) with x^0 = ct restored"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Statement

Let $(V,\eta)$ be a $4$-dimensional Lorentz vector space with time orientation
$C^+$ ([[def-lorentz-form-and-inertia]] is the form;
[[def-time-orientation-and-future-causal-sets]] fixes $C^+$), and let
$(o;e_0,e_1,e_2,e_3)$ be an inertial frame of the model
([[def-inertial-frame-and-inertial-chart]]), with spatial three-space $S$ and
Euclidean form $\delta$. Then:

(i) For every $\boldsymbol\beta\in\mathbb R^3$ with
$|\boldsymbol\beta|<1$ the passive boost $B(\boldsymbol\beta)$ is a proper
orthochronous Lorentz map with
$B(\boldsymbol\beta)^{-1}=B(-\boldsymbol\beta)$, and for every unit spatial
vector $e\in S$ and all $\beta_1,\beta_2\in(-1,1)$ one has
$B(\beta_1e)B(\beta_2e)=B\bigl(\frac{\beta_1+\beta_2}{1+\beta_1\beta_2}e\bigr)$;
in particular collinear boosts commute. For each fixed unit spatial axis $e$
and scalar $b\in(-1,1)$ the collinear boost $B(be)$ satisfies $b=\tanh(r)$
for a unique scalar **rapidity** $r\in\mathbb R$, and rapidities add for
boosts along that same fixed axis. This signed scalar rapidity statement does
not identify a vector $\boldsymbol\beta\in\mathbb R^3$ with the scalar
$\tanh(r)$.

(ii) $SO^+(V,\eta)$ is a subgroup of $O(V,\eta)$, which is a subgroup of the
general linear group $GL(V)$; every passive boost $B(\boldsymbol\beta)$ and
every spatial rotation of the frame belongs to
$SO^+(V,\eta)$.

(iii) Every $L\in SO^+(V,\eta)$ has a unique factorization
$L=B(-\boldsymbol\beta)\widehat R$ with $|\boldsymbol\beta|<1$ and $\widehat R$
the extension of a spatial rotation of the frame; here
$\boldsymbol\beta=u_{\mathrm{vec}}/u^0$ where $(u^0,u_{\mathrm{vec}})$ are the
coordinates of $u=Le_0$. Consequently every proper orthochronous Lorentz map
is the product of a passive boost and a spatial rotation, in that order, and
$L$ is itself a passive boost if and only if the rotation $\widehat R$ is the
identity.

(iv) Every $L\in SO^+(V,\eta)$ preserves the interval $\eta(v,v)$, the causal
classification of every nonzero vector, the future and past closed cones, the
orientation, and the oriented volume form of the model:
$\epsilon(Lv_0,Lv_1,Lv_2,Lv_3)=\epsilon(v_0,v_1,v_2,v_3)$ for all
$v_0,\dots,v_3\in V$ ([[def-oriented-minkowski-volume-form]]). An arbitrary
element $L$ of $O(V,\eta)$ satisfies $\det L=\pm1$ and either preserves or
interchanges the future and past cones; moreover $\det L=1$ alone does not
force $L(C^+)=C^+$.

## Facts & Assumptions

**Given:** A $4$-dimensional Lorentz vector space $(V,\eta)$ with time orientation $C^+$, an inertial frame $(o;e_0,e_1,e_2,e_3)$ with spatial three-space $S$ and Euclidean form $\delta$, and the sets $O(V,\eta)$, $SO^+(V,\eta)$.

[L1] A linear Lorentz map is a linear $L$ with $\eta(Lv,Lw)=\eta(v,w)$ for all $v,w$; it is proper when $\det L=+1$ and orthochronous when $L(C^+)=C^+$; $GL(V)$ is the group of invertible linear maps ([[def-lorentz-map-and-lorentz-group]]).

[L2] Every linear Lorentz map is a linear isomorphism, satisfies $\det L=\pm1$, preserves $\eta(v,v)$ and the causal character of every nonzero vector, and maps $C^+$ onto one of the two components $C^+,C^-$ of the timelike set; $L(C^+)=C^+$ holds if and only if $L(C^+)\subseteq C^+$; $SO(V,\eta)=\{L\in O(V,\eta):\det L=1\}$, $O^{\uparrow}(V,\eta)=\{L\in O(V,\eta):L(C^+)=C^+\}$ and $SO^+(V,\eta)=SO(V,\eta)\cap O^{\uparrow}(V,\eta)$ are subgroups of $O(V,\eta)$, which is a subgroup of $GL(V)$; if $L$ is proper then $\epsilon(Lv_0,\dots,Lv_3)=\epsilon(v_0,\dots,v_3)$ and if $\det L=-1$ the two sides differ by the sign $-1$ ([[lem-lorentz-map-preserves-metric-and-causal-structure]], [[def-oriented-minkowski-volume-form]]).

[L3] For every $|\boldsymbol\beta|<1$ the passive boost $B(\boldsymbol\beta)$ is a proper orthochronous Lorentz map with $B(\boldsymbol\beta)^{-1}=B(-\boldsymbol\beta)$; the map $\boldsymbol\beta\mapsto B(\boldsymbol\beta)$ is injective and $B(\mathbf 0)=\operatorname{id}_V$ ([[lem-boost-is-proper-orthochronous-with-inverse]], [[def-lorentz-boost]]).

[L4] For every unit spatial vector $e$ and all $\beta_1,\beta_2\in(-1,1)$, $B(\beta_1e)B(\beta_2e)=B\bigl(\frac{\beta_1+\beta_2}{1+\beta_1\beta_2}e\bigr)$ with $\bigl|\frac{\beta_1+\beta_2}{1+\beta_1\beta_2}\bigr|<1$, and the two collinear boosts commute ([[lem-collinear-boost-composition-and-velocity-addition]]).

[L5] The map $r\mapsto\tanh(r)$ is a strictly increasing bijection of $\mathbb R$ onto $(-1,1)$, and for every unit spatial vector $e$ and all $r,s\in\mathbb R$ one has $B(\tanh(r)e)B(\tanh(s)e)=B(\tanh(r+s)e)$ ([[lem-rapidity-parametrization-of-collinear-boosts]]).

[L6] For a proper orthochronous Lorentz map $L$ with $u:=Le_0$ and coordinates $(u^0,u_{\mathrm{vec}})$, the parameter $\boldsymbol\beta:=u_{\mathrm{vec}}/u^0$ satisfies $|\boldsymbol\beta|<1$, and $L=B(-\boldsymbol\beta)\widehat R$ with $\widehat R:=B(\boldsymbol\beta)L$ the extension $\operatorname{diag}(1,R)$ of a spatial rotation of the frame; this factorization is unique among parameters in the open unit ball and spatial rotations; conversely every such $B(-\boldsymbol\beta)\widehat R$ is proper orthochronous; and $L$ is a passive boost if and only if $\widehat R=\operatorname{id}_V$ ([[lem-boost-rotation-factorization]]).

[L7] A spatial rotation of the frame is the extension by $e_0\mapsto e_0$ of a linear map of $S$ preserving $\delta$ with determinant $+1$ on $S$; its extension is denoted $\operatorname{diag}(1,R)$ in the frame's basis ([[def-spatial-rotation-of-an-inertial-frame]]).

[L8] In the frame the timelike set is $T=T_+\cup T_-$ with $T_+=\{v:v^0>|v_{\mathrm{vec}}|\}$ and $T_-=\{v:v^0<-|v_{\mathrm{vec}}|\}$, and $T_+,T_-$ are exactly the two components; since $e_0\in C^+$ has coordinates $(1,0,0,0)$ ([[def-inertial-frame-and-inertial-chart]]), one has $C^+=T_+$ and $C^-=T_-$, with closed cones $\operatorname{cl}(C^+)=\{v:v^0\ge|v_{\mathrm{vec}}|\}$ and $\operatorname{cl}(C^-)=\{v:v^0\le-|v_{\mathrm{vec}}|\}$ ([[lem-timelike-cone-has-two-convex-components]], [[def-time-orientation-and-future-causal-sets]]).

[L9] A nonzero vector is timelike when $\eta(v,v)<0$, null when $\eta(v,v)=0$, spacelike when $\eta(v,v)>0$ ([[def-causal-classification-of-lorentz-vectors]]); the oriented volume form satisfies $\epsilon_{0123}=+1$ ([[def-oriented-minkowski-volume-form]]); $\det$ of a linear operator is the determinant of its matrix in any ordered basis and the Leibniz sum over a diagonal matrix is the product of its diagonal entries ([[def-determinant-of-a-linear-operator]], [[def-determinant-of-a-square-matrix]]).



[L10] For spatial coordinate vectors $a,b$, $|a\cdot b|\le |a|\,|b|$ by [[thm-cauchy-schwarz-and-the-euclidean-norm]], applied in dimension $3$.

## Proof

**Proof technique:** direct.

1.1 Clause (i), first sentence: by [L3], $B(\boldsymbol\beta)$ is a proper orthochronous Lorentz map with inverse $B(-\boldsymbol\beta)$ for every $|\boldsymbol\beta|<1$. [L3]

1.2 Clause (i), second sentence: by [L4] the composition of two collinear boosts is the boost with parameter $\frac{\beta_1+\beta_2}{1+\beta_1\beta_2}$ in the same direction, this parameter lies in $(-1,1)$, and the two factors commute; in particular the composition law is a collinear law and not an addition of parameters. [L4]

1.3 Clause (i), third and fourth sentences: fix a unit spatial axis $e$. By [L5], $r\mapsto\tanh(r)$ is a strictly increasing bijection of $\mathbb R$ onto $(-1,1)$; hence for each $b\in(-1,1)$ there is exactly one $r\in\mathbb R$ with $b=\tanh(r)$, so $B(be)=B(\tanh(r)e)$ has the unique rapidity $r$, and for $r,s\in\mathbb R$ the product $B(\tanh(r)e)B(\tanh(s)e)$ equals $B(\tanh(r+s)e)$, so rapidities add along the fixed axis. The rapidity $r$ is a scalar attached to the fixed axis $e$: the displayed equations concern the scalar parameters $\beta_i=\tanh(r_i)$ of boosts $B(\beta_ie)$, and no identification of a vector $\boldsymbol\beta\in\mathbb R^3$ with $\tanh(r)$ is made. [L5]

1.4 Clause (ii), subgroup part: [L2] states that $SO(V,\eta)$, $O^{\uparrow}(V,\eta)$ and their intersection $SO^+(V,\eta)$ are subgroups of $O(V,\eta)$, and that $O(V,\eta)$ is a subgroup of $GL(V)$. [L1, L2]

1.5 Clause (ii), membership part: every passive boost lies in $SO^+(V,\eta)$ by [L3]. For a linear $\delta$-isometry $R:S\to S$ of determinant $1$, whose extension $\widehat R=\operatorname{diag}(1,R)$ is a spatial rotation of the frame: by [L6] the product $B(\mathbf 0)\widehat R=\widehat R$ of the boost with parameter $\mathbf 0$ and the spatial rotation is a proper orthochronous Lorentz map; here $B(\mathbf 0)=\operatorname{id}_V$ by [L3], so $\widehat R\in SO^+(V,\eta)$. [L3, L6, L7]

1.6 Clause (iii): by [L6] every $L\in SO^+(V,\eta)$ has the factorization $L=B(-\boldsymbol\beta)\widehat R$ with $\boldsymbol\beta=u_{\mathrm{vec}}/u^0$ and $\widehat R$ the extension of a spatial rotation of the frame, and this factorization is unique; consequently $L$ is a product of a passive boost and a spatial rotation in that order, and [L6] also gives that $L$ is a passive boost if and only if $\widehat R=\operatorname{id}_V$. [L6, L7]

1.7 Clause (iv), preservation part: let $L\in SO^+(V,\eta)$, so $L$ is Lorentz, proper and orthochronous. By [L2], $L$ preserves $\eta(v,v)$ and the causal character of every nonzero vector, and $L(C^+)=C^+$, so $Le_0$ is future timelike because $e_0\in C^+$ by [L8]. For the closed cones, first record the criterion: if $w$ is future timelike and $v\neq0$ has $\eta(v,v)\le0$, then $v\in\operatorname{cl}(C^+)$ if and only if $\eta(v,w)<0$, and $v\in\operatorname{cl}(C^-)$ if and only if $\eta(v,w)>0$. Indeed [L8] gives $\operatorname{cl}(C^+)=\{v^0\ge|v_{\mathrm{vec}}|\}$ and $\operatorname{cl}(C^-)=\{v^0\le-|v_{\mathrm{vec}}|\}$ in frame coordinates, with $\eta(v,v)=-(v^0)^2+|v_{\mathrm{vec}}|^2$ and $w^0>|w_{\mathrm{vec}}|$; for nonzero $v\in\operatorname{cl}(C^+)$ one has $v^0\ge|v_{\mathrm{vec}}|\ge0$ and $v^0>0$, so $\eta(v,w)\le-v^0w^0+|v_{\mathrm{vec}}|\,|w_{\mathrm{vec}}|\le v^0(|w_{\mathrm{vec}}|-w^0)<0$, while for nonzero $v\in\operatorname{cl}(C^-)$ one has $-v^0\ge|v_{\mathrm{vec}}|\ge0$ and $-v^0>0$, so $\eta(v,w)\ge(-v^0)w^0-|v_{\mathrm{vec}}|\,|w_{\mathrm{vec}}|\ge(-v^0)(w^0-|w_{\mathrm{vec}}|)>0$; the nonzero causal vectors split into $\operatorname{cl}(C^+)\setminus\{0\}$ and $\operatorname{cl}(C^-)\setminus\{0\}$ by [L8], so the signs are exhaustive. Since $L$ preserves the form, is an isomorphism and satisfies $\eta(Lv,Le_0)=\eta(v,e_0)$, applying the criterion with $w:=Le_0$ gives $L(\operatorname{cl}(C^+))\subseteq\operatorname{cl}(C^+)$ and $L(\operatorname{cl}(C^-))\subseteq\operatorname{cl}(C^-)$; applying the same argument to $L^{-1}\in SO^+(V,\eta)$ (which exists by [L2]) gives the reverse inclusions, hence $L(\operatorname{cl}(C^+))=\operatorname{cl}(C^+)$ and $L(\operatorname{cl}(C^-))=\operatorname{cl}(C^-)$. By [L2] again, properness gives $\epsilon(Lv_0,\dots,Lv_3)=\epsilon(v_0,\dots,v_3)$ for all $v_0,\dots,v_3$, which is the preservation of the oriented volume form and of the orientation. [L2, L8, L9, L10, algebra]

1.8 Clause (iv), last sentence: for any $L\in O(V,\eta)$, [L2] gives $\det L=\pm1$ and $L(C^+)\in\{C^+,C^-\}$, so $L$ either preserves or interchanges the future and past cones. For the failure of the converse, let $\Lambda:=-\operatorname{id}_V$, with matrix $M=-\operatorname{diag}(1,1,1,1)$ in the frame; its entries satisfy $M^{T}\eta_0M=\eta_0$, because the temporal diagonal entry is $(-1)(-1)(-1)=-1$, each spatial diagonal entry is $(-1)(+1)(-1)=+1$, and all off-diagonal entries vanish, so $\Lambda$ is a Lorentz map by [L1]; moreover $\det\Lambda=(-1)^4=1$, because the Leibniz sum over the diagonal matrix $M$ is the product of its diagonal entries by [L9], so $\Lambda$ is proper. On coordinates, $\Lambda$ sends a vector with coordinates $(v^0,v_{\mathrm{vec}})$ to $(-v^0,-v_{\mathrm{vec}})$, and $v^0>|v_{\mathrm{vec}}|$ holds exactly when $-v^0<-|v_{\mathrm{vec}}|$; hence $\Lambda(T_+)=T_-$ and $\Lambda(T_-)=T_+$ with the notation of [L8], so $\Lambda$ interchanges the two components of the timelike set and $\Lambda(C^+)=C^-\neq C^+$: $\Lambda$ is a proper but non-orthochronous Lorentz map, and $\det L=1$ alone does not force $L(C^+)=C^+$. [L1, L2, L8, L9]

2.1 Clause (i) is steps 1.1-1.3; clause (ii) is steps 1.4-1.5; clause (iii) is step 1.6; clause (iv) is steps 1.7-1.8. Every clause is either a direct restatement of the cited supplier with its hypotheses (frame fixed, $|\boldsymbol\beta|<1$, $L$ proper orthochronous) or the displayed finite computation of step 1.8. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 1.7, step 1.8] ∎
