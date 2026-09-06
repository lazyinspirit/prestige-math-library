---
id: ex-baer-sum-of-two-extensions-of-cyclic-groups
kind: example
title: "Baer sum of two extensions of cyclic groups"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
deps: [def-baer-sum-of-extension-classes, def-split-extension-class, thm-baer-sum-makes-extension-classes-an-abelian-group]
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Example

The Baer sum of two copies of the nonsplit extension
$$e:0\longrightarrow\mathbb Z/2\xrightarrow{a\mapsto2a}\mathbb Z/4\xrightarrow{x\mapsto x\bmod2}\mathbb Z/2\longrightarrow0$$
is split. Thus $[e]+[e]=0$ among extension classes of $\mathbb Z/2$ by $\mathbb Z/2$.

## Facts & Assumptions

**Given:** The two copies of $e$ displayed above. All groups and maps in the calculation are abelian.

[F1] Baer sum is diagonal pullback followed by codiagonal pushout: [[def-baer-sum-of-extension-classes]].

[F2] The split class [[def-split-extension-class]] is the additive zero whenever extension classes form a set, by [[thm-baer-sum-makes-extension-classes-an-abelian-group]].

## Verification

**Proof technique:** direct.

1.1 Any middle group in an extension of $\mathbb Z/2$ by $\mathbb Z/2$ has four elements. Transporting its law and endpoint maps to a fixed four-element set shows that the classes have a finite set realization. The extension $e$ is nonsplit because every element of $\mathbb Z/4$ above $1\in\mathbb Z/2$ has order four. [given, algebra]

1.2 The diagonal pullback has middle group $D=\{(x,y)\in(\mathbb Z/4)^2:x\equiv y\pmod2\}$ and kernel map $(a,b)\mapsto(2a,2b)$. Its codiagonal pushout is $E=(D\oplus\mathbb Z/2)/L$, where $L=\{((2a,2b),-(a+b)):a,b\in\mathbb Z/2\}$. The endpoint maps are $j(c)=[((0,0),c)]$ and $q([((x,y),c)])=x\bmod2$. [F1, given, construct]

2.1 The map $j$ is injective since a relation with first component $(0,0)$ has $a=b=0$. If $q([((x,y),c)])=0$, write $x=2a,y=2b$; its class equals $j(c+a+b)$. Thus $\ker q=\operatorname{im}j$, and $q$ is surjective. The class $t=[((1,-1),0)]$ has $q(t)=1$ and $2t=[((2,2),0)]=0$, the relation for $a=b=1$. [step 1.2, algebra]

3.1 Therefore $s(1)=t$ defines a homomorphic section of $q$. The map $(c,b)\mapsto j(c)+s(b)$ is an endpoint-preserving isomorphism $(\mathbb Z/2)^2\to E$: surjectivity and injectivity follow from the kernel description and $qs=1$. Hence the Baer sum is split and equals the zero class. [F2, step 1.1, step 2.1, algebra] ∎
