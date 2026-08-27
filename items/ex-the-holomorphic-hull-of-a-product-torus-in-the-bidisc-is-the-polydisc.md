---
id: ex-the-holomorphic-hull-of-a-product-torus-in-the-bidisc-is-the-polydisc
kind: example
title: "The holomorphic hull of a product torus in the bidisc is the closed polydisc it bounds"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-holomorphically-convex-hull-and-domain,
       cor-maximum-modulus-on-the-distinguished-boundary-of-a-polydisc]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §1.2 and §2.6"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, §3.2.3"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Example

Fix radii $0<r_1,r_2<1$ in the bidisc $\mathbb D^2$, and let

$$T=\{(z_1,z_2)\in\mathbb C^2: |z_1|=r_1,\ |z_2|=r_2\}.$$

Then the holomorphic hull of $T$ in $\mathbb D^2$ is

$$\widehat T_{\mathbb D^2}=\{(z_1,z_2)\in\mathbb C^2: |z_1|\le r_1,\ |z_2|\le r_2\}.$$

## Facts & Assumptions

**Given:** The product torus $T$ in the bidisc $\mathbb D^2$.

[L1] Hull membership is tested against all holomorphic functions on the ambient
domain ([[def-holomorphically-convex-hull-and-domain]]).

[L2] On a closed polydisc, the supremum of a holomorphic function is attained on
the distinguished boundary
([[cor-maximum-modulus-on-the-distinguished-boundary-of-a-polydisc]]).

## Verification

**Proof technique:** direct.

1.1 Let $P=\{(z_1,z_2): |z_1|\le r_1,\ |z_2|\le r_2\}$. If $a\in P$ and $f$ is holomorphic on $\mathbb D^2$, then $f$ is continuous on the closed polydisc $P$, and the distinguished boundary of $P$ is exactly $T$. Therefore [L2] gives $|f(a)|\le\sup_T|f|$. By [L1], every point of $P$ lies in $\widehat T_{\mathbb D^2}$. [L1, L2, given]

2.1 If $a=(a_1,a_2)$ lies in $\mathbb D^2\setminus P$, then either $|a_1|>r_1$ or $|a_2|>r_2$. In the first case the holomorphic coordinate function $f(z_1,z_2)=z_1$ satisfies $|f(a)|>\sup_T|f|$, and in the second case $f(z_1,z_2)=z_2$ does the same. Hence [L1] excludes every point outside $P$ from the hull. Together with step 1.1, this identifies $\widehat T_{\mathbb D^2}$ exactly. [L1, step 1.1, algebra] ∎
