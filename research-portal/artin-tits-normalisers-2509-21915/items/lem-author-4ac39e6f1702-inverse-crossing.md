---
id: lem-author-4ac39e6f1702-inverse-crossing
kind: lemma
title: Componentwise crossings are inverse elements
status: draft
domain: mathematics
origin: pipeline
deps:
  - lem-author-4ac39e6f1702-component-opposition
  - prop-finite-opposition-interface-artin-tits-prerequisites
  - def-connected-support-artin-tits-normalisers
  - math:thm-hh-parabolic-minimal-representatives-and-length-additivity
  - math:thm-cg-finite-parabolic-longest-element-and-opposition
  - def-real-coxeter-interface-artin-tits-prerequisites
dependency_roles:
  lem-author-4ac39e6f1702-component-opposition: mathematical-premise
  prop-finite-opposition-interface-artin-tits-prerequisites: mathematical-premise
  def-connected-support-artin-tits-normalisers: mathematical-premise
  math:thm-hh-parabolic-minimal-representatives-and-length-additivity: mathematical-premise
  math:thm-cg-finite-parabolic-longest-element-and-opposition: mathematical-premise
  def-real-coxeter-interface-artin-tits-prerequisites: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 5
formulation_deps:
  - lem-author-4ac39e6f1702-component-opposition
  - prop-finite-opposition-interface-artin-tits-prerequisites
  - def-connected-support-artin-tits-normalisers
  - def-real-coxeter-interface-artin-tits-prerequisites
argument_deps:
  - lem-author-4ac39e6f1702-component-opposition
  - prop-finite-opposition-interface-artin-tits-prerequisites
  - def-connected-support-artin-tits-normalisers
  - math:thm-hh-parabolic-minimal-representatives-and-length-additivity
  - math:thm-cg-finite-parabolic-longest-element-and-opposition
  - def-real-coxeter-interface-artin-tits-prerequisites
---

## Statement

Let $I,a,D,A,b,K,v$ have the notation and finite-component hypothesis of component opposition. Then $[K,b]=D$, $\iota_D(b)=a$, and
$$w_{D\setminus\{b\}}w_D=v^{-1}.$$
Thus the two componentwise crossing elements multiply to the identity in either order.

## Facts & Assumptions

[F1] The notation, finite-component hypothesis and simple-root bijection are supplied by [[lem-author-4ac39e6f1702-component-opposition]].

[F2] Longest elements and opposition are as in [[prop-finite-opposition-interface-artin-tits-prerequisites]].

[F3] For a subset $H\subseteq S$ and $t\in S\setminus H$, $[H,t]$ is the vertex set of the connected component containing $t$ in the Coxeter diagram induced on $H\cup\{t\}$, by [[def-connected-support-artin-tits-normalisers]].

[F4] For every $H\subseteq S$, $(W_H,H)$ is a Coxeter system and its intrinsic length is the restriction of the ambient length, by [[math:thm-hh-parabolic-minimal-representatives-and-length-additivity]], part (2).

[F5] In a finite Coxeter system, its longest element $w_0$ conjugates each simple generator $s$ to $\sigma(s)$, where $w_0$ takes the simple root indexed by $s$ to the negative simple root indexed by $\sigma(s)$, by [[math:thm-cg-finite-parabolic-longest-element-and-opposition]], part (1)(v).

[F6] In the canonical real representation, $s z=z-2B(z,\alpha_s)\alpha_s$, where the Coxeter form on the simple-root basis is determined by the Coxeter matrix, by [[def-real-coxeter-interface-artin-tits-prerequisites]].

## Proof

**Given:** The finite-rank canonical Coxeter representation, root basis and dual action, with the notation and hypotheses in the Statement. **Goal:** prove the stated assertions.

**Proof technique:** direct.

1.1 By [F1], $b=\iota_D(a)\in D\subseteq L$ and $K=L\setminus\{b\}$, so $b\notin K$ and $K+b=L=I+a$. By [F3], both $[I,a]$ and $[K,b]$ refer to components of this same induced diagram. Its component $D=[I,a]$ contains $b$, so $[K,b]=D$. By [F2], $w_D^2=1$ and $w_D\alpha_d=-\alpha_{\iota_D(d)}$ for $d\in D$. Applying $w_D^2$ to the simple-root basis gives $\iota_D^2=1$, hence $\iota_D(b)=a$. [F1, F2, F3]

2.1 Put $B=D\setminus\{b\}$. By [F4], $(W_D,D)$ is a Coxeter system; it is finite by [F1]. Its canonical representation on the span of the simple roots in $D$ is the restriction of the ambient canonical representation: by [F6], on each generator and basis root the defining reflection formula uses precisely the restricted Coxeter matrix. Thus the permutation in [F5] is the same $\iota_D$ as in [F2], and [F5] gives $w_D s w_D=\iota_D(s)$ for $s\in D$. Since $\iota_D$ is a permutation with $\iota_D(a)=b$, conjugation by $w_D$ bijects $A=D\setminus\{a\}$ with $B$. It therefore restricts to an isomorphism $W_A\to W_B$ preserving intrinsic word lengths: a word in $A$ maps to a word of the same length in $B$, and conjugating back gives the reverse length inequality. Both groups are finite subgroups of $W_D$, and [F4] identifies their intrinsic lengths with the lengths used for their unique longest elements in [F2]. Consequently $w_B=w_Dw_Aw_D$. By [F2] both $w_A$ and $w_D$ are involutions, so $w_Bw_D=w_Dw_A=(w_Aw_D)^{-1}=v^{-1}$. This proves the displayed equality and both identity products. [F1, F2, F4, F5, F6, step 1.1] ∎
