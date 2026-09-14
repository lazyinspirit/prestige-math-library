---
id: lem-enflo-symmetry-averaging-and-block-assembly
kind: lemma
title: "Enflo's Walsh-block assembly"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-enflo-finite-support-localized-trace-system, lem-enflo-quantitative-trace-obstruction-to-the-approximation-property, lem-enflo-walsh-block-estimates, thm-hahn-banach-dominated-extension, thm-closed-subspaces-of-reflexive-spaces-are-reflexive]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Per Enflo, A counterexample to the approximation problem in Banach spaces"
      url: "https://projecteuclid.org/journals/acta-mathematica/volume-130/issue-none/A-counterexample-to-the-approximation-problem-in-Banach-spaces/10.1007/BF02392270.pdf"
      locator: "Construction after Lemma 5, Lemmas 6-7, parameter and incidence estimates, pp.313-317"
pipeline_run: phase-2-next-18
---

## Statement

Assume AC. There is a separable reflexive real Banach space $B$, a dense
linearly independent generator with property A, pairwise disjoint finite
subsets $M_m$ of that generator, and constants $b>1$, $K>0$ such that

$$|M_{m+1}|>|M_m|^b$$

and every bounded finite-expansion $T$ satisfies

$$\left|\widetilde{\operatorname{Tr}}(M_{m+1},T) -\widetilde{\operatorname{Tr}}(M_m,T)\right| \le\frac{K\|T\|}{\log|M_m|}.$$

Consequently the logarithmic finite-rank lower bound of Enflo's trace lemma
holds on $B$.

## Facts & Assumptions

[A1] AC holds ([[def-axiom-of-choice]]).

[L1] Enflo's fixed-generator trace criterion converts the two displayed block hypotheses into the logarithmic finite-rank lower bound ([[lem-enflo-quantitative-trace-obstruction-to-the-approximation-property]]).

[L2] The two adjacent Walsh layers satisfy the exact symmetry trace estimate with factor $2/n$ ([[lem-enflo-walsh-block-estimates]]).

[L3] Under AC, the real dominated Hahn--Banach theorem supplies Hahn--Banach;
under Hahn--Banach, a closed subspace of a reflexive Banach space is reflexive
([[thm-hahn-banach-dominated-extension]],
[[thm-closed-subspaces-of-reflexive-spaces-are-reflexive]]).

[L4] Property A and localized traces have their fixed-generator meanings ([[def-enflo-finite-support-localized-trace-system]]).

## Proof

**Proof technique:** direct.

**Given:** The objects and hypotheses in the Statement.

1.1 Choose real numbers $1<b<\alpha<\gamma$ with [given]
$\alpha<(2+\gamma)/(1+\gamma)$. Put

$$n_m=\lfloor\alpha^m\rfloor,\qquad t_m=\binom{2n_m}{n_m-1},\qquad k_m=\lfloor t_m^\gamma\rfloor.$$

After deleting finitely many initial indices, all are positive and strictly increasing. Let $K_m$ be the disjoint union of $k_m$ copies $K_{m,j}$ of $\mathbb Z_2^{2n_m}$, and let $B_1=(\bigoplus_m C(K_m))_2$. [explicit parameters]

2.1 The dual-coordinate argument identifies [given, step 1.1]
$B_1^*$ with $(\bigoplus_m C(K_m)^*)_2$: finite Hölder gives one inequality, and finite-dimensional compactness supplies norming vectors for each finite partial sum and hence the reverse. Applying the same argument to the bidual, and using finite-dimensional reflexivity of each $C(K_m)$, makes the canonical map onto. Thus $B_1$ is reflexive. It is separable because it is the completion of a countable union of finite-dimensional rational spans. [finite-dimensional duality, square-sum Hölder]

3.1 In $C(K_m)\oplus C(K_{m+1})$ choose a set $M_m$ of $k_mt_m$ vectors so [given, step 2.1]
that: (i) each vector has exactly one nonzero $K_{m,j}$ component, an element of $W^{n_m+1}$; (ii) its components in $K_{m+1,j}$ are zero or elements of $W^{n_{m+1}-1}$, and every such Walsh function occurs; and (iii) two distinct vectors never share the same nonzero component. Equivalently $M_m$ is partitioned into $M_{m,j}$ of size $t_m$ and is equipped with subsets $N_{m,j}\subseteq M_m$ of size $t_{m+1}$, with the $M_{m,j}$ pairwise disjoint and the $N_{m,j}$ linked to the next layer. No covering assertion is imposed: step 8.1 assigns $\sigma(e)=0$ to points outside their selected incidence region. [finite Walsh bases]

4.1 Require in addition the three incidence bounds [given, L4, A1, L3, step 3.1]

$$|N_{m,i}\cap N_{m,j}|\le \frac{2t_{m+1}}{n_{m+1}}\quad(i\ne j),$$

$$|N_{m,j}\cap M_{m,i}|\le\min\left\{\frac{t_{m+1}}{n_{m+1}},\frac{t_m}{n_m}\right\},$$

and, with $\sigma(e)=|\{j:e\in N_{m,j}\}|$,

$$\sum_{e\in M_m}\left|\frac1{k_mt_m} -\frac{\sigma(e)}{k_{m+1}t_{m+1}}\right|\le\frac1{n_{m+1}}.$$

These are Enflo's conditions 4--6. Let $B$ be the closed span in $B_1$ of $\bigcup_mM_m$. The unique lowest nonzero block proves independence. To check [L4]'s property A, fix a finite combination $x=\sum_e a_e e$, a participating generator $e_0$, and one component block $K_{r,i}$. If $e_0$ vanishes there, the componentwise estimate is trivial. Otherwise the nonzero restrictions of the participating generators are distinct Walsh characters: property (iii) handles characters from the same $M_m$, and the two possible adjacent layers have different degrees. Walsh orthogonality makes the normalized $L^2$ norm of $x|_{K_{r,i}}$ at least $|a_{e_0}|$, so its supremum norm is at least $|a_{e_0}|$ as well. Taking the maximum over $i$ for each $C(K_r)$ coordinate and then the Hilbertian sum over $r$ gives $\|x\|\ge |a_{e_0}|\|e_0\|$. Thus property A holds with the full generator norm, including both adjacent nonzero coordinates. Countably many generators give separability, and [A1] is used through [L3] to make the closed subspace $B$ reflexive. [A1, L3, L4, steps 2.1, 3.1]

5.1 For a finite-expansion $T$, condition 6 and property A give [given, L4, step 4.1]

$$\left|\widetilde{\operatorname{Tr}}(M_m,T) -\frac1{k_{m+1}}\sum_{j=1}^{k_{m+1}} \widetilde{\operatorname{Tr}}(N_{m,j},T)\right| \le\frac{\|T\|}{n_{m+1}}.$$

Indeed the left side is the weighted sum of the diagonal coefficients $a(e)$, each bounded by $\|T\|$ via property A, and condition 6 is exactly the total weight error. [L4, step 4.1]

6.1 Fix $j$ and put $E=[N_{m,j}\cup M_{m+1,j}]$. [given, L2, step 5.1]
Delete from each finite expansion of $Te$ the terms outside this generator set,
obtaining $T':E\to E$. The localized traces of $T$ and $T'$ on the two
displayed sets agree, and $T'x=Tx$ on $K_{m+1,j}$. Restriction to that block
identifies $E$ with the two Walsh layers in [L2]. Write

$$\lVert\!\lvert x\rvert\!\rVert=\max_{p\in K_{m+1,j}}|x(p)|.$$

The vector supplied by [L2] therefore satisfies

$$\left|\widetilde{\operatorname{Tr}}(N_{m,j},T)-\widetilde{\operatorname{Tr}}(M_{m+1,j},T)\right|\le \frac{2}{n_{m+1}}\frac{\lVert\!\lvert T'x\rvert\!\rVert}{\lVert\!\lvert x\rvert\!\rVert}.$$

Its values on every other $K_{m+1,i}$ have modulus at most
$|N_{m,i}\cap N_{m,j}|/t_{m+1}\le2/n_{m+1}$ by condition 4. Its values on
$K_{m,i}$ and $K_{m+2,i}$ have modulus at most $1/n_{m+1}$ by the two
parts of condition 5, while [L2] gives
$\lVert\!\lvert x\rvert\!\rVert\ge2/n_{m+1}$. Thus the middle block has
sup norm $\lVert\!\lvert x\rvert\!\rVert$, each adjacent outer block has
sup norm at most half of that, and all other blocks vanish. Since the ambient
sum is Hilbertian,
$\|x\|\le\sqrt{3/2}\,\lVert\!\lvert x\rvert\!\rVert<
2\lVert\!\lvert x\rvert\!\rVert$. Also
$\lVert\!\lvert T'x\rvert\!\rVert\le\|Tx\|\le\|T\|\|x\|$. Hence

$$|\widetilde{\operatorname{Tr}}(N_{m,j},T) -\widetilde{\operatorname{Tr}}(M_{m+1,j},T)| \le\frac{4\|T\|}{n_{m+1}}.$$

Averaging in $j$ and combining with step 5.1 yields

$$|\widetilde{\operatorname{Tr}}(M_{m+1},T) -\widetilde{\operatorname{Tr}}(M_m,T)| \le\frac{5\|T\|}{n_{m+1}}.$$

[L2, steps 3.1, 4.1, 5.1]

7.1 It remains to realize the incidences. Put [given, step 6.1]

$$L_m=\left\lfloor\frac{k_m}{t_{m+1}}\right\rfloor,\qquad \nu_m=\left\lfloor\frac{k_{m+1}}{L_mt_m}\right\rfloor,$$

and identify each Walsh layer with a cyclic group of the corresponding
cardinality. Inside
$\{1,\ldots,L_mt_{m+1}\}\times\mathbb Z_{t_m}$, enumerate

$$(j,j\rho+k),\qquad \rho=0,1,2,\ldots,\quad k=0,\ldots,t_m-1,\quad j=1,\ldots,L_mt_{m+1},$$

first by increasing $\rho$, then $k$, then $j$. Take the first $k_{m+1}$
successive blocks of $t_{m+1}$ points as $N_{m,1},\ldots,N_{m,k_{m+1}}$.
Each such block meets every $M_{m,i}=\{i\}\times\mathbb Z_{t_m}$ in at
most one point, so condition 5 holds eventually. [explicit lexicographic construction]

8.1 Put $A_m=\{1,\ldots,L_mt_{m+1}\}\times\mathbb Z_{t_m}$ and [given, step 7.1]
$q_m=k_{m+1}/(L_mt_m)$. Every point of $A_m$ occurs once at each complete
$\rho$-level, so its multiplicity $\sigma(e)$ among the selected blocks
differs from $q_m$ by at most one; points outside $A_m$ have multiplicity
zero. Since $|A_m|=L_mt_{m+1}t_m$,

$$\sum_{e\in M_m}\left|\frac1{k_mt_m}-\frac{\sigma(e)}{k_{m+1}t_{m+1}}\right|\le \frac{2t_{m+1}}{k_m}+\frac{k_mt_m}{k_{m+1}t_{m+1}}.$$

Both terms are $o(1/n_{m+1})$: their exponential orders are respectively
$t_m^{\alpha-\gamma+o(1)}$ and
$t_m^{(\gamma+1)(1-\alpha)+o(1)}$. Thus condition 6 holds after discarding
finitely many indices. [step 1.1, balanced incidence count]

8.2 Suppose two distinct selected blocks share a point represented both as [given, step 1.1, step 7.1]
$(j,j\rho_1+k_1)$ and $(j,j\rho_2+k_2)$. The injectivity at a fixed
$\rho$-level gives $\rho_1\ne\rho_2$, and
$|\rho_1-\rho_2|\le\nu_m$. For any other common point whose first coordinate
differs by $\mu$, congruence in $\mathbb Z_{t_m}$ gives

$$t_m\mid \mu(\rho_1-\rho_2),\qquad \mu\ge\frac{t_m}{|\rho_1-\rho_2|}\ge\frac{t_m}{\nu_m}.$$

Moreover

$$\frac{t_m}{\nu_m}\sim\frac{L_mt_m^2}{k_{m+1}}\sim\frac{k_mt_m^2}{t_{m+1}k_{m+1}}=t_m^{\gamma+2-\alpha(\gamma+1)+o(1)}.$$

The exponent is positive precisely because
$\alpha<(2+\gamma)/(1+\gamma)$, so eventually $t_m/\nu_m>n_{m+1}$.
The common first coordinates lie in an interval of length less than
$t_{m+1}$ and are more than $n_{m+1}$ apart. There are therefore at most
$1+t_{m+1}/n_{m+1}\le2t_{m+1}/n_{m+1}$ of them. This proves condition 4.
Together with steps 7.1--8.1, all three incidence conditions hold after a
finite reindexing. [step 1.1, finite arithmetic count, Stirling estimate]

9.1 Finally [given, L1, step 6.1, step 8.2]
$\log|M_m|=\log(k_mt_m)\sim(\gamma+1)(2\log2)n_m$. Therefore $|M_{m+1}|>|M_m|^b$ eventually and $5/n_{m+1}\le K/\log|M_m|$ for one constant $K$. Step 6.1 supplies the trace hypothesis, so [L1] gives the claimed logarithmic finite-rank lower bound. [L1, steps 1.1, 6.1, asymptotics] ∎
