---
id: lem-gr-warped-base-vacuum-reduction
kind: lemma
title: "Two-dimensional base identities for the warped spherical metric: pure-trace Ricci, the vacuum reduction and the extra Killing field"
status: published
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-gr-warped-spherical-christoffel-and-ricci, def-gr-curvature-tensor-and-derived-tensors, def-derivative, thm-chain-rule, thm-algebra-of-derivatives, def-invertible-matrix-and-general-linear-group, prop-coordinate-vector-fields-commute, def-countable-choice, def-rational-power, def-interval, def-c-r-and-smooth-maps-between-smooth-manifolds, def-natural-logarithm, thm-logarithm-derivative-and-integral, def-lie-derivative-of-a-tensor-field, prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor, thm-zero-derivative-on-connected-open-euclidean-set-iff-constant, thm-real-power-continuity-and-derivatives]
dependency_roles:
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-zero-derivative-on-connected-open-euclidean-set-iff-constant: mathematical-premise
  prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor: mathematical-premise
  def-lie-derivative-of-a-tensor-field: mathematical-premise
  lem-gr-warped-spherical-christoffel-and-ricci: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-derivative: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  prop-coordinate-vector-fields-commute: mathematical-premise
  def-countable-choice: mathematical-premise
  def-rational-power: mathematical-premise
  def-interval: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.4)-(7.20): the reduction of the vacuum equations for a spherically symmetric metric to two functions of r and the resulting constancy of the mass parameter, printed pp. 167-169 (PDF pp. 174-176)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 6.1.1: Birkhoff's theorem, the staticity conclusion and the reduced form of the metric, printed pp. 233-235 (PDF pp. 240-242)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $V\subseteq\mathbb R^2$ be a connected nonempty open set, let $(q_{AB})$ be a
smooth symmetric matrix of functions on $V$ with $D_q:=\det(q_{AB})<0$
everywhere, and let $r:V\to(0,\infty)$ be smooth; let
$\Gamma^A{}_{BC}$, $\operatorname{Hess}_{AB}r$, $\Delta_qr$, $z$, $R^A{}_{BCD}$,
$R_{ABCD}$, $\operatorname{Ric}(q)_{AB}$ and $S_q$ be the functions defined in
the statement of [[lem-gr-warped-spherical-christoffel-and-ricci]], so that all
index sums run over $\{0,1\}$. Assume in addition that $z\ne0$ everywhere on
$V$ and that the **warped vacuum equations**

$$\operatorname{Ric}(q)_{AB}=\frac{2}{r}\operatorname{Hess}_{AB}r, \qquad 1-z-r\Delta_qr=0 \qquad\text{on }V$$

hold, where the left-hand equation is the vanishing of the components
$\operatorname{Ric}_{AB}$ and the right-hand equation the vanishing of the
components $\operatorname{Ric}_{ij}$ of the warped metric of
[[lem-gr-warped-spherical-christoffel-and-ricci]] clause (c) (the mixed
components vanish there identically). Define the **base volume form** by

$$\varepsilon_{AB}:=\sqrt{-D_q}\,\eta_{AB},\qquad \eta_{01}:=1,\quad\eta_{10}:=-1,\quad\eta_{00}:=\eta_{11}:=0,$$

and the **volume-form field** by

$$K_A:=\sum_B\varepsilon_{AB}\,\partial^Br,\qquad \partial^Br:=\sum_Cq^{BC}\partial_Cr,\qquad K^A:=\sum_Bq^{AB}K_B .$$

For a smooth base vector field $\xi=\xi^A\partial_A$, define a **Killing
field of $q$** to mean $\mathcal L_\xi q=0$, with Lie derivative defined
by $\mathcal L_\xi q=(d/dt)|_{t=0}\Phi_t^*q$ for the local flow $\Phi_t$
([[def-lie-derivative-of-a-tensor-field]]). Its coordinate components are
$$(\mathcal L_\xi q)_{AB}=\xi^C\partial_Cq_{AB}+q_{CB}\partial_A\xi^C+q_{AC}\partial_B\xi^C$$
by [[prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor]].
Here $\nabla_A\xi_B:=\partial_A(q_{BC}\xi^C)-\Gamma^C{}_{AB}\xi_C$
and the base gradient is $\nabla r=(q^{AB}\partial_Br)\partial_A$.

Then:

**(a) Pure trace in two dimensions.**
$\operatorname{Ric}(q)_{AB}=\tfrac12S_q\,q_{AB}$ and $S_q=\sum_{A,B}q^{AB}\operatorname{Ric}(q)_{AB}$
on all of $V$.

**(b) Vacuum reduction of the Hessian.** $\operatorname{Hess}_{AB}r=\tfrac12\Delta_qr\,q_{AB}$,
$\Delta_qr=\dfrac{1-z}{r}$ and $S_q=\dfrac{2\Delta_qr}{r}=\dfrac{2(1-z)}{r^2}$ on $V$.

**(c) Constancy of the mass parameter.** $\partial_Cz=\dfrac{1-z}{r}\,\partial_Cr$ for
$C=0,1$, hence $\partial_C\bigl(r(1-z)\bigr)=0$; consequently there is a
constant $s\in\mathbb R$ with

$$r(1-z)=s,\qquad\text{that is,}\qquad z=1-\frac{s}{r}\qquad\text{on }V .$$

**(d) The extra Killing field.** $K(r)=0$, $\sum_A K^A\partial_Ar=0$,
$\sum_{A,B}K^Aq_{AB}K^B=-z$, the field is nonzero at every point,
$\nabla_AK_B+\nabla_BK_A=0$ for the base connection $\Gamma^A{}_{BC}$ (so $K$
is a Killing field of $q$ in the local definition above), and the
fields $K$ and $\nabla r$ are pointwise linearly independent: the equalities
$\sum_A K^A\partial_Ar=0$, $\sum_{A,B}K^Aq_{AB}K^B=-z$ and
$\sum_{A,B}\partial_Ar\,q^{AB}\partial_Br=z\ne0$ show that neither field
vanishes and that the two are not proportional.

**(e) Explicit components of the Killing field.** With
$\lambda:=\sqrt{-D_q}>0$ one has $K^0=-\dfrac{\partial_1r}{\lambda}$ and
$K^1=\dfrac{\partial_0r}{\lambda}$.

**(f) Scope.** The statements are identities of the displayed functions and
use only the two warped vacuum equations, the strict positivity of $r$ and the
hypothesis $z\ne0$; no field equation of the four-dimensional metric beyond
those two components, no global hypothesis on $V$ and no sign or physical
reading of $s$ is assumed. The constant $s$ is determined on the connected
set $V$; that it is the same constant for a larger region requires that region
to be connected as well.

## Facts & Assumptions

**Given:** A connected open set $V\subseteq\mathbb R^2$, a smooth symmetric matrix $q_{AB}$ with $\det q<0$ on $V$, a smooth $r:V\to(0,\infty)$ with $z\ne0$ everywhere, the auxiliary functions of [[lem-gr-warped-spherical-christoffel-and-ricci]], and the two warped vacuum equations.

[L1] The functions $\Gamma^A{}_{BC}$, $\operatorname{Hess}_{AB}r$, $\Delta_qr$, $z$, $R^A{}_{BCD}$, $R_{ABCD}$, $\operatorname{Ric}(q)_{AB}$ and $S_q$ are the explicit functions of [[lem-gr-warped-spherical-christoffel-and-ricci]], in particular $R^A{}_{BCD}=\partial_C\Gamma^A{}_{DB}-\partial_D\Gamma^A{}_{CB}+\sum_E(\Gamma^A{}_{CE}\Gamma^E{}_{DB}-\Gamma^A{}_{DE}\Gamma^E{}_{CB})$, $R_{ABCD}=\sum_Eq_{AE}R^E{}_{BCD}$, $\operatorname{Ric}(q)_{BD}=\sum_{A,C}q^{AC}R_{ABCD}$ and $S_q=\sum_{B,D}q^{BD}\operatorname{Ric}(q)_{BD}$; the compatibility identity $\partial_Cq_{AB}=\sum_D(\Gamma^D{}_{CA}q_{DB}+\Gamma^D{}_{CB}q_{AD})$ and the trace identity $\Delta_qr=\sum_A\partial_A(q^{AB}\partial_Br)+\sum_B(\sum_A\Gamma^A{}_{AB})q^{BD}\partial_Dr$ hold.

[L2] For an invertible $2\times2$ matrix $q$ with inverse $q^{-1}$, Cramer's rule gives $q^{00}=q_{11}/D_q$, $q^{11}=q_{00}/D_q$ and $q^{01}=q^{10}=-q_{01}/D_q$, and $q^{00}q^{11}-(q^{01})^2=1/D_q$ and $D_q<0$ ([[def-invertible-matrix-and-general-linear-group]], algebra).

[L3] The exterior derivative of a smooth function is the covector of its partial derivatives; the chain, product and quotient rules hold, and a smooth function on a connected nonempty open Euclidean set whose differential is zero is constant ([[thm-zero-derivative-on-connected-open-euclidean-set-iff-constant]], with $m=2$, $q=1$; [[def-derivative]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-interval]]).

[L4] The base Killing definition is $\mathcal L_\xi q=0$; its coordinate
Lie-derivative formula is the one in the Statement, valid in every dimension
([[def-lie-derivative-of-a-tensor-field]],
[[prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor]]).
Step 4.2 proves its equivalence with the symmetrized base derivative using [L1].

[L5] The square root $\sqrt{-D_q}>0$ is smooth because $D_q<0$ and $D_q$ is smooth, and $\partial_C\log(-D_q)=\sum_{A,B}q^{AB}\partial_Cq_{AB}=2\sum_D\Gamma^D{}_{CD}$ ([[def-rational-power]], [[thm-chain-rule]], [[def-derivative]], [[thm-real-power-continuity-and-derivatives]], [[thm-logarithm-derivative-and-integral]], [[def-countable-choice]]).

## Proof

**Proof technique:** compute the lowered curvature formula and its pair antisymmetries, derive the two-dimensional pure-trace identity from them, reduce the vacuum equations to the Hessian identity, differentiate $z$, and verify the Killing and component claims for the volume-form field.

1.1 (The two curvature antisymmetries.) Let $X,Y,Z,W$ be coordinate vector fields on $V$, so $[X,Y]=0$ by [[prop-coordinate-vector-fields-commute]]. The compatibility identity in [L1] says $Xq(Z,W)=q(\nabla_XZ,W)+q(Z,\nabla_XW)$ for the base connection defined by the displayed Christoffel symbols. Apply $X$ to the compatibility identity for $Yq(Z,W)$, apply $Y$ to the one for $Xq(Z,W)$, and subtract. The mixed terms cancel in pairs, and $XYq(Z,W)-YXq(Z,W)=0$; using the curvature definition in [L1] gives [L1, algebra]
$$q(R(X,Y)Z,W)+q(Z,R(X,Y)W)=0.$$
With $X=\partial_C$, $Y=\partial_D$, $Z=\partial_B$, $W=\partial_A$, this is $R_{ABCD}=-R_{BACD}$. The defining curvature formula also changes sign when $C,D$ are exchanged, so $R_{ABCD}=-R_{ABDC}$. In dimension two, a component can therefore be nonzero only if each of $(A,B)$ and $(C,D)$ is $(0,1)$ or $(1,0)$; the only possible components are $R_{0101}$ and its three skew variants. No pair-exchange identity is used. [L1, algebra]

1.2 (The base volume form is parallel.) Set $\varepsilon_{01}=\lambda$, $\varepsilon_{10}=-\lambda$, $\varepsilon_{00}=\varepsilon_{11}=0$, where $\lambda:=\sqrt{-D_q}>0$. By [L5], $\partial_C\lambda=\lambda(\Gamma^0{}_{C0}+\Gamma^1{}_{C1})$. The coordinate formula for the covariant derivative of a covariant two-tensor gives $\nabla_C\varepsilon_{AB}=\partial_C\varepsilon_{AB}-\Gamma^D{}_{CA}\varepsilon_{DB}-\Gamma^D{}_{CB}\varepsilon_{AD}$. For $(A,B)=(0,0)$ and $(1,1)$ the two connection terms cancel because the only nonzero entries of $\varepsilon$ are opposite; for $(A,B)=(0,1)$ the value is $\partial_C\lambda-\Gamma^0{}_{C0}\lambda-\Gamma^1{}_{C1}\lambda=0$, and for $(A,B)=(1,0)$ it is the negative of this. Thus $\nabla_C\varepsilon_{AB}=0$ for every choice of indices. [L1, L5, algebra]

2.1 (Pure trace.) By step 1.1 the only possibly nonzero lowered components are $R_{0101}$, $R_{0110}=-R_{0101}$, $R_{1001}=-R_{0101}$ and $R_{1010}=R_{0101}$; write $\rho:=R_{0101}$. In the sums $\operatorname{Ric}(q)_{BD}=\sum_{A,C}q^{AC}R_{ABCD}$ every term has an index repeated inside a pair except those with $\{A,B\}=\{C,D\}=\{0,1\}$, so $\operatorname{Ric}(q)_{00}=q^{11}R_{1010}=q^{11}\rho$, $\operatorname{Ric}(q)_{11}=q^{00}R_{0101}=q^{00}\rho$ and $\operatorname{Ric}(q)_{01}=\operatorname{Ric}(q)_{10}=q^{10}R_{1001}=-q^{01}\rho$. Cramer's rule [L2] gives $q^{00}q^{11}-(q^{01})^2=1/D_q$, hence $S_q=q^{00}\operatorname{Ric}(q)_{00}+2q^{01}\operatorname{Ric}(q)_{01}+q^{11}\operatorname{Ric}(q)_{11}=\rho(2q^{00}q^{11}-2(q^{01})^2)=2\rho/D_q$. Therefore $\tfrac12S_q\,q_{00}=\rho q_{00}/D_q=\rho q^{11}=\operatorname{Ric}(q)_{00}$ by [L2], $\tfrac12S_q\,q_{11}=\rho q_{11}/D_q=\rho q^{00}=\operatorname{Ric}(q)_{11}$, and $\tfrac12S_q\,q_{01}=\rho q_{01}/D_q=-\rho q^{01}=\operatorname{Ric}(q)_{01}$; this proves (a). [step 1.1, L2, algebra]

3.1 (Hessian reduction.) Substituting $\operatorname{Ric}(q)=\tfrac12S_q\,q$ of step 2.1 into the first warped vacuum equation gives $\operatorname{Hess}_{AB}r=\tfrac{rS_q}{4}q_{AB}$; tracing with $q^{AB}$ and using symmetry gives $\Delta_qr=\tfrac{rS_q}{4}\cdot2=\tfrac{rS_q}{2}$, hence $S_q=2\Delta_qr/r$ and $\operatorname{Hess}_{AB}r=\tfrac12\Delta_qr\,q_{AB}$. The second warped vacuum equation gives $r\Delta_qr=1-z$ and hence $\Delta_qr=(1-z)/r$ and $S_q=2(1-z)/r^2$. This proves (b). [step 2.1, given, algebra]

4.1 (Derivative of $z$.) Differentiating $q^{AE}q_{EB}=\delta^A{}_B$ and using the compatibility identity of [L1] gives [step 3.1, L1, L2, L3, algebra]
$$\partial_Cq^{AB}=-\Gamma^B{}_{CD}q^{AD}-\Gamma^A{}_{CD}q^{DB}.$$
Differentiate $z=\sum_{A,B}q^{AB}\partial_Ar\,\partial_Br$ and substitute this identity. The two connection sums are equal after exchanging the dummy indices $A,B$, so
$$\partial_Cz=2\sum_{A,B}q^{AB}\partial_Ar\bigl(\partial_C\partial_Br-\sum_D\Gamma^D{}_{CB}\partial_Dr\bigr)=2\sum_{A,B}q^{AB}\partial_Ar\operatorname{Hess}_{CB}r.$$
By step 3.1, $\operatorname{Hess}_{CB}r=\tfrac12\Delta_qr\,q_{CB}$, so $\partial_Cz=\Delta_qr\,\partial_Cr=\tfrac{1-z}{r}\partial_Cr$. Hence $\partial_C(r(1-z))=(1-z)\partial_Cr-r\partial_Cz=0$ for $C=0,1$; since $V$ is connected and open and $r(1-z)$ is smooth, [L3] makes it constant, and writing this constant as $s$ gives $z=1-s/r$ because $r>0$. This proves (c). [step 3.1, L1, L2, L3, algebra]

4.2 (The Killing field.) By step 1.2, $\nabla_C\varepsilon_{AB}=0$, so $\nabla_CK_A=\sum_B\varepsilon_{AB}q^{BD}\operatorname{Hess}_{CD}r$; with $\operatorname{Hess}=\tfrac12\Delta_qr\,q$ of step 3.1 this is $\tfrac12\Delta_qr\,\varepsilon_{AC}$, and adding $\nabla_AK_C=\tfrac12\Delta_qr\,\varepsilon_{CA}$ gives zero by antisymmetry of $\varepsilon$. For any smooth $\xi$, expanding the locally defined covariant derivatives gives $\nabla_A\xi_B+\nabla_B\xi_A=q_{BC}\partial_A\xi^C+q_{AC}\partial_B\xi^C+\xi^C(\partial_Aq_{BC}+\partial_Bq_{AC}-2\Gamma^D{}_{AB}q_{DC})$. The compatibility identity in [L1] and lower-index symmetry of $\Gamma$ reduce the parenthesis to $\partial_Cq_{AB}$. This is exactly $(\mathcal L_\xi q)_{AB}$ in [L4]. Applying it to $K$ proves $\mathcal L_Kq=0$, so $K$ is a Killing field under the stated two-dimensional definition. Put $w^A:=\partial^Ar$. From $K^A=q^{AC}\varepsilon_{CB}w^B$ we have $K(r)=K^A\partial_Ar=w^C\varepsilon_{CB}w^B=0$, since $w^Cw^B$ is symmetric and $\varepsilon_{CB}$ antisymmetric. Also $K\ne0$ because $q(K,K)=-z\ne0$. The components $K^0=-\partial_1r/\lambda$, $K^1=\partial_0r/\lambda$ follow from the definition of $K_A$, Cramer's rule [L2] and $\lambda^2=-D_q$; direct substitution gives $q(K,K)=\lambda^{-2}(q_{00}(\partial_1r)^2-2q_{01}\partial_0r\partial_1r+q_{11}(\partial_0r)^2)=\lambda^{-2}D_qz=-z$. Since $z\ne0$, $\nabla r\ne0$; a linear relation $aK+b\nabla r=0$ would give $0=q(K,aK+b\nabla r)=a(-z)$ and $0=q(\nabla r,aK+b\nabla r)=bz$, hence $a=b=0$. This proves (d) and (e). [step 1.2, step 3.1, L2, L4, algebra]

5.1 (Conclusion.) Step 1.1 supplies the pair antisymmetries, step 2.1 the pure trace (a), step 3.1 the reduction (b), step 4.1 the constancy (c), and step 4.2 the Killing field with its properties (d)-(e); clause (f) records the exact hypotheses, in particular that only the two displayed components of the four-dimensional vacuum equations, the positivity of $r$ and $z\ne0$ were used, and that the constant $s$ is produced on the connected set $V$. [step 1.1, step 2.1, step 3.1, step 4.1, step 4.2, given] ∎

## Remarks

- **The role of $z\ne0$.** The hypothesis makes $\nabla r$ non-null and nowhere zero, so that $K$ and $\nabla r$ are independent by step 4.2 and the coordinate construction of the Birkhoff theorem of this page can be carried out. The vacuum equations force $z=1-s/r$, so $z=0$ precisely at points with $r=s$. In a horizon-crossing chart this can occur along a level set while $r$ varies; the hypothesis excludes such points from the open set under consideration, not only a degenerate chart with constant $r$.

- **Sign of $s$.** Nothing in this item fixes the sign of the constant $s$: $s=0$ gives $z=1$ and the flat warped form, and the proof uses $1-z=s/r$ only through the smoothness of $r(1-z)$. The positivity of a mass parameter requires separate physical hypotheses or regular-center conditions.
