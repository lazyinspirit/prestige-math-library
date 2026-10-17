---
id: lem-emg-matter-noether-exchange
kind: lemma
title: "Gauge/diffeomorphism matter identity and field exchange"
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
proof_strategy: direct
deps:
  - def-emg-lorentzian-forms
  - def-emg-local-potentials-and-circle-data
  - lem-emg-maxwell-current-forms
  - lem-emg-circle-connection-gluing
  - def-gr-hilbert-stress-energy-tensor
  - thm-gr-density-divergence-and-finite-chain-flux
  - thm-gr-compact-metric-and-timelike-curve-variation
  - lem-gr-compact-variation-coefficient-vanishing
  - prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor
  - def-lie-derivative-of-a-tensor-field
  - thm-fundamental-theorem-on-flows
  - def-smooth-vector-field-as-a-tangent-bundle-section
  - lem-smooth-bump-between-concentric-euclidean-balls
  - def-local-and-global-flow
  - def-countable-choice
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
dependency_roles:
  def-emg-lorentzian-forms: mathematical-premise
  def-emg-local-potentials-and-circle-data: mathematical-premise
  lem-emg-maxwell-current-forms: mathematical-premise
  lem-emg-circle-connection-gluing: mathematical-premise
  def-gr-hilbert-stress-energy-tensor: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  thm-gr-compact-metric-and-timelike-curve-variation: mathematical-premise
  lem-gr-compact-variation-coefficient-vanishing: mathematical-premise
  prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor: mathematical-premise
  def-lie-derivative-of-a-tensor-field: mathematical-premise
  thm-fundamental-theorem-on-flows: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  def-local-and-global-flow: mathematical-premise
  def-countable-choice: mathematical-premise
  def-emg-finite-real-supremum-domain: mathematical-premise
  def-emg-real-metric-axiom-convention: mathematical-premise
  lem-emg-metric-axioms-imply-nonnegativity: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-sequence-limit-criterion-with-choice: mathematical-premise
  def-emg-boundaryless-completeness-domain: mathematical-premise
  def-emg-set-size-and-class-schema: mathematical-premise
sources:
  references:
    - title: "David Tong, General Relativity, 2019 lecture notes, §4.5.2–§4.5.3, PDF pp. 190–192 (printed pp. 183–185)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§4.5.2–§4.5.3: metric variation defines the Hilbert tensor; on-shell diffeomorphism invariance gives its covariant conservation. The charged connection term is derived locally here."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 5, equations (5.33)–(5.38), PDF pp. 145–146 (printed pp. 138–139)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 5: the metric Lie derivative and the on-shell stress identity from diffeomorphism invariance. The horizontal U(1) lift and sourced force term are proved in this item."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

Let $(M,g,N,o)$ be an oriented, time-oriented smooth Lorentzian four-manifold of signature $(-,+,+,+)$ with metric-selected connection $\nabla$, as in [[def-emg-lorentzian-forms]]. Let $\pi:P\to M$ be a smooth principal $U(1)$ bundle with a smooth connection and global curvature two-form $F$, using the local-potential and fixed-sector conventions of [[def-emg-local-potentials-and-circle-data]] and [[lem-emg-circle-connection-gluing]]. Specify the matter fields by a smooth fiber bundle $p_E:E\to M$: its local trivializations are smooth diffeomorphisms $p_E^{-1}(U)\cong U\times Q$ commuting with projection, for a fixed finite-dimensional smooth manifold $Q$. A matter configuration is a smooth section $\Psi:M\to E$, so $p_E\circ\Psi=\mathrm{id}_M$; write $\mathcal C=\Gamma^\infty(E)$. No linear structure on $Q$ is required. A compact matter variation is a jointly smooth family $\Psi_s\in\mathcal C$, $|s|<\varepsilon$, with $\Psi_0=\Psi$ and $\Psi_s=\Psi$ off a common compact subset of $M$. Its derivative $\eta(x)=\partial_s\Psi_s(x)|_0$ lies in $V_{\Psi(x)}E:=\ker(d p_E)_{\Psi(x)}$, the vertical tangent space. Thus $\eta$ is a smooth compactly supported section of the vector bundle $\Psi^*VE\to M$.

Let $S_m:\mathcal D\to\mathbb R$, where $\mathcal D$ is a declared subset of triples $(\tilde g,\tilde A,\tilde\Psi)$ consisting of smooth Lorentzian metrics of the fixed signature, smooth connections on $P$, and sections in $\mathcal C$; $A$ denotes the connection, not necessarily a global one-form. Admissible variations are jointly smooth curves in $\mathcal D$ equal to the fixed triple off a common compact set. Require that freezing any two components of an admissible curve still gives an admissible curve near zero, and that every compact metric and fixed-sector connection direction is admitted. Here **differentiable** means that along each admissible curve the derivative at zero exists, depends real-linearly only on $(q,\alpha,\eta)$, and is the sum $\delta_g S_m[q]+\delta_A S_m[\alpha]+\delta_\Psi S_m[\eta]$ of its three partial derivatives. The connection direction $\alpha$ is the physical one: $\delta A_i=\alpha|_{U_i}$, equivalently $\delta\omega=\kappa_0^{-1}\pi^*\alpha$ for the normalized connection $\omega$ of [[lem-emg-circle-connection-gluing]].

Matter transport is additional supplied data, not a canonical construction for an arbitrary $E$. For every compact real gauge parameter $\chi$, use the principal-bundle path $H_s(p)=p\cdot e^{is\chi(\pi(p))/\kappa_0}$ covering $f_s=\mathrm{id}_M$. For each compact smooth vector field $\xi$ use its flow $f_s$ and the flow $H_s$ of its horizontal lift $\xi^H$, uniquely specified by $d\pi(\xi^H)=\xi\circ\pi$ and $\omega(\xi^H)=0$. For each of these paths supply a jointly smooth family of bundle diffeomorphisms $H_s^E:E\to E$ covering $f_s$, with $H_0^E=\mathrm{id}_E$, equal to the identity over the complement of the compact support of the generating parameter or vector field. The maps and their inverses are required on a common interval about zero. Define the transported section by $\Psi_s=(H_s^E)^{-1}\circ\Psi\circ f_s$, and require $(f_s^*g,H_s^*\omega,\Psi_s)$ to be admissible. This pathwise specification also allows models whose gauge action is defined using real phase paths; it asserts no action of every finite circle transformation on $E$.

Fix a configuration at which the matter Euler–Lagrange variation vanishes, meaning $\delta_\Psi S_m=0$ for every smooth compactly supported matter-field variation. Suppose that for all compactly supported metric variations $q^{ab}=\delta g^{ab}$ and all compactly supported connection variations $\alpha\in\Omega^1(M)$ in the fixed bundle sector, the remaining first variation is

$$\delta S_m=-\frac{1}{2c}\int_M T^m_{ab}q^{ab}\,\mathrm{vol}_g+\frac{1}{c}\int_M j^a\alpha_a\,\mathrm{vol}_g,$$

where $c>0$, $T^m$ is a smooth symmetric covariant two-tensor, and $j$ is a smooth vector field. Assume $S_m(f_s^*g,H_s^*\omega,\Psi_s)=S_m(g,\omega,\Psi)$ for both types of supplied transport above. Only derivatives at $s=0$ are used; no global flow for all times is required. Then

$$\nabla_a j^a=0,\qquad \nabla_a T_m^{ab}=F^{bc}j_c,$$

where $j_c:=g_{ca}j^a$. These are conditional variational identities; no Maxwell or Einstein field equation, existence theorem, or empirical premise is assumed.

For SI bookkeeping in length coordinates, take $[c]=\mathrm{m\,s^{-1}}$, $[A_a]=\mathrm{Wb\,m^{-1}}$, and $[F_{ab}]=\mathrm{Wb\,m^{-2}}$. If $S_m$ is assigned action units $\mathrm{J\,s}$, the displayed variation convention assigns $[T^m]=\mathrm{J\,m^{-3}}$ and $[j^a]=\mathrm{A\,m^{-2}}$. These are formal dimensional assignments only; the lemma adopts no matter model or empirical law. 

## Facts & Assumptions

**Given:** The manifold, Lorentzian metric, orientation, principal circle bundle, connection, curvature, matter configuration, and functional in the Statement; the matter equations hold at the fixed configuration; the stated first-variation formula and both invariances hold for compactly supported variations.

[F1] The EMG geometric setup is a smooth oriented/time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$; a local potential may be used without assuming a global potential. ([[def-emg-lorentzian-forms]])

[F2] On the fixed principal circle bundle, local connection forms patch to a global connection and curvature; differences of fixed-sector connections are global base one-forms, so $\alpha$ in the Statement is globally defined. ([[def-emg-local-potentials-and-circle-data]], [[lem-emg-circle-connection-gluing]])

[F3] The Hilbert tensor convention for inverse-metric variation is $\delta_gS_m=-\frac{1}{2c}\int T^m_{ab}q^{ab}\,\mathrm{vol}_g$. ([[def-gr-hilbert-stress-energy-tensor]])

[F4] Every smooth vector field has a unique maximal local flow on an open domain containing time zero. ([[def-smooth-vector-field-as-a-tangent-bundle-section]], [[def-local-and-global-flow]], [[thm-fundamental-theorem-on-flows]])

[F5] In a chart, $(\mathcal L_\xi g)_{ab}=\xi^c\partial_cg_{ab}+g_{cb}\partial_a\xi^c+g_{ac}\partial_b\xi^c$; metric compatibility and torsion freedom identify this with $\nabla_a\xi_b+\nabla_b\xi_a$, and differentiating the inverse metric gives $\delta g^{ab}=-(\nabla^a\xi^b+\nabla^b\xi^a)$. ([[def-lie-derivative-of-a-tensor-field]], [[prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor]], [[def-emg-lorentzian-forms]])

[F6] For a smooth vector field $W$ compactly supported inside one positively oriented coordinate ball, $\int_M\nabla_aW^a\,\mathrm{vol}_g=0$. Indeed [[thm-gr-density-divergence-and-finite-chain-flux]](a) gives $d(\iota_W\mathrm{vol}_g)=(\nabla_aW^a)\mathrm{vol}_g$. In the chart, $\mathrm{vol}_g=w\,dx^0\wedge\cdots\wedge dx^3$ and $\iota_W\mathrm{vol}_g=\sum_a(-1)^awW^a\,dx^0\wedge\cdots\widehat{dx^a}\cdots\wedge dx^3$; differentiating gives $w\nabla_aW^a=\sum_a\partial_a(wW^a)$. Each coefficient $wW^a$ has compact support inside the chart image, so its zero extension to $\mathbb R^4$ is smooth and vanishes near the faces of a containing rectangle. FTC in coordinate $a$ and iterated integration over the other coordinates give $\int_{\mathbb R^4}\partial_a(wW^a)=0$, exactly the chart argument in [[thm-gr-compact-metric-and-timelike-curve-variation]], Facts & Assumptions [L8]. The chart integral is the full integral of this chart-supported density. This uses neither a finite singular chain enclosing arbitrary support nor a claim of boundary-free flux on a subdomain. Nonnegative smooth bumps exist in any coordinate ball ([[lem-smooth-bump-between-concentric-euclidean-balls]]); if a smooth covector pairs to zero with every vector test compactly supported inside each such ball, a componentwise fixed-sign bump test makes it zero at every point ([[lem-gr-compact-variation-coefficient-vanishing]] uses the same local bump principle).

[A1] Matter stationarity means that the partial derivative vanishes on every admissible compact section variation defined in the Statement. In particular each transported section is such a variation: it is jointly smooth, is a section because its bundle map covers the base flow, and is fixed off the generating compact support. The freezing and differentiability hypotheses therefore make its partial contribution zero, leaving exactly the displayed metric and connection terms.

## Proof

**Proof technique:** use compact gauge variations to obtain current continuity, then use the horizontal lift of a compactly supported vector field to convert diffeomorphism invariance into the stress-exchange identity.

1.1 Fix any positively oriented coordinate ball and let $\chi$ be a smooth real gauge parameter compactly supported inside it. Pullback by the supplied gauge path changes $\omega$ by $s\kappa_0^{-1}\pi^*d\chi$, so the physical variation is $\alpha=d\chi$; its compact matter-section variation has zero partial contribution by [A1]. Gauge invariance and the stated first variation give $0=\delta_\chi S_m=\frac1c\int_M j^a\nabla_a\chi\,\mathrm{vol}_g$. The product rule writes the integrand as $\nabla_a(\chi j^a)-\chi\nabla_aj^a$; the first term integrates to zero by [F6], because $\operatorname{supp}(\chi j)\subseteq\operatorname{supp}\chi$ is compact inside the chosen chart. If $\nabla_aj^a$ were nonzero at a point, continuity and a nonnegative compact bump supported where it has fixed sign, whose existence is part of [F6], would contradict the resulting integral identity for all $\chi$. Since the ball and its tests are arbitrary, $\nabla_aj^a=0$ at every point of $M$. [given, A1, F6, algebra]

1.2 Let $\xi$ be a smooth vector field compactly supported inside an arbitrary positively oriented coordinate ball in a bundle trivialization, and use the flows and matter transport specified in the Statement. In a local circle angle $\theta$, $\omega=d\theta+\kappa_0^{-1}A_a dx^a$, so $\xi^H=\xi^a\partial_a-\kappa_0^{-1}(\xi^a A_a)\partial_\theta$. Differentiating $H_s^*\omega$ gives $\kappa_0^{-1}(\mathcal L_\xi A-d(\xi^aA_a))=\kappa_0^{-1}\iota_\xi F$ on the base: explicitly $(\mathcal L_\xi A)_a=\xi^b\partial_bA_a+A_b\partial_a\xi^b=\xi^bF_{ba}+\partial_a(\xi^bA_b)$. Consequently the physical connection variation is $\alpha_a=\xi^bF_{ba}$. Since $F$ is global by [F2], this formula agrees on overlaps. The supplied matter transport has compact vertical derivative as in [A1]. Such coordinate balls cover $M$, so restricting to their tests loses no pointwise conclusion. [given, A1, F1, F2, F4, F5, algebra]

2.1 By [F5], the metric derivative along the same local flow has inverse-metric variation $q^{ab}=-(\nabla^a\xi^b+\nabla^b\xi^a)$. Simultaneous diffeomorphism invariance, the on-shell matter condition [A1], and the first-variation formula therefore give $0=\frac1c\int_M\left(T^m_{ab}\nabla^a\xi^b+j^a\xi^bF_{ba}\right)\mathrm{vol}_g$, where symmetry of $T^m$ combines its two metric-variation terms. [A1, F3, F5, step 1.2, algebra]

3.1 The product rule gives $T^m_{ab}\nabla^a\xi^b=\nabla^a(T^m_{ab}\xi^b)-(\nabla^aT^m_{ab})\xi^b$. The vector field $W^a=(T^m)^a{}_b\xi^b$ is compactly supported inside the chosen chart, so its divergence integrates to zero by [F6], so step 2.1 becomes $\int_M(-\nabla^aT^m_{ab}+F_{ba}j^a)\xi^b\,\mathrm{vol}_g=0$ for every vector test $\xi$ compactly supported inside that ball. The ball was arbitrary; [F6] therefore makes the smooth covector coefficient vanish pointwise throughout $M$. Relabeling the contracted index and raising $b$ yields $\nabla_aT_m^{ab}=F^{bc}j_c$, completing the proof. [F6, step 2.1, algebra] ∎

## Remarks

- The formula is global even when no global potential $A$ exists: the horizontal connection variation is $\iota_\xi F$, and $F$ is global.
- Matter stress is not separately divergence-free in the charged subsystem: its divergence is the Lorentz-force density, with the sign derived from the stated first-variation and flow conventions. Under the matching sourced-Maxwell convention, [[lem-emg-maxwell-stress-divergence]] gives the opposite electromagnetic stress divergence, so the two cancel where both hypotheses hold.
- [[lem-emg-maxwell-current-forms]] is a formulation prerequisite: it fixes the downstream source convention $\nabla_aF^{ab}=-\mu_0j^b$ (equivalently $d(\star_gF)=\mu_0\iota_j\mathrm{vol}_g$ for $\mu_0>0$), specifying the sign with which this lemma's variational current is matched to the Maxwell source in a coupled formulation. This lemma's Statement and proof assume neither Maxwell equation; $j^a$ is fixed by the displayed matter first variation, and the stress-exchange sign is derived from the stated diffeomorphism and gauge conventions.
- The M02 and M03 supplier carriers are present as drafts and are used only at their inspected statements; the Maxwell-current dependency preserves the planned notation but no Maxwell equation is assumed; their proofs are not treated as accepted. The seven typed foundational replacements are now authored on emg-mg02; no independent acceptance is asserted: [[def-emg-finite-real-supremum-domain]], [[def-emg-real-metric-axiom-convention]], [[lem-emg-metric-axioms-imply-nonnegativity]], [[def-emg-explicit-power-regimes]], [[lem-emg-sequence-limit-criterion-with-choice]], [[def-emg-boundaryless-completeness-domain]], and [[def-emg-set-size-and-class-schema]]. The inherited geometry chain states $\mathrm{AC}_\omega$; after the smooth data and local flows are given, the displayed calculation makes no further choice. The direct Countable Choice metadata dependency is inherited from that geometry chain.

