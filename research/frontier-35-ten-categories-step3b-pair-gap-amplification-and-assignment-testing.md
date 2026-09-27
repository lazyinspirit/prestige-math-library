# Step 3b dispatch report — pair `gap-amplification-and-assignment-testing`

Run `frontier-35-ten-categories`; batch 12 (shared with the sibling pair 643/644
`the-ip-equals-pspace-theorem`, owned by another group — its rows in every shared
batch file are left untouched). Role `alpha-high`, label
`step3b-pair-gap-amplification-and-assignment-testing-7712dd623b686337`.
A page `gap-amplification-and-assignment-testing` (order 647, computability-theory),
B page `gap-amplification-and-assignment-testing-examples` (order 648). This
dispatch owns only this pair.

Binding design: `research/plan-computability-theory-track.md` §47
(lines 2015-2080), which §44 makes supersede TC-34. Step-3a scope receipt
`research/frontier-35-ten-categories-step3a-review-gap-amplification-and-assignment-testing.json`
(`decision: sufficient`) is current for the pre-author inventory; it is refreshed
by this dispatch after the local additions and dependency re-sync.
At dispatch time,
`research/frontier-35-ten-categories-owner-authoring-direction.md` recorded
only the batch-8 smooth-projective pair and the batch-13
pseudointersection-number theorem. It now also records the batch-12 owner
deferral below.

## 2026-09-26 owner correction — supersedes the original PASS labels below

The original dispatch's PASS labels for A31–A34 and B2 were wrong. In A31 the
unit-vector encoding loses a factor $2/s$ and the raw named input bit is only
one coordinate alongside length-$s$ blocks, so the asserted constant
relative-distance bound for a violated outer constraint does not follow. In
A32 the resulting factor $\varepsilon'/(q s_t)$ cannot be overcome by
$\sqrt t$: the powered alphabet size
$s_t=|\Sigma|^{(2D)^{t+\lceil\sqrt t\rceil}}$ grows much faster than $t$.
Its explicit walk enumeration is also exponential in variable $t$, contrary
to the polynomial-in-$t$ wording. A33–A34 and B2 rely on this unproved
amplifier. Dinur §9 cites the stronger Dinur–Reingold assignment-tester
composition theorem (his bibliography [11]); the original draft incorrectly
attributed that citation to a different robust-PCP paper. The stronger
input-preserving theorem has not been proved locally and is not silently
imported here.

The five drafts, their prior review receipts, and the pre-deferral batch
carriers are preserved in
`research/frontier-35-ten-categories-batch-12-deferred-20260926/` and recorded
in `research/frontier-35-ten-categories-deferred-items.json`. The current
manifest and A/B pages retain 31 A items and 3 B examples; all results
through A30, plus A35 and B1/B3/B4, remain in scope. The work log that follows
is an historical authoring checkpoint, not a current certification of the
five deferred items.

The retained `lem-exponential-base-assignment-tester-from-quadratic-oracles`
also needed a small-size padding repair. Its original $L=n2^{2N^2}$ need not be
divisible by the tensor-test family size $2^{N^2+4N}$ when $1\le N<4$.
The current proof takes $L=\max(1,n)2^K$ with $K$ at least every family
exponent, skips the empty comparison family at $n=0$, and proves the uniform
$2^{6(n+m)^2+3}$ size bound. The batch-12 proof contract records the exact
new step and its $N=0,1$ boundary checks. The corrected tester retains the
same statement and constant rejection ratio.

## Work log (checkpointed after each item)

Status: complete. All 39 items were authored in page/prerequisite order; the log below
records the state at each checkpoint (later notation/precision fixes are listed again in
the closing section).

1. `def-gap-preserving-csp-reduction` — definition only.
2. `lem-complete-linear-blowup-reductions-compose` — PASS. Value one, gap map
$g_2\circ g_1$, blowup $C_1C_2$ and polynomial time for fixed parameters; the
intermediate alphabet and degree are checked against $R_2$'s hypotheses.
3. `def-degree-reduction-by-expander-clouds` — definition. One port per incidence, the
reverse-paired degree-$128$ expander inside each cloud with equality relations, the external
edges, the tautological $387$-regular overlay and the plurality decoding $D$; every step a
fixed function of the explicit input.
4. `lem-cloud-consistency-forces-near-constant-labels` — PASS. $U_{\rm int}\ge(7/20)S$ and
$U_G\le U_{\rm ext}+S$ by counting the ports whose label differs from the cloud plurality
label; loops and repeated vertices counted with multiplicity.
5. `thm-degree-reduction-preserves-unsatisfaction` — PASS.
$\operatorname{UNSAT}(G_2)\ge\operatorname{UNSAT}(G)/(387K)=7/7740$ with $K=20/7$, value one
preserved, $387$-regular output on $2|E(G)|$ vertices; local supplier to items 15 and 32.
6. `def-constraint-graph-powering` — definition. $L=2t+1$ lazy walks, view alphabet
$\Sigma^{\mathcal P_R}$ with $R=t+\lceil\sqrt t\rceil$, one slot per pattern and starting
vertex, central window $J$, reversal pairing, explicit tables.
7. `lem-canonical-local-view-lift-preserves-perfect-satisfiability` — PASS by the canonical
lift (restriction on every local-view coordinate); edgeless case by the published convention.
8. `def-plurality-decoding-of-powered-local-views` — definition; fix a total order on
$\Sigma$, count length-$t$ lazy patterns with multiplicity, decode each vertex by the least
maximally claimed symbol. Pins the claim/reversal convention used by items 9-14:
$X_{v,\ell}$ = value claimed for $v$ by the view at the endpoint of a uniform lazy pattern of
length $\ell$ from $v$. Rendercheck OK, precheck n/a.
9. `lem-lazy-walk-lengths-within-root-t-have-close-endpoint-laws` — PASS. Binomial move-count
law, exact central-binomial constant $C_0=1/\sqrt{2\pi}$, adjacent-transition mass transfer,
monotone maximum mass, coupling transfer to claims and endpoints, and the
$c\sqrt t$-window total-variation corollary $\mathrm{TV}\le1/(4|\Sigma|)$. Local supplier to
items 10 and 14.
10. `lem-plurality-consistency-along-middle-walk-positions` — PASS. Sub-window
$J_c=\{j\in J:|j-1-t|\le c\sqrt t\}$, $c=1/(4C_0|\Sigma|)$, conditional on a fixed traversed
slot: both endpoint claims equal the decoded labels with probability $\ge1/(4|\Sigma|^2)$.
Renumbered to canonical 1.1, 2.1, 2.2, 3.1.
11. `lem-expander-walk-violated-edge-collision-bound` — PASS. Two-point bound
$\Pr[A_j\mid A_i]\le\varepsilon/2+\alpha_L^{j-i-1}\sqrt{d/2}$, $\alpha_L=(1+\alpha)/2$; summed
collision bound $\sqrt{d/2}(k^2\varepsilon^2+k\varepsilon/(1-\alpha))$, $O(k\varepsilon)$ on
$k\varepsilon\le c$; loops allowed (repair of the scaffold's nonloop restriction, which the
regularized-to-powered application does not need but the general statement does).
12. `lem-overlap-controlled-union-lower-bound` — PASS. Second-moment union bound
$\Pr[\cup B_i]\ge S/(1+2C)$; $S=0$ handled separately. Scaffold dep on item 11 removed
(the cited supplier of the ratio $C$ is the consumer item 14, which is recorded there).
13. `lem-powering-preserves-perfect-satisfiability` — PASS. Canonical lift gives
val one $\Rightarrow$ val one; edgeless case deferred to the published convention.
14. `lem-powering-amplifies-small-gaps` — PASS. Full union-bound proof with the two regimes
($k\varepsilon_F\le1$ gives $\Theta(\sqrt t\varepsilon_F)$; $k\varepsilon_F>1$ gives $\Omega(1)$),
yielding $\operatorname{UNSAT}_\varphi(G_t)\ge\beta\sqrt t\min(\operatorname{UNSAT}(G),1/t)$
uniformly in the powered labeling; no parity hypothesis needed in this parameterization
(strengthening of the scaffold's "even $t$").
15. `thm-gap-amplification-step` — PASS. Composes $R_{\deg}$ ($D=387$, $K=20/7$, loss $DK$)
with powering through `lem-complete-linear-blowup-reductions-compose`; output alphabet
$|\Sigma|^{D^{O(t)}}$, degree/blowup $D^{O(t)}$, gap map $\beta\sqrt t\min(\varepsilon,c/t)$
with $c=DK$, $\beta=\beta_0/(DK)$; edgeless inputs and determinism stated. Scaffold dep
`cor-explicit-polynomial-time-constant-degree-expanders-exist` dropped: the explicit family is
carried inside $R_{\deg}$'s own published construction (noted for the report).
16. `def-explicit-constant-rate-constant-distance-code` — definition; rendercheck OK. Fixes the
family conventions (length function $N(k)$, rate, relative distance, one deterministic polynomial
encoder) used by items 18–22.
17. `def-reed-solomon-outer-code-and-binary-linear-inner-code` — definition; rendercheck OK.
Power-of-two field $q=2^m$, $K=q/2$ messages, first irreducible polynomial in a fixed enumeration,
power-basis bit encoding $\mathrm{enc}$ (renamed from $\iota$ by the closing content-policy
pass), $16m\times m$ inner matrix and the tensor/message-indexing
conventions of the concatenation.
18. `lem-reed-solomon-outer-code-has-constant-rate-and-distance` — PASS. Rate $1/2$; root bound
$K/q=1/2$ on the distance; the $q=2$, $K=1$ repetition case covered.
19. `lem-random-linear-inner-code-has-fewer-than-one-bad-codeword-in-expectation` — PASS. $16m\times m$
uniform binary matrix, Chernoff $\mu=8m$ at $\alpha=1/2$ gives $\le e^{-m}$; union bound over
$2^m-1$ nonzero messages gives $<1$, so a matrix with *no* bad codeword exists.
20. `lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time` — PASS
(`constructive`). Deterministic conditional-expectation derandomisation with exact rational
comparisons; injective linear inner code of rate $1/16$ and distance $\ge1/4$.
21. `lem-concatenated-code-multiplies-rate-and-distance` — PASS. Rate product and the $\delta_o\delta_i$
distance product for an injective linear inner code, with the block-error counting written out.
22. `thm-explicit-code-construction-and-distance` — PASS after canonical renumbering. $m(k)$
minimal with $2^{m-1}m\ge k$, zero padding, $N(k)<128k$, rate exactly $1/32$, distance $\ge1/8$,
one deterministic polynomial-time uniform encoder; $k=1$ and the $m=1$ repetition case covered.
23. `def-assignment-tester-and-rejection-ratio` — definition. Arity-$\le q$ constraint systems
(list semantics, substitution rule, value fraction) agreeing with the binary constraint-graph
convention; named input coordinates $X$; $\delta(\cdot,\operatorname{SAT}(C))$ with the value $1$
on $\operatorname{SAT}(C)=\varnothing$ and the $n=0$ convention; perfect completeness and the
proportional soundness clause $\operatorname{UNSAT}_{a\cup b}\ge\rho\,\delta$. No complexity
clause is asserted by the definition itself.
24. `def-hadamard-linearity-constraint-system` — definition. One ternary constraint
$(x,y,x+y)\mapsto(a+b=c)$ per ordered pair $(x,y)$ over the table coordinates; multiplicities and
coincident coordinates handled by the substitution rule; $\varepsilon_{\rm lin}(f)$ equals the BLR
rejection probability; perfect completeness for linear tables; random constraint = three table
queries.
25. `thm-linearity-test-rejects-proportionally-to-distance` — PASS. $M=\max_a\widehat h(a)$,
$2\alpha-1=\sum\widehat h^3\le M\sum\widehat h^2=M$, and
$\operatorname{dist}(f,\ell_a)=(1-\widehat h(a))/2$, hence $\varepsilon\ge\operatorname{dist}(f,\Lambda)$
with no restriction on $\alpha$; $n=0$, linear and constant tables and the non-tight example
$f=\ell_u+1$ ($\varepsilon=1$, $\operatorname{dist}=1/2$) all checked. Uses the published Fourier
chain `lem-blr-acceptance-fourier-identity` + `lem-boolean-cube-fourier-inversion-and-parseval`
(new cross-page deps, to be recorded in the dependency input).
26. `def-quadratic-consistency-test` — definition. Tensor $r\otimes s$ with row-major coordinate
order; ideal test $g(r\otimes s)=f(r)f(s)$ with three queries and perfect completeness for
$(\ell_u,\ell_{u\otimes u})$; self-corrected implementation with six queries and independent auxiliary
points; no error bound asserted (that is item 27).
27. `lem-quadratic-test-soundness` — PASS. $D=w-u\otimes u\ne0$ has a nonzero column, half the $r$ give
$rD\ne0$, then half the $s$ give $rDs=1$, so the ideal rejection is $\ge1/4$; with $\delta_f,\delta_g<1/4$
the three self-corrections fail with union-bound probability $\le4\delta_f+2\delta_g$, giving
$1/4-4\delta_f-2\delta_g$, and $\ge0.19$ at $\delta\le1/100$. Half-cube fact cited from
`lem-boolean-cube-fourier-inversion-and-parseval`; self-correction from `thm-linear-self-correction`.
28. `lem-circuit-satisfaction-is-linear-quadratic-consistency` — PASS. Wire vector $w\in\mathbb F_2^N$,
$N=n+m$, $m+1$ affine-quadratic equations with diagonal linear terms and constants ($u_i^2=u_i$);
NOT/AND/OR/constants/output tables; exact extension equivalence and uniqueness by induction along the
topological order; random subsum $z\cdot v=1$ with probability exactly $1/2$, tested by one tensor query
$g(A(z))$ against $b(z)$.
29. `lem-exponential-base-assignment-tester-from-quadratic-oracles` — PASS (`constructive`). Tables $f$
on $\mathbb F_2^N$ and $g$ on $\mathbb F_2^{N\times N}$ plus the $n$ raw input coordinates; five families
$(\mathrm L_f),(\mathrm L_g),(\mathrm T),(\mathrm S),(\mathrm C)$, arity $\le6$ over $\{0,1\}$, padded by
duplication so each family has $L=n2^{2N^2}$ constraints; $\rho=1/500$ from the four soundness cases
($\varepsilon_0=1/100$, unique linear decoders, $19/500$, $49/500$, $\tfrac{49}{500}\delta$); exact
extension and comparison families give the proportional-in-$\delta$ clause; total size $2^{q(n+m)}$.
Scaffold deps extended by the published Fourier/self-correction suppliers and the new in-batch items
25, 27, 28.
30. `lem-trivial-circuit-constraint-system-is-a-weak-assignment-tester` — PASS. Alphabet
$\Sigma_0=\{0,1\}^3$ with designated symbols $(0,0,0),(1,1,1)$; wire loops $D$, gate loops $D_g$ and
projection edges $P_1,P_2,P_3$; $M\le(n+m)+4m+1$; completeness from the evaluation labeling; soundness by
an induction showing any satisfying labeling evaluates the circuit at the given input, so $x\notin
\mathrm{SAT}(C)$ forces $\ge1/M$ violations, hence ratio $1/M=1/O(m+n)$ including $\mathrm{SAT}(C)=\varnothing$.
31. `lem-constant-alphabet-assignment-tester-composition` — PASS (`constructive`). Blocks of $s=|\Sigma|$
coordinates with the unit-vector code ($\rho_{\rm enc}=2/s$), identity encoding on the raw input
coordinates (so no block comparison is needed), robustized circuits of constant size, inner tester applied
per outer constraint, families padded with tautologies to $B$ constraints; completeness glues the disjoint
auxiliary extensions; soundness decodes each block once and gets $\mathrm{rdist}\ge\rho_{\rm enc}/(2q)$ per
violated outer constraint, hence ratio $\varepsilon\beta_3$ with $\beta_3=\varepsilon'/(qs)$ and size
$\le(s+B)M$. Scaffold dep `thm-degree-reduction-preserves-unsatisfaction` dropped: not used here (the
degree-reduction input is item 32's business).
32. `lem-proximity-gap-amplification-preserves-input-coordinates` — PASS after a substantive
repair. The scaffold's instruction to pad "so that exactly half the slots are comparison
slots" is not attainable at constant cost: the powered family has $n_H=2M(2D)^{2t+1}$ slots
against $n_C=nd_X(2D)^t$ comparison slots, a ratio $2M(2D)^{t+1}/(nd_X)$ that is unbounded in
$M$ (for the trivial tester, $nd_X=1$ against $M\approx m$). The construction now reweighs by
whole-list replication: with $r:=\lceil n_H/n_C\rceil$ the replicated comparison family has
$r\,n_C\in[n_H,2n_H]$ slots, so the comparison family carries at least half and the powered
family at least a third of the weight of $H'$, and $|E(H')|\le3n_H\le6M(2D)^{2t+1}$. Because
whole-list replication preserves the internal violated fraction, the far case gives
$\operatorname{UNSAT}_{H'}\ge\frac12\cdot\frac{\delta}{8}=\frac{\delta}{16}$ exactly as the
scaffold intended, while the close case becomes
$\bigl(\beta_0/(6DK)\bigr)\sqrt t\min(\rho,1/t)$; the fixed-inner-tester composition factor
$\varepsilon'/(qs_t)$ and the $7$-fold binary arity conversion turn this into
$\min\{2\rho,t^{-1}\}$ for $t\ge t_1$, with $t_1$ enlarged so that the displayed constants
dominate. The statement now records explicitly that (i) the size constant $C_t$ depends on
$t$ — the powering lists $(2D)^{2t+1}$ slots per port, so no single $C$ can be independent of
$t$ — and (ii) the input is required to be input-balanced with each named input coordinate
recurring exactly $r\,d_X(2D)^t$ times, which is exactly what the far case's equal-weight
counting consumes; the output is input-balanced again. Determinism, enumeration of all
choices and polynomial time in the output size and $t$ are verified, and the $n=0$ case
makes $H'=H$ with no comparison slots. Precheck PASS, rendercheck OK, contract strict-clean
with all eight boundary cases; supplies items 33-34 and example B2.
33. `thm-constant-query-assignment-tester` — PASS. Balanced base system
$M_1\le6(m+n+1)^2$, $K=\lceil\log_2M_1\rceil$ iterations of the amplification map, constant
ratio $\rho^\ast=t^{-1}$, at most $(m+n)^c$ constraints, deterministic polynomial
construction. The statement now fixes $t\ge t_1$ and $C:=C_t$ as supplied by item 32, matching
its own [F2].
34. `lem-tester-size-and-construction-time-are-polynomial` — PASS. $M_K\le C\,M_1^{1+\log_2C}$,
$\sum_{j\le K}M_j\le(K+1)M_K$ (the $C=1$ case no longer divides by $C-1$), $K=O(\log(m+n))$
and deterministic polynomial total time.
35. `fs-repeating-constraints-amplifies-the-gap` — false statement; refuted by its witness
pair with the counterexample below, with both directions (all $r\ge1$, and every instance)
stated.
B1. `ex-degree-reduction-preserves-unsatisfaction` — PASS. $S=10$, $U_{\rm int}=4$,
$U_{\rm ext}=2$ give $U_{\rm int}\ge(7/20)\cdot10=7/2$ and $U_G\le12$, consistent with the
integer value $4$; the $387$-regular overlay enters only through the constant rescaling
$7/7740$, not as a count identity, and no stronger local bound is asserted. Manifest summary
re-synced from $3.5$ to $7/2$.
B2. `ex-tester-size-and-construction-time-are-polynomial` — PASS. Base ratio $1/M$ doubled
at fixed cost $C$ reaches the saturation value $t^{-1}$ after $K=\lceil\log_2M\rceil$ steps
and leaves at most $C\,M^{1+\log_2C}$ constraints; $C$ never depends on $M$.
B3. `cex-repeating-constraints-amplifies-the-gap` — PASS. The one-variable system with a
tautological loop and an empty loop has $\operatorname{UNSAT}=1/2$, and listing both
constraints $r$ times gives $r/(2r)=1/2$ for every $r\ge1$: the false statement fails at this
witness.
B4. `ex-plurality-decoding-of-powered-local-views` — PASS after pinning the parameters to
$d=4$, $t=1$ (so that $(2d)^t=8$): claims $a,a,a,a,a,b,b,c$ give opinions $5/8$, $2/8$,
$1/8$ and decoding $a$ of frequency $5/8$ with no tie break; multiplicity counting of
patterns and the irrelevance of the tie rule are both exhibited. Manifest summary re-synced
to the pinned parameters.

## Completed IDs, checks and open obligations

**Completed IDs (39).** A page `gap-amplification-and-assignment-testing`:
`def-gap-preserving-csp-reduction`, `lem-complete-linear-blowup-reductions-compose`,
`def-degree-reduction-by-expander-clouds`, `lem-cloud-consistency-forces-near-constant-labels`,
`thm-degree-reduction-preserves-unsatisfaction`, `def-constraint-graph-powering`,
`lem-canonical-local-view-lift-preserves-perfect-satisfiability`,
`def-plurality-decoding-of-powered-local-views`,
`lem-lazy-walk-lengths-within-root-t-have-close-endpoint-laws`,
`lem-plurality-consistency-along-middle-walk-positions`,
`lem-expander-walk-violated-edge-collision-bound`, `lem-overlap-controlled-union-lower-bound`,
`lem-powering-preserves-perfect-satisfiability`, `lem-powering-amplifies-small-gaps`,
`thm-gap-amplification-step`, `def-explicit-constant-rate-constant-distance-code`,
`def-reed-solomon-outer-code-and-binary-linear-inner-code`,
`lem-reed-solomon-outer-code-has-constant-rate-and-distance`,
`lem-random-linear-inner-code-has-fewer-than-one-bad-codeword-in-expectation`,
`lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time`,
`lem-concatenated-code-multiplies-rate-and-distance`,
`thm-explicit-code-construction-and-distance`, `def-assignment-tester-and-rejection-ratio`,
`def-hadamard-linearity-constraint-system`,
`thm-linearity-test-rejects-proportionally-to-distance`, `def-quadratic-consistency-test`,
`lem-quadratic-test-soundness`, `lem-circuit-satisfaction-is-linear-quadratic-consistency`,
`lem-exponential-base-assignment-tester-from-quadratic-oracles`,
`lem-trivial-circuit-constraint-system-is-a-weak-assignment-tester`,
`lem-constant-alphabet-assignment-tester-composition`,
`lem-proximity-gap-amplification-preserves-input-coordinates`,
`thm-constant-query-assignment-tester`,
`lem-tester-size-and-construction-time-are-polynomial`,
`fs-repeating-constraints-amplifies-the-gap`. B page
`gap-amplification-and-assignment-testing-examples`:
`ex-degree-reduction-preserves-unsatisfaction`,
`ex-tester-size-and-construction-time-are-polynomial`,
`cex-repeating-constraints-amplifies-the-gap`,
`ex-plurality-decoding-of-powered-local-views`. Every item is authored in full
(definitions, proofs, example calculations and the counterexample witness) and registered in
the batch manifest, coverage, cross-batch input and proof-contract file. Library homes
`library/computability-theory/gap-amplification-and-assignment-testing.md` and
`...-examples.md` were created with the 35 items / 4 examples in manifest order.

**Checks actually run (all at the final content state).**

- `node tools/tsx-run.mjs tools/precheck.mts <39 items>` — `30 checked, 0 failing — all clean`
  (the nine definitions are not proof-bearing).
- `node tools/rendercheck.mjs <39 items> <2 library pages>` — `OK — 41 file(s)`.
- `node tools/proof-contract.mjs research/frontier-35-ten-categories-batch-12.proof-contracts.json --strict`
  — `0 error(s), 0 warning(s), 60/60 item(s) checked` (the file's scope is the whole batch,
  21 sibling rows and my 39; every entry carries exact citation quotes, per-step derivations
  with stated inputs, and all eight boundary cases).
- `node tools/manifest-deps.mjs research/frontier-35-ten-categories-batch-12.pages.json` —
  `63 item(s), 0 normalized, 0 error(s)`; all 39 of my rows carry `deps` equal to the item
  frontmatter lists (verified by direct comparison).
- `node tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-12.coverage.json`
  — `2 page(s), 83 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs research/frontier-35-ten-categories-batch-12.pages.json` —
  `63 scoped item(s), 0 error(s), 0 warning(s)`. This gate fired three
  `notation-iota-applied` findings (items 17, 21, 32); the power-basis bit encoding was
  renamed to `\mathrm{enc}` in items 17, 18, 21, 22 and the bit-to-constant-view embedding to
  `\kappa` in item 32, a pure notational change with no mathematical content removed.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0, declared order acyclic and
  consistent, no item-level cycles/forward references/unresolved ids. Pre-splice mismatches
  for Step 4 are recorded below.
- `node tools/manifest-integrity.mjs --run frontier-35-ten-categories` — `52 page(s) owed,
  52 in the manifests, no scope drift`.
- `node tools/audit-manifest.mjs research/frontier-35-ten-categories-batch-12.pages.json` —
  `256 relationship(s) over 63 item(s), 0 defect(s)`; every dependency of my items resolves
  either inside the pair or to a published item outside the run (60 edges, 27 distinct
  suppliers, no unresolved or forward edges).
- Item decisions: `node tools/step3-decisions.mjs record-item` for all 39 IDs with
  `--decision accept --confidence 1`, the examined dependency list, and an item-specific
  evidence reason. After recording, one final Remarks re-sync inside item 32 changed the
  transitive inputs of three consumers (`thm-constant-query-assignment-tester`,
  `lem-tester-size-and-construction-time-are-polynomial`,
  `ex-tester-size-and-construction-time-are-polynomial`), so those three receipts were
  re-recorded against the re-synced inputs. A direct `itemHash` sweep over the pair then
  verifies all 39 receipts current at the frozen content state, i.e. `check --phase final`
  restricted to my pair reports all 39 closed (the run-wide final check necessarily stays
  open until the other 25 pairs record theirs).
  The pair's scope receipt was refreshed twice with concrete evidence (after the summary
  re-sync and after the item-33 statement precision fix); both are non-owner `sufficient`
  decisions, and no escalation was raised or overridden.
- `node tools/frontier-dependency-ledger.mjs` `collect()` (read-only) — all batches
  reviewed, `0` edges touching batch 12, no orphan reviews; the batch-12 cross-batch input
  therefore correctly stays `[]`.

**Local suppliers added (4, as certified in the Step-3a scope receipt).**
`lem-trivial-circuit-constraint-system-is-a-weak-assignment-tester`,
`lem-exponential-base-assignment-tester-from-quadratic-oracles`,
`lem-constant-alphabet-assignment-tester-composition` and
`lem-proximity-gap-amplification-preserves-input-coordinates`, plus the supporting walk
items 9-14 and the code items 16-22. They were authored on the assigned A page before their
consumers, and they are registered in the manifest, coverage, contracts and cross-batch
input.

**Dependency changes made in this dispatch (all reported here, none silent).**

- Item 32: statement now requires an input-balanced tester and an input-balanced output, and
  records the $t$-dependence of $C_t$; the reweighing construction replaces the unattainable
  "exactly half" padding.
- Item 33: statement fixes $t\ge t_1$ and $C:=C_t$ of item 32.
- Dropped scaffold dependencies: `cor-explicit-polynomial-time-constant-degree-expanders-exist`
  from item 15 (the explicit family is carried inside $R_{\deg}$), item 11 from item 12 (the
  ratio $C$ is supplied by the consumer), and `thm-degree-reduction-preserves-unsatisfaction`
  from item 31 (not used there; it is item 32's input).
- Added dependencies: item 25/27/28 gained the published Fourier/self-correction suppliers
  `def-linearity-test`, `lem-blr-acceptance-fourier-identity`,
  `lem-boolean-cube-fourier-inversion-and-parseval`, `def-self-correction-of-a-noisy-linear-function`
  and `thm-linear-self-correction`; item 32 gained items 29-31 and the published
  `def-constraint-graph-and-labeling-value`; item 15's [F1] cites the published
  `lem-constraint-expander-overlay`.
- Notation: the power-basis encoding is `\mathrm{enc}` (items 17, 18, 21, 22) and the
  bit-to-constant-view embedding is `\kappa` (item 32).
- Manifest: 29 rows were re-synced to the item frontmatter dependency lists, and three
  statement summaries were aligned with the authored items (item 32, B1, B4).

**Published items touched or potentially affected.**

- `items/thm-gap-amplification-step.md` (status published) had its `deps` list extended by
  `lem-constraint-expander-overlay`, whose construction its fact [F1] cites but which was
  undeclared. The item's body, statement and proof are unchanged. This is the only published
  file edited by this dispatch; it is an interface-compatible dependency declaration, not a
  mathematical repair, and it is flagged for the serial reconciler.
- No potentially defective published item was identified. The published suppliers actually
  used (`def-constraint-graph-and-labeling-value`, `def-constraint-graph-regularization`,
  `lem-constraint-expander-overlay`, `lem-cloud-plurality-rounding`,
  `lem-regularization-preserves-value-quantitatively`, `def-circuit-sat`,
  `def-boolean-circuit-size-depth-fanin-and-basis`, `def-linearity-test`,
  `thm-linear-self-correction`, `lem-blr-acceptance-fourier-identity`,
  `lem-boolean-cube-fourier-inversion-and-parseval`, `def-self-correction-of-a-noisy-linear-function`,
  `thm-root-bound-for-polynomials-over-a-domain`, `thm-existence-of-finite-fields`,
  `thm-simple-algebraic-extension-quotient-power-basis-and-degree`,
  `cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree`,
  `lem-chernoff-bound-for-bernoulli-trials`, `cor-expectation-of-an-indicator-is-probability`,
  `def-expectation-on-a-finite-probability-space`, `def-independent-families-of-event-classes`,
  `cor-central-binomial-coefficient-asymptotic-from-wallis`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`,
  `def-regular-multigraph-and-normalized-adjacency`, `def-graph-power-and-walk-constraint`,
  `def-gap-csp`, `lem-of-no-zero-divisors`, `lem-expander-walk-contraction`) are quoted
  verbatim (full statement sections) in this batch's proof-contract entries, and their cited
  hypotheses were checked against those statements at each point of use; no defect was found
  in that use. This is not an audit of those items.

**Open obligations handed to Step 4 / the owner.**

- Pre-splice plan mismatch: `research/plan-spec.json` rows 647 and 648 still carry no item
  lists (the plan is spliced from batch manifests at Step 4). The route is otherwise
  consistent; no dependency of mine is unresolved.
- Informational `redundant-prereq` warnings on page 647: `the-cook-levin-theorem` and
  `algebraic-extensions-degree-and-finite-fields` are already reachable transitively through
  `expander-graphs-and-constraint-graphs`. The direct edges were added deliberately by the
  operator in Step 1 (batch-12 notes) to match the TC-34 design, so they are left in place
  for the owner; no local change was made.
- All four requires-edges of page 647 point at published pages outside this run, so batch 12
  contributes no cross-batch edge; the batch-12 dependency input stays `[]` and the run-level
  `research/frontier-35-ten-categories-cross-batch-dependencies.json` was deliberately not
  rewritten by this dispatch (the serial reconciler owns it).
- Items are draft; publication and the Step-4 splice are outside this dispatch. The A page
  has no published consumers yet (verified: 0).
- Source scratch used for reading (gitignored): `scratchpad/gaat/` holds the fetched Dinur
  and Arora-Barak PDFs, their extracted texts and the helper scripts used for the contract
  bookkeeping; it is not part of the deliverable.
