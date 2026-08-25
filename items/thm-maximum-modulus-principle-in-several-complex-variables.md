---
id: thm-maximum-modulus-principle-in-several-complex-variables
kind: theorem
title: "An interior local maximum of the modulus forces a scalar holomorphic function to be constant"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-identity-theorem-in-several-complex-variables, thm-chain-rule-for-holomorphic-maps-in-several-variables, thm-local-maximum-modulus-principle, def-holomorphic-function-in-several-complex-variables, def-balls-and-polydiscs-in-complex-euclidean-space, prop-algebra-of-holomorphic-functions-in-several-variables]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, v4.4, Thm. 1.2.8"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "M. Jabbari, Notes for Analysis and Geometry of Several Complex Variables, Thm. 22(8)"
      url: "https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf"
pipeline_run: null
---

## Statement

Let $m \ge 1$, let $U \subseteq \mathbb{C}^m$ be a nonempty connected open set,
and let $f : U \to \mathbb{C}$ be holomorphic. Suppose there are
$a \in U$ and an open ball $B \subseteq U$ centred at $a$ such that

$$|f(z)| \le |f(a)| \qquad (z \in B).$$

Then $f$ is constant on $U$.

## Facts & Assumptions

**Given:** A nonempty connected open set $U \subseteq \mathbb{C}^m$, a holomorphic function $f : U \to \mathbb{C}$, a point $a \in U$, and an open ball $B \subseteq U$ centred at $a$ such that $|f(z)| \le |f(a)|$ for every $z\in B$.

[L1] The composite of holomorphic maps is holomorphic and its complex Jacobian is the product ([[thm-chain-rule-for-holomorphic-maps-in-several-variables]]).

[L2] If the modulus of a holomorphic function on a complex domain has an interior local maximum, then the function is constant ([[thm-local-maximum-modulus-principle]]).

[L3] A holomorphic function vanishing on a nonempty open subset of a connected open set in $\mathbb{C}^m$ vanishes identically ([[thm-identity-theorem-in-several-complex-variables]]).

[L4] Balls in $\mathbb{C}^m$ are the Euclidean balls of [[def-balls-and-polydiscs-in-complex-euclidean-space]].

[L5] Sums, products and nonvanishing quotients of holomorphic functions are holomorphic ([[prop-algebra-of-holomorphic-functions-in-several-variables]]).

## Proof

**Proof technique:** direct.

1.1 Because $B$ is an open ball centred at $a$, there is $r>0$ such that $\{z\in\mathbb C^m:\|z-a\|<r\}\subseteq B$ in the Euclidean norm of [L4]. [given, L4]

2.1 Fix a vector $v\in\mathbb C^m$ with $\|v\|=1$, and define $g_v(\xi):=f(a+\xi v)$ on the disc $D(0,r)$. The map $\xi\mapsto a+\xi v$ is holomorphic, so [L1] makes $g_v$ holomorphic on $D(0,r)$; and for every $\xi\in D(0,r)$ one has $a+\xi v\in B$, hence $|g_v(\xi)|=|f(a+\xi v)|\le|f(a)|=|g_v(0)|$. Therefore [L2] makes $g_v$ constant on all of $D(0,r)$. [step 1.1, L1, L2]

3.1 Let $z\in B$ be arbitrary. If $z=a$ there is nothing to prove. Otherwise put $v:=(z-a)/\|z-a\|$ and $\xi:=\|z-a\|$; then $\|v\|=1$, $|\xi|<r$, and $z=a+\xi v$, so step 2.1 gives $f(z)=g_v(\xi)=g_v(0)=f(a)$. Thus $f$ is constant on the nonempty open set $B$, and [L5] makes $f-f(a)$ holomorphic on $U$; applying [L3] to $f-f(a)$ and the open set $B$ yields $f\equiv f(a)$ on $U$. [step 2.1, L3, L5] ∎

## Remarks

- **The argument gives constancy on the whole local ball.** The slice theorem is applied on the entire disc cut out by the ball, not merely near the origin, so the proof first shows that $f$ is constant on all of $B$ and only then extends that constancy to $U$ by the several-variable identity theorem.
