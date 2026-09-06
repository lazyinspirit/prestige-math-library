# FA terminal evidence — queue g/4

Item: def-mayer-vietoris-connecting-class. Decision: repaired.

Reviewed the current definition, sole direct dependency thm-mayer-vietoris-sequence-in-singular-homology in full, its chain-sequence and small-homology interfaces, the following well-definedness lemma in full, A/B pages, batch-12 manifest/coverage, absence of definition entries in both contract maps, reader/refute-12, group-g sign convention, Alpha's repair/adjudication, and initial/final Terra rejections (2026-09-05T18:50:36.404Z and 2026-09-05T21:36:42.934Z). Alpha correctly supplied G abelian, an open cover, and n>=1. The final objection can be resolved without reversing the dependency order: the page already has a following lemma whose purpose is precisely this well-definedness obligation.

Added the exact justified_by link to lem-the-mayer-vietoris-connector-is-independent-of-small-chain-decomposition. This is a reverse well-definedness link, not a cyclic prerequisite. I also supplied the local calculation: boundary u=-boundary v lies in the intersection subcomplex and is a cycle. A new decomposition changes u by an overlap chain. For z'-z=boundary(a+b), the overlap chain u'-u-boundary a has boundary boundary u'-boundary u. Thus the homology class is independent of both choices. The cover-small comparison already used by the cited MV theorem identifies this with a class on ordinary homology. The lift (u,v) has boundary i(boundary u), fixing the positive sign. At n=1 the target is ordinary H_0, and an empty overlap gives the zero chain. Arbitrary abelian G, including zero, causes no free-G-module assumption.

Source verified in full Hatcher Chapter 2, printed pp.149–150 (PDF pp.52–53), Mayer–Vietoris Sequences:
https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf
This source fixes the injection (c,-c), sum map, and connector represented by the U-boundary. The choice-independence calculation above is given explicitly in the repair.

Validation: focused precheck clean (definition, no proof-format obligation). The justified_by target exists, is not in deps, and directly depends on this definition as required by SCHEMA.md. No dependency file, manifest dependency array, or proof contract changed; no prerequisite-repair licence. Positions 1–3 require context resealing because this definition is in their shared A/B interfaces; its expanded sign and well-definedness explanation is consistent with all their conclusions. No unresolved obligation for this item; no judge call/pass stamp. Next action after successful recording: position 5.

Position 5 context refresh: the circle example now tensors its integral oriented paths with a supplied g in G and gives connector (-g,g). This clarifies coefficients without changing any completed conclusion here; reseal the unchanged item for shared A/B currency.
