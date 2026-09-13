---
id: fs-the-universal-enveloping-algebra-is-commutative
kind: false-statement
title: An enveloping algebra need not be commutative
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [lem-the-canonical-map-to-the-enveloping-algebra-is-a-lie-algebra-homomorphism-into-the-commutator-algebra, cor-the-canonical-map-from-a-lie-algebra-to-its-enveloping-algebra-is-injective]
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §§12.1 and 13.1, printed pp. 69–70 and 74–75"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
---

## Statement

$U(\mathfrak g)$ is commutative for every Lie algebra $\mathfrak g$.

## Facts & Assumptions

**Given:** The asserted universal commutativity.

[L1] In $U(\mathfrak g)$, the commutator of canonical images is the image of
the Lie bracket
([[lem-the-canonical-map-to-the-enveloping-algebra-is-a-lie-algebra-homomorphism-into-the-commutator-algebra]]).

[L2] PBW makes the canonical map injective when a basis is supplied
([[cor-the-canonical-map-from-a-lie-algebra-to-its-enveloping-algebra-is-injective]]).

## Refutation

**Proof technique:** direct counterexample.

1.1 Let $\mathfrak g$ have basis $h,e$ with $[h,e]=e$, for example the matrix Lie algebra used in the preceding false statement. By [L1], $\iota_{\mathfrak g}(h)\iota_{\mathfrak g}(e)-\iota_{\mathfrak g}(e)\iota_{\mathfrak g}(h)=\iota_{\mathfrak g}(e)$. [construct, L1]

2.1 The supplied basis lets [L2] show $\iota_{\mathfrak g}(e)\ne0$. Thus the two elements $\iota_{\mathfrak g}(h)$ and $\iota_{\mathfrak g}(e)$ do not commute in $U(\mathfrak g)$, refuting the statement. [step 1.1, L2] ∎
