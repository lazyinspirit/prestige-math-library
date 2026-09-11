# Finite CW subcomplex support: proposed choice-free published repair

Date: 2026-09-12. Status: isolated mathematical support package only. No published item, live author file, plan, receipt, runtime state or canonical ledger was changed. This document is not a publication repair, independent judgment, certification or instruction to advance the engine.

## Evidence and exact scope

The current author report is `research/phase-2-next-17-step3b-d.md`, particularly its “Batch6 first addition checkpoint” and following published concern. The proposed source argument is the complete current draft `items/lem-compact-cw-images-have-finite-cell-support-without-choice.md`, registered first on the existing AT12 A page in `research/phase-2-next-17-batch-6.pages.json`. Its registration and the author's reported local checks do not establish publication or independent approval.

This is an improved repair route for an existing finding, not a new defect classification. `research/phase-2-next-20-published-cw-compactness-choice-audit.md` already records the exact selection defect and five direct published impact candidates. The canonical ledger already has the target and compact-image consumer entries. A later serial reconciliation should amend those existing entries without duplicating them or claiming their repair is complete.

Raw file SHA-256 values read for this package:

| Item | Current status | SHA-256 |
|---|---|---|
| `lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells` | published | `d2072081e6c3b0d41e1c5271a8e55365599e809b2aaf65eeb596e8fe7d87c232` |
| `cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex` | published | `0fd0c729edbe12c96ebf447d9f53defcda352882f3c15a8093e69b5bfb2c56ad` |
| `lem-compact-cw-images-have-finite-cell-support-without-choice` | draft, current run | `254b202931001cfda94634cb43f5447a29cceda25faed0650b74379571563d40` |

The published target's Proof 1.1 constructs a countably infinite sequence of points in pairwise distinct occupied cells without declaring a choice principle. In ZF an arbitrary infinite set need not contain a countably infinite subset; assigning points to arbitrarily selected nonempty intersections needs justification too. This is a proof-support gap, not a proof that the theorem fails in ZF or requires AC.

The complete original proof and finite-subcomplex consequence in [Hatcher's expanded Appendix A, Proposition A.1, pp. 2–3](https://pi.math.cornell.edu/~hatcher/AT/ATapp.pdf) were read, together with its preceding characteristic-map discussion. Hatcher uses the infinite sequence argument. The canonical selection below comes from the new local draft and the inspected published compactness suppliers; it is not attributed to Hatcher as a choice analysis. Closure finiteness is a supplied axiom in this repository's CW definition. Do not circularly derive it from the compact-support result being repaired.

## Recommended repair architecture

Keep both published IDs and their statements. Replace the early compact-subspace lemma's proof directly with the argument below using existing published inputs. Retain its early home `cw-complexes-and-cellular-homology` (plan order 366.007). Do not make it depend on the later draft AT12 lemma: that would introduce an unnecessary later-page dependency and couple the published repair to uncompleted Phase 2 work. The draft provides the proposed proof construction, not a prerequisite that must be published first.

State in the Facts & Assumptions that the CW structure includes its given family of characteristic maps. This matches `def-cw-complex-with-closure-finiteness-and-weak-topology` and `def-cell-attachment-by-a-characteristic-map`: the structure is formed using attaching families and their quotient disk maps. Do not start from merely “each cell admits some characteristic map” and silently select a family of maps. The selected point is canonical relative to the given characteristic coordinates; no invariance under a change of coordinates is claimed or needed.

## Complete proposed replacement for the compact-subspace argument

Let $K\subseteq X$ be compact, and let $E_K$ be the set of open cells meeting $K$. The empty case is immediate. Since $X$ is Hausdorff, $K$ is closed in $X$.

1. For each positive-dimensional occupied cell $e$, use its supplied characteristic map $\chi_e:D^{d(e)}\to X$. For $r\in\mathbb N$, set
   \[
   B_{d,r}=\{v\in\mathbb R^d:\|v\|\le 1-1/(r+2)\}.
   \]
   These closed balls exhaust the open unit ball: if $\|v\|<1$, the Archimedean property gives $r$ with $1/(r+2)<1-\|v\|$. Since the disk interior maps onto $e$, some ball meets $\chi_e^{-1}(K)$. Define $r_e$ to be the least such natural number. No cell enumeration is used.

2. Set $T_e=B_{d(e),r_e}\cap\chi_e^{-1}(K)$. This is nonempty and closed in a compact Euclidean ball, hence compact. Define its lexicographically least point by successive coordinate minima: let $T^{(0)}=T_e$; for $j<d(e)$, define
   \[
   m_j=\min\{v_j:v\in T^{(j)}\},\qquad
   T^{(j+1)}=\{v\in T^{(j)}:v_j=m_j\}.
   \]
   A coordinate projection is continuous because $|v_j-w_j|\le\|v-w\|$. The extreme-value theorem gives the minimum value; its level set is nonempty, closed and compact. Every value and level set is unique. After the finite number $d(e)$ of steps the nonempty final set has all coordinates fixed, so it is a singleton $\{v_e\}$. No arbitrary minimizing point is selected at intermediate stages. Define $x_e=\chi_e(v_e)$. For an occupied zero-cell, define $x_e$ to be its sole point. Replacement applied to this uniquely specified rule gives the function $e\mapsto x_e$ on the entire set $E_K$, even when it is not well-orderable and cell dimensions are unbounded.

3. Put $S=\{x_e:e\in E_K\}\subseteq K$. Disjointness of open cells makes $e\mapsto x_e$ injective. For every $T\subseteq S$ and every closed cell $\overline a$, closure finiteness implies $T\cap\overline a$ is finite, with at most one point from each of finitely many cells. Finite subsets of a Hausdorff space are closed. Thus $T\cap\overline a$ is closed in $\overline a$, and the weak-topology axiom makes $T$ closed in $X$.

4. In particular $S$ is closed in compact $K$, hence compact. For each $s\in S$, the complement of $S\setminus\{s\}$ in $X$ cuts out the open singleton $\{s\}$ in $S$. Therefore $S$ is discrete. The explicitly specified family $\{\{s\}:s\in S\}$ is an open cover. A finite subcover implies $S$ is finite, and the bijection $E_K\to S$ implies $E_K$ is finite. No countably infinite subfamily is extracted.

Nonregular characteristic maps cause no difficulty: the selected preimages lie strictly inside the disks, where their maps identify the open cells. In dimension zero no Euclidean norm, empty maximum or coordinate minimization is invoked. Compactness throughout means open-cover compactness, not sequential compactness.

## Compact-image corollary and finite downward closure

For a continuous map $f:K\to X$, prove open-cover compactness of $L=f(K)$ directly. Given an open cover of $L$, pull it back using the original cover members as indices. Compactness of $K$ supplies finitely many indices whose corresponding members cover $L$. This avoids an inappropriate application of the metric-only item `thm-continuous-image-of-a-compact-space-is-compact` to an arbitrary CW target.

Apply the repaired compact-subspace lemma to obtain the finite set $F_0$ of occupied cells. Define
\[
F_{j+1}=F_j\cup\{b:\text{for some }a\in F_j,\ b\cap\chi_a(\partial D^{d(a)})\ne\varnothing\}.
\]
Each set is finite by closure finiteness and finite unions. If $F_0\ne\varnothing$, let $N=\max\{d(a):a\in F_0\}$. Each new boundary edge strictly decreases dimension, so after at most $N$ extensions all required cells are present and the next extension adds nothing. This is a deterministic recursion on finite sets, not a repeated selection of finite subcomplexes. Their union contains the closure of every included cell and hence is a finite CW subcomplex containing $L$. If $L=\varnothing$, take the empty subcomplex.

## Exact proposed dependency changes

For the published compact-subspace lemma, retain the current two CW dependencies and add the following five published suppliers:

| Dependency | Exact use | Current owner/order |
|---|---|---|
| `thm-compact-subset-of-a-hausdorff-space-is-closed` | Closedness of $K$ before pulling it back to each disk | `compactness`, 255 |
| `thm-closed-subspace-of-a-compact-space-is-compact` | Compact level sets and the closed selected-point space | `compactness`, 255 |
| `thm-heine-borel-rn` | Compactness of positive-dimensional inner closed balls | `compactness-in-metric-spaces`, 120 |
| `thm-compactness-agrees-with-metric-compactness` | Pass between the open-cover metric and topological readings | `compactness`, 255 |
| `thm-extreme-value-metric` | Attained coordinate minima on nonempty compact metric level sets | `compactness-in-metric-spaces`, 120 |

The retained dependencies are `def-cw-complex-with-closure-finiteness-and-weak-topology` and `prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition`. The proposed proof supplies the elementary coordinate estimate, least-natural-number prescription, finite-set closure argument and singleton-cover calculation explicitly. If these steps receive named citations during implementation, declare those exact additional IDs as well. No AC dependency belongs on this proof.

For the corollary, keep `lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells` and `def-skeleta-cw-subcomplex-and-relative-cw-complex`; add the direct CW-definition dependency for the stated closure-finiteness/attaching-map uses. Write the general image-cover argument and bounded finite closure recursion explicitly. Its statement needs no AC restriction.

## Existing consumer follow-ups and choice accounting

The five consumers in the earlier audit remain distinct review targets; this package does not certify their other arguments:

- `cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex`: proposed repair above.
- `lem-homology-of-an-infinite-cw-complex-is-the-colimit-of-skeletal-homology`: retain the repaired corollary for finite cycle and bounding-chain images; make the target skeleton for injectivity at least the original skeleton. No new AC cost comes from compact support.
- `thm-relative-homology-of-consecutive-cw-skeleta`: recheck the finite-wedge-support invocation against the repaired lemma; quotient/good-pair arguments require their own review and are not certified here.
- `lem-finite-dimensional-axiomatic-homology-has-finite-subcomplex-support`: its cycle/boundary support is already finite. Use the finite downward closure above directly, remove the unnecessary compact-image F3/dependency if no remaining proof use survives, and preserve its algebraic suppliers. This does not decide the axiom cost of those separate suppliers.
- `cex-the-hawaiian-earring-is-not-a-cw-complex-with-its-circle-cells`: its compactness contradiction can continue to use the repaired ZF lemma. Its geometric compactness justification is a separate local verification obligation.

ZF suffices for the proposed compactness repairs relative to the supplied CW data. Unique specification, least natural indices, finite induction, finite unions and an actual singleton-cover finite subcover do not require AC, countable choice or DC. Do not use the ZF-invalid general inference that every infinite set has a countably infinite subset. Do not replace the coordinate construction by an arbitrary choice of one point from each occupied cell.

The earlier alternative remains available in principle: explicitly assume full AC in the old proof, declare `def-axiom-of-choice`, use it to obtain the countable distinct-cell selection and representatives, then propagate that assumption to every consumer using that route. This package recommends the complete ZF replacement instead. It makes no claim about a minimal choice principle for other definitions of CW complex, and introduces no arbitrary cell-orientation or chart selection.

## Handoff and validation boundary

The target, corollary, proposed draft supplier, listed compactness suppliers, both CW definitions, characteristic-map definition/interior lemma, and five consumer texts were read. The displayed canonical construction was checked mathematically, including empty images, zero-cells, arbitrary cell sets, unbounded dimensions and nonregular attachments. This is a bounded support review; the entire transitive dependency graph was not independently certified.

When a repair is actually authorized and implemented, preserve published identities and claims, refresh exact dependencies/Facts & Assumptions and required verification honestly, run explicit-item content/render/precheck checks, and reconcile page prerequisites if new direct supplier owners require them. Update the existing canonical finding and consumer classifications only on evidence from that completed work. This package does none of those mutations and clears no defect or engine gate.
