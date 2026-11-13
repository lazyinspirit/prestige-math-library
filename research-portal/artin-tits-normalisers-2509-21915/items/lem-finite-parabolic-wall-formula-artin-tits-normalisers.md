---
id: lem-finite-parabolic-wall-formula-artin-tits-normalisers
kind: lemma
title: Simplified wall crossing for a finite parabolic
status: published
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-connected-support-artin-tits-normalisers
  - def-simple-wall-crossing-artin-tits-normalisers
  - def-longest-elements-artin-tits-normalisers
  - prop-finite-opposition-interface-artin-tits-prerequisites
  - math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword
dependency_roles:
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  def-connected-support-artin-tits-normalisers: mathematical-premise
  def-simple-wall-crossing-artin-tits-normalisers: mathematical-premise
  def-longest-elements-artin-tits-normalisers: mathematical-premise
  prop-finite-opposition-interface-artin-tits-prerequisites: mathematical-premise
  math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 11, Lemma 3.20(4) and equation (3.21)
      statement: If the parabolic indexed by I together with a is finite, the
        wall-crossing element is the product of the longest elements for I and I
        together with a, and the crossing has the displayed corresponding label.
      hypotheses: Coxeter-system and chamber-label conventions of the article, with a
        outside I and the parabolic on I together with a finite.
      reading_limits: Frozen article text inspected for the claim and attribution;
        this citation is not used as a proof premise.
dependency_level: 10
---

## Statement

Let $(W,S)$ be a Coxeter system indexed by the vertices $\Gamma_0$ of its Coxeter diagram, let $J\subseteq\Gamma_0$, and let $(x,I)$ be a chamber label: $W_Jx=xW_I$ and $x$ has minimum length in $xW_I$. Choose $a\in\Gamma_0\setminus I$ and put $K=I\cup\{a\}$. Suppose $W_K$ is finite. For a finite parabolic $W_L$, write $w_L$ for its longest element and $\iota_L$ for its opposition permutation, characterized by $w_L\alpha_i=-\alpha_{\iota_L(i)}$ for $i\in L$.

With the simple wall-crossing element $v_{a,I}$ and pair $\omega_{a,I}(x,I)$ defined in [[def-simple-wall-crossing-artin-tits-normalisers]], one has $v_{a,I}=w_Iw_K$ and $\omega_{a,I}(x,I)=(xw_Iw_K,K\setminus\{\iota_K(a)\})$.

## Facts & Assumptions


[F1] The simple crossing is defined by $v_{a,I}=w_{D\setminus\{a\}}w_D$ and $\omega_{a,I}(x,I)=(xv_{a,I},K\setminus\{\iota_D(a)\})$. [[def-simple-wall-crossing-artin-tits-normalisers]]

[F2] A finite standard parabolic has a finite indexing set; the restricted Coxeter system has its ambient length, and its geometric representation agrees with the ambient representation on the span of its simple roots. [[math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword]] [[def-coxeter-data-artin-tits-normalisers]]

[F3] For a finite-rank Coxeter system, longest elements factor over diagram components, those factors commute, and common components cancel in the product of longest elements. [[prop-finite-opposition-interface-artin-tits-prerequisites]]

[F4] For a finite parabolic, the longest element sends each simple root to the negative of the simple root indexed by its opposition permutation. [[def-longest-elements-artin-tits-normalisers]]

## Proof


**Given:** The Coxeter system, chamber label, vertex $a$, and finite parabolic $W_K$ in the Statement. Put $D=[I,a]$, the component containing $a$ of the diagram induced on $K$, and put $H=K\setminus D$.

**Proof technique:** direct.

**Goal:** Prove the two displayed formulas in the Statement.

1.1 Since $W_K$ is finite, [F2] makes $K$ finite and permits application of [F3] to the Coxeter system on $K$. The set $H$ is a union of components of the diagram induced on $K$. It is also a union of components of the diagram induced on $I$: deleting $a$ cannot create an edge from $H$ to $D\setminus\{a\}$, and the components contained in $H$ are unchanged. Since $I\setminus H=D\setminus\{a\}$ and $K\setminus H=D$, the cancellation formula in [F3] gives $w_Iw_K=w_{D\setminus\{a\}}w_D=v_{a,I}$. All the displayed parabolics are finite subgroups of $W_K$. [F1, F2, F3]

2.1 By the component factorization in [F3], $w_K=w_Hw_D$. There are no diagram edges between $H$ and $D$, so the defining reflection formula fixes every simple root indexed by $D$ under every generator indexed by $H$. In particular, using [F4], $w_K\alpha_a=w_H(-\alpha_{\iota_D(a)})=-\alpha_{\iota_D(a)}$. The simple roots are distinct basis vectors, so comparison with $w_K\alpha_a=-\alpha_{\iota_K(a)}$ yields $\iota_K(a)=\iota_D(a)$. Substituting this equality and step 1.1 into [F1] gives the asserted formula for $\omega_{a,I}(x,I)$. [F1, F2, F3, F4, step 1.1] ∎
