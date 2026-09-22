# Final adjudication — position 6

Disposition: repaired. Source status: verified.

Read the full item, all six original dependency statements (the base and
positive-system interfaces were read at position 5), the root-system definition,
Batch-11 manifest, proof contract and risk record, both Terra records, and
Alpha's section at line 423. The root-system A/B page and coverage conventions
were inspected at position 5.

Verified source:
https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec22.pdf
Pavel Etingof, MIT 18.745 (Fall 2020), Lecture 22, printed pp. 118–121.
Read Sections 22.1–22.3, including proofs of Theorem 22.5, Lemma 22.8,
Corollary 22.9, Theorem 22.14 and Proposition 22.15. These give the chamber,
simple-generation and simple-transitivity framework. Theorem 22.14 compresses
identification of a group element from a chamber chain; I did not treat that
compression as proof of freeness. The local repair proves the needed deletion
argument directly.

Terra correctly identifies the unsupported chamber-separation count in L3.
More seriously, old step 4.1 constructs an element carrying C+ to wC+ but calls
it an expression for w, before proving chamber stabilizers trivial. Alpha's
positivity fix is correct but does not resolve this circularity.

The repaired proof first shows that a simple reflection preserves every
positive root except its own simple root, by retaining a positive coefficient
at another simple root. Thus a chamber and its simple-reflection image differ
in exactly one hyperplane sign. Height descent proves generation by simple
reflections. Finite-orbit maximization against a point of C+ proves transitivity.
For freeness, take a shortest simple word. If two successive-step hyperplanes
coincide, equality of their conjugate reflections yields sBt=B, deleting two
factors without changing the group element. So no hyperplane repeats. A closed
chamber chain must change its first hyperplane sign back, forcing repetition;
therefore a stabilizing shortest word is empty. This proves uniqueness without
an inversion-count assertion. All this algebra was independently checked.

The empty root system has E=0, trivial W and one chamber, handled explicitly;
rank one has two half-lines exchanged by its reflection. No choice axiom is
needed. Preserved the theorem and page scope. Removed the unused length
definition dependency, added the exact root-system axioms, synchronized the
manifest and proof contract, and refreshed the frontier ledger. These changed
suppliers are on the same batch page and introduce no cross-batch edge.
No supplier or published file was edited and no new lemma or pass stamp created.

Focused precheck passed after adopting its canonical independent-step order;
rendercheck and strict contract check passed (1/1, zero errors/warnings).
Before recording, check earlier receipts and reseal any stale ones. Next action
after successful recording is position 7.
