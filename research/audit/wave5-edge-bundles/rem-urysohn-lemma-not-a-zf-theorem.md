# Citation-precision audit — everything that cites `rem-urysohn-lemma-not-a-zf-theorem`

## The target, as it actually stands on disk

`items/rem-urysohn-lemma-not-a-zf-theorem.md` — remark — Urysohn's lemma is not a theorem of ZF, nor of ZF plus countable choice

#### Statement

**Urysohn's lemma (UL).** If $X$ is a $T_4$ space and $A, B \subseteq X$ are
disjoint closed sets, there is a continuous $f : X \to [0,1]$ with
$A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$.

The following are all relative to the consistency of ZF.

**(a) UL is not a theorem of ZF.** Läuchli (1962/63) builds a permutation model
of ZF with atoms in which the set of atoms is densely linearly ordered, of the
order type of the rationals of the ground model, and in which that set with its
order topology is a $T_4$ space on which **every continuous real-valued function
is constant**; UL fails there. Since the negation of UL is a boundable statement,
the Jech-Sochor first embedding theorem transfers the failure to ZF proper.

**(b) UL is not a theorem of ZF + countable choice.** Tachtsis (2019) produces a
model of ZF in which $\mathrm{AC}_\omega$ holds and UL fails, and hence in which
the Tietze extension theorem fails as well.

**(c) What does suffice.** Dependent choice implies UL by the usual dyadic
construction. Blass (1979) proves the stronger statement that **dependent
multiple choice implies UL**. Whether UL implies DMC is open.

**(d) The Boolean prime ideal theorem does not suffice.** Brunner (1983) shows UL
fails in the Mostowski linearly ordered model, where BPI holds; Pincus's transfer
theorems carry this to ZF.

## The 1 citing use(s), quoted verbatim from the citing items

### `rem-separation-axiom-conventions` (published-backward, page separation-axioms)

Title: Conventions on this page, and the one implication of the classical chain that is not available at this point in the reading order

- [[rem-urysohn-lemma-not-a-zf-theorem]], which this remark mentions without
