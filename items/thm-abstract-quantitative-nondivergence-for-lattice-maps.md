---
id: thm-abstract-quantitative-nondivergence-for-lattice-maps
kind: theorem
title: "Abstract quantitative nondivergence for good lattice maps"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-good-function-on-a-ball
  - def-lattice-systole
  - thm-km-finite-poset-nondivergence
  - lem-primitive-subgroup-wedges-and-rank-one-extension-bounds
proof_strategy: direct
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

Let $d,k\ge1$, $C,\alpha>0$, and $0<\rho\le1/k$. Let $B=B(x_0,r_0)\subset\mathbb R^d$, put $\widetilde B=B(x_0,3^k r_0)$, and let $h:\widetilde B\to\operatorname{GL}_k(\mathbb R)$ be continuous. A nonzero subgroup $\Gamma\subset\mathbb Z^k$ is primitive if it equals the integer points in its real span. Let $\psi_\Gamma(x)$ be the Euclidean covolume of $h(x)\Gamma$ in that span. Assume every $\psi_\Gamma$ is $(C,\alpha)$-good on $\widetilde B$ and $\sup_B\psi_\Gamma\ge\rho$. Then for every $0<\varepsilon\le\rho$,
$$|\{x\in B:\delta_\infty(h(x)\mathbb Z^k)<\varepsilon\}|\le D_{d,k}(C,\alpha)(\varepsilon/\rho)^\alpha|B|.$$
One may take $D_{d,k}(C,\alpha)=k^{\alpha/2}\max\{1,kC(3^dN_d)^k\}$, with $N_d=4\lceil4\sqrt d\rceil^d+1$. The constant is independent of $h,B,\rho,\varepsilon$.

## Statement references

[Kleinbock–Margulis 1998, Theorem 5.2](https://arxiv.org/pdf/math/9810036v1) — exterior-covolume argument, with Euclidean-to-sup norm constants explicit here.

## Supplied unqualified proof scope

The original unqualified supplier conclusion is now supplied by its actual choice-free proof. The calculations below retain their original scope and constants; no additional choice axiom is assumed.

## Facts & Assumptions

**Given:** the hypotheses of the Statement.

[F1] The countable poset of nonzero primitive subgroups has chain length at most $k$. At each fixed invertible $h$, only finitely many have covolume below a fixed threshold. Exterior covolumes are norms of integer basis wedges, and for the saturation $\Lambda$ of $\Gamma+\mathbb Zv$ one has $\psi_\Lambda(h)\le\psi_\Gamma(h)\|hv\|_2$, with $\psi_{\{0\}}=1$. [[lem-primitive-subgroup-wedges-and-rank-one-extension-bounds]]

[F2] the unmarked set for a countable poset satisfying the good-function, lower-supremum and local-finiteness hypotheses has measure at most $kC(3^dN_d)^k(\eta/\rho)^\alpha|B|$. Marking uses comparability with every chain member and permits the empty chain. [[thm-km-finite-poset-nondivergence]]

[F3] The sup-norm systole is the infimum of $\|hv\|_\infty$ over $0\ne v\in\mathbb Z^k$, and $\|w\|_2\le\sqrt k\|w\|_\infty$. [[def-lattice-systole]]


## Proof

**Proof technique:** marked-point exclusion using primitive exterior covolumes.

1.1 The covolume functions are continuous by their exterior-coordinate formulas. F1 verifies the chain-length and local-finiteness hypotheses of F2, while goodness and the lower-supremum bounds are given. The poset is countable, so its unmarked set is Borel. The short-vector event is also Borel: it is the countable union, over nonzero integer vectors $v$, of the open conditions $\|h(x)v\|_\infty<\varepsilon$. [given, F1, F2, F3]

1.2 First suppose $0<\varepsilon\le\rho/\sqrt k$ and set $\eta=\sqrt k\varepsilon\le\rho$. At a point marked at threshold $\eta$, fix a marking chain and augment it by the zero subgroup and $\mathbb Z^k$, omitting any repetition. For any nonzero integer $v$, let $\Gamma_i$ be the first augmented chain member containing $v$, and $\Gamma_{i-1}$ its predecessor. Primitivity means $v$ is not in the real span of $\Gamma_{i-1}$. The saturation $\Lambda$ of $\Gamma_{i-1}+\mathbb Zv$ is therefore nonzero and lies between these two consecutive chain members. It is comparable with every original chain member. If it belongs to the marking chain its covolume is at least $\eta$; otherwise its covolume is at least $\rho\ge\eta$ by marking. [F1, F2, construct]

2.1 If $\Gamma_{i-1}=\{0\}$, F1 gives $\|h(x)v\|_2\ge\psi_\Lambda(x)\ge\eta$ directly. If the predecessor is nonzero, it is an original marking-chain member, so $\psi_{\Gamma_{i-1}}(x)\le\rho$. F1 then gives $\|h(x)v\|_2\ge\psi_\Lambda(x)/\psi_{\Gamma_{i-1}}(x)\ge\eta/\rho\ge\eta$, because $\rho\le1$. Thus every nonzero vector at a marked point has sup norm at least $\eta/\sqrt k=\varepsilon$ by F3. The short-vector event is contained in the unmarked set, so F2 bounds its measure by $kC(3^dN_d)^k k^{\alpha/2}(\varepsilon/\rho)^\alpha|B|$. [given, F1, F2, F3, step 1.2, algebra]

3.1 In the remaining range $\rho/\sqrt k\le\varepsilon\le\rho$, the trivial measure bound $|B|$ is at most $k^{\alpha/2}(\varepsilon/\rho)^\alpha|B|$. Taking the stated maximum constant combines both ranges. This includes $k=1$, the endpoint thresholds, empty marking chains, and the rank-zero predecessor without an erroneous estimate $1\le\rho$. [step 1.1, step 2.1, algebra] ∎

## Remarks

The original unqualified claim is retained. The sole inherited choice-premise hold is discharged by the actual supplied unqualified theorem, without a new premise or a change to the mathematical calculations.
