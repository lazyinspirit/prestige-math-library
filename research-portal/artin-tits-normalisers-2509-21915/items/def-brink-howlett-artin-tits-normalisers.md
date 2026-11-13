---
id: def-brink-howlett-artin-tits-normalisers
kind: definition
title: Brink–Howlett groupoid
status: published
domain: mathematics
origin: pipeline
deps:
  - def-associates-artin-tits-normalisers
  - def-coxeter-data-artin-tits-normalisers
  - def-groupoid-conventions-artin-tits-normalisers
  - def-small-groupoid-interface-artin-tits-prerequisites
  - math:lem-cg-double-coset-intersection-parabolic
  - math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword
dependency_roles:
  def-associates-artin-tits-normalisers: mathematical-premise
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  def-groupoid-conventions-artin-tits-normalisers: mathematical-premise
  def-small-groupoid-interface-artin-tits-prerequisites: mathematical-premise
  math:lem-cg-double-coset-intersection-parabolic: mathematical-premise
  math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword: mathematical-premise
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 15, §4.1, definition before Remark 4.1
      statement: "The objects are the associates of J; a morphism from I to K is an
        element x of W satisfying {α_i : i in I} = {x α_k : k in K}, and
        composition is multiplication on the right."
      hypotheses: A Coxeter diagram with vertex set Γ₀, associated Coxeter group W and
        reflection representation, and a subset J of Γ₀.
      reading_limits: The frozen extracted text at the cited definition was read for
        attribution. The article is not used as a proof of connectedness or of
        the groupoid axioms.
dependency_level: 9
---

## Definition

Let $\Gamma$ be a Coxeter diagram with vertex set $\Gamma_0$, Coxeter group $W$ with simple generators $s_i$, and geometric representation on the real vector space with basis $(\alpha_i)_{i\in\Gamma_0}$. Fix $J\subseteq\Gamma_0$. For $I\subseteq\Gamma_0$ write $W_I=\langle s_i:i\in I\rangle$; an associate of $J$ is a subset $I$ for which $W_I$ is conjugate to $W_J$ in $W$.

The **Brink–Howlett groupoid** $\mathcal{BH}(J)$ has the associates of $J$ as objects. For associates $I,K$, its morphisms $I\to K$ are tagged by their source and target and have labels

$$\operatorname{Hom}_{\mathcal{BH}(J)}(I,K)=\{x\in W:\{\alpha_i:i\in I\}=\{x\alpha_k:k\in K\}\}.$$

For $x:I\to K$ and $y:K\to L$, their left-to-right composite is $xy:I\to L$. The identity at $I$ has label $1\in W$.

## Definition references

[[def-associates-artin-tits-normalisers]]

[[def-coxeter-data-artin-tits-normalisers]]

[[def-groupoid-conventions-artin-tits-normalisers]]

[[def-small-groupoid-interface-artin-tits-prerequisites]]

## Justification

The associates form a set of subsets of $\Gamma_0$, and the tagged arrows form a set of triples $(I,x,K)$. The geometric representation is a group action. Thus if $x:I\to K$ and $y:K\to L$, then $xy$ sends the simple-root set of $L$ to that of $I$. The identity sends each simple-root set to itself, and the inverse of $x$ sends the simple-root set of $I$ to that of $K$. Associativity and the identity and inverse laws follow from those of $W$. Therefore these data form a small groupoid with the indicated left-to-right convention, as in [[def-small-groupoid-interface-artin-tits-prerequisites]] and [[def-groupoid-conventions-artin-tits-normalisers]].

It is also connected. Let $I,K$ be associates of $J$, and choose $x$ with $W_I=xW_Kx^{-1}$. Here $\ell$ is the nonnegative integer word length defined in [[def-coxeter-data-artin-tits-normalisers]]. Repeatedly multiply the current representative on the left by a generator in $I$ or on the right by one in $K$ whenever this decreases its nonnegative integer length. This terminates at $d\in W_IxW_K$ having no such descent. By [[math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword]], part (3), multiplication by a simple generator changes length by exactly one. Thus $\ell(s_id)>\ell(d)$ for every $i\in I$ and $\ell(ds_k)>\ell(d)$ for every $k\in K$, giving the strict inequalities needed for the two-sided minimum hypothesis below. Since the multiplying factors lie in the respective parabolics, $W_I=dW_Kd^{-1}$.

For each $i\in I$, the element $d^{-1}s_id$ has a finite expression in generators indexed by $K$. Choose a finite set of indices containing $i$, the support of a word for $d$, and the indices in that expression. By [[math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword]], the Coxeter group on the chosen finite set of generators embeds in $W$ with lengths preserved. Applying [[math:lem-cg-double-coset-intersection-parabolic]], part (3), to the intersections of $I$ and $K$ with that finite set shows that $d^{-1}\alpha_i=\alpha_k$ for some $k\in K$. The same argument with $d^{-1}$ and the roles of $I,K$ reversed shows that every $\alpha_k$ arises this way. Hence $d^{-1}\{\alpha_i:i\in I\}=\{\alpha_k:k\in K\}$, so $d: I\to K$ is a morphism. The object $J$ exists, since $W_J$ is conjugate to itself; consequently the groupoid is nonempty and connected.
