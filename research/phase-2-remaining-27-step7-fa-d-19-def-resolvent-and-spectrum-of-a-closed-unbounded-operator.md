# FA position 19 — repaired

Item: `def-resolvent-and-spectrum-of-a-closed-unbounded-operator`.
Rejected input SHA256: `093a2ebff7290e80396c6d1aa5ed413f44730702ddd56c8088d89cbfb77dd24a`.

I independently inspected the current definition, its six cited dependency definitions, the unbounded-operator A/B pages, batch-6 manifest and coverage, the definition's proof-contract boundary record, both judge entries and Alpha's adjudication. The contract has no separate risk_review field. Alpha correctly allowed general operators while deriving closedness from nonempty resolvent, but the final Terra objection to the recovery formula is valid: T=2I and z=4 give R=I/2, and zRx-x=x is not Tx=2x on a nonzero space.

The repaired definition fixes the complex Hilbert ambient space and shift (zI-T)x=zx-Tx, consistent with `def-spectrum-and-resolvent-of-a-bounded-operator`. Inverse identities imply D(T)=ran R and TRy=zRy-y for every y in H; for x in D(T) this is Tx=zx-R^{-1}x. All inverse applications now have their domains specified.

Closedness is proved without a choice principle. For a given bound C of R, F(v,w)=w-Rv is continuous by the displayed norm estimate, and its zero set is exactly Graph(R). The explicit mutually inverse maps Phi(v,w)=(w,zw-v) and Psi(u,v)=(zu-v,u) are continuous by the triangle inequality and carry Graph(R) to Graph(T). Thus Graph(T) is closed in the product topology. This avoids the unlicensed inference from sequential closedness to closedness in a choice-free metric setting. No completeness theorem or closed graph theorem is invoked. The definitions of graph, closed operator, bounded linear operator, Hilbert space and linear map supply exactly the needed objects.

The zero operator on nonzero H has resolvent C minus {0}; only the zero-space operator has resolvent all C. The prior contract conflated these cases. Both are now explicit in the definition and corrected in its boundary metadata. No claim that closedness alone gives a nonempty resolvent or bounded inverse is made.

The mathematics is familiar elementary linear algebra and topology, and the complete direct argument above required no external verification. The bibliography is retained as background; this evidence does not claim fresh reading of those books. Source status: familiar.

Only this item's text and directly owning manifest, boundary contract, coverage clause and consumer dependency records were changed. The frontier dependency ledger was refreshed from the batch record. No existing supplier or published item was edited and no lemma or certification was created.

Validation: strict proof-contract check: 0 errors, 0 warnings, 1/1 item checked. Precheck exited 0 but checked 0 items because this is a definition; it is not a mathematical pass stamp. The inverse formulas were checked symbolically, including T=2I and the zero cases. Queue status must be current before recording. Next action after the accepted terminal record: position 20.
