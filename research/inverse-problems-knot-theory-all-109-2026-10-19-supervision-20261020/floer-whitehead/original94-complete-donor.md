---
id: lem-knot-kt41-whitehead-double-values
kind: lemma
title: "The two-twisted positive Whitehead double has tau zero and s two"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-floer-filtration-and-tau
  - lem-tau-is-independent-of-heegaard-grid
  - def-rasmussen-s-invariant
  - def-lee-deformed-khovanov-complex
  - alg-khovanov-chain-complex-from-diagram
  - def-grid-diagram-for-an-oriented-knot
  - alg-grid-knot-floer-complex
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-smooth-and-topological-slice-genus
  - lem-smooth-and-topological-slice-genus-minima-exist
  - lem-lee-cobordism-filtration-genus-bound
  - thm-rasmussen-s-bounds-smooth-four-ball-genus
  - def-countable-choice
  - lem-two-twisted-positive-whitehead-trefoil-double-has-s-two
  - lem-explicit-two-twisted-whitehead-double-has-sixteen-crossing-code
  - lem-positive-whitehead-clasp-band-gives-genus-one-surface
  - lem-lee-filtered-spectral-sequence-and-two-orientation-classes
  - lem-khovanov-cube-differential-squares-to-zero
  - lem-knot-floer-duality-and-filtration-swap
dependency_level: 11
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC_omega is inherited from the invariant and smooth-genus definitions and the finite diagram choices. No full Axiom of Choice is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Matthew Hedden and Philip Ording, The Ozsvath-Szabo and Rasmussen concordance invariants are not equal"
      url: "https://arxiv.org/pdf/math/0512348v1"
      locator: "Theorem 1.1 and §§2.1–2.2, printed pp.2–10; the two-twisted positive Whitehead double, Lee filtration and the 25-generator knot Floer computation"
    - title: "Jacob Rasmussen, Khovanov homology and the slice genus"
      url: "https://arxiv.org/pdf/math/0402131v1"
      locator: "§§3–4, printed pp.6–12; the s invariant and the cobordism filtration bound"
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance"
      url: "https://arxiv.org/pdf/1512.00383v3"
      locator: "§§3.1 and 5; tau and the comparison with Rasmussen's invariant"
---

## Statement

Assume the Axiom of Countable Choice. Let $D_+(T_{2,3},2)$ be the positive-clasped Whitehead double of the right-handed trefoil with two full twists in the clasp, using the twist convention of Hedden and Ording. The normalized knot Floer threshold and Rasmussen invariant satisfy
$$\tau(D_+(T_{2,3},2))=0,\qquad s(D_+(T_{2,3},2))=2.$$

## Statement references

[[def-knot-floer-filtration-and-tau|The normalized tau threshold]]

[[def-rasmussen-s-invariant|Rasmussen's s invariant and filtration convention]]

[Hedden and Ording, *The Ozsvath-Szabo and Rasmussen concordance invariants are not equal*, Theorem 1.1 and §§2.1–2.2](https://arxiv.org/pdf/math/0512348v1)

[Rasmussen, *Khovanov homology and the slice genus*, §§3–4](https://arxiv.org/pdf/math/0402131v1)

[Hom, *A survey on Heegaard Floer homology and concordance*, §§3.1 and 5](https://arxiv.org/pdf/1512.00383v3)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the specified positive-clasped two-twisted Whitehead double, and the source's twist convention.

[A1] [[def-countable-choice]] is the axiom branch used by the knot invariant, the finite diagrams, and the smooth four-ball genus.

[F1] [[def-knot-floer-filtration-and-tau]] defines tau by the first Alexander filtration level mapping nontrivially to total hat homology.

[F2] [[def-rasmussen-s-invariant]] defines $s$ from the filtration levels of the two Lee homology generators.

[L1] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] identifies the actual full grid rectangle complex with the analytic knot Floer complex, preserving the normalized Seifert Alexander and Maslov gradings and all positive marked degrees. Its all-variable-zero specialization is the full hat complex tensored with the stated bigraded basepoint factors.

[L2] [[thm-rasmussen-s-bounds-smooth-four-ball-genus]] states the smooth genus bound used in the source to choose the value $s=2$ from the Khovanov calculation's alternatives, for actual embedded smooth surfaces; the bound alone does not compute the finite Khovanov groups, whose calculation is now supplied by [F3].

[L3] [[lem-lee-cobordism-filtration-genus-bound]] is the exact Lee-cobordism input required by [L2]; its smooth surface is required to be properly embedded in $S^3\times[0,1]$ with product collars.

[F3] [[lem-two-twisted-positive-whitehead-trefoil-double-has-s-two]] proves $s(D_+(T_{2,3},2))=2$ from the admitted code, its exact finite Khovanov matrices, the Lee spectral sequence and the actual embedded genus-one bound.

[F4] [[lem-knot-floer-duality-and-filtration-swap]] supplies the normalized Maslov-zero same-oriented-knot conjugation with both filtrations exchanged, its inverse and homotopies, and the normalized full reverse-mirror duality. Its finite hat dual has filtration given by the annihilator of the complementary filtration; the total three-sphere hat class has Maslov degree zero.

## Proof

**Given:** Countable Choice and the positive-clasped double with the two-full-twist convention in the Statement. All grid differentials below retain positive $X$ multiplicity.

1.1 Use the admitted cable/clasp diagram of [[lem-explicit-two-twisted-whitehead-double-has-sixteen-crossing-code]]. Its four-strand cable word is $\sigma_1^{-2}(\sigma_2\sigma_1\sigma_3\sigma_2)^3$, with the separate two-crossing clasp and the admitted wiring. The correction to blackboard framing is $-1$ full twist; the trefoil's blackboard framing is $+3$, giving exactly two full twists relative to the zero longitude. Here is a finite grid admission for this same diagram. Draw its sixteen crossing disks and joining orthogonal arrows, scale by $100$, and rotate the drawing by a quarter turn. At a horizontal overcrossing replace its overarc by the ordered vertices $(-10,0),(2,0),(2,4),(10,4),(10,0)$ and its underarc by $(0,-10),(4,-10),(4,2),(0,2),(0,10)$, reversing either order to retain its directed strand. The sole crossing is now $(2,2)$ with the same signed boundary ports. The six required replacements have disjoint supports. Delete straight subdivisions, separate coincident levels by perturbations smaller than $1/100$, and rank the levels. This gives a $33$-grid with exactly the sixteen original signed crossings. Its saved $986$ exchanges, cyclic cuts and three-corner destabilizations give the following $12$-grid, with zero-based rows: $$O=(4,9,6,1,2,11,0,8,5,3,7,10),\qquad X=(8,2,0,7,10,4,5,3,1,9,11,6).$$ Each exchange has nonalternating endpoint intervals or the permitted shared endpoint; each destabilization has three alternating marks in adjacent rows and columns. These conditions verify the individual isotopies and the displayed endpoint. The directed word is the negative reverse of the input traversal: the negative is the orientation-preserving change of viewing direction $(x,y,h)\mapsto(x,-y,-h)$, while the reverse records the independently chosen component orientation. Thus the actual grid is for the reverse of the oriented knot in the Statement, with its positive clasp and two-full-twist framing retained. The complete integer arrows and finite move list are recorded with the computation data below; neither a knot-table name nor a Floer rank identifies this knot. [given, construct, algebra]

1.2 The orientation junction preserves the normalized filtered invariant without an ambient invertibility assumption. For a doubly-pointed diagram of an oriented knot $J$, swapping only $w,z$ presents $J^r$. The actual disks are unchanged and their two marked degrees exchange, so $I:[x,i,j]\mapsto[x,j,i]$ is a Laurent-linear swap-filtered chain isomorphism to that diagram. The carried zero-Seifert cap gives $A'(x)=-A(x)$. The relative disk index then gives $M'(x)=M(x)-2A(x)+c$ for one integer $c$, so $I$ has constant full Maslov degree $c$. Compose it with the normalized same-oriented-knot conjugation of [F4], whose Maslov degree is zero and which swaps the two filtrations, including its inverse and homotopies. The composite is an ordinary bifiltered equivalence to $J^r$ of degree $c$. Its vertical hat quotient is an isomorphism between the two total three-sphere hat groups, each concentrated in normalized Maslov degree zero; hence $c=0$. This proves equality of the normalized inclusion thresholds for $J,J^r$. It also identifies their normalized bigraded knot Floer homologies. Apply this to the grid in step 1.1. Reflecting its columns, $O_r\mapsto11-O_r$ and $X_r\mapsto11-X_r$, gives a grid for its mirror: $(x,y,h)\mapsto(-x,y,h)$ reverses ambient orientation and keeps vertical strands over horizontal strands. No further knot-recognition premise is needed for this second grid. [F1, F4, step 1.1, construct, algebra]

2.1 Compute the full tilde differential of each of these two explicit grids. For a permutation state $p$, use $M_O(p)=I(p,p)-I(p,O)-I(O,p)+I(O,O)+1$ and $2A(p)=M_O(p)-M_X(p)-11$, with marks at half-integer cell centers and $I$ counting pairs strictly increasing in both coordinates. In the quotient $Q=C/F_0C$ retain exactly the states with $A>0$. Only Maslov degrees $-1,0,1$ enter $H_0(Q)$; discarding the outgoing differential from degree $-1$ does not change that group. The inventory is exhaustive by the following finite assignment recurrence. For used columns $S$ in the first $r=|S|$ rows, choosing $c\notin S$ increments the state-state term by $|\{b\in S:b<c\}|$. Add $-\#\{k\ge r:O_k\ge c\}-\#\{k<r:O_k<c\}$ to obtain the Maslov increment; the Alexander increment is the corresponding $X$ expression minus its $O$ expression. Accumulating the resulting two-variable polynomial over the $4096$ column subsets counts every permutation exactly once. For every retained state and ordered pair of distinct rows, take its southwest/northeast rectangle, reject a rectangle containing an interior state point or $O$, and retain every other rectangle, including those containing $X$. Its output transposes the two chosen columns; discard that output only when its Alexander value is at most zero. Summing modulo two gives the actual quotient matrix. The first grid has $45\,824$ retained states, $159\,685$ rectangle orbits, including $24\,181$ with positive $X$ multiplicity, and $158\,523$ nonzero matrix entries. The reflected grid has $6080$ retained states and $11\,474$ rectangle orbits and nonzero entries. Every term has Maslov drop one and Alexander drop exactly its $X$ multiplicity; actual matrix multiplication gives $d^2=0$ in both quotients. These are the literal rectangle counts of [L1], rather than a formal-domain enumeration. [L1, step 1.1, step 1.2, construct, algebra]

2.2 Exact column elimination over $\mathbb F_2$ gives $$\begin{array}{c|rrrrr}&\dim Q_1&\dim Q_0&\dim Q_{-1}&\operatorname{rank}d_1&\operatorname{rank}d_0\\\hline G&12347&17919&15558&8384&9535\\G^{\mathrm{mirror}}&4385&1463&232&1243&220.\end{array}$$ To specify the finite rank operation, encode a column by its row bits; repeatedly cancel its highest nonzero row with the previously retained pivot column at that row, or retain it as a new pivot if no such column exists. The counts of retained pivots are the displayed ranks. The saved complete columns and pivot-reduction traces give these computations directly. A separate exact verification used the complete joint assignment polynomial, checked every state and both normalized grid gradings, reconstructed every retained rectangle, checked $d^2$, and recomputed both ranks. Thus $$\dim H_0(Q_G)=17919-8384-9535=0,\qquad\dim H_0(Q_{G^{\mathrm{mirror}}})=1463-1243-220=0.$$ This uses the full filtered quotients, including the positive-$X$ terms in the first matrix. [L1, step 2.1, algebra]

2.3 Apply [L1]'s absolutely normalized filtered comparison and specialize all marking variables to zero. The full tilde complex is filtered chain homotopy equivalent to the doubly-pointed full hat complex tensored with $V^{\otimes11}$, where the two degrees of $V$ are $(M,A)=(0,0),(-1,-1)$. Its total Maslov-zero homology is consequently one-dimensional, represented by the normalized three-sphere generator tensored with the sole degree-zero vector of $V^{\otimes11}$. Its filtration threshold is exactly $\tau(J)$: inclusion into that tensor factor and projection onto it are filtered degree-zero chain maps, so they give both threshold inequalities. The exact sequence $0\to F_0C\to C\to Q\to0$ and step 2.2 show that this total Maslov-zero class comes from $H_0(F_0C)$ for each grid. Hence $\tau(J)\le0$ and $\tau(mJ)\le0$, for the actual knot $J$ of step 1.1 and its mirror. [F1, L1, step 1.2, step 2.2, algebra]

3.1 For completeness derive the required threshold sign from [F4]'s normalized reverse-mirror duality. Let $D$ be the finite normalized doubly-pointed full hat complex and write $t$ for its inclusion threshold. Its dual filtration is $F_sD^\vee=\{\lambda:\lambda(F_{-s-1}D)=0\}$. Choose a total generator cycle $z\in F_tD_0$. Then $z\notin\operatorname{im}(d:D_1\to D_0)+F_{t-1}D_0$: any such expression would give a homologous cycle at level $t-1$. Finite-dimensional linear algebra therefore gives a functional $\lambda$ vanishing on that sum and taking value one on $z$. It is a nonzero dual homology class at filtration $-t$. Conversely every functional at level $s<-t$ vanishes on $F_tD$, hence on $z$, and cannot represent the nonzero dual class. Thus the dual threshold is exactly $-t$. The absolute normalization and full duality in [F4], together with the orientation junction of step 1.2, give $\tau(mJ)=-\tau(J)$. Combining the two actual quotient inequalities of step 2.3 forces $\tau(J)=0$. By step 1.2 this is the normalized tau value of the actual two-twisted positive Whitehead trefoil in the Statement. [F1, F4, step 1.2, step 2.3, construct, algebra]

3.2 The admitted diagram and framing in step 1.1 are also those of [F3]. That accepted finite Lee computation gives $s(D_+(T_{2,3},2))=2$. Together with the independently established normalized value in step 3.1 this proves both numerical assertions of the Statement. [A1, F2, F3, step 1.1, step 3.1, algebra] ∎

## Computation data

The complete new geometric certificate is [the sixteen-crossing-to-twelve-grid admission](../research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/floer-weighted/d2-grid/admission-proof.md), with the integer arrows and all $986$ moves in that directory. The exact quotient inputs, state inventories, full positive-$X$ matrix columns and pivot traces are in [the direct D2 computation](../research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/floer-whitehead/d2-grid-count/). The count is implemented by `count-high-quotient.cpp`; the separate complete verification is `verify-quotients.py`, with its successful output in `quotient-verification.json`. The formulas, finite enumeration and linear-algebra operations are specified in the proof; these files retain their full finite execution data.
