# Frontier-22 published active-martingale integral propagation audit

Date: 2026-09-11

## Scope and deduplication

This bounded follow-up reads the exact published convergence and conditional-
expectation suppliers used by the active martingale drafts: Fatou, reverse
Fatou, the integral triangle inequality, dominated convergence, conditioning a
known or independent variable, and taking out a measurable factor. Complete
proofs and every load-bearing integral clause were read. This is not an audit of
all published martingale or convergence results.

Before classification, the whole canonical ledger and bounded index were
searched by each exact ID, title, aliases, the Fatou/DCT mechanisms, and the
conditional-expectation, MCT, `L1` and nonnegative-integral supplier IDs. Five
items had exactly one bounded-clear row and Fatou had exactly one U-P row. They
move rather than duplicate, and their prior receipts remain cited in the new
rows. No published item or workflow state was edited.

## Pending repair and exact propagation

All six statements and their visible mathematical arguments are sound after the
already recorded finite zero-complement repair to the arbitrary simple/
nonnegative integral. Their current proofs directly use affected MCT,
nonnegative additivity/order, finite `L1` linearity, null integrals or the
conditional-expectation class. No new theorem pair is required.

| Item | SHA-256 | Exact affected clause and repair |
|---|---|---|
| `thm-fatou-lemma` | `de53d43d4c80a50b866b53b05c6f86895192f66ce1fbe681f7b6511f9be93a04` | Proof 2.1 invokes the A-P ordinary MCT and nonnegative order clauses. It also places `[step 1.1, L2, L3]` and the proof terminator before the displayed equality and concluding inequalities; move them to the actual end of step 2.1. U-P to A-P. |
| `cor-reverse-fatou-lemma-under-an-integrable-majorant` | `ea12e1e5ba7bc25e44d4c54648082149c86409ec84060d46a252b8b99325166c` | Proofs 2.1--4.1 use the affected Fatou, nonnegative additivity/order and MCT clauses. The truncation ensures every subtraction is finite, so the argument is sound after repair. Bounded clear to A-P. |
| `thm-integral-triangle-inequality` | `d92eec0a9caa63080772603781ca3df51787f8137f9ebe89f451a3937b9f1e6d` | Both real and complex cases use the affected real/complex integral definition, finite `L1` linearity and nonnegative order. The phase choice is deterministic and the proof is otherwise sound. Bounded clear to A-P. |
| `thm-dominated-convergence` | `6503c37b5ff4f446c16408cdd17ef73d0c581d26e7f944edcabda07b4182f17a` | Proofs 1.1--3.1 use affected reverse Fatou, integrability, `L1` linearity, triangle, nonnegative additivity/order, null-integral and finite-ae clauses. Its exceptional-set reduction and convergence argument remain valid after the common repair. Bounded clear to A-P. |
| `lem-conditioning-a-known-variable-and-an-independent-variable` | `5209ff5b8bd9530c73c74bcb41d2b4fac2661540c3fb83bdf420234659569cfd` | The known-variable clause directly uses the affected conditional class and uniqueness. The independence clause passes from simple functions with affected MCT/`L1` linearity and then returns to that class. Explicit AC already covers existence. Bounded clear to A-P. |
| `thm-taking-out-what-is-known` | `3fd6ecb360179202a6ea1462d410fb4e1a88ea3b22b64b845fc26222eafbc245` | Indicator/simple testing uses the affected conditional class, algebra and uniqueness; bounded and unbounded limits use affected DCT/MCT. The absolute-product estimate is correct and makes the final signed truncation finite. Bounded clear to A-P. |

## Frontier impact and limits

Root was notified immediately. The active martingale-difference correspondence
uses the known/independent-variable lemma. Orthogonality and predictable-
transform work use taking out what is known. These formulas can be supplied by
the same local or upstream integral repair already needed by the frontier; this
batch finds no false martingale conclusion and no new pair.

No external source retrieval was needed because the issue is an exact local
proof/dependency path. This audit does not claim to cover every downstream DCT
or conditional-expectation consumer.
