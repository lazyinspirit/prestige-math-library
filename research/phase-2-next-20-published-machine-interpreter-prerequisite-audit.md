# Published prerequisite audit: machine computation and one-step interpreter

Date: 2026-09-11

## Scope and deduplication

This bounded audit reads the two published interfaces repeatedly used by the
active batch 12 computation items, together with their direct encoding,
configuration and transition suppliers. It does not audit the newly authored
clocked simulator or certify unused transitive closures. Published files were
read only.

The canonical ledger was searched by exact IDs, listed aliases, malformed-code
and halt/diverge mechanisms, and direct supplier IDs. Three targets had one U-P
row, two were already classified and are only reconfirmed, and four were
outside the index. None of the seven moved/new clear targets has a listed
alias. No record is duplicated.

## Computed partial-function interface

`def-partial-function-computed-by-a-machine` (SHA-256
`aba263df80463e7e123c5f2d00b8047c856e451cbc1d0b52acde2f445da58884`)
correctly fixes injective effective binary encodings, requires the exact encoded
output on the mathematical domain, and requires divergence on encoded inputs
outside it. It deliberately imposes no condition on malformed strings outside
the input-code image. This matches the batch 12 numerical wrappers, which loop
on malformed programs or invalid terminal numerals rather than treating them as
a third numeric value.

Its immediate interfaces are coherent in this use:

| Published item | SHA-256 | Bounded receipt |
|---|---|---|
| `def-halting-computation-and-divergence` | `6bb8e859e6c477a671593c31dfb4fba4ac90537d3b703ea23dc708cdaa96f9c1` | Reconfirmed existing A-R: finite histories, distinct halt states, divergence as absence of a halting history, and the exact finite output-tape convention are explicit. No class change. |
| `def-effective-binary-encoding-and-decoder` | `1f3de0d8cd0a9942b1503b264500f1dea04b454b343a19e453e23506e0b2442e` | Injection, total decoding with a separate malformed token, and optional prefix-freeness are cleanly separated. |
| `def-function` | `260a96bd79516f956397e5cdb9ad86b1117890dddb7381fe61883764403e4f16` | Reconfirmed existing bounded clear: the domain/codomain convention correctly types the partial mathematical function as an ordinary function on its specified domain. No class change. |

## One-step interpreter

`lem-step-by-step-interpreter-for-machine-codes` (SHA-256
`08a7dded55b8cb6cc24de15e17bdf2ef98c5899c2f2fa49d75664cb5f644f4df`)
is sound in the used scope. The outer unary prefix recovers the machine-code
length, and the self-delimiting configuration blocks recover the radius, state,
head and exactly `r+1` tape symbols. The parser checks canonical numerals,
machine bounds, the last-nonblank convention and absence of unread input.
Malformed cases erase and return the empty word, which is not a valid
configuration code. A halting configuration is copied unchanged. Otherwise the
finite decoded table determines one transition; the construction updates the
single scanned cell, applies the left clamp, extends through a newly reached
blank cell, trims only cells beyond both the head and final nonblank, and
re-encodes canonically.

The direct coding and transition interfaces are likewise coherent:

| Published item | SHA-256 | Bounded receipt |
|---|---|---|
| `def-effective-encoding-of-turing-machines` | `7a50ed0e158d9b69ce602fe6b72b77de936bfb3bb3077f56aa080ea4dc799028` | The normalized finite table, arity header, self-delimiting blocks, shape checks and total malformed-code decoder define one injective prefix-free syntax. |
| `lem-machine-encoding-is-injective-and-decodable` | `926edb89329e7541e1bc96572e14b0bfbeeefda85289f67ac5c9738143976cb7` | Equality of tuple codes recovers every machine parameter and transition; the parser either reconstructs that unique machine or returns malformed. |
| `def-turing-machine-configuration` | `6cdf739da87c45e9e1c7ea03754f7ee902be9f79503c637f33703d2a18386aea` | The state, natural head and finite-support tape are explicit; `max({h} union supp(t))` always exists and includes the scanned cell even when blank. |
| `def-one-step-configuration-relation` | `5784561efdf4acaebf3c9e8bad75e238f6d92aafe26a88a39a246590d5486b3a` | The relation is defined only from nonhalting states, updates exactly one cell/state/head and handles the clamped left endpoint, yielding a finite-support tape. |

## Reconciliation and active impact

`def-partial-function-computed-by-a-machine`,
`lem-step-by-step-interpreter-for-machine-codes`, and
`def-effective-binary-encoding-and-decoder` move from U-P to bounded clear.
Four fully read machine-syntax/configuration IDs enter the bounded-clear census.
The earlier repaired halting-history definition and the already-clear function
definition are reconfirmed without new rows.

No false statement, missing axiom, ambiguous convention or unavailable
published prerequisite was found on this path. The authored batch 12 items can
use these exact interfaces without a new Phase-2 pair.
