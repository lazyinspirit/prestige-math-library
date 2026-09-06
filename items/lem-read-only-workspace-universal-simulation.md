---
id: lem-read-only-workspace-universal-simulation
kind: lemma
title: "Universal simulation preserves read-only work space up to constants"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-read-only-input-workspace-classes, lem-effective-enumeration-of-clocked-machines]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Remark 4.2"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $z=\langle M,x\rangle$ have total length $n$, with $M$ a deterministic
read-only-input machine in the model of [[def-read-only-input-workspace-classes]].
For each fixed $M$, a universal simulator supplied with a binary integer cap
$b=s(n)$ faithfully simulates $M(x)$ until it halts or would exceed $b$
visited work cells; in the latter case it rejects. It uses
$O_M(s(n)+\log(n+2))$ work space, hence $O_M(s(n))$ when
$\log(n+2)=O(s(n))$. A run that stays within the cap but loops need not halt.

For varying descriptions, a uniform $O(s(n)+\log(n+2))$ bound is instead
obtained by capping the size of the simulator's entire encoded configuration
and scratch storage at $s(n)$, rejecting before that storage cap is exceeded.
Faithfulness in this version is asserted only for computations whose encoded
storage fits that cap. The two caps need not have the same numerical value:
encoding constants may depend on $M$'s alphabet and tape count.

## Facts & Assumptions

**Given:** the encoded pair and supplied binary cap, stored in charged work
space; use either the fixed-$M$ visited-cell cap or the encoded-storage cap
as specified above.

## Proof

**Proof technique:** direct.

1.1 Read the machine and input as two delimited regions of the one read-only input $z$. Store their endpoints and the simulated input-head address in $O(\log(n+2))$ bits; the simulated input is endmarked and confined to its field. The effective finite-table coding underlying [[lem-effective-enumeration-of-clocked-machines]] applies also with one input tape designated read-only. Table fields and transition entries can be found by rescanning rather than copying the program. [given, construct]

2.1 For fixed $M$, store the work tapes as finite words with marked heads and interval endpoints. Its alphabet and tape count are constants, so a run using at most $b$ work cells has an encoding of length $O_M(b+1)$. Work-head addresses and the visited-cell counter add $O_M(\log(b+2))$ bits, and the finite-control encoding is constant. Before extending a visited interval, test the cell cap and reject on overflow, including an initial overflow. A binary cap itself uses $O(\log(b+2))$ bits. Thus the work bound is $O_M(b+\log(n+2))$. [step 1.1, construct]

3.1 Alternatively, count actual visited work cells in the simulator's binary representation, including configuration, cap, and scratch storage; enforce the encoded-storage limit before each visit to a new work cell. The input-field addresses and allocation counter need only $O(\log(n+2)+\log(b+2))$ auxiliary bits. Program lookup can compare indexed table fields by repeated scans in $O(\log(n+2))$ space. Reject malformed codes or an overflow. This gives the uniform bound, with faithful transition simulation whenever all required storage fits. Large alphabets or many tapes may trigger this guard even if the simulated cell count is at most $b$. [step 2.1, construct]

4.1 In either version, each completed simulated transition is exactly the transition selected by the encoded table, so induction gives faithfulness up to halting or overflow. No configuration-time counter was introduced, and thus within-cap loops are not falsely declared halting. The logarithmic floor absorbs the address term in each respective bound. [step 3.1, algebra] ∎
