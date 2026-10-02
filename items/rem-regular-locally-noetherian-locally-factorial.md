---
id: rem-regular-locally-noetherian-locally-factorial
kind: remark
title: "Regular locally noetherian locally factorial"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-locally-factorial-scheme
provenance:
  statement: literature-derived
  proof: not-applicable
proved_here: false
external_dependency:
  source_url: "https://stacks.math.columbia.edu/tag/0AG0"
  exact_statement: "Every regular local ring is a unique factorisation domain (Stacks Project, Algebra, Lemma 15.123.2), so every regular locally Noetherian scheme is locally factorial."
  local_proof_attempt: "A local proof would run the induction on the dimension of the regular local ring in which one shows that a minimal prime of a principal prime divisor is itself regular, using the Koszul complex and the Auslander-Buchsbaum-Serre theorem; the library has the DVR case in the height-one normal theorem but not the general regular-local-ring UFD statement, so the induction is not reproduced here."
  necessity: "Records the standard orientation fact that regularity is stronger than local factoriality, which is used to explain why smooth and regular schemes are the main examples to which the locally factorial isomorphism applies; no item on this page cites this remark and the isomorphism theorem assumes local factoriality as a hypothesis."
verification:
  precheck: n/a
sources:
  references:
    - title: "The Stacks Project, Algebra, Lemma 15.123.2 (tag 0AG0)"
      url: "https://stacks.math.columbia.edu/tag/0AG0"
---

## Remark

Every regular local Noetherian ring is a unique factorisation domain, and hence
every regular locally Noetherian scheme is locally factorial
([[def-locally-factorial-scheme]]). This is recorded here as an external
orientation fact with its source; the proof is not reproduced, and the
locally factorial isomorphism proved on this page assumes local factoriality
as a hypothesis rather than deriving it from regularity. In particular the
remark is not a supplier for any item of this page. Normality alone does not
imply local factoriality: the singular quadric cone is normal but not locally
factorial, as shown on the examples companion of this page.
