# Published proof independent audit, outside shard 12 — 2026-09-26

This is a bounded read-only mathematical audit of the 13 current published item
files in `frontier-35-ten-categories-published-audit-outside-shard12-20260926.md`.
I read each whole proof, the load-bearing local supplier contracts, the prior
repair receipt or ledger finding where one exists, and direct consumers of
changed statements. The hashes below are SHA-256 of the complete item files.
`Pass` means that the local proof and the inspected interfaces are sound at that
hash; it is neither a verification stamp nor a whole-closure certificate.
Source titles/URLs were checked against item metadata and prior receipts; I did
not freshly transcribe the external PDFs. In particular the local proof, not an
unopened source, grounds each verdict.

| Item | Current SHA-256 | Verdict and bounded mathematical evidence |
| --- | --- | --- |
| `thm-smirnov-local-metrization` | `ba0d43f22aa1fdbe0e382a246110259920ab53e2ee27f71047cac9fcdb49361f` | **Pass.** The AC-qualified paracompact Hausdorff shrinking supplies locally finite $W_s$ with closure inside metric $U_s$; relative sigma-locally-finite bases restricted to $W_s$ are locally finite even at points outside $U_s$. Their countable union forms a basis; the regular $T_1$ Nagata–Smirnov supplier gives metrizability. Conversely metric spaces are locally metrizable and paracompact. This explicitly closes the boundary-accumulation defect in the prior receipt. No direct item consumer found. |
| `thm-strong-maximum-principle-for-harmonic-functions` | `67804c719e340bcb865d17ca7100a6b1659a364fb1b2da5fc3fbba0acc8ad2a7` | **Pass.** The interior-sphere exponential barrier is positive at the tangent point and has the Laplacian sign needed for the weak maximum principle on the annulus. Compact inner sphere gives a positive gap; adding a small barrier forces a nonzero directional derivative at an interior extremum, contradicting Fermat. The extremum set is clopen, so connectedness yields constancy; negation handles minima. The four direct consumers use that connected-domain conclusion. |
| `thm-surjective-iff-transpose-is-bounded-below` | `d342edf26049849eadb7689ca84774fb849b0bfea5641b05e51d1ee43dcdf8a8` | **Pass.** Its Statement explicitly supplies AC for Hahn–Banach image-ball separation, and AC implies the DC used by successive approximation. The transpose norm bound gives density of the image ball and hence quantitative surjectivity; open mapping gives the converse bound. The changed AC contract is supplied by its direct consumer `thm-banach-closed-range-theorem`. |
| `thm-svarc-milnor-lemma` | `321f900316456cdf44d9870fe24147db9c6f10e7f5d63cd73367555ec80f55f0` | **Pass after owner repair.** The supplier chooses the least **positive** $m$ with orbit distance at most $m$, so even a nonidentity stabilizer element at distance zero has a one-step word bound. This yields $d_S(g,h)\le d_X(gx_0,hx_0)+1$. An enumeration of the finite-word group gives a canonical coarse inverse without arbitrary choice, and the explicitly fixed coboundedness constant $D$ yields the inverse bounds. Four direct consumers meet the geodesic-space premise; the fifth was repaired and reread at the hash below. |
| `thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree` | `2df6d50eefce55bb919e3c8c1652d166d1f6f72543754cfc52094d7e8c8340ee` | **Pass.** Basis generation gives connectedness. For a simple cycle, right-Cayley edge labels $g_j^{-1}g_{j+1}$ have no adjacent inverse cancellation; their product telescopes to identity, contradicting reduced-word normal form. The earlier edge-orientation defect in the prior repair receipt is closed. Seven direct consumers retain the tree contract. |
| `thm-the-homology-universal-coefficient-sequence-splits-nonnaturally` | `1e09e880e209103e23ca25eb65d3be7094a4424ef6088af1fa115983f67e8e27` | **Pass.** AC supplies a basis and lifts for the free boundary module. The resulting section $s$ sends the Tor kernel $T=\ker(B_{n-1}\otimes G\to Z_{n-1}\otimes G)$ to cycles $[(s\otimes1)t]$ and right-inverts the UCT quotient. The surviving direct false-statement consumer uses a finite explicit counterexample. A formerly dependent counterexample now computes its finite UCT sequence directly at hash `406317c7966316717501ff7a5c0ec7b71599610e0d8d876afadbf205a378e5c6`; its section obstruction is correct and no AC premise is imported. |
| `thm-the-two-strand-braid-group-is-infinite-cyclic` | `0725fb0f06de97c0aa250b91f452d42a3fd9871dcdccfe38485375b093a3ab65` | **Pass.** The Artin presentation for two strands has one generator and no relations; reduced-word normal form distinguishes every nonzero power from the identity. The four direct consumers use only this infinite-cyclic or infinite-order conclusion. Prior ledger records the owner proof repair, with old audit/judge stamps removed. |
| `thm-total-variation-function-of-an-absolutely-continuous-function` | `760647c729192678def66b58335ae20769f8fb0eb5e1e60753c1a5c97590a327` | **Pass.** The ACω/DC-qualified fundamental theorem of calculus gives $F'=f$ a.e. and variation bounded by the integral of $|f|$ on every subinterval. Additivity makes $V_F$ absolutely continuous; the derivative sandwich $|F'|\le V_F'\le |F'|$ a.e. and the sharp FTC give $V_F(x)=\int_a^x|F'|$. This supplies the equality that the cited Srivastava corollary alone did not prove. No direct item consumer found. |
| `thm-totality-is-not-recognizable` | `0d7f9d8ae294b3b00b6931bc63c65beb23b4032df94b3428c3b5c09207a48619` | **Pass.** The many-one reduction from the full complement of HALT first decides code syntax and maps malformed strings to a fixed total machine. On valid pairs, the output machine tests bounded halting and loops after detecting it; its totality is equivalent to nonhalting. The malformed-input gap in the prior receipt is closed. No direct item consumer found. |
| `thm-two-metric-spaces-are-quasi-isometric-exactly-when-they-contain-bilipschitz-equivalent-separated-nets` | `3bdbc92cba7b710df4e487ec5666b643f078f3eddc97ed2a0cc8a9dd79d3bd40` | **Pass.** AC/Zorn yields maximal separated nets, including the empty-space cases. On such nets the additive quasi-isometry error is absorbed by positive separation; conversely nearest-net choices give coarse Lipschitz quasi-inverses and density. The formerly defective characterization corollary is not used. No direct item consumer found. |
| `thm-universal-coefficient-theorem-for-homology-over-a-pid` | `0674fc2916799374601a7d43b9cbb7c2ba5c503722dc572d8dbcd08c4f987172` | **Pass.** AC meets the freeness/flatness premise for cycles and boundaries. Tensoring the two cycle-boundary sequences gives the natural edge injection and identifies the quotient with the Tor kernel from a free presentation. Direct consumers carrying the general UCT supply AC; finite examples use direct calculations. The formerly dependent choice-free cyclic example now computes kernel/cokernel of multiplication $m$ directly at hash `4a10b33e737cb41b7c084ef5f31f8ae19f3c19c3a1286133c0483e62c3a0d819`. |
| `thm-von-mangoldt-explicit-formula-smoothed` | `8f6c811f3691f0b5064df7526ca551125429ddb8d361654f43cdad4aa69b85b4` | **Pass.** The smoothing Mellin kernel $\Phi(s)=(y^{s+1}-x^{s+1})/((y-x)s(s+1))$ has residue one at zero and a removable singularity at $-1$. Perron inversion recovers the smoothed prime sum. The zero-count supplier gives $O(\log T)$ unit-height counts, admissible contour heights avoid zeros, horizontal/left integrals vanish, and $s^{-2}$ makes the zero sum absolutely convergent. The ACω premise is carried by both direct consumers. |
| `thm-wiener-lemma-for-absolutely-convergent-fourier-series` | `177cba2220b3313088976e8ddcdffef4d0ba081b8e3caee5128a673d2fceb519` | **Pass.** Under its explicit AC premise, a nonunit has a character via a maximal ideal. Character continuity and the Fourier generators force that character to be evaluation at some point of the circle, contradicting nowhere-vanishing. The inverse therefore lies in the Wiener algebra. The holomorphic-functional-calculus corollary's cited use is compatible. |

The direct-consumer defect found during this audit was
`ex-free-groups-acting-geometrically-on-regular-trees`: its Proof 1.1 calls
the **vertex set** of a Cayley graph geodesic in the graph metric, but that
discrete metric space is not geodesic. Consequently its Step 2.1 does not meet
the geodesic hypothesis of `thm-svarc-milnor-lemma`. The owner repaired it by
using the geometric realization of the unit-edge tree, extending translation
to edges, proving the tree geodesic, and proving properness for **arbitrary
bounded** $B,C$: an intersection $gB\cap C\ne\varnothing$ bounds
$d(x_0,gx_0)$ by the two set radii, and finite valence plus free vertex action
leave finitely many $g$. The all-vertex orbit is $1/2$-dense. I independently
reread the full final example and its action/Švarc–Milnor supplier contracts;
the repaired consumer **passes** at complete-file SHA-256
`9f53ec0471963244e11a17043ea3956834330cae9efbea49734b5fd52e90db6a`.
Its Example statement changed to name the geometric realization; no item
directly cites this example. This was a downstream consumer issue, not a defect
in the audited Švarc–Milnor proof. I made no item, plan, ledger, or
verification edits.

Two other formerly dependent UCT consumers were independently reread after
the owner's direct-calculation repairs:
`cex-the-universal-coefficient-splitting-cannot-in-general-be-chosen-naturally`
at complete-file SHA-256
`406317c7966316717501ff7a5c0ec7b71599610e0d8d876afadbf205a378e5c6`
and `ex-uct-homology-with-z-mod-m-coefficients` at complete-file SHA-256
`4a10b33e737cb41b7c084ef5f31f8ae19f3c19c3a1286133c0483e62c3a0d819`.
Both **pass** as choice-free finite calculations: the counterexample computes
the $e$/$f$ UCT outer maps and the $(a,b)\mapsto(a,a+b)$ obstruction to a
natural section directly; the cyclic example computes the kernel and cokernel
of multiplication by $m$ on $\mathbb Z/r$ directly. Neither proof invokes an
AC-qualified general UCT theorem after repair.

Prior-receipt anchors are the applicable item findings in
`research/published-consumer-supplier-ledger.md`, plus
`research/up-1630-review/agent-09-receipts.jsonl` (Smirnov),
`research/up-229-astra-review/agent-04-receipts.jsonl` (maximum principle and
von Mangoldt), `research/up-229-astra-review/agent-07-receipts.jsonl`
(transpose), `research/up-1630-review/root-repairs.jsonl` (Cayley tree),
`research/up-1630-review/agent-06-receipts.jsonl` (UCT splitting),
`research/up-1630-review/agent-07-receipts.jsonl` (variation),
`research/up-1630-review/agent-08-receipts.jsonl` (totality), and
`research/up-1630-review/agent-10-receipts.jsonl` (PID UCT). The separated-nets
and Wiener repairs also have the corresponding reports under
`research/pre-phase-2-screening/sol10-assignments/`. Švarc–Milnor and B₂
are bound here to their current owner-repaired bytes; their earlier ledger
entries are not substitute verdicts.

The item source metadata names the UCR Smirnov notes; Hunter's PDE notes;
the Mustansiriyah functional-analysis notes; Löh and Druțu–Kapovich for
geometric group theory and Cayley graphs; Weibel for both UCT theorems;
arXiv:0804.3587 for braids; the IIT Guwahati measure-theory notes for
variation; Rochester computability notes for totality; BYU/UCLA 205a notes
for the explicit formula; and arXiv:0903.3845 plus Müger's functional-analysis
notes for Wiener. These are provenance anchors, not claims of fresh source
verification. The prior variation receipt explicitly records reading
Srivastava's Corollary 4.38 and its narrower upper-bound content; the local
derivative argument supplies the equality.
