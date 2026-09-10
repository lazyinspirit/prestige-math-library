---
id: ex-defect-and-brauer-pairs-for-a4-in-characteristic-three
kind: example
title: Defect and Brauer pairs for a4 in characteristic three
deps: [thm-defect-groups-are-maximal-brauer-support, thm-brauer-pair-order-is-independent-of-the-normal-chain, thm-maximal-brauer-pairs-detect-defect-groups]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Jacobsen, Block fusion systems and the center of the group ring, Example 2.12; coefficients and primitivity verified above
      url: https://www.math.ku.dk/bibliotek/arkivet/phd-theses/phd14mwj.pdf
proof_strategy: direct
---

## Example

Let $k$ be a field of characteristic $3$, $G=A_4$, and $V=\{1,a,b,c\}$ its normal Klein four subgroup. The two blocks are $e=1+a+b+c$ and $f=1-e=2(a+b+c)$. The $e$-pairs are $(1,e)$ and the four pairs $(P,1)$ with $P$ Sylow of order $3$; the only $f$-pair is $(1,f)$. Thus $e$ has Sylow defect and $f$ has defect $1$.

## Facts & Assumptions

**Given:** The displayed group and field; choose $t=(123)$ generating a complement to $V$.

[F1] Defects are maximal nonzero Brauer-support subgroups. ([[thm-defect-groups-are-maximal-brauer-support]])

[F2] Inclusion above the trivial subgroup is exactly the normal product criterion. ([[thm-brauer-pair-order-is-independent-of-the-normal-chain]])

[F3] Pairs on defect groups are precisely maximal pairs. ([[thm-maximal-brauer-pairs-detect-defect-groups]])

## Verification

**Proof technique:** direct.

1.1 The four characters $\chi:V\to\{1,-1\}\subset k^\times$ give $q_\chi=\frac14\sum_{v\in V}\chi(v)v$. For characters $\chi,\psi$, the coefficient calculation in their product uses $\sum_{v\in V}\chi(v)\psi(v)=4$ if $\chi=\psi$, and $0$ otherwise: a nontrivial sign character has two values of each sign. Hence $q_\chi q_\psi=\delta_{\chi\psi}q_\chi$ and their sum is $1$. Each $kVq_\chi$ is one-dimensional, since $vq_\chi=\chi(v)q_\chi$. As $4=1$ in $k$, the trivial character idempotent is $e$. Conjugation by $t$ cycles the three nontrivial characters and fixes $e$. Thus $e,f$ are orthogonal central idempotents of $kG$. [given]

2.1 The algebra $ekG$ has basis $e,et,et^2$ and multiplication $(et^i)(et^j)=et^{i+j}$. It is $kC_3\cong k[u]/((u-1)^3)$ and is local: writing $x=\lambda+n$ with $n$ in the nilpotent ideal $(u-1)$, it is a unit if $\lambda\ne0$ by the finite geometric inverse, and is nilpotent otherwise. Its only idempotents are $0,1$, since for an idempotent one of it and its complement is a unit. Therefore $e$ is primitive central. [step 1.1]

2.2 Choose a nontrivial character idempotent $q$ and put $E_{ij}=t^i q t^{-j}$ for $0\le i,j<3$. For $j\ne l$, $q t^{l-j}q=q({}^{t^{l-j}}q)t^{l-j}=0$; for $j=l$ the middle product is $q$. Thus $E_{ij}E_{lm}=\delta_{jl}E_{im}$ and $\sum E_{ii}=f$. These nine nonzero elements are linearly independent: multiplying a relation on left and right by suitable matrix units isolates each coefficient times a nonzero unit. The dimension of $fkG$ is $3\dim(fkV)=9$, so these units give $fkG\cong M_3(k)$. Its centre is $k f$ (commuting with the diagonal and then off-diagonal units forces a scalar diagonal), so $f$ is primitive central. Since $e+f=1$, there are no further blocks. [step 1.1]

3.1 The eight $3$-cycles partition into four order-three subgroups, and these and $1$ are all $3$-subgroups of $A_4$. The centralizer of a $3$-cycle in $S_4$ consists of its three powers, since a commuting permutation must preserve its three-point orbit and fixed point; hence $C_G(P)=P$. None of $a,b,c$ lies in it. Coefficient projection therefore gives $\operatorname{Br}_P(e)=1$ and $\operatorname{Br}_P(f)=0$. The algebra $kP$ is local by the same calculation as step 2.1, so its only block is $1$. At the identity subgroup projection is the identity. Thus the complete pair lists are as stated. [step 2.1, step 2.2]

4.1 By [F1], the four nonzero-support Sylow subgroups are the defect groups of $e$, and $1$ is the defect group of $f$. By [F2], $(1,e)\le(P,1)$ because the computed product is $1$, while no such pair exists for $f$. Different order-three subgroups are incomparable. By [F3] precisely the four displayed $P$-pairs and the sole $f$-pair are maximal. [F1, F2, F3, step 3.1] ∎

## Sources

Jacobsen, Block fusion systems and the center of the group ring, Example 2.12; coefficients and primitivity verified above. Local argument and conventions as displayed above.
