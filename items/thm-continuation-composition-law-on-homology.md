---
id: thm-continuation-composition-law-on-homology
kind: theorem
title: "Composition of continuation maps on homology"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuation-chain-map, thm-continuation-count-is-a-chain-map, thm-homotopic-continuation-data-give-chain-homotopic-maps, def-two-parameter-continuation-homotopy, def-regular-continuation-datum-between-morse-smale-pairs, def-morse-homology-of-a-morse-smale-pair, def-axiom-of-choice, def-morse-smale-pair, lem-metric-end-flow-matching-gives-local-broken-charts, thm-continuation-trajectories-are-compact-up-to-breaking, lem-orientation-lines-orient-continuation-moduli-spaces]
justified_by: []
dependency_level: 11
proof_strategy: direct
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 20, Sec. 6.3 (5): glue the reparametrized homotopies; for large S the continuation map of the glued homotopy equals the composite, PDF p. 92, with the compactness details on pp. 93-95"
    - title: "Michael Hutchings, Math 242 Lecture 21: Invariance via continuation maps (notes by Jackson Van Dyke, complete PDF)"
      url: "https://web.ma.utexas.edu/users/vandyke/notes/242_notes/lecture21.pdf"
      locator: "Lecture 21, Sec. 1.2, final step: the commutative triangle for three Morse--Smale pairs together with the chain homotopy between the two constructions, p. 4 of the lecture"
    - title: "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, complete PDF, 93 pp.)"
      url: "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
      locator: "Ch. 8, Lemma 8.3: the composition rule obtained from the gluing bijection and the equality of characteristic signs, pp. 78-79"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.4, third step: the two-parameter family showing that Phi^G o Phi^F and Phi^H coincide in homology, printed pp. 75-78, PDF pp. 85-88"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(f^{01}_s,g^{01}_s)$
and $(f^{12}_s,g^{12}_s)$ be regular continuation data from $(f^0,g^0)$ to
$(f^1,g^1)$ and from $(f^1,g^1)$ to $(f^2,g^2)$ on a closed manifold $M$,
with continuation maps $\Phi^{10}$ and $\Phi^{21}$
([[def-continuation-chain-map]], [[def-morse-smale-pair]]).

Then there exists a regular continuation datum $(f^{02}_s,g^{02}_s)$ from
$(f^0,g^0)$ to $(f^2,g^2)$, obtained by splicing the two data with a large
gluing window and then making an arbitrarily small generic perturbation fixing
the ends, such that
$$[\Phi^{20}]=[\Phi^{21}]\circ[\Phi^{10}]:HM_*(f^0,g^0;\Lambda)\longrightarrow HM_*(f^2,g^2;\Lambda).$$
In particular the canonical isomorphisms of Morse homology compose, and
$\Phi^{02}$ does not depend on the splicing choices on homology
([[def-morse-homology-of-a-morse-smale-pair]]).

## Facts & Assumptions

**Given:** The Axiom of Choice, the three Morse--Smale metric pairs, and the two regular continuation data.

[F1] Regular data can be obtained by arbitrarily small function-and-metric perturbations supported in their interior, with fixed ends; regularity is transverse finite-window endpoint matching ([[def-regular-continuation-datum-between-morse-smale-pairs]]).

[F2] Two fixed continuation windows separated by a long autonomous plateau have exact anchor-matching charts. At infinite plateau length the equations are the product of the two regular piece equations; finite charts retain $(T,u)$ ([[lem-metric-end-flow-matching-gives-local-broken-charts]]).

[F3] Pointed metric-gradient height paths have a uniform integrable square-root speed bound, and limits split at every actual critical hit; fixed continuation windows converge unshifted relative to their own origins ([[thm-continuation-trajectories-are-compact-up-to-breaking]]).

[F4] Endpoint sequences orient regular solution kernels; the mixed passage normal blocks have positive determinant ([[lem-orientation-lines-orient-continuation-moduli-spaces]]).

[F5] Continuation counts are chain maps; maps of any two regular data with the same ends induce the same homology map ([[thm-continuation-count-is-a-chain-map]], [[thm-homotopic-continuation-data-give-chain-homotopic-maps]], [[def-continuation-chain-map]], [[def-morse-homology-of-a-morse-smale-pair]]).

## Proof

**Proof technique:** direct, by two fixed-anchor matching and converse compactness.

1.1 Place the first continuation window at a left time origin and the second at a right time origin, separated by an autonomous plateau of the middle pair with length $T$. Outside the two windows keep the first negative and second positive autonomous ends. Translating each original window in this way gives a smooth spliced datum; the profiles are already constant near their window ends, so their joins are smooth. Retain the label $(T,u)$ in its solution family. In particular identical constant profiles and a constant curve at different $T$ remain different labelled family members. [F1, F2, given, construct]

2.1 Let $T_n\to\infty$ and let $u_n$ be rigid-index solutions of these data from a degree-$k$ critical point $p$ to a degree-$k$ critical point $q$. Extract the two windows after translating each to its own fixed origin, and the outside pointed tails, by [F3]. Apply the same end height extraction to the plateau, which is autonomous on a compact manifold; its total energy drop is bounded by the range of the middle Morse function. The limit has a first regular continuation piece, a finite middle critical chain, a second regular continuation piece, and possible outer autonomous breaks. Each continuation piece has nonnegative index difference by regularity, and each nonconstant autonomous piece has positive index drop by the actual metric transverse-disk argument of [F3]. Their telescoping sum is $\operatorname{ind}(p)-\operatorname{ind}(q)=0$. Hence every autonomous break is absent, both continuation pieces are rigid, and their intermediate critical point is the same. This proves that every long-plateau rigid sequence limits to a pair $(u^{01},u^{12})$ of the stated kind. The identical extraction for any endpoint pair of negative index difference would express that negative total as a sum of the two original regular continuation index differences and positive autonomous drops, a contradiction. Hence for each negative-index critical pair there is a plateau threshold beyond which no solution exists. There are finitely many critical pairs, so take their maximum threshold: every sufficiently long unperturbed plateau has no negative-index solutions at any pair. [F1, F3, step 1.1]

3.1 There are finitely many such pairs by rigid finiteness in [F3]. At each pair the two-anchor chart of [F2] has equations $a=A_{\mathrm{left}}(\alpha_T(a,b))$, $b=B_{\mathrm{right}}(\zeta_T(a,b))$ on open boundary-data balls, with identity unknown derivative at infinite length. It gives precisely one nearby rigid solution for every sufficiently large $T$, and its finite normal derivative is invertible, so that solution is regular. The inverse coverage in [F2] and extraction in step 2.1 show that these finitely many charts exhaust all rigid solutions for all large $T$: otherwise a sequence outside them would converge to one of their pairs and then be covered. Their neighbourhoods may be chosen disjoint in the broken-pair coordinates. Thus the gluing is a bijection. In the ordered endpoint determinant sequence, the first piece compares the input ray at $p$ with the intermediate unstable-normal ray with sign $\tau(u^{01})$; the second compares that same intermediate ray with the target ray with sign $\tau(u^{12})$. The intermediate rays cancel in their ordered composition. The passage block is positive by [F4], and the finite matching normal matrix has determinant sign that of its identity limit. Therefore the glued rigid sign is exactly $\tau(u^{01})\tau(u^{12})$. Summing proves the chain-level equality of the rigid counts for the unperturbed long plateau. [F2, F3, F4, step 2.1, algebra]

4.1 At a fixed sufficiently large $T$, the unperturbed datum need not be regular at nonzero index differences. Apply [F1] to make an arbitrarily small generic interior perturbation that is regular at all pairs. The finitely many rigid-index solutions in step 3.1 already have invertible endpoint normal derivatives, so the finite implicit-function theorem continues each uniquely, preserving its sign. No additional rigid solution can appear away from these neighbourhoods for perturbations tending to zero: uniform pointed-tail and window extraction in [F3] would limit such a sequence to a rigid solution of the unperturbed datum. An outer autonomous break would make the unperturbed middle have negative index difference, forbidden by the uniform long-plateau exclusion in step 2.1. Thus no outer break occurs; the limit is one of the already regular rigid solutions of step 3.1 and lies in its same local chart, a contradiction. Thus a sufficiently small regular perturbation preserves the entire rigid count, and its chain map is $\Phi^{21}\Phi^{10}$. [F1, F3, F5, step 2.1, step 3.1, construct]

5.1 By [F5] this equality descends to homology. Every other regular splicing with the same fixed end pairs has the same homology map by the augmented chain-homotopy theorem of [F5], independently of plateau length and small perturbation. This proves $[\Phi^{20}]=[\Phi^{21}][\Phi^{10}]$ and the asserted independence of the splicing choices. [F5, step 4.1] ∎
