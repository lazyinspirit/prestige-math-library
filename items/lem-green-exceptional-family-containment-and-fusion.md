---
id: lem-green-exceptional-family-containment-and-fusion
kind: lemma
title: Green exceptional family containment and fusion
deps: [def-green-exceptional-intersection-families]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Saunders, Modular Representation Theory, Lemmas 4.18–4.19 and 4.35–4.38,
        Theorem 4.34
      url: https://jpsaunders.uk/ModRep/NotesWebsite.pdf
    - title: Lassueur–Farrell, Chapter 7, §29, Theorem 29.4 and proof
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload2.pdf
proof_strategy: direct
status: draft
origin: pipeline
---

## Statement

Use the finite group, $P$, $H$, and families of [[def-green-exceptional-intersection-families]]. For $Q\leq P$, the following are equivalent:

$$Q\leq_G\mathcal X,\qquad Q\leq_H\mathcal X,\qquad Q\leq_H\mathcal Y.$$

Every member of $\mathcal X$ is proper in $P$, and $P\in\mathcal Z$. If $Q,R\in\mathcal Z$ and ${}^gQ=R$, then $g\in H$. No member of $\mathcal Y$ contains an $H$-conjugate of a member of $\mathcal Z$.

## Facts & Assumptions

**Given:** The above data, in particular $Q\leq P\leq H$ and $N_G(P)\leq H$.

[F1] The families and existential conjugate-containment convention are those of [[def-green-exceptional-intersection-families]].

## Proof

1.1 Suppose ${}^gQ\leq P\cap{}^sP$ for $s\notin H$. If $g\in H$, this already witnesses $Q\leq_H\mathcal X$. If $g\notin H$, the first containment gives $Q\leq{}^{g^{-1}}P$; combining with $Q\leq P$ gives $Q\leq P\cap{}^{g^{-1}}P\in\mathcal X$, witnessed using the identity conjugator in $H$. Thus $Q\leq_G\mathcal X$ implies $Q\leq_H\mathcal X$. [F1, given, algebra]

1.2 If $P\cap{}^sP=P$, then $P\leq{}^sP$ and the two finite groups have equal orders. Hence $P={}^sP$, so $s\in N_G(P)\leq H$. This contradicts $s\notin H$. Each $\mathcal X$-member therefore has order strictly less than $|P|$ and cannot contain any conjugate of $P$. Thus $P\in\mathcal Z$. [F1, given, algebra]

2.1 Since $P\leq H$, every $P\cap{}^sP$ is contained in $H\cap{}^sP$. Consequently an $H$-conjugate containment in $\mathcal X$ is one in $\mathcal Y$. Conversely, if ${}^hQ\leq H\cap{}^sP$ with $h\in H$ and $s\notin H$, then $Q\leq{}^{h^{-1}s}P$. As $h^{-1}s\notin H$ and $Q\leq P$, this gives $Q\leq P\cap{}^{h^{-1}s}P\in\mathcal X$. In particular $Q\leq_G\mathcal X$. Together with 1.1 this proves all three equivalences. [F1, step 1.1, given, algebra]

3.1 If ${}^gQ=R$ for $Q,R\in\mathcal Z$ and $g\notin H$, then $R\leq P$ and $R\leq{}^gP$ give $R\leq P\cap{}^gP\in\mathcal X$. This contradicts $R\in\mathcal Z$, proving the asserted fusion statement. If an $H$-conjugate of $Q\in\mathcal Z$ lay in a $\mathcal Y$-member, step 2.1 would give $Q\leq_G\mathcal X$, another contradiction. [F1, step 2.1, given, algebra]

4.1 When $H=G$ both exceptional families are empty: all three containment statements are false, and all conjugators belong to $H$. When $P=1$ the normalizer hypothesis forces this same case. For $Q=1$ and $H\ne G$, each exceptional family has a member and all three containments hold, so $1\notin\mathcal Z$. The proof uses only finite subgroup containments and their displayed witnesses, with no choice principle and no assertion that a $\mathcal Y$-member has smaller order than $P$. This completes the claims. [F1, step 1.1, step 2.1, step 1.2, step 3.1] QED
