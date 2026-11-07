---
id: thm-km-finite-poset-nondivergence
kind: theorem
title: "Finite-poset quantitative nondivergence for good functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-good-function-on-a-ball
  - lem-centred-covering-for-positive-lower-semicontinuous-radii
  - thm-heine-borel-rn
  - thm-extreme-value-metric
proof_strategy: induction
sources:
  references:
    - title: "Kleinbock–Margulis 1998"
      url: "https://arxiv.org/pdf/math/9810036v1"
      locator: "§3 Proposition 3.4; §4 Theorem 4.1; §5 Theorems 5.2 and 5.4, with proofs"
    - title: "Beresnevich–Kleinbock 2022"
      url: "https://www.asau.ru/files/pdf/3028250.pdf"
      locator: "chapter 9, printed pp. 303–310: quantitative nondivergence and nondegeneracy conventions"
---

## Statement

Let $d\ge1$, $k\ge0$, and $C,\alpha,\rho>0$. Let $B=B(x_0,r_0)\subset\mathbb R^d$ and $\widetilde B=B(x_0,3^k r_0)$. Let $S$ be a partially ordered set in which every chain has at most $k$ members, and assign a continuous function $\psi_s:\widetilde B\to\mathbb R$ to each $s\in S$. Assume each function is $(C,\alpha)$-good on $\widetilde B$, that $\sup_B|\psi_s|\ge\rho$, and that for every $x\in\widetilde B$ only finitely many $s$ have $|\psi_s(x)|<\rho$.

For $\varepsilon>0$, call $x$ marked if a chain $\Sigma\subset S$ satisfies $\varepsilon\le|\psi_s(x)|\le\rho$ for all $s\in\Sigma$, and $|\psi_s(x)|\ge\rho$ for every $s\in S\setminus\Sigma$ comparable with every member of $\Sigma$. The empty chain is allowed; every index is comparable with all its members. Write $\Phi$ for the marked set. Then
$$|B\setminus\Phi|^*\le kC(3^dN_d)^k(\varepsilon/\rho)^\alpha|B|,\qquad N_d=4\lceil4\sqrt d\rceil^d+1.$$
Here $|\cdot|^*$ is Lebesgue outer measure. If $S$ is countable, the marked set is Borel and ordinary Lebesgue measure may replace outer measure. Thus the assertion applies in particular to countable primitive-subgroup posets.

## Statement references

[Kleinbock–Margulis 1998, Theorem 4.1 and Lemmas 4.2–4.6](https://arxiv.org/pdf/math/9810036v1) — marking uses comparability with every chain member. The outer-measure formulation makes the arbitrary-index measurability boundary explicit; the dimension-only covering constant is enlarged here.

## Choice-free proof scope

The full arbitrary-poset outer-measure Statement is proved below. Canonically ordered function codes and finite comparability profiles replace the arbitrary-label enumeration, and only explicitly coded Gdelta compact approximation is used. No Countable Choice premise is adopted.

## Facts & Assumptions

**Given:** The data and hypotheses of the Statement.

[F1] A function is $(C,\alpha)$-good when on every contained ball its $v$-sublevel set has measure at most $C(v/\sup|\psi|)^\alpha$ times that ball's volume. [[def-good-function-on-a-ball]]

[F2] A positive lower-semicontinuous bounded radius function on a compact subset of $\mathbb R^d$ has a finite prescribed-ball cover of overlap at most $N_d=4\lceil4\sqrt d\rceil^d+1$. [[lem-centred-covering-for-positive-lower-semicontinuous-radii]]

[F3] The coded-Gdelta compact approximation used here is constructed in step1.2, for a specified countable family of closed loci only. No general measurable-set inner-regularity theorem is invoked.

[F4] Euclidean rational points and rational boxes have fixed enumerations. Continuous functions are determined by their values on the rational points of their open domain; finite sets of such value codes, and finite sets of subsets of $\mathbb N$, have canonical lexicographic orders.

[F5] Closed bounded Euclidean sets are compact; continuous functions attain extrema on compact sets. Successive coordinate minimization gives a unique lexicographically least point of a nonempty compact set. [[thm-heine-borel-rn]] [[thm-extreme-value-metric]]

## Proof

**Proof technique:** induction on the maximum chain length.

1.1 Put $a_s=|\psi_s|$ and $T=\{s:a_s(x)<\rho\text{ somewhere in }\widetilde B\}$. We DO NOT assert that the arbitrary labels in $T$ can be enumerated. Instead consider the set of DISTINCT continuous functions $a_s$, $s\in T$. Assign each function to the first rational point $q_m$ at which it is less than $\rho$. At that point only finitely many original indices are active, so each assigned set of functions is finite. Different continuous functions differ at some rational point; compare their sequences $(a_s(q_i))_i$ at their first difference. This is a definite linear order. Each finite assigned set therefore has a unique increasing enumeration, with no choice of labels. Flattening the integer pairs $(m,\text{rank})$ canonically enumerates the distinct functions as $(a_j)$, possibly with empty codes. Each fibre $I_j=\{s\in T:a_s=a_j\}$ is finite, since all its labels are active at one rational point.
For a finite chain $\Sigma\subset T$, list its function codes in its unique poset-increasing order, allowing repeated codes, and set
$$P_\Sigma=\{j:\exists t\in T\setminus\Sigma\text{ with }a_t=a_j\text{ and }t\text{ comparable with every member of }\Sigma\}.$$
For any fixed finite tuple of function codes, there are only finitely many possible label tuples in the product of their finite fibres, hence only finitely many POSSIBLE subsets $P_\Sigma\subseteq\mathbb N$. A finite set of these subsets has a unique increasing lexicographic enumeration, by first differing membership bits. We enumerate those profile SETS, not a chosen label chain for each profile. Thus every possible chain marking locus is in a specified countable family of CLOSED relative sets
$$C_{(j_1,\ldots,j_r),P}=\{x:\varepsilon\le a_{j_i}(x)\le\rho\ (1\le i\le r),\quad a_j(x)\ge\rho\ (j\in P)\}.$$
Conversely each enumerated profile comes from a chain by its defining existential predicate, so this union is EXACTLY the marked set for $T$. The empty chain has the single profile consisting of all active function codes. This proves that the bad set for $T$ is an explicitly coded $G_\delta$, without enumerating a countable union of arbitrary finite label sets. Every discarded index has $a_s\ge\rho$ everywhere, so every marking chain for $T$ marks for $S$, and $B\setminus\Phi_S\subseteq B\setminus\Phi_T$. When the original $S$ itself is countable, enumerate its finite chains directly to obtain the Borel assertion for $\Phi_S$. Therefore it suffices to bound the bad set for $T$; relabel this active poset as $S$ for the remainder of the induction. Apply this same active-index reduction at every inductive instance, using outer measure for the original child poset. [given, F4, construct]

1.2 Here are the particular volume/compact-approximation facts needed for that code. A bounded open set has a specified disjoint dyadic-cube code: take cubes with closure in the open set and then their maximal dyadic ancestors there, assigning shared faces consistently. Finite inner unions and the sum of their cube volumes give its usual volume; canonical slight open enlargements with geometric error budgets give the same outer measure. For compact $F$, compactness reduces open-box outer covers to finite rational-box covers. Hence, for rational $e>0$, the FIRST finite rational-box union $U\supset F$ with $|U|<|F|+e$ is a specified neighborhood, and $|U\setminus F|<e$. Open/closed measurability and this difference identity follow by splitting finite box unions and taking these inner/outer approximants. A specified sequence of open sets has the needed countable subadditivity without selecting covers: every compact finite inner box union in their union has a finite subcover; finite subadditivity followed by the supremum of those inner unions proves the assertion.
Now restrict a specified countable family of relative closed loci to a concentric compact subball $Q\subset B$ and call them $F_i$. For each $i$, choose by the first-cover rule open $U_i\supset F_i$ with $|U_i\setminus F_i|<e2^{-i}$. The set $K=Q\setminus\bigcup_iU_i$ is compact and lies in $E=Q\setminus\bigcup_iF_i$, while
$$E\setminus K\subseteq\bigcup_i(U_i\setminus F_i),\qquad |E\setminus K|^*\le e.$$
The latter union is a uniformly coded OPEN union, so its bound is exactly the preceding subadditivity, not a choice of arbitrary measurable covers. These same specified approximants verify the measurable-set splitting property for this coded $G_\delta$. Thus its outer measure equals the supremum of its compact-subset measures. Let the concentric radii increase by the fixed rule $(1-2^{-m})r_0$; the missing shell volumes tend to zero. This proves the required compact-approximation identity on $B$ for the particular bad sets of step1.1. All chosen covers are first integer codes, and all finite-dimensional witnesses are extrema or the unique lexicographic compact point from [F5]. [F4, F5, step 1.1, construct, algebra]


2.1 For a poset of chain length0 there are no indices, and the empty chain marks every point, proving the base case. Suppose now that $k\ge1$ and the assertion holds for chain length at most $k-1$. If $S$ is empty there is again nothing to prove. Otherwise $C\ge1$: on any ball where a function has positive finite supremum, take a sublevel threshold decreasing to that supremum from above in F1. Such a finite positive-supremum ball exists by continuity and the positive lower-supremum hypothesis. If $\varepsilon\ge\rho$, the displayed bound follows from $kC(3^dN_d)^k\ge1$. Hence it remains to consider $0<\varepsilon<\rho$. [F1, step 1.1, base]

3.1 Write $E=\{x\in B:H(x)\ne\varnothing\}$, where $H(x)=\{s:|\psi_s(x)|<\rho\}$ is finite. For $x\in E$ and $s\in H(x)$ let $r_s(x)$ be the largest radius $r\le2r_0$ for which $\sup_{B(x,r)}|\psi_s|\le\rho$. It is positive by continuity. Equivalently it is $\min(2r_0,\operatorname{dist}(x,\{y\in\widetilde B:|\psi_s(y)|>\rho\}))$, with distance to the empty set interpreted as infinity. All balls concerned lie in $3B\subset\widetilde B$. Put $r(x)=\max_{s\in H(x)}r_s(x)$ and $B_x=B(x,r(x))$. This positive bounded function is lower semicontinuous on $E$: a maximizing index at $x$ remains active nearby, and its capped distance function changes by at most the displacement. [step 2.1, given, construct]

4.1 Fix $x\in E$ and any maximizing index $s_x\in H(x)$. This is a pointwise finite witness; no function $x\mapsto s_x$ is chosen. Every resulting local bound is independent of this witness, so the eventual finite covering uses only finitely many such choices. Its supremum on $B_x$ is exactly $\rho$. It is at most $\rho$ by definition; if $r(x)=2r_0$, the ball contains $B$ and the original lower-supremum condition gives the opposite bound. If $r(x)<2r_0$ and its supremum were smaller, continuity on a compact slightly enlarged closed ball, still inside $3B$, would allow the radius to increase, a contradiction. Also every index $s$ has supremum at least $\rho$ on $B_x$: a strictly smaller supremum would make it active at $x$ and allow its radius to be strictly larger than $r(x)$, unless already capped, in which case the containment of $B$ again contradicts its original lower supremum. [step 3.1, given]

5.1 Let $S_x$ be the indices different from $s_x$ comparable with $s_x$. Its chains have length at most $k-1$, since adjoining $s_x$ lengthens any such chain by one. Its functions satisfy all induction hypotheses on $B_x$ by step 4.1 and restriction: the needed enlarged ball $3^{k-1}B_x$ lies in $3^kB$, because $|x-x_0|<r_0$ and $r(x)\le2r_0$. Consequently its unmarked set in $B_x$ has outer measure at most $(k-1)C(3^dN_d)^{k-1}(\varepsilon/\rho)^\alpha|B_x|$. [step 2.1, step 3.1, step 4.1, ih]

6.1 If $z\in B_x$ is marked for $S_x$ and $|\psi_{s_x}(z)|\ge\varepsilon$, adjoin $s_x$ to its marking chain. Its value is at most $\rho$ by step 4.1. Any index outside the enlarged chain comparable with every member belongs to $S_x$ and is comparable with every member of the original chain, so its value is at least $\rho$. Thus the enlarged chain marks $z$ for $S$. Hence the bad set for $S$ in $B\cap B_x$ is contained in the union of the bad set for $S_x$ and the $\varepsilon$-sublevel set of $\psi_{s_x}$ in $B_x$. F1 and step 4.1 bound the latter by $C(\varepsilon/\rho)^\alpha|B_x|$. Using finite outer-measure subadditivity and $3^dN_d\ge1$, their sum is at most $kC(3^dN_d)^{k-1}(\varepsilon/\rho)^\alpha|B_x|$. [F1, step 4.1, step 5.1, algebra]

7.1 Every point of $B\setminus E$ is marked by the empty chain. For a compact subset $K$ of the Borel bad set, apply F2 to the restriction of $r(x)$ to $K$. The resulting finitely many balls cover $K$, lie in $3B$, and have overlap at most $N_d$. Their volume sum is therefore at most $N_d|3B|=3^dN_d|B|$. Sum the local bounds from step 6.1 over this finite cover to obtain $|K|\le kC(3^dN_d)^k(\varepsilon/\rho)^\alpha|B|$. Take the supremum over compact $K$ using F3. This completes the induction for the active coded posets; step 1.1 gives the arbitrary-poset outer-measure assertion and the Borel qualification. [F2, F3, step 1.1, step 1.2, step 3.1, step 6.1, discharge-induction] ∎

## Remarks

The full original arbitrary-poset outer-measure bound, countable-poset Borel qualification and explicit constant are preserved. Arbitrary labels were not ordered or selected; distinct function codes and finite comparability-profile codes are ordered instead. The only compact approximation is for the explicit closed-locus code above, not an upgrade of a general measure-theory supplier.
