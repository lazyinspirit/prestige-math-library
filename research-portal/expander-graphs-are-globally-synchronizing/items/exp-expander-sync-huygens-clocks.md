---
id: exp-expander-sync-huygens-clocks
title: Historical observation of coupled pendulum clocks
kind: experiment
domain: physics
status: published
origin: pipeline
deps:
  - exp-expander-prereq-huygens-source-report
dependency_roles:
  exp-expander-prereq-huygens-source-report: formulation-prerequisite
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF page 2, Section 1, opening paragraph
      statement: The article says that Christiaan Huygens, inventor of the pendulum
        clock, observed two pendulum clocks spontaneously synchronize when hung
        from the same board in 1665, and calls this the first recorded
        observation of synchronization of coupled oscillators.
      hypotheses: The claim concerns the historical observation described in the
        introductory paragraph, rather than every pair of pendulum clocks.
      reading_limits: The opening paragraph in the supplied article text was inspected
        for attribution. It does not provide a detailed protocol or measurement
        record; this reference is not independent evidence for its own claim.
    - title: Early pendulum clock by Salomon Coster, c.1657
      url: https://collection.sciencemuseumgroup.org.uk/objects/co1031/early-pendulum-clock-by-salomon-coster-c-1657
      locator: Object description, opening historical account
      statement: The Science Museum Group describes Huygens as having made the first
        successful pendulum clock in December 1656 and having subsequently
        granted Salomon Coster the right to make the clocks.
      hypotheses: The description concerns the development of the successful pendulum
        clock, not the later two-clock synchronization observation.
      reading_limits: The online object description was consulted for the historical
        attribution. Original invention and patent documents were not inspected.
    - title: Huygens’s clocks
      url: https://schatzlab.gatech.edu/Library/Bennett2002.pdf
      locator: Bennett, Schatz, Rockwood and Wiesenfeld, Proc. R. Soc. Lond. A 458
        (2002), Sections 1 and 2(a), printed pp. 563–566
      statement: The authors recount Huygens’s 1665 observations of two pendulum
        clocks swinging at the same frequency and in antiphase, and describe
        configurations in which the clocks shared a support. They report that
        the antiphase motion returned in about half an hour after a pendulum was
        disturbed.
      hypotheses: A historical account of two operating pendulum clocks suspended side
        by side and mechanically coupled through a supporting structure; the
        result is a reported observation, not a universal claim about clock
        pairs.
      reading_limits: Sections 1 and 2(a), printed pp. 563–566, including the caption
        of figure 1, were inspected for the historical observations and
        shared-support description. Figure 1 depicts the authors’ modern
        apparatus, not Huygens’s original clocks. The original correspondence
        and notebook were not independently inspected; neither the historical
        observation nor the modern experiment was reproduced.
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: Qualitative historical account of two operating pendulum clocks
  with a shared support in 1665; the historical observation was not reproduced
  here.
empirical_result:
  observation: A historical account reports that the pendulums swung at the same
    frequency and in antiphase, and returned to antiphase after a disturbance.
  conditions: Two operating pendulum clocks suspended side by side with a
    mechanically shared support; the article describes them as hung from the
    same board.
  uncertainty: The introductory article account supplies no quantitative
    measurements or uncertainty estimates. The independent account reports an
    approximate restoration time but no calibrated uncertainty or sample size
    for the historical phase and frequency observation.
  source_url: https://schatzlab.gatech.edu/Library/Bennett2002.pdf
dependency_level: 1
---

## Setup

The article reports that Christiaan Huygens observed two pendulum clocks hung from the same board in 1665. A pendulum clock uses a swinging pendulum to regulate its timekeeping mechanism. The Science Museum Group credits Huygens with making the first successful pendulum clock in 1656. An independent historical account describes two clocks suspended side by side and, in one configuration, hung from hooks in the same wooden beam.

## Procedure

The article gives no further experimental protocol. In the independent account, Huygens observed the clocks operating together and disturbed one pendulum to see what happened to their motion. The historical procedure was not reproduced here.

## Observations

The article reports that the two clocks spontaneously synchronized. Here synchronization means that their swings acquired a common frequency with a persistent phase relationship. The independent account reports the specific relationship as antiphase: the swings were opposite in phase, separated by half a cycle. It also reports that antiphase returned approximately half an hour after one pendulum was disturbed.

## Uncertainty

The article's introductory account supplies no measurement values, timing precision, sample size, or uncertainty estimates. The independent account gives no calibrated uncertainty or sample size for the historical phase and frequency observation, and the reported restoration time is approximate.

## Interpretation

The article calls this the first recorded observation of synchronization of coupled oscillators. This is the article's historical-priority claim; the independent supplier does not establish priority. Coupling means an interaction through which the motion of one clock can influence the other. The independent account recounts Huygens's interpretation that small movements of the shared support provided that interaction; this interpretation is distinct from the reported observation.

## Source notes

The article's opening paragraph is the source of its board description and priority claim. The independent historical account is recorded in [[exp-expander-prereq-huygens-source-report]]. The original correspondence and notebook were not independently inspected, and neither the historical observation nor the modern experiment discussed by that account was reproduced here. The Science Museum Group object description supplies the separate historical attribution for the successful pendulum clock; original invention and patent documents were not inspected.
