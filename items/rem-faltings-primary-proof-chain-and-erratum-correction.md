---
id: rem-faltings-primary-proof-chain-and-erratum-correction
kind: remark
title: "Primary proof chain and the 1984 correction to the bounded-height argument"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 24
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - lem-faltings-height-sequence-eventually-stationary
  - thm-faltings-finiteness-within-fixed-isogeny-class
  - thm-faltings-height-comparison-with-modular-height
  - thm-faltings-isogeny-finiteness-theorem
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "G. Faltings, “Endlichkeitssätze für abelsche Varietäten über Zahlkörpern,” §§2, 5–6; “Erratum,” p. 381"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf"
      locator: "Proof-chain locations and the 1984 correction to §4, Theorem 2."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC, DC, CC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Remark

Assume AC, DC, and CC. The unrestricted bounded-stable-height assertion is false because infinitely many quadratic twists can have one geometric isomorphism class. The bounded-height theorem used in the source is restricted to semistable principally polarized abelian varieties over the fixed number field; a fixed-good-reduction-set bounded-height finiteness theorem is another meaningful target, but neither theorem is proved by this remark. The fixed-$S$ finiteness route separates finiteness of isogeny classes from finiteness of isomorphism classes within each isogeny class, always retaining the same good-reduction restriction. Faltings's 1984 erratum corrects the quotient-height step used in the Tate-module argument: the sequence of quotient heights is eventually stationary after shifting the initial variety, and need not be stationary from its original index.

## Remark references

[[thm-faltings-isogeny-finiteness-theorem]]

[[thm-faltings-finiteness-within-fixed-isogeny-class]]

[[lem-faltings-height-sequence-eventually-stationary]]

[Faltings 1983, §§2, 5–6](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf)

[Faltings 1984 erratum, p. 381](https://gdz.sub.uni-goettingen.de/id/PPN356556735_0075?tify=%7B%22view%22:%22info%22,%22pages%22:%5B383%5D%7D)

## Facts & Assumptions

**Given:** AC, DC, CC; the source formulations of the finite-isogeny-class and fixed-isogeny-class assertions and the 1984 correction to the quotient-height assertion. Their local proof holds remain in force; the refuted unrestricted bounded-height assertion is not a Given.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A2] [[def-dependent-choice]]: DC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A3] [[def-countable-choice]]: CC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[F1] [[lem-faltings-height-sequence-eventually-stationary]]: the corrected statement is eventual stationarity, not equality with the initial height.

[F2] [[thm-faltings-isogeny-finiteness-theorem]]: good reduction outside fixed $S$ gives finitely many isogeny classes.

[F3] [[thm-faltings-finiteness-within-fixed-isogeny-class]]: each such class has finitely many isomorphism classes subject to the same reduction condition.

## Proof status

This is a source-route and correction remark, not an additional theorem. The cited primary text and erratum were inspected directly. The note does not assert that any upstream proof is accepted or proof-closed. In particular, the preserved unrestricted bounded-stable-height Statement is refuted by quadratic twists, and the preserved Raynaud Statement has the coefficient-type and ramified-base defects recorded in those items’ Proof status. They cannot serve as logical suppliers. The two new conditional model/cotangent interfaces do not repair these false Statements, the semistable model/base-change geometry, eventual stationarity, or the full fixed-$S$ finiteness chain.
