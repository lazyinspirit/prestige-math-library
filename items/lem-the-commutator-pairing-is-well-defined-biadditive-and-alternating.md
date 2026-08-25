---
id: lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating
kind: lemma
title: "The commutator pairing is well defined on the central quotient, is bilinear over $\\mathbb F_p$, and is alternating"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-commutator-identities-in-a-group-of-class-two, cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p, def-commutator-pairing-of-an-extraspecial-p-group, lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces, thm-z-mod-p-is-a-field, def-commutator-and-commutator-subgroup, def-group-power, def-center-of-a-group, def-quotient-group]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Lemma 3.7 and \u00a73.2"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, \u00a72.4"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Let $P$ be an extraspecial $p$-group with $Z(P)=\langle z\rangle$ and
$V=P/Z(P)$. The commutator pairing $b_z$ is well defined on $V\times V$: the
value of $b_z(\bar x,\bar y)$ does not depend on the representatives $x$ and
$y$. It is $\mathbb F_p$-bilinear,

$$b_z(\bar x\bar y,\bar w)=b_z(\bar x,\bar w)+b_z(\bar y,\bar w),\qquad b_z(\bar w,\bar x\bar y)=b_z(\bar w,\bar x)+b_z(\bar w,\bar y),\qquad b_z(\bar x^{\,a},\bar y)=a\,b_z(\bar x,\bar y)=b_z(\bar x,\bar y^{\,a}),$$

and alternating: $b_z(\bar x,\bar x)=0$ for every $\bar x\in V$. Consequently
$b_z(\bar y,\bar x)=-b_z(\bar x,\bar y)$.

## Facts & Assumptions

**Given:** An extraspecial $p$-group $P$ with $Z(P)=\langle z\rangle$ of order $p$, the quotient $V=P/Z(P)$ with its canonical $\mathbb F_p$-structure, and the pairing $b_z$ defined by $[x,y]=z^{\,b_z(\bar x,\bar y)}$.

[F1] The commutator pairing of $P$ relative to $z$ is the map $b_z:V\times V\to\mathbb F_p$ determined by $[x,y]=z^{\,b_z(\bar x,\bar y)}$, where $V=P/Z(P)$ carries the canonical scalar action $\bar a\cdot\bar x=\bar x^{a}$ ([[def-commutator-pairing-of-an-extraspecial-p-group]]).

[F2] For $g,h\in G$ the commutator is $[g,h]:=ghg^{-1}h^{-1}$ ([[def-commutator-and-commutator-subgroup]]).

[F3] The rule $\bar a\cdot x=x^a$ gives every elementary abelian $p$-group its canonical $\mathbb F_p$-vector-space structure, with the group operation as vector addition and the identity as zero ([[lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces]]).

[L1] An extraspecial $p$-group is nilpotent of class exactly two, so its derived subgroup is central, and every nonidentity commutator has order $p$ ([[cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p]]).

[L2] If $[G,G]\le Z(G)$ then $[xy,w]=[x,w][y,w]$, $[x,yw]=[x,y][x,w]$, and $[x^n,y]=[x,y]^n=[x,y^n]$ for every integer $n$ ([[lem-commutator-identities-in-a-group-of-class-two]]).

[L3] $Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[L4] For every prime $p$, the operations of addition and multiplication on $\mathbb Z/p$ make it a field ([[thm-z-mod-p-is-a-field]]).

## Proof

**Proof technique:** direct.

1.1 The derived subgroup of $P$ is central, so the two expansion identities and the power identity are available for all elements of $P$. [L1, L2]

1.2 Alternation: $[x,x]=xxx^{-1}x^{-1}=e=z^{0}$, so $b_z(\bar x,\bar x)=0$. [F1, F2]

2.1 If $\bar x=\overline{x'}$ then $x'=xu$ with $u\in Z(P)$, and $[xu,y]=[x,y][u,y]=[x,y]$ because $u$ is central makes $[u,y]=uyu^{-1}y^{-1}=e$; the second variable is the same computation with the other expansion identity. So $b_z(\bar x,\bar y)$ depends only on the two cosets. [F1, F2, L3, step 1.1]

2.2 Additivity in the first variable: $z^{\,b_z(\bar x\bar y,\bar w)}=[xy,w]=[x,w][y,w]=z^{\,b_z(\bar x,\bar w)}z^{\,b_z(\bar y,\bar w)}=z^{\,b_z(\bar x,\bar w)+b_z(\bar y,\bar w)}$, and exponents of $z$ are determined modulo $p$; the second variable is symmetric. [F1, F3, step 1.1]

2.3 Compatibility with scalars: for an integer $a$, $z^{\,b_z(\bar x^{\,a},\bar y)}=[x^a,y]=[x,y]^a=z^{\,a\,b_z(\bar x,\bar y)}$, and both sides depend only on $a$ modulo $p$ because $z$ has order $p$; the scalar action on $V$ is $\bar a\cdot\bar x=\bar x^{a}$, so this is exactly $b_z(a\cdot\bar x,\bar y)=a\,b_z(\bar x,\bar y)$, and likewise in the second variable. [F1, F3, L4, step 1.1]

3.1 Expanding $0=b_z(\bar x\bar y,\bar x\bar y)$ by steps 2.2 and 1.2 gives $0=b_z(\bar x,\bar y)+b_z(\bar y,\bar x)$, so $b_z(\bar y,\bar x)=-b_z(\bar x,\bar y)$. [step 2.2, step 1.2] ∎

## Remarks

Alternation is the primitive property and skew symmetry is derived from it, not the other way round. At $p=2$ the two are not interchangeable: there $-1=1$, so skew symmetry says only that the pairing is symmetric, and it is the vanishing of $b_z(\bar x,\bar x)$ that carries content.
