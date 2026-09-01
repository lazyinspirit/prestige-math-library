---
id: thm-machine-acceptance-is-recognizable
kind: theorem
title: "The Turing-machine acceptance problem is recognizable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-turing-machine-acceptance-problem, def-effective-encoding-of-turing-machines, lem-step-by-step-interpreter-for-machine-codes, thm-existence-of-a-universal-turing-machine, prop-machine-descriptions-form-a-decidable-language, def-decidable-and-recognizable-language]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "EECS 376 Course Notes, Part 6: Computability"
      url: "https://eecs376.github.io/notes/computability.html"
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
---

## Statement

The language $A_{TM}$ of [[def-turing-machine-acceptance-problem]] is
recognizable.

## Facts & Assumptions

**Given:** The coded language $A_{TM}$.

[L1] A binary word lies in $A_{TM}$ exactly when it has the form $\langle\ulcorner M\urcorner,\widehat w\rangle$ for some coded deterministic one-tape Turing machine $M$ and some input word $w$ that $M$ accepts, by [[def-turing-machine-acceptance-problem]].

[L2] The chosen machine encoding has a total decoder that either reconstructs the unique coded machine or reports malformed input, by [[def-effective-encoding-of-turing-machines]].

[L3] There is a deterministic one-tape interpreter that, from a valid pair consisting of a machine code and a configuration code, returns the same configuration code in the halting case and the unique one-step successor in the nonhalting case, by [[lem-step-by-step-interpreter-for-machine-codes]].

[L4] The well-formed machine-description language is decidable, by [[prop-machine-descriptions-form-a-decidable-language]].

[L5] A language is recognizable when some deterministic Turing machine accepts exactly its members, while nonmembers may be rejected or may diverge, by [[def-decidable-and-recognizable-language]].

## Proof

**Proof technique:** direct.

1.1 Build a deterministic one-tape machine $R$ that, on input $z$, first parses $z$ as a candidate pair $\langle x,y\rangle$. If the pair parse fails, it rejects. It next runs the decider from [L4] on $x$; if $x$ is not a well-formed machine code, it rejects. If $x$ is valid, it uses [L2] to recover the coded machine $M=(m,s,n,\tau)$. It then parses $y$ as a candidate word code $c(\operatorname{bin}(\ell))c(\operatorname{bin}(a_1))\cdots c(\operatorname{bin}(a_\ell))$, rejects if that parse fails, and also rejects if some recovered symbol $a_i$ lies outside the input alphabet $\Sigma_s=\{1,\dots,s\}$. From the recovered word $w=a_1\cdots a_\ell$, the machine writes the canonical initial configuration code of $M$ on input $w$. [L1, L2, L4, given, construct]

2.1 The machine $R$ now repeatedly invokes the one-step interpreter from [L3] on the pair consisting of the recovered code $x=\ulcorner M\urcorner$ and the current configuration code. After each return, it reads the decoded state component of that configuration code. If the state is accepting, $R$ accepts. If the state is rejecting, $R$ rejects. Otherwise it feeds the returned successor configuration back into the next interpreter call. [L3, step 1.1, construct]

3.1 By [L3], each iteration in step 2.1 maintains exactly the current configuration of $M$ on $w$. Therefore $R$ accepts precisely when $M$ eventually reaches an accepting configuration on $w$, rejects when $M$ reaches a rejecting configuration, and diverges when $M$ diverges. By [L1] and [L5], this means that $R$ recognizes $A_{TM}$. [L1, L3, L5, step 2.1] ∎
