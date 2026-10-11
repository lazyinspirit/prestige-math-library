---
id: lem-cyclic-type-a-cyclotomic-klr-regular-hom-norm-gives-total-dimension
kind: lemma
title: "Cyclic type-A KLR regular Hom norm gives the total dimension"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 10
deps: [def-cyclic-affine-type-a-cartan-datum,
       def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-cyclotomic-klr-induction-and-restriction-functors,
       def-graded-grothendieck-group-shift-module-and-cartan-map,
       lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings,
       thm-cyclotomic-klr-induction-is-projective-on-the-right,
       thm-cyclotomic-klr-sl-two-categorical-commutator,
       lem-cyclotomic-normalized-functors-give-an-integrable-quantum-action]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Kang and Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Sections 4–6: projectivity, first adjunction and signed categorical mixed relations; the local dimension recurrence below is supplied explicitly."
---

## Statement

Let $F$ be any field, $I=\mathbb Z/e\mathbb Z$ with finite $e\ge2$, and use the
standard homogeneous cyclotomic KLR quotient at $\Lambda=\sum_i\lambda_i\Lambda_i$
for the cyclic affine type-A Cartan datum and admissible graded parameters
([[def-cyclic-affine-type-a-cartan-datum]],
[[def-cyclotomic-klr-quotient-at-a-dominant-weight]]). Put
$\ell=\sum_i\lambda_i$ and
$$B_d=\bigoplus_{\operatorname{ht}\beta=d}R^\Lambda(\beta).$$
Then $\dim_FB_d=\ell^dd!$ for $d>0$, and $B_0=F$ has dimension one. The proof
uses the basic first induction-restriction adjunction and the mixed relations
on projective $K_0$ modulo $v-1$, where $v$ is the formal grading variable,
independent of any Hecke parameter $q_H$. No Frobenius theorem, tensor-form
perfectness, highest-weight or global-basis isometry, or Hecke basis is
required. If $\ell=0$ and $d>0$, then $B_d=0$.

**Open obligation.** The proof consumes the sibling suppliers
[[thm-cyclotomic-klr-induction-is-projective-on-the-right]] (step 3.1),
[[thm-cyclotomic-klr-sl-two-categorical-commutator]] (step 2.1) and
[[lem-cyclotomic-normalized-functors-give-an-integrable-quantum-action]]
(step 2.1); if any of these is not yet authored, this item's decision stays
escalated until the supplier and the exact use are reconciled.

## Facts & Assumptions

**Given:** The cyclic affine type-A Cartan datum with finite $e\ge2$, the
dominant weight $\Lambda$ of level $\ell$, the standard cyclotomic KLR quotient
$R^\Lambda=\bigoplus_\beta R^\Lambda(\beta)$, its rank pieces $B_d$, and the
induction and restriction functors $F_i^{\mathrm{basic}},E_i^{\mathrm{basic}}$
(right append and its adjoint)
([[def-cyclotomic-klr-induction-and-restriction-functors]],
[[def-cyclotomic-klr-quotient-at-a-dominant-weight]]).

[F1] The corner idempotents $e(\beta,i)$ are orthogonal and sum to the local
unit $1_{B_d}$; left multiplication by $R^\Lambda(\beta+i)e(\beta,i)$ gives an
isomorphism $B_de(\beta,i)\otimes_{R^\Lambda(\beta)}R^\Lambda(\beta)\cong B_de(\beta,i)$
with inverse $b\mapsto b\otimes1$, using only the unital corner homomorphism
$A\to eAe$
([[def-cyclotomic-klr-induction-and-restriction-functors]],
[[def-cyclotomic-klr-quotient-at-a-dominant-weight]]).

[F2] On projective $K_0$ modulo $v-1$ the same-color categorical decomposition
forgets to $[E_i^{\mathrm{basic}},F_i^{\mathrm{basic}}]=h_i(\Lambda-\beta)\operatorname{Id}$
on the root component $\beta$, and the unequal-color mixed relation forgets to
$[E_i^{\mathrm{basic}},F_j^{\mathrm{basic}}]=0$ for $i\ne j$
([[thm-cyclotomic-klr-sl-two-categorical-commutator]],
[[lem-cyclotomic-normalized-functors-give-an-integrable-quantum-action]]).

[F3] The rank-$d$ basic projectives are $B_d$ itself, all restricted modules
remain finite projective, and the first adjunction
$F_i^{\mathrm{basic}}\dashv E_i^{\mathrm{basic}}$ holds
([[thm-cyclotomic-klr-induction-is-projective-on-the-right]],
[[def-graded-grothendieck-group-shift-module-and-cartan-map]]).

[F4] For finite graded projectives the pairing
$h(P,Q)=\dim_F\operatorname{Hom}(P,Q)$ with grading forgotten (equivalently the
total graded Hom Hilbert series evaluated at $v=1$) is additive, invariant
under shifts and descends to the $K_0$ quotient of [F3]
([[def-graded-grothendieck-group-shift-module-and-cartan-map]]).

## Proof

**Proof technique:** direct.

**Given:** The cyclic KLR data of [F1]–[F4], the operators

$D=\sum_iF_i^{\mathrm{basic}}$, $E=\sum_iE_i^{\mathrm{basic}}$ on projective

$K_0$ modulo $v-1$, and the classes $P_d=[B_d]$, $P_0=[F]$.

1.1 Rank decomposition. For fixed $d$, the corner idempotents $e(\beta,i)$ over all root components $\beta$ of height $d-1$ and colors $i$ are orthogonal and sum to $1_{B_d}$: each word has exactly one last color and one prefix root, so it lies in exactly one corner. By [F1] the multiplication map $\bigoplus_{\beta,i}B_de(\beta,i)\otimes_{R^\Lambda(\beta)}R^\Lambda(\beta)\to B_d$ is an isomorphism; spelling out the left action by the basic induction functor gives $P_d=DP_{d-1}=D^dP_0$. The zero-corner case gives $B_de(\beta,i)=0$ and is included since its summand is zero. [F1, F3, algebra]

1.2 The mixed commutators at $v=1$. Forgetting the grading shifts in the same-color categorical decomposition gives $[E_i^{\mathrm{basic}},F_i^{\mathrm{basic}}]=h_i(\Lambda-\beta)\operatorname{Id}$ on the root component $\beta$; its positive identity summands contribute $h_i$ copies and its negative identity summands contribute the signed counterpart, so the integral $[h_i]_v$ specializes at $v=1$ to the integer $h_i$ with no division by $v-v^{-1}$. The unequal-color mixed relation gives $[E_i^{\mathrm{basic}},F_j^{\mathrm{basic}}]=0$ for $i\ne j$. Hence $[E,D]=\sum_i[E_i^{\mathrm{basic}},F_i^{\mathrm{basic}}] =\Bigl(\sum_ih_i(\Lambda-\beta)\Bigr)\operatorname{Id}$ on root component $\beta$. For affine type A every Cartan column sums to zero, including the double-edge matrix at $e=2$, so $\sum_ih_i(\Lambda-\beta)=\sum_i\lambda_i-\sum_j\beta_j\sum_ia_{ij}=\ell$ independently of $\beta$. Therefore $[E,D]=\ell\cdot\operatorname{Id}$, and since rank-zero restriction is zero, $EP_0=0$; expanding $[E,D^d]=d\ell D^{d-1}$ gives $EP_d=d\ell\,P_{d-1}$. [F2, algebra]

2.1 The Hom-norm recurrence. For finite graded projectives define $h$ as in [F4]; it is additive in both variables, unchanged by shifts, and descends to projective $K_0$ modulo $v-1$. Pairing distinct root blocks by zero and summing over a fixed rank, the ordinary first adjunction $F_i^{\mathrm{basic}}\dashv E_i^{\mathrm{basic}}$ gives $h(F_i^{\mathrm{basic}}P,Q)=h(P,E_i^{\mathrm{basic}}Q)$, hence $h(DP,Q)=h(P,EQ)$; all restricted modules remain finite projectives by [F3], so the recurrence stays inside the declared group. Combining with step 1.2, $h(P_d,P_d)=h(DP_{d-1},P_d)=h(P_{d-1},EP_d) =d\ell\,h(P_{d-1},P_{d-1}).$ [F3, F4, step 1.1, step 1.2, algebra]

3.1 Conclusion. The initial value is $h(P_0,P_0)=\dim_F\operatorname{End}_F(F)=1$; since $\operatorname{End}_{B_d}(B_d)\cong B_d^{\mathrm{op}}$ by right multiplication, $h(P_d,P_d)=\dim_FB_d$, and induction on $d$ gives $\dim_FB_d=\ell^dd!$ as an ordinary integer. Nothing reduces the integer dimension or the factor $d\ell$ inside $F$, so the argument covers every field characteristic; for $\ell=0$ and $d>0$ the recurrence gives $\dim_FB_d=0$; and for $d=0$, independently of $\ell$, $B_0=F$ has the singleton empty monomial as basis. No Frobenius theorem, tensor-form perfectness, highest-weight or global-basis isometry, Hecke basis or choice principle is used. [step 1.1, step 2.1] ∎

## Remarks

This is the independent dimension input used by the later exact basis
theorem: the rank pieces satisfy the recurrence $h(P_d,P_d)=d\ell\,h(P_{d-1},P_{d-1})$
inside projective $K_0$, so the total dimension $\ell^dd!$ is obtained without
any global basis or Hecke-theoretic input. The three sibling suppliers named in
the Statement remain an open obligation until they are authored and their uses
reconciled.
