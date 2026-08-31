---
id: ex-effective-enumeration-of-turing-machines
kind: example
title: "Listing the first few well-formed machine codes in shortlex order"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-effective-enumeration-of-turing-machines, lem-machine-encoding-is-injective-and-decodable]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
---

## Example

Write $E(D)$ for the binary code of a machine description tuple $D$ under the
explicit unary-arity, self-delimiting encoder fixed on the A-page. The first
three successful description tuples whose codes occur in shortlex order
are
$$ D_1=(11,0,1,0,0,0), $$
$$ D_2=(11,0,1,0,0,1), $$
$$ D_3=(11,0,1,1,0,0). $$
They all have $m=3$, $s=0$, and $n=1$, so there is one nonhalting state $0$,
only the blank tape symbol $0$, and exactly one transition triple to specify.

The machines decoded from these three tuples are, respectively: an immediate
left-clamped looper, a right-moving looper, and an immediate acceptor.

## Facts & Assumptions

**Given:** The three description tuples $D_1,D_2,D_3$ above and the shortlex ordering of binary words.

[L1] Coded deterministic one-tape Turing machines admit an effective enumeration by running the total decoder over binary words in shortlex order and outputting the successful decodings, by [[cor-effective-enumeration-of-turing-machines]].

[L2] The machine decoder is total and reconstructs a unique coded machine from every successful code, by [[lem-machine-encoding-is-injective-and-decodable]].

## Verification

**Proof technique:** direct.

1.1 Each tuple $D_i$ has the correct length $6=3+3(3-2)\cdot 1$, satisfies $m=3\ge 3$, $n=1\ge 1$, and $0\le s=0<1$, and records a transition entry with target state in $\{0,1,2\}$, tape symbol $0$, and move bit in $\{0,1\}$. So each $E(D_i)$ is a well-formed machine code. [given]

2.1 Any well-formed machine description tuple has arity $3+3(m-2)n\ge 6$, with equality only when $m=3$ and $n=1$; then necessarily $s=0$. Under the fixed encoder, the unary arity header makes every larger-arity code longer than these shortest valid codes. For arity six, shortlex compares the self-delimiting canonical entries in order: target $0$ with move $0$, target $0$ with move $1$, and target $1$ with move $0$ give $E(D_1),E(D_2),E(D_3)$ respectively. [given, step 1.1]

2.2 By [L2], decoding $E(D_i)$ recovers exactly the machine described by $D_i$. Reading off the single transition triple of each tuple gives the three concrete machines described in the example statement. [L2, step 1.1]

3.1 Therefore the shortlex enumeration from [L1] begins by listing these three machines, each exactly once. This shows concretely what the effective enumeration does at its first successful decodings. [L1, step 2.1, step 2.2] ∎
