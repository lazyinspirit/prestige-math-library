---
id: def-braid-group-from-unordered-configurations
kind: definition
title: "The configuration braid group $B_n^{\\mathrm{conf}}$ as the fundamental group of an unordered configuration space"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-unordered-configuration-space,
       def-pure-braid-group-from-ordered-configurations,
       def-ordered-configuration-space,
       lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent,
       thm-ordered-configurations-cover-unordered-configurations-regularly,
       def-based-loops-and-fundamental-group,
       def-induced-homomorphism-on-fundamental-groups,
       lem-path-conjugation-isomorphism-of-fundamental-groups]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.1-1.3, printed pp. 3-6"
      url: "https://arxiv.org/pdf/1010.0321"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

Fix $n\in\mathbb N$ and the same base configuration $q=(q_1,\dots,q_n)$ of
pairwise distinct points of $\operatorname{int}D^2$ that is used in
[[def-pure-braid-group-from-ordered-configurations]], with $D^2$ the closed unit
disc. Write $p:F_n(D^2)\to C_n(D^2)$ for the quotient of the ordered by the
unordered configuration space, so that $p(q)=[q]$ is the orbit of $q$
([[def-unordered-configuration-space]]). The **configuration braid group** on
$n$ strands is the fundamental group
([[def-based-loops-and-fundamental-group]])

$$B_n^{\mathrm{conf}}:=\pi_1\big(C_n(D^2),[q]\big),$$

the group of based-loop classes at the orbit $[q]$ in the unordered
configuration space of the closed disc, with the first-then-second loop product.

**The open-disc model.** The inclusion-induced map
$\iota^C:C_n(\operatorname{int}D^2)\to C_n(D^2)$ of
[[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]]
induces an isomorphism
$$\pi_1\big(C_n(\operatorname{int}D^2),[q]\big)\longrightarrow\pi_1\big(C_n(D^2),[q]\big)$$
at the same basepoint (claim 3 of that lemma,
[[def-induced-homomorphism-on-fundamental-groups]]), so $B_n^{\mathrm{conf}}$
may be computed from either disc model exactly as $PB_n$ may. Both groups in
this definition and in
[[def-pure-braid-group-from-ordered-configurations]] are taken at the
basepoints $[q]$ and $q$ coming from the same tuple $q$, which is what makes the
comparison map of the configuration braid short exact sequence, proved in a
later item on this page, a map of based fundamental groups.

**The basepoint.** Since $F_n(D^2)\to C_n(D^2)$ is surjective every basepoint of
$C_n(D^2)$ is an orbit, and since $C_n(D^2)$ is path-connected (claim 2 of
[[thm-ordered-configurations-cover-unordered-configurations-regularly]]) the
groups at different orbits are isomorphic by conjugation along a path
([[lem-path-conjugation-isomorphism-of-fundamental-groups]]); no particular
isomorphism is fixed. For $n=0$ the space $C_0(D^2)$ is a point and
$B_0^{\mathrm{conf}}$ is the one-element group.

**The superscript.** The decoration $\mathrm{conf}$ records that the group is
defined here through configuration spaces, and it is retained until the later
geometric identification of $B_n^{\mathrm{conf}}$ with the braid group given by
strand diagrams and with its Artin presentation. No such identification and no
presentation is asserted on this page; neither is any identification of
$B_n^{\mathrm{conf}}$ with a group of self-homeomorphisms of the disc.
