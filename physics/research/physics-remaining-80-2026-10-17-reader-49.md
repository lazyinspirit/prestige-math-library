# Step 3a reader report — batch 49

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Scope: batch `49` only

## Inventory opened

### Assigned pages

| Page | File | Verdict |
|---|---|---|
| `qsm-dt-relaxation` | `library/quantum-statistical-mechanics/qsm-dt-relaxation.md` | Pass. The summary matches its finite-model theorems and preserves the postulate's finite physical interval and mathematical-continuation caveats. |
| `qsm-dt-relaxation-examples` | `library/quantum-statistical-mechanics/qsm-dt-relaxation-examples.md` | Pass. Both example descriptions match their calculations and do not present model records as measurements. |

### Assigned items

All 13 manifest items were opened in dependency order and reviewed for statement, definitions, hypotheses, proof or verification, title, physical scope, units, and citation use.

| Item | Verdict and review note |
|---|---|
| `def-qsm-dt-gns-detailed-balance` | Pass. The finite matrix generator, trace dual, weighted inner product, and stated GNS convention are explicit; the proof verifies the dual and inner-product properties. |
| `thm-qsm-dt-detailed-balance-gap` | Pass. The finite scalar-kernel gap, centered decay, integrability, positivity, and trace-norm estimate follow from the stated finite-dimensional hypotheses, including the separate `d=1` case. |
| `thm-qsm-dt-gibbs-jump` | Pass. Gibbs stationarity, detailed balance, diagonal and off-diagonal actions, and the scalar dissipative kernel are derived under the connected finite-rate hypotheses. |
| `def-qsm-dt-monitored-chain` | Pass after source-locator correction. The no-click and jump operations yield the specified infinitesimal GKSL generator and the finite-chain waiting and destination laws. |
| `thm-qsm-dt-commuting-kl` | Pass. Strict positivity for `t>0`, the entropy derivative, its equality case, and continuity from initially zero populations are justified. |
| `thm-qsm-dt-open-correlation-integral` | Pass. The exponential bound gives absolute integrability and the resolvent identity; positivity is confined to the stated real centered observables. |
| `thm-qsm-dt-open-kubo` | Pass. The perturbation changes only the Hamiltonian, the first variation is derived on finite intervals, and the response bound and scope are explicit. |
| `post-qsm-dt-effective-bath` | Pass. Adopted inputs and the selected instrument are distinguished from mathematical consequences; finite physical applicability and absence of empirical calibration are explicit. |
| `thm-qsm-dt-monitored-transport` | Pass. The stationary path covariance, finite-time variance identity, and continued-model long-time coefficient are proved with the stated gap. |
| `pthm-qsm-dt-bath-relaxation` | Pass. Conclusions are conditional on the adopted finite model; the physical interval is separated from the mathematical continuation, with no universal bath claim. |
| `pthm-qsm-dt-record-transport` | Pass. It carries the instrument, initial Gibbs law, velocity assumptions, and physical interval into the deduction and explicitly disclaims a measured spatial diffusion coefficient. |
| `ex-qsm-dt-thermal-qubit` | Pass. The correlations, open response, static Gibbs derivative, units, and distinction between fixed-dissipator response and Gibbs susceptibility are computed consistently. |
| `ex-qsm-dt-qubit-record-diffusion` | Pass. The two-state covariance and variance integral give the displayed formula; the record is not described as a quantum position or empirical velocity. |

### Dependency evidence opened

The relevant suppliers were read before their assigned consumers. This included the direct mathematical dependencies `def-axiom-of-choice`, `def-qsm-dt-gksl-definition`, `lem-qsm-matrix-state-calculus`, `lem-qsm-dt-finite-trace-pairing-cyclicity`, `lem-qsm-matrix-exponential-response`, `thm-csm-dk-nonexplosive-ctmc-and-gap`, `thm-dominated-convergence`, `thm-qsm-dt-channel-duality`, `thm-qsm-dt-gksl-sufficient`, `thm-qsm-dt-time-dependent-gksl`, and `thm-qsm-dt-trace-contraction`.

I also opened the definitions/results used to check those arguments: `def-qsm-dt-channel-definition`, `thm-qsm-dt-choi-kraus`, `def-csm-dk-finite-reversible-rate-model`, `thm-ionescu-tulcea-construction-of-a-markov-chain`, `cor-bolzano-weierstrass-in-rn`, `def-real-and-complex-inner-product-space`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `lem-rat-embeds-dense`, `thm-rationals-countable`, `lem-finite-powers-of-countable-sets-are-countable`, `lem-countable-iff-surjection-from-n`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `cor-finite-dimensional-normed-spaces-are-banach`, and `lem-cm-integral-and-ftc-for-continuous-normed-space-curves`.

For the continuous-curve integral supplier, I also checked its named prerequisites: `def-norm-and-normed-space`, `def-complete-metric-space`, `def-cauchy-in-metric`, `def-metric-uniform-continuity`, `cor-compact-domain-maps-are-uniformly-continuous`, `thm-heine-borel-r`, `def-interval`, `def-metric-continuity`, `lem-reverse-triangle-inequality-in-a-normed-space`, and `def-vector-space`.

The cross-batch dependency rows and proof contracts were consulted as navigation and evidence, not treated as verdicts. The relevant supplier pages `qsm-dt-channels` and `csm-stochastic-response` were also opened.

## Edit and evidence

The linked Plenio–Knight paper labels equations (120)–(133) in §IV.3, “Simulation of single trajectories”; §IV.1 is “Quantum jumps.” Five assigned items had cited these equations or sections as §IV.A. I corrected their source locators, without changing any statement, proof, or physical scope:

- `items/def-qsm-dt-monitored-chain.md`
- `items/post-qsm-dt-effective-bath.md`
- `items/thm-qsm-dt-monitored-transport.md`
- `items/pthm-qsm-dt-record-transport.md`
- `items/ex-qsm-dt-qubit-record-diffusion.md`

The exact source is [Plenio and Knight, *The quantum-jump approach to dissipative dynamics in quantum optics*](https://arxiv.org/html/quant-ph/9702007), §§IV.1 and IV.3, especially equations (120)–(133). Those passages provide quantum-jump trajectory context; the assigned items supply their own finite-model deductions.

I updated the `post-qsm-dt-effective-bath` source-review evidence in `research/physics-remaining-80-2026-10-17-batch-49.proof-contracts.json` to record the checked source locators and preserve the distinction between formulation context and evidence that nature realizes the postulate. The [Alicki–Lendi PDF](https://www.nzdr.ru/data/media/biblio/kolxoz/P/PS/PSa/Alicki%20R.%2C%20Lendi%20K.%20Quantum%20dynamical%20semigroups%20and%20applications%20%28LNP0717%2C%20Springer%2C%202007%29%28136s%29_PSa_.pdf), §1.3.4 (printed pp. 16–17, equations (87)–(89)), states the Hamiltonian-commutation and dissipative self-adjointness convention in the weighted trace inner product. [Carlen and Maas](https://arxiv.org/html/1609.01254), §2, distinguishes the GNS and KMS inner products. No empirical observation or physical realization is inferred from these sources.

No `verification.judge` record was present in the five edited item carriers. The correction did not change proof steps or derivations in their contracts.

## Required checks

Reflow reported `unchanged` for each of the five edited items. Precheck passed for each:

- `def-qsm-dt-monitored-chain`
- `post-qsm-dt-effective-bath`
- `thm-qsm-dt-monitored-transport`
- `pthm-qsm-dt-record-transport`
- `ex-qsm-dt-qubit-record-diffusion`

The single batched proof-layout command reported `5 items, 12 steps, 0 defects`.

## Unedited defects and blockers

No confirmed defect remains in this batch or its inspected dependencies. No blocker was encountered. The source-locator defect above was repaired in assigned items; no outside item or page required an edit.
