---
id: lem-turing-step-coding-is-primitive-recursive
kind: lemma
title: "The one-step update on coded Turing configurations is primitive recursive"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-effective-encoding-of-turing-machines, lem-machine-encoding-is-injective-and-decodable, def-turing-machine-configuration, def-one-step-configuration-relation, thm-sequence-length-and-coordinate-functions-are-primitive-recursive, prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard Zach, Computability Theory"
      url: "https://builds.openlogicproject.org/content/computability/computability-theory/computability-theory.pdf"
    - title: "Jeremy Avigad and Richard Zach, Recursive Functions"
      url: "https://builds.openlogicproject.org/content/computability/recursive-functions/recursive-functions.pdf"
---

## Statement

For a configuration $C=(q,h,t)$, let $r$ be the larger of $h$ and the
rightmost nonblank tape position, taking the latter to be $0$ when the tape is
blank. Define its configuration code by
$$\ulcorner C\urcorner_{\mathrm{cfg}}:=\ulcorner(q,h,t(0),\dots,t(r))\urcorner_{\mathrm{seq}}.$$

There is a primitive recursive total function
$$ \operatorname{Step}(e,c) $$
such that, whenever $e=\ulcorner M\urcorner$ is a valid machine code and $c$ is
the chosen code of a configuration $C$ of $M$:

- if $C$ is nonhalting and $C\vdash_M C'$, then
  $$ \operatorname{Step}(e,c)=\ulcorner C'\urcorner_{\mathrm{cfg}}, $$
- if $C$ is halting, then $\operatorname{Step}(e,c)=c$.

On malformed inputs, $\operatorname{Step}$ returns a fixed default code.

## Facts & Assumptions

**Given:** The machine code $e$ and configuration code $c$.

[L1] A coded machine is given by a finite tuple recording its state count, input-alphabet size, tape-alphabet size, and lexicographically ordered transition triples, and the code is effectively decodable, by [[def-effective-encoding-of-turing-machines]] and [[lem-machine-encoding-is-injective-and-decodable]].

[L2] A configuration of a one-tape machine is determined by its current state, head position, and finite tape data, and one step changes only the scanned symbol, the state, and the head position according to [[def-turing-machine-configuration]] and [[def-one-step-configuration-relation]].

[L3] For the chosen natural-number coding of finite sequences, the decoded length and any decoded coordinate are primitive recursive, by [[thm-sequence-length-and-coordinate-functions-are-primitive-recursive]].

[L4] Basic arithmetic, characteristic functions, and bounded searches are primitive recursive, by [[prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive]].

## Proof

**Proof technique:** direct.

1.1 By the configuration-code definition in the statement and [L3], primitive recursive functions recover from $c$ the decoded length of the tuple, its first two entries $q,h$, the currently scanned symbol $t(h)$, and any later tape symbol that may need to be copied into the output code. [L3, given, construct]

2.1 Using the explicit tuple format from [L1], together with the primitive-recursive arithmetic and bounded searches from [L4], one can scan the canonical binary numeral of $e$: count the initial unary arity header, locate each self-delimiting block, verify the tuple-length and alphabet constraints, and recover the first three numerals and every transition-table coordinate, returning the default branch on malformed inputs. A bounded search through the recovered transition list therefore finds the unique transition triple $(q',b,D)$ attached to the pair $(q,t(h))$ when $q$ is nonhalting. Using [L2] and the decoded tape coordinates from step 1.1, form the updated tape, state, and head position $h'$. Then use a bounded backward search through positions at most $r+1$ to find the rightmost nonblank updated cell, taking $0$ if none exists, and set $r'$ to the maximum of that position and $h'$. The output tuple is exactly $(q',h',t'(0),\dots,t'(r'))$, so erasing the former rightmost nonblank cell trims the trailing blank while a head move onto a blank cell still records the head position. [L1, L2, L4, step 1.1, construct]

3.1 If the decoded state $q$ is already accepting or rejecting, step 2.1 is skipped and the output is the original code $c$. If the input code is malformed, return one fixed default code. These are again primitive-recursive case distinctions because the relevant checks are bounded and finite. [L1, L2, step 1.1, construct]

4.1 Re-encoding the canonically trimmed updated sequence from step 2.1 uses only primitive-recursive arithmetic on its boundedly many coordinates, so the total function $\operatorname{Step}(e,c)$ is primitive recursive and has the stated behavior. [L3, step 2.1, step 3.1] ∎
