---
id: def-lkb-relative-pairing-modules
kind: definition
title: The relative pairing modules as stabilized direct limits
status: published
origin: pipeline
deps: [def-lawrence-krammer-bigelow-cover, lem-lkb-small-end-neighbourhoods-stabilize-equivariantly]
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057v1"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Section 2.2, printed pp. 3-4: nu_epsilon, the preimage nu-tilde_epsilon, and the modules H_2(C-tilde, nu-tilde), H_2(C-tilde, dC-tilde union nu-tilde)"
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Section 1.2 and Lemma 2.3 proof, printed pp. 473 and 477-479: the relative groups used for forks and noodles"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---
## Definition

Let $D$ be the closed unit disk, $P=\{p_1,\dots,p_n\}\subset\operatorname{int}D$,
let $C$ be the two-point configuration space of the punctured disk with the
distance function
$$f(\{x,y\})=\min\bigl(|x-y|,\ \operatorname{dist}(x,P),\ \operatorname{dist}(y,P)\bigr),$$
and let $\widetilde C\to C$ be the LKB cover of
[[def-lawrence-krammer-bigelow-cover]].

For $\varepsilon>0$ put
$$\nu_\varepsilon=\{\{x,y\}\in C: f(\{x,y\})<\varepsilon\} =\{\{x,y\}:|x-y|<\varepsilon\text{ or }\operatorname{dist}(x,P)<\varepsilon \text{ or }\operatorname{dist}(y,P)<\varepsilon\},$$
and let $\tilde\nu_\varepsilon$ be the preimage of $\nu_\varepsilon$ in
$\widetilde C$. Thus $\nu_\delta\subseteq\nu_\varepsilon$ and
$\tilde\nu_\delta\subseteq\tilde\nu_\varepsilon$ whenever $\delta<\varepsilon$,
and the identity inclusions of pairs
$$(C,\nu_\delta)\to(C,\nu_\varepsilon),\qquad (C,\partial C\cup\nu_\delta)\to(C,\partial C\cup\nu_\varepsilon)$$
induce the *natural* relative-homology maps from small radii to large radii.

**The stabilized limits.** By
[[lem-lkb-small-end-neighbourhoods-stabilize-equivariantly]] there is
$\varepsilon_0>0$ such that for all $0<\delta<\varepsilon<\varepsilon_0$ these
inclusions are homotopy equivalences of pairs, with explicit inverse homotopy
equivalences of pairs, and so induce isomorphisms in relative homology in every
degree. The **relative pairing modules** are the direct limits
$$H_2(\widetilde C,\tilde\nu):=\lim_{\varepsilon\to0} H_2(\widetilde C,\tilde\nu_\varepsilon),\qquad H_2(\widetilde C,\partial\widetilde C\cup\tilde\nu):=\lim_{\varepsilon\to0} H_2(\widetilde C,\partial\widetilde C\cup\tilde\nu_\varepsilon),$$
taken in the category of abelian groups along the **inverse transition maps**
$$H_2(\widetilde C,\tilde\nu_\varepsilon)\longrightarrow H_2(\widetilde C,\tilde\nu_\delta),\qquad H_2(\widetilde C,\partial\widetilde C\cup\tilde\nu_\varepsilon) \longrightarrow H_2(\widetilde C,\partial\widetilde C\cup\tilde\nu_\delta) \qquad(\delta<\varepsilon<\varepsilon_0),$$
which are the unique inverses of the natural maps. The stabilization lemma
supplies these inverses explicitly and proves that they compose compatibly for
$\gamma<\delta<\varepsilon$; consequently the inverse system is constant up to
canonical isomorphism on $(0,\varepsilon_0)$ and each of the two direct limits
is canonically isomorphic, as an abelian group, to every group
$H_2(\widetilde C,\tilde\nu_\varepsilon)$ with $0<\varepsilon<\varepsilon_0$
(respectively to every boundary-union group). This is the *stabilized direct
limit convention*: the natural relative maps themselves run from small to
large radii, and the transition maps toward zero are their canonical inverses,
not the natural maps.

**The $\Lambda$-module structure.** A deck transformation of $\widetilde C$
commutes with the projection, hence carries $\tilde\nu_\varepsilon$ onto
$\tilde\nu_\varepsilon$ and preserves both pairs; the induced automorphisms
commute with the inclusions and with the inverse transition maps, so they
induce automorphisms of both direct limits. Extending multiplicatively gives
both limits the structure of $\Lambda$-modules, where
$\Lambda=\mathbb Z[q^{\pm1},t^{\pm1}]$ acts through the deck translations $q$
and $t$. These two $\Lambda$-modules are the targets of the LKB pairing
defined below; no element of either limit is claimed to be an absolute class.
