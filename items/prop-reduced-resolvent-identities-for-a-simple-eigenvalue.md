---
id: prop-reduced-resolvent-identities-for-a-simple-eigenvalue
kind: proposition
title: "The reduced resolvent satisfies the standard projector and inverse identities on the complementary invariant subspace"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-reduced-resolvent-or-group-inverse-at-a-simple-eigenvalue,
       def-simple-spectral-projector]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. W. Stewart and Ji-guang Sun, Matrix Perturbation Theory"
      url: "https://djvu.online/file/j5uuUqxIKij6w"
---

## Statement

Let $\lambda$ be a simple eigenvalue of $A$, let $x,y$ be compatible
eigenvectors normalized by $y^\ast x=1$, and let $P=xy^\ast$. Then the
restriction of $A-\lambda I$ to $\ker y^\ast$ is a bijection
$\ker y^\ast\to\ker y^\ast$. If $S$ is its inverse on $\ker y^\ast$ and
$Sx=0$, then

$$SP=PS=0,\qquad S(A-\lambda I)=(A-\lambda I)S=I-P,$$

and this $S$ is unique.

## Facts & Assumptions

**Given:** A simple eigenvalue $\lambda$, normalized compatible eigenvectors $x,y$, and the projector $P=xy^\ast$.

[F1] Under the normalization $y^\ast x=1$, the simple spectral projector is $P=xy^\ast$ ([[def-simple-spectral-projector]]).

## Proof
**Proof technique:** direct.

1.1 Every vector $v$ decomposes uniquely as $v=(y^\ast v)x + (v-(y^\ast v)x)$, with the second term in $\ker y^\ast$. If $z\in\ker y^\ast$ and $(A-\lambda I)z=0$, then $z$ is a right eigenvector for the simple eigenvalue $\lambda$, so $z=cx$ for some scalar $c$. Applying $y^\ast$ gives $0=y^\ast z=c\,y^\ast x=c$, hence $z=0$. Therefore the restriction of $A-\lambda I$ to $\ker y^\ast$ is injective, and since both domain and codomain have dimension $n-1$, it is bijective. [given, algebra]

2.1 Define $S$ to be the inverse of that restriction on $\ker y^\ast$ and to vanish on $\operatorname{span}\{x\}$. Then $SP=PS=0$ by construction. For $v=\alpha x+z$ with $z\in\ker y^\ast$, [F1] gives $Pv=(y^\ast v)x=(\alpha+y^\ast z)x=\alpha x$, so $(I-P)v=z$. Therefore $S(A-\lambda I)v=S(A-\lambda I)z=z=(I-P)v$, and similarly $(A-\lambda I)Sv=(A-\lambda I)S z=z=(I-P)v$. Thus all displayed identities hold. [F1, construct, step 1.1, algebra]

3.1 If $S'$ is another linear map with the same identities, then $S'x=0$ because $S'P=0$ and $Px=x$. On $\ker y^\ast$ one has $(A-\lambda I)S'z=z=(A-\lambda I)Sz$, and the injectivity from step 1.1 gives $S'z=Sz$. Hence $S'=S$, so the reduced resolvent of [[def-reduced-resolvent-or-group-inverse-at-a-simple-eigenvalue]] is well defined and unique. [step 1.1, step 2.1, algebra] ∎
