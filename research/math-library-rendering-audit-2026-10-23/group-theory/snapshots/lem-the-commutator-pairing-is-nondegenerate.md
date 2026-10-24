---
id: lem-the-commutator-pairing-is-nondegenerate
kind: lemma
title: "The commutator pairing of an extraspecial $p$-group has trivial radical"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-equivalent-characterisations-of-an-extraspecial-p-group, def-commutator-pairing-of-an-extraspecial-p-group, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, def-center-of-a-group, def-quotient-group]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, \u00a73.2"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "D. Kaur and A. Kulshrestha, Characters of real special 2-groups, \u00a72 opening"
      url: "https://arxiv.org/pdf/1510.06583"
pipeline_run: null
---

## Statement

Let $P$ be an extraspecial $p$-group with $Z(P)=\langle z\rangle$ and
$V=P/Z(P)$, and let $b_z$ be its commutator pairing. The radical of $b_z$ is
trivial: if $\bar x\in V$ satisfies $b_z(\bar x,\bar y)=0$ for every $\bar y\in V$,
then $\bar x$ is the identity of $V$. Conversely the identity of $V$ pairs to
zero with every element.

## Facts & Assumptions

**Given:** An extraspecial $p$-group $P$ with $Z(P)=\langle z\rangle$, the quotient $V=P/Z(P)$, and the commutator pairing $b_z$.

[F1] The commutator pairing of $P$ relative to $z$ is the map $b_z:V\times V\to\mathbb F_p$ determined by $[x,y]=z^{\,b_z(\bar x,\bar y)}$, where $V=P/Z(P)$ ([[def-commutator-pairing-of-an-extraspecial-p-group]]).

[F2] $Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[F3] The quotient group $G/N$ has the left cosets $gN$ as elements ([[def-quotient-group]]).

[L1] The commutator pairing is well defined on $V\times V$, is $\mathbb F_p$-bilinear, and is alternating ([[lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating]]).

[L2] For a finite $p$-group $P$ the following are equivalent: $P$ is extraspecial; $P$ is nonabelian, $|Z(P)|=p$ and $P/Z(P)$ is elementary abelian; $P$ is nonabelian and $Z(P)=P'=\Phi(P)$ has order $p$ ([[prop-equivalent-characterisations-of-an-extraspecial-p-group]]).

## Proof

**Proof technique:** direct.

1.1 Let $x\in P$ represent $\bar x$ and suppose $b_z(\bar x,\bar y)=0$ for every $\bar y\in V$. Since every element of $P$ represents some coset, this says $[x,y]=z^{0}=e$ for every $y\in P$, that is $xy=yx$ for every $y\in P$. [F1, L1]

2.1 Hence $x\in Z(P)$, so $\bar x=xZ(P)$ is the identity coset of $V$. [F2, F3, L2, step 1.1]

3.1 Conversely, if $\bar x$ is the identity of $V$ then $x\in Z(P)$, so $[x,y]=e$ and $b_z(\bar x,\bar y)=0$ for every $\bar y$. [F1, F2, F3, step 2.1] ∎

## Remarks

Triviality of the radical, rather than merely its smallness, is exactly the statement that the centre is the *whole* kernel of the quotient map. It is what lets a single element of $V$ be detected by pairing it against the others, and it is used in that form by every counting argument below.
