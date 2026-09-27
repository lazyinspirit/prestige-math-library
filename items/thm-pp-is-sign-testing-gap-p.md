---
id: thm-pp-is-sign-testing-gap-p
kind: theorem
title: "PP is strict sign testing for Gap-P"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sharpp-and-gap-p-functions, def-rp-corp-zpp-bpp-and-pp]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (thm-pp-is-sign-testing-gap-p). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

A language $L$ lies in $\mathrm{PP}$ if and only if there is a
$g\in\mathrm{GapP}$ such that
$$x\in L\iff g(x)>0.$$

## Facts & Assumptions

**Given:** the $\mathrm{PP}$ and $\mathrm{GapP}$ conventions.

[L1] A GapP value is the difference between accepting and rejecting path counts, by [[def-sharpp-and-gap-p-functions]].

[L2] PP uses a strict acceptance-probability threshold of $1/2$, by [[def-rp-corp-zpp-bpp-and-pp]].

## Proof

**Proof technique:** direct.

1.1 Let a PP machine use exactly $p(|x|)$ random bits, padding unused bits if necessary, and let $a(x)$ and $r(x)$ be its accepting and rejecting choice-string counts. Then $g=a-r$ is in GapP by [L1], and $g(x)>0$ exactly when $a(x)>2^{p(|x|)-1}$, the strict PP condition in [L2]. [L1, L2, given]

1.2 Conversely take a GapP machine for $g$, let $f$ count its accepting paths, and let $h$ count its rejecting paths (the latter is a #P count after exchanging final labels), so $g=f-h$. Choose a common polynomial bound $p(|x|)$ on the number of binary choices. Encode each original path by its actual choice bits followed by only zeroes to length $p$; reject a nonzero unused suffix. This gives exactly one full-length encoding per original path and does not multiply either count when a branch halts early. Each normalized machine has $2^p$ total full-length paths. Construct a machine with one leading choice: on branch $0$ run the machine for $f$ with its labels unchanged; on branch $1$ run the machine for $h$ with accept and reject exchanged. It has $f(x)+(2^p-h(x))$ accepting paths out of $2^{p+1}$, a strict majority exactly when $f(x)-h(x)>0$. [L1, L2, given, construct]

2.1 Steps 1.1 and 1.2 prove the two implications, including the strict zero boundary. [step 1.1, step 1.2] ∎
