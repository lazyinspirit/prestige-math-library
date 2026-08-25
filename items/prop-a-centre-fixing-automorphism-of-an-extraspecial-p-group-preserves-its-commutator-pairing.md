---
id: prop-a-centre-fixing-automorphism-of-an-extraspecial-p-group-preserves-its-commutator-pairing
kind: proposition
title: "An automorphism fixing the centre pointwise induces a pairing-preserving automorphism of the central quotient, with kernel the inner automorphisms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-commutator-pairing-of-an-extraspecial-p-group, prop-equivalent-characterisations-of-an-extraspecial-p-group, cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number, prop-an-automorphism-of-an-extraspecial-p-group-trivial-on-the-frattini-quotient-is-inner, def-group-isomorphism-and-automorphism, def-inner-automorphism-group, def-commutator-and-commutator-subgroup]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups (Hilary Term 2008), 48 pp."
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, 62 pp."
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. Kaur and A. Kulshrestha, Characters of real special 2-groups (arXiv:1510.06583v1)"
      url: "https://arxiv.org/pdf/1510.06583"
---
## Statement

Let $P$ be an extraspecial $p$-group with $Z(P)=\langle z\rangle$ and commutator pairing $b_z$, and let $\alpha\in\operatorname{Aut}(P)$ fix $Z(P)$ pointwise.

Then $\alpha$ induces an automorphism $\bar\alpha$ of $P/Z(P)$ satisfying

$$b_z\bigl(\bar\alpha(\bar x),\bar\alpha(\bar y)\bigr)=b_z(\bar x,\bar y)$$

for all $\bar x,\bar y\in P/Z(P)$. The kernel of the action of the centre-fixing automorphism subgroup on $P/Z(P)$ is $\operatorname{Inn}(P)$.

## Facts & Assumptions

**Given:** An extraspecial $p$-group $P$ with $Z(P)=\langle z\rangle$, its commutator pairing $b_z$, and an automorphism $\alpha$ fixing $Z(P)$ pointwise.

[F1] For an extraspecial $p$-group $P$ with $Z(P)=\langle z\rangle$, the commutator pairing is the map $b_z(\bar x,\bar y)\in\mathbb Z/p$ determined by $[x,y]=z^{b_z(\bar x,\bar y)}$ ([[def-commutator-pairing-of-an-extraspecial-p-group]]).

[L1] For a finite $p$-group $P$ the following are equivalent: $P$ is extraspecial; $P$ is nonabelian, $|Z(P)|=p$ and $P/Z(P)$ is elementary abelian; $P$ is nonabelian and $Z(P)=P'=\Phi(P)$ has order $p$ ([[prop-equivalent-characterisations-of-an-extraspecial-p-group]]).

[L2] Every extraspecial $p$-group has order $p^{1+2n}$ for some $n\ge1$ ([[cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number]]).

[L3] For an extraspecial $p$-group of order $p^{1+2n}$, an automorphism acting trivially on its Frattini quotient is inner ([[prop-an-automorphism-of-an-extraspecial-p-group-trivial-on-the-frattini-quotient-is-inner]]).

[L4] Group isomorphisms, automorphisms and the set $\operatorname{Aut}(G)$. ([[def-group-isomorphism-and-automorphism]]).

[L5] Inner automorphisms and $\operatorname{Inn}(G)$. ([[def-inner-automorphism-group]]).

[L6] $$[g,h]:=ghg^{-1}h^{-1}.$$ ([[def-commutator-and-commutator-subgroup]]).


## Proof

**Proof technique:** direct.

1.1 Because $\alpha$ fixes $Z(P)$ pointwise, it sends each coset $xZ(P)$ to $\alpha(x)Z(P)$; this is well defined, so $\alpha$ induces an automorphism $\bar\alpha$ of $P/Z(P)$. Also $[\alpha(x),\alpha(y)]=\alpha([x,y])=\alpha\bigl(z^{b_z(\bar x,\bar y)}\bigr)=z^{b_z(\bar x,\bar y)}$, so $b_z(\bar\alpha(\bar x),\bar\alpha(\bar y))=b_z(\bar x,\bar y)$ for all $\bar x,\bar y\in P/Z(P)$. [F1, L4, L6]

2.1 If $\bar\alpha$ is the identity on $P/Z(P)$, then $\alpha$ acts trivially on the central quotient. Since $P$ is extraspecial, [L1] gives $\Phi(P)=Z(P)$ and [L2] supplies the order hypothesis of [L3], so $\alpha$ acts trivially on the Frattini quotient and is inner. Conversely, every inner automorphism $c_g(x)=gxg^{-1}$ acts trivially on $P/Z(P)$ because $gxg^{-1}x^{-1}=[g,x]\in[P,P]=Z(P)$ by [L1] and [L6]. Hence the kernel of the action on $P/Z(P)$ is exactly $\operatorname{Inn}(P)$. [L1, L2, L3, L5, L6, step 1.1] ∎
