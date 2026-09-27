---
id: lem-generic-shapovalov-radical-on-a-casimir-hyperplane
kind: lemma
title: "The generic radical on a Shapovalov factor hyperplane"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-shapovalov-determinant-hyperplane-factorization, prop-the-shapovalov-radical-is-the-maximal-submodule, lem-every-nonzero-verma-submodule-contains-a-singular-vector, lem-a-nonzero-verma-homomorphism-is-injective, lem-homomorphisms-from-a-simple-verma-module-have-dimension-at-most-one, thm-universal-property-of-verma-modules, prop-casimir-eigenvalue-on-a-highest-weight-module, prop-weights-of-a-verma-module-lie-below-lambda]
proof_strategy: direct
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercise 8.15(vii), p. 46"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical author review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-04-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Fix $\alpha\in\Phi^+$ and $n\in\mathbb Z_{>0}$, and let
$H_{\alpha,n}=\{\lambda:\langle\lambda+\rho,\alpha^\vee\rangle=n\}$.
Suppose $H_{\alpha,n}$ is a factor hyperplane of at least one
Shapovalov determinant. Outside a countable union of proper affine
subspaces of $H_{\alpha,n}$, put $\mu=\lambda-n\alpha$.
Then $M(\mu)$ is simple, there is a unique one-dimensional space of maps
$M(\mu)\to M(\lambda)$, every nonzero such map is injective, and its image
is the entire Shapovalov radical $J(\lambda)$. Consequently
$M(\lambda)/M(\mu)=L(\lambda)$ is simple and

$$\dim\ker S_\lambda|_{M(\lambda)_{\lambda-\beta}}=K(\beta-n\alpha)$$

for every $\beta\in Q^+$, with $K(\eta)=0$ outside $Q^+$.

## Facts & Assumptions

**Given:** A factor hyperplane as in [[lem-shapovalov-determinant-hyperplane-factorization]] and a point $\lambda$ chosen as in the Statement.

[F1] The radical is the unique maximal proper submodule ([[prop-the-shapovalov-radical-is-the-maximal-submodule]]), and a nonzero Verma submodule contains a singular vector ([[lem-every-nonzero-verma-submodule-contains-a-singular-vector]]).

[F2] A singular vector gives a Verma homomorphism ([[thm-universal-property-of-verma-modules]]), every nonzero such homomorphism is injective ([[lem-a-nonzero-verma-homomorphism-is-injective]]), and maps from a simple Verma into another Verma form a space of dimension at most one ([[lem-homomorphisms-from-a-simple-verma-module-have-dimension-at-most-one]]).

[F3] The Casimir acts on a cyclic highest-weight module of highest weight $\eta$ by $(\eta,\eta+2\rho)$ ([[prop-casimir-eigenvalue-on-a-highest-weight-module]]), and Verma weights lie below their highest weight ([[prop-weights-of-a-verma-module-lie-below-lambda]]).

## Proof

**Proof technique:** direct.

1.1 For $0<\gamma\in Q^+$ let $H_\gamma$ be the affine equation $2(\lambda+\rho,\gamma)=(\gamma,\gamma)$. When restricted to $H_{\alpha,n}=H_{n\alpha}$, the equation $H_\gamma$ is identically satisfied only for $\gamma=n\alpha$: equality of its linear directions forces $\gamma=c\alpha$, and then its constant term forces $c=n$. For $M(\mu)$, a possible Casimir equality at lower weight $\mu-\gamma$ gives $2(\lambda-n\alpha+\rho,\gamma)=(\gamma,\gamma)$. This is never an identity on $H_{\alpha,n}$: if $\gamma=c\alpha$ with $c>0$, the left side there is $-cn(\alpha,\alpha)$ while the right side is $c^2(\alpha,\alpha)>0$. Thus all undesired intersections are proper affine subspaces. [given, F3, algebra]

2.1 There are countably many $\gamma\in Q^+$, so omit the intersections in step 1.1. Their union cannot cover the complex affine space $H_{\alpha,n}$: in dimension one it excludes only countably many points, and induction on dimension first chooses the preceding coordinates outside the countably many equations independent of the last coordinate, then chooses the last coordinate outside countably many points. For dimension zero step 1.1 says every omitted intersection is empty. We henceforth use such a $\lambda$. At this point the only possible non-highest singular weight in $M(\lambda)$ is $\mu$, and $M(\mu)$ has no non-highest singular weight. [step 1.1, F3, algebra]

3.1 If $M(\mu)$ had a nonzero proper submodule, [F1] would give a singular vector below $\mu$; its Casimir equality contradicts step 2.1. Thus $M(\mu)$ is simple. Since a determinant is divisible by the equation of $H_{\alpha,n}$, it vanishes at $\lambda$, so $J(\lambda)$ is nonzero. Choose a weight in $J(\lambda)$ of minimum height below $\lambda$; its vector is singular, and step 2.1 forces its weight to be $\mu$. By [F2] it gives an injective map $M(\mu)\hookrightarrow J(\lambda)$. [F1, F2, F3, step 2.1]

4.1 The radical has no weight of height smaller than $\operatorname{ht}(n\alpha)$ below $\lambda$, since its minimum-height weight in that range would be singular and step 2.1 would force weight $\mu$. Hence every vector of $J(\lambda)_\mu$ is singular. The universal property and [F2] show $\dim J(\lambda)_\mu\le1$; the embedded source supplies equality. [F1, F2, step 2.1, step 3.1]

5.1 Suppose $J(\lambda)/M(\mu)\ne0$. It is a weight module with support below $\lambda$ and a weight of minimum height; a vector there is singular in the quotient. The Casimir still acts by the scalar of $M(\lambda)$, so [F3] and step 2.1 force this vector to have weight $\mu$. But step 4.1 says the quotient has zero $\mu$-space, a contradiction. Thus the embedded $M(\mu)$ equals $J(\lambda)$, and the quotient is the simple $L(\lambda)$. [F3, step 2.1, step 4.1, contradiction]

6.1 The uniqueness of the map up to scalar follows from [F2] and its existence. PBW gives $\dim M(\mu)_{\mu-\eta}=K(\eta)$; the image at target weight $\lambda-\beta$ has $\eta=\beta-n\alpha$. Since the image is the radical, it is precisely the kernel of the restricted Shapovalov form. [F2, step 5.1, algebra] ∎
