---
id: fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks
kind: false-statement
title: "FALSE: member equivalence is transitive in any pointed category with pullbacks"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-member-equivalence-is-transitive,
       thm-the-pullback-of-an-epimorphism-is-an-epimorphism]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Proposition 2 and Theorem 3"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement

In any pointed category with pullbacks, the member relation $\equiv$ is
transitive.

## Facts & Assumptions

**Given:** The weakened hypothesis of the statement.

## Refutation

**Proof technique:** direct.

1.1 Work in the category of commutative rings not required to have an identity, with arbitrary ring homomorphisms. The zero ring is a zero object, and pullbacks are the usual fibre-product rings, so this category is pointed and has pullbacks. Let $$A:=\mathbb C[t,t^{-1}],\qquad x:\mathbb C[t]\hookrightarrow A,\qquad y:=1_A:A\to A,\qquad z:\mathbb C[t^{-1}]\hookrightarrow A$$ be the two localization inclusions and the identity member. The map $x$ is epic: if $\varphi,\psi:A\to R$ agree on $\mathbb C[t]$, then they agree on $e:=\varphi(1)=\psi(1)$ and $a:=\varphi(t)=\psi(t)$. Both $\varphi(t^{-1})$ and $\psi(t^{-1})$ are inverses of $a$ in the commutative corner ring $eR$, so they are equal; hence $\varphi=\psi$. The same argument shows that $z$ is epic. Therefore $x\equiv y$ and $y\equiv z$. [construct, algebra]

1.2 The pullback of $x$ and $z$ is the constant subring $\mathbb C$, because inside $\mathbb C[t,t^{-1}]$ one has $$\mathbb C[t]\cap\mathbb C[t^{-1}] = \mathbb C.$$ Its two projections are the constant-term inclusions $$p_1:\mathbb C \to \mathbb C[t],\qquad p_2:\mathbb C \to \mathbb C[t^{-1}].$$ [construct, algebra]

2.1 Suppose $x \equiv z$. Then there would exist a ring $T$ and epimorphisms $q:T \to \mathbb C[t]$ and $r:T \to \mathbb C[t^{-1}]$ with $x q = z r$. By the pullback property from step 1.2, there would be a map $m:T \to \mathbb C$ with $q = p_1 m$ and $r = p_2 m$. Since $q$ is epic, $p_1$ would also be epic. But $p_1$ is not epic: the evaluation maps $$\operatorname{ev}_0,\operatorname{ev}_1:\mathbb C[t]\to\mathbb C$$ are distinct and satisfy $$\operatorname{ev}_0 p_1 = \operatorname{ev}_1 p_1 = 1_{\mathbb C}.$$ This contradiction shows that $x \not\equiv z$. [step 1.2, assume-hyp, algebra]

3.1 Thus $\equiv$ is not transitive in this pointed category with pullbacks, and the statement is false. [step 1.1, step 2.1] ∎
