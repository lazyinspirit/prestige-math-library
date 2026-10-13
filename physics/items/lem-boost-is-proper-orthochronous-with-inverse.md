---
id: lem-boost-is-proper-orthochronous-with-inverse
kind: lemma
title: The passive boost is a proper orthochronous Lorentz map with inverse B(-beta)
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 7
deps: [def-lorentz-boost, lem-lorentz-map-preserves-metric-and-causal-structure,
       def-lorentz-map-and-lorentz-group, def-inertial-frame-and-inertial-chart,
       def-euclidean-inner-product, def-rational-power, lem-rational-power-laws,
       lem-of-square-monotone, cor-triangle-inequality-for-inner-product-norm,
       def-matrix-product-and-identity-matrix, def-real-order,
       thm-cauchy-schwarz-and-the-euclidean-norm,
       def-determinant-of-a-linear-operator, def-determinant-of-a-square-matrix,
       def-lorentz-form-and-inertia,
       lem-timelike-cone-has-two-convex-components,
       def-time-orientation-and-future-causal-sets]
dependency_roles:
  def-lorentz-boost: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-rational-power: mathematical-premise
  lem-rational-power-laws: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  cor-triangle-inequality-for-inner-product-norm: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-real-order: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  def-determinant-of-a-linear-operator: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
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

Let $B(\boldsymbol\beta)$ be the passive boost of [[def-lorentz-boost]] in an
inertial frame $(o;e_0,e_1,e_2,e_3)$. For every
$\boldsymbol\beta\in\mathbb R^3$ with $|\boldsymbol\beta|<1$ the following
hold.

(i) $B(\boldsymbol\beta)$ is a proper orthochronous Lorentz map:
$\eta(B(\boldsymbol\beta)v,B(\boldsymbol\beta)w)=\eta(v,w)$ for all $v,w\in V$,
$\det B(\boldsymbol\beta)=+1$, and $B(\boldsymbol\beta)(C^+)=C^+$.

(ii) $B(\mathbf 0)$ is the identity, and for every $\boldsymbol\beta$ the image
of the frame vector $e_0$ is
$B(\boldsymbol\beta)e_0=\gamma\,(e_0-\beta_1e_1-\beta_2e_2-\beta_3e_3)$, so
the map $\boldsymbol\beta\mapsto B(\boldsymbol\beta)$ is injective and
$B(\boldsymbol\beta)$ fixes $0_V$; moreover every vector $y$ with
coordinates $(0,y_{\mathrm{vec}})$ and
$\boldsymbol\beta\cdot y_{\mathrm{vec}}=0$ satisfies
$B(\boldsymbol\beta)y=y$.

(iii) $B(-\boldsymbol\beta)B(\boldsymbol\beta)
=B(\boldsymbol\beta)B(-\boldsymbol\beta)=\operatorname{id}_V$; in particular
$B(\boldsymbol\beta)$ is invertible with
$B(\boldsymbol\beta)^{-1}=B(-\boldsymbol\beta)$, and $B(\boldsymbol\beta)$ and
$B(-\boldsymbol\beta)$ are inverse bijections of $V$.

(iv) If $u$ is a future timelike unit vector with coordinates
$(u^0,u_{\mathrm{vec}})$, so that $\eta(u,u)=-1$, $u^0>0$ and
$|u_{\mathrm{vec}}|<u^0$, then the boost with parameter
$\boldsymbol\beta:=u_{\mathrm{vec}}/u^0$ satisfies
$B(\boldsymbol\beta)u=e_0$.

(v) If a vector $x$ has $x^0>|x_{\mathrm{vec}}|$, then the first coordinate of
$B(\boldsymbol\beta)x$ is $\gamma\,(x^0-\boldsymbol\beta\cdot x_{\mathrm{vec}})>0$;
if $x^0<-|x_{\mathrm{vec}}|$ then that first coordinate is negative. In
particular $B(\boldsymbol\beta)$ maps the future open cone
$\{x:x^0>|x_{\mathrm{vec}}|\}$ into itself.

## Facts & Assumptions

**Given:** An inertial frame $(o;e_0,e_1,e_2,e_3)$ of the model and a vector $\boldsymbol\beta\in\mathbb R^3$ with $|\boldsymbol\beta|<1$, with $b:=|\boldsymbol\beta|$ when $\boldsymbol\beta\neq\mathbf 0$.

[L1] The passive boost is defined by $x'^0=\gamma(x^0-\boldsymbol\beta\cdot x_{\mathrm{vec}})$ and $x'_{\mathrm{vec}}=x_{\mathrm{vec}} +\frac{\gamma-1}{|\boldsymbol\beta|^2}(\boldsymbol\beta\cdot x_{\mathrm{vec}})\boldsymbol\beta -\gamma\boldsymbol\beta x^0$ for $\boldsymbol\beta\neq\mathbf 0$, and $B(\mathbf 0)=\operatorname{id}_V$; here $\gamma=(1-|\boldsymbol\beta|^2)^{-1/2}\ge1$ ([[def-lorentz-boost]]).

[L2] For a spatial column $a\in\mathbb R^3$, whose function domain is $\{0,1,2\}$, use the one-based labels $a_i:=a(i-1)$ for $i\in\{1,2,3\}$. In these labels the Euclidean inner product is $x\cdot y=\sum_{i=1}^3x_iy_i$ and the norm is $|x|=\sqrt{x\cdot x}$ ([[def-euclidean-inner-product]]).

[L3] $|\boldsymbol\beta\cdot x_{\mathrm{vec}}| \le|\boldsymbol\beta|\,|x_{\mathrm{vec}}|$ for all $\boldsymbol\beta,x_{\mathrm{vec}}\in\mathbb R^3$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[L4] Rational powers of positive reals satisfy $(a^r)^s=a^{rs}$, $a^{-r}=1/a^r$ and $a^{1/2}>0$ for $a>0$ ([[lem-rational-power-laws]]); the power $\gamma$ is the rational power $(1-|\boldsymbol\beta|^2)^{-1/2}$ of the positive base $1-|\boldsymbol\beta|^2$ ([[def-rational-power]]).

[L5] In an $\eta$-orthonormal ordered basis the timelike set is $T=T_+\cup T_-$ with $T_+=\{x:x^0>|x_{\mathrm{vec}}|\}$, $T_-=\{x:x^0<-|x_{\mathrm{vec}}|\}$, and $T_+$, $T_-$ are exactly the two components of $T$ ([[lem-timelike-cone-has-two-convex-components]]).

[L6] $T=C^+\sqcup C^-$, where $C^+$ is the chosen component of the time orientation ([[def-time-orientation-and-future-causal-sets]]).

[L7] An inertial frame has $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ and $e_0\in C^+$, and $E(u):=\sum_au^ae_a$ is a linear isomorphism $\mathbb R^4\to V$ whose inverse gives the coordinates ([[def-inertial-frame-and-inertial-chart]]).

[L8] For a linear Lorentz map $L$ one has $L(C^+)=C^+$ if and only if $L(C^+)\subseteq C^+$, and such an $L$ permutes the two components; every Lorentz map satisfies $\det L=\pm1$ ([[lem-lorentz-map-preserves-metric-and-causal-structure]]).

[L9] The determinant of an operator is the determinant of its matrix in any ordered basis, independently of the basis ([[def-determinant-of-a-linear-operator]]).

[L10] The determinant of a square matrix is the Leibniz sum $\sum_\sigma\operatorname{sgn}(\sigma)\prod_ia_{i,\sigma(i)}$ ([[def-determinant-of-a-square-matrix]]).

[L11] $\eta$ is a symmetric bilinear form, so $\eta(\sum_a\xi^ae_a,\sum_b\zeta^be_b)=\sum_{a,b}\xi^a\zeta^b\eta(e_a,e_b)$ ([[def-lorentz-form-and-inertia]]).

## Proof

**Proof technique:** direct.

1.1 Assume $\boldsymbol\beta\neq\mathbf 0$ and put $b:=|\boldsymbol\beta|$. Define $J:\mathbb R^3\to S:=\operatorname{span}(e_1,e_2,e_3)$ by $J(a):=\sum_{i=1}^3a_i e_i$; [L7] makes $J$ a linear isomorphism onto $S$, and [L7, L11] give $\eta(J(a),J(d))=a\cdot d$ and $\eta(e_0,J(a))=0$. Set $n:=\boldsymbol\beta/b\in\mathbb R^3$ and $e:=J(n)\in S$, so $n\cdot n=\eta(e,e)=1$. For $x=x^0e_0+J(x_{\mathrm{vec}})$ set $s:=n\cdot x_{\mathrm{vec}}$, $y_{\mathrm{vec}}:=x_{\mathrm{vec}}-sn$ and $y:=J(y_{\mathrm{vec}})$; then $x=x^0e_0+se+y$ and $n\cdot y_{\mathrm{vec}}=\eta(e,y)=0$. Put $Y:=\{J(a):n\cdot a=0\}\subseteq S$. This decomposition is unique, since its time coordinate is $x^0$, its $e$ coefficient is $s$, and its transverse coordinate is $y_{\mathrm{vec}}$, so $V=\operatorname{span}(e_0,e)\oplus Y$. Substitution into [L1] gives $(B(\boldsymbol\beta)x)^0=\gamma(x^0-bs)$ and $(B(\boldsymbol\beta)x)_{\mathrm{vec}}=(\gamma s-\gamma bx^0)n+y_{\mathrm{vec}}$. Thus in this decomposition the boost sends $(x^0,s,y)$ to $(\gamma(x^0-bs),\gamma(s-bx^0),y)$, preserves $\operatorname{span}(e_0,e)$ and fixes $Y$ pointwise; also $\eta$ is positive definite on $Y$ because $\eta(J(a),J(a))=|a|^2$. [L1, L2, L7, L11, algebra]

1.2 Reading [L1] at the coordinate list $(1,0,0,0)$ of $e_0$ gives $(B(\boldsymbol\beta)e_0)^0=\gamma$ and $(B(\boldsymbol\beta)e_0)_{\mathrm{vec}}=-\gamma\boldsymbol\beta$, that is $B(\boldsymbol\beta)e_0=\gamma(e_0-\beta_1e_1-\beta_2e_2-\beta_3e_3)$ (for $\boldsymbol\beta=\mathbf 0$, $\gamma=1$ and both sides are $e_0$). The first coordinate $\gamma>0$ and the spatial coordinates $-\gamma\beta_i$ of $B(\boldsymbol\beta)e_0$ determine $\gamma$ and then each $\beta_i$, so $\boldsymbol\beta\mapsto B(\boldsymbol\beta)e_0$ is injective and hence so is $\boldsymbol\beta\mapsto B(\boldsymbol\beta)$; also $B(\boldsymbol\beta)$ fixes $0_V$ because it is linear. If $y$ has coordinates $(0,y_{\mathrm{vec}})$ with $\boldsymbol\beta\cdot y_{\mathrm{vec}}=0$, then [L1] gives $(B(\boldsymbol\beta)y)^0=\gamma(0-0)=0$ and $(B(\boldsymbol\beta)y)_{\mathrm{vec}}=y_{\mathrm{vec}}+\frac{\gamma-1}{b^2}\cdot0\cdot\boldsymbol\beta-0=y_{\mathrm{vec}}$, so $B(\boldsymbol\beta)y=y$ (for $\boldsymbol\beta=\mathbf 0$ because $B(\mathbf 0)$ is the identity). [L1, L2, algebra]

1.3 Let $x$ satisfy $x^0>|x_{\mathrm{vec}}|$. If $\boldsymbol\beta\neq\mathbf 0$, then $\boldsymbol\beta\cdot x_{\mathrm{vec}}\le|\boldsymbol\beta\cdot x_{\mathrm{vec}}|\le b|x_{\mathrm{vec}}|<bx^0$ by [L3], so $x^0-\boldsymbol\beta\cdot x_{\mathrm{vec}}>0$ and the first coordinate of $B(\boldsymbol\beta)x$ is $\gamma(x^0-\boldsymbol\beta\cdot x_{\mathrm{vec}})>0$; if $\boldsymbol\beta=\mathbf 0$, that first coordinate is $x^0>0$. Symmetrically, $x^0<-|x_{\mathrm{vec}}|$ gives $\boldsymbol\beta\cdot x_{\mathrm{vec}}\ge-b|x_{\mathrm{vec}}|>bx^0$ and first coordinate $<0$. Moreover the frame is inertial, so $e_0\in C^+$ and [L5] with [L6] identify the components in the frame's coordinates as $C^+=\{x:x^0>|x_{\mathrm{vec}}|\}$ and $C^-=\{x:x^0<-|x_{\mathrm{vec}}|\}$. [L1, L3, L5, L6, L7, algebra]

1.4 If $u_{\mathrm{vec}}=0$, future unit normalization gives $u^0=1$, so $u=e_0$, $\boldsymbol\beta=0$ and $B(0)u=e_0$ by [L1]. Otherwise let $u$ be future timelike with $\eta(u,u)=-1$ and $u^0>0$. By [L5] one has $\eta(u,u)=-(u^0)^2+|u_{\mathrm{vec}}|^2$, so $|u_{\mathrm{vec}}|^2=(u^0)^2-1$ and $|u_{\mathrm{vec}}|<u^0$; thus $\boldsymbol\beta:=u_{\mathrm{vec}}/u^0$ satisfies $|\boldsymbol\beta|<1$. Moreover $1-|\boldsymbol\beta|^2=((u^0)^2-|u_{\mathrm{vec}}|^2)/(u^0)^2=1/(u^0)^2$, so by [L4] $\gamma=(1-|\boldsymbol\beta|^2)^{-1/2}=((u^0)^2)^{1/2}=u^0$. Substituting $x=u$ in [L1], and using $\boldsymbol\beta\cdot u_{\mathrm{vec}}=|u_{\mathrm{vec}}|^2/u^0$ and $|\boldsymbol\beta|^2=|u_{\mathrm{vec}}|^2/(u^0)^2$, the first coordinate is $\gamma(u^0-\boldsymbol\beta\cdot u_{\mathrm{vec}})=\gamma((u^0)^2-|u_{\mathrm{vec}}|^2)/u^0=\gamma/u^0=1$, and the spatial part is $u_{\mathrm{vec}}+\frac{\gamma-1}{|\boldsymbol\beta|^2}(\boldsymbol\beta\cdot u_{\mathrm{vec}})\boldsymbol\beta-\gamma u_{\mathrm{vec}}=u_{\mathrm{vec}}+(\gamma-1)u_{\mathrm{vec}}-\gamma u_{\mathrm{vec}}=0$. Hence $B(\boldsymbol\beta)u=e_0$. [L1, L2, L4, L5, algebra]

2.1 For vectors $x=(x^0,s,y)$ and $w=(w^0,r,z)$ in the coordinates of step 1.1, bilinearity [L11] and the orthonormality of the frame [L7], together with $\eta(e_0,e)=0$, $\eta(e_0,y)=\eta(e,z)=0$ and $\eta(y,z)=y_{\mathrm{vec}}\cdot z_{\mathrm{vec}}$, give $\eta(x,w)=-x^0w^0+sr+y_{\mathrm{vec}}\cdot z_{\mathrm{vec}}$. Substituting the action of step 1.1, $\eta(Bx,Bw)=-\gamma^2(x^0-bs)(w^0-br)+\gamma^2(s-bx^0)(r-bw^0)+y_{\mathrm{vec}}\cdot z_{\mathrm{vec}}=\gamma^2(1-b^2)(-x^0w^0+sr)+y_{\mathrm{vec}}\cdot z_{\mathrm{vec}}=-x^0w^0+sr+y_{\mathrm{vec}}\cdot z_{\mathrm{vec}}=\eta(x,w)$, because $\gamma^2(1-b^2)=1$ by [L4] and $0<b<1$. So $B(\boldsymbol\beta)$ is a linear Lorentz map. For an ordered basis of $Y$ extended to the ordered basis $(e_0,e,y_1,y_2)$ of $V$, the matrix of $B(\boldsymbol\beta)$ is block diagonal with the $2\times2$ block $\begin{pmatrix}\gamma&-\gamma b\\-\gamma b&\gamma\end{pmatrix}$ on $\operatorname{span}(e_0,e)$ and the $2\times2$ identity on $Y$; in the Leibniz formula [L10] every product is zero unless the permutation preserves the two blocks, and a block-preserving permutation has sign the product of the signs of its two restrictions, so $\det B(\boldsymbol\beta)=(\gamma^2-\gamma^2b^2)\cdot1=\gamma^2(1-b^2)=1$. By [L9] this is $\det B(\boldsymbol\beta)$. [step 1.1, L4, L7, L9, L10, L11, algebra]

2.2 For the parameter $-\boldsymbol\beta$ the unit spatial vector is $-e=J(-n)$ and the adapted coefficient is $-s$, so step 1.1 applied to $-\boldsymbol\beta$ gives $B(-\boldsymbol\beta)(x^0,s,y)=(\gamma(x^0+bs),\gamma(s+bx^0),y)$. Composing, $B(-\boldsymbol\beta)\bigl(B(\boldsymbol\beta)(x^0,s,y)\bigr)=(\gamma^2(x^0-bs)+b\gamma^2(s-bx^0),\ \gamma^2(s-bx^0)+b\gamma^2(x^0-bs),\ y)=(\gamma^2(1-b^2)x^0,\ \gamma^2(1-b^2)s,\ y)=(x^0,s,y)$ by $\gamma^2(1-b^2)=1$, and the same computation with the roles of $\boldsymbol\beta$ and $-\boldsymbol\beta$ exchanged gives $B(\boldsymbol\beta)\bigl(B(-\boldsymbol\beta)(x^0,s,y)\bigr)=(x^0,s,y)$. Hence $B(-\boldsymbol\beta)B(\boldsymbol\beta)=B(\boldsymbol\beta)B(-\boldsymbol\beta)=\operatorname{id}_V$, so $B(\boldsymbol\beta)^{-1}=B(-\boldsymbol\beta)$ and both maps are inverse bijections of $V$. [step 1.1, L4, algebra]

3.1 By step 2.1 the map $B(\boldsymbol\beta)$ is a linear Lorentz map; by step 1.3 it carries $C^+$ into the set of vectors whose first coordinate is positive, and by the metric preservation of step 2.1 the image of a timelike vector is timelike, so $B(\boldsymbol\beta)(C^+)\subseteq C^+$ under the coordinate description of step 1.3. The containment equivalence in [L8] applied to the Lorentz map $B(\boldsymbol\beta)$ then gives $B(\boldsymbol\beta)(C^+)=C^+$. Together with metric preservation and $\det B(\boldsymbol\beta)=1$ from step 2.1, the boost $B(\boldsymbol\beta)$ is a proper orthochronous Lorentz map. [step 1.3, step 2.1, L8, algebra]

4.1 For $\boldsymbol\beta=\mathbf 0$: $B(\mathbf 0)$ is the identity by [L1]; the identity preserves $\eta$, fixes $C^+$, and its matrix in any ordered basis is the identity matrix, whose determinant is $1$ by the Leibniz formula [L10], so (i) holds; (ii) holds because $B(\mathbf 0)e_0=e_0=\gamma(e_0-\mathbf 0)$ with $\gamma(\mathbf 0)=1$ and $B(\mathbf 0)$ fixes every vector, while injectivity over the whole parameter range follows from the entries recorded in step 1.2; (iii) holds because $B(\mathbf 0)^{-1}=B(\mathbf 0)=B(-\mathbf 0)$; (iv) holds because a future timelike unit vector with $u_{\mathrm{vec}}=0$ has $u=e_0$, so $B(\mathbf 0)u=e_0$; and (v) reduces to $x^0>0$ respectively $x^0<0$. For $\boldsymbol\beta\neq\mathbf 0$: (i) is steps 2.1 and 3.1, (ii) is step 1.2, (iii) is step 2.2, (iv) is step 1.4, and (v) is step 1.3. Thus every clause holds for every $|\boldsymbol\beta|<1$. [step 1.2, step 1.3, step 1.4, step 2.1, step 2.2, step 3.1, L1, L10] ∎
