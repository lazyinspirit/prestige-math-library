---
id: rem-opposite-convention-artin-tits-normalisers
kind: remark
title: Opposite-category convention for Brink–Howlett
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-brink-howlett-artin-tits-normalisers
  - def-small-groupoid-interface-artin-tits-prerequisites
  - math:def-opposite-category
dependency_roles:
  def-brink-howlett-artin-tits-normalisers: mathematical-premise
  def-small-groupoid-interface-artin-tits-prerequisites: mathematical-premise
  math:def-opposite-category: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: §4.1, PDF p. 15, definition and Remark 4.1
      statement: The article uses the opposite of the Brink–Howlett groupoid, with
        morphisms I to K labelled by x satisfying xΠ_K=Π_I and left-to-right
        composition (x,y)↦xy.
      hypotheses: A Coxeter system and a fixed subset J; objects are associates of J.
        No finite-rank or spherical-type assumption is used in the convention
        comparison.
      reading_limits: Read the frozen §4.1 definition and Remark 4.1 and visually
        inspected original PDF p. 15 for attribution and formulas only. The
        original article is not used as an independent proof input.
    - title: Matthew Dyer and Harrison Gimenez, Root Systems, Tits Cones and Imaginary
        Cones of Brink-Howlett Groupoids
      url: https://arxiv.org/abs/2606.12937v1
      locator: PDF/printed p. 5, §§1.8–1.9; arbitrary-rank convention p. 4
      statement: The full Brink–Howlett groupoid has objects the subsets of the
        simple-root set Π and arrows J to K given by triples (K,w,J) with
        K=w(J); composition is (L,v,K)(K,w,J)=(L,vw,J). Section 1.9 explicitly
        attributes this groupoid to Brink and Howlett [9].
      hypotheses: A Coxeter system with its based root system, in particular the
        standard geometric root system. Finite rank is not assumed. Restricting
        to the associates of a fixed subset gives the groupoid used in this
        comparison.
      reading_limits: "Read PDF pp. 1–5 as extracted text and visually inspected p. 5,
        including §§1.8–1.9 formulas. Only the groupoid definition and
        composition convention are imported. No later result or proof is
        imported. Brink–Howlett (1999), DOI 10.1007/s002220050312, was not read:
        its public publisher PDF request redirected to a subscription preview,
        and the author homepage offered only that publisher link or an emailed
        offprint. The historical comparison uses this independent explicit
        restatement, not a claimed reading of the 1999 paper."
proof_strategy: direct
dependency_level: 10
---

## Statement

The article uses the opposite of the groupoid in Brink–Howlett [5]: composition
$$\operatorname{Hom}(I,K)\times\operatorname{Hom}(K,L)\longrightarrow\operatorname{Hom}(I,L),\qquad (x,y)\longmapsto xy$$
matches left-to-right path composition.

## External input

Use the independent explicit restatement in Dyer–Gimenez, §1.9 (PDF p. 5). For simple-root subsets $A,B$, their full Brink–Howlett groupoid $\mathcal B$ has arrows $w:A\to B$ exactly when $wA=B$, tagged as $(B,w,A)$. Its composition is
$$(C,v,B)(B,w,A)=(C,vw,A).$$
Section 1.9 attributes this definition to Brink–Howlett [9]. Restrict $\mathcal B$ to the objects $\Pi_I=\{\alpha_i:i\in I\}$ with $I$ an associate of the fixed $J$; retain every arrow between these objects. The reading limit for the original 1999 source is recorded below and in the source metadata.

## Proof


**Given:** The article groupoid, the independent external convention above, and the definition of the opposite category.

1.1 By [[def-brink-howlett-artin-tits-normalisers]], a labelled arrow $x:I\to K$ in the article's groupoid is exactly an element satisfying $x\Pi_K=\Pi_I$. Thus it is exactly the reversed arrow of $(\Pi_I,x,\Pi_K)$ in $\mathcal B$. The identification $I\leftrightarrow\Pi_I$ is a bijection on the chosen object sets because the simple roots form a basis. This identifies the hom-sets with those of $\mathcal B^{\mathrm{op}}$ as defined in [[math:def-opposite-category]]. [given]

2.1 Let $x:I\to K$ and $y:K\to L$ be article arrows. Their corresponding arrows in $\mathcal B$ go $\Pi_K\xrightarrow{x}\Pi_I$ and $\Pi_L\xrightarrow{y}\Pi_K$. The external composition formula gives $(\Pi_I,x,\Pi_K)(\Pi_K,y,\Pi_L)=(\Pi_I,xy,\Pi_L)$. Reversing this composite gives an arrow $I\to L$ with label $xy$. Identities have label $1$ in both groupoids. Hence the hom-set identification preserves identities and composition and identifies the article's groupoid with this opposite category. [given, step 1.1]

3.1 The notation of [[def-small-groupoid-interface-artin-tits-prerequisites]] writes the composite of $x:I\to K$ followed by $y:K\to L$ from left to right. Step 2.1 proves that its label is $xy$, exactly the displayed rule. No commutativity or finiteness hypothesis is needed. [given, step 2.1] ∎

## Source notes

The 1999 Brink–Howlett original was not accessible through the public publisher page and was not read here. Dyer–Gimenez §1.9 is the independently read explicit source for its arrow and composition conventions. The comparison is a local calculation from that stated definition; it does not claim an independent reconstruction of any theorem of the 1999 paper. Original article PDF p. 15 was inspected to verify the formulation being compared. No source defect is asserted: opposite categories and differing composition conventions are compatible.
