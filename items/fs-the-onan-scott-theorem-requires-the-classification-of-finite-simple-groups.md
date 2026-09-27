---
id: fs-the-onan-scott-theorem-requires-the-classification-of-finite-simple-groups
kind: false-statement
title: "FALSE: the cited LPS O'Nan-Scott proof uses no CFSG consequence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Liebeck, Praeger and Saxl, On the O'Nan-Scott Theorem for Finite Primitive Permutation Groups, J. Austral. Math. Soc. Ser. A 44 (1988), 389–396"
      url: "https://doi.org/10.1017/S144678870003216X"
    - title: "Stephen D. Smith, Applying the Classification of Finite Simple Groups: A User's Guide, §1.5 and §6.1"
      url: "https://homepages.math.uic.edu/~smiths/book.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-06-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

**False claim:** The cited Liebeck–Praeger–Saxl (LPS) proof of the five-type
O'Nan–Scott classification uses no consequence of the classification of finite
simple groups (CFSG).

## Facts & Assumptions

**Given:** The proof in Liebeck–Praeger–Saxl, *On the O'Nan–Scott Theorem for
Finite Primitive Permutation Groups* (1988), pp. 389–396.

[F1] In Case 2(a), on printed p. 394, LPS let $Y$ be the kernel of the action
on the simple direct factors. They say that $Y_\alpha$ embeds in a product of
outer automorphism groups and is therefore soluble "by the Schreier
'Conjecture'". They then use solubility in the commutator argument proving
$Y=M$.

[F2] On printed p. 395, in the simple-socle case with trivial socle point
stabilizer, LPS again say that $G_\alpha$ is soluble "by the Schreier
'Conjecture'". They use this to choose a minimal normal subgroup $Q$ of
$G_\alpha$ which is elementary abelian, and continue the exclusion argument on
printed pp. 395–396.

[F3] The Schreier theorem says that the outer automorphism group of every
finite nonabelian simple group is soluble. Smith, *Applying the Classification
of Finite Simple Groups*, Theorem 1.5.1 (printed p. 23), identifies it as a
consequence of CFSG.

## Refutation

**Proof technique:** direct.

1.1 The cited LPS proof invokes Schreier explicitly in two branches. In Case 2(a), the invoked solubility is used to prove $Y=M$; in the simple-socle branch, it supplies the elementary-abelian minimal normal subgroup used in the subsequent argument. These are proof steps, not merely remarks about later refinements. [F1, F2]

2.1 Schreier is a CFSG consequence. Thus this specific five-type proof does use a CFSG consequence, refuting the stated claim. This establishes neither that CFSG is logically necessary for the theorem nor that another proof could not avoid it. [F3, step 1.1] ∎
