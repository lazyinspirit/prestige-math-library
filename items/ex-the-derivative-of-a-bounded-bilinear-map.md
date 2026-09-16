---
id: ex-the-derivative-of-a-bounded-bilinear-map
kind: example
title: The derivative of a bounded bilinear map
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-frechet-derivative-between-banach-spaces, def-bounded-bilinear-map, thm-chain-sum-product-and-composition-rules-for-banach-derivatives, def-product-norms-on-finitely-many-normed-spaces, def-norm-and-normed-space, def-operator-norm]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Zuoqin Wang, Lecture 6 — §2.1.2 (Leibniz rule)"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
---

## Example

Let $X$, $Y$, $Z$ be real Banach spaces and let $B : X \times Y \to Z$ be a
bounded bilinear map ([[def-bounded-bilinear-map]]), with the product space
$X \times Y$ carrying the max norm
$\|(h,k)\|_{\max} = \max\{\|h\|,\|k\|\}$
([[def-product-norms-on-finitely-many-normed-spaces]]). Then $B$ is Fréchet
differentiable everywhere, with

$$DB(x,y)(h,k) = B(h,y) + B(x,k) \qquad \bigl((x,y),(h,k) \in X\times Y\bigr),$$

the right-hand side being a bounded linear map of $(h,k)$. In particular:

* if an associative multiplication $m(a,b) = ab$ on a real normed space is a
  bounded bilinear map — the Banach-algebra case — then
  $Dm(a,b)(h,k) = hb + ak$;
* the diagonal map $x \mapsto B(x,x)$ has derivative
  $h \mapsto B(h,x) + B(x,h)$.

## Facts & Assumptions

**Given:** Real Banach spaces $X,Y,Z$, a bounded bilinear $B : X\times Y \to Z$ with a constant $C \ge 0$ satisfying $\|B(u,v)\| \le C\|u\|\,\|v\|$ for all $u,v$, and a point $(x,y) \in X\times Y$.

[L1] Bounded bilinearity and the defining estimate $\|B(u,v)\| \le C\|u\|\,\|v\|$ ([[def-bounded-bilinear-map]]).

[L2] The max norm on $X\times Y$ is a norm and $\|(h,k)\|_{\max} \to 0$ exactly when $h \to 0$ and $k \to 0$ ([[def-product-norms-on-finitely-many-normed-spaces]]); the norm is subadditive and absolutely homogeneous ([[def-norm-and-normed-space]]).

[L3] Fréchet differentiability at $(x,y)$ means a bounded linear candidate $T$ whose remainder satisfies $\|B(x+h,y+k)-B(x,y)-T(h,k)\| = o(\|(h,k)\|_{\max})$ ([[def-frechet-derivative-between-banach-spaces]]); the operator norm bounds $\|Tu\| \le \|T\|\,\|u\|$ ([[def-operator-norm]]).

[L4] Chain rule for a composite with the diagonal map, and the derivative of a bounded linear map ([[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]).



## Verification

**Proof technique:** direct.

1.1 Expanding with [L1], $B(x+h,\,y+k) - B(x,y) = B(h,y) + B(x,k) + B(h,k)$, so the remainder after subtracting the proposed linear part $T(h,k) := B(h,y)+B(x,k)$ is exactly $B(h,k)$. [L1, algebra]

1.2 The map $T(h,k) = B(h,y)+B(x,k)$ is linear in $(h,k)$ and bounded: $\|T(h,k)\| \le C\|h\|\,\|y\| + C\|x\|\,\|k\| \le C(\|y\|+\|x\|)\|(h,k)\|_{\max}$ by [L1] and [L2]. [L1, L2, algebra]

2.1 For $(h,k) \ne (0,0)$ the normalised remainder is $\|B(h,k)\|/\|(h,k)\|_{\max} \le C\|h\|\,\|k\|/\|(h,k)\|_{\max} \le C\|(h,k)\|_{\max}$, which tends to $0$ as $(h,k) \to 0$ by [L1] and [L2]; hence $DB(x,y) = T$ by [L3]. [step 1.1, step 1.2, L1, L2, L3, algebra]

3.1 For an associative algebra multiplication that is bounded bilinear, [step 2.1] with $B = m$ gives $Dm(a,b)(h,k) = m(h,b)+m(a,k) = hb+ak$, using bilinearity to write $m(h,b) = hb$ and $m(a,k) = ak$. [step 2.1, algebra]

3.2 The diagonal map $d(x) := B(x,x)$ is the composite of $x \mapsto (x,x)$ with $B$; the diagonal is bounded linear with derivative $(h) \mapsto (h,h)$, so the chain rule [L4] and [step 2.1] give $Dd(x)h = DB(x,x)(h,h) = B(h,x)+B(x,h)$. [step 2.1, L4, algebra]

4.1 Steps 2.1, 3.1 and 3.2 establish every displayed claim of the example. [step 2.1, step 3.1, step 3.2] ∎
