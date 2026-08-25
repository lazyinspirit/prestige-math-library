---
id: cor-an-extraspecial-p-group-has-no-complement-to-its-centre
kind: corollary
title: "The centre of an extraspecial $p$-group has no complement"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-equivalent-characterisations-of-an-extraspecial-p-group, def-internal-semidirect-product, def-elementary-abelian-p-group, thm-first-isomorphism-theorem-groups, def-quotient-group, def-center-of-a-group, def-special-and-extraspecial-p-groups]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. van Beek, Topics in Finite p-Groups, Proposition 2.32(ii)"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Let $P$ be an extraspecial $p$-group. Then $Z(P)$ has no complement in $P$: there
is no subgroup $H\le P$ with $P=Z(P)H$ and $Z(P)\cap H=1$.

## Facts & Assumptions

**Given:** An extraspecial $p$-group $P$ ([[def-special-and-extraspecial-p-groups]]).

[F1] For subgroups $N,H$ of $G$ with $N\trianglelefteq G$, $G=NH$ and $N\cap H=\{1\}$, the group $G$ is the internal semidirect product of $N$ by $H$, and $H$ is called a complement to $N$ in $G$ ([[def-internal-semidirect-product]]).

[F2] $Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[L1] For a finite $p$-group $P$ the following are equivalent: $P$ is extraspecial; $P$ is nonabelian, $|Z(P)|=p$ and $P/Z(P)$ is elementary abelian; $P$ is nonabelian and $Z(P)=P'=\Phi(P)$ has order $p$ ([[prop-equivalent-characterisations-of-an-extraspecial-p-group]]).

[L2] For every homomorphism $f:G\to H$, the rule $g\ker f\mapsto f(g)$ is an isomorphism from $G/\ker f$ onto $\operatorname{im}f$ ([[thm-first-isomorphism-theorem-groups]]).

[L3] An elementary abelian $p$-group is a finite abelian $p$-group in which every nonidentity element has order $p$ ([[def-elementary-abelian-p-group]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $H\le P$ is a complement to $Z(P)$, so that $P=Z(P)H$ and $Z(P)\cap H=1$; the centre is normal, so the quotient $P/Z(P)$ is defined. [F1, L1, assume-contra]

2.1 Let $\pi:P\to P/Z(P)$ be the quotient map and restrict it to $H$. Its kernel is $H\cap Z(P)=1$, and its image is all of $P/Z(P)$ because every $g\in P$ is $zh$ with $z\in Z(P)$ and $h\in H$, whence $\pi(g)=\pi(h)$; so $H\cong P/Z(P)$. [L2, step 1.1]

3.1 The quotient $P/Z(P)$ is elementary abelian, hence abelian, so $H$ is abelian. [L1, L3, step 2.1]

4.1 Every element of $P$ is $zh$ with $z$ central and $h\in H$, and $(z_1h_1)(z_2h_2)=z_1z_2h_1h_2=z_2z_1h_2h_1=(z_2h_2)(z_1h_1)$, so $P$ is abelian; this contradicts the nonabelianness of an extraspecial group. [F2, step 1.1, step 3.1, discharge-contradiction] ∎

## Remarks

The argument uses no bound on the order of $P$, so the conclusion holds for every extraspecial group and not only for those of order $p^3$. What fails is not that a complement is hard to find but that its existence would make the group abelian, which the definition forbids.
