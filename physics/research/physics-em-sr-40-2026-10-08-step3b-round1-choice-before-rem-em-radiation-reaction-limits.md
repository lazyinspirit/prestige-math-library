---
id: rem-em-radiation-reaction-limits
kind: remark
title: "Self-force, runaways and finite-size regularizations are not supplied by this page"
domain: physics
status: draft
origin: pipeline
dependency_level: 23
deps: [pthm-em-point-self-energy-divergence, def-em-weak-sources, pthm-em-larmor-nonrelativistic, pthm-em-lienard-emitted-power, def-countable-choice]
dependency_roles:
  pthm-em-point-self-energy-divergence: physical-result
  def-em-weak-sources: formulation-prerequisite
  pthm-em-larmor-nonrelativistic: physical-result
  pthm-em-lienard-emitted-power: physical-result
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Recorded scope limitations of the classical point-charge radiation model of this page: diverging point self-energy, undefined self-field/current products, prescribed-source-only emitted power, and deferred finite-size and self-force dynamics. Excluded: any assertion, proof or measurement of radiation reaction, runaways, self-force dynamics or electromagnetic mass."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "$\\S6.4.4$ printed pp. 165-169: the emitted-power discussion is the terminal content of the radiation chapter; the reading ledger records that radiation reaction is not developed there, matching this remark's deferral."
    - title: "N. Beisert, Elektrodynamik, ETH Zurich 2024 FS (author-hosted 176-page script)"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "$\\S11.15$-$\\S11.21$ printed pp. 11.15-11.21 (PDF pp. 135-141): the report's reading record states explicitly that radiation reaction/self-force is not developed, so prescribed-source radiation must not be represented as a closed coupled point-particle dynamics theorem."
---

## Remarks

Record, with no speculative content, the limits of the radiation model built on this page.

(a) [Self-energy] The truncated field energy of the idealized point charge diverges as the inner cutoff is removed ([[pthm-em-point-self-energy-divergence]]): the point source's own field carries infinite energy in this framework's idealization, and any finite-energy treatment of a point-like charge requires modifying the source or the field near the singularity, or an explicit cutoff, none of which is supplied here.

(b) [Undefined self-interaction] The framework's source model [[def-em-weak-sources]] pairs distributions against compact smooth tests and expressly excludes arbitrary products of distributions; the point charge's field is singular on the worldline while its own current is a distribution supported there, so the pairing of the charge's own field with its own current -- the object a systematic self-force would have to use -- is not defined by these postulates, no regularization is adopted, and no equation of motion for the charge is derived.

(c) [What the emitted-power items do and do not give] [[pthm-em-larmor-nonrelativistic]] and [[pthm-em-lienard-emitted-power]] are prescribed-source statements: they compute the emitted power of a stipulated worldline at a stipulated emission event and determine no worldline evolution, no back-reaction and no coordinate-time rate; they are not a mechanical model.

(d) [Deferred, not claimed] Extended-charge or finite-size regularizations of the self-field, the well-posedness of any self-force dynamics, runaway solutions and an electromagnetic derivation of rest mass are outside this page and are neither stated nor proved here. No experiment, measurement, statistical estimate or precision is reported or implied, and nothing in this remark is a refutation of any physical theory.
