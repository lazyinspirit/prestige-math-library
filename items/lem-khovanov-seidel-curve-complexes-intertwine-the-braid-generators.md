---
id: lem-khovanov-seidel-curve-complexes-intertwine-the-braid-generators
kind: lemma
title: "Curve complexes intertwine the braid generators"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
deps:
  - def-khovanov-seidel-complex-of-an-admissible-bigraded-curve
  - def-basic-arcs-admissible-curves-and-normal-form
  - def-axiom-of-choice
  - lem-the-khovanov-seidel-curve-complex-is-a-complex-and-is-invariant-under-normal-form-moves
  - def-khovanov-seidel-positive-and-negative-twist-complexes
  - lem-khovanov-seidel-generator-complexes-are-mutually-inverse
  - def-khovanov-seidel-complex-of-a-braid-word
  - def-elementary-geometric-half-twist
  - thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk
  - thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations
  - def-signed-totalization-of-graded-a-m-bimodule-actions
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Proposition 4.4 and Corollary 4.8"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Proposition 4.4 with its case-by-case proof, Lemmas 4.5-4.7, printed pp. 37-44; Corollary 4.8, printed p. 44"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC, used only for the induction over braid words, which reads a braid as
a boundary-fixed mapping class acting on bigraded curves
([[def-basic-arcs-admissible-curves-and-normal-form]], with its Artin completeness and smooth comparison);
each local intertwining isomorphism is a finite computation. For every
$1\le k\le m$ and every admissible bigraded curve $\widetilde c$ there is an
isomorphism in $C_m$
$$R_k\otimes_{A_m}L(\widetilde c)\cong L(\widetilde\tau_k\widetilde c),$$
where $\widetilde\tau_k$ is the preferred lift of the half twist along $b_k$
acting on bigraded curves; the inverse-generator analogue
$R_k^{-1}\otimes_{A_m}L(\widetilde c)\cong L(\widetilde\tau_k^{-1}\widetilde c)$
holds as well. Consequently, for every braid $\sigma$ presented by a word,
$$R_\sigma L(\widetilde c)\cong L(\sigma\widetilde c) \qquad\text{and, for }\widetilde c=\widetilde b_j,\qquad R_\sigma P_j\cong L(\sigma\widetilde b_j),$$
the last isomorphism using $L(\widetilde b_j)\cong P_j$ for the normalized
bigradings of the basic arcs.

## Facts & Assumptions
**Given:** The complex $L(\widetilde c)$ of an admissible bigraded curve, the twist complex $R_k=[U_k\to A_m]$, the half twist $\tau_k$ along $b_k$ and its preferred lift $\widetilde\tau_k$, and a braid word $\sigma$.

[L1] $L(\widetilde c)$ is a bounded complex of finite graded projectives, the assignment $\widetilde c\mapsto L(\widetilde c)$ is invariant under normal-form moves and the deck action acts by shifts ([[def-khovanov-seidel-complex-of-an-admissible-bigraded-curve]], [[lem-the-khovanov-seidel-curve-complex-is-a-complex-and-is-invariant-under-normal-form-moves]]).

[L2] The functors $U_k(-)=U_k\otimes_{A_m}-$ satisfy $U_k(P_j)\cong P_k\oplus P_k\{1\}$ for $j=k$, $U_k(P_{k+1})\cong P_k$, $U_k(P_{k-1})\cong P_k\{1\}$, and $U_k(P_j)=0$ for $|j-k|>1$; these are the corner computations behind the Temperley–Lieb relations ([[thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations]]).

[L3] For a bigraded $k$-string $\widetilde g$ of $\widetilde c$, the inclusion of graded modules $L(\widetilde g)\subseteq L(\widetilde c)$ is a direct summand in each degree, and the functor $U_k$ applied to it gives an inclusion of complexes $U_kL(\widetilde g)\subseteq U_kL(\widetilde c)$ whenever the crossings of $g$ support the differential components ([[def-signed-totalization-of-graded-a-m-bimodule-actions]], [[def-khovanov-seidel-complex-of-an-admissible-bigraded-curve]]).

[L4] The half twist $\tau_k$ acts on bigraded curves by the preferred lift $\widetilde\tau_k$, and the normal form of $\widetilde\tau_k\widetilde c$ is obtained from that of $\widetilde c$ by the local moves of Proposition 3.17, which change each $k$-string to its half-twisted form and leave the rest fixed ([[def-basic-arcs-admissible-curves-and-normal-form]], [[def-elementary-geometric-half-twist]]).

[L5] $R_k\otimes_{A_m}L$ is the cone of the map $U_kL\to L$ induced by $\beta_k$, and belongs to $C_m$ for every $L\in C_m$ ([[def-khovanov-seidel-positive-and-negative-twist-complexes]], [[def-signed-totalization-of-graded-a-m-bimodule-actions]]).

[L6] For a word $\sigma=\tau_1\cdots\tau_k$ the complex $R_\sigma$ is the iterated tensor product of the factors $R_i^{\pm1}$, and its functor is the composite ([[def-khovanov-seidel-complex-of-a-braid-word]]).


[L7] The positive and negative generator complexes are two-sided inverse up to bimodule homotopy, and their tensor functors preserve those homotopies ([[lem-khovanov-seidel-generator-complexes-are-mutually-inverse]]).

[F1] **Literature input.** Khovanov–Seidel Proposition 4.4, Cases 1–5 (printed pp. 38–44) gives the string comparisons relative to the complement $\nabla$; printed pp. 38–40 explain how the local homotopies extend. For type II$_0$, equations (4.7)–(4.8) and the map on printed p. 43 give $(x,y,z,w)\mapsto(x,-y-z(k-1|k),z,-w)$, together with negation of the attached right tail. The source URL and exact section are in references.

## Proof

**Proof technique:** direct.

1.1 *Decomposition into $k$-strings.* Let $\widetilde c$ be an admissible bigraded curve in normal form and fix $k$. The direct sum decomposition of the graded module $L(\widetilde c)$ into its summands $P(x)$ over crossings restricts, over the subsets of crossings lying in a single $k$-string $\widetilde g$, to a direct sum decomposition $L(\widetilde c)=\bigoplus_{\widetilde g\in\operatorname{st}(\widetilde c,k)}L(\widetilde g)\oplus(\text{crossings with }|x_0-k|>1)$. Applying $U_k$, all summands $P(x)$ with $|x_0-k|>1$ die by [L2], and for a composable pair of crossings in different $k$-strings the induced map $U_k\partial_{yx}$ is zero: either one of the two crossings has $|x_0-k|>1$, or both lie on $d_{k\pm1}$ and the differential is right multiplication by $(x_0|k|x_0)$, which $U_k$ kills [L2]; hence $U_kL(\widetilde c)\cong\bigoplus_{\widetilde g}U_kL(\widetilde g)$ as complexes. [L2, L3]

2.1 *The local intertwiners.* For each of the finitely many types of bigraded $k$-strings the source's case-by-case computation (the local lemmas and Cases 1-5 of the proof) writes $R_kL(\widetilde g)$ as $L(\widetilde\tau_k\widetilde g)$ plus contractible two-term summands with explicit contracting homotopies: for a string $\widetilde g$ of type $\mathrm{VI}$ this is the computation $R_kP_k\simeq P_k[1]\{1\}$; for the types $\mathrm{IV},\mathrm{IV}',\mathrm V,\mathrm V'$ the summand $U_kL(\widetilde g)$ is acyclic; for the types $\mathrm I,\mathrm{II},\mathrm{II}',\mathrm{III},\mathrm{III}'$ the complex $U_kL(\widetilde g)$ splits off acyclic complexes and the central folding is isomorphic to $L(\widetilde\tau_k\widetilde g)$ after the indicated sign isomorphisms, as displayed in the source comparisons [F1]. Those comparisons are relative to the outside complement $\nabla$. In particular, the type-II$_0$ comparison sends $(x,y,z,w)$ to $(x,-y-z(k-1|k),z,-w)$ and negates the entire attached right tail (printed p. 43); it is not simply an identity on all outside summands. Composing these relative homotopy equivalences string by string, and step 1.1 gives $R_kL(\widetilde c)\cong L(\widetilde\tau_k\widetilde c)$. [step 1.1, L1, L2, L4, L5, F1]

3.1 *The inverse-generator analogue.* Apply step 2.1 to $\widetilde\tau_k^{-1}\widetilde c$: it gives $R_kL(\widetilde\tau_k^{-1}\widetilde c)\cong L(\widetilde c)$. Tensor with $R_k^{-1}$ and use $R_k^{-1}R_k\cong\operatorname{Id}$ from [L7]. Thus $L(\widetilde\tau_k^{-1}\widetilde c)\cong R_k^{-1}L(\widetilde c)$. No additional inverse case computation is needed. [step 2.1, L7]

4.1 *Induction over braid words.* Let $\sigma$ be a word. By [L6] the functor $R_\sigma$ is the composite of the factors; inducting over the length of the word using steps 2.1 and 3.1 (and the composition of the induced natural isomorphisms) gives $R_\sigma L(\widetilde c)\cong L(\sigma\widetilde c)$ for the action of the braid on bigraded curves through the preferred lifts, which is well defined by the braid/mapping-class dictionary and uses AC exactly there. Applying this to $\widetilde c=\widetilde b_j$ and using that the basic arc has no essential segments, so that $L(\widetilde b_j)$ is a single summand $P_{b_j}=P_j$ for the normalized bigradings, gives $R_\sigma P_j\cong L(\sigma\widetilde b_j)$. [step 2.1, step 3.1, L6]

5.1 *Conclusion.* The generator complexes intertwine the half-twist action on bigraded curves, and consequently the braid-word complexes intertwine the braid action; the last isomorphism identifies $R_\sigma P_j$ with the complex of the twisted basic arc. The local computations are finite and AC is used only in the final word induction. [step 4.1] ∎ 