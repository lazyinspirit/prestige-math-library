---
id: "lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex"
kind: "lemma"
title: "Cellular attachments with finite boundary support form a CW complex"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-cell-attachment-by-a-characteristic-map","def-cw-complex-with-closure-finiteness-and-weak-topology","def-skeleta-cw-subcomplex-and-relative-cw-complex","thm-recursion","thm-heine-borel-rn","thm-compactness-agrees-with-metric-compactness","thm-compact-subset-of-a-hausdorff-space-is-closed"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, expanded Appendix A, Proposition A.2, pp.3–4; local choice-free
        separation construction
      url: https://pi.math.cornell.edu/~hatcher/AT/ATapp.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $A$ be a CW complex with supplied characteristic maps. Form $Z_0$ by adjoining a set of zero-cells to $A$. For $k\ge1$, form $Z_k$ by attaching a set of $k$-disks to $Z_{k-1}$, using supplied continuous maps $S^{k-1}\to Z_{k-1}^{k-1}$ whose images meet finitely many cells. Here the superscript denotes the cells of dimension at most $k-1$, including those of $A$. Give $Z=\bigcup_{k\ge0}Z_k$ the weak attachment topology: a subset is closed exactly when its inverse images in $A$ and in every newly attached characteristic disk are closed.

Then $Z$, with the old and new cells and their characteristic maps, is a CW complex. The natural inclusions of $A$ and every $Z_k$ are closed embeddings and identify them with subcomplexes. A compatible collection of continuous maps on $A$ and the new characteristic disks defines a continuous map from $Z$ into any space. These conclusions and the construction use no choice principle. The same conclusions hold for a finite number of stages.

## Facts & Assumptions

[F1] [[def-cell-attachment-by-a-characteristic-map]] defines the attachment quotient and its characteristic map.

[F2] [[def-cw-complex-with-closure-finiteness-and-weak-topology]] and [[def-skeleta-cw-subcomplex-and-relative-cw-complex]] specify the CW and subcomplex conditions.

[F3] [[thm-recursion]] constructs a sequence from a specified successor operation without choice.

[F4] [[thm-heine-borel-rn]], [[thm-compactness-agrees-with-metric-compactness]] and [[thm-compact-subset-of-a-hausdorff-space-is-closed]] give compact characteristic disks and closed compact subsets of a Hausdorff space.

## Proof

**Given:** All cell sets, characteristic disks and attaching maps in the statement, including their finite boundary-support property. No choice of these data is part of the conclusion.

1.1 Attachment identifies only boundary points with earlier points, so it does not identify distinct earlier points and is injective on every new disk interior. Consequently the old and new open cells partition the underlying set, and the boundary of a cell of dimension $r$ lands in the union of cells of dimension less than $r$. The topologies specified by successive attachment quotients and the final weak attachment test are exactly the topology final with respect to $A$ and all the new disk maps: a function out of the union is continuous precisely when its composites with those maps are continuous, by the inverse-image test for open sets. Since $A$ itself has its characteristic-disk weak topology, all old and new characteristic disks together test continuity and closed sets on $Z$. For an old closed cell, its characteristic map is quotient because it is a continuous compact-to-Hausdorff surjection, so replacing the old closed-cell tests by disk tests is legitimate. [F1, F2, F4, given]

2.1 The inclusion of every earlier stage is a closed embedding. For one attachment step, if $C$ is closed in the earlier space, its inverse image in a new disk is contained in the boundary sphere and is closed there by continuity of the attaching map, hence closed in the disk. Thus $C$ remains closed after the step; the earlier topology is exactly its subspace topology since its inclusion is continuous by the quotient construction and every earlier closed set remains closed. The same proof for each subsequent step and then the final disk test shows that every closed subset of $A$ or $Z_k$ remains closed in $Z$. Taking $C=A$ or $C=Z_k$ also proves their closedness. The identical observation applies to an initial segment with finitely many stages. [F1, step 1.1]

2.2 We construct a continuous real function separating any two distinct points $x,y\in Z$. First do this on the given CW complex $A$, imposing the specified values only at those of $x,y$ that belong to $A$. On its zero-cells set its value to $-1$ at $x$ if $x$ is such a cell, to $1$ at $y$ if it is such a cell, and to zero otherwise. Suppose values on all lower-dimensional cells have been specified, compatibly and continuously on each characteristic disk. On an old characteristic $r$-disk of $A$ with $r\ge1$, its boundary has a continuous prescribed function $b:S^{r-1}\to[-1,1]$. Indeed its attaching image meets finitely many lower-dimensional cells by closure finiteness in $A$; close this finite set downward in dimension. On each of these finitely many closed cells the already specified function is continuous, since the characteristic disk is a compact-to-Hausdorff quotient in the given space $A$. Finite closed pasting makes the function continuous on their union, and composition with the attaching map gives $b$. Define $h_0(u)=\|u\|b(u/\|u\|)$ for $u\ne0$ and $h_0(0)=0$. This is continuous at zero since $|h_0(u)|\le\|u\|$, and it extends $b$. [F2, F4, step 1.1]

3.1 If the open cell contains neither $x$ nor $y$, use $h_0$ on this disk. Otherwise their relevant interior preimages form a specified set $P$ of one or two distinct points. For each $a\in P$ put $c_a=-1$ for the preimage of $x$ and $c_a=1$ for that of $y$, and choose the explicitly defined radius $$\epsilon_a=\frac14\min\big(\{1-\|a\|\}\cup\{\|a-a'\|:a'\in P,\ a'\ne a\}\big)>0.$$ The closed balls of these radii are interior and pairwise disjoint. Set $\beta_a(u)=\max(0,1-\|u-a\|/\epsilon_a)$ and $$h(u)=\left(1-\sum_{a\in P}\beta_a(u)\right)h_0(u)+\sum_{a\in P}\beta_a(u)c_a.$$ At most one bump is nonzero, so this remains in $[-1,1]$, is continuous, agrees with $b$ on the boundary, and takes the required values at the marked points. All prescriptions are determined by the supplied disk coordinates and the two given points; no family of extensions has been selected. [step 2.2]

4.1 Apply steps 2.2 and 3.1 to all old cells in each dimension and use [F3] to recurse on dimension. This yields a continuous $h_A:A\to[-1,1]$ by the known weak topology of $A$. No Hausdorffness of the newly constructed space has been used: all compact quotient tests here took place inside the original CW complex $A$. On the added zero-cells prescribe the marked value if relevant and zero otherwise. At each attachment stage, the boundary function on every new disk is now continuous by composing its supplied attaching map with the continuous function on the previous stage. Extend it by the same radial formula and the same explicit interior bumps of steps 2.2 and 3.1. The quotient test makes the extension continuous on that stage. Apply [F3] to this specified stage rule; the final test in step 1.1 makes the resulting $h:Z\to[-1,1]$ continuous. It has $h(x)=-1$ and $h(y)=1$. Inverse images of disjoint real neighborhoods separate $x,y$, proving Hausdorffness of $Z$ and of every truncated construction. [F3, F4, step 1.1, step 2.2, step 3.1]

5.1 Each characteristic disk now maps compactly into a Hausdorff space, so its image is closed by [F4]. That image equals the closure of its open cell: it contains the cell and is closed, while continuity and density of the disk interior put the whole image in the cell closure. It is therefore a compact closed cell and its characteristic map is a closed quotient map. An old closed cell retains its old closure by step 2.1. A new one meets only its own open cell and the finitely many cells met by its attaching map. Hence closure finiteness holds. The diskwise closed-set test from step 1.1 is equivalent, via these quotient maps, to the closed-cell test (W). [F2, F4, step 1.1, step 2.1, step 4.1]

6.1 For completeness, the skeleta carry their required attachment topology. Suppose $C$ is a subset of the $d$-skeleton whose preimage in every characteristic disk of dimension at most $d$ is closed. By step 5.1 its intersection with each corresponding closed cell is closed there, hence closed in $Z$. In any other closed cell $Q$, only finitely many cells of dimension at most $d$ meet $Q$. The set $C\cap Q$ equals $Q$ intersected with the union of $C$ intersected with the closures of those finitely many cells. It is closed in $Q$. The full weak topology makes $C$ closed in $Z$. Taking $C$ equal to the skeleton shows that it is closed, and the same argument shows its subspace topology is final for its characteristic disks. Testing on the previous skeleton and the $d$-disks is consequently precisely the quotient test for attaching its $d$-cells. The zero-skeleton is discrete, since every subset satisfies the same test. Thus all the filtration and topology conditions in [F2] hold. [F1, F2, step 5.1]

7.1 Every old cell and every cell in an earlier stage has its whole closure in that stage, so step 2.1 identifies $A,Z_k$ with closed subcomplexes. The map-out assertion was proved directly in step 1.1 and places no separation condition on its target. Empty initial space, empty cell families, a single zero-cell, and zero stages all use the same quotient tests; zero-dimensional disks require no radial extension. The two-point separation construction only runs for distinct points, so singleton spaces are already Hausdorff. Every positive radius in step 3.1 is a minimum of a nonempty finite set of positive numbers, and bounded radial extension handles the origin. The only infinite procedure is the specified dimension recursion, not a selection of extensions. This proves the statements without choice. [F2, F3, step 1.1, step 2.1, step 3.1, step 4.1, step 6.1] ∎
