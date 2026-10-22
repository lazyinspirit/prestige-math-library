---
id: prop-emg-fx-rn-isotropic-seed
kind: proposition
title: RN conformal data on a punctured exterior
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: direct
deps:
  - def-emg-fx-conformal-seed
  - lem-emg-fx-conformal-constraints
  - def-emg-xs-rn-data
dependency_roles:
  def-emg-fx-conformal-seed: mathematical-premise
  lem-emg-fx-conformal-constraints: mathematical-premise
  def-emg-xs-rn-data: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. I. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2 (2009)"
      url: "https://arxiv.org/pdf/0907.1151"
      locator: "Section III.B, equations (3.15)-(3.16), gives the single Reissner-Nordström isotropic conformal factor and radial electric field; the constraint verification here is direct."
    - title: "Eric Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, Lecture Notes in Physics 846 (2012), author preprint arXiv:gr-qc/0703035v1"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
      locator: "Section 6.2.3, equations (6.22)-(6.24), gives the conformally flat spatial metric and isotropic-coordinate comparison; the charged calculation here is direct."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $m>0$ be a geometric mass length, let $q\in\mathbb R$ be a signed geometric electric-charge length, and define

$$r_*:=\max\left\{0,\frac{|q|-m}{2}\right\},\qquad \mathcal D_{m,q}:=(r_*,\infty),\qquad \psi(r):=\sqrt{\left(1+\frac{m}{2r}\right)^2-\frac{q^2}{4r^2}}\quad(r\in\mathcal D_{m,q}),$$

where the square root is positive. On $\Sigma=\mathcal D_{m,q}\times S^2$, use the Euclidean seed metric $\bar h=dr^2+r^2\gamma_{S^2}$, with $\gamma_{S^2}$ the unit round metric, and set

$$\bar E=q\,r^{-2}\partial_r,\qquad \bar B=0,\qquad \bar A=0,\qquad \tau=0,\qquad \Lambda=0.$$

With $h=\psi^4\bar h$, $K=0$, $E=\psi^{-6}\bar E$, and $B=0$, the exact transformed equations are

$$\bar D_i\bar E^i=0,\qquad \bar D_i\bar B^i=0,\qquad -8\Delta_{\bar h}\psi-2|\bar E|_{\bar h}^2\psi^{-3}=0,$$

and the separate momentum equation is $0=-2\psi^{-6}(\bar E\times_{\bar h}\bar B)_i$. They are satisfied by the displayed fields, so the corresponding SI-convention data satisfy the original constraints. The puncture $r=0$ is omitted from $\Sigma$, so the assertion concerns smooth equations on this domain and introduces no delta-function source there.

For $m>|q|$, $\mathcal D_{m,q}=(0,\infty)$. The centered coordinate sphere $S_r=\{r\}\times S^2$ has area $4\pi R_{\rm areal}(r)^2$, where

$$R_{\rm areal}(r):=r\psi(r)^2=r+m+\frac{m^2-q^2}{4r}.$$

On each $S_r$, the outward unit normal is $\nu:=\psi^{-2}\partial_r$. Define its mean-curvature scalar by $H:=\operatorname{div}_h\nu$; by convention here, $S_r$ is minimal exactly when $H(r)=0$. Its mean curvature vanishes exactly at $r_0=\frac12\sqrt{m^2-q^2}$, where $R_{\rm areal}(r_0)=m+\sqrt{m^2-q^2}$. Both ends are asymptotically Euclidean in the following explicit sense. In the Euclidean seed Cartesian coordinates $x^i=r n^i$ with $n\in S^2$, the $r\to\infty$ end has $h_{ij}=\left(1+2m/r+O(r^{-2})\right)\delta_{ij}$, $\partial_kh_{ij}=O(r^{-2})$, and $\partial_\ell\partial_kh_{ij}=O(r^{-3})$. For the inner end define inverted Cartesian coordinates $\tilde x^i:=(r_0^2/r^2)x^i$, whose radius is $\tilde r:=|\tilde x|=r_0^2/r$; the same metric and derivative falloffs hold as $r\downarrow0$ in these coordinates. On the branch $r>r_0$, put $R:=R_{\rm areal}(r)$. The comparator spatial metric is

$$h_{\rm RN}^{\rm spatial}:=f(R)^{-1}dR\otimes dR+R^2\gamma_{S^2},\qquad f(R):=1-\frac{2m}{R}+\frac{q^2}{R^2},$$

with $R>m+\sqrt{m^2-q^2}$ and hence $f(R)>0$; the spatial metric $h$ agrees with this static Reissner–Nordström exterior metric under the displayed areal-radius coordinate. These statements make no global event-horizon or maximal-extension claim.

## Statement references

[[def-emg-fx-conformal-seed]]

[[lem-emg-fx-conformal-constraints]]

[[def-emg-xs-rn-data]]

## Facts & Assumptions

**Given:** $m>0$, $q\in\mathbb R$, the positive domain $\mathcal D_{m,q}$, the seed metric and fields in the Statement, and the stated conformal constraint identities.

[F1] [[def-emg-fx-conformal-seed]]: $\bar E$ and $\bar B$ are geometric-normalized contravariant fields, $K=(\tau/3)h+\psi^{-2}\bar A$, and $h=\psi^4\bar h$.

[F2] [[lem-emg-fx-conformal-constraints]]: source-free seed divergences and the transformed Hamiltonian equation imply the corresponding SI constraints; the momentum equation is separately satisfied when $K=0$ and $\bar E\times_{\bar h}\bar B=0$.

[F3] [[def-emg-xs-rn-data]]: with mass length $m$, electric length $q$, magnetic length zero, and areal coordinate $R$, the RN metric has radial factor $f(R)^{-1}dR^2$, angular factor $R^2\gamma_{S^2}$, and $f(R)=1-2m/R+q^2/R^2$ where $f(R)\ne0$.

## Proof

1.1 Put $C:=m^2-q^2$ and $w:=\psi^2$. Since $2r+m>0$, the condition $w>0$ is equivalent to $2r+m>|q|$, giving exactly $\mathcal D_{m,q}$. Thus $\psi$ is smooth and positive there. In Euclidean spherical coordinates, $\bar D_i\bar E^i=r^{-2}\partial_r(r^2 q r^{-2})=0$, while $\bar D_i\bar B^i=0$. [given, F1, algebra]

1.2 On this domain $w:=\psi^2=1+m/r+C/(4r^2)$, $w'=-m/r^2-C/(2r^3)$, and $w''=2m/r^3+3C/(2r^4)$. Since $\Delta_{\mathbb R^3}\psi=\psi''+2\psi'/r$, $\psi'/\psi=w'/(2w)$ and $\psi''/\psi=w''/(2w)-(w')^2/(4w^2)$ give $\Delta_{\mathbb R^3}\psi/\psi=(w''/2+w'/r)/w-(w')^2/(4w^2)=(Cw/r^4-(w')^2)/(4w^2)=-q^2/(4r^4w^2)$; here $w''/2+w'/r=C/(4r^4)$ and direct expansion gives $Cw/r^4-(w')^2=-q^2/r^4$. Thus $\Delta_{\mathbb R^3}\psi=-q^2/(4r^4\psi^3)$. With $\bar R=0$, $\bar A=\tau=\Lambda=\bar B=0$, the transformed scalar equation is $-8\Delta\psi-2q^2r^{-4}\psi^{-3}=0$. [given, F1, F2, algebra]

2.1 The seed Gauss constraint holds by step 1.1, and step 1.2 verifies the Hamiltonian equation. The momentum right side vanishes because $\bar B=0$, and its left side vanishes because $K=\tau=0$. The omitted point $r=0$ is not in the manifold, so the smooth divergence calculation on $\mathcal D_{m,q}\times S^2$ makes no distributional assertion at the puncture. [F2, step 1.1, step 1.2, algebra]

2.2 Suppose $m>|q|$, so $C>0$ and $r_0=\sqrt C/2$. Then $R_{\rm areal}=r+m+C/(4r)$, $R'_{\rm areal}=1-C/(4r^2)$, and $R''_{\rm areal}=C/(2r^3)>0$. Hence $R_{\rm areal}$ has its unique minimum on $(0,\infty)$ at $r_0$, with value $m+\sqrt C$. The area formula follows directly from the induced metric on $S_r$, namely $r^2\psi^4\gamma_{S^2}$. [given, step 1.2, algebra]

3.1 The outward unit normal to $S_r$ is $\nu=\psi^{-2}\partial_r$. Its mean curvature, defined as the trace of the second fundamental form, is $H=\operatorname{div}_h\nu=(\sqrt{\det h})^{-1}\partial_r(\sqrt{\det h}\,\psi^{-2})=2R'_{\rm areal}/(\psi^2R_{\rm areal})$. Thus $H(r_0)=0$, and $H$ is nonzero for every other centered coordinate sphere. [F1, step 2.2, algebra]

3.2 Write $r_0^2=C/4$ and $R=R_{\rm areal}(r)$. On $r>r_0$, $R>m+2r_0$, so $f(R)>0$. Direct algebra gives $R^2f(R)=(R-m)^2-C=(r-r_0^2/r)^2$ and $dR/dr=1-r_0^2/r^2=(r-r_0^2/r)/r$. Therefore $f(R)^{-1}(dR/dr)^2=R^2/r^2=\psi^4$, which proves that $h=\psi^4dr^2+R^2\gamma_{S^2}$ equals the radial and angular spatial metric in [F3] on this branch. [F3, step 2.2, algebra]

4.1 As $r\to\infty$, $\psi^4=1+2m/r+O(r^{-2})$; differentiating this explicit rational expression for $\psi^4$ gives first- and second-coordinate-derivative falloffs $O(r^{-2})$ and $O(r^{-3})$. For the inner end put $\tilde r=r_0^2/r$. Then $\psi(r)^2r^2/r_0^2=1+m/\tilde r+r_0^2/\tilde r^2=\psi(\tilde r)^2$ and $dr^2+r^2\gamma_{S^2}=(r^4/r_0^4)(d\tilde r^2+\tilde r^2\gamma_{S^2})$. Hence the inner metric is exactly the same isotropic form in $\tilde r$, and it has the same falloff and derivative estimates. This proves the two stated end descriptions without extending the static areal chart through $f=0$. [F1, step 2.2, algebra] ∎

