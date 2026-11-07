---
id: thm-gts-non-fano-log-cy-surface-theta-period-tropical-disk-theorem
kind: theorem
title: Non-Fano log Calabi-Yau surface theta-period/tropical-disk theorem
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 9
domain: mathematics
library: physics
category: string-theory
proof_strategy: direct
deps:
  - def-gts-log-cy-pair-toric-degeneration-and-scattering-data
  - def-gts-quantum-cohomology-period-and-mirror-map-interface
  - def-gts-intrinsic-mirror-algebra-and-classical-period
  - def-gts-two-marked-log-gw-invariant
  - lem-gts-formal-lagrange-inversion-for-period-maps
  - def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone
  - thm-gts-r4-12b-algebraic-stable-map-descendants-and-deformation-splitting-identities
  - thm-gts-genus-zero-quantum-product-associativity
  - lem-gts-divisorial-toric-pushout-regular-snc-family-model
  - lem-gts-projective-df-log-map-foundations
  - lem-gts-proper-projective-support-cone-specialization
  - lem-gts-adapted-log-map-atlas-and-supported-vertex-cone-comparison
  - lem-gts-ordinary-log-descendant-and-contact-vector-comparison
  - lem-gts-toric-local-virtual-and-scattering-comparison
  - lem-gts-ordered-multi-end-theta-period-normalization
  - lem-gts-two-marked-spine-and-elliptic-symmetry
dependency_roles:
  def-gts-log-cy-pair-toric-degeneration-and-scattering-data: mathematical-premise
  def-gts-quantum-cohomology-period-and-mirror-map-interface: mathematical-premise
  def-gts-intrinsic-mirror-algebra-and-classical-period: mathematical-premise
  def-gts-two-marked-log-gw-invariant: mathematical-premise
  lem-gts-formal-lagrange-inversion-for-period-maps: mathematical-premise
  def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone: mathematical-premise
  thm-gts-r4-12b-algebraic-stable-map-descendants-and-deformation-splitting-identities: mathematical-premise
  thm-gts-genus-zero-quantum-product-associativity: mathematical-premise
  lem-gts-divisorial-toric-pushout-regular-snc-family-model: mathematical-premise
  lem-gts-projective-df-log-map-foundations: mathematical-premise
  lem-gts-proper-projective-support-cone-specialization: mathematical-premise
  lem-gts-adapted-log-map-atlas-and-supported-vertex-cone-comparison: mathematical-premise
  lem-gts-ordinary-log-descendant-and-contact-vector-comparison: mathematical-premise
  lem-gts-toric-local-virtual-and-scattering-comparison: mathematical-premise
  lem-gts-ordered-multi-end-theta-period-normalization: mathematical-premise
  lem-gts-two-marked-spine-and-elliptic-symmetry: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Per Berglund, Tim Gräfnitz, and Michael Lathwood, Gromov-Witten Invariants and Mirror Symmetry for Non-Fano Varieties via Tropical Disks
      url: https://arxiv.org/pdf/2404.16782v3
      locator: §§3.2-3.3, Theorem 8.5, Proposition 9.1, Theorem 9.3, Corollary 8.2, and Theorem 10.1
    - title: William Fulton and Rahul Pandharipande, Notes on Stable Maps and Quantum Cohomology
      url: https://arxiv.org/pdf/alg-geom/9608011v2
      locator: §§5, 7-8, ordinary stable maps, virtual invariants and quantum-period conventions; not a tropical-log correspondence proof
    - title: Hiroshi Iritani, Quantum Cohomology and Periods
      url: https://arxiv.org/pdf/1101.4512v3
      locator: §§3-5, independent quantum-period and mirror-coordinate treatment; not a proof of the log-tropical correspondence
---

## Statement

Let $X$ be a smooth projective surface over $\mathbb C$ and let $D=\coprod_{a=1}^r D_a\subset X$ be a nonempty smooth anticanonical divisor, with its connected components displayed. Assume a toric degeneration of $(X,D)$ supplies its dual intersection complex, the canonical enumerative scattering/theta algebra with primitive divisorial indices $\rho_a$ corresponding to $D_a$, compatible chamber realizations, and the coefficient completions used below. These are the geometric source data, rather than an arbitrary consistent scattering diagram. The family of pairs is flat, and central gluing means the actual toric-divisor schematic pushout, including closed-vertex compatible functions, with its reduced flat outer-endpoint family; a list of normalizations or generic incidences alone is not such a gluing. Let $\operatorname{tr}$ denote the coefficient of the theta unit; any use of a Laurent constant term refers to a chamber realization compatible with this trace. For a general point $P$ in any scattering chamber, set
$$\Theta_D(P)=\sum_{a=1}^r\vartheta_{\rho_a}(P),\qquad W_{D,P}=t^{-1}\Theta_D(P).$$
For an effective curve class $\beta$, put $d_{\beta,a}=\beta\cdot D_a$ and $d_\beta=\sum_a d_{\beta,a}=\beta\cdot D$. Assume the source completion makes the trace power sum coefficientwise locally finite. The period identity is
$$\sum_{m\ge0}\operatorname{tr}(W_{D,P}^m)=\widehat G_X=1+\sum_{\substack{\beta\ne0\\d_\beta\ge2}}d_\beta!\,D_{0,1}(X,\beta)z^\beta,$$
where
$$D_{0,1}(X,\beta)=\int_{[\overline{\mathcal M}_{0,1}(X,\beta)]^{\rm vir}}\psi_1^{d_\beta-2}\operatorname{ev}_1^*[\mathrm{pt}].$$
The identity is asserted in every chamber and includes all non-Fano classes permitted by the hypotheses; there is no nef or Fano assumption.

For the scalar open identity suppose additionally that $r=1$ and the source has its single unbounded direction and the one-variable theta-at-infinity/simple-pole realization. Write $\vartheta_1=\vartheta_{\rho_1}$ and $W_P=W_{D,P}$. At infinity let $y$ be the coordinate in that direction and set $Q_{{\rm geom},i}=z_i(t/y)^{d_i}$, where $d_i=\beta_i\cdot D$ for the named curve-class basis. Let $\eta(Q)^\beta=(-1)^{d_\beta}Q^\beta$. With the retained conventions
$$a_{W_P}=-\operatorname{CT}\log(1+W_P),\quad Q_{{\rm cl},i}=z_i\exp(d_i a_{W_P}),\quad M_{W_P}(Q_{\rm cl})=\exp(a_{W_P}(z(Q_{\rm cl}))),$$
the scalar open mirror-map identity is
$$\vartheta_1^{\infty}=y\,M_{W_P}(\eta(Q_{\rm geom}))=y\left(1+\sum_{\substack{\beta\in\operatorname{NE}(X)\\d_\beta\ge2}}\frac{R_{0,(1,d_\beta-1)}((X,D),\beta)}{d_\beta-1}Q_{\rm geom}^\beta\right).$$
For multiple ends the asserted result is the full-boundary-potential period identity; this scalar one-end open identity does not assert a formula for an individual end or for their sum.


## Statement references

The existing pair/scattering, trace, period, two-marked and Lagrange definitions retain their stated roles. Every substantial local prerequisite is an explicit draft native dependency below, with its complete inline proof in the accompanying installation candidate. Native acceptance and dependency-level reconciliation remain owner operations; research filenames are not logical premises.

## Facts & Assumptions

**Given:** The actual smooth projective pair, canonical enumerative source theta algebra, coefficientwise completion, and compatible theta-unit trace specified in the Statement.

[F1] [[lem-gts-projective-df-log-map-foundations]] and [[lem-gts-ordinary-log-descendant-and-contact-vector-comparison]] construct the actual projective finite-DF ordinary/log descendant comparison, including disconnected smooth boundary components, actual contact vectors and original virtual cones.

[F2] [[lem-gts-divisorial-toric-pushout-regular-snc-family-model]] supplies the actual finite regular SNC model and component toric presentations, including higher double/triple defects and nonunit reducible cross faces, with old parameter, labels, units, DF coupons and curve classes retained.

[F3] [[lem-gts-proper-projective-support-cone-specialization]] constructs proper projective supports for the ORIGINAL generic cone, preserving the entire generic pair. Its actual source/log contractions, common supports and Cartier/zero-section comparison give numerical specialization without a POT on a reduced main closure or a degree map on a nonproper ambient.

[F4] [[lem-gts-toric-local-virtual-and-scattering-comparison]] constructs root degree one, torus matching, integral enhancement/node indices, external-contact denominators and exceptional relative-cover/partition factors. Exceptional multi-contact pieces vanish by actual virtual pushforward.

[F5] [[lem-gts-toric-local-virtual-and-scattering-comparison]] identifies these actual virtual factors with canonical Hamiltonian scattering and broken-line completion, including multiset stabilizers, and constructs the exhaustive primitive-root branch sector after full supported vertex expansion.

[F6] [[lem-gts-ordered-multi-end-theta-period-normalization]] constructs the globally ordered label-groupoid factor d!, the fixed-component factor product(d_a!), the full-potential multinomial factor and the unit-trace/chamber constant-term identification.

[F7] [[lem-gts-formal-lagrange-inversion-for-period-maps]] supplies the coefficientwise formal inverse-series identity with the retained negative logarithm and the explicit completion hypothesis; it supplies no geometric theta expansion.

[F8] [[lem-gts-two-marked-spine-and-elliptic-symmetry]] constructs the external p denominator in the two-marked spine and proves p^2 R_(p,q)=q^2 R_(q,p) on the actual original virtual one-cycle. The anticanonical divisor sequence makes Pic0(X)→Pic0(D) zero; ghost slope balancing gives the elliptic evaluation relation. No rationality assumption on X is imposed.

[F9] [[lem-gts-divisorial-toric-pushout-regular-snc-family-model]] derives S2/normality, interior Gorensteinness and the outer canonical-ideal identity from the stated actual schematic pushout and flat outer family. Interior strict PBW and paired outer Rees constructions, with actual quotient-Jacobian/exponent decrease, supply the finite preliminary reduction without extra CM/Cartier assumptions.

[F10] [[lem-gts-adapted-log-map-atlas-and-supported-vertex-cone-comparison]] constructs the actual all-schemes algebraic Q-map atlas from target-diagram extraction, whole-source positive canonical roofs and chosen-data lifting. Its actual universal differential/trace POT identifies the SAME original generic cone. Proper-supported pushforward, full compactified type envelopes and logarithmic diagonals give the exhaustive vertex comparison including nontransverse types, Q-constant Z-lifts and psi. No free-monic atlas, formal/ordinary cone identification or ambient nonproper degree shortcut is used.


## Proof

1.1 Fix a class beta, put d_a=beta.D_a and d=sum d_a. No nonconstant rational component can map into any D_a: adjunction makes each D_a a smooth genus-one curve, and a nonconstant map from P1 to it contradicts the differential/Riemann–Hurwitz degree formula. Thus every actual genus-zero contact vector is nonnegative and is retained component by component. The projective finite-DF ordinary/log comparison [F1] is therefore valid without a nef or Fano assumption. For globally ordered primitive contact labels, its virtual descendant degree is d! D_(0,1)(X,beta). [F1,F6]

1.2 Apply the actual preliminary reduction [F9] and use [F2] to replace every local higher defect by its actual finite model and glue it with a common toroidal exterior. The finite tangential-conductor construction uses the actual contact normal form, ONE initial t=s^60, the complete six-face arithmetic, and the missing VW^3S coefficient to exclude conductor recurrence on the full face. All normal terminal blocks are actual A/D/E family resolutions; nonnormal terminal conductor conics are smooth and use the ordinary-pinch family construction. The normal central surfaces have actual blowdown presentations through the weak-degree-one/degree-two double-plane and degree-three rational-pencil constructions. No bare rationality or classification is substituted for those presentations. [F9,F2]

1.3 Specialize the original generic virtual cone on the proper projective support, retaining point and descendant insertions and the actual psi-contraction correction. The proper-supported Cartier/zero-section comparison [F3] gives equality of numerical generic and central degrees on the support. The actual atlas/POT and supported cone-to-local-gluing construction [F10] includes every central graph; fixed-domain maximal psi restricts to the proved primitive-root sector. Components with multiple exceptional contacts vanish by virtual pushforward, rather than being falsely declared nonexistent. The actual toric vertex and gluing factors in [F4] give precisely the finite tropical tree sum of that central virtual degree. [F3,F4,F5,F10]

1.4 Square-zero polarization and Poisson brackets identify this tree sum with canonical scattering/broken lines [F5]. For a fixed component allocation, quotient the globally ordered flags by product(d_a!) with their actual stabilizers. Expanding Theta_D^d sums all allocations and inserts the multinomial factor d!/product(d_a!). Consequently
$$[z^\beta]\operatorname{tr}(W_{D,P}^{d})=d!D_{0,1}(X,\beta).$$
The t^d contact grading cancels t^(-d). The constant power is one, and primitive positive theta inputs have zero unit coefficient; no degree-one term occurs. Classes of nonpositive total contact do not occur in positive trace powers. This proves the full-boundary-potential period identity, for the declared actual source/completion data. [F5,F6]

1.5 A tangent-supported wall sends z^m to z^m f^<n,m>, with every exponent of f in ker n. If a product term could have exponent zero, m would lie in ker n and its exponent <n,m> would be zero. Thus chamber changes preserve the constant term. A nonunit broken line at a general off-wall endpoint cannot have final exponent zero, since its last segment would be constant and its last bend would occur at that endpoint. Therefore CT(theta_p)=delta_(p,0), proving the actual unit-trace compatibility and chamber independence used above. [F6]

1.6 For the one-end scalar half apply [F8], after the actual global reduction [F9] and supported vertex-cone join [F10]. The external-contact determinant denominator gives the geometric theta expansion and the elliptic evaluation relation gives its symmetry. Thus c_beta=R_(0,(1,d-1))/(d-1) and theta_1^infty/y=1+sum c_beta Q_geom^beta. Put f(u)=t^-1 theta_1(t,t/u,z), h(u)=u f(u). The native Lagrange identity gives u(v)=v h(u(v)) and
$$\log(u(v)/v)=\sum_{k\ge1}\frac{v^k}{k}[u^0]f(u)^k.$$
Trace compatibility gives [u^0]f(u)^k=CT(W_P^k). At v=-1, coefficientwise local finiteness gives u(-1)=-exp(a_W). Hence
$$\exp(a_W)=1+\sum_{d\ge2}(-1)^d c_\beta z^\beta\exp(d a_W)=1+\sum_{d\ge2}(-1)^d c_\beta Q_{cl}^\beta.$$
Invert the declared closed coordinate and substitute eta(Q_geom). This proves the exact retained negative-logarithm/parity formula, with the same supported comparison. No unsigned closed/geometric identification is made. [F7,F8,F9,F10]

2.1 For disconnected D the scalar statement is not asserted: on P1×E with two boundary fibers, theta_+=x, theta_-=q/x and theta_+theta_-=q. The ordinary degree-one-fiber descendant is one, so its regularized coefficient is two. CT(theta_+²)=0 while CT((theta_++theta_-)²)=2q. The full-potential period is therefore necessary; the same example disproves an individual-end scalar open formula for the full-potential mirror map. This is the demonstrated smallest public correction, not an artificial one-end restriction on the period. [F6] ∎

## Remarks

This is a concrete guarded source candidate, not a native readiness or acceptance result. It preserves all original smooth-D and non-Fano period cases and corrects the false single-theta claim on disconnected D. The actual source gluing meaning and its model are explicit in [F9], and the actual atlas/POT/proper-supported all-type comparison is constructed in [F10]. The weighted two-marked factors and elliptic symmetry are now constructed in [F8]. The old printed-factorial discrepancy is resolved by actual globally ordered flags, rather than retained as a false obstruction. The accompanying native-installation manifest gives every prerequisite candidate and dependency. Root owns installation, actual dependency levels, metadata and mirror reconciliation, ordinary review/acceptance and final gates.
