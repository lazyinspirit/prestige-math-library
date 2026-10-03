---
id: thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n
kind: theorem
title: "Artin's characterization of the braid subgroup of Aut(F_n)"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 8
deps: [lem-artin-automorphisms-permute-meridian-conjugacy-classes-and-fix-the-boundary-word, def-peripheral-boundary-preserving-automorphism-of-f-n, thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism, thm-the-artin-representation-is-faithful, def-the-artin-representation-on-a-free-group, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, Theorem 1.3, printed p. 9"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Emil Artin, Theory of Braids, Annals of Mathematics 48 (1947), pp. 101-126, Theorem 16, printed pp. 113-115"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf"
---

## Statement

Assume AC. The image of the Artin representation
$\rho:B_n\to\operatorname{Aut}(F_n)$ of
[[def-the-artin-representation-on-a-free-group]] is exactly the set of
peripheral-boundary-preserving automorphisms of
[[def-peripheral-boundary-preserving-automorphism-of-f-n]]; moreover $\rho$ is
injective, so each peripheral-boundary-preserving automorphism is $\rho(\beta)$
for a unique braid $\beta$.

## Facts & Assumptions

**Given:** AC, the free group $F_n=\langle x_1,\dots,x_n\rangle$, the Artin representation $\rho:B_n\to\operatorname{Aut}(F_n)$, and the set of peripheral-boundary-preserving automorphisms of $F_n$.

[F1] *Necessity.* For every braid word $\beta$, the automorphism $\rho(\beta)$ sends each generator to a conjugate of a generator and fixes the ordered product $x_1\cdots x_n$; hence $\rho(\beta)$ is peripheral-boundary-preserving. This direction is choice-free. ([[lem-artin-automorphisms-permute-meridian-conjugacy-classes-and-fix-the-boundary-word]], [[def-peripheral-boundary-preserving-automorphism-of-f-n]].)

[F2] *Sufficiency.* Every peripheral-boundary-preserving automorphism of $F_n$ equals $\rho(\beta)$ for some braid word $\beta$, which may be chosen as a product of the generators and their inverses; this direction is choice-free. ([[thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism]].)

[F3] *Injectivity.* Assume AC. The Artin representation $\rho$ is injective: a braid word acts trivially on $F_n$ only if it represents the trivial braid. ([[thm-the-artin-representation-is-faithful]].)

## Proof

**Proof technique:** direct, assembling necessity, sufficiency and injectivity.

1.1 *The image is contained in the set of peripheral-boundary-preserving automorphisms.* Let $\beta$ be any braid word. By [F1], $\rho(\beta)(x_i)$ is conjugate to a generator for every $i$ and $\rho(\beta)(x_1\cdots x_n)=x_1\cdots x_n$, so $\rho(\beta)$ is peripheral-boundary-preserving. Hence $\operatorname{im}\rho\subseteq\{$peripheral-boundary-preserving automorphisms$\}$. [F1]

1.2 *The set of peripheral-boundary-preserving automorphisms is contained in the image.* Let $A$ be peripheral-boundary-preserving. By [F2] there is a braid word $\beta$ with $A=\rho(\beta)$; hence $A\in\operatorname{im}\rho$. [F2]

1.3 *Uniqueness of the braid.* Assume $\rho(\beta_1)=\rho(\beta_2)$ for braid words $\beta_1,\beta_2$. Then $\rho(\beta_1\beta_2^{-1})=\rho(\beta_1)\rho(\beta_2)^{-1}= \operatorname{id}$ because $\rho$ is a homomorphism, so by injectivity [F3] the word $\beta_1\beta_2^{-1}$ represents the trivial braid, that is, $\beta_1=\beta_2$ in $B_n$. Hence each element of the image is $\rho(\beta)$ for a unique braid $\beta$. [F3]

2.1 *Equality of the two sets.* Steps 1.1 and 1.2 give $\operatorname{im}\rho=\{A\in\operatorname{Aut}(F_n): A\text{ is peripheral-boundary-preserving}\}.$ [step 1.1, step 1.2]


3.1 *Conclusion.* Step 2.1 identifies the image with the set of peripheral-boundary-preserving automorphisms and step 1.3 shows that the representing braid is unique, which is the characterization of Artin. The necessity and sufficiency directions [F1] and [F2] are choice-free; AC is consumed exactly through the injectivity statement [F3], as declared in the statement. For $n\le1$ both $F_n$-automorphism conditions are checked directly on the trivial or infinite cyclic group and the same conclusions hold with the trivial braid group. [F1, F2, F3, step 2.1, step 1.3] ∎

## Remarks

- For $n\ge2$ the two conditions are independent: the peripheral condition alone does not suffice (`cex-permuting-meridian-conjugacy-classes-without-fixing-the-boundary-word-is-not-artin`), and together they characterize the image of $\rho$.
- Combining the characterization with faithfulness gives that the braid group is isomorphic to the peripheral-boundary-preserving subgroup of $\operatorname{Aut}(F_n)$; this is the form in which Artin's theorem is usually quoted.
