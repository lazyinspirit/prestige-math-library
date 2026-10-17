---
id: pthm-tgr-finite-entropy-balance
kind: physics-theorem
title: "Conditional finite entropy balance with explicit boundary flux"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps:
  - def-tgr-framework-units
  - post-tgr-local-entropy-admissibility
  - def-tgr-spacelike-current-slab
  - thm-tgr-finite-current-production-balance
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  post-tgr-local-entropy-admissibility: physical-assumption
  def-tgr-spacelike-current-slab: mathematical-premise
  thm-tgr-finite-current-production-balance: mathematical-premise
justified_by: []
physical_scope: "Supplied C1 entropy current on a finite spacelike-cap slab and adopted local nonnegative production; slice-entropy change plus net outward side flux equals integrated production; zero net side flux is sufficient for the endpoint entropy inequality."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Harvey Reall, Part III General Relativity, University of Cambridge lecture notes (12 October 2022 revision), §§5.3, 6.3 and 8.7"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "Full 125-page PDF; §5.3, PDF pp. 56–57, Killing-current divergence; §§6.3 and 8.7, stress-energy and finite boundary-flux context. The present result uses the exact local draft MI01 balance, not a global Stokes theorem."
    - title: "David Tong, General Relativity, University of Cambridge Part III lecture notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html"
      locator: "Full author-hosted chapter section; §4.5.5, current divergence and hypersurface charge, as independent context for the finite-current convention."
    - title: "Paul Romatschke, New Developments in Relativistic Viscous Hydrodynamics, arXiv:0906.4787v2 (2010), §4.1"
      url: "https://arxiv.org/pdf/0906.4787"
      locator: "PDF pp. 9–10: model-specific entropy-current divergence convention and the source's explicit experimental limitation; no source equation replaces the conditional proof below."
---

## Statement

Use the smooth time-oriented Lorentzian geometry, positively oriented chart and product slab $K=[x^0_-,x^0_+]\times\Omega$ with open spatial rectangle $\Omega$ and compact closure $\overline K$ of [[def-tgr-spacelike-current-slab]], with nonempty rectangular factors, spacelike slices, future unit normal $n$, induced volume $dV_h$, and a $C^1$ current defined on a neighborhood of $\overline K$. Let $S^a$ be the entropy current selected by [[post-tgr-local-entropy-admissibility]] and put $\Pi:=\nabla_aS^a\geq0$ on $K$. Define the proper slice entropy

$$Q_S(x^0):=\int_\Omega[-g(S,n)]\,dV_h$$

and let $\Phi_S(B)$ be the net outward flux through the union $B$ of the six spatial side faces, with the sign convention of [[def-tgr-spacelike-current-slab]]. Conditional on the exact current statement and hypotheses of the **draft** mathematical theorem [[thm-tgr-finite-current-production-balance]],

$$Q_S(x^0_+)-Q_S(x^0_-)+\Phi_S(B)=\int_K\Pi\,\mathrm{vol}_g\geq0.$$

Every term has units $\mathrm{J\,K^{-1}}$ in the length-coordinate convention of [[def-tgr-framework-units]]. If the net outward side flux is zero, then the endpoint charges satisfy $Q_S(x^0_+)\geq Q_S(x^0_-)$. This is a deduction conditional on both the adopted local inequality and the actual draft supplier interface; it is not an observation, a proof approval of that mathematical supplier, or a generalized second law.

## Facts & Assumptions

**Given:** The Lorentzian chart slab, spacelike slices, future normal, compact closure and $C^1$ current specified in [[def-tgr-spacelike-current-slab]]; an entropy current $S$ satisfying the adopted local condition; and the SI length-coordinate convention $x^0=ct_{\rm phys}$.

[F1] [[def-tgr-framework-units]]: $S^a$ has components $\mathrm{J\,K^{-1}\,m^{-3}}$, the physical entropy flux is $cS$, and $\nabla_aS^a$ has units $\mathrm{J\,K^{-1}\,m^{-4}}$.

[A1] [[post-tgr-local-entropy-admissibility]] adopts $\Pi=\nabla_aS^a\geq0$ pointwise for the separately specified smooth model. This is a physical premise, not a geometric theorem or a measured result.

[L1] [[def-tgr-spacelike-current-slab]] is the current draft definition: $K$ is a compactly bounded coordinate product slab with spacelike caps, $S$ is $C^1$ near its closure, $Q_S$ is the future-normal/proper-volume charge, and $\Phi_S(B)$ is the signed net outward coordinate-face flux.

[L2] [[thm-tgr-finite-current-production-balance]] is the current draft mathematical theorem. Its exact current statement is $Q_J(x^0_+)-Q_J(x^0_-)+\Phi_J(B)=\int_K(\nabla_aJ^a)\,\mathrm{vol}_g$ for the slab and $C^1$ current of [L1]. Its proof and manifest snapshot remain unresolved upstream; this use is explicitly conditional and does not treat it as proved.

## Proof

**Proof technique:** direct conditional application of the finite-slab balance, with positivity supplied by the adopted physical inequality.

1.1 By [A1], $\Pi\geq0$ throughout $K$. The oriented Lorentzian volume density is positive in the supplied chart and $K$ is a bounded Jordan slab, so its Riemann integral is defined and $\int_K\Pi\,\mathrm{vol}_g\geq0$. This is conditional on the smooth current and slab hypotheses in [L1]. [given, A1, L1, algebra]

2.1 Apply [L2] to the current $J=S$. By [L1], the resulting charge is exactly the proper normal slice integral $Q_S$ and the boundary term is the net outward entropy flux $\Phi_S(B)$. In the length-coordinate convention of [F1], these charges and the integrated production have units $\mathrm{J\,K^{-1}}$. Hence the stated finite balance holds, conditional on the current draft theorem's exact interface. [given, F1, L1, L2, step 1.1]

3.1 If $\Phi_S(B)=0$, step 2.1 and step 1.1 give $Q_S(x^0_+)-Q_S(x^0_-)\geq0$. If also $\Pi$ vanishes throughout $K$, the integral in step 2.1 is zero and the endpoint charges are equal. No monotonicity of the charge inside an open region is claimed when the net outward flux is nonzero. [A1, step 1.1, step 2.1, algebra] ∎
