---
id: def-standard-pure-braid-generators
kind: definition
title: "Standard geometric pure braid generators A_ij"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-elementary-geometric-half-twist, prop-the-artin-presentation-surjects-onto-geometric-braids, cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations, prop-stacking-of-geometric-braids-is-well-defined]
justified_by: []
aliases: []
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.2, author manuscript p. 5 (standard pure generators A_{r,s})"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 2.1, printed p. 11 (Artin pure generator words)"
      url: "https://arxiv.org/pdf/1010.0321"
---

## Definition

Fix $n\in\mathbb N$ and let $Q=(q_1,\dots,q_n)$ be the base configuration and
$\sigma_1,\dots,\sigma_{n-1}$ the positive elementary half twists of
[[def-elementary-geometric-half-twist]], with classes $[\sigma_i]$ in the
geometric braid group $G_n$ at $Q$ and with $[\sigma_i]^{-1}=[\sigma_i^-]$.
Write $\star$ for first-under-second stacking, so that
$[\gamma\star\beta]=[\gamma][\beta]$. For indices $1\le i<j\le n$ put

$$W_{ij}:=\sigma_{j-1}\star\sigma_{j-2}\star\cdots\star\sigma_{i+1}\star\sigma_i^2\star\sigma_{i+1}^{-1}\star\cdots\star\sigma_{j-2}^{-1}\star\sigma_{j-1}^{-1},$$

the stacking of the displayed half twists and their opposites in the order
written: by the convention of
[[prop-stacking-of-geometric-braids-is-well-defined]] the right factor of each
stacking lies in the lower half of the height interval and runs first, so the
rightmost factor $\sigma_{j-1}^{-1}$ is the bottom one and the leftmost factor
$\sigma_{j-1}$ the top one. When
$j=i+1$ both outer blocks are empty and $W_{i,i+1}=\sigma_i^2$. The
**standard pure braid generators** are the classes

$$A_{ij}:=[W_{ij}]\in G_n\qquad(1\le i<j\le n).$$

The same letters name the corresponding elements of the pure configuration
braid group, in the following precise sense.

**The generators are pure.** The endpoint-permutation homomorphism
$\pi_{\mathrm{geo}}:G_n\to S_n$ (written $\pi$ in
[[prop-the-artin-presentation-surjects-onto-geometric-braids]]) sends
$[\sigma_r]$ to the transposition of $r$ and $r+1$, as computed for the
half twists in [[def-elementary-geometric-half-twist]]. Since
$\pi_{\mathrm{geo}}(\sigma_i^2)=\mathrm{id}$ and $\pi_{\mathrm{geo}}$ is a
homomorphism, the outer word cancels its own inverse:

$$\pi_{\mathrm{geo}}(A_{ij})=\pi_{\mathrm{geo}}\bigl(\sigma_{j-1}\cdots\sigma_{i+1}\bigr)\cdot\mathrm{id}\cdot\pi_{\mathrm{geo}}\bigl(\sigma_{j-1}\cdots\sigma_{i+1}\bigr)^{-1}=\mathrm{id}.$$

Hence $A_{ij}$ lies in the pure geometric braid subgroup
$G_n^{\mathrm{pure}}=\ker\pi_{\mathrm{geo}}$. This uses only that
$\pi_{\mathrm{geo}}$ is a homomorphism and that two half twists of one pair
return each of the two strands to its starting point; the intermediate
permutation $\pi_{\mathrm{geo}}(\sigma_{j-1}\cdots\sigma_{i+1})$, which fixes label $i$ and permutes only the labels $i+1,\dots,j$, is irrelevant for the computation.

**Identification with the configuration group.** By
[[cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations]]
the map

$$\Psi:G_n^{\mathrm{pure}}\longrightarrow PB_n,\qquad\Psi([\beta])=\bigl(\iota^F_*[z_\beta]\bigr)^{-1},$$

is an isomorphism onto the pure configuration braid group, where $z_\beta$ is
the coordinate path of the representative $\beta$ and $\iota^F_*$ is induced
by the inclusion of the open disc. An element of $PB_n$ that equals
$\Psi(A_{ij})$ for some $1\le i<j\le n$ is again written $A_{ij}$. In
particular, whenever a statement about $PB_n$ names $A_{ij}$, it means this
image under the published isomorphism, and the inverse sign in $\Psi$ is part
of the definition. Ordering statements about the generators therefore refer to
the geometric classes $[W_{ij}]$, or equivalently to their images in $PB_n$.

**Convention and scope.** The classes $[W_{ij}]$ are finite products of the
geometric half twists and their inverses, and every step of the construction is
explicit: no choice principle is used. The definition invokes
[[prop-the-artin-presentation-surjects-onto-geometric-braids]] only to record
that the same letters $\sigma_r$ may be read as the image of the corresponding
letters of the Artin presentation; neither injectivity of that presentation nor
completeness of its relations is asserted or used. Nor does the definition
assert that the family $\{A_{ij}\}$ generates $PB_n$, nor that any particular
list of relations between the $A_{ij}$ is complete. For $n\le1$ the index set
$\{1\le i<j\le n\}$ is empty and the family $\{A_{ij}\}$ is empty; $PB_n$ is
trivial there.
