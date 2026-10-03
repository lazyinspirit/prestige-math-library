# Physics content model

This document records the owner's agreed content design for future physics
categories. The mathematical schema remains [SCHEMA.md](SCHEMA.md). The independent physics
workflow implements the extensions in [physics/SCHEMA.md](physics/SCHEMA.md),
with operations described in [physics/WORKFLOW.md](physics/WORKFLOW.md).
Website integration and publication are separate work. Agent instructions remain in [CLAUDE.md](CLAUDE.md).

## Scope

The intended categories are **Classical Electromagnetism** and **Quantum
Mechanics**, both developed deeply from explicit first principles. Quantum
circuitry and quantum algorithms are deferred. Physical assumptions, empirical
inputs, mathematical definitions, and derived conclusions must be distinguished.
First-principles development does not mean deriving physical assumptions from
mathematical axioms or deriving all physical quantities from a single framework.

## Workflow engine separation

The owner selected a separate physics fork rather than a content-profile change
to the mathematics engine. `tools/physics-autopilot/` begins as a byte-for-byte
copy of the working-tree `tools/autopilot/`, including its local dependencies.
The initial file hashes and symlink targets are recorded in
`tools/physics-autopilot-baseline.json`. The snapshot includes working-tree
changes, so its recorded Git HEAD alone does not reconstruct the baseline.

Physics adaptations belong in the fork and physics-specific supporting files.
Do not modify the mathematics engine, its briefs, planners, or validators to
implement physics behavior. Shared supporting code may remain in use unchanged;
any supporting code needing different behavior must be copied and the physics
fork rewired to its own version. Keep physics state, plans, tasks, receipts,
reports, and repair records in separate namespaces. Do not reuse mathematics
run receipts as physics acceptance evidence.

The fork now uses private helpers in `tools/physics-support/`, briefs and content
in `physics/`, and its own workflow revision and runtime state. Its inherited
stage filenames remain `mathlib*.mts`, but their commands route to physics
helpers. No content-authoring run has been started by this implementation.

The physics engine may consume published mathematical results. Mathematical
items remain mathematical wherever presented and must not acquire physical
prerequisites. Postulates, physical theorems, thought experiments, and experiments
must be excluded from mathematics-library membership. Cross-library presentation
uses the same canonical mathematical IDs. Because the unchanged mathematics
tools scan their own content directories, the physics workspace consumes
byte-identical, read-only import snapshots with pinned source hashes. These are
verified supplier copies, not independently authored items. Import and domain
gates enforce the boundary without changing mathematics tools.

## Item classes

### Postulate

A postulate is an explicitly adopted physical assumption within a specified
framework. State its formulation, physical meaning, scope, and authoritative
sources. It may have empirical motivation or support, but that support is not
a deductive proof. Its exposition should explain the assumption rather than
manufacture a Proof section.

Distinguish general framework assumptions from empirical laws and restricted
model assumptions in the item's account. For example, a constitutive relation
must state its regime of validity. A separate `law` kind has not been agreed.

### Physical theorem

A physical theorem is a precise conclusion established by a complete argument
from explicitly stated physical assumptions and mathematical material, possibly
including empirical premises. The physics kind is `physical-theorem` (prefix `pthm-`).

The standard of deduction is the same as for a mathematical theorem. The
distinction records the physical premises and interpretation; it does not mean
that ordinary mathematical theorems lack hypotheses beyond foundational axioms.
The argument establishes what follows from the premises, not that a physical
model describes nature.

When an empirical result is a premise, identify its conditions, uncertainty, and
scope. The conclusion inherits those qualifications. An exact conditional
calculation must not turn uncertain observations into an unconditional exact
claim about nature.

An experiment may supply a physical theorem even when its findings are
statistical rather than certain. The empirical premise must identify the
observed data or estimate, experimental conditions, statistical method and
assumptions, and uncertainty. The deduction is conditional on that qualified
premise; its consequences retain the relevant qualifications. Do not interpret
a frequentist confidence level as a probability that the premise is true.

For example, in a finite double-slit experiment, the quantum model can assign
a nonzero probability to detections that fail a specified criterion for a
recognizable interference pattern. The experiment therefore cannot establish
that such a pattern always appears. An exact prediction of a probability
distribution follows from the specified quantum model and its assumptions;
the observed detections and their statistical analysis test that prediction.
Experimental agreement is not an unconditional proof of quantum mechanics.

### Experiment

An experiment item records a reported physical experiment and its empirical
findings. Include:

- The question, apparatus, preparation, controls, and procedure.
- Operational definitions of measured quantities and calibration methods.
- Source-backed observations, uncertainty, and limitations.
- Predictions and interpretations, with their model and apparatus assumptions.

Experiments are not black boxes. Explain the measurement and statistical
analysis needed to obtain the reported findings: sampling, repeated
measurements, calibration, estimation or tests where appropriate, statistical
variability, and systematic errors. Cite the mathematical suppliers that
justify the methods, and state physical assumptions about preparation and
apparatus. Those prerequisites justify the procedure and analysis, not the
observed outcome.

Clearly distinguish measured outcomes from calculated predictions. Experiments
do not acquire their observed results by deduction from the theory being tested.
Agreement tests a combination of physical and apparatus assumptions; it need not
uniquely establish one postulate.

An imagined scenario is not an experiment item. Proposed procedures must be
identified as proposals and must never be presented as reported observations.

### Thought experiment

A thought experiment is an idealized or hypothetical physical setup analyzed
under stated assumptions. Its closest mathematical analogue is a constructed
example or counterexample, or a setup used in a proof by contradiction.

**Agreed classification:** `thought-experiment` (prefix `texp-`) is a distinct item kind
that functions identically to `physical-theorem`. It must state a precise
conclusion and supply a complete argument from explicit premises. The distinction
records its hypothetical setup and presentation, not a weaker standard of proof.
It has the same dependency permissions, review and verification requirements,
and handling of empirical uncertainty as a physical theorem. Both kinds are
physical items and are excluded from the mathematics library and from the
prerequisites of mathematical items.

An imagined setup alone is not a theorem. Speculative or incomplete conclusions
remain examples, remarks, or conjectural discussions under an appropriate
available kind. A thought experiment becomes theorem-like through an established
deduction, not through subsequent empirical confirmation. It supplies no new
empirical evidence by itself.

A thought experiment may assume a possible outcome of an experiment that has
not yet taken place. Label that outcome explicitly as a hypothetical premise,
not an observed result or empirical evidence. Any derived conclusion remains
conditional on that premise. A proposed experiment does not become a reported
experiment item merely because its possible outcome is used in this reasoning.

Only established conclusions of earlier thought experiments may be reused as
premises. Their assumptions and qualifications must travel with those uses.

### Mathematical axioms, definitions, and theorems

Mathematical axioms are adopted mathematical assumptions. Definitions introduce
objects or terminology; their well-definedness can require mathematical results.
Theorems, lemmas, propositions, and corollaries establish conclusions from
explicit mathematical hypotheses and earlier results.

Mathematical examples and counterexamples can contain proved claims while
retaining their expository kinds. Similarly, thought-experiment presentation
does not reduce the proof requirements of a physical theorem.

Pure mathematical justification does not depend on physical observations or
physical postulates. A mathematical theorem may analyze a model motivated by
physics, but its proof uses explicit mathematical hypotheses rather than a claim
that the model describes nature.

## Permissible prerequisite relationships

In the following table, **A → B means B requires A**. This is supplier-to-consumer
notation; in frontmatter, B would list A in its `deps`.

These are permissible relationships, not automatic edges between every pair of
items of these kinds. Each actual edge must identify a necessary prerequisite
and its purpose. In this table, “Physical theorem” denotes either a
`physical-theorem` or a `thought-experiment`, with identical rules in supplier
and consumer positions. In particular, either kind may depend on either kind,
subject to acyclicity. “Mathematical material” groups mathematical axioms,
definitions, and proved results; internal relationships retain their ordinary
meanings and do not imply that an axiom is proved from an earlier theorem.

| Permitted dependency |
|---|
| Mathematical material → Mathematical material: ordinary mathematical prerequisites. |
| Mathematical material → Postulate: language needed to formulate it. |
| Mathematical material → Physical theorem: definitions, assumptions, and proof tools. |
| Mathematical material → Experiment: setup, measurement, or analysis methods. |
| Postulate → Postulate: prerequisite framework or terminology. |
| Postulate → Physical theorem: physical premise. |
| Postulate → Experiment: design or apparatus-model assumption. |
| Physical theorem → Postulate: prerequisite formulation or context, not proof of the postulate. |
| Physical theorem → Physical theorem: previously established result. |
| Physical theorem → Experiment: design, prediction, or apparatus analysis. |
| Experiment → Postulate: operational definitions or measurement procedures, not deductive justification. |
| Experiment → Physical theorem: explicitly stated empirical premise, including uncertainty and scope. |
| Experiment → Experiment: preparation, calibration, or another required experimental result. |

Some prerequisites support formulation or procedure rather than deduction.
The physics schema records each local dependency in `dependency_roles`:
`mathematical-premise`, `physical-assumption`, `physical-result`,
`empirical-premise`, `operational-prerequisite`, or `formulation-prerequisite`.
Physical theorems and thought experiments use `empirical_premises` to carry
conditions and uncertainty through physical-result chains.

## Empirical and contextual relationships

Keep the following relationships separate from `deps`. The physics schema
uses `relations` with `supported_by`, `tested_by`, `motivated_by`, `replicates`,
and `challenges` lists:

- An experiment supports or constrains a postulate or physical model.
- An experiment tests the physical applicability of a physical theorem's
  prediction, including its auxiliary assumptions.
- An experiment replicates, corroborates, or challenges another experiment's
  findings.
- An experiment supports or constrains empirical premises used in a thought
  experiment or physical theorem.
- A postulate, theorem, experiment, or thought experiment motivates another
  item without being required to formulate or establish it.
- A thought experiment clarifies assumptions or exposes conceptual tensions;
  this is not empirical evidence.

In particular, an experiment can support a postulate while that postulate guides
the experiment's design. This is a legitimate cycle in the broader relationship
network, not a circular derivation. Empirical support alone must not be encoded
as an Experiment → Postulate prerequisite.

An experiment has a logical role in a physical theorem only when a stated
empirical result is actually used as a premise. An experiment that merely tests
the theorem belongs in the separate empirical relationship network.

## Acyclicity and exposition

**The physics library's prerequisite graph (`deps`) must be acyclic.** All existing
schema constraints on prerequisites continue to apply. Separate support,
testing, replication, motivation, and conceptual links may form cycles.

Where an experimental account would otherwise require the theory it helped
motivate, present its operational setup and observations first, and put the
theory-dependent prediction or analysis in a separate item. Introduce suppliers
before their consumers. This preserves a readable order without erasing the
historical or evidential relationships.

Physical evidence does not prove mathematical theorems. Deductive validity does
not establish empirical truth. Both forms of justification must remain visible
throughout the library.

For physics, a public claim includes its physical scope and empirical
qualifications. Postulate formulations and experimental setup, procedure,
observations, uncertainty, and interpretation are public interfaces as well.
Changing these requires direct-consumer review; verification stamps, citations,
and proof bookkeeping alone do not. The mathematical Statement/Definition
interface rule remains unchanged.

## Statistical evidence and the double-slit example

This section is mandatory guidance for physics authors, readers, refuters,
judges, and adjudicators. Experimental evidence is usually statistical and
model-dependent. Acceptance of an experiment item means its reported observations
and qualified interpretation are faithfully supported, not that a physical theory
has been proved true. Review confidence and experimental confidence are different
quantities.

### Model prediction, observed data, and inference

Keep three things distinct:

1. A model predicts a distribution or another observable relationship under
   specified preparation, dynamics, measurement, and apparatus assumptions.
2. An experiment records a finite dataset with finite resolution, uncertainty,
   selection effects, and possible systematic error.
3. A statistical analysis compares that dataset with specified predictions.
   Its conclusion is conditional on the sampling and measurement models.

An expectation is not a guarantee for each trial or finite dataset. Almost-sure
statements are not pointwise statements about every possible realization.
An empirical frequency is not the underlying probability. A p-value is not the
probability that a theory is false; a confidence level is not automatically a
posterior probability of a theory. Bayesian model probabilities require explicit
priors and likelihoods.

A low-likelihood result can support statistical rejection of a specified model
at a stated error rate. It is not automatically a deductive contradiction.
Deductive falsification requires an explicit claim that strictly excludes the
outcome under the stated conditions; small likelihood, zero density at a point,
and lack of a visually obvious pattern are insufficient. Disagreement can expose
an incorrect physical model, an auxiliary assumption, apparatus behavior, or an
analysis error. Identify what was tested instead of attributing every discrepancy
to one foundational postulate.

### Important worked guidance: single-particle double slit

Consider identically prepared particles, a coherent two-path arrangement, and
position-resolved detection. Each detection is a localized event. Interference
is a property of the accumulated distribution of events, not a visible fringe
pattern deposited by one particle.

For an ideal coherent preparation, a quantum model with the Born rule predicts

$$p_{\mathrm{coh}}(x)\propto|a_1(x)+a_2(x)|^2.$$

A specified incoherent mixture or simple independent-particle path model instead
predicts

$$p_{\mathrm{mix}}(x)\propto|a_1(x)|^2+|a_2(x)|^2.$$

Here amplitudes include preparation weights; normalize each expression over the
stated detection region. The coherent expression contains the cross term
$2\operatorname{Re}(a_1(x)\overline{a_2(x)})$. The mixture comparison assumes that
opening both paths does not otherwise change the conditional path distributions
or apparatus behavior. These are explicit competing models, not definitions of
all quantum and all classical theories.

For a finite number of detections, fluctuations can produce an unclear histogram
or one compatible with both models. Under ordinary nondegenerate sampling models,
a specified criterion for detecting fringes can fail with nonzero probability
even when the coherent model is correct. The probability depends on the trial
count, binning, criterion, and apparatus model; do not invent a universal failure
probability. Loss of coherence, path-marking interactions, phase drift, background,
and detector limitations can also suppress visibility and must be distinguished
from ordinary sampling fluctuations.

**Classical waves also interfere.** Classical electromagnetism predicts optical
interference through wave superposition. Consequently, an interference pattern
alone does not falsify classical electromagnetism or establish the whole quantum
framework. Single-particle interference provides evidence against specified
simple classical particle models under controlled conditions and supports quantum
wave-amplitude predictions. It does not, by itself, eliminate every alternative
model or settle the ontology of the particle's path.

A detection near an ideal dark fringe is not automatically a forbidden event:
real detector bins have nonzero width and real measurements have background and
finite resolution. Compute bin probabilities by integrating the density and
including the declared measurement model; do not substitute a pointwise zero
of an ideal intensity for the probability of a recorded event.

This is a conceptual authoring template, not a reported experiment item. Retrieve
and read an authoritative experimental report before recording actual apparatus,
counts, uncertainties, or conclusions. Simulated histograms remain examples or
proved thought experiments, never fabricated empirical observations.

### Instructions by workflow role

**Authors:** state the preparation, measurement, trial count where reported,
coherence conditions, resolution, uncertainty, and source limitations. Separate
raw observations, predicted distributions, and reported statistical conclusions.
For a quantitative comparison, identify the sampling assumptions, competing
models, analysis method, error rates, and selection or multiple-testing issues.
Use published mathematical suppliers or develop the required mathematics locally.
If a source omits these details, state the omission and limit the claim; do not
manufacture counts, precision, independence, significance, or power. Put new
conditional derivations in physical-theorem or thought-experiment items. Empirical
support for a postulate remains a nonlogical relation.

**Judges and refuters:** check whether the claimed result concerns a distribution,
an expectation, an individual outcome, or a finite-sample estimate. Reject a
claim that finite data prove quantum mechanics, that any missing fringe falsifies
it, or that interference rules out all classical physics. Check the specific
alternative and auxiliary assumptions, actual source record, statistical method,
and carried uncertainty. Physical theorem acceptance concerns a complete
conditional argument; experiment acceptance concerns faithful reporting and
properly qualified interpretation.

**Adjudicators:** resolve separately source fidelity, mathematical validity of the
analysis, physical applicability of the model, and strength of the empirical
conclusion. An unexpected dataset is not automatically a fatal defect in a
postulate or a conditional theorem. Record insufficient information or unresolved
modeling uncertainty honestly. Distinguish invalid analysis, inconclusive evidence,
a justified statistical rejection, and a genuine contradiction under explicit
assumptions. Never turn an observed pattern into an unconditional proof of a
framework, or replace statistical evidence with a proof stamp.
