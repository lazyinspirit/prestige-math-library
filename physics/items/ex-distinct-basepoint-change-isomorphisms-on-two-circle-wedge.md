---
id: ex-distinct-basepoint-change-isomorphisms-on-two-circle-wedge
kind: example
title: 'Two paths can induce distinct change-of-basepoint isomorphisms on $S^1\vee S^1$'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-wedge-of-pointed-spaces, cor-fundamental-group-of-two-circle-wedge,
       thm-fundamental-group-laws, def-path-connected,
       def-homotopy-relative-and-path-homotopy,
       thm-reduced-words-form-the-free-group,
       def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $W=S^1\vee S^1$ have wedge point $w$, and let $z\ne w$ lie on the first circle. Write $a,b\in\pi_1(W,w)$ for the standard loops in the first and second circles. Choose a simple path $\rho$ in the first circle from $w$ to $z$, and put $\sigma=b*\rho$. Then $\rho$ and $\sigma$ have the same endpoints but induce distinct isomorphisms

$$c_\rho,c_\sigma:\pi_1(W,w)\longrightarrow\pi_1(W,z).$$

## Facts & Assumptions

**Given:** The points, paths, and standard loop classes in the Example.

[L1] The group $\pi_1(W,w)$ is the free group $F(a,b)$ on the two standard circle loops ([[cor-fundamental-group-of-two-circle-wedge]]).

[F1] Loop concatenation is the fundamental-group operation, and path reversal represents inversion ([[thm-fundamental-group-laws]]).

[F2] The reduced words on a basis and its formal inverses form the free group on that basis ([[thm-reduced-words-form-the-free-group]]).

## Verification

**Proof technique:** direct.

1.1 For a path $\eta$ from $w$ to $z$, define $c_\eta([\alpha])=[\bar\eta*\alpha*\eta]$. Endpoint-fixed homotopies are preserved by concatenating fixed paths, while the standard cancellation homotopies for $\eta*\bar\eta$ and $\bar\eta*\eta$ show that $c_\eta$ is a homomorphism with inverse $c_{\bar\eta}$. Thus both $\rho$ and $\sigma$ define basepoint-change isomorphisms. [F1, construct]

2.1 Since $\sigma=b*\rho$, reversal of concatenation gives $$c_\sigma([\alpha])=[\bar\rho*\bar b*\alpha*b*\rho]=c_\rho(b^{-1}[\alpha]b).$$ Hence $c_{\bar\rho}c_\rho(a)=a$, whereas $c_{\bar\rho}c_\sigma(a)=b^{-1}ab$ in the identification [L1]. [step 1.1, L1, F1]

3.1 The words $a$ and $b^{-1}ab$ are distinct reduced words by [F2]. Therefore their images under the isomorphism $c_\rho$ are distinct, so $c_\rho\ne c_\sigma$. [step 2.1, F2] ∎
