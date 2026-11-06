---
id: thm-cft-2d-stress-tensor-ward-identity
kind: theorem
title: Stress-tensor Ward identity for primary insertions
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
deps:
  - def-cft-2d-stress-tensor-data
  - def-cft-2d-primary-field
  - cor-residue-theorem-circle
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-2d-stress-tensor-data: mathematical-premise
  def-cft-2d-primary-field: mathematical-premise
  cor-residue-theorem-circle: mathematical-premise
axiom_use: "No choice principle is used by the contour or residue argument. The primary-field dependency carries its full-AC compact-genus convention transitively, but the proof uses only the local coordinate and field interface."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988)"
      url: https://arxiv.org/pdf/hep-th/9108028
      locator: "§2.4, printed pp. 24–25 (PDF pp. 13–14), the contour-deformation derivation of Eq. (2.22)."
    - title: "David Tong, String Theory, University of Cambridge Part III lecture notes (2009)"
      url: https://www.damtp.cam.ac.uk/user/tong/string/string.pdf
      locator: "§§4.2.2–4.2.3, printed pp. 70–75 (PDF pp. 78–83), the contour Ward identity and primary OPE."
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb C$ be the open coordinate image of the plane chart carrying holomorphic stress-tensor data, and let $w_1,\ldots,w_n\in U$ be pairwise distinct insertion labels for primary field data $\mathcal O_i$ of weights $(h_i,\bar h_i)$ on their common invariant domain. Write $\operatorname{Conf}_n(U)=\{(w_1,\ldots,w_n)\in U^n:w_i\ne w_j\text{ for }i\ne j\}$. The model's correlation prescription supplies a scalar function $G:\operatorname{Conf}_n(U)\to\mathbb C$ and, for each fixed insertion configuration, a single-valued scalar function $H_{\mathbf w}:\mathbb C\setminus\{w_1,\ldots,w_n\}\to\mathbb C$ that agrees on $U\setminus\{w_i\}$ with the one-stress-insertion correlation representative and is its specified analytic continuation. In this theorem, point-coordinate notation denotes these scalar representatives; it does not assert point evaluation of the weak fields as operators. Write $w_i=x_i+iy_i$ and use the Wirtinger derivatives $\partial_{w_i}=\tfrac12(\partial_{x_i}-i\partial_{y_i})$ and $\partial_{\bar w_i}=\tfrac12(\partial_{x_i}+i\partial_{y_i})$. Assume that $G$ is real $C^1$ on $\operatorname{Conf}_n(U)$. The contour integrals below use positive orientation in their displayed complex variables. Assume that $H_{\mathbf w}$ is holomorphic on $\mathbb C\setminus\{w_1,\ldots,w_n\}$ and meromorphic at each $w_i$ with local expansion

$$
H_{\mathbf w}(\zeta)=\frac{h_iG}{(\zeta-w_i)^2}+\frac{\partial_{w_i}G}{\zeta-w_i}+R_i(\zeta),
$$

where $R_i$ is holomorphic near $w_i$. Assume also that no contact term is added to the prescribed scalar contour during deformation and that

$$
\lim_{R\to\infty}\frac{1}{2\pi i}\oint_{|\zeta|=R}\frac{H_{\mathbf w}(\zeta)}{\zeta-z}\,d\zeta=0
$$

for each $z\notin\{w_1,\ldots,w_n\}$. Then, as an identity of scalar correlation representatives,

$$
H_{\mathbf w}(z)=\sum_{i=1}^n\left(\frac{h_i}{(z-w_i)^2}+\frac{1}{z-w_i}\partial_{w_i}\right)G(w_1,\ldots,w_n;\bar w_1,\ldots,\bar w_n).
$$

If the stress data also include a barred sector, $G$ is differentiable in each $\bar w_i$, and the prescribed single-valued barred scalar representative $\bar H_{\mathbf w}:\mathbb C\setminus\{\bar w_1,\ldots,\bar w_n\}\to\mathbb C$ agrees on $\bar U\setminus\{\bar w_i\}$, where $\bar U=\{\bar z:z\in U\}$, with the barred one-stress-insertion correlation representative and is its specified analytic continuation; it is holomorphic in its independent barred argument on $\mathbb C\setminus\{\bar w_1,\ldots,\bar w_n\}$ and meromorphic at the insertions with local expansions

$$
\bar H_{\mathbf w}(\bar\zeta)=\frac{\bar h_iG}{(\bar\zeta-\bar w_i)^2}+\frac{\partial_{\bar w_i}G}{\bar\zeta-\bar w_i}+\bar R_i(\bar\zeta),\qquad \bar\zeta\to\bar w_i,
$$

where $\bar R_i$ is holomorphic in the independent coordinate $\bar\zeta$ near $\bar w_i$. Here and throughout the barred conclusion, $\xi=\bar\zeta$ is an independent complex integration variable: $\xi\mapsto\bar H_{\mathbf w}(\xi)$ is holomorphic away from $\bar w_i$ and meromorphic at them. The term “antiholomorphic” refers to the function $\zeta\mapsto\bar H_{\mathbf w}(\overline\zeta)$ on the original plane, not to $\xi\mapsto\bar H_{\mathbf w}(\xi)$. Assume there are no barred contact terms during deformation and

$$
\lim_{R\to\infty}\frac{1}{2\pi i}\oint_{|\bar\zeta|=R}\frac{\bar H_{\mathbf w}(\bar\zeta)}{\bar\zeta-\bar z}\,d\bar\zeta=0
$$

for every $\bar z\notin\{\bar w_1,\ldots,\bar w_n\}$, then, for every such $\bar z$, the separate antiholomorphic identity holds with $H_{\mathbf w},T,h_i,z,w_i$ replaced by $\bar H_{\mathbf w},\bar T,\bar h_i,\bar z,\bar w_i$ and $\partial_{w_i}$ replaced by $\partial_{\bar w_i}$. These are conditional model deductions; they assert neither existence of stress data in every CFT nor an empirical fact. Outside $U$, the identity concerns only the stipulated analytic continuation.

## Facts & Assumptions

**Given:** Pairwise distinct $w_i$, the stress and primary data, a common domain and scalar correlation prescription, the stated local singular parts, holomorphy away from the insertions, and the vanishing outer contour condition.

[F1] [[def-cft-2d-stress-tensor-data]]: Stress data include the holomorphic stress/primary OPE principal part $h_i\mathcal O_i/(z-w_i)^2+\partial_{w_i}\mathcal O_i/(z-w_i)$, weak field components, a common domain, and a declared radial-product prescription.

[F2] [[def-cft-2d-primary-field]]: A local primary field has explicitly specified weights and coordinate coefficients in the passive convention $w=f(z)$; the weak field is defined through continuous compactly supported test-function coefficients, not pointwise bounded operators.

[F3] [[cor-residue-theorem-circle]]: If $f$ is meromorphic on a neighbourhood of a closed disc with no pole on its positively oriented boundary circle, then its contour integral is $2\pi i$ times the sum of the residues of the poles inside.

[A1] The model supplies the scalar correlation representatives $G$ and $H_{\mathbf w}$, with the stated holomorphy, meromorphic local expansions, and no extra contact terms in the contour prescription.

[A2] For each fixed $z\notin\{w_i\}$, the outer contour integral of $H_{\mathbf w}(\zeta)/(\zeta-z)$ tends to zero as specified in the Statement.

[A3] For the separate barred conclusion, $G$ is differentiable in each $\bar w_i$; $\xi\mapsto\bar H_{\mathbf w}(\xi)$ is holomorphic on $\mathbb C\setminus\{\bar w_i\}$, has the displayed meromorphic local expansions, has no other singularities, and has no barred contact terms during deformation; its outer contour limit is zero for each allowed $\bar z$. Positive orientation is in the independent $\xi$-plane.

## Proof
**Given:** The assumptions above and the scalar correlation and contour data of [F1] and [A1].

1.1 Fix $z\notin\{w_i\}$ and set $Q(\zeta)=H_{\mathbf w}(\zeta)/(\zeta-z)$. By [A1], $Q$ is meromorphic on the plane with possible poles only at $z,w_1,\ldots,w_n$. For every $R>\max(|z|,|w_1|,\ldots,|w_n|)$, no possible pole lies on $|\zeta|=R$; [F3] therefore identifies the normalized integral on that circle with the sum of the residues at these points. By [A2] this integral tends to zero as $R\to\infty$, while the finite residue sum is independent of $R$, so the total residue is zero. [given, F3, A1, A2, algebra]

1.2 The residue at $\zeta=z$ is $H_{\mathbf w}(z)$. At $\zeta=w_i$, write $\epsilon=\zeta-w_i$ and use [A1]: $H_{\mathbf w}(\zeta)=h_iG\epsilon^{-2}+\partial_{w_i}G\epsilon^{-1}+R_i(\zeta)$, while $(\zeta-z)^{-1}=(w_i-z)^{-1}-\epsilon(w_i-z)^{-2}+O(\epsilon^2)$. Since $R_i$ is holomorphic, the coefficient of $\epsilon^{-1}$ is $-h_iG/(z-w_i)^2-\partial_{w_i}G/(z-w_i)$. [A1, algebra]

2.1 Summing the residues from steps 1.1–1.2 gives $0=H_{\mathbf w}(z)-\sum_i\bigl(h_iG/(z-w_i)^2+\partial_{w_i}G/(z-w_i)\bigr)$. Rearranging is the displayed holomorphic Ward identity. [step 1.1, step 1.2, algebra]

3.1 For the barred data, fix $\bar z\notin\{\bar w_i\}$ and put $\bar Q(\xi)=\bar H_{\mathbf w}(\xi)/(\xi-\bar z)$ in the independent coordinate $\xi=\bar\zeta$. By [A3], this is meromorphic near each closed disc with all possible poles strictly inside every sufficiently large circle. Apply [F3] on positively oriented circles in the $\xi$-plane; the barred outer-limit condition makes the total residue zero. The residue at $\xi=\bar w_i$ is $-\bar h_iG/(\bar z-\bar w_i)^2-\partial_{\bar w_i}G/(\bar z-\bar w_i)$, while the residue at $\xi=\bar z$ is $\bar H_{\mathbf w}(\bar z)$. Rearranging gives the barred identity. [A3, F3, algebra] ∎
## Remarks

The picture is schematic: it shows an outer circle enclosing the possible poles and small positively oriented circles around those poles. The circle residue theorem and the stated boundary limit carry the proof independently of the drawing.

```tikz
\begin{tikzpicture}[scale=0.85]
  \draw[thick] (0,0) circle (3);
  \draw[->,thick] (3,0) arc (0:32:3);
  \node at (0,3.35) {$\Gamma_R$};
  \draw[thick] (-1.2,0.6) circle (0.55);
  \draw[->,thick] (-0.65,0.6) arc (0:65:0.55);
  \draw[thick] (0.4,-0.5) circle (0.55);
  \draw[->,thick] (0.95,-0.5) arc (0:65:0.55);
  \draw[thick] (1.4,0.8) circle (0.55);
  \draw[->,thick] (1.95,0.8) arc (0:65:0.55);
  \fill (-1.2,0.6) circle (1.5pt);
  \fill (0.4,-0.5) circle (1.5pt);
  \fill (1.4,0.8) circle (1.5pt);
  \node at (-1.2,1.35) {$w_1$};
  \node at (0.4,-1.25) {$w_2$};
  \node at (1.4,1.55) {$z$};
  \node at (0,-2.55) {positive local contours};
\end{tikzpicture}
```

The picture is schematic and assumes all marked points are distinct and inside $\Gamma_R$. Every arrow indicates the positive (counterclockwise) orientation used for the residue contours.
