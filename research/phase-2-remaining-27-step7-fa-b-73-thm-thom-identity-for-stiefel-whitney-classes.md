# FA terminal resolution — position 73

Item: `thm-thom-identity-for-stiefel-whitney-classes`; group b; batch 10; disposition **repaired**; source status **verified**.

The rejected item SHA256 was `06bda64abb7d13da8538106b1cae7c45f379fb3aa3ec04753e10eb0f2c75a63a`. I independently read its statement, complete proof, dependency interfaces, owning A/B pages, manifest, coverage, proof contract/boundaries and risk record, the original Terra rejection (judge row 516), Alpha's correction and final Terra rejection (row 1686). Alpha's explicit rank-vanishing citation addressed the original objection. The final objection was valid: the published Cartan theorem supplies absolute and absolute-external formulas, not the relative formula used for products of Thom classes. The repaired item does not make that attribution.

## Mathematical basis

On the flag bundle, absolute degree-one roots satisfy Sq(t)=t+t². Absolute Cartan and the Whitney identity imply Sq(w_n)=w w_n, first after injective flag pullback and then on the base. For the universal rank-n bundle, n>0, the polynomial presentation H*(BO(n);F2)=F2[w_1,...,w_n] makes multiplication by w_n injective. The existing BO(n) item was read in full; its Gysin computation does not use this Thom identity, so this invocation is not circular.

The disk retracts to its zero section, so j*u=pi*e_2=pi*w_n. Naturality of the absolute-relative cup module gives j*Phi(a)=pi*(a w_n). Thom therefore proves j* is injective in every degree for the universal bundle. Pair naturality of the squares and the absolute identity then detect Sq(u)=pi*w cup u in absolute cohomology. Finally classify the given numerable bundle and pull back the universal identity. The proof explicitly handles the map of disk-sphere pairs, a change of metrics by a radial homeomorphism, and relative cup naturality. The required triples use empty/sphere subspaces, which are open in their union, so the published relative product interface applies literally.

Rank zero is treated separately with u=1 and w=1; no injectivity assertion involving w_0 is used. Empty bases have zero groups. Instability and the rank convention give both sides zero for i>n, and finite total sums work on infinite-dimensional admissible bases. AC is stated and attributed to the classification, splitting, Thom and universal-bundle suppliers. No new lemma, supplier edit or scope enlargement was needed.

## Source verification

- https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf — official MIT notes, Proposition 39.10, printed p.151 (PDF p.152), states precisely Sq^i U = w_i cup U. I read the complete proposition and surrounding passage on printed pp.150–152 from the cached full PDF and reopened the official URL. This verifies the target identity; the proposition does not supply a detailed proof of the alternate universal-detection argument, which is fully authored locally above.
- https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf — Proposition 1.19, printed p.36 (PDF p.40), complete proof read: compact Hausdorff sequential direct limits admit locally finite subordinate partitions of unity. Applied to finite Grassmannian stages, this verifies the universal bundle's admissibility/numerability used here. The local Schubert CW, classification, BO(n) polynomial, Euler comparison, Thom and square suppliers supply the other exact interfaces. The algebraic injectivity argument and pair-natural pullback calculation are elementary and were checked directly, not inferred from a source snippet.

## Metadata and checks

Updated only this item's content, its owning manifest entry, its batch and aggregate proof contracts, and its owning consumer dependency records. Refreshed `briefs/tasks/frontier-dependency-ledger.md` through the dependency-ledger tool after that repair. Removed obsolete proof dependencies and registered the exact existing dependencies now used.

Focused precheck: **1 checked, 0 failing**. Strict owning proof-contract check: **0 errors, 0 warnings, 1/1 checked**. Before recording, queue-status showed every position 1–72 current, with no stale predecessor. This is terminal adjudication evidence, not an independent judge verdict or pass stamp.

Outstanding mathematics for this item: none. Next action: record position 73, then begin position 74 only after the recorder accepts this decision.
