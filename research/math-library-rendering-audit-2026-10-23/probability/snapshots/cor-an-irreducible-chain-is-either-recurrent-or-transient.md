---
id: cor-an-irreducible-chain-is-either-recurrent-or-transient
kind: corollary
title: "Irreducible recurrence/transience dichotomy"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-accessibility-communication-and-irreducibility
  - def-measure-kernel-and-probability-kernel
  - def-recurrent-and-transient-state
  - thm-recurrence-and-transience-are-class-properties
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "§5.3, Theorem 5.3.2 and its complete proof, printed p. 282/PDF p. 289 (official PDF parser lines 19113–19149), proves recurrence transfer along positive-probability accessibility and certain reverse hitting. Example 5.3.6 states the irreducible-chain dichotomy for infinite state spaces, printed p. 284/PDF p. 291 (official parser lines 19241–19243). The local proof uses the completed class-property theorem and the exhaustive recurrence/transience definition, rather than treating the source statement as a proof."
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume AC. Let the countable-state chain, transition matrix, fixed-start
canonical laws, and positive-time recurrence convention be as in
[[thm-recurrence-and-transience-are-class-properties]]. Irreducibility means
that every pair of states communicates ([[def-accessibility-communication-and-irreducibility]]).
If $E=\varnothing$, the universal conclusions below are vacuous. Otherwise,
if the chain is irreducible, then either every state is recurrent or every
state is transient.

## Facts & Assumptions

**Given:** AC and a chain in the countable-state setup of the class-property theorem.

[A1] AC supplies the fixed-start canonical laws and is an explicit hypothesis of the class-property theorem used here. ([[def-axiom-of-choice]])

[F1] Irreducibility means $x\leftrightarrow y$ for every pair $x,y\in E$. ([[def-accessibility-communication-and-irreducibility]])

[F2] Communicating states have the same recurrence status. In particular, recurrence of one state transfers to every state that communicates with it. ([[thm-recurrence-and-transience-are-class-properties]])

[F3] A state is recurrent when its positive-time return probability is one and transient when that probability is less than one; these alternatives exhaust all states because the probability lies in $[0,1]$. ([[def-recurrent-and-transient-state]])

[F4] Every probability-kernel row has total mass one. On a one-state space, this forces the sole transition probability to equal one. ([[def-measure-kernel-and-probability-kernel]])

## Proof

**Proof technique:** in a nonempty irreducible chain, fix one state and use the class-property theorem to transfer its exhaustive recurrence/transience case to every state.

1.1 If $E=\varnothing$, there are no states to classify. Both universal conclusions in the disjunction hold vacuously. [given]

1.2 Now suppose $E\ne\varnothing$ and fix one state $x\in E$. For every $y\in E$, irreducibility [F1] gives $x\leftrightarrow y$. This fixes one witness state only; no family of choices is made. [F1, given]

2.1 If $x$ is recurrent, [F2] and step 1.2 imply that every $y\in E$ is recurrent. Hence the first alternative holds. [F2, step 1.2, given]

2.2 If $x$ is not recurrent, consider any $y\in E$. If $y$ were recurrent, [F2] and step 1.2 would imply that $x$ is recurrent, a contradiction. Thus no state is recurrent. By [F3], every state is transient, so the second alternative holds. [F2, F3, step 1.2, given]

3.1 By [F3], the fixed state $x$ is either recurrent or transient. Step 2.1 handles the recurrent case and step 2.2 handles the transient case. Therefore one of the two asserted universal alternatives always holds. [F3, step 2.1, step 2.2, given]

4.1 If $E$ has one state $x$, [F4] gives $p(x,x)=1$, so its positive-time return probability is one. If $E$ has more than one state, an absorbing row at any state would make the chain reducible; zero one-step weights are allowed, since irreducibility requires communication by some positive-probability finite path, not a positive one-step transition. The zero-step accessibility $x\to x$ alone does not establish recurrence, which requires a positive-time return [F3]. For a deterministic transition map on a nonempty irreducible state space with more than one state, fix $x$ and choose $y\ne x$. The unique forward orbit from $x$ reaches $y$ and then returns to $x$ by irreducibility. It therefore contains a finite cycle through $x$; every state is reachable from $x$, so every state lies on this cycle and returns to itself. Steps 2.1 and 2.2 prove the forward and reverse uses of the class-property equivalence. AC [A1] is inherited by the canonical laws and class-property theorem; fixing one state in step 1.2 uses no choice principle. [A1, F1, F2, F3, F4, step 1.2, step 2.1, step 2.2, given] ∎

## Source notes

Durrett, *Probability: Theory and Examples*, 5th ed., §5.3, Theorem 5.3.2 and its complete proof, printed p. 282/PDF p. 289 (official PDF parser lines 19113–19149), proves the stronger countable-chain statement that recurrence is contagious along accessibility and that the reverse hitting probability is one. Example 5.3.6 explicitly says that an infinite irreducible chain is either wholly recurrent or wholly transient, printed p. 284/PDF p. 291 (official parser lines 19241–19243). The example alone has an infinite-state hypothesis; this item's finite and empty cases are handled locally. The proof here uses the pair's completed class-property theorem and the definition that recurrence and transience exhaust the return-probability alternatives.
