---
id: "lem-carleson-forest-summation-gives-restricted-weak-ltwo"
kind: "lemma"
title: "Carleson forest summation gives restricted weak ltwo"
deps: ["lem-carleson-density-selection", "lem-carleson-size-selection", "lem-carleson-single-tree-estimate", "def-axiom-of-choice", "def-density-size-and-tree-count-for-carleson-tiles"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: 'Lacey, Carleson’s Theorem: Proof, Complements, Variations'
      url: https://arxiv.org/pdf/math/0307008
      locator: Section 3, equations 3.13–3.16
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume AC. For every finite linearised tile family, $|\langle C_{S,N}f,g\rangle|\le C\|f\|_2 m(E)^{1/2}$ for $|g|\le\mathbf1_E$, where E is measurable of finite measure. Constants do not depend on S or N.

## Facts & Assumptions

[F1] A finite positive-density family can be partitioned into trees of total top length at most $C\delta^{-1}m(E)$ and a remainder of density at most $\delta/2$ [[lem-carleson-density-selection]].

[F2] From a finite family of positive size $\sigma$, one can choose finitely many trees of total top length at most $C\sigma^{-2}\|f\|_2^2$ such that deleting their union leaves a remainder of size at most $\sigma/2$ [[lem-carleson-size-selection]].

[F3] A finite tree's absolute bilinear contribution is at most its density times its size times $C|I_T|$ [[lem-carleson-single-tree-estimate]].

[F4] Density is at most $D=2/19$, size is finite and vanishes exactly when all packet coefficients vanish, and both decrease on subcollections. Forest count sums designated top lengths with multiplicity [[def-density-size-and-tree-count-for-carleson-tiles]].

[F5] Assume AC [[def-axiom-of-choice]], inherited from the three selection/estimate suppliers.

## Proof

**Given:** A finite S, measurable N, $f\in L^2$, and $|g|\le\mathbf1_E$ with $e=m(E)<\infty$.

1.1 If S is empty or its size is zero, all summands vanish by F4. If $\|f\|_2=0$, all coefficients are zero. If e=0, g is zero almost everywhere and the testing integrals vanish. Hence assume $F=\|f\|_2>0$, e>0 and positive initial size. Put $A=F/\sqrt e$, $s_n=A\,2^{-n}$ and $d_n=D\min(1,4^{-n})$ for integers n. [F4, given]

2.1 Choose an integer $n_0\le0$ with $s_{n_0}\ge\operatorname{size}_f(S)$, possible because the size is finite and $2^{-n}\to\infty$ as $n\to-\infty$. Set $R_{n_0}=S$. We construct decreasing finite remainders $R_n$ with size at most $s_n$ and density at most $d_n$. The initial density bound holds since $d_{n_0}=D$. At step n, the tiles removed from $R_n$ will be equipped with a forest $\mathcal F_n$ of total top length at most $C_0e4^n$, for one constant independent of n and S. [F4, step 1.1]

3.1 First reduce the density of $R_n$ to $d_{n+1}$. If its density is already at most that threshold, do nothing. Otherwise apply F1 using its actual density delta. Each such application removes trees of count at most $Ce/\delta\le Ce/d_{n+1}$ and halves the remaining density. For n<0 no application is needed, since $d_n=d_{n+1}=D$. For n>=0, $d_n=4d_{n+1}$, so at most two applications suffice, even when the first remaining density is zero. The removed trees all lie in $R_n$. For n>=0 their combined count is at most $2Ce/d_{n+1}=8CD^{-1}e4^n$. [F1, F4, step 2.1]

4.1 The remainder after step 3.1 still has size at most $s_n$. If its actual size sigma exceeds $s_{n+1}$, apply F2 once. Its output remainder has size at most $\sigma/2\le s_{n+1}$ and its selected trees have total top length at most $CF^2/\sigma^2\le CF^2/s_{n+1}^2=4Ce4^n$. Order those finitely many trees and replace the ith one by the tiles in it which occur in none of the earlier trees, retaining its designated top and discarding it if empty. Every resulting nonempty collection is still a tree, their union and hence the output remainder are unchanged, and their total top length cannot increase. Thus they form a forest in the required partition sense. Otherwise remove nothing. Density cannot increase in this step. Call the resulting remainder $R_{n+1}$ and combine this forest with all forests removed by the density selections into $\mathcal F_n$. Tile collections coming from different selections are disjoint because each selection operates on what remains. Their designated tops may overlap; the count bounds already include this multiplicity. This proves the induction and the promised bound with a fixed $C_0$. [F2, F4, step 1.1, step 2.1, step 3.1]

5.1 Only finitely many nonzero coefficient tiles can survive this process. More explicitly, for each such s in the original finite S the positive number $|\langle f,\phi_s\rangle|/\sqrt{|I_s|}$ is a lower bound for the size of any remainder containing s, by the singleton-tree case of F4. The minimum b of these finitely many positive numbers is positive. Choose $n_1>n_0$ with $s_{n_1}<b$. Then $R_{n_1}$ contains only zero-coefficient tiles and has zero testing contribution. Thus the finite forests $\mathcal F_n$ for $n_0\le n<n_1$ account for the whole testing form; no infinite decomposition, limiting selector or interchange of integrals is required. If no coefficient was nonzero, step 1.1 already handled the case. [F4, step 1.1, step 4.1]

5.2 Every tree in $\mathcal F_n$ is a subcollection of $R_n$, so its size and density are at most $s_n,d_n$. By F3, the triangle inequality over the finitely many trees, and the count bound, the magnitude of their combined testing contribution is at most $$Cs_nd_n\sum_{T\in\mathcal F_n}|I_T|\le CC_0D F\sqrt e\,\min(2^n,2^{-n}).$$ The equality of the powers follows from $2^{-n}4^n\min(1,4^{-n})=\min(2^n,2^{-n})$. This uses the tree estimate on each actual designated tree, rather than assuming the forest's tops are spatially disjoint. [F3, F4, step 1.1, step 4.1]

6.1 Sum step 5.2 over $n_0\le n<n_1$. The sum is at most the two convergent geometric tails $\sum_{n<0}2^n+\sum_{n\ge0}2^{-n}=1+2=3$; finite geometric identities give the same uniform upper bound without invoking an infinite exchange. Step 5.1 then proves the displayed inequality after absorbing $3CC_0D$ into the constant. All choices concern finitely many stopping stages for this S. The AC assumption is inherited from the three analytic suppliers, not a new unrestricted choice of infinite forests. [F5, step 5.1, step 5.2] ∎

## Scratch

The joint stopping and summation proof and both formerly incomplete suppliers now have full local authored arguments. The size-selection and single-tree repairs await ordinary mathematical review and root decision reconciliation; this file does not itself claim those reviews or a source disposition. Other Carleson maximal-theorem prerequisites remain separate holds.
