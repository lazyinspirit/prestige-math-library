---
id: rem-qec-distinguishability-information-disturbance
kind: remark
domain: physics
title: Logical information leakage versus erasure flags
status: draft
origin: session
deps:
  - prop-qec-distinguishability-environment-kl
  - thm-qec-distinguishability-kl-conditions
  - def-qec-prereq-restricted-logical-channel
  - def-qec-prereq-complementary-error-record
  - def-qec-prereq-syndrome-and-logical-record
formulation_deps:
  - def-qec-prereq-restricted-logical-channel
  - def-qec-prereq-complementary-error-record
  - def-qec-prereq-syndrome-and-logical-record
argument_deps:
  - prop-qec-distinguishability-environment-kl
  - thm-qec-distinguishability-kl-conditions
  - def-qec-prereq-restricted-logical-channel
  - def-qec-prereq-complementary-error-record
  - def-qec-prereq-syndrome-and-logical-record
dependency_roles:
  prop-qec-distinguishability-environment-kl: mathematical-premise
  thm-qec-distinguishability-kl-conditions: mathematical-premise
  def-qec-prereq-restricted-logical-channel: mathematical-premise
  def-qec-prereq-complementary-error-record: mathematical-premise
  def-qec-prereq-syndrome-and-logical-record: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 5, Discussion, first paragraph
      statement: The article invokes information–disturbance to relate environmental
        which-state information to damage from decay, and contrasts
        logical-state-dependent records with an erasure-conversion flag designed
        to reveal the syndrome without revealing logical information.
      hypotheses: Qualitative discussion of distinguishable decay events and the
        intended role of an erasure-conversion flag.
      reading_limits: The text extracted from PDF page 5 was read. This is attribution
        of the article's discussion, not independent evidence for the
        mathematical argument; references 48, 51 and 52 were not independently
        read.
physical_scope: Qualitative discussion of decay-path information and erasure
  flags, with a finite-dimensional conditional channel argument; no particular
  laboratory observation or quantitative disturbance bound is asserted.
dependency_level: 3
---

## Remark

The article argues that when a frequency shift lets the environment distinguish which state decayed, the information–disturbance tradeoff can increase the damage caused by decay. It says distinguishability is harmful when the resulting record depends on the logical state, and contrasts this with erasure conversion: an error flag is designed to reveal an error syndrome without revealing logical information. Here a decay is a specified physical error process, a syndrome is a label for an error outcome, and an erasure flag is a distinguishable outcome indicating a designated erased branch. These are the article's qualitative claims; they do not specify a numerical measure of damage or a universal inequality.

For a precise finite-dimensional comparison, encode a logical system by an isometry $V$ into a code subspace $C$ of a physical system, and let a quantum channel $\mathcal N$ describe the noise. A quantum channel is a completely positive trace-preserving linear map. Fix a finite Kraus representation $\mathcal N(X)=\sum_a E_a X E_a^\dagger$ and its complementary channel, which gives the environment output in the associated dilation. The full environmental record is logical-state dependent if two encoded logical density operators give different environment outputs. Exact correction means that a recovery channel after the noise returns every logical operator unchanged. Under these hypotheses, logical-state dependence of the full record rules out exact correction of the channel on the code.

A flag's distribution being independent of the logical input is a weaker statement than independence of the full environmental record. In the standard erasure channel, the flag probability is input independent, while the erased logical state need not be recoverable from the channel output. Thus the comparison concerns what the flag itself reveals; it does not assert that every environment associated with an erasure process contains no logical information.

## Remark references

[[def-qec-prereq-restricted-logical-channel]]

[[def-qec-prereq-complementary-error-record]]

[[def-qec-prereq-syndrome-and-logical-record]]

## Facts & Assumptions

[F1] For finite-dimensional spaces, the code is the image of the encoding isometry, and exact correction means that a decoded recovery composed with noise and encoding is the identity on all logical operators. [[def-qec-prereq-restricted-logical-channel]]

[F2] The complementary record for the chosen finite Kraus representation is the output obtained by tracing out the channel output from its associated isometric dilation. Logical-state independence means equality of the full record for all density operators supported on the code. [[def-qec-prereq-complementary-error-record]]

[F3] For this finite-dimensional channel and code, exact correction implies the Knill–Laflamme scalar-overlap conditions for the chosen Kraus family. [[thm-qec-distinguishability-kl-conditions]]

[F4] Those scalar-overlap conditions imply a common full environmental record for all code density operators; fixed instruments on that record then have logical-state-independent outcome probabilities and defined conditional outputs. [[prop-qec-distinguishability-environment-kl]]

[F5] A syndrome flag is an outcome of a fixed instrument on the record. Independence of its outcome distribution need not imply independence of the full record. In the finite-dimensional erasure channel with parameter $0\leq\epsilon\leq1$, the distinguishable erasure flag occurs with probability $\epsilon$, and the unflagged branch retains the input state when that branch has nonzero probability. [[def-qec-prereq-syndrome-and-logical-record]]

## Justification

**Given:** The finite-dimensional encoding, channel, Kraus representation and complementary record described above.

**Goal:** Establish the stated exact-correction consequence and distinguish flag statistics from the full record.

1.1 Suppose exact correction exists. The scalar-overlap conditions follow by [F3], and [F4] then gives the same full environmental record for every density operator supported on the code. Encoded logical density operators are supported on that code. Consequently, if two such inputs give different full records, exact correction cannot exist. [given, F1, F2, F3, F4]

2.1 By [F5], logical-state-independent flag probabilities alone do not imply independence of the full record. In the specified erasure channel the flag probability is the same $\epsilon$ for every input; at $\epsilon=1$ the channel output is the fixed erasure state for every input, so a decoder cannot recover two distinct logical states. This illustrates why the flag's lack of logical information does not by itself establish recovery or characterize the entire environment. [F1, F5, step 1.1] ∎

## Source notes

The article's qualitative information–disturbance and erasure-conversion comparison is attributed above. The finite-dimensional conclusion follows from the named mathematical suppliers and is not a quantitative claim that every increase in distinguishability causes a specified increase in recovery error.
