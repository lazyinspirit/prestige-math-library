# Batch 7 Step 3a review

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-7`.

Scope has no touched items, changed pages, reader findings or refuter findings. Its decisions array is therefore empty. Pre/post snapshots agree for all six item, contract and manifest fingerprints and both pages. Only the required risk-review enrichment was authored; no item repair or independent judgment is claimed.

## Ordered review record

1. `pthm-emx-retarded-history-localization` (level 0): all four steps checked. Fixed spatial support bounds the sampled time interval near every event; a smooth time cutoff makes the source compact in spacetime and equals one both at observation and retarded times. Kernel part (b), under Countable Choice, gives local smoothness and sourced wave equations. Translation and dominated convergence use a fixed bounded spatial support and integrable `|z|^-1` majorant; differentiating the localized source produces no cutoff derivative at the sampled times. Continuity gives Lorenz gauge and the C2 Lorenz-wave equivalence gives Maxwell. Interior singular-kernel points and zero sources cause no failure. This is the selected particular retarded branch, with no unrestricted uniqueness or empirical claim. Direct mathematical interfaces and relevant kernel/Lorenz proof bodies checked; no defect found. Risk review complete in the owning contract.

Sources checked so far: Fitzpatrick, [Retarded potentials](https://farside.ph.utexas.edu/teaching/em/lectures/node50.html), equations (509)–(510), for the retarded argument and SI normalization. The arbitrary-history extension is local reasoning, not a claim imported from that account. Beisert's relevant passages are recorded below.


2. `def-emx-radiation-data` (level 1): complete conditional Definition and all four suppliers checked. The limit is along `t=u+r/c`, uniform on the whole sphere and each compact retarded-time interval, with no existence assertion. Scaled units are V and T m. No defect found; risk review complete. Next: transverse estimates and their supplier interfaces.

3. `pthm-emx-transverse-radiation-data` (level 2): all eight steps and 33 direct supplier interfaces checked. Geometry gives `R>=r/2`, delay error `a²/(rc)`, direction error `5a/r`, reciprocal error `3a/r²` and combined coefficient error `13a/r²`, including `r=2a`. All source-time segments remain in `Ksharp`. Compact measurable finite-measure closed source ball, exterior observation neighborhood and componentwise parameter differentiation meet the exact parameter-integral supplier. The larger-ball divergence theorem gives `integral rho_t=n dot V/c`; the magnetic sign agrees with `B_rad=n cross E_rad/c`. Projecting a vector difference onto its unit direction justifies the vector mean-value estimate without a dimension factor. Summing the pointwise errors reproduces both displayed Gamma constants. The bounded leading field and explicit uniform flux error justify the limit through sphere area `4pi`, with coefficient `mu0/(16pi²c)`. Zero sources and radiation nodes are admitted. No defect found; risk review complete.

Additional source review: Fitzpatrick [Retarded fields](https://farside.ph.utexas.edu/teaching/em/lectures/node52.html), (538)–(542), and Beisert [Elektrodynamik](https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf), §11.2 (11.28)–(11.32), §11.3 (11.38)–(11.55), PDF pages 126–131 (one-based). Their formulas support the stated retardation, transverse structure and separate multipole regime; the explicit uniform error constants are proved in the carrier. Beisert uses harmonic amplitudes and period averages; these are not silently substituted for the local instantaneous result.


4. `pthm-emx-controlled-dipole-power` (level 3): all six steps and 23 direct supplier statements checked, including the Taylor supplier proof. Its real Banach-space curve hypothesis and oriented negative increments cover `J_t(y,s)`, order N, both signs of `n dot y/c`, and zero increments. Continuity of the derivative maximum follows from compact-window uniform continuity and proves integrability. Differentiating source moments and integrating continuity on a larger ball gives `p''=integral J_t`. The absolute vector remainder yields the field error, and the difference-of-squares estimate integrated over area `4pi` yields the stated power error. At N=0, the sphere moment `8pi/3` gives `mu0/(6pi c)`. Units, zero source and vanishing angular amplitudes checked; no infinite-series or relative-node assertion is made. No defect found; risk review complete.

Source addition: Fitzpatrick [The Hertzian dipole](https://farside.ph.utexas.edu/teaching/em/lectures/node94.html), (1077)–(1091), and Beisert §11.3 (11.51)–(11.59), for short-source qualifications and dipole context. The derivative-controlled bound is independently derived and is not attributed to the harmonic source formulas.


5. `ex-emx-retarded-versus-fixed-time` (level 3): all four verification steps and nine direct supplier interfaces checked. The bump and cutoff suppliers give positive F and `G''=2` across the full delay interval. Conservation is explicit; the source meets the history theorem. Thus `V(e1,u)=2F e3` and `E_rad(e1,u)=-mu0 F e3/(2pi)` is nonzero. The bound `r>a+c(t_f-t_minus)` puts every retarded source time before the pulse with a strict neighborhood margin, making potentials and their derivatives locally zero, hence both fields zero. This works for every unit direction and every fixed observation time. No limit exchange or empirical assertion occurs. No defect found; risk review complete.


6. `ex-emx-dipole-dark-direction` (level 4): all five verification steps and ten supplier interfaces checked. The circulating pulse is divergence-free by commuting mixed partials. Positive F and vanishing integrals of spatial derivatives give `p''=2F e3`. Compact-support integration by parts gives `V_1(e3,u)=6F/c>0`, since the whole delay window lies where the third derivative of H is 6. Thus the exact transverse amplitude is nonzero on the vanishing dipole direction, which refutes a finite relative bound referenced to that zero amplitude without contradicting the absolute bound. No defect found; risk review complete.

Errede's [Physics 436 Lecture Notes 14.5](https://hep.physics.illinois.edu/home/serrede/P436/Lecture_Notes/P436_Lect_14p5.pdf), printed pp. 6–8 (zero-based PDF indices 5–7), explicitly supplies the dipole angular factor and angle-from-axis convention. Only those relevant passages and the earlier displayed dipole formulas were inspected, not the full 44-page volume. No higher-moment construction is attributed to this source.

## Scope, interfaces and limitations

Both draft pages are frontmatter-only, with the six mathematical/EM prerequisite pages recorded in the current A-page carrier. The old author-notes prerequisite escalation is historical; the current page already declares the three mathematical prerequisites it requested. The B page requires A. No item, page, Statement, Definition, physical scope, uncertainty record or dependency was changed. No consumer propagation or withdrawal is needed. There are no TikZ/tikzcd/CD diagrams in these carriers; their estimates and constructions require no additional diagram.

All conclusions are deductions from the smooth conserved-source Maxwell model and the adopted retarded selection. Constants remain symbolic positive SI model parameters; no measured input or statistical claim is used. Published mathematical suppliers are used at their exact stated interfaces; this scoped check does not re-audit their full transitive ancestry or confer publication approval. The retarded-kernel and Lorenz-wave proof bodies, parameter-integral proof, and Banach-valued Taylor proof were checked for the actual uses. Other direct suppliers were checked at their exact relevant Statement/Definition/Postulate sections. External reading was limited to the specific passages listed above.

## Published maintenance and disposition

The current published `lem-em-retarded-wave-kernel` has only precheck/judge metadata and lacks the schema-required publication audit/verification or repair record. Its actual part-(b) proof supports the reviewed compact-source use; this is a nonfatal publication-maintenance issue, not an unmet mathematical prerequisite. Recorded an OPEN owner-maintenance entry and deduplicated index entry in `research/published-consumer-supplier-ledger.md`, marker `physics-non-fluid-129-2026-10-21-r2-batch-7-kernel-marker`, after acquiring its exclusive lock, rereading/merging and releasing only this dispatch's lock. The supplier remains read-only. No other published defect is asserted or whole-supplier audit claimed. The owner must supply genuine publication acceptance evidence for that supplier; this dispatch does not fabricate or close it.

The owned-consumer review is recorded in `briefs/tasks/frontier-dependency-ledger.md`; the empty cross-batch dependency array remains unchanged. There are no confirmed owned defects, completed source repairs, closed defect-ledger rows or escalated scientific prerequisites. Consequently no repair-confidence field is applicable and the task-named decisions JSON has `decisions: []` with group `batch-7`.

## Actual checks and handoff

- Initial `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-7.proof-contracts.json`: exit 0; six HIGH/CRITICAL items routed, zero errors.
- Final same command with `--require-reviewed`: exit 0; all six alpha risk reviews complete, zero errors.
- Parsed the scope, pre/post snapshots, final contract and decisions JSON. Pre/post item/contract/manifest fingerprints agree, and all six current raw item hashes equal the post-reader snapshot. Both current page hashes equal their post-reader snapshots.
- Item and page bytes were not edited; reflow, item precheck and proof-layout are therefore inapplicable to this audit enrichment. No engine gate, decision stamping, judgment, certification, publishing or commit was performed.

Batch-7 risk-only work is complete. No scientific blocker remains; the separate published-supplier metadata maintenance stays OPEN for its owner. The engine owns decision hashes and the gate battery.
