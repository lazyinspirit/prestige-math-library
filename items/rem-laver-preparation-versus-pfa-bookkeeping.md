---
id: rem-laver-preparation-versus-pfa-bookkeeping
kind: remark
title: "Laver preparation versus PFA bookkeeping"
status: draft
origin: pipeline
deps: [def-lc-laver-anticipation-function, thm-lc-laver-function-existence, thm-lc-supercompact-preparation-interface, def-axiom-of-choice]
justified_by: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Cummings, Iterated Forcing and Elementary Embeddings, Chapter 24"
      url: https://www.math.cmu.edu/users/jcumming/papers/repaper_finished_june_2008.pdf
---

Laver preparation and the standard forcing of PFA share one input but have
different jobs. A Laver anticipation function $\ell:\kappa\to V_\kappa$ can
make a chosen set appear as $j(\ell)(\kappa)$ for a suitable supercompactness
embedding. Its existence from a supercompact cardinal is the content of
[[thm-lc-laver-function-existence]], with the exact anticipation convention in
[[def-lc-laver-anticipation-function]].

The **Laver preparation** uses that function in an iteration designed to make
$\kappa$ indestructibly supercompact under subsequent
$<\kappa$-directed-closed set forcing, exactly within the class stated by
[[thm-lc-supercompact-preparation-interface]]. Its conclusion does not cover
arbitrary proper forcing.

The **PFA bookkeeping iteration** instead uses $\ell$ to anticipate names for
proper partial orders and places each valid guess into a countable-support
iteration. The anticipated posets need not be directed closed. The final
embedding argument uses $j(\ell)(\kappa)$ to expose the requested proper forcing
as the next factor of $j(P_\kappa)$; it does not appeal to prior
indestructibility. Indeed, the PFA iteration deliberately collapses cardinals
so that the former supercompact $\kappa$ becomes $\omega_2$, and therefore does
not preserve its supercompactness.

Thus the preparation theorem is comparison material, not a load-bearing
premise of the PFA proof. No implication saying that proper forcing preserves a
supercompact cardinal is asserted. All existence statements above retain their
ZFC and supercompact hypotheses; ambient AC is supplied by
[[def-axiom-of-choice]], and this comparison makes no fresh selection.
