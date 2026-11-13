---
title: Two elementary prefixes force a finite rank-two relative root set
status: draft
research_item: lem-author-7bd202611130-common-prefix-finiteness
dependency_level: 20
sources:
  references:
    - title: Matthew Dyer and Harrison Gimenez, Root systems, Tits cones and imaginary
        cones of Brink-Howlett groupoids
      url: https://arxiv.org/html/2606.12937v1
      locator: Sections 1.3–1.5 (especially (1.4.1), (1.4.4) and the first equivalence
        in 1.5); sections 1.7 and 1.9; Lemma 1.25, opening formula and (a);
        Lemma 3.12(a) and its proof.
      statement: "Roots split disjointly into Phi^+ and Phi^-=-Phi^+. Write
        Inv_L(x)={alpha in Phi^+: x^{-1}alpha in Phi^-}, the source's Phi_x.
        Then |Inv_L(x)|=ell(x), and u is a length-additive prefix of x iff
        Inv_L(u) is a subset of Inv_L(x). Spherical longest elements are
        involutions. For D=[I,c] spherical, nu(alpha_c,Pi_I)=w_D w_{D minus c},
        and Inv_L(nu(alpha_c,Pi_I)^{-1})=Phi_{I+c}^+ minus Phi_I^+. For a
        root-action morphism u:Pi_I to Pi_K and M a subset of Pi intersect
        Inv_L(u^{-1}), the proof of Lemma 3.12(a) gives Phi_{Pi_I union M}^+
        minus Phi_I^+ as a finite subset of Inv_L(u^{-1})."
      hypotheses: A Coxeter system of arbitrary rank with its standard based root
        system. In the single-root formula only D=[I,c] is spherical. The
        root-action morphism satisfies u(Pi_I)=Pi_K; M consists of simple roots
        made negative by u. No finiteness or spherical hypothesis is imposed on
        I, K or the ambient system.
      reading_limits: Read the HTML at sections 1.3–1.5, 1.7, 1.9, Lemma 1.25 and the
        statement and proof of Lemma 3.12(a). The displayed inversion
        conventions, hypotheses and applications were checked. No PDF
        inspection, reconstruction of the imported results, whole-paper reading,
        or reading of Brink–Howlett (1999) is claimed in this repair. No
        presentation or completeness-of-relations assertion is used.
---

## Prerequisites

- [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers)
- [lem-author-b19d43a8e520-bh-opposite-identification](item-lem-author-b19d43a8e520-bh-opposite-identification)
- [lem-two-generator-minimal-artin-tits-normalisers](item-lem-two-generator-minimal-artin-tits-normalisers)
- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)
- [def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers)
- [def-atomic-braid-artin-tits-normalisers](item-def-atomic-braid-artin-tits-normalisers)
- [` Matthew Dyer and Harrison Gimenez, Root systems, Tits cones and imaginary cones of Brink-Howlett groupoids · Sections 1.3–1.5 (especially (1.4.1), (1.4.4) and the first equivalence in 1.5); sections 1.7 and 1.9; Lemma 1.25, opening formula and (a); Lemma 3.12(a) and its proof. `](https://arxiv.org/html/2606.12937v1)


## Statement

If distinct elementary arrows $v_{a,I},v_{b,I}$ both left-divide an article arrow $w:I\to K$ with Coxeter-length additivity, then $\Phi_{I+a+b}\setminus\Phi_I$ is finite. The morphism $q=v_{a,b,I}$ exists, is a length-additive prefix of $w$, and has the two standard expressions defining its atomic braid relation.

## Statement references

[def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers)

[lem-two-generator-minimal-artin-tits-normalisers](item-lem-two-generator-minimal-artin-tits-normalisers)

[def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)

[def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers)

[def-atomic-braid-artin-tits-normalisers](item-def-atomic-braid-artin-tits-normalisers)

## Facts & Assumptions

[F1] Use the arbitrary-rank Coxeter system, geometric action, roots $\Phi^\pm$, and prefix weak order of [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers), the parabolic roots of [def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers), and the elementary arrows and standard expressions of [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers). Write $I+c=I\cup\{c\}$, $I+a+b=I\cup\{a,b\}$, $\Pi_L=\{\alpha_i:i\in L\}$, and $\Pi=\Pi_{\Gamma_0}$. In this proof define $\operatorname{Inv}_L(x)=\{\alpha\in\Phi^+:x^{-1}\alpha\in\Phi^-\}$. Thus $\operatorname{Inv}_L(x)$ is the source's $\Phi_x$; the subscript $L$ means left inversions.

[F2] The root-sign decomposition, inversion count, length-additive prefix criterion, elementary inversion formula, longest-element involutions, and relative-root inclusion are the independent inputs recorded in External input and source reference 0.

[F3] The reversal of article arrows to root-action arrows, with unchanged labels, is supplied by [lem-author-b19d43a8e520-bh-opposite-identification](item-lem-author-b19d43a8e520-bh-opposite-identification).

[F4] Under finiteness of $\Phi_{I+a+b}\setminus\Phi_I$, [lem-two-generator-minimal-artin-tits-normalisers](item-lem-two-generator-minimal-artin-tits-normalisers) supplies $v_{a,b,I}$, its two standard expressions and its universal length-additive prefix property. Their equality is the atomic braid relation of [def-atomic-braid-artin-tits-normalisers](item-def-atomic-braid-artin-tits-normalisers).

## External input

Use Dyer–Gimenez, sections 1.4–1.5 and 1.7, Lemma 1.25(a), and the inclusion in the proof of Lemma 3.12(a), with the hypotheses and notation translation in source reference 0. In particular, $|\operatorname{Inv}_L(x)|=\ell(x)$ and a length-additive prefix $y$ of $x$ satisfies $\operatorname{Inv}_L(y)\subseteq\operatorname{Inv}_L(x)$. For a root-action arrow $u:\Pi_I\to\Pi_K$ and $M\subseteq\Pi\cap\operatorname{Inv}_L(u^{-1})$, that proof gives $\Phi_{\Pi_I\cup M}^+\setminus\Phi_I^+\subseteq\operatorname{Inv}_L(u^{-1})$. Here a root subsystem indexed by simple roots means the parabolic subsystem on their indices. Only these premises are imported; the consequence below is proved locally.

## Proof

**Given:** Distinct $a,b\notin I$, elementary arrows $v_{a,I},v_{b,I}$ that are length-additive left prefixes of $w:I\to K$, and the conventions and premises [F1]–[F4].

**Goal:** Establish the Statement.

**Proof technique:** direct.

1.1 For an elementary arrow $v_{c,I}$ put $D=[I,c]$. The source's label is $\nu(\alpha_c,\Pi_I)=w_Dw_{D\setminus\{c\}}$. The elementary definition and the longest-element involutions give $v_{c,I}=\nu(\alpha_c,\Pi_I)^{-1}$. Lemma 1.25(a), in the left-inversion convention, therefore gives $\operatorname{Inv}_L(v_{c,I})=\Phi_{I+c}^+\setminus\Phi_I^+$. Each parabolic root is supported on its index set: the simple reflections in that set preserve its span by the geometric reflection formula. Consequently $\operatorname{Inv}_L(v_{c,I})\cap\Pi=\{\alpha_c\}$. Applying the prefix criterion to the two given prefixes yields $\alpha_a,\alpha_b\in\operatorname{Inv}_L(w)$, equivalently $w^{-1}\alpha_a,w^{-1}\alpha_b\in\Phi^-$. [given, F1, F2]

2.1 By reversal, $u=w^{-1}$ is a root-action arrow $\Pi_I\to\Pi_K$, so $u\Pi_I=\Pi_K$. Set $M=\{\alpha_a,\alpha_b\}$. Step 1.1 gives $M\subseteq\Pi\cap\operatorname{Inv}_L(u^{-1})$, since $u^{-1}=w$. The inclusion proved in Lemma 3.12(a) now gives $\Phi_{I+a+b}^+\setminus\Phi_I^+\subseteq\operatorname{Inv}_L(u^{-1})=\operatorname{Inv}_L(w)$. Its right-hand side has $\ell(w)$ elements. The full relative root set is the union of this finite positive difference and its negative, because roots have exactly one sign and parabolic root sets are closed under negation. Hence $\Phi_{I+a+b}\setminus\Phi_I$ is finite, with no finite-rank or spherical assumption on $I$. [step 1.1, F1, F2, F3]

3.1 Apply the two-generator lemma with the finiteness just proved. It supplies $q=v_{a,b,I}:I\to H$, its two standard expressions, and the universal prefix property, which applies to $w$. Thus $w=qz$ with $z=q^{-1}w:H\to K$ and $\ell(w)=\ell(q)+\ell(z)$. By the atomic-braid definition, the equality of these two expressions for $q$ is its atomic braid relation. This proves the Statement with the required endpoints and length additivity. [step 2.1, F1, F4] ∎
