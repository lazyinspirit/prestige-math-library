---
id: lem-strebel-class-is-inherited-by-subgroups
kind: lemma
title: Strebel's class is inherited by subgroups
status: draft
origin: session
deps: [def-integral-half-solutions-strebel-and-l2-signatures, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Jae Choon Cha, Amenable L2-Theoretic Methods and Knot Concordance, Strebel-class conventions
      url: https://arxiv.org/pdf/1010.1058
---

## Statement

Assume full AC as in the chosen integral-solution and Strebel-class convention. Let $R=\mathbb Q$ or $R=\mathbb F_p$ for a prime $p$, let $G\in D(R)$, and let $H\le G$. Then $H\in D(R)$. The conclusion holds for right-module or left-module projective conventions.

## Statement references

[[def-integral-half-solutions-strebel-and-l2-signatures]]

## Facts & Assumptions

**Given:** The group inclusion, coefficient ring, and $G\in D(R)$.

[A1] Full AC is the standing assumption of the specified coefficient convention; the finite algebraic argument below adds no choice use. [[def-axiom-of-choice]]

[F1] Membership in $D(R)$ means that a homomorphism of projective group-ring modules is injective whenever tensoring with the trivial module $R$ makes it injective. [[def-integral-half-solutions-strebel-and-l2-signatures]]

## Proof

1.1 Use right modules and write $A=RH$, $B=RG$. Let $f:P\to Q$ be any homomorphism between projective right $A$-modules whose augmentation $f\otimes_A R$ is injective. Induction makes $P\otimes_A B$ and $Q\otimes_A B$ projective right $B$-modules: if $P\oplus P'$ is free with supplied basis indexed by $I$, tensoring its splitting gives $(P\otimes_A B)\oplus(P'\otimes_A B)\cong\bigoplus_I B$, and likewise for $Q$. This argument uses the splitting maps themselves and does not require a chosen family of coset representatives. [F1, given, construct, algebra]

2.1 The augmentation of $f\otimes_A B$ identifies with $f\otimes_A R$. Explicitly the natural isomorphism $(P\otimes_A B)\otimes_B R\to P\otimes_A R$ sends $(p\otimes b)\otimes r$ to $p\otimes\epsilon(b)r$, with inverse $p\otimes r\mapsto(p\otimes1)\otimes r$, and the same formula for $Q$ commutes with $f$. The balancing relations follow from the augmentation homomorphism, so these maps are well-defined inverses. By $G\in D(R)$ and step 1.1, $f\otimes_A B$ is therefore injective. [F1, step 1.1, construct, algebra]

3.1 Define $\pi_H:B\to A$ by retaining precisely the coefficients of group elements in $H$ and deleting all other coefficients. This is an $A$-bimodule map: for $h_1,h_2\in H$, an element $h_1gh_2$ belongs to $H$ exactly when $g$ belongs to $H$, so $\pi_H(h_1bh_2)=h_1\pi_H(b)h_2$. Consequently the unit map $j_P:P\to P\otimes_A B$, $p\mapsto p\otimes1$, is split by $\rho_P(p\otimes b)=p\pi_H(b)$. The latter is well-defined by left $A$-linearity of $\pi_H$, and $\rho_Pj_P=1$. If $f(p)=0$, then $(f\otimes_A B)j_P(p)=j_Qf(p)=0$; injectivity from step 2.1 and this splitting imply $p=0$. Thus $f$ is injective and $H\in D(R)$ by [F1]. For left modules use $B\otimes_A P$ and the same bimodule projection, or apply the proved argument to opposite rings using inversion of group elements. This proves both conventions. [F1, step 1.1, step 2.1, construct, algebra] ∎
