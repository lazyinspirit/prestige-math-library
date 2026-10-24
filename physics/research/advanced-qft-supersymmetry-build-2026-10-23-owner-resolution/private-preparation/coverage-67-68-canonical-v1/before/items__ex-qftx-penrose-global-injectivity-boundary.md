---
id: ex-qftx-penrose-global-injectivity-boundary
kind: example
title: Local transforms versus global injectivity
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-coupled-penrose-vanishing-on-the-round-four-sphere-examples
dependency_level: 7
axiom_base: "ZF + full AC inherited from the conditional analytic comparison and fibrewise Hodge theory."
deps:
  - def-qftx-coupled-penrose-incidence-geometry
  - lem-qftx-coupled-penrose-fibre-dolbeault
  - lem-qftx-coupled-penrose-injective-edge
  - thm-qftx-coupled-penrose-vanishing
dependency_roles:
  def-qftx-coupled-penrose-incidence-geometry: mathematical-premise
  lem-qftx-coupled-penrose-fibre-dolbeault: mathematical-premise
  lem-qftx-coupled-penrose-injective-edge: mathematical-premise
  thm-qftx-coupled-penrose-vanishing: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "J. H. Rawnsley, On the Atiyah-Hitchin-Drinfeld-Manin vanishing theorem for cohomology groups of instanton bundles"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf"
      locator: "§§2–3, printed pp. 46–54: globally defined fibre-harmonic class map and its injectivity proof."
    - title: "R. O. Wells, The Conformally Invariant Laplacian and the Instanton Vanishing Theorem"
      url: "https://dokumen.pub/seminar-on-differential-geometry-am-102-volume-102-9781400881918.html"
      locator: "§3, printed pp. 488–494: global Penrose transform framework."
verification:
  precheck: pass
---

## Example

Let $U_N$ and $U_S$ be the two stereographic charts of $S^4$, and let $\xi\in H^1(Z,F\otimes\mathcal O_Z(-2))$ be a global class under the coupled theorem's hypotheses. On each chart compute the fibre-harmonic section from a global closed Dolbeault representative. On $U_N\cap U_S$ the two local sections agree because they are the harmonic projection on the same fibre and are unchanged by replacing the representative by a Dolbeault-exact form. If the glued section is zero, the global class is zero by injectivity. Thus a local contour expression alone establishes neither compatibility on the overlap nor injectivity of the global class map.

## Example references

[[def-qftx-coupled-penrose-incidence-geometry]]

[[lem-qftx-coupled-penrose-fibre-dolbeault]]

[[lem-qftx-coupled-penrose-injective-edge]]

[Rawnsley, §§2–3, pp. 46–54](https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf)

[Wells, §3, pp. 488–494](https://dokumen.pub/seminar-on-differential-geometry-am-102-volume-102-9781400881918.html)

## Facts & Assumptions

**Given:** The two stereographic charts, the global twistor fibration, a global analytic cohomology class, and its global Dolbeault representative.

[A1] The theorem uses the local analytic sheaf/Dolbeault resolution comparison; its holomorphic-bundle and full AC hypotheses are inherited here. [[thm-qftx-coupled-penrose-vanishing]]

[F1] Each base point has one fibre $L_x\cong\mathbb CP^1$ in the fixed global incidence fibration, and the normalized harmonic generator is intrinsic on that fibre. [[def-qftx-coupled-penrose-incidence-geometry]], [[lem-qftx-coupled-penrose-fibre-dolbeault]]

[F2] The fibre-harmonic coefficient is independent of representative and the resulting global map is injective: its zero class has horizontal remainder in $\mathcal O(-1)^{\oplus2}$, which has no holomorphic sections. [[lem-qftx-coupled-penrose-injective-edge]]

## Verification

**Given:** The global class and exact construction in [F1]–[F2].

1.1 For $x\in U_N\cap U_S$, both chart computations restrict the same global closed form to the same fibre $L_x$. They use the same fibre Dolbeault operator and normalized harmonic projection, so both give the same value $s(x)$. If the global representative changes by $\bar\partial_F\beta$, its vertical restriction changes by $\bar\partial_V\beta$; harmonic forms are orthogonal to exact forms, so the harmonic projection is unchanged. Hence the chart sections agree and are independent of the representative, and they glue to a global section on $S^4$. [F1, F2, algebra]

2.1 If the glued section is zero, the decomposition in [F2] writes the global representative as a horizontal $(0,1)$-form plus a global Dolbeault-exact term. Closedness makes the horizontal form fibrewise holomorphic with coefficient bundle $\mathcal O(-1)^{\oplus2}\otimes E_x$. Its holomorphic-section space is zero by the fibre calculation in [F2], so the horizontal form vanishes; the original class is exact and is therefore zero. Thus the global map is injective. A formula on one chart supplies neither the overlap equality in step 1.1 nor this zero-kernel argument. [A1, F2, step 1.1, algebra] ∎
