---
page: permutation-models-and-transfer-to-zf
title: "Permutation Models and Transfer to ZF"
status: draft
items: [def-zfa-universe-atoms-and-kernel, def-permutation-support-system-and-normal-filter, def-symmetric-and-hereditarily-symmetric-sets, thm-fraenkel-mostowski-permutation-model, thm-basic-fraenkel-model, thm-second-fraenkel-model-countable-pairs-without-choice, thm-ordered-mostowski-model, def-boundable-sentence-over-an-atom-set, thm-jech-sochor-first-embedding, thm-jech-sochor-transfer-for-boundable-sentences, rem-pincus-transfer-interface-and-preservation-limits, lem-jech-sochor-socks-transfer-is-uniformly-formalizable, cor-zf-countable-family-of-pairs-without-choice]
examples: []
---

Permutation models start in ZFA, where atoms are distinct empty objects and Extensionality is restricted to sets. A group action and normal support filter determine the hereditarily symmetric universe. The Fraenkel–Mostowski theorem verifies every ZFA axiom inside it; Choice is not inherited.

Finite supports yield the basic and second Fraenkel models, while order supports yield the ordered Mostowski model. Each failure proof exhibits the exact transposition or order automorphism that fixes the proposed support but moves the alleged enumeration, choice function, or well-order.

The Jech–Sochor section uses a certified carried-sort transfer interface. The first embedding preserves membership and equality through a specified ordinal power-set height, enough to transfer the socks sentence from ZFA to ZF once its source and target readings are checked. The final corollary applies a separate finite model construction to each fixed fragment and claims external relative consistency, without asserting a PA-verified uniform constructor.
