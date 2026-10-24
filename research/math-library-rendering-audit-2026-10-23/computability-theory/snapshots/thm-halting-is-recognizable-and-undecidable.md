---
id: thm-halting-is-recognizable-and-undecidable
kind: theorem
title: "The halting problem is recognizable and undecidable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-halting-problem, def-effective-encoding-of-turing-machines, lem-step-by-step-interpreter-for-machine-codes, prop-machine-descriptions-form-a-decidable-language, thm-machine-acceptance-is-undecidable, def-decidable-and-recognizable-language, def-halting-computation-and-divergence]
proof_strategy: direct
verification:
  audited: 2026-09-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
    - title: "Stan Nelson, Computability: Undecidable Problems"
      url: "https://www.cs.rochester.edu/u/nelson/courses/csc_173/computability/undecidable.html"
---

## Statement

The language $HALT_{TM}$ of [[def-halting-problem]] is recognizable but not
decidable.

## Facts & Assumptions

**Given:** The halting language $HALT_{TM}$.

[L1] A binary word lies in $HALT_{TM}$ exactly when it has the form $\langle\ulcorner M\urcorner,\widehat w\rangle$ and the decoded machine $M$ halts on the decoded input word $w$, by [[def-halting-problem]].

[L2] The chosen machine encoding has a total decoder that either reconstructs the unique coded machine or reports malformed input, by [[def-effective-encoding-of-turing-machines]].

[L3] There is a deterministic one-tape interpreter that, from a valid pair consisting of a machine code and a configuration code, returns the same configuration code in the halting case and the unique one-step successor in the nonhalting case, by [[lem-step-by-step-interpreter-for-machine-codes]].

[L4] The well-formed machine-description language is decidable, by [[prop-machine-descriptions-form-a-decidable-language]].

[L5] A language is recognizable when some deterministic Turing machine accepts exactly its members, and it is decidable when such a machine also halts on every input, by [[def-decidable-and-recognizable-language]].

[L6] A machine either halts on an input by reaching an accepting or rejecting configuration, or else diverges on that input, by [[def-halting-computation-and-divergence]].

[L7] The acceptance language $A_{TM}$ is undecidable, by [[thm-machine-acceptance-is-undecidable]].

## Proof

**Proof technique:** direct.

1.1 Recognizability: build a deterministic one-tape machine $R$ that, on input $z$, first parses $z$ as a candidate pair $\langle x,y\rangle$. If the pair parse fails, it rejects. It next runs the decider from [L4] on $x$; if $x$ is not a well-formed machine code, it rejects. If $x$ is valid, it uses [L2] to recover the coded machine $M=(m,s,n,\tau)$. It then parses $y$ as a candidate word code $c(\operatorname{bin}(\ell))c(\operatorname{bin}(a_1))\cdots c(\operatorname{bin}(a_\ell))$, rejects if that parse fails, and also rejects if some recovered symbol $a_i$ lies outside the input alphabet $\Sigma_s=\{1,\dots,s\}$. From the recovered word $w=a_1\cdots a_\ell$, the machine writes the canonical initial configuration code of $M$ on input $w$. [L1, L2, L4, given, construct]

1.2 Undecidability: if $HALT_{TM}$ were decidable, then by [L5] there would be a deterministic decider $K$ for $HALT_{TM}$. Given an input $\langle\ulcorner M\urcorner,\widehat w\rangle$ for $A_{TM}$, effectively build a machine $N_{M,w}$ that ignores its own input, simulates $M$ on $w$, halts and accepts if that simulation accepts, and otherwise loops forever. Then $\langle\ulcorner M\urcorner,\widehat w\rangle\in A_{TM}\iff \langle\ulcorner N_{M,w}\urcorner,\widehat\varepsilon\rangle\in HALT_{TM}$. Indeed, $N_{M,w}$ halts on the blank input exactly in the case that $M$ accepts $w$. So the assumed decider $K$ would decide $A_{TM}$, which [L7] forbids. [L5, L7, given, construct]

2.1 The machine $R$ now repeatedly invokes the one-step interpreter from [L3] on the pair consisting of the recovered code $x=\ulcorner M\urcorner$ and the current configuration code. After each return, it reads the decoded state component of that configuration code. If the state is accepting or rejecting, $R$ accepts. Otherwise it feeds the returned successor configuration back into the next interpreter call. [L3, step 1.1, construct]

3.1 By [L3], each iteration in step 2.1 maintains exactly the current configuration of $M$ on $w$. Therefore $R$ accepts precisely when $M$ eventually reaches an accepting or rejecting configuration on $w$, and diverges when $M$ diverges. By [L1], [L5], and [L6], this means that $R$ recognizes $HALT_{TM}$. [L1, L3, L5, L6, step 2.1]

4.1 Steps 3.1 and 1.2 prove recognizability and undecidability, respectively. Therefore $HALT_{TM}$ is recognizable and undecidable. [step 3.1, step 1.2] ∎
