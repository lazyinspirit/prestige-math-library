---
id: fs-the-universal-coefficient-short-exact-sequence-splits-naturally
kind: false-statement
title: "Universal coefficients split naturally"
status: draft
origin: pipeline
deps: [thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two, prop-schur-multiplier-of-a-cyclic-group-is-trivial, thm-schur-multiplier-of-an-abelian-group-is-its-exterior-square, lem-exterior-square-has-the-alternating-universal-property, thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
    - title: "J. M. Boardman, Universal Coefficient Theorem for Cohomology"
      url: https://math.jhu.edu/~jmb/note/uctcoh.pdf
proof_strategy: contradiction
verification:
  precheck: pass
---

## Statement

For groups $G$ and trivial $G$-modules $A$, the degree-two universal-coefficient
short exact sequence splits naturally in $G$ and $A$.

## Facts & Assumptions

**Given:** Fix $A=C_2$ with trivial action and $V=C_2\times C_2$, written as
$\mathbb F_2^2$. Write $p_G:H^2(G;A)\to\operatorname{Hom}(M(G),A)$ for the
universal-coefficient map.

[L1] The degree-two universal-coefficient sequence is natural and admits a
splitting after choices ([[thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two]]).

[L2] A cyclic group has zero Schur multiplier
([[prop-schur-multiplier-of-a-cyclic-group-is-trivial]]).

[L3] For an abelian group $B$, $M(B)\cong\bigwedge^2B$
([[thm-schur-multiplier-of-an-abelian-group-is-its-exterior-square]]), and
alternating bilinear maps factor through its exterior square
([[lem-exterior-square-has-the-alternating-universal-property]]).

[L4] Classes in $H^2(G;A)$ naturally classify central extensions of $G$ by
$A$ when the action is trivial
([[thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action]]).
Under this classification, restriction to a subgroup pulls back the extension,
and zero represents a split extension: restricting a factor set gives the
pullback factor set, and a homomorphic section has zero factor set.

## Refutation

**Proof technique:** contradiction.

1.1 Suppose there are splitting homomorphisms $s_G:\operatorname{Hom}(M(G),A)\to H^2(G;A)$ natural in $G$, with $p_Gs_G=\mathrm{id}$. For every subgroup inclusion $i:L\hookrightarrow V$ with $L\cong C_2$, [L2] gives $M(L)=0$, so naturality forces $i^*s_V(\lambda)=s_L(\lambda\circ M(i))=s_L(0)=0$ for every $\lambda:M(V)\to A$. [L1, L2, assume-contra]

2.1 The map $b((x_1,x_2),(y_1,y_2))=x_1y_2+x_2y_1$ is alternating and bilinear to $A$. It takes value $1$ on the standard basis pair, so [L3] supplies a nonzero homomorphism $\lambda:M(V)\to A$. Put $\alpha=s_V(\lambda)$. Then $p_V(\alpha)=\lambda\ne0$. [L3, step 1.1, construct, algebra]

3.1 Represent $\alpha$ by a central extension $1\to A\to E\xrightarrow{\pi}V\to1$. Its restriction to each of the three order-two subgroups $L\le V$ is zero by step 1.1. Hence each preimage $\pi^{-1}(L)$ is a split central extension, isomorphic to $C_2\times C_2$, and every element of that preimage has square $1$. [L4, step 1.1, step 2.1]

4.1 Every element of $E$ either belongs to the kernel $A$, or maps to a nonzero vector of $V$ and therefore belongs to one of these three preimages. Thus every element of $E$ has square $1$. For $x,y\in E$, this gives $xy=(xy)^{-1}=y^{-1}x^{-1}=yx$, so $E$ is abelian. Choose lifts $u,v$ of the two standard basis vectors of $V$. Since $u^2=v^2=1$ and $uv=vu$, the map $(a,b)\mapsto u^av^b$ is a homomorphic section of $\pi$. [step 3.1, choose, algebra]

5.1 This section makes $\alpha=0$, contradicting $p_V(\alpha)=\lambda\ne0$. Therefore no splitting can be natural in the group variable even for the fixed coefficient group $C_2$, and in particular none is natural in both variables. Individual sequences still split after choices by [L1]. [L4, L1, step 2.1, step 4.1, discharge-contradiction] ∎
