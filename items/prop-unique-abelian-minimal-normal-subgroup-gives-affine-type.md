---
id: prop-unique-abelian-minimal-normal-subgroup-gives-affine-type
kind: proposition
title: "A unique abelian minimal normal subgroup gives affine type"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups, cor-abelian-normal-subgroups-of-faithful-primitive-actions-are-regular, def-elementary-abelian-p-group, lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces, lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension, lem-minimal-normal-subgroups-of-finite-groups-are-characteristically-simple]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Exercise 6.31"
      url: "https://web.archive.org/web/20251127151005if_/https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "Leonard H. Soicher, Primitive permutation groups"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
---

## Statement

Let $G \le \operatorname{Sym}(\Omega)$ be a finite faithful primitive group,
and suppose that $V \trianglelefteq G$ is its unique minimal normal subgroup and
that $V$ is abelian. Then:

1. $V$ is regular on $\Omega$;
2. $V$ is elementary abelian, so $V \cong (\mathbb F_p)^d$ for some prime $p$;
3. for every $\alpha \in \Omega$, the point stabilizer $G_\alpha$ acts
faithfully and irreducibly on the vector space $V$.

In the O'Nan-Scott language, $G$ is of affine type.

## Facts & Assumptions

**Given:** A finite faithful primitive group $G \le \operatorname{Sym}(\Omega)$ with unique abelian minimal normal subgroup $V$.

[L1] Every nontrivial abelian normal subgroup of a faithful primitive action is regular
([[cor-abelian-normal-subgroups-of-faithful-primitive-actions-are-regular]]).

[L2] Every minimal normal subgroup of a finite group is characteristically
simple
([[lem-minimal-normal-subgroups-of-finite-groups-are-characteristically-simple]]).

[A1] A finite abelian characteristically simple group is elementary abelian.

[L3] An elementary abelian $p$-group is canonically a vector space over $\mathbb F_p$ ([[lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces]]).

[L4] Every finite elementary abelian $p$-group has a finite basis over $\mathbb F_p$ ([[lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the abelian normal subgroup $V$ is regular on $\Omega$. [given, L1]

1.2 By [L2], the minimal normal subgroup $V$ is characteristically simple; as it is also abelian, [A1] shows that $V$ is elementary abelian. Facts [L3] and [L4] therefore identify $V$ with $(\mathbb F_p)^d$ for some prime $p$ and some $d \ge 1$. [L2, L3, L4, A1]

2.1 Fix $\alpha \in \Omega$. Because $V$ is regular, every $g \in G_\alpha$ acts on $V$ by conjugation and the kernel of this action is $G_\alpha \cap C_G(V)$. If a nontrivial element of $G_\alpha$ centralized $V$, then it would fix every point $v\alpha$ with $v \in V$, contradicting faithfulness; so the action is faithful. If $W < V$ were a nontrivial proper $G_\alpha$-invariant subgroup, then $W$ would be normal in $V G_\alpha = G$, contradicting minimality of $V$. Thus the action is irreducible, and $G$ is of affine type. [step 1.1, step 1.2, algebra] ∎ 
