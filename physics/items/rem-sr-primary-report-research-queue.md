---
id: rem-sr-primary-report-research-queue
kind: remark
domain: physics
title: "Primary-report research queue for the special-relativity framework"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
deps:
  - def-sr-experiment-interface-vocabulary
dependency_roles:
  def-sr-experiment-interface-vocabulary: formulation-prerequisite
physical_scope: "Scope declaration of the framework's empirical interface: it records a research queue of primary-report destinations and the qualifications future experiment items must carry. It asserts no measurement, no dataset, no uncertainty value, no comparison result, no deviation, no empirical support for any postulate and no precision of any physical constant."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages; the author's lightandmatter.com page links this Archive upload); signature (+---) converted to (-+++) and c = 1 formulas restored to x^0 = c t; Chapters 1-3 and 5, including the narrative context on pp. 13-15, the 1938 Ives-Stilwell test mention on p. 57, the storage-ring muon-lifetime account on pp. 28-29, the Hafele-Keating account on pp. 15, 26 and 28, and the 2010 atomic-clock measurement mention on p. 28"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III course notes, 2019), author-hosted copy of the official Cambridge full PDF; Chapter 1 Sections 1.2.1-1.2.2 printed pp. 12-16 (proper time on p. 14), and Section 1.2.5 printed pp. 24-26: Hafele-Keating on p. 25 and Pound-Rebka on p. 26"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
dependency_level: 17
---

## Statement

Scope-and-queue record for the empirical layer of the flat special-relativity framework, stated in the vocabulary of [[def-sr-experiment-interface-vocabulary]].

(i) The actual primary Botermann et al. 2014 stored-lithium-ion Ives-Stilwell report has now been retrieved and read in full. The experiment item records its apparatus, calibration, finite sampling, frequency estimates and $1\sigma$ budget; the comparison theorem supplies explicit conditional bound and reported-scale analysis. No raw dataset or new coverage claim is supplied.

(ii) The source design declares four *primary-report search destinations* for future experiment items of this framework. Each is named here as a destination, that is, a family of published reports to retrieve and read in full text, and no destination is evidence for any postulate: (a) historical ether and light-propagation experiments (interferometric or resonance tests of the constancy of the coordinate speed of light between inertial charts, and Doppler-shift tests of moving emitters); (b) unstable-particle lifetime measurements (beam or storage-ring measurements of a particle's lifetime at a measured speed compared with its lifetime at rest); (c) accelerator kinematics of charged particles at high Lorentz factor (measurements of momentum, energy or speed relating a particle's measured quantities to its velocity); (d) clock-transport and clock-comparison experiments (aircraft-, satellite- or laboratory-borne atomic clocks comparing the elapsed times of differently moving or differently situated ideal clocks). The secondary narratives consulted for this page mention instances of these families, among them the historical ether-and-Maxwell context (Crowell pp. 13-15), the 1938 Ives-Stilwell Doppler test (Crowell p. 57), storage-ring muon-lifetime measurements (Crowell pp. 28-29), the 1971 Hafele-Keating aircraft atomic-clock comparison (Crowell pp. 15, 26, 28; Tong pp. 24-25) and a 2010 low-speed atomic-clock measurement (Crowell p. 28); those mentions are contextual motivation only and are not documentation of reported measurements here.

(iii) Before any experiment item can be authored on a destination, the actual primary report must be retrieved and read, and the record must carry the apparatus and preparation, operational definitions of the measured quantities, the calibration model, the sampling and error model, the treatment of systematic errors, the measured values with their reported uncertainties, and the source's limitations. Textbook and review narratives are not substitutes for the primary reports.

(iv) The comparison of model predictions with recorded data is a separate promised physics-theorem obligation which the source design declares to require the primary-report and analysis layer (research label M20); that layer is now supplied for the specified 2014 stored-lithium-ion report by the experiment and comparison theorem, while the other primary-report families remain research queues.

(v) Qualifications any future comparison must carry: observations test the combined model and apparatus assumptions; finite-sample agreement does not establish a postulate or a model; a p-value would not be the probability that a theory is false and a confidence level would not be a posterior probability; and a finite bounded record does not by itself determine a unique parameter or adjudicate between distinct models.

(vi) This remark is a queue/status pointer; measured estimates and their qualifications are recorded only in the experiment item. It supplies no independent empirical conclusion or certainty.

The four-family search queue remains intact: this single optical Doppler primary report supplies one branch of family (a); historical ether/interferometer reports and the lifetime, accelerator and transported-clock families still require actual retrieval and reading. Source-cited RMS/SME analyses remain separate queue obligations.

Current nonlogical status pointers: `exp-sr-stored-lithium-ion-doppler-time-dilation-2014` records the primary observations; `pthm-sr-specified-model-comparison` gives the separate conditional comparison. These pointers add no logical prerequisite.
