---
id: thm-relative-homology-of-consecutive-cw-skeleta
kind: theorem
title: Relative homology of consecutive CW skeleta
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-skeleta-cw-subcomplex-and-relative-cw-complex, prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition, lem-compact-cw-images-have-finite-cell-support-without-choice, cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient, thm-long-exact-sequence-of-a-pair-in-singular-homology, cor-homology-of-spheres, prop-zero-th-singular-homology-is-free-on-path-components, thm-the-exponential-law]
proof_strategy: direct
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Section 2.2
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-09-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

For any abelian group $G$, $H_k(X^n,X^{n-1};G)$ is $0$ for $k\ne n$ and is naturally $\bigoplus_{e^n_\alpha}G$ for $k=n$.

## Facts & Assumptions

**Given:** A CW complex $X$ and an integer $n\geq0$.

[F1] CW skeleta are subcomplexes, and collapsing $X^{n-1}$ in $X^n$ identifies each attached $n$-disk boundary with the quotient basepoint ([[def-skeleta-cw-subcomplex-and-relative-cw-complex]], [[prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition]]).

[F2] A continuous image of a compact space in a CW complex lies in a finite CW subcomplex, without any choice premise ([[lem-compact-cw-images-have-finite-cell-support-without-choice]]).

[F3] If a nonempty closed subspace $A$ deformation retracts from an open neighborhood in $Y$, the quotient map induces $H_k(Y,A;G)\cong\widetilde H_k(Y/A;G)$ ([[cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient]]). We verify this good-pair condition explicitly for the skeletal and finite-wedge pairs below; it is not being assumed for every CW pair.

[F4] A pair has a long exact singular homology sequence for every abelian coefficient group ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]]).

[F5] For $n\ge1$, the reduced homology of $S^n$ with coefficients $G$ is $G$ in degree $n$ and zero otherwise ([[cor-homology-of-spheres]]). A path-connected nonempty space has $H_0\cong G$ ([[prop-zero-th-singular-homology-is-free-on-path-components]]).

## Proof

**Proof technique:** direct.

1.1 If there are no $n$-cells, $X^n=X^{n-1}$ and both sides are zero. For $n=0$, $X^0$ is discrete and $X^{-1}=\varnothing$. Every singular simplex has constant image, so its singular chain complex splits over the vertices. On one point its degree-$k$ chain group is $G$ and its boundary is multiplication by $\sum_{i=0}^k(-1)^i$, which is zero for odd $k$ and the identity for positive even $k$; hence its homology is $G$ in degree zero and zero otherwise. This gives the asserted direct sum without an additivity axiom. Hence assume $n\ge1$ and that an $n$-cell exists. Its attaching sphere makes $X^{n-1}$ nonempty. [given, F1, algebra]

1.2 We verify the good-pair hypothesis for $(X^n,X^{n-1})$. For each $n$-cell use its supplied characteristic map $\chi_e:D^n\to X^n$, and let $$V=X^{n-1}\cup\bigcup_e\chi_e\{u\in D^n:\|u\|>1/2\}.$$ The preimage of $V$ in each characteristic disk of dimension below $n$ is the whole disk, and in each $n$-disk it is the relatively open outer annulus $\{\|u\|>1/2\}$; the CW weak topology therefore makes $V$ open. On each such annulus set $$H_t(\chi_e(u))=\chi_e\bigl((1-t)u+t u/\|u\|\bigr),$$ and fix $X^{n-1}$ pointwise. The formula is continuous on each characteristic-disk cylinder and fixes the boundary sphere where $\|u\|=1$, so it agrees under every attaching identification, even for nonregular cells. Here is the product-continuity check for arbitrary cell sets. For each point of $V$, its track is continuous; transpose these tracks to a function $\widehat H:V\to C(I,V)$ with the compact-open topology. By [[thm-the-exponential-law]], the restriction of $\widehat H$ to every characteristic disk's inverse image of $V$ is continuous. The restricted characteristic maps jointly give the weak topology on the open subspace $V$: a subset of $V$ is open exactly when its inverse image in each disk is open. Hence $\widehat H$ is continuous, and the same interval exponential law untransposes it to a continuous $H:V\times I\to V$. At $t=1$ it lands in $X^{n-1}$; thus $V$ deformation retracts onto that closed subcomplex. By [F3], $$H_k(X^n,X^{n-1};G)\cong\widetilde H_k(W;G),\qquad W=X^n/X^{n-1}=\bigvee_e(D^n_e/S^{n-1}_e).$$ The quotient is a wedge of $n$-spheres with common basepoint $b$ by the attaching presentation, and the isomorphism is induced by the quotient map. [F1, F3, given, construct]

2.1 First let $W_J$ be a finite wedge and split off one sphere $S^n_j$, leaving the subwedge $U$ that contains the common basepoint. This is again a skeletal attachment pair: the open neighborhood $U\cup\chi_j\{\|u\|>1/2\}$ and the radial homotopy of step 1.2 retract onto $U$. Therefore [F3] applies, and the quotient $W_J/U\cong S^n_j$ gives $H_k(W_J,U;G)\cong\widetilde H_k(S^n_j;G)$. The inclusion $U\hookrightarrow W_J$ has a retraction collapsing $S^n_j$; hence its homology map is injective. In the pair long exact sequence this also forces the connecting map into $H_{k-1}(U;G)$ to be zero. Thus, for $k>0$, the sequence from $H_k(U;G)$ to $H_k(W_J;G)$ to $\widetilde H_k(S^n_j;G)$ is short exact. It splits by the inclusion of $S^n_j$, since projection to the quotient is the identity on that sphere. Induction over the finite set $J$, together with sphere homology, gives $H_k(W_J;G)=\bigoplus_{j\in J}G$ for $k=n$ and zero for other positive $k$. Every finite wedge is path connected, including the empty wedge interpreted as a point, so $\widetilde H_0(W_J;G)=0$. [F3, F4, F5, step 1.2]

3.1 The choice-free compact-image lemma puts the image of each singular simplex in the arbitrary wedge $W$ inside a finite CW subcomplex, hence inside a finite subwedge. Every singular chain is a finite sum of simplices, so it too is supported in a finite subwedge. A cycle in $W$ supported there is a cycle there, since singular chain inclusion is injective. If a finite supported cycle bounds in $W$, its bounding chain also lies in some finite subwedge; enlarging both finite supports makes it a boundary in one finite subwedge. Therefore the finite-wedge calculations of step 2.1 pass elementwise to $W$: classes have finite support, and any relation is already a finite-wedge relation. This gives $\widetilde H_n(W;G)\cong\bigoplus_{e^n_\alpha}G$ and zero in every other degree, including reduced degree zero because $n\ge1$ and $W$ is path connected. Composing with the quotient-induced isomorphism of step 1.2 proves the stated natural isomorphism, without a choice premise. [F2, step 1.2, step 2.1] ∎
