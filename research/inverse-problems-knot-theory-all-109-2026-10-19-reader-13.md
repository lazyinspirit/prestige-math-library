# Step 3a reader report — batch 13

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Batch: `13`  
Date: 2026-10-21

## Run and scope

The recomputed autopilot status is `running` at `3a-read`, with no work in flight. On the post-report status read, the stage remained open and batch 13 had not yet been counted as native coverage. The current Git head is `ace06e03bc` (`Check actual proof phases without treating Facts-only declarations as proofs`). The batch manifest, current proof-contract file, cross-batch dependency record, source-coverage record, and authoring notes were read as evidence, then compared with the current item and page carriers. The batch-13 items and pages were untracked in the pre-review worktree; the checkout also contains unrelated existing changes. No item, page, contract, manifest, or plan was edited by this review.

## Opened inventory

Assigned pages:

- A page `network-tomography-and-experiment-design`: draft, `page_layout: compact-v1`, empty body; four listed items match the batch manifest.
- B page `network-tomography-and-experiment-design-examples`: draft, `page_layout: compact-v1`, empty body; two listed examples match the manifest.

Assigned items, read in supplier order:

- `def-ip-tree-probing-experiment`
- `def-ip-network-tomography-design-criterion`
- `alg-ip-link-loss-em`
- `thm-ip-flexicast-link-loss-identifiability`
- `ex-ip-independent-normal-delays-have-nonidentifiable-link-means`
- `ex-ip-unicast-product-nonidentifiability-and-multicast-recovery`

Relevant item suppliers and cited targets opened:

- `def-statistical-experiment`
- `def-axiom-of-choice` and its cited target `def-choice-function`
- `def-standard-normal-and-normal-laws`
- `def-identifiability-of-an-estimand`, `def-parametric-statistical-model`, `def-observational-equivalence`, and `def-estimand-on-a-statistical-model`
- `alg-expectation-maximization`

The three A-page required pages were also opened: `statistical-inverse-experiments-and-white-noise` (draft), `statistical-experiments-models-and-identifiability` (published), and `em-algorithm-and-latent-variable-likelihood-ascent` (published). The B page's required A page is in the assigned inventory above.

Primary-source passages were checked at their cited locations:

- [Cáceres, Duffield, Horowitz, and Towsley (1999)](https://www.kiskeya.net/ramon/work/pubs/toit99.pdf), §§2.1–2.3, PDF pp. 3–5: logical multicast tree, independent link/probe Bernoulli variables, and receiver-outcome law.
- [Lawrence, Michailidis, and Nair (2007)](https://arxiv.org/pdf/0708.1079), §1 Examples 1–3 and §§3.1–3.2, PDF pp. 1–6: unicast/multicast contrasts, additive Gaussian delay ambiguity, split/coverage statement, and flexicast EM description.
- [Xi, Michailidis, and Nair (2006)](https://www.stat.purdue.edu/~xbw/research/xi_tomo_jasa1206.pdf), §3.2 Proposition 1, PDF p. 4 (printed p. 1434); Appendix A.1, PDF pp. 15–17 (printed pp. 1445–1447); §4.2, PDF pp. 5–6 (printed pp. 1434–1435): identifiability criterion/proof and conditional expected-success update.

The local theorem proof was checked independently against its stated hypotheses and finite outcome laws.

## Mathematical review

- `def-ip-tree-probing-experiment`: the compatible link-state sets partition the finite state space, the product Bernoulli weights normalize to one, and the full product experiment matches the independent, temporally homogeneous model. The definition and its reference section are complete.
- `def-ip-network-tomography-design-criterion`: coverage and splitting are defined on the tree experiment without claiming the identifiability theorem in this definition. The source locator matches the cited criterion.
- `alg-ip-link-loss-em`: the closed-cube extension is a normalized finite law; each conditional expectation is defined after the positive-pattern check; the expected-success/probe-count M-step lies in `[0,1]`; boundary candidates and zero-likelihood statuses are handled. The algorithm claims no convergence or global optimum. Its instructions are operational and do not require a phase proof.
- `thm-ip-flexicast-link-loss-identifiability`: the leaf marginals recover root-to-leaf products; splitting-pair joint and marginal success probabilities recover the product to each nonroot internal vertex; edge ratios then recover each link probability. Uncovered terminal edges are invisible, while the unsplit-node rescaling preserves every observed design law and stays in the interior. The local proof establishes both directions for the stated strict-interior model, including arbitrary finite root outdegree. The (P(v,r)) notation in step 2.1 is the unique downstream path segment and is the immediate extension of the definition's root-path notation.
- `ex-ip-unicast-product-nonidentifiability-and-multicast-recovery`: both unicast path products agree for the displayed triples; the multicast joint-success probabilities are respectively (1/16) and (3/32); the marginal/joint ratios recover (p_0,p_1,p_2) for every interior triple.
- `ex-ip-independent-normal-delays-have-nonidentifiable-link-means`: the coupling gives identical path-sum vectors under both mean triples, so repeated independent observations also have the same law. AC is stated because the cited library normal-law definition assumes it. The diagram labels and arrow directions match the shared-edge/two-branch tree.

Both TikZ diagrams on the B page are mathematically consistent with their text. No missing diagram is needed for the A-page definitions, algorithm, or theorem. The theorem and both example arguments are independent of diagrams.

## Defects outside this reader's write scope

These are published dependencies, so they are listed for routing and were not edited.

- `def-statistical-experiment`, consumed directly by `def-ip-tree-probing-experiment`: `## Definition` contains the citation-only parenthetical “Measurable spaces and measurable sets, Probability measures and probability spaces” and embeds the supplier titles “Law of a random element” / “The law of a random element is a probability measure” in the definition sentence. The following `## Definition references` already contains the links. The title fragments and citation-only parenthetical should be removed or replaced with mathematical prose while retaining the logical content.
- `def-identifiability-of-an-estimand`, consumed by `thm-ip-flexicast-link-loss-identifiability`: the complete `## Definition` paragraph contains three inline wikilinks to `def-parametric-statistical-model`, `def-observational-equivalence`, and `def-estimand-on-a-statistical-model`; it has no following `## Definition references` section. Move the links after the complete definition.
- `def-parametric-statistical-model`, consumed through the theorem's identifiability dependency: `## Definition` ends with the citation-only parenthetical “(Statistical experiments)”. Remove that parenthetical; its actual dependency link is already in `## Definition references`.
- `def-observational-equivalence`, consumed through the theorem's identifiability dependency: its `## Definition` ends with an inline wikilink to `def-parametric-statistical-model` and has no `## Definition references` section. Move the link after the complete definition.
- `def-estimand-on-a-statistical-model`, consumed through the theorem's identifiability dependency: its `## Definition` contains an inline wikilink to `def-parametric-statistical-model` and has no `## Definition references` section. Move the link after the complete definition.
- `def-axiom-of-choice`, consumed by `ex-ip-independent-normal-delays-have-nonidentifiable-link-means`: the quoted statement in `## Definition` contains the citation-only parenthetical “(Choice function)”. Remove the parenthetical; the target is already linked in `## Definition references`.
- `def-choice-function`, consumed through the example's Axiom-of-Choice dependency: `## Definition` contains inline wikilinks to `def-function`, `def-power-set`, and `def-set-difference-and-symmetric-difference`, with no immediately following `## Definition references` section. Move the links after the complete definition.
- `def-standard-normal-and-normal-laws`, consumed by `ex-ip-independent-normal-delays-have-nonidentifiable-link-means`: the `## Definition` uses cited item titles as sentence fragments (“By The standard normal density has total mass one and The indefinite integral ...” and “in The Dirac set function at a point”), leaving the definition grammatically ill-formed. Replace those fragments with mathematical prose and keep the links in the existing references section.
- `alg-expectation-maximization`, consumed by `alg-ip-link-loss-em`: its `## Definition` includes the citation-only parenthetical “(Likelihood densities)”. Remove it and retain the supplier link in `## Definition references`.

All nine findings are included in `research/inverse-problems-knot-theory-all-109-2026-10-19-reader-findings-13.json` with the assigned consumer whose dependency closure reaches each published subject.

## Page verdicts

- `network-tomography-and-experiment-design`: assigned inventory, frontmatter-only presentation, and compact layout are correct. Its four item claims and proofs are mathematically coherent. The A page retains a required page dependency on the draft `statistical-inverse-experiments-and-white-noise`; that page's two listed batch-7 items were not reviewed here, and the explicit page-level prerequisite remains unresolved. No batch-13 item proof uses the white-noise claims.
- `network-tomography-and-experiment-design-examples`: assigned inventory and frontmatter-only presentation are correct. Both examples and their diagrams are mathematically sound. Its published dependency chain includes the statement-format defects listed above.

## Edits, validation, and blocker

No repair was confirmed in a writable batch-13 item or assigned A-page prose, so no item or page edit was made. No native judgment, stamp, gate, reflow, precheck, or proof-layout run was performed. The required post-edit proof-layout command was not applicable because there were no changed item paths.

The remaining page-level blocker is the A page's declared dependency on the draft batch-7 white-noise page. I opened that page carrier but did not inspect its two listed item bodies; they are outside batch 13 and are not used by the reviewed item proofs. I also did not audit every transitive proof behind published supplier definitions; the reviewed claims use their displayed definitions, not those suppliers' internal proofs.
