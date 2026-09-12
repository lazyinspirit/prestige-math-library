# Independent support: dense coefficient refinement and name translations

Date: 2026-09-12. This is mathematical support and a finite regression oracle,
not an item, publication decision, owner direction, certification, or run
transition. The executable is `support-phase-2-next-17-dense-name-checks.mjs`
in this directory. It reads no live run files and writes nothing.

## Current target and scope

The requested target is `thm-forcing-equivalence-and-boolean-completion`.
The formerly missing supplier is **already present** at inspection:
`items/lem-dense-forcing-name-translations-preserve-forcing.md`.
The current original-item review has `decision: repaired` at
`2026-09-11T22:30:00.105Z`, with all three direct suppliers listed. The G report's
“Reopened dispatch e3539148fab6a164” and “Forcing-equivalence item checkpoint”
sections describe that work. Its earlier escalation paragraphs are historical.
The owner receipt is a prior reopen, not acceptance. No controller gate was
changed or independently declared cleared here.

Consequently there is no honest basis to label the dense-name supplier still
missing or to reopen this already repaired original for duplicate authorship.
The new contribution is an independently derived general coefficient-refinement
lemma, an audit of its use in the existing unrestricted-witness proof, and an
executable oracle that was absent from the earlier prose support. It does not
close any unrelated constructibility, reflection, GCH, or proof-code obligation.

Inspected file identities (raw byte SHA-256, **not** engine-normalized hashes):

| Path | SHA-256 |
|---|---|
| `items/lem-dense-forcing-name-translations-preserve-forcing.md` | `013b9cf79bba459ee5b334d95e6abd41f13870d9c7b0016d1d05ed71372e3c34` |
| `items/thm-forcing-equivalence-and-boolean-completion.md` | `d82426da23ae2081e2d3e19924cc6f68567582e22ab39c8ccee42e56ded69c46` |
| `items/def-forcing-relation-for-atomic-formulas.md` | `402054f44f01c881e1e87ce07b7e63519ae93d45f1eeb94c733ae9e8e01d69f7` |
| `items/def-forcing-relation-for-formulas.md` | `a6f88fe37afc705991bb86d7957c33a0ba71b988ad1277a947f7ed61b6d2ebbe` |
| `research/support-phase-2-next-17-forcing.md` | `07ef94faa054c3c099767830792c91cd7a84fe009d93868c779a8eb5ce710340` |
| `research/phase-2-next-17-step3b-review-thm-forcing-equivalence-and-boolean-completion.json` | `b208dc710543dd0173cd77de30e4c52e9eface9bd420fde64466423f8d94a5e5` |

The preceding prose support was committed as `5452a472c`. All named live items
and receipts were read-only. This support neither replaces that earlier proof
nor relies on the reviewer's confidence as mathematical evidence.

## A general choice-free coefficient-refinement lemma

Work in ZF with a nonempty set preorder Q; lower means stronger. Suppose a
**given set-indexed family** `(A_q : q in Q)` satisfies

1. `A_q` is a subset of `{r in Q : r <= q}`;
2. for every `s <= q`, some `r in A_q` satisfies `r <= s`.

For name-first pairs define by recursion

\[
 C\tau=\{\langle Cu,r\rangle:
              \langle u,q\rangle\in\tau,\ r\in A_q\}.
\]

Then every condition forces `C tau = tau`. In particular the result does not
require `A_q` to contain q, to be open, or to have a distinguished element.
It does not assert literal equality of names.

Existence: the descendant cone of a set name is a set. On this well-founded
cone, each recursion step is a Replacement image of the subset of
`tau × Q` selected by the displayed condition. The result is a name because
its first coordinates are already constructed names. Uniqueness on overlapping
cones defines the operation without a class-sized choice. In a transitive ZF
ground containing the given family the same recursion is internal; each test
ranges over the same ground sets. No generic is used.

Proof of forced equality: induct on the input name rank. Fix any condition p.
For an entry `(Cu,r)` in `C tau`, take its one witnessing original entry `(u,q)`.
Every `s <= p,r` is below q. The induction hypothesis gives `s forces Cu=u`,
so the original entry and s itself fulfill the subset clause for `C tau ⊆ tau`.
Conversely, for `(u,q)` in tau and `s <= p,q`, property 2 gives `r in A_q`
below s. Then `(Cu,r)` is in `C tau`, and symmetry of the induction equality
gives `r forces u=Cu`. This is the opposite subset witness. Both clauses hold
at p. Each witness selection is inside one universally quantified test, never
a choice function on all tests. This proves the assertion in ZF.

Exact local inputs, if this result is ever incorporated as an item, are
`def-forcing-names-and-name-rank`,
`thm-recursion-on-well-founded-setlike-relations`, and
`def-forcing-relation-for-atomic-formulas` (with its existing atomic-recursion
justification). It uses no forcing theorem or truth lemma. No registration or
new item is proposed as necessary: the existing dense-name supplier already
contains its required specialization in step 2.3.

## Why this closes the inverse-witness step mathematically

Let `e:P→Q` preserve order and preserve and reflect compatibility, with dense
range. Injectivity and reflection of the original order are not assumptions.
For any `q <= e(p_1),...,e(p_n)`, density gives a with `e(a)<=q`.
Compatibility reflection permits refining a successively below each p_i;
monotonicity keeps the image below q at every step. Thus some
`r <= p_1,...,p_n` has `e(r)<=q`. This is a finite existential argument in ZF,
including n=0, and is not simultaneous selection of lifts.

The two name operations are

\[
 T\sigma=\{\langle Tu,e(s)\rangle:(u,s)\in\sigma\},\qquad
 R\tau=\{\langle Rv,p\rangle:(v,q)\in\tau,\ e(p)\le q\}.
\]

Set `A_q={e(p):p in P, e(p)<=q}`. Density gives exactly the two hypotheses
above. Expanding the definitions shows `TR` is C, so every Q-condition forces
`TR tau=tau`.

For clarity, the remaining proof obligations are not delegated to finite
testing. They were independently checked in the current supplier as follows:

| Obligation | Actual noncircular argument in supplier |
|---|---|
| Equality rules and substitution | Step 1.3 proves reflexivity by rank induction, symmetry by the definition, and transitivity by the decreasing sorted triple of ranks. Step 2.1 handles both membership positions; step 3.1 then inducts on fixed formulas, keeping existential witnesses unchanged. |
| Forward/reflected atomic equality | Step 2.2 inducts on the sorted pair of source ranks. Lift each target test below both relevant source coefficients; all recursive calls compare proper subnames. Duplicate translated entries require only one origin per test. |
| Membership transfer | Step 3.2 uses the completed equality theorem and finite lifting, not a circular membership induction. |
| Source round trip | Step 3.3 applies the Q round trip to `T sigma`, then reflects equality to obtain `RT sigma=sigma` forced everywhere. |
| Negation transfer | Step 4.1 lifts a hypothetical target countercondition and reflects the matrix; the opposite direction maps source counterconditions. |
| Unrestricted existential transfer | Step 5.1 maps each forward witness; backwards it takes the given Q-name tau, replaces it by `TR tau` using the already proved substitution theorem, and reflects the matrix with the P-name `R tau`. There is no rank bound or selected global witness. |
| Generic correspondence | Steps 2.4–2.5 use dense sets and generic saturation, not mere filterhood, for inverse pullback and directedness. |
| Valuation and extension equality | Step 3.4 uses the already proved correspondence to match active coefficients in both translations, then rank induction. |

The transitivity induction is well-founded: in its only recursive call all
three respective entries have strictly lower ranks, hence their decreasingly
sorted rank triple decreases lexicographically. The atomic transfer likewise
decreases both input ranks. Parameter substitution is finished **before**
formula transfer and invokes neither generic existence nor the desired
existential preservation. The matrix induction in the reverse existential
case applies to every tuple of names, including the newly constructed `R tau`.

The quotient and regular-open maps are covered by these precise hypotheses;
their direct supplier proofs were also read. The target Boolean order is the
nonzero part, not the Boolean algebra with its zero retained. The fork test
below is the positive part of the four-element Boolean algebra.

## Executable checks and exact limits

Run from the repository root:

```bash
node research/support-phase-2-next-17-dense-name-checks.mjs
```

The executable imports only Node's assertion library. Its forcing evaluator
implements the displayed subset/equality/membership clauses directly. Names
are canonical finite sets of name/condition pairs; raw identity is kept
separate from forced equality. There are no imported acceptance receipts,
proof evaluators, live data, or output-file writes.

The first sweep enumerates **all labelled reflexive transitive relations on
one, two, and three conditions** (1+4+29=34) and every function between every
ordered pair of these preorders. Exactly 2,944 functions satisfy the dense-map
hypotheses. For each admissible map it checks all finite lifting subsets,
both atomic transfer directions on all rank-at-most-one names (every subset
of empty-name/condition pairs), both forced round trips, and both generic
maps and valuation identities. Finite generics are obtained independently by
enumerating all filters and requiring them to meet **every** dense subset.

Five additional stress cases use selected rank-at-most-two names: singleton
identity, a strict two-point chain collapsed to one point (not order-reflecting),
two equivalent conditions collapsed to one point (not injective), two
incompatible atoms densely included in a fork, and fork identity. The pool
contains every rank-one name, every singleton over those names, and the
two-entry names made from consecutive entries in the enumerated entry list.
It is not the set of all rank-two names.

For these cases a second oracle evaluates names as ordinary hereditarily finite
sets in every finite generic through p and compares those semantic results
with the independently recursive atomic forcing evaluator. It then tests eight
formulas made from equality, membership, negation, conjunction, and finite
dense-witness existential clauses. The finite witness pools are
`W_P=N_P union R[N_Q]` and `W_Q=N_Q union T[N_P]`, which correspond both ways
modulo the proved round-trip equalities. These are **restricted-witness test
semantics**, not unrestricted first-order forcing or a proof of its existential
case. The general existential argument is the mathematical proof above.

Successful output on this artifact:

| Counter | Total |
|---|---:|
| Preorders | 34 |
| Map checks, including five additional stress cases | 2,949 |
| Lifting cases, including vacuous antecedents | 65,398 |
| Atomic transfer comparisons | 1,070,706 |
| Forced round trips | 133,261 |
| Valuation comparisons | 52,146 |
| Finite-witness formula comparisons | 76,424 |
| Rejected mutations / false generalizations | 9 |

The nine negative tests detect: missing compatibility reflection; missing
density; reversed order; inverse coefficients matched only by equality;
reversed inverse inequality; choosing one refinement instead of a dense family;
literal round-trip identity; inverse correspondence for an arbitrary nongeneric
filter; and replacing membership's dense witnesses by a single witness
somewhere below the condition. The last two are explicit counterexamples,
not hypothetical test failures. Boolean zero is excluded in the fork
identification; an arbitrary finite preorder itself is not forbidden from
having a minimum condition.

Checks cannot establish the arbitrary-rank recursion, the unrestricted-name
existential step, absoluteness over arbitrary transitive grounds, or absence
of AC in a formal axiom calculus. Those are supported by the mathematical
arguments, not by the finite output. This executable is not a proof assistant
and does not emit ZF derivation codes.

## Source and owner-gate boundary

For comparison I retrieved the current
[Karagila forcing notes](https://karagila.org/files/Forcing-2023.pdf), section
2.3, and read the embedding/completion material around Definitions 2.28 and
2.31, Propositions 2.30 and 2.32, and Theorem 2.34 with its proof (printed
pp.11–13). The file currently reports an August 24, 2026 update despite its
`Forcing-2023.pdf` URL; this is not a frozen 2023 edition. It supplies source
context for embeddings and Boolean completion, not a substitute for the local
all-name syntactic proof or the choice-free generalization to noninjective maps.

**Readiness conclusion:** no new owner reopen is warranted for this original
on the inspected evidence: the formerly missing supplier and repaired receipt
already exist. I found no mathematical defect in the audited dense-name chain.
This support supplies useful independent checks, not engine acceptance or
whole-dependency-closure certification. If any identified item bytes change,
the audit must be reconsidered against those changed proofs. Unrelated held
originals must remain held unless their own substantial obligations are closed.
