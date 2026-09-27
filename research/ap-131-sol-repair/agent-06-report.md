# Agent 06 repair report

I handled 12 of the 13 original shard-06 A-P carriers; the root transferred
`lem-distinct-components-commute` to agent 04, who authored its proof and two
prerequisite lemmas. My receipts cover 10 repaired assigned carriers, one
locally accepted corollary, and one still-open classification carrier. I also
authored one published prerequisite and repaired 11 root-reserved outside
carriers. The exact hashes, source readings, and decisions are in
`agent-06-receipts.jsonl`.

The hyperbolic-group repairs close the Morse, quasi-isometry, boundary,
finite-generating-set, linear-isoperimetric, word-problem, free-group,
surface-group, and small-cancellation proof steps. The new
`thm-closed-hyperbolic-surface-has-geometric-deck-action` proves the surface
example's universal-cover and deck-action claims directly from the intrinsic
constant-curvature convention. The corrected boundary definition uses the
open-set neighbourhood criterion; the former assertion that each Gromov-product
threshold set is open was false. Where the proof uses a choice-dependent
published supplier, its Statement now explicitly assumes AC. See
`agent-06-impacts.json` for the original/current interface sections, all
original/current direct and indirect item links, page uses, exact affected
lines, and dispositions.

The generalized Fitting self-centralizer now has a complete local induction
proof. For $H=F^*(G)$ and $C=C_G(H)$, the characteristic Fitting subgroup and
subnormal component definitions give $F^*(C)\le H\cap C\le Z(C)$. If $C<G$,
induction gives $C\le F^*(C)\le H$. If $C=G$, central $F(G)$ forces the lift of
an abelian minimal normal subgroup of $G/F(G)$ to be normal nilpotent, while a
nonabelian simple direct factor lifts through central $F(G)$ to a subnormal
quasisimple component. Both contradict $H\le Z(G)$. Agent 04 independently
read this bounded argument and its published suppliers and found no concrete
gap; that is a second-reader review, not a formal judge certificate.

The five-type O'Nan–Scott classification remains **A-P, unproved locally**.
The previous proof assumed the theorem as [A2]. I replaced it with an honest
`proved_here: false` source-status carrier while retaining the exact Statement.
LPS, printed p. 394, invokes Schreier to establish $Y=M$ in the twisted-wreath
branch; printed pp. 395–396 invokes it to exclude a regular simple socle in
the almost-simple/product-action endpoint. Smith identifies Schreier
(solvability of outer automorphism groups of finite simple groups) as a CFSG
consequence. The precise outstanding task is to prove those two branches and
the rest of the five-type existence/exclusivity case analysis locally, including
any necessary Schreier/CFSG supplier, or find a complete alternative proof of
the exact same theorem. No such proof was established in this repair. The
source-specific false-statement item was corrected to refute only the claim
that the cited LPS proof uses no CFSG consequence; it does not claim CFSG is
necessary for every possible proof. The direct consumer audit is in
`agent-06-dependency-audit.json`: the simple-diagonal example now uses only its
elementary maximal-stabilizer proof and the type definition; the CFSG remark
now reports the exact LPS uses; the algorithmic-role remark needs no edit; the
generalized-Fitting proof-status remark is updated.

After root's page-order reconciliation, the new surface deck-action theorem
lives on the geodesics/Hopf–Rinow A page and the surface-group example on its
companion B page. The refreshed impact file records these current homes.

I read the full eight-page LPS paper, Smith's *Applying the Classification of
Finite Simple Groups* at printed pp. 23 and 109–110, the seven-page Soicher
survey, the cited Smith *CFSG—A User's Manual* pp. 21–24, and Datar's
Riemannian-geometry notes at printed pp. 174–179. These are source readings,
not independent mathematical certifications. The original frozen snapshots
remain in `before/`, including unique snapshots for all outside edits.
All 13 assigned frozen snapshots match the shard's recorded SHA-256 values.

Focused checks after the final edits: precheck passed all 19 edited
proof-bearing carriers; rendercheck passed all 23 edited item carriers; targeted
`git diff --check` passed. No whole-repository check, autopilot operation, or
commit was performed. Root owns page/plan/ledger reconciliation, including
the classification A-P status and updated false-statement/CFSG-remark titles,
strategies, and dependency metadata.
