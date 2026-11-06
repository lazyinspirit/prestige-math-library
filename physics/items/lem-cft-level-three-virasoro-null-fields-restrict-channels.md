---
id: lem-cft-level-three-virasoro-null-fields-restrict-channels
kind: lemma
title: A level-three Virasoro null relation restricts primary channels
dependency_level: 0
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: cft-triplet-strong-generation-and-endpoint-modules
physical_scope: Pure mathematics; no physical premises or physical claim.
axiom_base: "ZF"
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
deps:
  - def-virasoro-algebra
  - def-virasoro-highest-weight-module
  - def-formal-distribution-on-a-vector-space
dependency_roles:
  def-virasoro-algebra: mathematical-premise
  def-virasoro-highest-weight-module: mathematical-premise
  def-formal-distribution-on-a-vector-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Adamović and Milas, On the triplet vertex algebra W(p)
      url: https://arxiv.org/pdf/0707.1857v2
      locator: 'Theorem 3.7, necessary part of the displayed three-channel restriction (3.18); this proof uses an explicit null relation and does not import Frenkel–Zhu theory or assert sufficiency.'
---

## Statement

Fix $p\ge2$, $c=1-6(p-1)^2/p$ and $d=2p-1$. In every module below, the central Virasoro generator acts as $cI$. A highest-weight module here means the algebraic span of finite Virasoro mode words on a nonzero vector $u_h$ with $L(0)u_h=hu_h$ and $L(n)u_h=0$ for every $n>0$. Let $A$ be the algebraically generated module on such a vector $v$ of weight $d$; this vector is called primary. Suppose
$$\left(L(-1)^3-4pL(-2)L(-1)+2p(2p-1)L(-3)\right)v=0.$$
Let $B=L(c,h_2)$ and $C=L(c,h_3)$ be nonzero simple highest-weight modules with top vectors $u_2,u_3$. Simple means that the only subspaces invariant under every $L(n)$ and the central Virasoro generator are zero and the whole module. The notation $L(c,h)$ refers to a simple highest-weight module with central charge $c$ and top weight $h$. For an algebraically generated highest-weight module with top weight $h$, write $M[h+k]$ for its $L(0)$-eigenspace of weight $h+k$, $k\ge0$; these eigenspaces form an algebraic direct sum and $M[h]=\mathbb C u_h$.

A formal Virasoro intertwining field $I$ from $A\times B$ to $C$ is a complex-linear assignment whose value $I(w,z)$ is a formal series of linear maps $B\to C$. Write $A[d+j]$, $B[h_2+k]$, and $C[h_3+\ell]$ for the preceding weight spaces. For homogeneous $w\in A[d+j]$ and $b\in B[h_2+k]$, require
$$I(w,z)b=\sum_{\ell\ge0}c_\ell z^{h_3+\ell-h_2-k-d-j},\qquad c_\ell\in C[h_3+\ell].$$
This gives coefficientwise lower truncation and fixes the weight convention; for complex powers use $\partial_z z^\rho=\rho z^{\rho-1}$. The field must satisfy the identities below for all $w\in A$ and $n\in\mathbb Z$. Such a field can be nonzero only if, for a choice $x\in\mathbb C$ with $4ph_2=x^2-(p-1)^2$,
$$h_3\in\left\{h_2,\frac{(x-2p)^2-(p-1)^2}{4p},\frac{(x+2p)^2-(p-1)^2}{4p}\right\}.$$
For integers $r,s$, write $h_{r,s}=((r-sp)^2-(p-1)^2)/(4p)$. In particular, if $h_2=h_{r,s}$, the allowed set is $\{h_{r,s-2},h_{r,s},h_{r,s+2}\}$. This is a necessary restriction only: neither existence nor multiplicity one is asserted.

The required identities are
$$I(L(-1)w,z)=\partial_z I(w,z),$$
$$[L(n),I(w,z)]=\sum_{j\ge0}\binom{n+1}{j}z^{n+1-j}I(L(j-1)w,z),$$
$$I(L(-r)w,z)=\operatorname{Res}_y\left(\iota_{y,z}(y-z)^{1-r}T_C(y)I(w,z)-\iota_{z,y}(y-z)^{1-r}I(w,z)T_B(y)\right)\quad(r\ge2).$$
In the commutator, $L(n)$ acts as $L_C(n)$ on the target and as $L_B(n)$ on the source. Also $T_B(y)=\sum_nL_B(n)y^{-n-2}$ and $T_C(y)=\sum_nL_C(n)y^{-n-2}$. Each residue is the coefficient of $y^{-1}$; $\iota_{y,z}$ and $\iota_{z,y}$ mean formal binomial expansion in nonnegative powers of $z/y$ and $y/z$, respectively. No convergence or analytic continuation is used. These identities and grading conditions are the precise intertwining hypotheses in this statement.

## Statement references

[[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]]

[[def-virasoro-highest-weight-module]]

[[def-formal-distribution-on-a-vector-space]]

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the Statement.

[A1] The central charge, algebraically generated modules, primary state, level-three state relation, simple highest-weight source and target modules, grading conditions, and all formal-field identities in the Statement are assumed. The conclusion is conditional on these hypotheses and asserts only a necessary target-weight restriction.

[F1] [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]] fixes $[L(m),L(n)]=(m-n)L(m+n)+(m^3-m)\delta_{m+n,0}c/12$.

[F2] [[def-virasoro-highest-weight-module]] fixes the highest-weight convention. [[def-formal-distribution-on-a-vector-space]] supplies coefficientwise formal residues and the two binomial expansions used below. The field identities themselves are explicitly assumed in the Statement.

## Proof

1.1 The Virasoro bracket [F1] gives $[L(0),L(-r)]=rL(-r)$ for $r\ge1$. In each algebraically generated highest-weight module, reorder any finite mode word by $XY=YX+[X,Y]$, moving negative modes left, zero and central modes next, and positive modes right; induction on word length for bracket terms and inversion count for swaps terminates. Positive modes then kill the top vector, and $L(0)$ and the central generator act by scalars. Thus negative-mode words span, each has weight equal to the top weight plus the sum of its mode indices, and only the empty word has grade zero. Distinct eigenspaces are linearly independent, so this proves the algebraic gradings and top lines stated above. Let $u_2,u_3$ be the top vectors of $B,C$. If $I(v,z)u_2=0$, then for each $m\ge1$ the commutator formula with $n=-m$ expresses $I(v,z)L_B(-m)u_2$ through $L_C(-m)I(v,z)u_2$, $I(v,z)u_2$, and $\partial_zI(v,z)u_2$: because $v$ is primary, the only terms in the commutator are those involving $L(-1)v$ and $L(0)v$. All vanish. Induction on negative-mode words shows $I(v,z)$ vanishes on $B$; the derivative identity and descendant-residue identities then give $I(w,z)=0$ for every Virasoro descendant $w$ of $v$, so $I=0$ on $A$. Thus for nonzero $I$ we have $I(v,z)u_2\ne0$. The grading condition implies that the coefficient of $z^{h_3-h_2-d+\ell}$ lies in $C[h_3+\ell]$. Lower truncation gives a least target grade with nonzero coefficient. For each $n>0$, the primary commutator $$[L(n),I(v,z)]=z^n\left(z\partial_z+(n+1)d\right)I(v,z)$$ shows coefficientwise that $L_C(n)$ sends this coefficient to a lower-grade coefficient, which is zero. Hence it is singular. A positive-grade singular vector in simple $C$ would generate a proper submodule, because its descendants have weights strictly above the highest weight; thus the least nonzero coefficient is in grade zero. Let $u_3^*$ be the linear functional equal to $1$ on $u_3$ and zero on all positive grades. The $L(0)$ identity then gives $$g(z):=u_3^*(I(v,z)u_2)=C_0z^a,\qquad C_0\ne0,\quad a=h_3-d-h_2.$$ [given, A1, F1, F2, algebra]

2.1 For any $w\in A$ put $g_w(z)=\langle u_3^*,I(w,z)u_2\rangle$. In the $k=2$ descendant-residue identity, the target-side expansion is $(y-z)^{-1}=\sum_{j\ge0}z^jy^{-j-1}$; after multiplication by $T_C(y)$ its residue contains only $L_C(-2-j)$, whose pairing with $u_3^*$ is zero because these modes raise target weight. The source-side expansion is $(y-z)^{-1}=-\sum_{j\ge0}y^jz^{-j-1}$; the outside minus sign leaves the $L_B(-1)$ and $L_B(0)$ terms. In the $k=3$ identity the expansions are $\sum_{j\ge0}(j+1)z^jy^{-j-2}$ and $\sum_{j\ge0}(j+1)y^jz^{-j-2}$; the target residue again contains only negative modes, and the source residue has $L_B(-1)$ and $L_B(0)$ with coefficients $-z^{-2}$ and $-2z^{-3}$. Positive source modes annihilate $u_2$. The $n=-1$ commutator and derivative identity yield $\langle u_3^*,I(w,z)L_B(-1)u_2\rangle=-g_w'(z)$, while $L_B(0)u_2=h_2u_2$. Therefore $$\langle u_3^*,I(L(-2)w,z)u_2\rangle=h_2z^{-2}g_w(z)-z^{-1}g_w'(z),\qquad \langle u_3^*,I(L(-3)w,z)u_2\rangle=-2h_2z^{-3}g_w(z)+z^{-2}g_w'(z).$$ These are coefficientwise residue calculations; no contour deformation or analytic continuation is used. [given, A1, F2, step 1.1, algebra]

3.1 Apply the derivative identity and step 2.1 to the three descendants in the null relation, using $g(z)=C_0z^a$ from step 1.1. Their top coefficients are respectively $a(a-1)(a-2)C_0z^{a-3}$, $(h_2a-a(a-1))C_0z^{a-3}$, and $(a-2h_2)C_0z^{a-3}$. Since the null state is zero and $C_0\ne0$, its image coefficient gives $$a(a-1)(a-2)-4p\bigl(h_2a-a(a-1)\bigr)+2p(2p-1)(a-2h_2)=0.$$ Substitute $4ph_2=x^2-(p-1)^2$ and expand; the left side factors as $$(a-(1-2p))(a-(1-p+x))(a-(1-p-x)).$$ Thus $a$ is one of those three roots. Since $h_3=h_2+d+a$ and $d=2p-1$, the roots yield $h_3=h_2$, $h_3=((x+2p)^2-(p-1)^2)/(4p)$, or $h_3=((x-2p)^2-(p-1)^2)/(4p)$. If $h_2=h_{r,s}$, take $x=r-sp$; replacing $x$ by $x\pm2p$ changes $s$ to $s\mp2$. This proves only the stated necessary restriction. [given, A1, step 1.1, step 2.1, algebra] ∎
