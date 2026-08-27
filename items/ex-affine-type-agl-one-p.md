---
id: ex-affine-type-agl-one-p
kind: example
title: "The natural action of AGL(1,p) is affine type"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types, prop-unique-abelian-minimal-normal-subgroup-gives-affine-type]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Leonard H. Soicher, Primitive permutation groups"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
---

## Example

Let $p$ be prime. The natural action of
$\operatorname{AGL}(1,p)=\mathbb F_p \rtimes \mathbb F_p^\times$ on the set
$\mathbb F_p$ is of affine type.

## Facts & Assumptions

**Given:** The semidirect product action $(b,a)\cdot x=ax+b$ of $\operatorname{AGL}(1,p)$ on $\mathbb F_p$.

[L1] A faithful primitive group with a unique abelian minimal normal subgroup is
of affine type
([[prop-unique-abelian-minimal-normal-subgroup-gives-affine-type]]).

[A1] The translation subgroup $\mathbb F_p \times \{1\}$ is normal, abelian,
and regular on $\mathbb F_p$.

## Verification

**Proof technique:** direct.

1.1 The translation subgroup $V=\mathbb F_p \times \{1\}$ is elementary abelian of order $p$ and acts regularly by $x \mapsto x+b$. [given, A1]

2.1 Let $N \trianglelefteq \operatorname{AGL}(1,p)$ be nontrivial. If $N \cap V \neq 1$, then $V \le N$ because $V$ has prime order. If $N \cap V = 1$, then the image of $N$ in the quotient $\operatorname{AGL}(1,p)/V \cong \mathbb F_p^\times$ is nontrivial; choose $(c,a) \in N$ with $a \neq 1$. For any $b \in \mathbb F_p$, the commutator $(b,1)(c,a)(-b,1)(c,a)^{-1}=((1-a)b,1)$ lies in $N \cap V$, contradiction. So every nontrivial normal subgroup contains $V$, and $V$ is the unique minimal normal subgroup. [step 1.1, choose, algebra]

3.1 Therefore [L1] applies, and the natural action of $\operatorname{AGL}(1,p)$ is of affine type. [L1, step 2.1] ∎
