# Step 3a reader report — batch 19

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: read-only reader, batch `19`  
Scope: the two assigned CM03 pages and their 13 listed items.

## Opened inventory

Assigned pages opened:

- `cm03-momentum-work-and-energy-balances` (A page, draft): reviewed and repaired one summary phrase to match the energy theorem's motion-specific hypothesis; no unresolved page defect.
- `cm03-momentum-work-and-energy-balances-examples` (B page, draft): reviewed; its summaries match the corrected counterexample and the worked model computations; no unresolved page defect.

All 13 assigned items were opened and reviewed in supplier order:

1. `def-cm03-centre-of-mass-and-momenta`
2. `pthm-cm03-centre-of-mass-and-kinetic-splitting`
3. `pthm-cm03-momentum-balance`
4. `pthm-cm03-angular-momentum-balance`
5. `pthm-cm03-work-energy`
6. `def-cm03-potential-and-mechanical-energy`
7. `pthm-cm03-energy-balance`
8. `pthm-cm03-frame-transformations`
9. `rem-cm03-conservation-scope`
10. `ex-cm03-two-body-hooke-model-check`
11. `ex-cm03-driven-mechanical-energy-balance`
12. `cex-cm03-centrality-is-not-necessary-for-angular-momentum-conservation`
13. `cex-cm03-closed-force-field-without-a-global-potential`

The claims' required physical suppliers were opened, including the spacetime, frame and worldline assumptions; the force and interaction postulates; the configuration and kinematics definitions; Newtonian flow; drag; the IVP and continuation results; and the open-system warning. The relevant mathematical suppliers were opened, including the affine-time-space and adapted-chart transformation results, the centre-of-mass, momentum, angular-momentum and work-energy results, the derivative and integral rules, finite-sum and cross-product facts, the exact/closed-field definitions and Poincaré lemma, the line-integral and gradient theorems, the regular-level theorem, and the ODE uniqueness suppliers. The batch proof-contract inventory and affected contract entries were also checked.

## Confirmed defects repaired

### `cex-cm03-closed-force-field-without-a-global-potential`

The original `Statement refuted` and `Facts & Assumptions` said the counterexample model already had a potential presentation, while the conclusion being refuted was that closedness implies such a presentation. Under that premise the example could not refute the stated implication. I removed the premise and stated the proposed implication directly in terms of a time- and velocity-independent $C^1$ field $\varphi:Q\to\mathbb R^{3N}$ satisfying the exact coordinate-derivative condition from clause (d) of `def-cm03-potential-and-mechanical-energy`. I also removed the undefined “curl-free” language, which was not defined for a general $3N$-dimensional configuration field, and aligned the title, physical scope, Facts & Assumptions, and proof-technique note with the corrected assertion.

The witness still establishes the corrected counterexample: the declared annular field is $C^1$ and closed by its displayed partial derivatives, while its integral around the unit circle is $2\pi\beta\ne0$. The gradient theorem rules out a global potential. For the local claim, the proof now applies Poincaré to $-F|_B$ explicitly, giving $F|_B=-\nabla U_B$ with the framework's potential-energy sign convention. The source passages checked were Lebl, *Basic Analysis II*, §9.3, Example 9.3.7 (closed vortex field and nonzero circle integral), and Campesato, *Poincaré lemma*, Theorem 11 (closed $C^1$ fields on star-shaped open subsets of $\mathbb R^n$).

The A-page summary and B-page summary were checked as consumers. The B summary already described the no-global-potential consequence without assuming a potential model; no B-page edit was needed. The cex proof-contract entry now records the corrected implication, local sign application and boundary disposition. No `verification.judge` record existed on the item.

### `pthm-cm03-energy-balance`

Clause 2 used the evaluated residual forces $\mathfrak d_i(t)=d_i(t,x(t),w(t))$ along a particular motion, but its parenthetical incorrectly concluded that these values vanishing on that motion makes the entire force model a global potential model. The proof supports the stronger, motion-specific conclusion: when the potential is time-independent and the evaluated residual forces vanish along the motion, $E$ is constant on that motion. I retained this conclusion and stated separately that vanishing of the residual-force maps on their whole state domains is the stronger special case that makes the model a global potential model.

The evidence is the displayed identity in clause 1, $E'=\partial_tU+\sum_i\langle\mathfrak d_i,w_i\rangle$, together with the exact definitions of the evaluated residual forces and the cited mathematical work-energy balance. I updated the affected proof contract and refreshed its copied statement quote in the three dependent batch contracts. The direct consumers `ex-cm03-two-body-hooke-model-check`, `ex-cm03-driven-mechanical-energy-balance`, `cex-cm03-closed-force-field-without-a-global-potential`, `rem-cm03-conservation-scope`, and the A-page summary were checked. Their uses remain valid; the A-page summary now says the evaluated residual forces vanish along the motion, with absent residual-force maps as a special case. No `verification.judge` record existed on the theorem.

### `rem-cm03-conservation-scope`

The phrase that mechanical-energy conservation “needs” a global static potential and no residual forces overstated a sufficient case as necessary. The balance equation permits the combined explicit-time and residual-power rate to vanish along a motion even when one or both terms are nonzero. I replaced the necessity claim with the exact rate criterion from `pthm-cm03-energy-balance` and retained the no-residual-map case as a sufficient special case. Its proof-contract record contains no citations or derivations, and no `verification.judge` record existed on the item.

## Validation and contract updates

- `reflow.mts` on `cex-cm03-closed-force-field-without-a-global-potential.md`, `pthm-cm03-energy-balance.md`, and `rem-cm03-conservation-scope.md`: unchanged.
- `precheck.mts` on the counterexample: pass; on the energy theorem: pass; on the remark: 0 proof-bearing items checked, 0 failing.
- Final `proof-layout.mjs` on all three changed item paths: 3 items, 11 steps, 0 defects.
- The affected batch proof-contract entries were updated; no judgment stamps were added.

## Unedited defects and blockers

No confirmed or suspected defect requiring an out-of-scope edit was found in the assigned items, pages, or the inspected published and current-run suppliers. No blocker remains. No experiment or reported empirical observation occurs in this batch; the numerical values in the examples are explicitly declared model data.

Source review was limited for one bibliography entry: the frame citation's direct [*Dynamics and Relativity* PDF URL](https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf) could not be fetched by the web tool. Its search result identified the cited Galilean-relativity section, but I did not inspect that original PDF passage. The frame transformations used by the assigned proof were independently checked against the opened local adapted-chart lemma and its complete argument. Relevant accessible passages included Likharev, [*Essential Graduate Physics: Classical Mechanics*](https://essentialgraduatephysics.org/Files/CM%20merged.pdf), §§1.3, Eqs. (1.19)–(1.38), §1.4, and §3.4, Eqs. (3.30)–(3.35); the author-hosted Tong [*Classical Dynamics* Chapter 1 excerpt](https://davidtong.org/pdfs/teaching/classical-dynamics/clas1.pdf), §§1.2–1.3.2; Fitzpatrick, [“Non-Isolated Systems”](https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node12.html), Eqs. (38)–(44); Lebl, [§9.3](https://www.jirka.org/ra/html/sec_pathind.html), Example 9.3.7; and Campesato, [*Poincaré lemma*](https://www.math.toronto.edu/campesat/ens/1920/poincare.pdf), Theorem 11. This access limitation did not establish a citation defect.
