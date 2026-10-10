---
id: exp-em-wave-propagation-report
kind: experiment
title: "Hertz's 1888 finite-velocity tests: sparks, wire nodes and qualitative interference"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: physics
dependency_level: 14
deps: [def-em-experiment-record-contract]
dependency_roles:
  def-em-experiment-record-contract: operational-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Primary-report account of Hertz's 1888 finite-velocity experiments: spark detection, wire standing-wave nodes, and qualitative interference indicators under the described oscillator, detector, wire and air-path models. Qualitative historical observations with an explicit OCR limitation; no calibrated intensity, period or speed, no sampling law, no confidence interval, no proof of the Maxwell equations and no exact measurement of $c$ is claimed."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "Heinrich Hertz, Electric Waves, authorized Jones English translation (Macmillan 1893), Chapter VII, Internet Archive OCR of electricwavesbe00hertgoog (URL stamped and hashed in the batch coverage file; sha256 e64ca355422b781ab29a54939bd1ca7bbd7e70062ed540fef250cbae9098be31)"
      url: "https://archive.org/download/electricwavesbe00hertgoog/electricwavesbe00hertgoog_djvu.txt"
      locator: "Chapter VII 'On the finite velocity of propagation of electromagnetic actions', printed pp. 107-123, complete narrative; tables scrambled in the OCR and not reconstructed; rest of the volume not read"
empirical_result:
  observation: "Reported orientation-dependent spark responses of a tuned secondary detector, approximately recurring and roughly equally spaced nodal points along a long wire marked with paper riders, and changing signs of the interference indicator as wire length or distance is varied (chapter VII narrative, printed pp. 107-123)."
  uncertainty: "No calibrated spark-intensity transfer function, no independent absolute-period calibration, no trial-level likelihood or sampling model and no confidence interval; the author treats the circuit-theory period as doubtful beyond order of magnitude; the numerical tables are scrambled in the OCR used and were not reconstructed. The roughly light-speed value is a model-dependent inference, not a synchronized-clock measurement."
  conditions: "Spark-excited primary conductor with brass end plates and central spark gap; circular/square secondary conductors with micrometer-adjusted spark gaps; comparison of direct air-path action with waves on a long wire, with adjustable wire length and tuned secondary orientation; darkened room with reflections present."
  source_url: "https://archive.org/download/electricwavesbe00hertgoog/electricwavesbe00hertgoog_djvu.txt"
---

**Primary source and reading limits.** Heinrich Hertz, 'On the finite velocity
of propagation of electromagnetic actions' (Berlin Academy, 2 February 1888;
*Wiedemann's Annalen* 34 p. 661), in the authorized English *Electric Waves*
translation (D. E. Jones, Macmillan 1893), Chapter VII, printed pp. 107-123; the
complete chapter narrative was read in the Internet Archive OCR of
`electricwavesbe00hertgoog`, whose tables are visibly scrambled and have not
been reconstructed or recomputed, and the rest of the volume was not read. This
is a primary-report translation with an OCR limitation, not a modern
replication or a measured-$c$ precision source. The account below is the
report's apparatus descriptions, procedures and reported observation
indicators, structured by the record contract of
[[def-em-experiment-record-contract]].

## Setup

A spark-excited primary conductor with brass end plates and a central spark gap
drove rapid oscillations; circular or square secondary conductors with
micrometer-adjusted spark gaps served as qualitative detectors; the comparison
used waves on a long wire versus direct action through air, with tuned
secondary orientations and adjustable additional wire length; the room was
darkened, and reflections and nearby fixtures were apparatus concerns (chapter
VII narrative, printed pp. 107-123).

## Procedure

Locating nodal points of the wire standing wave by moving the tuned secondary
along the wire and marking their positions with paper riders; comparing spark
strength and suppression at different positions along a defined baseline;
lengthening the added wire from 100 cm to 600 cm in 50 cm increments and
repeating the comparison (printed pp. 117-118); changing the distance between
the primary and secondary circuits;
and comparing the direct air-path action with the wire-wave action (chapter VII
narrative).

## Observations

Orientation-dependent spark responses of the secondary detector; approximately
recurring and roughly equally spaced nodal points along the wire; and changing
signs of the interference indicator as the path length or the distance is
varied. These are the reported observed indicators; the finite phase delay and
the propagation speed of the order of light speed are the author's
model-dependent inferences, requiring his assumed oscillator, detector,
wire-wave and air-path phase interpretation.

## Uncertainty

The report expressly treats its inferred absolute period from circuit theory as
doubtful beyond order of magnitude; it supplies no modern calibrated
spark-intensity transfer function, no independent absolute period calibration,
no trial-level likelihood or sampling model, no confidence interval and no
synchronized-clock travel-time measurement; the numerical tabular signs cannot
be faithfully recovered from the OCR used, and no quantitative fit, exact speed
or uncertainty interval is claimed here. The author's rough order-of-magnitude
remarks are not confidence intervals.

## Interpretation

The described apparatus observations qualitatively support finite-propagation
and wave-interference models under the stated auxiliary assumptions; they do
not deductively prove the Maxwell equations, do not exactly establish the value
of $c$, and do not eliminate every alternative, since the comparison involves
the assumed oscillator, detector and wire-wave models. The historical
decomposition into separately propagating electrostatic and electromagnetic
components is not promoted to a modern Lorentz-covariant theorem. The source
limitations travel into any downstream historical or empirical conclusion, and
the support is a nonlogical relation to the wave predictions.
