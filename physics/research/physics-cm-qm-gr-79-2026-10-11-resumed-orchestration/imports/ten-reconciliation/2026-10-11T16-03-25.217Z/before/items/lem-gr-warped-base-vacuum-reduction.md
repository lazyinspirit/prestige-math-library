---
id: lem-gr-warped-base-vacuum-reduction
kind: lemma
title: "Two-dimensional base identities for the warped spherical metric: pure-trace Ricci, the vacuum reduction and the extra Killing field"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-gr-warped-spherical-christoffel-and-ricci, def-gr-curvature-tensor-and-derived-tensors, def-gr-killing-field, thm-gr-killing-and-on-shell-matter-identities, def-derivative, thm-chain-rule, thm-algebra-of-derivatives, def-invertible-matrix-and-general-linear-group, def-countable-choice, def-rational-power, def-interval, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  lem-gr-warped-spherical-christoffel-and-ricci: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-killing-field: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  def-derivative: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  def-countable-choice: mathematical-premise
  def-rational-power: mathematical-premise
  def-interval: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
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
smooth symmetric matrix of functions on $V$ with $\Delta_q:=\det(q_{AB})<0$
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

$$\varepsilon_{AB}:=\sqrt{-\Delta_q}\,\eta_{AB},\qquad \eta_{01}:=1,\quad\eta_{10}:=-1,\quad\eta_{00}:=\eta_{11}:=0,$$

and the **volume-form field** by

$$K_A:=\sum_B\varepsilon_{AB}\,\partial^Br,\qquad \partial^Br:=\sum_Cq^{BC}\partial_Cr,\qquad K^A:=\sum_Bq^{AB}K_B .$$

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
is a Killing field of $q$ in the sense of [[def-gr-killing-field]]), and the
fields $K$ and $\nabla r$ are pointwise linearly independent: the equalities
$\sum_A K^A\partial_Ar=0$, $\sum_{A,B}K^Aq_{AB}K^B=-z$ and
$\sum_{A,B}\partial_Ar\,q^{AB}\partial_Br=z\ne0$ show that neither field
vanishes and that the two are not proportional.

**(e) Explicit components of the Killing field.** With
$\lambda:=\sqrt{-\Delta_q}>0$ one has $K^0=-\dfrac{\partial_1r}{\lambda}$ and
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

[L2] For an invertible $2\times2$ matrix $q$ with inverse $q^{-1}$, Cramer's rule gives $q^{00}=q_{11}/\Delta_q$, $q^{11}=q_{00}/\Delta_q$ and $q^{01}=q^{10}=-q_{01}/\Delta_q$, and $q^{00}q^{11}-(q^{01})^2=1/\Delta_q$ and $\Delta_q<0$ ([[def-invertible-matrix-and-general-linear-group]], algebra).

[L3] The exterior derivative of a smooth function is the covector of its partial derivatives; the chain, product and quotient rules hold, and a smooth function on a connected open set with all partial derivatives zero is constant ([[def-derivative]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-interval]]).

[L4] A smooth field $\xi$ is a Killing field of the base metric precisely when $\nabla_A\xi_B+\nabla_B\xi_A=0$, where $\xi_B=q_{BC}\xi^C$ ([[def-gr-killing-field]], [[thm-gr-killing-and-on-shell-matter-identities]] clause (a)).

[L5] The square root $\sqrt{-\Delta_q}>0$ is smooth because $\Delta_q<0$ and $\Delta_q$ is smooth, and $\partial_C\log(-\Delta_q)=\sum_{A,B}q^{AB}\partial_Cq_{AB}=2\sum_D\Gamma^D{}_{CD}$ ([[def-rational-power]], [[thm-chain-rule]], [[def-derivative]], [[def-countable-choice]]).

## Proof

**Proof technique:** compute the lowered curvature formula and its pair antisymmetries, derive the two-dimensional pure-trace identity from them, reduce the vacuum equations to the Hessian identity, differentiate $z$, and verify the Killing and component claims for the volume-form field.

1.1 (Lowered curvature formula and pair antisymmetries.) Define the lowered symbols $\Lambda_{ADB}:=\sum_Eq_{AE}\Gamma^E{}_{DB}$, symmetric in $D,B$ because $\Gamma^E{}_{DB}=\Gamma^E{}_{BD}$. Expanding $\partial_C\Lambda_{ADB}$ by the product rule and substituting the compatibility identity of [L1] into the terms containing $\partial_Cq_{AE}$ gives $\sum_Eq_{AE}\partial_C\Gamma^E{}_{DB}=\partial_C\Lambda_{ADB}-\sum_F\Gamma^F{}_{CA}\Lambda_{FDB}-\sum_F\Gamma^F{}_{CE}\Lambda_{AFD}$. Substituting this and the same identity with $C,D$ exchanged into the definition of $R_{ABCD}$ and cancelling the equal terms $\sum_F\Gamma^F{}_{CE}\Lambda_{AFD}=\sum_F\Gamma^F{}_{CE}\Lambda_{ADF}$ with the corresponding terms of $R^E{}_{BCD}$ yields the lowered formula $R_{ABCD}=\partial_C\Lambda_{ADB}-\partial_D\Lambda_{ACB}-\sum_F\Gamma^F{}_{CA}\Lambda_{FDB}+\sum_F\Gamma^F{}_{DA}\Lambda_{FCB}$. Antisymmetry in $C,D$ is immediate from the definition of $R^A{}_{BCD}$ and is preserved by lowering. For antisymmetry in $A,B$, add the formula for $R_{BACD}$: the derivative terms combine to $\partial_C(\Lambda_{ADB}+\Lambda_{BDA})-\partial_D(\Lambda_{ACB}+\Lambda_{BCA})$, and $\Lambda_{ADB}+\Lambda_{BDA}=\partial_Dq_{AB}$ by the definition of $\Gamma$, so these cancel because mixed partial derivatives commute; the quadratic part is $\sum_{F,G}q^{FG}\Theta_{FG}$ with $\Theta_{FG}:=-\Lambda_{GCA}\Lambda_{FDB}+\Lambda_{GDA}\Lambda_{FCB}-\Lambda_{GCB}\Lambda_{FDA}+\Lambda_{GDB}\Lambda_{FCA}$, using $\Gamma^F{}_{CA}=\sum_Gq^{FG}\Lambda_{GCA}$, and $\Theta_{GF}=-\Theta_{FG}$ by the symmetry of $\Lambda$ in its last two indices, so it vanishes against the symmetric $q^{FG}$. Hence $R_{ABCD}+R_{BACD}=0$. [L1, L2, L3, algebra]

1.2 (The base volume form is parallel.) With $\varepsilon_{AB}=\sqrt{-\Delta_q}\,\eta_{AB}$ and $\lambda:=\sqrt{-\Delta_q}>0$, [L5] gives $\partial_C\lambda=\lambda\sum_D\Gamma^D{}_{CD}$. Therefore $\partial_C\varepsilon_{AB}-\sum_D\Gamma^D{}_{CA}\varepsilon_{DB}-\sum_D\Gamma^D{}_{CB}\varepsilon_{AD}=\lambda\eta_{AB}\sum_D\Gamma^D{}_{CD}-\lambda\sum_D(\Gamma^D{}_{CA}\eta_{DB}+\Gamma^D{}_{CB}\eta_{AD})$, and the bracket vanishes because $\eta_{AB}\sum_D\Gamma^D{}_{CD}=\Gamma^0{}_{C0}\eta_{AB}+\Gamma^1{}_{C1}\eta_{AB}$ equals $\Gamma^0{}_{CA}\eta_{0B}+\Gamma^1{}_{CA}\eta_{1B}+\Gamma^0{}_{CB}\eta_{A\,0}+\Gamma^1{}_{CB}\eta_{A\,1}$ after the relabellings $\eta_{0B}=-\eta_{B0}$, $\eta_{1B}=-\eta_{B1}$ and the symmetry of $\Gamma$; hence $\nabla_C\varepsilon_{AB}=0$. [L1, L5, algebra]

2.1 (Pure trace.) By step 1.1 the only possibly nonzero lowered components are $R_{0101}$, $R_{0110}=-R_{0101}$, $R_{1001}=-R_{0101}$ and $R_{1010}=R_{0101}$; write $\rho:=R_{0101}$. In the sums $\operatorname{Ric}(q)_{BD}=\sum_{A,C}q^{AC}R_{ABCD}$ every term has an index repeated inside a pair except those with $\{A,B\}=\{C,D\}=\{0,1\}$, so $\operatorname{Ric}(q)_{00}=q^{11}R_{1010}=q^{11}\rho$, $\operatorname{Ric}(q)_{11}=q^{00}R_{0101}=q^{00}\rho$ and $\operatorname{Ric}(q)_{01}=\operatorname{Ric}(q)_{10}=q^{10}R_{1001}=-q^{01}\rho$. Cramer's rule [L2] gives $q^{00}q^{11}-(q^{01})^2=1/\Delta_q$, hence $S_q=q^{00}\operatorname{Ric}(q)_{00}+2q^{01}\operatorname{Ric}(q)_{01}+q^{11}\operatorname{Ric}(q)_{11}=\rho(2q^{00}q^{11}-2(q^{01})^2)=2\rho/\Delta_q$. Therefore $\tfrac12S_q\,q_{00}=\rho q_{00}/\Delta_q=\rho q^{11}=\operatorname{Ric}(q)_{00}$ by [L2], $\tfrac12S_q\,q_{11}=\rho q_{11}/\Delta_q=\rho q^{00}=\operatorname{Ric}(q)_{11}$, and $\tfrac12S_q\,q_{01}=\rho q_{01}/\Delta_q=-\rho q^{01}=\operatorname{Ric}(q)_{01}$; this proves (a). [step 1.1, L2, algebra]

3.1 (Hessian reduction.) Substituting $\operatorname{Ric}(q)=\tfrac12S_q\,q$ of step 2.1 into the first warped vacuum equation gives $\operatorname{Hess}_{AB}r=\tfrac{rS_q}{4}q_{AB}$; tracing with $q^{AB}$ and using symmetry gives $\Delta_qr=\tfrac{rS_q}{4}\cdot2=\tfrac{rS_q}{2}$, hence $S_q=2\Delta_qr/r$ and $\operatorname{Hess}_{AB}r=\tfrac12\Delta_qr\,q_{AB}$. The second warped vacuum equation gives $r\Delta_qr=1-z$ and hence $\Delta_qr=(1-z)/r$ and $S_q=2(1-z)/r^2$. This proves (b). [step 2.1, given, algebra]

4.1 (Derivative of $z$.) Differentiating $z=\sum_{A,B}q^{AB}\partial_Ar\,\partial_Br$ gives $\partial_Cz=\sum_{A,B}\partial_Cq^{AB}\partial_Ar\partial_Br+2\sum_{A,B}q^{AB}\partial_Ar\,\partial_C\partial_Br$. By [L2] and the compatibility identity of [L1], $\sum_{A,B}\partial_Cq^{AB}\partial_Ar\partial_Br=-\sum_{A,B,D}\Gamma^B{}_{CD}q^{AD}\partial_Ar\partial_Br-\sum_{A,B,D}\Gamma^A{}_{CD}q^{BD}\partial_Ar\partial_Br$, and after the relabelling $(A,B,D)\mapsto(B,A,D)$ in the first sum the two sums are equal, so this group equals $-2\sum_{A,B}q^{AB}\partial_Ar\sum_D\Gamma^D{}_{CB}\partial_Dr$. Adding $2\sum_{A,B}q^{AB}\partial_Ar\,\partial_C\partial_Br$ and completing the definition of $\operatorname{Hess}_{CB}r$ gives $\partial_Cz=2\sum_{A,B}q^{AB}\partial_Ar\operatorname{Hess}_{CB}r$. By step 3.1, $\operatorname{Hess}_{CB}r=\tfrac12\Delta_qr\,q_{CB}$, so $\partial_Cz=\Delta_qr\sum_{A,B}q^{AB}q_{CB}\partial_Ar=\Delta_qr\,\partial_Cr=\tfrac{1-z}{r}\partial_Cr$. Hence $\partial_C(r(1-z))=(1-z)\partial_Cr-r\partial_Cz=0$ for $C=0,1$; since $V$ is connected and open and $r(1-z)$ is smooth, [L3] makes it constant, and writing this constant as $s$ gives $z=1-s/r$ because $r>0$. This proves (c). [step 3.1, L1, L3, algebra]

4.2 (The Killing field.) By step 1.2, $\nabla_C\varepsilon_{AB}=0$, so $\nabla_CK_A=\sum_B\varepsilon_{AB}q^{BD}\operatorname{Hess}_{CD}r$; with $\operatorname{Hess}=\tfrac12\Delta_qr\,q$ of step 3.1 this is $\tfrac12\Delta_qr\,\varepsilon_{AC}$, and adding $\nabla_AK_C=\tfrac12\Delta_qr\,\varepsilon_{CA}$ gives zero by antisymmetry of $\varepsilon$. Thus $K$ is a Killing field in the sense of [L4]. Next $K(r)=\sum_{A,B}\varepsilon_{AB}\partial^Br\,\partial_Ar=0$ because $\varepsilon$ is antisymmetric and the product $\partial^Br\,\partial_Ar$ is symmetric in $A,B$; $K\neq0$ because $q(K,K)=-z\ne0$; and the components $K^0=-\partial_1r/\lambda$, $K^1=\partial_0r/\lambda$ follow from $K_A=\sqrt{-\Delta_q}\,\eta_{AB}\partial^Br$, Cramer's rule [L2] and $\lambda^2=-\Delta_q$, and give $\sum_A\partial_Ar\,K^A=0$ and $q(K,K)=\lambda^{-2}(q_{00}(\partial_1r)^2-2q_{01}\partial_0r\partial_1r+q_{11}(\partial_0r)^2)=\lambda^{-2}\Delta_qz=-z$. Since $z\ne0$, also $\nabla r\ne0$; a linear relation $aK+b\nabla r=0$ would give $0=q(K,aK+b\nabla r)=a(-z)$ and $0=q(\nabla r,aK+b\nabla r)=bz$, hence $a=b=0$. This proves (d) and (e). [step 1.2, step 3.1, L2, L4, algebra]

5.1 (Conclusion.) Step 1.1 supplies the pair antisymmetries, step 2.1 the pure trace (a), step 3.1 the reduction (b), step 4.1 the constancy (c), and step 4.2 the Killing field with its properties (d)-(e); clause (f) records the exact hypotheses, in particular that only the two displayed components of the four-dimensional vacuum equations, the positivity of $r$ and $z\ne0$ were used, and that the constant $s$ is produced on the connected set $V$. [step 1.1, step 2.1, step 3.1, step 4.1, step 4.2, given] ∎

## Remarks

- **The role of $z\ne0$.** The hypothesis makes $\nabla r$ nowhere null, so that $K$ and $\nabla r$ are independent by step 4.2 and the coordinate construction of the Birkhoff theorem of this page can be carried out; the two warped vacuum equations together with $r>0$ force $z=1-s/r$, so the hypothesis fails only in a degenerate chart with $r$ constantly equal to a value $s$ of the mass parameter.

- **Sign of $s$.** Nothing in this item fixes the sign of the constant $s$: $s=0$ gives $z=1$ and the flat warped form, and the proof uses $1-z=s/r$ only through the smoothness of $r(1-z)$. The positivity of a mass parameter requires separate physical hypotheses or regular-center conditions.
