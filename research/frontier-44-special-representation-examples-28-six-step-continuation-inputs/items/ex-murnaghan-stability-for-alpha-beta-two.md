---
id: ex-murnaghan-stability-for-alpha-beta-two
kind: example
title: "Murnaghan stability for $\\alpha=\\beta=(2)$, ranks 4 to 9"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 14
deps: [def-reduced-kronecker-coefficient,
       thm-murnaghan-stability-for-kronecker-coefficients,
       def-first-row-padding-of-a-partition,
       def-padded-kronecker-coefficient-sequence,
       thm-exact-global-stabilization-threshold-for-a-fixed-kronecker-product,
       thm-youngs-rule-for-permutation-modules,
       thm-frobenius-characteristic-sends-specht-characters-to-schur-functions,
       thm-jacobi-trudi-and-dual-jacobi-trudi-identities,
       lem-complete-homogeneous-expansion-in-power-sums,
       prop-kronecker-coefficient-is-a-three-character-inner-product,
       def-column-antisymmetrizer-polytabloid-and-specht-module,
       thm-complex-irreducibles-of-symmetric-groups-are-specht-modules,
       def-kronecker-coefficient-and-internal-tensor-product,
       thm-murnaghan-expansion-for-all-admissible-ranks]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emmanuel Briand, Rosa Orellana and Mercedes Rosas, The stability of the Kronecker product of Schur functions, arXiv:0907.4652v2 (2009); Introduction p. 2 (the displayed product table for alpha=beta=(2) at ranks 4 to 9 and the stable row)"
      url: "https://arxiv.org/pdf/0907.4652"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford University Press 1995; Chapter I §7 (Frobenius characteristic and character values)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
---

## Example

For $\alpha=\beta=(2)$ the source's introduction displays the following
products $\left(s_{n-2,2}\right)^2=s_{n-2,2}*s_{n-2,2}$ at ranks $n=4,\dots,9$
(notation $s_{a,b,c}$ for Schur functions of the padded partitions, and
$s_\bullet$ on the stable row):

$$s_{2,2}*s_{2,2}=s_4+s_{1,1,1,1}+s_{2,2},$$

$$s_{3,2}*s_{3,2}=s_5+s_{2,1,1,1}+s_{3,2}+s_{4,1}+s_{3,1,1}+s_{2,2,1},$$

$$s_{4,2}*s_{4,2}=s_6+s_{3,1,1,1}+2s_{4,2}+s_{5,1}+s_{4,1,1}+2s_{3,2,1}+s_{2,2,2},$$

$$s_{5,2}*s_{5,2}=s_7+s_{4,1,1,1}+2s_{5,2}+s_{6,1}+s_{5,1,1}+2s_{4,2,1}+s_{3,2,2}+s_{4,3}+s_{3,3,1},$$

$$s_{6,2}*s_{6,2}=s_8+s_{5,1,1,1}+2s_{6,2}+s_{7,1}+s_{6,1,1}+2s_{5,2,1}+s_{4,2,2}+s_{5,3}+s_{4,3,1}+s_{4,4},$$

$$s_{7,2}*s_{7,2}=s_9+s_{6,1,1,1}+2s_{7,2}+s_{8,1}+s_{7,1,1}+2s_{6,2,1}+s_{5,2,2}+s_{6,3}+s_{5,3,1}+s_{5,4},$$

$$s_{\bullet,2}*s_{\bullet,2}=s_\bullet+s_{\bullet,1,1,1}+2s_{\bullet,2}+s_{\bullet,1}+s_{\bullet,1,1}+2s_{\bullet,2,1}+s_{\bullet,2,2}+s_{\bullet,3}+s_{\bullet,3,1}+s_{\bullet,4}.$$

Consequently the reduced coefficients
([[def-reduced-kronecker-coefficient]]) for the pair $((2),(2))$ are
$\bar g^\gamma_{(2),(2)}=1,1,2,1,1,2,1,1,1,1$ for
$\gamma=\varnothing,(1,1,1),(2),(1),(1,1),(2,1),(2,2),(3),(3,1),(4)$
respectively, and $\bar g^\gamma_{(2),(2)}=0$ for all other $\gamma$; in
particular $\bar g^{(2)}_{(2),(2)}=2$ and $\bar g^{(4)}_{(2),(2)}=1$. The
displayed data also verify directly, for this pair, that the whole product is
$V$-stable at rank $8$ and not at rank $7$: applying $V$ (adding a box to the
first row of every Schur function) to the rank-$8$ expansion reproduces the
rank-$9$ expansion term by term, whereas applying $V$ to the rank-$7$
expansion misses the single term $s_{4,4}$ of the rank-$8$ expansion, the
other nine terms matching term by term. The proved threshold theorem
([[thm-exact-global-stabilization-threshold-for-a-fixed-kronecker-product]])
establishes $V$-stability for every rank from $8$ onward, with exact least
global index $8=|(2)|+|(2)|+2+2$; the displayed finite data independently
verify the six listed products and the failure of the preceding step.

## Facts & Assumptions

**Given:** The pair $\alpha=\beta=(2)$, so $\alpha[n]=\beta[n]=(n-2,2)$ for $n\ge4$, with the displayed products of the source's introduction as data; the stable row of the same source.

[F1] $\chi^{(2,2)}$ is the two-dimensional irreducible character of $S_4$ with values $2,0,2,-1,0$ on the classes of cycle types $(1^4),(2,1,1),(2,2),(3,1),(4)$, with class sizes $1,6,3,8,6$; $g^\delta_{\mu,\nu}=\frac1{24}\sum_{w\in S_4}\chi^\delta(w)\chi^\mu(w)\chi^\nu(w)=\sum_{\rho\vdash4}\chi^\delta(\rho)\chi^\mu(\rho)\chi^\nu(\rho)/z_\rho$ ([[prop-kronecker-coefficient-is-a-three-character-inner-product]], [[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]], [[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F2] $\operatorname{ch}(\chi^\lambda)=s_\lambda$, so a tensor-product multiplicity is computed in the Schur basis, and the Kronecker coefficients of $S_n$ are the structure constants of the internal product ([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]], [[def-kronecker-coefficient-and-internal-tensor-product]]).

[F3] For $n\ge8$, $s_{(n-2,2)}*s_{(n-2,2)}=\sum_\gamma\bar g^\gamma_{(2),(2)}s_{\gamma[n]}$ and all support labels are ordinary partitions; the least global stabilization index is $8$ ([[thm-exact-global-stabilization-threshold-for-a-fixed-kronecker-product]], [[thm-murnaghan-expansion-for-all-admissible-ranks]]).

[F4] For a partition $\gamma$ of degree $d$ and $n\ge d+\gamma_1$, $\gamma[n]=(n-d,\gamma_1,\gamma_2,\dots)$ and $s_{\gamma[n]}=V^{n-d}(s_\gamma)$ with $V$ adding a box to the first row ([[def-first-row-padding-of-a-partition]], [[def-padded-kronecker-coefficient-sequence]]).

## Verification

**Proof technique:** direct.

1.1 *Rank four, computed independently.* At $n=4$ the product is $s_{2,2}*s_{2,2}$; by [F1] and [F2], $g^\delta_{(2,2),(2,2)}=\sum_{\rho\vdash4}\chi^\delta(\rho)\chi^{(2,2)}(\rho)^2/z_\rho$ with the character values of [F1], so $\chi^{(2,2)}(\rho)^2=(4,0,4,1,0)$ and $z_\rho=(24,4,8,3,4)$ on the five classes. Class by class this gives $g^{(4)}=\tfrac4{24}+\tfrac48+\tfrac13=1$, $g^{(1,1,1,1)}=\tfrac4{24}+\tfrac48+\tfrac13=1$, $g^{(2,2)}=\tfrac{2\cdot4}{24}+\tfrac{2\cdot4}{8}-\tfrac13=1$, $g^{(3,1)}=\tfrac{3\cdot4}{24}-\tfrac48=0$ and $g^{(2,1,1)}=\tfrac{3\cdot4}{24}-\tfrac48=0$; the dimensions $1\cdot1+1\cdot1+1\cdot2=4=(\dim V_{(2,2)})^2$ confirm the total. Hence $s_{2,2}*s_{2,2}=s_4+s_{1,1,1,1}+s_{2,2}$, matching the displayed rank-four product. [F1, F2]

1.2 *Stability at ranks eight and nine.* By [F4], $V(s_{6,2})=s_{7,2}$, $V(s_{5,1,1,1})=s_{6,1,1,1}$, $V(s_{6,2})=s_{7,2}$, $V(s_{7,1})=s_{8,1}$, $V(s_{6,1,1})=s_{7,1,1}$, $V(s_{5,2,1})=s_{6,2,1}$, $V(s_{4,2,2})=s_{5,2,2}$, $V(s_{5,3})=s_{6,3}$, $V(s_{4,3,1})=s_{5,3,1}$ and $V(s_{4,4})=s_{5,4}$; applying these term by term to the rank-eight displayed expansion reproduces the rank-nine displayed expansion exactly, including the multiplicities $2$. [F4, given]

1.3 *The reduced coefficients.* The stable row displays multiplicities $1,1,2,1,1,2,1,1,1,1$ for the labels $\varnothing,(1,1,1),(2),(1),(1,1),(2,1),(2,2),(3),(3,1),(4)$ read off in the order $\bullet,\bullet,1,1,1$, etc.; by [F3] the coefficient of $s_{\gamma[n]}$ in the rank-$n$ product equals $\bar g^\gamma_{(2),(2)}$ for every $n\ge8$, so these are exactly the reduced coefficients, and all other $\gamma$ have $\bar g^\gamma_{(2),(2)}=0$ since their labels do not occur. In particular $\bar g^{(2)}_{(2),(2)}=2$ and $\bar g^{(4)}_{(2),(2)}=1$; the stable row's term $2s_{\bullet,2}$ accounts for the coefficient $2$ used in the later counterexample. [F3, given]

2.1 *Failure at rank seven.* Applying the same operator to the rank-seven displayed expansion gives the ten-term list of the rank-eight expansion except for $s_{4,4}$: the terms $s_{5,2},s_{4,1,1,1},2s_{5,2},s_{6,1},s_{5,1,1},2s_{4,2,1},s_{3,2,2},s_{4,3},s_{3,3,1}$ map to $s_{6,2},s_{5,1,1,1},2s_{6,2},s_{7,1},s_{6,1,1},2s_{5,2,1},s_{4,2,2},s_{5,3},s_{4,3,1}$, which are exactly the rank-eight terms other than $s_{4,4}$; hence the product at rank eight is not $V$ of the product at rank seven. [F4, given, step 1.2]

3.1 *The theorem's exact threshold.* By [F3] the product is $V$-stable for all $n\ge8$ with $\operatorname{stab}((2),(2))=|(2)|+|(2)|+2+2=8$, and every support label $\gamma[n]$ for $\bar g^\gamma_{(2),(2)}\ne0$ is an ordinary partition from $8$ on; combined with steps 1.2 and 2.1 this verifies the displayed stability claim and its minimality directly from the finite data and the theorem. [F3, step 2.1]

4.1 *Consistency of the first two ranks.* At rank four the product has coefficient $1$ of $s_{2,2}$, while the reduced coefficient is $\bar g^{(2)}_{(2),(2)}=2$; this is the coalescence phenomenon of the all-admissible-rank theorem at a small admissible rank, already visible in the displayed data, and it is not in conflict with the exact threshold, which is a statement about the whole product from rank eight on. [F3, step 1.1, step 1.3] ∎
