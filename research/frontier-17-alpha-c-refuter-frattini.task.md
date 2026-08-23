# Frontier-17 Alpha-c read-only refutation — pair `frattini-subgroups-and-the-burnside-basis-theorem`

Scope: the A page `frattini-subgroups-and-the-burnside-basis-theorem` and its B
companion `frattini-subgroups-and-the-burnside-basis-theorem-examples`
(batch 1). Read every item in full at `items/<id>.md`, plus the contract entries
in `research/frontier-17-batch-1.proof-contracts.json`, plus every item named in
each page's `requires` that a proof actually cites.

## Items — every one is mandatory

A page:
lem-frattini-subgroup-is-characteristic,
cor-generation-is-detected-modulo-the-frattini-subgroup **[critical]**,
def-elementary-abelian-p-group,
lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces **[critical]**,
def-fp-basis-of-an-elementary-abelian-p-group,
lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension **[critical]**,
def-pth-power-subgroup-of-a-group,
thm-frattini-quotient-is-the-largest-elementary-abelian-quotient **[critical]**,
thm-frattini-subgroup-formula-for-a-finite-p-group **[critical]**,
prop-frattini-subgroup-monotonicity-for-subgroups-of-finite-p-groups **[high]**,
prop-frattini-subgroup-of-a-quotient-finite-p-group **[critical]**,
prop-frattini-subgroup-of-a-direct-product-of-finite-p-groups,
cor-frattini-subgroup-of-a-finite-two-group-is-the-square-subgroup **[critical]**,
cor-frattini-free-finite-p-groups-are-elementary-abelian **[high]**,
def-minimal-generating-set-of-a-group,
def-generator-rank-of-a-finite-p-group,
thm-burnside-basis-theorem **[critical]**,
cor-minimal-generating-sets-of-a-finite-p-group-have-equal-size **[high]**,
cor-every-nonfrattini-element-belongs-to-a-minimal-generating-set **[high]**,
cor-nontrivial-finite-p-group-is-cyclic-iff-generator-rank-one **[critical]**,
cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes **[critical]**,
thm-automorphisms-act-linearly-on-the-frattini-quotient **[high]**,
thm-hall-burnside-automorphism-theorem **[critical]**,
cor-kernel-of-the-action-on-the-frattini-quotient-is-a-p-group **[critical]**.

B page:
ex-frattini-subgroup-of-a-cyclic-p-group **[critical]**,
ex-frattini-subgroup-of-an-elementary-abelian-p-group **[critical]**,
ex-frattini-subgroups-of-dihedral-and-quaternion-groups **[high]**,
ex-generator-rank-of-upper-unitriangular-groups **[critical]**,
ex-maximal-subgroups-as-frattini-hyperplanes,
cex-frattini-image-under-a-nonsurjective-homomorphism **[high]**,
cex-fitting-centralizer-without-solvability **[high]**,
ex-hall-burnside-detects-a-nontrivial-coprime-automorphism **[AI-generated construction]**,
fs-the-frattini-subgroup-is-the-union-of-the-maximal-subgroups,
fs-the-frattini-subgroup-is-functorial-for-all-homomorphisms,
fs-every-minimal-generating-set-of-an-arbitrary-finite-group-has-the-same-size **[high]**,
fs-centralizer-of-the-fitting-subgroup-is-always-contained-in-the-fitting-subgroup.

## What Alpha needs from you

The characteristic risk on this page is a **hypothesis silently dropped between
"finite p-group" and "finite group" or "arbitrary group"**. Concretely test:

- **Every Statement's scope.** For each result, is it stated for an arbitrary
  group, a finite group, a p-group, or a *finite* p-group — and does its proof
  need more than its Statement grants? Φ(G) is the intersection of maximal
  subgroups; for a general infinite group there may be **no** maximal subgroup at
  all, so any claim proved by "take a maximal subgroup containing …" needs
  finiteness or an explicit hypothesis. Check `lem-frattini-subgroup-is-characteristic`,
  `cor-generation-is-detected-modulo-the-frattini-subgroup`, and both `fs-` items
  that are deliberately false statements, for exactly this.
- **The trivial group and `n = 0`.** Instantiate `G = 1`: Φ(1) = 1, the generator
  rank is 0, the empty set is a minimal generating set, and "maximal subgroup"
  ranges over the empty family so the intersection is G itself. Does each
  Statement and each proof survive that? `cor-nontrivial-finite-p-group-is-cyclic-iff-generator-rank-one`
  excludes it by name — check the others do too where they must.
- **Both directions of every iff**, in particular the Burnside basis theorem, the
  cyclic-iff-rank-one corollary, and the maximal-subgroups-are-hyperplanes
  corollary.
- **The F_p-vector-space identification.** Verify the scalar action is well
  defined (this needs the exponent-p and abelian conditions, both of them), that
  "basis" and "minimal generating set" are related in the direction the proof
  uses, and that basis *extension* is stated for the subspace containing case
  it is actually applied to.
- **`thm-hall-burnside-automorphism-theorem` and its kernel corollary.** This is
  the coprime-action result. Check the exact hypothesis on the automorphism's
  order, whether the argument needs a coprimality assumption it does not state,
  and whether the kernel claim is "is a p-group" or the stronger "is the Sylow
  p-subgroup of Aut".
- **`cex-fitting-centralizer-without-solvability`** — verify the claimed
  counterexample really has the property asserted; the standard statement
  C_G(F(G)) ≤ F(G) holds for **solvable** G, so the refutation must exhibit a
  genuine non-solvable witness and compute its Fitting subgroup correctly.
- **Every explicit small-group computation** on the B page: cyclic p-groups,
  elementary abelian groups, D_8 and Q_8, and the upper unitriangular group
  U_n(F_q). Recompute each Frattini subgroup and generator rank yourself. In
  particular check the U_n(F_q) generator rank against the correct value and
  whether the stated `n`/`q` range is the one the computation supports.

Also check every `[F#]`/`[A#]`/`[L#]` against the cited item's actual text on
disk before alleging it is too weak, and check each title against what its proof
delivers. An `ai-generated` Statement or Construction may never be a `deps`
target — finding one is itself a finding.

## Output

Finding ids `C-FR-1`, `C-FR-2`, … Each: item id, exact location, what is wrong,
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
