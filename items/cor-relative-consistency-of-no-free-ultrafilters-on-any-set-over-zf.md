---
id: cor-relative-consistency-of-no-free-ultrafilters-on-any-set-over-zf
kind: corollary
title: Relative consistency of no free ultrafilters on any set over ZF
status: published
origin: pipeline
deps: [lem-blass-ultrafilter-free-model-is-finitely-formalizable, thm-formal-consistency-of-zfc-plus-gch-from-zf]
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "A. Blass, A model without ultrafilters, Bull. Acad. Polon. Sci. 25 (1977), 329–331; primary article not recovered", url: "https://zbmath.org/?q=an:0365.02054"}
    - {title: "Yair Hayut and Asaf Karagila, Spectra of uniformity, discussion and Proposition 2.3, printed pp. 288–289", url: "https://cmuc.karlin.mff.cuni.cz/pdf/cmuc1902/haykara.pdf"}
---

## Statement

If ZF is consistent, then ZF is consistent with the assertion that every
ultrafilter on every set is principal.

## Facts & Assumptions

**Given:** $\operatorname{Con}(\mathrm{ZF})$ for the fixed formal theories.
This is a syntactic consistency hypothesis, not a set-model or transitive-model
hypothesis.

[F1] [[lem-blass-ultrafilter-free-model-is-finitely-formalizable]] proves for
every externally fixed finite target fragment that a suitable finite ZFC
source proves the existence of a set model of that fragment.

[F2] [[thm-formal-consistency-of-zfc-plus-gch-from-zf]] proves
$\operatorname{Con}(\mathrm{ZF})\to
\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$ by a verified proof
translation and does not assume a transitive set model.

## Proof

**Proof technique:** contradiction from the finite support of a formal refutation.

1.1 By F2, the hypothesis gives $\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$. Suppose for contradiction that the target theory $T=\mathrm{ZF}+\text{"every ultrafilter on every set is principal"}$ is inconsistent. One formal refutation is a finite sequence and therefore uses only a finite list $\Delta$ of ZF axiom instances together with the displayed extra sentence. [F2, assume-contra]

2.1 Apply F1 to this exact external $\Delta$. The finite ZFC source isolated there, and hence ZFC+GCH, proves that a set structure satisfies every sentence used in the alleged refutation. The fixed first-order soundness induction for that finite derivation would then make ZFC+GCH prove that the structure satisfies a contradiction; equality logic proves that no structure does. This contradicts step 1.1. [F1, step 1.1, discharge-contradiction]

3.1 Consequently $T$ is consistent. The empty-proof and zero-axiom cases cannot be refutations because no last contradiction line is present; a one-line alleged refutation is covered by the same soundness check. The argument uses only the finite support of one hypothetical proof. It invokes neither semantic completeness nor a countable transitive model of full ZF, and it concludes only conditional syntactic consistency. [step 1.1, step 2.1, discharge-contradiction: step 1.1] ∎
