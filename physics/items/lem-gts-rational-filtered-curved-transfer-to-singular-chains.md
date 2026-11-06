---
id: lem-gts-rational-filtered-curved-transfer-to-singular-chains
kind: lemma
title: Rational filtered curved transfer to all continuous singular chains
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- def-axiom-of-choice
- lem-gts-novikov-completion-is-filtered-ring
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-gts-novikov-completion-is-filtered-ring: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Fukaya, Oh, Ohta, and Ono, Lagrangian Floer Theory on Compact Toric Manifolds I
    url: https://arxiv.org/pdf/0802.1703v3
    locator: Section 3, printed pp.15–20, source framework/interface only; the article calls this a summary. The attached proof is reconstructed locally from its explicitly named mathematical suppliers; no reading of the complete trilogy is claimed.
dependency_level: 2
---

## Statement

Let $A$ be a finite-dimensional rational chain complex with a filtered curved A-infinity structure on its nonnegative Novikov completion, in degree-one suspension convention, with $m_{1,0}=d_A$, $m_{0,0}=0$ and a locally finite additive nonnegative energy monoid whose positive elements are at least $h>0$. There is a rational finite-tree transfer to $H(A,d_A)$, minimal at zero energy and retaining positive-energy curvature. For ANY rational chain complex $S$ with an identified homology $H(S)=H(A)$, there is an explicitly constructed filtered curved model on its Novikov completion with $M_{1,0}=d_S$ exactly and a filtered curved A-infinity comparison to $A$. This includes ALL continuous singular chains $S^q=C_{n-q}(L;\mathbb Q)$. The structure coderivation acts on the algebraic direct-sum bar coalgebra. Auxiliary curved comparison series with nonzero zero-input component are explicitly interpreted only componentwise at energy cutoffs or in its energy completion.

## Facts & Assumptions

**Given:** Full AC and exactly the data and hypotheses of the Statement.

[F1] [[lem-gts-novikov-completion-is-filtered-ring]] supplies the nonnegative real-exponent completion and its separated coefficient filtration. The locally finite geometric energy monoid and the input A-infinity identities are hypotheses, not consequences of that ring lemma.

[F2] [[def-axiom-of-choice]] permits rational degreewise Hamel splittings, including the full infinite-dimensional continuous singular-chain complex. The splitting, finite-tree convergence, identity and reverse extension are proved below; neither de Rham descent nor smoothness of continuous simplices is assumed.

## Proof

**Proof technique:** direct, using the explicit local constructions below.

1.1 For any rational chain complex V choose, degreewise and using AC, decompositions $Z(V)=B(V)⊕H_{V}$ and $V=Z(V)⊕W_{V}$. The differential is an isomorphism $W_{V}→B(V)$. This works for infinite-dimensional vector spaces and for a parity complex; in the singular application keep the integer chain-degree decomposition first and then pass to parity. Define i:H(V)→V by the representatives $H_{V}$, p:V→H(V) by projection, and $h:B(V)→W_{V}$ by the inverse differential, zero on $H_{V}⊕W_{V}$. Then $pi=1,   dh+hd=1-ip,   hi=ph=h^2=0.$ Every map is Q-linear. After Novikov extension all preserve energy and are continuous. Their values on an individual rational vector are finite linear combinations, so no hidden summation over a Hamel basis enters. [F1, F2, given, construct, algebra]

2.1 On a tensor word define $I=i^{\otimes n}$, $P=p^{\otimes n}$, and the tensor homotopy $H_n=\sum _{j=1}^n (ip)^\otimes (j-1) \otimes  h \otimes  1^\otimes (n-j),$ with the Koszul sign for moving h across the preceding suspended inputs. The identity $dH_{n}+H_{n}d=1−IP$ telescopes: its j-th contribution replaces the j-th identity by 1−ip, while all earlier factors already equal ip. Include the length-zero word with $I=P=1,H=0$. The side identities HI=PH=H²=0 follow from the displayed one-factor identities and cancellation of terms with the two h positions interchanged. [F1, F2, given, construct, algebra, step 1.1]

3.1 Remove d from the given bar coderivation and call the remainder δ. The transferred operation on H is the sum over finite planar rooted trees: put i on every input leaf, p at the root, $m_{k,E}$ at each vertex, and −h on every internal edge, with the Koszul tensor signs; omit the single d vertex. A zero-input vertex is permitted only at positive energy. The total energy is the sum of the vertex energies. A one-vertex tree gives p $m_{k}$ $i^{\otimes k}$. These formulas also define the A∞ comparison maps by replacing the root p with −h or with i followed by the correction trees, equivalently expanding the tensor perturbation series with H from 2.1. [F1, F2, given, construct, algebra, step 2.1]

4.1 These are actual finite sums at fixed arity n and energy cutoff E0. At most floor(E0/h) vertices have positive energy, and G has finitely many choices below E0. Let v0 be the number of zero-input vertices; then v0≤floor(E0/h). After omitting zero-energy unary vertices, all remaining zero-energy vertices have arity at least two. The rooted-tree identity Σ_v(arity(v)−1)=n−1 gives at most n+v0−1 such branching vertices, plus a bound on positive-energy unary vertices from E0/h. Thus the number of vertices is bounded, and there are finitely many planar tree types and vertex labels. At fixed n, the output tensor length of the tensor series is also bounded by n+v0. The STRUCTURE OPERATIONS are consequently well defined arity by arity on the completed coefficient module; their coderivation sends an input word of length n to lengths at most n+1, and therefore preserves the declared algebraic direct-sum bar coalgebra. For the AUXILIARY CURVED COMPARISON MAPS, nonzero comparison component F0 may produce arbitrarily long outputs at increasing energies. Their bar series is interpreted explicitly in the ENERGY COMPLETION of the direct-sum bar coalgebra, or equivalently componentwise at each arity/energy cutoff. This auxiliary convention does not replace the source algebraic bar coalgebra or claim its uncompleted space contains those comparison series. [F1, F2, given, construct, algebra, step 3.1]

5.1 Prove the identities by differentiating each tree, not merely invoking a transfer theorem. On every internal edge substitute dh+hd=1−ip. The identity term contracts that edge and replaces the adjacent two vertex operations by their nested insertion; grouping all contractions at the same resulting vertex gives exactly the original m identities, hence zero. The −ip term cuts that edge into two transferred rooted trees. Terms hitting external i or p vanish since they are chain maps to the zero differential on H. Boundary d terms are absent on H. Thus the surviving sum is precisely every nested transferred insertion, including cuts above or below a positive-energy zero-input vertex, with its Koszul sign. Its sum is zero. At each cutoff this is an equality of FINITE sums by 4.1, so regrouping is legitimate. The analogous expansion with an open root or one marked comparison edge proves the comparison-map equation. The side relations in 2.1 cancel adjacent h/i/p terms, making its leading comparison p or i. This proves the full curved A∞ structure and comparison, not only its uncurved restriction. [F1, F2, given, construct, algebra, step 4.1]

6.1 Every tree contributing to the transferred m0 has a positive-energy zero-input vertex. Hence m0 has valuation at least h. The transferred $m_{1,0}$ is zero, since a tree of zero energy with one leaf cannot contain a branching or zero-input vertex. All maps preserve filtration. Completeness and separatedness of Λ pass each finite-cutoff identity to the complete coefficient module. No assertion m0=0 follows. [F1, F2, given, construct, algebra, step 5.1]

7.1 Apply the rational splitting 1.1 to S, with representatives $i_{S}:H→S$ and projection $p_{S}$. Write its differential as $d_{S}$. Define on S[1] $M_0=i_S m^H_0,$ $M_1=d_S+i_S m^H_1 p_S,$ $M_k=i_S m^H_k p_S^\otimes k  (k\ge 2).$ Here suspension signs are inherited consistently in all factors; $m^{H}_{1,0}=0$. Consequently $M_{1,0}=d_{S}$ exactly. The whole acyclic summand B(S)⊕W(S) has only its differential; every operation of arity different from one vanishes if any input is in that summand. This is an explicit reverse extension, so a reverse perturbation theorem is not assumed. [F1, F2, given, construct, algebra, step 6.1]

8.1 Check every identity. By multilinearity it suffices to use inputs in $H_{S}$ or the acyclic summand. With only $H_{S}$ inputs, the nested products equal $i_{S}$ times the H identity because $p_{S}$ $i_{S}=1$ and $d_{S}$ $i_{S}=p_{S}$ $d_{S}=0$. If an input lies in the acyclic summand, any higher product involving it vanishes, and differential replacement stays in the same summand. Every nested term is therefore zero except the square $d_{S}²$ on the length-one acyclic word, which is also zero. This includes all curvature terms, because an inner M0 lies in $H_{S}$ but does not remove the original acyclic input. The length-zero identity is just the H identity lifted by $i_{S}$. This proves all curved identities on S, with exactly its given differential and no assumption that its generating continuous simplices are smooth. [F1, F2, given, construct, algebra, step 7.1]

9.1 The inclusion $i_{S}$ and projection $p_{S}$ are strict filtered A∞ morphisms to/from this extension (the acyclic summand has no non-differential operation). Their linear parts are quasi-isomorphisms and $p_{S}$ $i_{S}=1$; the rational $h_{S}$ contracts the complementary differential. Compose these explicit comparisons with 5.1 to obtain a filtered curved A∞ comparison between the genuine finite geometric model and this full continuous-chain model. The resulting operations on S depend on the chosen rational splittings and chain-level comparison. They are NOT claimed to be literal unperturbed fiber products with an arbitrary continuous simplex. A Definition describing this transferred virtual procedure must state that comparison explicitly; otherwise one would have proved existence of an equivalent model and silently changed the specified chain construction. [F1, F2, given, construct, algebra, step 8.1]

10.1 If a singular r-chain has unshifted cohomological degree $q=n−r$, suspension lowers it by one. For homogeneous unshifted inputs of degrees $q_{j}$, moving an inserted degree-one suspended operation past preceding inputs gives exponent $\sum _{j<i}(q_{j}−1)$, equivalently $\sum _{j<i}q_{j}+i−1$ modulo two. Thus the source insertion formula written in unshifted degrees and the bar formula in shifted degrees agree. The raw chain dimension r does not replace q. This is the previously prepared necessary grading correction. [F1, F2, given, construct, algebra, step 9.1] ∎

## Remarks

This algebraic result is conditional on a genuine rational geometric A-infinity model. It does not build the analytic atlas or virtual chains.
