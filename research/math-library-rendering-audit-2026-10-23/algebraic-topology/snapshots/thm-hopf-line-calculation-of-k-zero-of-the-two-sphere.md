---
id: thm-hopf-line-calculation-of-k-zero-of-the-two-sphere
kind: theorem
title: Hopf-line calculation of K⁰(S²)
status: published
origin: pipeline
deps: [def-external-product-in-complex-k-theory, lem-determinant-classifies-loops-in-complex-general-linear-groups, thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range, def-stiefel-space-grassmannian-and-tautological-bundle, def-clutching-construction-for-bundles-over-a-suspension, prop-equality-in-k-zero-is-stable-isomorphism-over-compact-bases, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Corollary 2.3 and Example 1.13"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Hopf bundle clutching and K(S^2), printed pp.27 and 49–50"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 §2"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Bott class on S^2, printed pp.205–208"
---

## Statement

Assume AC. Let $\gamma$ be the tautological Hopf line on
$S^2=\mathbb{CP}^1$, clutched by $g(z)=z$ in the fixed convention, and put
$\beta=[\gamma]-1$. Then

$$K^0(S^2)\cong\mathbb Z[\beta]/(\beta^2),\qquad \widetilde K^0(S^2)=\mathbb Z\beta.$$

Restriction to a point is projection onto the integer summand. The sign of
$\beta$ is tied to the stated clutching convention.

## Facts & Assumptions

**Given:** AC and the two-hemisphere decomposition of $S^2$.

[F1] Complex bundles on $S^2$ are classified by clutching loops, with $g(z)=z$ defining the tautological Hopf line in the fixed convention ([[def-clutching-construction-for-bundles-over-a-suspension]], [[thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range]], [[def-stiefel-space-grassmannian-and-tautological-bundle]]).

[F2] Determinant classifies loops in every $\operatorname{GL}_n(\mathbb C)$ and sends winding $k$ to $\operatorname{diag}(z^k,1,\ldots,1)$ ([[lem-determinant-classifies-loops-in-complex-general-linear-groups]]).

[F3] Under AC, equality in $K^0$ is equivalent to a common trivial stabilization ([[prop-equality-in-k-zero-is-stable-isomorphism-over-compact-bases]]).

[F4] Tensor product is the $K^0$ multiplication and agrees with the bundle external-product convention ([[def-external-product-in-complex-k-theory]]).

[A1] AC is used only through [F3] and the already propagated AC clause of [F4].

## Proof

**Proof technique:** direct.

1.1 Let $E$ have rank $n>0$. By [F1] it is clutched by a loop $g:S^1\to\operatorname{GL}_n(\mathbb C)$. If $k$ is the winding number of $\det g$, [F2] deforms $g$ to $\operatorname{diag}(z^k,1,\ldots,1)$, so [F1] gives $E\cong\gamma^k\oplus\varepsilon^{n-1}$. The rank-zero bundle is $0_{S^2}$. Consequently every virtual class is an integral combination of $1$ and powers of $[\gamma]$. [F1, F2]

1.2 The loops $\operatorname{diag}(z^2,1)$ and $\operatorname{diag}(z,z)$ have the same determinant. By [F2] they are homotopic, and [F1] gives $\gamma^2\oplus\varepsilon^1\cong\gamma\oplus\gamma$. Hence $[\gamma]^2-2[\gamma]+1=0$, or $\beta^2=0$. It follows algebraically that $[\gamma]^k=(1+\beta)^k=1+k\beta$ for every $k\in\mathbb Z$, since $(1+\beta)^{-1}=1-\beta$. [F1, F2, F4, algebra]

2.1 If $a+k\beta=0$, restriction to a point gives $a=0$. Then $k\beta=0$ implies $[\gamma^k]=1$ by step 1.2. By [F3], after adding the same trivial bundle, $\gamma^k$ and the trivial line are isomorphic. Their stabilized clutching determinants have winding numbers $k$ and $0$, so [F2] forces $k=0$. Thus $1$ and $\beta$ are additively independent. Together with steps 1.1–2.1 this proves the displayed ring presentation. [F2, F3, A1, step 1.1, step 1.2]

3.1 Basepoint restriction sends $1$ to $1\in\mathbb Z$ and $\beta=[\gamma]-1$ to $0$, so its kernel is exactly $\mathbb Z\beta$. Reversing the hemisphere convention replaces $z$ by $z^{-1}$ and hence $\gamma$ by $\gamma^*$; step 1.2 gives $[\gamma^*]-1=(1-\beta)-1=-\beta$. [F1, step 1.2, step 2.1] ∎
