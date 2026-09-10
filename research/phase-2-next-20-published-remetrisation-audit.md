# Published remetrisation audit — 2026-09-11

Root full-item/direct-used-interface review, not independent judgment or
transitive supplier certification. Read both full targets, the full distance
to a set Lipschitz proof, and the previously read complete-subspace and
sequential-closure supplier proofs. No item edits/tests or external reading.

## lem-complete-remetrisation — U-P to A-P

L3 states complete-implies-closed without its supplier's CC assumption; L8
states the sequential-closedness equivalence without its CC qualification.
The direction actually used from L8 in 1.6 is choice-free. Step 2.5 nevertheless
cites unqualified L3's converse, where the already supplied reciprocal sequence
could instead establish the required contradiction directly. Thus the theorem's
conclusions can remain choice-free, but its general fact rows misstate the
published supplier contracts. Repair L3/L8 to only the directions used, and
replace 2.5 by: the displayed sequence is Cauchy; an internal limit would
also be its ambient limit, contradicting uniqueness and the missing zero.
The homeomorphism and closed-subspace claims use no problematic direction.
Existing published suppliers thm-complete-subspace-iff-closed (claim 2 and
supplied-sequence clause), thm-metric-sequential-closure (closed-to-sequential
only), thm-cauchy-criterion-via-lub, lem-limit-unique and real-limit arithmetic
suffice. No pending Phase 2 supplier or new pair.

## lem-open-subspace-complete-remetrisation — U-P to A-P

F3 copies the old unqualified complete/closed equivalence. The proof's six
short rows also do not establish compatibility of the new metric, positivity
of the distance denominator, or the asserted Cauchy convergence in row 5.1.
The construction is standard and its claim is correct; the missing written
arguments have the following local repair using existing suppliers.

For empty U or U=X use the existing cases. Otherwise choose one compatible
complete d and let F=X\U be nonempty and closed. Put a(x)=d(x,F)>0 on U:
a ball about x contained in U supplies a positive lower bound for all distances
to F. Let g(x)=1/a(x) and rho(x,y)=d(x,y)+|g(x)-g(y)|. It is a metric because
the second summand is a pseudometric and d separates points. For fixed x,
if d(x,y)<a(x)/2, the published 1-Lipschitz distance estimate gives
a(y)>a(x)/2 and |g(x)-g(y)|<=2d(x,y)/a(x)^2. Thus rho and d have the same
local neighborhoods; rho>=d gives the reverse continuity.

For a rho-Cauchy sequence x_n, completeness gives a d-limit x. The real
sequence g(x_n) is Cauchy and hence bounded above by some M>0. Consequently
a(x_n)>=1/M, and the Lipschitz distance estimate gives a(x)>=1/M>0,
so x belongs to U. The displayed local estimate then yields convergence in
rho. This is a given-sequence argument with no countable-choice selection.
All denominator, metric, topology and completeness obligations are covered.

Exact published suppliers: lem-distance-to-set-is-lipschitz,
lem-complete-remetrisation (choice-free compatible-metric existence/interface),
thm-complete-subspace-iff-closed claim 2 if retained, real Cauchy completeness
and boundedness, metric topology, and elementary reciprocal arithmetic.
The first target's ancillary-fact repairs are separately recorded above;
no Phase 2 pair is needed. Required real/metric identities may be proved inline.
The full transitive foundations and all consumers are not audited here.

## Examined bytes

- `lem-open-subspace-complete-remetrisation`: `6a869eb187d9228fcaff38882e5d7985268307d99c0a5491181ee05d55000c99`.
- `lem-complete-remetrisation`: `0ec31c32688de551ba5eef2d99a4f7554d3471a19b635e5146daea347077733a`.
- `lem-distance-to-set-is-lipschitz`: `78c6374ecae3adbb8f88ba40084e02a127627e87f00040c52e5c83ba2fe323be`.
- `thm-complete-subspace-iff-closed`: `78e7f1f02b7575403a2717cbd530fd9da4ed16a31397d2124331394f235e891e`.
- `thm-metric-sequential-closure`: `62e3d5e677498884d5b9fe3b7d50626407fd7fda89f56586c73b89f35119ef43`.
