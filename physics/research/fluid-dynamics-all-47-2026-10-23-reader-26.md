# Step 3a reader report — batch 26

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: `reader`  
Scope: batch `26`

## Opened inventory

Assigned pages:

- `library/fluid-dynamics/fd-k02.md` (A page)
- `library/fluid-dynamics/fd-k02-examples.md` (B page)

Page-prerequisite context:

- `library/fluid-dynamics-mathematics/fd-k01.md`
- `library/fluid-dynamics-mathematics/fd-k01-examples.md`

Assigned items, read in supplier/consumer order and checked against their current statements, proofs, and contracts:

- `post-fd-boltzmann-model`
- `def-fd-physical-kinetic-observables`
- `pthm-fd-local-boltzmann-h-balance`
- `pthm-fd-boltzmann-entropy`
- `pthm-fd-ideal-gas-euler-interface`
- `post-fd-bgk-relaxation`
- `pthm-fd-bgk-equilibration`
- `texp-fd-bgk-preparation`

Claim suppliers opened:

- `def-fd-kinetic-density`, `def-fd-elastic-collision-measure`, and `def-tdmath-elastic-collision-kernel`
- `def-fd-conserving-bgk`, `prop-fd-maxwellian-moments`, `thm-fd-homogeneous-bgk-limit`, and `prop-fd-bgk-entropy-rate`
- `thm-fd-kinetic-h`, `thm-tdmath-regular-collision-entropy`, and `thm-fd-controlled-euler-passage` (the last was opened to check the extra current cross-batch ledger row)
- The cited calculus and measure suppliers used by the local arguments: chain/product rules, derivative and limit definitions, differentiation under the integral sign, logarithm derivative, mean value theorem, Fubini, integration by parts, smooth bump existence, Gaussian integral, change of variables, square roots, exponential decay, and the fundamental theorem of calculus.

Also opened the current batch-26 manifest, proof-contract file, cross-batch dependency file, and batch notes as navigation/evidence; none was treated as a verdict over the authored claims.

## Review and repairs

The Boltzmann postulate's source locator for Tong had collapsed two different molecular-chaos presentations. Tong §2.2.1, equations (2.21)–(2.24), printed pp. 21–22, assumes decorrelation for incoming pairs and explicitly identifies the before/after asymmetry. Tong's later §2.2.3 derivation, printed pp. 31–32, instead assumes decorrelation both before and after collision. The postulate now distinguishes these treatments, explains that its gain product applies incoming-pair factorization to the reversed collision, and does not attribute the exact weak operator to the source. MIT 8.333 Lecture 8 §III.D, printed pp. 49–54, is now described as dilute-gas BBGKY and collision-correlation context, not as the source of the one-sided weak operator. The postulate's direct consumers in this batch—`def-fd-physical-kinetic-observables`, `pthm-fd-local-boltzmann-h-balance`, `pthm-fd-boltzmann-entropy`, and `pthm-fd-ideal-gas-euler-interface`—were checked and remain consistent with the unchanged weak equation and its clarified incoming-pair convention. The source-review/formulation contract was updated.

In `pthm-fd-local-boltzmann-h-balance`, the proof had written `log A - log B` even though the collision products carry units. It now writes the difference of logarithms of `A/f_ref^2` and `B/f_ref^2`, then `log(A/B)`, and the sign argument compares the dimensionless ratio `A/B` with `1`. The definition and theorem now state the units of `h`, `J_H`, and `D`. Its direct consumer `pthm-fd-boltzmann-entropy` was reviewed; that statement now records the units of `D`, `s_kin`, `j_kin`, and total entropy and its rate. The proof contract was updated to match the dimensionless-ratio argument.

The assigned physical definition `def-fd-physical-kinetic-observables` now states the units of `h` and `J_H`. Its direct consumers, `pthm-fd-local-boltzmann-h-balance`, `pthm-fd-boltzmann-entropy`, and `pthm-fd-ideal-gas-euler-interface`, were reviewed; the existing moment and entropy conclusions remain consistent. `pthm-fd-ideal-gas-euler-interface` now states that its local-equilibrium pressure is measured in pascals. `pthm-fd-bgk-equilibration` now gives the units of its weighted norm and reference-relative entropy, and its direct consumer `texp-fd-bgk-preparation` now gives the norm units. No other claim or hypothesis was changed.

Current manifest dependency closures showed no additional in-run consumers: `pthm-fd-boltzmann-entropy` is the sole further consumer of the edited local balance, and `texp-fd-bgk-preparation` is the sole consumer of the edited BGK result. The related supplier closures were checked against current source dependencies; there are no unreviewed assigned consumers from these interface updates.

The physical postulates, entropy theorems, conditional Euler passage, BGK solution theorem, and thought experiment all preserve their model scope. In particular, the Euler item assumes rather than derives the weighted convergence; the BGK item is a deduction within its separately adopted homogeneous model; and the cube preparation remains hypothetical, not a reported experiment. There are no TikZ or tikzcd diagrams in the assigned carriers.

## Item verdicts and source checks

- `post-fd-boltzmann-model`: formulation is coherent as an adopted model after separating Tong's incoming-only derivation from his later stronger closure; no microscopic derivation or empirical validity is claimed.
- `def-fd-physical-kinetic-observables`: definitions and moment domains are consistent with the kinetic-density and Boltzmann suppliers; all declared observables now include their units.
- `pthm-fd-local-boltzmann-h-balance`: proof is complete under its positivity, envelope, and admissible-test assumptions; logarithms are applied only to dimensionless ratios.
- `pthm-fd-boltzmann-entropy`: local and global conclusions follow from the local balance and the actual K01 periodic identity with their stated hypotheses.
- `pthm-fd-ideal-gas-euler-interface`: moment passage is proved under the displayed weighted convergence hypotheses; the proof does not infer convergence from small $\varepsilon$.
- `post-fd-bgk-relaxation`: separate homogeneous phenomenological model is explicit and distinguished from the binary Boltzmann model.
- `pthm-fd-bgk-equilibration`: the affine solution, weighted estimate, entropy bound, and pointwise uniqueness use the inspected current suppliers and stated solution classes.
- `texp-fd-bgk-preparation`: box moments, finite entropy and non-Maxwellian status are computed directly; the conclusion remains a hypothetical model prediction.

Source sections retrieved for the source-sensitive claims include [Tong, Kinetic Theory, §§2.2.1–2.2.3 (including equations (2.21)–(2.24))](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf), [MIT 8.333 Lecture 8, §III.D](https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/b8c07404633cdba3217e434ac06569ad_MIT8_333F13_Lec8.pdf), [MIT 8.333 Lecture 9, §III.E](https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/ce250b44390106351cb97aafb0060ca7_MIT8_333F13_Lec9.pdf), [Tong, §2.3 and §2.4.2](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf), [MIT 8.333 Lecture 10, §III.G](https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/ae32d4e53c9fa0bee4171378caa4ea84_MIT8_333F13_Lec10.pdf), [MIT 8.333 Lecture 11, §III.H](https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/7b163cc0ea1359b70b018a1415399d64_MIT8_333F13_Lec11.pdf), [Golse and Levermore, Lecture 2, §II](https://www.cmls.polytechnique.fr/perso/golse/Exposes/HLslides2.pdf), and [Tong, §2.5.1](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf). The Euler source treatments present local equilibrium as an approximation; the assigned item's convergence assumption remains explicit and is not sourced as an established consequence.

## Checks

- Reflow and precheck were run on all seven changed items. All returned clean results; the definition had no proof steps to check, and the five proof-bearing carriers passed their direct prechecks.
- Final `proof-layout` run: 7 items, 19 steps, 0 defects.
- The updated proof-contract JSON parses. No edited item had a stale `verification.judge` record to remove.

## Page verdicts

- `fd-k02`: content and inventory are sound. Its `requires: fd-k01` supplier exists at the canonical mathematics path above, with matching draft identity and inventory. The A page has frontmatter only and `page_layout: compact-v1`.
- `fd-k02-examples`: content and inventory are sound. It requires `fd-k02`, lists the thought experiment under `examples`, has no body, and retains `page_layout: compact-v1`.

## Unedited workflow evidence blocker

The current `research/fluid-dynamics-all-47-2026-10-23-batch-26.cross-batch-dependencies.json` contains a verified item edge from `pthm-fd-ideal-gas-euler-interface` to `thm-fd-controlled-euler-passage`, but neither the current item frontmatter nor the batch-26 manifest declares that `deps`, `justified_by`, or `forward_refs` edge. The assigned Euler proof derives its result directly from the collision invariants, Gaussian moments, convergence hypotheses, and listed mathematical tools. The cross-batch evidence also describes the current `thm-fd-kinetic-h` statement as global-only, while its opened current statement includes both a local distributional balance and the global identity. I corrected the assigned consumer contract's description but did not edit the cross-batch ledger or other workflow evidence, which is outside this reader's item/A-page repair authority. The owner must reconcile these two stale ledger descriptions before relying on the cross-batch file as current evidence.

No uneditable defect remains in an assigned item or page. The workflow evidence blocker is not an item/page content finding and is therefore not represented in the findings JSON.
