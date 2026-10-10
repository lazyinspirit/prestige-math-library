---
id: exp-em-induction-report
kind: experiment
title: "Faraday's 1831 induction experiments: reported transients and the iron-ring apparatus"
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
physical_scope: "Primary-report account of Faraday's 1831 induction experiments for the described apparatus: transient deflections at make and break of the battery circuit, needle magnetization and reversal controls, relative-motion transients, and the soft-iron-ring apparatus. Qualitative observations with finite resolution; no calibrated current, no sampling law, no precision, no single quantitative model comparison, and no proof or refutation of any induction law or postulate is claimed."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "Michael Faraday, Experimental Researches in Electricity, Volume I, First Series (read 24 November 1831), 1849 collected second edition, Project Gutenberg transcription (URL stamped and hashed in the batch coverage file; sha256 61a33e232f34d99c2a526ccd5d1cac42c32190e90083b10b7dba51838be6f7f0)"
      url: "https://www.gutenberg.org/files/14986/14986-h/14986-h.htm"
      locator: "First Series, paragraphs 1-33 completely (apparatus paragraphs 6, 10, 13, 18, 27-28; procedure and observations paragraphs 10-11, 13, 17, 18-20, 28-33); no claim to have read the whole volume"
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (author-hosted, 236 pp.); modern account of Faraday's law and the moving-wire emf used only as the context of the conditional induction predictions named in the interpretation"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Section 4.1 'Faraday's Law of Induction' printed pp. 67-69 (differential law (4.1), Stokes reduction and the circuit emf) and Section 4.1.1 'Faraday's Law for Moving Wires' printed pp. 69-71, read in the stamped complete 236-page author-hosted text"
empirical_result:
  observation: "Reported make/break transient galvanometer deflections in opposite directions with no sustained perceived deflection under continued battery current; needle magnetization with opposite poles at make and break; opposite approach/recede deflections returning to the ordinary position when motion ceases; stronger iron-ring transients with battery-direction reversal (paragraphs 11, 13-17, 18-20, 28-33); qualitative finite-resolution observations only."
  uncertainty: "No calibrated deflection-to-current conversion, detector response function, trial-level dataset, declared sampling law, error bars or significance test in the read paragraphs; apparatus dimensions are historical approximations; 'none perceived' is not an exact zero. No precision is inferred."
  conditions: "Insulated copper helices and interleaved coil pairs (including the one-hundred-and-twenty-pair battery trial of paragraph 11), hollow helix with steel needle, zigzag wire boards, and a welded soft-iron ring with three inducing A helices and a separate B helix connected to the galvanometer, driven with ten and one hundred pairs of plates (paragraphs 27-31), with make/break, battery-reversal, needle-insertion-order and detector-circuit-timing controls, as described in the First Series."
  source_url: "https://www.gutenberg.org/files/14986/14986-h/14986-h.htm"
---

**Primary source and reading limits.** Michael Faraday, *Experimental Researches in
Electricity*, Volume I, First Series (read 24 November 1831), 1849 collected
second edition, read in the Project Gutenberg transcription derived from
BnF/Gallica images; the First Series paragraphs 1-33 were read completely, and
no claim is made to have read the whole volume. This is an original report
reprint transmitted by a later transcription, not a newly repeated experiment.
The account below is the report's apparatus descriptions and reported
observations, structured by the record contract of
[[def-em-experiment-record-contract]]; it is not a deduction, and 'no perceived
deflection' is everywhere the report's finite-resolution verbal observation.

## Setup

Insulated copper helices wound on a wooden cylinder, each containing about
twenty-seven feet of wire and kept from touching by interposed twine, twelve
helices superposed in the same direction with the first, third, fifth, seventh,
ninth and eleventh joined into one helix and the remainder into a second
(paragraph 6). A pair of two-hundred-and-three-foot coils interleaved as a
spiral on a wooden block with metallic contact prevented by twine (paragraph
10). A small hollow helix wound on a glass tube into which a steel needle could
be inserted (paragraph 13). Insulated zigzag wire boards moved relatively to
one another (paragraph 18). A welded soft-iron ring, seven-eighths of an inch
thick and six inches in external diameter, with three insulated inducing
helices A of about twenty-four feet each and a separate helix B made from
about sixty feet of wire in two pieces. The A helices were joined end to end
and connected to a battery of ten pairs of plates; B was connected to a
galvanometer three feet from the ring (paragraphs 27-28). Paragraph 31 reports
the ring trial with one hundred pairs; paragraph 11 reports a separate
coil trial with one hundred and twenty pairs.

## Procedure

Making and breaking the battery circuit of the inducing helix while the
detector loop is kept complete (paragraphs 10-11); removing the inserted needle
before breaking the battery contact, and inserting it after make but before
break (paragraphs 13-14);
completing the detector circuit before the battery contact is made or broken
(paragraph 17); moving the zigzag boards together and apart with a steady
battery current (paragraphs 18-19); reversing the direction of the battery
connection (paragraph 30); repeating with larger batteries and with charcoal
contacts (paragraphs 31-32).

## Observations

A slight deflection of the galvanometer needle at the moment of completing the
connection, always in one direction, with the opposite deflection at breaking,
and no sustained perceived deflection under the continued steady battery
connection (paragraphs 11 and 28-31); magnetization of an inserted steel needle,
with opposite poles at make and at break and near-cancellation when both
transients act on the same inserted needle (paragraphs 13-17); opposite
transient deflections as the boards approach and recede, with return to the
ordinary position when the movement ceases (paragraphs 18-20); a minute spark
at the secondary helix with charcoal contacts (paragraph 32); and the control
that, after the first effect, the galvanometer needle resumes its position
under the continued battery current (paragraphs 28 and 33). These are reported
finite-resolution qualitative observations.

## Uncertainty

The read passages identify deflection direction, needle-pole comparison,
battery reversal and background and timing controls, but supply no calibrated
conversion from deflection to current, no detector response or transfer
function, no trial-level dataset, no declared sampling law, no error bars and
no formal significance test; dimensions, wire lengths and battery plate counts
are historical approximate apparatus descriptions, not modern precision
estimates. The sign interpretation of the induced current depends on
galvanometer and needle response conventions. Missing information is retained
as missing; no error bars, precision or independence are invented.

## Interpretation

The reported observations support a transient induction model for the described
apparatus under the stated apparatus assumptions and are qualitatively
consistent with conditional framework predictions of transient induction where
those are instantiated for the described circuits; they do not establish a
universal exact induction law, do not isolate all auxiliary assumptions
(magnetic inertia, switching transients, leakage, current history, geometry)
and supply no quantitative model comparison. The empirical support is a
nonlogical relation to the induction predictions, not a proof of any
postulate, and the source limitations of the reading travel into any downstream
conclusion.
