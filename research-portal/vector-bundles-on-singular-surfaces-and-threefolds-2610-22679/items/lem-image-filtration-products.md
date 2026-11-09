---
id: lem-image-filtration-products
kind: lemma
title: Products and projections on image filtrations
status: published
domain: mathematics
deps:
  - def-multiplicative-filtered-spectrum
  - lem-filtered-stage-exact-sequence
dependency_roles:
  def-multiplicative-filtered-spectrum: mathematical-premise
  lem-filtered-stage-exact-sequence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 6
---

## Statement
Let $F$ be a multiplicative decreasing filtration on a commutative ring spectrum $E$. For integers $i,j,a,b$, write
$$q_{i,a}:\pi_aF^i\longrightarrow\pi_aE,\qquad p_{i,a}:\pi_aF^i\longrightarrow\pi_a\operatorname{gr}^iF$$
for the maps induced by the augmentation and the cofiber projection, respectively, and set $F^i\pi_aE=\operatorname{im}q_{i,a}$. Then
$$F^i\pi_aE\cdot F^j\pi_bE\subseteq F^{i+j}\pi_{a+b}E.$$
For any stage lifts $x\in\pi_aF^i$ and $y\in\pi_bF^j$, their stage product $xy\in\pi_{a+b}F^{i+j}$ satisfies
$$p_{i+j,a+b}(xy)=p_{i,a}(x)\,p_{j,b}(y).$$
If, for the three pairs $(i,a)$, $(j,b)$ and $(i+j,a+b)$, one has $\ker q_{r,n}\subseteq\ker p_{r,n}$, the corresponding maps $p_{r,n}$ descend uniquely to homomorphisms $\bar p_{r,n}:F^r\pi_nE\to\pi_n\operatorname{gr}^rF$, and
$$\bar p_{i+j,a+b}(uv)=\bar p_{i,a}(u)\,\bar p_{j,b}(v)$$
for $u\in F^i\pi_aE$ and $v\in F^j\pi_bE$. Injectivity of each relevant $q_{r,n}$ is sufficient for these descent conditions; it is not needed for the containment or the formula for chosen stage lifts.

A decreasing filtration here is a coherent tower of spectra $F^r$ with maps $F^{r+1}\to F^r$ and compatible maps $F^r\to E$. Its graded piece is the cofiber $\operatorname{gr}^rF=\operatorname{cofib}(F^{r+1}\to F^r)$. Multiplicativity supplies compatible maps $F^i\wedge F^j\to F^{i+j}$ and $\operatorname{gr}^iF\wedge\operatorname{gr}^jF\to\operatorname{gr}^{i+j}$, and makes the augmentation compatible with multiplication on $E$. Products in homotopy groups are those induced by these maps and the canonical smash pairing of sphere spectra. An image filtration consists of the subgroups $F^r\pi_nE$ just defined; a stage lift of an element of one of these subgroups is a preimage under $q_{r,n}$.

## Facts & Assumptions

**Given:** A multiplicative decreasing filtration $F$ on a commutative ring spectrum $E$ and integers $i,j,a,b$.

**Goal:** Prove the product containment and the projection identity for stage lifts, and prove the stated conditional identity on image groups.

[F1] The stage multiplication is compatible with the augmentation to $E$, and the graded multiplication satisfies $\overline\mu_{i,j}(p_i\wedge p_j)\simeq p_{i+j}\mu_{i,j}$ for the cofiber maps $p_r:F^r\to\operatorname{gr}^rF$. These maps induce the corresponding pairings on homotopy groups. [[def-multiplicative-filtered-spectrum]]

[F2] For each $(r,n)$, the stage projection $p_{r,n}$ factors uniquely through the image of $q_{r,n}$ exactly when $\ker q_{r,n}\subseteq\ker p_{r,n}$. In particular, injectivity of $q_{r,n}$ implies this condition. [[lem-filtered-stage-exact-sequence]]

## Proof

**Proof technique:** Apply the augmentation and cofiber compatibilities to representatives, then use the image-factorization criterion.

1.1 Let $u\in F^i\pi_aE$ and $v\in F^j\pi_bE$. By the definition of image, choose $x\in\pi_aF^i$ and $y\in\pi_bF^j$ with $q_{i,a}(x)=u$ and $q_{j,b}(y)=v$. The stage multiplication gives $xy\in\pi_{a+b}F^{i+j}$. Compatibility of multiplication with the augmentation gives $q_{i+j,a+b}(xy)=uv$. Hence $uv$ is in $F^{i+j}\pi_{a+b}E$, proving the containment. [F1, given, construct]

1.2 For any such stage classes $x,y$, the cofiber compatibility in [F1], applied to their representing sphere maps, gives $p_{i+j,a+b}(xy)=p_{i,a}(x)p_{j,b}(y)$. This equality concerns the chosen stage classes and does not require their images in $\pi_*E$ to determine them uniquely. [F1, given]

2.1 Assume the three kernel inclusions in the statement. By [F2], the three stage projections factor uniquely through their respective image groups. For the lifts chosen in step 1.1, the product $xy$ is a stage lift of $uv$. Therefore
$$\bar p_{i+j,a+b}(uv)=p_{i+j,a+b}(xy)=p_{i,a}(x)p_{j,b}(y)=\bar p_{i,a}(u)\bar p_{j,b}(v).$$
The factorization ensures that the displayed values are independent of the chosen lifts. [F2, step 1.1, step 1.2, assume-hyp]

3.1 An injective $q_{r,n}$ has zero kernel and thus satisfies the corresponding inclusion. Steps 1.1 through 2.1 prove all assertions, with no injectivity hypothesis used in the first two steps. [F2, step 1.1, step 1.2, step 2.1] ∎
