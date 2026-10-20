# ODE supplier repair — math-02

The assigned ID and raw source hash match assignment.json. The candidate is `candidate/items/thm-c1-dependence-of-solutions-on-initial-data.md`; the exact preimage is `before/items/thm-c1-dependence-of-solutions-on-initial-data.md`. `hashes.json` freezes before, final candidate, and unchanged live-source hashes. The original Statement, frontmatter, and Facts & Assumptions are byte-for-byte preserved. All authoring and check artifacts are isolated under this assignment directory. No live source, ownership claim, native alert, ledger, receipt, digest, run control, or Step-3 artifact was edited.

## Confirmed defects and repair

Native batch-65 group-v alerts 6 and 7 were checked against the actual supplier. The old proof's one compact product cylinder need not exist for a curved compact trajectory in an arbitrary open domain. A compact container of two trajectories also does not ensure its state secants remain in the domain. Finally its numbered arguments continued after terminal tags in separate paragraphs/displays.

Step 1.1 constructs a compact radius-r tube about the base graph using its uniform interior margin in the open ODE domain. Every time slice is a convex ball. Step 2.1 (after precheck normalization) proves, by a first-exit contradiction and forward/reflected Gronwall, that sufficiently close initial data stay within r/2 of the base trajectory over the entire *given* compact interval. This avoids overextending the continuous-dependence supplier's short local interval assertion. All pairwise state secants are now inside the tube, and their solutions have the uniform bound e^(Mh) times initial displacement. The state Jacobian is bounded and uniformly continuous on that tube.

The variational solution is bounded by e^(Mh): apply the vector integral estimate to its action on each unit vector and take the supremum. The averaged Jacobian along a secant converges uniformly to the base coefficient. Subtracting the two Volterra equations gives a remainder bounded by h e^(2Mh) epsilon(u) ||u||, proving the actual Frechet derivative uniformly in time. The analogous difference identity for two variational solutions proves uniform derivative continuity and therefore also joint time/state continuity. These are full local proof arguments, not an external proof fallback. The original theorem and common-interval hypotheses are preserved; no cylinder hypothesis or shorter interval is substituted.

The phrase open ODE domain uses the repository's existing IVP and variational-equation definitions; the original theorem already invokes solutions and variational equations in that convention. Likewise C1 in state means the state Jacobian is continuous on the time-state domain, as used by the original proof. No new interpretation of merely slicewise differentiability is introduced.

Each of the seven final numbered steps is one paragraph with its full argument before the terminal tags. The Statement has no hyperlinks, so there are no Statement links to relocate or labels to replace. Facts/proof supplier links are retained in their permitted sections. No diagrams were present or needed for the geometric argument.

## Actual prerequisite and source checks

Read the complete assigned supplier and the complete six declared supplier carriers: the variational-equation definition, linear-matrix-ODE existence lemma, continuous-dependence theorem, Volterra equivalence, vector-integral norm inequality, and Gronwall theorem. Checked their hypotheses against each actual invocation. In particular the matrix lemma supplies the whole fixed interval and endpoint conventions, Gronwall explicitly supplies both time orientations, and the vector integral inequality is used with ordered limits after reflection. Also read the IVP/solution definition and Ck notation definition to check the open-domain and regularity conventions. The compact tube uses elementary finite-cover compactness and the state fundamental theorem of calculus explicitly, and introduces no substantial missing prerequisite or new item.

The existing Hitchin and Wang bibliographic URLs were preserved. No external full-text access is claimed: the repair is independently verified from the complete local arguments and suppliers above, without an unresolved source-dependent step.

## Same-owner consumer dispositions

Read the following direct consumers in full against the repaired theorem:

- `thm-neural-ode-global-smooth-flow`: F11 and step 5.1 use a common compact local interval for a smooth field and obtain the same variational equation. Valid unchanged.
- `thm-smooth-dependence-of-ode-solutions-on-parameters`: F4 uses uniform-in-time first derivative/remainder estimates and joint continuity. The candidate proves these explicitly. Valid unchanged.
- `thm-smooth-dependence-of-solutions-on-initial-data`: L1 uses initial-state C1 dependence on a common compact interval. The supplier interface remains identical; this repair requires no consumer change.
- `thm-continuous-flow-log-density-equation`: F4 and step 2.1 rebase at the midpoint of a common symmetric interval and use the variational equation with one-sided endpoint derivatives. Same conclusion retained. Valid unchanged.
- `lem-ip-lipschitz-ode-triangular-flow-and-c1-density`: the separate C1 clause and F7/step 4.2 use the established common interval and jointly continuous state derivative. Same conclusion retained. No foreign-run edit.
- `thm-local-fully-nonlinear-cauchy-problem-by-charpit`: step 2.1 applies C1 initial-data dependence to a C1 Charpit field; time regularity follows from its ODE. Same conclusion retained.
- `fs-continuous-dependence-alone-implies-differentiable-dependence`: L1 is contextual comparison with the derivative hypothesis. Nothing in that comparison changes.

No original Statement/Definition changes, new dependency, weaker conclusion, or additional axiom were introduced; consequently no indirect consumer interface changes are triggered. These are focused affected-use checks, not whole-consumer certifications. Existing independent consumer defects or formatting outside this escalation are not silently certified or rewritten.

## Review and checks

One mathematical review-to-repair cycle: independently checked the original gap, authored the tube/first-exit/variational remainder argument, then reread the candidate argument and actual consumer uses. The precheck's purely mechanical phase renumbering was adopted before final checks. This is not an additional mathematical review cycle.

Final explicit candidate checks are saved with exact commands/output/exit status in `precheck-final.json`, `rendercheck-final.json`, and `proof-layout-final.json`: precheck passed (1 proof, 0 failures), rendercheck passed (1 item, no errors or warnings), and actual renderer proof-layout passed (1 item, 7 steps, 0 defects). Proof-layout was run after the final item edit. `precheck-initial.json` preserves the genuine initial normalization suggestion. No gates, workflow transitions, rehashing, publication repair receipts, or recertification were performed; those remain root-owned.
