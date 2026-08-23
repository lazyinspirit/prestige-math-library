# Frontier-17 Alpha-c read-only refutation — pair `sums-of-two-squares`

Scope: the A page `sums-of-two-squares` and its B companion
`sums-of-two-squares-examples` (batch 1). Read every item in full at
`items/<id>.md`, plus the contract entries in
`research/frontier-17-batch-1.proof-contracts.json`, plus every item named in
each page's `requires` that a proof actually cites.

## Items — every one is mandatory

A page:
def-sum-of-two-squares-representation,
lem-brahmagupta-fibonacci-two-square-identity,
cor-sums-of-two-squares-closed-under-products,
prop-odd-two-square-representations-correspond-under-doubling **[critical]**,
lem-three-mod-four-prime-dividing-two-square-sum **[critical]**,
prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares **[critical]**,
lem-thue-small-representatives **[critical]**,
thm-fermat-two-square-theorem-for-primes **[critical]**,
lem-two-essentially-different-two-square-representations-factor-an-odd-integer,
thm-uniqueness-of-two-square-representation-of-a-prime **[critical]**,
lem-two-square-representations-of-prime-powers **[critical]**,
thm-sum-of-two-squares-characterisation **[critical]**,
lem-coprime-primitive-two-square-products-remain-primitive **[high]**,
lem-prime-one-mod-four-powers-have-primitive-two-square-representations **[critical]**,
thm-primitive-sum-of-two-squares-characterisation **[critical]**,
cor-primitive-sums-of-two-squares-closed-under-products **[critical]**,
cor-divisors-of-primitively-two-square-representable-integers **[high]**,
cor-squarefree-sum-of-two-squares-characterisation **[critical]**.

B page:
ex-thue-lemma-produces-a-two-square-representation,
ex-two-square-representation-of-seventy-three-by-extended-euclid,
ex-two-square-representations-from-prime-factorisation,
cex-an-odd-three-mod-four-valuation-obstructs-two-squares **[high]**,
ex-two-essentially-different-representations-force-compositeness,
ex-primitive-two-square-representation-criterion **[high]**,
cex-four-dividing-n-forces-a-nonprimitive-two-square-representation **[high]**,
ex-squarefree-sums-of-two-squares **[critical, AI-generated construction]**.

## What Alpha needs from you

This page's defects, if any, are arithmetic and quantifier defects, not wording.
Concretely test:

- **Every displayed numeric claim.** Multiply out each Brahmagupta–Fibonacci
  identity, each Thue witness, each extended-Euclid computation, each factorised
  representation. A computed value that is simply wrong is the top finding class.
- **Primitivity vs. representability.** The page carries two parallel
  characterisations — "n is a sum of two squares" and "n is *primitively* a sum
  of two squares". Check every Statement and title says which one it means, and
  that no proof silently uses one to license the other. State the exact
  hypothesis each theorem needs on `v_p(n)` for `p ≡ 3 (mod 4)`, on `4 | n`, and
  on the sign/zero cases.
- **Degenerate representations.** Instantiate `n = 0`, `n = 1`, `n = 2`, `a = 0`
  or `b = 0`, `a = b`, and the negative/zero-square conventions. Does each
  Statement remain true, and does each proof cover them? "Essentially different"
  and "primitive" both need an explicit convention at `a = 0`.
- **`p = 2` and `p ≡ 1 (mod 4)`.** Several prime-power lemmas quantify over odd
  primes. Check whether the theorem that consumes them supplies that hypothesis.
- **`ex-squarefree-sums-of-two-squares` is an `ai-generated` construction.**
  Verify its Statement by direct enumeration; if you have concrete doubt, search
  for a counterexample rather than repairing the proof in your head.

Also check every `[F#]`/`[A#]`/`[L#]` against the cited item's actual text on
disk before alleging it is too weak, and check each title against what its proof
delivers.

## Output

Finding ids `C-TS-1`, `C-TS-2`, … Each: item id, exact location, what is wrong,
the quoted dependency text or the explicit counterexample, and `fatal` or
`nonfatal`. Fatal first. Accept items explicitly where no specific defect exists
— "no defect in these N items, here is what I checked" is the expected result and
a valuable one. Do not manufacture findings.

Finish with a coverage statement: read in full / sampled / could not check.

Read-only is absolute: do not edit, patch, create or delete any repository file,
and never apply a fix. Alpha is the sole adjudicator.

**NO PERMISSION PROMPTS OF ANY KIND**, including for any segment of a compound
command. If an indispensable read has no escalation-free form, report that exact
blocker instead of prompting.
