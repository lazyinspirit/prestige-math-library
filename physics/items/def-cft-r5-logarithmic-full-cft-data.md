---
id: def-cft-r5-logarithmic-full-cft-data
kind: definition
title: "Logarithmic 2D CFT data and logarithmic correlators"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
deps:
  - def-cft-r5-full-local-cft-data
  - def-logarithmic-vertex-module
  - lem-cft-r5-joint-jordan-dilation-log-polynomial
dependency_roles:
  def-cft-r5-full-local-cft-data: mathematical-premise
  def-logarithmic-vertex-module: mathematical-premise
  lem-cft-r5-joint-jordan-dilation-log-polynomial: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988; published 1989), arXiv:hep-th/9108028v1"
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§2.2, printed pp. 15–20, radial quantization and the OPE domain; §2.4, pp. 24–25, Ward identities; §3.7, pp. 42–45, equality of four-point OPE channels. These notes provide general CFT context, not a logarithmic-CFT construction."
    - title: "Rongvoram Nivesvivat and Sylvain Ribault, Logarithmic CFT at Generic Central Charge: from Liouville Theory to the Q-state Potts Model, arXiv:2007.04190v1"
      url: https://arxiv.org/pdf/2007.04190v1
      locator: "§2.1, PDF pp. 3–5, on Jordan representations from dimension derivatives; §3.1, PDF pp. 11–12, on logarithmic two-point coefficients; §4, pp. 22–24, on the model-specific O(n)/Potts logarithmic representations."
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Use a full local two-dimensional CFT data package in the exact state-space/OPE presentation of the earlier definition. In particular, the package supplies a complete locally convex state space $\mathcal H$, a common invariant dense domain $\mathcal D$, commuting left and right Virasoro actions, specified vacuum and local fields, convergent branchwise radial OPEs, bosonic or spin locality, and equality of iterated OPE channels. This is a chosen mathematical package; it does not assert that a named statistical model realizes it.

A **joint generalized-weight vector** is a vector $v\in\mathcal D$ for which there are $h,\bar h\in\mathbb C$ and positive integers $r,s$ with

$$N_L^r v=0,\qquad N_R^s v=0,\qquad N_L=L_0-hI,\qquad N_R=\bar L_0-\bar hI.$$

A **logarithmic sector** is a declared joint generalized-weight sector containing a vector for which $N_Lv\ne0$ or $N_Rv\ne0$. Its Jordan-chain lengths and chosen left/right bases are part of the data. On a branch domain, the earlier commuting-Jordan dilation lemma gives the action of $z^{L_0}\bar z^{\bar L_0}$ on such a vector explicitly: if $N_L^rv=N_R^sv=0$, then

$$z^{L_0}\bar z^{\bar L_0}v=z^h\bar z^{\bar h}\sum_{i=0}^{r-1}\sum_{j=0}^{s-1}\frac{(\log z)^i(\log\bar z)^j}{i!\,j!}N_L^iN_R^jv.$$

A **logarithmic correlator** is a specified weak matrix coefficient of a finite radially ordered product of local fields on one of the package's declared convergence domains. After factoring the declared scalar powers, its chosen branchwise expansion must be supplied as a finite polynomial in the chosen logarithms, with coefficient functions independent of those logarithm branches; at least one positive-degree coefficient must be nonzero. The expansion and its branches are part of the package data, so the criterion refers to the declared expansion. A nonsemisimple sector permits logarithmic terms but does not force every coefficient or correlator to detect them; the declared joint-sector data, local fields, OPE coefficient arrays and correlator functional determine which terms survive. Call the full package **logarithmic** only when it has both a logarithmic sector and at least one logarithmic correlator. It must give all logarithm branches and field normalizations, and it inherits the joint-sector data, local fields, OPE coefficient arrays, correlator functional and crossed-channel continuation paths required by the full-local-data definition. No tensor-product factorization of left and right sectors is assumed.

The package records the coefficient arrays of its OPEs and correlators in declared Jordan-chain bases as its logarithmic-coupling data. These numbers are not basis independent by default. Under an invertible change of basis on a generalized-weight space, state slots transform by that matrix and dual slots by its inverse; the coefficient arrays transform by the induced tensor action, while the represented fields and correlators remain unchanged. For a linearly independent normalized rank-two chain $Nv_0=0$, $Nv_1=v_0$, the chain-preserving changes $v_0'=a v_0$, $v_1'=a v_1+bv_0$ with $a\ne0$ leave the Jordan matrix fixed but change the field-normalized coefficient arrays. A scalar is called a normalization-independent logarithmic coupling only when its invariance under the declared allowed changes has been proved for that model.

The words **rational**, **unitary**, and **reflection positive** retain the separate flags and exact conditions from the full-local-data definition. A chiral logarithmic module under the earlier module definition is not, by itself, a full local logarithmic CFT: it does not supply the full left/right state space, local fields, convergent OPE, locality, or crossed-channel equality. No general tensor-category or modular property follows from this definition.

## Definition references

[[def-cft-r5-full-local-cft-data]]

[[def-logarithmic-vertex-module]]

[[lem-cft-r5-joint-jordan-dilation-log-polynomial]]

## Remarks

The cited generic-central-charge Virasoro analysis constructs logarithmic representations and conformal blocks and studies model-specific Potts/O(n) structures; its proposed full model applications are not assertions that a full local logarithmic CFT has been constructed. A chiral logarithmic module under the earlier module definition does not itself supply the left/right local fields and OPE package listed above. This item defines that additional full-local data and does not claim that any named loop model meets them.
