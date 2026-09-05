# Final-adjudicator evidence: `fs-effaceability-means-every-positive-value-is-zero`

Disposition: `repaired`

Source status: `familiar`. No external verification was needed. The computation `Tor_1^Z(Z/n,Z/n) ~= Z/n`, projectivity of free abelian groups, and invariance of derived functors under a change of projective resolution are standard homological algebra familiar to the final adjudicator.

## Independent review

I inspected the current false statement and all four direct dependencies; the A page `delta-functors-and-universality` and B companion; the batch-10 manifest, notes, proof contract, merged contract, and risk review; the Step-6 reader material; the Step-7 context; both frozen judge rejections; both exact Alpha adjudications; and both Alpha repairs.

The first frozen rejection correctly observed that explaining why an effacing map need not force its source or target to vanish does not by itself refute the universal assertion. Alpha's first repair supplied a genuine counterexample: the positive left derived functors of `F=(-) tensor_Z Z/n` on abelian groups are effaceable, but the first derived value at `Z/n` is nonzero.

The second frozen rejection correctly observed that the displayed two-term resolution need not be the one contained in the arbitrary supplied datum `P`. Alpha's terminal mathematical repair fixes this. Define objectwise resolution data `Q` by retaining `P` away from `Z/n` and using

$$0\longrightarrow\mathbb Z\xrightarrow{n}\mathbb Z\longrightarrow\mathbb Z/n\longrightarrow0$$

at `Z/n`. Applying `(-) tensor_Z Z/n` makes the degree-one differential multiplication by `n` on `Z/n`, hence zero, so

$$L_1^QF(\mathbb Z/n)=\ker(\mathbb Z/n\xrightarrow{0}\mathbb Z/n)\cong\mathbb Z/n\ne0.$$

The exact comparison theorem supplies a natural isomorphism `L_1^P F ~= L_1^Q F`, so the value computed with `Q` transfers to the originally supplied datum `P`. Every abelian group is a quotient of a free group, so the enough-projectives premise of the effaceability proposition holds. Thus the counterexample has both claimed properties simultaneously.

## Independent item and carrier repair

The current proof invokes the effaceability and change-of-resolution theorems, both of which explicitly assume the Axiom of Dependent Choice, but Alpha had not stated that assumption. I added it to the Statement and clarified that `n>1` is an integer.

The batch manifest still described the superseded dimension-shift argument and listed two obsolete dimension-shift dependencies. I replaced its strategy and dependency list by the four dependencies actually cited by the terminal item. Both the batch and merged proof contracts still omitted `[L3]`, retained the pre-repair step 1.2, and carried a risk note about the obsolete proof. I updated the risk records and regenerated the two exact contract entries. No dependency item was edited, so no owner-prerequisite-repair licence is required.

## Focused checks

- Item `precheck` passed.
- Strict batch-10 proof-contract validation selected on this item passed with zero errors and zero warnings.
- Citation fidelity and boundary audit passed.
- Item and page/manifest render checks passed.
- Repository dependency checking passed, with only unrelated repository-wide warnings.

