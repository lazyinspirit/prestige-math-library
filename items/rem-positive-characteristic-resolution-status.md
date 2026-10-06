---
id: "rem-positive-characteristic-resolution-status"
kind: "remark"
title: "Recorded: the positive-characteristic boundary"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 21
deps:
  - "def-field"
  - "def-ideal-of-derivatives"
  - "def-maximal-order-and-tangent-directions"
  - "lem-giraud-tangent-directions-and-controlled-transforms"
  - "thm-prime-subfield-classification"
  - "thm-resolution-of-singularities-in-characteristic-zero"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
proved_here: false
verification:
  precheck: "n/a"
external_dependency:
  source_url: "https://homepage.univie.ac.at/herwig.hauser/Publications/Problem_PosChar.pdf"
  exact_statement: "Hauser, Bull. AMS 47 (2010), author's July 28, 2009 PDF, Introduction, p. 1, and Section B, p. 7: the problem of resolution of singularities in positive characteristic is open in general; the survey records the known cases in low dimension and the obstruction phenomena (the top locus of an ideal need not be contained in a regular hypersurface, and the characteristic-zero invariant may increase). The same survey (Section B, p. 7, and Section L, p. 23, with the cited literature) records Abhyankar's surface theorem, Lipman's excellent-surface theorem and the Cossart-Piltant threefold results."
  local_proof_attempt: "No local proof is attempted: a full positive-characteristic resolution theorem is not available in dimensions at least four, and the recorded low-dimensional theorems are deep external results. Only the failure mechanism of the characteristic-zero proof is made explicit, and it is exercised by the counterexample item of the companion page."
  necessity: "The remark fixes the scope boundary of the pair: the A-page theorem is characteristic-zero only, and no consumer may treat it as an all-characteristic statement."
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
    - title: "Herwig Hauser, On the problem of resolution of singularities in positive characteristic (Or: a proof we are still waiting for), Bull. Amer. Math. Soc. 47 (2010) 1-30"
      url: "https://homepage.univie.ac.at/herwig.hauser/Publications/Problem_PosChar.pdf"
    - title: "Shreeram S. Abhyankar, Local uniformization on algebraic surfaces over ground fields of characteristic p not equal to 0, Ann. of Math. 63 (1956) 491-526"
      url: "https://doi.org/10.2307/1970014"
    - title: "Joseph Lipman, Desingularization of two-dimensional schemes, Ann. of Math. 107 (1978) 151-207"
      url: "https://doi.org/10.2307/1971141"
    - title: "Vincent Cossart and Olivier Piltant, Resolution of singularities of threefolds in positive characteristic I, J. Algebra 320 (2008) 1051-1082; II, J. Algebra 321 (2009) 1836-1976; III, J. Algebra 521 (2019) 480-599"
      url: "https://doi.org/10.1016/j.jalgebra.2018.11.024"
---

## Remark

This remark records, and does not prove, the boundary of the characteristic-zero theorem of this page.
(1) The characteristic-zero hypothesis is used in the proof at the existence of hypersurfaces of maximal contact. The recursive ordinary derivative operators satisfy $\mathcal D^i(\mathcal D^j(\mathcal I))=\mathcal D^{i+j}(\mathcal I)$ in every characteristic. What can fail in characteristic $p>0$ is order reduction: on $\mathbb A^1_k$, the ideal $\mathcal I=(x^p)$ satisfies $\mathcal D(\mathcal I)=\mathcal I$ ([[def-ideal-of-derivatives]]). Also, the top locus of an ideal of maximal order need not be contained in the zero locus of a single equation of multiplicity one; Hasse-Dieudonne derivatives occur in the cited source discussion of positive-characteristic differential operators (Włodarczyk, the remark following Definition 2.6.1, p. 6), but this remark does not claim that replacing ordinary derivatives by them alone yields a resolution algorithm.
(2) Resolution of singularities is nevertheless known for surfaces over an arbitrary field (Abhyankar 1956; Lipman 1978 for excellent two-dimensional schemes) and for threefolds in positive characteristic under the hypotheses of Cossart-Piltant (2008-2019); the general problem in dimensions at least four over fields of positive characteristic is open as of the cited surveys.
(3) This page makes no resolution claim in positive characteristic, makes no claim of functoriality there, and does not assert that the characteristic-zero algorithm terminates over such fields.
The external statements in (2) are marked proved-here false: they are recorded, not proved on this page.
