---
id: def-lawrence-krammer-bigelow-cover
kind: definition
title: The Lawrence-Krammer-Bigelow cover
status: draft
origin: pipeline
deps: [def-lkb-two-variable-covering-homomorphism, def-covering-map-and-evenly-covered-neighbourhoods, thm-classification-of-connected-covering-spaces]
justified_by: []
aliases: []
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057v1"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Section 2.1, printed p. 3: the connected covering space C-tilde with pi_1(C-tilde) = ker(Phi), the basepoint lift c-tilde_0, and the Lambda-module structure on H_2(C-tilde)"
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Section 1.2, printed p. 473: Lambda = Z[q^{+-1},t^{+-1}] and the deck action on H_2(C-tilde)"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---
## Definition

Let $C$ be the two-point configuration space of the punctured disk with
basepoint $c_0$, and let $\Phi:\pi_1(C,c_0)\to\mathbb Z^2=\langle
q\rangle\oplus\langle t\rangle$ be the two-variable covering homomorphism of
[[def-lkb-two-variable-covering-homomorphism]]. Let
$$\widetilde C\longrightarrow C$$
be the connected covering space of [[def-covering-map-and-evenly-covered-neighbourhoods]] and [[thm-classification-of-connected-covering-spaces]]
classified by the subgroup $\ker\Phi\le\pi_1(C,c_0)$, and let
$\tilde c_0\in\widetilde C$ be a fixed point of the fibre over $c_0$. The space
$\widetilde C$ is the **Lawrence-Krammer-Bigelow cover** (the LKB cover).

The hypotheses of [[thm-classification-of-connected-covering-spaces]] hold:
$C$ is nonempty and path-connected, and a configuration has a neighborhood
homeomorphic to the product of two disjoint small convex disk or half-disk
neighborhoods missing $P$. These neighborhoods are contractible, so $C$ is
locally path-connected and semilocally simply connected. Thus the specified
based connected cover exists and is unique up to based isomorphism.

**Regularity and deck group.** Since $\ker\Phi$ is a normal subgroup of
$\pi_1(C,c_0)$, the cover is regular (Galois): the deck group
$\operatorname{Deck}(\widetilde C/C)$ is isomorphic to
$\pi_1(C,c_0)/\ker\Phi\cong\operatorname{im}\Phi=\mathbb Z^2$, so it is free
abelian of rank two. Write $q$ and $t$ also for the two deck transformations
corresponding to the generators; every deck transformation maps $\tilde c_0$
to a point of the fibre over $c_0$ and acts on $\widetilde C$ by homeomorphisms
commuting with the projection.

**The coefficient ring and the module.** Put
$$\Lambda:=\mathbb Z[q^{\pm1},t^{\pm1}],$$
the Laurent polynomial ring in two commuting variables. The absolute singular
homology $H_2(\widetilde C;\mathbb Z)$ carries a $\Lambda$-module structure:
define $q\cdot x=q_*x$ and $t\cdot x=t_*x$ for the induced automorphisms of
$H_2(\widetilde C;\mathbb Z)$ and extend $\mathbb Z$-linearly and
multiplicatively; the deck transformations commute, so this is well defined
and $\Lambda$ acts through a ring homomorphism $\Lambda\to
\operatorname{End}_{\mathbb Z}(H_2(\widetilde C;\mathbb Z))$. All homology
groups below are ordinary absolute singular homology unless another
coefficient module is displayed.

The conventions fixed here are: $C$ is unordered, $c_0$ and $\tilde c_0$ are
the basepoints, deck translations act on the left, and $H_2(\widetilde C)$ is
always the integral absolute second homology of the covering space, with the
$\Lambda$-module structure just defined.
