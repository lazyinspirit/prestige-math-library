# Final adjudication — position 4

Disposition: repaired. Source status: verified.

## Inspection and external verification

Inspected the complete queued proof; all declared dependency statements; the
Cartan/root-space A/B pages; Batch-11 manifest and coverage clauses; proof
contract boundaries and risk review; Alpha's section at line 1659 in the group-a
Step-7 report; and both Terra records. Also read the added differential-of-Ad,
adjoint-exponential and differential-of-homomorphism interfaces. The
exponential local-diffeomorphism interface was read earlier in this session.

Authoritative source read:
https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec20.pdf
Pavel Etingof, MIT 18.745 (Fall 2020), Lecture 20, printed pp. 107–110,
Sections 20.1–20.2, through the complete proof of Theorem 20.10. Lemmas
20.4–20.5 support the connected dense discriminant complement; Proposition
20.6 and Lemma 20.7 support the open adjoint saturation and rank calculation;
Theorem 20.8 and Corollary 20.9 support the strongly regular centralizer route;
Theorem 20.10 supplies the open-equivalence-class conjugacy argument. The
source's assertion that the semisimple part is strongly regular is brief; the
repair supplies its missing linear-algebra argument explicitly rather than
appealing to that assertion alone.

## Independent mathematical repair

Terra correctly rejects the implication from n(x_s)>=rho to equality.
For A=S+N, decompose into eigenspaces of semisimple S. Commuting nilpotent N
preserves them. A is nilpotent on the zero eigenspace, and invertible on every
nonzero eigenspace by a finite geometric-series inverse. Thus its generalized
kernel equals ker S and n(x)=n(x_s). This directly fixes the fatal inference.
A maximal-dimensional toral extension of C x_s exists; the earlier
Cartan/maximal-toral theorem identifies it as Cartan. Its dimension rho equals
the centralizer dimension, so it is the entire centralizer. This replaces the
unnecessary Engel argument. Since x commutes with x_s it belongs to that toral
centralizer, hence is semisimple. Abelian containment plus dimension rho then
identifies C(x) with the same Cartan. No circular assumption of conjugacy is
made.

Also replaced the incomplete finite-hyperplane argument with a nonzero product
of linear forms and the elementary polynomial induction, including the empty
product. Corrected the orbit-map differential's domain to g (the Lie algebra
of the stated source G). Declared dAd=ad and bracket preservation under
differentiation. Because G is initially a real integration of g, explicitly
proved that its adjoint maps are complex-linear: exponentials commute with the
complex structure, and an exponential neighborhood generates connected G.
All added analytic interfaces have their countable-choice premises supplied by
full AC. Corrected the final axiom account to include L1 as well as L2/L6/L7.

The remaining orbit-saturation argument now applies to complex-linear
bracket automorphisms, preserves generalized nullity, and covers the connected
strongly regular locus by disjoint open centralizer-conjugacy classes. The zero
algebra is included explicitly. The original theorem and its scope are preserved.

## Metadata and validation

Synchronized this item's manifest dependencies and regenerated its owning
proof-contract entry; preserved the prior risk review with a separate FA repair
note. Inspected the Batch-11 consumer dependency input: it has no existing row
for this consumer. The changed suppliers are published or same-batch, so no
new cross-batch edge is introduced. Refreshed the unified frontier ledger using
the authorized tool. No existing supplier, page or published file was edited;
no new lemma, judge verdict or pass stamp was created.

Focused precheck and rendercheck pass. Strict proof-contract validation passes
with zero errors/warnings for 1/1 item after removing unused L5. Queue-status
shows positions 1–3 current. Next action after successful recording: position 5.
