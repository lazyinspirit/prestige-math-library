# Periodic analysis: immutable outside Step-5 support proposal

Run: `fluid-dynamics-all-47-2026-10-23`. Outside owner: `/root/fluid_step4_periodic_analysis`.
This is draft scientific evidence only. Native Step 5 owns decisions, repairs,
consumer certification and judgments. No live carrier, contract, metadata,
readiness, state, gate or imported/original mathematics was changed.

## Findings and complete proposed dispositions

1. **Embedding/products F2 — confirmed misdescription.** The actual current
   Fourier-space Definition and proof 3.1 give a choice-free concrete weighted
   coefficient completion. The analytic Haar/integral/real `L²` interpretation
   retains Countable Choice. The draft corrects only F2. It preserves the entire
   public embedding/product statement and its CC context.
2. **Torus Poincare F2 — confirmed unsupported supplier restatement.** The pinned
   Parseval Statement supplies the coefficient isometry and Parseval on the unit
   torus, but no derivative coefficient formula. The draft first rescales its
   normalization and proves `hat(partial_j f_a)(k) = i k_j hat(f_a)(k)` by one
   periodic integration by parts in new step 1.2. Parseval applied separately to
   the smooth components and derivatives then gives the gradient coefficient
   sum. The original constant one and full public claim remain unchanged.
3. **Polytropic variables — confirmed missing field domain.** The draft retains
   the point-state bijection and fixes the field interpretation with `C¹`
   density/velocity maps on a time interval times an open spatial domain or
   periodic torus; it specifies endpoint/periodic derivative conventions. It
   separates componentwise-integrable coefficient inputs from general completed
   coefficient coordinates. The matrix formula is explicitly defined on all of
   `R^(d+1)`, including nonpositive scalar coordinates used by the polynomial
   Galerkin approximations, while the density inverse remains positive-only.
4. **Polytropic Euler 4.1 — confirmed unspecified dependent extraction.** No DC
   premise is necessary. New 4.1 defines a deterministic scalar extraction by
   nested dyadic intervals, always retaining the left half if it has infinitely
   many indices, and otherwise the right; then it takes least admissible indices.
   New 4.2 recursively composes this specified function over the explicit
   enumeration of coefficient/rational-time coordinates and takes `N_l=h_l(l)`.
   The displayed inequality proves that `N_l` strictly increases. Each fixed
   coordinate converges along its tail, and new 4.3 proves uniform-in-time
   convergence by finite rational grids and equicontinuity. This construction
   makes no selection from successor sets. CC remains in the analytic Fourier
   context; no DC/full-AC inflation, dimension restriction, lost smoothness,
   weaker uniqueness or shorter-order conclusion is proposed. The same latent
   extraction problem in the incompressible supplier 5.1 receives the same
   complete construction, at 5.1–5.3.
5. **Global two-dimensional Navier–Stokes F1 — confirmed unused overstatement.**
   The exact old explicit lifespan is absent from the supplied public Statement
   and is not used in this proof. The draft removes that clause. Positive local
   existence and uniqueness suffice at 1.1/5.1; continuation at 4.1 uses the
   corrected continuation supplier. The logarithmic bound and all-time positive-
   viscosity two-dimensional claim remain intact.
6. **Continuation F1/F2 — confirmed substantive quantitative interface gap.**
   The formulas are actually used for uniform restart times; deleting them would
   leave a gap. The supplier proofs already prove the necessary estimates. The
   drafts expose those precise bounds in the two local IVP public Statements,
   with constants fixed before choosing data/viscosity, and correct the matching
   proof time choices. Continuation now cites those public clauses and derives
   the same common positive restart interval under bounded `H^s`, with a positive
   scalar lower bound in the Euler branch.
7. **Smooth stability — confirmed uniform-family proof omission.** Its public
   claim already promises viscosity-independent fixed-order bounds, but old F1
   gives merely finite bounds for each fixed viscosity. Draft F1 and 1.1 now use
   the enriched local public estimate for each datum and take the minimum of
   their two explicit positive times. This proves exactly the existing full
   viscosity-uniform statement. Its indirect inviscid-limit consumer already
   invokes that exact stability Statement and needs no text change.

## Why the quantitative additions are proved

For either Galerkin system, the current tame-commutator supplier and periodic
cancellation give, at every integer `m >= s`,

`(1/2) d/dt ||z_N||_(H^m)^2 <= C_m ||z_N||_(H^s) ||z_N||_(H^m)^2`.

The incompressible viscous contribution is nonpositive; thus its constants do
not depend on viscosity. The symmetric-system constants depend on `d,m,s` and
`a=(gamma-1)/2`, hence on the displayed gamma parameter, and do not depend on
kappa once the initial state is written in sound-speed coordinates.

Set `M=||z_0||_(H^s)` and `M1=max(1,M)`. Enlarge the constants to at least one.
The scalar reciprocal estimate gives `||z_N(t)||_(H^s) <= 2M` through
`T0=1/(2 C_s M1)`; zero projected data give the zero polynomial ODE trajectory.
Substitution into the all-order energy inequality and direct multiplication by
`exp(-4 C_m M t)` yield

`||z_N(t)||_(H^m) <= ||z_0||_(H^m) exp(2 C_m M t)`.

The existing bounded polynomial ODE continuation supplier covers `[0,T0]`.
The explicit canonical compactness proof, Sobolev tail estimates, and finite-sum
limits pass these inequalities to the smooth solution. For incompressible flow,
this proves the public bound at `T=T0`, for every fixed viscosity with the same
constants and time; uniqueness identifies every smooth solution with the one
constructed there.

For polytropic Euler the actual first symmetric equation gives

`||r_t||_infinity <= ||u||_infinity ||grad r||_infinity
 + a ||r||_infinity ||div u||_infinity <= C ||q||_(H^s)^2 <= Cpos M^2`.

Here `s>=4>1+d/2`, so the already supplied embedding controls both factors.
Integrating gives `||r(t)-r(0)||_infinity <= Cpos M^2 t`. Therefore

`T = min(T0, r_star/(2 Cpos M1^2))`, with `r_star=min r(0)>0`,

preserves `r>=r_star/2`. The original inverse map is smooth on this positive
compact range and gives all original density/velocity smoothness and Sobolev
claims. At a restart time, the global bound `M1` and lower bound `r_star` give
exactly the common lower lifespan used in the corrected continuation proof.
This is a claim-preserving quantitative enrichment of already locally proved
suppliers, not an additional axiom or unproved textbook import.

## Current consumer ownership and evidence

`consumer-use-matrix.json` records the complete actual union of the three
changed public interfaces and their consumers: **16 carriers**, including the
three suppliers. The current full dependency scan examined metadata of 35,597
carriers; this is a graph inventory only, not a mathematical audit of them.
Full current public claims, Facts and complete proofs (or entire proof-free
Remarks) of every carrier in the 16-item union were read. Each matrix row gives
its exact current public text, relevant locations, actual supplier use,
disposition, guarded preimage hash and paths from each affected supplier.
Direct text searches for the three interfaces found no additional direct
mentions outside this graph closure. No transitive consumer was delegated away.

`source-reading.json` binds actual local supplier reads and exact imported
public interfaces. Pinned suppliers remain byte-identical to the import ledger.
The historical `owner-step3-escalations/fourier43/choice-interface-round2.json`
and its current applied Fourier definition were checked as context, including
the prior 42-consumer distinction between coefficient and analytic choice
contexts. No previous handoff was treated as current proof acceptance.

No new external full-text retrieval was performed. This review claims only the
local/current supplier reading specified in `source-reading.json`, not new
reading of Golse, Sideris, Kuksin–Shirikyan, Tao, Schulz or other cited works,
and not a recursive proof audit of imported mathematics. Full local proofs make
the proposed quantitative and extraction arguments independently checkable.

## Release and native follow-up

`proposal-manifest.json` is the entry point: eight exact before/proposed
carriers, SHA256 guards, per-item unified diffs, and explicit public-interface
flags. Every proposed frontmatter is byte-identical to its preimage. Three
public interfaces change: the symmetric-variable Definition and both local IVP
Statements. The other five drafts change only Facts/proofs. Original Luna
findings remain exact in `observed-original-judge-rows.json`; this evidence
creates no native verdict or acceptance stamp.

Apply supplier changes before continuation/stability/global consumers. Root
owns exact Statement/Definition mirrors, proof-step/citation contract updates,
metadata and graph/readiness hashes; native Step 5 owns actual scientific
adoption, repairs, impact certification and rejudgment. Added numbered steps
and changed proof citations require the ordinary exact contract refresh. Guard
failure means reread current source and adapt the proof, not apply stale diffs.

Two outside review/repair cycles were used. The final required proof-layout
check on the eight proposed carriers is recorded separately; it is a layout
check of draft files, not an item/run gate or mathematical acceptance.
