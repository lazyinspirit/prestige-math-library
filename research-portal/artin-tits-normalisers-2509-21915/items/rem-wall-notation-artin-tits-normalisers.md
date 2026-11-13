---
id: rem-wall-notation-artin-tits-normalisers
kind: remark
title: Wall-crossing notation and Brink–Howlett convention
status: published
domain: mathematics
origin: pipeline
deps:
  - def-simple-wall-crossing-artin-tits-normalisers
  - def-longest-elements-artin-tits-normalisers
dependency_roles:
  def-simple-wall-crossing-artin-tits-normalisers: mathematical-premise
  def-longest-elements-artin-tits-normalisers: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 11, Remarks 3.18–3.19
      statement: The authors abbreviate omega_(a,I) to omega_a when its source is
        clear, following their reference [24, Definition 1.28]. They report that
        their v_(a,I) is inverse to v[a,I] in Brink–Howlett, their reference
        [5], whose Section 2 also defines v[I,J] for certain disjoint subsets.
      hypotheses: The article standing Coxeter-system notation and the finite
        connected support condition in its simple wall-crossing definition. This
        source is attribution only, not an independent proof premise.
      reading_limits: Read the frozen extracted Remarks 3.18–3.19 and visually
        inspected original PDF p.11. The 1999 Brink–Howlett original was not
        read. No independent verification of its exact symbol v[a,I] is claimed.
    - title: Matthew Dyer and Harrison Gimenez, Root Systems, Tits Cones and Imaginary
        Cones of Brink-Howlett Groupoids
      url: https://arxiv.org/abs/2606.12937
      locator: §1.4, PDF p.4; §1.24–§1.27, PDF pp.9–10, especially Lemma 1.25 and
        Remark 1.26
      statement: For a Coxeter system of possibly infinite rank, and simple-root
        subsets J subset K, the reflections in W_K minus W_J are finite exactly
        when finitely many connected components of K meet K minus J and all
        these components are spherical. If L is their union, nu(K minus J,J)=w_L
        w_(L intersect J). The singleton case K minus J={alpha} is written
        nu(alpha,J) and gives the Brink–Howlett generators.
      hypotheses: Any Coxeter system with a based root system; J subset K subset Pi;
        finitely many connected components of K meet K minus J and each has
        finite Coxeter group. Applied only with J=I, K=I union {a}, and the one
        component D=[I,a] spherical. Neither W nor W_I is assumed finite.
      reading_limits: Read extracted text of §1.4 and §§1.24–1.27 and visually
        inspected PDF p.10. The proof of Lemma 1.25 and the remainder of the
        paper were not read. Its stated product formula is an external input,
        not a locally reconstructed theorem. This source uses Greek nu with
        parentheses, and does not certify the literal notation in the unread
        1999 original. The rank-two paragraph of §1.27 is not imported.
proof_strategy: direct
dependency_level: 10
---

## Statement

Use the simple wall-crossing convention $v_{a,I}=w_{D\setminus\{a\}}w_D$, where $D=[I,a]$ is the connected component containing $a$ in the diagram on $I\cup\{a\}$, $a\notin I$, and $W_D$ is finite.

The article's Remarks 3.18–3.19 say that $\omega_{a,I}$ may be abbreviated to $\omega_a$ when the source is clear, following its reference [24, Definition 1.28], and report that $v_{a,I}$ is the inverse of the element denoted $v[a,I]$ by Brink–Howlett, whose Section 2 also treats $v[I,J]$ for certain disjoint subsets. This sentence records the original authors' attribution; the 1999 original has not been read here.

Independently, the general Coxeter-system convention of Dyer–Gimenez gives
$$\nu(a,I)=w_Dw_{D\setminus\{a\}}=v_{a,I}^{-1}.$$
Thus the inverse product comparison holds whenever the connected support $D$ is spherical, without assuming that $W$, $W_I$, or $W_{I\cup\{a\}}$ is finite. This verified comparison uses Dyer–Gimenez's symbol $\nu(a,I)$; it does not claim direct verification of the historical symbol $v[a,I]$.

## Statement references

[[def-simple-wall-crossing-artin-tits-normalisers]]

## External input

Dyer–Gimenez, Lemma 1.25, uses subsets of the simple-root set $\Pi$, identified with vertices by $i\mapsto\alpha_i$. Given $J\subseteq K\subseteq\Pi$, suppose that finitely many components of $K$ meet $K\setminus J$ and each such component is spherical. If $L$ is their union, the stated external formula is $\nu(K\setminus J,J)=w_Lw_{L\cap J}$. Section 1.27 abbreviates a singleton first argument, and §1.4 permits infinite rank. Only this product formula and singleton notation are imported; their proof is not reconstructed here.

## Verification


**Given:** A Coxeter system, a vertex subset $I$, and $a\notin I$ with finite $W_D$, where $D=[I,a]$.

**Goal:** Verify the independent inverse product comparison, keeping the article's historical attribution separate.

[F1] [[def-simple-wall-crossing-artin-tits-normalisers]] defines the connected support $D$, the longest elements of its finite standard parabolics, and $v_{a,I}=w_{D\setminus\{a\}}w_D$.

[F2] The external formula above, from Dyer–Gimenez Lemma 1.25 and §1.27, defines $\nu$ by the displayed product when the components meeting the first argument are spherical. This is an independent external input; the original article is not its proof source.


[F3] [[def-longest-elements-artin-tits-normalisers]] supplies the unique maximum-length element of every finite standard parabolic, with length measured in the ambient Coxeter system. Its Justification obtains uniqueness from the finite-opposition interface after identifying the finite parabolic Coxeter system and its length, so no finite-rank assumption on the ambient system is needed.

1.1 In [F2] take $J=I$ and $K=I\cup\{a\}$, identifying vertices and simple roots. Exactly one connected component of $K$ meets $K\setminus J=\{a\}$: it is $D$. By the given finiteness of $W_D$, this component is spherical, so [F2] applies with $L=D$ and $L\cap J=D\setminus\{a\}$. Hence $\nu(a,I)=w_Dw_{D\setminus\{a\}}$. No condition on the other components of $I$ enters this application. [F1, F2, given]

2.1 A longest element $w_L$ of a finite standard parabolic is an involution: reversing a shortest word preserves its length, so $\ell(w_L^{-1})=\ell(w_L)$, and uniqueness of the maximum-length element supplied by [F3] gives $w_L^{-1}=w_L$. Apply this to $L=D$ and $L=D\setminus\{a\}$; both parabolics are finite by [F1]. Taking the inverse of the product in [F1] now gives $v_{a,I}^{-1}=w_Dw_{D\setminus\{a\}}=\nu(a,I)$, as asserted. [F1, F3, step 1.1, algebra] ∎

## Source notes

The article's $v[a,I]$ and $v[I,J]$ comparison is retained solely as its explicit historical attribution. The independently read Dyer–Gimenez source supports the product convention in general Coxeter type and even infinite rank, but writes $\nu$ rather than the Latin $v$ of that attribution. The 1999 Brink–Howlett full text was inaccessible and was not read. The imported lemma's proof was not read either; the Verification checks the applicability of its stated formula and the inverse calculation only. No conclusion about an error in the original article follows from this reading limit.
