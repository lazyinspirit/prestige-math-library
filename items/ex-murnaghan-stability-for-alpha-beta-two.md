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
       thm-murnaghan-expansion-for-all-admissible-ranks,
       def-first-row-padding-completion-and-the-stabilization-operator]
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
internal products $s_{n-2,2}*s_{n-2,2}$ at ranks $n=4,\dots,9$
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

**Given:** $\alpha=\beta=(2)$, so $\alpha[n]=\beta[n]=(n-2,2)$ for $n\ge4$. The displayed source products are to be verified, rather than assumed.

[F1] Jacobi–Trudi expresses $s_\delta$ as a determinant in $h_j$, and $h_j=\sum_{\rho\vdash j}p_\rho/z_\rho$, with $\chi^\delta(\rho)=z_\rho[p_\rho]s_\delta$ ([[thm-jacobi-trudi-and-dual-jacobi-trudi-identities]], [[lem-complete-homogeneous-expansion-in-power-sums]], [[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]]). A cycle class has $n!/z_\rho$ elements: arrange the $n$ distinct letters in cycle blocks, then divide by the rotations of each block and permutations of equal-length blocks. Thus the triple-character average is $g^\delta_{\mu,\nu}=\sum_{\rho\vdash n}\chi^\delta(\rho)\chi^\mu(\rho)\chi^\nu(\rho)/z_\rho$ ([[prop-kronecker-coefficient-is-a-three-character-inner-product]]).

[F2] Tensor-product multiplicities are the Schur structure constants of the internal product ([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]], [[def-kronecker-coefficient-and-internal-tensor-product]]).

[F3] At every admissible rank the product is $U_nR_{(2),(2)}$. Proof step 1.2 of [[thm-murnaghan-expansion-for-all-admissible-ranks]] computes locally $R_{(2),(2)}=1+s_{(1)}+2s_{(2)}+s_{(1,1)}+s_{(1,1,1)}+2s_{(2,1)}+s_{(2,2)}+s_{(3)}+s_{(3,1)}+s_{(4)}$, with these Schur coefficients equal to the reduced coefficients. All support labels are ordinary partitions for $n\ge8$, and the least global stabilization index is $8$ ([[thm-exact-global-stabilization-threshold-for-a-fixed-kronecker-product]]).

[F4] $U_n(s_\gamma)=s_{\gamma[n]}$ is computed by sorting the integers $q_j=\gamma[n]_j+\ell(\gamma[n])-j$: repetitions or a negative minimum give zero, and otherwise the sorting sign and the resulting partition give its Schur value. For any ordinary partition $\delta$, $V(s_\delta)=s_{\delta+(1)}$; thus $V^k(s_{\gamma[n]})=s_{\gamma[n+k]}$ whenever $n\ge|\gamma|+\gamma_1$ ([[def-first-row-padding-completion-and-the-stabilization-operator]], [[def-first-row-padding-of-a-partition]]).

## Verification

**Proof technique:** direct.

1.1 *Rank four from characters.* By [F1], the five $S_4$ Schur functions are $s_{(4)}=h_4$, $s_{(3,1)}=h_3h_1-h_4$, $s_{(2,2)}=h_2^2-h_3h_1$, $s_{(2,1,1)}=h_2h_1^2-h_2^2-h_3h_1+h_4$, and $s_{(1,1,1,1)}=h_1^4-3h_2h_1^2+h_2^2+2h_3h_1-h_4$. Substituting the complete-function expansions and multiplying each $p_\rho$ coefficient by $z_\rho$ gives the character rows $(1,1,1,1,1)$, $(3,1,-1,0,-1)$, $(2,0,2,-1,0)$, $(3,-1,-1,0,1)$, $(1,-1,1,1,-1)$ on the cycle types $(1^4),(2,1,1),(2,2),(3,1),(4)$ respectively; here $z_\rho=(24,4,8,3,4)$. The squared $(2,2)$ character row is $(4,0,4,1,0)$. The triple-character sums are $g^{(4)}=4/24+4/8+1/3=1$, $g^{(1,1,1,1)}=4/24+4/8+1/3=1$, $g^{(2,2)}=8/24+8/8-1/3=1$, and $g^{(3,1)}=g^{(2,1,1)}=12/24-4/8=0$. Hence [F2] gives $s_{(2,2)}*s_{(2,2)}=s_{(4)}+s_{(1,1,1,1)}+s_{(2,2)}$. The dimension check is $1+1+2=4=2^2$. [F1, F2]

1.2 *All six products from local straightening.* Apply $U_n$ to the ten-term polynomial of [F3]. The five tails $\varnothing,(1),(2),(1,1),(1,1,1)$ are already admissible for every $n\ge4$. For the remaining five tails, sorting the $q_j$ of [F4] gives the following values at ranks $4,5,6,7$; each becomes its ordinary padded Schur function once its threshold $|\gamma|+\gamma_1$ is reached: $\begin{array}{c|cccc}\gamma&4&5&6&7\\\hline(2,1)&0&s_{(2,2,1)}&s_{(3,2,1)}&s_{(4,2,1)}\\(2,2)&0&0&s_{(2,2,2)}&s_{(3,2,2)}\\(3)&-s_{(2,2)}&0&s_{(3,3)}&s_{(4,3)}\\(3,1)&-s_{(2,1,1)}&-s_{(2,2,1)}&0&s_{(3,3,1)}\\(4)&-s_{(3,1)}&-s_{(3,2)}&-s_{(3,3)}&0\end{array}$. Multiplying by the coefficients in [F3] and collecting terms yields precisely the four displayed products at ranks $4$ through $7$. At ranks $8,9$ every tail is admissible, and padding the same polynomial yields precisely the two displayed products, including zeros for every unlisted Schur label. This verifies the six products without assuming the source table. [F3, F4]

2.1 *The reduced coefficients and stable ranks.* By [F3], the ten coefficients of $R_{(2),(2)}$ are exactly the listed reduced coefficients, and all others vanish. For $n\ge8$, [F4] sends each padded label to its rank-$(n+1)$ padding without changing its coefficient. Thus the rank-eight product maps to the rank-nine product term by term, and [F3] proves stability for all later ranks, with exact index $8=2+2+2+2$. [F3, F4, step 1.2]

2.2 *Failure at rank seven.* The rank-seven expansion has the nine labels $(7),(4,1,1,1),(5,2),(6,1),(5,1,1),(4,2,1),(3,2,2),(4,3),(3,3,1)$, with coefficients $1,1,2,1,1,2,1,1,1$. Increasing their first parts by one gives exactly the rank-eight expansion minus $s_{(4,4)}$. That last term has coefficient one and is outside the image of $V$, since every $V(s_\delta)$ has strictly larger first part than second part. Hence the rank-eight product is not $V$ of the rank-seven product. [F4, step 1.2]

3.1 *The individual coefficient.* The computed rank-four and rank-five products have coefficient one at their $(n-2,2)$ labels; ranks six and seven have coefficient two, and every $n\ge8$ has the reduced coefficient two by step 2.1. Thus this coefficient first becomes constant at rank six, while the whole product first becomes $V$-stable at rank eight. All computations and comparisons are finite, and no choice principle is used. [step 1.1, step 1.2, step 2.1, step 2.2] ∎
