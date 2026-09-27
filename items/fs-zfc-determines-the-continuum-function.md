---
id: fs-zfc-determines-the-continuum-function
kind: false-statement
title: "FALSE: ZFC fixes the value of $2^{\\kappa}$ for every infinite regular $\\kappa$"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-higher-cohen-forcing-violates-gch, thm-formal-consistency-of-zfc-plus-gch-from-zf, cor-positive-relative-consistency-of-ch-and-gch, cor-formal-negative-consistency-of-ch-and-gch, def-axiom-of-choice, def-aleph-and-beth-hierarchies, def-cardinal, def-cardinal-arithmetic]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "T. Jech, Set Theory, Chapter 15 (Easton's theorem and the independence of the continuum function), printed pp.232-237"
      url: "https://doi.org/10.1007/978-3-662-22400-7"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

False claim: ZFC fixes the value of $2^{\kappa}$ for every infinite regular
cardinal $\kappa$; that is, the function $\kappa\mapsto2^{\kappa}$ on the
infinite regular cardinals is determined by the axioms of ZFC
([[def-cardinal]]).

The claim is refuted at the single regular cardinal $\kappa=\aleph_1$: the two
consistency pictures below, read externally in the finite-fragment sense, give
$2^{\aleph_1}=\aleph_2$ and $2^{\aleph_1}=\aleph_3$ respectively, and $\aleph_2$
and $\aleph_3$ are distinct cardinals
([[def-aleph-and-beth-hierarchies]]). What ZFC does prove is the necessary
constraints on the function — $\kappa<2^{\kappa}$ and
$\operatorname{cf}(2^{\kappa})>\kappa$ — and the refutation here concerns the
*value*, not those constraints.

## Facts & Assumptions

**Given:** The metatheoretic hypothesis that ZF is consistent, in the finite-fragment sense of [F1] and [F3], and the Axiom of Choice inside the forcing constructions of [F2].

[F1] A verified proof transformation establishes $\operatorname{Con}(\mathrm{ZF})\Rightarrow\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$ and $\operatorname{Con}(\mathrm{ZF})\Rightarrow\operatorname{Con}(\mathrm{ZFC}+\mathrm{CH})$, with no assumption of a transitive set model of ZF. ([[thm-formal-consistency-of-zfc-plus-gch-from-zf]], [[cor-positive-relative-consistency-of-ch-and-gch]])

[F2] In ZFC, if $\kappa$ is infinite regular and $\lambda>\kappa$ satisfies $2^{<\kappa}=\kappa$ and $\lambda^{\kappa}=\lambda$, then the forcing $\operatorname{Add}(\kappa,\lambda)$ preserves all cardinals and forces $2^{\kappa}=\lambda$; over a ground model of GCH, $\kappa=\aleph_1$ and $\lambda=\aleph_3$ satisfy these hypotheses and give a cardinal-preserving extension with CH and $2^{\aleph_1}=\aleph_3$. In particular a value $\lambda\ge\kappa^{++}$ is compatible with ZFC, while GCH asserts $2^{\kappa}=\kappa^{+}$. ([[thm-higher-cohen-forcing-violates-gch]], [[def-axiom-of-choice]])

[F3] Externally, $\operatorname{Con}(\mathrm{ZFC})$ implies $\operatorname{Con}(\mathrm{ZFC}+\neg\mathrm{CH})$ and $\operatorname{Con}(\mathrm{ZFC}+\neg\mathrm{GCH})$; the implication is a metatheorem obtained by applying a finite-fragment construction to any purported contradiction proof, and no PA proof of a uniform refutation transformer and no external transitive model is claimed. ([[cor-formal-negative-consistency-of-ch-and-gch]])

[F4] The aleph operation is strictly increasing, $\aleph_{\alpha+1}=\aleph_{\alpha}^{+}$ is the least cardinal strictly above $\aleph_\alpha$ and is the successor cardinal of $\aleph_\alpha$; every $\aleph_\alpha$ is an infinite cardinal, so $\aleph_2\ne\aleph_3$ and both exceed $\aleph_1$; in particular $\mathfrak c=2^{\aleph_0}$ is a cardinal. ([[def-aleph-and-beth-hierarchies]], [[def-cardinal-arithmetic]], [[def-cardinal]])

## Refutation

**Proof technique:** direct.

1.1 **First picture.** [F1] gives $\operatorname{Con}(\mathrm{ZF})\Rightarrow\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$ by a proof transformation, so the finite fragments of $\mathrm{ZFC}+\mathrm{GCH}$ are consistent whenever those of ZF are; in such a picture GCH holds, that is $2^{\kappa}=\kappa^{+}$ at every infinite cardinal $\kappa$, so at $\kappa=\aleph_1$ the value is $2^{\aleph_1}=\aleph_1^{+}=\aleph_2$. [F1, F2, F4]

1.2 **Second picture.** Over a ground model of ZFC+GCH the cardinal parameters $\kappa=\aleph_1$, $\lambda=\aleph_3$ satisfy the hypotheses of [F2], since $2^{<\aleph_1}=\aleph_1$ and $\aleph_3^{\aleph_1}=\aleph_3$ under GCH; the extension by $\operatorname{Add}(\aleph_1,\aleph_3)$ preserves all cardinals, keeps CH, and forces $2^{\aleph_1}=\aleph_3$. [F2, F4]

1.3 **Choice is used, and only where stated.** The forcing of the second picture is a ZFC construction: $\operatorname{Add}(\aleph_1,\aleph_3)$ and its cardinal-preservation proof use the Axiom of Choice, and the identification of cardinals with alephs uses it as well; the first picture's relative-consistency theorem is a syntactic transformation that needs no choice in the metatheory. [F1, F2, F4]

2.1 **The two pictures disagree.** One picture has $2^{\aleph_1}=\aleph_2$ and the other has $2^{\aleph_1}=\aleph_3$, and $\aleph_2\ne\aleph_3$ because the aleph operation is strictly increasing; so the value of $2^{\aleph_1}$ is not the same in all pictures of ZFC, and no single value of $2^{\aleph_1}$ is a theorem of ZFC. [step 1.1, step 1.2, F4]

3.1 By step 2.1 the claim is false at the regular cardinal $\aleph_1$, and by [F3] the negative consistency statements are exactly the kind of metatheorem that records such failures; nothing here infers the existence of an external transitive model from $\operatorname{Con}(\mathrm{ZFC})$, and no independence or completeness claim beyond the two pictures is made. ∎ [step 2.1, step 1.3, F3]
