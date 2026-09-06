---
id: lem-elementary-detection-at-a-fixed-element
kind: lemma
title: Elementary detection at a fixed element
status: draft
origin: pipeline
deps: [def-p-elementary-and-p-hyperelementary-finite-groups, def-induction-ideal-of-a-family-of-subgroups, lem-induction-ideal-of-a-subgroup-family-is-an-ideal, lem-p-primary-character-value-congruence, lem-cyclic-generator-class-functions-by-moebius-inversion, def-sylow-p-subgroup, thm-frobenius-formula-for-induced-characters]
proof_strategy: construct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: János Kramár, Artin's and Brauer's Theorems on Induced Characters, Lemma 5
      url: https://www.math.toronto.edu/murnaghan/courses/mat445/artinbrauer.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

If $|G|=p^nl$ with $p\nmid l$, then $l\,1_G\in I_{\mathcal E_p}(G)$, where $\mathcal E_p$ is the family of $p$-elementary subgroups of $G$.

## Facts & Assumptions

[F1] The induced-character value formula is [[thm-frobenius-formula-for-induced-characters]].

[F2] The cyclotomic coefficient congruence is [[lem-p-primary-character-value-congruence]].

[F3] The integral induction subgroup is an ideal by [[lem-induction-ideal-of-a-subgroup-family-is-an-ideal]].

## Proof

**Given:** $R$ is a set of conjugacy-class representatives of $p'$-elements of $G$.

1.1 Put $A=\mathbb Z[\zeta_{|G|}]$. For $r\in R$, choose a Sylow $p$-subgroup $P_r$ of $C_G(r)$ and set $H_r=\langle r\rangle\times P_r$. On $\langle r\rangle$ the delta function $\chi_r(c)=|\langle r\rangle|\delta_{c,r}$ lies in $A R(\langle r\rangle)$ by Fourier inversion on this cyclic group. Inflate it across $P_r$ to $\psi_r\in A R(H_r)$ and form the following sum. [given, construct]

$$\psi=\sum_{r\in R}\operatorname{Ind}_{H_r}^G\psi_r.$$

[given, construct]

2.1 This lies in the $A$-scalar extension of $I_{\mathcal E_p}(G)$.  Each $\psi_r$ is integer-valued, so the induction formula makes every value of $\psi$ rational.  On the other hand $\psi$ is an $A$-linear combination of characters, hence all its values are algebraic integers.  A rational algebraic integer is an integer, so $\psi$ is integer-valued. [step 1.1, algebra]

3.1 If $r_0\in R$, a conjugate of $r_0$ lying in $H_r$ lies in $\langle r\rangle$. The definition of $\chi_r$ and [F1] therefore give the following value. [F1, step 2.1]

$$\bigl(\operatorname{Ind}_{H_r}^G\psi_r\bigr)(r_0) =\delta_{r,r_0}\frac{|C_G(r)|}{|P_r|}.$$

4.1 Thus $\psi(r_0)$ is an integer prime to $p$. For arbitrary $g$, its $p'$-part is conjugate to some $r_0\in R$, so [F2] shows that $\psi(g)\equiv\psi(r_0)\not\equiv0\pmod p$. [F2, step 2.1, step 3.1]

5.1 Assume first that $n\ge1$ and put $e=p^{n-1}(p-1)$. Euler's congruence gives $\psi(g)^e\equiv1\pmod {p^n}$ for every $g$. Hence the integer-valued class function $l(\psi^e-1_G)$ is pointwise divisible by $|G|$. The cyclic-generator identity [[lem-cyclic-generator-class-functions-by-moebius-inversion]], followed by the projection formula, shows that $|G|$ times any integer-valued class function belongs to the $A$-span of inductions from cyclic subgroups. Those subgroups are $p$-elementary, so $l(\psi^e-1_G)$ lies in the $A$-scalar extension of $I_{\mathcal E_p}(G)$. The same is true of $l\psi^e$ by [F3] and step 1.1. Subtraction puts $l1_G$ in that scalar extension. [F3, step 1.1, step 4.1, algebra]

6.1 The cyclotomic ring $A$ is a finite free $\mathbb Z$-module and $A/\mathbb Z$ is torsion-free, so choose a $\mathbb Z$-basis of $A$ containing $1$. Expand the relation from step 5.1 in this basis and take its coefficient of $1$. Since all inducing characters there lie in integral character rings, this yields $l1_G\in I_{\mathcal E_p}(G)$. If $n=0$, then $l=|G|$ and the same integral relation follows directly from the cyclic-generator identity; cyclic subgroups are $p$-elementary in this case. $\square$ [step 5.1, algebra]
