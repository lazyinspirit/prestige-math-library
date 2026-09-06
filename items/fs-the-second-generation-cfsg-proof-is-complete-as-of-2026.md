---
id: fs-the-second-generation-cfsg-proof-is-complete-as-of-2026
kind: false-statement
title: "The second-generation CFSG proof is complete as of 2026"
status: published
origin: pipeline
deps: [rem-status-of-the-second-generation-proof]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "American Mathematical Society, The Classification of the Finite Simple Groups, Number 10"
      url: https://bookstore.ams.org/surv-40-10
    - title: "Capdeboscq, Henke, and Liebeck, Finite Groups, Fusion Systems and Applications, Oberwolfach Report 16/2025"
      url: https://ems.press/content/serial-article-files/51362?nt=1
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

The second-generation proof of the classification of finite simple groups is
complete as of 2026.

## Facts & Assumptions

**Given:** Use the official AMS Number 10 record cited above, as checked on 2026-08-14.

[L1] The 2025 Oberwolfach report, organized in part by GLS collaborator Inna
Capdeboscq, describes the GLS project as ongoing and nearing completion.

[L2] The current AMS catalog describes Number 10 as the tenth volume in a
series whose aim is to provide a complete proof and says that Number 10
completes only the bicharacteristic-type identification begun in Number 9.

## Refutation

**Proof technique:** direct.

1.1 The Oberwolfach report explicitly records an ongoing project, and the current AMS catalog records only the more limited completion accomplished by Number 10. [L1, L2, given]

2.1 Thus the cited status evidence supports an ongoing programme, contradicting the claimed completion as of the design check. [step 1.1, contradiction] ∎
