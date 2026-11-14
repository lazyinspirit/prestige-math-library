---
id: def-qec-distinguishability-detection-code
kind: definition
domain: physics
title: J equals two detection encoding
status: published
origin: session
deps:
  - def-qec-distinguishability-angular-basis
  - def-qec-prereq-restricted-logical-channel
dependency_roles:
  def-qec-distinguishability-angular-basis: mathematical-premise
  def-qec-prereq-restricted-logical-channel: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 6, detection-code bullet and Fig. 4
      statement: The detection code has codewords
        $|\bar0\rangle=(|2,-2\rangle+|2,2\rangle)/\sqrt2$ and
        $|\bar1\rangle=|2,0\rangle$; the article identifies it as an instance of
        the absorption-emission codes of its Ref. [9]. Fig. 4 depicts their
        nonzero amplitudes.
      hypotheses: The article's angular-momentum encoding in the $J=2$ manifold.
      reading_limits: The supplied article text and rendered PDF page 6 were read.
        This citation attributes the article's formulation and family
        identification; Ref. [9] was not independently checked for that
        identification here. No experimental observation or recovery performance
        is asserted by this definition.
physical_scope: The encoding is specified in the article's idealized
  angular-momentum model; its mathematical definition does not assert an
  experimental realization.
dependency_level: 2
---

## Definition

In the spin-$2$ block $V_2=\mathbb C^5$, let $|2,m\rangle$ for $m=-2,-1,0,1,2$ be the orthonormal magnetic basis of [[def-qec-distinguishability-angular-basis]]. Define the **detection encoding** by the two codewords $|\bar0\rangle=(|2,-2\rangle+|2,2\rangle)/\sqrt2$ and $|\bar1\rangle=|2,0\rangle$. Its code space is their complex linear span $C\subseteq V_2$. Equivalently, for a two-dimensional logical space with orthonormal basis $|0\rangle,|1\rangle$, its encoding is the linear map $V$ with $V|0\rangle=|\bar0\rangle$ and $V|1\rangle=|\bar1\rangle$; its code projector is $P=VV^*$ as in [[def-qec-prereq-restricted-logical-channel]].

The article calls this an instance of the absorption–emission (Æ) codes of its Ref. [9], a family it describes as protecting against absorption–emission noise. Its Fig. 4 depicts the two nonzero $|\bar0\rangle$ amplitudes as $1/\sqrt2$ and the nonzero $|\bar1\rangle$ amplitude as $1$. The name here specifies the encoding; which errors it detects or corrects is a separate conditional claim.

## Justification

The five magnetic vectors are orthonormal, so the first displayed codeword has squared norm $(1+1)/2=1$, the second has norm one, and their inner product is zero. Hence they form an orthonormal pair, $V$ is an isometry, and its image is exactly $C$. The code-isometry convention therefore makes $P=VV^*$ the orthogonal projector onto $C$. The family identification and figure description are attributed to the article and are not needed to establish these properties. [[def-qec-distinguishability-angular-basis]] [[def-qec-prereq-restricted-logical-channel]]
