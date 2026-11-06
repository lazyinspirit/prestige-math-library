---
id: post-f4-type-iib-elliptic-fibration-dictionary
kind: postulate
title: "Type-IIB axiodilaton and elliptic-fiber dictionary"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: physics
library: physics
category: string-theory
deps:
  - def-f4-elliptic-fibration-with-section
  - def-f4-weierstrass-model-on-a-line-bundle
  - def-gts-compact-calabiyau-manifold-conventions
dependency_roles:
  def-f4-elliptic-fibration-with-section: formulation-prerequisite
  def-f4-weierstrass-model-on-a-line-bundle: formulation-prerequisite
  def-gts-compact-calabiyau-manifold-conventions: formulation-prerequisite
physical_scope: "Adopted geometric, large-radius F-theory dictionary for a type-IIB compactification on a smooth connected complex algebraic threefold base with a projective elliptically fibered Calabi–Yau fourfold in a regime where the use of the geometric description and control of string-loop and alpha-prime corrections are stated. The elliptic fiber is auxiliary duality data, not two ordinary spacetime dimensions. This postulate constructs no 12-dimensional theory, supplies no measured axiodilaton, and does not establish a global compactification or a resolution of a singular Weierstrass model."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Cumrun Vafa, Evidence for F-Theory, arXiv:hep-th/9602022v1"
      url: "https://arxiv.org/pdf/hep-th/9602022v1"
      locator: "§3, printed pp. 7–10, on the type-IIB axiodilaton and auxiliary elliptic-torus interpretation; §4 opening, pp. 10–11, on the stated M/F relation. The source marks aspects conjectural; no constructed 12-dimensional quantum theory is inferred."
    - title: "David R. Morrison and Cumrun Vafa, Compactifications of F-Theory on Calabi–Yau Threefolds – I, arXiv:hep-th/9602114v3"
      url: "https://arxiv.org/pdf/hep-th/9602114v3"
      locator: "§3.1, printed pp. 6–10, elliptic fibration, section, Weierstrass description and the separately interpreted physical dictionary."
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§§2.1–2.2, printed pp. 3–11, elliptic fibers, axiodilaton and Weierstrass data; §2.3, pp. 12–13, F/M-theory limit. The printed Eq. (2.34) has an eightfold j-normalization discrepancy relative to its following standard q-expansion and is not used for the coefficient."
    - title: "Ashoke Sen, Orientifold Limit of F-theory Vacua, arXiv:hep-th/9702165v2"
      url: "https://arxiv.org/pdf/hep-th/9702165v2"
      locator: "§1, printed pp. 1–4, especially equations (4)–(8), (18)–(20), source normalization of j and the formal weak-coupling orientifold interpretation."
    - title: "David Eisenbud and Joe Harris, The Geometry of Schemes, Graduate Texts in Mathematics 197, 2000"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/eisenbudharris.pdf"
      locator: "Chapter IV, §2.4, printed pp. 184–185: the standard elliptic-curve j formula with j(i)=1728 and classification of complex elliptic curves by j."
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step4-independent-batch-reader; delegated by /root under owner authorization
---

## Postulate

Adopt the following geometric dictionary for a type-IIB compactification model. Let $B_3$ be a smooth connected complex algebraic threefold representing the six real internal dimensions, and let $Y_4$ be the corresponding projective elliptically fibered Calabi–Yau fourfold input. Here the broad Calabi–Yau convention is the one in [[def-gts-compact-calabiyau-manifold-conventions]]: connected, compact, Kähler, and with holomorphically trivial canonical bundle. Let $\pi:Y_4\to B_3$ be the proper flat genus-one fibration with a specified regular section as in [[def-f4-elliptic-fibration-with-section]]. The adopted regime is geometric and long-wavelength: $\alpha'$ has dimensions of length squared, its square-root string scale is small relative to the curvature and variation scales used in the model, and string-loop corrections are controlled or explicitly retained. No numerical bound is asserted. This physical input does not assert that a singular Weierstrass presentation is smooth or that a global resolution exists.

On a local patch where the holomorphic line bundle $L\to B_3$ in [[def-f4-weierstrass-model-on-a-line-bundle]] is trivialized, use the affine chart $z=1$ and write the model as $y^2=x^3+fx+g$, where $f\in H^0(B_3,L^4)$ and $g\in H^0(B_3,L^6)$ are represented by holomorphic coefficient functions in the chosen trivialization, and the discriminant section is $\Delta=4f^3+27g^2\in H^0(B_3,L^{12})$. Under a line-bundle change of frame both $f$ and $g$ acquire the same corresponding fourth/sixth-power weights, so the numerator and denominator of $4f^3/\Delta$ have equal weight twelve and their ratio is independent of that local frame. On the smooth-fiber locus $B_3^\circ=B_3\setminus\{\Delta=0\}$, choose a simply connected analytic cover $\{U_i\}$ and, on each $U_i$, locally constant cycles $A_i,B_i$ forming a basis of $H_1(E_b,\mathbb Z)$ with oriented intersection $A_i\cdot B_i=1$, where $E_b=\pi^{-1}(b)$. Shrink each patch to trivialize $L$, and let $\Omega_i$ be the relative holomorphic one-form whose restriction to the affine smooth fiber is $dx/y$ and which extends across its point at infinity. Define the **period ratio** by
$$\tau_i(b)=\frac{\int_{B_i(b)}\Omega_i|_{E_b}}{\int_{A_i(b)}\Omega_i|_{E_b}}.$$
The denominator is nonzero and this ratio is holomorphic with values in $\mathbb H=\{z\in\mathbb C:\operatorname{Im}z>0\}$, using the complex orientation. Rescaling $\Omega_i$ by a nowhere-zero holomorphic function cancels between the two periods. Use the ordered cycle column $(B_i,A_i)^T$: on overlaps $(B_i,A_i)^T=M_{ij}(B_j,A_j)^T$. Thus the same matrix gives the fractional-linear transformation below, even if the two local forms differ by a nonzero factor. In this local duality frame define the dimensionless real fields
$$C_{0,i}=\operatorname{Re}\tau_i,\qquad \phi_i=-\log(\operatorname{Im}\tau_i),\qquad g_{s,i}=e^{\phi_i}>0.$$
Thus $C_{0,i}$ (the Ramond–Ramond axion), $\phi_i$ (the dilaton), and $g_{s,i}$ are smooth real functions on $U_i$; $\tau_i=C_{0,i}+i e^{-\phi_i}$ is dimensionless and holomorphic. These fields are not asserted to extend across $\Delta=0$. On each connected overlap a locally constant basis-change matrix $M_{ij}=\left(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right)\in\mathrm{SL}(2,\mathbb Z)$ acts by the convention
$$\tau_i=\frac{a\tau_j+b}{c\tau_j+d},\qquad C_{0,i}=\operatorname{Re}\frac{a\tau_j+b}{c\tau_j+d},\qquad e^{-\phi_i}=\frac{e^{-\phi_j}}{|c\tau_j+d|^2}.$$
The matrices satisfy the local-system cocycle convention $M_{ij}M_{jk}=M_{ik}$. In particular $\phi_i=\phi_j+2\log|c\tau_j+d|$; the axion and dilaton need not patch separately as scalar functions on $B_3^\circ$. The central matrix $-I$ acts trivially on $\tau$ but is retained in the homology local system. In the adopted dictionary, $\tau$ is the complex structure modulus of the elliptic fiber and

$$j_{\mathrm{std}}(\tau)=1728\,\frac{4f^3}{4f^3+27g^2}.$$

The standard invariant is normalized by $q=e^{2\pi i\tau}$ and $j_{\mathrm{std}}(\tau)=q^{-1}+744+O(q)$ near the cusp; in particular $j_{\mathrm{std}}(i)=1728$. A loop in $B_3^\circ$ acts on the fiber homology lattice $H_1(E_b,\mathbb Z)$ by a matrix in $\mathrm{SL}(2,\mathbb Z)$ preserving its oriented intersection pairing. With the conventional modular action, $\tau$ changes by $\tau\mapsto(a\tau+b)/(c\tau+d)$ for the corresponding matrix $\left(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right)$. Thus $\tau$ is generally a local lift with duality monodromy, not a globally single-valued scalar.

The fiber is auxiliary geometric data encoding the axiodilaton and its duality. Its extra complex dimension is not an asserted pair of ordinary spacetime dimensions. This is an adopted physical dictionary in the stated geometric regime, not a mathematical consequence of the fibration definition and not evidence for a constructed nonperturbative or 12-dimensional spacetime theory.

## Postulate references

[[def-f4-elliptic-fibration-with-section]]

[[def-f4-weierstrass-model-on-a-line-bundle]]

[[def-gts-compact-calabiyau-manifold-conventions]]
