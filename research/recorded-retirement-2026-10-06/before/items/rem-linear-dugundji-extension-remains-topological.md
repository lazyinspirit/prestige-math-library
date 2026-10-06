---
id: rem-linear-dugundji-extension-remains-topological
kind: remark
title: Linear Dugundji extension remains topological
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
proved_here: false
deps: []
justified_by: []
external_refs: [rem-dugundji-extension-linear]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  sources_checked:
    date: 2026-09-22
    scope: citations
    by: owner-audit
  precheck: n/a
sources:
  references:
    - title: "J. Dugundji, An extension of Tietze's theorem, Pacific J. Math. 1 (1951) — §4.3, pp. 358–360, and Theorem 5.1, p. 360; the stronger compact-open operator claim is not certified by these passages"
      url: "https://msp.org/pjm/1951/1-3/pjm-v1-n3-p04-s.pdf"
external_dependency:
  source_url: "https://msp.org/pjm/1951/1-3/pjm-v1-n3-p04-s.pdf"
  exact_statement: "For a metric space X, a nonempty closed subset A ⊆ X and a locally convex topological vector space L, every continuous map f : A → L admits a continuous extension F : X → L with F[X] ⊆ conv(f[A]). The intended stronger claim in the catalogue adds that the extension can be chosen by a single linear operator C(A,L) → C(X,L) continuous for uniform convergence on compact sets."
  local_proof_attempt: "The inspected sections of the original paper prove the convex-combination extension formula and the bounded simultaneous scalar extension in the supremum norm; they do not establish the stronger compact-open continuous linear-operator formulation. No local proof of the stronger claim is attempted here, and the metric paracompactness and uniform-partition choices it would need are not costed on this page. The catalogue target [[rem-dugundji-extension-linear]] remains Recorded."
  necessity: "None for this pair: the remark is orientation only and is not used in any proof, dependency or well-definedness justification here."
---

## Statement

For a metric space $X$, a nonempty closed subset $A \subseteq X$ and a locally
convex topological vector space $L$, every continuous $f : A \to L$ has a
continuous extension $F : X \to L$ with image contained in the convex hull of
$f[A]$ (the convex-valued Dugundji extension theorem). The catalogue's intended
stronger claim, that the extension can be chosen by a single **linear** operator
$C(A,L) \to C(X,L)$ continuous for uniform convergence on compact sets, is
**preserved but not established here**.

No metamathematical independence result is a proof supplier for either form; the
original paper's arguments cover the convex-valued extension and the bounded
scalar supremum-norm version, not the compact-open operator statement. The draft
target is [[rem-dugundji-extension-linear]].

## Remarks

- **Orientation only.** Nothing on this page depends on this remark, and the topological extension theory is not part of the Gelfand proof spine.
- **Open obligation for the catalogue.** Either obtain a complete source or proof of the compact-open operator form, or narrow the catalogue target to the proved formulation; the choice cost of the metric paracompactness input must be recorded in that repair.
