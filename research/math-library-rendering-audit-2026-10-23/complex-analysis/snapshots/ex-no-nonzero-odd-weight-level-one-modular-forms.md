---
id: ex-no-nonzero-odd-weight-level-one-modular-forms
kind: example
title: "There are no nonzero odd-weight level-one modular forms"
status: published
origin: pipeline
deps:
  - def-level-one-modular-form-and-cusp-form
  - def-modular-group-action-on-the-upper-half-plane
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for ex-no-nonzero-odd-weight-level-one-modular-forms and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-21; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"ac0e9d10bd1de52b386748e94fde38c9fe9d6fd59573b4a85421e6b361b99c34","evidence":["research/frontier-38-owner-30-reader-21.md","research/frontier-38-owner-30-reader-findings-21.json","research/frontier-38-owner-30-dispatch/reader-reader-21.result.json","research/frontier-38-owner-30-step5-hash-21-post-5a.json","research/frontier-38-owner-30-alpha-batch-21-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-21.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/ex-no-nonzero-odd-weight-level-one-modular-forms.md","historical_raw_sha256":"8328dd046f6eca685db72bc12f14504638dd4965aa9196ffd5cdfdcdeb18d272","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:48:06.077Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Section 1.2, printed p. 5: -I forces every odd-weight form to vanish."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Definition 4.5, printed p. 49: the weight-2k convention; the odd-weight assertion is in Zagier p. 5."
---

## Example

If $k$ is odd then $M_k=\{0\}$ and $S_k=\{0\}$.

## Facts & Assumptions

**Given:** An odd integer $k$ and an $f\in M_k$ ([[def-level-one-modular-form-and-cusp-form]]).

[F1] $-I\in SL_2(\mathbb Z)$ acts on $\mathfrak H$ as the identity and has $c=0$, $d=-1$, hence factor $(c\tau+d)^k=(-1)^k$ in the weight-$k$ transformation law ([[def-modular-group-action-on-the-upper-half-plane]], [[def-level-one-modular-form-and-cusp-form]]).

## Verification

1.1 Applying the modular transformation law to $\gamma=-I$ gives $f(\tau)=(-1)^kf(\tau)=-f(\tau)$ for every $\tau\in\mathfrak H$, since $k$ is odd. [F1, given, algebra]

2.1 Hence $2f(\tau)=0$ for every $\tau$, so $f=0$; thus $M_k=\{0\}$ for odd $k$. Since a cusp form of weight $k$ is in particular a modular form of weight $k$, also $S_k=\{0\}$. [step 1.1, given, algebra] ∎
